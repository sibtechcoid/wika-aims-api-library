"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-enum/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_3 = require("../../../../../level/type/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_4 = require("@dikac/t-string/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        audit: positive_1.default,
        saran: (v) => undefinable_1.default(v, type_4.default),
        tipe: (v) => type_2.default(v, type_3.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
