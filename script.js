let todoitems=document.getElementById("todoitems");
let todoinput=document.getElementById("todoinput")
let input=document.getElementById("input")
let itembtn=document.getElementById("item-btn");
let desc = document.getElementById("desc");
let task = input.value


function addnew(){
    todoinput.style.display="flex";
   input.value=null
 todoinput.classList.toggle("todoinputtog")

    
}

function addition(task){
    if(input.value===""){
         todoinput.style.display="none"
    todoinput.classList.remove("todoinputtog")
    alert("Enter Task")
        return;
    }
    desc.innerText=""
task=input.value;
console.log(task)
let todoitem=document.createElement("div");
todoitem.classList.add("todoitem");

let item=document.createElement("div");
item.classList.add("item");
item.id="item";
item.textContent=task;

let btn=document.createElement("button");
btn.classList.add("item-btn")
btn.id="item-btn"
btn.textContent="X";

btn.addEventListener("click",()=>{
    todoitem.remove();

   
})
todoitem.appendChild(item)
todoitem.appendChild(btn)
todoitems.appendChild(todoitem);

 todoinput.style.display="none"
    todoinput.classList.remove("todoinputtog")

}
