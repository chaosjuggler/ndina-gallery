// NDINA Gallery — shared site behavior: dark-mode toggle + mobile nav drawer.
// Loaded once per page by _layouts/default.html.

(function () {
  // ---- dark mode toggle (any element with class "theme-toggle") ----
  function setTheme(dark) {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('ndina-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('ndina-theme', 'light');
    }
  }
  function toggleTheme() {
    setTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
  }
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', toggleTheme);
  });

  // ---- mobile hamburger menu ----
  var burger = document.getElementById('burgerBtn');
  var drawer = document.getElementById('drawer');
  var backdrop = document.getElementById('backdrop');
  var closeBtn = document.getElementById('drawerClose');

  if (burger && drawer && backdrop) {
    function openMenu() {
      document.body.classList.add('menu-open');
      burger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    }
    burger.addEventListener('click', function () {
      document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }
})();
