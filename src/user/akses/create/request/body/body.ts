import ProjectInternal from "../../../proyek-internal/akses";
import ProjectSmk3l from "../../../proyek-smk3l/akses";
import ProjectQpass from "../../../proyek-qpass/akses";
import ProjectExternal from "../../../proyek-external/akses";
import ProjectSpi from "../../../proyek-spi/akses";
import RencanaInternal from "../../../rencana-internal/akses";
import RencanaSmk3l from "../../../rencana-smk3l/akses";
import RencanaQpass from "../../../rencana-qpass/akses";
import RencanaExternal from "../../../rencana-external/akses";
import RencanaSpi from "../../../rencana-spi/akses";
import UnitKerja from "../../../unit-kerja/akses";
import JenisUnit from "../../../jenis-unit/akses";
import JenisUsaha from "../../../jenis-usaha/akses";
import LevelUsaha from "../../../level-usaha/akses";
import UserAkses from "../../../user/akses";
import JabatanAkses from "../../../jabatan/akses";
import Fungsi from "../../../fungsi/akses";
import Klausul from "../../../klausul/akses";
import Prosedur from "../../../prosedur/akses";
import JabatanAnggotaAkses from "../../../jabatan-anggota/akses";
import Level from "../../../level/akses";
import SuratTugas from "../../../surat-tugas/akses";
import JadwalRinciInternal from "../../../jadwal-rinci-internal/akses";
import JadwalRinciSmk3l from "../../../jadwal-rinci-smk3l/akses";
import JadwalRinciQpass from "../../../jadwal-rinci-qpass/akses";
import HasilTemuanInternal from "../../../hasil-temuan-internal/akses";
import HasilTemuanSmk3l from "../../../hasil-temuan-smk3l/akses";
import HasilTemuanQpass from "../../../hasil-temuan-qpass/akses";
import HasilTemuanKriteria from "../../../hasil-temuan-kriteria/akses";
import HasilTemuanLevel from "../../../hasil-temuan-level/akses";
import ProsesBisnis from "../../../proses-bisnis/akses";
import AuditProgram from "../../../audit-program/akses";
import PerbaikanExternal from "../../../perbaikan-external/akses";
import PerbaikanSpi from "../../../perbaikan-spi/akses";
import PerbaikanSmk3l from "../../../perbaikan-smk3l/akses";
import PerbaikanInternal from "../../../perbaikan-internal/akses";
import PerbaikanQpass from "../../../perbaikan-qpass/akses";
import Evaluasi from "../../../evaluasi/akses";
import Kuisioner from "../../../kuisioner/akses";
import Ruangan from "../../../ruangan/akses";

export default interface Body {

    ruangan : Ruangan[];
    evaluasi : Evaluasi[];
    kuisioner : Kuisioner[];

    perbaikanInternal : PerbaikanInternal[];
    perbaikanSmk3l : PerbaikanSmk3l [];
    perbaikanExternal : PerbaikanExternal [];
    perbaikanSpi : PerbaikanSpi [];
    perbaikanQpass : PerbaikanQpass[];

    suratTugas : SuratTugas[];

    proyekSmk3l : ProjectInternal[];
    proyekQpass : ProjectSmk3l[];
    proyekExternal : ProjectQpass[];
    proyekSpi : ProjectExternal[];
    proyekInternal : ProjectSpi[];

    rencanaSmk3l: RencanaSmk3l[];
    rencanaQpass: RencanaQpass[];
    rencanaExternal: RencanaExternal[];
    rencanaSpi: RencanaSpi[];
    rencanaInternal: RencanaInternal[];

    user : UserAkses[];
    jabatan : JabatanAkses[];
    jabatanAnggota : JabatanAnggotaAkses[];


    unitKerja : UnitKerja[];
    jenisUnit : JenisUnit[];
    jenisUsaha : JenisUsaha[];
    levelUsaha : LevelUsaha[];

    prosesBisnis : ProsesBisnis[];

    prosedur : Prosedur[];
    fungsi : Fungsi[];
    auditProgram : AuditProgram[];
    klausul : Klausul[];
    level : Level[];

    jadwalRinciInternal : JadwalRinciInternal[];
    jadwalRinciSmk3l : JadwalRinciSmk3l[];
    jadwalRinciQpass : JadwalRinciQpass[];

    hasilTemuanInternal : HasilTemuanInternal[];
    hasilTemuanSmk3l : HasilTemuanSmk3l[];
    hasilTemuanQpass : HasilTemuanQpass[];

    hasilTemuanKriteria : HasilTemuanKriteria[];
    hasilTemuanLevel : HasilTemuanLevel[];
}
