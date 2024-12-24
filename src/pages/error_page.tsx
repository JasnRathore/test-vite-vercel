import { useContext } from "react";
import { ThemeContext } from "../context";

export function ErrorPage() {
	const theme = useContext(ThemeContext); 
	return (
		<div className={`${theme ? "" : "dark"} p-8 font-montserrat w-screen h-screen bg-background text-text`}>
			404 Error
		</div>
	)
}
