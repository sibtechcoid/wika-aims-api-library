import Body from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import BooleanType from "@dikac/t-boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";
import StringType from "@dikac/t-string/boolean/type";
import TypeObject from "@dikac/t-object/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import LevelType from "../../../../type/type";
import Positive from "@dikac/t-number/boolean/positive";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        id    : Positive,
        levelUsaha    : (v) => Undefinable(v, Positive),
        parent    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => Positive(p))),
        judul : (v) => Undefinable(v, BooleanType),
        bobot    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => Positive(p))),
        point    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => Positive(p))),
        ruangan    : (p) => Undefinable<number|null>(p, (p) : p is number|null => ArrayOf<number>(p, (p) : p is number => Positive(p))),
        nama    : (v) => Undefinable(v, StringType),
        tipe    : (v) => Undefinable(v, (v) : v is LevelType =>EnumType(v, LevelType)),
    };

    return Structure(value, sort);
}
