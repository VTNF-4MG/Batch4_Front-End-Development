// ascending order //

// const points = [12,3,54,78,2,0,100,18,900,5];
// points.sort(function(a, b){return a-b});
// document.getElementById("text").innerHTML = points;

// second largest number //

// const number = [12,3,54,78,2,0,100,18,900,5];
// number .sort(function(a, b){return b-a});
// document.getElementById("home").innerHTML = number [1];


function Table() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[7];
      y = rows[i + 1].getElementsByTagName("TD")[7];
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}