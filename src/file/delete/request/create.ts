import Request from './request';
import CreatBody from "../../../body/create";
import Delete from "../../../method/delete-create";
import Path from "../../create/request/path/create";
import Body from "./body/body";


export default function Create(activable : Body) : Request {

    return Object.assign(Delete(), Path(), new CreatBody<Body>(activable))
}