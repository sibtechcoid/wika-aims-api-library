import Record from "../../../../record/record";
import Id from "../../../../id/id";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Name from "../../../../name/create/name";
import Abbreviation from "../../../../abbreviation/create/abbreviation";
export default interface Object<Business extends Name & Abbreviation = Name & Abbreviation> extends Record, Deactivate, Id, Name, Abbreviation {
    address: string;
    business: null | Business;
}
