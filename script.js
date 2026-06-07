document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => links.classList.toggle('open'));
function handleForm(event) {
  event.preventDefault();
  alert('Thanks! This demo form is not connected yet. Replace it with WhatsApp, email, Netlify Forms, or Google Forms.');
  return false;
}
