//let function
//let a = 10;
//abc();

//const function
//const x = 1;
// function xyz(){
//     const y = 7;
//     const x = 2;
//     const z = y-x;
//     console.log("innnerfunction" ,  z)
// }
// xyz();
// console.log("outerfunction" , x)


//var function
//var c = 2;
//var e;
// function de(){
//     var d = 3;
//     var e = 1;
//     console.log("insidefunction" ,d,e)
// }
// de();
// console.log("888outsidefunction" , c,  e)

//button
// function declaration(){
//     let a = 8;
//     console.log("insidefunction" , a)
// }

//single function
// function porselvi(){
//     let a = 6;
//     console.log("insidefunction" , a)
// }
// porselvi();

//string
//let person= "porselvi";
//let number = 36;
//console.log(person , number);


//poolean
//let isclicked = false;
// function varaiable(){
//     isclicked = true;
//     console.log(isclicked);
   
// }

//string
// function user(){
//     let userName ='selvi';
//     console.log(userName)
// }
//user();

// number
//let decimalNumber=24.56788;
//console.log(decimalNumber);


// let isclicked =false;

// if(isclicked==false){
//     alert("isclicked true")
// }


// var isclick =true;

// if(isclick===true){
//     alert("isclick false")
// }
// else{
//     alert("isclick true")
// }

// let isclick =false;
// if(isclick==true){
//     alert(isclick="false")
// }
// else if(isclick==false){
//     alert(isclick="ture")
// }
// else{
//      alert("isclick something")
// }

//ternary operator

// let isclicked = false;
// {isclicked ? alert("true") : alert("false")}
// {!isclicked ? alert("true") : alert("false")}

// for(let x=10;x <=100; x++){
//     console.log(x);
// }

// for(let x=10;x <100; x++){
//     console.log(x);
// }

//  let namelist= ["ravi", "rekha", "pavi"];
// for(let x = 0; x <namelist.length; x++){
//     console.log(namelist[x]);
// }

// let tagList = document.getElementsByTagName('p');
// for(let x=0; x< tagList.length; x++){
// tagList[x].style.color = "red";
// }


//  let tagList = document.getElementsByTagName('p');

// for(let x=0; x<tagList.length; x++){
//     console.log(tagList.length, x);
//     if(x===3){
//         tagList[x].style.color= "yellow";
//     }
//     else
//     {
//         tagList[x].style.color = "pink";
//     }

// }  

// Array.from(tagList).forEach((element, index) => {
//     if(index===2){
//         element.style.color ="red";
//     }
//     else{
//         element.style.color ="blue";
//     }
// });

// Event

// function onclicked(){
//     alert("onclicking");
// }

// function mouseover(){
//     alert("mouseover");
// }

// function mousedown(){
//     alert("mousedown");
// }

// function mouseup(){
//     alert("mouseup");
// }

// function mouseout(){
//     alert("mouseout");
// }

// function mousemove(){
//     alert("mousemove");
// }

// function keyup(){
//         alert("divya");
//     }

// function keyDown(){
//     alert("rekha");
// } 

// function change(){
//     console.log(change);
// }
// function focus(){
//     console.log("focus");
// }

// function load(){
//     alert("load")
// }
// window.addEventListener("load",(e)=>{
//     alert("pageload")
// });

// window.addEventListener("resize",(e)=>{
//     alert("resized");
//     console.log("resize");
// });


// window.addEventListener("resize",(e)=>{
//     document.getElementById("demo").style.color="blue"
//     console.log("event")
// });

// window.addEventListener("scroll",(e)=>{
       
//         console.log("event")
// });

// window.addEventListener("load",function(e) {
//     document.getElementById("demo").style.color="blue"
//     console.log(e)
// });

// function eventHandler(event){
//    if( event.target.value.length > 0){
//     alert(" not empty element");
//    }
//    else{
//     alert(" element");
// }
// }

// function eventHandler(event){
//     if( event.target.value ==77"porselvi"){
//      alert("expected");
//     }
//     else{
//      alert("unexpected");
//  }
//  }


// let personName= document.querySelectorAll(".name");
// function clickevent(){
//    for(x=0; x<personName.length; x++){
//      personName[x].style.background ="black";
//      personName[x].style.color="blue";
//      if(x===3){
//         personName[x].style.color="yellow";
//      }
//     else if(x===4){
//         personName[x].style.color="white";
//         personName[x].style.padding="30px";
//         personName[x].style.fontSize="50px";
//      }
//     else if(x===2){
//         personName[x].style.color="pink";
//      }
//      else {
//         personName[x].style.color="orange";
//      }
     
//    }
// }



// let btnName=document.querySelectorAll(".click");

// for(let a=0; a<btnName.length; a++){
//     btnName[a].addEventListener("click",function(){
//        let getAttr =btnName[a].getAttribute("alt");
//        btnName[a].style.color="red"
//        btnName[a].style.background="blue"
//         if(getAttr === "btn1"){ 
//             alert("hi");
//         }
//         else if(getAttr === "btn2"){
//             btnName[a].style.color="orange";
//             btnName[a].style.background="yellow";
//             btnName[a].style.padding="10px 20px";
//         }

//         else{
//             console.log(a,"hi");
//             alert("how are you");
//         }
//     });
// }

// console.log(document.getElementsByTagName("button")[0].getAttribute("name"));

// document.getElementsByTagName("button")[1].setAttribute("name", "porselvi" );

// document.getElementsByTagName("button")[2].classList.add("amaris");

// document.getElementsByTagName("button")[3].setAttribute( "id" , "kishore");

// document.getElementsByTagName("h6")[0].classList.remove('milan');

// document.getElementsByTagName("p")[0].removeAttribute( 'class','Akhanyan');


// let personName="porselvi";
// let val =10;
// if(personName === "porselvi" && val === 10 ) {
//     alert("happy");   
// }else{
//     alert("unhappy")
// }


// let Namelist="kishore";
// let value =40;

// if(Namelist === "kishore" || value === 10 ) {
//     alert("happy");   
// }else{
//     alert("unhappy")
// }


// let x=20;
// if(x!=25){
//     alert("correct")
// }
// else{
//     alert("incorrect")
// }

// ternary operator
// let isclicked = false;
// {isclicked ? alert("true") : alert("false")}
// {!isclicked ? alert("true") : alert("false")}



// let a=20;
// {a? alert("true"):alert("false")}
// {!a? alert("true"):alert("false")}

// let Namelist="kishore";
// let value =40;
// let ispool = false;

// if(Namelist === "porselvi" || value === 10 || ispool === false) {
//     alert("happy");   
// }else{
//     alert("unhappy")
// }
// document.getElementById('demo').innerHTML="welcome";

// document.getElementById('demo1').querySelector('span').innerText="happy";



// arraypush afteradding

// let letters=["a","b","c","d","e","f"]
// letters.push("g",);
// console.log(letters);

// // arraypop aftercutting
// let namelist=["amaris", "akhanyan", "milan"]
// namelist.pop();
// console.log(namelist);

// //arrayshift beforecutting
// let personName=["hari" ,"deva", "rekha" ]
// personName.shift("selvi");
// console.log(personName);

// //arrayunshift beforeadding

// let personlist=["hari" ,"deva", "rekha" ]
// personlist.unshift("selvi");
// console.log(personlist);

// arrayconcat
// let fruits =["apple", "orange", "mango",]
// let numbers=["1","2","3","4"]
// newArray = fruits.concat(numbers);
// console.log(newArray);


// let fruit =["apple", "orange", "mango",]
// let number=["1","2","3","4"]
// newArray = number.concat(fruits);
// console.log(newArray);

// Arrayslice
// let vehicles =["car","bus","van","auto"]
// newArray=vehicles.slice(1, 3);
// console.log(newArray);

// // Arraysplice
// let vehicle =["car","bus","van","auto"]
// vehicle.splice(1,3,"cycle");
// console.log(vehicle);

// fetch(`https://jsonplaceholder.typicode.com/posts/3`).
// then(res=>res.json()).
// then(data=> console.log(data)).
// catch(error=>console.log(error));


//API//
// let htmltag =``;

// fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`).
// then(res => res.json()).
// then(data=>
//     data.map(test=>{
//         htmltag+=`<h1 style="text-decoration:underline;">${test.id}</h1> 
//          <h2 style="color:blue;">${test.email}<h2>  
//           <h3 style="background:red;">${test.name}<h3> 
//            <h4 style="font-size:30px">${test.body}</h4>`
//         document.getElementsByTagName("body")[0].innerHTML =  htmltag;

//     })
//     ).
//     catch(error => console.log(error));



    // //API//
// let htmltag =``;

// fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`).
// then(res => res.json()).
// then(data=>
    // data.forEach(test=>{
    //     htmltag+=`<h1>${test.id}</h1> 
    //      <h2>${test.email}<h2>  
    //       <h3>${test.name}<h3> 
    //        <h4>${test.body}</h4>`
    //     document.getElementsByTagName("body")[0].innerHTML =  htmltag;

    // })
    // ).
    // catch(error => console.log(error));



    // function addition(a,b){
    //     let c=a+b;
    //     console.log(a,b,c);
    // }
    // addition(10,20);

    // function addition(x,y){
    //     let z=x-y;
    //     console.log(x,y,z);
    // }
    // addition(20,20);

    // function addition(a,b){
    //     let name=a+b;
    //     console.log(name);
    // }
    // addition("porselvi","kishore");

   // arrowfunction

   
  //  map
//    let lettername =["a","b","c","d","e","f"];   
//    lettername.map(data => {
//    console.log(data);
// });


//    //filter

//    let numbers = [1,2,3,4,5,6];
//    let newArray = numbers.filter(text=> text >1);
//    console.log(newArray);

// //let destrutcure
// let personlist = [
//     {
//         Name : "porselvi",
//         RoleNumber :01,
//         Age:36,
//     },
//     {
//         Name : "Kishore",
//         RoleNumber :02,
//         Age:40,  
//     },
//     {
//         Name : "Amaris",
//         RoleNumber :03,
//         Age:8,  
//     },
//     {
//         Name : "Akhanyan",
//         RoleNumber :04,
//         Age:4,  
//     },
// ];
// console.log(personlist[0]);


// let htmltag =``;

// fetch(`https://jsonplaceholder.typicode.com/photos/`).
// then(res=>res.json()).
// then(data=> 
//     data.slice(0,3).forEach(test=>{
//         htmltag+=
//         `<div id="demo" class="carousel slide" data-ride="carousel">
//     <ul class="carousel-indicators">
//       <li data-target="#demo" data-slide-to="0" class="active"></li>
//       <li data-target="#demo" data-slide-to="1"></li>
//       <li data-target="#demo" data-slide-to="2"></li>
//     </ul>
//     <div class="carousel-inner">
//       <div class="carousel-item active">
//         <img src="${test.url}".png  width="1500" height="500">
//         <div class="carousel-caption">
//           <h3>${test.id}</h3>
//           <p>${test.title}</p>
//         </div>   
//        </div>
//        <div class="carousel-item ">
//           <img src=""  width="1500" height="500">
//           <div class="carousel-caption">
//             <h3>${test.id}</h3>
//             <p>${test.title}</p>
//           </div>   
//         </div>
//         <div class="carousel-item ">
//            <img src="" alt="New York" width="1500" height="500">
//           <div class="carousel-caption">
//              <h3>${test.id}</h3>
//              <p>${test.title}</p>
//            </div>   
//          </div>
//        </div>
       
//     <a class="carousel-control-prev" href="#demo" data-slide="prev">
//       <span class="carousel-control-prev-icon"></span>
//     </a>
//     <a class="carousel-control-next" href="#demo" data-slide="next">
//       <span class="carousel-control-next-icon"></span>
//     </a>
//   </div>
//    `
//    document.getElementsByTagName("body")[0].innerHTML=htmltag;    
//     })
// ).
// catch(error=>console.log(error));



   


// let htmltag =``;

// fetch(`https://jsonplaceholder.typicode.com/photos/`).
// then(res=>res.json()).
// then(data=> 
//     data.slice(0,1).map(test=>{
//   htmltag+=`<img style="position:relative" src=" ${test.url}.png "> 
//  <a>${test.id}</a>     <span>${test.albumId}</span>    
//  <p style="position:absolute; top:45%; left:10%;"> ${test.title}</p>`
// document.getElementsByTagName("body")[0].innerHTML=htmltag;
//     })
// ).
// catch(error=>console.log(error));





//ascending order
// var numbers= [ 12, 3, 54, 78, 2, 0, 100,  18, 900, 5]
// numbers.sort(function(a, b){return a-b});
// document.getElementById("demo").innerHTML= numbers;


// //second largest  value
// const points= [ 12, 3, 54, 78, 2, 0, 100,  18, 900, 5]
// points.sort(function(a, b){return a-b});
// document.getElementById("demo1").innerHTML = points[points.length-2];


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




