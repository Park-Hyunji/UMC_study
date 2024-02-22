interface Person{
    name: string;
    age: number;
}

interface Car{
    brand: string;
    wheel: number;
}

function isPerson(arg: any):arg is Person{
    return arg.name !== undefined;
}

function hello(arg: Person | Car){
    if(isPerson(arg)){
        console.log(arg.name);
    }else{
        console.log(arg.brand);
    }
}