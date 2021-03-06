import Record from "../../../../../record/record";
import Level from "../../../../level/reads/response/body/body";
import Ruangan from "../../../../ruangan/reads/response/body/body";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Perbaikan from "../../../../../perbaikan/qpass/read/response/body/body";
import Id from "../../../../../id/id";
import Audit from "../../../../../audit/read/response/body/body";
export default interface Body extends Record, Deactivate, Id {
    audit: Omit<Audit, 'unitKerja' | 'anggota' | 'penyetuju' | 'penolakan' | 'suratTugas' | 'perbaikan' | 'jabatan'>;
    level: Omit<Level, 'parent' | 'levelUsaha' | 'ruangan'>;
    ruangan: Omit<Ruangan, 'level'> | null;
    hasil: number;
    catatan: string;
    lampiran: string[];
    sampel: number | null;
    perbaikan: Omit<Perbaikan, 'hasilTemuan'> | null;
}
