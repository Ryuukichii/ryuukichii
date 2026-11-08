/* ===== Calendar page: month grid + list of concerts for the month ===== */
(function () {
  var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var DOW = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
  var grid = document.getElementById('calGrid');
  var title = document.getElementById('calTitle');
  var mini = document.getElementById('miniGrid');
  var sub = document.getElementById('calSub');

  var list = ES.sorted;
  var start = ES.parse(list[0].date);           // open on the month of the first event
  var year = start.getFullYear(), month = start.getMonth(), selected = null;

  function pad(n) { return ('0' + n).slice(-2); }
  function key(d) { return year + '-' + pad(month + 1) + '-' + pad(d); }

  function render() {
    title.textContent = MONTHS[month] + ' ' + year;
    var startDow = new Date(year, month, 1).getDay();
    var dim = new Date(year, month + 1, 0).getDate();
    var prevDim = new Date(year, month, 0).getDate();
    var rows = Math.ceil((startDow + dim) / 7);
    var byDate = {};
    list.forEach(function (e) { (byDate[e.date] = byDate[e.date] || []).push(e); });

    var html = DOW.map(function (d) { return '<div class="dow">' + d + '</div>'; }).join('');
    for (var i = 0; i < rows * 7; i++) {
      var n = i - startDow + 1;
      if (n < 1) html += '<div class="day other">' + (prevDim + n) + '</div>';
      else if (n > dim) html += '<div class="day other">' + (n - dim) + '</div>';
      else {
        var k = key(n), evs = byDate[k];
        if (evs) html += '<button type="button" class="day' + (k === selected ? ' sel' : '') + '" data-k="' + k +
                         '" title="' + evs.length + ' concert' + (evs.length > 1 ? 's' : '') + '">' + n + '</button>';
        else html += '<div class="day">' + n + '</div>';
      }
    }
    grid.innerHTML = html;

    var prefix = year + '-' + pad(month + 1);
    var shown = list.filter(function (e) { return selected ? e.date === selected : e.date.indexOf(prefix) === 0; });
    mini.innerHTML = shown.map(function (e) {
      return '<a class="mini" href="' + ES.eventUrl(e) + '">' + ES.poster(e.img, e.color, e.title) +
             '<h3>' + ES.esc(e.title) + '</h3><p>' + ES.shortDate(e) + ' | ' + ES.dayName(e) + '</p>' +
             '<p>' + ES.esc(e.venue) + '</p></a>';
    }).join('');
    sub.textContent = shown.length
      ? (selected ? 'Showing ' + ES.shortDate(shown[0]) + ' only - click the date again to show the whole month.' : '')
      : 'No concerts this month.';
  }

  grid.addEventListener('click', function (e) {
    var b = e.target.closest('button.day'); if (!b) return;
    selected = selected === b.getAttribute('data-k') ? null : b.getAttribute('data-k');
    render();
  });
  function move(delta) {
    month += delta;
    if (month < 0) { month = 11; year--; } else if (month > 11) { month = 0; year++; }
    selected = null; render();
  }
  document.getElementById('calPrev').addEventListener('click', function () { move(-1); });
  document.getElementById('calNext').addEventListener('click', function () { move(1); });
  render();
})();
