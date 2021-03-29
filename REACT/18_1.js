import React, { useState } from "react";

const Text = (props) => {
	const [isReadMore, setIsReadMore] = useState(false);

	if (!isReadMore) {
		return (
			<div>
				<h1>{props.t.slice(0, props.maxChar)}</h1>
				<a onClick={() => setIsReadMore(true)}>...read more</a>
			</div>
		);
	} else {
		return (
			<div>
				<h1>{props.t}</h1>
				<a onClick={() => setIsReadMore(false)}>...read less</a>
			</div>
		);
	}
};

export default Text;
