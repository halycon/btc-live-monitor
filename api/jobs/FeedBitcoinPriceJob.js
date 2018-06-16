var request = require('request');

module.exports = {
  run : function(callback){

    return  request.get({
      url: 'https://blockchain.info/tr/ticker',
      headers:{'Cache-Control':'no-cache'}
    }, (error, response, body) => {
      if (error) {
        sails.log.error(error);
        return callback({});
      }
      else {
        return callback(JSON.parse(body));
      }
    }).response;
  }
};
