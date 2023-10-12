export function readerBuffer(file: any) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = async () => {
			try {
				const buffer = reader.result;
				resolve(buffer);
			} catch (err) {
				reject(err);
			}
		};
		reader.onerror = (error) => {
			reject(error);
		};
		reader.readAsArrayBuffer(file);
	});
}

export function rawDataToArray(contentJson: PDFText[]) {
	let currentY = contentJson[0].y;
	const contentArray = [];
	let row: string[] = [];
	row.push(contentJson[0].str);
	for (let i = 1; i < contentJson.length; i++) {
		const textInfo = contentJson[i];
		if (textInfo.y !== currentY) {
			contentArray.push(row);
			row = [];
			currentY = textInfo.y;
		}

		if (textInfo.str == '' || textInfo.str == ' ') {
			continue;
		}
		row.push(textInfo.str);
	}
	return contentArray;
}
