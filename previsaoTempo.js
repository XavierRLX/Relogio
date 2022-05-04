function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude
      let long = pos.coords.longitude
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=09308cb4f069da400e62f5a6896333fd`
      fetchApi(url)
      console.log(url)
    })
  }
  
  function fetchApi(url) {
    let city = document.querySelector('.city')
    let temperature = document.querySelector('#temp')
    let humidity = document.querySelector('#umidad')
  
    fetch(url)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      
      city.textContent      = data.name
      temperature.innerHTML = tempInCelsius
      humidity.innerHTML    = data.main.humidity
    })
    .catch((err) => {
      city.innerText = `Ligue o GPS`;
      temperature.innerHTML = `-`;
    })
  }
  
  getUserPosition()