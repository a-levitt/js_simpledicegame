let randomNumber1 = Math.floor((Math.random() * 6)) + 1;
let randomDice1 = "images/dice" + randomNumber1 + ".png";

let randomNumber2 = Math.floor((Math.random() * 6)) + 1;
let randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 First player wins!";
}
else if (randomNumber1 < randomNumber2) {
   document.querySelector("h1").textContent = "Second player wins! 🚩";
}
else {
    document.querySelector("h1").textContent = "🤝 Draw 🤝";
}

var delayInMilliseconds = 5000;
setTimeout(() => {
    document.querySelector("h1").textContent = "Refresh Me";
}, delayInMilliseconds);
