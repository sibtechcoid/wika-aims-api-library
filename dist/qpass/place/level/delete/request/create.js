"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../../../body/create");
const delete_create_1 = require("../../../../../method/delete-create");
const create_2 = require("../../create/request/path/create");
function Create(place) {
    return Object.assign(delete_create_1.default(), create_2.default(), new create_1.default(place));
}
exports.default = Create;
//# sourceMappingURL=create.js.map