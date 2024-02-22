function hello(constructorFn: Function){
    console.log(constructorFn);
}

function helloFactory(show: boolean){
    if(show){
        return hello;

    }else {
        return null;
    }
}

// hello
@helloFactory(true)
class Person{
    constructor(){
        console.log('new Person()');
    }
}

new Person();