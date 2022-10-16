//carousel

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

.catch((error)=>console.log(error));

// //card

let htmlcard =``;

fetch(`https://jsonplaceholder.typicode.com/photos/`).
then(res=>res.json()).
then(data=> 
    data.slice(0,3).forEach(test=>{
        htmlcard+=
   `   
   <div class="Card" style="width:250px; margin:25px;">
   <h1 style="text-align:center;">card</h1> 
      <img class="card-img-top" src="${test.url}" alt="Card image" style="width:100%">
      <div class="card-body" style="text-align:center;">
        <h4 class="card-title">${test.id}</h4>
        <p class="card-text">${test.title}</p>
        <p class="card-text">${test.thumbnailUrl}</p>
      </div>
    </div>`
      document.getElementsByClassName("title")[0].innerHTML=htmlcard;    
 })
)
 .catch((error)=>console.log(error));


// // //media
let mediatag =``;

fetch(`https://jsonplaceholder.typicode.com/photos/`).
then(res=>res.json()).
then(data=> 
    data.slice(0,3).forEach(test=>{
        mediatag+=
   `    <div class="container mt-3">
   <h2>Media Object</h2>
   <div class="media border p-3">
     <img src="${test.url}" class="mr-3 mt-3 rounded-circle" style="width:60px;">
     <div class="media-body">
       <h4>${test.thumbnailUrl}</h4>
       <p>${test.title}</p>      
     </div>
   </div>
 </div>`
 document.getElementsByClassName("title")[1].innerHTML=mediatag;  
    })
).catch((error)=>console.log(error));

// // //list
let htmllist =``;

fetch(`https://jsonplaceholder.typicode.com/users`).
then(res=>res.json()).
then(data=> 
    data.slice(0,2).forEach(test=>{
        htmllist+=`<div class="container">
        <h2> List Group</h2>
        <ul class="list-group" >
          <li class="list-group-item" style="background:yellow;">"${test.name}"</li>
          <li class="list-group-item">"${test.username}"</li>
          <li class="list-group-item">"${test.email}"</li>
        </ul>
      </div>`
      document.getElementsByClassName("title")[2].innerHTML=htmllist;  
    })
).catch((error)=>console.log(error));



// // //form
let htmlform =``;

fetch(`https://jsonplaceholder.typicode.com/users`).
then(res=>res.json()).
then(data=> 
    data.slice(0,3).forEach(test=>{
        htmlform+=`<div class="container">
        <h2>Form Grid</h2>
        <form action="/action_page.php">
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" id="name" placeholder="Enter name" name="email" value=${test.name}>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Enter email" value=${test.email}>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Enter phone" value=${test.phone}>
            </div>
          </div>
         
        </form>
      </div>`
      document.getElementsByClassName("title")[3].innerHTML=htmlform;  
          })
      ).catch((error)=>console.log(error));

//collapse
let htmlseg = ' ';
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(data => 
  data.slice(0,5).forEach((detail , index )=>{
    
    htmlseg += `<div class="container">
      
      <h2>${detail.id}</h2>
      <h5 style="display:none;">${detail.name}</h5>
      <button  class="btn btn-info btnclick"  data-toggle="collapse" data-target="#demo">${detail.email}</button>
      <div id="demo-${index}" class="collapse">${detail.body}</div> </div>`;
    document.getElementsByClassName('title')[4].innerHTML =  htmlseg;

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

//modal
let htmlmodal =``;

fetch(`https://jsonplaceholder.typicode.com/comments`).
then(res=>res.json()).
then(data=> 
    data.slice(0,3).forEach(test=>{
        htmlmodal+=`<div class="container">
        <h4>Modal</h4>
        <!-- Button to Open the Modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mymodal-${test.id}">
          Open modal
        </button>
      
        <!-- The Modal -->
        <div class="modal" id="mymodal-${test.id}">
          <div class="modal-dialog">
            <div class="modal-content">
            
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">${test.name}</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              
              <!-- Modal body -->
              <div class="modal-body">
              ${test.email}.
              </div>
              
              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">${test.id}</button>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>`
      document.getElementsByClassName("title")[5].innerHTML=htmlmodal;  
          })
      ).catch((error)=>console.log(error));