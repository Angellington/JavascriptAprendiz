console.clear()

function Mechagirl(first, last, age, body){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.composition = body;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

const myChildhoodFriend = new Mechagirl(
    "Isabela", "Alves", "17", "Fire"
)

console.log(myChildhoodFriend.fullName())

const myMother = new Mechagirl(
    "Alice", "Ferreira", "29", "Plug"
);

console.log(myMother.firstName)

Mechagirl.prototype.changeName = function(firstName){
    this.firstName = firstName;
}

myMother.changeName("Souza")

console.log(myMother.firstName + " " + myMother.lastName)