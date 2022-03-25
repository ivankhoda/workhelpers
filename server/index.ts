const dotenv = require("dotenv");
import { AuthorizationAgent } from "./models/AuthorizationAgent/AuthorizationAgent";
import { WalletAgent } from "./models/WalletAgent/WalletAgent";
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
dotenv.config();
const login = process.env.LOGIN;
const password = process.env.PASSWORD;
const trustor = process.env.TRUSTOR;
const baseURL = process.env.BASE_URL;
const walletURL = process.env.WALLET_URL;
const applyWalletURL = process.env.APPLY_WALLET_URL;
const balanceURL = process.env.BALANCE_URL;
const testCustomer = process.env.TEST_CUSTOMER;
const transactionsInWalletURL = process.env.TRANSACTIONS_IN_WALLET_URL;

const authAgent = new AuthorizationAgent(login, password, trustor);

const getToken = async () => {
  let data = await authAgent.getTrustToken().then((res) => res);

  return data;
};
let token = getToken();

let orders = [
  {
    number: "RFQSB20220307-062053",
  },
];

const walletAgent = new WalletAgent(token, transactionsInWalletURL, testCustomer, orders);
const ApplyWalletAgent = new WalletAgent(token, applyWalletURL, testCustomer, orders);

//ApplyWalletAgent.applyWallet();
// walletAgent.getWalletAmount();

//walletAgent.getWalletAmount();
walletAgent.getWalletTransactions();
