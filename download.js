// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const fileName = urlParams.get('file');
const securityKey = urlParams.get('key');

// Display the file name (if the element exists)
const fileNameElement = document.getElementById('fileName');
if (fileNameElement) {
    fileNameElement.textContent = fileName ? `File: ${fileName}` : 'No file specified.';
}

// Get elements for download and user feedback
const downloadButton = document.getElementById('downloadButton');
const downloadMessage = document.getElementById('downloadMessage');
const securityKeyInput = document.getElementById('securityKeyInput');

// Ensure elements exist before adding event listeners
if (downloadButton && securityKeyInput && downloadMessage) {
    downloadButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents accidental page reload if inside a form

        const enteredKey = securityKeyInput.value.trim(); // Trim input to avoid accidental spaces

        if (!fileName) {
            downloadMessage.textContent = 'Error: No file specified.';
            downloadMessage.style.color = 'red';
            return;
        }

        if (enteredKey === securityKey) {
            const fileURL = `https://raw.githubusercontent.com/fileshareapp01/fileshareapp01.github-io/main/${encodeURIComponent(fileName)}`;

            // Provide user feedback before initiating download
            downloadMessage.textContent = 'Downloading...';
            downloadMessage.style.color = 'blue';

            // Create a temporary anchor element for downloading the file
            const a = document.createElement('a');
            a.href = fileURL;
            a.download = fileName; // Suggests a filename for download
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // Update success message
            downloadMessage.textContent = 'File download initiated!';
            downloadMessage.style.color = 'green';
        } else {
            // Security key does not match
            downloadMessage.textContent = 'Invalid security key!';
            downloadMessage.style.color = 'red';
        }
    });
} else {
    console.error('Error: Missing required elements in HTML.');
}
