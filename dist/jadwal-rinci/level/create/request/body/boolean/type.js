"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
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
        levelUsaha: positive_1.default,
        nama: type_2.default,
        bobot: (v) => nullable_1.default(v, positive_1.default),
        point: (v) => nullable_1.default(v, positive_1.default),
        parent: (v) => nullable_1.default(v, positive_1.default),
        judul: type_1.default,
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
