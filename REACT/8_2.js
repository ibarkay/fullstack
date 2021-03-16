import React from "react";
let size = 100;
const Box = (props) => {
	return (
		<div
			className="box"
			id={props.id}
			style={{
				background: `${props.b}`,
				width: `${props.w}px`,
				height: `${props.h}px`,
				transition: "all 0.9s",
			}}
		></div>
	);
};

class App extends React.Component {
	// !tanx to 0f1r! and it4y. && el107
	state = { width: 0, width2: 0, width3: 0, height: 100 };
	componentDidMount() {
		setTimeout(() => {
			this.setState({ width: 100, width2: 150, width3: 200 });
		}, 1000);
	}
	render() {
		return (
			<div>
				<Box id="one" w={this.state.width} h={this.state.height} b="red" />
				<Box id="two" w={this.state.width2} h={this.state.height} b="blue" />
				<Box id="three" w={this.state.width3} h={this.state.height} b="pink" />
			</div>
		);
	}
}

export default App;
