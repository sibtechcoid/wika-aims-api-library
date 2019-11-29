import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Object from "../../create/request/object/object";
import Validator from "../../../../validator/validator";
import Id from "../../../../id/id";
export default interface Route extends Path, Validator<Object & Id>, Method {
}
