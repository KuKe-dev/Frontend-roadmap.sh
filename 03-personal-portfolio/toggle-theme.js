const theme = localStorage.getItem('theme');

if (theme) {
  document.body.setAttribute('data-theme', theme);
} else {
  localStorage.setItem('theme', 'dark');
}

function toggleTheme() {
  const body = document.body;
  const theme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
}