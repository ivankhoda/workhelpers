const axios = require("axios");
export class WalletAgent {
  token: string;
  url: string;
  options?: any;
  orders?: { number: string }[];
  balance?: string;

  constructor(token: string, url: string, options?: any, orders?: { number: string }[]) {
    this.token = token;
    this.url = url;
    this.orders = orders;
    this.options = options;
  }

  private authorize() {
    if (this.token) {
      return { headers: { Authorization: `${this.token}`, "content-type": "application/json" } };
    }
  }
  private getRequestBody() {
    if (this.options) {
      return this.options;
    }
  }

  async getWalletAmount() {
    return (this.balance = await axios
      .post(this.url, this.getRequestBody(), this.authorize())
      .then((res: any) => {
        const data = res.data;
        return data;
      })
      .catch((error: any) => {
        return error;
      }));
  }
  async applyWallet() {
    // const body = {
    //   customer: {
    //     number: `${this.customer}`,
    //   },
    //   wallet: {
    //     currency: "EUR",
    //   },
    //   orders: this.orders,
    // };
    // axios
    //   .put(this.url, body, this.authorize())
    //   .then((res: any) => {
    //     console.log(res.data);
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
  }
  async getWalletTransactions() {
    // const config = {
    //   headers: { Authorization: `${this.token}`, "content-type": "application/json" },
    // };
    // // const body = [
    // //   { key: "in_wallet", value: ["true"] },
    // //   { key: "state", value: ["open"] },
    // //   { key: "debitor_id", value: [`${this.customer}`] },
    // // ];
    // axios
    //   .post(this.url, body, config)
    //   .then((res: any) => {
    //     console.log(res.data, "response in transactions");
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
  }

  log() {}
}
