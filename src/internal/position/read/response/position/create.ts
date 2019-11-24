import Position from "./position";
import PositionUpdate from "../../../../../internal/position/update/request/position/create";
import Access from "../../../../position/create/request/access/access";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Group from "../../../create/request/group/group";

export default class Create extends PositionUpdate implements Position {

    constructor(
        id : number,
        public created : string,
        public updated : string,
        name : string,
        abbreviation : string,
        access : (Access & Id & Record)[],
        group : Group,
    ) {

        super(id, name, abbreviation, access, group);
    }
}