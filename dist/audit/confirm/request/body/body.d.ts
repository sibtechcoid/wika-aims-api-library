import Member from "../../../../anggota/create/request/body/body";
import Id from "../../../../id/id";
import Schedule from "../../../../jadwal/update/request/body/body";
export default interface Body extends Id, Omit<Schedule, 'rencana'> {
    anggota?: Member[];
}
