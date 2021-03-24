import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			<Link to="/">C4t5</Link>
			<Link to="/get/">Get</Link>
			<Link to="/post/">Post</Link>
		</div>
	);
};

export default Header;
