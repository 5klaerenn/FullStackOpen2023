import { useEffect, useState } from "react";
import restWeather from "./services/restWeather";

const CountryInfos = ({ country }) => {
    const api_key = import.meta.env.VITE_API_METEO;
    const c = country[0] || country ;

    const [meteo, setMeteo] = useState('');

    useEffect(() => {
        const fetchWeather = () => {
            restWeather.getWeather(c, api_key)
                .then((returnedWeather) => {
                setMeteo(returnedWeather);
            });


        };

        fetchWeather();
    }, [c])
    
    const icon = meteo && meteo.weather && meteo.weather.length > 0 
        ? `https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png` 
        : "";


    return (
			<>
				<h1>{c.name.common}</h1>
				<div>
					<p>capital : {c.capital}</p>
					<p>area : {c.area}</p>
				</div>
				<div>
					<h3>Languages:</h3>
					<ul>{c.languages && Object.values(c.languages).map((language, index) => <li key={index}>{language}</li>)}</ul>
				</div>
				<div className="flag">{c.flag}</div>
				<div>
					{meteo && (
						<>
							<h3>Weather in {c.name.common}</h3>
							<p>Temperature : {meteo.main.temp} celcius</p>
							<img src={icon} alt="weather icon" />
							<p>Wind : {meteo.wind.speed} m/s</p>
						</>
					)}
				</div>
			</>
		);

}

export default CountryInfos;