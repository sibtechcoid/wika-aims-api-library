import Sort from "../sort";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import ModeType from "../../../../../../sort/mode/boolean/type";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Mode from "../../../../../../sort/mode/mode";

export default function Type<
    Extended extends Sort = Sort
> (
    value : any
) : value is Extended {

    let sort : Validator<Required<Sort>> = {
        reminder    : (v) => Undefinable(v, ModeType),
        reminded    : (v) => Undefinable(v, ModeType),
        created    : (v) => Undefinable(v, ModeType),
        fase        : (v) => Undefinable(v, ModeType),
        deactivate : (v) => Undefinable(v, ModeType),
        id         : (v) => Undefinable(v, ModeType),
        rencana       : (v) => Undefinable(v, (v) : v is Mode =>ArrayOf(v, ModeType)),
        realisasi    : (v) => Undefinable(v, (v) : v is Mode =>ArrayOf(v, ModeType)),
        updated    : (v) => Undefinable(v, ModeType),
        suratTugas    : (v) => Undefinable(v, ModeType),
        tipe    : (v) => Undefinable(v, ModeType),
        perbaikan    : (v) => Undefinable(v, ModeType),
    };

    return Structure(value, sort);
}
