function helloString(message: string): string{
    return message;
}
function helloNumber(message: number): number{
    return message;
}

function hello(message: any): any{
    return message;
}

function helloGeneric<T>(message: T):T{
    return message;
}

console.log(hello('Mark').length);
console.log(hello(35).length);
console.log(helloGeneric(35).toString());
