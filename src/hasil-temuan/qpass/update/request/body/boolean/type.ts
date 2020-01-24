import Body from "../body";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import TypeId from "../../../../../../id/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeInterface from "../body";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }
    let sort : Validator<Required<TypeInterface>> = {
        id : (v) => Undefinable(v, TypeNumber),
        audit : (v) => Undefinable(v, TypeNumber),
        level : (v) => Undefinable(v, TypeNumber),
        selesai : (v) => Undefinable(v, TypeDateCompatible),
        mulai : (v) => Undefinable(v, TypeDateCompatible),
        fungsi : (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, TypeNumber)),
        auditor :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, TypeNumber)),
    };

    return Structure(value, sort);
}