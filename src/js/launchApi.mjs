export function templateStringLiteralLaunches(data) {
    
    let imageTrue;

    if(data.image !== null){
    
    imageTrue = `
        <h2>${data.mission.name}</h2>
        <img src="${data.image.image_url}" alt="${data.mission.name}" class="launch-img"></img>
        <p>${data.window_start}</p>
        <p>${data.window_end}</p>
        <p>${data.launch_service_provider.name}</p>
        `}


        else{
            imageTrue = `
        <h2>${data.mission.name}</h2>
        <img src="/rocket.gif" alt="${data.mission.name}" class="launch-img"></img>
        <p>${data.window_start}</p>
        <p>${data.window_end}</p>
        <p>${data.launch_service_provider.name}</p>
        `;}

        return imageTrue;
    }
    

    
        




export function templateStringLiteralLaunchesBig(data) {

    let imageTrueBig;

    if(data.image !== null){
        imageTrueBig = `
        
        <h2>${data.mission.name}</h2>
        <a href="${data.image.image_url}">
        <img src="${data.image.image_url}" alt="${data.mission.name}" class="launch-img"></img>
        </a>
        <p>${data.mission.description}</p>
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

    else{
        imageTrueBig = `
        
        <h2>${data.mission.name}</h2>
        
        <img src="/rocket4.jpg" alt="${data.mission.name}" class="launch-img"></img>
        
        <p>${data.mission.description}</p>
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

    return imageTrueBig;
    
}