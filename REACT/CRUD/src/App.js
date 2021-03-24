import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// ------------
import Header from "./components/Header";
import Get from "./components/api/Get";
import Post from "./components/api/Post";
import Homepage from "./components/Homepage";
import Edit from "./components/api/Edit";

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Route path="/" exact component={Homepage} />
					<Route path="/get/" component={Get} />
					<Route path="/post/" component={Post} />
					<Route path="/cats/:id" component={Edit} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
