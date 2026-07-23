document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('navToggle');
  var nav = document.getElementById('treeNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? 'close' : 'menu';
  });
});
