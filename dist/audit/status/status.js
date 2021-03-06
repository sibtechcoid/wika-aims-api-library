"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    /**
     * draft perencanaan
     */
    Status["DRAFT"] = "DRAFT";
    /**
     * perencanaan di submit
     */
    Status["SUBMIT"] = "SUBMIT";
    /**
     * perencanaan di publish menjadi proyek
     */
    Status["PUBLISH"] = "PUBLISH";
    Status["PROJECT_REJECT"] = "PROJECT_REJECT";
    Status["MEMBER_REJECT"] = "MEMBER_REJECT";
    Status["PROJECT_WAITING"] = "PROJECT_WAITING";
    Status["MEMBER_WAITING"] = "MEMBER_WAITING";
    Status["FINISH"] = "FINISH";
})(Status || (Status = {}));
exports.default = Status;
