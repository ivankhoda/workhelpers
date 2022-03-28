import React from "react";
import { Caret } from "../../assets/Icons/Caret";
import "./Avatar.style.scss";
import { AvatarIcon } from "./Icon";

export const Avatar = () => (
  <div className="Avatar">
    <AvatarIcon className="green" />
    <Caret className="neutral" />
  </div>
);
