const btn= document.querySelector(".btn");
const notesContainer= document.querySelector(".notesContainer");
const defaultNote =document.querySelector("#defaultNote");
const defaultDate=document.querySelector("#defaultDate"); 
const LocalDate= new Date().toLocaleDateString();
const LocalTime = new Date().toLocaleTimeString();
defaultDate.innerHTML= `${LocalDate} ${LocalTime}`;
const alldeleteButtons= document.querySelectorAll(".exitButton")




function createNote(){

    let noteForm= document.querySelector("#noteForm");
    let formTitleContent = document.querySelector(".title").value;
    let formNoteContent = document.querySelector(".note").value;
    const note=document.createElement("div");
    const noteTitle=document.createElement("h4");
    const noteContent =document.createElement("p");
    const noteDate =document.createElement("span");
    const deleteNoteBtn = document.createElement("span");
    deleteNoteBtn.innerHTML="x";
    deleteNoteBtn.classList.add("exitButton")


    if(notesContainer.lastElementChild===defaultNote){
    
        if(formTitleContent=== ""|| formNoteContent===""){
            alert("Please give your note a title and some content");

        }
        else{
            note.classList.add("renderedNote");
            noteTitle.innerHTML=formTitleContent;
            noteDate.classList.add("date");
            noteDate.innerHTML= `${LocalDate} ${LocalTime}`;
            noteContent.innerHTML=formNoteContent;
            note.appendChild(noteTitle);
            note.appendChild(noteDate);
            note.appendChild(deleteNoteBtn)
            note.appendChild(noteContent)
            notesContainer.replaceChild(note,defaultNote);
            noteForm.reset();
        }

        }


    
    else{

        if(formTitleContent=== ""|| formNoteContent===""){
            alert("Please give your note a title and some content");

        }

else{
            note.classList.add("renderedNote");
            noteTitle.innerHTML=formTitleContent;
            noteDate.classList.add("date");
            noteDate.innerHTML= `${LocalDate} ${LocalTime}`;
            noteContent.innerHTML=formNoteContent;
            note.appendChild(noteTitle);
            note.appendChild(noteDate);
            note.appendChild(deleteNoteBtn)
            note.appendChild(noteContent)
        notesContainer.appendChild(note);
        noteForm.reset();

}
       
    
    }
 
}

function deleteNote(element){
   element.parentElement.remove()
}


alldeleteButtons.forEach(x=>x.addEventListener("click",()=>{
    deleteNote(note)
}))

btn.addEventListener("click", (event)=>{
    event.preventDefault();
    createNote();
} )