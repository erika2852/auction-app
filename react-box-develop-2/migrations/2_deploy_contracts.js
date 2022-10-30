var SimpleStorage = artifacts.require("./Store.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};
