window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav-bar").className = "nav-scrolled";
    } else {
        document.getElementById("nav-bar").className = "navbar-init";
    }
}

function toggle(textArea) {
    var x = document.getElementById(textArea);
    var y = document.getElementsByClassName("tier-body");
    if (x.style.display === "none") {
        for (var i=0, len=y.length|0; i<len; i=i+1|0) {
            y[i].style.display ="none";
        }
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
function changeColumn(){
    var x = document.getElementById("first-col");
    var y = document.getElementById("second-col");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}