/* ===== Venue page: venue cards with star ratings ===== */
(function () {
  function stars(r) {
    // 5 grey stars with a gold copy clipped to the rating percentage
    var pct = Math.round(r / 5 * 100);
    return '<span class="stars" aria-label="' + r + ' out of 5">★★★★★<span class="fill" style="width:' + pct + '%">★★★★★</span></span>';
  }
  document.getElementById('venueGrid').innerHTML = VENUES.map(function (v) {
    return '<a class="venue-card" href="../events/events.html?venue=' + encodeURIComponent(v.name) + '">' +
      ES.poster(v.img, v.color, v.name) +
      '<h3>' + ES.esc(v.name) + '</h3>' +
      '<div class="rating">' + stars(v.rating) + '<span class="score">' + v.rating.toFixed(1) + '</span></div></a>';
  }).join('');
})();
