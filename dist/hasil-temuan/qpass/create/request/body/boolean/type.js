"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_1 = require("@dikac/t-object/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("@dikac/t-number/boolean/type");
const type_3 = require("@dikac/t-string/boolean/type");
const nullable_1 = require("@dikac/t-null/boolean/nullable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        level: positive_1.default,
        audit: positive_1.default,
        sampel: (v) => nullable_1.default(v, positive_1.default),
        ruangan: (v) => nullable_1.default(v, positive_1.default),
        hasil: type_2.default,
        catatan: type_3.default,
        lampiran: (v) => array_of_1.default(v, type_3.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
