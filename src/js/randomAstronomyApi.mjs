export async function randomAstronomyApi(){const url = 'https://api.nasa.gov/planetary/apod?api_key=3GCJlF6i1B6D9rEgLXpLPXbX40jtBEOeCsGxLAtg';


try {
	const response = await fetch(url);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}}