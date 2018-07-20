class Customer
{
    constructor(name)
    {
        this.name = name;
    }
    buy()
    {
        console.log("Куплено");
    }
}

class childCustomer extends Customer
{
    getPresent()
    {
        console.log("Шарик в подарок");
    }
}