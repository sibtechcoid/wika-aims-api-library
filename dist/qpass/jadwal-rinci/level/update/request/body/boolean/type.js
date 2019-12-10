"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("../../../../../../../name/update/boolean/type");
const type_3 = require("t-number/boolean/type");
const type_4 = require("t-enum/boolean/type");
const type_5 = require("../../../../type/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (value.bobot !== undefined) {
        if (!type_3.default(value.bobot)) {
            return false;
        }
    }
    if (value.point !== undefined) {
        if (!type_3.default(value.point)) {
            return false;
        }
    }
    if (value.tipe !== undefined) {
        if (!type_4.default(value.tipe, type_5.default)) {
            return false;
        }
    }
    if (value.auditProgram !== undefined) {
        if (!type_3.default(value.auditProgram)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map