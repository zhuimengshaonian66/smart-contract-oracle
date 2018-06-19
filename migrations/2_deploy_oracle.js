//var oracle = artifacts.require("Oracle");

//module.exports = function(deployer) {
//  deployer.deploy(oracle);
//};
var oracle = artifacts.require("OracleResolver");

module.exports = function(deployer) {
  deployer.deploy(oracle);
};
