import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import TypeName from "../../../../../name/update/boolean/type";
import TypeAbbreviation from "../../../../../abbreviation/update/boolean/type";
import TypeId from "../../../../../id/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeId(value)) {

        return false;
    }

    if(!TypeName(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    if(value.address !== undefined) {

        if(!IsString(value.address)) {

            return false;
        }
    }

    if(value.abbreviation !== undefined) {

        if(!IsString(value.abbreviation)) {

            return false;
        }
    }

    if(value.levelUsaha !== undefined) {

        if(!IsNumber(value.levelUsaha)) {

            return false;
        }
    }

    if(value.jenisUnit !== undefined) {

        if(!IsNumber(value.jenisUnit)) {

            return false;
        }
    }

    if(value.jenisUsaha !== undefined) {

        if(!IsNumber(value.jenisUsaha)) {

            return false;
        }
    }

    return true;
}