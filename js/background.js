const backgroundImageName = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const imgBackground = document.querySelector("div.container")

let randomNumberTemp = 0;

function randomBackground(){
    let randomNumber = Math.floor(Math.random() * backgroundImageName.length)
    if(randomNumberTemp === randomNumber){
        if(randomNumber === backgroundImageName.length-1 || randomNumber === 0){
            randomNumber = randomNumber === 0 ? randomNumber + 1 : randomNumber - 1;
        }else{
            randomNumber++;
        }
    }

    randomNumberTemp = randomNumber;

    imgBackground.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
    ), url("img/${backgroundImageName[randomNumber]}")`;
}

setInterval(randomBackground, 5000);