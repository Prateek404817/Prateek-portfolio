// Scroll Indicator functionality
document.querySelector('.scroll-indicator').addEventListener('click', function() {
  window.scrollTo({
    top: document.getElementById('about').offsetTop,
    behavior: 'smooth'
  });
});

// Image Upload Preview
const uploadInput = document.getElementById('upload-photo');
const previewContainer = document.getElementById('preview-container');

uploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewContainer.style.display = 'block';
      previewContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Photo">`;
    }
    reader.readAsDataURL(file);
  }
});

// 🌗 Toggle Dark Mode
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkModeToggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
