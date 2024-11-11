console.clear()

// This is a regressive count code

let time = 20;

function ClockTime(time){
    const countdown = setInterval(() => {
        console.log(time);
        time--

        if(time === 0){
            console.log("Enidng of Count");
            clearInterval(countdown)
        }
    }, 1000)
        
    
}

ClockTime(time)

// let seconds = 0;
// const interval = setInterval(() => {
//     seconds++;
//     console.log('seconds: ', seconds);
// }, 1000)