// let json ='';

//         fetch(`https://jsonplaceholder.typicode.com/comments`)
//         .then(Response => Response.json())
//         .then(data => 
//             data.slice(0,5).forEach(item => {
//               json += `<div class="container">
//               <h2>Modal Example</h2>
//               <!-- Trigger the modal with a button -->
//               <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#${item.id}">Open Modal</button>
            
//               <!-- Modal -->
//               <div class="modal fade" id="${item.id}" role="dialog">
//                 <div class="modal-dialog">
                
//                   <!-- Modal content-->
//                   <div class="modal-content">
//                     <div class="modal-header">
//                       <button type="button" class="close" data-dismiss="modal">&times;</button>
//                       <h4 class="modal-title">${item.email}</h4>
//                     </div>
//                     <div class="modal-body">
//                      ${item.body}
//                     </div>
//                     <div class="modal-footer">
//                       <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//                     </div>
//                   </div>
                  
//                 </div>
//               </div>
              
//             </div>`
//             document.getElementsByTagName("body")[0].innerHTML = json;
//             let btn = document.querySelectorAll("")
//             })
//           )
//         .catch(error => console.log(error));


// const points = [12,3,54,78,2,0,100,18,900,5];
// points.sort(function(a, b){return a-b});
// document.getElementById("demo  ").innerHTML = points;


 
// var myArray=[12,3,54,78,2,0,100,18,900,5];
// var secondLargest = myArray.sort(function(a,b){return a - b})[myArray.length-2];
// // alert(secondLargest); 
// document.getElementById("demo1").innerHTML = secondLargest;

function sortTable() {
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
      z = rows[i].getElementsByTagName("TD")[0];
      t = rows[i + 1].getElementsByTagName("TD")[0];
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