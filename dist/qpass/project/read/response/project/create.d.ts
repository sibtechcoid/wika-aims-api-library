import Project from "./project";
import Object from "../../../../object/read/response/object/object";
import Status from "../status/status";
import Member from "../../../../member/read/response/member/member";
export default class Create implements Project {
    id: number;
    created: string;
    updated: string;
    deactivate: string | null;
    plan: [string, string];
    realize: [string, string];
    status: Status;
    object: Omit<Object, "type">;
    members: Member[];
    constructor(id: number, created: string, updated: string, deactivate: string | null, plan: [string, string], realize: [string, string], status: Status, object: Omit<Object, "type">, members: Member[]);
}