import { AuthorizationAgent } from "./models/AuthorizationAgent/AuthorizationAgent";
import { WalletAgent } from "./models/WalletAgent/WalletAgent";

const dotenv = require("dotenv");

dotenv.config();
const login = process.env.LOGIN;
const password = process.env.PASSWORD;
const trustor = process.env.TRUSTOR;
const baseURL = process.env.BASE_URL;
const walletURL =
  "https://paragon-sandbox.integrity.paragonbox.com/api/v2/accounting/inventory/business/reports/balance";

const authAgent = new AuthorizationAgent(login, password, trustor);
const token = await authAgent.getTrustToken();
const walletAgent = new WalletAgent(token, walletURL, "CRM105510");

walletAgent.getWalletAmount();
