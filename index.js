//Theme Switching code that will be implemented later
function light(){
    let body = document.body;

    body.classList.add("light");
    body.classList.remove("dark");

    const elementList = document.getElementsByClassName("theme-switchable");
    for (let i = 0; i < elementList.length; i++){
        elementList[i].classList.add("light");
        elementList[i].classList.remove("dark");
    }
}

function dark(){
    let body = document.body;

    body.classList.add("dark");
    body.classList.remove("light");

    const elementList = document.getElementsByClassName("theme-switchable");
    for (let i = 0; i < elementList.length; i++){
        elementList[i].classList.add("dark");
        elementList[i].classList.remove("light");
    }
}