
var cookie = document.querySelector(".cookie img");
var ammount = document.querySelector(".data h1");
var buyMultiplier = document.getElementById('multiplier');
var buyGranny = document.querySelector("#granny");
var buyFactory = document.querySelector("#factory");

var multiplier = 1; 
var grannies;
var factories;
var cookies_ammount = parseInt(ammount.innerHTML);

function addCookie(){
    cookies_ammount = parseInt(ammount.innerHTML);
    cookies_ammount = cookies_ammount + 1 * multiplier;
    ammount.innerHTML = cookies_ammount;
    saveData();
}

buyMultiplier.addEventListener("mousedown", () => {
    if(cookies_ammount >= 10 * multiplier * multiplier){
       cookies_ammount -= 10 * multiplier * multiplier;
        ammount.innerHTML = cookies_ammount;
        multiplier+=1;
        document.querySelector("#multiplier .quantity").innerHTML = multiplier;
    }
});
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
    cookies_ammount = parseInt(ammount.innerHTML);
}

function resetCookies(){
    ammount.innerHTML = 0;
    multiplier = 1;
    saveData();
}
showData();