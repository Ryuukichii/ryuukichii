/* ===== Genre page: shows events for ?g=<genre> (set by the Genre dropdown) ===== */
(function () {
  var g = new URLSearchParams(location.search).get('g');
  if (!g || GENRES.indexOf(g) === -1) g = GENRES[0];

  document.getElementById('genreTitle').textContent = g;
  document.title = 'Eventstage | ' + g;

  var list = ES.sorted.filter(function (e) { return e.genres.indexOf(g) !== -1; });
  document.getElementById('gGrid').innerHTML = list.map(function (e) {
    return '<a class="g-card" href="' + ES.eventUrl(e) + '">' + ES.poster(e.img, e.color, e.title) +
           '<h3>' + ES.esc(e.title) + '</h3></a>';
  }).join('');
  document.getElementById('empty').hidden = list.length > 0;
})();
