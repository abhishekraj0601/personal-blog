var icon = document.getElementById("icon");
var stng = document.getElementById("stng");
var header = document.getElementById("header");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
         side.style.color="var(--secondary-color)"
         hide1.style.color="var(--secondary-color)"

        header.style.transition="all 0.7s";
        home1.style.transition="all 0.7s";
        abut.style.transition="all 0.7s";
        serv1.style.transition="all 0.7s";
        pro1.style.transition="all 0.7s";



    }else{
        icon.src='moon.png';
        

    }
}



var home1 = document.getElementById("content");
var serv1 = document.getElementById("services");
var abut = document.getElementById("about");
var pro1 = document.getElementById("project");
var cont1 = document.getElementById("contact-section");

function home(){
    
    if(checkSize()){
        header.style.display="none";        
    }
    home1.style.display="block";
    serv1.style.display="none";
    pro1.style.display="none";
    abut.style.display="none";
    cont1.style.display="none"

}
function cont(){
    if(checkSize()){
        header.style.display="none";        
    }
    home1.style.display="none";
    serv1.style.display="none";
    pro1.style.display="none";
    abut.style.display="none";
    cont1.style.display="block";
}   

function serv(){
    if(checkSize()){
        header.style.display="none";        
    }
    cont1.style.display="none"

    home1.style.display="none";
    serv1.style.display="block";
    pro1.style.display="none";
    abut.style.display="none";

}

function pro(){
    if(checkSize()){
        header.style.display="none";        
    }
    cont1.style.display="none"

    home1.style.display="none";
    serv1.style.display="none";
    pro1.style.display="block";
    abut.style.display="none";

}
function abt(){
    if(checkSize()){
        header.style.display="none";        
    }
    cont1.style.display="none"

    abut.style.display="block";
    home1.style.display="none";
    serv1.style.display="none";
    pro1.style.display="none";
}

function orange(){
    document.documentElement.style.setProperty("--teriotry-color", "orange")
}
function red(){
    document.documentElement.style.setProperty("--teriotry-color", "red")
}
function green(){
    document.documentElement.style.setProperty("--teriotry-color", "green")
}
function pink(){
    document.documentElement.style.setProperty("--teriotry-color", "blue")
}



/*------ media quarry------*/
let show = document.getElementById("show");
let hide = document.getElementById("hide");

show.onclick = function(){
    header.style.display="block";
}
hide.onclick = function(){
    header.style.display="none";
}
var header = document.getElementById("header");
function checkSize(){
    var x = window.matchMedia("(max-width:500px)")
    if(x.matches){
       
        return true;
    }else{
        return false;
    }
}


var sidebar = document.getElementById("sidebar");
var btns = sidebar.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



// this is auto writing section

var typed = new Typed(".auto-type", {
    strings: ["coader","YouTuber","web developer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})