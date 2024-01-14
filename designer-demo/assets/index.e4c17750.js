var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
export function __vite_legacy_guard() {
  import("data:text/javascript,");
}
;
const p$3 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$3();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols$1) {
      symbols = getOwnPropertySymbols$1(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = objectAssign, n$2 = 60103, p$2 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$2 = 60109, r$4 = 60110, t$1 = 60112;
react_production_min.Suspense = 60113;
var u$1 = 60115, v$2 = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w$2 = Symbol.for;
  n$2 = w$2("react.element");
  p$2 = w$2("react.portal");
  react_production_min.Fragment = w$2("react.fragment");
  react_production_min.StrictMode = w$2("react.strict_mode");
  react_production_min.Profiler = w$2("react.profiler");
  q$2 = w$2("react.provider");
  r$4 = w$2("react.context");
  t$1 = w$2("react.forward_ref");
  react_production_min.Suspense = w$2("react.suspense");
  u$1 = w$2("react.memo");
  v$2 = w$2("react.lazy");
}
var x$2 = "function" === typeof Symbol && Symbol.iterator;
function y$3(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = x$2 && a[x$2] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function z$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$2 = {};
function C$1(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$2;
  this.updater = c2 || A$2;
}
C$1.prototype.isReactComponent = {};
C$1.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error(z$2(85));
  this.updater.enqueueSetState(this, a, b2, "setState");
};
C$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$2() {
}
D$2.prototype = C$1.prototype;
function E$2(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$2;
  this.updater = c2 || A$2;
}
var F$2 = E$2.prototype = new D$2();
F$2.constructor = E$2;
l$2(F$2, C$1.prototype);
F$2.isPureReactComponent = true;
var G$2 = { current: null }, H$2 = Object.prototype.hasOwnProperty, I$2 = { key: true, ref: true, __self: true, __source: true };
function J(a, b2, c2) {
  var e2, d2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (e2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      H$2.call(b2, e2) && !I$2.hasOwnProperty(e2) && (d2[e2] = b2[e2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    d2.children = c2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d2.children = f2;
  }
  if (a && a.defaultProps)
    for (e2 in g2 = a.defaultProps, g2)
      void 0 === d2[e2] && (d2[e2] = g2[e2]);
  return { $$typeof: n$2, type: a, key: k2, ref: h2, props: d2, _owner: G$2.current };
}
function K(a, b2) {
  return { $$typeof: n$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n$2;
}
function escape$1(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape$1("" + a.key) : b2.toString(36);
}
function O$1(a, b2, c2, e2, d2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h2 = false;
  if (null === a)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$2:
          case p$2:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, d2 = d2(h2), a = "" === e2 ? "." + N$1(h2, 0) : e2, Array.isArray(d2) ? (c2 = "", null != a && (c2 = a.replace(M$1, "$&/") + "/"), O$1(d2, b2, c2, "", function(a2) {
      return a2;
    })) : null != d2 && (L(d2) && (d2 = K(d2, c2 + (!d2.key || h2 && h2.key === d2.key ? "" : ("" + d2.key).replace(M$1, "$&/") + "/") + a)), b2.push(d2)), 1;
  h2 = 0;
  e2 = "" === e2 ? "." : e2 + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = e2 + N$1(k2, g2);
      h2 += O$1(k2, b2, c2, f2, d2);
    }
  else if (f2 = y$3(a), "function" === typeof f2)
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = e2 + N$1(k2, g2++), h2 += O$1(k2, b2, c2, f2, d2);
  else if ("object" === k2)
    throw b2 = "" + a, Error(z$2(31, "[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2));
  return h2;
}
function P$1(a, b2, c2) {
  if (null == a)
    return a;
  var e2 = [], d2 = 0;
  O$1(a, e2, "", "", function(a2) {
    return b2.call(c2, a2, d2++);
  });
  return e2;
}
function Q(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    a._status = 0;
    a._result = b2;
    b2.then(function(b3) {
      0 === a._status && (b3 = b3.default, a._status = 1, a._result = b3);
    }, function(b3) {
      0 === a._status && (a._status = 2, a._result = b3);
    });
  }
  if (1 === a._status)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (null === a)
    throw Error(z$2(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$2, IsSomeRendererActing: { current: false }, assign: l$2 };
react_production_min.Children = { map: P$1, forEach: function(a, b2, c2) {
  P$1(a, function() {
    b2.apply(this, arguments);
  }, c2);
}, count: function(a) {
  var b2 = 0;
  P$1(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z$2(143));
  return a;
} };
react_production_min.Component = C$1;
react_production_min.PureComponent = E$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b2, c2) {
  if (null === a || void 0 === a)
    throw Error(z$2(267, a));
  var e2 = l$2({}, a.props), d2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = G$2.current);
    void 0 !== b2.key && (d2 = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b2)
      H$2.call(b2, f2) && !I$2.hasOwnProperty(f2) && (e2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    e2.children = c2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e2.children = g2;
  }
  return {
    $$typeof: n$2,
    type: a.type,
    key: d2,
    ref: k2,
    props: e2,
    _owner: h2
  };
};
react_production_min.createContext = function(a, b2) {
  void 0 === b2 && (b2 = null);
  a = { $$typeof: r$4, _calculateChangedBits: b2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b2 = J.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t$1, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v$2, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: u$1, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.useCallback = function(a, b2) {
  return S$1().useCallback(a, b2);
};
react_production_min.useContext = function(a, b2) {
  return S$1().useContext(a, b2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b2) {
  return S$1().useEffect(a, b2);
};
react_production_min.useImperativeHandle = function(a, b2, c2) {
  return S$1().useImperativeHandle(a, b2, c2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return S$1().useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return S$1().useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, c2) {
  return S$1().useReducer(a, b2, c2);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React = react.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h2, k2;
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
    var t2 = null, u2 = null, w2 = function() {
      if (null !== t2)
        try {
          var a = exports.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a) {
      null !== t2 ? setTimeout(f2, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g2 = function(a, b2) {
      u2 = setTimeout(a, b2);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if ("undefined" !== typeof console) {
      var z2 = window.cancelAnimationFrame;
      "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      "function" !== typeof z2 && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k2 = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (null !== B2) {
        var a = exports.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b2) {
          throw G2.postMessage(null), b2;
        }
      } else
        A2 = false;
    };
    f2 = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a, b2) {
      C2 = x2(function() {
        a(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a:
      for (; ; ) {
        var d2 = c2 - 1 >>> 1, e2 = a[d2];
        if (void 0 !== e2 && 0 < I2(e2, b2))
          a[d2] = b2, a[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return void 0 === a ? null : a;
  }
  function K2(a) {
    var b2 = a[0];
    if (void 0 !== b2) {
      var c2 = a.pop();
      if (c2 !== b2) {
        a[0] = c2;
        a:
          for (var d2 = 0, e2 = a.length; d2 < e2; ) {
            var m2 = 2 * (d2 + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (void 0 !== n2 && 0 > I2(n2, c2))
              void 0 !== r2 && 0 > I2(r2, n2) ? (a[d2] = r2, a[v2] = c2, d2 = v2) : (a[d2] = n2, a[m2] = c2, d2 = m2);
            else if (void 0 !== r2 && 0 > I2(r2, c2))
              a[d2] = r2, a[v2] = c2, d2 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b2 = J2(M2); null !== b2; ) {
      if (null === b2.callback)
        K2(M2);
      else if (b2.startTime <= a)
        K2(M2), b2.sortIndex = b2.expirationTime, H2(L2, b2);
      else
        break;
      b2 = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (null !== J2(L2))
        R2 = true, f2(V2);
      else {
        var b2 = J2(M2);
        null !== b2 && g2(U2, b2.startTime - a);
      }
  }
  function V2(a, b2) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c2 = P2;
    try {
      T2(b2);
      for (O2 = J2(L2); null !== O2 && (!(O2.expirationTime > b2) || a && !exports.unstable_shouldYield()); ) {
        var d2 = O2.callback;
        if ("function" === typeof d2) {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e2 = d2(O2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? O2.callback = e2 : O2 === J2(L2) && K2(L2);
          T2(b2);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (null !== O2)
        var m2 = true;
      else {
        var n2 = J2(M2);
        null !== n2 && g2(U2, n2.startTime - b2);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c2, Q2 = false;
    }
  }
  var W2 = k2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P2;
    }
    var c2 = P2;
    P2 = b2;
    try {
      return a();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = P2;
    P2 = a;
    try {
      return b2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: N2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, H2(M2, a), null === J2(L2) && a === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a.sortIndex = e2, H2(L2, a), R2 || Q2 || (R2 = true, f2(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b2 = P2;
    return function() {
      var c2 = P2;
      P2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m$2 = objectAssign, r$3 = scheduler.exports;
function y$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y$2(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a, b2) {
  ea(a, b2);
  ea(a + "Capture", b2);
}
function ea(a, b2) {
  ca[a] = b2;
  for (a = 0; a < b2.length; a++)
    ba.add(b2[a]);
}
var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function na(a, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || ma(a, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B$1(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D$1[a] = new B$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  D$1[b2] = new B$1(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D$1[a] = new B$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D$1[a] = new B$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D$1[a] = new B$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D$1[a] = new B$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D$1[a] = new B$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D$1[a] = new B$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D$1[a] = new B$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    oa,
    pa
  );
  D$1[b2] = new B$1(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D$1[b2] = new B$1(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D$1[b2] = new B$1(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D$1[a] = new B$1(a, 1, false, a.toLowerCase(), null, false, false);
});
D$1.xlinkHref = new B$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D$1[a] = new B$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b2, c2, d2) {
  var e2 = D$1.hasOwnProperty(b2) ? D$1[b2] : null;
  var f2 = null !== e2 ? 0 === e2.type : d2 ? false : !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1] ? false : true;
  f2 || (na(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? la(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var E$1 = Symbol.for;
  sa = E$1("react.element");
  ta = E$1("react.portal");
  ua = E$1("react.fragment");
  wa = E$1("react.strict_mode");
  xa = E$1("react.profiler");
  ya = E$1("react.provider");
  za = E$1("react.context");
  Aa = E$1("react.forward_ref");
  Ba = E$1("react.suspense");
  Ca = E$1("react.suspense_list");
  Da = E$1("react.memo");
  Ea = E$1("react.lazy");
  Fa = E$1("react.block");
  E$1("react.scope");
  Ga = E$1("react.opaque.id");
  Ha = E$1("react.debug_trace_mode");
  Ia = E$1("react.offscreen");
  Ja = E$1("react.legacy_hidden");
}
var Ka = "function" === typeof Symbol && Symbol.iterator;
function La(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var Ma;
function Na(a) {
  if (void 0 === Ma)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b2) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k2) {
          var d2 = k2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (k2) {
          d2 = k2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d2 = k2;
      }
      a();
    }
  } catch (k2) {
    if (k2 && d2 && "string" === typeof k2.stack) {
      for (var e2 = k2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2])
                return "\n" + e2[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a.render;
        b2 = b2.displayName || b2.name || "";
        return a.displayName || ("" !== b2 ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b2 = a._payload;
        a = a._init;
        try {
          return Ra(a(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return m$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function $a(a, b2) {
  b2 = b2.checked;
  null != b2 && qa(a, "checked", b2, false);
}
function ab(a, b2) {
  $a(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a.value || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function cb(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  "" !== c2 && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c2 && (a.name = c2);
}
function bb(a, b2, c2) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a)
    null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
function db(a) {
  var b2 = "";
  aa.Children.forEach(a, function(a2) {
    null != a2 && (b2 += a2);
  });
  return b2;
}
function eb(a, b2) {
  a = m$2({ children: void 0 }, b2);
  if (b2 = db(b2.children))
    a.children = b2;
  return a;
}
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a[e2].disabled || (b2 = a[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(y$2(91));
  return m$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(y$2(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(y$2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
  null != d2 && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function pb(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b2] = qb[a];
  });
});
function sb(a, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || qb.hasOwnProperty(a) && qb[a] ? ("" + b2).trim() : b2 + "px";
}
function tb(a, b2) {
  a = a.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = sb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e2) : a[c2] = e2;
    }
}
var ub = m$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b2) {
  if (b2) {
    if (ub[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(y$2(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(y$2(60));
      if (!("object" === typeof b2.dangerouslySetInnerHTML && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y$2(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(y$2(62));
  }
}
function wb(a, b2) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(y$2(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb(a, b2, c2, d2, e2) {
  return a(b2, c2, d2, e2);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (null !== zb || null !== Ab)
    Ib(), Fb();
}
function Nb(a, b2, c2) {
  if (Lb)
    return a(b2, c2);
  Lb = true;
  try {
    return Jb(a, b2, c2);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b2) {
  var c2 = a.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d2;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(y$2(231, b2, typeof c2));
  return c2;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y$2(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b2 = a, c2 = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 1026) && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c2 : null;
}
function $b(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y$2(188));
}
function bc(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Zb(a);
    if (null === b2)
      throw Error(y$2(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return ac(e2), a;
        if (f2 === d2)
          return ac(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(y$2(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y$2(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(y$2(190));
  }
  if (3 !== c2.tag)
    throw Error(y$2(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b2 = a; ; ) {
    if (5 === b2.tag || 6 === b2.tag)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a, b2) {
  for (var c2 = a.alternate; null !== b2; ) {
    if (b2 === a || b2 === c2)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b2, c2, d2, e2) {
  return { blockedOn: a, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e2, targetContainers: [d2] };
}
function sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a, b2, c2, d2, e2, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = rc(b2, c2, d2, e2, f2), null !== b2 && (b2 = Cb(b2), null !== b2 && fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a;
}
function uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return lc = tc(lc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return mc = tc(mc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function vc(a) {
  var b2 = wc(a.target);
  if (null !== b2) {
    var c2 = Zb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = $b(c2), null !== b2) {
          a.blockedOn = b2;
          hc(a.lanePriority, function() {
            r$3.unstable_runWithPriority(a.priority, function() {
              gc(c2);
            });
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.hydrate) {
        a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null !== c2)
      return b2 = Cb(c2), null !== b2 && fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function zc(a, b2, c2) {
  xc(a) && c2.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (null !== a.blockedOn) {
      a = Cb(a.blockedOn);
      null !== a && ec(a);
      break;
    }
    for (var b2 = a.targetContainers; 0 < b2.length; ) {
      var c2 = yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
      if (null !== c2) {
        a.blockedOn = c2;
        break;
      }
      b2.shift();
    }
    null === a.blockedOn && jc.shift();
  }
  null !== kc && xc(kc) && (kc = null);
  null !== lc && xc(lc) && (lc = null);
  null !== mc && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, ic || (ic = true, r$3.unstable_scheduleCallback(r$3.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b2(b3) {
    return Bc(b3, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c2 = 1; c2 < jc.length; c2++) {
      var d2 = jc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  null !== kc && Bc(kc, a);
  null !== lc && Bc(lc, a);
  null !== mc && Bc(mc, a);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c2 = 0; c2 < pc.length; c2++)
    d2 = pc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < pc.length && (c2 = pc[0], null === c2.blockedOn); )
    vc(c2), null === c2.blockedOn && pc.shift();
}
function Dc(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b2 = Ec[a], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Gc)
      return Fc[a] = b2[c2];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b2) {
  for (var c2 = 0; c2 < a.length; c2 += 2) {
    var d2 = a[c2], e2 = a[c2 + 1];
    e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
    Nc.set(d2, b2);
    Mc.set(d2, e2);
    da(e2, [d2]);
  }
}
var Qc = r$3.unstable_now;
Qc();
var F$1 = 8;
function Rc(a) {
  if (0 !== (1 & a))
    return F$1 = 15, 1;
  if (0 !== (2 & a))
    return F$1 = 14, 2;
  if (0 !== (4 & a))
    return F$1 = 13, 4;
  var b2 = 24 & a;
  if (0 !== b2)
    return F$1 = 12, b2;
  if (0 !== (a & 32))
    return F$1 = 11, 32;
  b2 = 192 & a;
  if (0 !== b2)
    return F$1 = 10, b2;
  if (0 !== (a & 256))
    return F$1 = 9, 256;
  b2 = 3584 & a;
  if (0 !== b2)
    return F$1 = 8, b2;
  if (0 !== (a & 4096))
    return F$1 = 7, 4096;
  b2 = 4186112 & a;
  if (0 !== b2)
    return F$1 = 6, b2;
  b2 = 62914560 & a;
  if (0 !== b2)
    return F$1 = 5, b2;
  if (a & 67108864)
    return F$1 = 4, 67108864;
  if (0 !== (a & 134217728))
    return F$1 = 3, 134217728;
  b2 = 805306368 & a;
  if (0 !== b2)
    return F$1 = 2, b2;
  if (0 !== (1073741824 & a))
    return F$1 = 1, 1073741824;
  F$1 = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y$2(358, a));
  }
}
function Uc(a, b2) {
  var c2 = a.pendingLanes;
  if (0 === c2)
    return F$1 = 0;
  var d2 = 0, e2 = 0, f2 = a.expiredLanes, g2 = a.suspendedLanes, h2 = a.pingedLanes;
  if (0 !== f2)
    d2 = f2, e2 = F$1 = 15;
  else if (f2 = c2 & 134217727, 0 !== f2) {
    var k2 = f2 & ~g2;
    0 !== k2 ? (d2 = Rc(k2), e2 = F$1) : (h2 &= f2, 0 !== h2 && (d2 = Rc(h2), e2 = F$1));
  } else
    f2 = c2 & ~g2, 0 !== f2 ? (d2 = Rc(f2), e2 = F$1) : 0 !== h2 && (d2 = Rc(h2), e2 = F$1);
  if (0 === d2)
    return 0;
  d2 = 31 - Vc(d2);
  d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & g2)) {
    Rc(b2);
    if (e2 <= F$1)
      return b2;
    F$1 = e2;
  }
  b2 = a.entangledLanes;
  if (0 !== b2)
    for (a = a.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - Vc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b2) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b2), 0 === a ? Xc(10, b2) : a;
    case 10:
      return a = Yc(192 & ~b2), 0 === a ? Xc(8, b2) : a;
    case 8:
      return a = Yc(3584 & ~b2), 0 === a && (a = Yc(4186112 & ~b2), 0 === a && (a = 512)), a;
    case 2:
      return b2 = Yc(805306368 & ~b2), 0 === b2 && (b2 = 268435456), b2;
  }
  throw Error(y$2(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a);
  return b2;
}
function $c(a, b2, c2) {
  a.pendingLanes |= b2;
  var d2 = b2 - 1;
  a.suspendedLanes &= d2;
  a.pingedLanes &= d2;
  a = a.eventTimes;
  b2 = 31 - Vc(b2);
  a[b2] = c2;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r$3.unstable_UserBlockingPriority, ed = r$3.unstable_runWithPriority, fd = true;
function gd(a, b2, c2, d2) {
  Kb || Ib();
  var e2 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e2, a, b2, c2, d2);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a, b2, c2, d2) {
  ed(dd, hd.bind(null, a, b2, c2, d2));
}
function hd(a, b2, c2, d2) {
  if (fd) {
    var e2;
    if ((e2 = 0 === (b2 & 4)) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b2, c2, d2), jc.push(a);
    else {
      var f2 = yc(a, b2, c2, d2);
      if (null === f2)
        e2 && sc(a, d2);
      else {
        if (e2) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b2, c2, d2);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b2, c2, d2))
            return;
          sc(a, d2);
        }
        jd(a, b2, d2, null, c2);
      }
    }
  }
}
function yc(a, b2, c2, d2) {
  var e2 = xb(d2);
  e2 = wc(e2);
  if (null !== e2) {
    var f2 = Zb(e2);
    if (null === f2)
      e2 = null;
    else {
      var g2 = f2.tag;
      if (13 === g2) {
        e2 = $b(f2);
        if (null !== e2)
          return e2;
        e2 = null;
      } else if (3 === g2) {
        if (f2.stateNode.hydrate)
          return 3 === f2.tag ? f2.stateNode.containerInfo : null;
        e2 = null;
      } else
        f2 !== e2 && (e2 = null);
    }
  }
  jd(a, b2, d2, e2, c2);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++)
    ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a)
      a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m$2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$2({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m$2({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$2({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b2) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
}
function ne(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b2 = ue(a);
  if (Wa(b2))
    return a;
}
function ve(a, b2) {
  if ("change" === a)
    return b2;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b2 = [];
    ne(b2, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b2);
    else {
      Kb = true;
      try {
        Gb(a, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b2, c2) {
  "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b2) {
  if ("click" === a)
    return te(b2);
}
function Fe(a, b2) {
  if ("input" === a || "change" === a)
    return te(b2);
}
function Ge(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b2) {
  if (He(a, b2))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++)
    if (!Ie.call(b2, c2[d2]) || !He(a[c2[d2]], b2[c2[d2]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b2) {
  var c2 = Ke(a);
  a = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ke(c2);
  }
}
function Me(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Me(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Oe(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
Pc(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Yb(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G$1(a, b2) {
  var c2 = $e(b2), d2 = a + "__bubble";
  c2.has(d2) || (af(b2, a, 2, false), c2.add(d2));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a, null);
    df(b2, true, a, null);
  }));
}
function df(a, b2, c2, d2) {
  var e2 = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, f2 = c2;
  "selectionchange" === a && 9 !== c2.nodeType && (f2 = c2.ownerDocument);
  if (null !== d2 && !b2 && Ye.has(a)) {
    if ("scroll" !== a)
      return;
    e2 |= 2;
    f2 = d2;
  }
  var g2 = $e(f2), h2 = a + "__" + (b2 ? "capture" : "bubble");
  g2.has(h2) || (b2 && (e2 |= 4), af(f2, a, e2, b2), g2.add(h2));
}
function af(a, b2, c2, d2) {
  var e2 = Nc.get(b2);
  switch (void 0 === e2 ? 2 : e2) {
    case 0:
      e2 = gd;
      break;
    case 1:
      e2 = id;
      break;
    default:
      e2 = hd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Pb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function jd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Nb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = Mc.get(a);
      if (void 0 !== h3) {
        var k3 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = 0 !== (b2 & 4), z2 = !w2 && "scroll" === a, u2 = w2 ? null !== h3 ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d3, q2; null !== t2; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          5 === q2.tag && null !== v2 && (q2 = v2, null !== u2 && (v2 = Ob(t2, u2), null != v2 && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k3(h3, x2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && 0 === (b2 & 16) && (x2 = c2.relatedTarget || c2.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (x2 = c2.relatedTarget || c2.toElement, k3 = d3, x2 = x2 ? wc(x2) : null, null !== x2 && (z2 = Zb(x2), x2 !== z2 || 5 !== x2.tag && 6 !== x2.tag))
              x2 = null;
          } else
            k3 = null, x2 = d3;
          if (k3 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = null == k3 ? h3 : ue(k3);
            q2 = null == x2 ? h3 : ue(x2);
            h3 = new w2(v2, t2 + "leave", k3, c2, e3);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e3) === d3 && (w2 = new w2(u2, t2 + "enter", x2, c2, e3), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x2)
              b: {
                w2 = k3;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || null !== u2 && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            null !== k3 && hf(g3, h3, k3, w2, false);
            null !== x2 && null !== z2 && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (J2 = Ee);
        if (J2 && (J2 = J2(a, d3))) {
          ne(g3, J2, c2, e3);
          break a;
        }
        K2 && K2(a, h3, d3);
        "focusout" === a && (K2 = h3._wrapperState) && K2.controlled && "number" === h3.type && bb(h3, "number", h3.value);
      }
      K2 = d3 ? ue(d3) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || "true" === K2.contentEditable)
            Qe = K2, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c2) && (L2 = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (L2 = "onCompositionStart");
      L2 && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== L2 ? "onCompositionEnd" === L2 && ie && (Q2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d3, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c2, e3), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c2), null !== Q2 && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c2) : ke(a, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld(
          "onBeforeInput",
          "beforeinput",
          null,
          c2,
          e3
        ), g3.push({ event: e3, listeners: d3 }), e3.data = Q2);
    }
    se(g3, b2);
  });
}
function ef(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Ob(a, c2), null != f2 && d2.unshift(ef(a, f2, e2)), f2 = Ob(a, b2), null != f2 && d2.push(ef(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function gf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function hf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Ob(c2, f2), null != k2 && g2.unshift(ef(c2, k2, h2))) : e2 || (k2 = Ob(c2, f2), null != k2 && g2.push(ef(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a.push({ event: b2, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b2) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a, b2) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var of = "function" === typeof setTimeout ? setTimeout : void 0, pf = "function" === typeof clearTimeout ? clearTimeout : void 0;
function qf(a) {
  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
}
function rf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c2 = a.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b2 = a[wf];
  if (b2)
    return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[ff] || c2[wf]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a = sf(a); null !== a; ) {
          if (c2 = a[wf])
            return c2;
          a = sf(a);
        }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(y$2(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b2 = a[yf];
  void 0 === b2 && (b2 = a[yf] = /* @__PURE__ */ new Set());
  return b2;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H$1(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I$1(a, b2) {
  Af++;
  zf[Af] = a.current;
  a.current = b2;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Cf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Ff(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function Gf() {
  H$1(N);
  H$1(M);
}
function Hf(a, b2, c2) {
  if (M.current !== Cf)
    throw Error(y$2(168));
  I$1(M, b2);
  I$1(N, c2);
}
function If(a, b2, c2) {
  var d2 = a.stateNode;
  a = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in a))
      throw Error(y$2(108, Ra(b2) || "Unknown", e2));
  return m$2({}, c2, d2);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I$1(M, a);
  I$1(N, N.current);
  return true;
}
function Kf(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2)
    throw Error(y$2(169));
  c2 ? (a = If(a, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a, H$1(N), H$1(M), I$1(M, a)) : H$1(N);
  I$1(N, c2);
}
var Lf = null, Mf = null, Nf = r$3.unstable_runWithPriority, Of = r$3.unstable_scheduleCallback, Pf = r$3.unstable_cancelCallback, Qf = r$3.unstable_shouldYield, Rf = r$3.unstable_requestPaint, Sf = r$3.unstable_now, Tf = r$3.unstable_getCurrentPriorityLevel, Uf = r$3.unstable_ImmediatePriority, Vf = r$3.unstable_UserBlockingPriority, Wf = r$3.unstable_NormalPriority, Xf = r$3.unstable_LowPriority, Yf = r$3.unstable_IdlePriority, Zf = {}, $f = void 0 !== Rf ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y$2(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y$2(332));
  }
}
function gg(a, b2) {
  a = fg(a);
  return Nf(a, b2);
}
function hg(a, b2, c2) {
  a = fg(a);
  return Of(a, b2, c2);
}
function ig() {
  if (null !== bg) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && null !== ag) {
    cg = true;
    var a = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a < b2.length; a++) {
          var c2 = b2[a];
          do
            c2 = c2(true);
          while (null !== c2);
        }
      });
      ag = null;
    } catch (c2) {
      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c2;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = m$2({}, b2);
    a = a.defaultProps;
    for (var c2 in a)
      void 0 === b2[c2] && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b2 = mg.current;
  H$1(mg);
  a.type._context._currentValue = b2;
}
function sg(a, b2) {
  for (; null !== a; ) {
    var c2 = a.alternate;
    if ((a.childLanes & b2) === b2)
      if (null === c2 || (c2.childLanes & b2) === b2)
        break;
      else
        c2.childLanes |= b2;
    else
      a.childLanes |= b2, null !== c2 && (c2.childLanes |= b2);
    a = a.return;
  }
}
function tg(a, b2) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (ug = true), a.firstContext = null);
}
function vg(a, b2) {
  if (pg !== a && false !== b2 && 0 !== b2) {
    if ("number" !== typeof b2 || 1073741823 === b2)
      pg = a, b2 = 1073741823;
    b2 = { context: a, observedBits: b2, next: null };
    if (null === og) {
      if (null === ng)
        throw Error(y$2(308));
      og = b2;
      ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
    } else
      og = og.next = b2;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b2) {
  a = a.updateQueue;
  if (null !== a) {
    a = a.shared;
    var c2 = a.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a.pending = b2;
  }
}
function Bg(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function Cg(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a.alternate;
    if (null !== n2) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (null === A2 ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (null !== f2) {
    A2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d2 & h2) === h2) {
        null !== n2 && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a, x2 = f2;
          h2 = b2;
          p2 = c2;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if ("function" === typeof C2) {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = "function" === typeof C2 ? C2.call(p2, A2, h2) : C2;
              if (null === h2 || void 0 === h2)
                break a;
              A2 = m$2({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        null !== f2.callback && (a.flags |= 32, h2 = e2.effects, null === h2 ? e2.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, null === n2 ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (null === f2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          f2 = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
    } while (1);
    null === n2 && (k2 = A2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    Dg |= g2;
    a.lanes = g2;
    a.memoizedState = A2;
  }
}
function Eg(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a)
    for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(y$2(191, e2));
        e2.call(d2);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : m$2({}, b2, c2);
  a.memoizedState = c2;
  0 === a.lanes && (a.updateQueue.baseState = c2);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Hg(), e2 = Ig(a), f2 = zg(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  Ag(a, f2);
  Jg(a, e2, d2);
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Hg(), e2 = Ig(a), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  Ag(a, f2);
  Jg(a, e2, d2);
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = Hg(), d2 = Ig(a), e2 = zg(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  Ag(a, e2);
  Jg(a, d2, c2);
} };
function Lg(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c2, d2) || !Je(e2, f2) : true;
}
function Mg(a, b2, c2) {
  var d2 = false, e2 = Cf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = vg(f2) : (e2 = Ff(b2) ? Df : M.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Ef(a, e2) : Cf);
  b2 = new b2(c2, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Kg;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a, b2, c2, d2) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = Fg;
  xg(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e2.context = Ef(a, f2));
  Cg(a, c2, e2, d2);
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Gg(a, b2, f2, c2), e2.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a, c2, e2, d2), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b2, c2) {
  a = c2.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(y$2(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(y$2(147, a));
      var e2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === e2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = d2.refs;
        b3 === Fg && (b3 = d2.refs = {});
        null === a2 ? delete b3[e2] : b3[e2] = a2;
      };
      b2._stringRef = e2;
      return b2;
    }
    if ("string" !== typeof a)
      throw Error(y$2(284));
    if (!c2._owner)
      throw Error(y$2(290, a));
  }
  return a;
}
function Rg(a, b2) {
  if ("textarea" !== a.type)
    throw Error(y$2(31, "[object Object]" === Object.prototype.toString.call(b2) ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.lastEffect;
      null !== d3 ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
      c3.nextEffect = null;
      c3.flags = 8;
    }
  }
  function c2(c3, d3) {
    if (!a)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = Tg(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a)
      return c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
    b3.flags = 2;
    return c3;
  }
  function g2(b3) {
    a && null === b3.alternate && (b3.flags = 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = Ug(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    if (null !== b3 && b3.elementType === c3.type)
      return d3 = e2(b3, c3.props), d3.ref = Qg(a2, b3, c3), d3.return = a2, d3;
    d3 = Vg(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = Qg(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = Wg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function n2(a2, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Xg(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function A2(a2, b3, c3) {
    if ("string" === typeof b3 || "number" === typeof b3)
      return b3 = Ug("" + b3, a2.mode, c3), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case sa:
          return c3 = Vg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Qg(a2, null, b3), c3.return = a2, c3;
        case ta:
          return b3 = Wg(b3, a2.mode, c3), b3.return = a2, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(
          b3,
          a2.mode,
          c3,
          null
        ), b3.return = a2, b3;
      Rg(a2, b3);
    }
    return null;
  }
  function p2(a2, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case sa:
          return c3.key === e3 ? c3.type === ua ? n2(a2, b3, c3.props.children, d3, e3) : k2(a2, b3, c3, d3) : null;
        case ta:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
      }
      if (Pg(c3) || La(c3))
        return null !== e3 ? null : n2(a2, b3, c3, d3, null);
      Rg(a2, c3);
    }
    return null;
  }
  function C2(a2, b3, c3, d3, e3) {
    if ("string" === typeof d3 || "number" === typeof d3)
      return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case sa:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, d3.type === ua ? n2(b3, a2, d3.props.children, e3, d3.key) : k2(b3, a2, d3, e3);
        case ta:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
      }
      if (Pg(d3) || La(d3))
        return a2 = a2.get(c3) || null, n2(b3, a2, d3, e3, null);
      Rg(b3, d3);
    }
    return null;
  }
  function x2(e3, g3, h3, k3) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; null !== u2 && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e3, u2, h3[z2], k3);
      if (null === n3) {
        null === u2 && (u2 = q2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, z2);
      null === t2 ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c2(e3, u2), l3;
    if (null === u2) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e3, h3[z2], k3), null !== u2 && (g3 = f2(u2, g3, z2), null === t2 ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d2(e3, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e3, z2, h3[z2], k3), null !== q2 && (a && null !== q2.alternate && u2.delete(null === q2.key ? z2 : q2.key), g3 = f2(q2, g3, z2), null === t2 ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = La(h3);
    if ("function" !== typeof l3)
      throw Error(y$2(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(y$2(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); null !== u2 && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e3, u2, n3.value, k3);
      if (null === w3) {
        null === u2 && (u2 = q2);
        break;
      }
      a && u2 && null === w3.alternate && b2(e3, u2);
      g3 = f2(w3, g3, z2);
      null === t2 ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c2(e3, u2), l3;
    if (null === u2) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d2(e3, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e3, z2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && u2.delete(null === n3.key ? z2 : n3.key), g3 = f2(n3, g3, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    return l3;
  }
  return function(a2, d3, f3, h3) {
    var k3 = "object" === typeof f3 && null !== f3 && f3.type === ua && null === f3.key;
    k3 && (f3 = f3.props.children);
    var l3 = "object" === typeof f3 && null !== f3;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k3 = d3; null !== k3; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c2(a2, k3.sibling);
                      d3 = e2(k3, f3.props.children);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f3.type) {
                      c2(a2, k3.sibling);
                      d3 = e2(k3, f3.props);
                      d3.ref = Qg(a2, k3, f3);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                }
                c2(a2, k3);
                break;
              } else
                b2(a2, k3);
              k3 = k3.sibling;
            }
            f3.type === ua ? (d3 = Xg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Qg(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case ta:
          a: {
            for (k3 = f3.key; null !== d3; ) {
              if (d3.key === k3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
              else
                b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = Wg(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
      }
    if ("string" === typeof f3 || "number" === typeof f3)
      return f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Ug(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2);
    if (Pg(f3))
      return x2(a2, d3, f3, h3);
    if (La(f3))
      return w2(a2, d3, f3, h3);
    l3 && Rg(a2, f3);
    if ("undefined" === typeof f3 && !k3)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y$2(152, Ra(a2.type) || "Component"));
      }
    return c2(a2, d3);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y$2(174));
  return a;
}
function eh(a, b2) {
  I$1(ch, b2);
  I$1(bh, a);
  I$1(ah, $g);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = mb(b2, a);
  }
  H$1(ah);
  I$1(ah, b2);
}
function fh() {
  H$1(ah);
  H$1(bh);
  H$1(ch);
}
function gh(a) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c2 = mb(b2, a.type);
  b2 !== c2 && (I$1(bh, a), I$1(ah, c2));
}
function hh(a) {
  bh.current === a && (H$1(ah), H$1(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 64))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b2) {
  var c2 = nh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  c2.flags = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c2, a.lastEffect = c2) : a.firstEffect = a.lastEffect = c2;
}
function oh(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c2 = b2;
      if (!oh(a, b2)) {
        b2 = rf(c2.nextSibling);
        if (!b2 || !oh(a, b2)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c2);
      }
      jh = a;
      kh = rf(b2.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b2 = a.type;
  if (5 !== a.tag || "head" !== b2 && "body" !== b2 && !nf(b2, a.memoizedProps))
    for (b2 = kh; b2; )
      mh(a, b2), b2 = rf(b2.nextSibling);
  qh(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(y$2(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("/$" === c2) {
            if (0 === b2) {
              kh = rf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y$2(321));
}
function Bh(a, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
    if (!He(a[c2], b2[c2]))
      return false;
  return true;
}
function Ch(a, b2, c2, d2, e2, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
  a = c2(d2, e2);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y$2(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a = c2(d2, e2);
    } while (zh);
  }
  vh.current = Gh;
  b2 = null !== S && null !== S.next;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y$2(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === T ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (null === S) {
    var a = R.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = S.next;
  var b2 = null === T ? R.memoizedState : T.next;
  if (null !== b2)
    T = b2, S = a;
  else {
    if (null === a)
      throw Error(y$2(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    null === T ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function Kh(a) {
  var b2 = Ih(), c2 = b2.queue;
  if (null === c2)
    throw Error(y$2(311));
  c2.lastRenderedReducer = a;
  var d2 = S, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    e2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = f2 = null, k2 = e2;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        null !== h2 && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a ? k2.eagerState : a(d2, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        null === h2 ? (g2 = h2 = n2, f2 = d2) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (null !== k2 && k2 !== e2);
    null === h2 ? f2 = d2 : h2.next = g2;
    He(d2, b2.memoizedState) || (ug = true);
    b2.memoizedState = d2;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c2.lastRenderedState = d2;
  }
  return [b2.memoizedState, c2.dispatch];
}
function Lh(a) {
  var b2 = Ih(), c2 = b2.queue;
  if (null === c2)
    throw Error(y$2(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Mh(a, b2, c2) {
  var d2 = b2._getVersion;
  d2 = d2(b2._source);
  var e2 = b2._workInProgressVersionPrimary;
  if (null !== e2)
    a = e2 === d2;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b2._workInProgressVersionPrimary = d2, th.push(b2);
  if (a)
    return c2(b2._source);
  th.push(b2);
  throw Error(y$2(350));
}
function Nh(a, b2, c2, d2) {
  var e2 = U;
  if (null === e2)
    throw Error(y$2(349));
  var f2 = b2._getVersion, g2 = f2(b2._source), h2 = vh.current, k2 = h2.useState(function() {
    return Mh(e2, b2, c2);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b2, subscribe: d2 };
  h2.useEffect(function() {
    p2.getSnapshot = c2;
    p2.setSnapshot = l2;
    var a2 = f2(b2._source);
    if (!He(g2, a2)) {
      a2 = c2(b2._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e2.mutableReadLanes |= a2 & e2.pendingLanes);
      a2 = e2.mutableReadLanes;
      e2.entangledLanes |= a2;
      for (var d3 = e2.entanglements, h3 = a2; 0 < h3; ) {
        var k3 = 31 - Vc(h3), v2 = 1 << k3;
        d3[k3] |= a2;
        h3 &= ~v2;
      }
    }
  }, [c2, b2, d2]);
  h2.useEffect(function() {
    return d2(b2._source, function() {
      var a2 = p2.getSnapshot, c3 = p2.setSnapshot;
      try {
        c3(a2(b2._source));
        var d3 = Ig(w2);
        e2.mutableReadLanes |= d3 & e2.pendingLanes;
      } catch (q2) {
        c3(function() {
          throw q2;
        });
      }
    });
  }, [b2, d2]);
  He(C2, c2) && He(x2, b2) && He(A2, d2) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k2.queue = a, k2.baseQueue = null, n2 = Mh(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a, b2, c2) {
  var d2 = Ih();
  return Nh(d2, a, b2, c2);
}
function Qh(a) {
  var b2 = Hh();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b2.memoizedState, a];
}
function Rh(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = R.updateQueue;
  null === b2 ? (b2 = { lastEffect: null }, R.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function Sh(a) {
  var b2 = Hh();
  a = { current: a };
  return b2.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b2, c2, d2) {
  var e2 = Hh();
  R.flags |= a;
  e2.memoizedState = Rh(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function Vh(a, b2, c2, d2) {
  var e2 = Ih();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== S) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Bh(d2, g2.deps)) {
      Rh(b2, c2, f2, d2);
      return;
    }
  }
  R.flags |= a;
  e2.memoizedState = Rh(1 | b2, c2, f2, d2);
}
function Wh(a, b2) {
  return Uh(516, 4, a, b2);
}
function Xh(a, b2) {
  return Vh(516, 4, a, b2);
}
function Yh(a, b2) {
  return Vh(4, 2, a, b2);
}
function Zh(a, b2) {
  if ("function" === typeof b2)
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function $h(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a), c2);
}
function ai() {
}
function bi(a, b2) {
  var c2 = Ih();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Bh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function ci(a, b2) {
  var c2 = Ih();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Bh(b2, d2[1]))
    return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function di(a, b2) {
  var c2 = eg();
  gg(98 > c2 ? 98 : c2, function() {
    a(true);
  });
  gg(97 < c2 ? 97 : c2, function() {
    var c3 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b2();
    } finally {
      wh.transition = c3;
    }
  });
}
function Oh(a, b2, c2) {
  var d2 = Hg(), e2 = Ig(a), f2 = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
  null === g2 ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b2.pending = f2;
  g2 = a.alternate;
  if (a === R || null !== g2 && g2 === R)
    zh = yh = true;
  else {
    if (0 === a.lanes && (null === g2 || 0 === g2.lanes) && (g2 = b2.lastRenderedReducer, null !== g2))
      try {
        var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
        f2.eagerReducer = g2;
        f2.eagerState = k2;
        if (He(k2, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e2, d2);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b2) {
  Hh().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return Uh(4, 2, Zh.bind(
    null,
    b2,
    a
  ), c2);
}, useLayoutEffect: function(a, b2) {
  return Uh(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = Hh();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = Hh();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d2.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Qh(a), c2 = b2[0], d2 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Qh(false), b2 = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b2];
}, useMutableSource: function(a, b2, c2) {
  var d2 = Hh();
  d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a, subscribe: c2 };
  return Nh(d2, a, b2, c2);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b2 = uf(function() {
      a || (a = true, c2("r:" + (tf++).toString(36)));
      throw Error(y$2(355));
    }), c2 = Qh(b2)[1];
    0 === (R.mode & 2) && (R.flags |= 516, Rh(
      5,
      function() {
        c2("r:" + (tf++).toString(36));
      },
      void 0,
      null
    ));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b2, c2, d2) {
  b2.child = null === a ? Zg(b2, null, c2, d2) : Yg(b2, a.child, c2, d2);
}
function gi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  tg(b2, e2);
  d2 = Ch(a, b2, c2, d2, f2, e2);
  if (null !== a && !ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -517, a.lanes &= ~e2, hi(a, b2, e2);
  b2.flags |= 1;
  fi(a, b2, d2, e2);
  return b2.child;
}
function ii(a, b2, c2, d2, e2, f2) {
  if (null === a) {
    var g2 = c2.type;
    if ("function" === typeof g2 && !ji(g2) && void 0 === g2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = g2, ki(a, b2, g2, d2, e2, f2);
    a = Vg(c2.type, null, d2, b2, b2.mode, f2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  g2 = a.child;
  if (0 === (e2 & f2) && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = null !== c2 ? c2 : Je, c2(e2, d2) && a.ref === b2.ref))
    return hi(a, b2, f2);
  b2.flags |= 1;
  a = Tg(g2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function ki(a, b2, c2, d2, e2, f2) {
  if (null !== a && Je(a.memoizedProps, d2) && a.ref === b2.ref)
    if (ug = false, 0 !== (f2 & e2))
      0 !== (a.flags & 16384) && (ug = true);
    else
      return b2.lanes = a.lanes, hi(a, b2, f2);
  return li(a, b2, c2, d2, f2);
}
function mi(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d2.mode || "unstable-defer-without-hiding" === d2.mode)
    if (0 === (b2.mode & 4))
      b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
    else if (0 !== (c2 & 1073741824))
      b2.memoizedState = { baseLanes: 0 }, ni(b2, null !== f2 ? f2.baseLanes : c2);
    else
      return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a }, ni(b2, a), null;
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
  fi(a, b2, e2, c2);
  return b2.child;
}
function oi(a, b2) {
  var c2 = b2.ref;
  if (null === a && null !== c2 || null !== a && a.ref !== c2)
    b2.flags |= 128;
}
function li(a, b2, c2, d2, e2) {
  var f2 = Ff(c2) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e2);
  c2 = Ch(a, b2, c2, d2, f2, e2);
  if (null !== a && !ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -517, a.lanes &= ~e2, hi(a, b2, e2);
  b2.flags |= 1;
  fi(a, b2, c2, e2);
  return b2.child;
}
function pi(a, b2, c2, d2, e2) {
  if (Ff(c2)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e2);
  if (null === b2.stateNode)
    null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e2), d2 = true;
  else if (null === a) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M.current, l2 = Ef(b2, l2));
    var n2 = c2.getDerivedStateFromProps, A2 = "function" === typeof n2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    A2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
    wg = false;
    var p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || p2 !== k2 || N.current || wg ? ("function" === typeof n2 && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p2, k2, l2)) ? (A2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g2.props = l2;
    A2 = b2.pendingProps;
    p2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M.current, k2 = Ef(b2, k2));
    var C2 = c2.getDerivedStateFromProps;
    (n2 = "function" === typeof C2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== A2 || p2 !== k2) && Ng(b2, g2, d2, k2);
    wg = false;
    p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    var x2 = b2.memoizedState;
    h2 !== A2 || p2 !== x2 || N.current || wg ? ("function" === typeof C2 && (Gg(b2, c2, C2, d2), x2 = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p2, x2, k2)) ? (n2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(
      d2,
      x2,
      k2
    ), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, x2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 256)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g2.props = d2, g2.state = x2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 256), d2 = false);
  }
  return qi(a, b2, c2, d2, f2, e2);
}
function qi(a, b2, c2, d2, e2, f2) {
  oi(a, b2);
  var g2 = 0 !== (b2.flags & 64);
  if (!d2 && !g2)
    return e2 && Kf(b2, c2, false), hi(a, b2, f2);
  d2 = b2.stateNode;
  ei.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a && g2 ? (b2.child = Yg(b2, a.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && Kf(b2, c2, true);
  return b2.child;
}
function ri(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? Hf(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a, b2.context, false);
  eh(a, b2.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = P.current, f2 = false, g2;
  (g2 = 0 !== (b2.flags & 64)) || (g2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  g2 ? (f2 = true, b2.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d2.fallback || true === d2.unstable_avoidThisFallback || (e2 |= 1);
  I$1(P, e2 & 1);
  if (null === a) {
    void 0 !== d2.fallback && ph(b2);
    a = d2.children;
    e2 = d2.fallback;
    if (f2)
      return a = ui(b2, a, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a;
    if ("number" === typeof d2.unstable_expectedLoadTime)
      return a = ui(b2, a, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a;
    c2 = vi({ mode: "visible", children: a }, b2.mode, c2, null);
    c2.return = b2;
    return b2.child = c2;
  }
  if (null !== a.memoizedState) {
    if (f2)
      return d2 = wi(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = null === e2 ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a.childLanes & ~c2, b2.memoizedState = si, d2;
    c2 = xi(a, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = wi(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = null === e2 ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a.childLanes & ~c2, b2.memoizedState = si, d2;
  c2 = xi(a, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function ui(a, b2, c2, d2) {
  var e2 = a.mode, f2 = a.child;
  b2 = { mode: "hidden", children: b2 };
  0 === (e2 & 2) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e2, 0, null);
  c2 = Xg(c2, e2, d2, null);
  f2.return = a;
  c2.return = a;
  f2.sibling = c2;
  a.child = f2;
  return c2;
}
function xi(a, b2, c2, d2) {
  var e2 = a.child;
  a = e2.sibling;
  c2 = Tg(e2, { mode: "visible", children: c2 });
  0 === (b2.mode & 2) && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  null !== a && (a.nextEffect = null, a.flags = 8, b2.firstEffect = b2.lastEffect = a);
  return b2.child = c2;
}
function wi(a, b2, c2, d2, e2) {
  var f2 = b2.mode, g2 = a.child;
  a = g2.sibling;
  var h2 = { mode: "hidden", children: c2 };
  0 === (f2 & 2) && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, null !== g2 ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
  null !== a ? d2 = Tg(a, d2) : (d2 = Xg(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yi(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  sg(a.return, b2);
}
function zi(a, b2, c2, d2, e2, f2) {
  var g2 = a.memoizedState;
  null === g2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f2 } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f2);
}
function Ai(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  fi(a, b2, d2.children, c2);
  d2 = P.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 64;
  else {
    if (null !== a && 0 !== (a.flags & 64))
      a:
        for (a = b2.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && yi(a, c2);
          else if (19 === a.tag)
            yi(a, c2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d2 &= 1;
  }
  I$1(P, d2);
  if (0 === (b2.mode & 2))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a = c2.alternate, null !== a && null === ih(a) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        zi(b2, false, e2, c2, f2, b2.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a = e2.alternate;
          if (null !== a && null === ih(a)) {
            b2.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a;
        }
        zi(b2, true, c2, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a, b2, c2) {
  null !== a && (b2.dependencies = a.dependencies);
  Dg |= b2.lanes;
  if (0 !== (c2 & b2.childLanes)) {
    if (null !== a && b2.child !== a.child)
      throw Error(y$2(153));
    if (null !== b2.child) {
      a = b2.child;
      c2 = Tg(a, a.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a.sibling; )
        a = a.sibling, c2 = c2.sibling = Tg(a, a.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ci = function() {
};
Di = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "option":
        e2 = eb(a, e2);
        d2 = eb(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = m$2({}, e2, { value: void 0 });
        d2 = m$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = jf);
    }
    vb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ca.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && G$1("scroll", a), f2 || h2 === k2 || (f2 = [])) : "object" === typeof k2 && null !== k2 && k2.$$typeof === Ga ? k2.toString() : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push(
      "style",
      c2
    );
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Fi(a, b2) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
}
function Gi(a, b2, c2) {
  var d2 = b2.pendingProps;
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H$1(N);
      H$1(M);
      uh();
      d2 = b2.stateNode;
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a || null === a.child)
        rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e2 = dh(ch.current);
      c2 = b2.type;
      if (null !== a && null != b2.stateNode)
        Di(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(y$2(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[wf] = b2;
          d2[xf] = f2;
          switch (c2) {
            case "dialog":
              G$1("cancel", d2);
              G$1("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              G$1("load", d2);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G$1(Xe[a], d2);
              break;
            case "source":
              G$1("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              G$1("error", d2);
              G$1("load", d2);
              break;
            case "details":
              G$1("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              G$1("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              G$1("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), G$1("invalid", d2);
          }
          vb(c2, f2);
          a = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e2 = f2[g2], "children" === g2 ? "string" === typeof e2 ? d2.textContent !== e2 && (a = ["children", e2]) : "number" === typeof e2 && d2.textContent !== "" + e2 && (a = ["children", "" + e2]) : ca.hasOwnProperty(g2) && null != e2 && "onScroll" === g2 && G$1("scroll", d2));
          switch (c2) {
            case "input":
              Va(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = jf);
          }
          d2 = a;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          a === kb.html && (a = lb(c2));
          a === kb.html ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[wf] = b2;
          a[xf] = d2;
          Bi(a, b2, false, false);
          b2.stateNode = a;
          g2 = wb(c2, d2);
          switch (c2) {
            case "dialog":
              G$1("cancel", a);
              G$1("close", a);
              e2 = d2;
              break;
            case "iframe":
            case "object":
            case "embed":
              G$1("load", a);
              e2 = d2;
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < Xe.length; e2++)
                G$1(Xe[e2], a);
              e2 = d2;
              break;
            case "source":
              G$1("error", a);
              e2 = d2;
              break;
            case "img":
            case "image":
            case "link":
              G$1("error", a);
              G$1("load", a);
              e2 = d2;
              break;
            case "details":
              G$1("toggle", a);
              e2 = d2;
              break;
            case "input":
              Za(a, d2);
              e2 = Ya(a, d2);
              G$1("invalid", a);
              break;
            case "option":
              e2 = eb(a, d2);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d2.multiple };
              e2 = m$2({}, d2, { value: void 0 });
              G$1("invalid", a);
              break;
            case "textarea":
              hb(a, d2);
              e2 = gb(a, d2);
              G$1("invalid", a);
              break;
            default:
              e2 = d2;
          }
          vb(c2, e2);
          var h2 = e2;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? tb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && ob(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && pb(a, k2) : "number" === typeof k2 && pb(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ca.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && G$1("scroll", a) : null != k2 && qa(a, f2, k2, g2));
            }
          switch (c2) {
            case "input":
              Va(a);
              cb(a, d2, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
              break;
            case "select":
              a.multiple = !!d2.multiple;
              f2 = d2.value;
              null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(a, !!d2.multiple, d2.defaultValue, true);
              break;
            default:
              "function" === typeof e2.onClick && (a.onclick = jf);
          }
          mf(c2, d2) && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a && null != b2.stateNode)
        Ei(a, b2, a.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(y$2(166));
        c2 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
      }
      return null;
    case 13:
      H$1(P);
      d2 = b2.memoizedState;
      if (0 !== (b2.flags & 64))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      c2 = false;
      null === a ? void 0 !== b2.memoizedProps.fallback && rh(b2) : c2 = null !== a.memoizedState;
      if (d2 && !c2 && 0 !== (b2.mode & 2))
        if (null === a && true !== b2.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & 1))
          0 === V && (V = 3);
        else {
          if (0 === V || 3 === V)
            V = 4;
          null === U || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U, W);
        }
      if (d2 || c2)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), null === a && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H$1(P);
      d2 = b2.memoizedState;
      if (null === d2)
        return null;
      f2 = 0 !== (b2.flags & 64);
      g2 = d2.rendering;
      if (null === g2)
        if (f2)
          Fi(d2, false);
        else {
          if (0 !== V || null !== a && 0 !== (a.flags & 64))
            for (a = b2.child; null !== a; ) {
              g2 = ih(a);
              if (null !== g2) {
                b2.flags |= 64;
                Fi(d2, false);
                f2 = g2.updateQueue;
                null !== f2 && (b2.updateQueue = f2, b2.flags |= 4);
                null === d2.lastEffect && (b2.firstEffect = null);
                b2.lastEffect = d2.lastEffect;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a = d2, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                I$1(P, P.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          null !== d2.tail && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g2), null !== a) {
            if (b2.flags |= 64, f2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), null === d2.tail && "hidden" === d2.tailMode && !g2.alternate && !lh)
              return b2 = b2.lastEffect = d2.lastEffect, null !== b2 && (b2.nextEffect = null), null;
          } else
            2 * O() - d2.renderingStartTime > Ji && 1073741824 !== c2 && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
      }
      return null !== d2.tail ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O(), c2.sibling = null, b2 = P.current, I$1(P, f2 ? b2 & 1 | 2 : b2 & 1), c2) : null;
    case 23:
    case 24:
      return Ki(), null !== a && null !== a.memoizedState !== (null !== b2.memoizedState) && "unstable-defer-without-hiding" !== d2.mode && (b2.flags |= 4), null;
  }
  throw Error(y$2(156, b2.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b2 = a.flags;
      return b2 & 4096 ? (a.flags = b2 & -4097 | 64, a) : null;
    case 3:
      fh();
      H$1(N);
      H$1(M);
      uh();
      b2 = a.flags;
      if (0 !== (b2 & 64))
        throw Error(y$2(285));
      a.flags = b2 & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H$1(P), b2 = a.flags, b2 & 4096 ? (a.flags = b2 & -4097 | 64, a) : null;
    case 19:
      return H$1(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Qa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2 };
}
function Ni(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Oi = "function" === typeof WeakMap ? WeakMap : Map;
function Pi(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Qi || (Qi = true, Ri = d2);
    Ni(a, b2);
  };
  return c2;
}
function Si(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      Ni(a, b2);
      return d2(e2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    "function" !== typeof d2 && (null === Ti ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b2));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
var Ui = "function" === typeof WeakSet ? WeakSet : Set;
function Vi(a) {
  var b2 = a.ref;
  if (null !== b2)
    if ("function" === typeof b2)
      try {
        b2(null);
      } catch (c2) {
        Wi(a, c2);
      }
    else
      b2.current = null;
}
function Xi(a, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && null !== a) {
        var c2 = a.memoizedProps, d2 = a.memoizedState;
        a = b2.stateNode;
        b2 = a.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
        a.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y$2(163));
}
function Yi(a, b2, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        a = b2 = b2.next;
        do {
          if (3 === (a.tag & 3)) {
            var d2 = a.create;
            a.destroy = d2();
          }
          a = a.next;
        } while (a !== b2);
      }
      b2 = c2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        a = b2 = b2.next;
        do {
          var e2 = a;
          d2 = e2.next;
          e2 = e2.tag;
          0 !== (e2 & 4) && 0 !== (e2 & 1) && (Zi(c2, a), $i(c2, a));
          a = d2;
        } while (a !== b2);
      }
      return;
    case 1:
      a = c2.stateNode;
      c2.flags & 4 && (null === b2 ? a.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a.componentDidUpdate(
        d2,
        b2.memoizedState,
        a.__reactInternalSnapshotBeforeUpdate
      )));
      b2 = c2.updateQueue;
      null !== b2 && Eg(c2, b2, a);
      return;
    case 3:
      b2 = c2.updateQueue;
      if (null !== b2) {
        a = null;
        if (null !== c2.child)
          switch (c2.child.tag) {
            case 5:
              a = c2.child.stateNode;
              break;
            case 1:
              a = c2.child.stateNode;
          }
        Eg(c2, b2, a);
      }
      return;
    case 5:
      a = c2.stateNode;
      null === b2 && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      null === c2.memoizedState && (c2 = c2.alternate, null !== c2 && (c2 = c2.memoizedState, null !== c2 && (c2 = c2.dehydrated, null !== c2 && Cc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y$2(163));
}
function aj(a, b2) {
  for (var c2 = a; ; ) {
    if (5 === c2.tag) {
      var d2 = c2.stateNode;
      if (b2)
        d2 = d2.style, "function" === typeof d2.setProperty ? d2.setProperty("display", "none", "important") : d2.display = "none";
      else {
        d2 = c2.stateNode;
        var e2 = c2.memoizedProps.style;
        e2 = void 0 !== e2 && null !== e2 && e2.hasOwnProperty("display") ? e2.display : null;
        d2.style.display = sb("display", e2);
      }
    } else if (6 === c2.tag)
      c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
    else if ((23 !== c2.tag && 24 !== c2.tag || null === c2.memoizedState || c2 === a) && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === a)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === a)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function bj(a, b2) {
  if (Mf && "function" === typeof Mf.onCommitFiberUnmount)
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b2.updateQueue;
      if (null !== a && (a = a.lastEffect, null !== a)) {
        var c2 = a = a.next;
        do {
          var d2 = c2, e2 = d2.destroy;
          d2 = d2.tag;
          if (void 0 !== e2)
            if (0 !== (d2 & 4))
              Zi(b2, c2);
            else {
              d2 = b2;
              try {
                e2();
              } catch (f2) {
                Wi(d2, f2);
              }
            }
          c2 = c2.next;
        } while (c2 !== a);
      }
      break;
    case 1:
      Vi(b2);
      a = b2.stateNode;
      if ("function" === typeof a.componentWillUnmount)
        try {
          a.props = b2.memoizedProps, a.state = b2.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(
            b2,
            f2
          );
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a, b2);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function fj(a) {
  a: {
    for (var b2 = a.return; null !== b2; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y$2(160));
  }
  var c2 = b2;
  b2 = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d2 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    default:
      throw Error(y$2(161));
  }
  c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
  a:
    b:
      for (c2 = a; ; ) {
        for (; null === c2.sibling; ) {
          if (null === c2.return || ej(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; 5 !== c2.tag && 6 !== c2.tag && 18 !== c2.tag; ) {
          if (c2.flags & 2)
            continue b;
          if (null === c2.child || 4 === c2.tag)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.flags & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d2 ? gj(a, c2, b2) : hj(a, c2, b2);
}
function gj(a, b2, c2) {
  var d2 = a.tag, e2 = 5 === d2 || 6 === d2;
  if (e2)
    a = e2 ? a.stateNode : a.stateNode.instance, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = jf));
  else if (4 !== d2 && (a = a.child, null !== a))
    for (gj(a, b2, c2), a = a.sibling; null !== a; )
      gj(a, b2, c2), a = a.sibling;
}
function hj(a, b2, c2) {
  var d2 = a.tag, e2 = 5 === d2 || 6 === d2;
  if (e2)
    a = e2 ? a.stateNode : a.stateNode.instance, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (4 !== d2 && (a = a.child, null !== a))
    for (hj(a, b2, c2), a = a.sibling; null !== a; )
      hj(a, b2, c2), a = a.sibling;
}
function cj(a, b2) {
  for (var c2 = b2, d2 = false, e2, f2; ; ) {
    if (!d2) {
      d2 = c2.return;
      a:
        for (; ; ) {
          if (null === d2)
            throw Error(y$2(160));
          e2 = d2.stateNode;
          switch (d2.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
            case 4:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
          }
          d2 = d2.return;
        }
      d2 = true;
    }
    if (5 === c2.tag || 6 === c2.tag) {
      a:
        for (var g2 = a, h2 = c2, k2 = h2; ; )
          if (bj(g2, k2), null !== k2.child && 4 !== k2.tag)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h2)
              break a;
            for (; null === k2.sibling; ) {
              if (null === k2.return || k2.return === h2)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f2 ? (g2 = e2, h2 = c2.stateNode, 8 === g2.nodeType ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e2.removeChild(c2.stateNode);
    } else if (4 === c2.tag) {
      if (null !== c2.child) {
        e2 = c2.stateNode.containerInfo;
        f2 = true;
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
    } else if (bj(a, c2), null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
      4 === c2.tag && (d2 = false);
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function ij(a, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c2 = b2.updateQueue;
      c2 = null !== c2 ? c2.lastEffect : null;
      if (null !== c2) {
        var d2 = c2 = c2.next;
        do
          3 === (d2.tag & 3) && (a = d2.destroy, d2.destroy = void 0, void 0 !== a && a()), d2 = d2.next;
        while (d2 !== c2);
      }
      return;
    case 1:
      return;
    case 5:
      c2 = b2.stateNode;
      if (null != c2) {
        d2 = b2.memoizedProps;
        var e2 = null !== a ? a.memoizedProps : d2;
        a = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (null !== f2) {
          c2[xf] = d2;
          "input" === a && "radio" === d2.type && null != d2.name && $a(c2, d2);
          wb(a, e2);
          b2 = wb(a, d2);
          for (e2 = 0; e2 < f2.length; e2 += 2) {
            var g2 = f2[e2], h2 = f2[e2 + 1];
            "style" === g2 ? tb(c2, h2) : "dangerouslySetInnerHTML" === g2 ? ob(c2, h2) : "children" === g2 ? pb(c2, h2) : qa(c2, g2, h2, b2);
          }
          switch (a) {
            case "input":
              ab(c2, d2);
              break;
            case "textarea":
              ib(c2, d2);
              break;
            case "select":
              a = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, null != f2 ? fb(c2, !!d2.multiple, f2, false) : a !== !!d2.multiple && (null != d2.defaultValue ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (null === b2.stateNode)
        throw Error(y$2(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c2 = b2.stateNode;
      c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
      return;
    case 12:
      return;
    case 13:
      null !== b2.memoizedState && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, null !== b2.memoizedState);
      return;
  }
  throw Error(y$2(163));
}
function kj(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    null === c2 && (c2 = a.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d2 = lj.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function mj(a, b2) {
  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b2 = b2.memoizedState, null !== b2 && null === b2.dehydrated) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return 0 !== (X & 48) ? O() : -1 !== Fj ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if (0 === (a & 2))
    return 1;
  if (0 === (a & 4))
    return 99 === eg() ? 1 : 2;
  0 === Gj && (Gj = tj);
  if (0 !== kg.transition) {
    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
    a = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    0 === b2 && (a = 4186112 & ~a, b2 = a & -a, 0 === b2 && (b2 = 8192));
    return b2;
  }
  a = eg();
  0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b2, c2) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y$2(185));
  a = Kj(a, b2);
  if (null === a)
    return null;
  $c(a, b2, c2);
  a === U && (Hi |= b2, 4 === V && Ii(a, W));
  var d2 = eg();
  1 === b2 ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c2), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d2 && 99 !== d2 || (null === Cj ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c2));
  vj = a;
}
function Kj(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
function Mj(a, b2) {
  for (var c2 = a.callbackNode, d2 = a.suspendedLanes, e2 = a.pingedLanes, f2 = a.expirationTimes, g2 = a.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f2[h2];
    if (-1 === l2) {
      if (0 === (k2 & d2) || 0 !== (k2 & e2)) {
        l2 = b2;
        Rc(k2);
        var n2 = F$1;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a.expiredLanes |= k2);
    g2 &= ~k2;
  }
  d2 = Uc(a, a === U ? W : 0);
  b2 = F$1;
  if (0 === d2)
    null !== c2 && (c2 !== Zf && Pf(c2), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (null !== c2) {
      if (a.callbackPriority === b2)
        return;
      c2 !== Zf && Pf(c2);
    }
    15 === b2 ? (c2 = Lj.bind(null, a), null === ag ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : 14 === b2 ? c2 = hg(99, Lj.bind(null, a)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a)));
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if (0 !== (X & 48))
    throw Error(y$2(327));
  var b2 = a.callbackNode;
  if (Oj() && a.callbackNode !== b2)
    return null;
  var c2 = Uc(a, a === U ? W : 0);
  if (0 === c2)
    return null;
  var d2 = c2;
  var e2 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d2)
    wj(), Qj(a, d2);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e2;
  null !== Y ? d2 = 0 : (U = null, W = 0, d2 = V);
  if (0 !== (tj & Hi))
    Qj(a, 0);
  else if (0 !== d2) {
    2 === d2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c2 = Wc(a), 0 !== c2 && (d2 = Tj(a, c2)));
    if (1 === d2)
      throw b2 = sj, Qj(a, 0), Ii(a, c2), Mj(a, O()), b2;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c2;
    switch (d2) {
      case 0:
      case 1:
        throw Error(y$2(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c2);
        if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O(), 10 < d2)) {
          if (0 !== Uc(a, 0))
            break;
          e2 = a.suspendedLanes;
          if ((e2 & c2) !== c2) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e2;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d2);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c2);
        if ((c2 & 4186112) === c2)
          break;
        d2 = a.eventTimes;
        for (e2 = -1; 0 < c2; ) {
          var g2 = 31 - Vc(c2);
          f2 = 1 << g2;
          g2 = d2[g2];
          g2 > e2 && (e2 = g2);
          c2 &= ~f2;
        }
        c2 = e2;
        c2 = O() - c2;
        c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
        if (10 < c2) {
          a.timeoutHandle = of(Uj.bind(null, a), c2);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y$2(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b2 ? Nj.bind(null, a) : null;
}
function Ii(a, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - Vc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Lj(a) {
  if (0 !== (X & 48))
    throw Error(y$2(327));
  Oj();
  if (a === U && 0 !== (a.expiredLanes & W)) {
    var b2 = W;
    var c2 = Tj(a, b2);
    0 !== (tj & Hi) && (b2 = Uc(a, b2), c2 = Tj(a, b2));
  } else
    b2 = Uc(a, 0), c2 = Tj(a, b2);
  0 !== a.tag && 2 === c2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b2 = Wc(a), 0 !== b2 && (c2 = Tj(a, b2)));
  if (1 === c2)
    throw c2 = sj, Qj(a, 0), Ii(a, b2), Mj(a, O()), c2;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (null !== Cj) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b2) {
  var c2 = X;
  X |= 1;
  try {
    return a(b2);
  } finally {
    X = c2, 0 === X && (wj(), ig());
  }
}
function Xj(a, b2) {
  var c2 = X;
  X &= -2;
  X |= 8;
  try {
    return a(b2);
  } finally {
    X = c2, 0 === X && (wj(), ig());
  }
}
function ni(a, b2) {
  I$1(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H$1(rj);
}
function Qj(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  -1 !== c2 && (a.timeoutHandle = -1, pf(c2));
  if (null !== Y)
    for (c2 = Y.return; null !== c2; ) {
      var d2 = c2;
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && Gf();
          break;
        case 3:
          fh();
          H$1(N);
          H$1(M);
          uh();
          break;
        case 5:
          hh(d2);
          break;
        case 4:
          fh();
          break;
        case 13:
          H$1(P);
          break;
        case 19:
          H$1(P);
          break;
        case 10:
          rg(d2);
          break;
        case 23:
        case 24:
          Ki();
      }
      c2 = c2.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b2) {
  do {
    var c2 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d2 = R.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (null === c2 || null === c2.return) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2;
          if (0 === (h2.mode & 2)) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = 0 !== (P.current & 1), p2 = g2;
          do {
            var C2;
            if (C2 = 13 === p2.tag) {
              var x2 = p2.memoizedState;
              if (null !== x2)
                C2 = null !== x2.dehydrated ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = void 0 === w2.fallback ? false : true !== w2.unstable_avoidThisFallback ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (null === z2) {
                var u2 = /* @__PURE__ */ new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if (0 === (p2.mode & 2)) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (1 === h2.tag)
                  if (null === h2.alternate)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h2 = b2;
              var q2 = f2.pingCache;
              null === q2 ? (q2 = f2.pingCache = new Oi(), k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), void 0 === k2 && (k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)));
              if (!k2.has(h2)) {
                k2.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b2;
              break a;
            }
            p2 = p2.return;
          } while (null !== p2);
          k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        5 !== V && (V = 2);
        k2 = Mi(k2, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k2;
              p2.flags |= 4096;
              b2 &= -b2;
              p2.lanes |= b2;
              var J2 = Pi(p2, f2, b2);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k2;
              var K2 = p2.type, Q2 = p2.stateNode;
              if (0 === (p2.flags & 64) && ("function" === typeof K2.getDerivedStateFromError || null !== Q2 && "function" === typeof Q2.componentDidCatch && (null === Ti || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b2 &= -b2;
                p2.lanes |= b2;
                var L2 = Si(p2, f2, b2);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (null !== p2);
      }
      Zj(c2);
    } catch (va) {
      b2 = va;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return null === a ? Gh : a;
}
function Tj(a, b2) {
  var c2 = X;
  X |= 16;
  var d2 = Pj();
  U === a && W === b2 || Qj(a, b2);
  do
    try {
      ak();
      break;
    } catch (e2) {
      Sj(a, e2);
    }
  while (1);
  qg();
  X = c2;
  oj.current = d2;
  if (null !== Y)
    throw Error(y$2(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; null !== Y; )
    bk(Y);
}
function Rj() {
  for (; null !== Y && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b2 = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Zj(a) : Y = b2;
  pj.current = null;
}
function Zj(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 2048)) {
      c2 = Gi(c2, b2, qj);
      if (null !== c2) {
        Y = c2;
        return;
      }
      c2 = b2;
      if (24 !== c2.tag && 23 !== c2.tag || null === c2.memoizedState || 0 !== (qj & 1073741824) || 0 === (c2.mode & 4)) {
        for (var d2 = 0, e2 = c2.child; null !== e2; )
          d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
        c2.childLanes = d2;
      }
      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b2.firstEffect), null !== b2.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b2.firstEffect), a.lastEffect = b2.lastEffect), 1 < b2.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b2 : a.firstEffect = b2, a.lastEffect = b2));
    } else {
      c2 = Li(b2);
      if (null !== c2) {
        c2.flags &= 2047;
        Y = c2;
        return;
      }
      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (null !== b2);
  0 === V && (V = 5);
}
function Uj(a) {
  var b2 = eg();
  gg(99, dk.bind(null, a, b2));
  return null;
}
function dk(a, b2) {
  do
    Oj();
  while (null !== yj);
  if (0 !== (X & 48))
    throw Error(y$2(327));
  var c2 = a.finishedWork;
  if (null === c2)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current)
    throw Error(y$2(177));
  a.callbackNode = null;
  var d2 = c2.lanes | c2.childLanes, e2 = d2, f2 = a.pendingLanes & ~e2;
  a.pendingLanes = e2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e2;
  a.mutableReadLanes &= e2;
  a.entangledLanes &= e2;
  e2 = a.entanglements;
  for (var g2 = a.eventTimes, h2 = a.expirationTimes; 0 < f2; ) {
    var k2 = 31 - Vc(f2), l2 = 1 << k2;
    e2[k2] = 0;
    g2[k2] = -1;
    h2[k2] = -1;
    f2 &= ~l2;
  }
  null !== Cj && 0 === (d2 & 24) && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c2.flags ? null !== c2.lastEffect ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
  if (null !== d2) {
    e2 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && 0 !== l2.rangeCount) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k2.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || 0 !== f2 && 3 !== w2.nodeType || (A2 = n2 + f2);
                  w2 !== k2 || 0 !== l2 && 3 !== w2.nodeType || (p2 = n2 + l2);
                  3 === w2.nodeType && (n2 += w2.nodeValue.length);
                  if (null === (u2 = w2.firstChild))
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k2 && ++x2 === l2 && (p2 = n2);
                  if (null !== (u2 = w2.nextSibling))
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = -1 === A2 || -1 === p2 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d2;
    do
      try {
        ek();
      } catch (va) {
        if (null === Z)
          throw Error(y$2(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    Ij = null;
    Z = d2;
    do
      try {
        for (g2 = a; null !== Z; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (null !== q2) {
              var v2 = q2.ref;
              null !== v2 && ("function" === typeof v2 ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              null !== J2 && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (null === Z)
          throw Error(y$2(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      null !== g2 && Oe(t2) && (q2 = g2.start, v2 = g2.end, void 0 === v2 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = void 0 === g2.end ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (1 !== v2.rangeCount || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        1 === v2.nodeType && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      "function" === typeof t2.focus && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c2;
    Z = d2;
    do
      try {
        for (t2 = a; null !== Z; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (null !== Q2) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              "function" === typeof Q2 ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (null === Z)
          throw Error(y$2(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    Z = null;
    $f();
    X = e2;
  } else
    a.current = c2;
  if (xj)
    xj = false, yj = a, zj = b2;
  else
    for (Z = d2; null !== Z; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b2;
  d2 = a.pendingLanes;
  0 === d2 && (Ti = null);
  1 === d2 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c2 = c2.stateNode;
  if (Mf && "function" === typeof Mf.onCommitFiberRoot)
    try {
      Mf.onCommitFiberRoot(Lf, c2, void 0, 64 === (c2.current.flags & 64));
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if (0 !== (X & 8))
    return null;
  ig();
  return null;
}
function ek() {
  for (; null !== Z; ) {
    var a = Z.alternate;
    Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = true) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b2 = Z.flags;
    0 !== (b2 & 256) && Xi(a, Z);
    0 === (b2 & 512) || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (90 !== zj) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b2) {
  Aj.push(b2, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b2) {
  Bj.push(b2, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (null === yj)
    return false;
  var a = yj;
  yj = null;
  if (0 !== (X & 48))
    throw Error(y$2(331));
  var b2 = X;
  X |= 32;
  var c2 = Bj;
  Bj = [];
  for (var d2 = 0; d2 < c2.length; d2 += 2) {
    var e2 = c2[d2], f2 = c2[d2 + 1], g2 = e2.destroy;
    e2.destroy = void 0;
    if ("function" === typeof g2)
      try {
        g2();
      } catch (k2) {
        if (null === f2)
          throw Error(y$2(330));
        Wi(f2, k2);
      }
  }
  c2 = Aj;
  Aj = [];
  for (d2 = 0; d2 < c2.length; d2 += 2) {
    e2 = c2[d2];
    f2 = c2[d2 + 1];
    try {
      var h2 = e2.create;
      e2.destroy = h2();
    } catch (k2) {
      if (null === f2)
        throw Error(y$2(330));
      Wi(f2, k2);
    }
  }
  for (h2 = a.current.firstEffect; null !== h2; )
    a = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a;
  X = b2;
  ig();
  return true;
}
function gk(a, b2, c2) {
  b2 = Mi(c2, b2);
  b2 = Pi(a, b2, 1);
  Ag(a, b2);
  b2 = Hg();
  a = Kj(a, 1);
  null !== a && ($c(a, 1, b2), Mj(a, b2));
}
function Wi(a, b2) {
  if (3 === a.tag)
    gk(a, a, b2);
  else
    for (var c2 = a.return; null !== c2; ) {
      if (3 === c2.tag) {
        gk(c2, a, b2);
        break;
      } else if (1 === c2.tag) {
        var d2 = c2.stateNode;
        if ("function" === typeof c2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ti || !Ti.has(d2))) {
          a = Mi(b2, a);
          var e2 = Si(c2, a, 1);
          Ag(c2, e2);
          e2 = Hg();
          c2 = Kj(c2, 1);
          if (null !== c2)
            $c(c2, 1, e2), Mj(c2, e2);
          else if ("function" === typeof d2.componentDidCatch && (null === Ti || !Ti.has(d2)))
            try {
              d2.componentDidCatch(b2, a);
            } catch (f2) {
            }
          break;
        }
      }
      c2 = c2.return;
    }
}
function Yj(a, b2, c2) {
  var d2 = a.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = Hg();
  a.pingedLanes |= a.suspendedLanes & c2;
  U === a && (W & c2) === c2 && (4 === V || 3 === V && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c2);
  Mj(a, b2);
}
function lj(a, b2) {
  var c2 = a.stateNode;
  null !== c2 && c2.delete(b2);
  b2 = 0;
  0 === b2 && (b2 = a.mode, 0 === (b2 & 2) ? b2 = 1 : 0 === (b2 & 4) ? b2 = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b2 = Yc(62914560 & ~Gj), 0 === b2 && (b2 = 4194304)));
  c2 = Hg();
  a = Kj(a, b2);
  null !== a && ($c(a, b2, c2), Mj(a, c2));
}
var ck;
ck = function(a, b2, c2) {
  var d2 = b2.lanes;
  if (null !== a)
    if (a.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if (0 !== (c2 & d2))
      ug = 0 !== (a.flags & 16384) ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d2 = b2.memoizedProps.value;
          var e2 = b2.type._context;
          I$1(mg, e2._currentValue);
          e2._currentValue = d2;
          break;
        case 13:
          if (null !== b2.memoizedState) {
            if (0 !== (c2 & b2.child.childLanes))
              return ti(a, b2, c2);
            I$1(P, P.current & 1);
            b2 = hi(a, b2, c2);
            return null !== b2 ? b2.sibling : null;
          }
          I$1(P, P.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b2.childLanes);
          if (0 !== (a.flags & 64)) {
            if (d2)
              return Ai(a, b2, c2);
            b2.flags |= 64;
          }
          e2 = b2.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          I$1(P, P.current);
          if (d2)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a, b2, c2);
      }
      return hi(a, b2, c2);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d2 = b2.type;
      null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      a = b2.pendingProps;
      e2 = Ef(b2, M.current);
      tg(b2, c2);
      e2 = Ch(null, b2, d2, a, e2, c2);
      b2.flags |= 1;
      if ("object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d2)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null;
        xg(b2);
        var g2 = d2.getDerivedStateFromProps;
        "function" === typeof g2 && Gg(b2, d2, g2, a);
        e2.updater = Kg;
        b2.stateNode = e2;
        e2._reactInternals = b2;
        Og(b2, d2, a, c2);
        b2 = qi(null, b2, d2, true, f2, c2);
      } else
        b2.tag = 0, fi(null, b2, e2, c2), b2 = b2.child;
      return b2;
    case 16:
      e2 = b2.elementType;
      a: {
        null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
        a = b2.pendingProps;
        f2 = e2._init;
        e2 = f2(e2._payload);
        b2.type = e2;
        f2 = b2.tag = hk(e2);
        a = lg(e2, a);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e2, a, c2);
            break a;
          case 1:
            b2 = pi(null, b2, e2, a, c2);
            break a;
          case 11:
            b2 = gi(null, b2, e2, a, c2);
            break a;
          case 14:
            b2 = ii(null, b2, e2, lg(e2.type, a), d2, c2);
            break a;
        }
        throw Error(y$2(306, e2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), li(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), pi(a, b2, d2, e2, c2);
    case 3:
      ri(b2);
      d2 = b2.updateQueue;
      if (null === a || null === d2)
        throw Error(y$2(282));
      d2 = b2.pendingProps;
      e2 = b2.memoizedState;
      e2 = null !== e2 ? e2.element : null;
      yg(a, b2);
      Cg(b2, d2, null, c2);
      d2 = b2.memoizedState.element;
      if (d2 === e2)
        sh(), b2 = hi(a, b2, c2);
      else {
        e2 = b2.stateNode;
        if (f2 = e2.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a = e2.mutableSourceEagerHydrationData;
          if (null != a)
            for (e2 = 0; e2 < a.length; e2 += 2)
              f2 = a[e2], f2._workInProgressVersionPrimary = a[e2 + 1], th.push(f2);
          c2 = Zg(b2, null, d2, c2);
          for (b2.child = c2; c2; )
            c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
        } else
          fi(a, b2, d2, c2), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), null === a && ph(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, nf(d2, e2) ? g2 = null : null !== f2 && nf(d2, f2) && (b2.flags |= 16), oi(a, b2), fi(a, b2, g2, c2), b2.child;
    case 6:
      return null === a && ph(b2), null;
    case 13:
      return ti(a, b2, c2);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Yg(b2, null, d2, c2) : fi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), gi(a, b2, d2, e2, c2);
    case 7:
      return fi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return fi(
        a,
        b2,
        b2.pendingProps.children,
        c2
      ), b2.child;
    case 12:
      return fi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        g2 = b2.memoizedProps;
        f2 = e2.value;
        var h2 = b2.type._context;
        I$1(mg, h2._currentValue);
        h2._currentValue = f2;
        if (null !== g2)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : ("function" === typeof d2._calculateChangedBits ? d2._calculateChangedBits(h2, f2) : 1073741823) | 0, 0 === f2) {
            if (g2.children === e2.children && !N.current) {
              b2 = hi(a, b2, c2);
              break a;
            }
          } else
            for (h2 = b2.child, null !== h2 && (h2.return = b2); null !== h2; ) {
              var k2 = h2.dependencies;
              if (null !== k2) {
                g2 = h2.child;
                for (var l2 = k2.firstContext; null !== l2; ) {
                  if (l2.context === d2 && 0 !== (l2.observedBits & f2)) {
                    1 === h2.tag && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c2;
                    l2 = h2.alternate;
                    null !== l2 && (l2.lanes |= c2);
                    sg(h2.return, c2);
                    k2.lanes |= c2;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = 10 === h2.tag ? h2.type === b2.type ? null : h2.child : h2.child;
              if (null !== g2)
                g2.return = h2;
              else
                for (g2 = h2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (null !== h2) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, f2 = b2.pendingProps, d2 = f2.children, tg(b2, c2), e2 = vg(
        e2,
        f2.unstable_observedBits
      ), d2 = d2(e2), b2.flags |= 1, fi(a, b2, d2, c2), b2.child;
    case 14:
      return e2 = b2.type, f2 = lg(e2, b2.pendingProps), f2 = lg(e2.type, f2), ii(a, b2, e2, f2, d2, c2);
    case 15:
      return ki(a, b2, b2.type, b2.pendingProps, d2, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a = true, Jf(b2)) : a = false, tg(b2, c2), Mg(b2, d2, e2), Og(b2, d2, e2, c2), qi(null, b2, d2, true, a, c2);
    case 19:
      return Ai(a, b2, c2);
    case 23:
      return mi(a, b2, c2);
    case 24:
      return mi(a, b2, c2);
  }
  throw Error(y$2(156, b2.tag));
};
function ik(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b2, c2, d2) {
  return new ik(a, b2, c2, d2);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if ("function" === typeof a)
    return ji(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b2) {
  var c2 = a.alternate;
  null === c2 ? (c2 = nh(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function Vg(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if ("function" === typeof a)
    ji(a) && (g2 = 1);
  else if ("string" === typeof a)
    g2 = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c2.children, e2, f2, b2);
        case Ha:
          g2 = 8;
          e2 |= 16;
          break;
        case wa:
          g2 = 8;
          e2 |= 1;
          break;
        case xa:
          return a = nh(12, c2, b2, e2 | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c2, b2, e2), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c2, b2, e2), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c2, e2, f2, b2);
        case Ja:
          return a = nh(24, c2, b2, e2), a.elementType = Ja, a.lanes = f2, a;
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d2 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y$2(130, null == a ? a : typeof a, ""));
      }
  b2 = nh(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Xg(a, b2, c2, d2) {
  a = nh(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function vi(a, b2, c2, d2) {
  a = nh(23, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  return a;
}
function Ug(a, b2, c2) {
  a = nh(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function Wg(a, b2, c2) {
  b2 = nh(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function jk(a, b2, c2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: ta, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function lk(a, b2, c2, d2) {
  var e2 = b2.current, f2 = Hg(), g2 = Ig(e2);
  a:
    if (c2) {
      c2 = c2._reactInternals;
      b: {
        if (Zb(c2) !== c2 || 1 !== c2.tag)
          throw Error(y$2(170));
        var h2 = c2;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (null !== h2);
        throw Error(y$2(171));
      }
      if (1 === c2.tag) {
        var k2 = c2.type;
        if (Ff(k2)) {
          c2 = If(c2, k2, h2);
          break a;
        }
      }
      c2 = h2;
    } else
      c2 = Cf;
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  Ag(e2, b2);
  Jg(e2, g2, f2);
  return g2;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c2 = a.retryLane;
    a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function ok(a, b2) {
  nk(a, b2);
  (a = a.alternate) && nk(a, b2);
}
function pk() {
  return null;
}
function qk(a, b2, c2) {
  var d2 = null != c2 && null != c2.hydrationOptions && c2.hydrationOptions.mutableSources || null;
  c2 = new jk(a, b2, null != c2 && true === c2.hydrate);
  b2 = nh(3, null, null, 2 === b2 ? 7 : 1 === b2 ? 3 : 0);
  c2.current = b2;
  b2.stateNode = c2;
  xg(b2);
  a[ff] = c2.current;
  cf(8 === a.nodeType ? a.parentNode : a);
  if (d2)
    for (a = 0; a < d2.length; a++) {
      b2 = d2[a];
      var e2 = b2._getVersion;
      e2 = e2(b2._source);
      null == c2.mutableSourceEagerHydrationData ? c2.mutableSourceEagerHydrationData = [b2, e2] : c2.mutableSourceEagerHydrationData.push(b2, e2);
    }
  this._internalRoot = c2;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b2 = a.containerInfo;
  lk(null, a, null, function() {
    b2[ff] = null;
  });
};
function rk(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function sk(a, b2) {
  b2 || (b2 = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b2 = !(!b2 || 1 !== b2.nodeType || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c2; c2 = a.lastChild; )
      a.removeChild(c2);
  return new qk(a, 0, b2 ? { hydrate: true } : void 0);
}
function tk(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = mk(g2);
        h2.call(a2);
      };
    }
    lk(b2, g2, a, e2);
  } else {
    f2 = c2._reactRootContainer = sk(c2, d2);
    g2 = f2._internalRoot;
    if ("function" === typeof e2) {
      var k2 = e2;
      e2 = function() {
        var a2 = mk(g2);
        k2.call(a2);
      };
    }
    Xj(function() {
      lk(b2, g2, a, e2);
    });
  }
  return mk(g2);
}
ec = function(a) {
  if (13 === a.tag) {
    var b2 = Hg();
    Jg(a, 4, b2);
    ok(a, 4);
  }
};
fc = function(a) {
  if (13 === a.tag) {
    var b2 = Hg();
    Jg(a, 67108864, b2);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (13 === a.tag) {
    var b2 = Hg(), c2 = Ig(a);
    Jg(a, c2, b2);
    ok(a, c2);
  }
};
hc = function(a, b2) {
  return b2();
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      ab(a, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(y$2(90));
            Wa(d2);
            ab(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a, b2, c2, d2, e2) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b2, c2, d2, e2));
  } finally {
    X = f2, 0 === X && (wj(), ig());
  }
};
Ib = function() {
  0 === (X & 49) && (Vj(), Oj());
};
Jb = function(a, b2) {
  var c2 = X;
  X |= 2;
  try {
    return a(b2);
  } finally {
    X = c2, 0 === X && (wj(), ig());
  }
};
function uk(a, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y$2(200));
  return kk(a, b2, null, c2);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render)
      throw Error(y$2(188));
    throw Error(y$2(268, Object.keys(a)));
  }
  a = cc(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b2) {
  var c2 = X;
  if (0 !== (c2 & 48))
    return a(b2);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b2));
  } finally {
    X = c2, ig();
  }
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!rk(b2))
    throw Error(y$2(200));
  return tk(null, a, b2, true, c2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!rk(b2))
    throw Error(y$2(200));
  return tk(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y$2(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b2) {
  return uk(a, b2, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!rk(c2))
    throw Error(y$2(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(y$2(38));
  return tk(a, b2, c2, false, d2);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function isPlainObject(item) {
  return item && _typeof$1(item) === "object" && item.constructor === Object;
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function(key) {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
function toPrimitive(t2, r2) {
  if ("object" != _typeof$1(t2) || !t2)
    return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i = e2.call(t2, r2 || "default");
    if ("object" != _typeof$1(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i = toPrimitive(t2, "string");
  return "symbol" == _typeof$1(i) ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function formatMuiErrorMessage(code) {
  var url = "https://mui.com/production-error/?code=" + code;
  for (var i = 1; i < arguments.length; i += 1) {
    url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return "Minified Material-UI error #" + code + "; visit " + url + " for the full message.";
}
var reactIs_production_min$1 = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = 60103, c$1 = 60106, d$1 = 60107, e$1 = 60108, f$1 = 60114, g$1 = 60109, h$1 = 60110, k$1 = 60112, l$1 = 60113, m$1 = 60120, n$1 = 60115, p$1 = 60116, q$1 = 60121, r$2 = 60122, u = 60117, v$1 = 60129, w$1 = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x$1 = Symbol.for;
  b$1 = x$1("react.element");
  c$1 = x$1("react.portal");
  d$1 = x$1("react.fragment");
  e$1 = x$1("react.strict_mode");
  f$1 = x$1("react.profiler");
  g$1 = x$1("react.provider");
  h$1 = x$1("react.context");
  k$1 = x$1("react.forward_ref");
  l$1 = x$1("react.suspense");
  m$1 = x$1("react.suspense_list");
  n$1 = x$1("react.memo");
  p$1 = x$1("react.lazy");
  q$1 = x$1("react.block");
  r$2 = x$1("react.server.block");
  u = x$1("react.fundamental");
  v$1 = x$1("react.debug_trace_mode");
  w$1 = x$1("react.legacy_hidden");
}
function y$1(a) {
  if ("object" === typeof a && null !== a) {
    var t2 = a.$$typeof;
    switch (t2) {
      case b$1:
        switch (a = a.type, a) {
          case d$1:
          case f$1:
          case e$1:
          case l$1:
          case m$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h$1:
              case k$1:
              case p$1:
              case n$1:
              case g$1:
                return a;
              default:
                return t2;
            }
        }
      case c$1:
        return t2;
    }
  }
}
var z$1 = g$1, A$1 = b$1, B = k$1, C = d$1, D = p$1, E = n$1, F = c$1, G = f$1, H = e$1, I = l$1;
reactIs_production_min$1.ContextConsumer = h$1;
reactIs_production_min$1.ContextProvider = z$1;
reactIs_production_min$1.Element = A$1;
reactIs_production_min$1.ForwardRef = B;
reactIs_production_min$1.Fragment = C;
reactIs_production_min$1.Lazy = D;
reactIs_production_min$1.Memo = E;
reactIs_production_min$1.Portal = F;
reactIs_production_min$1.Profiler = G;
reactIs_production_min$1.StrictMode = H;
reactIs_production_min$1.Suspense = I;
reactIs_production_min$1.isAsyncMode = function() {
  return false;
};
reactIs_production_min$1.isConcurrentMode = function() {
  return false;
};
reactIs_production_min$1.isContextConsumer = function(a) {
  return y$1(a) === h$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return y$1(a) === g$1;
};
reactIs_production_min$1.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return y$1(a) === k$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return y$1(a) === d$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return y$1(a) === p$1;
};
reactIs_production_min$1.isMemo = function(a) {
  return y$1(a) === n$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return y$1(a) === c$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return y$1(a) === f$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return y$1(a) === e$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return y$1(a) === l$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d$1 || a === f$1 || a === v$1 || a === e$1 || a === l$1 || a === m$1 || a === w$1 || "object" === typeof a && null !== a && (a.$$typeof === p$1 || a.$$typeof === n$1 || a.$$typeof === g$1 || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === u || a.$$typeof === q$1 || a[0] === r$2) ? true : false;
};
reactIs_production_min$1.typeOf = y$1;
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
var pseudoClasses = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal, disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba, _options$productionPr = options.productionPrefix, productionPrefix = _options$productionPr === void 0 ? "jss" : _options$productionPr, _options$seed = options.seed, seed = _options$seed === void 0 ? "" : _options$seed;
  var seedPrefix = seed === "" ? "" : "".concat(seed, "-");
  var ruleCounter = 0;
  var getNextCounterId = function getNextCounterId2() {
    ruleCounter += 1;
    return ruleCounter;
  };
  return function(rule, styleSheet) {
    var name = styleSheet.options.name;
    if (name && name.indexOf("Mui") === 0 && !styleSheet.options.link && !disableGlobal) {
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }
      var prefix2 = "".concat(seedPrefix).concat(name, "-").concat(rule.key);
      if (!styleSheet.options.theme[nested] || seed !== "") {
        return prefix2;
      }
      return "".concat(prefix2, "-").concat(getNextCounterId());
    }
    {
      return "".concat(seedPrefix).concat(productionPrefix).concat(getNextCounterId());
    }
  };
}
function getThemeProps(params) {
  var theme = params.theme, name = params.name, props = params.props;
  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  }
  var defaultProps2 = theme.props[name];
  var propName;
  for (propName in defaultProps2) {
    if (props[propName] === void 0) {
      props[propName] = defaultProps2[propName];
    }
  }
  return props;
}
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && document.nodeType === 9;
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style2) {
  if (style2 == null || typeof style2 !== "object")
    return style2;
  if (Array.isArray(style2))
    return style2.map(cloneStyle);
  if (style2.constructor !== plainObjectConstrurctor)
    return style2;
  var newStyle = {};
  for (var name in style2) {
    newStyle[name] = cloneStyle(style2[name]);
  }
  return newStyle;
}
function createRule(name, decl, options) {
  if (name === void 0) {
    name = "unnamed";
  }
  var jss2 = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss2.plugins.onCreateRule(name, declCopy, options);
  if (rule)
    return rule;
  if (name[0] === "@")
    ;
  return null;
}
var join = function join2(value, by) {
  var result = "";
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "!important")
      break;
    if (result)
      result += by;
    result += value[i];
  }
  return result;
};
var toCssValue = function toCssValue2(value) {
  if (!Array.isArray(value))
    return value;
  var cssValue = "";
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === "!important")
        break;
      if (cssValue)
        cssValue += ", ";
      cssValue += join(value[i], " ");
    }
  } else
    cssValue = join(value, ", ");
  if (value[value.length - 1] === "!important") {
    cssValue += " !important";
  }
  return cssValue;
};
function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: "",
      space: ""
    };
  }
  return {
    linebreak: "\n",
    space: " "
  };
}
function indentStr(str, indent) {
  var result = "";
  for (var index2 = 0; index2 < indent; index2++) {
    result += "  ";
  }
  return result + str;
}
function toCss(selector, style2, options) {
  if (options === void 0) {
    options = {};
  }
  var result = "";
  if (!style2)
    return result;
  var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style2.fallbacks;
  if (options.format === false) {
    indent = -Infinity;
  }
  var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
  if (selector)
    indent++;
  if (fallbacks) {
    if (Array.isArray(fallbacks)) {
      for (var index2 = 0; index2 < fallbacks.length; index2++) {
        var fallback = fallbacks[index2];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            if (result)
              result += linebreak;
            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          if (result)
            result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }
  for (var _prop2 in style2) {
    var _value2 = style2[_prop2];
    if (_value2 != null && _prop2 !== "fallbacks") {
      if (result)
        result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  }
  if (!result && !options.allowEmpty)
    return result;
  if (!selector)
    return result;
  indent--;
  if (result)
    result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr("}", indent);
}
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
var escape = function(str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
};
var BaseStyleRule = /* @__PURE__ */ function() {
  function BaseStyleRule2(key, style2, options) {
    this.type = "style";
    this.isProcessed = false;
    var sheet = options.sheet, Renderer2 = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style2;
    if (sheet)
      this.renderer = sheet.renderer;
    else if (Renderer2)
      this.renderer = new Renderer2();
  }
  var _proto = BaseStyleRule2.prototype;
  _proto.prop = function prop(name, value, options) {
    if (value === void 0)
      return this.style[name];
    var force = options ? options.force : false;
    if (!force && this.style[name] === value)
      return this;
    var newValue = value;
    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }
    var isEmpty2 = newValue == null || newValue === false;
    var isDefined = name in this.style;
    if (isEmpty2 && !isDefined && !force)
      return this;
    var remove = isEmpty2 && isDefined;
    if (remove)
      delete this.style[name];
    else
      this.style[name] = newValue;
    if (this.renderable && this.renderer) {
      if (remove)
        this.renderer.removeProperty(this.renderable, name);
      else
        this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }
    var sheet = this.options.sheet;
    if (sheet && sheet.attached)
      ;
    return this;
  };
  return BaseStyleRule2;
}();
var StyleRule = /* @__PURE__ */ function(_BaseStyleRule) {
  _inheritsLoose(StyleRule2, _BaseStyleRule);
  function StyleRule2(key, style2, options) {
    var _this;
    _this = _BaseStyleRule.call(this, key, style2, options) || this;
    var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }
    return _this;
  }
  var _proto2 = StyleRule2.prototype;
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;
    if (renderer) {
      var json = this.toJSON();
      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }
    return this;
  };
  _proto2.toJSON = function toJSON() {
    var json = {};
    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== "object")
        json[prop] = value;
      else if (Array.isArray(value))
        json[prop] = toCssValue(value);
    }
    return json;
  };
  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };
  _createClass(StyleRule2, [{
    key: "selector",
    set: function set2(selector) {
      if (selector === this.selectorText)
        return;
      this.selectorText = selector;
      var renderer = this.renderer, renderable = this.renderable;
      if (!renderable || !renderer)
        return;
      var hasChanged = renderer.setSelector(renderable, selector);
      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    },
    get: function get2() {
      return this.selectorText;
    }
  }]);
  return StyleRule2;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style2, options) {
    if (key[0] === "@" || options.parent && options.parent.type === "keyframes") {
      return null;
    }
    return new StyleRule(key, style2, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
var ConditionalRule = /* @__PURE__ */ function() {
  function ConditionalRule2(key, styles23, options) {
    this.type = "conditional";
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : "unknown";
    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in styles23) {
      this.rules.add(name, styles23[name]);
    }
    this.rules.process();
  }
  var _proto = ConditionalRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.addRule = function addRule(name, style2, options) {
    var rule = this.rules.add(name, style2, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style2, options) {
    var newRule = this.rules.replace(name, style2, options);
    if (newRule)
      this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions.indent;
    if (options.children == null)
      options.children = defaultToStringOptions.children;
    if (options.children === false) {
      return this.query + " {}";
    }
    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
  };
  return ConditionalRule2;
}();
var keyRegExp = /@container|@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule2(key, styles23, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles23, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
var KeyframesRule = /* @__PURE__ */ function() {
  function KeyframesRule2(key, frames, options) {
    this.type = "keyframes";
    this.at = "@keyframes";
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);
    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = "noname";
    }
    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }
    this.rules.process();
  }
  var _proto = KeyframesRule2.prototype;
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions$1.indent;
    if (options.children == null)
      options.children = defaultToStringOptions$1.children;
    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }
    var children = this.rules.toString(options);
    if (children)
      children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };
  return KeyframesRule2;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp$1 = /\$([\w-]+)/g;
var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes) {
  if (typeof val === "string") {
    return val.replace(refRegExp$1, function(match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }
      return match;
    });
  }
  return val;
};
var replaceRef = function replaceRef2(style2, prop, keyframes) {
  var value = style2[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);
  if (refKeyframe !== value) {
    style2[prop] = refKeyframe;
  }
};
var pluginKeyframesRule = {
  onCreateRule: function onCreateRule3(key, frames, options) {
    return typeof key === "string" && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  onProcessStyle: function onProcessStyle(style2, rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return style2;
    if ("animation-name" in style2)
      replaceRef(style2, "animation-name", sheet.keyframes);
    if ("animation" in style2)
      replaceRef(style2, "animation", sheet.keyframes);
    return style2;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;
    if (!sheet) {
      return val;
    }
    switch (prop) {
      case "animation":
        return findReferencedKeyframe(val, sheet.keyframes);
      case "animation-name":
        return findReferencedKeyframe(val, sheet.keyframes);
      default:
        return val;
    }
  }
};
var KeyframeRule = /* @__PURE__ */ function(_BaseStyleRule) {
  _inheritsLoose(KeyframeRule2, _BaseStyleRule);
  function KeyframeRule2() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }
  var _proto = KeyframeRule2.prototype;
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };
  return KeyframeRule2;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule4(key, style2, options) {
    if (options.parent && options.parent.type === "keyframes") {
      return new KeyframeRule(key, style2, options);
    }
    return null;
  }
};
var FontFaceRule = /* @__PURE__ */ function() {
  function FontFaceRule2(key, style2, options) {
    this.type = "font-face";
    this.at = "@font-face";
    this.isProcessed = false;
    this.key = key;
    this.style = style2;
    this.options = options;
  }
  var _proto = FontFaceRule2.prototype;
  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (Array.isArray(this.style)) {
      var str = "";
      for (var index2 = 0; index2 < this.style.length; index2++) {
        str += toCss(this.at, this.style[index2]);
        if (this.style[index2 + 1])
          str += linebreak;
      }
      return str;
    }
    return toCss(this.at, this.style, options);
  };
  return FontFaceRule2;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule5(key, style2, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style2, options) : null;
  }
};
var ViewportRule = /* @__PURE__ */ function() {
  function ViewportRule2(key, style2, options) {
    this.type = "viewport";
    this.at = "@viewport";
    this.isProcessed = false;
    this.key = key;
    this.style = style2;
    this.options = options;
  }
  var _proto = ViewportRule2.prototype;
  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };
  return ViewportRule2;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule6(key, style2, options) {
    return key === "@viewport" || key === "@-ms-viewport" ? new ViewportRule(key, style2, options) : null;
  }
};
var SimpleRule = /* @__PURE__ */ function() {
  function SimpleRule2(key, value, options) {
    this.type = "simple";
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  var _proto = SimpleRule2.prototype;
  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = "";
      for (var index2 = 0; index2 < this.value.length; index2++) {
        str += this.key + " " + this.value[index2] + ";";
        if (this.value[index2 + 1])
          str += "\n";
      }
      return str;
    }
    return this.key + " " + this.value + ";";
  };
  return SimpleRule2;
}();
var keysMap = {
  "@charset": true,
  "@import": true,
  "@namespace": true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule7(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins$1 = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
};
var RuleList = /* @__PURE__ */ function() {
  function RuleList2(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  var _proto = RuleList2.prototype;
  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss2 = _this$options.jss, Renderer2 = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
    var options = _extends({
      classes: this.classes,
      parent,
      sheet,
      jss: jss2,
      Renderer: Renderer2,
      generateId,
      scoped,
      name,
      keyframes: this.keyframes,
      selector: void 0
    }, ruleOptions);
    var key = name;
    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    }
    this.raw[key] = decl;
    if (key in this.classes) {
      options.selector = "." + escape(this.classes[key]);
    }
    var rule = createRule(key, decl, options);
    if (!rule)
      return null;
    this.register(rule);
    var index2 = options.index === void 0 ? this.index.length : options.index;
    this.index.splice(index2, 0, rule);
    return rule;
  };
  _proto.replace = function replace(name, decl, ruleOptions) {
    var oldRule = this.get(name);
    var oldIndex = this.index.indexOf(oldRule);
    if (oldRule) {
      this.remove(oldRule);
    }
    var options = ruleOptions;
    if (oldIndex !== -1)
      options = _extends({}, ruleOptions, {
        index: oldIndex
      });
    return this.add(name, decl, options);
  };
  _proto.get = function get2(nameOrSelector) {
    return this.map[nameOrSelector];
  };
  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  };
  _proto.process = function process2() {
    var plugins2 = this.options.jss.plugins;
    this.index.slice(0).forEach(plugins2.onProcessRule, plugins2);
  };
  _proto.register = function register(rule) {
    this.map[rule.key] = rule;
    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id)
        this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  };
  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];
    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  };
  _proto.update = function update2() {
    var name;
    var data;
    var options;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
      name = arguments.length <= 0 ? void 0 : arguments[0];
      data = arguments.length <= 1 ? void 0 : arguments[1];
      options = arguments.length <= 2 ? void 0 : arguments[2];
    } else {
      data = arguments.length <= 0 ? void 0 : arguments[0];
      options = arguments.length <= 1 ? void 0 : arguments[1];
      name = null;
    }
    if (name) {
      this.updateOne(this.get(name), data, options);
    } else {
      for (var index2 = 0; index2 < this.index.length; index2++) {
        this.updateOne(this.index[index2], data, options);
      }
    }
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }
    var _this$options2 = this.options, plugins2 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
    if (rule.rules instanceof RuleList2) {
      rule.rules.update(data, options);
      return;
    }
    var style2 = rule.style;
    plugins2.onUpdate(data, rule, sheet, options);
    if (options.process && style2 && style2 !== rule.style) {
      plugins2.onProcessStyle(rule.style, rule, sheet);
      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style2[prop];
        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      }
      for (var _prop in style2) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style2[_prop];
        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  };
  _proto.toString = function toString(options) {
    var str = "";
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    for (var index2 = 0; index2 < this.index.length; index2++) {
      var rule = this.index[index2];
      var css2 = rule.toString(options);
      if (!css2 && !link)
        continue;
      if (str)
        str += linebreak;
      str += css2;
    }
    return str;
  };
  return RuleList2;
}();
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(styles23, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });
    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }
    this.rules = new RuleList(this.options);
    for (var name in styles23) {
      this.rules.add(name, styles23[name]);
    }
    this.rules.process();
  }
  var _proto = StyleSheet2.prototype;
  _proto.attach = function attach2() {
    if (this.attached)
      return this;
    if (this.renderer)
      this.renderer.attach();
    this.attached = true;
    if (!this.deployed)
      this.deploy();
    return this;
  };
  _proto.detach = function detach2() {
    if (!this.attached)
      return this;
    if (this.renderer)
      this.renderer.detach();
    this.attached = false;
    return this;
  };
  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue;
    if (this.attached && !queue)
      this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    if (this.attached) {
      if (!this.deployed)
        return rule;
      if (queue)
        queue.push(rule);
      else {
        this.insertRule(rule);
        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = void 0;
        }
      }
      return rule;
    }
    this.deployed = false;
    return rule;
  };
  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
    var oldRule = this.rules.get(nameOrSelector);
    if (!oldRule)
      return this.addRule(nameOrSelector, decl, options);
    var newRule = this.rules.replace(nameOrSelector, decl, options);
    if (newRule) {
      this.options.jss.plugins.onProcessRule(newRule);
    }
    if (this.attached) {
      if (!this.deployed)
        return newRule;
      if (this.renderer) {
        if (!newRule) {
          this.renderer.deleteRule(oldRule);
        } else if (oldRule.renderable) {
          this.renderer.replaceRule(oldRule.renderable, newRule);
        }
      }
      return newRule;
    }
    this.deployed = false;
    return newRule;
  };
  _proto.insertRule = function insertRule2(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  };
  _proto.addRules = function addRules(styles23, options) {
    var added = [];
    for (var name in styles23) {
      var rule = this.addRule(name, styles23[name], options);
      if (rule)
        added.push(rule);
    }
    return added;
  };
  _proto.getRule = function getRule(nameOrSelector) {
    return this.rules.get(nameOrSelector);
  };
  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === "object" ? name : this.rules.get(name);
    if (!rule || this.attached && !rule.renderable) {
      return false;
    }
    this.rules.remove(rule);
    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }
    return true;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.deploy = function deploy() {
    if (this.renderer)
      this.renderer.deploy();
    this.deployed = true;
    return this;
  };
  _proto.update = function update2() {
    var _this$rules;
    (_this$rules = this.rules).update.apply(_this$rules, arguments);
    return this;
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return StyleSheet2;
}();
var PluginsRegistry = /* @__PURE__ */ function() {
  function PluginsRegistry2() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }
  var _proto = PluginsRegistry2.prototype;
  _proto.onCreateRule = function onCreateRule8(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule)
        return rule;
    }
    return null;
  };
  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed)
      return;
    var sheet = rule.options.sheet;
    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }
    if (rule.style)
      this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  };
  _proto.onProcessStyle = function onProcessStyle2(style2, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  };
  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  };
  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  };
  _proto.onChangeValue = function onChangeValue2(value, prop, rule) {
    var processedValue = value;
    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }
    return processedValue;
  };
  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: "external"
      };
    }
    var plugins2 = this.plugins[options.queue];
    if (plugins2.indexOf(newPlugin) !== -1) {
      return;
    }
    plugins2.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        }
      }
      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };
  return PluginsRegistry2;
}();
var SheetsRegistry = /* @__PURE__ */ function() {
  function SheetsRegistry2() {
    this.registry = [];
  }
  var _proto = SheetsRegistry2.prototype;
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index2 = sheet.options.index;
    if (registry.indexOf(sheet) !== -1)
      return;
    if (registry.length === 0 || index2 >= this.index) {
      registry.push(sheet);
      return;
    }
    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index2) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  };
  _proto.reset = function reset() {
    this.registry = [];
  };
  _proto.remove = function remove(sheet) {
    var index2 = this.registry.indexOf(sheet);
    this.registry.splice(index2, 1);
  };
  _proto.toString = function toString(_temp) {
    var _ref3 = _temp === void 0 ? {} : _temp, attached = _ref3.attached, options = _objectWithoutPropertiesLoose(_ref3, ["attached"]);
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    var css2 = "";
    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];
      if (attached != null && sheet.attached !== attached) {
        continue;
      }
      if (css2)
        css2 += linebreak;
      css2 += sheet.toString(options);
    }
    return css2;
  };
  _createClass(SheetsRegistry2, [{
    key: "index",
    get: function get2() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);
  return SheetsRegistry2;
}();
var sheets = new SheetsRegistry();
var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
if (globalThis$1[ns] == null)
  globalThis$1[ns] = 0;
var moduleId = globalThis$1[ns]++;
var createGenerateId = function createGenerateId2(options) {
  if (options === void 0) {
    options = {};
  }
  var ruleCounter = 0;
  var generateId = function generateId2(rule, sheet) {
    ruleCounter += 1;
    var jssId = "";
    var prefix2 = "";
    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix2 = sheet.options.classNamePrefix;
      }
      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }
    if (options.minify) {
      return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
    }
    return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
  };
  return generateId;
};
var memoize$1 = function memoize(fn) {
  var value;
  return function() {
    if (!value)
      value = fn();
    return value;
  };
};
var getPropertyValue = function getPropertyValue2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    return "";
  }
};
var setProperty = function setProperty2(cssRule, prop, value) {
  try {
    var cssValue = value;
    if (Array.isArray(value)) {
      cssValue = toCssValue(value);
    }
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      var indexOfImportantFlag = cssValue ? cssValue.indexOf("!important") : -1;
      var cssValueWithoutImportantFlag = indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue;
      cssRule.style.setProperty(prop, cssValueWithoutImportantFlag, indexOfImportantFlag > -1 ? "important" : "");
    }
  } catch (err) {
    return false;
  }
  return true;
};
var removeProperty = function removeProperty2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
  }
};
var setSelector = function setSelector2(cssRule, selectorText) {
  cssRule.selectorText = selectorText;
  return cssRule.selectorText === selectorText;
};
var getHead = memoize$1(function() {
  return document.querySelector("head");
});
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}
function findPrevNode(options) {
  var registry = sheets.registry;
  if (registry.length > 0) {
    var sheet = findHigherSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    }
    sheet = findHighestSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  }
  var insertionPoint = options.insertionPoint;
  if (insertionPoint && typeof insertionPoint === "string") {
    var comment = findCommentNode(insertionPoint);
    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    }
  }
  return false;
}
function insertStyle(style2, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);
  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style2, nextNode.node);
    return;
  }
  if (insertionPoint && typeof insertionPoint.nodeType === "number") {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode)
      parentNode.insertBefore(style2, insertionPointElement.nextSibling);
    return;
  }
  getHead().appendChild(style2);
}
var getNonce = memoize$1(function() {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute("content") : null;
});
var _insertRule = function insertRule(container, rule, index2) {
  try {
    if ("insertRule" in container) {
      container.insertRule(rule, index2);
    } else if ("appendRule" in container) {
      container.appendRule(rule);
    }
  } catch (err) {
    return false;
  }
  return container.cssRules[index2];
};
var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index2) {
  var maxIndex = container.cssRules.length;
  if (index2 === void 0 || index2 > maxIndex) {
    return maxIndex;
  }
  return index2;
};
var createStyle = function createStyle2() {
  var el2 = document.createElement("style");
  el2.textContent = "\n";
  return el2;
};
var DomRenderer = /* @__PURE__ */ function() {
  function DomRenderer2(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    if (sheet)
      sheets.add(sheet);
    this.sheet = sheet;
    var _ref3 = this.sheet ? this.sheet.options : {}, media = _ref3.media, meta = _ref3.meta, element = _ref3.element;
    this.element = element || createStyle();
    this.element.setAttribute("data-jss", "");
    if (media)
      this.element.setAttribute("media", media);
    if (meta)
      this.element.setAttribute("data-meta", meta);
    var nonce = getNonce();
    if (nonce)
      this.element.setAttribute("nonce", nonce);
  }
  var _proto = DomRenderer2.prototype;
  _proto.attach = function attach2() {
    if (this.element.parentNode || !this.sheet)
      return;
    insertStyle(this.element, this.sheet.options);
    var deployed = Boolean(this.sheet && this.sheet.deployed);
    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  };
  _proto.detach = function detach2() {
    if (!this.sheet)
      return;
    var parentNode = this.element.parentNode;
    if (parentNode)
      parentNode.removeChild(this.element);
    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = "\n";
    }
  };
  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet)
      return;
    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }
    this.element.textContent = "\n" + sheet.toString() + "\n";
  };
  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  };
  _proto.insertRule = function insertRule2(rule, index2, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }
    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;
      if (rule.type === "conditional" || rule.type === "keyframes") {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);
        if (latestNativeParent === false) {
          return false;
        }
        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }
      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }
    var ruleStr = rule.toString();
    if (!ruleStr)
      return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
    if (nativeRule === false) {
      return false;
    }
    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };
  _proto.refCssRule = function refCssRule(rule, index2, cssRule) {
    rule.renderable = cssRule;
    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules.splice(index2, 0, cssRule);
    }
  };
  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index2 = this.indexOf(cssRule);
    if (index2 === -1)
      return false;
    sheet.deleteRule(index2);
    this.cssRules.splice(index2, 1);
    return true;
  };
  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  };
  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index2 = this.indexOf(cssRule);
    if (index2 === -1)
      return false;
    this.element.sheet.deleteRule(index2);
    this.cssRules.splice(index2, 1);
    return this.insertRule(rule, index2);
  };
  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };
  return DomRenderer2;
}();
var instanceCounter = 0;
var Jss = /* @__PURE__ */ function() {
  function Jss2(options) {
    this.id = instanceCounter++;
    this.version = "10.10.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId,
      Renderer: isBrowser ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });
    for (var i = 0; i < plugins$1.length; i++) {
      this.plugins.use(plugins$1[i], {
        queue: "internal"
      });
    }
    this.setup(options);
  }
  var _proto = Jss2.prototype;
  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }
    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }
    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }
    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }
    if (options.insertionPoint != null)
      this.options.insertionPoint = options.insertionPoint;
    if ("Renderer" in options) {
      this.options.Renderer = options.Renderer;
    }
    if (options.plugins)
      this.use.apply(this, options.plugins);
    return this;
  };
  _proto.createStyleSheet = function createStyleSheet(styles23, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, index2 = _options.index;
    if (typeof index2 !== "number") {
      index2 = sheets.index === 0 ? 0 : sheets.index + 1;
    }
    var sheet = new StyleSheet(styles23, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index2
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  };
  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  };
  _proto.createRule = function createRule$1(name, style2, options) {
    if (style2 === void 0) {
      style2 = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (typeof name === "object") {
      return this.createRule(void 0, name, style2);
    }
    var ruleOptions = _extends({}, options, {
      name,
      jss: this,
      Renderer: this.options.Renderer
    });
    if (!ruleOptions.generateId)
      ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes)
      ruleOptions.classes = {};
    if (!ruleOptions.keyframes)
      ruleOptions.keyframes = {};
    var rule = createRule(name, style2, ruleOptions);
    if (rule)
      this.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.use = function use() {
    var _this = this;
    for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins2[_key] = arguments[_key];
    }
    plugins2.forEach(function(plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };
  return Jss2;
}();
var createJss = function createJss2(options) {
  return new Jss(options);
};
var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
function getDynamicStyles(styles23) {
  var to = null;
  for (var key in styles23) {
    var value = styles23[key];
    var type = typeof value;
    if (type === "function") {
      if (!to)
        to = {};
      to[key] = value;
    } else if (type === "object" && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to)
          to = {};
        to[key] = extracted;
      }
    }
  }
  return to;
}
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
createJss();
var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
var functionPlugin = function functionPlugin2() {
  return {
    onCreateRule: function onCreateRule8(name, decl, options) {
      if (typeof decl !== "function")
        return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle2(style2, rule) {
      if (fnValuesNs in rule || fnRuleNs in rule)
        return style2;
      var fnValues = {};
      for (var prop in style2) {
        var value = style2[prop];
        if (typeof value !== "function")
          continue;
        delete style2[prop];
        fnValues[prop] = value;
      }
      rule[fnValuesNs] = fnValues;
      return style2;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs];
      if (fnRule) {
        styleRule.style = fnRule(data) || {};
      }
      var fnValues = styleRule[fnValuesNs];
      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};
var functions = functionPlugin;
var at = "@global";
var atPrefix = "@global ";
var GlobalContainerRule = /* @__PURE__ */ function() {
  function GlobalContainerRule2(key, styles23, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var selector in styles23) {
      this.rules.add(selector, styles23[selector]);
    }
    this.rules.process();
  }
  var _proto = GlobalContainerRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.addRule = function addRule(name, style2, options) {
    var rule = this.rules.add(name, style2, options);
    if (rule)
      this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style2, options) {
    var newRule = this.rules.replace(name, style2, options);
    if (newRule)
      this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return GlobalContainerRule2;
}();
var GlobalPrefixedRule = /* @__PURE__ */ function() {
  function GlobalPrefixedRule2(key, style2, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style2, _extends({}, options, {
      parent: this
    }));
  }
  var _proto2 = GlobalPrefixedRule2.prototype;
  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : "";
  };
  return GlobalPrefixedRule2;
}();
var separatorRegExp$1 = /\s*,\s*/g;
function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp$1);
  var scoped = "";
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1])
      scoped += ", ";
  }
  return scoped;
}
function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options, style2 = rule.style;
  var rules = style2 ? style2[at] : null;
  if (!rules)
    return;
  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }
  delete style2[at];
}
function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options, style2 = rule.style;
  for (var prop in style2) {
    if (prop[0] !== "@" || prop.substr(0, at.length) !== at)
      continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style2[prop], _extends({}, options, {
      selector
    }));
    delete style2[prop];
  }
}
function jssGlobal() {
  function onCreateRule8(name, styles23, options) {
    if (!name)
      return null;
    if (name === at) {
      return new GlobalContainerRule(name, styles23, options);
    }
    if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles23, options);
    }
    var parent = options.parent;
    if (parent) {
      if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
        options.scoped = false;
      }
    }
    if (!options.selector && options.scoped === false) {
      options.selector = name;
    }
    return null;
  }
  function onProcessRule(rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }
  return {
    onCreateRule: onCreateRule8,
    onProcessRule
  };
}
var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
function jssNested() {
  function getReplaceRef(container, sheet) {
    return function(match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);
      if (rule) {
        return rule.selector;
      }
      return key;
    };
  }
  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = "";
    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];
      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested2 = nestedSelectors[j];
        if (result)
          result += ", ";
        result += nested2.indexOf("&") !== -1 ? nested2.replace(parentRegExp, parent) : parent + " " + nested2;
      }
    }
    return result;
  }
  function getOptions(rule, container, prevOptions) {
    if (prevOptions)
      return _extends({}, prevOptions, {
        index: prevOptions.index + 1
      });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
    var options = _extends({}, rule.options, {
      nestingLevel,
      index: container.indexOf(rule) + 1
    });
    delete options.name;
    return options;
  }
  function onProcessStyle2(style2, rule, sheet) {
    if (rule.type !== "style")
      return style2;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef3;
    for (var prop in style2) {
      var isNested = prop.indexOf("&") !== -1;
      var isNestedConditional = prop[0] === "@";
      if (!isNested && !isNestedConditional)
        continue;
      options = getOptions(styleRule, container, options);
      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector);
        if (!replaceRef3)
          replaceRef3 = getReplaceRef(container, sheet);
        selector = selector.replace(refRegExp, replaceRef3);
        var name = styleRule.key + "-" + prop;
        if ("replaceRule" in container) {
          container.replaceRule(name, style2[prop], _extends({}, options, {
            selector
          }));
        } else {
          container.addRule(name, style2[prop], _extends({}, options, {
            selector
          }));
        }
      } else if (isNestedConditional) {
        container.addRule(prop, {}, options).addRule(styleRule.key, style2[prop], {
          selector: styleRule.selector
        });
      }
      delete style2[prop];
    }
    return style2;
  }
  return {
    onProcessStyle: onProcessStyle2
  };
}
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache$2 = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (cache$2.hasOwnProperty(name)) {
    return cache$2[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache$2[name] = msPattern.test(hName) ? "-" + hName : hName;
}
function convertCase(style2) {
  var converted = {};
  for (var prop in style2) {
    var key = prop.indexOf("--") === 0 ? prop : hyphenateStyleName(prop);
    converted[key] = style2[prop];
  }
  if (style2.fallbacks) {
    if (Array.isArray(style2.fallbacks))
      converted.fallbacks = style2.fallbacks.map(convertCase);
    else
      converted.fallbacks = convertCase(style2.fallbacks);
  }
  return converted;
}
function camelCase() {
  function onProcessStyle2(style2) {
    if (Array.isArray(style2)) {
      for (var index2 = 0; index2 < style2.length; index2++) {
        style2[index2] = convertCase(style2[index2]);
      }
      return style2;
    }
    return convertCase(style2);
  }
  function onChangeValue2(value, prop, rule) {
    if (prop.indexOf("--") === 0) {
      return value;
    }
    var hyphenatedProp = hyphenateStyleName(prop);
    if (prop === hyphenatedProp)
      return value;
    rule.prop(hyphenatedProp, value);
    return null;
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
var defaultUnits = {
  "animation-delay": ms,
  "animation-duration": ms,
  "background-position": px,
  "background-position-x": px,
  "background-position-y": px,
  "background-size": px,
  border: px,
  "border-bottom": px,
  "border-bottom-left-radius": px,
  "border-bottom-right-radius": px,
  "border-bottom-width": px,
  "border-left": px,
  "border-left-width": px,
  "border-radius": px,
  "border-right": px,
  "border-right-width": px,
  "border-top": px,
  "border-top-left-radius": px,
  "border-top-right-radius": px,
  "border-top-width": px,
  "border-width": px,
  "border-block": px,
  "border-block-end": px,
  "border-block-end-width": px,
  "border-block-start": px,
  "border-block-start-width": px,
  "border-block-width": px,
  "border-inline": px,
  "border-inline-end": px,
  "border-inline-end-width": px,
  "border-inline-start": px,
  "border-inline-start-width": px,
  "border-inline-width": px,
  "border-start-start-radius": px,
  "border-start-end-radius": px,
  "border-end-start-radius": px,
  "border-end-end-radius": px,
  margin: px,
  "margin-bottom": px,
  "margin-left": px,
  "margin-right": px,
  "margin-top": px,
  "margin-block": px,
  "margin-block-end": px,
  "margin-block-start": px,
  "margin-inline": px,
  "margin-inline-end": px,
  "margin-inline-start": px,
  padding: px,
  "padding-bottom": px,
  "padding-left": px,
  "padding-right": px,
  "padding-top": px,
  "padding-block": px,
  "padding-block-end": px,
  "padding-block-start": px,
  "padding-inline": px,
  "padding-inline-end": px,
  "padding-inline-start": px,
  "mask-position-x": px,
  "mask-position-y": px,
  "mask-size": px,
  height: px,
  width: px,
  "min-height": px,
  "max-height": px,
  "min-width": px,
  "max-width": px,
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  "inset-block": px,
  "inset-block-end": px,
  "inset-block-start": px,
  "inset-inline": px,
  "inset-inline-end": px,
  "inset-inline-start": px,
  "box-shadow": px,
  "text-shadow": px,
  "column-gap": px,
  "column-rule": px,
  "column-rule-width": px,
  "column-width": px,
  "font-size": px,
  "font-size-delta": px,
  "letter-spacing": px,
  "text-decoration-thickness": px,
  "text-indent": px,
  "text-stroke": px,
  "text-stroke-width": px,
  "word-spacing": px,
  motion: px,
  "motion-offset": px,
  outline: px,
  "outline-offset": px,
  "outline-width": px,
  perspective: px,
  "perspective-origin-x": percent,
  "perspective-origin-y": percent,
  "transform-origin": percent,
  "transform-origin-x": percent,
  "transform-origin-y": percent,
  "transform-origin-z": percent,
  "transition-delay": ms,
  "transition-duration": ms,
  "vertical-align": px,
  "flex-basis": px,
  "shape-margin": px,
  size: px,
  gap: px,
  grid: px,
  "grid-gap": px,
  "row-gap": px,
  "grid-row-gap": px,
  "grid-column-gap": px,
  "grid-template-rows": px,
  "grid-template-columns": px,
  "grid-auto-rows": px,
  "grid-auto-columns": px,
  "box-shadow-x": px,
  "box-shadow-y": px,
  "box-shadow-blur": px,
  "box-shadow-spread": px,
  "font-line-height": px,
  "text-shadow-x": px,
  "text-shadow-y": px,
  "text-shadow-blur": px
};
function addCamelCasedVersion(obj) {
  var regExp2 = /(-[a-z])/g;
  var replace = function replace2(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp2, replace)] = obj[key];
  }
  return newObj;
}
var units = addCamelCasedVersion(defaultUnits);
function iterate(prop, value, options) {
  if (value == null)
    return value;
  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === "object") {
    if (prop === "fallbacks") {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === "number" && isNaN(value) === false) {
    var unit = options[prop] || units[prop];
    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
    }
    return value.toString();
  }
  return value;
}
function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }
  var camelCasedOptions = addCamelCasedVersion(options);
  function onProcessStyle2(style2, rule) {
    if (rule.type !== "style")
      return style2;
    for (var prop in style2) {
      style2[prop] = iterate(prop, style2[prop], camelCasedOptions);
    }
    return style2;
  }
  function onChangeValue2(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var js = "";
var css = "";
var vendor = "";
var browser = "";
var isTouch = isBrowser && "ontouchstart" in document.documentElement;
if (isBrowser) {
  var jsCssMap = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  };
  var _document$createEleme = document.createElement("p"), style$1 = _document$createEleme.style;
  var testProp = "Transform";
  for (var key in jsCssMap) {
    if (key + testProp in style$1) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
  if (js === "Webkit" && "msHyphens" in style$1) {
    js = "ms";
    css = jsCssMap.ms;
    browser = "edge";
  }
  if (js === "Webkit" && "-apple-trailing-word" in style$1) {
    vendor = "apple";
  }
}
var prefix = {
  js,
  css,
  vendor,
  browser,
  isTouch
};
function supportedKeyframes(key) {
  if (key[1] === "-")
    return key;
  if (prefix.js === "ms")
    return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}
var appearence = {
  noPrefill: ["appearance"],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== "appearance")
      return false;
    if (prefix.js === "ms")
      return "-webkit-" + prop;
    return prefix.css + prop;
  }
};
var colorAdjust = {
  noPrefill: ["color-adjust"],
  supportedProperty: function supportedProperty2(prop) {
    if (prop !== "color-adjust")
      return false;
    if (prefix.js === "Webkit")
      return prefix.css + "print-" + prop;
    return prop;
  }
};
var regExp = /[-\s]+(.)?/g;
function toUpper(match, c2) {
  return c2 ? c2.toUpperCase() : "";
}
function camelize(str) {
  return str.replace(regExp, toUpper);
}
function pascalize(str) {
  return camelize("-" + str);
}
var mask = {
  noPrefill: ["mask"],
  supportedProperty: function supportedProperty3(prop, style2) {
    if (!/^mask/.test(prop))
      return false;
    if (prefix.js === "Webkit") {
      var longhand = "mask-image";
      if (camelize(longhand) in style2) {
        return prop;
      }
      if (prefix.js + pascalize(longhand) in style2) {
        return prefix.css + prop;
      }
    }
    return prop;
  }
};
var textOrientation = {
  noPrefill: ["text-orientation"],
  supportedProperty: function supportedProperty4(prop) {
    if (prop !== "text-orientation")
      return false;
    if (prefix.vendor === "apple" && !prefix.isTouch) {
      return prefix.css + prop;
    }
    return prop;
  }
};
var transform$1 = {
  noPrefill: ["transform"],
  supportedProperty: function supportedProperty5(prop, style2, options) {
    if (prop !== "transform")
      return false;
    if (options.transform) {
      return prop;
    }
    return prefix.css + prop;
  }
};
var transition = {
  noPrefill: ["transition"],
  supportedProperty: function supportedProperty6(prop, style2, options) {
    if (prop !== "transition")
      return false;
    if (options.transition) {
      return prop;
    }
    return prefix.css + prop;
  }
};
var writingMode = {
  noPrefill: ["writing-mode"],
  supportedProperty: function supportedProperty7(prop) {
    if (prop !== "writing-mode")
      return false;
    if (prefix.js === "Webkit" || prefix.js === "ms" && prefix.browser !== "edge") {
      return prefix.css + prop;
    }
    return prop;
  }
};
var userSelect = {
  noPrefill: ["user-select"],
  supportedProperty: function supportedProperty8(prop) {
    if (prop !== "user-select")
      return false;
    if (prefix.js === "Moz" || prefix.js === "ms" || prefix.vendor === "apple") {
      return prefix.css + prop;
    }
    return prop;
  }
};
var breakPropsOld = {
  supportedProperty: function supportedProperty9(prop, style2) {
    if (!/^break-/.test(prop))
      return false;
    if (prefix.js === "Webkit") {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style2 ? prefix.css + "column-" + prop : false;
    }
    if (prefix.js === "Moz") {
      var _jsProp = "page" + pascalize(prop);
      return _jsProp in style2 ? "page-" + prop : false;
    }
    return false;
  }
};
var inlineLogicalOld = {
  supportedProperty: function supportedProperty10(prop, style2) {
    if (!/^(border|margin|padding)-inline/.test(prop))
      return false;
    if (prefix.js === "Moz")
      return prop;
    var newProp = prop.replace("-inline", "");
    return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
  }
};
var unprefixed = {
  supportedProperty: function supportedProperty11(prop, style2) {
    return camelize(prop) in style2 ? prop : false;
  }
};
var prefixed = {
  supportedProperty: function supportedProperty12(prop, style2) {
    var pascalized = pascalize(prop);
    if (prop[0] === "-")
      return prop;
    if (prop[0] === "-" && prop[1] === "-")
      return prop;
    if (prefix.js + pascalized in style2)
      return prefix.css + prop;
    if (prefix.js !== "Webkit" && "Webkit" + pascalized in style2)
      return "-webkit-" + prop;
    return false;
  }
};
var scrollSnap = {
  supportedProperty: function supportedProperty13(prop) {
    if (prop.substring(0, 11) !== "scroll-snap")
      return false;
    if (prefix.js === "ms") {
      return "" + prefix.css + prop;
    }
    return prop;
  }
};
var overscrollBehavior = {
  supportedProperty: function supportedProperty14(prop) {
    if (prop !== "overscroll-behavior")
      return false;
    if (prefix.js === "ms") {
      return prefix.css + "scroll-chaining";
    }
    return prop;
  }
};
var propMap = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
};
var flex2012 = {
  supportedProperty: function supportedProperty15(prop, style2) {
    var newProp = propMap[prop];
    if (!newProp)
      return false;
    return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
  }
};
var propMap$1 = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
};
var propKeys = Object.keys(propMap$1);
var prefixCss = function prefixCss2(p2) {
  return prefix.css + p2;
};
var flex2009 = {
  supportedProperty: function supportedProperty16(prop, style2, _ref3) {
    var multiple = _ref3.multiple;
    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];
      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
      }
      if (!multiple)
        return false;
      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style2)) {
          return false;
        }
      }
      return newProp.map(prefixCss);
    }
    return false;
  }
};
var plugins = [appearence, colorAdjust, mask, textOrientation, transform$1, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function(p2) {
  return p2.supportedProperty;
}).map(function(p2) {
  return p2.supportedProperty;
});
var noPrefill = plugins.filter(function(p2) {
  return p2.noPrefill;
}).reduce(function(a, p2) {
  a.push.apply(a, _toConsumableArray(p2.noPrefill));
  return a;
}, []);
var el;
var cache = {};
if (isBrowser) {
  el = document.createElement("p");
  var computed = window.getComputedStyle(document.documentElement, "");
  for (var key$1 in computed) {
    if (!isNaN(key$1))
      cache[computed[key$1]] = computed[key$1];
  }
  noPrefill.forEach(function(x2) {
    return delete cache[x2];
  });
}
function supportedProperty17(prop, options) {
  if (options === void 0) {
    options = {};
  }
  if (!el)
    return prop;
  if (cache[prop] != null) {
    return cache[prop];
  }
  if (prop === "transition" || prop === "transform") {
    options[prop] = prop in el.style;
  }
  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el.style, options);
    if (cache[prop])
      break;
  }
  try {
    el.style[prop] = "";
  } catch (err) {
    return false;
  }
  return cache[prop];
}
var cache$1 = {};
var transitionProperties = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
function prefixTransitionCallback(match, p1, p2) {
  if (p1 === "var")
    return "var";
  if (p1 === "all")
    return "all";
  if (p2 === "all")
    return ", all";
  var prefixedValue = p1 ? supportedProperty17(p1) : ", " + supportedProperty17(p2);
  if (!prefixedValue)
    return p1 || p2;
  return prefixedValue;
}
if (isBrowser)
  el$1 = document.createElement("p");
function supportedValue(property, value) {
  var prefixedValue = value;
  if (!el$1 || property === "content")
    return value;
  if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  }
  var cacheKey = property + prefixedValue;
  if (cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  }
  try {
    el$1.style[property] = prefixedValue;
  } catch (err) {
    cache$1[cacheKey] = false;
    return false;
  }
  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === "") {
    prefixedValue = prefix.css + prefixedValue;
    if (prefixedValue === "-ms-flex")
      el$1.style[property] = "-ms-flexbox";
    el$1.style[property] = prefixedValue;
    if (el$1.style[property] === "") {
      cache$1[cacheKey] = false;
      return false;
    }
  }
  el$1.style[property] = "";
  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === "keyframes") {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }
  function prefixStyle(style2) {
    for (var prop in style2) {
      var value = style2[prop];
      if (prop === "fallbacks" && Array.isArray(value)) {
        style2[prop] = value.map(prefixStyle);
        continue;
      }
      var changeProp = false;
      var supportedProp = supportedProperty17(prop);
      if (supportedProp && supportedProp !== prop)
        changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value)
        changeValue = true;
      if (changeProp || changeValue) {
        if (changeProp)
          delete style2[prop];
        style2[supportedProp || prop] = supportedValue$1 || value;
      }
    }
    return style2;
  }
  function onProcessStyle2(style2, rule) {
    if (rule.type !== "style")
      return style2;
    return prefixStyle(style2);
  }
  function onChangeValue2(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }
  return {
    onProcessRule,
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
function jssPropsSort() {
  var sort = function sort2(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }
    return prop0.length - prop1.length;
  };
  return {
    onProcessStyle: function onProcessStyle2(style2, rule) {
      if (rule.type !== "style")
        return style2;
      var newStyle = {};
      var props = Object.keys(style2).sort(sort);
      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style2[props[i]];
      }
      return newStyle;
    }
  };
}
function jssPreset() {
  return {
    plugins: [
      functions(),
      jssGlobal(),
      jssNested(),
      camelCase(),
      defaultUnit(),
      typeof window === "undefined" ? null : jssVendorPrefixer(),
      jssPropsSort()
    ]
  };
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var baseClasses = options.baseClasses, newClasses = options.newClasses;
  options.Component;
  if (!newClasses) {
    return baseClasses;
  }
  var nextClasses = _extends({}, baseClasses);
  Object.keys(newClasses).forEach(function(key) {
    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}
var multiKeyStore = {
  set: function set(cache2, key1, key2, value) {
    var subCache = cache2.get(key1);
    if (!subCache) {
      subCache = /* @__PURE__ */ new Map();
      cache2.set(key1, subCache);
    }
    subCache.set(key2, value);
  },
  get: function get(cache2, key1, key2) {
    var subCache = cache2.get(key1);
    return subCache ? subCache.get(key2) : void 0;
  },
  delete: function _delete(cache2, key1, key2) {
    var subCache = cache2.get(key1);
    subCache.delete(key2);
  }
};
var multiKeyStore$1 = multiKeyStore;
var ThemeContext = React.createContext(null);
var ThemeContext$1 = ThemeContext;
function useTheme$1() {
  var theme = React.useContext(ThemeContext$1);
  return theme;
}
var jss = createJss(jssPreset());
var generateClassName = createGenerateClassName();
var sheetsManager = /* @__PURE__ */ new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
var StylesContext = React.createContext(defaultOptions);
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;
  return indexCounter;
}
var noopTheme = {};
var noopTheme$1 = noopTheme;
function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === "function";
  return {
    create: function create2(theme, name) {
      var styles23;
      try {
        styles23 = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        throw err;
      }
      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles23;
      }
      var overrides = theme.overrides[name];
      var stylesWithOverrides = _extends({}, styles23);
      Object.keys(overrides).forEach(function(key) {
        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}
function getClasses(_ref3, classes, Component) {
  var state = _ref3.state, stylesOptions = _ref3.stylesOptions;
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }
  if (!state.cacheClasses) {
    state.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {}
    };
  }
  var generate = false;
  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }
  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }
  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }
  return state.cacheClasses.value;
}
function attach(_ref22, props) {
  var state = _ref22.state, theme = _ref22.theme, stylesOptions = _ref22.stylesOptions, stylesCreator = _ref22.stylesCreator, name = _ref22.name;
  if (stylesOptions.disableGeneration) {
    return;
  }
  var sheetManager = multiKeyStore$1.get(stylesOptions.sheetsManager, stylesCreator, theme);
  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore$1.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }
  var options = _extends({}, stylesCreator.options, stylesOptions, {
    theme,
    flip: typeof stylesOptions.flip === "boolean" ? stylesOptions.flip : theme.direction === "rtl"
  });
  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    var staticSheet;
    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore$1.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }
    var styles23 = stylesCreator.create(theme, name);
    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles23, _extends({
        link: false
      }, options));
      staticSheet.attach();
      if (stylesOptions.sheetsCache) {
        multiKeyStore$1.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }
    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }
    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles23);
  }
  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });
    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }
  sheetManager.refs += 1;
}
function update(_ref3, props) {
  var state = _ref3.state;
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}
function detach(_ref4) {
  var state = _ref4.state, theme = _ref4.theme, stylesOptions = _ref4.stylesOptions, stylesCreator = _ref4.stylesCreator;
  if (stylesOptions.disableGeneration) {
    return;
  }
  var sheetManager = multiKeyStore$1.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    multiKeyStore$1.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }
  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}
function useSynchronousEffect(func, values2) {
  var key = React.useRef([]);
  var output;
  var currentKey = React.useMemo(function() {
    return {};
  }, values2);
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }
  React.useEffect(
    function() {
      return function() {
        if (output) {
          output();
        }
      };
    },
    [currentKey]
  );
}
function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var name = options.name, classNamePrefixOption = options.classNamePrefix, Component = options.Component, _options$defaultTheme = options.defaultTheme, defaultTheme2 = _options$defaultTheme === void 0 ? noopTheme$1 : _options$defaultTheme, stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);
  var stylesCreator = getStylesCreator(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || "makeStyles";
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };
  var useStyles = function useStyles2() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var theme = useTheme$1() || defaultTheme2;
    var stylesOptions = _extends({}, React.useContext(StylesContext), stylesOptions2);
    var instance = React.useRef();
    var shouldUpdate = React.useRef();
    useSynchronousEffect(function() {
      var current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function() {
        detach(current);
      };
    }, [theme, stylesCreator]);
    React.useEffect(function() {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }
      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component);
    return classes;
  };
  return useStyles;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function r$1(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2))
      for (t2 = 0; t2 < e2.length; t2++)
        e2[t2] && (f2 = r$1(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    else
      for (t2 in e2)
        e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
    (e2 = arguments[f2++]) && (t2 = r$1(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a) {
  return z(a) === k;
};
reactIs_production_min.isContextProvider = function(a) {
  return z(a) === h;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a) {
  return z(a) === n;
};
reactIs_production_min.isFragment = function(a) {
  return z(a) === e;
};
reactIs_production_min.isLazy = function(a) {
  return z(a) === t;
};
reactIs_production_min.isMemo = function(a) {
  return z(a) === r;
};
reactIs_production_min.isPortal = function(a) {
  return z(a) === d;
};
reactIs_production_min.isProfiler = function(a) {
  return z(a) === g;
};
reactIs_production_min.isStrictMode = function(a) {
  return z(a) === f;
};
reactIs_production_min.isSuspense = function(a) {
  return z(a) === p;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIs = reactIs$1.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys2 = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys2.length; ++i) {
      var key = keys2[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
function omit$1(input, fields) {
  var output = {};
  Object.keys(input).forEach(function(prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}
function styled$2(Component) {
  var componentCreator = function componentCreator2(style2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var name = options.name, stylesOptions = _objectWithoutProperties(options, ["name"]);
    var classNamePrefix = name;
    var stylesOrCreator = typeof style2 === "function" ? function(theme) {
      return {
        root: function root(props) {
          return style2(_extends({
            theme
          }, props));
        }
      };
    } : {
      root: style2
    };
    var useStyles = makeStyles(stylesOrCreator, _extends({
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    var filterProps;
    if (style2.filterProps) {
      filterProps = style2.filterProps;
      delete style2.filterProps;
    }
    if (style2.propTypes) {
      style2.propTypes;
      delete style2.propTypes;
    }
    var StyledComponent = /* @__PURE__ */ React.forwardRef(function StyledComponent2(props, ref) {
      var children = props.children, classNameProp = props.className, clone = props.clone, ComponentProp = props.component, other = _objectWithoutProperties(props, ["children", "className", "clone", "component"]);
      var classes = useStyles(props);
      var className = clsx(classes.root, classNameProp);
      var spread = other;
      if (filterProps) {
        spread = omit$1(spread, filterProps);
      }
      if (clone) {
        return /* @__PURE__ */ React.cloneElement(children, _extends({
          className: clsx(children.props.className, className)
        }, spread));
      }
      if (typeof children === "function") {
        return children(_extends({
          className
        }, spread));
      }
      var FinalComponent = ComponentProp || Component;
      return /* @__PURE__ */ React.createElement(FinalComponent, _extends({
        ref,
        className
      }, spread), children);
    });
    hoistNonReactStatics_cjs(StyledComponent, Component);
    return StyledComponent;
  };
  return componentCreator;
}
var withStyles$1 = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(Component) {
    var defaultTheme2 = options.defaultTheme, _options$withTheme = options.withTheme, withTheme = _options$withTheme === void 0 ? false : _options$withTheme, name = options.name, stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);
    var classNamePrefix = name;
    var useStyles = makeStyles(stylesOrCreator, _extends({
      defaultTheme: defaultTheme2,
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    var WithStyles = /* @__PURE__ */ React.forwardRef(function WithStyles2(props, ref) {
      props.classes;
      var innerRef = props.innerRef, other = _objectWithoutProperties(props, ["classes", "innerRef"]);
      var classes = useStyles(_extends({}, Component.defaultProps, props));
      var theme;
      var more = other;
      if (typeof name === "string" || withTheme) {
        theme = useTheme$1() || defaultTheme2;
        if (name) {
          more = getThemeProps({
            theme,
            name,
            props: other
          });
        }
        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }
      return /* @__PURE__ */ React.createElement(Component, _extends({
        ref: innerRef || ref,
        classes
      }, more));
    });
    hoistNonReactStatics_cjs(WithStyles, Component);
    return WithStyles;
  };
};
var withStylesWithoutDefault = withStyles$1;
function createContainer(useHook) {
  var Context = React.createContext(null);
  function Provider(props) {
    var value = useHook(props.initialState);
    return React.createElement(Context.Provider, {
      value
    }, props.children);
  }
  function useContainer() {
    var value = React.useContext(Context);
    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }
    return value;
  }
  return {
    Provider,
    useContainer
  };
}
function useFilesReducer() {
  function reducer(files, action) {
    switch (action.type) {
      case "add":
        return reducerAdd(files, action.payload.file, action.payload.name);
      case "remove":
        return reducerRemove(files, action.payload.name);
      case "rename":
        return reducerRename(files, action.payload.name, action.payload.newName);
    }
  }
  function reducerAdd(files, file, name) {
    const names = new Set(files.map((file2) => file2.name));
    const blobURL = URL.createObjectURL(file);
    if (names.has(name)) {
      const filename = name.replace(/(.*)(\.\w+)/, "$1");
      const extname = name.replace(/(.*)(\.\w+)/, "$2");
      for (let i = 1; i < 1e3; i++) {
        const tryname = `${filename}-${i}${extname}`;
        if (!names.has(tryname)) {
          return files.concat({ file, name: tryname, blobURL });
        }
      }
      URL.revokeObjectURL(blobURL);
      throw Error("Too many files with duplicated names...");
    }
    return files.concat({ file, name, blobURL });
  }
  function reducerRemove(files, name) {
    files.filter((file) => file.name === name).forEach((file) => URL.revokeObjectURL(file.name));
    return files.filter((file) => file.name !== name);
  }
  function reducerRename(files, name, newName) {
    if (files.some((file) => file.name === newName)) {
      return files;
    }
    return files.map((file) => file.name !== name ? file : __spreadProps(__spreadValues({}, file), { name: newName }));
  }
  return react.exports.useReducer(reducer, []);
}
function useDirectory() {
  const [files, dispatch] = useFilesReducer();
  function add(file, name) {
    dispatch({ type: "add", payload: { file, name } });
  }
  function remove(name) {
    dispatch({ type: "remove", payload: { name } });
  }
  function rename(name, newName) {
    dispatch({ type: "rename", payload: { name, newName } });
  }
  return { files, add, remove, rename };
}
var AssetsContainer = createContainer(() => {
  const baseImages = useDirectory();
  const matImages = useDirectory();
  return {
    baseImages,
    matImages
  };
});
var EditorContainer = createContainer(() => {
  return react.exports.useState(null);
});
var common = {
  black: "#000",
  white: "#fff"
};
var common$1 = common;
var red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
var red$1 = red;
var pink = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  A100: "#ff80ab",
  A200: "#ff4081",
  A400: "#f50057",
  A700: "#c51162"
};
var pink$1 = pink;
var indigo = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe"
};
var indigo$1 = indigo;
var blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
var blue$1 = blue;
var green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
var green$1 = green;
var orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
var orange$1 = orange;
var grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#d5d5d5",
  A200: "#aaaaaa",
  A400: "#303030",
  A700: "#616161"
};
var grey$1 = grey;
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color2) {
  color2 = color2.substr(1);
  var re2 = new RegExp(".{1,".concat(color2.length >= 6 ? 2 : 1, "}"), "g");
  var colors = color2.match(re2);
  if (colors && colors[0].length === 1) {
    colors = colors.map(function(n2) {
      return n2 + n2;
    });
  }
  return colors ? "rgb".concat(colors.length === 4 ? "a" : "", "(").concat(colors.map(function(n2, index2) {
    return index2 < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", "), ")") : "";
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  var _color = color2, values2 = _color.values;
  var h2 = values2[0];
  var s = values2[1] / 100;
  var l2 = values2[2] / 100;
  var a = s * Math.min(l2, 1 - l2);
  var f2 = function f3(n2) {
    var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n2 + h2 / 30) % 12;
    return l2 - a * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  };
  var type = "rgb";
  var rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  var marker = color2.indexOf("(");
  var type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla"].indexOf(type) === -1) {
    throw new Error(formatMuiErrorMessage(3, color2));
  }
  var values2 = color2.substring(marker + 1, color2.length - 1).split(",");
  values2 = values2.map(function(value) {
    return parseFloat(value);
  });
  return {
    type,
    values: values2
  };
}
function recomposeColor(color2) {
  var type = color2.type;
  var values2 = color2.values;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map(function(n2, i) {
      return i < 3 ? parseInt(n2, 10) : n2;
    });
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = "".concat(values2[1], "%");
    values2[2] = "".concat(values2[2], "%");
  }
  return "".concat(type, "(").concat(values2.join(", "), ")");
}
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  var rgb = color2.type === "hsl" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map(function(val) {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clamp(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  color2.values[3] = value;
  return recomposeColor(color2);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color2.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color2.values[i] += (255 - color2.values[i]) * coefficient;
    }
  }
  return recomposeColor(color2);
}
var keys = ["xs", "sm", "md", "lg", "xl"];
function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values, values2 = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values, _breakpoints$unit = breakpoints.unit, unit = _breakpoints$unit === void 0 ? "px" : _breakpoints$unit, _breakpoints$step = breakpoints.step, step = _breakpoints$step === void 0 ? 5 : _breakpoints$step, other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);
  function up2(key) {
    var value = typeof values2[key] === "number" ? values2[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }
  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values2[keys[endIndex]];
    if (endIndex === keys.length) {
      return up2("xs");
    }
    var value = typeof upperbound === "number" && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }
  function between(start, end) {
    var endIndex = keys.indexOf(end);
    if (endIndex === keys.length - 1) {
      return up2(start);
    }
    return "@media (min-width:".concat(typeof values2[start] === "number" ? values2[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values2[keys[endIndex + 1]] === "number" ? values2[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }
  function only(key) {
    return between(key, key);
  }
  function width2(key) {
    return values2[key];
  }
  return _extends({
    keys,
    values: values2,
    up: up2,
    down,
    between,
    only,
    width: width2
  }, other);
}
function createMixins(breakpoints, spacing2, mixins) {
  var _toolbar;
  return _extends({
    gutters: function gutters() {
      var styles23 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      console.warn(["Material-UI: theme.mixins.gutters() is deprecated.", "You can use the source of the mixin directly:", "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n"));
      return _extends({
        paddingLeft: spacing2(2),
        paddingRight: spacing2(2)
      }, styles23, _defineProperty({}, breakpoints.up("sm"), _extends({
        paddingLeft: spacing2(3),
        paddingRight: spacing2(3)
      }, styles23[breakpoints.up("sm")])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, _defineProperty(_toolbar, "".concat(breakpoints.up("xs"), " and (orientation: landscape)"), {
      minHeight: 48
    }), _defineProperty(_toolbar, breakpoints.up("sm"), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}
var light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common$1.white,
    default: grey$1[50]
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: common$1.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: grey$1[800],
    default: "#303030"
  },
  action: {
    active: common$1.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function createPalette(palette2) {
  var _palette$primary = palette2.primary, primary = _palette$primary === void 0 ? {
    light: indigo$1[300],
    main: indigo$1[500],
    dark: indigo$1[700]
  } : _palette$primary, _palette$secondary = palette2.secondary, secondary = _palette$secondary === void 0 ? {
    light: pink$1.A200,
    main: pink$1.A400,
    dark: pink$1.A700
  } : _palette$secondary, _palette$error = palette2.error, error = _palette$error === void 0 ? {
    light: red$1[300],
    main: red$1[500],
    dark: red$1[700]
  } : _palette$error, _palette$warning = palette2.warning, warning = _palette$warning === void 0 ? {
    light: orange$1[300],
    main: orange$1[500],
    dark: orange$1[700]
  } : _palette$warning, _palette$info = palette2.info, info = _palette$info === void 0 ? {
    light: blue$1[300],
    main: blue$1[500],
    dark: blue$1[700]
  } : _palette$info, _palette$success = palette2.success, success = _palette$success === void 0 ? {
    light: green$1[300],
    main: green$1[500],
    dark: green$1[700]
  } : _palette$success, _palette$type = palette2.type, type = _palette$type === void 0 ? "light" : _palette$type, _palette$contrastThre = palette2.contrastThreshold, contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre, _palette$tonalOffset = palette2.tonalOffset, tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset, other = _objectWithoutProperties(palette2, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]);
  function getContrastText(background) {
    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    return contrastText;
  }
  var augmentColor = function augmentColor2(color2) {
    var mainShade = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 700;
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.main) {
      throw new Error(formatMuiErrorMessage(4, mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(formatMuiErrorMessage(5, JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  var types = {
    dark,
    light
  };
  var paletteOutput = deepmerge(_extends({
    common: common$1,
    type,
    primary: augmentColor(primary),
    secondary: augmentColor(secondary, "A400", "A200", "A700"),
    error: augmentColor(error),
    warning: augmentColor(warning),
    info: augmentColor(info),
    success: augmentColor(success),
    grey: grey$1,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, types[type]), other);
  return paletteOutput;
}
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
function roundWithDeprecationWarning(value) {
  return round(value);
}
var caseAllCaps = {
  textTransform: "uppercase"
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette2, typography2) {
  var _ref3 = typeof typography2 === "function" ? typography2(palette2) : typography2, _ref$fontFamily = _ref3.fontFamily, fontFamily2 = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily, _ref$fontSize = _ref3.fontSize, fontSize2 = _ref$fontSize === void 0 ? 14 : _ref$fontSize, _ref$fontWeightLight = _ref3.fontWeightLight, fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight, _ref$fontWeightRegula = _ref3.fontWeightRegular, fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula, _ref$fontWeightMedium = _ref3.fontWeightMedium, fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium, _ref$fontWeightBold = _ref3.fontWeightBold, fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold, _ref$htmlFontSize = _ref3.htmlFontSize, htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize, allVariants = _ref3.allVariants, pxToRem2 = _ref3.pxToRem, other = _objectWithoutProperties(_ref3, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);
  var coef = fontSize2 / 14;
  var pxToRem = pxToRem2 || function(size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };
  var buildVariant = function buildVariant2(fontWeight2, size, lineHeight2, letterSpacing2, casing) {
    return _extends({
      fontFamily: fontFamily2,
      fontWeight: fontWeight2,
      fontSize: pxToRem(size),
      lineHeight: lineHeight2
    }, fontFamily2 === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing2 / size), "em")
    } : {}, casing, allVariants);
  };
  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    round: roundWithDeprecationWarning,
    fontFamily: fontFamily2,
    fontSize: fontSize2,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
  });
}
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow() {
  return ["".concat(arguments.length <= 0 ? void 0 : arguments[0], "px ").concat(arguments.length <= 1 ? void 0 : arguments[1], "px ").concat(arguments.length <= 2 ? void 0 : arguments[2], "px ").concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? void 0 : arguments[4], "px ").concat(arguments.length <= 5 ? void 0 : arguments[5], "px ").concat(arguments.length <= 6 ? void 0 : arguments[6], "px ").concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? void 0 : arguments[8], "px ").concat(arguments.length <= 9 ? void 0 : arguments[9], "px ").concat(arguments.length <= 10 ? void 0 : arguments[10], "px ").concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(",");
}
var shadows$1 = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows$2 = shadows$1;
var shape = {
  borderRadius: 4
};
var shape$1 = shape;
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
  });
}
var values$1 = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: function up(key) {
    return "@media (min-width:".concat(values$1[key], "px)");
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function(acc, item, index2) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index2])] = styleFromPropValue(propValue[index2]);
      return acc;
    }, {});
  }
  if (_typeof$1(propValue) === "object") {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce(function(acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }
  var output = styleFromPropValue(propValue);
  return output;
}
function getPath(obj, path) {
  if (!path || typeof path !== "string") {
    return null;
  }
  return path.split(".").reduce(function(acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}
function style(options) {
  var prop = options.prop, _options$cssProperty = options.cssProperty, cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty, themeKey = options.themeKey, transform3 = options.transform;
  var fn = function fn2(props) {
    if (props[prop] == null) {
      return null;
    }
    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};
    var styleFromPropValue = function styleFromPropValue2(propValueFinal) {
      var value;
      if (typeof themeMapping === "function") {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;
        if (transform3) {
          value = transform3(value);
        }
      }
      if (cssProperty === false) {
        return value;
      }
      return _defineProperty({}, cssProperty, value);
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = {};
  fn.filterProps = [prop];
  return fn;
}
function compose() {
  for (var _len = arguments.length, styles23 = new Array(_len), _key = 0; _key < _len; _key++) {
    styles23[_key] = arguments[_key];
  }
  var fn = function fn2(props) {
    return styles23.reduce(function(acc, style2) {
      var output = style2(props);
      if (output) {
        return merge(acc, output);
      }
      return acc;
    }, {});
  };
  fn.propTypes = {};
  fn.filterProps = styles23.reduce(function(acc, style2) {
    return acc.concat(style2.filterProps);
  }, []);
  return fn;
}
function getBorder(value) {
  if (typeof value !== "number") {
    return value;
  }
  return "".concat(value, "px solid");
}
var border = style({
  prop: "border",
  themeKey: "borders",
  transform: getBorder
});
var borderTop = style({
  prop: "borderTop",
  themeKey: "borders",
  transform: getBorder
});
var borderRight = style({
  prop: "borderRight",
  themeKey: "borders",
  transform: getBorder
});
var borderBottom = style({
  prop: "borderBottom",
  themeKey: "borders",
  transform: getBorder
});
var borderLeft = style({
  prop: "borderLeft",
  themeKey: "borders",
  transform: getBorder
});
var borderColor = style({
  prop: "borderColor",
  themeKey: "palette"
});
var borderRadius = style({
  prop: "borderRadius",
  themeKey: "shape"
});
var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
var borders$1 = borders;
function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function(prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}
function styleFunctionSx(styleFunction2) {
  var newStyleFunction = function newStyleFunction2(props) {
    var output = styleFunction2(props);
    if (props.css) {
      return _extends({}, merge(output, styleFunction2(_extends({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction2.filterProps]));
    }
    if (props.sx) {
      return _extends({}, merge(output, styleFunction2(_extends({
        theme: props.theme
      }, props.sx))), omit(props.sx, [styleFunction2.filterProps]));
    }
    return output;
  };
  newStyleFunction.propTypes = {};
  newStyleFunction.filterProps = ["css", "sx"].concat(_toConsumableArray(styleFunction2.filterProps));
  return newStyleFunction;
}
var displayPrint = style({
  prop: "displayPrint",
  cssProperty: false,
  transform: function transform(value) {
    return {
      "@media print": {
        display: value
      }
    };
  }
});
var displayRaw = style({
  prop: "display"
});
var overflow = style({
  prop: "overflow"
});
var textOverflow = style({
  prop: "textOverflow"
});
var visibility = style({
  prop: "visibility"
});
var whiteSpace = style({
  prop: "whiteSpace"
});
var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);
var flexBasis = style({
  prop: "flexBasis"
});
var flexDirection = style({
  prop: "flexDirection"
});
var flexWrap = style({
  prop: "flexWrap"
});
var justifyContent = style({
  prop: "justifyContent"
});
var alignItems = style({
  prop: "alignItems"
});
var alignContent = style({
  prop: "alignContent"
});
var order = style({
  prop: "order"
});
var flex = style({
  prop: "flex"
});
var flexGrow = style({
  prop: "flexGrow"
});
var flexShrink = style({
  prop: "flexShrink"
});
var alignSelf = style({
  prop: "alignSelf"
});
var justifyItems = style({
  prop: "justifyItems"
});
var justifySelf = style({
  prop: "justifySelf"
});
var flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
var flexbox$1 = flexbox;
var gridGap = style({
  prop: "gridGap"
});
var gridColumnGap = style({
  prop: "gridColumnGap"
});
var gridRowGap = style({
  prop: "gridRowGap"
});
var gridColumn = style({
  prop: "gridColumn"
});
var gridRow = style({
  prop: "gridRow"
});
var gridAutoFlow = style({
  prop: "gridAutoFlow"
});
var gridAutoColumns = style({
  prop: "gridAutoColumns"
});
var gridAutoRows = style({
  prop: "gridAutoRows"
});
var gridTemplateColumns = style({
  prop: "gridTemplateColumns"
});
var gridTemplateRows = style({
  prop: "gridTemplateRows"
});
var gridTemplateAreas = style({
  prop: "gridTemplateAreas"
});
var gridArea = style({
  prop: "gridArea"
});
var grid = compose(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
var grid$1 = grid;
var color = style({
  prop: "color",
  themeKey: "palette"
});
var bgcolor = style({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette"
});
var palette = compose(color, bgcolor);
var palette$1 = palette;
var position = style({
  prop: "position"
});
var zIndex$2 = style({
  prop: "zIndex",
  themeKey: "zIndex"
});
var top = style({
  prop: "top"
});
var right = style({
  prop: "right"
});
var bottom = style({
  prop: "bottom"
});
var left = style({
  prop: "left"
});
var positions = compose(position, zIndex$2, top, right, bottom, left);
var boxShadow = style({
  prop: "boxShadow",
  themeKey: "shadows"
});
var shadows = boxShadow;
function transform2(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}
var width = style({
  prop: "width",
  transform: transform2
});
var maxWidth = style({
  prop: "maxWidth",
  transform: transform2
});
var minWidth = style({
  prop: "minWidth",
  transform: transform2
});
var height = style({
  prop: "height",
  transform: transform2
});
var maxHeight = style({
  prop: "maxHeight",
  transform: transform2
});
var minHeight = style({
  prop: "minHeight",
  transform: transform2
});
style({
  prop: "size",
  cssProperty: "width",
  transform: transform2
});
style({
  prop: "size",
  cssProperty: "height",
  transform: transform2
});
var boxSizing = style({
  prop: "boxSizing"
});
var sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
var sizing$1 = sizing;
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i, u2, a = [], f2 = true, o = false;
    try {
      if (i = (t2 = t2.call(r2)).next, 0 === l2) {
        if (Object(t2) !== t2)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true)
          ;
    } catch (r3) {
      o = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2))
          return;
      } finally {
        if (o)
          throw n2;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function memoize2(fn) {
  var cache2 = {};
  return function(arg) {
    if (cache2[arg] === void 0) {
      cache2[arg] = fn(arg);
    }
    return cache2[arg];
  };
}
var properties = {
  m: "margin",
  p: "padding"
};
var directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var getCssProperties = memoize2(function(prop) {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  var _prop$split = prop.split(""), _prop$split2 = _slicedToArray(_prop$split, 2), a = _prop$split2[0], b2 = _prop$split2[1];
  var property = properties[a];
  var direction = directions[b2] || "";
  return Array.isArray(direction) ? direction.map(function(dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY"];
function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;
  if (typeof themeSpacing === "number") {
    return function(abs) {
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return function(abs) {
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  return function() {
    return void 0;
  };
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  var abs = Math.abs(propValue);
  var transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return "-".concat(transformed);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return function(propValue) {
    return cssProperties.reduce(function(acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}
function spacing(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing(theme);
  return Object.keys(props).map(function(prop) {
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }
    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }).reduce(merge, {});
}
spacing.propTypes = {};
spacing.filterProps = spacingKeys;
var fontFamily = style({
  prop: "fontFamily",
  themeKey: "typography"
});
var fontSize = style({
  prop: "fontSize",
  themeKey: "typography"
});
var fontStyle = style({
  prop: "fontStyle",
  themeKey: "typography"
});
var fontWeight = style({
  prop: "fontWeight",
  themeKey: "typography"
});
var letterSpacing = style({
  prop: "letterSpacing"
});
var lineHeight = style({
  prop: "lineHeight"
});
var textAlign = style({
  prop: "textAlign"
});
var typography = compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
var typography$1 = typography;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
  if (spacingInput.mui) {
    return spacingInput;
  }
  var transform3 = createUnarySpacing({
    spacing: spacingInput
  });
  var spacing2 = function spacing3() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 0) {
      return transform3(1);
    }
    if (args.length === 1) {
      return transform3(args[0]);
    }
    return args.map(function(argument) {
      if (typeof argument === "string") {
        return argument;
      }
      var output = transform3(argument);
      return typeof output === "number" ? "".concat(output, "px") : output;
    }).join(" ");
  };
  Object.defineProperty(spacing2, "unit", {
    get: function get2() {
      return spacingInput;
    }
  });
  spacing2.mui = true;
  return spacing2;
}
var easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
var transitions = {
  easing,
  duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["all"];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options$duration = options.duration, durationOption = _options$duration === void 0 ? duration.standard : _options$duration, _options$easing = options.easing, easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing, _options$delay = options.delay, delay = _options$delay === void 0 ? 0 : _options$delay;
    _objectWithoutProperties(options, ["duration", "easing", "delay"]);
    return (Array.isArray(props) ? props : [props]).map(function(animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === "string" ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === "string" ? delay : formatMs(delay));
    }).join(",");
  },
  getAutoHeightDuration: function getAutoHeightDuration(height2) {
    if (!height2) {
      return 0;
    }
    var constant = height2 / 36;
    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};
var zIndex = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex$1 = zIndex;
function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints, breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints, _options$mixins = options.mixins, mixinsInput = _options$mixins === void 0 ? {} : _options$mixins, _options$palette = options.palette, paletteInput = _options$palette === void 0 ? {} : _options$palette, spacingInput = options.spacing, _options$typography = options.typography, typographyInput = _options$typography === void 0 ? {} : _options$typography, other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);
  var palette2 = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing2 = createSpacing(spacingInput);
  var muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    mixins: createMixins(breakpoints, spacing2, mixinsInput),
    overrides: {},
    palette: palette2,
    props: {},
    shadows: shadows$2,
    typography: createTypography(palette2, typographyInput),
    spacing: spacing2,
    shape: shape$1,
    transitions,
    zIndex: zIndex$1
  }, other);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  muiTheme = args.reduce(function(acc, argument) {
    return deepmerge(acc, argument);
  }, muiTheme);
  return muiTheme;
}
var defaultTheme = createTheme();
var defaultTheme$1 = defaultTheme;
var styled = function styled2(Component) {
  var componentCreator = styled$2(Component);
  return function(style2, options) {
    return componentCreator(style2, _extends({
      defaultTheme: defaultTheme$1
    }, options));
  };
};
var styled$1 = styled;
function useTheme() {
  var theme = useTheme$1() || defaultTheme$1;
  return theme;
}
function withStyles2(stylesOrCreator, options) {
  return withStylesWithoutDefault(stylesOrCreator, _extends({
    defaultTheme: defaultTheme$1
  }, options));
}
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.reduce(function(acc, func) {
    if (func == null) {
      return acc;
    }
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function() {
  });
}
var styles$w = function styles(theme) {
  return {
    root: {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create("fill", {
        duration: theme.transitions.duration.shorter
      })
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorError: {
      color: theme.palette.error.main
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    fontSizeInherit: {
      fontSize: "inherit"
    },
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon = /* @__PURE__ */ react.exports.forwardRef(function SvgIcon2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "inherit" : _props$color, _props$component = props.component, Component = _props$component === void 0 ? "svg" : _props$component, _props$fontSize = props.fontSize, fontSize2 = _props$fontSize === void 0 ? "medium" : _props$fontSize, htmlColor = props.htmlColor, titleAccess = props.titleAccess, _props$viewBox = props.viewBox, viewBox = _props$viewBox === void 0 ? "0 0 24 24" : _props$viewBox, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);
  return /* @__PURE__ */ react.exports.createElement(Component, _extends({
    className: clsx(classes.root, className, color2 !== "inherit" && classes["color".concat(capitalize(color2))], fontSize2 !== "default" && fontSize2 !== "medium" && classes["fontSize".concat(capitalize(fontSize2))]),
    focusable: "false",
    viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, other), children, titleAccess ? /* @__PURE__ */ react.exports.createElement("title", null, titleAccess) : null);
});
SvgIcon.muiName = "SvgIcon";
var SvgIcon$1 = withStyles2(styles$w, {
  name: "MuiSvgIcon"
})(SvgIcon);
function createSvgIcon(path, displayName) {
  var Component = function Component2(props, ref) {
    return /* @__PURE__ */ React.createElement(SvgIcon$1, _extends({
      ref
    }, props), path);
  };
  Component.muiName = SvgIcon$1.muiName;
  return /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(Component));
}
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 166;
  var timeout;
  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var that = this;
    var later = function later2() {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = function() {
    clearTimeout(timeout);
  };
  return debounced;
}
function isMuiElement(element, muiNames) {
  return /* @__PURE__ */ react.exports.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc.defaultView || window;
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function useControlled(_ref3) {
  var controlled = _ref3.controlled, defaultProp = _ref3.default;
  _ref3.name;
  _ref3.state;
  var _React$useRef = react.exports.useRef(controlled !== void 0), isControlled = _React$useRef.current;
  var _React$useState = react.exports.useState(defaultProp), valueState = _React$useState[0], setValue = _React$useState[1];
  var value = isControlled ? controlled : valueState;
  var setValueIfUncontrolled = react.exports.useCallback(function(newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
var useEnhancedEffect$6 = typeof window !== "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
function useEventCallback(fn) {
  var ref = react.exports.useRef(fn);
  useEnhancedEffect$6(function() {
    ref.current = fn;
  });
  return react.exports.useCallback(function() {
    return ref.current.apply(void 0, arguments);
  }, []);
}
function useForkRef(refA, refB) {
  return react.exports.useMemo(function() {
    if (refA == null && refB == null) {
      return null;
    }
    return function(refValue) {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node) {
  var type = node.type, tagName = node.tagName;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  var target = event.target;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function handleBlurVisible() {
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
    hadFocusVisibleRecently = false;
  }, 100);
}
function useIsFocusVisible() {
  var ref = react.exports.useCallback(function(instance) {
    var node = reactDom.exports.findDOMNode(instance);
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  return {
    isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref
  };
}
var config = {
  disabled: false
};
var TransitionGroupContext = React.createContext(null);
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref3, prevState) {
    var nextIn = _ref3.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;
    if (timeout != null && typeof timeout !== "number") {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear !== void 0 ? timeout.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref22 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref22[0], maybeAppearing = _ref22[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
      value: null
    }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps));
  };
  return Transition2;
}(React.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && react.exports.isValidElement(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    react.exports.Children.map(children, function(c2) {
      return c2;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return react.exports.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!react.exports.isValidElement(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = react.exports.isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = react.exports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = react.exports.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && react.exports.isValidElement(prevChild)) {
      children[key] = react.exports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref3) {
    var prevChildMapping = _ref3.children, handleExited = _ref3.handleExited, firstRender = _ref3.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(React.Component);
TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup$1 = TransitionGroup;
var reflow = function reflow2(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout, _props$style = props.style, style2 = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style2.transitionDuration || typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    delay: style2.transitionDelay
  };
}
var styles$v = function styles2(theme) {
  var elevations = {};
  theme.shadows.forEach(function(shadow, index2) {
    elevations["elevation".concat(index2)] = {
      boxShadow: shadow
    };
  });
  return _extends({
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create("box-shadow")
    },
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /* @__PURE__ */ react.exports.forwardRef(function Paper2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, _props$square = props.square, square = _props$square === void 0 ? false : _props$square, _props$elevation = props.elevation, elevation = _props$elevation === void 0 ? 1 : _props$elevation, _props$variant = props.variant, variant = _props$variant === void 0 ? "elevation" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation", "variant"]);
  return /* @__PURE__ */ react.exports.createElement(Component, _extends({
    className: clsx(classes.root, className, variant === "outlined" ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref
  }, other));
});
var Paper$1 = withStyles2(styles$v, {
  name: "MuiPaper"
})(Paper);
var useEnhancedEffect$5 = typeof window === "undefined" ? react.exports.useEffect : react.exports.useLayoutEffect;
function Ripple(props) {
  var classes = props.classes, _props$pulsate = props.pulsate, pulsate = _props$pulsate === void 0 ? false : _props$pulsate, rippleX = props.rippleX, rippleY = props.rippleY, rippleSize = props.rippleSize, inProp = props.in, _props$onExited = props.onExited, onExited = _props$onExited === void 0 ? function() {
  } : _props$onExited, timeout = props.timeout;
  var _React$useState = react.exports.useState(false), leaving = _React$useState[0], setLeaving = _React$useState[1];
  var rippleClassName = clsx(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = useEventCallback(onExited);
  useEnhancedEffect$5(function() {
    if (!inProp) {
      setLeaving(true);
      var timeoutId = setTimeout(handleExited, timeout);
      return function() {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [handleExited, inProp, timeout]);
  return /* @__PURE__ */ react.exports.createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /* @__PURE__ */ react.exports.createElement("span", {
    className: childClassName
  }));
}
var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles$u = function styles3(theme) {
  return {
    root: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit"
    },
    ripple: {
      opacity: 0,
      position: "absolute"
    },
    rippleVisible: {
      opacity: 0.3,
      transform: "scale(1)",
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },
    child: {
      opacity: 1,
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: "currentColor"
    },
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    childPulsate: {
      position: "absolute",
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    "@keyframes enter": {
      "0%": {
        transform: "scale(0)",
        opacity: 0.1
      },
      "100%": {
        transform: "scale(1)",
        opacity: 0.3
      }
    },
    "@keyframes exit": {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      }
    },
    "@keyframes pulsate": {
      "0%": {
        transform: "scale(1)"
      },
      "50%": {
        transform: "scale(0.92)"
      },
      "100%": {
        transform: "scale(1)"
      }
    }
  };
};
var TouchRipple = /* @__PURE__ */ react.exports.forwardRef(function TouchRipple2(props, ref) {
  var _props$center = props.center, centerProp = _props$center === void 0 ? false : _props$center, classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["center", "classes", "className"]);
  var _React$useState = react.exports.useState([]), ripples = _React$useState[0], setRipples = _React$useState[1];
  var nextKey = react.exports.useRef(0);
  var rippleCallback = react.exports.useRef(null);
  react.exports.useEffect(function() {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  var ignoringMouseDown = react.exports.useRef(false);
  var startTimer = react.exports.useRef(null);
  var startTimerCommit = react.exports.useRef(null);
  var container = react.exports.useRef(null);
  react.exports.useEffect(function() {
    return function() {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = react.exports.useCallback(function(params) {
    var pulsate2 = params.pulsate, rippleX = params.rippleX, rippleY = params.rippleY, rippleSize = params.rippleSize, cb2 = params.cb;
    setRipples(function(oldRipples) {
      return [].concat(_toConsumableArray(oldRipples), [/* @__PURE__ */ react.exports.createElement(Ripple, {
        key: nextKey.current,
        classes,
        timeout: DURATION,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb2;
  }, [classes]);
  var start = react.exports.useCallback(function() {
    var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var cb2 = arguments.length > 2 ? arguments[2] : void 0;
    var _options$pulsate = options.pulsate, pulsate2 = _options$pulsate === void 0 ? false : _options$pulsate, _options$center = options.center, center = _options$center === void 0 ? centerProp || options.pulsate : _options$center, _options$fakeElement = options.fakeElement, fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;
    if (event.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    var rippleX;
    var rippleY;
    var rippleSize;
    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref3 = event.touches ? event.touches[0] : event, clientX = _ref3.clientX, clientY = _ref3.clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    }
    if (event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = function() {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb: cb2
          });
        };
        startTimer.current = setTimeout(function() {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb: cb2
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = react.exports.useCallback(function() {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = react.exports.useCallback(function(event, cb2) {
    clearTimeout(startTimer.current);
    if (event.type === "touchend" && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function() {
        stop(event, cb2);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples(function(oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb2;
  }, []);
  react.exports.useImperativeHandle(ref, function() {
    return {
      pulsate,
      start,
      stop
    };
  }, [pulsate, start, stop]);
  return /* @__PURE__ */ react.exports.createElement("span", _extends({
    className: clsx(classes.root, className),
    ref: container
  }, other), /* @__PURE__ */ react.exports.createElement(TransitionGroup$1, {
    component: null,
    exit: true
  }, ripples));
});
var TouchRipple$1 = withStyles2(styles$u, {
  flip: false,
  name: "MuiTouchRipple"
})(/* @__PURE__ */ react.exports.memo(TouchRipple));
var styles$t = {
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    "&$disabled": {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  },
  disabled: {},
  focusVisible: {}
};
var ButtonBase = /* @__PURE__ */ react.exports.forwardRef(function ButtonBase2(props, ref) {
  var action = props.action, buttonRefProp = props.buttonRef, _props$centerRipple = props.centerRipple, centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple, children = props.children, classes = props.classes, className = props.className, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableRipple = props.disableRipple, disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple, _props$disableTouchRi = props.disableTouchRipple, disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi, _props$focusRipple = props.focusRipple, focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple, focusVisibleClassName = props.focusVisibleClassName, onBlur = props.onBlur, onClick = props.onClick, onFocus = props.onFocus, onFocusVisible = props.onFocusVisible, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onMouseDown = props.onMouseDown, onMouseLeave = props.onMouseLeave, onMouseUp = props.onMouseUp, onTouchEnd = props.onTouchEnd, onTouchMove = props.onTouchMove, onTouchStart = props.onTouchStart, onDragLeave = props.onDragLeave, _props$tabIndex = props.tabIndex, tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex, TouchRippleProps = props.TouchRippleProps, _props$type = props.type, type = _props$type === void 0 ? "button" : _props$type, other = _objectWithoutProperties(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);
  var buttonRef = react.exports.useRef(null);
  function getButtonNode() {
    return reactDom.exports.findDOMNode(buttonRef.current);
  }
  var rippleRef = react.exports.useRef(null);
  var _React$useState = react.exports.useState(false), focusVisible = _React$useState[0], setFocusVisible = _React$useState[1];
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  react.exports.useImperativeHandle(action, function() {
    return {
      focusVisible: function focusVisible2() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  react.exports.useEffect(function() {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);
  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : disableTouchRipple;
    return useEventCallback(function(event) {
      if (eventCallback) {
        eventCallback(event);
      }
      var ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  var handleMouseDown = useRippleHandler("start", onMouseDown);
  var handleDragLeave = useRippleHandler("stop", onDragLeave);
  var handleMouseUp = useRippleHandler("stop", onMouseUp);
  var handleMouseLeave = useRippleHandler("stop", function(event) {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler("start", onTouchStart);
  var handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  var handleTouchMove = useRippleHandler("stop", onTouchMove);
  var handleBlur = useRippleHandler("stop", function(event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = useEventCallback(function(event) {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible2(event)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  var isNonNativeButton = function isNonNativeButton2() {
    var button = getButtonNode();
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  var keydownRef = react.exports.useRef(false);
  var handleKeyDown2 = useEventCallback(function(event) {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function() {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = useEventCallback(function(event) {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function() {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;
  if (ComponentProp === "button" && other.href) {
    ComponentProp = "a";
  }
  var buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== "a" || !other.href) {
      buttonProps.role = "button";
    }
    buttonProps["aria-disabled"] = disabled;
  }
  var handleUserRef = useForkRef(buttonRefProp, ref);
  var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  var handleRef = useForkRef(handleUserRef, handleOwnRef);
  var _React$useState2 = react.exports.useState(false), mountedState = _React$useState2[0], setMountedState = _React$useState2[1];
  react.exports.useEffect(function() {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;
  return /* @__PURE__ */ react.exports.createElement(ComponentProp, _extends({
    className: clsx(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ? /* @__PURE__ */ react.exports.createElement(TouchRipple$1, _extends({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
var ButtonBase$1 = withStyles2(styles$t, {
  name: "MuiButtonBase"
})(ButtonBase);
var styles$s = function styles4(theme) {
  return {
    root: {
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: "50%",
      overflow: "visible",
      color: theme.palette.action.active,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        backgroundColor: "transparent",
        color: theme.palette.action.disabled
      }
    },
    edgeStart: {
      marginLeft: -12,
      "$sizeSmall&": {
        marginLeft: -3
      }
    },
    edgeEnd: {
      marginRight: -12,
      "$sizeSmall&": {
        marginRight: -3
      }
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    colorSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    disabled: {},
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },
    label: {
      width: "100%",
      display: "flex",
      alignItems: "inherit",
      justifyContent: "inherit"
    }
  };
};
var IconButton = /* @__PURE__ */ react.exports.forwardRef(function IconButton2(props, ref) {
  var _props$edge = props.edge, edge = _props$edge === void 0 ? false : _props$edge, children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "default" : _props$color, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
  return /* @__PURE__ */ react.exports.createElement(ButtonBase$1, _extends({
    className: clsx(classes.root, className, color2 !== "default" && classes["color".concat(capitalize(color2))], disabled && classes.disabled, size === "small" && classes["size".concat(capitalize(size))], {
      "start": classes.edgeStart,
      "end": classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    ref
  }, other), /* @__PURE__ */ react.exports.createElement("span", {
    className: classes.label
  }, children));
});
var IconButton$1 = withStyles2(styles$s, {
  name: "MuiIconButton"
})(IconButton);
var Person = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}));
var styles$r = function styles5(theme) {
  return {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none"
    },
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    circle: {},
    circular: {},
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    square: {
      borderRadius: 0
    },
    img: {
      width: "100%",
      height: "100%",
      textAlign: "center",
      objectFit: "cover",
      color: "transparent",
      textIndent: 1e4
    },
    fallback: {
      width: "75%",
      height: "75%"
    }
  };
};
function useLoaded(_ref3) {
  var src = _ref3.src, srcSet = _ref3.srcSet;
  var _React$useState = react.exports.useState(false), loaded = _React$useState[0], setLoaded = _React$useState[1];
  react.exports.useEffect(function() {
    if (!src && !srcSet) {
      return void 0;
    }
    setLoaded(false);
    var active = true;
    var image = new Image();
    image.src = src;
    image.srcSet = srcSet;
    image.onload = function() {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    };
    image.onerror = function() {
      if (!active) {
        return;
      }
      setLoaded("error");
    };
    return function() {
      active = false;
    };
  }, [src, srcSet]);
  return loaded;
}
var Avatar = /* @__PURE__ */ react.exports.forwardRef(function Avatar2(props, ref) {
  var alt = props.alt, childrenProp = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, imgProps = props.imgProps, sizes = props.sizes, src = props.src, srcSet = props.srcSet, _props$variant = props.variant, variant = _props$variant === void 0 ? "circular" : _props$variant, other = _objectWithoutProperties(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);
  var children = null;
  var loaded = useLoaded({
    src,
    srcSet
  });
  var hasImg = src || srcSet;
  var hasImgNotFailing = hasImg && loaded !== "error";
  if (hasImgNotFailing) {
    children = /* @__PURE__ */ react.exports.createElement("img", _extends({
      alt,
      src,
      srcSet,
      sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /* @__PURE__ */ react.exports.createElement(Person, {
      className: classes.fallback
    });
  }
  return /* @__PURE__ */ react.exports.createElement(Component, _extends({
    className: clsx(classes.root, classes.system, classes[variant], className, !hasImgNotFailing && classes.colorDefault),
    ref
  }, other), children);
});
var Avatar$1 = withStyles2(styles$r, {
  name: "MuiAvatar"
})(Avatar);
var styleFunction = styleFunctionSx(compose(borders$1, display, flexbox$1, grid$1, positions, palette$1, shadows, sizing$1, spacing, typography$1));
var Box = styled$1("div")(styleFunction, {
  name: "MuiBox"
});
var Box$1 = Box;
var styles$q = function styles6(theme) {
  return {
    root: {
      margin: 0
    },
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
    subtitle1: theme.typography.subtitle1,
    subtitle2: theme.typography.subtitle2,
    overline: theme.typography.overline,
    srOnly: {
      position: "absolute",
      height: 1,
      width: 1,
      overflow: "hidden"
    },
    alignLeft: {
      textAlign: "left"
    },
    alignCenter: {
      textAlign: "center"
    },
    alignRight: {
      textAlign: "right"
    },
    alignJustify: {
      textAlign: "justify"
    },
    noWrap: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    gutterBottom: {
      marginBottom: "0.35em"
    },
    paragraph: {
      marginBottom: 16
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorTextPrimary: {
      color: theme.palette.text.primary
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    colorError: {
      color: theme.palette.error.main
    },
    displayInline: {
      display: "inline"
    },
    displayBlock: {
      display: "block"
    }
  };
};
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p"
};
var Typography = /* @__PURE__ */ react.exports.forwardRef(function Typography2(props, ref) {
  var _props$align = props.align, align = _props$align === void 0 ? "inherit" : _props$align, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "initial" : _props$color, component = props.component, _props$display = props.display, display2 = _props$display === void 0 ? "initial" : _props$display, _props$gutterBottom = props.gutterBottom, gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom, _props$noWrap = props.noWrap, noWrap = _props$noWrap === void 0 ? false : _props$noWrap, _props$paragraph = props.paragraph, paragraph = _props$paragraph === void 0 ? false : _props$paragraph, _props$variant = props.variant, variant = _props$variant === void 0 ? "body1" : _props$variant, _props$variantMapping = props.variantMapping, variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping, other = _objectWithoutProperties(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);
  var Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  return /* @__PURE__ */ react.exports.createElement(Component, _extends({
    className: clsx(classes.root, className, variant !== "inherit" && classes[variant], color2 !== "initial" && classes["color".concat(capitalize(color2))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== "inherit" && classes["align".concat(capitalize(align))], display2 !== "initial" && classes["display".concat(capitalize(display2))]),
    ref
  }, other));
});
var Typography$1 = withStyles2(styles$q, {
  name: "MuiTypography"
})(Typography);
var styles$p = function styles7(theme) {
  return {
    root: _extends({}, theme.typography.button, {
      boxSizing: "border-box",
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(["background-color", "box-shadow", "border"], {
        duration: theme.transitions.duration.short
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        },
        "&$disabled": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    }),
    label: {
      width: "100%",
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit"
    },
    text: {
      padding: "6px 8px"
    },
    textPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    textSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlined: {
      padding: "5px 15px",
      border: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(alpha(theme.palette.primary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(alpha(theme.palette.secondary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      "&:hover": {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        "@media (hover: none)": {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        "&$disabled": {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      "&$focusVisible": {
        boxShadow: theme.shadows[6]
      },
      "&:active": {
        boxShadow: theme.shadows[8]
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        "@media (hover: none)": {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        "@media (hover: none)": {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    disableElevation: {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none"
      },
      "&$focusVisible": {
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none"
      },
      "&$disabled": {
        boxShadow: "none"
      }
    },
    focusVisible: {},
    disabled: {},
    colorInherit: {
      color: "inherit",
      borderColor: "currentColor"
    },
    textSizeSmall: {
      padding: "4px 5px",
      fontSize: theme.typography.pxToRem(13)
    },
    textSizeLarge: {
      padding: "8px 11px",
      fontSize: theme.typography.pxToRem(15)
    },
    outlinedSizeSmall: {
      padding: "3px 9px",
      fontSize: theme.typography.pxToRem(13)
    },
    outlinedSizeLarge: {
      padding: "7px 21px",
      fontSize: theme.typography.pxToRem(15)
    },
    containedSizeSmall: {
      padding: "4px 10px",
      fontSize: theme.typography.pxToRem(13)
    },
    containedSizeLarge: {
      padding: "8px 22px",
      fontSize: theme.typography.pxToRem(15)
    },
    sizeSmall: {},
    sizeLarge: {},
    fullWidth: {
      width: "100%"
    },
    startIcon: {
      display: "inherit",
      marginRight: 8,
      marginLeft: -4,
      "&$iconSizeSmall": {
        marginLeft: -2
      }
    },
    endIcon: {
      display: "inherit",
      marginRight: -4,
      marginLeft: 8,
      "&$iconSizeSmall": {
        marginRight: -2
      }
    },
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: 18
      }
    },
    iconSizeMedium: {
      "& > *:first-child": {
        fontSize: 20
      }
    },
    iconSizeLarge: {
      "& > *:first-child": {
        fontSize: 22
      }
    }
  };
};
var Button = /* @__PURE__ */ react.exports.forwardRef(function Button2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableElevati = props.disableElevation, disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, endIconProp = props.endIcon, focusVisibleClassName = props.focusVisibleClassName, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, startIconProp = props.startIcon, _props$type = props.type, type = _props$type === void 0 ? "button" : _props$type, _props$variant = props.variant, variant = _props$variant === void 0 ? "text" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);
  var startIcon = startIconProp && /* @__PURE__ */ react.exports.createElement("span", {
    className: clsx(classes.startIcon, classes["iconSize".concat(capitalize(size))])
  }, startIconProp);
  var endIcon = endIconProp && /* @__PURE__ */ react.exports.createElement("span", {
    className: clsx(classes.endIcon, classes["iconSize".concat(capitalize(size))])
  }, endIconProp);
  return /* @__PURE__ */ react.exports.createElement(ButtonBase$1, _extends({
    className: clsx(classes.root, classes[variant], className, color2 === "inherit" ? classes.colorInherit : color2 !== "default" && classes["".concat(variant).concat(capitalize(color2))], size !== "medium" && [classes["".concat(variant, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other), /* @__PURE__ */ react.exports.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
var Button$1 = withStyles2(styles$p, {
  name: "MuiButton"
})(Button);
var FormControlContext = react.exports.createContext();
function useFormControl$1() {
  return react.exports.useContext(FormControlContext);
}
var FormControlContext$1 = FormControlContext;
function useFormControl() {
  return react.exports.useContext(FormControlContext$1);
}
var styles$o = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
var SwitchBase = /* @__PURE__ */ react.exports.forwardRef(function SwitchBase2(props, ref) {
  var autoFocus = props.autoFocus, checkedProp = props.checked, checkedIcon = props.checkedIcon, classes = props.classes, className = props.className, defaultChecked = props.defaultChecked, disabledProp = props.disabled, icon = props.icon, id2 = props.id, inputProps = props.inputProps, inputRef = props.inputRef, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, readOnly = props.readOnly, required = props.required, tabIndex = props.tabIndex, type = props.type, value = props.value, other = _objectWithoutProperties(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);
  var _useControlled = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), checked = _useControlled2[0], setCheckedState = _useControlled2[1];
  var muiFormControl = useFormControl();
  var handleFocus = function handleFocus2(event) {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  var handleBlur = function handleBlur2(event) {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  var handleInputChange = function handleInputChange2(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  var disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  var hasLabelFor = type === "checkbox" || type === "radio";
  return /* @__PURE__ */ react.exports.createElement(IconButton$1, _extends({
    component: "span",
    className: clsx(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref
  }, other), /* @__PURE__ */ react.exports.createElement("input", _extends({
    autoFocus,
    checked: checkedProp,
    defaultChecked,
    className: classes.input,
    disabled,
    id: hasLabelFor && id2,
    name,
    onChange: handleInputChange,
    readOnly,
    ref: inputRef,
    required,
    tabIndex,
    type,
    value
  }, inputProps)), checked ? checkedIcon : icon);
});
var SwitchBase$1 = withStyles2(styles$o, {
  name: "PrivateSwitchBase"
})(SwitchBase);
var CheckBoxOutlineBlankIcon = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}));
var CheckBoxIcon = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}));
var IndeterminateCheckBoxIcon = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}));
var styles$n = function styles8(theme) {
  return {
    root: {
      color: theme.palette.text.secondary
    },
    checked: {},
    disabled: {},
    indeterminate: {},
    colorPrimary: {
      "&$checked": {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    },
    colorSecondary: {
      "&$checked": {
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = /* @__PURE__ */ react.exports.createElement(CheckBoxIcon, null);
var defaultIcon = /* @__PURE__ */ react.exports.createElement(CheckBoxOutlineBlankIcon, null);
var defaultIndeterminateIcon = /* @__PURE__ */ react.exports.createElement(IndeterminateCheckBoxIcon, null);
var Checkbox = /* @__PURE__ */ react.exports.forwardRef(function Checkbox2(props, ref) {
  var _props$checkedIcon = props.checkedIcon, checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon, classes = props.classes, _props$color = props.color, color2 = _props$color === void 0 ? "secondary" : _props$color, _props$icon = props.icon, iconProp = _props$icon === void 0 ? defaultIcon : _props$icon, _props$indeterminate = props.indeterminate, indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate, _props$indeterminateI = props.indeterminateIcon, indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI, inputProps = props.inputProps, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);
  var icon = indeterminate ? indeterminateIconProp : iconProp;
  var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  return /* @__PURE__ */ react.exports.createElement(SwitchBase$1, _extends({
    type: "checkbox",
    classes: {
      root: clsx(classes.root, classes["color".concat(capitalize(color2))], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color: color2,
    inputProps: _extends({
      "data-indeterminate": indeterminate
    }, inputProps),
    icon: /* @__PURE__ */ react.exports.cloneElement(icon, {
      fontSize: icon.props.fontSize === void 0 && size === "small" ? size : icon.props.fontSize
    }),
    checkedIcon: /* @__PURE__ */ react.exports.cloneElement(indeterminateIcon, {
      fontSize: indeterminateIcon.props.fontSize === void 0 && size === "small" ? size : indeterminateIcon.props.fontSize
    }),
    ref
  }, other));
});
var Checkbox$1 = withStyles2(styles$n, {
  name: "MuiCheckbox"
})(Checkbox);
function getContainer$1(container) {
  container = typeof container === "function" ? container() : container;
  return reactDom.exports.findDOMNode(container);
}
var useEnhancedEffect$4 = typeof window !== "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
var Portal = /* @__PURE__ */ react.exports.forwardRef(function Portal2(props, ref) {
  var children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, onRendered = props.onRendered;
  var _React$useState = react.exports.useState(null), mountNode = _React$useState[0], setMountNode = _React$useState[1];
  var handleRef = useForkRef(/* @__PURE__ */ react.exports.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect$4(function() {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect$4(function() {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return function() {
        setRef(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect$4(function() {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ react.exports.isValidElement(children)) {
      return /* @__PURE__ */ react.exports.cloneElement(children, {
        ref: handleRef
      });
    }
    return children;
  }
  return mountNode ? /* @__PURE__ */ reactDom.exports.createPortal(children, mountNode) : mountNode;
});
var Portal$1 = Portal;
function getScrollbarSize() {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.width = "99px";
  scrollDiv.style.height = "99px";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.overflow = "scroll";
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}
function isOverflowing(container) {
  var doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(doc).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(node, show) {
  if (show) {
    node.setAttribute("aria-hidden", "true");
  } else {
    node.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)["padding-right"], 10) || 0;
}
function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : void 0;
  var blacklist = [mountNode, currentNode].concat(_toConsumableArray(nodesToExclude));
  var blacklistTagNames = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(container.children, function(node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}
function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function(item, index2) {
    if (callback(item)) {
      idx = index2;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      var scrollbarSize = getScrollbarSize();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: "padding-right",
        el: container
      });
      container.style["padding-right"] = "".concat(getPaddingRight(container) + scrollbarSize, "px");
      fixedNodes = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedNodes, function(node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    }
    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === "HTML" && window.getComputedStyle(parent)["overflow-y"] === "scroll" ? parent : container;
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: "overflow",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  var restore = function restore2() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function(node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty("padding-right");
        }
      });
    }
    restoreStyle.forEach(function(_ref3) {
      var value = _ref3.value, el2 = _ref3.el, key = _ref3.key;
      if (value) {
        el2.style.setProperty(key, value);
      } else {
        el2.style.removeProperty(key);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function(node) {
    if (node.getAttribute && node.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
var ModalManager = /* @__PURE__ */ function() {
  function ModalManager2() {
    _classCallCheck(this, ModalManager2);
    this.modals = [];
    this.containers = [];
  }
  _createClass(ModalManager2, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);
      if (modalIndex !== -1) {
        return modalIndex;
      }
      modalIndex = this.modals.length;
      this.modals.push(modal);
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }
      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.container === container;
      });
      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }
      this.containers.push({
        modals: [modal],
        container,
        restore: null,
        hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);
      if (modalIndex === -1) {
        return modalIndex;
      }
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1);
      if (containerInfo.modals.length === 0) {
        if (containerInfo.restore) {
          containerInfo.restore();
        }
        if (modal.modalRef) {
          ariaHidden(modal.modalRef, true);
        }
        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1];
        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }
      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);
  return ModalManager2;
}();
function Unstable_TrapFocus(props) {
  var children = props.children, _props$disableAutoFoc = props.disableAutoFocus, disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$disableEnforce = props.disableEnforceFocus, disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce, _props$disableRestore = props.disableRestoreFocus, disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore, getDoc = props.getDoc, isEnabled = props.isEnabled, open = props.open;
  var ignoreNextEnforceFocus = react.exports.useRef();
  var sentinelStart = react.exports.useRef(null);
  var sentinelEnd = react.exports.useRef(null);
  var nodeToRestore = react.exports.useRef();
  var rootRef = react.exports.useRef(null);
  var handleOwnRef = react.exports.useCallback(function(instance) {
    rootRef.current = reactDom.exports.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  var prevOpenRef = react.exports.useRef();
  react.exports.useEffect(function() {
    prevOpenRef.current = open;
  }, [open]);
  if (!prevOpenRef.current && open && typeof window !== "undefined") {
    nodeToRestore.current = getDoc().activeElement;
  }
  react.exports.useEffect(function() {
    if (!open) {
      return;
    }
    var doc = ownerDocument(rootRef.current);
    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        rootRef.current.setAttribute("tabIndex", -1);
      }
      rootRef.current.focus();
    }
    var contain = function contain2() {
      var rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };
    var loopFocus = function loopFocus2(event) {
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      }
      if (doc.activeElement === rootRef.current) {
        ignoreNextEnforceFocus.current = true;
        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };
    doc.addEventListener("focus", contain, true);
    doc.addEventListener("keydown", loopFocus, true);
    var interval = setInterval(function() {
      contain();
    }, 50);
    return function() {
      clearInterval(interval);
      doc.removeEventListener("focus", contain, true);
      doc.removeEventListener("keydown", loopFocus, true);
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /* @__PURE__ */ react.exports.cloneElement(children, {
    ref: handleRef
  }), /* @__PURE__ */ react.exports.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}
var styles$m = {
  root: {
    zIndex: -1,
    position: "fixed",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  },
  invisible: {
    backgroundColor: "transparent"
  }
};
var SimpleBackdrop = /* @__PURE__ */ react.exports.forwardRef(function SimpleBackdrop2(props, ref) {
  var _props$invisible = props.invisible, invisible = _props$invisible === void 0 ? false : _props$invisible, open = props.open, other = _objectWithoutProperties(props, ["invisible", "open"]);
  return open ? /* @__PURE__ */ react.exports.createElement("div", _extends({
    "aria-hidden": true,
    ref
  }, other, {
    style: _extends({}, styles$m.root, invisible ? styles$m.invisible : {}, other.style)
  })) : null;
});
var SimpleBackdrop$1 = SimpleBackdrop;
function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return reactDom.exports.findDOMNode(container);
}
function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty("in") : false;
}
var defaultManager = new ModalManager();
var styles$l = function styles9(theme) {
  return {
    root: {
      position: "fixed",
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },
    hidden: {
      visibility: "hidden"
    }
  };
};
var Modal = /* @__PURE__ */ react.exports.forwardRef(function Modal2(inProps, ref) {
  var theme = useTheme$1();
  var props = getThemeProps({
    name: "MuiModal",
    props: _extends({}, inProps),
    theme
  });
  var _props$BackdropCompon = props.BackdropComponent, BackdropComponent = _props$BackdropCompon === void 0 ? SimpleBackdrop$1 : _props$BackdropCompon, BackdropProps = props.BackdropProps, children = props.children, _props$closeAfterTran = props.closeAfterTransition, closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran, container = props.container, _props$disableAutoFoc = props.disableAutoFocus, disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$disableBackdro = props.disableBackdropClick, disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro, _props$disableEnforce = props.disableEnforceFocus, disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce, _props$disableEscapeK = props.disableEscapeKeyDown, disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, _props$disableRestore = props.disableRestoreFocus, disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore, _props$disableScrollL = props.disableScrollLock, disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL, _props$hideBackdrop = props.hideBackdrop, hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop, _props$keepMounted = props.keepMounted, keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted, _props$manager = props.manager, manager = _props$manager === void 0 ? defaultManager : _props$manager, onBackdropClick = props.onBackdropClick, onClose = props.onClose, onEscapeKeyDown = props.onEscapeKeyDown, onRendered = props.onRendered, open = props.open, other = _objectWithoutProperties(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);
  var _React$useState = react.exports.useState(true), exited = _React$useState[0], setExited = _React$useState[1];
  var modal = react.exports.useRef({});
  var mountNodeRef = react.exports.useRef(null);
  var modalRef = react.exports.useRef(null);
  var handleRef = useForkRef(modalRef, ref);
  var hasTransition = getHasTransition(props);
  var getDoc = function getDoc2() {
    return ownerDocument(mountNodeRef.current);
  };
  var getModal = function getModal2() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  var handleMounted = function handleMounted2() {
    manager.mount(getModal(), {
      disableScrollLock
    });
    modalRef.current.scrollTop = 0;
  };
  var handleOpen = useEventCallback(function() {
    var resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react.exports.useCallback(function() {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = useEventCallback(function(node) {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (onRendered) {
      onRendered();
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  var handleClose = react.exports.useCallback(function() {
    manager.remove(getModal());
  }, [manager]);
  react.exports.useEffect(function() {
    return function() {
      handleClose();
    };
  }, [handleClose]);
  react.exports.useEffect(function() {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  var handleExited = function handleExited2() {
    setExited(true);
    if (closeAfterTransition) {
      handleClose();
    }
  };
  var handleBackdropClick = function handleBackdropClick2(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (!disableBackdropClick && onClose) {
      onClose(event, "backdropClick");
    }
  };
  var handleKeyDown2 = function handleKeyDown3(event) {
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }
    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  var inlineStyle = styles$l(theme || {
    zIndex: zIndex$1
  });
  var childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = children.props.tabIndex || "-1";
  }
  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }
  return /* @__PURE__ */ react.exports.createElement(Portal$1, {
    ref: handlePortalRef,
    container,
    disablePortal
  }, /* @__PURE__ */ react.exports.createElement("div", _extends({
    ref: handleRef,
    onKeyDown: handleKeyDown2,
    role: "presentation"
  }, other, {
    style: _extends({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : /* @__PURE__ */ react.exports.createElement(BackdropComponent, _extends({
    open,
    onClick: handleBackdropClick
  }, BackdropProps)), /* @__PURE__ */ react.exports.createElement(Unstable_TrapFocus, {
    disableEnforceFocus,
    disableAutoFocus,
    disableRestoreFocus,
    getDoc,
    isEnabled: isTopModal,
    open
  }, /* @__PURE__ */ react.exports.cloneElement(children, childProps))));
});
var Modal$1 = Modal;
function formControlState(_ref3) {
  var props = _ref3.props, states = _ref3.states, muiFormControl = _ref3.muiFormControl;
  return states.reduce(function(acc, state) {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}
function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}
var useEnhancedEffect$3 = typeof window !== "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
var styles$k = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)"
  }
};
var TextareaAutosize = /* @__PURE__ */ react.exports.forwardRef(function TextareaAutosize2(props, ref) {
  var onChange = props.onChange, rows = props.rows, rowsMax = props.rowsMax, rowsMinProp = props.rowsMin, maxRowsProp = props.maxRows, _props$minRows = props.minRows, minRowsProp = _props$minRows === void 0 ? 1 : _props$minRows, style2 = props.style, value = props.value, other = _objectWithoutProperties(props, ["onChange", "rows", "rowsMax", "rowsMin", "maxRows", "minRows", "style", "value"]);
  var maxRows = maxRowsProp || rowsMax;
  var minRows = rows || rowsMinProp || minRowsProp;
  var _React$useRef = react.exports.useRef(value != null), isControlled = _React$useRef.current;
  var inputRef = react.exports.useRef(null);
  var handleRef = useForkRef(ref, inputRef);
  var shadowRef = react.exports.useRef(null);
  var renders = react.exports.useRef(0);
  var _React$useState = react.exports.useState({}), state = _React$useState[0], setState = _React$useState[1];
  var syncHeight = react.exports.useCallback(function() {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    var boxSizing2 = computedStyle["box-sizing"];
    var padding = getStyleValue(computedStyle, "padding-bottom") + getStyleValue(computedStyle, "padding-top");
    var border2 = getStyleValue(computedStyle, "border-bottom-width") + getStyleValue(computedStyle, "border-top-width");
    var innerHeight = inputShallow.scrollHeight - padding;
    inputShallow.value = "x";
    var singleRowHeight = inputShallow.scrollHeight - padding;
    var outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    var outerHeightStyle = outerHeight + (boxSizing2 === "border-box" ? padding + border2 : 0);
    var overflow2 = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function(prevState) {
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow2)) {
        renders.current += 1;
        return {
          overflow: overflow2,
          outerHeightStyle
        };
      }
      return prevState;
    });
  }, [maxRows, minRows, props.placeholder]);
  react.exports.useEffect(function() {
    var handleResize = debounce(function() {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect$3(function() {
    syncHeight();
  });
  react.exports.useEffect(function() {
    renders.current = 0;
  }, [value]);
  var handleChange = function handleChange2(event) {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement("textarea", _extends({
    value,
    onChange: handleChange,
    ref: handleRef,
    rows: minRows,
    style: _extends({
      height: state.outerHeightStyle,
      overflow: state.overflow ? "hidden" : null
    }, style2)
  }, other)), /* @__PURE__ */ react.exports.createElement("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: _extends({}, styles$k.shadow, style2)
  }));
});
var TextareaAutosize$1 = TextareaAutosize;
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}
var styles$j = function styles10(theme) {
  var light2 = theme.palette.type === "light";
  var placeholder = {
    color: "currentColor",
    opacity: light2 ? 0.42 : 0.5,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: "0 !important"
  };
  var placeholderVisible = {
    opacity: light2 ? 0.42 : 0.5
  };
  return {
    "@global": {
      "@keyframes mui-auto-fill": {},
      "@keyframes mui-auto-fill-cancel": {}
    },
    root: _extends({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: "1.1876em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      "&$disabled": {
        color: theme.palette.text.disabled,
        cursor: "default"
      }
    }),
    formControl: {},
    focused: {},
    disabled: {},
    adornedStart: {},
    adornedEnd: {},
    error: {},
    marginDense: {},
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      "&$marginDense": {
        paddingTop: 4 - 1
      }
    },
    colorSecondary: {},
    fullWidth: {
      width: "100%"
    },
    input: {
      font: "inherit",
      letterSpacing: "inherit",
      color: "currentColor",
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: "content-box",
      background: "none",
      height: "1.1876em",
      margin: 0,
      WebkitTapHighlightColor: "transparent",
      display: "block",
      minWidth: 0,
      width: "100%",
      animationName: "mui-auto-fill-cancel",
      animationDuration: "10ms",
      "&::-webkit-input-placeholder": placeholder,
      "&::-moz-placeholder": placeholder,
      "&:-ms-input-placeholder": placeholder,
      "&::-ms-input-placeholder": placeholder,
      "&:focus": {
        outline: 0
      },
      "&:invalid": {
        boxShadow: "none"
      },
      "&::-webkit-search-decoration": {
        "-webkit-appearance": "none"
      },
      "label[data-shrink=false] + $formControl &": {
        "&::-webkit-input-placeholder": placeholderHidden,
        "&::-moz-placeholder": placeholderHidden,
        "&:-ms-input-placeholder": placeholderHidden,
        "&::-ms-input-placeholder": placeholderHidden,
        "&:focus::-webkit-input-placeholder": placeholderVisible,
        "&:focus::-moz-placeholder": placeholderVisible,
        "&:focus:-ms-input-placeholder": placeholderVisible,
        "&:focus::-ms-input-placeholder": placeholderVisible
      },
      "&$disabled": {
        opacity: 1
      },
      "&:-webkit-autofill": {
        animationDuration: "5000s",
        animationName: "mui-auto-fill"
      }
    },
    inputMarginDense: {
      paddingTop: 4 - 1
    },
    inputMultiline: {
      height: "auto",
      resize: "none",
      padding: 0
    },
    inputTypeSearch: {
      "-moz-appearance": "textfield",
      "-webkit-appearance": "textfield"
    },
    inputAdornedStart: {},
    inputAdornedEnd: {},
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect$2 = typeof window === "undefined" ? react.exports.useEffect : react.exports.useLayoutEffect;
var InputBase = /* @__PURE__ */ react.exports.forwardRef(function InputBase2(props, ref) {
  var ariaDescribedby = props["aria-describedby"], autoComplete = props.autoComplete, autoFocus = props.autoFocus, classes = props.classes, className = props.className;
  props.color;
  var defaultValue = props.defaultValue, disabled = props.disabled, endAdornment = props.endAdornment;
  props.error;
  var _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, id2 = props.id, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$inputProps = props.inputProps, inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps, inputRefProp = props.inputRef;
  props.margin;
  var _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onClick = props.onClick, onFocus = props.onFocus, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, placeholder = props.placeholder, readOnly = props.readOnly, renderSuffix = props.renderSuffix, rows = props.rows, rowsMax = props.rowsMax, rowsMin = props.rowsMin, maxRows = props.maxRows, minRows = props.minRows, startAdornment = props.startAdornment, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, valueProp = props.value, other = _objectWithoutProperties(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "maxRows", "minRows", "startAdornment", "type", "value"]);
  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  var _React$useRef = react.exports.useRef(value != null), isControlled = _React$useRef.current;
  var inputRef = react.exports.useRef();
  var handleInputRefWarning = react.exports.useCallback(function(instance) {
  }, []);
  var handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = useForkRef(inputRef, handleInputRefProp);
  var _React$useState = react.exports.useState(false), focused = _React$useState[0], setFocused = _React$useState[1];
  var muiFormControl = useFormControl$1();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "margin", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  react.exports.useEffect(function() {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react.exports.useCallback(function(obj) {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect$2(function() {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  var handleFocus = function handleFocus2(event) {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  var handleBlur = function handleBlur2(event) {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    }
    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  };
  react.exports.useEffect(function() {
    checkDirty(inputRef.current);
  }, []);
  var handleClick = function handleClick2(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  var InputComponent = inputComponent;
  var inputProps = _extends({}, inputPropsProp, {
    ref: handleInputRef
  });
  if (typeof InputComponent !== "string") {
    inputProps = _extends({
      inputRef: handleInputRef,
      type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !maxRows && !minRows && !rowsMax && !rowsMin) {
      InputComponent = "textarea";
    } else {
      inputProps = _extends({
        minRows: rows || minRows,
        rowsMax,
        maxRows
      }, inputProps);
      InputComponent = TextareaAutosize$1;
    }
  } else {
    inputProps = _extends({
      type
    }, inputProps);
  }
  var handleAutoFill = function handleAutoFill2(event) {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  react.exports.useEffect(function() {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /* @__PURE__ */ react.exports.createElement("div", _extends({
    className: clsx(classes.root, classes["color".concat(capitalize(fcs.color || "primary"))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === "dense" && classes.marginDense),
    onClick: handleClick,
    ref
  }, other), startAdornment, /* @__PURE__ */ react.exports.createElement(FormControlContext$1.Provider, {
    value: null
  }, /* @__PURE__ */ react.exports.createElement(InputComponent, _extends({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    defaultValue,
    disabled: fcs.disabled,
    id: id2,
    onAnimationStart: handleAutoFill,
    name,
    placeholder,
    readOnly,
    required: fcs.required,
    rows,
    value,
    onKeyDown,
    onKeyUp
  }, inputProps, {
    className: clsx(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === "search" && classes.inputTypeSearch, fcs.margin === "dense" && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
    startAdornment
  })) : null);
});
var InputBase$1 = withStyles2(styles$j, {
  name: "MuiInputBase"
})(InputBase);
var styles$i = function styles11(theme) {
  var light2 = theme.palette.type === "light";
  var bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  var backgroundColor = light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)";
  return {
    root: {
      position: "relative",
      backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: light2 ? "rgba(0, 0, 0, 0.13)" : "rgba(255, 255, 255, 0.13)",
        "@media (hover: none)": {
          backgroundColor
        }
      },
      "&$focused": {
        backgroundColor: light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)"
      },
      "&$disabled": {
        backgroundColor: light2 ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"
      }
    },
    colorSecondary: {
      "&$underline:after": {
        borderBottomColor: theme.palette.secondary.main
      }
    },
    underline: {
      "&:after": {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        content: '""',
        position: "absolute",
        right: 0,
        transform: "scaleX(0)",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: "none"
      },
      "&$focused:after": {
        transform: "scaleX(1)"
      },
      "&$error:after": {
        borderBottomColor: theme.palette.error.main,
        transform: "scaleX(1)"
      },
      "&:before": {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        content: '"\\00a0"',
        position: "absolute",
        right: 0,
        transition: theme.transitions.create("border-bottom-color", {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: "none"
      },
      "&:hover:before": {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      "&$disabled:before": {
        borderBottomStyle: "dotted"
      }
    },
    focused: {},
    disabled: {},
    adornedStart: {
      paddingLeft: 12
    },
    adornedEnd: {
      paddingRight: 12
    },
    error: {},
    marginDense: {},
    multiline: {
      padding: "27px 12px 10px",
      "&$marginDense": {
        paddingTop: 23,
        paddingBottom: 6
      }
    },
    input: {
      padding: "27px 12px 10px",
      "&:-webkit-autofill": {
        WebkitBoxShadow: theme.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.type === "light" ? null : "#fff",
        caretColor: theme.palette.type === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }
    },
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      "&$inputMarginDense": {
        paddingTop: 10,
        paddingBottom: 11
      }
    },
    inputMultiline: {
      padding: 0
    },
    inputAdornedStart: {
      paddingLeft: 0
    },
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = /* @__PURE__ */ react.exports.forwardRef(function FilledInput2(props, ref) {
  var disableUnderline = props.disableUnderline, classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);
  return /* @__PURE__ */ react.exports.createElement(InputBase$1, _extends({
    classes: _extends({}, classes, {
      root: clsx(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
FilledInput.muiName = "Input";
var FilledInput$1 = withStyles2(styles$i, {
  name: "MuiFilledInput"
})(FilledInput);
var styles$h = {
  root: {
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top"
  },
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },
  fullWidth: {
    width: "100%"
  }
};
var FormControl = /* @__PURE__ */ react.exports.forwardRef(function FormControl2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "primary" : _props$color, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$error = props.error, error = _props$error === void 0 ? false : _props$error, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, visuallyFocused = props.focused, _props$hiddenLabel = props.hiddenLabel, hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel, _props$margin = props.margin, margin = _props$margin === void 0 ? "none" : _props$margin, _props$required = props.required, required = _props$required === void 0 ? false : _props$required, size = props.size, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);
  var _React$useState = react.exports.useState(function() {
    var initialAdornedStart = false;
    if (children) {
      react.exports.Children.forEach(children, function(child) {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        var input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  }), adornedStart = _React$useState[0], setAdornedStart = _React$useState[1];
  var _React$useState2 = react.exports.useState(function() {
    var initialFilled = false;
    if (children) {
      react.exports.Children.forEach(children, function(child) {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  }), filled = _React$useState2[0], setFilled = _React$useState2[1];
  var _React$useState3 = react.exports.useState(false), _focused = _React$useState3[0], setFocused = _React$useState3[1];
  var focused = visuallyFocused !== void 0 ? visuallyFocused : _focused;
  if (disabled && focused) {
    setFocused(false);
  }
  var registerEffect;
  var onFilled = react.exports.useCallback(function() {
    setFilled(true);
  }, []);
  var onEmpty = react.exports.useCallback(function() {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart,
    setAdornedStart,
    color: color2,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    margin: (size === "small" ? "dense" : void 0) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty,
    onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return /* @__PURE__ */ react.exports.createElement(FormControlContext$1.Provider, {
    value: childContext
  }, /* @__PURE__ */ react.exports.createElement(Component, _extends({
    className: clsx(classes.root, className, margin !== "none" && classes["margin".concat(capitalize(margin))], fullWidth && classes.fullWidth),
    ref
  }, other), children));
});
var FormControl$1 = withStyles2(styles$h, {
  name: "MuiFormControl"
})(FormControl);
var styles$g = function styles12(theme) {
  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      verticalAlign: "middle",
      WebkitTapHighlightColor: "transparent",
      marginLeft: -11,
      marginRight: 16,
      "&$disabled": {
        cursor: "default"
      }
    },
    labelPlacementStart: {
      flexDirection: "row-reverse",
      marginLeft: 16,
      marginRight: -11
    },
    labelPlacementTop: {
      flexDirection: "column-reverse",
      marginLeft: 16
    },
    labelPlacementBottom: {
      flexDirection: "column",
      marginLeft: 16
    },
    disabled: {},
    label: {
      "&$disabled": {
        color: theme.palette.text.disabled
      }
    }
  };
};
var FormControlLabel = /* @__PURE__ */ react.exports.forwardRef(function FormControlLabel2(props, ref) {
  props.checked;
  var classes = props.classes, className = props.className, control = props.control, disabledProp = props.disabled;
  props.inputRef;
  var label = props.label, _props$labelPlacement = props.labelPlacement, labelPlacement = _props$labelPlacement === void 0 ? "end" : _props$labelPlacement;
  props.name;
  props.onChange;
  props.value;
  var other = _objectWithoutProperties(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);
  var muiFormControl = useFormControl();
  var disabled = disabledProp;
  if (typeof disabled === "undefined" && typeof control.props.disabled !== "undefined") {
    disabled = control.props.disabled;
  }
  if (typeof disabled === "undefined" && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  var controlProps = {
    disabled
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach(function(key) {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  return /* @__PURE__ */ react.exports.createElement("label", _extends({
    className: clsx(classes.root, className, labelPlacement !== "end" && classes["labelPlacement".concat(capitalize(labelPlacement))], disabled && classes.disabled),
    ref
  }, other), /* @__PURE__ */ react.exports.cloneElement(control, controlProps), /* @__PURE__ */ react.exports.createElement(Typography$1, {
    component: "span",
    className: clsx(classes.label, disabled && classes.disabled)
  }, label));
});
var FormControlLabel$1 = withStyles2(styles$g, {
  name: "MuiFormControlLabel"
})(FormControlLabel);
var styles$f = function styles13(theme) {
  return {
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: "left",
      marginTop: 3,
      margin: 0,
      "&$disabled": {
        color: theme.palette.text.disabled
      },
      "&$error": {
        color: theme.palette.error.main
      }
    }),
    error: {},
    disabled: {},
    marginDense: {
      marginTop: 4
    },
    contained: {
      marginLeft: 14,
      marginRight: 14
    },
    focused: {},
    filled: {},
    required: {}
  };
};
var FormHelperText = /* @__PURE__ */ react.exports.forwardRef(function FormHelperText2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component = _props$component === void 0 ? "p" : _props$component;
  props.disabled;
  props.error;
  props.filled;
  props.focused;
  props.margin;
  props.required;
  props.variant;
  var other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);
  var muiFormControl = useFormControl();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "margin", "disabled", "error", "filled", "focused", "required"]
  });
  return /* @__PURE__ */ react.exports.createElement(Component, _extends({
    className: clsx(classes.root, (fcs.variant === "filled" || fcs.variant === "outlined") && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === "dense" && classes.marginDense),
    ref
  }, other), children === " " ? /* @__PURE__ */ react.exports.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "&#8203;"
    }
  }) : children);
});
var FormHelperText$1 = withStyles2(styles$f, {
  name: "MuiFormHelperText"
})(FormHelperText);
var styles$e = function styles14(theme) {
  return {
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      "&$focused": {
        color: theme.palette.primary.main
      },
      "&$disabled": {
        color: theme.palette.text.disabled
      },
      "&$error": {
        color: theme.palette.error.main
      }
    }),
    colorSecondary: {
      "&$focused": {
        color: theme.palette.secondary.main
      }
    },
    focused: {},
    disabled: {},
    error: {},
    filled: {},
    required: {},
    asterisk: {
      "&$error": {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = /* @__PURE__ */ react.exports.forwardRef(function FormLabel2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className;
  props.color;
  var _props$component = props.component, Component = _props$component === void 0 ? "label" : _props$component;
  props.disabled;
  props.error;
  props.filled;
  props.focused;
  props.required;
  var other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);
  var muiFormControl = useFormControl();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  return /* @__PURE__ */ react.exports.createElement(Component, _extends({
    className: clsx(classes.root, classes["color".concat(capitalize(fcs.color || "primary"))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref
  }, other), children, fcs.required && /* @__PURE__ */ react.exports.createElement("span", {
    "aria-hidden": true,
    className: clsx(classes.asterisk, fcs.error && classes.error)
  }, "\u2009", "*"));
});
var FormLabel$1 = withStyles2(styles$e, {
  name: "MuiFormLabel"
})(FormLabel);
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}
var styles$d = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var Grow = /* @__PURE__ */ react.exports.forwardRef(function Grow2(props, ref) {
  var children = props.children, _props$disableStrictM = props.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style2 = props.style, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? "auto" : _props$timeout, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition$1 : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var timer = react.exports.useRef();
  var autoTimeout = react.exports.useRef();
  var theme = useTheme();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react.exports.useRef(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : void 0, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref3 = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref22 = _slicedToArray(_ref3, 2), node = _ref22[0], isAppearing = _ref22[1];
        if (isAppearing === void 0) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    reflow(node);
    var _getTransitionProps = getTransitionProps({
      style: style2,
      timeout
    }, {
      mode: "enter"
    }), transitionDuration = _getTransitionProps.duration, delay = _getTransitionProps.delay;
    var duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: duration2 * 0.666,
      delay
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node) {
    var _getTransitionProps2 = getTransitionProps({
      style: style2,
      timeout
    }, {
      mode: "exit"
    }), transitionDuration = _getTransitionProps2.duration, delay = _getTransitionProps2.delay;
    var duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: duration2 * 0.666,
      delay: delay || duration2 * 0.333
    })].join(",");
    node.style.opacity = "0";
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var addEndListener = function addEndListener2(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;
    if (timeout === "auto") {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };
  react.exports.useEffect(function() {
    return function() {
      clearTimeout(timer.current);
    };
  }, []);
  return /* @__PURE__ */ react.exports.createElement(TransitionComponent, _extends({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other), function(state, childProps) {
    return /* @__PURE__ */ react.exports.cloneElement(children, _extends({
      style: _extends({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles$d[state], style2, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
Grow.muiSupportAuto = true;
var Grow$1 = Grow;
var styles$c = function styles15(theme) {
  var light2 = theme.palette.type === "light";
  var bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return {
    root: {
      position: "relative"
    },
    formControl: {
      "label + &": {
        marginTop: 16
      }
    },
    focused: {},
    disabled: {},
    colorSecondary: {
      "&$underline:after": {
        borderBottomColor: theme.palette.secondary.main
      }
    },
    underline: {
      "&:after": {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        content: '""',
        position: "absolute",
        right: 0,
        transform: "scaleX(0)",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: "none"
      },
      "&$focused:after": {
        transform: "scaleX(1)"
      },
      "&$error:after": {
        borderBottomColor: theme.palette.error.main,
        transform: "scaleX(1)"
      },
      "&:before": {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        content: '"\\00a0"',
        position: "absolute",
        right: 0,
        transition: theme.transitions.create("border-bottom-color", {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: "none"
      },
      "&:hover:not($disabled):before": {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        "@media (hover: none)": {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      "&$disabled:before": {
        borderBottomStyle: "dotted"
      }
    },
    error: {},
    marginDense: {},
    multiline: {},
    fullWidth: {},
    input: {},
    inputMarginDense: {},
    inputMultiline: {},
    inputTypeSearch: {}
  };
};
var Input = /* @__PURE__ */ react.exports.forwardRef(function Input2(props, ref) {
  var disableUnderline = props.disableUnderline, classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);
  return /* @__PURE__ */ react.exports.createElement(InputBase$1, _extends({
    classes: _extends({}, classes, {
      root: clsx(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
Input.muiName = "Input";
var Input$1 = withStyles2(styles$c, {
  name: "MuiInput"
})(Input);
var styles$b = function styles16(theme) {
  return {
    root: {
      display: "block",
      transformOrigin: "top left"
    },
    focused: {},
    disabled: {},
    error: {},
    required: {},
    asterisk: {},
    formControl: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "translate(0, 24px) scale(1)"
    },
    marginDense: {
      transform: "translate(0, 21px) scale(1)"
    },
    shrink: {
      transform: "translate(0, 1.5px) scale(0.75)",
      transformOrigin: "top left"
    },
    animated: {
      transition: theme.transitions.create(["color", "transform"], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },
    filled: {
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 20px) scale(1)",
      "&$marginDense": {
        transform: "translate(12px, 17px) scale(1)"
      },
      "&$shrink": {
        transform: "translate(12px, 10px) scale(0.75)",
        "&$marginDense": {
          transform: "translate(12px, 7px) scale(0.75)"
        }
      }
    },
    outlined: {
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 20px) scale(1)",
      "&$marginDense": {
        transform: "translate(14px, 12px) scale(1)"
      },
      "&$shrink": {
        transform: "translate(14px, -6px) scale(0.75)"
      }
    }
  };
};
var InputLabel = /* @__PURE__ */ react.exports.forwardRef(function InputLabel2(props, ref) {
  var classes = props.classes, className = props.className, _props$disableAnimati = props.disableAnimation, disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati;
  props.margin;
  var shrinkProp = props.shrink;
  props.variant;
  var other = _objectWithoutProperties(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);
  var muiFormControl = useFormControl();
  var shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["margin", "variant"]
  });
  return /* @__PURE__ */ react.exports.createElement(FormLabel$1, _extends({
    "data-shrink": shrink,
    className: clsx(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === "dense" && classes.marginDense, {
      "filled": classes.filled,
      "outlined": classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref
  }, other));
});
var InputLabel$1 = withStyles2(styles$b, {
  name: "MuiInputLabel"
})(InputLabel);
var ListContext = react.exports.createContext({});
var ListContext$1 = ListContext;
var styles$a = {
  root: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative"
  },
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },
  dense: {},
  subheader: {
    paddingTop: 0
  }
};
var List = /* @__PURE__ */ react.exports.forwardRef(function List2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component = _props$component === void 0 ? "ul" : _props$component, _props$dense = props.dense, dense = _props$dense === void 0 ? false : _props$dense, _props$disablePadding = props.disablePadding, disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding, subheader = props.subheader, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);
  var context = react.exports.useMemo(function() {
    return {
      dense
    };
  }, [dense]);
  return /* @__PURE__ */ react.exports.createElement(ListContext$1.Provider, {
    value: context
  }, /* @__PURE__ */ react.exports.createElement(Component, _extends({
    className: clsx(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref
  }, other), subheader, children));
});
var List$1 = withStyles2(styles$a, {
  name: "MuiList"
})(List);
var styles$9 = function styles17(theme) {
  return {
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      paddingTop: 8,
      paddingBottom: 8,
      "&$focusVisible": {
        backgroundColor: theme.palette.action.selected
      },
      "&$selected, &$selected:hover": {
        backgroundColor: theme.palette.action.selected
      },
      "&$disabled": {
        opacity: 0.5
      }
    },
    container: {
      position: "relative"
    },
    focusVisible: {},
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },
    alignItemsFlexStart: {
      alignItems: "flex-start"
    },
    disabled: {},
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: "padding-box"
    },
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },
    button: {
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: theme.palette.action.hover,
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    secondaryAction: {
      paddingRight: 48
    },
    selected: {}
  };
};
var useEnhancedEffect$1 = typeof window === "undefined" ? react.exports.useEffect : react.exports.useLayoutEffect;
var ListItem = /* @__PURE__ */ react.exports.forwardRef(function ListItem2(props, ref) {
  var _props$alignItems = props.alignItems, alignItems2 = _props$alignItems === void 0 ? "center" : _props$alignItems, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, _props$button = props.button, button = _props$button === void 0 ? false : _props$button, childrenProp = props.children, classes = props.classes, className = props.className, componentProp = props.component, _props$ContainerCompo = props.ContainerComponent, ContainerComponent = _props$ContainerCompo === void 0 ? "li" : _props$ContainerCompo, _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;
  var ContainerClassName = _props$ContainerProps.className, ContainerProps = _objectWithoutProperties(_props$ContainerProps, ["className"]), _props$dense = props.dense, dense = _props$dense === void 0 ? false : _props$dense, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, _props$divider = props.divider, divider = _props$divider === void 0 ? false : _props$divider, focusVisibleClassName = props.focusVisibleClassName, _props$selected = props.selected, selected = _props$selected === void 0 ? false : _props$selected, other = _objectWithoutProperties(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);
  var context = react.exports.useContext(ListContext$1);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems2
  };
  var listItemRef = react.exports.useRef(null);
  useEnhancedEffect$1(function() {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      }
    }
  }, [autoFocus]);
  var children = react.exports.Children.toArray(childrenProp);
  var hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ["ListItemSecondaryAction"]);
  var handleOwnRef = react.exports.useCallback(function(instance) {
    listItemRef.current = reactDom.exports.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(handleOwnRef, ref);
  var componentProps = _extends({
    className: clsx(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems2 !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled
  }, other);
  var Component = componentProp || "li";
  if (button) {
    componentProps.component = componentProp || "div";
    componentProps.focusVisibleClassName = clsx(classes.focusVisible, focusVisibleClassName);
    Component = ButtonBase$1;
  }
  if (hasSecondaryAction) {
    Component = !componentProps.component && !componentProp ? "div" : Component;
    if (ContainerComponent === "li") {
      if (Component === "li") {
        Component = "div";
      } else if (componentProps.component === "li") {
        componentProps.component = "div";
      }
    }
    return /* @__PURE__ */ react.exports.createElement(ListContext$1.Provider, {
      value: childContext
    }, /* @__PURE__ */ react.exports.createElement(ContainerComponent, _extends({
      className: clsx(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /* @__PURE__ */ react.exports.createElement(Component, componentProps, children), children.pop()));
  }
  return /* @__PURE__ */ react.exports.createElement(ListContext$1.Provider, {
    value: childContext
  }, /* @__PURE__ */ react.exports.createElement(Component, _extends({
    ref: handleRef
  }, componentProps), children));
});
var ListItem$1 = withStyles2(styles$9, {
  name: "MuiListItem"
})(ListItem);
var styles$8 = {
  root: {
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },
  dense: {},
  inset: {
    paddingLeft: 56
  },
  primary: {},
  secondary: {}
};
var ListItemText = /* @__PURE__ */ react.exports.forwardRef(function ListItemText2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$disableTypogra = props.disableTypography, disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra, _props$inset = props.inset, inset = _props$inset === void 0 ? false : _props$inset, primaryProp = props.primary, primaryTypographyProps = props.primaryTypographyProps, secondaryProp = props.secondary, secondaryTypographyProps = props.secondaryTypographyProps, other = _objectWithoutProperties(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);
  var _React$useContext = react.exports.useContext(ListContext$1), dense = _React$useContext.dense;
  var primary = primaryProp != null ? primaryProp : children;
  if (primary != null && primary.type !== Typography$1 && !disableTypography) {
    primary = /* @__PURE__ */ react.exports.createElement(Typography$1, _extends({
      variant: dense ? "body2" : "body1",
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }
  var secondary = secondaryProp;
  if (secondary != null && secondary.type !== Typography$1 && !disableTypography) {
    secondary = /* @__PURE__ */ react.exports.createElement(Typography$1, _extends({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }
  return /* @__PURE__ */ react.exports.createElement("div", _extends({
    className: clsx(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref
  }, other), primary, secondary);
});
var ListItemText$1 = withStyles2(styles$8, {
  name: "MuiListItemText"
})(ListItemText);
function getOffsetTop(rect, vertical) {
  var offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function(n2) {
    return typeof n2 === "number" ? "".concat(n2, "px") : n2;
  }).join(" ");
}
function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;
  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }
  return scrollTop;
}
function getAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var styles$7 = {
  root: {},
  paper: {
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
  }
};
var Popover = /* @__PURE__ */ react.exports.forwardRef(function Popover2(props, ref) {
  var action = props.action, anchorEl = props.anchorEl, _props$anchorOrigin = props.anchorOrigin, anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: "top",
    horizontal: "left"
  } : _props$anchorOrigin, anchorPosition = props.anchorPosition, _props$anchorReferenc = props.anchorReference, anchorReference = _props$anchorReferenc === void 0 ? "anchorEl" : _props$anchorReferenc, children = props.children, classes = props.classes, className = props.className, containerProp = props.container, _props$elevation = props.elevation, elevation = _props$elevation === void 0 ? 8 : _props$elevation, getContentAnchorEl = props.getContentAnchorEl, _props$marginThreshol = props.marginThreshold, marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, open = props.open, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, _props$transformOrigi = props.transformOrigin, transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: "top",
    horizontal: "left"
  } : _props$transformOrigi, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow$1 : _props$TransitionComp, _props$transitionDura = props.transitionDuration, transitionDurationProp = _props$transitionDura === void 0 ? "auto" : _props$transitionDura, _props$TransitionProp = props.TransitionProps, TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp, other = _objectWithoutProperties(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  var paperRef = react.exports.useRef();
  var getAnchorOffset = react.exports.useCallback(function(contentAnchorOffset) {
    if (anchorReference === "anchorPosition") {
      return anchorPosition;
    }
    var resolvedAnchorEl = getAnchorEl(anchorEl);
    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();
    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : "center";
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  var getContentAnchorOffset = react.exports.useCallback(function(element) {
    var contentAnchorOffset = 0;
    if (getContentAnchorEl && anchorReference === "anchorEl") {
      var contentAnchorEl = getContentAnchorEl(element);
      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      }
    }
    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]);
  var getTransformOrigin = react.exports.useCallback(function(elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = react.exports.useCallback(function(element) {
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    var anchorOffset = getAnchorOffset(contentAnchorOffset);
    var top2 = anchorOffset.top - elemTransformOrigin.vertical;
    var left2 = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom2 = top2 + elemRect.height;
    var right2 = left2 + elemRect.width;
    var containerWindow = ownerWindow(getAnchorEl(anchorEl));
    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (top2 < marginThreshold) {
      var diff = top2 - marginThreshold;
      top2 -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom2 > heightThreshold) {
      var _diff = bottom2 - heightThreshold;
      top2 -= _diff;
      elemTransformOrigin.vertical += _diff;
    }
    if (left2 < marginThreshold) {
      var _diff2 = left2 - marginThreshold;
      left2 -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right2 > widthThreshold) {
      var _diff3 = right2 - widthThreshold;
      left2 -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }
    return {
      top: "".concat(Math.round(top2), "px"),
      left: "".concat(Math.round(left2), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = react.exports.useCallback(function() {
    var element = paperRef.current;
    if (!element) {
      return;
    }
    var positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);
  var handleEntering = function handleEntering2(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  var handlePaperRef = react.exports.useCallback(function(instance) {
    paperRef.current = reactDom.exports.findDOMNode(instance);
  }, []);
  react.exports.useEffect(function() {
    if (open) {
      setPositioningStyles();
    }
  });
  react.exports.useImperativeHandle(action, function() {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  react.exports.useEffect(function() {
    if (!open) {
      return void 0;
    }
    var handleResize = debounce(function() {
      setPositioningStyles();
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : void 0);
  return /* @__PURE__ */ react.exports.createElement(Modal$1, _extends({
    container,
    open,
    ref,
    BackdropProps: {
      invisible: true
    },
    className: clsx(classes.root, className)
  }, other), /* @__PURE__ */ react.exports.createElement(TransitionComponent, _extends({
    appear: true,
    in: open,
    onEnter,
    onEntered,
    onExit,
    onExited,
    onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: createChainedFunction(handleEntering, TransitionProps.onEntering)
  }), /* @__PURE__ */ react.exports.createElement(Paper$1, _extends({
    elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: clsx(classes.paper, PaperProps.className)
  }), children)));
});
var Popover$1 = withStyles2(styles$7, {
  name: "MuiPopover"
})(Popover);
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  var text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}
var useEnhancedEffect = typeof window === "undefined" ? react.exports.useEffect : react.exports.useLayoutEffect;
var MenuList = /* @__PURE__ */ react.exports.forwardRef(function MenuList2(props, ref) {
  var actions = props.actions, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, _props$autoFocusItem = props.autoFocusItem, autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem, children = props.children, className = props.className, _props$disabledItemsF = props.disabledItemsFocusable, disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF, _props$disableListWra = props.disableListWrap, disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra, onKeyDown = props.onKeyDown, _props$variant = props.variant, variant = _props$variant === void 0 ? "selectedMenu" : _props$variant, other = _objectWithoutProperties(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);
  var listRef = react.exports.useRef(null);
  var textCriteriaRef = react.exports.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(function() {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react.exports.useImperativeHandle(actions, function() {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        var noExplicitWidth = !listRef.current.style.width;
        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(getScrollbarSize(), "px");
          listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }
        return listRef.current;
      }
    };
  }, []);
  var handleKeyDown2 = function handleKeyDown3(event) {
    var list = listRef.current;
    var key = event.key;
    var currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  var handleOwnRef = react.exports.useCallback(function(instance) {
    listRef.current = reactDom.exports.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(handleOwnRef, ref);
  var activeItemIndex = -1;
  react.exports.Children.forEach(children, function(child, index2) {
    if (!/* @__PURE__ */ react.exports.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index2;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index2;
      }
    }
  });
  var items = react.exports.Children.map(children, function(child, index2) {
    if (index2 === activeItemIndex) {
      var newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return /* @__PURE__ */ react.exports.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ react.exports.createElement(List$1, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown2,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
var MenuList$1 = MenuList;
var RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
var LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
var styles$6 = {
  paper: {
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  },
  list: {
    outline: 0
  }
};
var Menu = /* @__PURE__ */ react.exports.forwardRef(function Menu2(props, ref) {
  var _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, children = props.children, classes = props.classes, _props$disableAutoFoc = props.disableAutoFocusItem, disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$MenuListProps = props.MenuListProps, MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps, onClose = props.onClose, onEnteringProp = props.onEntering, open = props.open, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, PopoverClasses = props.PopoverClasses, _props$transitionDura = props.transitionDuration, transitionDuration = _props$transitionDura === void 0 ? "auto" : _props$transitionDura, _props$TransitionProp = props.TransitionProps;
  _props$TransitionProp = _props$TransitionProp === void 0 ? {} : _props$TransitionProp;
  var onEntering = _props$TransitionProp.onEntering, TransitionProps = _objectWithoutProperties(_props$TransitionProp, ["onEntering"]), _props$variant = props.variant, variant = _props$variant === void 0 ? "selectedMenu" : _props$variant, other = _objectWithoutProperties(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"]);
  var theme = useTheme();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = react.exports.useRef(null);
  var contentAnchorRef = react.exports.useRef(null);
  var getContentAnchorEl = function getContentAnchorEl2() {
    return contentAnchorRef.current;
  };
  var handleEntering = function handleEntering2(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }
    if (onEnteringProp) {
      onEnteringProp(element, isAppearing);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  var handleListKeyDown = function handleListKeyDown2(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  var activeItemIndex = -1;
  react.exports.Children.map(children, function(child, index2) {
    if (!/* @__PURE__ */ react.exports.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index2;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index2;
      }
    }
  });
  var items = react.exports.Children.map(children, function(child, index2) {
    if (index2 === activeItemIndex) {
      return /* @__PURE__ */ react.exports.cloneElement(child, {
        ref: function ref2(instance) {
          contentAnchorRef.current = reactDom.exports.findDOMNode(instance);
          setRef(child.ref, instance);
        }
      });
    }
    return child;
  });
  return /* @__PURE__ */ react.exports.createElement(Popover$1, _extends({
    getContentAnchorEl,
    classes: PopoverClasses,
    onClose,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    anchorOrigin: theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: _extends({}, PaperProps, {
      classes: _extends({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open,
    ref,
    transitionDuration
  }, other), /* @__PURE__ */ react.exports.createElement(MenuList$1, _extends({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem,
    variant
  }, MenuListProps, {
    className: clsx(classes.list, MenuListProps.className)
  }), items));
});
var Menu$1 = withStyles2(styles$6, {
  name: "MuiMenu"
})(Menu);
var styles$5 = function styles18(theme) {
  return {
    root: _extends({}, theme.typography.body1, _defineProperty({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      width: "auto",
      overflow: "hidden",
      whiteSpace: "nowrap"
    }, theme.breakpoints.up("sm"), {
      minHeight: "auto"
    })),
    gutters: {},
    selected: {},
    dense: _extends({}, theme.typography.body2, {
      minHeight: "auto"
    })
  };
};
var MenuItem = /* @__PURE__ */ react.exports.forwardRef(function MenuItem2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, component = _props$component === void 0 ? "li" : _props$component, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, ListItemClasses = props.ListItemClasses, _props$role = props.role, role = _props$role === void 0 ? "menuitem" : _props$role, selected = props.selected, tabIndexProp = props.tabIndex, other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);
  var tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
  }
  return /* @__PURE__ */ react.exports.createElement(ListItem$1, _extends({
    button: true,
    role,
    tabIndex,
    component,
    selected,
    disableGutters,
    classes: _extends({
      dense: classes.dense
    }, ListItemClasses),
    className: clsx(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref
  }, other));
});
var MenuItem$1 = withStyles2(styles$5, {
  name: "MuiMenuItem"
})(MenuItem);
var NativeSelectInput = /* @__PURE__ */ react.exports.forwardRef(function NativeSelectInput2(props, ref) {
  var classes = props.classes, className = props.className, disabled = props.disabled, IconComponent = props.IconComponent, inputRef = props.inputRef, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement("select", _extends({
    className: clsx(
      classes.root,
      classes.select,
      classes[variant],
      className,
      disabled && classes.disabled
    ),
    disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : /* @__PURE__ */ react.exports.createElement(IconComponent, {
    className: clsx(classes.icon, classes["icon".concat(capitalize(variant))], disabled && classes.disabled)
  }));
});
var NativeSelectInput$1 = NativeSelectInput;
var ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M7 10l5 5 5-5z"
}));
var styles$4 = function styles19(theme) {
  return {
    root: {},
    select: {
      "-moz-appearance": "none",
      "-webkit-appearance": "none",
      userSelect: "none",
      borderRadius: 0,
      minWidth: 16,
      cursor: "pointer",
      "&:focus": {
        backgroundColor: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
        borderRadius: 0
      },
      "&::-ms-expand": {
        display: "none"
      },
      "&$disabled": {
        cursor: "default"
      },
      "&[multiple]": {
        height: "auto"
      },
      "&:not([multiple]) option, &:not([multiple]) optgroup": {
        backgroundColor: theme.palette.background.paper
      },
      "&&": {
        paddingRight: 24
      }
    },
    filled: {
      "&&": {
        paddingRight: 32
      }
    },
    outlined: {
      borderRadius: theme.shape.borderRadius,
      "&&": {
        paddingRight: 32
      }
    },
    selectMenu: {
      height: "auto",
      minHeight: "1.1876em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    disabled: {},
    icon: {
      position: "absolute",
      right: 0,
      top: "calc(50% - 12px)",
      pointerEvents: "none",
      color: theme.palette.action.active,
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    },
    iconOpen: {
      transform: "rotate(180deg)"
    },
    iconFilled: {
      right: 7
    },
    iconOutlined: {
      right: 7
    },
    nativeInput: {
      bottom: 0,
      left: 0,
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
      width: "100%"
    }
  };
};
var defaultInput = /* @__PURE__ */ react.exports.createElement(Input$1, null);
var NativeSelect = /* @__PURE__ */ react.exports.forwardRef(function NativeSelect2(props, ref) {
  var children = props.children, classes = props.classes, _props$IconComponent = props.IconComponent, IconComponent = _props$IconComponent === void 0 ? ArrowDropDownIcon : _props$IconComponent, _props$input = props.input, input = _props$input === void 0 ? defaultInput : _props$input, inputProps = props.inputProps;
  props.variant;
  var other = _objectWithoutProperties(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);
  var muiFormControl = useFormControl();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  return /* @__PURE__ */ react.exports.cloneElement(input, _extends({
    inputComponent: NativeSelectInput$1,
    inputProps: _extends({
      children,
      classes,
      IconComponent,
      variant: fcs.variant,
      type: void 0
    }, inputProps, input ? input.props.inputProps : {}),
    ref
  }, other));
});
NativeSelect.muiName = "Select";
withStyles2(styles$4, {
  name: "MuiNativeSelect"
})(NativeSelect);
var styles$3 = function styles20(theme) {
  return {
    root: {
      position: "absolute",
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: "0 8px",
      pointerEvents: "none",
      borderRadius: "inherit",
      borderStyle: "solid",
      borderWidth: 1,
      overflow: "hidden"
    },
    legend: {
      textAlign: "left",
      padding: 0,
      lineHeight: "11px",
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },
    legendLabelled: {
      display: "block",
      width: "auto",
      textAlign: "left",
      padding: 0,
      height: 11,
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block"
      }
    },
    legendNotched: {
      maxWidth: 1e3,
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
var NotchedOutline = /* @__PURE__ */ react.exports.forwardRef(function NotchedOutline2(props, ref) {
  props.children;
  var classes = props.classes, className = props.className, label = props.label, labelWidthProp = props.labelWidth, notched = props.notched, style2 = props.style, other = _objectWithoutProperties(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);
  var theme = useTheme();
  var align = theme.direction === "rtl" ? "right" : "left";
  if (label !== void 0) {
    return /* @__PURE__ */ react.exports.createElement("fieldset", _extends({
      "aria-hidden": true,
      className: clsx(classes.root, className),
      ref,
      style: style2
    }, other), /* @__PURE__ */ react.exports.createElement("legend", {
      className: clsx(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? /* @__PURE__ */ react.exports.createElement("span", null, label) : /* @__PURE__ */ react.exports.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "&#8203;"
      }
    })));
  }
  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return /* @__PURE__ */ react.exports.createElement("fieldset", _extends({
    "aria-hidden": true,
    style: _extends(_defineProperty({}, "padding".concat(capitalize(align)), 8), style2),
    className: clsx(classes.root, className),
    ref
  }, other), /* @__PURE__ */ react.exports.createElement("legend", {
    className: classes.legend,
    style: {
      width: notched ? labelWidth : 0.01
    }
  }, /* @__PURE__ */ react.exports.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "&#8203;"
    }
  })));
});
var NotchedOutline$1 = withStyles2(styles$3, {
  name: "PrivateNotchedOutline"
})(NotchedOutline);
var styles$2 = function styles21(theme) {
  var borderColor2 = theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    root: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      "&:hover $notchedOutline": {
        borderColor: theme.palette.text.primary
      },
      "@media (hover: none)": {
        "&:hover $notchedOutline": {
          borderColor: borderColor2
        }
      },
      "&$focused $notchedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      "&$error $notchedOutline": {
        borderColor: theme.palette.error.main
      },
      "&$disabled $notchedOutline": {
        borderColor: theme.palette.action.disabled
      }
    },
    colorSecondary: {
      "&$focused $notchedOutline": {
        borderColor: theme.palette.secondary.main
      }
    },
    focused: {},
    disabled: {},
    adornedStart: {
      paddingLeft: 14
    },
    adornedEnd: {
      paddingRight: 14
    },
    error: {},
    marginDense: {},
    multiline: {
      padding: "18.5px 14px",
      "&$marginDense": {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },
    notchedOutline: {
      borderColor: borderColor2
    },
    input: {
      padding: "18.5px 14px",
      "&:-webkit-autofill": {
        WebkitBoxShadow: theme.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.type === "light" ? null : "#fff",
        caretColor: theme.palette.type === "light" ? null : "#fff",
        borderRadius: "inherit"
      }
    },
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },
    inputMultiline: {
      padding: 0
    },
    inputAdornedStart: {
      paddingLeft: 0
    },
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = /* @__PURE__ */ react.exports.forwardRef(function OutlinedInput2(props, ref) {
  var classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, label = props.label, _props$labelWidth = props.labelWidth, labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, notched = props.notched, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);
  return /* @__PURE__ */ react.exports.createElement(InputBase$1, _extends({
    renderSuffix: function renderSuffix(state) {
      return /* @__PURE__ */ react.exports.createElement(NotchedOutline$1, {
        className: classes.notchedOutline,
        label,
        labelWidth,
        notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: _extends({}, classes, {
      root: clsx(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
OutlinedInput.muiName = "Input";
var OutlinedInput$1 = withStyles2(styles$2, {
  name: "MuiOutlinedInput"
})(OutlinedInput);
function areEqualValues(a, b2) {
  if (_typeof$1(b2) === "object" && b2 !== null) {
    return a === b2;
  }
  return String(a) === String(b2);
}
function isEmpty(display2) {
  return display2 == null || typeof display2 === "string" && !display2.trim();
}
var SelectInput = /* @__PURE__ */ react.exports.forwardRef(function SelectInput2(props, ref) {
  var ariaLabel = props["aria-label"], autoFocus = props.autoFocus, autoWidth = props.autoWidth, children = props.children, classes = props.classes, className = props.className, defaultValue = props.defaultValue, disabled = props.disabled, displayEmpty = props.displayEmpty, IconComponent = props.IconComponent, inputRefProp = props.inputRef, labelId = props.labelId, _props$MenuProps = props.MenuProps, MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps, multiple = props.multiple, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onClose = props.onClose, onFocus = props.onFocus, onOpen = props.onOpen, openProp = props.open, readOnly = props.readOnly, renderValue = props.renderValue, _props$SelectDisplayP = props.SelectDisplayProps, SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP, tabIndexProp = props.tabIndex;
  props.type;
  var valueProp = props.value, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);
  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), value = _useControlled2[0], setValue = _useControlled2[1];
  var inputRef = react.exports.useRef(null);
  var _React$useState = react.exports.useState(null), displayNode = _React$useState[0], setDisplayNode = _React$useState[1];
  var _React$useRef = react.exports.useRef(openProp != null), isOpenControlled = _React$useRef.current;
  var _React$useState2 = react.exports.useState(), menuMinWidthState = _React$useState2[0], setMenuMinWidthState = _React$useState2[1];
  var _React$useState3 = react.exports.useState(false), openState = _React$useState3[0], setOpenState = _React$useState3[1];
  var handleRef = useForkRef(ref, inputRefProp);
  react.exports.useImperativeHandle(handleRef, function() {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value
    };
  }, [displayNode, value]);
  react.exports.useEffect(function() {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  react.exports.useEffect(function() {
    if (displayNode) {
      var label = ownerDocument(displayNode).getElementById(labelId);
      if (label) {
        var handler = function handler2() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };
        label.addEventListener("click", handler);
        return function() {
          label.removeEventListener("click", handler);
        };
      }
    }
    return void 0;
  }, [labelId, displayNode]);
  var update2 = function update3(open2, event) {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open2);
    }
  };
  var handleMouseDown = function handleMouseDown2(event) {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayNode.focus();
    update2(true, event);
  };
  var handleClose = function handleClose2(event) {
    update2(false, event);
  };
  var childrenArray = react.exports.Children.toArray(children);
  var handleChange = function handleChange2(event) {
    var index2 = childrenArray.map(function(child2) {
      return child2.props.value;
    }).indexOf(event.target.value);
    if (index2 === -1) {
      return;
    }
    var child = childrenArray[index2];
    setValue(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  var handleItemClick = function handleItemClick2(child) {
    return function(event) {
      if (!multiple) {
        update2(false, event);
      }
      var newValue;
      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);
        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }
      if (child.props.onClick) {
        child.props.onClick(event);
      }
      if (value === newValue) {
        return;
      }
      setValue(newValue);
      if (onChange) {
        event.persist();
        Object.defineProperty(event, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(event, child);
      }
    };
  };
  var handleKeyDown2 = function handleKeyDown3(event) {
    if (!readOnly) {
      var validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update2(true, event);
      }
    }
  };
  var open = displayNode !== null && (isOpenControlled ? openProp : openState);
  var handleBlur = function handleBlur2(event) {
    if (!open && onBlur) {
      event.persist();
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  var display2;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display2 = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  var items = childrenArray.map(function(child) {
    if (!/* @__PURE__ */ react.exports.isValidElement(child)) {
      return null;
    }
    var selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(formatMuiErrorMessage(2));
      }
      selected = value.some(function(v2) {
        return areEqualValues(v2, child.props.value);
      });
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    return /* @__PURE__ */ react.exports.cloneElement(child, {
      "aria-selected": selected ? "true" : void 0,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      "data-value": child.props.value
    });
  });
  if (computeDisplay) {
    display2 = multiple ? displayMultiple.join(", ") : displaySingle;
  }
  var menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }
  var tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : void 0);
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement("div", _extends({
    className: clsx(
      classes.root,
      classes.select,
      classes.selectMenu,
      classes[variant],
      className,
      disabled && classes.disabled
    ),
    ref: setDisplayNode,
    tabIndex,
    role: "button",
    "aria-disabled": disabled ? "true" : void 0,
    "aria-expanded": open ? "true" : void 0,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
    onKeyDown: handleKeyDown2,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus
  }, SelectDisplayProps, {
    id: buttonId
  }), isEmpty(display2) ? /* @__PURE__ */ react.exports.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "&#8203;"
    }
  }) : display2), /* @__PURE__ */ react.exports.createElement("input", _extends({
    value: Array.isArray(value) ? value.join(",") : value,
    name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus
  }, other)), /* @__PURE__ */ react.exports.createElement(IconComponent, {
    className: clsx(classes.icon, classes["icon".concat(capitalize(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), /* @__PURE__ */ react.exports.createElement(Menu$1, _extends({
    id: "menu-".concat(name || ""),
    anchorEl: displayNode,
    open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: _extends({
      "aria-labelledby": labelId,
      role: "listbox",
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: _extends({}, MenuProps.PaperProps, {
      style: _extends({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
var SelectInput$1 = SelectInput;
var styles$1 = styles$4;
var _ref = /* @__PURE__ */ react.exports.createElement(Input$1, null);
var _ref2 = /* @__PURE__ */ react.exports.createElement(FilledInput$1, null);
var Select = /* @__PURE__ */ react.exports.forwardRef(function Select2(props, ref) {
  var _props$autoWidth = props.autoWidth, autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth, children = props.children, classes = props.classes, _props$displayEmpty = props.displayEmpty, displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty, _props$IconComponent = props.IconComponent, IconComponent = _props$IconComponent === void 0 ? ArrowDropDownIcon : _props$IconComponent, id2 = props.id, input = props.input, inputProps = props.inputProps, label = props.label, labelId = props.labelId, _props$labelWidth = props.labelWidth, labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth, MenuProps = props.MenuProps, _props$multiple = props.multiple, multiple = _props$multiple === void 0 ? false : _props$multiple, _props$native = props.native, native = _props$native === void 0 ? false : _props$native, onClose = props.onClose, onOpen = props.onOpen, open = props.open, renderValue = props.renderValue, SelectDisplayProps = props.SelectDisplayProps, _props$variant = props.variant, variantProps = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);
  var inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
  var muiFormControl = useFormControl();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: /* @__PURE__ */ react.exports.createElement(OutlinedInput$1, {
      label,
      labelWidth
    }),
    filled: _ref2
  }[variant];
  return /* @__PURE__ */ react.exports.cloneElement(InputComponent, _extends({
    inputComponent,
    inputProps: _extends({
      children,
      IconComponent,
      variant,
      type: void 0,
      multiple
    }, native ? {
      id: id2
    } : {
      autoWidth,
      displayEmpty,
      labelId,
      MenuProps,
      onClose,
      onOpen,
      open,
      renderValue,
      SelectDisplayProps: _extends({
        id: id2
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? mergeClasses({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select2
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref
  }, other));
});
Select.muiName = "Select";
var Select$1 = withStyles2(styles$1, {
  name: "MuiSelect"
})(Select);
var variantComponent = {
  standard: Input$1,
  filled: FilledInput$1,
  outlined: OutlinedInput$1
};
var styles22 = {
  root: {}
};
var TextField = /* @__PURE__ */ react.exports.forwardRef(function TextField2(props, ref) {
  var autoComplete = props.autoComplete, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "primary" : _props$color, defaultValue = props.defaultValue, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$error = props.error, error = _props$error === void 0 ? false : _props$error, FormHelperTextProps = props.FormHelperTextProps, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, helperText = props.helperText, hiddenLabel = props.hiddenLabel, id2 = props.id, InputLabelProps = props.InputLabelProps, inputProps = props.inputProps, InputProps = props.InputProps, inputRef = props.inputRef, label = props.label, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, placeholder = props.placeholder, _props$required = props.required, required = _props$required === void 0 ? false : _props$required, rows = props.rows, rowsMax = props.rowsMax, maxRows = props.maxRows, minRows = props.minRows, _props$select = props.select, select = _props$select === void 0 ? false : _props$select, SelectProps = props.SelectProps, type = props.type, value = props.value, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "maxRows", "minRows", "select", "SelectProps", "type", "value", "variant"]);
  var InputMore = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      InputMore.notched = InputLabelProps.shrink;
    }
    if (label) {
      var _InputLabelProps$requ;
      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, label, displayRequired && "\xA0*");
    }
  }
  if (select) {
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = void 0;
    }
    InputMore["aria-describedby"] = void 0;
  }
  var helperTextId = helperText && id2 ? "".concat(id2, "-helper-text") : void 0;
  var inputLabelId = label && id2 ? "".concat(id2, "-label") : void 0;
  var InputComponent = variantComponent[variant];
  var InputElement = /* @__PURE__ */ react.exports.createElement(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    rowsMax,
    maxRows,
    minRows,
    type,
    value,
    id: id2,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return /* @__PURE__ */ react.exports.createElement(FormControl$1, _extends({
    className: clsx(classes.root, className),
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    ref,
    required,
    color: color2,
    variant
  }, other), label && /* @__PURE__ */ react.exports.createElement(InputLabel$1, _extends({
    htmlFor: id2,
    id: inputLabelId
  }, InputLabelProps), label), select ? /* @__PURE__ */ react.exports.createElement(Select$1, _extends({
    "aria-describedby": helperTextId,
    id: id2,
    labelId: inputLabelId,
    value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /* @__PURE__ */ react.exports.createElement(FormHelperText$1, _extends({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
var TextField$1 = withStyles2(styles22, {
  name: "MuiTextField"
})(TextField);
var Add = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}));
var Check = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}));
var Delete = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}));
var Edit = createSvgIcon(/* @__PURE__ */ react.exports.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}));
const useStyle$1 = makeStyles({
  iconBtn: {
    padding: 5,
    alignSelf: "flex-end"
  },
  tabBtn: {
    minWidth: 0
  }
});
function useForceUpdate() {
  const [updated, setUpdated] = react.exports.useState(0);
  return () => setUpdated(updated + 1);
}
function useAutoIncrease(start) {
  const [num, setNum] = react.exports.useState(start);
  return () => (setNum(num + 1), num);
}
function PanelLeft() {
  const assets = AssetsContainer.useContainer();
  const classes = useStyle$1();
  const forceUpdate = useForceUpdate();
  const getViewNo = useAutoIncrease(1);
  const getAreaNo = useAutoIncrease(1);
  const getLayerNo = useAutoIncrease(1);
  const [anchorEl, setAnchorEl] = react.exports.useState(null);
  const [editor] = EditorContainer.useContainer();
  const [viewIndex, setViewIndex] = react.exports.useState(0);
  const [areaIndex, setAreaIndex] = react.exports.useState(0);
  const [layerIndex, setLayerIndex] = react.exports.useState(0);
  const viewList = editor ? editor.views : [];
  const areaList = viewList[viewIndex] ? viewList[viewIndex].areas : [];
  const layerList = viewList[viewIndex] ? viewList[viewIndex].layers : [];
  const viewSelected = viewList[viewIndex];
  const areaSelected = areaList[areaIndex];
  const layerSelected = layerList[layerIndex];
  const isNoView = viewList.length === 0;
  const isNoArea = areaList.length === 0;
  const isNoLayer = layerList.length === 0;
  react.exports.useEffect(() => {
    function onSelectArea(area) {
      if (viewSelected) {
        setAreaIndex(viewSelected.getAreaIndex(area));
      }
    }
    editor == null ? void 0 : editor.on("select-area", onSelectArea);
  }, [editor, viewSelected]);
  if (editor) {
    editor.showLayer(viewIndex, layerIndex);
  }
  function onChangeView(event) {
    if (editor) {
      const index2 = Number(event.target.value);
      setViewIndex(index2);
      setLayerIndex(0);
      setAreaIndex(0);
      forceUpdate();
    }
  }
  function onAddView() {
    if (editor) {
      const view = editor.addView({ layers: [] });
      view.id = "\u65B0\u5EFA\u89C6\u56FE " + getViewNo();
      setViewIndex(viewList.length);
      forceUpdate();
    }
  }
  function onDeleteView() {
    if (editor && viewSelected) {
      editor.removeView(viewSelected);
      setViewIndex(Math.min(viewIndex, Math.max(0, editor.views.length - 1)));
      forceUpdate();
    }
  }
  function onChangeLayer(event) {
    if (editor && viewSelected) {
      const index2 = Number(event.target.value);
      setLayerIndex(index2);
    }
  }
  function onAddLayer() {
    if (editor && viewSelected) {
      const layer = viewSelected.addLayer({ image: "" });
      layer.id = "\u65B0\u5EFA\u56FE\u5C42 " + getLayerNo();
      setLayerIndex(layerList.length);
      forceUpdate();
    }
  }
  function onDeleteLayer() {
    if (viewSelected && layerSelected) {
      viewSelected.removeLayer(layerSelected);
      setLayerIndex(Math.min(layerIndex, Math.max(0, viewSelected.layers.length - 1)));
      forceUpdate();
    }
  }
  function onChangeArea(event) {
    if (viewSelected) {
      const index2 = Number(event.target.value);
      if (areaList[index2]) {
        areaList[index2].selected = true;
      }
      setAreaIndex(index2);
    }
  }
  function onAddArea(options) {
    if (viewSelected) {
      const area = viewSelected.addArea(options);
      if (area) {
        area.id = "\u65B0\u5EFA\u533A\u57DF " + getAreaNo();
        area.editable = true;
        area.selected = true;
      }
      setAreaIndex(areaList.length);
      forceUpdate();
    }
    setAnchorEl(null);
  }
  function onDeleteArea() {
    if (viewSelected && areaSelected) {
      viewSelected.removeArea(areaSelected);
      setAreaIndex(Math.min(areaIndex, Math.max(0, viewSelected.areas.length - 1)));
      forceUpdate();
    }
  }
  function renderViewPanel() {
    var _a;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box$1, {
      px: 2,
      py: 1,
      display: "flex",
      color: "#333",
      bgcolor: "#ddd"
    }, "\u89C6\u56FE"), /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u9009\u62E9\u89C6\u56FE",
      fullWidth: true,
      select: true,
      disabled: isNoView,
      value: viewIndex,
      onChange: onChangeView
    }, isNoView && /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: 0
    }, "\u65E0\u89C6\u56FE"), viewList.map((view, index2) => /* @__PURE__ */ React.createElement(MenuItem$1, {
      key: index2,
      value: index2
    }, view.id || "\u672A\u547D\u540D"))), /* @__PURE__ */ React.createElement(IconButton$1, {
      className: classes.iconBtn,
      disabled: isNoView,
      onClick: onDeleteView
    }, /* @__PURE__ */ React.createElement(Delete, null)), /* @__PURE__ */ React.createElement(IconButton$1, {
      className: classes.iconBtn,
      color: "primary",
      onClick: onAddView
    }, /* @__PURE__ */ React.createElement(Add, null))), /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u89C6\u56FE\u540D\u79F0",
      placeholder: "\u672A\u547D\u540D",
      fullWidth: true,
      disabled: !viewSelected,
      value: (_a = viewSelected == null ? void 0 : viewSelected.id) != null ? _a : "",
      onChange: (event) => {
        viewSelected.id = event.target.value;
        forceUpdate();
      }
    })));
  }
  function renderLayerPanel() {
    var _a;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box$1, {
      mt: 4,
      px: 2,
      py: 1,
      display: "flex",
      color: "#333",
      bgcolor: "#ddd"
    }, "\u56FE\u5C42"), /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u9009\u62E9\u56FE\u5C42",
      fullWidth: true,
      select: true,
      disabled: isNoLayer,
      value: layerIndex,
      onChange: onChangeLayer
    }, isNoLayer && /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: 0
    }, "\u65E0\u56FE\u5C42"), !isNoLayer && /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: layerList.length
    }, "\u5168\u90E8"), layerList.map((layer, index2) => /* @__PURE__ */ React.createElement(MenuItem$1, {
      key: index2,
      value: index2
    }, layer.id || "\u672A\u547D\u540D"))), /* @__PURE__ */ React.createElement(IconButton$1, {
      className: classes.iconBtn,
      disabled: layerIndex === layerList.length,
      onClick: onDeleteLayer
    }, /* @__PURE__ */ React.createElement(Delete, null)), /* @__PURE__ */ React.createElement(IconButton$1, {
      className: classes.iconBtn,
      color: "primary",
      disabled: isNoView,
      onClick: onAddLayer
    }, /* @__PURE__ */ React.createElement(Add, null))), layerSelected && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u56FE\u5C42\u540D\u79F0",
      placeholder: "\u672A\u547D\u540D",
      fullWidth: true,
      disabled: !layerSelected,
      value: (_a = layerSelected == null ? void 0 : layerSelected.id) != null ? _a : "",
      onChange: (event) => {
        layerSelected.id = event.target.value;
        forceUpdate();
      }
    })), layerSelected && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u57FA\u7840\u6A21\u677F\u56FE\u7247",
      fullWidth: true,
      select: true,
      value: layerSelected.baseImage,
      onChange: (event) => {
        layerSelected.baseImage = event.target.value;
        forceUpdate();
      }
    }, assets.baseImages.files.length === 0 && /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: ""
    }, "\u8FD8\u672A\u6DFB\u52A0\u7D20\u6750"), assets.baseImages.files.map((file) => /* @__PURE__ */ React.createElement(MenuItem$1, {
      key: file.blobURL,
      value: file.blobURL
    }, /* @__PURE__ */ React.createElement(Box$1, {
      display: "flex"
    }, /* @__PURE__ */ React.createElement(Avatar$1, {
      variant: "square",
      src: file.blobURL
    }), /* @__PURE__ */ React.createElement(ListItemText$1, {
      style: { flex: 1, marginLeft: 10 },
      primary: file.name
    })))))), layerSelected && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u521D\u59CB\u6750\u8D28\u56FE\u7247",
      fullWidth: true,
      select: true,
      value: layerSelected.material.image,
      onChange: (event) => {
        layerSelected.material.image = event.target.value;
        forceUpdate();
      }
    }, assets.matImages.files.length === 0 && /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: ""
    }, "\u8FD8\u672A\u6DFB\u52A0\u7D20\u6750"), assets.matImages.files.map((file) => /* @__PURE__ */ React.createElement(MenuItem$1, {
      key: file.blobURL,
      value: file.blobURL
    }, /* @__PURE__ */ React.createElement(Box$1, {
      display: "flex"
    }, /* @__PURE__ */ React.createElement(Avatar$1, {
      variant: "square",
      src: file.blobURL
    }), /* @__PURE__ */ React.createElement(ListItemText$1, {
      style: { flex: 1, marginLeft: 10 },
      primary: file.name
    })))))), layerSelected && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u521D\u59CB\u6750\u8D28\u989C\u8272",
      fullWidth: true,
      inputProps: { type: "color", style: { height: 30 } },
      value: layerSelected.material.color,
      onChange: (event) => {
        layerSelected.material.color = event.target.value;
        forceUpdate();
      }
    })));
  }
  function renderAreaPanel() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box$1, {
      mt: 4,
      px: 2,
      py: 1,
      display: "flex",
      color: "#333",
      bgcolor: "#ddd"
    }, "\u533A\u57DF"), /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u9009\u62E9\u533A\u57DF",
      fullWidth: true,
      select: true,
      disabled: isNoArea,
      value: areaIndex,
      onChange: onChangeArea
    }, isNoArea && /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: 0
    }, "\u65E0\u533A\u57DF"), areaList.map((area, index2) => /* @__PURE__ */ React.createElement(MenuItem$1, {
      key: index2,
      value: index2
    }, area.id || "\u672A\u547D\u540D"))), /* @__PURE__ */ React.createElement(IconButton$1, {
      className: classes.iconBtn,
      disabled: isNoArea,
      onClick: onDeleteArea
    }, /* @__PURE__ */ React.createElement(Delete, null)), /* @__PURE__ */ React.createElement(IconButton$1, {
      className: classes.iconBtn,
      color: "primary",
      disabled: isNoView,
      onClick: (event) => setAnchorEl(event.currentTarget)
    }, /* @__PURE__ */ React.createElement(Add, null)), /* @__PURE__ */ React.createElement(Menu$1, {
      keepMounted: true,
      anchorEl,
      open: !!anchorEl,
      onClose: () => setAnchorEl(null)
    }, /* @__PURE__ */ React.createElement(MenuItem$1, {
      onClick: () => onAddArea({ type: "point", x: 0, y: 0, rotation: 0 })
    }, "\u70B9\u533A\u57DF"), /* @__PURE__ */ React.createElement(MenuItem$1, {
      onClick: () => onAddArea({ type: "circle", x: 0, y: 0, radius: 50 })
    }, "\u5706\u5F62\u533A\u57DF"), /* @__PURE__ */ React.createElement(MenuItem$1, {
      onClick: () => onAddArea({ type: "rect", x: 0, y: 0, width: 50, height: 50 })
    }, "\u77E9\u5F62\u533A\u57DF"))), areaSelected && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u533A\u57DF\u540D\u79F0",
      placeholder: "\u672A\u547D\u540D",
      fullWidth: true,
      value: areaSelected.id,
      onChange: (event) => {
        areaSelected.id = event.target.value;
        forceUpdate();
      }
    })), areaSelected && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u533A\u57DF\u7C7B\u578B",
      focused: false,
      select: true,
      fullWidth: true,
      InputProps: { readOnly: true },
      value: areaSelected.type
    }, /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: "point"
    }, "\u70B9\u533A\u57DF"), /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: "circle"
    }, "\u5706\u5F62\u533A\u57DF"), /* @__PURE__ */ React.createElement(MenuItem$1, {
      value: "rect"
    }, "\u77E9\u5F62\u533A\u57DF"))), areaSelected && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u989C\u8272",
      fullWidth: true,
      inputProps: { type: "color", style: { height: 30 } },
      value: areaSelected.color,
      onChange: (event) => {
        areaSelected.color = event.target.value;
        forceUpdate();
      }
    })), areaSelected && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(FormControlLabel$1, {
      label: "\u5185\u5BB9\u56FA\u5B9A",
      control: /* @__PURE__ */ React.createElement(Checkbox$1, {
        value: areaSelected.fixed,
        onChange: (event) => {
          areaSelected.fixed = event.target.checked;
          forceUpdate();
        }
      })
    }), /* @__PURE__ */ React.createElement(FormControlLabel$1, {
      label: "\u5185\u5BB9\u81EA\u9002\u5E94",
      control: /* @__PURE__ */ React.createElement(Checkbox$1, {
        value: areaSelected.autoFit,
        onChange: (event) => {
          areaSelected.autoFit = event.target.checked;
          forceUpdate();
        }
      })
    })), (areaSelected == null ? void 0 : areaSelected.type) === "point" && areaSelected.autoFit && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u5185\u5BB9\u5BBD",
      style: { flex: 1 },
      value: areaSelected.resizeW,
      inputProps: { type: "number", min: 0 },
      onChange: (event) => {
        areaSelected.resizeW = Number(event.target.value) || 0;
        forceUpdate();
      }
    }), /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u5185\u5BB9\u9AD8",
      style: { flex: 1, marginLeft: 10 },
      value: areaSelected.resizeH,
      inputProps: { type: "number", min: 0 },
      onChange: (event) => {
        areaSelected.resizeH = Number(event.target.value) || 0;
        forceUpdate();
      }
    })), (areaSelected == null ? void 0 : areaSelected.type) === "point" && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u65CB\u8F6C",
      fullWidth: true,
      value: areaSelected.rotation,
      inputProps: { type: "number", min: 0, max: 360 },
      onChange: (event) => {
        areaSelected.rotation = Number(event.target.value) || 0;
        forceUpdate();
      }
    })), (areaSelected == null ? void 0 : areaSelected.type) === "circle" && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u534A\u5F84",
      fullWidth: true,
      value: areaSelected.radius,
      inputProps: { type: "number", min: 0 },
      onChange: (event) => {
        areaSelected.radius = Number(event.target.value) || 0;
        forceUpdate();
      }
    })), (areaSelected == null ? void 0 : areaSelected.type) === "rect" && /* @__PURE__ */ React.createElement(Box$1, {
      mx: 2,
      my: 1,
      display: "flex"
    }, /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u533A\u57DF\u5BBD",
      style: { flex: 1 },
      value: areaSelected.width,
      inputProps: { type: "number", min: 0 },
      onChange: (event) => {
        areaSelected.width = Number(event.target.value) || 0;
        forceUpdate();
      }
    }), /* @__PURE__ */ React.createElement(TextField$1, {
      label: "\u533A\u57DF\u9AD8",
      style: { flex: 1, marginLeft: 10 },
      value: areaSelected.height,
      inputProps: { type: "number", min: 0 },
      onChange: (event) => {
        areaSelected.height = Number(event.target.value) || 0;
        forceUpdate();
      }
    })));
  }
  return /* @__PURE__ */ React.createElement(Box$1, null, renderViewPanel(), renderLayerPanel(), renderAreaPanel());
}
function ImageFileItem({ directory, file }) {
  const [renaming, setRenaming] = react.exports.useState(false);
  const [editName, setEditName] = react.exports.useState(file.name);
  function renameAsset() {
    setRenaming(true);
  }
  function removeAsset() {
    directory.remove(file.name);
  }
  function commitRename() {
    directory.rename(file.name, editName);
    setEditName(file.name);
    setRenaming(false);
  }
  return /* @__PURE__ */ React.createElement(ListItem$1, null, /* @__PURE__ */ React.createElement(Avatar$1, {
    style: { marginRight: 15 },
    variant: "square",
    src: file.blobURL
  }), renaming ? /* @__PURE__ */ React.createElement(TextField$1, {
    style: { flex: 1 },
    value: editName,
    onChange: (event) => setEditName(event.target.value),
    onKeyDown: (event) => event.key === "Enter" && commitRename()
  }) : /* @__PURE__ */ React.createElement(Typography$1, {
    style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis" }
  }, file.name), !renaming && /* @__PURE__ */ React.createElement(IconButton$1, {
    onClick: renameAsset
  }, /* @__PURE__ */ React.createElement(Edit, null)), !renaming && /* @__PURE__ */ React.createElement(IconButton$1, {
    disabled: renaming,
    onClick: removeAsset
  }, /* @__PURE__ */ React.createElement(Delete, null)), renaming && /* @__PURE__ */ React.createElement(IconButton$1, {
    onClick: commitRename
  }, /* @__PURE__ */ React.createElement(Check, null)));
}
function PanelRight() {
  const assets = AssetsContainer.useContainer();
  function onAddBaseImage(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      assets.baseImages.add(files[i], files[i].name);
    }
    event.target.value = "";
  }
  function onAddMatImage(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      assets.matImages.add(files[i], files[i].name);
    }
    event.target.value = "";
  }
  return /* @__PURE__ */ React.createElement(Box$1, null, /* @__PURE__ */ React.createElement(Box$1, {
    px: 2,
    py: 1,
    color: "#333",
    bgcolor: "#ddd"
  }, "\u57FA\u7840\u56FE\u8D44\u6E90"), /* @__PURE__ */ React.createElement(List$1, null, assets.baseImages.files.map((file) => /* @__PURE__ */ React.createElement(ImageFileItem, {
    key: file.name,
    file,
    directory: assets.baseImages
  })), /* @__PURE__ */ React.createElement(ListItem$1, null, /* @__PURE__ */ React.createElement("input", {
    id: "file-input-1",
    type: "file",
    multiple: true,
    accept: "image/*",
    style: { display: "none" },
    onChange: onAddBaseImage
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "file-input-1"
  }, /* @__PURE__ */ React.createElement(Button$1, {
    variant: "contained",
    color: "primary",
    component: "span"
  }, "\u6DFB\u52A0\u6587\u4EF6")))), /* @__PURE__ */ React.createElement(Box$1, {
    mt: 4,
    px: 2,
    py: 1,
    color: "#333",
    bgcolor: "#ddd"
  }, "\u6750\u8D28\u56FE\u8D44\u6E90"), /* @__PURE__ */ React.createElement(List$1, null, assets.matImages.files.map((file) => /* @__PURE__ */ React.createElement(ImageFileItem, {
    key: file.name,
    file,
    directory: assets.matImages
  })), /* @__PURE__ */ React.createElement(ListItem$1, null, /* @__PURE__ */ React.createElement("input", {
    id: "file-input-2",
    type: "file",
    multiple: true,
    accept: "image/*",
    style: { display: "none" },
    onChange: onAddMatImage
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "file-input-2"
  }, /* @__PURE__ */ React.createElement(Button$1, {
    variant: "contained",
    color: "primary",
    component: "span"
  }, "\u6DFB\u52A0\u6587\u4EF6")))));
}
class Signal {
  constructor() {
    this.listeners = [];
  }
  add(fn, self2, once) {
    if (typeof fn === "function") {
      this.listeners.push({ fn, self: self2, once });
    }
  }
  remove(fn, self2, once) {
    for (let i = 0; i < this.listeners.length; i++) {
      const l2 = this.listeners[i];
      if (fn === l2.fn && (!once || l2.once) && (!self2 || l2.self === self2)) {
        this.listeners.splice(i--, 1);
      }
    }
  }
  clear() {
    this.listeners.length = 0;
  }
  emit(...args) {
    for (let i = 0; i < this.listeners.length; i++) {
      const listener = this.listeners[i];
      listener.fn.apply(listener.self, args);
      if (listener.once)
        this.listeners.splice(i--, 1);
    }
  }
}
class Emitter {
  constructor() {
    this.signals = /* @__PURE__ */ Object.create(null);
  }
  on(name, fn, self2, once) {
    if (!this.signals[name]) {
      this.signals[name] = new Signal();
    }
    this.signals[name].add(fn, self2, once);
  }
  off(name, fn, self2, once) {
    if (this.signals[name]) {
      if (fn) {
        this.signals[name].remove(fn, self2, once);
      } else {
        this.signals[name].clear();
      }
    }
  }
  emit(name, ...args) {
    if (this.signals[name]) {
      this.signals[name].emit(...args);
    }
  }
}
class Inputs {
  constructor(app) {
    this.app = app;
    this.onPointerEvent = (event) => {
      if (event.isPrimary && event.target === this.canvas) {
        const vw = this.canvas.width;
        const vh2 = this.canvas.height;
        const br = this.canvas.getBoundingClientRect();
        const x2 = (event.clientX - br.left) * vw / br.width;
        const y2 = (event.clientY - br.top) * vh2 / br.height;
        const target = this.findTarget(this.app.root, x2, y2);
        if (target !== null) {
          const type = event.type;
          const buttons = event.buttons;
          const pointerEvent = { type, target, buttons, x: x2, y: y2, stopped: false };
          for (let node = target; node; node = node.parent) {
            node.emit(type, pointerEvent);
            if (pointerEvent.stopped)
              break;
          }
        }
        this.canvas.style.cursor = target ? target.cursor : "";
      }
    };
    this.canvas = app.canvas;
  }
  enable() {
    this.canvas.addEventListener("pointerdown", this.onPointerEvent);
    this.canvas.addEventListener("pointermove", this.onPointerEvent);
    this.canvas.addEventListener("pointerover", this.onPointerEvent);
    this.canvas.addEventListener("pointerup", this.onPointerEvent);
    return this;
  }
  disable() {
    this.canvas.removeEventListener("pointerdown", this.onPointerEvent);
    this.canvas.removeEventListener("pointermove", this.onPointerEvent);
    this.canvas.removeEventListener("pointerover", this.onPointerEvent);
    this.canvas.removeEventListener("pointerup", this.onPointerEvent);
    return this;
  }
  findTarget(node, x2, y2) {
    if (!node.hidden) {
      const children = node.children;
      for (let i = children.length - 1; i >= 0; i--) {
        const hit = this.findTarget(children[i], x2, y2);
        if (hit)
          return hit;
      }
      if (node.isInside({ x: x2, y: y2 })) {
        return node;
      }
    }
    return null;
  }
}
class ScaleOrShear {
  constructor(node, _x, _y) {
    this.node = node;
    this._x = _x;
    this._y = _y;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this.node.mutation |= Mutation.AffineTrans;
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this.node.mutation |= Mutation.AffineTrans;
  }
}
class PivotOrPosition {
  constructor(node, _x, _y) {
    this.node = node;
    this._x = _x;
    this._y = _y;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this.node.mutation |= Mutation.LocalMatrix;
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this.node.mutation |= Mutation.LocalMatrix;
  }
}
class Bounds {
  constructor() {
    this.x0 = 0;
    this.y0 = 0;
    this.x1 = 0;
    this.y1 = 0;
  }
  containsPoint(point) {
    const { x: x2, y: y2 } = point;
    if (x2 < this.x0 || x2 > this.x1)
      return false;
    if (y2 < this.y0 || y2 > this.y1)
      return false;
    return true;
  }
  containsRect(rect) {
    const { x: x2, y: y2, w: w2, h: h2 } = rect;
    if (x2 < this.x0 || x2 + w2 > this.x1)
      return false;
    if (y2 < this.y0 || y2 + h2 > this.y1)
      return false;
    return true;
  }
  containsBounds(bounds) {
    const { x0, y0, x1, y1 } = bounds;
    if (x0 < this.x0 || x1 > this.x1)
      return false;
    if (y0 < this.y0 || y1 > this.y1)
      return false;
    return true;
  }
  addPoint(point) {
    const { x: x2, y: y2 } = point;
    const { x0, y0, x1, y1 } = this;
    this.x0 = x2 < x0 ? x2 : x0;
    this.y0 = y2 < y0 ? y2 : y0;
    this.x1 = x2 > x1 ? x2 : x1;
    this.y1 = y2 > y1 ? y2 : y1;
    return this;
  }
  addRect(rect) {
    const { x: x2, y: y2, w: w2, h: h2 } = rect;
    this.addPoint({ x: x2, y: y2 });
    this.addPoint({ x: x2 + w2, y: y2 + h2 });
    return this;
  }
  addBounds(bounds) {
    const { x0, y0, x1, y1 } = bounds;
    this.addPoint({ x: x0, y: y0 });
    this.addPoint({ x: x1, y: y1 });
    return this;
  }
  applyMatrix(matrix) {
    const { x0, y0, x1, y1 } = this;
    const { a, b: b2, c: c2, d: d2, e: e2, f: f2 } = matrix;
    this.addPoint({ x: a * x0 + c2 * y0 + e2, y: b2 * x0 + d2 * y0 + f2 });
    this.addPoint({ x: a * x0 + c2 * y1 + e2, y: b2 * x0 + d2 * y1 + f2 });
    this.addPoint({ x: a * x1 + c2 * y0 + e2, y: b2 * x1 + d2 * y0 + f2 });
    this.addPoint({ x: a * x1 + c2 * y1 + e2, y: b2 * x1 + d2 * y1 + f2 });
    return this;
  }
}
class Matrix {
  constructor(a = 1, b2 = 0, c2 = 0, d2 = 1, e2 = 0, f2 = 0) {
    this.a = a;
    this.b = b2;
    this.c = c2;
    this.d = d2;
    this.e = e2;
    this.f = f2;
  }
  clone() {
    const { a, b: b2, c: c2, d: d2, e: e2, f: f2 } = this;
    return new Matrix(a, b2, c2, d2, e2, f2);
  }
  identity() {
    this.a = this.d = 1;
    this.b = this.c = this.e = this.f = 0;
    return this;
  }
  invert() {
    const { a, b: b2, c: c2, d: d2, e: e2, f: f2 } = this;
    const invdet = 1 / (a * d2 - b2 * c2);
    this.a = d2 * invdet;
    this.d = a * invdet;
    this.b = -b2 * invdet;
    this.c = -c2 * invdet;
    this.e = (c2 * f2 - d2 * e2) * invdet;
    this.f = (b2 * e2 - a * f2) * invdet;
    return this;
  }
  copy(matrix) {
    this.a = matrix.a;
    this.b = matrix.b;
    this.c = matrix.c;
    this.d = matrix.d;
    this.e = matrix.e;
    this.f = matrix.f;
    return this;
  }
  append(matrix) {
    const { a: ma2, b: mb2, c: mc2, d: md2, e: mtx, f: mty } = this;
    const { a: na2, b: nb2, c: nc2, d: nd2, e: ntx, f: nty } = matrix;
    this.a = ma2 * na2 + mc2 * nb2;
    this.c = ma2 * nc2 + mc2 * nd2;
    this.b = mb2 * na2 + md2 * nb2;
    this.d = mb2 * nc2 + md2 * nd2;
    this.e = ma2 * ntx + mc2 * nty + mtx;
    this.f = mb2 * ntx + md2 * nty + mty;
    return this;
  }
  prepend(matrix) {
    const { a: ma2, b: mb2, c: mc2, d: md2, e: mtx, f: mty } = matrix;
    const { a: na2, b: nb2, c: nc2, d: nd2, e: ntx, f: nty } = this;
    this.a = ma2 * na2 + mc2 * nb2;
    this.c = ma2 * nc2 + mc2 * nd2;
    this.b = mb2 * na2 + md2 * nb2;
    this.d = mb2 * nc2 + md2 * nd2;
    this.e = ma2 * ntx + mc2 * nty + mtx;
    this.f = mb2 * ntx + md2 * nty + mty;
    return this;
  }
  transform(point) {
    const { x: x2, y: y2 } = point;
    const { a, b: b2, c: c2, d: d2, e: e2, f: f2 } = this;
    point.x = a * x2 + c2 * y2 + e2;
    point.y = b2 * x2 + d2 * y2 + f2;
    return point;
  }
  invTransform(point) {
    const { x: x2, y: y2 } = point;
    const { a, b: b2, c: c2, d: d2, e: e2, f: f2 } = this;
    const invdet = 1 / (a * d2 - b2 * c2);
    point.x = (d2 * (x2 - e2) - c2 * (y2 - f2)) * invdet;
    point.y = (a * (y2 - f2) - b2 * (x2 - e2)) * invdet;
    return point;
  }
}
var Mutation = /* @__PURE__ */ ((Mutation2) => {
  Mutation2[Mutation2["ParentNode"] = 1] = "ParentNode";
  Mutation2[Mutation2["AffineTrans"] = 2] = "AffineTrans";
  Mutation2[Mutation2["LocalMatrix"] = 6] = "LocalMatrix";
  Mutation2[Mutation2["WorldMatrix"] = 7] = "WorldMatrix";
  Mutation2[Mutation2["NoRecursive"] = 8] = "NoRecursive";
  return Mutation2;
})(Mutation || {});
class Node extends Emitter {
  constructor() {
    super();
    this.mutation = 0;
    this.hidden = false;
    this.cursor = "";
    this._parent = null;
    this._children = [];
    this._bounds = new Bounds();
    this._worldMatrix = new Matrix();
    this._localMatrix = new Matrix();
    this._scale = new ScaleOrShear(this, 1, 1);
    this._shear = new ScaleOrShear(this, 0, 0);
    this._pivot = new PivotOrPosition(this, 0, 0);
    this._position = new PivotOrPosition(this, 0, 0);
    this._rotation = 0;
    this._alpha = 1;
    this._width = 0;
    this._height = 0;
  }
  get root() {
    return this._parent ? this._parent.root : this;
  }
  get parent() {
    return this._parent;
  }
  set parent(parent) {
    this._parent = parent;
    this.mutation |= 1;
  }
  get children() {
    return this._children;
  }
  set children(value) {
    this.removeAll();
    this._children = value.slice();
  }
  get bounds() {
    return this._bounds;
  }
  set bounds(value) {
    this.bounds.x0 = value.x0;
    this.bounds.y0 = value.y0;
    this.bounds.x1 = value.x1;
    this.bounds.y1 = value.y1;
  }
  get worldMatrix() {
    this.updateWorldMatrix();
    return this._worldMatrix;
  }
  get localMatrix() {
    this.updateLocalMatrix();
    return this._localMatrix;
  }
  get scale() {
    return this._scale;
  }
  set scale(value) {
    this._scale.x = value.x;
    this._scale.y = value.y;
  }
  get shear() {
    return this._shear;
  }
  set shear(value) {
    this._shear.x = value.x;
    this._shear.y = value.y;
  }
  get pivot() {
    return this._pivot;
  }
  set pivot(value) {
    this._pivot.x = value.x;
    this._pivot.y = value.y;
  }
  get position() {
    return this._position;
  }
  set position(value) {
    this._position.x = value.x;
    this._position.y = value.y;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(value) {
    this.mutation |= 2;
    this._rotation = value;
  }
  get alpha() {
    return this._alpha;
  }
  set alpha(value) {
    this._alpha = value;
  }
  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }
  isInside(point) {
    const p2 = this.toLocal({ x: point.x, y: point.y });
    if (p2.x < 0 || p2.x >= this._width)
      return false;
    if (p2.y < 0 || p2.y >= this._height)
      return false;
    return true;
  }
  updateWorldMatrix() {
    if (this._parent !== null) {
      const recursive = !(this.mutation & 8);
      const worldMatrixUpdated = recursive && this._parent.updateWorldMatrix();
      const localMatrixUpdated = this.updateLocalMatrix();
      if (worldMatrixUpdated || localMatrixUpdated) {
        this._worldMatrix.copy(this._parent._worldMatrix);
        this._worldMatrix.append(this._localMatrix);
        this.mutation &= ~7;
        return true;
      }
      return false;
    }
    if (this.mutation | 1) {
      this._worldMatrix.identity();
    }
    return this.updateLocalMatrix();
  }
  updateLocalMatrix() {
    if (this.mutation | 6) {
      const m2 = this._localMatrix;
      const { x: pivotX, y: pivotY } = this._pivot;
      if (this.mutation | 2) {
        const { x: scaleX, y: scaleY } = this._scale;
        const { x: shearX, y: shearY } = this._shear;
        const angle = this._rotation * (Math.PI / 180);
        m2.a = Math.cos(shearY + angle) * scaleX;
        m2.b = Math.sin(shearY + angle) * scaleX;
        m2.c = Math.sin(shearX - angle) * scaleY;
        m2.d = Math.cos(shearX - angle) * scaleY;
      }
      m2.e = this._position.x - (m2.a * pivotX + m2.c * pivotY);
      m2.f = this._position.y - (m2.b * pivotX + m2.d * pivotY);
      this.mutation &= ~6;
      return true;
    }
    return false;
  }
  toLocal(point) {
    return this.worldMatrix.invTransform(point);
  }
  toWorld(point) {
    return this.worldMatrix.transform(point);
  }
  localToParent(point) {
    return this.localMatrix.transform(point);
  }
  worldToParent(point) {
    var _a, _b;
    return (_b = (_a = this._parent) == null ? void 0 : _a.toLocal(point)) != null ? _b : point;
  }
  add(node) {
    if (node.parent !== this) {
      node.removeSelf();
      node.parent = this;
      this._children.push(node);
    }
    return this;
  }
  remove(node) {
    if (node.parent === this) {
      const index2 = this._children.indexOf(node);
      this._children.splice(index2, 1);
      node.parent = null;
    }
    return this;
  }
  removeAll() {
    for (let i = 0; i < this._children.length; i++) {
      this._children[i].parent = null;
    }
    this._children.length = 0;
    return this;
  }
  removeSelf() {
    if (this._parent) {
      this._parent.remove(this);
    }
    return this;
  }
}
class Renderer {
  constructor(canvas) {
    if (!(this.context = canvas.getContext("2d"))) {
      throw Error("Unable to get rendering context.");
    }
    this.monkeyPatch();
  }
  monkeyPatch() {
    const context = this.context;
    const prototype = Object.getPrototypeOf(context);
    for (const name of Object.getOwnPropertyNames(prototype)) {
      const descriptor = Object.getOwnPropertyDescriptor(prototype, name);
      if (descriptor) {
        if (typeof descriptor.value === "function") {
          descriptor.value = descriptor.value.bind(context);
        }
        if (typeof descriptor.get === "function") {
          descriptor.get = () => context[name];
        }
        if (typeof descriptor.set === "function") {
          descriptor.set = (value) => context[name] = value;
        }
        if (!(name in this)) {
          Object.defineProperty(this, name, descriptor);
        }
      }
    }
  }
  get width() {
    return this.canvas.width;
  }
  set width(value) {
    this.canvas.width = value;
  }
  get height() {
    return this.canvas.height;
  }
  set height(value) {
    this.canvas.height = value;
  }
  clear() {
    const w2 = this.canvas.width;
    const h2 = this.canvas.height;
    this.context.clearRect(0, 0, w2, h2);
  }
  resize(w2, h2) {
    this.canvas.width = w2;
    this.canvas.height = h2;
  }
  circle(x2, y2, r2) {
    this.context.moveTo(x2 + r2, y2);
    this.context.arc(x2, y2, r2, 0, Math.PI * 2);
  }
  roundRect(x2, y2, w2, h2, r2) {
    r2 = Math.min(r2, w2 / 2, h2 / 2);
    this.context.moveTo(x2 + r2, y2);
    this.context.arcTo(x2 + w2, y2, x2 + w2, y2 + h2, r2);
    this.context.arcTo(x2 + w2, y2 + h2, x2, y2 + h2, r2);
    this.context.arcTo(x2, y2 + h2, x2, y2, r2);
    this.context.arcTo(x2, y2, x2 + w2, y2, r2);
  }
  layoutText(text, maxWidth2) {
    let lines = [];
    let current = "";
    let width2 = 0;
    let height2 = 0;
    for (let i = 0; i < text.length; ) {
      const metrics = this.measureText(current + text[i]);
      if (current.length > 0 && metrics.width > maxWidth2) {
        lines.push(Object.assign(metrics, { text: current }));
        current = "";
        height2 += metrics.actualBoundingBoxAscent;
        height2 += metrics.actualBoundingBoxDescent;
        continue;
      }
      current += text[i++];
      width2 = Math.max(width2, metrics.width);
    }
    if (current.length > 0) {
      const metrics = this.measureText(current);
      lines.push(Object.assign(metrics, { text: current }));
      width2 = Math.max(width2, metrics.width);
      height2 += metrics.actualBoundingBoxAscent;
      height2 += metrics.actualBoundingBoxDescent;
    }
    return { width: width2, height: height2, lines };
  }
  fillTextLayout(x2, y2, layout) {
    for (const line of layout.lines) {
      y2 += line.actualBoundingBoxAscent;
      this.fillText(line.text, x2, y2);
      y2 += line.actualBoundingBoxDescent;
    }
  }
  strokeTextLayout(x2, y2, layout) {
    for (const line of layout.lines) {
      y2 += line.actualBoundingBoxAscent;
      this.strokeText(line.text, x2, y2);
      y2 += line.actualBoundingBoxDescent;
    }
  }
}
class Application extends Emitter {
  constructor(canvas) {
    super();
    this.root = new Node();
    this.deltaTime = 0;
    this.updatedAt = 0;
    this.requestID = 0;
    this.running = false;
    this.onAnimationFrame = (time) => {
      if (this.running) {
        this.requestID = requestAnimationFrame(this.onAnimationFrame);
        this.deltaTime = Math.min(time - this.updatedAt, 40) * 1e-3;
        this.updatedAt = time;
        this.update();
      }
    };
    this.canvas = canvas != null ? canvas : document.createElement("canvas");
    this.inputs = new Inputs(this);
    this.renderer = new Renderer(this.canvas);
  }
  start() {
    if (!this.running) {
      this.running = true;
      this.requestID = requestAnimationFrame(this.onAnimationFrame);
      this.onAnimationFrame(this.updatedAt + 1);
      this.inputs.enable();
    }
    return this;
  }
  stop() {
    if (this.running) {
      this.running = false;
      this.inputs.disable();
      cancelAnimationFrame(this.requestID);
    }
    return this;
  }
  update() {
    const w2 = this.canvas.offsetWidth;
    const h2 = this.canvas.offsetHeight;
    if (this.canvas.width !== w2) {
      this.canvas.width = w2;
    }
    if (this.canvas.height !== h2) {
      this.canvas.height = h2;
    }
    this.root.width = w2;
    this.root.height = h2;
    this.renderer.clear();
    this.updateNode(this.root);
    this.drawNode(this.root, 1);
  }
  updateNode(node) {
    if (node.update)
      node.update();
    for (let i = 0; i < node.children.length; i++) {
      this.updateNode(node.children[i]);
    }
  }
  drawNode(node, alpha2) {
    if (!node.hidden && alpha2 > 0 && node.alpha > 0) {
      const m2 = node.worldMatrix;
      this.renderer.save();
      this.renderer.beginPath();
      this.renderer.setTransform(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
      this.renderer.globalAlpha = alpha2 * node.alpha;
      if (node.draw) {
        node.draw(this.renderer);
      }
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        child.mutation |= Mutation.NoRecursive;
        this.drawNode(child, alpha2 * node.alpha);
        child.mutation &= ~Mutation.NoRecursive;
      }
      if (node.postDraw) {
        node.postDraw(this.renderer);
      }
      this.renderer.restore();
    }
  }
}
class Extractor {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.renderer = new Renderer(this.canvas);
  }
  extract(node, type = "image/png") {
    const parent = node.parent;
    this.canvas.width = node.width;
    this.canvas.height = node.height;
    this.renderer.clear();
    node.parent = null;
    this.drawNode(node, 1);
    node.parent = parent;
    return this.canvas.toDataURL(type);
  }
  drawNode(node, alpha2) {
    if (!node.hidden && alpha2 > 0 && node.alpha > 0) {
      const m2 = node.worldMatrix;
      this.renderer.save();
      this.renderer.beginPath();
      this.renderer.setTransform(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
      this.renderer.globalAlpha = alpha2 * node.alpha;
      if (node.draw) {
        node.draw(this.renderer);
      }
      for (let i = 0; i < node.children.length; i++) {
        this.drawNode(node.children[i], alpha2 * node.alpha);
      }
      if (node.postDraw) {
        node.postDraw(this.renderer);
      }
      this.renderer.restore();
    }
  }
}
class Selectable extends Node {
  constructor() {
    super(...arguments);
    this._selected = false;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (!this._selected && value) {
      this._selected = true;
      this.emit("selected", this);
    }
    if (this._selected && !value) {
      this._selected = false;
      this.emit("unselected", this);
    }
  }
}
class AreaBase extends Selectable {
  constructor(editor) {
    super();
    this.editor = editor;
    this.type = "unknown";
    this.id = "";
    this.color = "#cccccc";
    this.fixed = false;
    this.autoFit = false;
    this.editable = false;
    this.rootBackup = null;
    this.isDragging = false;
    this.pointerX = 0;
    this.pointerY = 0;
    this.on("pointerdown", this.onPointerDown, this);
    this.on("pointermove", this.onPointerMove, this);
    this.on("pointerup", this.onPointerUp, this);
  }
  onPointerDown(pointer) {
    if (this.editable) {
      this.isDragging = true;
      this.rootBackup = this.root;
      this.rootBackup.on("pointermove", this.onPointerMove, this);
      this.rootBackup.on("pointerup", this.onPointerUp, this);
      this.pointerX = pointer.x;
      this.pointerY = pointer.y;
    }
  }
  onPointerMove(pointer) {
    if (!this.editable) {
      return;
    }
    if (this.isDragging && !this.root) {
      return this.onPointerUp(pointer);
    }
    if (!pointer.buttons) {
      this.cursor = "move";
    }
    if (this.isDragging && this.parent) {
      const p0 = this.parent.toLocal({ x: this.pointerX, y: this.pointerY });
      const p1 = this.parent.toLocal({ x: pointer.x, y: pointer.y });
      this.pointerX = pointer.x;
      this.pointerY = pointer.y;
      this.position.x += p1.x - p0.x;
      this.position.y += p1.y - p0.y;
    }
  }
  onPointerUp(_pointer) {
    var _a, _b;
    this.isDragging = false;
    (_a = this.rootBackup) == null ? void 0 : _a.off("pointermove", this.onPointerMove, this);
    (_b = this.rootBackup) == null ? void 0 : _b.off("pointerup", this.onPointerUp, this);
    this.rootBackup = null;
  }
}
function parseStyle(color2) {
  if (typeof color2 === "number") {
    const hex = Math.max(0, color2 | 0).toString(16);
    return "#" + `00000${hex}`.slice(-6);
  }
  return color2;
}
function parseRGB(color2) {
  if (typeof color2 === "string") {
    const rgb = Number(color2.replace("#", "0x"));
    return rgb === rgb ? rgb : 0;
  }
  return color2;
}
function quantizeL(pixels) {
  let lsum = 0;
  for (let i = 0; i < pixels.length; i += 4) {
    const r2 = pixels[i + 0] / 255;
    const g2 = pixels[i + 1] / 255;
    const b2 = pixels[i + 2] / 255;
    const max = Math.min(r2, g2, b2);
    const min = Math.max(r2, g2, b2);
    lsum += (max + min) / 2;
  }
  return lsum * 4 / pixels.length;
}
function tint(pixels, color2, quantLt) {
  const r2 = ((color2 & 16711680) >> 16) / 255;
  const g2 = ((color2 & 65280) >> 8) / 255;
  const b2 = ((color2 & 255) >> 0) / 255;
  const max = Math.max(r2, g2, b2);
  const min = Math.min(r2, g2, b2);
  const l2 = max + min;
  const c2 = max - min;
  const m2 = max == r2 ? g2 - b2 : max == g2 ? b2 - r2 : r2 - g2;
  const n2 = max == r2 ? g2 < b2 ? 6 : 0 : max == g2 ? 2 : 4;
  const H2 = c2 ? (m2 / c2 + n2) / 6 : 0;
  const S2 = c2 ? c2 / (l2 > 1 ? 2 - l2 : l2) : 0;
  const scale = l2 / 2 / quantLt;
  function hue2rgb(p2, q2, t2) {
    if (t2 < 0)
      t2 += 1;
    if (t2 > 1)
      t2 -= 1;
    if (t2 < 1 / 6)
      return p2 + (q2 - p2) * 6 * t2;
    if (t2 < 1 / 2)
      return q2;
    if (t2 < 2 / 3)
      return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
    return p2;
  }
  if (S2 !== 0) {
    for (let i = 0; i < pixels.length; i += 4) {
      const r22 = pixels[i + 0] / 255;
      const g22 = pixels[i + 1] / 255;
      const b22 = pixels[i + 2] / 255;
      const max2 = Math.max(r22, g22, b22);
      const min2 = Math.min(r22, g22, b22);
      const l22 = (max2 + min2) / 2 * scale;
      const q2 = l22 < 0.5 ? l22 + l22 * S2 : l22 + S2 - l22 * S2;
      const p2 = 2 * l22 - q2;
      pixels[i + 0] = hue2rgb(p2, q2, H2 + 1 / 3) * 255;
      pixels[i + 1] = hue2rgb(p2, q2, H2) * 255;
      pixels[i + 2] = hue2rgb(p2, q2, H2 - 1 / 3) * 255;
    }
  } else {
    for (let i = 0; i < pixels.length; i += 4) {
      const r22 = pixels[i + 0];
      const g22 = pixels[i + 1];
      const b22 = pixels[i + 2];
      const max2 = Math.max(r22, g22, b22);
      const min2 = Math.min(r22, g22, b22);
      const l22 = (max2 + min2) / 2 * scale;
      pixels[i + 0] = pixels[i + 1] = pixels[i + 2] = l22;
    }
  }
}
function vectorLength(dx, dy) {
  return Math.sqrt(dx * dx + dy * dy);
}
class AreaCircle extends AreaBase {
  constructor() {
    super(...arguments);
    this.type = "circle";
    this.radius = 0;
  }
  isInside(point) {
    const p2 = this.toLocal({ x: point.x, y: point.y });
    return p2.x * p2.x + p2.y * p2.y <= this.radius * this.radius;
  }
  resizeToFit(node) {
    const r2 = this.radius;
    const w0 = node.width;
    const h0 = node.height;
    if (w0 !== 0 && h0 !== 0) {
      const n2 = node.localMatrix;
      const m2 = new Matrix(n2.a, n2.b, n2.c, n2.d, 0, 0);
      const p2 = m2.transform({ x: w0 / 2, y: -h0 / 2 });
      const q2 = m2.transform({ x: w0 / 2, y: +h0 / 2 });
      const a = vectorLength(p2.x, p2.y);
      const b2 = vectorLength(q2.x, q2.y);
      const s = Math.min(1, r2 / a, r2 / b2);
      const w1 = node.width = s * node.width;
      const h1 = node.height = s * node.height;
      const p0 = node.worldToParent(this.toWorld({ x: 0, y: 0 }));
      {
        const p1 = node.localToParent({ x: 0, y: 0 });
        const d2 = vectorLength(p0.x - p1.x, p0.y - p1.y);
        const s2 = Math.max(0, d2 - r2) / d2;
        node.position.x += s2 * (p0.x - p1.x);
        node.position.y += s2 * (p0.y - p1.y);
      }
      {
        const p1 = node.localToParent({ x: w1, y: 0 });
        const d2 = vectorLength(p0.x - p1.x, p0.y - p1.y);
        const s2 = Math.max(0, d2 - r2) / d2;
        node.position.x += s2 * (p0.x - p1.x);
        node.position.y += s2 * (p0.y - p1.y);
      }
      {
        const p1 = node.localToParent({ x: w1, y: h1 });
        const d2 = vectorLength(p0.x - p1.x, p0.y - p1.y);
        const s2 = Math.max(0, d2 - r2) / d2;
        node.position.x += s2 * (p0.x - p1.x);
        node.position.y += s2 * (p0.y - p1.y);
      }
      {
        const p1 = node.localToParent({ x: 0, y: h1 });
        const d2 = vectorLength(p0.x - p1.x, p0.y - p1.y);
        const s2 = Math.max(0, d2 - r2) / d2;
        node.position.x += s2 * (p0.x - p1.x);
        node.position.y += s2 * (p0.y - p1.y);
      }
    }
  }
  postDraw(renderer) {
    renderer.lineWidth = this.selected ? 3 : 1;
    renderer.strokeStyle = parseStyle(this.color);
    renderer.setLineDash([5, 5]);
    renderer.circle(0, 0, this.radius);
    renderer.stroke();
  }
}
class AreaPoint extends AreaBase {
  constructor() {
    super(...arguments);
    this.type = "point";
    this.radius = 6;
    this.resizeW = 0;
    this.resizeH = 0;
  }
  resizeToFit(node) {
    if (this.resizeW !== 0 && this.resizeH !== 0) {
      node.width = this.resizeW;
      node.height = this.resizeH;
    }
    if (node.parent) {
      node.position = node.parent.toLocal(this.toWorld({ x: 0, y: 0 }));
    }
  }
  isInside(point) {
    const p2 = this.toLocal({ x: point.x, y: point.y });
    return p2.x * p2.x + p2.y * p2.y < this.radius * this.radius;
  }
  postDraw(renderer) {
    renderer.lineWidth = this.selected ? 3 : 1;
    renderer.strokeStyle = parseStyle(this.color);
    renderer.moveTo(0, 0);
    renderer.lineTo(0, -30);
    renderer.lineTo(-6, -22);
    renderer.moveTo(0, -30);
    renderer.lineTo(6, -22);
    renderer.stroke();
    renderer.beginPath();
    renderer.setLineDash([3, 3]);
    renderer.circle(0, 0, this.radius);
    renderer.stroke();
  }
}
class AreaRectangle extends AreaBase {
  constructor() {
    super(...arguments);
    this.type = "rect";
  }
  resizeToFit(node) {
    const w0 = node.width;
    const h0 = node.height;
    if (w0 !== 0 && h0 !== 0) {
      const n2 = node.localMatrix;
      const m2 = new Matrix(n2.a, n2.b, n2.c, n2.d, 0, 0);
      const p2 = m2.transform({ x: w0 / 2, y: -h0 / 2 });
      const q2 = m2.transform({ x: w0 / 2, y: +h0 / 2 });
      const s = Math.min(
        1,
        this.width / Math.abs(p2.x * 2),
        this.width / Math.abs(q2.x * 2),
        this.height / Math.abs(p2.y * 2),
        this.height / Math.abs(q2.y * 2)
      );
      const w1 = node.width = s * node.width;
      const h1 = node.height = s * node.height;
      if (node.parent) {
        const p22 = m2.transform({ x: w1 / 2, y: -h1 / 2 });
        const q22 = m2.transform({ x: w1 / 2, y: +h1 / 2 });
        const hw = Math.max(Math.abs(p22.x), Math.abs(q22.x));
        const hh2 = Math.max(Math.abs(p22.y), Math.abs(q22.y));
        const p1 = node.parent.toLocal(this.toWorld({ x: hw, y: hh2 }));
        const p222 = node.parent.toLocal(this.toWorld({ x: this.width - hw, y: this.height - hh2 }));
        node.position.x = Math.max(Math.min(node.position.x, p222.x), p1.x);
        node.position.y = Math.max(Math.min(node.position.y, p222.y), p1.y);
      }
    }
  }
  postDraw(renderer) {
    renderer.lineWidth = this.selected ? 3 : 1;
    renderer.strokeStyle = parseStyle(this.color);
    renderer.setLineDash([5, 5]);
    renderer.strokeRect(0, 0, this.width, this.height);
  }
}
class Material {
  constructor() {
    this.onPatternUpdate = new Signal();
    this.pattern = null;
    this._color = "#000000";
    this._url = "";
    const canvas = document.createElement("canvas");
    this._context = canvas.getContext("2d");
    this._image = document.createElement("img");
    this._image.onload = this.updatePattern.bind(this);
    this.updatePattern();
  }
  get image() {
    return this._url;
  }
  set image(value) {
    this._url = value;
    this._image.src = value;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    if (typeof value === "number") {
      value = "#" + ("000000" + value.toString(16)).slice(-6);
    }
    if (this._color !== value) {
      this._color = value;
      this.updatePattern();
    }
  }
  updatePattern() {
    const context = this._context;
    const imageW = this._image.naturalWidth;
    const imageH = this._image.naturalHeight;
    const color2 = parseRGB(this._color);
    if (!this._image.complete || !imageW || !imageH) {
      this.pattern = this._color ? parseStyle(this._color) : null;
      this.onPatternUpdate.emit();
      return;
    }
    context.canvas.width = imageW;
    context.canvas.height = imageH;
    context.clearRect(0, 0, imageW, imageH);
    context.drawImage(this._image, 0, 0);
    if (!!color2) {
      const canvasW = context.canvas.width;
      const canvasH = context.canvas.height;
      const pixels = context.getImageData(0, 0, canvasW, canvasH);
      const avglt = quantizeL(pixels.data);
      tint(pixels.data, color2, avglt);
      context.putImageData(pixels, 0, 0);
    }
    this.pattern = context.createPattern(context.canvas, "repeat");
    this.onPatternUpdate.emit();
  }
}
class Layer extends Node {
  constructor(editor) {
    super();
    this.editor = editor;
    this.id = "";
    this.material = new Material();
    this._baseImg = "";
    const canvas = document.createElement("canvas");
    this._context = canvas.getContext("2d");
    this._image = document.createElement("img");
    this._image.onload = this.updateComposition.bind(this);
    this.material.onPatternUpdate.add(this.updateComposition, this);
  }
  get baseImage() {
    return this._baseImg;
  }
  set baseImage(value) {
    this._baseImg = value;
    this._image.src = value;
  }
  update() {
    this.width = this._image.naturalWidth;
    this.height = this._image.naturalHeight;
  }
  draw(renderer) {
    renderer.drawImage(this._context.canvas, 0, 0, this.width, this.height);
  }
  updateComposition() {
    const context = this._context;
    const imageW = this._image.naturalWidth;
    const imageH = this._image.naturalHeight;
    if (imageW > 0 && imageH > 0) {
      context.globalCompositeOperation = "copy";
      context.canvas.width = imageW;
      context.canvas.height = imageH;
      context.drawImage(this._image, 0, 0, imageW, imageH);
      if (this.material.pattern) {
        context.globalCompositeOperation = "source-in";
        context.fillStyle = this.material.pattern;
        context.fillRect(0, 0, imageW, imageH);
      }
    } else {
      context.canvas.width = 1;
      context.canvas.height = 1;
      context.clearRect(0, 0, 1, 1);
    }
  }
}
const Cursors = {
  [0]: "",
  [1]: "nw-resize",
  [2]: "n-resize",
  [3]: "ne-resize",
  [4]: "w-resize",
  [5]: "move",
  [6]: "e-resize",
  [7]: "sw-resize",
  [8]: "s-resize",
  [9]: "se-resize",
  [10]: "url(data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIHdpZHRoPSIxMjgiICBoZWlnaHQ9IjEyOCI+IDxkZWZzPiAJPGZpbHRlciBpZD0ic29mR2xvdyIgaGVpZ2h0PSIzMDAlIiB3aWR0aD0iMzAwJSIgeD0iLTc1JSIgeT0iLTc1JSI+IAkJPCEtLSBUaGlja2VuIG91dCB0aGUgb3JpZ2luYWwgc2hhcGUgLS0+IAk8ZmVNb3JwaG9sb2d5IG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMyIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InRoaWNrZW4iIC8+IAkJPCEtLSBVc2UgYSBnYXVzc2lhbiBibHVyIHRvIGNyZWF0ZSB0aGUgc29mdCBibHVycmluZXNzIG9mIHRoZSBnbG93IC0tPgkJPGZlR2F1c3NpYW5CbHVyIGluPSJ0aGlja2VuIiBzdGREZXZpYXRpb249IjQiIHJlc3VsdD0iYmx1cnJlZCIgLz4JCTwhLS0gQ2hhbmdlIHRoZSBjb2xvdXIgLS0+CQk8ZmVGbG9vZCBmbG9vZC1jb2xvcj0icmdiKDI1NSwyNTUsMjU1KSIgcmVzdWx0PSJnbG93Q29sb3IiIC8+CQk8IS0tIENvbG9yIGluIHRoZSBnbG93cyAtLT4JCTxmZUNvbXBvc2l0ZSBpbj0iZ2xvd0NvbG9yIiBpbjI9ImJsdXJyZWQiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzb2Z0R2xvd19jb2xvcmVkIiAvPgkJPCEtLQlMYXllciB0aGUgZWZmZWN0cyB0b2dldGhlciAtLT4JCTxmZU1lcmdlPgkJCTxmZU1lcmdlTm9kZSBpbj0ic29mdEdsb3dfY29sb3JlZCIvPgkJCTxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPgkJPC9mZU1lcmdlPgk8L2ZpbHRlcj48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQgNjQpIHNjYWxlKDAuMjUpIj48ZyBmaWx0ZXI9InVybCgjc29mR2xvdykiPjxpbWFnZSB0cmFuc2Zvcm09InJvdGF0ZSgtOTApIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUtBQUFBQ2dCQU1BQUFCNTRYb2VBQUFBRWxCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdLeG1pQUFBQUJuUlNUbE1BLzRCTjJhY3BrU0NvQUFBQ29FbEVRVlI0bk8yWnowN0RNQXlIeXpydUZMWjdMSGdBL3Q2SDJPNU1zUGQvRmJwdVNkTzBpZTNrcHdsRWZiWDI2WFBpdEtsWFZYUE1NY2NjYzhSaWdRWVNtTGRvd0VBQ0F4Y05HRWhnWUN1SUJSSVllQlNFQWdrTTdBU1JRQUlEVDRKQUlJR0JaMEVja01CQUt3Z0RFaGpvQkZGQUFnTjdRUkNRd0VCUEVBTWtNTkFYaEFBSkRCd0lJb0FFQmc0RkFVQUNBd1BCY2lDRndQcWxEWnlnamRYMmtFY05CUWV4MHpOamdrNzBIaWw0c254RUNuYnhCUlhzSkxHQ2JheWxaY3NFMjFnSmlXSmdzOGFXTENmS0Zac1B0R0x6aVZaY3dSVmxSU3NVRzFIdmpCUzN1ME1iMzlzSjRHMldva3M4ZjQrSUprZlJTOVVQUWU0dVIzR1FxOS9MVnpISXZnNlNtd3pGTVB2bUozTjZjWlFlRURPT3l6anRWeTNiRnU0NnQ5Zld6RjA0L2IyVzFjeGRpYSsxTmJPWDlyNW9ZYzNjWjRXbnFINjdjUG1OVm5FNjN5c0tGNUg5ZUhTcktGeEU5dk4ycVYxRTdnTzhWbllpUHlKd05kOElnZHdRdzlVc2V4RlU3SmpGMVN6ZEZYWVE1QTYwK0FiS2pLcWVMTkRvRktOWnQ0Z2JNVEE5N25PTEtONW1iaUJwRjFGNitDcHVaR3BiWDNoVnRMK0pKNi9VZmNPTW5kMnVLSURKd2JqYkZjMm5VSEowcjIvRUt2M25ndDFtNmZPbWk5VGZIL2FCczlFQVUyRVBuNkt6MDJIN1J0SFo2VmlpZ2ZiVnB6a3Fsd1hhenRhY3Zjc0MzVkg1UjBCN21GV1RsNzhOM00vQUdhaVAzOS9ZRm9qaWxUOXRoR01uOFhlQmRESm13SXB5UWFHaVFsQ2txQkVVS2FvRUJZbzZRWUdpVXBCVjFBcXlpbXBCUmxFdnlDaG1DQ1lWY3dTVGlsbUNDY1U4d1lSaXBtQlVNVmN3cXBndEdGSE1GNHdvRmdoT0twWUlUaW9XQ1U0b2xnbE9LQllLamhSTEJVZUt4WUtCWXJsZ29HZ0FRRjhSSVRoUU5CQmdyNGdSOUJRTkNHZ1ZVWUpPMGNDQUowV2M0Rm5SQUlGSFJhUmdwMmlnd0lxd2dxMmlTU1IvQUZFdnZkdGFIVHFkQUFBQUFFbEZUa1N1UW1DQyIgeD0iLTQwIiB5PSItNDAiIGhlaWdodD0iODAiIHdpZHRoPSI4MCIvPjwvZz48L2c+PC9zdmc+) 64 64, default",
  [11]: "url(data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIHdpZHRoPSIxMjgiICBoZWlnaHQ9IjEyOCI+IDxkZWZzPiAJPGZpbHRlciBpZD0ic29mR2xvdyIgaGVpZ2h0PSIzMDAlIiB3aWR0aD0iMzAwJSIgeD0iLTc1JSIgeT0iLTc1JSI+IAkJPCEtLSBUaGlja2VuIG91dCB0aGUgb3JpZ2luYWwgc2hhcGUgLS0+IAk8ZmVNb3JwaG9sb2d5IG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMyIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InRoaWNrZW4iIC8+IAkJPCEtLSBVc2UgYSBnYXVzc2lhbiBibHVyIHRvIGNyZWF0ZSB0aGUgc29mdCBibHVycmluZXNzIG9mIHRoZSBnbG93IC0tPgkJPGZlR2F1c3NpYW5CbHVyIGluPSJ0aGlja2VuIiBzdGREZXZpYXRpb249IjQiIHJlc3VsdD0iYmx1cnJlZCIgLz4JCTwhLS0gQ2hhbmdlIHRoZSBjb2xvdXIgLS0+CQk8ZmVGbG9vZCBmbG9vZC1jb2xvcj0icmdiKDI1NSwyNTUsMjU1KSIgcmVzdWx0PSJnbG93Q29sb3IiIC8+CQk8IS0tIENvbG9yIGluIHRoZSBnbG93cyAtLT4JCTxmZUNvbXBvc2l0ZSBpbj0iZ2xvd0NvbG9yIiBpbjI9ImJsdXJyZWQiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzb2Z0R2xvd19jb2xvcmVkIiAvPgkJPCEtLQlMYXllciB0aGUgZWZmZWN0cyB0b2dldGhlciAtLT4JCTxmZU1lcmdlPgkJCTxmZU1lcmdlTm9kZSBpbj0ic29mdEdsb3dfY29sb3JlZCIvPgkJCTxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPgkJPC9mZU1lcmdlPgk8L2ZpbHRlcj48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQgNjQpIHNjYWxlKDAuMjUpIj48ZyBmaWx0ZXI9InVybCgjc29mR2xvdykiPjxpbWFnZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzYwKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLQUFBQUNnQkFNQUFBQjU0WG9lQUFBQUVsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnS3htaUFBQUFCblJTVGxNQS80Qk4yYWNwa1NDb0FBQUNvRWxFUVZSNG5PMlp6MDdETUF5SHl6cnVGTFo3TEhnQS90NkgyTzVNc1BkL0ZicHVTZE8waWUza3B3bEVmYlgyNlhQaXRLbFhWWFBNTWNjY2M4UmlnUVlTbUxkb3dFQUNBeGNOR0VoZ1lDdUlCUklZZUJTRUFna003QVNSUUFJRFQ0SkFJSUdCWjBFY2tNQkFLd2dERWhqb0JGRkFBZ043UVJDUXdFQlBFQU1rTU5BWGhBQUpEQndJSW9BRUJnNEZBVUFDQXdQQmNpQ0Z3UHFsRFp5Z2pkWDJrRWNOQlFleDB6TmpnazcwSGlsNHNueEVDbmJ4QlJYc0pMR0NiYXlsWmNzRTIxZ0ppV0pnczhhV0xDZktGWnNQdEdMemlWWmN3UlZsUlNzVUcxSHZqQlMzdTBNYjM5c0o0RzJXb2tzOGY0K0lKa2ZSUzlVUFFlNHVSM0dRcTkvTFZ6SEl2ZzZTbXd6Rk1Qdm1KM042Y1pRZUVET095emp0VnkzYkZ1NDZ0OWZXekYwNC9iMlcxY3hkaWErMU5iT1g5cjVvWWMzY1o0V25xSDY3Y1BtTlZuRTYzeXNLRjVIOWVIU3JLRnhFOXZOMnFWMUU3Z084Vm5ZaVB5SndOZDhJZ2R3UXc5VXNleEZVN0pqRjFTemRGWFlRNUE2MCtBYktqS3FlTE5Eb0ZLTlp0NGdiTVRBOTduT0xLTjVtYmlCcEYxRjYrQ3B1WkdwYlgzaFZ0TCtKSjYvVWZjT01uZDJ1S0lESndiamJGYzJuVUhKMHIyL0VLdjNuZ3QxbTZmT21pOVRmSC9hQnM5RUFVMkVQbjZLejAySDdSdEhaNlZpaWdmYlZwemtxbHdYYXp0YWN2Y3NDM1ZINVIwQjdtRldUbDc4TjNNL0FHYWlQMzkvWUZvamlsVDl0aEdNbjhYZUJkREptd0lweVFhR2lRbENrcUJFVUthb0VCWW82UVlHaVVwQlYxQXF5aW1wQlJsRXZ5Q2htQ0NZVmN3U1RpbG1DQ2NVOHdZUmlwbUJVTVZjd3FwZ3RHRkhNRjR3b0ZnaE9LcFlJVGlvV0NVNG9sZ2xPS0JZS2poUkxCVWVLeFlLQllybGdvR2dBUUY4UklUaFFOQkJncjRnUjlCUU5DR2dWVVlKTzBjQ0FKMFdjNEZuUkFJRkhSYVJncDJpZ3dJcXdncTJpU1NSL0FGRXZ2ZHRhSFRxZEFBQUFBRWxGVGtTdVFtQ0MiIHg9Ii00MCIgeT0iLTQwIiBoZWlnaHQ9IjgwIiB3aWR0aD0iODAiLz48L2c+PC9nPjwvc3ZnPg==) 64 64, default",
  [12]: "url(data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIHdpZHRoPSIxMjgiICBoZWlnaHQ9IjEyOCI+IDxkZWZzPiAJPGZpbHRlciBpZD0ic29mR2xvdyIgaGVpZ2h0PSIzMDAlIiB3aWR0aD0iMzAwJSIgeD0iLTc1JSIgeT0iLTc1JSI+IAkJPCEtLSBUaGlja2VuIG91dCB0aGUgb3JpZ2luYWwgc2hhcGUgLS0+IAk8ZmVNb3JwaG9sb2d5IG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMyIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InRoaWNrZW4iIC8+IAkJPCEtLSBVc2UgYSBnYXVzc2lhbiBibHVyIHRvIGNyZWF0ZSB0aGUgc29mdCBibHVycmluZXNzIG9mIHRoZSBnbG93IC0tPgkJPGZlR2F1c3NpYW5CbHVyIGluPSJ0aGlja2VuIiBzdGREZXZpYXRpb249IjQiIHJlc3VsdD0iYmx1cnJlZCIgLz4JCTwhLS0gQ2hhbmdlIHRoZSBjb2xvdXIgLS0+CQk8ZmVGbG9vZCBmbG9vZC1jb2xvcj0icmdiKDI1NSwyNTUsMjU1KSIgcmVzdWx0PSJnbG93Q29sb3IiIC8+CQk8IS0tIENvbG9yIGluIHRoZSBnbG93cyAtLT4JCTxmZUNvbXBvc2l0ZSBpbj0iZ2xvd0NvbG9yIiBpbjI9ImJsdXJyZWQiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzb2Z0R2xvd19jb2xvcmVkIiAvPgkJPCEtLQlMYXllciB0aGUgZWZmZWN0cyB0b2dldGhlciAtLT4JCTxmZU1lcmdlPgkJCTxmZU1lcmdlTm9kZSBpbj0ic29mdEdsb3dfY29sb3JlZCIvPgkJCTxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPgkJPC9mZU1lcmdlPgk8L2ZpbHRlcj48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQgNjQpIHNjYWxlKDAuMjUpIj48ZyBmaWx0ZXI9InVybCgjc29mR2xvdykiPjxpbWFnZSB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLQUFBQUNnQkFNQUFBQjU0WG9lQUFBQUVsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnS3htaUFBQUFCblJTVGxNQS80Qk4yYWNwa1NDb0FBQUNvRWxFUVZSNG5PMlp6MDdETUF5SHl6cnVGTFo3TEhnQS90NkgyTzVNc1BkL0ZicHVTZE8waWUza3B3bEVmYlgyNlhQaXRLbFhWWFBNTWNjY2M4UmlnUVlTbUxkb3dFQUNBeGNOR0VoZ1lDdUlCUklZZUJTRUFna003QVNSUUFJRFQ0SkFJSUdCWjBFY2tNQkFLd2dERWhqb0JGRkFBZ043UVJDUXdFQlBFQU1rTU5BWGhBQUpEQndJSW9BRUJnNEZBVUFDQXdQQmNpQ0Z3UHFsRFp5Z2pkWDJrRWNOQlFleDB6TmpnazcwSGlsNHNueEVDbmJ4QlJYc0pMR0NiYXlsWmNzRTIxZ0ppV0pnczhhV0xDZktGWnNQdEdMemlWWmN3UlZsUlNzVUcxSHZqQlMzdTBNYjM5c0o0RzJXb2tzOGY0K0lKa2ZSUzlVUFFlNHVSM0dRcTkvTFZ6SEl2ZzZTbXd6Rk1Qdm1KM042Y1pRZUVET095emp0VnkzYkZ1NDZ0OWZXekYwNC9iMlcxY3hkaWErMU5iT1g5cjVvWWMzY1o0V25xSDY3Y1BtTlZuRTYzeXNLRjVIOWVIU3JLRnhFOXZOMnFWMUU3Z084Vm5ZaVB5SndOZDhJZ2R3UXc5VXNleEZVN0pqRjFTemRGWFlRNUE2MCtBYktqS3FlTE5Eb0ZLTlp0NGdiTVRBOTduT0xLTjVtYmlCcEYxRjYrQ3B1WkdwYlgzaFZ0TCtKSjYvVWZjT01uZDJ1S0lESndiamJGYzJuVUhKMHIyL0VLdjNuZ3QxbTZmT21pOVRmSC9hQnM5RUFVMkVQbjZLejAySDdSdEhaNlZpaWdmYlZwemtxbHdYYXp0YWN2Y3NDM1ZINVIwQjdtRldUbDc4TjNNL0FHYWlQMzkvWUZvamlsVDl0aEdNbjhYZUJkREptd0lweVFhR2lRbENrcUJFVUthb0VCWW82UVlHaVVwQlYxQXF5aW1wQlJsRXZ5Q2htQ0NZVmN3U1RpbG1DQ2NVOHdZUmlwbUJVTVZjd3FwZ3RHRkhNRjR3b0ZnaE9LcFlJVGlvV0NVNG9sZ2xPS0JZS2poUkxCVWVLeFlLQllybGdvR2dBUUY4UklUaFFOQkJncjRnUjlCUU5DR2dWVVlKTzBjQ0FKMFdjNEZuUkFJRkhSYVJncDJpZ3dJcXdncTJpU1NSL0FGRXZ2ZHRhSFRxZEFBQUFBRWxGVGtTdVFtQ0MiIHg9Ii00MCIgeT0iLTQwIiBoZWlnaHQ9IjgwIiB3aWR0aD0iODAiLz48L2c+PC9nPjwvc3ZnPg==) 64 64, default",
  [13]: "url(data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIHdpZHRoPSIxMjgiICBoZWlnaHQ9IjEyOCI+IDxkZWZzPiAJPGZpbHRlciBpZD0ic29mR2xvdyIgaGVpZ2h0PSIzMDAlIiB3aWR0aD0iMzAwJSIgeD0iLTc1JSIgeT0iLTc1JSI+IAkJPCEtLSBUaGlja2VuIG91dCB0aGUgb3JpZ2luYWwgc2hhcGUgLS0+IAk8ZmVNb3JwaG9sb2d5IG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMyIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InRoaWNrZW4iIC8+IAkJPCEtLSBVc2UgYSBnYXVzc2lhbiBibHVyIHRvIGNyZWF0ZSB0aGUgc29mdCBibHVycmluZXNzIG9mIHRoZSBnbG93IC0tPgkJPGZlR2F1c3NpYW5CbHVyIGluPSJ0aGlja2VuIiBzdGREZXZpYXRpb249IjQiIHJlc3VsdD0iYmx1cnJlZCIgLz4JCTwhLS0gQ2hhbmdlIHRoZSBjb2xvdXIgLS0+CQk8ZmVGbG9vZCBmbG9vZC1jb2xvcj0icmdiKDI1NSwyNTUsMjU1KSIgcmVzdWx0PSJnbG93Q29sb3IiIC8+CQk8IS0tIENvbG9yIGluIHRoZSBnbG93cyAtLT4JCTxmZUNvbXBvc2l0ZSBpbj0iZ2xvd0NvbG9yIiBpbjI9ImJsdXJyZWQiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzb2Z0R2xvd19jb2xvcmVkIiAvPgkJPCEtLQlMYXllciB0aGUgZWZmZWN0cyB0b2dldGhlciAtLT4JCTxmZU1lcmdlPgkJCTxmZU1lcmdlTm9kZSBpbj0ic29mdEdsb3dfY29sb3JlZCIvPgkJCTxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPgkJPC9mZU1lcmdlPgk8L2ZpbHRlcj48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQgNjQpIHNjYWxlKDAuMjUpIj48ZyBmaWx0ZXI9InVybCgjc29mR2xvdykiPjxpbWFnZSB0cmFuc2Zvcm09InJvdGF0ZSgtMjcwKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLQUFBQUNnQkFNQUFBQjU0WG9lQUFBQUVsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnS3htaUFBQUFCblJTVGxNQS80Qk4yYWNwa1NDb0FBQUNvRWxFUVZSNG5PMlp6MDdETUF5SHl6cnVGTFo3TEhnQS90NkgyTzVNc1BkL0ZicHVTZE8waWUza3B3bEVmYlgyNlhQaXRLbFhWWFBNTWNjY2M4UmlnUVlTbUxkb3dFQUNBeGNOR0VoZ1lDdUlCUklZZUJTRUFna003QVNSUUFJRFQ0SkFJSUdCWjBFY2tNQkFLd2dERWhqb0JGRkFBZ043UVJDUXdFQlBFQU1rTU5BWGhBQUpEQndJSW9BRUJnNEZBVUFDQXdQQmNpQ0Z3UHFsRFp5Z2pkWDJrRWNOQlFleDB6TmpnazcwSGlsNHNueEVDbmJ4QlJYc0pMR0NiYXlsWmNzRTIxZ0ppV0pnczhhV0xDZktGWnNQdEdMemlWWmN3UlZsUlNzVUcxSHZqQlMzdTBNYjM5c0o0RzJXb2tzOGY0K0lKa2ZSUzlVUFFlNHVSM0dRcTkvTFZ6SEl2ZzZTbXd6Rk1Qdm1KM042Y1pRZUVET095emp0VnkzYkZ1NDZ0OWZXekYwNC9iMlcxY3hkaWErMU5iT1g5cjVvWWMzY1o0V25xSDY3Y1BtTlZuRTYzeXNLRjVIOWVIU3JLRnhFOXZOMnFWMUU3Z084Vm5ZaVB5SndOZDhJZ2R3UXc5VXNleEZVN0pqRjFTemRGWFlRNUE2MCtBYktqS3FlTE5Eb0ZLTlp0NGdiTVRBOTduT0xLTjVtYmlCcEYxRjYrQ3B1WkdwYlgzaFZ0TCtKSjYvVWZjT01uZDJ1S0lESndiamJGYzJuVUhKMHIyL0VLdjNuZ3QxbTZmT21pOVRmSC9hQnM5RUFVMkVQbjZLejAySDdSdEhaNlZpaWdmYlZwemtxbHdYYXp0YWN2Y3NDM1ZINVIwQjdtRldUbDc4TjNNL0FHYWlQMzkvWUZvamlsVDl0aEdNbjhYZUJkREptd0lweVFhR2lRbENrcUJFVUthb0VCWW82UVlHaVVwQlYxQXF5aW1wQlJsRXZ5Q2htQ0NZVmN3U1RpbG1DQ2NVOHdZUmlwbUJVTVZjd3FwZ3RHRkhNRjR3b0ZnaE9LcFlJVGlvV0NVNG9sZ2xPS0JZS2poUkxCVWVLeFlLQllybGdvR2dBUUY4UklUaFFOQkJncjRnUjlCUU5DR2dWVVlKTzBjQ0FKMFdjNEZuUkFJRkhSYVJncDJpZ3dJcXdncTJpU1NSL0FGRXZ2ZHRhSFRxZEFBQUFBRWxGVGtTdVFtQ0MiIHg9Ii00MCIgeT0iLTQwIiBoZWlnaHQ9IjgwIiB3aWR0aD0iODAiLz48L2c+PC9nPjwvc3ZnPg==) 64 64, default"
};
class Resizer extends Node {
  constructor(owner) {
    super();
    this.owner = owner;
    this.handleSize = 6;
    this.resizable = true;
    this.rotatable = true;
    this.keepRatio = false;
    this.ratio = 0;
    this.rootBackup = null;
    this.hitResult = 0;
    this.pointerX = 0;
    this.pointerY = 0;
    this.on("pointerdown", this.onPointerDown, this);
    this.on("pointermove", this.onPointerMove, this);
    this.on("pointerup", this.onPointerUp, this);
  }
  isInside(point) {
    return this.hitHandle(point.x, point.y) !== 0;
  }
  onPointerDown(pointer) {
    this.hitResult = this.hitHandle(pointer.x, pointer.y);
    this.pointerX = pointer.x;
    this.pointerY = pointer.y;
    this.rootBackup = this.root;
    this.rootBackup.on("pointermove", this.onPointerMove, this);
    this.rootBackup.on("pointerup", this.onPointerUp, this);
  }
  onPointerMove(pointer) {
    if (!this.root) {
      return this.onPointerUp(pointer);
    }
    if (!pointer.buttons) {
      this.cursor = Cursors[this.hitHandle(pointer.x, pointer.y)];
    }
    if (this.hitResult !== 0 && this.owner.parent) {
      const p0 = this.owner.toLocal({ x: this.pointerX, y: this.pointerY });
      const p1 = this.owner.toLocal({ x: pointer.x, y: pointer.y });
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      switch (this.hitResult) {
        case 5:
          this.onResize(p0.x, p0.y, p1.x, p1.y, 0, 0);
          break;
        case 4:
          this.onResize(p0.x, p0.y, p1.x, p0.y, -dx, 0);
          break;
        case 2:
          this.onResize(p0.x, p0.y, p0.x, p1.y, 0, -dy);
          break;
        case 6:
          this.onResize(p0.x, p0.y, p0.x, p0.y, dx, 0);
          break;
        case 8:
          this.onResize(p0.x, p0.y, p0.x, p0.y, 0, dy);
          break;
        case 1:
          this.onResize(p0.x, p0.y, p1.x, p1.y, -dx, -dy);
          break;
        case 9:
          this.onResize(p0.x, p0.y, p0.x, p0.y, dx, dy);
          break;
        case 3:
          this.onResize(p0.x, p0.y, p0.x, p1.y, dx, -dy);
          break;
        case 7:
          this.onResize(p0.x, p0.y, p1.x, p0.y, -dx, dy);
          break;
      }
      switch (this.hitResult) {
        case 10:
        case 11:
        case 12:
        case 13: {
          const center = this.toWorld({ x: this.width / 2, y: this.height / 2 });
          const a0 = Math.atan2(this.pointerY - center.y, this.pointerX - center.x);
          const a1 = Math.atan2(pointer.y - center.y, pointer.x - center.x);
          this.owner.rotation += (a1 - a0) * 180 / Math.PI;
          break;
        }
      }
      this.pointerX = pointer.x;
      this.pointerY = pointer.y;
    }
  }
  onResize(x0, y0, x1, y1, dw, dh2) {
    const p0 = this.owner.localMatrix.transform({ x: x0, y: y0 });
    const p1 = this.owner.localMatrix.transform({ x: x1, y: y1 });
    if (this.keepRatio && this.ratio > 0) {
      if (Math.abs(dw) > Math.abs(dh2)) {
        dh2 = dw / this.ratio;
      } else {
        dw = dh2 * this.ratio;
      }
    }
    if (this.owner.width + dw < this.handleSize) {
      return;
    }
    if (this.owner.height + dh2 < this.handleSize) {
      return;
    }
    this.owner.width += dw;
    this.owner.height += dh2;
    this.owner.position.x += p1.x - p0.x;
    this.owner.position.y += p1.y - p0.y;
  }
  onPointerUp(_pointer) {
    var _a, _b;
    this.hitResult = 0;
    (_a = this.rootBackup) == null ? void 0 : _a.off("pointermove", this.onPointerMove, this);
    (_b = this.rootBackup) == null ? void 0 : _b.off("pointerup", this.onPointerUp, this);
    this.rootBackup = null;
  }
  draw(context) {
    const hs = this.handleSize;
    const w2 = this.width;
    const h2 = this.height;
    const u2 = w2 / 2;
    const v2 = h2 / 2;
    context.globalCompositeOperation = "hard-light";
    context.strokeStyle = "#1a80ff";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(w2, 0);
    context.lineTo(w2, h2);
    context.lineTo(0, h2);
    context.lineTo(0, 0);
    context.stroke();
    if (this.resizable) {
      context.rect(-hs, -hs, hs * 2, hs * 2);
      context.rect(-hs, v2 - hs, hs * 2, hs * 2);
      context.rect(-hs, h2 - hs, hs * 2, hs * 2);
      context.rect(u2 - hs, -hs, hs * 2, hs * 2);
      context.rect(u2 - hs, h2 - hs, hs * 2, hs * 2);
      context.rect(w2 - hs, -hs, hs * 2, hs * 2);
      context.rect(w2 - hs, v2 - hs, hs * 2, hs * 2);
      context.rect(w2 - hs, h2 - hs, hs * 2, hs * 2);
      context.stroke();
    }
    context.beginPath();
    context.circle(u2, v2, hs);
    context.stroke();
  }
  hitHandle(x2, y2) {
    const p2 = this.toLocal({ x: x2, y: y2 });
    const hs = this.handleSize;
    const w2 = this.width;
    const h2 = this.height;
    const u2 = w2 / 2;
    const v2 = h2 / 2;
    if (this.resizable) {
      if (Math.abs(p2.y - 0) < hs) {
        if (Math.abs(p2.x - 0) < hs)
          return 1;
        if (Math.abs(p2.x - w2) < hs)
          return 3;
        if (Math.abs(p2.x - u2) < u2)
          return 2;
      }
      if (Math.abs(p2.y - h2) < hs) {
        if (Math.abs(p2.x - 0) < hs)
          return 7;
        if (Math.abs(p2.x - w2) < hs)
          return 9;
        if (Math.abs(p2.x - u2) < u2)
          return 8;
      }
      if (Math.abs(p2.y - v2) < v2) {
        if (Math.abs(p2.x - 0) < hs)
          return 4;
        if (Math.abs(p2.x - w2) < hs)
          return 6;
        if (Math.abs(p2.x - u2) < u2)
          return 5;
      }
    }
    if (this.rotatable) {
      if (Math.abs(p2.y - (0 - hs * 2)) < hs * 2) {
        if (Math.abs(p2.x - (0 - hs * 2)) < hs)
          return 10;
        if (Math.abs(p2.x - (w2 + hs * 2)) < hs)
          return 11;
      }
      if (Math.abs(p2.y - (h2 + hs * 2)) < hs * 2) {
        if (Math.abs(p2.x - (0 - hs * 2)) < hs)
          return 12;
        if (Math.abs(p2.x - (w2 + hs * 2)) < hs)
          return 13;
      }
    }
    if (Math.abs(p2.y - v2) < v2 && Math.abs(p2.x - u2) < u2) {
      return 5;
    }
    return 0;
  }
}
class CustomBase extends Selectable {
  constructor(editor, area, type) {
    super();
    this.editor = editor;
    this.area = area;
    this.type = type;
    this.id = "";
    this.resizer = new Resizer(this);
    this.justInited = false;
    this.add(this.resizer);
    this.on("pointerdown", this.onPointerDown, this);
    this.on("selected", this.onToggleSelected, this);
    this.on("unselected", this.onToggleSelected, this);
    this.position.x = area.width / 2;
    this.position.y = area.height / 2;
    this.resizer.hidden = true;
    this.resizer.resizable = !area.fixed;
    this.resizer.rotatable = !area.fixed;
  }
  isInside(point) {
    if (this.selected) {
      return this.resizer.isInside(point);
    }
    return super.isInside(point);
  }
  update() {
    const pivotX = this.width / 2;
    const pivotY = this.height / 2;
    if (pivotX !== this.pivot.x || pivotY !== this.pivot.y) {
      const p0 = this.localToParent({ x: this.pivot.x, y: this.pivot.y });
      const p1 = this.localToParent({ x: pivotX, y: pivotY });
      this.pivot.x = pivotX;
      this.pivot.y = pivotY;
      this.position.x += p1.x - p0.x;
      this.position.y += p1.y - p0.y;
    }
    if (this.justInited) {
      this.justInited = false;
      if (this.area.autoFit) {
        if (this.resizer.keepRatio && this.resizer.ratio > 0) {
          if (this.resizer.ratio > 1) {
            this.width = this.area.height * this.resizer.ratio;
            this.height = this.area.height;
          } else {
            this.width = this.area.width;
            this.height = this.area.height / this.resizer.ratio;
          }
        } else {
          this.width = this.area.width;
          this.height = this.area.height;
        }
      }
    }
    this.area.resizeToFit(this);
    this.resizer.width = this.width;
    this.resizer.height = this.height;
    this.resizer.resizable = !this.area.fixed;
    this.resizer.rotatable = !this.area.fixed;
  }
  onToggleSelected() {
    this.resizer.hidden = !this.selected;
  }
  onPointerDown(pointer) {
    this.resizer.emit("pointerdown", pointer);
  }
}
class CustomImage extends CustomBase {
  constructor(editor, area, url) {
    super(editor, area, "image");
    this._image = document.createElement("img");
    this._url = "";
    this._image.src = this._url = url != null ? url : "";
    this._image.onload = () => {
      this.justInited = true;
      this.width = this._image.naturalWidth;
      this.height = this._image.naturalHeight;
      this.resizer.keepRatio = true;
      this.resizer.ratio = this.width / this.height;
    };
  }
  exportConfig() {
    return {
      id: this.id,
      type: "image",
      url: this._url,
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height,
      rotation: this.rotation
    };
  }
  get url() {
    return this._url;
  }
  set url(value) {
    this._url = value;
    this._image.src = value;
  }
  draw(renderer) {
    if (this._image.complete) {
      const imageW = this._image.naturalWidth;
      const imageH = this._image.naturalWidth;
      if (imageW > 0 && imageH > 0) {
        renderer.drawImage(this._image, 0, 0, this.width, this.height);
      }
    }
  }
}
class CustomText extends CustomBase {
  constructor(editor, area) {
    super(editor, area, "text");
    this.area = area;
    this.size = 32;
    this.font = "serif";
    this.color = 0;
    this.strokeColor = 0;
    this.stroke = 0;
    this.lineSpacing = 1;
    this.textAlign = "left";
    this.verticalAlign = "top";
    this._lines = [];
    this._text = "";
    this._maxch = 0;
    this._initText = false;
    this._canvas = document.createElement("canvas");
    this._context = this._canvas.getContext("2d");
    this.justInited = true;
  }
  get text() {
    return this._text;
  }
  set text(value) {
    let lines = value.split("\n");
    let maxch = 0;
    for (let i = 0; i < lines.length; i++) {
      maxch = Math.max(maxch, lines[i].length);
    }
    this._initText = !this._text && !!value;
    this._text = value;
    this._lines = lines;
    this._maxch = maxch;
  }
  exportConfig() {
    return {
      id: this.id,
      type: "text",
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height,
      rotation: this.rotation,
      size: this.size,
      text: this.text,
      font: this.font,
      color: this.color,
      stroke: this.stroke,
      strokeColor: this.strokeColor,
      lineSpacing: this.lineSpacing,
      textAlign: this.textAlign,
      verticalAlign: this.verticalAlign
    };
  }
  update() {
    super.update();
    if (this.width === 0) {
      this.width = Math.max(50, this._maxch * 50);
    }
    if (this.height === 0) {
      this.height = Math.max(50, this._lines.length * 50);
    }
    if (this.size < 12) {
      this.size = 12;
    }
    if (this._initText && this.area.autoFit) {
      this._initText = false;
      this.size = 200;
    }
  }
  draw(renderer) {
    var _a, _b;
    const { textWidth, textHeight } = this.prepareCanvas();
    if (this.selected) {
      renderer.fillStyle = "#aaaaaa77";
      renderer.globalAlpha = 0.7;
      renderer.fillRect(0, 0, this.width, this.height);
      renderer.globalAlpha = 1;
    }
    if (this._canvas.width > 0 && this._canvas.height > 0) {
      const ax = (_a = { left: 0, center: 0.5, right: 1 }[this.textAlign]) != null ? _a : 0;
      const ay = (_b = { top: 0, middle: 0.5, bottom: 1 }[this.verticalAlign]) != null ? _b : 0;
      const s = Math.min(1, this.width / textWidth, this.height / textHeight);
      const x2 = (this.width - textWidth * s) * ax;
      const y2 = (this.height - textHeight * s) * ay;
      renderer.drawImage(this._canvas, 0, 0, textWidth * 2, textHeight * 2, x2, y2, textWidth * s, textHeight * s);
    }
  }
  prepareCanvas() {
    const size = this.size * 2;
    const lines = this._lines.length;
    const estimateW = size * 1.2 * this._maxch;
    const estimateH = size * 1.2 * this.lineSpacing * lines;
    if (this._canvas.width !== estimateW) {
      this._canvas.width = estimateW;
    }
    if (this._canvas.height !== estimateH) {
      this._canvas.height = estimateH;
    }
    this._context.textBaseline = "bottom";
    this._context.font = `${size}px ${this.font}`;
    this._context.fillStyle = parseStyle(this.color);
    this._context.strokeStyle = parseStyle(this.strokeColor);
    this._context.lineWidth = this.stroke;
    this._context.clearRect(0, 0, estimateW, estimateH);
    let textWidth = 0;
    let textHeight = 0;
    let metrics;
    for (const text of this._lines) {
      metrics = this._context.measureText(text);
      textWidth = Math.max(textWidth, metrics.width);
      this._context.fillText(text, 0, textHeight + metrics.actualBoundingBoxAscent);
      if (this.stroke > 0) {
        this._context.strokeText(text, 0, textHeight + metrics.actualBoundingBoxAscent);
      }
      textHeight += metrics.actualBoundingBoxAscent * this.lineSpacing;
      textHeight += metrics.actualBoundingBoxDescent * this.lineSpacing;
    }
    if (metrics) {
      textHeight -= metrics.actualBoundingBoxDescent * this.lineSpacing;
      textHeight -= metrics.actualBoundingBoxAscent * (this.lineSpacing - 1);
    }
    return { textWidth: textWidth / 2, textHeight: textHeight / 2 };
  }
}
class View extends Node {
  constructor(editor) {
    super();
    this.editor = editor;
    this.id = "";
    this._layers = [];
    this._areas = [];
    this._custom = [];
    this._defaultArea = new AreaRectangle(editor);
    this._defaultArea.hidden = true;
    this.add(this._defaultArea);
    editor.root.on("pointerdown", this.onPointerDown, this);
  }
  get layers() {
    return this._layers.slice();
  }
  get areas() {
    return this._areas.slice();
  }
  get custom() {
    return this._custom.slice();
  }
  getLayer(index2) {
    var _a;
    return (_a = this._layers[index2]) != null ? _a : null;
  }
  getLayerIndex(layer) {
    return this._layers.indexOf(layer);
  }
  removeLayer(layer) {
    var _a, _b;
    if (typeof layer === "number") {
      (_a = this._layers[layer]) == null ? void 0 : _a.removeSelf();
      this._layers.splice(layer, 1);
    } else {
      const index2 = this._layers.indexOf(layer);
      (_b = this._layers[index2]) == null ? void 0 : _b.removeSelf();
      this._layers.splice(index2, 1);
    }
  }
  addLayer(options) {
    var _a, _b, _c;
    const layer = new Layer(this.editor);
    layer.id = (_a = options.id) != null ? _a : "";
    layer.baseImage = options.image;
    layer.material.color = (_b = options.color) != null ? _b : 0;
    layer.material.image = (_c = options.material) != null ? _c : "";
    this._layers.push(layer);
    this.add(layer);
    return layer;
  }
  getArea(index2) {
    var _a;
    return (_a = this._areas[index2 != null ? index2 : -1]) != null ? _a : this._defaultArea;
  }
  getAreaIndex(area) {
    return this._areas.indexOf(area);
  }
  removeArea(area) {
    var _a, _b, _c, _d;
    if (typeof area === "number") {
      (_a = this._areas[area]) == null ? void 0 : _a.off("selected", this.onSelectArea, this);
      (_b = this._areas[area]) == null ? void 0 : _b.removeSelf();
      this._areas.splice(area, 1);
    } else {
      const index2 = this._areas.indexOf(area);
      (_c = this._areas[index2]) == null ? void 0 : _c.off("selected", this.onSelectArea, this);
      (_d = this._areas[index2]) == null ? void 0 : _d.removeSelf();
      this._areas.splice(index2, 1);
      area.on("selected", this.onSelectArea, this);
    }
  }
  addArea(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (options.type === "point") {
      const area = new AreaPoint(this.editor);
      area.id = (_a = options.id) != null ? _a : "";
      area.fixed = !!options.fixed;
      area.position.x = options.x;
      area.position.y = options.y;
      area.resizeW = (_b = options.width) != null ? _b : 0;
      area.resizeH = (_c = options.height) != null ? _c : 0;
      area.rotation = (_d = options.rotation) != null ? _d : 0;
      area.color = (_e = options.color) != null ? _e : area.color;
      this._areas.push(area);
      this.add(area);
      area.on("selected", this.onSelectArea, this);
      return area;
    }
    if (options.type === "circle") {
      const area = new AreaCircle(this.editor);
      area.id = (_f = options.id) != null ? _f : "";
      area.autoFit = !!options.autoFit;
      area.fixed = !!options.fixed;
      area.position.x = options.x;
      area.position.y = options.y;
      area.radius = options.radius;
      area.width = options.radius * 2;
      area.height = options.radius * 2;
      area.color = (_g = options.color) != null ? _g : area.color;
      this._areas.push(area);
      this.add(area);
      area.on("selected", this.onSelectArea, this);
      return area;
    }
    if (options.type === "rect") {
      const area = new AreaRectangle(this.editor);
      area.id = (_h = options.id) != null ? _h : "";
      area.autoFit = !!options.autoFit;
      area.fixed = !!options.fixed;
      area.position.x = options.x;
      area.position.y = options.y;
      area.width = options.width;
      area.height = options.height;
      area.color = (_i = options.color) != null ? _i : area.color;
      this._areas.push(area);
      this.add(area);
      area.on("selected", this.onSelectArea, this);
      return area;
    }
  }
  getCustom(index2) {
    var _a;
    return (_a = this._custom[index2]) != null ? _a : null;
  }
  getCustomIndex(custom) {
    return this._custom.indexOf(custom);
  }
  removeCustom(custom) {
    var _a, _b, _c, _d;
    if (typeof custom === "number") {
      (_a = this._custom[custom]) == null ? void 0 : _a.off("selected", this.onSelectCustom, this);
      (_b = this._custom[custom]) == null ? void 0 : _b.removeSelf();
      this._custom.splice(custom, 1);
    } else {
      const index2 = this._custom.indexOf(custom);
      (_c = this._custom[index2]) == null ? void 0 : _c.off("selected", this.onSelectCustom, this);
      (_d = this._custom[index2]) == null ? void 0 : _d.removeSelf();
      this._custom.splice(index2, 1);
    }
  }
  addCustom(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    if (options.type === "image") {
      const area = this.getArea(options.area);
      const custom = new CustomImage(this.editor, area, options.image);
      custom.id = (_a = options.id) != null ? _a : "";
      custom.position.x = (_b = options.x) != null ? _b : 0;
      custom.position.y = (_c = options.y) != null ? _c : 0;
      custom.width = (_d = options.width) != null ? _d : 0;
      custom.height = (_e = options.height) != null ? _e : 0;
      custom.rotation = (_f = options.rotation) != null ? _f : 0;
      this._custom.push(custom);
      this.add(custom);
      custom.on("selected", this.onSelectCustom, this);
      return custom;
    }
    if (options.type === "text") {
      const area = this.getArea(options.area);
      const custom = new CustomText(this.editor, area);
      custom.id = (_g = options.id) != null ? _g : "";
      custom.text = options.text;
      custom.size = (_h = options.size) != null ? _h : 32;
      custom.font = (_i = options.font) != null ? _i : "serif";
      custom.stroke = (_j = options.stroke) != null ? _j : 0;
      custom.color = (_k = options.color) != null ? _k : "#ffffff";
      custom.strokeColor = (_l = options.strokeColor) != null ? _l : custom.color;
      custom.lineSpacing = (_m = options.lineSpacing) != null ? _m : 1;
      custom.position.x = (_n = options.x) != null ? _n : 0;
      custom.position.y = (_o = options.y) != null ? _o : 0;
      custom.rotation = (_p = options.rotation) != null ? _p : 0;
      custom.textAlign = (_q = options.textAlign) != null ? _q : "center";
      custom.verticalAlign = (_r = options.verticalAlign) != null ? _r : "middle";
      this._custom.push(custom);
      this.add(custom);
      custom.on("selected", this.onSelectCustom, this);
      return custom;
    }
  }
  showLayer(index2) {
    const target = this.getLayer(index2);
    for (const layer of this._layers) {
      layer.hidden = !!target && layer !== target;
    }
    return target;
  }
  showArea(index2) {
    const target = this.getArea(index2);
    for (const area of this._areas) {
      area.selected = area !== target;
    }
    return target;
  }
  update() {
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      this.width = Math.max(this.width, layer.width);
      this.height = Math.max(this.height, layer.height);
      this._defaultArea.width = this.width;
      this._defaultArea.height = this.height;
      layer.position.x = this.width / 2;
      layer.position.y = this.height / 2;
      layer.pivot.x = layer.width / 2;
      layer.pivot.y = layer.height / 2;
    }
    if (this.parent) {
      this.pivot.x = this.width / 2;
      this.pivot.y = this.height / 2;
      this.position.x = this.parent.width / 2;
      this.position.y = this.parent.height / 2;
    }
  }
  onSelectCustom(target) {
    for (const custom of this._custom) {
      custom.selected = custom === target;
    }
    this._selectedCustom = target;
    this.editor.emit("select-custom", target);
  }
  onSelectArea(target) {
    for (const area of this._areas) {
      area.selected = area === target;
    }
    this._selectedArea = target;
    this.editor.emit("select-area", target);
  }
  onPointerDown(pointer) {
    for (let i = this._custom.length - 1; i >= 0; i--) {
      if (this._custom[i].isInside({ x: pointer.x, y: pointer.y })) {
        this._custom[i].selected = true;
        if (this._selectedArea) {
          this._selectedArea.selected = false;
          this.editor.emit("unselect-area", this._selectedArea);
          this._selectedArea = void 0;
        }
        return;
      }
    }
    for (let i = this._areas.length - 1; i >= 0; i--) {
      if (this._areas[i].isInside({ x: pointer.x, y: pointer.y })) {
        this._areas[i].selected = true;
        if (this._selectedCustom) {
          this._selectedCustom.selected = false;
          this.editor.emit("unselect-custom", this._selectedCustom);
          this._selectedCustom = void 0;
        }
        return;
      }
    }
    if (this._selectedCustom) {
      this._selectedCustom.selected = false;
      this.editor.emit("unselect-custom", this._selectedCustom);
      this._selectedCustom = void 0;
    }
    if (this._selectedArea) {
      this._selectedArea.selected = false;
      this.editor.emit("unselect-area", this._selectedArea);
      this._selectedArea = void 0;
    }
  }
}
class Editor extends Application {
  constructor(canvas) {
    super(canvas);
    this._views = [];
    this._extractor = new Extractor();
    this.onContextMenu = (event) => {
      event.preventDefault();
    };
    canvas.addEventListener("contextmenu", this.onContextMenu);
  }
  init(options) {
    if (typeof options === "string") {
      return this.loadConfig(options);
    }
    options.forEach((viewOptions) => {
      this.addView(viewOptions);
    });
    this.showView(0);
    this.emit("inited");
  }
  loadConfig(url) {
    return fetch(url).then((res) => res.json()).then((config2) => {
      const baseURL = url.replace(/^(.*\/)?.+$/, "$1");
      config2.forEach((view) => {
        view.layers.forEach((layer) => {
          layer.image = baseURL + layer.image;
          layer.material = baseURL + layer.material;
        });
      });
      this.init(config2);
    });
  }
  destroy() {
    this.stop();
    this.canvas.removeEventListener("contextmenu", this.onContextMenu);
  }
  get views() {
    return this._views.slice();
  }
  getView(index2) {
    var _a;
    return (_a = this._views[index2]) != null ? _a : null;
  }
  getViewIndex(view) {
    return this._views.indexOf(view);
  }
  removeView(view) {
    var _a, _b;
    if (typeof view === "number") {
      (_a = this._views[view]) == null ? void 0 : _a.removeSelf();
      this._views.splice(view, 1);
    } else {
      const index2 = this._views.indexOf(view);
      (_b = this._views[index2]) == null ? void 0 : _b.removeSelf();
      this._views.splice(index2, 1);
    }
  }
  addView(options) {
    var _a, _b, _c, _d;
    const view = new View(this);
    view.id = (_a = options.id) != null ? _a : "";
    this._views.push(view);
    this.root.add(view);
    (_b = options.layers) == null ? void 0 : _b.forEach((layerOptions) => {
      view.addLayer(layerOptions);
    });
    (_c = options.areas) == null ? void 0 : _c.forEach((areaOptions) => {
      view.addArea(areaOptions);
    });
    (_d = options.custom) == null ? void 0 : _d.forEach((customOptions) => {
      view.addCustom(customOptions);
    });
    return view;
  }
  addCustom(vIndex, options) {
    var _a;
    return (_a = this.getView(vIndex)) == null ? void 0 : _a.addCustom(options);
  }
  removeCustom(vIndex, custom) {
    var _a;
    (_a = this.getView(vIndex)) == null ? void 0 : _a.removeCustom(custom);
  }
  showView(index2) {
    const target = this.getView(index2);
    for (const view of this._views) {
      view.hidden = view !== target;
      if (view.hidden) {
        view.custom.forEach((it) => it.selected = false);
      }
    }
    return target;
  }
  showLayer(vIndex, lIndex) {
    var _a;
    return (_a = this.showView(vIndex)) == null ? void 0 : _a.showLayer(lIndex);
  }
  getMaterial(vIndex, lIndex) {
    var _a, _b;
    return (_b = (_a = this.getView(vIndex)) == null ? void 0 : _a.getLayer(lIndex)) == null ? void 0 : _b.material.image;
  }
  setMaterial(vIndex, lIndex, material) {
    const view = this.getView(vIndex);
    const layer = view == null ? void 0 : view.getLayer(lIndex);
    if (layer) {
      layer.material.image = material;
    } else if (view) {
      view.layers.forEach((layer2) => {
        layer2.material.image = material;
      });
    }
  }
  getColor(vIndex, lIndex) {
    var _a, _b;
    return (_b = (_a = this.getView(vIndex)) == null ? void 0 : _a.getLayer(lIndex)) == null ? void 0 : _b.material.color;
  }
  setColor(vIndex, lIndex, color2) {
    const view = this.getView(vIndex);
    const layer = view == null ? void 0 : view.getLayer(lIndex);
    if (layer) {
      layer.material.color = color2;
    } else if (view) {
      view.layers.forEach((layer2) => {
        layer2.material.color = color2;
      });
    }
  }
  exportConfig() {
    const backupStates = /* @__PURE__ */ new Map();
    for (const view of this._views) {
      backupStates.set(view, view.hidden);
      view.hidden = true;
      view.layers.forEach((layer) => {
        backupStates.set(layer, layer.hidden);
        layer.hidden = false;
      });
      view.areas.forEach((area) => {
        backupStates.set(area, area.selected);
        area.hidden = true;
      });
      view.custom.forEach((custom) => {
        backupStates.set(custom, custom.selected);
        custom.selected = false;
      });
    }
    const configs = this._views.map((view) => {
      view.hidden = false;
      const image = this._extractor.extract(view);
      const custom = view.custom.map((custom2) => custom2.exportConfig());
      view.hidden = true;
      return { image, custom };
    });
    for (const view of this._views) {
      view.hidden = backupStates.get(view);
      view.layers.forEach((layer) => {
        layer.hidden = backupStates.get(layer);
      });
      view.areas.forEach((area) => {
        area.hidden = backupStates.get(area);
      });
      view.custom.forEach((custom) => {
        custom.selected = backupStates.get(custom);
      });
    }
    return configs;
  }
}
function init(element, options) {
  if (typeof element === "string") {
    element = document.getElementById(element);
  }
  if (element instanceof HTMLCanvasElement) {
    const editor = new Editor(element);
    if (options) {
      editor.init(options);
    }
    return editor.start();
  }
  throw Error("Type error: element is not a canvas.");
}
var index$1 = { init };
var jszip_min = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(module, exports) {
  !function(e2) {
    module.exports = e2();
  }(function() {
    return function s(a, o, h2) {
      function u2(r2, e3) {
        if (!o[r2]) {
          if (!a[r2]) {
            var t2 = "function" == typeof commonjsRequire && commonjsRequire;
            if (!e3 && t2)
              return t2(r2, true);
            if (l2)
              return l2(r2, true);
            var n2 = new Error("Cannot find module '" + r2 + "'");
            throw n2.code = "MODULE_NOT_FOUND", n2;
          }
          var i = o[r2] = { exports: {} };
          a[r2][0].call(i.exports, function(e4) {
            var t3 = a[r2][1][e4];
            return u2(t3 || e4);
          }, i, i.exports, s, a, o, h2);
        }
        return o[r2].exports;
      }
      for (var l2 = "function" == typeof commonjsRequire && commonjsRequire, e2 = 0; e2 < h2.length; e2++)
        u2(h2[e2]);
      return u2;
    }({ 1: [function(e2, t2, r2) {
      var d2 = e2("./utils"), c2 = e2("./support"), p2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      r2.encode = function(e3) {
        for (var t3, r3, n2, i, s, a, o, h2 = [], u2 = 0, l2 = e3.length, f2 = l2, c3 = "string" !== d2.getTypeOf(e3); u2 < e3.length; )
          f2 = l2 - u2, n2 = c3 ? (t3 = e3[u2++], r3 = u2 < l2 ? e3[u2++] : 0, u2 < l2 ? e3[u2++] : 0) : (t3 = e3.charCodeAt(u2++), r3 = u2 < l2 ? e3.charCodeAt(u2++) : 0, u2 < l2 ? e3.charCodeAt(u2++) : 0), i = t3 >> 2, s = (3 & t3) << 4 | r3 >> 4, a = 1 < f2 ? (15 & r3) << 2 | n2 >> 6 : 64, o = 2 < f2 ? 63 & n2 : 64, h2.push(p2.charAt(i) + p2.charAt(s) + p2.charAt(a) + p2.charAt(o));
        return h2.join("");
      }, r2.decode = function(e3) {
        var t3, r3, n2, i, s, a, o = 0, h2 = 0, u2 = "data:";
        if (e3.substr(0, u2.length) === u2)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var l2, f2 = 3 * (e3 = e3.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (e3.charAt(e3.length - 1) === p2.charAt(64) && f2--, e3.charAt(e3.length - 2) === p2.charAt(64) && f2--, f2 % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (l2 = c2.uint8array ? new Uint8Array(0 | f2) : new Array(0 | f2); o < e3.length; )
          t3 = p2.indexOf(e3.charAt(o++)) << 2 | (i = p2.indexOf(e3.charAt(o++))) >> 4, r3 = (15 & i) << 4 | (s = p2.indexOf(e3.charAt(o++))) >> 2, n2 = (3 & s) << 6 | (a = p2.indexOf(e3.charAt(o++))), l2[h2++] = t3, 64 !== s && (l2[h2++] = r3), 64 !== a && (l2[h2++] = n2);
        return l2;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e2, t2, r2) {
      var n2 = e2("./external"), i = e2("./stream/DataWorker"), s = e2("./stream/Crc32Probe"), a = e2("./stream/DataLengthProbe");
      function o(e3, t3, r3, n3, i2) {
        this.compressedSize = e3, this.uncompressedSize = t3, this.crc32 = r3, this.compression = n3, this.compressedContent = i2;
      }
      o.prototype = { getContentWorker: function() {
        var e3 = new i(n2.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t3 = this;
        return e3.on("end", function() {
          if (this.streamInfo.data_length !== t3.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), e3;
      }, getCompressedWorker: function() {
        return new i(n2.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, o.createWorkerFrom = function(e3, t3, r3) {
        return e3.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t3.compressWorker(r3)).pipe(new a("compressedSize")).withStreamInfo("compression", t3);
      }, t2.exports = o;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e2, t2, r2) {
      var n2 = e2("./stream/GenericWorker");
      r2.STORE = { magic: "\0\0", compressWorker: function() {
        return new n2("STORE compression");
      }, uncompressWorker: function() {
        return new n2("STORE decompression");
      } }, r2.DEFLATE = e2("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e2, t2, r2) {
      var n2 = e2("./utils");
      var o = function() {
        for (var e3, t3 = [], r3 = 0; r3 < 256; r3++) {
          e3 = r3;
          for (var n3 = 0; n3 < 8; n3++)
            e3 = 1 & e3 ? 3988292384 ^ e3 >>> 1 : e3 >>> 1;
          t3[r3] = e3;
        }
        return t3;
      }();
      t2.exports = function(e3, t3) {
        return void 0 !== e3 && e3.length ? "string" !== n2.getTypeOf(e3) ? function(e4, t4, r3, n3) {
          var i = o, s = n3 + r3;
          e4 ^= -1;
          for (var a = n3; a < s; a++)
            e4 = e4 >>> 8 ^ i[255 & (e4 ^ t4[a])];
          return -1 ^ e4;
        }(0 | t3, e3, e3.length, 0) : function(e4, t4, r3, n3) {
          var i = o, s = n3 + r3;
          e4 ^= -1;
          for (var a = n3; a < s; a++)
            e4 = e4 >>> 8 ^ i[255 & (e4 ^ t4.charCodeAt(a))];
          return -1 ^ e4;
        }(0 | t3, e3, e3.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e2, t2, r2) {
      r2.base64 = false, r2.binary = false, r2.dir = false, r2.createFolders = true, r2.date = null, r2.compression = null, r2.compressionOptions = null, r2.comment = null, r2.unixPermissions = null, r2.dosPermissions = null;
    }, {}], 6: [function(e2, t2, r2) {
      var n2 = null;
      n2 = "undefined" != typeof Promise ? Promise : e2("lie"), t2.exports = { Promise: n2 };
    }, { lie: 37 }], 7: [function(e2, t2, r2) {
      var n2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e2("pako"), s = e2("./utils"), a = e2("./stream/GenericWorker"), o = n2 ? "uint8array" : "array";
      function h2(e3, t3) {
        a.call(this, "FlateWorker/" + e3), this._pako = null, this._pakoAction = e3, this._pakoOptions = t3, this.meta = {};
      }
      r2.magic = "\b\0", s.inherits(h2, a), h2.prototype.processChunk = function(e3) {
        this.meta = e3.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e3.data), false);
      }, h2.prototype.flush = function() {
        a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
      }, h2.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this._pako = null;
      }, h2.prototype._createPako = function() {
        this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
        var t3 = this;
        this._pako.onData = function(e3) {
          t3.push({ data: e3, meta: t3.meta });
        };
      }, r2.compressWorker = function(e3) {
        return new h2("Deflate", e3);
      }, r2.uncompressWorker = function() {
        return new h2("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e2, t2, r2) {
      function A2(e3, t3) {
        var r3, n3 = "";
        for (r3 = 0; r3 < t3; r3++)
          n3 += String.fromCharCode(255 & e3), e3 >>>= 8;
        return n3;
      }
      function n2(e3, t3, r3, n3, i2, s2) {
        var a, o, h2 = e3.file, u2 = e3.compression, l2 = s2 !== O2.utf8encode, f2 = I2.transformTo("string", s2(h2.name)), c2 = I2.transformTo("string", O2.utf8encode(h2.name)), d2 = h2.comment, p2 = I2.transformTo("string", s2(d2)), m2 = I2.transformTo("string", O2.utf8encode(d2)), _ = c2.length !== h2.name.length, g2 = m2.length !== d2.length, b2 = "", v2 = "", y2 = "", w2 = h2.dir, k2 = h2.date, x2 = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        t3 && !r3 || (x2.crc32 = e3.crc32, x2.compressedSize = e3.compressedSize, x2.uncompressedSize = e3.uncompressedSize);
        var S2 = 0;
        t3 && (S2 |= 8), l2 || !_ && !g2 || (S2 |= 2048);
        var z2 = 0, C2 = 0;
        w2 && (z2 |= 16), "UNIX" === i2 ? (C2 = 798, z2 |= function(e4, t4) {
          var r4 = e4;
          return e4 || (r4 = t4 ? 16893 : 33204), (65535 & r4) << 16;
        }(h2.unixPermissions, w2)) : (C2 = 20, z2 |= function(e4) {
          return 63 & (e4 || 0);
        }(h2.dosPermissions)), a = k2.getUTCHours(), a <<= 6, a |= k2.getUTCMinutes(), a <<= 5, a |= k2.getUTCSeconds() / 2, o = k2.getUTCFullYear() - 1980, o <<= 4, o |= k2.getUTCMonth() + 1, o <<= 5, o |= k2.getUTCDate(), _ && (v2 = A2(1, 1) + A2(B2(f2), 4) + c2, b2 += "up" + A2(v2.length, 2) + v2), g2 && (y2 = A2(1, 1) + A2(B2(p2), 4) + m2, b2 += "uc" + A2(y2.length, 2) + y2);
        var E2 = "";
        return E2 += "\n\0", E2 += A2(S2, 2), E2 += u2.magic, E2 += A2(a, 2), E2 += A2(o, 2), E2 += A2(x2.crc32, 4), E2 += A2(x2.compressedSize, 4), E2 += A2(x2.uncompressedSize, 4), E2 += A2(f2.length, 2), E2 += A2(b2.length, 2), { fileRecord: R2.LOCAL_FILE_HEADER + E2 + f2 + b2, dirRecord: R2.CENTRAL_FILE_HEADER + A2(C2, 2) + E2 + A2(p2.length, 2) + "\0\0\0\0" + A2(z2, 4) + A2(n3, 4) + f2 + b2 + p2 };
      }
      var I2 = e2("../utils"), i = e2("../stream/GenericWorker"), O2 = e2("../utf8"), B2 = e2("../crc32"), R2 = e2("../signature");
      function s(e3, t3, r3, n3) {
        i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t3, this.zipPlatform = r3, this.encodeFileName = n3, this.streamFiles = e3, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      I2.inherits(s, i), s.prototype.push = function(e3) {
        var t3 = e3.meta.percent || 0, r3 = this.entriesCount, n3 = this._sources.length;
        this.accumulate ? this.contentBuffer.push(e3) : (this.bytesWritten += e3.data.length, i.prototype.push.call(this, { data: e3.data, meta: { currentFile: this.currentFile, percent: r3 ? (t3 + 100 * (r3 - n3 - 1)) / r3 : 100 } }));
      }, s.prototype.openedSource = function(e3) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = e3.file.name;
        var t3 = this.streamFiles && !e3.file.dir;
        if (t3) {
          var r3 = n2(e3, t3, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: r3.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = true;
      }, s.prototype.closedSource = function(e3) {
        this.accumulate = false;
        var t3 = this.streamFiles && !e3.file.dir, r3 = n2(e3, t3, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(r3.dirRecord), t3)
          this.push({ data: function(e4) {
            return R2.DATA_DESCRIPTOR + A2(e4.crc32, 4) + A2(e4.compressedSize, 4) + A2(e4.uncompressedSize, 4);
          }(e3), meta: { percent: 100 } });
        else
          for (this.push({ data: r3.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, s.prototype.flush = function() {
        for (var e3 = this.bytesWritten, t3 = 0; t3 < this.dirRecords.length; t3++)
          this.push({ data: this.dirRecords[t3], meta: { percent: 100 } });
        var r3 = this.bytesWritten - e3, n3 = function(e4, t4, r4, n4, i2) {
          var s2 = I2.transformTo("string", i2(n4));
          return R2.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A2(e4, 2) + A2(e4, 2) + A2(t4, 4) + A2(r4, 4) + A2(s2.length, 2) + s2;
        }(this.dirRecords.length, r3, e3, this.zipComment, this.encodeFileName);
        this.push({ data: n3, meta: { percent: 100 } });
      }, s.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, s.prototype.registerPrevious = function(e3) {
        this._sources.push(e3);
        var t3 = this;
        return e3.on("data", function(e4) {
          t3.processChunk(e4);
        }), e3.on("end", function() {
          t3.closedSource(t3.previous.streamInfo), t3._sources.length ? t3.prepareNextSource() : t3.end();
        }), e3.on("error", function(e4) {
          t3.error(e4);
        }), this;
      }, s.prototype.resume = function() {
        return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
      }, s.prototype.error = function(e3) {
        var t3 = this._sources;
        if (!i.prototype.error.call(this, e3))
          return false;
        for (var r3 = 0; r3 < t3.length; r3++)
          try {
            t3[r3].error(e3);
          } catch (e4) {
          }
        return true;
      }, s.prototype.lock = function() {
        i.prototype.lock.call(this);
        for (var e3 = this._sources, t3 = 0; t3 < e3.length; t3++)
          e3[t3].lock();
      }, t2.exports = s;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e2, t2, r2) {
      var u2 = e2("../compressions"), n2 = e2("./ZipFileWorker");
      r2.generateWorker = function(e3, a, t3) {
        var o = new n2(a.streamFiles, t3, a.platform, a.encodeFileName), h2 = 0;
        try {
          e3.forEach(function(e4, t4) {
            h2++;
            var r3 = function(e5, t5) {
              var r4 = e5 || t5, n4 = u2[r4];
              if (!n4)
                throw new Error(r4 + " is not a valid compression method !");
              return n4;
            }(t4.options.compression, a.compression), n3 = t4.options.compressionOptions || a.compressionOptions || {}, i = t4.dir, s = t4.date;
            t4._compressWorker(r3, n3).withStreamInfo("file", { name: e4, dir: i, date: s, comment: t4.comment || "", unixPermissions: t4.unixPermissions, dosPermissions: t4.dosPermissions }).pipe(o);
          }), o.entriesCount = h2;
        } catch (e4) {
          o.error(e4);
        }
        return o;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e2, t2, r2) {
      function n2() {
        if (!(this instanceof n2))
          return new n2();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var e3 = new n2();
          for (var t3 in this)
            "function" != typeof this[t3] && (e3[t3] = this[t3]);
          return e3;
        };
      }
      (n2.prototype = e2("./object")).loadAsync = e2("./load"), n2.support = e2("./support"), n2.defaults = e2("./defaults"), n2.version = "3.10.1", n2.loadAsync = function(e3, t3) {
        return new n2().loadAsync(e3, t3);
      }, n2.external = e2("./external"), t2.exports = n2;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e2, t2, r2) {
      var u2 = e2("./utils"), i = e2("./external"), n2 = e2("./utf8"), s = e2("./zipEntries"), a = e2("./stream/Crc32Probe"), l2 = e2("./nodejsUtils");
      function f2(n3) {
        return new i.Promise(function(e3, t3) {
          var r3 = n3.decompressed.getContentWorker().pipe(new a());
          r3.on("error", function(e4) {
            t3(e4);
          }).on("end", function() {
            r3.streamInfo.crc32 !== n3.decompressed.crc32 ? t3(new Error("Corrupted zip : CRC32 mismatch")) : e3();
          }).resume();
        });
      }
      t2.exports = function(e3, o) {
        var h2 = this;
        return o = u2.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n2.utf8decode }), l2.isNode && l2.isStream(e3) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u2.prepareContent("the loaded zip file", e3, true, o.optimizedBinaryString, o.base64).then(function(e4) {
          var t3 = new s(o);
          return t3.load(e4), t3;
        }).then(function(e4) {
          var t3 = [i.Promise.resolve(e4)], r3 = e4.files;
          if (o.checkCRC32)
            for (var n3 = 0; n3 < r3.length; n3++)
              t3.push(f2(r3[n3]));
          return i.Promise.all(t3);
        }).then(function(e4) {
          for (var t3 = e4.shift(), r3 = t3.files, n3 = 0; n3 < r3.length; n3++) {
            var i2 = r3[n3], s2 = i2.fileNameStr, a2 = u2.resolve(i2.fileNameStr);
            h2.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h2.file(a2).unsafeOriginalName = s2);
          }
          return t3.zipComment.length && (h2.comment = t3.zipComment), h2;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e2, t2, r2) {
      var n2 = e2("../utils"), i = e2("../stream/GenericWorker");
      function s(e3, t3) {
        i.call(this, "Nodejs stream input adapter for " + e3), this._upstreamEnded = false, this._bindStream(t3);
      }
      n2.inherits(s, i), s.prototype._bindStream = function(e3) {
        var t3 = this;
        (this._stream = e3).pause(), e3.on("data", function(e4) {
          t3.push({ data: e4, meta: { percent: 0 } });
        }).on("error", function(e4) {
          t3.isPaused ? this.generatedError = e4 : t3.error(e4);
        }).on("end", function() {
          t3.isPaused ? t3._upstreamEnded = true : t3.end();
        });
      }, s.prototype.pause = function() {
        return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
      }, s.prototype.resume = function() {
        return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
      }, t2.exports = s;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e2, t2, r2) {
      var i = e2("readable-stream").Readable;
      function n2(e3, t3, r3) {
        i.call(this, t3), this._helper = e3;
        var n3 = this;
        e3.on("data", function(e4, t4) {
          n3.push(e4) || n3._helper.pause(), r3 && r3(t4);
        }).on("error", function(e4) {
          n3.emit("error", e4);
        }).on("end", function() {
          n3.push(null);
        });
      }
      e2("../utils").inherits(n2, i), n2.prototype._read = function() {
        this._helper.resume();
      }, t2.exports = n2;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e2, t2, r2) {
      t2.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e3, t3) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(e3, t3);
        if ("number" == typeof e3)
          throw new Error('The "data" argument must not be a number');
        return new Buffer(e3, t3);
      }, allocBuffer: function(e3) {
        if (Buffer.alloc)
          return Buffer.alloc(e3);
        var t3 = new Buffer(e3);
        return t3.fill(0), t3;
      }, isBuffer: function(e3) {
        return Buffer.isBuffer(e3);
      }, isStream: function(e3) {
        return e3 && "function" == typeof e3.on && "function" == typeof e3.pause && "function" == typeof e3.resume;
      } };
    }, {}], 15: [function(e2, t2, r2) {
      function s(e3, t3, r3) {
        var n3, i2 = u2.getTypeOf(t3), s2 = u2.extend(r3 || {}, f2);
        s2.date = s2.date || new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e3 = g2(e3)), s2.createFolders && (n3 = _(e3)) && b2.call(this, n3, true);
        var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
        r3 && void 0 !== r3.binary || (s2.binary = !a2), (t3 instanceof c2 && 0 === t3.uncompressedSize || s2.dir || !t3 || 0 === t3.length) && (s2.base64 = false, s2.binary = true, t3 = "", s2.compression = "STORE", i2 = "string");
        var o2 = null;
        o2 = t3 instanceof c2 || t3 instanceof l2 ? t3 : p2.isNode && p2.isStream(t3) ? new m2(e3, t3) : u2.prepareContent(e3, t3, s2.binary, s2.optimizedBinaryString, s2.base64);
        var h3 = new d2(e3, o2, s2);
        this.files[e3] = h3;
      }
      var i = e2("./utf8"), u2 = e2("./utils"), l2 = e2("./stream/GenericWorker"), a = e2("./stream/StreamHelper"), f2 = e2("./defaults"), c2 = e2("./compressedObject"), d2 = e2("./zipObject"), o = e2("./generate"), p2 = e2("./nodejsUtils"), m2 = e2("./nodejs/NodejsStreamInputAdapter"), _ = function(e3) {
        "/" === e3.slice(-1) && (e3 = e3.substring(0, e3.length - 1));
        var t3 = e3.lastIndexOf("/");
        return 0 < t3 ? e3.substring(0, t3) : "";
      }, g2 = function(e3) {
        return "/" !== e3.slice(-1) && (e3 += "/"), e3;
      }, b2 = function(e3, t3) {
        return t3 = void 0 !== t3 ? t3 : f2.createFolders, e3 = g2(e3), this.files[e3] || s.call(this, e3, null, { dir: true, createFolders: t3 }), this.files[e3];
      };
      function h2(e3) {
        return "[object RegExp]" === Object.prototype.toString.call(e3);
      }
      var n2 = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(e3) {
        var t3, r3, n3;
        for (t3 in this.files)
          n3 = this.files[t3], (r3 = t3.slice(this.root.length, t3.length)) && t3.slice(0, this.root.length) === this.root && e3(r3, n3);
      }, filter: function(r3) {
        var n3 = [];
        return this.forEach(function(e3, t3) {
          r3(e3, t3) && n3.push(t3);
        }), n3;
      }, file: function(e3, t3, r3) {
        if (1 !== arguments.length)
          return e3 = this.root + e3, s.call(this, e3, t3, r3), this;
        if (h2(e3)) {
          var n3 = e3;
          return this.filter(function(e4, t4) {
            return !t4.dir && n3.test(e4);
          });
        }
        var i2 = this.files[this.root + e3];
        return i2 && !i2.dir ? i2 : null;
      }, folder: function(r3) {
        if (!r3)
          return this;
        if (h2(r3))
          return this.filter(function(e4, t4) {
            return t4.dir && r3.test(e4);
          });
        var e3 = this.root + r3, t3 = b2.call(this, e3), n3 = this.clone();
        return n3.root = t3.name, n3;
      }, remove: function(r3) {
        r3 = this.root + r3;
        var e3 = this.files[r3];
        if (e3 || ("/" !== r3.slice(-1) && (r3 += "/"), e3 = this.files[r3]), e3 && !e3.dir)
          delete this.files[r3];
        else
          for (var t3 = this.filter(function(e4, t4) {
            return t4.name.slice(0, r3.length) === r3;
          }), n3 = 0; n3 < t3.length; n3++)
            delete this.files[t3[n3].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(e3) {
        var t3, r3 = {};
        try {
          if ((r3 = u2.extend(e3 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r3.type.toLowerCase(), r3.compression = r3.compression.toUpperCase(), "binarystring" === r3.type && (r3.type = "string"), !r3.type)
            throw new Error("No output type specified.");
          u2.checkSupport(r3.type), "darwin" !== r3.platform && "freebsd" !== r3.platform && "linux" !== r3.platform && "sunos" !== r3.platform || (r3.platform = "UNIX"), "win32" === r3.platform && (r3.platform = "DOS");
          var n3 = r3.comment || this.comment || "";
          t3 = o.generateWorker(this, r3, n3);
        } catch (e4) {
          (t3 = new l2("error")).error(e4);
        }
        return new a(t3, r3.type || "string", r3.mimeType);
      }, generateAsync: function(e3, t3) {
        return this.generateInternalStream(e3).accumulate(t3);
      }, generateNodeStream: function(e3, t3) {
        return (e3 = e3 || {}).type || (e3.type = "nodebuffer"), this.generateInternalStream(e3).toNodejsStream(t3);
      } };
      t2.exports = n2;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e2, t2, r2) {
      t2.exports = e2("stream");
    }, { stream: void 0 }], 17: [function(e2, t2, r2) {
      var n2 = e2("./DataReader");
      function i(e3) {
        n2.call(this, e3);
        for (var t3 = 0; t3 < this.data.length; t3++)
          e3[t3] = 255 & e3[t3];
      }
      e2("../utils").inherits(i, n2), i.prototype.byteAt = function(e3) {
        return this.data[this.zero + e3];
      }, i.prototype.lastIndexOfSignature = function(e3) {
        for (var t3 = e3.charCodeAt(0), r3 = e3.charCodeAt(1), n3 = e3.charCodeAt(2), i2 = e3.charCodeAt(3), s = this.length - 4; 0 <= s; --s)
          if (this.data[s] === t3 && this.data[s + 1] === r3 && this.data[s + 2] === n3 && this.data[s + 3] === i2)
            return s - this.zero;
        return -1;
      }, i.prototype.readAndCheckSignature = function(e3) {
        var t3 = e3.charCodeAt(0), r3 = e3.charCodeAt(1), n3 = e3.charCodeAt(2), i2 = e3.charCodeAt(3), s = this.readData(4);
        return t3 === s[0] && r3 === s[1] && n3 === s[2] && i2 === s[3];
      }, i.prototype.readData = function(e3) {
        if (this.checkOffset(e3), 0 === e3)
          return [];
        var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
        return this.index += e3, t3;
      }, t2.exports = i;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e2, t2, r2) {
      var n2 = e2("../utils");
      function i(e3) {
        this.data = e3, this.length = e3.length, this.index = 0, this.zero = 0;
      }
      i.prototype = { checkOffset: function(e3) {
        this.checkIndex(this.index + e3);
      }, checkIndex: function(e3) {
        if (this.length < this.zero + e3 || e3 < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e3 + "). Corrupted zip ?");
      }, setIndex: function(e3) {
        this.checkIndex(e3), this.index = e3;
      }, skip: function(e3) {
        this.setIndex(this.index + e3);
      }, byteAt: function() {
      }, readInt: function(e3) {
        var t3, r3 = 0;
        for (this.checkOffset(e3), t3 = this.index + e3 - 1; t3 >= this.index; t3--)
          r3 = (r3 << 8) + this.byteAt(t3);
        return this.index += e3, r3;
      }, readString: function(e3) {
        return n2.transformTo("string", this.readData(e3));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var e3 = this.readInt(4);
        return new Date(Date.UTC(1980 + (e3 >> 25 & 127), (e3 >> 21 & 15) - 1, e3 >> 16 & 31, e3 >> 11 & 31, e3 >> 5 & 63, (31 & e3) << 1));
      } }, t2.exports = i;
    }, { "../utils": 32 }], 19: [function(e2, t2, r2) {
      var n2 = e2("./Uint8ArrayReader");
      function i(e3) {
        n2.call(this, e3);
      }
      e2("../utils").inherits(i, n2), i.prototype.readData = function(e3) {
        this.checkOffset(e3);
        var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
        return this.index += e3, t3;
      }, t2.exports = i;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e2, t2, r2) {
      var n2 = e2("./DataReader");
      function i(e3) {
        n2.call(this, e3);
      }
      e2("../utils").inherits(i, n2), i.prototype.byteAt = function(e3) {
        return this.data.charCodeAt(this.zero + e3);
      }, i.prototype.lastIndexOfSignature = function(e3) {
        return this.data.lastIndexOf(e3) - this.zero;
      }, i.prototype.readAndCheckSignature = function(e3) {
        return e3 === this.readData(4);
      }, i.prototype.readData = function(e3) {
        this.checkOffset(e3);
        var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
        return this.index += e3, t3;
      }, t2.exports = i;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e2, t2, r2) {
      var n2 = e2("./ArrayReader");
      function i(e3) {
        n2.call(this, e3);
      }
      e2("../utils").inherits(i, n2), i.prototype.readData = function(e3) {
        if (this.checkOffset(e3), 0 === e3)
          return new Uint8Array(0);
        var t3 = this.data.subarray(this.zero + this.index, this.zero + this.index + e3);
        return this.index += e3, t3;
      }, t2.exports = i;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e2, t2, r2) {
      var n2 = e2("../utils"), i = e2("../support"), s = e2("./ArrayReader"), a = e2("./StringReader"), o = e2("./NodeBufferReader"), h2 = e2("./Uint8ArrayReader");
      t2.exports = function(e3) {
        var t3 = n2.getTypeOf(e3);
        return n2.checkSupport(t3), "string" !== t3 || i.uint8array ? "nodebuffer" === t3 ? new o(e3) : i.uint8array ? new h2(n2.transformTo("uint8array", e3)) : new s(n2.transformTo("array", e3)) : new a(e3);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e2, t2, r2) {
      r2.LOCAL_FILE_HEADER = "PK", r2.CENTRAL_FILE_HEADER = "PK", r2.CENTRAL_DIRECTORY_END = "PK", r2.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r2.ZIP64_CENTRAL_DIRECTORY_END = "PK", r2.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e2, t2, r2) {
      var n2 = e2("./GenericWorker"), i = e2("../utils");
      function s(e3) {
        n2.call(this, "ConvertWorker to " + e3), this.destType = e3;
      }
      i.inherits(s, n2), s.prototype.processChunk = function(e3) {
        this.push({ data: i.transformTo(this.destType, e3.data), meta: e3.meta });
      }, t2.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e2, t2, r2) {
      var n2 = e2("./GenericWorker"), i = e2("../crc32");
      function s() {
        n2.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e2("../utils").inherits(s, n2), s.prototype.processChunk = function(e3) {
        this.streamInfo.crc32 = i(e3.data, this.streamInfo.crc32 || 0), this.push(e3);
      }, t2.exports = s;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e2, t2, r2) {
      var n2 = e2("../utils"), i = e2("./GenericWorker");
      function s(e3) {
        i.call(this, "DataLengthProbe for " + e3), this.propName = e3, this.withStreamInfo(e3, 0);
      }
      n2.inherits(s, i), s.prototype.processChunk = function(e3) {
        if (e3) {
          var t3 = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = t3 + e3.data.length;
        }
        i.prototype.processChunk.call(this, e3);
      }, t2.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e2, t2, r2) {
      var n2 = e2("../utils"), i = e2("./GenericWorker");
      function s(e3) {
        i.call(this, "DataWorker");
        var t3 = this;
        this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e3.then(function(e4) {
          t3.dataIsReady = true, t3.data = e4, t3.max = e4 && e4.length || 0, t3.type = n2.getTypeOf(e4), t3.isPaused || t3._tickAndRepeat();
        }, function(e4) {
          t3.error(e4);
        });
      }
      n2.inherits(s, i), s.prototype.cleanUp = function() {
        i.prototype.cleanUp.call(this), this.data = null;
      }, s.prototype.resume = function() {
        return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n2.delay(this._tickAndRepeat, [], this)), true);
      }, s.prototype._tickAndRepeat = function() {
        this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n2.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
      }, s.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return false;
        var e3 = null, t3 = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            e3 = this.data.substring(this.index, t3);
            break;
          case "uint8array":
            e3 = this.data.subarray(this.index, t3);
            break;
          case "array":
          case "nodebuffer":
            e3 = this.data.slice(this.index, t3);
        }
        return this.index = t3, this.push({ data: e3, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, t2.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e2, t2, r2) {
      function n2(e3) {
        this.name = e3 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      n2.prototype = { push: function(e3) {
        this.emit("data", e3);
      }, end: function() {
        if (this.isFinished)
          return false;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = true;
        } catch (e3) {
          this.emit("error", e3);
        }
        return true;
      }, error: function(e3) {
        return !this.isFinished && (this.isPaused ? this.generatedError = e3 : (this.isFinished = true, this.emit("error", e3), this.previous && this.previous.error(e3), this.cleanUp()), true);
      }, on: function(e3, t3) {
        return this._listeners[e3].push(t3), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(e3, t3) {
        if (this._listeners[e3])
          for (var r3 = 0; r3 < this._listeners[e3].length; r3++)
            this._listeners[e3][r3].call(this, t3);
      }, pipe: function(e3) {
        return e3.registerPrevious(this);
      }, registerPrevious: function(e3) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = e3.streamInfo, this.mergeStreamInfo(), this.previous = e3;
        var t3 = this;
        return e3.on("data", function(e4) {
          t3.processChunk(e4);
        }), e3.on("end", function() {
          t3.end();
        }), e3.on("error", function(e4) {
          t3.error(e4);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return false;
        var e3 = this.isPaused = false;
        return this.generatedError && (this.error(this.generatedError), e3 = true), this.previous && this.previous.resume(), !e3;
      }, flush: function() {
      }, processChunk: function(e3) {
        this.push(e3);
      }, withStreamInfo: function(e3, t3) {
        return this.extraStreamInfo[e3] = t3, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var e3 in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e3) && (this.streamInfo[e3] = this.extraStreamInfo[e3]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = true, this.previous && this.previous.lock();
      }, toString: function() {
        var e3 = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + e3 : e3;
      } }, t2.exports = n2;
    }, {}], 29: [function(e2, t2, r2) {
      var h2 = e2("../utils"), i = e2("./ConvertWorker"), s = e2("./GenericWorker"), u2 = e2("../base64"), n2 = e2("../support"), a = e2("../external"), o = null;
      if (n2.nodestream)
        try {
          o = e2("../nodejs/NodejsStreamOutputAdapter");
        } catch (e3) {
        }
      function l2(e3, o2) {
        return new a.Promise(function(t3, r3) {
          var n3 = [], i2 = e3._internalType, s2 = e3._outputType, a2 = e3._mimeType;
          e3.on("data", function(e4, t4) {
            n3.push(e4), o2 && o2(t4);
          }).on("error", function(e4) {
            n3 = [], r3(e4);
          }).on("end", function() {
            try {
              var e4 = function(e5, t4, r4) {
                switch (e5) {
                  case "blob":
                    return h2.newBlob(h2.transformTo("arraybuffer", t4), r4);
                  case "base64":
                    return u2.encode(t4);
                  default:
                    return h2.transformTo(e5, t4);
                }
              }(s2, function(e5, t4) {
                var r4, n4 = 0, i3 = null, s3 = 0;
                for (r4 = 0; r4 < t4.length; r4++)
                  s3 += t4[r4].length;
                switch (e5) {
                  case "string":
                    return t4.join("");
                  case "array":
                    return Array.prototype.concat.apply([], t4);
                  case "uint8array":
                    for (i3 = new Uint8Array(s3), r4 = 0; r4 < t4.length; r4++)
                      i3.set(t4[r4], n4), n4 += t4[r4].length;
                    return i3;
                  case "nodebuffer":
                    return Buffer.concat(t4);
                  default:
                    throw new Error("concat : unsupported type '" + e5 + "'");
                }
              }(i2, n3), a2);
              t3(e4);
            } catch (e5) {
              r3(e5);
            }
            n3 = [];
          }).resume();
        });
      }
      function f2(e3, t3, r3) {
        var n3 = t3;
        switch (t3) {
          case "blob":
          case "arraybuffer":
            n3 = "uint8array";
            break;
          case "base64":
            n3 = "string";
        }
        try {
          this._internalType = n3, this._outputType = t3, this._mimeType = r3, h2.checkSupport(n3), this._worker = e3.pipe(new i(n3)), e3.lock();
        } catch (e4) {
          this._worker = new s("error"), this._worker.error(e4);
        }
      }
      f2.prototype = { accumulate: function(e3) {
        return l2(this, e3);
      }, on: function(e3, t3) {
        var r3 = this;
        return "data" === e3 ? this._worker.on(e3, function(e4) {
          t3.call(r3, e4.data, e4.meta);
        }) : this._worker.on(e3, function() {
          h2.delay(t3, arguments, r3);
        }), this;
      }, resume: function() {
        return h2.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(e3) {
        if (h2.checkSupport("nodestream"), "nodebuffer" !== this._outputType)
          throw new Error(this._outputType + " is not supported by this method");
        return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e3);
      } }, t2.exports = f2;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e2, t2, r2) {
      if (r2.base64 = true, r2.array = true, r2.string = true, r2.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r2.nodebuffer = "undefined" != typeof Buffer, r2.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer)
        r2.blob = false;
      else {
        var n2 = new ArrayBuffer(0);
        try {
          r2.blob = 0 === new Blob([n2], { type: "application/zip" }).size;
        } catch (e3) {
          try {
            var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            i.append(n2), r2.blob = 0 === i.getBlob("application/zip").size;
          } catch (e4) {
            r2.blob = false;
          }
        }
      }
      try {
        r2.nodestream = !!e2("readable-stream").Readable;
      } catch (e3) {
        r2.nodestream = false;
      }
    }, { "readable-stream": 16 }], 31: [function(e2, t2, s) {
      for (var o = e2("./utils"), h2 = e2("./support"), r2 = e2("./nodejsUtils"), n2 = e2("./stream/GenericWorker"), u2 = new Array(256), i = 0; i < 256; i++)
        u2[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
      u2[254] = u2[254] = 1;
      function a() {
        n2.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function l2() {
        n2.call(this, "utf-8 encode");
      }
      s.utf8encode = function(e3) {
        return h2.nodebuffer ? r2.newBufferFrom(e3, "utf-8") : function(e4) {
          var t3, r3, n3, i2, s2, a2 = e4.length, o2 = 0;
          for (i2 = 0; i2 < a2; i2++)
            55296 == (64512 & (r3 = e4.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n3 = e4.charCodeAt(i2 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i2++), o2 += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
          for (t3 = h2.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++)
            55296 == (64512 & (r3 = e4.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n3 = e4.charCodeAt(i2 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i2++), r3 < 128 ? t3[s2++] = r3 : (r3 < 2048 ? t3[s2++] = 192 | r3 >>> 6 : (r3 < 65536 ? t3[s2++] = 224 | r3 >>> 12 : (t3[s2++] = 240 | r3 >>> 18, t3[s2++] = 128 | r3 >>> 12 & 63), t3[s2++] = 128 | r3 >>> 6 & 63), t3[s2++] = 128 | 63 & r3);
          return t3;
        }(e3);
      }, s.utf8decode = function(e3) {
        return h2.nodebuffer ? o.transformTo("nodebuffer", e3).toString("utf-8") : function(e4) {
          var t3, r3, n3, i2, s2 = e4.length, a2 = new Array(2 * s2);
          for (t3 = r3 = 0; t3 < s2; )
            if ((n3 = e4[t3++]) < 128)
              a2[r3++] = n3;
            else if (4 < (i2 = u2[n3]))
              a2[r3++] = 65533, t3 += i2 - 1;
            else {
              for (n3 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t3 < s2; )
                n3 = n3 << 6 | 63 & e4[t3++], i2--;
              1 < i2 ? a2[r3++] = 65533 : n3 < 65536 ? a2[r3++] = n3 : (n3 -= 65536, a2[r3++] = 55296 | n3 >> 10 & 1023, a2[r3++] = 56320 | 1023 & n3);
            }
          return a2.length !== r3 && (a2.subarray ? a2 = a2.subarray(0, r3) : a2.length = r3), o.applyFromCharCode(a2);
        }(e3 = o.transformTo(h2.uint8array ? "uint8array" : "array", e3));
      }, o.inherits(a, n2), a.prototype.processChunk = function(e3) {
        var t3 = o.transformTo(h2.uint8array ? "uint8array" : "array", e3.data);
        if (this.leftOver && this.leftOver.length) {
          if (h2.uint8array) {
            var r3 = t3;
            (t3 = new Uint8Array(r3.length + this.leftOver.length)).set(this.leftOver, 0), t3.set(r3, this.leftOver.length);
          } else
            t3 = this.leftOver.concat(t3);
          this.leftOver = null;
        }
        var n3 = function(e4, t4) {
          var r4;
          for ((t4 = t4 || e4.length) > e4.length && (t4 = e4.length), r4 = t4 - 1; 0 <= r4 && 128 == (192 & e4[r4]); )
            r4--;
          return r4 < 0 ? t4 : 0 === r4 ? t4 : r4 + u2[e4[r4]] > t4 ? r4 : t4;
        }(t3), i2 = t3;
        n3 !== t3.length && (h2.uint8array ? (i2 = t3.subarray(0, n3), this.leftOver = t3.subarray(n3, t3.length)) : (i2 = t3.slice(0, n3), this.leftOver = t3.slice(n3, t3.length))), this.push({ data: s.utf8decode(i2), meta: e3.meta });
      }, a.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, s.Utf8DecodeWorker = a, o.inherits(l2, n2), l2.prototype.processChunk = function(e3) {
        this.push({ data: s.utf8encode(e3.data), meta: e3.meta });
      }, s.Utf8EncodeWorker = l2;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e2, t2, a) {
      var o = e2("./support"), h2 = e2("./base64"), r2 = e2("./nodejsUtils"), u2 = e2("./external");
      function n2(e3) {
        return e3;
      }
      function l2(e3, t3) {
        for (var r3 = 0; r3 < e3.length; ++r3)
          t3[r3] = 255 & e3.charCodeAt(r3);
        return t3;
      }
      e2("setimmediate"), a.newBlob = function(t3, r3) {
        a.checkSupport("blob");
        try {
          return new Blob([t3], { type: r3 });
        } catch (e3) {
          try {
            var n3 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return n3.append(t3), n3.getBlob(r3);
          } catch (e4) {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var i = { stringifyByChunk: function(e3, t3, r3) {
        var n3 = [], i2 = 0, s2 = e3.length;
        if (s2 <= r3)
          return String.fromCharCode.apply(null, e3);
        for (; i2 < s2; )
          "array" === t3 || "nodebuffer" === t3 ? n3.push(String.fromCharCode.apply(null, e3.slice(i2, Math.min(i2 + r3, s2)))) : n3.push(String.fromCharCode.apply(null, e3.subarray(i2, Math.min(i2 + r3, s2)))), i2 += r3;
        return n3.join("");
      }, stringifyByChar: function(e3) {
        for (var t3 = "", r3 = 0; r3 < e3.length; r3++)
          t3 += String.fromCharCode(e3[r3]);
        return t3;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
        } catch (e3) {
          return false;
        }
      }(), nodebuffer: function() {
        try {
          return o.nodebuffer && 1 === String.fromCharCode.apply(null, r2.allocBuffer(1)).length;
        } catch (e3) {
          return false;
        }
      }() } };
      function s(e3) {
        var t3 = 65536, r3 = a.getTypeOf(e3), n3 = true;
        if ("uint8array" === r3 ? n3 = i.applyCanBeUsed.uint8array : "nodebuffer" === r3 && (n3 = i.applyCanBeUsed.nodebuffer), n3)
          for (; 1 < t3; )
            try {
              return i.stringifyByChunk(e3, r3, t3);
            } catch (e4) {
              t3 = Math.floor(t3 / 2);
            }
        return i.stringifyByChar(e3);
      }
      function f2(e3, t3) {
        for (var r3 = 0; r3 < e3.length; r3++)
          t3[r3] = e3[r3];
        return t3;
      }
      a.applyFromCharCode = s;
      var c2 = {};
      c2.string = { string: n2, array: function(e3) {
        return l2(e3, new Array(e3.length));
      }, arraybuffer: function(e3) {
        return c2.string.uint8array(e3).buffer;
      }, uint8array: function(e3) {
        return l2(e3, new Uint8Array(e3.length));
      }, nodebuffer: function(e3) {
        return l2(e3, r2.allocBuffer(e3.length));
      } }, c2.array = { string: s, array: n2, arraybuffer: function(e3) {
        return new Uint8Array(e3).buffer;
      }, uint8array: function(e3) {
        return new Uint8Array(e3);
      }, nodebuffer: function(e3) {
        return r2.newBufferFrom(e3);
      } }, c2.arraybuffer = { string: function(e3) {
        return s(new Uint8Array(e3));
      }, array: function(e3) {
        return f2(new Uint8Array(e3), new Array(e3.byteLength));
      }, arraybuffer: n2, uint8array: function(e3) {
        return new Uint8Array(e3);
      }, nodebuffer: function(e3) {
        return r2.newBufferFrom(new Uint8Array(e3));
      } }, c2.uint8array = { string: s, array: function(e3) {
        return f2(e3, new Array(e3.length));
      }, arraybuffer: function(e3) {
        return e3.buffer;
      }, uint8array: n2, nodebuffer: function(e3) {
        return r2.newBufferFrom(e3);
      } }, c2.nodebuffer = { string: s, array: function(e3) {
        return f2(e3, new Array(e3.length));
      }, arraybuffer: function(e3) {
        return c2.nodebuffer.uint8array(e3).buffer;
      }, uint8array: function(e3) {
        return f2(e3, new Uint8Array(e3.length));
      }, nodebuffer: n2 }, a.transformTo = function(e3, t3) {
        if (t3 = t3 || "", !e3)
          return t3;
        a.checkSupport(e3);
        var r3 = a.getTypeOf(t3);
        return c2[r3][e3](t3);
      }, a.resolve = function(e3) {
        for (var t3 = e3.split("/"), r3 = [], n3 = 0; n3 < t3.length; n3++) {
          var i2 = t3[n3];
          "." === i2 || "" === i2 && 0 !== n3 && n3 !== t3.length - 1 || (".." === i2 ? r3.pop() : r3.push(i2));
        }
        return r3.join("/");
      }, a.getTypeOf = function(e3) {
        return "string" == typeof e3 ? "string" : "[object Array]" === Object.prototype.toString.call(e3) ? "array" : o.nodebuffer && r2.isBuffer(e3) ? "nodebuffer" : o.uint8array && e3 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e3 instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, a.checkSupport = function(e3) {
        if (!o[e3.toLowerCase()])
          throw new Error(e3 + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e3) {
        var t3, r3, n3 = "";
        for (r3 = 0; r3 < (e3 || "").length; r3++)
          n3 += "\\x" + ((t3 = e3.charCodeAt(r3)) < 16 ? "0" : "") + t3.toString(16).toUpperCase();
        return n3;
      }, a.delay = function(e3, t3, r3) {
        setImmediate(function() {
          e3.apply(r3 || null, t3 || []);
        });
      }, a.inherits = function(e3, t3) {
        function r3() {
        }
        r3.prototype = t3.prototype, e3.prototype = new r3();
      }, a.extend = function() {
        var e3, t3, r3 = {};
        for (e3 = 0; e3 < arguments.length; e3++)
          for (t3 in arguments[e3])
            Object.prototype.hasOwnProperty.call(arguments[e3], t3) && void 0 === r3[t3] && (r3[t3] = arguments[e3][t3]);
        return r3;
      }, a.prepareContent = function(r3, e3, n3, i2, s2) {
        return u2.Promise.resolve(e3).then(function(n4) {
          return o.blob && (n4 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n4))) && "undefined" != typeof FileReader ? new u2.Promise(function(t3, r4) {
            var e4 = new FileReader();
            e4.onload = function(e5) {
              t3(e5.target.result);
            }, e4.onerror = function(e5) {
              r4(e5.target.error);
            }, e4.readAsArrayBuffer(n4);
          }) : n4;
        }).then(function(e4) {
          var t3 = a.getTypeOf(e4);
          return t3 ? ("arraybuffer" === t3 ? e4 = a.transformTo("uint8array", e4) : "string" === t3 && (s2 ? e4 = h2.decode(e4) : n3 && true !== i2 && (e4 = function(e5) {
            return l2(e5, o.uint8array ? new Uint8Array(e5.length) : new Array(e5.length));
          }(e4))), e4) : u2.Promise.reject(new Error("Can't read the data of '" + r3 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e2, t2, r2) {
      var n2 = e2("./reader/readerFor"), i = e2("./utils"), s = e2("./signature"), a = e2("./zipEntry"), o = e2("./support");
      function h2(e3) {
        this.files = [], this.loadOptions = e3;
      }
      h2.prototype = { checkSignature: function(e3) {
        if (!this.reader.readAndCheckSignature(e3)) {
          this.reader.index -= 4;
          var t3 = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t3) + ", expected " + i.pretty(e3) + ")");
        }
      }, isSignature: function(e3, t3) {
        var r3 = this.reader.index;
        this.reader.setIndex(e3);
        var n3 = this.reader.readString(4) === t3;
        return this.reader.setIndex(r3), n3;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var e3 = this.reader.readData(this.zipCommentLength), t3 = o.uint8array ? "uint8array" : "array", r3 = i.transformTo(t3, e3);
        this.zipComment = this.loadOptions.decodeFileName(r3);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var e3, t3, r3, n3 = this.zip64EndOfCentralSize - 44; 0 < n3; )
          e3 = this.reader.readInt(2), t3 = this.reader.readInt(4), r3 = this.reader.readData(t3), this.zip64ExtensibleData[e3] = { id: e3, length: t3, value: r3 };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var e3, t3;
        for (e3 = 0; e3 < this.files.length; e3++)
          t3 = this.files[e3], this.reader.setIndex(t3.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t3.readLocalPart(this.reader), t3.handleUTF8(), t3.processAttributes();
      }, readCentralDir: function() {
        var e3;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); )
          (e3 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e3);
        if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var e3 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
        if (e3 < 0)
          throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
        this.reader.setIndex(e3);
        var t3 = e3;
        if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
          if (this.zip64 = true, (e3 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(e3), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var r3 = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (r3 += 20, r3 += 12 + this.zip64EndOfCentralSize);
        var n3 = t3 - r3;
        if (0 < n3)
          this.isSignature(t3, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n3);
        else if (n3 < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(n3) + " bytes.");
      }, prepareReader: function(e3) {
        this.reader = n2(e3);
      }, load: function(e3) {
        this.prepareReader(e3), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, t2.exports = h2;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e2, t2, r2) {
      var n2 = e2("./reader/readerFor"), s = e2("./utils"), i = e2("./compressedObject"), a = e2("./crc32"), o = e2("./utf8"), h2 = e2("./compressions"), u2 = e2("./support");
      function l2(e3, t3) {
        this.options = e3, this.loadOptions = t3;
      }
      l2.prototype = { isEncrypted: function() {
        return 1 == (1 & this.bitFlag);
      }, useUTF8: function() {
        return 2048 == (2048 & this.bitFlag);
      }, readLocalPart: function(e3) {
        var t3, r3;
        if (e3.skip(22), this.fileNameLength = e3.readInt(2), r3 = e3.readInt(2), this.fileName = e3.readData(this.fileNameLength), e3.skip(r3), -1 === this.compressedSize || -1 === this.uncompressedSize)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if (null === (t3 = function(e4) {
          for (var t4 in h2)
            if (Object.prototype.hasOwnProperty.call(h2, t4) && h2[t4].magic === e4)
              return h2[t4];
          return null;
        }(this.compressionMethod)))
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t3, e3.readData(this.compressedSize));
      }, readCentralPart: function(e3) {
        this.versionMadeBy = e3.readInt(2), e3.skip(2), this.bitFlag = e3.readInt(2), this.compressionMethod = e3.readString(2), this.date = e3.readDate(), this.crc32 = e3.readInt(4), this.compressedSize = e3.readInt(4), this.uncompressedSize = e3.readInt(4);
        var t3 = e3.readInt(2);
        if (this.extraFieldsLength = e3.readInt(2), this.fileCommentLength = e3.readInt(2), this.diskNumberStart = e3.readInt(2), this.internalFileAttributes = e3.readInt(2), this.externalFileAttributes = e3.readInt(4), this.localHeaderOffset = e3.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        e3.skip(t3), this.readExtraFields(e3), this.parseZIP64ExtraField(e3), this.fileComment = e3.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var e3 = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), 0 == e3 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var e3 = n2(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e3.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e3.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e3.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e3.readInt(4));
        }
      }, readExtraFields: function(e3) {
        var t3, r3, n3, i2 = e3.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); e3.index + 4 < i2; )
          t3 = e3.readInt(2), r3 = e3.readInt(2), n3 = e3.readData(r3), this.extraFields[t3] = { id: t3, length: r3, value: n3 };
        e3.setIndex(i2);
      }, handleUTF8: function() {
        var e3 = u2.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
        else {
          var t3 = this.findExtraFieldUnicodePath();
          if (null !== t3)
            this.fileNameStr = t3;
          else {
            var r3 = s.transformTo(e3, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(r3);
          }
          var n3 = this.findExtraFieldUnicodeComment();
          if (null !== n3)
            this.fileCommentStr = n3;
          else {
            var i2 = s.transformTo(e3, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(i2);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var e3 = this.extraFields[28789];
        if (e3) {
          var t3 = n2(e3.value);
          return 1 !== t3.readInt(1) ? null : a(this.fileName) !== t3.readInt(4) ? null : o.utf8decode(t3.readData(e3.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var e3 = this.extraFields[25461];
        if (e3) {
          var t3 = n2(e3.value);
          return 1 !== t3.readInt(1) ? null : a(this.fileComment) !== t3.readInt(4) ? null : o.utf8decode(t3.readData(e3.length - 5));
        }
        return null;
      } }, t2.exports = l2;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e2, t2, r2) {
      function n2(e3, t3, r3) {
        this.name = e3, this.dir = r3.dir, this.date = r3.date, this.comment = r3.comment, this.unixPermissions = r3.unixPermissions, this.dosPermissions = r3.dosPermissions, this._data = t3, this._dataBinary = r3.binary, this.options = { compression: r3.compression, compressionOptions: r3.compressionOptions };
      }
      var s = e2("./stream/StreamHelper"), i = e2("./stream/DataWorker"), a = e2("./utf8"), o = e2("./compressedObject"), h2 = e2("./stream/GenericWorker");
      n2.prototype = { internalStream: function(e3) {
        var t3 = null, r3 = "string";
        try {
          if (!e3)
            throw new Error("No output type specified.");
          var n3 = "string" === (r3 = e3.toLowerCase()) || "text" === r3;
          "binarystring" !== r3 && "text" !== r3 || (r3 = "string"), t3 = this._decompressWorker();
          var i2 = !this._dataBinary;
          i2 && !n3 && (t3 = t3.pipe(new a.Utf8EncodeWorker())), !i2 && n3 && (t3 = t3.pipe(new a.Utf8DecodeWorker()));
        } catch (e4) {
          (t3 = new h2("error")).error(e4);
        }
        return new s(t3, r3, "");
      }, async: function(e3, t3) {
        return this.internalStream(e3).accumulate(t3);
      }, nodeStream: function(e3, t3) {
        return this.internalStream(e3 || "nodebuffer").toNodejsStream(t3);
      }, _compressWorker: function(e3, t3) {
        if (this._data instanceof o && this._data.compression.magic === e3.magic)
          return this._data.getCompressedWorker();
        var r3 = this._decompressWorker();
        return this._dataBinary || (r3 = r3.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r3, e3, t3);
      }, _decompressWorker: function() {
        return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h2 ? this._data : new i(this._data);
      } };
      for (var u2 = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l2 = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f2 = 0; f2 < u2.length; f2++)
        n2.prototype[u2[f2]] = l2;
      t2.exports = n2;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e2, l2, t2) {
      (function(t3) {
        var r2, n2, e3 = t3.MutationObserver || t3.WebKitMutationObserver;
        if (e3) {
          var i = 0, s = new e3(u2), a = t3.document.createTextNode("");
          s.observe(a, { characterData: true }), r2 = function() {
            a.data = i = ++i % 2;
          };
        } else if (t3.setImmediate || void 0 === t3.MessageChannel)
          r2 = "document" in t3 && "onreadystatechange" in t3.document.createElement("script") ? function() {
            var e4 = t3.document.createElement("script");
            e4.onreadystatechange = function() {
              u2(), e4.onreadystatechange = null, e4.parentNode.removeChild(e4), e4 = null;
            }, t3.document.documentElement.appendChild(e4);
          } : function() {
            setTimeout(u2, 0);
          };
        else {
          var o = new t3.MessageChannel();
          o.port1.onmessage = u2, r2 = function() {
            o.port2.postMessage(0);
          };
        }
        var h2 = [];
        function u2() {
          var e4, t4;
          n2 = true;
          for (var r3 = h2.length; r3; ) {
            for (t4 = h2, h2 = [], e4 = -1; ++e4 < r3; )
              t4[e4]();
            r3 = h2.length;
          }
          n2 = false;
        }
        l2.exports = function(e4) {
          1 !== h2.push(e4) || n2 || r2();
        };
      }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 37: [function(e2, t2, r2) {
      var i = e2("immediate");
      function u2() {
      }
      var l2 = {}, s = ["REJECTED"], a = ["FULFILLED"], n2 = ["PENDING"];
      function o(e3) {
        if ("function" != typeof e3)
          throw new TypeError("resolver must be a function");
        this.state = n2, this.queue = [], this.outcome = void 0, e3 !== u2 && d2(this, e3);
      }
      function h2(e3, t3, r3) {
        this.promise = e3, "function" == typeof t3 && (this.onFulfilled = t3, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r3 && (this.onRejected = r3, this.callRejected = this.otherCallRejected);
      }
      function f2(t3, r3, n3) {
        i(function() {
          var e3;
          try {
            e3 = r3(n3);
          } catch (e4) {
            return l2.reject(t3, e4);
          }
          e3 === t3 ? l2.reject(t3, new TypeError("Cannot resolve promise with itself")) : l2.resolve(t3, e3);
        });
      }
      function c2(e3) {
        var t3 = e3 && e3.then;
        if (e3 && ("object" == typeof e3 || "function" == typeof e3) && "function" == typeof t3)
          return function() {
            t3.apply(e3, arguments);
          };
      }
      function d2(t3, e3) {
        var r3 = false;
        function n3(e4) {
          r3 || (r3 = true, l2.reject(t3, e4));
        }
        function i2(e4) {
          r3 || (r3 = true, l2.resolve(t3, e4));
        }
        var s2 = p2(function() {
          e3(i2, n3);
        });
        "error" === s2.status && n3(s2.value);
      }
      function p2(e3, t3) {
        var r3 = {};
        try {
          r3.value = e3(t3), r3.status = "success";
        } catch (e4) {
          r3.status = "error", r3.value = e4;
        }
        return r3;
      }
      (t2.exports = o).prototype.finally = function(t3) {
        if ("function" != typeof t3)
          return this;
        var r3 = this.constructor;
        return this.then(function(e3) {
          return r3.resolve(t3()).then(function() {
            return e3;
          });
        }, function(e3) {
          return r3.resolve(t3()).then(function() {
            throw e3;
          });
        });
      }, o.prototype.catch = function(e3) {
        return this.then(null, e3);
      }, o.prototype.then = function(e3, t3) {
        if ("function" != typeof e3 && this.state === a || "function" != typeof t3 && this.state === s)
          return this;
        var r3 = new this.constructor(u2);
        this.state !== n2 ? f2(r3, this.state === a ? e3 : t3, this.outcome) : this.queue.push(new h2(r3, e3, t3));
        return r3;
      }, h2.prototype.callFulfilled = function(e3) {
        l2.resolve(this.promise, e3);
      }, h2.prototype.otherCallFulfilled = function(e3) {
        f2(this.promise, this.onFulfilled, e3);
      }, h2.prototype.callRejected = function(e3) {
        l2.reject(this.promise, e3);
      }, h2.prototype.otherCallRejected = function(e3) {
        f2(this.promise, this.onRejected, e3);
      }, l2.resolve = function(e3, t3) {
        var r3 = p2(c2, t3);
        if ("error" === r3.status)
          return l2.reject(e3, r3.value);
        var n3 = r3.value;
        if (n3)
          d2(e3, n3);
        else {
          e3.state = a, e3.outcome = t3;
          for (var i2 = -1, s2 = e3.queue.length; ++i2 < s2; )
            e3.queue[i2].callFulfilled(t3);
        }
        return e3;
      }, l2.reject = function(e3, t3) {
        e3.state = s, e3.outcome = t3;
        for (var r3 = -1, n3 = e3.queue.length; ++r3 < n3; )
          e3.queue[r3].callRejected(t3);
        return e3;
      }, o.resolve = function(e3) {
        if (e3 instanceof this)
          return e3;
        return l2.resolve(new this(u2), e3);
      }, o.reject = function(e3) {
        var t3 = new this(u2);
        return l2.reject(t3, e3);
      }, o.all = function(e3) {
        var r3 = this;
        if ("[object Array]" !== Object.prototype.toString.call(e3))
          return this.reject(new TypeError("must be an array"));
        var n3 = e3.length, i2 = false;
        if (!n3)
          return this.resolve([]);
        var s2 = new Array(n3), a2 = 0, t3 = -1, o2 = new this(u2);
        for (; ++t3 < n3; )
          h3(e3[t3], t3);
        return o2;
        function h3(e4, t4) {
          r3.resolve(e4).then(function(e5) {
            s2[t4] = e5, ++a2 !== n3 || i2 || (i2 = true, l2.resolve(o2, s2));
          }, function(e5) {
            i2 || (i2 = true, l2.reject(o2, e5));
          });
        }
      }, o.race = function(e3) {
        var t3 = this;
        if ("[object Array]" !== Object.prototype.toString.call(e3))
          return this.reject(new TypeError("must be an array"));
        var r3 = e3.length, n3 = false;
        if (!r3)
          return this.resolve([]);
        var i2 = -1, s2 = new this(u2);
        for (; ++i2 < r3; )
          a2 = e3[i2], t3.resolve(a2).then(function(e4) {
            n3 || (n3 = true, l2.resolve(s2, e4));
          }, function(e4) {
            n3 || (n3 = true, l2.reject(s2, e4));
          });
        var a2;
        return s2;
      };
    }, { immediate: 36 }], 38: [function(e2, t2, r2) {
      var n2 = {};
      (0, e2("./lib/utils/common").assign)(n2, e2("./lib/deflate"), e2("./lib/inflate"), e2("./lib/zlib/constants")), t2.exports = n2;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e2, t2, r2) {
      var a = e2("./zlib/deflate"), o = e2("./utils/common"), h2 = e2("./utils/strings"), i = e2("./zlib/messages"), s = e2("./zlib/zstream"), u2 = Object.prototype.toString, l2 = 0, f2 = -1, c2 = 0, d2 = 8;
      function p2(e3) {
        if (!(this instanceof p2))
          return new p2(e3);
        this.options = o.assign({ level: f2, method: d2, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c2, to: "" }, e3 || {});
        var t3 = this.options;
        t3.raw && 0 < t3.windowBits ? t3.windowBits = -t3.windowBits : t3.gzip && 0 < t3.windowBits && t3.windowBits < 16 && (t3.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
        var r3 = a.deflateInit2(this.strm, t3.level, t3.method, t3.windowBits, t3.memLevel, t3.strategy);
        if (r3 !== l2)
          throw new Error(i[r3]);
        if (t3.header && a.deflateSetHeader(this.strm, t3.header), t3.dictionary) {
          var n3;
          if (n3 = "string" == typeof t3.dictionary ? h2.string2buf(t3.dictionary) : "[object ArrayBuffer]" === u2.call(t3.dictionary) ? new Uint8Array(t3.dictionary) : t3.dictionary, (r3 = a.deflateSetDictionary(this.strm, n3)) !== l2)
            throw new Error(i[r3]);
          this._dict_set = true;
        }
      }
      function n2(e3, t3) {
        var r3 = new p2(t3);
        if (r3.push(e3, true), r3.err)
          throw r3.msg || i[r3.err];
        return r3.result;
      }
      p2.prototype.push = function(e3, t3) {
        var r3, n3, i2 = this.strm, s2 = this.options.chunkSize;
        if (this.ended)
          return false;
        n3 = t3 === ~~t3 ? t3 : true === t3 ? 4 : 0, "string" == typeof e3 ? i2.input = h2.string2buf(e3) : "[object ArrayBuffer]" === u2.call(e3) ? i2.input = new Uint8Array(e3) : i2.input = e3, i2.next_in = 0, i2.avail_in = i2.input.length;
        do {
          if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r3 = a.deflate(i2, n3)) && r3 !== l2)
            return this.onEnd(r3), !(this.ended = true);
          0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n3 && 2 !== n3) || ("string" === this.options.to ? this.onData(h2.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
        } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r3);
        return 4 === n3 ? (r3 = a.deflateEnd(this.strm), this.onEnd(r3), this.ended = true, r3 === l2) : 2 !== n3 || (this.onEnd(l2), !(i2.avail_out = 0));
      }, p2.prototype.onData = function(e3) {
        this.chunks.push(e3);
      }, p2.prototype.onEnd = function(e3) {
        e3 === l2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e3, this.msg = this.strm.msg;
      }, r2.Deflate = p2, r2.deflate = n2, r2.deflateRaw = function(e3, t3) {
        return (t3 = t3 || {}).raw = true, n2(e3, t3);
      }, r2.gzip = function(e3, t3) {
        return (t3 = t3 || {}).gzip = true, n2(e3, t3);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e2, t2, r2) {
      var c2 = e2("./zlib/inflate"), d2 = e2("./utils/common"), p2 = e2("./utils/strings"), m2 = e2("./zlib/constants"), n2 = e2("./zlib/messages"), i = e2("./zlib/zstream"), s = e2("./zlib/gzheader"), _ = Object.prototype.toString;
      function a(e3) {
        if (!(this instanceof a))
          return new a(e3);
        this.options = d2.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e3 || {});
        var t3 = this.options;
        t3.raw && 0 <= t3.windowBits && t3.windowBits < 16 && (t3.windowBits = -t3.windowBits, 0 === t3.windowBits && (t3.windowBits = -15)), !(0 <= t3.windowBits && t3.windowBits < 16) || e3 && e3.windowBits || (t3.windowBits += 32), 15 < t3.windowBits && t3.windowBits < 48 && 0 == (15 & t3.windowBits) && (t3.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
        var r3 = c2.inflateInit2(this.strm, t3.windowBits);
        if (r3 !== m2.Z_OK)
          throw new Error(n2[r3]);
        this.header = new s(), c2.inflateGetHeader(this.strm, this.header);
      }
      function o(e3, t3) {
        var r3 = new a(t3);
        if (r3.push(e3, true), r3.err)
          throw r3.msg || n2[r3.err];
        return r3.result;
      }
      a.prototype.push = function(e3, t3) {
        var r3, n3, i2, s2, a2, o2, h2 = this.strm, u2 = this.options.chunkSize, l2 = this.options.dictionary, f2 = false;
        if (this.ended)
          return false;
        n3 = t3 === ~~t3 ? t3 : true === t3 ? m2.Z_FINISH : m2.Z_NO_FLUSH, "string" == typeof e3 ? h2.input = p2.binstring2buf(e3) : "[object ArrayBuffer]" === _.call(e3) ? h2.input = new Uint8Array(e3) : h2.input = e3, h2.next_in = 0, h2.avail_in = h2.input.length;
        do {
          if (0 === h2.avail_out && (h2.output = new d2.Buf8(u2), h2.next_out = 0, h2.avail_out = u2), (r3 = c2.inflate(h2, m2.Z_NO_FLUSH)) === m2.Z_NEED_DICT && l2 && (o2 = "string" == typeof l2 ? p2.string2buf(l2) : "[object ArrayBuffer]" === _.call(l2) ? new Uint8Array(l2) : l2, r3 = c2.inflateSetDictionary(this.strm, o2)), r3 === m2.Z_BUF_ERROR && true === f2 && (r3 = m2.Z_OK, f2 = false), r3 !== m2.Z_STREAM_END && r3 !== m2.Z_OK)
            return this.onEnd(r3), !(this.ended = true);
          h2.next_out && (0 !== h2.avail_out && r3 !== m2.Z_STREAM_END && (0 !== h2.avail_in || n3 !== m2.Z_FINISH && n3 !== m2.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p2.utf8border(h2.output, h2.next_out), s2 = h2.next_out - i2, a2 = p2.buf2string(h2.output, i2), h2.next_out = s2, h2.avail_out = u2 - s2, s2 && d2.arraySet(h2.output, h2.output, i2, s2, 0), this.onData(a2)) : this.onData(d2.shrinkBuf(h2.output, h2.next_out)))), 0 === h2.avail_in && 0 === h2.avail_out && (f2 = true);
        } while ((0 < h2.avail_in || 0 === h2.avail_out) && r3 !== m2.Z_STREAM_END);
        return r3 === m2.Z_STREAM_END && (n3 = m2.Z_FINISH), n3 === m2.Z_FINISH ? (r3 = c2.inflateEnd(this.strm), this.onEnd(r3), this.ended = true, r3 === m2.Z_OK) : n3 !== m2.Z_SYNC_FLUSH || (this.onEnd(m2.Z_OK), !(h2.avail_out = 0));
      }, a.prototype.onData = function(e3) {
        this.chunks.push(e3);
      }, a.prototype.onEnd = function(e3) {
        e3 === m2.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d2.flattenChunks(this.chunks)), this.chunks = [], this.err = e3, this.msg = this.strm.msg;
      }, r2.Inflate = a, r2.inflate = o, r2.inflateRaw = function(e3, t3) {
        return (t3 = t3 || {}).raw = true, o(e3, t3);
      }, r2.ungzip = o;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e2, t2, r2) {
      var n2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
      r2.assign = function(e3) {
        for (var t3 = Array.prototype.slice.call(arguments, 1); t3.length; ) {
          var r3 = t3.shift();
          if (r3) {
            if ("object" != typeof r3)
              throw new TypeError(r3 + "must be non-object");
            for (var n3 in r3)
              r3.hasOwnProperty(n3) && (e3[n3] = r3[n3]);
          }
        }
        return e3;
      }, r2.shrinkBuf = function(e3, t3) {
        return e3.length === t3 ? e3 : e3.subarray ? e3.subarray(0, t3) : (e3.length = t3, e3);
      };
      var i = { arraySet: function(e3, t3, r3, n3, i2) {
        if (t3.subarray && e3.subarray)
          e3.set(t3.subarray(r3, r3 + n3), i2);
        else
          for (var s2 = 0; s2 < n3; s2++)
            e3[i2 + s2] = t3[r3 + s2];
      }, flattenChunks: function(e3) {
        var t3, r3, n3, i2, s2, a;
        for (t3 = n3 = 0, r3 = e3.length; t3 < r3; t3++)
          n3 += e3[t3].length;
        for (a = new Uint8Array(n3), t3 = i2 = 0, r3 = e3.length; t3 < r3; t3++)
          s2 = e3[t3], a.set(s2, i2), i2 += s2.length;
        return a;
      } }, s = { arraySet: function(e3, t3, r3, n3, i2) {
        for (var s2 = 0; s2 < n3; s2++)
          e3[i2 + s2] = t3[r3 + s2];
      }, flattenChunks: function(e3) {
        return [].concat.apply([], e3);
      } };
      r2.setTyped = function(e3) {
        e3 ? (r2.Buf8 = Uint8Array, r2.Buf16 = Uint16Array, r2.Buf32 = Int32Array, r2.assign(r2, i)) : (r2.Buf8 = Array, r2.Buf16 = Array, r2.Buf32 = Array, r2.assign(r2, s));
      }, r2.setTyped(n2);
    }, {}], 42: [function(e2, t2, r2) {
      var h2 = e2("./common"), i = true, s = true;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (e3) {
        i = false;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (e3) {
        s = false;
      }
      for (var u2 = new h2.Buf8(256), n2 = 0; n2 < 256; n2++)
        u2[n2] = 252 <= n2 ? 6 : 248 <= n2 ? 5 : 240 <= n2 ? 4 : 224 <= n2 ? 3 : 192 <= n2 ? 2 : 1;
      function l2(e3, t3) {
        if (t3 < 65537 && (e3.subarray && s || !e3.subarray && i))
          return String.fromCharCode.apply(null, h2.shrinkBuf(e3, t3));
        for (var r3 = "", n3 = 0; n3 < t3; n3++)
          r3 += String.fromCharCode(e3[n3]);
        return r3;
      }
      u2[254] = u2[254] = 1, r2.string2buf = function(e3) {
        var t3, r3, n3, i2, s2, a = e3.length, o = 0;
        for (i2 = 0; i2 < a; i2++)
          55296 == (64512 & (r3 = e3.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n3 = e3.charCodeAt(i2 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i2++), o += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
        for (t3 = new h2.Buf8(o), i2 = s2 = 0; s2 < o; i2++)
          55296 == (64512 & (r3 = e3.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n3 = e3.charCodeAt(i2 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i2++), r3 < 128 ? t3[s2++] = r3 : (r3 < 2048 ? t3[s2++] = 192 | r3 >>> 6 : (r3 < 65536 ? t3[s2++] = 224 | r3 >>> 12 : (t3[s2++] = 240 | r3 >>> 18, t3[s2++] = 128 | r3 >>> 12 & 63), t3[s2++] = 128 | r3 >>> 6 & 63), t3[s2++] = 128 | 63 & r3);
        return t3;
      }, r2.buf2binstring = function(e3) {
        return l2(e3, e3.length);
      }, r2.binstring2buf = function(e3) {
        for (var t3 = new h2.Buf8(e3.length), r3 = 0, n3 = t3.length; r3 < n3; r3++)
          t3[r3] = e3.charCodeAt(r3);
        return t3;
      }, r2.buf2string = function(e3, t3) {
        var r3, n3, i2, s2, a = t3 || e3.length, o = new Array(2 * a);
        for (r3 = n3 = 0; r3 < a; )
          if ((i2 = e3[r3++]) < 128)
            o[n3++] = i2;
          else if (4 < (s2 = u2[i2]))
            o[n3++] = 65533, r3 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r3 < a; )
              i2 = i2 << 6 | 63 & e3[r3++], s2--;
            1 < s2 ? o[n3++] = 65533 : i2 < 65536 ? o[n3++] = i2 : (i2 -= 65536, o[n3++] = 55296 | i2 >> 10 & 1023, o[n3++] = 56320 | 1023 & i2);
          }
        return l2(o, n3);
      }, r2.utf8border = function(e3, t3) {
        var r3;
        for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); )
          r3--;
        return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u2[e3[r3]] > t3 ? r3 : t3;
      };
    }, { "./common": 41 }], 43: [function(e2, t2, r2) {
      t2.exports = function(e3, t3, r3, n2) {
        for (var i = 65535 & e3 | 0, s = e3 >>> 16 & 65535 | 0, a = 0; 0 !== r3; ) {
          for (r3 -= a = 2e3 < r3 ? 2e3 : r3; s = s + (i = i + t3[n2++] | 0) | 0, --a; )
            ;
          i %= 65521, s %= 65521;
        }
        return i | s << 16 | 0;
      };
    }, {}], 44: [function(e2, t2, r2) {
      t2.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e2, t2, r2) {
      var o = function() {
        for (var e3, t3 = [], r3 = 0; r3 < 256; r3++) {
          e3 = r3;
          for (var n2 = 0; n2 < 8; n2++)
            e3 = 1 & e3 ? 3988292384 ^ e3 >>> 1 : e3 >>> 1;
          t3[r3] = e3;
        }
        return t3;
      }();
      t2.exports = function(e3, t3, r3, n2) {
        var i = o, s = n2 + r3;
        e3 ^= -1;
        for (var a = n2; a < s; a++)
          e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
        return -1 ^ e3;
      };
    }, {}], 46: [function(e2, t2, r2) {
      var h2, c2 = e2("../utils/common"), u2 = e2("./trees"), d2 = e2("./adler32"), p2 = e2("./crc32"), n2 = e2("./messages"), l2 = 0, f2 = 4, m2 = 0, _ = -2, g2 = -1, b2 = 4, i = 2, v2 = 8, y2 = 9, s = 286, a = 30, o = 19, w2 = 2 * s + 1, k2 = 15, x2 = 3, S2 = 258, z2 = S2 + x2 + 1, C2 = 42, E2 = 113, A2 = 1, I2 = 2, O2 = 3, B2 = 4;
      function R2(e3, t3) {
        return e3.msg = n2[t3], t3;
      }
      function T2(e3) {
        return (e3 << 1) - (4 < e3 ? 9 : 0);
      }
      function D2(e3) {
        for (var t3 = e3.length; 0 <= --t3; )
          e3[t3] = 0;
      }
      function F2(e3) {
        var t3 = e3.state, r3 = t3.pending;
        r3 > e3.avail_out && (r3 = e3.avail_out), 0 !== r3 && (c2.arraySet(e3.output, t3.pending_buf, t3.pending_out, r3, e3.next_out), e3.next_out += r3, t3.pending_out += r3, e3.total_out += r3, e3.avail_out -= r3, t3.pending -= r3, 0 === t3.pending && (t3.pending_out = 0));
      }
      function N2(e3, t3) {
        u2._tr_flush_block(e3, 0 <= e3.block_start ? e3.block_start : -1, e3.strstart - e3.block_start, t3), e3.block_start = e3.strstart, F2(e3.strm);
      }
      function U2(e3, t3) {
        e3.pending_buf[e3.pending++] = t3;
      }
      function P2(e3, t3) {
        e3.pending_buf[e3.pending++] = t3 >>> 8 & 255, e3.pending_buf[e3.pending++] = 255 & t3;
      }
      function L2(e3, t3) {
        var r3, n3, i2 = e3.max_chain_length, s2 = e3.strstart, a2 = e3.prev_length, o2 = e3.nice_match, h3 = e3.strstart > e3.w_size - z2 ? e3.strstart - (e3.w_size - z2) : 0, u3 = e3.window, l3 = e3.w_mask, f3 = e3.prev, c3 = e3.strstart + S2, d3 = u3[s2 + a2 - 1], p3 = u3[s2 + a2];
        e3.prev_length >= e3.good_match && (i2 >>= 2), o2 > e3.lookahead && (o2 = e3.lookahead);
        do {
          if (u3[(r3 = t3) + a2] === p3 && u3[r3 + a2 - 1] === d3 && u3[r3] === u3[s2] && u3[++r3] === u3[s2 + 1]) {
            s2 += 2, r3++;
            do {
            } while (u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && s2 < c3);
            if (n3 = S2 - (c3 - s2), s2 = c3 - S2, a2 < n3) {
              if (e3.match_start = t3, o2 <= (a2 = n3))
                break;
              d3 = u3[s2 + a2 - 1], p3 = u3[s2 + a2];
            }
          }
        } while ((t3 = f3[t3 & l3]) > h3 && 0 != --i2);
        return a2 <= e3.lookahead ? a2 : e3.lookahead;
      }
      function j(e3) {
        var t3, r3, n3, i2, s2, a2, o2, h3, u3, l3, f3 = e3.w_size;
        do {
          if (i2 = e3.window_size - e3.lookahead - e3.strstart, e3.strstart >= f3 + (f3 - z2)) {
            for (c2.arraySet(e3.window, e3.window, f3, f3, 0), e3.match_start -= f3, e3.strstart -= f3, e3.block_start -= f3, t3 = r3 = e3.hash_size; n3 = e3.head[--t3], e3.head[t3] = f3 <= n3 ? n3 - f3 : 0, --r3; )
              ;
            for (t3 = r3 = f3; n3 = e3.prev[--t3], e3.prev[t3] = f3 <= n3 ? n3 - f3 : 0, --r3; )
              ;
            i2 += f3;
          }
          if (0 === e3.strm.avail_in)
            break;
          if (a2 = e3.strm, o2 = e3.window, h3 = e3.strstart + e3.lookahead, u3 = i2, l3 = void 0, l3 = a2.avail_in, u3 < l3 && (l3 = u3), r3 = 0 === l3 ? 0 : (a2.avail_in -= l3, c2.arraySet(o2, a2.input, a2.next_in, l3, h3), 1 === a2.state.wrap ? a2.adler = d2(a2.adler, o2, l3, h3) : 2 === a2.state.wrap && (a2.adler = p2(a2.adler, o2, l3, h3)), a2.next_in += l3, a2.total_in += l3, l3), e3.lookahead += r3, e3.lookahead + e3.insert >= x2)
            for (s2 = e3.strstart - e3.insert, e3.ins_h = e3.window[s2], e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[s2 + 1]) & e3.hash_mask; e3.insert && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[s2 + x2 - 1]) & e3.hash_mask, e3.prev[s2 & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = s2, s2++, e3.insert--, !(e3.lookahead + e3.insert < x2)); )
              ;
        } while (e3.lookahead < z2 && 0 !== e3.strm.avail_in);
      }
      function Z2(e3, t3) {
        for (var r3, n3; ; ) {
          if (e3.lookahead < z2) {
            if (j(e3), e3.lookahead < z2 && t3 === l2)
              return A2;
            if (0 === e3.lookahead)
              break;
          }
          if (r3 = 0, e3.lookahead >= x2 && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x2 - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), 0 !== r3 && e3.strstart - r3 <= e3.w_size - z2 && (e3.match_length = L2(e3, r3)), e3.match_length >= x2)
            if (n3 = u2._tr_tally(e3, e3.strstart - e3.match_start, e3.match_length - x2), e3.lookahead -= e3.match_length, e3.match_length <= e3.max_lazy_match && e3.lookahead >= x2) {
              for (e3.match_length--; e3.strstart++, e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x2 - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart, 0 != --e3.match_length; )
                ;
              e3.strstart++;
            } else
              e3.strstart += e3.match_length, e3.match_length = 0, e3.ins_h = e3.window[e3.strstart], e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + 1]) & e3.hash_mask;
          else
            n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++;
          if (n3 && (N2(e3, false), 0 === e3.strm.avail_out))
            return A2;
        }
        return e3.insert = e3.strstart < x2 - 1 ? e3.strstart : x2 - 1, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B2) : e3.last_lit && (N2(e3, false), 0 === e3.strm.avail_out) ? A2 : I2;
      }
      function W2(e3, t3) {
        for (var r3, n3, i2; ; ) {
          if (e3.lookahead < z2) {
            if (j(e3), e3.lookahead < z2 && t3 === l2)
              return A2;
            if (0 === e3.lookahead)
              break;
          }
          if (r3 = 0, e3.lookahead >= x2 && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x2 - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), e3.prev_length = e3.match_length, e3.prev_match = e3.match_start, e3.match_length = x2 - 1, 0 !== r3 && e3.prev_length < e3.max_lazy_match && e3.strstart - r3 <= e3.w_size - z2 && (e3.match_length = L2(e3, r3), e3.match_length <= 5 && (1 === e3.strategy || e3.match_length === x2 && 4096 < e3.strstart - e3.match_start) && (e3.match_length = x2 - 1)), e3.prev_length >= x2 && e3.match_length <= e3.prev_length) {
            for (i2 = e3.strstart + e3.lookahead - x2, n3 = u2._tr_tally(e3, e3.strstart - 1 - e3.prev_match, e3.prev_length - x2), e3.lookahead -= e3.prev_length - 1, e3.prev_length -= 2; ++e3.strstart <= i2 && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x2 - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), 0 != --e3.prev_length; )
              ;
            if (e3.match_available = 0, e3.match_length = x2 - 1, e3.strstart++, n3 && (N2(e3, false), 0 === e3.strm.avail_out))
              return A2;
          } else if (e3.match_available) {
            if ((n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart - 1])) && N2(e3, false), e3.strstart++, e3.lookahead--, 0 === e3.strm.avail_out)
              return A2;
          } else
            e3.match_available = 1, e3.strstart++, e3.lookahead--;
        }
        return e3.match_available && (n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart - 1]), e3.match_available = 0), e3.insert = e3.strstart < x2 - 1 ? e3.strstart : x2 - 1, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B2) : e3.last_lit && (N2(e3, false), 0 === e3.strm.avail_out) ? A2 : I2;
      }
      function M2(e3, t3, r3, n3, i2) {
        this.good_length = e3, this.max_lazy = t3, this.nice_length = r3, this.max_chain = n3, this.func = i2;
      }
      function H2() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c2.Buf16(2 * w2), this.dyn_dtree = new c2.Buf16(2 * (2 * a + 1)), this.bl_tree = new c2.Buf16(2 * (2 * o + 1)), D2(this.dyn_ltree), D2(this.dyn_dtree), D2(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c2.Buf16(k2 + 1), this.heap = new c2.Buf16(2 * s + 1), D2(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c2.Buf16(2 * s + 1), D2(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function G2(e3) {
        var t3;
        return e3 && e3.state ? (e3.total_in = e3.total_out = 0, e3.data_type = i, (t3 = e3.state).pending = 0, t3.pending_out = 0, t3.wrap < 0 && (t3.wrap = -t3.wrap), t3.status = t3.wrap ? C2 : E2, e3.adler = 2 === t3.wrap ? 0 : 1, t3.last_flush = l2, u2._tr_init(t3), m2) : R2(e3, _);
      }
      function K2(e3) {
        var t3 = G2(e3);
        return t3 === m2 && function(e4) {
          e4.window_size = 2 * e4.w_size, D2(e4.head), e4.max_lazy_match = h2[e4.level].max_lazy, e4.good_match = h2[e4.level].good_length, e4.nice_match = h2[e4.level].nice_length, e4.max_chain_length = h2[e4.level].max_chain, e4.strstart = 0, e4.block_start = 0, e4.lookahead = 0, e4.insert = 0, e4.match_length = e4.prev_length = x2 - 1, e4.match_available = 0, e4.ins_h = 0;
        }(e3.state), t3;
      }
      function Y2(e3, t3, r3, n3, i2, s2) {
        if (!e3)
          return _;
        var a2 = 1;
        if (t3 === g2 && (t3 = 6), n3 < 0 ? (a2 = 0, n3 = -n3) : 15 < n3 && (a2 = 2, n3 -= 16), i2 < 1 || y2 < i2 || r3 !== v2 || n3 < 8 || 15 < n3 || t3 < 0 || 9 < t3 || s2 < 0 || b2 < s2)
          return R2(e3, _);
        8 === n3 && (n3 = 9);
        var o2 = new H2();
        return (e3.state = o2).strm = e3, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n3, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x2 - 1) / x2), o2.window = new c2.Buf8(2 * o2.w_size), o2.head = new c2.Buf16(o2.hash_size), o2.prev = new c2.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c2.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t3, o2.strategy = s2, o2.method = r3, K2(e3);
      }
      h2 = [new M2(0, 0, 0, 0, function(e3, t3) {
        var r3 = 65535;
        for (r3 > e3.pending_buf_size - 5 && (r3 = e3.pending_buf_size - 5); ; ) {
          if (e3.lookahead <= 1) {
            if (j(e3), 0 === e3.lookahead && t3 === l2)
              return A2;
            if (0 === e3.lookahead)
              break;
          }
          e3.strstart += e3.lookahead, e3.lookahead = 0;
          var n3 = e3.block_start + r3;
          if ((0 === e3.strstart || e3.strstart >= n3) && (e3.lookahead = e3.strstart - n3, e3.strstart = n3, N2(e3, false), 0 === e3.strm.avail_out))
            return A2;
          if (e3.strstart - e3.block_start >= e3.w_size - z2 && (N2(e3, false), 0 === e3.strm.avail_out))
            return A2;
        }
        return e3.insert = 0, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B2) : (e3.strstart > e3.block_start && (N2(e3, false), e3.strm.avail_out), A2);
      }), new M2(4, 4, 8, 4, Z2), new M2(4, 5, 16, 8, Z2), new M2(4, 6, 32, 32, Z2), new M2(4, 4, 16, 16, W2), new M2(8, 16, 32, 32, W2), new M2(8, 16, 128, 128, W2), new M2(8, 32, 128, 256, W2), new M2(32, 128, 258, 1024, W2), new M2(32, 258, 258, 4096, W2)], r2.deflateInit = function(e3, t3) {
        return Y2(e3, t3, v2, 15, 8, 0);
      }, r2.deflateInit2 = Y2, r2.deflateReset = K2, r2.deflateResetKeep = G2, r2.deflateSetHeader = function(e3, t3) {
        return e3 && e3.state ? 2 !== e3.state.wrap ? _ : (e3.state.gzhead = t3, m2) : _;
      }, r2.deflate = function(e3, t3) {
        var r3, n3, i2, s2;
        if (!e3 || !e3.state || 5 < t3 || t3 < 0)
          return e3 ? R2(e3, _) : _;
        if (n3 = e3.state, !e3.output || !e3.input && 0 !== e3.avail_in || 666 === n3.status && t3 !== f2)
          return R2(e3, 0 === e3.avail_out ? -5 : _);
        if (n3.strm = e3, r3 = n3.last_flush, n3.last_flush = t3, n3.status === C2)
          if (2 === n3.wrap)
            e3.adler = 0, U2(n3, 31), U2(n3, 139), U2(n3, 8), n3.gzhead ? (U2(n3, (n3.gzhead.text ? 1 : 0) + (n3.gzhead.hcrc ? 2 : 0) + (n3.gzhead.extra ? 4 : 0) + (n3.gzhead.name ? 8 : 0) + (n3.gzhead.comment ? 16 : 0)), U2(n3, 255 & n3.gzhead.time), U2(n3, n3.gzhead.time >> 8 & 255), U2(n3, n3.gzhead.time >> 16 & 255), U2(n3, n3.gzhead.time >> 24 & 255), U2(n3, 9 === n3.level ? 2 : 2 <= n3.strategy || n3.level < 2 ? 4 : 0), U2(n3, 255 & n3.gzhead.os), n3.gzhead.extra && n3.gzhead.extra.length && (U2(n3, 255 & n3.gzhead.extra.length), U2(n3, n3.gzhead.extra.length >> 8 & 255)), n3.gzhead.hcrc && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending, 0)), n3.gzindex = 0, n3.status = 69) : (U2(n3, 0), U2(n3, 0), U2(n3, 0), U2(n3, 0), U2(n3, 0), U2(n3, 9 === n3.level ? 2 : 2 <= n3.strategy || n3.level < 2 ? 4 : 0), U2(n3, 3), n3.status = E2);
          else {
            var a2 = v2 + (n3.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n3.strategy || n3.level < 2 ? 0 : n3.level < 6 ? 1 : 6 === n3.level ? 2 : 3) << 6, 0 !== n3.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n3.status = E2, P2(n3, a2), 0 !== n3.strstart && (P2(n3, e3.adler >>> 16), P2(n3, 65535 & e3.adler)), e3.adler = 1;
          }
        if (69 === n3.status)
          if (n3.gzhead.extra) {
            for (i2 = n3.pending; n3.gzindex < (65535 & n3.gzhead.extra.length) && (n3.pending !== n3.pending_buf_size || (n3.gzhead.hcrc && n3.pending > i2 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i2, i2)), F2(e3), i2 = n3.pending, n3.pending !== n3.pending_buf_size)); )
              U2(n3, 255 & n3.gzhead.extra[n3.gzindex]), n3.gzindex++;
            n3.gzhead.hcrc && n3.pending > i2 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i2, i2)), n3.gzindex === n3.gzhead.extra.length && (n3.gzindex = 0, n3.status = 73);
          } else
            n3.status = 73;
        if (73 === n3.status)
          if (n3.gzhead.name) {
            i2 = n3.pending;
            do {
              if (n3.pending === n3.pending_buf_size && (n3.gzhead.hcrc && n3.pending > i2 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i2, i2)), F2(e3), i2 = n3.pending, n3.pending === n3.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n3.gzindex < n3.gzhead.name.length ? 255 & n3.gzhead.name.charCodeAt(n3.gzindex++) : 0, U2(n3, s2);
            } while (0 !== s2);
            n3.gzhead.hcrc && n3.pending > i2 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i2, i2)), 0 === s2 && (n3.gzindex = 0, n3.status = 91);
          } else
            n3.status = 91;
        if (91 === n3.status)
          if (n3.gzhead.comment) {
            i2 = n3.pending;
            do {
              if (n3.pending === n3.pending_buf_size && (n3.gzhead.hcrc && n3.pending > i2 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i2, i2)), F2(e3), i2 = n3.pending, n3.pending === n3.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n3.gzindex < n3.gzhead.comment.length ? 255 & n3.gzhead.comment.charCodeAt(n3.gzindex++) : 0, U2(n3, s2);
            } while (0 !== s2);
            n3.gzhead.hcrc && n3.pending > i2 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i2, i2)), 0 === s2 && (n3.status = 103);
          } else
            n3.status = 103;
        if (103 === n3.status && (n3.gzhead.hcrc ? (n3.pending + 2 > n3.pending_buf_size && F2(e3), n3.pending + 2 <= n3.pending_buf_size && (U2(n3, 255 & e3.adler), U2(n3, e3.adler >> 8 & 255), e3.adler = 0, n3.status = E2)) : n3.status = E2), 0 !== n3.pending) {
          if (F2(e3), 0 === e3.avail_out)
            return n3.last_flush = -1, m2;
        } else if (0 === e3.avail_in && T2(t3) <= T2(r3) && t3 !== f2)
          return R2(e3, -5);
        if (666 === n3.status && 0 !== e3.avail_in)
          return R2(e3, -5);
        if (0 !== e3.avail_in || 0 !== n3.lookahead || t3 !== l2 && 666 !== n3.status) {
          var o2 = 2 === n3.strategy ? function(e4, t4) {
            for (var r4; ; ) {
              if (0 === e4.lookahead && (j(e4), 0 === e4.lookahead)) {
                if (t4 === l2)
                  return A2;
                break;
              }
              if (e4.match_length = 0, r4 = u2._tr_tally(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++, r4 && (N2(e4, false), 0 === e4.strm.avail_out))
                return A2;
            }
            return e4.insert = 0, t4 === f2 ? (N2(e4, true), 0 === e4.strm.avail_out ? O2 : B2) : e4.last_lit && (N2(e4, false), 0 === e4.strm.avail_out) ? A2 : I2;
          }(n3, t3) : 3 === n3.strategy ? function(e4, t4) {
            for (var r4, n4, i3, s3, a3 = e4.window; ; ) {
              if (e4.lookahead <= S2) {
                if (j(e4), e4.lookahead <= S2 && t4 === l2)
                  return A2;
                if (0 === e4.lookahead)
                  break;
              }
              if (e4.match_length = 0, e4.lookahead >= x2 && 0 < e4.strstart && (n4 = a3[i3 = e4.strstart - 1]) === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3]) {
                s3 = e4.strstart + S2;
                do {
                } while (n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && n4 === a3[++i3] && i3 < s3);
                e4.match_length = S2 - (s3 - i3), e4.match_length > e4.lookahead && (e4.match_length = e4.lookahead);
              }
              if (e4.match_length >= x2 ? (r4 = u2._tr_tally(e4, 1, e4.match_length - x2), e4.lookahead -= e4.match_length, e4.strstart += e4.match_length, e4.match_length = 0) : (r4 = u2._tr_tally(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++), r4 && (N2(e4, false), 0 === e4.strm.avail_out))
                return A2;
            }
            return e4.insert = 0, t4 === f2 ? (N2(e4, true), 0 === e4.strm.avail_out ? O2 : B2) : e4.last_lit && (N2(e4, false), 0 === e4.strm.avail_out) ? A2 : I2;
          }(n3, t3) : h2[n3.level].func(n3, t3);
          if (o2 !== O2 && o2 !== B2 || (n3.status = 666), o2 === A2 || o2 === O2)
            return 0 === e3.avail_out && (n3.last_flush = -1), m2;
          if (o2 === I2 && (1 === t3 ? u2._tr_align(n3) : 5 !== t3 && (u2._tr_stored_block(n3, 0, 0, false), 3 === t3 && (D2(n3.head), 0 === n3.lookahead && (n3.strstart = 0, n3.block_start = 0, n3.insert = 0))), F2(e3), 0 === e3.avail_out))
            return n3.last_flush = -1, m2;
        }
        return t3 !== f2 ? m2 : n3.wrap <= 0 ? 1 : (2 === n3.wrap ? (U2(n3, 255 & e3.adler), U2(n3, e3.adler >> 8 & 255), U2(n3, e3.adler >> 16 & 255), U2(n3, e3.adler >> 24 & 255), U2(n3, 255 & e3.total_in), U2(n3, e3.total_in >> 8 & 255), U2(n3, e3.total_in >> 16 & 255), U2(n3, e3.total_in >> 24 & 255)) : (P2(n3, e3.adler >>> 16), P2(n3, 65535 & e3.adler)), F2(e3), 0 < n3.wrap && (n3.wrap = -n3.wrap), 0 !== n3.pending ? m2 : 1);
      }, r2.deflateEnd = function(e3) {
        var t3;
        return e3 && e3.state ? (t3 = e3.state.status) !== C2 && 69 !== t3 && 73 !== t3 && 91 !== t3 && 103 !== t3 && t3 !== E2 && 666 !== t3 ? R2(e3, _) : (e3.state = null, t3 === E2 ? R2(e3, -3) : m2) : _;
      }, r2.deflateSetDictionary = function(e3, t3) {
        var r3, n3, i2, s2, a2, o2, h3, u3, l3 = t3.length;
        if (!e3 || !e3.state)
          return _;
        if (2 === (s2 = (r3 = e3.state).wrap) || 1 === s2 && r3.status !== C2 || r3.lookahead)
          return _;
        for (1 === s2 && (e3.adler = d2(e3.adler, t3, l3, 0)), r3.wrap = 0, l3 >= r3.w_size && (0 === s2 && (D2(r3.head), r3.strstart = 0, r3.block_start = 0, r3.insert = 0), u3 = new c2.Buf8(r3.w_size), c2.arraySet(u3, t3, l3 - r3.w_size, r3.w_size, 0), t3 = u3, l3 = r3.w_size), a2 = e3.avail_in, o2 = e3.next_in, h3 = e3.input, e3.avail_in = l3, e3.next_in = 0, e3.input = t3, j(r3); r3.lookahead >= x2; ) {
          for (n3 = r3.strstart, i2 = r3.lookahead - (x2 - 1); r3.ins_h = (r3.ins_h << r3.hash_shift ^ r3.window[n3 + x2 - 1]) & r3.hash_mask, r3.prev[n3 & r3.w_mask] = r3.head[r3.ins_h], r3.head[r3.ins_h] = n3, n3++, --i2; )
            ;
          r3.strstart = n3, r3.lookahead = x2 - 1, j(r3);
        }
        return r3.strstart += r3.lookahead, r3.block_start = r3.strstart, r3.insert = r3.lookahead, r3.lookahead = 0, r3.match_length = r3.prev_length = x2 - 1, r3.match_available = 0, e3.next_in = o2, e3.input = h3, e3.avail_in = a2, r3.wrap = s2, m2;
      }, r2.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e2, t2, r2) {
      t2.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
      };
    }, {}], 48: [function(e2, t2, r2) {
      t2.exports = function(e3, t3) {
        var r3, n2, i, s, a, o, h2, u2, l2, f2, c2, d2, p2, m2, _, g2, b2, v2, y2, w2, k2, x2, S2, z2, C2;
        r3 = e3.state, n2 = e3.next_in, z2 = e3.input, i = n2 + (e3.avail_in - 5), s = e3.next_out, C2 = e3.output, a = s - (t3 - e3.avail_out), o = s + (e3.avail_out - 257), h2 = r3.dmax, u2 = r3.wsize, l2 = r3.whave, f2 = r3.wnext, c2 = r3.window, d2 = r3.hold, p2 = r3.bits, m2 = r3.lencode, _ = r3.distcode, g2 = (1 << r3.lenbits) - 1, b2 = (1 << r3.distbits) - 1;
        e:
          do {
            p2 < 15 && (d2 += z2[n2++] << p2, p2 += 8, d2 += z2[n2++] << p2, p2 += 8), v2 = m2[d2 & g2];
            t:
              for (; ; ) {
                if (d2 >>>= y2 = v2 >>> 24, p2 -= y2, 0 === (y2 = v2 >>> 16 & 255))
                  C2[s++] = 65535 & v2;
                else {
                  if (!(16 & y2)) {
                    if (0 == (64 & y2)) {
                      v2 = m2[(65535 & v2) + (d2 & (1 << y2) - 1)];
                      continue t;
                    }
                    if (32 & y2) {
                      r3.mode = 12;
                      break e;
                    }
                    e3.msg = "invalid literal/length code", r3.mode = 30;
                    break e;
                  }
                  w2 = 65535 & v2, (y2 &= 15) && (p2 < y2 && (d2 += z2[n2++] << p2, p2 += 8), w2 += d2 & (1 << y2) - 1, d2 >>>= y2, p2 -= y2), p2 < 15 && (d2 += z2[n2++] << p2, p2 += 8, d2 += z2[n2++] << p2, p2 += 8), v2 = _[d2 & b2];
                  r:
                    for (; ; ) {
                      if (d2 >>>= y2 = v2 >>> 24, p2 -= y2, !(16 & (y2 = v2 >>> 16 & 255))) {
                        if (0 == (64 & y2)) {
                          v2 = _[(65535 & v2) + (d2 & (1 << y2) - 1)];
                          continue r;
                        }
                        e3.msg = "invalid distance code", r3.mode = 30;
                        break e;
                      }
                      if (k2 = 65535 & v2, p2 < (y2 &= 15) && (d2 += z2[n2++] << p2, (p2 += 8) < y2 && (d2 += z2[n2++] << p2, p2 += 8)), h2 < (k2 += d2 & (1 << y2) - 1)) {
                        e3.msg = "invalid distance too far back", r3.mode = 30;
                        break e;
                      }
                      if (d2 >>>= y2, p2 -= y2, (y2 = s - a) < k2) {
                        if (l2 < (y2 = k2 - y2) && r3.sane) {
                          e3.msg = "invalid distance too far back", r3.mode = 30;
                          break e;
                        }
                        if (S2 = c2, (x2 = 0) === f2) {
                          if (x2 += u2 - y2, y2 < w2) {
                            for (w2 -= y2; C2[s++] = c2[x2++], --y2; )
                              ;
                            x2 = s - k2, S2 = C2;
                          }
                        } else if (f2 < y2) {
                          if (x2 += u2 + f2 - y2, (y2 -= f2) < w2) {
                            for (w2 -= y2; C2[s++] = c2[x2++], --y2; )
                              ;
                            if (x2 = 0, f2 < w2) {
                              for (w2 -= y2 = f2; C2[s++] = c2[x2++], --y2; )
                                ;
                              x2 = s - k2, S2 = C2;
                            }
                          }
                        } else if (x2 += f2 - y2, y2 < w2) {
                          for (w2 -= y2; C2[s++] = c2[x2++], --y2; )
                            ;
                          x2 = s - k2, S2 = C2;
                        }
                        for (; 2 < w2; )
                          C2[s++] = S2[x2++], C2[s++] = S2[x2++], C2[s++] = S2[x2++], w2 -= 3;
                        w2 && (C2[s++] = S2[x2++], 1 < w2 && (C2[s++] = S2[x2++]));
                      } else {
                        for (x2 = s - k2; C2[s++] = C2[x2++], C2[s++] = C2[x2++], C2[s++] = C2[x2++], 2 < (w2 -= 3); )
                          ;
                        w2 && (C2[s++] = C2[x2++], 1 < w2 && (C2[s++] = C2[x2++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (n2 < i && s < o);
        n2 -= w2 = p2 >> 3, d2 &= (1 << (p2 -= w2 << 3)) - 1, e3.next_in = n2, e3.next_out = s, e3.avail_in = n2 < i ? i - n2 + 5 : 5 - (n2 - i), e3.avail_out = s < o ? o - s + 257 : 257 - (s - o), r3.hold = d2, r3.bits = p2;
      };
    }, {}], 49: [function(e2, t2, r2) {
      var I2 = e2("../utils/common"), O2 = e2("./adler32"), B2 = e2("./crc32"), R2 = e2("./inffast"), T2 = e2("./inftrees"), D2 = 1, F2 = 2, N2 = 0, U2 = -2, P2 = 1, n2 = 852, i = 592;
      function L2(e3) {
        return (e3 >>> 24 & 255) + (e3 >>> 8 & 65280) + ((65280 & e3) << 8) + ((255 & e3) << 24);
      }
      function s() {
        this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I2.Buf16(320), this.work = new I2.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function a(e3) {
        var t3;
        return e3 && e3.state ? (t3 = e3.state, e3.total_in = e3.total_out = t3.total = 0, e3.msg = "", t3.wrap && (e3.adler = 1 & t3.wrap), t3.mode = P2, t3.last = 0, t3.havedict = 0, t3.dmax = 32768, t3.head = null, t3.hold = 0, t3.bits = 0, t3.lencode = t3.lendyn = new I2.Buf32(n2), t3.distcode = t3.distdyn = new I2.Buf32(i), t3.sane = 1, t3.back = -1, N2) : U2;
      }
      function o(e3) {
        var t3;
        return e3 && e3.state ? ((t3 = e3.state).wsize = 0, t3.whave = 0, t3.wnext = 0, a(e3)) : U2;
      }
      function h2(e3, t3) {
        var r3, n3;
        return e3 && e3.state ? (n3 = e3.state, t3 < 0 ? (r3 = 0, t3 = -t3) : (r3 = 1 + (t3 >> 4), t3 < 48 && (t3 &= 15)), t3 && (t3 < 8 || 15 < t3) ? U2 : (null !== n3.window && n3.wbits !== t3 && (n3.window = null), n3.wrap = r3, n3.wbits = t3, o(e3))) : U2;
      }
      function u2(e3, t3) {
        var r3, n3;
        return e3 ? (n3 = new s(), (e3.state = n3).window = null, (r3 = h2(e3, t3)) !== N2 && (e3.state = null), r3) : U2;
      }
      var l2, f2, c2 = true;
      function j(e3) {
        if (c2) {
          var t3;
          for (l2 = new I2.Buf32(512), f2 = new I2.Buf32(32), t3 = 0; t3 < 144; )
            e3.lens[t3++] = 8;
          for (; t3 < 256; )
            e3.lens[t3++] = 9;
          for (; t3 < 280; )
            e3.lens[t3++] = 7;
          for (; t3 < 288; )
            e3.lens[t3++] = 8;
          for (T2(D2, e3.lens, 0, 288, l2, 0, e3.work, { bits: 9 }), t3 = 0; t3 < 32; )
            e3.lens[t3++] = 5;
          T2(F2, e3.lens, 0, 32, f2, 0, e3.work, { bits: 5 }), c2 = false;
        }
        e3.lencode = l2, e3.lenbits = 9, e3.distcode = f2, e3.distbits = 5;
      }
      function Z2(e3, t3, r3, n3) {
        var i2, s2 = e3.state;
        return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I2.Buf8(s2.wsize)), n3 >= s2.wsize ? (I2.arraySet(s2.window, t3, r3 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n3 < (i2 = s2.wsize - s2.wnext) && (i2 = n3), I2.arraySet(s2.window, t3, r3 - n3, i2, s2.wnext), (n3 -= i2) ? (I2.arraySet(s2.window, t3, r3 - n3, n3, 0), s2.wnext = n3, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
      }
      r2.inflateReset = o, r2.inflateReset2 = h2, r2.inflateResetKeep = a, r2.inflateInit = function(e3) {
        return u2(e3, 15);
      }, r2.inflateInit2 = u2, r2.inflate = function(e3, t3) {
        var r3, n3, i2, s2, a2, o2, h3, u3, l3, f3, c3, d2, p2, m2, _, g2, b2, v2, y2, w2, k2, x2, S2, z2, C2 = 0, E2 = new I2.Buf8(4), A2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!e3 || !e3.state || !e3.output || !e3.input && 0 !== e3.avail_in)
          return U2;
        12 === (r3 = e3.state).mode && (r3.mode = 13), a2 = e3.next_out, i2 = e3.output, h3 = e3.avail_out, s2 = e3.next_in, n3 = e3.input, o2 = e3.avail_in, u3 = r3.hold, l3 = r3.bits, f3 = o2, c3 = h3, x2 = N2;
        e:
          for (; ; )
            switch (r3.mode) {
              case P2:
                if (0 === r3.wrap) {
                  r3.mode = 13;
                  break;
                }
                for (; l3 < 16; ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                if (2 & r3.wrap && 35615 === u3) {
                  E2[r3.check = 0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0), l3 = u3 = 0, r3.mode = 2;
                  break;
                }
                if (r3.flags = 0, r3.head && (r3.head.done = false), !(1 & r3.wrap) || (((255 & u3) << 8) + (u3 >> 8)) % 31) {
                  e3.msg = "incorrect header check", r3.mode = 30;
                  break;
                }
                if (8 != (15 & u3)) {
                  e3.msg = "unknown compression method", r3.mode = 30;
                  break;
                }
                if (l3 -= 4, k2 = 8 + (15 & (u3 >>>= 4)), 0 === r3.wbits)
                  r3.wbits = k2;
                else if (k2 > r3.wbits) {
                  e3.msg = "invalid window size", r3.mode = 30;
                  break;
                }
                r3.dmax = 1 << k2, e3.adler = r3.check = 1, r3.mode = 512 & u3 ? 10 : 12, l3 = u3 = 0;
                break;
              case 2:
                for (; l3 < 16; ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                if (r3.flags = u3, 8 != (255 & r3.flags)) {
                  e3.msg = "unknown compression method", r3.mode = 30;
                  break;
                }
                if (57344 & r3.flags) {
                  e3.msg = "unknown header flags set", r3.mode = 30;
                  break;
                }
                r3.head && (r3.head.text = u3 >> 8 & 1), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0, r3.mode = 3;
              case 3:
                for (; l3 < 32; ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                r3.head && (r3.head.time = u3), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, E2[2] = u3 >>> 16 & 255, E2[3] = u3 >>> 24 & 255, r3.check = B2(r3.check, E2, 4, 0)), l3 = u3 = 0, r3.mode = 4;
              case 4:
                for (; l3 < 16; ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                r3.head && (r3.head.xflags = 255 & u3, r3.head.os = u3 >> 8), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0, r3.mode = 5;
              case 5:
                if (1024 & r3.flags) {
                  for (; l3 < 16; ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  r3.length = u3, r3.head && (r3.head.extra_len = u3), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0;
                } else
                  r3.head && (r3.head.extra = null);
                r3.mode = 6;
              case 6:
                if (1024 & r3.flags && (o2 < (d2 = r3.length) && (d2 = o2), d2 && (r3.head && (k2 = r3.head.extra_len - r3.length, r3.head.extra || (r3.head.extra = new Array(r3.head.extra_len)), I2.arraySet(r3.head.extra, n3, s2, d2, k2)), 512 & r3.flags && (r3.check = B2(r3.check, n3, d2, s2)), o2 -= d2, s2 += d2, r3.length -= d2), r3.length))
                  break e;
                r3.length = 0, r3.mode = 7;
              case 7:
                if (2048 & r3.flags) {
                  if (0 === o2)
                    break e;
                  for (d2 = 0; k2 = n3[s2 + d2++], r3.head && k2 && r3.length < 65536 && (r3.head.name += String.fromCharCode(k2)), k2 && d2 < o2; )
                    ;
                  if (512 & r3.flags && (r3.check = B2(r3.check, n3, d2, s2)), o2 -= d2, s2 += d2, k2)
                    break e;
                } else
                  r3.head && (r3.head.name = null);
                r3.length = 0, r3.mode = 8;
              case 8:
                if (4096 & r3.flags) {
                  if (0 === o2)
                    break e;
                  for (d2 = 0; k2 = n3[s2 + d2++], r3.head && k2 && r3.length < 65536 && (r3.head.comment += String.fromCharCode(k2)), k2 && d2 < o2; )
                    ;
                  if (512 & r3.flags && (r3.check = B2(r3.check, n3, d2, s2)), o2 -= d2, s2 += d2, k2)
                    break e;
                } else
                  r3.head && (r3.head.comment = null);
                r3.mode = 9;
              case 9:
                if (512 & r3.flags) {
                  for (; l3 < 16; ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  if (u3 !== (65535 & r3.check)) {
                    e3.msg = "header crc mismatch", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.head && (r3.head.hcrc = r3.flags >> 9 & 1, r3.head.done = true), e3.adler = r3.check = 0, r3.mode = 12;
                break;
              case 10:
                for (; l3 < 32; ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                e3.adler = r3.check = L2(u3), l3 = u3 = 0, r3.mode = 11;
              case 11:
                if (0 === r3.havedict)
                  return e3.next_out = a2, e3.avail_out = h3, e3.next_in = s2, e3.avail_in = o2, r3.hold = u3, r3.bits = l3, 2;
                e3.adler = r3.check = 1, r3.mode = 12;
              case 12:
                if (5 === t3 || 6 === t3)
                  break e;
              case 13:
                if (r3.last) {
                  u3 >>>= 7 & l3, l3 -= 7 & l3, r3.mode = 27;
                  break;
                }
                for (; l3 < 3; ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                switch (r3.last = 1 & u3, l3 -= 1, 3 & (u3 >>>= 1)) {
                  case 0:
                    r3.mode = 14;
                    break;
                  case 1:
                    if (j(r3), r3.mode = 20, 6 !== t3)
                      break;
                    u3 >>>= 2, l3 -= 2;
                    break e;
                  case 2:
                    r3.mode = 17;
                    break;
                  case 3:
                    e3.msg = "invalid block type", r3.mode = 30;
                }
                u3 >>>= 2, l3 -= 2;
                break;
              case 14:
                for (u3 >>>= 7 & l3, l3 -= 7 & l3; l3 < 32; ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                if ((65535 & u3) != (u3 >>> 16 ^ 65535)) {
                  e3.msg = "invalid stored block lengths", r3.mode = 30;
                  break;
                }
                if (r3.length = 65535 & u3, l3 = u3 = 0, r3.mode = 15, 6 === t3)
                  break e;
              case 15:
                r3.mode = 16;
              case 16:
                if (d2 = r3.length) {
                  if (o2 < d2 && (d2 = o2), h3 < d2 && (d2 = h3), 0 === d2)
                    break e;
                  I2.arraySet(i2, n3, s2, d2, a2), o2 -= d2, s2 += d2, h3 -= d2, a2 += d2, r3.length -= d2;
                  break;
                }
                r3.mode = 12;
                break;
              case 17:
                for (; l3 < 14; ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                if (r3.nlen = 257 + (31 & u3), u3 >>>= 5, l3 -= 5, r3.ndist = 1 + (31 & u3), u3 >>>= 5, l3 -= 5, r3.ncode = 4 + (15 & u3), u3 >>>= 4, l3 -= 4, 286 < r3.nlen || 30 < r3.ndist) {
                  e3.msg = "too many length or distance symbols", r3.mode = 30;
                  break;
                }
                r3.have = 0, r3.mode = 18;
              case 18:
                for (; r3.have < r3.ncode; ) {
                  for (; l3 < 3; ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  r3.lens[A2[r3.have++]] = 7 & u3, u3 >>>= 3, l3 -= 3;
                }
                for (; r3.have < 19; )
                  r3.lens[A2[r3.have++]] = 0;
                if (r3.lencode = r3.lendyn, r3.lenbits = 7, S2 = { bits: r3.lenbits }, x2 = T2(0, r3.lens, 0, 19, r3.lencode, 0, r3.work, S2), r3.lenbits = S2.bits, x2) {
                  e3.msg = "invalid code lengths set", r3.mode = 30;
                  break;
                }
                r3.have = 0, r3.mode = 19;
              case 19:
                for (; r3.have < r3.nlen + r3.ndist; ) {
                  for (; g2 = (C2 = r3.lencode[u3 & (1 << r3.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_ = C2 >>> 24) <= l3); ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  if (b2 < 16)
                    u3 >>>= _, l3 -= _, r3.lens[r3.have++] = b2;
                  else {
                    if (16 === b2) {
                      for (z2 = _ + 2; l3 < z2; ) {
                        if (0 === o2)
                          break e;
                        o2--, u3 += n3[s2++] << l3, l3 += 8;
                      }
                      if (u3 >>>= _, l3 -= _, 0 === r3.have) {
                        e3.msg = "invalid bit length repeat", r3.mode = 30;
                        break;
                      }
                      k2 = r3.lens[r3.have - 1], d2 = 3 + (3 & u3), u3 >>>= 2, l3 -= 2;
                    } else if (17 === b2) {
                      for (z2 = _ + 3; l3 < z2; ) {
                        if (0 === o2)
                          break e;
                        o2--, u3 += n3[s2++] << l3, l3 += 8;
                      }
                      l3 -= _, k2 = 0, d2 = 3 + (7 & (u3 >>>= _)), u3 >>>= 3, l3 -= 3;
                    } else {
                      for (z2 = _ + 7; l3 < z2; ) {
                        if (0 === o2)
                          break e;
                        o2--, u3 += n3[s2++] << l3, l3 += 8;
                      }
                      l3 -= _, k2 = 0, d2 = 11 + (127 & (u3 >>>= _)), u3 >>>= 7, l3 -= 7;
                    }
                    if (r3.have + d2 > r3.nlen + r3.ndist) {
                      e3.msg = "invalid bit length repeat", r3.mode = 30;
                      break;
                    }
                    for (; d2--; )
                      r3.lens[r3.have++] = k2;
                  }
                }
                if (30 === r3.mode)
                  break;
                if (0 === r3.lens[256]) {
                  e3.msg = "invalid code -- missing end-of-block", r3.mode = 30;
                  break;
                }
                if (r3.lenbits = 9, S2 = { bits: r3.lenbits }, x2 = T2(D2, r3.lens, 0, r3.nlen, r3.lencode, 0, r3.work, S2), r3.lenbits = S2.bits, x2) {
                  e3.msg = "invalid literal/lengths set", r3.mode = 30;
                  break;
                }
                if (r3.distbits = 6, r3.distcode = r3.distdyn, S2 = { bits: r3.distbits }, x2 = T2(F2, r3.lens, r3.nlen, r3.ndist, r3.distcode, 0, r3.work, S2), r3.distbits = S2.bits, x2) {
                  e3.msg = "invalid distances set", r3.mode = 30;
                  break;
                }
                if (r3.mode = 20, 6 === t3)
                  break e;
              case 20:
                r3.mode = 21;
              case 21:
                if (6 <= o2 && 258 <= h3) {
                  e3.next_out = a2, e3.avail_out = h3, e3.next_in = s2, e3.avail_in = o2, r3.hold = u3, r3.bits = l3, R2(e3, c3), a2 = e3.next_out, i2 = e3.output, h3 = e3.avail_out, s2 = e3.next_in, n3 = e3.input, o2 = e3.avail_in, u3 = r3.hold, l3 = r3.bits, 12 === r3.mode && (r3.back = -1);
                  break;
                }
                for (r3.back = 0; g2 = (C2 = r3.lencode[u3 & (1 << r3.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_ = C2 >>> 24) <= l3); ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                if (g2 && 0 == (240 & g2)) {
                  for (v2 = _, y2 = g2, w2 = b2; g2 = (C2 = r3.lencode[w2 + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b2 = 65535 & C2, !(v2 + (_ = C2 >>> 24) <= l3); ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  u3 >>>= v2, l3 -= v2, r3.back += v2;
                }
                if (u3 >>>= _, l3 -= _, r3.back += _, r3.length = b2, 0 === g2) {
                  r3.mode = 26;
                  break;
                }
                if (32 & g2) {
                  r3.back = -1, r3.mode = 12;
                  break;
                }
                if (64 & g2) {
                  e3.msg = "invalid literal/length code", r3.mode = 30;
                  break;
                }
                r3.extra = 15 & g2, r3.mode = 22;
              case 22:
                if (r3.extra) {
                  for (z2 = r3.extra; l3 < z2; ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  r3.length += u3 & (1 << r3.extra) - 1, u3 >>>= r3.extra, l3 -= r3.extra, r3.back += r3.extra;
                }
                r3.was = r3.length, r3.mode = 23;
              case 23:
                for (; g2 = (C2 = r3.distcode[u3 & (1 << r3.distbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_ = C2 >>> 24) <= l3); ) {
                  if (0 === o2)
                    break e;
                  o2--, u3 += n3[s2++] << l3, l3 += 8;
                }
                if (0 == (240 & g2)) {
                  for (v2 = _, y2 = g2, w2 = b2; g2 = (C2 = r3.distcode[w2 + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b2 = 65535 & C2, !(v2 + (_ = C2 >>> 24) <= l3); ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  u3 >>>= v2, l3 -= v2, r3.back += v2;
                }
                if (u3 >>>= _, l3 -= _, r3.back += _, 64 & g2) {
                  e3.msg = "invalid distance code", r3.mode = 30;
                  break;
                }
                r3.offset = b2, r3.extra = 15 & g2, r3.mode = 24;
              case 24:
                if (r3.extra) {
                  for (z2 = r3.extra; l3 < z2; ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  r3.offset += u3 & (1 << r3.extra) - 1, u3 >>>= r3.extra, l3 -= r3.extra, r3.back += r3.extra;
                }
                if (r3.offset > r3.dmax) {
                  e3.msg = "invalid distance too far back", r3.mode = 30;
                  break;
                }
                r3.mode = 25;
              case 25:
                if (0 === h3)
                  break e;
                if (d2 = c3 - h3, r3.offset > d2) {
                  if ((d2 = r3.offset - d2) > r3.whave && r3.sane) {
                    e3.msg = "invalid distance too far back", r3.mode = 30;
                    break;
                  }
                  p2 = d2 > r3.wnext ? (d2 -= r3.wnext, r3.wsize - d2) : r3.wnext - d2, d2 > r3.length && (d2 = r3.length), m2 = r3.window;
                } else
                  m2 = i2, p2 = a2 - r3.offset, d2 = r3.length;
                for (h3 < d2 && (d2 = h3), h3 -= d2, r3.length -= d2; i2[a2++] = m2[p2++], --d2; )
                  ;
                0 === r3.length && (r3.mode = 21);
                break;
              case 26:
                if (0 === h3)
                  break e;
                i2[a2++] = r3.length, h3--, r3.mode = 21;
                break;
              case 27:
                if (r3.wrap) {
                  for (; l3 < 32; ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 |= n3[s2++] << l3, l3 += 8;
                  }
                  if (c3 -= h3, e3.total_out += c3, r3.total += c3, c3 && (e3.adler = r3.check = r3.flags ? B2(r3.check, i2, c3, a2 - c3) : O2(r3.check, i2, c3, a2 - c3)), c3 = h3, (r3.flags ? u3 : L2(u3)) !== r3.check) {
                    e3.msg = "incorrect data check", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.mode = 28;
              case 28:
                if (r3.wrap && r3.flags) {
                  for (; l3 < 32; ) {
                    if (0 === o2)
                      break e;
                    o2--, u3 += n3[s2++] << l3, l3 += 8;
                  }
                  if (u3 !== (4294967295 & r3.total)) {
                    e3.msg = "incorrect length check", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.mode = 29;
              case 29:
                x2 = 1;
                break e;
              case 30:
                x2 = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return U2;
            }
        return e3.next_out = a2, e3.avail_out = h3, e3.next_in = s2, e3.avail_in = o2, r3.hold = u3, r3.bits = l3, (r3.wsize || c3 !== e3.avail_out && r3.mode < 30 && (r3.mode < 27 || 4 !== t3)) && Z2(e3, e3.output, e3.next_out, c3 - e3.avail_out) ? (r3.mode = 31, -4) : (f3 -= e3.avail_in, c3 -= e3.avail_out, e3.total_in += f3, e3.total_out += c3, r3.total += c3, r3.wrap && c3 && (e3.adler = r3.check = r3.flags ? B2(r3.check, i2, c3, e3.next_out - c3) : O2(r3.check, i2, c3, e3.next_out - c3)), e3.data_type = r3.bits + (r3.last ? 64 : 0) + (12 === r3.mode ? 128 : 0) + (20 === r3.mode || 15 === r3.mode ? 256 : 0), (0 == f3 && 0 === c3 || 4 === t3) && x2 === N2 && (x2 = -5), x2);
      }, r2.inflateEnd = function(e3) {
        if (!e3 || !e3.state)
          return U2;
        var t3 = e3.state;
        return t3.window && (t3.window = null), e3.state = null, N2;
      }, r2.inflateGetHeader = function(e3, t3) {
        var r3;
        return e3 && e3.state ? 0 == (2 & (r3 = e3.state).wrap) ? U2 : ((r3.head = t3).done = false, N2) : U2;
      }, r2.inflateSetDictionary = function(e3, t3) {
        var r3, n3 = t3.length;
        return e3 && e3.state ? 0 !== (r3 = e3.state).wrap && 11 !== r3.mode ? U2 : 11 === r3.mode && O2(1, t3, n3, 0) !== r3.check ? -3 : Z2(e3, t3, n3, n3) ? (r3.mode = 31, -4) : (r3.havedict = 1, N2) : U2;
      }, r2.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e2, t2, r2) {
      var D2 = e2("../utils/common"), F2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N2 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U2 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P2 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      t2.exports = function(e3, t3, r3, n2, i, s, a, o) {
        var h2, u2, l2, f2, c2, d2, p2, m2, _, g2 = o.bits, b2 = 0, v2 = 0, y2 = 0, w2 = 0, k2 = 0, x2 = 0, S2 = 0, z2 = 0, C2 = 0, E2 = 0, A2 = null, I2 = 0, O2 = new D2.Buf16(16), B2 = new D2.Buf16(16), R2 = null, T2 = 0;
        for (b2 = 0; b2 <= 15; b2++)
          O2[b2] = 0;
        for (v2 = 0; v2 < n2; v2++)
          O2[t3[r3 + v2]]++;
        for (k2 = g2, w2 = 15; 1 <= w2 && 0 === O2[w2]; w2--)
          ;
        if (w2 < k2 && (k2 = w2), 0 === w2)
          return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
        for (y2 = 1; y2 < w2 && 0 === O2[y2]; y2++)
          ;
        for (k2 < y2 && (k2 = y2), b2 = z2 = 1; b2 <= 15; b2++)
          if (z2 <<= 1, (z2 -= O2[b2]) < 0)
            return -1;
        if (0 < z2 && (0 === e3 || 1 !== w2))
          return -1;
        for (B2[1] = 0, b2 = 1; b2 < 15; b2++)
          B2[b2 + 1] = B2[b2] + O2[b2];
        for (v2 = 0; v2 < n2; v2++)
          0 !== t3[r3 + v2] && (a[B2[t3[r3 + v2]]++] = v2);
        if (d2 = 0 === e3 ? (A2 = R2 = a, 19) : 1 === e3 ? (A2 = F2, I2 -= 257, R2 = N2, T2 -= 257, 256) : (A2 = U2, R2 = P2, -1), b2 = y2, c2 = s, S2 = v2 = E2 = 0, l2 = -1, f2 = (C2 = 1 << (x2 = k2)) - 1, 1 === e3 && 852 < C2 || 2 === e3 && 592 < C2)
          return 1;
        for (; ; ) {
          for (p2 = b2 - S2, _ = a[v2] < d2 ? (m2 = 0, a[v2]) : a[v2] > d2 ? (m2 = R2[T2 + a[v2]], A2[I2 + a[v2]]) : (m2 = 96, 0), h2 = 1 << b2 - S2, y2 = u2 = 1 << x2; i[c2 + (E2 >> S2) + (u2 -= h2)] = p2 << 24 | m2 << 16 | _ | 0, 0 !== u2; )
            ;
          for (h2 = 1 << b2 - 1; E2 & h2; )
            h2 >>= 1;
          if (0 !== h2 ? (E2 &= h2 - 1, E2 += h2) : E2 = 0, v2++, 0 == --O2[b2]) {
            if (b2 === w2)
              break;
            b2 = t3[r3 + a[v2]];
          }
          if (k2 < b2 && (E2 & f2) !== l2) {
            for (0 === S2 && (S2 = k2), c2 += y2, z2 = 1 << (x2 = b2 - S2); x2 + S2 < w2 && !((z2 -= O2[x2 + S2]) <= 0); )
              x2++, z2 <<= 1;
            if (C2 += 1 << x2, 1 === e3 && 852 < C2 || 2 === e3 && 592 < C2)
              return 1;
            i[l2 = E2 & f2] = k2 << 24 | x2 << 16 | c2 - s | 0;
          }
        }
        return 0 !== E2 && (i[c2 + E2] = b2 - S2 << 24 | 64 << 16 | 0), o.bits = k2, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e2, t2, r2) {
      t2.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e2, t2, r2) {
      var i = e2("../utils/common"), o = 0, h2 = 1;
      function n2(e3) {
        for (var t3 = e3.length; 0 <= --t3; )
          e3[t3] = 0;
      }
      var s = 0, a = 29, u2 = 256, l2 = u2 + 1 + a, f2 = 30, c2 = 19, _ = 2 * l2 + 1, g2 = 15, d2 = 16, p2 = 7, m2 = 256, b2 = 16, v2 = 17, y2 = 18, w2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k2 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z2 = new Array(2 * (l2 + 2));
      n2(z2);
      var C2 = new Array(2 * f2);
      n2(C2);
      var E2 = new Array(512);
      n2(E2);
      var A2 = new Array(256);
      n2(A2);
      var I2 = new Array(a);
      n2(I2);
      var O2, B2, R2, T2 = new Array(f2);
      function D2(e3, t3, r3, n3, i2) {
        this.static_tree = e3, this.extra_bits = t3, this.extra_base = r3, this.elems = n3, this.max_length = i2, this.has_stree = e3 && e3.length;
      }
      function F2(e3, t3) {
        this.dyn_tree = e3, this.max_code = 0, this.stat_desc = t3;
      }
      function N2(e3) {
        return e3 < 256 ? E2[e3] : E2[256 + (e3 >>> 7)];
      }
      function U2(e3, t3) {
        e3.pending_buf[e3.pending++] = 255 & t3, e3.pending_buf[e3.pending++] = t3 >>> 8 & 255;
      }
      function P2(e3, t3, r3) {
        e3.bi_valid > d2 - r3 ? (e3.bi_buf |= t3 << e3.bi_valid & 65535, U2(e3, e3.bi_buf), e3.bi_buf = t3 >> d2 - e3.bi_valid, e3.bi_valid += r3 - d2) : (e3.bi_buf |= t3 << e3.bi_valid & 65535, e3.bi_valid += r3);
      }
      function L2(e3, t3, r3) {
        P2(e3, r3[2 * t3], r3[2 * t3 + 1]);
      }
      function j(e3, t3) {
        for (var r3 = 0; r3 |= 1 & e3, e3 >>>= 1, r3 <<= 1, 0 < --t3; )
          ;
        return r3 >>> 1;
      }
      function Z2(e3, t3, r3) {
        var n3, i2, s2 = new Array(g2 + 1), a2 = 0;
        for (n3 = 1; n3 <= g2; n3++)
          s2[n3] = a2 = a2 + r3[n3 - 1] << 1;
        for (i2 = 0; i2 <= t3; i2++) {
          var o2 = e3[2 * i2 + 1];
          0 !== o2 && (e3[2 * i2] = j(s2[o2]++, o2));
        }
      }
      function W2(e3) {
        var t3;
        for (t3 = 0; t3 < l2; t3++)
          e3.dyn_ltree[2 * t3] = 0;
        for (t3 = 0; t3 < f2; t3++)
          e3.dyn_dtree[2 * t3] = 0;
        for (t3 = 0; t3 < c2; t3++)
          e3.bl_tree[2 * t3] = 0;
        e3.dyn_ltree[2 * m2] = 1, e3.opt_len = e3.static_len = 0, e3.last_lit = e3.matches = 0;
      }
      function M2(e3) {
        8 < e3.bi_valid ? U2(e3, e3.bi_buf) : 0 < e3.bi_valid && (e3.pending_buf[e3.pending++] = e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0;
      }
      function H2(e3, t3, r3, n3) {
        var i2 = 2 * t3, s2 = 2 * r3;
        return e3[i2] < e3[s2] || e3[i2] === e3[s2] && n3[t3] <= n3[r3];
      }
      function G2(e3, t3, r3) {
        for (var n3 = e3.heap[r3], i2 = r3 << 1; i2 <= e3.heap_len && (i2 < e3.heap_len && H2(t3, e3.heap[i2 + 1], e3.heap[i2], e3.depth) && i2++, !H2(t3, n3, e3.heap[i2], e3.depth)); )
          e3.heap[r3] = e3.heap[i2], r3 = i2, i2 <<= 1;
        e3.heap[r3] = n3;
      }
      function K2(e3, t3, r3) {
        var n3, i2, s2, a2, o2 = 0;
        if (0 !== e3.last_lit)
          for (; n3 = e3.pending_buf[e3.d_buf + 2 * o2] << 8 | e3.pending_buf[e3.d_buf + 2 * o2 + 1], i2 = e3.pending_buf[e3.l_buf + o2], o2++, 0 === n3 ? L2(e3, i2, t3) : (L2(e3, (s2 = A2[i2]) + u2 + 1, t3), 0 !== (a2 = w2[s2]) && P2(e3, i2 -= I2[s2], a2), L2(e3, s2 = N2(--n3), r3), 0 !== (a2 = k2[s2]) && P2(e3, n3 -= T2[s2], a2)), o2 < e3.last_lit; )
            ;
        L2(e3, m2, t3);
      }
      function Y2(e3, t3) {
        var r3, n3, i2, s2 = t3.dyn_tree, a2 = t3.stat_desc.static_tree, o2 = t3.stat_desc.has_stree, h3 = t3.stat_desc.elems, u3 = -1;
        for (e3.heap_len = 0, e3.heap_max = _, r3 = 0; r3 < h3; r3++)
          0 !== s2[2 * r3] ? (e3.heap[++e3.heap_len] = u3 = r3, e3.depth[r3] = 0) : s2[2 * r3 + 1] = 0;
        for (; e3.heap_len < 2; )
          s2[2 * (i2 = e3.heap[++e3.heap_len] = u3 < 2 ? ++u3 : 0)] = 1, e3.depth[i2] = 0, e3.opt_len--, o2 && (e3.static_len -= a2[2 * i2 + 1]);
        for (t3.max_code = u3, r3 = e3.heap_len >> 1; 1 <= r3; r3--)
          G2(e3, s2, r3);
        for (i2 = h3; r3 = e3.heap[1], e3.heap[1] = e3.heap[e3.heap_len--], G2(e3, s2, 1), n3 = e3.heap[1], e3.heap[--e3.heap_max] = r3, e3.heap[--e3.heap_max] = n3, s2[2 * i2] = s2[2 * r3] + s2[2 * n3], e3.depth[i2] = (e3.depth[r3] >= e3.depth[n3] ? e3.depth[r3] : e3.depth[n3]) + 1, s2[2 * r3 + 1] = s2[2 * n3 + 1] = i2, e3.heap[1] = i2++, G2(e3, s2, 1), 2 <= e3.heap_len; )
          ;
        e3.heap[--e3.heap_max] = e3.heap[1], function(e4, t4) {
          var r4, n4, i3, s3, a3, o3, h4 = t4.dyn_tree, u4 = t4.max_code, l3 = t4.stat_desc.static_tree, f3 = t4.stat_desc.has_stree, c3 = t4.stat_desc.extra_bits, d3 = t4.stat_desc.extra_base, p3 = t4.stat_desc.max_length, m3 = 0;
          for (s3 = 0; s3 <= g2; s3++)
            e4.bl_count[s3] = 0;
          for (h4[2 * e4.heap[e4.heap_max] + 1] = 0, r4 = e4.heap_max + 1; r4 < _; r4++)
            p3 < (s3 = h4[2 * h4[2 * (n4 = e4.heap[r4]) + 1] + 1] + 1) && (s3 = p3, m3++), h4[2 * n4 + 1] = s3, u4 < n4 || (e4.bl_count[s3]++, a3 = 0, d3 <= n4 && (a3 = c3[n4 - d3]), o3 = h4[2 * n4], e4.opt_len += o3 * (s3 + a3), f3 && (e4.static_len += o3 * (l3[2 * n4 + 1] + a3)));
          if (0 !== m3) {
            do {
              for (s3 = p3 - 1; 0 === e4.bl_count[s3]; )
                s3--;
              e4.bl_count[s3]--, e4.bl_count[s3 + 1] += 2, e4.bl_count[p3]--, m3 -= 2;
            } while (0 < m3);
            for (s3 = p3; 0 !== s3; s3--)
              for (n4 = e4.bl_count[s3]; 0 !== n4; )
                u4 < (i3 = e4.heap[--r4]) || (h4[2 * i3 + 1] !== s3 && (e4.opt_len += (s3 - h4[2 * i3 + 1]) * h4[2 * i3], h4[2 * i3 + 1] = s3), n4--);
          }
        }(e3, t3), Z2(s2, u3, e3.bl_count);
      }
      function X2(e3, t3, r3) {
        var n3, i2, s2 = -1, a2 = t3[1], o2 = 0, h3 = 7, u3 = 4;
        for (0 === a2 && (h3 = 138, u3 = 3), t3[2 * (r3 + 1) + 1] = 65535, n3 = 0; n3 <= r3; n3++)
          i2 = a2, a2 = t3[2 * (n3 + 1) + 1], ++o2 < h3 && i2 === a2 || (o2 < u3 ? e3.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e3.bl_tree[2 * i2]++, e3.bl_tree[2 * b2]++) : o2 <= 10 ? e3.bl_tree[2 * v2]++ : e3.bl_tree[2 * y2]++, s2 = i2, u3 = (o2 = 0) === a2 ? (h3 = 138, 3) : i2 === a2 ? (h3 = 6, 3) : (h3 = 7, 4));
      }
      function V2(e3, t3, r3) {
        var n3, i2, s2 = -1, a2 = t3[1], o2 = 0, h3 = 7, u3 = 4;
        for (0 === a2 && (h3 = 138, u3 = 3), n3 = 0; n3 <= r3; n3++)
          if (i2 = a2, a2 = t3[2 * (n3 + 1) + 1], !(++o2 < h3 && i2 === a2)) {
            if (o2 < u3)
              for (; L2(e3, i2, e3.bl_tree), 0 != --o2; )
                ;
            else
              0 !== i2 ? (i2 !== s2 && (L2(e3, i2, e3.bl_tree), o2--), L2(e3, b2, e3.bl_tree), P2(e3, o2 - 3, 2)) : o2 <= 10 ? (L2(e3, v2, e3.bl_tree), P2(e3, o2 - 3, 3)) : (L2(e3, y2, e3.bl_tree), P2(e3, o2 - 11, 7));
            s2 = i2, u3 = (o2 = 0) === a2 ? (h3 = 138, 3) : i2 === a2 ? (h3 = 6, 3) : (h3 = 7, 4);
          }
      }
      n2(T2);
      var q2 = false;
      function J2(e3, t3, r3, n3) {
        P2(e3, (s << 1) + (n3 ? 1 : 0), 3), function(e4, t4, r4, n4) {
          M2(e4), n4 && (U2(e4, r4), U2(e4, ~r4)), i.arraySet(e4.pending_buf, e4.window, t4, r4, e4.pending), e4.pending += r4;
        }(e3, t3, r3, true);
      }
      r2._tr_init = function(e3) {
        q2 || (function() {
          var e4, t3, r3, n3, i2, s2 = new Array(g2 + 1);
          for (n3 = r3 = 0; n3 < a - 1; n3++)
            for (I2[n3] = r3, e4 = 0; e4 < 1 << w2[n3]; e4++)
              A2[r3++] = n3;
          for (A2[r3 - 1] = n3, n3 = i2 = 0; n3 < 16; n3++)
            for (T2[n3] = i2, e4 = 0; e4 < 1 << k2[n3]; e4++)
              E2[i2++] = n3;
          for (i2 >>= 7; n3 < f2; n3++)
            for (T2[n3] = i2 << 7, e4 = 0; e4 < 1 << k2[n3] - 7; e4++)
              E2[256 + i2++] = n3;
          for (t3 = 0; t3 <= g2; t3++)
            s2[t3] = 0;
          for (e4 = 0; e4 <= 143; )
            z2[2 * e4 + 1] = 8, e4++, s2[8]++;
          for (; e4 <= 255; )
            z2[2 * e4 + 1] = 9, e4++, s2[9]++;
          for (; e4 <= 279; )
            z2[2 * e4 + 1] = 7, e4++, s2[7]++;
          for (; e4 <= 287; )
            z2[2 * e4 + 1] = 8, e4++, s2[8]++;
          for (Z2(z2, l2 + 1, s2), e4 = 0; e4 < f2; e4++)
            C2[2 * e4 + 1] = 5, C2[2 * e4] = j(e4, 5);
          O2 = new D2(z2, w2, u2 + 1, l2, g2), B2 = new D2(C2, k2, 0, f2, g2), R2 = new D2(new Array(0), x2, 0, c2, p2);
        }(), q2 = true), e3.l_desc = new F2(e3.dyn_ltree, O2), e3.d_desc = new F2(e3.dyn_dtree, B2), e3.bl_desc = new F2(e3.bl_tree, R2), e3.bi_buf = 0, e3.bi_valid = 0, W2(e3);
      }, r2._tr_stored_block = J2, r2._tr_flush_block = function(e3, t3, r3, n3) {
        var i2, s2, a2 = 0;
        0 < e3.level ? (2 === e3.strm.data_type && (e3.strm.data_type = function(e4) {
          var t4, r4 = 4093624447;
          for (t4 = 0; t4 <= 31; t4++, r4 >>>= 1)
            if (1 & r4 && 0 !== e4.dyn_ltree[2 * t4])
              return o;
          if (0 !== e4.dyn_ltree[18] || 0 !== e4.dyn_ltree[20] || 0 !== e4.dyn_ltree[26])
            return h2;
          for (t4 = 32; t4 < u2; t4++)
            if (0 !== e4.dyn_ltree[2 * t4])
              return h2;
          return o;
        }(e3)), Y2(e3, e3.l_desc), Y2(e3, e3.d_desc), a2 = function(e4) {
          var t4;
          for (X2(e4, e4.dyn_ltree, e4.l_desc.max_code), X2(e4, e4.dyn_dtree, e4.d_desc.max_code), Y2(e4, e4.bl_desc), t4 = c2 - 1; 3 <= t4 && 0 === e4.bl_tree[2 * S2[t4] + 1]; t4--)
            ;
          return e4.opt_len += 3 * (t4 + 1) + 5 + 5 + 4, t4;
        }(e3), i2 = e3.opt_len + 3 + 7 >>> 3, (s2 = e3.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r3 + 5, r3 + 4 <= i2 && -1 !== t3 ? J2(e3, t3, r3, n3) : 4 === e3.strategy || s2 === i2 ? (P2(e3, 2 + (n3 ? 1 : 0), 3), K2(e3, z2, C2)) : (P2(e3, 4 + (n3 ? 1 : 0), 3), function(e4, t4, r4, n4) {
          var i3;
          for (P2(e4, t4 - 257, 5), P2(e4, r4 - 1, 5), P2(e4, n4 - 4, 4), i3 = 0; i3 < n4; i3++)
            P2(e4, e4.bl_tree[2 * S2[i3] + 1], 3);
          V2(e4, e4.dyn_ltree, t4 - 1), V2(e4, e4.dyn_dtree, r4 - 1);
        }(e3, e3.l_desc.max_code + 1, e3.d_desc.max_code + 1, a2 + 1), K2(e3, e3.dyn_ltree, e3.dyn_dtree)), W2(e3), n3 && M2(e3);
      }, r2._tr_tally = function(e3, t3, r3) {
        return e3.pending_buf[e3.d_buf + 2 * e3.last_lit] = t3 >>> 8 & 255, e3.pending_buf[e3.d_buf + 2 * e3.last_lit + 1] = 255 & t3, e3.pending_buf[e3.l_buf + e3.last_lit] = 255 & r3, e3.last_lit++, 0 === t3 ? e3.dyn_ltree[2 * r3]++ : (e3.matches++, t3--, e3.dyn_ltree[2 * (A2[r3] + u2 + 1)]++, e3.dyn_dtree[2 * N2(t3)]++), e3.last_lit === e3.lit_bufsize - 1;
      }, r2._tr_align = function(e3) {
        P2(e3, 2, 3), L2(e3, m2, z2), function(e4) {
          16 === e4.bi_valid ? (U2(e4, e4.bi_buf), e4.bi_buf = 0, e4.bi_valid = 0) : 8 <= e4.bi_valid && (e4.pending_buf[e4.pending++] = 255 & e4.bi_buf, e4.bi_buf >>= 8, e4.bi_valid -= 8);
        }(e3);
      };
    }, { "../utils/common": 41 }], 53: [function(e2, t2, r2) {
      t2.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e2, t2, r2) {
      (function(e3) {
        !function(r3, n2) {
          if (!r3.setImmediate) {
            var i, s, t3, a, o = 1, h2 = {}, u2 = false, l2 = r3.document, e4 = Object.getPrototypeOf && Object.getPrototypeOf(r3);
            e4 = e4 && e4.setTimeout ? e4 : r3, i = "[object process]" === {}.toString.call(r3.process) ? function(e5) {
              process.nextTick(function() {
                c2(e5);
              });
            } : function() {
              if (r3.postMessage && !r3.importScripts) {
                var e5 = true, t4 = r3.onmessage;
                return r3.onmessage = function() {
                  e5 = false;
                }, r3.postMessage("", "*"), r3.onmessage = t4, e5;
              }
            }() ? (a = "setImmediate$" + Math.random() + "$", r3.addEventListener ? r3.addEventListener("message", d2, false) : r3.attachEvent("onmessage", d2), function(e5) {
              r3.postMessage(a + e5, "*");
            }) : r3.MessageChannel ? ((t3 = new MessageChannel()).port1.onmessage = function(e5) {
              c2(e5.data);
            }, function(e5) {
              t3.port2.postMessage(e5);
            }) : l2 && "onreadystatechange" in l2.createElement("script") ? (s = l2.documentElement, function(e5) {
              var t4 = l2.createElement("script");
              t4.onreadystatechange = function() {
                c2(e5), t4.onreadystatechange = null, s.removeChild(t4), t4 = null;
              }, s.appendChild(t4);
            }) : function(e5) {
              setTimeout(c2, 0, e5);
            }, e4.setImmediate = function(e5) {
              "function" != typeof e5 && (e5 = new Function("" + e5));
              for (var t4 = new Array(arguments.length - 1), r4 = 0; r4 < t4.length; r4++)
                t4[r4] = arguments[r4 + 1];
              var n3 = { callback: e5, args: t4 };
              return h2[o] = n3, i(o), o++;
            }, e4.clearImmediate = f2;
          }
          function f2(e5) {
            delete h2[e5];
          }
          function c2(e5) {
            if (u2)
              setTimeout(c2, 0, e5);
            else {
              var t4 = h2[e5];
              if (t4) {
                u2 = true;
                try {
                  !function(e6) {
                    var t5 = e6.callback, r4 = e6.args;
                    switch (r4.length) {
                      case 0:
                        t5();
                        break;
                      case 1:
                        t5(r4[0]);
                        break;
                      case 2:
                        t5(r4[0], r4[1]);
                        break;
                      case 3:
                        t5(r4[0], r4[1], r4[2]);
                        break;
                      default:
                        t5.apply(n2, r4);
                    }
                  }(t4);
                } finally {
                  f2(e5), u2 = false;
                }
              }
            }
          }
          function d2(e5) {
            e5.source === r3 && "string" == typeof e5.data && 0 === e5.data.indexOf(a) && c2(+e5.data.slice(a.length));
          }
        }("undefined" == typeof self ? void 0 === e3 ? this : e3 : self);
      }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(jszip_min);
var JSZip = jszip_min.exports;
function Workspace() {
  const assets = AssetsContainer.useContainer();
  const [editor, setEditor] = EditorContainer.useContainer();
  const refView = react.exports.useRef(null);
  react.exports.useEffect(() => {
    if (refView.current) {
      setEditor(index$1.init(refView.current, []));
    }
    return () => editor == null ? void 0 : editor.destroy();
  }, [refView.current]);
  react.exports.useEffect(() => {
    function loadBaseImage(name) {
      return __async(this, null, function* () {
        const file = yield (yield fetch("./assets/" + name)).blob();
        assets.baseImages.add(file, name);
      });
    }
    function loadMatImage(name) {
      return __async(this, null, function* () {
        const file = yield (yield fetch("./assets/" + name)).blob();
        assets.matImages.add(file, name);
      });
    }
    loadBaseImage("mask11.png");
    loadBaseImage("mask12.png");
    loadBaseImage("mask21.png");
    loadBaseImage("mask22.png");
    loadBaseImage("mask31.png");
    loadBaseImage("mask32.png");
    loadMatImage("fabric1.png");
    loadMatImage("fabric2.png");
    loadMatImage("fabric3.png");
  }, []);
  function exportArea(area) {
    const options = {
      id: area.id,
      color: area.color,
      fixed: area.fixed,
      autoFit: area.autoFit,
      x: area.position.x,
      y: area.position.y
    };
    if (area.type === "point") {
      return __spreadProps(__spreadValues({}, options), {
        type: area.type,
        width: area.resizeW,
        height: area.resizeH,
        rotation: area.rotation
      });
    }
    if (area.type === "circle") {
      return __spreadProps(__spreadValues({}, options), {
        type: area.type,
        radius: area.radius
      });
    }
    if (area.type === "rect") {
      return __spreadProps(__spreadValues({}, options), {
        type: area.type,
        width: area.width,
        height: area.height
      });
    }
    throw Error("Invalid area");
  }
  function exportLayer(layer) {
    const base = assets.baseImages.files.find((file) => file.blobURL === layer.baseImage);
    const mat = assets.matImages.files.find((file) => file.blobURL === layer.material.image);
    return {
      id: layer.id,
      image: base ? `base/${base.name}` : "",
      material: mat ? `mat/${mat.name}` : "",
      color: layer.material.color
    };
  }
  function onExport() {
    const zip = new JSZip();
    const baseFolder = zip.folder("base");
    const matFolder = zip.folder("mat");
    if (baseFolder) {
      assets.baseImages.files.forEach((file) => {
        baseFolder.file(file.name, file.file);
      });
    }
    if (matFolder) {
      assets.matImages.files.forEach((file) => {
        matFolder.file(file.name, file.file);
      });
    }
    if (editor) {
      const configs = editor.views.map((view) => {
        return {
          id: view.id,
          areas: view.areas.map((area) => exportArea(area)),
          layers: view.layers.map((layer) => exportLayer(layer))
        };
      });
      const json = JSON.stringify(configs, null, 4);
      zip.file("config.json", json);
    }
    zip.generateAsync({ type: "blob" }).then((zipFile) => {
      const url = URL.createObjectURL(zipFile);
      setTimeout(() => URL.revokeObjectURL(url), 1e3);
      window.open(url, "_blank");
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative", width: "100%", height: "100%" }
  }, /* @__PURE__ */ React.createElement("canvas", {
    ref: refView,
    style: { width: "100%", height: "100%" }
  }), ";", /* @__PURE__ */ React.createElement("div", {
    style: { position: "absolute", right: 10, top: 10 }
  }, /* @__PURE__ */ React.createElement(Button$1, {
    variant: "contained",
    color: "primary",
    onClick: onExport
  }, "\u5BFC\u51FA")));
}
const useStyle = makeStyles({
  container: {
    padding: "10px",
    width: "100%",
    height: "100%",
    display: "flex",
    position: "fixed",
    boxSizing: "border-box"
  },
  panelLeft: {
    width: "400px",
    overflow: "auto",
    border: "1px solid #d2d2d2"
  },
  panelMiddle: {
    margin: "0 10px",
    flex: 1,
    overflow: "hidden",
    border: "1px solid #d2d2d2"
  },
  panelRight: {
    width: "400px",
    overflow: "auto",
    border: "1px solid #d2d2d2"
  }
});
function App() {
  const classes = useStyle();
  return /* @__PURE__ */ React.createElement(EditorContainer.Provider, null, /* @__PURE__ */ React.createElement(AssetsContainer.Provider, null, /* @__PURE__ */ React.createElement("div", {
    className: classes.container
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.panelLeft
  }, /* @__PURE__ */ React.createElement(PanelLeft, null)), /* @__PURE__ */ React.createElement("div", {
    className: classes.panelMiddle
  }, /* @__PURE__ */ React.createElement(Workspace, null)), /* @__PURE__ */ React.createElement("div", {
    className: classes.panelRight
  }, /* @__PURE__ */ React.createElement(PanelRight, null)))));
}
var index = "";
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
