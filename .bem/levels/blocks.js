var PATH = require('path'),
    environ = require('bem-environ'),
    getTechResolver = environ.getTechResolver,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = PATH.resolve(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');

exports.getTechs = function() {
    var techs = {
        'bemdecl.js'           : 'v2/bemdecl.js',
        'deps.js'              : 'v2/deps.js',
        'styl'                 : 'v2/styl',
        'css'                  : 'v2/css',
        'ie.css'               : 'v2/ie.css',
        'ie6.css'              : 'v2/ie6.css',
        'ie7.css'              : 'v2/ie7.css',
        'ie8.css'              : 'v2/ie8.css',
        'js'                   : 'v2/js-i'
    };

    // use techs from project (.bem/techs)
    ['bemjson.js'].forEach(getTechResolver(techs, PRJ_TECHS));

    // use techs from bem-core library
    ['bemtree', 'bemhtml', 'node.js', 'vanilla.js', 'browser.js'].forEach(getTechResolver(techs, BEMCORE_TECHS));

    return techs;
};

exports.defaultTechs = ['styl', 'bemhtml', 'browser.js'];
