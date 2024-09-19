const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("certModuleCert",(m) => {
    const cert = m.contract("Cert");
    return {cert};
});