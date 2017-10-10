var express = require('express');
var router = express.Router();
var rsa = require('node-rsa');
var key = new rsa({b: 512});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var t = req.body.inp;
  var rest = converter(t);
  res.json({'res': rest});
});

function converter(t){
  console.log(t);
  var out = key.encrypt(t, 'base64');
  var h = key.decrypt(out, 'utf8');
  var res = {
    'encrypt': out,
    'decrypt': h
  };
  return res;
}

module.exports = router;
