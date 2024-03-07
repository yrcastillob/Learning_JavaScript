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


function createRipple(event) {
    const button = event.currentTarget;
    
    // Crear el elemento de onda
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
  
    // Calcular las coordenadas del clic
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
  
    // Establecer las coordenadas y agregar la onda al botón
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    button.appendChild(ripple);
  
    // Eliminar la onda después de la animación
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }