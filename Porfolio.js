const hamMenu = document.querySelector(".hamMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");
const form = document.forms["form"];
const errorMessage = document.getElementById("error");

const errors = [];



//inputs.forEach( input => input.addEventListener("input", document.getElementById("error").innerHTML = ""));
// This is the JS file connected to Portfolio.html.




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
    





});

const inputs = [fullName, email];

Array.from(inputs).forEach( input => input.addEventListener("input", () => {document.getElementById("error").innerHTML = ""}));
/*
function fade(){
    errorMessage.innerHTML = ""
}
    */
