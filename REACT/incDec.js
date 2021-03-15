import React from "react";

class IncreaseDecrease extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicks: 0, style: { color: "red" } };
		this.clickPluse = this.clickPluse.bind(this);
		this.clickMinus = this.clickMinus.bind(this);
	}
	clickPluse() {
		this.setState({ clicks: this.state.clicks + 1 });
	}
	clickMinus() {
		this.setState({ clicks: this.state.clicks - 1 });
	}
	render() {
		return (
			<div>
				<button onClick={this.clickPluse}>Increase</button>
				<h2 style={this.state.style}>{this.state.clicks}</h2>
				<button onClick={this.clickMinus}>Decrease</button>
			</div>
		);
	}
}
export default IncreaseDecrease;
