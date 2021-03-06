import { AuthorizationAgent } from "./../models/AuthorizationAgent/AuthorizationAgent";

export class LoginController {
  login: string;
  password: string;
  trustor?: string;
  platformUrl?: string;
  authorizationAgent?: AuthorizationAgent;
  constructor(
    login: string,
    password: string,
    trustor: string,
    platformUrl?: string,
    authorizationAgent?: AuthorizationAgent
  ) {
    login;
    password;
    trustor;
    platformUrl;
    this.authorizationAgent = new AuthorizationAgent(login, password, trustor, platformUrl);
  }
  async getToken() {
    return this.authorizationAgent
      .getTrustToken()
      .then((res) => {
        if (res.status !== 200) {
          return res.toJSON().message;
        }
        return res.data;
      })
      .catch((err) => err);
  }
}
