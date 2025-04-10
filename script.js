function showMessage() { 
    alert("Hello! Welcome to my website."); 
}
function changeBgColor() { 
    document.body.style.backgroundColor = "lightblue"; 
}
function displayGreeting()  {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello", + name + "! Welcome to my webside";
}
function checkAge(){
    let age = document.getElementById("ageInput").value;
    if (age >= 18) {
        alert("you're an adult");
    } else {
        alert("you are still a kid");
    }
 }
<img src ="script.js" outlick="favorite()" ondblclick="unfavorite()"></img>