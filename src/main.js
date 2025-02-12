


import { fetchApi } from "./js/Api.mjs";

import { parseToDataObject } from "./js/Api.mjs";

import Card from "./js/Card.mjs";

import { templateStringLiteralLaunches } from "./js/launchApi.mjs";

const randomAstronomyButton = document.querySelector('#random-astronomy-button');



const launchApiUrl = 'https://lldev.thespacedevs.com/2.3.0/launches/?format=json&limit=10';

const randomAstronomyApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=3GCJlF6i1B6D9rEgLXpLPXbX40jtBEOeCsGxLAtg';



const randomAstronomydata = await fetchApi(randomAstronomyApiUrl);

const launchData = await fetchApi(launchApiUrl);

const templateStringLiteralRandomAstronomy = `<div><h1>${randomAstronomydata.title}</h1><p>${randomAstronomydata.date}</p><p>${randomAstronomydata.explanation}</p><img src="${randomAstronomydata.url}" alt="${randomAstronomydata.title}"></img><div/>`;


for (let i = 0; i < launchData.results.length; i++) {

let launchCard = new Card(launchData.results[i], templateStringLiteralLaunches(launchData.results[i], 'launch-card'), 'launch-card', '#card-container');
launchCard.displayCard();
}


const randomAstronomyCard = new Card(randomAstronomydata, templateStringLiteralRandomAstronomy, 'astronomy-card', '#card-container');



randomAstronomyButton.addEventListener('click', () => {
randomAstronomyCard.displayCard();});