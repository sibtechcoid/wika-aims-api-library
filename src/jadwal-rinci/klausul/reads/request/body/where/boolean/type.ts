import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        deactivate : (v) => Undefinable(v, BooleanType),
        auditProgram    : (v) => Undefinable(v, Positive),
        nama    : (v) => Undefinable(v, StringType),
    };

    return Structure(value, sort);
}
