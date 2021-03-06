import Request from './request';
import CreatBody from "../../../../body/create";
import Delete from "../../../../method/delete-create";
import Path from "../../create/request/path/create";
import Id from "../../../../id/id";

export default function Create(id : Id) : Request {

    return Object.assign(Delete(), Path(), new CreatBody<Id>(id))
}