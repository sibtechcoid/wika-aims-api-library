import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Level from "../../../../level/read/response/body/body";
import Fungsi from "../../../../fungsi/read/response/body/body";
import Project from "../../../../../audit/read/response/body/body";

export default interface Body extends Record, Id  {

    audit : Project;
    selesai  : Date|string;
    mulai  : Date|string;
    fungsi : Fungsi[];
    level : Omit<Level,'levelUsaha'>;

}