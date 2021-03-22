import React from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
	return (
		<div>
			<Link to="/">Store</Link>
			<Link to="/products/">products</Link>
		</div>
	);
};

export default Header2;
