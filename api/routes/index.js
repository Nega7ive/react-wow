import oauth from "./oauth";
import rewards from "./rewards";
import reputation from "./reputation";
import characters from "./characters";

export default (router) => {
    oauth(router);
    reputation(router);
    rewards(router);
    characters(router);
}