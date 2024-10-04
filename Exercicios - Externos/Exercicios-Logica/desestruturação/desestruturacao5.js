console.clear()

const user = {
    username: 'johndoe',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

let { address } = user;
let { city, country } = address

console.log(city, country)