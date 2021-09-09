
const form = document.querySelector('form');
const temp = document.getElementById('temp');
const detail =document.getElementById('detail');
const loc = document.getElementById('loc');
const icon = document.getElementById('icon');


function getWeather(city) {

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=106af26f665342924ec267599714fb7c`;

    fetch(api)
        .then((res) => {
            return res.json()
        })
        .then((data) => {


            console.log(data);
            temp.textContent = Math.floor(data.main.temp - 273)+"°C";

            detail.textContent = data.weather[0].description;
            loc.textContent = data.name + "," + data.sys.country;

            console.log(data.weather[0].icon);
            let x = data.weather[0].icon;
          icon.innerHTML = `<img src="http://openweathermap.org/img/w/${x}.png" style= 'height:8rem'/>`;

          document.getElementById('container').style.backgroundImage=`url(http://openweathermap.org/img/w/${x}.png)`;

        })
        .catch((err) => {
            console.log(err.message);
        });

}


form.addEventListener('submit', (e) => {

    e.preventDefault();

    const city = form.elements[0].value;
    getWeather(city);
})