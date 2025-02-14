export function templateStringLiteralLaunches(data) {
    return `
    
        <h2>${data.mission.name}</h2>
        <img src="${data.image.image_url}" alt="${data.mission.name}" class="launch-img"></img>
        <p>${data.window_start}</p>
        <p>${data.window_end}</p>
        <p>${data.launch_service_provider.name}</p>
    
    `;
}