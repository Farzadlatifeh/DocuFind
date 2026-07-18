async function extractDrawingText(arrayBuffer) {
    const JSZip = window.JSZip || require('jszip'); // adjust to your environment
    const zip = await JSZip.loadAsync(arrayBuffer);
    const textParts = [];

    // Namespaces
    const NS_W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
    const NS_A = 'http://schemas.openxmlformats.org/drawingml/2006/main';

    // Helper: get text from any XML string
    function parseXmlText(xmlStr) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlStr, 'text/xml');

        // 1. Word text boxes (w:txbxContent)
        const txbxNodes = xmlDoc.getElementsByTagNameNS(NS_W, 'txbxContent');
        for (const txbx of txbxNodes) {
            const paragraphs = txbx.getElementsByTagNameNS(NS_W, 'p');
            for (const p of paragraphs) {
                const runs = p.getElementsByTagNameNS(NS_W, 'r');
                let line = '';
                for (const r of runs) {
                    const tElements = r.getElementsByTagNameNS(NS_W, 't');
                    if (tElements.length) line += tElements[0].textContent || '';
                }
                if (line.trim()) textParts.push(line.trim());
            }
        }

        // 2. DrawingML text (a:t) – covers many shapes and SmartArt diagrams
        const aTNodes = xmlDoc.getElementsByTagNameNS(NS_A, 't');
        for (const t of aTNodes) {
            const txt = (t.textContent || '').trim();
            if (txt) textParts.push(txt);
        }
    }

    // Process main document + headers + footers
    const filesToProcess = ['word/document.xml'];

    // Find all header/footer XML files in word/
    const wordFolder = zip.folder('word');
    if (wordFolder) {
        wordFolder.forEach((relativePath, file) => {
            if (/^header\d*\.xml$/.test(relativePath) || /^footer\d*\.xml$/.test(relativePath)) {
                filesToProcess.push('word/' + relativePath);
            }
        });
    }

    for (const path of filesToProcess) {
        const file = zip.file(path);
        if (!file) continue;
        const xmlStr = await file.async('text');
        parseXmlText(xmlStr);
    }

    // Remove duplicates (common in multiple files) and join
    const unique = [...new Set(textParts)];
    return unique.join('\n');
}