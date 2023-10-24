
var cookie = document.querySelector(".cookie img");
var ammount = document.querySelector(".data h1");
var multiplyer = 1;

function addCookie(){
    var cookies = parseInt(ammount.innerHTML);
    cookies = cookies + 1 * multiplyer;
    ammount.innerHTML = cookies;
    saveData();
}

cookie.addEventListener("mousedown", () => {
    cookie.style.transform = "scale(0.95)";
    addCookie();
});
cookie.addEventListener("mouseup", () => {
    cookie.style.transform = "scale(1)";
});
cookie.addEventListener("mouseleave", () => {
    cookie.style.transform = "scale(1)";
}); 

function saveData(){
    localStorage.setItem("data", ammount.innerHTML);
}
function showData(){
    ammount.innerHTML = localStorage.getItem("data");
}

function resetCookies(){
    ammount.innerHTML = 0;
}
showData();