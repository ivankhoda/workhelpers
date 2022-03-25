const axios = require("axios");
export class WalletAgent {
  token: string | void | Promise<void>;
  url: string;
  customer: string;
  orders?: { number: string }[];

  constructor(token: string | void | Promise<void>, url: string, customer: string, orders?: { number: string }[]) {
    this.token = token;
    this.url = url;
    this.customer = customer;
    this.orders = orders;
  }

  private async getToken() {
    let newToken = await this.token;
    return newToken;
  }

  async getWalletAmount() {
    let newToken = await this.getToken();
    const config = {
      headers: { Authorization: `Bearer ${newToken}`, "content-type": "application/json" },
    };
    const body = [
      { key: "in_wallet", values: ["true"] },
      { key: "state", values: ["open"] },
      { key: "debitor_id", values: [`${this.customer}`] },
    ];
    axios
      .post(this.url, body, config)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  async applyWallet() {
    let newToken = await this.getToken();
    const config = {
      headers: { Authorization: `Bearer ${newToken}`, "content-type": "application/json" },
    };
    const body = {
      customer: {
        number: `${this.customer}`,
      },
      wallet: {
        currency: "EUR",
      },
      orders: this.orders,
    };
    axios
      .put(this.url, body, config)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  async getWalletTransactions() {
    let newToken = await this.getToken();
    const config = {
      headers: { Authorization: `Bearer ${newToken}`, "content-type": "application/json" },
    };
    const body = [
      { key: "in_wallet", value: ["true"] },
      { key: "state", value: ["open"] },
      { key: "debitor_id", value: [`${this.customer}`] },
    ];
    axios
      .post(this.url, body, config)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  log() {}
}
