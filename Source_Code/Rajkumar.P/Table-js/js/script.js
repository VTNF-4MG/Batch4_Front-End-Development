let num=[34,21,34,78,17,20,10];
num=num.sort();
console.log(num);

var numArray=[100,3,56,3,90]
numArray.sort(function(a,b){
  return a-b;
});
console.log(numArray);
document.getElementById("large").innerHTML=num;

var numArrayTwo=[100,3,56,21,90]
numArrayTwo.sort(function(a,b){
  return a-b;
});
document.getElementById("two").innerHTML=numArrayTwo[numArrayTwo.length-2];


function sortTable() {
  var table, rows, switching, i, a, b, shouldSwitch;
  table = document.getElementsByTagName("table")[0];
  switching = true;
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      a= rows[i].getElementsByTagName("td")[7];
      b = rows[i + 1].getElementsByTagName("td")[7];
      
      if (Number(a.innerHTML) > Number(b.innerHTML)) {
        
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