/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=1a49afd7c84c376f8170c1f2bd2576de&units=imperial';
let generateBtn = document.getElementById('generate');
let dateField = document.getElementById('date');
let tempField = document.getElementById('temp');
let contentField = document.getElementById('content');

// console.log(zipCode);

// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



async function getApiData() {
    let zipCode = document.getElementById('zip').value;
    let feelingRes = document.getElementById('feelings').value;
    console.log(zipCode);

    try {
        const apiResponse = await fetch(baseURL+zipCode+apiKey);
        const apiData = await apiResponse.json();
        const WeatherTemp = apiData.main.temp;
        console.log(WeatherTemp); // for the temperature

        // console.log(apiData); // all the data object
        // console.log(apiData.name); // for City name
        // console.log(apiData.sys.country); // for Country name
        // console.log(apiData.main.temp); // for the temperature
        // console.log(apiData.weather[0].main); // for weather skys
      
        postApiData('/apiData', {newDate: newDate, feelingRes: feelingRes, WeatherTemp: WeatherTemp});
        
        uiApiData();
        

        return WeatherTemp;
    } catch (error) {
        console.log('The Error : ', error);
    }
}

generateBtn.addEventListener('click', getApiData);



// getData();  // to confirm the function running

/** tried to use this way at first */

// generateBtn.addEventListener('click', async () => {
//     let zipCode = document.getElementById('zip').value;
// try {
//     const apiResponse = await fetch(baseURL+zipCode+apiKey);
//     const apiData = await apiResponse.json();
//     console.log(apiData);
//     return apiData;
// } catch (err) {
//     console.log('The Error : ', err);
// }
// });

const postApiData = async ( url='', apiData = {}) => {
    console.log(apiData);
      const resPost = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),       
    });
  
      try {
        const allResPost = await resPost.json();
        console.log(allResPost);
        return allResPost;
      }catch(error) {
      console.log("error", error);
      }
  }


  const uiApiData = async () => {
      const res = await fetch('/uiData');
  
      try {
        const UiResult = await res.json();
        dateField.innerHTML = UiResult.newDate;
        tempField.innerHTML = UiResult.WeatherTemp;
        contentField.innerHTML = UiResult.feelingRes;
        console.log(UiResult);
        // console.log(contentField);
        return UiResult;
    }catch(error) {
        console.log("error", error);
    }
    

  }

