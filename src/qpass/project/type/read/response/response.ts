import Type from "../../create/request/body/body";
import Success from "../../../../../response/success";
import Id from "../../../../../id/id";

type Response = Success<(Type & Id)[]>;
export default Response;