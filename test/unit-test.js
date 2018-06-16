var assert = require('assert');
var bitCoinPriceService =  require('../api/services/BitcoinPriceService');

describe('BitcoinPriceService', () => {

  describe('calculateSMA_Test', () => {

    it('should return true if valid user id', () => {
      var isValid = bitCoinPriceService.calculateSMA([10,20,30,40,50]);
      assert.equal(isValid, 30);
    });

    it('should return false if parameter is empty', () => {
      var isValid = bitCoinPriceService.calculateSMA([]);
      assert.equal(isValid, -1);
    });

    it('should return false if parameter size is less than 5', () => {
      var isValid = bitCoinPriceService.calculateSMA([4,3,2,3]);
      assert.equal(isValid, -1);
    });

  });

});
