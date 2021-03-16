import React from "react";
import Spinner from "./Spinner";

class App extends React.Component {
	state = { timeOver: false };

	componentDidMount() {
		setTimeout(() => {
			this.setState({ timeOver: true });
		}, 3000);
	}
	render() {
		if (!this.state.timeOver) {
			return <Spinner />;
		} else {
			return <div>mmmm</div>;
		}
	}
}

export default App;
