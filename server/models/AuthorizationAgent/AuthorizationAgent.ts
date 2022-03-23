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
  constructor(
    login: string | undefined,
    password: string | undefined,
    trustor?: string,
    token?: string,
    trustToken?: string
  ) {
    this.login = login;
    this.password = password;
    this.trustor = trustor;
  }

  async getToken() {
    const config = {
      login: `${this.login}`,
      password: `${this.password}`,
    };
    this.token = await axios
      .post(`${baseURL}/api/v0/registry/oauth/token`, config)
      .then((res: any) => {
        return res.data;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
  async getTrustToken() {
    await this.getToken();
    const config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
    this.trustToken = await axios
      .get(`${baseURL}/api/v0/registry/oauth/token/${this.trustor}`, config)
      .then((res: any) => {
        return res.data;
      })
      .catch((error: any) => {
        console.error(error);
      });
    console.log(this.trustToken);
  }
}
