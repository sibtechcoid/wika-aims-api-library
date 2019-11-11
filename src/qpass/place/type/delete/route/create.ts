import DeleteCreate from "../../../../../method/delete-create";
import Route from "./route";
import CreateRoute from "../../../../../route/create";
import Path from "../../create/path/create";
import ArrayOf from "t-array/boolean/array-of";
import TypeId from "../../../../../id/boolean/type";
import Id from "../../../../../id/id";

export default function Create() : Route {

    return CreateRoute(DeleteCreate(), Path(), (value:any) : value is Id[] => ArrayOf(value, TypeId));
}
