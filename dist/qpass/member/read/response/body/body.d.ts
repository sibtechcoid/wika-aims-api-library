import Status from "../../../status/status";
import Position from "../../../../position/read/response/body/body";
import User from "../../../../../user/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
export default interface Body extends /*BaseMember<Status, Access, Group, Position>, */ Record, Id {
    status: Status;
    position: Omit<Position, 'access'>;
    user: Omit<User, 'extraAccess' | 'position' | 'access'>;
}
