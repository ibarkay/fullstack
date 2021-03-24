import React, { Component } from "react";
import axios from "axios";

const apiUrl = "https://605aee8a27f0050017c05976.mockapi.io/cats/";

export default class Edit extends Component {
	state = {};
	constructor(props) {
		super(props);

		this.inpName = React.createRef();
		this.inpUrl = React.createRef();
	}
	onGet = async () => {
		const idz = this.props.match.params.id.replace(":", "");
		await axios.get(`${apiUrl}${idz}`).then((res) => {
			this.setState({ data: res.data });
			console.log(this.state.data.name);
		});
	};
	onEdit = async () => {
		const idz = this.props.match.params.id.replace(":", "");
		await axios
			.put(`${apiUrl}${idz}`, {
				name: this.inpName.current.value,
				imgUrl: this.inpUrl.current.value,
			})
			.then((res) => {
				console.log(res);
			});
	};
	onDelete = () => {
		const idz = this.props.match.params.id.replace(":", "");
		axios.delete(`${apiUrl}${idz}`, {});
	};
	componentDidMount() {
		this.onGet();
	}

	render() {
		if (this.state.data) {
			return (
				<div>
					<h3>Now Editing {this.props.match.params.id}</h3>
					<h4>
						name : {this.state.data.name} url : {this.state.data.imgUrl}
					</h4>
					<input
						type="text"
						ref={this.inpName}
						name="name"
						placeholder="change name"
					/>
					<input
						type="text"
						ref={this.inpUrl}
						name="url"
						placeholder="change imgUrl"
					/>
					<button onClick={() => this.onEdit()} style={{ display: "block" }}>
						Edit
					</button>
					<button onClick={() => this.onDelete()} style={{ display: "block" }}>
						Delete
					</button>
				</div>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}
