var validate = require('../src/validator').master;

it("#01. Sermon should valid", function () {
    var Sermon = require('../src/master/sermon');
    validate.sermon(new Sermon());
})
