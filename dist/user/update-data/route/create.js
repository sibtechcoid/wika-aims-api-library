"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const update_create_1 = require("../../../method/update-create");
const type_1 = require("../request/body/boolean/type");
const create_1 = require("../../../route/create");
const create_2 = require("../request/path/create");
function Create() {
    return create_1.default(update_create_1.default(), create_2.default(), type_1.default);
}
exports.default = Create;
