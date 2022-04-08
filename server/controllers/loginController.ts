import { AuthorizationAgent } from "./../models/AuthorizationAgent/AuthorizationAgent";

export class LoginController {
  login: string;
  password: string;
  trustor?: string;
  authorizationAgent?: AuthorizationAgent;
  constructor(login: string, password: string, trustor: string, authorizationAgent?: AuthorizationAgent) {
    login;
    password;
    trustor;
    this.authorizationAgent = new AuthorizationAgent(login, password, trustor);
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
      .catch((err) => console.log(err, "error"));
  }
}
