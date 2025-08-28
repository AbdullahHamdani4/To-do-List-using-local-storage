let input=document.querySelector("input");
let submitbtn=document.querySelector(".submitbtn");
let cleartaskbtn=document.querySelector(".cleartaskbtn");
let form=document.querySelector("form");
let list=document.querySelector("ol");
let p=document.querySelector(".p");
let delbtn=document.querySelector(".delbtn");
let model=document.querySelector(".model");
let okbtn=document.querySelector(".yesbtn");
let cancelbtn=document.querySelector(".cancelbtn");
let navbarlinks=document.querySelector(".navbarlinks");
let navbartop=document.querySelector(".navbartop-row")

let bar=document.querySelector(".menu-icon");
let navlinks=document.querySelector(".navbarlinks")
bar.addEventListener("click",()=>{
  navlinks.classList.toggle("active")
})
document.addEventListener("click", (e) => {
  if (!navbarlinks.contains(e.target) && !navbartop.contains(e.target)) {
    navbarlinks.classList.remove("active");
  }
});
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   
   
   let task=input.value;
   if(task===""){
    p.classList.remove("hide");
   }else{
     p.classList.add("hide")
    let newli=document.createElement("li");
    newli.textContent=task;
    
    let btn=document.createElement("button");
    btn.innerHTML='<i class="fa-regular fa-trash-can delbtn" style="color: #e90707;"></i>';
    btn.addEventListener("click",()=>{
        newli.remove();
         savedata()
    });
    newli.appendChild(btn);
    list.appendChild(newli)
    input.value="";
    savedata()
   }
});
cleartaskbtn.addEventListener("click",()=>{
  model.classList.remove("hide")
   p.classList.add("hide")
});
okbtn.addEventListener("click",()=>{
  list.innerHTML="";
  savedata()
  model.classList.add("hide");
})
cancelbtn.addEventListener("click",()=>{
  model.classList.add("hide");
})

function savedata() {
  localStorage.setItem("data",list.innerHTML)
}
function printdata(){
list.innerHTML=localStorage.getItem("data")
}
printdata()
let delbtnpart2=document.querySelectorAll(".delbtn");
delbtnpart2.forEach((btn)=>{
btn.addEventListener("click",()=>{
  btn.parentElement.parentElement.remove();
  savedata()
})
})
 
