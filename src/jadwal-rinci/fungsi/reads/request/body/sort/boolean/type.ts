import Sort from "../sort";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import ModeType from "../../../../../../../sort/mode/boolean/type";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import NotNull from "@dikac/t-object/boolean/type";

export default function Type<
    Extended extends Sort = Sort
> (
    value : any
) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Sort>> = {
        created    : (v) => Undefinable(v, ModeType),
        deactivate : (v) => Undefinable(v, ModeType),
        id         : (v) => Undefinable(v, ModeType),
        updated    : (v) => Undefinable(v, ModeType),
        nama       : (v) => Undefinable(v, ModeType),
    };

    return Structure(value, sort);
}
