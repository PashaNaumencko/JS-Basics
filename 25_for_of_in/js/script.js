console.log("You are at " + window.location);

const buttons = document.querySelectorAll("button");

for(button of buttons)
{
    button.style.backgroundColor = "lightblue";
}

let person = 
{
    name: "Pasha",
    surname: "Naumenko",
    age: 20
}

for(key in person)
{
    console.log(key);
}