import React from "react";

class App extends React.Component {
	state = { favoriteColor: "red" };
	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoriteColor: "blue" });
		}, 1000);
	}
	componentDidUpdate() {
		const divy = document.querySelector("#divine");
		divy.textContent = `The updated favorite color is ${this.state.favoriteColor}`;
	}
	render() {
		return (
			<div>
				<h1>my favorite color is {this.state.favoriteColor}</h1>
				<div id="divine"></div>
			</div>
		);
	}
}

export default App;
