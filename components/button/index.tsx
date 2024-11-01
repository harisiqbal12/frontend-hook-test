"use client";

import { useEffect } from "react";

const Button = () => {
	useEffect(() => {
		window.addEventListener("click", () => {
			console.log("event listener");
		});
	}, [window]);

	return <button>Click me</button>;
};

export default Button;
