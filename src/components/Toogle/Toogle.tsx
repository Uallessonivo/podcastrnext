import React from "react";
import Switches from "../Switch";

const Toggle = ({ checked, onChange }) => (
  <button onChange={onChange}>
    <Switches />
  </button>
);

export default Toggle;
