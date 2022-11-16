(function() {
  const theme = localStorage.getItem('theme');
  if (!theme) return;
  document.documentElement.classList.add(theme);
})()
