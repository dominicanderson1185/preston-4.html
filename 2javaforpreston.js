const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".controlbar").classList.toggle("responsive");
}
var now = new Date();
var dayOfWeek = now.getDay();
if (dayOfWeek != 5) {
    document.getElementById("announcement").style.display = "none";
}

var now = new Date();
var dayOfWeek = now.getDay();
if (dayOfWeek != 5) {
    document.getElementById("announcement").style.display = "none";
}
function test1()
{
    var text ="this is my test"
    return text;
}

function test2()
{
    var text1 ="this is the second test"
    return text1;
}