import Body from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Type from "../../create/request/data/type";
import Id from "../../../../../id/id";
import Method from "../method/method";

export default interface Request extends Body<Type & Id>, Path, Method {

}