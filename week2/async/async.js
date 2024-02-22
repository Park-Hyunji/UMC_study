// async & await

// 1. async
async function fecthUser(){
    return 'ellie';
}

const user = fecthUser();
user.then(console.log);
console.log(user);


// 2. await
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    //throw 'error';
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;
    return '${apple} + ${banana}';
}
    
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()]).then(fruits=>
        fruits.join('+'));
}

pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);