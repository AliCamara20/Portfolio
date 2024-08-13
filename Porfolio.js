const hamMenu = document.querySelector(".hamMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");
const form = document.forms["form"];
const errors = [];





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
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if(name.length <= 0){
        document.getElementById.innerHTML = 'Name fill is empty, please enter your name it is required';
    }

    if(email.length <= 0){
        document.getElementById("email").innerHTML = 'Email fill is empty, please enter your name it is required';
    }




});