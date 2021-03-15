import React from "react";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img src={this.props.imgS} alt="pic" />
				<h4>{this.props.head}</h4>
				<p>{this.props.text}</p>
				<a href="/">{this.props.link1}</a>
				<span> </span>
				<a href="/">{this.props.link2}</a>
			</div>
		);
	}
}

export default Card;
