import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../route/create";
import UpdateCreate from "../../../method/update-create";
import TypeType from "../../update/request/body/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), TypeType
    );
}
