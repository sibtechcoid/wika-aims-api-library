import Route from "./route";
import Path from "../request/path/create";
import CreateRoute from "../../../route/create";
import UpdateCreate from "../../../method/update-create";
import Body from "../request/body/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), Body
    );
}
