const nav =document.querySelector("header");


const bars = document.querySelector("#b")
const mark =document.querySelector("#c")
// bars.style.display="block";

// function mobile(){
//     if(nav.style.display ==)
// }
nav.style.display="none"
function mobile() {
    if(nav.style.display=="block"){
        nav.style.display="none"
    } else{
        nav.style.display="block"
    }
}
// function display(){
//     bars.style.display="none"
//     mark.style.display="inline-flex"
// }
// function appear(){
//     bars.style.display="block"
//     mark.style.display="none"
//     nav.style.display="none"
// }
// mark.addEventListener("click",appear);
// bars.addEventListener("click",display);
bars.addEventListener("click",mobile);
// if(window.width <= "1200px"){
//     bars.style.display="none"
// }else{
//     mark.style.display="none"
// }
