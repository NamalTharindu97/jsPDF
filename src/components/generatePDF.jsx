import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import logo from "./logo.png";

export const generatePDF = ({ data }) => {
	const doc = new jsPDF();

	// Add logo image to the document
	doc.addImage(
		logo, // image source
		"PNG", // image type
		doc.internal.pageSize.getWidth() / 2 - 50, // x position of the image
		10, // y position of the image
		100, // image width
		50 // image height
	);

	// Add title below the logo
	doc.setFontSize(18);
	doc.text(
		"Report Title",
		doc.internal.pageSize.getWidth() / 2,
		60,
		null,
		null,
		"center"
	);

	// Add table below the title
	autoTable(doc, {
		head: [["ID", "Name", "Age", "Email", "Phone"]],
		body: data.map(({ id, name, age, email, phone }) => [
			id,
			name,
			age,
			email,
			phone,
		]),
		startY: 90,
	});

	doc.save("report.pdf");

	return <div>generatePDF</div>;
};
