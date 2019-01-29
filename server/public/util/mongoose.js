const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/han';
mongoose.connect(dbUrl, { useNewUrlParser: true }, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('connect mongodb succeed');
});

const models = {
  User: {
    'account': { 'type': String, 'require': true },
    'title': { 'type': String, 'require': true },
    'pwd': { 'type': String, 'require': true },
    'type': { 'type': String, 'require': true },
    'describe': { 'type': String },
    'avatar': { 'type': String },
    'jobTitle': { 'type': String },
    'company': { 'type': String },
    'money': { 'type': String }
  },
  Chat: {
    'char_id': { 'type': String, 'require': true },
    'from': { 'type': String, 'require': true },
    'to': { 'type': String, 'require': true },
    'content': { 'type': String, 'require': true, default: '' },
    'creat_time': { 'type': Number, default: new Date().getTime() },
    'read': { 'type': Boolean, require: true, default: false }
  }
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name);
  }
};

