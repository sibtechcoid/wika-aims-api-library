import Id from "../../../../../id/id";
import Audit from "../../../../../audit/read/response/body/body";

export default interface Body extends Pick<Audit, 'id'|'perbaikan'> {

}
