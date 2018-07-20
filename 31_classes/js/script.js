let Users =
{
    hasAccessToProfile: true,
    approved: true,
    sayHi: function()
    {
        return "Hi"
    }
}

function User(name, email, password)
{
    //конструктор
    this.name = name;
    this.email = email;
    this.password = password;
    this.__proto__ = Users;
}

const Fedya = new User("Fedya", "fedya@gmail.com", "qwerty");
console.log(Fedya);
console.log(Fedya.sayHi());

function FUser(name, email, password)
{
    //конструктор
    this.name = name;
    this.email = email;
    this.password = password;
    this.__proto__ = Users;
    this.sayHi = function()
    {
        return "Hi, " + this.name + "! You are registered."
    }
}

const Alla = new FUser("Alla", "alla@gmail.com", "ytrewq");
console.log(Alla);
console.log(Alla.sayHi());