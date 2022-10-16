 

/* COLLAPSE WITH TOGGLE*/
let htmlSeg = ' ';
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(data => 
  data.slice(0,5).forEach((detail , index )=>{
      htmlSeg += `<h1>COLLAPSE</h1>
      <h2>${detail.id}</h2>
      <h5>${detail.name}</h5>
      <button  class="btn btn-info btnclick"  data-toggle="collapse" data-target="#demo" style="background:blue; font-size:30px;" >${detail.email}</button>
      <div id="demo-${index}" class="collapse toggle" style=" font-size:20px;">${detail.body}</div>`;
    document.getElementsByClassName('myjavascript')[0].innerHTML = htmlSeg;

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


/*LIST GROUPS */

let dataElement = '';
fetch('https://jsonplaceholder.typicode.com/users').
then(response => response.json()).
then(data => 
   data.slice(0,5).map((test)=>{
       dataElement += `<h1>LIST GROUPS</h1>
       <ul style="list-style:none; margin:30px 0px;">
       <li style="border:1px solid gray; color:black; padding:6px 0px;background:blue;font-size:18px; ">${test.id }</li>
       <li style="border:1px solid gray; color:blue; font-size:23px; padding:10px 0px;text-transform:uppercase;">${test.name}</li>
       <li style="border:1px solid gray;color:red; font-size:18px; padding:10px 0px;">${test.username }</li>
       <li style="border:1px solid gray;color:gray; font-size:18px; padding:10px 0px;">${test.email }</li>
       <li style="border:1px solid gray;color:gray; font-size:18px; padding:10px 0px;">${test.phone }</li>
       <li style="border:1px solid gray;color:gray; font-size:18px; padding:10px 0px;">${test.website }</li>
       </ul>`;
       document.getElementsByClassName('myjavascript')[1].innerHTML = dataElement;
       console.table(dataElement);
   })
   ).
catch(error => console.log(error));



/* CARD*/
let CARD = ' ';
fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(response => response.json())
.then(java => 
  java.slice(0,3).forEach (item =>{
    CARD +=`<h1>CARD</h1>
    <div class="container">
    <h3>${item.id}</h3>
    <div class="card" style="width:400px;padding:20px;">
    <img src="${item.thumbnailUrl}" alt="" title="Card" />
    <h4>${item.title}</h4>
    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    </div>
    </div>`;
    document.getElementsByClassName('myjavascript')[2].innerHTML = CARD;
  })
  )
.catch(error => console.log(error));


// media object //

let media = " ";

fetch(`https://jsonplaceholder.typicode.com/photos/`).
then(response => response.json()).
then(java =>
        java.slice(0,5).map(item =>{
            media +=  `<h1>media object</h1>
            <div class="media border p-3">
            <img src="${item.thumbnailUrl}" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:100px">
            <div class="media-body">
              <h4>${item.title}</h4>
              <p>Lorem ipsum...</p>
            </div>
          </div>`;

  document.getElementsByClassName('myjavascript')[3].innerHTML = media;

  })
 ).
  catch(error => console.log(error));
 

  //***            Form                     ***//
  let form = " ";
fetch(`https://jsonplaceholder.typicode.com/users`).
then(response => response.json()).
then(java =>
        java.slice(0,3).map(item =>{
          form += `<h1> Form</h1>
          <form action="/action_page.php"></form>
            <h5> ${item.id} </h5>

            <div class="form-group">
                <label for="Name"> Name: </label>
                <input type="text"  placeholder= "Enter Name" id="userid" style="font-size:20px; color:blue;" value = ${item.name}> </input>
            </div>
            <div class="form-group">
                <label for="UserName"> UserName: </label>
                <input type="text"  placeholder= "Enter UserName" id="UserName" style="font-size:20px; color:green;"  value =  ${item.username}> </input>
            </div>
            <div class="form-group">
                <label for="phone"> phone: </label>
                <input type="phone"  placeholder= "Enter phone number" id="phone" style="font-size:20px; color:yellow;" value =${item.phone}>  </input>
            </div>
            <div class="form-group">
            <label for="email"> Email address: </label>
            <input type="email"  placeholder= "Enter email" id="email" style="font-size:20px; color:red;" value =${item.email} >  </input>
        </div>
            
        </form>`;

        document.getElementsByClassName('myjavascript')[4].innerHTML = form;
    })
).
catch(error => console.log(error));



/*  carousel  */

 let carousel =``;
fetch(`https://jsonplaceholder.typicode.com/photos/`).
then(res=>res.json()).
then(data=> {
   for(let i=0; i<5; i++){
    if(i == 0){
        carousel+=`<h1> carousel</h1>
        <div class="carousel-item active">
        <img src=${data[i].url} alt = "" width="1380" height="600">
          <h3>${data[i].title}</h3>
          <p>${data[i].thumbnailUrl}</p>
        </div> `
    }  
    else{
        carousel+=`
        <div class="carousel-item ">
        <img src= ${data[i].url} alt = ""  width="1380" height="600">
       
          <h3>${data[i].title}</h3>
          <p>${data[i].thumbnailUrl}</p>
        </div> `
    }
}

document.getElementsByClassName("carousel-inner")[0].innerHTML=carousel;    
})


let modal ='';

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(Response => Response.json())
.then(data => 
    data.slice(0,3).forEach(Text => {
        modal += `
      <div class="container" style="padding:10px 0px;">
      <h3 style="color:blue; font-size:30px;">Modal</h3>
      <button type="button" class="btn btn-primary" style="color:black; font-size:30px;" data-toggle="modal" data-target="#mymodal-${Text.id}">
      ${Text.username}
      </button>
      <div class="modal" id="mymodal-${Text.id}">
         <div class="modal-dialog">  
            <div class="modal-content">
              <div class="modal-header">
              <h4 class="modal-title">${Text.name}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              ${Text.email}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>`
    document.getElementsByClassName("myjavascript")[5].innerHTML = modal;
    })
  )
.catch(error => console.log(error));


























// var a=[12,3,54,78,2,0,100,18,900,5];
// var result=a.sort(function compare(a,b)
// {
//   return a-b;
// });

// document.writeln(result);