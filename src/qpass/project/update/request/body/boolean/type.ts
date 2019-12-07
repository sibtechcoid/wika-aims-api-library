import TypeInterface from "../body";
import NotNull from "t-object/boolean/type";
import IsNumber from "t-number/boolean/finite";
import TypeMember from "../../../../../../member/create/request/body/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import ScheduleType from "../../../../../../schedule/update/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }
    if(!ScheduleType(value)) {

        return false;
    }

    if(value.object !== undefined){

        if(!IsNumber(value.object)) {

            return false;
        }
    }

    if(value.object !== undefined){

        if(!ArrayOf(value.members, TypeMember)) {

            return false;
        }
    }

    return true;
}
