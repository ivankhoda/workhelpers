const axios = require("axios");
export class WalletAgent {
  token: string | void;
  url: string;
  customer: string;

  constructor(token: string | void, url: string, customer: string) {
    this.token = token;
    this.url = url;
    this.customer = customer;
  }

  getWalletAmount() {
    axios
      .post(this.url)
      .then((res: any) => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  log() {}
}
