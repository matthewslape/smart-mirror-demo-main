const api = '90d73af0184663460f0bd390765aade9';

//get html parts
const iconImg = document.querySelector('.weather-icon');
const loc = document.querySelector('#location');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

window.addEventListener('load', () => {

    if(navigator.geolocation){
        let long;
        let lat;

        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
                lat = position.coords.latitude;
        
                const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

                //check check
                console.log(base);

                fetch(base)
                .then((response)=> {
                    return response.json();
                })

                .then((data) => {
                
                  //check check
                  console.log(data);
                
                  const place = data.name;
                  const temp = data.main.temp;
                  const {description, icon} = data.weather[0];
                  const { sunrise, sunset } = data.sys;
                
                  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
                  const fahrenheit = (temp * 9) / 5 + 32;
                
                  const sunriseGMT = new Date(sunrise * 1000);
                  const sunsetGMT = new Date(sunset * 1000);
                
                  //interacting with html
                  iconImg.src = iconUrl;
                  loc.textContent = `${place}`;
                  desc.textContent = `${description}`;
                  tempF.textContent = `${fahrenheit.toFixed(1)}°`;
                  sunriseDOM.textContent = `Sunrise: ${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
                  sunsetDOM.textContent = `Sunset: ${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
                });
        });
    }

});

//Getting Date and Time
function doDate() {
    //arrays for month and date
    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    //create new Date info
    var now = new Date();

    let hour = (now.getHours() + 24) % 12 || 12;

    //am or pm?
    let stamp = "am";
    if(now.getHours() >= 12){
        stamp = "pm";
    }

    let min = now.getMinutes();
    if(now.getMinutes() <= 9){
        min = "0" + now.getMinutes();
    }

    //Attaching to HTML
    document.querySelector(".date").textContent = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    document.querySelector(".day").textContent = `${days[now.getDay()]}`;
    document.querySelector(".time").textContent = `${hour}:${min} ${stamp}`;

}

//Every 30 Seconds, Refresh
setInterval(doDate, 3000);