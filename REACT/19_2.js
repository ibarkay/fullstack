import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
	const [contries, setContries] = useState([]);
	const [term, setTerm] = useState("");
	const [filtteredArray, setFiltteredArray] = useState([]);

	const onSearch = (value) => {
		setTerm(value);
		console.log(value, contries.length);
		const filtteredList = contries.filter((country) => {
			return country.name.startsWith(value);
		});
		setFiltteredArray(filtteredList);
	};

	useEffect(() => {
		const getCountries = async () => {
			const resp = await axios.get(apiUrl);
			console.log(resp.data);
			setContries(resp.data);
			setFiltteredArray(resp.data);
		};
		getCountries();
	}, []);

	if (contries) {
		return (
			<div>
				<input
					type="text"
					value={term}
					onChange={(e) => onSearch(e.target.value)}
				/>
				<ul>
					{filtteredArray.map((country) => {
						return <li key={country.name}>{country.name}</li>;
					})}
				</ul>
			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
};

export default Countries;
