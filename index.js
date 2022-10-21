//  NOTE: Document.title can be used to change the title sha 
document.title = 'Weather Application'
const degreesymbol = '°'
const KEY = "641586e03eb8a958802e9b8d71c40643";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// TODO: Declare inputs 
const form = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')

// TODO: Decalre outputs
const country = document.getElementById('country')
const date = document.getElementById('date')
const weathertemperature = document.getElementById('weathertemperature')
const weathersummary = document.getElementById('weathersummary') 
const weatherboundary = document.getElementById('weatherboundary')
const wind = document.getElementById('wind')
const place = document.getElementById('place')
const pressure = document.getElementById('pressure')
const error = document.getElementById('error')

form.addEventListener('submit', handleSubmit);
searchButton.addEventListener('click', handleSubmit);

function displayWeather(data){
    country.textContent = data.country
    date.textContent = data.date
    weathertemperature.textContent = data.temperature
    weathersummary.textContent = data.description
    weatherboundary.textContent = `${data.temp_max} - ${data.temp_min}`
    wind.textContent = data.windspeed
    pressure.textContent = data.pressure
    place.textContent = data.place
    
}

function handleSubmit(e){
    e.preventDefault();
    getLocation();    
}

async function getWeatherdata(place = 'lagos'){
    // NOTE: Function to call api data 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${KEY}`
    const response = await fetch (url)
    
    if(response.status === 400){
       showerror() 
    }else{
        clearerror()
        const data = await response.json()
        let Weatherdata = cleanData(data)
        displayWeather(Weatherdata)
        //formatStyles(Weatherdata)
        reset()
    }
}
function getLocation(){
    let place = searchInput.value
    let location = place.toLowerCase()
    getWeatherdata(location) 
}
function cleanData (data){
    let maindata = data.weather[0]
    let d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];

    const Mydata = {
        
        country: data.sys.country,
        temperature: Math.ceil(data.main.temp - 273),
        temp_min: Math.ceil(data.main.temp_min - 273) - 2,
        temp_max: Math.ceil(data.main.temp_max - 273) + 2,
        place: data.name,
        windspeed: data.wind.speed,
        description: maindata.description,
        icon: maindata.icon,
        humidity: data.main.humidity,
        date:`${day} - ${date} ${month} `,
        pressure:data.main.pressure,

    }
    return Mydata;
}
function clearerror(){
    // NOTE: To clear the error message box
    error.textContent = ''
}
function showerror(){
    // NOTE: Function to display error
    error.textContent = "An Error occured."
}
function reset(){
    form.reset();
}
getWeatherdata('Lagos')