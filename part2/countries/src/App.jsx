import { useState } from 'react'
import './App.css'
import restcountries from './services/restcountries';
import CountryList from './CountryList';
import CountryInfos from './CountryInfos';

function App() {

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      restcountries.getAll()
        .then(returnedQuery => {
          const countriesToShow = returnedQuery.filter((country) => String(country.name.common.toLowerCase()).match(query.toLowerCase()));

          setCountries(countriesToShow);
        })
 
    } catch(error){
      setCountries([]);
    }

  }

  return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<p>find countries : </p>
					<input value={query} onChange={handleChange} />
				</form>
				{countries.length === 1 && (<CountryInfos country={countries} />)}
				{countries.length > 1 && countries.length <= 10 ? <CountryList countries={countries} /> : null}
				{countries.length > 10 && <p>{"Too many countries. Please make your query more specific."}</p>}
			</div>
			<div></div>
		</>
	);
}

export default App


