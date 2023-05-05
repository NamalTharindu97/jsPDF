import React from "react";
import { generatePDF } from "./components/generatePDF";

function App() {
	const dataList = [
		{
			id: 1,
			name: "John Smith",
			age: 32,
			email: "john.smith@example.com",
			phone: "555-1234",
		},
		{
			id: 2,
			name: "Jane Doe",
			age: 25,
			email: "jane.doe@example.com",
			phone: "555-5678",
		},
		{
			id: 3,
			name: "Bob Johnson",
			age: 40,
			email: "bob.johnson@example.com",
			phone: "555-9012",
		},
	];

	const handleGeneratePDF = () => {
		generatePDF({ data: dataList });
	};

	return (
		<div className="App">
			<div>this is app</div>
			<button onClick={handleGeneratePDF}>generate_pdf</button>
		</div>
	);
}

export default App;
