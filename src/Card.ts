class Card {
    static numberOfCards: number = 0;
    title: string;
    description: string;
    id: number;

    constructor(title: string, description: string, id?: number) {
        this.title = title;
        this.description = description;
        if(id){
            this.id = id;
        }else{
            this.id = this.generateId();
        }
        Card.numberOfCards++;
    }

    generateId(): number {
        return Card.numberOfCards;
    }
}

// Array that holds all Cards in issue tracker
var cards: Array<Card> = []

// Funtion that adds Card to array
function addCard(title: string, description: string, id?:number){
    let card: Card;
    if(id){
        card = new Card(title, description, id);
    }else{
        card = new Card(title, description);
    }
    cards.push(card);
}

function removeCard(id: number){
    for(let i: number = 0; i < cards.length; i++){
        if(cards[i].id === id){
            // Removes 1 element at pos i
            cards.splice(i, 1);
            break;
        }
    }
}

function editCard(id: number, title?: string, description?: string){
    for(let i: number = 0; i < cards.length; i++){
        if(cards[i].id === id){
            if(title){
                cards[i].title = title;
            }
            if(description) {
                cards[i].description = description;
            }
            break;
        }
    }
}

export {
    Card,
    cards,
    addCard,
    removeCard,
    editCard
};