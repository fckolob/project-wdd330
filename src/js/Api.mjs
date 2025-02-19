import { convertToJson } from "./ultils.mjs";



export async function fetchApi(url){


    try {
        const response = await fetch(url);
        const result = await convertToJson(response)

        
        return result;
    } catch (error) {
        console.error(error);
    }
}

export function parseToDataObject(item, responseParameters, dataObjectParameters){
    let dataObject = {};
    for (let i = 0; i < responseParameters.length; i++) {
        dataObject[dataObjectParameters[i]] = item[responseParameters[i]];
    }
    return dataObject;
}