module.exports = {


  connect: function(req, res) {

    if (!req.isSocket) {
      sails.log.info('not a socket request');
      return res.json({});
    }else {
      sails.sockets.join(req.socket, 'btc-price');
      sails.log.info('socket connected to btc-price room');

      return res.json({});
    }

  }

};
