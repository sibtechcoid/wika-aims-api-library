import MemberCreate from "../../../create/request/member/member";
import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
import Id from "../../../../../id/id";
import Action from "../../../create/request/action/action";
import Access from "../../../../position/create/request/access/access";
import User from "../../../../../user/read/response/user/user";

// export default interface Member extends MemberCreate, Record, Deactivated, Id  {
//
//
// }


export default interface Member extends Record, Id {

    position : Position;
    action : Action;
    actionDate : string|null;
    access : Access[],
    user : User
}

