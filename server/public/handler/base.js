const utils = require('utility');

const base = {
    getMd5Str(str) {
        const salt = 'zhenghan2018@gmail.com';
        return utils.md5(str + salt);
    }
};

module.exports = base;