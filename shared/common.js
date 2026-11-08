/* ===== Eventstage shared behaviour (loaded by every page after data.js) =====
   - helpers used by page scripts (window.ES)
   - dark mode, Genre dropdown, header search */
(function () {
  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var ES = window.ES = {};

  ES.esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  };
  ES.parse = function (s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); };
  ES.dayName = function (e) { return DAYS[ES.parse(e.date).getDay()]; };
  ES.shortDate = function (e) { var d = ES.parse(e.date); return MONTHS[d.getMonth()] + ' ' + ('0' + d.getDate()).slice(-2); };
  // Every concert card/link on the site opens its details page
  ES.eventUrl = function (e) { return '../details/details.html?id=' + e.id; };
  ES.sorted = EVENTS.slice().sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });

  // Poster box: colored placeholder underneath, real image on top (hidden if the file is missing)
  ES.poster = function (img, color, title) {
    return '<div class="poster"><div class="fallback" style="background:' + color + '">' + ES.esc(title) + '</div>' +
           '<img src="' + img + '" alt="' + ES.esc(title) + '" onerror="this.style.display=\'none\'"></div>';
  };

  var body = document.body;
  var page = body.getAttribute('data-page');

  // ---- Dark mode (remembered between pages) ----
  try { if (localStorage.getItem('eventstage-theme') === 'dark') body.classList.add('dark'); } catch (e) {}
  var toggle = document.getElementById('themeToggle');
  if (toggle) toggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    try { localStorage.setItem('eventstage-theme', body.classList.contains('dark') ? 'dark' : 'light'); } catch (e) {}
  });

  // ---- Genre dropdown ----
  var dd = document.getElementById('genreDropdown');
  var btn = document.getElementById('genreBtn');
  var menu = document.getElementById('genreMenu');
  if (dd && btn && menu) {
    var current = new URLSearchParams(location.search).get('g');
    menu.innerHTML = GENRES.map(function (g) {
      return '<a href="../genre/genre.html?g=' + encodeURIComponent(g) + '"' +
             (page === 'genre' && g === current ? ' class="sel"' : '') + '>' + ES.esc(g) + '</a>';
    }).join('');
    if (page === 'genre') btn.classList.add('active');
    btn.addEventListener('click', function () { dd.classList.toggle('open'); });
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) dd.classList.remove('open'); });
  }

  
  // ---- Header search: filters live on the Events page, otherwise jumps there ----
  var form = document.getElementById('searchForm');
  var input = document.getElementById('searchInput');
  if (form && input) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (page === 'events') return;
      var q = input.value.trim();
      location.href = '../events/events.html' + (q ? '?q=' + encodeURIComponent(q) : '');
    });
  }

})();
