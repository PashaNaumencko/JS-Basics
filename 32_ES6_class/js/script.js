class User
{
    constructor(name, email, password)
    {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    sayHi()
    {
        return "Hello " + this.name; 
    }
}

class FemaleUser extends User
{
    sayHi()
    {
        return "Hi " + this.name + "! You are registered.";
    }
}

const user = new User("someone", "sw@gmail.com", "123456");
console.log(user);
console.log(user.sayHi());
const femaleUser = new FemaleUser("Anya", "anya@gmail.com", "qwe123");
console.log(femaleUser);
console.log(femaleUser.sayHi());