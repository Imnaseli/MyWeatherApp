//  NOTE: Document.title can be used to change the title sha 
document.title = 'Weather Application'
const degreesymbol = '°'

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
const precipitation = document.getElementById('precipitation')
const error = document.getElementById('error')

//searchButton.onclick = () => getLocation()
form.onsubmit = () => getLocation()
// TODO: GET your api and call it for Gods sake 

function getWeatherdata(place){
    // NOTE: Function to call api data 
    alert(place)
}

function getLocation(){
    // NOTE: FUnction to get data from text input
    let place = searchInput.value
    place = place.toLowerCase()
    getWeatherdata(place) 
}

function clearerror(){
    // NOTE: To clear the error message box
    error.textContent = ''
}
function showerror( errormessage){
    // NOTE: Function to display error
    error.textContent = errormessage
}
//clearerror()

