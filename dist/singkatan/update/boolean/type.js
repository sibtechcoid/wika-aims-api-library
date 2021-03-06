"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-null/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.singkatan !== undefined) {
        if (!(type_2.default(value.singkatan) || type_3.default(value.singkatan))) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
