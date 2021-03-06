"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_1 = require("@dikac/t-boolean/type");
const nullable_1 = require("@dikac/t-null/boolean/nullable");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-object/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    let sort = {
        id: positive_1.default,
        levelUsaha: (v) => undefinable_1.default(v, positive_1.default),
        parent: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => positive_1.default(p))),
        judul: (v) => undefinable_1.default(v, type_1.default),
        bobot: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => positive_1.default(p))),
        point: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => positive_1.default(p))),
        nama: (v) => undefinable_1.default(v, type_2.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
