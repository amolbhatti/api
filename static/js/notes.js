showNotes(getLoc());
const myArea = document.querySelector("#myarea");
document.querySelector("#addnote").addEventListener('click', function () {


    if (myArea.value.length == 0) {
        showAlert();
    }
    else {
        let values = myArea.value;
        let mydata;
        if (locEmpty() == true) {
            mydata = new Array(values);
        } else {
            mydata = getLoc();

            mydata.push(values);

        }

        addLoc(mydata);
        myArea.value = "";
        showNotes(getLoc());
    }
});
// ----------------------------------------search logic-----------------------------
let search = document.querySelector("#search");
    search.addEventListener("input", function () {
    let inputVal=search.value;
    let nodecard = document.querySelectorAll(".nodecard");

    Array.from(nodecard).forEach(function (element) {
        
        let cardText = element.getElementsByTagName("p")[0];
        
        if (cardText.innerText.includes(inputVal)) {
            element.parentElement.style.display = "inline-Block";
        }
        else {
            element.parentElement.style.display = "None";
        }
    });
});



// ---------------------------------------functions--------------------------
function showAlert() {
    document.querySelector(".custom-alert").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Holy Buddy!</strong> you Should enter something first
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
}

function locEmpty() {
    if (localStorage.getItem('mynotes') == null) {
        return true;
    } else {
        return false;
    }
}


function addLoc(data) {
    localStorage.setItem('mynotes', JSON.stringify(data));
}

function getLoc() {
    return JSON.parse(localStorage.getItem('mynotes'));
}


function showNotes(data) {
    let html = "Nothing entered";
    if (data !=null) {
        html = "";
        data.forEach(function (elements, index) {

            html += `<div class="card mg" style="width: 18rem;">
<div class="card-body nodecard ">
  <h5 class="card-title"> Note ${index + 1}</h5>
  <p class="card-text">${elements}</p>
  <Button onclick="deleteNotes(this.id)" class="btn btn-primary " id="${index}">Delete</Button>
</div>
</div>`
        });


    }

    document.querySelector("#custom").innerHTML = html;

};

function deleteNotes(id) {
    let notes = getLoc();
    notes.splice(id, 1);
    localStorage.clear();
    addLoc(notes);
    showNotes(getLoc());

}




