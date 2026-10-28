import {OktaAuth} from '@okta/okta-auth-js';
import oktaConfig from './oktaConfig';

const oktaAuth = new OktaAuth(oktaConfig);

export default oktaAuth;