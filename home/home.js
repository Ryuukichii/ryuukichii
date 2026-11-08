/* ===== Home page: Feature carousel ===== */
(function () {
  var track = document.getElementById('track');
  var dotsEl = document.getElementById('dots');
  var list = ES.sorted;

  track.innerHTML = list.map(function (e) {
    return '<a class="slide" href="' + ES.eventUrl(e) + '">' +
      ES.poster(e.img, e.color, e.title) +
      '<h3>' + ES.esc(e.title) + '</h3>' +
      '<p>' + ES.shortDate(e) + ' | ' + ES.dayName(e) + '</p>' +
      '<p>' + ES.esc(e.venue) + '</p></a>';
  }).join('');
  dotsEl.innerHTML = list.map(function (_, i) {
    return '<button class="dot" data-i="' + i + '" aria-label="Go to event ' + (i + 1) + '"></button>';
  }).join('');

  function step() { var s = track.querySelector('.slide'); return (s ? s.offsetWidth : 200) + 50; }
  document.getElementById('prev').addEventListener('click', function () { track.scrollBy({left: -step()}); });
  document.getElementById('next').addEventListener('click', function () { track.scrollBy({left: step()}); });

  dotsEl.addEventListener('click', function (e) {
    var i = e.target.getAttribute('data-i'); if (i === null) return;
    var s = track.children[i];
    track.scrollTo({left: s.offsetLeft - track.offsetLeft - (track.clientWidth - s.offsetWidth) / 2});
  });

  function updateDots() {
    var slides = Array.prototype.slice.call(track.children);
    if (!slides.length) return;
    var mid = track.scrollLeft + track.clientWidth / 2, best = 0, bestDist = Infinity;
    slides.forEach(function (s, i) {
      var d = Math.abs(s.offsetLeft - track.offsetLeft + s.offsetWidth / 2 - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    if (track.scrollLeft < 5) best = 0;
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) best = slides.length - 1;
    Array.prototype.forEach.call(dotsEl.children, function (d, i) { d.classList.toggle('active', i === best); });
  }
  track.addEventListener('scroll', updateDots);
  window.addEventListener('resize', updateDots);
  updateDots();
})();
