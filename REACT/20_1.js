import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://hn.algolia.com/api/v1/search?query={hooks}";

const Toggle = () => {
	const [data, setData] = useState();
	const [isToggle, setIsToggle] = useState(true);
	const [btnName, setBtnName] = useState("hide data");

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();

		const getData = async () => {
			const resp = await axios.get(apiUrl, { cancelToken: source.token }); //{ cancelToken: source.token }

			setData(resp.data.params);
		};
		if (isToggle) {
			setBtnName("hide data");
			getData();
		} else {
			setBtnName("display data");
			setData();
		}
		return () => source.cancel("cancel requerst");
	}, [isToggle]);

	const handleClick = () => {
		setIsToggle(!isToggle);
		console.log(isToggle);
	};

	return (
		<div>
			<button onClick={() => handleClick()}>{btnName}</button>
			<p>{data}</p>
		</div>
	);
};

export default Toggle;
