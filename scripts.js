document.getElementById('musicFile').addEventListener('change', function() {
    document.getElementById('selectedFile').innerText = this.files[0].name;
});

function uploadFile() {
    // Handle file upload logic here (e.g., send the file to the server)
    // Add logic to process the file and display it in the "Previously Uploaded Files" section
    // For demo purposes, you can just update the UI without actual file upload logic
    const selectedFileName = document.getElementById('selectedFile').innerText;

    // Create a new file item element
    const fileItem = document.createElement('div');
    fileItem.classList.add('file-item');
    fileItem.innerHTML = `
        <span class="file-name">${selectedFileName}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Append the new file item to the files container
    const filesContainer = document.querySelector('.files-container');
    filesContainer.appendChild(fileItem);
}
