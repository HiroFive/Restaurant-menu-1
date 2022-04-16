"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var yaml = require("js-yaml");
var fs = require("fs");
var util = require("util");
var path = require("path");
var DEBUG = false;
var OPENAPI_VER = '3.0.3';
var FILES_ENCODING = 'utf8';
function compileFinal() {
    var meta = loadSpecs('meta');
    var servers = Object.entries(meta.servers).map(function (_a) {
        var v = _a[1];
        return v;
    });
    var tags = Object.entries(meta.tags).map(function (_a) {
        var v = _a[1];
        return v;
    });
    var pathsRaw = loadSpecs('routes');
    var schemas = loadSpecs('components/schemas');
    var responses = loadSpecs('components/responses');
    var parameters = loadSpecs('components/parameters');
    var paths = {};
    for (var key in pathsRaw) {
        if (pathsRaw.hasOwnProperty(key)) {
            paths = __assign(__assign({}, paths), pathsRaw[key]);
        }
    }
    return {
        openapi: OPENAPI_VER,
        info: __assign({}, meta.info),
        servers: servers,
        tags: tags,
        paths: paths,
        components: {
            schemas: schemas,
            responses: responses,
            parameters: parameters
        }
    };
}
function loadSpecs(folder) {
    var targetPath = path.join(__dirname, folder);
    var filenames = fs.readdirSync(targetPath);
    var container = {};
    filenames.forEach(function (fn) {
        try {
            var filename = path.join(__dirname, folder, fn);
            var content = fs.readFileSync(filename, FILES_ENCODING);
            var doc = yaml.load(content, { schema: yaml.JSON_SCHEMA, json: true }) || {};
            container = __assign(__assign({}, container), doc);
            if (DEBUG) {
                console.log(fn, ': ', util.inspect(doc, false, 5, true));
            }
        }
        catch (e) {
            console.log(e);
        }
    });
    return container;
}
// main
var finalDefinition = compileFinal();
var apis = [];
var options = {
    explorer: true
};
if (DEBUG) {
    console.log(util.inspect(finalDefinition, false, 5, true));
}
exports["default"] = { definition: finalDefinition, apis: apis, options: options };
