// Factory Person

function createPerson(name, birthdateYear){

    return {
        name, birthdateYear, 
        now_age() {
            const now_year = (new Date).getFullYear()
            const now_age = (now_year - birthdateYear)
            console.log(now_age, "Years Old")
        }
    }
}
console.clear()

let person1 = createPerson("Minerva", 2005);

person1.now_age()