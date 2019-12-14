import TypeInterface from "../object";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/finite";
import TypeName from "../../../../../name/create/boolean/type";
import TypeAbbreviation from "../../../../../abbreviation/create/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeName(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    if(!IsString(value.address)) {

        return false;
    }

    if(!IsString(value.abbreviation)) {

        return false;
    }

    if(!IsNumber(value.business)) {

        return false;
    }

    return true;
}
