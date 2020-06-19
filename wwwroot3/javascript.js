var getWeatherData = () => {
	var city = document.getElementById("cityname");
	var city = city.value.trim();
	var publicKey = `a01d6dc33c0548f76f2d8f8dbdc609cf`;
	var apiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${publicKey}`;
	fetch(apiCall)
		.then(response => response.json())
		.then(data => {
			var { temp } = data.list[0].main;
			var temptoday = temp;
			var { temp } = data.list[5].main;
			var temptom = temp;
			var { description } = data.list[0].weather[0];
			var destoday = description;
			var { description } = data.list[5].weather[0];
			var destom = description;
			var n = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
			var n1 = new Date(n);
			n1.setDate(n1.getDate() + 1);

			var { icon } = data.list[0].weather[0];
			var iconimg1 = icon;
			var icon1 = 'http://openweathermap.org/img/wn/';
			var icon1 = icon1 + iconimg1;
			var icon1 = icon1 + '@2x.png';

			var { icon } = data.list[5].weather[0];
			var iconimg2 = icon;
			var icon2 = 'http://openweathermap.org/img/wn/';
			var icon2 = icon2 + iconimg2;
			var icon2 = icon2 + '@2x.png';

			var result = document.getElementById("result");
			result.innerHTML = `<h2>Weather for ${city}:</h2>
			<h1>${n}</h1>
			<p id="ptemp">Temperature:</span> ${(temptoday - 273.15).toFixed(2)} &deg;C</p><br>
			<p id="pdescription">${destoday}</p><br>
			<img class="city-icon" src=${icon1}>
			<h1>${n1}</h1>
			<p id="ptemp">Temperature:</span> ${(temptom - 273.15).toFixed(2)} &deg;C</p><br>
			<p id="pdescription">${destom}</p>
			<img class="city-icon" src=${icon2}>`;
			
		})
};
