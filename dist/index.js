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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf$1(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf$1(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf$1(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */

var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
  "78": "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized$1(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}
/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */


function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}
/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */


var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */


function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */


function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */


function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */


function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
} // Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare


function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */


function darken$1(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(darken$1);
/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */


function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);
/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(transparentize);

var brandColors = {
  simplyRed: '#e83948',
  orangeCrush: '#f7823b',
  yellowSubmarine: '#f9bd45',
  fadeToGrey: '#b7c9db',
  mrBlueSky: '#b3d5e1',
  paintItBlack: '#1C2229',
  blueMonday: '#30a4c5',
  greenDay: '#7cc530',
  purpleRain: '#6033b9'
};
var statusColours = {
  "default": {
    backgroundColor: '#E8E9EB',
    borderColor: '#9397A2',
    textColor: '#1C2229'
  },
  success: {
    backgroundColor: '#EBF6E0',
    borderColor: '#9ED464',
    textColor: '#7CC530'
  },
  danger: {
    backgroundColor: '#FBE1E3',
    borderColor: '#ED6C76',
    textColor: '#E83948'
  },
  warning: {
    backgroundColor: '#FEF4E2',
    borderColor: '#FACD74',
    textColor: '#F7823B'
  },
  info: {
    backgroundColor: '#DFF1F6',
    borderColor: '#7BC5DA',
    textColor: '#30A4C5'
  }
};
var generalColors = {
  lightGrey: '#eef0f4',
  lightBlueGrey: '#787e89',
  midGrey: '#e7e7e7',
  blueGrey: '#6a707d',
  darkGrey: '#696f7c'
  /* nice */
  ,
  white: '#ffffff',
  green: '#7ec17e',
  sliverColor: 'rgb(199,55,71)',
  sliverGradient: 'linear-gradient(90deg, rgba(199,55,71,1) 0%, rgba(223,172,51,1) 20%, rgba(142,182,59,1) 40%, rgba(251,253,254,1) 60%, rgba(102,175,208,1) 80%, rgba(63,83,158,1) 100%)'
};
var appColors = {
  background: generalColors.midGrey,
  color: brandColors.paintItBlack,
  boxBackground: generalColors.white,
  menu: {
    background: generalColors.white,
    color: generalColors.blueGrey,
    title: brandColors.fadeToGrey,
    expanded: {
      background: generalColors.lightGrey,
      color: generalColors.lightBlueGrey
    }
  },
  products: {
    music: {
      primary: brandColors.simplyRed,
      contrast: generalColors.white,
      button: brandColors.blueMonday,
      buttonColor: generalColors.white
    },
    interactive: {
      primary: brandColors.orangeCrush,
      contrast: generalColors.white,
      button: brandColors.purpleRain,
      buttonColor: generalColors.white
    },
    display: {
      primary: brandColors.blueMonday,
      contrast: generalColors.white,
      button: brandColors.yellowSubmarine,
      buttonColor: generalColors.white
    },
    messaging: {
      primary: brandColors.greenDay,
      contrast: generalColors.white,
      button: brandColors.orangeCrush,
      buttonColor: generalColors.white
    },
    rrb: {
      primary: brandColors.purpleRain,
      contrast: generalColors.white,
      button: brandColors.yellowSubmarine,
      buttonColor: generalColors.white
    },
    allWhite: {
      primary: generalColors.white,
      contrast: generalColors.white,
      button: generalColors.white,
      buttonColor: generalColors.white
    },
    grey: {
      primary: brandColors.fadeToGrey,
      contrast: brandColors.paintItBlack,
      button: brandColors.fadeToGrey,
      buttonColor: brandColors.paintItBlack
    },
    positive: {
      primary: brandColors.fadeToGrey,
      contrast: generalColors.white,
      button: brandColors.greenDay,
      buttonColor: generalColors.white
    },
    neutral: {
      primary: brandColors.fadeToGrey,
      contrast: generalColors.white,
      button: brandColors.blueMonday,
      buttonColor: generalColors.white
    },
    negative: {
      primary: brandColors.fadeToGrey,
      contrast: generalColors.white,
      button: brandColors.simplyRed,
      buttonColor: generalColors.white
    },
    text: {
      primary: brandColors.fadeToGrey,
      contrast: brandColors.simplyRed,
      button: generalColors.white,
      buttonColor: brandColors.simplyRed
    },
    "default": {
      primary: brandColors.paintItBlack,
      contrast: generalColors.white,
      button: brandColors.blueMonday,
      buttonColor: generalColors.white
    },
    get: function get() {
      return appColors.products["default"];
    }
  }
};
/**
 * App Theme
 * This default app theme takes the colour scheme and general settings above.
 *
 * NOTE:
 * If further themes are made, they should follow the below format to ensure
 * the theme working with all existing components.
 * To alter the theme in a minor way, try updating above this section only.
 */

var theme = {
  colors: {
    simplyRed: '#e83948',
    orangeCrush: '#f7823b',
    yellowSubmarine: '#f9bd45',
    fadeToGrey: '#b7c9db',
    mrBlueSky: '#b3d5e1',
    paintItBlack: '#1C2229',
    blueMonday: '#30a4c5',
    greenDay: '#7cc530',
    purpleRain: '#6033b9'
  },
  mainColors: brandColors,
  generalColors: generalColors,
  statusColours: statusColours,
  layout: {
    spacing: 1.6
  },
  main: {
    background: appColors.background,
    font: 'MuseoSansReg, sans-serif',
    borderRadius: '0.45rem',
    color: appColors.color,
    bodyColor: generalColors.lightBlueGrey,
    contrastColor: generalColors.white,
    fontSize: '16px',
    boxBackground: appColors.boxBackground
  },
  menu: _objectSpread2({}, appColors.menu),
  text: {
    h1: {
      color: generalColors.white,
      fontSize: '3rem',
      padding: '1rem 0',
      margin: '0'
    },
    h2: {
      color: appColors.color,
      fontSize: '1.5rem',
      padding: '1rem 0',
      margin: '0'
    },
    h3: {
      color: appColors.color,
      fontSize: '1.125rem',
      padding: '0.785rem 0',
      margin: '0'
    },
    h4: {
      color: appColors.color,
      fontSize: '1rem',
      padding: '0.75rem 0',
      margin: '0'
    },
    h5: {
      color: appColors.color,
      fontSize: '0.875rem',
      padding: '0',
      margin: '0'
    },
    h6: {
      color: appColors.color,
      fontSize: '0.875rem',
      fontStyle: 'italic',
      padding: '0',
      margin: '0'
    },
    p: {
      color: appColors.color,
      fontSize: '1rem',
      small: {
        color: appColors.color,
        fontSize: '0.875rem'
      }
    },
    input: {
      background: generalColors.lightGrey,
      color: appColors.color,
      placeholder: curriedDarken(0.12, generalColors.midGrey),
      fontSize: '1rem',
      small: {
        color: appColors.color,
        fontSize: '0.875rem'
      }
    },
    label: {
      color: appColors.color,
      fontSize: '1rem',
      small: {
        color: appColors.color,
        fontSize: '0.875rem'
      }
    },
    help: {
      color: appColors.color,
      fontSize: '1rem',
      small: {
        color: appColors.color,
        fontSize: '0.75rem'
      }
    }
  },
  products: appColors.products,
  feedback: appColors.feedback,
  buttons: _objectSpread2({}, appColors.buttons),
  containers: {},
  mast: {},
  primaryNav: {},
  selectionPanel: {
    background: generalColors.lightGrey,
    color: appColors.products["default"].primary,
    active: {
      background: appColors.products["default"].primary,
      color: generalColors.white
    }
  },
  nowPlaying: {
    artistColor: generalColors.blueGrey,
    loaderColor: brandColors.simplyRed,
    volumeMain: brandColors.simplyRed,
    volumeBg: brandColors.fadeToGrey
  },
  rowComponent: {
    actionShadow: generalColors.lightBlueGrey
  },
  pagination: {
    color: generalColors.lightBlueGrey
  },
  toast: {
    background: generalColors.white,
    color: generalColors.lightBlueGrey,
    highlight: {
      success: brandColors.greenDay,
      danger: brandColors.simplyRed,
      warning: brandColors.yellowSubmarine,
      "default": generalColors.lightBlueGrey,
      information: brandColors.blueMonday
    }
  },
  dashboard: {
    online: brandColors.greenDay,
    offline: brandColors.simplyRed,
    fetching: generalColors.lightBlueGrey
  }
};

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    user-select: none;\n\n    > *:first-child {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n    }\n\n    > *:not(:first-child) {\n        opacity: 0;\n    }\n"]);

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
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    padding: ", ";\n    font-size: ", ";\n    text-decoration: none;\n    position: relative;\n    display: ", ";\n    text-align: center;\n    box-sizing: border-box;\n    font-weight: 600;\n    border-radius: ", ";\n    cursor: pointer;\n    box-shadow: none;\n    \n    background: ", ";\n    border: 2px solid ", ";\n    color: ", ";\n\n    &:disabled, &:disabled:hover, &:disabled:active  {\n        opacity: 0.4;\n        cursor: default;\n        user-select: none;\n        pointer-events: none;\n    }\n\n    &:hover {\n        background: ", ";\n        border: 2px solid ", ";\n        color: ", ";\n    }\n    &:active {\n        background: ", ";\n        border: 2px solid ", ";\n        color: ", ";\n    }\n\n    /* if a button is followed by a button add left margin to the trailing button */\n    &+button, &+a {\n        margin-left: 0.4rem;\n    }\n\n    svg {\n        fill: currentColor;\n        height: 1.1rem;\n        width: 1em;\n    }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var btnBase = styled.css(_templateObject$1(), theme.main.font, function (_ref) {
  var small = _ref.small;
  return small === true ? "0.6rem 0.9rem" : "0.7rem 1rem";
}, function (_ref2) {
  var small = _ref2.small;
  return small === true ? "0.785rem" : "1rem";
}, function (_ref3) {
  var block = _ref3.block;
  return block === true ? "block" : "inline-block";
}, function (_ref4) {
  var rounded = _ref4.rounded;
  return rounded === true ? '2rem' : '0.5rem';
}, function (_ref5) {
  var backgroundColour = _ref5.backgroundColour;
  return backgroundColour;
}, function (_ref6) {
  var borderColour = _ref6.borderColour;
  return borderColour;
}, function (_ref7) {
  var buttonColour = _ref7.buttonColour;
  return buttonColour;
}, function (props) {
  return curriedLighten(0.15, props.backgroundColour);
}, function (props) {
  return curriedLighten(0.15, props.borderColour);
}, function (props) {
  return curriedLighten(0.15, props.buttonColour);
}, function (props) {
  return curriedDarken(0.05, props.activeBackgroundColour);
}, function (props) {
  return curriedDarken(0.05, props.borderColour);
}, function (props) {
  return curriedDarken(0.05, props.buttonColour);
});
var BaseButton = styled__default['default'].button(_templateObject2$1(), btnBase);
var RouteLinkBase = styled__default['default'].a(_templateObject3$1(), btnBase);
var InputButtonBase = styled__default['default'].input(_templateObject4(), btnBase);

var RouteLinkButton = function RouteLinkButton(props) {
  var children = props.children,
      to = props.to; // should href be to and import nextjs route link component?

  return /*#__PURE__*/React__default['default'].createElement(RouteLinkBase, _extends({
    href: to
  }, props), children);
};

var LinkButton = function LinkButton(props) {
  var children = props.children,
      href = props.href; // should href be to and import nextjs route link component?

  return /*#__PURE__*/React__default['default'].createElement(RouteLinkBase, _extends({
    href: href
  }, props), children);
};

var LoadingWrap = styled__default['default'].div(_templateObject5());

var calculateColours = function calculateColours(colour, outline) {
  var mainColors = theme.mainColors,
      generalColors = theme.generalColors;
  var mainColour = mainColors.simplyRed;
  var activeMainColour = mainColors.simplyRed;
  var altColour = generalColors.white; // check main colours for this colour name

  if (mainColors[colour]) {
    mainColour = mainColors[colour];
    activeMainColour = mainColors[colour];
  }

  if (colour === 'transparent' || colour.startsWith('#') || colour.startsWith('rgb')) {
    mainColour = colour;
    activeMainColour = colour;

    if (colour === 'transparent') {
      activeMainColour = generalColors.white;
    }
  }

  switch (mainColour) {
    case 'transparent':
      altColour = mainColors.simplyRed;
      break;

    case mainColors.fadeToGrey:
    case mainColors.mrBlueSky:
      altColour = generalColors.white;
      break;

    case 'default':
      mainColour = mainColors.simplyRed;
      altColour = generalColors.white;
      break;
  }

  var colourObject = {
    buttonColour: altColour,
    backgroundColour: mainColour,
    activeBackgroundColour: activeMainColour,
    borderColour: mainColour
  };

  if (outline === true) {
    colourObject.buttonColour = mainColour;
    colourObject.backgroundColour = altColour;
    colourObject.activeBackgroundColour = altColour;
    colourObject.borderColour = mainColour;
  }

  return colourObject;
};

var Button = function Button(props) {
  var children = props.children,
      _props$loading = props.loading,
      _props$message = props.message,
      _props$colour = props.colour,
      colour = _props$colour === void 0 ? 'default' : _props$colour,
      _props$outline = props.outline,
      outline = _props$outline === void 0 ? false : _props$outline,
      _props$to = props.to,
      to = _props$to === void 0 ? false : _props$to,
      _props$href = props.href,
      href = _props$href === void 0 ? false : _props$href;
  var content = children;

  var attributes = _objectSpread2(_objectSpread2({}, props), calculateColours(colour, outline)); // 


  if (to !== false) {
    return /*#__PURE__*/React__default['default'].createElement(RouteLinkButton, attributes, content);
  }

  if (href !== false) {
    return /*#__PURE__*/React__default['default'].createElement(LinkButton, attributes, content);
  }

  return /*#__PURE__*/React__default['default'].createElement(BaseButton, attributes, content);
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

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    display: inline-flex;\n    border-radius: 10.325em;\n    margin: 0 0.325em 0 0;\n    overflow: hidden;\n    background: ", ";\n    color: ", ";\n    align-items: center;\n\n    input,\n    input:checked {\n        display: none;\n    }\n\n    label {\n        padding: 0.5em 0.75em;\n        color: inherit;\n        cursor: pointer;\n\n        &:focus {\n            background: rgba(0, 0, 0, 0.175);\n        }\n    }\n\n    button {\n        display: inline-block;\n        padding: 1em 0.6em 0.3em 0.5em;\n        width: 1.7em;\n        box-sizing: border-box;\n        background: rgba(40, 40, 40, 0.075);\n        cursor: pointer;\n        border: 0px;\n\n        svg {\n            width: 100%;\n            height: 100%;\n            color: white;\n            fill: white;\n        }\n    }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$1 = styled__default['default'].div(_templateObject$2(), theme.main.font, function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
});

var renderClose = function renderClose(onRemove, data) {
  console.log('onRemove', onRemove);

  if (onRemove === null) {
    return null;
  }

  var label = data.label,
      name = data.name,
      value = data.value;
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

function calculateTextColour(textColor) {
  var color = 'white';

  if (textColor !== null) {
    color = textColor;
  }

  return color;
}

var Chip = function Chip(_ref3) {
  var label = _ref3.label,
      value = _ref3.value,
      _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? null : _ref3$name,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'red' : _ref3$color,
      _ref3$textColor = _ref3.textColor,
      textColor = _ref3$textColor === void 0 ? null : _ref3$textColor,
      _ref3$onClick = _ref3.onClick,
      onClick = _ref3$onClick === void 0 ? null : _ref3$onClick,
      _ref3$onRemove = _ref3.onRemove,
      onRemove = _ref3$onRemove === void 0 ? null : _ref3$onRemove;
  var chipName = name;

  if (name === null) {
    chipName = "chip-name-".concat(label);
  }

  var onClickFunction = defaultOnClick;

  if (onClick !== null) {
    onClickFunction = onClick;
  }

  var textColour = calculateTextColour(textColor);
  return /*#__PURE__*/React__default['default'].createElement(Wrap$1, {
    backgroundColor: color,
    color: textColour
  }, /*#__PURE__*/React__default['default'].createElement("label", {
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

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    border-radius: ", ";\n    border: ", ";\n    margin: ", ";\n    min-width:300px;\n    width: 100%;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var podBase = styled.css(_templateObject$3(), function (props) {
  return props.theme.containers.background || '';
}, function (props) {
  return props.theme.main.borderRadius || '';
}, function (props) {
  return props.theme.containers.border || '';
}, function (props) {
  return props.theme.containers.podSeperator || 0;
});
var Pod = styled__default['default'].article(_templateObject2$2(), podBase);

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    justify-content: ", ";\n    align-items: ", ";\n    flex-direction: ", ";\n    width: 100%;\n    overflow-x: auto;\n    ", "\n    \n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var PositionContainerBase = styled.css(_templateObject$4(), function (props) {
  return props.align || 'center';
}, function (props) {
  return props.position || 'center';
}, function (props) {
  return props.column || 'column';
}, function (props) {
  return props.image ? "\n            background-image: url(".concat(props.image, ");\n            background-position: ").concat(props.imagePosition || 'left', "; \n            background-size: ").concat(props.imageSize || 'cover', ";\n            background-repeat: no-repeat; \n        ") : " ";
});
var PositionContainer = styled__default['default'].div(_templateObject2$3(), PositionContainerBase);

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: ", ";\n    box-sizing: border-box;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var HeaderBase = styled.css(_templateObject$5(), function (props) {
  return props.theme.containers.padding;
});
var Header = styled__default['default'].header(_templateObject2$4(), HeaderBase);

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
var ContentBase = styled.css(_templateObject$6(), function (props) {
  return props.theme.containers.padding;
});
var Content = styled__default['default'].div(_templateObject2$5(), ContentBase);

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    width: 100%;\n    background: ", ";\n    flex-direction: column;\n    flex: ", ";\n    justify-content: center;\n    ", "\n    \n    @media(max-width:500px){\n        flex-direction: column;    \n        ", "\n    }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var ColumnContainerBase = styled.css(_templateObject$7(), function (props) {
  return props.theme.containers.background;
}, function (props) {
  return props.size || 1;
}, function (props) {
  return props.image ? "\n            height: 100%;\n            background-image: url(".concat(props.image, ");\n            background-size: ").concat(props.imageSize || "cover", ";\n            background-repeat: no-repeat; \n            background-position: ").concat(props.imagePos || "center center", " ;\n        ") : " ";
}, function (props) {
  return props.mobile === false ? "\n                display:none;\n            " : "";
});
var ColumnContainer = styled__default['default'].div(_templateObject2$6(), ColumnContainerBase);

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    position: relative;\n    padding: 5.5rem 0;\n    ", "\n\n    @media(max-width:500px){\n        flex-direction: column;\n    }\n    "]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var GridContainerBase = styled.css(_templateObject$8(), function (props) {
  return props.image ? "\n            \n            background-image: url(".concat(props.image, ");\n            background-size: ").concat(props.imageSize || 'cover', ";\n            background-repeat: no-repeat; \n            background-position:  ").concat(props.imagePos || 'cover', ";\n        ") : " ";
});
var GridContainer = styled__default['default'].div(_templateObject2$7(), GridContainerBase);

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
      }, children, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Button, {
        product: "positive",
        type: "submit-modal"
      }, buttonText)));
    }
  }]);

  return Form;
}(React$1.Component);

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    min-width: 10rem;\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    background: ", ";\n    border-radius: 0.45rem;\n    box-shadow: none;\n    &:first-child {\n        margin-left: 0;\n    }\n    &:last-child {\n        margin-right: 0;\n    }\n    &:after {\n        content: '';\n        display: block;\n        position: absolute;\n        right: 10px;\n        top: 37%;\n        z-index: 100;\n        box-sizing: border-box;\n        height: 0.5rem;\n        width: 0.5rem;\n        border-style: solid;\n        border-color: #787e89;\n        border-width: 0px 2px 2px 0px;\n        transform: rotate(45deg);\n        transition: border-width 150ms ease-in-out;\n        pointer-events: none;\n\n    }\n    @supports (-moz-appearance: none) {\n        select {\n            -moz-appearance: none;\n            text-indent: 0.01px;\n            text-overflow: '';\n        }\n    }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n    appearance: none;\n    -webkit-appearance: none;\n    background: transparent;\n    display: block;\n    width: 100%;\n    box-shadow: none;\n    appearance: none;\n    -webkit-appearance: none;\n    background: transparent;\n    border: none;\n    padding: 0.875rem 0.6rem;\n\n    &:focus {\n        outline: none;\n    }\n\n    option {\n        background: ", ";\n        padding: 0.875rem 0.6rem;\n        font-family: MuseoSans, sans-serif;\n        color: ", ";\n    }\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n    font-weight: bold;\n    margin-bottom: 0.75rem;\n    color: ", ";\n    text-align: left;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var Text = styled__default['default'].label(_templateObject$9(), theme.mainColors.paintItBlack);
var Wrapper = styled__default['default'].div(_templateObject2$8());
var Dropdown = styled__default['default'].select(_templateObject3$2(), function (props) {
  return theme.text.input.background;
}, function (props) {
  return theme.generalColors.lightBlueGrey;
});
var StyledSelect = styled__default['default'].div(_templateObject4$1(), function (props) {
  return theme.text.input.background;
});

var Label = function Label(_ref) {
  var children = _ref.children;
  return children ? /*#__PURE__*/React__default['default'].createElement(Text, null, children) : null;
};

var SelectInput = function SelectInput(_ref2) {
  var value = _ref2.value,
      name = _ref2.name,
      children = _ref2.children,
      label = _ref2.label,
      _ref2$onChange = _ref2.onChange,
      onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange;
  return /*#__PURE__*/React__default['default'].createElement(Wrapper, null, /*#__PURE__*/React__default['default'].createElement(Label, {
    htmlFor: name
  }, label), /*#__PURE__*/React__default['default'].createElement(StyledSelect, null, /*#__PURE__*/React__default['default'].createElement(Dropdown, {
    value: value,
    name: name,
    onChange: onChange
  }, children)));
};

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
  return theme.main.color;
});
var Label$1 = styled__default['default'].label(_templateObject2$9(), labelBase, function (props) {
  return props.margin || 0;
}, function (_ref) {
  var block = _ref.block;
  return block ? 'block' : 'inline-block';
});

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    -webkit-appearance: none;\n    padding: 0;\n    border-radius: 10rem;\n    display: inline-flex;\n    position: relative;\n    justify-content: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    align-items: center;\n    margin: 0;\n    margin-right: 5px;\n    background: ", ";\n\n    &:active,\n    &:checked:active {\n        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n    }\n\n    &:checked {\n        background-color: #ffffff;\n        color: #ffffff;\n        box-shadow: inset 0 0 0 0.4rem #e83948;\n    }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n    padding: 0;\n    line-height: 1.5rem;\n    display: inline-flex;\n    align-items: center;\n    opacity: ", ";\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    display: ", ";\n    margin-right: ", ";\n    margin-bottom: 0.8rem;\n    align-items: center;\n    font-family: MuseoSansReg, sans-serif;\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var Radio = styled__default['default'].div(_templateObject$b(), function (props) {
  return props.inline ? 'inline-flex' : 'flex';
}, function (props) {
  return props.inline ? '0.8rem' : 0;
});
var PaddedLabel = styled__default['default'](Label$1)(_templateObject2$a(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? '0.4' : '1';
});
var RadioInput = styled__default['default'].input(_templateObject3$3(), function (props) {
  return theme.text.input.background;
});

var RadioComponent = function RadioComponent(_ref2) {
  var name = _ref2.name,
      label = _ref2.label,
      required = _ref2.required,
      checked = _ref2.checked,
      _ref2$inline = _ref2.inline,
      inline = _ref2$inline === void 0 ? false : _ref2$inline,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      value = _ref2.value,
      _ref2$margin = _ref2.margin,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$defaultChecked = _ref2.defaultChecked,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? false : _ref2$id,
      rest = _objectWithoutProperties(_ref2, ["name", "label", "required", "checked", "inline", "disabled", "value", "margin", "className", "defaultChecked", "id"]);

  return /*#__PURE__*/React__default['default'].createElement(Radio, {
    inline: inline,
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(PaddedLabel, {
    margin: true,
    htmlFor: id,
    disabled: disabled
  }, /*#__PURE__*/React__default['default'].createElement(RadioInput, _extends({
    type: "radio",
    checked: checked,
    disabled: disabled,
    value: value,
    name: name,
    id: id || name,
    required: required,
    defaultChecked: checked
  }, rest)), label));
};

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n    -webkit-appearance: none;\n    padding: 0;\n    border-radius: 3px;\n    display: inline-flex;\n    position: absolute;\n    left: 0;\n    top: 0;\n    justify-content: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    align-items: center;\n    margin-right: 5px;\n    background: ", ";\n\n    &:active,\n    &:checked:active {\n        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n    }\n    &:disabled {\n        box-shadow: none;\n    }\n\n    &:checked {\n        background-color: #e83948;\n        color: #ffffff;\n    }\n\n    &:checked:after {\n        content: '\\2714';\n        font-family: 'MuseoSansReg', sans-serif;\n        color: #ffffff;\n        font-size: 1.1rem;\n    }\n"], ["\n    -webkit-appearance: none;\n    padding: 0;\n    border-radius: 3px;\n    display: inline-flex;\n    position: absolute;\n    left: 0;\n    top: 0;\n    justify-content: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    align-items: center;\n    margin-right: 5px;\n    background: ", ";\n\n    &:active,\n    &:checked:active {\n        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n    }\n    &:disabled {\n        box-shadow: none;\n    }\n\n    &:checked {\n        background-color: #e83948;\n        color: #ffffff;\n    }\n\n    &:checked:after {\n        content: '\\\\2714';\n        font-family: 'MuseoSansReg', sans-serif;\n        color: #ffffff;\n        font-size: 1.1rem;\n    }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.25rem 0 0.25rem 2.25rem;\n    line-height: 1.5rem;\n    position: relative;\n    opacity: ", ";\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    display: ", ";\n    margin-right: ", ";\n    margin-bottom: 0.8rem;\n    font-size: 1rem;\n    font-family: MuseoSansReg, sans-serif;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var Checkbox = styled__default['default'].div(_templateObject$c(), function (props) {
  return props.inline ? 'inline-flex' : 'flex';
}, function (props) {
  return props.inline ? '0.8rem' : 0;
});
var PaddedLabel$1 = styled__default['default'](Label$1)(_templateObject2$b(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? '0.4' : '1';
});
var CheckboxInput = styled__default['default'].input(_templateObject3$4(), function (props) {
  return theme.text.input.background;
});

var CheckboxComponent = function CheckboxComponent(_ref2) {
  var name = _ref2.name,
      id = _ref2.id,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? null : _ref2$label,
      required = _ref2.required,
      checked = _ref2.checked,
      value = _ref2.value,
      _ref2$inline = _ref2.inline,
      inline = _ref2$inline === void 0 ? false : _ref2$inline,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? null : _ref2$className,
      rest = _objectWithoutProperties(_ref2, ["name", "id", "label", "required", "checked", "value", "inline", "disabled", "className"]);

  return /*#__PURE__*/React__default['default'].createElement(Checkbox, {
    inline: inline,
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(PaddedLabel$1, {
    htmlFor: id,
    disabled: disabled
  }, /*#__PURE__*/React__default['default'].createElement(CheckboxInput, _extends({
    type: "checkbox",
    name: name,
    id: id,
    required: required,
    value: value,
    checked: checked,
    disabled: disabled
  }, rest)), label));
};

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
      return /*#__PURE__*/React__default['default'].createElement(Field, null, /*#__PURE__*/React__default['default'].createElement(Label$1, {
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

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-family: MuseoSansReg, sans-serif;\n    font-size: 0.75rem;\n    margin: 0.6rem 0;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    border: 0;\n    padding: 0;\n    margin: 0;\n    background: transparent;\n    font-size: 1rem;\n    padding: 0.8rem 0.4rem;\n    color: inherit;\n    width: 100%;\n\n    &:focus {\n        outline: none;\n    }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-radius: 0.4rem;\n    padding: 0 0.4rem;\n    opacity: ", ";\n\n    &:focus-within {\n        background: ", ";\n        color: ", ";\n    }\n\n    \n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-left: 0.3rem;\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1rem;\n    font-family: MuseoSansReg, sans-serif;\n    padding-bottom: 0.5rem;\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var LabelWrap = styled__default['default'].div(_templateObject$e());
var StyledRequired = styled__default['default'].span(_templateObject2$d());
var Wrap$2 = styled__default['default'].div(_templateObject3$5(), function (_ref) {
  var inputBackground = _ref.inputBackground;
  return inputBackground;
}, function (_ref2) {
  var inputColour = _ref2.inputColour;
  return inputColour;
}, function (_ref3) {
  var _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled;
  return disabled ? '0.4' : '1';
}, function (props) {
  return curriedLighten(0.1, theme.colors.mrBlueSky);
}, function (props) {
  return theme.colors.paintItBlack;
});
var Input = styled__default['default'].input(_templateObject4$2());

var Label$2 = function Label(_ref4) {
  var children = _ref4.children,
      _ref4$required = _ref4.required,
      required = _ref4$required === void 0 ? false : _ref4$required;

  var Required = function Required() {
    return null;
  };

  if (required) {
    Required = function Required() {
      return /*#__PURE__*/React__default['default'].createElement(StyledRequired, null, "*");
    };
  }

  return /*#__PURE__*/React__default['default'].createElement(LabelWrap, null, children, /*#__PURE__*/React__default['default'].createElement(Required, null));
};

var CaptionWrap = styled__default['default'].p(_templateObject5$1(), function (_ref5) {
  var inputColour = _ref5.inputColour;
  return inputColour;
});

var Caption = function Caption(_ref6) {
  var children = _ref6.children,
      inputColour = _ref6.inputColour;

  if (children === null) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(CaptionWrap, {
    inputColour: inputColour
  }, children);
};

var getColours = function getColours(status) {
  var colourObject = {
    inputBackground: theme.text.input.background,
    inputColour: theme.generalColors.darkGrey
  };

  if (theme.statusColours[status]) {
    colourObject.inputBackground = theme.statusColours[status].backgroundColor;
    colourObject.inputColour = theme.statusColours[status].textColor;
  }

  return colourObject;
};
/**
 * 
 * @prop {label} string
 * @returns 
 */


var FieldComponent$1 = function FieldComponent(_ref7) {
  var id = _ref7.id,
      name = _ref7.name,
      _ref7$prepend = _ref7.prepend,
      prepend = _ref7$prepend === void 0 ? null : _ref7$prepend,
      _ref7$append = _ref7.append,
      append = _ref7$append === void 0 ? null : _ref7$append,
      _ref7$label = _ref7.label,
      label = _ref7$label === void 0 ? null : _ref7$label,
      _ref7$type = _ref7.type,
      type = _ref7$type === void 0 ? 'text' : _ref7$type,
      _ref7$caption = _ref7.caption,
      caption = _ref7$caption === void 0 ? null : _ref7$caption,
      _ref7$required = _ref7.required,
      required = _ref7$required === void 0 ? false : _ref7$required,
      _ref7$placeholder = _ref7.placeholder,
      placeholder = _ref7$placeholder === void 0 ? false : _ref7$placeholder,
      _ref7$defaultValue = _ref7.defaultValue,
      defaultValue = _ref7$defaultValue === void 0 ? null : _ref7$defaultValue,
      _ref7$status = _ref7.status,
      status = _ref7$status === void 0 ? null : _ref7$status,
      rest = _objectWithoutProperties(_ref7, ["id", "name", "prepend", "append", "label", "type", "caption", "required", "placeholder", "defaultValue", "status"]);

  var Prepend = function Prepend() {
    return null;
  };

  if (prepend !== null) {
    Prepend = function Prepend() {
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, prepend);
    };
  }

  var Append = function Append() {
    return null;
  };

  if (append !== null) {
    Append = function Append() {
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, append);
    };
  }

  var colours = getColours(status);
  return /*#__PURE__*/React__default['default'].createElement(Label$1, {
    htmlFor: name
  }, label !== null ? /*#__PURE__*/React__default['default'].createElement(Label$2, {
    required: required
  }, label) : null, /*#__PURE__*/React__default['default'].createElement(Wrap$2, _objectSpread2(_objectSpread2({}, rest), colours), /*#__PURE__*/React__default['default'].createElement(Prepend, null), /*#__PURE__*/React__default['default'].createElement(Input, _extends({
    type: type,
    name: name,
    required: required,
    placeholder: placeholder,
    defaultValue: defaultValue,
    id: id
  }, colours, rest)), /*#__PURE__*/React__default['default'].createElement(Append, null)), /*#__PURE__*/React__default['default'].createElement(Caption, colours, caption));
};

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    margin-bottom: 15px;\n    width: 100%;\n    max-width: 26rem;\n\n    input {\n        //border: 1px solid #ccc;\n        border-radius: ", ";\n        font-size: 1rem;\n        padding: 0.875rem 0.6rem;\n        width: 100%;\n    }\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    padding: 0.75rem 0;\n"]);

  _templateObject3$6 = function _templateObject3() {
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
var InputWrap = styled__default['default'].div(_templateObject3$6());
var Form$1 = styled__default['default'].form(_templateObject4$3());
var FieldWrap = styled__default['default'].div(_templateObject5$2(), function (props) {
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
      }, /*#__PURE__*/React__default['default'].createElement(Label$1, {
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

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    max-width: 26rem;\n    margin: 0 0.325rem 0 0;\n\n    input {\n        //border: 1px solid #ccc;\n        border-radius: ", ";\n        font-size: 1rem;\n        padding: 0.875rem 0.6rem;\n        width: 100%;\n    }\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject3$7 = function _templateObject3() {
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
var ChipSelectWrap = styled__default['default'].div(_templateObject3$7());
var InputWrap$1 = styled__default['default'].div(_templateObject4$4());
var FieldWrap$1 = styled__default['default'].div(_templateObject5$3(), function (props) {
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
      }, /*#__PURE__*/React__default['default'].createElement(ChipSelectWrap, null, /*#__PURE__*/React__default['default'].createElement(InputWrap$1, null, /*#__PURE__*/React__default['default'].createElement(Label$1, {
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

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    position: relative;\n    max-width: 26rem;\n    margin: 0 0.325rem 0 0;\n    align-items: center;\n    span {\n        color: #000;\n        padding: 0.25em;\n    }\n    input {\n        //border: 1px solid #ccc;\n        border-radius: ", ";\n        font-size: 1rem;\n        padding: 0.875rem 0.6rem;\n        width: 100%;\n    }\n\n    & > .styled-select {\n        display: flex;\n        color: #000;\n        align-items: center;\n        margin: 0;\n        width: 6em;\n    }\n"]);

  _templateObject3$8 = function _templateObject3() {
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
var FieldWrap$2 = styled__default['default'].div(_templateObject3$8(), function (props) {
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
      }, /*#__PURE__*/React__default['default'].createElement(InputWrap$2, null, /*#__PURE__*/React__default['default'].createElement(Label$1, null, label), /*#__PURE__*/React__default['default'].createElement(FieldWrap$2, null, /*#__PURE__*/React__default['default'].createElement("input", {
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

function _templateObject2$h() {
  var data = _taggedTemplateLiteral(["\n    display:none;\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n    font-family: MuseoSansReg, sans-serif;\n    user-select: none;\n\n    g {\n        cursor: ", ";\n    }\n\n    path {\n        transition: opacity 0.2s linear;\n    }\n\n    text {\n        \n        font-family: MuseoSansReg, sans-serif;\n    }\n\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var THUNDERSTRUCK = 'thunderstruck';
var INVIGORATED = 'invigorated';
var DAZZLED = 'dazzled';
var ANTICIPATORY = 'anticipatory';
var CONTEMPLATIVE = 'contemplative';
var SOOTHING = 'soothing';
var SLEEPY = 'sleepy';
var SERENE = 'serene';
var RELAXED = 'relaxed';
var SATISFIED = 'satisfied';
var MERRY = 'merry';
var DELIGHTED = 'delighted';
var moods = [THUNDERSTRUCK, INVIGORATED, DAZZLED, ANTICIPATORY, CONTEMPLATIVE, SOOTHING, SLEEPY, SERENE, RELAXED, SATISFIED, MERRY, DELIGHTED];
var Wrap$6 = styled__default['default'].div(_templateObject$i(), function (_ref) {
  var readonly = _ref.readonly;
  return readonly ? 'default' : 'pointer';
});
var Radio$1 = styled__default['default'].input(_templateObject2$h());

var handleClick = function handleClick(className, setSelected, parentOnClick) {
  var mood = moods.find(function (obj) {
    return className.includes(obj);
  });
  parentOnClick(mood);
  setSelected(mood);
};

var MoodPath = function MoodPath(_ref2) {
  var d = _ref2.d,
      className = _ref2.className,
      fill = _ref2.fill,
      transform = _ref2.transform,
      _ref2$opacity = _ref2.opacity,
      opacity = _ref2$opacity === void 0 ? 1 : _ref2$opacity,
      selected = _ref2.selected,
      _ref2$adjacent = _ref2.adjacent,
      adjacent = _ref2$adjacent === void 0 ? [] : _ref2$adjacent,
      setSelected = _ref2.setSelected,
      parentOnClick = _ref2.parentOnClick;
  var pathProps = {
    onClick: function onClick() {
      return handleClick(className, setSelected, parentOnClick);
    },
    d: d,
    className: className,
    fill: fill,
    transform: transform,
    opacity: opacity
  };

  if (className.includes('selected')) {
    if (className.includes(selected)) {
      return /*#__PURE__*/React__default['default'].createElement("path", pathProps);
    }

    return /*#__PURE__*/React__default['default'].createElement("path", _objectSpread2(_objectSpread2({}, pathProps), {
      opacity: 0
    })); //return null;
  }

  if (className.includes('adjacent')) {
    if (adjacent.includes(selected)) {
      return /*#__PURE__*/React__default['default'].createElement("path", pathProps);
    }

    return /*#__PURE__*/React__default['default'].createElement("path", _objectSpread2(_objectSpread2({}, pathProps), {
      opacity: 0
    })); //return null;
  }

  return /*#__PURE__*/React__default['default'].createElement("path", pathProps);
};

var MoodSelector = function MoodSelector(_ref3) {
  var _ref3$readonly = _ref3.readonly,
      readonly = _ref3$readonly === void 0 ? false : _ref3$readonly,
      _ref3$defaultValue = _ref3.defaultValue,
      defaultValue = _ref3$defaultValue === void 0 ? null : _ref3$defaultValue,
      _ref3$onMoodClick = _ref3.onMoodClick,
      onMoodClick = _ref3$onMoodClick === void 0 ? function () {} : _ref3$onMoodClick;

  var _useState = React$1.useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var passToAll = {
    setSelected: setSelected,
    selected: selected,
    parentOnClick: onMoodClick
  };

  if (readonly === true) {
    passToAll.parentOnClick = function () {};

    passToAll.setSelected = function () {};
  }

  return /*#__PURE__*/React__default['default'].createElement(Wrap$6, {
    readonly: readonly
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    width: "342px",
    height: "241px",
    viewBox: "0 0 342 241",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "mood-selector"), /*#__PURE__*/React__default['default'].createElement("g", {
    className: "mood-selector",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M143.868238,16.0795885 C162.206084,16.0795885 179.391072,21.0155573 194.167073,29.6313653 L179.077662,55.5659719 C168.734407,49.53482 156.704829,46.0795885 143.868238,46.0795885 L143.868238,16.0795885 L143.868238,16.0795885 Z",
    className: "thunderstruck-adjacent",
    fill: "#E83948",
    transform: "translate(169.017656, 35.822780) rotate(330.000000) translate(-169.017656, -35.822780) ",
    adjacent: [INVIGORATED, DAZZLED]
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M142.449798,10.7858995 C161.704354,10.7858995 179.748433,15.9685687 195.263136,25.0150088 L177.659223,55.2722829 C167.315968,49.2411309 155.286389,45.7858995 142.449798,45.7858995 L142.449798,10.7858995 L142.449798,10.7858995 Z",
    className: "thunderstruck-selected",
    fill: "#E83948",
    transform: "translate(168.856467, 33.029091) rotate(330.000000) translate(-168.856467, -33.029091) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M143.868238,16.0795885 C162.206084,16.0795885 179.391072,21.0155573 194.167073,29.6313653 L179.077662,55.5659719 C168.734407,49.53482 156.704829,46.0795885 143.868238,46.0795885 L143.868238,16.0795885 L143.868238,16.0795885 Z",
    className: "thunderstruck-inactive",
    fill: "#E83948",
    opacity: "0.302818",
    transform: "translate(169.017656, 35.822780) rotate(330.000000) translate(-169.017656, -35.822780) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [THUNDERSTRUCK, ANTICIPATORY],
    d: "M103.82278,36.9823443 C122.160626,36.9823443 139.345614,41.918313 154.121615,50.5341211 L139.032204,76.4687277 C128.688949,70.4375758 116.659371,66.9823443 103.82278,66.9823443 L103.82278,36.9823443 L103.82278,36.9823443 Z",
    className: "dazzled-adjacent",
    fill: "#C5037E",
    transform: "translate(128.972198, 56.725536) rotate(300.000000) translate(-128.972198, -56.725536) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M101.029091,32.1435329 C120.283647,32.1435329 138.327726,37.3262022 153.842428,46.3726422 L136.238515,76.6299163 C125.89526,70.5987644 113.865682,67.1435329 101.029091,67.1435329 L101.029091,32.1435329 L101.029091,32.1435329 Z",
    className: "dazzled-selected",
    fill: "#C5037E",
    transform: "translate(127.435760, 54.386725) rotate(300.000000) translate(-127.435760, -54.386725) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M103.82278,36.9823443 C122.160626,36.9823443 139.345614,41.918313 154.121615,50.5341211 L139.032204,76.4687277 C128.688949,70.4375758 116.659371,66.9823443 103.82278,66.9823443 L103.82278,36.9823443 L103.82278,36.9823443 Z",
    className: "dazzled-inactive",
    fill: "#C5037E",
    opacity: "0.302818",
    transform: "translate(128.972198, 56.725536) rotate(300.000000) translate(-128.972198, -56.725536) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [CONTEMPLATIVE, DAZZLED],
    d: "M79.5937742,75.1073908 C97.9316196,75.1073908 115.116608,80.0433595 129.892609,88.6591676 L114.803198,114.593774 C104.459943,108.562622 92.4303651,105.107391 79.5937742,105.107391 L79.5937742,75.1073908 L79.5937742,75.1073908 Z",
    className: "anticipatory-adjacent",
    fill: "#6D398B",
    transform: "translate(104.743192, 94.850583) rotate(270.000000) translate(-104.743192, -94.850583) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M75.8365231,71.3501397 C95.091079,71.3501397 113.135158,76.532809 128.64986,85.579249 L111.045947,115.836523 C100.702692,109.805371 88.673114,106.35014 75.8365231,106.35014 L75.8365231,71.3501397 L75.8365231,71.3501397 Z",
    className: "anticipatory-selected",
    fill: "#6D398B",
    transform: "translate(102.243192, 93.593331) rotate(270.000000) translate(-102.243192, -93.593331) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M79.5937742,75.1073908 C97.9316196,75.1073908 115.116608,80.0433595 129.892609,88.6591676 L114.803198,114.593774 C104.459943,108.562622 92.4303651,105.107391 79.5937742,105.107391 L79.5937742,75.1073908 L79.5937742,75.1073908 Z",
    className: "anticipatory-inactive",
    fill: "#6D398B",
    opacity: "0.302818",
    transform: "translate(104.743192, 94.850583) rotate(270.000000) translate(-104.743192, -94.850583) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [ANTICIPATORY, SOOTHING],
    d: "M77.6733627,120.239153 C96.0112082,120.239153 113.196196,125.175121 127.972198,133.790929 L112.882787,159.725536 C102.539532,153.694384 90.5099536,150.239153 77.6733627,150.239153 L77.6733627,120.239153 L77.6733627,120.239153 Z",
    className: "contemplative-adjacent",
    fill: "#454E98",
    transform: "translate(102.822780, 139.982344) rotate(240.000000) translate(-102.822780, -139.982344) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M73.6231751,117.900776 C92.8773159,117.900776 110.921032,123.083222 126.435509,132.1293 L108.832599,162.387159 C98.4893444,156.356007 86.459766,152.900776 73.6231751,152.900776 L73.6231751,117.900776 L73.6231751,117.900776 Z",
    className: "contemplative-selected",
    fill: "#454E98",
    transform: "translate(100.029342, 140.143967) rotate(240.000000) translate(-100.029342, -140.143967) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M77.6733627,120.239153 C96.0112082,120.239153 113.196196,125.175121 127.972198,133.790929 L112.882787,159.725536 C102.539532,153.694384 90.5099536,150.239153 77.6733627,150.239153 L77.6733627,120.239153 L77.6733627,120.239153 Z",
    className: "contemplative-inactive",
    fill: "#454E98",
    opacity: "0.302818",
    transform: "translate(102.822780, 139.982344) rotate(240.000000) translate(-102.822780, -139.982344) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [CONTEMPLATIVE, SLEEPY],
    d: "M98.5761185,160.284611 C116.913964,160.284611 134.098952,165.220579 148.874954,173.836387 L133.785543,199.770994 C123.442288,193.739842 111.412709,190.284611 98.5761185,190.284611 L98.5761185,160.284611 L98.5761185,160.284611 Z",
    className: "soothing-adjacent",
    fill: "#2B70B1",
    transform: "translate(123.725536, 180.027802) rotate(210.000000) translate(-123.725536, -180.027802) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M94.980056,159.321049 C114.234612,159.321049 132.27869,164.503718 147.793393,173.550158 L130.18948,203.807432 C119.846225,197.77628 107.816647,194.321049 94.980056,194.321049 L94.980056,159.321049 L94.980056,159.321049 Z",
    className: "soothing-selected",
    fill: "#2B70B1",
    transform: "translate(121.386725, 181.564240) rotate(210.000000) translate(-121.386725, -181.564240) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M98.5761185,160.284611 C116.913964,160.284611 134.098952,165.220579 148.874954,173.836387 L133.785543,199.770994 C123.442288,193.739842 111.412709,190.284611 98.5761185,190.284611 L98.5761185,160.284611 L98.5761185,160.284611 Z",
    className: "soothing-inactive",
    fill: "#2B70B1",
    opacity: "0.302818",
    transform: "translate(123.725536, 180.027802) rotate(210.000000) translate(-123.725536, -180.027802) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [SERENE, SOOTHING],
    d: "M136.701165,184.513617 C155.03901,184.513617 172.223999,189.449585 187,198.065393 L171.910589,224 C161.567334,217.968848 149.537756,214.513617 136.701165,214.513617 L136.701165,184.513617 L136.701165,184.513617 Z",
    className: "sleepy-adjacent",
    fill: "#30A4C5",
    transform: "translate(161.850583, 204.256808) rotate(180.000000) translate(-161.850583, -204.256808) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M134.187666,184.514201 C153.441807,184.514201 171.485523,189.696647 187,198.742725 L169.396088,229 C159.053058,222.969209 147.023842,219.514201 134.187666,219.514201 L134.187666,184.514201 L134.187666,184.514201 Z",
    className: "sleepy-selected",
    fill: "#30A4C5",
    transform: "translate(160.593833, 206.757101) rotate(180.000000) translate(-160.593833, -206.757101) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M136.701165,184.513617 C155.03901,184.513617 172.223999,189.449585 187,198.065393 L171.910589,224 C161.567334,217.968848 149.537756,214.513617 136.701165,214.513617 L136.701165,184.513617 L136.701165,184.513617 Z",
    className: "sleepy-inactive",
    fill: "#30A4C5",
    opacity: "0.302818",
    transform: "translate(161.850583, 204.256808) rotate(180.000000) translate(-161.850583, -204.256808) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [RELAXED, SLEEPY],
    d: "M181.832927,186.434028 C200.170772,186.434028 217.35576,191.369997 232.131762,199.985805 L217.042351,225.920411 C206.699096,219.88926 194.669518,216.434028 181.832927,216.434028 L181.832927,186.434028 L181.832927,186.434028 Z",
    className: "serene-adjacent",
    fill: "#2C8D5A",
    transform: "translate(206.982344, 206.177220) rotate(150.000000) translate(-206.982344, -206.177220) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M180.736864,186.727717 C199.99142,186.727717 218.035499,191.910386 233.550202,200.956826 L215.946288,231.214101 C205.603034,225.182949 193.573455,221.727717 180.736864,221.727717 L180.736864,186.727717 L180.736864,186.727717 Z",
    className: "serene-selected",
    fill: "#2C8D5A",
    transform: "translate(207.143533, 208.970909) rotate(150.000000) translate(-207.143533, -208.970909) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M181.832927,186.434028 C200.170772,186.434028 217.35576,191.369997 232.131762,199.985805 L217.042351,225.920411 C206.699096,219.88926 194.669518,216.434028 181.832927,216.434028 L181.832927,186.434028 L181.832927,186.434028 Z",
    className: "serene-inactive",
    fill: "#2C8D5A",
    opacity: "0.302818",
    transform: "translate(206.982344, 206.177220) rotate(150.000000) translate(-206.982344, -206.177220) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [SERENE, SATISFIED],
    d: "M221.878385,165.531272 C240.21623,165.531272 257.401218,170.467241 272.17722,179.083049 L257.087809,205.017656 C246.744554,198.986504 234.714976,195.531272 221.878385,195.531272 L221.878385,165.531272 L221.878385,165.531272 Z",
    className: "relaxed-adjacent",
    fill: "#7CC530",
    transform: "translate(247.027802, 185.274464) rotate(120.000000) translate(-247.027802, -185.274464) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M222.157572,165.370084 C241.412127,165.370084 259.456206,170.552753 274.970909,179.599193 L257.366996,209.856467 C247.023741,203.825315 234.994163,200.370084 222.157572,200.370084 L222.157572,165.370084 L222.157572,165.370084 Z",
    className: "relaxed-selected",
    fill: "#7CC530",
    transform: "translate(248.564240, 187.613275) rotate(120.000000) translate(-248.564240, -187.613275) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M221.878385,165.531272 C240.21623,165.531272 257.401218,170.467241 272.17722,179.083049 L257.087809,205.017656 C246.744554,198.986504 234.714976,195.531272 221.878385,195.531272 L221.878385,165.531272 L221.878385,165.531272 Z",
    className: "relaxed-inactive",
    fill: "#7CC530",
    opacity: "0.302818",
    transform: "translate(247.027802, 185.274464) rotate(120.000000) translate(-247.027802, -185.274464) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [RELAXED, MERRY],
    d: "M246.107391,127.406226 C264.445236,127.406226 281.630224,132.342195 296.406226,140.958003 L281.316815,166.892609 C270.97356,160.861457 258.943982,157.406226 246.107391,157.406226 L246.107391,127.406226 L246.107391,127.406226 Z",
    className: "satisfied-adjacent",
    fill: "#FFCE01",
    transform: "translate(271.256808, 147.149417) rotate(90.000000) translate(-271.256808, -147.149417) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M247.35014,126.163477 C266.604696,126.163477 284.648774,131.346146 300.163477,140.392586 L282.559564,170.64986 C272.216309,164.618708 260.186731,161.163477 247.35014,161.163477 L247.35014,126.163477 L247.35014,126.163477 Z",
    className: "satisfied-selected",
    fill: "#FFCE01",
    transform: "translate(273.756808, 148.406669) rotate(90.000000) translate(-273.756808, -148.406669) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M246.107391,127.406226 C264.445236,127.406226 281.630224,132.342195 296.406226,140.958003 L281.316815,166.892609 C270.97356,160.861457 258.943982,157.406226 246.107391,157.406226 L246.107391,127.406226 L246.107391,127.406226 Z",
    className: "satisfied-inactive",
    fill: "#FFCE01",
    opacity: "0.302818",
    transform: "translate(271.256808, 147.149417) rotate(90.000000) translate(-271.256808, -147.149417) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [DELIGHTED, SATISFIED],
    d: "M248.027802,82.274464 C266.365648,82.274464 283.550636,87.2104327 298.326637,95.8262407 L283.237226,121.760847 C272.893972,115.729695 260.864393,112.274464 248.027802,112.274464 L248.027802,82.274464 L248.027802,82.274464 Z",
    className: "merry-adjacent",
    fill: "#F9BD45",
    transform: "translate(273.177220, 102.017656) rotate(60.000000) translate(-273.177220, -102.017656) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M249.564744,79.6129871 C268.818885,79.6129871 286.862601,84.7954329 302.377078,93.8415113 L284.773166,124.098786 C274.430136,118.067995 262.40092,114.612987 249.564744,114.612987 L249.564744,79.6129871 L249.564744,79.6129871 Z",
    className: "merry-selected",
    fill: "#F9BD45",
    transform: "translate(275.970911, 101.855886) rotate(60.000000) translate(-275.970911, -101.855886) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M248.027802,82.274464 C266.365648,82.274464 283.550636,87.2104327 298.326637,95.8262407 L283.237226,121.760847 C272.893972,115.729695 260.864393,112.274464 248.027802,112.274464 L248.027802,82.274464 L248.027802,82.274464 Z",
    className: "merry-inactive",
    fill: "#F9BD45",
    opacity: "0.302818",
    transform: "translate(273.177220, 102.017656) rotate(60.000000) translate(-273.177220, -102.017656) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [MERRY, INVIGORATED],
    d: "M227.125046,42.229006 C245.462892,42.229006 262.64788,47.1649747 277.423881,55.7807828 L262.334471,81.7153894 C251.991216,75.6842375 239.961637,72.229006 227.125046,72.229006 L227.125046,42.229006 L227.125046,42.229006 Z",
    className: "delighted-adjacent",
    fill: "#F7823B",
    transform: "translate(252.274464, 61.972198) rotate(30.000000) translate(-252.274464, -61.972198) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M228.206607,38.1925681 C247.461163,38.1925681 265.505241,43.3752373 281.019944,52.4216774 L263.416031,82.6789515 C253.072776,76.6477995 241.043198,73.1925681 228.206607,73.1925681 L228.206607,38.1925681 L228.206607,38.1925681 Z",
    className: "delighted-selected",
    fill: "#F7823B",
    transform: "translate(254.613275, 60.435760) rotate(30.000000) translate(-254.613275, -60.435760) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M227.125046,42.229006 C245.462892,42.229006 262.64788,47.1649747 277.423881,55.7807828 L262.334471,81.7153894 C251.991216,75.6842375 239.961637,72.229006 227.125046,72.229006 L227.125046,42.229006 L227.125046,42.229006 Z",
    className: "delighted-inactive",
    fill: "#F7823B",
    opacity: "0.302818",
    transform: "translate(252.274464, 61.972198) rotate(30.000000) translate(-252.274464, -61.972198) "
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    adjacent: [DELIGHTED, THUNDERSTRUCK],
    d: "M189,18 C207.337845,18 224.522834,22.9359687 239.298835,31.5517767 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,18 L189,18 Z",
    className: "invigorated-adjacent",
    fill: "#EC611D"
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M189,13 C208.254556,13 226.298634,18.1826693 241.813337,27.2291093 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,13 L189,13 Z",
    className: "invigorated-selected",
    fill: "#EC611D"
  })), /*#__PURE__*/React__default['default'].createElement(MoodPath, _extends({}, passToAll, {
    d: "M189,18 C207.337845,18 224.522834,22.9359687 239.298835,31.5517767 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,18 L189,18 Z",
    className: "invigorated-inactive",
    fill: "#EC611D",
    opacity: "0.302818"
  })), /*#__PURE__*/React__default['default'].createElement("g", {
    className: "labels",
    fontFamily: "MuseoSans-500, Museo Sans",
    fontSize: "12",
    fontWeight: "normal"
  }, /*#__PURE__*/React__default['default'].createElement("text", {
    className: "thunderstruck-label",
    fill: "#E83948"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "88.64",
    y: "11"
  }, "Thunderstruck")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "dazzled-label",
    fill: "#C5037E"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "57.324",
    y: "42"
  }, "Dazzled")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "anticipatory-label",
    fill: "#6D398B"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "14.404",
    y: "91"
  }, "Anticipatory")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "contemplative-label",
    fill: "#454E98"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "0.04",
    y: "148"
  }, "Contemplative")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "soothing-label",
    fill: "#2B70B1"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "51.6",
    y: "200"
  }, "Soothing")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "sleepy-label",
    fill: "#30A4C5"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "133.628",
    y: "238"
  }, "Sleepy")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "serene-label",
    fill: "#2C8D5A"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "214",
    y: "238"
  }, "Serene")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "relaxed-label",
    fill: "#7CC530"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "270",
    y: "200"
  }, "Relaxed")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "satisfied-label",
    fill: "#FFCE01"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "295",
    y: "148"
  }, "Satisfied")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "merry-label",
    fill: "#F9BD45"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "296",
    y: "91"
  }, "Merry")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "delighted-label",
    fill: "#F7823B"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "270",
    y: "42"
  }, "Delighted")), /*#__PURE__*/React__default['default'].createElement("text", {
    className: "invigorated-label",
    fill: "#EC611D"
  }, /*#__PURE__*/React__default['default'].createElement("tspan", {
    x: "215",
    y: "11"
  }, "Invigorated"))))), moods.map(function (obj) {
    return /*#__PURE__*/React__default['default'].createElement(Radio$1, {
      checked: selected === obj,
      type: "radio",
      id: "html",
      name: "mood",
      value: obj
    });
  }));
};

function _templateObject2$i() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: ", ";\n    align-items: center;\n    align-self: center;\n\n    svg {\n        margin-bottom: ", ";\n        margin-right: ", ";\n        font-size: 2rem;\n    }\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    font-family: MuseoSansReg, sans-serif;\n    flex-wrap: ", ";\n    justify-content: ", ";\n    background: ", ";\n    color: ", ";\n    padding: ", ";\n    width: 100%;\n    border-radius: ", ";\n    box-shadow: 0px 1px 1px ", ";\n    transition: all 0.2s linear;\n    user-select: none;\n    cursor: pointer;\n\n    &:hover {\n        box-shadow: 0px 2px 5px ", ";\n    }\n\n    &:active {\n        background: ", ";\n        color: ", ";\n    }\n\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$7 = styled__default['default'].div(_templateObject$j(), function (props) {
  return props.small ? "nowrap" : "wrap";
}, function (props) {
  return props.small ? "space-between" : "center";
}, function (props) {
  return props.backgroundColour;
}, function (props) {
  return props.textColour;
}, function (props) {
  return props.small ? "1rem" : "1rem";
}, function (props) {
  return props.theme.main.borderRadius;
}, curriedTransparentize(0.8, '#000'), curriedTransparentize(0.8, '#000'), function (props) {
  return props.theme.selectionPanel.active.background;
}, function (props) {
  return props.theme.selectionPanel.active.color;
});
var Content$2 = styled__default['default'].div(_templateObject2$i(), function (_ref) {
  var small = _ref.small;
  return small ? "row" : "column";
}, function (_ref2) {
  var small = _ref2.small;
  return small ? "0" : "1rem";
}, function (_ref3) {
  var small = _ref3.small;
  return small ? "1rem" : "0";
});

var getColours$1 = function getColours(colour, active) {
  var textColour = theme.selectionPanel.color;
  var backgroundColour = theme.selectionPanel.background;

  if (active) {
    textColour = theme.generalColors.white;
    backgroundColour = theme.colors.simplyRed;
  }

  if (theme.colors[colour]) {
    textColour = theme.colors[colour];
    backgroundColour = theme.selectionPanel.background;

    if (active) {
      textColour = theme.generalColors.white;
      backgroundColour = theme.colors[colour];
    }
  }

  return {
    textColour: textColour,
    backgroundColour: backgroundColour
  };
};

var SelectionPanel = function SelectionPanel(_ref4) {
  var children = _ref4.children,
      _ref4$active = _ref4.active,
      active = _ref4$active === void 0 ? false : _ref4$active,
      _ref4$small = _ref4.small,
      small = _ref4$small === void 0 ? false : _ref4$small,
      _ref4$colour = _ref4.colour,
      colour = _ref4$colour === void 0 ? 'simplyRed' : _ref4$colour,
      rest = _objectWithoutProperties(_ref4, ["children", "active", "small", "colour"]);

  var attributes = _objectSpread2(_objectSpread2({}, rest), getColours$1(colour, active));

  return /*#__PURE__*/React__default['default'].createElement(Wrap$7, _extends({
    active: active,
    small: small
  }, attributes), /*#__PURE__*/React__default['default'].createElement(Content$2, _extends({
    small: small
  }, rest), children));
};

function _templateObject3$9() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.1em;\n    margin-left: 0.75rem;\n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$j() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    cursor: pointer;\n"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n    font-family: MuseoSansReg, sans-serif;\n\n    .switch {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        height: 23px;\n    }\n\n    /* Hide default HTML checkbox */\n    .switch input {\n        opacity: 0;\n        width: 0;\n        height: 0;\n    }\n\n    /* The slider */\n    .slider {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #ccc;\n        -webkit-transition: 0.4s;\n        transition: 0.4s;\n    }\n\n    .slider:before {\n        position: absolute;\n        content: '';\n        height: 19px;\n        width: 19px;\n        left: 1px;\n        bottom: 2px;\n        background-color: white;\n        -webkit-transition: 0.4s;\n        transition: 0.4s;\n    }\n\n    input:checked + .slider {\n        background-color: ", ";\n    }\n\n    input:focus + .slider {\n        box-shadow: 0 0 1px  ", ";\n    }\n\n    input:checked + .slider:before {\n        -webkit-transform: translateX(19px);\n        -ms-transform: translateX(19px);\n        transform: translateX(19px);\n    }\n\n    /* Rounded sliders */\n    .slider.round {\n        border-radius: 34px;\n    }\n\n    .slider.round:before {\n        border-radius: 50%;\n    }\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$8 = styled__default['default'].div(_templateObject$k(), function (props) {
  return props.primaryColour;
}, function (props) {
  return props.primaryColour;
});
var PaddedLabel$2 = styled__default['default'](Label$1)(_templateObject2$j());
var SpanLabel = styled__default['default'].span(_templateObject3$9());

var getColours$2 = function getColours(colour) {
  var altColour = theme.selectionPanel.color;
  var primaryColour = theme.selectionPanel.background;

  if (theme.colors[colour]) {
    altColour = theme.generalColors.white;
    primaryColour = theme.colors[colour];
  }

  return {
    altColour: altColour,
    primaryColour: primaryColour
  };
};

var Switch = function Switch(_ref) {
  var name = _ref.name,
      id = _ref.id,
      checked = _ref.checked,
      value = _ref.value,
      label = _ref.label,
      _ref$colour = _ref.colour,
      colour = _ref$colour === void 0 ? 'simplyRed' : _ref$colour,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      rest = _objectWithoutProperties(_ref, ["name", "id", "checked", "value", "label", "colour", "className"]);

  var attributes = _objectSpread2(_objectSpread2({}, rest), getColours$2(colour));

  console.log('switch attributes', attributes);
  return /*#__PURE__*/React__default['default'].createElement(Wrap$8, _extends({
    className: className
  }, attributes), /*#__PURE__*/React__default['default'].createElement(PaddedLabel$2, _extends({
    htmlFor: name
  }, attributes), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "switch"
  }, /*#__PURE__*/React__default['default'].createElement("input", _extends({
    id: id,
    name: name,
    value: value,
    defaultChecked: checked,
    type: "checkbox"
  }, attributes)), /*#__PURE__*/React__default['default'].createElement("span", _extends({
    className: "slider round"
  }, attributes))), /*#__PURE__*/React__default['default'].createElement(SpanLabel, {
    className: "spanLabel"
  }, label)));
};

var Select = SelectInput;
var Checkbox$1 = CheckboxComponent;
var Radio$2 = RadioComponent;
var Hidden = FieldComponent;
var Input$1 = FieldComponent$1;
var Chip$1 = ChipInput;
var ChipSelect = ChipInput$1;
var TimeSelect = TimeSelectInput;
var MoodSelect = MoodSelector;
var SelectionPanel$1 = SelectionPanel;
var Switch$1 = Switch; //  export const ColorPicker = ColorPickerInput;

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    font-size: 1.2rem;\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    font-weight: lighter;\n    font-size: 1.4rem;\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    font-size: 1.6rem;\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$k() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    font-size: 2.2rem;\n"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-family: ", ";\n    margin: 0;\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var headingBase = styled.css(_templateObject$l(), theme.main.color, theme.main.font);
var Hero = styled__default['default'].h3(_templateObject2$k(), headingBase);
var Title = styled__default['default'].h1(_templateObject3$a(), headingBase);
var Subtitle = styled__default['default'].h2(_templateObject4$5(), headingBase);
var Standard = styled__default['default'].h4(_templateObject5$4(), headingBase);

var Heading = function Heading(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'heading' : _ref$type,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["type", "children"]);

  switch (type.toLowerCase()) {
    case 'hero':
      return /*#__PURE__*/React__default['default'].createElement(Hero, rest, children);

    case 'title':
      return /*#__PURE__*/React__default['default'].createElement(Title, rest, children);

    case 'subtitle':
      return /*#__PURE__*/React__default['default'].createElement(Subtitle, rest, children);

    default:
      return /*#__PURE__*/React__default['default'].createElement(Standard, rest, children);
  }
};

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    font-size: 1rem;\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    font-weight: lighter;\n    font-size: 0.95rem;\n    color:", ";\n"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$l() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    font-size: 0.8rem;\n"]);

  _templateObject2$l = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: lighter;\n    margin: 0;\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var TextBase = styled.css(_templateObject$m(), function (props) {
  return theme.main.font;
});
var Help = styled__default['default'].p(_templateObject2$l(), TextBase);
var Small = styled__default['default'].p(_templateObject3$b(), TextBase, function () {
  return theme.colors.paintItBlack;
});
var Paragraph = styled__default['default'].p(_templateObject4$6(), TextBase);

var Text$1 = function Text(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'heading' : _ref$type,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["type", "children"]);

  switch (type.toLowerCase()) {
    case 'help':
      return /*#__PURE__*/React__default['default'].createElement(Help, rest, children);

    case 'small':
      return /*#__PURE__*/React__default['default'].createElement(Small, rest, children);

    default:
      return /*#__PURE__*/React__default['default'].createElement(Paragraph, rest, children);
  }
};

function _templateObject3$c() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    height: auto;\n    overflow: hidden;\n    transform: scaleY(0);\n    transform-origin: top;\n    color: transparent;\n    transition: color 0.2s linear;\n    background: rgb(18, 148, 231);\n\n    &.active {\n        padding: 0.7rem 1.4rem;\n        padding-top: calc(0.7rem + 4px);\n        margin-top: -4px;\n        color: inherit;\n        transform: scale(1);\n\n        .status-success & {\n            color: rgb(255, 255, 255);\n            background: rgb(0, 212, 1);\n        }\n        .status-error & {\n            color: rgb(255, 255, 255);\n            background: rgb(255, 0, 58);\n        }\n        .status-notice & {\n            color: rgb(255, 255, 255);\n            background: rgb(245, 166, 35);\n        }\n    }\n"]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$m() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n    width: ", ";\n    height: 100%;\n    background: rgb(0, 212, 1);\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n    transition: width 0.5s ease-in-out;\n"]);

  _templateObject2$m = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: none;\n    z-index: 10;\n    width: 100%;\n\n    &.active {\n        display: block;\n    }\n\n    .loader {\n        display: block;\n        position: relative;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 4px;\n        z-index: 12;\n        background: rgba(0, 0, 0, 0.1);\n\n        &.fade {\n            display: block;\n            -webkit-animation: fadeOut 1s;\n            animation: fadeOut 1s;\n            animation-fill-mode: forwards;\n        }\n    }\n\n    @-webkit-keyframes fadeOut {\n        0% {\n            opacity: 1;\n        }\n        99% {\n            opacity: 0.01;\n            width: 100%;\n            height: 100%;\n        }\n        100% {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n    }\n    @keyframes fadeOut {\n        0% {\n            opacity: 1;\n        }\n        99% {\n            opacity: 0.01;\n            width: 100%;\n            height: 100%;\n        }\n        100% {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n    }\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var Loader = styled__default['default'].div(_templateObject$n());
var Bar = styled__default['default'].div(_templateObject2$m(), function (props) {
  return "".concat(props.percent, "%") || '0%';
});
var Message = styled__default['default'].div(_templateObject3$c());

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

      return /*#__PURE__*/React__default['default'].createElement(Loader, {
        className: className
      }, this.renderBar(), this.renderMessage());
    }
  }]);

  return LoaderBar;
}(React__default['default'].Component);

function _templateObject2$n() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n"]);

  _templateObject2$n = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    position: relative;\n    z-index: 2;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$9 = styled__default['default'].div(_templateObject$o(), function (props) {
  return props.inline ? "inline-block" : "flex";
});
var WrapAbsolute = styled__default['default'].div(_templateObject2$n());

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

var Loader$1 = function Loader(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      type = _ref2.type,
      fill = _ref2.fill;

  switch (type) {
    case 'inline':
      return /*#__PURE__*/React__default['default'].createElement(Wrap$9, {
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
      return /*#__PURE__*/React__default['default'].createElement(Wrap$9, null, /*#__PURE__*/React__default['default'].createElement(Spinner, {
        width: width,
        height: height,
        fill: fill
      }));
  }
};

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 15px;\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$d() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    text-indent: 0;\n    animation: ", " ", " linear infinite;\n    animation-play-state: ", ";\n\n    /* &:hover {\n        animation-play-state: ", ";\n    } */\n"]);

  _templateObject3$d = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$o() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n    white-space: nowrap;\n    overflow: hidden;\n    box-sizing: border-box;\n"]);

  _templateObject2$o = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$p() {
  var data = _taggedTemplateLiteral(["\n    0%   { \n        transform: translate(0, 0); \n    }\n    100% { \n        transform: translate(-50%, 0); \n    }\n"]);

  _templateObject$p = function _templateObject() {
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
var scroll = styled.keyframes(_templateObject$p());
var Wrap$a = styled__default['default'].div(_templateObject2$o());
var Marquee = styled__default['default'].span(_templateObject3$d(), scroll, function (props) {
  return "".concat(props.time, "s");
}, function (props) {
  return props.animate;
}, function (props) {
  return props.hoverPlaystate;
});
var MainContent = styled__default['default'].span(_templateObject4$7());
var Dupe = styled__default['default'].span(_templateObject5$5());
var Temp = styled__default['default'].div(_templateObject6());

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


      return /*#__PURE__*/React__default['default'].createElement(Wrap$a, {
        ref: function ref(wrap) {
          return _this2.wrap = wrap;
        },
        className: className
      }, /*#__PURE__*/React__default['default'].createElement(Temp, null, /*#__PURE__*/React__default['default'].createElement(MainContent, null, content)));
    }
  }]);

  return Marquess;
}(React$1.Component);

function _templateObject2$p() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$p = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$q() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    position:fixed;\n    align-items: center;\n    box-sizing: content-box;\n    background: ", ";\n    z-index:9;\n    ", "\n    ", "\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var mastBase = styled.css(_templateObject$q(), function (props) {
  return props.theme.mast.background;
}, function (props) {
  return props.position === "top" ? "\n            top:0;\n            width:100%;\n            flex-direction: row;\n        " : "";
}, function (props) {
  return props.theme.mast.shadow ? "\n            box-shadow: 1px 0 3px rgba(0,0,0,0.3);\n        " : "";
});
var Mast = styled__default['default'].div(_templateObject2$p(), mastBase);
var index = (function (props) {
  return /*#__PURE__*/React.createElement(Mast, {
    position: props.position
  }, props.children);
});

function _templateObject4$8() {
  var data = _taggedTemplateLiteral(["\n    width: 30rem;\n    min-height: 4rem;\n    max-width: 90%;\n    max-height: 90%;\n    background: ", ";\n    color: ", ";\n    border-radius: ", ";\n    box-shadow: 0 5px 10px ", ";\n    overflow: auto;\n    padding: 2rem;\n    text-align: center;\n"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$e() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: -1;\n"]);

  _templateObject3$e = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$q() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 8888;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject2$q = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$r() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    color: ", ";\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var ModalHeader = styled__default['default'].h2(_templateObject$r(), function (props) {
  return props.theme.main.color;
});
var Wrap$b = styled__default['default'].div(_templateObject2$q());
var Background$1 = styled__default['default'].div(_templateObject3$e());
var ModalWrap = styled__default['default'].div(_templateObject4$8(), function (props) {
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

      return /*#__PURE__*/React__default['default'].createElement(Wrap$b, null, /*#__PURE__*/React__default['default'].createElement(Background$1, {
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

var Icon = function Icon() {
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

var Icon$1 = function Icon() {
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

function _templateObject2$r() {
  var data = _taggedTemplateLiteral(["\n    align-self: flex-end;\n    width: 0.9em;\n\n    svg {\n        width: 100%;\n        height: 100%;\n        fill: ", ";\n    }\n\n    .active & {\n        svg {\n            fill: red;\n        }\n    }\n"]);

  _templateObject2$r = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$s() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    text-align: right;\n\n    > * {\n        &.number &.arrow &.inactivearrow {\n            display: inline-block;\n            border: none;\n        }\n        &.number {\n            padding: 0.7em 0.5em;\n            width: 2.5em;\n            margin: 0.5em 0.1em;\n            background: #fff;\n            color: ", ";\n            border: none;\n        }\n\n        &.arrow {\n            padding: 0.8em 0.8em 0.6em 0.8em;\n            margin: 0.5em 0.1em;\n            background: #fff;\n            border: none;\n        }\n        &.inactivearrow {\n            padding: 0.8em 0.8em 0.6em 0.8em;\n            margin: 0.5em 0.1em;\n            background: #f0f0f0;\n            pointer-events: none;\n            border: none;\n        }\n\n        &.active {\n            background: #e83948;\n            border-radius: 4px 0em;\n            margin: 0.5em 0.1em;\n            padding: 0.7em 0.5em;\n            width: 2.5em;\n            outline: none;\n            color: #fff;\n            border: none;\n            border-radius: 10px;\n        }\n    }\n"]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$c = styled__default['default'].div(_templateObject$s(), function (props) {
  return props.theme.pagination.color;
});
var SvgWrap = styled__default['default'].div(_templateObject2$r(), function (props) {
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

      return /*#__PURE__*/React__default['default'].createElement(Wrap$c, null, /*#__PURE__*/React__default['default'].createElement(Button, {
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

      return /*#__PURE__*/React__default['default'].createElement(Button, {
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

      return /*#__PURE__*/React__default['default'].createElement(Button, {
        disabled: disabled,
        className: className,
        onClick: function onClick() {
          handlePaginate(page - 1);
        }
      }, /*#__PURE__*/React__default['default'].createElement(SvgWrap, {
        color: color
      }, /*#__PURE__*/React__default['default'].createElement(Icon$1, null)));
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

      return /*#__PURE__*/React__default['default'].createElement(Button, {
        className: className,
        onClick: function onClick() {
          handlePaginate(page + 1);
        }
      }, /*#__PURE__*/React__default['default'].createElement(SvgWrap, {
        color: color
      }, /*#__PURE__*/React__default['default'].createElement(Icon, null)));
    }
  }, {
    key: "renderPages",
    value: function renderPages() {
      var _this$props5 = this.props,
          page = _this$props5.page,
          totalRecords = _this$props5.totalRecords;
      var current = paginate(totalRecords, page, _pageSize, _totalPages);
      var pages = current.pages;
      return /*#__PURE__*/React__default['default'].createElement(Wrap$c, null, pages && pages.length > 1 ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, this.renderBackPageButton(current), pages.map(this.renderPageButton), this.renderNextPageButton(current)) : null);
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

function _templateObject2$s() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject2$s = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$t() {
  var data = _taggedTemplateLiteral(["\n    margin: 1rem 0;\n    color: #666;\n    line-height:170%;\n"]);

  _templateObject$t = function _templateObject() {
    return data;
  };

  return data;
}
var paragraphBase = styled.css(_templateObject$t());
var paragraph = styled__default['default'].p(_templateObject2$s(), paragraphBase);

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

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    text-align: ", ";\n    margin: 0.5em 0 0.5em 0;\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$6() {
  var data = _taggedTemplateLiteral(["\n    width: 1rem;\n    height: 1rem;\n    justify-self: flex-start;\n    margin-right: 15px;\n\n    svg {\n        width: 100%;\n        height: 100%;\n    }\n"]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$9() {
  var data = _taggedTemplateLiteral(["\n    width: 0.8rem;\n    height: 0.8rem;\n\n    svg {\n        width: 100%;\n        height: 100%;\n    }\n    &:hover {\n        opacity: 0.8;\n    }\n"]);

  _templateObject4$9 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$f() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject3$f = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$t() {
  var data = _taggedTemplateLiteral(["\n    font-size: 0.9em;\n    color: ", ";\n    text-align: left;\n    flex-grow: 1;\n"]);

  _templateObject2$t = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$u() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: nowrap;\n    padding: 15px 30px 15px 15px;\n    margin-bottom: 30px;\n    font-size: 1rem;\n    color: ", ";\n    border-radius: 0.45em;\n    width: 100%;\n    background-color: ", ";\n    border: 0.15rem solid ", ";\n    justify-content: space-between;\n    align-items: center;\n"]);

  _templateObject$u = function _templateObject() {
    return data;
  };

  return data;
}
var ResponseBoxText = styled__default['default'].div(_templateObject$u(), function (props) {
  return darken(0.25, props.borderColor);
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.borderColor;
});
var TextWrap = styled__default['default'].p(_templateObject2$t(), function (props) {
  return darken(0.25, props.color);
});
var LeftDiv = styled__default['default'].div(_templateObject3$f());
var XWrap = styled__default['default'].button(_templateObject4$9());
var IconWrap = styled__default['default'].div(_templateObject5$6());
var ResponseBoxStyled = styled__default['default'].div(_templateObject6$1(), function (props) {
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

function _templateObject5$7() {
  var data = _taggedTemplateLiteral(["\n    overflow: auto;\n    margin-bottom: 15px;\n\n    td,\n    th {\n        white-space: nowrap;\n    }\n"]);

  _templateObject5$7 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$a() {
  var data = _taggedTemplateLiteral(["\n    ", "\n\n    .iconWrap {\n        box-shadow: ", ";\n    }\n"]);

  _templateObject4$a = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$g() {
  var data = _taggedTemplateLiteral(["\n    opacity: ", ";\n    border-radius: ", ";\n    min-height: 50px;\n\n    td:first-child,\n    th:first-child {\n        border-radius: ", " 0 0 ", ";\n    }\n\n    td:last-child,\n    th:last-child {\n        border-radius: 0 ", " ", " 0;\n        text-align: right;\n        position: sticky;\n        right: 0px;\n        border-left: 1px;\n        padding: 10px 15px;\n    }\n"]);

  _templateObject3$g = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$u() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n    width: 100%;\n    margin-bottom: 30px;\n    color: ", ";\n    border-collapse: separate;\n    border-spacing: 0 0.3rem;\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n"]);

  _templateObject2$u = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$v() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px 15px;\n    background: ", ";\n"]);

  _templateObject$v = function _templateObject() {
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

var TableElementBase = styled.css(_templateObject$v(), function (props) {
  return props.background ? props.background : props.theme.main.boxBackground;
});
var TableBase = styled.css(_templateObject2$u(), function (props) {
  return props.theme.main.color;
});
var TrBase = styled.css(_templateObject3$g(), function (props) {
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
var TableStyled = styled__default['default'].table(_templateObject4$a(), TableBase, function (p) {
  return p.overflowed ? "-5px 0 8px -5px ".concat(p.theme.rowComponent.actionShadow) : 'none';
});
var ResponsiveTable = styled__default['default'].div(_templateObject5$7());

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

function _templateObject$w() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject$w = function _templateObject() {
    return data;
  };

  return data;
}
var TrStyled = styled__default['default'].tr(_templateObject$w(), TrBase);

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

function _templateObject$x() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    text-align: ", ";\n"]);

  _templateObject$x = function _templateObject() {
    return data;
  };

  return data;
}
var TdStyled = styled__default['default'].td(_templateObject$x(), TableElementBase, function (props) {
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

function _templateObject$y() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    padding: 15px 15px;\n"]);

  _templateObject$y = function _templateObject() {
    return data;
  };

  return data;
}
var ThStyled = styled__default['default'].th(_templateObject$y(), TableElementBase);

var Th = function Th(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React__default['default'].createElement(ThStyled, {
    className: className
  }, children);
};

function _templateObject4$b() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    background-color: ", ";\n    border-radius: 1rem;\n"]);

  _templateObject4$b = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$h() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    width: ", ";\n    transition: width 0.25s ease-in;\n    background-color: ", ";\n    border-radius: 1rem;\n    text-align: right;\n    &:after {\n        content: '.';\n        visibility: hidden;\n    }\n"]);

  _templateObject3$h = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$v() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    padding: 0 1rem;\n"]);

  _templateObject2$v = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$z() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject$z = function _templateObject() {
    return data;
  };

  return data;
}
var ProgressBarContainer = styled__default['default'].div(_templateObject$z());
var Text$2 = styled__default['default'].span(_templateObject2$v(), function (_ref) {
  var color = _ref.color;
  return color;
});
var ProgressBarFiller = styled__default['default'].div(_templateObject3$h(), function (_ref2) {
  var progress = _ref2.progress;
  return "".concat(progress, "%");
}, function (_ref3) {
  var color = _ref3.color;
  return color;
});
var ProgressBarTotal = styled__default['default'].div(_templateObject4$b(), theme.colors.fadeToGrey);

var getBarColor = function getBarColor(progress) {
  if (progress === 100) {
    return theme.colors.greenDay;
  }

  return theme.colors.simplyRed;
};

var ProgressBar = function ProgressBar(_ref4) {
  var progress = _ref4.progress,
      _ref4$text = _ref4.text,
      text = _ref4$text === void 0 ? true : _ref4$text;
  var color = getBarColor(progress);
  return /*#__PURE__*/React__default['default'].createElement(ProgressBarContainer, {
    progress: progress,
    color: color
  }, /*#__PURE__*/React__default['default'].createElement(ProgressBarTotal, null, /*#__PURE__*/React__default['default'].createElement(ProgressBarFiller, {
    progress: progress,
    color: color
  })), text ? /*#__PURE__*/React__default['default'].createElement(Text$2, null, "".concat(progress, "%")) : null);
};

var initialState = {};

var progressBars = function progressBars() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CREATE_PROGRESS_BAR':
      return _objectSpread2(_objectSpread2({}, state), {}, _defineProperty({}, action.key, 0));

    case 'UPDATE_PROGRESS_BAR':
      return _objectSpread2(_objectSpread2({}, state), action.data);

    case 'DELETE_PROGRESS_BAR':
      var copyState = _objectSpread2({}, state);

      delete copyState[action.key];
      return _objectSpread2({}, copyState);

    default:
      return _objectSpread2({}, state);
  }
};

function createProgressBar(key) {
  return {
    type: 'CREATE_PROGRESS_BAR',
    key: key
  };
}
function updateProgressBar(data) {
  return {
    type: 'UPDATE_PROGRESS_BAR',
    data: data
  };
}
function readProgressBar(key) {
  return {
    type: 'READ_PROGRESS_BAR',
    key: key
  };
}
function readAllProgressBars() {
  return {
    type: 'READ_PROGRESS_BAR'
  };
}
function deleteProgressBar(key) {
  return {
    type: 'DELETE_PROGRESS_BAR',
    key: key
  };
}

var actions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createProgressBar: createProgressBar,
  updateProgressBar: updateProgressBar,
  readProgressBar: readProgressBar,
  readAllProgressBars: readAllProgressBars,
  deleteProgressBar: deleteProgressBar
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var createDefinition = function (propNames) {
  return {
    isEnabled: function (props) {
      return propNames.some(function (name) {
        return !!props[name];
      });
    }
  };
};

var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
  inView: createDefinition(["whileInView", "onViewportEnter", "onViewportLeave"])
};

function loadFeatures(features) {
  for (var key in features) {
    if (features[key] === null) continue;

    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}

var warning = function () {};

var invariant = function () {};

if (process.env.NODE_ENV !== 'production') {
  warning = function (check, message) {
    if (!check && typeof console !== 'undefined') {
      console.warn(message);
    }
  };

  invariant = function (check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

var LazyContext = React$1.createContext({
  strict: false
});

var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
/**
 * Load features via renderless components based on the provided MotionProps.
 */

function useFeatures(props, visualElement, preloadedFeatures) {
  var features = [];
  var lazyContext = React$1.useContext(LazyContext);
  if (!visualElement) return null;
  /**
   * If we're in development mode, check to make sure we're not rendering a motion component
   * as a child of LazyMotion, as this will break the file-size benefits of using it.
   */

  if (process.env.NODE_ENV !== "production" && preloadedFeatures && lazyContext.strict) {
    invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  }

  for (var i = 0; i < numFeatures; i++) {
    var name_1 = featureNames[i];
    var _a = featureDefinitions[name_1],
        isEnabled = _a.isEnabled,
        Component = _a.Component;
    /**
     * It might be possible in the future to use this moment to
     * dynamically request functionality. In initial tests this
     * was producing a lot of duplication amongst bundles.
     */

    if (isEnabled(props) && Component) {
      features.push(React$1.createElement(Component, __assign({
        key: name_1
      }, props, {
        visualElement: visualElement
      })));
    }
  }

  return features;
}

/**
 * @public
 */

var MotionConfigContext = React$1.createContext({
  transformPagePoint: function (p) {
    return p;
  },
  isStatic: false
});

var MotionContext = React$1.createContext({});

function useVisualElementContext() {
  return React$1.useContext(MotionContext).visualElement;
}

/**
 * @public
 */

var PresenceContext = React$1.createContext(null);

var isBrowser = typeof window !== "undefined";

var useIsomorphicLayoutEffect = isBrowser ? React$1.useLayoutEffect : React$1.useEffect;

function useVisualElement(Component, visualState, props, createVisualElement) {
  var lazyContext = React$1.useContext(LazyContext);
  var parent = useVisualElementContext();
  var presenceContext = React$1.useContext(PresenceContext);
  var visualElementRef = React$1.useRef(undefined);
  /**
   * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
   */

  if (!createVisualElement) createVisualElement = lazyContext.renderer;

  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState: visualState,
      parent: parent,
      props: props,
      presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
      blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false
    });
  }

  var visualElement = visualElementRef.current;
  useIsomorphicLayoutEffect(function () {
    visualElement === null || visualElement === void 0 ? void 0 : visualElement.syncRender();
  });
  React$1.useEffect(function () {
    var _a;

    (_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
  });
  useIsomorphicLayoutEffect(function () {
    return function () {
      return visualElement === null || visualElement === void 0 ? void 0 : visualElement.notifyUnmount();
    };
  }, []);
  return visualElement;
}

function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */

function useMotionRef(visualState, visualElement, externalRef) {
  return React$1.useCallback(function (instance) {
    var _a;

    instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));

    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }

    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  },
  /**
   * Only pass a new ref callback to React if we've received a visual element
   * factory. Otherwise we'll be mounting/remounting every time externalRef
   * or other dependencies change.
   */
  [visualElement]);
}

/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
  return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */


function isVariantLabel(v) {
  return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */


function getCurrent(visualElement) {
  var current = {};
  visualElement.forEachValue(function (value, key) {
    return current[key] = value.get();
  });
  return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */


function getVelocity(visualElement) {
  var velocity = {};
  visualElement.forEachValue(function (value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}

function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
  var _a;

  if (currentValues === void 0) {
    currentValues = {};
  }

  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  /**
   * If the variant definition is a function, resolve.
   */


  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  /**
   * If the variant definition is a variant label, or
   * the function returned a variant label, resolve.
   */


  if (typeof definition === "string") {
    definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }
  /**
   * At this point we've resolved both functions and variant labels,
   * but the resolved variant label might itself have been a function.
   * If so, resolve. This can only have returned a valid target object.
   */


  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }

  return definition;
}

function resolveVariant(visualElement, definition, custom) {
  var props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

function checkIfControllingVariants(props) {
  var _a;

  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}

function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
}

function getCurrentTreeVariants(props, context) {
  if (checkIfControllingVariants(props)) {
    var initial = props.initial,
        animate = props.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : undefined,
      animate: isVariantLabel(animate) ? animate : undefined
    };
  }

  return props.inherit !== false ? context : {};
}

function useCreateMotionContext(props) {
  var _a = getCurrentTreeVariants(props, React$1.useContext(MotionContext)),
      initial = _a.initial,
      animate = _a.animate;

  return React$1.useMemo(function () {
    return {
      initial: initial,
      animate: animate
    };
  }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}

function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */

function useConstant(init) {
  var ref = React$1.useRef(null);

  if (ref.current === null) {
    ref.current = init();
  }

  return ref.current;
}

const defaultTimestep = 1 / 60 * 1000;
const getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
const onNextFrame = typeof window !== "undefined" ? callback => window.requestAnimationFrame(callback) : callback => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

function createRenderStep(runNextFrame) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive) toKeepAlive.add(callback);

      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
      }

      return callback;
    },
    cancel: callback => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1) toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: frameData => {
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }

      isProcessing = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;

      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);

          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
        }
      }

      isProcessing = false;

      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
  delta: 0,
  timestamp: 0
};
const stepsOrder = ["read", "update", "preRender", "render", "postRender"];
const steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];

  acc[key] = (process, keepAlive = false, immediate = false) => {
    if (!runNextFrame) startLoop();
    return step.schedule(process, keepAlive, immediate);
  };

  return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
const flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);

  return acc;
}, {});

const processStep = stepId => steps[stepId].process(frame);

const processFrame = timestamp => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;

  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};

const startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing) onNextFrame(processFrame);
};

const getFrameData = () => frame;

const clamp = (min, max, v) => Math.min(Math.max(v, min), max);

const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;

function findSpring({
  duration = 800,
  bounce = 0.25,
  velocity = 0,
  mass = 1
}) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, duration / 1000);

  if (dampingRatio < 1) {
    envelope = undampedFreq => {
      const exponentialDecay = undampedFreq * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };

    derivative = undampedFreq => {
      const exponentialDecay = undampedFreq * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
      const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = undampedFreq => {
      const a = Math.exp(-undampedFreq * duration);
      const b = (undampedFreq - velocity) * duration + 1;
      return -safeMin + a * b;
    };

    derivative = undampedFreq => {
      const a = Math.exp(-undampedFreq * duration);
      const b = (velocity - undampedFreq) * (duration * duration);
      return a * b;
    };
  }

  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1000;

  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}

const rootIterations = 12;

function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;

  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }

  return result;
}

function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];

function isSpringType(options, keys) {
  return keys.some(key => options[key] !== undefined);
}

function getSpringOptions(options) {
  let springOptions = Object.assign({
    velocity: 0.0,
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    isResolvedFromDuration: false
  }, options);

  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), {
      velocity: 0.0,
      mass: 1.0
    });
    springOptions.isResolvedFromDuration = true;
  }

  return springOptions;
}

function spring(_a) {
  var {
    from = 0.0,
    to = 1.0,
    restSpeed = 2,
    restDelta
  } = _a,
      options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);

  const state = {
    done: false,
    value: from
  };
  let {
    stiffness,
    damping,
    mass,
    velocity,
    duration,
    isResolvedFromDuration
  } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;

  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
    restDelta !== null && restDelta !== void 0 ? restDelta : restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4;

    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);

      resolveSpring = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };

      resolveVelocity = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = t => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);

      resolveSpring = t => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }

  createSpring();
  return {
    next: t => {
      const current = resolveSpring(t);

      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1000;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }

      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}

spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";

const zero = _t => 0;

const progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

const mix = (from, to, progress) => -progress * from + progress * to + from;

const clamp$1 = (min, max) => v => Math.max(Math.min(v, max), min);

const sanitize = v => v % 1 ? Number(v.toFixed(5)) : v;

const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

function isString(v) {
  return typeof v === 'string';
}

const number = {
  test: v => typeof v === 'number',
  parse: parseFloat,
  transform: v => v
};
const alpha = Object.assign(Object.assign({}, number), {
  transform: clamp$1(0, 1)
});
const scale = Object.assign(Object.assign({}, number), {
  default: 1
});

const createUnitType = unit => ({
  test: v => isString(v) && v.endsWith(unit) && v.split(' ').length === 1,
  parse: parseFloat,
  transform: v => `${v}${unit}`
});

const degrees = createUnitType('deg');
const percent = createUnitType('%');
const px = createUnitType('px');
const vh = createUnitType('vh');
const vw = createUnitType('vw');
const progressPercentage = Object.assign(Object.assign({}, percent), {
  parse: v => percent.parse(v) / 100,
  transform: v => percent.transform(v * 100)
});

const isColorString = (type, testProp) => v => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};

const splitColor = (aName, bName, cName) => v => {
  if (!isString(v)) return v;
  const [a, b, c, alpha] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha !== undefined ? parseFloat(alpha) : 1
  };
};

const hsla$1 = {
  test: isColorString('hsl', 'hue'),
  parse: splitColor('hue', 'saturation', 'lightness'),
  transform: ({
    hue,
    saturation,
    lightness,
    alpha: alpha$1 = 1
  }) => {
    return 'hsla(' + Math.round(hue) + ', ' + percent.transform(sanitize(saturation)) + ', ' + percent.transform(sanitize(lightness)) + ', ' + sanitize(alpha.transform(alpha$1)) + ')';
  }
};

const clampRgbUnit = clamp$1(0, 255);
const rgbUnit = Object.assign(Object.assign({}, number), {
  transform: v => Math.round(clampRgbUnit(v))
});
const rgba$1 = {
  test: isColorString('rgb', 'red'),
  parse: splitColor('red', 'green', 'blue'),
  transform: ({
    red,
    green,
    blue,
    alpha: alpha$1 = 1
  }) => 'rgba(' + rgbUnit.transform(red) + ', ' + rgbUnit.transform(green) + ', ' + rgbUnit.transform(blue) + ', ' + sanitize(alpha.transform(alpha$1)) + ')'
};

function parseHex(v) {
  let r = '';
  let g = '';
  let b = '';
  let a = '';

  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
    a = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    a = v.substr(4, 1);
    r += r;
    g += g;
    b += b;
    a += a;
  }

  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}

const hex = {
  test: isColorString('#'),
  parse: parseHex,
  transform: rgba$1.transform
};

const color = {
  test: v => rgba$1.test(v) || hex.test(v) || hsla$1.test(v),
  parse: v => {
    if (rgba$1.test(v)) {
      return rgba$1.parse(v);
    } else if (hsla$1.test(v)) {
      return hsla$1.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: v => {
    return isString(v) ? v : v.hasOwnProperty('red') ? rgba$1.transform(v) : hsla$1.transform(v);
  }
};

const colorToken = '${c}';
const numberToken = '${n}';

function test(v) {
  var _a, _b, _c, _d;

  return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}

function analyse(v) {
  if (typeof v === 'number') v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(colorRegex);

  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }

  const numbers = v.match(floatRegex);

  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }

  return {
    values,
    numColors,
    tokenised: v
  };
}

function parse(v) {
  return analyse(v).values;
}

function createTransformer(v) {
  const {
    values,
    numColors,
    tokenised
  } = analyse(v);
  const numValues = values.length;
  return v => {
    let output = tokenised;

    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
    }

    return output;
  };
}

const convertNumbersToZero = v => typeof v === 'number' ? 0 : v;

function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}

const complex = {
  test,
  parse,
  createTransformer,
  getAnimatableNone
};

const maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);

function applyDefaultFilter(v) {
  let [name, value] = v.slice(0, -1).split('(');
  if (name === 'drop-shadow') return v;
  const [number] = value.match(floatRegex) || [];
  if (!number) return v;
  const unit = value.replace(number, '');
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number !== value) defaultValue *= 100;
  return name + '(' + defaultValue + unit + ')';
}

const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = Object.assign(Object.assign({}, complex), {
  getAnimatableNone: v => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(' ') : v;
  }
});

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslaToRgba({
  hue,
  saturation,
  lightness,
  alpha
}) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }

  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha
  };
}

const mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};

const colorTypes = [hex, rgba$1, hsla$1];

const getColorType = v => colorTypes.find(type => type.test(v));

const notAnimatable = color => `'${color}' is not an animatable color. Use the equivalent color code instead.`;

const mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  invariant(!!fromColorType, notAnimatable(from));
  invariant(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);

  if (fromColorType === hsla$1) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba$1;
  }

  if (toColorType === hsla$1) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba$1;
  }

  const blended = Object.assign({}, fromColor);
  return v => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }

    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

const isNum = v => typeof v === 'number';

const combineFunctions = (a, b) => v => b(a(v));

const pipe = (...transformers) => transformers.reduce(combineFunctions);

function getMixer(origin, target) {
  if (isNum(origin)) {
    return v => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}

const mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return v => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }

    return output;
  };
};

const mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};

  for (const key in output) {
    if (origin[key] !== undefined && target[key] !== undefined) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }

  return v => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }

    return output;
  };
};

function analyse$1(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;

  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== undefined) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }

  return {
    parsed,
    numNumbers,
    numRGB,
    numHSL
  };
}

const mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse$1(origin);
  const targetStats = analyse$1(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;

  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return p => `${p > 0 ? target : origin}`;
  }
};

const mixNumber = (from, to) => p => mix(from, to, p);

function detectMixerFactory(v) {
  if (typeof v === 'number') {
    return mixNumber;
  } else if (typeof v === 'string') {
    if (color.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === 'object') {
    return mixObject;
  }
}

function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;

  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);

    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe(easingFunction, mixer);
    }

    mixers.push(mixer);
  }

  return mixers;
}

function fastInterpolate([from, to], [mixer]) {
  return v => mixer(progress(from, to, v));
}

function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return v => {
    let mixerIndex = 0;
    let foundMixerIndex = false;

    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }

    if (!foundMixerIndex) {
      let i = 1;

      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }

      mixerIndex = i - 1;
    }

    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}

function interpolate(input, output, {
  clamp: isClamp = true,
  ease,
  mixer
} = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, 'Both input and output ranges must be the same length');
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');

  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }

  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? v => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

const reverseEasing = easing => p => 1 - easing(1 - p);

const mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

const createExpoIn = power => p => Math.pow(p, power);

const createBackIn = power => p => p * p * ((power + 1) * p - power);

const createAnticipate = power => {
  const backEasing = createBackIn(power);
  return p => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
const BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
const BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;

const linear = p => p;

const easeIn = createExpoIn(2);
const easeOut = reverseEasing(easeIn);
const easeInOut = mirrorEasing(easeIn);

const circIn = p => 1 - Math.sin(Math.acos(p));

const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circOut);
const backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
const backOut = reverseEasing(backIn);
const backInOut = mirrorEasing(backIn);
const anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
const ca = 4356.0 / 361.0;
const cb = 35442.0 / 1805.0;
const cc = 16061.0 / 1805.0;

const bounceOut = p => {
  if (p === 1 || p === 0) return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};

const bounceIn = reverseEasing(bounceOut);

const bounceInOut = p => p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;

function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}

function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}

function convertOffsetToTimes(offset, duration) {
  return offset.map(o => o * duration);
}

function keyframes({
  from = 0,
  to = 1,
  ease,
  offset,
  duration = 300
}) {
  const state = {
    done: false,
    value: from
  };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);

  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }

  let interpolator = createInterpolator();
  return {
    next: t => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}

function decay({
  velocity = 0,
  from = 0,
  power = 0.8,
  timeConstant = 350,
  restDelta = 0.5,
  modifyTarget
}) {
  const state = {
    done: false,
    value: from
  };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - from;
  return {
    next: t => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {}
  };
}

const types = {
  keyframes,
  spring,
  decay
};

function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }

  const keys = new Set(Object.keys(config));

  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return keyframes;
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return spring;
  }

  return keyframes;
}

function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}

function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}

function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

const framesync = update => {
  const passTimestamp = ({
    delta
  }) => update(delta);

  return {
    start: () => sync.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};

function animate(_a) {
  var _b, _c;

  var {
    from,
    autoplay = true,
    driver = framesync,
    elapsed = 0,
    repeat: repeatMax = 0,
    repeatType = "loop",
    repeatDelay = 0,
    onPlay,
    onStop,
    onComplete,
    onRepeat,
    onUpdate
  } = _a,
      options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);

  let {
    to
  } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);

  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }

  const animation = animator(Object.assign(Object.assign({}, options), {
    from,
    to
  }));

  function repeat() {
    repeatCount++;

    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror") animation.flipTarget();
    }

    isComplete = false;
    onRepeat && onRepeat();
  }

  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }

  function update(delta) {
    if (!isForwardPlayback) delta = -delta;
    elapsed += delta;

    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber) latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }

    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);

    if (isComplete) {
      if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;

      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }

  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }

  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}

function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

function inertia({
  from = 0,
  velocity = 0,
  min,
  max,
  power = 0.8,
  timeConstant = 750,
  bounceStiffness = 500,
  bounceDamping = 10,
  restDelta = 1,
  modifyTarget,
  driver,
  onUpdate,
  onComplete,
  onStop
}) {
  let currentAnimation;

  function isOutOfBounds(v) {
    return min !== undefined && v < min || max !== undefined && v > max;
  }

  function boundaryNearest(v) {
    if (min === undefined) return max;
    if (max === undefined) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }

  function startAnimation(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: v => {
        var _a;

        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }

  function startSpring(options) {
    startAnimation(Object.assign({
      type: "spring",
      stiffness: bounceStiffness,
      damping: bounceDamping,
      restDelta
    }, options));
  }

  if (isOutOfBounds(from)) {
    startSpring({
      from,
      velocity,
      to: boundaryNearest(from)
    });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;

    const checkBoundary = v => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, getFrameData().delta);

      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({
          from: v,
          to: boundary,
          velocity
        });
      }
    };

    startAnimation({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : undefined
    });
  }

  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}

const isPoint = point => point.hasOwnProperty('x') && point.hasOwnProperty('y');

const isPoint3D = point => isPoint(point) && point.hasOwnProperty('z');

const distance1D = (a, b) => Math.abs(a - b);

function distance(a, b) {
  if (isNum(a) && isNum(b)) {
    return distance1D(a, b);
  } else if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    const zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}

const a = (a1, a2) => 1.0 - 3.0 * a2 + 3.0 * a1;

const b = (a1, a2) => 3.0 * a2 - 6.0 * a1;

const c = a1 => 3.0 * a1;

const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;

const getSlope = (t, a1, a2) => 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);

const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 10;

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);

  return currentT;
}

const newtonIterations = 8;
const newtonMinSlope = 0.001;

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return linear;
  const sampleValues = new Float32Array(kSplineTableSize);

  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    let intervalStart = 0.0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}

function removeItem(arr, item) {
  var index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
} // Adapted from array-move

var SubscriptionManager =
/** @class */
function () {
  function SubscriptionManager() {
    this.subscriptions = [];
  }

  SubscriptionManager.prototype.add = function (handler) {
    var _this = this;

    addUniqueItem(this.subscriptions, handler);
    return function () {
      return removeItem(_this.subscriptions, handler);
    };
  };

  SubscriptionManager.prototype.notify = function (a, b, c) {
    var numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions) return;

    if (numSubscriptions === 1) {
      /**
       * If there's only a single handler we can just call it without invoking a loop.
       */
      this.subscriptions[0](a, b, c);
    } else {
      for (var i = 0; i < numSubscriptions; i++) {
        /**
         * Check whether the handler exists before firing as it's possible
         * the subscriptions were modified during this loop running.
         */
        var handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  };

  SubscriptionManager.prototype.getSize = function () {
    return this.subscriptions.length;
  };

  SubscriptionManager.prototype.clear = function () {
    this.subscriptions.length = 0;
  };

  return SubscriptionManager;
}();

var isFloat = function (value) {
  return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */


var MotionValue =
/** @class */
function () {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  function MotionValue(init) {
    var _this = this;
    /**
     * Duration, in milliseconds, since last updating frame.
     *
     * @internal
     */


    this.timeDelta = 0;
    /**
     * Timestamp of the last time this `MotionValue` was updated.
     *
     * @internal
     */

    this.lastUpdated = 0;
    /**
     * Functions to notify when the `MotionValue` updates.
     *
     * @internal
     */

    this.updateSubscribers = new SubscriptionManager();
    /**
     * Functions to notify when the velocity updates.
     *
     * @internal
     */

    this.velocityUpdateSubscribers = new SubscriptionManager();
    /**
     * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
     *
     * @internal
     */

    this.renderSubscribers = new SubscriptionManager();
    /**
     * Tracks whether this value can output a velocity. Currently this is only true
     * if the value is numerical, but we might be able to widen the scope here and support
     * other value types.
     *
     * @internal
     */

    this.canTrackVelocity = false;

    this.updateAndNotify = function (v, render) {
      if (render === void 0) {
        render = true;
      }

      _this.prev = _this.current;
      _this.current = v; // Update timestamp

      var _a = getFrameData(),
          delta = _a.delta,
          timestamp = _a.timestamp;

      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        sync.postRender(_this.scheduleVelocityCheck);
      } // Update update subscribers


      if (_this.prev !== _this.current) {
        _this.updateSubscribers.notify(_this.current);
      } // Update velocity subscribers


      if (_this.velocityUpdateSubscribers.getSize()) {
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      } // Update render subscribers


      if (render) {
        _this.renderSubscribers.notify(_this.current);
      }
    };
    /**
     * Schedule a velocity check for the next frame.
     *
     * This is an instanced and bound function to prevent generating a new
     * function once per frame.
     *
     * @internal
     */


    this.scheduleVelocityCheck = function () {
      return sync.postRender(_this.velocityCheck);
    };
    /**
     * Updates `prev` with `current` if the value hasn't been updated this frame.
     * This ensures velocity calculations return `0`.
     *
     * This is an instanced and bound function to prevent generating a new
     * function once per frame.
     *
     * @internal
     */


    this.velocityCheck = function (_a) {
      var timestamp = _a.timestamp;

      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;

        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
    };

    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.onChange(updateOpacity)
   *     const unsubscribeY = y.onChange(updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @internalremarks
   *
   * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
   *
   * ```jsx
   * useOnChange(x, () => {})
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @public
   */


  MotionValue.prototype.onChange = function (subscription) {
    return this.updateSubscribers.add(subscription);
  };

  MotionValue.prototype.clearListeners = function () {
    this.updateSubscribers.clear();
  };
  /**
   * Adds a function that will be notified when the `MotionValue` requests a render.
   *
   * @param subscriber - A function that's provided the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @internal
   */


  MotionValue.prototype.onRenderRequest = function (subscription) {
    // Render immediately
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  };
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */


  MotionValue.prototype.attach = function (passiveEffect) {
    this.passiveEffect = passiveEffect;
  };
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */


  MotionValue.prototype.set = function (v, render) {
    if (render === void 0) {
      render = true;
    }

    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  };
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */


  MotionValue.prototype.get = function () {
    return this.current;
  };
  /**
   * @public
   */


  MotionValue.prototype.getPrevious = function () {
    return this.prev;
  };
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */


  MotionValue.prototype.getVelocity = function () {
    // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
    return this.canTrackVelocity ? // These casts could be avoided if parseFloat would be typed better
    velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */


  MotionValue.prototype.start = function (animation) {
    var _this = this;

    this.stop();
    return new Promise(function (resolve) {
      _this.hasAnimated = true;
      _this.stopAnimation = animation(resolve);
    }).then(function () {
      return _this.clearAnimation();
    });
  };
  /**
   * Stop the currently active animation.
   *
   * @public
   */


  MotionValue.prototype.stop = function () {
    if (this.stopAnimation) this.stopAnimation();
    this.clearAnimation();
  };
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */


  MotionValue.prototype.isAnimating = function () {
    return !!this.stopAnimation;
  };

  MotionValue.prototype.clearAnimation = function () {
    this.stopAnimation = null;
  };
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */


  MotionValue.prototype.destroy = function () {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  };

  return MotionValue;
}();
/**
 * @internal
 */


function motionValue(init) {
  return new MotionValue(init);
}

var isMotionValue = function (value) {
  return value !== null && typeof value === "object" && value.getVelocity;
};

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) {
  return seconds * 1000;
};

var easingLookup = {
  linear: linear,
  easeIn: easeIn,
  easeInOut: easeInOut,
  easeOut: easeOut,
  circIn: circIn,
  circInOut: circInOut,
  circOut: circOut,
  backIn: backIn,
  backInOut: backInOut,
  backOut: backOut,
  anticipate: anticipate,
  bounceIn: bounceIn,
  bounceInOut: bounceInOut,
  bounceOut: bounceOut
};

var easingDefinitionToFunction = function (definition) {
  if (Array.isArray(definition)) {
    // If cubic bezier definition, create bezier curve
    invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");

    var _a = __read(definition, 4),
        x1 = _a[0],
        y1 = _a[1],
        x2 = _a[2],
        y2 = _a[3];

    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    // Else lookup from table
    invariant(easingLookup[definition] !== undefined, "Invalid easing type '" + definition + "'");
    return easingLookup[definition];
  }

  return definition;
};

var isEasingArray = function (ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */

var isAnimatable = function (key, value) {
  // If the list of keys tat might be non-animatable grows, replace with Set
  if (key === "zIndex") return false; // If it's a number or a keyframes array, we can animate it. We might at some point
  // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
  // but for now lets leave it like this for performance reasons

  if (typeof value === "number" || Array.isArray(value)) return true;

  if (typeof value === "string" && // It's animatable if we have a string
  complex.test(value) && // And it contains numbers and/or colors
  !value.startsWith("url(") // Unless it starts with "url("
  ) {
      return true;
    }

  return false;
};

var isKeyframesTarget = function (v) {
  return Array.isArray(v);
};

var underDampedSpring = function () {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10
  };
};

var criticallyDampedSpring = function (to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10
  };
};

var linearTween = function () {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};

var keyframes$1 = function (values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: values
  };
};

var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};

var getDefaultTransition = function (valueKey, to) {
  var transitionFactory;

  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes$1;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }

  return __assign({
    to: to
  }, transitionFactory(to));
};

var int = __assign(__assign({}, number), {
  transform: Math.round
});

var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Transform props
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale: scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  // Misc
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

/**
 * A map of default value types for common values
 */

var defaultValueTypes = __assign(__assign({}, numberValueTypes), {
  // Color props
  color: color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter: filter,
  WebkitFilter: filter
});
/**
 * Gets the default ValueType for the provided value key
 */


var getDefaultValueType = function (key) {
  return defaultValueTypes[key];
};

function getAnimatableNone$1(key, value) {
  var _a;

  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter) defaultValueType = complex; // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target

  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}

/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */

function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;

  var transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);

  return !!Object.keys(transition).length;
}

var legacyRepeatWarning = false;
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */

function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease,
      times = _a.times,
      yoyo = _a.yoyo,
      flip = _a.flip,
      loop = _a.loop,
      transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);

  var options = __assign({}, transition);

  if (times) options["offset"] = times;
  /**
   * Convert any existing durations from seconds to milliseconds
   */

  if (transition.duration) options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay) options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  /**
   * Map easing names to Popmotion's easing functions
   */

  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  /**
   * Support legacy transition API
   */


  if (transition.type === "tween") options.type = "keyframes";
  /**
   * TODO: These options are officially removed from the API.
   */

  if (yoyo || loop || flip) {
    warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;

    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }

    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  /**
   * TODO: Popmotion 9 has the ability to automatically detect whether to use
   * a keyframes or spring animation, but does so by detecting velocity and other spring options.
   * It'd be good to introduce a similar thing here.
   */


  if (transition.type !== "spring") options.type = "keyframes";
  return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */


function getDelayFromTransition(transition, key) {
  var _a, _b;

  var valueTransition = getValueTransition(transition, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}

function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = __spreadArray([], __read(options.to), false);
    options.to[0] = options.from;
  }

  return options;
}

function getPopmotionAnimationOptions(transition, options, key) {
  var _a;

  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }

  hydrateKeyframes(options);
  /**
   * Get a default transition if none is determined to be defined.
   */

  if (!isTransitionDefined(transition)) {
    transition = __assign(__assign({}, transition), getDefaultTransition(key, options.to));
  }

  return __assign(__assign({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */


function getAnimation(key, value, target, transition, onComplete) {
  var _a;

  var valueTransition = getValueTransition(transition, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);

  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    /**
     * If we're trying to animate from "none", try and get an animatable version
     * of the target. This could be improved to work both ways.
     */
    origin = getAnimatableNone$1(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }

  var isOriginAnimatable = isAnimatable(key, origin);
  warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");

  function start() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete: onComplete,
      onUpdate: function (v) {
        return value.set(v);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__assign(__assign({}, options), valueTransition)) : animate(__assign(__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), {
      onUpdate: function (v) {
        var _a;

        options.onUpdate(v);
        (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
      },
      onComplete: function () {
        var _a;

        options.onComplete();
        (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
      }
    }));
  }

  function set() {
    var _a, _b;

    value.set(target);
    onComplete();
    (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, target);
    (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
    return {
      stop: function () {}
    };
  }

  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}

function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}

function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone$1("", potentialUnitType);
}

function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */


function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }

  return value.start(function (onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition, onComplete);
    var delay = getDelayFromTransition(transition, key);

    var start = function () {
      return controls = animation();
    };

    if (delay) {
      delayTimer = setTimeout(start, secondsToMilliseconds(delay));
    } else {
      start();
    }

    return function () {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}

/**
 * Animate a single value or a `MotionValue`.
 *
 * The first argument is either a `MotionValue` to animate, or an initial animation value.
 *
 * The second is either a value to animate to, or an array of keyframes to animate through.
 *
 * The third argument can be either tween or spring options, and optional lifecycle methods: `onUpdate`, `onPlay`, `onComplete`, `onRepeat` and `onStop`.
 *
 * Returns `AnimationPlaybackControls`, currently just a `stop` method.
 *
 * ```javascript
 * const x = useMotionValue(0)
 *
 * useEffect(() => {
 *   const controls = animate(x, 100, {
 *     type: "spring",
 *     stiffness: 2000,
 *     onComplete: v => {}
 *   })
 *
 *   return controls.stop
 * })
 * ```
 *
 * @public
 */

function animate$1(from, to, transition) {
  if (transition === void 0) {
    transition = {};
  }

  var value = isMotionValue(from) ? from : motionValue(from);
  startAnimation("", value, to, transition);
  return {
    stop: function () {
      return value.stop();
    },
    isAnimating: function () {
      return value.isAnimating();
    }
  };
}

var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;

function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;

  if (shouldCrossfadeOpacity) {
    target.opacity = mix(0, // (follow?.opacity as number) ?? 0,
    // TODO Reinstate this if only child
    (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress));
    target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress));
  } else if (isOnlyMember) {
    target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress);
  }
  /**
   * Mix border radius
   */


  for (var i = 0; i < numBorders; i++) {
    var borderLabel = "border" + borders[i] + "Radius";
    var followRadius = getRadius(follow, borderLabel);
    var leadRadius = getRadius(lead, borderLabel);
    if (followRadius === undefined && leadRadius === undefined) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    /**
     * Currently we're only crossfading between numerical border radius.
     * It would be possible to crossfade between percentages for a little
     * extra bundle size.
     */

    if (typeof followRadius === "number" && typeof leadRadius === "number") {
      var radius = Math.max(mix(followRadius, leadRadius, progress), 0);
      target[borderLabel] = radius;
    }
  }
  /**
   * Mix rotation
   */


  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress);
  }
}

function getRadius(values, radiusName) {
  var _a;

  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
} // /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }


var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, linear);

function compress(min, max, easing) {
  return function (p) {
    // Could replace ifs with clamp
    if (p < min) return 0;
    if (p > max) return 1;
    return easing(progress(min, max, p));
  };
}

/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */


function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

function isIdentityScale(scale) {
  return scale === undefined || scale === 1;
}

function hasScale(_a) {
  var scale = _a.scale,
      scaleX = _a.scaleX,
      scaleY = _a.scaleY;
  return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}

function hasTransform(values) {
  return hasScale(values) || hasTranslate(values.x) || hasTranslate(values.y) || values.z || values.rotate || values.rotateX || values.rotateY;
}

function hasTranslate(value) {
  return value && value !== "0%";
}

/**
 * Scales a point based on a factor and an originPoint
 */

function scalePoint(point, scale, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale * distanceFromOrigin;
  return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */


function applyPointDelta(point, translate, scale, originPoint, boxScale) {
  if (boxScale !== undefined) {
    point = scalePoint(point, boxScale, originPoint);
  }

  return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */


function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }

  if (scale === void 0) {
    scale = 1;
  }

  axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */


function applyBoxDelta(box, _a) {
  var x = _a.x,
      y = _a.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */


function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
  var _a, _b;

  if (isSharedTransition === void 0) {
    isSharedTransition = false;
  }

  var treeLength = treePath.length;
  if (!treeLength) return; // Reset the treeScale

  treeScale.x = treeScale.y = 1;
  var node;
  var delta;

  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents") continue;

    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.x,
        y: -node.scroll.y
      });
    }

    if (delta) {
      // Incoporate each ancestor's scale into a culmulative treeScale for this component
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale; // Apply each ancestor's calculated delta into this component's recorded layout box

      applyBoxDelta(box, delta);
    }

    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}

function translateAxis(axis, distance) {
  axis.min = axis.min + distance;
  axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */


function transformAxis(axis, transforms, _a) {
  var _b = __read(_a, 3),
      key = _b[0],
      scaleKey = _b[1],
      originKey = _b[2];

  var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
  var originPoint = mix(axis.min, axis.max, axisOrigin); // Apply the axis delta to the final axis

  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */


var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */

function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys);
  transformAxis(box.y, transform, yKeys);
}

function calcLength(axis) {
  return axis.max - axis.min;
}

function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }

  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }

  return distance(value, target) < maxDistance;
}

function calcAxisDelta(delta, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }

  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale)) delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate)) delta.translate = 0;
}

function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}

function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}

function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}

function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}

function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */

function removePointDelta(point, translate, scale, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale, originPoint);

  if (boxScale !== undefined) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }

  return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */


function removeAxisDelta(axis, translate, scale, origin, boxScale, originAxis, sourceAxis) {
  if (translate === void 0) {
    translate = 0;
  }

  if (scale === void 0) {
    scale = 1;
  }

  if (origin === void 0) {
    origin = 0.5;
  }

  if (originAxis === void 0) {
    originAxis = axis;
  }

  if (sourceAxis === void 0) {
    sourceAxis = axis;
  }

  if (percent.test(translate)) {
    translate = parseFloat(translate);
    var relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }

  if (typeof translate !== "number") return;
  var originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis) originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */


function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
  var _b = __read(_a, 3),
      key = _b[0],
      scaleKey = _b[1],
      originKey = _b[2];

  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */


var xKeys$1 = ["x", "scaleX", "originX"];
var yKeys$1 = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */

function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys$1, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms, yKeys$1, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}

var createAxisDelta = function () {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
};

var createDelta = function () {
  return {
    x: createAxisDelta(),
    y: createAxisDelta()
  };
};

var createAxis = function () {
  return {
    min: 0,
    max: 0
  };
};

var createBox = function () {
  return {
    x: createAxis(),
    y: createAxis()
  };
};

function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}

function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}

function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}

var NodeStack =
/** @class */
function () {
  function NodeStack() {
    this.members = [];
  }

  NodeStack.prototype.add = function (node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  };

  NodeStack.prototype.remove = function (node) {
    removeItem(this.members, node);

    if (node === this.prevLead) {
      this.prevLead = undefined;
    }

    if (node === this.lead) {
      var prevLead = this.members[this.members.length - 1];

      if (prevLead) {
        this.promote(prevLead);
      }
    }
  };

  NodeStack.prototype.relegate = function (node) {
    var indexOfNode = this.members.findIndex(function (member) {
      return node === member;
    });
    if (indexOfNode === 0) return false;
    /**
     * Find the next projection node that is present
     */

    var prevLead;

    for (var i = indexOfNode; i >= 0; i--) {
      var member = this.members[i];

      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }

    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  };

  NodeStack.prototype.promote = function (node, preserveFollowOpacity) {
    var _a;

    var prevLead = this.lead;
    if (node === prevLead) return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();

    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;

      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }

      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }

      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }

      var crossfade = node.options.crossfade;

      if (crossfade === false) {
        prevLead.hide();
      }
      /**
       * TODO:
       *   - Test border radius when previous node was deleted
       *   - boxShadow mixing
       *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
       *   - Shared between element A in transformed container and element B (transform stays the same or changes)
       *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
       * ---
       *   - Crossfade opacity of root nodes
       *   - layoutId changes after animation
       *   - layoutId changes mid animation
       */

    }
  };

  NodeStack.prototype.exitAnimationComplete = function () {
    this.members.forEach(function (node) {
      var _a, _b, _c, _d, _e;

      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  };

  NodeStack.prototype.scheduleRender = function () {
    this.members.forEach(function (node) {
      node.instance && node.scheduleRender(false);
    });
  };
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */


  NodeStack.prototype.removeLeadSnapshot = function () {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = undefined;
    }
  };

  return NodeStack;
}();

var scaleCorrectors = {};

function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1)";

function buildProjectionTransform(delta, treeScale, latestTransform) {
  /**
   * The translations we use to calculate are always relative to the viewport coordinate space.
   * But when we apply scales, we also scale the coordinate space of an element and its children.
   * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
   * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
   */
  var xTranslate = delta.x.translate / treeScale.x;
  var yTranslate = delta.y.translate / treeScale.y;
  var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";

  if (latestTransform) {
    var rotate = latestTransform.rotate,
        rotateX = latestTransform.rotateX,
        rotateY = latestTransform.rotateY;
    if (rotate) transform += "rotate(" + rotate + "deg) ";
    if (rotateX) transform += "rotateX(" + rotateX + "deg) ";
    if (rotateY) transform += "rotateY(" + rotateY + "deg) ";
  }

  transform += "scale(" + delta.x.scale + ", " + delta.y.scale + ")";
  return transform === identityProjection ? "none" : transform;
}

function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */

var order = ["translate", "scale", "rotate", "skew"];
/**
 * Generate a list of every possible transform key.
 */

var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
  return transformAxes.forEach(function (axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */

function sortTransformProps(a, b) {
  return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */


var transformPropSet = new Set(transformProps);

function isTransformProp(key) {
  return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */


var transformOriginProps = new Set(["originX", "originY", "originZ"]);

function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}

var compareByDepth = function (a, b) {
  return a.depth - b.depth;
};

var FlatTree =
/** @class */
function () {
  function FlatTree() {
    this.children = [];
    this.isDirty = false;
  }

  FlatTree.prototype.add = function (child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  };

  FlatTree.prototype.remove = function (child) {
    removeItem(this.children, child);
    this.isDirty = true;
  };

  FlatTree.prototype.forEach = function (callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  };

  return FlatTree;
}();

var isCustomValue = function (v) {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};

var resolveFinalValueInKeyframes = function (v) {
  // TODO maybe throw if v.length - 1 is placeholder token?
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */

function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */

var animationTarget = 1000;
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */

var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,

  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

function createProjectionNode(_a) {
  var attachResizeListener = _a.attachResizeListener,
      defaultParent = _a.defaultParent,
      measureScroll = _a.measureScroll,
      resetTransform = _a.resetTransform;
  return (
    /** @class */
    function () {
      function ProjectionNode(id, latestValues, parent) {
        var _this = this;

        if (latestValues === void 0) {
          latestValues = {};
        }

        if (parent === void 0) {
          parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
        }
        /**
         * A Set containing all this component's children. This is used to iterate
         * through the children.
         *
         * TODO: This could be faster to iterate as a flat array stored on the root node.
         */


        this.children = new Set();
        /**
         * Options for the node. We use this to configure what kind of layout animations
         * we should perform (if any).
         */

        this.options = {};
        /**
         * We use this to detect when its safe to shut down part of a projection tree.
         * We have to keep projecting children for scale correction and relative projection
         * until all their parents stop performing layout animations.
         */

        this.isTreeAnimating = false;
        this.isAnimationBlocked = false;
        /**
         * Flag to true if we think this layout has been changed. We can't always know this,
         * currently we set it to true every time a component renders, or if it has a layoutDependency
         * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
         * and if one node is dirtied, they all are.
         */

        this.isLayoutDirty = false;
        /**
         * Block layout updates for instant layout transitions throughout the tree.
         */

        this.updateManuallyBlocked = false;
        this.updateBlockedByResize = false;
        /**
         * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
         * call.
         */

        this.isUpdating = false;
        /**
         * If this is an SVG element we currently disable projection transforms
         */

        this.isSVG = false;
        /**
         * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
         * its projection styles.
         */

        this.needsReset = false;
        /**
         * Flags whether this node should have its transform reset prior to measuring.
         */

        this.shouldResetTransform = false;
        /**
         * An object representing the calculated contextual/accumulated/tree scale.
         * This will be used to scale calculcated projection transforms, as these are
         * calculated in screen-space but need to be scaled for elements to actually
         * make it to their calculated destinations.
         *
         * TODO: Lazy-init
         */

        this.treeScale = {
          x: 1,
          y: 1
        };
        /**
         *
         */

        this.eventHandlers = new Map(); // Note: Currently only running on root node

        this.potentialNodes = new Map();

        this.checkUpdateFailed = function () {
          if (_this.isUpdating) {
            _this.isUpdating = false;

            _this.clearAllSnapshots();
          }
        };

        this.updateProjection = function () {
          _this.nodes.forEach(resolveTargetDelta);

          _this.nodes.forEach(calcProjection);
        };

        this.hasProjected = false;
        this.isVisible = true;
        /**
         * Animation
         */

        this.animationProgress = 0;
        /**
         * Shared layout
         */
        // TODO Only running on root node

        this.sharedNodes = new Map();
        this.id = id;
        this.latestValues = latestValues;
        this.root = parent ? parent.root || parent : this;
        this.path = parent ? __spreadArray(__spreadArray([], __read(parent.path), false), [parent], false) : [];
        this.parent = parent;
        this.depth = parent ? parent.depth + 1 : 0;
        id && this.root.registerPotentialNode(id, this);

        for (var i = 0; i < this.path.length; i++) {
          this.path[i].shouldResetTransform = true;
        }

        if (this.root === this) this.nodes = new FlatTree();
      }

      ProjectionNode.prototype.addEventListener = function (name, handler) {
        if (!this.eventHandlers.has(name)) {
          this.eventHandlers.set(name, new SubscriptionManager());
        }

        return this.eventHandlers.get(name).add(handler);
      };

      ProjectionNode.prototype.notifyListeners = function (name) {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        var subscriptionManager = this.eventHandlers.get(name);
        subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, __spreadArray([], __read(args), false));
      };

      ProjectionNode.prototype.hasListeners = function (name) {
        return this.eventHandlers.has(name);
      };

      ProjectionNode.prototype.registerPotentialNode = function (id, node) {
        this.potentialNodes.set(id, node);
      };
      /**
       * Lifecycles
       */


      ProjectionNode.prototype.mount = function (instance, isLayoutDirty) {
        var _this = this;

        var _a;

        if (isLayoutDirty === void 0) {
          isLayoutDirty = false;
        }

        if (this.instance) return;
        this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
        this.instance = instance;
        var _b = this.options,
            layoutId = _b.layoutId,
            layout = _b.layout,
            visualElement = _b.visualElement;

        if (visualElement && !visualElement.getInstance()) {
          visualElement.mount(instance);
        }

        this.root.nodes.add(this);
        (_a = this.parent) === null || _a === void 0 ? void 0 : _a.children.add(this);
        this.id && this.root.potentialNodes.delete(this.id);

        if (isLayoutDirty && (layout || layoutId)) {
          this.isLayoutDirty = true;
        }

        if (attachResizeListener) {
          var unblockTimeout_1;

          var resizeUnblockUpdate_1 = function () {
            return _this.root.updateBlockedByResize = false;
          };

          attachResizeListener(instance, function () {
            _this.root.updateBlockedByResize = true;
            clearTimeout(unblockTimeout_1);
            unblockTimeout_1 = setTimeout(resizeUnblockUpdate_1, 250);

            if (globalProjectionState.hasAnimatedSinceResize) {
              globalProjectionState.hasAnimatedSinceResize = false;

              _this.nodes.forEach(finishAnimation);
            }
          });
        }

        if (layoutId) {
          this.root.registerSharedNode(layoutId, this);
        } // Only register the handler if it requires layout animation


        if (this.options.animate !== false && visualElement && (layoutId || layout)) {
          this.addEventListener("didUpdate", function (_a) {
            var _b, _c, _d, _e, _f;

            var delta = _a.delta,
                hasLayoutChanged = _a.hasLayoutChanged,
                hasRelativeTargetChanged = _a.hasRelativeTargetChanged,
                newLayout = _a.layout;

            if (_this.isTreeAnimationBlocked()) {
              _this.target = undefined;
              _this.relativeTarget = undefined;
              return;
            } // TODO: Check here if an animation exists


            var layoutTransition = (_c = (_b = _this.options.transition) !== null && _b !== void 0 ? _b : visualElement.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
            var onLayoutAnimationComplete = visualElement.getProps().onLayoutAnimationComplete;
            /**
             * The target layout of the element might stay the same,
             * but its position relative to its parent has changed.
             */

            var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
            /**
             * If the layout hasn't seemed to have changed, it might be that the
             * element is visually in the same place in the document but its position
             * relative to its parent has indeed changed. So here we check for that.
             */

            var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;

            if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
              if (_this.resumeFrom) {
                _this.resumingFrom = _this.resumeFrom;
                _this.resumingFrom.resumingFrom = undefined;
              }

              _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);

              _this.startAnimation(__assign(__assign({}, getValueTransition(layoutTransition, "layout")), {
                onComplete: onLayoutAnimationComplete
              }));
            } else {
              _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
            }

            _this.targetLayout = newLayout;
          });
        }
      };

      ProjectionNode.prototype.unmount = function () {
        var _a, _b;

        this.options.layoutId && this.willUpdate();
        this.root.nodes.remove(this);
        (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.remove(this);
        (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
        this.instance = undefined;
        cancelSync.preRender(this.updateProjection);
      }; // only on the root


      ProjectionNode.prototype.blockUpdate = function () {
        this.updateManuallyBlocked = true;
      };

      ProjectionNode.prototype.unblockUpdate = function () {
        this.updateManuallyBlocked = false;
      };

      ProjectionNode.prototype.isUpdateBlocked = function () {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      };

      ProjectionNode.prototype.isTreeAnimationBlocked = function () {
        var _a;

        return this.isAnimationBlocked || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimationBlocked()) || false;
      }; // Note: currently only running on root node


      ProjectionNode.prototype.startUpdate = function () {
        var _a;

        if (this.isUpdateBlocked()) return;
        this.isUpdating = true;
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach(resetRotation);
      };

      ProjectionNode.prototype.willUpdate = function (shouldNotifyListeners) {
        var _a, _b, _c;

        if (shouldNotifyListeners === void 0) {
          shouldNotifyListeners = true;
        }

        if (this.root.isUpdateBlocked()) {
          (_b = (_a = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
          return;
        }

        !this.root.isUpdating && this.root.startUpdate();
        if (this.isLayoutDirty) return;
        this.isLayoutDirty = true;

        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          node.shouldResetTransform = true;
          /**
           * TODO: Check we haven't updated the scroll
           * since the last didUpdate
           */

          node.updateScroll();
        }

        var _d = this.options,
            layoutId = _d.layoutId,
            layout = _d.layout;
        if (layoutId === undefined && !layout) return;
        var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
        this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
        this.updateSnapshot();
        shouldNotifyListeners && this.notifyListeners("willUpdate");
      }; // Note: Currently only running on root node


      ProjectionNode.prototype.didUpdate = function () {
        var updateWasBlocked = this.isUpdateBlocked(); // When doing an instant transition, we skip the layout update,
        // but should still clean up the measurements so that the next
        // snapshot could be taken correctly.

        if (updateWasBlocked) {
          this.unblockUpdate();
          this.clearAllSnapshots();
          this.nodes.forEach(clearMeasurements);
          return;
        }

        if (!this.isUpdating) return;
        this.isUpdating = false;
        /**
         * Search for and mount newly-added projection elements.
         *
         * TODO: Every time a new component is rendered we could search up the tree for
         * the closest mounted node and query from there rather than document.
         */

        if (this.potentialNodes.size) {
          this.potentialNodes.forEach(mountNodeEarly);
          this.potentialNodes.clear();
        }
        /**
         * Write
         */


        this.nodes.forEach(resetTransformStyle);
        /**
         * Read ==================
         */
        // Update layout measurements of updated children

        this.nodes.forEach(updateLayout);
        /**
         * Write
         */
        // Notify listeners that the layout is updated

        this.nodes.forEach(notifyLayoutUpdate);
        this.clearAllSnapshots(); // Flush any scheduled updates

        flushSync.update();
        flushSync.preRender();
        flushSync.render();
      };

      ProjectionNode.prototype.clearAllSnapshots = function () {
        this.nodes.forEach(clearSnapshot);
        this.sharedNodes.forEach(removeLeadSnapshots);
      };

      ProjectionNode.prototype.scheduleUpdateProjection = function () {
        sync.preRender(this.updateProjection, false, true);
      };

      ProjectionNode.prototype.scheduleCheckAfterUnmount = function () {
        var _this = this;
        /**
         * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
         * we manually call didUpdate to give a chance to the siblings to animate.
         * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
         */


        sync.postRender(function () {
          if (_this.isLayoutDirty) {
            _this.root.didUpdate();
          } else {
            _this.root.checkUpdateFailed();
          }
        });
      };
      /**
       * Update measurements
       */


      ProjectionNode.prototype.updateSnapshot = function () {
        if (this.snapshot || !this.instance) return;
        var measured = this.measure();
        var layout = this.removeTransform(this.removeElementScroll(measured));
        roundBox(layout);
        this.snapshot = {
          measured: measured,
          layout: layout,
          latestValues: {}
        };
      };

      ProjectionNode.prototype.updateLayout = function () {
        var _a;

        if (!this.instance) return; // TODO: Incorporate into a forwarded scroll offset

        this.updateScroll();

        if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
          return;
        }
        /**
         * When a node is mounted, it simply resumes from the prevLead's
         * snapshot instead of taking a new one, but the ancestors scroll
         * might have updated while the prevLead is unmounted. We need to
         * update the scroll again to make sure the layout we measure is
         * up to date.
         */


        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (var i = 0; i < this.path.length; i++) {
            var node = this.path[i];
            node.updateScroll();
          }
        }

        var measured = this.measure();
        roundBox(measured);
        var prevLayout = this.layout;
        this.layout = {
          measured: measured,
          actual: this.removeElementScroll(measured)
        };
        this.layoutCorrected = createBox();
        this.isLayoutDirty = false;
        this.projectionDelta = undefined;
        this.notifyListeners("measure");
        (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
      };

      ProjectionNode.prototype.updateScroll = function () {
        if (this.options.layoutScroll && this.instance) {
          this.scroll = measureScroll(this.instance);
        }
      };

      ProjectionNode.prototype.resetTransform = function () {
        var _a;

        if (!resetTransform) return;
        var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
        var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
        var transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
        var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
        var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;

        if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
          resetTransform(this.instance, transformTemplateValue);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      };

      ProjectionNode.prototype.measure = function () {
        var visualElement = this.options.visualElement;
        if (!visualElement) return createBox();
        var box = visualElement.measureViewportBox(); // Remove viewport scroll to give page-relative coordinates

        var scroll = this.root.scroll;

        if (scroll) {
          translateAxis(box.x, scroll.x);
          translateAxis(box.y, scroll.y);
        }

        return box;
      };

      ProjectionNode.prototype.removeElementScroll = function (box) {
        var boxWithoutScroll = createBox();
        copyBoxInto(boxWithoutScroll, box);
        /**
         * Performance TODO: Keep a cumulative scroll offset down the tree
         * rather than loop back up the path.
         */

        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          var scroll_1 = node.scroll,
              options = node.options;

          if (node !== this.root && scroll_1 && options.layoutScroll) {
            translateAxis(boxWithoutScroll.x, scroll_1.x);
            translateAxis(boxWithoutScroll.y, scroll_1.y);
          }
        }

        return boxWithoutScroll;
      };

      ProjectionNode.prototype.applyTransform = function (box, transformOnly) {
        if (transformOnly === void 0) {
          transformOnly = false;
        }

        var withTransforms = createBox();
        copyBoxInto(withTransforms, box);

        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];

          if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
            transformBox(withTransforms, {
              x: -node.scroll.x,
              y: -node.scroll.y
            });
          }

          if (!hasTransform(node.latestValues)) continue;
          transformBox(withTransforms, node.latestValues);
        }

        if (hasTransform(this.latestValues)) {
          transformBox(withTransforms, this.latestValues);
        }

        return withTransforms;
      };

      ProjectionNode.prototype.removeTransform = function (box) {
        var _a;

        var boxWithoutTransform = createBox();
        copyBoxInto(boxWithoutTransform, box);

        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          if (!node.instance) continue;
          if (!hasTransform(node.latestValues)) continue;
          hasScale(node.latestValues) && node.updateSnapshot();
          var sourceBox = createBox();
          var nodeBox = node.measure();
          copyBoxInto(sourceBox, nodeBox);
          removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a = node.snapshot) === null || _a === void 0 ? void 0 : _a.layout, sourceBox);
        }

        if (hasTransform(this.latestValues)) {
          removeBoxTransforms(boxWithoutTransform, this.latestValues);
        }

        return boxWithoutTransform;
      };
      /**
       *
       */


      ProjectionNode.prototype.setTargetDelta = function (delta) {
        this.targetDelta = delta;
        this.root.scheduleUpdateProjection();
      };

      ProjectionNode.prototype.setOptions = function (options) {
        var _a;

        this.options = __assign(__assign(__assign({}, this.options), options), {
          crossfade: (_a = options.crossfade) !== null && _a !== void 0 ? _a : true
        });
      };

      ProjectionNode.prototype.clearMeasurements = function () {
        this.scroll = undefined;
        this.layout = undefined;
        this.snapshot = undefined;
        this.prevTransformTemplateValue = undefined;
        this.targetDelta = undefined;
        this.target = undefined;
        this.isLayoutDirty = false;
      };
      /**
       * Frame calculations
       */


      ProjectionNode.prototype.resolveTargetDelta = function () {
        var _a;

        var _b = this.options,
            layout = _b.layout,
            layoutId = _b.layoutId;
        /**
         * If we have no layout, we can't perform projection, so early return
         */

        if (!this.layout || !(layout || layoutId)) return;
        /**
         * If we don't have a targetDelta but do have a layout, we can attempt to resolve
         * a relativeParent. This will allow a component to perform scale correction
         * even if no animation has started.
         */
        // TODO If this is unsuccessful this currently happens every frame

        if (!this.targetDelta && !this.relativeTarget) {
          // TODO: This is a semi-repetition of further down this function, make DRY
          this.relativeParent = this.getClosestProjectingParent();

          if (this.relativeParent && this.relativeParent.layout) {
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          }
        }
        /**
         * If we have no relative target or no target delta our target isn't valid
         * for this frame.
         */


        if (!this.relativeTarget && !this.targetDelta) return;
        /**
         * Lazy-init target data structure
         */

        if (!this.target) {
          this.target = createBox();
          this.targetWithTransforms = createBox();
        }
        /**
         * If we've got a relative box for this component, resolve it into a target relative to the parent.
         */


        if (this.relativeTarget && this.relativeTargetOrigin && ((_a = this.relativeParent) === null || _a === void 0 ? void 0 : _a.target)) {
          calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
          /**
           * If we've only got a targetDelta, resolve it into a target
           */
        } else if (this.targetDelta) {
          if (Boolean(this.resumingFrom)) {
            // TODO: This is creating a new object every frame
            this.target = this.applyTransform(this.layout.actual);
          } else {
            copyBoxInto(this.target, this.layout.actual);
          }

          applyBoxDelta(this.target, this.targetDelta);
        } else {
          /**
           * If no target, use own layout as target
           */
          copyBoxInto(this.target, this.layout.actual);
        }
        /**
         * If we've been told to attempt to resolve a relative target, do so.
         */


        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          this.relativeParent = this.getClosestProjectingParent();

          if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          }
        }
      };

      ProjectionNode.prototype.getClosestProjectingParent = function () {
        if (!this.parent || hasTransform(this.parent.latestValues)) return undefined;

        if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      };

      ProjectionNode.prototype.calcProjection = function () {
        var _a;

        var _b = this.options,
            layout = _b.layout,
            layoutId = _b.layoutId;
        /**
         * If this section of the tree isn't animating we can
         * delete our target sources for the following frame.
         */

        this.isTreeAnimating = Boolean(((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);

        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = undefined;
        }

        if (!this.layout || !(layout || layoutId)) return;
        var lead = this.getLead();
        /**
         * Reset the corrected box with the latest values from box, as we're then going
         * to perform mutative operations on it.
         */

        copyBoxInto(this.layoutCorrected, this.layout.actual);
        /**
         * Apply all the parent deltas to this box to produce the corrected box. This
         * is the layout box, as it will appear on screen as a result of the transforms of its parents.
         */

        applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
        var target = lead.target;
        if (!target) return;

        if (!this.projectionDelta) {
          this.projectionDelta = createDelta();
          this.projectionDeltaWithTransform = createDelta();
        }

        var prevTreeScaleX = this.treeScale.x;
        var prevTreeScaleY = this.treeScale.y;
        var prevProjectionTransform = this.projectionTransform;
        /**
         * Update the delta between the corrected box and the target box before user-set transforms were applied.
         * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
         * for our layout reprojection, but still allow them to be scaled correctly by the user.
         * It might be that to simplify this we may want to accept that user-set scale is also corrected
         * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
         * to allow people to choose whether these styles are corrected based on just the
         * layout reprojection or the final bounding box.
         */

        calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
        this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);

        if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
          this.hasProjected = true;
          this.scheduleRender();
        }
      };

      ProjectionNode.prototype.hide = function () {
        this.isVisible = false; // TODO: Schedule render
      };

      ProjectionNode.prototype.show = function () {
        this.isVisible = true; // TODO: Schedule render
      };

      ProjectionNode.prototype.scheduleRender = function (notifyAll) {
        var _a, _b, _c;

        if (notifyAll === void 0) {
          notifyAll = true;
        }

        (_b = (_a = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a);
        notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());

        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = undefined;
        }
      };

      ProjectionNode.prototype.setAnimationOrigin = function (delta, hasOnlyRelativeTargetChanged) {
        var _this = this;

        var _a;

        if (hasOnlyRelativeTargetChanged === void 0) {
          hasOnlyRelativeTargetChanged = false;
        }

        var snapshot = this.snapshot;
        var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};

        var mixedValues = __assign({}, this.latestValues);

        var targetDelta = createDelta();
        this.relativeTarget = this.relativeTargetOrigin = undefined;
        this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
        var relativeLayout = createBox();
        var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
        var isOnlyMember = (((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.members.length) || 0) <= 1;
        var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));

        this.mixTargetDelta = function (latest) {
          var _a;

          var progress = latest / 1000;
          mixAxisDelta(targetDelta.x, delta.x, progress);
          mixAxisDelta(targetDelta.y, delta.y, progress);

          _this.setTargetDelta(targetDelta);

          if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a = _this.relativeParent) === null || _a === void 0 ? void 0 : _a.layout)) {
            calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
            mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress);
          }

          if (isSharedLayoutAnimation) {
            _this.animationValues = mixedValues;
            mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
          }

          _this.root.scheduleUpdateProjection();

          _this.scheduleRender();
        };

        this.mixTargetDelta(0);
      };

      ProjectionNode.prototype.startAnimation = function (options) {
        var _this = this;

        var _a, _b;

        (_a = this.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();

        if (this.resumingFrom) {
          (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
        }

        if (this.pendingAnimation) {
          cancelSync.update(this.pendingAnimation);
          this.pendingAnimation = undefined;
        }
        /**
         * Start the animation in the next frame to have a frame with progress 0,
         * where the target is the same as when the animation started, so we can
         * calculate the relative positions correctly for instant transitions.
         */


        this.pendingAnimation = sync.update(function () {
          globalProjectionState.hasAnimatedSinceResize = true;
          _this.currentAnimation = animate$1(0, animationTarget, __assign(__assign({}, options), {
            onUpdate: function (latest) {
              var _a;

              _this.mixTargetDelta(latest);

              (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, latest);
            },
            onComplete: function () {
              var _a;

              (_a = options.onComplete) === null || _a === void 0 ? void 0 : _a.call(options);

              _this.completeAnimation();
            }
          }));

          if (_this.resumingFrom) {
            _this.resumingFrom.currentAnimation = _this.currentAnimation;
          }

          _this.pendingAnimation = undefined;
        });
      };

      ProjectionNode.prototype.completeAnimation = function () {
        var _a;

        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = undefined;
          this.resumingFrom.preserveOpacity = undefined;
        }

        (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.exitAnimationComplete();
        this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
      };

      ProjectionNode.prototype.finishAnimation = function () {
        var _a;

        if (this.currentAnimation) {
          (_a = this.mixTargetDelta) === null || _a === void 0 ? void 0 : _a.call(this, animationTarget);
          this.currentAnimation.stop();
        }

        this.completeAnimation();
      };

      ProjectionNode.prototype.applyTransformsToTarget = function () {
        var _a = this.getLead(),
            targetWithTransforms = _a.targetWithTransforms,
            target = _a.target,
            layout = _a.layout,
            latestValues = _a.latestValues;

        if (!targetWithTransforms || !target || !layout) return;
        copyBoxInto(targetWithTransforms, target);
        /**
         * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
         * This is the final box that we will then project into by calculating a transform delta and
         * applying it to the corrected box.
         */

        transformBox(targetWithTransforms, latestValues);
        /**
         * Update the delta between the corrected box and the final target box, after
         * user-set transforms are applied to it. This will be used by the renderer to
         * create a transform style that will reproject the element from its actual layout
         * into the desired bounding box.
         */

        calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      };

      ProjectionNode.prototype.registerSharedNode = function (layoutId, node) {
        var _a, _b, _c;

        if (!this.sharedNodes.has(layoutId)) {
          this.sharedNodes.set(layoutId, new NodeStack());
        }

        var stack = this.sharedNodes.get(layoutId);
        stack.add(node);
        node.promote({
          transition: (_a = node.options.initialPromotionConfig) === null || _a === void 0 ? void 0 : _a.transition,
          preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
        });
      };

      ProjectionNode.prototype.isLead = function () {
        var stack = this.getStack();
        return stack ? stack.lead === this : true;
      };

      ProjectionNode.prototype.getLead = function () {
        var _a;

        var layoutId = this.options.layoutId;
        return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
      };

      ProjectionNode.prototype.getPrevLead = function () {
        var _a;

        var layoutId = this.options.layoutId;
        return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
      };

      ProjectionNode.prototype.getStack = function () {
        var layoutId = this.options.layoutId;
        if (layoutId) return this.root.sharedNodes.get(layoutId);
      };

      ProjectionNode.prototype.promote = function (_a) {
        var _b = _a === void 0 ? {} : _a,
            needsReset = _b.needsReset,
            transition = _b.transition,
            preserveFollowOpacity = _b.preserveFollowOpacity;

        var stack = this.getStack();
        if (stack) stack.promote(this, preserveFollowOpacity);

        if (needsReset) {
          this.projectionDelta = undefined;
          this.needsReset = true;
        }

        if (transition) this.setOptions({
          transition: transition
        });
      };

      ProjectionNode.prototype.relegate = function () {
        var stack = this.getStack();

        if (stack) {
          return stack.relegate(this);
        } else {
          return false;
        }
      };

      ProjectionNode.prototype.resetRotation = function () {
        var visualElement = this.options.visualElement;
        if (!visualElement) return; // If there's no detected rotation values, we can early return without a forced render.

        var hasRotate = false; // Keep a record of all the values we've reset

        var resetValues = {}; // Check the rotate value of all axes and reset to 0

        for (var i = 0; i < transformAxes.length; i++) {
          var axis = transformAxes[i];
          var key = "rotate" + axis; // If this rotation doesn't exist as a motion value, then we don't
          // need to reset it

          if (!visualElement.getStaticValue(key)) {
            continue;
          }

          hasRotate = true; // Record the rotation and then temporarily set it to 0

          resetValues[key] = visualElement.getStaticValue(key);
          visualElement.setStaticValue(key, 0);
        } // If there's no rotation values, we don't need to do any more.


        if (!hasRotate) return; // Force a render of this element to apply the transform with all rotations
        // set to 0.

        visualElement === null || visualElement === void 0 ? void 0 : visualElement.syncRender(); // Put back all the values we reset

        for (var key in resetValues) {
          visualElement.setStaticValue(key, resetValues[key]);
        } // Schedule a render for the next frame. This ensures we won't visually
        // see the element with the reset rotate value applied.


        visualElement.scheduleRender();
      };

      ProjectionNode.prototype.getProjectionStyles = function (styleProp) {
        var _a, _b, _c, _d, _e, _f;

        if (styleProp === void 0) {
          styleProp = {};
        } // TODO: Return lifecycle-persistent object


        var styles = {};
        if (!this.instance || this.isSVG) return styles;

        if (!this.isVisible) {
          return {
            visibility: "hidden"
          };
        } else {
          styles.visibility = "";
        }

        var transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;

        if (this.needsReset) {
          this.needsReset = false;
          styles.opacity = "";
          styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
          styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
          return styles;
        }

        var lead = this.getLead();

        if (!this.projectionDelta || !this.layout || !lead.target) {
          var emptyStyles = {};

          if (this.options.layoutId) {
            emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
            emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
          }

          if (this.hasProjected && !hasTransform(this.latestValues)) {
            emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
            this.hasProjected = false;
          }

          return emptyStyles;
        }

        var valuesToRender = lead.animationValues || lead.latestValues;
        this.applyTransformsToTarget();
        styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);

        if (transformTemplate) {
          styles.transform = transformTemplate(valuesToRender, styles.transform);
        }

        var _g = this.projectionDelta,
            x = _g.x,
            y = _g.y;
        styles.transformOrigin = x.origin * 100 + "% " + y.origin * 100 + "% 0";

        if (lead.animationValues) {
          /**
           * If the lead component is animating, assign this either the entering/leaving
           * opacity
           */
          styles.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
        } else {
          /**
           * Or we're not animating at all, set the lead component to its actual
           * opacity and other components to hidden.
           */
          styles.opacity = lead === this ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
        }
        /**
         * Apply scale correction
         */


        for (var key in scaleCorrectors) {
          if (valuesToRender[key] === undefined) continue;
          var _h = scaleCorrectors[key],
              correct = _h.correct,
              applyTo = _h.applyTo;
          var corrected = correct(valuesToRender[key], lead);

          if (applyTo) {
            var num = applyTo.length;

            for (var i = 0; i < num; i++) {
              styles[applyTo[i]] = corrected;
            }
          } else {
            styles[key] = corrected;
          }
        }
        /**
         * Disable pointer events on follow components. This is to ensure
         * that if a follow component covers a lead component it doesn't block
         * pointer events on the lead.
         */


        if (this.options.layoutId) {
          styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
        }

        return styles;
      };

      ProjectionNode.prototype.clearSnapshot = function () {
        this.resumeFrom = this.snapshot = undefined;
      }; // Only run on root


      ProjectionNode.prototype.resetTree = function () {
        this.root.nodes.forEach(function (node) {
          var _a;

          return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
        });
        this.root.nodes.forEach(clearMeasurements);
        this.root.sharedNodes.clear();
      };

      return ProjectionNode;
    }()
  );
}

function updateLayout(node) {
  node.updateLayout();
}

function notifyLayoutUpdate(node) {
  var _a, _b, _c, _d;

  var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;

  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    var _e = node.layout,
        layout_1 = _e.actual,
        measuredLayout = _e.measured; // TODO Maybe we want to also resize the layout snapshot so we don't trigger
    // animations for instance if layout="size" and an element has only changed position

    if (node.options.animationType === "size") {
      eachAxis(function (axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(axisSnapshot);
        axisSnapshot.min = layout_1[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (node.options.animationType === "position") {
      eachAxis(function (axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(layout_1[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }

    var layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
    var visualDelta = createDelta();

    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
    } else {
      calcBoxDelta(visualDelta, layout_1, snapshot.layout);
    }

    var hasLayoutChanged = !isDeltaZero(layoutDelta);
    var hasRelativeTargetChanged = false;

    if (!node.resumeFrom) {
      node.relativeParent = node.getClosestProjectingParent();
      /**
       * If the relativeParent is itself resuming from a different element then
       * the relative snapshot is not relavent
       */

      if (node.relativeParent && !node.relativeParent.resumeFrom) {
        var _f = node.relativeParent,
            parentSnapshot = _f.snapshot,
            parentLayout = _f.layout;

        if (parentSnapshot && parentLayout) {
          var relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
          var relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);

          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }

    node.notifyListeners("didUpdate", {
      layout: layout_1,
      snapshot: snapshot,
      delta: visualDelta,
      layoutDelta: layoutDelta,
      hasLayoutChanged: hasLayoutChanged,
      hasRelativeTargetChanged: hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
  /**
   * Clearing transition
   * TODO: Investigate why this transition is being passed in as {type: false } from Framer
   * and why we need it at all
   */


  node.options.transition = undefined;
}

function clearSnapshot(node) {
  node.clearSnapshot();
}

function clearMeasurements(node) {
  node.clearMeasurements();
}

function resetTransformStyle(node) {
  node.resetTransform();
}

function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = undefined;
}

function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}

function calcProjection(node) {
  node.calcProjection();
}

function resetRotation(node) {
  node.resetRotation();
}

function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}

function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}

function mixAxis(output, from, to, p) {
  output.min = mix(from.min, to.min, p);
  output.max = mix(from.max, to.max, p);
}

function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}

function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== undefined;
}

var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};

function mountNodeEarly(node, id) {
  /**
   * Rather than searching the DOM from document we can search the
   * path for the deepest mounted ancestor and search from there
   */
  var searchNode = node.root;

  for (var i = node.path.length - 1; i >= 0; i--) {
    if (Boolean(node.path[i].instance)) {
      searchNode = node.path[i];
      break;
    }
  }

  var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  var element = searchElement.querySelector("[data-projection-id=\"" + id + "\"]");
  if (element) node.mount(element, true);
}

function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}

function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}

var id = 1;

function useProjectionId() {
  return useConstant(function () {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}

/**
 * @internal
 */

var LayoutGroupContext = React$1.createContext({});

/**
 * @internal
 */

var SwitchLayoutGroupContext = React$1.createContext({});

function useProjection(projectionId, _a, visualElement, ProjectionNodeConstructor) {
  var _b;

  var layoutId = _a.layoutId,
      layout = _a.layout,
      drag = _a.drag,
      dragConstraints = _a.dragConstraints,
      layoutScroll = _a.layoutScroll;
  var initialPromotionConfig = React$1.useContext(SwitchLayoutGroupContext);

  if (!ProjectionNodeConstructor || !visualElement || (visualElement === null || visualElement === void 0 ? void 0 : visualElement.projection)) {
    return;
  }

  visualElement.projection = new ProjectionNodeConstructor(projectionId, visualElement.getLatestValues(), (_b = visualElement.parent) === null || _b === void 0 ? void 0 : _b.projection);
  visualElement.projection.setOptions({
    layoutId: layoutId,
    layout: layout,
    alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
    visualElement: visualElement,
    scheduleRender: function () {
      return visualElement.scheduleRender();
    },

    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof layout === "string" ? layout : "both",
    initialPromotionConfig: initialPromotionConfig,
    layoutScroll: layoutScroll
  });
}

var VisualElementHandler =
/** @class */
function (_super) {
  __extends(VisualElementHandler, _super);

  function VisualElementHandler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Update visual element props as soon as we know this update is going to be commited.
   */


  VisualElementHandler.prototype.getSnapshotBeforeUpdate = function () {
    this.updateProps();
    return null;
  };

  VisualElementHandler.prototype.componentDidUpdate = function () {};

  VisualElementHandler.prototype.updateProps = function () {
    var _a = this.props,
        visualElement = _a.visualElement,
        props = _a.props;
    if (visualElement) visualElement.setProps(props);
  };

  VisualElementHandler.prototype.render = function () {
    return this.props.children;
  };

  return VisualElementHandler;
}(React__default['default'].Component);

/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */

function createMotionComponent(_a) {
  var preloadedFeatures = _a.preloadedFeatures,
      createVisualElement = _a.createVisualElement,
      projectionNodeConstructor = _a.projectionNodeConstructor,
      useRender = _a.useRender,
      useVisualState = _a.useVisualState,
      Component = _a.Component;
  preloadedFeatures && loadFeatures(preloadedFeatures);

  function MotionComponent(props, externalRef) {
    var layoutId = useLayoutId(props);
    props = __assign(__assign({}, props), {
      layoutId: layoutId
    });
    /**
     * If we're rendering in a static environment, we only visually update the component
     * as a result of a React-rerender rather than interactions or animations. This
     * means we don't need to load additional memory structures like VisualElement,
     * or any gesture/animation features.
     */

    var config = React$1.useContext(MotionConfigContext);
    var features = null;
    var context = useCreateMotionContext(props);
    /**
     * Create a unique projection ID for this component. If a new component is added
     * during a layout animation we'll use this to query the DOM and hydrate its ref early, allowing
     * us to measure it as soon as any layout effect flushes pending layout animations.
     *
     * Performance note: It'd be better not to have to search the DOM for these elements.
     * For newly-entering components it could be enough to only correct treeScale, in which
     * case we could mount in a scale-correction mode. This wouldn't be enough for
     * shared element transitions however. Perhaps for those we could revert to a root node
     * that gets forceRendered and layout animations are triggered on its layout effect.
     */

    var projectionId = useProjectionId();
    /**
     *
     */

    var visualState = useVisualState(props, config.isStatic);

    if (!config.isStatic && isBrowser) {
      /**
       * Create a VisualElement for this component. A VisualElement provides a common
       * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
       * providing a way of rendering to these APIs outside of the React render loop
       * for more performant animations and interactions
       */
      context.visualElement = useVisualElement(Component, visualState, __assign(__assign({}, config), props), createVisualElement);
      useProjection(projectionId, props, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
      /**
       * Load Motion gesture and animation features. These are rendered as renderless
       * components so each feature can optionally make use of React lifecycle methods.
       */

      features = useFeatures(props, context.visualElement, preloadedFeatures);
    }
    /**
     * The mount order and hierarchy is specific to ensure our element ref
     * is hydrated by the time features fire their effects.
     */


    return React$1.createElement(VisualElementHandler, {
      visualElement: context.visualElement,
      props: __assign(__assign({}, config), props)
    }, features, React$1.createElement(MotionContext.Provider, {
      value: context
    }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config.isStatic)));
  }

  return React$1.forwardRef(MotionComponent);
}

function useLayoutId(_a) {
  var _b;

  var layoutId = _a.layoutId;
  var layoutGroupId = (_b = React$1.useContext(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
  return layoutGroupId && layoutId !== undefined ? layoutGroupId + "-" + layoutId : layoutId;
}

/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */

function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig) {
    if (customMotionComponentConfig === void 0) {
      customMotionComponentConfig = {};
    }

    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  /**
   * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
   * Rather than generating them anew every render.
   */


  var componentCache = new Map();
  return new Proxy(custom, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: function (_target, key) {
      /**
       * If this element doesn't exist in the component cache, create it and cache.
       */
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }

      return componentCache.get(key);
    }
  });
}

/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

function isSVGComponent(Component) {
  if (
  /**
   * If it's not a string, it's a custom React component. Currently we only support
   * HTML custom React components.
   */
  typeof Component !== "string" ||
  /**
   * If it contains a dash, the element is a custom HTML webcomponent.
   */
  Component.includes("-")) {
    return false;
  } else if (
  /**
   * If it's in our list of lowercase SVG tags, it's an SVG component
   */
  lowercaseSVGElements.indexOf(Component) > -1 ||
  /**
   * If it contains a capital letter, it's an SVG component
   */
  /[A-Z]/.test(Component)) {
    return true;
  }

  return false;
}

function isForcedMotionValue(key, _a) {
  var layout = _a.layout,
      layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== undefined) && (!!scaleCorrectors[key] || key === "opacity");
}

var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */

function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform = _a.transform,
      transformKeys = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration,
      enableHardwareAcceleration = _c === void 0 ? true : _c,
      _d = _b.allowTransformNone,
      allowTransformNone = _d === void 0 ? true : _d; // The transform string we're going to build into.

  var transformString = ""; // Transform keys into their default order - this will determine the output order.

  transformKeys.sort(sortTransformProps); // Track whether the defined transform has a defined z so we don't add a
  // second to enable hardware acceleration

  var transformHasZ = false; // Loop over each transform and build them into transformString

  var numTransformKeys = transformKeys.length;

  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys[i];
    transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
    if (key === "z") transformHasZ = true;
  }

  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  } // If we have a custom `transform` template, pass our transform values and
  // generated transformString to that before returning


  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }

  return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */


function buildTransformOrigin(_a) {
  var _b = _a.originX,
      originX = _b === void 0 ? "50%" : _b,
      _c = _a.originY,
      originY = _c === void 0 ? "50%" : _c,
      _d = _a.originZ,
      originZ = _d === void 0 ? 0 : _d;
  return originX + " " + originY + " " + originZ;
}

/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
  return key.startsWith("--");
}

/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};

function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  var _a;

  var style = state.style,
      vars = state.vars,
      transform = state.transform,
      transformKeys = state.transformKeys,
      transformOrigin = state.transformOrigin; // Empty the transformKeys array. As we're throwing out refs to its items
  // this might not be as cheap as suspected. Maybe using the array as a buffer
  // with a manual incrementation would be better.

  transformKeys.length = 0; // Track whether we encounter any transform or transformOrigin values.

  var hasTransform = false;
  var hasTransformOrigin = false; // Does the calculated transform essentially equal "none"?

  var transformIsNone = true;
  /**
   * Loop over all our latest animated values and decide whether to handle them
   * as a style or CSS variable.
   *
   * Transforms and transform origins are kept seperately for further processing.
   */

  for (var key in latestValues) {
    var value = latestValues[key];
    /**
     * If this is a CSS variable we don't do any further processing.
     */

    if (isCSSVariable(key)) {
      vars[key] = value;
      continue;
    } // Convert the value to its default value type, ie 0 -> "0px"


    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);

    if (isTransformProp(key)) {
      // If this is a transform, flag to enable further transform processing
      hasTransform = true;
      transform[key] = valueAsType;
      transformKeys.push(key); // If we already know we have a non-default transform, early return

      if (!transformIsNone) continue; // Otherwise check to see if this is a default transform

      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0)) transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType; // If this is a transform origin, flag and enable further transform-origin processing

      hasTransformOrigin = true;
    } else {
      style[key] = valueAsType;
    }
  }

  if (hasTransform) {
    style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
  } else if (transformTemplate) {
    style.transform = transformTemplate({}, "");
  }

  if (hasTransformOrigin) {
    style.transformOrigin = buildTransformOrigin(transformOrigin);
  }
}

var createHtmlRenderState = function () {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};

function copyRawValuesOnly(target, source, props) {
  for (var key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}

function useInitialMotionValues(_a, visualState, isStatic) {
  var transformTemplate = _a.transformTemplate;
  return React$1.useMemo(function () {
    var state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, {
      enableHardwareAcceleration: !isStatic
    }, transformTemplate);
    var vars = state.vars,
        style = state.style;
    return __assign(__assign({}, vars), style);
  }, [visualState]);
}

function useStyle(props, visualState, isStatic) {
  var styleProp = props.style || {};
  var style = {};
  /**
   * Copy non-Motion Values straight into style
   */

  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));

  if (props.transformValues) {
    style = props.transformValues(style);
  }

  return style;
}

function useHTMLProps(props, visualState, isStatic) {
  // The `any` isn't ideal but it is the type of createElement props argument
  var htmlProps = {};
  var style = useStyle(props, visualState, isStatic);

  if (Boolean(props.drag)) {
    // Disable the ghost element when a user drags
    htmlProps.draggable = false; // Disable text selection

    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none"; // Disable scrolling on the draggable direction

    style.touchAction = props.drag === true ? "none" : "pan-" + (props.drag === "x" ? "y" : "x");
  }

  htmlProps.style = style;
  return htmlProps;
}

/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */

function isValidMotionProp(key) {
  return validMotionProps.has(key);
}

var shouldForward = function (key) {
  return !isValidMotionProp(key);
};
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */


try {
  var emotionIsPropValid_1 = require("@emotion/is-prop-valid").default;

  shouldForward = function (key) {
    // Handle events explicitly as Emotion validates them all as true
    if (key.startsWith("on")) {
      return !isValidMotionProp(key);
    } else {
      return emotionIsPropValid_1(key);
    }
  };
} catch (_a) {// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}

function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};

  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key)) {
      filteredProps[key] = props[key];
    }
  }

  return filteredProps;
}

function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */


function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return pxOriginX + " " + pxOriginY;
}

var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */

function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }

  if (offset === void 0) {
    offset = 0;
  }

  if (useDashCase === void 0) {
    useDashCase = true;
  } // Normalise path length by setting SVG attribute pathLength to 1


  attrs.pathLength = 1; // We use dash case when setting attributes directly to the DOM node and camel case
  // when defining props on a React component.

  var keys = useDashCase ? dashKeys : camelKeys; // Build the dash offset

  attrs[keys.offset] = px.transform(-offset); // Build the dash array

  var pathLength = px.transform(length);
  var pathSpacing = px.transform(spacing);
  attrs[keys.array] = pathLength + " " + pathSpacing;
}

/**
 * Build SVG visual attrbutes, like cx and style.transform
 */

function buildSVGAttrs(state, _a, options, transformTemplate) {
  var attrX = _a.attrX,
      attrY = _a.attrY,
      originX = _a.originX,
      originY = _a.originY,
      pathLength = _a.pathLength,
      _b = _a.pathSpacing,
      pathSpacing = _b === void 0 ? 1 : _b,
      _c = _a.pathOffset,
      pathOffset = _c === void 0 ? 0 : _c,
      // This is object creation, which we try to avoid per-frame.
  latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);

  buildHTMLStyles(state, latest, options, transformTemplate);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs,
      style = state.style,
      dimensions = state.dimensions;
  /**
   * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
   * and copy it into style.
   */

  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  } // Parse transformOrigin


  if (dimensions && (originX !== undefined || originY !== undefined || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
  } // Treat x/y not as shortcuts but as actual attributes


  if (attrX !== undefined) attrs.x = attrX;
  if (attrY !== undefined) attrs.y = attrY; // Build SVG path if one has been defined

  if (pathLength !== undefined) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

var createSvgRenderState = function () {
  return __assign(__assign({}, createHtmlRenderState()), {
    attrs: {}
  });
};

function useSVGProps(props, visualState) {
  var visualProps = React$1.useMemo(function () {
    var state = createSvgRenderState();
    buildSVGAttrs(state, visualState, {
      enableHardwareAcceleration: false
    }, props.transformTemplate);
    return __assign(__assign({}, state.attrs), {
      style: __assign({}, state.style)
    });
  }, [visualState]);

  if (props.style) {
    var rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = __assign(__assign({}, rawStyles), visualProps.style);
  }

  return visualProps;
}

function createUseRender(forwardMotionProps) {
  if (forwardMotionProps === void 0) {
    forwardMotionProps = false;
  }

  var useRender = function (Component, props, projectionId, ref, _a, isStatic) {
    var latestValues = _a.latestValues;
    var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    var visualProps = useVisualProps(props, latestValues, isStatic);
    var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);

    var elementProps = __assign(__assign(__assign({}, filteredProps), visualProps), {
      ref: ref
    });

    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }

    return React$1.createElement(Component, elementProps);
  };

  return useRender;
}

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */

var camelToDash = function (str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

function renderHTML(element, _a, styleProp, projection) {
  var style = _a.style,
      vars = _a.vars;
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp)); // Loop over any CSS variables and assign those.

  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

function renderSVG(element, renderState) {
  renderHTML(element, renderState);

  for (var key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

function scrapeMotionValuesFromProps(props) {
  var style = props.style;
  var newValues = {};

  for (var key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }

  return newValues;
}

function scrapeMotionValuesFromProps$1(props) {
  var newValues = scrapeMotionValuesFromProps(props);

  for (var key in props) {
    if (isMotionValue(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }

  return newValues;
}

function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

function makeState(_a, props, context, presenceContext) {
  var scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps,
      createRenderState = _a.createRenderState,
      onMount = _a.onMount;
  var state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
    renderState: createRenderState()
  };

  if (onMount) {
    state.mount = function (instance) {
      return onMount(props, instance, state);
    };
  }

  return state;
}

var makeUseVisualState = function (config) {
  return function (props, isStatic) {
    var context = React$1.useContext(MotionContext);
    var presenceContext = React$1.useContext(PresenceContext);
    return isStatic ? makeState(config, props, context, presenceContext) : useConstant(function () {
      return makeState(config, props, context, presenceContext);
    });
  };
};

function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  var values = {};
  var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
  var motionValues = scrapeMotionValues(props);

  for (var key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }

  var initial = props.initial,
      animate = props.animate;
  var isControllingVariants = checkIfControllingVariants(props);
  var isVariantNode = checkIfVariantNode(props);

  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate !== null && animate !== void 0 ? animate : animate = context.animate;
  }

  var variantToSet = blockInitialAnimation || initial === false ? animate : initial;

  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(function (definition) {
      var resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      var transitionEnd = resolved.transitionEnd;
      resolved.transition;

      var target = __rest(resolved, ["transitionEnd", "transition"]);

      for (var key in target) values[key] = target[key];

      for (var key in transitionEnd) values[key] = transitionEnd[key];
    });
  }

  return values;
}

var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createSvgRenderState,
    onMount: function (props, instance, _a) {
      var renderState = _a.renderState,
          latestValues = _a.latestValues;

      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        // Most likely trying to measure an unrendered element under Firefox
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      buildSVGAttrs(renderState, latestValues, {
        enableHardwareAcceleration: false
      }, props.transformTemplate); // TODO: Replace with direct assignment

      renderSVG(instance, renderState);
    }
  })
};

var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  var _b = _a.forwardMotionProps,
      forwardMotionProps = _b === void 0 ? false : _b;
  var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return __assign(__assign({}, baseConfig), {
    preloadedFeatures: preloadedFeatures,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement: createVisualElement,
    projectionNodeConstructor: projectionNodeConstructor,
    Component: Component
  });
}

var AnimationType;

(function (AnimationType) {
  AnimationType["Animate"] = "animate";
  AnimationType["Hover"] = "whileHover";
  AnimationType["Tap"] = "whileTap";
  AnimationType["Drag"] = "whileDrag";
  AnimationType["Focus"] = "whileFocus";
  AnimationType["InView"] = "whileInView";
  AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));

function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function () {
    return target.removeEventListener(eventName, handler, options);
  };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */


function useDomEvent(ref, eventName, handler, options) {
  React$1.useEffect(function () {
    var element = ref.current;

    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

/**
 *
 * @param props
 * @param ref
 * @internal
 */

function useFocusGesture(_a) {
  var whileFocus = _a.whileFocus,
      visualElement = _a.visualElement;

  var onFocus = function () {
    var _a;

    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Focus, true);
  };

  var onBlur = function () {
    var _a;

    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Focus, false);
  };

  useDomEvent(visualElement, "focus", whileFocus ? onFocus : undefined);
  useDomEvent(visualElement, "blur", whileFocus ? onBlur : undefined);
}

function isMouseEvent(event) {
  // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }

  return event instanceof MouseEvent;
}

function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}

/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */

function filterPrimaryPointer(eventHandler) {
  return function (event) {
    var isMouseEvent = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent || isMouseEvent && event.button === 0;

    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}

var defaultPagePoint = {
  pageX: 0,
  pageY: 0
};

function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}

function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}

function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }

  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}

var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }

  var listener = function (event) {
    return handler(event, extractEventInfo(event));
  };

  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};

var supportsPointerEvents = function () {
  return isBrowser && window.onpointerdown === null;
};

var supportsTouchEvents = function () {
  return isBrowser && window.ontouchstart === null;
};

var supportsMouseEvents = function () {
  return isBrowser && window.onmousedown === null;
};

var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};

function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }

  return name;
}

function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}

function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}

function createLock(name) {
  var lock = null;
  return function () {
    var openLock = function () {
      lock = null;
    };

    if (lock === null) {
      lock = name;
      return openLock;
    }

    return false;
  };
}

var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");

function getGlobalLock(drag) {
  var lock = false;

  if (drag === "y") {
    lock = globalVerticalLock();
  } else if (drag === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();

    if (openHorizontal_1 && openVertical_1) {
      lock = function () {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      // Release the locks because we don't use them
      if (openHorizontal_1) openHorizontal_1();
      if (openVertical_1) openVertical_1();
    }
  }

  return lock;
}

function isDragActive() {
  // Check the gesture lock - if we get it, it means no drag gesture is active
  // and we can safely fire the tap gesture.
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock) return true;
  openGestureLock();
  return false;
}

function createHoverEvent(visualElement, isActive, callback) {
  return function (event, info) {
    var _a;

    if (!isMouseEvent(event) || isDragActive()) return;
    callback === null || callback === void 0 ? void 0 : callback(event, info);
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
  };
}

function useHoverGesture(_a) {
  var onHoverStart = _a.onHoverStart,
      onHoverEnd = _a.onHoverEnd,
      whileHover = _a.whileHover,
      visualElement = _a.visualElement;
  usePointerEvent(visualElement, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement, true, onHoverStart) : undefined);
  usePointerEvent(visualElement, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement, false, onHoverEnd) : undefined);
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

function useUnmountEffect(callback) {
  return React$1.useEffect(function () {
    return function () {
      return callback();
    };
  }, []);
}

/**
 * @param handlers -
 * @internal
 */

function useTapGesture(_a) {
  var onTap = _a.onTap,
      onTapStart = _a.onTapStart,
      onTapCancel = _a.onTapCancel,
      whileTap = _a.whileTap,
      visualElement = _a.visualElement;
  var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isPressing = React$1.useRef(false);
  var cancelPointerEndListeners = React$1.useRef(null);

  function removePointerEndListener() {
    var _a;

    (_a = cancelPointerEndListeners.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEndListeners);
    cancelPointerEndListeners.current = null;
  }

  function checkPointerEnd() {
    var _a;

    removePointerEndListener();
    isPressing.current = false;
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }

  function onPointerUp(event, info) {
    if (!checkPointerEnd()) return;
    /**
     * We only count this as a tap gesture if the event.target is the same
     * as, or a child of, this component's element
     */

    !isNodeOrChild(visualElement.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
  }

  function onPointerCancel(event, info) {
    if (!checkPointerEnd()) return;
    onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
  }

  function onPointerDown(event, info) {
    var _a;

    removePointerEndListener();
    if (isPressing.current) return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
    onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Tap, true);
  }

  usePointerEvent(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined);
  useUnmountEffect(removePointerEndListener);
}

var warned = new Set();

function warnOnce(condition, message, element) {
  if (condition || warned.has(message)) return;
  console.warn(message);
  if (element) console.warn(element);
  warned.add(message);
}

/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */

var observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */

var observers = new WeakMap();

var fireObserverCallback = function (entry) {
  var _a;

  (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
};

var fireAllObserverCallbacks = function (entries) {
  entries.forEach(fireObserverCallback);
};

function initIntersectionObserver(_a) {
  var root = _a.root,
      options = __rest(_a, ["root"]);

  var lookupRoot = root || document;
  /**
   * If we don't have an observer lookup map for this root, create one.
   */

  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }

  var rootObservers = observers.get(lookupRoot);
  var key = JSON.stringify(options);
  /**
   * If we don't have an observer for this combination of root and settings,
   * create one.
   */

  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __assign({
      root: root
    }, options));
  }

  return rootObservers[key];
}

function observeIntersection(element, options, callback) {
  var rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return function () {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

function useViewport(_a) {
  var visualElement = _a.visualElement,
      whileInView = _a.whileInView,
      onViewportEnter = _a.onViewportEnter,
      onViewportLeave = _a.onViewportLeave,
      _b = _a.viewport,
      viewport = _b === void 0 ? {} : _b;
  var state = React$1.useRef({
    hasEnteredView: false,
    isInView: false
  });
  var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView) shouldObserve = false;
  var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement, viewport);
}

var thresholdNames = {
  some: 0,
  all: 1
};

function useIntersectionObserver(shouldObserve, state, visualElement, _a) {
  var root = _a.root,
      rootMargin = _a.margin,
      _b = _a.amount,
      amount = _b === void 0 ? "some" : _b,
      once = _a.once;
  React$1.useEffect(function () {
    if (!shouldObserve) return;
    var options = {
      root: root === null || root === void 0 ? void 0 : root.current,
      rootMargin: rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };

    var intersectionCallback = function (entry) {
      var _a;

      var isIntersecting = entry.isIntersecting;
      /**
       * If there's been no change in the viewport state, early return.
       */

      if (state.isInView === isIntersecting) return;
      state.isInView = isIntersecting;
      /**
       * Handle hasEnteredView. If this is only meant to run once, and
       * element isn't visible, early return. Otherwise set hasEnteredView to true.
       */

      if (once && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }

      (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.InView, isIntersecting);
      /**
       * Use the latest committed props rather than the ones in scope
       * when this observer is created
       */

      var props = visualElement.getProps();
      var callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback === null || callback === void 0 ? void 0 : callback();
    };

    return observeIntersection(visualElement.getInstance(), options, intersectionCallback);
  }, [shouldObserve, root, rootMargin, amount]);
}
/**
 * If IntersectionObserver is missing, we activate inView and fire onViewportEnter
 * on mount. This way, the page will be in the state the author expects users
 * to see it in for everyone.
 */


function useMissingIntersectionObserver(shouldObserve, state, visualElement) {
  React$1.useEffect(function () {
    if (!shouldObserve) return;

    if (process.env.NODE_ENV !== "production") {
      warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }
    /**
     * Fire this in an rAF because, at this point, the animation state
     * won't have flushed for the first time and there's certain logic in
     * there that behaves differently on the initial animation.
     *
     * This hook should be quite rarely called so setting this in an rAF
     * is preferred to changing the behaviour of the animation state.
     */


    requestAnimationFrame(function () {
      var _a;

      state.hasEnteredView = true;
      var onViewportEnter = visualElement.getProps().onViewportEnter;
      onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter();
      (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.InView, true);
    });
  }, [shouldObserve]);
}

var makeRenderlessComponent = function (hook) {
  return function (props) {
    hook(props);
    return null;
  };
};

var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */

function usePresence() {
  var context = React$1.useContext(PresenceContext);
  if (context === null) return [true, null];
  var isPresent = context.isPresent,
      onExitComplete = context.onExitComplete,
      register = context.register; // It's safe to call the following hooks conditionally (after an early return) because the context will always
  // either be null or non-null for the lifespan of the component.
  // Replace with useOpaqueId when released in React

  var id = useUniqueId();
  React$1.useEffect(function () {
    return register(id);
  }, []);

  var safeToRemove = function () {
    return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id);
  };

  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

var counter = 0;

var incrementId = function () {
  return counter++;
};

var useUniqueId = function () {
  return useConstant(incrementId);
};

function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  var prevLength = prev.length;
  if (prevLength !== next.length) return false;

  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }

  return true;
}

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) {
  return /^\-?\d*\.?\d+$/.test(v);
};

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
var isZeroValueString = function (v) {
  return /^0[^.\s]+$/.test(v);
};

/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) {
  return function (type) {
    return type.test(v);
  };
};

/**
 * ValueType for "auto"
 */
var auto = {
  test: function (v) {
    return v === "auto";
  },
  parse: function (v) {
    return v;
  }
};

/**
 * A list of value types commonly used for dimensions
 */

var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */

var findDimensionValueType = function (v) {
  return dimensionValueTypes.find(testValueType(v));
};

/**
 * A list of all ValueTypes
 */

var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes), false), [color, complex], false);
/**
 * Tests a value against the list of ValueTypes
 */


var findValueType = function (v) {
  return valueTypes.find(testValueType(v));
};

/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */

function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}

function setTarget(visualElement, definition) {
  var resolved = resolveVariant(visualElement, definition);

  var _a = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {},
      _b = _a.transitionEnd,
      transitionEnd = _b === void 0 ? {} : _b;

  _a.transition;

  var target = __rest(_a, ["transitionEnd", "transition"]);

  target = __assign(__assign({}, target), transitionEnd);

  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b, _c;

  var _d;

  var newValueKeys = Object.keys(target).filter(function (key) {
    return !visualElement.hasValue(key);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues) return;

  for (var i = 0; i < numNewValues; i++) {
    var key = newValueKeys[i];
    var targetValue = target[key];
    var value = null;
    /**
     * If the target is a series of keyframes, we can use the first value
     * in the array. If this first value is null, we'll still need to read from the DOM.
     */

    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    /**
     * If the target isn't keyframes, or the first keyframe was null, we need to
     * first check if an origin value was explicitly defined in the transition as "from",
     * if not read the value from the DOM. As an absolute fallback, take the defined target value.
     */


    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    /**
     * If value is still undefined or null, ignore it. Preferably this would throw,
     * but this was causing issues in Framer.
     */


    if (value === undefined || value === null) continue;

    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      // If this is a number read as a string, ie "0" or "200", convert it to a number
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone$1(key, targetValue);
    }

    visualElement.addValue(key, motionValue(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement.setBaseTarget(key, value);
  }
}

function getOriginFromTransition(key, transition) {
  if (!transition) return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}

function getOrigin(target, transition, visualElement) {
  var _a, _b;

  var origin = {};

  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }

  return origin;
}

/**
 * @internal
 */

function animateVisualElement(visualElement, definition, options) {
  if (options === void 0) {
    options = {};
  }

  visualElement.notifyAnimationStart(definition);
  var animation;

  if (Array.isArray(definition)) {
    var animations = definition.map(function (variant) {
      return animateVariant(visualElement, variant, options);
    });
    animation = Promise.all(animations);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = animateTarget(visualElement, resolvedDefinition, options);
  }

  return animation.then(function () {
    return visualElement.notifyAnimationComplete(definition);
  });
}

function animateVariant(visualElement, variant, options) {
  var _a;

  if (options === void 0) {
    options = {};
  }

  var resolved = resolveVariant(visualElement, variant, options.custom);
  var _b = (resolved || {}).transition,
      transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;

  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  /**
   * If we have a variant, create a callback that runs it as an animation.
   * Otherwise, we resolve a Promise immediately for a composable no-op.
   */


  var getAnimation = resolved ? function () {
    return animateTarget(visualElement, resolved, options);
  } : function () {
    return Promise.resolve();
  };
  /**
   * If we have children, create a callback that runs all their animations.
   * Otherwise, we resolve a Promise immediately for a composable no-op.
   */

  var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function (forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }

    var _a = transition.delayChildren,
        delayChildren = _a === void 0 ? 0 : _a,
        staggerChildren = transition.staggerChildren,
        staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function () {
    return Promise.resolve();
  };
  /**
   * If the transition explicitly defines a "when" option, we need to resolve either
   * this animation or all children animations before playing the other.
   */

  var when = transition.when;

  if (when) {
    var _c = __read(when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation], 2),
        first = _c[0],
        last = _c[1];

    return first().then(last);
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
/**
 * @internal
 */


function animateTarget(visualElement, definition, _a) {
  var _b;

  var _c = _a === void 0 ? {} : _a,
      _d = _c.delay,
      delay = _d === void 0 ? 0 : _d,
      transitionOverride = _c.transitionOverride,
      type = _c.type;

  var _e = visualElement.makeTargetAnimatable(definition),
      _f = _e.transition,
      transition = _f === void 0 ? visualElement.getDefaultTransition() : _f,
      transitionEnd = _e.transitionEnd,
      target = __rest(_e, ["transition", "transitionEnd"]);

  if (transitionOverride) transition = transitionOverride;
  var animations = [];
  var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);

  for (var key in target) {
    var value = visualElement.getValue(key);
    var valueTarget = target[key];

    if (!value || valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }

    var animation = startAnimation(key, value, valueTarget, __assign({
      delay: delay
    }, transition));
    animations.push(animation);
  }

  return Promise.all(animations).then(function () {
    transitionEnd && setTarget(visualElement, transitionEnd);
  });
}

function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }

  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }

  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }

  var animations = [];
  var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function (i) {
    if (i === void 0) {
      i = 0;
    }

    return i * staggerChildren;
  } : function (i) {
    if (i === void 0) {
      i = 0;
    }

    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach(function (child, i) {
    animations.push(animateVariant(child, variant, __assign(__assign({}, options), {
      delay: delayChildren + generateStaggerDuration(i)
    })).then(function () {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations);
}

function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */


function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys,
      needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}

var variantPriorityOrder = [AnimationType.Animate, AnimationType.InView, AnimationType.Focus, AnimationType.Hover, AnimationType.Tap, AnimationType.Drag, AnimationType.Exit];

var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder), false).reverse();

var numAnimationTypes = variantPriorityOrder.length;

function animateList(visualElement) {
  return function (animations) {
    return Promise.all(animations.map(function (_a) {
      var animation = _a.animation,
          options = _a.options;
      return animateVisualElement(visualElement, animation, options);
    }));
  };
}

function createAnimationState(visualElement) {
  var animate = animateList(visualElement);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  /**
   * This function will be used to reduce the animation definitions for
   * each active animation type into an object of resolved values for it.
   */

  var buildResolvedTypeValues = function (acc, definition) {
    var resolved = resolveVariant(visualElement, definition);

    if (resolved) {
      resolved.transition;

      var transitionEnd = resolved.transitionEnd,
          target = __rest(resolved, ["transition", "transitionEnd"]);

      acc = __assign(__assign(__assign({}, acc), target), transitionEnd);
    }

    return acc;
  };

  function isAnimated(key) {
    return allAnimatedKeys[key] !== undefined;
  }
  /**
   * This just allows us to inject mocked animation functions
   * @internal
   */


  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  /**
   * When we receive new props, we need to:
   * 1. Create a list of protected keys for each type. This is a directory of
   *    value keys that are currently being "handled" by types of a higher priority
   *    so that whenever an animation is played of a given type, these values are
   *    protected from being animated.
   * 2. Determine if an animation type needs animating.
   * 3. Determine if any values have been removed from a type and figure out
   *    what to animate those to.
   */


  function animateChanges(options, changedActiveType) {
    var _a;

    var props = visualElement.getProps();
    var context = visualElement.getVariantContext(true) || {};
    /**
     * A list of animations that we'll build into as we iterate through the animation
     * types. This will get executed at the end of the function.
     */

    var animations = [];
    /**
     * Keep track of which values have been removed. Then, as we hit lower priority
     * animation types, we can check if they contain removed values and animate to that.
     */

    var removedKeys = new Set();
    /**
     * A dictionary of all encountered keys. This is an object to let us build into and
     * copy it without iteration. Each time we hit an animation type we set its protected
     * keys - the keys its not allowed to animate - to the latest version of this object.
     */

    var encounteredKeys = {};
    /**
     * If a variant has been removed at a given index, and this component is controlling
     * variant animations, we want to ensure lower-priority variants are forced to animate.
     */

    var removedVariantIndex = Infinity;

    var _loop_1 = function (i) {
      var type = reversePriorityOrder[i];
      var typeState = state[type];
      var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop);
      /**
       * If this type has *just* changed isActive status, set activeDelta
       * to that status. Otherwise set to null.
       */

      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i;
      /**
       * If this prop is an inherited variant, rather than been set directly on the
       * component itself, we want to make sure we allow the parent to trigger animations.
       *
       * TODO: Can probably change this to a !isControllingVariants check
       */

      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      /**
       *
       */

      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      /**
       * Set all encountered keys so far as the protected keys for this type. This will
       * be any key that has been animated or otherwise handled by active, higher-priortiy types.
       */


      typeState.protectedKeys = __assign({}, encounteredKeys); // Check if we can skip analysing this prop early

      if ( // If it isn't active and hasn't *just* been set as inactive
      !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
      !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
      isAnimationControls(prop) || typeof prop === "boolean") {
        return "continue";
      }
      /**
       * As we go look through the values defined on this type, if we detect
       * a changed value or a value that was removed in a higher priority, we set
       * this to true and add this prop to the animation list.
       */


      var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      /**
       * As animations can be set as variant lists, variants or target objects, we
       * coerce everything to an array if it isn't one already
       */

      var definitionList = Array.isArray(prop) ? prop : [prop];
      /**
       * Build an object of all the resolved values. We'll use this in the subsequent
       * animateChanges calls to determine whether a value has changed.
       */

      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false) resolvedValues = {};
      /**
       * Now we need to loop through all the keys in the prev prop and this prop,
       * and decide:
       * 1. If the value has changed, and needs animating
       * 2. If it has been removed, and needs adding to the removedKeys set
       * 3. If it has been removed in a higher priority type and needs animating
       * 4. If it hasn't been removed in a higher priority but hasn't changed, and
       *    needs adding to the type's protectedKeys list.
       */

      var _b = typeState.prevResolvedValues,
          prevResolvedValues = _b === void 0 ? {} : _b;

      var allKeys = __assign(__assign({}, prevResolvedValues), resolvedValues);

      var markToAnimate = function (key) {
        shouldAnimateType = true;
        removedKeys.delete(key);
        typeState.needsAnimating[key] = true;
      };

      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key]; // If we've already handled this we can just skip ahead

        if (encounteredKeys.hasOwnProperty(key)) continue;
        /**
         * If the value has changed, we probably want to animate it.
         */

        if (next !== prev) {
          /**
           * If both values are keyframes, we need to shallow compare them to
           * detect whether any value has changed. If it has, we animate it.
           */
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev)) {
              markToAnimate(key);
            } else {
              /**
               * If it hasn't changed, we want to ensure it doesn't animate by
               * adding it to the list of protected keys.
               */
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== undefined) {
            // If next is defined and doesn't equal prev, it needs animating
            markToAnimate(key);
          } else {
            // If it's undefined, it's been removed.
            removedKeys.add(key);
          }
        } else if (next !== undefined && removedKeys.has(key)) {
          /**
           * If next hasn't changed and it isn't undefined, we want to check if it's
           * been removed by a higher priority
           */
          markToAnimate(key);
        } else {
          /**
           * If it hasn't changed, we add it to the list of protected values
           * to ensure it doesn't get animated.
           */
          typeState.protectedKeys[key] = true;
        }
      }
      /**
       * Update the typeState so next time animateChanges is called we can compare the
       * latest prop and resolvedValues to these.
       */


      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      /**
       *
       */

      if (typeState.isActive) {
        encounteredKeys = __assign(__assign({}, encounteredKeys), resolvedValues);
      }

      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      /**
       * If this is an inherited prop we want to hard-block animations
       * TODO: Test as this should probably still handle animations triggered
       * by removed values?
       */


      if (shouldAnimateType && !isInherited) {
        animations.push.apply(animations, __spreadArray([], __read(definitionList.map(function (animation) {
          return {
            animation: animation,
            options: __assign({
              type: type
            }, options)
          };
        })), false));
      }
    };
    /**
     * Iterate through all animation types in reverse priority order. For each, we want to
     * detect which values it's handling and whether or not they've changed (and therefore
     * need to be animated). If any values have been removed, we want to detect those in
     * lower priority props and flag for animation.
     */


    for (var i = 0; i < numAnimationTypes; i++) {
      _loop_1(i);
    }

    allAnimatedKeys = __assign({}, encounteredKeys);
    /**
     * If there are some removed value that haven't been dealt with,
     * we need to create a new animation that falls back either to the value
     * defined in the style prop, or the last read value.
     */

    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function (key) {
        var fallbackTarget = visualElement.getBaseTarget(key);

        if (fallbackTarget !== undefined) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations.push({
        animation: fallbackAnimation_1
      });
    }

    var shouldAnimate = Boolean(animations.length);

    if (isInitialRender && props.initial === false && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }

    isInitialRender = false;
    return shouldAnimate ? animate(animations) : Promise.resolve();
  }
  /**
   * Change whether a certain animation type is active.
   */


  function setActive(type, isActive, options) {
    var _a; // If the active state hasn't changed, we can safely do nothing here


    if (state[type].isActive === isActive) return Promise.resolve(); // Propagate active change to children

    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
      var _a;

      return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    return animateChanges(options, type);
  }

  return {
    isAnimated: isAnimated,
    animateChanges: animateChanges,
    setActive: setActive,
    setAnimateFunction: setAnimateFunction,
    getState: function () {
      return state;
    }
  };
}

function variantsHaveChanged(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }

  return false;
}

function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }

  return {
    isActive: isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}

function createState() {
  var _a;

  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.InView] = createTypeState(), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}

var animations = {
  animation: makeRenderlessComponent(function (_a) {
    var visualElement = _a.visualElement,
        animate = _a.animate;
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */

    visualElement.animationState || (visualElement.animationState = createAnimationState(visualElement));
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */

    if (isAnimationControls(animate)) {
      React$1.useEffect(function () {
        return animate.subscribe(visualElement);
      }, [animate]);
    }
  }),
  exit: makeRenderlessComponent(function (props) {
    var custom = props.custom,
        visualElement = props.visualElement;

    var _a = __read(usePresence(), 2),
        isPresent = _a[0],
        safeToRemove = _a[1];

    var presenceContext = React$1.useContext(PresenceContext);
    React$1.useEffect(function () {
      var _a, _b;

      visualElement.isPresent = isPresent;
      var animation = (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Exit, !isPresent, {
        custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom
      });
      !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
    }, [isPresent]);
  })
};

/**
 * @internal
 */

var PanSession =
/** @class */
function () {
  function PanSession(event, handlers, _a) {
    var _this = this;

    var _b = _a === void 0 ? {} : _a,
        transformPagePoint = _b.transformPagePoint;
    /**
     * @internal
     */


    this.startEvent = null;
    /**
     * @internal
     */

    this.lastMoveEvent = null;
    /**
     * @internal
     */

    this.lastMoveEventInfo = null;
    /**
     * @internal
     */

    this.handlers = {};

    this.updatePoint = function () {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
      var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null; // Only start panning if the offset is larger than 3 pixels. If we make it
      // any larger than this we'll want to reset the pointer history
      // on the first update to avoid visual snapping to the cursoe.

      var isDistancePastThreshold = distance(info.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      var point = info.point;
      var timestamp = getFrameData().timestamp;

      _this.history.push(__assign(__assign({}, point), {
        timestamp: timestamp
      }));

      var _a = _this.handlers,
          onStart = _a.onStart,
          onMove = _a.onMove;

      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info);
        _this.startEvent = _this.lastMoveEvent;
      }

      onMove && onMove(_this.lastMoveEvent, info);
    };

    this.handlePointerMove = function (event, info) {
      _this.lastMoveEvent = event;
      _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint); // Because Safari doesn't trigger mouseup events when it's above a `<select>`

      if (isMouseEvent(event) && event.buttons === 0) {
        _this.handlePointerUp(event, info);

        return;
      } // Throttle mouse move event to once per frame


      sync.update(_this.updatePoint, true);
    };

    this.handlePointerUp = function (event, info) {
      _this.end();

      var _a = _this.handlers,
          onEnd = _a.onEnd,
          onSessionEnd = _a.onSessionEnd;
      var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);

      if (_this.startEvent && onEnd) {
        onEnd(event, panInfo);
      }

      onSessionEnd && onSessionEnd(event, panInfo);
    }; // If we have more than one touch, don't start detecting this gesture


    if (isTouchEvent(event) && event.touches.length > 1) return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point = initialInfo.point;
    var timestamp = getFrameData().timestamp;
    this.history = [__assign(__assign({}, point), {
      timestamp: timestamp
    })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }

  PanSession.prototype.updateHandlers = function (handlers) {
    this.handlers = handlers;
  };

  PanSession.prototype.end = function () {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
  };

  return PanSession;
}();

function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? {
    point: transformPagePoint(info.point)
  } : info;
}

function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point: point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity$1(history, 0.1)
  };
}

function startDevicePoint(history) {
  return history[0];
}

function lastDevicePoint(history) {
  return history[history.length - 1];
}

function getVelocity$1(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }

  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);

  while (i >= 0) {
    timestampedPoint = history[i];

    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }

    i--;
  }

  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }

  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;

  if (time === 0) {
    return {
      x: 0,
      y: 0
    };
  }

  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };

  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }

  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }

  return currentVelocity;
}

/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */

function applyConstraints(point, _a, elastic) {
  var min = _a.min,
      max = _a.max;

  if (min !== undefined && point < min) {
    // If we have a min point defined, and this is outside of that, constrain
    point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== undefined && point > max) {
    // If we have a max point defined, and this is outside of that, constrain
    point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
  }

  return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */


function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== undefined ? axis.min + min : undefined,
    max: max !== undefined ? axis.max + max - (axis.max - axis.min) : undefined
  };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */


function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top,
      left = _a.left,
      bottom = _a.bottom,
      right = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */


function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;

  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max; // If the constraints axis is actually smaller than the layout axis then we can
  // flip the constraints

  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = __read([max, min], 2), min = _a[0], max = _a[1];
  }

  return {
    min: min,
    max: max
  };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */


function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */


function calcOrigin$1(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);

  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }

  return clamp(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */


function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};

  if (constraints.min !== undefined) {
    relativeConstraints.min = constraints.min - layout.min;
  }

  if (constraints.max !== undefined) {
    relativeConstraints.max = constraints.max - layout.min;
  }

  return relativeConstraints;
}

var defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */

function resolveDragElastic(dragElastic) {
  if (dragElastic === void 0) {
    dragElastic = defaultElastic;
  }

  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }

  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}

function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}

function resolvePointElastic(dragElastic, label) {
  var _a;

  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox(_a) {
  var top = _a.top,
      left = _a.left,
      right = _a.right,
      bottom = _a.bottom;
  return {
    x: {
      min: left,
      max: right
    },
    y: {
      min: top,
      max: bottom
    }
  };
}

function convertBoxToBoundingBox(_a) {
  var x = _a.x,
      y = _a.y;
  return {
    top: y.min,
    right: x.max,
    bottom: y.max,
    left: x.min
  };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */


function transformBoxPoints(point, transformPoint) {
  if (!transformPoint) return point;
  var topLeft = transformPoint({
    x: point.left,
    y: point.top
  });
  var bottomRight = transformPoint({
    x: point.right,
    y: point.bottom
  });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

function measureViewportBox(instance, transformPoint) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}

function measurePageBox(element, rootProjectionNode, transformPagePoint) {
  var viewportBox = measureViewportBox(element, transformPagePoint);
  var scroll = rootProjectionNode.scroll;

  if (scroll) {
    translateAxis(viewportBox.x, scroll.x);
    translateAxis(viewportBox.y, scroll.y);
  }

  return viewportBox;
}

var elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: AnyPointerEvent

var VisualElementDragControls =
/** @class */
function () {
  function VisualElementDragControls(visualElement) {
    // This is a reference to the global drag gesture lock, ensuring only one component
    // can "capture" the drag of one or both axes.
    // TODO: Look into moving this into pansession?
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    /**
     * The permitted boundaries of travel, in pixels.
     */

    this.constraints = false;
    this.hasMutatedConstraints = false;
    /**
     * The per-axis resolved elastic values.
     */

    this.elastic = createBox();
    this.visualElement = visualElement;
  }

  VisualElementDragControls.prototype.start = function (originEvent, _a) {
    var _this = this;

    var _b = _a === void 0 ? {} : _a,
        _c = _b.snapToCursor,
        snapToCursor = _c === void 0 ? false : _c;
    /**
     * Don't start dragging if this component is exiting
     */


    if (this.visualElement.isPresent === false) return;

    var onSessionStart = function (event) {
      // Stop any animations on both axis values immediately. This allows the user to throw and catch
      // the component.
      _this.stopAnimation();

      if (snapToCursor) {
        _this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };

    var onStart = function (event, info) {
      var _a; // Attempt to grab the global drag gesture lock - maybe make this part of PanSession


      var _b = _this.getProps(),
          drag = _b.drag,
          dragPropagation = _b.dragPropagation,
          onDragStart = _b.onDragStart;

      if (drag && !dragPropagation) {
        if (_this.openGlobalLock) _this.openGlobalLock();
        _this.openGlobalLock = getGlobalLock(drag); // If we don 't have the lock, don't start dragging

        if (!_this.openGlobalLock) return;
      }

      _this.isDragging = true;
      _this.currentDirection = null;

      _this.resolveConstraints();

      if (_this.visualElement.projection) {
        _this.visualElement.projection.isAnimationBlocked = true;
        _this.visualElement.projection.target = undefined;
      }
      /**
       * Record gesture origin
       */


      eachAxis(function (axis) {
        var _a, _b;

        var current = _this.getAxisMotionValue(axis).get() || 0;
        /**
         * If the MotionValue is a percentage value convert to px
         */

        if (percent.test(current)) {
          var measuredAxis = (_b = (_a = _this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.actual[axis];

          if (measuredAxis) {
            var length_1 = calcLength(measuredAxis);
            current = length_1 * (parseFloat(current) / 100);
          }
        }

        _this.originPoint[axis] = current;
      }); // Fire onDragStart event

      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a = _this.visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Drag, true);
    };

    var onMove = function (event, info) {
      // latestPointerEvent = event
      var _a = _this.getProps(),
          dragPropagation = _a.dragPropagation,
          dragDirectionLock = _a.dragDirectionLock,
          onDirectionLock = _a.onDirectionLock,
          onDrag = _a.onDrag; // If we didn't successfully receive the gesture lock, early return.


      if (!dragPropagation && !_this.openGlobalLock) return;
      var offset = info.offset; // Attempt to detect drag direction if directionLock is true

      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset); // If we've successfully set a direction, notify listener

        if (_this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
        }

        return;
      } // Update each point with the latest position


      _this.updateAxis("x", info.point, offset);

      _this.updateAxis("y", info.point, offset);
      /**
       * Ideally we would leave the renderer to fire naturally at the end of
       * this frame but if the element is about to change layout as the result
       * of a re-render we want to ensure the browser can read the latest
       * bounding box to ensure the pointer and element don't fall out of sync.
       */


      _this.visualElement.syncRender();
      /**
       * This must fire after the syncRender call as it might trigger a state
       * change which itself might trigger a layout update.
       */


      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };

    var onSessionEnd = function (event, info) {
      return _this.stop(event, info);
    };

    this.panSession = new PanSession(originEvent, {
      onSessionStart: onSessionStart,
      onStart: onStart,
      onMove: onMove,
      onSessionEnd: onSessionEnd
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint()
    });
  };

  VisualElementDragControls.prototype.stop = function (event, info) {
    var isDragging = this.isDragging;
    this.cancel();
    if (!isDragging) return;
    var velocity = info.velocity;
    this.startAnimation(velocity);
    var onDragEnd = this.getProps().onDragEnd;
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  };

  VisualElementDragControls.prototype.cancel = function () {
    var _a, _b;

    this.isDragging = false;

    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }

    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = undefined;
    var dragPropagation = this.getProps().dragPropagation;

    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }

    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  };

  VisualElementDragControls.prototype.updateAxis = function (axis, _point, offset) {
    var drag = this.getProps().drag; // If we're not dragging this axis, do an early return.

    if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
    var axisValue = this.getAxisMotionValue(axis);
    var next = this.originPoint[axis] + offset[axis]; // Apply constraints

    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }

    axisValue.set(next);
  };

  VisualElementDragControls.prototype.resolveConstraints = function () {
    var _this = this;

    var _a = this.getProps(),
        dragConstraints = _a.dragConstraints,
        dragElastic = _a.dragElastic;

    var layout = (this.visualElement.projection || {}).layout;
    var prevConstraints = this.constraints;

    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
      } else {
        this.constraints = false;
      }
    }

    this.elastic = resolveDragElastic(dragElastic);
    /**
     * If we're outputting to external MotionValues, we want to rebase the measured constraints
     * from viewport-relative to component-relative.
     */

    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(function (axis) {
        if (_this.getAxisMotionValue(axis)) {
          _this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], _this.constraints[axis]);
        }
      });
    }
  };

  VisualElementDragControls.prototype.resolveRefConstraints = function () {
    var _a = this.getProps(),
        constraints = _a.dragConstraints,
        onMeasureDragConstraints = _a.onMeasureDragConstraints;

    if (!constraints || !isRefObject(constraints)) return false;
    var constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var projection = this.visualElement.projection; // TODO

    if (!projection || !projection.layout) return false;
    var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
    /**
     * If there's an onMeasureDragConstraints listener we call it and
     * if different constraints are returned, set constraints to that
     */

    if (onMeasureDragConstraints) {
      var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;

      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }

    return measuredConstraints;
  };

  VisualElementDragControls.prototype.startAnimation = function (velocity) {
    var _this = this;

    var _a = this.getProps(),
        drag = _a.drag,
        dragMomentum = _a.dragMomentum,
        dragElastic = _a.dragElastic,
        dragTransition = _a.dragTransition,
        dragSnapToOrigin = _a.dragSnapToOrigin,
        onDragTransitionEnd = _a.onDragTransitionEnd;

    var constraints = this.constraints || {};
    var momentumAnimations = eachAxis(function (axis) {
      var _a;

      if (!shouldDrag(axis, drag, _this.currentDirection)) {
        return;
      }

      var transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
      if (dragSnapToOrigin) transition = {
        min: 0,
        max: 0
      };
      /**
       * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
       * of spring animations so we should look into adding a disable spring option to `inertia`.
       * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
       * using the value of `dragElastic`.
       */

      var bounceStiffness = dragElastic ? 200 : 1000000;
      var bounceDamping = dragElastic ? 40 : 10000000;

      var inertia = __assign(__assign({
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness: bounceStiffness,
        bounceDamping: bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10
      }, dragTransition), transition); // If we're not animating on an externally-provided `MotionValue` we can use the
      // component's animation controls which will handle interactions with whileHover (etc),
      // otherwise we just have to animate the `MotionValue` itself.


      return _this.startAxisValueAnimation(axis, inertia);
    }); // Run all animations and then resolve the new drag constraints.

    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  };

  VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
    var axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition);
  };

  VisualElementDragControls.prototype.stopAnimation = function () {
    var _this = this;

    eachAxis(function (axis) {
      return _this.getAxisMotionValue(axis).stop();
    });
  };
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */


  VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
    var _a, _b;

    var dragKey = "_drag" + axis.toUpperCase();
    var externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  };

  VisualElementDragControls.prototype.snapToCursor = function (point) {
    var _this = this;

    eachAxis(function (axis) {
      var drag = _this.getProps().drag; // If we're not dragging this axis, do an early return.


      if (!shouldDrag(axis, drag, _this.currentDirection)) return;
      var projection = _this.visualElement.projection;

      var axisValue = _this.getAxisMotionValue(axis);

      if (projection && projection.layout) {
        var _a = projection.layout.actual[axis],
            min = _a.min,
            max = _a.max;
        axisValue.set(point[axis] - mix(min, max, 0.5));
      }
    });
  };
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */


  VisualElementDragControls.prototype.scalePositionWithinConstraints = function () {
    var _this = this;

    var _a;

    var _b = this.getProps(),
        drag = _b.drag,
        dragConstraints = _b.dragConstraints;

    var projection = this.visualElement.projection;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
    /**
     * Stop current animations as there can be visual glitching if we try to do
     * this mid-animation
     */

    this.stopAnimation();
    /**
     * Record the relative position of the dragged element relative to the
     * constraints box and save as a progress value.
     */

    var boxProgress = {
      x: 0,
      y: 0
    };
    eachAxis(function (axis) {
      var axisValue = _this.getAxisMotionValue(axis);

      if (axisValue) {
        var latest = axisValue.get();
        boxProgress[axis] = calcOrigin$1({
          min: latest,
          max: latest
        }, _this.constraints[axis]);
      }
    });
    /**
     * Update the layout of this element and resolve the latest drag constraints
     */

    var transformTemplate = this.visualElement.getProps().transformTemplate;
    this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    /**
     * For each axis, calculate the current progress of the layout axis
     * within the new constraints.
     */

    eachAxis(function (axis) {
      if (!shouldDrag(axis, drag, null)) return;
      /**
       * Calculate a new transform based on the previous box progress
       */

      var axisValue = _this.getAxisMotionValue(axis);

      var _a = _this.constraints[axis],
          min = _a.min,
          max = _a.max;
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  };

  VisualElementDragControls.prototype.addListeners = function () {
    var _this = this;

    var _a;

    elementDragControls.set(this.visualElement, this);
    var element = this.visualElement.getInstance();
    /**
     * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
     */

    var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
      var _a = _this.getProps(),
          drag = _a.drag,
          _b = _a.dragListener,
          dragListener = _b === void 0 ? true : _b;

      drag && dragListener && _this.start(event);
    });

    var measureDragConstraints = function () {
      var dragConstraints = _this.getProps().dragConstraints;

      if (isRefObject(dragConstraints)) {
        _this.constraints = _this.resolveRefConstraints();
      }
    };

    var projection = this.visualElement.projection;
    var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);

    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }

    measureDragConstraints();
    /**
     * Attach a window resize listener to scale the draggable target within its defined
     * constraints as the window resizes.
     */

    var stopResizeListener = addDomEvent(window, "resize", function () {
      _this.scalePositionWithinConstraints();
    });
    /**
     * If the element's layout changes, calculate the delta and apply that to
     * the drag gesture's origin point.
     */

    projection.addEventListener("didUpdate", function (_a) {
      var delta = _a.delta,
          hasLayoutChanged = _a.hasLayoutChanged;

      if (_this.isDragging && hasLayoutChanged) {
        eachAxis(function (axis) {
          var motionValue = _this.getAxisMotionValue(axis);

          if (!motionValue) return;
          _this.originPoint[axis] += delta[axis].translate;
          motionValue.set(motionValue.get() + delta[axis].translate);
        });

        _this.visualElement.syncRender();
      }
    });
    return function () {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
    };
  };

  VisualElementDragControls.prototype.getProps = function () {
    var props = this.visualElement.getProps();
    var _a = props.drag,
        drag = _a === void 0 ? false : _a,
        _b = props.dragDirectionLock,
        dragDirectionLock = _b === void 0 ? false : _b,
        _c = props.dragPropagation,
        dragPropagation = _c === void 0 ? false : _c,
        _d = props.dragConstraints,
        dragConstraints = _d === void 0 ? false : _d,
        _e = props.dragElastic,
        dragElastic = _e === void 0 ? defaultElastic : _e,
        _f = props.dragMomentum,
        dragMomentum = _f === void 0 ? true : _f;
    return __assign(__assign({}, props), {
      drag: drag,
      dragDirectionLock: dragDirectionLock,
      dragPropagation: dragPropagation,
      dragConstraints: dragConstraints,
      dragElastic: dragElastic,
      dragMomentum: dragMomentum
    });
  };

  return VisualElementDragControls;
}();

function shouldDrag(direction, drag, currentDirection) {
  return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */


function getCurrentDirection(offset, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }

  var direction = null;

  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }

  return direction;
}

/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */

function useDrag(props) {
  var groupDragControls = props.dragControls,
      visualElement = props.visualElement;
  var dragControls = useConstant(function () {
    return new VisualElementDragControls(visualElement);
  }); // If we've been provided a DragControls for manual control over the drag gesture,
  // subscribe this component to it on mount.

  React$1.useEffect(function () {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls, groupDragControls]); // Apply the event listeners to the element

  React$1.useEffect(function () {
    return dragControls.addListeners();
  }, [dragControls]);
}

/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */

function usePanGesture(_a) {
  var onPan = _a.onPan,
      onPanStart = _a.onPanStart,
      onPanEnd = _a.onPanEnd,
      onPanSessionStart = _a.onPanSessionStart,
      visualElement = _a.visualElement;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = React$1.useRef(null);
  var transformPagePoint = React$1.useContext(MotionConfigContext).transformPagePoint;
  var handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function (event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  React$1.useEffect(function () {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });

  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint: transformPagePoint
    });
  }

  usePointerEvent(visualElement, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(function () {
    return panSession.current && panSession.current.end();
  });
}

var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};

var names = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];

function createLifecycles() {
  var managers = names.map(function () {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function () {
      return managers.forEach(function (manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function (props) {
      names.forEach(function (name) {
        var _a;

        var on = "on" + name;
        var propListener = props[on]; // Unsubscribe existing subscription

        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions); // Add new subscription

        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function (manager, i) {
    lifecycles["on" + names[i]] = function (handler) {
      return manager.add(handler);
    };

    lifecycles["notify" + names[i]] = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      manager.notify.apply(manager, __spreadArray([], __read(args), false));
    };
  });
  return lifecycles;
}

function updateMotionValuesFromProps(element, next, prev) {
  var _a;

  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];

    if (isMotionValue(nextValue)) {
      /**
       * If this is a motion value found in props or style, we want to add it
       * to our visual element's motion value map.
       */
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      /**
       * If we're swapping to a new motion value, create a new motion value
       * from that
       */
      element.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      /**
       * If this is a flat value that has changed, update the motion value
       * or create one if it doesn't exist. We only want to do this if we're
       * not handling the value with our animation state.
       */
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key); // TODO: Only update values that aren't being animated or even looked at

        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  } // Handle removed values


  for (var key in prev) {
    if (next[key] === undefined) element.removeValue(key);
  }

  return next;
}

var visualElement = function (_a) {
  var _b = _a.treeType,
      treeType = _b === void 0 ? "" : _b,
      build = _a.build,
      getBaseTarget = _a.getBaseTarget,
      makeTargetAnimatable = _a.makeTargetAnimatable,
      measureViewportBox = _a.measureViewportBox,
      renderInstance = _a.render,
      readValueFromInstance = _a.readValueFromInstance,
      removeValueFromRenderState = _a.removeValueFromRenderState,
      sortNodePosition = _a.sortNodePosition,
      scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
  return function (_a, options) {
    var parent = _a.parent,
        props = _a.props,
        presenceId = _a.presenceId,
        blockInitialAnimation = _a.blockInitialAnimation,
        visualState = _a.visualState;

    if (options === void 0) {
      options = {};
    }

    var isMounted = false;
    var latestValues = visualState.latestValues,
        renderState = visualState.renderState;
    /**
     * The instance of the render-specific node that will be hydrated by the
     * exposed React ref. So for example, this visual element can host a
     * HTMLElement, plain object, or Three.js object. The functions provided
     * in VisualElementConfig allow us to interface with this instance.
     */

    var instance;
    /**
     * Manages the subscriptions for a visual element's lifecycle, for instance
     * onRender
     */

    var lifecycles = createLifecycles();
    /**
     * A map of all motion values attached to this visual element. Motion
     * values are source of truth for any given animated value. A motion
     * value might be provided externally by the component via props.
     */

    var values = new Map();
    /**
     * A map of every subscription that binds the provided or generated
     * motion values onChange listeners to this visual element.
     */

    var valueSubscriptions = new Map();
    /**
     * A reference to the previously-provided motion values as returned
     * from scrapeMotionValuesFromProps. We use the keys in here to determine
     * if any motion values need to be removed after props are updated.
     */

    var prevMotionValues = {};
    /**
     * When values are removed from all animation props we need to search
     * for a fallback value to animate to. These values are tracked in baseTarget.
     */

    var baseTarget = __assign({}, latestValues); // Internal methods ========================

    /**
     * On mount, this will be hydrated with a callback to disconnect
     * this visual element from its parent on unmount.
     */


    var removeFromVariantTree;
    /**
     * Render the element with the latest styles outside of the React
     * render lifecycle
     */

    function render() {
      if (!instance || !isMounted) return;
      triggerBuild();
      renderInstance(instance, renderState, props.style, element.projection);
    }

    function triggerBuild() {
      build(element, renderState, latestValues, options, props);
    }

    function update() {
      lifecycles.notifyUpdate(latestValues);
    }
    /**
     *
     */


    function bindToMotionValue(key, value) {
      var removeOnChange = value.onChange(function (latestValue) {
        latestValues[key] = latestValue;
        props.onUpdate && sync.update(update, false, true);
      });
      var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
      valueSubscriptions.set(key, function () {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    /**
     * Any motion values that are provided to the element when created
     * aren't yet bound to the element, as this would technically be impure.
     * However, we iterate through the motion values and set them to the
     * initial values for this component.
     *
     * TODO: This is impure and we should look at changing this to run on mount.
     * Doing so will break some tests but this isn't neccessarily a breaking change,
     * more a reflection of the test.
     */


    var initialMotionValues = scrapeMotionValuesFromProps(props);

    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];

      if (latestValues[key] !== undefined && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
    /**
     * Determine what role this visual element should take in the variant tree.
     */


    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);

    var element = __assign(__assign({
      treeType: treeType,

      /**
       * This is a mirror of the internal instance prop, which keeps
       * VisualElement type-compatible with React's RefObject.
       */
      current: null,

      /**
       * The depth of this visual element within the visual element tree.
       */
      depth: parent ? parent.depth + 1 : 0,
      parent: parent,
      children: new Set(),

      /**
       *
       */
      presenceId: presenceId,

      /**
       * If this component is part of the variant tree, it should track
       * any children that are also part of the tree. This is essentially
       * a shadow tree to simplify logic around how to stagger over children.
       */
      variantChildren: isVariantNode ? new Set() : undefined,

      /**
       * Whether this instance is visible. This can be changed imperatively
       * by the projection tree, is analogous to CSS's visibility in that
       * hidden elements should take up layout, and needs enacting by the configured
       * render function.
       */
      isVisible: undefined,

      /**
       * Normally, if a component is controlled by a parent's variants, it can
       * rely on that ancestor to trigger animations further down the tree.
       * However, if a component is created after its parent is mounted, the parent
       * won't trigger that mount animation so the child needs to.
       *
       * TODO: This might be better replaced with a method isParentMounted
       */
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),

      /**
       * This can be set by AnimatePresence to force components that mount
       * at the same time as it to mount as if they have initial={false} set.
       */
      blockInitialAnimation: blockInitialAnimation,

      /**
       * Determine whether this component has mounted yet. This is mostly used
       * by variant children to determine whether they need to trigger their
       * own animations on mount.
       */
      isMounted: function () {
        return Boolean(instance);
      },
      mount: function (newInstance) {
        isMounted = true;
        instance = element.current = newInstance;

        if (element.projection) {
          element.projection.mount(newInstance);
        }

        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
        }

        parent === null || parent === void 0 ? void 0 : parent.children.add(element);
        element.setProps(props);
      },

      /**
       *
       */
      unmount: function () {
        var _a;

        (_a = element.projection) === null || _a === void 0 ? void 0 : _a.unmount();
        cancelSync.update(update);
        cancelSync.render(render);
        valueSubscriptions.forEach(function (remove) {
          return remove();
        });
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
        lifecycles.clearAllListeners();
        instance = undefined;
        isMounted = false;
      },

      /**
       * Add a child visual element to our set of children.
       */
      addVariantChild: function (child) {
        var _a;

        var closestVariantNode = element.getClosestVariantNode();

        if (closestVariantNode) {
          (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
          return function () {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function (other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!sortNodePosition || treeType !== other.treeType) return 0;
        return sortNodePosition(element.getInstance(), other.getInstance());
      },

      /**
       * Returns the closest variant node in the tree starting from
       * this visual element.
       */
      getClosestVariantNode: function () {
        return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },

      /**
       * Expose the latest layoutId prop.
       */
      getLayoutId: function () {
        return props.layoutId;
      },

      /**
       * Returns the current instance.
       */
      getInstance: function () {
        return instance;
      },

      /**
       * Get/set the latest static values.
       */
      getStaticValue: function (key) {
        return latestValues[key];
      },
      setStaticValue: function (key, value) {
        return latestValues[key] = value;
      },

      /**
       * Returns the latest motion value state. Currently only used to take
       * a snapshot of the visual element - perhaps this can return the whole
       * visual state
       */
      getLatestValues: function () {
        return latestValues;
      },

      /**
       * Set the visiblity of the visual element. If it's changed, schedule
       * a render to reflect these changes.
       */
      setVisibility: function (visibility) {
        if (element.isVisible === visibility) return;
        element.isVisible = visibility;
        element.scheduleRender();
      },

      /**
       * Make a target animatable by Popmotion. For instance, if we're
       * trying to animate width from 100px to 100vw we need to measure 100vw
       * in pixels to determine what we really need to animate to. This is also
       * pluggable to support Framer's custom value types like Color,
       * and CSS variables.
       */
      makeTargetAnimatable: function (target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }

        return makeTargetAnimatable(element, target, props, canMutate);
      },

      /**
       * Measure the current viewport box with or without transforms.
       * Only measures axis-aligned boxes, rotate and skew must be manually
       * removed with a re-render to work.
       */
      measureViewportBox: function () {
        return measureViewportBox(instance, props);
      },
      // Motion values ========================

      /**
       * Add a motion value and bind it to this visual element.
       */
      addValue: function (key, value) {
        // Remove existing value if it exists
        if (element.hasValue(key)) element.removeValue(key);
        values.set(key, value);
        latestValues[key] = value.get();
        bindToMotionValue(key, value);
      },

      /**
       * Remove a motion value and unbind any active subscriptions.
       */
      removeValue: function (key) {
        var _a;

        values.delete(key);
        (_a = valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
        valueSubscriptions.delete(key);
        delete latestValues[key];
        removeValueFromRenderState(key, renderState);
      },

      /**
       * Check whether we have a motion value for this key
       */
      hasValue: function (key) {
        return values.has(key);
      },

      /**
       * Get a motion value for this key. If called with a default
       * value, we'll create one if none exists.
       */
      getValue: function (key, defaultValue) {
        var value = values.get(key);

        if (value === undefined && defaultValue !== undefined) {
          value = motionValue(defaultValue);
          element.addValue(key, value);
        }

        return value;
      },

      /**
       * Iterate over our motion values.
       */
      forEachValue: function (callback) {
        return values.forEach(callback);
      },

      /**
       * If we're trying to animate to a previously unencountered value,
       * we need to check for it in our state and as a last resort read it
       * directly from the instance (which might have performance implications).
       */
      readValue: function (key) {
        var _a;

        return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options);
      },

      /**
       * Set the base target to later animate back to. This is currently
       * only hydrated on creation and when we first read a value.
       */
      setBaseTarget: function (key, value) {
        baseTarget[key] = value;
      },

      /**
       * Find the base target for a value thats been removed from all animation
       * props.
       */
      getBaseTarget: function (key) {
        if (getBaseTarget) {
          var target = getBaseTarget(props, key);
          if (target !== undefined && !isMotionValue(target)) return target;
        }

        return baseTarget[key];
      }
    }, lifecycles), {
      /**
       * Build the renderer state based on the latest visual state.
       */
      build: function () {
        triggerBuild();
        return renderState;
      },

      /**
       * Schedule a render on the next animation frame.
       */
      scheduleRender: function () {
        sync.render(render, false, true);
      },

      /**
       * Synchronously fire render. It's prefered that we batch renders but
       * in many circumstances, like layout measurement, we need to run this
       * synchronously. However in those instances other measures should be taken
       * to batch reads/writes.
       */
      syncRender: render,

      /**
       * Update the provided props. Ensure any newly-added motion values are
       * added to our map, old ones removed, and listeners updated.
       */
      setProps: function (newProps) {
        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps(props), prevMotionValues);
      },
      getProps: function () {
        return props;
      },
      // Variants ==============================

      /**
       * Returns the variant definition with a given name.
       */
      getVariant: function (name) {
        var _a;

        return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name];
      },

      /**
       * Returns the defined default transition on this component.
       */
      getDefaultTransition: function () {
        return props.transition;
      },
      getTransformPagePoint: function () {
        return props.transformPagePoint;
      },

      /**
       * Used by child variant nodes to get the closest ancestor variant props.
       */
      getVariantContext: function (startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }

        if (startAtParent) return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();

        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};

          if (props.initial !== undefined) {
            context_1.initial = props.initial;
          }

          return context_1;
        }

        var context = {};

        for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop = props[name_1];

          if (isVariantLabel(prop) || prop === false) {
            context[name_1] = prop;
          }
        }

        return context;
      }
    });

    return element;
  };
};

var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder), false);

var numVariantProps = variantProps.length;

function isCSSVariable$1(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */


var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match) return [,];

  var _a = __read(match, 3),
      token = _a[1],
      fallback = _a[2];

  return [token, fallback];
}

var maxDepth = 4;

function getVariableValue(current, element, depth) {
  if (depth === void 0) {
    depth = 1;
  }

  invariant(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");

  var _a = __read(parseCSSVariable(current), 2),
      token = _a[0],
      fallback = _a[1]; // No CSS variable detected


  if (!token) return; // Attempt to read this CSS variable off the element

  var resolved = window.getComputedStyle(element).getPropertyValue(token);

  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable$1(fallback)) {
    // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */


function resolveCSSVariables(visualElement, _a, transitionEnd) {
  var _b;

  var target = __rest(_a, []);

  var element = visualElement.getInstance();
  if (!(element instanceof HTMLElement)) return {
    target: target,
    transitionEnd: transitionEnd
  }; // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
  // only if they change but I think this reads clearer and this isn't a performance-critical path.

  if (transitionEnd) {
    transitionEnd = __assign({}, transitionEnd);
  } // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved


  visualElement.forEachValue(function (value) {
    var current = value.get();
    if (!isCSSVariable$1(current)) return;
    var resolved = getVariableValue(current, element);
    if (resolved) value.set(resolved);
  }); // Cycle through every target property and resolve CSS variables. Currently
  // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`

  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable$1(current)) continue;
    var resolved = getVariableValue(current, element);
    if (!resolved) continue; // Clone target if it hasn't already been

    target[key] = resolved; // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
    // CSS variable. This will ensure that after the animation the component will reflect
    // changes in the value of the CSS variable.

    if (transitionEnd) (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }

  return {
    target: target,
    transitionEnd: transitionEnd
  };
}

var positionalKeys = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]);

var isPositionalKey = function (key) {
  return positionalKeys.has(key);
};

var hasPositionalKey = function (target) {
  return Object.keys(target).some(isPositionalKey);
};

var setAndResetVelocity = function (value, to) {
  // Looks odd but setting it twice doesn't render, it'll just
  // set both prev and current to the latest value
  value.set(to, false);
  value.set(to);
};

var isNumOrPxType = function (v) {
  return v === number || v === px;
};

var BoundingBoxDimension;

(function (BoundingBoxDimension) {
  BoundingBoxDimension["width"] = "width";
  BoundingBoxDimension["height"] = "height";
  BoundingBoxDimension["left"] = "left";
  BoundingBoxDimension["right"] = "right";
  BoundingBoxDimension["top"] = "top";
  BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));

var getPosFromMatrix = function (matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};

var getTranslateFromMatrix = function (pos2, pos3) {
  return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform) return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);

    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\((.+)\)$/);

      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};

var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function (key) {
  return !transformKeys.has(key);
});

function removeNonTranslationalTransform(visualElement) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function (key) {
    var value = visualElement.getValue(key);

    if (value !== undefined) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  }); // Apply changes to element before measurement

  if (removedTransforms.length) visualElement.syncRender();
  return removedTransforms;
}

var positionalValues = {
  // Dimensions
  width: function (_a, _b) {
    var x = _a.x;
    var _c = _b.paddingLeft,
        paddingLeft = _c === void 0 ? "0" : _c,
        _d = _b.paddingRight,
        paddingRight = _d === void 0 ? "0" : _d;
    return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
  },
  height: function (_a, _b) {
    var y = _a.y;
    var _c = _b.paddingTop,
        paddingTop = _c === void 0 ? "0" : _c,
        _d = _b.paddingBottom,
        paddingBottom = _d === void 0 ? "0" : _d;
    return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
  },
  top: function (_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function (_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function (_a, _b) {
    var y = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y.max - y.min);
  },
  right: function (_a, _b) {
    var x = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x.max - x.min);
  },
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};

var convertChangedValueTypes = function (target, visualElement, changedKeys) {
  var originBbox = visualElement.measureViewportBox();
  var element = visualElement.getInstance();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display;
  var origin = {}; // If the element is currently set to display: "none", make it visible before
  // measuring the target bounding box

  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  /**
   * Record origins before we render and update styles
   */


  changedKeys.forEach(function (key) {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  }); // Apply the latest values (as set in checkAndConvertChangedValueTypes)

  visualElement.syncRender();
  var targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach(function (key) {
    // Restore styles to their **calculated computed style**, not their actual
    // originally set style. This allows us to animate between equivalent pixel units.
    var value = visualElement.getValue(key);
    setAndResetVelocity(value, origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};

var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }

  if (transitionEnd === void 0) {
    transitionEnd = {};
  }

  target = __assign({}, target);
  transitionEnd = __assign({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey); // We want to remove any transform values that could affect the element's bounding box before
  // it's measured. We'll reapply these later.

  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function (key) {
    var value = visualElement.getValue(key);
    if (!visualElement.hasValue(key)) return;
    var from = origin[key];
    var fromType = findDimensionValueType(from);
    var to = target[key];
    var toType; // TODO: The current implementation of this basically throws an error
    // if you try and do value conversion via keyframes. There's probably
    // a way of doing this but the performance implications would need greater scrutiny,
    // as it'd be doing multiple resize-remeasure operations.

    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      var fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);

      for (var i = fromIndex; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }

    if (fromType !== toType) {
      // If they're both just number or px, convert them both to numbers rather than
      // relying on resize/remeasure to convert (which is wasteful in this situation)
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();

        if (typeof current === "string") {
          value.set(parseFloat(current));
        }

        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        // If one or the other value is 0, it's safe to coerce it to the
        // type of the other without measurement
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        // If we're going to do value conversion via DOM measurements, we first
        // need to remove non-positional transform values that could affect the bbox measurements.
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement);
          hasAttemptedToRemoveTransformValues = true;
        }

        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== undefined ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });

  if (changedValueTypeKeys.length) {
    var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys); // If we removed transform values, reapply them before the next render

    if (removedTransformValues.length) {
      removedTransformValues.forEach(function (_a) {
        var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1];

        visualElement.getValue(key).set(value);
      });
    } // Reapply original values


    visualElement.syncRender();
    return {
      target: convertedTarget,
      transitionEnd: transitionEnd
    };
  } else {
    return {
      target: target,
      transitionEnd: transitionEnd
    };
  }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */


function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : {
    target: target,
    transitionEnd: transitionEnd
  };
}

/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */

var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement, target, origin, transitionEnd);
};

function getComputedStyle$1(element) {
  return window.getComputedStyle(element);
}

var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function (domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle$1(domElement);
      return (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function (a, b) {
    /**
     * compareDocumentPosition returns a bitmask, by using the bitwise &
     * we're returning true if 2 in that bitmask is set to true. 2 is set
     * to true if b preceeds a.
     */
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  },
  getBaseTarget: function (props, key) {
    var _a;

    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function (element, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return measureViewportBox(element, transformPagePoint);
  },

  /**
   * Reset the transform on the current Element. This is called as part
   * of a batched process across the entire layout tree. To remove this write
   * cycle it'd be interesting to see if it's possible to "undo" all the current
   * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
   * works
   */
  resetTransform: function (element, domElement, props) {
    var transformTemplate = props.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none"; // Ensure that whatever happens next, we restore our transform on the next frame

    element.scheduleRender();
  },
  restoreTransform: function (instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function (key, _a) {
    var vars = _a.vars,
        style = _a.style;
    delete vars[key];
    delete style[key];
  },

  /**
   * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
   * can be animated by Motion.
   */
  makeTargetAnimatable: function (element, _a, _b, isMounted) {
    var transformValues = _b.transformValues;

    if (isMounted === void 0) {
      isMounted = true;
    }

    var transition = _a.transition,
        transitionEnd = _a.transitionEnd,
        target = __rest(_a, ["transition", "transitionEnd"]);

    var origin = getOrigin(target, transition || {}, element);
    /**
     * If Framer has provided a function to convert `Color` etc value types, convert them
     */

    if (transformValues) {
      if (transitionEnd) transitionEnd = transformValues(transitionEnd);
      if (target) target = transformValues(target);
      if (origin) origin = transformValues(origin);
    }

    if (isMounted) {
      checkTargetForNewValues(element, target, origin);
      var parsed = parseDomVariant(element, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }

    return __assign({
      transition: transition,
      transitionEnd: transitionEnd
    }, target);
  },
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
  build: function (element, renderState, latestValues, options, props) {
    if (element.isVisible !== undefined) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }

    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);

var svgVisualElement = visualElement(__assign(__assign({}, htmlConfig), {
  getBaseTarget: function (props, key) {
    return props[key];
  },
  readValueFromInstance: function (domElement, key) {
    var _a;

    if (isTransformProp(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }

    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return domElement.getAttribute(key);
  },
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
  build: function (_element, renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderSVG
}));

var createDomVisualElement = function (Component, options) {
  return isSVGComponent(Component) ? svgVisualElement(options, {
    enableHardwareAcceleration: false
  }) : htmlVisualElement(options, {
    enableHardwareAcceleration: true
  });
};

function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min) return 0;
  return pixels / (axis.max - axis.min) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */


var correctBorderRadius = {
  correct: function (latest, node) {
    if (!node.target) return latest;
    /**
     * If latest is a string, if it's a percentage we can return immediately as it's
     * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
     */

    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */


    var x = pixelsToPercent(latest, node.target.x);
    var y = pixelsToPercent(latest, node.target.y);
    return x + "% " + y + "%";
  }
};

var varToken = "_$css";
var correctBoxShadow = {
  correct: function (latest, _a) {
    var treeScale = _a.treeScale,
        projectionDelta = _a.projectionDelta;
    var original = latest;
    /**
     * We need to first strip and store CSS variables from the string.
     */

    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];

    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, function (match) {
        cssVariables.push(match);
        return varToken;
      });
    }

    var shadow = complex.parse(latest); // TODO: Doesn't support multiple shadows

    if (shadow.length > 5) return original;
    var template = complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0; // Calculate the overall context scale

    var xScale = projectionDelta.x.scale * treeScale.x;
    var yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */

    var averageScale = mix(xScale, yScale, 0.5); // Blur

    if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale; // Spread

    if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
    var output = template(shadow);

    if (containsCSSVariables) {
      var i_1 = 0;
      output = output.replace(varToken, function () {
        var cssVariable = cssVariables[i_1];
        i_1++;
        return cssVariable;
      });
    }

    return output;
  }
};

var MeasureLayoutWithContext =
/** @class */
function (_super) {
  __extends(MeasureLayoutWithContext, _super);

  function MeasureLayoutWithContext() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */


  MeasureLayoutWithContext.prototype.componentDidMount = function () {
    var _this = this;

    var _a = this.props,
        visualElement = _a.visualElement,
        layoutGroup = _a.layoutGroup,
        switchLayoutGroup = _a.switchLayoutGroup,
        layoutId = _a.layoutId;
    var projection = visualElement.projection;
    addScaleCorrector(defaultScaleCorrectors);

    if (projection) {
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group) layoutGroup.group.add(projection);

      if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
        switchLayoutGroup.register(projection);
      }

      projection.root.didUpdate();
      projection.addEventListener("animationComplete", function () {
        _this.safeToRemove();
      });
      projection.setOptions(__assign(__assign({}, projection.options), {
        onExitComplete: function () {
          return _this.safeToRemove();
        }
      }));
    }

    globalProjectionState.hasEverUpdated = true;
  };

  MeasureLayoutWithContext.prototype.getSnapshotBeforeUpdate = function (prevProps) {
    var _this = this;

    var _a = this.props,
        layoutDependency = _a.layoutDependency,
        visualElement = _a.visualElement,
        drag = _a.drag,
        isPresent = _a.isPresent;
    var projection = visualElement.projection;
    if (!projection) return null;
    /**
     * TODO: We use this data in relegate to determine whether to
     * promote a previous element. There's no guarantee its presence data
     * will have updated by this point - if a bug like this arises it will
     * have to be that we markForRelegation and then find a new lead some other way,
     * perhaps in didUpdate
     */

    projection.isPresent = isPresent;

    if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === undefined) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }

    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        /**
         * If there's another stack member taking over from this one,
         * it's in charge of the exit animation and therefore should
         * be in charge of the safe to remove. Otherwise we call it here.
         */
        sync.postRender(function () {
          var _a;

          if (!((_a = projection.getStack()) === null || _a === void 0 ? void 0 : _a.members.length)) {
            _this.safeToRemove();
          }
        });
      }
    }

    return null;
  };

  MeasureLayoutWithContext.prototype.componentDidUpdate = function () {
    var projection = this.props.visualElement.projection;

    if (projection) {
      projection.root.didUpdate();

      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  };

  MeasureLayoutWithContext.prototype.componentWillUnmount = function () {
    var _a = this.props,
        visualElement = _a.visualElement,
        layoutGroup = _a.layoutGroup,
        promoteContext = _a.switchLayoutGroup;
    var projection = visualElement.projection;

    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group) layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister) promoteContext.deregister(projection);
    }
  };

  MeasureLayoutWithContext.prototype.safeToRemove = function () {
    var safeToRemove = this.props.safeToRemove;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  };

  MeasureLayoutWithContext.prototype.render = function () {
    return null;
  };

  return MeasureLayoutWithContext;
}(React__default['default'].Component);

function MeasureLayout(props) {
  var _a = __read(usePresence(), 2),
      isPresent = _a[0],
      safeToRemove = _a[1];

  var layoutGroup = React$1.useContext(LayoutGroupContext);
  return React__default['default'].createElement(MeasureLayoutWithContext, __assign({}, props, {
    layoutGroup: layoutGroup,
    switchLayoutGroup: React$1.useContext(SwitchLayoutGroupContext),
    isPresent: isPresent,
    safeToRemove: safeToRemove
  }));
}

var defaultScaleCorrectors = {
  borderRadius: __assign(__assign({}, correctBorderRadius), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

var layoutFeatures = {
  measureLayout: MeasureLayout
};

var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: function (ref, notify) {
    ref.addEventListener("resize", notify, {
      passive: true
    });
    return function () {
      return ref.removeEventListener("resize", notify);
    };
  },
  measureScroll: function () {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  }
});

var rootProjectionNode = {
  current: undefined
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: function (instance) {
    return {
      x: instance.scrollLeft,
      y: instance.scrollTop
    };
  },
  defaultParent: function () {
    if (!rootProjectionNode.current) {
      var documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({
        layoutScroll: true
      });
      rootProjectionNode.current = documentNode;
    }

    return rootProjectionNode.current;
  },
  resetTransform: function (instance, value) {
    instance.style.transform = value !== null && value !== void 0 ? value : "none";
  }
});

var featureBundle = __assign(__assign(__assign(__assign({}, animations), gestureAnimations), drag), layoutFeatures);
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */


var motion = /*@__PURE__*/createMotionProxy(function (Component, config) {
  return createDomMotionConfig(Component, config, featureBundle, createDomVisualElement, HTMLProjectionNode);
});

var Icon$2 = function Icon() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "question-circle",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: "svg-inline--fa fa-question-circle fa-w-16 fa-2x"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z",
    className: ""
  }));
};

function _templateObject$A() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$A = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$d = styled__default['default'](motion.div)(_templateObject$A());

var HoverIcon = function HoverIcon(_ref) {
  var _ref$width = _ref.width,
      _ref$height = _ref.height,
      text = _ref.text;
  var wrapRef = React$1.useRef(null);
  return /*#__PURE__*/React__default['default'].createElement(Wrap$d, {
    ref: wrapRef,
    onMouseOver: function onMouseOver() {},
    onMouseOut: function onMouseOut() {}
  }, /*#__PURE__*/React__default['default'].createElement(Icon$2, null));
};

function _templateObject3$i() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n    background: #ffffff;\n    color: #222222;\n    width: 100vw;\n    height: 100vh;\n    min-width: 5rem;\n    min-height: 2rem;\n    max-width: ", ";\n    max-height: ", ";\n    padding: 0.3rem 0.6rem;\n    box-sizing: border-box;\n    border-radius: 3px;\n    border: 1px solid grey;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n\n    &:before,\n    &:after {\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        position: absolute;\n    }\n    &:before {\n        border-left: 10px solid transparent;\n        border-top: 10px solid grey;\n        border-right: 10px solid transparent;\n        left: calc(50% - 10px);\n        bottom: -9px;\n        z-index: -1;\n    }\n    &:after {\n        border-left: 8px solid transparent;\n        border-top: 8px solid #ffffff;\n        border-right: 8px solid transparent;\n        left: calc(50% - 8px);\n        bottom: -8px;\n    }\n"]);

  _templateObject3$i = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$w() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: ", ";\n    left: ", ";\n"]);

  _templateObject2$w = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$B() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0px;\n    height: 0px;\n    overflow: visible;\n    z-index: 100;\n"]);

  _templateObject$B = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$e = styled__default['default'](motion.div)(_templateObject$B());
var ToolTipWrap = styled__default['default'](motion.div)(_templateObject2$w(), function (_ref) {
  var y = _ref.y;
  return "".concat(y);
}, function (_ref2) {
  var x = _ref2.x;
  return "".concat(x);
});
var ToolTip = styled__default['default'](motion.div)(_templateObject3$i(), function (_ref3) {
  var maxWidth = _ref3.maxWidth;
  return "".concat(maxWidth);
}, function (_ref4) {
  var maxHeight = _ref4.maxHeight;
  return "".concat(maxHeight);
});

var Contents = function Contents(_ref5) {
  var content = _ref5.content;

  if (typeof content === 'string') {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, content);
  }

  if (content === null) {
    return null;
  }

  return content;
};

var ToolTipContents = function ToolTipContents(_ref6) {
  var isOpen = _ref6.isOpen,
      content = _ref6.content,
      x = _ref6.x,
      y = _ref6.y,
      maxWidth = _ref6.maxWidth,
      maxHeight = _ref6.maxHeight;

  if (isOpen === false || content === null) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(ToolTipWrap, {
    x: x,
    y: y
  }, /*#__PURE__*/React__default['default'].createElement(ToolTip, {
    maxWidth: maxWidth,
    maxHeight: maxHeight
  }, /*#__PURE__*/React__default['default'].createElement(Contents, {
    content: content
  })));
};

var ToolTipContainer = function ToolTipContainer(_ref7) {
  var _ref7$reducer = _ref7.reducer;
  var _isOpen$content$x$y$m = {
    isOpen: false,
    content: '',
    x: 0,
    y: 0,
    maxWidth: 999,
    maxHeight: 999
  },
      isOpen = _isOpen$content$x$y$m.isOpen,
      content = _isOpen$content$x$y$m.content,
      x = _isOpen$content$x$y$m.x,
      y = _isOpen$content$x$y$m.y,
      maxWidth = _isOpen$content$x$y$m.maxWidth,
      maxHeight = _isOpen$content$x$y$m.maxHeight;
  return /*#__PURE__*/React__default['default'].createElement(Wrap$e, null, /*#__PURE__*/React__default['default'].createElement(ToolTipContents, {
    isOpen: isOpen,
    content: content,
    x: x,
    y: y,
    maxWidth: maxWidth,
    maxHeight: maxHeight
  }));
};

var initialState$1 = {
  isOpen: false,
  content: null,
  maxWidth: '7rem',
  maxHeight: '3rem',
  x: 0,
  y: 0,
  onClose: function onClose() {}
};

function scheduleTooltip() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_SCHEDULE_TOOLTIP_CONTENT':
      return _objectSpread2(_objectSpread2({}, state), action.content);

    case 'SET_SCHEDULE_TOOLTIP_IS_OPEN':
      return _objectSpread2(_objectSpread2({}, state), {
        isOpen: action.payload
      });

    case 'UPDATE_SCHEDULE_TOOLTIP':
      return _objectSpread2(_objectSpread2({}, state), _objectSpread2({}, action.payload));

    default:
      return state;
  }
}

function _templateObject$C() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    margin: 0 auto;\n    border-bottom: 1px solid ", ";\n"]);

  _templateObject$C = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHr = styled__default['default'].hr(_templateObject$C(), function (_ref) {
  var width = _ref.width;
  return width;
}, function (_ref2) {
  var color = _ref2.color;
  return color !== null ? color : theme.generalColors.midGrey;
});

var Hr = function Hr(_ref3) {
  var _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '100%' : _ref3$width,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? null : _ref3$color;
  return /*#__PURE__*/React__default['default'].createElement(StyledHr, {
    width: width,
    color: color
  });
};

function _templateObject2$x() {
  var data = _taggedTemplateLiteral(["\n    margin-top:.25rem;\n"]);

  _templateObject2$x = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$D() {
  var data = _taggedTemplateLiteral(["\n    padding:.75rem;\n    border-radius:10px;\n    background-color:#fff;\n"]);

  _templateObject$D = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$f = styled__default['default'].div(_templateObject$D());
var Children = styled__default['default'].div(_templateObject2$x());

var Rectangle = function Rectangle(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? "" : _ref$text,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["text", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrap$f, rest, /*#__PURE__*/React__default['default'].createElement(Text$1, {
    type: "small"
  }, text), /*#__PURE__*/React__default['default'].createElement(Children, null, children));
};

function _templateObject4$c() {
  var data = _taggedTemplateLiteral(["\n    font-size:15px;\n    font-weight:500;\n    min-width:2rem;\n    color:", "\n"]);

  _templateObject4$c = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$j() {
  var data = _taggedTemplateLiteral(["\n    font-size:18px;\n    color:", ";\n    font-weight:700;\n    padding:0 .5rem 0 0;\n"]);

  _templateObject3$j = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$y() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject2$y = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$E() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    width:100%;\n    font-family: ", ";\n    \n"]);

  _templateObject$E = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$g = styled__default['default'].div(_templateObject$E(), theme.main.font);
var TextWrap$1 = styled__default['default'].span(_templateObject2$y());
var LeftText = styled__default['default'](TextWrap$1)(_templateObject3$j(), function (_ref) {
  var fill = _ref.fill;
  return fill ? fill : theme.colors.paintItBlack;
});
var RightText = styled__default['default'](TextWrap$1)(_templateObject4$c(), function () {
  return theme.generalColors.darkGrey;
});

var TextPairs = function TextPairs(_ref2) {
  var fill = _ref2.fill,
      _ref2$leftText = _ref2.leftText,
      leftText = _ref2$leftText === void 0 ? '' : _ref2$leftText,
      _ref2$rightText = _ref2.rightText,
      rightText = _ref2$rightText === void 0 ? '' : _ref2$rightText,
      Icon = _ref2.Icon;
  return /*#__PURE__*/React__default['default'].createElement(Wrap$g, null, /*#__PURE__*/React__default['default'].createElement(LeftText, {
    fill: fill
  }, leftText), /*#__PURE__*/React__default['default'].createElement(RightText, null, rightText));
};

function _templateObject2$z() {
  var data = _taggedTemplateLiteral(["\n    width:1.5rem;\n    margin-right:.5rem;\n    color: ", ";\n"]);

  _templateObject2$z = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$F() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    width:100%;\n    font-family: ", ";\n    align-items:center;\n"]);

  _templateObject$F = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$h = styled__default['default'].div(_templateObject$F(), theme.main.font);
var IconWrap$1 = styled__default['default'].div(_templateObject2$z(), function (props) {
  return props.fill;
});

var IconBoxes = function IconBoxes(_ref) {
  var fill = _ref.fill,
      _ref$leftText = _ref.leftText,
      leftText = _ref$leftText === void 0 ? '' : _ref$leftText,
      _ref$rightText = _ref.rightText,
      rightText = _ref$rightText === void 0 ? '' : _ref$rightText,
      Icon = _ref.Icon;
  return /*#__PURE__*/React__default['default'].createElement(Wrap$h, null, /*#__PURE__*/React__default['default'].createElement(IconWrap$1, {
    fill: fill
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    fill: fill
  })), /*#__PURE__*/React__default['default'].createElement(TextPairs, {
    fill: fill,
    leftText: leftText,
    rightText: rightText
  }));
};

function _templateObject$G() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n\n    border-radius:10px;\n    background-color:#fff;\n    \n    > * {\n        display: flex;\n\n        ", "\n\n        ", "\n\n        \n\n    }\n    //grid-template-rows: ", ";\n"]);

  _templateObject$G = function _templateObject() {
    return data;
  };

  return data;
}

var Wrap$i = styled__default['default'].div(_templateObject$G(), function (_ref) {
  var columnString = _ref.columnString;
  return columnString !== null ? "> * { width:" + columnString + "; }" : null;
}, function (_ref2) {
  var columnArray = _ref2.columnArray;
  return columnArray !== null ? columnArray.map(function (columnString, indx) {
    return "> *:nth-child(" + (indx + 1) + ") { width:" + columnString + "; }";
  }) : null;
}, function (_ref3) {
  var rows = _ref3.rows;
  return rows;
}); //grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];

var Header$2 = function Header(_ref4) {
  var children = _ref4.children,
      _ref4$columns = _ref4.columns,
      columns = _ref4$columns === void 0 ? '12rem' : _ref4$columns,
      rest = _objectWithoutProperties(_ref4, ["children", "columns"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrap$i, _extends({}, rest, {
    columnString: typeof columns === 'string' ? columns : null,
    columnArray: typeof columns !== 'string' ? columns : null
  }), children);
};

function _templateObject$H() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: nowrap;\n    border-bottom: 1px solid ", ";\n\n    > * {\n        font-weight: 700;\n    }\n"]);

  _templateObject$H = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$j = styled__default['default'].div(_templateObject$H(), theme.generalColors.midGrey);

var Header$3 = function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(Wrap$j, null, children);
};

function _templateObject3$k() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    font-weight: 700;\n    font-size: 0.95rem;\n    color:", "\n"]);

  _templateObject3$k = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$A() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-family: ", ";\n    margin: 0;\n"]);

  _templateObject2$A = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$I() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.6rem 0.4rem;\n"]);

  _templateObject$I = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$k = styled__default['default'].div(_templateObject$I());
var headingBase$1 = styled.css(_templateObject2$A(), theme.main.color, theme.main.font);
var SmallTableHeader = styled__default['default'].h4(_templateObject3$k(), headingBase$1, function () {
  return theme.generalColors.darkGrey;
});

var Header$4 = function Header(_ref) {
  var type = _ref.type,
      children = _ref.children;

  switch (type) {
    case "smalltableheader":
      return /*#__PURE__*/React__default['default'].createElement(Wrap$k, null, /*#__PURE__*/React__default['default'].createElement(SmallTableHeader, null, children));

    default:
      return /*#__PURE__*/React__default['default'].createElement(Wrap$k, null, children);
  }
};

function _templateObject$J() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: nowrap;\n    border-bottom: 1px solid ", ";\n"]);

  _templateObject$J = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$l = styled__default['default'].div(_templateObject$J(), theme.generalColors.midGrey);

var Header$5 = function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(Wrap$l, null, children);
};

function _templateObject$K() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.6rem 0.4rem;\n"]);

  _templateObject$K = function _templateObject() {
    return data;
  };

  return data;
}

var Wrap$m = styled__default['default'].div(_templateObject$K());

var Header$6 = function Header(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrap$m, rest, children);
};

function _templateObject$L() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    color: ", ";\n    padding: 0.3rem 0.6rem;\n    font-size: 1rem;\n    font-family: MuseoSansReg, sans-serif;\n    border-bottom: 3px solid transparent;\n    cursor: pointer;\n    white-space: nowrap;\n    user-select: none;\n\n    &.active {\n        color: ", ";\n        border-bottom: 3px solid ", ";\n    }\n"]);

  _templateObject$L = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$n = styled__default['default'].a(_templateObject$L(), theme.mainColors.paintItBlack, theme.mainColors.simplyRed, theme.mainColors.simplyRed);

var Tab = function Tab(_ref) {
  var id = _ref.id,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["id", "checked", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrap$n, _extends({
    id: id,
    key: 'tab-' + id,
    className: checked ? 'active' : ''
  }, rest), children);
};

function _templateObject$M() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n"]);

  _templateObject$M = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$o = styled__default['default'].div(_templateObject$M());

var TabContent = function TabContent(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrap$o, rest, children);
};

function _templateObject2$B() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n    padding: 0;    \n    margin: 0 auto;\n    display: flex;\n    flex-wrap: nowrap;\n    height: 2rem;\n    overflow-y: none;\n    overflow-x: auto;\n    overscroll-behavior-x: contain;\n    scroll-snap-type: x mandatory;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n\n    > a {\n        scroll-snap-align: start;\n    }\n"]);

  _templateObject2$B = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$N() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject$N = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$p = styled__default['default'].div(_templateObject$N());
var Tabs = styled__default['default'].div(_templateObject2$B(), theme.colors.fadeToGrey);

var TabGroup = function TabGroup(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrap$p, rest, /*#__PURE__*/React__default['default'].createElement(Tabs, null, children));
};

function _templateObject$O() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n    position: relative;\n    opacity: 0;\n    transition: opacity 0.2s linear;\n\n    &.active {\n        display: block;\n        opacity: 1;\n        \n    }\n\n"]);

  _templateObject$O = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$q = styled__default['default'].div(_templateObject$O());

var TabPane = function TabPane(_ref) {
  var _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["checked", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrap$q, _extends({
    className: checked ? 'active' : ''
  }, rest), children);
};

function _templateObject$P() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n"]);

  _templateObject$P = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap$r = styled__default['default'].div(_templateObject$P());

var TabWrap = function TabWrap(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  var childrenA = children.props;
  var childrenB = childrenA.children;

  if (childrenB.length !== 2 || !childrenB[0] || !childrenB[1]) {
    return /*#__PURE__*/React__default['default'].createElement(Wrap$r, null, /*#__PURE__*/React__default['default'].createElement("p", null, "There are issues with your children"));
  }

  function switchContent(evnt) {
    var target = evnt.target.closest('a[id]');

    if (target) {
      var getSiblings = function getSiblings(n) {
        return _toConsumableArray(n.parentElement.children).filter(function (c) {
          return c != n;
        });
      };

      var targetSiblings = getSiblings(target);
      targetSiblings.forEach(function (sibling) {
        return sibling.classList.remove('active');
      });
      target.classList.add('active');
      var matches = evnt.target.closest('.tabbed-content').querySelectorAll('div#' + target.id);

      if (matches && matches[0]) {
        var content = matches[0];
        var contentSiblings = getSiblings(content);
        contentSiblings.forEach(function (sibling) {
          return sibling.classList.remove('active');
        });
        content.classList.add('active');
      }
    }
  }

  return /*#__PURE__*/React__default['default'].createElement(Wrap$r, _extends({
    className: 'tabbed-content'
  }, rest, {
    onClick: switchContent
  }), children);
};

exports.Background = Background;
exports.Button = Button;
exports.Checkbox = Checkbox$1;
exports.Chip = Chip;
exports.ChipInput = Chip$1;
exports.ChipSelect = ChipSelect;
exports.ColumnContainer = ColumnContainer$1;
exports.Content = Content$1;
exports.Flextable = Header$2;
exports.FlextableCell = Header$6;
exports.FlextableHead = Header$3;
exports.FlextableHeader = Header$4;
exports.FlextableRow = Header$5;
exports.Form = Form;
exports.GridContainer = GridContainer$1;
exports.Header = Header$1;
exports.Heading = Heading;
exports.Hidden = Hidden;
exports.HoverIcon = HoverIcon;
exports.Hr = Hr;
exports.IconBoxes = IconBoxes;
exports.Input = Input$1;
exports.Label = Label$1;
exports.LoaderBar = LoaderBar;
exports.LoaderSpinner = Loader$1;
exports.Marquee = Marquess;
exports.Mast = index;
exports.Modal = ModalContainer;
exports.MoodSelect = MoodSelect;
exports.Pagination = Pagination;
exports.Paragraph = paragraph;
exports.Pod = Pod$1;
exports.PositionContainer = PositionContainer$1;
exports.ProgressBar = ProgressBar;
exports.ProgressBarActions = actions;
exports.ProgressBarReducer = progressBars;
exports.Radio = Radio$2;
exports.Rectangle = Rectangle;
exports.ResponseBox = ResponseBox;
exports.Select = Select;
exports.SelectionPanel = SelectionPanel$1;
exports.Switch = Switch$1;
exports.Tab = Tab;
exports.TabContent = TabContent;
exports.TabGroup = TabGroup;
exports.TabPane = TabPane;
exports.TabWrap = TabWrap;
exports.Table = Table;
exports.Td = Td;
exports.Text = Text$1;
exports.TextPairs = TextPairs;
exports.Th = Th;
exports.TimeSelect = TimeSelect;
exports.ToolTip = ToolTipContainer;
exports.TooltipReducer = scheduleTooltip;
exports.Tr = Tr;
//# sourceMappingURL=index.js.map
