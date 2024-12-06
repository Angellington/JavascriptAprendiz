console.clear()
const prompt = require("prompt-sync")()
console.clear()

// Create Random Passwords with characters and numbers

// let n = Number(prompt("Tab a number: "));


function generatePassword(n) {
    let password = [];
    
    for (let i = 0; i < n; i++) {
        setTimeout(function() {
            let choose = new Date().getMilliseconds();
            if (choose % 2 == 0) {
                let convert = Math.floor(Math.random() * 10);
                password.push(convert); 
            } else {

                password.push("X");
            }

            if (i === n - 1) {
                console.log(password.join(""));
            }
        }, i * 100); // Delay each iteration by 1000ms (1 second)
    }
}

generatePassword(10);

function createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  console.log(createRandomString(10))