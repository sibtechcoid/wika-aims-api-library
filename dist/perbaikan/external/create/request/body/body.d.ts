import Tinjauan from "../../../tinjauan/tinjauan";
import Status from "../../../status/status";
export default interface Body {
    audit: number;
    /**
     * perintah
     */
    kategori: Tinjauan;
    klausul: string;
    auditor: string;
    deskripsi: string;
    deadline: string;
    penyebab: string;
    koreksi: string;
    bukti: string[];
    unitKerja: string;
    /**
     * ALOAS FOR STADNARD
     */
    fungsi: string;
    /**
     * PTKA
     */
    kontak: string;
    ptka: string;
    fungsiBagian: string;
    dibuat: string | Date;
    penemu: string;
    biro: string;
    konsekuensi: string;
    tanggal: string | Date;
    /**
     * remark
     */
    status: Status;
    catatan: string;
}
