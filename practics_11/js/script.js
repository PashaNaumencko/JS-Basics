const cryptoNames = document.querySelectorAll(".cryptoName");
const prices = document.querySelectorAll(".price");
const priceWidths = document.querySelectorAll(".priceWidth");

let crypto = 
[
    {
      name : "Bitcoin",
      price: 1188.37
    },
    {
      name : "Ethereum",
      price: 716
    },
    {
      name : "Litecoin",
      price: 140
    }
];

for(let i = 0; i < crypto.length; i++)
{
    cryptoNames[i].innerHTML = crypto[i]["name"];
    prices[i].innerHTML = crypto[i]["price"];
    priceWidths[i].style.width = crypto[i]["price"] + "px";
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    priceWidths[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
