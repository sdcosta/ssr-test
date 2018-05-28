'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutContainer = _styledComponents2.default.div.withConfig({
  displayName: 'Layoutstyles__LayoutContainer'
})(['display:flex;align-items:center;justify-content:center;position:fixed;width:100%;height:100%;font-size:40px;background:linear-gradient(20deg,rgb(219,112,147),#daa357);']);

exports.default = LayoutContainer;