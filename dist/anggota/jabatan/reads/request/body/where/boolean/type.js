"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_4 = require("../../../../../group/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let where = {
        deactivate: (v) => undefinable_1.default(v, type_3.default),
        nama: (v) => undefinable_1.default(v, type_2.default),
        singkatan: (v) => undefinable_1.default(v, type_2.default),
        group: (v) => undefinable_1.default(v, type_4.default),
    };
    return structure_1.default(value, where);
}
exports.default = Type;
