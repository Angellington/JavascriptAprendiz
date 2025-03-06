// new Object -> Object.prototype
const objA = {
    keyA: 'A'
};

const objB = {
    keyB: 'B'
};

const objC = new Object();
objC.keyC = 'C'

// Here I am setting prototype to objB from A
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB)
console.log(objC.keyB)