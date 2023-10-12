"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var pdf_js_extract_1 = require("pdf.js-extract");
var transform_1 = require("src/utils/transform");
var pdfExtract = new pdf_js_extract_1.PDFExtract();
var options = {
    normalizeWhitespace: true
};
pdfExtract
    .extract('static/test_landscape_PCMH.pdf', options)
    .then(function (data) {
    // console.log(data.pages);
    (0, fs_1.writeFile)('tmp/test.txt', JSON.stringify(data.pages[0]), function (err) {
        if (err)
            console.log(err);
        console.log('Writen!');
    });
    var contentArray = (0, transform_1.transformDataToArray)(data.pages[0].content);
    console.log('🚀 ~ file: pdfreader.ts:18 ~ contentArray:', contentArray);
})
    .catch(function (err) { return console.log(err); });
