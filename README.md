# DocuFind – Office Word Search Engine

A desktop application for searching and extracting content from Microsoft Word documents (.docx), Excel spreadsheets (.xlsx), and PDF files. Built with Python, pywebview, and modern JavaScript libraries.

## Features

- 🔍 **Full-text search** across Word documents, Excel files, and PDFs
- 📄 **Extract content** from headers, footers, and body text
- 🎨 **Modern UI** with Tailwind CSS and responsive design
- 🚀 **Native desktop app** using pywebview
- 📦 **Single executable** distribution via PyInstaller
- ⚡ **Fast processing** with client-side JavaScript libraries

## Technologies Used

### Backend (Python)
- [pywebview](https://pywebview.flowrl.com/) - Native web view window
- `http.server` - Local HTTP server
- `threading` - Concurrent server execution
- [PyInstaller](https://pyinstaller.org/) - Executable packaging

### Frontend (JavaScript)
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [JSZip](https://stuk.github.io/jszip/) - ZIP file handling for Office formats
- [Mammoth.js](https://mwilliamson.github.io/mammoth.js/) - DOCX to HTML conversion
- [SheetJS (xlsx)](https://sheetjs.com/) - Excel file parsing
- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF rendering and text extraction
- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn) - Persian/Arabic font support

## Project Structure

```
DocuFind/
├── DocuFind.py              # Main Python application
├── DocuFind.html            # Web interface
├── DocuFind.spec            # PyInstaller specification
├── icon.ico                 # Application icon
├── fonts/                   # Custom fonts directory
├── tailwind.js              # Tailwind CSS library
├── jszip.min.js             # JSZip library
├── mammoth.browser.min.js   # Mammoth.js library
├── xlsx.full.min.js         # SheetJS library
└── README.md                # This file
```

## Installation

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Development Setup

1. **Clone or download** this repository

2. **Install dependencies**:
   ```bash
   pip install pywebview pyinstaller
   ```

3. **Run the application**:
   ```bash
   python DocuFind.py
   ```

## Building the Executable

To create a standalone executable:

```bash
pyinstaller DocuFind.spec
```

The compiled executable will be in the `dist/` directory.

### Build Options

- **Windows**: Produces `.exe` file
- **macOS**: Produces `.app` bundle
- **Linux**: Produces executable binary

## Usage

1. **Launch the application** by running `DocuFind.py` or the compiled executable
2. **Select documents** you want to search through
3. **Enter search terms** in the search box
4. **View results** with highlighted matches
5. **Extract content** from headers, footers, and body text

## How It Works

1. The Python application starts a local HTTP server on port `65432`
2. A native web view window opens displaying `DocuFind.html`
3. JavaScript libraries process Office documents client-side
4. Search and extraction happen in the browser environment
5. Results are displayed with syntax highlighting and formatting

## Configuration

### Server Port

Default port is `65432`. To change it, modify the `PORT` variable in `DocuFind.py`:

```python
PORT = 65432  # Change to your preferred port
```

### Bundled Files

The PyInstaller spec file includes all necessary assets:

```python
datas=[
    ('DocuFind.html', '.'),
    ('icon.ico', '.'),
    ('jszip.min.js', '.'),
    ('mammoth.browser.min.js', '.'),
    ('tailwind.js', '.'),
    ('xlsx.full.min.js', '.'),
    ('fonts', 'fonts')
]
```

## Supported File Formats

| Format | Extension | Library |
|--------|-----------|---------|
| Word Document | .docx | Mammoth.js + JSZip |
| Excel Spreadsheet | .xlsx | SheetJS (xlsx) |
| PDF Document | .pdf | PDF.js |

## Troubleshooting

### Application won't start
- Ensure all required files are in the same directory
- Check if port 65432 is available
- Verify Python dependencies are installed

### Documents not loading
- Ensure files are not corrupted
- Check file extensions (.docx, .xlsx, .pdf)
- Verify browser console for JavaScript errors

### Build fails
- Update PyInstaller: `pip install --upgrade pyinstaller`
- Ensure all data files are referenced in `.spec` file
- Check for missing dependencies

## License

This project is provided as-is for educational and personal use.

## Credits

- **Tailwind CSS** - Utility-first CSS framework
- **Mammoth.js** - DOCX conversion library
- **JSZip** - ZIP handling library
- **SheetJS** - Excel parsing library
- **PDF.js** - PDF rendering library
- **pywebview** - Native web view wrapper

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests for improvements.

---

**DocuFind** - Making document search simple and efficient.
