import Level from "../../create/request/data/level";
import Success from "../../../../../response/success";
import NotFound from "../../../../../response/not-found";
import Id from "../../../../../id/id";

type Response = Success<(Level & Id)[]>;
export default Response;