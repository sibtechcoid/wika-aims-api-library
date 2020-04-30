import ReadBody from "../../../read/response/body/body";
import Id from "../../../../id/id";

export default interface Body extends Omit<ReadBody, 'id'>, Partial<Id> {

}