"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_2 = require("@dikac/t-enum/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_3 = require("../../../../../level/type/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        audit: finite_1.default,
        tipe: (v) => type_2.default(v, type_3.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
