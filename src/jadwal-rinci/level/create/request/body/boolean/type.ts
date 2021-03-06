import TypeInterface from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import BooleanType from "@dikac/t-boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";
import StringType from "@dikac/t-string/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import Body from "../body";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        levelUsaha    : Positive,
        nama : StringType,
        bobot : (v) => Nullable(v, Positive),
        point : (v) => Nullable(v, Positive),
        parent : (v) => Nullable(v, Positive),
        judul : BooleanType,
    };

    return Structure(value, sort);
}
