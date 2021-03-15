import React from "react";
class Increase extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicks: 0 };
		this.clickEvnt = this.clickEvnt.bind(this);
	}
	clickEvnt() {
		this.setState({ clicks: this.state.clicks + 1 });
	}
	render() {
		return (
			<div>
				<button onClick={this.clickEvnt}>Increase</button>
				<div>{this.state.clicks}</div>
			</div>
		);
	}
}

export default Increase;
