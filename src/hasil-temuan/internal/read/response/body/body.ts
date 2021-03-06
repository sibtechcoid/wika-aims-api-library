import JadwalRinci from "../../../../../jadwal-rinci/internal/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Fungsi from "../../../../../jadwal-rinci/fungsi/read/response/body/body";
import Prosedur from "../../../../../jadwal-rinci/prosedur/read/response/body/body";
import Klausul from "../../../../../jadwal-rinci/klausul/read/response/body/body";
import Kriteria from "../../../../kriteria/read/response/body/body";
import ProsesBisnis from "../../../../../jadwal-rinci/proses-bisnis/read/response/body/body";
import Status from "../../../status/status";
import Penolakan from "../penolakan/penolakan";
import Tinjauan from "../../../tinjauan/tinjauan";

export default interface Body extends Record, Id  {

    prosesBisnis : Omit<ProsesBisnis,'prosedur'>;
    jadwalRinci : Omit<JadwalRinci, 'audit'|'fungsi'|'prosedur'|'prosesBisnis'|'klausul'|'auditor'|'temuan'>;
    prosedur : Omit<Prosedur,'prosesBisnis'>;
    klausul : Omit<Klausul,'auditProgram'>[];
    fungsi : Fungsi[];
    tinjauan : Tinjauan;
    tinjauanCatatan : string;
    masalah : string[];
    objek : string[]

    kriteria : Kriteria[];

    // lampiran file identifier from lampiran api
    lampiran : string[];
    status : Status;
    penolakan : Penolakan[];



}
