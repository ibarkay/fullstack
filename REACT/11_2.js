import React, { Component } from "react";
import ReactDom from "react-dom";

// We want to render 4 checkboxes and make 2 of them checked by default

class Check extends Component {
	state = { check: false };
	render() {
		return (
			<div>
				<label htmlFor={this.props.name}>{this.props.name}</label>
				<input
					onChange={() => this.setState({ check: !this.state.check })}
					type="checkbox"
					name={this.props.name}
					defaultChecked={this.props.ch}
				/>
			</div>
		);
	}
}

export default class App extends Component {
	render() {
		return (
			<div>
				<form className="ui form">
					<Check name="test" ch={false} />
					<Check name="bakdbsjbdaks" ch={false} />
					<Check name="uweiqeenqwjq" ch={true} />
					<Check name="tedsahdsakjdhajst" ch={true} />
				</form>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
