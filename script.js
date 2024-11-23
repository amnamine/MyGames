function downloadFile(fileName) {
    const filePath = `downloads/${fileName}`;
    
    // Create a temporary <a> element
    const anchor = document.createElement('a');
    anchor.href = filePath;
    anchor.download = fileName;
    
    // Append the anchor to the body temporarily
    document.body.appendChild(anchor);
    
    // Trigger the download
    anchor.click();
    
    // Remove the anchor element to prevent duplicate downloads
    document.body.removeChild(anchor);
}
