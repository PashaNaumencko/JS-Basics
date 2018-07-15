const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

console.log("player:" + player);
console.log("computer:" + computer);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (computer == paper && player == scissors)
{
	console.log('player win');
}
else if (computer == scissors && player == paper)
{
	console.log('computer win');
}
else if (computer == rock && player == paper)
{
	console.log('player win');
}
else if (computer == paper && player == rock)
{
	console.log('computer win');
}
else if (computer == scissors && player == rock)
{
	console.log('player win');
}
else if (computer == rock && player == scissors)
{
	console.log('computer win');
}
