export function templateStringLiteralLaunches(data) {
    return `
        
        <h2>${data.mission.name}</h2>
        <img src="${data.image.image_url}" alt="${data.mission.name}" class="launch-img"></img>
        <p>${data.window_start}</p>
        <p>${data.window_end}</p>
        <p>${data.launch_service_provider.name}</p>
        `;}
        




export function templateStringLiteralLaunchesBig(data) {
    return `
        
        <h2>${data.mission.name}</h2>
        <img src="${data.image.image_url}" alt="${data.mission.name}" class="launch-img"></img>
        <p>${data.window_start}</p>
        <p>${data.window_end}</p>
        <p>${data.launch_service_provider.name}</p>
        <p>${data.pad.location.name}</p>
        <a href="${data.pad.location.image.image_url}">
        <img class= "launch-img" src= ${data.pad.location.map_image}></img>
        </a>
        <p>${data.pad.country.name}</p>
        <p class= "countdown"></p>
        <button class="launch-button">Back</button>
        `;
    
}