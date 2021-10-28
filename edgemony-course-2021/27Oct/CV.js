const darkModeBtn = document.querySelector(".btnDarkMode");
darkModeBtn.addEventListener(
"click",
() => {
 document.body.classList.toggle("darkMode");
}
);

document.addEventListener("click", (event) => {
    const somma = document.querySelector(".somma");
    let input = prompt ("inserisci numeri");
    const numbers = input.split(","); 
    //fino a qua, array con stringhe
    const putnumbers =[];
    for (x of numbers) {
        putnumbers.push(parseInt(x))
    }
    console.log(putnumbers);
    //qua, crea l'array con i numeri
    const sum = (numOne, numTwo)=> numOne + numTwo;
    function calc (operation, numbers) {
        let totsum = 0
        totsum = operation(...numbers)
        return totsum;
    }
    calc(sum)
    setTimeout (()=> {console.log(calc(sum))}, 5000)
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
