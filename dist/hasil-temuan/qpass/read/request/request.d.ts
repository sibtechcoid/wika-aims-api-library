import BaseBody from "../../../../body/body";
import Path from "../../update/request/path/path";
import Read from "../../../../method/read";
import Body from "./body/body";
export default interface Request extends BaseBody<Body>, Path, Read {
}
