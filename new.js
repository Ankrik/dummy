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
const submitButton = document.querySelector('.submit');

addFileButton.addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.setAttribute('name', 'files[]');

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.className = 'delete-button';

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
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.className = 'delete-button';

  const urlDiv = document.createElement('div');
  urlDiv.appendChild(urlInput);
  urlDiv.appendChild(deleteButton);
  uploadedFilesUrl.appendChild(urlDiv);
});

// Handle dynamic deletion of uploaded files and URLs
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('delete-button')) {
    target.parentElement.remove();
  }
});

// Handle form submission
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Here, you can implement the logic to submit the form and uploaded files/URLs
  // For demonstration purposes, you can console.log the data:
  const formData = new FormData();
  const fileInputs = document.querySelectorAll('.file-field input[type="file"]');
  const urlInputs = document.querySelectorAll('.url-field input[type="text"]');

  fileInputs.forEach((input) => {
    formData.append('files', input.files[0]);
  });

  urlInputs.forEach((input) => {
    formData.append('urls', input.value);
  });

  console.log('Form data:', formData);
});
