import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
import Type from "../../../../../../qpass/object/type/read/response/type/type";
import Business from "../../../../../../qpass/object/business/read/response/body/body";
export default interface Body extends Deactivate, Record, Id, Name, Abbreviation {
    jenisUsaha: Omit<Business, 'level'>;
    type?: Omit<Type, 'level'>;
}
