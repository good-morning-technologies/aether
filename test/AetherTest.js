var aether = artifacts.require('AETHER');
// var testb = AETHER.at(AETHER.address);
contract('AETHER', function(accounts) {
  it("should assert true", function(done) {
    var aethertest = aether.deployed();
    assert.isTrue(true);
    done();
  });

  it("should put 1billion AETHER in this account",function(){
    return aether.deployed().then(function(instance){
        return instance.balanceOf.call(accounts[0]);
    }).then(function(balance){
        assert.equal(balance.valueOf(), 1000000000, "1billion wasn't in the first account");
    });
  });

  it('test burn tokens', function(){
    var burn_amount = 100;
      return aether.deployed().then(function(instance) {
        ate = instance;
        return ate.balanceOf.call(accounts[0]);
      }).then(function(masterBalance) {
        balanceBeforeBurn = masterBalance.toNumber();
        ate.burn(burn_amount);
        return ate.balanceOf.call(accounts[0]);
      }).then(function(masterBalanceAfter){
        assert.equal(balanceBeforeBurn - burn_amount, masterBalanceAfter.toNumber());
      });
    });

  // it('cannot burn more tokens than your balance', function(){
  //   return aether.deployed().then(function(instance) {
  //     var account_one = accounts[0];
  //     instance.burn(100000000, { from: account_one })
  //   })
  // });

});
