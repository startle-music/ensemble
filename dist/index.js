var React$1 = require('react');
var styled = require('styled-components');
var _extends$1 = require('@babel/runtime/helpers/extends');
var _extends = require('@babel/runtime/helpers/esm/extends');
var _assertThisInitialized = require('@babel/runtime/helpers/esm/assertThisInitialized');
var _inheritsLoose = require('@babel/runtime/helpers/esm/inheritsLoose');
var _wrapNativeSuper = require('@babel/runtime/helpers/esm/wrapNativeSuper');
require('@babel/runtime/helpers/esm/taggedTemplateLiteralLoose');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React$1);

const Wrap$q = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2e364c;
    z-index: 1;
`;
const fadeIn = styled.keyframes`
    0% { opacity: 0; }
    33% { opacity: 0; }
    99%   { opacity: 0.5; }
`;
const Inner = styled.div`
    position: absolute;
    background-image: url(${props => props.src});
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    opacity: 0.5;
    mix-blend-mode: multiply;
    filter: blur(0px);
    transform: scale(1.2);
    animation: ${fadeIn} 3s;
`;
const Background$1 = ({
  src = null
}) => /*#__PURE__*/React$1.createElement(Wrap$q, {
  className: "background"
}, /*#__PURE__*/React$1.createElement(Inner, {
  className: "background__inner",
  src: src
}));

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

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
    return _assertThisInitialized(_this);
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
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
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
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
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
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
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
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
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
function hsla$1(value, saturation, lightness, alpha) {
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
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
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
function rgba$1(firstValue, secondValue, thirdValue, fourthValue) {
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
  if (isRgba(color)) return rgba$1(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla$1(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
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
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore

var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */(darken$1);
var curriedDarken$1 = curriedDarken;

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
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore

var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */(lighten);
var curriedLighten$1 = curriedLighten;

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff'),
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')};
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')};
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
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba$1(colorWithAlpha);
} // prettier-ignore

var curriedTransparentize = /*#__PURE__*/curry
/* ::<number | string, string, string> */(transparentize);
var curriedTransparentize$1 = curriedTransparentize;

// import { lighten, opacify, darken } from 'polished';

const brandColors = {
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
const statusColours = {
  default: {
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
const generalColors = {
  lightGrey: '#eef0f4',
  lightBlueGrey: '#787e89',
  midGrey: '#e7e7e7',
  blueGrey: '#6a707d',
  darkGrey: '#696f7c' /* nice */,
  white: '#ffffff',
  green: '#7ec17e',
  sliverColor: 'rgb(199,55,71)',
  sliverGradient: 'linear-gradient(90deg, rgba(199,55,71,1) 0%, rgba(223,172,51,1) 20%, rgba(142,182,59,1) 40%, rgba(251,253,254,1) 60%, rgba(102,175,208,1) 80%, rgba(63,83,158,1) 100%)'
};
const appColors = {
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
    default: {
      primary: brandColors.paintItBlack,
      contrast: generalColors.white,
      button: brandColors.blueMonday,
      buttonColor: generalColors.white
    },
    get() {
      return appColors.products.default;
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
const theme = {
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
  generalColors,
  statusColours,
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
  menu: {
    ...appColors.menu
  },
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
      placeholder: curriedDarken$1(0.12, generalColors.midGrey),
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
  buttons: {
    ...appColors.buttons
  },
  containers: {},
  mast: {},
  primaryNav: {},
  selectionPanel: {
    background: generalColors.lightGrey,
    color: appColors.products.default.primary,
    active: {
      background: appColors.products.default.primary,
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
      default: generalColors.lightBlueGrey,
      information: brandColors.blueMonday
    }
  },
  dashboard: {
    online: brandColors.greenDay,
    offline: brandColors.simplyRed,
    fetching: generalColors.lightBlueGrey
  }
};

const btnBase = styled.css`
    font-family: ${theme.main.font};
    padding: ${({
  small
}) => small === true ? `0.6rem 0.9rem` : `0.7rem 1rem`};
    font-size: ${({
  small
}) => small === true ? `0.785rem` : `1rem`};
    text-decoration: none;
    position: relative;
    display: ${({
  block
}) => block === true ? `block` : `inline-block`};
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
    border-radius: ${({
  rounded
}) => rounded === true ? '2rem' : '0.5rem'};
    cursor: pointer;
    box-shadow: none;
    
    background: ${({
  backgroundColour
}) => backgroundColour};
    border: 2px solid ${({
  borderColour
}) => borderColour};
    color: ${({
  buttonColour
}) => buttonColour};

    &:disabled, &:disabled:hover, &:disabled:active  {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${props => curriedLighten$1(0.15, props.backgroundColour)};
        border: 2px solid ${props => curriedLighten$1(0.15, props.borderColour)};
        color: ${props => curriedLighten$1(0.15, props.buttonColour)};
    }
    &:active {
        background: ${props => curriedDarken$1(0.05, props.activeBackgroundColour)};
        border: 2px solid ${props => curriedDarken$1(0.05, props.borderColour)};
        color: ${props => curriedDarken$1(0.05, props.buttonColour)};
    }

    /* if a button is followed by a button add left margin to the trailing button */
    &+button, &+a {
        margin-left: 0.4rem;
    }

    svg {
        fill: currentColor;
        height: 1.1rem;
        width: 1em;
    }
`;
const BaseButton = styled.button`
    ${btnBase}
`;
const RouteLinkBase = styled.a`
    ${btnBase}
`;
styled.input`
    ${btnBase}
`;
const RouteLinkButton = props => {
  const {
    children,
    to
  } = props;
  // should href be to and import nextjs route link component?
  return /*#__PURE__*/React$1.createElement(RouteLinkBase, _extends$1({
    href: to
  }, props), children);
};
const LinkButton = props => {
  const {
    children,
    href
  } = props;
  // should href be to and import nextjs route link component?
  return /*#__PURE__*/React$1.createElement(RouteLinkBase, _extends$1({
    href: href
  }, props), children);
};
styled.div`
    position: relative;
    user-select: none;

    > *:first-child {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    > *:not(:first-child) {
        opacity: 0;
    }
`;
const calculateColours = (colour, outline) => {
  const {
    mainColors,
    generalColors
  } = theme;
  let mainColour = mainColors.simplyRed;
  let activeMainColour = mainColors.simplyRed;
  let altColour = generalColors.white;

  // check main colours for this colour name
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
  const colourObject = {
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
const Button = props => {
  const {
    children,
    loading = false,
    message = null,
    colour = 'default',
    outline = false,
    to = false,
    href = false
  } = props;
  let content = children;
  const attributes = {
    ...props,
    ...calculateColours(colour, outline)
  };

  // 
  if (to !== false) {
    return /*#__PURE__*/React$1.createElement(RouteLinkButton, attributes, content);
  }
  if (href !== false) {
    return /*#__PURE__*/React$1.createElement(LinkButton, attributes, content);
  }
  return /*#__PURE__*/React$1.createElement(BaseButton, attributes, content);
};

const Times = () => /*#__PURE__*/React$1.createElement("svg", {
  width: "64px",
  height: "64px",
  viewBox: "0 0 64 64",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React$1.createElement("g", {
  id: "Icon/Times",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, /*#__PURE__*/React$1.createElement("path", {
  d: "M44.1308425,32 L62.3254196,50.194577 C64.5581935,52.4291265 64.5581935,56.0489723 62.3254196,58.2817462 L58.2817462,62.3254196 C56.0489723,64.5581935 52.4271734,64.5581935 50.194577,62.3254196 L32,44.1308425 L13.805423,62.3254196 C11.5728266,64.5581935 7.95102768,64.5581935 5.71825379,62.3254196 L1.67458042,58.2817462 C-0.558193473,56.0471968 -0.558193473,52.4271734 1.67458042,50.194577 L19.8691575,32 L1.67458042,13.805423 C-0.558193473,11.5708735 -0.558193473,7.95102768 1.67458042,5.71825379 L5.71825379,1.67458042 C7.95280324,-0.558193473 11.5728266,-0.558193473 13.805423,1.67458042 L32,19.8691575 L50.194577,1.67458042 C52.4291265,-0.558193473 56.0489723,-0.558193473 58.2817462,1.67458042 L62.3254196,5.71825379 C64.5581935,7.95280324 64.5581935,11.5728266 62.3254196,13.805423 L44.1308425,32 Z",
  id: "\uD83C\uDFA8-Icon-Fill"
})));

const Wrap$p = styled.div`
    font-family: ${theme.main.font};
    display: inline-flex;
    border-radius: 10.325em;
    margin: 0 0.325em 0 0;
    overflow: hidden;
    background: ${({
  backgroundColor
}) => backgroundColor};
    color: ${({
  color
}) => color};
    align-items: center;

    input,
    input:checked {
        display: none;
    }

    label {
        padding: 0.5em 0.75em;
        color: inherit;
        cursor: pointer;

        &:focus {
            background: rgba(0, 0, 0, 0.175);
        }
    }

    button {
        display: inline-block;
        padding: 1em 0.6em 0.3em 0.5em;
        width: 1.7em;
        box-sizing: border-box;
        background: rgba(40, 40, 40, 0.075);
        cursor: pointer;
        border: 0px;

        svg {
            width: 100%;
            height: 100%;
            color: white;
            fill: white;
        }
    }
`;
const renderClose = (onRemove, data) => {
  console.log('onRemove', onRemove);
  if (onRemove === null) {
    return null;
  }
  const {
    label,
    name,
    value
  } = data;
  return /*#__PURE__*/React$1.createElement("button", {
    type: "button",
    onClick: onRemove,
    label: label,
    name: name,
    value: value
  }, /*#__PURE__*/React$1.createElement(Times, null));
};
const defaultOnClick = () => null;
function calculateTextColour(textColor) {
  let color = 'white';
  if (textColor !== null) {
    color = textColor;
  }
  return color;
}
const Chip$1 = ({
  label,
  value,
  name = null,
  color = 'red',
  textColor = null,
  onClick = null,
  onRemove = null
}) => {
  let chipName = name;
  if (name === null) {
    chipName = `chip-name-${label}`;
  }
  let onClickFunction = defaultOnClick;
  if (onClick !== null) {
    onClickFunction = onClick;
  }
  const textColour = calculateTextColour(textColor);
  return /*#__PURE__*/React$1.createElement(Wrap$p, {
    backgroundColor: color,
    color: textColour
  }, /*#__PURE__*/React$1.createElement("label", {
    htmlFor: chipName,
    onClick: onClickFunction
  }, /*#__PURE__*/React$1.createElement("input", {
    type: "checkbox",
    name: chipName,
    value: value,
    defaultChecked: true
  }), label), renderClose(onRemove, {
    label,
    name,
    value
  }));
};

const podBase = styled.css`
    background: ${props => props.theme.containers.background || ''};
    border-radius: ${props => props.theme.main.borderRadius || ''};
    border: ${props => props.theme.containers.border || ''};
    margin: ${props => props.theme.containers.podSeperator || 0};
    min-width:300px;
    width: 100%;
`;
const Pod$1 = styled.article`
    ${podBase}
`;

const PositionContainerBase = styled.css`
    display:flex;
    justify-content: ${props => props.align || 'center'};
    align-items: ${props => props.position || 'center'};
    flex-direction: ${props => props.column || 'column'};
    width: 100%;
    overflow-x: auto;
    ${props => props.image ? `
            background-image: url(${props.image});
            background-position: ${props.imagePosition || 'left'}; 
            background-size: ${props.imageSize || 'cover'};
            background-repeat: no-repeat; 
        ` : ` `}
    
`;
const PositionContainer$1 = styled.div`
    ${PositionContainerBase}
`;

const HeaderBase = styled.css`
    width: 100%;
    padding: ${props => props.theme.containers.padding};
    box-sizing: border-box;
`;
const Header$6 = styled.header`
    ${HeaderBase}
`;

const ContentBase = styled.css`
    width: 100%;
    padding: ${props => props.theme.containers.padding};
    box-sizing: border-box;
`;
const Content$2 = styled.div`
    ${ContentBase}
`;

const ColumnContainerBase = styled.css`
    display:flex;
    width: 100%;
    background: ${props => props.theme.containers.background};
    flex-direction: column;
    flex: ${props => props.size || 1};
    justify-content: center;
    ${props => props.image ? `
            height: 100%;
            background-image: url(${props.image});
            background-size: ${props.imageSize || "cover"};
            background-repeat: no-repeat; 
            background-position: ${props.imagePos || "center center"} ;
        ` : ` `}
    
    @media(max-width:500px){
        flex-direction: column;    
        ${props => props.mobile === false ? `
                display:none;
            ` : ``}
    }
`;
const ColumnContainer$1 = styled.div`
    ${ColumnContainerBase}
`;

const GridContainerBase = styled.css`
    display: flex;
    width: 100%;
    position: relative;
    padding: 5.5rem 0;
    ${props => props.image ? `
            
            background-image: url(${props.image});
            background-size: ${props.imageSize || 'cover'};
            background-repeat: no-repeat; 
            background-position:  ${props.imagePos || 'cover'};
        ` : ` `}

    @media(max-width:500px){
        flex-direction: column;
    }
    `;
const GridContainer$1 = styled.div`
    ${GridContainerBase}
`;

const Pod = Pod$1;
const PositionContainer = PositionContainer$1;
const Header$5 = Header$6;
const Content$1 = Content$2;
const ColumnContainer = ColumnContainer$1;
const GridContainer = GridContainer$1;

let Form$1 = class Form extends React$1.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    console.log('item form', props);
  }
  submit(e) {
    const {
      form
    } = this.refs;
    const {
      onSubmit
    } = this.props;
    e.preventDefault();
    const tForm = [...form].filter(item => item.name.length > 0 && !item.validity.valid);
    if (tForm.length === 0 && typeof onSubmit === 'function') {
      const formData = [...form].filter(item => item.name.length > 0).reduce((total, current) => {
        total[current.name] = current.value;
        return total;
      }, {});
      console.log(formData);
      onSubmit(formData);
    } else {
      alert('@Devs. no no no no. Pass edit function pls');
    }
  }
  render() {
    const {
      children,
      buttonText = 'Submit'
    } = this.props;
    return /*#__PURE__*/React$1.createElement("form", {
      ref: "form",
      onSubmit: this.submit
    }, children, /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(Button, {
      product: "positive",
      type: "submit-modal"
    }, buttonText)));
  }
};

const Text$2 = styled.label`
    font-weight: bold;
    margin-bottom: 0.75rem;
    color: ${theme.mainColors.paintItBlack};
    text-align: left;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Dropdown = styled.select`
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    display: block;
    width: 100%;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    padding: 0.875rem 0.6rem;

    &:focus {
        outline: none;
    }

    option {
        background: ${props => theme.text.input.background};
        padding: 0.875rem 0.6rem;
        font-family: MuseoSans, sans-serif;
        color: ${props => theme.generalColors.lightBlueGrey};
    }
`;
const StyledSelect = styled.div`
    margin: 0;
    min-width: 10rem;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background: ${props => theme.text.input.background};
    border-radius: 0.45rem;
    box-shadow: none;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        right: 10px;
        top: 37%;
        z-index: 100;
        box-sizing: border-box;
        height: 0.5rem;
        width: 0.5rem;
        border-style: solid;
        border-color: #787e89;
        border-width: 0px 2px 2px 0px;
        transform: rotate(45deg);
        transition: border-width 150ms ease-in-out;
        pointer-events: none;

    }
    @supports (-moz-appearance: none) {
        select {
            -moz-appearance: none;
            text-indent: 0.01px;
            text-overflow: '';
        }
    }
`;
const Label$2 = ({
  children
}) => children ? /*#__PURE__*/React$1.createElement(Text$2, null, children) : null;
const SelectInput = ({
  value,
  name,
  children,
  label,
  onChange = () => {}
}) => /*#__PURE__*/React$1.createElement(Wrapper, null, /*#__PURE__*/React$1.createElement(Label$2, {
  htmlFor: name
}, label), /*#__PURE__*/React$1.createElement(StyledSelect, null, /*#__PURE__*/React$1.createElement(Dropdown, {
  value: value,
  name: name,
  onChange: onChange
}, children)));

const labelBase = styled.css`
    //margin-bottom:5px;
    //font-size: 0.9rem;
    color: ${p => theme.main.color};
`;
const Label$1 = styled.label`
    ${labelBase}
    margin-bottom: ${props => props.margin || 0};
    display: ${({
  block
}) => block ? 'block' : 'inline-block'}
`;

const Radio$2 = styled.div`
    flex-direction: row;
    display: ${props => props.inline ? 'inline-flex' : 'flex'};
    margin-right: ${props => props.inline ? '0.8rem' : 0};
    margin-bottom: 0.8rem;
    align-items: center;
    font-family: MuseoSansReg, sans-serif;
`;
const PaddedLabel$2 = styled(Label$1)`
    padding: 0;
    line-height: 1.5rem;
    display: inline-flex;
    align-items: center;
    opacity: ${({
  disabled
}) => disabled ? '0.4' : '1'};
`;
const RadioInput = styled.input`
    position: absolute;
    -webkit-appearance: none;
    padding: 0;
    border-radius: 10rem;
    display: inline-flex;
    position: relative;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    margin: 0;
    margin-right: 5px;
    background: ${props => theme.text.input.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    &:checked {
        background-color: #ffffff;
        color: #ffffff;
        box-shadow: inset 0 0 0 0.4rem #e83948;
    }
`;
const RadioComponent = ({
  name,
  label,
  required,
  checked,
  inline = false,
  disabled = false,
  value,
  margin = 0,
  className = '',
  defaultChecked = false,
  id = false,
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Radio$2, {
    inline: inline,
    className: className
  }, /*#__PURE__*/React$1.createElement(PaddedLabel$2, {
    margin: true,
    htmlFor: id,
    disabled: disabled
  }, /*#__PURE__*/React$1.createElement(RadioInput, _extends$1({
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

const Checkbox$1 = styled.div`
    flex-direction: row;
    display: ${props => props.inline ? 'inline-flex' : 'flex'};
    margin-right: ${props => props.inline ? '0.8rem' : 0};
    margin-bottom: 0.8rem;
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
`;
const PaddedLabel$1 = styled(Label$1)`
    padding: 0.25rem 0 0.25rem 2.25rem;
    line-height: 1.5rem;
    position: relative;
    opacity: ${({
  disabled
}) => disabled ? '0.4' : '1'};
`;
const CheckboxInput = styled.input`
    -webkit-appearance: none;
    padding: 0;
    border-radius: 3px;
    display: inline-flex;
    position: absolute;
    left: 0;
    top: 0;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    margin-right: 5px;
    background: ${props => theme.text.input.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        box-shadow: none;
    }

    &:checked {
        background-color: #e83948;
        color: #ffffff;
    }

    &:checked:after {
        content: '\\2714';
        font-family: 'MuseoSansReg', sans-serif;
        color: #ffffff;
        font-size: 1.1rem;
    }
`;
const CheckboxComponent = ({
  name,
  id,
  label = null,
  required,
  checked,
  value,
  inline = false,
  disabled = false,
  className = null,
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Checkbox$1, {
    inline: inline,
    className: className
  }, /*#__PURE__*/React$1.createElement(PaddedLabel$1, {
    htmlFor: id,
    disabled: disabled
  }, /*#__PURE__*/React$1.createElement(CheckboxInput, _extends$1({
    type: "checkbox",
    name: name,
    id: id,
    required: required,
    value: value,
    checked: checked,
    disabled: disabled
  }, rest)), label));
};

const FieldBase = styled.css`
    display: none;

    input {
        border: 1px solid #ccc;
        border-radius: ${props => props.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.5rem;
    }
`;
const Field = styled.div`
    ${FieldBase}
`;
let FieldComponent$1 = class FieldComponent extends React$1.PureComponent {
  constructor(props) {
    super(props);
    const {
      value
    } = props;
    this.state = {
      value
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const {
      onChange
    } = this.props;
    if (typeof onChange === 'function' && onChange !== undefined) {
      onChange(e);
    }
  }
  render() {
    const {
      name,
      label,
      required,
      pattern = undefined,
      minlength = 3,
      maxlength = 999,
      placeholder
    } = this.props;
    const {
      value
    } = this.state;
    return /*#__PURE__*/React$1.createElement(Field, null, /*#__PURE__*/React$1.createElement(Label$1, {
      htmlFor: name
    }, label), /*#__PURE__*/React$1.createElement("input", {
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
};

const LabelWrap = styled.div`
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    padding-bottom: 0.5rem;
`;
const StyledRequired = styled.span`
    display: inline-block;
    margin-left: 0.3rem;
`;
const Wrap$o = styled.div`
    display: flex;
    align-items: center;
    background: ${({
  inputBackground
}) => inputBackground};
    color: ${({
  inputColour
}) => inputColour};
    border-radius: 0.4rem;
    padding: 0 0.4rem;
    opacity: ${({
  disabled = false
}) => disabled ? '0.4' : '1'};

    &:focus-within {
        background: ${props => curriedLighten$1(0.1, theme.colors.mrBlueSky)};
        color: ${props => theme.colors.paintItBlack};
    }

    
`;
const Input$1 = styled.input`
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    font-size: 1rem;
    padding: 0.8rem 0.4rem;
    color: inherit;
    width: 100%;

    &:focus {
        outline: none;
    }
`;
const Label = ({
  children,
  required = false
}) => {
  let Required = () => null;
  if (required) {
    Required = () => /*#__PURE__*/React$1.createElement(StyledRequired, null, "*");
  }
  return /*#__PURE__*/React$1.createElement(LabelWrap, null, children, /*#__PURE__*/React$1.createElement(Required, null));
};
const CaptionWrap = styled.p`
    color: ${({
  inputColour
}) => inputColour};
    font-family: MuseoSansReg, sans-serif;
    font-size: 0.75rem;
    margin: 0.6rem 0;
`;
const Caption = ({
  children,
  inputColour
}) => {
  if (children === null) {
    return null;
  }
  return /*#__PURE__*/React$1.createElement(CaptionWrap, {
    inputColour: inputColour
  }, children);
};
const getColours$2 = status => {
  const colourObject = {
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
const FieldComponent = ({
  id,
  name,
  prepend = null,
  append = null,
  label = null,
  type = 'text',
  caption = null,
  required = false,
  placeholder = false,
  defaultValue = null,
  status = null,
  ...rest
}) => {
  let Prepend = () => null;
  if (prepend !== null) {
    Prepend = () => /*#__PURE__*/React$1.createElement(React$1.Fragment, null, prepend);
  }
  let Append = () => null;
  if (append !== null) {
    Append = () => /*#__PURE__*/React$1.createElement(React$1.Fragment, null, append);
  }
  const colours = getColours$2(status);
  return /*#__PURE__*/React$1.createElement(Label$1, {
    htmlFor: name
  }, label !== null ? /*#__PURE__*/React$1.createElement(Label, {
    required: required
  }, label) : null, /*#__PURE__*/React$1.createElement(Wrap$o, _extends$1({}, rest, colours), /*#__PURE__*/React$1.createElement(Prepend, null), /*#__PURE__*/React$1.createElement(Input$1, _extends$1({
    type: type,
    name: name,
    required: required,
    placeholder: placeholder,
    defaultValue: defaultValue,
    id: id
  }, colours, rest)), /*#__PURE__*/React$1.createElement(Append, null)), /*#__PURE__*/React$1.createElement(Caption, colours, caption));
};

const Wrap$n = styled.div`
    display: flex;
`;
const ChipWrap$1 = styled.div`
    display: flex;
`;
const InputWrap$2 = styled.div`
    display: flex;
    padding: 0.75rem 0;
`;
const Form = styled.form`
    display: block;
    width: 100%;
`;
const FieldWrap$2 = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
    max-width: 26rem;

    input {
        //border: 1px solid #ccc;
        border-radius: ${props => props.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.875rem 0.6rem;
        width: 100%;
    }
`;
let ChipInput$1 = class ChipInput extends React$1.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      chips: props.chips
    };
    this.addChip = this.addChip.bind(this);
    this.chipOnClick = this.chipOnClick.bind(this);
    this.chipOnRemove = this.chipOnRemove.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  chipOnClick() {
    console.log(this);
    return null;
  }
  chipOnRemove(value) {
    const {
      chips
    } = this.state;
    const chipList = chips.filter(chip => chip.value !== value);
    this.setState({
      chips: chipList
    });
  }
  renderChip(chip, key) {
    const {
      name,
      id
    } = this.props;
    const {
      onClick = null,
      onRemove = null,
      label,
      value,
      product = 'default'
    } = chip;
    let onClickFunction = this.chipOnClick;
    let onRemoveFunction = () => this.chipOnRemove(value);
    if (onClick !== null) {
      onClickFunction = onClick;
    }
    if (onRemove !== null) {
      onRemoveFunction = () => onRemove(value);
    }
    return /*#__PURE__*/React$1.createElement(Chip$1, {
      white: true,
      name: name,
      key: key,
      id: `chip-${id}-${value}`,
      onClick: onClickFunction,
      onRemove: onRemoveFunction,
      checked: true,
      value: value,
      label: label,
      product: product
    });
  }
  addChip(evnt) {
    evnt.preventDefault();
    if (evnt.target && evnt.target.new_chip) {
      const {
        chips: chipList
      } = this.state;
      let newChip = {
        label: evnt.target.new_chip.value,
        value: evnt.target.new_chip.value.toLowerCase().replace(/ _:;,\./g, '-')
      };
      if (chipList.length >= 1) {
        newChip = {
          ...chipList[0],
          label: evnt.target.new_chip.value,
          value: evnt.target.new_chip.value.toLowerCase().replace(/ _:;,\./g, '-')
        };
      }
      chipList.push(newChip);
      this.setState({
        current: '',
        chips: chipList
      });
    }
  }
  onHandleChange(evnt) {
    this.setState({
      current: evnt.target.value
    });
  }
  render() {
    const {
      name,
      id,
      label,
      inline = false
    } = this.props;
    const {
      chips,
      current
    } = this.state;
    const addChipFunction = this.addChip;
    const chipValues = chips.map(function (chip) {
      return chip.value;
    });
    return /*#__PURE__*/React$1.createElement(Wrap$n, {
      inline: inline,
      id: id
    }, /*#__PURE__*/React$1.createElement(Label$1, {
      htmlFor: name
    }, label, /*#__PURE__*/React$1.createElement(InputWrap$2, null, /*#__PURE__*/React$1.createElement(Form, {
      onSubmit: addChipFunction
    }, /*#__PURE__*/React$1.createElement(FieldWrap$2, null, /*#__PURE__*/React$1.createElement("input", {
      type: "text",
      name: "new_chip",
      value: current,
      onChange: this.onHandleChange
    }))), /*#__PURE__*/React$1.createElement("input", {
      name: `chip-values-${name}`,
      type: "hidden",
      value: chipValues.join(',')
    })), /*#__PURE__*/React$1.createElement(ChipWrap$1, null, chips.map((chip, key) => this.renderChip(chip, key)))));
  }
};

const Wrap$m = styled.div`
    display: flex;
`;
const ChipWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    justify-content: center;
`;
const ChipSelectWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const InputWrap$1 = styled.div`
    display: flex;
    flex-direction: column;
`;
const FieldWrap$1 = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    max-width: 26rem;
    margin: 0 0.325rem 0 0;

    input {
        //border: 1px solid #ccc;
        border-radius: ${props => props.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.875rem 0.6rem;
        width: 100%;
    }
`;
class ChipInput extends React$1.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      selected: props.chips,
      current: ''
    };
    this.addChip = this.addChip.bind(this);
    this.chipOnClick = this.chipOnClick.bind(this);
    this.chipOnRemove = this.chipOnRemove.bind(this);
  }
  chipOnClick() {
    console.log(this);
    return null;
  }
  chipOnRemove(value) {
    const {
      selected
    } = this.state;
    const chipList = selected.filter(chip => chip !== value);
    this.setState({
      selected: chipList
    });
  }
  renderChip(chip, key) {
    const {
      name,
      id
    } = this.props;
    const {
      onClick = null,
      onRemove = null,
      label,
      value,
      product = 'default'
    } = chip;
    let onClickFunction = this.chipOnClick;
    let onRemoveFunction = () => this.chipOnRemove(value);
    if (onClick !== null) {
      onClickFunction = onClick;
    }
    if (onRemove !== null) {
      onRemoveFunction = () => onRemove(value);
    }
    return /*#__PURE__*/React$1.createElement(Chip$1, {
      name: name,
      key: key,
      id: `chip-${id}-${value}`,
      onClick: onClickFunction,
      onRemove: onRemoveFunction,
      checked: true,
      value: value,
      label: label,
      product: product
    });
  }
  addChip(evnt) {
    evnt.preventDefault();
    if (evnt.target && evnt.target.value !== '') {
      const selectbox = evnt.target;
      const {
        selected
      } = this.state;
      const _selected = selected;
      _selected.push(selectbox.value);
      this.setState({
        selected: _selected,
        current: ''
      });
    }
  }
  renderOptions(options) {
    console.log('renderOption,', options, this);
    const {
      current
    } = this.state;
    return /*#__PURE__*/React$1.createElement("div", {
      className: "styled-select"
    }, /*#__PURE__*/React$1.createElement("select", {
      name: "new_chip",
      onChange: this.addChip,
      value: current
    }, /*#__PURE__*/React$1.createElement("option", {
      value: ""
    }, "Select Another Option"), options.map(option => /*#__PURE__*/React$1.createElement("option", {
      value: option.value
    }, option.label))));
  }
  render() {
    const {
      name,
      id,
      label,
      inline = false
    } = this.props;
    console.log(this);
    const {
      selected,
      options
    } = this.state;
    const chips = selected.map(chip => {
      const matches = options.filter(option => chip === option.value);
      if (matches.length > 0) {
        return matches[0];
      }
      return null;
    });
    const filteredOptions = options.filter(option => {
      if (selected.indexOf(option.value) === -1) {
        return true;
      }
      return false;
    });
    return /*#__PURE__*/React$1.createElement(Wrap$m, {
      inline: inline,
      id: id
    }, /*#__PURE__*/React$1.createElement(ChipSelectWrap, null, /*#__PURE__*/React$1.createElement(InputWrap$1, null, /*#__PURE__*/React$1.createElement(Label$1, {
      htmlFor: "new_chip"
    }, label), /*#__PURE__*/React$1.createElement(FieldWrap$1, null, this.renderOptions(filteredOptions))), /*#__PURE__*/React$1.createElement("input", {
      name: `chip-values-${name}`,
      type: "hidden",
      value: selected.join(',')
    }), /*#__PURE__*/React$1.createElement(ChipWrap, null, chips.map((chip, key) => chip !== null ? this.renderChip(chip, key) : ''))));
  }
}

const pad = (n, width, z) => {
  z = z || '0';
  n += '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
const Wrap$l = styled.div`
    display: flex;
`;
const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const FieldWrap = styled.div`
    display: flex;
    position: relative;
    max-width: 26rem;
    margin: 0 0.325rem 0 0;
    align-items: center;
    span {
        color: #000;
        padding: 0.25em;
    }
    input {
        //border: 1px solid #ccc;
        border-radius: ${props => props.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.875rem 0.6rem;
        width: 100%;
    }

    & > .styled-select {
        display: flex;
        color: #000;
        align-items: center;
        margin: 0;
        width: 6em;
    }
`;
class TimeSelectInput extends React$1.Component {
  constructor(props) {
    super(props);
    this.renderMinutes = this.renderMinutes.bind(this);
    this.renderHours = this.renderHours.bind(this);
    this.state = {
      hours: '00',
      minutes: '00',
      date: ''
    };
  }
  componentDidMount() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let dd = tomorrow.getDate();
    let mm = tomorrow.getMonth() + 1; // January is 0!
    const yyyy = tomorrow.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    tomorrow = `${yyyy}-${mm}-${dd}`;
    document.getElementById('datepicker').setAttribute('min', tomorrow);
  }
  componentWillMount() {
    const {
      value
    } = this.props;
    if (value !== 'Never') {
      const time = value.substr(value.indexOf(' ') + 1).split(':');
      this.setState({
        hours: time[0],
        minutes: time[1],
        date: value.substr(0, value.indexOf(' '))
      });
    }
  }
  renderMinutes() {
    const {
      name
    } = this.props;
    const {
      minutes
    } = this.state;
    return /*#__PURE__*/React$1.createElement("select", {
      name: `${name}-minutes`,
      value: minutes,
      onChange: e => {
        this.changeMinutes(e);
      }
    }, [...Array(60).keys()].map(x => /*#__PURE__*/React$1.createElement("option", {
      value: pad(x, 2)
    }, pad(x, 2))));
  }
  renderHours() {
    const {
      name
    } = this.props;
    const {
      hours
    } = this.state;
    return /*#__PURE__*/React$1.createElement("select", {
      name: `${name}-hours`,
      value: hours,
      onChange: e => {
        this.changeHours(e);
      }
    }, [...Array(24).keys()].map(x => /*#__PURE__*/React$1.createElement("option", {
      value: pad(x, 2)
    }, pad(x, 2))));
  }
  changeHours(e) {
    const {
      minutes,
      date
    } = this.state;
    this.setState({
      hours: e.target.value,
      minutes,
      date
    });
  }
  changeMinutes(e) {
    const {
      hours,
      date
    } = this.state;
    this.setState({
      hours,
      minutes: e.target.value,
      date
    });
  }
  changeDate(e) {
    const {
      hours,
      minutes
    } = this.state;
    this.setState({
      hours,
      minutes,
      date: e.target.value
    });
  }
  render() {
    const {
      name,
      id,
      label,
      inline = false
    } = this.props;
    const {
      date
    } = this.state;
    return /*#__PURE__*/React$1.createElement(Wrap$l, {
      inline: inline,
      id: id
    }, /*#__PURE__*/React$1.createElement(InputWrap, null, /*#__PURE__*/React$1.createElement(Label$1, null, label), /*#__PURE__*/React$1.createElement(FieldWrap, null, /*#__PURE__*/React$1.createElement("input", {
      id: "datepicker",
      name: name,
      type: "date",
      value: date,
      onChange: e => {
        this.changeDate(e);
      }
    }), /*#__PURE__*/React$1.createElement("span", null, "at"), /*#__PURE__*/React$1.createElement("div", {
      id: "hourpicker",
      className: "styled-select"
    }, this.renderHours()), /*#__PURE__*/React$1.createElement("span", null, ":"), /*#__PURE__*/React$1.createElement("div", {
      id: "minutepicker",
      className: "styled-select"
    }, this.renderMinutes()))));
  }
}

const THUNDERSTRUCK = 'thunderstruck';
const INVIGORATED = 'invigorated';
const DAZZLED = 'dazzled';
const ANTICIPATORY = 'anticipatory';
const CONTEMPLATIVE = 'contemplative';
const SOOTHING = 'soothing';
const SLEEPY = 'sleepy';
const SERENE = 'serene';
const RELAXED = 'relaxed';
const SATISFIED = 'satisfied';
const MERRY = 'merry';
const DELIGHTED = 'delighted';
const moods = [THUNDERSTRUCK, INVIGORATED, DAZZLED, ANTICIPATORY, CONTEMPLATIVE, SOOTHING, SLEEPY, SERENE, RELAXED, SATISFIED, MERRY, DELIGHTED];
const Wrap$k = styled.div`
    font-family: MuseoSansReg, sans-serif;
    user-select: none;

    g {
        cursor: ${({
  readonly
}) => readonly ? 'default' : 'pointer'};
    }

    path {
        transition: opacity 0.2s linear;
    }

    text {
        
        font-family: MuseoSansReg, sans-serif;
    }

`;
const Radio$1 = styled.input`
    display:none;
`;
const handleClick = (className, setSelected, parentOnClick) => {
  const mood = moods.find(obj => className.includes(obj));
  parentOnClick(mood);
  setSelected(mood);
};
const MoodPath = ({
  d,
  className,
  fill,
  transform,
  opacity = 1,
  selected,
  adjacent = [],
  setSelected,
  parentOnClick
}) => {
  const pathProps = {
    onClick: () => handleClick(className, setSelected, parentOnClick),
    d: d,
    className: className,
    fill: fill,
    transform: transform,
    opacity: opacity
  };
  if (className.includes('selected')) {
    if (className.includes(selected)) {
      return /*#__PURE__*/React$1.createElement("path", pathProps);
    }
    return /*#__PURE__*/React$1.createElement("path", _extends$1({}, pathProps, {
      opacity: 0
    }));
    //return null;
  }

  if (className.includes('adjacent')) {
    if (adjacent.includes(selected)) {
      return /*#__PURE__*/React$1.createElement("path", pathProps);
    }
    return /*#__PURE__*/React$1.createElement("path", _extends$1({}, pathProps, {
      opacity: 0
    }));
    //return null;
  }

  return /*#__PURE__*/React$1.createElement("path", pathProps);
};
const MoodSelector = ({
  readonly = false,
  defaultValue = null,
  onMoodClick = () => {}
}) => {
  const [selected, setSelected] = React$1.useState(defaultValue);
  const passToAll = {
    setSelected: setSelected,
    selected: selected,
    parentOnClick: onMoodClick
  };
  if (readonly === true) {
    passToAll.parentOnClick = () => {};
    passToAll.setSelected = () => {};
  }
  return /*#__PURE__*/React$1.createElement(Wrap$k, {
    readonly: readonly
  }, /*#__PURE__*/React$1.createElement("svg", {
    width: "342px",
    height: "241px",
    viewBox: "0 0 342 241",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React$1.createElement("title", null, "mood-selector"), /*#__PURE__*/React$1.createElement("g", {
    className: "mood-selector",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M143.868238,16.0795885 C162.206084,16.0795885 179.391072,21.0155573 194.167073,29.6313653 L179.077662,55.5659719 C168.734407,49.53482 156.704829,46.0795885 143.868238,46.0795885 L143.868238,16.0795885 L143.868238,16.0795885 Z",
    className: "thunderstruck-adjacent",
    fill: "#E83948",
    transform: "translate(169.017656, 35.822780) rotate(330.000000) translate(-169.017656, -35.822780) ",
    adjacent: [INVIGORATED, DAZZLED]
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M142.449798,10.7858995 C161.704354,10.7858995 179.748433,15.9685687 195.263136,25.0150088 L177.659223,55.2722829 C167.315968,49.2411309 155.286389,45.7858995 142.449798,45.7858995 L142.449798,10.7858995 L142.449798,10.7858995 Z",
    className: "thunderstruck-selected",
    fill: "#E83948",
    transform: "translate(168.856467, 33.029091) rotate(330.000000) translate(-168.856467, -33.029091) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M143.868238,16.0795885 C162.206084,16.0795885 179.391072,21.0155573 194.167073,29.6313653 L179.077662,55.5659719 C168.734407,49.53482 156.704829,46.0795885 143.868238,46.0795885 L143.868238,16.0795885 L143.868238,16.0795885 Z",
    className: "thunderstruck-inactive",
    fill: "#E83948",
    opacity: "0.302818",
    transform: "translate(169.017656, 35.822780) rotate(330.000000) translate(-169.017656, -35.822780) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [THUNDERSTRUCK, ANTICIPATORY],
    d: "M103.82278,36.9823443 C122.160626,36.9823443 139.345614,41.918313 154.121615,50.5341211 L139.032204,76.4687277 C128.688949,70.4375758 116.659371,66.9823443 103.82278,66.9823443 L103.82278,36.9823443 L103.82278,36.9823443 Z",
    className: "dazzled-adjacent",
    fill: "#C5037E",
    transform: "translate(128.972198, 56.725536) rotate(300.000000) translate(-128.972198, -56.725536) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M101.029091,32.1435329 C120.283647,32.1435329 138.327726,37.3262022 153.842428,46.3726422 L136.238515,76.6299163 C125.89526,70.5987644 113.865682,67.1435329 101.029091,67.1435329 L101.029091,32.1435329 L101.029091,32.1435329 Z",
    className: "dazzled-selected",
    fill: "#C5037E",
    transform: "translate(127.435760, 54.386725) rotate(300.000000) translate(-127.435760, -54.386725) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M103.82278,36.9823443 C122.160626,36.9823443 139.345614,41.918313 154.121615,50.5341211 L139.032204,76.4687277 C128.688949,70.4375758 116.659371,66.9823443 103.82278,66.9823443 L103.82278,36.9823443 L103.82278,36.9823443 Z",
    className: "dazzled-inactive",
    fill: "#C5037E",
    opacity: "0.302818",
    transform: "translate(128.972198, 56.725536) rotate(300.000000) translate(-128.972198, -56.725536) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [CONTEMPLATIVE, DAZZLED],
    d: "M79.5937742,75.1073908 C97.9316196,75.1073908 115.116608,80.0433595 129.892609,88.6591676 L114.803198,114.593774 C104.459943,108.562622 92.4303651,105.107391 79.5937742,105.107391 L79.5937742,75.1073908 L79.5937742,75.1073908 Z",
    className: "anticipatory-adjacent",
    fill: "#6D398B",
    transform: "translate(104.743192, 94.850583) rotate(270.000000) translate(-104.743192, -94.850583) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M75.8365231,71.3501397 C95.091079,71.3501397 113.135158,76.532809 128.64986,85.579249 L111.045947,115.836523 C100.702692,109.805371 88.673114,106.35014 75.8365231,106.35014 L75.8365231,71.3501397 L75.8365231,71.3501397 Z",
    className: "anticipatory-selected",
    fill: "#6D398B",
    transform: "translate(102.243192, 93.593331) rotate(270.000000) translate(-102.243192, -93.593331) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M79.5937742,75.1073908 C97.9316196,75.1073908 115.116608,80.0433595 129.892609,88.6591676 L114.803198,114.593774 C104.459943,108.562622 92.4303651,105.107391 79.5937742,105.107391 L79.5937742,75.1073908 L79.5937742,75.1073908 Z",
    className: "anticipatory-inactive",
    fill: "#6D398B",
    opacity: "0.302818",
    transform: "translate(104.743192, 94.850583) rotate(270.000000) translate(-104.743192, -94.850583) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [ANTICIPATORY, SOOTHING],
    d: "M77.6733627,120.239153 C96.0112082,120.239153 113.196196,125.175121 127.972198,133.790929 L112.882787,159.725536 C102.539532,153.694384 90.5099536,150.239153 77.6733627,150.239153 L77.6733627,120.239153 L77.6733627,120.239153 Z",
    className: "contemplative-adjacent",
    fill: "#454E98",
    transform: "translate(102.822780, 139.982344) rotate(240.000000) translate(-102.822780, -139.982344) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M73.6231751,117.900776 C92.8773159,117.900776 110.921032,123.083222 126.435509,132.1293 L108.832599,162.387159 C98.4893444,156.356007 86.459766,152.900776 73.6231751,152.900776 L73.6231751,117.900776 L73.6231751,117.900776 Z",
    className: "contemplative-selected",
    fill: "#454E98",
    transform: "translate(100.029342, 140.143967) rotate(240.000000) translate(-100.029342, -140.143967) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M77.6733627,120.239153 C96.0112082,120.239153 113.196196,125.175121 127.972198,133.790929 L112.882787,159.725536 C102.539532,153.694384 90.5099536,150.239153 77.6733627,150.239153 L77.6733627,120.239153 L77.6733627,120.239153 Z",
    className: "contemplative-inactive",
    fill: "#454E98",
    opacity: "0.302818",
    transform: "translate(102.822780, 139.982344) rotate(240.000000) translate(-102.822780, -139.982344) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [CONTEMPLATIVE, SLEEPY],
    d: "M98.5761185,160.284611 C116.913964,160.284611 134.098952,165.220579 148.874954,173.836387 L133.785543,199.770994 C123.442288,193.739842 111.412709,190.284611 98.5761185,190.284611 L98.5761185,160.284611 L98.5761185,160.284611 Z",
    className: "soothing-adjacent",
    fill: "#2B70B1",
    transform: "translate(123.725536, 180.027802) rotate(210.000000) translate(-123.725536, -180.027802) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M94.980056,159.321049 C114.234612,159.321049 132.27869,164.503718 147.793393,173.550158 L130.18948,203.807432 C119.846225,197.77628 107.816647,194.321049 94.980056,194.321049 L94.980056,159.321049 L94.980056,159.321049 Z",
    className: "soothing-selected",
    fill: "#2B70B1",
    transform: "translate(121.386725, 181.564240) rotate(210.000000) translate(-121.386725, -181.564240) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M98.5761185,160.284611 C116.913964,160.284611 134.098952,165.220579 148.874954,173.836387 L133.785543,199.770994 C123.442288,193.739842 111.412709,190.284611 98.5761185,190.284611 L98.5761185,160.284611 L98.5761185,160.284611 Z",
    className: "soothing-inactive",
    fill: "#2B70B1",
    opacity: "0.302818",
    transform: "translate(123.725536, 180.027802) rotate(210.000000) translate(-123.725536, -180.027802) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [SERENE, SOOTHING],
    d: "M136.701165,184.513617 C155.03901,184.513617 172.223999,189.449585 187,198.065393 L171.910589,224 C161.567334,217.968848 149.537756,214.513617 136.701165,214.513617 L136.701165,184.513617 L136.701165,184.513617 Z",
    className: "sleepy-adjacent",
    fill: "#30A4C5",
    transform: "translate(161.850583, 204.256808) rotate(180.000000) translate(-161.850583, -204.256808) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M134.187666,184.514201 C153.441807,184.514201 171.485523,189.696647 187,198.742725 L169.396088,229 C159.053058,222.969209 147.023842,219.514201 134.187666,219.514201 L134.187666,184.514201 L134.187666,184.514201 Z",
    className: "sleepy-selected",
    fill: "#30A4C5",
    transform: "translate(160.593833, 206.757101) rotate(180.000000) translate(-160.593833, -206.757101) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M136.701165,184.513617 C155.03901,184.513617 172.223999,189.449585 187,198.065393 L171.910589,224 C161.567334,217.968848 149.537756,214.513617 136.701165,214.513617 L136.701165,184.513617 L136.701165,184.513617 Z",
    className: "sleepy-inactive",
    fill: "#30A4C5",
    opacity: "0.302818",
    transform: "translate(161.850583, 204.256808) rotate(180.000000) translate(-161.850583, -204.256808) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [RELAXED, SLEEPY],
    d: "M181.832927,186.434028 C200.170772,186.434028 217.35576,191.369997 232.131762,199.985805 L217.042351,225.920411 C206.699096,219.88926 194.669518,216.434028 181.832927,216.434028 L181.832927,186.434028 L181.832927,186.434028 Z",
    className: "serene-adjacent",
    fill: "#2C8D5A",
    transform: "translate(206.982344, 206.177220) rotate(150.000000) translate(-206.982344, -206.177220) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M180.736864,186.727717 C199.99142,186.727717 218.035499,191.910386 233.550202,200.956826 L215.946288,231.214101 C205.603034,225.182949 193.573455,221.727717 180.736864,221.727717 L180.736864,186.727717 L180.736864,186.727717 Z",
    className: "serene-selected",
    fill: "#2C8D5A",
    transform: "translate(207.143533, 208.970909) rotate(150.000000) translate(-207.143533, -208.970909) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M181.832927,186.434028 C200.170772,186.434028 217.35576,191.369997 232.131762,199.985805 L217.042351,225.920411 C206.699096,219.88926 194.669518,216.434028 181.832927,216.434028 L181.832927,186.434028 L181.832927,186.434028 Z",
    className: "serene-inactive",
    fill: "#2C8D5A",
    opacity: "0.302818",
    transform: "translate(206.982344, 206.177220) rotate(150.000000) translate(-206.982344, -206.177220) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [SERENE, SATISFIED],
    d: "M221.878385,165.531272 C240.21623,165.531272 257.401218,170.467241 272.17722,179.083049 L257.087809,205.017656 C246.744554,198.986504 234.714976,195.531272 221.878385,195.531272 L221.878385,165.531272 L221.878385,165.531272 Z",
    className: "relaxed-adjacent",
    fill: "#7CC530",
    transform: "translate(247.027802, 185.274464) rotate(120.000000) translate(-247.027802, -185.274464) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M222.157572,165.370084 C241.412127,165.370084 259.456206,170.552753 274.970909,179.599193 L257.366996,209.856467 C247.023741,203.825315 234.994163,200.370084 222.157572,200.370084 L222.157572,165.370084 L222.157572,165.370084 Z",
    className: "relaxed-selected",
    fill: "#7CC530",
    transform: "translate(248.564240, 187.613275) rotate(120.000000) translate(-248.564240, -187.613275) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M221.878385,165.531272 C240.21623,165.531272 257.401218,170.467241 272.17722,179.083049 L257.087809,205.017656 C246.744554,198.986504 234.714976,195.531272 221.878385,195.531272 L221.878385,165.531272 L221.878385,165.531272 Z",
    className: "relaxed-inactive",
    fill: "#7CC530",
    opacity: "0.302818",
    transform: "translate(247.027802, 185.274464) rotate(120.000000) translate(-247.027802, -185.274464) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [RELAXED, MERRY],
    d: "M246.107391,127.406226 C264.445236,127.406226 281.630224,132.342195 296.406226,140.958003 L281.316815,166.892609 C270.97356,160.861457 258.943982,157.406226 246.107391,157.406226 L246.107391,127.406226 L246.107391,127.406226 Z",
    className: "satisfied-adjacent",
    fill: "#FFCE01",
    transform: "translate(271.256808, 147.149417) rotate(90.000000) translate(-271.256808, -147.149417) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M247.35014,126.163477 C266.604696,126.163477 284.648774,131.346146 300.163477,140.392586 L282.559564,170.64986 C272.216309,164.618708 260.186731,161.163477 247.35014,161.163477 L247.35014,126.163477 L247.35014,126.163477 Z",
    className: "satisfied-selected",
    fill: "#FFCE01",
    transform: "translate(273.756808, 148.406669) rotate(90.000000) translate(-273.756808, -148.406669) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M246.107391,127.406226 C264.445236,127.406226 281.630224,132.342195 296.406226,140.958003 L281.316815,166.892609 C270.97356,160.861457 258.943982,157.406226 246.107391,157.406226 L246.107391,127.406226 L246.107391,127.406226 Z",
    className: "satisfied-inactive",
    fill: "#FFCE01",
    opacity: "0.302818",
    transform: "translate(271.256808, 147.149417) rotate(90.000000) translate(-271.256808, -147.149417) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [DELIGHTED, SATISFIED],
    d: "M248.027802,82.274464 C266.365648,82.274464 283.550636,87.2104327 298.326637,95.8262407 L283.237226,121.760847 C272.893972,115.729695 260.864393,112.274464 248.027802,112.274464 L248.027802,82.274464 L248.027802,82.274464 Z",
    className: "merry-adjacent",
    fill: "#F9BD45",
    transform: "translate(273.177220, 102.017656) rotate(60.000000) translate(-273.177220, -102.017656) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M249.564744,79.6129871 C268.818885,79.6129871 286.862601,84.7954329 302.377078,93.8415113 L284.773166,124.098786 C274.430136,118.067995 262.40092,114.612987 249.564744,114.612987 L249.564744,79.6129871 L249.564744,79.6129871 Z",
    className: "merry-selected",
    fill: "#F9BD45",
    transform: "translate(275.970911, 101.855886) rotate(60.000000) translate(-275.970911, -101.855886) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M248.027802,82.274464 C266.365648,82.274464 283.550636,87.2104327 298.326637,95.8262407 L283.237226,121.760847 C272.893972,115.729695 260.864393,112.274464 248.027802,112.274464 L248.027802,82.274464 L248.027802,82.274464 Z",
    className: "merry-inactive",
    fill: "#F9BD45",
    opacity: "0.302818",
    transform: "translate(273.177220, 102.017656) rotate(60.000000) translate(-273.177220, -102.017656) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [MERRY, INVIGORATED],
    d: "M227.125046,42.229006 C245.462892,42.229006 262.64788,47.1649747 277.423881,55.7807828 L262.334471,81.7153894 C251.991216,75.6842375 239.961637,72.229006 227.125046,72.229006 L227.125046,42.229006 L227.125046,42.229006 Z",
    className: "delighted-adjacent",
    fill: "#F7823B",
    transform: "translate(252.274464, 61.972198) rotate(30.000000) translate(-252.274464, -61.972198) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M228.206607,38.1925681 C247.461163,38.1925681 265.505241,43.3752373 281.019944,52.4216774 L263.416031,82.6789515 C253.072776,76.6477995 241.043198,73.1925681 228.206607,73.1925681 L228.206607,38.1925681 L228.206607,38.1925681 Z",
    className: "delighted-selected",
    fill: "#F7823B",
    transform: "translate(254.613275, 60.435760) rotate(30.000000) translate(-254.613275, -60.435760) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M227.125046,42.229006 C245.462892,42.229006 262.64788,47.1649747 277.423881,55.7807828 L262.334471,81.7153894 C251.991216,75.6842375 239.961637,72.229006 227.125046,72.229006 L227.125046,42.229006 L227.125046,42.229006 Z",
    className: "delighted-inactive",
    fill: "#F7823B",
    opacity: "0.302818",
    transform: "translate(252.274464, 61.972198) rotate(30.000000) translate(-252.274464, -61.972198) "
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    adjacent: [DELIGHTED, THUNDERSTRUCK],
    d: "M189,18 C207.337845,18 224.522834,22.9359687 239.298835,31.5517767 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,18 L189,18 Z",
    className: "invigorated-adjacent",
    fill: "#EC611D"
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M189,13 C208.254556,13 226.298634,18.1826693 241.813337,27.2291093 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,13 L189,13 Z",
    className: "invigorated-selected",
    fill: "#EC611D"
  })), /*#__PURE__*/React$1.createElement(MoodPath, _extends$1({}, passToAll, {
    d: "M189,18 C207.337845,18 224.522834,22.9359687 239.298835,31.5517767 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,18 L189,18 Z",
    className: "invigorated-inactive",
    fill: "#EC611D",
    opacity: "0.302818"
  })), /*#__PURE__*/React$1.createElement("g", {
    className: "labels",
    fontFamily: "MuseoSans-500, Museo Sans",
    fontSize: "12",
    fontWeight: "normal"
  }, /*#__PURE__*/React$1.createElement("text", {
    className: "thunderstruck-label",
    fill: "#E83948"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "88.64",
    y: "11"
  }, "Thunderstruck")), /*#__PURE__*/React$1.createElement("text", {
    className: "dazzled-label",
    fill: "#C5037E"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "57.324",
    y: "42"
  }, "Dazzled")), /*#__PURE__*/React$1.createElement("text", {
    className: "anticipatory-label",
    fill: "#6D398B"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "14.404",
    y: "91"
  }, "Anticipatory")), /*#__PURE__*/React$1.createElement("text", {
    className: "contemplative-label",
    fill: "#454E98"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "0.04",
    y: "148"
  }, "Contemplative")), /*#__PURE__*/React$1.createElement("text", {
    className: "soothing-label",
    fill: "#2B70B1"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "51.6",
    y: "200"
  }, "Soothing")), /*#__PURE__*/React$1.createElement("text", {
    className: "sleepy-label",
    fill: "#30A4C5"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "133.628",
    y: "238"
  }, "Sleepy")), /*#__PURE__*/React$1.createElement("text", {
    className: "serene-label",
    fill: "#2C8D5A"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "214",
    y: "238"
  }, "Serene")), /*#__PURE__*/React$1.createElement("text", {
    className: "relaxed-label",
    fill: "#7CC530"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "270",
    y: "200"
  }, "Relaxed")), /*#__PURE__*/React$1.createElement("text", {
    className: "satisfied-label",
    fill: "#FFCE01"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "295",
    y: "148"
  }, "Satisfied")), /*#__PURE__*/React$1.createElement("text", {
    className: "merry-label",
    fill: "#F9BD45"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "296",
    y: "91"
  }, "Merry")), /*#__PURE__*/React$1.createElement("text", {
    className: "delighted-label",
    fill: "#F7823B"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "270",
    y: "42"
  }, "Delighted")), /*#__PURE__*/React$1.createElement("text", {
    className: "invigorated-label",
    fill: "#EC611D"
  }, /*#__PURE__*/React$1.createElement("tspan", {
    x: "215",
    y: "11"
  }, "Invigorated"))))), moods.map(obj => {
    return /*#__PURE__*/React$1.createElement(Radio$1, {
      checked: selected === obj,
      type: "radio",
      id: "html",
      name: "mood",
      value: obj
    });
  }));
};

const Wrap$j = styled.div`
    display: flex;
    font-family: MuseoSansReg, sans-serif;
    flex-wrap: ${props => props.small ? `nowrap` : `wrap`};
    justify-content: ${props => props.small ? `space-between` : `center`};
    background: ${props => props.backgroundColour};
    color: ${props => props.textColour};
    padding: ${props => props.small ? `1rem` : `1rem`};
    width: 100%;
    border-radius: ${props => props.theme.main.borderRadius};
    box-shadow: 0px 1px 1px ${curriedTransparentize$1(0.8, '#000')};
    transition: all 0.2s linear;
    user-select: none;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 2px 5px ${curriedTransparentize$1(0.8, '#000')};
    }

    &:active {
        background: ${props => props.theme.selectionPanel.active.background};
        color: ${props => props.theme.selectionPanel.active.color};
    }

`;
const Content = styled.div`
    display: flex;
    flex-direction: ${({
  small
}) => small ? `row` : `column`};
    align-items: center;
    align-self: center;

    svg {
        margin-bottom: ${({
  small
}) => small ? `0` : `1rem`};
        margin-right: ${({
  small
}) => small ? `1rem` : `0`};
        font-size: 2rem;
    }
`;
const getColours$1 = (colour, active) => {
  let textColour = theme.selectionPanel.color;
  let backgroundColour = theme.selectionPanel.background;
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
    textColour,
    backgroundColour
  };
};
const SelectionPanel$1 = ({
  children,
  active = false,
  small = false,
  colour = 'simplyRed',
  ...rest
}) => {
  const attributes = {
    ...rest,
    ...getColours$1(colour, active)
  };
  return /*#__PURE__*/React$1.createElement(Wrap$j, _extends$1({
    active: active,
    small: small
  }, attributes), /*#__PURE__*/React$1.createElement(Content, _extends$1({
    small: small
  }, rest), children));
};

const Wrap$i = styled.div`
    font-family: MuseoSansReg, sans-serif;

    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 23px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 19px;
        width: 19px;
        left: 1px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: ${props => props.primaryColour};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px  ${props => props.primaryColour};
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(19px);
        -ms-transform: translateX(19px);
        transform: translateX(19px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;
const PaddedLabel = styled(Label$1)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    cursor: pointer;
`;
const SpanLabel = styled.span`
    font-size: 1.1em;
    margin-left: 0.75rem;
`;
const getColours = colour => {
  let altColour = theme.selectionPanel.color;
  let primaryColour = theme.selectionPanel.background;
  if (theme.colors[colour]) {
    altColour = theme.generalColors.white;
    primaryColour = theme.colors[colour];
  }
  return {
    altColour,
    primaryColour
  };
};
const Switch$1 = ({
  name,
  id,
  checked,
  value,
  label,
  colour = 'simplyRed',
  className = null,
  ...rest
}) => {
  const attributes = {
    ...rest,
    ...getColours(colour)
  };
  console.log('switch attributes', attributes);
  return /*#__PURE__*/React$1.createElement(Wrap$i, _extends$1({
    className: className
  }, attributes), /*#__PURE__*/React$1.createElement(PaddedLabel, _extends$1({
    htmlFor: name
  }, attributes), /*#__PURE__*/React$1.createElement("div", {
    className: "switch"
  }, /*#__PURE__*/React$1.createElement("input", _extends$1({
    id: id,
    name: name,
    value: value,
    defaultChecked: checked,
    type: "checkbox"
  }, attributes)), /*#__PURE__*/React$1.createElement("span", _extends$1({
    className: "slider round"
  }, attributes))), /*#__PURE__*/React$1.createElement(SpanLabel, {
    className: "spanLabel"
  }, label)));
};

// import ColorPickerInput from './colorPickerInput';

const Select = SelectInput;
const Checkbox = CheckboxComponent;
const Radio = RadioComponent;
const Hidden = FieldComponent$1;
const Input = FieldComponent;
const Chip = ChipInput$1;
const ChipSelect = ChipInput;
const TimeSelect = TimeSelectInput;
const MoodSelect = MoodSelector;
const SelectionPanel = SelectionPanel$1;
const Switch = Switch$1;

//  export const ColorPicker = ColorPickerInput;

const headingBase$1 = styled.css`
    color: ${theme.main.color};
    font-family: ${theme.main.font};
    margin: 0;
`;
const Hero = styled.h3`
    ${headingBase$1}
    font-size: 2.2rem;
`;
const Title = styled.h1`
    ${headingBase$1}
    font-size: 1.6rem;
`;
const Subtitle = styled.h2`
    ${headingBase$1}
    font-weight: lighter;
    font-size: 1.4rem;
`;
const Standard = styled.h4`
    ${headingBase$1}
    font-size: 1.2rem;
`;
const Heading = ({
  type = 'heading',
  children,
  ...rest
}) => {
  switch (type.toLowerCase()) {
    case 'hero':
      return /*#__PURE__*/React$1.createElement(Hero, rest, children);
    case 'title':
      return /*#__PURE__*/React$1.createElement(Title, rest, children);
    case 'subtitle':
      return /*#__PURE__*/React$1.createElement(Subtitle, rest, children);
    default:
      return /*#__PURE__*/React$1.createElement(Standard, rest, children);
  }
};

const TextBase = styled.css`
    font-family: ${props => theme.main.font};
    font-weight: lighter;
    margin: 0;
`;
const Help = styled.p`
    ${TextBase}
    font-size: 0.8rem;
`;
const Small = styled.p`
    ${TextBase}
    font-weight: lighter;
    font-size: 0.95rem;
    color:${() => theme.colors.paintItBlack};
`;
const Paragraph = styled.p`
    ${TextBase}
    font-size: 1rem;
`;
const Text$1 = ({
  type = 'heading',
  children,
  ...rest
}) => {
  switch (type.toLowerCase()) {
    case 'help':
      return /*#__PURE__*/React$1.createElement(Help, rest, children);
    case 'small':
      return /*#__PURE__*/React$1.createElement(Small, rest, children);
    default:
      return /*#__PURE__*/React$1.createElement(Paragraph, rest, children);
  }
};

const Loader$1 = styled.div`
    position: relative;
    display: none;
    z-index: 10;
    width: 100%;

    &.active {
        display: block;
    }

    .loader {
        display: block;
        position: relative;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 4px;
        z-index: 12;
        background: rgba(0, 0, 0, 0.1);

        &.fade {
            display: block;
            -webkit-animation: fadeOut 1s;
            animation: fadeOut 1s;
            animation-fill-mode: forwards;
        }
    }

    @-webkit-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 0.01;
            width: 100%;
            height: 100%;
        }
        100% {
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 0.01;
            width: 100%;
            height: 100%;
        }
        100% {
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
`;
const Bar = styled.div`
    display: block;
    position: relative;
    width: ${props => `${props.percent}%` || '0%'};
    height: 100%;
    background: rgb(0, 212, 1);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    transition: width 0.5s ease-in-out;
`;
const Message = styled.div`
    display: block;
    height: auto;
    overflow: hidden;
    transform: scaleY(0);
    transform-origin: top;
    color: transparent;
    transition: color 0.2s linear;
    background: rgb(18, 148, 231);

    &.active {
        padding: 0.7rem 1.4rem;
        padding-top: calc(0.7rem + 4px);
        margin-top: -4px;
        color: inherit;
        transform: scale(1);

        .status-success & {
            color: rgb(255, 255, 255);
            background: rgb(0, 212, 1);
        }
        .status-error & {
            color: rgb(255, 255, 255);
            background: rgb(255, 0, 58);
        }
        .status-notice & {
            color: rgb(255, 255, 255);
            background: rgb(245, 166, 35);
        }
    }
`;
class LoaderBar extends React$1.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: props.progress || 0
    };
  }
  setTimeout() {
    const {
      message,
      active
    } = this.props;
    this.timer = setInterval(() => {
      if (message === '' && active === true) {
        const {
          progress
        } = this.state;
        if (progress < 94) {
          const update = Math.random() * 3;
          this.setState({
            progress: Math.round(progress + update)
          });
        }
      }
    }, 477);
  }
  clearTimeout() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
  componentDidMount() {
    this.setTimeout();
  }
  componentWillUnmount() {
    this.clearTimeout();
  }

  /** React would like us to be "Lifting State Up" here
   *     -  https://reactjs.org/docs/lifting-state-up.html
   *  For now, they can suck it
   * */
  componentWillReceiveProps(newProps) {
    const {
      progress
    } = this.props;
    if (newProps.progress && newProps.progress !== progress) {
      this.setState({
        progress: newProps.progress
      });
    }
  }
  renderBar() {
    let className = 'loader';
    const {
      message
    } = this.props;
    const {
      progress
    } = this.state;
    if (message !== '') {
      className += ' fade';
    }
    return /*#__PURE__*/React$1.createElement("div", {
      className: className
    }, /*#__PURE__*/React$1.createElement(Bar, {
      percent: progress
    }));
  }
  renderMessage() {
    const {
      message
    } = this.props;
    if (message === '') {
      return /*#__PURE__*/React$1.createElement(Message, null);
    }
    return /*#__PURE__*/React$1.createElement(Message, {
      className: "active"
    }, message);
  }
  render() {
    const {
      visible,
      status
    } = this.props;
    let className = `status-${status}`;
    if (visible === true) {
      className += ' active';
    }
    return /*#__PURE__*/React$1.createElement(Loader$1, {
      className: className
    }, this.renderBar(), this.renderMessage());
  }
}

const Wrap$h = styled.div`
    display: ${props => props.inline ? `inline-block` : `flex`};
    position: relative;
    z-index: 2;
    justify-content: center;
    align-items: center;
`;
const WrapAbsolute = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const Spinner = ({
  height = '120px',
  width = '120px',
  fill = '#fff'
}) => /*#__PURE__*/React$1.createElement("svg", {
  width: width,
  height: height,
  viewBox: "0 0 38 38",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React$1.createElement("defs", null, /*#__PURE__*/React$1.createElement("linearGradient", {
  x1: "8.042%",
  y1: "0%",
  x2: "65.682%",
  y2: "23.865%",
  id: "a"
}, /*#__PURE__*/React$1.createElement("stop", {
  stopColor: fill,
  stopOpacity: "0",
  offset: "0%"
}), /*#__PURE__*/React$1.createElement("stop", {
  stopColor: fill,
  stopOpacity: ".631",
  offset: "63.146%"
}), /*#__PURE__*/React$1.createElement("stop", {
  stopColor: fill,
  offset: "100%"
}))), /*#__PURE__*/React$1.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React$1.createElement("g", {
  transform: "translate(1 1)"
}, /*#__PURE__*/React$1.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18",
  id: "Oval-2",
  stroke: "url(#a)",
  strokeWidth: "2"
}, /*#__PURE__*/React$1.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "0.9s",
  repeatCount: "indefinite"
})), /*#__PURE__*/React$1.createElement("circle", {
  fill: fill,
  cx: "36",
  cy: "18",
  r: "1"
}, /*#__PURE__*/React$1.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "0.9s",
  repeatCount: "indefinite"
})))));
const Loader = ({
  width,
  height,
  type,
  fill
}) => {
  switch (type) {
    case 'inline':
      return /*#__PURE__*/React$1.createElement(Wrap$h, {
        inline: true
      }, /*#__PURE__*/React$1.createElement(Spinner, {
        width: width,
        height: height,
        fill: fill
      }));
    case 'absolute':
      return /*#__PURE__*/React$1.createElement(WrapAbsolute, null, /*#__PURE__*/React$1.createElement(Spinner, {
        width: width,
        height: height,
        fill: fill
      }));
    default:
      return /*#__PURE__*/React$1.createElement(Wrap$h, null, /*#__PURE__*/React$1.createElement(Spinner, {
        width: width,
        height: height,
        fill: fill
      }));
  }
};

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

const defaults = {
  content: '',
  onHover: true,
  hoverEffect: 'paused',
  loop: false,
  speed: 1,
  shouldScroll: false,
  isAnimating: false
};
const scroll = styled.keyframes`
    0%   { 
        transform: translate(0, 0); 
    }
    100% { 
        transform: translate(-50%, 0); 
    }
`;
const Wrap$g = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
`;
styled.span`
    display: inline-block;
    text-indent: 0;
    animation: ${scroll} ${props => `${props.time}s`} linear infinite;
    animation-play-state: ${props => props.animate};

    /* &:hover {
        animation-play-state: ${props => props.hoverPlaystate};
    } */
`;
const MainContent = styled.span``;
styled.span`
    padding-left: 15px;
`;
const Temp = styled.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
class Marquess extends React$1.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaults,
      ...props
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.needsToScroll = this.needsToScroll.bind(this);
  }
  componentDidMount() {
    // window.addEventListener('resize', this.needsToScroll);
    // this.needsToScroll();
  }
  componentWillUnmount() {
    // window.removeEventListener('resize', this.needsToScroll);
  }

  /**
   * Checks refs to see if inner element is bigger than parent
   */
  needsToScroll() {
    const {
      wrap,
      marquee
    } = this;
    const {
      isAnimating
    } = this.state;
    let shouldScroll = false;
    let animate = true;
    if (wrap && marquee) {
      const wWidth = wrap.getBoundingClientRect().width;
      const mWidth = marquee.getBoundingClientRect().width;
      if (mWidth > wWidth) {
        shouldScroll = true;
      }
    }
    console.log(`is anim ${isAnimating}`);
    if (!shouldScroll) {
      animate = false;
    }
    this.setState(() => ({
      shouldScroll,
      isAnimating: animate
    }));
  }
  handleHover() {
    this.needsToScroll(true);
  }
  handleAnimationEnd() {
    // console.log('end');
    this.setState(() => ({
      isAnimating: false
    }));
  }
  render() {
    this.state;
    const {
      content,
      className
    } = this.props;

    // console.log(animate);

    /* if (!shouldScroll) {
        playstate = 'paused';
        hoverPlaystate = 'paused';
        animate = 'paused';
    } */

    /**
     * Temporary Launch change
     */

    return /*#__PURE__*/React$1.createElement(Wrap$g, {
      ref: wrap => this.wrap = wrap,
      className: className
    }, /*#__PURE__*/React$1.createElement(Temp, null, /*#__PURE__*/React$1.createElement(MainContent, null, content)));
  }
}

const mastBase = styled.css`
    display:flex;
    position:fixed;
    align-items: center;
    box-sizing: content-box;
    background: ${props => props.theme.mast.background};
    z-index:9;
    ${props => props.position === "top" ? `
            top:0;
            width:100%;
            flex-direction: row;
        ` : ``}
    ${props => props.theme.mast.shadow ? `
            box-shadow: 1px 0 3px rgba(0,0,0,0.3);
        ` : ``}
`;
const Mast = styled.div`
    ${mastBase}
`;
var index = (props => /*#__PURE__*/React.createElement(Mast, {
  position: props.position
}, props.children));

const ModalHeader = styled.h2`
    display: flex;
    justify-content: center;
    color: ${props => props.theme.main.color};
`;
const Wrap$f = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 8888;
    justify-content: center;
    align-items: center;
`;
const Background = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
`;
const ModalWrap = styled.div`
    width: 30rem;
    min-height: 4rem;
    max-width: 90%;
    max-height: 90%;
    background: ${props => props.type === 'asset' ? 'transparent' : props.theme.main.boxBackground};
    color: ${props => props.theme.menu.color};
    border-radius: ${props => props.theme.main.borderRadius};
    box-shadow: 0 5px 10px ${props => props.type === 'asset' ? 'transparent' : 'rgba(0, 0, 0, 0.3)'};
    overflow: auto;
    padding: 2rem;
    text-align: center;
`;
class Modal extends React$1.Component {
  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    this.setState({
      isOpen: true
    });
  }
  close() {
    this.setState({
      isOpen: false
    });
  }
  renderClose() {
    const {
      modal
    } = this.props;
    const {
      close = true,
      onClose = null,
      closeText = 'Cancel'
    } = modal;
    if (close) {
      return /*#__PURE__*/React$1.createElement("button", {
        style: {
          margin: '0 auto 1em auto',
          display: 'block'
        },
        onClick: () => onClose(null),
        type: "button"
      }, closeText);
    }
    return null;
  }
  renderHeader(header, type) {
    if (type === 'asset') {
      return null;
    }
    return /*#__PURE__*/React$1.createElement(ModalHeader, null, header);
  }
  render() {
    const {
      modal
    } = this.props;
    const {
      content = 'test',
      header = 'Modal Header',
      onClose = null,
      isOpen = false,
      type = 'default',
      className = null
    } = modal;
    console.log('Modal: Render', this.props);
    if (!isOpen) {
      return null;
    }
    return /*#__PURE__*/React$1.createElement(Wrap$f, null, /*#__PURE__*/React$1.createElement(Background, {
      onClick: () => onClose(null)
    }), /*#__PURE__*/React$1.createElement(ModalWrap, {
      id: "mainModal",
      type: type
    }, this.renderHeader(header, type), content, this.renderClose()));
  }
}

// Connect container component to store
const ModalContainer = Modal;

function paginate(totalItems, currentPage, pageSize, maxPages) {
  // calculate total pages
  const totalPages = Math.ceil(totalItems / pageSize);
  let thisPage = currentPage;

  // ensure current page isn't out of range
  if (currentPage <= 1) {
    thisPage = 1;
  } else if (currentPage > totalPages) {
    thisPage = totalPages;
  }
  let startPage = 0;
  let endPage = 0;
  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
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
  }

  // calculate start and end item indexes
  const startIndex = (thisPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);

  // return object with all pager properties required by the view
  return {
    totalItems,
    thisPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages
  };
}

const Icon$2 = () => /*#__PURE__*/React$1.createElement("svg", {
  width: "64px",
  height: "64px",
  viewBox: "0 0 64 64",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React$1.createElement("g", {
  id: "Icon/Arrow-Right",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, /*#__PURE__*/React$1.createElement("path", {
  d: "M27.211231,59.2005673 C25.8400121,57.8435768 25.8684687,55.6295397 27.2684232,54.3011453 L44.4807766,37.903014 L3.42818658,37.903014 C1.52842775,37.903014 0,36.3745863 0,34.4748275 L0,29.903912 C0,28.0041532 1.52842775,26.4757254 3.42818658,26.4757254 L44.4807766,26.4757254 L27.2684232,10.0775942 C25.8828366,8.74919982 25.8542404,6.53516266 27.211231,5.17817214 L30.3823314,2.00707165 C31.7107258,0.664309448 33.8819386,0.664309448 35.2245613,2.00707165 L62.9929283,29.7752992 C64.3356906,31.1038331 64.3356906,33.2749064 62.9929283,34.6176686 L35.2245613,62.3716678 C33.8961669,63.71443 31.7249541,63.71443 30.3823314,62.3716678 L27.211231,59.2005673 Z",
  id: "\uD83C\uDFA8-Icon-Fill"
})));

const Icon$1 = () => /*#__PURE__*/React$1.createElement("svg", {
  width: "64px",
  height: "64px",
  viewBox: "0 0 64 64",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React$1.createElement("g", {
  id: "Icon/Arrow-Left",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, /*#__PURE__*/React$1.createElement("path", {
  d: "M36.788769,59.2005673 L33.6176686,62.3716678 C32.2750459,63.71443 30.1038331,63.71443 28.7754387,62.3716678 L1.00707165,34.6176686 C-0.335690552,33.2749064 -0.335690552,31.1038331 1.00707165,29.7752992 L28.7754387,2.00707165 C30.1180614,0.664309448 32.2892742,0.664309448 33.6176686,2.00707165 L36.788769,5.17817214 C38.1457596,6.53516266 38.1171634,8.74919982 36.7315768,10.0775942 L19.5192234,26.4757254 L60.5718134,26.4757254 C62.4715723,26.4757254 64,28.0041532 64,29.903912 L64,34.4748275 C64,36.3745863 62.4715723,37.903014 60.5718134,37.903014 L19.5192234,37.903014 L36.7315768,54.3011453 C38.1315313,55.6295397 38.1599879,57.8435768 36.788769,59.2005673 Z",
  id: "\uD83C\uDFA8-Icon-Fill"
})));

const Wrap$e = styled.div`
    display: block;
    text-align: right;

    > * {
        &.number &.arrow &.inactivearrow {
            display: inline-block;
            border: none;
        }
        &.number {
            padding: 0.7em 0.5em;
            width: 2.5em;
            margin: 0.5em 0.1em;
            background: #fff;
            color: ${props => props.theme.pagination.color};
            border: none;
        }

        &.arrow {
            padding: 0.8em 0.8em 0.6em 0.8em;
            margin: 0.5em 0.1em;
            background: #fff;
            border: none;
        }
        &.inactivearrow {
            padding: 0.8em 0.8em 0.6em 0.8em;
            margin: 0.5em 0.1em;
            background: #f0f0f0;
            pointer-events: none;
            border: none;
        }

        &.active {
            background: #e83948;
            border-radius: 4px 0em;
            margin: 0.5em 0.1em;
            padding: 0.7em 0.5em;
            width: 2.5em;
            outline: none;
            color: #fff;
            border: none;
            border-radius: 10px;
        }
    }
`;
const SvgWrap = styled.div`
    align-self: flex-end;
    width: 0.9em;

    svg {
        width: 100%;
        height: 100%;
        fill: ${props => props.color};
    }

    .active & {
        svg {
            fill: red;
        }
    }
`;
const _pageSize = 20;
const _totalPages = 5;
class Pagination extends React$1.Component {
  constructor(props) {
    super(props);
    this.renderPageButton = this.renderPageButton.bind(this);
  }
  renderMore() {
    const {
      page,
      paginate
    } = this.props;
    // handlePaginate(page, filters, column, direction) {
    const handlePaginate = pg => {
      paginate(pg);
    };
    return /*#__PURE__*/React$1.createElement(Wrap$e, null, /*#__PURE__*/React$1.createElement(Button, {
      onClick: handlePaginate(page)
    }, "Load More"));
  }
  renderPageButton(pageNumber) {
    const {
      paginate,
      page
    } = this.props;

    // handlePaginate(page, filters, column, direction) {
    const handlePaginate = pg => {
      paginate(pg);
    };
    let className = '';
    if (page === pageNumber || page <= 0 && pageNumber === 1) {
      className = 'active';
    } else {
      className = 'number';
    }
    return /*#__PURE__*/React$1.createElement(Button, {
      key: `pagination-page-${pageNumber}`,
      value: "Test Button",
      type: "button",
      outline: "true",
      className: className,
      onClick: () => {
        handlePaginate(pageNumber);
      }
    }, pageNumber);
  }
  renderBackPageButton(current) {
    const {
      paginate,
      page
    } = this.props;
    const handlePaginate = pg => {
      paginate(pg);
    };
    let className = '';
    let color = '';
    let disabled = false;
    if (page > 1 && current.pages.length > 0) {
      className = 'arrow';
      color = '#e83948';
    } else {
      className = 'inactivearrow';
      color = '#B4B7BC';
      disabled = true;
    }
    return /*#__PURE__*/React$1.createElement(Button, {
      disabled: disabled,
      className: className,
      onClick: () => {
        handlePaginate(page - 1);
      }
    }, /*#__PURE__*/React$1.createElement(SvgWrap, {
      color: color
    }, /*#__PURE__*/React$1.createElement(Icon$1, null)));
  }
  renderNextPageButton(current) {
    const {
      paginate,
      page
    } = this.props;
    const handlePaginate = pg => {
      paginate(pg);
    };
    let className = '';
    let color = '';
    if (page < current.totalPages) {
      className = 'arrow';
      color = '#e83948';
    } else {
      className = 'inactivearrow';
      color = '#B4B7BC';
    }
    return /*#__PURE__*/React$1.createElement(Button, {
      className: className,
      onClick: () => {
        handlePaginate(page + 1);
      }
    }, /*#__PURE__*/React$1.createElement(SvgWrap, {
      color: color
    }, /*#__PURE__*/React$1.createElement(Icon$2, null)));
  }
  renderPages() {
    const {
      page,
      totalRecords
    } = this.props;
    const current = paginate(totalRecords, page, _pageSize, _totalPages);
    const {
      pages
    } = current;
    return /*#__PURE__*/React$1.createElement(Wrap$e, null, pages && pages.length > 1 ? /*#__PURE__*/React$1.createElement(React$1.Fragment, null, this.renderBackPageButton(current), pages.map(this.renderPageButton), this.renderNextPageButton(current)) : null);
  }
  render() {
    const {
      type
    } = this.props;
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
}

const paragraphBase = styled.css`
    margin: 1rem 0;
    color: #666;
    line-height:170%;
`;
const paragraph = styled.p`
    ${paragraphBase}
`;

const CheckCircleLight = () => /*#__PURE__*/React$1.createElement("svg", {
  width: "64px",
  height: "64px",
  viewBox: "0 0 64 64",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React$1.createElement("g", {
  id: "Icon/Check-Circle-Light",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, /*#__PURE__*/React$1.createElement("path", {
  d: "M32,0 C49.6731351,0 64,14.3268649 64,32 C64,49.6731351 49.6731351,64 32,64 C14.3268649,64 0,49.6731351 0,32 C0,14.3268649 14.3268649,0 32,0 Z M32,59.8709677 C47.4768145,59.8709677 59.8709677,47.3113659 59.8709677,32 C59.8709677,16.5231855 47.3114919,4.12903226 32,4.12903226 C16.5231855,4.12903226 4.12903226,16.6886341 4.12903226,32 C4.12903226,47.4768145 16.6885081,59.8709677 32,59.8709677 Z M50.2748236,24.3921371 L26.9871472,47.4930696 C26.3800403,48.0952621 25.3995716,48.0913558 24.797379,47.484249 L13.7163558,36.3136341 C13.1141633,35.7065272 13.1180696,34.7261845 13.7251764,34.1239919 L14.8244708,33.0335181 C15.4315776,32.4313256 16.4120464,32.4352319 17.0142389,33.0423387 L25.9143145,42.0143649 L47.0035282,21.09438 C47.6106351,20.4921875 48.5909778,20.4959677 49.1931704,21.1030746 L50.2836442,22.202495 C50.8859627,22.8096018 50.8819304,23.7899446 50.2748236,24.3921371 Z",
  id: "\uD83C\uDFA8-Icon-Fill"
})));

const ExclamationCircleLight = () => /*#__PURE__*/React$1.createElement("svg", {
  width: "64px",
  height: "64px",
  viewBox: "0 0 64 64",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React$1.createElement("g", {
  id: "Icon/Exclamation-Circle-Light",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, /*#__PURE__*/React$1.createElement("path", {
  d: "M32,4.12903226 C16.59375,4.12903226 4.12903226,16.6189516 4.12903226,32 C4.12903226,47.4114163 16.6136593,59.8709677 32,59.8709677 C47.4051159,59.8709677 59.8709677,47.3923891 59.8709677,32 C59.8709677,16.5258317 47.3059476,4.12903226 32,4.12903226 Z M32,0 C49.671875,0 64,14.3332913 64,32 C64,49.6770413 49.671875,64 32,64 C14.328125,64 0,49.6770413 0,32 C0,14.3332913 14.328125,0 32,0 Z M30.5173891,15.483871 L33.4824849,15.483871 C34.3627772,15.483871 35.0661542,16.2169859 35.0294859,17.0967742 L34.1262601,38.7741935 C34.0917339,39.6035786 33.4094002,40.2580645 32.5792591,40.2580645 L31.4206149,40.2580645 C30.5905998,40.2580645 29.9081401,39.6034526 29.8734879,38.7741935 L28.9702621,17.0967742 C28.9338458,16.2169859 29.6369708,15.483871 30.5173891,15.483871 Z M32,42.8387097 C33.9953377,42.8387097 35.6129032,44.4562752 35.6129032,46.4516129 C35.6129032,48.4469506 33.9953377,50.0645161 32,50.0645161 C30.0046623,50.0645161 28.3870968,48.4469506 28.3870968,46.4516129 C28.3870968,44.4562752 30.0046623,42.8387097 32,42.8387097 Z",
  id: "\uD83C\uDFA8-Icon-Fill"
})));

const TimesCircleLight = () => /*#__PURE__*/React$1.createElement("svg", {
  width: "64px",
  height: "64px",
  viewBox: "0 0 64 64",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React$1.createElement("g", {
  id: "Icon/Times-Circle-Light",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, /*#__PURE__*/React$1.createElement("path", {
  d: "M32,0 C49.6774194,0 64,14.3225806 64,32 C64,49.6774194 49.6774194,64 32,64 C14.3225806,64 0,49.6774194 0,32 C0,14.3225806 14.3225806,0 32,0 Z M32,59.8709677 C47.4710181,59.8709677 59.8709677,47.3161542 59.8709677,32 C59.8709677,16.5289819 47.3161542,4.12903226 32,4.12903226 C16.5289819,4.12903226 4.12903226,16.6838458 4.12903226,32 C4.12903226,47.4710181 16.6838458,59.8709677 32,59.8709677 Z M44.2322329,23.0580897 L35.2903226,32 L44.2322329,40.9419103 C44.8387097,41.5483871 44.8387097,42.5289819 44.2322329,43.1354587 L43.1354587,44.2322329 C42.5289819,44.8387097 41.5483871,44.8387097 40.9419103,44.2322329 L32,35.2903226 L23.0580897,44.2322329 C22.4516129,44.8387097 21.4710181,44.8387097 20.8645413,44.2322329 L19.7677671,43.1354587 C19.1612903,42.5289819 19.1612903,41.5483871 19.7677671,40.9419103 L28.7096774,32 L19.7677671,23.0580897 C19.1612903,22.4516129 19.1612903,21.4710181 19.7677671,20.8645413 L20.8645413,19.7677671 C21.4710181,19.1612903 22.4516129,19.1612903 23.0580897,19.7677671 L32,28.7096774 L40.9419103,19.7677671 C41.5483871,19.1612903 42.5289819,19.1612903 43.1354587,19.7677671 L44.2322329,20.8645413 C44.8258569,21.4710181 44.8258569,22.4516129 44.2322329,23.0580897 Z",
  id: "\uD83C\uDFA8-Icon-Fill"
})));

const InfoCircleLight = () => /*#__PURE__*/React$1.createElement("svg", {
  width: "64px",
  height: "64px",
  viewBox: "0 0 64 64",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React$1.createElement("g", {
  id: "Icon/Info-Circle-Light",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, /*#__PURE__*/React$1.createElement("path", {
  d: "M32,4.12903226 C16.59375,4.12903226 4.12903226,16.6189516 4.12903226,32 C4.12903226,47.4114163 16.6136593,59.8709677 32,59.8709677 C47.4051159,59.8709677 59.8709677,47.3923891 59.8709677,32 C59.8709677,16.5258317 47.3059476,4.12903226 32,4.12903226 Z M32,0 C49.671875,0 64,14.3332913 64,32 C64,49.6770413 49.671875,64 32,64 C14.328125,64 0,49.6770413 0,32 C0,14.3332913 14.328125,0 32,0 Z M27.3548387,44.3870968 L28.9032258,44.3870968 L28.9032258,28.9032357 L27.3548387,28.9032357 C26.499748,28.9032357 25.8064516,28.2099294 25.8064516,27.3548387 L25.8064516,26.3225806 C25.8064516,25.4674899 26.499748,24.7741935 27.3548387,24.7741935 L33.5483871,24.7741935 C34.4034778,24.7741935 35.0967742,25.4674899 35.0967742,26.3225806 L35.0967742,44.3870968 L36.6451613,44.3870968 C37.500252,44.3870968 38.1935484,45.0803931 38.1935484,45.9354839 L38.1935484,46.9677419 C38.1935484,47.8228327 37.500252,48.516129 36.6451613,48.516129 L27.3548387,48.516129 C26.499748,48.516129 25.8064516,47.8228327 25.8064516,46.9677419 L25.8064516,45.9354839 C25.8064516,45.0803931 26.499748,44.3870968 27.3548387,44.3870968 Z M32.0000098,13.4193548 C34.2803679,13.4193548 36.1290519,15.2680192 36.1290519,17.5483969 C36.1290519,19.828755 34.2803679,21.677439 32.0000098,21.677439 C29.7196321,21.677439 27.8709677,19.828755 27.8709677,17.5483969 C27.8709677,15.2680192 29.7196321,13.4193548 32.0000098,13.4193548 Z",
  id: "\uD83C\uDFA8-Icon-Fill"
})));

const ResponseBoxText = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 15px 30px 15px 15px;
    margin-bottom: 30px;
    font-size: 1rem;
    color: ${props => darken(0.25, props.borderColor)};
    border-radius: 0.45em;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    border: 0.15rem solid ${props => props.borderColor};
    justify-content: space-between;
    align-items: center;
`;
const TextWrap$1 = styled.p`
    font-size: 0.9em;
    color: ${props => darken(0.25, props.color)};
    text-align: left;
    flex-grow: 1;
`;
const LeftDiv = styled.div`
    display: flex;
`;
const XWrap = styled.button`
    width: 0.8rem;
    height: 0.8rem;

    svg {
        width: 100%;
        height: 100%;
    }
    &:hover {
        opacity: 0.8;
    }
`;
const IconWrap$1 = styled.div`
    width: 1rem;
    height: 1rem;
    justify-self: flex-start;
    margin-right: 15px;

    svg {
        width: 100%;
        height: 100%;
    }
`;
const ResponseBoxStyled = styled.div`
    text-align: ${props => props.align};
    margin: 0.5em 0 0.5em 0;
`;
const ResponseBox = props => {
  const {
    type,
    children,
    clearResponseBox,
    data,
    className
  } = props;
  const colorDictionary = {
    default: {
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
  const color = colorDictionary[type] || colorDictionary.default;
  let Icon = () => /*#__PURE__*/React$1.createElement(InfoCircleLight, null);
  if (type === 'success') {
    Icon = () => /*#__PURE__*/React$1.createElement(CheckCircleLight, null);
  } else if (type === 'danger') {
    Icon = () => /*#__PURE__*/React$1.createElement(TimesCircleLight, null);
  } else if (type === 'warning') {
    Icon = () => /*#__PURE__*/React$1.createElement(ExclamationCircleLight, null);
  } else if (type === 'default' || type === 'info') {
    Icon = () => /*#__PURE__*/React$1.createElement(InfoCircleLight, null);
  }
  let XButton = () => null;
  if (clearResponseBox !== undefined) {
    XButton = () => /*#__PURE__*/React$1.createElement(XWrap, {
      color: color.borderColor,
      onClick: () => onXClick(data)
    }, /*#__PURE__*/React$1.createElement(Times, null));
  }
  return /*#__PURE__*/React$1.createElement(ResponseBoxStyled, {
    className: className
  }, /*#__PURE__*/React$1.createElement(ResponseBoxText, {
    backgroundColor: color.backgroundColor,
    borderColor: color.borderColor
  }, /*#__PURE__*/React$1.createElement(LeftDiv, null, /*#__PURE__*/React$1.createElement(IconWrap$1, {
    color: color.borderColor
  }, /*#__PURE__*/React$1.createElement(Icon, null)), /*#__PURE__*/React$1.createElement(TextWrap$1, {
    color: color.borderColor
  }, children)), /*#__PURE__*/React$1.createElement(XButton, null)));
};

const debounce = (func, wait, immediate) => {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const TableElementBase = styled.css`
    padding: 10px 15px;
    background: ${props => props.background ? props.background : props.theme.main.boxBackground};
`;
const TableBase = styled.css`
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
    color: ${props => props.theme.main.color};
    border-collapse: separate;
    border-spacing: 0 0.3rem;

    &:last-child {
        margin-bottom: 0;
    }
`;
const TrBase = styled.css`
    opacity: ${props => props.opacity ? props.opacity : 1};
    border-radius: ${props => props.theme.main.borderRadius};
    min-height: 50px;

    td:first-child,
    th:first-child {
        border-radius: ${props => props.theme.main.borderRadius} 0 0 ${props => props.theme.main.borderRadius};
    }

    td:last-child,
    th:last-child {
        border-radius: 0 ${props => props.theme.main.borderRadius} ${props => props.theme.main.borderRadius} 0;
        text-align: right;
        position: sticky;
        right: 0px;
        border-left: 1px;
        padding: 10px 15px;
    }
`;
const TableStyled = styled.table`
    ${TableBase}

    .iconWrap {
        box-shadow: ${p => p.overflowed ? `-5px 0 8px -5px ${p.theme.rowComponent.actionShadow}` : 'none'};
    }
`;
const ResponsiveTable = styled.div`
    overflow: auto;
    margin-bottom: 15px;

    td,
    th {
        white-space: nowrap;
    }
`;
class Table extends React$1.Component {
  constructor(props) {
    super(props);
    this.state = {
      overflowed: false
    };
    this.responsiveTable = /*#__PURE__*/React$1.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.handleScroll();
    }, 200);
    window.addEventListener('resize', debounce(this.handleScroll));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScroll);
  }
  handleScroll() {
    // console.log(e);
    let overflowed = false;
    const elem = this.responsiveTable.current;
    console.log(elem.offsetWidth, elem.scrollWidth, elem.scrollLeft);
    if (elem.offsetWidth < elem.scrollWidth && elem.offsetWidth + elem.scrollLeft < elem.scrollWidth) {
      overflowed = true;
    }
    this.setState(() => ({
      overflowed
    }));
  }
  render() {
    const {
      children,
      paginate,
      totalRecords,
      page,
      type
    } = this.props;
    const {
      overflowed
    } = this.state;
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(ResponsiveTable, {
      onScroll: this.handleScroll,
      ref: this.responsiveTable
    }, /*#__PURE__*/React$1.createElement(TableStyled, {
      overflowed: overflowed
    }, children)), /*#__PURE__*/React$1.createElement(Pagination, {
      paginate: paginate,
      page: page,
      totalRecords: totalRecords,
      type: type
    }));
  }
}

const TrStyled = styled.tr`
    ${TrBase}
`;
const Tr = ({
  children,
  background = null,
  opacity = 1,
  stickyActions = true,
  className = null,
  ...rest
}) => /*#__PURE__*/React$1.createElement(TrStyled, _extends$1({
  className: className,
  background: background,
  opacity: opacity,
  stickyActions: stickyActions
}, rest), children);

const TdStyled = styled.td`
    ${TableElementBase}
    text-align: ${props => props.align ? props.align : null};
`;
const Td = ({
  children,
  align,
  className
}) => /*#__PURE__*/React$1.createElement(TdStyled, {
  className: className,
  align: align
}, children);

const ThStyled = styled.th`
    ${TableElementBase}
    padding: 15px 15px;
`;
const Th = ({
  children,
  className
}) => /*#__PURE__*/React$1.createElement(ThStyled, {
  className: className
}, children);

const ProgressBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const Text = styled.span`
    color: ${({
  color
}) => color};
    padding: 0 1rem;
`;
const ProgressBarFiller = styled.div`
    height: 100%;
    width: ${({
  progress
}) => `${progress}%`};
    transition: width 0.25s ease-in;
    background-color: ${({
  color
}) => color};
    border-radius: 1rem;
    text-align: right;
    &:after {
        content: '.';
        visibility: hidden;
    }
`;
const ProgressBarTotal = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: ${theme.colors.fadeToGrey};
    border-radius: 1rem;
`;
const getBarColor = progress => {
  if (progress === 100) {
    return theme.colors.greenDay;
  }
  return theme.colors.simplyRed;
};
const ProgressBar = ({
  progress,
  text = true
}) => {
  const color = getBarColor(progress);
  return /*#__PURE__*/React$1.createElement(ProgressBarContainer, {
    progress: progress,
    color: color
  }, /*#__PURE__*/React$1.createElement(ProgressBarTotal, null, /*#__PURE__*/React$1.createElement(ProgressBarFiller, {
    progress: progress,
    color: color
  })), text ? /*#__PURE__*/React$1.createElement(Text, null, `${progress}%`) : null);
};

const initialState = {};
const progressBars = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROGRESS_BAR':
      return {
        ...state,
        [action.key]: 0
      };
    case 'UPDATE_PROGRESS_BAR':
      return {
        ...state,
        ...action.data
      };
    case 'DELETE_PROGRESS_BAR':
      const copyState = {
        ...state
      };
      delete copyState[action.key];
      return {
        ...copyState
      };
    default:
      return {
        ...state
      };
  }
};

function createProgressBar(key) {
  return {
    type: 'CREATE_PROGRESS_BAR',
    key
  };
}
function updateProgressBar(data) {
  return {
    type: 'UPDATE_PROGRESS_BAR',
    data
  };
}
function readProgressBar(key) {
  return {
    type: 'READ_PROGRESS_BAR',
    key
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
    key
  };
}

var actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createProgressBar: createProgressBar,
    deleteProgressBar: deleteProgressBar,
    readAllProgressBars: readAllProgressBars,
    readProgressBar: readProgressBar,
    updateProgressBar: updateProgressBar
});

/**
 * @public
 */
const MotionConfigContext = React$1.createContext({
  transformPagePoint: p => p,
  isStatic: false,
  reducedMotion: "never"
});

const MotionContext = React$1.createContext({});

/**
 * @public
 */
const PresenceContext = React$1.createContext(null);

const isBrowser = typeof document !== "undefined";

const useIsomorphicLayoutEffect = isBrowser ? React$1.useLayoutEffect : React$1.useEffect;

const LazyContext = React$1.createContext({
  strict: false
});

function useVisualElement(Component, visualState, props, createVisualElement) {
  const {
    visualElement: parent
  } = React$1.useContext(MotionContext);
  const lazyContext = React$1.useContext(LazyContext);
  const presenceContext = React$1.useContext(PresenceContext);
  const reducedMotionConfig = React$1.useContext(MotionConfigContext).reducedMotion;
  const visualElementRef = React$1.useRef();
  /**
   * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
   */
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  React$1.useInsertionEffect(() => {
    visualElement && visualElement.update(props, presenceContext);
  });
  useIsomorphicLayoutEffect(() => {
    visualElement && visualElement.render();
  });
  React$1.useEffect(() => {
    visualElement && visualElement.updateFeatures();
  });
  /**
   * Ideally this function would always run in a useEffect.
   *
   * However, if we have optimised appear animations to handoff from,
   * it needs to happen synchronously to ensure there's no flash of
   * incorrect styles in the event of a hydration error.
   *
   * So if we detect a situtation where optimised appear animations
   * are running, we use useLayoutEffect to trigger animations.
   */
  const useAnimateChangesEffect = window.HandoffAppearAnimations ? useIsomorphicLayoutEffect : React$1.useEffect;
  useAnimateChangesEffect(() => {
    if (visualElement && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
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
  return React$1.useCallback(instance => {
    instance && visualState.mount && visualState.mount(instance);
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
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

const variantPriorityOrder = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
const variantProps = ["initial", ...variantPriorityOrder];

function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some(name => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const {
      initial,
      animate
    } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : undefined,
      animate: isVariantLabel(animate) ? animate : undefined
    };
  }
  return props.inherit !== false ? context : {};
}

function useCreateMotionContext(props) {
  const {
    initial,
    animate
  } = getCurrentTreeVariants(props, React$1.useContext(MotionContext));
  return React$1.useMemo(() => ({
    initial,
    animate
  }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

const featureProps = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
const featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: props => featureProps[key].some(name => !!props[name])
  };
}

function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}

const LayoutGroupContext = React$1.createContext({});

/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = React$1.createContext({});

const motionComponentSymbol = Symbol.for("motionComponentSymbol");

/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function createMotionComponent({
  preloadedFeatures,
  createVisualElement,
  useRender,
  useVisualState,
  Component
}) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    /**
     * If we need to measure the element we load this functionality in a
     * separate class component in order to gain access to getSnapshotBeforeUpdate.
     */
    let MeasureLayout;
    const configAndProps = {
      ...React$1.useContext(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const {
      isStatic
    } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      /**
       * Create a VisualElement for this component. A VisualElement provides a common
       * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
       * providing a way of rendering to these APIs outside of the React render loop
       * for more performant animations and interactions
       */
      context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement);
      /**
       * Load Motion gesture and animation features. These are rendered as renderless
       * components so each feature can optionally make use of React lifecycle methods.
       */
      const initialLayoutGroupConfig = React$1.useContext(SwitchLayoutGroupContext);
      const isStrict = React$1.useContext(LazyContext).strict;
      if (context.visualElement) {
        MeasureLayout = context.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        configAndProps, isStrict, preloadedFeatures, initialLayoutGroupConfig);
      }
    }
    /**
     * The mount order and hierarchy is specific to ensure our element ref
     * is hydrated by the time features fire their effects.
     */
    return React__namespace.createElement(MotionContext.Provider, {
      value: context
    }, MeasureLayout && context.visualElement ? React__namespace.createElement(MeasureLayout, {
      visualElement: context.visualElement,
      ...configAndProps
    }) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement));
  }
  const ForwardRefComponent = React$1.forwardRef(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component;
  return ForwardRefComponent;
}
function useLayoutId({
  layoutId
}) {
  const layoutGroupId = React$1.useContext(LayoutGroupContext).id;
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
  function custom(Component, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  /**
   * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
   * Rather than generating them anew every render.
   */
  const componentCache = new Map();
  return new Proxy(custom, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
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
const lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

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

const scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);

function isForcedMotionValue(key, {
  layout,
  layoutId
}) {
  return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== undefined) && (!!scaleCorrectors[key] || key === "opacity");
}

const isMotionValue = value => Boolean(value && value.getVelocity);

const translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
const numTransforms = transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, {
  enableHardwareAcceleration = true,
  allowTransformNone = true
}, transformIsDefault, transformTemplate) {
  // The transform string we're going to build into.
  let transformString = "";
  /**
   * Loop over all possible transforms in order, adding the ones that
   * are present to the transform string.
   */
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    if (transform[key] !== undefined) {
      const transformName = translateAlias[key] || key;
      transformString += `${transformName}(${transform[key]}) `;
    }
  }
  if (enableHardwareAcceleration && !transform.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  // If we have a custom `transform` template, pass our transform values and
  // generated transformString to that before returning
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

const checkStringStartsWith = token => key => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = checkStringStartsWith("--");
const isCSSVariableToken = checkStringStartsWith("var(--");
const cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;

/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

const clamp = (min, max, v) => Math.min(Math.max(v, min), max);

const number = {
  test: v => typeof v === "number",
  parse: parseFloat,
  transform: v => v
};
const alpha = {
  ...number,
  transform: v => clamp(0, 1, v)
};
const scale = {
  ...number,
  default: 1
};

/**
 * TODO: When we move from string as a source of truth to data models
 * everything in this folder should probably be referred to as models vs types
 */
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = v => Math.round(v * 100000) / 100000;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

const createUnitType = unit => ({
  test: v => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: v => `${v}${unit}`
});
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = {
  ...percent,
  parse: v => percent.parse(v) / 100,
  transform: v => percent.transform(v * 100)
};

const int = {
  ...number,
  transform: Math.round
};

const numberValueTypes = {
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
  scale,
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

function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const {
    style,
    vars,
    transform,
    transformOrigin
  } = state;
  // Track whether we encounter any transform or transformOrigin values.
  let hasTransform = false;
  let hasTransformOrigin = false;
  // Does the calculated transform essentially equal "none"?
  let transformIsNone = true;
  /**
   * Loop over all our latest animated values and decide whether to handle them
   * as a style or CSS variable.
   *
   * Transforms and transform origins are kept seperately for further processing.
   */
  for (const key in latestValues) {
    const value = latestValues[key];
    /**
     * If this is a CSS variable we don't do any further processing.
     */
    if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    }
    // Convert the value to its default value type, ie 0 -> "0px"
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      // If this is a transform, flag to enable further transform processing
      hasTransform = true;
      transform[key] = valueAsType;
      // If we already know we have a non-default transform, early return
      if (!transformIsNone) continue;
      // Otherwise check to see if this is a default transform
      if (value !== (valueType.default || 0)) transformIsNone = false;
    } else if (key.startsWith("origin")) {
      // If this is a transform origin, flag and enable further transform-origin processing
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform || transformTemplate) {
      style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      /**
       * If we have previously created a transform but currently don't have any,
       * reset transform style to none.
       */
      style.transform = "none";
    }
  }
  /**
   * Build a transformOrigin style. Uses the same defaults as the browser for
   * undefined origins.
   */
  if (hasTransformOrigin) {
    const {
      originX = "50%",
      originY = "50%",
      originZ = 0
    } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

const createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({
  transformTemplate
}, visualState, isStatic) {
  return React$1.useMemo(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, {
      enableHardwareAcceleration: !isStatic
    }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style = {};
  /**
   * Copy non-Motion Values straight into style
   */
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
  // The `any` isn't ideal but it is the type of createElement props argument
  const htmlProps = {};
  const style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    // Disable the ghost element when a user drags
    htmlProps.draggable = false;
    // Disable text selection
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    // Disable scrolling on the draggable direction
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === undefined && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || validMotionProps.has(key);
}

let shouldForward = key => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp) return;
  // Explicitly filter our events
  shouldForward = key => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
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
  /**
   * We attempt to import this package but require won't be defined in esm environments, in that case
   * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
   * in favour of explicit injection.
   */
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch (_a) {
  // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    /**
     * values is considered a valid prop by Emotion, so if it's present
     * this will be rendered out to the DOM unless explicitly filtered.
     *
     * We check the type as it could be used with the `feColorMatrix`
     * element, which we support.
     */
    if (key === "values" && typeof props.values === "object") continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) ||
    // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

function calcOrigin$1(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

const dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
const camelKeys = {
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
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  // Normalise path length by setting SVG attribute pathLength to 1
  attrs.pathLength = 1;
  // We use dash case when setting attributes directly to the DOM node and camel case
  // when defining props on a React component.
  const keys = useDashCase ? dashKeys : camelKeys;
  // Build the dash offset
  attrs[keys.offset] = px.transform(-offset);
  // Build the dash array
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, options, isSVGTag, transformTemplate) {
  buildHTMLStyles(state, latest, options, transformTemplate);
  /**
   * For svg tags we just want to make sure viewBox is animatable and treat all the styles
   * as normal HTML tags.
   */
  if (isSVGTag) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const {
    attrs,
    style,
    dimensions
  } = state;
  /**
   * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
   * and copy it into style.
   */
  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  }
  // Parse transformOrigin
  if (dimensions && (originX !== undefined || originY !== undefined || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
  }
  // Render attrX/attrY/attrScale as attributes
  if (attrX !== undefined) attrs.x = attrX;
  if (attrY !== undefined) attrs.y = attrY;
  if (attrScale !== undefined) attrs.scale = attrScale;
  // Build SVG path if one has been defined
  if (pathLength !== undefined) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

const createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

const isSVGTag = tag => typeof tag === "string" && tag.toLowerCase() === "svg";

function useSVGProps(props, visualState, _isStatic, Component) {
  const visualProps = React$1.useMemo(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, {
      enableHardwareAcceleration: false
    }, isSVGTag(Component), props.transformTemplate);
    return {
      ...state.attrs,
      style: {
        ...state.style
      }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = {
      ...rawStyles,
      ...visualProps.style
    };
  }
  return visualProps;
}

function createUseRender(forwardMotionProps = false) {
  const useRender = (Component, props, ref, {
    latestValues
  }, isStatic) => {
    const useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component);
    const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    const elementProps = {
      ...filteredProps,
      ...visualProps,
      ref
    };
    /**
     * If component has been handed a motion value as its child,
     * memoise its initial value and render that. Subsequent updates
     * will be handled by the onChange handler
     */
    const {
      children
    } = props;
    const renderedChildren = React$1.useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
    return React$1.createElement(Component, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = str => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

function renderHTML(element, {
  style,
  vars
}, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  // Loop over any CSS variables and assign those.
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, undefined, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

function scrapeMotionValuesFromProps$1(props, prevProps) {
  const {
    style
  } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

function scrapeMotionValuesFromProps(props, prevProps) {
  const newValues = scrapeMotionValuesFromProps$1(props, prevProps);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  /**
   * If the variant definition is a function, resolve.
   */
  if (typeof definition === "function") {
    definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
  }
  /**
   * If the variant definition is a variant label, or
   * the function returned a variant label, resolve.
   */
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  /**
   * At this point we've resolved both functions and variant labels,
   * but the resolved variant label might itself have been a function.
   * If so, resolve. This can only have returned a valid target object.
   */
  if (typeof definition === "function") {
    definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
  const ref = React$1.useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

const isKeyframesTarget = v => {
  return Array.isArray(v);
};

const isCustomValue = v => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = v => {
  // TODO maybe throw if v.length - 1 is placeholder token?
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

function makeState({
  scrapeMotionValuesFromProps,
  createRenderState,
  onMount
}, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = instance => onMount(props, instance, state);
  }
  return state;
}
const makeUseVisualState = config => (props, isStatic) => {
  const context = React$1.useContext(MotionContext);
  const presenceContext = React$1.useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let {
    initial,
    animate
  } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === undefined) initial = context.initial;
    if (animate === undefined) animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(definition => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      const {
        transitionEnd,
        transition,
        ...target
      } = resolved;
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          /**
           * Take final keyframe if the initial animation is blocked because
           * we want to initialise at the end of that blocked animation.
           */
          const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd) values[key] = transitionEnd[key];
    });
  }
  return values;
}

const svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, {
      renderState,
      latestValues
    }) => {
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
      }, isSVGTag(instance.tagName), props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};

const htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createHtmlRenderState
  })
};

function createDomMotionConfig(Component, {
  forwardMotionProps = false
}, preloadedFeatures, createVisualElement) {
  const baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return {
    ...baseConfig,
    preloadedFeatures,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement,
    Component
  };
}

function addDomEvent(target, eventName, handler, options = {
  passive: true
}) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

const isPrimaryPointer = event => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    /**
     * isPrimary is true for all mice buttons, whereas every touch point
     * is regarded as its own input. So subsequent concurrent touch points
     * will be false.
     *
     * Specifically match against false here as incomplete versions of
     * PointerEvents in very old browser might have it set as undefined.
     */
    return event.isPrimary !== false;
  }
};

function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
const addPointerInfo = handler => {
  return event => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => v => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);

function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
const globalHorizontalLock = createLock("dragHorizontal");
const globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
  let lock = false;
  if (drag === "y") {
    lock = globalVerticalLock();
  } else if (drag === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      // Release the locks because we don't use them
      if (openHorizontal) openHorizontal();
      if (openVertical) openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  // Check the gesture lock - if we get it, it means no drag gesture is active
  // and we can safely fire the tap gesture.
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock) return true;
  openGestureLock();
  return false;
}

class Feature {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {}
}

function createRenderStep(runNextFrame) {
  /**
   * We create and reuse two arrays, one to queue jobs for the current frame
   * and one for the next. We reuse to avoid triggering GC after x frames.
   */
  let toRun = [];
  let toRunNextFrame = [];
  /**
   *
   */
  let numToRun = 0;
  /**
   * Track whether we're currently processing jobs in this step. This way
   * we can decide whether to schedule new jobs for this frame or next.
   */
  let isProcessing = false;
  let flushNextFrame = false;
  /**
   * A set of processes which were marked keepAlive when scheduled.
   */
  const toKeepAlive = new WeakSet();
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive) toKeepAlive.add(callback);
      // If the buffer doesn't already contain this callback, add it
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        // If we're adding it to the currently running buffer, update its measured size
        if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
      }
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: callback => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1) toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: frameData => {
      /**
       * If we're already processing we've probably been triggered by a flushSync
       * inside an existing process. Instead of executing, mark flushNextFrame
       * as true and ensure we flush the following frame at the end of this one.
       */
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      // Clear the next frame list
      toRunNextFrame.length = 0;
      // Execute this frame
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

const frameData = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
};

const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
const stepsOrder = ["read", "update", "preRender", "render", "postRender"];
const steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
const processStep = stepId => steps[stepId].process(frameData);
const processFrame = timestamp => {
  runNextFrame = false;
  frameData.delta = useDefaultElapsed ? 1000 / 60 : Math.max(Math.min(timestamp - frameData.timestamp, maxElapsed), 1);
  frameData.timestamp = timestamp;
  frameData.isProcessing = true;
  stepsOrder.forEach(processStep);
  frameData.isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    requestAnimationFrame(processFrame);
  }
};
const startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!frameData.isProcessing) requestAnimationFrame(processFrame);
};
const frame = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process, keepAlive = false, immediate = false) => {
    if (!runNextFrame) startLoop();
    return step.schedule(process, keepAlive, immediate);
  };
  return acc;
}, {});
function cancelFrame(process) {
  stepsOrder.forEach(key => steps[key].cancel(process));
}

function addHoverEvent(node, isActive) {
  const eventName = "pointer" + (isActive ? "enter" : "leave");
  const callbackName = "onHover" + (isActive ? "Start" : "End");
  const handleEvent = (event, info) => {
    if (event.type === "touch" || isDragActive()) return;
    const props = node.getProps();
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", isActive);
    }
    if (props[callbackName]) {
      frame.update(() => props[callbackName](event, info));
    }
  };
  return addPointerEvent(node.current, eventName, handleEvent, {
    passive: !node.getProps()[callbackName]
  });
}
class HoverGesture extends Feature {
  mount() {
    this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
  }
  unmount() {}
}

class FocusGesture extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    /**
     * If this element doesn't match focus-visible then don't
     * apply whileHover. But, if matches throws that focus-visible
     * is not a valid selector then in that browser outline styles will be applied
     * to the element by default and we want to match that behaviour with whileFocus.
     */
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

const noop = any => any;

function fireSyntheticPointerEvent(name, handler) {
  if (!handler) return;
  const syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
class PressGesture extends Feature {
  constructor() {
    super(...arguments);
    this.removeStartListeners = noop;
    this.removeEndListeners = noop;
    this.removeAccessibleListeners = noop;
    this.startPointerPress = (startEvent, startInfo) => {
      this.removeEndListeners();
      if (this.isPressing) return;
      const props = this.node.getProps();
      const endPointerPress = (endEvent, endInfo) => {
        if (!this.checkPressEnd()) return;
        const {
          onTap,
          onTapCancel
        } = this.node.getProps();
        frame.update(() => {
          /**
           * We only count this as a tap gesture if the event.target is the same
           * as, or a child of, this component's element
           */
          !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
        });
      };
      const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, {
        passive: !(props.onTap || props["onPointerUp"])
      });
      const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), {
        passive: !(props.onTapCancel || props["onPointerCancel"])
      });
      this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
      this.startPress(startEvent, startInfo);
    };
    this.startAccessiblePress = () => {
      const handleKeydown = keydownEvent => {
        if (keydownEvent.key !== "Enter" || this.isPressing) return;
        const handleKeyup = keyupEvent => {
          if (keyupEvent.key !== "Enter" || !this.checkPressEnd()) return;
          fireSyntheticPointerEvent("up", (event, info) => {
            const {
              onTap
            } = this.node.getProps();
            if (onTap) {
              frame.update(() => onTap(event, info));
            }
          });
        };
        this.removeEndListeners();
        this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
        fireSyntheticPointerEvent("down", (event, info) => {
          this.startPress(event, info);
        });
      };
      const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
      const handleBlur = () => {
        if (!this.isPressing) return;
        fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
      };
      const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
      this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
  }
  startPress(event, info) {
    this.isPressing = true;
    const {
      onTapStart,
      whileTap
    } = this.node.getProps();
    /**
     * Ensure we trigger animations before firing event callback
     */
    if (whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", true);
    }
    if (onTapStart) {
      frame.update(() => onTapStart(event, info));
    }
  }
  checkPressEnd() {
    this.removeEndListeners();
    this.isPressing = false;
    const props = this.node.getProps();
    if (props.whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", false);
    }
    return !isDragActive();
  }
  cancelPress(event, info) {
    if (!this.checkPressEnd()) return;
    const {
      onTapCancel
    } = this.node.getProps();
    if (onTapCancel) {
      frame.update(() => onTapCancel(event, info));
    }
  }
  mount() {
    const props = this.node.getProps();
    const removePointerListener = addPointerEvent(this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(props.onTapStart || props["onPointerStart"])
    });
    const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
  }
  unmount() {
    this.removeStartListeners();
    this.removeEndListeners();
    this.removeAccessibleListeners();
  }
}

/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = entry => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
const fireAllObserverCallbacks = entries => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({
  root,
  ...options
}) {
  const lookupRoot = root || document;
  /**
   * If we don't have an observer lookup map for this root, create one.
   */
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  /**
   * If we don't have an observer for this combination of root and settings,
   * create one.
   */
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
      root,
      ...options
    });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

const thresholdNames = {
  some: 0,
  all: 1
};
class InViewFeature extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const {
      viewport = {}
    } = this.node.getProps();
    const {
      root,
      margin: rootMargin,
      amount = "some",
      once
    } = viewport;
    const options = {
      root: root ? root.current : undefined,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = entry => {
      const {
        isIntersecting
      } = entry;
      /**
       * If there's been no change in the viewport state, early return.
       */
      if (this.isInView === isIntersecting) return;
      this.isInView = isIntersecting;
      /**
       * Handle hasEnteredView. If this is only meant to run once, and
       * element isn't visible, early return. Otherwise set hasEnteredView to true.
       */
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      /**
       * Use the latest committed props rather than the ones in scope
       * when this observer is created
       */
      const {
        onViewportEnter,
        onViewportLeave
      } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined") return;
    const {
      props,
      prevProps
    } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {}
}
function hasViewportOptionChanged({
  viewport = {}
}, {
  viewport: prevViewport = {}
} = {}) {
  return name => viewport[name] !== prevViewport[name];
}

const gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  const prevLength = prev.length;
  if (prevLength !== next.length) return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}

/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
  const current = {};
  visualElement.values.forEach((value, key) => current[key] = value.get());
  return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity$1(visualElement) {
  const velocity = {};
  visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, getCurrent(visualElement), getVelocity$1(visualElement));
}

const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

let warning = noop;
let invariant = noop;
if (process.env.NODE_ENV !== "production") {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
const secondsToMilliseconds = seconds => seconds * 1000;
const millisecondsToSeconds = milliseconds => milliseconds / 1000;

const instantAnimationState = {
  current: false
};

const isBezierDefinition = easing => Array.isArray(easing) && typeof easing[0] === "number";

function isWaapiSupportedEasing(easing) {
  return Boolean(!easing || typeof easing === "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (!easing) return undefined;
  return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}

function animateStyle(element, valueName, keyframes, {
  delay = 0,
  duration,
  repeat = 0,
  repeatType = "loop",
  ease,
  times
} = {}) {
  const keyframeOptions = {
    [valueName]: keyframes
  };
  if (times) keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease);
  /**
   * If this is an easing array, apply to keyframes, not animation as a whole
   */
  if (Array.isArray(easing)) keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

const featureTests = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
};
const results = {};
const supports = {};
/**
 * Generate features tests that cache their results.
 */
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === undefined) results[key] = featureTests[key]();
    return results[key];
  };
}

function getFinalKeyframe(keyframes, {
  repeat,
  repeatType = "loop"
}) {
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : keyframes.length - 1;
  return keyframes[index];
}

/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0.0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  // If this is a linear gradient, return linear easing
  if (mX1 === mY1 && mX2 === mY2) return noop;
  const getTForX = aX => binarySubdivide(aX, 0, 1, mX1, mX2);
  // If animation is at start/end, return t without easing
  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

const easeIn = cubicBezier(0.42, 0, 1, 1);
const easeOut = cubicBezier(0, 0, 0.58, 1);
const easeInOut = cubicBezier(0.42, 0, 0.58, 1);

const isEasingArray = ease => {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = easing => p => 1 - easing(1 - p);

const circIn = p => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circOut);

const backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
const backIn = reverseEasing(backOut);
const backInOut = mirrorEasing(backIn);

const anticipate = p => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

const easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
const easingDefinitionToFunction = definition => {
  if (Array.isArray(definition)) {
    // If cubic bezier definition, create bezier curve
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    // Else lookup from table
    invariant(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};

/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
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

const clampRgbUnit = v => clamp(0, 255, v);
const rgbUnit = {
  ...number,
  transform: v => Math.round(clampRgbUnit(v))
};
const rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({
    red,
    green,
    blue,
    alpha: alpha$1 = 1
  }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  // If we have 6 characters, ie #FF0000
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
    // Or we have 3 characters, ie #F00
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
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
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

const hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({
    hue,
    saturation,
    lightness,
    alpha: alpha$1 = 1
  }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

const color = {
  test: v => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: v => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: v => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mix = (from, to, progress) => -progress * from + progress * to + from;

// Adapted from https://gist.github.com/mjackson/5311256
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

// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = v => colorTypes.find(type => type.test(v));
function asRGBA(color) {
  const type = getColorType(color);
  invariant(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
  let model = type.parse(color);
  if (type === hsla) {
    // TODO Remove this cast - needed since Framer Motion's stricter typing
    model = hslaToRgba(model);
  }
  return model;
}
const mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  const blended = {
    ...fromRGBA
  };
  return v => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

function test(v) {
  var _a, _b;
  return isNaN(v) && isString(v) && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
const cssVarTokeniser = {
  regex: cssVariableRegex,
  countKey: "Vars",
  token: "${v}",
  parse: noop
};
const colorTokeniser = {
  regex: colorRegex,
  countKey: "Colors",
  token: "${c}",
  parse: color.parse
};
const numberTokeniser = {
  regex: floatRegex,
  countKey: "Numbers",
  token: "${n}",
  parse: number.parse
};
function tokenise(info, {
  regex,
  countKey,
  token,
  parse
}) {
  const matches = info.tokenised.match(regex);
  if (!matches) return;
  info["num" + countKey] = matches.length;
  info.tokenised = info.tokenised.replace(regex, token);
  info.values.push(...matches.map(parse));
}
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const info = {
    value: originalValue,
    tokenised: originalValue,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  if (info.value.includes("var(--")) tokenise(info, cssVarTokeniser);
  tokenise(info, colorTokeniser);
  tokenise(info, numberTokeniser);
  return info;
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const {
    values,
    numColors,
    numVars,
    tokenised
  } = analyseComplexValue(source);
  const numValues = values.length;
  return v => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      if (i < numVars) {
        output = output.replace(cssVarTokeniser.token, v[i]);
      } else if (i < numVars + numColors) {
        output = output.replace(colorTokeniser.token, color.transform(v[i]));
      } else {
        output = output.replace(numberTokeniser.token, sanitize(v[i]));
      }
    }
    return output;
  };
}
const convertNumbersToZero = v => typeof v === "number" ? 0 : v;
function getAnimatableNone$1(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone: getAnimatableNone$1
};

const mixImmediate = (origin, target) => p => `${p > 0 ? target : origin}`;
function getMixer(origin, target) {
  if (typeof origin === "number") {
    return v => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return origin.startsWith("var(") ? mixImmediate(origin, target) : mixComplex(origin, target);
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
  const output = {
    ...origin,
    ...target
  };
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
const mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.numVars === targetStats.numVars && originStats.numColors === targetStats.numColors && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.values, targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return mixImmediate(origin, target);
  }
};

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
const progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

const mixNumber = (from, to) => p => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    return color.test(v) ? mixColor : mixComplex;
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
  return mixNumber;
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] || noop : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, {
  clamp: isClamp = true,
  ease,
  mixer
} = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  /**
   * If we're only provided a single input, we can just make a function
   * that returns the output.
   */
  if (inputLength === 1) return () => output[0];
  // If input runs highest -> lowest, reverse both arrays
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const numMixers = mixers.length;
  const interpolator = v => {
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1]) break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? v => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mix(min, 1, offsetProgress));
  }
}

function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

function convertOffsetToTimes(offset, duration) {
  return offset.map(o => o * duration);
}

function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({
  duration = 300,
  keyframes: keyframeValues,
  times,
  ease = "easeInOut"
}) {
  /**
   * Easing functions can be externally defined as strings. Here we convert them
   * into actual functions.
   */
  const easingFunctions = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  /**
   * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
   * to reduce GC during animation.
   */
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  /**
   * Create a times array based on the provided 0-1 offsets
   */
  const absoluteTimes = convertOffsetToTimes(
  // Only use the provided offsets if they're the correct length
  // TODO Maybe we should warn here if there's a length mismatch
  times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: t => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration$1 = 10.0;
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
  warning(duration <= secondsToMilliseconds(maxDuration$1), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  /**
   * Restrict dampingRatio and duration to within acceptable ranges.
   */
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration$1, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    /**
     * Underdamped spring
     */
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
    /**
     * Critically-damped spring
     */
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
  duration = secondsToMilliseconds(duration);
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
  let springOptions = {
    velocity: 0.0,
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    isResolvedFromDuration: false,
    ...options
  };
  // stiffness/damping/mass overrides duration/bounce
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = {
      ...springOptions,
      ...derived,
      velocity: 0.0,
      mass: 1.0
    };
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring({
  keyframes,
  restDelta,
  restSpeed,
  ...options
}) {
  const origin = keyframes[0];
  const target = keyframes[keyframes.length - 1];
  /**
   * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
   * to reduce GC during animation.
   */
  const state = {
    done: false,
    value: origin
  };
  const {
    stiffness,
    damping,
    mass,
    velocity,
    duration,
    isResolvedFromDuration
  } = getSpringOptions(options);
  const initialVelocity = velocity ? -millisecondsToSeconds(velocity) : 0.0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  /**
   * If we're working on a granular scale, use smaller defaults for determining
   * when the spring is finished.
   *
   * These defaults have been selected emprically based on what strikes a good
   * ratio between feeling good and finishing as soon as changes are imperceptible.
   */
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDelta || (restDelta = isGranularScale ? 0.005 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    // Underdamped spring
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    // Critically damped spring
    resolveSpring = t => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    // Overdamped spring
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      // When performing sinh or cosh values can hit Infinity so we cap them here
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  return {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: t => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = initialVelocity;
        if (t !== 0) {
          /**
           * We only need to calculate velocity for under-damped springs
           * as over- and critically-damped springs can't overshoot, so
           * checking only for displacement is enough.
           */
          if (dampingRatio < 1) {
            currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
          } else {
            currentVelocity = 0;
          }
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    }
  };
}

function inertia({
  keyframes,
  velocity = 0.0,
  power = 0.8,
  timeConstant = 325,
  bounceDamping = 10,
  bounceStiffness = 500,
  modifyTarget,
  min,
  max,
  restDelta = 0.5,
  restSpeed
}) {
  const origin = keyframes[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = v => min !== undefined && v < min || max !== undefined && v > max;
  const nearestBoundary = v => {
    if (min === undefined) return max;
    if (max === undefined) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
  /**
   * If the target has changed we need to re-calculate the amplitude, otherwise
   * the animation will start from the wrong position.
   */
  if (target !== ideal) amplitude = target - origin;
  const calcDelta = t => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = t => target + calcDelta(t);
  const applyFriction = t => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  /**
   * Ideally this would resolve for t in a stateless way, we could
   * do that by always precalculating the animation but as we know
   * this will be done anyway we can assume that spring will
   * be discovered during that.
   */
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = t => {
    if (!isOutOfBounds(state.value)) return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: t => {
      /**
       * We need to resolve the friction to figure out if we need a
       * spring but we don't want to do this twice per frame. So here
       * we flag if we updated for this frame and later if we did
       * we can skip doing it again.
       */
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === undefined) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      /**
       * If we have a spring and the provided t is beyond the moment the friction
       * animation crossed the min/max boundary, use the spring.
       */
      if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

const frameloopDriver = update => {
  const passTimestamp = ({
    timestamp
  }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : performance.now()
  };
};

/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

const types = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes: keyframes,
  spring
};
/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */
function animateValue({
  autoplay = true,
  delay = 0,
  driver = frameloopDriver,
  keyframes: keyframes$1,
  type = "keyframes",
  repeat = 0,
  repeatDelay = 0,
  repeatType = "loop",
  onPlay,
  onStop,
  onComplete,
  onUpdate,
  ...options
}) {
  let speed = 1;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  /**
   * Create a new finished Promise every time we enter the
   * finished state and resolve the old Promise. This is
   * WAAPI-compatible behaviour.
   */
  const updateFinishedPromise = () => {
    resolveFinishedPromise && resolveFinishedPromise();
    currentFinishedPromise = new Promise(resolve => {
      resolveFinishedPromise = resolve;
    });
  };
  // Create the first finished promise
  updateFinishedPromise();
  let animationDriver;
  const generatorFactory = types[type] || keyframes;
  /**
   * If this isn't the keyframes generator and we've been provided
   * strings as keyframes, we need to interpolate these.
   * TODO: Support velocity for units and complex value types/
   */
  let mapNumbersToKeyframes;
  if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
    mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
      clamp: false
    });
    keyframes$1 = [0, 100];
  }
  const generator = generatorFactory({
    ...options,
    keyframes: keyframes$1
  });
  let mirroredGenerator;
  if (repeatType === "mirror") {
    mirroredGenerator = generatorFactory({
      ...options,
      keyframes: [...keyframes$1].reverse(),
      velocity: -(options.velocity || 0)
    });
  }
  let playState = "idle";
  let holdTime = null;
  let startTime = null;
  let cancelTime = null;
  /**
   * If duration is undefined and we have repeat options,
   * we need to calculate a duration from the generator.
   *
   * We set it to the generator itself to cache the duration.
   * Any timeline resolver will need to have already precalculated
   * the duration by this step.
   */
  if (generator.calculatedDuration === null && repeat) {
    generator.calculatedDuration = calcGeneratorDuration(generator);
  }
  const {
    calculatedDuration
  } = generator;
  let resolvedDuration = Infinity;
  let totalDuration = Infinity;
  if (calculatedDuration !== null) {
    resolvedDuration = calculatedDuration + repeatDelay;
    totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
  }
  let currentTime = 0;
  const tick = timestamp => {
    if (startTime === null) return;
    /**
     * requestAnimationFrame timestamps can come through as lower than
     * the startTime as set by performance.now(). Here we prevent this,
     * though in the future it could be possible to make setting startTime
     * a pending operation that gets resolved here.
     */
    if (speed > 0) startTime = Math.min(startTime, timestamp);
    if (holdTime !== null) {
      currentTime = holdTime;
    } else {
      currentTime = (timestamp - startTime) * speed;
    }
    // Rebase on delay
    const timeWithoutDelay = currentTime - delay;
    const isInDelayPhase = timeWithoutDelay < 0;
    currentTime = Math.max(timeWithoutDelay, 0);
    /**
     * If this animation has finished, set the current time
     * to the total duration.
     */
    if (playState === "finished" && holdTime === null) {
      currentTime = totalDuration;
    }
    let elapsed = currentTime;
    let frameGenerator = generator;
    if (repeat) {
      /**
       * Get the current progress (0-1) of the animation. If t is >
       * than duration we'll get values like 2.5 (midway through the
       * third iteration)
       */
      const progress = currentTime / resolvedDuration;
      /**
       * Get the current iteration (0 indexed). For instance the floor of
       * 2.5 is 2.
       */
      let currentIteration = Math.floor(progress);
      /**
       * Get the current progress of the iteration by taking the remainder
       * so 2.5 is 0.5 through iteration 2
       */
      let iterationProgress = progress % 1.0;
      /**
       * If iteration progress is 1 we count that as the end
       * of the previous iteration.
       */
      if (!iterationProgress && progress >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      /**
       * Reverse progress if we're not running in "normal" direction
       */
      const iterationIsOdd = Boolean(currentIteration % 2);
      if (iterationIsOdd) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      let p = clamp(0, 1, iterationProgress);
      if (currentTime > totalDuration) {
        p = repeatType === "reverse" && iterationIsOdd ? 1 : 0;
      }
      elapsed = p * resolvedDuration;
    }
    /**
     * If we're in negative time, set state as the initial keyframe.
     * This prevents delay: x, duration: 0 animations from finishing
     * instantly.
     */
    const state = isInDelayPhase ? {
      done: false,
      value: keyframes$1[0]
    } : frameGenerator.next(elapsed);
    if (mapNumbersToKeyframes) {
      state.value = mapNumbersToKeyframes(state.value);
    }
    let {
      done
    } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = currentTime >= totalDuration;
    }
    const isAnimationFinished = holdTime === null && (playState === "finished" || playState === "running" && done || speed < 0 && currentTime <= 0);
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      finish();
    }
    return state;
  };
  const stopAnimationDriver = () => {
    animationDriver && animationDriver.stop();
    animationDriver = undefined;
  };
  const cancel = () => {
    playState = "idle";
    stopAnimationDriver();
    updateFinishedPromise();
    startTime = cancelTime = null;
  };
  const finish = () => {
    playState = "finished";
    onComplete && onComplete();
    stopAnimationDriver();
    updateFinishedPromise();
  };
  const play = () => {
    if (hasStopped) return;
    if (!animationDriver) animationDriver = driver(tick);
    const now = animationDriver.now();
    onPlay && onPlay();
    if (holdTime !== null) {
      startTime = now - holdTime;
    } else if (!startTime || playState === "finished") {
      startTime = now;
    }
    cancelTime = startTime;
    holdTime = null;
    /**
     * Set playState to running only after we've used it in
     * the previous logic.
     */
    playState = "running";
    animationDriver.start();
  };
  if (autoplay) {
    play();
  }
  const controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    get time() {
      return millisecondsToSeconds(currentTime);
    },
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      currentTime = newTime;
      if (holdTime !== null || !animationDriver || speed === 0) {
        holdTime = newTime;
      } else {
        startTime = animationDriver.now() - newTime / speed;
      }
    },
    get duration() {
      const duration = generator.calculatedDuration === null ? calcGeneratorDuration(generator) : generator.calculatedDuration;
      return millisecondsToSeconds(duration);
    },
    get speed() {
      return speed;
    },
    set speed(newSpeed) {
      if (newSpeed === speed || !animationDriver) return;
      speed = newSpeed;
      controls.time = millisecondsToSeconds(currentTime);
    },
    get state() {
      return playState;
    },
    play,
    pause: () => {
      playState = "paused";
      holdTime = currentTime;
    },
    stop: () => {
      hasStopped = true;
      if (playState === "idle") return;
      playState = "idle";
      onStop && onStop();
      cancel();
    },
    cancel: () => {
      if (cancelTime !== null) tick(cancelTime);
      cancel();
    },
    complete: () => {
      playState = "finished";
    },
    sample: elapsed => {
      startTime = 0;
      return tick(elapsed);
    }
  };
  return controls;
}

/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxDuration = 20000;
const requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" || valueName === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, {
  onUpdate,
  onComplete,
  ...options
}) {
  const canAccelerateAnimation = supports.waapi() && acceleratedValues.has(valueName) && !options.repeatDelay && options.repeatType !== "mirror" && options.damping !== 0 && options.type !== "inertia";
  if (!canAccelerateAnimation) return false;
  /**
   * TODO: Unify with js/index
   */
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  /**
   * Create a new finished Promise every time we enter the
   * finished state and resolve the old Promise. This is
   * WAAPI-compatible behaviour.
   */
  const updateFinishedPromise = () => {
    currentFinishedPromise = new Promise(resolve => {
      resolveFinishedPromise = resolve;
    });
  };
  // Create the first finished promise
  updateFinishedPromise();
  let {
    keyframes,
    duration = 300,
    ease,
    times
  } = options;
  /**
   * If this animation needs pre-generated keyframes then generate.
   */
  if (requiresPregeneratedKeyframes(valueName, options)) {
    const sampleAnimation = animateValue({
      ...options,
      repeat: 0,
      delay: 0
    });
    let state = {
      done: false,
      value: keyframes[0]
    };
    const pregeneratedKeyframes = [];
    /**
     * Bail after 20 seconds of pre-generated keyframes as it's likely
     * we're heading for an infinite loop.
     */
    let t = 0;
    while (!state.done && t < maxDuration) {
      state = sampleAnimation.sample(t);
      pregeneratedKeyframes.push(state.value);
      t += sampleDelta;
    }
    times = undefined;
    keyframes = pregeneratedKeyframes;
    duration = t - sampleDelta;
    ease = "linear";
  }
  const animation = animateStyle(value.owner.current, valueName, keyframes, {
    ...options,
    duration,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: ease,
    times
  });
  const cancelAnimation = () => animation.cancel();
  const safeCancel = () => {
    frame.update(cancelAnimation);
    resolveFinishedPromise();
    updateFinishedPromise();
  };
  /**
   * Prefer the `onfinish` prop as it's more widely supported than
   * the `finished` promise.
   *
   * Here, we synchronously set the provided MotionValue to the end
   * keyframe. If we didn't, when the WAAPI animation is finished it would
   * be removed from the element which would then revert to its old styles.
   */
  animation.onfinish = () => {
    value.set(getFinalKeyframe(keyframes, options));
    onComplete && onComplete();
    safeCancel();
  };
  /**
   * Animation interrupt callback.
   */
  return {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    get time() {
      return millisecondsToSeconds(animation.currentTime || 0);
    },
    set time(newTime) {
      animation.currentTime = secondsToMilliseconds(newTime);
    },
    get speed() {
      return animation.playbackRate;
    },
    set speed(newSpeed) {
      animation.playbackRate = newSpeed;
    },
    get duration() {
      return millisecondsToSeconds(duration);
    },
    play: () => {
      if (hasStopped) return;
      animation.play();
      /**
       * Cancel any pending cancel tasks
       */
      cancelFrame(cancelAnimation);
    },
    pause: () => animation.pause(),
    stop: () => {
      hasStopped = true;
      if (animation.playState === "idle") return;
      /**
       * WAAPI doesn't natively have any interruption capabilities.
       *
       * Rather than read commited styles back out of the DOM, we can
       * create a renderless JS animation and sample it twice to calculate
       * its current value, "previous" value, and therefore allow
       * Motion to calculate velocity for any subsequent animation.
       */
      const {
        currentTime
      } = animation;
      if (currentTime) {
        const sampleAnimation = animateValue({
          ...options,
          autoplay: false
        });
        value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
      }
      safeCancel();
    },
    complete: () => animation.finish(),
    cancel: safeCancel
  };
}

function createInstantAnimation({
  keyframes,
  delay,
  onUpdate,
  onComplete
}) {
  const setValue = () => {
    onUpdate && onUpdate(keyframes[keyframes.length - 1]);
    onComplete && onComplete();
    /**
     * TODO: As this API grows it could make sense to always return
     * animateValue. This will be a bigger project as animateValue
     * is frame-locked whereas this function resolves instantly.
     * This is a behavioural change and also has ramifications regarding
     * assumptions within tests.
     */
    return {
      time: 0,
      speed: 1,
      duration: 0,
      play: noop,
      pause: noop,
      stop: noop,
      then: resolve => {
        resolve();
        return Promise.resolve();
      },
      cancel: noop,
      complete: noop
    };
  };
  return delay ? animateValue({
    keyframes: [0, 1],
    duration: 0,
    delay,
    onComplete: setValue
  }) : setValue();
}

const underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
const criticallyDampedSpring = target => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
const keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
const getDefaultTransition = (valueKey, {
  keyframes
}) => {
  if (keyframes.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
  }
  return ease;
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
const isAnimatable = (key, value) => {
  // If the list of keys tat might be non-animatable grows, replace with Set
  if (key === "zIndex") return false;
  // If it's a number or a keyframes array, we can animate it. We might at some point
  // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
  // but for now lets leave it like this for performance reasons
  if (typeof value === "number" || Array.isArray(value)) return true;
  if (typeof value === "string" && (
  // It's animatable if we have a string
  complex.test(value) || value === "0") &&
  // And it contains numbers and/or colors
  !value.startsWith("url(") // Unless it starts with "url("
  ) {
    return true;
  }
  return false;
};

/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow") return v;
  const [number] = value.match(floatRegex) || [];
  if (!number) return v;
  const unit = value.replace(number, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number !== value) defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = {
  ...complex,
  getAnimatableNone: v => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
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
  filter,
  WebkitFilter: filter
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = key => defaultValueTypes[key];

function getAnimatableNone(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter) defaultValueType = complex;
  // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : undefined;
}

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = v => /^0[^.\s]+$/.test(v);

function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  }
}

function getKeyframes(value, valueName, target, transition) {
  const isTargetAnimatable = isAnimatable(valueName, target);
  let keyframes;
  if (Array.isArray(target)) {
    keyframes = [...target];
  } else {
    keyframes = [null, target];
  }
  const defaultOrigin = transition.from !== undefined ? transition.from : value.get();
  let animatableTemplateValue = undefined;
  const noneKeyframeIndexes = [];
  for (let i = 0; i < keyframes.length; i++) {
    /**
     * Fill null/wildcard keyframes
     */
    if (keyframes[i] === null) {
      keyframes[i] = i === 0 ? defaultOrigin : keyframes[i - 1];
    }
    if (isNone(keyframes[i])) {
      noneKeyframeIndexes.push(i);
    }
    // TODO: Clean this conditional, it works for now
    if (typeof keyframes[i] === "string" && keyframes[i] !== "none" && keyframes[i] !== "0") {
      animatableTemplateValue = keyframes[i];
    }
  }
  if (isTargetAnimatable && noneKeyframeIndexes.length && animatableTemplateValue) {
    for (let i = 0; i < noneKeyframeIndexes.length; i++) {
      const index = noneKeyframeIndexes[i];
      keyframes[index] = getAnimatableNone(valueName, animatableTemplateValue);
    }
  }
  return keyframes;
}

/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({
  when,
  delay: _delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  repeat,
  repeatType,
  repeatDelay,
  from,
  elapsed,
  ...transition
}) {
  return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}

const animateMotionValue = (valueName, value, target, transition = {}) => {
  return onComplete => {
    const valueTransition = getValueTransition(transition, valueName) || {};
    /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */
    const delay = valueTransition.delay || transition.delay || 0;
    /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */
    let {
      elapsed = 0
    } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay);
    const keyframes = getKeyframes(value, valueName, target, valueTransition);
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */
    const originKeyframe = keyframes[0];
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
    const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    let options = {
      keyframes,
      velocity: value.getVelocity(),
      ease: "easeOut",
      ...valueTransition,
      delay: -elapsed,
      onUpdate: v => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      }
    };
    /**
     * If there's no transition defined for this value, we can generate
     * unqiue transition settings for this value.
     */
    if (!isTransitionDefined(valueTransition)) {
      options = {
        ...options,
        ...getDefaultTransition(valueName, options)
      };
    }
    /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */
    if (options.duration) {
      options.duration = secondsToMilliseconds(options.duration);
    }
    if (options.repeatDelay) {
      options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
    }
    if (!isOriginAnimatable || !isTargetAnimatable || instantAnimationState.current || valueTransition.type === false) {
      /**
       * If we can't animate this value, or the global instant animation flag is set,
       * or this is simply defined as an instant transition, return an instant transition.
       */
      return createInstantAnimation(options);
    }
    /**
     * Animate via WAAPI if possible.
     */
    if (value.owner && value.owner.current instanceof HTMLElement && !value.owner.getProps().onUpdate) {
      const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
      if (acceleratedAnimation) return acceleratedAnimation;
    }
    /**
     * If we didn't create an accelerated animation, create a JS animation
     */
    return animateValue(options);
  };
};

function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = v => /^\-?\d*\.?\d+$/.test(v);

function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}

class SubscriptionManager {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions) return;
    if (numSubscriptions === 1) {
      /**
       * If there's only a single handler we can just call it without invoking a loop.
       */
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        /**
         * Check whether the handler exists before firing as it's possible
         * the subscriptions were modified during this loop running.
         */
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}

const warned = new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message)) return;
  console.warn(message);
  if (element) console.warn(element);
  warned.add(message);
}

const isFloat = value => {
  return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(init, options = {}) {
    /**
     * This will be replaced by the build step with the latest version number.
     * When MotionValues are provided to motion components, warn if versions are mixed.
     */
    this.version = "10.12.16";
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
     * Tracks whether this value can output a velocity. Currently this is only true
     * if the value is numerical, but we might be able to widen the scope here and support
     * other value types.
     *
     * @internal
     */
    this.canTrackVelocity = false;
    /**
     * An object containing a SubscriptionManager for each active event.
     */
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      this.prev = this.current;
      this.current = v;
      // Update timestamp
      const {
        delta,
        timestamp
      } = frameData;
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        frame.postRender(this.scheduleVelocityCheck);
      }
      // Update update subscribers
      if (this.prev !== this.current && this.events.change) {
        this.events.change.notify(this.current);
      }
      // Update velocity subscribers
      if (this.events.velocityChange) {
        this.events.velocityChange.notify(this.getVelocity());
      }
      // Update render subscribers
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
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
    this.scheduleVelocityCheck = () => frame.postRender(this.velocityCheck);
    /**
     * Updates `prev` with `current` if the value hasn't been updated this frame.
     * This ensures velocity calculations return `0`.
     *
     * This is an instanced and bound function to prevent generating a new
     * function once per frame.
     *
     * @internal
     */
    this.velocityCheck = ({
      timestamp
    }) => {
      if (timestamp !== this.lastUpdated) {
        this.prev = this.current;
        if (this.events.velocityChange) {
          this.events.velocityChange.notify(this.getVelocity());
        }
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
    this.owner = options.owner;
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
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
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
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    if (process.env.NODE_ENV !== "production") {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        /**
         * If we have no more change listeners by the start
         * of the next frame, stop active animations.
         */
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
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
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = prev;
    this.timeDelta = delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v) {
    this.updateAndNotify(v);
    this.prev = v;
    this.stop();
    if (this.stopPassiveEffect) this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
    return this.canTrackVelocity ?
    // These casts could be avoided if parseFloat would be typed better
    velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
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
  start(startAnimation) {
    this.stop();
    return new Promise(resolve => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
}
function motionValue(init, options) {
  return new MotionValue(init, options);
}

/**
 * Tests a provided value against a ValueType
 */
const testValueType = v => type => type.test(v);

/**
 * ValueType for "auto"
 */
const auto = {
  test: v => v === "auto",
  parse: v => v
};

/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = v => dimensionValueTypes.find(testValueType(v));

/**
 * A list of all ValueTypes
 */
const valueTypes = [...dimensionValueTypes, color, complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = v => valueTypes.find(testValueType(v));

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
  const resolved = resolveVariant(visualElement, definition);
  let {
    transitionEnd = {},
    transition = {},
    ...target
  } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
  target = {
    ...target,
    ...transitionEnd
  };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b;
  const newValueKeys = Object.keys(target).filter(key => !visualElement.hasValue(key));
  const numNewValues = newValueKeys.length;
  if (!numNewValues) return;
  for (let i = 0; i < numNewValues; i++) {
    const key = newValueKeys[i];
    const targetValue = target[key];
    let value = null;
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
      value = getAnimatableNone(key, targetValue);
    }
    visualElement.addValue(key, motionValue(value, {
      owner: visualElement
    }));
    if (origin[key] === undefined) {
      origin[key] = value;
    }
    if (value !== null) visualElement.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition) return;
  const valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
  const origin = {};
  for (const key in target) {
    const transitionOrigin = getOriginFromTransition(key, transition);
    if (transitionOrigin !== undefined) {
      origin[key] = transitionOrigin;
    } else {
      const value = visualElement.getValue(key);
      if (value) {
        origin[key] = value.get();
      }
    }
  }
  return origin;
}

/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({
  protectedKeys,
  needsAnimating
}, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, definition, {
  delay = 0,
  transitionOverride,
  type
} = {}) {
  let {
    transition = visualElement.getDefaultTransition(),
    transitionEnd,
    ...target
  } = visualElement.makeTargetAnimatable(definition);
  const willChange = visualElement.getValue("willChange");
  if (transitionOverride) transition = transitionOverride;
  const animations = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key);
    const valueTarget = target[key];
    if (!value || valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay,
      elapsed: 0,
      ...transition
    };
    /**
     * If this is the first time a value is being animated, check
     * to see if we're handling off from an existing animation.
     */
    if (window.HandoffAppearAnimations && !value.hasAnimated) {
      const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        valueTransition.elapsed = window.HandoffAppearAnimations(appearId, key, value, frame);
      }
    }
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? {
      type: false
    } : valueTransition));
    const animation = value.animation;
    if (isWillChangeMotionValue(willChange)) {
      willChange.add(key);
      animation.then(() => willChange.remove(key));
    }
    animations.push(animation);
  }
  if (transitionEnd) {
    Promise.all(animations).then(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
  }
  return animations;
}

function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, options.custom);
  let {
    transition = visualElement.getDefaultTransition() || {}
  } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  /**
   * If we have a variant, create a callback that runs it as an animation.
   * Otherwise, we resolve a Promise immediately for a composable no-op.
   */
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  /**
   * If we have children, create a callback that runs all their animations.
   * Otherwise, we resolve a Promise immediately for a composable no-op.
   */
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const {
      delayChildren = 0,
      staggerChildren,
      staggerDirection
    } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  /**
   * If the transition explicitly defines a "when" option, we need to resolve either
   * this animation or all children animations before playing the other.
   */
  const {
    when
  } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations = definition.map(variant => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => visualElement.notify("AnimationComplete", definition));
}

const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return animations => Promise.all(animations.map(({
    animation,
    options
  }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate = animateList(visualElement);
  const state = createState();
  let isInitialRender = true;
  /**
   * This function will be used to reduce the animation definitions for
   * each active animation type into an object of resolved values for it.
   */
  const buildResolvedTypeValues = (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition);
    if (resolved) {
      const {
        transition,
        transitionEnd,
        ...target
      } = resolved;
      acc = {
        ...acc,
        ...target,
        ...transitionEnd
      };
    }
    return acc;
  };
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
    const props = visualElement.getProps();
    const context = visualElement.getVariantContext(true) || {};
    /**
     * A list of animations that we'll build into as we iterate through the animation
     * types. This will get executed at the end of the function.
     */
    const animations = [];
    /**
     * Keep track of which values have been removed. Then, as we hit lower priority
     * animation types, we can check if they contain removed values and animate to that.
     */
    const removedKeys = new Set();
    /**
     * A dictionary of all encountered keys. This is an object to let us build into and
     * copy it without iteration. Each time we hit an animation type we set its protected
     * keys - the keys its not allowed to animate - to the latest version of this object.
     */
    let encounteredKeys = {};
    /**
     * If a variant has been removed at a given index, and this component is controlling
     * variant animations, we want to ensure lower-priority variants are forced to animate.
     */
    let removedVariantIndex = Infinity;
    /**
     * Iterate through all animation types in reverse priority order. For each, we want to
     * detect which values it's handling and whether or not they've changed (and therefore
     * need to be animated). If any values have been removed, we want to detect those in
     * lower priority props and flag for animation.
     */
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== undefined ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      /**
       * If this type has *just* changed isActive status, set activeDelta
       * to that status. Otherwise set to null.
       */
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i;
      /**
       * If this prop is an inherited variant, rather than been set directly on the
       * component itself, we want to make sure we allow the parent to trigger animations.
       *
       * TODO: Can probably change this to a !isControllingVariants check
       */
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
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
      typeState.protectedKeys = {
        ...encounteredKeys
      };
      // Check if we can skip analysing this prop early
      if (
      // If it isn't active and hasn't *just* been set as inactive
      !typeState.isActive && activeDelta === null ||
      // If we didn't and don't have any defined prop for this animation type
      !prop && !typeState.prevProp ||
      // Or if the prop doesn't define an animation
      isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      /**
       * As we go look through the values defined on this type, if we detect
       * a changed value or a value that was removed in a higher priority, we set
       * this to true and add this prop to the animation list.
       */
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange ||
      // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant ||
      // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      /**
       * As animations can be set as variant lists, variants or target objects, we
       * coerce everything to an array if it isn't one already
       */
      const definitionList = Array.isArray(prop) ? prop : [prop];
      /**
       * Build an object of all the resolved values. We'll use this in the subsequent
       * animateChanges calls to determine whether a value has changed.
       */
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
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
      const {
        prevResolvedValues = {}
      } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = key => {
        shouldAnimateType = true;
        removedKeys.delete(key);
        typeState.needsAnimating[key] = true;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        // If we've already handled this we can just skip ahead
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
            if (!shallowCompare(next, prev) || variantDidChange) {
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
        encounteredKeys = {
          ...encounteredKeys,
          ...resolvedValues
        };
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
        animations.push(...definitionList.map(animation => ({
          animation: animation,
          options: {
            type,
            ...options
          }
        })));
      }
    }
    /**
     * If there are some removed value that haven't been dealt with,
     * we need to create a new animation that falls back either to the value
     * defined in the style prop, or the last read value.
     */
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach(key => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        if (fallbackTarget !== undefined) {
          fallbackAnimation[key] = fallbackTarget;
        }
      });
      animations.push({
        animation: fallbackAnimation
      });
    }
    let shouldAnimate = Boolean(animations.length);
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
    var _a;
    // If the active state hasn't changed, we can safely do nothing here
    if (state[type].isActive === isActive) return Promise.resolve();
    // Propagate active change to children
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(child => {
      var _a;
      return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations = animateChanges(options, type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

class AnimationFeature extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const {
      animate
    } = this.node.getProps();
    this.unmount();
    if (isAnimationControls(animate)) {
      this.unmount = animate.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const {
      animate
    } = this.node.getProps();
    const {
      animate: prevAnimate
    } = this.node.prevProps || {};
    if (animate !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {}
}

let id$1 = 0;
class ExitAnimationFeature extends Feature {
  constructor() {
    super(...arguments);
    this.id = id$1++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent,
      onExitComplete,
      custom
    } = this.node.presenceContext;
    const {
      isPresent: prevIsPresent
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent, {
      custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom
    });
    if (onExitComplete && !isPresent) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const {
      register
    } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {}
}

const animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  // Multi-dimensional
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

/**
 * @internal
 */
class PanSession {
  constructor(event, handlers, {
    transformPagePoint
  } = {}) {
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
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const info = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      // Only start panning if the offset is larger than 3 pixels. If we make it
      // any larger than this we'll want to reset the pointer history
      // on the first update to avoid visual snapping to the cursoe.
      const isDistancePastThreshold = distance2D(info.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      const {
        point
      } = info;
      const {
        timestamp
      } = frameData;
      this.history.push({
        ...point,
        timestamp
      });
      const {
        onStart,
        onMove
      } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info);
    };
    this.handlePointerMove = (event, info) => {
      this.lastMoveEvent = event;
      this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
      // Throttle mouse move event to once per frame
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event, info) => {
      this.end();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const {
        onEnd,
        onSessionEnd
      } = this.handlers;
      const panInfo = getPanInfo(event.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event, panInfo);
      }
      onSessionEnd && onSessionEnd(event, panInfo);
    };
    // If we have more than one touch, don't start detecting this gesture
    if (!isPrimaryPointer(event)) return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const {
      point
    } = initialInfo;
    const {
      timestamp
    } = frameData;
    this.history = [{
      ...point,
      timestamp
    }];
    const {
      onSessionStart
    } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
}
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
function getPanInfo({
  point
}, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
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
  const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  const currentVelocity = {
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

function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale)) delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
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
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, {
  min,
  max
}, elastic) {
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
function calcRelativeConstraints(layoutBox, {
  top,
  left,
  bottom,
  right
}) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  // If the constraints axis is actually smaller than the layout axis then we can
  // flip the constraints
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return {
    min,
    max
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
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
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
  const relativeConstraints = {};
  if (constraints.min !== undefined) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== undefined) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic = defaultElastic) {
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
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

const createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
const createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
const createAxis = () => ({
  min: 0,
  max: 0
});
const createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({
  top,
  left,
  right,
  bottom
}) {
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
function convertBoxToBoundingBox({
  x,
  y
}) {
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
  const topLeft = transformPoint({
    x: point.left,
    y: point.top
  });
  const bottomRight = transformPoint({
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

function isIdentityScale(scale) {
  return scale === undefined || scale === 1;
}
function hasScale({
  scale,
  scaleX,
  scaleY
}) {
  return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale * distanceFromOrigin;
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
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, {
  x,
  y
}) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength) return;
  // Reset the treeScale
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    /**
     * TODO: Prefer to remove this, but currently we have motion components with
     * display: contents in Framer.
     */
    const instance = node.instance;
    if (instance && instance.style && instance.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      // Incoporate each ancestor's scale into a culmulative treeScale for this component
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      // Apply each ancestor's calculated delta into this component's recorded layout box
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  /**
   * Snap tree scale back to 1 if it's within a non-perceivable threshold.
   * This will help reduce useless scales getting rendered.
   */
  treeScale.x = snapToDefault(treeScale.x);
  treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale) {
  if (Number.isInteger(scale)) return scale;
  return scale > 1.0000000000001 || scale < 0.999999999999 ? scale : 1;
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
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
  const axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
  const originPoint = mix(axis.min, axis.max, axisOrigin);
  // Apply the axis delta to the final axis
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys$1 = ["x", "scaleX", "originX"];
const yKeys$1 = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys$1);
  transformAxis(box.y, transform, yKeys$1);
}

function measureViewportBox(instance, transformPoint) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const {
    scroll
  } = rootProjectionNode;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}

const elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: PointerEvent
class VisualElementDragControls {
  constructor(visualElement) {
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
  start(originEvent, {
    snapToCursor = false
  } = {}) {
    /**
     * Don't start dragging if this component is exiting
     */
    const {
      presenceContext
    } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false) return;
    const onSessionStart = event => {
      // Stop any animations on both axis values immediately. This allows the user to throw and catch
      // the component.
      this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
      const {
        drag,
        dragPropagation,
        onDragStart
      } = this.getProps();
      if (drag && !dragPropagation) {
        if (this.openGlobalLock) this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag);
        // If we don 't have the lock, don't start dragging
        if (!this.openGlobalLock) return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = undefined;
      }
      /**
       * Record gesture origin
       */
      eachAxis(axis => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        /**
         * If the MotionValue is a percentage value convert to px
         */
        if (percent.test(current)) {
          const {
            projection
          } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      // Fire onDragStart event
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      const {
        animationState
      } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      // latestPointerEvent = event
      const {
        dragPropagation,
        dragDirectionLock,
        onDirectionLock,
        onDrag
      } = this.getProps();
      // If we didn't successfully receive the gesture lock, early return.
      if (!dragPropagation && !this.openGlobalLock) return;
      const {
        offset
      } = info;
      // Attempt to detect drag direction if directionLock is true
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        // If we've successfully set a direction, notify listener
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      // Update each point with the latest position
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      /**
       * Ideally we would leave the renderer to fire naturally at the end of
       * this frame but if the element is about to change layout as the result
       * of a re-render we want to ensure the browser can read the latest
       * bounding box to ensure the pointer and element don't fall out of sync.
       */
      this.visualElement.render();
      /**
       * This must fire after the render call as it might trigger a state
       * change which itself might trigger a layout update.
       */
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint()
    });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging) return;
    const {
      velocity
    } = info;
    this.startAnimation(velocity);
    const {
      onDragEnd
    } = this.getProps();
    if (onDragEnd) {
      frame.update(() => onDragEnd(event, info));
    }
  }
  cancel() {
    this.isDragging = false;
    const {
      projection,
      animationState
    } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = undefined;
    const {
      dragPropagation
    } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset) {
    const {
      drag
    } = this.getProps();
    // If we're not dragging this axis, do an early return.
    if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    // Apply constraints
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    const {
      dragConstraints,
      dragElastic
    } = this.getProps();
    const {
      layout
    } = this.visualElement.projection || {};
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
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
      eachAxis(axis => {
        if (this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const {
      dragConstraints: constraints,
      onMeasureDragConstraints
    } = this.getProps();
    if (!constraints || !isRefObject(constraints)) return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const {
      projection
    } = this.visualElement;
    // TODO
    if (!projection || !projection.layout) return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    /**
     * If there's an onMeasureDragConstraints listener we call it and
     * if different constraints are returned, set constraints to that
     */
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const {
      drag,
      dragMomentum,
      dragElastic,
      dragTransition,
      dragSnapToOrigin,
      onDragTransitionEnd
    } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis(axis => {
      if (!shouldDrag(axis, drag, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
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
      const bounceStiffness = dragElastic ? 200 : 1000000;
      const bounceDamping = dragElastic ? 40 : 10000000;
      const inertia = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      // If we're not animating on an externally-provided `MotionValue` we can use the
      // component's animation controls which will handle interactions with whileHover (etc),
      // otherwise we just have to animate the `MotionValue` itself.
      return this.startAxisValueAnimation(axis, inertia);
    });
    // Run all animations and then resolve the new drag constraints.
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition));
  }
  stopAnimation() {
    eachAxis(axis => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = "_drag" + axis.toUpperCase();
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
  }
  snapToCursor(point) {
    eachAxis(axis => {
      const {
        drag
      } = this.getProps();
      // If we're not dragging this axis, do an early return.
      if (!shouldDrag(axis, drag, this.currentDirection)) return;
      const {
        projection
      } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const {
          min,
          max
        } = projection.layout.layoutBox[axis];
        axisValue.set(point[axis] - mix(min, max, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag,
      dragConstraints
    } = this.getProps();
    const {
      projection
    } = this.visualElement;
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
    const boxProgress = {
      x: 0,
      y: 0
    };
    eachAxis(axis => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin({
          min: latest,
          max: latest
        }, this.constraints[axis]);
      }
    });
    /**
     * Update the layout of this element and resolve the latest drag constraints
     */
    const {
      transformTemplate
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    /**
     * For each axis, calculate the current progress of the layout axis
     * within the new constraints.
     */
    eachAxis(axis => {
      if (!shouldDrag(axis, drag, null)) return;
      /**
       * Calculate a new transform based on the previous box progress
       */
      const axisValue = this.getAxisMotionValue(axis);
      const {
        min,
        max
      } = this.constraints[axis];
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    /**
     * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
     */
    const stopPointerListener = addPointerEvent(element, "pointerdown", event => {
      const {
        drag,
        dragListener = true
      } = this.getProps();
      drag && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const {
        dragConstraints
      } = this.getProps();
      if (isRefObject(dragConstraints)) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const {
      projection
    } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    /**
     * Attach a window resize listener to scale the draggable target within its defined
     * constraints as the window resizes.
     */
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    /**
     * If the element's layout changes, calculate the delta and apply that to
     * the drag gesture's origin point.
     */
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({
      delta,
      hasLayoutChanged
    }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis(axis => {
          const motionValue = this.getAxisMotionValue(axis);
          if (!motionValue) return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue.set(motionValue.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const {
      drag = false,
      dragDirectionLock = false,
      dragPropagation = false,
      dragConstraints = false,
      dragElastic = defaultElastic,
      dragMomentum = true
    } = props;
    return {
      ...props,
      drag,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
}
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
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

class DragGesture extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    const {
      dragControls
    } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
}

const asyncHandler = handler => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info));
  }
};
class PanGesture extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint()
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart,
      onPanStart,
      onPan,
      onPanEnd
    } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.update(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", event => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
}

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
  const context = React$1.useContext(PresenceContext);
  if (context === null) return [true, null];
  const {
    isPresent,
    onExitComplete,
    register
  } = context;
  // It's safe to call the following hooks conditionally (after an early return) because the context will always
  // either be null or non-null for the lifespan of the component.
  const id = React$1.useId();
  React$1.useEffect(() => register(id), []);
  const safeToRemove = () => onExitComplete && onExitComplete(id);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
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
const correctBorderRadius = {
  correct: (latest, node) => {
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
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

const correctBoxShadow = {
  correct: (latest, {
    treeScale,
    projectionDelta
  }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    // TODO: Doesn't support multiple shadows
    if (shadow.length > 5) return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    // Calculate the overall context scale
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */
    const averageScale = mix(xScale, yScale, 0.5);
    // Blur
    if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
    // Spread
    if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

class MeasureLayoutWithContext extends React$1.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup,
      layoutId
    } = this.props;
    const {
      projection
    } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group) layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const {
      layoutDependency,
      visualElement,
      drag,
      isPresent
    } = this.props;
    const projection = visualElement.projection;
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
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const {
      projection
    } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      queueMicrotask(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup: promoteContext
    } = this.props;
    const {
      projection
    } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const {
      safeToRemove
    } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
}
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = React$1.useContext(LayoutGroupContext);
  return React$1.createElement(MeasureLayoutWithContext, {
    ...props,
    layoutGroup: layoutGroup,
    switchLayoutGroup: React$1.useContext(SwitchLayoutGroupContext),
    isPresent: isPresent,
    safeToRemove: safeToRemove
  });
}
const defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const numBorders = borders.length;
const asNumber = value => typeof value === "string" ? parseFloat(value) : value;
const isPx = value => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(0,
    // TODO Reinstate this if only child
    lead.opacity !== undefined ? lead.opacity : 1, easeCrossfadeIn(progress));
    target.opacityExit = mix(follow.opacity !== undefined ? follow.opacity : 1, 0, easeCrossfadeOut(progress));
  } else if (isOnlyMember) {
    target.opacity = mix(follow.opacity !== undefined ? follow.opacity : 1, lead.opacity !== undefined ? lead.opacity : 1, progress);
  }
  /**
   * Mix border radius
   */
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === undefined && leadRadius === undefined) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
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
  return values[radiusName] !== undefined ? values[radiusName] : values.borderRadius;
}
// /**
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
const easeCrossfadeIn = compress(0, 0.5, circOut);
const easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return p => {
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
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number") return;
  let originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis) originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}

function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}

class NodeStack {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = undefined;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex(member => node === member);
    if (indexOfNode === 0) return false;
    /**
     * Find the next projection node that is present
     */
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
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
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
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
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const {
        crossfade
      } = node.options;
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
  }

  exitAnimationComplete() {
    this.members.forEach(node => {
      const {
        options,
        resumingFrom
      } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach(node => {
      node.instance && node.scheduleRender(false);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = undefined;
    }
  }
}

function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform = "";
  /**
   * The translations we use to calculate are always relative to the viewport coordinate space.
   * But when we apply scales, we also scale the coordinate space of an element and its children.
   * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
   * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
   */
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  if (xTranslate || yTranslate) {
    transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
  }
  /**
   * Apply scale correction for the tree transform.
   * This will apply scale to the screen-orientated axes.
   */
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const {
      rotate,
      rotateX,
      rotateY
    } = latestTransform;
    if (rotate) transform += `rotate(${rotate}deg) `;
    if (rotateX) transform += `rotateX(${rotateX}deg) `;
    if (rotateY) transform += `rotateY(${rotateY}deg) `;
  }
  /**
   * Apply scale to match the size of the element to the size we want it.
   * This will apply scale to the element-orientated axes.
   */
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform || "none";
}

const compareByDepth = (a, b) => a.depth - b.depth;

class FlatTree {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
}

/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
  const start = performance.now();
  const checkElapsed = ({
    timestamp
  }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}

function record(data) {
  if (window.MotionDebug) {
    window.MotionDebug.record(data);
  }
}

function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

function animateSingleValue(value, keyframes, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
  return motionValue$1.animation;
}

const transformAxes = ["", "X", "Y", "Z"];
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
const animationTarget = 1000;
let id = 0;
/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */
const projectionFrameData = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function createProjectionNode({
  attachResizeListener,
  defaultParent,
  measureScroll,
  checkIsScrollRoot,
  resetTransform
}) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      /**
       * A unique ID generated for every projection node.
       */
      this.id = id++;
      /**
       * An id that represents a unique session instigated by startUpdate.
       */
      this.animationId = 0;
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
       * Flag to true if we think the projection calculations for this node needs
       * recalculating as a result of an updated transform or layout animation.
       */
      this.isProjectionDirty = false;
      /**
       * Flag to true if the layout *or* transform has changed. This then gets propagated
       * throughout the projection tree, forcing any element below to recalculate on the next frame.
       */
      this.isSharedProjectionDirty = false;
      /**
       * Flag transform dirty. This gets propagated throughout the whole tree but is only
       * respected by shared nodes.
       */
      this.isTransformDirty = false;
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
       * calculated in screen-space but need to be scaled for elements to layoutly
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
      this.eventHandlers = new Map();
      this.hasTreeAnimated = false;
      // Note: Currently only running on root node
      this.updateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      /**
       * This is a multi-step process as shared nodes might be of different depths. Nodes
       * are sorted by depth order, so we need to resolve the entire tree before moving to
       * the next step.
       */
      this.updateProjection = () => {
        /**
         * Reset debug counts. Manually resetting rather than creating a new
         * object each frame.
         */
        projectionFrameData.totalNodes = projectionFrameData.resolvedTargetDeltas = projectionFrameData.recalculatedProjection = 0;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        record(projectionFrameData);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      /**
       * Shared layout
       */
      // TODO Only running on root node
      this.sharedNodes = new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this) this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const {
        layoutId,
        layout,
        visualElement
      } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      // Only register the handler if it requires layout animation
      if (this.options.animate !== false && visualElement && (layoutId || layout)) {
        this.addEventListener("didUpdate", ({
          delta,
          hasLayoutChanged,
          hasRelativeTargetChanged,
          layout: newLayout
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = undefined;
            this.relativeTarget = undefined;
            return;
          }
          // TODO: Check here if an animation exists
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const {
            onLayoutAnimationStart,
            onLayoutAnimationComplete
          } = visualElement.getProps();
          /**
           * The target layout of the element might stay the same,
           * but its position relative to its parent has changed.
           */
          const targetChanged = !this.targetLayout || !boxEquals(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          /**
           * If the layout hasn't seemed to have changed, it might be that the
           * element is visually in the same place in the document but its position
           * relative to its parent has indeed changed. So here we check for that.
           */
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = undefined;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            /**
             * If the layout hasn't changed and we have an animation that hasn't started yet,
             * finish it immediately. Otherwise it will be animating from a location
             * that was probably never commited to screen and look like a jumpy box.
             */
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = undefined;
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked()) return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const {
        visualElement
      } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const {
        layoutId,
        layout
      } = this.options;
      if (layoutId === undefined && !layout) return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      // When doing an instant transition, we skip the layout update,
      // but should still clean up the measurements so that the next
      // snapshot could be taken correctly.
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      }
      this.isUpdating = false;
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
      this.clearAllSnapshots();
      /**
       * Manually flush any pending updates. Ideally
       * we could leave this to the following requestAnimationFrame but this seems
       * to leave a flash of incorrectly styled content.
       */
      const now = performance.now();
      frameData.delta = clamp(0, 1000 / 60, now - frameData.timestamp);
      frameData.timestamp = now;
      frameData.isProcessing = true;
      steps.update.process(frameData);
      steps.preRender.process(frameData);
      steps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        queueMicrotask(() => this.update());
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      frame.preRender(this.updateProjection, false, true);
    }
    scheduleCheckAfterUnmount() {
      /**
       * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
       * we manually call didUpdate to give a chance to the siblings to animate.
       * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
       */
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance) return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance) return;
      // TODO: Incorporate into a forwarded scroll offset
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
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = undefined;
      this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement
      } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot: checkIsScrollRoot(this.instance),
          offset: measureScroll(this.instance)
        };
      }
    }
    resetTransform() {
      if (!resetTransform) return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      /**
       * Measurements taken during the pre-render stage
       * still have transforms applied so we remove them
       * via calculation.
       */
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return createBox();
      const box = visualElement.measureViewportBox();
      // Remove viewport scroll to give page-relative coordinates
      const {
        scroll
      } = this.root;
      if (scroll) {
        translateAxis(box.x, scroll.offset.x);
        translateAxis(box.y, scroll.offset.y);
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      /**
       * Performance TODO: Keep a cumulative scroll offset down the tree
       * rather than loop back up the path.
       */
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const {
          scroll,
          options
        } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          /**
           * If this is a new scroll root, we want to remove all previous scrolls
           * from the viewport box.
           */
          if (scroll.isRoot) {
            copyBoxInto(boxWithoutScroll, box);
            const {
              scroll: rootScroll
            } = this.root;
            /**
             * Undo the application of page scroll that was originally added
             * to the measured bounding box.
             */
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x);
          translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues)) continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance) continue;
        if (!hasTransform(node.latestValues)) continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== undefined ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = undefined;
      this.layout = undefined;
      this.snapshot = undefined;
      this.prevTransformTemplateValue = undefined;
      this.targetDelta = undefined;
      this.target = undefined;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent) return;
      /**
       * If the parent target isn't up-to-date, force it to update.
       * This is an unfortunate de-optimisation as it means any updating relative
       * projection will cause all the relative parents to recalculate back
       * up the tree.
       */
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a;
      /**
       * Once the dirty status of nodes has been spread through the tree, we also
       * need to check if we have a shared node of a different depth that has itself
       * been dirtied.
       */
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      /**
       * We don't use transform for this step of processing so we don't
       * need to check whether any nodes have changed transform.
       */
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget);
      if (canSkip) return;
      const {
        layout,
        layoutId
      } = this.options;
      /**
       * If we have no layout, we can't perform projection, so early return
       */
      if (!this.layout || !(layout || layoutId)) return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      /**
       * If we don't have a targetDelta but do have a layout, we can attempt to resolve
       * a relativeParent. This will allow a component to perform scale correction
       * even if no animation has started.
       */
      // TODO If this is unsuccessful this currently happens every frame
      if (!this.targetDelta && !this.relativeTarget) {
        // TODO: This is a semi-repetition of further down this function, make DRY
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = undefined;
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
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
        /**
         * If we've only got a targetDelta, resolve it into a target
         */
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          // TODO: This is creating a new object every frame
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        /**
         * If no target, use own layout as target
         */
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      /**
       * If we've been told to attempt to resolve a relative target, do so.
       */
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = undefined;
        }
      }
      /**
       * Increase debug counter for resolved target deltas
       */
      projectionFrameData.resolvedTargetDeltas++;
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return undefined;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      /**
       * If this is a normal layout animation and neither this node nor its nearest projecting
       * is dirty then we can't skip.
       */
      if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
        canSkip = false;
      }
      /**
       * If this is a shared layout animation and this node's shared projection is dirty then
       * we can't skip.
       */
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      /**
       * If we have resolved the target this frame we must recalculate the
       * projection to ensure it visually represents the internal calculations.
       */
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip) return;
      const {
        layout,
        layoutId
      } = this.options;
      /**
       * If this section of the tree isn't animating we can
       * delete our target sources for the following frame.
       */
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = undefined;
      }
      if (!this.layout || !(layout || layoutId)) return;
      /**
       * Reset the corrected box with the latest values from box, as we're then going
       * to perform mutative operations on it.
       */
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      /**
       * Record previous tree scales before updating.
       */
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      /**
       * Apply all the parent deltas to this box to produce the corrected box. This
       * is the layout box, as it will appear on screen as a result of the transforms of its parents.
       */
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      /**
       * If this layer needs to perform scale correction but doesn't have a target,
       * use the layout as the target.
       */
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
      }
      const {
        target
      } = lead;
      if (!target) {
        /**
         * If we don't have a target to project into, but we were previously
         * projecting, we want to remove the stored transform and schedule
         * a render to ensure the elements reflect the removed transform.
         */
        if (this.projectionTransform) {
          this.projectionDelta = createDelta();
          this.projectionTransform = "none";
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      const prevProjectionTransform = this.projectionTransform;
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
        this.notifyListeners("projectionUpdate", target);
      }
      /**
       * Increase debug counter for recalculated projections
       */
      projectionFrameData.recalculatedProjection++;
    }
    hide() {
      this.isVisible = false;
      // TODO: Schedule render
    }

    show() {
      this.isVisible = true;
      // TODO: Schedule render
    }

    scheduleRender(notifyAll = true) {
      this.options.scheduleRender && this.options.scheduleRender();
      if (notifyAll) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = undefined;
      }
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = {
        ...this.latestValues
      };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = undefined;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : undefined;
      const layoutSource = this.layout ? this.layout.source : undefined;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = latest => {
        const progress = latest / 1000;
        mixAxisDelta(targetDelta.x, delta.x, progress);
        mixAxisDelta(targetDelta.y, delta.y, progress);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
          /**
           * If this is an unchanged relative target we can consider the
           * projection not dirty.
           */
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget) prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = undefined;
      }
      /**
       * Start the animation in the next frame to have a frame with progress 0,
       * where the target is the same as when the animation started, so we can
       * calculate the relative positions correctly for instant transitions.
       */
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: latest => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = undefined;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = undefined;
        this.resumingFrom.preserveOpacity = undefined;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let {
        targetWithTransforms,
        target,
        layout,
        latestValues
      } = lead;
      if (!targetWithTransforms || !target || !layout) return;
      /**
       * If we're only animating position, and this element isn't the lead element,
       * then instead of projecting into the lead box we instead want to calculate
       * a new target that aligns the two boxes but maintains the layout shape.
       */
      if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
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
       * create a transform style that will reproject the element from its layout layout
       * into the desired bounding box.
       */
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : undefined,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : undefined
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
    }
    getStack() {
      const {
        layoutId
      } = this.options;
      if (layoutId) return this.root.sharedNodes.get(layoutId);
    }
    promote({
      needsReset,
      transition,
      preserveFollowOpacity
    } = {}) {
      const stack = this.getStack();
      if (stack) stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = undefined;
        this.needsReset = true;
      }
      if (transition) this.setOptions({
        transition
      });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetRotation() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return;
      // If there's no detected rotation values, we can early return without a forced render.
      let hasRotate = false;
      /**
       * An unrolled check for rotation values. Most elements don't have any rotation and
       * skipping the nested loop and new object creation is 50% faster.
       */
      const {
        latestValues
      } = visualElement;
      if (latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ) {
        hasRotate = true;
      }
      // If there's no rotation values, we don't need to do any more.
      if (!hasRotate) return;
      const resetValues = {};
      // Check the rotate value of all axes and reset to 0
      for (let i = 0; i < transformAxes.length; i++) {
        const key = "rotate" + transformAxes[i];
        // Record the rotation and then temporarily set it to 0
        if (latestValues[key]) {
          resetValues[key] = latestValues[key];
          visualElement.setStaticValue(key, 0);
        }
      }
      // Force a render of this element to apply the transform with all rotations
      // set to 0.
      visualElement.render();
      // Put back all the values we reset
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
      }
      // Schedule a render for the next frame. This ensures we won't visually
      // see the element with the reset rotate value applied.
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp = {}) {
      var _a, _b;
      // TODO: Return lifecycle-persistent object
      const styles = {};
      if (!this.instance || this.isSVG) return styles;
      if (!this.isVisible) {
        return {
          visibility: "hidden"
        };
      } else {
        styles.visibility = "";
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const {
        x,
        y
      } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        /**
         * If the lead component is animating, assign this either the entering/leaving
         * opacity
         */
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        /**
         * Or we're not animating at all, set the lead component to its layout
         * opacity and other components to hidden.
         */
        styles.opacity = lead === this ? valuesToRender.opacity !== undefined ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== undefined ? valuesToRender.opacityExit : 0;
      }
      /**
       * Apply scale correction
       */
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === undefined) continue;
        const {
          correct,
          applyTo
        } = scaleCorrectors[key];
        /**
         * Only apply scale correction to the value if we have an
         * active projection transform. Otherwise these values become
         * vulnerable to distortion if the element changes size without
         * a corresponding layout animation.
         */
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
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
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = undefined;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach(node => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const {
      layoutBox: layout,
      measuredBox: measuredLayout
    } = node.layout;
    const {
      animationType
    } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    // TODO Maybe we want to also resize the layout snapshot so we don't trigger
    // animations for instance if layout="size" and an element has only changed position
    if (animationType === "size") {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        /**
         * Ensure relative target gets resized and rerendererd
         */
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      /**
       * If the relativeParent is itself resuming from a different element then
       * the relative snapshot is not relavent
       */
      if (relativeParent && !relativeParent.resumeFrom) {
        const {
          snapshot: parentSnapshot,
          layout: parentLayout
        } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    const {
      onExitComplete
    } = node.options;
    onExitComplete && onExitComplete();
  }
  /**
   * Clearing transition
   * TODO: Investigate why this transition is being passed in as {type: false } from Framer
   * and why we need it at all
   */
  node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
  /**
   * Increase debug counter for nodes encountered this frame
   */
  projectionFrameData.totalNodes++;
  if (!node.parent) return;
  /**
   * If this node isn't projecting, propagate isProjectionDirty. It will have
   * no performance impact but it will allow the next child that *is* projecting
   * but *isn't* dirty to just check its parent to see if *any* ancestor needs
   * correcting.
   */
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  /**
   * Propagate isSharedProjectionDirty and isTransformDirty
   * throughout the whole tree. A future revision can take another look at
   * this but for safety we still recalcualte shared nodes.
   */
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const {
    visualElement
  } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = undefined;
  node.isProjectionDirty = true;
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
const defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2);
}

const DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

const rootProjectionNode = {
  current: undefined
};
const HTMLProjectionNode = createProjectionNode({
  measureScroll: instance => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({
        layoutScroll: true
      });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== undefined ? value : "none";
  },
  checkIsScrollRoot: instance => Boolean(window.getComputedStyle(instance).position === "fixed")
});

const drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match) return [,];
  const [, token, fallback] = match;
  return [token, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  // No CSS variable detected
  if (!token) return;
  // Attempt to read this CSS variable off the element
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariableToken(fallback)) {
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
function resolveCSSVariables(visualElement, {
  ...target
}, transitionEnd) {
  const element = visualElement.current;
  if (!(element instanceof Element)) return {
    target,
    transitionEnd
  };
  // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
  // only if they change but I think this reads clearer and this isn't a performance-critical path.
  if (transitionEnd) {
    transitionEnd = {
      ...transitionEnd
    };
  }
  // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
  visualElement.values.forEach(value => {
    const current = value.get();
    if (!isCSSVariableToken(current)) return;
    const resolved = getVariableValue(current, element);
    if (resolved) value.set(resolved);
  });
  // Cycle through every target property and resolve CSS variables. Currently
  // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
  for (const key in target) {
    const current = target[key];
    if (!isCSSVariableToken(current)) continue;
    const resolved = getVariableValue(current, element);
    if (!resolved) continue;
    // Clone target if it hasn't already been
    target[key] = resolved;
    if (!transitionEnd) transitionEnd = {};
    // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
    // CSS variable. This will ensure that after the animation the component will reflect
    // changes in the value of the CSS variable.
    if (transitionEnd[key] === undefined) {
      transitionEnd[key] = current;
    }
  }
  return {
    target,
    transitionEnd
  };
}

const positionalKeys = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]);
const isPositionalKey = key => positionalKeys.has(key);
const hasPositionalKey = target => {
  return Object.keys(target).some(isPositionalKey);
};
const isNumOrPxType = v => v === number || v === px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, {
  transform
}) => {
  if (transform === "none" || !transform) return 0;
  const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter(key => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach(key => {
    const value = visualElement.getValue(key);
    if (value !== undefined) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  // Apply changes to element before measurement
  if (removedTransforms.length) visualElement.render();
  return removedTransforms;
}
const positionalValues = {
  // Dimensions
  width: ({
    x
  }, {
    paddingLeft = "0",
    paddingRight = "0"
  }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({
    y
  }, {
    paddingTop = "0",
    paddingBottom = "0"
  }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, {
    top
  }) => parseFloat(top),
  left: (_bbox, {
    left
  }) => parseFloat(left),
  bottom: ({
    y
  }, {
    top
  }) => parseFloat(top) + (y.max - y.min),
  right: ({
    x
  }, {
    left
  }) => parseFloat(left) + (x.max - x.min),
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
const convertChangedValueTypes = (target, visualElement, changedKeys) => {
  const originBbox = visualElement.measureViewportBox();
  const element = visualElement.current;
  const elementComputedStyle = getComputedStyle(element);
  const {
    display
  } = elementComputedStyle;
  const origin = {};
  // If the element is currently set to display: "none", make it visible before
  // measuring the target bounding box
  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  /**
   * Record origins before we render and update styles
   */
  changedKeys.forEach(key => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  // Apply the latest values (as set in checkAndConvertChangedValueTypes)
  visualElement.render();
  const targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach(key => {
    // Restore styles to their **calculated computed style**, not their actual
    // originally set style. This allows us to animate between equivalent pixel units.
    const value = visualElement.getValue(key);
    value && value.jump(origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
const checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
  target = {
    ...target
  };
  transitionEnd = {
    ...transitionEnd
  };
  const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  // We want to remove any transform values that could affect the element's bounding box before
  // it's measured. We'll reapply these later.
  let removedTransformValues = [];
  let hasAttemptedToRemoveTransformValues = false;
  const changedValueTypeKeys = [];
  targetPositionalKeys.forEach(key => {
    const value = visualElement.getValue(key);
    if (!visualElement.hasValue(key)) return;
    let from = origin[key];
    let fromType = findDimensionValueType(from);
    const to = target[key];
    let toType;
    // TODO: The current implementation of this basically throws an error
    // if you try and do value conversion via keyframes. There's probably
    // a way of doing this but the performance implications would need greater scrutiny,
    // as it'd be doing multiple resize-remeasure operations.
    if (isKeyframesTarget(to)) {
      const numKeyframes = to.length;
      const fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (let i = fromIndex; i < numKeyframes; i++) {
        /**
         * Don't allow wildcard keyframes to be used to detect
         * a difference in value types.
         */
        if (to[i] === null) break;
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
        const current = value.get();
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
        value.jump(to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    // If we removed transform values, reapply them before the next render
    if (removedTransformValues.length) {
      removedTransformValues.forEach(([key, value]) => {
        visualElement.getValue(key).set(value);
      });
    }
    // Reapply original values
    visualElement.render();
    // Restore scroll position
    if (isBrowser && scrollY !== null) {
      window.scrollTo({
        top: scrollY
      });
    }
    return {
      target: convertedTarget,
      transitionEnd
    };
  } else {
    return {
      target,
      transitionEnd
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
    target,
    transitionEnd
  };
}

/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
const parseDomVariant = (visualElement, target, origin, transitionEnd) => {
  const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement, target, origin, transitionEnd);
};

// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = {
  current: null
};
const hasReducedMotionListener = {
  current: false
};

function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser) return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

function updateMotionValuesFromProps(element, next, prev) {
  const {
    willChange
  } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      /**
       * If this is a motion value found in props or style, we want to add it
       * to our visual element's motion value map.
       */
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      /**
       * Check the version of the incoming motion value with this version
       * and warn against mismatches.
       */
      if (process.env.NODE_ENV === "development") {
        warnOnce(nextValue.version === "10.12.16", `Attempting to mix Framer Motion versions ${nextValue.version} with 10.12.16 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      /**
       * If we're swapping from a motion value to a static value,
       * create a new motion value from that
       */
      element.addValue(key, motionValue(nextValue, {
        owner: element
      }));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      /**
       * If this is a flat value that has changed, update the motion value
       * or create one if it doesn't exist. We only want to do this if we're
       * not handling the value with our animation state.
       */
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        // TODO: Only update values that aren't being animated or even looked at
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== undefined ? latestValue : nextValue, {
          owner: element
        }));
      }
    }
  }
  // Handle removed values
  for (const key in prev) {
    if (next[key] === undefined) element.removeValue(key);
  }
  return next;
}

const visualElementStore = new WeakMap();

const featureNames = Object.keys(featureDefinitions);
const numFeatures = featureNames.length;
const propEventHandlers = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
const numVariantProps = variantProps.length;
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
  constructor({
    parent,
    props,
    presenceContext,
    reducedMotionConfig,
    visualState
  }, options = {}) {
    /**
     * A reference to the current underlying Instance, e.g. a HTMLElement
     * or Three.Mesh etc.
     */
    this.current = null;
    /**
     * A set containing references to this VisualElement's children.
     */
    this.children = new Set();
    /**
     * Determine what role this visual element should take in the variant tree.
     */
    this.isVariantNode = false;
    this.isControllingVariants = false;
    /**
     * Decides whether this VisualElement should animate in reduced motion
     * mode.
     *
     * TODO: This is currently set on every individual VisualElement but feels
     * like it could be set globally.
     */
    this.shouldReduceMotion = null;
    /**
     * A map of all motion values attached to this visual element. Motion
     * values are source of truth for any given animated value. A motion
     * value might be provided externally by the component via props.
     */
    this.values = new Map();
    /**
     * Cleanup functions for active features (hover/tap/exit etc)
     */
    this.features = {};
    /**
     * A map of every subscription that binds the provided or generated
     * motion values onChange listeners to this visual element.
     */
    this.valueSubscriptions = new Map();
    /**
     * A reference to the previously-provided motion values as returned
     * from scrapeMotionValuesFromProps. We use the keys in here to determine
     * if any motion values need to be removed after props are updated.
     */
    this.prevMotionValues = {};
    /**
     * An object containing a SubscriptionManager for each active event.
     */
    this.events = {};
    /**
     * An object containing an unsubscribe function for each prop event subscription.
     * For example, every "Update" event can have multiple subscribers via
     * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
     */
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current) return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.scheduleRender = () => frame.render(this.render, false, true);
    const {
      latestValues,
      renderState
    } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = {
      ...latestValues
    };
    this.initialValues = props.initial ? {
      ...latestValues
    } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
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
    const {
      willChange,
      ...initialMotionValues
    } = this.scrapeMotionValuesFromProps(props, {});
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== undefined && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps) {
    return {};
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (process.env.NODE_ENV !== "production") {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent) this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach(remove => remove());
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      this.features[key].unmount();
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", latestValue => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.update(this.notifyUpdate, false, true);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
    });
  }
  sortNodePosition(other) {
    /**
     * If these nodes aren't even of the same type we can't compare their depth.
     */
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures({
    children,
    ...renderedProps
  }, isStrict, preloadedFeatures, initialLayoutGroupConfig) {
    let ProjectionNodeConstructor;
    let MeasureLayout;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
      const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      renderedProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
    }
    for (let i = 0; i < numFeatures; i++) {
      const name = featureNames[i];
      const {
        isEnabled,
        Feature: FeatureConstructor,
        ProjectionNode,
        MeasureLayout: MeasureLayoutComponent
      } = featureDefinitions[name];
      if (ProjectionNode) ProjectionNodeConstructor = ProjectionNode;
      if (isEnabled(renderedProps)) {
        if (!this.features[name] && FeatureConstructor) {
          this.features[name] = new FeatureConstructor(this);
        }
        if (MeasureLayoutComponent) {
          MeasureLayout = MeasureLayoutComponent;
        }
      }
    }
    if (!this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
      const {
        layoutId,
        layout,
        drag,
        dragConstraints,
        layoutScroll,
        layoutRoot
      } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll,
        layoutRoot
      });
    }
    return MeasureLayout;
  }
  updateFeatures() {
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature.isMounted) {
        feature.update();
      } else {
        feature.mount();
        feature.isMounted = true;
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(target, canMutate = true) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    /**
     * Update prop event handlers ie onAnimationStart, onAnimationComplete
     */
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listener = props["on" + key];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : undefined;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : undefined;
  }
  getVariantContext(startAtParent = false) {
    if (startAtParent) {
      return this.parent ? this.parent.getVariantContext() : undefined;
    }
    if (!this.isControllingVariants) {
      const context = this.parent ? this.parent.getVariantContext() || {} : {};
      if (this.props.initial !== undefined) {
        context.initial = this.props.initial;
      }
      return context;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = this.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    // Remove existing value if it exists
    if (value !== this.values.get(key)) {
      this.removeValue(key);
      this.bindToMotionValue(key, value);
    }
    this.values.set(key, value);
    this.latestValues[key] = value.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === undefined && defaultValue !== undefined) {
      value = motionValue(defaultValue, {
        owner: this
      });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key) {
    return this.latestValues[key] !== undefined || !this.current ? this.latestValues[key] : this.readValueFromInstance(this.current, key, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(key) {
    var _a;
    const {
      initial
    } = this.props;
    const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key] : undefined;
    /**
     * If this value still exists in the current initial variant, read that.
     */
    if (initial && valueFromInitial !== undefined) {
      return valueFromInitial;
    }
    /**
     * Alternatively, if this VisualElement config has defined a getBaseTarget
     * so we can read the value from an alternative source, try that.
     */
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== undefined && !isMotionValue(target)) return target;
    /**
     * If the value was initially defined on initial, but it doesn't any more,
     * return undefined. Otherwise return the value as initially read from the DOM.
     */
    return this.initialValues[key] !== undefined && valueFromInitial === undefined ? undefined : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
}

class DOMVisualElement extends VisualElement {
  sortInstanceNodePosition(a, b) {
    /**
     * compareDocumentPosition returns a bitmask, by using the bitwise &
     * we're returning true if 2 in that bitmask is set to true. 2 is set
     * to true if b preceeds a.
     */
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : undefined;
  }
  removeValueFromRenderState(key, {
    vars,
    style
  }) {
    delete vars[key];
    delete style[key];
  }
  makeTargetAnimatableFromInstance({
    transition,
    transitionEnd,
    ...target
  }, {
    transformValues
  }, isMounted) {
    let origin = getOrigin(target, transition || {}, this);
    /**
     * If Framer has provided a function to convert `Color` etc value types, convert them
     */
    if (transformValues) {
      if (transitionEnd) transitionEnd = transformValues(transitionEnd);
      if (target) target = transformValues(target);
      if (origin) origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(this, target, origin);
      const parsed = parseDomVariant(this, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return {
      transition,
      transitionEnd,
      ...target
    };
  }
}

function getComputedStyle$1(element) {
  return window.getComputedStyle(element);
}
class HTMLVisualElement extends DOMVisualElement {
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle$1(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, {
    transformPagePoint
  }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps$1(props, prevProps);
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const {
      children
    } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", latest => {
        if (this.current) this.current.textContent = `${latest}`;
      });
    }
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
}

class SVGVisualElement extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.isSVGTag = false;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps(props, prevProps);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
}

const createDomVisualElement = (Component, options) => {
  return isSVGComponent(Component) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    enableHardwareAcceleration: true
  });
};

const layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

const preloadedFeatures = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
const motion = /*@__PURE__*/createMotionProxy((Component, config) => createDomMotionConfig(Component, config, preloadedFeatures, createDomVisualElement));

const Icon = () => /*#__PURE__*/React$1.createElement("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "question-circle",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  className: "svg-inline--fa fa-question-circle fa-w-16 fa-2x"
}, /*#__PURE__*/React$1.createElement("path", {
  fill: "currentColor",
  d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z",
  className: ""
}));

const Wrap$d = styled(motion.div)``;
const HoverIcon = ({
  width = 13,
  height = 4.2,
  text
}) => {
  const wrapRef = React$1.useRef(null);
  return /*#__PURE__*/React$1.createElement(Wrap$d, {
    ref: wrapRef,
    onMouseOver: () => {},
    onMouseOut: () => {}
  }, /*#__PURE__*/React$1.createElement(Icon, null));
};

styled(motion.div)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 0px;
    overflow: visible;
    z-index: 100;
`;
styled(motion.div)`
    position: absolute;
    top: ${({
  y
}) => `${y}`};
    left: ${({
  x
}) => `${x}`};
`;
styled(motion.div)`
    display: block;
    position: relative;
    background: #ffffff;
    color: #222222;
    width: 100vw;
    height: 100vh;
    min-width: 5rem;
    min-height: 2rem;
    max-width: ${({
  maxWidth
}) => `${maxWidth}`};
    max-height: ${({
  maxHeight
}) => `${maxHeight}`};
    padding: 0.3rem 0.6rem;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid grey;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

    &:before,
    &:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
    }
    &:before {
        border-left: 10px solid transparent;
        border-top: 10px solid grey;
        border-right: 10px solid transparent;
        left: calc(50% - 10px);
        bottom: -9px;
        z-index: -1;
    }
    &:after {
        border-left: 8px solid transparent;
        border-top: 8px solid #ffffff;
        border-right: 8px solid transparent;
        left: calc(50% - 8px);
        bottom: -8px;
    }
`;

const StyledHr = styled.hr`
    width: ${({
  width
}) => width};
    margin: 0 auto;
    border-bottom: 1px solid ${({
  color
}) => color !== null ? color : theme.generalColors.midGrey};
`;
const Hr = ({
  width = '100%',
  color = null
}) => /*#__PURE__*/React$1.createElement(StyledHr, {
  width: width,
  color: color
});

const Wrap$c = styled.div`
    padding:.75rem;
    border-radius:10px;
    background-color:#fff;
`;
const Children = styled.div`
    margin-top:.25rem;
`;
const Rectangle = ({
  text = "",
  children,
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$c, rest, /*#__PURE__*/React$1.createElement(Text$1, {
    type: "small"
  }, text), /*#__PURE__*/React$1.createElement(Children, null, children));
};

const Wrap$b = styled.div`
    display:flex;
    width:100%;
    font-family: ${theme.main.font};
    
`;
const TextWrap = styled.span`
    display: flex;
    align-items: center;
`;
const LeftText = styled(TextWrap)`
    font-size:18px;
    color:${({
  fill
}) => fill ? fill : theme.colors.paintItBlack};
    font-weight:700;
    padding:0 .5rem 0 0;
`;
const RightText = styled(TextWrap)`
    font-size:15px;
    font-weight:500;
    min-width:2rem;
    color:${() => theme.generalColors.darkGrey}
`;
const TextPairs = ({
  fill,
  leftText = '',
  rightText = '',
  Icon
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$b, null, /*#__PURE__*/React$1.createElement(LeftText, {
    fill: fill
  }, leftText), /*#__PURE__*/React$1.createElement(RightText, null, rightText));
};

const Wrap$a = styled.div`
    display:flex;
    width:100%;
    font-family: ${theme.main.font};
    align-items:center;
`;
const IconWrap = styled.div`
    width:1.5rem;
    margin-right:.5rem;
    color: ${props => props.fill};
`;
const IconBoxes = ({
  fill,
  leftText = '',
  rightText = '',
  Icon
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$a, null, /*#__PURE__*/React$1.createElement(IconWrap, {
    fill: fill
  }, /*#__PURE__*/React$1.createElement(Icon, {
    fill: fill
  })), /*#__PURE__*/React$1.createElement(TextPairs, {
    fill: fill,
    leftText: leftText,
    rightText: rightText
  }));
};

//import theme from '../../style/theme';

const Wrap$9 = styled.div`
    display: block;

    border-radius:10px;
    background-color:#fff;
    
    > * {
        display: flex;

        ${({
  columnString
}) => columnString !== null ? "> * { width:" + columnString + "; }" : null}

        ${({
  columnArray
}) => columnArray !== null ? columnArray.map((columnString, indx) => "> *:nth-child(" + (indx + 1) + ") { width:" + columnString + "; }") : null}

        

    }
    //grid-template-rows: ${({
  rows
}) => rows};
`;
const Header$4 = ({
  children,
  columns = '12rem',
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$9, _extends$1({}, rest, {
    columnString: typeof columns === 'string' ? columns : null,
    columnArray: typeof columns !== 'string' ? columns : null
  }), children);
};

const Wrap$8 = styled.div`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${theme.generalColors.midGrey};

    > * {
        font-weight: 700;
    }
`;
const Header$3 = ({
  children
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$8, null, children);
};

const Wrap$7 = styled.div`
    padding: 0.6rem 0.4rem;
`;
const headingBase = styled.css`
    color: ${theme.main.color};
    font-family: ${theme.main.font};
    margin: 0;
`;
const SmallTableHeader = styled.h4`
    ${headingBase}
    font-weight: 700;
    font-size: 0.95rem;
    color:${() => theme.generalColors.darkGrey}
`;
const Header$2 = ({
  type,
  children
}) => {
  switch (type) {
    case "smalltableheader":
      return /*#__PURE__*/React$1.createElement(Wrap$7, null, /*#__PURE__*/React$1.createElement(SmallTableHeader, null, children));
    default:
      return /*#__PURE__*/React$1.createElement(Wrap$7, null, children);
  }
};

const Wrap$6 = styled.div`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${theme.generalColors.midGrey};
`;
const Header$1 = ({
  children
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$6, null, children);
};

//import theme from '../../style/theme';

const Wrap$5 = styled.div`
    padding: 0.6rem 0.4rem;
`;
const Header = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$5, rest, children);
};

const Wrap$4 = styled.a`
    display: inline-block;
    color: ${theme.mainColors.paintItBlack};
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;

    &.active {
        color: ${theme.mainColors.simplyRed};
        border-bottom: 3px solid ${theme.mainColors.simplyRed};
    }
`;
const Tab = ({
  id,
  checked = false,
  children,
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$4, _extends$1({
    id: id,
    key: 'tab-' + id,
    className: checked ? 'active' : ''
  }, rest), children);
};

const Wrap$3 = styled.div`
    display: block;
    position: relative;
`;
const TabContent = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$3, rest, children);
};

const Wrap$2 = styled.div`

`;
const Tabs = styled.div`
    border-bottom: 1px solid ${theme.colors.fadeToGrey};
    padding: 0;    
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    height: 2rem;
    overflow-y: none;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > a {
        scroll-snap-align: start;
    }
`;
const TabGroup = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$2, rest, /*#__PURE__*/React$1.createElement(Tabs, null, children));
};

const Wrap$1 = styled.div`
    display: none;
    position: relative;
    opacity: 0;
    transition: opacity 0.2s linear;

    &.active {
        display: block;
        opacity: 1;
        
    }

`;
const TabPane = ({
  checked = false,
  children,
  ...rest
}) => {
  return /*#__PURE__*/React$1.createElement(Wrap$1, _extends$1({
    className: checked ? 'active' : ''
  }, rest), children);
};

const Wrap = styled.div`
    display: block;
    position: relative;
`;
const TabWrap = ({
  children,
  ...rest
}) => {
  const {
    props: childrenA
  } = children;
  const {
    children: childrenB
  } = childrenA;
  if (childrenB.length !== 2 || !childrenB[0] || !childrenB[1]) {
    return /*#__PURE__*/React$1.createElement(Wrap, null, /*#__PURE__*/React$1.createElement("p", null, "There are issues with your children"));
  }
  function switchContent(evnt) {
    const target = evnt.target.closest('a[id]');
    if (target) {
      const getSiblings = n => [...n.parentElement.children].filter(c => c != n);
      const targetSiblings = getSiblings(target);
      targetSiblings.forEach(sibling => sibling.classList.remove('active'));
      target.classList.add('active');
      const matches = evnt.target.closest('.tabbed-content').querySelectorAll('div#' + target.id);
      if (matches && matches[0]) {
        const content = matches[0];
        const contentSiblings = getSiblings(content);
        contentSiblings.forEach(sibling => sibling.classList.remove('active'));
        content.classList.add('active');
      }
    }
  }
  return /*#__PURE__*/React$1.createElement(Wrap, _extends$1({
    className: 'tabbed-content'
  }, rest, {
    onClick: switchContent
  }), children);
};

exports.Background = Background$1;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Chip = Chip$1;
exports.ChipInput = Chip;
exports.ChipSelect = ChipSelect;
exports.ColumnContainer = ColumnContainer;
exports.Content = Content$1;
exports.Flextable = Header$4;
exports.FlextableCell = Header;
exports.FlextableHead = Header$3;
exports.FlextableHeader = Header$2;
exports.FlextableRow = Header$1;
exports.Form = Form$1;
exports.GridContainer = GridContainer;
exports.Header = Header$5;
exports.Heading = Heading;
exports.Hidden = Hidden;
exports.HoverIcon = HoverIcon;
exports.Hr = Hr;
exports.IconBoxes = IconBoxes;
exports.Input = Input;
exports.Label = Label$1;
exports.LoaderBar = LoaderBar;
exports.LoaderSpinner = Loader;
exports.Marquee = Marquess;
exports.Mast = index;
exports.Modal = ModalContainer;
exports.MoodSelect = MoodSelect;
exports.Pagination = Pagination;
exports.Paragraph = paragraph;
exports.Pod = Pod;
exports.PositionContainer = PositionContainer;
exports.ProgressBar = ProgressBar;
exports.ProgressBarActions = actions;
exports.ProgressBarReducer = progressBars;
exports.Radio = Radio;
exports.Rectangle = Rectangle;
exports.ResponseBox = ResponseBox;
exports.Select = Select;
exports.SelectionPanel = SelectionPanel;
exports.Switch = Switch;
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
exports.Tr = Tr;
//# sourceMappingURL=index.js.map
