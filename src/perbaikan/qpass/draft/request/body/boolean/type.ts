import Body from "../body";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeInterface from "../body";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";
import StringType from "@dikac/t-string/boolean/type";
import TypeEnum from "@dikac/t-enum/boolean/type";
import Keputusan from "../../../../../keputusan/keputusan";
import TypeObject from "@dikac/t-object/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let update : Validator<Required<TypeInterface>> = {

        id: (v) => Undefinable(v, Positive),

        hasilTemuan: (v) => Undefinable(v, Positive),

        /**
         * perintah
         */
        prosesBisnis : (v) => Undefinable(v, Positive),
        tindakan : (v) => Undefinable(v, StringType),
        faktor : (v) => Undefinable(v, StringType),
        analisis : (v) => Undefinable(v, StringType),
        perbaikan : (v) => Undefinable(v, TypeDateCompatible),
        closing :  (v) => Undefinable(v,(v) : v is  string[] => ArrayOf(v, StringType)),
        pic : (v) => Undefinable(v, Positive),

        /**
         * PTKA
         */
        catatan : (v) => Undefinable(v, StringType),
        ptka : (v) => Undefinable(v, StringType),
        referensi : (v) => Undefinable(v, StringType),
        konsekuensi : (v) => Undefinable(v, StringType),
        prosedur : (v) => Undefinable(v, Positive),
        keputusan : (v) => Undefinable(v, (v) : v is Keputusan =>TypeEnum(v, Keputusan)),
        selesai : (v) => Undefinable(v, TypeDateCompatible),

    };

    return Structure(value, update);
}
