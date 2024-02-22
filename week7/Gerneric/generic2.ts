interface Person{
    name: string;
    age: number;
}

const person: Person = {
    name: 'Mark',
    age : 35
};

function getProperty<T, K extends keyof T>(obj: T, key: K):T[K]{
    return obj(key);
}
function getProperty<T, K extends keyof T>(obj: T, key: K, value:T[K]):void{
    obj[key] = value;
}

console.log(getProperty(person, 'name'));
setProperty(person, 'name', 'Anna');
console.log(getProperty(person, 'name'));
