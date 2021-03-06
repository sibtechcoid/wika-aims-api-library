import InternalServerError from "./internal-server-error";

export default class InternalServerErrorCreate<Body> implements InternalServerError<Body> {

    public code : 500 = 500;
    public message : string  = 'Internal Server Error';

    constructor(
        public body : Body
    ) {

    }
}