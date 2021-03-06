import Route from "./route";
import Path from "../request/path/create";
import CreateRoute from "../../../route/create";
import Standard from "../../../method/standard";
import MethodType from "../../../method/type/type";

export default function Create () : Route {

    return CreateRoute(new Standard(MethodType.GET), Path(''), (v) : v is undefined => true);
}
