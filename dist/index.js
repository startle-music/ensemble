Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    background-image: url(", ");\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-size: cover;\n    opacity: 0.5;\n    mix-blend-mode: multiply;\n    filter: blur(0px);\n    transform: scale(1.2);\n    animation: ", " 3s;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% { opacity: 0; }\n    33% { opacity: 0; }\n    99%   { opacity: 0.5; }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #2e364c;\n    z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap = styled__default['default'].div(_templateObject());
var fadeIn = styled.keyframes(_templateObject2());
var Inner = styled__default['default'].div(_templateObject3(), function (props) {
  return props.src;
}, fadeIn);

var Background = function Background(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === void 0 ? null : _ref$src;
  return /*#__PURE__*/React__default['default'].createElement(Wrap, {
    className: "background"
  }, /*#__PURE__*/React__default['default'].createElement(Inner, {
    className: "background__inner",
    src: src
  }));
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    position: relative;\n    z-index: 2;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$1 = styled__default['default'].div(_templateObject$1(), function (props) {
  return props.inline ? "inline-block" : "flex";
});
var WrapAbsolute = styled__default['default'].div(_templateObject2$1());

var Spinner = function Spinner(_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? '120px' : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '120px' : _ref$width,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#fff' : _ref$fill;
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("linearGradient", {
    x1: "8.042%",
    y1: "0%",
    x2: "65.682%",
    y2: "23.865%",
    id: "a"
  }, /*#__PURE__*/React__default['default'].createElement("stop", {
    stopColor: fill,
    stopOpacity: "0",
    offset: "0%"
  }), /*#__PURE__*/React__default['default'].createElement("stop", {
    stopColor: fill,
    stopOpacity: ".631",
    offset: "63.146%"
  }), /*#__PURE__*/React__default['default'].createElement("stop", {
    stopColor: fill,
    offset: "100%"
  }))), /*#__PURE__*/React__default['default'].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    transform: "translate(1 1)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    id: "Oval-2",
    stroke: "url(#a)",
    strokeWidth: "2"
  }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React__default['default'].createElement("circle", {
    fill: fill,
    cx: "36",
    cy: "18",
    r: "1"
  }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })))));
};

var Loader = function Loader(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      type = _ref2.type,
      fill = _ref2.fill;

  switch (type) {
    case 'inline':
      return /*#__PURE__*/React__default['default'].createElement(Wrap$1, {
        inline: true
      }, /*#__PURE__*/React__default['default'].createElement(Spinner, {
        width: width,
        height: height,
        fill: fill
      }));

    case 'absolute':
      return /*#__PURE__*/React__default['default'].createElement(WrapAbsolute, null, /*#__PURE__*/React__default['default'].createElement(Spinner, {
        width: width,
        height: height,
        fill: fill
      }));

    default:
      return /*#__PURE__*/React__default['default'].createElement(Wrap$1, null, /*#__PURE__*/React__default['default'].createElement(Spinner, {
        width: width,
        height: height,
        fill: fill
      }));
  }
};

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    user-select: none;\n\n    > *:first-child {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n    }\n\n    > *:not(:first-child) {\n        opacity: 0;\n    }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    max-width: 8em;\n    border-radius: 2em;\n    display: block;\n    margin: 3em auto 0em auto;\n    background: #7cc530;\n    border: 1px solid #7cc530;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    background: transparent;\n    border-color: transparent;\n    box-shadow: none;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    vertical-align: middle;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    border: 0px;\n    padding: 0.4rem 0rem;\n    width:29px;\n    \n    background: 'red';\n    color: 'white';\n    border-radius: 0.18rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s linear;\n\n    &:disabled{\n        &:hover{\n            opacity: 0.4;\n        }\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    border: 0px;\n    padding: 0px;\n    color: white;\n    background: transparent;\n    box-shadow: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    vertical-align: middle;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.75rem 2rem;\n    font-size: ", ";\n    text-decoration: none;\n    position: relative;\n    display: ", ";\n    text-align: center;\n    box-sizing: border-box;\n    font-weight: bold;\n    border-radius: ", ";\n    cursor: pointer;\n    box-shadow: none;\n    ", "\n\n    /* if a button is followed by a button add left margin to the trailing button */\n    &+button, &+a {\n        margin-left: 0.4rem;\n    }\n\n    svg {\n        fill: currentColor;\n        height: 1.1rem;\n        width: 1em;\n    }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    background: 'red';\n    border: 1px solid red;\n    color: 'white';\n\n    &:disabled {\n        opacity: 0.4;\n        cursor: default;\n    }\n\n    &:hover {\n        opacity: 1;\n    }\n    &:active {\n        opacity: 1;\n    }\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n\n    &:disabled {\n        opacity: 1;\n        cursor: default;\n    }\n    &:hover {\n        opacity: 1;\n    }\n    &:active {\n        opacity: 1;\n    }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var btnOline = styled.css(_templateObject$2(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.background;
}, function (_ref3) {
  var theme = _ref3.theme,
      product = _ref3.product;
  return theme.products[product || 'default'].primary;
});
var btnFull = styled.css(_templateObject2$2());
var btnBase = styled.css(_templateObject3$1(), function (props) {
  return props.small === 'true' ? "0.785rem" : "1rem";
}, function (props) {
  return props.type === 'full' ? "block" : "inline-block";
}, function (props) {
  return props.rounded === 'true' ? '10rem' : '0';
}, function (props) {
  return props.outline === true ? btnOline : btnFull;
});
var LinkBtnBase = styled__default['default'].a(_templateObject4(), btnBase);
var RouteLinkBase = styled__default['default'].a(_templateObject5(), btnBase);
var SubmitBtnBase = styled__default['default'].button(_templateObject6(), btnBase);
var IconBtnBase = styled__default['default'].button(_templateObject7(), btnBase);
var TableIconBase = styled.css(_templateObject8(), btnBase);
var TableIconBtnBase = styled__default['default'].button(_templateObject9(), TableIconBase);
var TableLinkIconBtnBase = styled__default['default'].a(_templateObject10(), TableIconBase);
var CancelBtnBase = styled__default['default'].button(_templateObject11(), btnBase);
var CustomBtnColor = styled__default['default'].button(_templateObject12(), btnBase);
var ButtonBtnBase = styled__default['default'].button(_templateObject13(), btnBase);
var SubmitModalBtnBase = styled__default['default'].button(_templateObject14(), btnBase);

var Cancel = function Cancel(_ref4) {
  var children = _ref4.children,
      rest = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(CancelBtnBase, rest, children);
};

var ColorButton = function ColorButton(_ref5) {
  var children = _ref5.children,
      rest = _objectWithoutProperties(_ref5, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(CustomBtnColor, rest, children);
};

var Button = function Button(_ref6) {
  var children = _ref6.children,
      rest = _objectWithoutProperties(_ref6, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(ButtonBtnBase, rest, children);
};

var Icon = function Icon(_ref7) {
  var children = _ref7.children,
      rest = _objectWithoutProperties(_ref7, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(IconBtnBase, rest, children);
};

var TableIcon = function TableIcon(_ref8) {
  var children = _ref8.children,
      rest = _objectWithoutProperties(_ref8, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(TableIconBtnBase, rest, children);
};

var LinkButton = function LinkButton(props) {
  var children = props.children,
      href = props.href;
  return /*#__PURE__*/React__default['default'].createElement(LinkBtnBase, _extends({}, props, {
    href: href
  }), children);
};

var TableLinkButton = function TableLinkButton(props) {
  var children = props.children,
      to = props.to;
  return /*#__PURE__*/React__default['default'].createElement(TableLinkIconBtnBase, _extends({}, props, {
    to: to
  }), children);
};

var RouteLink = function RouteLink(props) {
  var children = props.children,
      to = props.to;
  return /*#__PURE__*/React__default['default'].createElement(RouteLinkBase, _extends({
    to: to
  }, props), children);
};

var LoadingWrap = styled__default['default'].div(_templateObject15());

var Submit = function Submit(props) {
  return /*#__PURE__*/React__default['default'].createElement(SubmitBtnBase, _extends({}, props, {
    value: props.value,
    type: "submit"
  }));
};
/**
 * @TODO: Review Submit Modal button type so see if it can be made useless.
 * */


var SubmitModal = function SubmitModal(props) {
  return /*#__PURE__*/React__default['default'].createElement(SubmitModalBtnBase, _extends({}, props, {
    value: props.value,
    type: "submit"
  }));
};

var ButtonWrap = function ButtonWrap(props) {
  var children = props.children,
      type = props.type,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$message = props.message,
      message = _props$message === void 0 ? null : _props$message;
  var content = children;

  if (loading === true) {
    content = /*#__PURE__*/React__default['default'].createElement(LoadingWrap, null, /*#__PURE__*/React__default['default'].createElement(Loader, null), /*#__PURE__*/React__default['default'].createElement("div", null, children));
  }

  if (message !== null) {
    content = message;
  }

  switch (type) {
    case 'link':
      return /*#__PURE__*/React__default['default'].createElement(LinkButton, props, content);

    case 'route-link':
      return /*#__PURE__*/React__default['default'].createElement(RouteLink, props, content);

    case 'table-route-link':
      return /*#__PURE__*/React__default['default'].createElement(TableLinkButton, props, content);

    case 'submit':
      return /*#__PURE__*/React__default['default'].createElement(Submit, _extends({}, props, {
        value: content
      }));

    case 'submit-modal':
      return /*#__PURE__*/React__default['default'].createElement(SubmitModal, _extends({}, props, {
        value: content
      }));

    case 'cancel':
      return /*#__PURE__*/React__default['default'].createElement(Cancel, _extends({}, props, {
        value: content || 'cancel'
      }));

    case 'icon':
      return /*#__PURE__*/React__default['default'].createElement(Icon, props, content);

    case 'table-icon':
      return /*#__PURE__*/React__default['default'].createElement(TableIcon, props, content);

    case 'custom-color':
      return /*#__PURE__*/React__default['default'].createElement(ColorButton, _extends({}, props, {
        value: content
      }));

    default:
      return /*#__PURE__*/React__default['default'].createElement(Button, props, content);
  }
};

var Times = function Times() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Icon/Times",
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M44.1308425,32 L62.3254196,50.194577 C64.5581935,52.4291265 64.5581935,56.0489723 62.3254196,58.2817462 L58.2817462,62.3254196 C56.0489723,64.5581935 52.4271734,64.5581935 50.194577,62.3254196 L32,44.1308425 L13.805423,62.3254196 C11.5728266,64.5581935 7.95102768,64.5581935 5.71825379,62.3254196 L1.67458042,58.2817462 C-0.558193473,56.0471968 -0.558193473,52.4271734 1.67458042,50.194577 L19.8691575,32 L1.67458042,13.805423 C-0.558193473,11.5708735 -0.558193473,7.95102768 1.67458042,5.71825379 L5.71825379,1.67458042 C7.95280324,-0.558193473 11.5728266,-0.558193473 13.805423,1.67458042 L32,19.8691575 L50.194577,1.67458042 C52.4291265,-0.558193473 56.0489723,-0.558193473 58.2817462,1.67458042 L62.3254196,5.71825379 C64.5581935,7.95280324 64.5581935,11.5728266 62.3254196,13.805423 L44.1308425,32 Z",
    id: "\uD83C\uDFA8-Icon-Fill"
  })));
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    border-radius: 10.325em;\n    margin: 0 0.325em 0 0;\n    overflow: hidden;\n    background: red;\n    color: white;\n\n    input,\n    input:checked {\n        display: none;\n    }\n\n    label {\n        padding: 0.5em 0.75em;\n        color: white;\n        cursor: pointer;\n\n        &:focus {\n            background: rgba(0, 0, 0, 0.175);\n        }\n    }\n\n    button {\n        padding: 0.5em 0.6em 0.5em 0.5em;\n        width: 1.7em;\n        height: 100%;\n        box-sizing: border-box;\n        background: rgba(40, 40, 40, 0.075);\n        cursor: pointer;\n\n        svg {\n            width: 100%;\n            height: 100%;\n            color: white;\n            fill: white;\n        }\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$2 = styled__default['default'].div(_templateObject$3());

var renderClose = function renderClose(onRemove, data) {
  var label = data.label,
      name = data.name,
      value = data.value;

  if (onRemove === null) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement("button", {
    type: "button",
    onClick: onRemove,
    label: label,
    name: name,
    value: value
  }, /*#__PURE__*/React__default['default'].createElement(Times, null));
};

var defaultOnClick = function defaultOnClick() {
  return null;
};

var Chip = function Chip(_ref) {
  var label = _ref.label,
      value = _ref.value,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? null : _ref$name,
      _ref$product = _ref.product,
      product = _ref$product === void 0 ? 'default' : _ref$product,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? null : _ref$onClick,
      _ref$onRemove = _ref.onRemove,
      onRemove = _ref$onRemove === void 0 ? null : _ref$onRemove;
  var chipName = name;

  if (name === null) {
    chipName = "chip-name-".concat(label);
  }

  var onClickFunction = defaultOnClick;

  if (onClick !== null) {
    onClickFunction = onClick;
  }

  return /*#__PURE__*/React__default['default'].createElement(Wrap$2, {
    product: product
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    style: {
      padding: '0.5em 0.75em',
      color: '#FFF',
      width: 'auto',
      margin: '0'
    },
    htmlFor: chipName,
    onClick: onClickFunction
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "checkbox",
    name: chipName,
    value: value,
    defaultChecked: true
  }), label), renderClose(onRemove, {
    label: label,
    name: name,
    value: value
  }));
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    border-radius: ", ";\n    border: ", ";\n    margin: ", ";\n    min-width:300px;\n    width: 100%;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var podBase = styled.css(_templateObject$4(), function (props) {
  return props.theme.containers.background || '';
}, function (props) {
  return props.theme.main.borderRadius || '';
}, function (props) {
  return props.theme.containers.border || '';
}, function (props) {
  return props.theme.containers.podSeperator || 0;
});
var Pod = styled__default['default'].article(_templateObject2$3(), podBase);

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    justify-content: ", ";\n    align-items: ", ";\n    flex-direction: ", ";\n    width: 100%;\n    overflow-x: auto;\n    ", "\n    \n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var PositionContainerBase = styled.css(_templateObject$5(), function (props) {
  return props.align || 'center';
}, function (props) {
  return props.position || 'center';
}, function (props) {
  return props.column || 'column';
}, function (props) {
  return props.image ? "\n            background-image: url(".concat(props.image, ");\n            background-position: ").concat(props.imagePosition || 'left', "; \n            background-size: ").concat(props.imageSize || 'cover', ";\n            background-repeat: no-repeat; \n        ") : " ";
});
var PositionContainer = styled__default['default'].div(_templateObject2$4(), PositionContainerBase);

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: ", ";\n    box-sizing: border-box;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var HeaderBase = styled.css(_templateObject$6(), function (props) {
  return props.theme.containers.padding;
});
var Header = styled__default['default'].header(_templateObject2$5(), HeaderBase);

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: ", ";\n    box-sizing: border-box;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var ContentBase = styled.css(_templateObject$7(), function (props) {
  return props.theme.containers.padding;
});
var Content = styled__default['default'].div(_templateObject2$6(), ContentBase);

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    width: 100%;\n    background: ", ";\n    flex-direction: column;\n    flex: ", ";\n    justify-content: center;\n    ", "\n    \n    @media(max-width:500px){\n        flex-direction: column;    \n        ", "\n    }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var ColumnContainerBase = styled.css(_templateObject$8(), function (props) {
  return props.theme.containers.background;
}, function (props) {
  return props.size || 1;
}, function (props) {
  return props.image ? "\n            height: 100%;\n            background-image: url(".concat(props.image, ");\n            background-size: ").concat(props.imageSize || "cover", ";\n            background-repeat: no-repeat; \n            background-position: ").concat(props.imagePos || "center center", " ;\n        ") : " ";
}, function (props) {
  return props.mobile === false ? "\n                display:none;\n            " : "";
});
var ColumnContainer = styled__default['default'].div(_templateObject2$7(), ColumnContainerBase);

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    position: relative;\n    padding: 5.5rem 0;\n    ", "\n\n    @media(max-width:500px){\n        flex-direction: column;\n    }\n    "]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var GridContainerBase = styled.css(_templateObject$9(), function (props) {
  return props.image ? "\n            \n            background-image: url(".concat(props.image, ");\n            background-size: ").concat(props.imageSize || 'cover', ";\n            background-repeat: no-repeat; \n            background-position:  ").concat(props.imagePos || 'cover', ";\n        ") : " ";
});
var GridContainer = styled__default['default'].div(_templateObject2$8(), GridContainerBase);

var Pod$1 = Pod;
var PositionContainer$1 = PositionContainer;
var Header$1 = Header;
var Content$1 = Content;
var ColumnContainer$1 = ColumnContainer;
var GridContainer$1 = GridContainer;

var Form = /*#__PURE__*/function (_Component) {
  _inherits(Form, _Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    console.log('item form', props);
    return _this;
  }

  _createClass(Form, [{
    key: "submit",
    value: function submit(e) {
      var form = this.refs.form;
      var onSubmit = this.props.onSubmit;
      e.preventDefault();

      var tForm = _toConsumableArray(form).filter(function (item) {
        return item.name.length > 0 && !item.validity.valid;
      });

      if (tForm.length === 0 && typeof onSubmit === 'function') {
        var formData = _toConsumableArray(form).filter(function (item) {
          return item.name.length > 0;
        }).reduce(function (total, current) {
          total[current.name] = current.value;
          return total;
        }, {});

        console.log(formData);
        onSubmit(formData);
      } else {
        alert('@Devs. no no no no. Pass edit function pls');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$buttonTex = _this$props.buttonText,
          buttonText = _this$props$buttonTex === void 0 ? 'Submit' : _this$props$buttonTex;
      return /*#__PURE__*/React__default['default'].createElement("form", {
        ref: "form",
        onSubmit: this.submit
      }, children, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(ButtonWrap, {
        product: "positive",
        type: "submit-modal"
      }, buttonText)));
    }
  }]);

  return Form;
}(React$1.Component);

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    margin-bottom: ", ";\n    display: ", "\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n    //margin-bottom:5px;\n    //font-size: 0.9rem;\n    color: ", ";\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var labelBase = styled.css(_templateObject$a(), function (p) {
  return p.theme.main.color;
});
var Label = styled__default['default'].label(_templateObject2$9(), labelBase, function (props) {
  return props.margin || 0;
}, function (_ref) {
  var block = _ref.block;
  return block ? 'block' : 'inline-block';
});

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 15px;\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var SelectBase = styled.css(_templateObject$b());
var Select = styled__default['default'].div(_templateObject2$a(), SelectBase);

var SelectComponent = /*#__PURE__*/function (_PureComponent) {
  _inherits(SelectComponent, _PureComponent);

  var _super = _createSuper(SelectComponent);

  function SelectComponent(props) {
    var _this;

    _classCallCheck(this, SelectComponent);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    var value = _this.props.value;
    _this.state = {
      selectValue: value
    };
    return _this;
  }

  _createClass(SelectComponent, [{
    key: "onChange",
    value: function onChange(e) {
      var selectValue = this.state.selectValue;

      if (typeof this.props.onChange === 'function' && this.props.onChange !== undefined) {
        this.props.onChange(e);
      }

      this.setState({
        selectValue: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          name = _this$props.name,
          type = _this$props.type,
          label = _this$props.label,
          required = _this$props.required,
          options = _this$props.options;
      var selectValue = this.state.selectValue;
      return /*#__PURE__*/React__default['default'].createElement(Select, null, label ? /*#__PURE__*/React__default['default'].createElement(Label, {
        htmlFor: name,
        block: true
      }, label) : null, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "styled-select"
      }, /*#__PURE__*/React__default['default'].createElement("select", {
        value: selectValue,
        name: name,
        "data-type": type,
        required: required,
        onChange: function onChange(e) {
          _this2.onChange(e);
        }
      }, options.map(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return /*#__PURE__*/React__default['default'].createElement("option", {
          value: value
        }, label);
      }))));
    }
  }]);

  return SelectComponent;
}(React$1.PureComponent);

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    -webkit-appearance: none;\n    padding: 0;\n    border-radius: 3px;\n    display: inline-flex;\n    position: absolute;\n    left: 0;\n    top: 0;\n    justify-content: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    align-items: center;\n    margin-right: 5px;\n\n    &:active,\n    &:checked:active {\n        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n    }\n    &:disabled {\n        box-shadow: none;\n    }\n\n    &:checked {\n        background-color: #e83948;\n        color: #ffffff;\n    }\n\n    &:checked:after {\n        content: '\\2714';\n        font-family: 'MuseoSansReg', sans-serif;\n        color: #ffffff;\n    }\n"], ["\n    -webkit-appearance: none;\n    padding: 0;\n    border-radius: 3px;\n    display: inline-flex;\n    position: absolute;\n    left: 0;\n    top: 0;\n    justify-content: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    align-items: center;\n    margin-right: 5px;\n\n    &:active,\n    &:checked:active {\n        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n    }\n    &:disabled {\n        box-shadow: none;\n    }\n\n    &:checked {\n        background-color: #e83948;\n        color: #ffffff;\n    }\n\n    &:checked:after {\n        content: '\\\\2714';\n        font-family: 'MuseoSansReg', sans-serif;\n        color: #ffffff;\n    }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 30px;\n    padding-top: 0.25em;\n    position: relative;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    display: ", ";\n    margin-bottom: 15px;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var CheckboxBase = styled.css(_templateObject$c(), function (props) {
  return props.inline ? 'inline-flex' : 'flex';
});
var Checkbox = styled__default['default'].div(_templateObject2$b(), CheckboxBase);
var PaddedLabel = styled__default['default'](Label)(_templateObject3$2());
var CheckboxInput = styled__default['default'].input(_templateObject4$1());

var CheckboxComponent = /*#__PURE__*/function (_PureComponent) {
  _inherits(CheckboxComponent, _PureComponent);

  var _super = _createSuper(CheckboxComponent);

  function CheckboxComponent(props) {
    var _this;

    _classCallCheck(this, CheckboxComponent);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckboxComponent, [{
    key: "onChange",
    value: function onChange(e) {
      if (typeof this.props.onChange === 'function' && this.props.onChange !== undefined) {
        this.props.onChange(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          id = _this$props.id,
          label = _this$props.label,
          required = _this$props.required,
          checked = _this$props.checked,
          value = _this$props.value,
          _this$props$inline = _this$props.inline,
          inline = _this$props$inline === void 0 ? false : _this$props$inline,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? null : _this$props$className;
      return /*#__PURE__*/React__default['default'].createElement(Checkbox, {
        inline: inline,
        className: className
      }, /*#__PURE__*/React__default['default'].createElement(PaddedLabel, {
        htmlFor: id
      }, /*#__PURE__*/React__default['default'].createElement(CheckboxInput, {
        type: "checkbox",
        name: name,
        id: id,
        required: required,
        value: value,
        onChange: this.onChange,
        checked: checked,
        disabled: disabled
      }), label));
    }
  }]);

  return CheckboxComponent;
}(React$1.PureComponent);

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n\n    input {\n        border: 1px solid #ccc;\n        border-radius: ", ";\n        font-size: 1rem;\n        padding: 0.5rem;\n    }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var FieldBase = styled.css(_templateObject$d(), function (props) {
  return props.theme.main.borderRadius;
});
var Field = styled__default['default'].div(_templateObject2$c(), FieldBase);

var FieldComponent = /*#__PURE__*/function (_PureComponent) {
  _inherits(FieldComponent, _PureComponent);

  var _super = _createSuper(FieldComponent);

  function FieldComponent(props) {
    var _this;

    _classCallCheck(this, FieldComponent);

    _this = _super.call(this, props);
    var value = props.value;
    _this.state = {
      value: value
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FieldComponent, [{
    key: "onChange",
    value: function onChange(e) {
      var onChange = this.props.onChange;

      if (typeof onChange === 'function' && onChange !== undefined) {
        onChange(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          label = _this$props.label,
          required = _this$props.required,
          _this$props$pattern = _this$props.pattern,
          pattern = _this$props$pattern === void 0 ? undefined : _this$props$pattern,
          _this$props$minlength = _this$props.minlength,
          minlength = _this$props$minlength === void 0 ? 3 : _this$props$minlength,
          _this$props$maxlength = _this$props.maxlength,
          maxlength = _this$props$maxlength === void 0 ? 999 : _this$props$maxlength,
          placeholder = _this$props.placeholder;
      var value = this.state.value;
      return /*#__PURE__*/React__default['default'].createElement(Field, null, /*#__PURE__*/React__default['default'].createElement(Label, {
        htmlFor: name
      }, label), /*#__PURE__*/React__default['default'].createElement("input", {
        type: "hidden",
        name: name,
        required: required,
        pattern: pattern,
        minLength: minlength,
        maxLength: maxlength,
        onChange: this.onChange,
        placeholder: placeholder || label,
        defaultValue: value
      }));
    }
  }]);

  return FieldComponent;
}(React$1.PureComponent);

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 15px;\n\n    input {\n        //border: 1px solid #ccc;\n        border-radius: ", ";\n        font-size: 1rem;\n        padding: 0.875rem 0.6rem;\n    }\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var FieldBase$1 = styled.css(_templateObject$e(), function (props) {
  return props.theme.main.borderRadius;
});
var Field$1 = styled__default['default'].div(_templateObject2$d(), FieldBase$1);

var FieldComponent$1 = /*#__PURE__*/function (_Component) {
  _inherits(FieldComponent, _Component);

  var _super = _createSuper(FieldComponent);

  function FieldComponent(props) {
    var _this;

    _classCallCheck(this, FieldComponent);

    _this = _super.call(this, props);
    var value = props.value;
    _this.state = {
      value: value
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FieldComponent, [{
    key: "onChange",
    value: function onChange(e) {
      var onChange = this.props.onChange;

      if (typeof onChange === 'function' && onChange !== undefined) {
        onChange(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          type = _this$props.type,
          label = _this$props.label,
          required = _this$props.required,
          _this$props$pattern = _this$props.pattern,
          pattern = _this$props$pattern === void 0 ? undefined : _this$props$pattern,
          _this$props$minlength = _this$props.minlength,
          minlength = _this$props$minlength === void 0 ? 3 : _this$props$minlength,
          _this$props$maxlength = _this$props.maxlength,
          maxlength = _this$props$maxlength === void 0 ? 999 : _this$props$maxlength,
          placeholder = _this$props.placeholder,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? null : _this$props$id,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? null : _this$props$style,
          _this$props$ref = _this$props.ref,
          ref = _this$props$ref === void 0 ? null : _this$props$ref;
      var value = this.state.value;
      return /*#__PURE__*/React__default['default'].createElement(Field$1, {
        style: style
      }, label ? /*#__PURE__*/React__default['default'].createElement(Label, {
        htmlFor: name
      }, label) : null, /*#__PURE__*/React__default['default'].createElement("input", {
        ref: ref,
        type: type,
        name: name,
        required: required,
        pattern: pattern,
        minLength: minlength,
        maxLength: maxlength,
        onChange: this.onChange,
        placeholder: placeholder || label,
        defaultValue: value,
        id: id
      }));
    }
  }]);

  return FieldComponent;
}(React$1.Component);

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    margin-bottom: 15px;\n    width: 100%;\n    max-width: 26rem;\n\n    input {\n        //border: 1px solid #ccc;\n        border-radius: ", ";\n        font-size: 1rem;\n        padding: 0.875rem 0.6rem;\n        width: 100%;\n    }\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    padding: 0.75rem 0;\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$3 = styled__default['default'].div(_templateObject$f());
var ChipWrap = styled__default['default'].div(_templateObject2$e());
var InputWrap = styled__default['default'].div(_templateObject3$3());
var Form$1 = styled__default['default'].form(_templateObject4$2());
var FieldWrap = styled__default['default'].div(_templateObject5$1(), function (props) {
  return props.theme.main.borderRadius;
});

var ChipInput = /*#__PURE__*/function (_Component) {
  _inherits(ChipInput, _Component);

  var _super = _createSuper(ChipInput);

  function ChipInput(props) {
    var _this;

    _classCallCheck(this, ChipInput);

    _this = _super.call(this, props);
    _this.state = {
      current: '',
      chips: props.chips
    };
    _this.addChip = _this.addChip.bind(_assertThisInitialized(_this));
    _this.chipOnClick = _this.chipOnClick.bind(_assertThisInitialized(_this));
    _this.chipOnRemove = _this.chipOnRemove.bind(_assertThisInitialized(_this));
    _this.onHandleChange = _this.onHandleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChipInput, [{
    key: "chipOnClick",
    value: function chipOnClick() {
      console.log(this);
      return null;
    }
  }, {
    key: "chipOnRemove",
    value: function chipOnRemove(value) {
      var chips = this.state.chips;
      var chipList = chips.filter(function (chip) {
        return chip.value !== value;
      });
      this.setState({
        chips: chipList
      });
    }
  }, {
    key: "renderChip",
    value: function renderChip(chip, key) {
      var _this2 = this;

      var _this$props = this.props,
          name = _this$props.name,
          id = _this$props.id;
      var _chip$onClick = chip.onClick,
          onClick = _chip$onClick === void 0 ? null : _chip$onClick,
          _chip$onRemove = chip.onRemove,
          onRemove = _chip$onRemove === void 0 ? null : _chip$onRemove,
          label = chip.label,
          value = chip.value,
          _chip$product = chip.product,
          product = _chip$product === void 0 ? 'default' : _chip$product;
      var onClickFunction = this.chipOnClick;

      var onRemoveFunction = function onRemoveFunction() {
        return _this2.chipOnRemove(value);
      };

      if (onClick !== null) {
        onClickFunction = onClick;
      }

      if (onRemove !== null) {
        onRemoveFunction = function onRemoveFunction() {
          return onRemove(value);
        };
      }

      return /*#__PURE__*/React__default['default'].createElement(Chip, {
        white: true,
        name: name,
        key: key,
        id: "chip-".concat(id, "-").concat(value),
        onClick: onClickFunction,
        onRemove: onRemoveFunction,
        checked: true,
        value: value,
        label: label,
        product: product
      });
    }
  }, {
    key: "addChip",
    value: function addChip(evnt) {
      evnt.preventDefault();

      if (evnt.target && evnt.target.new_chip) {
        var chipList = this.state.chips;
        var newChip = {
          label: evnt.target.new_chip.value,
          value: evnt.target.new_chip.value.toLowerCase().replace(/ _:;,\./g, '-')
        };

        if (chipList.length >= 1) {
          newChip = _objectSpread2(_objectSpread2({}, chipList[0]), {}, {
            label: evnt.target.new_chip.value,
            value: evnt.target.new_chip.value.toLowerCase().replace(/ _:;,\./g, '-')
          });
        }

        chipList.push(newChip);
        this.setState({
          current: '',
          chips: chipList
        });
      }
    }
  }, {
    key: "onHandleChange",
    value: function onHandleChange(evnt) {
      this.setState({
        current: evnt.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          name = _this$props2.name,
          id = _this$props2.id,
          label = _this$props2.label,
          _this$props2$inline = _this$props2.inline,
          inline = _this$props2$inline === void 0 ? false : _this$props2$inline;
      var _this$state = this.state,
          chips = _this$state.chips,
          current = _this$state.current;
      var addChipFunction = this.addChip;
      var chipValues = chips.map(function (chip) {
        return chip.value;
      });
      return /*#__PURE__*/React__default['default'].createElement(Wrap$3, {
        inline: inline,
        id: id
      }, /*#__PURE__*/React__default['default'].createElement(Label, {
        htmlFor: name
      }, label, /*#__PURE__*/React__default['default'].createElement(InputWrap, null, /*#__PURE__*/React__default['default'].createElement(Form$1, {
        onSubmit: addChipFunction
      }, /*#__PURE__*/React__default['default'].createElement(FieldWrap, null, /*#__PURE__*/React__default['default'].createElement("input", {
        type: "text",
        name: "new_chip",
        value: current,
        onChange: this.onHandleChange
      }))), /*#__PURE__*/React__default['default'].createElement("input", {
        name: "chip-values-".concat(name),
        type: "hidden",
        value: chipValues.join(',')
      })), /*#__PURE__*/React__default['default'].createElement(ChipWrap, null, chips.map(function (chip, key) {
        return _this3.renderChip(chip, key);
      }))));
    }
  }]);

  return ChipInput;
}(React$1.Component);

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    max-width: 26rem;\n    margin: 0 0.325rem 0 0;\n\n    input {\n        //border: 1px solid #ccc;\n        border-radius: ", ";\n        font-size: 1rem;\n        padding: 0.875rem 0.6rem;\n        width: 100%;\n    }\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 1em;\n    justify-content: center;\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$4 = styled__default['default'].div(_templateObject$g());
var ChipWrap$1 = styled__default['default'].div(_templateObject2$f());
var ChipSelectWrap = styled__default['default'].div(_templateObject3$4());
var InputWrap$1 = styled__default['default'].div(_templateObject4$3());
var FieldWrap$1 = styled__default['default'].div(_templateObject5$2(), function (props) {
  return props.theme.main.borderRadius;
});

var ChipInput$1 = /*#__PURE__*/function (_Component) {
  _inherits(ChipInput, _Component);

  var _super = _createSuper(ChipInput);

  function ChipInput(props) {
    var _this;

    _classCallCheck(this, ChipInput);

    _this = _super.call(this, props);
    _this.state = {
      options: props.options,
      selected: props.chips,
      current: ''
    };
    _this.addChip = _this.addChip.bind(_assertThisInitialized(_this));
    _this.chipOnClick = _this.chipOnClick.bind(_assertThisInitialized(_this));
    _this.chipOnRemove = _this.chipOnRemove.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChipInput, [{
    key: "chipOnClick",
    value: function chipOnClick() {
      console.log(this);
      return null;
    }
  }, {
    key: "chipOnRemove",
    value: function chipOnRemove(value) {
      var selected = this.state.selected;
      var chipList = selected.filter(function (chip) {
        return chip !== value;
      });
      this.setState({
        selected: chipList
      });
    }
  }, {
    key: "renderChip",
    value: function renderChip(chip, key) {
      var _this2 = this;

      var _this$props = this.props,
          name = _this$props.name,
          id = _this$props.id;
      var _chip$onClick = chip.onClick,
          onClick = _chip$onClick === void 0 ? null : _chip$onClick,
          _chip$onRemove = chip.onRemove,
          onRemove = _chip$onRemove === void 0 ? null : _chip$onRemove,
          label = chip.label,
          value = chip.value,
          _chip$product = chip.product,
          product = _chip$product === void 0 ? 'default' : _chip$product;
      var onClickFunction = this.chipOnClick;

      var onRemoveFunction = function onRemoveFunction() {
        return _this2.chipOnRemove(value);
      };

      if (onClick !== null) {
        onClickFunction = onClick;
      }

      if (onRemove !== null) {
        onRemoveFunction = function onRemoveFunction() {
          return onRemove(value);
        };
      }

      return /*#__PURE__*/React__default['default'].createElement(Chip, {
        name: name,
        key: key,
        id: "chip-".concat(id, "-").concat(value),
        onClick: onClickFunction,
        onRemove: onRemoveFunction,
        checked: true,
        value: value,
        label: label,
        product: product
      });
    }
  }, {
    key: "addChip",
    value: function addChip(evnt) {
      evnt.preventDefault();

      if (evnt.target && evnt.target.value !== '') {
        var selectbox = evnt.target;
        var selected = this.state.selected;
        var _selected = selected;

        _selected.push(selectbox.value);

        this.setState({
          selected: _selected,
          current: ''
        });
      }
    }
  }, {
    key: "renderOptions",
    value: function renderOptions(options) {
      console.log('renderOption,', options, this);
      var current = this.state.current;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "styled-select"
      }, /*#__PURE__*/React__default['default'].createElement("select", {
        name: "new_chip",
        onChange: this.addChip,
        value: current
      }, /*#__PURE__*/React__default['default'].createElement("option", {
        value: ""
      }, "Select Another Option"), options.map(function (option) {
        return /*#__PURE__*/React__default['default'].createElement("option", {
          value: option.value
        }, option.label);
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          name = _this$props2.name,
          id = _this$props2.id,
          label = _this$props2.label,
          _this$props2$inline = _this$props2.inline,
          inline = _this$props2$inline === void 0 ? false : _this$props2$inline;
      console.log(this);
      var _this$state = this.state,
          selected = _this$state.selected,
          options = _this$state.options;
      var chips = selected.map(function (chip) {
        var matches = options.filter(function (option) {
          return chip === option.value;
        });

        if (matches.length > 0) {
          return matches[0];
        }

        return null;
      });
      var filteredOptions = options.filter(function (option) {
        if (selected.indexOf(option.value) === -1) {
          return true;
        }

        return false;
      });
      return /*#__PURE__*/React__default['default'].createElement(Wrap$4, {
        inline: inline,
        id: id
      }, /*#__PURE__*/React__default['default'].createElement(ChipSelectWrap, null, /*#__PURE__*/React__default['default'].createElement(InputWrap$1, null, /*#__PURE__*/React__default['default'].createElement(Label, {
        htmlFor: "new_chip"
      }, label), /*#__PURE__*/React__default['default'].createElement(FieldWrap$1, null, this.renderOptions(filteredOptions))), /*#__PURE__*/React__default['default'].createElement("input", {
        name: "chip-values-".concat(name),
        type: "hidden",
        value: selected.join(',')
      }), /*#__PURE__*/React__default['default'].createElement(ChipWrap$1, null, chips.map(function (chip, key) {
        return chip !== null ? _this3.renderChip(chip, key) : '';
      }))));
    }
  }]);

  return ChipInput;
}(React$1.Component);

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    position: relative;\n    max-width: 26rem;\n    margin: 0 0.325rem 0 0;\n    align-items: center;\n    span {\n        color: #000;\n        padding: 0.25em;\n    }\n    input {\n        //border: 1px solid #ccc;\n        border-radius: ", ";\n        font-size: 1rem;\n        padding: 0.875rem 0.6rem;\n        width: 100%;\n    }\n\n    & > .styled-select {\n        display: flex;\n        color: #000;\n        align-items: center;\n        margin: 0;\n        width: 6em;\n    }\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}

var pad = function pad(n, width, z) {
  z = z || '0';
  n += '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

var Wrap$5 = styled__default['default'].div(_templateObject$h());
var InputWrap$2 = styled__default['default'].div(_templateObject2$g());
var FieldWrap$2 = styled__default['default'].div(_templateObject3$5(), function (props) {
  return props.theme.main.borderRadius;
});

var TimeSelectInput = /*#__PURE__*/function (_Component) {
  _inherits(TimeSelectInput, _Component);

  var _super = _createSuper(TimeSelectInput);

  function TimeSelectInput(props) {
    var _this;

    _classCallCheck(this, TimeSelectInput);

    _this = _super.call(this, props);
    _this.renderMinutes = _this.renderMinutes.bind(_assertThisInitialized(_this));
    _this.renderHours = _this.renderHours.bind(_assertThisInitialized(_this));
    _this.state = {
      hours: '00',
      minutes: '00',
      date: ''
    };
    return _this;
  }

  _createClass(TimeSelectInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var dd = tomorrow.getDate();
      var mm = tomorrow.getMonth() + 1; // January is 0!

      var yyyy = tomorrow.getFullYear();

      if (dd < 10) {
        dd = "0".concat(dd);
      }

      if (mm < 10) {
        mm = "0".concat(mm);
      }

      tomorrow = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
      document.getElementById('datepicker').setAttribute('min', tomorrow);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var value = this.props.value;

      if (value !== 'Never') {
        var time = value.substr(value.indexOf(' ') + 1).split(':');
        this.setState({
          hours: time[0],
          minutes: time[1],
          date: value.substr(0, value.indexOf(' '))
        });
      }
    }
  }, {
    key: "renderMinutes",
    value: function renderMinutes() {
      var _this2 = this;

      var name = this.props.name;
      var minutes = this.state.minutes;
      return /*#__PURE__*/React__default['default'].createElement("select", {
        name: "".concat(name, "-minutes"),
        value: minutes,
        onChange: function onChange(e) {
          _this2.changeMinutes(e);
        }
      }, _toConsumableArray(Array(60).keys()).map(function (x) {
        return /*#__PURE__*/React__default['default'].createElement("option", {
          value: pad(x, 2)
        }, pad(x, 2));
      }));
    }
  }, {
    key: "renderHours",
    value: function renderHours() {
      var _this3 = this;

      var name = this.props.name;
      var hours = this.state.hours;
      return /*#__PURE__*/React__default['default'].createElement("select", {
        name: "".concat(name, "-hours"),
        value: hours,
        onChange: function onChange(e) {
          _this3.changeHours(e);
        }
      }, _toConsumableArray(Array(24).keys()).map(function (x) {
        return /*#__PURE__*/React__default['default'].createElement("option", {
          value: pad(x, 2)
        }, pad(x, 2));
      }));
    }
  }, {
    key: "changeHours",
    value: function changeHours(e) {
      var _this$state = this.state,
          minutes = _this$state.minutes,
          date = _this$state.date;
      this.setState({
        hours: e.target.value,
        minutes: minutes,
        date: date
      });
    }
  }, {
    key: "changeMinutes",
    value: function changeMinutes(e) {
      var _this$state2 = this.state,
          hours = _this$state2.hours,
          date = _this$state2.date;
      this.setState({
        hours: hours,
        minutes: e.target.value,
        date: date
      });
    }
  }, {
    key: "changeDate",
    value: function changeDate(e) {
      var _this$state3 = this.state,
          hours = _this$state3.hours,
          minutes = _this$state3.minutes;
      this.setState({
        hours: hours,
        minutes: minutes,
        date: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          name = _this$props.name,
          id = _this$props.id,
          label = _this$props.label,
          _this$props$inline = _this$props.inline,
          inline = _this$props$inline === void 0 ? false : _this$props$inline;
      var date = this.state.date;
      return /*#__PURE__*/React__default['default'].createElement(Wrap$5, {
        inline: inline,
        id: id
      }, /*#__PURE__*/React__default['default'].createElement(InputWrap$2, null, /*#__PURE__*/React__default['default'].createElement(Label, null, label), /*#__PURE__*/React__default['default'].createElement(FieldWrap$2, null, /*#__PURE__*/React__default['default'].createElement("input", {
        id: "datepicker",
        name: name,
        type: "date",
        value: date,
        onChange: function onChange(e) {
          _this4.changeDate(e);
        }
      }), /*#__PURE__*/React__default['default'].createElement("span", null, "at"), /*#__PURE__*/React__default['default'].createElement("div", {
        id: "hourpicker",
        className: "styled-select"
      }, this.renderHours()), /*#__PURE__*/React__default['default'].createElement("span", null, ":"), /*#__PURE__*/React__default['default'].createElement("div", {
        id: "minutepicker",
        className: "styled-select"
      }, this.renderMinutes()))));
    }
  }]);

  return TimeSelectInput;
}(React$1.Component);

var Select$1 = SelectComponent;
var CheckBox = CheckboxComponent;
var Radio = CheckboxComponent;
var Hidden = FieldComponent;
var Field$2 = FieldComponent$1;
var Chip$1 = ChipInput;
var ChipSelect = ChipInput$1;
var TimeSelect = TimeSelectInput; //  export const ColorPicker = ColorPickerInput;

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    height: auto;\n    overflow: hidden;\n    transform: scaleY(0);\n    transform-origin: top;\n    color: transparent;\n    transition: color 0.2s linear;\n    background: rgb(18, 148, 231);\n\n    &.active {\n        padding: 0.7rem 1.4rem;\n        padding-top: calc(0.7rem + 4px);\n        margin-top: -4px;\n        color: inherit;\n        transform: scale(1);\n\n        .status-success & {\n            color: rgb(255, 255, 255);\n            background: rgb(0, 212, 1);\n        }\n        .status-error & {\n            color: rgb(255, 255, 255);\n            background: rgb(255, 0, 58);\n        }\n        .status-notice & {\n            color: rgb(255, 255, 255);\n            background: rgb(245, 166, 35);\n        }\n    }\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$h() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n    width: ", ";\n    height: 100%;\n    background: rgb(0, 212, 1);\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n    transition: width 0.5s ease-in-out;\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: none;\n    z-index: 10;\n    width: 100%;\n\n    &.active {\n        display: block;\n    }\n\n    .loader {\n        display: block;\n        position: relative;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 4px;\n        z-index: 12;\n        background: rgba(0, 0, 0, 0.1);\n\n        &.fade {\n            display: block;\n            -webkit-animation: fadeOut 1s;\n            animation: fadeOut 1s;\n            animation-fill-mode: forwards;\n        }\n    }\n\n    @-webkit-keyframes fadeOut {\n        0% {\n            opacity: 1;\n        }\n        99% {\n            opacity: 0.01;\n            width: 100%;\n            height: 100%;\n        }\n        100% {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n    }\n    @keyframes fadeOut {\n        0% {\n            opacity: 1;\n        }\n        99% {\n            opacity: 0.01;\n            width: 100%;\n            height: 100%;\n        }\n        100% {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n    }\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var Loader$1 = styled__default['default'].div(_templateObject$i());
var Bar = styled__default['default'].div(_templateObject2$h(), function (props) {
  return "".concat(props.percent, "%") || '0%';
});
var Message = styled__default['default'].div(_templateObject3$6());

var LoaderBar = /*#__PURE__*/function (_React$Component) {
  _inherits(LoaderBar, _React$Component);

  var _super = _createSuper(LoaderBar);

  function LoaderBar(props) {
    var _this;

    _classCallCheck(this, LoaderBar);

    _this = _super.call(this, props);
    _this.state = {
      progress: props.progress || 0
    };
    return _this;
  }

  _createClass(LoaderBar, [{
    key: "setTimeout",
    value: function setTimeout() {
      var _this2 = this;

      var _this$props = this.props,
          message = _this$props.message,
          active = _this$props.active;
      this.timer = setInterval(function () {
        if (message === '' && active === true) {
          var progress = _this2.state.progress;

          if (progress < 94) {
            var update = Math.random() * 3;

            _this2.setState({
              progress: Math.round(progress + update)
            });
          }
        }
      }, 477);
    }
  }, {
    key: "clearTimeout",
    value: function clearTimeout() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = 0;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTimeout();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
    /** React would like us to be "Lifting State Up" here
     *     -  https://reactjs.org/docs/lifting-state-up.html
     *  For now, they can suck it
     * */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var progress = this.props.progress;

      if (newProps.progress && newProps.progress !== progress) {
        this.setState({
          progress: newProps.progress
        });
      }
    }
  }, {
    key: "renderBar",
    value: function renderBar() {
      var className = 'loader';
      var message = this.props.message;
      var progress = this.state.progress;

      if (message !== '') {
        className += ' fade';
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: className
      }, /*#__PURE__*/React__default['default'].createElement(Bar, {
        percent: progress
      }));
    }
  }, {
    key: "renderMessage",
    value: function renderMessage() {
      var message = this.props.message;

      if (message === '') {
        return /*#__PURE__*/React__default['default'].createElement(Message, null);
      }

      return /*#__PURE__*/React__default['default'].createElement(Message, {
        className: "active"
      }, message);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          visible = _this$props2.visible,
          status = _this$props2.status;
      var className = "status-".concat(status);

      if (visible === true) {
        className += ' active';
      }

      return /*#__PURE__*/React__default['default'].createElement(Loader$1, {
        className: className
      }, this.renderBar(), this.renderMessage());
    }
  }]);

  return LoaderBar;
}(React__default['default'].Component);

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 15px;\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    text-indent: 0;\n    animation: ", " ", " linear infinite;\n    animation-play-state: ", ";\n\n    /* &:hover {\n        animation-play-state: ", ";\n    } */\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n    white-space: nowrap;\n    overflow: hidden;\n    box-sizing: border-box;\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n    0%   { \n        transform: translate(0, 0); \n    }\n    100% { \n        transform: translate(-50%, 0); \n    }\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
/**
 *  Usage Example
 * ===============================
 *
 * @description Marquess uses a few params as arguments. All are
 * optional and have defaults as seen before in `defaults`.
 *
 * @param content String `content` for marquee
 * @param onHover Bool `true` or `false` value for if hover alters the behaviour
 * @param hoverEffect String if the effect for on hover is `paused` or `running`
 * @param loop Bool `true` or `false` value for if animation loops round @todo
 * @param speed Number numeric `value` for the speed of marquee scroll
 *
 * @example Using JSX with props to set.
 * <Marquess
 *    content={content}
 *    onHover={onHover}
 *    hoverEffect={hoverEffect}
 *    loop={loop}
 *    speed={speed}
 * />
 *
 */

var defaults = {
  content: '',
  onHover: true,
  hoverEffect: 'paused',
  loop: false,
  speed: 1,
  shouldScroll: false,
  isAnimating: false
};
var scroll = styled.keyframes(_templateObject$j());
var Wrap$6 = styled__default['default'].div(_templateObject2$i());
var Marquee = styled__default['default'].span(_templateObject3$7(), scroll, function (props) {
  return "".concat(props.time, "s");
}, function (props) {
  return props.animate;
}, function (props) {
  return props.hoverPlaystate;
});
var MainContent = styled__default['default'].span(_templateObject4$4());
var Dupe = styled__default['default'].span(_templateObject5$3());
var Temp = styled__default['default'].div(_templateObject6$1());

var Marquess = /*#__PURE__*/function (_Component) {
  _inherits(Marquess, _Component);

  var _super = _createSuper(Marquess);

  function Marquess(props) {
    var _this;

    _classCallCheck(this, Marquess);

    _this = _super.call(this, props);
    _this.state = _objectSpread2(_objectSpread2({}, defaults), props);
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.handleAnimationEnd = _this.handleAnimationEnd.bind(_assertThisInitialized(_this));
    _this.needsToScroll = _this.needsToScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Marquess, [{
    key: "componentDidMount",
    value: function componentDidMount() {// window.addEventListener('resize', this.needsToScroll);
      // this.needsToScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// window.removeEventListener('resize', this.needsToScroll);
    }
    /**
     * Checks refs to see if inner element is bigger than parent
     */

  }, {
    key: "needsToScroll",
    value: function needsToScroll() {
      var wrap = this.wrap,
          marquee = this.marquee;
      var isAnimating = this.state.isAnimating;
      var shouldScroll = false;
      var animate = true;

      if (wrap && marquee) {
        var wWidth = wrap.getBoundingClientRect().width;
        var mWidth = marquee.getBoundingClientRect().width;

        if (mWidth > wWidth) {
          shouldScroll = true;
        }
      }

      console.log("is anim ".concat(isAnimating));

      if (!shouldScroll) {
        animate = false;
      }

      this.setState(function () {
        return {
          shouldScroll: shouldScroll,
          isAnimating: animate
        };
      });
    }
  }, {
    key: "handleHover",
    value: function handleHover() {
      this.needsToScroll(true);
    }
  }, {
    key: "handleAnimationEnd",
    value: function handleAnimationEnd() {
      // console.log('end');
      this.setState(function () {
        return {
          isAnimating: false
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          speed = _this$state.speed,
          hoverEffect = _this$state.hoverEffect,
          onHover = _this$state.onHover,
          loop = _this$state.loop,
          isAnimating = _this$state.isAnimating,
          shouldScroll = _this$state.shouldScroll;
      var _this$props = this.props,
          content = _this$props.content,
          className = _this$props.className;

      /* if (!shouldScroll) {
          playstate = 'paused';
          hoverPlaystate = 'paused';
          animate = 'paused';
      } */

      /**
       * Temporary Launch change
       */


      return /*#__PURE__*/React__default['default'].createElement(Wrap$6, {
        ref: function ref(wrap) {
          return _this2.wrap = wrap;
        },
        className: className
      }, /*#__PURE__*/React__default['default'].createElement(Temp, null, /*#__PURE__*/React__default['default'].createElement(MainContent, null, content)));
    }
  }]);

  return Marquess;
}(React$1.Component);

function _templateObject2$j() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    position:fixed;\n    align-items: center;\n    box-sizing: content-box;\n    background: ", ";\n    z-index:9;\n    ", "\n    ", "\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var mastBase = styled.css(_templateObject$k(), function (props) {
  return props.theme.mast.background;
}, function (props) {
  return props.position === "top" ? "\n            top:0;\n            width:100%;\n            flex-direction: row;\n        " : "";
}, function (props) {
  return props.theme.mast.shadow ? "\n            box-shadow: 1px 0 3px rgba(0,0,0,0.3);\n        " : "";
});
var Mast = styled__default['default'].div(_templateObject2$j(), mastBase);
var index = (function (props) {
  return /*#__PURE__*/React.createElement(Mast, {
    position: props.position
  }, props.children);
});

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n    width: 30rem;\n    min-height: 4rem;\n    max-width: 90%;\n    max-height: 90%;\n    background: ", ";\n    color: ", ";\n    border-radius: ", ";\n    box-shadow: 0 5px 10px ", ";\n    overflow: auto;\n    padding: 2rem;\n    text-align: center;\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: -1;\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$k() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 8888;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    color: ", ";\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var ModalHeader = styled__default['default'].h2(_templateObject$l(), function (props) {
  return props.theme.main.color;
});
var Wrap$7 = styled__default['default'].div(_templateObject2$k());
var Background$1 = styled__default['default'].div(_templateObject3$8());
var ModalWrap = styled__default['default'].div(_templateObject4$5(), function (props) {
  return props.type === 'asset' ? 'transparent' : props.theme.main.boxBackground;
}, function (props) {
  return props.theme.menu.color;
}, function (props) {
  return props.theme.main.borderRadius;
}, function (props) {
  return props.type === 'asset' ? 'transparent' : 'rgba(0, 0, 0, 0.3)';
});

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);
    _this.open = _this.open.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "open",
    value: function open() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "renderClose",
    value: function renderClose() {
      var modal = this.props.modal;
      var _modal$close = modal.close,
          close = _modal$close === void 0 ? true : _modal$close,
          _modal$onClose = modal.onClose,
          onClose = _modal$onClose === void 0 ? null : _modal$onClose,
          _modal$closeText = modal.closeText,
          closeText = _modal$closeText === void 0 ? 'Cancel' : _modal$closeText;

      if (close) {
        return /*#__PURE__*/React__default['default'].createElement("button", {
          style: {
            margin: '0 auto 1em auto',
            display: 'block'
          },
          onClick: function onClick() {
            return onClose(null);
          },
          type: "button"
        }, closeText);
      }

      return null;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(header, type) {
      if (type === 'asset') {
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement(ModalHeader, null, header);
    }
  }, {
    key: "render",
    value: function render() {
      var modal = this.props.modal;
      var _modal$content = modal.content,
          content = _modal$content === void 0 ? 'test' : _modal$content,
          _modal$header = modal.header,
          header = _modal$header === void 0 ? 'Modal Header' : _modal$header,
          _modal$onClose2 = modal.onClose,
          onClose = _modal$onClose2 === void 0 ? null : _modal$onClose2,
          _modal$isOpen = modal.isOpen,
          isOpen = _modal$isOpen === void 0 ? false : _modal$isOpen,
          _modal$type = modal.type,
          type = _modal$type === void 0 ? 'default' : _modal$type,
          _modal$className = modal.className;
      console.log('Modal: Render', this.props);

      if (!isOpen) {
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement(Wrap$7, null, /*#__PURE__*/React__default['default'].createElement(Background$1, {
        onClick: function onClick() {
          return onClose(null);
        }
      }), /*#__PURE__*/React__default['default'].createElement(ModalWrap, {
        id: "mainModal",
        type: type
      }, this.renderHeader(header, type), content, this.renderClose()));
    }
  }]);

  return Modal;
}(React$1.Component); // Map state to props of container component


var ModalContainer = Modal;

function paginate(totalItems, currentPage, pageSize, maxPages) {
  // calculate total pages
  var totalPages = Math.ceil(totalItems / pageSize);
  var thisPage = currentPage; // ensure current page isn't out of range

  if (currentPage <= 1) {
    thisPage = 1;
  } else if (currentPage > totalPages) {
    thisPage = totalPages;
  }

  var startPage = 0;
  var endPage = 0;

  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

    if (thisPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (thisPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      // current page somewhere in the middle
      startPage = thisPage - maxPagesBeforeCurrentPage;
      endPage = thisPage + maxPagesAfterCurrentPage;
    }
  } // calculate start and end item indexes


  var startIndex = (thisPage - 1) * pageSize;
  var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); // create an array of pages to ng-repeat in the pager control

  var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
    return startPage + i;
  }); // return object with all pager properties required by the view

  return {
    totalItems: totalItems,
    thisPage: thisPage,
    pageSize: pageSize,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages
  };
}

var Icon$1 = function Icon() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Icon/Arrow-Right",
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M27.211231,59.2005673 C25.8400121,57.8435768 25.8684687,55.6295397 27.2684232,54.3011453 L44.4807766,37.903014 L3.42818658,37.903014 C1.52842775,37.903014 0,36.3745863 0,34.4748275 L0,29.903912 C0,28.0041532 1.52842775,26.4757254 3.42818658,26.4757254 L44.4807766,26.4757254 L27.2684232,10.0775942 C25.8828366,8.74919982 25.8542404,6.53516266 27.211231,5.17817214 L30.3823314,2.00707165 C31.7107258,0.664309448 33.8819386,0.664309448 35.2245613,2.00707165 L62.9929283,29.7752992 C64.3356906,31.1038331 64.3356906,33.2749064 62.9929283,34.6176686 L35.2245613,62.3716678 C33.8961669,63.71443 31.7249541,63.71443 30.3823314,62.3716678 L27.211231,59.2005673 Z",
    id: "\uD83C\uDFA8-Icon-Fill"
  })));
};

var Icon$2 = function Icon() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Icon/Arrow-Left",
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M36.788769,59.2005673 L33.6176686,62.3716678 C32.2750459,63.71443 30.1038331,63.71443 28.7754387,62.3716678 L1.00707165,34.6176686 C-0.335690552,33.2749064 -0.335690552,31.1038331 1.00707165,29.7752992 L28.7754387,2.00707165 C30.1180614,0.664309448 32.2892742,0.664309448 33.6176686,2.00707165 L36.788769,5.17817214 C38.1457596,6.53516266 38.1171634,8.74919982 36.7315768,10.0775942 L19.5192234,26.4757254 L60.5718134,26.4757254 C62.4715723,26.4757254 64,28.0041532 64,29.903912 L64,34.4748275 C64,36.3745863 62.4715723,37.903014 60.5718134,37.903014 L19.5192234,37.903014 L36.7315768,54.3011453 C38.1315313,55.6295397 38.1599879,57.8435768 36.788769,59.2005673 Z",
    id: "\uD83C\uDFA8-Icon-Fill"
  })));
};

function _templateObject2$l() {
  var data = _taggedTemplateLiteral(["\n    align-self: flex-end;\n    width: 0.9em;\n\n    svg {\n        width: 100%;\n        height: 100%;\n        fill: ", ";\n    }\n\n    .active & {\n        svg {\n            fill: red;\n        }\n    }\n"]);

  _templateObject2$l = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    text-align: right;\n\n    > * {\n        &.number &.arrow &.inactivearrow {\n            display: inline-block;\n            border: none;\n        }\n        &.number {\n            padding: 0.7em 0.5em;\n            width: 2.5em;\n            margin: 0.5em 0.1em;\n            background: #fff;\n            color: ", ";\n            border: none;\n        }\n\n        &.arrow {\n            padding: 0.8em 0.8em 0.6em 0.8em;\n            margin: 0.5em 0.1em;\n            background: #fff;\n            border: none;\n        }\n        &.inactivearrow {\n            padding: 0.8em 0.8em 0.6em 0.8em;\n            margin: 0.5em 0.1em;\n            background: #f0f0f0;\n            pointer-events: none;\n            border: none;\n        }\n\n        &.active {\n            background: #e83948;\n            border-radius: 4px 0em;\n            margin: 0.5em 0.1em;\n            padding: 0.7em 0.5em;\n            width: 2.5em;\n            outline: none;\n            color: #fff;\n            border: none;\n            border-radius: 10px;\n        }\n    }\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$8 = styled__default['default'].div(_templateObject$m(), function (props) {
  return props.theme.pagination.color;
});
var SvgWrap = styled__default['default'].div(_templateObject2$l(), function (props) {
  return props.color;
});
var _pageSize = 20;
var _totalPages = 5;

var Pagination = /*#__PURE__*/function (_Component) {
  _inherits(Pagination, _Component);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, props);
    _this.renderPageButton = _this.renderPageButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Pagination, [{
    key: "renderMore",
    value: function renderMore() {
      var _this$props = this.props,
          page = _this$props.page,
          paginate = _this$props.paginate; // handlePaginate(page, filters, column, direction) {

      var handlePaginate = function handlePaginate(pg) {
        paginate(pg);
      };

      return /*#__PURE__*/React__default['default'].createElement(Wrap$8, null, /*#__PURE__*/React__default['default'].createElement(ButtonWrap, {
        onClick: handlePaginate(page)
      }, "Load More"));
    }
  }, {
    key: "renderPageButton",
    value: function renderPageButton(pageNumber) {
      var _this$props2 = this.props,
          paginate = _this$props2.paginate,
          page = _this$props2.page; // handlePaginate(page, filters, column, direction) {

      var handlePaginate = function handlePaginate(pg) {
        paginate(pg);
      };

      var className = '';

      if (page === pageNumber || page <= 0 && pageNumber === 1) {
        className = 'active';
      } else {
        className = 'number';
      }

      return /*#__PURE__*/React__default['default'].createElement(ButtonWrap, {
        key: "pagination-page-".concat(pageNumber),
        value: "Test Button",
        type: "button",
        outline: "true",
        className: className,
        onClick: function onClick() {
          handlePaginate(pageNumber);
        }
      }, pageNumber);
    }
  }, {
    key: "renderBackPageButton",
    value: function renderBackPageButton(current) {
      var _this$props3 = this.props,
          paginate = _this$props3.paginate,
          page = _this$props3.page;

      var handlePaginate = function handlePaginate(pg) {
        paginate(pg);
      };

      var className = '';
      var color = '';
      var disabled = false;

      if (page > 1 && current.pages.length > 0) {
        className = 'arrow';
        color = '#e83948';
      } else {
        className = 'inactivearrow';
        color = '#B4B7BC';
        disabled = true;
      }

      return /*#__PURE__*/React__default['default'].createElement(ButtonWrap, {
        disabled: disabled,
        className: className,
        onClick: function onClick() {
          handlePaginate(page - 1);
        }
      }, /*#__PURE__*/React__default['default'].createElement(SvgWrap, {
        color: color
      }, /*#__PURE__*/React__default['default'].createElement(Icon$2, null)));
    }
  }, {
    key: "renderNextPageButton",
    value: function renderNextPageButton(current) {
      var _this$props4 = this.props,
          paginate = _this$props4.paginate,
          page = _this$props4.page;

      var handlePaginate = function handlePaginate(pg) {
        paginate(pg);
      };

      var className = '';
      var color = '';

      if (page < current.totalPages) {
        className = 'arrow';
        color = '#e83948';
      } else {
        className = 'inactivearrow';
        color = '#B4B7BC';
      }

      return /*#__PURE__*/React__default['default'].createElement(ButtonWrap, {
        className: className,
        onClick: function onClick() {
          handlePaginate(page + 1);
        }
      }, /*#__PURE__*/React__default['default'].createElement(SvgWrap, {
        color: color
      }, /*#__PURE__*/React__default['default'].createElement(Icon$1, null)));
    }
  }, {
    key: "renderPages",
    value: function renderPages() {
      var _this$props5 = this.props,
          page = _this$props5.page,
          totalRecords = _this$props5.totalRecords;
      var current = paginate(totalRecords, page, _pageSize, _totalPages);
      var pages = current.pages;
      return /*#__PURE__*/React__default['default'].createElement(Wrap$8, null, pages && pages.length > 1 ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, this.renderBackPageButton(current), pages.map(this.renderPageButton), this.renderNextPageButton(current)) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var type = this.props.type;

      switch (type) {
        case 'paginate':
          return this.renderPages(type);

        case 'more':
          return this.renderMore(type);

        case 'none':
        default:
          return null;
      }
    }
  }]);

  return Pagination;
}(React$1.Component);

function _templateObject2$m() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$m = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n    margin: 1rem 0;\n    color: #666;\n    line-height:170%;\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var paragraphBase = styled.css(_templateObject$n());
var paragraph = styled__default['default'].p(_templateObject2$m(), paragraphBase);

var CheckCircleLight = function CheckCircleLight() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Icon/Check-Circle-Light",
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M32,0 C49.6731351,0 64,14.3268649 64,32 C64,49.6731351 49.6731351,64 32,64 C14.3268649,64 0,49.6731351 0,32 C0,14.3268649 14.3268649,0 32,0 Z M32,59.8709677 C47.4768145,59.8709677 59.8709677,47.3113659 59.8709677,32 C59.8709677,16.5231855 47.3114919,4.12903226 32,4.12903226 C16.5231855,4.12903226 4.12903226,16.6886341 4.12903226,32 C4.12903226,47.4768145 16.6885081,59.8709677 32,59.8709677 Z M50.2748236,24.3921371 L26.9871472,47.4930696 C26.3800403,48.0952621 25.3995716,48.0913558 24.797379,47.484249 L13.7163558,36.3136341 C13.1141633,35.7065272 13.1180696,34.7261845 13.7251764,34.1239919 L14.8244708,33.0335181 C15.4315776,32.4313256 16.4120464,32.4352319 17.0142389,33.0423387 L25.9143145,42.0143649 L47.0035282,21.09438 C47.6106351,20.4921875 48.5909778,20.4959677 49.1931704,21.1030746 L50.2836442,22.202495 C50.8859627,22.8096018 50.8819304,23.7899446 50.2748236,24.3921371 Z",
    id: "\uD83C\uDFA8-Icon-Fill"
  })));
};

var ExclamationCircleLight = function ExclamationCircleLight() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Icon/Exclamation-Circle-Light",
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M32,4.12903226 C16.59375,4.12903226 4.12903226,16.6189516 4.12903226,32 C4.12903226,47.4114163 16.6136593,59.8709677 32,59.8709677 C47.4051159,59.8709677 59.8709677,47.3923891 59.8709677,32 C59.8709677,16.5258317 47.3059476,4.12903226 32,4.12903226 Z M32,0 C49.671875,0 64,14.3332913 64,32 C64,49.6770413 49.671875,64 32,64 C14.328125,64 0,49.6770413 0,32 C0,14.3332913 14.328125,0 32,0 Z M30.5173891,15.483871 L33.4824849,15.483871 C34.3627772,15.483871 35.0661542,16.2169859 35.0294859,17.0967742 L34.1262601,38.7741935 C34.0917339,39.6035786 33.4094002,40.2580645 32.5792591,40.2580645 L31.4206149,40.2580645 C30.5905998,40.2580645 29.9081401,39.6034526 29.8734879,38.7741935 L28.9702621,17.0967742 C28.9338458,16.2169859 29.6369708,15.483871 30.5173891,15.483871 Z M32,42.8387097 C33.9953377,42.8387097 35.6129032,44.4562752 35.6129032,46.4516129 C35.6129032,48.4469506 33.9953377,50.0645161 32,50.0645161 C30.0046623,50.0645161 28.3870968,48.4469506 28.3870968,46.4516129 C28.3870968,44.4562752 30.0046623,42.8387097 32,42.8387097 Z",
    id: "\uD83C\uDFA8-Icon-Fill"
  })));
};

var TimesCircleLight = function TimesCircleLight() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Icon/Times-Circle-Light",
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M32,0 C49.6774194,0 64,14.3225806 64,32 C64,49.6774194 49.6774194,64 32,64 C14.3225806,64 0,49.6774194 0,32 C0,14.3225806 14.3225806,0 32,0 Z M32,59.8709677 C47.4710181,59.8709677 59.8709677,47.3161542 59.8709677,32 C59.8709677,16.5289819 47.3161542,4.12903226 32,4.12903226 C16.5289819,4.12903226 4.12903226,16.6838458 4.12903226,32 C4.12903226,47.4710181 16.6838458,59.8709677 32,59.8709677 Z M44.2322329,23.0580897 L35.2903226,32 L44.2322329,40.9419103 C44.8387097,41.5483871 44.8387097,42.5289819 44.2322329,43.1354587 L43.1354587,44.2322329 C42.5289819,44.8387097 41.5483871,44.8387097 40.9419103,44.2322329 L32,35.2903226 L23.0580897,44.2322329 C22.4516129,44.8387097 21.4710181,44.8387097 20.8645413,44.2322329 L19.7677671,43.1354587 C19.1612903,42.5289819 19.1612903,41.5483871 19.7677671,40.9419103 L28.7096774,32 L19.7677671,23.0580897 C19.1612903,22.4516129 19.1612903,21.4710181 19.7677671,20.8645413 L20.8645413,19.7677671 C21.4710181,19.1612903 22.4516129,19.1612903 23.0580897,19.7677671 L32,28.7096774 L40.9419103,19.7677671 C41.5483871,19.1612903 42.5289819,19.1612903 43.1354587,19.7677671 L44.2322329,20.8645413 C44.8258569,21.4710181 44.8258569,22.4516129 44.2322329,23.0580897 Z",
    id: "\uD83C\uDFA8-Icon-Fill"
  })));
};

var InfoCircleLight = function InfoCircleLight() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    id: "Icon/Info-Circle-Light",
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M32,4.12903226 C16.59375,4.12903226 4.12903226,16.6189516 4.12903226,32 C4.12903226,47.4114163 16.6136593,59.8709677 32,59.8709677 C47.4051159,59.8709677 59.8709677,47.3923891 59.8709677,32 C59.8709677,16.5258317 47.3059476,4.12903226 32,4.12903226 Z M32,0 C49.671875,0 64,14.3332913 64,32 C64,49.6770413 49.671875,64 32,64 C14.328125,64 0,49.6770413 0,32 C0,14.3332913 14.328125,0 32,0 Z M27.3548387,44.3870968 L28.9032258,44.3870968 L28.9032258,28.9032357 L27.3548387,28.9032357 C26.499748,28.9032357 25.8064516,28.2099294 25.8064516,27.3548387 L25.8064516,26.3225806 C25.8064516,25.4674899 26.499748,24.7741935 27.3548387,24.7741935 L33.5483871,24.7741935 C34.4034778,24.7741935 35.0967742,25.4674899 35.0967742,26.3225806 L35.0967742,44.3870968 L36.6451613,44.3870968 C37.500252,44.3870968 38.1935484,45.0803931 38.1935484,45.9354839 L38.1935484,46.9677419 C38.1935484,47.8228327 37.500252,48.516129 36.6451613,48.516129 L27.3548387,48.516129 C26.499748,48.516129 25.8064516,47.8228327 25.8064516,46.9677419 L25.8064516,45.9354839 C25.8064516,45.0803931 26.499748,44.3870968 27.3548387,44.3870968 Z M32.0000098,13.4193548 C34.2803679,13.4193548 36.1290519,15.2680192 36.1290519,17.5483969 C36.1290519,19.828755 34.2803679,21.677439 32.0000098,21.677439 C29.7196321,21.677439 27.8709677,19.828755 27.8709677,17.5483969 C27.8709677,15.2680192 29.7196321,13.4193548 32.0000098,13.4193548 Z",
    id: "\uD83C\uDFA8-Icon-Fill"
  })));
};

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n    text-align: ", ";\n    margin: 0.5em 0 0.5em 0;\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["\n    width: 1rem;\n    height: 1rem;\n    justify-self: flex-start;\n    margin-right: 15px;\n\n    svg {\n        width: 100%;\n        height: 100%;\n    }\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n    width: 0.8rem;\n    height: 0.8rem;\n\n    svg {\n        width: 100%;\n        height: 100%;\n    }\n    &:hover {\n        opacity: 0.8;\n    }\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$9() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$n() {
  var data = _taggedTemplateLiteral(["\n    font-size: 0.9em;\n    color: ", ";\n    text-align: left;\n    flex-grow: 1;\n"]);

  _templateObject2$n = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: nowrap;\n    padding: 15px 30px 15px 15px;\n    margin-bottom: 30px;\n    font-size: 1rem;\n    color: ", ";\n    border-radius: 0.45em;\n    width: 100%;\n    background-color: ", ";\n    border: 0.15rem solid ", ";\n    justify-content: space-between;\n    align-items: center;\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var ResponseBoxText = styled__default['default'].div(_templateObject$o(), function (props) {
  return darken(0.25, props.borderColor);
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.borderColor;
});
var TextWrap = styled__default['default'].p(_templateObject2$n(), function (props) {
  return darken(0.25, props.color);
});
var LeftDiv = styled__default['default'].div(_templateObject3$9());
var XWrap = styled__default['default'].button(_templateObject4$6());
var IconWrap = styled__default['default'].div(_templateObject5$4());
var ResponseBoxStyled = styled__default['default'].div(_templateObject6$2(), function (props) {
  return props.align;
});

var ResponseBox = function ResponseBox(props) {
  var type = props.type,
      children = props.children,
      clearResponseBox = props.clearResponseBox,
      data = props.data,
      className = props.className;
  var colorDictionary = {
    "default": {
      backgroundColor: '#E8E9EB',
      borderColor: '#9397A2'
    },
    success: {
      backgroundColor: '#EBF6E0',
      borderColor: '#9ED464'
    },
    danger: {
      backgroundColor: '#FBE1E3',
      borderColor: '#ED6C76'
    },
    warning: {
      backgroundColor: '#FEF4E2',
      borderColor: '#FACD74'
    },
    info: {
      backgroundColor: '#DFF1F6',
      borderColor: '#7BC5DA'
    }
  };

  function onXClick(customData) {
    if (data === 'undefined') {
      clearResponseBox();
    } else {
      clearResponseBox(customData);
    }
  }

  var color = colorDictionary[type] || colorDictionary["default"];

  var Icon = function Icon() {
    return /*#__PURE__*/React__default['default'].createElement(InfoCircleLight, null);
  };

  if (type === 'success') {
    Icon = function Icon() {
      return /*#__PURE__*/React__default['default'].createElement(CheckCircleLight, null);
    };
  } else if (type === 'danger') {
    Icon = function Icon() {
      return /*#__PURE__*/React__default['default'].createElement(TimesCircleLight, null);
    };
  } else if (type === 'warning') {
    Icon = function Icon() {
      return /*#__PURE__*/React__default['default'].createElement(ExclamationCircleLight, null);
    };
  } else if (type === 'default' || type === 'info') {
    Icon = function Icon() {
      return /*#__PURE__*/React__default['default'].createElement(InfoCircleLight, null);
    };
  }

  var XButton = function XButton() {
    return null;
  };

  if (clearResponseBox !== undefined) {
    XButton = function XButton() {
      return /*#__PURE__*/React__default['default'].createElement(XWrap, {
        color: color.borderColor,
        onClick: function onClick() {
          return onXClick(data);
        }
      }, /*#__PURE__*/React__default['default'].createElement(Times, null));
    };
  }

  return /*#__PURE__*/React__default['default'].createElement(ResponseBoxStyled, {
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(ResponseBoxText, {
    backgroundColor: color.backgroundColor,
    borderColor: color.borderColor
  }, /*#__PURE__*/React__default['default'].createElement(LeftDiv, null, /*#__PURE__*/React__default['default'].createElement(IconWrap, {
    color: color.borderColor
  }, /*#__PURE__*/React__default['default'].createElement(Icon, null)), /*#__PURE__*/React__default['default'].createElement(TextWrap, {
    color: color.borderColor
  }, children)), /*#__PURE__*/React__default['default'].createElement(XButton, null)));
};

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n    overflow: auto;\n    margin-bottom: 15px;\n\n    td,\n    th {\n        white-space: nowrap;\n    }\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n\n    .iconWrap {\n        box-shadow: ", ";\n    }\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n    opacity: ", ";\n    border-radius: ", ";\n    min-height: 50px;\n\n    td:first-child,\n    th:first-child {\n        border-radius: ", " 0 0 ", ";\n    }\n\n    td:last-child,\n    th:last-child {\n        border-radius: 0 ", " ", " 0;\n        text-align: right;\n        position: sticky;\n        right: 0px;\n        border-left: 1px;\n        padding: 10px 15px;\n    }\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$o() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n    width: 100%;\n    margin-bottom: 30px;\n    color: ", ";\n    border-collapse: separate;\n    border-spacing: 0 0.3rem;\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n"]);

  _templateObject2$o = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$p() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px 15px;\n    background: ", ";\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}

var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var TableElementBase = styled.css(_templateObject$p(), function (props) {
  return props.background ? props.background : props.theme.main.boxBackground;
});
var TableBase = styled.css(_templateObject2$o(), function (props) {
  return props.theme.main.color;
});
var TrBase = styled.css(_templateObject3$a(), function (props) {
  return props.opacity ? props.opacity : 1;
}, function (props) {
  return props.theme.main.borderRadius;
}, function (props) {
  return props.theme.main.borderRadius;
}, function (props) {
  return props.theme.main.borderRadius;
}, function (props) {
  return props.theme.main.borderRadius;
}, function (props) {
  return props.theme.main.borderRadius;
});
var TableStyled = styled__default['default'].table(_templateObject4$7(), TableBase, function (p) {
  return p.overflowed ? "-5px 0 8px -5px ".concat(p.theme.rowComponent.actionShadow) : 'none';
});
var ResponsiveTable = styled__default['default'].div(_templateObject5$5());

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);
    _this.state = {
      overflowed: false
    };
    _this.responsiveTable = /*#__PURE__*/React__default['default'].createRef();
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.handleScroll();
      }, 200);
      window.addEventListener('resize', debounce(this.handleScroll));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      // console.log(e);
      var overflowed = false;
      var elem = this.responsiveTable.current;
      console.log(elem.offsetWidth, elem.scrollWidth, elem.scrollLeft);

      if (elem.offsetWidth < elem.scrollWidth && elem.offsetWidth + elem.scrollLeft < elem.scrollWidth) {
        overflowed = true;
      }

      this.setState(function () {
        return {
          overflowed: overflowed
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          paginate = _this$props.paginate,
          totalRecords = _this$props.totalRecords,
          page = _this$props.page,
          type = _this$props.type;
      var overflowed = this.state.overflowed;
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(ResponsiveTable, {
        onScroll: this.handleScroll,
        ref: this.responsiveTable
      }, /*#__PURE__*/React__default['default'].createElement(TableStyled, {
        overflowed: overflowed
      }, children)), /*#__PURE__*/React__default['default'].createElement(Pagination, {
        paginate: paginate,
        page: page,
        totalRecords: totalRecords,
        type: type
      }));
    }
  }]);

  return Table;
}(React__default['default'].Component);

function _templateObject$q() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var TrStyled = styled__default['default'].tr(_templateObject$q(), TrBase);

var Tr = function Tr(_ref) {
  var children = _ref.children,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? null : _ref$background,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 1 : _ref$opacity,
      _ref$stickyActions = _ref.stickyActions,
      stickyActions = _ref$stickyActions === void 0 ? true : _ref$stickyActions,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      rest = _objectWithoutProperties(_ref, ["children", "background", "opacity", "stickyActions", "className"]);

  return /*#__PURE__*/React__default['default'].createElement(TrStyled, _extends({
    className: className,
    background: background,
    opacity: opacity,
    stickyActions: stickyActions
  }, rest), children);
};

function _templateObject$r() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    text-align: ", ";\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var TdStyled = styled__default['default'].td(_templateObject$r(), TableElementBase, function (props) {
  return props.align ? props.align : null;
});

var Td = function Td(_ref) {
  var children = _ref.children,
      align = _ref.align,
      className = _ref.className;
  return /*#__PURE__*/React__default['default'].createElement(TdStyled, {
    className: className,
    align: align
  }, children);
};

function _templateObject$s() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    padding: 15px 15px;\n"]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var ThStyled = styled__default['default'].th(_templateObject$s(), TableElementBase);

var Th = function Th(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React__default['default'].createElement(ThStyled, {
    className: className
  }, children);
};

exports.Background = Background;
exports.Button = ButtonWrap;
exports.CheckBox = CheckBox;
exports.Chip = Chip;
exports.ChipInput = Chip$1;
exports.ChipSelect = ChipSelect;
exports.ColumnContainer = ColumnContainer$1;
exports.Content = Content$1;
exports.Field = Field$2;
exports.Form = Form;
exports.GridContainer = GridContainer$1;
exports.Header = Header$1;
exports.Hidden = Hidden;
exports.Label = Label;
exports.LoaderBar = LoaderBar;
exports.LoaderSpinner = Loader;
exports.Marquee = Marquess;
exports.Mast = index;
exports.Modal = ModalContainer;
exports.Pagination = Pagination;
exports.Paragraph = paragraph;
exports.Pod = Pod$1;
exports.PositionContainer = PositionContainer$1;
exports.Radio = Radio;
exports.ResponseBox = ResponseBox;
exports.Select = Select$1;
exports.Table = Table;
exports.Td = Td;
exports.Th = Th;
exports.TimeSelect = TimeSelect;
exports.Tr = Tr;
//# sourceMappingURL=index.js.map
