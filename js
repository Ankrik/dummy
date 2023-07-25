// Handle the "Other" option in the brand dropdown
const brandDropdown = document.getElementById('brand-names');
const otherBrandField = document.getElementById('other-brand');

brandDropdown.addEventListener('change', () => {
  if (brandDropdown.value === 'other') {
    otherBrandField.style.display = 'block';
  } else {
    otherBrandField.style.display = 'none';
  }
});

// Add functionality to the "Add File" and "Add URL" buttons
const addFileButton = document.querySelector('.add-file');
const addUrlButton = document.querySelector('.add-url');
const uploadedFilesFile = document.getElementById('uploaded-files-file');
const uploadedFilesUrl = document.getElementById('uploaded-files-url');

addFileButton.addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.setAttribute('name', 'files[]');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-file';

  const fileDiv = document.createElement('div');
  fileDiv.appendChild(fileInput);
  fileDiv.appendChild(deleteButton);
  uploadedFilesFile.appendChild(fileDiv);
});

addUrlButton.addEventListener('click', () => {
  const urlInput = document.createElement('input');
  urlInput.type = 'text';
  urlInput.setAttribute('name', 'urls[]');
  urlInput.placeholder = 'Enter URL';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-url';

  const urlDiv = document.createElement('div');
  urlDiv.appendChild(urlInput);
  urlDiv.appendChild(deleteButton);
  uploadedFilesUrl.appendChild(urlDiv);
});

// Handle dynamic deletion of uploaded files and URLs
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('delete-file')) {
    target.parentElement.remove();
  } else if (target.classList.contains('delete-url')) {
    target.parentElement.remove();
  }
});
