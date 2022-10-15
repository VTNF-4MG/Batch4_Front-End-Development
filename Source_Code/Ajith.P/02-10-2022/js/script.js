// let application = '';
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response => response.json())
// .then(data =>
//     data.slice(0,10).forEach(item =>{
//         application += `<div class='card'
//         <a href="${item.url}">
//         <img src="${item.thumbnailUrl}.png"></a>
//         <h4>${item.id}</h4>
//         <p>${item.title}</p>
//         /<div>`;
//         document.getElementsByTagName('body')[0].innerHTML = application;
//     })
//     )
//     .catch(error =>console.log(error));


// card

let application = '';
fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data =>
    data.slice(0,5).forEach(item =>{
        application += `<div class="container">
        <div class="card" style="width:400px">
            <a href ="${item.url}">
            <img class="card-img-top" src="${item.thumbnailUrl}.png" alt="Card image" style="width:100%"></a>
            <h4>${item.id}</h4>
          <div class="card-body">
            <h4 class="card-title">${item.title}</h4>
             <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
             <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>`;
        document.getElementsByClassName('jstask')[0].innerHTML = application;
    })
    )
    .catch(error =>console.log(error));


// mediaobject

let media = '';
fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data =>
    data.slice(0,5).forEach(item =>{
        media += `<div class="container mt-3">
        <h2>Media Object</h2>
        <div class="media border p-3">
        <a href ="${item.url}">
          <img src="${item.thumbnailUrl}.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;"></a>
          <div class="media-body">
            <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>      
          </div>
        </div>
      </div>`;
      document.getElementsByClassName('jstask')[1].innerHTML = media;
    })
    )
    .catch(error =>console.log(error));


// forms

let forms = '';
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>
    data.slice(0,5).forEach(item =>{
        forms += `<div class="container">
        <h2>Form Grid</h2>
        <form action="/action_page.php">
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" id="email" placeholder="Enter name" name="email" value="${item.name}">
            </div>
            <div class="col">
              <input type="email" class="form-control" placeholder="Enter email" name="email" value="${item.email}">
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
      </div>`;
      document.getElementsByClassName('jstask')[2].innerHTML = forms;
    })
    )
    .catch(error =>console.log(error));


// collapse

let collapseMethod = ' ';
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(data => 
  data.slice(0,5).forEach((detail , index )=>{
    collapseMethod += `<h2>${detail.id}</h2>
      <h5>${detail.name}</h5>
      <button  class="btn btn-info btnclick"  data-toggle="collapse" data-target="#demo">${detail.email}</button>
      <div id="demo-${index}" class="collapse toggle">${detail.body}</div>`;
      document.getElementsByClassName('jstask')[3].innerHTML = collapseMethod;

    let btn = document.querySelectorAll('.btnclick');
    let  collapse = document.querySelectorAll('[id^="demo-"]');
    for(let i=0; i<btn.length;i++){
      btn[i].addEventListener('click' ,function (event){          
        collapse[i].classList.toggle('show');
      });
    }
  })
  )
.catch(error => console.log(error));



// listgroup

let listgrp = '';
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>
    data.slice(0,5).forEach(item =>{
        listgrp += `<ul style="list-style:none; marging:20px 0px; padding:15px 10px;">
        <li style="border:1px solid aqua; color:grey; padding:10px 0px; background:green; font-size:20px">${item.id}</li>
        <li style="border:1px solid aqua; color:grey; padding:10px 0px; background:red; font-size:20px">${item.name}</li>
        <li style="border:1px solid aqua; color:grey; padding:10px 0px; background:orange; font-size:20px">${item.username}</li>
        <li style="border:1px solid aqua; color:grey; padding:10px 0px; background:pink; font-size:20px">${item.email}</li>
        <li style="border:1px solid aqua; color:grey; padding:10px 0px; background:brown; font-size:20px">${item.phone}</li>
        </ul>`;
        document.getElementsByClassName('jstask')[4].innerHTML = listgrp;
    })
    )
    .catch(error =>console.log(error));



// popup

let popup = '';
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>
    data.slice(0,5).forEach(item =>{
        popup += `<div class="container">
        <h2>Modal Example</h2>
        <!-- Button to Open the Modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal-${item.id}">
          ${item.username}
        </button>
      
        <!-- The Modal -->
        <div class="modal" id="myModal-${item.id}">
          <div class="modal-dialog">
            <div class="modal-content">
            
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">${item.name}</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              
              <!-- Modal body -->
              <div class="modal-body">
                ${item.email}
              </div>
              
              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>`;
      document.getElementsByClassName('jstask')[5].innerHTML = popup;
    })
    )
    .catch(error =>console.log(error));



// carousel

    let carouselsegment =``;

    fetch(`https://jsonplaceholder.typicode.com/photos/`).
    then(res=>res.json()).
    then(data=> {
       for(let i=0; i<5; i++){
        if(i == 0){
            carouselsegment+=`
            <div class="carousel-item active">
             <img src=${data[i].url} alt = "${data[i].url}" width="1500" height="500">
              <h3>${data[i].title}</h3>
              <p>${data[i].thumbnailUrl}</p>
            </div> `
        }  
        else{
            carouselsegment+=`
            <div class="carousel-item ">
            <img src= ${data[i].url} alt = "${data[i].url}"  width="1500" height="500">
              <h3>${data[i].title}</h3>
              <p>${data[i].thumbnailUrl}</p>
            </div> `
        }
    }
    
    document.getElementsByClassName("carousel-inner")[0].innerHTML=carouselsegment;    
    })

    .catch(error =>console.log(error));









