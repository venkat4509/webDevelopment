//Selecting the elements
image_1 = document.querySelector(".img1");
image_2 = document.querySelector(".img2");


//Genrating random dice number for both the dices
var randNumber1 = Math.floor((Math.random() * 6) + 1);
var randNumber2 = Math.floor((Math.random() * 6) + 1);


window.addEventListener("load", (event) => {
    image_1.src = "./images/dice" + randNumber1 + ".png";
    image_2.src = "./images/dice" + randNumber2 + ".png";

    //Checking which dice number is bigger or if it is equal
    if(randNumber1 > randNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";

    }else if (randNumber1 < randNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";

    }else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
});




// //What to do when user hits the refresh button
// image_1.addEventListener("load", img1); 
// image_2.addEventListener("load", img2);



// //Function to change dice1 src address
// function img1() {
//     image_1.src = "./images/dice" + randNumber1 + ".png";
// }


// //Function to change dice2 src address
// function img2() {
//     image_2.src = "./images/dice" + randNumber2 + ".png";
// }


