import Record from "../../../../record/record";
import Id from "../../../../id/id";
import User from "../../../../user/read/response/user/user";
import Position from "../../../../position/read/response/body/body";
export default interface Body<Status, Access, Group, P extends Position<any, Group>> extends Record, Id {
    status: Status;
    position: Omit<P, 'access'>;
    statusDate: string | null;
    user: Omit<User, 'extraAccess' | 'position' | 'access'>;
}
