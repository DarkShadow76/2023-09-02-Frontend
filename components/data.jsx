import React from "react";
const os = require('os');
/**
const getEmpresa = () => {
  return <>
    <strong>Global Engineering ACG</strong>
  </>
}
**/

const empresa="TourIzi Perú v1.0 © 2021-2023"

function getEmpresa() {
  return <>
    <strong>{empresa}</strong>
  </>
}

//export default getEmpresa

module.exports ={
  getEmpresa,
}