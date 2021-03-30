import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = `https://hn.algolia.com/api/v1/search?query=`;

const Alogolia = () => {
	const [data, setData] = useState([]);
	const [term, setTerm] = useState("hooks");

	useEffect(() => {
		const getData = async () => {
			const resp = await axios.get(apiUrl + term);
			setData(resp.data.hits);
		};
		getData();
	}, []);

	const handleChange = (value) => {
		setTerm(value);
	};

	const handleClick = async () => {
		const resp = await axios.get(apiUrl + term);
		setData(resp.data.hits);
	};

	if (data) {
		return (
			<div>
				<input
					type="text"
					value={term}
					onChange={(e) => {
						handleChange(e.target.value);
					}}
				/>
				<button onClick={() => handleClick()}>Search</button>
				{data.map((item) => {
					return (
						<li key={item.objectID}>
							<a href={item.url}>{item.title}</a>
						</li>
					);
				})}
			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
};

export default Alogolia;
