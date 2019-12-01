import Object from "./object";
import Type from "../../../type/create/request/type/type";
export default class Create implements Object {
    name: string;
    abbreviation: string;
    address: string;
    type: Type;
    wikaDesc: string;
    wikaSlug: string;
    wikaAttach: string;
    id: number;
    created: string;
    updated: string;
    deactivate: string | null;
    constructor(name: string, abbreviation: string, address: string, type: Type, wikaDesc: string, wikaSlug: string, wikaAttach: string, id: number, created: string, updated: string, deactivate: string | null);
}