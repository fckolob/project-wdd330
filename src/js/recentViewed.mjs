export default function recentViewedStringTemplateLiteral(data){
   let returned;

   if(data.image !== null){

    returned = 
    `<h2>${data.mission.name}</h2>
        <img src="${data.image.image_url}" alt="${data.mission.name}" class="recent-viewed-img"></img>
        
        <p class="recent-viewed-text">${data.launch_service_provider.name}</p>`;}

        else{

            returned = `<h2>${data.mission.name}</h2>
        <img src="/rocket4.jpg" alt="${data.mission.name}" class="recent-viewed-img"></img>
        
        <p class="recent-viewed-text">${data.launch_service_provider.name}</p>`
        }
        return returned;
}