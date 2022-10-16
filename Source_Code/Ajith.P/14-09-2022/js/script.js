// let a = 7;
// const c = 3;
// var e = 8;
// function clickFunction()
// {
//     let b = 5;
//     console.log("fstone1", b)
//     const d = 6;
//     console.log("fstone2", d)
//     var f = 2;
//     console.log("fstone3", f)
// }
// clickFunction();
// console.log("scndone1", a)
// console.log("scndone2", c)
// console.log("scndone3", e)




// var height = 165;
// var personName = "ajith";
// let isDetails = false;
// function  premitive()
// {
//    console.log("height", height) 
//    console.log("name", personName)
//    isDetails = true;
//    console.log(isDetails)
// }

// let isOnClick = false;

// if(isOnClick == true){
//  alert('functions true');
// }
// else{
//  alert('functions flase');  
// }


// if(isOnClick === true){
//     alert('functions true')
// }
// else if(isOnClick === false){
//     alert('functions flase')
// }
// else{
//     alert('something anyone')
// }


// {isOnClick ? alert('true') : alert('flase')}



// forLoop
// let personName = document.getElementsByTagName('p');
// for(i=0;i<personName.length;i++){
//     // personName[i].style.color = 'orange';
//     if (i===2){
//         personName[i].style.color = 'red'
//     }
//     else{
//         personName[i].style.color = 'yellow'
//     }
// }


// let vechile = ['cycle', 'bike', 'auto', 'car'];
// for(i=0;i<vechile.length;i++){
//     console.log(vechile[i]);
// }


// // forEach
// let names = ['karthi', 'ajith', 'soudhar', 'guru'];
// names.forEach(element => {
//     console.log(element);
// });


// events

// function onClickEvent(){
//     alert('onclickevent');
// }

// function onChangeEvent(){
//     alert('onChangeEvent');
// }

// function overEvent(){
//     alert('overEvent');
// }

// function mouseOutEvent(){
//     alert('mouseOutEvent');
// }

// function mouseEnter(){
//     alert('mouseEnter');
// }

// function mouseDownEvent(){
//     alert('mouseDownEvent');
// }

// function mouseUpEvent(){
//     alert('mouseUpEvent');
// }

// function keyUpEvent(){
//     alert('keyUpEvent');
// }

// function keyDownEvent(){
//     alert('keyDownEvent');
// }

// function focusEvent(){
//     document.getElementById("example1").style.background=" aqua";
// }

// function submitEvent(){
//     console.log('BlurEvent');
// }


// window.addEventListener('load',(e)=>{
//     alert('aji');
// });

// window.addEventListener('click',(e)=>{
//     alert('say click');
// });

// window.addEventListener('resize',(e)=>{
//     // document.getElementById('resize').style.lineHeight = "60px"
//     let x = document.getElementById('resize');
//     x.style.color = "aqua"
//     x.style.fontStyle = "italic"
// });

// function  onchangeevent(e){
//     console.log(e);
// }

// function onchangeevent(event){
//     if(event.target.value.length > 0){
//         alert("not a empty")
//     }
//     else{
//         alert("is a empty")
//     }
// }

// let firstname = 'Aji';
// function onchangeevent(event){
//     if(event.target.value === firstname  ){
//         alert("same")
//     }
//     else{
//         alert("not a same")
//     }
// }



// let firstName = document.querySelectorAll(".aji");

// function clicked(){
//     for (let i=0;i<=firstName.length;i++)
//     {
//         firstName[i].style.color = "orange";
//         firstName[i].style.background = "aqua";
//     }
// }

// let btnClick = document.querySelectorAll(".ajith");

// for(let i=0; i<btnClick.length; i++){
//     btnClick[i].addEventListener("click", function(){
//     let getAttr = btnClick[i].getAttribute("alt");
//     if(getAttr === "btn1"){
//         alert("ajith1");
//         console.log(i, "ajith1");
//     }
//     else if(getAttr === "btn2"){
//         alert("ajith2");
//         console.log(i, "ajith2");
//     }
//     else if(getAttr === "btn3"){
//         alert("ajith3");
//         console.log(i, "ajith3");
//     }
//     else if(getAttr === "btn4"){
//         alert("ajith4");
//         console.log(i, "ajith4");
//     }
//     else{
//         alert("ajith5");
//         console.log(i, "ajith5");
//     }
//     });
// }

// let click = document.querySelector("#ajit");
// let btn = document.querySelector(".isclicked");
// btn.addEventListener("click", function(){
//     ajit.style.fontSize = "25px";
//     ajit.style.fontWeight = "bold";
//     ajit.style.color="orange";
// });


// getattribute
// console.log(document.getElementsByTagName('button')[1].getAttribute('name'));
// setattribute
// document.getElementsByTagName('button')[3].setAttribute('name','fst2');

// addclass
// document.getElementsByTagName('h1')[0].classList.add('aji');

// removeclass
// document.getElementsByTagName('span')[0].classList.remove('ajith')

// addsetattribute
// document.getElementsByTagName('h2')[0].setAttribute('class','kutty');

// removeattribute
// document.getElementsByTagName('div')[0].removeAttribute('title');

// contidion operators system
// && and
// let firstName = 'Ajith';
// let scndName = 'Kishore';
// if(firstName === 'Ajith' && scndName === 'Kishore'){
//     alert('its a true');
// }
// else{
//     alert('its a flase');
// }

// || or
// let age = 26;
// let height = 169;
// if(age === 25 || height ===  169){
//     alert('its a correct');
// }
// else{
//     alert('its a wrong');
// }

// ! not
// let x = 5;
// if(x != 5){
//     alert('yes');
// }
// else{
//     alert('no');
// }
// let y = x!= 5? 'yes' : 'no';
// alert(y);


// innerhtml
// document.getElementById('larmi').innerHTML = 'Hi Ajith Kishore'

// innertext
// document.getElementById('larmi').innerText = 'Hi Aji Kutty'


// push 
// let company = ['cts','tcs','wipro','infosys']
// company.push('accenture');
// console.log(company);

// // pop
// let brand = ['polo','snipes','toomy','indiantreian']
// brand.pop();
// console.log(brand);

// // shift
// let player = ['dhoni','kholi','aswhin','raina']
// player.shift();
// console.log(player);

// // unshift
// let bikes = ['r15','honda','hero','plusar']
// bikes.unshift('ktm');
// console.log(bikes);

// // concat
// let cloth =['viking','poomex','joockey','playboy']
// let watch =['sonata','titan','fasttrack','police']
// let accessories;
// accessories=watch.concat(cloth);
// console.log(accessories);

// // slice
// let waterbottle = ['aqua','kinley','bislery','tata']
// let cooldrinks;
// cooldrinks = waterbottle.slice(1,4);
// console.log(cooldrinks);

// // splice
// let names = ['aji','indrajjith','gowtham','solai']
// names.splice(2,2,'soundhar','karthi');
// console.log(names);

// let application ='';

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments').
// then(response => response.json()).
// then(data => 
//     data.forEach(program =>{
//         application += `<h4>${program.id}</h4>
//         <span>${program.name}</span>
//         <a href="javascript">${program.email}</a>
//         <p>${program.body}</p>`;
//         document.getElementsByTagName('body')[0].innerHTML = application
//     })
//     ).
// catch(error => console.log(error));


// for(let i=0;i<10;i++) {
//     console.log(data[i].id)

// window.addEventListener('load',()=>{
//     let html = `<input type="text" id="userInput">
//     <button id="btn" onclick="clickevent()">Get Product Name</button>
//     <p id="productName"></p>`;
//         document.getElementsByTagName('body')[0].innerHTML = html;
//     });


// function clickevent(){
//     var productId = document.getElementById("userInput").value;
//     let application ='';
// let file ="https://jsonplaceholder.typicode.com/photos";
// fetch(file)
// .then(response => response.json())
// .then(function(data){
//     for(let i=0; i<=data.length; i++) {
//         if(productId <= data[i]){
//             application +=`<img src=${data[i].thumbnailUrl}
//             <p>${data[i].id}</p>
//             <h2>${data[i].title}<h2>`;
//         document.getElementById("productName").innerHTML = application;
//         console.log(data);
//         }
//         else{
//             application = "error";
//         document.getElementById("productName").innerHTML = application;
//         }
//         }
// });
// }

// let application ='';
// let file ="https://jsonplaceholder.typicode.com/photos";
// fetch(file)
// .then(response => response.json())
// .then(function(data){
//     for(let i=0;i<=10;i++) {
//             application =`<img src=${data[i].thumbnailUrl}
//             <p>${data[i].id}</p>
//             <h2>${data[i].title}`;
//         document.getElementsByTagName('body')[0].innerHTML = application;
//         }
// });


// then(response => response.json())
// then(data => 
//     data.forEach(program =>{
//         application += `<p>${program.title}</p>`;
//         document.getElementsByTagName('body')[0].innerHTML = application
//     })
//     ).
// catch(error => console.log(error));





// let application ='';

// fetch('https://jsonplaceholder.typicode.com/photos').
// then(response => response.json()).
// then(data => 
//     data.map(program =>{
//         application += `<h4>${program.id}</h4>
//         <span>${program.name}</span>
//         <a href="javascript">${program.email}</a>
//         <p>${program.body}</p>`;
//         document.getElementsByTagName('body')[0].innerHTML = application;
//     })
//     ).
// catch(error => console.log(error));



// var numArray = [12, 3, 54, 78, 2, 0, 100, 18, 900, 5];

// numArray.sort(function(a, b) {
//   return a - b;
// });
// document.getElementById('demo').innerHTML = numArray;
// // console.log(numArray);



// var secondMax = function (arr) {     
//     var max = Math.max.apply(null, arr); 
//     arr.splice(arr.indexOf(max), 1); 
//     return Math.max.apply(null, arr); 
// };

// var arr = [12, 3, 54, 78, 2, 0, 100, 18, 900, 5];

// var max2 = secondMax(arr);
// document.getElementsByClassName('demo1')[0].innerHTML = max2;
// // console.log(max2);










function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[7];
        y = rows[i + 1].getElementsByTagName("TD")[7];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }