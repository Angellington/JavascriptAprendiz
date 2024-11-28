function mechagirl(first, last, age, eye, body){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
    this.body = body;
}

console.clear()

const myGirlfriend = new mechagirl(
    "Isabela", "Alves", "17", "Brown", "Steel"
);
const myMother = new mechagirl(
    "Alice", "Ferreira", "39", "Dark Brown", "Meat"
);

const bestFriend = new mechagirl(
    "Fátima", "", "20", "Brown Cyan", "String"
)

console.log(`My childhood friend is ${myGirlfriend.age} years old!`)
console.log(`The bodies are ${myGirlfriend.body} ${myMother.body} ${bestFriend.body}`)

function mechagirl(camel, mirror, voice, show, language){
    this.camel = camel;
    this.mirror = mirror;
    this.voice = voice;
    this.show = show;
    this.language = "Esperanto";
}

console.log(myGirlfriend.language)

let mother = mechagirl.prototype.language = "Germany"
console.log(mother)

