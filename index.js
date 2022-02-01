// if user add a notes add to the local storage

displayNotes();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    // console.log(addTxt.value);

    if (addTxt.value == "") {
        alert("You are adding an empty note");
    } else {
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
    }
     // console.log(notesObj);
        displayNotes();

});

//function to Display elements from Local Storage
 
function displayNotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }


    let html = "";

    notesObj.forEach(function (ele, index) {

        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 22rem;">
                     <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${ele}</p>
                        <button id = "${index}"  onclick = "deleteNotes(this.id)" class="btn btn-primary">Delete Note </button>
                       
                    </div>
                </div>
              `;

    });


    let notesElm = document.getElementById("notes");

    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show here "Add a notes" `;
    }   
}


//Funtion to delete a Note

function deleteNotes(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    displayNotes();
}

// Function to marks as IMP

function markAsImp(index) {


}

//Search  Notes
let searchTxt = document.getElementById("searchTxt");

 searchTxt.addEventListener('input', function () {

    let inputVal = searchTxt.value;

    let noteCards = document.getElementsByClassName("noteCard");

    Array.from(noteCards).forEach(function (ele) {

        let cardsTxt = ele.getElementsByTagName("p")[0].innerText;

        if (cardsTxt.includes(inputVal)) {
            ele.style.display = "block";
        } else {
            ele.style.display = "none";
        }

    });
});

