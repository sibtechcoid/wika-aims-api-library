import Name from "../../../../../nama/update/nama";
import Id from "../../../../../id/id";
export default interface Body extends Name, Id {
    prosesBisnis?: number;
}
