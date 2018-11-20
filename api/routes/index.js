import oauth from "./oauth";
import reputation from "./reputation";
import rewards from "./rewards";

export default (router) => {
    oauth(router);
    reputation(router);
    rewards(router);
}