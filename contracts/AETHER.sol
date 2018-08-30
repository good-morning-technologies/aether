pragma solidity ^0.4.18;
import './ERC1132.sol';
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";

contract AETHER is BurnableToken, ERC1132{
  string public name = "AETHER";
  string public symbol = "ATE";
  uint public decimals = 8;

  constructor(uint initialSupply) public {
    totalSupply_ = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}