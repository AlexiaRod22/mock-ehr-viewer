const oktaConfig = {
    issuer: 'https://integrator-1525258.okta.com/oauth2/default',
    clientId: '0oa1975dbtbV6LoAF698',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
};

export default oktaConfig;