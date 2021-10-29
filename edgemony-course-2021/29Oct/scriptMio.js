// const body = document.body;
// const buttonStart = document.querySelector(".button-name");


// const wrapper = document.querySelector(".intestazione");
// const h1Element = document.querySelector("h1");
// const h1RenameBtn = document.querySelector(".button-name");

 
// h1RenameBtn.addEventListener(
//     "click",
//     () => {
//       h1Element.textContent = "preorder now";
//     },
//     { once: true }
// );
const h1Element = document.querySelector("h1")
const apriprom = document.querySelector(".btn");
apriprom.addEventListener("click", () => {
    let rename = prompt ("Lasciami un commento");
    h1Element.textContent = rename
});

const list = document.querySelector("ul")
function

