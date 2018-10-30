const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/han';
mongoose.connect(dbUrl, { useNewUrlParser: true }, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('connect mongodb successed');
});

const models = {
  User: {
    'account': { 'type': String, 'require': true },
    'title': { 'type': String, 'require': true },
    'pwd': { 'type': String, 'require': true },
    'type': { 'type': String, 'require': true },
    'describe': { 'type': String },
    'avater': { 'type': String },
    'jobTitle': { 'type': String },
    'company': { 'type': String },
    'money': { 'type': String }
  },
  Chat: {}
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name);
  }
};

