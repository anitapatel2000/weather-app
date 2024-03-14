
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
	.then (response => response.json())
	.then (response => {
		console.log(response)	

		
		temp.innerHTML= response.temp
		temp2.innerHTML= response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.main_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind2_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degres
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
		
    .catch (err => console.error(err)); 
}

Submit.addEvent.istener("click", (e)=>){

}