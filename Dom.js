console.log("Dom.js loaded");


const title =document.getElementById("company")

console.log(title.textContent += " - New");

// const myBudget = document.getElementsByClassName("myClass")[0];
// console.log(myBudget)

// myBudget.innerHTML = "<h1> New Budget </h1>"

const tagTest = document.getElementsByTagName('p')

for(let i=0; i < tagTest.length; i++)
{
    tagTest[i].textContent = "Changed to new Values"
}


const targetNav = document.querySelectorAll(".myClass")
targetNav.forEach(el => {
  el.setAttribute("style", "border: 5px solid black");
});

console.log(targetNav)

const pic = document.getElementById('pic');
pic.getAttribute('src');
pic.getAttribute('alt')


pic.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/960px-Lion_%28Panthera_leo%29_male_6y.jpg');
pic.setAttribute('alt', 'new image');
const link = document.getElementById('link');
link.setAttribute('href', 'https://www.google.com/')
link.setAttribute('target','_blank'); // open in new tab

// hasAttribute

console.log(pic.hasAttribute('width'));

const namBox = document.getElementById('nameBox');

nameBox.value = "Sai";
nameBox.disabled = true;

nameBox.setAttribute('value','preset');
nameBox.removeAttribute('disabled');

const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
  const box = document.getElementById('nameBox');
  box.disabled = !box.disabled; // property flip
});

pic.addEventListener('click',()=>{
  const  cur = pic.getAttribute('src');
  const a = 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  const b = 'https://images.unsplash.com/photo-1703248187251-c897f32fe4ec?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGElMjBiZWFyfGVufDB8fDB8fHww'
  pic.setAttribute('src',cur === a ? b : a);
});

link.textContent = 'MDN Docs';
link.setAttribute('href','https://developer.mozilla.org/');
link.setAttribute('rel','noopener'); // good practice when target=_blank

document.getElementById('title').addEventListener("click",function(){
  alert("you clicked the title!")
});

//mouseover event on image 

document.getElementById("pic").addEventListener("mouseover",function(){
  this.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMJkOaUiFKX0tIALpGT9IQS69x6YzAjutvQ&s";

});

document.getElementById("pic").addEventListener("mouseout",function(){
  this.src = "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
});