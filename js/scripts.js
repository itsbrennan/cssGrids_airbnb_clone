const floatingBtn = document.querySelector('.footerBtn');
const footer = document.querySelector('.footer');

floatingBtn.addEventListener('click', () => {
  // select the footer nav
  footer.classList.toggle('active');
});
