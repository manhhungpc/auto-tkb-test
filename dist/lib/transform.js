export function transformDataToArray(contentJson) {
    let currentY = contentJson[0].y;
    const contentArray = [];
    let row = [];
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
//# sourceMappingURL=transform.js.map