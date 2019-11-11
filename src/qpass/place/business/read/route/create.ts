import Validator from "../../../../../validator/create";
import Route from "./route";
import Path from "../../create/path/create";
import Read from "../../../../../method/read-create";
import CreateRoute from "../../../../../route/create";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), (value : any) : value is undefined => value === undefined);
}
