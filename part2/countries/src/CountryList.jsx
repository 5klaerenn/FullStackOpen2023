import { useState } from "react";
import CountryInfos from "./CountryInfos";
import restcountries from "./services/restcountries";

const CountryList = ( {countries} ) => {

    const [country, setCountry] = useState(null);

    const handleClick = (name) =>{
        try {
                restcountries.getCountry(name)
                .then((returnedQuery) => {
                    setCountry(returnedQuery);
                });
        } catch (error) {
                setCountry([]);
        }

    }

    return (
			<>
				<ul>
					{countries.map((country) => (
						<li key={country.name.common}>
							{country.name.common}
							<button
								className="btn"
								onClick={() => {
									handleClick(country.name.common);
								}}>
								show
							</button>
						</li>
					))}
				</ul>
				{country && <CountryInfos country={country}/>}
			</>
		);
}

export default CountryList;