/* ===== Event details page: opens with details.html?id=<event-id> ===== */
(function () {
  var id = new URLSearchParams(location.search).get('id') || decodeURIComponent(location.hash.slice(1));
  var e = null;
  for (var i = 0; i < EVENTS.length; i++) { if (EVENTS[i].id === id) { e = EVENTS[i]; break; } }

  var root = document.getElementById('detail');
  if (!e) { document.getElementById('notFound').hidden = false; return; }

  var d = DETAILS[e.id] || DETAILS[DETAILS_ALIASES[e.id]] || {};
  var about = d.about || DETAILS_DEFAULT.about;
  var sales = d.sales || DETAILS_DEFAULT.sales;
  var tickets = d.tickets || DETAILS_DEFAULT.tickets;
  var buy = d.buyLink || e.link || '#';

  document.title = 'Eventstage | ' + e.title;

  function peso(n) {
    function f(x) { return '\u20B1 ' + Number(x).toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }
    if (typeof n === 'string') {
      var parts = n.split('-');
      var allNumbers = parts.every(function (p) { return p.trim() !== '' && !isNaN(Number(p)); });
      if (!allNumbers) return n;            // plain text such as "TBA" or "Sold out"
      n = parts;
    }
    if (Array.isArray(n)) return n.map(f).join(' - ');
    return f(n);
  }

  var html = '';

  // Banner
  html += '<div class="banner">' + ES.poster(d.banner || e.img, e.color, e.title) + '</div>';

  // Title / date / venue + Buy Ticket + sale schedule
  html += '<section class="info"><div class="info-left">' +
    '<div class="d-date">' + ES.dayName(e) + ' | ' + ES.parse(e.date).toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'}) + '</div>' +
    '<h1 class="d-title">' + ES.esc(e.title) + '</h1>' +
    '<p class="d-venue">' + ES.esc(e.venue) + '</p>' +
    '<div class="chips">' + e.genres.map(function (g) {
      return '<a class="chip" href="../genre/genre.html?g=' + encodeURIComponent(g) + '">' + ES.esc(g) + '</a>';
    }).join('') + '</div></div>' +
    '<div class="info-right"><a class="buy-big" href="' + buy + '">Buy Ticket</a>' +
    (sales.length ? '<div class="sales">' + sales.map(function (s) {
      return '<div><b>' + ES.esc(s.label) + ':</b> ' + ES.esc(s.value) + '</div>';
    }).join('') + '</div>' : '') + '</div></section>';

  // About
  html += '<section class="about"><h2>About</h2><p>' + ES.esc(about) + '</p></section>';

  // Seat map | Tickets | Map
  html += '<section class="cols">';
  html += d.seatmap
    ? '<div class="seatmap"><img src="' + d.seatmap + '" alt="Seat map" onerror="this.parentNode.style.display=\'none\'"></div>'
    : '<div></div>';
  html += '<div class="tickets"><h2>TICKETS</h2>' + (tickets.length
    ? tickets.map(function (t) {
        return '<div class="tix' + (t.soldOut ? ' soldout' : '') + '"><b>' + ES.esc(t.name) + '</b><span class="price">' + peso(t.price) + '</span></div>';
      }).join('')
    : '<p style="padding:16px 0">Ticket prices to be announced.</p>') + '</div>';
  html += '<div class="map"><iframe title="Venue map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=' +
    encodeURIComponent(e.venue + ', Philippines') + '&output=embed"></iframe></div>';
  html += '</section>';

  html += '<div class="back"><a class="back-link" href="../events/events.html">&larr; Back to all events</a></div>';

  root.innerHTML = html;
})();
 