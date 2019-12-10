import NotNull from "t-object/boolean/type";
import TypeName from "../../../../../../../name/update/boolean/type";
import Body from "../body";
import TypeNumber from "t-number/boolean/type";
import TypeEnum from "t-enum/boolean/type";
import ContentType from "../../../../type/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeName<Extended>(value)) {

        return false;
    }

    if(value.bobot !== undefined) {

        if(!TypeNumber(value.bobot)) {

            return false;
        }
    }

    if(value.point !== undefined) {

        if(!TypeNumber(value.point)) {

            return false;
        }
    }


    if(value.tipe !== undefined) {

        if(!TypeEnum(value.tipe, ContentType)) {

            return false;
        }
    }


    if(value.auditProgram !== undefined) {

        if(!TypeNumber(value.auditProgram)) {

            return false;
        }
    }

    return true;
}
