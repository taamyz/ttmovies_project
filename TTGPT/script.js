class Card {
    constructor(name, imageUrl, attributes) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.attributes = attributes;
    }
}

const cards = [
    new Card("Card 1", "https://via.placeholder.com/150", { attr1: 100, attr2: 200, attr3: 300, attr4: 400, attr5: 500 }),
    // Add more cards here
];

function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    card
}