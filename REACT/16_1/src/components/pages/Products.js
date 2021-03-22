import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Store from "../../store";

class Products extends Component {
	state = { store: [] };
	async componentDidMount() {
		await this.setState({ store: Store });
	}
	render() {
		return (
			<div>
				<h1>Im Products Page</h1>
				<ul>
					{this.state.store.map((el) => {
						return (
							<li key={el.id}>
								<Link to={`/products/${el.id}`}>{el.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Products;
