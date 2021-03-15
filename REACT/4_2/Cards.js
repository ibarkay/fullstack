import React from "react";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.imgS} alt="pic" />
			<h4>{props.head}</h4>
			<p>{props.text}</p>
			<a href="/">{props.link1}</a>
      <span> </span>
			<a href="/">{props.link2}</a>
		</div>
	);
};

export default Card;
