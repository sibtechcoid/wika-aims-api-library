import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Level from "../../../../../hasil-temuan/level/read/response/body/body";
import Fungsi from "../../../../fungsi/read/response/body/body";
import Audit from "../../../../../audit/read/response/body/body";
import User from "../../../../../user/read/response/body/body";
import Deactivate from "../../../../../deactivate/read/response/body/body";
export default interface Body extends Deactivate, Record, Id {
    auditor: Omit<User, 'akses' | 'jabatan'>[];
    audit: Omit<Audit, 'unitKerja' | 'penyetuju' | 'penolakan' | 'anggota' | 'suratTugas' | 'jabatan'>;
    selesai: Date | string;
    mulai: Date | string;
    fungsi: Fungsi[];
    level: Omit<Level, 'levelUsaha' | 'ruangan'>;
}
