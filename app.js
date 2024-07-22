let inpt = document.querySelector("input");
let add = document.querySelector(".input button");
let ul = document.querySelector(".task ul");
let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let p = document.createElement('p');
    p.innerText = inpt.value;
    p.style.display = "inline";
    p.style.marginRight ="7rem";
    let delbtn = document.createElement('button');
    delbtn.innerText = "DELETE";
    delbtn.classList.add("button-style");
    let li = document.createElement('li');
    li.append(p);
    li.append(delbtn);
    ul.appendChild(li);
    inpt.value ="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
})