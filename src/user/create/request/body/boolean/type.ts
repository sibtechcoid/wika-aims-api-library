import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";
import Nullable from "@dikac/t-null/boolean/nullable";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        nama : IsString,
        user : IsString,
        singkatan : IsString,
        password : IsString,
        telepon : (v) => Nullable(v, IsString),
        jabatanWika : (v) => Nullable(v, IsString),
        nip : (v) => Nullable(v, IsString),
        email : (v) => Nullable(v, IsString),
        jabatan : (v) => Nullable(v, Positive),

    };

    return Structure(value, sort);

}
