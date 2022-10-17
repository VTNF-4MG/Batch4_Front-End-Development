
// // Sort the Array //

var number = [ 12, 3, 54, 78, 2, 0, 100,  18, 900, 5 ];
number.sort(function(a,b){return a - b});
  document.getElementById("tag").innerHTML = number;
//   // console.log(number);


// second largest Array //

  var num = [12, 3, 54, 78, 2, 0, 100];
  var nums = num.sort(function(a,b){return a - b})[6];
  alert(nums);

let table = document.querySelector(".btntype");
for(let i=0;i<4;i++){
  var number = [ 432, 286, 402,367,397];
  number.sort(function(a,b){return a - b});
}



function table() {
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