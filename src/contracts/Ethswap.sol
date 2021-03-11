pragma solidity >=0.4.21 <0.6.0;
import './Token.sol';
contract Ethswap{
        string public name="Ethswap Instant Exchange";
       Token public token;
       uint public rate=100;
event tokenPurchased(
address account,
address token,
uint amount,
uint rate
);
event tokenSold(
address account,
address token,
uint amount,
uint rate
);



constructor(Token _token) public
{
	token=_token;
}
function buyTokens() public payable{


uint tokenAmount=msg.value*rate;
require(token.balanceOf(address(this))>=tokenAmount);
	token.transfer(msg.sender,tokenAmount);

	emit tokenPurchased(msg.sender,address(token),tokenAmount,rate);
}

function sellTokens(uint _amount) public{

	require(token.balanceOf(msg.sender)>=_amount);
	uint etherAmount=_amount/rate;
require(address(this).balance>=etherAmount);
	token.transferFrom(msg.sender,address(this),_amount);
	msg.sender.transfer(etherAmount);

	emit tokenSold(msg.sender,address(token),etherAmount,rate);
}

}