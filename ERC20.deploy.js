// Just a standard hardhat-deploy deployment definition file!
const func = async (hre) => {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const initialSupply = 1000000
  const name = 'My Optimistic Token'

  await deploy('ERC20', {
    from: deployer,
    args: [ initialSupply, name ],
    log: true,
    gasLimit: 31700000,
    gasPrice: 0
  })
}

func.tags = [ 'ERC20' ]
module.exports = func
