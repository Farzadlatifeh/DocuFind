# DocuFind

A desktop document search and viewing application built with Python and web technologies.

## Overview

DocuFind is a lightweight desktop application that provides a native window interface for document searching and viewing for .docx, .pdf and .xlsx file formats. It combines the power of web technologies (HTML, JavaScript) with Python's desktop GUI capabilities using `webview`.

## Features

- Native desktop window interface
- Local HTTP server for serving the web interface
- Document search functionality for both names and file contents
- Support for multiple document formats (.docx, .pdf and .xlsx)
- Cross-platform compatibility
- Native support for RTL (Persian / Arabic) file name and contents

## Technology Stack

### Backend
- **Python 3** - Core application logic
- **pywebview** - Desktop window management
- **http.server** - Built-in Python HTTP server

### Frontend
- **Tailwind CSS** - Styling framework
- **JSZip** - ZIP file handling in browser
- **Mammoth.js** - DOCX file reading
- **SheetJS (xlsx)** - Excel file reading

## Project Structure

```
DocuFind/
├── DocuFind.py          # Main Python application
├── DocuFind.html        # Web interface
├── fonts/               # Custom fonts directory
├── icon.ico             # Application icon
├── tailwind.js          # Tailwind CSS framework
├── jszip.min.js         # JSZip library
├── mammoth.browser.min.js  # Mammoth.js for DOCX files
└── xlsx.full.min.js     # SheetJS for Excel files
```

## Installation

### Prerequisites

- Python 3.6 or higher
- pip package manager

### Setup

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd DocuFind
   ```

2. Install required dependencies:
   ```bash
   pip install pywebview
   ```

## Usage

Run the application:

```bash
python DocuFind.py
```

The application will:
1. Start a local HTTP server on port 65432
2. Open a native desktop window displaying the DocuFind interface
3. Allow you to search and view documents

## Building as Executable

To create a standalone executable using PyInstaller:

```bash
pip install pyinstaller
pyinstaller --noconsole --icon=icon.ico --onefile --add-data "DocuFind.html;." --add-data "icon.ico;." --add-data "jszip.min.js;." --add-data "mammoth.browser.min.js;." --add-data "tailwind.js;." --add-data "xlsx.full.min.js;." --add-data "fonts;fonts" DocuFind.py
```

This will create a distributable executable in the `dist` folder.

## Configuration

- **Port**: The application runs on port `65432` by default (configurable in `DocuFind.py`)
- **Window Title**: "DocuFind" (configurable in `DocuFind.py`)

## Development

For development purposes, you can:
1. Modify `DocuFind.html` to change the UI
2. Modify `DocuFind.py` to change application behavior
3. Run the application to test changes

## Troubleshooting

### Common Issues

1. **Application won't start**: Ensure `pywebview` is installed correctly
   ```bash
   pip install --upgrade pywebview
   ```

2. **File not found errors**: Make sure all required files are in the same directory as `DocuFind.py`

3. **Port already in use**: Change the `PORT` variable in `DocuFind.py` to a different port number

## License

This project is provided as-is for document search and viewing purposes.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Acknowledgments

- [pywebview](https://github.com/r0x0r/pywebview) - Cross-platform native webview
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Mammoth.js](https://mwilliamson.github.io/mammoth.js/) - DOCX to HTML converter
- [SheetJS](https://sheetjs.com/) - Excel spreadsheet parser
- [JSZip](https://stuk.github.io/jszip/) - ZIP file library
