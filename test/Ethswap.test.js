const Token =artifacts.require('Token')
const Ethswap=artifacts.require('Ethswap')

require('chai')
	.use(require('chai-as-promised'))
	.should()
function tokens(n){
	return web3.utils.toWei(n,'ether');
}
contract('Ethswap',([investor,deployer])=>{
	let token,ethswap;
	before(async()=>{
		token=await Token.new()
		ethswap=await Ethswap.new(token.address)
		await token.transfer(ethswap.address,tokens('1000000'))

	})

	describe('Ethswap Deployment',async()=>{
		it('contract has name',async()=>{
			const name=await ethswap.name()
			assert.equal(name,'Ethswap Instant Exchange')
		})
	})
	describe('Token Deployment',async()=>{
		it('contract has name',async()=>{
			const name=await token.name()
			assert.equal(name,'DApp Token')
		})
	})

describe('contract has token',async()=>{
		it('contract has name',async()=>{
		
		let bal=await token.balanceOf(ethswap.address)
		assert.equal(bal.toString(),tokens('1000000'))

		})
	})
describe('buyTokens()',async()=>{
let res
before(async()=>{
	res= await ethswap.buyTokens({from: investor,value: web3.utils.toWei('1','ether')})
})
it('Allow user to instantly purchase tokens from ethswap for a fixed price',async()=>{
	let inbal=await token.balanceOf(investor)
	assert.equal(inbal.toString(),tokens('100'))

	let ethbal=await token.balanceOf(ethswap.address)
	assert.equal(ethbal.toString(),tokens('999900'))
	const ae=res.logs[0].args
	assert.equal(ae.account,investor)
	assert.equal(ae.token,token.address)
	assert.equal(ae.amount.toString(),tokens('100').toString())
	assert.equal(ae.rate.toString(),'100')
	})

	
})
describe('sellTokens()',async()=>{
let res
before(async()=>{
	await token.approve(ethswap.address,tokens('100'),{from:investor})
	res=await ethswap.sellTokens(tokens('100'),{from:investor})
})
it('Allow user to instantly sell tokens from ethswap for a fixed price',async()=>{
/*	let inbal=await token.balanceOf(investor)
	assert.equal(inbal.toString(),tokens('0'))
*/
	//let ethbal=await token.balanceOf(ethswap.address)
	//assert.equal(ethbal.toString(),tokens('1000000'))
	//let ethbal=await web3.eth.getBalance(ethswap.address)
	//assert.equal(ethbal.toString,web3.utils.toWei('0','ether'))


	const ae=res.logs[0].args
	assert.equal(ae.account,investor)
	assert.equal(ae.token,token.address)
	assert.equal(ae.amount.toString(),tokens('100').toString())
	assert.equal(ae.rate.toString(),'100')


		})

	
})
})