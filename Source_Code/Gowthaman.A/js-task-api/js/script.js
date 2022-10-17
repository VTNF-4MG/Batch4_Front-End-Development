//                      *******************Collapse*******************                      //

let htmlSeg = ' ';
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(data => 
  data.slice(0,3).forEach((detail , index )=>{
      htmlSeg += `<div class="container">
      <h5>Collapse</h5>
      <h2>${detail.id}</h2>
      <h5 style="display:none;">${detail.name}</h5>
      <button  class="btn btn-info btnclick"  data-toggle="collapse" data-target="#demo">${detail.email}</button>
      <div id="demo-${index}" class="collapse">${detail.body}</div> </div>`;
    document.getElementsByClassName('jstask')[0].innerHTML = htmlSeg;

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


//                      *******************Card*******************                      //

let card = ' ';
fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(response => response.json())
.then(data => 
  data.slice(0,3).forEach (item =>{
    card +=`<div class="container">
    <h5>Card</h5>
    <h3>${item.id}</h3>
    <div class="card" style="width:300px;padding:20px;">
    <img src="${item.thumbnailUrl}" alt="" title="Card" />
    <h4>${item.title}</h4>
    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the .</p>
    <a href="javascript:;" class="btn btn-primary">Click</a>
    </div>
    </div>`;
    document.getElementsByClassName('jstask')[1].innerHTML = card;

  })
  )
.catch(error => console.log(error));

//************* Media Object **********//

let media = " ";

fetch(`https://jsonplaceholder.typicode.com/photos`).
then(response => response.json()).
then(data =>
        data.slice(0,3).forEach(item =>{
          media +=  `<div class="container">
          <h5>Media object</h5>
          <div class="media border mt-3">
            <img src="${item.thumbnailUrl}" alt="John Doe" class="mr-3 mt-3 rounded-circle">
            <div class="media-body">
              <h4>${item.title}</h4>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly</p>
            </div>
          </div></div>`;

  document.getElementsByClassName('jstask')[2].innerHTML = media;
  })
 ).
  catch(error => console.log(error));

// //********            Form                     ********//

let form = " ";
fetch(`https://jsonplaceholder.typicode.com/users`).
then(response => response.json()).
then(data =>
        data.slice(0,3).forEach(item =>{
          form += `
            <div class="container">
            <h4>Form Group</h4>
            <h5> ${item.id} </h5>

            <div class="form-group">
                <label for="Name"> Name: </label><br>
                <input type="text"  placeholder= "Enter Name" id="userid" value = ${item.name}> </input>
            </div>
            <div class="form-group">
                <label for="UserName"> UserName: </label><br>
                <input type="text"  placeholder= "Enter UserName" id="UserName" value =  ${item.username}> </input>
            </div>
            <div class="form-group">
                <label for="phone"> phone: </label><br>
                <input type="phone"  placeholder= "Enter phone number" id="phone" value =${item.phone}>  </input>
            </div>
            <div class="form-group">
            <label for="email"> Email address: </label><br>
            <input type="email"  placeholder= "Enter email" id="email" value =${item.email}>  </input>
        </div></div>`;
        document.getElementsByClassName('jstask')[3].innerHTML = form;
    })
).
catch(error => console.log(error));

//*****               List Group  ***** *//

let listGroup = '';
 fetch('https://jsonplaceholder.typicode.com/users').
 then(response => response.json()).
 then(data => 
    data.slice(0,3).forEach((item)=>{
        listGroup += `<div class="container">
        <h4>List Group</h4>
        <ul style="list-style:none; margin:30px 0px;">
        <li style="border:1px solid gray; color:black; padding:6px 0px;font-size:18px; ">${item.id }</li>
        <li style="border:1px solid gray; color:green; font-size:23px; padding:10px 0px;text-transform:uppercase;">${item.name}</li>
        <li style="border:1px solid gray;color:orange; font-size:18px; padding:10px 0px;">${item.username }</li>
        <li style="border:1px solid gray;color:gray; font-size:18px; padding:10px 0px;">${item.email }</li>
        <li style="border:1px solid gray;color:gray; font-size:18px; padding:10px 0px;">${item.phone }</li>
        <li style="border:1px solid gray;color:gray; font-size:18px; padding:10px 0px;">${item.website }</li>
        </ul></div>`;
        document.getElementsByClassName('jstask')[4].innerHTML = listGroup;
    })
    ).
 catch(error => console.log(error));


//                *******Model******        //

let model ='';
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(data => 
    data.slice(0,3).forEach(item  => {
      model += `<div class="container" style="padding:20px">
      <h3>${item.id}</h3>
      <h4>Model</h4>
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
              <button class="close" data-dismiss="modal">&times;</button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
            ${item.email}
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
              <button class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementsByClassName('jstask')[5].innerHTML = model;
    })
  )
 .catch(error => console.log(error));


//********                    carousel        ***** *//

let carousel =" ";
fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(response => response.json())
.then(data =>{
  for(let i=0; i<3;i++){
    if(i == 0){
      carousel+=`
      <div class="carousel-item active">
      <img src=${data[i].url} alt = "${data[i].url}" width="1500" height="500">
      <p>${data[i].id}</p>
      <h3>${data[i].title}</h3>
      </div>`;
    }
    else{
      carousel+=`
      <div class = "carousel-item">
      <img src=${data[i].url} alt = "${data[i].url}" width="1500" height="500">
      <p>${data[i].id}</p>
      <h3>${data[i].title}</h3>
      </div>`;
    }
  }
  document.getElementsByClassName('carousel-inner')[0].innerHTML = carousel;
})
.catch(error=>console.log(error));
//assend

// const a =[12,3,54,78,2,0,100,18,900,5];
// a.sort(function(a,b){return a-b});
// document.getElementsByTagName('p')[0].innerHTML = a ;

// secondlrgnmbr

// const array =[12,3,54,78,2,0,100,18,900,5];
// const secLrg = array.sort(function(a,b){return b-a});
// document.getElementsByTagName('p')[1].innerHTML = secLrg[1] ;

//click

//  function eventHandler(){
//   alert('c');
//  }  

//
// let clicked = document.querySelector('.btnclick');

// clicked.addEventListener('click',function(){
//   alert('clicked');
// });



