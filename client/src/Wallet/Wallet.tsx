import React, { useEffect, useState } from "react";
import { useToken } from "../App/useToken";

type WalletInfo = {
  opening: string;
  debit: string;
  credit: string;
  closing: string;
};
export const Wallet = () => {
  const [data, setData] = useState<WalletInfo>();
  const { getToken } = useToken();
  useEffect(() => {
    const token = getToken();

    const getData = async () => {
      const result = await fetch("http://localhost:3000/wallet", {
        method: "POST",

        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        // body: JSON.stringify(token),
        //token,
      });
      //console.log(await result.json(), "result");
      setData(await result.json());
    };
    getData();
  }, []);

  return (
    <div className="wallet">
      <div>Opening: {data?.opening}</div>
      <div>Debit: {data?.debit}</div>
      <div>Credit: {data?.credit}</div>
      <div>Closing: {data?.closing}</div>
    </div>
  );
};
