import Member from "../../../../anggota/read/response/body/body";
import Type from "../../../type/type";
import Read from "../../../read/response/body/body";
export default interface Body extends Omit<Read, 'anggota' | 'penyetuju' | 'penolakan'> {
    anggota: Omit<Member, 'akses' | 'created' | 'updated' | 'id'>[];
    tipe: Type;
}
