import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class App extends Component {
	state = {
		joke: "",
		catagories: [],
		catJoke: "",
	};

	// ?click random joke
	onClick = async () => {
		const response = await axios.get(
			"https://api.chucknorris.io/jokes/random",
			{}
		);
		this.setState({ joke: response.data.value });
	};
	// ?click on Catagorie
	onClickCatagories = async (cat) => {
		console.log(cat);
		const response = await axios.get(
			`https://api.chucknorris.io/jokes/random?category=${cat}`,
			{}
		);
		this.setState({ catJoke: response.data.value });
	};

	// ?get catagories
	getCategories = async () => {
		const response = await axios.get(
			"https://api.chucknorris.io/jokes/categories",
			{}
		);

		this.setState({
			catagories: response.data,
		});
	};

	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<h1>{this.state.joke}</h1>
				<button onClick={() => this.onClick()}>click me</button>
				<button onClick={() => this.getCategories()}>get Catagories</button>
				<div>
					{this.state.catagories.map((cat) => (
						<button onClick={() => this.onClickCatagories(cat)}>{cat}</button>
					))}
				</div>
				<h1>{this.state.catJoke}</h1>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
