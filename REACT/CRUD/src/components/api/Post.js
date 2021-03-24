import React, { Component } from "react";
import axios from "axios";

const apiUrl = "https://605aee8a27f0050017c05976.mockapi.io/cats";

class Post extends Component {
	constructor(props) {
		super(props);
		this.inpName = React.createRef(); //?nice
		this.inpLast = React.createRef();
	}

	handlePost = () => {
		axios
			.post(`${apiUrl}`, {
				name: this.inpName.current.value,
				imgUrl: this.inpLast.current.value,
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};
	render() {
		return (
			<div>
				<input ref={this.inpName} type="text" name="name" placeholder="Name" />
				<input ref={this.inpLast} type="text" name="url" placeholder="Url" />
				<button onClick={() => this.handlePost()} style={{ display: "block" }}>
					Create +
				</button>
			</div>
		);
	}
}

export default Post;
