import Record from "../../../../record/record";
import BaseBody from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Object from "../../../../object/read/response/object/object";
import Member from "../../../../member/read/response/body/body";
import Schedule from "../../../../schedule/create/request/body/body";
import Name from "../../../../name/create/name";
import Abbreviation from "../../../../abbreviation/create/abbreviation";
import Position from "../../../../position/read/response/body/body";

export default interface Body<
    Action,
    Status,
    Group,
    P extends Omit<Position<any, Group>, 'access'>,
    M extends Omit<Member<Action, any, Group, P>, 'access'>,
    O extends Object<Name & Abbreviation> = Object<Name & Abbreviation>,
    > extends Record, BaseBody, Id, Schedule {
    status : Status;
    object : O;
    members : M[]
}