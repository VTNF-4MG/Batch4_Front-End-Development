
//*************..............Application programming Interface TASK 1................................**************//
let htmlsegment = '';
fetch('https://jsonplaceholder.typicode.com/photos').
then(response => response.json()).
then(data =>
 data.slice(0,3).forEach(item => {
 htmlsegment += `<div class='card'>
 <a href="${item.url}">
 <img src="${item.thumbnailUrl}.png"></a>
 <h3>${item.id}</h3>
 <p>${item.title}</p>
 </div>`;
 document.getElementsByClassName('javatask')[0].innerHTML = htmlsegment;
 }) ).
 catch(error => console.log(error));
// *....................................................................................................................*//
// ************................ API TASK ANOTHER METHOD USING BOOTSTRAP..................................................//
// let htmlcard = '';
// fetch('https://jsonplaceholder.typicode.com/photos').
// then(response => response.json()).
// then(data =>
//   data.slice(0,5).forEach(item => {
//   htmlcard += `<div class="container">
//   <div class="card" style="width:250px">
//   <a href="${item.url}">
//   <img class="card-img-top" src="${item.thumbnailUrl}.png" alt="card image" style="width:100%" ></a>
//   <h3>${item.id}</h3>
//   <div class="card-body">
//    <h3 class="card-title">${item.title}</h3>
//    <p class="card-text">Some example text some example text.John doe is an architect and engineer</p>
//    <a href="#" class="btn btn-primary">see profile</a>
//   </div>
//   </div>`;
//   document.getElementsByClassName('javatask')[1].innerHTML = htmlcard;
//   }) ).
//   catch(error => console.log(error));

// ......................................................................................................................*//

// *****************.........API Forms TASK 2......................................................*********************//
let htmlform = '';
fetch('https://jsonplaceholder.typicode.com/users').
then(response => response.json()).
then(data =>
  data.slice(0,3).forEach(item => {
  htmlform += `<form action="/action_page.php"></form>
  <h5 style="margin-top:50px">${item.id}</h5>

  <div class="form-group" >
    <label for="Name"> Name: </label>
    <input type="text" placeholder="Enter Name" id="userid" value = ${item.name}> </input>
  </div>
  
  <div class="form-group">
    <label for="phone"> phone: </label>
    <input type="phone" placeholder="Enter phone number" id="phone" value = ${item.phone}> </input>
  </div>
  <div class="form-group">
    <label for="email"> Email address: </label>
    <input type="email" placeholder="Enter email" id="email" value = ${item.email}> </input>
  </div>
  <div class="form-group">
    <label for="website"> website: </label>
    <input type="text" placeholder="Enter website" id="website" value = ${item.website}> </input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>

</form>`;
document.getElementsByClassName('javatask')[2].innerHTML = htmlform;
   }) ).
catch(error => console.log(error));
// ....................................................................................................//
// ***************...........API MEDIA OBJECT TASK 3.......................................................*************//
let htmlmedia =``;

fetch(`https://jsonplaceholder.typicode.com/photos/`).
then(res=>res.json()).
then(data=> 
    data.slice(0,3).forEach(item=>{
htmlmedia+= `<div class="container mt-3" style="margin-left:0px;">
                  <h2>Media Object</h2>
                  <div class="media border p-3">
                    <img src="${item.url}" class="mr-3 mt-3 rounded-circle" style="width:100px;">
                    <div class="media-body">
                      <h4>${item.thumbnailUrl}</h4>
                      <p>${item.title}</p>      
                    </div>
                  </div>
            </div>`
 document.getElementsByClassName('javatask')[3].innerHTML=htmlmedia;  
    })
).catch((error)=>console.log(error));
// ..................................media object  Task 3 endz.................................................................//
// ******************* */...................Collapse  Task 4 starts......................................******************//
let htmlSeg = ' ';
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(data => 
  data.slice(0,3).forEach((detail , index )=>{
      htmlSeg += `<h2>${detail.id}</h2>
      <h5>${detail.name}</h5>
      <button  class="btn btn-info btnclick"  data-toggle="collapse" data-target="#demo">${detail.email}</button>
      <div id="demo-${index}" class="collapse toggle">${detail.body}</div>`;
    document.getElementsByClassName('javatask')[4].innerHTML = htmlSeg;

    let btn = document.querySelectorAll('.btnclick');
  //  console.log(btn);
    let  collapse = document.querySelectorAll('[id^="demo-"]');
    // console.log(collapse);
    for(let i=0; i<btn.length;i++){
      btn[i].addEventListener('click' ,function (event){          
        collapse[i].classList.toggle('show');
      });
    }
  })
  )
.catch(error => console.log(error));
// *************.....................LIST group task 5.................................***********************************//
let dataElement = '';
 fetch('https://jsonplaceholder.typicode.com/users').
 then(response => response.json()).
 then(data => 
    data.slice(0,3).map((test)=>{
        dataElement += `<ul style="list-style:none; margin:30px 0px; width:700px;">
        <li style="border:1px solid black; color:black; padding:6px 0px;background:violet;font-size:18px; ">${test.id }</li>
        <li style="border:1px solid black; color:blue; font-size:19px; padding:10px 0px;text-transform:uppercase;">${test.name}</li>
        <li style="border:1px solid black;color:red; font-size:18px; padding:10px 0px;">${test.username }</li>
        <li style="border:1px solid black;color:gray; font-size:18px; padding:10px 0px;">${test.email }</li>
        <li style="border:1px solid black;color:gray; font-size:18px; padding:10px 0px;">${test.phone }</li>
        <li style="border:1px solid black;color:gray; font-size:18px; padding:10px 0px;">${test.website }</li>
        </ul>`;
        document.getElementsByClassName('javatask')[5].innerHTML = dataElement;
        console.table(dataElement);
    })
    ).
 catch(error => console.log(error));
// .......................................................................................................................//
// *****************.....................POP Up  Modal Task 6....................................*****************************//
let jsonFetch ='';

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(Response => Response.json())
.then(data => 
    data.slice(0,4).forEach(item => {
      jsonFetch += `
      <div class="container" style="padding:10px;">
      <h3>Modal Example</h3>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mymodal-${item.id}">
      ${item.username}
      </button>
      <div class="modal" id="mymodal-${item.id}">
         <div class="modal-dialog">  
            <div class="modal-content">
              <div class="modal-header">
              <h4 class="modal-title">${item.name}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              ${item.email}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>`
    document.getElementsByClassName('javatask')[6].innerHTML = jsonFetch;
    })
  )
.catch(error => console.log(error));
// ..............................................................................................................................//
// *************************................carosel Task 7 ...................................................********************/
let htmltag =``;


fetch(`https://jsonplaceholder.typicode.com/photos/`).
then(res=>res.json()).
then(data=> {
   for(let i=0; i<5; i++){
    if(i == 0){
        htmltag+=`
        <div class="carousel-item active">
        // <img src=${data[i].url} alt = "" width="1500" height="500">
       
          <h3>${data[i].title}</h3>
          <p>${data[i].thumbnailUrl}</p>
        </div> `
    }  
    else{
        htmltag+=`
        <div class="carousel-item ">
        <img src= ${data[i].url} alt = ""  width="1500" height="500">
       
          <h3>${data[i].title}</h3>
          <p>${data[i].thumbnailUrl}</p>
        </div> `
    }
}

document.getElementsByClassName("carousel-inner")[0].innerHTML=htmltag;    
})
// .................................Ascending order Task.................................................................//
var a = [12,3,54,78,2,0,100,18,900,5];
document.getElementById("demo").innerHTML = a;
function myfunction() {
  a.sort(function(a,b){return a-b});
  document.getElementById("demo").innerHTML = a;
}
//...................................second largest number task................................................................................//
// var secondMax = function(){
//   var arr = [12,3,54,78,2,0,100,18,900,5];
//   var max = Math.max.apply(null,arr);
//   arr.splice(arr.indexOf(max), 1);
//   return Math.max.apply(null,arr);
// };
// //.......................................................................................................................................//
// const arr = [12,3,54,78,2,0,100,18,900,5];
// let intArray = arr.map(Number);
// intArray = [ new Set(intArray)];
// const seondLargestNumber = intArray.sort((a,b) => {
//   return b-a;
// })[1];
// console.log(seondLargestNumber)
//........................................................................................................................................//
// var arr =[12,3,54,78,2,0,100,18,900,5] ;

// var num = arr.sort(function(a,b){
//     return a-b});[arr.length-2];


// alert(arr);
//........................................................................................................................................//
// var a = [12,3,54,78,2,0,100,18,900,5];
// document.getElementById("demo").innerHTML = a;
// function myfunction() {
//   a.sort(function(a,b){return b-a});
//   document.getElementById("demo").innerHTML = a;
// }

//..............................................Second Largest value Task....................................................................//
var arr = [12,3,54,78,2,0,100,18,900,5,300];
var output = getSecondLargest(arr);
document.getElementById("output").innerHTML = output;

function getSecondLargest(nums){
  if (nums.length ==0){
    return undefined;
  }
  nums.sort((a,b) => b-a);
  var newArr = [...new Set(nums)];
  return newArr[1];
}
//...............................................................................................................................//
// var a ="";
// document.getElementById("1").innerHTML = a;
// function myfunction() {
//   a.sort(function(a,b){return a-b});
//   document.getElementById("demo").innerHTML = a;
// }
//.................................................Rank Task...........................................................................//
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
//...........................................................................................................................//









  
       


