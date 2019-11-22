"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../update/request/path/create");
const update_create_1 = require("../../../../method/update-create");
const create_2 = require("../../../../route/create");
const type_1 = require("../request/access/boolean/type");
const type_2 = require("../../../../id/boolean/type");
function Create() {
    return create_2.default(update_create_1.default(), create_1.default(), (access) => type_1.default(access) && type_2.default(access));
}
exports.default = Create;
//# sourceMappingURL=create.js.map