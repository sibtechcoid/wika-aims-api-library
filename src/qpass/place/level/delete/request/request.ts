import Body from "../../../../../body/body";
import Path from "../../create/path/path";
import Create from "../../../../../method/create";
import Id from "../../../../../id/id";
import Delete from "../../../../../method/delete";

export default interface Request extends Body<Id[]>, Path, Delete {

}