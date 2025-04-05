export function addToLocalStorage(data, key = LOCAL_STORAGE_KEY) {
    if (localStorage.getItem(key) == null) {
      let dataArray = [data];
      localStorage.setItem(key, JSON.stringify(dataArray));
      
    } else {
      let dataArray = JSON.parse(localStorage.getItem(key)); 
      dataArray.unshift(data);
      localStorage.setItem(key, JSON.stringify(dataArray));
    }
  }

  export function setLocalStorage(data, key = LOCAL_STORAGE_KEY) {
    let dataArray = data;
    localStorage.setItem(key, JSON.stringify(dataArray));
  }

  export function getLocalStorage(key = LOCAL_STORAGE_KEY) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
  

  export function convertToJson(response) {
    if (!response.ok) {
      const error = `Error: ${response.status} - ${response.statusText}`;
      console.error(error);
      throw new Error(error);
    }
    return response.json();
  }

  export function clearHtmlElement(element) {
    element.innerHTML = '';
  }

  export function countDown(launchDate, countDownElement){
    let countDownDate = new Date(launchDate).getTime();
    

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.querySelector(countDownElement).innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(countDownElement).innerHTML = "Launched";
  }
}, 1000);

const backButton = document.querySelector(".launch-button");

backButton.addEventListener("click", () => { clearInterval(x);});

  }

  export const sleep = function(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  };