const routerToLogin = require("./routes/loginRoute");
const routerToWallet = require("./routes/walletRoute");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

//create server
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
//Variables

const trustor = process.env.TRUSTOR;
const baseURL = process.env.BASE_URL;
const walletURL = process.env.WALLET_URL;
const applyWalletURL = process.env.APPLY_WALLET_URL;
const balanceURL = process.env.BALANCE_URL;
const testCustomer = process.env.TEST_CUSTOMER;
const transactionsInWalletURL = process.env.TRANSACTIONS_IN_WALLET_URL;

let orders = [
  {
    number: "RFQSB20220307-062053",
  },
];

app.use("/", routerToLogin, routerToWallet);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
