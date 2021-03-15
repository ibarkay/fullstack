import React from "react";

class HideAndSeek extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: "10rem",
			height: "10rem",
			background: "yellow",
			visibility: "visible",
		};
		this.clickEvent = this.clickEvent.bind(this);
	}
	clickEvent() {
		if (this.state.visibility === "visible") {
			this.setState({ visibility: "hidden" });
		} else {
			this.setState({ visibility: "visible" });
		}
	}
	render() {
		return (
			<div>
				<button onClick={this.clickEvent}>show/hide</button>
				<div className="box" style={this.state}></div>
			</div>
		);
	}
}

export default HideAndSeek;
