import React, { Component } from "react";
import ReaactDOM from "react-dom";
import axios from "axios";
// Our API
// We are going to use this API (https://randomuser.me/) to display random
// avatars when the component mounts to the screen.
// Instructions
// 1. Fetch at least 10 random avatars from the API
// 2. Get the relevant data you want from each avatar and save it to state.
// 3. Display all the avatars on screen.
// 4. Have an option to filter over the avatars by their name.
//  Tip:
// We are essentially filtering over an array of objects by the objects name value.
// Extra tip:
// Use the filter and includes method to achieve this.
// Think like a React Developer
// Components
// What components should we create?
// Tip:
// A component for the input
// A component for the button
// A component thats only purpose is to map over the avatars
// A component to display a single avatar
// State
// What components should hold the state?
// Reusability
// How can I make my components reusable? If I take that component and paste
// it to another project, I shouldn’t need to modify the component itself at all.
// Tip:
// Different props
// Here is a video demo of what we should build

class Input extends Component {
	render() {
		return (
			<div>
				<input
					onChange={(e) => this.props.changeVal(e.currentTarget.value)}
					type="text"
					id=""
				/>
			</div>
		);
	}
}
class Button extends Component {
	render() {
		return <button>flitter</button>;
	}
}
class MAppy extends Component {
	render() {
		return;
	}
}
class DisplayOneAvatar extends Component {
	render() {
		const person = this.props.user;
		if (person) {
			return (
				<div style={{ border: "1px black solid" }}>
					<h1>
						{person.name.first} {person.name.last}
					</h1>
					<img src={person.picture.large} alt="" />
				</div>
			);
		} else {
			return (
				<div>
					<h1></h1>
				</div>
			);
		}
	}
}
// !App
class App extends Component {
	state = { users: [], usersF: [], filter: "" };

	onInputChange = async (val) => {
		await this.setState({ filter: val });
		console.log(this.state.filter);
	};

	// -----------------------------------

	async componentDidMount() {
		const onFetch = async () => {
			const users = await axios.get(
				"https://randomuser.me/api/?results=10",
				{}
			);
			// console.log(users.data.results);
			this.setState({ users: users.data.results });
			// console.log(this.state);
		};
		await onFetch();
	}
	// ------------------------------------------------

	render() {
		let id = 0;
		return (
			<div style={{ textAlign: "center", alignItems: "center" }}>
				<Input changeVal={(e) => this.onInputChange(e)} />
				<Button />

				{this.state.users.map((user) => {
					id++;
					return <DisplayOneAvatar key={id} user={user} />;
				})}
			</div>
		);
	}
}

export default App;

ReaactDOM.render(<App />, document.querySelector("#root"));
