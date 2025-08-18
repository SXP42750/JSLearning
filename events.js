const para = document.getElementById("heading")
para.textContent = "learning events in DOM"

const input = document.getElementById("nameInput");
const username = document.getElementById("username")
  const greeting = document.getElementById("greeting");
  const button = document.getElementById("hello")
 
  input.addEventListener("change", () => {
    greeting.textContent = "Hello, " + input.value + " 👋";
  });

  button.addEventListener("click",function(){
    button.textContent = "bye , " + input.value + " see you"
  })

  username.addEventListener("focus",()=>{
    username.style.backgroundColor = "lightyellow" ;
  })

  username.addEventListener("blur",()=>{
    username.style.backgroundColor = "white" ;
  })