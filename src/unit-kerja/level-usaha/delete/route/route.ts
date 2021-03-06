import Path from "../../create/request/path/path";
import Validator from "../../../../validator/validator";
import Method from "../request/method/method";
import Id from "../../../../id/id";

export default interface Route extends Path, Validator<Id>, Method {

}