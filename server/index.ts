import router from "./routes/rootRouter";
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

//router
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
