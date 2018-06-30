console.log("You are at " + window.location);

let colored = document.querySelector(".colored");

console.log(colored);
console.log(colored.style);

let quest = prompt("???????????????");

//colored.style.backgroundColor = "blue";
colored.style["background-color"] = quest;
