var feedBitcoinPriceJob  = require('../jobs/FeedBitcoinPriceJob.js');


var bitCoinPriceService = module.exports =  {
  smaArray : [],
  feed : function () {

    var response = {};

    /* '15m': 6474.44,
      last: 6474.44,
      buy: 6474.44,
      sell: 6474.44,
      symbol: '$' }*/

    feedBitcoinPriceJob.run((callback) => {
      response = callback;

      if(undefined !== response && undefined !== response['USD'] && undefined !==  response['USD']['last']) {
        var lastSaleVale = parseFloat(response['USD']['last']).toFixed(2);
        bitCoinPriceService.smaArray.push(lastSaleVale);
        if (bitCoinPriceService.smaArray.length > 5) {
          bitCoinPriceService.smaArray.shift();
        } else {
          bitCoinPriceService.smaArray.push(lastSaleVale);
          bitCoinPriceService.smaArray.push(lastSaleVale);
          bitCoinPriceService.smaArray.push(lastSaleVale);
          bitCoinPriceService.smaArray.push(lastSaleVale);
        }
        var smaValue = bitCoinPriceService.calculateSMA(bitCoinPriceService.smaArray);

        sails.sockets.broadcast('btc-price', 'priceInfo', {y1: lastSaleVale, y2: smaValue});
      }

    });

  },
  calculateSMA : function (arr) {
    if(arr.length<5){
      return -1;
    }else{
      var total = arr.reduce((x, y) => parseFloat(x) + parseFloat(y));
      return parseFloat(total/5).toFixed(2);
    }

  }
};

