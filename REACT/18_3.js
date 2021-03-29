import React, { useState } from "react";

const Numbers = () => {
	const [secondes, setSecondes] = useState(60);

	const handleChange = (e) => {
		console.log(e.target.name);
		if (e.target.name === "secondes") {
			setSecondes(e.target.value);
		}
		if (e.target.name === "minutes") {
			setSecondes(e.target.value * 60);
		}
		if (e.target.name === "hours") {
			setSecondes(e.target.value * 60 * 60);
		}
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<label htmlFor="secondes">Secondes</label>
			<input
				type="number"
				onChange={(e) => handleChange(e)}
				value={secondes}
				name="secondes"
				id=""
			/>
			<label htmlFor="minutes">Minutes</label>
			<input
				type="number"
				onChange={(e) => handleChange(e)}
				value={secondes / 60}
				name="minutes"
				id=""
			/>
			<label htmlFor="hours">Hours</label>
			<input
				type="number"
				onChange={(e) => handleChange(e)}
				value={secondes / 60 / 60}
				name="hours"
				id=""
			/>
		</div>
	);
};

export default Numbers;
