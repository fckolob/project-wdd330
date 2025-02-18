


import { fetchApi } from "./js/Api.mjs";

import { parseToDataObject } from "./js/Api.mjs";

import { clearHtmlElement } from "./js/ultils.mjs";

import Card from "./js/Card.mjs";

import { templateStringLiteralLaunches } from "./js/launchApi.mjs";

import { templateStringLiteralLaunchesBig } from "./js/launchApi.mjs";

import { templateStringLiteralAstronomy } from "./js/randomAstronomyApi.mjs";

import SelectButton from "./js/randomAstronomyButton.mjs";

import { templateStringLiteralNews } from "./js/newsApi.mjs";

import { countDown } from "./js/ultils.mjs";

const randomAstronomyButton = document.querySelector('#random-astronomy-button');



const launchApiUrl = 'https://lldev.thespacedevs.com/2.3.0/launches/?format=json&limit=30';

const randomAstronomyApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=3GCJlF6i1B6D9rEgLXpLPXbX40jtBEOeCsGxLAtg';

const newsApiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/';

window.onload = async () => {
const newsData = await fetchApi(newsApiUrl);

console.log(newsData);


const randomAstronomydata = await fetchApi(randomAstronomyApiUrl);

const launchData = await fetchApi(launchApiUrl);

const selectButton1 = new SelectButton(randomAstronomyButton, launchData, templateStringLiteralLaunches, Card, templateStringLiteralAstronomy, randomAstronomydata, clearHtmlElement, '#card-container', templateStringLiteralLaunchesBig, countDown);

randomAstronomyButton.addEventListener('click', () => selectButton1.handleButtonClick());
    




for (let i = 0; i < newsData.results.length; i++) {
    let newsCard = new Card(newsData.results[i], templateStringLiteralNews(newsData.results[i]), 'news-card', '#news-container');
    newsCard.displayCard();
}

selectButton1.launches();}










