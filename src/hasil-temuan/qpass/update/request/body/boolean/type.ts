import Body from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import TypeObject from "@dikac/t-object/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/type";
import TypeString from "@dikac/t-string/boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        id    : Positive,
        lampiran    : (p) => Undefinable<number|null>(p, (p) : p is number|null => ArrayOf<number>(p, (p) : p is number => TypeString(p))),
        level: (v) => Undefinable(v, Positive),
        audit: (v) => Undefinable(v, Positive),
        sampel: (v) => Undefinable(v,(v) : v is null|number => Nullable(v , Positive)),
        ruangan: (v) => Undefinable(v,(v) : v is null|number => Nullable(v , Positive)),
        hasil : (v) => Undefinable(v, TypeNumber),
        catatan : (v) => Undefinable(v, TypeString),

    };

    return Structure(value, sort);
}
