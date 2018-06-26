let money = +prompt("Сколько денег?");
let apples = +prompt("Сколько яблок?");
let breads = +prompt("Сколько батонов хлеба?");
let applesCost = +prompt("Сколько стоит одно яблоко?") * apples;
let breadsCost = +prompt("Сколько стоит один батон хлеба?") * breads;
let result = money >= applesCost + breadsCost;
document.body.innerHTML = result;