"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!positive_1.default(value.user)) {
        return false;
    }
    if (!positive_1.default(value.jabatan)) {
        return false;
    }
    return true;
}
exports.default = Type;
