import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/request/path/create";
import Object from "../request/body/body";
import Id from "../../../../../id/id";
import Update from "../../../../../method/update-create";

export default function Create(types : Object) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Object>(types))
}