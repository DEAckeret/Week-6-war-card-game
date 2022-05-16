alert(
`This is the card game: War!
----------------------------
The lowest value card is 2,
facecards are 11, 12, and 13
with the Ace being the top
value card in the game.`)

class Player {
    constructor(name){
        this.name = name;
        this.cardsInHand = [];
    }
    showPlayer(){
        alert(`${this.name} has these cards in their hand ${this.cardsInHand}`);
    }
}

const suits = [`♠`, `♥`, `♦`, `♣`];
const faceValue = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
const pointValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const deck = [];
for(i = 0; i < 4; i++){
    for(j = 0; j < 13; j++){
        deck.push([faceValue[j] + suits[i], pointValue [j]]);
    }
}

/*below is what is called the Fisher-Yates algorithm. 
it is used for randomly shuffling elements in an array. It starts at the end of the array
and decrements the counter to iterate through the array. It takes the last element and randomly 
swaps it with a number in a lower index.*/
function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i --) {
            const j = Math.floor(Math.random() * (i +1));
            const pastNumber = array[i];
            array[i] = array[j];
            array[j] = pastNumber;
    }return array;
}
// array[i] and array[j] are helping swap elements in the array.

alert("shuffling deck...");

shuffleArray(deck);
const deckTwo = deck.splice(0, 26);
console.log(deck);

alert("...initializing extravagant flare...")
alert("...cards are now shuffled and dispersed to each player.")
alert(`see the console to watch the game play out!`)

function predictor(){
    let predictedWinner = prompt("Who will win? Tim or Bob? Enter 1 for Tim, and 2 for Bob.");
        if(predictedWinner == NaN){
            throw new Error(`${predictedWinner} is not Tim or Bob, try again.`)
        }else if(predictedWinner == 1) {
            return 'Tim2Win'
        }else {
            return 'Bob2Win'
        }
}

const userControlledPlayer = predictor();
console.log(userControlledPlayer);

const tim = new Player("Tim", deck);
tim.cardsInHand = tim.cardsInHand.concat(deck);
console.log(deck);

const bob = new Player("Bob", deckTwo);
bob.cardsInHand = bob.cardsInHand.concat(deckTwo);
console.log(deckTwo);

if (userControlledPlayer == 'Tim2Win'){
    tim.showPlayer();
} else {
    bob.showPlayer();
}

var timPoints = 0;
var bobPoints = 0; 

for (i = 0; i < 13; i++){
    if (deck[i] < deckTwo[i]){
        console.log(`Bob has won this round! with ${deckTwo[i]} against ${deck[i]}!`);
        bobPoints += 1;
    } else if (deck[i] > deckTwo[i]){
        console.log(`Tim has won this round with ${deck[i]} against ${deckTwo[i]}!`);
        timPoints += 1;
    } else if (deck[i] === deckTwo[i]){
        console.log(`This round resulted in a tie, no points will be awarded.`);
    }
    deck.shift();
    deckTwo.shift();
}
alert(`
Here are the scores at half-time.
---------------------------------
Tim                           Bob
${timPoints}   and   ${bobPoints}
`)

for (i = 0; i < 13; i++){
    if (deck[i] < deckTwo[i]){
        console.log(`Bob has won this round! with ${deckTwo[i]} against ${deck[i]}!`);
        bobPoints += 1;
    } else if (deck[i] > deckTwo[i]){
        console.log(`Tim has won this round with ${deck[i]} against ${deckTwo[i]}!`);
        timPoints += 1;
    } else if (deck[i] === deckTwo[i]){
        console.log(`This round resulted in a tie, no points will be awarded.`);
    }
    deck.shift();
    deckTwo.shift();
}

alert(`
Here are the final scores!
---------------------------------
Tim                           Bob
${timPoints}   and   ${bobPoints}
`)

if (timPoints > bobPoints){
    alert("Tim is the winner!")
} else if (bobPoints > timPoints){
    alert("Bob is the winner!")
}

function equals(onePoints, twoPoints){
    if (onePoints === twoPoints){
        return "Weird!"
    } else if (onePoints != twoPoints){
        return "Game over, play again!"
    } 
}
console.log(equals(timPoints, bobPoints));
