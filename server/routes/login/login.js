const express = require('express');
const router = express.Router();
const base = require('../../public/handler/base');
const models = require('../../public/util/mongoose');
const User = models.getModel('User');
const _filter = { pwd: 0, __v: 0 };

router.post('/', function (req, res) {
  const { account, pwd } = req.body;
  User.findOne({ account, pwd: base.getMd5Str(pwd) }, _filter)
    .then(function (doc) {
      if (!doc) {
        return Promise.reject({ code: 1, msg: '用户名或密码错误' });
      }
      res.cookie('userId', doc._id);
      res.json({ code: 0, results: doc });
    })
    .catch(function (err) {
      res.json(err);
    })
});

module.exports = router;