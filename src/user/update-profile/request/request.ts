import Body from "../../../body/body";
import Path from "./path/path";
import User from "./body/body";
import Method from "./method/method";

export default interface Request extends Body<User>, Path, Method {

}