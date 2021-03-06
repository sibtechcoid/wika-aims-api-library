"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.nama !== undefined) {
        if (!type_2.default(value.nama)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
