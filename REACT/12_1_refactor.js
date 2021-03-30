import React, { useState, useEffect } from "react";

import axios from "axios";

const Chucky = () => {
	const [data, setData] = useState("");
	const [catagories, setCatagories] = useState([]);

	const randomJoke = async () => {
		const response = await axios.get(
			"https://api.chucknorris.io/jokes/random",
			{}
		);
		setData(response.data.value);
	};

	const catagoryJoke = async (cat) => {
		const response = await axios.get(
			`https://api.chucknorris.io/jokes/random?category=${cat}`,
			{}
		);
		setData(response.data.value);
	};

	const getCategories = async () => {
		const response = await axios.get(
			"https://api.chucknorris.io/jokes/categories",
			{}
		);

		setCatagories(response.data);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h1>{data}</h1>
			<button onClick={() => randomJoke()}>Random</button>
			<button onClick={() => getCategories()}>get Catagories</button>
			<div>
				{catagories.map((cat) => (
					<button onClick={() => catagoryJoke(cat)}>{cat}</button>
				))}
			</div>
			<h1>{data}</h1>
		</div>
	);
};

export default Chucky;

// class App extends Component {
// 	state = {
// 		joke: "",
// 		catagories: [],
// 		catJoke: "",
// 	};

// 	// ?click random joke
// 	onClick = async () => {
// 		const response = await axios.get(
// 			"https://api.chucknorris.io/jokes/random",
// 			{}
// 		);
// 		this.setState({ joke: response.data.value });
// 	};
// 	// ?click on Catagorie
// 	onClickCatagories = async (cat) => {
// 		console.log(cat);
// 		const response = await axios.get(
// 			`https://api.chucknorris.io/jokes/random?category=${cat}`,
// 			{}
// 		);
// 		this.setState({ catJoke: response.data.value });
// 	};

// 	// ?get catagories
// 	getCategories = async () => {
// 		const response = await axios.get(
// 			"https://api.chucknorris.io/jokes/categories",
// 			{}
// 		);

// 		this.setState({
// 			catagories: response.data,
// 		});
// 	};

// 	render() {
// 		return (
// 			<div style={{ textAlign: "center" }}>
// 				<h1>{this.state.joke}</h1>
// 				<button onClick={() => this.onClick()}>click me</button>
// 				<button onClick={() => this.getCategories()}>get Catagories</button>
// 				<div>
// 					{this.state.catagories.map((cat) => (
// 						<button onClick={() => this.onClickCatagories(cat)}>{cat}</button>
// 					))}
// 				</div>
// 				<h1>{this.state.catJoke}</h1>
// 			</div>
// 		);
// 	}
// }
