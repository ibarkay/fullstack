import React, { Component } from "react";
import { Link } from "react-router-dom";
import Store from "../../store";

class ProductDetail extends Component {
	state = { store: [], product: {} };

	async componentDidMount() {
		await this.setState({ store: Store });
		console.log(this.props.match.params.id);
		let product = await this.state.store.find(
			(el) => el.id == this.props.match.params.id
		);
		console.log(product);
		await this.setState({ product: product });
		console.log(this.state.product);
	}

	render() {
		return (
			<div>
				<div
					style={{
						border: "1px black solid",
						textAlign: "center",
						alignItems: "center",
					}}
				>
					<h1>{this.state.product.title}</h1>
					<img src={this.state.product.imageUrl} alt="" srcset="" />
					<h3>{this.state.product.price}</h3>
					<h4>{this.state.product.size}</h4>
					<Link to="/products/">back ot products</Link>
				</div>
			</div>
		);
	}
}

export default ProductDetail;
