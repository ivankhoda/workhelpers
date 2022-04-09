import { WalletAgent } from "../models/WalletAgent/WalletAgent";

export class WalletController {
  token: string;
  walletURL: string;
  orders?: { number: string }[];
  body?: any;
  walletAgent: WalletAgent;
  constructor(token: string, walletURL: string, body?: any, orders?: { number: string }[]) {
    token;
    walletURL;
    body;
    this.walletAgent = new WalletAgent(token, walletURL, body);
  }

  async getWalletAmount() {
    return this.walletAgent.getWalletAmount();
  }
}
