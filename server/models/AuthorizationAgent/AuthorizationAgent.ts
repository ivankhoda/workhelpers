const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const baseURL = process.env.BASE_URL;

export class AuthorizationAgent {
  login: string | undefined;
  password: string | undefined;
  trustor?: string;
  token?: undefined;
  trustToken?: string;
  platformUrl?: string;
  constructor(login: string | undefined, password: string | undefined, trustor?: string, platformUrl?: string) {
    this.login = login;
    this.password = password;
    this.trustor = trustor;
    this.platformUrl = platformUrl ? platformUrl : baseURL;
  }

  async getToken() {
    const config = {
      login: `${this.login}`,
      password: `${this.password}`,
    };
    this.token = await axios
      .post(`${this.platformUrl}/api/v0/registry/oauth/token`, config)
      .then((res: any) => {
        return res.data;
      })
      .catch((error: any) => {
        return error;
      });
  }
  async getTrustToken() {
    await this.getToken();
    const config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
    return (this.trustToken = await axios
      .get(`${baseURL}/api/v0/registry/oauth/token/${this.trustor}`, config)
      .then((res: any) => {
        return res;
      })
      .catch((error: any) => {
        return error;
      }));
  }
}
