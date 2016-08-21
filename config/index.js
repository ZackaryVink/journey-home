const Path = require('path');
const NConf = require('nconf');

class Config {
    constructor() {
        var conf = new NConf.Provider();

        conf.argv().env().defaults({
            NODE_ENV: 'local'
        });

        const globalConfigPath = Path.join(__dirname, 'config.json');
        const envConfigPath = Path.join(__dirname, 'config-' + conf.get('NODE_ENV') + ".json");

        conf.add('env', {
            type: 'file',
            file: envConfigPath
        });
        conf.add('global', {
            type: 'file',
            file: globalConfigPath
        });

        this.conf = conf;
    }

    get(property) {
        let value = this.conf.get(property);
        return value;
    }
}

module.exports = new Config();
