const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");


createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("div");
    inputBox.className = "input-box";

    let text = document.createElement("textarea");
    text.className = "text";

    let img = document.createElement("img");
    img.className = "delete-icon";
    img.src = "images/delete.png"

    inputBox.appendChild(text);
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    
    
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
       
    }
    
});

    

