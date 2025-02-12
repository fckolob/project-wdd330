export default class Card {
  constructor(data, stringTemplateLiteral, className, cardContainer) {
    this.data = data;
    this.stringTemplateLiteral = stringTemplateLiteral;
    this.className = className;
    this.cardContainer = cardContainer;
  }

  createCard() {
    const card = document.createElement('div');
    card.classList.add(this.className);
    card.innerHTML = this.stringTemplateLiteral;
    return card;
  }

  displayCard() {
    const card = this.createCard();
    const cardContainer = document.querySelector(this.cardContainer);
    cardContainer.appendChild(card);
  }
}


