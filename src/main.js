


import { fetchApi } from "./js/Api.mjs";



import { clearHtmlElement, sleep } from "./js/ultils.mjs";

import Card from "./js/Card.mjs";

import { templateStringLiteralLaunches } from "./js/launchApi.mjs";

import { templateStringLiteralLaunchesBig } from "./js/launchApi.mjs";

import { templateStringLiteralAstronomy } from "./js/randomAstronomyApi.mjs";

import SelectButton from "./js/randomAstronomyButton.mjs";

import { templateStringLiteralNews } from "./js/newsApi.mjs";

import { countDown } from "./js/ultils.mjs";
import recentViewedStringTemplateLiteral from "./js/recentViewed.mjs";

const recentViewedArray = [];

const recentViewedContainer = "#recent-visited-container"

const randomAstronomyButton = document.querySelector('#random-astronomy-button');



const launchApiUrl = 'https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?format=json&limit=30';

const randomAstronomyApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=3GCJlF6i1B6D9rEgLXpLPXbX40jtBEOeCsGxLAtg';

const newsApiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/';







window.onload = async () => {


const newsData = await fetchApi(newsApiUrl);




const randomAstronomydata = await fetchApi(randomAstronomyApiUrl);
console.log(randomAstronomydata);
const launchData = await fetchApi(launchApiUrl);
console.log(launchData);
const selectButton1 = new SelectButton(randomAstronomyButton, launchData, templateStringLiteralLaunches, Card, templateStringLiteralAstronomy, randomAstronomydata, clearHtmlElement, '#card-container', templateStringLiteralLaunchesBig, countDown, recentViewedArray, recentViewedContainer, recentViewedStringTemplateLiteral);

randomAstronomyButton.addEventListener('click', () => selectButton1.handleButtonClick());
    
const animationElement = document.querySelector("#rocket");



for (let i = 0; i < newsData.results.length; i++) {
    let newsCard = new Card(newsData.results[i], templateStringLiteralNews(newsData.results[i]), 'news-card', '#news-container');
    newsCard.displayCard();
}

await selectButton1.launches();



animationElement.style.display= "none";}










