var popupbutton = document.getElementById("popup-button")
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

popupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelpop = document.getElementById("cancel-pop")
cancelpop.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})
var addbook = document.getElementById("add-book")
var container = document.querySelector(".container")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click", function (event) {
     event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h1>${booktitleinput.value}</h1>
               <h3>${bookauthorinput.value}</h3>
               <p>${bookdescriptioninput.value}</p>
                 <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
     
})
function deletebook(event) {
    event.target.parentElement.remove()
    alert("confirm To Delete, Then click 'ok'")
}



function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    const correctUsername = "Thivakar";
    const correctPassword = "2004";

    if (username === correctUsername && password === correctPassword) {

        
        localStorage.setItem("loggedIn", "true");

    
        window.location.href = "dixit.html";

    } else {

        document.getElementById("message").textContent =
            "Invalid username or password !";
            
    }
}

function signup() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    const correctUsername = "Dixit";
    const correctPassword = "2008";

    if (username === correctUsername && password === correctPassword) {

        localStorage.setItem("loggedIn", "true");

    
        window.location.href = "dixit.html";

    } 
    
    else {

        document.getElementById("message").textContent =
            "Invalid username or password !";
            
    }
}