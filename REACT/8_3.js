import React from "react";
// Instructions
// 1. We want to create a simple app: a box that changes
// color every half a second.
// 2. Let’s change the box to a circle after 5 color changes.

let counter = 0;

class App extends React.Component {
	state = { style: { background: "red", width: 100, height: 100 } };

	makeCircule = () => {
		if (counter === 5) {
			counter = 9999;

			this.setState({
				style: {
					background: "blue",
					width: 100,
					height: 100,
					borderRadius: "50%",
				},
			});
		}
	};
	componentDidMount() {
		const changeColor = () => {
			this.setState({ style: { background: "blue" } });
		};
		setTimeout(changeColor, 500);
	}
	componentDidUpdate() {
		const colorCurrent = `${this.state.style.background}`;

		const changeColor = () => {
			if (colorCurrent === "blue" && counter < 5) {
				this.setState({
					style: { background: "red", width: 100, height: 100 },
				});
			} else if (counter < 5) {
				this.setState({
					style: { background: "blue", width: 100, height: 100 },
				});
			}
		};
		if (counter < 5) {
			setTimeout(changeColor, 500);
			counter++;
		}
		if (counter === 5) {
			this.makeCircule();
		}
	}
	render() {
		return (
			<div>
				<div
					className="box"
					style={this.state.style}
					width="100"
					height="100"
				></div>
			</div>
		);
	}
}

export default App;
