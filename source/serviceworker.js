(function (t) {
  self.webpackChunk = function (e, r) {
    for (var o in r) {
      t[o] = r[o];
    }
    while (e.length) {
      n[e.pop()] = 1;
    }
  };
  var e = {};
  var n = {
    1: 1
  };
  function r(n) {
    if (e[n]) {
      return e[n].exports;
    }
    var o = e[n] = {
      i: n,
      l: false,
      exports: {}
    };
    t[n].call(o.exports, o, o.exports, r);
    o.l = true;
    return o.exports;
  }
  r.e = function (t) {
    var e = [];
    e.push(Promise.resolve().then(function () {
      if (!n[t]) {
        importScripts(r.p + "" + t + ".js");
      }
    }));
    return Promise.all(e);
  };
  r.m = t;
  r.c = e;
  r.d = function (t, e, n) {
    if (!r.o(t, e)) {
      Object.defineProperty(t, e, {
        enumerable: true,
        get: n
      });
    }
  };
  r.r = function (t) {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
  };
  r.t = function (t, e) {
    if (e & 1) {
      t = r(t);
    }
    if (e & 8) {
      return t;
    }
    if (e & 4 && typeof t == "object" && t && t.__esModule) {
      return t;
    }
    var n = Object.create(null);
    r.r(n);
    Object.defineProperty(n, "default", {
      enumerable: true,
      value: t
    });
    if (e & 2 && typeof t != "string") {
      for (var o in t) {
        r.d(n, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
    }
    return n;
  };
  r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    r.d(e, "a", e);
    return e;
  };
  r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  };
  r.p = "/";
  r(r.s = 245);
})([function (t, e, n) {
  "use strict";

  n.d(e, "j", function () {
    return o;
  });
  n.d(e, "e", function () {
    return i;
  });
  n.d(e, "i", function () {
    return s;
  });
  n.d(e, "c", function () {
    return a;
  });
  n.d(e, "d", function () {
    return c;
  });
  n.d(e, "g", function () {
    return u;
  });
  n.d(e, "h", function () {
    return f;
  });
  n.d(e, "a", function () {
    return l;
  });
  n.d(e, "f", function () {
    return h;
  });
  n.d(e, "l", function () {
    return p;
  });
  n.d(e, "k", function () {
    return d;
  });
  n.d(e, "n", function () {
    return y;
  });
  n.d(e, "m", function () {
    return m;
  });
  n.d(e, "b", function () {
    return g;
  });
  n.d(e, "p", function () {
    return w;
  });
  n.d(e, "o", function () {
    return x;
  });
  n(27);
  n(107);
  const o = typeof window != "object";
  const i = false;
  const s = false;
  const a = false;
  const c = true;
  const u = false;
  const f = false;
  const l = "chrome";
  const h = c || u || a || f;
  navigator.platform.indexOf("Mac");
  const p = "https://api.inftab.com/v2";
  const d = "https://infinity-api.infinitynewtab.com";
  const y = s ? location.origin : "https://inftab.com";
  const m = "https://weatheroffer.com/api/extfans";
  const g = "https://mail.google.com";
  const v = ["cs", "da", "de", "el", "en", "en-GB", "en-US", "es", "es-419", "fi", "fr", "hi", "hu", "id", "it", "ja", "ko", "ms", "nl", "no", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
  const b = !!globalThis.chrome?.abp;
  function w(t = "", e = "_") {
    const n = t.split(e);
    if (n.length === 2) {
      n[0] = n[0].toLowerCase();
      n[1] = n[1].toUpperCase();
      return n.join(e);
    } else {
      return t;
    }
  }
  function _(t) {
    const e = w(t.replace("_", "-"), "-");
    if (v.includes(e)) {
      return e;
    } else if (t === "zh" || e.indexOf("zh-") === 0) {
      return "zh-CN";
    } else {
      return "en-US";
    }
  }
  const x = {
    get lang() {
      if (s) {
        return function () {
          if (!o) {
            const t = localStorage.getItem("langCode");
            if (localStorage.getItem("setLangCode") !== null && t !== null) {
              return t;
            }
          }
          return _(navigator.language || "en-us");
        }();
      } else {
        return _(chrome.i18n.getUILanguage());
      }
    },
    get extVersion() {
      if (s) {
        return "web";
      } else {
        return chrome.runtime.getManifest().version;
      }
    },
    get extId() {
      if (s) {
        return "web";
      } else {
        return chrome.runtime.id;
      }
    },
    get platform() {
      if (s) {
        return "web";
      } else {
        return "chrome";
      }
    },
    get supportCookie() {
      return !f && this.runtimePlatform !== "safari";
    },
    get runtimePlatform() {
      if (b) {
        return "360";
      } else {
        return T().broswer;
      }
    },
    get platformVersion() {
      return T().version;
    },
    get isZh() {
      return x.lang === "zh-CN";
    },
    get isEn() {
      return /^(en|en-GB|en-US)$/.test(x.lang);
    },
    get isWindows() {
      return /windows|win32/i.test(navigator.userAgent);
    },
    get isMac() {
      return navigator.platform.toLowerCase().indexOf("mac") !== -1;
    },
    get vendor() {
      let t = l;
      if (l === "web") {
        t = T().broswer;
      }
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
  };
  function T() {
    const t = {};
    const e = navigator.userAgent.toLowerCase();
    let n;
    if (n = e.match(/edg\/([\d.]+)/i)) {
      t.edge = n[1];
    } else if ((n = e.match(/rv:([\d.]+)\) like gecko/)) || (n = e.match(/msie ([\d.]+)/))) {
      t.ie = n[1];
    } else if (n = e.match(/firefox\/([\d.]+)/)) {
      t.firefox = n[1];
    } else if (n = e.match(/chrome\/([\d.]+)/)) {
      t.chrome = n[1];
    } else if (n = e.match(/opera.([\d.]+)/)) {
      t.opera = n[1];
    } else if (n = e.match(/version\/([\d.]+).*safari/)) {
      t.safari = n[1];
    }
    if (t.edge) {
      return {
        broswer: "edge",
        version: t.edge
      };
    } else if (t.ie) {
      return {
        broswer: "ie",
        version: t.ie
      };
    } else if (t.firefox) {
      return {
        broswer: "firefox",
        version: t.firefox
      };
    } else if (t.chrome) {
      return {
        broswer: "chrome",
        version: t.chrome
      };
    } else if (t.opera) {
      return {
        broswer: "opera",
        version: t.opera
      };
    } else if (t.safari) {
      return {
        broswer: "safari",
        version: t.safari
      };
    } else {
      return {
        broswer: "none",
        version: "0"
      };
    }
  }
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return u;
  });
  n(3);
  var r = n(13);
  var o = n(84);
  var i = n.n(o);
  let s = null;
  const a = (t, e, n) => {
    (async (t, e = null, n = {}) => {
      if (r.b === "serviceworker") {
        var o;
        if (!s) {
          throw new Error("no worker self");
        }
        const r = await i()(o = s.clients).call(o, {
          includeUncontrolled: true,
          type: "window"
        });
        if (r == null ? undefined : r.length) {
          r.forEach(r => {
            if (n.ignoreId !== r.id) {
              r.postMessage({
                type: t,
                payload: e
              });
            }
          });
        }
      } else if (r.b === "background") {
        chrome.runtime.sendMessage({
          type: t,
          payload: e,
          ignoreId: n.ignoreId
        }, () => {
          if (chrome.runtime.lastError) {
            console.warn("sendMessage: ", chrome.runtime.lastError.message);
          }
        });
      }
    })("master:bordcast-message", {
      type: t,
      payload: e
    }, {
      ignoreId: n
    });
  };
  var c = n(188);
  const u = new class {
    constructor() {
      this.taskScheduler = new c.a();
      this.created = async (t = null) => {
        if (r.b === "serviceworker") {
          s = t;
        }
      };
      this.execTasks = async (t, e, n) => {
        const {
          type: r,
          payload: o
        } = t;
        if (r == null ? undefined : r.startsWith("slave:")) {
          this.taskScheduler.execTask(r, o.data, e, n);
        }
      };
      this.listenTasks = async (t, e) => {
        this.taskScheduler.listenTask(t, e);
      };
      if (!r.a) {
        throw new Error("it's not bg");
      }
    }
    sendMessage(t, e = "", n) {
      a(t, e, n);
    }
  }();
}, function (t, e, n) {
  "use strict";

  try {
    if (self["workbox:core:5.1.4"]) {
      _();
    }
  } catch (t) {}
}, function (t, e, n) {
  "use strict";

  var r;
  var o;
  var i;
  var s;
  var a = n(88);
  var c = n(99);
  var u = n(5);
  var f = n(40);
  var l = n(159);
  var h = n(39);
  var p = n(256);
  var d = n(160);
  var y = n(258);
  var m = n(260);
  var g = n(25);
  var v = n(49);
  var b = n(261);
  var w = n(94);
  var _ = n(262);
  var x = n(267);
  var T = n(165);
  var E = n(166).set;
  var O = n(268);
  var S = n(169);
  var I = n(270);
  var A = n(170);
  var N = n(271);
  var j = n(96);
  var D = n(158);
  var C = n(11);
  var P = n(272);
  var k = n(104);
  var R = n(103);
  var L = C("species");
  var M = "Promise";
  var F = j.get;
  var B = j.set;
  var U = j.getterFor(M);
  var q = l && l.prototype;
  var W = l;
  var V = q;
  var z = u.TypeError;
  var Y = u.document;
  var G = u.process;
  var H = A.f;
  var K = H;
  var $ = !!Y && !!Y.createEvent && !!u.dispatchEvent;
  var X = typeof PromiseRejectionEvent == "function";
  var Q = false;
  var J = D(M, function () {
    var t = w(W);
    var e = t !== String(W);
    if (!e && R === 66) {
      return true;
    }
    if (c && !V.finally) {
      return true;
    }
    if (R >= 51 && /native code/.test(t)) {
      return false;
    }
    var n = new W(function (t) {
      t(1);
    });
    function r(t) {
      t(function () {}, function () {});
    }
    (n.constructor = {})[L] = r;
    return !(Q = n.then(function () {}) instanceof r) || !e && P && !X;
  });
  var Z = J || !x(function (t) {
    W.all(t).catch(function () {});
  });
  function tt(t) {
    var e;
    return !!g(t) && typeof (e = t.then) == "function" && e;
  }
  function et(t, e) {
    if (!t.notified) {
      t.notified = true;
      var n = t.reactions;
      O(function () {
        var r = t.value;
        for (var o = t.state == 1, i = 0; n.length > i;) {
          var s;
          var a;
          var c;
          var u = n[i++];
          var f = o ? u.ok : u.fail;
          var l = u.resolve;
          var h = u.reject;
          var p = u.domain;
          try {
            if (f) {
              if (!o) {
                if (t.rejection === 2) {
                  it(t);
                }
                t.rejection = 1;
              }
              if (f === true) {
                s = r;
              } else {
                if (p) {
                  p.enter();
                }
                s = f(r);
                if (p) {
                  p.exit();
                  c = true;
                }
              }
              if (s === u.promise) {
                h(z("Promise-chain cycle"));
              } else if (a = tt(s)) {
                a.call(s, l, h);
              } else {
                l(s);
              }
            } else {
              h(r);
            }
          } catch (t) {
            if (p && !c) {
              p.exit();
            }
            h(t);
          }
        }
        t.reactions = [];
        t.notified = false;
        if (e && !t.rejection) {
          rt(t);
        }
      });
    }
  }
  function nt(t, e, n) {
    var r;
    var o;
    if ($) {
      (r = Y.createEvent("Event")).promise = e;
      r.reason = n;
      r.initEvent(t, false, true);
      u.dispatchEvent(r);
    } else {
      r = {
        promise: e,
        reason: n
      };
    }
    if (!X && (o = u["on" + t])) {
      o(r);
    } else if (t === "unhandledrejection") {
      I("Unhandled promise rejection", n);
    }
  }
  function rt(t) {
    E.call(u, function () {
      var e;
      var n = t.facade;
      var r = t.value;
      if (ot(t) && (e = N(function () {
        if (k) {
          G.emit("unhandledRejection", r, n);
        } else {
          nt("unhandledrejection", n, r);
        }
      }), t.rejection = k || ot(t) ? 2 : 1, e.error)) {
        throw e.value;
      }
    });
  }
  function ot(t) {
    return t.rejection !== 1 && !t.parent;
  }
  function it(t) {
    E.call(u, function () {
      var e = t.facade;
      if (k) {
        G.emit("rejectionHandled", e);
      } else {
        nt("rejectionhandled", e, t.value);
      }
    });
  }
  function st(t, e, n) {
    return function (r) {
      t(e, r, n);
    };
  }
  function at(t, e, n) {
    if (!t.done) {
      t.done = true;
      if (n) {
        t = n;
      }
      t.value = e;
      t.state = 2;
      et(t, true);
    }
  }
  function ct(t, e, n) {
    if (!t.done) {
      t.done = true;
      if (n) {
        t = n;
      }
      try {
        if (t.facade === e) {
          throw z("Promise can't be resolved itself");
        }
        var r = tt(e);
        if (r) {
          O(function () {
            var n = {
              done: false
            };
            try {
              r.call(e, st(ct, n, t), st(at, n, t));
            } catch (e) {
              at(n, e, t);
            }
          });
        } else {
          t.value = e;
          t.state = 1;
          et(t, false);
        }
      } catch (e) {
        at({
          done: false
        }, e, t);
      }
    }
  }
  if (J && (V = (W = function (t) {
    b(this, W, M);
    v(t);
    r.call(this);
    var e = F(this);
    try {
      t(st(ct, e), st(at, e));
    } catch (t) {
      at(e, t);
    }
  }).prototype, (r = function (t) {
    B(this, {
      type: M,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: 0,
      value: undefined
    });
  }).prototype = p(V, {
    then: function (t, e) {
      var n = U(this);
      var r = H(T(this, W));
      r.ok = typeof t != "function" || t;
      r.fail = typeof e == "function" && e;
      r.domain = k ? G.domain : undefined;
      n.parent = true;
      n.reactions.push(r);
      if (n.state != 0) {
        et(n, false);
      }
      return r.promise;
    },
    catch: function (t) {
      return this.then(undefined, t);
    }
  }), o = function () {
    var t = new r();
    var e = F(t);
    this.promise = t;
    this.resolve = st(ct, e);
    this.reject = st(at, e);
  }, A.f = H = function (t) {
    if (t === W || t === i) {
      return new o(t);
    } else {
      return K(t);
    }
  }, !c && typeof l == "function" && q !== Object.prototype)) {
    s = q.then;
    if (!Q) {
      h(q, "then", function (t, e) {
        var n = this;
        return new W(function (t, e) {
          s.call(n, t, e);
        }).then(t, e);
      }, {
        unsafe: true
      });
      h(q, "catch", V.catch, {
        unsafe: true
      });
    }
    try {
      delete q.constructor;
    } catch (t) {}
    if (d) {
      d(q, V);
    }
  }
  a({
    global: true,
    wrap: true,
    forced: J
  }, {
    Promise: W
  });
  y(W, M, false, true);
  m(M);
  i = f(M);
  a({
    target: M,
    stat: true,
    forced: J
  }, {
    reject: function (t) {
      var e = H(this);
      e.reject.call(undefined, t);
      return e.promise;
    }
  });
  a({
    target: M,
    stat: true,
    forced: c || J
  }, {
    resolve: function (t) {
      return S(c && this === i ? W : this, t);
    }
  });
  a({
    target: M,
    stat: true,
    forced: Z
  }, {
    all: function (t) {
      var e = this;
      var n = H(e);
      var r = n.resolve;
      var o = n.reject;
      var i = N(function () {
        var n = v(e.resolve);
        var i = [];
        var s = 0;
        var a = 1;
        _(t, function (t) {
          var c = s++;
          var u = false;
          i.push(undefined);
          a++;
          n.call(e, t).then(function (t) {
            if (!u) {
              u = true;
              i[c] = t;
              if (! --a) {
                r(i);
              }
            }
          }, o);
        });
        if (! --a) {
          r(i);
        }
      });
      if (i.error) {
        o(i.value);
      }
      return n.promise;
    },
    race: function (t) {
      var e = this;
      var n = H(e);
      var r = n.reject;
      var o = N(function () {
        var o = v(e.resolve);
        _(t, function (t) {
          o.call(e, t).then(n.resolve, r);
        });
      });
      if (o.error) {
        r(o.value);
      }
      return n.promise;
    }
  });
}, function (t, e) {
  (function () {
    t.exports = {
      Element: 1,
      Attribute: 2,
      Text: 3,
      CData: 4,
      EntityReference: 5,
      EntityDeclaration: 6,
      ProcessingInstruction: 7,
      Comment: 8,
      Document: 9,
      DocType: 10,
      DocumentFragment: 11,
      NotationDeclaration: 12,
      Declaration: 201,
      Raw: 202,
      AttributeDeclaration: 203,
      ElementDeclaration: 204,
      Dummy: 205
    };
  }).call(this);
}, function (t, e, n) {
  (function (e) {
    function n(t) {
      return t && t.Math == Math && t;
    }
    t.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof e == "object" && e) || function () {
      return this;
    }() || Function("return this")();
  }).call(this, n(14));
}, function (t, e, n) {
  t.exports = n(331);
}, function (t, e, n) {
  (function (e) {
    function n(t) {
      return t && t.Math == Math && t;
    }
    t.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof e == "object" && e) || function () {
      return this;
    }() || Function("return this")();
  }).call(this, n(14));
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return true;
    }
  };
}, function (t, e, n) {
  var r = n(7);
  var o = n(179);
  var i = n(30);
  var s = n(180);
  var a = n(181);
  var c = n(291);
  var u = o("wks");
  var f = r.Symbol;
  var l = c ? f : f && f.withoutSetter || s;
  t.exports = function (t) {
    if (!i(u, t) || !a && typeof u[t] != "string") {
      if (a && i(f, t)) {
        u[t] = f[t];
      } else {
        u[t] = l("Symbol." + t);
      }
    }
    return u[t];
  };
}, function (t, e, n) {
  "use strict";

  var r = n(211);
  var o = Object.prototype.toString;
  function i(t) {
    return o.call(t) === "[object Array]";
  }
  function s(t) {
    return t === undefined;
  }
  function a(t) {
    return t !== null && typeof t == "object";
  }
  function c(t) {
    return o.call(t) === "[object Function]";
  }
  function u(t, e) {
    if (t != null) {
      if (typeof t != "object") {
        t = [t];
      }
      if (i(t)) {
        for (var n = 0, r = t.length; n < r; n++) {
          e.call(null, t[n], n, t);
        }
      } else {
        for (var o in t) {
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            e.call(null, t[o], o, t);
          }
        }
      }
    }
  }
  t.exports = {
    isArray: i,
    isArrayBuffer: function (t) {
      return o.call(t) === "[object ArrayBuffer]";
    },
    isBuffer: function (t) {
      return t !== null && !s(t) && t.constructor !== null && !s(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
    },
    isFormData: function (t) {
      return typeof FormData != "undefined" && t instanceof FormData;
    },
    isArrayBufferView: function (t) {
      if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(t);
      } else {
        return t && t.buffer && t.buffer instanceof ArrayBuffer;
      }
    },
    isString: function (t) {
      return typeof t == "string";
    },
    isNumber: function (t) {
      return typeof t == "number";
    },
    isObject: a,
    isUndefined: s,
    isDate: function (t) {
      return o.call(t) === "[object Date]";
    },
    isFile: function (t) {
      return o.call(t) === "[object File]";
    },
    isBlob: function (t) {
      return o.call(t) === "[object Blob]";
    },
    isFunction: c,
    isStream: function (t) {
      return a(t) && c(t.pipe);
    },
    isURLSearchParams: function (t) {
      return typeof URLSearchParams != "undefined" && t instanceof URLSearchParams;
    },
    isStandardBrowserEnv: function () {
      return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window != "undefined" && typeof document != "undefined";
    },
    forEach: u,
    merge: function t() {
      var e = {};
      function n(n, r) {
        if (typeof e[r] == "object" && typeof n == "object") {
          e[r] = t(e[r], n);
        } else {
          e[r] = n;
        }
      }
      for (var r = 0, o = arguments.length; r < o; r++) {
        u(arguments[r], n);
      }
      return e;
    },
    deepMerge: function t() {
      var e = {};
      function n(n, r) {
        if (typeof e[r] == "object" && typeof n == "object") {
          e[r] = t(e[r], n);
        } else {
          e[r] = typeof n == "object" ? t({}, n) : n;
        }
      }
      for (var r = 0, o = arguments.length; r < o; r++) {
        u(arguments[r], n);
      }
      return e;
    },
    extend: function (t, e, n) {
      u(e, function (e, o) {
        t[o] = n && typeof e == "function" ? r(e, n) : e;
      });
      return t;
    },
    trim: function (t) {
      return t.replace(/^\s*/, "").replace(/\s*$/, "");
    }
  };
}, function (t, e, n) {
  var r = n(5);
  var o = n(98);
  var i = n(23);
  var s = n(100);
  var a = n(161);
  var c = n(259);
  var u = o("wks");
  var f = r.Symbol;
  var l = c ? f : f && f.withoutSetter || s;
  t.exports = function (t) {
    if (!i(u, t) || !a && typeof u[t] != "string") {
      if (a && i(f, t)) {
        u[t] = f[t];
      } else {
        u[t] = l("Symbol." + t);
      }
    }
    return u[t];
  };
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i;
    var s;
    var a;
    var c;
    var u;
    var f;
    var l;
    var h;
    var p;
    var d;
    var y;
    var m;
    var g;
    var v;
    var b = {}.hasOwnProperty;
    v = n(24);
    g = v.isObject;
    m = v.isFunction;
    y = v.isEmpty;
    d = v.getValue;
    u = null;
    o = null;
    i = null;
    s = null;
    a = null;
    h = null;
    p = null;
    l = null;
    c = null;
    r = null;
    f = null;
    e = null;
    t.exports = function () {
      function t(t) {
        this.parent = t;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        this.value = null;
        this.children = [];
        this.baseURI = null;
        if (!u) {
          u = n(122);
          o = n(124);
          i = n(125);
          s = n(126);
          a = n(127);
          h = n(132);
          p = n(133);
          l = n(134);
          c = n(192);
          r = n(4);
          f = n(310);
          n(123);
          e = n(311);
        }
      }
      Object.defineProperty(t.prototype, "nodeName", {
        get: function () {
          return this.name;
        }
      });
      Object.defineProperty(t.prototype, "nodeType", {
        get: function () {
          return this.type;
        }
      });
      Object.defineProperty(t.prototype, "nodeValue", {
        get: function () {
          return this.value;
        }
      });
      Object.defineProperty(t.prototype, "parentNode", {
        get: function () {
          return this.parent;
        }
      });
      Object.defineProperty(t.prototype, "childNodes", {
        get: function () {
          if (!this.childNodeList || !this.childNodeList.nodes) {
            this.childNodeList = new f(this.children);
          }
          return this.childNodeList;
        }
      });
      Object.defineProperty(t.prototype, "firstChild", {
        get: function () {
          return this.children[0] || null;
        }
      });
      Object.defineProperty(t.prototype, "lastChild", {
        get: function () {
          return this.children[this.children.length - 1] || null;
        }
      });
      Object.defineProperty(t.prototype, "previousSibling", {
        get: function () {
          var t;
          t = this.parent.children.indexOf(this);
          return this.parent.children[t - 1] || null;
        }
      });
      Object.defineProperty(t.prototype, "nextSibling", {
        get: function () {
          var t;
          t = this.parent.children.indexOf(this);
          return this.parent.children[t + 1] || null;
        }
      });
      Object.defineProperty(t.prototype, "ownerDocument", {
        get: function () {
          return this.document() || null;
        }
      });
      Object.defineProperty(t.prototype, "textContent", {
        get: function () {
          var t;
          var e;
          var n;
          var o;
          var i;
          if (this.nodeType === r.Element || this.nodeType === r.DocumentFragment) {
            i = "";
            e = 0;
            n = (o = this.children).length;
            for (; e < n; e++) {
              if ((t = o[e]).textContent) {
                i += t.textContent;
              }
            }
            return i;
          }
          return null;
        },
        set: function (t) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      t.prototype.setParent = function (t) {
        var e;
        var n;
        var r;
        var o;
        var i;
        this.parent = t;
        if (t) {
          this.options = t.options;
          this.stringify = t.stringify;
        }
        i = [];
        n = 0;
        r = (o = this.children).length;
        for (; n < r; n++) {
          e = o[n];
          i.push(e.setParent(this));
        }
        return i;
      };
      t.prototype.element = function (t, e, n) {
        var r;
        var o;
        var i;
        var s;
        var a;
        var c;
        var u;
        var f;
        var l;
        var h;
        var p;
        c = null;
        if (e === null && n == null) {
          e = (l = [{}, null])[0];
          n = l[1];
        }
        if (e == null) {
          e = {};
        }
        e = d(e);
        if (!g(e)) {
          n = (h = [e, n])[0];
          e = h[1];
        }
        if (t != null) {
          t = d(t);
        }
        if (Array.isArray(t)) {
          i = 0;
          u = t.length;
          for (; i < u; i++) {
            o = t[i];
            c = this.element(o);
          }
        } else if (m(t)) {
          c = this.element(t.apply());
        } else if (g(t)) {
          for (a in t) {
            if (b.call(t, a)) {
              p = t[a];
              if (m(p)) {
                p = p.apply();
              }
              if (!this.options.ignoreDecorators && this.stringify.convertAttKey && a.indexOf(this.stringify.convertAttKey) === 0) {
                c = this.attribute(a.substr(this.stringify.convertAttKey.length), p);
              } else if (!this.options.separateArrayItems && Array.isArray(p) && y(p)) {
                c = this.dummy();
              } else if (g(p) && y(p)) {
                c = this.element(a);
              } else if (this.options.keepNullNodes || p != null) {
                if (!this.options.separateArrayItems && Array.isArray(p)) {
                  s = 0;
                  f = p.length;
                  for (; s < f; s++) {
                    o = p[s];
                    (r = {})[a] = o;
                    c = this.element(r);
                  }
                } else if (g(p)) {
                  if (!this.options.ignoreDecorators && this.stringify.convertTextKey && a.indexOf(this.stringify.convertTextKey) === 0) {
                    c = this.element(p);
                  } else {
                    (c = this.element(a)).element(p);
                  }
                } else {
                  c = this.element(a, p);
                }
              } else {
                c = this.dummy();
              }
            }
          }
        } else {
          c = this.options.keepNullNodes || n !== null ? !this.options.ignoreDecorators && this.stringify.convertTextKey && t.indexOf(this.stringify.convertTextKey) === 0 ? this.text(n) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && t.indexOf(this.stringify.convertCDataKey) === 0 ? this.cdata(n) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && t.indexOf(this.stringify.convertCommentKey) === 0 ? this.comment(n) : !this.options.ignoreDecorators && this.stringify.convertRawKey && t.indexOf(this.stringify.convertRawKey) === 0 ? this.raw(n) : !this.options.ignoreDecorators && this.stringify.convertPIKey && t.indexOf(this.stringify.convertPIKey) === 0 ? this.instruction(t.substr(this.stringify.convertPIKey.length), n) : this.node(t, e, n) : this.dummy();
        }
        if (c == null) {
          throw new Error("Could not create any elements with: " + t + ". " + this.debugInfo());
        }
        return c;
      };
      t.prototype.insertBefore = function (t, e, n) {
        var r;
        var o;
        var i;
        var s;
        var a;
        if (t != null ? t.type : undefined) {
          s = e;
          (i = t).setParent(this);
          if (s) {
            o = children.indexOf(s);
            a = children.splice(o);
            children.push(i);
            Array.prototype.push.apply(children, a);
          } else {
            children.push(i);
          }
          return i;
        }
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
        }
        o = this.parent.children.indexOf(this);
        a = this.parent.children.splice(o);
        r = this.parent.element(t, e, n);
        Array.prototype.push.apply(this.parent.children, a);
        return r;
      };
      t.prototype.insertAfter = function (t, e, n) {
        var r;
        var o;
        var i;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
        }
        o = this.parent.children.indexOf(this);
        i = this.parent.children.splice(o + 1);
        r = this.parent.element(t, e, n);
        Array.prototype.push.apply(this.parent.children, i);
        return r;
      };
      t.prototype.remove = function () {
        var t;
        if (this.isRoot) {
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        }
        t = this.parent.children.indexOf(this);
        [].splice.apply(this.parent.children, [t, t - t + 1].concat([]));
        return this.parent;
      };
      t.prototype.node = function (t, e, n) {
        var r;
        var o;
        if (t != null) {
          t = d(t);
        }
        e ||= {};
        e = d(e);
        if (!g(e)) {
          n = (o = [e, n])[0];
          e = o[1];
        }
        r = new u(this, t, e);
        if (n != null) {
          r.text(n);
        }
        this.children.push(r);
        return r;
      };
      t.prototype.text = function (t) {
        var e;
        if (g(t)) {
          this.element(t);
        }
        e = new p(this, t);
        this.children.push(e);
        return this;
      };
      t.prototype.cdata = function (t) {
        var e;
        e = new o(this, t);
        this.children.push(e);
        return this;
      };
      t.prototype.comment = function (t) {
        var e;
        e = new i(this, t);
        this.children.push(e);
        return this;
      };
      t.prototype.commentBefore = function (t) {
        var e;
        var n;
        e = this.parent.children.indexOf(this);
        n = this.parent.children.splice(e);
        this.parent.comment(t);
        Array.prototype.push.apply(this.parent.children, n);
        return this;
      };
      t.prototype.commentAfter = function (t) {
        var e;
        var n;
        e = this.parent.children.indexOf(this);
        n = this.parent.children.splice(e + 1);
        this.parent.comment(t);
        Array.prototype.push.apply(this.parent.children, n);
        return this;
      };
      t.prototype.raw = function (t) {
        var e;
        e = new h(this, t);
        this.children.push(e);
        return this;
      };
      t.prototype.dummy = function () {
        return new c(this);
      };
      t.prototype.instruction = function (t, e) {
        var n;
        var r;
        var o;
        var i;
        var s;
        if (t != null) {
          t = d(t);
        }
        if (e != null) {
          e = d(e);
        }
        if (Array.isArray(t)) {
          i = 0;
          s = t.length;
          for (; i < s; i++) {
            n = t[i];
            this.instruction(n);
          }
        } else if (g(t)) {
          for (n in t) {
            if (b.call(t, n)) {
              r = t[n];
              this.instruction(n, r);
            }
          }
        } else {
          if (m(e)) {
            e = e.apply();
          }
          o = new l(this, t, e);
          this.children.push(o);
        }
        return this;
      };
      t.prototype.instructionBefore = function (t, e) {
        var n;
        var r;
        n = this.parent.children.indexOf(this);
        r = this.parent.children.splice(n);
        this.parent.instruction(t, e);
        Array.prototype.push.apply(this.parent.children, r);
        return this;
      };
      t.prototype.instructionAfter = function (t, e) {
        var n;
        var r;
        n = this.parent.children.indexOf(this);
        r = this.parent.children.splice(n + 1);
        this.parent.instruction(t, e);
        Array.prototype.push.apply(this.parent.children, r);
        return this;
      };
      t.prototype.declaration = function (t, e, n) {
        var o;
        var i;
        o = this.document();
        i = new s(o, t, e, n);
        if (o.children.length === 0) {
          o.children.unshift(i);
        } else if (o.children[0].type === r.Declaration) {
          o.children[0] = i;
        } else {
          o.children.unshift(i);
        }
        return o.root() || o;
      };
      t.prototype.dtd = function (t, e) {
        var n;
        var o;
        var i;
        var s;
        var c;
        var u;
        var f;
        var l;
        var h;
        n = this.document();
        o = new a(n, t, e);
        i = s = 0;
        u = (l = n.children).length;
        for (; s < u; i = ++s) {
          if (l[i].type === r.DocType) {
            n.children[i] = o;
            return o;
          }
        }
        i = c = 0;
        f = (h = n.children).length;
        for (; c < f; i = ++c) {
          if (h[i].isRoot) {
            n.children.splice(i, 0, o);
            return o;
          }
        }
        n.children.push(o);
        return o;
      };
      t.prototype.up = function () {
        if (this.isRoot) {
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        }
        return this.parent;
      };
      t.prototype.root = function () {
        var t;
        for (t = this; t;) {
          if (t.type === r.Document) {
            return t.rootObject;
          }
          if (t.isRoot) {
            return t;
          }
          t = t.parent;
        }
      };
      t.prototype.document = function () {
        var t;
        for (t = this; t;) {
          if (t.type === r.Document) {
            return t;
          }
          t = t.parent;
        }
      };
      t.prototype.end = function (t) {
        return this.document().end(t);
      };
      t.prototype.prev = function () {
        var t;
        if ((t = this.parent.children.indexOf(this)) < 1) {
          throw new Error("Already at the first node. " + this.debugInfo());
        }
        return this.parent.children[t - 1];
      };
      t.prototype.next = function () {
        var t;
        if ((t = this.parent.children.indexOf(this)) === -1 || t === this.parent.children.length - 1) {
          throw new Error("Already at the last node. " + this.debugInfo());
        }
        return this.parent.children[t + 1];
      };
      t.prototype.importDocument = function (t) {
        var e;
        (e = t.root().clone()).parent = this;
        e.isRoot = false;
        this.children.push(e);
        return this;
      };
      t.prototype.debugInfo = function (t) {
        var e;
        var n;
        if ((t = t || this.name) != null || ((e = this.parent) != null ? e.name : undefined)) {
          if (t == null) {
            return "parent: <" + this.parent.name + ">";
          } else if ((n = this.parent) != null ? n.name : undefined) {
            return "node: <" + t + ">, parent: <" + this.parent.name + ">";
          } else {
            return "node: <" + t + ">";
          }
        } else {
          return "";
        }
      };
      t.prototype.ele = function (t, e, n) {
        return this.element(t, e, n);
      };
      t.prototype.nod = function (t, e, n) {
        return this.node(t, e, n);
      };
      t.prototype.txt = function (t) {
        return this.text(t);
      };
      t.prototype.dat = function (t) {
        return this.cdata(t);
      };
      t.prototype.com = function (t) {
        return this.comment(t);
      };
      t.prototype.ins = function (t, e) {
        return this.instruction(t, e);
      };
      t.prototype.doc = function () {
        return this.document();
      };
      t.prototype.dec = function (t, e, n) {
        return this.declaration(t, e, n);
      };
      t.prototype.e = function (t, e, n) {
        return this.element(t, e, n);
      };
      t.prototype.n = function (t, e, n) {
        return this.node(t, e, n);
      };
      t.prototype.t = function (t) {
        return this.text(t);
      };
      t.prototype.d = function (t) {
        return this.cdata(t);
      };
      t.prototype.c = function (t) {
        return this.comment(t);
      };
      t.prototype.r = function (t) {
        return this.raw(t);
      };
      t.prototype.i = function (t, e) {
        return this.instruction(t, e);
      };
      t.prototype.u = function () {
        return this.up();
      };
      t.prototype.importXMLBuilder = function (t) {
        return this.importDocument(t);
      };
      t.prototype.replaceChild = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.removeChild = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.appendChild = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.hasChildNodes = function () {
        return this.children.length !== 0;
      };
      t.prototype.cloneNode = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.normalize = function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.isSupported = function (t, e) {
        return true;
      };
      t.prototype.hasAttributes = function () {
        return this.attribs.length !== 0;
      };
      t.prototype.compareDocumentPosition = function (t) {
        var n;
        this;
        if (this === t) {
          return 0;
        } else if (this.document() !== t.document()) {
          n = e.Disconnected | e.ImplementationSpecific;
          if (Math.random() < 0.5) {
            n |= e.Preceding;
          } else {
            n |= e.Following;
          }
          return n;
        } else if (this.isAncestor(t)) {
          return e.Contains | e.Preceding;
        } else if (this.isDescendant(t)) {
          return e.Contains | e.Following;
        } else if (this.isPreceding(t)) {
          return e.Preceding;
        } else {
          return e.Following;
        }
      };
      t.prototype.isSameNode = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.lookupPrefix = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.isDefaultNamespace = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.lookupNamespaceURI = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.isEqualNode = function (t) {
        var e;
        var n;
        var r;
        if (t.nodeType !== this.nodeType) {
          return false;
        }
        if (t.children.length !== this.children.length) {
          return false;
        }
        e = n = 0;
        r = this.children.length - 1;
        for (; r >= 0 ? n <= r : n >= r; e = r >= 0 ? ++n : --n) {
          if (!this.children[e].isEqualNode(t.children[e])) {
            return false;
          }
        }
        return true;
      };
      t.prototype.getFeature = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.setUserData = function (t, e, n) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.getUserData = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      t.prototype.contains = function (t) {
        return !!t && (t === this || this.isDescendant(t));
      };
      t.prototype.isDescendant = function (t) {
        var e;
        var n;
        var r;
        var o;
        n = 0;
        r = (o = this.children).length;
        for (; n < r; n++) {
          if (t === (e = o[n])) {
            return true;
          }
          if (e.isDescendant(t)) {
            return true;
          }
        }
        return false;
      };
      t.prototype.isAncestor = function (t) {
        return t.isDescendant(this);
      };
      t.prototype.isPreceding = function (t) {
        var e;
        var n;
        e = this.treePosition(t);
        n = this.treePosition(this);
        return e !== -1 && n !== -1 && e < n;
      };
      t.prototype.isFollowing = function (t) {
        var e;
        var n;
        e = this.treePosition(t);
        n = this.treePosition(this);
        return e !== -1 && n !== -1 && e > n;
      };
      t.prototype.treePosition = function (t) {
        var e;
        var n;
        n = 0;
        e = false;
        this.foreachTreeNode(this.document(), function (r) {
          n++;
          if (!e && r === t) {
            return e = true;
          }
        });
        if (e) {
          return n;
        } else {
          return -1;
        }
      };
      t.prototype.foreachTreeNode = function (t, e) {
        var n;
        var r;
        var o;
        var i;
        var s;
        t ||= this.document();
        r = 0;
        o = (i = t.children).length;
        for (; r < o; r++) {
          if (s = e(n = i[r])) {
            return s;
          }
          if (s = this.foreachTreeNode(n, e)) {
            return s;
          }
        }
      };
      return t;
    }();
  }).call(this);
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return r;
  });
  n.d(e, "a", function () {
    return o;
  });
  n.d(e, "d", function () {
    return i;
  });
  n.d(e, "c", function () {
    return s;
  });
  n(27);
  const r = n(0).i ? "serviceworker" : "background";
  let o = false;
  if (r === "background") {
    o = typeof ServiceWorkerGlobalScope == "function" && typeof chrome == "object";
  } else if (r === "serviceworker") {
    o = typeof ServiceWorkerGlobalScope == "function";
  }
  const i = {
    timeout: 0,
    taskId: ""
  };
  const s = () => ("" + Date.now() / 1000 / 100000).split(".")[1].substr(0, 8) + ("" + Math.random()).split(".")[1].substr(0, 8).padEnd(8, "0");
}, function (t, e) {
  var n;
  n = function () {
    return this;
  }();
  try {
    n = n || new Function("return this")();
  } catch (t) {
    if (typeof window == "object") {
      n = window;
    }
  }
  t.exports = n;
}, function (t, e, n) {
  var r = n(25);
  t.exports = function (t) {
    if (!r(t)) {
      throw TypeError(String(t) + " is not an object");
    }
    return t;
  };
}, function (t, e, n) {
  "use strict";

  try {
    if (self["workbox:routing:5.1.4"]) {
      _();
    }
  } catch (t) {}
}, function (t, e, n) {
  var r = n(210);
  var o = typeof self == "object" && self && self.Object === Object && self;
  var i = r || o || Function("return this")();
  t.exports = i;
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return true;
    }
  };
}, function (t, e, n) {
  var r = n(42);
  var o = n(64);
  var i = n(60);
  t.exports = r ? function (t, e, n) {
    return o.f(t, e, i(1, n));
  } : function (t, e, n) {
    t[e] = n;
    return t;
  };
}, function (t, e, n) {
  var r = n(29);
  t.exports = function (t) {
    if (!r(t)) {
      throw TypeError(String(t) + " is not an object");
    }
    return t;
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return a;
  });
  n.d(e, "b", function () {
    return u;
  });
  n(27);
  n(107);
  n(3);
  var r = n(0);
  n(241);
  var o = n(22);
  var i = n.n(o);
  let s = {};
  const a = function (t, e) {
    if (r.f && !r.h) {
      return chrome.i18n.getMessage(t, e) || t;
    }
    if (r.i || r.h) {
      if (r.h && e === undefined) {
        return chrome.i18n.getMessage(t, e) || t;
      }
      const o = s[t]?.message;
      const i = [];
      if (typeof e == "string") {
        i.push(e);
      } else if (Array.isArray(e)) {
        i.push(...e);
      }
      const a = /(\$.+?\$)/g;
      let c = a.exec(o);
      let u = o;
      while (c) {
        let [t] = i.splice(0, 1);
        if (t === undefined) {
          t = "";
        }
        u = u.replace(c[1], t);
        c = a.exec(o);
      }
      return u || t;
    }
    return t;
  };
  function c() {
    return r.o.lang || "";
  }
  if (r.j) {
    globalThis.i18n = a;
  } else {
    window.i18n = a;
  }
  c();
  c().startsWith("en");
  async function u() {
    const t = await f();
    s = t;
  }
  function f() {
    return i.a.getItem("current-language");
  }
}, function (t, e, n) {
  (function (e) {
    t.exports = function t(e, n, r) {
      function o(s, a) {
        if (!n[s]) {
          if (!e[s]) {
            if (i) {
              return i(s, true);
            }
            var c = new Error("Cannot find module '" + s + "'");
            c.code = "MODULE_NOT_FOUND";
            throw c;
          }
          var u = n[s] = {
            exports: {}
          };
          e[s][0].call(u.exports, function (t) {
            var n = e[s][1][t];
            return o(n || t);
          }, u, u.exports, t, e, n, r);
        }
        return n[s].exports;
      }
      var i = false;
      for (var s = 0; s < r.length; s++) {
        o(r[s]);
      }
      return o;
    }({
      1: [function (t, n, r) {
        (function (t) {
          "use strict";

          var e;
          var r;
          var o = t.MutationObserver || t.WebKitMutationObserver;
          if (o) {
            var i = 0;
            var s = new o(f);
            var a = t.document.createTextNode("");
            s.observe(a, {
              characterData: true
            });
            e = function () {
              a.data = i = ++i % 2;
            };
          } else if (t.setImmediate || t.MessageChannel === undefined) {
            e = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function () {
              var e = t.document.createElement("script");
              e.onreadystatechange = function () {
                f();
                e.onreadystatechange = null;
                e.parentNode.removeChild(e);
                e = null;
              };
              t.document.documentElement.appendChild(e);
            } : function () {
              setTimeout(f, 0);
            };
          } else {
            var c = new t.MessageChannel();
            c.port1.onmessage = f;
            e = function () {
              c.port2.postMessage(0);
            };
          }
          var u = [];
          function f() {
            var t;
            var e;
            r = true;
            for (var n = u.length; n;) {
              e = u;
              u = [];
              t = -1;
              while (++t < n) {
                e[t]();
              }
              n = u.length;
            }
            r = false;
          }
          n.exports = function (t) {
            if (u.push(t) === 1 && !r) {
              e();
            }
          };
        }).call(this, e !== undefined ? e : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
      }, {}],
      2: [function (t, e, n) {
        "use strict";

        var r = t(1);
        function o() {}
        var i = {};
        var s = ["REJECTED"];
        var a = ["FULFILLED"];
        var c = ["PENDING"];
        function u(t) {
          if (typeof t != "function") {
            throw new TypeError("resolver must be a function");
          }
          this.state = c;
          this.queue = [];
          this.outcome = undefined;
          if (t !== o) {
            p(this, t);
          }
        }
        function f(t, e, n) {
          this.promise = t;
          if (typeof e == "function") {
            this.onFulfilled = e;
            this.callFulfilled = this.otherCallFulfilled;
          }
          if (typeof n == "function") {
            this.onRejected = n;
            this.callRejected = this.otherCallRejected;
          }
        }
        function l(t, e, n) {
          r(function () {
            var r;
            try {
              r = e(n);
            } catch (e) {
              return i.reject(t, e);
            }
            if (r === t) {
              i.reject(t, new TypeError("Cannot resolve promise with itself"));
            } else {
              i.resolve(t, r);
            }
          });
        }
        function h(t) {
          var e = t && t.then;
          if (t && (typeof t == "object" || typeof t == "function") && typeof e == "function") {
            return function () {
              e.apply(t, arguments);
            };
          }
        }
        function p(t, e) {
          var n = false;
          function r(e) {
            if (!n) {
              n = true;
              i.reject(t, e);
            }
          }
          function o(e) {
            if (!n) {
              n = true;
              i.resolve(t, e);
            }
          }
          var s = d(function () {
            e(o, r);
          });
          if (s.status === "error") {
            r(s.value);
          }
        }
        function d(t, e) {
          var n = {};
          try {
            n.value = t(e);
            n.status = "success";
          } catch (t) {
            n.status = "error";
            n.value = t;
          }
          return n;
        }
        e.exports = u;
        u.prototype.catch = function (t) {
          return this.then(null, t);
        };
        u.prototype.then = function (t, e) {
          if (typeof t != "function" && this.state === a || typeof e != "function" && this.state === s) {
            return this;
          }
          var n = new this.constructor(o);
          if (this.state !== c) {
            l(n, this.state === a ? t : e, this.outcome);
          } else {
            this.queue.push(new f(n, t, e));
          }
          return n;
        };
        f.prototype.callFulfilled = function (t) {
          i.resolve(this.promise, t);
        };
        f.prototype.otherCallFulfilled = function (t) {
          l(this.promise, this.onFulfilled, t);
        };
        f.prototype.callRejected = function (t) {
          i.reject(this.promise, t);
        };
        f.prototype.otherCallRejected = function (t) {
          l(this.promise, this.onRejected, t);
        };
        i.resolve = function (t, e) {
          var n = d(h, e);
          if (n.status === "error") {
            return i.reject(t, n.value);
          }
          var r = n.value;
          if (r) {
            p(t, r);
          } else {
            t.state = a;
            t.outcome = e;
            for (var o = -1, s = t.queue.length; ++o < s;) {
              t.queue[o].callFulfilled(e);
            }
          }
          return t;
        };
        i.reject = function (t, e) {
          t.state = s;
          t.outcome = e;
          for (var n = -1, r = t.queue.length; ++n < r;) {
            t.queue[n].callRejected(e);
          }
          return t;
        };
        u.resolve = function (t) {
          if (t instanceof this) {
            return t;
          } else {
            return i.resolve(new this(o), t);
          }
        };
        u.reject = function (t) {
          var e = new this(o);
          return i.reject(e, t);
        };
        u.all = function (t) {
          var e = this;
          if (Object.prototype.toString.call(t) !== "[object Array]") {
            return this.reject(new TypeError("must be an array"));
          }
          var n = t.length;
          var r = false;
          if (!n) {
            return this.resolve([]);
          }
          var s = new Array(n);
          var a = 0;
          for (var c = -1, u = new this(o); ++c < n;) {
            f(t[c], c);
          }
          return u;
          function f(t, o) {
            e.resolve(t).then(function (t) {
              s[o] = t;
              if (++a === n && !r) {
                r = true;
                i.resolve(u, s);
              }
            }, function (t) {
              if (!r) {
                r = true;
                i.reject(u, t);
              }
            });
          }
        };
        u.race = function (t) {
          var e = this;
          if (Object.prototype.toString.call(t) !== "[object Array]") {
            return this.reject(new TypeError("must be an array"));
          }
          var n = t.length;
          var r = false;
          if (!n) {
            return this.resolve([]);
          }
          var s;
          for (var a = -1, c = new this(o); ++a < n;) {
            s = t[a];
            e.resolve(s).then(function (t) {
              if (!r) {
                r = true;
                i.resolve(c, t);
              }
            }, function (t) {
              if (!r) {
                r = true;
                i.reject(c, t);
              }
            });
          }
          return c;
        };
      }, {
        1: 1
      }],
      3: [function (t, n, r) {
        (function (e) {
          "use strict";

          if (typeof e.Promise != "function") {
            e.Promise = t(2);
          }
        }).call(this, e !== undefined ? e : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
      }, {
        2: 2
      }],
      4: [function (t, e, n) {
        "use strict";

        var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t;
        } : function (t) {
          if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof t;
          }
        };
        var o = function () {
          try {
            if (typeof indexedDB != "undefined") {
              return indexedDB;
            }
            if (typeof webkitIndexedDB != "undefined") {
              return webkitIndexedDB;
            }
            if (typeof mozIndexedDB != "undefined") {
              return mozIndexedDB;
            }
            if (typeof OIndexedDB != "undefined") {
              return OIndexedDB;
            }
            if (typeof msIndexedDB != "undefined") {
              return msIndexedDB;
            }
          } catch (t) {
            return;
          }
        }();
        function i(t, e) {
          t = t || [];
          e = e || {};
          try {
            return new Blob(t, e);
          } catch (o) {
            if (o.name !== "TypeError") {
              throw o;
            }
            var n = new (typeof BlobBuilder != "undefined" ? BlobBuilder : typeof MSBlobBuilder != "undefined" ? MSBlobBuilder : typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : WebKitBlobBuilder)();
            for (var r = 0; r < t.length; r += 1) {
              n.append(t[r]);
            }
            return n.getBlob(e.type);
          }
        }
        if (typeof Promise == "undefined") {
          t(3);
        }
        var s = Promise;
        function a(t, e) {
          if (e) {
            t.then(function (t) {
              e(null, t);
            }, function (t) {
              e(t);
            });
          }
        }
        function c(t, e, n) {
          if (typeof e == "function") {
            t.then(e);
          }
          if (typeof n == "function") {
            t.catch(n);
          }
        }
        function u(t) {
          if (typeof t != "string") {
            console.warn(t + " used as a key, but it is not a string.");
            t = String(t);
          }
          return t;
        }
        function f() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function") {
            return arguments[arguments.length - 1];
          }
        }
        var l = undefined;
        var h = {};
        var p = Object.prototype.toString;
        function d(t) {
          if (typeof l == "boolean") {
            return s.resolve(l);
          } else {
            return function (t) {
              return new s(function (e) {
                var n = t.transaction("local-forage-detect-blob-support", "readwrite");
                var r = i([""]);
                n.objectStore("local-forage-detect-blob-support").put(r, "key");
                n.onabort = function (t) {
                  t.preventDefault();
                  t.stopPropagation();
                  e(false);
                };
                n.oncomplete = function () {
                  var t = navigator.userAgent.match(/Chrome\/(\d+)/);
                  var n = navigator.userAgent.match(/Edge\//);
                  e(n || !t || parseInt(t[1], 10) >= 43);
                };
              }).catch(function () {
                return false;
              });
            }(t).then(function (t) {
              return l = t;
            });
          }
        }
        function y(t) {
          var e = h[t.name];
          var n = {};
          n.promise = new s(function (t, e) {
            n.resolve = t;
            n.reject = e;
          });
          e.deferredOperations.push(n);
          if (e.dbReady) {
            e.dbReady = e.dbReady.then(function () {
              return n.promise;
            });
          } else {
            e.dbReady = n.promise;
          }
        }
        function m(t) {
          var e = h[t.name].deferredOperations.pop();
          if (e) {
            e.resolve();
            return e.promise;
          }
        }
        function g(t, e) {
          var n = h[t.name].deferredOperations.pop();
          if (n) {
            n.reject(e);
            return n.promise;
          }
        }
        function v(t, e) {
          return new s(function (n, r) {
            h[t.name] = h[t.name] || {
              forages: [],
              db: null,
              dbReady: null,
              deferredOperations: []
            };
            if (t.db) {
              if (!e) {
                return n(t.db);
              }
              y(t);
              t.db.close();
            }
            var i = [t.name];
            if (e) {
              i.push(t.version);
            }
            var s = o.open.apply(o, i);
            if (e) {
              s.onupgradeneeded = function (e) {
                var n = s.result;
                try {
                  n.createObjectStore(t.storeName);
                  if (e.oldVersion <= 1) {
                    n.createObjectStore("local-forage-detect-blob-support");
                  }
                } catch (n) {
                  if (n.name !== "ConstraintError") {
                    throw n;
                  }
                  console.warn("The database \"" + t.name + "\" has been upgraded from version " + e.oldVersion + " to version " + e.newVersion + ", but the storage \"" + t.storeName + "\" already exists.");
                }
              };
            }
            s.onerror = function (t) {
              t.preventDefault();
              r(s.error);
            };
            s.onsuccess = function () {
              n(s.result);
              m(t);
            };
          });
        }
        function b(t) {
          return v(t, false);
        }
        function w(t) {
          return v(t, true);
        }
        function _(t, e) {
          if (!t.db) {
            return true;
          }
          var n = !t.db.objectStoreNames.contains(t.storeName);
          var r = t.version < t.db.version;
          var o = t.version > t.db.version;
          if (r) {
            if (t.version !== e) {
              console.warn("The database \"" + t.name + "\" can't be downgraded from version " + t.db.version + " to version " + t.version + ".");
            }
            t.version = t.db.version;
          }
          if (o || n) {
            if (n) {
              var i = t.db.version + 1;
              if (i > t.version) {
                t.version = i;
              }
            }
            return true;
          }
          return false;
        }
        function x(t) {
          return i([function (t) {
            for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n), o = 0; o < e; o++) {
              r[o] = t.charCodeAt(o);
            }
            return n;
          }(atob(t.data))], {
            type: t.type
          });
        }
        function T(t) {
          return t && t.__local_forage_encoded_blob;
        }
        function E(t) {
          var e = this;
          var n = e._initReady().then(function () {
            var t = h[e._dbInfo.name];
            if (t && t.dbReady) {
              return t.dbReady;
            }
          });
          c(n, t, t);
          return n;
        }
        function O(t, e, n, r = 1) {
          try {
            var o = t.db.transaction(t.storeName, e);
            n(null, o);
          } catch (o) {
            if (r > 0 && (!t.db || o.name === "InvalidStateError" || o.name === "NotFoundError")) {
              return s.resolve().then(function () {
                if (!t.db || o.name === "NotFoundError" && !t.db.objectStoreNames.contains(t.storeName) && t.version <= t.db.version) {
                  if (t.db) {
                    t.version = t.db.version + 1;
                  }
                  return w(t);
                }
              }).then(function () {
                return function (t) {
                  y(t);
                  var e = h[t.name];
                  for (var n = e.forages, r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (o._dbInfo.db) {
                      o._dbInfo.db.close();
                      o._dbInfo.db = null;
                    }
                  }
                  t.db = null;
                  return b(t).then(function (e) {
                    t.db = e;
                    if (_(t)) {
                      return w(t);
                    } else {
                      return e;
                    }
                  }).then(function (r) {
                    t.db = e.db = r;
                    for (var o = 0; o < n.length; o++) {
                      n[o]._dbInfo.db = r;
                    }
                  }).catch(function (e) {
                    g(t, e);
                    throw e;
                  });
                }(t).then(function () {
                  O(t, e, n, r - 1);
                });
              }).catch(n);
            }
            n(o);
          }
        }
        var S = {
          _driver: "asyncStorage",
          _initStorage: function (t) {
            var e = this;
            var n = {
              db: null
            };
            if (t) {
              for (var r in t) {
                n[r] = t[r];
              }
            }
            var o = h[n.name];
            if (!o) {
              o = {
                forages: [],
                db: null,
                dbReady: null,
                deferredOperations: []
              };
              h[n.name] = o;
            }
            o.forages.push(e);
            if (!e._initReady) {
              e._initReady = e.ready;
              e.ready = E;
            }
            var i = [];
            function a() {
              return s.resolve();
            }
            for (var c = 0; c < o.forages.length; c++) {
              var u = o.forages[c];
              if (u !== e) {
                i.push(u._initReady().catch(a));
              }
            }
            var f = o.forages.slice(0);
            return s.all(i).then(function () {
              n.db = o.db;
              return b(n);
            }).then(function (t) {
              n.db = t;
              if (_(n, e._defaultConfig.version)) {
                return w(n);
              } else {
                return t;
              }
            }).then(function (t) {
              n.db = o.db = t;
              e._dbInfo = n;
              for (var r = 0; r < f.length; r++) {
                var i = f[r];
                if (i !== e) {
                  i._dbInfo.db = n.db;
                  i._dbInfo.version = n.version;
                }
              }
            });
          },
          _support: function () {
            try {
              if (!o || !o.open) {
                return false;
              }
              var t = typeof openDatabase != "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
              var e = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
              return (!t || e) && typeof indexedDB != "undefined" && typeof IDBKeyRange != "undefined";
            } catch (t) {
              return false;
            }
          }(),
          iterate: function (t, e) {
            var n = this;
            var r = new s(function (e, r) {
              n.ready().then(function () {
                O(n._dbInfo, "readonly", function (o, i) {
                  if (o) {
                    return r(o);
                  }
                  try {
                    var s = i.objectStore(n._dbInfo.storeName).openCursor();
                    var a = 1;
                    s.onsuccess = function () {
                      var n = s.result;
                      if (n) {
                        var r = n.value;
                        if (T(r)) {
                          r = x(r);
                        }
                        var o = t(r, n.key, a++);
                        if (o !== undefined) {
                          e(o);
                        } else {
                          n.continue();
                        }
                      } else {
                        e();
                      }
                    };
                    s.onerror = function () {
                      r(s.error);
                    };
                  } catch (t) {
                    r(t);
                  }
                });
              }).catch(r);
            });
            a(r, e);
            return r;
          },
          getItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = new s(function (e, r) {
              n.ready().then(function () {
                O(n._dbInfo, "readonly", function (o, i) {
                  if (o) {
                    return r(o);
                  }
                  try {
                    var s = i.objectStore(n._dbInfo.storeName).get(t);
                    s.onsuccess = function () {
                      var t = s.result;
                      if (t === undefined) {
                        t = null;
                      }
                      if (T(t)) {
                        t = x(t);
                      }
                      e(t);
                    };
                    s.onerror = function () {
                      r(s.error);
                    };
                  } catch (t) {
                    r(t);
                  }
                });
              }).catch(r);
            });
            a(r, e);
            return r;
          },
          setItem: function (t, e, n) {
            var r = this;
            t = u(t);
            var o = new s(function (n, o) {
              var i;
              r.ready().then(function () {
                i = r._dbInfo;
                if (p.call(e) === "[object Blob]") {
                  return d(i.db).then(function (t) {
                    if (t) {
                      return e;
                    } else {
                      n = e;
                      return new s(function (t, e) {
                        var r = new FileReader();
                        r.onerror = e;
                        r.onloadend = function (e) {
                          var r = btoa(e.target.result || "");
                          t({
                            __local_forage_encoded_blob: true,
                            data: r,
                            type: n.type
                          });
                        };
                        r.readAsBinaryString(n);
                      });
                    }
                    var n;
                  });
                } else {
                  return e;
                }
              }).then(function (e) {
                O(r._dbInfo, "readwrite", function (i, s) {
                  if (i) {
                    return o(i);
                  }
                  try {
                    var a = s.objectStore(r._dbInfo.storeName);
                    if (e === null) {
                      e = undefined;
                    }
                    var c = a.put(e, t);
                    s.oncomplete = function () {
                      if (e === undefined) {
                        e = null;
                      }
                      n(e);
                    };
                    s.onabort = s.onerror = function () {
                      var t = c.error ? c.error : c.transaction.error;
                      o(t);
                    };
                  } catch (t) {
                    o(t);
                  }
                });
              }).catch(o);
            });
            a(o, n);
            return o;
          },
          removeItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = new s(function (e, r) {
              n.ready().then(function () {
                O(n._dbInfo, "readwrite", function (o, i) {
                  if (o) {
                    return r(o);
                  }
                  try {
                    var s = i.objectStore(n._dbInfo.storeName).delete(t);
                    i.oncomplete = function () {
                      e();
                    };
                    i.onerror = function () {
                      r(s.error);
                    };
                    i.onabort = function () {
                      var t = s.error ? s.error : s.transaction.error;
                      r(t);
                    };
                  } catch (t) {
                    r(t);
                  }
                });
              }).catch(r);
            });
            a(r, e);
            return r;
          },
          clear: function (t) {
            var e = this;
            var n = new s(function (t, n) {
              e.ready().then(function () {
                O(e._dbInfo, "readwrite", function (r, o) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var i = o.objectStore(e._dbInfo.storeName).clear();
                    o.oncomplete = function () {
                      t();
                    };
                    o.onabort = o.onerror = function () {
                      var t = i.error ? i.error : i.transaction.error;
                      n(t);
                    };
                  } catch (t) {
                    n(t);
                  }
                });
              }).catch(n);
            });
            a(n, t);
            return n;
          },
          length: function (t) {
            var e = this;
            var n = new s(function (t, n) {
              e.ready().then(function () {
                O(e._dbInfo, "readonly", function (r, o) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var i = o.objectStore(e._dbInfo.storeName).count();
                    i.onsuccess = function () {
                      t(i.result);
                    };
                    i.onerror = function () {
                      n(i.error);
                    };
                  } catch (t) {
                    n(t);
                  }
                });
              }).catch(n);
            });
            a(n, t);
            return n;
          },
          key: function (t, e) {
            var n = this;
            var r = new s(function (e, r) {
              if (t < 0) {
                e(null);
              } else {
                n.ready().then(function () {
                  O(n._dbInfo, "readonly", function (o, i) {
                    if (o) {
                      return r(o);
                    }
                    try {
                      var s = i.objectStore(n._dbInfo.storeName);
                      var a = false;
                      var c = s.openKeyCursor();
                      c.onsuccess = function () {
                        var n = c.result;
                        if (n) {
                          if (t === 0 || a) {
                            e(n.key);
                          } else {
                            a = true;
                            n.advance(t);
                          }
                        } else {
                          e(null);
                        }
                      };
                      c.onerror = function () {
                        r(c.error);
                      };
                    } catch (t) {
                      r(t);
                    }
                  });
                }).catch(r);
              }
            });
            a(r, e);
            return r;
          },
          keys: function (t) {
            var e = this;
            var n = new s(function (t, n) {
              e.ready().then(function () {
                O(e._dbInfo, "readonly", function (r, o) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var i = o.objectStore(e._dbInfo.storeName).openKeyCursor();
                    var s = [];
                    i.onsuccess = function () {
                      var e = i.result;
                      if (e) {
                        s.push(e.key);
                        e.continue();
                      } else {
                        t(s);
                      }
                    };
                    i.onerror = function () {
                      n(i.error);
                    };
                  } catch (t) {
                    n(t);
                  }
                });
              }).catch(n);
            });
            a(n, t);
            return n;
          },
          dropInstance: function (t, e) {
            e = f.apply(this, arguments);
            var n = this.config();
            if (!(t = typeof t != "function" && t || {}).name) {
              t.name = t.name || n.name;
              t.storeName = t.storeName || n.storeName;
            }
            var r;
            var i = this;
            if (t.name) {
              var c = t.name === n.name && i._dbInfo.db;
              var u = c ? s.resolve(i._dbInfo.db) : b(t).then(function (e) {
                var n = h[t.name];
                var r = n.forages;
                n.db = e;
                for (var o = 0; o < r.length; o++) {
                  r[o]._dbInfo.db = e;
                }
                return e;
              });
              r = t.storeName ? u.then(function (e) {
                if (e.objectStoreNames.contains(t.storeName)) {
                  var n = e.version + 1;
                  y(t);
                  var r = h[t.name];
                  var i = r.forages;
                  e.close();
                  for (var a = 0; a < i.length; a++) {
                    var c = i[a];
                    c._dbInfo.db = null;
                    c._dbInfo.version = n;
                  }
                  return new s(function (e, r) {
                    var i = o.open(t.name, n);
                    i.onerror = function (t) {
                      i.result.close();
                      r(t);
                    };
                    i.onupgradeneeded = function () {
                      i.result.deleteObjectStore(t.storeName);
                    };
                    i.onsuccess = function () {
                      var t = i.result;
                      t.close();
                      e(t);
                    };
                  }).then(function (t) {
                    r.db = t;
                    for (var e = 0; e < i.length; e++) {
                      var n = i[e];
                      n._dbInfo.db = t;
                      m(n._dbInfo);
                    }
                  }).catch(function (e) {
                    (g(t, e) || s.resolve()).catch(function () {});
                    throw e;
                  });
                }
              }) : u.then(function (e) {
                y(t);
                var n = h[t.name];
                var r = n.forages;
                e.close();
                for (var i = 0; i < r.length; i++) {
                  r[i]._dbInfo.db = null;
                }
                return new s(function (e, n) {
                  var r = o.deleteDatabase(t.name);
                  r.onerror = r.onblocked = function (t) {
                    var e = r.result;
                    if (e) {
                      e.close();
                    }
                    n(t);
                  };
                  r.onsuccess = function () {
                    var t = r.result;
                    if (t) {
                      t.close();
                    }
                    e(t);
                  };
                }).then(function (t) {
                  n.db = t;
                  for (var e = 0; e < r.length; e++) {
                    m(r[e]._dbInfo);
                  }
                }).catch(function (e) {
                  (g(t, e) || s.resolve()).catch(function () {});
                  throw e;
                });
              });
            } else {
              r = s.reject("Invalid arguments");
            }
            a(r, e);
            return r;
          }
        };
        var I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var A = /^~~local_forage_type~([^~]+)~/;
        var N = "__lfsc__:".length;
        var j = N + "arbf".length;
        var D = Object.prototype.toString;
        function C(t) {
          var e;
          var n;
          var r;
          var o;
          var i;
          var s = t.length * 0.75;
          var a = t.length;
          var c = 0;
          if (t[t.length - 1] === "=") {
            s--;
            if (t[t.length - 2] === "=") {
              s--;
            }
          }
          var u = new ArrayBuffer(s);
          var f = new Uint8Array(u);
          for (e = 0; e < a; e += 4) {
            n = I.indexOf(t[e]);
            r = I.indexOf(t[e + 1]);
            o = I.indexOf(t[e + 2]);
            i = I.indexOf(t[e + 3]);
            f[c++] = n << 2 | r >> 4;
            f[c++] = (r & 15) << 4 | o >> 2;
            f[c++] = (o & 3) << 6 | i & 63;
          }
          return u;
        }
        function P(t) {
          var e;
          var n = new Uint8Array(t);
          var r = "";
          for (e = 0; e < n.length; e += 3) {
            r += I[n[e] >> 2];
            r += I[(n[e] & 3) << 4 | n[e + 1] >> 4];
            r += I[(n[e + 1] & 15) << 2 | n[e + 2] >> 6];
            r += I[n[e + 2] & 63];
          }
          if (n.length % 3 == 2) {
            r = r.substring(0, r.length - 1) + "=";
          } else if (n.length % 3 == 1) {
            r = r.substring(0, r.length - 2) + "==";
          }
          return r;
        }
        var k = {
          serialize: function (t, e) {
            var n = "";
            if (t) {
              n = D.call(t);
            }
            if (t && (n === "[object ArrayBuffer]" || t.buffer && D.call(t.buffer) === "[object ArrayBuffer]")) {
              var r;
              var o = "__lfsc__:";
              if (t instanceof ArrayBuffer) {
                r = t;
                o += "arbf";
              } else {
                r = t.buffer;
                if (n === "[object Int8Array]") {
                  o += "si08";
                } else if (n === "[object Uint8Array]") {
                  o += "ui08";
                } else if (n === "[object Uint8ClampedArray]") {
                  o += "uic8";
                } else if (n === "[object Int16Array]") {
                  o += "si16";
                } else if (n === "[object Uint16Array]") {
                  o += "ur16";
                } else if (n === "[object Int32Array]") {
                  o += "si32";
                } else if (n === "[object Uint32Array]") {
                  o += "ui32";
                } else if (n === "[object Float32Array]") {
                  o += "fl32";
                } else if (n === "[object Float64Array]") {
                  o += "fl64";
                } else {
                  e(new Error("Failed to get type for BinaryArray"));
                }
              }
              e(o + P(r));
            } else if (n === "[object Blob]") {
              var i = new FileReader();
              i.onload = function () {
                var n = "~~local_forage_type~" + t.type + "~" + P(this.result);
                e("__lfsc__:blob" + n);
              };
              i.readAsArrayBuffer(t);
            } else {
              try {
                e(JSON.stringify(t));
              } catch (n) {
                console.error("Couldn't convert value into a JSON string: ", t);
                e(null, n);
              }
            }
          },
          deserialize: function (t) {
            if (t.substring(0, N) !== "__lfsc__:") {
              return JSON.parse(t);
            }
            var e;
            var n = t.substring(j);
            var r = t.substring(N, j);
            if (r === "blob" && A.test(n)) {
              var o = n.match(A);
              e = o[1];
              n = n.substring(o[0].length);
            }
            var s = C(n);
            switch (r) {
              case "arbf":
                return s;
              case "blob":
                return i([s], {
                  type: e
                });
              case "si08":
                return new Int8Array(s);
              case "ui08":
                return new Uint8Array(s);
              case "uic8":
                return new Uint8ClampedArray(s);
              case "si16":
                return new Int16Array(s);
              case "ur16":
                return new Uint16Array(s);
              case "si32":
                return new Int32Array(s);
              case "ui32":
                return new Uint32Array(s);
              case "fl32":
                return new Float32Array(s);
              case "fl64":
                return new Float64Array(s);
              default:
                throw new Error("Unkown type: " + r);
            }
          },
          stringToBuffer: C,
          bufferToString: P
        };
        function R(t, e, n, r) {
          t.executeSql("CREATE TABLE IF NOT EXISTS " + e.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r);
        }
        function L(t, e, n, r, o, i) {
          t.executeSql(n, r, o, function (t, s) {
            if (s.code === s.SYNTAX_ERR) {
              t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [e.storeName], function (t, a) {
                if (a.rows.length) {
                  i(t, s);
                } else {
                  R(t, e, function () {
                    t.executeSql(n, r, o, i);
                  }, i);
                }
              }, i);
            } else {
              i(t, s);
            }
          }, i);
        }
        function M(t, e, n, r) {
          var o = this;
          t = u(t);
          var i = new s(function (i, s) {
            o.ready().then(function () {
              if (e === undefined) {
                e = null;
              }
              var a = e;
              var c = o._dbInfo;
              c.serializer.serialize(e, function (e, u) {
                if (u) {
                  s(u);
                } else {
                  c.db.transaction(function (n) {
                    L(n, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [t, e], function () {
                      i(a);
                    }, function (t, e) {
                      s(e);
                    });
                  }, function (e) {
                    if (e.code === e.QUOTA_ERR) {
                      if (r > 0) {
                        i(M.apply(o, [t, a, n, r - 1]));
                        return;
                      }
                      s(e);
                    }
                  });
                }
              });
            }).catch(s);
          });
          a(i, n);
          return i;
        }
        function F(t) {
          return new s(function (e, n) {
            t.transaction(function (r) {
              r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (n, r) {
                var o = [];
                for (var i = 0; i < r.rows.length; i++) {
                  o.push(r.rows.item(i).name);
                }
                e({
                  db: t,
                  storeNames: o
                });
              }, function (t, e) {
                n(e);
              });
            }, function (t) {
              n(t);
            });
          });
        }
        var B = {
          _driver: "webSQLStorage",
          _initStorage: function (t) {
            var e = this;
            var n = {
              db: null
            };
            if (t) {
              for (var r in t) {
                n[r] = typeof t[r] != "string" ? t[r].toString() : t[r];
              }
            }
            var o = new s(function (t, r) {
              try {
                n.db = openDatabase(n.name, String(n.version), n.description, n.size);
              } catch (t) {
                return r(t);
              }
              n.db.transaction(function (o) {
                R(o, n, function () {
                  e._dbInfo = n;
                  t();
                }, function (t, e) {
                  r(e);
                });
              }, r);
            });
            n.serializer = k;
            return o;
          },
          _support: typeof openDatabase == "function",
          iterate: function (t, e) {
            var n = this;
            var r = new s(function (e, r) {
              n.ready().then(function () {
                var o = n._dbInfo;
                o.db.transaction(function (n) {
                  L(n, o, "SELECT * FROM " + o.storeName, [], function (n, r) {
                    var i = r.rows;
                    for (var s = i.length, a = 0; a < s; a++) {
                      var c = i.item(a);
                      var u = c.value;
                      u &&= o.serializer.deserialize(u);
                      if ((u = t(u, c.key, a + 1)) !== undefined) {
                        e(u);
                        return;
                      }
                    }
                    e();
                  }, function (t, e) {
                    r(e);
                  });
                });
              }).catch(r);
            });
            a(r, e);
            return r;
          },
          getItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = new s(function (e, r) {
              n.ready().then(function () {
                var o = n._dbInfo;
                o.db.transaction(function (n) {
                  L(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [t], function (t, n) {
                    var r = n.rows.length ? n.rows.item(0).value : null;
                    r &&= o.serializer.deserialize(r);
                    e(r);
                  }, function (t, e) {
                    r(e);
                  });
                });
              }).catch(r);
            });
            a(r, e);
            return r;
          },
          setItem: function (t, e, n) {
            return M.apply(this, [t, e, n, 1]);
          },
          removeItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = new s(function (e, r) {
              n.ready().then(function () {
                var o = n._dbInfo;
                o.db.transaction(function (n) {
                  L(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [t], function () {
                    e();
                  }, function (t, e) {
                    r(e);
                  });
                });
              }).catch(r);
            });
            a(r, e);
            return r;
          },
          clear: function (t) {
            var e = this;
            var n = new s(function (t, n) {
              e.ready().then(function () {
                var r = e._dbInfo;
                r.db.transaction(function (e) {
                  L(e, r, "DELETE FROM " + r.storeName, [], function () {
                    t();
                  }, function (t, e) {
                    n(e);
                  });
                });
              }).catch(n);
            });
            a(n, t);
            return n;
          },
          length: function (t) {
            var e = this;
            var n = new s(function (t, n) {
              e.ready().then(function () {
                var r = e._dbInfo;
                r.db.transaction(function (e) {
                  L(e, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], function (e, n) {
                    var r = n.rows.item(0).c;
                    t(r);
                  }, function (t, e) {
                    n(e);
                  });
                });
              }).catch(n);
            });
            a(n, t);
            return n;
          },
          key: function (t, e) {
            var n = this;
            var r = new s(function (e, r) {
              n.ready().then(function () {
                var o = n._dbInfo;
                o.db.transaction(function (n) {
                  L(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [t + 1], function (t, n) {
                    var r = n.rows.length ? n.rows.item(0).key : null;
                    e(r);
                  }, function (t, e) {
                    r(e);
                  });
                });
              }).catch(r);
            });
            a(r, e);
            return r;
          },
          keys: function (t) {
            var e = this;
            var n = new s(function (t, n) {
              e.ready().then(function () {
                var r = e._dbInfo;
                r.db.transaction(function (e) {
                  L(e, r, "SELECT key FROM " + r.storeName, [], function (e, n) {
                    var r = [];
                    for (var o = 0; o < n.rows.length; o++) {
                      r.push(n.rows.item(o).key);
                    }
                    t(r);
                  }, function (t, e) {
                    n(e);
                  });
                });
              }).catch(n);
            });
            a(n, t);
            return n;
          },
          dropInstance: function (t, e) {
            e = f.apply(this, arguments);
            var n = this.config();
            if (!(t = typeof t != "function" && t || {}).name) {
              t.name = t.name || n.name;
              t.storeName = t.storeName || n.storeName;
            }
            var r;
            var o = this;
            a(r = t.name ? new s(function (e) {
              var r;
              r = t.name === n.name ? o._dbInfo.db : openDatabase(t.name, "", "", 0);
              if (t.storeName) {
                e({
                  db: r,
                  storeNames: [t.storeName]
                });
              } else {
                e(F(r));
              }
            }).then(function (t) {
              return new s(function (e, n) {
                t.db.transaction(function (r) {
                  function o(t) {
                    return new s(function (e, n) {
                      r.executeSql("DROP TABLE IF EXISTS " + t, [], function () {
                        e();
                      }, function (t, e) {
                        n(e);
                      });
                    });
                  }
                  var i = [];
                  for (var a = 0, c = t.storeNames.length; a < c; a++) {
                    i.push(o(t.storeNames[a]));
                  }
                  s.all(i).then(function () {
                    e();
                  }).catch(function (t) {
                    n(t);
                  });
                }, function (t) {
                  n(t);
                });
              });
            }) : s.reject("Invalid arguments"), e);
            return r;
          }
        };
        function U(t, e) {
          var n = t.name + "/";
          if (t.storeName !== e.storeName) {
            n += t.storeName + "/";
          }
          return n;
        }
        function q() {
          return !function () {
            try {
              localStorage.setItem("_localforage_support_test", true);
              localStorage.removeItem("_localforage_support_test");
              return false;
            } catch (t) {
              return true;
            }
          }() || localStorage.length > 0;
        }
        var W = {
          _driver: "localStorageWrapper",
          _initStorage: function (t) {
            var e = {};
            if (t) {
              for (var n in t) {
                e[n] = t[n];
              }
            }
            e.keyPrefix = U(t, this._defaultConfig);
            if (q()) {
              this._dbInfo = e;
              e.serializer = k;
              return s.resolve();
            } else {
              return s.reject();
            }
          },
          _support: function () {
            try {
              return typeof localStorage != "undefined" && "setItem" in localStorage && !!localStorage.setItem;
            } catch (t) {
              return false;
            }
          }(),
          iterate: function (t, e) {
            var n = this;
            var r = n.ready().then(function () {
              var e = n._dbInfo;
              var r = e.keyPrefix;
              var o = r.length;
              for (var i = localStorage.length, s = 1, a = 0; a < i; a++) {
                var c = localStorage.key(a);
                if (c.indexOf(r) === 0) {
                  var u = localStorage.getItem(c);
                  u &&= e.serializer.deserialize(u);
                  if ((u = t(u, c.substring(o), s++)) !== undefined) {
                    return u;
                  }
                }
              }
            });
            a(r, e);
            return r;
          },
          getItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = n.ready().then(function () {
              var e = n._dbInfo;
              var r = localStorage.getItem(e.keyPrefix + t);
              r &&= e.serializer.deserialize(r);
              return r;
            });
            a(r, e);
            return r;
          },
          setItem: function (t, e, n) {
            var r = this;
            t = u(t);
            var o = r.ready().then(function () {
              if (e === undefined) {
                e = null;
              }
              var n = e;
              return new s(function (o, i) {
                var s = r._dbInfo;
                s.serializer.serialize(e, function (e, r) {
                  if (r) {
                    i(r);
                  } else {
                    try {
                      localStorage.setItem(s.keyPrefix + t, e);
                      o(n);
                    } catch (t) {
                      if (t.name === "QuotaExceededError" || t.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                        i(t);
                      }
                      i(t);
                    }
                  }
                });
              });
            });
            a(o, n);
            return o;
          },
          removeItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = n.ready().then(function () {
              var e = n._dbInfo;
              localStorage.removeItem(e.keyPrefix + t);
            });
            a(r, e);
            return r;
          },
          clear: function (t) {
            var e = this;
            var n = e.ready().then(function () {
              var t = e._dbInfo.keyPrefix;
              for (var n = localStorage.length - 1; n >= 0; n--) {
                var r = localStorage.key(n);
                if (r.indexOf(t) === 0) {
                  localStorage.removeItem(r);
                }
              }
            });
            a(n, t);
            return n;
          },
          length: function (t) {
            var e = this.keys().then(function (t) {
              return t.length;
            });
            a(e, t);
            return e;
          },
          key: function (t, e) {
            var n = this;
            var r = n.ready().then(function () {
              var e;
              var r = n._dbInfo;
              try {
                e = localStorage.key(t);
              } catch (t) {
                e = null;
              }
              e &&= e.substring(r.keyPrefix.length);
              return e;
            });
            a(r, e);
            return r;
          },
          keys: function (t) {
            var e = this;
            var n = e.ready().then(function () {
              var t = e._dbInfo;
              for (var n = localStorage.length, r = [], o = 0; o < n; o++) {
                var i = localStorage.key(o);
                if (i.indexOf(t.keyPrefix) === 0) {
                  r.push(i.substring(t.keyPrefix.length));
                }
              }
              return r;
            });
            a(n, t);
            return n;
          },
          dropInstance: function (t, e) {
            e = f.apply(this, arguments);
            if (!(t = typeof t != "function" && t || {}).name) {
              var n = this.config();
              t.name = t.name || n.name;
              t.storeName = t.storeName || n.storeName;
            }
            var r;
            var o = this;
            a(r = t.name ? new s(function (e) {
              if (t.storeName) {
                e(U(t, o._defaultConfig));
              } else {
                e(t.name + "/");
              }
            }).then(function (t) {
              for (var e = localStorage.length - 1; e >= 0; e--) {
                var n = localStorage.key(e);
                if (n.indexOf(t) === 0) {
                  localStorage.removeItem(n);
                }
              }
            }) : s.reject("Invalid arguments"), e);
            return r;
          }
        };
        function V(t, e) {
          var n;
          var r;
          for (var o = t.length, i = 0; i < o;) {
            if ((n = t[i]) === (r = e) || typeof n == "number" && typeof r == "number" && isNaN(n) && isNaN(r)) {
              return true;
            }
            i++;
          }
          return false;
        }
        var z = Array.isArray || function (t) {
          return Object.prototype.toString.call(t) === "[object Array]";
        };
        var Y = {};
        var G = {};
        var H = {
          INDEXEDDB: S,
          WEBSQL: B,
          LOCALSTORAGE: W
        };
        var K = [H.INDEXEDDB._driver, H.WEBSQL._driver, H.LOCALSTORAGE._driver];
        var $ = ["dropInstance"];
        var X = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat($);
        var Q = {
          description: "",
          driver: K.slice(),
          name: "localforage",
          size: 4980736,
          storeName: "keyvaluepairs",
          version: 1
        };
        function J(t, e) {
          t[e] = function () {
            var n = arguments;
            return t.ready().then(function () {
              return t[e].apply(t, n);
            });
          };
        }
        function Z() {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            if (e) {
              for (var n in e) {
                if (e.hasOwnProperty(n)) {
                  if (z(e[n])) {
                    arguments[0][n] = e[n].slice();
                  } else {
                    arguments[0][n] = e[n];
                  }
                }
              }
            }
          }
          return arguments[0];
        }
        var tt = new (function () {
          function t(e) {
            (function (t, e) {
              if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, t);
            for (var n in H) {
              if (H.hasOwnProperty(n)) {
                var r = H[n];
                var o = r._driver;
                this[n] = o;
                if (!Y[o]) {
                  this.defineDriver(r);
                }
              }
            }
            this._defaultConfig = Z({}, Q);
            this._config = Z({}, this._defaultConfig, e);
            this._driverSet = null;
            this._initDriver = null;
            this._ready = false;
            this._dbInfo = null;
            this._wrapLibraryMethodsWithReady();
            this.setDriver(this._config.driver).catch(function () {});
          }
          t.prototype.config = function (t) {
            if ((t === undefined ? "undefined" : r(t)) === "object") {
              if (this._ready) {
                return new Error("Can't call config() after localforage has been used.");
              }
              for (var e in t) {
                if (e === "storeName") {
                  t[e] = t[e].replace(/\W/g, "_");
                }
                if (e === "version" && typeof t[e] != "number") {
                  return new Error("Database version must be a number.");
                }
                this._config[e] = t[e];
              }
              return !("driver" in t) || !t.driver || this.setDriver(this._config.driver);
            }
            if (typeof t == "string") {
              return this._config[t];
            } else {
              return this._config;
            }
          };
          t.prototype.defineDriver = function (t, e, n) {
            var r = new s(function (e, n) {
              try {
                var r = t._driver;
                var o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!t._driver) {
                  n(o);
                  return;
                }
                var i = X.concat("_initStorage");
                for (var c = 0, u = i.length; c < u; c++) {
                  var f = i[c];
                  if ((!V($, f) || t[f]) && typeof t[f] != "function") {
                    n(o);
                    return;
                  }
                }
                (function () {
                  var e = function (t) {
                    return function () {
                      var e = new Error("Method " + t + " is not implemented by the current driver");
                      var n = s.reject(e);
                      a(n, arguments[arguments.length - 1]);
                      return n;
                    };
                  };
                  for (var n = 0, r = $.length; n < r; n++) {
                    var o = $[n];
                    t[o] ||= e(o);
                  }
                })();
                function l(n) {
                  if (Y[r]) {
                    console.info("Redefining LocalForage driver: " + r);
                  }
                  Y[r] = t;
                  G[r] = n;
                  e();
                }
                if ("_support" in t) {
                  if (t._support && typeof t._support == "function") {
                    t._support().then(l, n);
                  } else {
                    l(!!t._support);
                  }
                } else {
                  l(true);
                }
              } catch (t) {
                n(t);
              }
            });
            c(r, e, n);
            return r;
          };
          t.prototype.driver = function () {
            return this._driver || null;
          };
          t.prototype.getDriver = function (t, e, n) {
            var r = Y[t] ? s.resolve(Y[t]) : s.reject(new Error("Driver not found."));
            c(r, e, n);
            return r;
          };
          t.prototype.getSerializer = function (t) {
            var e = s.resolve(k);
            c(e, t);
            return e;
          };
          t.prototype.ready = function (t) {
            var e = this;
            var n = e._driverSet.then(function () {
              if (e._ready === null) {
                e._ready = e._initDriver();
              }
              return e._ready;
            });
            c(n, t, t);
            return n;
          };
          t.prototype.setDriver = function (t, e, n) {
            var r = this;
            if (!z(t)) {
              t = [t];
            }
            var o = this._getSupportedDrivers(t);
            function i() {
              r._config.driver = r.driver();
            }
            function a(t) {
              r._extend(t);
              i();
              r._ready = r._initStorage(r._config);
              return r._ready;
            }
            var u = this._driverSet !== null ? this._driverSet.catch(function () {
              return s.resolve();
            }) : s.resolve();
            this._driverSet = u.then(function () {
              var t = o[0];
              r._dbInfo = null;
              r._ready = null;
              return r.getDriver(t).then(function (t) {
                r._driver = t._driver;
                i();
                r._wrapLibraryMethodsWithReady();
                r._initDriver = function (t) {
                  return function () {
                    var e = 0;
                    return function n() {
                      while (e < t.length) {
                        var o = t[e];
                        e++;
                        r._dbInfo = null;
                        r._ready = null;
                        return r.getDriver(o).then(a).catch(n);
                      }
                      i();
                      var c = new Error("No available storage method found.");
                      r._driverSet = s.reject(c);
                      return r._driverSet;
                    }();
                  };
                }(o);
              });
            }).catch(function () {
              i();
              var t = new Error("No available storage method found.");
              r._driverSet = s.reject(t);
              return r._driverSet;
            });
            c(this._driverSet, e, n);
            return this._driverSet;
          };
          t.prototype.supports = function (t) {
            return !!G[t];
          };
          t.prototype._extend = function (t) {
            Z(this, t);
          };
          t.prototype._getSupportedDrivers = function (t) {
            var e = [];
            for (var n = 0, r = t.length; n < r; n++) {
              var o = t[n];
              if (this.supports(o)) {
                e.push(o);
              }
            }
            return e;
          };
          t.prototype._wrapLibraryMethodsWithReady = function () {
            for (var t = 0, e = X.length; t < e; t++) {
              J(this, X[t]);
            }
          };
          t.prototype.createInstance = function (e) {
            return new t(e);
          };
          return t;
        }())();
        e.exports = tt;
      }, {
        3: 3
      }]
    }, {}, [4])(4);
  }).call(this, n(14));
}, function (t, e, n) {
  var r = n(91);
  var o = {}.hasOwnProperty;
  t.exports = Object.hasOwn || function (t, e) {
    return o.call(r(t), e);
  };
}, function (t, e) {
  (function () {
    var e;
    var n;
    var r;
    var o;
    var i;
    var s;
    var a;
    var c = [].slice;
    var u = {}.hasOwnProperty;
    e = function () {
      var t;
      var e;
      var n;
      var r;
      var o;
      var s;
      s = arguments[0];
      o = arguments.length >= 2 ? c.call(arguments, 1) : [];
      if (i(Object.assign)) {
        Object.assign.apply(null, arguments);
      } else {
        t = 0;
        n = o.length;
        for (; t < n; t++) {
          if ((r = o[t]) != null) {
            for (e in r) {
              if (u.call(r, e)) {
                s[e] = r[e];
              }
            }
          }
        }
      }
      return s;
    };
    i = function (t) {
      return !!t && Object.prototype.toString.call(t) === "[object Function]";
    };
    s = function (t) {
      var e;
      return !!t && ((e = typeof t) == "function" || e === "object");
    };
    r = function (t) {
      if (i(Array.isArray)) {
        return Array.isArray(t);
      } else {
        return Object.prototype.toString.call(t) === "[object Array]";
      }
    };
    o = function (t) {
      var e;
      if (r(t)) {
        return !t.length;
      }
      for (e in t) {
        if (u.call(t, e)) {
          return false;
        }
      }
      return true;
    };
    a = function (t) {
      var e;
      var n;
      return s(t) && (n = Object.getPrototypeOf(t)) && (e = n.constructor) && typeof e == "function" && e instanceof e && Function.prototype.toString.call(e) === Function.prototype.toString.call(Object);
    };
    n = function (t) {
      if (i(t.valueOf)) {
        return t.valueOf();
      } else {
        return t;
      }
    };
    t.exports.assign = e;
    t.exports.isFunction = i;
    t.exports.isObject = s;
    t.exports.isArray = r;
    t.exports.isEmpty = o;
    t.exports.isPlainObject = a;
    t.exports.getValue = n;
  }).call(this);
}, function (t, e) {
  t.exports = function (t) {
    if (typeof t == "object") {
      return t !== null;
    } else {
      return typeof t == "function";
    }
  };
}, function (t, e, n) {
  "use strict";

  try {
    if (self["workbox:strategies:5.1.4"]) {
      _();
    }
  } catch (t) {}
}, function (t, e, n) {
  "use strict";

  var r = n(88);
  var o = n(106);
  r({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== o
  }, {
    exec: o
  });
}, function (t, e, n) {
  "use strict";

  var r = n(7);
  var o = n(172).f;
  var i = n(176);
  var s = n(63);
  var a = n(109);
  var c = n(19);
  var u = n(30);
  function f(t) {
    function e(e, n, r) {
      if (this instanceof t) {
        switch (arguments.length) {
          case 0:
            return new t();
          case 1:
            return new t(e);
          case 2:
            return new t(e, n);
        }
        return new t(e, n, r);
      }
      return t.apply(this, arguments);
    }
    e.prototype = t.prototype;
    return e;
  }
  t.exports = function (t, e) {
    var n;
    var l;
    var h;
    var p;
    var d;
    var y;
    var m;
    var g;
    var v = t.target;
    var b = t.global;
    var w = t.stat;
    var _ = t.proto;
    var x = b ? r : w ? r[v] : (r[v] || {}).prototype;
    var T = b ? s : s[v] ||= {};
    var E = T.prototype;
    for (h in e) {
      n = !i(b ? h : v + (w ? "." : "#") + h, t.forced) && x && u(x, h);
      d = T[h];
      if (n) {
        y = t.noTargetGet ? (g = o(x, h)) && g.value : x[h];
      }
      p = n && y ? y : e[h];
      if (!n || typeof d != typeof p) {
        m = t.bind && n ? a(p, r) : t.wrap && n ? f(p) : _ && typeof p == "function" ? a(Function.call, p) : p;
        if (t.sham || p && p.sham || d && d.sham) {
          c(m, "sham", true);
        }
        T[h] = m;
        if (_) {
          if (!u(s, l = v + "Prototype")) {
            c(s, l, {});
          }
          s[l][h] = p;
          if (t.real && E && !E[h]) {
            c(E, h, p);
          }
        }
      }
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    if (typeof t == "object") {
      return t !== null;
    } else {
      return typeof t == "function";
    }
  };
}, function (t, e, n) {
  var r = n(174);
  var o = {}.hasOwnProperty;
  t.exports = Object.hasOwn || function (t, e) {
    return o.call(r(t), e);
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  };
}, function (t, e, n) {
  var r = n(8);
  t.exports = !r(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
}, function (t, e) {
  t.exports = function (t) {
    if (typeof t != "function") {
      throw TypeError(String(t) + " is not a function");
    }
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(70);
  var o = Object.keys || function (t) {
    var e = [];
    for (var n in t) {
      e.push(n);
    }
    return e;
  };
  t.exports = l;
  var i = Object.create(n(52));
  i.inherits = n(46);
  var s = n(196);
  var a = n(138);
  i.inherits(l, s);
  for (var c = o(a.prototype), u = 0; u < c.length; u++) {
    var f = c[u];
    l.prototype[f] ||= a.prototype[f];
  }
  function l(t) {
    if (!(this instanceof l)) {
      return new l(t);
    }
    s.call(this, t);
    a.call(this, t);
    if (t && t.readable === false) {
      this.readable = false;
    }
    if (t && t.writable === false) {
      this.writable = false;
    }
    this.allowHalfOpen = true;
    if (t && t.allowHalfOpen === false) {
      this.allowHalfOpen = false;
    }
    this.once("end", h);
  }
  function h() {
    if (!this.allowHalfOpen && !this._writableState.ended) {
      r.nextTick(p, this);
    }
  }
  function p(t) {
    t.end();
  }
  Object.defineProperty(l.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function () {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(l.prototype, "destroyed", {
    get: function () {
      return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function (t) {
      if (this._readableState !== undefined && this._writableState !== undefined) {
        this._readableState.destroyed = t;
        this._writableState.destroyed = t;
      }
    }
  });
  l.prototype._destroy = function (t, e) {
    this.push(null);
    this.end();
    r.nextTick(e, t);
  };
}, function (t, e) {
  t.exports = function (t) {
    return t != null && typeof t == "object";
  };
}, function (t, e, n) {
  var r = n(402);
  var o = n(405);
  t.exports = function (t, e) {
    var n = o(t, e);
    if (r(n)) {
      return n;
    } else {
      return undefined;
    }
  };
}, function (t, e, n) {
  var r = n(32);
  var o = n(38);
  var i = n(154);
  t.exports = r ? function (t, e, n) {
    return o.f(t, e, i(1, n));
  } : function (t, e, n) {
    t[e] = n;
    return t;
  };
}, function (t, e, n) {
  var r = n(32);
  var o = n(156);
  var i = n(15);
  var s = n(155);
  var a = Object.defineProperty;
  e.f = r ? a : function (t, e, n) {
    i(t);
    e = s(e, true);
    i(n);
    if (o) {
      try {
        return a(t, e, n);
      } catch (t) {}
    }
    if ("get" in n || "set" in n) {
      throw TypeError("Accessors not supported");
    }
    if ("value" in n) {
      t[e] = n.value;
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(5);
  var o = n(37);
  var i = n(23);
  var s = n(93);
  var a = n(94);
  var c = n(96);
  var u = c.get;
  var f = c.enforce;
  var l = String(String).split("String");
  (t.exports = function (t, e, n, a) {
    var u = !!a && !!a.unsafe;
    var h = !!a && !!a.enumerable;
    var p = !!a && !!a.noTargetGet;
    if (typeof n == "function") {
      if (typeof e == "string" && !i(n, "name")) {
        o(n, "name", e);
      }
      f(n).source ||= l.join(typeof e == "string" ? e : "");
    }
    if (t !== r) {
      if (u) {
        if (!p && t[e]) {
          h = true;
        }
      } else {
        delete t[e];
      }
      if (h) {
        t[e] = n;
      } else {
        o(t, e, n);
      }
    } else if (h) {
      t[e] = n;
    } else {
      s(e, n);
    }
  })(Function.prototype, "toString", function () {
    return typeof this == "function" && u(this).source || a(this);
  });
}, function (t, e, n) {
  var r = n(251);
  var o = n(5);
  function i(t) {
    if (typeof t == "function") {
      return t;
    } else {
      return undefined;
    }
  }
  t.exports = function (t, e) {
    if (arguments.length < 2) {
      return i(r[t]) || i(o[t]);
    } else {
      return r[t] && r[t][e] || o[t] && o[t][e];
    }
  };
}, function (t, e, n) {
  var r = n(40);
  t.exports = r("navigator", "userAgent") || "";
}, function (t, e, n) {
  var r = n(18);
  t.exports = !r(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
}, function (t, e) {
  t.exports = true;
}, function (t, e, n) {
  var r = n(63);
  var o = n(7);
  function i(t) {
    if (typeof t == "function") {
      return t;
    } else {
      return undefined;
    }
  }
  t.exports = function (t, e) {
    if (arguments.length < 2) {
      return i(r[t]) || i(o[t]);
    } else {
      return r[t] && r[t][e] || o[t] && o[t][e];
    }
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e) {
  if (typeof Object.create == "function") {
    t.exports = function (t, e) {
      if (e) {
        t.super_ = e;
        t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    t.exports = function (t, e) {
      if (e) {
        t.super_ = e;
        function n() {}
        n.prototype = e.prototype;
        t.prototype = new n();
        t.prototype.constructor = t;
      }
    };
  }
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return o;
  });
  n.d(e, "a", function () {
    return i;
  });
  n(6);
  n(357);
  n(27);
  n(107);
  var r = n(0);
  function o(t) {
    return function (e) {
      const n = new Uint8Array((e || 40) / 2);
      window.crypto.getRandomValues(n);
      return t + new Date().getTime().toString(32) + function (t) {
        let e = "";
        const n = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let r = 0; r < t; r++) {
          e += n.charAt(Math.floor(Math.random() * n.length));
        }
        return e;
      }(18);
    }();
  }
  function i(t, e = r.o.lang) {
    const n = this;
    const o = /(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/;
    let i;
    let s;
    let a;
    if (o.test(t)) {
      t.replace(o, (t, r, o, c) => {
        if (r.length === 4) {
          i = r;
          s = o;
          a = c;
        } else if (n.isFirstDate(e)) {
          a = r;
          s = o;
          i = c;
        } else {
          a = o;
          s = r;
          i = c;
        }
        if (e === "th") {
          i = Number(i) - 543;
        }
      });
      return new Date(`${i}/${s}/${a}`);
    } else {
      return null;
    }
  }
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return w;
  });
  n.d(e, "a", function () {
    return _;
  });
  n.d(e, "c", function () {
    return x;
  });
  n.d(e, "d", function () {
    return T;
  });
  var r;
  var o = n(84);
  var i = n.n(o);
  n(3);
  var s = n(6);
  var a = n.n(s);
  n(366);
  var c = {
    randomUUID: typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  var u = new Uint8Array(16);
  function f() {
    if (!r && !(r = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return r(u);
  }
  var l = [];
  for (var h = 0; h < 256; ++h) {
    l.push((h + 256).toString(16).slice(1));
  }
  function p(t, e = 0) {
    return (l[t[e + 0]] + l[t[e + 1]] + l[t[e + 2]] + l[t[e + 3]] + "-" + l[t[e + 4]] + l[t[e + 5]] + "-" + l[t[e + 6]] + l[t[e + 7]] + "-" + l[t[e + 8]] + l[t[e + 9]] + "-" + l[t[e + 10]] + l[t[e + 11]] + l[t[e + 12]] + l[t[e + 13]] + l[t[e + 14]] + l[t[e + 15]]).toLowerCase();
  }
  var d;
  function y(t, e, n) {
    if (c.randomUUID && !e && !t) {
      return c.randomUUID();
    }
    var r = (t = t || {}).random || (t.rng || f)();
    r[6] = r[6] & 15 | 64;
    r[8] = r[8] & 63 | 128;
    if (e) {
      n = n || 0;
      for (var o = 0; o < 16; ++o) {
        e[n + o] = r[o];
      }
      return e;
    }
    return p(r);
  }
  (function (t) {
    t.BG_PLAY_AUDIO = "BG_PLAY_AUDIO";
    t.BG_GET_LOCAL_STORAGE = "BG_GET_LOCAL_STORAGE";
    t.BG_SET_LOCAL_STORAGE = "BG_SET_LOCAL_STORAGE";
    t.BG_REMOVE_LOCAL_STORAGE = "BG_REMOVE_LOCAL_STORAGE";
  })(d ||= {});
  var m = n(0);
  function g(t, e) {
    if (Array.isArray(t)) {
      return t.includes(e);
    } else {
      return typeof t == "string" && t === e;
    }
  }
  function v(t) {
    const e = {};
    if (t instanceof Error) {
      e.message = t.message;
      e.stack = t.stack;
    } else {
      e.message = t.message || t || "error";
    }
    return e;
  }
  const b = new class {
    constructor() {
      this.responseTimeout = 5000;
      this.actionListeners = new Map();
      this.responseListeners = new Map();
      if (m.f) {
        this.initListener();
      }
    }
    async execSendTypeCb(t) {
      const e = this.actionListeners.get(t.action);
      if (!e) {
        return;
      }
      const {
        listenInfo: n,
        listenCb: r
      } = e;
      if (g(n.from, t.from) && g(t.to, n.to)) {
        if (m.e) {
          console.log("-->> ~ execSendTypeCb:", t);
        }
        const e = await r(t.payload);
        if (t.needResponse && t.responseId) {
          const n = {
            type: "ext_response",
            responseId: t.responseId,
            response: {
              responseData: e,
              responseSuccess: true
            }
          };
          chrome.runtime.sendMessage(n, () => {
            if (chrome.runtime.lastError) {
              console.warn("Response sendMessage: ", chrome.runtime.lastError.message);
            }
          });
        }
        return e;
      }
    }
    async execResponseTypeCb(t) {
      const e = this.responseListeners.get(t.responseId);
      if (!e) {
        return;
      }
      if (m.e) {
        console.log("-->> ~ execResponseTypeCb:", t);
      }
      return await e(t.response);
    }
    initListener() {
      chrome.runtime.onMessage.addListener((t, e, n) => {
        try {
          const {
            type: e
          } = t;
          if (e === "ext_send") {
            const e = t;
            this.execSendTypeCb(e).catch(t => {
              console.warn("onMessage", e, t);
              if (e.needResponse && e.responseId) {
                const n = {
                  type: "ext_response",
                  responseId: e.responseId,
                  response: {
                    responseData: v(t),
                    responseSuccess: false
                  }
                };
                chrome.runtime.sendMessage(n, () => {
                  if (chrome.runtime.lastError) {
                    console.warn("Response sendMessage: ", chrome.runtime.lastError.message);
                  }
                });
              }
            }).finally(() => {
              n(null);
            });
            return true;
          }
          if (e === "ext_response") {
            this.execResponseTypeCb(t).catch(e => {
              console.warn("onMessage", t, e);
            }).finally(() => {
              n(null);
            });
            return true;
          }
        } catch (e) {
          console.warn("onMessage", t, e);
        }
      });
    }
    _listenResponse(t, e, n) {
      const r = t.action + ":" + y();
      const o = setTimeout(() => {
        this.responseListeners.delete(r);
        n(new Error("response timeout"));
      }, t.responseTimeout || this.responseTimeout);
      this.responseListeners.set(r, t => {
        const {
          responseData: i,
          responseSuccess: s
        } = t;
        clearTimeout(o);
        if (s) {
          e(i);
        } else {
          n(i);
        }
        this.responseListeners.delete(r);
      });
      return r;
    }
    listen(t, e) {
      if (this.actionListeners.has(t.action)) {
        console.warn("key already exists: " + t.action);
      } else {
        this.actionListeners.set(t.action, {
          listenInfo: t,
          listenCb: e
        });
      }
    }
    sendToRuntime(t) {
      return new a.a((e, n) => {
        const r = Object.assign(Object.assign({}, t), {
          type: "ext_send"
        });
        if (!t.needResponse) {
          chrome.runtime.sendMessage(r, () => {
            if (chrome.runtime.lastError) {
              console.warn("sendMessage: ", chrome.runtime.lastError.message);
            }
          });
          e(null);
          return;
        }
        const o = this._listenResponse(t, e, n);
        chrome.runtime.sendMessage(Object.assign(Object.assign({}, r), {
          responseId: o
        }), () => {
          if (chrome.runtime.lastError) {
            console.warn("sendMessage: ", chrome.runtime.lastError.message);
            n(chrome.runtime.lastError);
          }
        });
      });
    }
    sendToContent(t) {
      return new a.a((e, n) => {
        if (t.to === "content_scripts") {
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, ([r]) => {
            const o = r.id;
            if (!o) {
              n(new Error("No tabId"));
              return;
            }
            const i = Object.assign(Object.assign({}, t), {
              type: "ext_send"
            });
            if (!t.needResponse) {
              chrome.tabs.sendMessage(o, i, () => {
                if (chrome.runtime.lastError) {
                  console.warn("sendMessage: ", chrome.runtime.lastError.message);
                }
              });
              e(null);
              return;
            }
            const s = this._listenResponse(t, e, n);
            chrome.tabs.sendMessage(o, Object.assign(Object.assign({}, i), {
              responseId: s
            }), () => {
              if (chrome.runtime.lastError) {
                console.warn("sendMessage: ", chrome.runtime.lastError.message);
                n(chrome.runtime.lastError);
              }
            });
          });
        } else {
          n(new Error("Not to content_scripts"));
        }
      });
    }
  }();
  const w = async t => {
    try {
      const e = "AUDIO_PLAYBACK";
      await O("off_screen/index.html", e);
      b.sendToRuntime({
        action: d.BG_PLAY_AUDIO,
        from: "background",
        to: "offscreen",
        payload: {
          audioUrl: chrome.runtime.getURL(t)
        }
      });
    } catch (t) {
      console.error(t);
    }
  };
  const _ = async t => {
    try {
      const e = "LOCAL_STORAGE";
      await O("off_screen/index.html", e);
      return await b.sendToRuntime({
        action: d.BG_GET_LOCAL_STORAGE,
        payload: {
          key: t
        },
        from: "background",
        to: "offscreen",
        needResponse: true
      });
    } catch (t) {
      console.error(t);
    }
  };
  const x = async t => {
    try {
      const e = "LOCAL_STORAGE";
      await O("off_screen/index.html", e);
      await b.sendToRuntime({
        action: d.BG_REMOVE_LOCAL_STORAGE,
        payload: {
          key: t
        },
        from: "background",
        to: "offscreen",
        needResponse: true
      });
    } catch (t) {
      console.error(t);
    }
  };
  const T = async (t, e) => {
    try {
      const n = "LOCAL_STORAGE";
      await O("off_screen/index.html", n);
      await b.sendToRuntime({
        action: d.BG_SET_LOCAL_STORAGE,
        payload: {
          key: t,
          valueStr: e
        },
        from: "background",
        to: "offscreen",
        needResponse: true
      });
    } catch (t) {
      console.error(t);
    }
  };
  let E;
  async function O(t, e) {
    try {
      if (await async function (t) {
        const e = chrome.runtime.getURL(t);
        if ("getContexts" in chrome.runtime) {
          const t = await chrome.runtime.getContexts({
            contextTypes: ["OFFSCREEN_DOCUMENT"],
            documentUrls: [e]
          });
          return Boolean(t.length);
        }
        {
          var n;
          const t = await i()(n = self.clients).call(n);
          return await t.some(t => t.url.includes(chrome.runtime.id));
        }
      }(t)) {
        return;
      }
      if (E) {
        await E;
      } else {
        E = chrome.offscreen.createDocument({
          url: t,
          reasons: [e],
          justification: "Specifies that the offscreen document is responsible for playing audio."
        });
        await E;
        E = null;
      }
    } catch (t) {}
  }
}, function (t, e) {
  t.exports = function (t) {
    if (typeof t != "function") {
      throw TypeError(String(t) + " is not a function");
    }
    return t;
  };
}, function (t, e) {
  var n = {}.toString;
  t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e) {
  var n;
  var r;
  var o = t.exports = {};
  function i() {
    throw new Error("setTimeout has not been defined");
  }
  function s() {
    throw new Error("clearTimeout has not been defined");
  }
  function a(t) {
    if (n === setTimeout) {
      return setTimeout(t, 0);
    }
    if ((n === i || !n) && setTimeout) {
      n = setTimeout;
      return setTimeout(t, 0);
    }
    try {
      return n(t, 0);
    } catch (e) {
      try {
        return n.call(null, t, 0);
      } catch (e) {
        return n.call(this, t, 0);
      }
    }
  }
  (function () {
    try {
      n = typeof setTimeout == "function" ? setTimeout : i;
    } catch (t) {
      n = i;
    }
    try {
      r = typeof clearTimeout == "function" ? clearTimeout : s;
    } catch (t) {
      r = s;
    }
  })();
  var c;
  var u = [];
  var f = false;
  var l = -1;
  function h() {
    if (f && c) {
      f = false;
      if (c.length) {
        u = c.concat(u);
      } else {
        l = -1;
      }
      if (u.length) {
        p();
      }
    }
  }
  function p() {
    if (!f) {
      var t = a(h);
      f = true;
      for (var e = u.length; e;) {
        c = u;
        u = [];
        while (++l < e) {
          if (c) {
            c[l].run();
          }
        }
        l = -1;
        e = u.length;
      }
      c = null;
      f = false;
      (function (t) {
        if (r === clearTimeout) {
          return clearTimeout(t);
        }
        if ((r === s || !r) && clearTimeout) {
          r = clearTimeout;
          return clearTimeout(t);
        }
        try {
          r(t);
        } catch (e) {
          try {
            return r.call(null, t);
          } catch (e) {
            return r.call(this, t);
          }
        }
      })(t);
    }
  }
  function d(t, e) {
    this.fun = t;
    this.array = e;
  }
  function y() {}
  o.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
    }
    u.push(new d(t, e));
    if (u.length === 1 && !f) {
      a(p);
    }
  };
  d.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  o.title = "browser";
  o.browser = true;
  o.env = {};
  o.argv = [];
  o.version = "";
  o.versions = {};
  o.on = y;
  o.addListener = y;
  o.once = y;
  o.off = y;
  o.removeListener = y;
  o.removeAllListeners = y;
  o.emit = y;
  o.prependListener = y;
  o.prependOnceListener = y;
  o.listeners = function (t) {
    return [];
  };
  o.binding = function (t) {
    throw new Error("process.binding is not supported");
  };
  o.cwd = function () {
    return "/";
  };
  o.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  };
  o.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  (function (t) {
    function n(t) {
      return Object.prototype.toString.call(t);
    }
    e.isArray = function (t) {
      if (Array.isArray) {
        return Array.isArray(t);
      } else {
        return n(t) === "[object Array]";
      }
    };
    e.isBoolean = function (t) {
      return typeof t == "boolean";
    };
    e.isNull = function (t) {
      return t === null;
    };
    e.isNullOrUndefined = function (t) {
      return t == null;
    };
    e.isNumber = function (t) {
      return typeof t == "number";
    };
    e.isString = function (t) {
      return typeof t == "string";
    };
    e.isSymbol = function (t) {
      return typeof t == "symbol";
    };
    e.isUndefined = function (t) {
      return t === undefined;
    };
    e.isRegExp = function (t) {
      return n(t) === "[object RegExp]";
    };
    e.isObject = function (t) {
      return typeof t == "object" && t !== null;
    };
    e.isDate = function (t) {
      return n(t) === "[object Date]";
    };
    e.isError = function (t) {
      return n(t) === "[object Error]" || t instanceof Error;
    };
    e.isFunction = function (t) {
      return typeof t == "function";
    };
    e.isPrimitive = function (t) {
      return t === null || typeof t == "boolean" || typeof t == "number" || typeof t == "string" || typeof t == "symbol" || t === undefined;
    };
    e.isBuffer = t.isBuffer;
  }).call(this, n(68).Buffer);
}, function (t, e, n) {
  "use strict";

  var r = n(33);
  function o(t) {
    var e;
    var n;
    this.promise = new t(function (t, r) {
      if (e !== undefined || n !== undefined) {
        throw TypeError("Bad Promise constructor");
      }
      e = t;
      n = r;
    });
    this.resolve = r(e);
    this.reject = r(n);
  }
  t.exports.f = function (t) {
    return new o(t);
  };
}, function (t, e, n) {
  var r = n(74);
  var o = n(373);
  var i = n(374);
  var s = r ? r.toStringTag : undefined;
  t.exports = function (t) {
    if (t == null) {
      if (t === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else if (s && s in Object(t)) {
      return o(t);
    } else {
      return i(t);
    }
  };
}, function (t, e) {
  var n = {}.toString;
  t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e) {
  t.exports = function (t) {
    if (t == null) {
      throw TypeError("Can't call method on " + t);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(58);
  var o = Math.min;
  t.exports = function (t) {
    if (t > 0) {
      return o(r(t), 9007199254740991);
    } else {
      return 0;
    }
  };
}, function (t, e) {
  var n = Math.ceil;
  var r = Math.floor;
  t.exports = function (t) {
    if (isNaN(t = +t)) {
      return 0;
    } else {
      return (t > 0 ? r : n)(t);
    }
  };
}, function (t, e, n) {
  "use strict";

  try {
    if (self["workbox:expiration:5.1.4"]) {
      _();
    }
  } catch (t) {}
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(t & 1),
      configurable: !(t & 2),
      writable: !(t & 4),
      value: e
    };
  };
}, function (t, e, n) {
  var r = n(288);
  var o = n(62);
  t.exports = function (t) {
    return r(o(t));
  };
}, function (t, e) {
  t.exports = function (t) {
    if (t == null) {
      throw TypeError("Can't call method on " + t);
    }
    return t;
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(42);
  var o = n(175);
  var i = n(20);
  var s = n(173);
  var a = Object.defineProperty;
  e.f = r ? a : function (t, e, n) {
    i(t);
    e = s(e, true);
    i(n);
    if (o) {
      try {
        return a(t, e, n);
      } catch (t) {}
    }
    if ("get" in n || "set" in n) {
      throw TypeError("Accessors not supported");
    }
    if ("value" in n) {
      t[e] = n.value;
    }
    return t;
  };
}, function (t, e, n) {
  var r;
  var o;
  var i;
  var s = n(301);
  var a = n(7);
  var c = n(29);
  var u = n(19);
  var f = n(30);
  var l = n(112);
  var h = n(111);
  var p = n(116);
  var d = a.WeakMap;
  if (s || l.state) {
    var y = l.state ||= new d();
    var m = y.get;
    var g = y.has;
    var v = y.set;
    r = function (t, e) {
      if (g.call(y, t)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      v.call(y, t, e);
      return e;
    };
    o = function (t) {
      return m.call(y, t) || {};
    };
    i = function (t) {
      return g.call(y, t);
    };
  } else {
    var b = h("state");
    p[b] = true;
    r = function (t, e) {
      if (f(t, b)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      u(t, b, e);
      return e;
    };
    o = function (t) {
      if (f(t, b)) {
        return t[b];
      } else {
        return {};
      }
    };
    i = function (t) {
      return f(t, b);
    };
  }
  t.exports = {
    set: r,
    get: o,
    has: i,
    enforce: function (t) {
      if (i(t)) {
        return o(t);
      } else {
        return r(t, {});
      }
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!c(e) || (n = o(e)).type !== t) {
          throw TypeError("Incompatible receiver, " + t + " required");
        }
        return n;
      };
    }
  };
}, function (t, e, n) {
  (function () {
    var e;
    var r = {}.hasOwnProperty;
    e = n(12);
    t.exports = function (t) {
      function e(t) {
        e.__super__.constructor.call(this, t);
        this.value = "";
      }
      (function (t, e) {
        for (var n in e) {
          if (r.call(e, n)) {
            t[n] = e[n];
          }
        }
        function o() {
          this.constructor = t;
        }
        o.prototype = e.prototype;
        t.prototype = new o();
        t.__super__ = e.prototype;
      })(e, t);
      Object.defineProperty(e.prototype, "data", {
        get: function () {
          return this.value;
        },
        set: function (t) {
          return this.value = t || "";
        }
      });
      Object.defineProperty(e.prototype, "length", {
        get: function () {
          return this.value.length;
        }
      });
      Object.defineProperty(e.prototype, "textContent", {
        get: function () {
          return this.value;
        },
        set: function (t) {
          return this.value = t || "";
        }
      });
      e.prototype.clone = function () {
        return Object.create(this);
      };
      e.prototype.substringData = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      e.prototype.appendData = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      e.prototype.insertData = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      e.prototype.deleteData = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      e.prototype.replaceData = function (t, e, n) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      e.prototype.isEqualNode = function (t) {
        return !!e.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.data === this.data;
      };
      return e;
    }(e);
  }).call(this);
}, function (t, e) {
  (function () {
    t.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(this);
}, function (t, e, n) {
  "use strict";

  (function (t) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    var r = n(316);
    var o = n(317);
    var i = n(195);
    function s() {
      if (c.TYPED_ARRAY_SUPPORT) {
        return 2147483647;
      } else {
        return 1073741823;
      }
    }
    function a(t, e) {
      if (s() < e) {
        throw new RangeError("Invalid typed array length");
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        (t = new Uint8Array(e)).__proto__ = c.prototype;
      } else {
        if (t === null) {
          t = new c(e);
        }
        t.length = e;
      }
      return t;
    }
    function c(t, e, n) {
      if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c)) {
        return new c(t, e, n);
      }
      if (typeof t == "number") {
        if (typeof e == "string") {
          throw new Error("If encoding is specified then the first argument must be a string");
        }
        return l(this, t);
      }
      return u(this, t, e, n);
    }
    function u(t, e, n, r) {
      if (typeof e == "number") {
        throw new TypeError("\"value\" argument must not be a number");
      }
      if (typeof ArrayBuffer != "undefined" && e instanceof ArrayBuffer) {
        return function (t, e, n, r) {
          e.byteLength;
          if (n < 0 || e.byteLength < n) {
            throw new RangeError("'offset' is out of bounds");
          }
          if (e.byteLength < n + (r || 0)) {
            throw new RangeError("'length' is out of bounds");
          }
          e = n === undefined && r === undefined ? new Uint8Array(e) : r === undefined ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
          if (c.TYPED_ARRAY_SUPPORT) {
            (t = e).__proto__ = c.prototype;
          } else {
            t = h(t, e);
          }
          return t;
        }(t, e, n, r);
      } else if (typeof e == "string") {
        return function (t, e, n) {
          if (typeof n != "string" || n === "") {
            n = "utf8";
          }
          if (!c.isEncoding(n)) {
            throw new TypeError("\"encoding\" must be a valid string encoding");
          }
          var r = d(e, n) | 0;
          var o = (t = a(t, r)).write(e, n);
          if (o !== r) {
            t = t.slice(0, o);
          }
          return t;
        }(t, e, n);
      } else {
        return function (t, e) {
          if (c.isBuffer(e)) {
            var n = p(e.length) | 0;
            if ((t = a(t, n)).length !== 0) {
              e.copy(t, 0, 0, n);
            }
            return t;
          }
          if (e) {
            if (typeof ArrayBuffer != "undefined" && e.buffer instanceof ArrayBuffer || "length" in e) {
              if (typeof e.length != "number" || (r = e.length) != r) {
                return a(t, 0);
              } else {
                return h(t, e);
              }
            }
            if (e.type === "Buffer" && i(e.data)) {
              return h(t, e.data);
            }
          }
          var r;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(t, e);
      }
    }
    function f(t) {
      if (typeof t != "number") {
        throw new TypeError("\"size\" argument must be a number");
      }
      if (t < 0) {
        throw new RangeError("\"size\" argument must not be negative");
      }
    }
    function l(t, e) {
      f(e);
      t = a(t, e < 0 ? 0 : p(e) | 0);
      if (!c.TYPED_ARRAY_SUPPORT) {
        for (var n = 0; n < e; ++n) {
          t[n] = 0;
        }
      }
      return t;
    }
    function h(t, e) {
      var n = e.length < 0 ? 0 : p(e.length) | 0;
      t = a(t, n);
      for (var r = 0; r < n; r += 1) {
        t[r] = e[r] & 255;
      }
      return t;
    }
    function p(t) {
      if (t >= s()) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
      }
      return t | 0;
    }
    function d(t, e) {
      if (c.isBuffer(t)) {
        return t.length;
      }
      if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) {
        return t.byteLength;
      }
      if (typeof t != "string") {
        t = "" + t;
      }
      var n = t.length;
      if (n === 0) {
        return 0;
      }
      var r = false;
      while (true) {
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;
          case "utf8":
          case "utf-8":
          case undefined:
            return U(t).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return n * 2;
          case "hex":
            return n >>> 1;
          case "base64":
            return q(t).length;
          default:
            if (r) {
              return U(t).length;
            }
            e = ("" + e).toLowerCase();
            r = true;
        }
      }
    }
    function y(t, e, n) {
      var r = false;
      if (e === undefined || e < 0) {
        e = 0;
      }
      if (e > this.length) {
        return "";
      }
      if (n === undefined || n > this.length) {
        n = this.length;
      }
      if (n <= 0) {
        return "";
      }
      if ((n >>>= 0) <= (e >>>= 0)) {
        return "";
      }
      for (t ||= "utf8";;) {
        switch (t) {
          case "hex":
            return N(this, e, n);
          case "utf8":
          case "utf-8":
            return S(this, e, n);
          case "ascii":
            return I(this, e, n);
          case "latin1":
          case "binary":
            return A(this, e, n);
          case "base64":
            return O(this, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return j(this, e, n);
          default:
            if (r) {
              throw new TypeError("Unknown encoding: " + t);
            }
            t = (t + "").toLowerCase();
            r = true;
        }
      }
    }
    function m(t, e, n) {
      var r = t[e];
      t[e] = t[n];
      t[n] = r;
    }
    function g(t, e, n, r, o) {
      if (t.length === 0) {
        return -1;
      }
      if (typeof n == "string") {
        r = n;
        n = 0;
      } else if (n > 2147483647) {
        n = 2147483647;
      } else if (n < -2147483648) {
        n = -2147483648;
      }
      n = +n;
      if (isNaN(n)) {
        n = o ? 0 : t.length - 1;
      }
      if (n < 0) {
        n = t.length + n;
      }
      if (n >= t.length) {
        if (o) {
          return -1;
        }
        n = t.length - 1;
      } else if (n < 0) {
        if (!o) {
          return -1;
        }
        n = 0;
      }
      if (typeof e == "string") {
        e = c.from(e, r);
      }
      if (c.isBuffer(e)) {
        if (e.length === 0) {
          return -1;
        } else {
          return v(t, e, n, r, o);
        }
      }
      if (typeof e == "number") {
        e &= 255;
        if (c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
          if (o) {
            return Uint8Array.prototype.indexOf.call(t, e, n);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(t, e, n);
          }
        } else {
          return v(t, [e], n, r, o);
        }
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function v(t, e, n, r, o) {
      var i;
      var s = 1;
      var a = t.length;
      var c = e.length;
      if (r !== undefined && ((r = String(r).toLowerCase()) === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
        if (t.length < 2 || e.length < 2) {
          return -1;
        }
        s = 2;
        a /= 2;
        c /= 2;
        n /= 2;
      }
      function u(t, e) {
        if (s === 1) {
          return t[e];
        } else {
          return t.readUInt16BE(e * s);
        }
      }
      if (o) {
        var f = -1;
        for (i = n; i < a; i++) {
          if (u(t, i) === u(e, f === -1 ? 0 : i - f)) {
            if (f === -1) {
              f = i;
            }
            if (i - f + 1 === c) {
              return f * s;
            }
          } else {
            if (f !== -1) {
              i -= i - f;
            }
            f = -1;
          }
        }
      } else {
        if (n + c > a) {
          n = a - c;
        }
        i = n;
        for (; i >= 0; i--) {
          var l = true;
          for (var h = 0; h < c; h++) {
            if (u(t, i + h) !== u(e, h)) {
              l = false;
              break;
            }
          }
          if (l) {
            return i;
          }
        }
      }
      return -1;
    }
    function b(t, e, n, r) {
      n = Number(n) || 0;
      var o = t.length - n;
      if (r) {
        if ((r = Number(r)) > o) {
          r = o;
        }
      } else {
        r = o;
      }
      var i = e.length;
      if (i % 2 != 0) {
        throw new TypeError("Invalid hex string");
      }
      if (r > i / 2) {
        r = i / 2;
      }
      for (var s = 0; s < r; ++s) {
        var a = parseInt(e.substr(s * 2, 2), 16);
        if (isNaN(a)) {
          return s;
        }
        t[n + s] = a;
      }
      return s;
    }
    function w(t, e, n, r) {
      return W(U(e, t.length - n), t, n, r);
    }
    function _(t, e, n, r) {
      return W(function (t) {
        var e = [];
        for (var n = 0; n < t.length; ++n) {
          e.push(t.charCodeAt(n) & 255);
        }
        return e;
      }(e), t, n, r);
    }
    function x(t, e, n, r) {
      return _(t, e, n, r);
    }
    function T(t, e, n, r) {
      return W(q(e), t, n, r);
    }
    function E(t, e, n, r) {
      return W(function (t, e) {
        var n;
        var r;
        var o;
        var i = [];
        for (var s = 0; s < t.length && !((e -= 2) < 0); ++s) {
          n = t.charCodeAt(s);
          r = n >> 8;
          o = n % 256;
          i.push(o);
          i.push(r);
        }
        return i;
      }(e, t.length - n), t, n, r);
    }
    function O(t, e, n) {
      if (e === 0 && n === t.length) {
        return r.fromByteArray(t);
      } else {
        return r.fromByteArray(t.slice(e, n));
      }
    }
    function S(t, e, n) {
      n = Math.min(t.length, n);
      var r = [];
      for (var o = e; o < n;) {
        var i;
        var s;
        var a;
        var c;
        var u = t[o];
        var f = null;
        var l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (o + l <= n) {
          switch (l) {
            case 1:
              if (u < 128) {
                f = u;
              }
              break;
            case 2:
              if (((i = t[o + 1]) & 192) == 128 && (c = (u & 31) << 6 | i & 63) > 127) {
                f = c;
              }
              break;
            case 3:
              i = t[o + 1];
              s = t[o + 2];
              if ((i & 192) == 128 && (s & 192) == 128 && (c = (u & 15) << 12 | (i & 63) << 6 | s & 63) > 2047 && (c < 55296 || c > 57343)) {
                f = c;
              }
              break;
            case 4:
              i = t[o + 1];
              s = t[o + 2];
              a = t[o + 3];
              if ((i & 192) == 128 && (s & 192) == 128 && (a & 192) == 128 && (c = (u & 15) << 18 | (i & 63) << 12 | (s & 63) << 6 | a & 63) > 65535 && c < 1114112) {
                f = c;
              }
          }
        }
        if (f === null) {
          f = 65533;
          l = 1;
        } else if (f > 65535) {
          f -= 65536;
          r.push(f >>> 10 & 1023 | 55296);
          f = f & 1023 | 56320;
        }
        r.push(f);
        o += l;
      }
      return function (t) {
        var e = t.length;
        if (e <= 4096) {
          return String.fromCharCode.apply(String, t);
        }
        var n = "";
        var r = 0;
        while (r < e) {
          n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
        }
        return n;
      }(r);
    }
    e.Buffer = c;
    e.SlowBuffer = function (t) {
      if (+t != t) {
        t = 0;
      }
      return c.alloc(+t);
    };
    e.INSPECT_MAX_BYTES = 50;
    c.TYPED_ARRAY_SUPPORT = t.TYPED_ARRAY_SUPPORT !== undefined ? t.TYPED_ARRAY_SUPPORT : function () {
      try {
        var t = new Uint8Array(1);
        t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42;
          }
        };
        return t.foo() === 42 && typeof t.subarray == "function" && t.subarray(1, 1).byteLength === 0;
      } catch (t) {
        return false;
      }
    }();
    e.kMaxLength = s();
    c.poolSize = 8192;
    c._augment = function (t) {
      t.__proto__ = c.prototype;
      return t;
    };
    c.from = function (t, e, n) {
      return u(null, t, e, n);
    };
    if (c.TYPED_ARRAY_SUPPORT) {
      c.prototype.__proto__ = Uint8Array.prototype;
      c.__proto__ = Uint8Array;
      if (typeof Symbol != "undefined" && Symbol.species && c[Symbol.species] === c) {
        Object.defineProperty(c, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }
    c.alloc = function (t, e, n) {
      return function (t, e, n, r) {
        f(e);
        if (e <= 0) {
          return a(t, e);
        } else if (n !== undefined) {
          if (typeof r == "string") {
            return a(t, e).fill(n, r);
          } else {
            return a(t, e).fill(n);
          }
        } else {
          return a(t, e);
        }
      }(null, t, e, n);
    };
    c.allocUnsafe = function (t) {
      return l(null, t);
    };
    c.allocUnsafeSlow = function (t) {
      return l(null, t);
    };
    c.isBuffer = function (t) {
      return t != null && !!t._isBuffer;
    };
    c.compare = function (t, e) {
      if (!c.isBuffer(t) || !c.isBuffer(e)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (t === e) {
        return 0;
      }
      var n = t.length;
      var r = e.length;
      for (var o = 0, i = Math.min(n, r); o < i; ++o) {
        if (t[o] !== e[o]) {
          n = t[o];
          r = e[o];
          break;
        }
      }
      if (n < r) {
        return -1;
      } else if (r < n) {
        return 1;
      } else {
        return 0;
      }
    };
    c.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    c.concat = function (t, e) {
      if (!i(t)) {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      if (t.length === 0) {
        return c.alloc(0);
      }
      var n;
      if (e === undefined) {
        e = 0;
        n = 0;
        for (; n < t.length; ++n) {
          e += t[n].length;
        }
      }
      var r = c.allocUnsafe(e);
      var o = 0;
      for (n = 0; n < t.length; ++n) {
        var s = t[n];
        if (!c.isBuffer(s)) {
          throw new TypeError("\"list\" argument must be an Array of Buffers");
        }
        s.copy(r, o);
        o += s.length;
      }
      return r;
    };
    c.byteLength = d;
    c.prototype._isBuffer = true;
    c.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 != 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var e = 0; e < t; e += 2) {
        m(this, e, e + 1);
      }
      return this;
    };
    c.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var e = 0; e < t; e += 4) {
        m(this, e, e + 3);
        m(this, e + 1, e + 2);
      }
      return this;
    };
    c.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var e = 0; e < t; e += 8) {
        m(this, e, e + 7);
        m(this, e + 1, e + 6);
        m(this, e + 2, e + 5);
        m(this, e + 3, e + 4);
      }
      return this;
    };
    c.prototype.toString = function () {
      var t = this.length | 0;
      if (t === 0) {
        return "";
      } else if (arguments.length === 0) {
        return S(this, 0, t);
      } else {
        return y.apply(this, arguments);
      }
    };
    c.prototype.equals = function (t) {
      if (!c.isBuffer(t)) {
        throw new TypeError("Argument must be a Buffer");
      }
      return this === t || c.compare(this, t) === 0;
    };
    c.prototype.inspect = function () {
      var t = "";
      var n = e.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        t = this.toString("hex", 0, n).match(/.{2}/g).join(" ");
        if (this.length > n) {
          t += " ... ";
        }
      }
      return "<Buffer " + t + ">";
    };
    c.prototype.compare = function (t, e, n, r, o) {
      if (!c.isBuffer(t)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (e === undefined) {
        e = 0;
      }
      if (n === undefined) {
        n = t ? t.length : 0;
      }
      if (r === undefined) {
        r = 0;
      }
      if (o === undefined) {
        o = this.length;
      }
      if (e < 0 || n > t.length || r < 0 || o > this.length) {
        throw new RangeError("out of range index");
      }
      if (r >= o && e >= n) {
        return 0;
      }
      if (r >= o) {
        return -1;
      }
      if (e >= n) {
        return 1;
      }
      if (this === t) {
        return 0;
      }
      var i = (o >>>= 0) - (r >>>= 0);
      var s = (n >>>= 0) - (e >>>= 0);
      for (var a = Math.min(i, s), u = this.slice(r, o), f = t.slice(e, n), l = 0; l < a; ++l) {
        if (u[l] !== f[l]) {
          i = u[l];
          s = f[l];
          break;
        }
      }
      if (i < s) {
        return -1;
      } else if (s < i) {
        return 1;
      } else {
        return 0;
      }
    };
    c.prototype.includes = function (t, e, n) {
      return this.indexOf(t, e, n) !== -1;
    };
    c.prototype.indexOf = function (t, e, n) {
      return g(this, t, e, n, true);
    };
    c.prototype.lastIndexOf = function (t, e, n) {
      return g(this, t, e, n, false);
    };
    c.prototype.write = function (t, e, n, r) {
      if (e === undefined) {
        r = "utf8";
        n = this.length;
        e = 0;
      } else if (n === undefined && typeof e == "string") {
        r = e;
        n = this.length;
        e = 0;
      } else {
        if (!isFinite(e)) {
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        }
        e |= 0;
        if (isFinite(n)) {
          n |= 0;
          if (r === undefined) {
            r = "utf8";
          }
        } else {
          r = n;
          n = undefined;
        }
      }
      var o = this.length - e;
      if (n === undefined || n > o) {
        n = o;
      }
      if (t.length > 0 && (n < 0 || e < 0) || e > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      r ||= "utf8";
      var i = false;
      while (true) {
        switch (r) {
          case "hex":
            return b(this, t, e, n);
          case "utf8":
          case "utf-8":
            return w(this, t, e, n);
          case "ascii":
            return _(this, t, e, n);
          case "latin1":
          case "binary":
            return x(this, t, e, n);
          case "base64":
            return T(this, t, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return E(this, t, e, n);
          default:
            if (i) {
              throw new TypeError("Unknown encoding: " + r);
            }
            r = ("" + r).toLowerCase();
            i = true;
        }
      }
    };
    c.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function I(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);
      for (var o = e; o < n; ++o) {
        r += String.fromCharCode(t[o] & 127);
      }
      return r;
    }
    function A(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);
      for (var o = e; o < n; ++o) {
        r += String.fromCharCode(t[o]);
      }
      return r;
    }
    function N(t, e, n) {
      var r = t.length;
      if (!e || e < 0) {
        e = 0;
      }
      if (!n || n < 0 || n > r) {
        n = r;
      }
      var o = "";
      for (var i = e; i < n; ++i) {
        o += B(t[i]);
      }
      return o;
    }
    function j(t, e, n) {
      for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) {
        o += String.fromCharCode(r[i] + r[i + 1] * 256);
      }
      return o;
    }
    function D(t, e, n) {
      if (t % 1 != 0 || t < 0) {
        throw new RangeError("offset is not uint");
      }
      if (t + e > n) {
        throw new RangeError("Trying to access beyond buffer length");
      }
    }
    function C(t, e, n, r, o, i) {
      if (!c.isBuffer(t)) {
        throw new TypeError("\"buffer\" argument must be a Buffer instance");
      }
      if (e > o || e < i) {
        throw new RangeError("\"value\" argument is out of bounds");
      }
      if (n + r > t.length) {
        throw new RangeError("Index out of range");
      }
    }
    function P(t, e, n, r) {
      if (e < 0) {
        e = 65535 + e + 1;
      }
      for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) {
        t[n + o] = (e & 255 << (r ? o : 1 - o) * 8) >>> (r ? o : 1 - o) * 8;
      }
    }
    function k(t, e, n, r) {
      if (e < 0) {
        e = 4294967295 + e + 1;
      }
      for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) {
        t[n + o] = e >>> (r ? o : 3 - o) * 8 & 255;
      }
    }
    function R(t, e, n, r, o, i) {
      if (n + r > t.length) {
        throw new RangeError("Index out of range");
      }
      if (n < 0) {
        throw new RangeError("Index out of range");
      }
    }
    function L(t, e, n, r, i) {
      if (!i) {
        R(t, 0, n, 4);
      }
      o.write(t, e, n, r, 23, 4);
      return n + 4;
    }
    function M(t, e, n, r, i) {
      if (!i) {
        R(t, 0, n, 8);
      }
      o.write(t, e, n, r, 52, 8);
      return n + 8;
    }
    c.prototype.slice = function (t, e) {
      var n;
      var r = this.length;
      if ((t = ~~t) < 0) {
        if ((t += r) < 0) {
          t = 0;
        }
      } else if (t > r) {
        t = r;
      }
      if ((e = e === undefined ? r : ~~e) < 0) {
        if ((e += r) < 0) {
          e = 0;
        }
      } else if (e > r) {
        e = r;
      }
      if (e < t) {
        e = t;
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        (n = this.subarray(t, e)).__proto__ = c.prototype;
      } else {
        var o = e - t;
        n = new c(o, undefined);
        for (var i = 0; i < o; ++i) {
          n[i] = this[i + t];
        }
      }
      return n;
    };
    c.prototype.readUIntLE = function (t, e, n) {
      t |= 0;
      e |= 0;
      if (!n) {
        D(t, e, this.length);
      }
      var r = this[t];
      for (var o = 1, i = 0; ++i < e && (o *= 256);) {
        r += this[t + i] * o;
      }
      return r;
    };
    c.prototype.readUIntBE = function (t, e, n) {
      t |= 0;
      e |= 0;
      if (!n) {
        D(t, e, this.length);
      }
      var r = this[t + --e];
      for (var o = 1; e > 0 && (o *= 256);) {
        r += this[t + --e] * o;
      }
      return r;
    };
    c.prototype.readUInt8 = function (t, e) {
      if (!e) {
        D(t, 1, this.length);
      }
      return this[t];
    };
    c.prototype.readUInt16LE = function (t, e) {
      if (!e) {
        D(t, 2, this.length);
      }
      return this[t] | this[t + 1] << 8;
    };
    c.prototype.readUInt16BE = function (t, e) {
      if (!e) {
        D(t, 2, this.length);
      }
      return this[t] << 8 | this[t + 1];
    };
    c.prototype.readUInt32LE = function (t, e) {
      if (!e) {
        D(t, 4, this.length);
      }
      return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    c.prototype.readUInt32BE = function (t, e) {
      if (!e) {
        D(t, 4, this.length);
      }
      return this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    c.prototype.readIntLE = function (t, e, n) {
      t |= 0;
      e |= 0;
      if (!n) {
        D(t, e, this.length);
      }
      var r = this[t];
      for (var o = 1, i = 0; ++i < e && (o *= 256);) {
        r += this[t + i] * o;
      }
      if (r >= (o *= 128)) {
        r -= Math.pow(2, e * 8);
      }
      return r;
    };
    c.prototype.readIntBE = function (t, e, n) {
      t |= 0;
      e |= 0;
      if (!n) {
        D(t, e, this.length);
      }
      for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) {
        i += this[t + --r] * o;
      }
      if (i >= (o *= 128)) {
        i -= Math.pow(2, e * 8);
      }
      return i;
    };
    c.prototype.readInt8 = function (t, e) {
      if (!e) {
        D(t, 1, this.length);
      }
      if (this[t] & 128) {
        return (255 - this[t] + 1) * -1;
      } else {
        return this[t];
      }
    };
    c.prototype.readInt16LE = function (t, e) {
      if (!e) {
        D(t, 2, this.length);
      }
      var n = this[t] | this[t + 1] << 8;
      if (n & 32768) {
        return n | -65536;
      } else {
        return n;
      }
    };
    c.prototype.readInt16BE = function (t, e) {
      if (!e) {
        D(t, 2, this.length);
      }
      var n = this[t + 1] | this[t] << 8;
      if (n & 32768) {
        return n | -65536;
      } else {
        return n;
      }
    };
    c.prototype.readInt32LE = function (t, e) {
      if (!e) {
        D(t, 4, this.length);
      }
      return this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    c.prototype.readInt32BE = function (t, e) {
      if (!e) {
        D(t, 4, this.length);
      }
      return this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    c.prototype.readFloatLE = function (t, e) {
      if (!e) {
        D(t, 4, this.length);
      }
      return o.read(this, t, true, 23, 4);
    };
    c.prototype.readFloatBE = function (t, e) {
      if (!e) {
        D(t, 4, this.length);
      }
      return o.read(this, t, false, 23, 4);
    };
    c.prototype.readDoubleLE = function (t, e) {
      if (!e) {
        D(t, 8, this.length);
      }
      return o.read(this, t, true, 52, 8);
    };
    c.prototype.readDoubleBE = function (t, e) {
      if (!e) {
        D(t, 8, this.length);
      }
      return o.read(this, t, false, 52, 8);
    };
    c.prototype.writeUIntLE = function (t, e, n, r) {
      if (!(t = +t, e |= 0, n |= 0, r)) {
        C(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
      }
      var o = 1;
      var i = 0;
      for (this[e] = t & 255; ++i < n && (o *= 256);) {
        this[e + i] = t / o & 255;
      }
      return e + n;
    };
    c.prototype.writeUIntBE = function (t, e, n, r) {
      if (!(t = +t, e |= 0, n |= 0, r)) {
        C(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
      }
      var o = n - 1;
      var i = 1;
      for (this[e + o] = t & 255; --o >= 0 && (i *= 256);) {
        this[e + o] = t / i & 255;
      }
      return e + n;
    };
    c.prototype.writeUInt8 = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 1, 255, 0);
      }
      if (!c.TYPED_ARRAY_SUPPORT) {
        t = Math.floor(t);
      }
      this[e] = t & 255;
      return e + 1;
    };
    c.prototype.writeUInt16LE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 2, 65535, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
      } else {
        P(this, t, e, true);
      }
      return e + 2;
    };
    c.prototype.writeUInt16BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 2, 65535, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 8;
        this[e + 1] = t & 255;
      } else {
        P(this, t, e, false);
      }
      return e + 2;
    };
    c.prototype.writeUInt32LE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 4, 4294967295, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e + 3] = t >>> 24;
        this[e + 2] = t >>> 16;
        this[e + 1] = t >>> 8;
        this[e] = t & 255;
      } else {
        k(this, t, e, true);
      }
      return e + 4;
    };
    c.prototype.writeUInt32BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 4, 4294967295, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 24;
        this[e + 1] = t >>> 16;
        this[e + 2] = t >>> 8;
        this[e + 3] = t & 255;
      } else {
        k(this, t, e, false);
      }
      return e + 4;
    };
    c.prototype.writeIntLE = function (t, e, n, r) {
      t = +t;
      e |= 0;
      if (!r) {
        var o = Math.pow(2, n * 8 - 1);
        C(this, t, e, n, o - 1, -o);
      }
      var i = 0;
      var s = 1;
      var a = 0;
      for (this[e] = t & 255; ++i < n && (s *= 256);) {
        if (t < 0 && a === 0 && this[e + i - 1] !== 0) {
          a = 1;
        }
        this[e + i] = (t / s >> 0) - a & 255;
      }
      return e + n;
    };
    c.prototype.writeIntBE = function (t, e, n, r) {
      t = +t;
      e |= 0;
      if (!r) {
        var o = Math.pow(2, n * 8 - 1);
        C(this, t, e, n, o - 1, -o);
      }
      var i = n - 1;
      var s = 1;
      var a = 0;
      for (this[e + i] = t & 255; --i >= 0 && (s *= 256);) {
        if (t < 0 && a === 0 && this[e + i + 1] !== 0) {
          a = 1;
        }
        this[e + i] = (t / s >> 0) - a & 255;
      }
      return e + n;
    };
    c.prototype.writeInt8 = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 1, 127, -128);
      }
      if (!c.TYPED_ARRAY_SUPPORT) {
        t = Math.floor(t);
      }
      if (t < 0) {
        t = 255 + t + 1;
      }
      this[e] = t & 255;
      return e + 1;
    };
    c.prototype.writeInt16LE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 2, 32767, -32768);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
      } else {
        P(this, t, e, true);
      }
      return e + 2;
    };
    c.prototype.writeInt16BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 2, 32767, -32768);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 8;
        this[e + 1] = t & 255;
      } else {
        P(this, t, e, false);
      }
      return e + 2;
    };
    c.prototype.writeInt32LE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 4, 2147483647, -2147483648);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
        this[e + 2] = t >>> 16;
        this[e + 3] = t >>> 24;
      } else {
        k(this, t, e, true);
      }
      return e + 4;
    };
    c.prototype.writeInt32BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        C(this, t, e, 4, 2147483647, -2147483648);
      }
      if (t < 0) {
        t = 4294967295 + t + 1;
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 24;
        this[e + 1] = t >>> 16;
        this[e + 2] = t >>> 8;
        this[e + 3] = t & 255;
      } else {
        k(this, t, e, false);
      }
      return e + 4;
    };
    c.prototype.writeFloatLE = function (t, e, n) {
      return L(this, t, e, true, n);
    };
    c.prototype.writeFloatBE = function (t, e, n) {
      return L(this, t, e, false, n);
    };
    c.prototype.writeDoubleLE = function (t, e, n) {
      return M(this, t, e, true, n);
    };
    c.prototype.writeDoubleBE = function (t, e, n) {
      return M(this, t, e, false, n);
    };
    c.prototype.copy = function (t, e, n, r) {
      n ||= 0;
      if (!r && r !== 0) {
        r = this.length;
      }
      if (e >= t.length) {
        e = t.length;
      }
      e ||= 0;
      if (r > 0 && r < n) {
        r = n;
      }
      if (r === n) {
        return 0;
      }
      if (t.length === 0 || this.length === 0) {
        return 0;
      }
      if (e < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (n < 0 || n >= this.length) {
        throw new RangeError("sourceStart out of bounds");
      }
      if (r < 0) {
        throw new RangeError("sourceEnd out of bounds");
      }
      if (r > this.length) {
        r = this.length;
      }
      if (t.length - e < r - n) {
        r = t.length - e + n;
      }
      var o;
      var i = r - n;
      if (this === t && n < e && e < r) {
        for (o = i - 1; o >= 0; --o) {
          t[o + e] = this[o + n];
        }
      } else if (i < 1000 || !c.TYPED_ARRAY_SUPPORT) {
        for (o = 0; o < i; ++o) {
          t[o + e] = this[o + n];
        }
      } else {
        Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
      }
      return i;
    };
    c.prototype.fill = function (t, e, n, r) {
      if (typeof t == "string") {
        if (typeof e == "string") {
          r = e;
          e = 0;
          n = this.length;
        } else if (typeof n == "string") {
          r = n;
          n = this.length;
        }
        if (t.length === 1) {
          var o = t.charCodeAt(0);
          if (o < 256) {
            t = o;
          }
        }
        if (r !== undefined && typeof r != "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof r == "string" && !c.isEncoding(r)) {
          throw new TypeError("Unknown encoding: " + r);
        }
      } else if (typeof t == "number") {
        t &= 255;
      }
      if (e < 0 || this.length < e || this.length < n) {
        throw new RangeError("Out of range index");
      }
      if (n <= e) {
        return this;
      }
      var i;
      e >>>= 0;
      n = n === undefined ? this.length : n >>> 0;
      t ||= 0;
      if (typeof t == "number") {
        for (i = e; i < n; ++i) {
          this[i] = t;
        }
      } else {
        var s = c.isBuffer(t) ? t : U(new c(t, r).toString());
        var a = s.length;
        for (i = 0; i < n - e; ++i) {
          this[i + e] = s[i % a];
        }
      }
      return this;
    };
    var F = /[^+\/0-9A-Za-z-_]/g;
    function B(t) {
      if (t < 16) {
        return "0" + t.toString(16);
      } else {
        return t.toString(16);
      }
    }
    function U(t, e) {
      var n;
      e = e || Infinity;
      for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
        if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
          if (!o) {
            if (n > 56319) {
              if ((e -= 3) > -1) {
                i.push(239, 191, 189);
              }
              continue;
            }
            if (s + 1 === r) {
              if ((e -= 3) > -1) {
                i.push(239, 191, 189);
              }
              continue;
            }
            o = n;
            continue;
          }
          if (n < 56320) {
            if ((e -= 3) > -1) {
              i.push(239, 191, 189);
            }
            o = n;
            continue;
          }
          n = 65536 + (o - 55296 << 10 | n - 56320);
        } else if (o && (e -= 3) > -1) {
          i.push(239, 191, 189);
        }
        o = null;
        if (n < 128) {
          if ((e -= 1) < 0) {
            break;
          }
          i.push(n);
        } else if (n < 2048) {
          if ((e -= 2) < 0) {
            break;
          }
          i.push(n >> 6 | 192, n & 63 | 128);
        } else if (n < 65536) {
          if ((e -= 3) < 0) {
            break;
          }
          i.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
        } else {
          if (!(n < 1114112)) {
            throw new Error("Invalid code point");
          }
          if ((e -= 4) < 0) {
            break;
          }
          i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
        }
      }
      return i;
    }
    function q(t) {
      return r.toByteArray(function (t) {
        if ((t = function (t) {
          if (t.trim) {
            return t.trim();
          } else {
            return t.replace(/^\s+|\s+$/g, "");
          }
        }(t).replace(F, "")).length < 2) {
          return "";
        }
        while (t.length % 4 != 0) {
          t += "=";
        }
        return t;
      }(t));
    }
    function W(t, e, n, r) {
      for (var o = 0; o < r && !(o + n >= e.length) && !(o >= t.length); ++o) {
        e[o + n] = t[o];
      }
      return o;
    }
  }).call(this, n(14));
}, function (t, e, n) {
  "use strict";

  var r;
  var o = typeof Reflect == "object" ? Reflect : null;
  var i = o && typeof o.apply == "function" ? o.apply : function (t, e, n) {
    return Function.prototype.apply.call(t, e, n);
  };
  r = o && typeof o.ownKeys == "function" ? o.ownKeys : Object.getOwnPropertySymbols ? function (t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
  } : function (t) {
    return Object.getOwnPropertyNames(t);
  };
  var s = Number.isNaN || function (t) {
    return t != t;
  };
  function a() {
    a.init.call(this);
  }
  t.exports = a;
  t.exports.once = function (t, e) {
    return new Promise(function (n, r) {
      function o(n) {
        t.removeListener(e, i);
        r(n);
      }
      function i() {
        if (typeof t.removeListener == "function") {
          t.removeListener("error", o);
        }
        n([].slice.call(arguments));
      }
      g(t, e, i, {
        once: true
      });
      if (e !== "error") {
        (function (t, e, n) {
          if (typeof t.on == "function") {
            g(t, "error", e, n);
          }
        })(t, o, {
          once: true
        });
      }
    });
  };
  a.EventEmitter = a;
  a.prototype._events = undefined;
  a.prototype._eventsCount = 0;
  a.prototype._maxListeners = undefined;
  var c = 10;
  function u(t) {
    if (typeof t != "function") {
      throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof t);
    }
  }
  function f(t) {
    if (t._maxListeners === undefined) {
      return a.defaultMaxListeners;
    } else {
      return t._maxListeners;
    }
  }
  function l(t, e, n, r) {
    var o;
    var i;
    var s;
    var a;
    u(n);
    if ((i = t._events) === undefined) {
      i = t._events = Object.create(null);
      t._eventsCount = 0;
    } else {
      if (i.newListener !== undefined) {
        t.emit("newListener", e, n.listener ? n.listener : n);
        i = t._events;
      }
      s = i[e];
    }
    if (s === undefined) {
      s = i[e] = n;
      ++t._eventsCount;
    } else {
      if (typeof s == "function") {
        s = i[e] = r ? [n, s] : [s, n];
      } else if (r) {
        s.unshift(n);
      } else {
        s.push(n);
      }
      if ((o = f(t)) > 0 && s.length > o && !s.warned) {
        s.warned = true;
        var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning";
        c.emitter = t;
        c.type = e;
        c.count = s.length;
        a = c;
        if (console && console.warn) {
          console.warn(a);
        }
      }
    }
    return t;
  }
  function h() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0) {
        return this.listener.call(this.target);
      } else {
        return this.listener.apply(this.target, arguments);
      }
    }
  }
  function p(t, e, n) {
    var r = {
      fired: false,
      wrapFn: undefined,
      target: t,
      type: e,
      listener: n
    };
    var o = h.bind(r);
    o.listener = n;
    r.wrapFn = o;
    return o;
  }
  function d(t, e, n) {
    var r = t._events;
    if (r === undefined) {
      return [];
    }
    var o = r[e];
    if (o === undefined) {
      return [];
    } else if (typeof o == "function") {
      if (n) {
        return [o.listener || o];
      } else {
        return [o];
      }
    } else if (n) {
      return function (t) {
        for (var e = new Array(t.length), n = 0; n < e.length; ++n) {
          e[n] = t[n].listener || t[n];
        }
        return e;
      }(o);
    } else {
      return m(o, o.length);
    }
  }
  function y(t) {
    var e = this._events;
    if (e !== undefined) {
      var n = e[t];
      if (typeof n == "function") {
        return 1;
      }
      if (n !== undefined) {
        return n.length;
      }
    }
    return 0;
  }
  function m(t, e) {
    var n = new Array(e);
    for (var r = 0; r < e; ++r) {
      n[r] = t[r];
    }
    return n;
  }
  function g(t, e, n, r) {
    if (typeof t.on == "function") {
      if (r.once) {
        t.once(e, n);
      } else {
        t.on(e, n);
      }
    } else {
      if (typeof t.addEventListener != "function") {
        throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof t);
      }
      t.addEventListener(e, function o(i) {
        if (r.once) {
          t.removeEventListener(e, o);
        }
        n(i);
      });
    }
  }
  Object.defineProperty(a, "defaultMaxListeners", {
    enumerable: true,
    get: function () {
      return c;
    },
    set: function (t) {
      if (typeof t != "number" || t < 0 || s(t)) {
        throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + t + ".");
      }
      c = t;
    }
  });
  a.init = function () {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
  };
  a.prototype.setMaxListeners = function (t) {
    if (typeof t != "number" || t < 0 || s(t)) {
      throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + t + ".");
    }
    this._maxListeners = t;
    return this;
  };
  a.prototype.getMaxListeners = function () {
    return f(this);
  };
  a.prototype.emit = function (t) {
    var e = [];
    for (var n = 1; n < arguments.length; n++) {
      e.push(arguments[n]);
    }
    var r = t === "error";
    var o = this._events;
    if (o !== undefined) {
      r = r && o.error === undefined;
    } else if (!r) {
      return false;
    }
    if (r) {
      var s;
      if (e.length > 0) {
        s = e[0];
      }
      if (s instanceof Error) {
        throw s;
      }
      var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      a.context = s;
      throw a;
    }
    var c = o[t];
    if (c === undefined) {
      return false;
    }
    if (typeof c == "function") {
      i(c, this, e);
    } else {
      var u = c.length;
      var f = m(c, u);
      for (n = 0; n < u; ++n) {
        i(f[n], this, e);
      }
    }
    return true;
  };
  a.prototype.addListener = function (t, e) {
    return l(this, t, e, false);
  };
  a.prototype.on = a.prototype.addListener;
  a.prototype.prependListener = function (t, e) {
    return l(this, t, e, true);
  };
  a.prototype.once = function (t, e) {
    u(e);
    this.on(t, p(this, t, e));
    return this;
  };
  a.prototype.prependOnceListener = function (t, e) {
    u(e);
    this.prependListener(t, p(this, t, e));
    return this;
  };
  a.prototype.removeListener = function (t, e) {
    var n;
    var r;
    var o;
    var i;
    var s;
    u(e);
    if ((r = this._events) === undefined) {
      return this;
    }
    if ((n = r[t]) === undefined) {
      return this;
    }
    if (n === e || n.listener === e) {
      if (--this._eventsCount == 0) {
        this._events = Object.create(null);
      } else {
        delete r[t];
        if (r.removeListener) {
          this.emit("removeListener", t, n.listener || e);
        }
      }
    } else if (typeof n != "function") {
      o = -1;
      i = n.length - 1;
      for (; i >= 0; i--) {
        if (n[i] === e || n[i].listener === e) {
          s = n[i].listener;
          o = i;
          break;
        }
      }
      if (o < 0) {
        return this;
      }
      if (o === 0) {
        n.shift();
      } else {
        (function (t, e) {
          for (; e + 1 < t.length; e++) {
            t[e] = t[e + 1];
          }
          t.pop();
        })(n, o);
      }
      if (n.length === 1) {
        r[t] = n[0];
      }
      if (r.removeListener !== undefined) {
        this.emit("removeListener", t, s || e);
      }
    }
    return this;
  };
  a.prototype.off = a.prototype.removeListener;
  a.prototype.removeAllListeners = function (t) {
    var e;
    var n;
    var r;
    if ((n = this._events) === undefined) {
      return this;
    }
    if (n.removeListener === undefined) {
      if (arguments.length === 0) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      } else if (n[t] !== undefined) {
        if (--this._eventsCount == 0) {
          this._events = Object.create(null);
        } else {
          delete n[t];
        }
      }
      return this;
    }
    if (arguments.length === 0) {
      var o;
      var i = Object.keys(n);
      for (r = 0; r < i.length; ++r) {
        if ((o = i[r]) !== "removeListener") {
          this.removeAllListeners(o);
        }
      }
      this.removeAllListeners("removeListener");
      this._events = Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    if (typeof (e = n[t]) == "function") {
      this.removeListener(t, e);
    } else if (e !== undefined) {
      for (r = e.length - 1; r >= 0; r--) {
        this.removeListener(t, e[r]);
      }
    }
    return this;
  };
  a.prototype.listeners = function (t) {
    return d(this, t, true);
  };
  a.prototype.rawListeners = function (t) {
    return d(this, t, false);
  };
  a.listenerCount = function (t, e) {
    if (typeof t.listenerCount == "function") {
      return t.listenerCount(e);
    } else {
      return y.call(t, e);
    }
  };
  a.prototype.listenerCount = y;
  a.prototype.eventNames = function () {
    if (this._eventsCount > 0) {
      return r(this._events);
    } else {
      return [];
    }
  };
}, function (t, e, n) {
  "use strict";

  (function (e) {
    if (e === undefined || !e.version || e.version.indexOf("v0.") === 0 || e.version.indexOf("v1.") === 0 && e.version.indexOf("v1.8.") !== 0) {
      t.exports = {
        nextTick: function (t, n, r, o) {
          if (typeof t != "function") {
            throw new TypeError("\"callback\" argument must be a function");
          }
          var i;
          var s;
          var a = arguments.length;
          switch (a) {
            case 0:
            case 1:
              return e.nextTick(t);
            case 2:
              return e.nextTick(function () {
                t.call(null, n);
              });
            case 3:
              return e.nextTick(function () {
                t.call(null, n, r);
              });
            case 4:
              return e.nextTick(function () {
                t.call(null, n, r, o);
              });
            default:
              i = new Array(a - 1);
              s = 0;
              while (s < i.length) {
                i[s++] = arguments[s];
              }
              return e.nextTick(function () {
                t.apply(null, i);
              });
          }
        }
      };
    } else {
      t.exports = e;
    }
  }).call(this, n(51));
}, function (t, e, n) {
  var r = n(20);
  var o = n(334);
  var i = n(114);
  var s = n(109);
  var a = n(335);
  var c = n(336);
  function u(t, e) {
    this.stopped = t;
    this.result = e;
  }
  t.exports = function (t, e, n) {
    var f;
    var l;
    var h;
    var p;
    var d;
    var y;
    var m;
    var g = n && n.that;
    var v = !!n && !!n.AS_ENTRIES;
    var b = !!n && !!n.IS_ITERATOR;
    var w = !!n && !!n.INTERRUPTED;
    var _ = s(e, g, 1 + v + w);
    function x(t) {
      if (f) {
        c(f);
      }
      return new u(true, t);
    }
    function T(t) {
      if (v) {
        r(t);
        if (w) {
          return _(t[0], t[1], x);
        } else {
          return _(t[0], t[1]);
        }
      } else if (w) {
        return _(t, x);
      } else {
        return _(t);
      }
    }
    if (b) {
      f = t;
    } else {
      if (typeof (l = a(t)) != "function") {
        throw TypeError("Target is not iterable");
      }
      if (o(l)) {
        h = 0;
        p = i(t.length);
        for (; p > h; h++) {
          if ((d = T(t[h])) && d instanceof u) {
            return d;
          }
        }
        return new u(false);
      }
      f = l.call(t);
    }
    for (y = f.next; !(m = y.call(f)).done;) {
      try {
        d = T(m.value);
      } catch (t) {
        c(f);
        throw t;
      }
      if (typeof d == "object" && d && d instanceof u) {
        return d;
      }
    }
    return new u(false);
  };
}, function (t, e, n) {
  var r = n(19);
  t.exports = function (t, e, n, o) {
    if (o && o.enumerable) {
      t[e] = n;
    } else {
      r(t, e, n);
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    try {
      return {
        error: false,
        value: t()
      };
    } catch (t) {
      return {
        error: true,
        value: t
      };
    }
  };
}, function (t, e, n) {
  var r = n(17).Symbol;
  t.exports = r;
}, function (t, e, n) {
  var r = n(392);
  var o = n(393);
  var i = n(394);
  var s = n(395);
  var a = n(396);
  function c(t) {
    var e = -1;
    var n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  c.prototype.clear = r;
  c.prototype.delete = o;
  c.prototype.get = i;
  c.prototype.has = s;
  c.prototype.set = a;
  t.exports = c;
}, function (t, e, n) {
  var r = n(142);
  t.exports = function (t, e) {
    for (var n = t.length; n--;) {
      if (r(t[n][0], e)) {
        return n;
      }
    }
    return -1;
  };
}, function (t, e, n) {
  var r = n(36)(Object, "create");
  t.exports = r;
}, function (t, e, n) {
  var r = n(414);
  t.exports = function (t, e) {
    var n = t.__data__;
    if (r(e)) {
      return n[typeof e == "string" ? "string" : "hash"];
    } else {
      return n.map;
    }
  };
}, function (t, e, n) {
  var r = n(223);
  var o = n(224);
  t.exports = function (t, e, n, i) {
    var s = !n;
    n ||= {};
    for (var a = -1, c = e.length; ++a < c;) {
      var u = e[a];
      var f = i ? i(n[u], t[u], u, n, t) : undefined;
      if (f === undefined) {
        f = t[u];
      }
      if (s) {
        o(n, u, f);
      } else {
        r(n, u, f);
      }
    }
    return n;
  };
}, function (t, e) {
  var n = Array.isArray;
  t.exports = n;
}, function (t, e, n) {
  var r = n(438);
  var o = n(143);
  var i = n(439);
  var s = n(440);
  var a = n(441);
  var c = n(54);
  var u = n(221);
  var f = u(r);
  var l = u(o);
  var h = u(i);
  var p = u(s);
  var d = u(a);
  var y = c;
  if (r && y(new r(new ArrayBuffer(1))) != "[object DataView]" || o && y(new o()) != "[object Map]" || i && y(i.resolve()) != "[object Promise]" || s && y(new s()) != "[object Set]" || a && y(new a()) != "[object WeakMap]") {
    y = function (t) {
      var e = c(t);
      var n = e == "[object Object]" ? t.constructor : undefined;
      var r = n ? u(n) : "";
      if (r) {
        switch (r) {
          case f:
            return "[object DataView]";
          case l:
            return "[object Map]";
          case h:
            return "[object Promise]";
          case p:
            return "[object Set]";
          case d:
            return "[object WeakMap]";
        }
      }
      return e;
    };
  }
  t.exports = y;
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return a;
  });
  var r = n(0);
  var o = n(1);
  var i = n(85);
  var s = n.n(i);
  const a = new class {
    constructor() {
      this._attached = false;
      this._throttleFn = s()(this.onBookmarksChange, 300);
    }
    start() {
      chrome.permissions.contains({
        origins: [],
        permissions: ["bookmarks"]
      }, t => {
        if (!this._attached && t) {
          this._watchBookmarks();
        }
      });
    }
    _watchBookmarks() {
      this._attached = true;
      chrome.bookmarks.onCreated.addListener(this._throttleFn);
      chrome.bookmarks.onChanged.addListener(this._throttleFn);
      chrome.bookmarks.onMoved.addListener(this._throttleFn);
      chrome.bookmarks.onRemoved.addListener(this._throttleFn);
      if (!r.g) {
        chrome.bookmarks.onChildrenReordered.addListener(this._throttleFn);
      }
    }
    startWatchBookmarks() {
      this.start();
    }
    onBookmarksChange() {
      o.a.sendMessage("master:tabs-update-bookmarks");
    }
  }();
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return p;
  });
  n(3);
  n(27);
  var r = n(0);
  var o = n(238);
  function i(t) {
    return fetch(function (t) {
      return r.b + "/mail/feed/atom?zx=" + encodeURIComponent(t);
    }(t)).then(t => {
      if (!t.ok) {
        throw new Error("response not ok");
      }
      return t.text();
    }).then(async t => {
      const e = (await o.parseStringPromise(t)).feed;
      let n = e.title[0];
      if (n) {
        try {
          n = /(\w+)@(\w+\.\w+)/.exec(n)[0];
        } catch (t) {}
      }
      const r = parseInt(e.fullcount, 10);
      const i = e.entry || [];
      const s = [];
      let a = -1;
      i.forEach(t => {
        const e = {
          id: t.id[0],
          issued: t.issued[0],
          title: t.title[0],
          summary: t.summary[0],
          link: t.link[0].$.href,
          authorName: t.author[0].name[0],
          authorEmail: t.author[0].email[0]
        };
        if (e.issued) {
          e.issued = new Date(e.issued).valueOf();
          a = Math.max(a, e.issued);
        }
        s.push(e);
      });
      return {
        count: r,
        account: n,
        lastIssuedTime: a,
        emails: s
      };
    }).catch(t => {
      throw t;
    });
  }
  var s = n(239);
  var a = n.n(s);
  var c = n(240);
  var u = n.n(c);
  var f = n(47);
  var l = n(1);
  var h = n(48);
  const p = new class {
    constructor() {
      this.hasRegistClick = false;
      this.noticeConf = {
        gmail: false,
        gmailVoice: false,
        gmailNumber: false
      };
      this.timer = null;
      this.lastIssuedTime = Date.now();
      this.instanceId = "gmc" + parseInt("" + Date.now() * Math.random(), 10);
      this.start = () => {
        clearInterval(this.timer);
        this.timer = null;
        const {
          gmail: t,
          gmailNumber: e
        } = this.noticeConf;
        if (t !== false || e !== false) {
          this.timer = setInterval(this.check, 60000);
          this.check();
        }
      };
      this.check = () => {
        i(this.instanceId).then(t => {
          this.setNotification(t);
          this.sendGmailNumber(t.count);
        }).catch(t => {
          console.log("gmail->err", t.message);
        });
      };
      this.sendGmailNumber = t => {
        if (this.noticeConf.gmailNumber) {
          l.a.sendMessage("master:gmail-number-updated", t);
        }
      };
      this.setNotification = t => {
        if (!this.noticeConf.gmail) {
          return;
        }
        if (!this.lastIssuedTime) {
          this.saveLastTime(t.lastIssuedTime);
          return;
        }
        const e = t.emails.filter(t => t.issued > this.lastIssuedTime);
        e.forEach(t => {
          if (r.h) {
            const e = new Notification(t.title, {
              body: t.authorName + "(" + t.authorEmail + ")"
            });
            e.onclick = async () => {
              chrome.tabs.create({
                active: true,
                url: t.link
              });
              e.close();
            };
          } else {
            var e;
            var n;
            var o;
            chrome.notifications.create((e = t.id, n = "link", o = t.link, e ||= Object(f.b)("notice"), e + "@infinity@" + n + "@infinity@" + o), {
              type: "basic",
              iconUrl: u.a,
              title: t.title,
              message: t.summary,
              contextMessage: t.authorName + "(" + t.authorEmail + ")"
            });
          }
        });
        if (this.noticeConf.gmailVoice && e.length > 0) {
          Object(h.b)(a.a);
        }
        this.saveLastTime(t.lastIssuedTime);
      };
      this.saveLastTime = t => {
        this.lastIssuedTime = t;
      };
    }
    registClick(t) {
      if (t) {
        if (!this.hasRegistClick) {
          chrome.notifications.onClicked.addListener(t => {
            const [e, n, r] = function (t) {
              return t.split("@infinity@");
            }(t);
            console.log(e);
            switch (n) {
              case "link":
                chrome.tabs.create({
                  active: true,
                  url: r
                });
            }
            chrome.notifications.clear(t);
          });
          this.hasRegistClick = true;
        }
      }
    }
    updateSetting(t) {
      if (typeof t == "object") {
        this.lastIssuedTime = Date.now();
        const {
          gmail: e,
          gmailVoice: n,
          gmailNumber: r
        } = t;
        this.noticeConf = {
          gmail: e,
          gmailVoice: n,
          gmailNumber: r
        };
        this.start();
      }
    }
  }();
}, function (t, e, n) {
  t.exports = n(285);
}, function (t, e, n) {
  var r = n(367);
  var o = n(31);
  t.exports = function (t, e, n) {
    var i = true;
    var s = true;
    if (typeof t != "function") {
      throw new TypeError("Expected a function");
    }
    if (o(n)) {
      i = "leading" in n ? !!n.leading : i;
      s = "trailing" in n ? !!n.trailing : s;
    }
    return r(t, e, {
      leading: i,
      maxWait: e,
      trailing: s
    });
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return o;
  });
  n.d(e, "a", function () {
    return i;
  });
  var r = n(0);
  r.o.lang;
  const o = () => {};
  const i = () => {
    if (r.o.isZh) {
      chrome.runtime.setUninstallURL("https://hello.wetab.link/");
    } else {
      chrome.runtime.setUninstallURL("https://uninstall.infinitynewtab.com/?from=" + r.a);
    }
  };
}, function (t, e, n) {
  t.exports = n.p + "images/todo.c7b213b.png";
}, function (t, e, n) {
  var r = n(5);
  var o = n(89).f;
  var i = n(37);
  var s = n(39);
  var a = n(93);
  var c = n(249);
  var u = n(158);
  t.exports = function (t, e) {
    var n;
    var f;
    var l;
    var h;
    var p;
    var d = t.target;
    var y = t.global;
    var m = t.stat;
    if (n = y ? r : m ? r[d] || a(d, {}) : (r[d] || {}).prototype) {
      for (f in e) {
        h = e[f];
        l = t.noTargetGet ? (p = o(n, f)) && p.value : n[f];
        if (!u(y ? f : d + (m ? "." : "#") + f, t.forced) && l !== undefined) {
          if (typeof h == typeof l) {
            continue;
          }
          c(h, l);
        }
        if (t.sham || l && l.sham) {
          i(h, "sham", true);
        }
        s(n, f, h, t);
      }
    }
  };
}, function (t, e, n) {
  var r = n(32);
  var o = n(246);
  var i = n(154);
  var s = n(90);
  var a = n(155);
  var c = n(23);
  var u = n(156);
  var f = Object.getOwnPropertyDescriptor;
  e.f = r ? f : function (t, e) {
    t = s(t);
    e = a(e, true);
    if (u) {
      try {
        return f(t, e);
      } catch (t) {}
    }
    if (c(t, e)) {
      return i(!o.f.call(t, e), t[e]);
    }
  };
}, function (t, e, n) {
  var r = n(247);
  var o = n(56);
  t.exports = function (t) {
    return r(o(t));
  };
}, function (t, e, n) {
  var r = n(56);
  t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e, n) {
  var r = n(5);
  var o = n(25);
  var i = r.document;
  var s = o(i) && o(i.createElement);
  t.exports = function (t) {
    if (s) {
      return i.createElement(t);
    } else {
      return {};
    }
  };
}, function (t, e, n) {
  var r = n(5);
  var o = n(37);
  t.exports = function (t, e) {
    try {
      o(r, t, e);
    } catch (n) {
      r[t] = e;
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(95);
  var o = Function.toString;
  if (typeof r.inspectSource != "function") {
    r.inspectSource = function (t) {
      return o.call(t);
    };
  }
  t.exports = r.inspectSource;
}, function (t, e, n) {
  var r = n(5);
  var o = n(93);
  var i = r["__core-js_shared__"] || o("__core-js_shared__", {});
  t.exports = i;
}, function (t, e, n) {
  var r;
  var o;
  var i;
  var s = n(248);
  var a = n(5);
  var c = n(25);
  var u = n(37);
  var f = n(23);
  var l = n(95);
  var h = n(97);
  var p = n(101);
  var d = a.WeakMap;
  if (s || l.state) {
    var y = l.state ||= new d();
    var m = y.get;
    var g = y.has;
    var v = y.set;
    r = function (t, e) {
      if (g.call(y, t)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      v.call(y, t, e);
      return e;
    };
    o = function (t) {
      return m.call(y, t) || {};
    };
    i = function (t) {
      return g.call(y, t);
    };
  } else {
    var b = h("state");
    p[b] = true;
    r = function (t, e) {
      if (f(t, b)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      u(t, b, e);
      return e;
    };
    o = function (t) {
      if (f(t, b)) {
        return t[b];
      } else {
        return {};
      }
    };
    i = function (t) {
      return f(t, b);
    };
  }
  t.exports = {
    set: r,
    get: o,
    has: i,
    enforce: function (t) {
      if (i(t)) {
        return o(t);
      } else {
        return r(t, {});
      }
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!c(e) || (n = o(e)).type !== t) {
          throw TypeError("Incompatible receiver, " + t + " required");
        }
        return n;
      };
    }
  };
}, function (t, e, n) {
  var r = n(98);
  var o = n(100);
  var i = r("keys");
  t.exports = function (t) {
    return i[t] ||= o(t);
  };
}, function (t, e, n) {
  var r = n(99);
  var o = n(95);
  (t.exports = function (t, e) {
    return o[t] ||= e !== undefined ? e : {};
  })("versions", []).push({
    version: "3.15.2",
    mode: r ? "pure" : "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
  });
}, function (t, e) {
  t.exports = false;
}, function (t, e) {
  var n = 0;
  var r = Math.random();
  t.exports = function (t) {
    return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++n + r).toString(36);
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function (t, e, n) {
  var r;
  var o;
  var i = n(5);
  var s = n(41);
  var a = i.process;
  var c = a && a.versions;
  var u = c && c.v8;
  if (u) {
    o = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
  } else if (s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/))) {
    o = r[1];
  }
  t.exports = o && +o;
}, function (t, e, n) {
  var r = n(55);
  var o = n(5);
  t.exports = r(o.process) == "process";
}, function (t, e, n) {
  "use strict";

  try {
    if (self["workbox:cacheable-response:5.1.4"]) {
      _();
    }
  } catch (t) {}
}, function (t, e, n) {
  "use strict";

  var r;
  var o;
  var i = n(273);
  var s = n(274);
  var a = n(98);
  var c = n(275);
  var u = n(96).get;
  var f = n(278);
  var l = n(279);
  var h = RegExp.prototype.exec;
  var p = a("native-string-replace", String.prototype.replace);
  var d = h;
  r = /a/;
  o = /b*/g;
  h.call(r, "a");
  h.call(o, "a");
  var y = r.lastIndex !== 0 || o.lastIndex !== 0;
  var m = s.UNSUPPORTED_Y || s.BROKEN_CARET;
  var g = /()??/.exec("")[1] !== undefined;
  if (y || g || m || f || l) {
    d = function (t) {
      var e;
      var n;
      var r;
      var o;
      var s;
      var a;
      var f;
      var l = this;
      var v = u(l);
      var b = v.raw;
      if (b) {
        b.lastIndex = l.lastIndex;
        e = d.call(b, t);
        l.lastIndex = b.lastIndex;
        return e;
      }
      var w = v.groups;
      var _ = m && l.sticky;
      var x = i.call(l);
      var T = l.source;
      var E = 0;
      var O = t;
      if (_) {
        if ((x = x.replace("y", "")).indexOf("g") === -1) {
          x += "g";
        }
        O = String(t).slice(l.lastIndex);
        if (l.lastIndex > 0 && (!l.multiline || l.multiline && t[l.lastIndex - 1] !== "\n")) {
          T = "(?: " + T + ")";
          O = " " + O;
          E++;
        }
        n = new RegExp("^(?:" + T + ")", x);
      }
      if (g) {
        n = new RegExp("^" + T + "$(?!\\s)", x);
      }
      if (y) {
        r = l.lastIndex;
      }
      o = h.call(_ ? n : l, O);
      if (_) {
        if (o) {
          o.input = o.input.slice(E);
          o[0] = o[0].slice(E);
          o.index = l.lastIndex;
          l.lastIndex += o[0].length;
        } else {
          l.lastIndex = 0;
        }
      } else if (y && o) {
        l.lastIndex = l.global ? o.index + o[0].length : r;
      }
      if (g && o && o.length > 1) {
        p.call(o[0], n, function () {
          for (s = 1; s < arguments.length - 2; s++) {
            if (arguments[s] === undefined) {
              o[s] = undefined;
            }
          }
        });
      }
      if (o && w) {
        o.groups = a = c(null);
        s = 0;
        for (; s < w.length; s++) {
          a[(f = w[s])[0]] = o[f[1]];
        }
      }
      return o;
    };
  }
  t.exports = d;
}, function (t, e, n) {
  "use strict";

  var r = n(280);
  var o = n(8);
  var i = n(15);
  var s = n(57);
  var a = n(58);
  var c = n(56);
  var u = n(281);
  var f = n(283);
  var l = n(284);
  var h = n(11)("replace");
  var p = Math.max;
  var d = Math.min;
  var y = "a".replace(/./, "$0") === "$0";
  var m = !!/./[h] && /./[h]("a", "$0") === "";
  r("replace", function (t, e, n) {
    var r = m ? "$" : "$0";
    return [function (t, n) {
      var r = c(this);
      var o = t == null ? undefined : t[h];
      if (o !== undefined) {
        return o.call(t, r, n);
      } else {
        return e.call(String(r), t, n);
      }
    }, function (t, o) {
      if (typeof o == "string" && o.indexOf(r) === -1 && o.indexOf("$<") === -1) {
        var c = n(e, this, t, o);
        if (c.done) {
          return c.value;
        }
      }
      var h = i(this);
      var y = String(t);
      var m = typeof o == "function";
      if (!m) {
        o = String(o);
      }
      var g = h.global;
      if (g) {
        var v = h.unicode;
        h.lastIndex = 0;
      }
      var b = [];
      while (true) {
        var w = l(h, y);
        if (w === null) {
          break;
        }
        b.push(w);
        if (!g) {
          break;
        }
        if (String(w[0]) === "") {
          h.lastIndex = u(y, s(h.lastIndex), v);
        }
      }
      var _;
      var x = "";
      var T = 0;
      for (var E = 0; E < b.length; E++) {
        w = b[E];
        var O = String(w[0]);
        var S = p(d(a(w.index), y.length), 0);
        var I = [];
        for (var A = 1; A < w.length; A++) {
          I.push((_ = w[A]) === undefined ? _ : String(_));
        }
        var N = w.groups;
        if (m) {
          var j = [O].concat(I, S, y);
          if (N !== undefined) {
            j.push(N);
          }
          var D = String(o.apply(undefined, j));
        } else {
          D = f(O, y, S, I, N, o);
        }
        if (S >= T) {
          x += y.slice(T, S) + D;
          T = S + O.length;
        }
      }
      return x + y.slice(T);
    }];
  }, !!o(function () {
    var t = /./;
    t.exec = function () {
      var t = [];
      t.groups = {
        a: "7"
      };
      return t;
    };
    return "".replace(t, "$<a>") !== "7";
  }) || !y || m);
}, function (t, e, n) {
  var r = n(7);
  var o = n(29);
  var i = r.document;
  var s = o(i) && o(i.createElement);
  t.exports = function (t) {
    if (s) {
      return i.createElement(t);
    } else {
      return {};
    }
  };
}, function (t, e, n) {
  var r = n(33);
  t.exports = function (t, e, n) {
    r(t);
    if (e === undefined) {
      return t;
    }
    switch (n) {
      case 0:
        return function () {
          return t.call(e);
        };
      case 1:
        return function (n) {
          return t.call(e, n);
        };
      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };
      case 3:
        return function (n, r, o) {
          return t.call(e, n, r, o);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(30);
  var o = n(174);
  var i = n(111);
  var s = n(290);
  var a = i("IE_PROTO");
  var c = Object.prototype;
  t.exports = s ? Object.getPrototypeOf : function (t) {
    t = o(t);
    if (r(t, a)) {
      return t[a];
    } else if (typeof t.constructor == "function" && t instanceof t.constructor) {
      return t.constructor.prototype;
    } else if (t instanceof Object) {
      return c;
    } else {
      return null;
    }
  };
}, function (t, e, n) {
  var r = n(179);
  var o = n(180);
  var i = r("keys");
  t.exports = function (t) {
    return i[t] ||= o(t);
  };
}, function (t, e, n) {
  var r = n(7);
  var o = n(289);
  var i = r["__core-js_shared__"] || o("__core-js_shared__", {});
  t.exports = i;
}, function (t, e, n) {
  var r = n(44);
  t.exports = r("navigator", "userAgent") || "";
}, function (t, e, n) {
  var r = n(115);
  var o = Math.min;
  t.exports = function (t) {
    if (t > 0) {
      return o(r(t), 9007199254740991);
    } else {
      return 0;
    }
  };
}, function (t, e) {
  var n = Math.ceil;
  var r = Math.floor;
  t.exports = function (t) {
    if (isNaN(t = +t)) {
      return 0;
    } else {
      return (t > 0 ? r : n)(t);
    }
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(118);
  var o = n(64).f;
  var i = n(19);
  var s = n(30);
  var a = n(297);
  var c = n(9)("toStringTag");
  t.exports = function (t, e, n, u) {
    if (t) {
      var f = n ? t : t.prototype;
      if (!s(f, c)) {
        o(f, c, {
          configurable: true,
          value: e
        });
      }
      if (u && !r) {
        i(f, "toString", a);
      }
    }
  };
}, function (t, e, n) {
  var r = {
    [n(9)("toStringTag")]: "z"
  };
  t.exports = String(r) === "[object z]";
}, function (t, e, n) {
  var r = n(118);
  var o = n(50);
  var i = n(9)("toStringTag");
  var s = o(function () {
    return arguments;
  }()) == "Arguments";
  t.exports = r ? o : function (t) {
    var e;
    var n;
    var r;
    if (t === undefined) {
      return "Undefined";
    } else if (t === null) {
      return "Null";
    } else if (typeof (n = function (t, e) {
      try {
        return t[e];
      } catch (t) {}
    }(e = Object(t), i)) == "string") {
      return n;
    } else if (s) {
      return o(e);
    } else if ((r = o(e)) == "Object" && typeof e.callee == "function") {
      return "Arguments";
    } else {
      return r;
    }
  };
}, function (t, e, n) {
  var r = n(20);
  var o = n(33);
  var i = n(9)("species");
  t.exports = function (t, e) {
    var n;
    var s = r(t).constructor;
    if (s === undefined || (n = r(s)[i]) == null) {
      return e;
    } else {
      return o(n);
    }
  };
}, function (t, e) {
  (function () {
    e.defaults = {
      0.1: {
        explicitCharkey: false,
        trim: true,
        normalize: true,
        normalizeTags: false,
        attrkey: "@",
        charkey: "#",
        explicitArray: false,
        ignoreAttrs: false,
        mergeAttrs: false,
        explicitRoot: false,
        validator: null,
        xmlns: false,
        explicitChildren: false,
        childkey: "@@",
        charsAsChildren: false,
        includeWhiteChars: false,
        async: false,
        strict: true,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        emptyTag: ""
      },
      0.2: {
        explicitCharkey: false,
        trim: false,
        normalize: false,
        normalizeTags: false,
        attrkey: "$",
        charkey: "_",
        explicitArray: true,
        ignoreAttrs: false,
        mergeAttrs: false,
        explicitRoot: true,
        validator: null,
        xmlns: false,
        explicitChildren: false,
        preserveChildrenOrder: false,
        childkey: "$$",
        charsAsChildren: false,
        includeWhiteChars: false,
        async: false,
        strict: true,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        rootName: "root",
        xmldec: {
          version: "1.0",
          encoding: "UTF-8",
          standalone: true
        },
        doctype: null,
        renderOpts: {
          pretty: true,
          indent: "  ",
          newline: "\n"
        },
        headless: false,
        chunkSize: 10000,
        emptyTag: "",
        cdata: false
      }
    };
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i;
    var s;
    var a;
    var c;
    var u;
    var f = {}.hasOwnProperty;
    u = n(24);
    c = u.isObject;
    a = u.isFunction;
    s = u.getValue;
    i = n(12);
    e = n(4);
    r = n(191);
    o = n(123);
    t.exports = function (t) {
      function n(t, r, o) {
        var i;
        var s;
        var a;
        var c;
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing element name. " + this.debugInfo());
        }
        this.name = this.stringify.name(r);
        this.type = e.Element;
        this.attribs = {};
        this.schemaTypeInfo = null;
        if (o != null) {
          this.attribute(o);
        }
        if (t.type === e.Document && (this.isRoot = true, this.documentObject = t, t.rootObject = this, t.children)) {
          s = 0;
          a = (c = t.children).length;
          for (; s < a; s++) {
            if ((i = c[s]).type === e.DocType) {
              i.name = this.name;
              break;
            }
          }
        }
      }
      (function (t, e) {
        for (var n in e) {
          if (f.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      Object.defineProperty(n.prototype, "tagName", {
        get: function () {
          return this.name;
        }
      });
      Object.defineProperty(n.prototype, "namespaceURI", {
        get: function () {
          return "";
        }
      });
      Object.defineProperty(n.prototype, "prefix", {
        get: function () {
          return "";
        }
      });
      Object.defineProperty(n.prototype, "localName", {
        get: function () {
          return this.name;
        }
      });
      Object.defineProperty(n.prototype, "id", {
        get: function () {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(n.prototype, "className", {
        get: function () {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(n.prototype, "classList", {
        get: function () {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(n.prototype, "attributes", {
        get: function () {
          if (!this.attributeMap || !this.attributeMap.nodes) {
            this.attributeMap = new o(this.attribs);
          }
          return this.attributeMap;
        }
      });
      n.prototype.clone = function () {
        var t;
        var e;
        var n;
        var r;
        if ((n = Object.create(this)).isRoot) {
          n.documentObject = null;
        }
        n.attribs = {};
        for (e in r = this.attribs) {
          if (f.call(r, e)) {
            t = r[e];
            n.attribs[e] = t.clone();
          }
        }
        n.children = [];
        this.children.forEach(function (t) {
          var e;
          (e = t.clone()).parent = n;
          return n.children.push(e);
        });
        return n;
      };
      n.prototype.attribute = function (t, e) {
        var n;
        var o;
        if (t != null) {
          t = s(t);
        }
        if (c(t)) {
          for (n in t) {
            if (f.call(t, n)) {
              o = t[n];
              this.attribute(n, o);
            }
          }
        } else {
          if (a(e)) {
            e = e.apply();
          }
          if (this.options.keepNullAttributes && e == null) {
            this.attribs[t] = new r(this, t, "");
          } else if (e != null) {
            this.attribs[t] = new r(this, t, e);
          }
        }
        return this;
      };
      n.prototype.removeAttribute = function (t) {
        var e;
        var n;
        var r;
        if (t == null) {
          throw new Error("Missing attribute name. " + this.debugInfo());
        }
        t = s(t);
        if (Array.isArray(t)) {
          n = 0;
          r = t.length;
          for (; n < r; n++) {
            e = t[n];
            delete this.attribs[e];
          }
        } else {
          delete this.attribs[t];
        }
        return this;
      };
      n.prototype.toString = function (t) {
        return this.options.writer.element(this, this.options.writer.filterOptions(t));
      };
      n.prototype.att = function (t, e) {
        return this.attribute(t, e);
      };
      n.prototype.a = function (t, e) {
        return this.attribute(t, e);
      };
      n.prototype.getAttribute = function (t) {
        if (this.attribs.hasOwnProperty(t)) {
          return this.attribs[t].value;
        } else {
          return null;
        }
      };
      n.prototype.setAttribute = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getAttributeNode = function (t) {
        if (this.attribs.hasOwnProperty(t)) {
          return this.attribs[t];
        } else {
          return null;
        }
      };
      n.prototype.setAttributeNode = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.removeAttributeNode = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementsByTagName = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getAttributeNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.setAttributeNS = function (t, e, n) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.removeAttributeNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getAttributeNodeNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.setAttributeNodeNS = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementsByTagNameNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.hasAttribute = function (t) {
        return this.attribs.hasOwnProperty(t);
      };
      n.prototype.hasAttributeNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.setIdAttribute = function (t, e) {
        if (this.attribs.hasOwnProperty(t)) {
          return this.attribs[t].isId;
        } else {
          return e;
        }
      };
      n.prototype.setIdAttributeNS = function (t, e, n) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.setIdAttributeNode = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementsByTagName = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementsByTagNameNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementsByClassName = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.isEqualNode = function (t) {
        var e;
        var r;
        var o;
        if (!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(t)) {
          return false;
        }
        if (t.namespaceURI !== this.namespaceURI) {
          return false;
        }
        if (t.prefix !== this.prefix) {
          return false;
        }
        if (t.localName !== this.localName) {
          return false;
        }
        if (t.attribs.length !== this.attribs.length) {
          return false;
        }
        e = r = 0;
        o = this.attribs.length - 1;
        for (; o >= 0 ? r <= o : r >= o; e = o >= 0 ? ++r : --r) {
          if (!this.attribs[e].isEqualNode(t.attribs[e])) {
            return false;
          }
        }
        return true;
      };
      return n;
    }(i);
  }).call(this);
}, function (t, e) {
  (function () {
    t.exports = function () {
      function t(t) {
        this.nodes = t;
      }
      Object.defineProperty(t.prototype, "length", {
        get: function () {
          return Object.keys(this.nodes).length || 0;
        }
      });
      t.prototype.clone = function () {
        return this.nodes = null;
      };
      t.prototype.getNamedItem = function (t) {
        return this.nodes[t];
      };
      t.prototype.setNamedItem = function (t) {
        var e;
        e = this.nodes[t.nodeName];
        this.nodes[t.nodeName] = t;
        return e || null;
      };
      t.prototype.removeNamedItem = function (t) {
        var e;
        e = this.nodes[t];
        delete this.nodes[t];
        return e || null;
      };
      t.prototype.item = function (t) {
        return this.nodes[Object.keys(this.nodes)[t]] || null;
      };
      t.prototype.getNamedItemNS = function (t, e) {
        throw new Error("This DOM method is not implemented.");
      };
      t.prototype.setNamedItemNS = function (t) {
        throw new Error("This DOM method is not implemented.");
      };
      t.prototype.removeNamedItemNS = function (t, e) {
        throw new Error("This DOM method is not implemented.");
      };
      return t;
    }();
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    e = n(4);
    r = n(66);
    t.exports = function (t) {
      function n(t, r) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing CDATA text. " + this.debugInfo());
        }
        this.name = "#cdata-section";
        this.type = e.CData;
        this.value = this.stringify.cdata(r);
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.clone = function () {
        return Object.create(this);
      };
      n.prototype.toString = function (t) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    e = n(4);
    r = n(66);
    t.exports = function (t) {
      function n(t, r) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing comment text. " + this.debugInfo());
        }
        this.name = "#comment";
        this.type = e.Comment;
        this.value = this.stringify.comment(r);
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.clone = function () {
        return Object.create(this);
      };
      n.prototype.toString = function (t) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i = {}.hasOwnProperty;
    o = n(24).isObject;
    r = n(12);
    e = n(4);
    t.exports = function (t) {
      function n(t, r, i, s) {
        var a;
        n.__super__.constructor.call(this, t);
        if (o(r)) {
          r = (a = r).version;
          i = a.encoding;
          s = a.standalone;
        }
        r ||= "1.0";
        this.type = e.Declaration;
        this.version = this.stringify.xmlVersion(r);
        if (i != null) {
          this.encoding = this.stringify.xmlEncoding(i);
        }
        if (s != null) {
          this.standalone = this.stringify.xmlStandalone(s);
        }
      }
      (function (t, e) {
        for (var n in e) {
          if (i.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.toString = function (t) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i;
    var s;
    var a;
    var c;
    var u;
    var f = {}.hasOwnProperty;
    u = n(24).isObject;
    c = n(12);
    e = n(4);
    r = n(128);
    i = n(129);
    o = n(130);
    s = n(131);
    a = n(123);
    t.exports = function (t) {
      function n(t, r, o) {
        var i;
        var s;
        var a;
        var c;
        var f;
        var l;
        n.__super__.constructor.call(this, t);
        this.type = e.DocType;
        if (t.children) {
          s = 0;
          a = (c = t.children).length;
          for (; s < a; s++) {
            if ((i = c[s]).type === e.Element) {
              this.name = i.name;
              break;
            }
          }
        }
        this.documentObject = t;
        if (u(r)) {
          r = (f = r).pubID;
          o = f.sysID;
        }
        if (o == null) {
          o = (l = [r, o])[0];
          r = l[1];
        }
        if (r != null) {
          this.pubID = this.stringify.dtdPubID(r);
        }
        if (o != null) {
          this.sysID = this.stringify.dtdSysID(o);
        }
      }
      (function (t, e) {
        for (var n in e) {
          if (f.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      Object.defineProperty(n.prototype, "entities", {
        get: function () {
          var t;
          var n;
          var r;
          var o;
          var i;
          o = {};
          n = 0;
          r = (i = this.children).length;
          for (; n < r; n++) {
            if ((t = i[n]).type === e.EntityDeclaration && !t.pe) {
              o[t.name] = t;
            }
          }
          return new a(o);
        }
      });
      Object.defineProperty(n.prototype, "notations", {
        get: function () {
          var t;
          var n;
          var r;
          var o;
          var i;
          o = {};
          n = 0;
          r = (i = this.children).length;
          for (; n < r; n++) {
            if ((t = i[n]).type === e.NotationDeclaration) {
              o[t.name] = t;
            }
          }
          return new a(o);
        }
      });
      Object.defineProperty(n.prototype, "publicId", {
        get: function () {
          return this.pubID;
        }
      });
      Object.defineProperty(n.prototype, "systemId", {
        get: function () {
          return this.sysID;
        }
      });
      Object.defineProperty(n.prototype, "internalSubset", {
        get: function () {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      n.prototype.element = function (t, e) {
        var n;
        n = new o(this, t, e);
        this.children.push(n);
        return this;
      };
      n.prototype.attList = function (t, e, n, o, i) {
        var s;
        s = new r(this, t, e, n, o, i);
        this.children.push(s);
        return this;
      };
      n.prototype.entity = function (t, e) {
        var n;
        n = new i(this, false, t, e);
        this.children.push(n);
        return this;
      };
      n.prototype.pEntity = function (t, e) {
        var n;
        n = new i(this, true, t, e);
        this.children.push(n);
        return this;
      };
      n.prototype.notation = function (t, e) {
        var n;
        n = new s(this, t, e);
        this.children.push(n);
        return this;
      };
      n.prototype.toString = function (t) {
        return this.options.writer.docType(this, this.options.writer.filterOptions(t));
      };
      n.prototype.ele = function (t, e) {
        return this.element(t, e);
      };
      n.prototype.att = function (t, e, n, r, o) {
        return this.attList(t, e, n, r, o);
      };
      n.prototype.ent = function (t, e) {
        return this.entity(t, e);
      };
      n.prototype.pent = function (t, e) {
        return this.pEntity(t, e);
      };
      n.prototype.not = function (t, e) {
        return this.notation(t, e);
      };
      n.prototype.up = function () {
        return this.root() || this.documentObject;
      };
      n.prototype.isEqualNode = function (t) {
        return !!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.name === this.name && t.publicId === this.publicId && t.systemId === this.systemId;
      };
      return n;
    }(c);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    r = n(12);
    e = n(4);
    t.exports = function (t) {
      function n(t, r, o, i, s, a) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (o == null) {
          throw new Error("Missing DTD attribute name. " + this.debugInfo(r));
        }
        if (!i) {
          throw new Error("Missing DTD attribute type. " + this.debugInfo(r));
        }
        if (!s) {
          throw new Error("Missing DTD attribute default. " + this.debugInfo(r));
        }
        if (s.indexOf("#") !== 0) {
          s = "#" + s;
        }
        if (!s.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(r));
        }
        if (a && !s.match(/^(#FIXED|#DEFAULT)$/)) {
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(r));
        }
        this.elementName = this.stringify.name(r);
        this.type = e.AttributeDeclaration;
        this.attributeName = this.stringify.name(o);
        this.attributeType = this.stringify.dtdAttType(i);
        if (a) {
          this.defaultValue = this.stringify.dtdAttDefault(a);
        }
        this.defaultValueType = s;
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.toString = function (t) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i = {}.hasOwnProperty;
    o = n(24).isObject;
    r = n(12);
    e = n(4);
    t.exports = function (t) {
      function n(t, r, i, s) {
        n.__super__.constructor.call(this, t);
        if (i == null) {
          throw new Error("Missing DTD entity name. " + this.debugInfo(i));
        }
        if (s == null) {
          throw new Error("Missing DTD entity value. " + this.debugInfo(i));
        }
        this.pe = !!r;
        this.name = this.stringify.name(i);
        this.type = e.EntityDeclaration;
        if (o(s)) {
          if (!s.pubID && !s.sysID) {
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(i));
          }
          if (s.pubID && !s.sysID) {
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(i));
          }
          this.internal = false;
          if (s.pubID != null) {
            this.pubID = this.stringify.dtdPubID(s.pubID);
          }
          if (s.sysID != null) {
            this.sysID = this.stringify.dtdSysID(s.sysID);
          }
          if (s.nData != null) {
            this.nData = this.stringify.dtdNData(s.nData);
          }
          if (this.pe && this.nData) {
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(i));
          }
        } else {
          this.value = this.stringify.dtdEntityValue(s);
          this.internal = true;
        }
      }
      (function (t, e) {
        for (var n in e) {
          if (i.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      Object.defineProperty(n.prototype, "publicId", {
        get: function () {
          return this.pubID;
        }
      });
      Object.defineProperty(n.prototype, "systemId", {
        get: function () {
          return this.sysID;
        }
      });
      Object.defineProperty(n.prototype, "notationName", {
        get: function () {
          return this.nData || null;
        }
      });
      Object.defineProperty(n.prototype, "inputEncoding", {
        get: function () {
          return null;
        }
      });
      Object.defineProperty(n.prototype, "xmlEncoding", {
        get: function () {
          return null;
        }
      });
      Object.defineProperty(n.prototype, "xmlVersion", {
        get: function () {
          return null;
        }
      });
      n.prototype.toString = function (t) {
        return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    r = n(12);
    e = n(4);
    t.exports = function (t) {
      function n(t, r, o) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        o ||= "(#PCDATA)";
        if (Array.isArray(o)) {
          o = "(" + o.join(",") + ")";
        }
        this.name = this.stringify.name(r);
        this.type = e.ElementDeclaration;
        this.value = this.stringify.dtdElementValue(o);
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.toString = function (t) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    r = n(12);
    e = n(4);
    t.exports = function (t) {
      function n(t, r, o) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing DTD notation name. " + this.debugInfo(r));
        }
        if (!o.pubID && !o.sysID) {
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(r));
        }
        this.name = this.stringify.name(r);
        this.type = e.NotationDeclaration;
        if (o.pubID != null) {
          this.pubID = this.stringify.dtdPubID(o.pubID);
        }
        if (o.sysID != null) {
          this.sysID = this.stringify.dtdSysID(o.sysID);
        }
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      Object.defineProperty(n.prototype, "publicId", {
        get: function () {
          return this.pubID;
        }
      });
      Object.defineProperty(n.prototype, "systemId", {
        get: function () {
          return this.sysID;
        }
      });
      n.prototype.toString = function (t) {
        return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    e = n(4);
    r = n(12);
    t.exports = function (t) {
      function n(t, r) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing raw text. " + this.debugInfo());
        }
        this.type = e.Raw;
        this.value = this.stringify.raw(r);
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.clone = function () {
        return Object.create(this);
      };
      n.prototype.toString = function (t) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    e = n(4);
    r = n(66);
    t.exports = function (t) {
      function n(t, r) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing element text. " + this.debugInfo());
        }
        this.name = "#text";
        this.type = e.Text;
        this.value = this.stringify.text(r);
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      Object.defineProperty(n.prototype, "isElementContentWhitespace", {
        get: function () {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(n.prototype, "wholeText", {
        get: function () {
          var t;
          var e;
          var n;
          n = "";
          e = this.previousSibling;
          while (e) {
            n = e.data + n;
            e = e.previousSibling;
          }
          n += this.data;
          t = this.nextSibling;
          while (t) {
            n += t.data;
            t = t.nextSibling;
          }
          return n;
        }
      });
      n.prototype.clone = function () {
        return Object.create(this);
      };
      n.prototype.toString = function (t) {
        return this.options.writer.text(this, this.options.writer.filterOptions(t));
      };
      n.prototype.splitText = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.replaceWholeText = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    e = n(4);
    r = n(66);
    t.exports = function (t) {
      function n(t, r, o) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing instruction target. " + this.debugInfo());
        }
        this.type = e.ProcessingInstruction;
        this.target = this.stringify.insTarget(r);
        this.name = this.target;
        if (o) {
          this.value = this.stringify.insValue(o);
        }
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.clone = function () {
        return Object.create(this);
      };
      n.prototype.toString = function (t) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(t));
      };
      n.prototype.isEqualNode = function (t) {
        return !!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.target === this.target;
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r = {}.hasOwnProperty;
    e = n(194);
    t.exports = function (t) {
      function e(t) {
        e.__super__.constructor.call(this, t);
      }
      (function (t, e) {
        for (var n in e) {
          if (r.call(e, n)) {
            t[n] = e[n];
          }
        }
        function o() {
          this.constructor = t;
        }
        o.prototype = e.prototype;
        t.prototype = new o();
        t.__super__ = e.prototype;
      })(e, t);
      e.prototype.document = function (t, e) {
        var n;
        var r;
        var o;
        var i;
        var s;
        e = this.filterOptions(e);
        i = "";
        r = 0;
        o = (s = t.children).length;
        for (; r < o; r++) {
          n = s[r];
          i += this.writeChildNode(n, e, 0);
        }
        if (e.pretty && i.slice(-e.newline.length) === e.newline) {
          i = i.slice(0, -e.newline.length);
        }
        return i;
      };
      return e;
    }(e);
  }).call(this);
}, function (t, e, n) {
  (e = t.exports = n(196)).Stream = e;
  e.Readable = e;
  e.Writable = n(138);
  e.Duplex = n(34);
  e.Transform = n(200);
  e.PassThrough = n(325);
}, function (t, e, n) {
  var r = n(68);
  var o = r.Buffer;
  function i(t, e) {
    for (var n in t) {
      e[n] = t[n];
    }
  }
  function s(t, e, n) {
    return o(t, e, n);
  }
  if (o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow) {
    t.exports = r;
  } else {
    i(r, e);
    e.Buffer = s;
  }
  i(o, s);
  s.from = function (t, e, n) {
    if (typeof t == "number") {
      throw new TypeError("Argument must not be a number");
    }
    return o(t, e, n);
  };
  s.alloc = function (t, e, n) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    var r = o(t);
    if (e !== undefined) {
      if (typeof n == "string") {
        r.fill(e, n);
      } else {
        r.fill(e);
      }
    } else {
      r.fill(0);
    }
    return r;
  };
  s.allocUnsafe = function (t) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    return o(t);
  };
  s.allocUnsafeSlow = function (t) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    return r.SlowBuffer(t);
  };
}, function (t, e, n) {
  "use strict";

  (function (e, r, o) {
    var i = n(70);
    function s(t) {
      var e = this;
      this.next = null;
      this.entry = null;
      this.finish = function () {
        (function (t, e, n) {
          var r = t.entry;
          t.entry = null;
          while (r) {
            var o = r.callback;
            e.pendingcb--;
            o(n);
            r = r.next;
          }
          if (e.corkedRequestsFree) {
            e.corkedRequestsFree.next = t;
          } else {
            e.corkedRequestsFree = t;
          }
        })(e, t);
      };
    }
    t.exports = v;
    var a;
    var c = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : i.nextTick;
    v.WritableState = g;
    var u = Object.create(n(52));
    u.inherits = n(46);
    var f = {
      deprecate: n(323)
    };
    var l = n(197);
    var h = n(137).Buffer;
    var p = o.Uint8Array || function () {};
    var d;
    var y = n(198);
    function m() {}
    function g(t, e) {
      a = a || n(34);
      t = t || {};
      var r = e instanceof a;
      this.objectMode = !!t.objectMode;
      if (r) {
        this.objectMode = this.objectMode || !!t.writableObjectMode;
      }
      var o = t.highWaterMark;
      var u = t.writableHighWaterMark;
      var f = this.objectMode ? 16 : 16384;
      this.highWaterMark = o || o === 0 ? o : r && (u || u === 0) ? u : f;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var l = t.decodeStrings === false;
      this.decodeStrings = !l;
      this.defaultEncoding = t.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function (t) {
        (function (t, e) {
          var n = t._writableState;
          var r = n.sync;
          var o = n.writecb;
          (function (t) {
            t.writing = false;
            t.writecb = null;
            t.length -= t.writelen;
            t.writelen = 0;
          })(n);
          if (e) {
            (function (t, e, n, r, o) {
              --e.pendingcb;
              if (n) {
                i.nextTick(o, r);
                i.nextTick(E, t, e);
                t._writableState.errorEmitted = true;
                t.emit("error", r);
              } else {
                o(r);
                t._writableState.errorEmitted = true;
                t.emit("error", r);
                E(t, e);
              }
            })(t, n, r, e, o);
          } else {
            var s = x(n);
            if (!s && !n.corked && !n.bufferProcessing && !!n.bufferedRequest) {
              _(t, n);
            }
            if (r) {
              c(w, t, n, s, o);
            } else {
              w(t, n, s, o);
            }
          }
        })(e, t);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new s(this);
    }
    function v(t) {
      a = a || n(34);
      if (!d.call(v, this) && !(this instanceof a)) {
        return new v(t);
      }
      this._writableState = new g(t, this);
      this.writable = true;
      if (t) {
        if (typeof t.write == "function") {
          this._write = t.write;
        }
        if (typeof t.writev == "function") {
          this._writev = t.writev;
        }
        if (typeof t.destroy == "function") {
          this._destroy = t.destroy;
        }
        if (typeof t.final == "function") {
          this._final = t.final;
        }
      }
      l.call(this);
    }
    function b(t, e, n, r, o, i, s) {
      e.writelen = r;
      e.writecb = s;
      e.writing = true;
      e.sync = true;
      if (n) {
        t._writev(o, e.onwrite);
      } else {
        t._write(o, i, e.onwrite);
      }
      e.sync = false;
    }
    function w(t, e, n, r) {
      if (!n) {
        (function (t, e) {
          if (e.length === 0 && e.needDrain) {
            e.needDrain = false;
            t.emit("drain");
          }
        })(t, e);
      }
      e.pendingcb--;
      r();
      E(t, e);
    }
    function _(t, e) {
      e.bufferProcessing = true;
      var n = e.bufferedRequest;
      if (t._writev && n && n.next) {
        var r = e.bufferedRequestCount;
        var o = new Array(r);
        var i = e.corkedRequestsFree;
        i.entry = n;
        var a = 0;
        var c = true;
        while (n) {
          o[a] = n;
          if (!n.isBuf) {
            c = false;
          }
          n = n.next;
          a += 1;
        }
        o.allBuffers = c;
        b(t, e, true, e.length, o, "", i.finish);
        e.pendingcb++;
        e.lastBufferedRequest = null;
        if (i.next) {
          e.corkedRequestsFree = i.next;
          i.next = null;
        } else {
          e.corkedRequestsFree = new s(e);
        }
        e.bufferedRequestCount = 0;
      } else {
        while (n) {
          var u = n.chunk;
          var f = n.encoding;
          var l = n.callback;
          b(t, e, false, e.objectMode ? 1 : u.length, u, f, l);
          n = n.next;
          e.bufferedRequestCount--;
          if (e.writing) {
            break;
          }
        }
        if (n === null) {
          e.lastBufferedRequest = null;
        }
      }
      e.bufferedRequest = n;
      e.bufferProcessing = false;
    }
    function x(t) {
      return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
    }
    function T(t, e) {
      t._final(function (n) {
        e.pendingcb--;
        if (n) {
          t.emit("error", n);
        }
        e.prefinished = true;
        t.emit("prefinish");
        E(t, e);
      });
    }
    function E(t, e) {
      var n = x(e);
      if (n) {
        (function (t, e) {
          if (!e.prefinished && !e.finalCalled) {
            if (typeof t._final == "function") {
              e.pendingcb++;
              e.finalCalled = true;
              i.nextTick(T, t, e);
            } else {
              e.prefinished = true;
              t.emit("prefinish");
            }
          }
        })(t, e);
        if (e.pendingcb === 0) {
          e.finished = true;
          t.emit("finish");
        }
      }
      return n;
    }
    u.inherits(v, l);
    g.prototype.getBuffer = function () {
      for (var t = this.bufferedRequest, e = []; t;) {
        e.push(t);
        t = t.next;
      }
      return e;
    };
    (function () {
      try {
        Object.defineProperty(g.prototype, "buffer", {
          get: f.deprecate(function () {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (t) {}
    })();
    if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
      d = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(v, Symbol.hasInstance, {
        value: function (t) {
          return !!d.call(this, t) || this === v && t && t._writableState instanceof g;
        }
      });
    } else {
      d = function (t) {
        return t instanceof this;
      };
    }
    v.prototype.pipe = function () {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    v.prototype.write = function (t, e, n) {
      var r;
      var o = this._writableState;
      var s = false;
      var a = !o.objectMode && (r = t, h.isBuffer(r) || r instanceof p);
      if (a && !h.isBuffer(t)) {
        t = function (t) {
          return h.from(t);
        }(t);
      }
      if (typeof e == "function") {
        n = e;
        e = null;
      }
      if (a) {
        e = "buffer";
      } else {
        e ||= o.defaultEncoding;
      }
      if (typeof n != "function") {
        n = m;
      }
      if (o.ended) {
        (function (t, e) {
          var n = new Error("write after end");
          t.emit("error", n);
          i.nextTick(e, n);
        })(this, n);
      } else if (a || function (t, e, n, r) {
        var o = true;
        var s = false;
        if (n === null) {
          s = new TypeError("May not write null values to stream");
        } else if (typeof n != "string" && n !== undefined && !e.objectMode) {
          s = new TypeError("Invalid non-string/buffer chunk");
        }
        if (s) {
          t.emit("error", s);
          i.nextTick(r, s);
          o = false;
        }
        return o;
      }(this, o, t, n)) {
        o.pendingcb++;
        s = function (t, e, n, r, o, i) {
          if (!n) {
            var s = function (t, e, n) {
              if (!t.objectMode && t.decodeStrings !== false && typeof e == "string") {
                e = h.from(e, n);
              }
              return e;
            }(e, r, o);
            if (r !== s) {
              n = true;
              o = "buffer";
              r = s;
            }
          }
          var a = e.objectMode ? 1 : r.length;
          e.length += a;
          var c = e.length < e.highWaterMark;
          if (!c) {
            e.needDrain = true;
          }
          if (e.writing || e.corked) {
            var u = e.lastBufferedRequest;
            e.lastBufferedRequest = {
              chunk: r,
              encoding: o,
              isBuf: n,
              callback: i,
              next: null
            };
            if (u) {
              u.next = e.lastBufferedRequest;
            } else {
              e.bufferedRequest = e.lastBufferedRequest;
            }
            e.bufferedRequestCount += 1;
          } else {
            b(t, e, false, a, r, o, i);
          }
          return c;
        }(this, o, a, t, e, n);
      }
      return s;
    };
    v.prototype.cork = function () {
      this._writableState.corked++;
    };
    v.prototype.uncork = function () {
      var t = this._writableState;
      if (t.corked) {
        t.corked--;
        if (!t.writing && !t.corked && !t.finished && !t.bufferProcessing && !!t.bufferedRequest) {
          _(this, t);
        }
      }
    };
    v.prototype.setDefaultEncoding = function (t) {
      if (typeof t == "string") {
        t = t.toLowerCase();
      }
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) {
        throw new TypeError("Unknown encoding: " + t);
      }
      this._writableState.defaultEncoding = t;
      return this;
    };
    Object.defineProperty(v.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    v.prototype._write = function (t, e, n) {
      n(new Error("_write() is not implemented"));
    };
    v.prototype._writev = null;
    v.prototype.end = function (t, e, n) {
      var r = this._writableState;
      if (typeof t == "function") {
        n = t;
        t = null;
        e = null;
      } else if (typeof e == "function") {
        n = e;
        e = null;
      }
      if (t != null) {
        this.write(t, e);
      }
      if (r.corked) {
        r.corked = 1;
        this.uncork();
      }
      if (!r.ending && !r.finished) {
        (function (t, e, n) {
          e.ending = true;
          E(t, e);
          if (n) {
            if (e.finished) {
              i.nextTick(n);
            } else {
              t.once("finish", n);
            }
          }
          e.ended = true;
          t.writable = false;
        })(this, r, n);
      }
    };
    Object.defineProperty(v.prototype, "destroyed", {
      get: function () {
        return this._writableState !== undefined && this._writableState.destroyed;
      },
      set: function (t) {
        if (this._writableState) {
          this._writableState.destroyed = t;
        }
      }
    });
    v.prototype.destroy = y.destroy;
    v.prototype._undestroy = y.undestroy;
    v.prototype._destroy = function (t, e) {
      this.end();
      e(t);
    };
  }).call(this, n(51), n(199).setImmediate, n(14));
}, function (t, e, n) {
  "use strict";

  var r = n(324).Buffer;
  var o = r.isEncoding || function (t) {
    switch ((t = "" + t) && t.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function i(t) {
    var e;
    this.encoding = function (t) {
      var e = function (t) {
        if (!t) {
          return "utf8";
        }
        var e;
        while (true) {
          switch (t) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return t;
            default:
              if (e) {
                return;
              }
              t = ("" + t).toLowerCase();
              e = true;
          }
        }
      }(t);
      if (typeof e != "string" && (r.isEncoding === o || !o(t))) {
        throw new Error("Unknown encoding: " + t);
      }
      return e || t;
    }(t);
    switch (this.encoding) {
      case "utf16le":
        this.text = c;
        this.end = u;
        e = 4;
        break;
      case "utf8":
        this.fillLast = a;
        e = 4;
        break;
      case "base64":
        this.text = f;
        this.end = l;
        e = 3;
        break;
      default:
        this.write = h;
        this.end = p;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = r.allocUnsafe(e);
  }
  function s(t) {
    if (t <= 127) {
      return 0;
    } else if (t >> 5 == 6) {
      return 2;
    } else if (t >> 4 == 14) {
      return 3;
    } else if (t >> 3 == 30) {
      return 4;
    } else if (t >> 6 == 2) {
      return -1;
    } else {
      return -2;
    }
  }
  function a(t) {
    var e = this.lastTotal - this.lastNeed;
    var n = function (t, e, n) {
      if ((e[0] & 192) != 128) {
        t.lastNeed = 0;
        return "�";
      }
      if (t.lastNeed > 1 && e.length > 1) {
        if ((e[1] & 192) != 128) {
          t.lastNeed = 1;
          return "�";
        }
        if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) != 128) {
          t.lastNeed = 2;
          return "�";
        }
      }
    }(this, t);
    if (n !== undefined) {
      return n;
    } else if (this.lastNeed <= t.length) {
      t.copy(this.lastChar, e, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    } else {
      t.copy(this.lastChar, e, 0, t.length);
      this.lastNeed -= t.length;
      return;
    }
  }
  function c(t, e) {
    if ((t.length - e) % 2 == 0) {
      var n = t.toString("utf16le", e);
      if (n) {
        var r = n.charCodeAt(n.length - 1);
        if (r >= 55296 && r <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = t[t.length - 2];
          this.lastChar[1] = t[t.length - 1];
          return n.slice(0, -1);
        }
      }
      return n;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = t[t.length - 1];
    return t.toString("utf16le", e, t.length - 1);
  }
  function u(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      var n = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, n);
    }
    return e;
  }
  function f(t, e) {
    var n = (t.length - e) % 3;
    if (n === 0) {
      return t.toString("base64", e);
    } else {
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = t[t.length - 1];
      } else {
        this.lastChar[0] = t[t.length - 2];
        this.lastChar[1] = t[t.length - 1];
      }
      return t.toString("base64", e, t.length - n);
    }
  }
  function l(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      return e + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    } else {
      return e;
    }
  }
  function h(t) {
    return t.toString(this.encoding);
  }
  function p(t) {
    if (t && t.length) {
      return this.write(t);
    } else {
      return "";
    }
  }
  e.StringDecoder = i;
  i.prototype.write = function (t) {
    if (t.length === 0) {
      return "";
    }
    var e;
    var n;
    if (this.lastNeed) {
      if ((e = this.fillLast(t)) === undefined) {
        return "";
      }
      n = this.lastNeed;
      this.lastNeed = 0;
    } else {
      n = 0;
    }
    if (n < t.length) {
      if (e) {
        return e + this.text(t, n);
      } else {
        return this.text(t, n);
      }
    } else {
      return e || "";
    }
  };
  i.prototype.end = function (t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      return e + "�";
    } else {
      return e;
    }
  };
  i.prototype.text = function (t, e) {
    var n = function (t, e, n) {
      var r = e.length - 1;
      if (r < n) {
        return 0;
      }
      var o = s(e[r]);
      if (o >= 0) {
        if (o > 0) {
          t.lastNeed = o - 1;
        }
        return o;
      }
      if (--r < n || o === -2) {
        return 0;
      }
      if ((o = s(e[r])) >= 0) {
        if (o > 0) {
          t.lastNeed = o - 2;
        }
        return o;
      }
      if (--r < n || o === -2) {
        return 0;
      }
      if ((o = s(e[r])) >= 0) {
        if (o > 0) {
          if (o === 2) {
            o = 0;
          } else {
            t.lastNeed = o - 3;
          }
        }
        return o;
      }
      return 0;
    }(this, t, e);
    if (!this.lastNeed) {
      return t.toString("utf8", e);
    }
    this.lastTotal = n;
    var r = t.length - (n - this.lastNeed);
    t.copy(this.lastChar, 0, r);
    return t.toString("utf8", e, r);
  };
  i.prototype.fillLast = function (t) {
    if (this.lastNeed <= t.length) {
      t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length);
    this.lastNeed -= t.length;
  };
}, function (t, e, n) {
  var r = n(20);
  var o = n(333);
  t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t;
    var e = false;
    var n = {};
    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []);
      e = n instanceof Array;
    } catch (t) {}
    return function (n, i) {
      r(n);
      o(i);
      if (e) {
        t.call(n, i);
      } else {
        n.__proto__ = i;
      }
      return n;
    };
  }() : undefined);
}, function (t, e, n) {
  var r = n(50);
  var o = n(7);
  t.exports = r(o.process) == "process";
}, function (t, e) {
  t.exports = function (t, e) {
    return t === e || t != t && e != e;
  };
}, function (t, e, n) {
  var r = n(36)(n(17), "Map");
  t.exports = r;
}, function (t, e, n) {
  var r = n(225);
  var o = n(427);
  var i = n(229);
  t.exports = function (t) {
    if (i(t)) {
      return r(t);
    } else {
      return o(t);
    }
  };
}, function (t, e, n) {
  (function (t) {
    var r = n(17);
    var o = n(424);
    var i = e && !e.nodeType && e;
    var s = i && typeof t == "object" && t && !t.nodeType && t;
    var a = s && s.exports === i ? r.Buffer : undefined;
    var c = (a ? a.isBuffer : undefined) || o;
    t.exports = c;
  }).call(this, n(146)(t));
}, function (t, e) {
  t.exports = function (t) {
    if (!t.webpackPolyfill) {
      t.deprecate = function () {};
      t.paths = [];
      t.children ||= [];
      Object.defineProperty(t, "loaded", {
        enumerable: true,
        get: function () {
          return t.l;
        }
      });
      Object.defineProperty(t, "id", {
        enumerable: true,
        get: function () {
          return t.i;
        }
      });
      t.webpackPolyfill = 1;
    }
    return t;
  };
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return t(e);
    };
  };
}, function (t, e, n) {
  (function (t) {
    var r = n(210);
    var o = e && !e.nodeType && e;
    var i = o && typeof t == "object" && t && !t.nodeType && t;
    var s = i && i.exports === o && r.process;
    var a = function () {
      try {
        var t = i && i.require && i.require("util").types;
        return t || s && s.binding && s.binding("util");
      } catch (t) {}
    }();
    t.exports = a;
  }).call(this, n(146)(t));
}, function (t, e) {
  var n = Object.prototype;
  t.exports = function (t) {
    var e = t && t.constructor;
    return t === (typeof e == "function" && e.prototype || n);
  };
}, function (t, e, n) {
  var r = n(225);
  var o = n(430);
  var i = n(229);
  t.exports = function (t) {
    if (i(t)) {
      return r(t, true);
    } else {
      return o(t);
    }
  };
}, function (t, e, n) {
  var r = n(435);
  var o = n(230);
  var i = Object.prototype.propertyIsEnumerable;
  var s = Object.getOwnPropertySymbols;
  var a = s ? function (t) {
    if (t == null) {
      return [];
    } else {
      t = Object(t);
      return r(s(t), function (e) {
        return i.call(t, e);
      });
    }
  } : o;
  t.exports = a;
}, function (t, e, n) {
  var r = n(236);
  t.exports = function (t) {
    var e = new t.constructor(t.byteLength);
    new r(e).set(new r(t));
    return e;
  };
}, function (t, e, n) {
  var r = n(454);
  t.exports = function (t, e) {
    return r(t, e);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(t & 1),
      configurable: !(t & 2),
      writable: !(t & 4),
      value: e
    };
  };
}, function (t, e, n) {
  var r = n(25);
  t.exports = function (t, e) {
    if (!r(t)) {
      return t;
    }
    var n;
    var o;
    if (e && typeof (n = t.toString) == "function" && !r(o = n.call(t))) {
      return o;
    }
    if (typeof (n = t.valueOf) == "function" && !r(o = n.call(t))) {
      return o;
    }
    if (!e && typeof (n = t.toString) == "function" && !r(o = n.call(t))) {
      return o;
    }
    throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e, n) {
  var r = n(32);
  var o = n(8);
  var i = n(92);
  t.exports = !r && !o(function () {
    return Object.defineProperty(i("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
}, function (t, e, n) {
  var r = n(23);
  var o = n(90);
  var i = n(253).indexOf;
  var s = n(101);
  t.exports = function (t, e) {
    var n;
    var a = o(t);
    var c = 0;
    var u = [];
    for (n in a) {
      if (!r(s, n) && r(a, n)) {
        u.push(n);
      }
    }
    while (e.length > c) {
      if (r(a, n = e[c++])) {
        if (!~i(u, n)) {
          u.push(n);
        }
      }
    }
    return u;
  };
}, function (t, e, n) {
  var r = n(8);
  var o = /#|\.prototype\./;
  function i(t, e) {
    var n = a[s(t)];
    return n == u || n != c && (typeof e == "function" ? r(e) : !!e);
  }
  var s = i.normalize = function (t) {
    return String(t).replace(o, ".").toLowerCase();
  };
  var a = i.data = {};
  var c = i.NATIVE = "N";
  var u = i.POLYFILL = "P";
  t.exports = i;
}, function (t, e, n) {
  var r = n(5);
  t.exports = r.Promise;
}, function (t, e, n) {
  var r = n(15);
  var o = n(257);
  t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t;
    var e = false;
    var n = {};
    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []);
      e = n instanceof Array;
    } catch (t) {}
    return function (n, i) {
      r(n);
      o(i);
      if (e) {
        t.call(n, i);
      } else {
        n.__proto__ = i;
      }
      return n;
    };
  }() : undefined);
}, function (t, e, n) {
  var r = n(103);
  var o = n(8);
  t.exports = !!Object.getOwnPropertySymbols && !o(function () {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
  });
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(49);
  t.exports = function (t, e, n) {
    r(t);
    if (e === undefined) {
      return t;
    }
    switch (n) {
      case 0:
        return function () {
          return t.call(e);
        };
      case 1:
        return function (n) {
          return t.call(e, n);
        };
      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };
      case 3:
        return function (n, r, o) {
          return t.call(e, n, r, o);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(265);
  var o = n(55);
  var i = n(11)("toStringTag");
  var s = o(function () {
    return arguments;
  }()) == "Arguments";
  t.exports = r ? o : function (t) {
    var e;
    var n;
    var r;
    if (t === undefined) {
      return "Undefined";
    } else if (t === null) {
      return "Null";
    } else if (typeof (n = function (t, e) {
      try {
        return t[e];
      } catch (t) {}
    }(e = Object(t), i)) == "string") {
      return n;
    } else if (s) {
      return o(e);
    } else if ((r = o(e)) == "Object" && typeof e.callee == "function") {
      return "Arguments";
    } else {
      return r;
    }
  };
}, function (t, e, n) {
  var r = n(15);
  var o = n(49);
  var i = n(11)("species");
  t.exports = function (t, e) {
    var n;
    var s = r(t).constructor;
    if (s === undefined || (n = r(s)[i]) == null) {
      return e;
    } else {
      return o(n);
    }
  };
}, function (t, e, n) {
  var r;
  var o;
  var i;
  var s = n(5);
  var a = n(8);
  var c = n(163);
  var u = n(167);
  var f = n(92);
  var l = n(168);
  var h = n(104);
  var p = s.location;
  var d = s.setImmediate;
  var y = s.clearImmediate;
  var m = s.process;
  var g = s.MessageChannel;
  var v = s.Dispatch;
  var b = 0;
  var w = {};
  function _(t) {
    if (w.hasOwnProperty(t)) {
      var e = w[t];
      delete w[t];
      e();
    }
  }
  function x(t) {
    return function () {
      _(t);
    };
  }
  function T(t) {
    _(t.data);
  }
  function E(t) {
    s.postMessage(t + "", p.protocol + "//" + p.host);
  }
  if (!d || !y) {
    d = function (t) {
      var e = [];
      for (var n = 1; arguments.length > n;) {
        e.push(arguments[n++]);
      }
      w[++b] = function () {
        (typeof t == "function" ? t : Function(t)).apply(undefined, e);
      };
      r(b);
      return b;
    };
    y = function (t) {
      delete w[t];
    };
    if (h) {
      r = function (t) {
        m.nextTick(x(t));
      };
    } else if (v && v.now) {
      r = function (t) {
        v.now(x(t));
      };
    } else if (g && !l) {
      i = (o = new g()).port2;
      o.port1.onmessage = T;
      r = c(i.postMessage, i, 1);
    } else if (s.addEventListener && typeof postMessage == "function" && !s.importScripts && p && p.protocol !== "file:" && !a(E)) {
      r = E;
      s.addEventListener("message", T, false);
    } else {
      r = "onreadystatechange" in f("script") ? function (t) {
        u.appendChild(f("script")).onreadystatechange = function () {
          u.removeChild(this);
          _(t);
        };
      } : function (t) {
        setTimeout(x(t), 0);
      };
    }
  }
  t.exports = {
    set: d,
    clear: y
  };
}, function (t, e, n) {
  var r = n(40);
  t.exports = r("document", "documentElement");
}, function (t, e, n) {
  var r = n(41);
  t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r);
}, function (t, e, n) {
  var r = n(15);
  var o = n(25);
  var i = n(170);
  t.exports = function (t, e) {
    r(t);
    if (o(e) && e.constructor === t) {
      return e;
    }
    var n = i.f(t);
    (0, n.resolve)(e);
    return n.promise;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(49);
  function o(t) {
    var e;
    var n;
    this.promise = new t(function (t, r) {
      if (e !== undefined || n !== undefined) {
        throw TypeError("Bad Promise constructor");
      }
      e = t;
      n = r;
    });
    this.resolve = r(e);
    this.reject = r(n);
  }
  t.exports.f = function (t) {
    return new o(t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(28);
  var o = n(177);
  var i = n(62);
  var s = n(114);
  var a = n(33);
  var c = n(20);
  var u = n(50);
  var f = n(298);
  var l = n(299);
  var h = n(19);
  var p = n(18);
  var d = n(9);
  var y = n(120);
  var m = n(300);
  var g = n(65);
  var v = n(43);
  var b = d("matchAll");
  var w = g.set;
  var _ = g.getterFor("RegExp String Iterator");
  var x = RegExp.prototype;
  var T = x.exec;
  var E = "".matchAll;
  var O = !!E && !p(function () {
    "a".matchAll(/./);
  });
  var S = o(function (t, e, n, r) {
    w(this, {
      type: "RegExp String Iterator",
      regexp: t,
      string: e,
      global: n,
      unicode: r,
      done: false
    });
  }, "RegExp String", function () {
    var t = _(this);
    if (t.done) {
      return {
        value: undefined,
        done: true
      };
    }
    var e = t.regexp;
    var n = t.string;
    var r = function (t, e) {
      var n;
      var r = t.exec;
      if (typeof r == "function") {
        if (typeof (n = r.call(t, e)) != "object") {
          throw TypeError("Incorrect exec result");
        }
        return n;
      }
      return T.call(t, e);
    }(e, n);
    if (r === null) {
      return {
        value: undefined,
        done: t.done = true
      };
    } else if (t.global) {
      if (String(r[0]) == "") {
        e.lastIndex = m(n, s(e.lastIndex), t.unicode);
      }
      return {
        value: r,
        done: false
      };
    } else {
      t.done = true;
      return {
        value: r,
        done: false
      };
    }
  });
  function I(t) {
    var e;
    var n;
    var r;
    var o;
    var i;
    var a;
    var u = c(this);
    var f = String(t);
    e = y(u, RegExp);
    if ((n = u.flags) === undefined && u instanceof RegExp && !("flags" in x)) {
      n = l.call(u);
    }
    r = n === undefined ? "" : String(n);
    o = new e(e === RegExp ? u.source : u, r);
    i = !!~r.indexOf("g");
    a = !!~r.indexOf("u");
    o.lastIndex = s(u.lastIndex);
    return new S(o, f, i, a);
  }
  r({
    target: "String",
    proto: true,
    forced: O
  }, {
    matchAll: function (t) {
      var e;
      var n;
      var r;
      var o = i(this);
      if (t != null) {
        if (f(t) && !~String(i("flags" in x ? t.flags : l.call(t))).indexOf("g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (O) {
          return E.apply(o, arguments);
        }
        if ((n = t[b]) === undefined && v && u(t) == "RegExp") {
          n = I;
        }
        if (n != null) {
          return a(n).call(t, o);
        }
      } else if (O) {
        return E.apply(o, arguments);
      }
      e = String(o);
      r = new RegExp(t, "g");
      if (v) {
        return I.call(r, e);
      } else {
        return r[b](e);
      }
    }
  });
  if (!v && !(b in x)) {
    h(x, b, I);
  }
}, function (t, e, n) {
  var r = n(42);
  var o = n(287);
  var i = n(60);
  var s = n(61);
  var a = n(173);
  var c = n(30);
  var u = n(175);
  var f = Object.getOwnPropertyDescriptor;
  e.f = r ? f : function (t, e) {
    t = s(t);
    e = a(e, true);
    if (u) {
      try {
        return f(t, e);
      } catch (t) {}
    }
    if (c(t, e)) {
      return i(!o.f.call(t, e), t[e]);
    }
  };
}, function (t, e, n) {
  var r = n(29);
  t.exports = function (t, e) {
    if (!r(t)) {
      return t;
    }
    var n;
    var o;
    if (e && typeof (n = t.toString) == "function" && !r(o = n.call(t))) {
      return o;
    }
    if (typeof (n = t.valueOf) == "function" && !r(o = n.call(t))) {
      return o;
    }
    if (!e && typeof (n = t.toString) == "function" && !r(o = n.call(t))) {
      return o;
    }
    throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e, n) {
  var r = n(62);
  t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e, n) {
  var r = n(42);
  var o = n(18);
  var i = n(108);
  t.exports = !r && !o(function () {
    return Object.defineProperty(i("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
}, function (t, e, n) {
  var r = n(18);
  var o = /#|\.prototype\./;
  function i(t, e) {
    var n = a[s(t)];
    return n == u || n != c && (typeof e == "function" ? r(e) : !!e);
  }
  var s = i.normalize = function (t) {
    return String(t).replace(o, ".").toLowerCase();
  };
  var a = i.data = {};
  var c = i.NATIVE = "N";
  var u = i.POLYFILL = "P";
  t.exports = i;
}, function (t, e, n) {
  "use strict";

  var r = n(178).IteratorPrototype;
  var o = n(183);
  var i = n(60);
  var s = n(117);
  var a = n(45);
  function c() {
    return this;
  }
  t.exports = function (t, e, n) {
    var u = e + " Iterator";
    t.prototype = o(r, {
      next: i(1, n)
    });
    s(t, u, false, true);
    a[u] = c;
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r;
  var o;
  var i;
  var s = n(18);
  var a = n(110);
  var c = n(19);
  var u = n(30);
  var f = n(9);
  var l = n(43);
  var h = f("iterator");
  var p = false;
  if ([].keys) {
    if ("next" in (i = [].keys())) {
      if ((o = a(a(i))) !== Object.prototype) {
        r = o;
      }
    } else {
      p = true;
    }
  }
  var d = r == null || s(function () {
    var t = {};
    return r[h].call(t) !== t;
  });
  if (d) {
    r = {};
  }
  if ((!l || !!d) && !u(r, h)) {
    c(r, h, function () {
      return this;
    });
  }
  t.exports = {
    IteratorPrototype: r,
    BUGGY_SAFARI_ITERATORS: p
  };
}, function (t, e, n) {
  var r = n(43);
  var o = n(112);
  (t.exports = function (t, e) {
    return o[t] ||= e !== undefined ? e : {};
  })("versions", []).push({
    version: "3.15.2",
    mode: r ? "pure" : "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
  });
}, function (t, e) {
  var n = 0;
  var r = Math.random();
  t.exports = function (t) {
    return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++n + r).toString(36);
  };
}, function (t, e, n) {
  var r = n(182);
  var o = n(18);
  t.exports = !!Object.getOwnPropertySymbols && !o(function () {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
  });
}, function (t, e, n) {
  var r;
  var o;
  var i = n(7);
  var s = n(113);
  var a = i.process;
  var c = a && a.versions;
  var u = c && c.v8;
  if (u) {
    o = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
  } else if (s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/))) {
    o = r[1];
  }
  t.exports = o && +o;
}, function (t, e, n) {
  var r;
  var o = n(20);
  var i = n(292);
  var s = n(184);
  var a = n(116);
  var c = n(185);
  var u = n(108);
  var f = n(111);
  var l = f("IE_PROTO");
  function h() {}
  function p(t) {
    return "<script>" + t + "</script>";
  }
  function d() {
    try {
      r = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t;
    var e;
    d = r ? function (t) {
      t.write(p(""));
      t.close();
      var e = t.parentWindow.Object;
      t = null;
      return e;
    }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);
    for (var n = s.length; n--;) {
      delete d.prototype[s[n]];
    }
    return d();
  }
  a[l] = true;
  t.exports = Object.create || function (t, e) {
    var n;
    if (t !== null) {
      h.prototype = o(t);
      n = new h();
      h.prototype = null;
      n[l] = t;
    } else {
      n = d();
    }
    if (e === undefined) {
      return n;
    } else {
      return i(n, e);
    }
  };
}, function (t, e) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function (t, e, n) {
  var r = n(44);
  t.exports = r("document", "documentElement");
}, function (t, e, n) {
  var r = n(115);
  var o = n(62);
  function i(t) {
    return function (e, n) {
      var i;
      var s;
      var a = String(o(e));
      var c = r(n);
      var u = a.length;
      if (c < 0 || c >= u) {
        if (t) {
          return "";
        } else {
          return undefined;
        }
      } else if ((i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343) {
        if (t) {
          return a.charAt(c);
        } else {
          return i;
        }
      } else if (t) {
        return a.slice(c, c + 2);
      } else {
        return s - 56320 + (i - 55296 << 10) + 65536;
      }
    };
  }
  t.exports = {
    codeAt: i(false),
    charAt: i(true)
  };
}, function (t, e, n) {
  var r = n(112);
  var o = Function.toString;
  if (typeof r.inspectSource != "function") {
    r.inspectSource = function (t) {
      return o.call(t);
    };
  }
  t.exports = r.inspectSource;
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return r;
  });
  class r {
    constructor() {
      this._events = new Map();
    }
    listenTask(t, e) {
      if (typeof e != "function") {
        return;
      }
      if (!this._events.has(t)) {
        this._events.set(t, new Set());
      }
      this._events.get(t).add(e);
    }
    execTask(t, e, ...n) {
      if (this._events.has(t)) {
        const r = this._events.get(t);
        for (const t of r) {
          t(e, ...n);
        }
      }
    }
  }
}, function (t, e) {
  (function () {
    t.exports = function () {
      function t() {}
      t.prototype.hasFeature = function (t, e) {
        return true;
      };
      t.prototype.createDocumentType = function (t, e, n) {
        throw new Error("This DOM method is not implemented.");
      };
      t.prototype.createDocument = function (t, e, n) {
        throw new Error("This DOM method is not implemented.");
      };
      t.prototype.createHTMLDocument = function (t) {
        throw new Error("This DOM method is not implemented.");
      };
      t.prototype.getFeature = function (t, e) {
        throw new Error("This DOM method is not implemented.");
      };
      return t;
    }();
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i;
    var s;
    var a;
    var c;
    var u = {}.hasOwnProperty;
    c = n(24).isPlainObject;
    o = n(189);
    r = n(307);
    i = n(12);
    e = n(4);
    a = n(193);
    s = n(135);
    t.exports = function (t) {
      function n(t) {
        n.__super__.constructor.call(this, null);
        this.name = "#document";
        this.type = e.Document;
        this.documentURI = null;
        this.domConfig = new r();
        t ||= {};
        t.writer ||= new s();
        this.options = t;
        this.stringify = new a(t);
      }
      (function (t, e) {
        for (var n in e) {
          if (u.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      Object.defineProperty(n.prototype, "implementation", {
        value: new o()
      });
      Object.defineProperty(n.prototype, "doctype", {
        get: function () {
          var t;
          var n;
          var r;
          var o;
          n = 0;
          r = (o = this.children).length;
          for (; n < r; n++) {
            if ((t = o[n]).type === e.DocType) {
              return t;
            }
          }
          return null;
        }
      });
      Object.defineProperty(n.prototype, "documentElement", {
        get: function () {
          return this.rootObject || null;
        }
      });
      Object.defineProperty(n.prototype, "inputEncoding", {
        get: function () {
          return null;
        }
      });
      Object.defineProperty(n.prototype, "strictErrorChecking", {
        get: function () {
          return false;
        }
      });
      Object.defineProperty(n.prototype, "xmlEncoding", {
        get: function () {
          if (this.children.length !== 0 && this.children[0].type === e.Declaration) {
            return this.children[0].encoding;
          } else {
            return null;
          }
        }
      });
      Object.defineProperty(n.prototype, "xmlStandalone", {
        get: function () {
          return this.children.length !== 0 && this.children[0].type === e.Declaration && this.children[0].standalone === "yes";
        }
      });
      Object.defineProperty(n.prototype, "xmlVersion", {
        get: function () {
          if (this.children.length !== 0 && this.children[0].type === e.Declaration) {
            return this.children[0].version;
          } else {
            return "1.0";
          }
        }
      });
      Object.defineProperty(n.prototype, "URL", {
        get: function () {
          return this.documentURI;
        }
      });
      Object.defineProperty(n.prototype, "origin", {
        get: function () {
          return null;
        }
      });
      Object.defineProperty(n.prototype, "compatMode", {
        get: function () {
          return null;
        }
      });
      Object.defineProperty(n.prototype, "characterSet", {
        get: function () {
          return null;
        }
      });
      Object.defineProperty(n.prototype, "contentType", {
        get: function () {
          return null;
        }
      });
      n.prototype.end = function (t) {
        var e;
        e = {};
        if (t) {
          if (c(t)) {
            e = t;
            t = this.options.writer;
          }
        } else {
          t = this.options.writer;
        }
        return t.document(this, t.filterOptions(e));
      };
      n.prototype.toString = function (t) {
        return this.options.writer.document(this, this.options.writer.filterOptions(t));
      };
      n.prototype.createElement = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createDocumentFragment = function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createTextNode = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createComment = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createCDATASection = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createProcessingInstruction = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createAttribute = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createEntityReference = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementsByTagName = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.importNode = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createElementNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createAttributeNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementsByTagNameNS = function (t, e) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementById = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.adoptNode = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.normalizeDocument = function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.renameNode = function (t, e, n) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.getElementsByClassName = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createEvent = function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createRange = function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createNodeIterator = function (t, e, n) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      n.prototype.createTreeWalker = function (t, e, n) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      return n;
    }(i);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    e = n(4);
    n(12);
    t.exports = function () {
      function t(t, n, r) {
        this.parent = t;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        if (n == null) {
          throw new Error("Missing attribute name. " + this.debugInfo(n));
        }
        this.name = this.stringify.name(n);
        this.value = this.stringify.attValue(r);
        this.type = e.Attribute;
        this.isId = false;
        this.schemaTypeInfo = null;
      }
      Object.defineProperty(t.prototype, "nodeType", {
        get: function () {
          return this.type;
        }
      });
      Object.defineProperty(t.prototype, "ownerElement", {
        get: function () {
          return this.parent;
        }
      });
      Object.defineProperty(t.prototype, "textContent", {
        get: function () {
          return this.value;
        },
        set: function (t) {
          return this.value = t || "";
        }
      });
      Object.defineProperty(t.prototype, "namespaceURI", {
        get: function () {
          return "";
        }
      });
      Object.defineProperty(t.prototype, "prefix", {
        get: function () {
          return "";
        }
      });
      Object.defineProperty(t.prototype, "localName", {
        get: function () {
          return this.name;
        }
      });
      Object.defineProperty(t.prototype, "specified", {
        get: function () {
          return true;
        }
      });
      t.prototype.clone = function () {
        return Object.create(this);
      };
      t.prototype.toString = function (t) {
        return this.options.writer.attribute(this, this.options.writer.filterOptions(t));
      };
      t.prototype.debugInfo = function (t) {
        if ((t = t || this.name) == null) {
          return "parent: <" + this.parent.name + ">";
        } else {
          return "attribute: {" + t + "}, parent: <" + this.parent.name + ">";
        }
      };
      t.prototype.isEqualNode = function (t) {
        return t.namespaceURI === this.namespaceURI && t.prefix === this.prefix && t.localName === this.localName && t.value === this.value;
      };
      return t;
    }();
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o = {}.hasOwnProperty;
    r = n(12);
    e = n(4);
    t.exports = function (t) {
      function n(t) {
        n.__super__.constructor.call(this, t);
        this.type = e.Dummy;
      }
      (function (t, e) {
        for (var n in e) {
          if (o.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.clone = function () {
        return Object.create(this);
      };
      n.prototype.toString = function (t) {
        return "";
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e) {
  (function () {
    function e(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    var n = {}.hasOwnProperty;
    t.exports = function () {
      function t(t) {
        var r;
        var o;
        var i;
        this.assertLegalName = e(this.assertLegalName, this);
        this.assertLegalChar = e(this.assertLegalChar, this);
        t ||= {};
        this.options = t;
        this.options.version ||= "1.0";
        for (r in o = t.stringify || {}) {
          if (n.call(o, r)) {
            i = o[r];
            this[r] = i;
          }
        }
      }
      t.prototype.name = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalName("" + t || "");
        }
      };
      t.prototype.text = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar(this.textEscape("" + t || ""));
        }
      };
      t.prototype.cdata = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          t = (t = "" + t || "").replace("]]>", "]]]]><![CDATA[>");
          return this.assertLegalChar(t);
        }
      };
      t.prototype.comment = function (t) {
        if (this.options.noValidation) {
          return t;
        }
        if ((t = "" + t || "").match(/--/)) {
          throw new Error("Comment text cannot contain double-hypen: " + t);
        }
        return this.assertLegalChar(t);
      };
      t.prototype.raw = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return "" + t || "";
        }
      };
      t.prototype.attValue = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar(this.attEscape(t = "" + t || ""));
        }
      };
      t.prototype.insTarget = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar("" + t || "");
        }
      };
      t.prototype.insValue = function (t) {
        if (this.options.noValidation) {
          return t;
        }
        if ((t = "" + t || "").match(/\?>/)) {
          throw new Error("Invalid processing instruction value: " + t);
        }
        return this.assertLegalChar(t);
      };
      t.prototype.xmlVersion = function (t) {
        if (this.options.noValidation) {
          return t;
        }
        if (!(t = "" + t || "").match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + t);
        }
        return t;
      };
      t.prototype.xmlEncoding = function (t) {
        if (this.options.noValidation) {
          return t;
        }
        if (!(t = "" + t || "").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
          throw new Error("Invalid encoding: " + t);
        }
        return this.assertLegalChar(t);
      };
      t.prototype.xmlStandalone = function (t) {
        if (this.options.noValidation) {
          return t;
        } else if (t) {
          return "yes";
        } else {
          return "no";
        }
      };
      t.prototype.dtdPubID = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar("" + t || "");
        }
      };
      t.prototype.dtdSysID = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar("" + t || "");
        }
      };
      t.prototype.dtdElementValue = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar("" + t || "");
        }
      };
      t.prototype.dtdAttType = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar("" + t || "");
        }
      };
      t.prototype.dtdAttDefault = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar("" + t || "");
        }
      };
      t.prototype.dtdEntityValue = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar("" + t || "");
        }
      };
      t.prototype.dtdNData = function (t) {
        if (this.options.noValidation) {
          return t;
        } else {
          return this.assertLegalChar("" + t || "");
        }
      };
      t.prototype.convertAttKey = "@";
      t.prototype.convertPIKey = "?";
      t.prototype.convertTextKey = "#text";
      t.prototype.convertCDataKey = "#cdata";
      t.prototype.convertCommentKey = "#comment";
      t.prototype.convertRawKey = "#raw";
      t.prototype.assertLegalChar = function (t) {
        var e;
        var n;
        if (this.options.noValidation) {
          return t;
        }
        e = "";
        if (this.options.version === "1.0") {
          e = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
          if (n = t.match(e)) {
            throw new Error("Invalid character in string: " + t + " at index " + n.index);
          }
        } else if (this.options.version === "1.1" && (e = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, n = t.match(e))) {
          throw new Error("Invalid character in string: " + t + " at index " + n.index);
        }
        return t;
      };
      t.prototype.assertLegalName = function (t) {
        var e;
        if (this.options.noValidation) {
          return t;
        }
        this.assertLegalChar(t);
        e = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
        if (!t.match(e)) {
          throw new Error("Invalid character in name");
        }
        return t;
      };
      t.prototype.textEscape = function (t) {
        var e;
        if (this.options.noValidation) {
          return t;
        } else {
          e = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return t.replace(e, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
        }
      };
      t.prototype.attEscape = function (t) {
        var e;
        if (this.options.noValidation) {
          return t;
        } else {
          e = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return t.replace(e, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
        }
      };
      return t;
    }();
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i = {}.hasOwnProperty;
    o = n(24).assign;
    e = n(4);
    n(126);
    n(127);
    n(124);
    n(125);
    n(122);
    n(132);
    n(133);
    n(134);
    n(192);
    n(128);
    n(130);
    n(129);
    n(131);
    r = n(67);
    t.exports = function () {
      function t(t) {
        var e;
        var n;
        var r;
        t ||= {};
        this.options = t;
        for (e in n = t.writer || {}) {
          if (i.call(n, e)) {
            r = n[e];
            this["_" + e] = this[e];
            this[e] = r;
          }
        }
      }
      t.prototype.filterOptions = function (t) {
        var e;
        t ||= {};
        t = o({}, this.options, t);
        (e = {
          writer: this
        }).pretty = t.pretty || false;
        e.allowEmpty = t.allowEmpty || false;
        e.indent = t.indent ?? "  ";
        e.newline = t.newline ?? "\n";
        e.offset = t.offset ?? 0;
        e.dontPrettyTextNodes = t.dontPrettyTextNodes ?? t.dontprettytextnodes ?? 0;
        e.spaceBeforeSlash = t.spaceBeforeSlash ?? t.spacebeforeslash ?? "";
        if (e.spaceBeforeSlash === true) {
          e.spaceBeforeSlash = " ";
        }
        e.suppressPrettyCount = 0;
        e.user = {};
        e.state = r.None;
        return e;
      };
      t.prototype.indent = function (t, e, n) {
        var r;
        if (!e.pretty || e.suppressPrettyCount) {
          return "";
        } else if (e.pretty && (r = (n || 0) + e.offset + 1) > 0) {
          return new Array(r).join(e.indent);
        } else {
          return "";
        }
      };
      t.prototype.endline = function (t, e, n) {
        if (!e.pretty || e.suppressPrettyCount) {
          return "";
        } else {
          return e.newline;
        }
      };
      t.prototype.attribute = function (t, e, n) {
        var r;
        this.openAttribute(t, e, n);
        r = " " + t.name + "=\"" + t.value + "\"";
        this.closeAttribute(t, e, n);
        return r;
      };
      t.prototype.cdata = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n) + "<![CDATA[";
        e.state = r.InsideTag;
        o += t.value;
        e.state = r.CloseTag;
        o += "]]>" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.comment = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n) + "<!-- ";
        e.state = r.InsideTag;
        o += t.value;
        e.state = r.CloseTag;
        o += " -->" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.declaration = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n) + "<?xml";
        e.state = r.InsideTag;
        o += " version=\"" + t.version + "\"";
        if (t.encoding != null) {
          o += " encoding=\"" + t.encoding + "\"";
        }
        if (t.standalone != null) {
          o += " standalone=\"" + t.standalone + "\"";
        }
        e.state = r.CloseTag;
        o += e.spaceBeforeSlash + "?>";
        o += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.docType = function (t, e, n) {
        var o;
        var i;
        var s;
        var a;
        var c;
        n ||= 0;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        a = this.indent(t, e, n);
        a += "<!DOCTYPE " + t.root().name;
        if (t.pubID && t.sysID) {
          a += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
        } else if (t.sysID) {
          a += " SYSTEM \"" + t.sysID + "\"";
        }
        if (t.children.length > 0) {
          a += " [";
          a += this.endline(t, e, n);
          e.state = r.InsideTag;
          i = 0;
          s = (c = t.children).length;
          for (; i < s; i++) {
            o = c[i];
            a += this.writeChildNode(o, e, n + 1);
          }
          e.state = r.CloseTag;
          a += "]";
        }
        e.state = r.CloseTag;
        a += e.spaceBeforeSlash + ">";
        a += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return a;
      };
      t.prototype.element = function (t, n, o) {
        var s;
        var a;
        var c;
        var u;
        var f;
        var l;
        var h;
        var p;
        var d;
        var y;
        var m;
        var g;
        var v;
        var b;
        o ||= 0;
        y = false;
        m = "";
        this.openNode(t, n, o);
        n.state = r.OpenTag;
        m += this.indent(t, n, o) + "<" + t.name;
        for (d in g = t.attribs) {
          if (i.call(g, d)) {
            s = g[d];
            m += this.attribute(s, n, o);
          }
        }
        u = (c = t.children.length) === 0 ? null : t.children[0];
        if (c === 0 || t.children.every(function (t) {
          return (t.type === e.Text || t.type === e.Raw) && t.value === "";
        })) {
          if (n.allowEmpty) {
            m += ">";
            n.state = r.CloseTag;
            m += "</" + t.name + ">" + this.endline(t, n, o);
          } else {
            n.state = r.CloseTag;
            m += n.spaceBeforeSlash + "/>" + this.endline(t, n, o);
          }
        } else if (!n.pretty || c !== 1 || u.type !== e.Text && u.type !== e.Raw || u.value == null) {
          if (n.dontPrettyTextNodes) {
            f = 0;
            h = (v = t.children).length;
            for (; f < h; f++) {
              if (((a = v[f]).type === e.Text || a.type === e.Raw) && a.value != null) {
                n.suppressPrettyCount++;
                y = true;
                break;
              }
            }
          }
          m += ">" + this.endline(t, n, o);
          n.state = r.InsideTag;
          l = 0;
          p = (b = t.children).length;
          for (; l < p; l++) {
            a = b[l];
            m += this.writeChildNode(a, n, o + 1);
          }
          n.state = r.CloseTag;
          m += this.indent(t, n, o) + "</" + t.name + ">";
          if (y) {
            n.suppressPrettyCount--;
          }
          m += this.endline(t, n, o);
          n.state = r.None;
        } else {
          m += ">";
          n.state = r.InsideTag;
          n.suppressPrettyCount++;
          y = true;
          m += this.writeChildNode(u, n, o + 1);
          n.suppressPrettyCount--;
          y = false;
          n.state = r.CloseTag;
          m += "</" + t.name + ">" + this.endline(t, n, o);
        }
        this.closeNode(t, n, o);
        return m;
      };
      t.prototype.writeChildNode = function (t, n, r) {
        switch (t.type) {
          case e.CData:
            return this.cdata(t, n, r);
          case e.Comment:
            return this.comment(t, n, r);
          case e.Element:
            return this.element(t, n, r);
          case e.Raw:
            return this.raw(t, n, r);
          case e.Text:
            return this.text(t, n, r);
          case e.ProcessingInstruction:
            return this.processingInstruction(t, n, r);
          case e.Dummy:
            return "";
          case e.Declaration:
            return this.declaration(t, n, r);
          case e.DocType:
            return this.docType(t, n, r);
          case e.AttributeDeclaration:
            return this.dtdAttList(t, n, r);
          case e.ElementDeclaration:
            return this.dtdElement(t, n, r);
          case e.EntityDeclaration:
            return this.dtdEntity(t, n, r);
          case e.NotationDeclaration:
            return this.dtdNotation(t, n, r);
          default:
            throw new Error("Unknown XML node type: " + t.constructor.name);
        }
      };
      t.prototype.processingInstruction = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n) + "<?";
        e.state = r.InsideTag;
        o += t.target;
        if (t.value) {
          o += " " + t.value;
        }
        e.state = r.CloseTag;
        o += e.spaceBeforeSlash + "?>";
        o += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.raw = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n);
        e.state = r.InsideTag;
        o += t.value;
        e.state = r.CloseTag;
        o += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.text = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n);
        e.state = r.InsideTag;
        o += t.value;
        e.state = r.CloseTag;
        o += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.dtdAttList = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n) + "<!ATTLIST";
        e.state = r.InsideTag;
        o += " " + t.elementName + " " + t.attributeName + " " + t.attributeType;
        if (t.defaultValueType !== "#DEFAULT") {
          o += " " + t.defaultValueType;
        }
        if (t.defaultValue) {
          o += " \"" + t.defaultValue + "\"";
        }
        e.state = r.CloseTag;
        o += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.dtdElement = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n) + "<!ELEMENT";
        e.state = r.InsideTag;
        o += " " + t.name + " " + t.value;
        e.state = r.CloseTag;
        o += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.dtdEntity = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n) + "<!ENTITY";
        e.state = r.InsideTag;
        if (t.pe) {
          o += " %";
        }
        o += " " + t.name;
        if (t.value) {
          o += " \"" + t.value + "\"";
        } else {
          if (t.pubID && t.sysID) {
            o += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
          } else if (t.sysID) {
            o += " SYSTEM \"" + t.sysID + "\"";
          }
          if (t.nData) {
            o += " NDATA " + t.nData;
          }
        }
        e.state = r.CloseTag;
        o += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.dtdNotation = function (t, e, n) {
        var o;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        o = this.indent(t, e, n) + "<!NOTATION";
        e.state = r.InsideTag;
        o += " " + t.name;
        if (t.pubID && t.sysID) {
          o += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
        } else if (t.pubID) {
          o += " PUBLIC \"" + t.pubID + "\"";
        } else if (t.sysID) {
          o += " SYSTEM \"" + t.sysID + "\"";
        }
        e.state = r.CloseTag;
        o += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return o;
      };
      t.prototype.openNode = function (t, e, n) {};
      t.prototype.closeNode = function (t, e, n) {};
      t.prototype.openAttribute = function (t, e, n) {};
      t.prototype.closeAttribute = function (t, e, n) {};
      return t;
    }();
  }).call(this);
}, function (t, e) {
  var n = {}.toString;
  t.exports = Array.isArray || function (t) {
    return n.call(t) == "[object Array]";
  };
}, function (t, e, n) {
  "use strict";

  (function (e, r) {
    var o = n(70);
    t.exports = b;
    var i;
    var s = n(195);
    b.ReadableState = v;
    n(69).EventEmitter;
    function a(t, e) {
      return t.listeners(e).length;
    }
    var c = n(197);
    var u = n(137).Buffer;
    var f = e.Uint8Array || function () {};
    var l = Object.create(n(52));
    l.inherits = n(46);
    var h = n(319);
    var p = undefined;
    p = h && h.debuglog ? h.debuglog("stream") : function () {};
    var d;
    var y = n(320);
    var m = n(198);
    l.inherits(b, c);
    var g = ["error", "close", "destroy", "pause", "resume"];
    function v(t, e) {
      t = t || {};
      var r = e instanceof (i = i || n(34));
      this.objectMode = !!t.objectMode;
      if (r) {
        this.objectMode = this.objectMode || !!t.readableObjectMode;
      }
      var o = t.highWaterMark;
      var s = t.readableHighWaterMark;
      var a = this.objectMode ? 16 : 16384;
      this.highWaterMark = o || o === 0 ? o : r && (s || s === 0) ? s : a;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new y();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.destroyed = false;
      this.defaultEncoding = t.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (t.encoding) {
        d ||= n(139).StringDecoder;
        this.decoder = new d(t.encoding);
        this.encoding = t.encoding;
      }
    }
    function b(t) {
      i = i || n(34);
      if (!(this instanceof b)) {
        return new b(t);
      }
      this._readableState = new v(t, this);
      this.readable = true;
      if (t) {
        if (typeof t.read == "function") {
          this._read = t.read;
        }
        if (typeof t.destroy == "function") {
          this._destroy = t.destroy;
        }
      }
      c.call(this);
    }
    function w(t, e, n, r, o) {
      var i;
      var s = t._readableState;
      if (e === null) {
        s.reading = false;
        (function (t, e) {
          if (e.ended) {
            return;
          }
          if (e.decoder) {
            var n = e.decoder.end();
            if (n && n.length) {
              e.buffer.push(n);
              e.length += e.objectMode ? 1 : n.length;
            }
          }
          e.ended = true;
          T(t);
        })(t, s);
      } else {
        if (!o) {
          i = function (t, e) {
            var n;
            r = e;
            if (!u.isBuffer(r) && !(r instanceof f) && typeof e != "string" && e !== undefined && !t.objectMode) {
              n = new TypeError("Invalid non-string/buffer chunk");
            }
            var r;
            return n;
          }(s, e);
        }
        if (i) {
          t.emit("error", i);
        } else if (s.objectMode || e && e.length > 0) {
          if (typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== u.prototype) {
            e = function (t) {
              return u.from(t);
            }(e);
          }
          if (r) {
            if (s.endEmitted) {
              t.emit("error", new Error("stream.unshift() after end event"));
            } else {
              _(t, s, e, true);
            }
          } else if (s.ended) {
            t.emit("error", new Error("stream.push() after EOF"));
          } else {
            s.reading = false;
            if (s.decoder && !n) {
              e = s.decoder.write(e);
              if (s.objectMode || e.length !== 0) {
                _(t, s, e, false);
              } else {
                O(t, s);
              }
            } else {
              _(t, s, e, false);
            }
          }
        } else if (!r) {
          s.reading = false;
        }
      }
      return function (t) {
        return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
      }(s);
    }
    function _(t, e, n, r) {
      if (e.flowing && e.length === 0 && !e.sync) {
        t.emit("data", n);
        t.read(0);
      } else {
        e.length += e.objectMode ? 1 : n.length;
        if (r) {
          e.buffer.unshift(n);
        } else {
          e.buffer.push(n);
        }
        if (e.needReadable) {
          T(t);
        }
      }
      O(t, e);
    }
    Object.defineProperty(b.prototype, "destroyed", {
      get: function () {
        return this._readableState !== undefined && this._readableState.destroyed;
      },
      set: function (t) {
        if (this._readableState) {
          this._readableState.destroyed = t;
        }
      }
    });
    b.prototype.destroy = m.destroy;
    b.prototype._undestroy = m.undestroy;
    b.prototype._destroy = function (t, e) {
      this.push(null);
      e(t);
    };
    b.prototype.push = function (t, e) {
      var n;
      var r = this._readableState;
      if (r.objectMode) {
        n = true;
      } else if (typeof t == "string") {
        if ((e = e || r.defaultEncoding) !== r.encoding) {
          t = u.from(t, e);
          e = "";
        }
        n = true;
      }
      return w(this, t, e, false, n);
    };
    b.prototype.unshift = function (t) {
      return w(this, t, null, true, false);
    };
    b.prototype.isPaused = function () {
      return this._readableState.flowing === false;
    };
    b.prototype.setEncoding = function (t) {
      d ||= n(139).StringDecoder;
      this._readableState.decoder = new d(t);
      this._readableState.encoding = t;
      return this;
    };
    function x(t, e) {
      if (t <= 0 || e.length === 0 && e.ended) {
        return 0;
      } else if (e.objectMode) {
        return 1;
      } else if (t != t) {
        if (e.flowing && e.length) {
          return e.buffer.head.data.length;
        } else {
          return e.length;
        }
      } else {
        if (t > e.highWaterMark) {
          e.highWaterMark = function (t) {
            if (t >= 8388608) {
              t = 8388608;
            } else {
              t--;
              t |= t >>> 1;
              t |= t >>> 2;
              t |= t >>> 4;
              t |= t >>> 8;
              t |= t >>> 16;
              t++;
            }
            return t;
          }(t);
        }
        if (t <= e.length) {
          return t;
        } else if (e.ended) {
          return e.length;
        } else {
          e.needReadable = true;
          return 0;
        }
      }
    }
    function T(t) {
      var e = t._readableState;
      e.needReadable = false;
      if (!e.emittedReadable) {
        p("emitReadable", e.flowing);
        e.emittedReadable = true;
        if (e.sync) {
          o.nextTick(E, t);
        } else {
          E(t);
        }
      }
    }
    function E(t) {
      p("emit readable");
      t.emit("readable");
      N(t);
    }
    function O(t, e) {
      if (!e.readingMore) {
        e.readingMore = true;
        o.nextTick(S, t, e);
      }
    }
    function S(t, e) {
      for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p("maybeReadMore read 0"), t.read(0), n !== e.length);) {
        n = e.length;
      }
      e.readingMore = false;
    }
    function I(t) {
      p("readable nexttick read 0");
      t.read(0);
    }
    function A(t, e) {
      if (!e.reading) {
        p("resume read 0");
        t.read(0);
      }
      e.resumeScheduled = false;
      e.awaitDrain = 0;
      t.emit("resume");
      N(t);
      if (e.flowing && !e.reading) {
        t.read(0);
      }
    }
    function N(t) {
      var e = t._readableState;
      for (p("flow", e.flowing); e.flowing && t.read() !== null;);
    }
    function j(t, e) {
      if (e.length === 0) {
        return null;
      } else {
        if (e.objectMode) {
          n = e.buffer.shift();
        } else if (!t || t >= e.length) {
          n = e.decoder ? e.buffer.join("") : e.buffer.length === 1 ? e.buffer.head.data : e.buffer.concat(e.length);
          e.buffer.clear();
        } else {
          n = function (t, e, n) {
            var r;
            if (t < e.head.data.length) {
              r = e.head.data.slice(0, t);
              e.head.data = e.head.data.slice(t);
            } else {
              r = t === e.head.data.length ? e.shift() : n ? function (t, e) {
                var n = e.head;
                var r = 1;
                var o = n.data;
                t -= o.length;
                while (n = n.next) {
                  var i = n.data;
                  var s = t > i.length ? i.length : t;
                  if (s === i.length) {
                    o += i;
                  } else {
                    o += i.slice(0, t);
                  }
                  if ((t -= s) === 0) {
                    if (s === i.length) {
                      ++r;
                      if (n.next) {
                        e.head = n.next;
                      } else {
                        e.head = e.tail = null;
                      }
                    } else {
                      e.head = n;
                      n.data = i.slice(s);
                    }
                    break;
                  }
                  ++r;
                }
                e.length -= r;
                return o;
              }(t, e) : function (t, e) {
                var n = u.allocUnsafe(t);
                var r = e.head;
                var o = 1;
                r.data.copy(n);
                t -= r.data.length;
                while (r = r.next) {
                  var i = r.data;
                  var s = t > i.length ? i.length : t;
                  i.copy(n, n.length - t, 0, s);
                  if ((t -= s) === 0) {
                    if (s === i.length) {
                      ++o;
                      if (r.next) {
                        e.head = r.next;
                      } else {
                        e.head = e.tail = null;
                      }
                    } else {
                      e.head = r;
                      r.data = i.slice(s);
                    }
                    break;
                  }
                  ++o;
                }
                e.length -= o;
                return n;
              }(t, e);
            }
            return r;
          }(t, e.buffer, e.decoder);
        }
        return n;
      }
      var n;
    }
    function D(t) {
      var e = t._readableState;
      if (e.length > 0) {
        throw new Error("\"endReadable()\" called on non-empty stream");
      }
      if (!e.endEmitted) {
        e.ended = true;
        o.nextTick(C, e, t);
      }
    }
    function C(t, e) {
      if (!t.endEmitted && t.length === 0) {
        t.endEmitted = true;
        e.readable = false;
        e.emit("end");
      }
    }
    function P(t, e) {
      for (var n = 0, r = t.length; n < r; n++) {
        if (t[n] === e) {
          return n;
        }
      }
      return -1;
    }
    b.prototype.read = function (t) {
      p("read", t);
      t = parseInt(t, 10);
      var e = this._readableState;
      var n = t;
      if (t !== 0) {
        e.emittedReadable = false;
      }
      if (t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)) {
        p("read: emitReadable", e.length, e.ended);
        if (e.length === 0 && e.ended) {
          D(this);
        } else {
          T(this);
        }
        return null;
      }
      if ((t = x(t, e)) === 0 && e.ended) {
        if (e.length === 0) {
          D(this);
        }
        return null;
      }
      var r;
      var o = e.needReadable;
      p("need readable", o);
      if (e.length === 0 || e.length - t < e.highWaterMark) {
        p("length less than watermark", o = true);
      }
      if (e.ended || e.reading) {
        p("reading or ended", o = false);
      } else if (o) {
        p("do read");
        e.reading = true;
        e.sync = true;
        if (e.length === 0) {
          e.needReadable = true;
        }
        this._read(e.highWaterMark);
        e.sync = false;
        if (!e.reading) {
          t = x(n, e);
        }
      }
      if ((r = t > 0 ? j(t, e) : null) === null) {
        e.needReadable = true;
        t = 0;
      } else {
        e.length -= t;
      }
      if (e.length === 0) {
        if (!e.ended) {
          e.needReadable = true;
        }
        if (n !== t && e.ended) {
          D(this);
        }
      }
      if (r !== null) {
        this.emit("data", r);
      }
      return r;
    };
    b.prototype._read = function (t) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    b.prototype.pipe = function (t, e) {
      var n = this;
      var i = this._readableState;
      switch (i.pipesCount) {
        case 0:
          i.pipes = t;
          break;
        case 1:
          i.pipes = [i.pipes, t];
          break;
        default:
          i.pipes.push(t);
      }
      i.pipesCount += 1;
      p("pipe count=%d opts=%j", i.pipesCount, e);
      var c = (!e || e.end !== false) && t !== r.stdout && t !== r.stderr ? f : b;
      function u(e, r) {
        p("onunpipe");
        if (e === n && r && r.hasUnpiped === false) {
          r.hasUnpiped = true;
          p("cleanup");
          t.removeListener("close", g);
          t.removeListener("finish", v);
          t.removeListener("drain", l);
          t.removeListener("error", m);
          t.removeListener("unpipe", u);
          n.removeListener("end", f);
          n.removeListener("end", b);
          n.removeListener("data", y);
          h = true;
          if (!!i.awaitDrain && (!t._writableState || !!t._writableState.needDrain)) {
            l();
          }
        }
      }
      function f() {
        p("onend");
        t.end();
      }
      if (i.endEmitted) {
        o.nextTick(c);
      } else {
        n.once("end", c);
      }
      t.on("unpipe", u);
      var l = function (t) {
        return function () {
          var e = t._readableState;
          p("pipeOnDrain", e.awaitDrain);
          if (e.awaitDrain) {
            e.awaitDrain--;
          }
          if (e.awaitDrain === 0 && a(t, "data")) {
            e.flowing = true;
            N(t);
          }
        };
      }(n);
      t.on("drain", l);
      var h = false;
      var d = false;
      function y(e) {
        p("ondata");
        d = false;
        if (t.write(e) === false && !d) {
          if ((i.pipesCount === 1 && i.pipes === t || i.pipesCount > 1 && P(i.pipes, t) !== -1) && !h) {
            p("false write response, pause", n._readableState.awaitDrain);
            n._readableState.awaitDrain++;
            d = true;
          }
          n.pause();
        }
      }
      function m(e) {
        p("onerror", e);
        b();
        t.removeListener("error", m);
        if (a(t, "error") === 0) {
          t.emit("error", e);
        }
      }
      function g() {
        t.removeListener("finish", v);
        b();
      }
      function v() {
        p("onfinish");
        t.removeListener("close", g);
        b();
      }
      function b() {
        p("unpipe");
        n.unpipe(t);
      }
      n.on("data", y);
      (function (t, e, n) {
        if (typeof t.prependListener == "function") {
          return t.prependListener(e, n);
        }
        if (t._events && t._events[e]) {
          if (s(t._events[e])) {
            t._events[e].unshift(n);
          } else {
            t._events[e] = [n, t._events[e]];
          }
        } else {
          t.on(e, n);
        }
      })(t, "error", m);
      t.once("close", g);
      t.once("finish", v);
      t.emit("pipe", n);
      if (!i.flowing) {
        p("pipe resume");
        n.resume();
      }
      return t;
    };
    b.prototype.unpipe = function (t) {
      var e = this._readableState;
      var n = {
        hasUnpiped: false
      };
      if (e.pipesCount === 0) {
        return this;
      }
      if (e.pipesCount === 1) {
        if (!t || t === e.pipes) {
          t ||= e.pipes;
          e.pipes = null;
          e.pipesCount = 0;
          e.flowing = false;
          if (t) {
            t.emit("unpipe", this, n);
          }
        }
        return this;
      }
      if (!t) {
        var r = e.pipes;
        var o = e.pipesCount;
        e.pipes = null;
        e.pipesCount = 0;
        e.flowing = false;
        for (var i = 0; i < o; i++) {
          r[i].emit("unpipe", this, n);
        }
        return this;
      }
      var s = P(e.pipes, t);
      if (s !== -1) {
        e.pipes.splice(s, 1);
        e.pipesCount -= 1;
        if (e.pipesCount === 1) {
          e.pipes = e.pipes[0];
        }
        t.emit("unpipe", this, n);
      }
      return this;
    };
    b.prototype.on = function (t, e) {
      var n = c.prototype.on.call(this, t, e);
      if (t === "data") {
        if (this._readableState.flowing !== false) {
          this.resume();
        }
      } else if (t === "readable") {
        var r = this._readableState;
        if (!r.endEmitted && !r.readableListening) {
          r.readableListening = r.needReadable = true;
          r.emittedReadable = false;
          if (r.reading) {
            if (r.length) {
              T(this);
            }
          } else {
            o.nextTick(I, this);
          }
        }
      }
      return n;
    };
    b.prototype.addListener = b.prototype.on;
    b.prototype.resume = function () {
      var t = this._readableState;
      if (!t.flowing) {
        p("resume");
        t.flowing = true;
        (function (t, e) {
          if (!e.resumeScheduled) {
            e.resumeScheduled = true;
            o.nextTick(A, t, e);
          }
        })(this, t);
      }
      return this;
    };
    b.prototype.pause = function () {
      p("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        p("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    b.prototype.wrap = function (t) {
      var e = this;
      var n = this._readableState;
      var r = false;
      t.on("end", function () {
        p("wrapped end");
        if (n.decoder && !n.ended) {
          var t = n.decoder.end();
          if (t && t.length) {
            e.push(t);
          }
        }
        e.push(null);
      });
      t.on("data", function (o) {
        if (!(p("wrapped data"), n.decoder && (o = n.decoder.write(o)), n.objectMode && o == null)) {
          if (n.objectMode || o && o.length) {
            if (!e.push(o)) {
              r = true;
              t.pause();
            }
          }
        }
      });
      for (var o in t) {
        if (this[o] === undefined && typeof t[o] == "function") {
          this[o] = function (e) {
            return function () {
              return t[e].apply(t, arguments);
            };
          }(o);
        }
      }
      for (var i = 0; i < g.length; i++) {
        t.on(g[i], this.emit.bind(this, g[i]));
      }
      this._read = function (e) {
        p("wrapped _read", e);
        if (r) {
          r = false;
          t.resume();
        }
      };
      return this;
    };
    Object.defineProperty(b.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._readableState.highWaterMark;
      }
    });
    b._fromList = j;
  }).call(this, n(14), n(51));
}, function (t, e, n) {
  t.exports = n(69).EventEmitter;
}, function (t, e, n) {
  "use strict";

  var r = n(70);
  function o(t, e) {
    t.emit("error", e);
  }
  t.exports = {
    destroy: function (t, e) {
      var n = this;
      var i = this._readableState && this._readableState.destroyed;
      var s = this._writableState && this._writableState.destroyed;
      if (i || s) {
        if (e) {
          e(t);
        } else if (!!t && (!this._writableState || !this._writableState.errorEmitted)) {
          r.nextTick(o, this, t);
        }
        return this;
      } else {
        if (this._readableState) {
          this._readableState.destroyed = true;
        }
        if (this._writableState) {
          this._writableState.destroyed = true;
        }
        this._destroy(t || null, function (t) {
          if (!e && t) {
            r.nextTick(o, n, t);
            if (n._writableState) {
              n._writableState.errorEmitted = true;
            }
          } else if (e) {
            e(t);
          }
        });
        return this;
      }
    },
    undestroy: function () {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
  };
}, function (t, e, n) {
  (function (t) {
    var r = t !== undefined && t || typeof self != "undefined" && self || window;
    var o = Function.prototype.apply;
    function i(t, e) {
      this._id = t;
      this._clearFn = e;
    }
    e.setTimeout = function () {
      return new i(o.call(setTimeout, r, arguments), clearTimeout);
    };
    e.setInterval = function () {
      return new i(o.call(setInterval, r, arguments), clearInterval);
    };
    e.clearTimeout = e.clearInterval = function (t) {
      if (t) {
        t.close();
      }
    };
    i.prototype.unref = i.prototype.ref = function () {};
    i.prototype.close = function () {
      this._clearFn.call(r, this._id);
    };
    e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId);
      t._idleTimeout = e;
    };
    e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId);
      t._idleTimeout = -1;
    };
    e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      if (e >= 0) {
        t._idleTimeoutId = setTimeout(function () {
          if (t._onTimeout) {
            t._onTimeout();
          }
        }, e);
      }
    };
    n(322);
    e.setImmediate = typeof self != "undefined" && self.setImmediate || t !== undefined && t.setImmediate || this && this.setImmediate;
    e.clearImmediate = typeof self != "undefined" && self.clearImmediate || t !== undefined && t.clearImmediate || this && this.clearImmediate;
  }).call(this, n(14));
}, function (t, e, n) {
  "use strict";

  t.exports = s;
  var r = n(34);
  var o = Object.create(n(52));
  function i(t, e) {
    var n = this._transformState;
    n.transforming = false;
    var r = n.writecb;
    if (!r) {
      return this.emit("error", new Error("write callback called multiple times"));
    }
    n.writechunk = null;
    n.writecb = null;
    if (e != null) {
      this.push(e);
    }
    r(t);
    var o = this._readableState;
    o.reading = false;
    if (o.needReadable || o.length < o.highWaterMark) {
      this._read(o.highWaterMark);
    }
  }
  function s(t) {
    if (!(this instanceof s)) {
      return new s(t);
    }
    r.call(this, t);
    this._transformState = {
      afterTransform: i.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (t) {
      if (typeof t.transform == "function") {
        this._transform = t.transform;
      }
      if (typeof t.flush == "function") {
        this._flush = t.flush;
      }
    }
    this.on("prefinish", a);
  }
  function a() {
    var t = this;
    if (typeof this._flush == "function") {
      this._flush(function (e, n) {
        c(t, e, n);
      });
    } else {
      c(this, null, null);
    }
  }
  function c(t, e, n) {
    if (e) {
      return t.emit("error", e);
    }
    if (n != null) {
      t.push(n);
    }
    if (t._writableState.length) {
      throw new Error("Calling transform done when ws.length != 0");
    }
    if (t._transformState.transforming) {
      throw new Error("Calling transform done when still transforming");
    }
    return t.push(null);
  }
  o.inherits = n(46);
  o.inherits(s, r);
  s.prototype.push = function (t, e) {
    this._transformState.needTransform = false;
    return r.prototype.push.call(this, t, e);
  };
  s.prototype._transform = function (t, e, n) {
    throw new Error("_transform() is not implemented");
  };
  s.prototype._write = function (t, e, n) {
    var r = this._transformState;
    r.writecb = n;
    r.writechunk = t;
    r.writeencoding = e;
    if (!r.transforming) {
      var o = this._readableState;
      if (r.needTransform || o.needReadable || o.length < o.highWaterMark) {
        this._read(o.highWaterMark);
      }
    }
  };
  s.prototype._read = function (t) {
    var e = this._transformState;
    if (e.writechunk !== null && e.writecb && !e.transforming) {
      e.transforming = true;
      this._transform(e.writechunk, e.writeencoding, e.afterTransform);
    } else {
      e.needTransform = true;
    }
  };
  s.prototype._destroy = function (t, e) {
    var n = this;
    r.prototype._destroy.call(this, t, function (t) {
      e(t);
      n.emit("close");
    });
  };
}, function (t, e) {
  (function () {
    "use strict";

    var t;
    t = new RegExp(/(?!xmlns)^.*:/);
    e.normalize = function (t) {
      return t.toLowerCase();
    };
    e.firstCharLowerCase = function (t) {
      return t.charAt(0).toLowerCase() + t.slice(1);
    };
    e.stripPrefix = function (e) {
      return e.replace(t, "");
    };
    e.parseNumbers = function (t) {
      if (!isNaN(t)) {
        t = t % 1 == 0 ? parseInt(t, 10) : parseFloat(t);
      }
      return t;
    };
    e.parseBooleans = function (t) {
      if (/^(?:true|false)$/i.test(t)) {
        t = t.toLowerCase() === "true";
      }
      return t;
    };
  }).call(this);
}, function (t, e, n) {
  "use strict";

  var r = n(28);
  var o = n(110);
  var i = n(140);
  var s = n(183);
  var a = n(19);
  var c = n(60);
  var u = n(71);
  function f(t, e) {
    var n = this;
    if (!(n instanceof f)) {
      return new f(t, e);
    }
    if (i) {
      n = i(new Error(undefined), o(n));
    }
    if (e !== undefined) {
      a(n, "message", String(e));
    }
    var r = [];
    u(t, r.push, {
      that: r
    });
    a(n, "errors", r);
    return n;
  }
  f.prototype = s(Error.prototype, {
    constructor: c(5, f),
    message: c(5, ""),
    name: c(5, "AggregateError")
  });
  r({
    global: true
  }, {
    AggregateError: f
  });
}, function (t, e, n) {
  var r = n(7);
  t.exports = r.Promise;
}, function (t, e, n) {
  var r;
  var o;
  var i;
  var s = n(7);
  var a = n(18);
  var c = n(109);
  var u = n(185);
  var f = n(108);
  var l = n(205);
  var h = n(141);
  var p = s.location;
  var d = s.setImmediate;
  var y = s.clearImmediate;
  var m = s.process;
  var g = s.MessageChannel;
  var v = s.Dispatch;
  var b = 0;
  var w = {};
  function _(t) {
    if (w.hasOwnProperty(t)) {
      var e = w[t];
      delete w[t];
      e();
    }
  }
  function x(t) {
    return function () {
      _(t);
    };
  }
  function T(t) {
    _(t.data);
  }
  function E(t) {
    s.postMessage(t + "", p.protocol + "//" + p.host);
  }
  if (!d || !y) {
    d = function (t) {
      var e = [];
      for (var n = 1; arguments.length > n;) {
        e.push(arguments[n++]);
      }
      w[++b] = function () {
        (typeof t == "function" ? t : Function(t)).apply(undefined, e);
      };
      r(b);
      return b;
    };
    y = function (t) {
      delete w[t];
    };
    if (h) {
      r = function (t) {
        m.nextTick(x(t));
      };
    } else if (v && v.now) {
      r = function (t) {
        v.now(x(t));
      };
    } else if (g && !l) {
      i = (o = new g()).port2;
      o.port1.onmessage = T;
      r = c(i.postMessage, i, 1);
    } else if (s.addEventListener && typeof postMessage == "function" && !s.importScripts && p && p.protocol !== "file:" && !a(E)) {
      r = E;
      s.addEventListener("message", T, false);
    } else {
      r = "onreadystatechange" in f("script") ? function (t) {
        u.appendChild(f("script")).onreadystatechange = function () {
          u.removeChild(this);
          _(t);
        };
      } : function (t) {
        setTimeout(x(t), 0);
      };
    }
  }
  t.exports = {
    set: d,
    clear: y
  };
}, function (t, e, n) {
  var r = n(113);
  t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r);
}, function (t, e, n) {
  var r = n(20);
  var o = n(29);
  var i = n(53);
  t.exports = function (t, e) {
    r(t);
    if (o(e) && e.constructor === t) {
      return e;
    }
    var n = i.f(t);
    (0, n.resolve)(e);
    return n.promise;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(28);
  var o = n(33);
  var i = n(53);
  var s = n(73);
  var a = n(71);
  r({
    target: "Promise",
    stat: true
  }, {
    allSettled: function (t) {
      var e = this;
      var n = i.f(e);
      var r = n.resolve;
      var c = n.reject;
      var u = s(function () {
        var n = o(e.resolve);
        var i = [];
        var s = 0;
        var c = 1;
        a(t, function (t) {
          var o = s++;
          var a = false;
          i.push(undefined);
          c++;
          n.call(e, t).then(function (t) {
            if (!a) {
              a = true;
              i[o] = {
                status: "fulfilled",
                value: t
              };
              if (! --c) {
                r(i);
              }
            }
          }, function (t) {
            if (!a) {
              a = true;
              i[o] = {
                status: "rejected",
                reason: t
              };
              if (! --c) {
                r(i);
              }
            }
          });
        });
        if (! --c) {
          r(i);
        }
      });
      if (u.error) {
        c(u.value);
      }
      return n.promise;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(28);
  var o = n(33);
  var i = n(44);
  var s = n(53);
  var a = n(73);
  var c = n(71);
  r({
    target: "Promise",
    stat: true
  }, {
    any: function (t) {
      var e = this;
      var n = s.f(e);
      var r = n.resolve;
      var u = n.reject;
      var f = a(function () {
        var n = o(e.resolve);
        var s = [];
        var a = 0;
        var f = 1;
        var l = false;
        c(t, function (t) {
          var o = a++;
          var c = false;
          s.push(undefined);
          f++;
          n.call(e, t).then(function (t) {
            if (!c && !l) {
              l = true;
              r(t);
            }
          }, function (t) {
            if (!c && !l) {
              c = true;
              s[o] = t;
              if (! --f) {
                u(new (i("AggregateError"))(s, "No one promise resolved"));
              }
            }
          });
        });
        if (! --f) {
          u(new (i("AggregateError"))(s, "No one promise resolved"));
        }
      });
      if (f.error) {
        u(f.value);
      }
      return n.promise;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(28);
  var o = n(177);
  var i = n(110);
  var s = n(140);
  var a = n(117);
  var c = n(19);
  var u = n(72);
  var f = n(9);
  var l = n(43);
  var h = n(45);
  var p = n(178);
  var d = p.IteratorPrototype;
  var y = p.BUGGY_SAFARI_ITERATORS;
  var m = f("iterator");
  function g() {
    return this;
  }
  t.exports = function (t, e, n, f, p, v, b) {
    o(n, e, f);
    var w;
    var _;
    var x;
    function T(t) {
      if (t === p && A) {
        return A;
      }
      if (!y && t in S) {
        return S[t];
      }
      switch (t) {
        case "keys":
        case "values":
        case "entries":
          return function () {
            return new n(this, t);
          };
      }
      return function () {
        return new n(this);
      };
    }
    var E = e + " Iterator";
    var O = false;
    var S = t.prototype;
    var I = S[m] || S["@@iterator"] || p && S[p];
    var A = !y && I || T(p);
    var N = e == "Array" && S.entries || I;
    if (N) {
      w = i(N.call(new t()));
      if (d !== Object.prototype && w.next) {
        if (!l && i(w) !== d) {
          if (s) {
            s(w, d);
          } else if (typeof w[m] != "function") {
            c(w, m, g);
          }
        }
        a(w, E, true, true);
        if (l) {
          h[E] = g;
        }
      }
    }
    if (p == "values" && I && I.name !== "values") {
      O = true;
      A = function () {
        return I.call(this);
      };
    }
    if ((!l || !!b) && S[m] !== A) {
      c(S, m, A);
    }
    h[e] = A;
    if (p) {
      _ = {
        values: T("values"),
        keys: v ? A : T("keys"),
        entries: T("entries")
      };
      if (b) {
        for (x in _) {
          if (y || O || !(x in S)) {
            u(S, x, _[x]);
          }
        }
      } else {
        r({
          target: e,
          proto: true,
          forced: y || O
        }, _);
      }
    }
    return _;
  };
}, function (t, e, n) {
  (function (e) {
    var n = typeof e == "object" && e && e.Object === Object && e;
    t.exports = n;
  }).call(this, n(14));
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e) {
    return function () {
      for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
        n[r] = arguments[r];
      }
      return t.apply(e, n);
    };
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  function o(t) {
    return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  t.exports = function (t, e, n) {
    if (!e) {
      return t;
    }
    var i;
    if (n) {
      i = n(e);
    } else if (r.isURLSearchParams(e)) {
      i = e.toString();
    } else {
      var s = [];
      r.forEach(e, function (t, e) {
        if (t != null) {
          if (r.isArray(t)) {
            e += "[]";
          } else {
            t = [t];
          }
          r.forEach(t, function (t) {
            if (r.isDate(t)) {
              t = t.toISOString();
            } else if (r.isObject(t)) {
              t = JSON.stringify(t);
            }
            s.push(o(e) + "=" + o(t));
          });
        }
      });
      i = s.join("&");
    }
    if (i) {
      var a = t.indexOf("#");
      if (a !== -1) {
        t = t.slice(0, a);
      }
      t += (t.indexOf("?") === -1 ? "?" : "&") + i;
    }
    return t;
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    return !!t && !!t.__CANCEL__;
  };
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var r = n(10);
    var o = n(380);
    var i = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function s(t, e) {
      if (!r.isUndefined(t) && r.isUndefined(t["Content-Type"])) {
        t["Content-Type"] = e;
      }
    }
    var a;
    var c = {
      adapter: ((typeof XMLHttpRequest != "undefined" || e !== undefined && Object.prototype.toString.call(e) === "[object process]") && (a = n(215)), a),
      transformRequest: [function (t, e) {
        o(e, "Accept");
        o(e, "Content-Type");
        if (r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t)) {
          return t;
        } else if (r.isArrayBufferView(t)) {
          return t.buffer;
        } else if (r.isURLSearchParams(t)) {
          s(e, "application/x-www-form-urlencoded;charset=utf-8");
          return t.toString();
        } else if (r.isObject(t)) {
          s(e, "application/json;charset=utf-8");
          return JSON.stringify(t);
        } else {
          return t;
        }
      }],
      transformResponse: [function (t) {
        if (typeof t == "string") {
          try {
            t = JSON.parse(t);
          } catch (t) {}
        }
        return t;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function (t) {
        return t >= 200 && t < 300;
      }
    };
    c.headers = {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    };
    r.forEach(["delete", "get", "head"], function (t) {
      c.headers[t] = {};
    });
    r.forEach(["post", "put", "patch"], function (t) {
      c.headers[t] = r.merge(i);
    });
    t.exports = c;
  }).call(this, n(51));
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  var o = n(381);
  var i = n(212);
  var s = n(383);
  var a = n(386);
  var c = n(387);
  var u = n(216);
  t.exports = function (t) {
    return new Promise(function (e, f) {
      var l = t.data;
      var h = t.headers;
      if (r.isFormData(l)) {
        delete h["Content-Type"];
      }
      var p = new XMLHttpRequest();
      if (t.auth) {
        var d = t.auth.username || "";
        var y = t.auth.password || "";
        h.Authorization = "Basic " + btoa(d + ":" + y);
      }
      var m = s(t.baseURL, t.url);
      p.open(t.method.toUpperCase(), i(m, t.params, t.paramsSerializer), true);
      p.timeout = t.timeout;
      p.onreadystatechange = function () {
        if (p && p.readyState === 4 && (p.status !== 0 || p.responseURL && p.responseURL.indexOf("file:") === 0)) {
          var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null;
          var r = {
            data: t.responseType && t.responseType !== "text" ? p.response : p.responseText,
            status: p.status,
            statusText: p.statusText,
            headers: n,
            config: t,
            request: p
          };
          o(e, f, r);
          p = null;
        }
      };
      p.onabort = function () {
        if (p) {
          f(u("Request aborted", t, "ECONNABORTED", p));
          p = null;
        }
      };
      p.onerror = function () {
        f(u("Network Error", t, null, p));
        p = null;
      };
      p.ontimeout = function () {
        var e = "timeout of " + t.timeout + "ms exceeded";
        if (t.timeoutErrorMessage) {
          e = t.timeoutErrorMessage;
        }
        f(u(e, t, "ECONNABORTED", p));
        p = null;
      };
      if (r.isStandardBrowserEnv()) {
        var g = n(388);
        var v = (t.withCredentials || c(m)) && t.xsrfCookieName ? g.read(t.xsrfCookieName) : undefined;
        if (v) {
          h[t.xsrfHeaderName] = v;
        }
      }
      if ("setRequestHeader" in p) {
        r.forEach(h, function (t, e) {
          if (l === undefined && e.toLowerCase() === "content-type") {
            delete h[e];
          } else {
            p.setRequestHeader(e, t);
          }
        });
      }
      if (!r.isUndefined(t.withCredentials)) {
        p.withCredentials = !!t.withCredentials;
      }
      if (t.responseType) {
        try {
          p.responseType = t.responseType;
        } catch (e) {
          if (t.responseType !== "json") {
            throw e;
          }
        }
      }
      if (typeof t.onDownloadProgress == "function") {
        p.addEventListener("progress", t.onDownloadProgress);
      }
      if (typeof t.onUploadProgress == "function" && p.upload) {
        p.upload.addEventListener("progress", t.onUploadProgress);
      }
      if (t.cancelToken) {
        t.cancelToken.promise.then(function (t) {
          if (p) {
            p.abort();
            f(t);
            p = null;
          }
        });
      }
      if (l === undefined) {
        l = null;
      }
      p.send(l);
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(382);
  t.exports = function (t, e, n, o, i) {
    var s = new Error(t);
    return r(s, e, n, o, i);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  t.exports = function (t, e) {
    e = e || {};
    var n = {};
    var o = ["url", "method", "params", "data"];
    var i = ["headers", "auth", "proxy"];
    var s = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
    r.forEach(o, function (t) {
      if (e[t] !== undefined) {
        n[t] = e[t];
      }
    });
    r.forEach(i, function (o) {
      if (r.isObject(e[o])) {
        n[o] = r.deepMerge(t[o], e[o]);
      } else if (e[o] !== undefined) {
        n[o] = e[o];
      } else if (r.isObject(t[o])) {
        n[o] = r.deepMerge(t[o]);
      } else if (t[o] !== undefined) {
        n[o] = t[o];
      }
    });
    r.forEach(s, function (r) {
      if (e[r] !== undefined) {
        n[r] = e[r];
      } else if (t[r] !== undefined) {
        n[r] = t[r];
      }
    });
    var a = o.concat(i).concat(s);
    var c = Object.keys(e).filter(function (t) {
      return a.indexOf(t) === -1;
    });
    r.forEach(c, function (r) {
      if (e[r] !== undefined) {
        n[r] = e[r];
      } else if (t[r] !== undefined) {
        n[r] = t[r];
      }
    });
    return n;
  };
}, function (t, e, n) {
  "use strict";

  function r(t) {
    this.message = t;
  }
  r.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  };
  r.prototype.__CANCEL__ = true;
  t.exports = r;
}, function (t, e, n) {
  var r = n(75);
  var o = n(397);
  var i = n(398);
  var s = n(399);
  var a = n(400);
  var c = n(401);
  function u(t) {
    var e = this.__data__ = new r(t);
    this.size = e.size;
  }
  u.prototype.clear = o;
  u.prototype.delete = i;
  u.prototype.get = s;
  u.prototype.has = a;
  u.prototype.set = c;
  t.exports = u;
}, function (t, e, n) {
  var r = n(54);
  var o = n(31);
  t.exports = function (t) {
    if (!o(t)) {
      return false;
    }
    var e = r(t);
    return e == "[object Function]" || e == "[object GeneratorFunction]" || e == "[object AsyncFunction]" || e == "[object Proxy]";
  };
}, function (t, e) {
  var n = Function.prototype.toString;
  t.exports = function (t) {
    if (t != null) {
      try {
        return n.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  };
}, function (t, e, n) {
  var r = n(406);
  var o = n(413);
  var i = n(415);
  var s = n(416);
  var a = n(417);
  function c(t) {
    var e = -1;
    var n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  c.prototype.clear = r;
  c.prototype.delete = o;
  c.prototype.get = i;
  c.prototype.has = s;
  c.prototype.set = a;
  t.exports = c;
}, function (t, e, n) {
  var r = n(224);
  var o = n(142);
  var i = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n) {
    var s = t[e];
    if (!i.call(t, e) || !o(s, n) || n === undefined && !(e in t)) {
      r(t, e, n);
    }
  };
}, function (t, e, n) {
  var r = n(419);
  t.exports = function (t, e, n) {
    if (e == "__proto__" && r) {
      r(t, e, {
        configurable: true,
        enumerable: true,
        value: n,
        writable: true
      });
    } else {
      t[e] = n;
    }
  };
}, function (t, e, n) {
  var r = n(421);
  var o = n(422);
  var i = n(80);
  var s = n(145);
  var a = n(425);
  var c = n(226);
  var u = Object.prototype.hasOwnProperty;
  t.exports = function (t, e) {
    var n = i(t);
    var f = !n && o(t);
    var l = !n && !f && s(t);
    var h = !n && !f && !l && c(t);
    var p = n || f || l || h;
    var d = p ? r(t.length, String) : [];
    var y = d.length;
    for (var m in t) {
      if ((!!e || !!u.call(t, m)) && (!p || m != "length" && (!l || m != "offset" && m != "parent") && (!h || m != "buffer" && m != "byteLength" && m != "byteOffset") && !a(m, y))) {
        d.push(m);
      }
    }
    return d;
  };
}, function (t, e, n) {
  var r = n(426);
  var o = n(147);
  var i = n(148);
  var s = i && i.isTypedArray;
  var a = s ? o(s) : r;
  t.exports = a;
}, function (t, e) {
  t.exports = function (t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= 9007199254740991;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return t(e(n));
    };
  };
}, function (t, e, n) {
  var r = n(220);
  var o = n(227);
  t.exports = function (t) {
    return t != null && o(t.length) && !r(t);
  };
}, function (t, e) {
  t.exports = function () {
    return [];
  };
}, function (t, e, n) {
  var r = n(232);
  var o = n(233);
  var i = n(151);
  var s = n(230);
  var a = Object.getOwnPropertySymbols ? function (t) {
    var e = [];
    while (t) {
      r(e, i(t));
      t = o(t);
    }
    return e;
  } : s;
  t.exports = a;
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r;) {
      t[o + n] = e[n];
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(228)(Object.getPrototypeOf, Object);
  t.exports = r;
}, function (t, e, n) {
  var r = n(235);
  var o = n(151);
  var i = n(144);
  t.exports = function (t) {
    return r(t, i, o);
  };
}, function (t, e, n) {
  var r = n(232);
  var o = n(80);
  t.exports = function (t, e, n) {
    var i = e(t);
    if (o(t)) {
      return i;
    } else {
      return r(i, n(t));
    }
  };
}, function (t, e, n) {
  var r = n(17).Uint8Array;
  t.exports = r;
}, function (t, e, n) {
  var r = n(456);
  var o = n(459);
  var i = n(460);
  t.exports = function (t, e, n, s, a, c) {
    var u = n & 1;
    var f = t.length;
    var l = e.length;
    if (f != l && (!u || !(l > f))) {
      return false;
    }
    var h = c.get(t);
    var p = c.get(e);
    if (h && p) {
      return h == e && p == t;
    }
    var d = -1;
    var y = true;
    var m = n & 2 ? new r() : undefined;
    c.set(t, e);
    c.set(e, t);
    while (++d < f) {
      var g = t[d];
      var v = e[d];
      if (s) {
        var b = u ? s(v, g, d, e, t, c) : s(g, v, d, t, e, c);
      }
      if (b !== undefined) {
        if (b) {
          continue;
        }
        y = false;
        break;
      }
      if (m) {
        if (!o(e, function (t, e) {
          if (!i(m, e) && (g === t || a(g, t, n, s, c))) {
            return m.push(e);
          }
        })) {
          y = false;
          break;
        }
      } else if (g !== v && !a(g, v, n, s, c)) {
        y = false;
        break;
      }
    }
    c.delete(t);
    c.delete(e);
    return y;
  };
}, function (t, e, n) {
  (function () {
    "use strict";

    var t;
    var r;
    var o;
    var i;
    var s = {}.hasOwnProperty;
    r = n(121);
    t = n(305);
    o = n(314);
    i = n(201);
    e.defaults = r.defaults;
    e.processors = i;
    e.ValidationError = function (t) {
      function e(t) {
        this.message = t;
      }
      (function (t, e) {
        for (var n in e) {
          if (s.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(e, Error);
      return e;
    }();
    e.Builder = t.Builder;
    e.Parser = o.Parser;
    e.parseString = o.parseString;
    e.parseStringPromise = o.parseStringPromise;
  }).call(this);
}, function (t, e, n) {
  t.exports = n.p + "images/ring.41b6b93.mp3";
}, function (t, e, n) {
  t.exports = n.p + "images/gmail.a53275a.png";
}, function (t, e, n) {
  t.exports = n(375);
}, function (t, e, n) {
  var r = n(391);
  t.exports = function (t) {
    return r(t, 5);
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return V;
  });
  var r = n(1);
  n(3);
  const o = new class {
    constructor() {
      this.parseResponse = async t => {
        const e = t.headers.get("content-type");
        if (e.includes("application/json")) {
          return await t.json();
        } else if (e.includes("image")) {
          return await t.blob();
        } else {
          return await t.text();
        }
      };
      this.proxyFetch = async (t, e) => {
        const {
          url: n,
          request: r,
          option: o = {}
        } = t;
        fetch(n, r).then(async t => {
          if (o._proxyIgnoreRes) {
            return e({
              data: ""
            });
          }
          const n = await this.parseResponse(t);
          e({
            data: n
          });
        }).catch(t => {
          e({
            data: {
              code: 1000,
              data: null,
              message: t
            }
          });
        });
        return true;
      };
    }
    start() {
      r.a.listenTasks("slave:fetch", this.proxyFetch);
    }
  }();
  var i = n(21);
  var s = n(87);
  var a = n.n(s);
  var c = n(47);
  n(27);
  function u(t) {
    return t.split("@infinity@");
  }
  var f;
  var l = n(0);
  var h = n(6);
  var p = n.n(h);
  var d = n(13);
  var y = n(22);
  var m = n.n(y);
  var g = n(48);
  async function v(t, e, n, r = false) {
    try {
      if (n === "idb") {
        await m.a.setItem(t, e);
      } else if (n === "localstorage") {
        let n = e;
        if (!r) {
          n = JSON.stringify(e);
        }
        if (l.f && d.a) {
          await Object(g.d)(t, n);
        } else {
          localStorage.setItem(t, n);
        }
      } else if (n === "storage.local") {
        await new p.a((n, r) => chrome.storage.local.set({
          [t]: e
        }, () => {
          const t = chrome.runtime.lastError;
          if (t) {
            r(t);
          }
          n(true);
        }));
      }
      return {
        data: true
      };
    } catch (t) {
      console.error("setStorage -> error", t);
      return {
        error: t
      };
    }
  }
  async function b(t, e) {
    try {
      if (e === "idb") {
        await m.a.removeItem(t);
      } else if (e === "localstorage") {
        if (l.f && d.a) {
          await Object(g.c)(t);
        } else {
          localStorage.removeItem(t);
        }
      } else if (e === "storage.local") {
        await new p.a((e, n) => chrome.storage.local.remove(t, () => {
          const t = chrome.runtime.lastError;
          if (t) {
            n(t);
          }
          e(null);
        }));
      }
      return {
        data: true
      };
    } catch (t) {
      console.error("clearStorage -> error", t);
      return {
        error: t
      };
    }
  }
  (function (t) {
    t.storeNote = "store-notes";
    t.storeSearch = "store-search";
    t.storeSetting = "store-setting";
    t.storeSite = "store-site";
    t.storeSync = "store-sync";
    t.storeTodo = "store-todo";
    t.storeUser = "store-user";
    t.storeWallpaper = "store-wallpaper";
    t.storeWeather = "store-weather";
    t.storeBookmarks = "store-bookmarks";
    t.storeGmail = "store-gmail";
    t.storePrivacy = "store-privacy";
    t.storeWallpaperAutoData = "store-wallpaper-auto-data";
    t.storeNotification = "store-notification";
  })(f ||= {});
  class w {
    constructor(t, e, n) {
      this.options = {
        ensureStringValue: false,
        keepWithLogout: false
      };
      this.key = t;
      this.type = e;
      this.options = Object.assign(Object.assign({}, this.options), n);
      this.setInstanceMapper();
    }
    static getInstanceFromKey(t) {
      if (this.instanceKeyMapper.has(t)) {
        return this.instanceKeyMapper.get(t);
      } else {
        return null;
      }
    }
    static async deleteAllForLogout() {
      const t = Array.from(this.instanceKeyMapper.values());
      let e;
      if ((await p.a.all(t.map(async t => await t.deleteForLogout()))).some(t => !!t.error && (e = t.error, true))) {
        return {
          error: e
        };
      } else {
        return {
          data: true
        };
      }
    }
    setInstanceMapper() {
      w.instanceKeyMapper.set(this.key, this);
    }
    async create(t) {
      return await v(this.key, t, this.type);
    }
    async read(t) {
      return await async function (t, e, n = false) {
        try {
          if (e === "idb") {
            return {
              data: await m.a.getItem(t)
            };
          }
          if (e === "localstorage") {
            let e;
            e = l.f && d.a ? await Object(g.a)(t) : localStorage.getItem(t);
            if (!n && e) {
              if (e === "undefined") {
                return {
                  data: undefined
                };
              } else {
                return {
                  data: JSON.parse(e)
                };
              }
            } else {
              return {
                data: e
              };
            }
          }
          if (e === "storage.local") {
            return {
              data: await new p.a((e, n) => chrome.storage.local.get(t, r => {
                const o = chrome.runtime.lastError;
                if (o) {
                  n(o);
                }
                e(r == null ? undefined : r[t]);
              }))
            };
          }
        } catch (t) {
          console.error("getStorage -> error", t);
          return {
            error: t
          };
        }
      }(this.key, t || this.type);
    }
    async update(t) {
      const {
        data: e,
        error: n
      } = await this.read();
      if (n) {
        return {
          error: n
        };
      }
      if (e && typeof e == "object") {
        const n = Object.assign(Object.assign({}, e), t);
        return await this.create(n);
      }
      return {
        error: {
          data: e
        }
      };
    }
    async delete(t) {
      return await b(this.key, t || this.type);
    }
    async deleteWithRetain(...t) {
      if (t.length === 0) {
        return {
          error: {
            keys: t
          }
        };
      }
      const {
        data: e,
        error: n
      } = await this.read();
      if (n) {
        return {
          error: n
        };
      }
      if (e && typeof e == "object") {
        const n = {};
        t.forEach(t => {
          n[t] = e[t];
        });
        return await this.create(n);
      }
      return {
        error: {
          data: e
        }
      };
    }
    async deleteForLogout() {
      if (this.options.keepWithLogout) {
        return {
          data: true
        };
      } else {
        return await this.delete();
      }
    }
  }
  w.instanceKeyMapper = new Map();
  new w(f.storeNote, "idb");
  new class extends w {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          v(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          b(this.key, "localstorage");
        });
      }
      return super.delete();
    }
    async deleteForLogout() {
      return await super.deleteWithRetain("ignoreSuggest");
    }
  }(f.storeSearch, l.d ? "localstorage" : "idb");
  const _ = new class extends w {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          v(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          b(this.key, "localstorage");
        });
      }
      return super.delete();
    }
    async deleteForLogout() {
      return await super.deleteWithRetain("permission");
    }
  }(f.storeSetting, l.d ? "localstorage" : "idb");
  const x = new class extends w {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          v(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          b(this.key, "localstorage");
        });
      }
      return super.delete();
    }
  }(f.storeSite, l.d ? "localstorage" : "idb");
  const T = new class extends w {
    constructor() {
      super(...arguments);
      this.userStore = null;
      this.sendTabsSync = t => {
        console.warn("SyncStorageManager ~ sync: need inject sendTabsSync", t);
      };
    }
    injectUserStore(t) {
      this.userStore = t;
    }
    injectSendTabsSync(t) {
      this.sendTabsSync = t;
    }
    async updateSyncPipe(t, e) {
      if (!this.userStore?.isLogin) {
        return {
          error: "isLogin false"
        };
      }
      const {
        data: r,
        error: o
      } = await this.read();
      if (o || !r) {
        return {
          error: "read error"
        };
      }
      if (!r.isOpenSync) {
        return {
          error: "isOpenSync false"
        };
      }
      const {
        autoBackupPipe: i
      } = r;
      i.data[t] = e;
      i.timestamp = Date.now();
      if (!i.websocketKeys.includes(t)) {
        i.websocketKeys.push(t);
      }
      const s = await this.update({
        autoBackupPipe: i
      });
      this.sendTabsSync(this.key);
      return s;
    }
  }(f.storeSync, "idb");
  const E = new w(f.storeTodo, "idb");
  const O = new w(f.storeUser, l.d ? "localstorage" : "idb");
  new w(f.storeWallpaper, "idb");
  const S = new w(f.storeWeather, "idb");
  new w(f.storeWallpaperAutoData, "idb");
  new w(f.storeBookmarks, "localstorage", {
    keepWithLogout: true
  });
  new w(f.storeGmail, "localstorage", {
    keepWithLogout: true
  });
  new w(f.storePrivacy, "localstorage", {
    keepWithLogout: true
  });
  new w(f.storeNotification, "idb");
  async function I(t, e) {
    try {
      if (e) {
        return await m.a.getItem(t);
      }
      {
        const e = localStorage.getItem(t);
        if (e) {
          if (typeof e == "string") {
            return JSON.parse(e);
          } else {
            return e;
          }
        }
      }
    } catch (t) {
      throw new Error(t);
    }
  }
  async function A(t, e, n) {
    if (n) {
      await m.a.setItem(t, e);
    } else {
      localStorage.setItem(t, JSON.stringify(e));
    }
  }
  var N = n(85);
  var j = n.n(N);
  var D = n(242);
  var C = n.n(D);
  var P = n(153);
  var k = n.n(P);
  const R = new class extends class {
    constructor() {
      this.initCompleted = false;
      this.initError = null;
      this.waitInitList = [];
    }
    initDone(t) {
      if (t) {
        this.initError = t;
      }
      this.initCompleted = true;
      while (this.waitInitList.length) {
        if (this.initError) {
          this.waitInitList.pop().reject(this.initError);
        } else {
          this.waitInitList.pop().resolve();
        }
      }
    }
    get initComplete() {
      return new p.a((t, e) => {
        if (this.initCompleted) {
          if (this.initError) {
            e(this.initError);
          } else {
            t();
          }
        } else {
          this.waitInitList.push({
            resolve: t,
            reject: e
          });
        }
      });
    }
  } {
    constructor() {
      super();
      this.timer = null;
      this.timerItem = null;
      this.taskExecutors = {};
      this.allTasks = {};
      this.tasksQueue = [];
      this.save = j()(() => A("alarms", this.allTasks, true), 20);
      this.updateQueue = () => {
        const t = [];
        Object.keys(this.allTasks).forEach(e => {
          const n = this.allTasks[e];
          if (n) {
            Object.keys(n).forEach(r => {
              const o = n[r];
              if (o) {
                t.push({
                  type: e,
                  taskId: r,
                  options: o
                });
              }
            });
          }
        });
        this.tasksQueue = t.sort(({
          options: t
        }, {
          options: e
        }) => t.execTime - e.execTime);
      };
      this.init();
    }
    async init() {
      const t = await this.read();
      if (t) {
        this.allTasks = t;
      }
      this.updateQueue();
      this.setTimer();
      this.initDone();
    }
    read() {
      return I("alarms", true);
    }
    async tasksChanged() {
      this.updateQueue();
      this.setTimer();
      await this.save();
    }
    async setTimer() {
      if (this.tasksQueue.length === 0) {
        clearTimeout(this.timer);
        this.timer = null;
        return;
      }
      const t = this.tasksQueue[0];
      if (k()(this.timerItem, t)) {
        return;
      }
      clearTimeout(this.timer);
      this.timerItem = C()(t);
      const e = Date.now();
      const n = this.timerItem.options.execTime - e;
      this.timer = setTimeout(async () => {
        if (n > 0 || Math.abs(n) <= this.timerItem.options.expire) {
          await this.execTask(this.timerItem.type, this.timerItem.options);
        }
        this.removeTask(this.timerItem.type, this.timerItem.taskId, this.timerItem.options);
        this.setTimer();
      }, n > 1000 ? n : 1000);
    }
    async execTask(t, e) {
      const n = this.taskExecutors[t];
      if (!n) {
        console.warn("没有任务执行器");
        return "never";
      }
      try {
        await n(e.params);
        return "success";
      } catch (t) {
        console.error("Alarm ~ execTask ~ error", t);
        return "fail";
      }
    }
    register(t, e) {
      this.taskExecutors[t] = e;
    }
    async setTask(t, e, n) {
      await this.initComplete;
      if (this.allTasks[t]) {
        this.allTasks[t][e] = n;
      } else {
        this.allTasks[t] = {
          [e]: n
        };
      }
      await this.tasksChanged();
    }
    async resetTasks(t, e) {
      await this.initComplete;
      this.allTasks[t] = e;
      await this.tasksChanged();
    }
    async getTasks(t) {
      await this.initComplete;
      const e = this.allTasks[t];
      if (e && Object.keys(e).length > 0) {
        return Object.keys(e).map(t => ({
          taskId: t,
          options: e[t]
        }));
      } else {
        return [];
      }
    }
    async removeTask(t, e, n) {
      await this.initComplete;
      if (this.allTasks[t]) {
        if (e && n) {
          if (k()(this.allTasks[t][e], n)) {
            delete this.allTasks[t][e];
            await this.tasksChanged();
          }
          return;
        }
        if (e) {
          if (this.allTasks[t][e]) {
            delete this.allTasks[t][e];
            await this.tasksChanged();
          }
          return;
        }
        delete this.allTasks[t];
        await this.tasksChanged();
      }
    }
  }();
  T.injectSendTabsSync(t => {
    r.a.sendMessage("tabs-sync", t);
  });
  const L = new class {
    constructor() {
      this.expire = 30000;
      this.hasRegistClick = false;
    }
    start() {
      R.register("todo-notification", async t => {
        const {
          data: e,
          error: n
        } = await E.read();
        if (n) {
          return;
        }
        if (!e || !e.todoList.length) {
          return;
        }
        const r = e.todoList.find(e => e.todoId === t.todoId);
        if (r) {
          await this.setNotification(r);
        }
      });
      this.initTasks();
      r.a.listenTasks("slave:change-todo", async t => {
        if (t) {
          this.resetTasks(t);
        }
      });
    }
    async initTasks() {
      const {
        data: t,
        error: e
      } = await E.read();
      if (!e) {
        if (t && t.todoList.length) {
          this.resetTasks(t.todoList.filter(t => !t.done && t.dueTimestamp > Date.now() - this.expire));
        }
      }
    }
    resetTasks(t) {
      const e = {};
      t.forEach(t => {
        e[t.todoId] = {
          execTime: t.dueTimestamp,
          expire: this.expire,
          params: {
            todoId: t.todoId
          }
        };
      });
      R.resetTasks("todo-notification", e);
    }
    convertInvalidDate(t) {
      return Object(c.a)(t);
    }
    setNotification(t) {
      {
        if (l.i) {
          self.registration.showNotification(Object(i.a)("have_todo_item"), {
            body: t.text,
            icon: a.a,
            tag: t.todoId + t.dueTimestamp
          });
          self.onnotificationclick = async t => {
            const e = t.notification.tag;
            const {
              data: n,
              error: o
            } = await E.read();
            if (o) {
              return;
            }
            const i = n.todoList.map(t => t.todoId === e ? Object.assign(Object.assign({}, t), {
              done: true
            }) : t);
            const s = Object.assign({}, n, {
              todoList: i
            });
            await E.create(s);
            r.a.sendMessage("tabs-sync", E.key);
            const {
              data: a
            } = await O.read();
            T.injectUserStore(a);
            await T.updateSyncPipe("todo", {
              todoList: i
            });
          };
          return;
        }
        if (l.c || l.h) {
          const e = new Notification(Object(i.a)("have_todo_item"), {
            body: t.text,
            icon: a.a,
            tag: t.todoId
          });
          e.onclick = async t => {
            const n = t.target.tag;
            const {
              data: o,
              error: i
            } = await E.read();
            if (i) {
              return;
            }
            const s = o.todoList.map(t => t.todoId === n ? Object.assign(Object.assign({}, t), {
              done: true
            }) : t);
            const a = Object.assign({}, o, {
              todoList: s
            });
            await E.create(a);
            r.a.sendMessage("tabs-sync", E.key);
            const {
              data: c
            } = await O.read();
            T.injectUserStore(c);
            await T.updateSyncPipe("todo", {
              todoList: s
            });
            e.close();
          };
          return;
        }
        const s = {
          type: "basic",
          iconUrl: a.a,
          title: Object(i.a)("have_todo_item"),
          message: t.text
        };
        if (!l.g) {
          Object.assign(s, {
            buttons: [{
              title: Object(i.a)("no_more_reminder")
            }, {
              title: Object(i.a)("done")
            }]
          });
        }
        chrome.notifications.create((e = t.todoId, n = "todo", o = Math.random(), e ||= Object(c.b)("notice"), e + "@infinity@" + n + "@infinity@" + o), s);
        if (!this.hasRegistClick) {
          this.registClick();
          this.hasRegistClick = true;
        }
      }
      var e;
      var n;
      var o;
    }
    registClick() {
      chrome.notifications.onClicked.addListener(t => {
        const [, e] = u(t);
        if (e === "todo") {
          chrome.tabs.create({
            active: true
          }, () => {
            setTimeout(() => {}, 1000);
          });
        }
        chrome.notifications.clear(t);
      });
      chrome.notifications.onClosed.addListener(t => {
        chrome.notifications.clear(t);
      });
      chrome.notifications.onButtonClicked.addListener(async (t, e) => {
        const [n, o] = u(t);
        if (o !== "todo") {
          return;
        }
        const {
          data: i,
          error: s
        } = await E.read();
        if (s) {
          return;
        }
        const a = i.todoList;
        if (e === 0) {
          const t = a.map(t => t.todoId === n ? Object.assign(Object.assign({}, t), {
            noReminder: true
          }) : t);
          await E.create(Object.assign({}, i, {
            todoList: t
          }));
        }
        if (e === 1) {
          const t = a.map(t => t.todoId === n ? Object.assign(Object.assign({}, t), {
            done: true
          }) : t);
          const e = Object.assign({}, i, {
            todoList: t
          });
          await E.create(e);
          r.a.sendMessage("tabs-sync", E.key);
          const {
            data: o
          } = await O.read();
          T.injectUserStore(o);
          await T.updateSyncPipe("todo", {
            todoList: t
          });
        }
        chrome.notifications.clear(t);
      });
    }
  }();
  const M = new class {
    constructor() {
      this.timer = undefined;
      this.intervalTimer = undefined;
      this.setTimeTask = t => {
        const e = t => {
          this.timer = setTimeout(() => {
            this._timeToSwitchWallpaper();
          }, t);
        };
        this.stopRunAutoWallpaper();
        if (t) {
          e(t);
        }
      };
      this.stopRunAutoWallpaper = () => {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = undefined;
        }
      };
    }
    start() {
      r.a.listenTasks("slave:bg-run-timer-to-switch-wallpaper", this.setTimeTask);
      r.a.listenTasks("slave:bg-run-clear-wallpaper-timer-task", this.stopRunAutoWallpaper);
    }
    _timeToSwitchWallpaper() {
      r.a.sendMessage("tabs-time-to-switch-wallpaper");
    }
  }();
  const F = new class {
    start() {
      if (d.b === "serviceworker") {
        r.a.listenTasks("slave:bordcast-message", (t, e, n) => {
          r.a.sendMessage(t.type, t.payload, n);
        });
      }
    }
  }();
  const B = new class {
    constructor() {
      this.timer = null;
    }
    start() {
      clearInterval(this.timer);
      this.updateWeather();
      this.timer = setInterval(() => {
        this.updateWeather();
      }, 1800000);
    }
    check() {
      if (this.timer === null) {
        this.start();
      }
    }
    async getWeather() {
      const t = await fetch(`${l.m}/city/locate?lang=${l.o.lang}`);
      const e = await t.json();
      if (!(e == null ? undefined : e.city)) {
        return;
      }
      const {
        city: n
      } = e;
      const o = await fetch(`${l.m}/weather/forecast?lang=${l.o.lang}&cid=${n.cid}`);
      const i = await o.json();
      if (!(i == null ? undefined : i.forecast)) {
        return;
      }
      const {
        forecast: s
      } = i;
      s.name = n.city;
      const a = {
        localData: n,
        list: [s],
        lastUpdated: +new Date()
      };
      await S.create(a);
      r.a.sendMessage("tabs-sync", S.key);
    }
    async updateWeather() {
      const {
        data: e
      } = await S.read();
      const n = (e == null ? undefined : e.list) ?? [];
      if (!(n == null ? undefined : n.length)) {
        await this.getWeather();
        return;
      }
      for (const t in n) {
        const {
          cid: e,
          name: r
        } = n[t];
        const o = await fetch(`${l.m}/weather/forecast?lang=${l.o.lang}&cid=${e}`);
        const i = await o.json();
        let {
          forecast: s
        } = i;
        s ||= n[t];
        const a = Object.assign({}, s, {
          name: r
        });
        n[t] = a;
      }
      const o = {
        list: n,
        lastUpdated: +new Date()
      };
      const i = Object.assign({}, e, o);
      await S.create(i);
      r.a.sendMessage("tabs-sync", S.key);
    }
  }();
  const U = new class {
    start() {
      r.a.listenTasks("slave:master-init-i18n", async () => {
        console.log("service worker init i18n");
        await Object(i.b)();
      });
    }
  }();
  T.injectSendTabsSync(t => {
    r.a.sendMessage("tabs-sync", t);
  });
  const q = new class {
    constructor() {
      this.addIcon = async t => {
        const [{
          data: e,
          error: n
        }, {
          data: o,
          error: i
        }] = await p.a.all([x.read(), _.read()]);
        if (n || i) {
          return;
        }
        if (!e || !o) {
          return;
        }
        const {
          sites: s
        } = e;
        const {
          setting: a
        } = o;
        const c = s.length - 1;
        if (s.length === 0) {
          s.push([t]);
        } else if (s[c].length < a.layout.row * a.layout.col) {
          s[c].push(t);
        } else {
          s.push([t]);
        }
        await p.a.all([x.update({
          sites: s
        })]);
        const {
          data: u
        } = await O.read();
        T.injectUserStore(u);
        await T.updateSyncPipe("site", {
          sites: s
        });
        r.a.sendMessage("tabs-sync", x.key);
      };
    }
    start() {
      r.a.listenTasks("slave:add-icon", this.addIcon);
    }
  }();
  const W = new class {
    constructor() {
      this.prefetched = false;
    }
    start() {
      r.a.listenTasks("slave:prefetch", async (t, e) => {
        e(!this.prefetched);
        this.prefetched = true;
      });
    }
  }();
  const V = (t = null) => {
    r.a.created(t);
    U.start();
    o.start();
    L.start();
    M.start();
    B.start();
    F.start();
    if (l.f) {
      q.start();
    }
    W.start();
  };
}, function (t, e, n) {
  "use strict";

  var r = n(1);
  var o = n(83);
  var i = n(82);
  n(3);
  var s = n(0);
  const a = new class {
    async firefoxLogin(t) {
      r.a.sendMessage("master:login", t);
      if (s.g) {
        const t = await browser.tabs.query({});
        if (t == null ? undefined : t.length) {
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            const {
              url: r,
              id: o
            } = n;
            const i = s.k + "/on-login/";
            if (r.startsWith(s.l) || r.startsWith(i)) {
              browser.tabs.remove(o);
            }
          }
        }
      }
    }
    async cancelLogin() {
      r.a.sendMessage("master:cancelLogin");
    }
  }();
  var c = n(86);
  e.a = new class {
    start() {
      chrome.runtime.onMessage.addListener(({
        key: t,
        data: e,
        type: n,
        payload: s
      }, c, u) => {
        switch (t) {
          case "bg-notice-gmail-updated":
            o.a.updateSetting(e);
            break;
          case "bg-notice-gmail-permission":
            o.a.registClick(e);
            break;
          case "bg-run-start-watch-bookmarks":
            i.a.startWatchBookmarks();
            break;
          case "login":
            a.firefoxLogin(e);
            break;
          case "cancelLogin":
            a.cancelLogin();
            break;
          default:
            if (n && n.startsWith("slave:")) {
              r.a.execTasks({
                type: n,
                payload: s
              }, u, c.tab?.id);
              return true;
            }
        }
      });
      chrome.runtime.onInstalled.addListener(async ({
        reason: t
      }) => {
        chrome.storage.local.set({
          onInstalled: t
        });
        switch (t) {
          case "install":
            Object(c.b)();
            chrome.tabs.create({});
        }
      });
    }
  }();
}, function (t, e, n) {
  "use strict";

  n.r(e);
  (function (t) {
    n(3);
    n(466);
    var e = n(244);
    var r = n(243);
    var o = n(82);
    var i = n(83);
    var s = n(21);
    var a = n(0);
    var c = n(86);
    n(465);
    (async function () {
      t.i18n = s.a;
      e.a.start();
      Object(r.a)(self);
      if (!a.h) {
        o.a.start();
      }
      i.a.start();
      Object(c.a)();
    })();
  }).call(this, n(14));
}, function (t, e, n) {
  "use strict";

  var r = {}.propertyIsEnumerable;
  var o = Object.getOwnPropertyDescriptor;
  var i = o && !r.call({
    1: 2
  }, 1);
  e.f = i ? function (t) {
    var e = o(this, t);
    return !!e && e.enumerable;
  } : r;
}, function (t, e, n) {
  var r = n(8);
  var o = n(55);
  var i = "".split;
  t.exports = r(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    if (o(t) == "String") {
      return i.call(t, "");
    } else {
      return Object(t);
    }
  } : Object;
}, function (t, e, n) {
  var r = n(5);
  var o = n(94);
  var i = r.WeakMap;
  t.exports = typeof i == "function" && /native code/.test(o(i));
}, function (t, e, n) {
  var r = n(23);
  var o = n(250);
  var i = n(89);
  var s = n(38);
  t.exports = function (t, e) {
    for (var n = o(e), a = s.f, c = i.f, u = 0; u < n.length; u++) {
      var f = n[u];
      if (!r(t, f)) {
        a(t, f, c(e, f));
      }
    }
  };
}, function (t, e, n) {
  var r = n(40);
  var o = n(252);
  var i = n(255);
  var s = n(15);
  t.exports = r("Reflect", "ownKeys") || function (t) {
    var e = o.f(s(t));
    var n = i.f;
    if (n) {
      return e.concat(n(t));
    } else {
      return e;
    }
  };
}, function (t, e, n) {
  var r = n(5);
  t.exports = r;
}, function (t, e, n) {
  var r = n(157);
  var o = n(102).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  var r = n(90);
  var o = n(57);
  var i = n(254);
  function s(t) {
    return function (e, n, s) {
      var a;
      var c = r(e);
      var u = o(c.length);
      var f = i(s, u);
      if (t && n != n) {
        while (u > f) {
          if ((a = c[f++]) != a) {
            return true;
          }
        }
      } else {
        for (; u > f; f++) {
          if ((t || f in c) && c[f] === n) {
            return t || f || 0;
          }
        }
      }
      return !t && -1;
    };
  }
  t.exports = {
    includes: s(true),
    indexOf: s(false)
  };
}, function (t, e, n) {
  var r = n(58);
  var o = Math.max;
  var i = Math.min;
  t.exports = function (t, e) {
    var n = r(t);
    if (n < 0) {
      return o(n + e, 0);
    } else {
      return i(n, e);
    }
  };
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols;
}, function (t, e, n) {
  var r = n(39);
  t.exports = function (t, e, n) {
    for (var o in e) {
      r(t, o, e[o], n);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(25);
  t.exports = function (t) {
    if (!r(t) && t !== null) {
      throw TypeError("Can't set " + String(t) + " as a prototype");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(38).f;
  var o = n(23);
  var i = n(11)("toStringTag");
  t.exports = function (t, e, n) {
    if (t && !o(t = n ? t : t.prototype, i)) {
      r(t, i, {
        configurable: true,
        value: e
      });
    }
  };
}, function (t, e, n) {
  var r = n(161);
  t.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
}, function (t, e, n) {
  "use strict";

  var r = n(40);
  var o = n(38);
  var i = n(11);
  var s = n(32);
  var a = i("species");
  t.exports = function (t) {
    var e = r(t);
    var n = o.f;
    if (s && e && !e[a]) {
      n(e, a, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };
}, function (t, e) {
  t.exports = function (t, e, n) {
    if (!(t instanceof e)) {
      throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(15);
  var o = n(263);
  var i = n(57);
  var s = n(163);
  var a = n(264);
  var c = n(266);
  function u(t, e) {
    this.stopped = t;
    this.result = e;
  }
  t.exports = function (t, e, n) {
    var f;
    var l;
    var h;
    var p;
    var d;
    var y;
    var m;
    var g = n && n.that;
    var v = !!n && !!n.AS_ENTRIES;
    var b = !!n && !!n.IS_ITERATOR;
    var w = !!n && !!n.INTERRUPTED;
    var _ = s(e, g, 1 + v + w);
    function x(t) {
      if (f) {
        c(f);
      }
      return new u(true, t);
    }
    function T(t) {
      if (v) {
        r(t);
        if (w) {
          return _(t[0], t[1], x);
        } else {
          return _(t[0], t[1]);
        }
      } else if (w) {
        return _(t, x);
      } else {
        return _(t);
      }
    }
    if (b) {
      f = t;
    } else {
      if (typeof (l = a(t)) != "function") {
        throw TypeError("Target is not iterable");
      }
      if (o(l)) {
        h = 0;
        p = i(t.length);
        for (; p > h; h++) {
          if ((d = T(t[h])) && d instanceof u) {
            return d;
          }
        }
        return new u(false);
      }
      f = l.call(t);
    }
    for (y = f.next; !(m = y.call(f)).done;) {
      try {
        d = T(m.value);
      } catch (t) {
        c(f);
        throw t;
      }
      if (typeof d == "object" && d && d instanceof u) {
        return d;
      }
    }
    return new u(false);
  };
}, function (t, e, n) {
  var r = n(11);
  var o = n(162);
  var i = r("iterator");
  var s = Array.prototype;
  t.exports = function (t) {
    return t !== undefined && (o.Array === t || s[i] === t);
  };
}, function (t, e, n) {
  var r = n(164);
  var o = n(162);
  var i = n(11)("iterator");
  t.exports = function (t) {
    if (t != null) {
      return t[i] || t["@@iterator"] || o[r(t)];
    }
  };
}, function (t, e, n) {
  var r = {
    [n(11)("toStringTag")]: "z"
  };
  t.exports = String(r) === "[object z]";
}, function (t, e, n) {
  var r = n(15);
  t.exports = function (t) {
    var e = t.return;
    if (e !== undefined) {
      return r(e.call(t)).value;
    }
  };
}, function (t, e, n) {
  var r = n(11)("iterator");
  var o = false;
  try {
    var i = 0;
    var s = {
      next: function () {
        return {
          done: !!i++
        };
      },
      return: function () {
        o = true;
      }
    };
    s[r] = function () {
      return this;
    };
    Array.from(s, function () {
      throw 2;
    });
  } catch (t) {}
  t.exports = function (t, e) {
    if (!e && !o) {
      return false;
    }
    var n = false;
    try {
      var i = {
        [r]: function () {
          return {
            next: function () {
              return {
                done: n = true
              };
            }
          };
        }
      };
      t(i);
    } catch (t) {}
    return n;
  };
}, function (t, e, n) {
  var r;
  var o;
  var i;
  var s;
  var a;
  var c;
  var u;
  var f;
  var l = n(5);
  var h = n(89).f;
  var p = n(166).set;
  var d = n(168);
  var y = n(269);
  var m = n(104);
  var g = l.MutationObserver || l.WebKitMutationObserver;
  var v = l.document;
  var b = l.process;
  var w = l.Promise;
  var _ = h(l, "queueMicrotask");
  var x = _ && _.value;
  if (!x) {
    r = function () {
      var t;
      var e;
      for (m && (t = b.domain) && t.exit(); o;) {
        e = o.fn;
        o = o.next;
        try {
          e();
        } catch (t) {
          if (o) {
            s();
          } else {
            i = undefined;
          }
          throw t;
        }
      }
      i = undefined;
      if (t) {
        t.enter();
      }
    };
    if (d || m || y || !g || !v) {
      if (w && w.resolve) {
        (u = w.resolve(undefined)).constructor = w;
        f = u.then;
        s = function () {
          f.call(u, r);
        };
      } else {
        s = m ? function () {
          b.nextTick(r);
        } : function () {
          p.call(l, r);
        };
      }
    } else {
      a = true;
      c = v.createTextNode("");
      new g(r).observe(c, {
        characterData: true
      });
      s = function () {
        c.data = a = !a;
      };
    }
  }
  t.exports = x || function (t) {
    var e = {
      fn: t,
      next: undefined
    };
    if (i) {
      i.next = e;
    }
    if (!o) {
      o = e;
      s();
    }
    i = e;
  };
}, function (t, e, n) {
  var r = n(41);
  t.exports = /web0s(?!.*chrome)/i.test(r);
}, function (t, e, n) {
  var r = n(5);
  t.exports = function (t, e) {
    var n = r.console;
    if (n && n.error) {
      if (arguments.length === 1) {
        n.error(t);
      } else {
        n.error(t, e);
      }
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    try {
      return {
        error: false,
        value: t()
      };
    } catch (t) {
      return {
        error: true,
        value: t
      };
    }
  };
}, function (t, e) {
  t.exports = typeof window == "object";
}, function (t, e, n) {
  "use strict";

  var r = n(15);
  t.exports = function () {
    var t = r(this);
    var e = "";
    if (t.global) {
      e += "g";
    }
    if (t.ignoreCase) {
      e += "i";
    }
    if (t.multiline) {
      e += "m";
    }
    if (t.dotAll) {
      e += "s";
    }
    if (t.unicode) {
      e += "u";
    }
    if (t.sticky) {
      e += "y";
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(8);
  function o(t, e) {
    return RegExp(t, e);
  }
  e.UNSUPPORTED_Y = r(function () {
    var t = o("a", "y");
    t.lastIndex = 2;
    return t.exec("abcd") != null;
  });
  e.BROKEN_CARET = r(function () {
    var t = o("^r", "gy");
    t.lastIndex = 2;
    return t.exec("str") != null;
  });
}, function (t, e, n) {
  var r;
  var o = n(15);
  var i = n(276);
  var s = n(102);
  var a = n(101);
  var c = n(167);
  var u = n(92);
  var f = n(97);
  var l = f("IE_PROTO");
  function h() {}
  function p(t) {
    return "<script>" + t + "</script>";
  }
  function d() {
    try {
      r = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t;
    var e;
    d = r ? function (t) {
      t.write(p(""));
      t.close();
      var e = t.parentWindow.Object;
      t = null;
      return e;
    }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);
    for (var n = s.length; n--;) {
      delete d.prototype[s[n]];
    }
    return d();
  }
  a[l] = true;
  t.exports = Object.create || function (t, e) {
    var n;
    if (t !== null) {
      h.prototype = o(t);
      n = new h();
      h.prototype = null;
      n[l] = t;
    } else {
      n = d();
    }
    if (e === undefined) {
      return n;
    } else {
      return i(n, e);
    }
  };
}, function (t, e, n) {
  var r = n(32);
  var o = n(38);
  var i = n(15);
  var s = n(277);
  t.exports = r ? Object.defineProperties : function (t, e) {
    i(t);
    var n;
    var r = s(e);
    for (var a = r.length, c = 0; a > c;) {
      o.f(t, n = r[c++], e[n]);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(157);
  var o = n(102);
  t.exports = Object.keys || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  var r = n(8);
  t.exports = r(function () {
    var t = RegExp(".", "string".charAt(0));
    return !t.dotAll || !t.exec("\n") || t.flags !== "s";
  });
}, function (t, e, n) {
  var r = n(8);
  t.exports = r(function () {
    var t = RegExp("(?<a>b)", "string".charAt(5));
    return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
  });
}, function (t, e, n) {
  "use strict";

  n(27);
  var r = n(39);
  var o = n(106);
  var i = n(8);
  var s = n(11);
  var a = n(37);
  var c = s("species");
  var u = RegExp.prototype;
  t.exports = function (t, e, n, f) {
    var l = s(t);
    var h = !i(function () {
      var e = {
        [l]: function () {
          return 7;
        }
      };
      return ""[t](e) != 7;
    });
    var p = h && !i(function () {
      var e = false;
      var n = /a/;
      if (t === "split") {
        (n = {}).constructor = {};
        n.constructor[c] = function () {
          return n;
        };
        n.flags = "";
        n[l] = /./[l];
      }
      n.exec = function () {
        e = true;
        return null;
      };
      n[l]("");
      return !e;
    });
    if (!h || !p || n) {
      var d = /./[l];
      var y = e(l, ""[t], function (t, e, n, r, i) {
        var s = e.exec;
        if (s === o || s === u.exec) {
          if (h && !i) {
            return {
              done: true,
              value: d.call(e, n, r)
            };
          } else {
            return {
              done: true,
              value: t.call(n, e, r)
            };
          }
        } else {
          return {
            done: false
          };
        }
      });
      r(String.prototype, t, y[0]);
      r(u, l, y[1]);
    }
    if (f) {
      a(u[l], "sham", true);
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(282).charAt;
  t.exports = function (t, e, n) {
    return e + (n ? r(t, e).length : 1);
  };
}, function (t, e, n) {
  var r = n(58);
  var o = n(56);
  function i(t) {
    return function (e, n) {
      var i;
      var s;
      var a = String(o(e));
      var c = r(n);
      var u = a.length;
      if (c < 0 || c >= u) {
        if (t) {
          return "";
        } else {
          return undefined;
        }
      } else if ((i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343) {
        if (t) {
          return a.charAt(c);
        } else {
          return i;
        }
      } else if (t) {
        return a.slice(c, c + 2);
      } else {
        return s - 56320 + (i - 55296 << 10) + 65536;
      }
    };
  }
  t.exports = {
    codeAt: i(false),
    charAt: i(true)
  };
}, function (t, e, n) {
  var r = n(91);
  var o = Math.floor;
  var i = "".replace;
  var s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var a = /\$([$&'`]|\d{1,2})/g;
  t.exports = function (t, e, n, c, u, f) {
    var l = n + t.length;
    var h = c.length;
    var p = a;
    if (u !== undefined) {
      u = r(u);
      p = s;
    }
    return i.call(f, p, function (r, i) {
      var s;
      switch (i.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return t;
        case "`":
          return e.slice(0, n);
        case "'":
          return e.slice(l);
        case "<":
          s = u[i.slice(1, -1)];
          break;
        default:
          var a = +i;
          if (a === 0) {
            return r;
          }
          if (a > h) {
            var f = o(a / 10);
            if (f === 0) {
              return r;
            } else if (f <= h) {
              if (c[f - 1] === undefined) {
                return i.charAt(1);
              } else {
                return c[f - 1] + i.charAt(1);
              }
            } else {
              return r;
            }
          }
          s = c[a - 1];
      }
      if (s === undefined) {
        return "";
      } else {
        return s;
      }
    });
  };
}, function (t, e, n) {
  var r = n(55);
  var o = n(106);
  t.exports = function (t, e) {
    var n = t.exec;
    if (typeof n == "function") {
      var i = n.call(t, e);
      if (typeof i != "object") {
        throw TypeError("RegExp exec method returned something other than an Object or null");
      }
      return i;
    }
    if (r(t) !== "RegExp") {
      throw TypeError("RegExp#exec called on incompatible receiver");
    }
    return o.call(t, e);
  };
}, function (t, e, n) {
  n(286);
  var r = n(302);
  t.exports = r;
}, function (t, e, n) {
  n(171);
}, function (t, e, n) {
  "use strict";

  var r = {}.propertyIsEnumerable;
  var o = Object.getOwnPropertyDescriptor;
  var i = o && !r.call({
    1: 2
  }, 1);
  e.f = i ? function (t) {
    var e = o(this, t);
    return !!e && e.enumerable;
  } : r;
}, function (t, e, n) {
  var r = n(18);
  var o = n(50);
  var i = "".split;
  t.exports = r(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    if (o(t) == "String") {
      return i.call(t, "");
    } else {
      return Object(t);
    }
  } : Object;
}, function (t, e, n) {
  var r = n(7);
  var o = n(19);
  t.exports = function (t, e) {
    try {
      o(r, t, e);
    } catch (n) {
      r[t] = e;
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(18);
  t.exports = !r(function () {
    function t() {}
    t.prototype.constructor = null;
    return Object.getPrototypeOf(new t()) !== t.prototype;
  });
}, function (t, e, n) {
  var r = n(181);
  t.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
}, function (t, e, n) {
  var r = n(42);
  var o = n(64);
  var i = n(20);
  var s = n(293);
  t.exports = r ? Object.defineProperties : function (t, e) {
    i(t);
    var n;
    var r = s(e);
    for (var a = r.length, c = 0; a > c;) {
      o.f(t, n = r[c++], e[n]);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(294);
  var o = n(184);
  t.exports = Object.keys || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  var r = n(30);
  var o = n(61);
  var i = n(295).indexOf;
  var s = n(116);
  t.exports = function (t, e) {
    var n;
    var a = o(t);
    var c = 0;
    var u = [];
    for (n in a) {
      if (!r(s, n) && r(a, n)) {
        u.push(n);
      }
    }
    while (e.length > c) {
      if (r(a, n = e[c++])) {
        if (!~i(u, n)) {
          u.push(n);
        }
      }
    }
    return u;
  };
}, function (t, e, n) {
  var r = n(61);
  var o = n(114);
  var i = n(296);
  function s(t) {
    return function (e, n, s) {
      var a;
      var c = r(e);
      var u = o(c.length);
      var f = i(s, u);
      if (t && n != n) {
        while (u > f) {
          if ((a = c[f++]) != a) {
            return true;
          }
        }
      } else {
        for (; u > f; f++) {
          if ((t || f in c) && c[f] === n) {
            return t || f || 0;
          }
        }
      }
      return !t && -1;
    };
  }
  t.exports = {
    includes: s(true),
    indexOf: s(false)
  };
}, function (t, e, n) {
  var r = n(115);
  var o = Math.max;
  var i = Math.min;
  t.exports = function (t, e) {
    var n = r(t);
    if (n < 0) {
      return o(n + e, 0);
    } else {
      return i(n, e);
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(118);
  var o = n(119);
  t.exports = r ? {}.toString : function () {
    return "[object " + o(this) + "]";
  };
}, function (t, e, n) {
  var r = n(29);
  var o = n(50);
  var i = n(9)("match");
  t.exports = function (t) {
    var e;
    return r(t) && ((e = t[i]) !== undefined ? !!e : o(t) == "RegExp");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(20);
  t.exports = function () {
    var t = r(this);
    var e = "";
    if (t.global) {
      e += "g";
    }
    if (t.ignoreCase) {
      e += "i";
    }
    if (t.multiline) {
      e += "m";
    }
    if (t.dotAll) {
      e += "s";
    }
    if (t.unicode) {
      e += "u";
    }
    if (t.sticky) {
      e += "y";
    }
    return e;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(186).charAt;
  t.exports = function (t, e, n) {
    return e + (n ? r(t, e).length : 1);
  };
}, function (t, e, n) {
  var r = n(7);
  var o = n(187);
  var i = r.WeakMap;
  t.exports = typeof i == "function" && /native code/.test(o(i));
}, function (t, e, n) {
  var r = n(303);
  var o = String.prototype;
  t.exports = function (t) {
    var e = t.matchAll;
    if (typeof t == "string" || t === o || t instanceof String && e === o.matchAll) {
      return r;
    } else {
      return e;
    }
  };
}, function (t, e, n) {
  n(171);
  var r = n(304);
  t.exports = r("String").matchAll;
}, function (t, e, n) {
  var r = n(63);
  t.exports = function (t) {
    return r[t + "Prototype"];
  };
}, function (t, e, n) {
  (function () {
    "use strict";

    var t;
    var r;
    var o;
    var i;
    var s;
    var a = {}.hasOwnProperty;
    t = n(306);
    r = n(121).defaults;
    i = function (t) {
      return typeof t == "string" && (t.indexOf("&") >= 0 || t.indexOf(">") >= 0 || t.indexOf("<") >= 0);
    };
    s = function (t) {
      return "<![CDATA[" + o(t) + "]]>";
    };
    o = function (t) {
      return t.replace("]]>", "]]]]><![CDATA[>");
    };
    e.Builder = function () {
      function e(t) {
        var e;
        var n;
        var o;
        this.options = {};
        for (e in n = r[0.2]) {
          if (a.call(n, e)) {
            o = n[e];
            this.options[e] = o;
          }
        }
        for (e in t) {
          if (a.call(t, e)) {
            o = t[e];
            this.options[e] = o;
          }
        }
      }
      e.prototype.buildObject = function (e) {
        var n;
        var o;
        var c;
        var u;
        var f;
        var l;
        n = this.options.attrkey;
        o = this.options.charkey;
        if (Object.keys(e).length === 1 && this.options.rootName === r[0.2].rootName) {
          e = e[f = Object.keys(e)[0]];
        } else {
          f = this.options.rootName;
        }
        l = this;
        c = function (t, e) {
          var r;
          var u;
          var f;
          var h;
          var p;
          var d;
          if (typeof e != "object") {
            if (l.options.cdata && i(e)) {
              t.raw(s(e));
            } else {
              t.txt(e);
            }
          } else if (Array.isArray(e)) {
            for (h in e) {
              if (a.call(e, h)) {
                for (p in u = e[h]) {
                  f = u[p];
                  t = c(t.ele(p), f).up();
                }
              }
            }
          } else {
            for (p in e) {
              if (a.call(e, p)) {
                u = e[p];
                if (p === n) {
                  if (typeof u == "object") {
                    for (r in u) {
                      d = u[r];
                      t = t.att(r, d);
                    }
                  }
                } else if (p === o) {
                  t = l.options.cdata && i(u) ? t.raw(s(u)) : t.txt(u);
                } else if (Array.isArray(u)) {
                  for (h in u) {
                    if (a.call(u, h)) {
                      t = typeof (f = u[h]) == "string" ? l.options.cdata && i(f) ? t.ele(p).raw(s(f)).up() : t.ele(p, f).up() : c(t.ele(p), f).up();
                    }
                  }
                } else if (typeof u == "object") {
                  t = c(t.ele(p), u).up();
                } else if (typeof u == "string" && l.options.cdata && i(u)) {
                  t = t.ele(p).raw(s(u)).up();
                } else {
                  if (u == null) {
                    u = "";
                  }
                  t = t.ele(p, u.toString()).up();
                }
              }
            }
          }
          return t;
        };
        u = t.create(f, this.options.xmldec, this.options.doctype, {
          headless: this.options.headless,
          allowSurrogateChars: this.options.allowSurrogateChars
        });
        return c(u, e).end(this.options.renderOpts);
      };
      return e;
    }();
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i;
    var s;
    var a;
    var c;
    var u;
    var f;
    var l;
    l = n(24);
    u = l.assign;
    f = l.isFunction;
    o = n(189);
    i = n(190);
    s = n(312);
    c = n(135);
    a = n(313);
    e = n(4);
    r = n(67);
    t.exports.create = function (t, e, n, r) {
      var o;
      var s;
      if (t == null) {
        throw new Error("Root element needs a name.");
      }
      r = u({}, e, n, r);
      s = (o = new i(r)).element(t);
      if (!r.headless) {
        o.declaration(r);
        if (r.pubID != null || r.sysID != null) {
          o.dtd(r);
        }
      }
      return s;
    };
    t.exports.begin = function (t, e, n) {
      var r;
      if (f(t)) {
        e = (r = [t, e])[0];
        n = r[1];
        t = {};
      }
      if (e) {
        return new s(t, e, n);
      } else {
        return new i(t);
      }
    };
    t.exports.stringWriter = function (t) {
      return new c(t);
    };
    t.exports.streamWriter = function (t, e) {
      return new a(t, e);
    };
    t.exports.implementation = new o();
    t.exports.nodeType = e;
    t.exports.writerState = r;
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    e = n(308);
    r = n(309);
    t.exports = function () {
      function t() {
        this.defaultParams = {
          "canonical-form": false,
          "cdata-sections": false,
          comments: false,
          "datatype-normalization": false,
          "element-content-whitespace": true,
          entities: true,
          "error-handler": new e(),
          infoset: true,
          "validate-if-schema": false,
          namespaces: true,
          "namespace-declarations": true,
          "normalize-characters": false,
          "schema-location": "",
          "schema-type": "",
          "split-cdata-sections": true,
          validate: false,
          "well-formed": true
        };
        this.params = Object.create(this.defaultParams);
      }
      Object.defineProperty(t.prototype, "parameterNames", {
        get: function () {
          return new r(Object.keys(this.defaultParams));
        }
      });
      t.prototype.getParameter = function (t) {
        if (this.params.hasOwnProperty(t)) {
          return this.params[t];
        } else {
          return null;
        }
      };
      t.prototype.canSetParameter = function (t, e) {
        return true;
      };
      t.prototype.setParameter = function (t, e) {
        if (e != null) {
          return this.params[t] = e;
        } else {
          return delete this.params[t];
        }
      };
      return t;
    }();
  }).call(this);
}, function (t, e) {
  (function () {
    t.exports = function () {
      function t() {}
      t.prototype.handleError = function (t) {
        throw new Error(t);
      };
      return t;
    }();
  }).call(this);
}, function (t, e) {
  (function () {
    t.exports = function () {
      function t(t) {
        this.arr = t || [];
      }
      Object.defineProperty(t.prototype, "length", {
        get: function () {
          return this.arr.length;
        }
      });
      t.prototype.item = function (t) {
        return this.arr[t] || null;
      };
      t.prototype.contains = function (t) {
        return this.arr.indexOf(t) !== -1;
      };
      return t;
    }();
  }).call(this);
}, function (t, e) {
  (function () {
    t.exports = function () {
      function t(t) {
        this.nodes = t;
      }
      Object.defineProperty(t.prototype, "length", {
        get: function () {
          return this.nodes.length || 0;
        }
      });
      t.prototype.clone = function () {
        return this.nodes = null;
      };
      t.prototype.item = function (t) {
        return this.nodes[t] || null;
      };
      return t;
    }();
  }).call(this);
}, function (t, e) {
  (function () {
    t.exports = {
      Disconnected: 1,
      Preceding: 2,
      Following: 4,
      Contains: 8,
      ContainedBy: 16,
      ImplementationSpecific: 32
    };
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i;
    var s;
    var a;
    var c;
    var u;
    var f;
    var l;
    var h;
    var p;
    var d;
    var y;
    var m;
    var g;
    var v;
    var b;
    var w;
    var _;
    var x;
    var T;
    var E;
    var O = {}.hasOwnProperty;
    E = n(24);
    x = E.isObject;
    _ = E.isFunction;
    T = E.isPlainObject;
    w = E.getValue;
    e = n(4);
    p = n(190);
    d = n(122);
    i = n(124);
    s = n(125);
    m = n(132);
    b = n(133);
    y = n(134);
    l = n(126);
    h = n(127);
    a = n(128);
    u = n(129);
    c = n(130);
    f = n(131);
    o = n(191);
    v = n(193);
    g = n(135);
    r = n(67);
    t.exports = function () {
      function t(t, n, r) {
        var o;
        this.name = "?xml";
        this.type = e.Document;
        t ||= {};
        o = {};
        if (t.writer) {
          if (T(t.writer)) {
            o = t.writer;
            t.writer = new g();
          }
        } else {
          t.writer = new g();
        }
        this.options = t;
        this.writer = t.writer;
        this.writerOptions = this.writer.filterOptions(o);
        this.stringify = new v(t);
        this.onDataCallback = n || function () {};
        this.onEndCallback = r || function () {};
        this.currentNode = null;
        this.currentLevel = -1;
        this.openTags = {};
        this.documentStarted = false;
        this.documentCompleted = false;
        this.root = null;
      }
      t.prototype.createChildNode = function (t) {
        var n;
        var r;
        var o;
        var i;
        var s;
        var a;
        var c;
        var u;
        switch (t.type) {
          case e.CData:
            this.cdata(t.value);
            break;
          case e.Comment:
            this.comment(t.value);
            break;
          case e.Element:
            o = {};
            for (r in c = t.attribs) {
              if (O.call(c, r)) {
                n = c[r];
                o[r] = n.value;
              }
            }
            this.node(t.name, o);
            break;
          case e.Dummy:
            this.dummy();
            break;
          case e.Raw:
            this.raw(t.value);
            break;
          case e.Text:
            this.text(t.value);
            break;
          case e.ProcessingInstruction:
            this.instruction(t.target, t.value);
            break;
          default:
            throw new Error("This XML node type is not supported in a JS object: " + t.constructor.name);
        }
        s = 0;
        a = (u = t.children).length;
        for (; s < a; s++) {
          i = u[s];
          this.createChildNode(i);
          if (i.type === e.Element) {
            this.up();
          }
        }
        return this;
      };
      t.prototype.dummy = function () {
        return this;
      };
      t.prototype.node = function (t, e, n) {
        var r;
        if (t == null) {
          throw new Error("Missing node name.");
        }
        if (this.root && this.currentLevel === -1) {
          throw new Error("Document can only have one root node. " + this.debugInfo(t));
        }
        this.openCurrent();
        t = w(t);
        if (e == null) {
          e = {};
        }
        e = w(e);
        if (!x(e)) {
          n = (r = [e, n])[0];
          e = r[1];
        }
        this.currentNode = new d(this, t, e);
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        if (n != null) {
          this.text(n);
        }
        return this;
      };
      t.prototype.element = function (t, n, r) {
        var o;
        var i;
        var s;
        var a;
        var c;
        var u;
        if (this.currentNode && this.currentNode.type === e.DocType) {
          this.dtdElement.apply(this, arguments);
        } else if (Array.isArray(t) || x(t) || _(t)) {
          a = this.options.noValidation;
          this.options.noValidation = true;
          (u = new p(this.options).element("TEMP_ROOT")).element(t);
          this.options.noValidation = a;
          i = 0;
          s = (c = u.children).length;
          for (; i < s; i++) {
            o = c[i];
            this.createChildNode(o);
            if (o.type === e.Element) {
              this.up();
            }
          }
        } else {
          this.node(t, n, r);
        }
        return this;
      };
      t.prototype.attribute = function (t, e) {
        var n;
        var r;
        if (!this.currentNode || this.currentNode.children) {
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(t));
        }
        if (t != null) {
          t = w(t);
        }
        if (x(t)) {
          for (n in t) {
            if (O.call(t, n)) {
              r = t[n];
              this.attribute(n, r);
            }
          }
        } else {
          if (_(e)) {
            e = e.apply();
          }
          if (this.options.keepNullAttributes && e == null) {
            this.currentNode.attribs[t] = new o(this, t, "");
          } else if (e != null) {
            this.currentNode.attribs[t] = new o(this, t, e);
          }
        }
        return this;
      };
      t.prototype.text = function (t) {
        var e;
        this.openCurrent();
        e = new b(this, t);
        this.onData(this.writer.text(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.cdata = function (t) {
        var e;
        this.openCurrent();
        e = new i(this, t);
        this.onData(this.writer.cdata(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.comment = function (t) {
        var e;
        this.openCurrent();
        e = new s(this, t);
        this.onData(this.writer.comment(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.raw = function (t) {
        var e;
        this.openCurrent();
        e = new m(this, t);
        this.onData(this.writer.raw(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.instruction = function (t, e) {
        var n;
        var r;
        var o;
        var i;
        var s;
        this.openCurrent();
        if (t != null) {
          t = w(t);
        }
        if (e != null) {
          e = w(e);
        }
        if (Array.isArray(t)) {
          n = 0;
          i = t.length;
          for (; n < i; n++) {
            r = t[n];
            this.instruction(r);
          }
        } else if (x(t)) {
          for (r in t) {
            if (O.call(t, r)) {
              o = t[r];
              this.instruction(r, o);
            }
          }
        } else {
          if (_(e)) {
            e = e.apply();
          }
          s = new y(this, t, e);
          this.onData(this.writer.processingInstruction(s, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        }
        return this;
      };
      t.prototype.declaration = function (t, e, n) {
        var r;
        this.openCurrent();
        if (this.documentStarted) {
          throw new Error("declaration() must be the first node.");
        }
        r = new l(this, t, e, n);
        this.onData(this.writer.declaration(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.doctype = function (t, e, n) {
        this.openCurrent();
        if (t == null) {
          throw new Error("Missing root node name.");
        }
        if (this.root) {
          throw new Error("dtd() must come before the root node.");
        }
        this.currentNode = new h(this, e, n);
        this.currentNode.rootNodeName = t;
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        return this;
      };
      t.prototype.dtdElement = function (t, e) {
        var n;
        this.openCurrent();
        n = new c(this, t, e);
        this.onData(this.writer.dtdElement(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.attList = function (t, e, n, r, o) {
        var i;
        this.openCurrent();
        i = new a(this, t, e, n, r, o);
        this.onData(this.writer.dtdAttList(i, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.entity = function (t, e) {
        var n;
        this.openCurrent();
        n = new u(this, false, t, e);
        this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.pEntity = function (t, e) {
        var n;
        this.openCurrent();
        n = new u(this, true, t, e);
        this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.notation = function (t, e) {
        var n;
        this.openCurrent();
        n = new f(this, t, e);
        this.onData(this.writer.dtdNotation(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.up = function () {
        if (this.currentLevel < 0) {
          throw new Error("The document node has no parent.");
        }
        if (this.currentNode) {
          if (this.currentNode.children) {
            this.closeNode(this.currentNode);
          } else {
            this.openNode(this.currentNode);
          }
          this.currentNode = null;
        } else {
          this.closeNode(this.openTags[this.currentLevel]);
        }
        delete this.openTags[this.currentLevel];
        this.currentLevel--;
        return this;
      };
      t.prototype.end = function () {
        while (this.currentLevel >= 0) {
          this.up();
        }
        return this.onEnd();
      };
      t.prototype.openCurrent = function () {
        if (this.currentNode) {
          this.currentNode.children = true;
          return this.openNode(this.currentNode);
        }
      };
      t.prototype.openNode = function (t) {
        var n;
        var o;
        var i;
        var s;
        if (!t.isOpen) {
          if (!this.root && this.currentLevel === 0 && t.type === e.Element) {
            this.root = t;
          }
          o = "";
          if (t.type === e.Element) {
            this.writerOptions.state = r.OpenTag;
            o = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<" + t.name;
            for (i in s = t.attribs) {
              if (O.call(s, i)) {
                n = s[i];
                o += this.writer.attribute(n, this.writerOptions, this.currentLevel);
              }
            }
            o += (t.children ? ">" : "/>") + this.writer.endline(t, this.writerOptions, this.currentLevel);
            this.writerOptions.state = r.InsideTag;
          } else {
            this.writerOptions.state = r.OpenTag;
            o = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + t.rootNodeName;
            if (t.pubID && t.sysID) {
              o += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
            } else if (t.sysID) {
              o += " SYSTEM \"" + t.sysID + "\"";
            }
            if (t.children) {
              o += " [";
              this.writerOptions.state = r.InsideTag;
            } else {
              this.writerOptions.state = r.CloseTag;
              o += ">";
            }
            o += this.writer.endline(t, this.writerOptions, this.currentLevel);
          }
          this.onData(o, this.currentLevel);
          return t.isOpen = true;
        }
      };
      t.prototype.closeNode = function (t) {
        var n;
        if (!t.isClosed) {
          n = "";
          this.writerOptions.state = r.CloseTag;
          n = t.type === e.Element ? this.writer.indent(t, this.writerOptions, this.currentLevel) + "</" + t.name + ">" + this.writer.endline(t, this.writerOptions, this.currentLevel) : this.writer.indent(t, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(t, this.writerOptions, this.currentLevel);
          this.writerOptions.state = r.None;
          this.onData(n, this.currentLevel);
          return t.isClosed = true;
        }
      };
      t.prototype.onData = function (t, e) {
        this.documentStarted = true;
        return this.onDataCallback(t, e + 1);
      };
      t.prototype.onEnd = function () {
        this.documentCompleted = true;
        return this.onEndCallback();
      };
      t.prototype.debugInfo = function (t) {
        if (t == null) {
          return "";
        } else {
          return "node: <" + t + ">";
        }
      };
      t.prototype.ele = function () {
        return this.element.apply(this, arguments);
      };
      t.prototype.nod = function (t, e, n) {
        return this.node(t, e, n);
      };
      t.prototype.txt = function (t) {
        return this.text(t);
      };
      t.prototype.dat = function (t) {
        return this.cdata(t);
      };
      t.prototype.com = function (t) {
        return this.comment(t);
      };
      t.prototype.ins = function (t, e) {
        return this.instruction(t, e);
      };
      t.prototype.dec = function (t, e, n) {
        return this.declaration(t, e, n);
      };
      t.prototype.dtd = function (t, e, n) {
        return this.doctype(t, e, n);
      };
      t.prototype.e = function (t, e, n) {
        return this.element(t, e, n);
      };
      t.prototype.n = function (t, e, n) {
        return this.node(t, e, n);
      };
      t.prototype.t = function (t) {
        return this.text(t);
      };
      t.prototype.d = function (t) {
        return this.cdata(t);
      };
      t.prototype.c = function (t) {
        return this.comment(t);
      };
      t.prototype.r = function (t) {
        return this.raw(t);
      };
      t.prototype.i = function (t, e) {
        return this.instruction(t, e);
      };
      t.prototype.att = function () {
        if (this.currentNode && this.currentNode.type === e.DocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };
      t.prototype.a = function () {
        if (this.currentNode && this.currentNode.type === e.DocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };
      t.prototype.ent = function (t, e) {
        return this.entity(t, e);
      };
      t.prototype.pent = function (t, e) {
        return this.pEntity(t, e);
      };
      t.prototype.not = function (t, e) {
        return this.notation(t, e);
      };
      return t;
    }();
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var o;
    var i = {}.hasOwnProperty;
    e = n(4);
    o = n(194);
    r = n(67);
    t.exports = function (t) {
      function n(t, e) {
        this.stream = t;
        n.__super__.constructor.call(this, e);
      }
      (function (t, e) {
        for (var n in e) {
          if (i.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(n, t);
      n.prototype.endline = function (t, e, o) {
        if (t.isLastRootNode && e.state === r.CloseTag) {
          return "";
        } else {
          return n.__super__.endline.call(this, t, e, o);
        }
      };
      n.prototype.document = function (t, e) {
        var n;
        var r;
        var o;
        var i;
        var s;
        var a;
        var c;
        var u;
        var f;
        r = o = 0;
        s = (c = t.children).length;
        for (; o < s; r = ++o) {
          (n = c[r]).isLastRootNode = r === t.children.length - 1;
        }
        e = this.filterOptions(e);
        f = [];
        i = 0;
        a = (u = t.children).length;
        for (; i < a; i++) {
          n = u[i];
          f.push(this.writeChildNode(n, e, 0));
        }
        return f;
      };
      n.prototype.attribute = function (t, e, r) {
        return this.stream.write(n.__super__.attribute.call(this, t, e, r));
      };
      n.prototype.cdata = function (t, e, r) {
        return this.stream.write(n.__super__.cdata.call(this, t, e, r));
      };
      n.prototype.comment = function (t, e, r) {
        return this.stream.write(n.__super__.comment.call(this, t, e, r));
      };
      n.prototype.declaration = function (t, e, r) {
        return this.stream.write(n.__super__.declaration.call(this, t, e, r));
      };
      n.prototype.docType = function (t, e, n) {
        var o;
        var i;
        var s;
        var a;
        n ||= 0;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        this.stream.write(this.indent(t, e, n));
        this.stream.write("<!DOCTYPE " + t.root().name);
        if (t.pubID && t.sysID) {
          this.stream.write(" PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"");
        } else if (t.sysID) {
          this.stream.write(" SYSTEM \"" + t.sysID + "\"");
        }
        if (t.children.length > 0) {
          this.stream.write(" [");
          this.stream.write(this.endline(t, e, n));
          e.state = r.InsideTag;
          i = 0;
          s = (a = t.children).length;
          for (; i < s; i++) {
            o = a[i];
            this.writeChildNode(o, e, n + 1);
          }
          e.state = r.CloseTag;
          this.stream.write("]");
        }
        e.state = r.CloseTag;
        this.stream.write(e.spaceBeforeSlash + ">");
        this.stream.write(this.endline(t, e, n));
        e.state = r.None;
        return this.closeNode(t, e, n);
      };
      n.prototype.element = function (t, n, o) {
        var s;
        var a;
        var c;
        var u;
        var f;
        var l;
        var h;
        var p;
        var d;
        o ||= 0;
        this.openNode(t, n, o);
        n.state = r.OpenTag;
        this.stream.write(this.indent(t, n, o) + "<" + t.name);
        for (h in p = t.attribs) {
          if (i.call(p, h)) {
            s = p[h];
            this.attribute(s, n, o);
          }
        }
        u = (c = t.children.length) === 0 ? null : t.children[0];
        if (c === 0 || t.children.every(function (t) {
          return (t.type === e.Text || t.type === e.Raw) && t.value === "";
        })) {
          if (n.allowEmpty) {
            this.stream.write(">");
            n.state = r.CloseTag;
            this.stream.write("</" + t.name + ">");
          } else {
            n.state = r.CloseTag;
            this.stream.write(n.spaceBeforeSlash + "/>");
          }
        } else if (!n.pretty || c !== 1 || u.type !== e.Text && u.type !== e.Raw || u.value == null) {
          this.stream.write(">" + this.endline(t, n, o));
          n.state = r.InsideTag;
          f = 0;
          l = (d = t.children).length;
          for (; f < l; f++) {
            a = d[f];
            this.writeChildNode(a, n, o + 1);
          }
          n.state = r.CloseTag;
          this.stream.write(this.indent(t, n, o) + "</" + t.name + ">");
        } else {
          this.stream.write(">");
          n.state = r.InsideTag;
          n.suppressPrettyCount++;
          true;
          this.writeChildNode(u, n, o + 1);
          n.suppressPrettyCount--;
          false;
          n.state = r.CloseTag;
          this.stream.write("</" + t.name + ">");
        }
        this.stream.write(this.endline(t, n, o));
        n.state = r.None;
        return this.closeNode(t, n, o);
      };
      n.prototype.processingInstruction = function (t, e, r) {
        return this.stream.write(n.__super__.processingInstruction.call(this, t, e, r));
      };
      n.prototype.raw = function (t, e, r) {
        return this.stream.write(n.__super__.raw.call(this, t, e, r));
      };
      n.prototype.text = function (t, e, r) {
        return this.stream.write(n.__super__.text.call(this, t, e, r));
      };
      n.prototype.dtdAttList = function (t, e, r) {
        return this.stream.write(n.__super__.dtdAttList.call(this, t, e, r));
      };
      n.prototype.dtdElement = function (t, e, r) {
        return this.stream.write(n.__super__.dtdElement.call(this, t, e, r));
      };
      n.prototype.dtdEntity = function (t, e, r) {
        return this.stream.write(n.__super__.dtdEntity.call(this, t, e, r));
      };
      n.prototype.dtdNotation = function (t, e, r) {
        return this.stream.write(n.__super__.dtdNotation.call(this, t, e, r));
      };
      return n;
    }(o);
  }).call(this);
}, function (t, e, n) {
  (function () {
    "use strict";

    var t;
    var r;
    var o;
    var i;
    var s;
    var a;
    var c;
    var u;
    var f;
    function l(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    var h = {}.hasOwnProperty;
    u = n(315);
    i = n(69);
    t = n(330);
    c = n(201);
    f = n(199).setImmediate;
    r = n(121).defaults;
    s = function (t) {
      return typeof t == "object" && t != null && Object.keys(t).length === 0;
    };
    a = function (t, e, n) {
      var r;
      var o;
      r = 0;
      o = t.length;
      for (; r < o; r++) {
        e = (0, t[r])(e, n);
      }
      return e;
    };
    o = function (t, e, n) {
      var r;
      (r = Object.create(null)).value = n;
      r.writable = true;
      r.enumerable = true;
      r.configurable = true;
      return Object.defineProperty(t, e, r);
    };
    e.Parser = function (n) {
      function i(t) {
        var n;
        var o;
        var i;
        this.parseStringPromise = l(this.parseStringPromise, this);
        this.parseString = l(this.parseString, this);
        this.reset = l(this.reset, this);
        this.assignOrPush = l(this.assignOrPush, this);
        this.processAsync = l(this.processAsync, this);
        if (!(this instanceof e.Parser)) {
          return new e.Parser(t);
        }
        this.options = {};
        for (n in o = r[0.2]) {
          if (h.call(o, n)) {
            i = o[n];
            this.options[n] = i;
          }
        }
        for (n in t) {
          if (h.call(t, n)) {
            i = t[n];
            this.options[n] = i;
          }
        }
        if (this.options.xmlns) {
          this.options.xmlnskey = this.options.attrkey + "ns";
        }
        if (this.options.normalizeTags) {
          this.options.tagNameProcessors ||= [];
          this.options.tagNameProcessors.unshift(c.normalize);
        }
        this.reset();
      }
      (function (t, e) {
        for (var n in e) {
          if (h.call(e, n)) {
            t[n] = e[n];
          }
        }
        function r() {
          this.constructor = t;
        }
        r.prototype = e.prototype;
        t.prototype = new r();
        t.__super__ = e.prototype;
      })(i, n);
      i.prototype.processAsync = function () {
        var t;
        var e;
        try {
          if (this.remaining.length <= this.options.chunkSize) {
            t = this.remaining;
            this.remaining = "";
            this.saxParser = this.saxParser.write(t);
            return this.saxParser.close();
          } else {
            t = this.remaining.substr(0, this.options.chunkSize);
            this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
            this.saxParser = this.saxParser.write(t);
            return f(this.processAsync);
          }
        } catch (t) {
          e = t;
          if (!this.saxParser.errThrown) {
            this.saxParser.errThrown = true;
            return this.emit(e);
          }
        }
      };
      i.prototype.assignOrPush = function (t, e, n) {
        if (e in t) {
          if (!(t[e] instanceof Array)) {
            o(t, e, [t[e]]);
          }
          return t[e].push(n);
        } else if (this.options.explicitArray) {
          return o(t, e, [n]);
        } else {
          return o(t, e, n);
        }
      };
      i.prototype.reset = function () {
        var t;
        var e;
        var n;
        var r;
        var i;
        this.removeAllListeners();
        this.saxParser = u.parser(this.options.strict, {
          trim: false,
          normalize: false,
          xmlns: this.options.xmlns
        });
        this.saxParser.errThrown = false;
        this.saxParser.onerror = (i = this, function (t) {
          i.saxParser.resume();
          if (!i.saxParser.errThrown) {
            i.saxParser.errThrown = true;
            return i.emit("error", t);
          }
        });
        this.saxParser.onend = function (t) {
          return function () {
            if (!t.saxParser.ended) {
              t.saxParser.ended = true;
              return t.emit("end", t.resultObject);
            }
          };
        }(this);
        this.saxParser.ended = false;
        this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
        this.resultObject = null;
        r = [];
        t = this.options.attrkey;
        e = this.options.charkey;
        this.saxParser.onopentag = function (n) {
          return function (i) {
            var s;
            var c;
            var u;
            var f;
            var l;
            (u = {})[e] = "";
            if (!n.options.ignoreAttrs) {
              for (s in l = i.attributes) {
                if (h.call(l, s)) {
                  if (!(t in u) && !n.options.mergeAttrs) {
                    u[t] = {};
                  }
                  c = n.options.attrValueProcessors ? a(n.options.attrValueProcessors, i.attributes[s], s) : i.attributes[s];
                  f = n.options.attrNameProcessors ? a(n.options.attrNameProcessors, s) : s;
                  if (n.options.mergeAttrs) {
                    n.assignOrPush(u, f, c);
                  } else {
                    o(u[t], f, c);
                  }
                }
              }
            }
            u["#name"] = n.options.tagNameProcessors ? a(n.options.tagNameProcessors, i.name) : i.name;
            if (n.options.xmlns) {
              u[n.options.xmlnskey] = {
                uri: i.uri,
                local: i.local
              };
            }
            return r.push(u);
          };
        }(this);
        this.saxParser.onclosetag = function (t) {
          return function () {
            var n;
            var i;
            var c;
            var u;
            var f;
            var l;
            var p;
            var d;
            var y;
            var m;
            l = r.pop();
            f = l["#name"];
            if (!t.options.explicitChildren || !t.options.preserveChildrenOrder) {
              delete l["#name"];
            }
            if (l.cdata === true) {
              n = l.cdata;
              delete l.cdata;
            }
            y = r[r.length - 1];
            if (l[e].match(/^\s*$/) && !n) {
              i = l[e];
              delete l[e];
            } else {
              if (t.options.trim) {
                l[e] = l[e].trim();
              }
              if (t.options.normalize) {
                l[e] = l[e].replace(/\s{2,}/g, " ").trim();
              }
              l[e] = t.options.valueProcessors ? a(t.options.valueProcessors, l[e], f) : l[e];
              if (Object.keys(l).length === 1 && e in l && !t.EXPLICIT_CHARKEY) {
                l = l[e];
              }
            }
            if (s(l)) {
              l = typeof t.options.emptyTag == "function" ? t.options.emptyTag() : t.options.emptyTag !== "" ? t.options.emptyTag : i;
            }
            if (t.options.validator != null) {
              m = "/" + function () {
                var t;
                var e;
                var n;
                n = [];
                t = 0;
                e = r.length;
                for (; t < e; t++) {
                  u = r[t];
                  n.push(u["#name"]);
                }
                return n;
              }().concat(f).join("/");
              (function () {
                var e;
                try {
                  l = t.options.validator(m, y && y[f], l);
                } catch (n) {
                  e = n;
                  return t.emit("error", e);
                }
              })();
            }
            if (t.options.explicitChildren && !t.options.mergeAttrs && typeof l == "object") {
              if (t.options.preserveChildrenOrder) {
                if (y) {
                  y[t.options.childkey] = y[t.options.childkey] || [];
                  p = {};
                  for (c in l) {
                    if (h.call(l, c)) {
                      o(p, c, l[c]);
                    }
                  }
                  y[t.options.childkey].push(p);
                  delete l["#name"];
                  if (Object.keys(l).length === 1 && e in l && !t.EXPLICIT_CHARKEY) {
                    l = l[e];
                  }
                }
              } else {
                u = {};
                if (t.options.attrkey in l) {
                  u[t.options.attrkey] = l[t.options.attrkey];
                  delete l[t.options.attrkey];
                }
                if (!t.options.charsAsChildren && t.options.charkey in l) {
                  u[t.options.charkey] = l[t.options.charkey];
                  delete l[t.options.charkey];
                }
                if (Object.getOwnPropertyNames(l).length > 0) {
                  u[t.options.childkey] = l;
                }
                l = u;
              }
            }
            if (r.length > 0) {
              return t.assignOrPush(y, f, l);
            } else {
              if (t.options.explicitRoot) {
                d = l;
                o(l = {}, f, d);
              }
              t.resultObject = l;
              t.saxParser.ended = true;
              return t.emit("end", t.resultObject);
            }
          };
        }(this);
        n = function (t) {
          return function (n) {
            var o;
            var i;
            if (i = r[r.length - 1]) {
              i[e] += n;
              if (t.options.explicitChildren && t.options.preserveChildrenOrder && t.options.charsAsChildren && (t.options.includeWhiteChars || n.replace(/\\n/g, "").trim() !== "")) {
                i[t.options.childkey] = i[t.options.childkey] || [];
                (o = {
                  "#name": "__text__"
                })[e] = n;
                if (t.options.normalize) {
                  o[e] = o[e].replace(/\s{2,}/g, " ").trim();
                }
                i[t.options.childkey].push(o);
              }
              return i;
            }
          };
        }(this);
        this.saxParser.ontext = n;
        return this.saxParser.oncdata = function (t) {
          var e;
          if (e = n(t)) {
            return e.cdata = true;
          }
        };
      };
      i.prototype.parseString = function (e, n) {
        var r;
        if (n != null && typeof n == "function") {
          this.on("end", function (t) {
            this.reset();
            return n(null, t);
          });
          this.on("error", function (t) {
            this.reset();
            return n(t);
          });
        }
        try {
          if ((e = e.toString()).trim() === "") {
            this.emit("end", null);
            return true;
          } else {
            e = t.stripBOM(e);
            if (this.options.async) {
              this.remaining = e;
              f(this.processAsync);
              return this.saxParser;
            } else {
              return this.saxParser.write(e).close();
            }
          }
        } catch (t) {
          r = t;
          if (!this.saxParser.errThrown && !this.saxParser.ended) {
            this.emit("error", r);
            return this.saxParser.errThrown = true;
          }
          if (this.saxParser.ended) {
            throw r;
          }
        }
      };
      i.prototype.parseStringPromise = function (t) {
        return new Promise((e = this, function (n, r) {
          return e.parseString(t, function (t, e) {
            if (t) {
              return r(t);
            } else {
              return n(e);
            }
          });
        }));
        var e;
      };
      return i;
    }(i);
    e.parseString = function (t, n, r) {
      var o;
      var i;
      if (r != null) {
        if (typeof r == "function") {
          o = r;
        }
        if (typeof n == "object") {
          i = n;
        }
      } else {
        if (typeof n == "function") {
          o = n;
        }
        i = {};
      }
      return new e.Parser(i).parseString(t, o);
    };
    e.parseStringPromise = function (t, n) {
      var r;
      if (typeof n == "object") {
        r = n;
      }
      return new e.Parser(r).parseStringPromise(t);
    };
  }).call(this);
}, function (t, e, n) {
  (function (t) {
    (function (e) {
      e.parser = function (t, e) {
        return new i(t, e);
      };
      e.SAXParser = i;
      e.SAXStream = a;
      e.createStream = function (t, e) {
        return new a(t, e);
      };
      e.MAX_BUFFER_LENGTH = 65536;
      var r;
      var o = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
      function i(t, n) {
        if (!(this instanceof i)) {
          return new i(t, n);
        }
        (function (t) {
          for (var e = 0, n = o.length; e < n; e++) {
            t[o[e]] = "";
          }
        })(this);
        this.q = this.c = "";
        this.bufferCheckPosition = e.MAX_BUFFER_LENGTH;
        this.opt = n || {};
        this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags;
        this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase";
        this.tags = [];
        this.closed = this.closedRoot = this.sawRoot = false;
        this.tag = this.error = null;
        this.strict = !!t;
        this.noscript = !!t || !!this.opt.noscript;
        this.state = x.BEGIN;
        this.strictEntities = this.opt.strictEntities;
        this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES);
        this.attribList = [];
        if (this.opt.xmlns) {
          this.ns = Object.create(u);
        }
        if (this.opt.unquotedAttributeValues === undefined) {
          this.opt.unquotedAttributeValues = !t;
        }
        this.trackPosition = this.opt.position !== false;
        if (this.trackPosition) {
          this.position = this.line = this.column = 0;
        }
        E(this, "onready");
      }
      e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
      Object.create ||= function (t) {
        function e() {}
        e.prototype = t;
        return new e();
      };
      Object.keys ||= function (t) {
        var e = [];
        for (var n in t) {
          if (t.hasOwnProperty(n)) {
            e.push(n);
          }
        }
        return e;
      };
      i.prototype = {
        end: function () {
          N(this);
        },
        write: function (t) {
          if (this.error) {
            throw this.error;
          }
          if (this.closed) {
            return A(this, "Cannot write after close. Assign an onready handler.");
          }
          if (t === null) {
            return N(this);
          }
          if (typeof t == "object") {
            t = t.toString();
          }
          var n = 0;
          var r = "";
          while (r = F(t, n++), this.c = r, r) {
            if (this.trackPosition) {
              this.position++;
              if (r === "\n") {
                this.line++;
                this.column = 0;
              } else {
                this.column++;
              }
            }
            switch (this.state) {
              case x.BEGIN:
                this.state = x.BEGIN_WHITESPACE;
                if (r === "﻿") {
                  continue;
                }
                M(this, r);
                continue;
              case x.BEGIN_WHITESPACE:
                M(this, r);
                continue;
              case x.TEXT:
                if (this.sawRoot && !this.closedRoot) {
                  var i = n - 1;
                  while (r && r !== "<" && r !== "&") {
                    if ((r = F(t, n++)) && this.trackPosition) {
                      this.position++;
                      if (r === "\n") {
                        this.line++;
                        this.column = 0;
                      } else {
                        this.column++;
                      }
                    }
                  }
                  this.textNode += t.substring(i, n - 1);
                }
                if (r !== "<" || this.sawRoot && this.closedRoot && !this.strict) {
                  if (!d(r) && (!this.sawRoot || !!this.closedRoot)) {
                    j(this, "Text data outside of root node.");
                  }
                  if (r === "&") {
                    this.state = x.TEXT_ENTITY;
                  } else {
                    this.textNode += r;
                  }
                } else {
                  this.state = x.OPEN_WAKA;
                  this.startTagPosition = this.position;
                }
                continue;
              case x.SCRIPT:
                if (r === "<") {
                  this.state = x.SCRIPT_ENDING;
                } else {
                  this.script += r;
                }
                continue;
              case x.SCRIPT_ENDING:
                if (r === "/") {
                  this.state = x.CLOSE_TAG;
                } else {
                  this.script += "<" + r;
                  this.state = x.SCRIPT;
                }
                continue;
              case x.OPEN_WAKA:
                if (r === "!") {
                  this.state = x.SGML_DECL;
                  this.sgmlDecl = "";
                } else if (d(r)) ;else if (g(f, r)) {
                  this.state = x.OPEN_TAG;
                  this.tagName = r;
                } else if (r === "/") {
                  this.state = x.CLOSE_TAG;
                  this.tagName = "";
                } else if (r === "?") {
                  this.state = x.PROC_INST;
                  this.procInstName = this.procInstBody = "";
                } else {
                  j(this, "Unencoded <");
                  if (this.startTagPosition + 1 < this.position) {
                    var s = this.position - this.startTagPosition;
                    r = new Array(s).join(" ") + r;
                  }
                  this.textNode += "<" + r;
                  this.state = x.TEXT;
                }
                continue;
              case x.SGML_DECL:
                if (this.sgmlDecl + r === "--") {
                  this.state = x.COMMENT;
                  this.comment = "";
                  this.sgmlDecl = "";
                  continue;
                }
                if (this.doctype && this.doctype !== true && this.sgmlDecl) {
                  this.state = x.DOCTYPE_DTD;
                  this.doctype += "<!" + this.sgmlDecl + r;
                  this.sgmlDecl = "";
                } else if ((this.sgmlDecl + r).toUpperCase() === "[CDATA[") {
                  O(this, "onopencdata");
                  this.state = x.CDATA;
                  this.sgmlDecl = "";
                  this.cdata = "";
                } else if ((this.sgmlDecl + r).toUpperCase() === "DOCTYPE") {
                  this.state = x.DOCTYPE;
                  if (this.doctype || this.sawRoot) {
                    j(this, "Inappropriately located doctype declaration");
                  }
                  this.doctype = "";
                  this.sgmlDecl = "";
                } else if (r === ">") {
                  O(this, "onsgmldeclaration", this.sgmlDecl);
                  this.sgmlDecl = "";
                  this.state = x.TEXT;
                } else if (y(r)) {
                  this.state = x.SGML_DECL_QUOTED;
                  this.sgmlDecl += r;
                } else {
                  this.sgmlDecl += r;
                }
                continue;
              case x.SGML_DECL_QUOTED:
                if (r === this.q) {
                  this.state = x.SGML_DECL;
                  this.q = "";
                }
                this.sgmlDecl += r;
                continue;
              case x.DOCTYPE:
                if (r === ">") {
                  this.state = x.TEXT;
                  O(this, "ondoctype", this.doctype);
                  this.doctype = true;
                } else {
                  this.doctype += r;
                  if (r === "[") {
                    this.state = x.DOCTYPE_DTD;
                  } else if (y(r)) {
                    this.state = x.DOCTYPE_QUOTED;
                    this.q = r;
                  }
                }
                continue;
              case x.DOCTYPE_QUOTED:
                this.doctype += r;
                if (r === this.q) {
                  this.q = "";
                  this.state = x.DOCTYPE;
                }
                continue;
              case x.DOCTYPE_DTD:
                if (r === "]") {
                  this.doctype += r;
                  this.state = x.DOCTYPE;
                } else if (r === "<") {
                  this.state = x.OPEN_WAKA;
                  this.startTagPosition = this.position;
                } else if (y(r)) {
                  this.doctype += r;
                  this.state = x.DOCTYPE_DTD_QUOTED;
                  this.q = r;
                } else {
                  this.doctype += r;
                }
                continue;
              case x.DOCTYPE_DTD_QUOTED:
                this.doctype += r;
                if (r === this.q) {
                  this.state = x.DOCTYPE_DTD;
                  this.q = "";
                }
                continue;
              case x.COMMENT:
                if (r === "-") {
                  this.state = x.COMMENT_ENDING;
                } else {
                  this.comment += r;
                }
                continue;
              case x.COMMENT_ENDING:
                if (r === "-") {
                  this.state = x.COMMENT_ENDED;
                  this.comment = I(this.opt, this.comment);
                  if (this.comment) {
                    O(this, "oncomment", this.comment);
                  }
                  this.comment = "";
                } else {
                  this.comment += "-" + r;
                  this.state = x.COMMENT;
                }
                continue;
              case x.COMMENT_ENDED:
                if (r !== ">") {
                  j(this, "Malformed comment");
                  this.comment += "--" + r;
                  this.state = x.COMMENT;
                } else if (this.doctype && this.doctype !== true) {
                  this.state = x.DOCTYPE_DTD;
                } else {
                  this.state = x.TEXT;
                }
                continue;
              case x.CDATA:
                if (r === "]") {
                  this.state = x.CDATA_ENDING;
                } else {
                  this.cdata += r;
                }
                continue;
              case x.CDATA_ENDING:
                if (r === "]") {
                  this.state = x.CDATA_ENDING_2;
                } else {
                  this.cdata += "]" + r;
                  this.state = x.CDATA;
                }
                continue;
              case x.CDATA_ENDING_2:
                if (r === ">") {
                  if (this.cdata) {
                    O(this, "oncdata", this.cdata);
                  }
                  O(this, "onclosecdata");
                  this.cdata = "";
                  this.state = x.TEXT;
                } else if (r === "]") {
                  this.cdata += "]";
                } else {
                  this.cdata += "]]" + r;
                  this.state = x.CDATA;
                }
                continue;
              case x.PROC_INST:
                if (r === "?") {
                  this.state = x.PROC_INST_ENDING;
                } else if (d(r)) {
                  this.state = x.PROC_INST_BODY;
                } else {
                  this.procInstName += r;
                }
                continue;
              case x.PROC_INST_BODY:
                if (!this.procInstBody && d(r)) {
                  continue;
                }
                if (r === "?") {
                  this.state = x.PROC_INST_ENDING;
                } else {
                  this.procInstBody += r;
                }
                continue;
              case x.PROC_INST_ENDING:
                if (r === ">") {
                  O(this, "onprocessinginstruction", {
                    name: this.procInstName,
                    body: this.procInstBody
                  });
                  this.procInstName = this.procInstBody = "";
                  this.state = x.TEXT;
                } else {
                  this.procInstBody += "?" + r;
                  this.state = x.PROC_INST_BODY;
                }
                continue;
              case x.OPEN_TAG:
                if (g(l, r)) {
                  this.tagName += r;
                } else {
                  D(this);
                  if (r === ">") {
                    k(this);
                  } else if (r === "/") {
                    this.state = x.OPEN_TAG_SLASH;
                  } else {
                    if (!d(r)) {
                      j(this, "Invalid character in tag name");
                    }
                    this.state = x.ATTRIB;
                  }
                }
                continue;
              case x.OPEN_TAG_SLASH:
                if (r === ">") {
                  k(this, true);
                  R(this);
                } else {
                  j(this, "Forward-slash in opening tag not followed by >");
                  this.state = x.ATTRIB;
                }
                continue;
              case x.ATTRIB:
                if (d(r)) {
                  continue;
                }
                if (r === ">") {
                  k(this);
                } else if (r === "/") {
                  this.state = x.OPEN_TAG_SLASH;
                } else if (g(f, r)) {
                  this.attribName = r;
                  this.attribValue = "";
                  this.state = x.ATTRIB_NAME;
                } else {
                  j(this, "Invalid attribute name");
                }
                continue;
              case x.ATTRIB_NAME:
                if (r === "=") {
                  this.state = x.ATTRIB_VALUE;
                } else if (r === ">") {
                  j(this, "Attribute without value");
                  this.attribValue = this.attribName;
                  P(this);
                  k(this);
                } else if (d(r)) {
                  this.state = x.ATTRIB_NAME_SAW_WHITE;
                } else if (g(l, r)) {
                  this.attribName += r;
                } else {
                  j(this, "Invalid attribute name");
                }
                continue;
              case x.ATTRIB_NAME_SAW_WHITE:
                if (r === "=") {
                  this.state = x.ATTRIB_VALUE;
                } else {
                  if (d(r)) {
                    continue;
                  }
                  j(this, "Attribute without value");
                  this.tag.attributes[this.attribName] = "";
                  this.attribValue = "";
                  O(this, "onattribute", {
                    name: this.attribName,
                    value: ""
                  });
                  this.attribName = "";
                  if (r === ">") {
                    k(this);
                  } else if (g(f, r)) {
                    this.attribName = r;
                    this.state = x.ATTRIB_NAME;
                  } else {
                    j(this, "Invalid attribute name");
                    this.state = x.ATTRIB;
                  }
                }
                continue;
              case x.ATTRIB_VALUE:
                if (d(r)) {
                  continue;
                }
                if (y(r)) {
                  this.q = r;
                  this.state = x.ATTRIB_VALUE_QUOTED;
                } else {
                  if (!this.opt.unquotedAttributeValues) {
                    A(this, "Unquoted attribute value");
                  }
                  this.state = x.ATTRIB_VALUE_UNQUOTED;
                  this.attribValue = r;
                }
                continue;
              case x.ATTRIB_VALUE_QUOTED:
                if (r !== this.q) {
                  if (r === "&") {
                    this.state = x.ATTRIB_VALUE_ENTITY_Q;
                  } else {
                    this.attribValue += r;
                  }
                  continue;
                }
                P(this);
                this.q = "";
                this.state = x.ATTRIB_VALUE_CLOSED;
                continue;
              case x.ATTRIB_VALUE_CLOSED:
                if (d(r)) {
                  this.state = x.ATTRIB;
                } else if (r === ">") {
                  k(this);
                } else if (r === "/") {
                  this.state = x.OPEN_TAG_SLASH;
                } else if (g(f, r)) {
                  j(this, "No whitespace between attributes");
                  this.attribName = r;
                  this.attribValue = "";
                  this.state = x.ATTRIB_NAME;
                } else {
                  j(this, "Invalid attribute name");
                }
                continue;
              case x.ATTRIB_VALUE_UNQUOTED:
                if (!m(r)) {
                  if (r === "&") {
                    this.state = x.ATTRIB_VALUE_ENTITY_U;
                  } else {
                    this.attribValue += r;
                  }
                  continue;
                }
                P(this);
                if (r === ">") {
                  k(this);
                } else {
                  this.state = x.ATTRIB;
                }
                continue;
              case x.CLOSE_TAG:
                if (this.tagName) {
                  if (r === ">") {
                    R(this);
                  } else if (g(l, r)) {
                    this.tagName += r;
                  } else if (this.script) {
                    this.script += "</" + this.tagName;
                    this.tagName = "";
                    this.state = x.SCRIPT;
                  } else {
                    if (!d(r)) {
                      j(this, "Invalid tagname in closing tag");
                    }
                    this.state = x.CLOSE_TAG_SAW_WHITE;
                  }
                } else {
                  if (d(r)) {
                    continue;
                  }
                  if (v(f, r)) {
                    if (this.script) {
                      this.script += "</" + r;
                      this.state = x.SCRIPT;
                    } else {
                      j(this, "Invalid tagname in closing tag.");
                    }
                  } else {
                    this.tagName = r;
                  }
                }
                continue;
              case x.CLOSE_TAG_SAW_WHITE:
                if (d(r)) {
                  continue;
                }
                if (r === ">") {
                  R(this);
                } else {
                  j(this, "Invalid characters in closing tag");
                }
                continue;
              case x.TEXT_ENTITY:
              case x.ATTRIB_VALUE_ENTITY_Q:
              case x.ATTRIB_VALUE_ENTITY_U:
                var a;
                var c;
                switch (this.state) {
                  case x.TEXT_ENTITY:
                    a = x.TEXT;
                    c = "textNode";
                    break;
                  case x.ATTRIB_VALUE_ENTITY_Q:
                    a = x.ATTRIB_VALUE_QUOTED;
                    c = "attribValue";
                    break;
                  case x.ATTRIB_VALUE_ENTITY_U:
                    a = x.ATTRIB_VALUE_UNQUOTED;
                    c = "attribValue";
                }
                if (r === ";") {
                  var u = L(this);
                  if (this.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(u)) {
                    this.entity = "";
                    this.state = a;
                    this.write(u);
                  } else {
                    this[c] += u;
                    this.entity = "";
                    this.state = a;
                  }
                } else if (g(this.entity.length ? p : h, r)) {
                  this.entity += r;
                } else {
                  j(this, "Invalid character in entity name");
                  this[c] += "&" + this.entity + r;
                  this.entity = "";
                  this.state = a;
                }
                continue;
              default:
                throw new Error(this, "Unknown state: " + this.state);
            }
          }
          if (this.position >= this.bufferCheckPosition) {
            (function (t) {
              var n = Math.max(e.MAX_BUFFER_LENGTH, 10);
              var r = 0;
              for (var i = 0, s = o.length; i < s; i++) {
                var a = t[o[i]].length;
                if (a > n) {
                  switch (o[i]) {
                    case "textNode":
                      S(t);
                      break;
                    case "cdata":
                      O(t, "oncdata", t.cdata);
                      t.cdata = "";
                      break;
                    case "script":
                      O(t, "onscript", t.script);
                      t.script = "";
                      break;
                    default:
                      A(t, "Max buffer length exceeded: " + o[i]);
                  }
                }
                r = Math.max(r, a);
              }
              var c = e.MAX_BUFFER_LENGTH - r;
              t.bufferCheckPosition = c + t.position;
            })(this);
          }
          return this;
        }
        /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */,
        resume: function () {
          this.error = null;
          return this;
        },
        close: function () {
          return this.write(null);
        },
        flush: function () {
          var t;
          S(t = this);
          if (t.cdata !== "") {
            O(t, "oncdata", t.cdata);
            t.cdata = "";
          }
          if (t.script !== "") {
            O(t, "onscript", t.script);
            t.script = "";
          }
        }
      };
      try {
        r = n(318).Stream;
      } catch (t) {
        r = function () {};
      }
      r ||= function () {};
      var s = e.EVENTS.filter(function (t) {
        return t !== "error" && t !== "end";
      });
      function a(t, e) {
        if (!(this instanceof a)) {
          return new a(t, e);
        }
        r.apply(this);
        this._parser = new i(t, e);
        this.writable = true;
        this.readable = true;
        var n = this;
        this._parser.onend = function () {
          n.emit("end");
        };
        this._parser.onerror = function (t) {
          n.emit("error", t);
          n._parser.error = null;
        };
        this._decoder = null;
        s.forEach(function (t) {
          Object.defineProperty(n, "on" + t, {
            get: function () {
              return n._parser["on" + t];
            },
            set: function (e) {
              if (!e) {
                n.removeAllListeners(t);
                n._parser["on" + t] = e;
                return e;
              }
              n.on(t, e);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      a.prototype = Object.create(r.prototype, {
        constructor: {
          value: a
        }
      });
      a.prototype.write = function (e) {
        if (typeof t == "function" && typeof t.isBuffer == "function" && t.isBuffer(e)) {
          if (!this._decoder) {
            var r = n(139).StringDecoder;
            this._decoder = new r("utf8");
          }
          e = this._decoder.write(e);
        }
        this._parser.write(e.toString());
        this.emit("data", e);
        return true;
      };
      a.prototype.end = function (t) {
        if (t && t.length) {
          this.write(t);
        }
        this._parser.end();
        return true;
      };
      a.prototype.on = function (t, e) {
        var n = this;
        if (!n._parser["on" + t] && s.indexOf(t) !== -1) {
          n._parser["on" + t] = function () {
            var e = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            e.splice(0, 0, t);
            n.emit.apply(n, e);
          };
        }
        return r.prototype.on.call(n, t, e);
      };
      var c = "http://www.w3.org/XML/1998/namespace";
      var u = {
        xml: c,
        xmlns: "http://www.w3.org/2000/xmlns/"
      };
      var f = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var h = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function d(t) {
        return t === " " || t === "\n" || t === "\r" || t === "\t";
      }
      function y(t) {
        return t === "\"" || t === "'";
      }
      function m(t) {
        return t === ">" || d(t);
      }
      function g(t, e) {
        return t.test(e);
      }
      function v(t, e) {
        return !g(t, e);
      }
      var b;
      var w;
      var _;
      var x = 0;
      e.STATE = {
        BEGIN: x++,
        BEGIN_WHITESPACE: x++,
        TEXT: x++,
        TEXT_ENTITY: x++,
        OPEN_WAKA: x++,
        SGML_DECL: x++,
        SGML_DECL_QUOTED: x++,
        DOCTYPE: x++,
        DOCTYPE_QUOTED: x++,
        DOCTYPE_DTD: x++,
        DOCTYPE_DTD_QUOTED: x++,
        COMMENT_STARTING: x++,
        COMMENT: x++,
        COMMENT_ENDING: x++,
        COMMENT_ENDED: x++,
        CDATA: x++,
        CDATA_ENDING: x++,
        CDATA_ENDING_2: x++,
        PROC_INST: x++,
        PROC_INST_BODY: x++,
        PROC_INST_ENDING: x++,
        OPEN_TAG: x++,
        OPEN_TAG_SLASH: x++,
        ATTRIB: x++,
        ATTRIB_NAME: x++,
        ATTRIB_NAME_SAW_WHITE: x++,
        ATTRIB_VALUE: x++,
        ATTRIB_VALUE_QUOTED: x++,
        ATTRIB_VALUE_CLOSED: x++,
        ATTRIB_VALUE_UNQUOTED: x++,
        ATTRIB_VALUE_ENTITY_Q: x++,
        ATTRIB_VALUE_ENTITY_U: x++,
        CLOSE_TAG: x++,
        CLOSE_TAG_SAW_WHITE: x++,
        SCRIPT: x++,
        SCRIPT_ENDING: x++
      };
      e.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: "\"",
        apos: "'"
      };
      e.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: "\"",
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      };
      Object.keys(e.ENTITIES).forEach(function (t) {
        var n = e.ENTITIES[t];
        var r = typeof n == "number" ? String.fromCharCode(n) : n;
        e.ENTITIES[t] = r;
      });
      for (var T in e.STATE) {
        e.STATE[e.STATE[T]] = T;
      }
      function E(t, e, n) {
        if (t[e]) {
          t[e](n);
        }
      }
      function O(t, e, n) {
        if (t.textNode) {
          S(t);
        }
        E(t, e, n);
      }
      function S(t) {
        t.textNode = I(t.opt, t.textNode);
        if (t.textNode) {
          E(t, "ontext", t.textNode);
        }
        t.textNode = "";
      }
      function I(t, e) {
        if (t.trim) {
          e = e.trim();
        }
        if (t.normalize) {
          e = e.replace(/\s+/g, " ");
        }
        return e;
      }
      function A(t, e) {
        S(t);
        if (t.trackPosition) {
          e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c;
        }
        e = new Error(e);
        t.error = e;
        E(t, "onerror", e);
        return t;
      }
      function N(t) {
        if (t.sawRoot && !t.closedRoot) {
          j(t, "Unclosed root tag");
        }
        if (t.state !== x.BEGIN && t.state !== x.BEGIN_WHITESPACE && t.state !== x.TEXT) {
          A(t, "Unexpected end");
        }
        S(t);
        t.c = "";
        t.closed = true;
        E(t, "onend");
        i.call(t, t.strict, t.opt);
        return t;
      }
      function j(t, e) {
        if (typeof t != "object" || !(t instanceof i)) {
          throw new Error("bad call to strictFail");
        }
        if (t.strict) {
          A(t, e);
        }
      }
      function D(t) {
        if (!t.strict) {
          t.tagName = t.tagName[t.looseCase]();
        }
        var e = t.tags[t.tags.length - 1] || t;
        var n = t.tag = {
          name: t.tagName,
          attributes: {}
        };
        if (t.opt.xmlns) {
          n.ns = e.ns;
        }
        t.attribList.length = 0;
        O(t, "onopentagstart", n);
      }
      function C(t, e) {
        var n = t.indexOf(":") < 0 ? ["", t] : t.split(":");
        var r = n[0];
        var o = n[1];
        if (e && t === "xmlns") {
          r = "xmlns";
          o = "";
        }
        return {
          prefix: r,
          local: o
        };
      }
      function P(t) {
        if (!t.strict) {
          t.attribName = t.attribName[t.looseCase]();
        }
        if (t.attribList.indexOf(t.attribName) !== -1 || t.tag.attributes.hasOwnProperty(t.attribName)) {
          t.attribName = t.attribValue = "";
        } else {
          if (t.opt.xmlns) {
            var e = C(t.attribName, true);
            var n = e.prefix;
            var r = e.local;
            if (n === "xmlns") {
              if (r === "xml" && t.attribValue !== c) {
                j(t, "xml: prefix must be bound to " + c + "\nActual: " + t.attribValue);
              } else if (r === "xmlns" && t.attribValue !== "http://www.w3.org/2000/xmlns/") {
                j(t, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + t.attribValue);
              } else {
                var o = t.tag;
                var i = t.tags[t.tags.length - 1] || t;
                if (o.ns === i.ns) {
                  o.ns = Object.create(i.ns);
                }
                o.ns[r] = t.attribValue;
              }
            }
            t.attribList.push([t.attribName, t.attribValue]);
          } else {
            t.tag.attributes[t.attribName] = t.attribValue;
            O(t, "onattribute", {
              name: t.attribName,
              value: t.attribValue
            });
          }
          t.attribName = t.attribValue = "";
        }
      }
      function k(t, e) {
        if (t.opt.xmlns) {
          var n = t.tag;
          var r = C(t.tagName);
          n.prefix = r.prefix;
          n.local = r.local;
          n.uri = n.ns[r.prefix] || "";
          if (n.prefix && !n.uri) {
            j(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName));
            n.uri = r.prefix;
          }
          var o = t.tags[t.tags.length - 1] || t;
          if (n.ns && o.ns !== n.ns) {
            Object.keys(n.ns).forEach(function (e) {
              O(t, "onopennamespace", {
                prefix: e,
                uri: n.ns[e]
              });
            });
          }
          for (var i = 0, s = t.attribList.length; i < s; i++) {
            var a = t.attribList[i];
            var c = a[0];
            var u = a[1];
            var f = C(c, true);
            var l = f.prefix;
            var h = f.local;
            var p = l === "" ? "" : n.ns[l] || "";
            var d = {
              name: c,
              value: u,
              prefix: l,
              local: h,
              uri: p
            };
            if (l && l !== "xmlns" && !p) {
              j(t, "Unbound namespace prefix: " + JSON.stringify(l));
              d.uri = l;
            }
            t.tag.attributes[c] = d;
            O(t, "onattribute", d);
          }
          t.attribList.length = 0;
        }
        t.tag.isSelfClosing = !!e;
        t.sawRoot = true;
        t.tags.push(t.tag);
        O(t, "onopentag", t.tag);
        if (!e) {
          if (t.noscript || t.tagName.toLowerCase() !== "script") {
            t.state = x.TEXT;
          } else {
            t.state = x.SCRIPT;
          }
          t.tag = null;
          t.tagName = "";
        }
        t.attribName = t.attribValue = "";
        t.attribList.length = 0;
      }
      function R(t) {
        if (!t.tagName) {
          j(t, "Weird empty close tag.");
          t.textNode += "</>";
          t.state = x.TEXT;
          return;
        }
        if (t.script) {
          if (t.tagName !== "script") {
            t.script += "</" + t.tagName + ">";
            t.tagName = "";
            t.state = x.SCRIPT;
            return;
          }
          O(t, "onscript", t.script);
          t.script = "";
        }
        var e = t.tags.length;
        var n = t.tagName;
        if (!t.strict) {
          n = n[t.looseCase]();
        }
        var r = n;
        while (e--) {
          if (t.tags[e].name === r) {
            break;
          }
          j(t, "Unexpected close tag");
        }
        if (e < 0) {
          j(t, "Unmatched closing tag: " + t.tagName);
          t.textNode += "</" + t.tagName + ">";
          t.state = x.TEXT;
          return;
        }
        t.tagName = n;
        for (var o = t.tags.length; o-- > e;) {
          var i = t.tag = t.tags.pop();
          t.tagName = t.tag.name;
          O(t, "onclosetag", t.tagName);
          var s = {};
          for (var a in i.ns) {
            s[a] = i.ns[a];
          }
          var c = t.tags[t.tags.length - 1] || t;
          if (t.opt.xmlns && i.ns !== c.ns) {
            Object.keys(i.ns).forEach(function (e) {
              var n = i.ns[e];
              O(t, "onclosenamespace", {
                prefix: e,
                uri: n
              });
            });
          }
        }
        if (e === 0) {
          t.closedRoot = true;
        }
        t.tagName = t.attribValue = t.attribName = "";
        t.attribList.length = 0;
        t.state = x.TEXT;
      }
      function L(t) {
        var e;
        var n = t.entity;
        var r = n.toLowerCase();
        var o = "";
        if (t.ENTITIES[n]) {
          return t.ENTITIES[n];
        } else if (t.ENTITIES[r]) {
          return t.ENTITIES[r];
        } else {
          if ((n = r).charAt(0) === "#") {
            if (n.charAt(1) === "x") {
              n = n.slice(2);
              o = (e = parseInt(n, 16)).toString(16);
            } else {
              n = n.slice(1);
              o = (e = parseInt(n, 10)).toString(10);
            }
          }
          n = n.replace(/^0+/, "");
          if (isNaN(e) || o.toLowerCase() !== n) {
            j(t, "Invalid character entity");
            return "&" + t.entity + ";";
          } else {
            return String.fromCodePoint(e);
          }
        }
      }
      function M(t, e) {
        if (e === "<") {
          t.state = x.OPEN_WAKA;
          t.startTagPosition = t.position;
        } else if (!d(e)) {
          j(t, "Non-whitespace before first tag.");
          t.textNode = e;
          t.state = x.TEXT;
        }
      }
      function F(t, e) {
        var n = "";
        if (e < t.length) {
          n = t.charAt(e);
        }
        return n;
      }
      x = e.STATE;
      if (!String.fromCodePoint) {
        b = String.fromCharCode;
        w = Math.floor;
        _ = function () {
          var t;
          var e;
          var n = 16384;
          var r = [];
          var o = -1;
          var i = arguments.length;
          if (!i) {
            return "";
          }
          var s = "";
          while (++o < i) {
            var a = Number(arguments[o]);
            if (!isFinite(a) || a < 0 || a > 1114111 || w(a) !== a) {
              throw RangeError("Invalid code point: " + a);
            }
            if (a <= 65535) {
              r.push(a);
            } else {
              t = 55296 + ((a -= 65536) >> 10);
              e = a % 1024 + 56320;
              r.push(t, e);
            }
            if (o + 1 === i || r.length > n) {
              s += b.apply(null, r);
              r.length = 0;
            }
          }
          return s;
        };
        if (Object.defineProperty) {
          Object.defineProperty(String, "fromCodePoint", {
            value: _,
            configurable: true,
            writable: true
          });
        } else {
          String.fromCodePoint = _;
        }
      }
    })(e);
  }).call(this, n(68).Buffer);
}, function (t, e, n) {
  "use strict";

  e.byteLength = function (t) {
    var e = u(t);
    var n = e[0];
    var r = e[1];
    return (n + r) * 3 / 4 - r;
  };
  e.toByteArray = function (t) {
    var e;
    var n;
    var r = u(t);
    var s = r[0];
    var a = r[1];
    var c = new i(function (t, e, n) {
      return (e + n) * 3 / 4 - n;
    }(0, s, a));
    var f = 0;
    var l = a > 0 ? s - 4 : s;
    for (n = 0; n < l; n += 4) {
      e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)];
      c[f++] = e >> 16 & 255;
      c[f++] = e >> 8 & 255;
      c[f++] = e & 255;
    }
    if (a === 2) {
      e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4;
      c[f++] = e & 255;
    }
    if (a === 1) {
      e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2;
      c[f++] = e >> 8 & 255;
      c[f++] = e & 255;
    }
    return c;
  };
  e.fromByteArray = function (t) {
    var e;
    var n = t.length;
    var o = n % 3;
    var i = [];
    for (var s = 0, a = n - o; s < a; s += 16383) {
      i.push(f(t, s, s + 16383 > a ? a : s + 16383));
    }
    if (o === 1) {
      e = t[n - 1];
      i.push(r[e >> 2] + r[e << 4 & 63] + "==");
    } else if (o === 2) {
      e = (t[n - 2] << 8) + t[n - 1];
      i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=");
    }
    return i.join("");
  };
  var r = [];
  var o = [];
  var i = typeof Uint8Array != "undefined" ? Uint8Array : Array;
  var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var a = 0, c = s.length; a < c; ++a) {
    r[a] = s[a];
    o[s.charCodeAt(a)] = a;
  }
  function u(t) {
    var e = t.length;
    if (e % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var n = t.indexOf("=");
    if (n === -1) {
      n = e;
    }
    return [n, n === e ? 0 : 4 - n % 4];
  }
  function f(t, e, n) {
    var o;
    var i;
    var s = [];
    for (var a = e; a < n; a += 3) {
      o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (t[a + 2] & 255);
      s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[i & 63]);
    }
    return s.join("");
  }
  o["-".charCodeAt(0)] = 62;
  o["_".charCodeAt(0)] = 63;
}, function (t, e) {
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  e.read = function (t, e, n, r, o) {
    var i;
    var s;
    var a = o * 8 - r - 1;
    var c = (1 << a) - 1;
    var u = c >> 1;
    var f = -7;
    var l = n ? o - 1 : 0;
    var h = n ? -1 : 1;
    var p = t[e + l];
    l += h;
    i = p & (1 << -f) - 1;
    p >>= -f;
    f += a;
    for (; f > 0; f -= 8) {
      i = i * 256 + t[e + l];
      l += h;
    }
    s = i & (1 << -f) - 1;
    i >>= -f;
    f += r;
    for (; f > 0; f -= 8) {
      s = s * 256 + t[e + l];
      l += h;
    }
    if (i === 0) {
      i = 1 - u;
    } else {
      if (i === c) {
        if (s) {
          return NaN;
        } else {
          return (p ? -1 : 1) * Infinity;
        }
      }
      s += Math.pow(2, r);
      i -= u;
    }
    return (p ? -1 : 1) * s * Math.pow(2, i - r);
  };
  e.write = function (t, e, n, r, o, i) {
    var s;
    var a;
    var c;
    var u = i * 8 - o - 1;
    var f = (1 << u) - 1;
    var l = f >> 1;
    var h = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var p = r ? 0 : i - 1;
    var d = r ? 1 : -1;
    var y = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    e = Math.abs(e);
    if (isNaN(e) || e === Infinity) {
      a = isNaN(e) ? 1 : 0;
      s = f;
    } else {
      s = Math.floor(Math.log(e) / Math.LN2);
      if (e * (c = Math.pow(2, -s)) < 1) {
        s--;
        c *= 2;
      }
      if ((e += s + l >= 1 ? h / c : h * Math.pow(2, 1 - l)) * c >= 2) {
        s++;
        c /= 2;
      }
      if (s + l >= f) {
        a = 0;
        s = f;
      } else if (s + l >= 1) {
        a = (e * c - 1) * Math.pow(2, o);
        s += l;
      } else {
        a = e * Math.pow(2, l - 1) * Math.pow(2, o);
        s = 0;
      }
    }
    for (; o >= 8; o -= 8) {
      t[n + p] = a & 255;
      p += d;
      a /= 256;
    }
    s = s << o | a;
    u += o;
    for (; u > 0; u -= 8) {
      t[n + p] = s & 255;
      p += d;
      s /= 256;
    }
    t[n + p - d] |= y * 128;
  };
}, function (t, e, n) {
  t.exports = o;
  var r = n(69).EventEmitter;
  function o() {
    r.call(this);
  }
  n(46)(o, r);
  o.Readable = n(136);
  o.Writable = n(326);
  o.Duplex = n(327);
  o.Transform = n(328);
  o.PassThrough = n(329);
  o.Stream = o;
  o.prototype.pipe = function (t, e) {
    var n = this;
    function o(e) {
      if (t.writable && t.write(e) === false && n.pause) {
        n.pause();
      }
    }
    function i() {
      if (n.readable && n.resume) {
        n.resume();
      }
    }
    n.on("data", o);
    t.on("drain", i);
    if (!t._isStdio && (!e || e.end !== false)) {
      n.on("end", a);
      n.on("close", c);
    }
    var s = false;
    function a() {
      if (!s) {
        s = true;
        t.end();
      }
    }
    function c() {
      if (!s) {
        s = true;
        if (typeof t.destroy == "function") {
          t.destroy();
        }
      }
    }
    function u(t) {
      f();
      if (r.listenerCount(this, "error") === 0) {
        throw t;
      }
    }
    function f() {
      n.removeListener("data", o);
      t.removeListener("drain", i);
      n.removeListener("end", a);
      n.removeListener("close", c);
      n.removeListener("error", u);
      t.removeListener("error", u);
      n.removeListener("end", f);
      n.removeListener("close", f);
      t.removeListener("close", f);
    }
    n.on("error", u);
    t.on("error", u);
    n.on("end", f);
    n.on("close", f);
    t.on("close", f);
    t.emit("pipe", n);
    return t;
  };
}, function (t, e) {}, function (t, e, n) {
  "use strict";

  var r = n(137).Buffer;
  var o = n(321);
  t.exports = function () {
    function t() {
      (function (t, e) {
        if (!(t instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, t);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    t.prototype.push = function (t) {
      var e = {
        data: t,
        next: null
      };
      if (this.length > 0) {
        this.tail.next = e;
      } else {
        this.head = e;
      }
      this.tail = e;
      ++this.length;
    };
    t.prototype.unshift = function (t) {
      var e = {
        data: t,
        next: this.head
      };
      if (this.length === 0) {
        this.tail = e;
      }
      this.head = e;
      ++this.length;
    };
    t.prototype.shift = function () {
      if (this.length !== 0) {
        var t = this.head.data;
        if (this.length === 1) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        --this.length;
        return t;
      }
    };
    t.prototype.clear = function () {
      this.head = this.tail = null;
      this.length = 0;
    };
    t.prototype.join = function (t) {
      if (this.length === 0) {
        return "";
      }
      for (var e = this.head, n = "" + e.data; e = e.next;) {
        n += t + e.data;
      }
      return n;
    };
    t.prototype.concat = function (t) {
      if (this.length === 0) {
        return r.alloc(0);
      }
      if (this.length === 1) {
        return this.head.data;
      }
      var e;
      var n;
      var o;
      var i = r.allocUnsafe(t >>> 0);
      for (var s = this.head, a = 0; s;) {
        e = s.data;
        n = i;
        o = a;
        e.copy(n, o);
        a += s.data.length;
        s = s.next;
      }
      return i;
    };
    return t;
  }();
  if (o && o.inspect && o.inspect.custom) {
    t.exports.prototype[o.inspect.custom] = function () {
      var t = o.inspect({
        length: this.length
      });
      return this.constructor.name + " " + t;
    };
  }
}, function (t, e) {}, function (t, e, n) {
  (function (t, e) {
    (function (t, n) {
      "use strict";

      if (!t.setImmediate) {
        var r;
        var o;
        var i;
        var s;
        var a;
        var c = 1;
        var u = {};
        var f = false;
        var l = t.document;
        var h = Object.getPrototypeOf && Object.getPrototypeOf(t);
        h = h && h.setTimeout ? h : t;
        if ({}.toString.call(t.process) === "[object process]") {
          r = function (t) {
            e.nextTick(function () {
              d(t);
            });
          };
        } else if (!function () {
          if (t.postMessage && !t.importScripts) {
            var e = true;
            var n = t.onmessage;
            t.onmessage = function () {
              e = false;
            };
            t.postMessage("", "*");
            t.onmessage = n;
            return e;
          }
        }()) {
          if (t.MessageChannel) {
            (i = new MessageChannel()).port1.onmessage = function (t) {
              d(t.data);
            };
            r = function (t) {
              i.port2.postMessage(t);
            };
          } else if (l && "onreadystatechange" in l.createElement("script")) {
            o = l.documentElement;
            r = function (t) {
              var e = l.createElement("script");
              e.onreadystatechange = function () {
                d(t);
                e.onreadystatechange = null;
                o.removeChild(e);
                e = null;
              };
              o.appendChild(e);
            };
          } else {
            r = function (t) {
              setTimeout(d, 0, t);
            };
          }
        } else {
          s = "setImmediate$" + Math.random() + "$";
          a = function (e) {
            if (e.source === t && typeof e.data == "string" && e.data.indexOf(s) === 0) {
              d(+e.data.slice(s.length));
            }
          };
          if (t.addEventListener) {
            t.addEventListener("message", a, false);
          } else {
            t.attachEvent("onmessage", a);
          }
          r = function (e) {
            t.postMessage(s + e, "*");
          };
        }
        h.setImmediate = function (t) {
          if (typeof t != "function") {
            t = new Function("" + t);
          }
          for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
            e[n] = arguments[n + 1];
          }
          var o = {
            callback: t,
            args: e
          };
          u[c] = o;
          r(c);
          return c++;
        };
        h.clearImmediate = p;
      }
      function p(t) {
        delete u[t];
      }
      function d(t) {
        if (f) {
          setTimeout(d, 0, t);
        } else {
          var e = u[t];
          if (e) {
            f = true;
            try {
              (function (t) {
                var e = t.callback;
                var n = t.args;
                switch (n.length) {
                  case 0:
                    e();
                    break;
                  case 1:
                    e(n[0]);
                    break;
                  case 2:
                    e(n[0], n[1]);
                    break;
                  case 3:
                    e(n[0], n[1], n[2]);
                    break;
                  default:
                    e.apply(undefined, n);
                }
              })(e);
            } finally {
              p(t);
              f = false;
            }
          }
        }
      }
    })(typeof self == "undefined" ? t === undefined ? this : t : self);
  }).call(this, n(14), n(51));
}, function (t, e, n) {
  (function (e) {
    function n(t) {
      try {
        if (!e.localStorage) {
          return false;
        }
      } catch (t) {
        return false;
      }
      var n = e.localStorage[t];
      return n != null && String(n).toLowerCase() === "true";
    }
    t.exports = function (t, e) {
      if (n("noDeprecation")) {
        return t;
      }
      var r = false;
      return function () {
        if (!r) {
          if (n("throwDeprecation")) {
            throw new Error(e);
          }
          if (n("traceDeprecation")) {
            console.trace(e);
          } else {
            console.warn(e);
          }
          r = true;
        }
        return t.apply(this, arguments);
      };
    };
  }).call(this, n(14));
}, function (t, e, n) {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var r = n(68);
  var o = r.Buffer;
  function i(t, e) {
    for (var n in t) {
      e[n] = t[n];
    }
  }
  function s(t, e, n) {
    return o(t, e, n);
  }
  if (o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow) {
    t.exports = r;
  } else {
    i(r, e);
    e.Buffer = s;
  }
  s.prototype = Object.create(o.prototype);
  i(o, s);
  s.from = function (t, e, n) {
    if (typeof t == "number") {
      throw new TypeError("Argument must not be a number");
    }
    return o(t, e, n);
  };
  s.alloc = function (t, e, n) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    var r = o(t);
    if (e !== undefined) {
      if (typeof n == "string") {
        r.fill(e, n);
      } else {
        r.fill(e);
      }
    } else {
      r.fill(0);
    }
    return r;
  };
  s.allocUnsafe = function (t) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    return o(t);
  };
  s.allocUnsafeSlow = function (t) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    return r.SlowBuffer(t);
  };
}, function (t, e, n) {
  "use strict";

  t.exports = i;
  var r = n(200);
  var o = Object.create(n(52));
  function i(t) {
    if (!(this instanceof i)) {
      return new i(t);
    }
    r.call(this, t);
  }
  o.inherits = n(46);
  o.inherits(i, r);
  i.prototype._transform = function (t, e, n) {
    n(null, t);
  };
}, function (t, e, n) {
  t.exports = n(138);
}, function (t, e, n) {
  t.exports = n(34);
}, function (t, e, n) {
  t.exports = n(136).Transform;
}, function (t, e, n) {
  t.exports = n(136).PassThrough;
}, function (t, e) {
  (function () {
    "use strict";

    e.stripBOM = function (t) {
      if (t[0] === "﻿") {
        return t.substring(1);
      } else {
        return t;
      }
    };
  }).call(this);
}, function (t, e, n) {
  var r = n(332);
  n(353);
  n(354);
  n(355);
  n(356);
  t.exports = r;
}, function (t, e, n) {
  n(202);
  n(337);
  n(338);
  n(207);
  n(208);
  n(347);
  n(348);
  n(349);
  var r = n(63);
  t.exports = r.Promise;
}, function (t, e, n) {
  var r = n(29);
  t.exports = function (t) {
    if (!r(t) && t !== null) {
      throw TypeError("Can't set " + String(t) + " as a prototype");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(9);
  var o = n(45);
  var i = r("iterator");
  var s = Array.prototype;
  t.exports = function (t) {
    return t !== undefined && (o.Array === t || s[i] === t);
  };
}, function (t, e, n) {
  var r = n(119);
  var o = n(45);
  var i = n(9)("iterator");
  t.exports = function (t) {
    if (t != null) {
      return t[i] || t["@@iterator"] || o[r(t)];
    }
  };
}, function (t, e, n) {
  var r = n(20);
  t.exports = function (t) {
    var e = t.return;
    if (e !== undefined) {
      return r(e.call(t)).value;
    }
  };
}, function (t, e) {}, function (t, e, n) {
  "use strict";

  var r;
  var o;
  var i;
  var s;
  var a = n(28);
  var c = n(43);
  var u = n(7);
  var f = n(44);
  var l = n(203);
  var h = n(72);
  var p = n(339);
  var d = n(140);
  var y = n(117);
  var m = n(340);
  var g = n(29);
  var v = n(33);
  var b = n(341);
  var w = n(187);
  var _ = n(71);
  var x = n(342);
  var T = n(120);
  var E = n(204).set;
  var O = n(343);
  var S = n(206);
  var I = n(345);
  var A = n(53);
  var N = n(73);
  var j = n(65);
  var D = n(176);
  var C = n(9);
  var P = n(346);
  var k = n(141);
  var R = n(182);
  var L = C("species");
  var M = "Promise";
  var F = j.get;
  var B = j.set;
  var U = j.getterFor(M);
  var q = l && l.prototype;
  var W = l;
  var V = q;
  var z = u.TypeError;
  var Y = u.document;
  var G = u.process;
  var H = A.f;
  var K = H;
  var $ = !!Y && !!Y.createEvent && !!u.dispatchEvent;
  var X = typeof PromiseRejectionEvent == "function";
  var Q = false;
  var J = D(M, function () {
    var t = w(W);
    var e = t !== String(W);
    if (!e && R === 66) {
      return true;
    }
    if (c && !V.finally) {
      return true;
    }
    if (R >= 51 && /native code/.test(t)) {
      return false;
    }
    var n = new W(function (t) {
      t(1);
    });
    function r(t) {
      t(function () {}, function () {});
    }
    (n.constructor = {})[L] = r;
    return !(Q = n.then(function () {}) instanceof r) || !e && P && !X;
  });
  var Z = J || !x(function (t) {
    W.all(t).catch(function () {});
  });
  function tt(t) {
    var e;
    return !!g(t) && typeof (e = t.then) == "function" && e;
  }
  function et(t, e) {
    if (!t.notified) {
      t.notified = true;
      var n = t.reactions;
      O(function () {
        var r = t.value;
        for (var o = t.state == 1, i = 0; n.length > i;) {
          var s;
          var a;
          var c;
          var u = n[i++];
          var f = o ? u.ok : u.fail;
          var l = u.resolve;
          var h = u.reject;
          var p = u.domain;
          try {
            if (f) {
              if (!o) {
                if (t.rejection === 2) {
                  it(t);
                }
                t.rejection = 1;
              }
              if (f === true) {
                s = r;
              } else {
                if (p) {
                  p.enter();
                }
                s = f(r);
                if (p) {
                  p.exit();
                  c = true;
                }
              }
              if (s === u.promise) {
                h(z("Promise-chain cycle"));
              } else if (a = tt(s)) {
                a.call(s, l, h);
              } else {
                l(s);
              }
            } else {
              h(r);
            }
          } catch (t) {
            if (p && !c) {
              p.exit();
            }
            h(t);
          }
        }
        t.reactions = [];
        t.notified = false;
        if (e && !t.rejection) {
          rt(t);
        }
      });
    }
  }
  function nt(t, e, n) {
    var r;
    var o;
    if ($) {
      (r = Y.createEvent("Event")).promise = e;
      r.reason = n;
      r.initEvent(t, false, true);
      u.dispatchEvent(r);
    } else {
      r = {
        promise: e,
        reason: n
      };
    }
    if (!X && (o = u["on" + t])) {
      o(r);
    } else if (t === "unhandledrejection") {
      I("Unhandled promise rejection", n);
    }
  }
  function rt(t) {
    E.call(u, function () {
      var e;
      var n = t.facade;
      var r = t.value;
      if (ot(t) && (e = N(function () {
        if (k) {
          G.emit("unhandledRejection", r, n);
        } else {
          nt("unhandledrejection", n, r);
        }
      }), t.rejection = k || ot(t) ? 2 : 1, e.error)) {
        throw e.value;
      }
    });
  }
  function ot(t) {
    return t.rejection !== 1 && !t.parent;
  }
  function it(t) {
    E.call(u, function () {
      var e = t.facade;
      if (k) {
        G.emit("rejectionHandled", e);
      } else {
        nt("rejectionhandled", e, t.value);
      }
    });
  }
  function st(t, e, n) {
    return function (r) {
      t(e, r, n);
    };
  }
  function at(t, e, n) {
    if (!t.done) {
      t.done = true;
      if (n) {
        t = n;
      }
      t.value = e;
      t.state = 2;
      et(t, true);
    }
  }
  function ct(t, e, n) {
    if (!t.done) {
      t.done = true;
      if (n) {
        t = n;
      }
      try {
        if (t.facade === e) {
          throw z("Promise can't be resolved itself");
        }
        var r = tt(e);
        if (r) {
          O(function () {
            var n = {
              done: false
            };
            try {
              r.call(e, st(ct, n, t), st(at, n, t));
            } catch (e) {
              at(n, e, t);
            }
          });
        } else {
          t.value = e;
          t.state = 1;
          et(t, false);
        }
      } catch (e) {
        at({
          done: false
        }, e, t);
      }
    }
  }
  if (J && (V = (W = function (t) {
    b(this, W, M);
    v(t);
    r.call(this);
    var e = F(this);
    try {
      t(st(ct, e), st(at, e));
    } catch (t) {
      at(e, t);
    }
  }).prototype, (r = function (t) {
    B(this, {
      type: M,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: 0,
      value: undefined
    });
  }).prototype = p(V, {
    then: function (t, e) {
      var n = U(this);
      var r = H(T(this, W));
      r.ok = typeof t != "function" || t;
      r.fail = typeof e == "function" && e;
      r.domain = k ? G.domain : undefined;
      n.parent = true;
      n.reactions.push(r);
      if (n.state != 0) {
        et(n, false);
      }
      return r.promise;
    },
    catch: function (t) {
      return this.then(undefined, t);
    }
  }), o = function () {
    var t = new r();
    var e = F(t);
    this.promise = t;
    this.resolve = st(ct, e);
    this.reject = st(at, e);
  }, A.f = H = function (t) {
    if (t === W || t === i) {
      return new o(t);
    } else {
      return K(t);
    }
  }, !c && typeof l == "function" && q !== Object.prototype)) {
    s = q.then;
    if (!Q) {
      h(q, "then", function (t, e) {
        var n = this;
        return new W(function (t, e) {
          s.call(n, t, e);
        }).then(t, e);
      }, {
        unsafe: true
      });
      h(q, "catch", V.catch, {
        unsafe: true
      });
    }
    try {
      delete q.constructor;
    } catch (t) {}
    if (d) {
      d(q, V);
    }
  }
  a({
    global: true,
    wrap: true,
    forced: J
  }, {
    Promise: W
  });
  y(W, M, false, true);
  m(M);
  i = f(M);
  a({
    target: M,
    stat: true,
    forced: J
  }, {
    reject: function (t) {
      var e = H(this);
      e.reject.call(undefined, t);
      return e.promise;
    }
  });
  a({
    target: M,
    stat: true,
    forced: c || J
  }, {
    resolve: function (t) {
      return S(c && this === i ? W : this, t);
    }
  });
  a({
    target: M,
    stat: true,
    forced: Z
  }, {
    all: function (t) {
      var e = this;
      var n = H(e);
      var r = n.resolve;
      var o = n.reject;
      var i = N(function () {
        var n = v(e.resolve);
        var i = [];
        var s = 0;
        var a = 1;
        _(t, function (t) {
          var c = s++;
          var u = false;
          i.push(undefined);
          a++;
          n.call(e, t).then(function (t) {
            if (!u) {
              u = true;
              i[c] = t;
              if (! --a) {
                r(i);
              }
            }
          }, o);
        });
        if (! --a) {
          r(i);
        }
      });
      if (i.error) {
        o(i.value);
      }
      return n.promise;
    },
    race: function (t) {
      var e = this;
      var n = H(e);
      var r = n.reject;
      var o = N(function () {
        var o = v(e.resolve);
        _(t, function (t) {
          o.call(e, t).then(n.resolve, r);
        });
      });
      if (o.error) {
        r(o.value);
      }
      return n.promise;
    }
  });
}, function (t, e, n) {
  var r = n(72);
  t.exports = function (t, e, n) {
    for (var o in e) {
      if (n && n.unsafe && t[o]) {
        t[o] = e[o];
      } else {
        r(t, o, e[o], n);
      }
    }
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(44);
  var o = n(64);
  var i = n(9);
  var s = n(42);
  var a = i("species");
  t.exports = function (t) {
    var e = r(t);
    var n = o.f;
    if (s && e && !e[a]) {
      n(e, a, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };
}, function (t, e) {
  t.exports = function (t, e, n) {
    if (!(t instanceof e)) {
      throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(9)("iterator");
  var o = false;
  try {
    var i = 0;
    var s = {
      next: function () {
        return {
          done: !!i++
        };
      },
      return: function () {
        o = true;
      }
    };
    s[r] = function () {
      return this;
    };
    Array.from(s, function () {
      throw 2;
    });
  } catch (t) {}
  t.exports = function (t, e) {
    if (!e && !o) {
      return false;
    }
    var n = false;
    try {
      var i = {
        [r]: function () {
          return {
            next: function () {
              return {
                done: n = true
              };
            }
          };
        }
      };
      t(i);
    } catch (t) {}
    return n;
  };
}, function (t, e, n) {
  var r;
  var o;
  var i;
  var s;
  var a;
  var c;
  var u;
  var f;
  var l = n(7);
  var h = n(172).f;
  var p = n(204).set;
  var d = n(205);
  var y = n(344);
  var m = n(141);
  var g = l.MutationObserver || l.WebKitMutationObserver;
  var v = l.document;
  var b = l.process;
  var w = l.Promise;
  var _ = h(l, "queueMicrotask");
  var x = _ && _.value;
  if (!x) {
    r = function () {
      var t;
      var e;
      for (m && (t = b.domain) && t.exit(); o;) {
        e = o.fn;
        o = o.next;
        try {
          e();
        } catch (t) {
          if (o) {
            s();
          } else {
            i = undefined;
          }
          throw t;
        }
      }
      i = undefined;
      if (t) {
        t.enter();
      }
    };
    if (d || m || y || !g || !v) {
      if (w && w.resolve) {
        (u = w.resolve(undefined)).constructor = w;
        f = u.then;
        s = function () {
          f.call(u, r);
        };
      } else {
        s = m ? function () {
          b.nextTick(r);
        } : function () {
          p.call(l, r);
        };
      }
    } else {
      a = true;
      c = v.createTextNode("");
      new g(r).observe(c, {
        characterData: true
      });
      s = function () {
        c.data = a = !a;
      };
    }
  }
  t.exports = x || function (t) {
    var e = {
      fn: t,
      next: undefined
    };
    if (i) {
      i.next = e;
    }
    if (!o) {
      o = e;
      s();
    }
    i = e;
  };
}, function (t, e, n) {
  var r = n(113);
  t.exports = /web0s(?!.*chrome)/i.test(r);
}, function (t, e, n) {
  var r = n(7);
  t.exports = function (t, e) {
    var n = r.console;
    if (n && n.error) {
      if (arguments.length === 1) {
        n.error(t);
      } else {
        n.error(t, e);
      }
    }
  };
}, function (t, e) {
  t.exports = typeof window == "object";
}, function (t, e, n) {
  "use strict";

  var r = n(28);
  var o = n(43);
  var i = n(203);
  var s = n(18);
  var a = n(44);
  var c = n(120);
  var u = n(206);
  var f = n(72);
  r({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!i && s(function () {
      i.prototype.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (t) {
      var e = c(this, a("Promise"));
      var n = typeof t == "function";
      return this.then(n ? function (n) {
        return u(e, t()).then(function () {
          return n;
        });
      } : t, n ? function (n) {
        return u(e, t()).then(function () {
          throw n;
        });
      } : t);
    }
  });
  if (!o && typeof i == "function") {
    var l = a("Promise").prototype.finally;
    if (i.prototype.finally !== l) {
      f(i.prototype, "finally", l, {
        unsafe: true
      });
    }
  }
}, function (t, e, n) {
  "use strict";

  var r = n(186).charAt;
  var o = n(65);
  var i = n(209);
  var s = o.set;
  var a = o.getterFor("String Iterator");
  i(String, "String", function (t) {
    s(this, {
      type: "String Iterator",
      string: String(t),
      index: 0
    });
  }, function () {
    var t;
    var e = a(this);
    var n = e.string;
    var o = e.index;
    if (o >= n.length) {
      return {
        value: undefined,
        done: true
      };
    } else {
      t = r(n, o);
      e.index += t.length;
      return {
        value: t,
        done: false
      };
    }
  });
}, function (t, e, n) {
  n(350);
  var r = n(352);
  var o = n(7);
  var i = n(119);
  var s = n(19);
  var a = n(45);
  var c = n(9)("toStringTag");
  for (var u in r) {
    var f = o[u];
    var l = f && f.prototype;
    if (l && i(l) !== c) {
      s(l, c, u);
    }
    a[u] = a.Array;
  }
}, function (t, e, n) {
  "use strict";

  var r = n(61);
  var o = n(351);
  var i = n(45);
  var s = n(65);
  var a = n(209);
  var c = s.set;
  var u = s.getterFor("Array Iterator");
  t.exports = a(Array, "Array", function (t, e) {
    c(this, {
      type: "Array Iterator",
      target: r(t),
      index: 0,
      kind: e
    });
  }, function () {
    var t = u(this);
    var e = t.target;
    var n = t.kind;
    var r = t.index++;
    if (!e || r >= e.length) {
      t.target = undefined;
      return {
        value: undefined,
        done: true
      };
    } else if (n == "keys") {
      return {
        value: r,
        done: false
      };
    } else if (n == "values") {
      return {
        value: e[r],
        done: false
      };
    } else {
      return {
        value: [r, e[r]],
        done: false
      };
    }
  }, "values");
  i.Arguments = i.Array;
  o("keys");
  o("values");
  o("entries");
}, function (t, e) {
  t.exports = function () {};
}, function (t, e) {
  t.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
}, function (t, e, n) {
  n(202);
}, function (t, e, n) {
  n(207);
}, function (t, e, n) {
  "use strict";

  var r = n(28);
  var o = n(53);
  var i = n(73);
  r({
    target: "Promise",
    stat: true
  }, {
    try: function (t) {
      var e = o.f(this);
      var n = i(t);
      (n.error ? e.reject : e.resolve)(n.value);
      return e.promise;
    }
  });
}, function (t, e, n) {
  n(208);
}, function (t, e, n) {
  "use strict";

  var r = n(358);
  var o = n(5);
  var i = n(8);
  var s = n(49);
  var a = n(57);
  var c = n(362);
  var u = n(363);
  var f = n(364);
  var l = n(103);
  var h = n(365);
  var p = r.aTypedArray;
  var d = r.exportTypedArrayMethod;
  var y = o.Uint16Array;
  var m = y && y.prototype.sort;
  var g = !!m && !i(function () {
    var t = new y(2);
    t.sort(null);
    t.sort({});
  });
  var v = !!m && !i(function () {
    if (l) {
      return l < 74;
    }
    if (u) {
      return u < 67;
    }
    if (f) {
      return true;
    }
    if (h) {
      return h < 602;
    }
    var t;
    var e;
    var n = new y(516);
    var r = Array(516);
    for (t = 0; t < 516; t++) {
      e = t % 4;
      n[t] = 515 - t;
      r[t] = t - e * 2 + 3;
    }
    n.sort(function (t, e) {
      return (t / 4 | 0) - (e / 4 | 0);
    });
    t = 0;
    for (; t < 516; t++) {
      if (n[t] !== r[t]) {
        return true;
      }
    }
  });
  d("sort", function (t) {
    if (t !== undefined) {
      s(t);
    }
    if (v) {
      return m.call(this, t);
    }
    p(this);
    var e;
    var n = a(this.length);
    var r = Array(n);
    for (e = 0; e < n; e++) {
      r[e] = this[e];
    }
    r = c(this, function (t) {
      return function (e, n) {
        if (t !== undefined) {
          return +t(e, n) || 0;
        } else if (n != n) {
          return -1;
        } else if (e != e) {
          return 1;
        } else if (e === 0 && n === 0) {
          if (1 / e > 0 && 1 / n < 0) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return e > n;
        }
      };
    }(t));
    e = 0;
    for (; e < n; e++) {
      this[e] = r[e];
    }
    return this;
  }, !v || g);
}, function (t, e, n) {
  "use strict";

  var r;
  var o = n(359);
  var i = n(32);
  var s = n(5);
  var a = n(25);
  var c = n(23);
  var u = n(164);
  var f = n(37);
  var l = n(39);
  var h = n(38).f;
  var p = n(360);
  var d = n(160);
  var y = n(11);
  var m = n(100);
  var g = s.Int8Array;
  var v = g && g.prototype;
  var b = s.Uint8ClampedArray;
  var w = b && b.prototype;
  var _ = g && p(g);
  var x = v && p(v);
  var T = Object.prototype;
  var E = T.isPrototypeOf;
  var O = y("toStringTag");
  var S = m("TYPED_ARRAY_TAG");
  var I = o && !!d && u(s.opera) !== "Opera";
  var A = false;
  var N = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var j = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };
  function D(t) {
    if (!a(t)) {
      return false;
    }
    var e = u(t);
    return c(N, e) || c(j, e);
  }
  for (r in N) {
    if (!s[r]) {
      I = false;
    }
  }
  if ((!I || typeof _ != "function" || _ === Function.prototype) && (_ = function () {
    throw TypeError("Incorrect invocation");
  }, I)) {
    for (r in N) {
      if (s[r]) {
        d(s[r], _);
      }
    }
  }
  if ((!I || !x || x === T) && (x = _.prototype, I)) {
    for (r in N) {
      if (s[r]) {
        d(s[r].prototype, x);
      }
    }
  }
  if (I && p(w) !== x) {
    d(w, x);
  }
  if (i && !c(x, O)) {
    A = true;
    h(x, O, {
      get: function () {
        if (a(this)) {
          return this[S];
        } else {
          return undefined;
        }
      }
    });
    for (r in N) {
      if (s[r]) {
        f(s[r], S, r);
      }
    }
  }
  t.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: I,
    TYPED_ARRAY_TAG: A && S,
    aTypedArray: function (t) {
      if (D(t)) {
        return t;
      }
      throw TypeError("Target is not a typed array");
    },
    aTypedArrayConstructor: function (t) {
      if (d) {
        if (E.call(_, t)) {
          return t;
        }
      } else {
        for (var e in N) {
          if (c(N, r)) {
            var n = s[e];
            if (n && (t === n || E.call(n, t))) {
              return t;
            }
          }
        }
      }
      throw TypeError("Target is not a typed array constructor");
    },
    exportTypedArrayMethod: function (t, e, n) {
      if (i) {
        if (n) {
          for (var r in N) {
            var o = s[r];
            if (o && c(o.prototype, t)) {
              try {
                delete o.prototype[t];
              } catch (t) {}
            }
          }
        }
        if (!x[t] || !!n) {
          l(x, t, n ? e : I && v[t] || e);
        }
      }
    },
    exportTypedArrayStaticMethod: function (t, e, n) {
      var r;
      var o;
      if (i) {
        if (d) {
          if (n) {
            for (r in N) {
              if ((o = s[r]) && c(o, t)) {
                try {
                  delete o[t];
                } catch (t) {}
              }
            }
          }
          if (_[t] && !n) {
            return;
          }
          try {
            return l(_, t, n ? e : I && _[t] || e);
          } catch (t) {}
        }
        for (r in N) {
          if (!!(o = s[r]) && (!o[t] || !!n)) {
            l(o, t, e);
          }
        }
      }
    },
    isView: function (t) {
      if (!a(t)) {
        return false;
      }
      var e = u(t);
      return e === "DataView" || c(N, e) || c(j, e);
    },
    isTypedArray: D,
    TypedArray: _,
    TypedArrayPrototype: x
  };
}, function (t, e) {
  t.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
}, function (t, e, n) {
  var r = n(23);
  var o = n(91);
  var i = n(97);
  var s = n(361);
  var a = i("IE_PROTO");
  var c = Object.prototype;
  t.exports = s ? Object.getPrototypeOf : function (t) {
    t = o(t);
    if (r(t, a)) {
      return t[a];
    } else if (typeof t.constructor == "function" && t instanceof t.constructor) {
      return t.constructor.prototype;
    } else if (t instanceof Object) {
      return c;
    } else {
      return null;
    }
  };
}, function (t, e, n) {
  var r = n(8);
  t.exports = !r(function () {
    function t() {}
    t.prototype.constructor = null;
    return Object.getPrototypeOf(new t()) !== t.prototype;
  });
}, function (t, e) {
  var n = Math.floor;
  function r(t, e) {
    var s = t.length;
    var a = n(s / 2);
    if (s < 8) {
      return o(t, e);
    } else {
      return i(r(t.slice(0, a), e), r(t.slice(a), e), e);
    }
  }
  function o(t, e) {
    var n;
    var r;
    for (var o = t.length, i = 1; i < o;) {
      r = i;
      n = t[i];
      while (r && e(t[r - 1], n) > 0) {
        t[r] = t[--r];
      }
      if (r !== i++) {
        t[r] = n;
      }
    }
    return t;
  }
  function i(t, e, n) {
    for (var r = t.length, o = e.length, i = 0, s = 0, a = []; i < r || s < o;) {
      if (i < r && s < o) {
        a.push(n(t[i], e[s]) <= 0 ? t[i++] : e[s++]);
      } else {
        a.push(i < r ? t[i++] : e[s++]);
      }
    }
    return a;
  }
  t.exports = r;
}, function (t, e, n) {
  var r = n(41).match(/firefox\/(\d+)/i);
  t.exports = !!r && +r[1];
}, function (t, e, n) {
  var r = n(41);
  t.exports = /MSIE|Trident/.test(r);
}, function (t, e, n) {
  var r = n(41).match(/AppleWebKit\/(\d+)\./);
  t.exports = !!r && +r[1];
}, function (t, e, n) {
  "use strict";

  var r = n(88);
  var o = n(99);
  var i = n(159);
  var s = n(8);
  var a = n(40);
  var c = n(165);
  var u = n(169);
  var f = n(39);
  r({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!i && s(function () {
      i.prototype.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (t) {
      var e = c(this, a("Promise"));
      var n = typeof t == "function";
      return this.then(n ? function (n) {
        return u(e, t()).then(function () {
          return n;
        });
      } : t, n ? function (n) {
        return u(e, t()).then(function () {
          throw n;
        });
      } : t);
    }
  });
  if (!o && typeof i == "function") {
    var l = a("Promise").prototype.finally;
    if (i.prototype.finally !== l) {
      f(i.prototype, "finally", l, {
        unsafe: true
      });
    }
  }
}, function (t, e, n) {
  var r = n(31);
  var o = n(368);
  var i = n(369);
  var s = Math.max;
  var a = Math.min;
  t.exports = function (t, e, n) {
    var c;
    var u;
    var f;
    var l;
    var h;
    var p;
    var d = 0;
    var y = false;
    var m = false;
    var g = true;
    if (typeof t != "function") {
      throw new TypeError("Expected a function");
    }
    function v(e) {
      var n = c;
      var r = u;
      c = u = undefined;
      d = e;
      return l = t.apply(r, n);
    }
    function b(t) {
      d = t;
      h = setTimeout(_, e);
      if (y) {
        return v(t);
      } else {
        return l;
      }
    }
    function w(t) {
      var n = t - p;
      return p === undefined || n >= e || n < 0 || m && t - d >= f;
    }
    function _() {
      var t = o();
      if (w(t)) {
        return x(t);
      }
      h = setTimeout(_, function (t) {
        var n = e - (t - p);
        if (m) {
          return a(n, f - (t - d));
        } else {
          return n;
        }
      }(t));
    }
    function x(t) {
      h = undefined;
      if (g && c) {
        return v(t);
      } else {
        c = u = undefined;
        return l;
      }
    }
    function T() {
      var t = o();
      var n = w(t);
      c = arguments;
      u = this;
      p = t;
      if (n) {
        if (h === undefined) {
          return b(p);
        }
        if (m) {
          clearTimeout(h);
          h = setTimeout(_, e);
          return v(p);
        }
      }
      if (h === undefined) {
        h = setTimeout(_, e);
      }
      return l;
    }
    e = i(e) || 0;
    if (r(n)) {
      y = !!n.leading;
      f = (m = "maxWait" in n) ? s(i(n.maxWait) || 0, e) : f;
      g = "trailing" in n ? !!n.trailing : g;
    }
    T.cancel = function () {
      if (h !== undefined) {
        clearTimeout(h);
      }
      d = 0;
      c = p = u = h = undefined;
    };
    T.flush = function () {
      if (h === undefined) {
        return l;
      } else {
        return x(o());
      }
    };
    return T;
  };
}, function (t, e, n) {
  var r = n(17);
  t.exports = function () {
    return r.Date.now();
  };
}, function (t, e, n) {
  var r = n(370);
  var o = n(31);
  var i = n(372);
  var s = /^[-+]0x[0-9a-f]+$/i;
  var a = /^0b[01]+$/i;
  var c = /^0o[0-7]+$/i;
  var u = parseInt;
  t.exports = function (t) {
    if (typeof t == "number") {
      return t;
    }
    if (i(t)) {
      return NaN;
    }
    if (o(t)) {
      var e = typeof t.valueOf == "function" ? t.valueOf() : t;
      t = o(e) ? e + "" : e;
    }
    if (typeof t != "string") {
      if (t === 0) {
        return t;
      } else {
        return +t;
      }
    }
    t = r(t);
    var n = a.test(t);
    if (n || c.test(t)) {
      return u(t.slice(2), n ? 2 : 8);
    } else if (s.test(t)) {
      return NaN;
    } else {
      return +t;
    }
  };
}, function (t, e, n) {
  var r = n(371);
  var o = /^\s+/;
  t.exports = function (t) {
    if (t) {
      return t.slice(0, r(t) + 1).replace(o, "");
    } else {
      return t;
    }
  };
}, function (t, e) {
  var n = /\s/;
  t.exports = function (t) {
    for (var e = t.length; e-- && n.test(t.charAt(e)););
    return e;
  };
}, function (t, e, n) {
  var r = n(54);
  var o = n(35);
  t.exports = function (t) {
    return typeof t == "symbol" || o(t) && r(t) == "[object Symbol]";
  };
}, function (t, e, n) {
  var r = n(74);
  var o = Object.prototype;
  var i = o.hasOwnProperty;
  var s = o.toString;
  var a = r ? r.toStringTag : undefined;
  t.exports = function (t) {
    var e = i.call(t, a);
    var n = t[a];
    try {
      t[a] = undefined;
      var r = true;
    } catch (t) {}
    var o = s.call(t);
    if (r) {
      if (e) {
        t[a] = n;
      } else {
        delete t[a];
      }
    }
    return o;
  };
}, function (t, e) {
  var n = Object.prototype.toString;
  t.exports = function (t) {
    return n.call(t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  var o = n(211);
  var i = n(376);
  var s = n(217);
  function a(t) {
    var e = new i(t);
    var n = o(i.prototype.request, e);
    r.extend(n, i.prototype, e);
    r.extend(n, e);
    return n;
  }
  var c = a(n(214));
  c.Axios = i;
  c.create = function (t) {
    return a(s(c.defaults, t));
  };
  c.Cancel = n(218);
  c.CancelToken = n(389);
  c.isCancel = n(213);
  c.all = function (t) {
    return Promise.all(t);
  };
  c.spread = n(390);
  t.exports = c;
  t.exports.default = c;
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  var o = n(212);
  var i = n(377);
  var s = n(378);
  var a = n(217);
  function c(t) {
    this.defaults = t;
    this.interceptors = {
      request: new i(),
      response: new i()
    };
  }
  c.prototype.request = function (t) {
    if (typeof t == "string") {
      (t = arguments[1] || {}).url = arguments[0];
    } else {
      t = t || {};
    }
    if ((t = a(this.defaults, t)).method) {
      t.method = t.method.toLowerCase();
    } else if (this.defaults.method) {
      t.method = this.defaults.method.toLowerCase();
    } else {
      t.method = "get";
    }
    var e = [s, undefined];
    var n = Promise.resolve(t);
    this.interceptors.request.forEach(function (t) {
      e.unshift(t.fulfilled, t.rejected);
    });
    this.interceptors.response.forEach(function (t) {
      e.push(t.fulfilled, t.rejected);
    });
    while (e.length) {
      n = n.then(e.shift(), e.shift());
    }
    return n;
  };
  c.prototype.getUri = function (t) {
    t = a(this.defaults, t);
    return o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "");
  };
  r.forEach(["delete", "get", "head", "options"], function (t) {
    c.prototype[t] = function (e, n) {
      return this.request(r.merge(n || {}, {
        method: t,
        url: e
      }));
    };
  });
  r.forEach(["post", "put", "patch"], function (t) {
    c.prototype[t] = function (e, n, o) {
      return this.request(r.merge(o || {}, {
        method: t,
        url: e,
        data: n
      }));
    };
  });
  t.exports = c;
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  function o() {
    this.handlers = [];
  }
  o.prototype.use = function (t, e) {
    this.handlers.push({
      fulfilled: t,
      rejected: e
    });
    return this.handlers.length - 1;
  };
  o.prototype.eject = function (t) {
    this.handlers[t] &&= null;
  };
  o.prototype.forEach = function (t) {
    r.forEach(this.handlers, function (e) {
      if (e !== null) {
        t(e);
      }
    });
  };
  t.exports = o;
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  var o = n(379);
  var i = n(213);
  var s = n(214);
  function a(t) {
    if (t.cancelToken) {
      t.cancelToken.throwIfRequested();
    }
  }
  t.exports = function (t) {
    a(t);
    t.headers = t.headers || {};
    t.data = o(t.data, t.headers, t.transformRequest);
    t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers);
    r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
      delete t.headers[e];
    });
    return (t.adapter || s.adapter)(t).then(function (e) {
      a(t);
      e.data = o(e.data, e.headers, t.transformResponse);
      return e;
    }, function (e) {
      if (!i(e)) {
        a(t);
        if (e && e.response) {
          e.response.data = o(e.response.data, e.response.headers, t.transformResponse);
        }
      }
      return Promise.reject(e);
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  t.exports = function (t, e, n) {
    r.forEach(n, function (n) {
      t = n(t, e);
    });
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  t.exports = function (t, e) {
    r.forEach(t, function (n, r) {
      if (r !== e && r.toUpperCase() === e.toUpperCase()) {
        t[e] = n;
        delete t[r];
      }
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(216);
  t.exports = function (t, e, n) {
    var o = n.config.validateStatus;
    if (!o || o(n.status)) {
      t(n);
    } else {
      e(r("Request failed with status code " + n.status, n.config, null, n.request, n));
    }
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e, n, r, o) {
    t.config = e;
    if (n) {
      t.code = n;
    }
    t.request = r;
    t.response = o;
    t.isAxiosError = true;
    t.toJSON = function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code
      };
    };
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(384);
  var o = n(385);
  t.exports = function (t, e) {
    if (t && !r(e)) {
      return o(t, e);
    } else {
      return e;
    }
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e) {
    if (e) {
      return t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "");
    } else {
      return t;
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  var o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  t.exports = function (t) {
    var e;
    var n;
    var i;
    var s = {};
    if (t) {
      r.forEach(t.split("\n"), function (t) {
        i = t.indexOf(":");
        e = r.trim(t.substr(0, i)).toLowerCase();
        n = r.trim(t.substr(i + 1));
        if (e) {
          if (s[e] && o.indexOf(e) >= 0) {
            return;
          }
          s[e] = e === "set-cookie" ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n;
        }
      });
      return s;
    } else {
      return s;
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  t.exports = r.isStandardBrowserEnv() ? function () {
    var t;
    var e = /(msie|trident)/i.test(navigator.userAgent);
    var n = document.createElement("a");
    function o(t) {
      var r = t;
      if (e) {
        n.setAttribute("href", r);
        r = n.href;
      }
      n.setAttribute("href", r);
      return {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    t = o(window.location.href);
    return function (e) {
      var n = r.isString(e) ? o(e) : e;
      return n.protocol === t.protocol && n.host === t.host;
    };
  }() : function () {
    return true;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10);
  t.exports = r.isStandardBrowserEnv() ? {
    write: function (t, e, n, o, i, s) {
      var a = [];
      a.push(t + "=" + encodeURIComponent(e));
      if (r.isNumber(n)) {
        a.push("expires=" + new Date(n).toGMTString());
      }
      if (r.isString(o)) {
        a.push("path=" + o);
      }
      if (r.isString(i)) {
        a.push("domain=" + i);
      }
      if (s === true) {
        a.push("secure");
      }
      document.cookie = a.join("; ");
    },
    read: function (t) {
      var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      if (e) {
        return decodeURIComponent(e[3]);
      } else {
        return null;
      }
    },
    remove: function (t) {
      this.write(t, "", Date.now() - 86400000);
    }
  } : {
    write: function () {},
    read: function () {
      return null;
    },
    remove: function () {}
  };
}, function (t, e, n) {
  "use strict";

  var r = n(218);
  function o(t) {
    if (typeof t != "function") {
      throw new TypeError("executor must be a function.");
    }
    var e;
    this.promise = new Promise(function (t) {
      e = t;
    });
    var n = this;
    t(function (t) {
      if (!n.reason) {
        n.reason = new r(t);
        e(n.reason);
      }
    });
  }
  o.prototype.throwIfRequested = function () {
    if (this.reason) {
      throw this.reason;
    }
  };
  o.source = function () {
    var t;
    return {
      token: new o(function (e) {
        t = e;
      }),
      cancel: t
    };
  };
  t.exports = o;
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  };
}, function (t, e, n) {
  var r = n(219);
  var o = n(418);
  var i = n(223);
  var s = n(420);
  var a = n(429);
  var c = n(432);
  var u = n(433);
  var f = n(434);
  var l = n(436);
  var h = n(234);
  var p = n(437);
  var d = n(81);
  var y = n(442);
  var m = n(443);
  var g = n(448);
  var v = n(80);
  var b = n(145);
  var w = n(450);
  var _ = n(31);
  var x = n(452);
  var T = n(144);
  var E = n(150);
  var O = {};
  O["[object Arguments]"] = O["[object Array]"] = O["[object ArrayBuffer]"] = O["[object DataView]"] = O["[object Boolean]"] = O["[object Date]"] = O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Map]"] = O["[object Number]"] = O["[object Object]"] = O["[object RegExp]"] = O["[object Set]"] = O["[object String]"] = O["[object Symbol]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = true;
  O["[object Error]"] = O["[object Function]"] = O["[object WeakMap]"] = false;
  t.exports = function t(e, n, S, I, A, N) {
    var j;
    var D = n & 1;
    var C = n & 2;
    var P = n & 4;
    if (S) {
      j = A ? S(e, I, A, N) : S(e);
    }
    if (j !== undefined) {
      return j;
    }
    if (!_(e)) {
      return e;
    }
    var k = v(e);
    if (k) {
      j = y(e);
      if (!D) {
        return u(e, j);
      }
    } else {
      var R = d(e);
      var L = R == "[object Function]" || R == "[object GeneratorFunction]";
      if (b(e)) {
        return c(e, D);
      }
      if (R == "[object Object]" || R == "[object Arguments]" || L && !A) {
        j = C || L ? {} : g(e);
        if (!D) {
          if (C) {
            return l(e, a(j, e));
          } else {
            return f(e, s(j, e));
          }
        }
      } else {
        if (!O[R]) {
          if (A) {
            return e;
          } else {
            return {};
          }
        }
        j = m(e, R, D);
      }
    }
    N ||= new r();
    var M = N.get(e);
    if (M) {
      return M;
    }
    N.set(e, j);
    if (x(e)) {
      e.forEach(function (r) {
        j.add(t(r, n, S, r, e, N));
      });
    } else if (w(e)) {
      e.forEach(function (r, o) {
        j.set(o, t(r, n, S, o, e, N));
      });
    }
    var F = k ? undefined : (P ? C ? p : h : C ? E : T)(e);
    o(F || e, function (r, o) {
      if (F) {
        r = e[o = r];
      }
      i(j, o, t(r, n, S, o, e, N));
    });
    return j;
  };
}, function (t, e) {
  t.exports = function () {
    this.__data__ = [];
    this.size = 0;
  };
}, function (t, e, n) {
  var r = n(76);
  var o = Array.prototype.splice;
  t.exports = function (t) {
    var e = this.__data__;
    var n = r(e, t);
    return !(n < 0) && (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, true);
  };
}, function (t, e, n) {
  var r = n(76);
  t.exports = function (t) {
    var e = this.__data__;
    var n = r(e, t);
    if (n < 0) {
      return undefined;
    } else {
      return e[n][1];
    }
  };
}, function (t, e, n) {
  var r = n(76);
  t.exports = function (t) {
    return r(this.__data__, t) > -1;
  };
}, function (t, e, n) {
  var r = n(76);
  t.exports = function (t, e) {
    var n = this.__data__;
    var o = r(n, t);
    if (o < 0) {
      ++this.size;
      n.push([t, e]);
    } else {
      n[o][1] = e;
    }
    return this;
  };
}, function (t, e, n) {
  var r = n(75);
  t.exports = function () {
    this.__data__ = new r();
    this.size = 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = this.__data__;
    var n = e.delete(t);
    this.size = e.size;
    return n;
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.get(t);
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t);
  };
}, function (t, e, n) {
  var r = n(75);
  var o = n(143);
  var i = n(222);
  t.exports = function (t, e) {
    var n = this.__data__;
    if (n instanceof r) {
      var s = n.__data__;
      if (!o || s.length < 199) {
        s.push([t, e]);
        this.size = ++n.size;
        return this;
      }
      n = this.__data__ = new i(s);
    }
    n.set(t, e);
    this.size = n.size;
    return this;
  };
}, function (t, e, n) {
  var r = n(220);
  var o = n(403);
  var i = n(31);
  var s = n(221);
  var a = /^\[object .+?Constructor\]$/;
  var c = Function.prototype;
  var u = Object.prototype;
  var f = c.toString;
  var l = u.hasOwnProperty;
  var h = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  t.exports = function (t) {
    return !!i(t) && !o(t) && (r(t) ? h : a).test(s(t));
  };
}, function (t, e, n) {
  var r;
  var o = n(404);
  var i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
  t.exports = function (t) {
    return !!i && i in t;
  };
}, function (t, e, n) {
  var r = n(17)["__core-js_shared__"];
  t.exports = r;
}, function (t, e) {
  t.exports = function (t, e) {
    if (t == null) {
      return undefined;
    } else {
      return t[e];
    }
  };
}, function (t, e, n) {
  var r = n(407);
  var o = n(75);
  var i = n(143);
  t.exports = function () {
    this.size = 0;
    this.__data__ = {
      hash: new r(),
      map: new (i || o)(),
      string: new r()
    };
  };
}, function (t, e, n) {
  var r = n(408);
  var o = n(409);
  var i = n(410);
  var s = n(411);
  var a = n(412);
  function c(t) {
    var e = -1;
    var n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  c.prototype.clear = r;
  c.prototype.delete = o;
  c.prototype.get = i;
  c.prototype.has = s;
  c.prototype.set = a;
  t.exports = c;
}, function (t, e, n) {
  var r = n(77);
  t.exports = function () {
    this.__data__ = r ? r(null) : {};
    this.size = 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    this.size -= e ? 1 : 0;
    return e;
  };
}, function (t, e, n) {
  var r = n(77);
  var o = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    if (r) {
      var n = e[t];
      if (n === "__lodash_hash_undefined__") {
        return undefined;
      } else {
        return n;
      }
    }
    if (o.call(e, t)) {
      return e[t];
    } else {
      return undefined;
    }
  };
}, function (t, e, n) {
  var r = n(77);
  var o = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    if (r) {
      return e[t] !== undefined;
    } else {
      return o.call(e, t);
    }
  };
}, function (t, e, n) {
  var r = n(77);
  t.exports = function (t, e) {
    var n = this.__data__;
    this.size += this.has(t) ? 0 : 1;
    n[t] = r && e === undefined ? "__lodash_hash_undefined__" : e;
    return this;
  };
}, function (t, e, n) {
  var r = n(78);
  t.exports = function (t) {
    var e = r(this, t).delete(t);
    this.size -= e ? 1 : 0;
    return e;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    if (e == "string" || e == "number" || e == "symbol" || e == "boolean") {
      return t !== "__proto__";
    } else {
      return t === null;
    }
  };
}, function (t, e, n) {
  var r = n(78);
  t.exports = function (t) {
    return r(this, t).get(t);
  };
}, function (t, e, n) {
  var r = n(78);
  t.exports = function (t) {
    return r(this, t).has(t);
  };
}, function (t, e, n) {
  var r = n(78);
  t.exports = function (t, e) {
    var n = r(this, t);
    var o = n.size;
    n.set(t, e);
    this.size += n.size == o ? 0 : 1;
    return this;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== false;);
    return t;
  };
}, function (t, e, n) {
  var r = n(36);
  var o = function () {
    try {
      var t = r(Object, "defineProperty");
      t({}, "", {});
      return t;
    } catch (t) {}
  }();
  t.exports = o;
}, function (t, e, n) {
  var r = n(79);
  var o = n(144);
  t.exports = function (t, e) {
    return t && r(e, o(e), t);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = Array(t); ++n < t;) {
      r[n] = e(n);
    }
    return r;
  };
}, function (t, e, n) {
  var r = n(423);
  var o = n(35);
  var i = Object.prototype;
  var s = i.hasOwnProperty;
  var a = i.propertyIsEnumerable;
  var c = r(function () {
    return arguments;
  }()) ? r : function (t) {
    return o(t) && s.call(t, "callee") && !a.call(t, "callee");
  };
  t.exports = c;
}, function (t, e, n) {
  var r = n(54);
  var o = n(35);
  t.exports = function (t) {
    return o(t) && r(t) == "[object Arguments]";
  };
}, function (t, e) {
  t.exports = function () {
    return false;
  };
}, function (t, e) {
  var n = /^(?:0|[1-9]\d*)$/;
  t.exports = function (t, e) {
    var r = typeof t;
    return !!(e = e == null ? 9007199254740991 : e) && (r == "number" || r != "symbol" && n.test(t)) && t > -1 && t % 1 == 0 && t < e;
  };
}, function (t, e, n) {
  var r = n(54);
  var o = n(227);
  var i = n(35);
  var s = {};
  s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = true;
  s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = false;
  t.exports = function (t) {
    return i(t) && o(t.length) && !!s[r(t)];
  };
}, function (t, e, n) {
  var r = n(149);
  var o = n(428);
  var i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!r(t)) {
      return o(t);
    }
    var e = [];
    for (var n in Object(t)) {
      if (i.call(t, n) && n != "constructor") {
        e.push(n);
      }
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(228)(Object.keys, Object);
  t.exports = r;
}, function (t, e, n) {
  var r = n(79);
  var o = n(150);
  t.exports = function (t, e) {
    return t && r(e, o(e), t);
  };
}, function (t, e, n) {
  var r = n(31);
  var o = n(149);
  var i = n(431);
  var s = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!r(t)) {
      return i(t);
    }
    var e = o(t);
    var n = [];
    for (var a in t) {
      if (a != "constructor" || !e && s.call(t, a)) {
        n.push(a);
      }
    }
    return n;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = [];
    if (t != null) {
      for (var n in Object(t)) {
        e.push(n);
      }
    }
    return e;
  };
}, function (t, e, n) {
  (function (t) {
    var r = n(17);
    var o = e && !e.nodeType && e;
    var i = o && typeof t == "object" && t && !t.nodeType && t;
    var s = i && i.exports === o ? r.Buffer : undefined;
    var a = s ? s.allocUnsafe : undefined;
    t.exports = function (t, e) {
      if (e) {
        return t.slice();
      }
      var n = t.length;
      var r = a ? a(n) : new t.constructor(n);
      t.copy(r);
      return r;
    };
  }).call(this, n(146)(t));
}, function (t, e) {
  t.exports = function (t, e) {
    var n = -1;
    var r = t.length;
    for (e ||= Array(r); ++n < r;) {
      e[n] = t[n];
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(79);
  var o = n(151);
  t.exports = function (t, e) {
    return r(t, o(t), e);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, i = []; ++n < r;) {
      var s = t[n];
      if (e(s, n, t)) {
        i[o++] = s;
      }
    }
    return i;
  };
}, function (t, e, n) {
  var r = n(79);
  var o = n(231);
  t.exports = function (t, e) {
    return r(t, o(t), e);
  };
}, function (t, e, n) {
  var r = n(235);
  var o = n(231);
  var i = n(150);
  t.exports = function (t) {
    return r(t, i, o);
  };
}, function (t, e, n) {
  var r = n(36)(n(17), "DataView");
  t.exports = r;
}, function (t, e, n) {
  var r = n(36)(n(17), "Promise");
  t.exports = r;
}, function (t, e, n) {
  var r = n(36)(n(17), "Set");
  t.exports = r;
}, function (t, e, n) {
  var r = n(36)(n(17), "WeakMap");
  t.exports = r;
}, function (t, e) {
  var n = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = t.length;
    var r = new t.constructor(e);
    if (e && typeof t[0] == "string" && n.call(t, "index")) {
      r.index = t.index;
      r.input = t.input;
    }
    return r;
  };
}, function (t, e, n) {
  var r = n(152);
  var o = n(444);
  var i = n(445);
  var s = n(446);
  var a = n(447);
  t.exports = function (t, e, n) {
    var c = t.constructor;
    switch (e) {
      case "[object ArrayBuffer]":
        return r(t);
      case "[object Boolean]":
      case "[object Date]":
        return new c(+t);
      case "[object DataView]":
        return o(t, n);
      case "[object Float32Array]":
      case "[object Float64Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object Int32Array]":
      case "[object Uint8Array]":
      case "[object Uint8ClampedArray]":
      case "[object Uint16Array]":
      case "[object Uint32Array]":
        return a(t, n);
      case "[object Map]":
        return new c();
      case "[object Number]":
      case "[object String]":
        return new c(t);
      case "[object RegExp]":
        return i(t);
      case "[object Set]":
        return new c();
      case "[object Symbol]":
        return s(t);
    }
  };
}, function (t, e, n) {
  var r = n(152);
  t.exports = function (t, e) {
    var n = e ? r(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.byteLength);
  };
}, function (t, e) {
  var n = /\w*$/;
  t.exports = function (t) {
    var e = new t.constructor(t.source, n.exec(t));
    e.lastIndex = t.lastIndex;
    return e;
  };
}, function (t, e, n) {
  var r = n(74);
  var o = r ? r.prototype : undefined;
  var i = o ? o.valueOf : undefined;
  t.exports = function (t) {
    if (i) {
      return Object(i.call(t));
    } else {
      return {};
    }
  };
}, function (t, e, n) {
  var r = n(152);
  t.exports = function (t, e) {
    var n = e ? r(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length);
  };
}, function (t, e, n) {
  var r = n(449);
  var o = n(233);
  var i = n(149);
  t.exports = function (t) {
    if (typeof t.constructor != "function" || i(t)) {
      return {};
    } else {
      return r(o(t));
    }
  };
}, function (t, e, n) {
  var r = n(31);
  var o = Object.create;
  var i = function () {
    function t() {}
    return function (e) {
      if (!r(e)) {
        return {};
      }
      if (o) {
        return o(e);
      }
      t.prototype = e;
      var n = new t();
      t.prototype = undefined;
      return n;
    };
  }();
  t.exports = i;
}, function (t, e, n) {
  var r = n(451);
  var o = n(147);
  var i = n(148);
  var s = i && i.isMap;
  var a = s ? o(s) : r;
  t.exports = a;
}, function (t, e, n) {
  var r = n(81);
  var o = n(35);
  t.exports = function (t) {
    return o(t) && r(t) == "[object Map]";
  };
}, function (t, e, n) {
  var r = n(453);
  var o = n(147);
  var i = n(148);
  var s = i && i.isSet;
  var a = s ? o(s) : r;
  t.exports = a;
}, function (t, e, n) {
  var r = n(81);
  var o = n(35);
  t.exports = function (t) {
    return o(t) && r(t) == "[object Set]";
  };
}, function (t, e, n) {
  var r = n(455);
  var o = n(35);
  t.exports = function t(e, n, i, s, a) {
    return e === n || (e == null || n == null || !o(e) && !o(n) ? e != e && n != n : r(e, n, i, s, t, a));
  };
}, function (t, e, n) {
  var r = n(219);
  var o = n(237);
  var i = n(461);
  var s = n(464);
  var a = n(81);
  var c = n(80);
  var u = n(145);
  var f = n(226);
  var l = "[object Object]";
  var h = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n, p, d, y) {
    var m = c(t);
    var g = c(e);
    var v = m ? "[object Array]" : a(t);
    var b = g ? "[object Array]" : a(e);
    var w = (v = v == "[object Arguments]" ? l : v) == l;
    var _ = (b = b == "[object Arguments]" ? l : b) == l;
    var x = v == b;
    if (x && u(t)) {
      if (!u(e)) {
        return false;
      }
      m = true;
      w = false;
    }
    if (x && !w) {
      y ||= new r();
      if (m || f(t)) {
        return o(t, e, n, p, d, y);
      } else {
        return i(t, e, v, n, p, d, y);
      }
    }
    if (!(n & 1)) {
      var T = w && h.call(t, "__wrapped__");
      var E = _ && h.call(e, "__wrapped__");
      if (T || E) {
        var O = T ? t.value() : t;
        var S = E ? e.value() : e;
        y ||= new r();
        return d(O, S, n, p, y);
      }
    }
    return !!x && (y ||= new r(), s(t, e, n, p, d, y));
  };
}, function (t, e, n) {
  var r = n(222);
  var o = n(457);
  var i = n(458);
  function s(t) {
    var e = -1;
    var n = t == null ? 0 : t.length;
    for (this.__data__ = new r(); ++e < n;) {
      this.add(t[e]);
    }
  }
  s.prototype.add = s.prototype.push = o;
  s.prototype.has = i;
  t.exports = s;
}, function (t, e) {
  t.exports = function (t) {
    this.__data__.set(t, "__lodash_hash_undefined__");
    return this;
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r;) {
      if (e(t[n], n, t)) {
        return true;
      }
    }
    return false;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return t.has(e);
  };
}, function (t, e, n) {
  var r = n(74);
  var o = n(236);
  var i = n(142);
  var s = n(237);
  var a = n(462);
  var c = n(463);
  var u = r ? r.prototype : undefined;
  var f = u ? u.valueOf : undefined;
  t.exports = function (t, e, n, r, u, l, h) {
    switch (n) {
      case "[object DataView]":
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) {
          return false;
        }
        t = t.buffer;
        e = e.buffer;
      case "[object ArrayBuffer]":
        return t.byteLength == e.byteLength && !!l(new o(t), new o(e));
      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return i(+t, +e);
      case "[object Error]":
        return t.name == e.name && t.message == e.message;
      case "[object RegExp]":
      case "[object String]":
        return t == e + "";
      case "[object Map]":
        var p = a;
      case "[object Set]":
        var d = r & 1;
        p ||= c;
        if (t.size != e.size && !d) {
          return false;
        }
        var y = h.get(t);
        if (y) {
          return y == e;
        }
        r |= 2;
        h.set(t, e);
        var m = s(p(t), p(e), r, u, l, h);
        h.delete(t);
        return m;
      case "[object Symbol]":
        if (f) {
          return f.call(t) == f.call(e);
        }
    }
    return false;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = -1;
    var n = Array(t.size);
    t.forEach(function (t, r) {
      n[++e] = [r, t];
    });
    return n;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = -1;
    var n = Array(t.size);
    t.forEach(function (t) {
      n[++e] = t;
    });
    return n;
  };
}, function (t, e, n) {
  var r = n(234);
  var o = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n, i, s, a) {
    var c = n & 1;
    var u = r(t);
    var f = u.length;
    if (f != r(e).length && !c) {
      return false;
    }
    for (var l = f; l--;) {
      var h = u[l];
      if (!(c ? h in e : o.call(e, h))) {
        return false;
      }
    }
    var p = a.get(t);
    var d = a.get(e);
    if (p && d) {
      return p == e && d == t;
    }
    var y = true;
    a.set(t, e);
    a.set(e, t);
    var m = c;
    while (++l < f) {
      var g = t[h = u[l]];
      var v = e[h];
      if (i) {
        var b = c ? i(v, g, h, e, t, a) : i(g, v, h, t, e, a);
      }
      if (!(b === undefined ? g === v || s(g, v, n, i, a) : b)) {
        y = false;
        break;
      }
      m ||= h == "constructor";
    }
    if (y && !m) {
      var w = t.constructor;
      var _ = e.constructor;
      if (w != _ && !!("constructor" in t) && !!("constructor" in e) && (typeof w != "function" || !(w instanceof w) || typeof _ != "function" || !(_ instanceof _))) {
        y = false;
      }
    }
    a.delete(t);
    a.delete(e);
    return y;
  };
}, function (t, e) {
  if (typeof requestIdleCallback == "undefined") {
    let t = 20;
    self.requestIdleCallback = function (e) {
      return setTimeout(() => {
        if (t < 50) {
          t += 20;
        }
        const n = Date.now();
        e({
          didTimeout: false,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - n));
          }
        });
      }, t);
    };
  }
}, function (t, e, n) {
  "use strict";

  n(2);
  const r = (t, ...e) => {
    let n = t;
    if (e.length > 0) {
      n += " :: " + JSON.stringify(e);
    }
    return n;
  };
  class o extends Error {
    constructor(t, e) {
      super(r(t, e));
      this.name = t;
      this.details = e;
    }
  }
  const i = new Set();
  const s = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: typeof registration != "undefined" ? registration.scope : ""
  };
  const a = t => [s.prefix, t, s.suffix].filter(t => t && t.length > 0).join("-");
  const c = t => t || a(s.runtime);
  const u = t => new URL(String(t), location.href).href.replace(new RegExp("^" + location.origin), "");
  const f = (t, e) => t.filter(t => e in t);
  const l = async ({
    request: t,
    mode: e,
    plugins: n = []
  }) => {
    const r = f(n, "cacheKeyWillBeUsed");
    let o = t;
    for (const t of r) {
      o = await t.cacheKeyWillBeUsed.call(t, {
        mode: e,
        request: o
      });
      if (typeof o == "string") {
        o = new Request(o);
      }
    }
    return o;
  };
  const h = async ({
    cacheName: t,
    request: e,
    event: n,
    matchOptions: r,
    plugins: o = []
  }) => {
    const i = await self.caches.open(t);
    const s = await l({
      plugins: o,
      request: e,
      mode: "read"
    });
    let a = await i.match(s, r);
    for (const e of o) {
      if ("cachedResponseWillBeUsed" in e) {
        const o = e.cachedResponseWillBeUsed;
        a = await o.call(e, {
          cacheName: t,
          event: n,
          matchOptions: r,
          cachedResponse: a,
          request: s
        });
      }
    }
    return a;
  };
  const p = async ({
    cacheName: t,
    request: e,
    response: n,
    event: r,
    plugins: s = [],
    matchOptions: a
  }) => {
    const c = await l({
      plugins: s,
      request: e,
      mode: "write"
    });
    if (!n) {
      throw new o("cache-put-with-no-response", {
        url: u(c.url)
      });
    }
    const p = await (async ({
      request: t,
      response: e,
      event: n,
      plugins: r = []
    }) => {
      let o = e;
      let i = false;
      for (const e of r) {
        if ("cacheWillUpdate" in e) {
          i = true;
          const r = e.cacheWillUpdate;
          o = await r.call(e, {
            request: t,
            response: o,
            event: n
          });
          if (!o) {
            break;
          }
        }
      }
      if (!i) {
        o = o && o.status === 200 ? o : undefined;
      }
      return o || null;
    })({
      event: r,
      plugins: s,
      response: n,
      request: c
    });
    if (!p) {
      return undefined;
    }
    const d = await self.caches.open(t);
    const y = f(s, "cacheDidUpdate");
    const m = y.length > 0 ? await h({
      cacheName: t,
      matchOptions: a,
      request: c
    }) : null;
    try {
      await d.put(c, p);
    } catch (t) {
      if (t.name === "QuotaExceededError") {
        await async function () {
          for (const t of i) {
            await t();
          }
        }();
      }
      throw t;
    }
    for (const e of y) {
      await e.cacheDidUpdate.call(e, {
        cacheName: t,
        event: r,
        oldResponse: m,
        newResponse: p,
        request: c
      });
    }
  };
  const d = h;
  function y(t) {
    t.then(() => {});
  }
  class m {
    constructor(t, e, {
      onupgradeneeded: n,
      onversionchange: r
    } = {}) {
      this._db = null;
      this._name = t;
      this._version = e;
      this._onupgradeneeded = n;
      this._onversionchange = r || (() => this.close());
    }
    get db() {
      return this._db;
    }
    async open() {
      if (!this._db) {
        this._db = await new Promise((t, e) => {
          let n = false;
          setTimeout(() => {
            n = true;
            e(new Error("The open request was blocked and timed out"));
          }, this.OPEN_TIMEOUT);
          const r = indexedDB.open(this._name, this._version);
          r.onerror = () => e(r.error);
          r.onupgradeneeded = t => {
            if (n) {
              r.transaction.abort();
              r.result.close();
            } else if (typeof this._onupgradeneeded == "function") {
              this._onupgradeneeded(t);
            }
          };
          r.onsuccess = () => {
            const e = r.result;
            if (n) {
              e.close();
            } else {
              e.onversionchange = this._onversionchange.bind(this);
              t(e);
            }
          };
        });
        return this;
      }
    }
    async getKey(t, e) {
      return (await this.getAllKeys(t, e, 1))[0];
    }
    async getAll(t, e, n) {
      return await this.getAllMatching(t, {
        query: e,
        count: n
      });
    }
    async getAllKeys(t, e, n) {
      return (await this.getAllMatching(t, {
        query: e,
        count: n,
        includeKeys: true
      })).map(t => t.key);
    }
    async getAllMatching(t, {
      index: e,
      query: n = null,
      direction: r = "next",
      count: o,
      includeKeys: i = false
    } = {}) {
      return await this.transaction([t], "readonly", (s, a) => {
        const c = s.objectStore(t);
        const u = e ? c.index(e) : c;
        const f = [];
        const l = u.openCursor(n, r);
        l.onsuccess = () => {
          const t = l.result;
          if (t) {
            f.push(i ? t : t.value);
            if (o && f.length >= o) {
              a(f);
            } else {
              t.continue();
            }
          } else {
            a(f);
          }
        };
      });
    }
    async transaction(t, e, n) {
      await this.open();
      return await new Promise((r, o) => {
        const i = this._db.transaction(t, e);
        i.onabort = () => o(i.error);
        i.oncomplete = () => r();
        n(i, t => r(t));
      });
    }
    async _call(t, e, n, ...r) {
      return await this.transaction([e], n, (n, o) => {
        const i = n.objectStore(e);
        const s = i[t].apply(i, r);
        s.onsuccess = () => o(s.result);
      });
    }
    close() {
      if (this._db) {
        this._db.close();
        this._db = null;
      }
    }
  }
  m.prototype.OPEN_TIMEOUT = 2000;
  const g = {
    readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
    readwrite: ["add", "put", "clear", "delete"]
  };
  for (const [t, e] of Object.entries(g)) {
    for (const n of e) {
      if (n in IDBObjectStore.prototype) {
        m.prototype[n] = async function (e, ...r) {
          return await this._call(n, e, t, ...r);
        };
      }
    }
  }
  const v = async ({
    request: t,
    fetchOptions: e,
    event: n,
    plugins: r = []
  }) => {
    if (typeof t == "string") {
      t = new Request(t);
    }
    if (n instanceof FetchEvent && n.preloadResponse) {
      const t = await n.preloadResponse;
      if (t) {
        return t;
      }
    }
    const i = f(r, "fetchDidFail");
    const s = i.length > 0 ? t.clone() : null;
    try {
      for (const e of r) {
        if ("requestWillFetch" in e) {
          const r = e.requestWillFetch;
          const o = t.clone();
          t = await r.call(e, {
            request: o,
            event: n
          });
        }
      }
    } catch (t) {
      throw new o("plugin-error-request-will-fetch", {
        thrownError: t
      });
    }
    const a = t.clone();
    try {
      let o;
      o = t.mode === "navigate" ? await fetch(t) : await fetch(t, e);
      for (const t of r) {
        if ("fetchDidSucceed" in t) {
          o = await t.fetchDidSucceed.call(t, {
            event: n,
            request: a,
            response: o
          });
        }
      }
      return o;
    } catch (t) {
      0;
      for (const e of i) {
        await e.fetchDidFail.call(e, {
          error: t,
          event: n,
          originalRequest: s.clone(),
          request: a.clone()
        });
      }
      throw t;
    }
  };
  n(16);
  const b = t => t && typeof t == "object" ? t : {
    handle: t
  };
  class w {
    constructor(t, e, n = "GET") {
      this.handler = b(e);
      this.match = t;
      this.method = n;
    }
  }
  class _ extends w {
    constructor(t, e, n) {
      super(({
        url: e
      }) => {
        const n = t.exec(e.href);
        if (n && (e.origin === location.origin || n.index === 0)) {
          return n.slice(1);
        }
      }, e, n);
    }
  }
  class x {
    constructor() {
      this._routes = new Map();
    }
    get routes() {
      return this._routes;
    }
    addFetchListener() {
      self.addEventListener("fetch", t => {
        const {
          request: e
        } = t;
        const n = this.handleRequest({
          request: e,
          event: t
        });
        if (n) {
          t.respondWith(n);
        }
      });
    }
    addCacheListener() {
      self.addEventListener("message", t => {
        if (t.data && t.data.type === "CACHE_URLS") {
          const {
            payload: e
          } = t.data;
          0;
          const n = Promise.all(e.urlsToCache.map(t => {
            if (typeof t == "string") {
              t = [t];
            }
            const e = new Request(...t);
            return this.handleRequest({
              request: e
            });
          }));
          t.waitUntil(n);
          if (t.ports && t.ports[0]) {
            n.then(() => t.ports[0].postMessage(true));
          }
        }
      });
    }
    handleRequest({
      request: t,
      event: e
    }) {
      const n = new URL(t.url, location.href);
      if (!n.protocol.startsWith("http")) {
        return undefined;
      }
      const {
        params: r,
        route: o
      } = this.findMatchingRoute({
        url: n,
        request: t,
        event: e
      });
      let i = o && o.handler;
      if (!i && this._defaultHandler) {
        i = this._defaultHandler;
      }
      if (!i) {
        return undefined;
      }
      let s;
      try {
        s = i.handle({
          url: n,
          request: t,
          event: e,
          params: r
        });
      } catch (t) {
        s = Promise.reject(t);
      }
      if (s instanceof Promise && this._catchHandler) {
        s = s.catch(r => this._catchHandler.handle({
          url: n,
          request: t,
          event: e
        }));
      }
      return s;
    }
    findMatchingRoute({
      url: t,
      request: e,
      event: n
    }) {
      const r = this._routes.get(e.method) || [];
      for (const o of r) {
        let r;
        const i = o.match({
          url: t,
          request: e,
          event: n
        });
        if (i) {
          r = i;
          if (Array.isArray(i) && i.length === 0 || i.constructor === Object && Object.keys(i).length === 0 || typeof i == "boolean") {
            r = undefined;
          }
          return {
            route: o,
            params: r
          };
        }
      }
      return {};
    }
    setDefaultHandler(t) {
      this._defaultHandler = b(t);
    }
    setCatchHandler(t) {
      this._catchHandler = b(t);
    }
    registerRoute(t) {
      if (!this._routes.has(t.method)) {
        this._routes.set(t.method, []);
      }
      this._routes.get(t.method).push(t);
    }
    unregisterRoute(t) {
      if (!this._routes.has(t.method)) {
        throw new o("unregister-route-but-not-found-with-method", {
          method: t.method
        });
      }
      const e = this._routes.get(t.method).indexOf(t);
      if (!(e > -1)) {
        throw new o("unregister-route-route-not-registered");
      }
      this._routes.get(t.method).splice(e, 1);
    }
  }
  let T;
  const E = () => {
    if (!T) {
      T = new x();
      T.addFetchListener();
      T.addCacheListener();
    }
    return T;
  };
  function O(t, e, n) {
    let r;
    if (typeof t == "string") {
      const o = new URL(t, location.href);
      0;
      r = new w(({
        url: t
      }) => t.href === o.href, e, n);
    } else if (t instanceof RegExp) {
      r = new _(t, e, n);
    } else if (typeof t == "function") {
      r = new w(t, e, n);
    } else {
      if (!(t instanceof w)) {
        throw new o("unsupported-route-type", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
      }
      r = t;
    }
    E().registerRoute(r);
    return r;
  }
  n(26);
  class S {
    constructor(t = {}) {
      this._cacheName = c(t.cacheName);
      this._plugins = t.plugins || [];
      this._fetchOptions = t.fetchOptions;
      this._matchOptions = t.matchOptions;
    }
    async handle({
      event: t,
      request: e
    }) {
      if (typeof e == "string") {
        e = new Request(e);
      }
      let n;
      let r = await d({
        cacheName: this._cacheName,
        request: e,
        event: t,
        matchOptions: this._matchOptions,
        plugins: this._plugins
      });
      if (r) {
        0;
      } else {
        0;
        try {
          r = await this._getFromNetwork(e, t);
        } catch (t) {
          n = t;
        }
        0;
      }
      if (!r) {
        throw new o("no-response", {
          url: e.url,
          error: n
        });
      }
      return r;
    }
    async _getFromNetwork(t, e) {
      const n = await v({
        request: t,
        event: e,
        fetchOptions: this._fetchOptions,
        plugins: this._plugins
      });
      const r = n.clone();
      const o = p({
        cacheName: this._cacheName,
        request: t,
        response: r,
        event: e,
        plugins: this._plugins
      });
      if (e) {
        try {
          e.waitUntil(o);
        } catch (t) {
          0;
        }
      }
      return n;
    }
  }
  const I = {
    cacheWillUpdate: async ({
      response: t
    }) => t.status === 200 || t.status === 0 ? t : null
  };
  class A {
    constructor(t = {}) {
      this._cacheName = c(t.cacheName);
      this._plugins = t.plugins || [];
      if (t.plugins) {
        const e = t.plugins.some(t => !!t.cacheWillUpdate);
        this._plugins = e ? t.plugins : [I, ...t.plugins];
      } else {
        this._plugins = [I];
      }
      this._fetchOptions = t.fetchOptions;
      this._matchOptions = t.matchOptions;
    }
    async handle({
      event: t,
      request: e
    }) {
      if (typeof e == "string") {
        e = new Request(e);
      }
      const n = this._getFromNetwork({
        request: e,
        event: t
      });
      let r;
      let i = await d({
        cacheName: this._cacheName,
        request: e,
        event: t,
        matchOptions: this._matchOptions,
        plugins: this._plugins
      });
      if (i) {
        if (t) {
          try {
            t.waitUntil(n);
          } catch (r) {
            0;
          }
        }
      } else {
        0;
        try {
          i = await n;
        } catch (t) {
          r = t;
        }
      }
      if (!i) {
        throw new o("no-response", {
          url: e.url,
          error: r
        });
      }
      return i;
    }
    async _getFromNetwork({
      request: t,
      event: e
    }) {
      const n = await v({
        request: t,
        event: e,
        fetchOptions: this._fetchOptions,
        plugins: this._plugins
      });
      const r = p({
        cacheName: this._cacheName,
        request: t,
        response: n.clone(),
        event: e,
        plugins: this._plugins
      });
      if (e) {
        try {
          e.waitUntil(r);
        } catch (t) {
          0;
        }
      }
      return n;
    }
  }
  n(59);
  const N = t => {
    const e = new URL(t, location.href);
    e.hash = "";
    return e.href;
  };
  class j {
    constructor(t) {
      this._cacheName = t;
      this._db = new m("workbox-expiration", 1, {
        onupgradeneeded: t => this._handleUpgrade(t)
      });
    }
    _handleUpgrade(t) {
      const e = t.target.result.createObjectStore("cache-entries", {
        keyPath: "id"
      });
      e.createIndex("cacheName", "cacheName", {
        unique: false
      });
      e.createIndex("timestamp", "timestamp", {
        unique: false
      });
      (async t => {
        await new Promise((e, n) => {
          const r = indexedDB.deleteDatabase(t);
          r.onerror = () => {
            n(r.error);
          };
          r.onblocked = () => {
            n(new Error("Delete blocked"));
          };
          r.onsuccess = () => {
            e();
          };
        });
      })(this._cacheName);
    }
    async setTimestamp(t, e) {
      const n = {
        url: t = N(t),
        timestamp: e,
        cacheName: this._cacheName,
        id: this._getId(t)
      };
      await this._db.put("cache-entries", n);
    }
    async getTimestamp(t) {
      return (await this._db.get("cache-entries", this._getId(t))).timestamp;
    }
    async expireEntries(t, e) {
      const n = await this._db.transaction("cache-entries", "readwrite", (n, r) => {
        const o = n.objectStore("cache-entries").index("timestamp").openCursor(null, "prev");
        const i = [];
        let s = 0;
        o.onsuccess = () => {
          const n = o.result;
          if (n) {
            const r = n.value;
            if (r.cacheName === this._cacheName) {
              if (t && r.timestamp < t || e && s >= e) {
                i.push(n.value);
              } else {
                s++;
              }
            }
            n.continue();
          } else {
            r(i);
          }
        };
      });
      const r = [];
      for (const t of n) {
        await this._db.delete("cache-entries", t.id);
        r.push(t.url);
      }
      return r;
    }
    _getId(t) {
      return this._cacheName + "|" + N(t);
    }
  }
  class D {
    constructor(t, e = {}) {
      this._isRunning = false;
      this._rerunRequested = false;
      this._maxEntries = e.maxEntries;
      this._maxAgeSeconds = e.maxAgeSeconds;
      this._cacheName = t;
      this._timestampModel = new j(t);
    }
    async expireEntries() {
      if (this._isRunning) {
        this._rerunRequested = true;
        return;
      }
      this._isRunning = true;
      const t = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1000 : 0;
      const e = await this._timestampModel.expireEntries(t, this._maxEntries);
      const n = await self.caches.open(this._cacheName);
      for (const t of e) {
        await n.delete(t);
      }
      this._isRunning = false;
      if (this._rerunRequested) {
        this._rerunRequested = false;
        y(this.expireEntries());
      }
    }
    async updateTimestamp(t) {
      await this._timestampModel.setTimestamp(t, Date.now());
    }
    async isURLExpired(t) {
      if (this._maxAgeSeconds) {
        return (await this._timestampModel.getTimestamp(t)) < Date.now() - this._maxAgeSeconds * 1000;
      }
      return false;
    }
    async delete() {
      this._rerunRequested = false;
      await this._timestampModel.expireEntries(Infinity);
    }
  }
  class C {
    constructor(t = {}) {
      var e;
      this.cachedResponseWillBeUsed = async ({
        event: t,
        request: e,
        cacheName: n,
        cachedResponse: r
      }) => {
        if (!r) {
          return null;
        }
        const o = this._isResponseDateFresh(r);
        const i = this._getCacheExpiration(n);
        y(i.expireEntries());
        const s = i.updateTimestamp(e.url);
        if (t) {
          try {
            t.waitUntil(s);
          } catch (t) {
            0;
          }
        }
        if (o) {
          return r;
        } else {
          return null;
        }
      };
      this.cacheDidUpdate = async ({
        cacheName: t,
        request: e
      }) => {
        const n = this._getCacheExpiration(t);
        await n.updateTimestamp(e.url);
        await n.expireEntries();
      };
      this._config = t;
      this._maxAgeSeconds = t.maxAgeSeconds;
      this._cacheExpirations = new Map();
      if (t.purgeOnQuotaError) {
        e = () => this.deleteCacheAndMetadata();
        i.add(e);
      }
    }
    _getCacheExpiration(t) {
      if (t === c()) {
        throw new o("expire-custom-caches-only");
      }
      let e = this._cacheExpirations.get(t);
      if (!e) {
        e = new D(t, this._config);
        this._cacheExpirations.set(t, e);
      }
      return e;
    }
    _isResponseDateFresh(t) {
      if (!this._maxAgeSeconds) {
        return true;
      }
      const e = this._getDateHeaderTimestamp(t);
      if (e === null) {
        return true;
      }
      return e >= Date.now() - this._maxAgeSeconds * 1000;
    }
    _getDateHeaderTimestamp(t) {
      if (!t.headers.has("date")) {
        return null;
      }
      const e = t.headers.get("date");
      const n = new Date(e).getTime();
      if (isNaN(n)) {
        return null;
      } else {
        return n;
      }
    }
    async deleteCacheAndMetadata() {
      for (const [t, e] of this._cacheExpirations) {
        await self.caches.delete(t);
        await e.delete();
      }
      this._cacheExpirations = new Map();
    }
  }
  n(105);
  class P {
    constructor(t = {}) {
      this._statuses = t.statuses;
      this._headers = t.headers;
    }
    isResponseCacheable(t) {
      let e = true;
      if (this._statuses) {
        e = this._statuses.includes(t.status);
      }
      if (this._headers && e) {
        e = Object.keys(this._headers).some(e => t.headers.get(e) === this._headers[e]);
      }
      return e;
    }
  }
  class k {
    constructor(t) {
      this.cacheWillUpdate = async ({
        response: t
      }) => this._cacheableResponse.isResponseCacheable(t) ? t : null;
      this._cacheableResponse = new P(t);
    }
  }
  self.__WB_DISABLE_DEV_LOGS = true;
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", () => self.clients.claim());
  const R = [new C({
    maxAgeSeconds: 3600
  }), new k({
    statuses: [200],
    headers: {
      "i-success": "true"
    }
  })];
  const L = [new C({
    maxAgeSeconds: 604800
  }), new k({
    statuses: [200],
    headers: {
      "i-success": "true"
    }
  })];
  var M;
  O(({
    url: t
  }) => t.pathname === "/get_concat_info", new S({
    cacheName: "infinity-api",
    plugins: R
  }));
  O(({
    url: t
  }) => t.pathname === "/v2/get_ext_version", new S({
    cacheName: "infinity-api",
    plugins: R
  }));
  O(({
    url: t
  }) => t.pathname === "/v2/get_user_wallpaper_library", new class {
    constructor(t = {}) {
      this._cacheName = c(t.cacheName);
      if (t.plugins) {
        const e = t.plugins.some(t => !!t.cacheWillUpdate);
        this._plugins = e ? t.plugins : [I, ...t.plugins];
      } else {
        this._plugins = [I];
      }
      this._networkTimeoutSeconds = t.networkTimeoutSeconds || 0;
      this._fetchOptions = t.fetchOptions;
      this._matchOptions = t.matchOptions;
    }
    async handle({
      event: t,
      request: e
    }) {
      const n = [];
      if (typeof e == "string") {
        e = new Request(e);
      }
      const r = [];
      let i;
      if (this._networkTimeoutSeconds) {
        const {
          id: o,
          promise: s
        } = this._getTimeoutPromise({
          request: e,
          event: t,
          logs: n
        });
        i = o;
        r.push(s);
      }
      const s = this._getNetworkPromise({
        timeoutId: i,
        request: e,
        event: t,
        logs: n
      });
      r.push(s);
      let a = await Promise.race(r);
      a ||= await s;
      if (!a) {
        throw new o("no-response", {
          url: e.url
        });
      }
      return a;
    }
    _getTimeoutPromise({
      request: t,
      logs: e,
      event: n
    }) {
      let r;
      return {
        promise: new Promise(e => {
          r = setTimeout(async () => {
            e(await this._respondFromCache({
              request: t,
              event: n
            }));
          }, this._networkTimeoutSeconds * 1000);
        }),
        id: r
      };
    }
    async _getNetworkPromise({
      timeoutId: t,
      request: e,
      logs: n,
      event: r
    }) {
      let o;
      let i;
      try {
        i = await v({
          request: e,
          event: r,
          fetchOptions: this._fetchOptions,
          plugins: this._plugins
        });
      } catch (t) {
        o = t;
      }
      if (t) {
        clearTimeout(t);
      }
      if (o || !i) {
        i = await this._respondFromCache({
          request: e,
          event: r
        });
      } else {
        const t = i.clone();
        const n = p({
          cacheName: this._cacheName,
          request: e,
          response: t,
          event: r,
          plugins: this._plugins
        });
        if (r) {
          try {
            r.waitUntil(n);
          } catch (t) {
            0;
          }
        }
      }
      return i;
    }
    _respondFromCache({
      event: t,
      request: e
    }) {
      return d({
        cacheName: this._cacheName,
        request: e,
        event: t,
        matchOptions: this._matchOptions,
        plugins: this._plugins
      });
    }
  }({
    cacheName: "infinity-api",
    plugins: L
  }));
  O(({
    url: t
  }) => t.pathname === "/get-wallpaper", new A({
    cacheName: "infinity-wallpaper-list"
  }));
  O(({
    url: t
  }) => t.pathname === "/get-icons", new A({
    cacheName: "infinity-data-api"
  }));
  O(({
    url: t
  }) => ["/api/chat/list", "/api/chat/recommended", "/api/chat/assistant-list", "/api/chat-pay/vip-group"].includes(t.pathname), new S({
    cacheName: "req-data-api",
    plugins: (M = 600, [new C({
      maxAgeSeconds: M,
      maxEntries: 10
    }), new k({
      statuses: [200],
      headers: {
        "i-success": "true"
      }
    })]),
    fetchOptions: {
      mode: "cors",
      credentials: "omit"
    }
  }));
}]);