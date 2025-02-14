


import { fetchApi } from "./js/Api.mjs";

import { parseToDataObject } from "./js/Api.mjs";

import { clearHtmlElement } from "./js/ultils.mjs";

import Card from "./js/Card.mjs";

import { templateStringLiteralLaunches } from "./js/launchApi.mjs";

import { templateStringLiteralAstronomy } from "./js/randomAstronomyApi.mjs";

import SelectButton from "./js/randomAstronomyButton.mjs";

const randomAstronomyButton = document.querySelector('#random-astronomy-button');



const launchApiUrl = 'https://lldev.thespacedevs.com/2.3.0/launches/?format=json&limit=30';

const randomAstronomyApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=3GCJlF6i1B6D9rEgLXpLPXbX40jtBEOeCsGxLAtg';



const randomAstronomydata = await fetchApi(randomAstronomyApiUrl);

const launchData = await fetchApi(launchApiUrl);

const selectButton1 = new SelectButton(randomAstronomyButton, launchData, templateStringLiteralLaunches, Card, templateStringLiteralAstronomy, randomAstronomydata, clearHtmlElement, '#card-container');

const button = function buttonFn() {if (randomAstronomyButton.textContent === 'Launches') {
selectButton1.launches();
randomAstronomyButton.textContent = 'Random Astronomy';}

else {
selectButton1.astronomy();

randomAstronomyButton.textContent = 'Launches';}
};

randomAstronomyButton.addEventListener('click', button);
    


for (let i = 0; i < launchData.results.length; i++) {

let launchCard = new Card(launchData.results[i], templateStringLiteralLaunches(launchData.results[i]), 'launch-card', '#card-container');
launchCard.displayCard();
}










