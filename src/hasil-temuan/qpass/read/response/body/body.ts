import Record from "../../../../../record/record";
import Level from "../../../../level/reads/response/body/body";

export default interface Body extends Record  {

    level : Omit<Level,'parent'|'levelUsaha'>;
    hasil : number;
    catatan : string;
    lampiran : string[];
}
