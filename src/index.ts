interface User {
    name: String;
    id: number;

    toString();
    greet(message);
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    toString() {
        return ("Chal kat MKL !");
    }

    greet(message: string) {
        console.log(`Hello ${message}, today is ${(new Date()).toDateString()}!`);
    }
}


const user: User = new UserAccount("Murphy", 1);

console.log(user.toString());
user.greet("Oye Dallay !");
