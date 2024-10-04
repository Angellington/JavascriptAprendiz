console.clear()

const userInfo = { 
    nome: 'Alice',
    age: 25,
    email: 'alice@example.com'
};

function printUserInfo(user){
    let { nome, age, email } = user
    return [ nome, age, email ]
}

let desestruct = printUserInfo(userInfo)
console.log(desestruct)