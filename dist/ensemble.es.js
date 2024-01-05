function ma(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jr = { exports: {} }, $t = {}, Zr = { exports: {} }, W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function ga() {
  if (Vn)
    return W;
  Vn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function E(c) {
    return c === null || typeof c != "object" ? null : (c = _ && c[_] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, Z = {};
  function re(c, g, I) {
    this.props = c, this.context = g, this.refs = Z, this.updater = I || O;
  }
  re.prototype.isReactComponent = {}, re.prototype.setState = function(c, g) {
    if (typeof c != "object" && typeof c != "function" && c != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, g, "setState");
  }, re.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function M() {
  }
  M.prototype = re.prototype;
  function A(c, g, I) {
    this.props = c, this.context = g, this.refs = Z, this.updater = I || O;
  }
  var q = A.prototype = new M();
  q.constructor = A, L(q, re.prototype), q.isPureReactComponent = !0;
  var Y = Array.isArray, D = Object.prototype.hasOwnProperty, P = { current: null }, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(c, g, I) {
    var H, F = {}, J = null, Q = null;
    if (g != null)
      for (H in g.ref !== void 0 && (Q = g.ref), g.key !== void 0 && (J = "" + g.key), g)
        D.call(g, H) && !C.hasOwnProperty(H) && (F[H] = g[H]);
    var V = arguments.length - 2;
    if (V === 1)
      F.children = I;
    else if (1 < V) {
      for (var B = Array(V), se = 0; se < V; se++)
        B[se] = arguments[se + 2];
      F.children = B;
    }
    if (c && c.defaultProps)
      for (H in V = c.defaultProps, V)
        F[H] === void 0 && (F[H] = V[H]);
    return { $$typeof: e, type: c, key: J, ref: Q, props: F, _owner: P.current };
  }
  function Se(c, g) {
    return { $$typeof: e, type: c.type, key: g, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function ze(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }
  function Ve(c) {
    var g = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(I) {
      return g[I];
    });
  }
  var Le = /\/+/g;
  function ge(c, g) {
    return typeof c == "object" && c !== null && c.key != null ? Ve("" + c.key) : g.toString(36);
  }
  function ke(c, g, I, H, F) {
    var J = typeof c;
    (J === "undefined" || J === "boolean") && (c = null);
    var Q = !1;
    if (c === null)
      Q = !0;
    else
      switch (J) {
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case e:
            case t:
              Q = !0;
          }
      }
    if (Q)
      return Q = c, F = F(Q), c = H === "" ? "." + ge(Q, 0) : H, Y(F) ? (I = "", c != null && (I = c.replace(Le, "$&/") + "/"), ke(F, g, I, "", function(se) {
        return se;
      })) : F != null && (ze(F) && (F = Se(F, I + (!F.key || Q && Q.key === F.key ? "" : ("" + F.key).replace(Le, "$&/") + "/") + c)), g.push(F)), 1;
    if (Q = 0, H = H === "" ? "." : H + ":", Y(c))
      for (var V = 0; V < c.length; V++) {
        J = c[V];
        var B = H + ge(J, V);
        Q += ke(J, g, I, B, F);
      }
    else if (B = E(c), typeof B == "function")
      for (c = B.call(c), V = 0; !(J = c.next()).done; )
        J = J.value, B = H + ge(J, V++), Q += ke(J, g, I, B, F);
    else if (J === "object")
      throw g = String(c), Error("Objects are not valid as a React child (found: " + (g === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : g) + "). If you meant to render a collection of children, use an array instead.");
    return Q;
  }
  function he(c, g, I) {
    if (c == null)
      return c;
    var H = [], F = 0;
    return ke(c, H, "", "", function(J) {
      return g.call(I, J, F++);
    }), H;
  }
  function Ce(c) {
    if (c._status === -1) {
      var g = c._result;
      g = g(), g.then(function(I) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = I);
      }, function(I) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = I);
      }), c._status === -1 && (c._status = 0, c._result = g);
    }
    if (c._status === 1)
      return c._result.default;
    throw c._result;
  }
  var R = { current: null }, me = { transition: null }, $e = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: me, ReactCurrentOwner: P };
  return W.Children = { map: he, forEach: function(c, g, I) {
    he(c, function() {
      g.apply(this, arguments);
    }, I);
  }, count: function(c) {
    var g = 0;
    return he(c, function() {
      g++;
    }), g;
  }, toArray: function(c) {
    return he(c, function(g) {
      return g;
    }) || [];
  }, only: function(c) {
    if (!ze(c))
      throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, W.Component = re, W.Fragment = n, W.Profiler = s, W.PureComponent = A, W.StrictMode = o, W.Suspense = h, W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $e, W.cloneElement = function(c, g, I) {
    if (c == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var H = L({}, c.props), F = c.key, J = c.ref, Q = c._owner;
    if (g != null) {
      if (g.ref !== void 0 && (J = g.ref, Q = P.current), g.key !== void 0 && (F = "" + g.key), c.type && c.type.defaultProps)
        var V = c.type.defaultProps;
      for (B in g)
        D.call(g, B) && !C.hasOwnProperty(B) && (H[B] = g[B] === void 0 && V !== void 0 ? V[B] : g[B]);
    }
    var B = arguments.length - 2;
    if (B === 1)
      H.children = I;
    else if (1 < B) {
      V = Array(B);
      for (var se = 0; se < B; se++)
        V[se] = arguments[se + 2];
      H.children = V;
    }
    return { $$typeof: e, type: c.type, key: F, ref: J, props: H, _owner: Q };
  }, W.createContext = function(c) {
    return c = { $$typeof: f, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: u, _context: c }, c.Consumer = c;
  }, W.createElement = ve, W.createFactory = function(c) {
    var g = ve.bind(null, c);
    return g.type = c, g;
  }, W.createRef = function() {
    return { current: null };
  }, W.forwardRef = function(c) {
    return { $$typeof: p, render: c };
  }, W.isValidElement = ze, W.lazy = function(c) {
    return { $$typeof: k, _payload: { _status: -1, _result: c }, _init: Ce };
  }, W.memo = function(c, g) {
    return { $$typeof: y, type: c, compare: g === void 0 ? null : g };
  }, W.startTransition = function(c) {
    var g = me.transition;
    me.transition = {};
    try {
      c();
    } finally {
      me.transition = g;
    }
  }, W.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, W.useCallback = function(c, g) {
    return R.current.useCallback(c, g);
  }, W.useContext = function(c) {
    return R.current.useContext(c);
  }, W.useDebugValue = function() {
  }, W.useDeferredValue = function(c) {
    return R.current.useDeferredValue(c);
  }, W.useEffect = function(c, g) {
    return R.current.useEffect(c, g);
  }, W.useId = function() {
    return R.current.useId();
  }, W.useImperativeHandle = function(c, g, I) {
    return R.current.useImperativeHandle(c, g, I);
  }, W.useInsertionEffect = function(c, g) {
    return R.current.useInsertionEffect(c, g);
  }, W.useLayoutEffect = function(c, g) {
    return R.current.useLayoutEffect(c, g);
  }, W.useMemo = function(c, g) {
    return R.current.useMemo(c, g);
  }, W.useReducer = function(c, g, I) {
    return R.current.useReducer(c, g, I);
  }, W.useRef = function(c) {
    return R.current.useRef(c);
  }, W.useState = function(c) {
    return R.current.useState(c);
  }, W.useSyncExternalStore = function(c, g, I) {
    return R.current.useSyncExternalStore(c, g, I);
  }, W.useTransition = function() {
    return R.current.useTransition();
  }, W.version = "18.2.0", W;
}
var Tt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Tt.exports;
var qn;
function ba() {
  return qn || (qn = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.2.0", o = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), y = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), re = Symbol.iterator, M = "@@iterator";
      function A(r) {
        if (r === null || typeof r != "object")
          return null;
        var a = re && r[re] || r[M];
        return typeof a == "function" ? a : null;
      }
      var q = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Y = {
        transition: null
      }, D = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, P = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, C = {}, ve = null;
      function Se(r) {
        ve = r;
      }
      C.setExtraStackFrame = function(r) {
        ve = r;
      }, C.getCurrentStack = null, C.getStackAddendum = function() {
        var r = "";
        ve && (r += ve);
        var a = C.getCurrentStack;
        return a && (r += a() || ""), r;
      };
      var ze = !1, Ve = !1, Le = !1, ge = !1, ke = !1, he = {
        ReactCurrentDispatcher: q,
        ReactCurrentBatchConfig: Y,
        ReactCurrentOwner: P
      };
      he.ReactDebugCurrentFrame = C, he.ReactCurrentActQueue = D;
      function Ce(r) {
        {
          for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), d = 1; d < a; d++)
            l[d - 1] = arguments[d];
          me("warn", r, l);
        }
      }
      function R(r) {
        {
          for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), d = 1; d < a; d++)
            l[d - 1] = arguments[d];
          me("error", r, l);
        }
      }
      function me(r, a, l) {
        {
          var d = he.ReactDebugCurrentFrame, b = d.getStackAddendum();
          b !== "" && (a += "%s", l = l.concat([b]));
          var T = l.map(function(S) {
            return String(S);
          });
          T.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, T);
        }
      }
      var $e = {};
      function c(r, a) {
        {
          var l = r.constructor, d = l && (l.displayName || l.name) || "ReactClass", b = d + "." + a;
          if ($e[b])
            return;
          R("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", a, d), $e[b] = !0;
        }
      }
      var g = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(r) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(r, a, l) {
          c(r, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(r, a, l, d) {
          c(r, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(r, a, l, d) {
          c(r, "setState");
        }
      }, I = Object.assign, H = {};
      Object.freeze(H);
      function F(r, a, l) {
        this.props = r, this.context = a, this.refs = H, this.updater = l || g;
      }
      F.prototype.isReactComponent = {}, F.prototype.setState = function(r, a) {
        if (typeof r != "object" && typeof r != "function" && r != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, a, "setState");
      }, F.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      {
        var J = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Q = function(r, a) {
          Object.defineProperty(F.prototype, r, {
            get: function() {
              Ce("%s(...) is deprecated in plain JavaScript React classes. %s", a[0], a[1]);
            }
          });
        };
        for (var V in J)
          J.hasOwnProperty(V) && Q(V, J[V]);
      }
      function B() {
      }
      B.prototype = F.prototype;
      function se(r, a, l) {
        this.props = r, this.context = a, this.refs = H, this.updater = l || g;
      }
      var Pe = se.prototype = new B();
      Pe.constructor = se, I(Pe, F.prototype), Pe.isPureReactComponent = !0;
      function Te() {
        var r = {
          current: null
        };
        return Object.seal(r), r;
      }
      var Nt = Array.isArray;
      function ut(r) {
        return Nt(r);
      }
      function Sr(r) {
        {
          var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
          return l;
        }
      }
      function lt(r) {
        try {
          return qe(r), !1;
        } catch {
          return !0;
        }
      }
      function qe(r) {
        return "" + r;
      }
      function Ke(r) {
        if (lt(r))
          return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(r)), qe(r);
      }
      function zt(r, a, l) {
        var d = r.displayName;
        if (d)
          return d;
        var b = a.displayName || a.name || "";
        return b !== "" ? l + "(" + b + ")" : l;
      }
      function Xe(r) {
        return r.displayName || "Context";
      }
      function je(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case u:
            return "Fragment";
          case s:
            return "Portal";
          case p:
            return "Profiler";
          case f:
            return "StrictMode";
          case _:
            return "Suspense";
          case E:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case y:
              var a = r;
              return Xe(a) + ".Consumer";
            case h:
              var l = r;
              return Xe(l._context) + ".Provider";
            case k:
              return zt(r, r.render, "ForwardRef");
            case O:
              var d = r.displayName || null;
              return d !== null ? d : je(r.type) || "Memo";
            case L: {
              var b = r, T = b._payload, S = b._init;
              try {
                return je(S(T));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Je = Object.prototype.hasOwnProperty, ft = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Lt, Mt, dt;
      dt = {};
      function _t(r) {
        if (Je.call(r, "ref")) {
          var a = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function We(r) {
        if (Je.call(r, "key")) {
          var a = Object.getOwnPropertyDescriptor(r, "key").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function _r(r, a) {
        var l = function() {
          Lt || (Lt = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: l,
          configurable: !0
        });
      }
      function Bt(r, a) {
        var l = function() {
          Mt || (Mt = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: l,
          configurable: !0
        });
      }
      function Wt(r) {
        if (typeof r.ref == "string" && P.current && r.__self && P.current.stateNode !== r.__self) {
          var a = je(P.current.type);
          dt[a] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, r.ref), dt[a] = !0);
        }
      }
      var Ze = function(r, a, l, d, b, T, S) {
        var j = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: r,
          key: a,
          ref: l,
          props: S,
          // Record the component responsible for creating this element.
          _owner: T
        };
        return j._store = {}, Object.defineProperty(j._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(j, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.defineProperty(j, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
      };
      function Rr(r, a, l) {
        var d, b = {}, T = null, S = null, j = null, K = null;
        if (a != null) {
          _t(a) && (S = a.ref, Wt(a)), We(a) && (Ke(a.key), T = "" + a.key), j = a.__self === void 0 ? null : a.__self, K = a.__source === void 0 ? null : a.__source;
          for (d in a)
            Je.call(a, d) && !ft.hasOwnProperty(d) && (b[d] = a[d]);
        }
        var ne = arguments.length - 2;
        if (ne === 1)
          b.children = l;
        else if (ne > 1) {
          for (var ae = Array(ne), ie = 0; ie < ne; ie++)
            ae[ie] = arguments[ie + 2];
          Object.freeze && Object.freeze(ae), b.children = ae;
        }
        if (r && r.defaultProps) {
          var ue = r.defaultProps;
          for (d in ue)
            b[d] === void 0 && (b[d] = ue[d]);
        }
        if (T || S) {
          var fe = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          T && _r(b, fe), S && Bt(b, fe);
        }
        return Ze(r, T, S, j, K, P.current, b);
      }
      function Er(r, a) {
        var l = Ze(r.type, a, r.ref, r._self, r._source, r._owner, r.props);
        return l;
      }
      function Cr(r, a, l) {
        if (r == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var d, b = I({}, r.props), T = r.key, S = r.ref, j = r._self, K = r._source, ne = r._owner;
        if (a != null) {
          _t(a) && (S = a.ref, ne = P.current), We(a) && (Ke(a.key), T = "" + a.key);
          var ae;
          r.type && r.type.defaultProps && (ae = r.type.defaultProps);
          for (d in a)
            Je.call(a, d) && !ft.hasOwnProperty(d) && (a[d] === void 0 && ae !== void 0 ? b[d] = ae[d] : b[d] = a[d]);
        }
        var ie = arguments.length - 2;
        if (ie === 1)
          b.children = l;
        else if (ie > 1) {
          for (var ue = Array(ie), fe = 0; fe < ie; fe++)
            ue[fe] = arguments[fe + 2];
          b.children = ue;
        }
        return Ze(r.type, T, S, j, K, ne, b);
      }
      function Ye(r) {
        return typeof r == "object" && r !== null && r.$$typeof === o;
      }
      var Yt = ".", $r = ":";
      function Pr(r) {
        var a = /[=:]/g, l = {
          "=": "=0",
          ":": "=2"
        }, d = r.replace(a, function(b) {
          return l[b];
        });
        return "$" + d;
      }
      var pt = !1, Ht = /\/+/g;
      function Me(r) {
        return r.replace(Ht, "$&/");
      }
      function Qe(r, a) {
        return typeof r == "object" && r !== null && r.key != null ? (Ke(r.key), Pr("" + r.key)) : a.toString(36);
      }
      function He(r, a, l, d, b) {
        var T = typeof r;
        (T === "undefined" || T === "boolean") && (r = null);
        var S = !1;
        if (r === null)
          S = !0;
        else
          switch (T) {
            case "string":
            case "number":
              S = !0;
              break;
            case "object":
              switch (r.$$typeof) {
                case o:
                case s:
                  S = !0;
              }
          }
        if (S) {
          var j = r, K = b(j), ne = d === "" ? Yt + Qe(j, 0) : d;
          if (ut(K)) {
            var ae = "";
            ne != null && (ae = Me(ne) + "/"), He(K, a, ae, "", function(ha) {
              return ha;
            });
          } else
            K != null && (Ye(K) && (K.key && (!j || j.key !== K.key) && Ke(K.key), K = Er(
              K,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              l + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (K.key && (!j || j.key !== K.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Me("" + K.key) + "/"
              ) : "") + ne
            )), a.push(K));
          return 1;
        }
        var ie, ue, fe = 0, we = d === "" ? Yt : d + $r;
        if (ut(r))
          for (var tr = 0; tr < r.length; tr++)
            ie = r[tr], ue = we + Qe(ie, tr), fe += He(ie, a, l, ue, b);
        else {
          var Yr = A(r);
          if (typeof Yr == "function") {
            var Hn = r;
            Yr === Hn.entries && (pt || Ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pt = !0);
            for (var da = Yr.call(Hn), Un, pa = 0; !(Un = da.next()).done; )
              ie = Un.value, ue = we + Qe(ie, pa++), fe += He(ie, a, l, ue, b);
          } else if (T === "object") {
            var Gn = String(r);
            throw new Error("Objects are not valid as a React child (found: " + (Gn === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : Gn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return fe;
      }
      function et(r, a, l) {
        if (r == null)
          return r;
        var d = [], b = 0;
        return He(r, d, "", "", function(T) {
          return a.call(l, T, b++);
        }), d;
      }
      function Tr(r) {
        var a = 0;
        return et(r, function() {
          a++;
        }), a;
      }
      function Ut(r, a, l) {
        et(r, function() {
          a.apply(this, arguments);
        }, l);
      }
      function Or(r) {
        return et(r, function(a) {
          return a;
        }) || [];
      }
      function Gt(r) {
        if (!Ye(r))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return r;
      }
      function Vt(r) {
        var a = {
          $$typeof: y,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: r,
          _currentValue2: r,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        a.Provider = {
          $$typeof: h,
          _context: a
        };
        var l = !1, d = !1, b = !1;
        {
          var T = {
            $$typeof: y,
            _context: a
          };
          Object.defineProperties(T, {
            Provider: {
              get: function() {
                return d || (d = !0, R("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), a.Provider;
              },
              set: function(S) {
                a.Provider = S;
              }
            },
            _currentValue: {
              get: function() {
                return a._currentValue;
              },
              set: function(S) {
                a._currentValue = S;
              }
            },
            _currentValue2: {
              get: function() {
                return a._currentValue2;
              },
              set: function(S) {
                a._currentValue2 = S;
              }
            },
            _threadCount: {
              get: function() {
                return a._threadCount;
              },
              set: function(S) {
                a._threadCount = S;
              }
            },
            Consumer: {
              get: function() {
                return l || (l = !0, R("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), a.Consumer;
              }
            },
            displayName: {
              get: function() {
                return a.displayName;
              },
              set: function(S) {
                b || (Ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", S), b = !0);
              }
            }
          }), a.Consumer = T;
        }
        return a._currentRenderer = null, a._currentRenderer2 = null, a;
      }
      var tt = -1, Rt = 0, Et = 1, Ir = 2;
      function Ar(r) {
        if (r._status === tt) {
          var a = r._result, l = a();
          if (l.then(function(T) {
            if (r._status === Rt || r._status === tt) {
              var S = r;
              S._status = Et, S._result = T;
            }
          }, function(T) {
            if (r._status === Rt || r._status === tt) {
              var S = r;
              S._status = Ir, S._result = T;
            }
          }), r._status === tt) {
            var d = r;
            d._status = Rt, d._result = l;
          }
        }
        if (r._status === Et) {
          var b = r._result;
          return b === void 0 && R(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, b), "default" in b || R(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, b), b.default;
        } else
          throw r._result;
      }
      function jr(r) {
        var a = {
          // We use these fields to store the result.
          _status: tt,
          _result: r
        }, l = {
          $$typeof: L,
          _payload: a,
          _init: Ar
        };
        {
          var d, b;
          Object.defineProperties(l, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return d;
              },
              set: function(T) {
                R("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), d = T, Object.defineProperty(l, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return b;
              },
              set: function(T) {
                R("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), b = T, Object.defineProperty(l, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return l;
      }
      function Dr(r) {
        r != null && r.$$typeof === O ? R("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof r != "function" ? R("forwardRef requires a render function but was given %s.", r === null ? "null" : typeof r) : r.length !== 0 && r.length !== 2 && R("forwardRef render functions accept exactly two parameters: props and ref. %s", r.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), r != null && (r.defaultProps != null || r.propTypes != null) && R("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var a = {
          $$typeof: k,
          render: r
        };
        {
          var l;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return l;
            },
            set: function(d) {
              l = d, !r.name && !r.displayName && (r.displayName = d);
            }
          });
        }
        return a;
      }
      var i;
      i = Symbol.for("react.module.reference");
      function m(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === u || r === p || ke || r === f || r === _ || r === E || ge || r === Z || ze || Ve || Le || typeof r == "object" && r !== null && (r.$$typeof === L || r.$$typeof === O || r.$$typeof === h || r.$$typeof === y || r.$$typeof === k || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        r.$$typeof === i || r.getModuleId !== void 0));
      }
      function v(r, a) {
        m(r) || R("memo: The first argument must be a component. Instead received: %s", r === null ? "null" : typeof r);
        var l = {
          $$typeof: O,
          type: r,
          compare: a === void 0 ? null : a
        };
        {
          var d;
          Object.defineProperty(l, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return d;
            },
            set: function(b) {
              d = b, !r.name && !r.displayName && (r.displayName = b);
            }
          });
        }
        return l;
      }
      function x() {
        var r = q.current;
        return r === null && R(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), r;
      }
      function X(r) {
        var a = x();
        if (r._context !== void 0) {
          var l = r._context;
          l.Consumer === r ? R("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : l.Provider === r && R("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return a.useContext(r);
      }
      function te(r) {
        var a = x();
        return a.useState(r);
      }
      function U(r, a, l) {
        var d = x();
        return d.useReducer(r, a, l);
      }
      function z(r) {
        var a = x();
        return a.useRef(r);
      }
      function ye(r, a) {
        var l = x();
        return l.useEffect(r, a);
      }
      function ce(r, a) {
        var l = x();
        return l.useInsertionEffect(r, a);
      }
      function le(r, a) {
        var l = x();
        return l.useLayoutEffect(r, a);
      }
      function _e(r, a) {
        var l = x();
        return l.useCallback(r, a);
      }
      function Ue(r, a) {
        var l = x();
        return l.useMemo(r, a);
      }
      function qt(r, a, l) {
        var d = x();
        return d.useImperativeHandle(r, a, l);
      }
      function Ie(r, a) {
        {
          var l = x();
          return l.useDebugValue(r, a);
        }
      }
      function Yo() {
        var r = x();
        return r.useTransition();
      }
      function Ho(r) {
        var a = x();
        return a.useDeferredValue(r);
      }
      function Uo() {
        var r = x();
        return r.useId();
      }
      function Go(r, a, l) {
        var d = x();
        return d.useSyncExternalStore(r, a, l);
      }
      var Ct = 0, _n, Rn, En, Cn, $n, Pn, Tn;
      function On() {
      }
      On.__reactDisabledLog = !0;
      function Vo() {
        {
          if (Ct === 0) {
            _n = console.log, Rn = console.info, En = console.warn, Cn = console.error, $n = console.group, Pn = console.groupCollapsed, Tn = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: On,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          Ct++;
        }
      }
      function qo() {
        {
          if (Ct--, Ct === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: I({}, r, {
                value: _n
              }),
              info: I({}, r, {
                value: Rn
              }),
              warn: I({}, r, {
                value: En
              }),
              error: I({}, r, {
                value: Cn
              }),
              group: I({}, r, {
                value: $n
              }),
              groupCollapsed: I({}, r, {
                value: Pn
              }),
              groupEnd: I({}, r, {
                value: Tn
              })
            });
          }
          Ct < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Fr = he.ReactCurrentDispatcher, Nr;
      function Kt(r, a, l) {
        {
          if (Nr === void 0)
            try {
              throw Error();
            } catch (b) {
              var d = b.stack.trim().match(/\n( *(at )?)/);
              Nr = d && d[1] || "";
            }
          return `
` + Nr + r;
        }
      }
      var zr = !1, Xt;
      {
        var Ko = typeof WeakMap == "function" ? WeakMap : Map;
        Xt = new Ko();
      }
      function In(r, a) {
        if (!r || zr)
          return "";
        {
          var l = Xt.get(r);
          if (l !== void 0)
            return l;
        }
        var d;
        zr = !0;
        var b = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var T;
        T = Fr.current, Fr.current = null, Vo();
        try {
          if (a) {
            var S = function() {
              throw Error();
            };
            if (Object.defineProperty(S.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(S, []);
              } catch (we) {
                d = we;
              }
              Reflect.construct(r, [], S);
            } else {
              try {
                S.call();
              } catch (we) {
                d = we;
              }
              r.call(S.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (we) {
              d = we;
            }
            r();
          }
        } catch (we) {
          if (we && d && typeof we.stack == "string") {
            for (var j = we.stack.split(`
`), K = d.stack.split(`
`), ne = j.length - 1, ae = K.length - 1; ne >= 1 && ae >= 0 && j[ne] !== K[ae]; )
              ae--;
            for (; ne >= 1 && ae >= 0; ne--, ae--)
              if (j[ne] !== K[ae]) {
                if (ne !== 1 || ae !== 1)
                  do
                    if (ne--, ae--, ae < 0 || j[ne] !== K[ae]) {
                      var ie = `
` + j[ne].replace(" at new ", " at ");
                      return r.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", r.displayName)), typeof r == "function" && Xt.set(r, ie), ie;
                    }
                  while (ne >= 1 && ae >= 0);
                break;
              }
          }
        } finally {
          zr = !1, Fr.current = T, qo(), Error.prepareStackTrace = b;
        }
        var ue = r ? r.displayName || r.name : "", fe = ue ? Kt(ue) : "";
        return typeof r == "function" && Xt.set(r, fe), fe;
      }
      function Xo(r, a, l) {
        return In(r, !1);
      }
      function Jo(r) {
        var a = r.prototype;
        return !!(a && a.isReactComponent);
      }
      function Jt(r, a, l) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return In(r, Jo(r));
        if (typeof r == "string")
          return Kt(r);
        switch (r) {
          case _:
            return Kt("Suspense");
          case E:
            return Kt("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case k:
              return Xo(r.render);
            case O:
              return Jt(r.type, a, l);
            case L: {
              var d = r, b = d._payload, T = d._init;
              try {
                return Jt(T(b), a, l);
              } catch {
              }
            }
          }
        return "";
      }
      var An = {}, jn = he.ReactDebugCurrentFrame;
      function Zt(r) {
        if (r) {
          var a = r._owner, l = Jt(r.type, r._source, a ? a.type : null);
          jn.setExtraStackFrame(l);
        } else
          jn.setExtraStackFrame(null);
      }
      function Zo(r, a, l, d, b) {
        {
          var T = Function.call.bind(Je);
          for (var S in r)
            if (T(r, S)) {
              var j = void 0;
              try {
                if (typeof r[S] != "function") {
                  var K = Error((d || "React class") + ": " + l + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw K.name = "Invariant Violation", K;
                }
                j = r[S](a, S, d, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ne) {
                j = ne;
              }
              j && !(j instanceof Error) && (Zt(b), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", l, S, typeof j), Zt(null)), j instanceof Error && !(j.message in An) && (An[j.message] = !0, Zt(b), R("Failed %s type: %s", l, j.message), Zt(null));
            }
        }
      }
      function ht(r) {
        if (r) {
          var a = r._owner, l = Jt(r.type, r._source, a ? a.type : null);
          Se(l);
        } else
          Se(null);
      }
      var Lr;
      Lr = !1;
      function Dn() {
        if (P.current) {
          var r = je(P.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
      function Qo(r) {
        if (r !== void 0) {
          var a = r.fileName.replace(/^.*[\\\/]/, ""), l = r.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
      function ea(r) {
        return r != null ? Qo(r.__source) : "";
      }
      var Fn = {};
      function ta(r) {
        var a = Dn();
        if (!a) {
          var l = typeof r == "string" ? r : r.displayName || r.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
      function Nn(r, a) {
        if (!(!r._store || r._store.validated || r.key != null)) {
          r._store.validated = !0;
          var l = ta(a);
          if (!Fn[l]) {
            Fn[l] = !0;
            var d = "";
            r && r._owner && r._owner !== P.current && (d = " It was passed a child from " + je(r._owner.type) + "."), ht(r), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, d), ht(null);
          }
        }
      }
      function zn(r, a) {
        if (typeof r == "object") {
          if (ut(r))
            for (var l = 0; l < r.length; l++) {
              var d = r[l];
              Ye(d) && Nn(d, a);
            }
          else if (Ye(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var b = A(r);
            if (typeof b == "function" && b !== r.entries)
              for (var T = b.call(r), S; !(S = T.next()).done; )
                Ye(S.value) && Nn(S.value, a);
          }
        }
      }
      function Ln(r) {
        {
          var a = r.type;
          if (a == null || typeof a == "string")
            return;
          var l;
          if (typeof a == "function")
            l = a.propTypes;
          else if (typeof a == "object" && (a.$$typeof === k || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          a.$$typeof === O))
            l = a.propTypes;
          else
            return;
          if (l) {
            var d = je(a);
            Zo(l, r.props, "prop", d, r);
          } else if (a.PropTypes !== void 0 && !Lr) {
            Lr = !0;
            var b = je(a);
            R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
          }
          typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ra(r) {
        {
          for (var a = Object.keys(r.props), l = 0; l < a.length; l++) {
            var d = a[l];
            if (d !== "children" && d !== "key") {
              ht(r), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), ht(null);
              break;
            }
          }
          r.ref !== null && (ht(r), R("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
        }
      }
      function Mn(r, a, l) {
        var d = m(r);
        if (!d) {
          var b = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ea(a);
          T ? b += T : b += Dn();
          var S;
          r === null ? S = "null" : ut(r) ? S = "array" : r !== void 0 && r.$$typeof === o ? (S = "<" + (je(r.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : S = typeof r, R("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, b);
        }
        var j = Rr.apply(this, arguments);
        if (j == null)
          return j;
        if (d)
          for (var K = 2; K < arguments.length; K++)
            zn(arguments[K], r);
        return r === u ? ra(j) : Ln(j), j;
      }
      var Bn = !1;
      function na(r) {
        var a = Mn.bind(null, r);
        return a.type = r, Bn || (Bn = !0, Ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(a, "type", {
          enumerable: !1,
          get: function() {
            return Ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: r
            }), r;
          }
        }), a;
      }
      function oa(r, a, l) {
        for (var d = Cr.apply(this, arguments), b = 2; b < arguments.length; b++)
          zn(arguments[b], d.type);
        return Ln(d), d;
      }
      function aa(r, a) {
        var l = Y.transition;
        Y.transition = {};
        var d = Y.transition;
        Y.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          r();
        } finally {
          if (Y.transition = l, l === null && d._updatedFibers) {
            var b = d._updatedFibers.size;
            b > 10 && Ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
          }
        }
      }
      var Wn = !1, Qt = null;
      function ia(r) {
        if (Qt === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7), l = e && e[a];
            Qt = l.call(e, "timers").setImmediate;
          } catch {
            Qt = function(b) {
              Wn === !1 && (Wn = !0, typeof MessageChannel > "u" && R("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var T = new MessageChannel();
              T.port1.onmessage = b, T.port2.postMessage(void 0);
            };
          }
        return Qt(r);
      }
      var mt = 0, Yn = !1;
      function sa(r) {
        {
          var a = mt;
          mt++, D.current === null && (D.current = []);
          var l = D.isBatchingLegacy, d;
          try {
            if (D.isBatchingLegacy = !0, d = r(), !l && D.didScheduleLegacyUpdate) {
              var b = D.current;
              b !== null && (D.didScheduleLegacyUpdate = !1, Wr(b));
            }
          } catch (ue) {
            throw er(a), ue;
          } finally {
            D.isBatchingLegacy = l;
          }
          if (d !== null && typeof d == "object" && typeof d.then == "function") {
            var T = d, S = !1, j = {
              then: function(ue, fe) {
                S = !0, T.then(function(we) {
                  er(a), mt === 0 ? Mr(we, ue, fe) : ue(we);
                }, function(we) {
                  er(a), fe(we);
                });
              }
            };
            return !Yn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              S || (Yn = !0, R("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), j;
          } else {
            var K = d;
            if (er(a), mt === 0) {
              var ne = D.current;
              ne !== null && (Wr(ne), D.current = null);
              var ae = {
                then: function(ue, fe) {
                  D.current === null ? (D.current = [], Mr(K, ue, fe)) : ue(K);
                }
              };
              return ae;
            } else {
              var ie = {
                then: function(ue, fe) {
                  ue(K);
                }
              };
              return ie;
            }
          }
        }
      }
      function er(r) {
        r !== mt - 1 && R("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), mt = r;
      }
      function Mr(r, a, l) {
        {
          var d = D.current;
          if (d !== null)
            try {
              Wr(d), ia(function() {
                d.length === 0 ? (D.current = null, a(r)) : Mr(r, a, l);
              });
            } catch (b) {
              l(b);
            }
          else
            a(r);
        }
      }
      var Br = !1;
      function Wr(r) {
        if (!Br) {
          Br = !0;
          var a = 0;
          try {
            for (; a < r.length; a++) {
              var l = r[a];
              do
                l = l(!0);
              while (l !== null);
            }
            r.length = 0;
          } catch (d) {
            throw r = r.slice(a + 1), d;
          } finally {
            Br = !1;
          }
        }
      }
      var ca = Mn, ua = oa, la = na, fa = {
        map: et,
        forEach: Ut,
        count: Tr,
        toArray: Or,
        only: Gt
      };
      t.Children = fa, t.Component = F, t.Fragment = u, t.Profiler = p, t.PureComponent = se, t.StrictMode = f, t.Suspense = _, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, t.cloneElement = ua, t.createContext = Vt, t.createElement = ca, t.createFactory = la, t.createRef = Te, t.forwardRef = Dr, t.isValidElement = Ye, t.lazy = jr, t.memo = v, t.startTransition = aa, t.unstable_act = sa, t.useCallback = _e, t.useContext = X, t.useDebugValue = Ie, t.useDeferredValue = Ho, t.useEffect = ye, t.useId = Uo, t.useImperativeHandle = qt, t.useInsertionEffect = ce, t.useLayoutEffect = le, t.useMemo = Ue, t.useReducer = U, t.useRef = z, t.useState = te, t.useSyncExternalStore = Go, t.useTransition = Yo, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Tt, Tt.exports)), Tt.exports;
}
process.env.NODE_ENV === "production" ? Zr.exports = ga() : Zr.exports = ba();
var Ne = Zr.exports;
const At = /* @__PURE__ */ ma(Ne);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function va() {
  if (Kn)
    return $t;
  Kn = 1;
  var e = Ne, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, h, y) {
    var k, _ = {}, E = null, O = null;
    y !== void 0 && (E = "" + y), h.key !== void 0 && (E = "" + h.key), h.ref !== void 0 && (O = h.ref);
    for (k in h)
      o.call(h, k) && !u.hasOwnProperty(k) && (_[k] = h[k]);
    if (p && p.defaultProps)
      for (k in h = p.defaultProps, h)
        _[k] === void 0 && (_[k] = h[k]);
    return { $$typeof: t, type: p, key: E, ref: O, props: _, _owner: s.current };
  }
  return $t.Fragment = n, $t.jsx = f, $t.jsxs = f, $t;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function ya() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ne, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), L = Symbol.iterator, Z = "@@iterator";
    function re(i) {
      if (i === null || typeof i != "object")
        return null;
      var m = L && i[L] || i[Z];
      return typeof m == "function" ? m : null;
    }
    var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(i) {
      {
        for (var m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++)
          v[x - 1] = arguments[x];
        q("error", i, v);
      }
    }
    function q(i, m, v) {
      {
        var x = M.ReactDebugCurrentFrame, X = x.getStackAddendum();
        X !== "" && (m += "%s", v = v.concat([X]));
        var te = v.map(function(U) {
          return String(U);
        });
        te.unshift("Warning: " + m), Function.prototype.apply.call(console[i], console, te);
      }
    }
    var Y = !1, D = !1, P = !1, C = !1, ve = !1, Se;
    Se = Symbol.for("react.module.reference");
    function ze(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === o || i === u || ve || i === s || i === y || i === k || C || i === O || Y || D || P || typeof i == "object" && i !== null && (i.$$typeof === E || i.$$typeof === _ || i.$$typeof === f || i.$$typeof === p || i.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Se || i.getModuleId !== void 0));
    }
    function Ve(i, m, v) {
      var x = i.displayName;
      if (x)
        return x;
      var X = m.displayName || m.name || "";
      return X !== "" ? v + "(" + X + ")" : v;
    }
    function Le(i) {
      return i.displayName || "Context";
    }
    function ge(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case y:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case p:
            var m = i;
            return Le(m) + ".Consumer";
          case f:
            var v = i;
            return Le(v._context) + ".Provider";
          case h:
            return Ve(i, i.render, "ForwardRef");
          case _:
            var x = i.displayName || null;
            return x !== null ? x : ge(i.type) || "Memo";
          case E: {
            var X = i, te = X._payload, U = X._init;
            try {
              return ge(U(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ke = Object.assign, he = 0, Ce, R, me, $e, c, g, I;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function F() {
      {
        if (he === 0) {
          Ce = console.log, R = console.info, me = console.warn, $e = console.error, c = console.group, g = console.groupCollapsed, I = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        he++;
      }
    }
    function J() {
      {
        if (he--, he === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ke({}, i, {
              value: Ce
            }),
            info: ke({}, i, {
              value: R
            }),
            warn: ke({}, i, {
              value: me
            }),
            error: ke({}, i, {
              value: $e
            }),
            group: ke({}, i, {
              value: c
            }),
            groupCollapsed: ke({}, i, {
              value: g
            }),
            groupEnd: ke({}, i, {
              value: I
            })
          });
        }
        he < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = M.ReactCurrentDispatcher, V;
    function B(i, m, v) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (X) {
            var x = X.stack.trim().match(/\n( *(at )?)/);
            V = x && x[1] || "";
          }
        return `
` + V + i;
      }
    }
    var se = !1, Pe;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Te();
    }
    function Nt(i, m) {
      if (!i || se)
        return "";
      {
        var v = Pe.get(i);
        if (v !== void 0)
          return v;
      }
      var x;
      se = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = Q.current, Q.current = null, F();
      try {
        if (m) {
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
            } catch (Ie) {
              x = Ie;
            }
            Reflect.construct(i, [], U);
          } else {
            try {
              U.call();
            } catch (Ie) {
              x = Ie;
            }
            i.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            x = Ie;
          }
          i();
        }
      } catch (Ie) {
        if (Ie && x && typeof Ie.stack == "string") {
          for (var z = Ie.stack.split(`
`), ye = x.stack.split(`
`), ce = z.length - 1, le = ye.length - 1; ce >= 1 && le >= 0 && z[ce] !== ye[le]; )
            le--;
          for (; ce >= 1 && le >= 0; ce--, le--)
            if (z[ce] !== ye[le]) {
              if (ce !== 1 || le !== 1)
                do
                  if (ce--, le--, le < 0 || z[ce] !== ye[le]) {
                    var _e = `
` + z[ce].replace(" at new ", " at ");
                    return i.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", i.displayName)), typeof i == "function" && Pe.set(i, _e), _e;
                  }
                while (ce >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        se = !1, Q.current = te, J(), Error.prepareStackTrace = X;
      }
      var Ue = i ? i.displayName || i.name : "", qt = Ue ? B(Ue) : "";
      return typeof i == "function" && Pe.set(i, qt), qt;
    }
    function ut(i, m, v) {
      return Nt(i, !1);
    }
    function Sr(i) {
      var m = i.prototype;
      return !!(m && m.isReactComponent);
    }
    function lt(i, m, v) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Nt(i, Sr(i));
      if (typeof i == "string")
        return B(i);
      switch (i) {
        case y:
          return B("Suspense");
        case k:
          return B("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case h:
            return ut(i.render);
          case _:
            return lt(i.type, m, v);
          case E: {
            var x = i, X = x._payload, te = x._init;
            try {
              return lt(te(X), m, v);
            } catch {
            }
          }
        }
      return "";
    }
    var qe = Object.prototype.hasOwnProperty, Ke = {}, zt = M.ReactDebugCurrentFrame;
    function Xe(i) {
      if (i) {
        var m = i._owner, v = lt(i.type, i._source, m ? m.type : null);
        zt.setExtraStackFrame(v);
      } else
        zt.setExtraStackFrame(null);
    }
    function je(i, m, v, x, X) {
      {
        var te = Function.call.bind(qe);
        for (var U in i)
          if (te(i, U)) {
            var z = void 0;
            try {
              if (typeof i[U] != "function") {
                var ye = Error((x || "React class") + ": " + v + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              z = i[U](m, U, x, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              z = ce;
            }
            z && !(z instanceof Error) && (Xe(X), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", v, U, typeof z), Xe(null)), z instanceof Error && !(z.message in Ke) && (Ke[z.message] = !0, Xe(X), A("Failed %s type: %s", v, z.message), Xe(null));
          }
      }
    }
    var Je = Array.isArray;
    function ft(i) {
      return Je(i);
    }
    function Lt(i) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, v = m && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return v;
      }
    }
    function Mt(i) {
      try {
        return dt(i), !1;
      } catch {
        return !0;
      }
    }
    function dt(i) {
      return "" + i;
    }
    function _t(i) {
      if (Mt(i))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lt(i)), dt(i);
    }
    var We = M.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bt, Wt, Ze;
    Ze = {};
    function Rr(i) {
      if (qe.call(i, "ref")) {
        var m = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Er(i) {
      if (qe.call(i, "key")) {
        var m = Object.getOwnPropertyDescriptor(i, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Cr(i, m) {
      if (typeof i.ref == "string" && We.current && m && We.current.stateNode !== m) {
        var v = ge(We.current.type);
        Ze[v] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ge(We.current.type), i.ref), Ze[v] = !0);
      }
    }
    function Ye(i, m) {
      {
        var v = function() {
          Bt || (Bt = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        v.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Yt(i, m) {
      {
        var v = function() {
          Wt || (Wt = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        v.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var $r = function(i, m, v, x, X, te, U) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: m,
        ref: v,
        props: U,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function Pr(i, m, v, x, X) {
      {
        var te, U = {}, z = null, ye = null;
        v !== void 0 && (_t(v), z = "" + v), Er(m) && (_t(m.key), z = "" + m.key), Rr(m) && (ye = m.ref, Cr(m, X));
        for (te in m)
          qe.call(m, te) && !_r.hasOwnProperty(te) && (U[te] = m[te]);
        if (i && i.defaultProps) {
          var ce = i.defaultProps;
          for (te in ce)
            U[te] === void 0 && (U[te] = ce[te]);
        }
        if (z || ye) {
          var le = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          z && Ye(U, le), ye && Yt(U, le);
        }
        return $r(i, z, ye, X, x, We.current, U);
      }
    }
    var pt = M.ReactCurrentOwner, Ht = M.ReactDebugCurrentFrame;
    function Me(i) {
      if (i) {
        var m = i._owner, v = lt(i.type, i._source, m ? m.type : null);
        Ht.setExtraStackFrame(v);
      } else
        Ht.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function He(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function et() {
      {
        if (pt.current) {
          var i = ge(pt.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Tr(i) {
      {
        if (i !== void 0) {
          var m = i.fileName.replace(/^.*[\\\/]/, ""), v = i.lineNumber;
          return `

Check your code at ` + m + ":" + v + ".";
        }
        return "";
      }
    }
    var Ut = {};
    function Or(i) {
      {
        var m = et();
        if (!m) {
          var v = typeof i == "string" ? i : i.displayName || i.name;
          v && (m = `

Check the top-level render call using <` + v + ">.");
        }
        return m;
      }
    }
    function Gt(i, m) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var v = Or(m);
        if (Ut[v])
          return;
        Ut[v] = !0;
        var x = "";
        i && i._owner && i._owner !== pt.current && (x = " It was passed a child from " + ge(i._owner.type) + "."), Me(i), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, x), Me(null);
      }
    }
    function Vt(i, m) {
      {
        if (typeof i != "object")
          return;
        if (ft(i))
          for (var v = 0; v < i.length; v++) {
            var x = i[v];
            He(x) && Gt(x, m);
          }
        else if (He(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var X = re(i);
          if (typeof X == "function" && X !== i.entries)
            for (var te = X.call(i), U; !(U = te.next()).done; )
              He(U.value) && Gt(U.value, m);
        }
      }
    }
    function tt(i) {
      {
        var m = i.type;
        if (m == null || typeof m == "string")
          return;
        var v;
        if (typeof m == "function")
          v = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === _))
          v = m.propTypes;
        else
          return;
        if (v) {
          var x = ge(m);
          je(v, i.props, "prop", x, i);
        } else if (m.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var X = ge(m);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rt(i) {
      {
        for (var m = Object.keys(i.props), v = 0; v < m.length; v++) {
          var x = m[v];
          if (x !== "children" && x !== "key") {
            Me(i), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Me(null);
            break;
          }
        }
        i.ref !== null && (Me(i), A("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    function Et(i, m, v, x, X, te) {
      {
        var U = ze(i);
        if (!U) {
          var z = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = Tr(X);
          ye ? z += ye : z += et();
          var ce;
          i === null ? ce = "null" : ft(i) ? ce = "array" : i !== void 0 && i.$$typeof === t ? (ce = "<" + (ge(i.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof i, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, z);
        }
        var le = Pr(i, m, v, X, te);
        if (le == null)
          return le;
        if (U) {
          var _e = m.children;
          if (_e !== void 0)
            if (x)
              if (ft(_e)) {
                for (var Ue = 0; Ue < _e.length; Ue++)
                  Vt(_e[Ue], i);
                Object.freeze && Object.freeze(_e);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vt(_e, i);
        }
        return i === o ? Rt(le) : tt(le), le;
      }
    }
    function Ir(i, m, v) {
      return Et(i, m, v, !0);
    }
    function Ar(i, m, v) {
      return Et(i, m, v, !1);
    }
    var jr = Ar, Dr = Ir;
    Pt.Fragment = o, Pt.jsx = jr, Pt.jsxs = Dr;
  }()), Pt;
}
process.env.NODE_ENV === "production" ? Jr.exports = va() : Jr.exports = ya();
var mo = Jr.exports;
const $ = mo.jsx, Re = mo.jsxs;
var Ee = function() {
  return Ee = Object.assign || function(t) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var u in n)
        Object.prototype.hasOwnProperty.call(n, u) && (t[u] = n[u]);
    }
    return t;
  }, Ee.apply(this, arguments);
};
function st(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, s = t.length, u; o < s; o++)
      (u || !(o in t)) && (u || (u = Array.prototype.slice.call(t, 0, o)), u[o] = t[o]);
  return e.concat(u || Array.prototype.slice.call(t));
}
function wa(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ka = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xa = /* @__PURE__ */ wa(
  function(e) {
    return ka.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), oe = "-ms-", It = "-moz-", ee = "-webkit-", go = "comm", gr = "rule", hn = "decl", Sa = "@import", bo = "@keyframes", _a = "@layer", Ra = Math.abs, mn = String.fromCharCode, Qr = Object.assign;
function Ea(e, t) {
  return be(e, 0) ^ 45 ? (((t << 2 ^ be(e, 0)) << 2 ^ be(e, 1)) << 2 ^ be(e, 2)) << 2 ^ be(e, 3) : 0;
}
function vo(e) {
  return e.trim();
}
function Be(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function N(e, t, n) {
  return e.replace(t, n);
}
function ar(e, t) {
  return e.indexOf(t);
}
function be(e, t) {
  return e.charCodeAt(t) | 0;
}
function bt(e, t, n) {
  return e.slice(t, n);
}
function De(e) {
  return e.length;
}
function yo(e) {
  return e.length;
}
function Ot(e, t) {
  return t.push(e), e;
}
function Ca(e, t) {
  return e.map(t).join("");
}
function Jn(e, t) {
  return e.filter(function(n) {
    return !Be(n, t);
  });
}
var br = 1, vt = 1, wo = 0, Oe = 0, pe = 0, xt = "";
function vr(e, t, n, o, s, u, f, p) {
  return { value: e, root: t, parent: n, type: o, props: s, children: u, line: br, column: vt, length: f, return: "", siblings: p };
}
function Ge(e, t) {
  return Qr(vr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function gt(e) {
  for (; e.root; )
    e = Ge(e.root, { children: [e] });
  Ot(e, e.siblings);
}
function $a() {
  return pe;
}
function Pa() {
  return pe = Oe > 0 ? be(xt, --Oe) : 0, vt--, pe === 10 && (vt = 1, br--), pe;
}
function Ae() {
  return pe = Oe < wo ? be(xt, Oe++) : 0, vt++, pe === 10 && (vt = 1, br++), pe;
}
function at() {
  return be(xt, Oe);
}
function ir() {
  return Oe;
}
function yr(e, t) {
  return bt(xt, e, t);
}
function en(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ta(e) {
  return br = vt = 1, wo = De(xt = e), Oe = 0, [];
}
function Oa(e) {
  return xt = "", e;
}
function Hr(e) {
  return vo(yr(Oe - 1, tn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ia(e) {
  for (; (pe = at()) && pe < 33; )
    Ae();
  return en(e) > 2 || en(pe) > 3 ? "" : " ";
}
function Aa(e, t) {
  for (; --t && Ae() && !(pe < 48 || pe > 102 || pe > 57 && pe < 65 || pe > 70 && pe < 97); )
    ;
  return yr(e, ir() + (t < 6 && at() == 32 && Ae() == 32));
}
function tn(e) {
  for (; Ae(); )
    switch (pe) {
      case e:
        return Oe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && tn(pe);
        break;
      case 40:
        e === 41 && tn(e);
        break;
      case 92:
        Ae();
        break;
    }
  return Oe;
}
function ja(e, t) {
  for (; Ae() && e + pe !== 47 + 10; )
    if (e + pe === 42 + 42 && at() === 47)
      break;
  return "/*" + yr(t, Oe - 1) + "*" + mn(e === 47 ? e : Ae());
}
function Da(e) {
  for (; !en(at()); )
    Ae();
  return yr(e, Oe);
}
function Fa(e) {
  return Oa(sr("", null, null, null, [""], e = Ta(e), 0, [0], e));
}
function sr(e, t, n, o, s, u, f, p, h) {
  for (var y = 0, k = 0, _ = f, E = 0, O = 0, L = 0, Z = 1, re = 1, M = 1, A = 0, q = "", Y = s, D = u, P = o, C = q; re; )
    switch (L = A, A = Ae()) {
      case 40:
        if (L != 108 && be(C, _ - 1) == 58) {
          ar(C += N(Hr(A), "&", "&\f"), "&\f") != -1 && (M = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Hr(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Ia(L);
        break;
      case 92:
        C += Aa(ir() - 1, 7);
        continue;
      case 47:
        switch (at()) {
          case 42:
          case 47:
            Ot(Na(ja(Ae(), ir()), t, n, h), h);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * Z:
        p[y++] = De(C) * M;
      case 125 * Z:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            re = 0;
          case 59 + k:
            M == -1 && (C = N(C, /\f/g, "")), O > 0 && De(C) - _ && Ot(O > 32 ? Qn(C + ";", o, n, _ - 1, h) : Qn(N(C, " ", "") + ";", o, n, _ - 2, h), h);
            break;
          case 59:
            C += ";";
          default:
            if (Ot(P = Zn(C, t, n, y, k, s, p, q, Y = [], D = [], _, u), u), A === 123)
              if (k === 0)
                sr(C, t, P, P, Y, u, _, p, D);
              else
                switch (E === 99 && be(C, 3) === 110 ? 100 : E) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sr(e, P, P, o && Ot(Zn(e, P, P, 0, 0, s, p, q, s, Y = [], _, D), D), s, D, _, p, o ? Y : D);
                    break;
                  default:
                    sr(C, P, P, P, [""], D, 0, p, D);
                }
        }
        y = k = O = 0, Z = M = 1, q = C = "", _ = f;
        break;
      case 58:
        _ = 1 + De(C), O = L;
      default:
        if (Z < 1) {
          if (A == 123)
            --Z;
          else if (A == 125 && Z++ == 0 && Pa() == 125)
            continue;
        }
        switch (C += mn(A), A * Z) {
          case 38:
            M = k > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            p[y++] = (De(C) - 1) * M, M = 1;
            break;
          case 64:
            at() === 45 && (C += Hr(Ae())), E = at(), k = _ = De(q = C += Da(ir())), A++;
            break;
          case 45:
            L === 45 && De(C) == 2 && (Z = 0);
        }
    }
  return u;
}
function Zn(e, t, n, o, s, u, f, p, h, y, k, _) {
  for (var E = s - 1, O = s === 0 ? u : [""], L = yo(O), Z = 0, re = 0, M = 0; Z < o; ++Z)
    for (var A = 0, q = bt(e, E + 1, E = Ra(re = f[Z])), Y = e; A < L; ++A)
      (Y = vo(re > 0 ? O[A] + " " + q : N(q, /&\f/g, O[A]))) && (h[M++] = Y);
  return vr(e, t, n, s === 0 ? gr : p, h, y, k, _);
}
function Na(e, t, n, o) {
  return vr(e, t, n, go, mn($a()), bt(e, 2, -2), 0, o);
}
function Qn(e, t, n, o, s) {
  return vr(e, t, n, hn, bt(e, 0, o), bt(e, o + 1, -1), o, s);
}
function ko(e, t, n) {
  switch (Ea(e, t)) {
    case 5103:
      return ee + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ee + e + e;
    case 4789:
      return It + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + It + e + oe + e + e;
    case 5936:
      switch (be(e, t + 11)) {
        case 114:
          return ee + e + oe + N(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + oe + N(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + oe + N(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ee + e + oe + e + e;
    case 6165:
      return ee + e + oe + "flex-" + e + e;
    case 5187:
      return ee + e + N(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + oe + "flex-$1$2") + e;
    case 5443:
      return ee + e + oe + "flex-item-" + N(e, /flex-|-self/g, "") + (Be(e, /flex-|baseline/) ? "" : oe + "grid-row-" + N(e, /flex-|-self/g, "")) + e;
    case 4675:
      return ee + e + oe + "flex-line-pack" + N(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return ee + e + oe + N(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + oe + N(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + N(e, "-grow", "") + ee + e + oe + N(e, "grow", "positive") + e;
    case 4554:
      return ee + N(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
      return N(N(N(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return N(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return N(N(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    case 4200:
      if (!Be(e, /flex-|baseline/))
        return oe + "grid-column-align" + bt(e, t) + e;
      break;
    case 2592:
    case 3360:
      return oe + N(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(o, s) {
        return t = s, Be(o.props, /grid-\w+-end/);
      }) ? ~ar(e + (n = n[t].value), "span") ? e : oe + N(e, "-start", "") + e + oe + "grid-row-span:" + (~ar(n, "span") ? Be(n, /\d+/) : +Be(n, /\d+/) - +Be(e, /\d+/)) + ";" : oe + N(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(o) {
        return Be(o.props, /grid-\w+-start/);
      }) ? e : oe + N(N(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return N(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (De(e) - 1 - t > 6)
        switch (be(e, t + 1)) {
          case 109:
            if (be(e, t + 4) !== 45)
              break;
          case 102:
            return N(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + It + (be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ar(e, "stretch") ? ko(N(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return N(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, s, u, f, p, h, y) {
        return oe + s + ":" + u + y + (f ? oe + s + "-span:" + (p ? h : +h - +u) + y : "") + e;
      });
    case 4949:
      if (be(e, t + 6) === 121)
        return N(e, ":", ":" + ee) + e;
      break;
    case 6444:
      switch (be(e, be(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return N(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + oe + "$2box$3") + e;
        case 100:
          return N(e, ":", ":" + oe) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return N(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function dr(e, t) {
  for (var n = "", o = 0; o < e.length; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function za(e, t, n, o) {
  switch (e.type) {
    case _a:
      if (e.children.length)
        break;
    case Sa:
    case hn:
      return e.return = e.return || e.value;
    case go:
      return "";
    case bo:
      return e.return = e.value + "{" + dr(e.children, o) + "}";
    case gr:
      if (!De(e.value = e.props.join(",")))
        return "";
  }
  return De(n = dr(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function La(e) {
  var t = yo(e);
  return function(n, o, s, u) {
    for (var f = "", p = 0; p < t; p++)
      f += e[p](n, o, s, u) || "";
    return f;
  };
}
function Ma(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ba(e, t, n, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case hn:
        e.return = ko(e.value, e.length, n);
        return;
      case bo:
        return dr([Ge(e, { value: N(e.value, "@", "@" + ee) })], o);
      case gr:
        if (e.length)
          return Ca(n = e.props, function(s) {
            switch (Be(s, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                gt(Ge(e, { props: [N(s, /:(read-\w+)/, ":" + It + "$1")] })), gt(Ge(e, { props: [s] })), Qr(e, { props: Jn(n, o) });
                break;
              case "::placeholder":
                gt(Ge(e, { props: [N(s, /:(plac\w+)/, ":" + ee + "input-$1")] })), gt(Ge(e, { props: [N(s, /:(plac\w+)/, ":" + It + "$1")] })), gt(Ge(e, { props: [N(s, /:(plac\w+)/, oe + "input-$1")] })), gt(Ge(e, { props: [s] })), Qr(e, { props: Jn(n, o) });
                break;
            }
            return "";
          });
    }
}
var Wa = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ct = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", gn = typeof window < "u" && "HTMLElement" in window, Ya = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), eo = /invalid hook call/i, rr = /* @__PURE__ */ new Set(), Ha = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, s = console.error;
    try {
      var u = !0;
      console.error = function(f) {
        for (var p = [], h = 1; h < arguments.length; h++)
          p[h - 1] = arguments[h];
        eo.test(f) ? (u = !1, rr.delete(o)) : s.apply(void 0, st([f], p, !1));
      }, Ne.useRef(), u && !rr.has(o) && (console.warn(o), rr.add(o));
    } catch (f) {
      eo.test(f.message) && rr.delete(o);
    } finally {
      console.error = s;
    }
  }
}, wr = Object.freeze([]), yt = Object.freeze({});
function Ua(e, t, n) {
  return n === void 0 && (n = yt), e.theme !== n.theme && e.theme || t || n.theme;
}
var rn = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ga = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Va = /(^-|-$)/g;
function to(e) {
  return e.replace(Ga, "-").replace(Va, "");
}
var qa = /(a)(d)/gi, ro = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function nn(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = ro(t % 52) + n;
  return (ro(t % 52) + n).replace(qa, "$1-$2");
}
var Ur, nt = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, xo = function(e) {
  return nt(5381, e);
};
function So(e) {
  return nn(xo(e) >>> 0);
}
function _o(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Gr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ro = typeof Symbol == "function" && Symbol.for, Eo = Ro ? Symbol.for("react.memo") : 60115, Ka = Ro ? Symbol.for("react.forward_ref") : 60112, Xa = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ja = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Co = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Za = ((Ur = {})[Ka] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ur[Eo] = Co, Ur);
function no(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Eo ? Co : "$$typeof" in e ? Za[e.$$typeof] : Xa;
  var t;
}
var Qa = Object.defineProperty, ei = Object.getOwnPropertyNames, oo = Object.getOwnPropertySymbols, ti = Object.getOwnPropertyDescriptor, ri = Object.getPrototypeOf, ao = Object.prototype;
function $o(e, t, n) {
  if (typeof t != "string") {
    if (ao) {
      var o = ri(t);
      o && o !== ao && $o(e, o, n);
    }
    var s = ei(t);
    oo && (s = s.concat(oo(t)));
    for (var u = no(e), f = no(t), p = 0; p < s.length; ++p) {
      var h = s[p];
      if (!(h in Ja || n && n[h] || f && h in f || u && h in u)) {
        var y = ti(t, h);
        try {
          Qa(e, h, y);
        } catch {
        }
      }
    }
  }
  return e;
}
function wt(e) {
  return typeof e == "function";
}
function bn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ot(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function on(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], o = 1; o < e.length; o++)
    n += t ? t + e[o] : e[o];
  return n;
}
function kt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function an(e, t, n) {
  if (n === void 0 && (n = !1), !n && !kt(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = an(e[o], t[o]);
  else if (kt(t))
    for (var o in t)
      e[o] = an(e[o], t[o]);
  return e;
}
function vn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ni = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function oi() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], o = [], s = 1, u = e.length; s < u; s += 1)
    o.push(e[s]);
  return o.forEach(function(f) {
    n = n.replace(/%[a-z]/, f);
  }), n;
}
function St(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(oi.apply(void 0, st([ni[e]], t, !1)).trim());
}
var ai = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, u = s; t >= u; )
        if ((u <<= 1) < 0)
          throw St(16, "".concat(t));
      this.groupSizes = new Uint32Array(u), this.groupSizes.set(o), this.length = u;
      for (var f = s; f < u; f++)
        this.groupSizes[f] = 0;
    }
    for (var p = this.indexOfGroup(t + 1), h = (f = 0, n.length); f < h; f++)
      this.tag.insertRule(p, n[f]) && (this.groupSizes[t]++, p++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var u = o; u < s; u++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), u = s + o, f = s; f < u; f++)
      n += "".concat(this.tag.getRule(f)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), cr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), ur = 1, nr = function(e) {
  if (cr.has(e))
    return cr.get(e);
  for (; pr.has(ur); )
    ur++;
  var t = ur++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw St(16, "".concat(t));
  return cr.set(e, t), pr.set(t, e), t;
}, ii = function(e, t) {
  ur = t + 1, cr.set(e, t), pr.set(t, e);
}, si = "style[".concat(ct, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), ci = new RegExp("^".concat(ct, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ui = function(e, t, n) {
  for (var o, s = n.split(","), u = 0, f = s.length; u < f; u++)
    (o = s[u]) && e.registerName(t, o);
}, li = function(e, t) {
  for (var n, o = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), s = [], u = 0, f = o.length; u < f; u++) {
    var p = o[u].trim();
    if (p) {
      var h = p.match(ci);
      if (h) {
        var y = 0 | parseInt(h[1], 10), k = h[2];
        y !== 0 && (ii(k, y), ui(e, k, h[3]), e.getTag().insertRules(y, s)), s.length = 0;
      } else
        s.push(p);
    }
  }
};
function fi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Po = function(e) {
  var t = document.head, n = e || t, o = document.createElement("style"), s = function(p) {
    var h = Array.from(p.querySelectorAll("style[".concat(ct, "]")));
    return h[h.length - 1];
  }(n), u = s !== void 0 ? s.nextSibling : null;
  o.setAttribute(ct, "active"), o.setAttribute("data-styled-version", "6.1.1");
  var f = fi();
  return f && o.setAttribute("nonce", f), n.insertBefore(o, u), o;
}, di = function() {
  function e(t) {
    this.element = Po(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var o = document.styleSheets, s = 0, u = o.length; s < u; s++) {
        var f = o[s];
        if (f.ownerNode === n)
          return f;
      }
      throw St(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), pi = function() {
  function e(t) {
    this.element = Po(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), hi = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), io = gn, mi = { isServer: !gn, useCSSOMInjection: !Ya }, To = function() {
  function e(t, n, o) {
    t === void 0 && (t = yt), n === void 0 && (n = {});
    var s = this;
    this.options = Ee(Ee({}, mi), t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && gn && io && (io = !1, function(u) {
      for (var f = document.querySelectorAll(si), p = 0, h = f.length; p < h; p++) {
        var y = f[p];
        y && y.getAttribute(ct) !== "active" && (li(u, y), y.parentNode && y.parentNode.removeChild(y));
      }
    }(this)), vn(this, function() {
      return function(u) {
        for (var f = u.getTag(), p = f.length, h = "", y = function(_) {
          var E = function(M) {
            return pr.get(M);
          }(_);
          if (E === void 0)
            return "continue";
          var O = u.names.get(E), L = f.getGroup(_);
          if (O === void 0 || L.length === 0)
            return "continue";
          var Z = "".concat(ct, ".g").concat(_, '[id="').concat(E, '"]'), re = "";
          O !== void 0 && O.forEach(function(M) {
            M.length > 0 && (re += "".concat(M, ","));
          }), h += "".concat(L).concat(Z, '{content:"').concat(re, '"}').concat(`/*!sc*/
`);
        }, k = 0; k < p; k++)
          y(k);
        return h;
      }(s);
    });
  }
  return e.registerId = function(t) {
    return nr(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ee(Ee({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var o = n.useCSSOMInjection, s = n.target;
      return n.isServer ? new hi(s) : o ? new di(s) : new pi(s);
    }(this.options), new ai(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (nr(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(nr(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(nr(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), gi = /&/g, bi = /^\s*\/\/.*$/gm;
function Oo(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Oo(n.children, t)), n;
  });
}
function vi(e) {
  var t, n, o, s = e === void 0 ? yt : e, u = s.options, f = u === void 0 ? yt : u, p = s.plugins, h = p === void 0 ? wr : p, y = function(E, O, L) {
    return L === n || L.startsWith(n) && L.endsWith(n) && L.replaceAll(n, "").length > 0 ? ".".concat(t) : E;
  }, k = h.slice();
  k.push(function(E) {
    E.type === gr && E.value.includes("&") && (E.props[0] = E.props[0].replace(gi, n).replace(o, y));
  }), f.prefix && k.push(Ba), k.push(za);
  var _ = function(E, O, L, Z) {
    O === void 0 && (O = ""), L === void 0 && (L = ""), Z === void 0 && (Z = "&"), t = Z, n = O, o = new RegExp("\\".concat(n, "\\b"), "g");
    var re = E.replace(bi, ""), M = Fa(L || O ? "".concat(L, " ").concat(O, " { ").concat(re, " }") : re);
    f.namespace && (M = Oo(M, f.namespace));
    var A = [];
    return dr(M, La(k.concat(Ma(function(q) {
      return A.push(q);
    })))), A;
  };
  return _.hash = h.length ? h.reduce(function(E, O) {
    return O.name || St(15), nt(E, O.name);
  }, 5381).toString() : "", _;
}
var yi = new To(), sn = vi(), Io = At.createContext({ shouldForwardProp: void 0, styleSheet: yi, stylis: sn });
Io.Consumer;
At.createContext(void 0);
function so() {
  return Ne.useContext(Io);
}
var cn = function() {
  function e(t, n) {
    var o = this;
    this.inject = function(s, u) {
      u === void 0 && (u = sn);
      var f = o.name + u.hash;
      s.hasNameForId(o.id, f) || s.insertRules(o.id, f, u(o.rules, f, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, vn(this, function() {
      throw St(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = sn), this.name + t.hash;
  }, e;
}(), wi = function(e) {
  return e >= "A" && e <= "Z";
};
function co(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var o = e[n];
    if (n === 1 && o === "-" && e[0] === "-")
      return e;
    wi(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ao = function(e) {
  return e == null || e === !1 || e === "";
}, jo = function(e) {
  var t, n, o = [];
  for (var s in e) {
    var u = e[s];
    e.hasOwnProperty(s) && !Ao(u) && (Array.isArray(u) && u.isCss || wt(u) ? o.push("".concat(co(s), ":"), u, ";") : kt(u) ? o.push.apply(o, st(st(["".concat(s, " {")], jo(u), !1), ["}"], !1)) : o.push("".concat(co(s), ": ").concat((t = s, (n = u) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Wa || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return o;
};
function it(e, t, n, o) {
  if (Ao(e))
    return [];
  if (bn(e))
    return [".".concat(e.styledComponentId)];
  if (wt(e)) {
    if (!wt(u = e) || u.prototype && u.prototype.isReactComponent || !t)
      return [e];
    var s = e(t);
    return process.env.NODE_ENV === "production" || typeof s != "object" || Array.isArray(s) || s instanceof cn || kt(s) || s === null || console.error("".concat(_o(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), it(s, t, n, o);
  }
  var u;
  return e instanceof cn ? n ? (e.inject(n, o), [e.getName(o)]) : [e] : kt(e) ? jo(e) : Array.isArray(e) ? Array.prototype.concat.apply(wr, e.map(function(f) {
    return it(f, t, n, o);
  })) : [e.toString()];
}
function ki(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (wt(n) && !bn(n))
      return !1;
  }
  return !0;
}
var xi = xo("6.1.1"), Si = function() {
  function e(t, n, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && ki(t), this.componentId = n, this.baseHash = nt(xi, n), this.baseStyle = o, To.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, o) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        s = ot(s, this.staticRulesId);
      else {
        var u = on(it(this.rules, t, n, o)), f = nn(nt(this.baseHash, u) >>> 0);
        if (!n.hasNameForId(this.componentId, f)) {
          var p = o(u, ".".concat(f), void 0, this.componentId);
          n.insertRules(this.componentId, f, p);
        }
        s = ot(s, f), this.staticRulesId = f;
      }
    else {
      for (var h = nt(this.baseHash, o.hash), y = "", k = 0; k < this.rules.length; k++) {
        var _ = this.rules[k];
        if (typeof _ == "string")
          y += _, process.env.NODE_ENV !== "production" && (h = nt(h, _));
        else if (_) {
          var E = on(it(_, t, n, o));
          h = nt(h, E + k), y += E;
        }
      }
      if (y) {
        var O = nn(h >>> 0);
        n.hasNameForId(this.componentId, O) || n.insertRules(this.componentId, O, o(y, ".".concat(O), void 0, this.componentId)), s = ot(s, O);
      }
    }
    return s;
  }, e;
}(), Do = At.createContext(void 0);
Do.Consumer;
var Vr = {}, uo = /* @__PURE__ */ new Set();
function _i(e, t, n) {
  var o = bn(e), s = e, u = !Gr(e), f = t.attrs, p = f === void 0 ? wr : f, h = t.componentId, y = h === void 0 ? function(Y, D) {
    var P = typeof Y != "string" ? "sc" : to(Y);
    Vr[P] = (Vr[P] || 0) + 1;
    var C = "".concat(P, "-").concat(So("6.1.1" + P + Vr[P]));
    return D ? "".concat(D, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : h, k = t.displayName, _ = k === void 0 ? function(Y) {
    return Gr(Y) ? "styled.".concat(Y) : "Styled(".concat(_o(Y), ")");
  }(e) : k, E = t.displayName && t.componentId ? "".concat(to(t.displayName), "-").concat(t.componentId) : t.componentId || y, O = o && s.attrs ? s.attrs.concat(p).filter(Boolean) : p, L = t.shouldForwardProp;
  if (o && s.shouldForwardProp) {
    var Z = s.shouldForwardProp;
    if (t.shouldForwardProp) {
      var re = t.shouldForwardProp;
      L = function(Y, D) {
        return Z(Y, D) && re(Y, D);
      };
    } else
      L = Z;
  }
  var M = new Si(n, E, o ? s.componentStyle : void 0);
  function A(Y, D) {
    return function(P, C, ve) {
      var Se = P.attrs, ze = P.componentStyle, Ve = P.defaultProps, Le = P.foldedComponentIds, ge = P.styledComponentId, ke = P.target, he = At.useContext(Do), Ce = so(), R = P.shouldForwardProp || Ce.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ne.useDebugValue(ge);
      var me = function(F, J, Q) {
        for (var V, B = Ee(Ee({}, J), { className: void 0, theme: Q }), se = 0; se < F.length; se += 1) {
          var Pe = wt(V = F[se]) ? V(B) : V;
          for (var Te in Pe)
            B[Te] = Te === "className" ? ot(B[Te], Pe[Te]) : Te === "style" ? Ee(Ee({}, B[Te]), Pe[Te]) : Pe[Te];
        }
        return J.className && (B.className = ot(B.className, J.className)), B;
      }(Se, C, Ua(C, he, Ve) || yt), $e = me.as || ke, c = {};
      for (var g in me)
        me[g] === void 0 || g[0] === "$" || g === "as" || g === "theme" || (g === "forwardedAs" ? c.as = me.forwardedAs : R && !R(g, $e) || (c[g] = me[g], R || process.env.NODE_ENV !== "development" || xa(g) || uo.has(g) || !rn.has($e) || (uo.add(g), console.warn('styled-components: it looks like an unknown prop "'.concat(g, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var I = function(F, J) {
        var Q = so(), V = F.generateAndInjectStyles(J, Q.styleSheet, Q.stylis);
        return process.env.NODE_ENV !== "production" && Ne.useDebugValue(V), V;
      }(ze, me);
      process.env.NODE_ENV !== "production" && P.warnTooManyClasses && P.warnTooManyClasses(I);
      var H = ot(Le, ge);
      return I && (H += " " + I), me.className && (H += " " + me.className), c[Gr($e) && !rn.has($e) ? "class" : "className"] = H, c.ref = ve, Ne.createElement($e, c);
    }(q, Y, D);
  }
  A.displayName = _;
  var q = At.forwardRef(A);
  return q.attrs = O, q.componentStyle = M, q.displayName = _, q.shouldForwardProp = L, q.foldedComponentIds = o ? ot(s.foldedComponentIds, s.styledComponentId) : "", q.styledComponentId = E, q.target = o ? s.target : e, Object.defineProperty(q, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Y) {
    this._foldedDefaultProps = o ? function(D) {
      for (var P = [], C = 1; C < arguments.length; C++)
        P[C - 1] = arguments[C];
      for (var ve = 0, Se = P; ve < Se.length; ve++)
        an(D, Se[ve], !0);
      return D;
    }({}, s.defaultProps, Y) : Y;
  } }), process.env.NODE_ENV !== "production" && (Ha(_, E), q.warnTooManyClasses = function(Y, D) {
    var P = {}, C = !1;
    return function(ve) {
      if (!C && (P[ve] = !0, Object.keys(P).length >= 200)) {
        var Se = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(Y).concat(Se, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, P = {};
      }
    };
  }(_, E)), vn(q, function() {
    return ".".concat(q.styledComponentId);
  }), u && $o(q, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), q;
}
function lo(e, t) {
  for (var n = [e[0]], o = 0, s = t.length; o < s; o += 1)
    n.push(t[o], e[o + 1]);
  return n;
}
var fo = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function xe(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (wt(e) || kt(e)) {
    var o = e;
    return fo(it(lo(wr, st([o], t, !0))));
  }
  var s = e;
  return t.length === 0 && s.length === 1 && typeof s[0] == "string" ? it(s) : fo(it(lo(s, t)));
}
function un(e, t, n) {
  if (n === void 0 && (n = yt), !t)
    throw St(1, t);
  var o = function(s) {
    for (var u = [], f = 1; f < arguments.length; f++)
      u[f - 1] = arguments[f];
    return e(t, n, xe.apply(void 0, st([s], u, !1)));
  };
  return o.attrs = function(s) {
    return un(e, t, Ee(Ee({}, n), { attrs: Array.prototype.concat(n.attrs, s).filter(Boolean) }));
  }, o.withConfig = function(s) {
    return un(e, t, Ee(Ee({}, n), s));
  }, o;
}
var Fo = function(e) {
  return un(_i, e);
}, w = Fo;
rn.forEach(function(e) {
  w[e] = Fo(e);
});
function Ri(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var o = on(xe.apply(void 0, st([e], t, !1))), s = So(o);
  return new cn(s, o);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var or = "__sc-".concat(ct, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[or] || (window[or] = 0), window[or] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[or] += 1);
const Ei = w.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme: e }) => e.background.background};
    z-index: 1;
`, Ci = Ri`
    0% { opacity: 0; }
    33% { opacity: 0; }
    99%   { opacity: 0.5; }
`, $i = w.div`
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
`, lc = ({ src: e = null }) => /* @__PURE__ */ $(Ei, { className: "background", children: /* @__PURE__ */ $($i, { className: "background__inner", src: e }) }), Pi = xe`
    background: ${({ theme: e }) => e.button.background};
    border: ${({ theme: e }) => e.button.border};
    color: ${({ theme: e }) => e.button.color};

    &:disabled, &:disabled:hover, &:disabled:active  {
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
`, Ti = xe`
    background: ${({ theme: e, icon: t }) => t === !0 ? e.main.background : e.button.color};
    border: ${({ theme: e }) => e.button.background};
    color: ${({ theme: e }) => e.button.background};

    &:disabled, &:disabled:hover, &:disabled:active  {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({ theme: e, icon: t }) => t === !0 ? e.main.background : e.button.color};
        border: ${({ theme: e }) => e.button.hover.background};
        color: ${({ theme: e }) => e.button.hover.background};
    }
    &:active {
        background: ${({ theme: e, icon: t }) => t === !0 ? e.main.background : e.button.color};
        border: ${({ theme: e }) => e.button.active.background};
        color: ${({ theme: e }) => e.button.active.background};
        
        &:hover {
            background: ${({ theme: e, icon: t }) => t === !0 ? e.main.background : e.button.color};
            border: ${({ theme: e }) => e.button.active.hover.background};
            color: ${({ theme: e }) => e.button.active.hover.background};
        }
    }
`, Oi = xe`
    background: ${({ theme: e }) => e.button.color};
    border: ${({ theme: e }) => e.button.border};
    color: ${({ theme: e }) => e.button.background};

    &:disabled, &:disabled:hover, &:disabled:active  {
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
`, yn = xe`
    text-decoration: none;
    position: relative;
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
    display: ${({ display: e }) => e || "block"};
    font-family: ${({ theme: e }) => e.main.font};
    height: 3rem;
    padding: ${({ icon: e }) => e === !0 ? "0.6rem" : "0.667rem 1.333rem"};
    font-size: ${({ icon: e }) => e === !0 ? "1.333rem" : "1rem"};
    border-radius: ${({ rounded: e, theme: t }) => e === !0 ? "10rem" : t.main.borderRadius};
    cursor: pointer;
    box-shadow: none;

    ${({ action: e, outline: t }) => e === !0 ? Ti : t === !0 ? Oi : Pi};

    /* if a button is followed by a button add left margin to the trailing button */
    &+button, &+a {
        margin-left: 0.4rem;
    }

    svg {
        fill: currentColor;
        height: 1.1rem;
        width: 1em;
    }
`, Ii = w.button`
    ${yn}
`, No = w.a`
    ${yn}
`;
w.input`
    ${yn}
`;
const Ai = (e) => {
  const { children: t, to: n } = e;
  return /* @__PURE__ */ $(No, { href: n, ...e, children: t });
}, ji = (e) => {
  const { children: t, href: n } = e;
  return /* @__PURE__ */ $(No, { href: n, ...e, children: t });
};
w.div`
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
const lr = (e) => {
  const {
    children: t,
    loading: n = !1,
    theme: o = null,
    to: s = !1,
    href: u = !1
  } = e;
  let f = t;
  const p = {
    ...e,
    icon: !1
  };
  return typeof f != "string" && (p.icon = !0), o !== null && typeof o == "object" && (p.themeOveride = o), s !== !1 ? /* @__PURE__ */ $(Ai, { ...p, children: f }) : u !== !1 ? /* @__PURE__ */ $(ji, { ...p, children: f }) : /* @__PURE__ */ $(Ii, { ...p, children: f });
};
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, jt.apply(this, arguments);
}
function Di(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dt(e, t) {
  return Dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
    return o.__proto__ = s, o;
  }, Dt(e, t);
}
function Fi(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Dt(e, t);
}
function ln(e) {
  return ln = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ln(e);
}
function Ni(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function zi() {
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
function fr(e, t, n) {
  return zi() ? fr = Reflect.construct.bind() : fr = function(s, u, f) {
    var p = [null];
    p.push.apply(p, u);
    var h = Function.bind.apply(s, p), y = new h();
    return f && Dt(y, f.prototype), y;
  }, fr.apply(null, arguments);
}
function fn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return fn = function(o) {
    if (o === null || !Ni(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o))
        return t.get(o);
      t.set(o, s);
    }
    function s() {
      return fr(o, arguments, ln(this).constructor);
    }
    return s.prototype = Object.create(o.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Dt(s, o);
  }, fn(e);
}
var Li = {
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
function Mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o = t[0], s = [], u;
  for (u = 1; u < t.length; u += 1)
    s.push(t[u]);
  return s.forEach(function(f) {
    o = o.replace(/%[a-z]/, f);
  }), o;
}
var Fe = /* @__PURE__ */ function(e) {
  Fi(t, e);
  function t(n) {
    var o;
    if (process.env.NODE_ENV === "production")
      o = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this;
    else {
      for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++)
        u[f - 1] = arguments[f];
      o = e.call(this, Mi.apply(void 0, [Li[n]].concat(u))) || this;
    }
    return Di(o);
  }
  return t;
}(/* @__PURE__ */ fn(Error));
function qr(e) {
  return Math.round(e * 255);
}
function Bi(e, t, n) {
  return qr(e) + "," + qr(t) + "," + qr(n);
}
function Ft(e, t, n, o) {
  if (o === void 0 && (o = Bi), t === 0)
    return o(n, n, n);
  var s = (e % 360 + 360) % 360 / 60, u = (1 - Math.abs(2 * n - 1)) * t, f = u * (1 - Math.abs(s % 2 - 1)), p = 0, h = 0, y = 0;
  s >= 0 && s < 1 ? (p = u, h = f) : s >= 1 && s < 2 ? (p = f, h = u) : s >= 2 && s < 3 ? (h = u, y = f) : s >= 3 && s < 4 ? (h = f, y = u) : s >= 4 && s < 5 ? (p = f, y = u) : s >= 5 && s < 6 && (p = u, y = f);
  var k = n - u / 2, _ = p + k, E = h + k, O = y + k;
  return o(_, E, O);
}
var po = {
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
function Wi(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return po[t] ? "#" + po[t] : e;
}
var Yi = /^#[a-fA-F0-9]{6}$/, Hi = /^#[a-fA-F0-9]{8}$/, Ui = /^#[a-fA-F0-9]{3}$/, Gi = /^#[a-fA-F0-9]{4}$/, Kr = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Vi = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, qi = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Ki = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function wn(e) {
  if (typeof e != "string")
    throw new Fe(3);
  var t = Wi(e);
  if (t.match(Yi))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Hi)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(Ui))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(Gi)) {
    var o = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: o
    };
  }
  var s = Kr.exec(t);
  if (s)
    return {
      red: parseInt("" + s[1], 10),
      green: parseInt("" + s[2], 10),
      blue: parseInt("" + s[3], 10)
    };
  var u = Vi.exec(t.substring(0, 50));
  if (u)
    return {
      red: parseInt("" + u[1], 10),
      green: parseInt("" + u[2], 10),
      blue: parseInt("" + u[3], 10),
      alpha: parseFloat("" + u[4]) > 1 ? parseFloat("" + u[4]) / 100 : parseFloat("" + u[4])
    };
  var f = qi.exec(t);
  if (f) {
    var p = parseInt("" + f[1], 10), h = parseInt("" + f[2], 10) / 100, y = parseInt("" + f[3], 10) / 100, k = "rgb(" + Ft(p, h, y) + ")", _ = Kr.exec(k);
    if (!_)
      throw new Fe(4, t, k);
    return {
      red: parseInt("" + _[1], 10),
      green: parseInt("" + _[2], 10),
      blue: parseInt("" + _[3], 10)
    };
  }
  var E = Ki.exec(t.substring(0, 50));
  if (E) {
    var O = parseInt("" + E[1], 10), L = parseInt("" + E[2], 10) / 100, Z = parseInt("" + E[3], 10) / 100, re = "rgb(" + Ft(O, L, Z) + ")", M = Kr.exec(re);
    if (!M)
      throw new Fe(4, t, re);
    return {
      red: parseInt("" + M[1], 10),
      green: parseInt("" + M[2], 10),
      blue: parseInt("" + M[3], 10),
      alpha: parseFloat("" + E[4]) > 1 ? parseFloat("" + E[4]) / 100 : parseFloat("" + E[4])
    };
  }
  throw new Fe(5);
}
function Xi(e) {
  var t = e.red / 255, n = e.green / 255, o = e.blue / 255, s = Math.max(t, n, o), u = Math.min(t, n, o), f = (s + u) / 2;
  if (s === u)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: f,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: f
    };
  var p, h = s - u, y = f > 0.5 ? h / (2 - s - u) : h / (s + u);
  switch (s) {
    case t:
      p = (n - o) / h + (n < o ? 6 : 0);
      break;
    case n:
      p = (o - t) / h + 2;
      break;
    default:
      p = (t - n) / h + 4;
      break;
  }
  return p *= 60, e.alpha !== void 0 ? {
    hue: p,
    saturation: y,
    lightness: f,
    alpha: e.alpha
  } : {
    hue: p,
    saturation: y,
    lightness: f
  };
}
function zo(e) {
  return Xi(wn(e));
}
var Ji = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, dn = Ji;
function rt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Xr(e) {
  return rt(Math.round(e * 255));
}
function Zi(e, t, n) {
  return dn("#" + Xr(e) + Xr(t) + Xr(n));
}
function hr(e, t, n) {
  return Ft(e, t, n, Zi);
}
function Qi(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return hr(e, t, n);
  if (typeof e == "object" && t === void 0 && n === void 0)
    return hr(e.hue, e.saturation, e.lightness);
  throw new Fe(1);
}
function es(e, t, n, o) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof o == "number")
    return o >= 1 ? hr(e, t, n) : "rgba(" + Ft(e, t, n) + "," + o + ")";
  if (typeof e == "object" && t === void 0 && n === void 0 && o === void 0)
    return e.alpha >= 1 ? hr(e.hue, e.saturation, e.lightness) : "rgba(" + Ft(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Fe(2);
}
function pn(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return dn("#" + rt(e) + rt(t) + rt(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return dn("#" + rt(e.red) + rt(e.green) + rt(e.blue));
  throw new Fe(6);
}
function Lo(e, t, n, o) {
  if (typeof e == "string" && typeof t == "number") {
    var s = wn(e);
    return "rgba(" + s.red + "," + s.green + "," + s.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof o == "number")
      return o >= 1 ? pn(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + o + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && o === void 0)
      return e.alpha >= 1 ? pn(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Fe(7);
}
var ts = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, rs = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, ns = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, os = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
};
function Mo(e) {
  if (typeof e != "object")
    throw new Fe(8);
  if (rs(e))
    return Lo(e);
  if (ts(e))
    return pn(e);
  if (os(e))
    return es(e);
  if (ns(e))
    return Qi(e);
  throw new Fe(8);
}
function Bo(e, t, n) {
  return function() {
    var s = n.concat(Array.prototype.slice.call(arguments));
    return s.length >= t ? e.apply(this, s) : Bo(e, t, s);
  };
}
function kn(e) {
  return Bo(e, e.length, []);
}
function xn(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function as(e, t) {
  if (t === "transparent")
    return t;
  var n = zo(t);
  return Mo(jt({}, n, {
    lightness: xn(0, 1, n.lightness - parseFloat(e))
  }));
}
var is = /* @__PURE__ */ kn(as), ss = is;
function cs(e, t) {
  if (t === "transparent")
    return t;
  var n = zo(t);
  return Mo(jt({}, n, {
    lightness: xn(0, 1, n.lightness + parseFloat(e))
  }));
}
var us = /* @__PURE__ */ kn(cs), ls = us;
function fs(e, t) {
  if (t === "transparent")
    return t;
  var n = wn(t), o = typeof n.alpha == "number" ? n.alpha : 1, s = jt({}, n, {
    alpha: xn(0, 1, +(o * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return Lo(s);
}
var ds = /* @__PURE__ */ kn(fs), ho = ds;
const G = {
  simplyRed: "#e83948",
  orangeCrush: "#f7823b",
  yellowSubmarine: "#f9bd45",
  fadeToGrey: "#b7c9db",
  mrBlueSky: "#b3d5e1",
  paintItBlack: "#1C2229",
  blueMonday: "#30a4c5",
  greenDay: "#7cc530",
  purpleRain: "#6033b9"
}, de = {
  lightGrey: "#eef0f4",
  lightBlueGrey: "#787e89",
  midGrey: "#e7e7e7",
  blueGrey: "#6a707d",
  darkGrey: "#696f7c",
  white: "#ffffff",
  green: "#7ec17e",
  sliverColor: "rgb(199,55,71)",
  sliverGradient: "linear-gradient(90deg, rgba(199,55,71,1) 0%, rgba(223,172,51,1) 20%, rgba(142,182,59,1) 40%, rgba(251,253,254,1) 60%, rgba(102,175,208,1) 80%, rgba(63,83,158,1) 100%)"
}, mr = {
  main: {
    spacing: 1.6,
    background: de.midGrey,
    font: "MuseoSansReg, sans-serif",
    borderRadius: "0.45rem",
    color: G.paintItBlack,
    bodyColor: de.lightBlueGrey,
    contrastColor: de.white,
    fontSize: "16px",
    boxBackground: de.white
  },
  // styling for each component
  background: {
    background: G.paintItBlack
  },
  form: {
    input: {
      background: de.lightGrey,
      color: G.paintItBlack,
      placeholder: ss(0.12, de.midGrey),
      fontSize: "1rem",
      small: {
        color: G.paintItBlack,
        fontSize: "0.875rem"
      }
    },
    label: {
      color: G.paintItBlack,
      fontSize: "1rem",
      small: {
        color: G.paintItBlack,
        fontSize: "0.875rem"
      }
    }
  },
  text: {
    h1: {
      color: de.white,
      fontSize: "3rem",
      padding: "1rem 0",
      margin: "0"
    },
    h2: {
      color: G.paintItBlack,
      fontSize: "1.5rem",
      padding: "1rem 0",
      margin: "0"
    },
    h3: {
      color: G.paintItBlack,
      fontSize: "1.125rem",
      padding: "0.785rem 0",
      margin: "0"
    },
    h4: {
      color: G.paintItBlack,
      fontSize: "1rem",
      padding: "0.75rem 0",
      margin: "0"
    },
    h5: {
      color: G.paintItBlack,
      fontSize: "0.875rem",
      padding: "0",
      margin: "0"
    },
    h6: {
      color: G.paintItBlack,
      fontSize: "0.875rem",
      fontStyle: "italic",
      padding: "0",
      margin: "0"
    },
    p: {
      color: G.paintItBlack,
      fontSize: "1rem",
      small: {
        color: G.paintItBlack,
        fontSize: "0.875rem"
      }
    }
  },
  selectionPanel: {
    background: de.lightGrey,
    color: G.blueMonday,
    active: {
      background: G.blueMonday,
      color: de.white
    }
  },
  nowPlaying: {
    artistColor: de.blueGrey,
    loaderColor: G.simplyRed,
    volumeMain: G.simplyRed,
    volumeBg: G.fadeToGrey
  },
  rowComponent: {
    actionShadow: de.lightBlueGrey
  },
  pagination: {
    color: de.lightBlueGrey
  },
  toast: {
    background: de.white,
    color: de.lightBlueGrey,
    highlight: {
      success: G.greenDay,
      danger: G.simplyRed,
      warning: G.yellowSubmarine,
      default: de.lightBlueGrey,
      information: G.blueMonday
    }
  },
  dashboard: {
    online: G.greenDay,
    offline: G.simplyRed,
    fetching: de.lightBlueGrey
  },
  button: {
    background: G.paintItBlack,
    color: de.white,
    border: `2px solid ${G.paintItBlack}`,
    hover: {
      background: G.paintItBlack,
      color: de.white,
      border: `2px solid ${G.paintItBlack}`
    },
    active: {
      background: G.paintItBlack,
      color: de.white,
      border: `2px solid ${G.paintItBlack}`,
      hover: {
        background: G.paintItBlack,
        color: de.white,
        border: `2px solid ${G.paintItBlack}`
      }
    }
  },
  tabs: {
    color: G.fadeToGrey,
    tab: {
      color: G.paintItBlack,
      active: G.simplyRed,
      border: `3px solid ${G.simplyRed}`
    }
  }
}, ps = () => /* @__PURE__ */ $("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ $("g", { id: "Icon/Times", stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ $(
  "path",
  {
    d: "M44.1308425,32 L62.3254196,50.194577 C64.5581935,52.4291265 64.5581935,56.0489723 62.3254196,58.2817462 L58.2817462,62.3254196 C56.0489723,64.5581935 52.4271734,64.5581935 50.194577,62.3254196 L32,44.1308425 L13.805423,62.3254196 C11.5728266,64.5581935 7.95102768,64.5581935 5.71825379,62.3254196 L1.67458042,58.2817462 C-0.558193473,56.0471968 -0.558193473,52.4271734 1.67458042,50.194577 L19.8691575,32 L1.67458042,13.805423 C-0.558193473,11.5708735 -0.558193473,7.95102768 1.67458042,5.71825379 L5.71825379,1.67458042 C7.95280324,-0.558193473 11.5728266,-0.558193473 13.805423,1.67458042 L32,19.8691575 L50.194577,1.67458042 C52.4291265,-0.558193473 56.0489723,-0.558193473 58.2817462,1.67458042 L62.3254196,5.71825379 C64.5581935,7.95280324 64.5581935,11.5728266 62.3254196,13.805423 L44.1308425,32 Z",
    id: "🎨-Icon-Fill"
  }
) }) }), hs = w.div`
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
`, ms = (e, t) => {
  if (console.log("onRemove", e), e === null)
    return null;
  const { label: n, name: o, value: s } = t;
  return /* @__PURE__ */ $("button", { type: "button", onClick: e, label: n, name: o, value: s, children: /* @__PURE__ */ $(ps, {}) });
}, gs = () => null;
function bs(e) {
  let t = "white";
  return e !== null && (t = e), t;
}
const vs = ({ label: e, value: t, name: n = null, color: o = "red", textColor: s = null, onClick: u = null, onRemove: f = null }) => {
  let p = n;
  n === null && (p = `chip-name-${e}`);
  let h = gs;
  u !== null && (h = u);
  const y = bs(s);
  return /* @__PURE__ */ Re(hs, { backgroundColor: o, color: y, children: [
    /* @__PURE__ */ Re(
      "label",
      {
        htmlFor: p,
        onClick: h,
        children: [
          /* @__PURE__ */ $("input", { type: "checkbox", name: p, value: t, defaultChecked: !0 }),
          e
        ]
      }
    ),
    ms(f, { label: e, name: n, value: t })
  ] });
}, ys = w.div`
    margin-bottom: 1em;
`, fc = ({ value: e, isOpen: t, handleChangeOverlayColor: n, id: o, toggleColorPicker: s, removeOverlayColor: u }) => (console.log(e), /* @__PURE__ */ Re("div", { className: "color-picker", children: [
  /* @__PURE__ */ Re(
    lr,
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
        s(t);
      },
      children: [
        /* @__PURE__ */ $(
          "span",
          {
            className: "color-toggle",
            style: {
              backgroundColor: e !== null && e !== "" && e !== "undefined" ? `#${e}` : "#FFF"
            }
          }
        ),
        /* @__PURE__ */ $(
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
        /* @__PURE__ */ $("span", { className: "sr-only", children: "Pick Color" })
      ]
    }
  ),
  t ? /* @__PURE__ */ Re(
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
        /* @__PURE__ */ $(
          ChromePicker,
          {
            disableAlpha: !0,
            color: e !== null ? e : "#FFF",
            onChangeComplete: (f, p) => {
              n(f, p);
            }
          }
        ),
        e !== null && e !== "" && e !== "undefined" ? /* @__PURE__ */ Re(ys, { children: [
          /* @__PURE__ */ $(
            lr,
            {
              product: "positive",
              type: "button",
              onClick: () => {
                s(t);
              },
              children: "Save"
            }
          ),
          /* @__PURE__ */ $(
            lr,
            {
              product: "negative",
              type: "button",
              onClick: () => {
                u();
              },
              children: "Clear"
            }
          )
        ] }) : null
      ]
    }
  ) : null
] })), ws = xe`
    background: ${(e) => e.theme.containers.background || ""};
    border-radius: ${(e) => e.theme.main.borderRadius || ""};
    border: ${(e) => e.theme.containers.border || ""};
    margin: ${(e) => e.theme.containers.podSeperator || 0};
    min-width:300px;
    width: 100%;
`, ks = w.article`
    ${ws}
`, xs = xe`
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
    
`, Ss = w.div`
    ${xs}
`, _s = xe`
    width: 100%;
    padding: ${(e) => e.theme.containers.padding};
    box-sizing: border-box;
`, Rs = w.header`
    ${_s}
`, Es = xe`
    width: 100%;
    padding: ${(e) => e.theme.containers.padding};
    box-sizing: border-box;
`, Cs = w.div`
    ${Es}
`, $s = xe`
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
`, Ps = w.div`
    ${$s}
`, Ts = xe`
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
    `, Os = w.div`
    ${Ts}
`, dc = ks, pc = Ss, hc = Rs, mc = Cs, gc = Ps, bc = Os, Is = w.div`
    display:flex;
    width:100%;
    font-family: inherit;
    
`, Wo = w.span`
    display: flex;
    align-items: center;
`, As = w(Wo)`
    font-size:18px;
    color:${({ fill: e }) => e || "#000000"};
    font-weight:700;
    padding:0 .5rem 0 0;
`, js = w(Wo)`
    font-size:15px;
    font-weight:500;
    min-width:2rem;
    color: '#333333';
`, Ds = ({ fill: e, leftText: t = "", rightText: n = "", Icon: o }) => /* @__PURE__ */ Re(Is, { children: [
  /* @__PURE__ */ $(As, { fill: e, children: t }),
  /* @__PURE__ */ $(js, { children: n })
] }), Fs = w.div`
    display:flex;
    width:100%;
    font-family: ${(e) => e.theme && e.theme.main.font ? e.theme.main.font : "inherit"};
    align-items:center;
`, Ns = w.div`
    width:1.5rem;
    margin-right:.5rem;
    color: ${(e) => e.fill};
`, vc = ({ fill: e, leftText: t = "", rightText: n = "", Icon: o }) => /* @__PURE__ */ Re(Fs, { children: [
  /* @__PURE__ */ $(Ns, { fill: e, children: /* @__PURE__ */ $(o, { fill: e }) }),
  /* @__PURE__ */ $(Ds, { fill: e, leftText: t, rightText: n })
] }), Sn = xe`
    font-family: ${(e) => e.theme.main.font};
    font-weight: lighter;
    margin: 0;
`, zs = w.p`
    ${Sn}
    font-size: 0.8rem;
`, Ls = w.p`
    ${Sn}
    font-weight: lighter;
    font-size: 0.95rem;
    color: ${(e) => e.theme.main.color};
`, Ms = w.p`
    ${Sn}
    font-size: 1rem;
`, Bs = ({ type: e = "heading", children: t, ...n }) => {
  switch (e.toLowerCase()) {
    case "help":
      return /* @__PURE__ */ $(zs, { ...n, children: t });
    case "small":
      return /* @__PURE__ */ $(Ls, { ...n, children: t });
    default:
      return /* @__PURE__ */ $(Ms, { ...n, children: t });
  }
}, Ws = w.div`
    padding:.75rem;
    border-radius:10px;
    background-color:#fff;
`, Ys = w.div`
    margin-top:.25rem;
`, yc = ({ text: e = "", children: t, ...n }) => /* @__PURE__ */ Re(Ws, { ...n, children: [
  /* @__PURE__ */ $(Bs, { type: "small", children: e }),
  /* @__PURE__ */ $(Ys, { children: t })
] }), Hs = w.div`
    display: block;

    border-radius:10px;
    background-color:#fff;
    
    > * {
        display: flex;

        ${({ columnString: e }) => e !== null ? "> * { width:" + e + "; }" : null}

        ${({ columnArray: e }) => e !== null ? e.map((t, n) => "> *:nth-child(" + (n + 1) + ") { width:" + t + "; }") : null}

        

    }
    //grid-template-rows: ${({ rows: e }) => e};
`, wc = ({ children: e, columns: t = "12rem", ...n }) => /* @__PURE__ */ $(Hs, { ...n, columnString: typeof t == "string" ? t : null, columnArray: typeof t != "string" ? t : null, children: e });
class kc extends Ne.Component {
  constructor(t) {
    super(t), this.submit = this.submit.bind(this), console.log("item form", t);
  }
  submit(t) {
    const { form: n } = this.refs, { onSubmit: o } = this.props;
    if (t.preventDefault(), [...n].filter((u) => u.name.length > 0 && !u.validity.valid).length === 0 && typeof o == "function") {
      const u = [...n].filter((f) => f.name.length > 0).reduce((f, p) => (f[p.name] = p.value, f), {});
      console.log(u), o(u);
    } else
      alert("@Devs. no no no no. Pass edit function pls");
  }
  render() {
    const { children: t, buttonText: n = "Submit" } = this.props;
    return /* @__PURE__ */ Re("form", { ref: "form", onSubmit: this.submit, children: [
      t,
      /* @__PURE__ */ $("div", { children: /* @__PURE__ */ $(lr, { product: "positive", type: "submit-modal", children: n }) })
    ] });
  }
}
const Us = xe`
    //margin-bottom:5px;
    //font-size: 0.9rem;
    color: ${(e) => mr.main.color};
`, kr = w.label`
    ${Us}
    margin-bottom: ${(e) => e.margin || 0};
    display: ${({ block: e }) => e ? "block" : "inline-block"}
`, Gs = w.label`
    font-weight: bold;
    margin-bottom: 0.75rem;
    color: 'black';
    text-align: left;
`, Vs = w.div`
    display: flex;
    flex-direction: column;
`, qs = w.select`
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
        background: 'white';
        padding: 0.875rem 0.6rem;
        font-family: MuseoSans, sans-serif;
        color: 'black';
    }
`, Ks = w.div`
    margin: 0;
    min-width: 10rem;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background: 'white';
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
`, Xs = ({ children: e }) => e ? /* @__PURE__ */ $(Gs, { children: e }) : null, Js = ({ value: e, name: t, children: n, label: o, onChange: s = () => {
} }) => /* @__PURE__ */ Re(Vs, { children: [
  /* @__PURE__ */ $(Xs, { htmlFor: t, children: o }),
  /* @__PURE__ */ $(Ks, { children: /* @__PURE__ */ $(qs, { value: e, name: t, onChange: s, children: n }) })
] });
w.div`
    flex-direction: row;
    display: ${(e) => e.inline ? "inline-flex" : "flex"};
    margin-right: ${(e) => e.inline ? "0.8rem" : 0};
    margin-bottom: 0.8rem;
    align-items: center;
    font-family: MuseoSansReg, sans-serif;
`;
w(kr)`
    padding: 0;
    line-height: 1.5rem;
    display: inline-flex;
    align-items: center;
    opacity: ${({ disabled: e }) => e ? "0.4" : "1"};
`;
w.input`
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
    background: ${(e) => e.theme.main.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    &:checked {
        background-color: ${(e) => e.color !== null ? e.color : e.theme.form.input.color};
        color: ${(e) => e.color !== null ? e.color : e.theme.form.input.color};
        box-shadow: inset 0 0 0 0.4rem ${(e) => e.backgroundColor !== null ? e.backgroundColor : e.theme.form.input.background};
    }
`;
w.div`
    flex-direction: row;
    //display: ${(e) => e.inline ? "inline-flex" : "flex"};
    //margin-right: ${(e) => e.inline ? "0.8rem" : 0};
    margin-bottom: 0.8rem;
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
`;
w(kr)`
    padding: 0.25rem 0 0.25rem 2.25rem;
    line-height: 1.5rem;
    position: relative;
    //opacity: ${({ disabled: e }) => e ? "0.4" : "1"};
`;
w.input`
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
    //background: ${(e) => e.theme.form.input.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        box-shadow: none;
    }

    &:checked {
        background-color: ${(e) => e.backgroundColor !== null ? e.backgroundColor : e.theme.form.input.background};
        color: ${(e) => e.color !== null ? e.color : e.theme.form.input.color};
    }

    &:checked:after {
        content: '\\2714';
        font-family: 'MuseoSansReg', sans-serif;
        color: ${(e) => e.color !== null ? e.color : e.theme.form.input.color};
        font-size: 1.1rem;
    }
`;
const Zs = xe`
    display: none;

    input {
        border: 1px solid #ccc;
        border-radius: ${(e) => e.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.5rem;
    }
`;
w.div`
    ${Zs}
`;
w.div`
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    padding-bottom: 0.5rem;
`;
w.span`
    display: inline-block;
    margin-left: 0.3rem;
`;
w.div`
    display: flex;
    align-items: center;
    background: ${({ inputBackground: e }) => e};
    color: ${({ inputColour: e }) => e};
    border-radius: ${({ rounded: e }) => e === !0 ? "2.5rem" : "0.4rem"};
    padding: 0 0.4rem;
    opacity: ${({ disabled: e = !1 }) => e ? "0.4" : "1"};

    &:focus-within {
        //background: ${(e) => ls(0.1, e.inputBackground)};
        //color: ${(e) => e.inputColour};
    }

    
`;
w.input`
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
w.p`
    color: ${({ inputColour: e }) => e};
    font-family: MuseoSansReg, sans-serif;
    font-size: 0.75rem;
    margin: 0.6rem 0;
`;
w.div`
    display: flex;
`;
w.div`
    display: flex;
`;
w.div`
    display: flex;
    padding: 0.75rem 0;
`;
w.form`
    display: block;
    width: 100%;
`;
w.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
    max-width: 26rem;

    input {
        //border: 1px solid #ccc;
        border-radius: ${(e) => e.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.875rem 0.6rem;
        width: 100%;
    }
`;
const Qs = w.div`
    display: flex;
`, ec = w.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    justify-content: center;
`, tc = w.div`
    display: flex;
    flex-direction: column;
`, rc = w.div`
    display: flex;
    flex-direction: column;
`, nc = w.div`
    display: flex;
    position: relative;
    flex-direction: column;
    max-width: 26rem;
    margin: 0 0.325rem 0 0;

    input {
        //border: 1px solid #ccc;
        border-radius: ${(e) => e.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.875rem 0.6rem;
        width: 100%;
    }
`;
class oc extends Ne.Component {
  constructor(t) {
    super(t), this.state = {
      options: t.options,
      selected: t.chips,
      current: ""
    }, this.addChip = this.addChip.bind(this), this.chipOnClick = this.chipOnClick.bind(this), this.chipOnRemove = this.chipOnRemove.bind(this);
  }
  chipOnClick() {
    return console.log(this), null;
  }
  chipOnRemove(t) {
    const { selected: n } = this.state, o = n.filter((s) => s !== t);
    this.setState({
      selected: o
    });
  }
  renderChip(t, n) {
    const { name: o, id: s } = this.props, { onClick: u = null, onRemove: f = null, label: p, value: h, product: y = "default" } = t;
    let k = this.chipOnClick, _ = () => this.chipOnRemove(h);
    return u !== null && (k = u), f !== null && (_ = () => f(h)), /* @__PURE__ */ $(
      vs,
      {
        name: o,
        id: `chip-${s}-${h}`,
        onClick: k,
        onRemove: _,
        checked: !0,
        value: h,
        label: p,
        product: y
      },
      n
    );
  }
  addChip(t) {
    if (t.preventDefault(), t.target && t.target.value !== "") {
      const n = t.target, { selected: o } = this.state, s = o;
      s.push(n.value), this.setState({
        selected: s,
        current: ""
      });
    }
  }
  renderOptions(t) {
    console.log("renderOption,", t, this);
    const { current: n } = this.state;
    return /* @__PURE__ */ $("div", { className: "styled-select", children: /* @__PURE__ */ Re("select", { name: "new_chip", onChange: this.addChip, value: n, children: [
      /* @__PURE__ */ $("option", { value: "", children: "Select Another Option" }),
      t.map((o) => /* @__PURE__ */ $("option", { value: o.value, children: o.label }))
    ] }) });
  }
  render() {
    const { name: t, id: n, label: o, inline: s = !1 } = this.props;
    console.log(this);
    const { selected: u, options: f } = this.state, p = u.map((y) => {
      const k = f.filter((_) => y === _.value);
      return k.length > 0 ? k[0] : null;
    }), h = f.filter((y) => u.indexOf(y.value) === -1);
    return /* @__PURE__ */ $(Qs, { inline: s, id: n, children: /* @__PURE__ */ Re(tc, { children: [
      /* @__PURE__ */ Re(rc, { children: [
        /* @__PURE__ */ $(kr, { htmlFor: "new_chip", children: o }),
        /* @__PURE__ */ $(nc, { children: this.renderOptions(h) })
      ] }),
      /* @__PURE__ */ $("input", { name: `chip-values-${t}`, type: "hidden", value: u.join(",") }),
      /* @__PURE__ */ $(ec, { children: p.map((y, k) => y !== null ? this.renderChip(y, k) : "") })
    ] }) });
  }
}
w.div`
    display: flex;
`;
w.div`
    display: flex;
    flex-direction: column;
`;
w.div`
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
        border-radius: ${(e) => e.theme.main.borderRadius};
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
w.div`
    font-family: MuseoSansReg, sans-serif;
    user-select: none;

    g {
        cursor: ${({ readonly: e }) => e ? "default" : "pointer"};
    }

    path {
        transition: opacity 0.2s linear;
    }

    text {
        
        font-family: MuseoSansReg, sans-serif;
    }

`;
w.input`
    display:none;
`;
w.div`
    display: flex;
    font-family: MuseoSansReg, sans-serif;
    flex-wrap: ${(e) => e.small ? "nowrap" : "wrap"};
    justify-content: ${(e) => e.small ? "space-between" : "center"};
    background-color: ${(e) => e.backgroundColor !== null ? e.backgroundColor : e.active === !1 ? e.theme.form.input.background : e.theme.form.input.color};
        color: ${(e) => e.color !== null ? e.color : e.active === !1 ? e.theme.form.input.color : e.theme.form.input.background};
    padding: ${(e) => (e.small, "1rem")};
    width: 100%;
    border-radius: ${(e) => e.theme.main.borderRadius};
    box-shadow: 0px 1px 1px ${ho(0.8, "#000")};
    transition: all 0.2s linear;
    user-select: none;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 2px 5px ${ho(0.8, "#000")};
    }

    &:active {
        background-color: ${(e) => e.backgroundColor !== null ? e.backgroundColor : e.active ? e.theme.form.input.background : e.theme.form.input.color};
        color: ${(e) => e.color !== null ? e.color : e.active ? e.theme.form.input.color : e.theme.form.input.background};
    }

`;
w.div`
    display: flex;
    flex-direction: ${({ small: e }) => e ? "row" : "column"};
    align-items: center;
    align-self: center;

    svg {
        margin-bottom: ${({ small: e }) => e ? "0" : "1rem"};
        margin-right: ${({ small: e }) => e ? "1rem" : "0"};
        font-size: 2rem;
    }
`;
w.div`
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
        background-color: ${(e) => e.primaryColour};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px  ${(e) => e.primaryColour};
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
w(kr)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    cursor: pointer;
`;
w.span`
    font-size: 1.1em;
    margin-left: 0.75rem;
`;
const xc = Js, Sc = oc, xr = xe`
    color: ${mr.main.color};
    font-family: ${mr.main.font};
    margin: 0;
`, ac = w.h3`
    ${xr}
    font-size: 2.2rem;
`, ic = w.h1`
    ${xr}
    font-size: 1.6rem;
`, sc = w.h2`
    ${xr}
    font-weight: lighter;
    font-size: 1.4rem;
`, cc = w.h4`
    ${xr}
    font-size: 1.2rem;
`, _c = ({ type: e = "heading", children: t, ...n }) => {
  switch (e.toLowerCase()) {
    case "hero":
      return /* @__PURE__ */ $(ac, { ...n, children: t });
    case "title":
      return /* @__PURE__ */ $(ic, { ...n, children: t });
    case "subtitle":
      return /* @__PURE__ */ $(sc, { ...n, children: t });
    default:
      return /* @__PURE__ */ $(cc, { ...n, children: t });
  }
}, uc = w.hr`
    width: ${({ width: e }) => e};
    margin: 0 auto;
    border-bottom: 1px solid ${({ color: e }) => e !== null ? e : mr.generalColors.midGrey};
`, Rc = ({ width: e = "100%", color: t = null }) => /* @__PURE__ */ $(uc, { width: e, color: t });
export {
  lc as Background,
  lr as Button,
  vs as Chip,
  Sc as ChipSelect,
  fc as ColorPicker,
  gc as ColumnContainer,
  mc as Content,
  wc as FlexTable,
  kc as Form,
  bc as GridContainer,
  hc as Header,
  _c as Heading,
  Rc as Hr,
  vc as IconBoxes,
  kr as Label,
  dc as Pod,
  pc as PositionContainer,
  yc as Rectangle,
  xc as Select,
  Ds as TextPairs
};
