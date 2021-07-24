const body = document.querySelector("body");
const toLogin=document.querySelector(".signIn-signUp");

window.addEventListener('load',()=>{
    body.classList.add("visible");
    const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/pages/dashboard/dashboard.html";
  }
})

toLogin.addEventListener("click",()=>{
    location.href="/pages/signin/authenticate.html";
})
