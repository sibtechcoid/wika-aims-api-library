import BaseBody from "../../../../../body/body";
import Body from "./body/body";
import Path from "../../create/request/path/path";
import Method from "./method/method";

export default interface Request extends BaseBody<Body>, Path, Method {

}