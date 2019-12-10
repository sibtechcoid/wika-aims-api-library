"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
const type_2 = require("t-number/boolean/type");
const compatible_1 = require("t-date/boolean/compatible");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.fungsi !== undefined) {
        if (!array_of_1.default(value.fungsi, type_2.default)) {
            return false;
        }
    }
    if (value.prosedur !== undefined) {
        if (!array_of_1.default(value.prosedur, type_2.default)) {
            return false;
        }
    }
    if (value.project !== undefined) {
        if (!type_2.default(value.project)) {
            return false;
        }
    }
    if (value.selesai !== undefined) {
        if (!compatible_1.default(value.selesai)) {
            return false;
        }
    }
    if (value.mulai !== undefined) {
        if (!compatible_1.default(value.mulai)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map