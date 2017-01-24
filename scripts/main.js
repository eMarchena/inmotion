/*
var home = document.getElementById("home");
var portfolio = document.getElementById("portfolio");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var blog = document.getElementById("blog");
var topRow = document.getElementById("top-row");
var bottomRow = document.getElementById("bottom-row");

home.addEventListener("click", hover);
portfolio.addEventListener("click", hover);
about.addEventListener("click", hover);
contact.addEventListener("click", hover);
blog.addEventListener("click", hover);

function hover() {
    console.debug(this.attributes.id);
    var isActive = this.attributes.onmouseover;
    console.debug(this.attributes.className);
}
*/

var panels = document.getElementById("container");

var items = panels.querySelectorAll("div");

for (var i = 0;i<items.length; i++){
    items[i].addEventListener("mouseenter", mainHover);
    items[i].addEventListener("click", mainButton);
}

function mainButton() {
    console.debug(this);
}

function mainHover() {
     console.debug(this);
}