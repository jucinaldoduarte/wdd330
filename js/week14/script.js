const appID = "4c4f7720e4f35419cea59c4ff154beb5"; 

let currentWeatherDiv = document.getElementById("currentWeatherDiv");
let forecastDiv = document.getElementById("forecastDiv");
let alertDiv = document.getElementById("alertDiv");

let local = document.createElement("SPAN");
let alertEvent = document.createElement("SPAN");
let alertDesc = document.createElement("SPAN");
let alertSource = document.createElement("SPAN");

let iconSun = "&#9728;";
let iconCloud = "&#9729;";
let iconUmbrella = "&#9730;";
let iconSnowMan = "&#9731;";

let iconArray = [];

iconArray.push(iconSun);
iconArray.push(iconCloud);
iconArray.push(iconUmbrella);
iconArray.push(iconSnowMan);

let point = 0;

function refreshPage() {
    window.history.go(0);    
}

function changeIcon(){
    let img = htmlentities.decode(iconArray[point]);
    let icon =  document.getElementById("icon");
    icon.textContent = img;
    if(point < ( iconArray.length - 1 ) ){
      point++;
    } else {
      point = 0;
    }  
  }

function setFieldSet(x) {  
    let images = x.getElementsByTagName("IMG");    
    for (let i = 0; i < images.length; i++) {
        images[i].style.backgroundColor = "#101727";
    }
 }

 function resetFieldSet(x) { 
    let images = x.getElementsByTagName("IMG");    
    for (let i = 0; i < images.length; i++) {
        images[i].style.backgroundColor = "#64A494";
    }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherData);      
    } else {
      myLocation.innerHTML = `Geolocation is not supported by this browser`;      
    }
  }

function formatString(text){
    let textCapitalized = text.split(" ");
        for (let i = 0; i < textCapitalized.length; i++) {
            textCapitalized[i] = textCapitalized[i].charAt(0).toUpperCase() + textCapitalized[i].slice(1);                    
        }

        textCapitalized = textCapitalized.join(" ");
        return textCapitalized;
}

(function(window){
	window.htmlentities = {		
		encode : function(str) {
			let buf = [];
			
			for (var i=str.length-1;i>=0;i--) {
				buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
			}			
			return buf.join('');
		},
		
		decode : function(str) {
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
		}
	};
})(window);

function getWeatherData(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appID}`;
    const apiOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${appID}`;
    
    //Current Weather        
    fetch(apiWeather)
    .then((response) => response.json())
    .then((jsObject) => {  
        console.log(jsObject);

        //Location
        local.textContent = `${jsObject.name}`; 
        currentWeatherDiv.appendChild(local);

        //Icon
        if (jsObject.weather[0].icon != 'undefined'){
          let iconURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
          let icon = document.createElement("img");
          icon.src = iconURL;
          currentWeatherDiv.appendChild(icon);
        }
        
        //Temperature
        if (jsObject.main.temp != 'undefined'){
          let temp = document.createElement("SPAN");
          temp.textContent = `${jsObject.main.temp} ºC`;
          currentWeatherDiv.appendChild(temp);
        }

        //Weather Description
        if (jsObject.weather[0].description != 'undefined'){
          let weatherDesc = document.createElement("SPAN");
          weatherDesc.textContent = formatString(jsObject.weather[0].description);
          currentWeatherDiv.appendChild(weatherDesc);
        }        

        //Humidity
        if (jsObject.main.humidity != 'undefined'){
          let humidity = document.createElement("SPAN");
          humidity.textContent = `Humidity: ${jsObject.main.humidity}%`;
          currentWeatherDiv.appendChild(humidity);
        }      

        //Wind Speed
        if (jsObject.wind.speed != 'undefined'){
          let windSpeed = document.createElement("SPAN");
          windSpeed.textContent = `Wind Speed: ${jsObject.wind.speed} mph`;
          currentWeatherDiv.appendChild(windSpeed);
        }        

        //Wind Chill
        if(jsObject.main.temp <= 50 && jsObject.wind.speed > 3) {
          let windChill = document.createElement("SPAN");
          windChill.textContent = 'Wind Chill: ' + Math.round(35.74 + (0.6215 * jsObject.main.temp) - (35.75 * Math.pow(jsObject.wind.speed, 0.16)) +(0.4275 * jsObject.main.temp * Math.pow(jsObject.wind.speed, 0.16))) + ' ºF';
          currentWeatherDiv.appendChild(windChill);
        }   
    });
    //Forecast and alerts
    fetch(apiOneCall)
    .then((response) => response.json())
    .then((jsObject) => {  
        console.log(jsObject);

        //Forecast
        for (let i = 1; i < jsObject.daily.length; i++ )
        { 
            //Icon
            let iconURL = `https://openweathermap.org/img/w/${jsObject.daily[i].weather[0].icon}.png`;
            let icon = document.createElement("img");
            icon.src = iconURL;
            forecastDiv.appendChild(icon);

            //Temperature
            let temp = document.createElement("SPAN");
            temp.textContent = `${jsObject.daily[i].temp.max} ºC`;
            forecastDiv.appendChild(temp);

            //Weather Description
            let weatherDesc = document.createElement("SPAN");
            weatherDesc.textContent = formatString(jsObject.daily[i].weather[0].description);
            forecastDiv.appendChild(weatherDesc);

            //Date
            let timestamp = jsObject.daily[i].dt;;
            let date = new Date(timestamp*1000);
            let forecastDate = document.createElement("SPAN");
            forecastDate.textContent = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
            forecastDiv.appendChild(forecastDate);
        }

        //Alerts
        for (let i = 0; i < jsObject.alerts.length; i++ )
        { 
            //Alert event 
            alertEvent.textContent = `${jsObject.alerts[i].event}`;
            alertEvent.style.color = "orange";
            alertDiv.appendChild(alertEvent);              

            //Alert description
            alertDesc.textContent = `${jsObject.alerts[i].description}`;
            alertDesc.style.color = "white";
            alertDiv.appendChild(alertDesc);  

            //Alert source
            alertSource.textContent = `Source: ${jsObject.alerts[i].sender_name}`;
            alertSource.style.color = "orange";
            alertDiv.appendChild(alertSource);  

            //Line break
            let br = document.createElement("BR");
            alertDiv.appendChild(br);
        }
    });
}   
getLocation();
setInterval(changeIcon, 2500);
changeIcon();








 






  

