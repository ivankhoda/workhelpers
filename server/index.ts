const dotenv = require("dotenv");
import { AuthorizationAgent } from "./models/AuthorizationAgent/AuthorizationAgent";
import { WalletAgent } from "./models/WalletAgent/WalletAgent";

dotenv.config();
const login = process.env.LOGIN;
const password = process.env.PASSWORD;
const trustor = process.env.TRUSTOR;
const baseURL = process.env.BASE_URL;
const walletURL = process.env.WALLET_URL;

const balanceURL = process.env.BALANCE_URL;
const testCustomer = process.env.TEST_CUSTOMER;

const authAgent = new AuthorizationAgent(login, password, trustor);

const getToken = async () => {
  let data = await authAgent.getTrustToken().then((res) => res);

  return data;
};
let token = getToken();

const walletAgent = new WalletAgent(token, walletURL, testCustomer);
walletAgent.getWalletAmount();
