"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-number/boolean/type");
const type_3 = require("t-string/boolean/type");
function Typez(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.id)) {
        let id = value.id;
        if (type_3.default(id)) {
            if (id.match(/^[0-9]*$/) === null) {
                return false;
            }
        }
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map