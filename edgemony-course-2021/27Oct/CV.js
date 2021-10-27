const darkModeBtn = document.querySelector(".btnDarkMode");
darkModeBtn.addEventListener(
    "click",
    () => {
        document.body.classList.toggle("darkMode");
    }