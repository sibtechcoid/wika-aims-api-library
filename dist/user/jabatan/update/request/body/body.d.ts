import Akses from "../../../../akses/update/request/body/body";
import Singkatan from "../../../../../singkatan/update/singkatan";
import Nama from "../../../../../nama/update/nama";
import Id from "../../../../../id/id";
export default interface Body extends Id, Singkatan, Nama {
    akses?: Omit<Akses, 'id'>;
}
