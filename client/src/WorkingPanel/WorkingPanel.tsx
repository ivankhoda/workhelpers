import React, { useEffect, useState } from "react";
import "./WorkingPanel.style.scss";
export const WorkingPanel = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchsample = async () => {
      const result = await fetch("http://localhost:3000/wallet", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });

      setData(await result.json());
    };
    fetchsample();
  }, []);
  console.log(data);

  return <div className="WorkingPanel">Working panel</div>;
};
