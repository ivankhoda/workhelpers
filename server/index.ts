import { LoginController } from "./controllers/loginController";
import { WalletAgent } from "./models/WalletAgent/WalletAgent";
const dotenv = require("dotenv");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//create server
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
//Variables
// const login = process.env.LOGIN;
// const password = process.env.PASSWORD;
const trustor = process.env.TRUSTOR;
const baseURL = process.env.BASE_URL;
const walletURL = process.env.WALLET_URL;
const applyWalletURL = process.env.APPLY_WALLET_URL;
const balanceURL = process.env.BALANCE_URL;
const testCustomer = process.env.TEST_CUSTOMER;
const transactionsInWalletURL = process.env.TRANSACTIONS_IN_WALLET_URL;

//const authAgent = new AuthorizationAgent(login, password, trustor);

// const getToken = async () => {
//   let data = await authAgent.getTrustToken().then((res) => res);

//   return data;
// };
// let token = getToken();

let orders = [
  {
    number: "RFQSB20220307-062053",
  },
];

// const ApplyWalletAgent = new WalletAgent(token, applyWalletURL, testCustomer, orders);

app.use("/login", async (req, res) => {
  const { login, password } = req.body;
  const loginController = new LoginController(login, password, trustor);
  const response = await loginController.getToken();
  console.log(typeof response, "response in index");
});

app.post("/wallet", async (req, res) => {
  const token = req.headers["authorization"];

  const walletAgent = new WalletAgent(token, walletURL, testCustomer, orders);

  let balance;
  const getData = async () => {
    const result = await walletAgent.getWalletAmount().then((res) => res);

    return result;
  };

  balance = await getData();

  res.json(balance);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
