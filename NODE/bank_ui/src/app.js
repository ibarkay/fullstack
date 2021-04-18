import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/header";
import main from "./pages./main";

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Route path="/" component={main} />
					{/* <Route path="/" exact component={Homepage} />
					<Route path="/get/" component={Get} />
					<Route path="/post/" component={Post} />
					<Route path="/cats/:id" component={Edit} /> */}
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
