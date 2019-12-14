"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../../name/update/boolean/type");
const finite_1 = require("t-number/boolean/finite");
const type_2 = require("../../../../../../../id/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_1.default(value)) {
        return false;
    }
    if (value.auditProgram !== undefined) {
        if (!finite_1.default(value.auditProgram)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map