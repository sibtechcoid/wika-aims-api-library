"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const finite_1 = require("t-number/boolean/finite");
const type_2 = require("t-string/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!finite_1.default(value.code)) {
        return false;
    }
    if (!type_2.default(value.message)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map