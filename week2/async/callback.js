'use strict';

/*
//Synchoronous callback (동기 콜백)
function printImmediately(print){
    print();
}

console.log('1');
//setTimeout(function(){
//   console.log('2')
//},1000);
setTimeout(()=>console.log('2'),1000);
console.log('3');

printImmediately(()=>console.log('hello'));


//Asynchoronous callback (비동기 콜백)
function printWithDelay(print,timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log('async callback'),2000); //비동기
*/

//콜백지옥 예시
class UserStorage{
    loginUSer(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id === 'ellie'&&password==='dream') ||
                (id === 'ellie'&&password==='academy') 
            ){
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user,onSuccess,onError){
        setTimeout(()=>{
            if(user==='eille'){
                onsucess({name: 'ellie', role:admin});
            }
            else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = promot('enter your password');
UserStorage.loginUSer(
    id,
    password, 
    user,
    userWithRole =>{
        alert(
            'Hello ${user,name}, you have a ${user,role} role '
            );
    },
    error =>{console.log(error);
    }
);
