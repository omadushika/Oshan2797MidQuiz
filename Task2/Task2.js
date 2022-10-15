var Movies = ["Thore", "Hulk", "Luca", "Liger", "K.G.F"];
function checkFirstLetter(Movies) {
    if (Movies[3].charAt(0) === "i" || Movies[3].charAt(0) === "I"){
        console.log("yay");
    
    }
    else{
        console.log("nay");
    }
}

checkFirstLetter(Movies);

Movies = [];
Movies[3] = "Iron man";

checkFirstLetter(Movies);