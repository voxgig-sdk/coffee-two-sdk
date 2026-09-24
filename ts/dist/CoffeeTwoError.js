"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeTwoError = void 0;
class CoffeeTwoError extends Error {
    isCoffeeTwoError = true;
    sdk = 'CoffeeTwo';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CoffeeTwoError = CoffeeTwoError;
//# sourceMappingURL=CoffeeTwoError.js.map