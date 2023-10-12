var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function readerBuffer(file) {
    // console.log('🚀 ~ file: helper.ts:2 ~ file:', file);
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const buffer = reader.result;
                console.log('🚀 ~ file: helper.ts:7 ~ buffer:', buffer);
                resolve(buffer);
            }
            catch (err) {
                reject(err);
            }
        });
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsArrayBuffer(file);
    });
}
//# sourceMappingURL=helper.js.map