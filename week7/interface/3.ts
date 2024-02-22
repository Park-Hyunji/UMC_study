interface Person{
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    hello() : void{
        console.log('안녕하세요! ${this.name} 입니다');
    }

    public hi(): void{
        console.log('안녕 ${this.name}임');
    }
}

const person : IPerson =  new Person('Mark');

person.hello();