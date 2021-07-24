


const urlParams = new URLSearchParams(window.location.search);
const noteId=urlParams.get("noteId");
console.log(noteId);



const createNotes= document.querySelector(".create-note-button");



const apiUrl="http://localhost:8000";
const token = localStorage.getItem("jwt");

createNotes.addEventListener("click",()=>{

const heading= document.querySelector(".create-note-heading").value;
const content= document.querySelector(".create-note-input").value;
    if(token){
    fetch(`${apiUrl}/notes/update/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization:token,
        },
        body: JSON.stringify({ heading, content}),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.message){
              location.href="/pages/dashboard/dashboard.html";
          }
        })
        .catch((err) => {
          alert("Error fetching data");
          console.log(err);
        });
    }else{
        res.json("Try again");
    }
    });

