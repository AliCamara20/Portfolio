const hamMenu = document.querySelector(".hamMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");
const form = document.forms["form"];
const errorMessage = document.getElementById("error");

const errors = [];


//inputs.forEach( input => input.addEventListener("input", document.getElementById("error").innerHTML = ""));





hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

function hide(){
    offScreenMenu.classList.toggle('active');
    hamMenu.classList.toggle('active');
}        

form.addEventListener("submit", (e) => {
        e.preventDefault();
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(fullName.length <= 0){
        errors.push("Name fill is empty, please enter your name it is required.<br>")
        //document.getElementById("error").innerHTML = 'Name fill is empty, please enter your name it is required';
    }

    if(email.length <= 0){
        errors.push("Email fill is empty, please enter your name it is required.<br>")
        //document.getElementById("error").innerHTML = 'Email fill is empty, please enter your name it is required';
    }

    else{
        errors.push("form submitted successfully");
        errorMessage.style.color = "green";
        
    }

    errorMessage.innerHTML = errors.join("") ;





});

const inputs = [fullName, email];

Array.from(inputs).forEach( input => input.addEventListener("input", () => {document.getElementById("error").innerHTML = ""}));

function fade(){
    errorMessage.innerHTML = ""
}