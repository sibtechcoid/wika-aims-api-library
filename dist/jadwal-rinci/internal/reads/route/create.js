"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../path/create");
const read_create_1 = require("../../../../method/read-create");
const create_2 = require("../../../../route/create");
const type_1 = require("../request/body/boolean/type");
function Create() {
    return create_2.default(read_create_1.default(), create_1.default(), type_1.default);
}
exports.default = Create;
