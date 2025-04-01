export async function launchesApi(){const url = 'https://lldev.thespacedevs.com/2.3.0/events/upcoming/?format=json&limit=2';


    try {
        const response = await fetch(url);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }}