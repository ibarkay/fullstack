import React, { useState } from "react";

const Checks = () => {
	const arr = ["one", "two", "three", "four", "five"];
	const [numbers, setNumbers] = useState(
		arr.map((el) => {
			return { name: el, isCheck: false };
		})
	);
	const handleChange = (name) => {
		console.log(name);
		const newNumbers = numbers.map((num) => {
			if (num.name === name) {
				return { ...num, isCheck: !num.isCheck };
			} else {
				return num;
			}
		});
		setNumbers(newNumbers);
	};

	const handleDelet = () => {
		const newNumbers = numbers.filter((num) => !num.isCheck);
		setNumbers(newNumbers);
	};

	const handleReset = () => {
		setNumbers(
			arr.map((el) => {
				return { name: el, isCheck: false };
			})
		);
	};

	return (
		<div>
			<button onClick={() => handleDelet()}>Delete</button>
			<button onClick={() => handleReset()}>Reset</button>
			{numbers.map((el) => {
				if (!el.isCheck) {
					return (
						<li key={el.name}>
							<input onChange={() => handleChange(el.name)} type="checkbox" />
							{el.name}
						</li>
					);
				} else {
					return (
						<li key={el.name}>
							<input onChange={() => handleChange(el.name)} type="checkbox" />
							{el.name}
						</li>
					);
				}
			})}
		</div>
	);
};

export default Checks;
