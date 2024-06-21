let acc = document.querySelector(".acc");
let req = document.querySelector(".req");
let remove = document.querySelector(".remove");


acc.addEventListener("click", (e) => {
    req.innerHTML = "Friend"
    req.style.color = "#32ba32"

})
remove.addEventListener("click", (e) => {
    req.innerHTML = "Add Frined";
    req.style.color = "black"
})