import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAll = () => {
    const request = axios.get(`${baseUrl}all`);
    return request.then((response) => response.data);
}

const getCountry = (name) => {
    const request = axios.get(`${baseUrl}name/${name}`);
    return request
			.then((response) => response.data)
			.catch((error) => {
				console.error("Error fetching all countries:", error);
				throw error; 
			});
}

export default {getAll, getCountry}