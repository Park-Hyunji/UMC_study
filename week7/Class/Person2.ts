class Person{
    public name: string;
    private _age: number;

    constructor(age: number){
        this._age = age;
    }

}

const person: Person = new Person(35);
person.name = 'Mark';
//person.age = 35;
console.log(person);


