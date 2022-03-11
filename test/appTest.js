const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../js/guessing.js');

// Results
getRandomResult = app.getHardCodeRandomNum(55);

getRandomNumRes = app.getRandomNum(55);


describe('Get Hard Coded Random Number', function(){

  describe('getHardRandomNum()', function(){
    it('Should be able to set and get user Input', function(){
      //let result = app.sayHello();
      assert.equal(getRandomResult, 55);
    });

    it('Should be able to generate random number', function(){
      //let result = app.sayHello();
      assert.equal(getRandomResult, 55);
    });


  });


});
