let myLocation = document.getElementById("location");
let myDescription = document.getElementById("description");
let myTemp = document.getElementById("temp");
let myHumidity = document.getElementById("humidity");
let myWind = document.getElementById("wind");
let myWindChill = document.getElementById("windchill");
let dashboard = document.getElementById("dashboard");
let myBpdy = document.getElementById("myBody");
let myAlertDesc = document.getElementById("alertDesc");
let myAlertEvent = document.getElementById("alertEvent");
let myAlertSource = document.getElementById("alertSource");
let myrefreshButton = document.getElementById("refreshBTN");

let icoArray = [];
icoArray.push("&#9728;");
icoArray.push("&#9729;");
icoArray.push("&#9730;");
icoArray.push("&#9731;");

let point = 0;

function refreshPage() {
    window.history.go(0);    
}

function changeIco(){
    let img = htmlentities.decode(icoArray[point]);
    let ico =  document.getElementById("ico");
    ico.textContent = img;
    if(point < ( icoArray.length - 1 ) ){
      point++;
    }else{
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
      navigator.geolocation.getCurrentPosition(showPosition);      
    } else {
      myLocation.innerHTML = `Geolocation is not supported by this browser`;      
    }
  }

(function(window){
	window.htmlentities = {
		/**
		 * Converts a string to its html characters completely.
		 *
		 * @param {String} str String with unescaped HTML characters
		 **/
		encode : function(str) {
			var buf = [];
			
			for (var i=str.length-1;i>=0;i--) {
				buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
			}
			
			return buf.join('');
		},
		/**
		 * Converts an html characterSet into its original character.
		 *
		 * @param {String} str htmlSet entities
		 **/
		decode : function(str) {
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
		}
	};
})(window);

function showPosition(position) {
    const appID = "4c4f7720e4f35419cea59c4ff154beb5";    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${appID}`;
    const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${appID}`;
    const apiAlertURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,daily&appid=${appID}`;

    //Data from location
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {  
        //console.log(jsObject); 
        //Icon URL
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        //Get data        
        let location = `${jsObject.name}`; 
        let desc = `${jsObject.weather[0].description}`;
        let temperature = jsObject.main.temp;      
        let humidity = jsObject.main.humidity;
        let windspeed = jsObject.wind.speed;       

        //Show data 
        //location
        myLocation.textContent =  location;         

        //icon
        const img = document.createElement("img");
        img.src = imagesrc;
        img.setAttribute("id", "icoIMG");
        
        let icoDiv = document.getElementById("icoDiv");
        icoDiv.appendChild(img);  

        //Description
        const arrDesc = desc.split(" ");
        for (let i = 0; i < arrDesc.length; i++) {
            arrDesc[i] = arrDesc[i].charAt(0).toUpperCase() + arrDesc[i].slice(1);                    
        }

        let descCapitalized = arrDesc.join(" ");

        if(descCapitalized != 'undefined'){
            myDescription.textContent = descCapitalized;
        } 

        //temperature
        if(temperature != 'undefined'){
            myTemp.textContent =  `Temperature: ${temperature} °F`;            
        } 
        
        //humidity
        if(jsObject.main.humidity != 'undefined'){
            myHumidity.textContent = `Humidity: ${humidity}%`;
        }

        //wind speed        
        if(jsObject.wind.speed != 'undefined'){
            myWind.textContent = `Wind Speed: ${windspeed} mph`;
        }

        //wind Chill
        if(jsObject.main.temp <= 50 && jsObject.wind.speed > 3) {
            myWindChill.textContent = 'Wind Chill: ' + Math.round(35.74 + (0.6215 * jsObject.main.temp) - (35.75 * Math.pow(jsObject.wind.speed, 0.16)) +(0.4275 * jsObject.main.temp * Math.pow(jsObject.wind.speed, 0.16))) + ' ºF';
        } 
    });

    //Forecast
    fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject); 
        for (let n = 1; n < 6; n++) {
            const today = new Date();
            const nextdate = new Date(today);
            nextdate.setDate(nextdate.getDate() + n);  
            const month = nextdate.getUTCMonth() + 1;
            const day = nextdate.getUTCDate();
            const dayOfweek = nextdate.getDay(); 
            const year = nextdate.getUTCFullYear();
            let stringDate;
        
            if (day < 10){
                if (month < 10){
                    stringDate = `${year}-0${month}-0${day}`;
                }
                else {
                    stringDate = `${year}-${month}-0${day}`; 
                }             
            }
            
            if (day > 9){
                if (month < 10){
                    stringDate = `${year}-0${month}-${day}`;                
                }
                else {
                    stringDate = `${year}-${month}-${day}`;
                }
            }            

            for (let i = 0; i < jsObject.list.length; i++ ) {
                if (new String(jsObject.list[i].dt_txt).valueOf() == new String(`${stringDate} 00:00:00`).valueOf()){
                    let imagesrc = `https://openweathermap.org/img/w/${jsObject.list[i].weather[0].icon}.png`;
                    let desc = jsObject.list[i].weather[0].description;
                    let temp = jsObject.list[i].main.temp;

                    const arrDesc = desc.split(" ");
                    for (let i = 0; i < arrDesc.length; i++) {
                        arrDesc[i] = arrDesc[i].charAt(0).toUpperCase() + arrDesc[i].slice(1);                    
                    }

                    let descCapitalized = arrDesc.join(" ");
                    
                    const img = document.createElement("img");                    
                    img.src = imagesrc;

                    let forecast = document.getElementById("forecastDiv");
                    forecast.appendChild(img);

                    const span1 = document.createElement("span");
                    span1.textContent = `${descCapitalized}`;
                    span1.style.color = 'white';
                    
                    forecast.appendChild(span1);                   

                    const span3 = document.createElement("span");
                    span3.textContent = `${temp} ºF`; 
                                    
                    forecast.appendChild(span3);

                    const span2 = document.createElement("span");
                    span2.textContent = `${stringDate}`;
                    span2.style.color = 'white';
                    span2.style.margin = "0 0 2rem 0";
                    
                    forecast.appendChild(span2);                    
            }
          }
        }
    });  
    
    //Alerts
    fetch(apiAlertURL)
    .then((response) => response.json())
    .then((jsObject) => {  
        console.log(jsObject); 
        let alert = document.getElementById("alertstDiv");
        for (let i = 0; i < jsObject.alerts.length; i++ )
        {
            let span1 = document.createElement("SPAN");
            span1.textContent = `${jsObject.alerts[i].event}`;
            span1.style.color = "orange";
            alert.appendChild(span1); 
             

            let span2 = document.createElement("SPAN");
            span2.textContent = `${jsObject.alerts[i].description}`;
            alert.appendChild(span2);  

            let span3 = document.createElement("SPAN");
            span3.textContent = `Source: ${jsObject.alerts[i].sender_name}`;
            span3.style.color = "orange";
            alert.appendChild(span3);  

            let br = document.createElement("BR");
            alert.appendChild(br);
        }
    });
}   
getLocation();
setInterval(changeIco, 2500);
changeIco();








 






  

