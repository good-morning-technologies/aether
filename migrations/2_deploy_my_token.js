const Aether = artifacts.require('./AETHER.sol')

module.exports = (deployer) => {
  const initialSupply = 1000000000e8
  deployer.deploy(Aether, initialSupply)
}