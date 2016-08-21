const fs = require('fs');

module.exports = {

    initiateModels: function () {
        var models_path = __dirname + '/models';
        fs.readdirSync(models_path)
            .forEach(function (file) {
                if (file.substr(-2) === 'js') {
                    require(models_path + '/' + file);
                }
            });
        return module.exports;
    }

};