const axios = require("axios");
export class WalletAgent {
  token: string | void | Promise<void>;
  url: string;
  customer: string;

  constructor(token: string | void | Promise<void>, url: string, customer: string) {
    this.token = token;
    this.url = url;
    this.customer = customer;
  }
  private async getToken() {
    let newToken = await this.token;

    return newToken;
  }

  async getWalletAmount() {
    let newToken = await this.getToken();
    const config = {
      headers: { Authorization: `Bearer ${newToken}` },
    };
    axios
      .post(this.url, config)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  log() {}
}
