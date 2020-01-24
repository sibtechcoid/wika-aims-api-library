"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../../../../../../../deactivate/read/request/body/boolean/type");
const type_3 = require("@dikac/t-string/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (value.singkatan !== undefined) {
        if (!type_3.default(value.singkatan)) {
            return false;
        }
    }
    if (value.nama !== undefined) {
        if (!type_3.default(value.nama)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
