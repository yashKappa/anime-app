let menu=document.querySelector("#menu-bars");
let navbar=document.querySelector(".navbar");

menu.onclick=()=>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle("active");
} 

let slideIndex = 0;
showSlides();

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
    var x = document.getElementById("drop-down-box");
    if (x.className.indexOf("") == -1) {
      x.className += " ";
    } else { 
      x.className = x.className.replace(" ", "");
    }
  }

    function auth(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if(name == "Admin" && password == "1234"){
        window.location.assign("Popular Shows.html");
        alert("login sucessfully");
    }
}
