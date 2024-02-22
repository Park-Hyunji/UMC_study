const array1=[];
const array2=['a','b','c'];
const array3=['a',1,false];

class Animal{
    name: string;
}

class Dog extends Animal{
    dog: string;
}

class Cat extends Animal{
    cat: string;
}

const array4=[new Dog(), new Cat()];