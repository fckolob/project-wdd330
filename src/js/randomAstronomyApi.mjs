export async function randomAstronomyApi(){const url = 'https://api.nasa.gov/planetary/apod?api_key=3GCJlF6i1B6D9rEgLXpLPXbX40jtBEOeCsGxLAtg';


try {
	const response = await fetch(url);
	const result = await response.text();
	
} catch (error) {
	console.error(error);
}}

export function templateStringLiteralAstronomy(data) {
	return `<div><h1>${data.title}</h1><p>${data.date}</p><p>${data.explanation}</p><img class="astronomy-img" src="${data.url}" alt="${data.title}"></img><div/>`;
}