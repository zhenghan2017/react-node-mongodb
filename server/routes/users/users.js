const express = require('express');
const router = express.Router();
const base = require('../../public/handler/base');
const models = require('../../public/util/mongoose');
const User = models.getModel('User');
const _filter = { pwd: 0, __v: 0 };

router.route('/')
    /**
     * 查询用户
     */
    .get(function (req, res) {
        // let options = {};
        // if (req.query.name) {
        //     options.name = req.query.name;
        // }
        // User.remove({}, function (e, d) {});
        const { userId } = req.cookies;
        User.findOne({ _id: userId }, _filter)
            .then(function (doc) {
                res.json({ code: 0, results: doc });
            })
            .catch(function (err) {
                res.json({ code: 1, msg: '服务端错误' });
            });
    })
    /**
     * 修改用户信息
     */
    .patch(function (req, res) {
        User.findOneAndUpdate({ _id: req._userId }, req.body)
            .then(function (doc) {
                const data = Object.assign({}, { account: doc.account, type: doc.type }, req.body);
                res.json({ code: 0, results: data });
            })
            .catch(function (err) {
                res.json(err);
            })
    })

/**
 * 新增用户
 * 
 * @param {String} account 账户
 */
router.post('/register', function (req, res) {
    const { account, pwd, type, title } = req.body;
    User.findOne({ account })
        .then(function (doc) {
            if (doc) {
                return Promise.reject({ code: 1, msg: '用户名重复' });
            }
            const userModel = new User({ account, pwd: base.getMd5Str(pwd), type, title });
            return userModel.save()
        })
        .then(function (doc) {
            const { _id, type, account, title } = doc;
            res.cookie('userId', _id);
            res.json({ code: 0, msg: '', results: { _id, type, account, title } });
        })
        .catch(function (err) {
            res.json(err);
        });
})

module.exports = router;