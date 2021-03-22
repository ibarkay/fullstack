import React from "react";
import { BrowserRouter, Route, Link, Header } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Header2 from "./pages/Header";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header2 />
				<Route path="/" exact component={HomePage} />
				<Route path="/products/:id" exact component={ProductDetail} />
				<Route path="/products/" exact component={Products} />
				<Route path="/homePage" exact component={HomePage} />
			</BrowserRouter>
		</div>
	);
};

export default App;
