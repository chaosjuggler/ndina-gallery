/* NDINA Gallery — site-wide announcement bar. Add once per page:
   <script src="/assets/js/announce.js" defer></script>            */
(function () {
  var URL = '/exhibitions/artwaka-auckland-2026/catalogue/';
  var TEXT = 'Artwaka Auckland Exhibition Catalogue';
  var DELAY = 2000;                                        // ms after page open
  if (location.pathname.indexOf(URL) === 0) return;       // not on the catalogue itself
  if (document.getElementById('ndina-announce')) return;
  var css = '#ndina-announce{display:block;box-sizing:border-box;width:100%;background:#cfe8fb;color:#0b3a5e;' +
    'text-align:center;font:500 14px/1.3 Jost,"Helvetica Neue",Arial,sans-serif;letter-spacing:.04em;' +
    'text-decoration:none;border-bottom:0 solid #aed3f0;position:relative;z-index:1000;cursor:pointer;' +
    'max-height:0;overflow:hidden;opacity:0;transform:translateY(-100%);' +
    'transition:max-height .8s cubic-bezier(.22,1,.36,1),opacity .6s ease,transform .8s cubic-bezier(.22,1,.36,1)}' +
    '#ndina-announce.show{max-height:60px;opacity:1;transform:none;border-bottom-width:1px}' +
    '#ndina-announce .in{display:block;padding:10px 16px}' +
    '#ndina-announce:hover{background:#bfe0f8}' +
    '#ndina-announce .sh{font-weight:600;text-decoration:underline;text-underline-offset:3px;' +
    'background:linear-gradient(100deg,#0b3a5e 0%,#0b3a5e 38%,#5fb0ee 48%,#ffffff 50%,#5fb0ee 52%,#0b3a5e 62%,#0b3a5e 100%);' +
    'background-size:250% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;' +
    'animation:ndinaShine 2.6s linear infinite}' +
    '@keyframes ndinaShine{from{background-position:150% 0}to{background-position:-100% 0}}' +
    '@media(max-width:480px){#ndina-announce{font-size:13px}#ndina-announce .in{padding:9px 12px}}' +
    '@media(prefers-reduced-motion:reduce){#ndina-announce{transition:none}#ndina-announce .sh{animation:none;-webkit-text-fill-color:#0b3a5e;color:#0b3a5e}}';
  var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  var a = document.createElement('a'); a.id = 'ndina-announce'; a.href = URL;
  a.setAttribute('aria-label', TEXT);
  a.innerHTML = '<span class="in"><span class="sh">' + TEXT + ' &rarr;</span></span>';
  document.body.insertBefore(a, document.body.firstChild);
  setTimeout(function () { a.classList.add('show'); }, DELAY);
})();
