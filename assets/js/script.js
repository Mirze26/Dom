"use strict"

//let head  = document.getElementsByTagName("h1");

// console.log(head)

// for(const item of heads){
//     console.log(item)
// }

//-------------------------------

//let elem = document.getElementById("header");

//let elem = document.getElementsByClassName("header");

//let elem = document.querySelector("#header")

// let elem = document.querySelectorAll("#header")

// for (const iterator of elem) {
//     console.log(iterator)
// }

//-------------------------------------------------


//let h1 = document.querySelector("#products .card-item2 h1:nth-child(2)");

// let elem = document.querySelectorAll("#products .card-item2 h1");

// for (let i = 0; i < elem.length; i++) {
    
//     console.log(elem[i])
    
// }

//--------------------------------------------------------


//let elem = document.querySelector("#products .card-item1 h1");

// let elemText = elem.innerText;

// if (elemText == "salam") {
    
//     console.log("Correct")
    
// }

//let a  = document.querySelector("#products .card-item1 a")

//a.innerHTML = "<span>Masan</span>"

//console.log(elem)

//-----------------------------------------------------------------

//let element  = document.querySelector("#products .card-item1 h1")

// element.style.color = "red";
// element.style.backgroundColor = "yellow";

//element.classList.add("active")

//-------------------------------------------------------------

// let button = document.querySelector("#products .switch");

// button.onclick = function(){
//    // console.log("Clicked")
//    alert("Clicked1")
// }

// button.onclick = function(){
//     alert("Click2")
// }


// button.addEventListener("click", function(){
//     alert("Clicked1")
// })


// button.addEventListener("click", function(){
//     alert("Clicked2")
// })

//-------------------------------------------------------

// button.addEventListener("click", function(e){
//     //console.log(this)
//    // this.style.backgroundColor = "red"
//    //console.log(e)
//    e.target.style.backgroundColor= "magenta"
// })
//--------------------------------------------------------

//<3
// let btnOn = document.querySelector("#products .buttons .on");
// let btnOff = document.querySelector("#products .buttons .off");

// let body = document.querySelector("body");
// let icon = document.querySelector("#products .icon i");


// btnOn.addEventListener("click",function(){
//     body.style.backgroundColor = "white";
//     icon.style.color = "yellow"
// })


// btnOff.addEventListener("click", function(){
//     body.style.backgroundColor = "black";
//     icon.style.color = "gray";
// })

//-----------------------------------------------


// let icon = document.querySelector("#products .icon i");

// icon.addEventListener("click",function(){

//     if(!this.classList.contains("active-icon")&& !body.classList.contains("active-body")){
//       this.classList.add("active-icon");
//       body.classList.add("active-body");  
//     }
//     else{
//         this.classList.remove("active-icon");
//         body.classList.remove("active-body");
//     }
// })


// body.addEventListener("mouseout",function(){
//     console.log("out")
// })

//------------------------------------------------------------------


let btn = document.querySelector("#products button");
let input = document.querySelector("#products input");
let header = document.querySelector("#products h1")

// btn.addEventListener("click",function(){
//     let inputValue = input.value;
//     header.innerText = inputValue;
//     input.value = "";
// })


btn.addEventListener("click",function(){
    let inputValue = input.value;
    let li = document.createElement("li");
    li.className = "list-group-item mt-2";
    li.innerText = inputValue;
    ul.append(li);
    input.value = "";
})
