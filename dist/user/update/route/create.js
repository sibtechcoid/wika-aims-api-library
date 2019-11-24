"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../create/request/path/create");
const create_2 = require("../../../route/create");
const update_create_1 = require("../../../method/update-create");
const type_1 = require("../../create/request/user/boolean/type");
const type_2 = require("../../../id/boolean/type");
function Create() {
    return create_2.default(update_create_1.default(), create_1.default(), (value) => type_1.default(value) && type_2.default(value));
}
exports.default = Create;
//# sourceMappingURL=create.js.map