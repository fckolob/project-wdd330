export default class Card {
  constructor(data, stringTemplateLiteral, className, cardContainer, stringTemplateLiteralBig, id) {
    this.data = data;
    this.stringTemplateLiteral = stringTemplateLiteral;
    this.className = className;
    this.cardContainer = cardContainer;
    this.stringTemplateLiteralBig = stringTemplateLiteralBig;
    this.id = id;
  }

  createCard() {
    const card = document.createElement('div');
    card.id = this.id; 
    card.classList.add(this.className);
    card.innerHTML = this.stringTemplateLiteral;
    return card;
  }

  
  

  displayCard() {
    const card = this.createCard();
    const cardContainer = document.querySelector(this.cardContainer);
    cardContainer.appendChild(card);
  }

  displayBigCard() {
    const card = this.createCard();
    card.classList.remove(this.className);
    card.classList.add('big-card');
    card.innerHTML = this.stringTemplateLiteralBig(this.data);
    const cardContainer = document.querySelector(this.cardContainer);
    cardContainer.appendChild(card);
  }
}


