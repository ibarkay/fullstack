import React, { Component } from "react";
import ReactDOM from "react-dom";

class Input extends Component {
	render() {
		return (
			<div>
				<label htmlFor={this.props.name}>{this.props.name}</label>
				<input
					type="text"
					name={this.props.name}
					onChange={(e) => this.props.onChange(e.target)}
				/>
			</div>
		);
	}
}

class Select extends Component {
	render() {
		return (
			<div>
				<label htmlFor="{this.props.name}">{this.props.name}</label>
				<select name={this.props.name}>
					<option value="15">0-15</option>
					<option value="25">15-25</option>
					<option value="100">25-100</option>
				</select>
			</div>
		);
	}
}

class TextArea extends Component {
	render() {
		return (
			<div>
				<label htmlFor={this.props.name}>{this.props.name}</label>
				<textarea
					name={this.props.name}
					cols="30"
					rows="10"
					onChange={(e) => this.props.onChange(e.target)}
				></textarea>
			</div>
		);
	}
}
class Button extends Component {
	render() {
		return <button onClick={this.props.onSubmit}>click</button>;
	}
}

export default class App extends Component {
	state = {
		firstName: "",
		lastName: "",
		age: 0,
		txt: "",
	};
	// !
	changeState = async (e) => {
		const k = e.name;
		const v = e.value;
		await this.setState({ [k]: v });
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<form onSubmit={this.changeState}>
					<Input
						name="firstName"
						value={this.state.firstName}
						onChange={this.changeState}
					/>
					<Input name="lastName" onChange={this.changeState} />
					<Select name="Age" onChange={this.changeState} />
					<TextArea name="txt" onChange={this.changeState} />
					<Button />
				</form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
