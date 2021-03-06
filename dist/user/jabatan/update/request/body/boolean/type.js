"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../akses/create/request/body/boolean/type");
const type_2 = require("../../../../../../id/boolean/type");
const type_3 = require("../../../../../../nama/update/boolean/type");
const type_4 = require("../../../../../../singkatan/update/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    if (value.akses !== undefined) {
        if (!type_1.default(value.akses)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
