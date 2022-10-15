var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question('Please enter a number: ' , function (num){

    if (num>=0) {
        if(num % 2 === 0) {
            console.log("Even number");
        }
        
        else {
            console.log("Odd number");
        }
        
        
    } else {
        console.log("Please try again")
    }
    
    readline.close();

})