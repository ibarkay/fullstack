import React, { Component } from "react";
import ReactDOM from "react-dom";

// 1. Create a CustomButton component.
// 2. Loop over the colors array and in every iteration render a CustomButton
// component that will take the color as a prop.
// 3. When we click on a specific button we need to send that specific color back
// to the parent which will save that color to state and display it to the DOM.

const colors = ["red", "yellow", "black"];

class Button extends Component {
	render() {
		return (
			<button onClick={() => this.props.funny(this.props.name)}>
				{this.props.name}
			</button>
		);
	}
}

export default class App extends Component {
	state = { color: "" };

	onTheClick = (color) => {
		this.setState({ color: color });
	};
	render() {
		return (
			<div>
				{colors.map((x) => (
					<Button name={x} funny={this.onTheClick} />
				))}
				<h3>the updated color is : {this.state.color}</h3>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
