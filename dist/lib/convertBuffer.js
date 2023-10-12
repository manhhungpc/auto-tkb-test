var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function convertBuffer(rs) {
    return __awaiter(this, void 0, void 0, function* () {
        // Accumulate the chunks into a Buffer
        const chunks = [];
        rs.on('data', (chunk) => {
            chunks.push(chunk);
        });
        return new Promise((resolve) => {
            rs.on('end', () => {
                const buffer = Buffer.concat(chunks);
                // console.log(buffer.toString('utf-8')); // Convert the Buffer to a string
                resolve(buffer);
            });
        });
    });
}
//# sourceMappingURL=convertBuffer.js.map