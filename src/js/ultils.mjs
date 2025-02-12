export function addToLocalStorage(data, key = LOCAL_STORAGE_KEY) {
    if (localStorage.getItem(key) == null) {
      let dataArray = [data];
      localStorage.setItem(key, JSON.stringify(dataArray));
      //dataArray.push( JSON.parse(localStorage.getItem(key)));
    } else {
      let dataArray = JSON.parse(localStorage.getItem(key)); //
      dataArray.unshift(data);
      localStorage.setItem(key, JSON.stringify(dataArray));
    }
  }

  export function setLocalStorage(data, key = LOCAL_STORAGE_KEY) {
    let dataArray = data;
    localStorage.setItem(key, JSON.stringify(dataArray));
  }

  

  export function convertToJson(response) {
    if (!response.ok) {
      const error = `Error: ${response.status} - ${response.statusText}`;
      console.error(error);
      throw new Error(error);
    }
    return response.json();
  }

  export function templateStringLiteralTemplate(){}