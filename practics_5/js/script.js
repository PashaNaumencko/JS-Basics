console.log("You are at " + window.location);

let money = +prompt("Сколько денег?");
let apples = +prompt("Сколько яблок?");
let breads = +prompt("Сколько батонов хлеба?");


function haveEnough(money, apples, breads)
{
    let applesCost = +prompt("Сколько стоит одно яблоко?") * apples;
    let breadsCost = +prompt("Сколько стоит один батон хлеба?") * breads;
    return (money >= applesCost + breadsCost) ? "Вам хватает денег на покупки" : "Вам не хватает денег на покупки";
}

document.body.innerHTML = haveEnough(money, apples, breads);