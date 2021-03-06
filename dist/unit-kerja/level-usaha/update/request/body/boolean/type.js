"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../jenis-unit/update/request/body/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.jenisUnit !== undefined) {
        if (!positive_1.default(value.jenisUnit)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
