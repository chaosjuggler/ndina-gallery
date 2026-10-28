/* NDINA Gallery — site-wide announcement bar. Add once per page:
   <script src="/assets/js/announce.js" defer></script>            */
(function () {
  var URL = 'https://shop.ndina.gallery/';
  var TEXT = 'NDINA Shop is open! Celebrate with us - 15% off all prints this holiday season with code: MARAUTAKI15';
  var DELAY = 2000;                                        // ms after page open
  if (document.getElementById('ndina-announce')) return;
  var css = '#ndina-announce{display:block;box-sizing:border-box;width:100%;background:#F2C4B5;color:#7A2E18;' +
    'text-align:center;font:500 14px/1.3 Jost,"Helvetica Neue",Arial,sans-serif;letter-spacing:.04em;' +
    'text-decoration:none;border-bottom:0 solid #E08D74;position:relative;z-index:1000;cursor:pointer;' +
    'max-height:0;overflow:hidden;opacity:0;transform:translateY(-100%);' +
    'transition:max-height .8s cubic-bezier(.22,1,.36,1),opacity .6s ease,transform .8s cubic-bezier(.22,1,.36,1)}' +
    '#ndina-announce.show{max-height:120px;opacity:1;transform:none;border-bottom-width:1px}' +
    '#ndina-announce .in{display:block;padding:10px 16px}' +
    '#ndina-announce:hover{background:#EDB5A3}' +
    '#ndina-announce .sh{font-weight:600;text-decoration:underline;text-underline-offset:3px;' +
    'background:linear-gradient(100deg,#7A2E18 0%,#7A2E18 38%,#B4492B 48%,#E08D74 50%,#B4492B 52%,#7A2E18 62%,#7A2E18 100%);' +
    'background-size:250% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;' +
    'animation:ndinaShine 2.6s linear infinite}' +
    '@keyframes ndinaShine{from{background-position:150% 0}to{background-position:-100% 0}}' +
    '@media(max-width:480px){#ndina-announce{font-size:13px;line-height:1.35}#ndina-announce .in{padding:9px 14px}}' +
    '@media(prefers-reduced-motion:reduce){#ndina-announce{transition:none}#ndina-announce .sh{animation:none;-webkit-text-fill-color:#7A2E18;color:#7A2E18}}';
  var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  var a = document.createElement('a'); a.id = 'ndina-announce'; a.href = URL; a.target = '_self';
  a.setAttribute('aria-label', TEXT);
  a.innerHTML = '<span class="in"><span class="sh">' + TEXT + ' &rarr;</span></span>';
  if (location.pathname === '/' || location.pathname === '/index.html') {
    // home page: overlay the bar so it never pushes the full-height hero down (avoids a layout jump)
    var o = document.createElement('style');
    o.textContent = '#ndina-announce{position:absolute;top:0;left:0;right:0;z-index:1000}';
    document.head.appendChild(o);
  }
  document.body.insertBefore(a, document.body.firstChild);
  setTimeout(function () { a.classList.add('show'); }, DELAY);
})();
