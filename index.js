const btn= document.querySelector(".btn");
const notesContainer= document.querySelector(".notesContainer");
const defaultNote =document.querySelector("#defaultNote");
const defaultDate=document.querySelector("#defaultDate"); 
const LocalDate= new Date().toLocaleDateString();
const LocalTime = new Date().toLocaleTimeString();
const dateStamp= `${LocalDate} ${LocalTime}`;
defaultDate.innerHTML= dateStamp;





const userInput ={
    formTitleContent: document.querySelector(".title"),
    formNoteContent: document.querySelector(".note")

};


function createNote(){
   

    if(notesContainer.lastElementChild===defaultNote){

        if(userInput.formTitleContent.value=== ""|| userInput.formNoteContent.value=== ""){
        alert("please enter an note title and note content.")
        }
        else{
            defaultNote.remove()
        renderElements()
        addDelBtnListeners()
        
        
        }
    }
    
    else{
        if(userInput.formTitleContent.value=== ""|| userInput.formNoteContent.value===""){
            alert("please enter an note title and note content.")
        }
        else{
            renderElements()
           addDelBtnListeners()
        };
    };
    
};






function renderElements(){
    const note = document.createElement("div");
    const  noteTitle = document.createElement("h4");
      const noteContent= document.createElement("p");
     const  noteDate=document.createElement("span");
     const  deleteNoteBtn=document.createElement("span");


     function addClassesAndContent(note,noteTitle,noteContent,noteDate,deleteNoteBtn){
        note.classList.add("renderedNote")
        deleteNoteBtn.classList.add("exitButton");
        noteDate.classList.add("date")
        deleteNoteBtn.innerHTML="x";
        noteTitle.innerHTML=userInput.formTitleContent.value;
        noteContent.innerHTML=userInput.formNoteContent.value;
        noteDate.innerHTML=dateStamp;
        }
        function appendNote(note,noteTitle,noteContent,noteDate,deleteNoteBtn){
            note.appendChild(noteTitle);
            note.appendChild(noteDate);
            note.appendChild(deleteNoteBtn);
            note.appendChild(noteContent);
            notesContainer.appendChild(note);
            noteForm.reset();
        }

        addClassesAndContent(note,noteTitle,noteContent,noteDate,deleteNoteBtn)
        appendNote(note,noteTitle,noteContent,noteDate,deleteNoteBtn)
}


function addDelBtnListeners(){
    const deleteBtns= document.querySelectorAll(".exitButton");
    deleteBtns.forEach(btn=>{
        btn.addEventListener("click", ()=> {
            btn.parentNode.parentNode.removeChild(btn.parentNode)
        });
    });
}



btn.addEventListener("click", (event)=>{
    event.preventDefault();
    createNote();
} );
