const Ethswap = artifacts.require("Ethswap");
const Token = artifacts.require("Token");

module.exports = async function(deployer) {

	  await deployer.deploy(Token);
   const token=await Token.deployed();

   
  await deployer.deploy(Ethswap,token.address);
  const ethswap=await Ethswap.deployed();
 



await token.transfer(ethswap.address,'1000000000000000000000000');
};
