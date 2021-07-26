// Just a standard hardhat-deploy deployment definition file!
const func = async (hre) => {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy('Owner', {
    from: deployer,
    args: [],
    log: true,
    gasLimit: 12500000,
    gasPrice: 15000000
  })
}

func.tags = [ 'Owner' ]
module.exports = func
