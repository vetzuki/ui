import auth0 from 'auth0-js'
import EventEmitter from 'events';

// Auth0 application Domain property
const auth0Domain = process.ENV.AUTH_0_DOMAIN
// Auth0 application client ID
const auth0ClientID = process.ENV.AUTH_0_CLIENT_ID
// exchange the object with your own from the setup step above.
let webAuth = new auth0.WebAuth({
  domain: auth0Domain,
  clientID: auth0ClientID,
  // make sure this line is contains the port: 8080
  redirectUri: `${window.location.origin}/callback`,
// ResponseType: Include the IDToken and access Token 
  responseType: 'id_token token',
  scope: 'openid profile email' // define the scopes you want to use
})

const localStorageKey = 'loggedIn';
const loginEvent = 'loginEvent';

class AuthService extends EventEmitter {
  idToken = null;
  profile = null;
  tokenExpiry = null;

  // Starts the user login flow
  login(customState) {
    webAuth.authorize({
      appState: customState
    });
  }

  // Handles the callback request from Auth0
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      webAuth.parseHash((err, authResult) => {
        if (err) {
          reject(err);
        } else {
          this.localLogin(authResult);
          resolve(authResult.idToken);
        }
      });
    });
  }

  localLogin(authResult) {
    this.idToken = authResult.idToken;
    this.accessToken = authResult.accessToken;
    this.profile = authResult.idTokenPayload;

    // Convert the JWT expiry time from seconds to milliseconds
    this.tokenExpiry = new Date(this.profile.exp * 1000);

    localStorage.setItem(localStorageKey, 'true');
    localStorage.setItem("accessToken", this.accessToken)
    localStorage.setItem("idToken", this.idToken)
    
    this.emit(loginEvent, {
      loggedIn: true,
      profile: authResult.idTokenPayload,
      state: authResult.appState || {}
    });
  }

  renewTokens() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem(localStorageKey) !== "true") {
        console.log(`debug: not logged in, ${localStorage.getItem(localStorageKey)}`)
        return reject("Not logged in");
      }
      
      webAuth.checkSession({}, (err, authResult) => {
        if (err) {
          console.log('check session error', err.error)
          reject(err);
        } else {
          this.localLogin(authResult);
          resolve(authResult);
        }
      });
    });
  }

  logOut() {
    console.log('debug: logout')
    localStorage.removeItem(localStorageKey);
    localStorage.removeItem("idToken")
    localStorage.removeItem("accessToken")

    this.idToken = null;
    this.tokenExpiry = null;
    this.profile = null;

    webAuth.logout({
      returnTo: `${window.location.origin}/`
    });

    this.emit(loginEvent, { loggedIn: false });
  }

  isAuthenticated() {
    return (
      Date.now() < this.tokenExpiry &&
      localStorage.getItem(localStorageKey) === 'true'
    );
  }
}

export default new AuthService();
