const darkModeBtn = document.querySelector(".btnDarkMode");
darkModeBtn.addEventListener(
"click",
() => {
 document.body.classList.toggle("darkMode");
}
);

document.addEventListener("click", (event) => {
    const somma = document.querySelector(".somma");
    let numberChoise = prompt ("inserisci numeri");
    const numbers = numberChoise.split(",")  

    const parsedNumbers =[]
    const sum = (numOne, numTwo) => numOne + numTwo;

    console.log();
}
);

// function colorCh(){
// const r = Math.round(Math.random()*256);
// const g = Math.round(Math.random()*256);
// const b = Math.round(Math.random()*256);

// colore_rgb = "rgb("+r+","+g+","+b+",)";
// const colorCh = document.querySelector (".circle")
// classList.toggle.colorCh
// }
// setInterval(colorCh,5000);
