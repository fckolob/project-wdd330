export default class SelectButton {
    constructor(button, launchData, templateStringLiteralLaunchesFn, Card, templateStringLiteralAstronomyFn, randomAstronomyData, clearHtmlElementFn, containerElement) {
        this.button = button;
        this.launchData = launchData;
        this.templateStringLiteralLaunchesFn = templateStringLiteralLaunchesFn;
        this.Card = Card;
        this.templateStringLiteralAstronomyFn = templateStringLiteralAstronomyFn;
        this.randomAstronomyData = randomAstronomyData;
        this.clearHtmlElementFn = clearHtmlElementFn;
        this.containerElement = containerElement;
    }

    launches(){
        
        this.clearHtmlElementFn(document.querySelector(this.containerElement));
        for (let i = 0; i < this.launchData.results.length; i++) {
             let launchCard = new this.Card(this.launchData.results[i], this.templateStringLiteralLaunchesFn(this.launchData.results[i]), 'launch-card', '#card-container');
            launchCard.displayCard();}
        
    }

    astronomy(){
        
        this.clearHtmlElementFn(document.querySelector(this.containerElement));
        let randomAstronomyCard = new this.Card(this.randomAstronomyData, this.templateStringLiteralAstronomyFn(this.randomAstronomyData), 'astronomy-card', this.containerElement);
        randomAstronomyCard.displayCard();
        
        
    }

}
