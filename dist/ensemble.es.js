import se, { Component as vi, useState as Lt, useEffect as _n, useRef as dr } from "react";
import p, { keyframes as yi, css as ae } from "styled-components";
function xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mn = { exports: {} }, at = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function wi() {
  if (mr)
    return at;
  mr = 1;
  var e = se, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, c, u) {
    var f, m = {}, b = null, k = null;
    u !== void 0 && (b = "" + u), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (k = c.ref);
    for (f in c)
      r.call(c, f) && !i.hasOwnProperty(f) && (m[f] = c[f]);
    if (s && s.defaultProps)
      for (f in c = s.defaultProps, c)
        m[f] === void 0 && (m[f] = c[f]);
    return { $$typeof: t, type: s, key: b, ref: k, props: m, _owner: a.current };
  }
  return at.Fragment = n, at.jsx = o, at.jsxs = o, at;
}
var it = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function ki() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), T = Symbol.iterator, P = "@@iterator";
    function O(l) {
      if (l === null || typeof l != "object")
        return null;
      var h = T && l[T] || l[P];
      return typeof h == "function" ? h : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(l) {
      {
        for (var h = arguments.length, x = new Array(h > 1 ? h - 1 : 0), R = 1; R < h; R++)
          x[R - 1] = arguments[R];
        F("error", l, x);
      }
    }
    function F(l, h, x) {
      {
        var R = j.ReactDebugCurrentFrame, X = R.getStackAddendum();
        X !== "" && (h += "%s", x = x.concat([X]));
        var J = x.map(function(U) {
          return String(U);
        });
        J.unshift("Warning: " + h), Function.prototype.apply.call(console[l], console, J);
      }
    }
    var H = !1, v = !1, ie = !1, ue = !1, $e = !1, le;
    le = Symbol.for("react.module.reference");
    function je(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === i || $e || l === a || l === u || l === f || ue || l === k || H || v || ie || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === m || l.$$typeof === o || l.$$typeof === s || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === le || l.getModuleId !== void 0));
    }
    function He(l, h, x) {
      var R = l.displayName;
      if (R)
        return R;
      var X = h.displayName || h.name || "";
      return X !== "" ? x + "(" + X + ")" : x;
    }
    function Ge(l) {
      return l.displayName || "Context";
    }
    function de(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case s:
            var h = l;
            return Ge(h) + ".Consumer";
          case o:
            var x = l;
            return Ge(x._context) + ".Provider";
          case c:
            return He(l, l.render, "ForwardRef");
          case m:
            var R = l.displayName || null;
            return R !== null ? R : de(l.type) || "Memo";
          case b: {
            var X = l, J = X._payload, U = X._init;
            try {
              return de(U(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var fe = Object.assign, Ce = 0, me, xe, Fe, Ue, g, C, z;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function I() {
      {
        if (Ce === 0) {
          me = console.log, xe = console.info, Fe = console.warn, Ue = console.error, g = console.group, C = console.groupCollapsed, z = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        Ce++;
      }
    }
    function G() {
      {
        if (Ce--, Ce === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: fe({}, l, {
              value: me
            }),
            info: fe({}, l, {
              value: xe
            }),
            warn: fe({}, l, {
              value: Fe
            }),
            error: fe({}, l, {
              value: Ue
            }),
            group: fe({}, l, {
              value: g
            }),
            groupCollapsed: fe({}, l, {
              value: C
            }),
            groupEnd: fe({}, l, {
              value: z
            })
          });
        }
        Ce < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = j.ReactCurrentDispatcher, L;
    function D(l, h, x) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (X) {
            var R = X.stack.trim().match(/\n( *(at )?)/);
            L = R && R[1] || "";
          }
        return `
` + L + l;
      }
    }
    var q = !1, N;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      N = new oe();
    }
    function w(l, h) {
      if (!l || q)
        return "";
      {
        var x = N.get(l);
        if (x !== void 0)
          return x;
      }
      var R;
      q = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = _.current, _.current = null, I();
      try {
        if (h) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (Se) {
              R = Se;
            }
            Reflect.construct(l, [], U);
          } else {
            try {
              U.call();
            } catch (Se) {
              R = Se;
            }
            l.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Se) {
            R = Se;
          }
          l();
        }
      } catch (Se) {
        if (Se && R && typeof Se.stack == "string") {
          for (var Y = Se.stack.split(`
`), ce = R.stack.split(`
`), te = Y.length - 1, ne = ce.length - 1; te >= 1 && ne >= 0 && Y[te] !== ce[ne]; )
            ne--;
          for (; te >= 1 && ne >= 0; te--, ne--)
            if (Y[te] !== ce[ne]) {
              if (te !== 1 || ne !== 1)
                do
                  if (te--, ne--, ne < 0 || Y[te] !== ce[ne]) {
                    var he = `
` + Y[te].replace(" at new ", " at ");
                    return l.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", l.displayName)), typeof l == "function" && N.set(l, he), he;
                  }
                while (te >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        q = !1, _.current = J, G(), Error.prepareStackTrace = X;
      }
      var Ze = l ? l.displayName || l.name : "", ur = Ze ? D(Ze) : "";
      return typeof l == "function" && N.set(l, ur), ur;
    }
    function be(l, h, x) {
      return w(l, !1);
    }
    function qe(l) {
      var h = l.prototype;
      return !!(h && h.isReactComponent);
    }
    function Me(l, h, x) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return w(l, qe(l));
      if (typeof l == "string")
        return D(l);
      switch (l) {
        case u:
          return D("Suspense");
        case f:
          return D("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return be(l.render);
          case m:
            return Me(l.type, h, x);
          case b: {
            var R = l, X = R._payload, J = R._init;
            try {
              return Me(J(X), h, x);
            } catch {
            }
          }
        }
      return "";
    }
    var yt = Object.prototype.hasOwnProperty, Qn = {}, er = j.ReactDebugCurrentFrame;
    function xt(l) {
      if (l) {
        var h = l._owner, x = Me(l.type, l._source, h ? h.type : null);
        er.setExtraStackFrame(x);
      } else
        er.setExtraStackFrame(null);
    }
    function Va(l, h, x, R, X) {
      {
        var J = Function.call.bind(yt);
        for (var U in l)
          if (J(l, U)) {
            var Y = void 0;
            try {
              if (typeof l[U] != "function") {
                var ce = Error((R || "React class") + ": " + x + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              Y = l[U](h, U, R, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              Y = te;
            }
            Y && !(Y instanceof Error) && (xt(X), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", x, U, typeof Y), xt(null)), Y instanceof Error && !(Y.message in Qn) && (Qn[Y.message] = !0, xt(X), A("Failed %s type: %s", x, Y.message), xt(null));
          }
      }
    }
    var Qa = Array.isArray;
    function qt(l) {
      return Qa(l);
    }
    function ei(l) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, x = h && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return x;
      }
    }
    function ti(l) {
      try {
        return tr(l), !1;
      } catch {
        return !0;
      }
    }
    function tr(l) {
      return "" + l;
    }
    function nr(l) {
      if (ti(l))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ei(l)), tr(l);
    }
    var rt = j.ReactCurrentOwner, ni = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, ar, Xt;
    Xt = {};
    function ri(l) {
      if (yt.call(l, "ref")) {
        var h = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ai(l) {
      if (yt.call(l, "key")) {
        var h = Object.getOwnPropertyDescriptor(l, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ii(l, h) {
      if (typeof l.ref == "string" && rt.current && h && rt.current.stateNode !== h) {
        var x = de(rt.current.type);
        Xt[x] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(rt.current.type), l.ref), Xt[x] = !0);
      }
    }
    function oi(l, h) {
      {
        var x = function() {
          rr || (rr = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        x.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function si(l, h) {
      {
        var x = function() {
          ar || (ar = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        x.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var li = function(l, h, x, R, X, J, U) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: h,
        ref: x,
        props: U,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function ci(l, h, x, R, X) {
      {
        var J, U = {}, Y = null, ce = null;
        x !== void 0 && (nr(x), Y = "" + x), ai(h) && (nr(h.key), Y = "" + h.key), ri(h) && (ce = h.ref, ii(h, X));
        for (J in h)
          yt.call(h, J) && !ni.hasOwnProperty(J) && (U[J] = h[J]);
        if (l && l.defaultProps) {
          var te = l.defaultProps;
          for (J in te)
            U[J] === void 0 && (U[J] = te[J]);
        }
        if (Y || ce) {
          var ne = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          Y && oi(U, ne), ce && si(U, ne);
        }
        return li(l, Y, ce, X, R, rt.current, U);
      }
    }
    var Zt = j.ReactCurrentOwner, ir = j.ReactDebugCurrentFrame;
    function Xe(l) {
      if (l) {
        var h = l._owner, x = Me(l.type, l._source, h ? h.type : null);
        ir.setExtraStackFrame(x);
      } else
        ir.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function Jt(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function or() {
      {
        if (Zt.current) {
          var l = de(Zt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function fi(l) {
      {
        if (l !== void 0) {
          var h = l.fileName.replace(/^.*[\\\/]/, ""), x = l.lineNumber;
          return `

Check your code at ` + h + ":" + x + ".";
        }
        return "";
      }
    }
    var sr = {};
    function ui(l) {
      {
        var h = or();
        if (!h) {
          var x = typeof l == "string" ? l : l.displayName || l.name;
          x && (h = `

Check the top-level render call using <` + x + ">.");
        }
        return h;
      }
    }
    function lr(l, h) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var x = ui(h);
        if (sr[x])
          return;
        sr[x] = !0;
        var R = "";
        l && l._owner && l._owner !== Zt.current && (R = " It was passed a child from " + de(l._owner.type) + "."), Xe(l), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, R), Xe(null);
      }
    }
    function cr(l, h) {
      {
        if (typeof l != "object")
          return;
        if (qt(l))
          for (var x = 0; x < l.length; x++) {
            var R = l[x];
            Jt(R) && lr(R, h);
          }
        else if (Jt(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var X = O(l);
          if (typeof X == "function" && X !== l.entries)
            for (var J = X.call(l), U; !(U = J.next()).done; )
              Jt(U.value) && lr(U.value, h);
        }
      }
    }
    function di(l) {
      {
        var h = l.type;
        if (h == null || typeof h == "string")
          return;
        var x;
        if (typeof h == "function")
          x = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === m))
          x = h.propTypes;
        else
          return;
        if (x) {
          var R = de(h);
          Va(x, l.props, "prop", R, l);
        } else if (h.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var X = de(h);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mi(l) {
      {
        for (var h = Object.keys(l.props), x = 0; x < h.length; x++) {
          var R = h[x];
          if (R !== "children" && R !== "key") {
            Xe(l), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Xe(null);
            break;
          }
        }
        l.ref !== null && (Xe(l), A("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    function fr(l, h, x, R, X, J) {
      {
        var U = je(l);
        if (!U) {
          var Y = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = fi(X);
          ce ? Y += ce : Y += or();
          var te;
          l === null ? te = "null" : qt(l) ? te = "array" : l !== void 0 && l.$$typeof === t ? (te = "<" + (de(l.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : te = typeof l, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, Y);
        }
        var ne = ci(l, h, x, X, J);
        if (ne == null)
          return ne;
        if (U) {
          var he = h.children;
          if (he !== void 0)
            if (R)
              if (qt(he)) {
                for (var Ze = 0; Ze < he.length; Ze++)
                  cr(he[Ze], l);
                Object.freeze && Object.freeze(he);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(he, l);
        }
        return l === r ? mi(ne) : di(ne), ne;
      }
    }
    function pi(l, h, x) {
      return fr(l, h, x, !0);
    }
    function bi(l, h, x) {
      return fr(l, h, x, !1);
    }
    var hi = bi, gi = pi;
    it.Fragment = r, it.jsx = hi, it.jsxs = gi;
  }()), it;
}
process.env.NODE_ENV === "production" ? mn.exports = wi() : mn.exports = ki();
var Ln = mn.exports;
const la = Ln.Fragment, d = Ln.jsx, W = Ln.jsxs, $i = p.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme: e }) => e.background.background};
    z-index: 1;
`, Ci = yi`
    0% { opacity: 0; }
    33% { opacity: 0; }
    99%   { opacity: 0.5; }
`, Si = p.div`
    position: absolute;
    background-image: url(${(e) => e.src});
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    opacity: 0.5;
    mix-blend-mode: multiply;
    filter: blur(0px);
    transform: scale(1.2);
    animation: ${Ci} 3s;
`, Df = ({ src: e = null }) => /* @__PURE__ */ d($i, { className: "background", children: /* @__PURE__ */ d(Si, { className: "background__inner", src: e }) }), Ei = ae`
    background: ${({ theme: e }) => e.button.background};
    border: ${({ theme: e }) => e.button.border};
    color: ${({ theme: e }) => e.button.color};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({ theme: e }) => e.button.hover.background};
        border: ${({ theme: e }) => e.button.hover.border};
        color: ${({ theme: e }) => e.button.hover.color};
    }
    &:active {
        background: ${({ theme: e }) => e.button.active.background};
        border: ${({ theme: e }) => e.button.active.border};
        color: ${({ theme: e }) => e.button.active.color};

        &:hover {
            background: ${({ theme: e }) => e.button.active.hover.background};
            border: ${({ theme: e }) => e.button.active.hover.border};
            color: ${({ theme: e }) => e.button.active.hover.color};
        }
    }
`, Pi = ae`
    background: ${({ theme: e }) => e.button.action.background};
    border: ${({ theme: e }) => e.button.action.border};
    color: ${({ theme: e }) => e.button.background};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({ theme: e }) => e.button.action.background};
        border: ${({ theme: e }) => e.button.action.border};
        color: ${({ theme: e }) => e.button.hover.background};
    }

    &:active {
        background: ${({ theme: e }) => e.button.action.background};
        border: ${({ theme: e }) => e.button.action.border};
        color: ${({ theme: e }) => e.button.active.background};

        &:hover {
            background: ${({ theme: e }) => e.button.action.background};
            border: ${({ theme: e }) => e.button.action.border};
            color: ${({ theme: e }) => e.button.active.hover.background};
        }
    }
`, Ti = ae`
    background: ${({ theme: e }) => e.button.neutral.background};
    border: ${({ theme: e }) => e.button.neutral.border};
    color: ${({ theme: e }) => e.main.color};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({ theme: e }) => e.button.neutral.background};
        border: ${({ theme: e }) => e.button.neutral.border};
        color: ${({ theme: e }) => e.main.color};
    }
    &:active {
        background: ${({ theme: e }) => e.button.neutral.background};
        border: ${({ theme: e }) => e.button.neutral.border};
        color: ${({ theme: e }) => e.main.color};

        &:hover {
            background: ${({ theme: e }) => e.button.neutral.background};
            border: ${({ theme: e }) => e.button.neutral.border};
            color: ${({ theme: e }) => e.main.color};
        }
    }
`, Oi = ae`
    background: transparent;
    border: 0;
    color: ${({ theme: e }) => e.button.background};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: transparent;
        border: ${({ theme: e }) => e.button.hover.background};
        color: ${({ theme: e }) => e.button.hover.background};
    }
    &:active {
        background: transparent;
        border: ${({ theme: e }) => e.button.active.background};
        color: ${({ theme: e }) => e.button.active.background};

        &:hover {
            background: transparent;
            border: ${({ theme: e }) => e.button.active.hover.background};
            color: ${({ theme: e }) => e.button.active.hover.background};
        }
    }

    & + button,
    & + a {
        margin-left: 0;
    }
`, Ri = ae`
    background: ${({ theme: e }) => e.button.color};
    border: ${({ theme: e }) => e.button.border};
    color: ${({ theme: e }) => e.button.background};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({ theme: e }) => e.button.color};
        border: ${({ theme: e }) => e.button.border};
        color: ${({ theme: e }) => e.button.hover.background};
    }
    &:active {
        background: ${({ theme: e }) => e.button.color};
        border: ${({ theme: e }) => e.button.border};
        color: ${({ theme: e }) => e.button.active.background};

        &:hover {
            background: ${({ theme: e }) => e.button.color};
            border: ${({ theme: e }) => e.button.border};
            color: ${({ theme: e }) => e.button.active.hover.background};
        }
    }
`, jn = ae`
    text-decoration: none;
    position: relative;
    text-align: center;
    box-sizing: border-box;
    font-weight: ${({ theme: e }) => e.button.fontWeight};
    display: ${({ display: e }) => e || "block"};
    font-family: ${({ theme: e }) => e.main.font};
    width: ${({ width: e }) => e || "auto"};
    min-height: ${(e) => e.theme.button.minHeight};
    padding: ${({ icon: e, theme: t }) => e === !0 ? `${t.button.padding.vertical.xs}` : `${t.button.padding.vertical.xs} ${t.button.padding.horizontal.xs}`};
    //font-size: ${({ icon: e }) => e === !0 ? "1.333rem" : "1rem"};
    font-size: ${(e) => e.small ? ".9rem" : "1rem"};
    border-radius: ${({ rounded: e, theme: t }) => e === !0 ? "10rem" : t.layout.borderRadius.md};
    cursor: pointer;
    box-shadow: none;

    ${(e) => e.small ? "padding: .3rem .2rem;" : null}

    /* if a button is followed by a button add left margin to the trailing button */
    & + button,
    & + a {
        margin-left: 0.4rem;
    }
    
    ${({ action: e, outline: t }) => e === !0 ? Pi : t === !0 ? Ri : Ei};
    ${({ neutral: e }) => e === !0 ? Ti : ""};
    ${({ inline: e }) => e === !0 ? Oi : ""};

    svg {
        fill: currentColor;
        height: 1rem;
        width: 1em;
        margin: ${({ icon: e }) => e === !0 ? "0 0.4rem" : "0"};
    }


`, Ai = p.button`
    ${jn}
`, ca = p.a`
    ${jn}
`;
p.input`
    ${jn}
`;
const Ii = (e) => {
  const { children: t, to: n } = e;
  return /* @__PURE__ */ d(ca, { href: n, ...e, children: t });
}, _i = (e) => {
  const { children: t, href: n } = e;
  return /* @__PURE__ */ d(ca, { href: n, ...e, children: t });
};
p.div`
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
const ve = (e) => {
  const { children: t, loading: n = !1, theme: r = null, to: a = !1, href: i = !1 } = e, o = t, s = {
    ...e,
    icon: !1
  };
  return typeof o != "string" && (s.icon = !0), r !== null && typeof r == "object" && (s.themeOveride = r), a !== !1 ? /* @__PURE__ */ d(Ii, { ...s, children: o }) : i !== !1 ? /* @__PURE__ */ d(_i, { ...s, children: o }) : /* @__PURE__ */ d(Ai, { ...s, children: o });
};
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jt.apply(this, arguments);
}
function Li(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ct(e, t) {
  return ct = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, ct(e, t);
}
function ji(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ct(e, t);
}
function pn(e) {
  return pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pn(e);
}
function Fi(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Mi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function At(e, t, n) {
  return Mi() ? At = Reflect.construct.bind() : At = function(a, i, o) {
    var s = [null];
    s.push.apply(s, i);
    var c = Function.bind.apply(a, s), u = new c();
    return o && ct(u, o.prototype), u;
  }, At.apply(null, arguments);
}
function bn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return bn = function(r) {
    if (r === null || !Fi(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, a);
    }
    function a() {
      return At(r, arguments, pn(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ct(a, r);
  }, bn(e);
}
var zi = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function Di() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = [], i;
  for (i = 1; i < t.length; i += 1)
    a.push(t[i]);
  return a.forEach(function(o) {
    r = r.replace(/%[a-z]/, o);
  }), r;
}
var we = /* @__PURE__ */ function(e) {
  ji(t, e);
  function t(n) {
    var r;
    if (process.env.NODE_ENV === "production")
      r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this;
    else {
      for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
        i[o - 1] = arguments[o];
      r = e.call(this, Di.apply(void 0, [zi[n]].concat(i))) || this;
    }
    return Li(r);
  }
  return t;
}(/* @__PURE__ */ bn(Error));
function Vt(e) {
  return Math.round(e * 255);
}
function Ni(e, t, n) {
  return Vt(e) + "," + Vt(t) + "," + Vt(n);
}
function ft(e, t, n, r) {
  if (r === void 0 && (r = Ni), t === 0)
    return r(n, n, n);
  var a = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, o = i * (1 - Math.abs(a % 2 - 1)), s = 0, c = 0, u = 0;
  a >= 0 && a < 1 ? (s = i, c = o) : a >= 1 && a < 2 ? (s = o, c = i) : a >= 2 && a < 3 ? (c = i, u = o) : a >= 3 && a < 4 ? (c = o, u = i) : a >= 4 && a < 5 ? (s = o, u = i) : a >= 5 && a < 6 && (s = i, u = o);
  var f = n - i / 2, m = s + f, b = c + f, k = u + f;
  return r(m, b, k);
}
var br = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function Bi(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return br[t] ? "#" + br[t] : e;
}
var Wi = /^#[a-fA-F0-9]{6}$/, Yi = /^#[a-fA-F0-9]{8}$/, Hi = /^#[a-fA-F0-9]{3}$/, Gi = /^#[a-fA-F0-9]{4}$/, Qt = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Ui = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, qi = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Xi = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function fa(e) {
  if (typeof e != "string")
    throw new we(3);
  var t = Bi(e);
  if (t.match(Wi))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Yi)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(Hi))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(Gi)) {
    var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: r
    };
  }
  var a = Qt.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var i = Ui.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var o = qi.exec(t);
  if (o) {
    var s = parseInt("" + o[1], 10), c = parseInt("" + o[2], 10) / 100, u = parseInt("" + o[3], 10) / 100, f = "rgb(" + ft(s, c, u) + ")", m = Qt.exec(f);
    if (!m)
      throw new we(4, t, f);
    return {
      red: parseInt("" + m[1], 10),
      green: parseInt("" + m[2], 10),
      blue: parseInt("" + m[3], 10)
    };
  }
  var b = Xi.exec(t.substring(0, 50));
  if (b) {
    var k = parseInt("" + b[1], 10), T = parseInt("" + b[2], 10) / 100, P = parseInt("" + b[3], 10) / 100, O = "rgb(" + ft(k, T, P) + ")", j = Qt.exec(O);
    if (!j)
      throw new we(4, t, O);
    return {
      red: parseInt("" + j[1], 10),
      green: parseInt("" + j[2], 10),
      blue: parseInt("" + j[3], 10),
      alpha: parseFloat("" + b[4]) > 1 ? parseFloat("" + b[4]) / 100 : parseFloat("" + b[4])
    };
  }
  throw new we(5);
}
function Zi(e) {
  var t = e.red / 255, n = e.green / 255, r = e.blue / 255, a = Math.max(t, n, r), i = Math.min(t, n, r), o = (a + i) / 2;
  if (a === i)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: o,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: o
    };
  var s, c = a - i, u = o > 0.5 ? c / (2 - a - i) : c / (a + i);
  switch (a) {
    case t:
      s = (n - r) / c + (n < r ? 6 : 0);
      break;
    case n:
      s = (r - t) / c + 2;
      break;
    default:
      s = (t - n) / c + 4;
      break;
  }
  return s *= 60, e.alpha !== void 0 ? {
    hue: s,
    saturation: u,
    lightness: o,
    alpha: e.alpha
  } : {
    hue: s,
    saturation: u,
    lightness: o
  };
}
function ua(e) {
  return Zi(fa(e));
}
var Ki = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, hn = Ki;
function ze(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function en(e) {
  return ze(Math.round(e * 255));
}
function Ji(e, t, n) {
  return hn("#" + en(e) + en(t) + en(n));
}
function Ft(e, t, n) {
  return ft(e, t, n, Ji);
}
function Vi(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return Ft(e, t, n);
  if (typeof e == "object" && t === void 0 && n === void 0)
    return Ft(e.hue, e.saturation, e.lightness);
  throw new we(1);
}
function Qi(e, t, n, r) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
    return r >= 1 ? Ft(e, t, n) : "rgba(" + ft(e, t, n) + "," + r + ")";
  if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
    return e.alpha >= 1 ? Ft(e.hue, e.saturation, e.lightness) : "rgba(" + ft(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new we(2);
}
function gn(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return hn("#" + ze(e) + ze(t) + ze(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return hn("#" + ze(e.red) + ze(e.green) + ze(e.blue));
  throw new we(6);
}
function eo(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var a = fa(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? gn(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? gn(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new we(7);
}
var to = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, no = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, ro = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, ao = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
};
function da(e) {
  if (typeof e != "object")
    throw new we(8);
  if (no(e))
    return eo(e);
  if (to(e))
    return gn(e);
  if (ao(e))
    return Qi(e);
  if (ro(e))
    return Vi(e);
  throw new we(8);
}
function ma(e, t, n) {
  return function() {
    var a = n.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : ma(e, t, a);
  };
}
function pa(e) {
  return ma(e, e.length, []);
}
function ba(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function io(e, t) {
  if (t === "transparent")
    return t;
  var n = ua(t);
  return da(jt({}, n, {
    lightness: ba(0, 1, n.lightness - parseFloat(e))
  }));
}
var oo = /* @__PURE__ */ pa(io), ha = oo;
function so(e, t) {
  if (t === "transparent")
    return t;
  var n = ua(t);
  return da(jt({}, n, {
    lightness: ba(0, 1, n.lightness + parseFloat(e))
  }));
}
var lo = /* @__PURE__ */ pa(so), co = lo;
const y = {
  simplyRed: "#e83948",
  orangeCrush: "#f7823b",
  yellowSubmarine: "#f9bd45",
  fadeToGrey: "#b7c9db",
  mrBlueSky: "#b3d5e1",
  paintItBlack: "#1C2229",
  blueMonday: "#30a4c5",
  greenDay: "#7cc530",
  purpleRain: "#6033b9"
}, S = {
  blueWhite: "#F3FBFD",
  lightGrey: "#eef0f4",
  lightBlueGrey: "#787e89",
  midGrey: "#e7e7e7",
  blueGrey: "#6a707d",
  // darkGrey: '#696f7c' /* nice */,
  darkGrey: "#787E89",
  white: "#ffffff",
  green: "#7ec17e",
  sliverColor: "rgb(199,55,71)",
  sliverGradient: "linear-gradient(90deg, rgba(199,55,71,1) 0%, rgba(223,172,51,1) 20%, rgba(142,182,59,1) 40%, rgba(251,253,254,1) 60%, rgba(102,175,208,1) 80%, rgba(63,83,158,1) 100%)"
};
function Fn(e, t) {
  const n = { ...e };
  return Object.keys(t).forEach((r) => {
    typeof t[r] == "object" ? n[r] = { ...n[r], ...t[r] } : n[r] = t[r];
  }), n;
}
const ge = {
  main: {
    spacing: 1.6,
    background: S.midGrey,
    font: "MuseoSansReg, sans-serif",
    borderRadius: "0.45rem",
    color: y.paintItBlack,
    bodyColor: S.lightBlueGrey,
    contrastColor: S.white,
    fontSize: "15px",
    fontWeight: "400",
    boxBackground: S.white,
    border: S.midGrey,
    brand: y.paintItBlack
  },
  layout: {
    breakpoints: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px"
    },
    borderRadius: {
      lg: "0.667rem",
      sm: "0.276rem",
      md: "0.4rem"
    },
    margin: "2rem",
    padding: {
      horizontal: {
        lg: "1.333rem",
        sm: "1rem",
        xs: "0.6rem"
      },
      vertical: {
        lg: "1rem",
        sm: "1rem",
        xs: "0.5rem"
      }
    },
    gap: {
      lg: "2rem",
      sm: "1rem"
    }
  },
  container: {
    maxWidth: {
      lg: "1060px",
      md: "720px",
      sm: "100%"
    },
    padding: {
      horizontal: {
        lg: "1.333rem",
        sm: "1.333rem"
      },
      vertical: {
        lg: "1.333rem",
        sm: "1rem"
      }
    },
    margin: {
      lg: "0 auto 2rem",
      sm: "0 auto 1rem"
    }
  },
  table: {
    header: {
      background: S.white,
      color: y.paintItBlack,
      border: S.midGrey
    },
    row: {
      background: S.white,
      color: y.paintItBlack,
      hover: {
        background: S.lightGrey
      }
    }
  },
  actionPanel: {
    color: y.paintItBlack,
    base: {
      background: "#F2FCFF",
      border: "#7BC5DA"
    },
    over: {
      background: y.mrBlueSky,
      border: y.blueMonday
    }
  },
  // styling for each component
  background: {
    background: y.paintItBlack
  },
  form: {
    input: {
      background: S.lightGrey,
      color: S.darkGrey,
      placeholder: ha(0.12, S.midGrey),
      fontSize: "1rem",
      small: {
        color: y.paintItBlack,
        fontSize: "0.875rem"
      },
      border: S.midGrey
    },
    label: {
      color: y.paintItBlack,
      fontSize: "1rem",
      margin: "0.666rem",
      small: {
        color: y.paintItBlack,
        fontSize: "0.875rem"
      }
    },
    select: {
      background: S.lightGrey,
      color: S.darkGrey,
      border: S.midGrey
    },
    checkbox: {
      checkColour: S.white
    },
    switch: {
      background: S.lightGrey,
      border: S.midGrey
    }
  },
  text: {
    h1: {
      color: S.white,
      fontSize: "3rem",
      padding: "1rem 0",
      margin: "0"
    },
    h2: {
      color: y.paintItBlack,
      fontSize: "1.5rem",
      padding: "1rem 0",
      margin: "0"
    },
    h3: {
      color: y.paintItBlack,
      fontSize: "1.125rem",
      padding: "0.785rem 0",
      margin: "0"
    },
    h4: {
      color: y.paintItBlack,
      fontSize: "1rem",
      padding: "0.75rem 0",
      margin: "0"
    },
    h5: {
      color: y.paintItBlack,
      fontSize: "0.875rem",
      padding: "0",
      margin: "0"
    },
    h6: {
      color: y.paintItBlack,
      fontSize: "0.875rem",
      fontStyle: "italic",
      padding: "0",
      margin: "0"
    },
    p: {
      color: y.paintItBlack,
      fontSize: "1rem",
      small: {
        color: y.paintItBlack,
        fontSize: "0.875rem"
      }
    }
  },
  selectionPanel: {
    background: S.lightGrey,
    color: y.blueMonday,
    active: {
      background: y.blueMonday,
      color: S.white
    }
  },
  nowPlaying: {
    artistColor: S.blueGrey,
    loaderColor: y.simplyRed,
    volumeMain: y.simplyRed,
    volumeBg: y.fadeToGrey
  },
  rowComponent: {
    actionShadow: S.lightBlueGrey
  },
  pagination: {
    color: S.lightBlueGrey
  },
  toast: {
    background: S.white,
    color: S.lightBlueGrey,
    highlight: {
      success: y.greenDay,
      danger: y.simplyRed,
      warning: y.yellowSubmarine,
      default: S.lightBlueGrey,
      information: y.blueMonday
    }
  },
  dashboard: {
    online: y.greenDay,
    offline: y.simplyRed,
    fetching: S.lightBlueGrey
  },
  button: {
    background: y.paintItBlack,
    color: S.white,
    minHeight: "2rem",
    fontWeight: "400",
    padding: {
      vertical: {
        xs: "0.6rem",
        sm: "0.6rem"
      },
      horizontal: {
        xs: "1.5rem",
        sm: "1.5rem"
      }
    },
    border: `2px solid ${y.paintItBlack}`,
    hover: {
      background: y.paintItBlack,
      color: S.white,
      border: `2px solid ${y.paintItBlack}`
    },
    active: {
      background: y.paintItBlack,
      color: S.white,
      border: `2px solid ${y.paintItBlack}`,
      hover: {
        background: y.paintItBlack,
        color: S.white,
        border: `2px solid ${y.paintItBlack}`
      }
    },
    action: {
      background: S.lightGrey,
      border: `2px solid ${S.lightGrey}`
    },
    neutral: {
      background: y.fadeToGrey,
      border: `2px solid ${y.fadeToGrey}`
    }
  },
  tabs: {
    color: y.fadeToGrey,
    tab: {
      color: y.paintItBlack,
      active: y.simplyRed,
      border: `3px solid ${y.simplyRed}`
    }
  },
  mainColors: y,
  generalColors: S,
  colors: { ...y, ...S }
};
Fn(ge, {
  main: {
    brand: y.simplyRed
  },
  button: {
    background: y.simplyRed,
    color: S.white,
    border: `2px solid ${y.simplyRed}`,
    hover: {
      background: y.simplyRed,
      color: S.white,
      border: `2px solid ${y.simplyRed}`
    },
    active: {
      background: y.simplyRed,
      color: S.white,
      border: `2px solid ${y.simplyRed}`,
      hover: {
        background: y.simplyRed,
        color: S.white,
        border: `2px solid ${y.simplyRed}`
      }
    }
  },
  form: {
    input: {
      background: S.lightGrey,
      color: S.darkGrey
    }
  }
});
Fn(ge, {
  main: {
    brand: y.mrBlueSky
  },
  button: {
    background: y.mrBlueSky,
    color: S.white,
    border: `2px solid ${y.mrBlueSky}`,
    hover: {
      background: y.mrBlueSky,
      color: S.white,
      border: `2px solid ${y.mrBlueSky}`
    },
    active: {
      background: y.mrBlueSky,
      color: S.white,
      border: `2px solid ${y.mrBlueSky}`,
      hover: {
        background: y.mrBlueSky,
        color: S.white,
        border: `2px solid ${y.mrBlueSky}`
      }
    }
  },
  form: {
    input: {
      background: S.lightGrey,
      color: S.darkGrey
    }
  }
});
Fn(ge, {
  main: {
    brand: y.greenDay
  },
  button: {
    background: y.greenDay,
    color: S.white,
    border: `2px solid ${y.greenDay}`,
    hover: {
      background: y.greenDay,
      color: S.white,
      border: `2px solid ${y.greenDay}`
    },
    active: {
      background: y.greenDay,
      color: S.white,
      border: `2px solid ${y.greenDay}`,
      hover: {
        background: y.greenDay,
        color: S.white,
        border: `2px solid ${y.greenDay}`
      }
    }
  },
  form: {
    input: {
      background: S.lightGrey,
      color: S.darkGrey,
      placeholder: ha(0.12, S.midGrey),
      fontSize: "1rem",
      small: {
        color: y.greenDay,
        fontSize: "0.875rem"
      },
      border: S.midGrey
    },
    label: {
      color: y.greenDay,
      fontSize: "1rem",
      small: {
        color: y.greenDay,
        fontSize: "0.875rem"
      }
    },
    select: {
      background: S.lightGrey,
      color: S.darkGrey,
      border: S.midGrey
    }
  }
});
const ga = () => /* @__PURE__ */ d("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("g", { id: "Icon/Times", stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ d(
  "path",
  {
    d: "M44.1308425,32 L62.3254196,50.194577 C64.5581935,52.4291265 64.5581935,56.0489723 62.3254196,58.2817462 L58.2817462,62.3254196 C56.0489723,64.5581935 52.4271734,64.5581935 50.194577,62.3254196 L32,44.1308425 L13.805423,62.3254196 C11.5728266,64.5581935 7.95102768,64.5581935 5.71825379,62.3254196 L1.67458042,58.2817462 C-0.558193473,56.0471968 -0.558193473,52.4271734 1.67458042,50.194577 L19.8691575,32 L1.67458042,13.805423 C-0.558193473,11.5708735 -0.558193473,7.95102768 1.67458042,5.71825379 L5.71825379,1.67458042 C7.95280324,-0.558193473 11.5728266,-0.558193473 13.805423,1.67458042 L32,19.8691575 L50.194577,1.67458042 C52.4291265,-0.558193473 56.0489723,-0.558193473 58.2817462,1.67458042 L62.3254196,5.71825379 C64.5581935,7.95280324 64.5581935,11.5728266 62.3254196,13.805423 L44.1308425,32 Z",
    id: "🎨-Icon-Fill"
  }
) }) }), fo = p.div`
    display: inline-flex;
    border-radius: 10.325em;
    margin: 0 0.325em 0 0;
    overflow: hidden;
    background: ${({ backgroundColor: e }) => e};
    color: ${({ color: e }) => e};
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
`, uo = (e, t) => {
  if (console.log("onRemove", e), e === null)
    return null;
  const { label: n, name: r, value: a } = t;
  return /* @__PURE__ */ d("button", { type: "button", onClick: e, label: n, name: r, value: a, children: /* @__PURE__ */ d(ga, {}) });
}, mo = () => null;
function po(e) {
  let t = "white";
  return e !== null && (t = e), t;
}
const Nf = ({ label: e, value: t, name: n = null, color: r = "red", textColor: a = null, onClick: i = null, onRemove: o = null }) => {
  let s = n;
  n === null && (s = `chip-name-${e}`);
  let c = mo;
  i !== null && (c = i);
  const u = po(a);
  return /* @__PURE__ */ W(fo, { backgroundColor: r, color: u, children: [
    /* @__PURE__ */ W(
      "label",
      {
        htmlFor: s,
        onClick: c,
        children: [
          /* @__PURE__ */ d("input", { type: "checkbox", name: s, value: t, defaultChecked: !0 }),
          e
        ]
      }
    ),
    uo(o, { label: e, name: n, value: t })
  ] });
}, bo = p.div`
    margin-bottom: 1em;
`, Bf = ({ value: e, isOpen: t, handleChangeOverlayColor: n, id: r, toggleColorPicker: a, removeOverlayColor: i }) => (console.log(e), /* @__PURE__ */ W("div", { className: "color-picker", children: [
  /* @__PURE__ */ W(
    ve,
    {
      title: "Show Color Picker",
      style: {
        background: "#eef0f4",
        border: "1px solid #eef0f4",
        padding: ".5em",
        display: "flex",
        alignItems: "center"
      },
      type: "button",
      onClick: () => {
        a(t);
      },
      children: [
        /* @__PURE__ */ d(
          "span",
          {
            className: "color-toggle",
            style: {
              backgroundColor: e !== null && e !== "" && e !== "undefined" ? `#${e}` : "#FFF"
            }
          }
        ),
        /* @__PURE__ */ d(
          "span",
          {
            style: {
              marginLeft: ".5em",
              color: e !== null && e !== "" && e !== "undefined" ? `#${e}` : "#787e89",
              fontWeight: "normal"
            },
            children: e !== null && e !== "" && e !== "undefined" ? `#${e}` : "none"
          }
        ),
        /* @__PURE__ */ d("span", { className: "sr-only", children: "Pick Color" })
      ]
    }
  ),
  t ? /* @__PURE__ */ W(
    "div",
    {
      className: "picker",
      style: {
        backgroundColor: "#FFF",
        padding: "3px",
        borderRadius: "3px",
        zIndex: "1",
        boxShadow: "inset 0 0 5px 0px #b7c9db"
      },
      children: [
        /* @__PURE__ */ d(
          ChromePicker,
          {
            disableAlpha: !0,
            color: e !== null ? e : "#FFF",
            onChangeComplete: (o, s) => {
              n(o, s);
            }
          }
        ),
        e !== null && e !== "" && e !== "undefined" ? /* @__PURE__ */ W(bo, { children: [
          /* @__PURE__ */ d(
            ve,
            {
              product: "positive",
              type: "button",
              onClick: () => {
                a(t);
              },
              children: "Save"
            }
          ),
          /* @__PURE__ */ d(
            ve,
            {
              product: "negative",
              type: "button",
              onClick: () => {
                i();
              },
              children: "Clear"
            }
          )
        ] }) : null
      ]
    }
  ) : null
] })), ho = ae`
    background: ${(e) => e.theme.containers.background || ""};
    border-radius: ${(e) => e.theme.main.borderRadius || ""};
    border: ${(e) => e.theme.containers.border || ""};
    margin: ${(e) => e.theme.containers.podSeperator || 0};
    min-width:300px;
    width: 100%;
`, go = p.article`
    ${ho}
`, vo = ae`
    display:flex;
    justify-content: ${(e) => e.align || "center"};
    align-items: ${(e) => e.position || "center"};
    flex-direction: ${(e) => e.column || "column"};
    width: 100%;
    overflow-x: auto;
    ${(e) => e.image ? `
            background-image: url(${e.image});
            background-position: ${e.imagePosition || "left"}; 
            background-size: ${e.imageSize || "cover"};
            background-repeat: no-repeat; 
        ` : " "}
    
`, yo = p.div`
    ${vo}
`, xo = ae`
    width: 100%;
    padding: ${(e) => e.theme.containers.padding};
    box-sizing: border-box;
`, wo = p.header`
    ${xo}
`, ko = ae`
    width: 100%;
    padding: ${(e) => e.theme.containers.padding};
    box-sizing: border-box;
`, $o = p.div`
    ${ko}
`, Co = ae`
    display:flex;
    width: 100%;
    background: ${(e) => e.theme.containers.background};
    flex-direction: column;
    flex: ${(e) => e.size || 1};
    justify-content: center;
    ${(e) => e.image ? `
            height: 100%;
            background-image: url(${e.image});
            background-size: ${e.imageSize || "cover"};
            background-repeat: no-repeat; 
            background-position: ${e.imagePos || "center center"} ;
        ` : " "}
    
    @media(max-width:500px){
        flex-direction: column;    
        ${(e) => e.mobile === !1 ? `
                display:none;
            ` : ""}
    }
`, So = p.div`
    ${Co}
`, Eo = ae`
    display: flex;
    width: 100%;
    position: relative;
    padding: 5.5rem 0;
    ${(e) => e.image ? `
            
            background-image: url(${e.image});
            background-size: ${e.imageSize || "cover"};
            background-repeat: no-repeat; 
            background-position:  ${e.imagePos || "cover"};
        ` : " "}

    @media(max-width:500px){
        flex-direction: column;
    }
    `, Po = p.div`
    ${Eo}
`, Wf = go, Yf = yo, Hf = wo, Gf = $o, Uf = So, qf = Po, To = p.section`
    display: block;
    background: ${(e) => e.theme.main.contrastColor};
    border-radius: ${(e) => e.theme.layout.borderRadius.sm};
    padding: ${(e) => e.padded ? `${e.theme.container.padding.vertical.sm} ${e.theme.container.padding.horizontal.sm}` : 0};
    max-width: ${(e) => e.wide ? "100%" : e.theme.container.maxWidth.sm};
    margin: ${(e) => e.margin ? e.theme.container.margin.sm : 0};
    container-type: inline-size;

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        border-radius: ${(e) => e.theme.layout.borderRadius.lg};
        padding: ${(e) => e.padded ? `${e.theme.container.padding.vertical.lg} ${e.theme.container.padding.horizontal.lg}` : 0};
        max-width: ${(e) => e.wide ? "100%" : e.theme.container.maxWidth.lg};
        margin: ${(e) => e.margin ? e.theme.container.margin.lg : 0};
    }
`, Xf = p.div`
    max-width: ${(e) => e.narrow ? e.theme.container.maxWidth.sm : "100%"};
    padding: ${(e) => e.padded ? `${e.theme.container.padding.vertical.sm} ${e.theme.container.padding.horizontal.sm}` : 0};
    margin: 0 auto;

    & + & {
        padding-top: 0;
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        max-width: ${(e) => e.narrow ? e.theme.container.maxWidth.md : "100%"};
        padding: ${(e) => e.padded ? `${e.theme.container.padding.vertical.lg} ${e.theme.container.padding.horizontal.lg}` : 0};
    }
`;
function Zf({ padded: e, margin: t = !0, children: n, wide: r }) {
  return /* @__PURE__ */ d(To, { padded: e, wide: r, margin: t, children: n });
}
const Oo = p.div`
    display: ${(e) => e.passthrough ? "contents" : "block"};
`;
function Ro({ check: e, value: t, passThrough: n, children: r }) {
  return e === t ? /* @__PURE__ */ d(Oo, { passthrough: n, children: r }) : null;
}
const Ao = p.div`
    //grid-row: 1;
    grid-column: col-start 1 / span 12;
    display: flex;
    margin-bottom: ${(e) => e.theme.layout.padding.vertical.sm};

    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.sm}) {
        margin-bottom: 0;
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        grid-column: ${(e) => e.offset ? `col-start ${e.offset} / span ${e.span}` : `span ${e.span}`};
        justify-content: ${(e) => e.pull === "right" ? "flex-end" : "flex-start"};
        align-items: ${(e) => e.align === "top" ? "flex-start" : "flex-end"};
    }
`, Kf = p.div`
    width: 100%;
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-auto-flow: row;
    margin: ${(e) => e.margin ? e.margin : "0"};

    @media (min-width: ${(e) => e.theme.layout.breakpoints.sm}) {
        display: grid;
        gap: ${(e) => e.theme.layout.gap.sm};
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        gap: ${(e) => e.theme.layout.gap.lg};
    }

    ${Ro} {
        display: contents;
    }
`;
function Jf({ span: e = 4, offset: t = "", pull: n = "left", align: r = "top", children: a }) {
  return /* @__PURE__ */ d(Ao, { span: e, offset: t, pull: n, align: r, children: a });
}
const Io = () => /* @__PURE__ */ d("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("g", { id: "Icon/Check-Circle-Light", stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ d(
  "path",
  {
    d: "M32,0 C49.6731351,0 64,14.3268649 64,32 C64,49.6731351 49.6731351,64 32,64 C14.3268649,64 0,49.6731351 0,32 C0,14.3268649 14.3268649,0 32,0 Z M32,59.8709677 C47.4768145,59.8709677 59.8709677,47.3113659 59.8709677,32 C59.8709677,16.5231855 47.3114919,4.12903226 32,4.12903226 C16.5231855,4.12903226 4.12903226,16.6886341 4.12903226,32 C4.12903226,47.4768145 16.6885081,59.8709677 32,59.8709677 Z M50.2748236,24.3921371 L26.9871472,47.4930696 C26.3800403,48.0952621 25.3995716,48.0913558 24.797379,47.484249 L13.7163558,36.3136341 C13.1141633,35.7065272 13.1180696,34.7261845 13.7251764,34.1239919 L14.8244708,33.0335181 C15.4315776,32.4313256 16.4120464,32.4352319 17.0142389,33.0423387 L25.9143145,42.0143649 L47.0035282,21.09438 C47.6106351,20.4921875 48.5909778,20.4959677 49.1931704,21.1030746 L50.2836442,22.202495 C50.8859627,22.8096018 50.8819304,23.7899446 50.2748236,24.3921371 Z",
    id: "🎨-Icon-Fill"
  }
) }) }), _o = () => /* @__PURE__ */ d("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("g", { id: "Icon/Exclamation-Circle-Light", stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ d(
  "path",
  {
    d: "M32,4.12903226 C16.59375,4.12903226 4.12903226,16.6189516 4.12903226,32 C4.12903226,47.4114163 16.6136593,59.8709677 32,59.8709677 C47.4051159,59.8709677 59.8709677,47.3923891 59.8709677,32 C59.8709677,16.5258317 47.3059476,4.12903226 32,4.12903226 Z M32,0 C49.671875,0 64,14.3332913 64,32 C64,49.6770413 49.671875,64 32,64 C14.328125,64 0,49.6770413 0,32 C0,14.3332913 14.328125,0 32,0 Z M30.5173891,15.483871 L33.4824849,15.483871 C34.3627772,15.483871 35.0661542,16.2169859 35.0294859,17.0967742 L34.1262601,38.7741935 C34.0917339,39.6035786 33.4094002,40.2580645 32.5792591,40.2580645 L31.4206149,40.2580645 C30.5905998,40.2580645 29.9081401,39.6034526 29.8734879,38.7741935 L28.9702621,17.0967742 C28.9338458,16.2169859 29.6369708,15.483871 30.5173891,15.483871 Z M32,42.8387097 C33.9953377,42.8387097 35.6129032,44.4562752 35.6129032,46.4516129 C35.6129032,48.4469506 33.9953377,50.0645161 32,50.0645161 C30.0046623,50.0645161 28.3870968,48.4469506 28.3870968,46.4516129 C28.3870968,44.4562752 30.0046623,42.8387097 32,42.8387097 Z",
    id: "🎨-Icon-Fill"
  }
) }) }), Lo = () => /* @__PURE__ */ d("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("g", { id: "Icon/Times-Circle-Light", stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ d(
  "path",
  {
    d: "M32,0 C49.6774194,0 64,14.3225806 64,32 C64,49.6774194 49.6774194,64 32,64 C14.3225806,64 0,49.6774194 0,32 C0,14.3225806 14.3225806,0 32,0 Z M32,59.8709677 C47.4710181,59.8709677 59.8709677,47.3161542 59.8709677,32 C59.8709677,16.5289819 47.3161542,4.12903226 32,4.12903226 C16.5289819,4.12903226 4.12903226,16.6838458 4.12903226,32 C4.12903226,47.4710181 16.6838458,59.8709677 32,59.8709677 Z M44.2322329,23.0580897 L35.2903226,32 L44.2322329,40.9419103 C44.8387097,41.5483871 44.8387097,42.5289819 44.2322329,43.1354587 L43.1354587,44.2322329 C42.5289819,44.8387097 41.5483871,44.8387097 40.9419103,44.2322329 L32,35.2903226 L23.0580897,44.2322329 C22.4516129,44.8387097 21.4710181,44.8387097 20.8645413,44.2322329 L19.7677671,43.1354587 C19.1612903,42.5289819 19.1612903,41.5483871 19.7677671,40.9419103 L28.7096774,32 L19.7677671,23.0580897 C19.1612903,22.4516129 19.1612903,21.4710181 19.7677671,20.8645413 L20.8645413,19.7677671 C21.4710181,19.1612903 22.4516129,19.1612903 23.0580897,19.7677671 L32,28.7096774 L40.9419103,19.7677671 C41.5483871,19.1612903 42.5289819,19.1612903 43.1354587,19.7677671 L44.2322329,20.8645413 C44.8258569,21.4710181 44.8258569,22.4516129 44.2322329,23.0580897 Z",
    id: "🎨-Icon-Fill"
  }
) }) }), hr = () => /* @__PURE__ */ d("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("g", { id: "Icon/Info-Circle-Light", stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ d(
  "path",
  {
    d: "M32,4.12903226 C16.59375,4.12903226 4.12903226,16.6189516 4.12903226,32 C4.12903226,47.4114163 16.6136593,59.8709677 32,59.8709677 C47.4051159,59.8709677 59.8709677,47.3923891 59.8709677,32 C59.8709677,16.5258317 47.3059476,4.12903226 32,4.12903226 Z M32,0 C49.671875,0 64,14.3332913 64,32 C64,49.6770413 49.671875,64 32,64 C14.328125,64 0,49.6770413 0,32 C0,14.3332913 14.328125,0 32,0 Z M27.3548387,44.3870968 L28.9032258,44.3870968 L28.9032258,28.9032357 L27.3548387,28.9032357 C26.499748,28.9032357 25.8064516,28.2099294 25.8064516,27.3548387 L25.8064516,26.3225806 C25.8064516,25.4674899 26.499748,24.7741935 27.3548387,24.7741935 L33.5483871,24.7741935 C34.4034778,24.7741935 35.0967742,25.4674899 35.0967742,26.3225806 L35.0967742,44.3870968 L36.6451613,44.3870968 C37.500252,44.3870968 38.1935484,45.0803931 38.1935484,45.9354839 L38.1935484,46.9677419 C38.1935484,47.8228327 37.500252,48.516129 36.6451613,48.516129 L27.3548387,48.516129 C26.499748,48.516129 25.8064516,47.8228327 25.8064516,46.9677419 L25.8064516,45.9354839 C25.8064516,45.0803931 26.499748,44.3870968 27.3548387,44.3870968 Z M32.0000098,13.4193548 C34.2803679,13.4193548 36.1290519,15.2680192 36.1290519,17.5483969 C36.1290519,19.828755 34.2803679,21.677439 32.0000098,21.677439 C29.7196321,21.677439 27.8709677,19.828755 27.8709677,17.5483969 C27.8709677,15.2680192 29.7196321,13.4193548 32.0000098,13.4193548 Z",
    id: "🎨-Icon-Fill"
  }
) }) }), jo = p.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 15px 30px 15px 15px;
    margin-bottom: 30px;
    font-size: 1rem;
    color: ${(e) => e.borderColor};
    border-radius: 0.45em;
    width: 100%;
    background-color: ${(e) => e.backgroundColor};
    border: 0.15rem solid ${(e) => e.borderColor};
    justify-content: space-between;
    align-items: center;
`, Fo = p.p`
    font-size: 0.9em;
    color: ${(e) => e.color};
    text-align: left;
    flex-grow: 1;
`, Mo = p.div`
    display: flex;
`, zo = p.button`
    width: 0.8rem;
    height: 0.8rem;

    svg {
        width: 100%;
        height: 100%;
    }
    &:hover {
        opacity: 0.8;
    }
`, Do = p.div`
    width: 1rem;
    height: 1rem;
    justify-self: flex-start;
    margin-right: 15px;

    svg {
        width: 100%;
        height: 100%;
    }
`, No = p.div`
    text-align: ${(e) => e.align};
    margin: 0.5em 0 0.5em 0;
`, Vf = (e) => {
  const { type: t, children: n, clearResponseBox: r, data: a, className: i } = e, o = {
    default: {
      backgroundColor: "#E8E9EB",
      borderColor: "#9397A2"
    },
    success: {
      backgroundColor: "#EBF6E0",
      borderColor: "#9ED464"
    },
    danger: {
      backgroundColor: "#FBE1E3",
      borderColor: "#ED6C76"
    },
    warning: {
      backgroundColor: "#FEF4E2",
      borderColor: "#FACD74"
    },
    info: {
      backgroundColor: "#DFF1F6",
      borderColor: "#7BC5DA"
    }
  };
  function s(m) {
    a === "undefined" ? r() : r(m);
  }
  const c = o[t] || o.default;
  let u = () => /* @__PURE__ */ d(hr, {});
  t === "success" ? u = () => /* @__PURE__ */ d(Io, {}) : t === "danger" ? u = () => /* @__PURE__ */ d(Lo, {}) : t === "warning" ? u = () => /* @__PURE__ */ d(_o, {}) : (t === "default" || t === "info") && (u = () => /* @__PURE__ */ d(hr, {}));
  let f = () => null;
  return r !== void 0 && (f = () => /* @__PURE__ */ d(zo, { color: c.borderColor, onClick: () => s(a), children: /* @__PURE__ */ d(ga, {}) })), /* @__PURE__ */ d(No, { className: i, children: /* @__PURE__ */ W(jo, { backgroundColor: c.backgroundColor, borderColor: c.borderColor, children: [
    /* @__PURE__ */ W(Mo, { children: [
      /* @__PURE__ */ d(Do, { color: c.borderColor, children: /* @__PURE__ */ d(u, {}) }),
      /* @__PURE__ */ d(Fo, { color: c.borderColor, children: n })
    ] }),
    /* @__PURE__ */ d(f, {})
  ] }) });
};
function Bo(e, t, n, r) {
  const a = Math.ceil(e / n);
  let i = t;
  t <= 1 ? i = 1 : t > a && (i = a);
  let o = 0, s = 0;
  if (a <= r)
    o = 1, s = a;
  else {
    const m = Math.floor(r / 2), b = Math.ceil(r / 2) - 1;
    i <= m ? (o = 1, s = r) : i + b >= a ? (o = a - r + 1, s = a) : (o = i - m, s = i + b);
  }
  const c = (i - 1) * n, u = Math.min(c + n - 1, e - 1), f = Array.from(Array(s + 1 - o).keys()).map((m) => o + m);
  return {
    totalItems: e,
    thisPage: i,
    pageSize: n,
    totalPages: a,
    startPage: o,
    endPage: s,
    startIndex: c,
    endIndex: u,
    pages: f
  };
}
const Wo = () => /* @__PURE__ */ d("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("g", { id: "Icon/Arrow-Right", stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ d(
  "path",
  {
    d: "M27.211231,59.2005673 C25.8400121,57.8435768 25.8684687,55.6295397 27.2684232,54.3011453 L44.4807766,37.903014 L3.42818658,37.903014 C1.52842775,37.903014 0,36.3745863 0,34.4748275 L0,29.903912 C0,28.0041532 1.52842775,26.4757254 3.42818658,26.4757254 L44.4807766,26.4757254 L27.2684232,10.0775942 C25.8828366,8.74919982 25.8542404,6.53516266 27.211231,5.17817214 L30.3823314,2.00707165 C31.7107258,0.664309448 33.8819386,0.664309448 35.2245613,2.00707165 L62.9929283,29.7752992 C64.3356906,31.1038331 64.3356906,33.2749064 62.9929283,34.6176686 L35.2245613,62.3716678 C33.8961669,63.71443 31.7249541,63.71443 30.3823314,62.3716678 L27.211231,59.2005673 Z",
    id: "🎨-Icon-Fill"
  }
) }) }), Yo = () => /* @__PURE__ */ d("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("g", { id: "Icon/Arrow-Left", stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ d(
  "path",
  {
    d: "M36.788769,59.2005673 L33.6176686,62.3716678 C32.2750459,63.71443 30.1038331,63.71443 28.7754387,62.3716678 L1.00707165,34.6176686 C-0.335690552,33.2749064 -0.335690552,31.1038331 1.00707165,29.7752992 L28.7754387,2.00707165 C30.1180614,0.664309448 32.2892742,0.664309448 33.6176686,2.00707165 L36.788769,5.17817214 C38.1457596,6.53516266 38.1171634,8.74919982 36.7315768,10.0775942 L19.5192234,26.4757254 L60.5718134,26.4757254 C62.4715723,26.4757254 64,28.0041532 64,29.903912 L64,34.4748275 C64,36.3745863 62.4715723,37.903014 60.5718134,37.903014 L19.5192234,37.903014 L36.7315768,54.3011453 C38.1315313,55.6295397 38.1599879,57.8435768 36.788769,59.2005673 Z",
    id: "🎨-Icon-Fill"
  }
) }) }), gr = p.div`
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
            color: ${(e) => e.theme.pagination.color};
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
`, vr = p.div`
    align-self: flex-end;
    width: 0.9em;

    svg {
        width: 100%;
        height: 100%;
        fill: ${(e) => e.color};
    }

    .active & {
        svg {
            fill: red;
        }
    }
`, Ho = 20, Go = 5;
class Uo extends vi {
  constructor(t) {
    super(t), this.renderPageButton = this.renderPageButton.bind(this);
  }
  renderMore() {
    const { page: t, paginate: n } = this.props;
    return /* @__PURE__ */ d(gr, { children: /* @__PURE__ */ d(ve, { onClick: ((a) => {
      n(a);
    })(t), children: "Load More" }) });
  }
  renderPageButton(t) {
    const { paginate: n, page: r } = this.props, a = (o) => {
      n(o);
    };
    let i = "";
    return r === t || r <= 0 && t === 1 ? i = "active" : i = "number", /* @__PURE__ */ d(
      ve,
      {
        value: "Test Button",
        type: "button",
        outline: "true",
        className: i,
        onClick: () => {
          a(t);
        },
        children: t
      },
      `pagination-page-${t}`
    );
  }
  renderBackPageButton(t) {
    const { paginate: n, page: r } = this.props, a = (c) => {
      n(c);
    };
    let i = "", o = "", s = !1;
    return r > 1 && t.pages.length > 0 ? (i = "arrow", o = "#e83948") : (i = "inactivearrow", o = "#B4B7BC", s = !0), /* @__PURE__ */ d(
      ve,
      {
        disabled: s,
        className: i,
        onClick: () => {
          a(r - 1);
        },
        children: /* @__PURE__ */ d(vr, { color: o, children: /* @__PURE__ */ d(Yo, {}) })
      }
    );
  }
  renderNextPageButton(t) {
    const { paginate: n, page: r } = this.props, a = (s) => {
      n(s);
    };
    let i = "", o = "";
    return r < t.totalPages ? (i = "arrow", o = "#e83948") : (i = "inactivearrow", o = "#B4B7BC"), /* @__PURE__ */ d(
      ve,
      {
        className: i,
        onClick: () => {
          a(r + 1);
        },
        children: /* @__PURE__ */ d(vr, { color: o, children: /* @__PURE__ */ d(Wo, {}) })
      }
    );
  }
  renderPages() {
    const { page: t, totalRecords: n } = this.props, r = Bo(n, t, Ho, Go), { pages: a } = r;
    return /* @__PURE__ */ d(gr, { children: a && a.length > 1 ? /* @__PURE__ */ W(la, { children: [
      this.renderBackPageButton(r),
      a.map(this.renderPageButton),
      this.renderNextPageButton(r)
    ] }) : null });
  }
  render() {
    const { type: t } = this.props;
    switch (t) {
      case "paginate":
        return this.renderPages(t);
      case "more":
        return this.renderMore(t);
      case "none":
      default:
        return null;
    }
  }
}
const qo = (e, t, n) => {
  let r;
  return function(...a) {
    const i = this, o = function() {
      r = null, n || e.apply(i, a);
    }, s = n && !r;
    clearTimeout(r), r = setTimeout(o, t), s && e.apply(i, a);
  };
}, va = ae`
    padding: 10px 15px;
    background: ${(e) => e.background ? e.background : e.theme.main.boxBackground};
`, Xo = ae`
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
    color: ${(e) => e.theme.main.color};
    border-collapse: separate;
    border-spacing: 0 0.3rem;

    &:last-child {
        margin-bottom: 0;
    }
`, Zo = ae`
    opacity: ${(e) => e.opacity ? e.opacity : 1};
    border-radius: ${(e) => e.theme.main.borderRadius};
    min-height: 50px;

    td:first-child,
    th:first-child {
        border-radius: ${(e) => e.theme.main.borderRadius} 0 0 ${(e) => e.theme.main.borderRadius};
    }

    td:last-child,
    th:last-child {
        border-radius: 0 ${(e) => e.theme.main.borderRadius} ${(e) => e.theme.main.borderRadius} 0;
        text-align: right;
        position: sticky;
        right: 0px;
        border-left: 1px;
        padding: 10px 15px;
    }
`, Ko = p.table`
    ${Xo}

    .iconWrap {
        box-shadow: ${(e) => e.overflowed ? `-5px 0 8px -5px ${e.theme.rowComponent.actionShadow}` : "none"};
    }
`, Jo = p.div`
    overflow: auto;
    margin-bottom: 15px;

    td,
    th {
        white-space: nowrap;
    }
`;
let Qf = class extends se.Component {
  constructor(t) {
    super(t), this.state = {
      overflowed: !1
    }, this.responsiveTable = se.createRef(), this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.handleScroll();
    }, 200), window.addEventListener("resize", qo(this.handleScroll));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScroll);
  }
  handleScroll() {
    let t = !1;
    const n = this.responsiveTable.current;
    console.log(n.offsetWidth, n.scrollWidth, n.scrollLeft), n.offsetWidth < n.scrollWidth && n.offsetWidth + n.scrollLeft < n.scrollWidth && (t = !0), this.setState(() => ({ overflowed: t }));
  }
  render() {
    const { children: t, paginate: n, totalRecords: r, page: a, type: i } = this.props, { overflowed: o } = this.state;
    return /* @__PURE__ */ W(la, { children: [
      /* @__PURE__ */ d(Jo, { onScroll: this.handleScroll, ref: this.responsiveTable, children: /* @__PURE__ */ d(Ko, { overflowed: o, children: t }) }),
      /* @__PURE__ */ d(Uo, { paginate: n, page: a, totalRecords: r, type: i })
    ] });
  }
};
const Vo = p.tr`
    ${Zo}
`, tu = ({ children: e, background: t = null, opacity: n = 1, stickyActions: r = !0, className: a = null, ...i }) => /* @__PURE__ */ d(Vo, { className: a, background: t, opacity: n, stickyActions: r, ...i, children: e }), Qo = p.th`
    ${va}
    padding: 15px 15px;
`, nu = ({ children: e, className: t }) => /* @__PURE__ */ d(Qo, { className: t, children: e }), es = p.td`
    ${va}
    text-align: ${(e) => e.align ? e.align : null};
`, ru = ({ children: e, align: t, className: n }) => /* @__PURE__ */ d(es, { className: n, align: t, children: e }), ts = p.div`
    display:flex;
    width:100%;
    font-family: inherit;
    
`, ya = p.span`
    display: flex;
    align-items: center;
`, ns = p(ya)`
    font-size:18px;
    color:${({ fill: e }) => e || "#000000"};
    font-weight:700;
    padding:0 .5rem 0 0;
`, rs = p(ya)`
    font-size:15px;
    font-weight:500;
    min-width:2rem;
    color: '#333333';
`, as = ({ fill: e, leftText: t = "", rightText: n = "", Icon: r }) => /* @__PURE__ */ W(ts, { children: [
  /* @__PURE__ */ d(ns, { fill: e, children: t }),
  /* @__PURE__ */ d(rs, { children: n })
] }), is = p.div`
    display:flex;
    width:100%;
    font-family: ${(e) => e.theme && e.theme.main.font ? e.theme.main.font : "inherit"};
    align-items:center;
`, os = p.div`
    width:1.5rem;
    margin-right:.5rem;
    color: ${(e) => e.fill};
`, au = ({ fill: e, leftText: t = "", rightText: n = "", Icon: r }) => /* @__PURE__ */ W(is, { children: [
  /* @__PURE__ */ d(os, { fill: e, children: /* @__PURE__ */ d(r, { fill: e }) }),
  /* @__PURE__ */ d(as, { fill: e, leftText: t, rightText: n })
] }), Mn = ae`
    font-family: ${(e) => e.theme.main.font};
    font-weight: ${({ fontWeight: e, theme: t }) => e || t.main.fontWeight};
    margin: 0;
`, ss = p.p`
    ${Mn}
    font-size: 0.8rem;
`, ls = p.p`
    ${Mn}
    font-weight: ${({ fontWeight: e, theme: t }) => e || t.main.fontWeight};
    font-size: 0.95rem;
    color: ${(e) => e.theme.main.color};
`, cs = p.p`
    ${Mn}
    font-size: 1rem;
`, tt = ({ type: e = "heading", children: t, ...n }) => {
  switch (e.toLowerCase()) {
    case "help":
      return /* @__PURE__ */ d(ss, { ...n, children: t });
    case "small":
      return /* @__PURE__ */ d(ls, { ...n, children: t });
    default:
      return /* @__PURE__ */ d(cs, { ...n, children: t });
  }
}, fs = p.div`
    padding:.75rem;
    border-radius:10px;
    background-color:#fff;
`, us = p.div`
    margin-top:.25rem;
`, iu = ({ text: e = "", children: t, ...n }) => /* @__PURE__ */ W(fs, { ...n, children: [
  /* @__PURE__ */ d(tt, { type: "small", children: e }),
  /* @__PURE__ */ d(us, { children: t })
] }), ds = p.div`
    display: block;

    border-radius:10px;
    background-color:#fff;
    
    > * {
        display: flex;

        ${({ columnString: e }) => e !== null ? "> * { width:" + e + "; }" : null}

        ${({ columnArray: e }) => e !== null ? e.map((t, n) => "> *:nth-child(" + (n + 1) + ") { width:" + t + "; }") : null}

        

    }
    //grid-template-rows: ${({ rows: e }) => e};
`, ou = ({ children: e, columns: t = "12rem", ...n }) => /* @__PURE__ */ d(ds, { ...n, columnString: typeof t == "string" ? t : null, columnArray: typeof t != "string" ? t : null, children: e }), ms = p.div`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${(e) => e.theme.main.color};
`, su = ({ children: e }) => /* @__PURE__ */ d(ms, { children: e }), ps = p.div`
    padding: 0.6rem 0.4rem;
`, lu = ({ children: e, ...t }) => /* @__PURE__ */ d(ps, { ...t, children: e }), yr = p.div`
    padding: 0.6rem 0.4rem;
`, bs = ae`
    //color: ${(e) => e.theme.main.color};
    //font-family: ${(e) => e.theme.main.font};
    margin: 0;
`, hs = p.h4`
    ${bs}
    font-weight: 700;
    font-size: 0.95rem;
    //color: ${(e) => e.theme.main.color};
`, cu = ({ type: e, children: t }) => {
  switch (e) {
    case "smalltableheader":
      return /* @__PURE__ */ d(yr, { children: /* @__PURE__ */ d(hs, { children: t }) });
    default:
      return /* @__PURE__ */ d(yr, { children: t });
  }
}, gs = p.div`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${(e) => e.theme.main.color};

    > * {
        font-weight: 700;
    }
`, fu = ({ children: e }) => /* @__PURE__ */ d(gs, { children: e }), vs = p.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`, ys = p.div`
    display: ${(e) => e.display ? e.display : "flex"};
    flex-direction: ${(e) => e.inline ? "row" : "column"};
    padding: 0 0 ${(e) => e.theme.container.padding.vertical.lg} 0;
`;
function uu({ inline: e = !1, display: t = !1, nested: n, children: r }) {
  return /* @__PURE__ */ d(ys, { inline: e, nested: n, display: t, children: r });
}
function du({ children: e, submitButton: t, onSubmit: n, forwardRef: r = null, ...a }) {
  return /* @__PURE__ */ W(vs, { ref: r, onSubmit: n, ...a, children: [
    e,
    t
  ] });
}
const xs = p.label`
    display: block;
    font-size: 1.2rem;
    font-family: ${(e) => e.theme.main.font};
    //padding-bottom: 0.5rem;
    box-sizing: border-box;
    color: ${(e) => e.theme.main.color};
    margin: 0;
    margin-bottom: ${(e) => e.margin || e.theme.form.label.margin};
    font-weight: bold;
`, ws = p.span`
    display: inline-block;
    margin-left: 0.3rem;
`, zn = ({ children: e, required: t = !1 }) => {
  let n = () => null;
  return t && (n = /* @__PURE__ */ d(ws, { children: "*" })), /* @__PURE__ */ W(xs, { children: [
    e,
    /* @__PURE__ */ d(n, {})
  ] });
}, ks = ae`
    //margin-bottom:5px;
    //font-size: 0.9rem;
    color: ${(e) => ge.main.color};
`, Bt = p.label`
    ${ks}
    margin-bottom: ${(e) => e.margin || 0};
    display: ${({ block: e }) => e ? "block" : "inline-block"};
    width: 100%;
`, $s = p.div`
    display: flex;
    align-items: center;
    background: ${({ inputBackground: e }) => e};
    color: ${({ inputColour: e }) => e};
    border-radius: ${({ rounded: e }) => e === !0 ? "2.5rem" : "0.4rem"};
    padding: 0 0.4rem;
    opacity: ${({ disabled: e = !1 }) => e ? "0.4" : "1"};
    border: 1px solid ${({ inputBorder: e }) => e};

    &:focus-within {
        //background: ${(e) => co(0.1, e.inputBackground)};
        //color: ${(e) => e.inputColour};
    }
`, Cs = p.input`
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    font-size: 1rem;
    padding: 0.667rem 1rem;
    color: inherit;
    width: 100%;
    font-family: ${(e) => e.theme.main.font};

    &::placeholder {
        color: ${(e) => e.theme.form.input.placeholder};
        opacity: 1; /* Firefox */
    }

    &:focus {
        outline: none;
    }

    &[type='date'] {
        padding: 0.6rem 1rem;
    }

    &[type='date']::-webkit-calendar-picker-indicator {
        //color: rgba(0, 0, 0, 0);
        //opacity: 1;
        display: block;
        //background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;
        padding: 0;
        //border-width: thin;
    }
`, Ss = p.p`
    color: ${({ inputColour: e }) => e};
    font-family: ${(e) => e.theme.main.font};
    font-size: 0.75rem;
    margin: 0.6rem 0;
`, Es = ({ children: e, inputColour: t }) => e === null ? null : /* @__PURE__ */ d(Ss, { inputColour: t, children: e }), Ps = p.div`
    font-size: 1.4rem;
`, Ts = p.div`
    font-size: 1.4rem;
`, mu = ({
  id: e,
  name: t,
  inputBackground: n = null,
  background: r = !1,
  inputColour: a = null,
  inputBorder: i = null,
  prepend: o = null,
  append: s = null,
  label: c = null,
  type: u = "text",
  caption: f = null,
  required: m = !1,
  placeholder: b = !1,
  defaultValue: k = null,
  status: T = null,
  ...P
}) => {
  let O = {
    inputBackground: "white",
    inputColour: "black",
    inputBorder: ge.main.border
  };
  return r && (O = {
    inputBackground: ge.form.input.background,
    inputColour: ge.form.input.color,
    inputBorder: ge.main.border
  }), n !== null && (O = {
    ...O,
    inputBackground: n
  }), a !== null && (O = {
    ...O,
    inputColour: a
  }), i !== null && (O = {
    ...O,
    inputBorder: i
  }), /* @__PURE__ */ W(Bt, { htmlFor: t, block: !0, children: [
    c !== null ? /* @__PURE__ */ d(zn, { required: m, children: c }) : null,
    /* @__PURE__ */ W($s, { ...P, ...O, children: [
      o ? /* @__PURE__ */ d(Ps, { children: o }) : null,
      /* @__PURE__ */ d(
        Cs,
        {
          type: u,
          name: t,
          required: m,
          placeholder: b,
          defaultValue: k,
          id: e,
          ...O,
          ...P
        }
      ),
      s ? /* @__PURE__ */ d(Ts, { children: s }) : null
    ] }),
    /* @__PURE__ */ d(Es, { ...O, children: f })
  ] });
}, Os = p.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`, Rs = p.select`
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
    padding: ${(e) => e.inline ? "0.667rem 1.6rem 0.667rem 0.6rem" : "0.667rem 0.6rem"};
    font-family: ${(e) => e.theme.main.font};
    color: ${(e) => e.theme.form.select.color};
    font-weight: 400;
    font-size: 1rem;

    &:focus {
        outline: none;
    }

    option {
        background: 'white';
        padding: 0.875rem 0.6rem;
        font-family: MuseoSans, sans-serif;
        color: ${(e) => e.theme.form.select.color};
    }
`, As = p.div`
    margin: 0;
    min-width: ${(e) => e.inline ? "4rem" : "10rem"};
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background: ${(e) => e.theme.form.select.background};
    border: 1px solid ${(e) => e.theme.form.select.border};
    border-radius: 0.45rem;
    box-shadow: none;
    font-family: ${(e) => e.theme.main.font};

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
        height: 0.4rem;
        width: 0.4rem;
        border-style: solid;
        border-color: #787e89;
        border-width: 0px 1px 1px 0px;
        transform: rotate(45deg);
        transition: border-width 150ms ease-in-out;
        pointer-events: none;
    }
    @supports (-moz-appearance: none) {
        select {
            -moz-appearance: none;
            text-indent: 0.01px;
            text-overflow: '';
            font-family: ${(e) => e.theme.main.font};
        }
    }
`, Is = ({ value: e, name: t, children: n, label: r, inline: a = !1, onChange: i = () => {
} }) => /* @__PURE__ */ W(Os, { children: [
  r ? /* @__PURE__ */ d(zn, { htmlFor: t, children: r }) : null,
  /* @__PURE__ */ d(As, { inline: a, children: /* @__PURE__ */ d(Rs, { value: e, name: t, onChange: i, inline: !0, children: n }) })
] }), _s = p.div`
    flex-direction: row;
    //display: ${(e) => e.inline ? "inline-flex" : "flex"};
    margin: ${(e) => e.margin ? e.margin : "0 2rem 0.8rem 0"};
    //margin-bottom: 0.8rem;
    font-size: 1rem;
    font-family: ${(e) => e.theme.main.font};
`, Ls = p(Bt)`
   display: flex;
   align-items: center;
    //padding: 0.25rem 0 0.25rem 2.25rem;
    line-height: 1.5rem;
    position: relative;
    //opacity: ${({ disabled: e }) => e ? "0.4" : "1"};
`, js = p.input`
    -webkit-appearance: none;
    padding: 0;
    border-radius: 3px;
    display: inline-flex;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    margin-right: 5px;
    background: ${(e) => e.theme.form.input.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        box-shadow: none;
    }

    &:checked {
        background-color: ${(e) => e.backgroundColor !== null ? e.backgroundColor : e.theme.main.brand};
        color: ${(e) => e.color !== null ? e.color : "white"};
    }

    &:checked:after {
        content: '\\2714';
        font-family: ${(e) => e.theme.main.font};
        color: ${(e) => e.color !== null ? e.color : e.theme.form.checkbox.checkColour};
        font-size: 1.1rem;
    }
`, xr = ({
  name: e,
  id: t,
  label: n = null,
  required: r,
  checked: a,
  value: i,
  inline: o = !1,
  disabled: s = !1,
  className: c = null,
  backgroundColor: u = null,
  color: f = null,
  margin: m = null,
  ...b
}) => /* @__PURE__ */ d(_s, { inline: o, className: c, margin: m, children: /* @__PURE__ */ W(Ls, { htmlFor: t, disabled: s, children: [
  /* @__PURE__ */ d(
    js,
    {
      type: "checkbox",
      name: e,
      id: t,
      required: r,
      value: i,
      checked: a,
      disabled: s,
      backgroundColor: u,
      color: f,
      ...b
    }
  ),
  n
] }) }), Fs = p.div`
    flex-direction: row;
    display: ${(e) => e.inline ? "inline-flex" : "flex"};
    margin: ${(e) => e.margin ? e.margin : "0 2rem 0.8rem 0"};
    align-items: center;
    font-family: ${(e) => e.theme.main.font};
`, Ms = p(Bt)`
    padding: 0;
    line-height: 1.5rem;
    display: inline-flex;
    align-items: center;
    opacity: ${({ disabled: e }) => e ? "0.4" : "1"};

    & > label {
        display: inline;
        width: auto;
        margin: 0 0.5rem;

        input {
            width: 3rem;
        }
    }
`, zs = p.input`
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
    margin-right: ${(e) => e.margin ? "5px" : 0};
    background: ${(e) => e.theme.main.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    &:checked {
        background-color: ${(e) => e.color !== null ? e.color : e.theme.main.brand};
        color: ${(e) => e.color !== null ? e.color : e.theme.main.brand};
        box-shadow: inset 0 0 0 0.4rem
            ${(e) => e.backgroundColor !== null ? e.backgroundColor : e.theme.form.input.background};
    }
`, pu = ({
  name: e,
  label: t = "",
  required: n,
  checked: r,
  inline: a = !1,
  disabled: i = !1,
  value: o,
  margin: s = null,
  backgroundColor: c = null,
  color: u = null,
  className: f = "",
  defaultChecked: m = !1,
  id: b = !1,
  ...k
}) => /* @__PURE__ */ d(Fs, { inline: a, className: f, margin: s, children: /* @__PURE__ */ W(Ms, { htmlFor: b, disabled: i, children: [
  /* @__PURE__ */ d(
    zs,
    {
      type: "radio",
      checked: r,
      disabled: i,
      value: o,
      name: e,
      id: b || e,
      required: n,
      defaultChecked: r,
      backgroundColor: c,
      color: u,
      margin: t !== "",
      ...k
    }
  ),
  t
] }) }), Ds = p.div`
    width: 100%;
`, Ns = p.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //width: 100%;
`, wr = p(Is)``, Bs = p.div`
    margin: 0 0.5rem;
    color: ${({ theme: e }) => e.main.color};
`;
function bu({
  label: e,
  name: t,
  hourMin: n = 0,
  hourMax: r = 23,
  hourValue: a,
  minuteMin: i = 0,
  minuteMax: o = 59,
  minuteValue: s
}) {
  const [c, u] = Lt(a), [f, m] = Lt(s);
  _n(() => {
    u(a), m(s);
  }, [a, s]);
  function b() {
    const T = [];
    for (let P = n; P <= r; P++)
      T.push(P < 10 ? `0${P}` : P);
    return T;
  }
  function k() {
    const T = [];
    for (let P = i; P <= o; P++)
      T.push(P < 10 ? `0${P}` : P);
    return T;
  }
  return /* @__PURE__ */ W(Ds, { children: [
    /* @__PURE__ */ d(zn, { children: e }),
    /* @__PURE__ */ W(Ns, { children: [
      /* @__PURE__ */ d(
        wr,
        {
          value: c,
          name: `${t}[hour]`,
          inline: !0,
          onChange: (T) => u(T.target.value),
          children: b().map((T) => /* @__PURE__ */ d("option", { value: T, children: T }, `${t}-${T}`))
        },
        `${t}-hour`
      ),
      /* @__PURE__ */ d(Bs, { children: ":" }),
      /* @__PURE__ */ d(
        wr,
        {
          value: f,
          name: `${t}[minute]`,
          inline: !0,
          onChange: (T) => m(T.target.value),
          children: k().map((T) => /* @__PURE__ */ d("option", { value: T, children: T }, `${t}-${T}`))
        },
        `${t}-minute`
      )
    ] })
  ] });
}
const Ws = p.textarea`
    width: 100%;
    height: 10rem;
    padding: 0.5rem;
    margin: 0 0 1rem;
    border: 1px solid ${(e) => e.theme.main.border};
    border-radius: ${(e) => e.theme.main.borderRadius};
    background: ${(e) => e.theme.form.input.background};
    box-sizing: border-box;
    font-size: ${(e) => e.theme.main.fontSize};
    resize: none;
    font-family: ${(e) => e.theme.main.font};
    transition: all 0.3s ease-in-out;

    &:focus {
        outline: none;
        border: 1px solid ${(e) => e.theme.main.brand};
        background-color: ${(e) => e.theme.generalColors.white};
    }
`;
function hu({ name: e, value: t, onChange: n, placeholder: r }) {
  return /* @__PURE__ */ d(Ws, { name: e, value: t, onChange: n, placeholder: r });
}
function kr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kr(Object(n), !0).forEach(function(r) {
      re(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Mt(e) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mt(e);
}
function Ys(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $r(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hs(e, t, n) {
  return t && $r(e.prototype, t), n && $r(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function re(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Dn(e, t) {
  return Us(e) || Xs(e, t) || xa(e, t) || Ks();
}
function ht(e) {
  return Gs(e) || qs(e) || xa(e) || Zs();
}
function Gs(e) {
  if (Array.isArray(e))
    return vn(e);
}
function Us(e) {
  if (Array.isArray(e))
    return e;
}
function qs(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Xs(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, o, s;
    try {
      for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function xa(e, t) {
  if (e) {
    if (typeof e == "string")
      return vn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return vn(e, t);
  }
}
function vn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Zs() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ks() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Cr = function() {
}, Nn = {}, wa = {}, ka = null, $a = {
  mark: Cr,
  measure: Cr
};
try {
  typeof window < "u" && (Nn = window), typeof document < "u" && (wa = document), typeof MutationObserver < "u" && (ka = MutationObserver), typeof performance < "u" && ($a = performance);
} catch {
}
var Js = Nn.navigator || {}, Sr = Js.userAgent, Er = Sr === void 0 ? "" : Sr, Ie = Nn, Q = wa, Pr = ka, wt = $a;
Ie.document;
var Oe = !!Q.documentElement && !!Q.head && typeof Q.addEventListener == "function" && typeof Q.createElement == "function", Ca = ~Er.indexOf("MSIE") || ~Er.indexOf("Trident/"), kt, $t, Ct, St, Et, Ee = "___FONT_AWESOME___", yn = 16, Sa = "fa", Ea = "svg-inline--fa", Be = "data-fa-i2svg", xn = "data-fa-pseudo-element", Vs = "data-fa-pseudo-element-pending", Bn = "data-prefix", Wn = "data-icon", Tr = "fontawesome-i2svg", Qs = "async", el = ["HTML", "HEAD", "STYLE", "SCRIPT"], Pa = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), V = "classic", ee = "sharp", Yn = [V, ee];
function gt(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[V];
    }
  });
}
var ut = gt((kt = {}, re(kt, V, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), re(kt, ee, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), kt)), dt = gt(($t = {}, re($t, V, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), re($t, ee, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), $t)), mt = gt((Ct = {}, re(Ct, V, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), re(Ct, ee, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Ct)), tl = gt((St = {}, re(St, V, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), re(St, ee, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), St)), nl = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, Ta = "fa-layers-text", rl = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, al = gt((Et = {}, re(Et, V, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), re(Et, ee, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Et)), Oa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], il = Oa.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ol = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], De = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, pt = /* @__PURE__ */ new Set();
Object.keys(dt[V]).map(pt.add.bind(pt));
Object.keys(dt[ee]).map(pt.add.bind(pt));
var sl = [].concat(Yn, ht(pt), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", De.GROUP, De.SWAP_OPACITY, De.PRIMARY, De.SECONDARY]).concat(Oa.map(function(e) {
  return "".concat(e, "x");
})).concat(il.map(function(e) {
  return "w-".concat(e);
})), st = Ie.FontAwesomeConfig || {};
function ll(e) {
  var t = Q.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function cl(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Q && typeof Q.querySelector == "function") {
  var fl = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  fl.forEach(function(e) {
    var t = Dn(e, 2), n = t[0], r = t[1], a = cl(ll(n));
    a != null && (st[r] = a);
  });
}
var Ra = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Sa,
  replacementClass: Ea,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
st.familyPrefix && (st.cssPrefix = st.familyPrefix);
var et = $($({}, Ra), st);
et.autoReplaceSvg || (et.observeMutations = !1);
var E = {};
Object.keys(Ra).forEach(function(e) {
  Object.defineProperty(E, e, {
    enumerable: !0,
    set: function(n) {
      et[e] = n, lt.forEach(function(r) {
        return r(E);
      });
    },
    get: function() {
      return et[e];
    }
  });
});
Object.defineProperty(E, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    et.cssPrefix = t, lt.forEach(function(n) {
      return n(E);
    });
  },
  get: function() {
    return et.cssPrefix;
  }
});
Ie.FontAwesomeConfig = E;
var lt = [];
function ul(e) {
  return lt.push(e), function() {
    lt.splice(lt.indexOf(e), 1);
  };
}
var Re = yn, ke = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function dl(e) {
  if (!(!e || !Oe)) {
    var t = Q.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = Q.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return Q.head.insertBefore(t, r), e;
  }
}
var ml = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function bt() {
  for (var e = 12, t = ""; e-- > 0; )
    t += ml[Math.random() * 62 | 0];
  return t;
}
function nt(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Hn(e) {
  return e.classList ? nt(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function Aa(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function pl(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(Aa(e[n]), '" ');
  }, "").trim();
}
function Wt(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Gn(e) {
  return e.size !== ke.size || e.x !== ke.x || e.y !== ke.y || e.rotate !== ke.rotate || e.flipX || e.flipY;
}
function bl(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: c,
    path: u
  };
}
function hl(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? yn : n, a = e.height, i = a === void 0 ? yn : a, o = e.startCentered, s = o === void 0 ? !1 : o, c = "";
  return s && Ca ? c += "translate(".concat(t.x / Re - r / 2, "em, ").concat(t.y / Re - i / 2, "em) ") : s ? c += "translate(calc(-50% + ".concat(t.x / Re, "em), calc(-50% + ").concat(t.y / Re, "em)) ") : c += "translate(".concat(t.x / Re, "em, ").concat(t.y / Re, "em) "), c += "scale(".concat(t.size / Re * (t.flipX ? -1 : 1), ", ").concat(t.size / Re * (t.flipY ? -1 : 1), ") "), c += "rotate(".concat(t.rotate, "deg) "), c;
}
var gl = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Ia() {
  var e = Sa, t = Ea, n = E.cssPrefix, r = E.replacementClass, a = gl;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var Or = !1;
function tn() {
  E.autoAddCss && !Or && (dl(Ia()), Or = !0);
}
var vl = {
  mixout: function() {
    return {
      dom: {
        css: Ia,
        insertCss: tn
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        tn();
      },
      beforeI2svg: function() {
        tn();
      }
    };
  }
}, Pe = Ie || {};
Pe[Ee] || (Pe[Ee] = {});
Pe[Ee].styles || (Pe[Ee].styles = {});
Pe[Ee].hooks || (Pe[Ee].hooks = {});
Pe[Ee].shims || (Pe[Ee].shims = []);
var ye = Pe[Ee], _a = [], yl = function e() {
  Q.removeEventListener("DOMContentLoaded", e), zt = 1, _a.map(function(t) {
    return t();
  });
}, zt = !1;
Oe && (zt = (Q.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Q.readyState), zt || Q.addEventListener("DOMContentLoaded", yl));
function xl(e) {
  Oe && (zt ? setTimeout(e, 0) : _a.push(e));
}
function vt(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? Aa(e) : "<".concat(t, " ").concat(pl(r), ">").concat(i.map(vt).join(""), "</").concat(t, ">");
}
function Rr(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var wl = function(t, n) {
  return function(r, a, i, o) {
    return t.call(n, r, a, i, o);
  };
}, nn = function(t, n, r, a) {
  var i = Object.keys(t), o = i.length, s = a !== void 0 ? wl(n, a) : n, c, u, f;
  for (r === void 0 ? (c = 1, f = t[i[0]]) : (c = 0, f = r); c < o; c++)
    u = i[c], f = s(f, t[u], u, t);
  return f;
};
function kl(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function wn(e) {
  var t = kl(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function $l(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Ar(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function kn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, i = Ar(t);
  typeof ye.hooks.addPack == "function" && !a ? ye.hooks.addPack(e, Ar(t)) : ye.styles[e] = $($({}, ye.styles[e] || {}), i), e === "fas" && kn("fa", t);
}
var Pt, Tt, Ot, Ke = ye.styles, Cl = ye.shims, Sl = (Pt = {}, re(Pt, V, Object.values(mt[V])), re(Pt, ee, Object.values(mt[ee])), Pt), Un = null, La = {}, ja = {}, Fa = {}, Ma = {}, za = {}, El = (Tt = {}, re(Tt, V, Object.keys(ut[V])), re(Tt, ee, Object.keys(ut[ee])), Tt);
function Pl(e) {
  return ~sl.indexOf(e);
}
function Tl(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Pl(a) ? a : null;
}
var Da = function() {
  var t = function(i) {
    return nn(Ke, function(o, s, c) {
      return o[c] = nn(s, i, {}), o;
    }, {});
  };
  La = t(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(c) {
        return typeof c == "number";
      });
      s.forEach(function(c) {
        a[c.toString(16)] = o;
      });
    }
    return a;
  }), ja = t(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(c) {
        return typeof c == "string";
      });
      s.forEach(function(c) {
        a[c] = o;
      });
    }
    return a;
  }), za = t(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(c) {
      a[c] = o;
    }), a;
  });
  var n = "far" in Ke || E.autoFetchSvg, r = nn(Cl, function(a, i) {
    var o = i[0], s = i[1], c = i[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: c
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: c
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Fa = r.names, Ma = r.unicodes, Un = Yt(E.styleDefault, {
    family: E.familyDefault
  });
};
ul(function(e) {
  Un = Yt(e.styleDefault, {
    family: E.familyDefault
  });
});
Da();
function qn(e, t) {
  return (La[e] || {})[t];
}
function Ol(e, t) {
  return (ja[e] || {})[t];
}
function Ne(e, t) {
  return (za[e] || {})[t];
}
function Na(e) {
  return Fa[e] || {
    prefix: null,
    iconName: null
  };
}
function Rl(e) {
  var t = Ma[e], n = qn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function _e() {
  return Un;
}
var Xn = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Yt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? V : n, a = ut[r][e], i = dt[r][e] || dt[r][a], o = e in ye.styles ? e : null;
  return i || o || null;
}
var Ir = (Ot = {}, re(Ot, V, Object.keys(mt[V])), re(Ot, ee, Object.keys(mt[ee])), Ot);
function Ht(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, i = (t = {}, re(t, V, "".concat(E.cssPrefix, "-").concat(V)), re(t, ee, "".concat(E.cssPrefix, "-").concat(ee)), t), o = null, s = V;
  (e.includes(i[V]) || e.some(function(u) {
    return Ir[V].includes(u);
  })) && (s = V), (e.includes(i[ee]) || e.some(function(u) {
    return Ir[ee].includes(u);
  })) && (s = ee);
  var c = e.reduce(function(u, f) {
    var m = Tl(E.cssPrefix, f);
    if (Ke[f] ? (f = Sl[s].includes(f) ? tl[s][f] : f, o = f, u.prefix = f) : El[s].indexOf(f) > -1 ? (o = f, u.prefix = Yt(f, {
      family: s
    })) : m ? u.iconName = m : f !== E.replacementClass && f !== i[V] && f !== i[ee] && u.rest.push(f), !a && u.prefix && u.iconName) {
      var b = o === "fa" ? Na(u.iconName) : {}, k = Ne(u.prefix, u.iconName);
      b.prefix && (o = null), u.iconName = b.iconName || k || u.iconName, u.prefix = b.prefix || u.prefix, u.prefix === "far" && !Ke.far && Ke.fas && !E.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, Xn());
  return (e.includes("fa-brands") || e.includes("fab")) && (c.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (c.prefix = "fad"), !c.prefix && s === ee && (Ke.fass || E.autoFetchSvg) && (c.prefix = "fass", c.iconName = Ne(c.prefix, c.iconName) || c.iconName), (c.prefix === "fa" || o === "fa") && (c.prefix = _e() || "fas"), c;
}
var Al = /* @__PURE__ */ function() {
  function e() {
    Ys(this, e), this.definitions = {};
  }
  return Hs(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = $($({}, n.definitions[s] || {}), o[s]), kn(s, o[s]);
        var c = mt[V][s];
        c && kn(c, o[s]), Da();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(i) {
        var o = a[i], s = o.prefix, c = o.iconName, u = o.icon, f = u[2];
        n[s] || (n[s] = {}), f.length > 0 && f.forEach(function(m) {
          typeof m == "string" && (n[s][m] = u);
        }), n[s][c] = u;
      }), n;
    }
  }]), e;
}(), _r = [], Je = {}, Qe = {}, Il = Object.keys(Qe);
function _l(e, t) {
  var n = t.mixoutsTo;
  return _r = e, Je = {}, Object.keys(Qe).forEach(function(r) {
    Il.indexOf(r) === -1 && delete Qe[r];
  }), _r.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (n[o] = a[o]), Mt(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        Je[o] || (Je[o] = []), Je[o].push(i[o]);
      });
    }
    r.provides && r.provides(Qe);
  }), n;
}
function $n(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var i = Je[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(r));
  }), t;
}
function We(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = Je[e] || [];
  a.forEach(function(i) {
    i.apply(null, n);
  });
}
function Te() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Qe[e] ? Qe[e].apply(null, t) : void 0;
}
function Cn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || _e();
  if (t)
    return t = Ne(n, t) || t, Rr(Ba.definitions, n, t) || Rr(ye.styles, n, t);
}
var Ba = new Al(), Ll = function() {
  E.autoReplaceSvg = !1, E.observeMutations = !1, We("noAuto");
}, jl = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Oe ? (We("beforeI2svg", t), Te("pseudoElements2svg", t), Te("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    E.autoReplaceSvg === !1 && (E.autoReplaceSvg = !0), E.observeMutations = !0, xl(function() {
      Ml({
        autoReplaceSvgRoot: n
      }), We("watch", t);
    });
  }
}, Fl = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Mt(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Ne(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = Yt(t[0]);
      return {
        prefix: r,
        iconName: Ne(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(E.cssPrefix, "-")) > -1 || t.match(nl))) {
      var a = Ht(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || _e(),
        iconName: Ne(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = _e();
      return {
        prefix: i,
        iconName: Ne(i, t) || t
      };
    }
  }
}, pe = {
  noAuto: Ll,
  config: E,
  dom: jl,
  parse: Fl,
  library: Ba,
  findIconDefinition: Cn,
  toHtml: vt
}, Ml = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? Q : n;
  (Object.keys(ye.styles).length > 0 || E.autoFetchSvg) && Oe && E.autoReplaceSvg && pe.dom.i2svg({
    node: r
  });
};
function Gt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return vt(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (Oe) {
        var r = Q.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function zl(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, i = e.styles, o = e.transform;
  if (Gn(o) && n.found && !r.found) {
    var s = n.width, c = n.height, u = {
      x: s / c / 2,
      y: 0.5
    };
    a.style = Wt($($({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Dl(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(E.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: $($({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Zn(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, c = e.title, u = e.maskId, f = e.titleId, m = e.extra, b = e.watchable, k = b === void 0 ? !1 : b, T = r.found ? r : n, P = T.width, O = T.height, j = a === "fak", A = [E.replacementClass, i ? "".concat(E.cssPrefix, "-").concat(i) : ""].filter(function(le) {
    return m.classes.indexOf(le) === -1;
  }).filter(function(le) {
    return le !== "" || !!le;
  }).concat(m.classes).join(" "), F = {
    children: [],
    attributes: $($({}, m.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: A,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(P, " ").concat(O)
    })
  }, H = j && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(P / O * 16 * 0.0625, "em")
  } : {};
  k && (F.attributes[Be] = ""), c && (F.children.push({
    tag: "title",
    attributes: {
      id: F.attributes["aria-labelledby"] || "title-".concat(f || bt())
    },
    children: [c]
  }), delete F.attributes.title);
  var v = $($({}, F), {}, {
    prefix: a,
    iconName: i,
    main: n,
    mask: r,
    maskId: u,
    transform: o,
    symbol: s,
    styles: $($({}, H), m.styles)
  }), ie = r.found && n.found ? Te("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : Te("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, ue = ie.children, $e = ie.attributes;
  return v.children = ue, v.attributes = $e, s ? Dl(v) : zl(v);
}
function Lr(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, i = e.title, o = e.extra, s = e.watchable, c = s === void 0 ? !1 : s, u = $($($({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  c && (u[Be] = "");
  var f = $({}, o.styles);
  Gn(a) && (f.transform = hl({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  var m = Wt(f);
  m.length > 0 && (u.style = m);
  var b = [];
  return b.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), i && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), b;
}
function Nl(e) {
  var t = e.content, n = e.title, r = e.extra, a = $($($({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = Wt(r.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var rn = ye.styles;
function Sn(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = Dn(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(E.cssPrefix, "-").concat(De.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(De.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(De.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
var Bl = {
  found: !1,
  width: 512,
  height: 512
};
function Wl(e, t) {
  !Pa && !E.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function En(e, t) {
  var n = t;
  return t === "fa" && E.styleDefault !== null && (t = _e()), new Promise(function(r, a) {
    if (Te("missingIconAbstract"), n === "fa") {
      var i = Na(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && rn[t] && rn[t][e]) {
      var o = rn[t][e];
      return r(Sn(o));
    }
    Wl(e, t), r($($({}, Bl), {}, {
      icon: E.showMissingIcons && e ? Te("missingIconAbstract") || {} : {}
    }));
  });
}
var jr = function() {
}, Pn = E.measurePerformance && wt && wt.mark && wt.measure ? wt : {
  mark: jr,
  measure: jr
}, ot = 'FA "6.5.1"', Yl = function(t) {
  return Pn.mark("".concat(ot, " ").concat(t, " begins")), function() {
    return Wa(t);
  };
}, Wa = function(t) {
  Pn.mark("".concat(ot, " ").concat(t, " ends")), Pn.measure("".concat(ot, " ").concat(t), "".concat(ot, " ").concat(t, " begins"), "".concat(ot, " ").concat(t, " ends"));
}, Kn = {
  begin: Yl,
  end: Wa
}, It = function() {
};
function Fr(e) {
  var t = e.getAttribute ? e.getAttribute(Be) : null;
  return typeof t == "string";
}
function Hl(e) {
  var t = e.getAttribute ? e.getAttribute(Bn) : null, n = e.getAttribute ? e.getAttribute(Wn) : null;
  return t && n;
}
function Gl(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(E.replacementClass);
}
function Ul() {
  if (E.autoReplaceSvg === !0)
    return _t.replace;
  var e = _t[E.autoReplaceSvg];
  return e || _t.replace;
}
function ql(e) {
  return Q.createElementNS("http://www.w3.org/2000/svg", e);
}
function Xl(e) {
  return Q.createElement(e);
}
function Ya(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? ql : Xl : n;
  if (typeof e == "string")
    return Q.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    a.appendChild(Ya(o, {
      ceFn: r
    }));
  }), a;
}
function Zl(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var _t = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(Ya(a), n);
      }), n.getAttribute(Be) === null && E.keepOriginalSource) {
        var r = Q.createComment(Zl(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~Hn(n).indexOf(E.replacementClass))
      return _t.replace(t);
    var a = new RegExp("".concat(E.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(s, c) {
        return c === E.replacementClass || c.match(a) ? s.toSvg.push(c) : s.toNode.push(c), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(s) {
      return vt(s);
    }).join(`
`);
    n.setAttribute(Be, ""), n.innerHTML = o;
  }
};
function Mr(e) {
  e();
}
function Ha(e, t) {
  var n = typeof t == "function" ? t : It;
  if (e.length === 0)
    n();
  else {
    var r = Mr;
    E.mutateApproach === Qs && (r = Ie.requestAnimationFrame || Mr), r(function() {
      var a = Ul(), i = Kn.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
var Jn = !1;
function Ga() {
  Jn = !0;
}
function Tn() {
  Jn = !1;
}
var Dt = null;
function zr(e) {
  if (Pr && E.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? It : t, r = e.nodeCallback, a = r === void 0 ? It : r, i = e.pseudoElementsCallback, o = i === void 0 ? It : i, s = e.observeMutationsRoot, c = s === void 0 ? Q : s;
    Dt = new Pr(function(u) {
      if (!Jn) {
        var f = _e();
        nt(u).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !Fr(m.addedNodes[0]) && (E.searchPseudoElements && o(m.target), n(m.target)), m.type === "attributes" && m.target.parentNode && E.searchPseudoElements && o(m.target.parentNode), m.type === "attributes" && Fr(m.target) && ~ol.indexOf(m.attributeName))
            if (m.attributeName === "class" && Hl(m.target)) {
              var b = Ht(Hn(m.target)), k = b.prefix, T = b.iconName;
              m.target.setAttribute(Bn, k || f), T && m.target.setAttribute(Wn, T);
            } else
              Gl(m.target) && a(m.target);
        });
      }
    }), Oe && Dt.observe(c, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Kl() {
  Dt && Dt.disconnect();
}
function Jl(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function Vl(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = Ht(Hn(e));
  return a.prefix || (a.prefix = _e()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ol(a.prefix, e.innerText) || qn(a.prefix, wn(e.innerText))), !a.iconName && E.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Ql(e) {
  var t = nt(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return E.autoA11y && (n ? t["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(r || bt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ec() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ke,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Dr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = Vl(e), r = n.iconName, a = n.prefix, i = n.rest, o = Ql(e), s = $n("parseNodeAttributes", {}, e), c = t.styleParser ? Jl(e) : [];
  return $({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: ke,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: c,
      attributes: o
    }
  }, s);
}
var tc = ye.styles;
function Ua(e) {
  var t = E.autoReplaceSvg === "nest" ? Dr(e, {
    styleParser: !1
  }) : Dr(e);
  return ~t.extra.classes.indexOf(Ta) ? Te("generateLayersText", e, t) : Te("generateSvgReplacementMutation", e, t);
}
var Le = /* @__PURE__ */ new Set();
Yn.map(function(e) {
  Le.add("fa-".concat(e));
});
Object.keys(ut[V]).map(Le.add.bind(Le));
Object.keys(ut[ee]).map(Le.add.bind(Le));
Le = ht(Le);
function Nr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Oe)
    return Promise.resolve();
  var n = Q.documentElement.classList, r = function(m) {
    return n.add("".concat(Tr, "-").concat(m));
  }, a = function(m) {
    return n.remove("".concat(Tr, "-").concat(m));
  }, i = E.autoFetchSvg ? Le : Yn.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(tc));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Ta, ":not([").concat(Be, "])")].concat(i.map(function(f) {
    return ".".concat(f, ":not([").concat(Be, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = nt(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var c = Kn.begin("onTree"), u = s.reduce(function(f, m) {
    try {
      var b = Ua(m);
      b && f.push(b);
    } catch (k) {
      Pa || k.name === "MissingIcon" && console.error(k);
    }
    return f;
  }, []);
  return new Promise(function(f, m) {
    Promise.all(u).then(function(b) {
      Ha(b, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), c(), f();
      });
    }).catch(function(b) {
      c(), m(b);
    });
  });
}
function nc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ua(e).then(function(n) {
    n && Ha([n], t);
  });
}
function rc(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Cn(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : Cn(a || {})), e(r, $($({}, n), {}, {
      mask: a
    }));
  };
}
var ac = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? ke : r, i = n.symbol, o = i === void 0 ? !1 : i, s = n.mask, c = s === void 0 ? null : s, u = n.maskId, f = u === void 0 ? null : u, m = n.title, b = m === void 0 ? null : m, k = n.titleId, T = k === void 0 ? null : k, P = n.classes, O = P === void 0 ? [] : P, j = n.attributes, A = j === void 0 ? {} : j, F = n.styles, H = F === void 0 ? {} : F;
  if (t) {
    var v = t.prefix, ie = t.iconName, ue = t.icon;
    return Gt($({
      type: "icon"
    }, t), function() {
      return We("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), E.autoA11y && (b ? A["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(T || bt()) : (A["aria-hidden"] = "true", A.focusable = "false")), Zn({
        icons: {
          main: Sn(ue),
          mask: c ? Sn(c.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: ie,
        transform: $($({}, ke), a),
        symbol: o,
        title: b,
        maskId: f,
        titleId: T,
        extra: {
          attributes: A,
          styles: H,
          classes: O
        }
      });
    });
  }
}, ic = {
  mixout: function() {
    return {
      icon: rc(ac)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Nr, n.nodeCallback = nc, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? Q : r, i = n.callback, o = i === void 0 ? function() {
      } : i;
      return Nr(a, o);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, i = r.title, o = r.titleId, s = r.prefix, c = r.transform, u = r.symbol, f = r.mask, m = r.maskId, b = r.extra;
      return new Promise(function(k, T) {
        Promise.all([En(a, s), f.iconName ? En(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(P) {
          var O = Dn(P, 2), j = O[0], A = O[1];
          k([n, Zn({
            icons: {
              main: j,
              mask: A
            },
            prefix: s,
            iconName: a,
            transform: c,
            symbol: u,
            maskId: m,
            title: i,
            titleId: o,
            extra: b,
            watchable: !0
          })]);
        }).catch(T);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.transform, s = n.styles, c = Wt(s);
      c.length > 0 && (a.style = c);
      var u;
      return Gn(o) && (u = Te("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, oc = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return Gt({
          type: "layer"
        }, function() {
          We("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(c) {
              o = o.concat(c.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(E.cssPrefix, "-layers")].concat(ht(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, sc = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, o = r.classes, s = o === void 0 ? [] : o, c = r.attributes, u = c === void 0 ? {} : c, f = r.styles, m = f === void 0 ? {} : f;
        return Gt({
          type: "counter",
          content: n
        }, function() {
          return We("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Nl({
            content: n.toString(),
            title: i,
            extra: {
              attributes: u,
              styles: m,
              classes: ["".concat(E.cssPrefix, "-layers-counter")].concat(ht(s))
            }
          });
        });
      }
    };
  }
}, lc = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? ke : a, o = r.title, s = o === void 0 ? null : o, c = r.classes, u = c === void 0 ? [] : c, f = r.attributes, m = f === void 0 ? {} : f, b = r.styles, k = b === void 0 ? {} : b;
        return Gt({
          type: "text",
          content: n
        }, function() {
          return We("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Lr({
            content: n,
            transform: $($({}, ke), i),
            title: s,
            extra: {
              attributes: m,
              styles: k,
              classes: ["".concat(E.cssPrefix, "-layers-text")].concat(ht(u))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var a = r.title, i = r.transform, o = r.extra, s = null, c = null;
      if (Ca) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), f = n.getBoundingClientRect();
        s = f.width / u, c = f.height / u;
      }
      return E.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, Lr({
        content: n.innerHTML,
        width: s,
        height: c,
        transform: i,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, cc = new RegExp('"', "ug"), Br = [1105920, 1112319];
function fc(e) {
  var t = e.replace(cc, ""), n = $l(t, 0), r = n >= Br[0] && n <= Br[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: wn(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Wr(e, t) {
  var n = "".concat(Vs).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var i = nt(e.children), o = i.filter(function(ue) {
      return ue.getAttribute(xn) === t;
    })[0], s = Ie.getComputedStyle(e, t), c = s.getPropertyValue("font-family").match(rl), u = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), r();
    if (c && f !== "none" && f !== "") {
      var m = s.getPropertyValue("content"), b = ~["Sharp"].indexOf(c[2]) ? ee : V, k = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(c[2]) ? dt[b][c[2].toLowerCase()] : al[b][u], T = fc(m), P = T.value, O = T.isSecondary, j = c[0].startsWith("FontAwesome"), A = qn(k, P), F = A;
      if (j) {
        var H = Rl(P);
        H.iconName && H.prefix && (A = H.iconName, k = H.prefix);
      }
      if (A && !O && (!o || o.getAttribute(Bn) !== k || o.getAttribute(Wn) !== F)) {
        e.setAttribute(n, F), o && e.removeChild(o);
        var v = ec(), ie = v.extra;
        ie.attributes[xn] = t, En(A, k).then(function(ue) {
          var $e = Zn($($({}, v), {}, {
            icons: {
              main: ue,
              mask: Xn()
            },
            prefix: k,
            iconName: F,
            extra: ie,
            watchable: !0
          })), le = Q.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(le, e.firstChild) : e.appendChild(le), le.outerHTML = $e.map(function(je) {
            return vt(je);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function uc(e) {
  return Promise.all([Wr(e, "::before"), Wr(e, "::after")]);
}
function dc(e) {
  return e.parentNode !== document.head && !~el.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(xn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Yr(e) {
  if (Oe)
    return new Promise(function(t, n) {
      var r = nt(e.querySelectorAll("*")).filter(dc).map(uc), a = Kn.begin("searchPseudoElements");
      Ga(), Promise.all(r).then(function() {
        a(), Tn(), t();
      }).catch(function() {
        a(), Tn(), n();
      });
    });
}
var mc = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Yr, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? Q : r;
      E.searchPseudoElements && Yr(a);
    };
  }
}, Hr = !1, pc = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ga(), Hr = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        zr($n("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Kl();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        Hr ? Tn() : zr($n("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Gr = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, a) {
    var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, bc = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Gr(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = Gr(a)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, i = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, c = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), f = "rotate(".concat(a.rotate, " 0 0)"), m = {
        transform: "".concat(c, " ").concat(u, " ").concat(f)
      }, b = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, k = {
        outer: s,
        inner: m,
        path: b
      };
      return {
        tag: "g",
        attributes: $({}, k.outer),
        children: [{
          tag: "g",
          attributes: $({}, k.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: $($({}, r.icon.attributes), k.path)
          }]
        }]
      };
    };
  }
}, an = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ur(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function hc(e) {
  return e.tag === "g" ? e.children : [e];
}
var gc = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? Ht(a.split(" ").map(function(o) {
          return o.trim();
        })) : Xn();
        return i.prefix || (i.prefix = _e()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.mask, s = n.maskId, c = n.transform, u = i.width, f = i.icon, m = o.width, b = o.icon, k = bl({
        transform: c,
        containerWidth: m,
        iconWidth: u
      }), T = {
        tag: "rect",
        attributes: $($({}, an), {}, {
          fill: "white"
        })
      }, P = f.children ? {
        children: f.children.map(Ur)
      } : {}, O = {
        tag: "g",
        attributes: $({}, k.inner),
        children: [Ur($({
          tag: f.tag,
          attributes: $($({}, f.attributes), k.path)
        }, P))]
      }, j = {
        tag: "g",
        attributes: $({}, k.outer),
        children: [O]
      }, A = "mask-".concat(s || bt()), F = "clip-".concat(s || bt()), H = {
        tag: "mask",
        attributes: $($({}, an), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [T, j]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: F
          },
          children: hc(b)
        }, H]
      };
      return r.push(v, {
        tag: "rect",
        attributes: $({
          fill: "currentColor",
          "clip-path": "url(#".concat(F, ")"),
          mask: "url(#".concat(A, ")")
        }, an)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, vc = {
  provides: function(t) {
    var n = !1;
    Ie.matchMedia && (n = Ie.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: $($({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = $($({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: $($({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: $($({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: $($({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: $($({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: $($({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: $($({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: $($({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, yc = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = i, n;
      }
    };
  }
}, xc = [vl, ic, oc, sc, lc, mc, pc, bc, gc, vc, yc];
_l(xc, {
  mixoutsTo: pe
});
pe.noAuto;
pe.config;
pe.library;
pe.dom;
var On = pe.parse;
pe.findIconDefinition;
pe.toHtml;
var wc = pe.icon;
pe.layer;
pe.text;
pe.counter;
var Rn = { exports: {} }, Rt = { exports: {} }, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function kc() {
  if (qr)
    return Z;
  qr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function F(v) {
    if (typeof v == "object" && v !== null) {
      var ie = v.$$typeof;
      switch (ie) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case r:
            case i:
            case a:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case f:
                case T:
                case k:
                case o:
                  return v;
                default:
                  return ie;
              }
          }
        case n:
          return ie;
      }
    }
  }
  function H(v) {
    return F(v) === u;
  }
  return Z.AsyncMode = c, Z.ConcurrentMode = u, Z.ContextConsumer = s, Z.ContextProvider = o, Z.Element = t, Z.ForwardRef = f, Z.Fragment = r, Z.Lazy = T, Z.Memo = k, Z.Portal = n, Z.Profiler = i, Z.StrictMode = a, Z.Suspense = m, Z.isAsyncMode = function(v) {
    return H(v) || F(v) === c;
  }, Z.isConcurrentMode = H, Z.isContextConsumer = function(v) {
    return F(v) === s;
  }, Z.isContextProvider = function(v) {
    return F(v) === o;
  }, Z.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Z.isForwardRef = function(v) {
    return F(v) === f;
  }, Z.isFragment = function(v) {
    return F(v) === r;
  }, Z.isLazy = function(v) {
    return F(v) === T;
  }, Z.isMemo = function(v) {
    return F(v) === k;
  }, Z.isPortal = function(v) {
    return F(v) === n;
  }, Z.isProfiler = function(v) {
    return F(v) === i;
  }, Z.isStrictMode = function(v) {
    return F(v) === a;
  }, Z.isSuspense = function(v) {
    return F(v) === m;
  }, Z.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === i || v === a || v === m || v === b || typeof v == "object" && v !== null && (v.$$typeof === T || v.$$typeof === k || v.$$typeof === o || v.$$typeof === s || v.$$typeof === f || v.$$typeof === O || v.$$typeof === j || v.$$typeof === A || v.$$typeof === P);
  }, Z.typeOf = F, Z;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function $c() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function F(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === r || w === u || w === i || w === a || w === m || w === b || typeof w == "object" && w !== null && (w.$$typeof === T || w.$$typeof === k || w.$$typeof === o || w.$$typeof === s || w.$$typeof === f || w.$$typeof === O || w.$$typeof === j || w.$$typeof === A || w.$$typeof === P);
    }
    function H(w) {
      if (typeof w == "object" && w !== null) {
        var be = w.$$typeof;
        switch (be) {
          case t:
            var qe = w.type;
            switch (qe) {
              case c:
              case u:
              case r:
              case i:
              case a:
              case m:
                return qe;
              default:
                var Me = qe && qe.$$typeof;
                switch (Me) {
                  case s:
                  case f:
                  case T:
                  case k:
                  case o:
                    return Me;
                  default:
                    return be;
                }
            }
          case n:
            return be;
        }
      }
    }
    var v = c, ie = u, ue = s, $e = o, le = t, je = f, He = r, Ge = T, de = k, fe = n, Ce = i, me = a, xe = m, Fe = !1;
    function Ue(w) {
      return Fe || (Fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(w) || H(w) === c;
    }
    function g(w) {
      return H(w) === u;
    }
    function C(w) {
      return H(w) === s;
    }
    function z(w) {
      return H(w) === o;
    }
    function M(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function I(w) {
      return H(w) === f;
    }
    function G(w) {
      return H(w) === r;
    }
    function _(w) {
      return H(w) === T;
    }
    function L(w) {
      return H(w) === k;
    }
    function D(w) {
      return H(w) === n;
    }
    function q(w) {
      return H(w) === i;
    }
    function N(w) {
      return H(w) === a;
    }
    function oe(w) {
      return H(w) === m;
    }
    K.AsyncMode = v, K.ConcurrentMode = ie, K.ContextConsumer = ue, K.ContextProvider = $e, K.Element = le, K.ForwardRef = je, K.Fragment = He, K.Lazy = Ge, K.Memo = de, K.Portal = fe, K.Profiler = Ce, K.StrictMode = me, K.Suspense = xe, K.isAsyncMode = Ue, K.isConcurrentMode = g, K.isContextConsumer = C, K.isContextProvider = z, K.isElement = M, K.isForwardRef = I, K.isFragment = G, K.isLazy = _, K.isMemo = L, K.isPortal = D, K.isProfiler = q, K.isStrictMode = N, K.isSuspense = oe, K.isValidElementType = F, K.typeOf = H;
  }()), K;
}
var Zr;
function qa() {
  return Zr || (Zr = 1, process.env.NODE_ENV === "production" ? Rt.exports = kc() : Rt.exports = $c()), Rt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var on, Kr;
function Cc() {
  if (Kr)
    return on;
  Kr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return on = a() ? Object.assign : function(i, o) {
    for (var s, c = r(i), u, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var m in s)
        t.call(s, m) && (c[m] = s[m]);
      if (e) {
        u = e(s);
        for (var b = 0; b < u.length; b++)
          n.call(s, u[b]) && (c[u[b]] = s[u[b]]);
      }
    }
    return c;
  }, on;
}
var sn, Jr;
function Vn() {
  if (Jr)
    return sn;
  Jr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return sn = e, sn;
}
var ln, Vr;
function Xa() {
  return Vr || (Vr = 1, ln = Function.call.bind(Object.prototype.hasOwnProperty)), ln;
}
var cn, Qr;
function Sc() {
  if (Qr)
    return cn;
  Qr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Vn(), n = {}, r = Xa();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (r(i, f)) {
          var m;
          try {
            if (typeof i[f] != "function") {
              var b = Error(
                (c || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            m = i[f](o, f, c, s, null, t);
          } catch (T) {
            m = T;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var k = u ? u() : "";
            e(
              "Failed " + s + " type: " + m.message + (k ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, cn = a, cn;
}
var fn, ea;
function Ec() {
  if (ea)
    return fn;
  ea = 1;
  var e = qa(), t = Cc(), n = Vn(), r = Xa(), a = Sc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return fn = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(g) {
      var C = g && (u && g[u] || g[f]);
      if (typeof C == "function")
        return C;
    }
    var b = "<<anonymous>>", k = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: A(),
      arrayOf: F,
      element: H(),
      elementType: v(),
      instanceOf: ie,
      node: je(),
      objectOf: $e,
      oneOf: ue,
      oneOfType: le,
      shape: Ge,
      exact: de
    };
    function T(g, C) {
      return g === C ? g !== 0 || 1 / g === 1 / C : g !== g && C !== C;
    }
    function P(g, C) {
      this.message = g, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function O(g) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, z = 0;
      function M(G, _, L, D, q, N, oe) {
        if (D = D || b, N = N || L, oe !== n) {
          if (c) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = D + ":" + L;
            !C[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[be] = !0, z++);
          }
        }
        return _[L] == null ? G ? _[L] === null ? new P("The " + q + " `" + N + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new P("The " + q + " `" + N + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : g(_, L, D, q, N);
      }
      var I = M.bind(null, !1);
      return I.isRequired = M.bind(null, !0), I;
    }
    function j(g) {
      function C(z, M, I, G, _, L) {
        var D = z[M], q = me(D);
        if (q !== g) {
          var N = xe(D);
          return new P(
            "Invalid " + G + " `" + _ + "` of type " + ("`" + N + "` supplied to `" + I + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return O(C);
    }
    function A() {
      return O(o);
    }
    function F(g) {
      function C(z, M, I, G, _) {
        if (typeof g != "function")
          return new P("Property `" + _ + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var L = z[M];
        if (!Array.isArray(L)) {
          var D = me(L);
          return new P("Invalid " + G + " `" + _ + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected an array."));
        }
        for (var q = 0; q < L.length; q++) {
          var N = g(L, q, I, G, _ + "[" + q + "]", n);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return O(C);
    }
    function H() {
      function g(C, z, M, I, G) {
        var _ = C[z];
        if (!s(_)) {
          var L = me(_);
          return new P("Invalid " + I + " `" + G + "` of type " + ("`" + L + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(g);
    }
    function v() {
      function g(C, z, M, I, G) {
        var _ = C[z];
        if (!e.isValidElementType(_)) {
          var L = me(_);
          return new P("Invalid " + I + " `" + G + "` of type " + ("`" + L + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(g);
    }
    function ie(g) {
      function C(z, M, I, G, _) {
        if (!(z[M] instanceof g)) {
          var L = g.name || b, D = Ue(z[M]);
          return new P("Invalid " + G + " `" + _ + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return O(C);
    }
    function ue(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function C(z, M, I, G, _) {
        for (var L = z[M], D = 0; D < g.length; D++)
          if (T(L, g[D]))
            return null;
        var q = JSON.stringify(g, function(oe, w) {
          var be = xe(w);
          return be === "symbol" ? String(w) : w;
        });
        return new P("Invalid " + G + " `" + _ + "` of value `" + String(L) + "` " + ("supplied to `" + I + "`, expected one of " + q + "."));
      }
      return O(C);
    }
    function $e(g) {
      function C(z, M, I, G, _) {
        if (typeof g != "function")
          return new P("Property `" + _ + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var L = z[M], D = me(L);
        if (D !== "object")
          return new P("Invalid " + G + " `" + _ + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected an object."));
        for (var q in L)
          if (r(L, q)) {
            var N = g(L, q, I, G, _ + "." + q, n);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return O(C);
    }
    function le(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var C = 0; C < g.length; C++) {
        var z = g[C];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Fe(z) + " at index " + C + "."
          ), o;
      }
      function M(I, G, _, L, D) {
        for (var q = [], N = 0; N < g.length; N++) {
          var oe = g[N], w = oe(I, G, _, L, D, n);
          if (w == null)
            return null;
          w.data && r(w.data, "expectedType") && q.push(w.data.expectedType);
        }
        var be = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new P("Invalid " + L + " `" + D + "` supplied to " + ("`" + _ + "`" + be + "."));
      }
      return O(M);
    }
    function je() {
      function g(C, z, M, I, G) {
        return fe(C[z]) ? null : new P("Invalid " + I + " `" + G + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return O(g);
    }
    function He(g, C, z, M, I) {
      return new P(
        (g || "React class") + ": " + C + " type `" + z + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function Ge(g) {
      function C(z, M, I, G, _) {
        var L = z[M], D = me(L);
        if (D !== "object")
          return new P("Invalid " + G + " `" + _ + "` of type `" + D + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var q in g) {
          var N = g[q];
          if (typeof N != "function")
            return He(I, G, _, q, xe(N));
          var oe = N(L, q, I, G, _ + "." + q, n);
          if (oe)
            return oe;
        }
        return null;
      }
      return O(C);
    }
    function de(g) {
      function C(z, M, I, G, _) {
        var L = z[M], D = me(L);
        if (D !== "object")
          return new P("Invalid " + G + " `" + _ + "` of type `" + D + "` " + ("supplied to `" + I + "`, expected `object`."));
        var q = t({}, z[M], g);
        for (var N in q) {
          var oe = g[N];
          if (r(g, N) && typeof oe != "function")
            return He(I, G, _, N, xe(oe));
          if (!oe)
            return new P(
              "Invalid " + G + " `" + _ + "` key `" + N + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(z[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var w = oe(L, N, I, G, _ + "." + N, n);
          if (w)
            return w;
        }
        return null;
      }
      return O(C);
    }
    function fe(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(fe);
          if (g === null || s(g))
            return !0;
          var C = m(g);
          if (C) {
            var z = C.call(g), M;
            if (C !== g.entries) {
              for (; !(M = z.next()).done; )
                if (!fe(M.value))
                  return !1;
            } else
              for (; !(M = z.next()).done; ) {
                var I = M.value;
                if (I && !fe(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ce(g, C) {
      return g === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function me(g) {
      var C = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : Ce(C, g) ? "symbol" : C;
    }
    function xe(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var C = me(g);
      if (C === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function Fe(g) {
      var C = xe(g);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function Ue(g) {
      return !g.constructor || !g.constructor.name ? b : g.constructor.name;
    }
    return k.checkPropTypes = a, k.resetWarningCache = a.resetWarningCache, k.PropTypes = k, k;
  }, fn;
}
var un, ta;
function Pc() {
  if (ta)
    return un;
  ta = 1;
  var e = Vn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, un = function() {
    function r(o, s, c, u, f, m) {
      if (m !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, un;
}
if (process.env.NODE_ENV !== "production") {
  var Tc = qa(), Oc = !0;
  Rn.exports = Ec()(Tc.isElement, Oc);
} else
  Rn.exports = Pc()();
var Rc = Rn.exports;
const B = /* @__PURE__ */ xi(Rc);
function na(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? na(Object(n), !0).forEach(function(r) {
      Ve(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : na(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Nt(e) {
  "@babel/helpers - typeof";
  return Nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nt(e);
}
function Ve(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ac(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ic(e, t) {
  if (e == null)
    return {};
  var n = Ac(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function An(e) {
  return _c(e) || Lc(e) || jc(e) || Fc();
}
function _c(e) {
  if (Array.isArray(e))
    return In(e);
}
function Lc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function jc(e, t) {
  if (e) {
    if (typeof e == "string")
      return In(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return In(e, t);
  }
}
function In(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Fc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mc(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, s = e.flash, c = e.spin, u = e.spinPulse, f = e.spinReverse, m = e.pulse, b = e.fixedWidth, k = e.inverse, T = e.border, P = e.listItem, O = e.flip, j = e.size, A = e.rotation, F = e.pull, H = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": c,
    "fa-spin-reverse": f,
    "fa-spin-pulse": u,
    "fa-pulse": m,
    "fa-fw": b,
    "fa-inverse": k,
    "fa-border": T,
    "fa-li": P,
    "fa-flip": O === !0,
    "fa-flip-horizontal": O === "horizontal" || O === "both",
    "fa-flip-vertical": O === "vertical" || O === "both"
  }, Ve(t, "fa-".concat(j), typeof j < "u" && j !== null), Ve(t, "fa-rotate-".concat(A), typeof A < "u" && A !== null && A !== 0), Ve(t, "fa-pull-".concat(F), typeof F < "u" && F !== null), Ve(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(H).map(function(v) {
    return H[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function zc(e) {
  return e = e - 0, e === e;
}
function Za(e) {
  return zc(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Dc = ["style"];
function Nc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Bc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Za(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Nc(a)] = i : t[a] = i, t;
  }, {});
}
function Ka(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(c) {
    return Ka(e, c);
  }), a = Object.keys(t.attributes || {}).reduce(function(c, u) {
    var f = t.attributes[u];
    switch (u) {
      case "class":
        c.attrs.className = f, delete t.attributes.class;
        break;
      case "style":
        c.attrs.style = Bc(f);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? c.attrs[u.toLowerCase()] = f : c.attrs[Za(u)] = f;
    }
    return c;
  }, {
    attrs: {}
  }), i = n.style, o = i === void 0 ? {} : i, s = Ic(n, Dc);
  return a.attrs.style = Ae(Ae({}, a.attrs.style), o), e.apply(void 0, [t.tag, Ae(Ae({}, a.attrs), s)].concat(An(r)));
}
var Ja = !1;
try {
  Ja = process.env.NODE_ENV === "production";
} catch {
}
function Wc() {
  if (!Ja && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ra(e) {
  if (e && Nt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (On.icon)
    return On.icon(e);
  if (e === null)
    return null;
  if (e && Nt(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function dn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ve({}, e, t) : {};
}
var Ye = /* @__PURE__ */ se.forwardRef(function(e, t) {
  var n = e.icon, r = e.mask, a = e.symbol, i = e.className, o = e.title, s = e.titleId, c = e.maskId, u = ra(n), f = dn("classes", [].concat(An(Mc(e)), An(i.split(" ")))), m = dn("transform", typeof e.transform == "string" ? On.transform(e.transform) : e.transform), b = dn("mask", ra(r)), k = wc(u, Ae(Ae(Ae(Ae({}, f), m), b), {}, {
    symbol: a,
    title: o,
    titleId: s,
    maskId: c
  }));
  if (!k)
    return Wc("Could not find icon", u), null;
  var T = k.abstract, P = {
    ref: t
  };
  return Object.keys(e).forEach(function(O) {
    Ye.defaultProps.hasOwnProperty(O) || (P[O] = e[O]);
  }), Yc(T[0], P);
});
Ye.displayName = "FontAwesomeIcon";
Ye.propTypes = {
  beat: B.bool,
  border: B.bool,
  beatFade: B.bool,
  bounce: B.bool,
  className: B.string,
  fade: B.bool,
  flash: B.bool,
  mask: B.oneOfType([B.object, B.array, B.string]),
  maskId: B.string,
  fixedWidth: B.bool,
  inverse: B.bool,
  flip: B.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: B.oneOfType([B.object, B.array, B.string]),
  listItem: B.bool,
  pull: B.oneOf(["right", "left"]),
  pulse: B.bool,
  rotation: B.oneOf([0, 90, 180, 270]),
  shake: B.bool,
  size: B.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: B.bool,
  spinPulse: B.bool,
  spinReverse: B.bool,
  symbol: B.oneOfType([B.bool, B.string]),
  title: B.string,
  titleId: B.string,
  transform: B.oneOfType([B.string, B.object]),
  swapOpacity: B.bool
};
Ye.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var Yc = Ka.bind(null, se.createElement), Hc = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
};
const Gc = p.div`
    width: 100%;
    height: 100%;
    position: relative;
`, Uc = p.label`
    position: relative;
    //display: flex;
    //align-items: center;
    //justify-content: center;
    display: block;
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;

    border: ${(e) => e.checked ? `1px solid ${e.theme.main.brand}` : `1px solid ${e.theme.main.border}`};
    background-color: ${(e) => e.checked ? `${e.theme.main.brand}33` : "transparent"};
    border-radius: ${(e) => e.theme.layout.borderRadius.lg};
    color: ${(e) => e.checked ? e.theme.main.brand : e.theme.main.background};
    transition: all 0.35s;

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        padding: 3rem 2rem;
        aspect-ratio: 12 / 9;
    }
`, qc = p.div`
    display: block;
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);

    background-color: ${(e) => e.checked ? `${e.theme.main.brand}` : "tranparent"};
    border: ${(e) => e.checked ? `1px solid ${e.theme.main.brand}` : `1px solid ${e.theme.main.border}`};
    padding: 0.75rem;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    color: ${(e) => e.theme.main.contrastColor};

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        top: 1rem;
        right: 1rem;
        transform: translateY(0);
    }

    svg {
        opacity: ${(e) => e.checked ? 1 : 0};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`, Xc = p.input.attrs({ type: "radio" })`
    position: absolute;
    opacity: 0;
`, Zc = p.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        justify-content: center;
        flex-direction: column;
    }

    svg {
        width: 2rem !important; //ugly hack to override fontawesome default size
        height: 2rem;
        margin-right: 1rem;

        @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
            margin-bottom: ${(e) => e.theme.layout.padding.vertical.sm};
            margin-right: 0;
            width: 3rem !important; //ugly hack to override fontawesome default size
            height: 3rem;
        }
    }
`, Kc = p(tt)`
    color: ${(e) => e.theme.main.color};
    font-weight: normal;
`;
function gu({ name: e, index: t, checked: n, setChecked: r, value: a, label: i, icon: o }) {
  const s = e + t;
  return /* @__PURE__ */ d(Gc, { children: /* @__PURE__ */ W(Uc, { checked: n, htmlFor: s, children: [
    /* @__PURE__ */ d(qc, { checked: n, children: /* @__PURE__ */ d(Ye, { icon: Hc }) }),
    /* @__PURE__ */ d(Xc, { id: s, name: e, value: a, checked: n, onChange: (c) => r(c.target.value) }),
    /* @__PURE__ */ W(Zc, { children: [
      /* @__PURE__ */ d(Ye, { icon: o }),
      /* @__PURE__ */ d(Kc, { children: i })
    ] })
  ] }) });
}
const Jc = p.div`
    font-family: ${(e) => e.theme.main.font};

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
        background-color: ${(e) => ge.mainColors.fadeToGrey};

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
        background-color: ${(e) => e.theme.main.brand};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px ${(e) => e.theme.main.brand};
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`, Vc = p(Bt)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    cursor: pointer;
`, Qc = p.span`
    font-size: 1.1em;
    margin-left: 0.75rem;
`, vu = ({ name: e, id: t, checked: n, value: r, label: a, className: i = null, ...o }) => {
  const s = { ...o };
  return console.log("switch attributes", s), /* @__PURE__ */ d(Jc, { className: i, ...s, children: /* @__PURE__ */ W(Vc, { htmlFor: e, ...s, children: [
    /* @__PURE__ */ W("div", { className: "switch", children: [
      /* @__PURE__ */ d("input", { id: t, name: e, value: r, checked: n, type: "checkbox", ...s }),
      /* @__PURE__ */ d("span", { className: "slider round", ...s })
    ] }),
    /* @__PURE__ */ d(Qc, { className: "spanLabel", children: a })
  ] }) });
}, Ut = ae`
    color: ${ge.main.color};
    font-family: ${(e) => e.theme.main.font};
    margin: 0;
    margin-bottom: ${(e) => e.margin || ".75em"};
`, ef = p.h3`
    ${Ut}
    font-size: 2.2rem;
`, tf = p.h1`
    ${Ut}
    font-size: 1.6rem;
`, nf = p.h2`
    ${Ut}
    font-weight: lighter;
    font-size: 1.4rem;
`, rf = p.h4`
    ${Ut}
    font-size: 1.2rem;
`, af = ({ type: e = "heading", children: t, ...n }) => {
  switch (e.toLowerCase()) {
    case "hero":
      return /* @__PURE__ */ d(ef, { ...n, children: t });
    case "title":
      return /* @__PURE__ */ d(tf, { ...n, children: t });
    case "subtitle":
      return /* @__PURE__ */ d(nf, { ...n, children: t });
    default:
      return /* @__PURE__ */ d(rf, { ...n, children: t });
  }
}, of = p.hr`
    width: ${({ width: e }) => e};
    margin: 0 auto;
    border-bottom: 1px solid ${({ color: e }) => e !== null ? e : ge.generalColors.midGrey};
`, yu = ({ width: e = "100%", color: t = null }) => /* @__PURE__ */ d(of, { width: e, color: t }), sf = p.a`
    display: inline-block;
    color: ${(e) => e.theme.tabs.tab.color};
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    font-family: ${(e) => e.theme.main.font};
    border-bottom: 3px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;

    &.active {
        color: ${(e) => e.theme.tabs.tab.active};
        border-bottom: ${(e) => e.theme.tabs.tab.border};
    }
`, xu = ({ id: e, checked: t = !1, children: n, ...r }) => /* @__PURE__ */ d(sf, { id: e, className: t ? "active" : "", ...r, children: n }, `tab-${e}`), aa = p.div`
    display: block;
    position: relative;
`, wu = ({
  children: e,
  ...t
}) => {
  const { props: n } = e, { children: r } = n;
  if (r.length !== 2 || !r[0] || !r[1])
    return /* @__PURE__ */ d(aa, { children: /* @__PURE__ */ d("p", { children: "There are issues with your children" }) });
  function a(i) {
    const o = i.target.closest("a[id]");
    if (o) {
      const s = (f) => [...f.parentElement.children].filter((m) => m != f);
      s(o).forEach((f) => f.classList.remove("active")), o.classList.add("active");
      const u = i.target.closest(".tabbed-content").querySelectorAll("div#" + o.id);
      if (u && u[0]) {
        const f = u[0];
        s(f).forEach((b) => b.classList.remove("active")), f.classList.add("active");
      }
    }
  }
  return /* @__PURE__ */ d(aa, { className: "tabbed-content", ...t, onClick: a, children: e });
}, lf = p.div`
    display: none;
    position: relative;
    opacity: 0;
    transition: opacity 0.2s linear;

    &.active {
        display: block;
        opacity: 1;
        
    }

`, ku = ({
  checked: e = !1,
  children: t,
  ...n
}) => /* @__PURE__ */ d(lf, { className: e ? "active" : "", ...n, children: t }), cf = p.div``, ff = p.div`
    border-bottom: 1px solid ${(e) => e.theme.tabs.color};
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
`, $u = ({ children: e, ...t }) => /* @__PURE__ */ d(cf, { ...t, children: /* @__PURE__ */ d(ff, { children: e }) }), uf = p.div`
    display: block;
    position: relative;
`, Cu = ({
  children: e,
  ...t
}) => /* @__PURE__ */ d(uf, { ...t, children: e }), df = p.div`
    display: flex;
    justify-content: center;
    border: 1px solid ${(e) => e.theme.form.input.border};
    width: 100%;
    height:
    padding: 1rem;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;

    @media (min-width: ${(e) => e.theme.layout.breakpoints.xs}) {
        flex-wrap: nowrap;
        justify-content: space-between;
        text-align: left;
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        flex-direction: column;
        justify-content: space-around;
        aspect-ratio: 16/9;
        padding: 2rem;
        justify-content: space-between;
        text-align: center;
    }
`, mf = p(Ye)`
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;

    @media (min-width: ${(e) => e.theme.layout.breakpoints.xs}) {
        margin-bottom: 0;
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        margin-bottom: 1rem;
        width: 3rem;
        height: 3rem;
    }
`, pf = p(tt)`
    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        margin-bottom: 1rem;
    }
`;
function bf({ icon: e, title: t = "", component: n = null, className: r, ...a }) {
  return /* @__PURE__ */ W(df, { className: r, ...a, children: [
    /* @__PURE__ */ d(mf, { icon: e, color: ge.form.input.border }),
    /* @__PURE__ */ d(pf, { type: "heading", children: t }),
    n
  ] });
}
const hf = p(bf)`
    background: ${(e) => e.over ? e.theme.actionPanel.over.background : e.theme.actionPanel.base.background};
        border: 2px dashed ${(e) => e.over ? e.theme.actionPanel.over.border : e.theme.actionPanel.base.border};
    position: relative;
    /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${(e) => e.over ? e.theme.actionPanel.over.border : e.theme.actionPanel.base.border}' stroke-width='4' stroke-dasharray='%2c 14' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e"); */

    & > form {
        position: absolute;
    }
`;
function Su({ icon: e, title: t = "", component: n = null, dropHandler: r = () => {
} }) {
  const [a, i] = Lt(!1);
  return /* @__PURE__ */ d(
    hf,
    {
      icon: e,
      title: t,
      component: n,
      over: a,
      dropHandler: r,
      onDragOver: (u) => {
        u.preventDefault(), i(!0);
      },
      onDragLeave: (u) => {
        u.preventDefault(), i(!1);
      },
      onDrop: (u) => {
        u.preventDefault(), i(!1);
        const f = u.dataTransfer.files[0];
        r(f);
      }
    }
  );
}
const gf = p.div`
    font-family: ${(e) => e.theme.main.fontFamily};
    color: ${(e) => e.theme.main.color};
    overflow-x: auto;
    display: block;
`, vf = p.table`
    width: 100%;
`, yf = p(tt)`
    display: inline-block;
    //margin-left: 0.5rem;

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        display: block;
        margin-left: 0;
    }
`, ia = p.div`
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
    padding: ${(e) => e.rowPadding ? e.rowPadding : `${e.theme.layout.padding.vertical.xs} ${e.theme.layout.padding.horizontal.xs}`};
    border-bottom: ${(e) => `1px solid ${e.theme.table.header.border}`};
    display: table-row;

    &.tableHeader {
        //display: none;
        display: table-row;
    }

    &:last-child {
        border-bottom: none;

        div {
            border-bottom: none;
        }
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        //display: flex;
        border-bottom: ${(e) => e.border ? `1px solid ${e.theme.table.header.border}` : "none"};
        padding: ${(e) => e.rowPadding ? e.rowPadding : 0};

        &.tableHeader {
            //display: flex;
            display: table-row;
        }
    }
`, oa = p.div`
    //display: flex;
    flex: ${({ collapse: e }) => e ? "0" : "1"};
    //padding: 0.5rem;
    padding: ${(e) => e.theme.layout.padding.vertical.xs} ${(e) => e.theme.layout.padding.horizontal.xs};
    font-weight: bold;
    border-bottom: ${(e) => e.border ? `1px solid ${e.theme.table.header.border}` : "none"};
    align-items: center;
    //width: ${(e) => e.columns ? `calc(100% / ${e.columns})` : "auto"};
    flex-grow: 1;
    overflow: hidden;
    display: table-cell;
    white-space: nowrap;
    vertical-align: middle;

    &:first-child {
        flex-grow: 0;
        overflow: visible;
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        &:first-child {
            padding-left: ${(e) => e.theme.layout.padding.horizontal.lg};
        }
        &:last-child {
            padding-right: ${(e) => e.theme.layout.padding.horizontal.lg};
        }
    }
`, sa = p.div`
    display: block;
    flex: ${({ collapse: e }) => e ? "0" : "1"};
    //padding: 0.5rem;
    padding: ${(e) => e.theme.layout.padding.vertical.xs} ${(e) => e.theme.layout.padding.horizontal.xs};
    align-items: center;
    //width: ${(e) => e.columns ? `calc(100% - 50px / ${e.columns})` : "auto"};
    flex-grow: 1;
    overflow: hidden;
    display: table-cell;

    white-space: nowrap;
    vertical-align: middle;

    &.actions {
        display: flex;
        justify-content: 'flex-start';
    }

    &:first-child {
        //display: flex;
        flex-grow: 0;
        overflow: visible;
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        //display: flex;
        border-bottom: ${(e) => e.border ? `1px solid ${e.theme.table.header.border}` : "none"};
        justify-content: ${({ justify: e }) => e || "flex-start"};
        

        &.actions {
            justify-content: ${({ justify: e }) => e || "flex-start"};
        }

        &:first-child {
            padding-left: ${(e) => e.theme.layout.padding.horizontal.lg};
        }
        &:last-child {
            padding-right: ${(e) => e.theme.layout.padding.horizontal.lg};
        }
    }

    .responsiveHeading {
        margin-bottom: 0;
        display: inline-block;

        @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
            display: none;
        }
    }
`;
function Eu({ data: e, rowPadding: t = null }) {
  const { headings: n } = e, { rows: r } = e;
  return /* @__PURE__ */ d(gf, { children: /* @__PURE__ */ W(vf, { children: [
    /* @__PURE__ */ W(ia, { border: !0, rowPadding: t, className: "tableHeader", children: [
      /* @__PURE__ */ d(oa, { children: /* @__PURE__ */ d(xr, { margin: "0px" }) }),
      n.map((a) => /* @__PURE__ */ d(oa, { columns: n.length, children: /* @__PURE__ */ d(tt, { fontWeight: "bold", children: a }) }, a))
    ] }),
    r.map((a, i) => /* @__PURE__ */ W(ia, { rowPadding: t, children: [
      /* @__PURE__ */ d(sa, { className: "rowCheckbox", children: /* @__PURE__ */ d(xr, { margin: "0px" }) }),
      Object.keys(a).map((o, s) => /* @__PURE__ */ d(
        sa,
        {
          border: !0,
          justify: o === "actions" ? "flex-end" : "flex-start",
          className: o === "actions" ? "actions" : null,
          columns: n.length,
          children: o !== "actions" ? /* @__PURE__ */ d(yf, { children: a[o] }) : a[o]
        },
        `${o}-${i}-${s}`
      ))
    ] }, `${a.name}-${i}`))
  ] }) });
}
const Pu = p.div`
    color: ${(e) => e.theme.main.color};
    padding: ${(e) => e.theme.layout.padding.vertical.sm} ${(e) => e.theme.layout.padding.horizontal.sm};
    border-bottom: 1px solid ${(e) => e.theme.main.border};

    //remove margin on text and header
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
`, Tu = p.div`
    color: ${(e) => e.theme.main.color};
    padding: ${(e) => e.theme.layout.padding.vertical.sm} ${(e) => e.theme.layout.padding.horizontal.sm};
`, Ou = p.div`
    border-top: 1px solid ${(e) => e.theme.main.border};
    color: ${(e) => e.theme.main.color};
    display: flex;
    justify-content: space-between;
    padding: ${(e) => e.theme.layout.padding.vertical.sm} ${(e) => e.theme.layout.padding.horizontal.sm};
`, xf = p.div`
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
`, wf = p.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
`, kf = p.div`
    width: 100%;
    min-height: 4rem;
    max-width: 90%;
    max-height: 90%;
    background: ${(e) => e.transparent ? "transparent" : e.theme.main.boxBackground};
    color: ${(e) => e.theme.main.color};
    border-radius: ${(e) => e.theme.main.borderRadius};
    box-shadow: 0 5px 10px ${(e) => e.transparent ? "transparent" : "rgba(0, 0, 0, 0.3)"};
    overflow: auto;
    //padding: 2rem;
    text-align: center;

    @media (min-width: ${(e) => e.theme.layout.breakpoints.sm}) {
        width: ${(e) => e.wide ? "90%" : "70%"};
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.md}) {
        width: ${(e) => e.wide ? "80%" : "60%"};
    }

    @media (min-width: ${(e) => e.theme.layout.breakpoints.xxl}) {
        width: ${(e) => e.wide ? "70%" : "50%"};
    }
`;
function Ru({
  content: e = null,
  onClose: t = () => {
  },
  onOpen: n = () => {
  },
  isOpen: r = !1,
  transparent: a = !1,
  className: i = null,
  wide: o = !1
}) {
  return _n(() => (n(), () => {
    t();
  }), [t, n]), r ? /* @__PURE__ */ W(xf, { children: [
    /* @__PURE__ */ d(wf, { onClick: () => t(null) }),
    /* @__PURE__ */ d(kf, { id: "mainModal", transparent: a, wide: o, children: e })
  ] }) : null;
}
const $f = p.ul`
    overflow-y: auto;
    max-height: 50vh;
    padding: ${(e) => e.padding ? e.padding : `${e.theme.layout.padding.vertical.sm} ${e.theme.layout.padding.horizontal.sm}`};
    margin: ${(e) => e.margin ? e.margin : `0 0 ${e.theme.layout.padding.vertical.lg}`};
    border: 1px solid ${(e) => e.theme.main.border};
    list-style: none;
    background: ${(e) => e.background ? e.theme.generalColors.blueWhite : e.theme.mainColors.white};
`, Cf = p.li`
    font-family: ${(e) => e.theme.main.font};

    &::before {
        content: '';
        width: 100%;
        height: 1px;
        display: ${(e) => e.border ? "block" : "none"};
        border-bottom: 1px solid ${(e) => e.theme.main.border};
        //margin-right: 0;
        //margin-left: auto;
    }

    &:first-child {
        &::before {
            display: none;
        }
    }
`;
function Sf({ padding: e = null, margin: t, children: n, background: r }) {
  return /* @__PURE__ */ d($f, { padding: e, margin: t, background: r, children: n });
}
const Ef = p.div`
    padding: 1rem;
    margin: ${(e) => e.margin || "0 0 1em"};
    box-sizing: border-box;
    display: flex;
    flex-direction: ${(e) => e.horizontal ? "row" : "column"};
    width: 100%;
    align-items: center;
    border-radius: ${(e) => e.theme.main.borderRadius};
    border: ${(e) => e.border ? `1px solid ${e.theme.main.border}` : "none"};
    background: ${(e) => e.theme.generalColors.white};
    color: ${(e) => e.theme.main.color};
`, Au = p.div`
    padding: 0 1rem;
    border-bottom: ${(e) => e.border ? `1px solid ${e.theme.main.border}` : "none"};
`, Iu = p.div`
    padding: 0 1rem;
    border-bottom: ${(e) => e.border ? `1px solid ${e.theme.main.border}` : "none"};
    text-align: ${(e) => e.align || "left"};
`, _u = p.div`
    padding: 0 1rem;
    border-bottom: ${(e) => e.border ? `1px solid ${e.theme.main.border}` : "none"};
    margin-left: auto;
`;
function Lu({ horizontal: e, margin: t, border: n = !0, children: r }) {
  return /* @__PURE__ */ d(Ef, { horizontal: e, margin: t, border: n, children: r });
}
const Pf = p(Sf)`
    & .placeholder {
        background-color: ${(e) => e.theme.main.background};
    }
`, ju = p(Cf)`
    cursor: grab;
    user-select: none;
    &:active {
        cursor: grabbing;
    }
`, Fu = p.div`
    cursor: grab;
    user-select: none;
    &:active {
        cursor: grabbing;
    }

    &::before {
        content: '⋮⋮';
        colour: ${(e) => e.theme.main.color};
    }
`, Tf = p.div`
    cursor: grab;
`;
function Mu({ children: e, ...t }) {
  const [n, r] = Lt(se.Children.toArray(e)), a = dr(), i = dr();
  _n(() => {
    r(se.Children.toArray(e));
  }, [e]);
  const o = (f) => {
    a.current = f;
  }, s = (f) => {
    i.current = f;
  }, c = (f) => {
    f.preventDefault();
    const m = i.current;
    if (m === void 0)
      return;
    const b = [...n], k = b[a.current];
    b.splice(a.current, 1), b.splice(m, 0, k), a.current = m, r(b);
  }, u = () => {
    a.current = null, i.current = null;
  };
  return /* @__PURE__ */ d(Pf, { ...t, children: n.map((f, m) => /* @__PURE__ */ d(
    Tf,
    {
      draggable: !0,
      onDragStart: () => o(m),
      onDragEnter: () => s(m),
      onDragOver: c,
      onDrop: u,
      children: f
    },
    m
  )) });
}
const Of = p.circle`
    fill: none;
    stroke: ${(e) => e.theme.main.background};
    stroke-width: ${(e) => e.strokeWidth};
`, Rf = p.circle`
    fill: none;
    stroke: ${(e) => e.theme.main.brand};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: ${(e) => e.dashArray};
    stroke-dashoffset: ${(e) => e.dashOffset};
    stroke-width: ${(e) => e.strokeWidth};
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
`, Af = p.svg`
    display: block;
    margin: 10px;
    max-width: 100%;
`, If = ({ progress: e, max: t = 100, size: n, strokeWidth: r = 10 }) => {
  const a = (n - 10) / 2, i = a * 2 * Math.PI, o = i - e / t * i;
  return /* @__PURE__ */ W(Af, { width: n, height: n, children: [
    /* @__PURE__ */ d(Of, { strokeWidth: r, r: a, cx: n / 2, cy: n / 2 }),
    /* @__PURE__ */ d(
      Rf,
      {
        strokeWidth: r,
        r: a,
        cx: n / 2,
        cy: n / 2,
        dashArray: i,
        dashOffset: o
      }
    )
  ] });
}, _f = p.div``, Lf = p.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    & h4 {
        margin: 0;
    }

    button {
        margin: 0 0 0 auto;
    }
`, jf = p.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    border-top: 1px solid ${(e) => e.theme.main.border};
    padding-top: ${(e) => e.theme.layout.padding.vertical.lg};
`, Ff = p.div``, zu = p.div``;
function Du({
  children: e,
  position: t = 0,
  handleNext: n,
  handleBack: r,
  handleEnd: a,
  endText: i = "Submit",
  handleCancel: o = null
}) {
  let s = t;
  return t < 0 ? s = 0 : t > se.Children.count(e) - 1 && (s = se.Children.count(e) - 1), /* @__PURE__ */ W(_f, { children: [
    /* @__PURE__ */ W(Lf, { children: [
      /* @__PURE__ */ d(
        If,
        {
          progress: s + 1,
          max: se.Children.count(e),
          size: 50,
          strokeWidth: 8
        }
      ),
      /* @__PURE__ */ W(Ff, { children: [
        /* @__PURE__ */ W(tt, { children: [
          "Step ",
          s + 1,
          " of ",
          se.Children.count(e)
        ] }),
        se.Children.map(e, (c, u) => u === s ? /* @__PURE__ */ d(af, { children: c.props.title }) : null)
      ] }),
      o ? /* @__PURE__ */ d(ve, { action: !0, small: !0, onClick: o, children: "Cancel" }) : null
    ] }),
    se.Children.map(e, (c, u) => u === s ? c : null),
    /* @__PURE__ */ W(jf, { children: [
      /* @__PURE__ */ d(ve, { onClick: r, disabled: s === 0, neutral: !0, children: "Previous" }),
      // if last step show submit button
      s === se.Children.count(e) - 1 ? /* @__PURE__ */ d(ve, { onClick: a, children: i }) : /* @__PURE__ */ d(ve, { onClick: n, disabled: s === se.Children.count(e) - 1, children: "Next Step" })
    ] })
  ] });
}
export {
  bf as ActionPanel,
  Df as Background,
  ve as Button,
  Lu as Card,
  Iu as CardBody,
  _u as CardFooter,
  Au as CardHeader,
  xr as Checkbox,
  Nf as Chip,
  Bf as ColorPicker,
  Jf as Column,
  Uf as ColumnContainer,
  Kf as ColumnWrapper,
  Zf as Container,
  Xf as ContainerContent,
  Gf as Content,
  Mu as DragDropList,
  ju as DraggableListItem,
  Fu as DraggableListItemHandle,
  Su as DroppableActionPanel,
  ou as FlexTable,
  lu as FlexTableCell,
  fu as FlexTableHead,
  cu as FlexTableHeader,
  su as FlexTableRow,
  du as Form,
  uu as FormRow,
  qf as GridContainer,
  Hf as Header,
  af as Heading,
  yu as Hr,
  au as IconBoxes,
  mu as Input,
  zn as Label,
  Cf as ListItem,
  Ru as Modal,
  Tu as ModalBody,
  Ou as ModalFooter,
  Pu as ModalHeader,
  Wf as Pod,
  Yf as PositionContainer,
  pu as Radio,
  gu as RadioPanel,
  iu as Rectangle,
  Vf as ResponseBox,
  Eu as ResponsiveTable,
  Sf as ScrollableList,
  Is as Select,
  zu as Step,
  Du as Steps,
  vu as Switch,
  xu as Tab,
  Cu as TabContent,
  $u as TabGroup,
  ku as TabPane,
  wu as TabWrap,
  Qf as Table,
  sa as TableCell,
  oa as TableHeading,
  ia as TableRow,
  ru as Td,
  tt as Text,
  hu as TextArea,
  as as TextPairs,
  nu as Th,
  bu as TimeSelect,
  Ro as ToggleArea,
  tu as Tr,
  ge as extendDefaultTheme
};
