import { setLocalStorage } from "./ultils.mjs";
import { addToLocalStorage } from "./ultils.mjs";
import { getLocalStorage } from "./ultils.mjs";
import { sleep } from "./ultils.mjs";
export default class SelectButton {
    constructor(button, launchData, templateStringLiteralLaunchesFn, Card, templateStringLiteralAstronomyFn, randomAstronomyData, clearHtmlElementFn, containerElement, templateStringLiteralLaunchesBigFn, countDownFn, recentViewedArray, recentViewedContainerElement, templateStringLiteralRecentViewed) {
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
        this.recentViewedArray = recentViewedArray;
        this.recentViewedContainerElement = recentViewedContainerElement;
        this.templateStringLiteralRecentViewed = templateStringLiteralRecentViewed;
        
        
    }

     launches(){

        document.body.style.backgroundImage = "none";  
        
        this.clearHtmlElementFn(document.querySelector(this.containerElement));
        
        let recentViewedStorageX = getLocalStorage("recent-viewed");
        let recentViewedStorage = recentViewedStorageX.slice(0, 3);
        setLocalStorage(recentViewedStorage, "recent-viewed");
        this.recentVisited(recentViewedStorage);
        
        
        

        

        for (let i = 0; i < this.launchData.results.length; i++) {
             let launchCard = new this.Card(this.launchData.results[i], this.templateStringLiteralLaunchesFn(this.launchData.results[i]), 'launch-card', '#card-container', this.templateStringLiteralLaunchesBigFn, `${i}`);
             

                launchCard.displayCard();
                let launchCardElement = document.getElementById(`${i}`);
                
                launchCardElement.addEventListener('click', () => {
                    this.clearHtmlElementFn(document.querySelector(this.containerElement));
                    
                    
                    launchCard.displayBigCard(this.launchData.results[i])   ;
                const backButton = document.querySelector(".launch-button");
                  window.scrollTo({ top: 0, behavior: 'smooth' });

                  sleep(1000);

                  window.scrollTo({ top: 1500, behavior: 'smooth' });

                  sleep(1000);

                  window.scrollTo({ top: 500, behavior: 'smooth' });
                  document.body.style.backgroundImage = "none";  
                  document.body.style.backgroundImage = "url(/space.webp)";

                this.countDownFn(this.launchData.results[i].window_start, ".countdown");
            backButton.addEventListener("click", () =>{this.launches();
            addToLocalStorage(this.launchData.results[i], "recent-viewed");
            let recentViewedStorageX = getLocalStorage("recent-viewed");
            let recentViewedStorage = recentViewedStorageX.slice(0, 3);
            setLocalStorage(recentViewedStorage, "recent-viewed");
            this.recentVisited(recentViewedStorage);
            document.body.style.backgroundImage = "none"
            } )
            })
            
            
            
}
this.button.textContent = "Random Astronomy";
            
            }
        
    

    astronomy(){
        this.launches();
        this.clearHtmlElementFn(document.querySelector(this.containerElement));
        let randomAstronomyCard = new this.Card(this.randomAstronomyData, this.templateStringLiteralAstronomyFn(this.randomAstronomyData), 'astronomy-card', this.containerElement);
        randomAstronomyCard.displayCard();
        window.scrollTo({ top: 0, behavior: 'smooth' });

                  //sleep(1000);

                  window.scrollTo({ top: 1500, behavior: 'smooth' });

                  ///sleep(1000);

                  window.scrollTo({ top: 500, behavior: 'smooth' });
                  document.body.style.backgroundImage = "none";  
                  document.body.style.backgroundImage = "url(/space2.jpg)";
        
        
    }

    handleButtonClick(){
        if (this.button.textContent === 'Launches') {
            this.launches();
            this.button.textContent = 'Random Astronomy';}
        else {
            this.astronomy();
            this.button.textContent = 'Launches';}
    }

    recentVisited(recentViewedStorage){

        
        
        this.clearHtmlElementFn(document.querySelector(this.recentViewedContainerElement));
        
        

        if(recentViewedStorage.length < 1){
            document.querySelector(this.recentViewedContainerElement).innerHTML = "<p class='message'>There are not recent visited launches yet. Please, visit someone.</p>"
           // console.log("not recent visited yet")
        }

        else{
            let ix = 0;
            
            
            let recentViewedTitle = document.createElement("h2");
            recentViewedTitle.id= "recent-viewed-title";
            recentViewedTitle.textContent= "Recent Viewed";
            document.querySelector(this.recentViewedContainerElement).appendChild(recentViewedTitle);
            
            

            recentViewedStorage.forEach(element => {
              ix++;  
              
              let elementData;
         
            
            elementData = element;
            
            let recentViewedCard = new this.Card(elementData, this.templateStringLiteralRecentViewed(elementData), 'recent-viewed-card', "#recent-visited-container", this.templateStringLiteralLaunchesBigFn, `recent-viewed${ix}` );
            recentViewedCard.displayCard();
            
            let recentViewedElement = document.getElementById(`recent-viewed${ix}`);
            recentViewedElement.addEventListener("click", ()=>{
                this.clearHtmlElementFn(document.querySelector(this.containerElement));
                this.clearHtmlElementFn(document.querySelector(this.recentViewedContainerElement));    
                   
                    recentViewedCard.displayBigCard(elementData);
                const backButton = document.querySelector(".launch-button");
                
                

                this.countDownFn(elementData.window_start, ".countdown");
                document.body.style.backgroundImage = "none";  
                document.body.style.backgroundImage = "url(/space3x.jpg)";

                
            backButton.addEventListener("click", () =>{this.launches();
              
            addToLocalStorage(elementData, "recent-viewed");
            } )
            })
        ; 
    });
          
            
        }}
    }


