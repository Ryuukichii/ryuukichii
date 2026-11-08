/* ===== Events page: list, live search, optional ?venue= filter, #event-id jump ===== */
(function () {
  var grid = document.getElementById('grid');
  var empty = document.getElementById('empty');
  var note = document.getElementById('filterNote');
  var input = document.getElementById('searchInput');
  var params = new URLSearchParams(location.search);
  var venue = params.get('venue') || '';

  input.value = params.get('q') || '';

  function render() {
    var q = input.value.trim().toLowerCase();
    var list = ES.sorted.filter(function (e) {
      return (!venue || e.venue === venue) &&
             (!q || (e.title + ' ' + e.venue + ' ' + e.genres.join(' ')).toLowerCase().indexOf(q) !== -1);
    });
    grid.innerHTML = list.map(function (e) {
      var url = ES.eventUrl(e);
      return '<article class="card" id="' + e.id + '">' +
        '<div class="date">' + ES.dayName(e) + ' | ' + ES.shortDate(e) + '</div>' +
        '<a href="' + url + '">' + ES.poster(e.img, e.color, e.title) +
        '<h3>' + ES.esc(e.title) + '</h3></a>' +
        '<p class="venue">' + ES.esc(e.venue) + '</p>' +
        '<a class="buy" href="' + (e.link && e.link !== '#' ? ES.esc(e.link) : url) + '" target="_blank" rel="noopener">BUY TICKET</a></article>';
    }).join('');
    empty.hidden = list.length > 0;
    note.innerHTML = venue ? 'Showing events at <strong>' + ES.esc(venue) + '</strong><a href="events.html">Show all</a>' : '';
  }
  input.addEventListener('input', render);
  render();

  // Arriving with #event-id: scroll to that event
  if (location.hash) {
    var t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (t) {
      t.scrollIntoView({behavior: 'smooth', block: 'center'});
      t.classList.add('flash');
      setTimeout(function () { t.classList.remove('flash'); }, 2000);
    }
  }
})();
