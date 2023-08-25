let index = 0;
const containerNotes = document.getElementById("listProducts");
function createNote(containerNotes,name,count){
    containerNotes.innerHTML += getNote(name,count);
}

function getNote(name,count){
    return`
           <div class="note">
                <div class="countProducts">
                    ${count.value}
                </div>
                <span class="nameProducts">${name.value}</span>
                <div class="containerButtons">
                    <input class="buttonDone" type="checkbox" onclick="statusNote(this,this.parentNode)" value=${index++}>
                    <button class="buttonsDelete" onclick="removeNote(this.parentNode)">X</button>
                </div>
           </div>
        `
}

function removeNote(parent){
    parent.parentNode.remove();
}

function statusNote(statusNote,containerNote){
    if(statusNote.checked){
        containerNote.parentNode.classList.add("bg-dark")
    }
    else{
        containerNote.parentNode.classList.remove("bg-dark")
    }
}

function addProduct(){
    const nameProduct = document.getElementById("nameProduct")
    const countProducts = document.getElementById("countProducts");
    createNote(containerNotes,nameProduct,countProducts)
}
