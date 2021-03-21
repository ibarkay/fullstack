import React, { Component } from "react";
import ReactDOM from "react-dom";
import { data } from "./data";

// 1.Export the data array to the relevant component.
// 2. Create utility functions that will massage the data.
// - Create a function that returns an array of all the names
// from the object.
// - Create a function that returns all the objects that are born
// before 1990
// 3.Save the modified data to state.
// 4. Create a Name component that you will pass via props
// the names and print them on the screen.
// 5. Create a Card component that you will pass via props the
// objects before 1990 and print them on the screen.
// - which includes their name, birthday, favorite meats and
// favorite fish foods.
class Name extends Component {
	render() {
		const namesToScreen = this.props.names.map((name) => {
			return <h3>{name}</h3>;
		});
		return <div>{namesToScreen}</div>;
	}
}

class Card extends Component {
	render() {
		const obysToScreen = this.props.obys.map(
			({ name, birthday, favoriteFoods }) => {
				return (
					<h3>
						{name} {birthday} {favoriteFoods.meats} {favoriteFoods.fish}
					</h3>
				);
			}
		);
		return obysToScreen;
	}
}

class App extends Component {
	getNames = () => {
		const names = data.map(({ name }) => {
			return name;
		});
		return names;
	};

	getBeforeYear = () => {
		const filtters = data.filter((x) => {
			return new Date(x.birthday).getFullYear() < 1990;
		});
		return filtters;
	};

	state = { names: this.getNames(), before1990: this.getBeforeYear() };

	render() {
		console.log(this.state);
		return (
			<div>
				{/* <Data /> */}
				<h1>test</h1>
				<button>names</button>
				<Name names={this.state.names} />
				<Card obys={this.state.before1990} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
