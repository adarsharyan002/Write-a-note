const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get("noteId")

var  cardcont  = document.querySelector(".card-container");
var  logout  = document.querySelector(".logout");
var  newNote  = document.querySelector(".new-note");





const apiUrl="http://localhost:8000";
const token = localStorage.getItem("jwt");

logout.addEventListener("click",()=>{
  localStorage.removeItem("jwt");
  location.href="/";
})

newNote.addEventListener("click",()=>{
location.href="/pages/createsnotes/notes.html";
})


// var database = [
//     {heading:"adarsh2",content:"gvmjhsbhdbsf,kjds",id:"2"},
//     {heading:"adarsh3",content:"gvmjhsbhdbsf,kjds",id:"3"},
//     {heading:"adarsh4",content:"gvmjhsbhdbsf,kjds",id:"4"},
// ];

  const makingcard = (array)=>{
      array.forEach(carddata => {
        const {heading,content}= carddata;
        const id = carddata.noteid;

        const card= document.createElement("div");
        card.classList.add("card");
        card.id=id;
    
const insideHtml=`<div class="card-header"><div class="card-heading">${heading}</div> <a href="">
<div class="delete-note">
  <img src="../../assets/deleteicon.svg" alt="" /></div
></a><a href="../updatenotes/notes.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit-note.svg" alt="" /></div></a></div><div class="card-content">${content}</div>`;
        
        card.innerHTML=insideHtml;
        cardcont.appendChild(card);
       

var  deleteNote  = card.querySelector(".delete-note > img");


deleteNote.addEventListener("click",(event)=>{
  event.preventDefault();

  console.log("hello");
  if(token){
    fetch(`${apiUrl}/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization:token,
        },
        
      })
        .then((res) => res.json())
        .then((data) => {
         console.log(data);
         location.href = "Dashboard.html"
        })
        .catch((err) => {
          alert("Error deleting data");
          console.log(err);
        });
    }else{
        res.json("Try again");
    }
  
  



    });
    
          
      });

  
  }

// makingcard(database);

const body = document.querySelector("body");

window.addEventListener('load',()=>{
  if(token){
  fetch(`${apiUrl}/notes/getallnotes`,{
    METHOD:"GET",
    headers:{
      authorization:token,
    },

  })
  .then((res)=>res.json())
  .then((data)=>{
   userData= data.data;
   makingcard(userData);
  })
  .catch((err) => {
    alert("Error Fetching data");
    console.log(err);
  });
}
})







    
    


