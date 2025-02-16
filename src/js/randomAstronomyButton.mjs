export default class SelectButton {
    constructor(button, launchData, templateStringLiteralLaunchesFn, Card, templateStringLiteralAstronomyFn, randomAstronomyData, clearHtmlElementFn, containerElement, templateStringLiteralLaunchesBigFn, countDownFn) {
        this.button = button;
        this.launchData = launchData;
        this.templateStringLiteralLaunchesFn = templateStringLiteralLaunchesFn;
        this.templateStringLiteralLaunchesBigFn = templateStringLiteralLaunchesBigFn;
        
        this.Card = Card;
        this.templateStringLiteralAstronomyFn = templateStringLiteralAstronomyFn;
        this.randomAstronomyData = randomAstronomyData;
        this.clearHtmlElementFn = clearHtmlElementFn;
        this.containerElement = containerElement;
        this.countDownFn = countDownFn;
        
    }

    launches(){
        
        this.clearHtmlElementFn(document.querySelector(this.containerElement));
        for (let i = 0; i < this.launchData.results.length; i++) {
             let launchCard = new this.Card(this.launchData.results[i], this.templateStringLiteralLaunchesFn(this.launchData.results[i]), 'launch-card', '#card-container', this.templateStringLiteralLaunchesBigFn(this.launchData.results[i]), `${i}`);
             
             
                launchCard.displayCard();
                let launchCardElement = document.getElementById(`${i}`);
                console.log(launchCardElement);
                launchCardElement.addEventListener('click', () => {
                    this.clearHtmlElementFn(document.querySelector(this.containerElement));
                    launchCard.displayBigCard(this.templateStringLiteralLaunchesBigFn(this.launchData.results[i]));
                const backButton = document.querySelector(".launch-button");

                this.countDownFn(this.launchData.results[i].window_start, ".countdown");
            backButton.addEventListener("click", () =>{this.launches()} )});}
            
            }
        
    

    astronomy(){
        
        this.clearHtmlElementFn(document.querySelector(this.containerElement));
        let randomAstronomyCard = new this.Card(this.randomAstronomyData, this.templateStringLiteralAstronomyFn(this.randomAstronomyData), 'astronomy-card', this.containerElement);
        randomAstronomyCard.displayCard();
        
        
    }

    handleButtonClick(){
        if (this.button.textContent === 'Launches') {
            this.launches();
            this.button.textContent = 'Random Astronomy';}
        else {
            this.astronomy();
            this.button.textContent = 'Launches';}
    }

}
