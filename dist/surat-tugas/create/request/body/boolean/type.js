"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.nomer)) {
        return false;
    }
    if (!array_of_1.default(value.project, finite_1.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map