import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiUrl = "https://605aee8a27f0050017c05976.mockapi.io/";

class Get extends Component {
	state = { data: [] };

	isState = () => {
		if (this.state.data.length) {
			return (
				<div>
					{/* <h2>{this.state.data[0].name}</h2>
					<h2>{this.state.data[0].imgUrl}</h2> */}
					{this.state.data.map((el) => {
						return (
							// !return div of card
							<div key={el.id} style={{ border: "1px solid black" }}>
								<h4>{el.name}</h4>
								<h3>{el.imgUrl}</h3>
								<Link to={`/cats/:${el.id}`}>Edit</Link>
							</div>
						);
					})}
				</div>
			);
		} else {
			return <h2>Loading</h2>;
		}
	};
	componentDidMount() {
		axios.get(`${apiUrl}/cats`).then((res) => {
			const data = res.data;
			this.setState({ data: data });
			console.log(this.state);
		});
	}

	render() {
		return (
			<div>
				<h1>i got data !</h1>
				{this.isState()}
			</div>
		);
	}
}
export default Get;
