import React from "react";
const getEmpresa = require("./data.jsx")

const Footer = () => {
  return <div fixed="bottom" style={{ marginTop: "10px"}}>
    <h6>{getEmpresa.getEmpresa()}</h6>
  </div>
}

export default Footer