import TypeNama from "../../../../../../nama/update/boolean/type";
import TypeSingkatan from "../../../../../../singkatan/update/boolean/type";
import Body from "../body";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!TypeNama(value)) {

        return false;
    }

    if(!TypeSingkatan(value)) {

        return false;
    }

    return true;
}
