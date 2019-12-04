declare enum Status {
    WAITING = "WAITING",
    REJECTED = "REJECTED",
    SUBMITTED = "SUBMITTED",
    /**
     * publish state, after draft
     */
    PUBLISH = "PUBLISH",
    DRAFT = "DRAFT"
}
export default Status;
