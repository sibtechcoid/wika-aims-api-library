"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_3 = require("../../../../../../deactivate/read/request/body/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (value.jabatan !== undefined) {
        if (!finite_1.default(value.jabatan) && value.jabatan !== null) {
            return false;
        }
    }
    if (value.nama !== undefined) {
        if (!type_2.default(value.nama)) {
            return false;
        }
    }
    if (value.singkatan !== undefined) {
        if (!type_2.default(value.singkatan)) {
            return false;
        }
    }
    if (value.telepon !== undefined) {
        if (!type_2.default(value.telepon) && value.telepon !== null) {
            return false;
        }
    }
    if (value.email !== undefined) {
        if (!type_2.default(value.email) && value.email !== null) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
