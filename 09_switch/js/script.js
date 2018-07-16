let answer = prompt("Введите имя музыканта:").toLowerCase();

switch(answer)
{
    case "dr. dre":
        console.log("rap");
        break;
    case "jimmy hendrix":
        console.log("rock");
        break;
    case "breatny spears":
        console.log("pop");    
        break;
    default:
        console.log("no such artist in database");
        break;
}