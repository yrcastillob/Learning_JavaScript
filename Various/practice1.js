/***************VARIABLES***************/
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suit = ["♠", "♥", "♦", "♣"];

/***************FUNCTIONS***************/

function createCardDeck ( numbers, symbols ) {
    let resultDeck = [];
    symbols.forEach(symbol =>{
        numbers.forEach(number =>{
            resultDeck.push(String(number)+String(symbol));
        })
    })
    return resultDeck;
}

function suffleDeck ( deck ) {
    let index = 0;
    while (index < deck.length*2){
        var indexOne = Math.floor(Math.random()*deck.length);
        var indexTwo = Math.floor(Math.random()*deck.length);
        var cardOne = deck[indexOne]
        var cardTwo = deck[indexTwo]
        insertCardTaken = deck.splice(indexOne,1,cardTwo);
        InsertCardPutt = deck.splice(indexTwo,1,cardOne);
        index = index + 1;
    }
        
}


function dealCards ( playerNumbers, cardNumber, deck ){
    let cardDeck = [];
    for (let indexPlayer = 0; indexPlayer < playerNumbers; indexPlayer++) {
        let indexCard = 0
        let temporaryDeck = []
        while ( indexCard < cardNumber ){
            let card = deck.shift();
            temporaryDeck.unshift(card);
            indexCard++
        }
        cardDeck.push(temporaryDeck)
    }
    return cardDeck;
}

const cardDeck = createCardDeck ( ranks, suit );

suffleDeck ( cardDeck )

const cardsPlayers = dealCards ( 3, 4, cardDeck )
