var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { extractPDF } from '$lib/pdfreader';
import { createReadStream, readFileSync, writeFile } from 'fs';
import { json } from '@sveltejs/kit';
export const POST = ({ request }) => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    try {
        const formData = yield request.formData();
        const pdfFile = formData.get('pdfFile');
        const pdfBuffer = yield pdfFile.arrayBuffer();
        // writeFile('E:/auto-tkb/static/test/test.pdf', Buffer.from(pdfBuffer), () => {
        // 	console.log('Created temp pdf file!');
        // 	console.log('🚀 ~ file: +server.ts:14 ~ filePath:', filePath);
        // });
        extractPDF(Buffer.from(pdfBuffer));
        response = { status: 200, data: { hi: 'mom' } };
    }
    catch (err) {
        console.log('ERROR: ' + err);
        response = err.response;
    }
    return json(response);
});
//# sourceMappingURL=+server.js.map