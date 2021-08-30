document.getElementById('spiner').style.display = 'none';
const userInput = () => {
    const inputElement = document.getElementById('user-input');
    const input = inputElement.value;
    inputElement.value = '';
    if (input == '') {
        document.getElementById('error').innerHTML = ``;
        document.getElementById('error-2').innerHTML = `<h1>Enter city Name</h1>`
    }
    else {
        document.getElementById('spiner').style.display = 'block';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=53264b4ea66cd326b0250a5678abbaad`)
            .then(res => res.json())
            .then(data => displayWeather(data))
    }
}
const displayWeather = (data) => {
    document.getElementById('spiner').style.display = 'none';
    if (data.cod == 404) {
        document.getElementById('error-2').innerHTML = ``;
        document.getElementById('error').innerHTML = `<h1>Enter Correct city Name</h1>`
    }
    else {
        document.getElementById('error-2').innerHTML = ``;
        document.getElementById('error').innerHTML = ``;
        document.getElementById('icon').innerHTML=``;
        document.getElementById('city-name').innerText = data.name;
        document.getElementById('degreeCelcious').innerText = Math.round(data.main.temp - 273.15);
        document.getElementById('clouds').innerText = data.weather[0].main;
        const icon = data.weather[0].icon;
        const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        const iconField = document.getElementById('icon');
        const div = document.createElement('div');
        div.innerHTML = `<img src="${url}">`
        iconField.appendChild(div);

    }
}

