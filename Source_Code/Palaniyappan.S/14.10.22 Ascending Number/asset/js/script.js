//----------- Ascending Number ----------//

var a =[12, 3, 54, 78, 2, 0, 100, 18, 900, 5];

a.sort(function(x, y){return x-y});
document.getElementById("demo").innerHTML = a;

// ----------- 2nd largest no --------------- //

var a =[12, 3, 54, 78, 2, 0, 100, 18, 900, 5];

var temp_a = [...new Set(a)].slice(0);

var second_largest_value = temp_a.sort()[temp_a.length - 2];
var index_of_largest_value = a.indexOf(second_largest_value);

document.getElementById("demo1").innerHTML =  second_largest_value;
console.log(index_of_largest_value);

//----------- 2nd largest number -------------//

var a =[12, 3, 54, 78, 2, 0, 100, 18, 900, 5];

let n = a.length;
let x = findSecLargest(a, n);

function findSecLargest(a, n) {
  a.sort();

  let second_largest = 0;

  for(let i = n-2; i>=0; i--) {
    if (a[i] != a[n - 1]) {
      second_largest = a[i];
      break;
    }
  }
  return second_largest;
}

console.log ("This is the second largest no:" + x);

