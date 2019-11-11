import Path from "../../create/path/path";
import Method from "../method/method";
import Validator from "../../../../../validator/validator";

export default interface Route extends Path, Validator<undefined>, Method {

}