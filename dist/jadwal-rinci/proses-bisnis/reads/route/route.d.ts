import Path from "../request/path/path";
import Method from "../method/method";
import Validator from "../../../../validator/validator";
import Body from "../request/body/body";
export default interface Route extends Path, Validator<Body>, Method {
}
