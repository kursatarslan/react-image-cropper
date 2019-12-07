'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./demo.less');

var _Cropper = require('../component/Cropper');

var _Cropper2 = _interopRequireDefault(_Cropper);

var _demo = require('../dist/image/demo.jpg');

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CropperList = function (_Component) {
  _inherits(CropperList, _Component);

  function CropperList(props) {
    _classCallCheck(this, CropperList);

    var _this = _possibleConstructorReturn(this, (CropperList.__proto__ || Object.getPrototypeOf(CropperList)).call(this, props));

    _this.state = {
      imgSrc: _demo2.default,
      image: '',
      imageLoaded: false,
      image4: '',
      image4Loaded: false,
      image4BeforeLoaded: false,
      image4Values: ''
    };
    return _this;
  }

  _createClass(CropperList, [{
    key: 'handleImageLoaded',
    value: function handleImageLoaded(state) {
      this.setState(_defineProperty({}, state + 'Loaded', true));
    }
  }, {
    key: 'handleBeforeImageLoad',
    value: function handleBeforeImageLoad(state) {
      this.setState(_defineProperty({}, state + 'BeforeLoaded', true));
    }
  }, {
    key: 'handleClick',
    value: function handleClick(state) {
      var node = this[state];
      this.setState(_defineProperty({}, state, node.crop()));
    }
  }, {
    key: 'handleSaveClick',
    value: function handleSaveClick(state) {
      var node = this[state];
      this.setState(_defineProperty({}, state, node.save()));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(state, values) {
      this.setState(_defineProperty({}, state + 'Values', values));
    }
  }, {
    key: 'handleGetValues',
    value: function handleGetValues(state) {
      var node = this[state];
      this.setState(_defineProperty({}, state + 'Values', node.values()));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_Cropper2.default, {
              src: this.state.imgSrc,
              width: 200,
              height: 500,
              originX: 200,
              originY: 50,
              fixedRatio: false,
              allowNewSelection: false,
              onChange: function onChange(values) {
                return _this2.handleChange('image4', values);
              },
              styles: {
                source_img: {
                  WebkitFilter: 'blur(3.5px)',
                  filter: 'blur(3.5px)'
                },
                modal: {
                  opacity: 0.5,
                  backgroundColor: '#fff'
                },
                dotInner: {
                  borderColor: '#ff0000'
                },
                dotInnerCenterVertical: {
                  backgroundColor: '#ff0000'
                },
                dotInnerCenterHorizontal: {
                  backgroundColor: '#ff0000'
                }
              },
              ref: function ref(_ref) {
                _this2.image4 = _ref;
              },
              onImgLoad: function onImgLoad() {
                return _this2.handleImageLoaded('image4');
              },
              beforeImgLoad: function beforeImgLoad() {
                return _this2.handleBeforeImageLoad('image4');
              }
            }),
            _react2.default.createElement('br', null),
            this.state.image4BeforeLoaded ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.handleGetValues('image4');
                }
              },
              'values'
            ) : null,
            _react2.default.createElement(
              'h4',
              null,
              'values'
            ),
            this.state.image4Values ? _react2.default.createElement(
              'pre',
              {
                style: {
                  padding: '10px',
                  backgroundColor: '#eee',
                  overflow: 'scroll'
                }
              },
              JSON.stringify(this.state.image4Values)
            ) : null,
            this.state.image4Loaded ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.handleClick('image4');
                }
              },
              'crop'
            ) : null,
            _react2.default.createElement(
              'h4',
              null,
              'after crop'
            ),
            this.state.image4 ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', {
                className: 'after-img',
                src: this.state.image4,
                alt: ''
              }),
              _react2.default.createElement(
                'button',
                { onClick: this.handleSaveClick('image4') },
                'Save'
              )
            ) : null
          )
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_Cropper2.default, {
              src: this.state.imgSrc,
              width: 200,
              height: 500,
              originX: 200,
              originY: 50,
              fixedRatio: false,
              allowNewSelection: false,
              onChange: function onChange(values) {
                return _this2.handleChange('image4', values);
              },
              styles: {
                source_img: {
                  WebkitFilter: 'blur(3.5px)',
                  filter: 'blur(3.5px)'
                },
                modal: {
                  opacity: 0.5,
                  backgroundColor: '#fff'
                },
                dotInner: {
                  borderColor: '#ff0000'
                },
                dotInnerCenterVertical: {
                  backgroundColor: '#ff0000'
                },
                dotInnerCenterHorizontal: {
                  backgroundColor: '#ff0000'
                }
              },
              ref: function ref(_ref2) {
                _this2.image4 = _ref2;
              },
              onImgLoad: function onImgLoad() {
                return _this2.handleImageLoaded('image4');
              },
              beforeImgLoad: function beforeImgLoad() {
                return _this2.handleBeforeImageLoad('image4');
              }
            }),
            _react2.default.createElement('br', null),
            this.state.image4BeforeLoaded ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.handleGetValues('image4');
                }
              },
              'values'
            ) : null,
            _react2.default.createElement(
              'h4',
              null,
              'values'
            ),
            this.state.image4Values ? _react2.default.createElement(
              'pre',
              {
                style: {
                  padding: '10px',
                  backgroundColor: '#eee',
                  overflow: 'scroll'
                }
              },
              JSON.stringify(this.state.image4Values)
            ) : null,
            this.state.image4Loaded ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.handleClick('image4');
                }
              },
              'crop'
            ) : null,
            _react2.default.createElement(
              'h4',
              null,
              'after crop'
            ),
            this.state.image4 ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', {
                className: 'after-img',
                src: this.state.image4,
                alt: ''
              }),
              _react2.default.createElement(
                'button',
                { onClick: this.handleSaveClick('image4') },
                'Save'
              )
            ) : null
          )
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_Cropper2.default, {
              src: this.state.imgSrc,
              width: 200,
              height: 500,
              originX: 200,
              originY: 50,
              fixedRatio: false,
              allowNewSelection: false,
              onChange: function onChange(values) {
                return _this2.handleChange('image4', values);
              },
              styles: {
                source_img: {
                  WebkitFilter: 'blur(3.5px)',
                  filter: 'blur(3.5px)'
                },
                modal: {
                  opacity: 0.5,
                  backgroundColor: '#fff'
                },
                dotInner: {
                  borderColor: '#ff0000'
                },
                dotInnerCenterVertical: {
                  backgroundColor: '#ff0000'
                },
                dotInnerCenterHorizontal: {
                  backgroundColor: '#ff0000'
                }
              },
              ref: function ref(_ref3) {
                _this2.image4 = _ref3;
              },
              onImgLoad: function onImgLoad() {
                return _this2.handleImageLoaded('image4');
              },
              beforeImgLoad: function beforeImgLoad() {
                return _this2.handleBeforeImageLoad('image4');
              }
            }),
            _react2.default.createElement('br', null),
            this.state.image4BeforeLoaded ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.handleGetValues('image4');
                }
              },
              'values'
            ) : null,
            _react2.default.createElement(
              'h4',
              null,
              'values'
            ),
            this.state.image4Values ? _react2.default.createElement(
              'pre',
              {
                style: {
                  padding: '10px',
                  backgroundColor: '#eee',
                  overflow: 'scroll'
                }
              },
              JSON.stringify(this.state.image4Values)
            ) : null,
            this.state.image4Loaded ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.handleClick('image4');
                }
              },
              'crop'
            ) : null,
            _react2.default.createElement(
              'h4',
              null,
              'after crop'
            ),
            this.state.image4 ? _react2.default.createElement('img', {
              className: 'after-img',
              src: this.state.image4,
              alt: ''
            }) : null
          )
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_Cropper2.default, {
              src: this.state.imgSrc,
              width: 200,
              height: 500,
              originX: 200,
              originY: 50,
              fixedRatio: false,
              allowNewSelection: false,
              onChange: function onChange(values) {
                return _this2.handleChange('image4', values);
              },
              styles: {
                source_img: {
                  WebkitFilter: 'blur(3.5px)',
                  filter: 'blur(3.5px)'
                },
                modal: {
                  opacity: 0.5,
                  backgroundColor: '#fff'
                },
                dotInner: {
                  borderColor: '#ff0000'
                },
                dotInnerCenterVertical: {
                  backgroundColor: '#ff0000'
                },
                dotInnerCenterHorizontal: {
                  backgroundColor: '#ff0000'
                }
              },
              ref: function ref(_ref4) {
                _this2.image4 = _ref4;
              },
              onImgLoad: function onImgLoad() {
                return _this2.handleImageLoaded('image4');
              },
              beforeImgLoad: function beforeImgLoad() {
                return _this2.handleBeforeImageLoad('image4');
              }
            }),
            _react2.default.createElement('br', null),
            this.state.image4BeforeLoaded ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.handleGetValues('image4');
                }
              },
              'values'
            ) : null,
            _react2.default.createElement(
              'h4',
              null,
              'values'
            ),
            this.state.image4Values ? _react2.default.createElement(
              'pre',
              {
                style: {
                  padding: '10px',
                  backgroundColor: '#eee',
                  overflow: 'scroll'
                }
              },
              JSON.stringify(this.state.image4Values)
            ) : null,
            this.state.image4Loaded ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.handleClick('image4');
                }
              },
              'crop'
            ) : null,
            _react2.default.createElement(
              'h4',
              null,
              'after crop'
            ),
            this.state.image4 ? _react2.default.createElement('img', {
              className: 'after-img',
              src: this.state.image4,
              alt: ''
            }) : null
          )
        )
      );
    }
  }]);

  return CropperList;
}(_react.Component);

module.exports = CropperList;