/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);*/

const names = []

function writeCards(names) {
    const newArray = []
    for (let k = 0; k < names.length; k++){
        newArray.push(`Thank you, ${names[k]}, for the wonderful surprise gift!`)
    }
    return newArray
   
}

writeCards([`Charlie`, `Samip`, `Ali`], `birthday`);

let num = 10;

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
