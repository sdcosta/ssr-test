'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serverlessHttp = require('serverless-http');

var _serverlessHttp2 = _interopRequireDefault(_serverlessHttp);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _server = require('react-dom/server');

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function htmlTemplate(styles, reactDom, reduxState) {
    return '\n        <!DOCTYPE html>\n        <html>\n            <head>\n                ' + styles + '\n            </head>\n            <div id="app">' + reactDom + '</div>\n            <script>\n                window.REDUX_DATA = ' + JSON.stringify(reduxState) + '\n            </script>\n            <script src="./dist/app.js"></script>\n        </html>\n    ';
}

function createServerlessApp() {
    var app = (0, _express2.default)();
    app.disable('x-powered-by');
    console.log(_path2.default.resolve(__dirname, '../../dist'));
    app.use('/dist', _express2.default.static(_path2.default.resolve(__dirname, '../../dist')));
    app.get('/aaa', function (req, res) {
        res.json({ message: 'hello world' });
    });
    app.get('*', function (req, res) {
        var styles = new _styledComponents.ServerStyleSheet().getStyleTags();
        var reactDom = (0, _server.renderToString)(_react2.default.createElement(_Layout2.default, null));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlTemplate(styles, reactDom));
    });

    return (0, _serverlessHttp2.default)(app);
}

var serverlessApp = module.exports.serverlessApp = createServerlessApp();