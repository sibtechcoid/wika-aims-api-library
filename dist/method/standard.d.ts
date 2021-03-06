import Method from "./method";
import Type from "./type/type";
export default class Standard<T extends Type> implements Method<T> {
    method: T;
    constructor(method: T);
}
