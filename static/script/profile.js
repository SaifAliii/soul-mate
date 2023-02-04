var x = document.getElementById("container-img");
x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", myFunction1);
var elem = document.getElementById("profile-info");
    elem.style.animationFillMode= "forwards";
    elem.style.animationDelay= "0.5s";
    elem.style.animationDuration= "3s";
function myFunction(){
    elem.style.animationDirection = "normal";
    elem.style.animationName = "showUserInfo";
}
function myFunction1(){
    elem.style.animationName = "hideUserInfo";
}