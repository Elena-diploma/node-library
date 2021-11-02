function info() {
    var pjson = require('./package.json');
    const m = new Map();
    m.set('name', pjson.name);
    m.set('version', pjson.version);
    return m;
}

export default {
    info
};