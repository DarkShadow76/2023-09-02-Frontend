import React from "react";
const getEmpresa = require("./data.jsx")

const Footer = () => {
  return <div fixed="bottom" className="container-footer">
    <h6>{getEmpresa.getEmpresa()}</h6>
  </div>
}

export default Footer