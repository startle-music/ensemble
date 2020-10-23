Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
  var data = _taggedTemplateLiteral(["\n    ", "\n    background-color: ", ";\n    border-color: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    background: transparent;\n    color: ", ";\n    border-color: transparent;\n    box-shadow: none;\n"]);

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
  var data = _taggedTemplateLiteral(["\n    ", "\n    border: 0px;\n    padding: 0.4rem 0rem;\n    width:29px\n    \n    background: ", ";\n    color: ", ";\n\n    /*color: ", ";*/\n/*    background: ", ";*/\n    border-radius: 0.18rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s linear;\n\n    &:hover {\n        color: ", ";\n    }\n\n    &:disabled{\n        &:hover{\n            opacity: 0.4;\n            color: ", ";\n        }\n    }\n    \n    &.active {\n        background: ", ";\n        color: ", ";\n    }\n"]);

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
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n\n    &:disabled {\n        opacity: 0.4;\n        cursor: default;\n    }\n\n    &:hover {\n        opacity: 1;\n    }\n    &:active {\n        opacity: 1;\n    }\n"]);

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
var btnFull = styled.css(_templateObject2$2(), function (props) {
  return props.theme.products[props.product || 'default'].button;
}, function (props) {
  return props.theme.products[props.product || 'default'].button;
}, function (props) {
  return props.theme.products[props.product || 'default'].buttonColor;
});
var btnBase = styled.css(_templateObject3$1(), function (props) {
  return props.small === 'true' ? "0.785rem" : "1rem";
}, function (props) {
  return props.type === 'full' ? "block" : "inline-block";
}, function (props) {
  return props.rounded === 'true' ? '10rem' : props.theme.main.borderRadius;
}, function (props) {
  return props.outline === true ? btnOline : btnFull;
});
var LinkBtnBase = styled__default['default'].a(_templateObject4(), btnBase);
var RouteLinkBase = styled__default['default'](reactRouterDom.Link)(_templateObject5(), btnBase);
var SubmitBtnBase = styled__default['default'].button(_templateObject6(), btnBase);
var IconBtnBase = styled__default['default'].button(_templateObject7(), btnBase);
var TableIconBase = styled.css(_templateObject8(), btnBase, function (props) {
  return props.theme.main.background;
}, function (props) {
  return props.theme.main.bodyColor;
}, function (props) {
  return props.product ? props.theme.products[props.product || 'default'].contrast : '#696f7c';
}, function (props) {
  return props.product ? props.theme.products[props.product || 'default'].primary : '#eef0f4';
}, function (props) {
  return props.product && props.theme.products[props.product] ? props.theme.products[props.product].button : props.theme.products["default"].button;
}, function (props) {
  return props.theme.main.bodyColor;
}, function (props) {
  return props.product && props.theme.products[props.product] ? props.theme.products[props.product].button : props.theme.products["default"].button;
}, function (props) {
  return props.product && props.theme.products[props.product] ? props.theme.products[props.product].buttonColor : props.theme.products["default"].buttonColor;
});
var TableIconBtnBase = styled__default['default'].button(_templateObject9(), TableIconBase);
var TableLinkIconBtnBase = styled__default['default'](reactRouterDom.Link)(_templateObject10(), TableIconBase);
var CancelBtnBase = styled__default['default'].button(_templateObject11(), btnBase, function (props) {
  return props.theme.main.bodyColor;
});
var CustomBtnColor = styled__default['default'].button(_templateObject12(), btnBase, function (props) {
  return props.color;
}, function (props) {
  return props.color;
});
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

exports.Background = Background;
exports.Button = ButtonWrap;
//# sourceMappingURL=index.js.map
