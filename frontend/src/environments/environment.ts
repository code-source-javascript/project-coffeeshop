/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: process.env.API_URL, // the running FLASK api server url
  auth0: {
    url: process.env.DOMAIN_PREFIX, // the auth0 domain prefix: ;
    audience: process.env.AUDIENCE, // the audience set for the auth0 app
    clientId: process.env.CLIENT_ID, // the client id generated for the auth0 app
    callbackURL: process.env.CALLBACK_URL, // the base url of the running ionic application.
  },
};
