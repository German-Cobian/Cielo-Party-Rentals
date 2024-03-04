// addEventListener for the nav
const spanishSection = document.getElementById('spanish');
const englishSection = document.getElementById('english');

const spanishLink = document.querySelector('.spanish-link');
const englishLink = document.querySelector('.english-link');

spanishSection.style.display = 'block';
englishSection.style.display = 'none';

englishLink.onclick = function () {
  englishSection.style.display = 'block';
  spanishSection.style.display = 'none';
};

spanishLink.onclick = function () {
  spanishSection.style.display = 'block';
  englishSection.style.display = 'none';
};

