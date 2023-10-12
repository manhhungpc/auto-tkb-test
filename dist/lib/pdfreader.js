import pdf from 'pdf-extraction';
function render_page(pageData) {
    //check documents https://mozilla.github.io/pdf.js/
    let render_options = {
        //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
        normalizeWhitespace: false,
        //do not attempt to combine same line TextItem's. The default value is `false`.
        disableCombineTextItems: false
    };
    return pageData.getTextContent(render_options).then(function (textContent) {
        let lastY, text = '';
        for (let item of textContent.items) {
            if (lastY == item.transform[5] || !lastY) {
                text += item.str + ' | ';
            }
            else {
                text += '\n' + item.str;
            }
            lastY = item.transform[5];
        }
        return text;
    });
}
// let dataBuffer = readFileSync('static/test_landscape.pdf');
export function extractPDF(buffer) {
    // console.log('🚀 ~ file: pdfreader_test.ts:48 ~ dataBuffer:', buffer);
    pdf(buffer, { pagerender: render_page }).then(function (data) {
        console.log(data.text);
    });
}
//# sourceMappingURL=pdfreader.js.map