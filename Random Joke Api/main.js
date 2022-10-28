let Button = document.getElementsByTagName("button");

let jokeP = document.querySelector("p");


document.addEventListener("DOMContentLoaded", getJoke);



async function getJoke() {

    let jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
    })

    let jokeObj = await jokeData.json();

    jokeP.innerHTML = jokeObj.joke;

    console.log(jokeData);
}
Button[0].addEventListener('click', getJoke);