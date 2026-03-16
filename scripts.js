/* ThreatForged AI — Shared Scripts */
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}
window.addEventListener('resize', function () {
  if (window.innerWidth > 900) closeMenu();
});
window.addEventListener('scroll', function () {
  if (document.getElementById('mobile-menu').classList.contains('open')) closeMenu();
});
