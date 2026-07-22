import http.server
import socketserver
import threading
import time
import os
import sys                     # <--- ADD THIS
import webview

PORT = 65432
FILENAME = "DocuFind.html"

def resource_path(relative_path):
    """ Get absolute path to resource, works for dev and for PyInstaller """
    if getattr(sys, 'frozen', False):   # running as .exe
        base_path = sys._MEIPASS
    else:
        base_path = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(base_path, relative_path)

def run_server():
    """Starts the local HTTP server."""
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f" Server running at http://localhost:{PORT}")
        httpd.serve_forever()

def main():
    # Get the correct base directory (bundled folder)
    base = os.path.dirname(resource_path(FILENAME))   # folder containing DocuFind.html

    # Switch working directory to that folder
    os.chdir(base)

    # Now the file check works correctly
    if not os.path.exists(FILENAME):
        print(f" Error: {FILENAME} not found in the bundle directory.")
        return

    # Start server in a background thread
    server_thread = threading.Thread(target=run_server, daemon=True)
    server_thread.start()

    # Wait briefly for the server to initialize
    time.sleep(1)

    # Build the URL that points to your local server
    url = f"http://localhost:{PORT}/{FILENAME}"
    print(f" Opening {url} in a web view window.")

    # Create and show a native web view window
    webview.create_window(
        "DocuFind",
        url,
        text_select=True,
        zoomable=True
    )
    webview.start(private_mode=True)

    print(" Window closed. Server will stop when program exits.")

if __name__ == "__main__":
    main()