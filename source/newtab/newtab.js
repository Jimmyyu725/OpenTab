(function (t) {
  function e(e) {
    var n;
    var i;
    for (var o = e[0], a = e[1], s = 0, u = []; s < o.length; s++) {
      i = o[s];
      if (Object.prototype.hasOwnProperty.call(r, i) && r[i]) {
        u.push(r[i][0]);
      }
      r[i] = 0;
    }
    for (n in a) {
      if (Object.prototype.hasOwnProperty.call(a, n)) {
        t[n] = a[n];
      }
    }
    for (c && c(e); u.length;) {
      u.shift()();
    }
  }
  var n = {};
  var r = {
    16: 0,
    4: 0,
    5: 0,
    27: 0
  };
  function i(e) {
    if (n[e]) {
      return n[e].exports;
    }
    var r = n[e] = {
      i: e,
      l: false,
      exports: {}
    };
    t[e].call(r.exports, r, r.exports, i);
    r.l = true;
    return r.exports;
  }
  i.e = function (t) {
    var e = [];
    var n = r[t];
    if (n !== 0) {
      if (n) {
        e.push(n[2]);
      } else {
        var o = new Promise(function (e, i) {
          n = r[t] = [e, i];
        });
        e.push(n[2] = o);
        var a;
        var s = document.createElement("script");
        s.charset = "utf-8";
        s.timeout = 120;
        if (i.nc) {
          s.setAttribute("nonce", i.nc);
        }
        s.src = function (t) {
          return i.p + "" + t + ".js";
        }(t);
        var c = new Error();
        a = function (e) {
          s.onerror = s.onload = null;
          clearTimeout(u);
          var n = r[t];
          if (n !== 0) {
            if (n) {
              var i = e && (e.type === "load" ? "missing" : e.type);
              var o = e && e.target && e.target.src;
              c.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")";
              c.name = "ChunkLoadError";
              c.type = i;
              c.request = o;
              n[1](c);
            }
            r[t] = undefined;
          }
        };
        var u = setTimeout(function () {
          a({
            type: "timeout",
            target: s
          });
        }, 120000);
        s.onerror = s.onload = a;
        document.head.appendChild(s);
      }
    }
    return Promise.all(e);
  };
  i.m = t;
  i.c = n;
  i.d = function (t, e, n) {
    if (!i.o(t, e)) {
      Object.defineProperty(t, e, {
        enumerable: true,
        get: n
      });
    }
  };
  i.r = function (t) {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
  };
  i.t = function (t, e) {
    if (e & 1) {
      t = i(t);
    }
    if (e & 8) {
      return t;
    }
    if (e & 4 && typeof t == "object" && t && t.__esModule) {
      return t;
    }
    var n = Object.create(null);
    i.r(n);
    Object.defineProperty(n, "default", {
      enumerable: true,
      value: t
    });
    if (e & 2 && typeof t != "string") {
      for (var r in t) {
        i.d(n, r, function (e) {
          return t[e];
        }.bind(null, r));
      }
    }
    return n;
  };
  i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    i.d(e, "a", e);
    return e;
  };
  i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  };
  i.p = "/";
  i.oe = function (t) {
    console.error(t);
    throw t;
  };
  var o = window.webpackJsonp = window.webpackJsonp || [];
  var a = o.push.bind(o);
  o.push = e;
  o = o.slice();
  for (var s = 0; s < o.length; s++) {
    e(o[s]);
  }
  var c = a;
  i(i.s = 598);
})([function (t, e, n) {
  "use strict";

  n.d(e, "t", function () {
    return i;
  });
  n.d(e, "j", function () {
    return o;
  });
  n.d(e, "q", function () {
    return a;
  });
  n.d(e, "s", function () {
    return s;
  });
  n.d(e, "h", function () {
    return c;
  });
  n.d(e, "i", function () {
    return u;
  });
  n.d(e, "n", function () {
    return l;
  });
  n.d(e, "k", function () {
    return f;
  });
  n.d(e, "r", function () {
    return h;
  });
  n.d(e, "e", function () {
    return p;
  });
  n.d(e, "c", function () {
    return d;
  });
  n.d(e, "z", function () {
    return m;
  });
  n.d(e, "d", function () {
    return g;
  });
  n.d(e, "l", function () {
    return y;
  });
  n.d(e, "m", function () {
    return b;
  });
  n.d(e, "o", function () {
    return w;
  });
  n.d(e, "p", function () {
    return v;
  });
  n.d(e, "v", function () {
    return _;
  });
  n.d(e, "a", function () {
    return E;
  });
  n.d(e, "y", function () {
    return x;
  });
  n.d(e, "w", function () {
    return T;
  });
  n.d(e, "u", function () {
    return I;
  });
  n.d(e, "x", function () {
    return O;
  });
  n.d(e, "B", function () {
    return S;
  });
  n.d(e, "A", function () {
    return A;
  });
  n.d(e, "f", function () {
    return N;
  });
  n.d(e, "b", function () {
    return j;
  });
  n.d(e, "g", function () {
    return C;
  });
  n.d(e, "G", function () {
    return k;
  });
  n.d(e, "F", function () {
    return R;
  });
  n.d(e, "C", function () {
    return P;
  });
  n.d(e, "D", function () {
    return F;
  });
  n.d(e, "E", function () {
    return U;
  });
  n(19);
  n(64);
  const i = typeof window != "object";
  const o = false;
  const a = true;
  const s = false;
  const c = false;
  const u = true;
  const l = false;
  const f = false;
  const h = false;
  const p = "pro";
  const d = "chrome";
  const m = "11.0.41";
  const g = "1783058950124";
  const y = u || l || f || c || h;
  const b = (u || l || f || h) && !c;
  const w = navigator.platform.indexOf("Mac") >= 0;
  const v = false;
  const _ = a ? "jiaocheng.inftab.com" : "qzeuoq1yf.hn-bkt.clouddn.com";
  const E = "https://infinityicon.infinitynewtab.com/assets";
  const x = a ? "https://api.inftab.com/v2" : "https://api-infinitynewtab-com.test690.com/v2";
  const T = a ? "https://api.inftab.com" : "https://api-infinitynewtab-com.test690.com";
  const I = "https://privacy.inftab.com/privacy";
  const O = "https://infinity-api.infinitynewtab.com";
  const S = s ? location.origin : a ? "https://inftab.com" : "https://test.inftab.com";
  const A = "https://weatheroffer.com/api/extfans";
  const N = "https://mail.google.com";
  const j = "https://suggestion.baidu.com";
  const C = "https://google.com";
  const D = ["cs", "da", "de", "el", "en", "en-GB", "en-US", "es", "es-419", "fi", "fr", "hi", "hu", "id", "it", "ja", "ko", "ms", "nl", "no", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
  const k = !!globalThis.chrome?.abp;
  function R(t = "", e = "_") {
    const n = t.split(e);
    if (n.length === 2) {
      n[0] = n[0].toLowerCase();
      n[1] = n[1].toUpperCase();
      return n.join(e);
    } else {
      return t;
    }
  }
  function L(t) {
    const e = R(t.replace("_", "-"), "-");
    if (D.includes(e)) {
      return e;
    } else if (t === "zh" || e.indexOf("zh-") === 0) {
      return "zh-CN";
    } else {
      return "en-US";
    }
  }
  const P = {
    get lang() {
      if (s) {
        return function () {
          if (!i) {
            const t = localStorage.getItem("langCode");
            if (localStorage.getItem("setLangCode") !== null && t !== null) {
              return t;
            }
          }
          return L(navigator.language || "en-us");
        }();
      } else {
        return L(chrome.i18n.getUILanguage());
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
      return !h && this.runtimePlatform !== "safari";
    },
    get runtimePlatform() {
      if (k) {
        return "360";
      } else {
        return M().broswer;
      }
    },
    get platformVersion() {
      return M().version;
    },
    get isZh() {
      return P.lang === "zh-CN";
    },
    get isEn() {
      return /^(en|en-GB|en-US)$/.test(P.lang);
    },
    get isWindows() {
      return /windows|win32/i.test(navigator.userAgent);
    },
    get isMac() {
      return navigator.platform.toLowerCase().indexOf("mac") !== -1;
    },
    get vendor() {
      let t = d;
      if (d === "web") {
        t = M().broswer;
      }
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
  };
  function M() {
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
  const F = "10.0.107";
  const U = "10.0.109";
},,, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return v;
  });
  n.d(e, "a", function () {
    return _;
  });
  n(19);
  n(7);
  var r = n(5);
  var i = n.n(r);
  var o = n(107);
  var a = n.n(o);
  var s = n(0);
  var c = n(50);
  var u = n(13);
  const l = a.a.create({
    timeout: 30000
  });
  let f = false;
  const h = [];
  const p = () => new i.a(async (t, e) => {
    h.push({
      resolve: t,
      reject: e
    });
    if (!f) {
      f = true;
      try {
        let t;
        if (c.a) {
          const e = s.l && window.updateFromThirtyFiveStatus;
          const {
            data: n
          } = await u.l.read(e ? "localstorage" : null);
          t = n;
        } else {
          t = (await Promise.all([n.e(0), n.e(1), n.e(2), n.e(6)]).then(n.bind(null, 429))).userStore;
        }
        const {
          refreshToken: e
        } = t;
        if (!e) {
          t.setOutdated();
          f = false;
          h.forEach(t => {
            t.reject(new Error("no refreshtoken"));
          });
          return;
        }
        const {
          status: r,
          data: i
        } = await l.post(s.y + "/refresh_token", {
          refresh_token: e
        }, {
          headers: {
            "i-lang": s.C.lang
          }
        });
        if (r === 200 && i.code === 0) {
          const {
            token: e,
            refreshToken: n
          } = i.data;
          t.setToken(i.data);
          t.setRefreshToken(n);
          f = false;
          h.forEach(t => {
            t.resolve(e);
          });
        } else {
          if (r !== 200 || i.code !== 3010 && i.code !== 3012) {
            throw new Error(i == null ? undefined : i.message);
          }
          t.setOutdated();
          f = false;
          h.forEach(t => {
            t.reject(i.message);
          });
        }
      } catch (t) {
        f = false;
        h.forEach(e => {
          e.reject(t);
        });
      }
    }
  });
  var d = n(24);
  const m = ["params", "data", "_auth"];
  const g = async t => {
    const {
      slave: e
    } = await n.e(9).then(n.bind(null, 161));
    const r = ((t, e = {}) => {
      const n = Object.keys(e).map(t => `${t}=${encodeURIComponent(e[t])}`);
      if (n.length) {
        if (t.includes("?")) {
          return t + n.join("&");
        } else {
          return t + "?" + n.join("&");
        }
      } else {
        return t;
      }
    })(t.url, t.params);
    const {
      request: i,
      option: o
    } = (t => {
      const e = {};
      const n = {};
      if (t.data && !e.body) {
        e.body = JSON.stringify(t.data);
      }
      Object.keys(t).forEach(r => {
        if (!m.includes(r)) {
          if (r.startsWith("_")) {
            n[r] = t[r];
          } else {
            e[r] = t[r];
          }
        }
      });
      return {
        request: e,
        option: n
      };
    })(t);
    return e.postTask("slave:fetch", {
      url: r,
      request: i,
      option: o
    });
  };
  const y = a.a.CancelToken;
  const b = a.a.create({
    timeout: 60000
  });
  b.interceptors.response.use(null, t => {
    t.message = i18n("network_error");
    return i.a.reject(t);
  });
  const w = Object.create(null);
  const v = t => {
    if (w[t]) {
      w[t]();
    }
  };
  const _ = async t => {
    if (t._single) {
      const e = (t => {
        let e;
        e = t._single === true ? t.method + "-" + t.url.split("?")[0] : t._single;
        return e;
      })(t);
      if (w[e]) {
        w[e]();
      }
      t.cancelToken = new y(t => {
        w[e] = t;
      });
    }
    var e;
    if (t._delay) {
      await (e = t._delay, new i.a(t => {
        setTimeout(t, e);
      }));
    }
    const r = {};
    if (t._auth) {
      let e = null;
      if (c.a) {
        const t = s.l && window.updateFromThirtyFiveStatus;
        const {
          data: n
        } = await u.l.read(t ? "localstorage" : null);
        e = n;
      } else {
        const {
          userStore: t
        } = await Promise.all([n.e(0), n.e(1), n.e(2), n.e(6)]).then(n.bind(null, 429));
        e = t;
      }
      if (!e || !e.token) {
        throw new Error("error token");
      }
      {
        const n = d.a.parseJwt(e.token);
        const i = await d.a.getTimestamp();
        if (t._Authorization) {
          r.Authorization = t._Authorization;
          r["i-token"] = t._Authorization;
        } else if (Math.floor(i / 1000) > n.exp - 60) {
          const t = await p();
          r.Authorization = "Bearer " + t;
          r["i-token"] = "Bearer " + t;
        } else {
          r.Authorization = "Bearer " + e.token;
          r["i-token"] = "Bearer " + e.token;
        }
      }
    }
    let o;
    if (t.url.includes(s.y)) {
      r["i-lang"] = s.C.lang;
      r["i-edition"] = s.e;
      r["i-version"] = s.C.extVersion;
    }
    t.headers = Object.assign(Object.assign({}, r), t.headers);
    o = t._proxy ? await g(t) : await b(t);
    if (t._responseAll) {
      return o;
    }
    let {
      data: a
    } = o;
    if (!t._Authorization && (a == null ? undefined : a.code) === 3010) {
      const e = await p();
      t._Authorization = "Bearer " + e;
      delete t.headers.Authorization;
      delete t.headers["i-token"];
      a = await _(t);
    }
    return a;
  };
  ["get", "delete"].forEach(t => {
    _[t] = (e, n, r = {}) => _(Object.assign({
      url: e,
      params: n,
      method: t
    }, r));
  });
  ["post", "patch", "put"].forEach(t => {
    _[t] = (e, n, r = {}) => _(Object.assign({
      url: e,
      data: n,
      method: t
    }, r));
  });
  _.jsonp = (t, e, n = {}) => _(Object.assign({
    url: t,
    params: e
  }, n));
}, function (t, e, n) {
  (function (e) {
    function n(t) {
      return t && t.Math == Math && t;
    }
    t.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof e == "object" && e) || function () {
      return this;
    }() || Function("return this")();
  }).call(this, n(25));
}, function (t, e, n) {
  t.exports = n(267);
}, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "i18n", function () {
    return u;
  });
  n.d(e, "IS_ZH", function () {
    return f;
  });
  n.d(e, "IS_EN", function () {
    return h;
  });
  n.d(e, "initMasterI18n", function () {
    return p;
  });
  n.d(e, "initI18n", function () {
    return d;
  });
  n.d(e, "setLangToLocal", function () {
    return g;
  });
  n.d(e, "getLangFromLocal", function () {
    return y;
  });
  n(19);
  n(64);
  n(7);
  var r = n(0);
  var i = n(107);
  var o = n.n(i);
  var a = n(23);
  var s = n.n(a);
  let c = {};
  const u = function (t, e) {
    if (r.l && !r.r) {
      return chrome.i18n.getMessage(t, e) || t;
    }
    if (r.s || r.r) {
      if (r.r && e === undefined) {
        return chrome.i18n.getMessage(t, e) || t;
      }
      const i = c[t]?.message;
      const o = [];
      if (typeof e == "string") {
        o.push(e);
      } else if (Array.isArray(e)) {
        o.push(...e);
      }
      const a = /(\$.+?\$)/g;
      let s = a.exec(i);
      let u = i;
      while (s) {
        let [t] = o.splice(0, 1);
        if (t === undefined) {
          t = "";
        }
        u = u.replace(s[1], t);
        s = a.exec(i);
      }
      return u || t;
    }
    return t;
  };
  function l() {
    return r.C.lang || "";
  }
  if (r.t) {
    globalThis.i18n = u;
  } else {
    window.i18n = u;
  }
  const f = l() === "zh-CN";
  const h = l().startsWith("en");
  async function p() {
    const t = await y();
    c = t;
  }
  async function d() {
    if (!r.s && !r.r) {
      return;
    }
    const {
      slave: t
    } = await Promise.all([n.e(27), n.e(33)]).then(n.bind(null, 161));
    const e = r.C.lang;
    try {
      const n = await y();
      const r = localStorage.getItem("setLangCode");
      const i = localStorage.getItem("langCode");
      if (r !== null && n !== null || i === e && n !== null) {
        c = n;
        m(r ? i : e);
      } else {
        await m(r ? i : e);
      }
      t.postTask("slave:master-init-i18n", c);
    } catch (t) {}
  }
  async function m(t) {
    const e = t.replace("-", "_");
    const n = (await o.a.get(`${r.B}/_locales/${Object(r.F)(e)}/messages.json?v=1727661706484`)).data;
    if (Object.keys(n).length > 50) {
      c = n;
      localStorage.setItem("langCode", t);
      g(n);
    }
  }
  function g(t) {
    return s.a.setItem("current-language", t);
  }
  function y() {
    return s.a.getItem("current-language");
  }
}, function (t, e, n) {
  "use strict";

  var r;
  var i;
  var o;
  var a;
  var s = n(77);
  var c = n(56);
  var u = n(4);
  var l = n(18);
  var f = n(88);
  var h = n(26);
  var p = n(119);
  var d = n(83);
  var m = n(121);
  var g = n(102);
  var y = n(12);
  var b = n(27);
  var w = n(123);
  var v = n(41);
  var _ = n(124);
  var E = n(129);
  var x = n(89);
  var T = n(72).set;
  var I = n(130);
  var O = n(90);
  var S = n(132);
  var A = n(74);
  var N = n(133);
  var j = n(49);
  var C = n(60);
  var D = n(8);
  var k = n(134);
  var R = n(43);
  var L = n(59);
  var P = D("species");
  var M = "Promise";
  var F = j.get;
  var U = j.set;
  var B = j.getterFor(M);
  var $ = f && f.prototype;
  var q = f;
  var G = $;
  var W = u.TypeError;
  var V = u.document;
  var z = u.process;
  var Y = A.f;
  var H = Y;
  var X = !!V && !!V.createEvent && !!u.dispatchEvent;
  var K = typeof PromiseRejectionEvent == "function";
  var J = false;
  var Q = C(M, function () {
    var t = v(q);
    var e = t !== String(q);
    if (!e && L === 66) {
      return true;
    }
    if (c && !G.finally) {
      return true;
    }
    if (L >= 51 && /native code/.test(t)) {
      return false;
    }
    var n = new q(function (t) {
      t(1);
    });
    function r(t) {
      t(function () {}, function () {});
    }
    (n.constructor = {})[P] = r;
    return !(J = n.then(function () {}) instanceof r) || !e && k && !K;
  });
  var Z = Q || !E(function (t) {
    q.all(t).catch(function () {});
  });
  function tt(t) {
    var e;
    return !!y(t) && typeof (e = t.then) == "function" && e;
  }
  function et(t, e) {
    if (!t.notified) {
      t.notified = true;
      var n = t.reactions;
      I(function () {
        var r = t.value;
        for (var i = t.state == 1, o = 0; n.length > o;) {
          var a;
          var s;
          var c;
          var u = n[o++];
          var l = i ? u.ok : u.fail;
          var f = u.resolve;
          var h = u.reject;
          var p = u.domain;
          try {
            if (l) {
              if (!i) {
                if (t.rejection === 2) {
                  ot(t);
                }
                t.rejection = 1;
              }
              if (l === true) {
                a = r;
              } else {
                if (p) {
                  p.enter();
                }
                a = l(r);
                if (p) {
                  p.exit();
                  c = true;
                }
              }
              if (a === u.promise) {
                h(W("Promise-chain cycle"));
              } else if (s = tt(a)) {
                s.call(a, f, h);
              } else {
                f(a);
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
    var i;
    if (X) {
      (r = V.createEvent("Event")).promise = e;
      r.reason = n;
      r.initEvent(t, false, true);
      u.dispatchEvent(r);
    } else {
      r = {
        promise: e,
        reason: n
      };
    }
    if (!K && (i = u["on" + t])) {
      i(r);
    } else if (t === "unhandledrejection") {
      S("Unhandled promise rejection", n);
    }
  }
  function rt(t) {
    T.call(u, function () {
      var e;
      var n = t.facade;
      var r = t.value;
      if (it(t) && (e = N(function () {
        if (R) {
          z.emit("unhandledRejection", r, n);
        } else {
          nt("unhandledrejection", n, r);
        }
      }), t.rejection = R || it(t) ? 2 : 1, e.error)) {
        throw e.value;
      }
    });
  }
  function it(t) {
    return t.rejection !== 1 && !t.parent;
  }
  function ot(t) {
    T.call(u, function () {
      var e = t.facade;
      if (R) {
        z.emit("rejectionHandled", e);
      } else {
        nt("rejectionhandled", e, t.value);
      }
    });
  }
  function at(t, e, n) {
    return function (r) {
      t(e, r, n);
    };
  }
  function st(t, e, n) {
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
          throw W("Promise can't be resolved itself");
        }
        var r = tt(e);
        if (r) {
          I(function () {
            var n = {
              done: false
            };
            try {
              r.call(e, at(ct, n, t), at(st, n, t));
            } catch (e) {
              st(n, e, t);
            }
          });
        } else {
          t.value = e;
          t.state = 1;
          et(t, false);
        }
      } catch (e) {
        st({
          done: false
        }, e, t);
      }
    }
  }
  if (Q && (G = (q = function (t) {
    w(this, q, M);
    b(t);
    r.call(this);
    var e = F(this);
    try {
      t(at(ct, e), at(st, e));
    } catch (t) {
      st(e, t);
    }
  }).prototype, (r = function (t) {
    U(this, {
      type: M,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: 0,
      value: undefined
    });
  }).prototype = p(G, {
    then: function (t, e) {
      var n = B(this);
      var r = Y(x(this, q));
      r.ok = typeof t != "function" || t;
      r.fail = typeof e == "function" && e;
      r.domain = R ? z.domain : undefined;
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
  }), i = function () {
    var t = new r();
    var e = F(t);
    this.promise = t;
    this.resolve = at(ct, e);
    this.reject = at(st, e);
  }, A.f = Y = function (t) {
    if (t === q || t === o) {
      return new i(t);
    } else {
      return H(t);
    }
  }, !c && typeof f == "function" && $ !== Object.prototype)) {
    a = $.then;
    if (!J) {
      h($, "then", function (t, e) {
        var n = this;
        return new q(function (t, e) {
          a.call(n, t, e);
        }).then(t, e);
      }, {
        unsafe: true
      });
      h($, "catch", G.catch, {
        unsafe: true
      });
    }
    try {
      delete $.constructor;
    } catch (t) {}
    if (d) {
      d($, G);
    }
  }
  s({
    global: true,
    wrap: true,
    forced: Q
  }, {
    Promise: q
  });
  m(q, M, false, true);
  g(M);
  o = l(M);
  s({
    target: M,
    stat: true,
    forced: Q
  }, {
    reject: function (t) {
      var e = Y(this);
      e.reject.call(undefined, t);
      return e.promise;
    }
  });
  s({
    target: M,
    stat: true,
    forced: c || Q
  }, {
    resolve: function (t) {
      return O(c && this === o ? q : this, t);
    }
  });
  s({
    target: M,
    stat: true,
    forced: Z
  }, {
    all: function (t) {
      var e = this;
      var n = Y(e);
      var r = n.resolve;
      var i = n.reject;
      var o = N(function () {
        var n = b(e.resolve);
        var o = [];
        var a = 0;
        var s = 1;
        _(t, function (t) {
          var c = a++;
          var u = false;
          o.push(undefined);
          s++;
          n.call(e, t).then(function (t) {
            if (!u) {
              u = true;
              o[c] = t;
              if (! --s) {
                r(o);
              }
            }
          }, i);
        });
        if (! --s) {
          r(o);
        }
      });
      if (o.error) {
        i(o.value);
      }
      return n.promise;
    },
    race: function (t) {
      var e = this;
      var n = Y(e);
      var r = n.reject;
      var i = N(function () {
        var i = b(e.resolve);
        _(t, function (t) {
          i.call(e, t).then(n.resolve, r);
        });
      });
      if (i.error) {
        r(i.value);
      }
      return n.promise;
    }
  });
}, function (t, e, n) {
  var r = n(4);
  var i = n(54);
  var o = n(11);
  var a = n(58);
  var s = n(69);
  var c = n(122);
  var u = i("wks");
  var l = r.Symbol;
  var f = c ? l : l && l.withoutSetter || a;
  t.exports = function (t) {
    if (!o(u, t) || !s && typeof u[t] != "string") {
      if (s && o(l, t)) {
        u[t] = l[t];
      } else {
        u[t] = f("Symbol." + t);
      }
    }
    return u[t];
  };
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return true;
    }
  };
}, function (t, e, n) {
  var r = n(12);
  t.exports = function (t) {
    if (!r(t)) {
      throw TypeError(String(t) + " is not an object");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(78);
  var i = {}.hasOwnProperty;
  t.exports = Object.hasOwn || function (t, e) {
    return i.call(r(t), e);
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
  "use strict";

  n.d(e, "a", function () {
    return p;
  });
  n.d(e, "d", function () {
    return d;
  });
  n.d(e, "g", function () {
    return m;
  });
  n.d(e, "h", function () {
    return g;
  });
  n.d(e, "i", function () {
    return y;
  });
  n.d(e, "j", function () {
    return b;
  });
  n.d(e, "k", function () {
    return w;
  });
  n.d(e, "l", function () {
    return v;
  });
  n.d(e, "n", function () {
    return _;
  });
  n.d(e, "o", function () {
    return E;
  });
  n.d(e, "m", function () {
    return x;
  });
  n.d(e, "b", function () {
    return T;
  });
  n.d(e, "c", function () {
    return I;
  });
  n.d(e, "f", function () {
    return O;
  });
  n.d(e, "e", function () {
    return S;
  });
  var r;
  var i = n(5);
  var o = n.n(i);
  n(7);
  var a = n(0);
  var s = n(50);
  var c = n(23);
  var u = n.n(c);
  var l = n(166);
  async function f(t, e, n, r = false) {
    try {
      if (n === "idb") {
        await u.a.setItem(t, e);
      } else if (n === "localstorage") {
        let n = e;
        if (!r) {
          n = JSON.stringify(e);
        }
        if (a.l && s.a) {
          await Object(l.d)(t, n);
        } else {
          localStorage.setItem(t, n);
        }
      } else if (n === "storage.local") {
        await new o.a((n, r) => chrome.storage.local.set({
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
  async function h(t, e) {
    try {
      if (e === "idb") {
        await u.a.removeItem(t);
      } else if (e === "localstorage") {
        if (a.l && s.a) {
          await Object(l.c)(t);
        } else {
          localStorage.removeItem(t);
        }
      } else if (e === "storage.local") {
        await new o.a((e, n) => chrome.storage.local.remove(t, () => {
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
  })(r ||= {});
  class p {
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
      if ((await o.a.all(t.map(async t => await t.deleteForLogout()))).some(t => !!t.error && (e = t.error, true))) {
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
      p.instanceKeyMapper.set(this.key, this);
    }
    async create(t) {
      return await f(this.key, t, this.type);
    }
    async read(t) {
      return await async function (t, e, n = false) {
        try {
          if (e === "idb") {
            return {
              data: await u.a.getItem(t)
            };
          }
          if (e === "localstorage") {
            let e;
            e = a.l && s.a ? await Object(l.a)(t) : localStorage.getItem(t);
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
              data: await new o.a((e, n) => chrome.storage.local.get(t, r => {
                const i = chrome.runtime.lastError;
                if (i) {
                  n(i);
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
      return await h(this.key, t || this.type);
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
  p.instanceKeyMapper = new Map();
  const d = new p(r.storeNote, "idb");
  const m = new class extends p {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          f(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          h(this.key, "localstorage");
        });
      }
      return super.delete();
    }
    async deleteForLogout() {
      return await super.deleteWithRetain("ignoreSuggest");
    }
  }(r.storeSearch, a.i ? "localstorage" : "idb");
  const g = new class extends p {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          f(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          h(this.key, "localstorage");
        });
      }
      return super.delete();
    }
    async deleteForLogout() {
      return await super.deleteWithRetain("permission");
    }
  }(r.storeSetting, a.i ? "localstorage" : "idb");
  const y = new class extends p {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          f(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          h(this.key, "localstorage");
        });
      }
      return super.delete();
    }
  }(r.storeSite, a.i ? "localstorage" : "idb");
  const b = new class extends p {
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
        error: i
      } = await this.read();
      if (i || !r) {
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
        autoBackupPipe: o
      } = r;
      o.data[t] = e;
      o.timestamp = Date.now();
      if (!o.websocketKeys.includes(t)) {
        o.websocketKeys.push(t);
      }
      const a = await this.update({
        autoBackupPipe: o
      });
      this.sendTabsSync(this.key);
      return a;
    }
  }(r.storeSync, "idb");
  const w = new p(r.storeTodo, "idb");
  const v = new p(r.storeUser, a.i ? "localstorage" : "idb");
  const _ = new p(r.storeWallpaper, "idb");
  const E = new p(r.storeWeather, "idb");
  const x = new p(r.storeWallpaperAutoData, "idb");
  const T = new p(r.storeBookmarks, "localstorage", {
    keepWithLogout: true
  });
  const I = new p(r.storeGmail, "localstorage", {
    keepWithLogout: true
  });
  const O = new p(r.storePrivacy, "localstorage", {
    keepWithLogout: true
  });
  const S = new p(r.storeNotification, "idb");
}, function (t, e, n) {
  (function (e) {
    function n(t) {
      return t && t.Math == Math && t;
    }
    t.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof e == "object" && e) || function () {
      return this;
    }() || Function("return this")();
  }).call(this, n(25));
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
  var r = n(9);
  t.exports = !r(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
}, function (t, e, n) {
  var r = n(14);
  var i = n(193);
  var o = n(37);
  var a = n(194);
  var s = n(198);
  var c = n(280);
  var u = i("wks");
  var l = r.Symbol;
  var f = c ? l : l && l.withoutSetter || a;
  t.exports = function (t) {
    if (!o(u, t) || !s && typeof u[t] != "string") {
      if (s && o(l, t)) {
        u[t] = l[t];
      } else {
        u[t] = f("Symbol." + t);
      }
    }
    return u[t];
  };
}, function (t, e, n) {
  var r = n(115);
  var i = n(4);
  function o(t) {
    if (typeof t == "function") {
      return t;
    } else {
      return undefined;
    }
  }
  t.exports = function (t, e) {
    if (arguments.length < 2) {
      return o(r[t]) || o(i[t]);
    } else {
      return r[t] && r[t][e] || i[t] && i[t][e];
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(77);
  var i = n(137);
  r({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== i
  }, {
    exec: i
  });
}, function (t, e, n) {
  var r = n(16);
  var i = n(21);
  var o = n(66);
  t.exports = r ? function (t, e, n) {
    return i.f(t, e, o(1, n));
  } : function (t, e, n) {
    t[e] = n;
    return t;
  };
}, function (t, e, n) {
  var r = n(16);
  var i = n(68);
  var o = n(10);
  var a = n(67);
  var s = Object.defineProperty;
  e.f = r ? s : function (t, e, n) {
    o(t);
    e = a(e, true);
    o(n);
    if (i) {
      try {
        return s(t, e, n);
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
  "use strict";

  n.d(e, "h", function () {
    return r;
  });
  n.d(e, "c", function () {
    return i;
  });
  n.d(e, "g", function () {
    return O;
  });
  n.d(e, "a", function () {
    return o;
  });
  n.d(e, "f", function () {
    return a;
  });
  n.d(e, "d", function () {
    return c;
  });
  n.d(e, "e", function () {
    return Nt;
  });
  n.d(e, "b", function () {
    return s;
  });
  var r = {};
  n.r(r);
  n.d(r, "getLocalCity", function () {
    return f;
  });
  n.d(r, "getForecastWeather", function () {
    return h;
  });
  n.d(r, "getCityList", function () {
    return p;
  });
  var i = {};
  n.r(i);
  n.d(i, "getSearchSuggest", function () {
    return w;
  });
  n.d(i, "getEnginesList", function () {
    return v;
  });
  var o = {};
  n.r(o);
  n.d(o, "getIcon", function () {
    return j;
  });
  n.d(o, "getUrlInfoWithPermission", function () {
    return k;
  });
  n.d(o, "getUrlIcon", function () {
    return M;
  });
  n.d(o, "getFetchiconUrls", function () {
    return F;
  });
  n.d(o, "getLogoList", function () {
    return U;
  });
  var a = {};
  n.r(a);
  n.d(a, "register", function () {
    return $;
  });
  n.d(a, "login", function () {
    return q;
  });
  n.d(a, "updateProfile", function () {
    return G;
  });
  n.d(a, "getUserProfile", function () {
    return W;
  });
  n.d(a, "uploadAvatar", function () {
    return V;
  });
  n.d(a, "modifyPassword", function () {
    return z;
  });
  n.d(a, "forgetPassword", function () {
    return Y;
  });
  n.d(a, "resetPassword", function () {
    return H;
  });
  n.d(a, "getEmailCode", function () {
    return X;
  });
  n.d(a, "getRegisterCode", function () {
    return K;
  });
  n.d(a, "inspceCode", function () {
    return J;
  });
  n.d(a, "checkTokenIsExpired", function () {
    return Q;
  });
  n.d(a, "deleteAccount", function () {
    return Z;
  });
  n.d(a, "loginWithUid", function () {
    return tt;
  });
  n.d(a, "v1BasicLogin", function () {
    return et;
  });
  n.d(a, "getMobileUid", function () {
    return nt;
  });
  n.d(a, "getMobileloginUrl", function () {
    return rt;
  });
  n.d(a, "checkMobileloginUrl", function () {
    return it;
  });
  n.d(a, "sendPhoneCode", function () {
    return ot;
  });
  n.d(a, "sendEmailCode", function () {
    return at;
  });
  n.d(a, "bindEmail", function () {
    return st;
  });
  n.d(a, "bindPhoneNumber", function () {
    return ct;
  });
  n.d(a, "unbindEmail", function () {
    return ut;
  });
  n.d(a, "unbindPhoneNumber", function () {
    return lt;
  });
  n.d(a, "verifyPhoneVCode", function () {
    return ft;
  });
  n.d(a, "ThirdLoginType", function () {
    return ht;
  });
  n.d(a, "bindThird", function () {
    return pt;
  });
  n.d(a, "unbindThird", function () {
    return dt;
  });
  n.d(a, "getAreaCodeList", function () {
    return mt;
  });
  n.d(a, "verifyPassword", function () {
    return gt;
  });
  n.d(a, "geVerifyTokenImg", function () {
    return yt;
  });
  var s = {};
  n.r(s);
  n.d(s, "getRepairConcat", function () {
    return bt;
  });
  n.d(s, "postErrorCollect", function () {
    return wt;
  });
  n.d(s, "sendLog", function () {
    return vt;
  });
  var c = {};
  n.r(c);
  n.d(c, "getSyncList", function () {
    return Tt;
  });
  n.d(c, "getSyncDetail", function () {
    return It;
  });
  n.d(c, "autoBackup", function () {
    return Ot;
  });
  n.d(c, "manualBackup", function () {
    return St;
  });
  n.d(c, "getV2DataFromV1", function () {
    return At;
  });
  n(7);
  var u = n(0);
  var l = n(3);
  const f = async () => {
    try {
      const t = await l.a.get(u.A + "/city/locate", {
        lang: u.C.lang
      }, {
        timeout: 10000
      });
      if (t && t.city) {
        return {
          data: t.city
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const h = async t => {
    try {
      return {
        data: (await l.a.get(u.A + "/weather/forecast", {
          lang: u.C.lang,
          cid: t
        }, {
          timeout: 10000
        })).forecast
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const p = async t => {
    try {
      return {
        data: await l.a.get(u.A + "/city/list", {
          lang: u.C.lang,
          searchkey: t
        }, {
          timeout: 10000
        })
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  n(19);
  var d = n(24);
  var m = n(82);
  var g = n.n(m);
  var y = n(306);
  var b = n.n(y);
  const w = async t => u.C.isZh ? u.h || u.s ? E(t) : T(t) : u.h || u.s ? x(t) : I(t);
  const v = async t => {
    let e = u.q ? 600000 : 60000;
    if (!t) {
      e = 0;
    }
    try {
      if (!d.a.requestFirefoxThrottle("/search/list-tn", e, true)) {
        return {
          error: "request throttle error"
        };
      }
      const n = await l.a.get(u.y + "/search/list-tn", {
        lang: u.C.lang,
        platform: u.C.platform,
        platformVersion: u.C.platformVersion,
        edition: u.e,
        maybe360: u.G,
        version: t || "" + Date.now()
      });
      if (n.code === 0) {
        const t = n.data.map(t => {
          const e = {
            name: t.name,
            uuid: t.seId,
            logo: t.logo,
            desc: t.desc,
            types: t.types,
            hide: t.hide,
            searchParams: t.searchParams
          };
          return e;
        });
        d.a.requestFirefoxThrottle("/search/list-tn", true, true);
        return {
          data: {
            list: t,
            hash: g()(JSON.stringify(t)),
            meta: n.meta
          }
        };
      }
      if (n.code === 2005) {
        d.a.requestFirefoxThrottle("/search/list-tn", true, true);
        return {
          error: n
        };
      }
      throw n;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const _ = d.a.getLastReqValue(l.a.jsonp);
  const E = async t => {
    var e;
    try {
      const n = await _(u.b + "/su?ie=utf-8&p=3", {
        wd: t
      }, {
        adapter: b.a,
        callbackParamName: "cb"
      });
      return {
        data: ((e = n == null ? undefined : n.s) === null || e === undefined ? undefined : e.map(t => ({
          text: t
        }))) || []
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const x = async t => {
    try {
      const n = await _(u.g + "/complete/search?client=chrome", {
        q: t
      }, {
        adapter: b.a,
        callbackParamName: "jsonp"
      });
      return {
        data: (n == null ? undefined : n.length) && n[1]?.length ? n[1].map(t => ({
          text: t
        })) : []
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const T = async t => {
    try {
      const e = await l.a.get(u.b + "/su?p=3&ie=UTF-8&cb=", {
        wd: t
      }, {
        _single: true,
        _delay: 0
      });
      const n = /s:(\[[\w\W]*\])/.exec(e);
      const r = JSON.parse(n[1]);
      return {
        data: r.map(t => ({
          text: t
        }))
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const I = async t => {
    try {
      const e = await l.a.get(u.g + "/complete/search?client=chrome", {
        q: t
      }, {
        _single: true,
        _delay: 200
      });
      return {
        data: e[2].map((t, n) => {
          t ||= e[1][n];
          return {
            text: t
          };
        })
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  var O = n(165);
  var S = n(5);
  var A = n.n(S);
  n(64);
  const N = u.C.lang;
  const j = async ({
    page: t = 0,
    type: e,
    keyword: n,
    source: r
  } = {}) => {
    try {
      const i = await l.a.get(u.w + "/get-icons", {
        lang: N,
        page: t,
        type: e,
        source: r,
        keyword: n,
        version: u.l ? u.z : ""
      }, {
        _single: true,
        _delay: 200
      });
      if (i.success) {
        i.icons.forEach(t => {
          if (t.source === "infinity") {
            if (t.url === "infinity://wallpaper") {
              t.name = "wallpaper_library";
            }
            switch (t.url) {
              case "infinity://wallpaper":
              case "infinity://weather":
              case "infinity://todos":
              case "infinity://notes":
              case "infinity://history":
              case "infinity://bookmarks":
              case "infinity://settings":
                t.name = i18n(t.name);
                t.description = i18n(t.description);
                break;
              case "infinity://extension":
                t.name = i18n(t.name);
                t.description = i18n(t.description, u.C.vendor);
            }
          }
          t._footer = t.description || i18n("no_description");
        });
        return {
          data: i
        };
      }
      throw i;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const C = async t => {
    try {
      const e = await l.a.get(u.y + "/icon/title", {
        url: t
      }, {
        _single: true,
        _delay: 0,
        timeout: 3000
      });
      if (e.code === 0) {
        return {
          data: {
            name: e.data.title
          }
        };
      }
      throw e;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const D = /<title[^>]*>\s*(.*)\s*<\/title>/;
  const k = t => window.__INFINITY__.hasAllUrlPermission ? new A.a(async e => {
    let n = 0;
    C(t).then(t => {
      n += 1;
      if (!t.error || n === 2) {
        e(t);
      }
    });
    (async t => {
      try {
        const e = await l.a.get(t, {}, {
          _single: "getUrlInfoFromFE",
          timeout: 3000,
          responseType: "text",
          _responseAll: true
        });
        const n = e.data;
        if (n && e.status >= 200 && e.status < 300) {
          const t = n.indexOf("<title");
          if (t > 0) {
            const e = n.slice(t, t + 200);
            const r = D.exec(e);
            const i = r == null ? undefined : r[1];
            if (i) {
              return {
                data: {
                  name: i
                }
              };
            }
          }
        }
        return {
          error: "error"
        };
      } catch (t) {
        return {
          error: t
        };
      }
    })(t).then(t => {
      n += 1;
      if (!t.error || n === 2) {
        e(t);
      }
    });
  }) : new A.a(async e => {
    e(await C(t));
  });
  const R = (t, e) => {
    if (e.length === 0) {
      return e;
    }
    const n = new Map();
    const r = [];
    t.forEach((t, e) => {
      n.set(t, e);
    });
    e.forEach(t => {
      const e = n.get(t);
      r[e] = t;
    });
    return r.filter(t => !!t);
  };
  const L = t => new A.a(e => {
    const n = () => {
      const e = R(t, o);
      const n = R(t, a);
      const r = R(t, s);
      return e.concat(n, r);
    };
    const r = t.length;
    let i = 0;
    const o = [];
    const a = [];
    const s = [];
    t.forEach(t => {
      const c = new Image();
      c.onload = function () {
        i += 1;
        const {
          width: c,
          height: u
        } = this;
        const l = Math.max(c, u);
        const f = Math.min(c, u);
        if (l / f < 5) {
          if (f > 50 && l > 100) {
            o.push(t);
          } else if (f > 50 || l > 100) {
            a.push(t);
          } else {
            s.push(t);
          }
        } else {
          s.push(t);
        }
        if (i === r) {
          e(n());
        }
      };
      c.onerror = () => {
        i += 1;
        if (i === r) {
          e(n());
        }
      };
      c.src = t;
    });
    setTimeout(() => {
      e(n());
    }, 3000);
  });
  const P = /\.(ico|png|jpg|jpeg|svg|webp)$/;
  const M = async t => {
    try {
      if (t.startsWith("infinity://")) {
        return {
          data: []
        };
      }
      const n = await l.a.get(t, {}, {
        _single: "getUrlIcon",
        _delay: 100,
        timeout: 3000,
        responseType: "text",
        _responseAll: true
      });
      const r = n.data;
      if (r && n.status >= 200 && n.status < 300) {
        const i = n.request?.responseURL || t;
        let o = ((t, e) => {
          const n = [];
          e.replace(/<link [^>]*href=['"]([^'"]+)[^>]*/gi, (t, e) => {
            n.push(e);
          });
          return n.reduce((e, n) => {
            if (n && P.test(n)) {
              const r = new URL(n, t);
              e.push(r.href);
            }
            return e;
          }, []);
        })(i, r);
        if (o.length < 6) {
          const t = ((t, e) => {
            const n = [];
            e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*/gi, (t, e) => {
              n.push(e);
            });
            return n.reduce((e, n) => {
              if (n && P.test(n)) {
                const r = new URL(n, t);
                e.push(r.href);
              }
              return e;
            }, []);
          })(i, r);
          o = o.concat(t);
        }
        if (o.length > 4) {
          o.length = 4;
        }
        let a = await L(o);
        a = Array.from(new Set(a));
        if (a.length > 2) {
          a.length = 2;
        }
        return {
          data: a
        };
      }
      return {
        error: ""
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const F = async t => {
    try {
      const {
        host: e
      } = new URL(t);
      const n = await l.a.get(u.y + "/icon/get_icon_urls", {
        host: e
      });
      if (n.code !== 0) {
        return {
          error: n
        };
      } else {
        return {
          data: n.data.map(t => t.url)
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const U = async t => {
    try {
      const {
        host: e
      } = new URL(t);
      if (!e.includes(".")) {
        return {
          data: []
        };
      }
      const n = await l.a.get(u.y + "/icon/get_logo_list", {
        host: e,
        limit: 2
      }, {
        _single: true,
        _delay: 100
      });
      if (n.code !== 0) {
        return {
          error: n
        };
      } else {
        return {
          data: n.data.map(t => t.src)
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  };
  n(248);
  var B = n(13);
  const $ = async ({
    email: t,
    password: e,
    repeatPassword: n,
    code: r
  }) => {
    const i = {
      email: t.trim(),
      password: g()(e),
      repeatPassword: g()(n),
      code: r.trim()
    };
    try {
      return await l.a.post(u.y + "/user/register", i);
    } catch (t) {
      return t;
    }
  };
  const q = async ({
    email: t,
    password: e,
    phone_number: n
  }) => {
    const r = {
      email: t ? t.trim() : undefined,
      phone_number: n ? n.trim() : undefined,
      password: g()(e)
    };
    try {
      return await l.a.post(u.y + "/user/login", r);
    } catch (t) {
      return t;
    }
  };
  async function G(t) {
    const {
      data: e
    } = await B.l.read();
    const n = e.userInfo.uid;
    try {
      return await l.a.post(u.y + "/user/update_profile/" + n, t, {
        _auth: true
      });
    } catch (t) {
      throw new Error(t.message);
    }
  }
  async function W() {
    try {
      return await l.a.get(u.y + "/user/get_user_profile", {}, {
        _auth: true,
        _proxy: true
      });
    } catch (t) {
      return t;
    }
  }
  async function V(t) {
    const e = new FormData();
    e.append("file", t);
    try {
      const t = await l.a.post(u.y + "/upload/avatar", e, {
        _auth: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if ((t == null ? undefined : t.code) === 0) {
        return t;
      }
      throw new Error(i18n("upload_avatar_failure"));
    } catch (t) {
      throw new Error(t);
    }
  }
  async function z({
    originPassword: t,
    newPassword: e
  }) {
    const {
      data: n
    } = await B.l.read();
    const r = n.userInfo.uid;
    const {
      token: i
    } = n;
    if (!i) {
      throw new Error(i18n("unknown_mistake"));
    }
    const o = {
      originPassword: g()(t),
      newPassword: g()(e)
    };
    try {
      return await l.a.post(u.y + "/user/modify_password/" + r, o, {
        _auth: true
      });
    } catch (t) {
      return t;
    }
  }
  async function Y(t) {
    try {
      const e = await l.a.post(u.y + "/user/forget_password", t);
      if (e.code === 0) {
        return {
          data: e.data
        };
      } else {
        return {
          error: e
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function H({
    password: t,
    repeatPassword: e,
    email: n,
    code: r,
    phone_number: i
  }) {
    const o = {
      password: g()(t),
      repeatPassword: g()(e),
      email: n ? n.trim() : undefined,
      code: r.trim(),
      phone_number: i ? i.trim() : undefined
    };
    try {
      return await l.a.post(u.y + "/user/reset_password", o);
    } catch (t) {
      return t;
    }
  }
  async function X(t) {
    try {
      const e = await l.a.post(`${u.y}/get_code2?lang=${u.C.lang}`, t, {
        withCredentials: true
      });
      if (e.code === 0) {
        return {
          data: e.data
        };
      } else {
        return {
          error: e
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function K(t) {
    try {
      return await l.a.post(`${u.y}/get_register_code2?lang=${u.C.lang}`, t, {
        withCredentials: true
      });
    } catch (t) {
      return t;
    }
  }
  async function J(t) {
    try {
      return await l.a.post(u.y + "/inspce_code", t);
    } catch (t) {
      return t;
    }
  }
  async function Q() {
    try {
      return await l.a.get(u.y + "/check_token", {}, {
        _auth: true
      });
    } catch (t) {
      return t;
    }
  }
  async function Z() {
    const {
      data: t
    } = await B.l.read();
    const e = t.userInfo.uid;
    try {
      return await l.a.post(u.y + "/user/delete/" + e, {}, {
        _auth: true
      });
    } catch (t) {
      return t;
    }
  }
  const tt = async t => {
    try {
      return await l.a.post(u.y + "/user/login_uid", t, {
        timeout: 10000
      });
    } catch (t) {
      return t;
    }
  };
  const et = async t => {
    try {
      return await l.a.post(u.y + "/user/v1_basic_login", t, {
        timeout: 10000
      });
    } catch (t) {
      return t;
    }
  };
  const nt = async (t, e) => {
    try {
      return await l.a.get(`${u.y}/user/user_hash?uid=${t}&secret=${e}`);
    } catch (t) {
      return t;
    }
  };
  const rt = async () => {
    try {
      const t = await l.a.get(u.y + "/login_code/mobile_code", {}, {
        _auth: true
      });
      if (t.code === 0) {
        return {
          data: t.data
        };
      } else {
        return {
          error: t
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const it = async (t, e) => {
    try {
      const n = await l.a.post(u.y + "/login_code/check", {
        code: t,
        type: e
      }, {
        _auth: true
      });
      if (n.code === 0) {
        return {
          data: n.data
        };
      } else {
        return {
          error: n
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  };
  async function ot(t) {
    try {
      const e = await l.a.post(u.y + "/phone/send_code", t, {
        withCredentials: true
      });
      if (e.code === 0) {
        return {
          data: e.data
        };
      } else {
        return {
          error: e
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function at(t) {
    try {
      const e = await l.a.post(u.y + "/get_email_bind_code", t, {
        _auth: true,
        withCredentials: true
      });
      if (e.code === 0) {
        return {
          data: e.data
        };
      } else {
        return {
          error: e
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function st(t) {
    try {
      const e = await l.a.post(u.y + "/bind/email", t, {
        _auth: true
      });
      if (e.code === 0) {
        return {
          data: e.data
        };
      } else {
        return {
          error: e
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function ct(t) {
    try {
      const e = await l.a.post(u.y + "/bind/phone", t, {
        _auth: true
      });
      if (e.code === 0) {
        return {
          data: e.data
        };
      } else {
        return {
          error: e
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function ut() {
    try {
      const t = await l.a.post(u.y + "/unbind/email", {}, {
        _auth: true
      });
      if (t.code === 0) {
        return {
          data: t.data
        };
      } else {
        return {
          error: t
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function lt() {
    try {
      const t = await l.a.post(u.y + "/unbind/phone", {}, {
        _auth: true
      });
      if (t.code === 0) {
        return {
          data: t.data
        };
      } else {
        return {
          error: t
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function ft(t, e) {
    try {
      const n = await l.a.post(u.y + "/phone/verify_code", {
        phone_number: t,
        code: e
      });
      if (n.code === 0) {
        return {
          data: n.data
        };
      } else {
        return {
          error: n
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  var ht;
  async function pt(t, e) {
    try {
      const n = await l.a.post(`${u.y}/bind/${t}`, {
        access_code: e
      }, {
        _auth: true
      });
      if (n.code === 0) {
        return {
          data: n.data
        };
      } else {
        return {
          error: n
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function dt(t) {
    try {
      const e = await l.a.post(`${u.y}/unbind/${t}`, {}, {
        _auth: true
      });
      if (e.code === 0) {
        return {
          data: e.data
        };
      } else {
        return {
          error: e
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function mt() {
    try {
      const t = await await l.a.get(u.y + "/phone/area_list");
      if (t.code === 0) {
        return {
          data: t.data
        };
      } else {
        return {
          error: t
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function gt(t) {
    try {
      const e = await l.a.post(u.y + "/user/verify_password", {
        password: g()(t)
      }, {
        _auth: true
      });
      if (e.code === 0) {
        return {
          data: e.data
        };
      } else {
        return {
          error: e
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  async function yt() {
    try {
      const t = await l.a.get(u.y + "/verify/get_token_img");
      if (t.code === 0) {
        return {
          data: t.data
        };
      } else {
        return {
          error: t
        };
      }
    } catch (t) {
      return {
        error: t
      };
    }
  }
  (function (t) {
    t.weibo = "weibo";
    t.facebook = "facebook";
    t.google = "google";
    t.wechat = "wechat";
    t.qq = "qq";
  })(ht ||= {});
  const bt = async () => {
    try {
      const t = await l.a.get(u.y + "/get_concat_info");
      if (t.code === 0) {
        return {
          data: t.data
        };
      }
      throw t;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const wt = async (t, e) => {
    try {
      const {
        response: n,
        stack: r,
        config: i
      } = e;
      let o = n || i;
      o &&= JSON.stringify(o, (t, e) => {
        if (e instanceof FormData) {
          const t = {};
          for (const [n, r] of e) {
            t[n] = r;
          }
          return t;
        }
        if (e instanceof File) {
          return {
            lastModified: e.lastModified,
            name: e.name,
            size: e.size,
            type: e.type
          };
        }
        return e;
      });
      let {
        data: a,
        error: s
      } = await B.l.read();
      if (!s && a) {
        const t = ["mobileuid", "avatar", "refreshToken", "secret", "gender", "name"];
        a = JSON.stringify(a, (e, n) => {
          if (!t.includes(e)) {
            return n;
          }
        });
      }
      const c = await l.a.post(u.y + "/collect", {
        type: t,
        user: a,
        stack: r,
        info: o,
        env: Object.assign({}, u.C)
      });
      if (c.code === 0) {
        return {
          data: c.data
        };
      }
      throw c;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const vt = async t => {
    await l.a.get(t, undefined, {
      _proxy: true,
      _proxyIgnoreRes: true
    });
  };
  const _t = t => {
    const e = JSON.stringify(t);
    const n = new TextEncoder().encode(e);
    return new Blob([n], {
      type: "application/json;charset=utf-8"
    });
  };
  const Et = t => {
    const e = {};
    t.forEach(t => {
      const {
        platform: n
      } = t;
      if (e[n]) {
        e[n].push(t);
      } else {
        e[n] = [t];
      }
    });
    return e;
  };
  const xt = t => {
    const {
      _id: e,
      _platform: n = "pc"
    } = t;
    return {
      id: e,
      time: d.a.fmtTime(Number(e)),
      platform: n
    };
  };
  const Tt = async () => {
    try {
      const t = await l.a.get(u.y + "/sync/list", undefined, {
        _auth: true,
        _proxy: true
      });
      if (t.code !== 0) {
        return {
          error: t
        };
      }
      const e = {};
      e.auto = t.meta.auto.map(xt);
      e.manual = Et(t.meta.manual.map(xt));
      return {
        data: e
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const It = async (t, e, n = "all") => {
    try {
      const r = await l.a.get(u.y + "/sync/download_url", {
        id: t,
        type: e,
        keys: n
      }, {
        _auth: true
      });
      if (r.code !== 0) {
        return {
          error: r
        };
      }
      const i = r.data;
      let o = {};
      const a = await A.a.all(i.map(e => l.a.get(e.url + "&timestampid=" + (t === "latest" ? Date.now() : t), {}, {
        timeout: 180000
      })));
      i.forEach((t, n) => {
        const r = t.fileKey;
        if (e === "manual") {
          o = Object.assign(Object.assign({}, o), a[n]);
        } else if (e === "auto") {
          o[r] = a[n];
        }
      });
      return {
        data: o
      };
    } catch (t) {
      wt("getSyncDetail", t);
      return {
        error: t
      };
    }
  };
  const Ot = async (t, e = "") => {
    const n = Object.keys(t).join(",");
    try {
      const r = await l.a.get(u.y + "/sync/token", {
        type: "auto",
        keys: n
      }, {
        _auth: true
      });
      if (r.code !== 0 || !r.data.length) {
        return {
          error: r
        };
      }
      const i = r.data;
      await A.a.all(i.map(e => {
        const {
          url: n,
          key: r,
          token: i,
          host: o
        } = e;
        const a = new FormData();
        a.append("token", i);
        a.append("key", n);
        a.append("file", _t(t[r]));
        return l.a.post(o, a, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          timeout: 180000
        });
      }));
      localStorage.setItem("pre-sync-id", i[0].timestamp + "");
      const o = await l.a.post(u.y + "/sync/done", {
        type: "auto",
        websocketkeys: e,
        keys: n,
        record_time: i[0].timestamp
      }, {
        _auth: true
      });
      if (o.code !== 0) {
        return {
          error: o
        };
      } else {
        return {
          data: o.meta.map(xt)
        };
      }
    } catch (t) {
      wt("autoBackup", t);
      return {
        error: t
      };
    }
  };
  const St = async t => {
    try {
      const e = await l.a.get(u.y + "/sync/token", {
        type: "manual",
        keys: "data"
      }, {
        _auth: true
      });
      if (e.code !== 0 || !e.data.length) {
        return {
          error: e
        };
      }
      const {
        token: n,
        url: r,
        timestamp: i,
        host: o
      } = e.data[0];
      const a = new FormData();
      a.append("token", n);
      a.append("key", r);
      a.append("file", _t(t));
      await l.a.post(o, a, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        timeout: 180000
      });
      const s = await l.a.post(u.y + "/sync/done", {
        type: "manual",
        keys: "data",
        record_time: i
      }, {
        _auth: true
      });
      if (s.code !== 0) {
        return {
          error: s
        };
      } else {
        return {
          data: Et(s.meta.map(xt))
        };
      }
    } catch (t) {
      wt("manualBackup", t);
      return {
        error: t
      };
    }
  };
  const At = t => t === "pro" ? async function () {
    try {
      const {
        data: {
          userInfo: t
        }
      } = await B.l.read();
      const {
        uid: e,
        secret: n
      } = t;
      const r = await l.a.get(u.x + "/user/recovery-pro", {
        uid: e,
        secret: n
      }, {
        timeout: 200000
      });
      if (r.success) {
        return {
          data: r.data
        };
      }
      throw r;
    } catch (t) {
      wt("getProV1Data", t);
      return {
        error: t
      };
    }
  }() : t === "basic" ? async function () {
    try {
      const t = await l.a.get(u.y + "/sync/recover_basic", {}, {
        _auth: true,
        timeout: 200000
      });
      if (t.code !== 0) {
        return {
          error: t
        };
      } else {
        return {
          data: t.data
        };
      }
    } catch (t) {
      wt("getBasicV1Data", t);
      return {
        error: t
      };
    }
  }() : undefined;
  var Nt = n(316);
}, function (t, e, n) {
  (function (e) {
    t.exports = function t(e, n, r) {
      function i(a, s) {
        if (!n[a]) {
          if (!e[a]) {
            if (o) {
              return o(a, true);
            }
            var c = new Error("Cannot find module '" + a + "'");
            c.code = "MODULE_NOT_FOUND";
            throw c;
          }
          var u = n[a] = {
            exports: {}
          };
          e[a][0].call(u.exports, function (t) {
            var n = e[a][1][t];
            return i(n || t);
          }, u, u.exports, t, e, n, r);
        }
        return n[a].exports;
      }
      var o = false;
      for (var a = 0; a < r.length; a++) {
        i(r[a]);
      }
      return i;
    }({
      1: [function (t, n, r) {
        (function (t) {
          "use strict";

          var e;
          var r;
          var i = t.MutationObserver || t.WebKitMutationObserver;
          if (i) {
            var o = 0;
            var a = new i(l);
            var s = t.document.createTextNode("");
            a.observe(s, {
              characterData: true
            });
            e = function () {
              s.data = o = ++o % 2;
            };
          } else if (t.setImmediate || t.MessageChannel === undefined) {
            e = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function () {
              var e = t.document.createElement("script");
              e.onreadystatechange = function () {
                l();
                e.onreadystatechange = null;
                e.parentNode.removeChild(e);
                e = null;
              };
              t.document.documentElement.appendChild(e);
            } : function () {
              setTimeout(l, 0);
            };
          } else {
            var c = new t.MessageChannel();
            c.port1.onmessage = l;
            e = function () {
              c.port2.postMessage(0);
            };
          }
          var u = [];
          function l() {
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
        function i() {}
        var o = {};
        var a = ["REJECTED"];
        var s = ["FULFILLED"];
        var c = ["PENDING"];
        function u(t) {
          if (typeof t != "function") {
            throw new TypeError("resolver must be a function");
          }
          this.state = c;
          this.queue = [];
          this.outcome = undefined;
          if (t !== i) {
            p(this, t);
          }
        }
        function l(t, e, n) {
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
        function f(t, e, n) {
          r(function () {
            var r;
            try {
              r = e(n);
            } catch (e) {
              return o.reject(t, e);
            }
            if (r === t) {
              o.reject(t, new TypeError("Cannot resolve promise with itself"));
            } else {
              o.resolve(t, r);
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
              o.reject(t, e);
            }
          }
          function i(e) {
            if (!n) {
              n = true;
              o.resolve(t, e);
            }
          }
          var a = d(function () {
            e(i, r);
          });
          if (a.status === "error") {
            r(a.value);
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
          if (typeof t != "function" && this.state === s || typeof e != "function" && this.state === a) {
            return this;
          }
          var n = new this.constructor(i);
          if (this.state !== c) {
            f(n, this.state === s ? t : e, this.outcome);
          } else {
            this.queue.push(new l(n, t, e));
          }
          return n;
        };
        l.prototype.callFulfilled = function (t) {
          o.resolve(this.promise, t);
        };
        l.prototype.otherCallFulfilled = function (t) {
          f(this.promise, this.onFulfilled, t);
        };
        l.prototype.callRejected = function (t) {
          o.reject(this.promise, t);
        };
        l.prototype.otherCallRejected = function (t) {
          f(this.promise, this.onRejected, t);
        };
        o.resolve = function (t, e) {
          var n = d(h, e);
          if (n.status === "error") {
            return o.reject(t, n.value);
          }
          var r = n.value;
          if (r) {
            p(t, r);
          } else {
            t.state = s;
            t.outcome = e;
            for (var i = -1, a = t.queue.length; ++i < a;) {
              t.queue[i].callFulfilled(e);
            }
          }
          return t;
        };
        o.reject = function (t, e) {
          t.state = a;
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
            return o.resolve(new this(i), t);
          }
        };
        u.reject = function (t) {
          var e = new this(i);
          return o.reject(e, t);
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
          var a = new Array(n);
          var s = 0;
          for (var c = -1, u = new this(i); ++c < n;) {
            l(t[c], c);
          }
          return u;
          function l(t, i) {
            e.resolve(t).then(function (t) {
              a[i] = t;
              if (++s === n && !r) {
                r = true;
                o.resolve(u, a);
              }
            }, function (t) {
              if (!r) {
                r = true;
                o.reject(u, t);
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
          var a;
          for (var s = -1, c = new this(i); ++s < n;) {
            a = t[s];
            e.resolve(a).then(function (t) {
              if (!r) {
                r = true;
                o.resolve(c, t);
              }
            }, function (t) {
              if (!r) {
                r = true;
                o.reject(c, t);
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
        var i = function () {
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
        function o(t, e) {
          t = t || [];
          e = e || {};
          try {
            return new Blob(t, e);
          } catch (i) {
            if (i.name !== "TypeError") {
              throw i;
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
        var a = Promise;
        function s(t, e) {
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
        function l() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function") {
            return arguments[arguments.length - 1];
          }
        }
        var f = undefined;
        var h = {};
        var p = Object.prototype.toString;
        function d(t) {
          if (typeof f == "boolean") {
            return a.resolve(f);
          } else {
            return function (t) {
              return new a(function (e) {
                var n = t.transaction("local-forage-detect-blob-support", "readwrite");
                var r = o([""]);
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
              return f = t;
            });
          }
        }
        function m(t) {
          var e = h[t.name];
          var n = {};
          n.promise = new a(function (t, e) {
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
        function g(t) {
          var e = h[t.name].deferredOperations.pop();
          if (e) {
            e.resolve();
            return e.promise;
          }
        }
        function y(t, e) {
          var n = h[t.name].deferredOperations.pop();
          if (n) {
            n.reject(e);
            return n.promise;
          }
        }
        function b(t, e) {
          return new a(function (n, r) {
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
              m(t);
              t.db.close();
            }
            var o = [t.name];
            if (e) {
              o.push(t.version);
            }
            var a = i.open.apply(i, o);
            if (e) {
              a.onupgradeneeded = function (e) {
                var n = a.result;
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
            a.onerror = function (t) {
              t.preventDefault();
              r(a.error);
            };
            a.onsuccess = function () {
              n(a.result);
              g(t);
            };
          });
        }
        function w(t) {
          return b(t, false);
        }
        function v(t) {
          return b(t, true);
        }
        function _(t, e) {
          if (!t.db) {
            return true;
          }
          var n = !t.db.objectStoreNames.contains(t.storeName);
          var r = t.version < t.db.version;
          var i = t.version > t.db.version;
          if (r) {
            if (t.version !== e) {
              console.warn("The database \"" + t.name + "\" can't be downgraded from version " + t.db.version + " to version " + t.version + ".");
            }
            t.version = t.db.version;
          }
          if (i || n) {
            if (n) {
              var o = t.db.version + 1;
              if (o > t.version) {
                t.version = o;
              }
            }
            return true;
          }
          return false;
        }
        function E(t) {
          return o([function (t) {
            for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n), i = 0; i < e; i++) {
              r[i] = t.charCodeAt(i);
            }
            return n;
          }(atob(t.data))], {
            type: t.type
          });
        }
        function x(t) {
          return t && t.__local_forage_encoded_blob;
        }
        function T(t) {
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
        function I(t, e, n, r = 1) {
          try {
            var i = t.db.transaction(t.storeName, e);
            n(null, i);
          } catch (i) {
            if (r > 0 && (!t.db || i.name === "InvalidStateError" || i.name === "NotFoundError")) {
              return a.resolve().then(function () {
                if (!t.db || i.name === "NotFoundError" && !t.db.objectStoreNames.contains(t.storeName) && t.version <= t.db.version) {
                  if (t.db) {
                    t.version = t.db.version + 1;
                  }
                  return v(t);
                }
              }).then(function () {
                return function (t) {
                  m(t);
                  var e = h[t.name];
                  for (var n = e.forages, r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (i._dbInfo.db) {
                      i._dbInfo.db.close();
                      i._dbInfo.db = null;
                    }
                  }
                  t.db = null;
                  return w(t).then(function (e) {
                    t.db = e;
                    if (_(t)) {
                      return v(t);
                    } else {
                      return e;
                    }
                  }).then(function (r) {
                    t.db = e.db = r;
                    for (var i = 0; i < n.length; i++) {
                      n[i]._dbInfo.db = r;
                    }
                  }).catch(function (e) {
                    y(t, e);
                    throw e;
                  });
                }(t).then(function () {
                  I(t, e, n, r - 1);
                });
              }).catch(n);
            }
            n(i);
          }
        }
        var O = {
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
            var i = h[n.name];
            if (!i) {
              i = {
                forages: [],
                db: null,
                dbReady: null,
                deferredOperations: []
              };
              h[n.name] = i;
            }
            i.forages.push(e);
            if (!e._initReady) {
              e._initReady = e.ready;
              e.ready = T;
            }
            var o = [];
            function s() {
              return a.resolve();
            }
            for (var c = 0; c < i.forages.length; c++) {
              var u = i.forages[c];
              if (u !== e) {
                o.push(u._initReady().catch(s));
              }
            }
            var l = i.forages.slice(0);
            return a.all(o).then(function () {
              n.db = i.db;
              return w(n);
            }).then(function (t) {
              n.db = t;
              if (_(n, e._defaultConfig.version)) {
                return v(n);
              } else {
                return t;
              }
            }).then(function (t) {
              n.db = i.db = t;
              e._dbInfo = n;
              for (var r = 0; r < l.length; r++) {
                var o = l[r];
                if (o !== e) {
                  o._dbInfo.db = n.db;
                  o._dbInfo.version = n.version;
                }
              }
            });
          },
          _support: function () {
            try {
              if (!i || !i.open) {
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
            var r = new a(function (e, r) {
              n.ready().then(function () {
                I(n._dbInfo, "readonly", function (i, o) {
                  if (i) {
                    return r(i);
                  }
                  try {
                    var a = o.objectStore(n._dbInfo.storeName).openCursor();
                    var s = 1;
                    a.onsuccess = function () {
                      var n = a.result;
                      if (n) {
                        var r = n.value;
                        if (x(r)) {
                          r = E(r);
                        }
                        var i = t(r, n.key, s++);
                        if (i !== undefined) {
                          e(i);
                        } else {
                          n.continue();
                        }
                      } else {
                        e();
                      }
                    };
                    a.onerror = function () {
                      r(a.error);
                    };
                  } catch (t) {
                    r(t);
                  }
                });
              }).catch(r);
            });
            s(r, e);
            return r;
          },
          getItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = new a(function (e, r) {
              n.ready().then(function () {
                I(n._dbInfo, "readonly", function (i, o) {
                  if (i) {
                    return r(i);
                  }
                  try {
                    var a = o.objectStore(n._dbInfo.storeName).get(t);
                    a.onsuccess = function () {
                      var t = a.result;
                      if (t === undefined) {
                        t = null;
                      }
                      if (x(t)) {
                        t = E(t);
                      }
                      e(t);
                    };
                    a.onerror = function () {
                      r(a.error);
                    };
                  } catch (t) {
                    r(t);
                  }
                });
              }).catch(r);
            });
            s(r, e);
            return r;
          },
          setItem: function (t, e, n) {
            var r = this;
            t = u(t);
            var i = new a(function (n, i) {
              var o;
              r.ready().then(function () {
                o = r._dbInfo;
                if (p.call(e) === "[object Blob]") {
                  return d(o.db).then(function (t) {
                    if (t) {
                      return e;
                    } else {
                      n = e;
                      return new a(function (t, e) {
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
                I(r._dbInfo, "readwrite", function (o, a) {
                  if (o) {
                    return i(o);
                  }
                  try {
                    var s = a.objectStore(r._dbInfo.storeName);
                    if (e === null) {
                      e = undefined;
                    }
                    var c = s.put(e, t);
                    a.oncomplete = function () {
                      if (e === undefined) {
                        e = null;
                      }
                      n(e);
                    };
                    a.onabort = a.onerror = function () {
                      var t = c.error ? c.error : c.transaction.error;
                      i(t);
                    };
                  } catch (t) {
                    i(t);
                  }
                });
              }).catch(i);
            });
            s(i, n);
            return i;
          },
          removeItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = new a(function (e, r) {
              n.ready().then(function () {
                I(n._dbInfo, "readwrite", function (i, o) {
                  if (i) {
                    return r(i);
                  }
                  try {
                    var a = o.objectStore(n._dbInfo.storeName).delete(t);
                    o.oncomplete = function () {
                      e();
                    };
                    o.onerror = function () {
                      r(a.error);
                    };
                    o.onabort = function () {
                      var t = a.error ? a.error : a.transaction.error;
                      r(t);
                    };
                  } catch (t) {
                    r(t);
                  }
                });
              }).catch(r);
            });
            s(r, e);
            return r;
          },
          clear: function (t) {
            var e = this;
            var n = new a(function (t, n) {
              e.ready().then(function () {
                I(e._dbInfo, "readwrite", function (r, i) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var o = i.objectStore(e._dbInfo.storeName).clear();
                    i.oncomplete = function () {
                      t();
                    };
                    i.onabort = i.onerror = function () {
                      var t = o.error ? o.error : o.transaction.error;
                      n(t);
                    };
                  } catch (t) {
                    n(t);
                  }
                });
              }).catch(n);
            });
            s(n, t);
            return n;
          },
          length: function (t) {
            var e = this;
            var n = new a(function (t, n) {
              e.ready().then(function () {
                I(e._dbInfo, "readonly", function (r, i) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var o = i.objectStore(e._dbInfo.storeName).count();
                    o.onsuccess = function () {
                      t(o.result);
                    };
                    o.onerror = function () {
                      n(o.error);
                    };
                  } catch (t) {
                    n(t);
                  }
                });
              }).catch(n);
            });
            s(n, t);
            return n;
          },
          key: function (t, e) {
            var n = this;
            var r = new a(function (e, r) {
              if (t < 0) {
                e(null);
              } else {
                n.ready().then(function () {
                  I(n._dbInfo, "readonly", function (i, o) {
                    if (i) {
                      return r(i);
                    }
                    try {
                      var a = o.objectStore(n._dbInfo.storeName);
                      var s = false;
                      var c = a.openKeyCursor();
                      c.onsuccess = function () {
                        var n = c.result;
                        if (n) {
                          if (t === 0 || s) {
                            e(n.key);
                          } else {
                            s = true;
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
            s(r, e);
            return r;
          },
          keys: function (t) {
            var e = this;
            var n = new a(function (t, n) {
              e.ready().then(function () {
                I(e._dbInfo, "readonly", function (r, i) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var o = i.objectStore(e._dbInfo.storeName).openKeyCursor();
                    var a = [];
                    o.onsuccess = function () {
                      var e = o.result;
                      if (e) {
                        a.push(e.key);
                        e.continue();
                      } else {
                        t(a);
                      }
                    };
                    o.onerror = function () {
                      n(o.error);
                    };
                  } catch (t) {
                    n(t);
                  }
                });
              }).catch(n);
            });
            s(n, t);
            return n;
          },
          dropInstance: function (t, e) {
            e = l.apply(this, arguments);
            var n = this.config();
            if (!(t = typeof t != "function" && t || {}).name) {
              t.name = t.name || n.name;
              t.storeName = t.storeName || n.storeName;
            }
            var r;
            var o = this;
            if (t.name) {
              var c = t.name === n.name && o._dbInfo.db;
              var u = c ? a.resolve(o._dbInfo.db) : w(t).then(function (e) {
                var n = h[t.name];
                var r = n.forages;
                n.db = e;
                for (var i = 0; i < r.length; i++) {
                  r[i]._dbInfo.db = e;
                }
                return e;
              });
              r = t.storeName ? u.then(function (e) {
                if (e.objectStoreNames.contains(t.storeName)) {
                  var n = e.version + 1;
                  m(t);
                  var r = h[t.name];
                  var o = r.forages;
                  e.close();
                  for (var s = 0; s < o.length; s++) {
                    var c = o[s];
                    c._dbInfo.db = null;
                    c._dbInfo.version = n;
                  }
                  return new a(function (e, r) {
                    var o = i.open(t.name, n);
                    o.onerror = function (t) {
                      o.result.close();
                      r(t);
                    };
                    o.onupgradeneeded = function () {
                      o.result.deleteObjectStore(t.storeName);
                    };
                    o.onsuccess = function () {
                      var t = o.result;
                      t.close();
                      e(t);
                    };
                  }).then(function (t) {
                    r.db = t;
                    for (var e = 0; e < o.length; e++) {
                      var n = o[e];
                      n._dbInfo.db = t;
                      g(n._dbInfo);
                    }
                  }).catch(function (e) {
                    (y(t, e) || a.resolve()).catch(function () {});
                    throw e;
                  });
                }
              }) : u.then(function (e) {
                m(t);
                var n = h[t.name];
                var r = n.forages;
                e.close();
                for (var o = 0; o < r.length; o++) {
                  r[o]._dbInfo.db = null;
                }
                return new a(function (e, n) {
                  var r = i.deleteDatabase(t.name);
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
                    g(r[e]._dbInfo);
                  }
                }).catch(function (e) {
                  (y(t, e) || a.resolve()).catch(function () {});
                  throw e;
                });
              });
            } else {
              r = a.reject("Invalid arguments");
            }
            s(r, e);
            return r;
          }
        };
        var S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var A = /^~~local_forage_type~([^~]+)~/;
        var N = "__lfsc__:".length;
        var j = N + "arbf".length;
        var C = Object.prototype.toString;
        function D(t) {
          var e;
          var n;
          var r;
          var i;
          var o;
          var a = t.length * 0.75;
          var s = t.length;
          var c = 0;
          if (t[t.length - 1] === "=") {
            a--;
            if (t[t.length - 2] === "=") {
              a--;
            }
          }
          var u = new ArrayBuffer(a);
          var l = new Uint8Array(u);
          for (e = 0; e < s; e += 4) {
            n = S.indexOf(t[e]);
            r = S.indexOf(t[e + 1]);
            i = S.indexOf(t[e + 2]);
            o = S.indexOf(t[e + 3]);
            l[c++] = n << 2 | r >> 4;
            l[c++] = (r & 15) << 4 | i >> 2;
            l[c++] = (i & 3) << 6 | o & 63;
          }
          return u;
        }
        function k(t) {
          var e;
          var n = new Uint8Array(t);
          var r = "";
          for (e = 0; e < n.length; e += 3) {
            r += S[n[e] >> 2];
            r += S[(n[e] & 3) << 4 | n[e + 1] >> 4];
            r += S[(n[e + 1] & 15) << 2 | n[e + 2] >> 6];
            r += S[n[e + 2] & 63];
          }
          if (n.length % 3 == 2) {
            r = r.substring(0, r.length - 1) + "=";
          } else if (n.length % 3 == 1) {
            r = r.substring(0, r.length - 2) + "==";
          }
          return r;
        }
        var R = {
          serialize: function (t, e) {
            var n = "";
            if (t) {
              n = C.call(t);
            }
            if (t && (n === "[object ArrayBuffer]" || t.buffer && C.call(t.buffer) === "[object ArrayBuffer]")) {
              var r;
              var i = "__lfsc__:";
              if (t instanceof ArrayBuffer) {
                r = t;
                i += "arbf";
              } else {
                r = t.buffer;
                if (n === "[object Int8Array]") {
                  i += "si08";
                } else if (n === "[object Uint8Array]") {
                  i += "ui08";
                } else if (n === "[object Uint8ClampedArray]") {
                  i += "uic8";
                } else if (n === "[object Int16Array]") {
                  i += "si16";
                } else if (n === "[object Uint16Array]") {
                  i += "ur16";
                } else if (n === "[object Int32Array]") {
                  i += "si32";
                } else if (n === "[object Uint32Array]") {
                  i += "ui32";
                } else if (n === "[object Float32Array]") {
                  i += "fl32";
                } else if (n === "[object Float64Array]") {
                  i += "fl64";
                } else {
                  e(new Error("Failed to get type for BinaryArray"));
                }
              }
              e(i + k(r));
            } else if (n === "[object Blob]") {
              var o = new FileReader();
              o.onload = function () {
                var n = "~~local_forage_type~" + t.type + "~" + k(this.result);
                e("__lfsc__:blob" + n);
              };
              o.readAsArrayBuffer(t);
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
              var i = n.match(A);
              e = i[1];
              n = n.substring(i[0].length);
            }
            var a = D(n);
            switch (r) {
              case "arbf":
                return a;
              case "blob":
                return o([a], {
                  type: e
                });
              case "si08":
                return new Int8Array(a);
              case "ui08":
                return new Uint8Array(a);
              case "uic8":
                return new Uint8ClampedArray(a);
              case "si16":
                return new Int16Array(a);
              case "ur16":
                return new Uint16Array(a);
              case "si32":
                return new Int32Array(a);
              case "ui32":
                return new Uint32Array(a);
              case "fl32":
                return new Float32Array(a);
              case "fl64":
                return new Float64Array(a);
              default:
                throw new Error("Unkown type: " + r);
            }
          },
          stringToBuffer: D,
          bufferToString: k
        };
        function L(t, e, n, r) {
          t.executeSql("CREATE TABLE IF NOT EXISTS " + e.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r);
        }
        function P(t, e, n, r, i, o) {
          t.executeSql(n, r, i, function (t, a) {
            if (a.code === a.SYNTAX_ERR) {
              t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [e.storeName], function (t, s) {
                if (s.rows.length) {
                  o(t, a);
                } else {
                  L(t, e, function () {
                    t.executeSql(n, r, i, o);
                  }, o);
                }
              }, o);
            } else {
              o(t, a);
            }
          }, o);
        }
        function M(t, e, n, r) {
          var i = this;
          t = u(t);
          var o = new a(function (o, a) {
            i.ready().then(function () {
              if (e === undefined) {
                e = null;
              }
              var s = e;
              var c = i._dbInfo;
              c.serializer.serialize(e, function (e, u) {
                if (u) {
                  a(u);
                } else {
                  c.db.transaction(function (n) {
                    P(n, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [t, e], function () {
                      o(s);
                    }, function (t, e) {
                      a(e);
                    });
                  }, function (e) {
                    if (e.code === e.QUOTA_ERR) {
                      if (r > 0) {
                        o(M.apply(i, [t, s, n, r - 1]));
                        return;
                      }
                      a(e);
                    }
                  });
                }
              });
            }).catch(a);
          });
          s(o, n);
          return o;
        }
        function F(t) {
          return new a(function (e, n) {
            t.transaction(function (r) {
              r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (n, r) {
                var i = [];
                for (var o = 0; o < r.rows.length; o++) {
                  i.push(r.rows.item(o).name);
                }
                e({
                  db: t,
                  storeNames: i
                });
              }, function (t, e) {
                n(e);
              });
            }, function (t) {
              n(t);
            });
          });
        }
        var U = {
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
            var i = new a(function (t, r) {
              try {
                n.db = openDatabase(n.name, String(n.version), n.description, n.size);
              } catch (t) {
                return r(t);
              }
              n.db.transaction(function (i) {
                L(i, n, function () {
                  e._dbInfo = n;
                  t();
                }, function (t, e) {
                  r(e);
                });
              }, r);
            });
            n.serializer = R;
            return i;
          },
          _support: typeof openDatabase == "function",
          iterate: function (t, e) {
            var n = this;
            var r = new a(function (e, r) {
              n.ready().then(function () {
                var i = n._dbInfo;
                i.db.transaction(function (n) {
                  P(n, i, "SELECT * FROM " + i.storeName, [], function (n, r) {
                    var o = r.rows;
                    for (var a = o.length, s = 0; s < a; s++) {
                      var c = o.item(s);
                      var u = c.value;
                      u &&= i.serializer.deserialize(u);
                      if ((u = t(u, c.key, s + 1)) !== undefined) {
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
            s(r, e);
            return r;
          },
          getItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = new a(function (e, r) {
              n.ready().then(function () {
                var i = n._dbInfo;
                i.db.transaction(function (n) {
                  P(n, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [t], function (t, n) {
                    var r = n.rows.length ? n.rows.item(0).value : null;
                    r &&= i.serializer.deserialize(r);
                    e(r);
                  }, function (t, e) {
                    r(e);
                  });
                });
              }).catch(r);
            });
            s(r, e);
            return r;
          },
          setItem: function (t, e, n) {
            return M.apply(this, [t, e, n, 1]);
          },
          removeItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = new a(function (e, r) {
              n.ready().then(function () {
                var i = n._dbInfo;
                i.db.transaction(function (n) {
                  P(n, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [t], function () {
                    e();
                  }, function (t, e) {
                    r(e);
                  });
                });
              }).catch(r);
            });
            s(r, e);
            return r;
          },
          clear: function (t) {
            var e = this;
            var n = new a(function (t, n) {
              e.ready().then(function () {
                var r = e._dbInfo;
                r.db.transaction(function (e) {
                  P(e, r, "DELETE FROM " + r.storeName, [], function () {
                    t();
                  }, function (t, e) {
                    n(e);
                  });
                });
              }).catch(n);
            });
            s(n, t);
            return n;
          },
          length: function (t) {
            var e = this;
            var n = new a(function (t, n) {
              e.ready().then(function () {
                var r = e._dbInfo;
                r.db.transaction(function (e) {
                  P(e, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], function (e, n) {
                    var r = n.rows.item(0).c;
                    t(r);
                  }, function (t, e) {
                    n(e);
                  });
                });
              }).catch(n);
            });
            s(n, t);
            return n;
          },
          key: function (t, e) {
            var n = this;
            var r = new a(function (e, r) {
              n.ready().then(function () {
                var i = n._dbInfo;
                i.db.transaction(function (n) {
                  P(n, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [t + 1], function (t, n) {
                    var r = n.rows.length ? n.rows.item(0).key : null;
                    e(r);
                  }, function (t, e) {
                    r(e);
                  });
                });
              }).catch(r);
            });
            s(r, e);
            return r;
          },
          keys: function (t) {
            var e = this;
            var n = new a(function (t, n) {
              e.ready().then(function () {
                var r = e._dbInfo;
                r.db.transaction(function (e) {
                  P(e, r, "SELECT key FROM " + r.storeName, [], function (e, n) {
                    var r = [];
                    for (var i = 0; i < n.rows.length; i++) {
                      r.push(n.rows.item(i).key);
                    }
                    t(r);
                  }, function (t, e) {
                    n(e);
                  });
                });
              }).catch(n);
            });
            s(n, t);
            return n;
          },
          dropInstance: function (t, e) {
            e = l.apply(this, arguments);
            var n = this.config();
            if (!(t = typeof t != "function" && t || {}).name) {
              t.name = t.name || n.name;
              t.storeName = t.storeName || n.storeName;
            }
            var r;
            var i = this;
            s(r = t.name ? new a(function (e) {
              var r;
              r = t.name === n.name ? i._dbInfo.db : openDatabase(t.name, "", "", 0);
              if (t.storeName) {
                e({
                  db: r,
                  storeNames: [t.storeName]
                });
              } else {
                e(F(r));
              }
            }).then(function (t) {
              return new a(function (e, n) {
                t.db.transaction(function (r) {
                  function i(t) {
                    return new a(function (e, n) {
                      r.executeSql("DROP TABLE IF EXISTS " + t, [], function () {
                        e();
                      }, function (t, e) {
                        n(e);
                      });
                    });
                  }
                  var o = [];
                  for (var s = 0, c = t.storeNames.length; s < c; s++) {
                    o.push(i(t.storeNames[s]));
                  }
                  a.all(o).then(function () {
                    e();
                  }).catch(function (t) {
                    n(t);
                  });
                }, function (t) {
                  n(t);
                });
              });
            }) : a.reject("Invalid arguments"), e);
            return r;
          }
        };
        function B(t, e) {
          var n = t.name + "/";
          if (t.storeName !== e.storeName) {
            n += t.storeName + "/";
          }
          return n;
        }
        function $() {
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
        var q = {
          _driver: "localStorageWrapper",
          _initStorage: function (t) {
            var e = {};
            if (t) {
              for (var n in t) {
                e[n] = t[n];
              }
            }
            e.keyPrefix = B(t, this._defaultConfig);
            if ($()) {
              this._dbInfo = e;
              e.serializer = R;
              return a.resolve();
            } else {
              return a.reject();
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
              var i = r.length;
              for (var o = localStorage.length, a = 1, s = 0; s < o; s++) {
                var c = localStorage.key(s);
                if (c.indexOf(r) === 0) {
                  var u = localStorage.getItem(c);
                  u &&= e.serializer.deserialize(u);
                  if ((u = t(u, c.substring(i), a++)) !== undefined) {
                    return u;
                  }
                }
              }
            });
            s(r, e);
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
            s(r, e);
            return r;
          },
          setItem: function (t, e, n) {
            var r = this;
            t = u(t);
            var i = r.ready().then(function () {
              if (e === undefined) {
                e = null;
              }
              var n = e;
              return new a(function (i, o) {
                var a = r._dbInfo;
                a.serializer.serialize(e, function (e, r) {
                  if (r) {
                    o(r);
                  } else {
                    try {
                      localStorage.setItem(a.keyPrefix + t, e);
                      i(n);
                    } catch (t) {
                      if (t.name === "QuotaExceededError" || t.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                        o(t);
                      }
                      o(t);
                    }
                  }
                });
              });
            });
            s(i, n);
            return i;
          },
          removeItem: function (t, e) {
            var n = this;
            t = u(t);
            var r = n.ready().then(function () {
              var e = n._dbInfo;
              localStorage.removeItem(e.keyPrefix + t);
            });
            s(r, e);
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
            s(n, t);
            return n;
          },
          length: function (t) {
            var e = this.keys().then(function (t) {
              return t.length;
            });
            s(e, t);
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
            s(r, e);
            return r;
          },
          keys: function (t) {
            var e = this;
            var n = e.ready().then(function () {
              var t = e._dbInfo;
              for (var n = localStorage.length, r = [], i = 0; i < n; i++) {
                var o = localStorage.key(i);
                if (o.indexOf(t.keyPrefix) === 0) {
                  r.push(o.substring(t.keyPrefix.length));
                }
              }
              return r;
            });
            s(n, t);
            return n;
          },
          dropInstance: function (t, e) {
            e = l.apply(this, arguments);
            if (!(t = typeof t != "function" && t || {}).name) {
              var n = this.config();
              t.name = t.name || n.name;
              t.storeName = t.storeName || n.storeName;
            }
            var r;
            var i = this;
            s(r = t.name ? new a(function (e) {
              if (t.storeName) {
                e(B(t, i._defaultConfig));
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
            }) : a.reject("Invalid arguments"), e);
            return r;
          }
        };
        function G(t, e) {
          var n;
          var r;
          for (var i = t.length, o = 0; o < i;) {
            if ((n = t[o]) === (r = e) || typeof n == "number" && typeof r == "number" && isNaN(n) && isNaN(r)) {
              return true;
            }
            o++;
          }
          return false;
        }
        var W = Array.isArray || function (t) {
          return Object.prototype.toString.call(t) === "[object Array]";
        };
        var V = {};
        var z = {};
        var Y = {
          INDEXEDDB: O,
          WEBSQL: U,
          LOCALSTORAGE: q
        };
        var H = [Y.INDEXEDDB._driver, Y.WEBSQL._driver, Y.LOCALSTORAGE._driver];
        var X = ["dropInstance"];
        var K = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(X);
        var J = {
          description: "",
          driver: H.slice(),
          name: "localforage",
          size: 4980736,
          storeName: "keyvaluepairs",
          version: 1
        };
        function Q(t, e) {
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
                  if (W(e[n])) {
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
            for (var n in Y) {
              if (Y.hasOwnProperty(n)) {
                var r = Y[n];
                var i = r._driver;
                this[n] = i;
                if (!V[i]) {
                  this.defineDriver(r);
                }
              }
            }
            this._defaultConfig = Z({}, J);
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
            var r = new a(function (e, n) {
              try {
                var r = t._driver;
                var i = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!t._driver) {
                  n(i);
                  return;
                }
                var o = K.concat("_initStorage");
                for (var c = 0, u = o.length; c < u; c++) {
                  var l = o[c];
                  if ((!G(X, l) || t[l]) && typeof t[l] != "function") {
                    n(i);
                    return;
                  }
                }
                (function () {
                  var e = function (t) {
                    return function () {
                      var e = new Error("Method " + t + " is not implemented by the current driver");
                      var n = a.reject(e);
                      s(n, arguments[arguments.length - 1]);
                      return n;
                    };
                  };
                  for (var n = 0, r = X.length; n < r; n++) {
                    var i = X[n];
                    t[i] ||= e(i);
                  }
                })();
                function f(n) {
                  if (V[r]) {
                    console.info("Redefining LocalForage driver: " + r);
                  }
                  V[r] = t;
                  z[r] = n;
                  e();
                }
                if ("_support" in t) {
                  if (t._support && typeof t._support == "function") {
                    t._support().then(f, n);
                  } else {
                    f(!!t._support);
                  }
                } else {
                  f(true);
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
            var r = V[t] ? a.resolve(V[t]) : a.reject(new Error("Driver not found."));
            c(r, e, n);
            return r;
          };
          t.prototype.getSerializer = function (t) {
            var e = a.resolve(R);
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
            if (!W(t)) {
              t = [t];
            }
            var i = this._getSupportedDrivers(t);
            function o() {
              r._config.driver = r.driver();
            }
            function s(t) {
              r._extend(t);
              o();
              r._ready = r._initStorage(r._config);
              return r._ready;
            }
            var u = this._driverSet !== null ? this._driverSet.catch(function () {
              return a.resolve();
            }) : a.resolve();
            this._driverSet = u.then(function () {
              var t = i[0];
              r._dbInfo = null;
              r._ready = null;
              return r.getDriver(t).then(function (t) {
                r._driver = t._driver;
                o();
                r._wrapLibraryMethodsWithReady();
                r._initDriver = function (t) {
                  return function () {
                    var e = 0;
                    return function n() {
                      while (e < t.length) {
                        var i = t[e];
                        e++;
                        r._dbInfo = null;
                        r._ready = null;
                        return r.getDriver(i).then(s).catch(n);
                      }
                      o();
                      var c = new Error("No available storage method found.");
                      r._driverSet = a.reject(c);
                      return r._driverSet;
                    }();
                  };
                }(i);
              });
            }).catch(function () {
              o();
              var t = new Error("No available storage method found.");
              r._driverSet = a.reject(t);
              return r._driverSet;
            });
            c(this._driverSet, e, n);
            return this._driverSet;
          };
          t.prototype.supports = function (t) {
            return !!z[t];
          };
          t.prototype._extend = function (t) {
            Z(this, t);
          };
          t.prototype._getSupportedDrivers = function (t) {
            var e = [];
            for (var n = 0, r = t.length; n < r; n++) {
              var i = t[n];
              if (this.supports(i)) {
                e.push(i);
              }
            }
            return e;
          };
          t.prototype._wrapLibraryMethodsWithReady = function () {
            for (var t = 0, e = K.length; t < e; t++) {
              Q(this, K[t]);
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
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  var r = n(5);
  var i = n.n(r);
  n(7);
  n(19);
  n(64);
  n(257);
  var o = n(0);
  var a = n(6);
  var s = n(85);
  var c = n(379);
  var u = n(214);
  const l = t => {
    if (t) {
      if (o.s) {
        window.open(t, "_self");
      } else {
        window.chrome.tabs.getCurrent(e => window.chrome.tabs.update(e.id, {
          url: t
        }, () => {
          if (chrome.runtime.lastError) {
            if (t.startsWith("http")) {
              window.open(t, "_self");
            } else {
              window.chrome.tabs.create({
                url: t
              });
            }
          }
        }));
      }
    }
  };
  const f = {
    randomId: u.c,
    group: (t, e) => {
      const n = [];
      const r = Math.ceil(t.length / e);
      for (let i = 0; i < r; i++) {
        if (i === r - 1) {
          n.push(t.slice(i * e, t.length));
        } else {
          n.push(t.slice(i * e, (i + 1) * e));
        }
      }
      return n;
    },
    openUrl: (t, e = true, n) => {
      if (!n || n.button !== 1 && !f.ctrlKeyStatus(n)) {
        if (e) {
          if (o.s) {
            window.open(t, "_blank").focus();
          } else {
            window.chrome.tabs.create({
              url: t,
              active: true
            });
          }
        } else {
          l(t);
        }
      } else if (o.s) {
        window.open(t, "_blank");
      } else {
        window.chrome.tabs.create({
          url: t,
          active: false
        });
      }
    },
    openChromeApp: async (t, e = true, r) => {
      if (!(await s.a.has(["management"]))) {
        try {
          await s.a.request(["management"]);
        } catch (t) {
          const {
            message: e
          } = await Promise.all([n.e(0), n.e(1), n.e(2), n.e(6)]).then(n.bind(null, 106));
          e.error(i18n("no_permission_to_open_app", o.C.vendor));
          return;
        }
      }
      chrome.management.get(t, async ({
        type: i,
        launchType: a,
        enabled: s,
        appLaunchUrl: c
      } = {}) => {
        if (chrome.runtime.lastError) {
          const {
            message: t
          } = await Promise.all([n.e(0), n.e(1), n.e(2), n.e(6)]).then(n.bind(null, 106));
          t.error(i18n("target_chrome_app_not_installed", o.C.vendor));
        } else {
          const o = () => {
            if (!r || r.button !== 1 && !f.ctrlKeyStatus(r)) {
              if (e || i !== "hosted_app" || a !== "OPEN_AS_REGULAR_TAB") {
                chrome.management.launchApp(t);
              } else {
                l(c);
              }
            } else {
              chrome.management.launchApp(t);
            }
          };
          if (s) {
            o();
          } else {
            const {
              IConfirm: e
            } = await Promise.all([n.e(0), n.e(37)]).then(n.bind(null, 468));
            e.create().toShow({
              text: i18n("app_disabled_enable_first"),
              onConfirm: () => {
                window.chrome.management.setEnabled(t, true, () => {
                  o();
                });
              }
            });
          }
        }
      });
    },
    send: async function ({
      key: t,
      data: e
    }) {
      if (!o.s) {
        window.chrome.runtime.sendMessage({
          key: t,
          data: e
        }, () => {
          if (chrome.runtime.lastError) {
            console.warn("sendMessage: ", chrome.runtime.lastError.message);
          }
        });
      }
    },
    downloadImg: function (t, e, n) {
      if (!e) {
        e = "infinity-" + Math.ceil(Date.now() * Math.random() / (Math.random() * 555555));
        if (t.startsWith("blob:")) {
          e = `${e}.${n || "png"}`;
        } else {
          const n = t.indexOf("?");
          let r = t;
          if (~n) {
            r = t.slice(0, n);
          }
          e = `${e}.${r.split("/").reverse()[0].split(".").reverse()[0]}`;
        }
      }
      const r = e;
      const i = document.createElement("a");
      let a = t;
      if (!t.startsWith("blob:")) {
        a = t.includes("?") ? `${t}&attname=${r}` : `${t}?attname=${r}`;
      }
      if (o.r) {
        window.open(a, "_blank");
      } else {
        if (o.n) {
          i.setAttribute("target", "_blank");
        }
        i.setAttribute("download", r);
        i.setAttribute("href", a);
        document.body.appendChild(i);
        i.click();
        document.body.removeChild(i);
      }
    },
    fmtTime: (t, e) => new Date(t).toLocaleString(o.C.lang, e || {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }),
    getTimestamp: async function () {
      return Date.now();
    },
    parseJwt: t => {
      const e = t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      const n = decodeURIComponent(atob(e).split("").map(t => "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)).join(""));
      return JSON.parse(n);
    },
    compress: (t, e = 10, n) => new i.a(r => {
      const i = new Image();
      const o = document.createElement("canvas");
      const a = o.getContext("2d");
      i.onload = () => {
        n = n || i.height * e / i.width;
        o.width = e;
        o.height = n;
        a.fillRect(0, 0, e, n);
        a.drawImage(i, 0, 0, e, n);
        o.toBlob(r, "image/jpeg");
      };
      i.src = t;
    }),
    mergeArray: function (t = [], e = [], n = "id", r = "updatetime") {
      if (!t || t.length === 0) {
        return {
          result: e || [],
          isLocalEffective: false
        };
      }
      const i = e.filter(t => !!t);
      const o = Object.create(null);
      e.forEach((t, e) => {
        if (t[n]) {
          const r = t[n];
          o[r] = e;
        }
      });
      let a = false;
      t.filter(t => t[r] !== 0).forEach(t => {
        const e = t[n];
        const s = o[e];
        if (s !== undefined) {
          if ((i[s][r] || 0) < (t[r] || 0)) {
            i[s] = t;
            a = true;
          }
        } else {
          a = true;
          i.push(t);
        }
      });
      return {
        result: i.filter(t => !!t),
        isLocalEffective: a
      };
    },
    throttle: function (t, e) {
      let n;
      return function (...r) {
        const i = this;
        n ||= setTimeout(() => {
          t.apply(i, r);
          n = null;
        }, e);
      };
    },
    debounce: function (t, e) {
      let n = null;
      return function () {
        const r = this;
        const i = arguments;
        if (n) {
          clearTimeout(n);
          n = null;
        }
        n = setTimeout(() => {
          t.apply(r, i);
        }, e);
      };
    },
    setStyle: function (t, e = document.body) {
      Object.keys(t).forEach(n => {
        e.style.setProperty(n, t[n]);
      });
    },
    isInputType: t => !!t && (t.tagName === "INPUT" && (!t.getAttribute("type") || t.getAttribute("type") === "text" || t.getAttribute("type") === "search") || t.tagName === "TEXTAREA" || !!t.getAttribute("contenteditable") || undefined),
    convertBase64ToBlob: t => {
      const e = t.split(",");
      let n = "";
      let r = "";
      if (e.length > 1) {
        r = e[1];
        n = e[0].substring(e[0].indexOf(":") + 1, e[0].indexOf(";"));
      }
      const i = atob(r);
      const o = new ArrayBuffer(i.length);
      const a = new Uint8Array(o);
      for (let t = 0; t < i.length; t++) {
        a[t] = i.charCodeAt(t);
      }
      return new Blob([o], {
        type: n
      });
    },
    isTouchScreendevice: () => !!("ontouchstart" in window) || !!navigator.maxTouchPoints,
    stopBubble(t) {
      t.stopPropagation();
    },
    hexColorDelta(t, e) {
      let n;
      let r;
      let i;
      let o;
      let a;
      let s;
      if (Array.isArray(t)) {
        [n, r, i] = t;
      } else {
        n = parseInt(t.substring(0, 2), 16);
        r = parseInt(t.substring(2, 4), 16);
        i = parseInt(t.substring(4, 6), 16);
      }
      if (Array.isArray(e)) {
        [o, a, s] = e;
      } else {
        o = parseInt(e.substring(0, 2), 16);
        a = parseInt(e.substring(2, 4), 16);
        s = parseInt(e.substring(4, 6), 16);
      }
      let c = 255 - Math.abs(n - o);
      let u = 255 - Math.abs(r - a);
      let l = 255 - Math.abs(i - s);
      c /= 255;
      u /= 255;
      l /= 255;
      return (c + u + l) / 3;
    },
    async getSimilarColor(t) {
      const e = window.URL.createObjectURL(t);
      const n = await new i.a(t => {
        const n = new Image();
        n.onload = () => t(n);
        n.src = e;
      });
      const r = new ColorThief().getColor(n);
      const o = window.__INFINITY__.color_list;
      const a = o.map(t => f.hexColorDelta(r, t));
      const s = Math.max.apply(null, a);
      const c = o[a.indexOf(s)];
      window.URL.revokeObjectURL(e);
      return c;
    },
    getPrivacyUrl() {
      const t = a.IS_ZH ? "zh" : "en";
      if (o.n) {
        return `/privacy/${t}/privacy.html`;
      } else {
        return `${o.u}/${t}/privacy.html`;
      }
    },
    sleep: (t = 0) => new i.a(e => {
      setTimeout(() => {
        e(null);
      }, t);
    }),
    checkImage() {
      let t;
      return [e => new i.a((n, r) => {
        t = new Image();
        t.onload = n;
        t.onerror = r;
        t.src = e;
      }), () => {
        if (t) {
          t.src = "";
        }
      }];
    },
    requestFirefoxThrottle(t, e, n = false) {
      if (o.n || n) {
        const n = "throttle-" + t;
        if (typeof e == "boolean") {
          localStorage.setItem(n, Date.now() + "");
        }
        if (typeof e == "number") {
          const t = localStorage.getItem(n);
          const r = Date.now();
          if (t && Number(t) < r && Number(t) + e > r) {
            return false;
          }
        }
      }
      return true;
    },
    chooseFile: (t, e) => {
      t = t || "image/jpg,image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg";
      e = e || "readAsDataURL";
      return new i.a(n => {
        try {
          document.querySelectorAll(".choose-file").forEach(t => {
            document.body.removeChild(t);
          });
        } catch (t) {}
        const r = document.createElement("input");
        r.setAttribute("type", "file");
        r.setAttribute("class", "choose-file");
        r.setAttribute("accept", t);
        r.style.opacity = "0";
        r.style.width = "0";
        r.style.height = "0";
        r.value = "";
        r.addEventListener("change", t => {
          const i = t.target.files[0];
          const o = new FileReader();
          o[e](i);
          o.onload = function (t) {
            const e = t.target.result;
            n(e);
            try {
              document.body.removeChild(r);
            } catch (t) {}
          };
        }, {
          once: true
        });
        document.body.appendChild(r);
        r.click();
      });
    },
    exportJsonFile(t, e) {
      const n = JSON.stringify(t);
      let r = "text/infinity";
      if (o.r) {
        r = "custom/infinity";
      }
      const i = new Blob([n], {
        type: r
      });
      const a = window.URL.createObjectURL(i);
      if (o.r) {
        window.open(a, "_blank");
      } else {
        const t = new Date();
        const n = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
        const r = document.createElement("a");
        r.href = a;
        r.download = e + n + ".infinity";
        document.body.appendChild(r);
        r.click();
        document.body.removeChild(r);
      }
      URL.revokeObjectURL(a);
    },
    stopShowMenu(t) {
      if (!f.isInputType(t.target)) {
        t.stopPropagation();
        t.preventDefault();
        document.querySelector("i-menu").toHide();
        return false;
      }
    },
    ctrlKeyStatus: t => o.o ? t.metaKey : t.ctrlKey,
    getFavIconSrc: t => p(t) ? t : function (t) {
      try {
        return new c.a(t).host;
      } catch (e) {
        return t;
      }
    }(function (t) {
      if (function (t) {
        return /^(.+?):\/\//.test(t);
      }(t) || p(t)) {
        return t;
      }
      return "http://" + t;
    }(t)).replace("^www.", ""),
    getLastReqValue(t) {
      const e = [];
      const n = this;
      return async function (r, i, o) {
        const a = n.randomId("req");
        e.push(a);
        const s = await t(r, i, o);
        const c = e.findIndex(t => t === a);
        const u = e.length;
        e.splice(0, c + 1);
        if (c === u - 1) {
          return s;
        } else {
          return null;
        }
      };
    },
    isFirstDate(t) {
      const e = new Date("2013/11/30").toLocaleDateString(t);
      let n = "";
      e.replace(/(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/, (t, e) => {
        n = e;
        return "";
      });
      if (n === "2013") {
        return true;
      }
      const r = String(new Date("2013/11/30").getDate());
      return n === r;
    },
    internaDateToStan: u.a,
    getTargetLogDomain(t) {
      if (!t) {
        return "";
      }
      try {
        if (t.startsWith("http://") || t.startsWith("https://")) {
          const e = new URL(t);
          if (e.host) {
            return e.host;
          }
        }
        return t.split("?")[0];
      } catch (e) {
        return t;
      }
    }
  };
  const h = /^\w+:\w/;
  function p(t) {
    return h.test(t);
  }
  e.a = f;
  const d = document.createElement("script");
  d.src = "/vendor/color-thief.min.js";
  document.head.appendChild(d);
  d.onload = () => {
    d.remove();
  };
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
  var r = n(4);
  var i = n(20);
  var o = n(11);
  var a = n(40);
  var s = n(41);
  var c = n(49);
  var u = c.get;
  var l = c.enforce;
  var f = String(String).split("String");
  (t.exports = function (t, e, n, s) {
    var u = !!s && !!s.unsafe;
    var h = !!s && !!s.enumerable;
    var p = !!s && !!s.noTargetGet;
    if (typeof n == "function") {
      if (typeof e == "string" && !o(n, "name")) {
        i(n, "name", e);
      }
      l(n).source ||= f.join(typeof e == "string" ? e : "");
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
        i(t, e, n);
      }
    } else if (h) {
      t[e] = n;
    } else {
      a(e, n);
    }
  })(Function.prototype, "toString", function () {
    return typeof this == "function" && u(this).source || s(this);
  });
}, function (t, e) {
  t.exports = function (t) {
    if (typeof t != "function") {
      throw TypeError(String(t) + " is not a function");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(18);
  t.exports = r("navigator", "userAgent") || "";
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return true;
    }
  };
}, function (t, e, n) {
  var r = n(61);
  var i = n(97);
  var o = n(95);
  t.exports = r ? function (t, e, n) {
    return i.f(t, e, o(1, n));
  } : function (t, e, n) {
    t[e] = n;
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(226);
  var i = Object.prototype.toString;
  function o(t) {
    return i.call(t) === "[object Array]";
  }
  function a(t) {
    return t === undefined;
  }
  function s(t) {
    return t !== null && typeof t == "object";
  }
  function c(t) {
    return i.call(t) === "[object Function]";
  }
  function u(t, e) {
    if (t != null) {
      if (typeof t != "object") {
        t = [t];
      }
      if (o(t)) {
        for (var n = 0, r = t.length; n < r; n++) {
          e.call(null, t[n], n, t);
        }
      } else {
        for (var i in t) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e.call(null, t[i], i, t);
          }
        }
      }
    }
  }
  t.exports = {
    isArray: o,
    isArrayBuffer: function (t) {
      return i.call(t) === "[object ArrayBuffer]";
    },
    isBuffer: function (t) {
      return t !== null && !a(t) && t.constructor !== null && !a(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
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
    isObject: s,
    isUndefined: a,
    isDate: function (t) {
      return i.call(t) === "[object Date]";
    },
    isFile: function (t) {
      return i.call(t) === "[object File]";
    },
    isBlob: function (t) {
      return i.call(t) === "[object Blob]";
    },
    isFunction: c,
    isStream: function (t) {
      return s(t) && c(t.pipe);
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
      for (var r = 0, i = arguments.length; r < i; r++) {
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
      for (var r = 0, i = arguments.length; r < i; r++) {
        u(arguments[r], n);
      }
      return e;
    },
    extend: function (t, e, n) {
      u(e, function (e, i) {
        t[i] = n && typeof e == "function" ? r(e, n) : e;
      });
      return t;
    },
    trim: function (t) {
      return t.replace(/^\s*/, "").replace(/\s*$/, "");
    }
  };
}, function (t, e, n) {
  var r = n(45);
  t.exports = function (t) {
    if (!r(t)) {
      throw TypeError(String(t) + " is not an object");
    }
    return t;
  };
}, function (t, e) {
  var n = {}.toString;
  t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return h;
  });
  n.d(e, "b", function () {
    return y;
  });
  var r;
  var i = n(5);
  var o = n.n(i);
  n(7);
  n(258);
  var a = {
    randomUUID: typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  var s = new Uint8Array(16);
  function c() {
    if (!r && !(r = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return r(s);
  }
  var u = [];
  for (var l = 0; l < 256; ++l) {
    u.push((l + 256).toString(16).slice(1));
  }
  function f(t, e = 0) {
    return (u[t[e + 0]] + u[t[e + 1]] + u[t[e + 2]] + u[t[e + 3]] + "-" + u[t[e + 4]] + u[t[e + 5]] + "-" + u[t[e + 6]] + u[t[e + 7]] + "-" + u[t[e + 8]] + u[t[e + 9]] + "-" + u[t[e + 10]] + u[t[e + 11]] + u[t[e + 12]] + u[t[e + 13]] + u[t[e + 14]] + u[t[e + 15]]).toLowerCase();
  }
  var h;
  function p(t, e, n) {
    if (a.randomUUID && !e && !t) {
      return a.randomUUID();
    }
    var r = (t = t || {}).random || (t.rng || c)();
    r[6] = r[6] & 15 | 64;
    r[8] = r[8] & 63 | 128;
    if (e) {
      n = n || 0;
      for (var i = 0; i < 16; ++i) {
        e[n + i] = r[i];
      }
      return e;
    }
    return f(r);
  }
  (function (t) {
    t.BG_PLAY_AUDIO = "BG_PLAY_AUDIO";
    t.BG_GET_LOCAL_STORAGE = "BG_GET_LOCAL_STORAGE";
    t.BG_SET_LOCAL_STORAGE = "BG_SET_LOCAL_STORAGE";
    t.BG_REMOVE_LOCAL_STORAGE = "BG_REMOVE_LOCAL_STORAGE";
  })(h ||= {});
  var d = n(0);
  function m(t, e) {
    if (Array.isArray(t)) {
      return t.includes(e);
    } else {
      return typeof t == "string" && t === e;
    }
  }
  function g(t) {
    const e = {};
    if (t instanceof Error) {
      e.message = t.message;
      e.stack = t.stack;
    } else {
      e.message = t.message || t || "error";
    }
    return e;
  }
  const y = new class {
    constructor() {
      this.responseTimeout = 5000;
      this.actionListeners = new Map();
      this.responseListeners = new Map();
      if (d.l) {
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
      if (m(n.from, t.from) && m(t.to, n.to)) {
        if (d.j) {
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
      if (d.j) {
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
                    responseData: g(t),
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
      const r = t.action + ":" + p();
      const i = setTimeout(() => {
        this.responseListeners.delete(r);
        n(new Error("response timeout"));
      }, t.responseTimeout || this.responseTimeout);
      this.responseListeners.set(r, t => {
        const {
          responseData: o,
          responseSuccess: a
        } = t;
        clearTimeout(i);
        if (a) {
          e(o);
        } else {
          n(o);
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
      return new o.a((e, n) => {
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
        const i = this._listenResponse(t, e, n);
        chrome.runtime.sendMessage(Object.assign(Object.assign({}, r), {
          responseId: i
        }), () => {
          if (chrome.runtime.lastError) {
            console.warn("sendMessage: ", chrome.runtime.lastError.message);
            n(chrome.runtime.lastError);
          }
        });
      });
    }
    sendToContent(t) {
      return new o.a((e, n) => {
        if (t.to === "content_scripts") {
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, ([r]) => {
            const i = r.id;
            if (!i) {
              n(new Error("No tabId"));
              return;
            }
            const o = Object.assign(Object.assign({}, t), {
              type: "ext_send"
            });
            if (!t.needResponse) {
              chrome.tabs.sendMessage(i, o, () => {
                if (chrome.runtime.lastError) {
                  console.warn("sendMessage: ", chrome.runtime.lastError.message);
                }
              });
              e(null);
              return;
            }
            const a = this._listenResponse(t, e, n);
            chrome.tabs.sendMessage(i, Object.assign(Object.assign({}, o), {
              responseId: a
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
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var l;
    var f;
    var h;
    var p;
    var d;
    var m;
    var g;
    var y;
    var b;
    var w = {}.hasOwnProperty;
    b = n(57);
    y = b.isObject;
    g = b.isFunction;
    m = b.isEmpty;
    d = b.getValue;
    u = null;
    i = null;
    o = null;
    a = null;
    s = null;
    h = null;
    p = null;
    f = null;
    c = null;
    r = null;
    l = null;
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
          u = n(169);
          i = n(171);
          o = n(172);
          a = n(173);
          s = n(174);
          h = n(179);
          p = n(180);
          f = n(181);
          c = n(237);
          r = n(15);
          l = n(340);
          n(170);
          e = n(341);
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
            this.childNodeList = new l(this.children);
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
          var i;
          var o;
          if (this.nodeType === r.Element || this.nodeType === r.DocumentFragment) {
            o = "";
            e = 0;
            n = (i = this.children).length;
            for (; e < n; e++) {
              if ((t = i[e]).textContent) {
                o += t.textContent;
              }
            }
            return o;
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
        var i;
        var o;
        this.parent = t;
        if (t) {
          this.options = t.options;
          this.stringify = t.stringify;
        }
        o = [];
        n = 0;
        r = (i = this.children).length;
        for (; n < r; n++) {
          e = i[n];
          o.push(e.setParent(this));
        }
        return o;
      };
      t.prototype.element = function (t, e, n) {
        var r;
        var i;
        var o;
        var a;
        var s;
        var c;
        var u;
        var l;
        var f;
        var h;
        var p;
        c = null;
        if (e === null && n == null) {
          e = (f = [{}, null])[0];
          n = f[1];
        }
        if (e == null) {
          e = {};
        }
        e = d(e);
        if (!y(e)) {
          n = (h = [e, n])[0];
          e = h[1];
        }
        if (t != null) {
          t = d(t);
        }
        if (Array.isArray(t)) {
          o = 0;
          u = t.length;
          for (; o < u; o++) {
            i = t[o];
            c = this.element(i);
          }
        } else if (g(t)) {
          c = this.element(t.apply());
        } else if (y(t)) {
          for (s in t) {
            if (w.call(t, s)) {
              p = t[s];
              if (g(p)) {
                p = p.apply();
              }
              if (!this.options.ignoreDecorators && this.stringify.convertAttKey && s.indexOf(this.stringify.convertAttKey) === 0) {
                c = this.attribute(s.substr(this.stringify.convertAttKey.length), p);
              } else if (!this.options.separateArrayItems && Array.isArray(p) && m(p)) {
                c = this.dummy();
              } else if (y(p) && m(p)) {
                c = this.element(s);
              } else if (this.options.keepNullNodes || p != null) {
                if (!this.options.separateArrayItems && Array.isArray(p)) {
                  a = 0;
                  l = p.length;
                  for (; a < l; a++) {
                    i = p[a];
                    (r = {})[s] = i;
                    c = this.element(r);
                  }
                } else if (y(p)) {
                  if (!this.options.ignoreDecorators && this.stringify.convertTextKey && s.indexOf(this.stringify.convertTextKey) === 0) {
                    c = this.element(p);
                  } else {
                    (c = this.element(s)).element(p);
                  }
                } else {
                  c = this.element(s, p);
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
        var i;
        var o;
        var a;
        var s;
        if (t != null ? t.type : undefined) {
          a = e;
          (o = t).setParent(this);
          if (a) {
            i = children.indexOf(a);
            s = children.splice(i);
            children.push(o);
            Array.prototype.push.apply(children, s);
          } else {
            children.push(o);
          }
          return o;
        }
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
        }
        i = this.parent.children.indexOf(this);
        s = this.parent.children.splice(i);
        r = this.parent.element(t, e, n);
        Array.prototype.push.apply(this.parent.children, s);
        return r;
      };
      t.prototype.insertAfter = function (t, e, n) {
        var r;
        var i;
        var o;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
        }
        i = this.parent.children.indexOf(this);
        o = this.parent.children.splice(i + 1);
        r = this.parent.element(t, e, n);
        Array.prototype.push.apply(this.parent.children, o);
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
        var i;
        if (t != null) {
          t = d(t);
        }
        e ||= {};
        e = d(e);
        if (!y(e)) {
          n = (i = [e, n])[0];
          e = i[1];
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
        if (y(t)) {
          this.element(t);
        }
        e = new p(this, t);
        this.children.push(e);
        return this;
      };
      t.prototype.cdata = function (t) {
        var e;
        e = new i(this, t);
        this.children.push(e);
        return this;
      };
      t.prototype.comment = function (t) {
        var e;
        e = new o(this, t);
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
        var i;
        var o;
        var a;
        if (t != null) {
          t = d(t);
        }
        if (e != null) {
          e = d(e);
        }
        if (Array.isArray(t)) {
          o = 0;
          a = t.length;
          for (; o < a; o++) {
            n = t[o];
            this.instruction(n);
          }
        } else if (y(t)) {
          for (n in t) {
            if (w.call(t, n)) {
              r = t[n];
              this.instruction(n, r);
            }
          }
        } else {
          if (g(e)) {
            e = e.apply();
          }
          i = new f(this, t, e);
          this.children.push(i);
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
        var i;
        var o;
        i = this.document();
        o = new a(i, t, e, n);
        if (i.children.length === 0) {
          i.children.unshift(o);
        } else if (i.children[0].type === r.Declaration) {
          i.children[0] = o;
        } else {
          i.children.unshift(o);
        }
        return i.root() || i;
      };
      t.prototype.dtd = function (t, e) {
        var n;
        var i;
        var o;
        var a;
        var c;
        var u;
        var l;
        var f;
        var h;
        n = this.document();
        i = new s(n, t, e);
        o = a = 0;
        u = (f = n.children).length;
        for (; a < u; o = ++a) {
          if (f[o].type === r.DocType) {
            n.children[o] = i;
            return i;
          }
        }
        o = c = 0;
        l = (h = n.children).length;
        for (; c < l; o = ++c) {
          if (h[o].isRoot) {
            n.children.splice(o, 0, i);
            return i;
          }
        }
        n.children.push(i);
        return i;
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
        var i;
        n = 0;
        r = (i = this.children).length;
        for (; n < r; n++) {
          if (t === (e = i[n])) {
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
        var i;
        var o;
        var a;
        t ||= this.document();
        r = 0;
        i = (o = t.children).length;
        for (; r < i; r++) {
          if (a = e(n = o[r])) {
            return a;
          }
          if (a = this.foreachTreeNode(n, e)) {
            return a;
          }
        }
      };
      return t;
    }();
  }).call(this);
}, function (t, e, n) {
  "use strict";

  n.d(e, "d", function () {
    return r;
  });
  n.d(e, "e", function () {
    return i;
  });
  n.d(e, "f", function () {
    return o;
  });
  n.d(e, "g", function () {
    return a;
  });
  n.d(e, "b", function () {
    return s;
  });
  n.d(e, "c", function () {
    return c;
  });
  n.d(e, "a", function () {
    return u;
  });
  n(19);
  const r = "store-wallpaper-cache";
  const i = "infinity-image-base64";
  const o = navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/);
  const a = "format/webp/";
  const s = "https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/default.png";
  const c = () => `${s}?imageView2/2/w/${screen.width}/${o ? "" : a}interlace/1`;
  const u = true;
}, function (t, e, n) {
  var r = n(190);
  var i = {}.hasOwnProperty;
  t.exports = Object.hasOwn || function (t, e) {
    return i.call(r(t), e);
  };
}, function (t, e, n) {
  var r = n(16);
  var i = n(110);
  var o = n(66);
  var a = n(39);
  var s = n(67);
  var c = n(11);
  var u = n(68);
  var l = Object.getOwnPropertyDescriptor;
  e.f = r ? l : function (t, e) {
    t = a(t);
    e = s(e, true);
    if (u) {
      try {
        return l(t, e);
      } catch (t) {}
    }
    if (c(t, e)) {
      return o(!i.f.call(t, e), t[e]);
    }
  };
}, function (t, e, n) {
  var r = n(111);
  var i = n(46);
  t.exports = function (t) {
    return r(i(t));
  };
}, function (t, e, n) {
  var r = n(4);
  var i = n(20);
  t.exports = function (t, e) {
    try {
      i(r, t, e);
    } catch (n) {
      r[t] = e;
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(42);
  var i = Function.toString;
  if (typeof r.inspectSource != "function") {
    r.inspectSource = function (t) {
      return i.call(t);
    };
  }
  t.exports = r.inspectSource;
}, function (t, e, n) {
  var r = n(4);
  var i = n(40);
  var o = r["__core-js_shared__"] || i("__core-js_shared__", {});
  t.exports = o;
}, function (t, e, n) {
  var r = n(33);
  var i = n(4);
  t.exports = r(i.process) == "process";
}, function (t, e, n) {
  "use strict";

  var r = n(14);
  var i = n(188).f;
  var o = n(192);
  var a = n(104);
  var s = n(139);
  var c = n(30);
  var u = n(37);
  function l(t) {
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
    var f;
    var h;
    var p;
    var d;
    var m;
    var g;
    var y;
    var b = t.target;
    var w = t.global;
    var v = t.stat;
    var _ = t.proto;
    var E = w ? r : v ? r[b] : (r[b] || {}).prototype;
    var x = w ? a : a[b] ||= {};
    var T = x.prototype;
    for (h in e) {
      n = !o(w ? h : b + (v ? "." : "#") + h, t.forced) && E && u(E, h);
      d = x[h];
      if (n) {
        m = t.noTargetGet ? (y = i(E, h)) && y.value : E[h];
      }
      p = n && m ? m : e[h];
      if (!n || typeof d != typeof p) {
        g = t.bind && n ? s(p, r) : t.wrap && n ? l(p) : _ && typeof p == "function" ? s(Function.call, p) : p;
        if (t.sham || p && p.sham || d && d.sham) {
          c(g, "sham", true);
        }
        x[h] = g;
        if (_) {
          if (!u(a, f = b + "Prototype")) {
            c(a, f, {});
          }
          a[f][h] = p;
          if (t.real && T && !T[h]) {
            c(T, h, p);
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
}, function (t, e) {
  t.exports = function (t) {
    if (t == null) {
      throw TypeError("Can't call method on " + t);
    }
    return t;
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
  var r = n(47);
  var i = Math.min;
  t.exports = function (t) {
    if (t > 0) {
      return i(r(t), 9007199254740991);
    } else {
      return 0;
    }
  };
}, function (t, e, n) {
  var r;
  var i;
  var o;
  var a = n(112);
  var s = n(4);
  var c = n(12);
  var u = n(20);
  var l = n(11);
  var f = n(42);
  var h = n(79);
  var p = n(55);
  var d = s.WeakMap;
  if (a || f.state) {
    var m = f.state ||= new d();
    var g = m.get;
    var y = m.has;
    var b = m.set;
    r = function (t, e) {
      if (y.call(m, t)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      b.call(m, t, e);
      return e;
    };
    i = function (t) {
      return g.call(m, t) || {};
    };
    o = function (t) {
      return y.call(m, t);
    };
  } else {
    var w = h("state");
    p[w] = true;
    r = function (t, e) {
      if (l(t, w)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      u(t, w, e);
      return e;
    };
    i = function (t) {
      if (l(t, w)) {
        return t[w];
      } else {
        return {};
      }
    };
    o = function (t) {
      return l(t, w);
    };
  }
  t.exports = {
    set: r,
    get: i,
    has: o,
    enforce: function (t) {
      if (o(t)) {
        return i(t);
      } else {
        return r(t, {});
      }
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!c(e) || (n = i(e)).type !== t) {
          throw TypeError("Incompatible receiver, " + t + " required");
        }
        return n;
      };
    }
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return r;
  });
  n.d(e, "a", function () {
    return i;
  });
  n.d(e, "d", function () {
    return o;
  });
  n.d(e, "c", function () {
    return a;
  });
  n(19);
  const r = n(0).s ? "serviceworker" : "background";
  let i = false;
  if (r === "background") {
    i = typeof ServiceWorkerGlobalScope == "function" && typeof chrome == "object";
  } else if (r === "serviceworker") {
    i = typeof ServiceWorkerGlobalScope == "function";
  }
  const o = {
    timeout: 0,
    taskId: ""
  };
  const a = () => ("" + Date.now() / 1000 / 100000).split(".")[1].substr(0, 8) + ("" + Math.random()).split(".")[1].substr(0, 8).padEnd(8, "0");
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return a;
  });
  n.d(e, "b", function () {
    return s;
  });
  n.d(e, "c", function () {
    return c;
  });
  var r = n(36);
  const i = /^http[s]?:\/\//;
  function o(t) {
    return i.test(t);
  }
  const a = (t, e) => {
    const n = "https://infinityicon.infinitynewtab.com/assets/images/" + t;
    if (e === true) {
      return s(n);
    } else if (e === false) {
      return n;
    } else if (/\.(png|jpg|jpeg)$/.test(t)) {
      return s(n);
    } else {
      return n;
    }
  };
  function s(t) {
    if (o(t)) {
      if (t.includes("?")) {
        return t;
      } else if (r.f) {
        return t + "?imageView2/0/q/100";
      } else {
        return t + "?imageView2/0/format/webp/q/100";
      }
    } else {
      return t;
    }
  }
  function c(t) {
    if (o(t)) {
      if (t.includes("?")) {
        return t;
      } else if (r.f) {
        return t + "?imageMogr2/thumbnail/240x/blur/1x0/quality/100|imageslim";
      } else {
        return t + "?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim";
      }
    } else {
      return t;
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    if (typeof t != "function") {
      throw TypeError(String(t) + " is not a function");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(4);
  var i = n(12);
  var o = r.document;
  var a = i(o) && i(o.createElement);
  t.exports = function (t) {
    if (a) {
      return o.createElement(t);
    } else {
      return {};
    }
  };
}, function (t, e, n) {
  var r = n(56);
  var i = n(42);
  (t.exports = function (t, e) {
    return i[t] ||= e !== undefined ? e : {};
  })("versions", []).push({
    version: "3.15.2",
    mode: r ? "pure" : "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
  });
}, function (t, e) {
  t.exports = {};
}, function (t, e) {
  t.exports = false;
}, function (t, e) {
  (function () {
    var e;
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    var c = [].slice;
    var u = {}.hasOwnProperty;
    e = function () {
      var t;
      var e;
      var n;
      var r;
      var i;
      var a;
      a = arguments[0];
      i = arguments.length >= 2 ? c.call(arguments, 1) : [];
      if (o(Object.assign)) {
        Object.assign.apply(null, arguments);
      } else {
        t = 0;
        n = i.length;
        for (; t < n; t++) {
          if ((r = i[t]) != null) {
            for (e in r) {
              if (u.call(r, e)) {
                a[e] = r[e];
              }
            }
          }
        }
      }
      return a;
    };
    o = function (t) {
      return !!t && Object.prototype.toString.call(t) === "[object Function]";
    };
    a = function (t) {
      var e;
      return !!t && ((e = typeof t) == "function" || e === "object");
    };
    r = function (t) {
      if (o(Array.isArray)) {
        return Array.isArray(t);
      } else {
        return Object.prototype.toString.call(t) === "[object Array]";
      }
    };
    i = function (t) {
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
    s = function (t) {
      var e;
      var n;
      return a(t) && (n = Object.getPrototypeOf(t)) && (e = n.constructor) && typeof e == "function" && e instanceof e && Function.prototype.toString.call(e) === Function.prototype.toString.call(Object);
    };
    n = function (t) {
      if (o(t.valueOf)) {
        return t.valueOf();
      } else {
        return t;
      }
    };
    t.exports.assign = e;
    t.exports.isFunction = o;
    t.exports.isObject = a;
    t.exports.isArray = r;
    t.exports.isEmpty = i;
    t.exports.isPlainObject = s;
    t.exports.getValue = n;
  }).call(this);
}, function (t, e) {
  var n = 0;
  var r = Math.random();
  t.exports = function (t) {
    return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++n + r).toString(36);
  };
}, function (t, e, n) {
  var r;
  var i;
  var o = n(4);
  var a = n(28);
  var s = o.process;
  var c = s && s.versions;
  var u = c && c.v8;
  if (u) {
    i = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
  } else if (a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/))) {
    i = r[1];
  }
  t.exports = i && +i;
}, function (t, e, n) {
  var r = n(9);
  var i = /#|\.prototype\./;
  function o(t, e) {
    var n = s[a(t)];
    return n == u || n != c && (typeof e == "function" ? r(e) : !!e);
  }
  var a = o.normalize = function (t) {
    return String(t).replace(i, ".").toLowerCase();
  };
  var s = o.data = {};
  var c = o.NATIVE = "N";
  var u = o.POLYFILL = "P";
  t.exports = o;
}, function (t, e, n) {
  var r = n(29);
  t.exports = !r(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
}, function (t, e, n) {
  var r = n(104);
  var i = n(14);
  function o(t) {
    if (typeof t == "function") {
      return t;
    } else {
      return undefined;
    }
  }
  t.exports = function (t, e) {
    if (arguments.length < 2) {
      return o(r[t]) || o(i[t]);
    } else {
      return r[t] && r[t][e] || i[t] && i[t][e];
    }
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  "use strict";

  var r = n(262);
  var i = n(9);
  var o = n(10);
  var a = n(48);
  var s = n(47);
  var c = n(46);
  var u = n(263);
  var l = n(265);
  var f = n(266);
  var h = n(8)("replace");
  var p = Math.max;
  var d = Math.min;
  var m = "a".replace(/./, "$0") === "$0";
  var g = !!/./[h] && /./[h]("a", "$0") === "";
  r("replace", function (t, e, n) {
    var r = g ? "$" : "$0";
    return [function (t, n) {
      var r = c(this);
      var i = t == null ? undefined : t[h];
      if (i !== undefined) {
        return i.call(t, r, n);
      } else {
        return e.call(String(r), t, n);
      }
    }, function (t, i) {
      if (typeof i == "string" && i.indexOf(r) === -1 && i.indexOf("$<") === -1) {
        var c = n(e, this, t, i);
        if (c.done) {
          return c.value;
        }
      }
      var h = o(this);
      var m = String(t);
      var g = typeof i == "function";
      if (!g) {
        i = String(i);
      }
      var y = h.global;
      if (y) {
        var b = h.unicode;
        h.lastIndex = 0;
      }
      var w = [];
      while (true) {
        var v = f(h, m);
        if (v === null) {
          break;
        }
        w.push(v);
        if (!y) {
          break;
        }
        if (String(v[0]) === "") {
          h.lastIndex = u(m, a(h.lastIndex), b);
        }
      }
      var _;
      var E = "";
      var x = 0;
      for (var T = 0; T < w.length; T++) {
        v = w[T];
        var I = String(v[0]);
        var O = p(d(s(v.index), m.length), 0);
        var S = [];
        for (var A = 1; A < v.length; A++) {
          S.push((_ = v[A]) === undefined ? _ : String(_));
        }
        var N = v.groups;
        if (g) {
          var j = [I].concat(S, O, m);
          if (N !== undefined) {
            j.push(N);
          }
          var C = String(i.apply(undefined, j));
        } else {
          C = l(I, m, O, S, N, i);
        }
        if (O >= x) {
          E += m.slice(x, O) + C;
          x = O + I.length;
        }
      }
      return E + m.slice(x);
    }];
  }, !!i(function () {
    var t = /./;
    t.exec = function () {
      var t = [];
      t.groups = {
        a: "7"
      };
      return t;
    };
    return "".replace(t, "$<a>") !== "7";
  }) || !m || g);
}, function (t, e) {
  t.exports = true;
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
  var r = n(12);
  t.exports = function (t, e) {
    if (!r(t)) {
      return t;
    }
    var n;
    var i;
    if (e && typeof (n = t.toString) == "function" && !r(i = n.call(t))) {
      return i;
    }
    if (typeof (n = t.valueOf) == "function" && !r(i = n.call(t))) {
      return i;
    }
    if (!e && typeof (n = t.toString) == "function" && !r(i = n.call(t))) {
      return i;
    }
    throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e, n) {
  var r = n(16);
  var i = n(9);
  var o = n(53);
  t.exports = !r && !i(function () {
    return Object.defineProperty(o("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
}, function (t, e, n) {
  var r = n(59);
  var i = n(9);
  t.exports = !!Object.getOwnPropertySymbols && !i(function () {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
  });
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(27);
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
        return function (n, r, i) {
          return t.call(e, n, r, i);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r;
  var i;
  var o;
  var a = n(4);
  var s = n(9);
  var c = n(71);
  var u = n(87);
  var l = n(53);
  var f = n(73);
  var h = n(43);
  var p = a.location;
  var d = a.setImmediate;
  var m = a.clearImmediate;
  var g = a.process;
  var y = a.MessageChannel;
  var b = a.Dispatch;
  var w = 0;
  var v = {};
  function _(t) {
    if (v.hasOwnProperty(t)) {
      var e = v[t];
      delete v[t];
      e();
    }
  }
  function E(t) {
    return function () {
      _(t);
    };
  }
  function x(t) {
    _(t.data);
  }
  function T(t) {
    a.postMessage(t + "", p.protocol + "//" + p.host);
  }
  if (!d || !m) {
    d = function (t) {
      var e = [];
      for (var n = 1; arguments.length > n;) {
        e.push(arguments[n++]);
      }
      v[++w] = function () {
        (typeof t == "function" ? t : Function(t)).apply(undefined, e);
      };
      r(w);
      return w;
    };
    m = function (t) {
      delete v[t];
    };
    if (h) {
      r = function (t) {
        g.nextTick(E(t));
      };
    } else if (b && b.now) {
      r = function (t) {
        b.now(E(t));
      };
    } else if (y && !f) {
      o = (i = new y()).port2;
      i.port1.onmessage = x;
      r = c(o.postMessage, o, 1);
    } else if (a.addEventListener && typeof postMessage == "function" && !a.importScripts && p && p.protocol !== "file:" && !s(T)) {
      r = T;
      a.addEventListener("message", x, false);
    } else {
      r = "onreadystatechange" in l("script") ? function (t) {
        u.appendChild(l("script")).onreadystatechange = function () {
          u.removeChild(this);
          _(t);
        };
      } : function (t) {
        setTimeout(E(t), 0);
      };
    }
  }
  t.exports = {
    set: d,
    clear: m
  };
}, function (t, e, n) {
  var r = n(28);
  t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r);
}, function (t, e, n) {
  "use strict";

  var r = n(27);
  function i(t) {
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
    return new i(t);
  };
},, function (t, e) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function (t, e, n) {
  var r = n(4);
  var i = n(38).f;
  var o = n(20);
  var a = n(26);
  var s = n(40);
  var c = n(113);
  var u = n(60);
  t.exports = function (t, e) {
    var n;
    var l;
    var f;
    var h;
    var p;
    var d = t.target;
    var m = t.global;
    var g = t.stat;
    if (n = m ? r : g ? r[d] || s(d, {}) : (r[d] || {}).prototype) {
      for (l in e) {
        h = e[l];
        f = t.noTargetGet ? (p = i(n, l)) && p.value : n[l];
        if (!u(m ? l : d + (g ? "." : "#") + l, t.forced) && f !== undefined) {
          if (typeof h == typeof f) {
            continue;
          }
          c(h, f);
        }
        if (t.sham || f && f.sham) {
          o(h, "sham", true);
        }
        a(n, l, h, t);
      }
    }
  };
}, function (t, e, n) {
  var r = n(46);
  t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e, n) {
  var r = n(54);
  var i = n(58);
  var o = r("keys");
  t.exports = function (t) {
    return o[t] ||= i(t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(157);
  var i = Object.keys || function (t) {
    var e = [];
    for (var n in t) {
      e.push(n);
    }
    return e;
  };
  t.exports = f;
  var o = Object.create(n(108));
  o.inherits = n(91);
  var a = n(241);
  var s = n(185);
  o.inherits(f, a);
  for (var c = i(s.prototype), u = 0; u < c.length; u++) {
    var l = c[u];
    f.prototype[l] ||= s.prototype[l];
  }
  function f(t) {
    if (!(this instanceof f)) {
      return new f(t);
    }
    a.call(this, t);
    s.call(this, t);
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
  Object.defineProperty(f.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function () {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(f.prototype, "destroyed", {
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
  f.prototype._destroy = function (t, e) {
    this.push(null);
    this.end();
    r.nextTick(e, t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(52);
  function i(t) {
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
    return new i(t);
  };
}, function (t, e, n) {
  var r;
  var i;
  var o;
  var a;
  var s;
  r = n(401);
  i = n(317).utf8;
  o = n(402);
  a = n(317).bin;
  (s = function (t, e) {
    if (t.constructor == String) {
      t = e && e.encoding === "binary" ? a.stringToBytes(t) : i.stringToBytes(t);
    } else if (o(t)) {
      t = Array.prototype.slice.call(t, 0);
    } else if (!Array.isArray(t) && t.constructor !== Uint8Array) {
      t = t.toString();
    }
    for (var n = r.bytesToWords(t), c = t.length * 8, u = 1732584193, l = -271733879, f = -1732584194, h = 271733878, p = 0; p < n.length; p++) {
      n[p] = (n[p] << 8 | n[p] >>> 24) & 16711935 | (n[p] << 24 | n[p] >>> 8) & -16711936;
    }
    n[c >>> 5] |= 128 << c % 32;
    n[14 + (c + 64 >>> 9 << 4)] = c;
    var d = s._ff;
    var m = s._gg;
    var g = s._hh;
    var y = s._ii;
    for (p = 0; p < n.length; p += 16) {
      var b = u;
      var w = l;
      var v = f;
      var _ = h;
      u = d(u, l, f, h, n[p + 0], 7, -680876936);
      h = d(h, u, l, f, n[p + 1], 12, -389564586);
      f = d(f, h, u, l, n[p + 2], 17, 606105819);
      l = d(l, f, h, u, n[p + 3], 22, -1044525330);
      u = d(u, l, f, h, n[p + 4], 7, -176418897);
      h = d(h, u, l, f, n[p + 5], 12, 1200080426);
      f = d(f, h, u, l, n[p + 6], 17, -1473231341);
      l = d(l, f, h, u, n[p + 7], 22, -45705983);
      u = d(u, l, f, h, n[p + 8], 7, 1770035416);
      h = d(h, u, l, f, n[p + 9], 12, -1958414417);
      f = d(f, h, u, l, n[p + 10], 17, -42063);
      l = d(l, f, h, u, n[p + 11], 22, -1990404162);
      u = d(u, l, f, h, n[p + 12], 7, 1804603682);
      h = d(h, u, l, f, n[p + 13], 12, -40341101);
      f = d(f, h, u, l, n[p + 14], 17, -1502002290);
      u = m(u, l = d(l, f, h, u, n[p + 15], 22, 1236535329), f, h, n[p + 1], 5, -165796510);
      h = m(h, u, l, f, n[p + 6], 9, -1069501632);
      f = m(f, h, u, l, n[p + 11], 14, 643717713);
      l = m(l, f, h, u, n[p + 0], 20, -373897302);
      u = m(u, l, f, h, n[p + 5], 5, -701558691);
      h = m(h, u, l, f, n[p + 10], 9, 38016083);
      f = m(f, h, u, l, n[p + 15], 14, -660478335);
      l = m(l, f, h, u, n[p + 4], 20, -405537848);
      u = m(u, l, f, h, n[p + 9], 5, 568446438);
      h = m(h, u, l, f, n[p + 14], 9, -1019803690);
      f = m(f, h, u, l, n[p + 3], 14, -187363961);
      l = m(l, f, h, u, n[p + 8], 20, 1163531501);
      u = m(u, l, f, h, n[p + 13], 5, -1444681467);
      h = m(h, u, l, f, n[p + 2], 9, -51403784);
      f = m(f, h, u, l, n[p + 7], 14, 1735328473);
      u = g(u, l = m(l, f, h, u, n[p + 12], 20, -1926607734), f, h, n[p + 5], 4, -378558);
      h = g(h, u, l, f, n[p + 8], 11, -2022574463);
      f = g(f, h, u, l, n[p + 11], 16, 1839030562);
      l = g(l, f, h, u, n[p + 14], 23, -35309556);
      u = g(u, l, f, h, n[p + 1], 4, -1530992060);
      h = g(h, u, l, f, n[p + 4], 11, 1272893353);
      f = g(f, h, u, l, n[p + 7], 16, -155497632);
      l = g(l, f, h, u, n[p + 10], 23, -1094730640);
      u = g(u, l, f, h, n[p + 13], 4, 681279174);
      h = g(h, u, l, f, n[p + 0], 11, -358537222);
      f = g(f, h, u, l, n[p + 3], 16, -722521979);
      l = g(l, f, h, u, n[p + 6], 23, 76029189);
      u = g(u, l, f, h, n[p + 9], 4, -640364487);
      h = g(h, u, l, f, n[p + 12], 11, -421815835);
      f = g(f, h, u, l, n[p + 15], 16, 530742520);
      u = y(u, l = g(l, f, h, u, n[p + 2], 23, -995338651), f, h, n[p + 0], 6, -198630844);
      h = y(h, u, l, f, n[p + 7], 10, 1126891415);
      f = y(f, h, u, l, n[p + 14], 15, -1416354905);
      l = y(l, f, h, u, n[p + 5], 21, -57434055);
      u = y(u, l, f, h, n[p + 12], 6, 1700485571);
      h = y(h, u, l, f, n[p + 3], 10, -1894986606);
      f = y(f, h, u, l, n[p + 10], 15, -1051523);
      l = y(l, f, h, u, n[p + 1], 21, -2054922799);
      u = y(u, l, f, h, n[p + 8], 6, 1873313359);
      h = y(h, u, l, f, n[p + 15], 10, -30611744);
      f = y(f, h, u, l, n[p + 6], 15, -1560198380);
      l = y(l, f, h, u, n[p + 13], 21, 1309151649);
      u = y(u, l, f, h, n[p + 4], 6, -145523070);
      h = y(h, u, l, f, n[p + 11], 10, -1120210379);
      f = y(f, h, u, l, n[p + 2], 15, 718787259);
      l = y(l, f, h, u, n[p + 9], 21, -343485551);
      u = u + b >>> 0;
      l = l + w >>> 0;
      f = f + v >>> 0;
      h = h + _ >>> 0;
    }
    return r.endian([u, l, f, h]);
  })._ff = function (t, e, n, r, i, o, a) {
    var s = t + (e & n | ~e & r) + (i >>> 0) + a;
    return (s << o | s >>> 32 - o) + e;
  };
  s._gg = function (t, e, n, r, i, o, a) {
    var s = t + (e & r | n & ~r) + (i >>> 0) + a;
    return (s << o | s >>> 32 - o) + e;
  };
  s._hh = function (t, e, n, r, i, o, a) {
    var s = t + (e ^ n ^ r) + (i >>> 0) + a;
    return (s << o | s >>> 32 - o) + e;
  };
  s._ii = function (t, e, n, r, i, o, a) {
    var s = t + (n ^ (e | ~r)) + (i >>> 0) + a;
    return (s << o | s >>> 32 - o) + e;
  };
  s._blocksize = 16;
  s._digestsize = 16;
  t.exports = function (t, e) {
    if (t == null) {
      throw new Error("Illegal argument " + t);
    }
    var n = r.wordsToBytes(s(t, e));
    if (e && e.asBytes) {
      return n;
    } else if (e && e.asString) {
      return a.bytesToString(n);
    } else {
      return r.bytesToHex(n);
    }
  };
}, function (t, e, n) {
  var r = n(10);
  var i = n(120);
  t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t;
    var e = false;
    var n = {};
    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []);
      e = n instanceof Array;
    } catch (t) {}
    return function (n, o) {
      r(n);
      i(o);
      if (e) {
        t.call(n, o);
      } else {
        n.__proto__ = o;
      }
      return n;
    };
  }() : undefined);
}, function (t, e) {
  var n = {}.toString;
  t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return s;
  });
  var r = n(5);
  var i = n.n(r);
  var o = n(0);
  const a = {};
  const s = new class {
    constructor() {
      this.request = (t, e) => {
        if ((o.n || o.h) && t.includes("favicon") && (t = Array.from(new Set(t))).length > 1) {
          t.splice(t.findIndex(t => t === "favicon"), 1);
        }
        return new i.a((n, r) => {
          if (o.s) {
            r();
            return;
          }
          let i = "";
          if (o.n) {
            i = t.join(",") + (e == null ? undefined : e.join(","));
            if (a[i]) {
              r(new Error("repeat"));
              return;
            }
            a[i] = true;
          }
          chrome.permissions.request({
            permissions: t,
            origins: e
          }, t => {
            if (o.n && a[i]) {
              delete a[i];
            }
            if (chrome.runtime.lastError) {
              r(chrome.runtime.lastError);
            } else if (t) {
              n(true);
            } else {
              r(new Error("REJECT"));
            }
          });
        });
      };
      this.has = (t, e) => {
        if ((o.n || o.h) && t.includes("favicon") && (t = Array.from(new Set(t))).length > 1) {
          t.splice(t.findIndex(t => t === "favicon"), 1);
        }
        return new i.a(n => {
          if (o.s) {
            n(false);
          } else {
            chrome.permissions.contains({
              permissions: t,
              origins: e
            }, t => {
              n(t);
            });
          }
        });
      };
    }
  }();
}, function (t, e, n) {
  var r = n(11);
  var i = n(39);
  var o = n(116).indexOf;
  var a = n(55);
  t.exports = function (t, e) {
    var n;
    var s = i(t);
    var c = 0;
    var u = [];
    for (n in s) {
      if (!r(a, n) && r(s, n)) {
        u.push(n);
      }
    }
    while (e.length > c) {
      if (r(s, n = e[c++])) {
        if (!~o(u, n)) {
          u.push(n);
        }
      }
    }
    return u;
  };
}, function (t, e, n) {
  var r = n(18);
  t.exports = r("document", "documentElement");
}, function (t, e, n) {
  var r = n(4);
  t.exports = r.Promise;
}, function (t, e, n) {
  var r = n(10);
  var i = n(27);
  var o = n(8)("species");
  t.exports = function (t, e) {
    var n;
    var a = r(t).constructor;
    if (a === undefined || (n = r(a)[o]) == null) {
      return e;
    } else {
      return i(n);
    }
  };
}, function (t, e, n) {
  var r = n(10);
  var i = n(12);
  var o = n(74);
  t.exports = function (t, e) {
    r(t);
    if (i(e) && e.constructor === t) {
      return e;
    }
    var n = o.f(t);
    (0, n.resolve)(e);
    return n.promise;
  };
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
},, function (t, e, n) {
  var r = n(127);
  var i = n(33);
  var o = n(8)("toStringTag");
  var a = i(function () {
    return arguments;
  }()) == "Arguments";
  t.exports = r ? i : function (t) {
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
    }(e = Object(t), o)) == "string") {
      return n;
    } else if (a) {
      return i(e);
    } else if ((r = i(e)) == "Object" && typeof e.callee == "function") {
      return "Arguments";
    } else {
      return r;
    }
  };
}, function (t, e) {
  var n;
  var r;
  var i = t.exports = {};
  function o() {
    throw new Error("setTimeout has not been defined");
  }
  function a() {
    throw new Error("clearTimeout has not been defined");
  }
  function s(t) {
    if (n === setTimeout) {
      return setTimeout(t, 0);
    }
    if ((n === o || !n) && setTimeout) {
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
      n = typeof setTimeout == "function" ? setTimeout : o;
    } catch (t) {
      n = o;
    }
    try {
      r = typeof clearTimeout == "function" ? clearTimeout : a;
    } catch (t) {
      r = a;
    }
  })();
  var c;
  var u = [];
  var l = false;
  var f = -1;
  function h() {
    if (l && c) {
      l = false;
      if (c.length) {
        u = c.concat(u);
      } else {
        f = -1;
      }
      if (u.length) {
        p();
      }
    }
  }
  function p() {
    if (!l) {
      var t = s(h);
      l = true;
      for (var e = u.length; e;) {
        c = u;
        u = [];
        while (++f < e) {
          if (c) {
            c[f].run();
          }
        }
        f = -1;
        e = u.length;
      }
      c = null;
      l = false;
      (function (t) {
        if (r === clearTimeout) {
          return clearTimeout(t);
        }
        if ((r === a || !r) && clearTimeout) {
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
  function m() {}
  i.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
    }
    u.push(new d(t, e));
    if (u.length === 1 && !l) {
      s(p);
    }
  };
  d.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  i.title = "browser";
  i.browser = true;
  i.env = {};
  i.argv = [];
  i.version = "";
  i.versions = {};
  i.on = m;
  i.addListener = m;
  i.once = m;
  i.off = m;
  i.removeListener = m;
  i.removeAllListeners = m;
  i.emit = m;
  i.prependListener = m;
  i.prependOnceListener = m;
  i.listeners = function (t) {
    return [];
  };
  i.binding = function (t) {
    throw new Error("process.binding is not supported");
  };
  i.cwd = function () {
    return "/";
  };
  i.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  };
  i.umask = function () {
    return 0;
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
  var r = n(270);
  var i = n(103);
  t.exports = function (t) {
    return r(i(t));
  };
}, function (t, e, n) {
  var r = n(61);
  var i = n(191);
  var o = n(32);
  var a = n(189);
  var s = Object.defineProperty;
  e.f = r ? s : function (t, e, n) {
    o(t);
    e = a(e, true);
    o(n);
    if (i) {
      try {
        return s(t, e, n);
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
  var r = n(32);
  var i = n(279);
  var o = n(158);
  var a = n(139);
  var s = n(281);
  var c = n(282);
  function u(t, e) {
    this.stopped = t;
    this.result = e;
  }
  t.exports = function (t, e, n) {
    var l;
    var f;
    var h;
    var p;
    var d;
    var m;
    var g;
    var y = n && n.that;
    var b = !!n && !!n.AS_ENTRIES;
    var w = !!n && !!n.IS_ITERATOR;
    var v = !!n && !!n.INTERRUPTED;
    var _ = a(e, y, 1 + b + v);
    function E(t) {
      if (l) {
        c(l);
      }
      return new u(true, t);
    }
    function x(t) {
      if (b) {
        r(t);
        if (v) {
          return _(t[0], t[1], E);
        } else {
          return _(t[0], t[1]);
        }
      } else if (v) {
        return _(t, E);
      } else {
        return _(t);
      }
    }
    if (w) {
      l = t;
    } else {
      if (typeof (f = s(t)) != "function") {
        throw TypeError("Target is not iterable");
      }
      if (i(f)) {
        h = 0;
        p = o(t.length);
        for (; p > h; h++) {
          if ((d = x(t[h])) && d instanceof u) {
            return d;
          }
        }
        return new u(false);
      }
      l = f.call(t);
    }
    for (m = l.next; !(g = m.call(l)).done;) {
      try {
        d = x(g.value);
      } catch (t) {
        c(l);
        throw t;
      }
      if (typeof d == "object" && d && d instanceof u) {
        return d;
      }
    }
    return new u(false);
  };
}, function (t, e, n) {
  var r = n(30);
  t.exports = function (t, e, n, i) {
    if (i && i.enumerable) {
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
  var r = n(86);
  var i = n(76).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function (t) {
    return r(t, i);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(18);
  var i = n(21);
  var o = n(8);
  var a = n(16);
  var s = o("species");
  t.exports = function (t) {
    var e = r(t);
    var n = i.f;
    if (a && e && !e[s]) {
      n(e, s, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
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
  var r;
  var i;
  var o;
  var a = n(293);
  var s = n(14);
  var c = n(45);
  var u = n(30);
  var l = n(37);
  var f = n(142);
  var h = n(141);
  var p = n(145);
  var d = s.WeakMap;
  if (a || f.state) {
    var m = f.state ||= new d();
    var g = m.get;
    var y = m.has;
    var b = m.set;
    r = function (t, e) {
      if (y.call(m, t)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      b.call(m, t, e);
      return e;
    };
    i = function (t) {
      return g.call(m, t) || {};
    };
    o = function (t) {
      return y.call(m, t);
    };
  } else {
    var w = h("state");
    p[w] = true;
    r = function (t, e) {
      if (l(t, w)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      u(t, w, e);
      return e;
    };
    i = function (t) {
      if (l(t, w)) {
        return t[w];
      } else {
        return {};
      }
    };
    o = function (t) {
      return l(t, w);
    };
  }
  t.exports = {
    set: r,
    get: i,
    has: o,
    enforce: function (t) {
      if (o(t)) {
        return i(t);
      } else {
        return r(t, {});
      }
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!c(e) || (n = i(e)).type !== t) {
          throw TypeError("Incompatible receiver, " + t + " required");
        }
        return n;
      };
    }
  };
},, function (t, e, n) {
  t.exports = n(318);
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
  }).call(this, n(153).Buffer);
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return i;
  });
  n.d(e, "a", function () {
    return o;
  });
  var r = n(162);
  const i = {
    notice: {
      gmail: false,
      gmailVoice: false,
      gmailNumber: false,
      todoNumber: true
    },
    link: {
      icon: !!n(0).s,
      search: true,
      bookmark: false,
      history: false
    },
    view: {
      topBookmark: false,
      topUseful: false,
      windmill: true,
      pagin: false,
      hideInfinityAI: false,
      isShowHomepageBtn: true,
      isHideIcp: false,
      scaleSide: 1,
      scaleMain: 1
    },
    layout: {
      row: 3,
      col: 6,
      rowGap: 0.4,
      colGap: 0.3,
      custom: true,
      customItem: [3, 6]
    },
    animation: {
      easing: "linear"
    },
    icon: {
      miniMode: false,
      shadow: false,
      startAnimation: false,
      opacity: 1,
      radius: 0.5,
      scale: 0.6,
      isHideIconName: false
    },
    search: {
      hide: false,
      searchSuggest: true,
      keepSearchInput: false,
      hideCategory: false,
      hideButton: true,
      shadow: true,
      scale: 0.75,
      radius: r.j,
      opacity: 1
    },
    font: {
      shadow: true,
      size: 13,
      color: "rgb(221, 221, 221)"
    }
  };
  const o = function (t, e) {
    let n = null;
    switch (t + "*" + e) {
      case "2*4":
      case "2*5":
        n = {
          iconScale: 0.5,
          colGap: 0.3,
          rowGap: 0.2,
          searchScale: 0.82
        };
        break;
      case "2*6":
        n = {
          iconScale: 0.6,
          colGap: 0.3,
          rowGap: 0.3,
          searchScale: 0.9
        };
        break;
      case "2*7":
        n = {
          iconScale: 0.7,
          colGap: 0.3,
          rowGap: 0.3,
          searchScale: 0.9
        };
        break;
      case "3*3":
        n = {
          iconScale: 0.7,
          colGap: 0.24,
          rowGap: 0.2,
          searchScale: 0.82
        };
    }
    return n;
  };
}, function (t, e, n) {
  "use strict";

  var r = {}.propertyIsEnumerable;
  var i = Object.getOwnPropertyDescriptor;
  var o = i && !r.call({
    1: 2
  }, 1);
  e.f = o ? function (t) {
    var e = i(this, t);
    return !!e && e.enumerable;
  } : r;
}, function (t, e, n) {
  var r = n(9);
  var i = n(33);
  var o = "".split;
  t.exports = r(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    if (i(t) == "String") {
      return o.call(t, "");
    } else {
      return Object(t);
    }
  } : Object;
}, function (t, e, n) {
  var r = n(4);
  var i = n(41);
  var o = r.WeakMap;
  t.exports = typeof o == "function" && /native code/.test(i(o));
}, function (t, e, n) {
  var r = n(11);
  var i = n(114);
  var o = n(38);
  var a = n(21);
  t.exports = function (t, e) {
    for (var n = i(e), s = a.f, c = o.f, u = 0; u < n.length; u++) {
      var l = n[u];
      if (!r(t, l)) {
        s(t, l, c(e, l));
      }
    }
  };
}, function (t, e, n) {
  var r = n(18);
  var i = n(101);
  var o = n(118);
  var a = n(10);
  t.exports = r("Reflect", "ownKeys") || function (t) {
    var e = i.f(a(t));
    var n = o.f;
    if (n) {
      return e.concat(n(t));
    } else {
      return e;
    }
  };
}, function (t, e, n) {
  var r = n(4);
  t.exports = r;
}, function (t, e, n) {
  var r = n(39);
  var i = n(48);
  var o = n(117);
  function a(t) {
    return function (e, n, a) {
      var s;
      var c = r(e);
      var u = i(c.length);
      var l = o(a, u);
      if (t && n != n) {
        while (u > l) {
          if ((s = c[l++]) != s) {
            return true;
          }
        }
      } else {
        for (; u > l; l++) {
          if ((t || l in c) && c[l] === n) {
            return t || l || 0;
          }
        }
      }
      return !t && -1;
    };
  }
  t.exports = {
    includes: a(true),
    indexOf: a(false)
  };
}, function (t, e, n) {
  var r = n(47);
  var i = Math.max;
  var o = Math.min;
  t.exports = function (t, e) {
    var n = r(t);
    if (n < 0) {
      return i(n + e, 0);
    } else {
      return o(n, e);
    }
  };
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols;
}, function (t, e, n) {
  var r = n(26);
  t.exports = function (t, e, n) {
    for (var i in e) {
      r(t, i, e[i], n);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(12);
  t.exports = function (t) {
    if (!r(t) && t !== null) {
      throw TypeError("Can't set " + String(t) + " as a prototype");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(21).f;
  var i = n(11);
  var o = n(8)("toStringTag");
  t.exports = function (t, e, n) {
    if (t && !i(t = n ? t : t.prototype, o)) {
      r(t, o, {
        configurable: true,
        value: e
      });
    }
  };
}, function (t, e, n) {
  var r = n(69);
  t.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
}, function (t, e) {
  t.exports = function (t, e, n) {
    if (!(t instanceof e)) {
      throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(10);
  var i = n(125);
  var o = n(48);
  var a = n(71);
  var s = n(126);
  var c = n(128);
  function u(t, e) {
    this.stopped = t;
    this.result = e;
  }
  t.exports = function (t, e, n) {
    var l;
    var f;
    var h;
    var p;
    var d;
    var m;
    var g;
    var y = n && n.that;
    var b = !!n && !!n.AS_ENTRIES;
    var w = !!n && !!n.IS_ITERATOR;
    var v = !!n && !!n.INTERRUPTED;
    var _ = a(e, y, 1 + b + v);
    function E(t) {
      if (l) {
        c(l);
      }
      return new u(true, t);
    }
    function x(t) {
      if (b) {
        r(t);
        if (v) {
          return _(t[0], t[1], E);
        } else {
          return _(t[0], t[1]);
        }
      } else if (v) {
        return _(t, E);
      } else {
        return _(t);
      }
    }
    if (w) {
      l = t;
    } else {
      if (typeof (f = s(t)) != "function") {
        throw TypeError("Target is not iterable");
      }
      if (i(f)) {
        h = 0;
        p = o(t.length);
        for (; p > h; h++) {
          if ((d = x(t[h])) && d instanceof u) {
            return d;
          }
        }
        return new u(false);
      }
      l = f.call(t);
    }
    for (m = l.next; !(g = m.call(l)).done;) {
      try {
        d = x(g.value);
      } catch (t) {
        c(l);
        throw t;
      }
      if (typeof d == "object" && d && d instanceof u) {
        return d;
      }
    }
    return new u(false);
  };
}, function (t, e, n) {
  var r = n(8);
  var i = n(70);
  var o = r("iterator");
  var a = Array.prototype;
  t.exports = function (t) {
    return t !== undefined && (i.Array === t || a[o] === t);
  };
}, function (t, e, n) {
  var r = n(93);
  var i = n(70);
  var o = n(8)("iterator");
  t.exports = function (t) {
    if (t != null) {
      return t[o] || t["@@iterator"] || i[r(t)];
    }
  };
}, function (t, e, n) {
  var r = {
    [n(8)("toStringTag")]: "z"
  };
  t.exports = String(r) === "[object z]";
}, function (t, e, n) {
  var r = n(10);
  t.exports = function (t) {
    var e = t.return;
    if (e !== undefined) {
      return r(e.call(t)).value;
    }
  };
}, function (t, e, n) {
  var r = n(8)("iterator");
  var i = false;
  try {
    var o = 0;
    var a = {
      next: function () {
        return {
          done: !!o++
        };
      },
      return: function () {
        i = true;
      }
    };
    a[r] = function () {
      return this;
    };
    Array.from(a, function () {
      throw 2;
    });
  } catch (t) {}
  t.exports = function (t, e) {
    if (!e && !i) {
      return false;
    }
    var n = false;
    try {
      var o = {
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
      t(o);
    } catch (t) {}
    return n;
  };
}, function (t, e, n) {
  var r;
  var i;
  var o;
  var a;
  var s;
  var c;
  var u;
  var l;
  var f = n(4);
  var h = n(38).f;
  var p = n(72).set;
  var d = n(73);
  var m = n(131);
  var g = n(43);
  var y = f.MutationObserver || f.WebKitMutationObserver;
  var b = f.document;
  var w = f.process;
  var v = f.Promise;
  var _ = h(f, "queueMicrotask");
  var E = _ && _.value;
  if (!E) {
    r = function () {
      var t;
      var e;
      for (g && (t = w.domain) && t.exit(); i;) {
        e = i.fn;
        i = i.next;
        try {
          e();
        } catch (t) {
          if (i) {
            a();
          } else {
            o = undefined;
          }
          throw t;
        }
      }
      o = undefined;
      if (t) {
        t.enter();
      }
    };
    if (d || g || m || !y || !b) {
      if (v && v.resolve) {
        (u = v.resolve(undefined)).constructor = v;
        l = u.then;
        a = function () {
          l.call(u, r);
        };
      } else {
        a = g ? function () {
          w.nextTick(r);
        } : function () {
          p.call(f, r);
        };
      }
    } else {
      s = true;
      c = b.createTextNode("");
      new y(r).observe(c, {
        characterData: true
      });
      a = function () {
        c.data = s = !s;
      };
    }
  }
  t.exports = E || function (t) {
    var e = {
      fn: t,
      next: undefined
    };
    if (o) {
      o.next = e;
    }
    if (!i) {
      i = e;
      a();
    }
    o = e;
  };
}, function (t, e, n) {
  var r = n(28);
  t.exports = /web0s(?!.*chrome)/i.test(r);
}, function (t, e, n) {
  var r = n(4);
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
},,, function (t, e, n) {
  "use strict";

  var r;
  var i;
  var o = n(216);
  var a = n(217);
  var s = n(54);
  var c = n(259);
  var u = n(49).get;
  var l = n(218);
  var f = n(219);
  var h = RegExp.prototype.exec;
  var p = s("native-string-replace", String.prototype.replace);
  var d = h;
  r = /a/;
  i = /b*/g;
  h.call(r, "a");
  h.call(i, "a");
  var m = r.lastIndex !== 0 || i.lastIndex !== 0;
  var g = a.UNSUPPORTED_Y || a.BROKEN_CARET;
  var y = /()??/.exec("")[1] !== undefined;
  if (m || y || g || l || f) {
    d = function (t) {
      var e;
      var n;
      var r;
      var i;
      var a;
      var s;
      var l;
      var f = this;
      var b = u(f);
      var w = b.raw;
      if (w) {
        w.lastIndex = f.lastIndex;
        e = d.call(w, t);
        f.lastIndex = w.lastIndex;
        return e;
      }
      var v = b.groups;
      var _ = g && f.sticky;
      var E = o.call(f);
      var x = f.source;
      var T = 0;
      var I = t;
      if (_) {
        if ((E = E.replace("y", "")).indexOf("g") === -1) {
          E += "g";
        }
        I = String(t).slice(f.lastIndex);
        if (f.lastIndex > 0 && (!f.multiline || f.multiline && t[f.lastIndex - 1] !== "\n")) {
          x = "(?: " + x + ")";
          I = " " + I;
          T++;
        }
        n = new RegExp("^(?:" + x + ")", E);
      }
      if (y) {
        n = new RegExp("^" + x + "$(?!\\s)", E);
      }
      if (m) {
        r = f.lastIndex;
      }
      i = h.call(_ ? n : f, I);
      if (_) {
        if (i) {
          i.input = i.input.slice(T);
          i[0] = i[0].slice(T);
          i.index = f.lastIndex;
          f.lastIndex += i[0].length;
        } else {
          f.lastIndex = 0;
        }
      } else if (m && i) {
        f.lastIndex = f.global ? i.index + i[0].length : r;
      }
      if (y && i && i.length > 1) {
        p.call(i[0], n, function () {
          for (a = 1; a < arguments.length - 2; a++) {
            if (arguments[a] === undefined) {
              i[a] = undefined;
            }
          }
        });
      }
      if (i && v) {
        i.groups = s = c(null);
        a = 0;
        for (; a < v.length; a++) {
          s[(l = v[a])[0]] = i[l[1]];
        }
      }
      return i;
    };
  }
  t.exports = d;
}, function (t, e, n) {
  var r = n(14);
  var i = n(45);
  var o = r.document;
  var a = i(o) && i(o.createElement);
  t.exports = function (t) {
    if (a) {
      return o.createElement(t);
    } else {
      return {};
    }
  };
}, function (t, e, n) {
  var r = n(52);
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
        return function (n, r, i) {
          return t.call(e, n, r, i);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(37);
  var i = n(190);
  var o = n(141);
  var a = n(272);
  var s = o("IE_PROTO");
  var c = Object.prototype;
  t.exports = a ? Object.getPrototypeOf : function (t) {
    t = i(t);
    if (r(t, s)) {
      return t[s];
    } else if (typeof t.constructor == "function" && t instanceof t.constructor) {
      return t.constructor.prototype;
    } else if (t instanceof Object) {
      return c;
    } else {
      return null;
    }
  };
}, function (t, e, n) {
  var r = n(193);
  var i = n(194);
  var o = r("keys");
  t.exports = function (t) {
    return o[t] ||= i(t);
  };
}, function (t, e, n) {
  var r = n(14);
  var i = n(271);
  var o = r["__core-js_shared__"] || i("__core-js_shared__", {});
  t.exports = o;
}, function (t, e, n) {
  var r = n(32);
  var i = n(273);
  t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t;
    var e = false;
    var n = {};
    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []);
      e = n instanceof Array;
    } catch (t) {}
    return function (n, o) {
      r(n);
      i(o);
      if (e) {
        t.call(n, o);
      } else {
        n.__proto__ = o;
      }
      return n;
    };
  }() : undefined);
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
  var r = n(62);
  t.exports = r("navigator", "userAgent") || "";
}, function (t, e, n) {
  var r = n(148);
  var i = n(84);
  var o = n(17)("toStringTag");
  var a = i(function () {
    return arguments;
  }()) == "Arguments";
  t.exports = r ? i : function (t) {
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
    }(e = Object(t), o)) == "string") {
      return n;
    } else if (a) {
      return i(e);
    } else if ((r = i(e)) == "Object" && typeof e.callee == "function") {
      return "Arguments";
    } else {
      return r;
    }
  };
}, function (t, e, n) {
  var r = {
    [n(17)("toStringTag")]: "z"
  };
  t.exports = String(r) === "[object z]";
}, function (t, e, n) {
  var r = n(148);
  var i = n(97).f;
  var o = n(30);
  var a = n(37);
  var s = n(286);
  var c = n(17)("toStringTag");
  t.exports = function (t, e, n, u) {
    if (t) {
      var l = n ? t : t.prototype;
      if (!a(l, c)) {
        i(l, c, {
          configurable: true,
          value: e
        });
      }
      if (u && !r) {
        o(l, "toString", s);
      }
    }
  };
}, function (t, e, n) {
  var r = n(84);
  var i = n(14);
  t.exports = r(i.process) == "process";
}, function (t, e, n) {
  var r = n(312);
  var i = typeof self == "object" && self && self.Object === Object && self;
  var o = r || i || Function("return this")();
  t.exports = o;
}, function (t, e, n) {
  const r = n(391);
  const {
    MAX_LENGTH: i,
    MAX_SAFE_INTEGER: o
  } = n(390);
  const {
    safeRe: a,
    t: s
  } = n(381);
  const c = n(423);
  const {
    compareIdentifiers: u
  } = n(461);
  class l {
    constructor(t, e) {
      e = c(e);
      if (t instanceof l) {
        if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease) {
          return t;
        }
        t = t.version;
      } else if (typeof t != "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
      }
      if (t.length > i) {
        throw new TypeError(`version is longer than ${i} characters`);
      }
      r("SemVer", t, e);
      this.options = e;
      this.loose = !!e.loose;
      this.includePrerelease = !!e.includePrerelease;
      const n = t.trim().match(e.loose ? a[s.LOOSE] : a[s.FULL]);
      if (!n) {
        throw new TypeError("Invalid Version: " + t);
      }
      this.raw = t;
      this.major = +n[1];
      this.minor = +n[2];
      this.patch = +n[3];
      if (this.major > o || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > o || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > o || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (n[4]) {
        this.prerelease = n[4].split(".").map(t => {
          if (/^[0-9]+$/.test(t)) {
            const e = +t;
            if (e >= 0 && e < o) {
              return e;
            }
          }
          return t;
        });
      } else {
        this.prerelease = [];
      }
      this.build = n[5] ? n[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += "-" + this.prerelease.join(".");
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(t) {
      r("SemVer.compare", this.version, this.options, t);
      if (!(t instanceof l)) {
        if (typeof t == "string" && t === this.version) {
          return 0;
        }
        t = new l(t, this.options);
      }
      if (t.version === this.version) {
        return 0;
      } else {
        return this.compareMain(t) || this.comparePre(t);
      }
    }
    compareMain(t) {
      if (!(t instanceof l)) {
        t = new l(t, this.options);
      }
      return u(this.major, t.major) || u(this.minor, t.minor) || u(this.patch, t.patch);
    }
    comparePre(t) {
      if (!(t instanceof l)) {
        t = new l(t, this.options);
      }
      if (this.prerelease.length && !t.prerelease.length) {
        return -1;
      }
      if (!this.prerelease.length && t.prerelease.length) {
        return 1;
      }
      if (!this.prerelease.length && !t.prerelease.length) {
        return 0;
      }
      let e = 0;
      do {
        const n = this.prerelease[e];
        const i = t.prerelease[e];
        r("prerelease compare", e, n, i);
        if (n === undefined && i === undefined) {
          return 0;
        }
        if (i === undefined) {
          return 1;
        }
        if (n === undefined) {
          return -1;
        }
        if (n !== i) {
          return u(n, i);
        }
      } while (++e);
    }
    compareBuild(t) {
      if (!(t instanceof l)) {
        t = new l(t, this.options);
      }
      let e = 0;
      do {
        const n = this.build[e];
        const i = t.build[e];
        r("prerelease compare", e, n, i);
        if (n === undefined && i === undefined) {
          return 0;
        }
        if (i === undefined) {
          return 1;
        }
        if (n === undefined) {
          return -1;
        }
        if (n !== i) {
          return u(n, i);
        }
      } while (++e);
    }
    inc(t, e, n) {
      switch (t) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", e, n);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", e, n);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", e, n);
          this.inc("pre", e, n);
          break;
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", e, n);
          }
          this.inc("pre", e, n);
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        case "pre":
          {
            const t = Number(n) ? 1 : 0;
            if (!e && n === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [t];
            } else {
              let r = this.prerelease.length;
              while (--r >= 0) {
                if (typeof this.prerelease[r] == "number") {
                  this.prerelease[r]++;
                  r = -2;
                }
              }
              if (r === -1) {
                if (e === this.prerelease.join(".") && n === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(t);
              }
            }
            if (e) {
              let r = [e, t];
              if (n === false) {
                r = [e];
              }
              if (u(this.prerelease[0], e) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = r;
                }
              } else {
                this.prerelease = r;
              }
            }
            break;
          }
        default:
          throw new Error("invalid increment argument: " + t);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += "+" + this.build.join(".");
      }
      return this;
    }
  }
  t.exports = l;
}, function (t, e, n) {
  "use strict";

  (function (t) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    var r = n(346);
    var i = n(347);
    var o = n(240);
    function a() {
      if (c.TYPED_ARRAY_SUPPORT) {
        return 2147483647;
      } else {
        return 1073741823;
      }
    }
    function s(t, e) {
      if (a() < e) {
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
        return f(this, t);
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
          var i = (t = s(t, r)).write(e, n);
          if (i !== r) {
            t = t.slice(0, i);
          }
          return t;
        }(t, e, n);
      } else {
        return function (t, e) {
          if (c.isBuffer(e)) {
            var n = p(e.length) | 0;
            if ((t = s(t, n)).length !== 0) {
              e.copy(t, 0, 0, n);
            }
            return t;
          }
          if (e) {
            if (typeof ArrayBuffer != "undefined" && e.buffer instanceof ArrayBuffer || "length" in e) {
              if (typeof e.length != "number" || (r = e.length) != r) {
                return s(t, 0);
              } else {
                return h(t, e);
              }
            }
            if (e.type === "Buffer" && o(e.data)) {
              return h(t, e.data);
            }
          }
          var r;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(t, e);
      }
    }
    function l(t) {
      if (typeof t != "number") {
        throw new TypeError("\"size\" argument must be a number");
      }
      if (t < 0) {
        throw new RangeError("\"size\" argument must not be negative");
      }
    }
    function f(t, e) {
      l(e);
      t = s(t, e < 0 ? 0 : p(e) | 0);
      if (!c.TYPED_ARRAY_SUPPORT) {
        for (var n = 0; n < e; ++n) {
          t[n] = 0;
        }
      }
      return t;
    }
    function h(t, e) {
      var n = e.length < 0 ? 0 : p(e.length) | 0;
      t = s(t, n);
      for (var r = 0; r < n; r += 1) {
        t[r] = e[r] & 255;
      }
      return t;
    }
    function p(t) {
      if (t >= a()) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
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
            return B(t).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return n * 2;
          case "hex":
            return n >>> 1;
          case "base64":
            return $(t).length;
          default:
            if (r) {
              return B(t).length;
            }
            e = ("" + e).toLowerCase();
            r = true;
        }
      }
    }
    function m(t, e, n) {
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
            return O(this, e, n);
          case "ascii":
            return S(this, e, n);
          case "latin1":
          case "binary":
            return A(this, e, n);
          case "base64":
            return I(this, e, n);
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
    function g(t, e, n) {
      var r = t[e];
      t[e] = t[n];
      t[n] = r;
    }
    function y(t, e, n, r, i) {
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
        n = i ? 0 : t.length - 1;
      }
      if (n < 0) {
        n = t.length + n;
      }
      if (n >= t.length) {
        if (i) {
          return -1;
        }
        n = t.length - 1;
      } else if (n < 0) {
        if (!i) {
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
          return b(t, e, n, r, i);
        }
      }
      if (typeof e == "number") {
        e &= 255;
        if (c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
          if (i) {
            return Uint8Array.prototype.indexOf.call(t, e, n);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(t, e, n);
          }
        } else {
          return b(t, [e], n, r, i);
        }
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function b(t, e, n, r, i) {
      var o;
      var a = 1;
      var s = t.length;
      var c = e.length;
      if (r !== undefined && ((r = String(r).toLowerCase()) === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
        if (t.length < 2 || e.length < 2) {
          return -1;
        }
        a = 2;
        s /= 2;
        c /= 2;
        n /= 2;
      }
      function u(t, e) {
        if (a === 1) {
          return t[e];
        } else {
          return t.readUInt16BE(e * a);
        }
      }
      if (i) {
        var l = -1;
        for (o = n; o < s; o++) {
          if (u(t, o) === u(e, l === -1 ? 0 : o - l)) {
            if (l === -1) {
              l = o;
            }
            if (o - l + 1 === c) {
              return l * a;
            }
          } else {
            if (l !== -1) {
              o -= o - l;
            }
            l = -1;
          }
        }
      } else {
        if (n + c > s) {
          n = s - c;
        }
        o = n;
        for (; o >= 0; o--) {
          var f = true;
          for (var h = 0; h < c; h++) {
            if (u(t, o + h) !== u(e, h)) {
              f = false;
              break;
            }
          }
          if (f) {
            return o;
          }
        }
      }
      return -1;
    }
    function w(t, e, n, r) {
      n = Number(n) || 0;
      var i = t.length - n;
      if (r) {
        if ((r = Number(r)) > i) {
          r = i;
        }
      } else {
        r = i;
      }
      var o = e.length;
      if (o % 2 != 0) {
        throw new TypeError("Invalid hex string");
      }
      if (r > o / 2) {
        r = o / 2;
      }
      for (var a = 0; a < r; ++a) {
        var s = parseInt(e.substr(a * 2, 2), 16);
        if (isNaN(s)) {
          return a;
        }
        t[n + a] = s;
      }
      return a;
    }
    function v(t, e, n, r) {
      return q(B(e, t.length - n), t, n, r);
    }
    function _(t, e, n, r) {
      return q(function (t) {
        var e = [];
        for (var n = 0; n < t.length; ++n) {
          e.push(t.charCodeAt(n) & 255);
        }
        return e;
      }(e), t, n, r);
    }
    function E(t, e, n, r) {
      return _(t, e, n, r);
    }
    function x(t, e, n, r) {
      return q($(e), t, n, r);
    }
    function T(t, e, n, r) {
      return q(function (t, e) {
        var n;
        var r;
        var i;
        var o = [];
        for (var a = 0; a < t.length && !((e -= 2) < 0); ++a) {
          n = t.charCodeAt(a);
          r = n >> 8;
          i = n % 256;
          o.push(i);
          o.push(r);
        }
        return o;
      }(e, t.length - n), t, n, r);
    }
    function I(t, e, n) {
      if (e === 0 && n === t.length) {
        return r.fromByteArray(t);
      } else {
        return r.fromByteArray(t.slice(e, n));
      }
    }
    function O(t, e, n) {
      n = Math.min(t.length, n);
      var r = [];
      for (var i = e; i < n;) {
        var o;
        var a;
        var s;
        var c;
        var u = t[i];
        var l = null;
        var f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (i + f <= n) {
          switch (f) {
            case 1:
              if (u < 128) {
                l = u;
              }
              break;
            case 2:
              if (((o = t[i + 1]) & 192) == 128 && (c = (u & 31) << 6 | o & 63) > 127) {
                l = c;
              }
              break;
            case 3:
              o = t[i + 1];
              a = t[i + 2];
              if ((o & 192) == 128 && (a & 192) == 128 && (c = (u & 15) << 12 | (o & 63) << 6 | a & 63) > 2047 && (c < 55296 || c > 57343)) {
                l = c;
              }
              break;
            case 4:
              o = t[i + 1];
              a = t[i + 2];
              s = t[i + 3];
              if ((o & 192) == 128 && (a & 192) == 128 && (s & 192) == 128 && (c = (u & 15) << 18 | (o & 63) << 12 | (a & 63) << 6 | s & 63) > 65535 && c < 1114112) {
                l = c;
              }
          }
        }
        if (l === null) {
          l = 65533;
          f = 1;
        } else if (l > 65535) {
          l -= 65536;
          r.push(l >>> 10 & 1023 | 55296);
          l = l & 1023 | 56320;
        }
        r.push(l);
        i += f;
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
    e.kMaxLength = a();
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
        l(e);
        if (e <= 0) {
          return s(t, e);
        } else if (n !== undefined) {
          if (typeof r == "string") {
            return s(t, e).fill(n, r);
          } else {
            return s(t, e).fill(n);
          }
        } else {
          return s(t, e);
        }
      }(null, t, e, n);
    };
    c.allocUnsafe = function (t) {
      return f(null, t);
    };
    c.allocUnsafeSlow = function (t) {
      return f(null, t);
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
      for (var i = 0, o = Math.min(n, r); i < o; ++i) {
        if (t[i] !== e[i]) {
          n = t[i];
          r = e[i];
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
      if (!o(t)) {
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
      var i = 0;
      for (n = 0; n < t.length; ++n) {
        var a = t[n];
        if (!c.isBuffer(a)) {
          throw new TypeError("\"list\" argument must be an Array of Buffers");
        }
        a.copy(r, i);
        i += a.length;
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
        g(this, e, e + 1);
      }
      return this;
    };
    c.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var e = 0; e < t; e += 4) {
        g(this, e, e + 3);
        g(this, e + 1, e + 2);
      }
      return this;
    };
    c.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var e = 0; e < t; e += 8) {
        g(this, e, e + 7);
        g(this, e + 1, e + 6);
        g(this, e + 2, e + 5);
        g(this, e + 3, e + 4);
      }
      return this;
    };
    c.prototype.toString = function () {
      var t = this.length | 0;
      if (t === 0) {
        return "";
      } else if (arguments.length === 0) {
        return O(this, 0, t);
      } else {
        return m.apply(this, arguments);
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
    c.prototype.compare = function (t, e, n, r, i) {
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
      if (i === undefined) {
        i = this.length;
      }
      if (e < 0 || n > t.length || r < 0 || i > this.length) {
        throw new RangeError("out of range index");
      }
      if (r >= i && e >= n) {
        return 0;
      }
      if (r >= i) {
        return -1;
      }
      if (e >= n) {
        return 1;
      }
      if (this === t) {
        return 0;
      }
      var o = (i >>>= 0) - (r >>>= 0);
      var a = (n >>>= 0) - (e >>>= 0);
      for (var s = Math.min(o, a), u = this.slice(r, i), l = t.slice(e, n), f = 0; f < s; ++f) {
        if (u[f] !== l[f]) {
          o = u[f];
          a = l[f];
          break;
        }
      }
      if (o < a) {
        return -1;
      } else if (a < o) {
        return 1;
      } else {
        return 0;
      }
    };
    c.prototype.includes = function (t, e, n) {
      return this.indexOf(t, e, n) !== -1;
    };
    c.prototype.indexOf = function (t, e, n) {
      return y(this, t, e, n, true);
    };
    c.prototype.lastIndexOf = function (t, e, n) {
      return y(this, t, e, n, false);
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
      var i = this.length - e;
      if (n === undefined || n > i) {
        n = i;
      }
      if (t.length > 0 && (n < 0 || e < 0) || e > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      r ||= "utf8";
      var o = false;
      while (true) {
        switch (r) {
          case "hex":
            return w(this, t, e, n);
          case "utf8":
          case "utf-8":
            return v(this, t, e, n);
          case "ascii":
            return _(this, t, e, n);
          case "latin1":
          case "binary":
            return E(this, t, e, n);
          case "base64":
            return x(this, t, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return T(this, t, e, n);
          default:
            if (o) {
              throw new TypeError("Unknown encoding: " + r);
            }
            r = ("" + r).toLowerCase();
            o = true;
        }
      }
    };
    c.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function S(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);
      for (var i = e; i < n; ++i) {
        r += String.fromCharCode(t[i] & 127);
      }
      return r;
    }
    function A(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);
      for (var i = e; i < n; ++i) {
        r += String.fromCharCode(t[i]);
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
      var i = "";
      for (var o = e; o < n; ++o) {
        i += U(t[o]);
      }
      return i;
    }
    function j(t, e, n) {
      for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) {
        i += String.fromCharCode(r[o] + r[o + 1] * 256);
      }
      return i;
    }
    function C(t, e, n) {
      if (t % 1 != 0 || t < 0) {
        throw new RangeError("offset is not uint");
      }
      if (t + e > n) {
        throw new RangeError("Trying to access beyond buffer length");
      }
    }
    function D(t, e, n, r, i, o) {
      if (!c.isBuffer(t)) {
        throw new TypeError("\"buffer\" argument must be a Buffer instance");
      }
      if (e > i || e < o) {
        throw new RangeError("\"value\" argument is out of bounds");
      }
      if (n + r > t.length) {
        throw new RangeError("Index out of range");
      }
    }
    function k(t, e, n, r) {
      if (e < 0) {
        e = 65535 + e + 1;
      }
      for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) {
        t[n + i] = (e & 255 << (r ? i : 1 - i) * 8) >>> (r ? i : 1 - i) * 8;
      }
    }
    function R(t, e, n, r) {
      if (e < 0) {
        e = 4294967295 + e + 1;
      }
      for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) {
        t[n + i] = e >>> (r ? i : 3 - i) * 8 & 255;
      }
    }
    function L(t, e, n, r, i, o) {
      if (n + r > t.length) {
        throw new RangeError("Index out of range");
      }
      if (n < 0) {
        throw new RangeError("Index out of range");
      }
    }
    function P(t, e, n, r, o) {
      if (!o) {
        L(t, 0, n, 4);
      }
      i.write(t, e, n, r, 23, 4);
      return n + 4;
    }
    function M(t, e, n, r, o) {
      if (!o) {
        L(t, 0, n, 8);
      }
      i.write(t, e, n, r, 52, 8);
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
        var i = e - t;
        n = new c(i, undefined);
        for (var o = 0; o < i; ++o) {
          n[o] = this[o + t];
        }
      }
      return n;
    };
    c.prototype.readUIntLE = function (t, e, n) {
      t |= 0;
      e |= 0;
      if (!n) {
        C(t, e, this.length);
      }
      var r = this[t];
      for (var i = 1, o = 0; ++o < e && (i *= 256);) {
        r += this[t + o] * i;
      }
      return r;
    };
    c.prototype.readUIntBE = function (t, e, n) {
      t |= 0;
      e |= 0;
      if (!n) {
        C(t, e, this.length);
      }
      var r = this[t + --e];
      for (var i = 1; e > 0 && (i *= 256);) {
        r += this[t + --e] * i;
      }
      return r;
    };
    c.prototype.readUInt8 = function (t, e) {
      if (!e) {
        C(t, 1, this.length);
      }
      return this[t];
    };
    c.prototype.readUInt16LE = function (t, e) {
      if (!e) {
        C(t, 2, this.length);
      }
      return this[t] | this[t + 1] << 8;
    };
    c.prototype.readUInt16BE = function (t, e) {
      if (!e) {
        C(t, 2, this.length);
      }
      return this[t] << 8 | this[t + 1];
    };
    c.prototype.readUInt32LE = function (t, e) {
      if (!e) {
        C(t, 4, this.length);
      }
      return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    c.prototype.readUInt32BE = function (t, e) {
      if (!e) {
        C(t, 4, this.length);
      }
      return this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    c.prototype.readIntLE = function (t, e, n) {
      t |= 0;
      e |= 0;
      if (!n) {
        C(t, e, this.length);
      }
      var r = this[t];
      for (var i = 1, o = 0; ++o < e && (i *= 256);) {
        r += this[t + o] * i;
      }
      if (r >= (i *= 128)) {
        r -= Math.pow(2, e * 8);
      }
      return r;
    };
    c.prototype.readIntBE = function (t, e, n) {
      t |= 0;
      e |= 0;
      if (!n) {
        C(t, e, this.length);
      }
      for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) {
        o += this[t + --r] * i;
      }
      if (o >= (i *= 128)) {
        o -= Math.pow(2, e * 8);
      }
      return o;
    };
    c.prototype.readInt8 = function (t, e) {
      if (!e) {
        C(t, 1, this.length);
      }
      if (this[t] & 128) {
        return (255 - this[t] + 1) * -1;
      } else {
        return this[t];
      }
    };
    c.prototype.readInt16LE = function (t, e) {
      if (!e) {
        C(t, 2, this.length);
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
        C(t, 2, this.length);
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
        C(t, 4, this.length);
      }
      return this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    c.prototype.readInt32BE = function (t, e) {
      if (!e) {
        C(t, 4, this.length);
      }
      return this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    c.prototype.readFloatLE = function (t, e) {
      if (!e) {
        C(t, 4, this.length);
      }
      return i.read(this, t, true, 23, 4);
    };
    c.prototype.readFloatBE = function (t, e) {
      if (!e) {
        C(t, 4, this.length);
      }
      return i.read(this, t, false, 23, 4);
    };
    c.prototype.readDoubleLE = function (t, e) {
      if (!e) {
        C(t, 8, this.length);
      }
      return i.read(this, t, true, 52, 8);
    };
    c.prototype.readDoubleBE = function (t, e) {
      if (!e) {
        C(t, 8, this.length);
      }
      return i.read(this, t, false, 52, 8);
    };
    c.prototype.writeUIntLE = function (t, e, n, r) {
      if (!(t = +t, e |= 0, n |= 0, r)) {
        D(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
      }
      var i = 1;
      var o = 0;
      for (this[e] = t & 255; ++o < n && (i *= 256);) {
        this[e + o] = t / i & 255;
      }
      return e + n;
    };
    c.prototype.writeUIntBE = function (t, e, n, r) {
      if (!(t = +t, e |= 0, n |= 0, r)) {
        D(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
      }
      var i = n - 1;
      var o = 1;
      for (this[e + i] = t & 255; --i >= 0 && (o *= 256);) {
        this[e + i] = t / o & 255;
      }
      return e + n;
    };
    c.prototype.writeUInt8 = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        D(this, t, e, 1, 255, 0);
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
        D(this, t, e, 2, 65535, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
      } else {
        k(this, t, e, true);
      }
      return e + 2;
    };
    c.prototype.writeUInt16BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        D(this, t, e, 2, 65535, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 8;
        this[e + 1] = t & 255;
      } else {
        k(this, t, e, false);
      }
      return e + 2;
    };
    c.prototype.writeUInt32LE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        D(this, t, e, 4, 4294967295, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e + 3] = t >>> 24;
        this[e + 2] = t >>> 16;
        this[e + 1] = t >>> 8;
        this[e] = t & 255;
      } else {
        R(this, t, e, true);
      }
      return e + 4;
    };
    c.prototype.writeUInt32BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        D(this, t, e, 4, 4294967295, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 24;
        this[e + 1] = t >>> 16;
        this[e + 2] = t >>> 8;
        this[e + 3] = t & 255;
      } else {
        R(this, t, e, false);
      }
      return e + 4;
    };
    c.prototype.writeIntLE = function (t, e, n, r) {
      t = +t;
      e |= 0;
      if (!r) {
        var i = Math.pow(2, n * 8 - 1);
        D(this, t, e, n, i - 1, -i);
      }
      var o = 0;
      var a = 1;
      var s = 0;
      for (this[e] = t & 255; ++o < n && (a *= 256);) {
        if (t < 0 && s === 0 && this[e + o - 1] !== 0) {
          s = 1;
        }
        this[e + o] = (t / a >> 0) - s & 255;
      }
      return e + n;
    };
    c.prototype.writeIntBE = function (t, e, n, r) {
      t = +t;
      e |= 0;
      if (!r) {
        var i = Math.pow(2, n * 8 - 1);
        D(this, t, e, n, i - 1, -i);
      }
      var o = n - 1;
      var a = 1;
      var s = 0;
      for (this[e + o] = t & 255; --o >= 0 && (a *= 256);) {
        if (t < 0 && s === 0 && this[e + o + 1] !== 0) {
          s = 1;
        }
        this[e + o] = (t / a >> 0) - s & 255;
      }
      return e + n;
    };
    c.prototype.writeInt8 = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        D(this, t, e, 1, 127, -128);
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
        D(this, t, e, 2, 32767, -32768);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
      } else {
        k(this, t, e, true);
      }
      return e + 2;
    };
    c.prototype.writeInt16BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        D(this, t, e, 2, 32767, -32768);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 8;
        this[e + 1] = t & 255;
      } else {
        k(this, t, e, false);
      }
      return e + 2;
    };
    c.prototype.writeInt32LE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        D(this, t, e, 4, 2147483647, -2147483648);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
        this[e + 2] = t >>> 16;
        this[e + 3] = t >>> 24;
      } else {
        R(this, t, e, true);
      }
      return e + 4;
    };
    c.prototype.writeInt32BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        D(this, t, e, 4, 2147483647, -2147483648);
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
        R(this, t, e, false);
      }
      return e + 4;
    };
    c.prototype.writeFloatLE = function (t, e, n) {
      return P(this, t, e, true, n);
    };
    c.prototype.writeFloatBE = function (t, e, n) {
      return P(this, t, e, false, n);
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
      var i;
      var o = r - n;
      if (this === t && n < e && e < r) {
        for (i = o - 1; i >= 0; --i) {
          t[i + e] = this[i + n];
        }
      } else if (o < 1000 || !c.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < o; ++i) {
          t[i + e] = this[i + n];
        }
      } else {
        Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
      }
      return o;
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
          var i = t.charCodeAt(0);
          if (i < 256) {
            t = i;
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
      var o;
      e >>>= 0;
      n = n === undefined ? this.length : n >>> 0;
      t ||= 0;
      if (typeof t == "number") {
        for (o = e; o < n; ++o) {
          this[o] = t;
        }
      } else {
        var a = c.isBuffer(t) ? t : B(new c(t, r).toString());
        var s = a.length;
        for (o = 0; o < n - e; ++o) {
          this[o + e] = a[o % s];
        }
      }
      return this;
    };
    var F = /[^+\/0-9A-Za-z-_]/g;
    function U(t) {
      if (t < 16) {
        return "0" + t.toString(16);
      } else {
        return t.toString(16);
      }
    }
    function B(t, e) {
      var n;
      e = e || Infinity;
      for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
        if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              if ((e -= 3) > -1) {
                o.push(239, 191, 189);
              }
              continue;
            }
            if (a + 1 === r) {
              if ((e -= 3) > -1) {
                o.push(239, 191, 189);
              }
              continue;
            }
            i = n;
            continue;
          }
          if (n < 56320) {
            if ((e -= 3) > -1) {
              o.push(239, 191, 189);
            }
            i = n;
            continue;
          }
          n = 65536 + (i - 55296 << 10 | n - 56320);
        } else if (i && (e -= 3) > -1) {
          o.push(239, 191, 189);
        }
        i = null;
        if (n < 128) {
          if ((e -= 1) < 0) {
            break;
          }
          o.push(n);
        } else if (n < 2048) {
          if ((e -= 2) < 0) {
            break;
          }
          o.push(n >> 6 | 192, n & 63 | 128);
        } else if (n < 65536) {
          if ((e -= 3) < 0) {
            break;
          }
          o.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
        } else {
          if (!(n < 1114112)) {
            throw new Error("Invalid code point");
          }
          if ((e -= 4) < 0) {
            break;
          }
          o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
        }
      }
      return o;
    }
    function $(t) {
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
    function q(t, e, n, r) {
      for (var i = 0; i < r && !(i + n >= e.length) && !(i >= t.length); ++i) {
        e[i + n] = t[i];
      }
      return i;
    }
  }).call(this, n(25));
}, function (t, e, n) {
  (function () {
    var e;
    var r = {}.hasOwnProperty;
    e = n(35);
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
        function i() {
          this.constructor = t;
        }
        i.prototype = e.prototype;
        t.prototype = new i();
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

  var r;
  var i = typeof Reflect == "object" ? Reflect : null;
  var o = i && typeof i.apply == "function" ? i.apply : function (t, e, n) {
    return Function.prototype.apply.call(t, e, n);
  };
  r = i && typeof i.ownKeys == "function" ? i.ownKeys : Object.getOwnPropertySymbols ? function (t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
  } : function (t) {
    return Object.getOwnPropertyNames(t);
  };
  var a = Number.isNaN || function (t) {
    return t != t;
  };
  function s() {
    s.init.call(this);
  }
  t.exports = s;
  t.exports.once = function (t, e) {
    return new Promise(function (n, r) {
      function i(n) {
        t.removeListener(e, o);
        r(n);
      }
      function o() {
        if (typeof t.removeListener == "function") {
          t.removeListener("error", i);
        }
        n([].slice.call(arguments));
      }
      y(t, e, o, {
        once: true
      });
      if (e !== "error") {
        (function (t, e, n) {
          if (typeof t.on == "function") {
            y(t, "error", e, n);
          }
        })(t, i, {
          once: true
        });
      }
    });
  };
  s.EventEmitter = s;
  s.prototype._events = undefined;
  s.prototype._eventsCount = 0;
  s.prototype._maxListeners = undefined;
  var c = 10;
  function u(t) {
    if (typeof t != "function") {
      throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof t);
    }
  }
  function l(t) {
    if (t._maxListeners === undefined) {
      return s.defaultMaxListeners;
    } else {
      return t._maxListeners;
    }
  }
  function f(t, e, n, r) {
    var i;
    var o;
    var a;
    var s;
    u(n);
    if ((o = t._events) === undefined) {
      o = t._events = Object.create(null);
      t._eventsCount = 0;
    } else {
      if (o.newListener !== undefined) {
        t.emit("newListener", e, n.listener ? n.listener : n);
        o = t._events;
      }
      a = o[e];
    }
    if (a === undefined) {
      a = o[e] = n;
      ++t._eventsCount;
    } else {
      if (typeof a == "function") {
        a = o[e] = r ? [n, a] : [a, n];
      } else if (r) {
        a.unshift(n);
      } else {
        a.push(n);
      }
      if ((i = l(t)) > 0 && a.length > i && !a.warned) {
        a.warned = true;
        var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning";
        c.emitter = t;
        c.type = e;
        c.count = a.length;
        s = c;
        if (console && console.warn) {
          console.warn(s);
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
    var i = h.bind(r);
    i.listener = n;
    r.wrapFn = i;
    return i;
  }
  function d(t, e, n) {
    var r = t._events;
    if (r === undefined) {
      return [];
    }
    var i = r[e];
    if (i === undefined) {
      return [];
    } else if (typeof i == "function") {
      if (n) {
        return [i.listener || i];
      } else {
        return [i];
      }
    } else if (n) {
      return function (t) {
        for (var e = new Array(t.length), n = 0; n < e.length; ++n) {
          e[n] = t[n].listener || t[n];
        }
        return e;
      }(i);
    } else {
      return g(i, i.length);
    }
  }
  function m(t) {
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
  function g(t, e) {
    var n = new Array(e);
    for (var r = 0; r < e; ++r) {
      n[r] = t[r];
    }
    return n;
  }
  function y(t, e, n, r) {
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
      t.addEventListener(e, function i(o) {
        if (r.once) {
          t.removeEventListener(e, i);
        }
        n(o);
      });
    }
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: true,
    get: function () {
      return c;
    },
    set: function (t) {
      if (typeof t != "number" || t < 0 || a(t)) {
        throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + t + ".");
      }
      c = t;
    }
  });
  s.init = function () {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
  };
  s.prototype.setMaxListeners = function (t) {
    if (typeof t != "number" || t < 0 || a(t)) {
      throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + t + ".");
    }
    this._maxListeners = t;
    return this;
  };
  s.prototype.getMaxListeners = function () {
    return l(this);
  };
  s.prototype.emit = function (t) {
    var e = [];
    for (var n = 1; n < arguments.length; n++) {
      e.push(arguments[n]);
    }
    var r = t === "error";
    var i = this._events;
    if (i !== undefined) {
      r = r && i.error === undefined;
    } else if (!r) {
      return false;
    }
    if (r) {
      var a;
      if (e.length > 0) {
        a = e[0];
      }
      if (a instanceof Error) {
        throw a;
      }
      var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
      s.context = a;
      throw s;
    }
    var c = i[t];
    if (c === undefined) {
      return false;
    }
    if (typeof c == "function") {
      o(c, this, e);
    } else {
      var u = c.length;
      var l = g(c, u);
      for (n = 0; n < u; ++n) {
        o(l[n], this, e);
      }
    }
    return true;
  };
  s.prototype.addListener = function (t, e) {
    return f(this, t, e, false);
  };
  s.prototype.on = s.prototype.addListener;
  s.prototype.prependListener = function (t, e) {
    return f(this, t, e, true);
  };
  s.prototype.once = function (t, e) {
    u(e);
    this.on(t, p(this, t, e));
    return this;
  };
  s.prototype.prependOnceListener = function (t, e) {
    u(e);
    this.prependListener(t, p(this, t, e));
    return this;
  };
  s.prototype.removeListener = function (t, e) {
    var n;
    var r;
    var i;
    var o;
    var a;
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
      i = -1;
      o = n.length - 1;
      for (; o >= 0; o--) {
        if (n[o] === e || n[o].listener === e) {
          a = n[o].listener;
          i = o;
          break;
        }
      }
      if (i < 0) {
        return this;
      }
      if (i === 0) {
        n.shift();
      } else {
        (function (t, e) {
          for (; e + 1 < t.length; e++) {
            t[e] = t[e + 1];
          }
          t.pop();
        })(n, i);
      }
      if (n.length === 1) {
        r[t] = n[0];
      }
      if (r.removeListener !== undefined) {
        this.emit("removeListener", t, a || e);
      }
    }
    return this;
  };
  s.prototype.off = s.prototype.removeListener;
  s.prototype.removeAllListeners = function (t) {
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
      var i;
      var o = Object.keys(n);
      for (r = 0; r < o.length; ++r) {
        if ((i = o[r]) !== "removeListener") {
          this.removeAllListeners(i);
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
  s.prototype.listeners = function (t) {
    return d(this, t, true);
  };
  s.prototype.rawListeners = function (t) {
    return d(this, t, false);
  };
  s.listenerCount = function (t, e) {
    if (typeof t.listenerCount == "function") {
      return t.listenerCount(e);
    } else {
      return m.call(t, e);
    }
  };
  s.prototype.listenerCount = m;
  s.prototype.eventNames = function () {
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
        nextTick: function (t, n, r, i) {
          if (typeof t != "function") {
            throw new TypeError("\"callback\" argument must be a function");
          }
          var o;
          var a;
          var s = arguments.length;
          switch (s) {
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
                t.call(null, n, r, i);
              });
            default:
              o = new Array(s - 1);
              a = 0;
              while (a < o.length) {
                o[a++] = arguments[a];
              }
              return e.nextTick(function () {
                t.apply(null, o);
              });
          }
        }
      };
    } else {
      t.exports = e;
    }
  }).call(this, n(94));
}, function (t, e, n) {
  var r = n(144);
  var i = Math.min;
  t.exports = function (t) {
    if (t > 0) {
      return i(r(t), 9007199254740991);
    } else {
      return 0;
    }
  };
}, function (t, e, n) {
  var r = n(32);
  var i = n(52);
  var o = n(17)("species");
  t.exports = function (t, e) {
    var n;
    var a = r(t).constructor;
    if (a === undefined || (n = r(a)[o]) == null) {
      return e;
    } else {
      return i(n);
    }
  };
},,, function (t, e, n) {
  "use strict";

  n.d(e, "j", function () {
    return i;
  });
  n.d(e, "c", function () {
    return o;
  });
  n.d(e, "a", function () {
    return a;
  });
  n.d(e, "d", function () {
    return s;
  });
  n.d(e, "i", function () {
    return c;
  });
  n.d(e, "h", function () {
    return u;
  });
  n.d(e, "f", function () {
    return l;
  });
  n.d(e, "e", function () {
    return f;
  });
  n.d(e, "b", function () {
    return h;
  });
  n.d(e, "g", function () {
    return p;
  });
  var r = n(0);
  const i = 0.2;
  function o(t) {
    return `https://chrome.google.com/webstore/detail/infinity-new-tab-pro/${t}/reviews?utm_source=infinity-rate`;
  }
  const a = "https://addons.mozilla.org/" + r.C.lang + "/firefox/addon/infinity-new-tab-pro-firefox/";
  function s(t) {
    return "https://microsoftedge.microsoft.com/addons/detail/infinity-new-tab-pro/" + t;
  }
  const c = "privacy_data_uninstall_title_pro";
  const u = "privacy_data_uninstall_confirm_pro";
  const l = true;
  const f = () => {};
  const h = () => {
    if (r.C.isZh) {
      chrome.runtime.setUninstallURL("https://hello.wetab.link/");
    } else {
      chrome.runtime.setUninstallURL("https://uninstall.infinitynewtab.com/?from=" + r.c);
    }
  };
  const p = "https://infinityicon.infinitynewtab.com/assets/logo-pro.png";
}, function (t, e, n) {
  "use strict";

  n.d(e, "c", function () {
    return c;
  });
  n.d(e, "d", function () {
    return u;
  });
  n.d(e, "b", function () {
    return l;
  });
  n.d(e, "a", function () {
    return f;
  });
  var r = n(5);
  var i = n.n(r);
  n(7);
  var o = n(0);
  var a = n(23);
  var s = n.n(a);
  function c(t, e) {
    if (o.l) {
      t = window.chrome.runtime.getURL(t);
      if (e == null ? undefined : e.isNewTab) {
        return window.chrome.tabs.create({
          url: t
        });
      }
      window.chrome.tabs.getCurrent(e => window.chrome.tabs.update(e.id, {
        url: t
      }, () => {
        if (chrome.runtime.lastError && t) {
          if (t.startsWith("http")) {
            window.open(t, "_self");
          } else {
            window.chrome.tabs.create({
              url: t
            });
          }
        }
      }));
    } else {
      if (e == null ? undefined : e.isNewTab) {
        return window.open(t);
      }
      window.open(t, "_self");
    }
  }
  async function u() {
    if (o.l) {
      const {
        slave: t
      } = await n.e(9).then(n.bind(null, 161));
      window.chrome.tabs.getCurrent(e => {
        t.sendMessage("tabs-reload");
        setTimeout(() => {
          window.chrome.tabs.remove(e.id);
        }, 16);
      });
    } else {
      setTimeout(() => {
        c("/");
      }, 16);
    }
  }
  async function l(t, e) {
    try {
      if (e) {
        return await s.a.getItem(t);
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
  async function f() {
    const t = await new i.a(t => chrome.bookmarks.getTree(t));
    if (o.n) {
      const e = t[0].children.findIndex(t => t.id === "unfiled_____");
      const n = t[0].children.findIndex(t => t.id === "toolbar_____");
      if (e !== -1 && n !== -1) {
        if (e > n) {
          const [r] = t[0].children.splice(e, 1);
          const [i] = t[0].children.splice(n, 1);
          t[0].children.unshift(i, r);
        } else {
          const [r] = t[0].children.splice(n, 1);
          const [i] = t[0].children.splice(e, 1);
          t[0].children.unshift(r, i);
        }
      }
    }
    return t;
  }
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return u;
  });
  n.d(e, "f", function () {
    return l;
  });
  n.d(e, "g", function () {
    return f;
  });
  n.d(e, "c", function () {
    return h;
  });
  n.d(e, "e", function () {
    return p;
  });
  n.d(e, "b", function () {
    return d;
  });
  n.d(e, "d", function () {
    return m;
  });
  var r = n(5);
  var i = n.n(r);
  n(7);
  var o = n(23);
  var a = n.n(o);
  var s = n(36);
  var c = n(165);
  async function u(t) {
    let e;
    e = await fetch(t).then(t => t.blob());
    return e;
  }
  const l = (t, e = 0) => new i.a(n => {
    let r = document.createElement("img");
    r.onload = () => n(true);
    r.onerror = () => n(false);
    r.src = t;
    if (e > 0) {
      setTimeout(() => {
        r.src = "";
        r = null;
        n(false);
      }, e);
    }
  });
  const f = t => a.a.setItem(s.e, t);
  function h() {
    return a.a.getItem(s.e);
  }
  function p(t) {
    return !["image/gif"].includes(t.type) && t.size > window.__INFINITY__.maxLocalFileSize;
  }
  function d(t, e = "cloud") {
    return t.map(t => ({
      type: e,
      id: t._id,
      url: t.url,
      content: t.thumbnail,
      like: t.like,
      source: t.source,
      rawUrl: t.rawUrl
    }));
  }
  function m(t) {
    return t.map(t => {
      const {
        content: e,
        url: n,
        rawUrl: r
      } = Object(c.convertURL)(t.url);
      t.type = "user-library";
      t.content = e;
      t.url = n;
      t.rawUrl = r;
      return t;
    });
  }
}, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "imgConfig", function () {
    return c;
  });
  n.d(e, "getRandomWallpaper", function () {
    return u;
  });
  n.d(e, "getBingWallpaper", function () {
    return l;
  });
  n.d(e, "getWallpapers", function () {
    return f;
  });
  n.d(e, "getWallpaperListByType", function () {
    return h;
  });
  n.d(e, "likeWallpaper", function () {
    return p;
  });
  n.d(e, "collectionWallpaper", function () {
    return d;
  });
  n.d(e, "addCustomColor", function () {
    return m;
  });
  n.d(e, "setCustomColorItems", function () {
    return g;
  });
  n.d(e, "getCustomColor", function () {
    return y;
  });
  n.d(e, "removeCustomColor", function () {
    return b;
  });
  n.d(e, "uploadWallpaper", function () {
    return w;
  });
  n.d(e, "getWallpapersById", function () {
    return v;
  });
  n.d(e, "createWallpaperLibrary", function () {
    return _;
  });
  n.d(e, "getUserWallpaperLibrary", function () {
    return E;
  });
  n.d(e, "hasWallpaperLibrary", function () {
    return x;
  });
  n.d(e, "getLikedWallpaper", function () {
    return T;
  });
  n.d(e, "getCollectionWallpaper", function () {
    return I;
  });
  n.d(e, "getWallpaperLibraryItems", function () {
    return O;
  });
  n.d(e, "getUserWallpaperLibraryItemsById", function () {
    return S;
  });
  n.d(e, "removeWallpaperLibraryItem", function () {
    return A;
  });
  n.d(e, "removeWallpaperLibrary", function () {
    return N;
  });
  n.d(e, "addImagesToLibrary", function () {
    return j;
  });
  n.d(e, "renameWallpaperLibrary", function () {
    return C;
  });
  n.d(e, "getNextWallpaper", function () {
    return D;
  });
  n.d(e, "convertURL", function () {
    return k;
  });
  n(7);
  var r = n(0);
  var i = n(3);
  var o = n(36);
  const a = Math.floor(screen.width * window.devicePixelRatio);
  const s = Math.floor(window.devicePixelRatio * 203);
  const c = {
    smallWidth: s > 3840 ? 3840 : s,
    normalWidth: a > 3840 ? 3840 : a,
    format: o.f ? "" : o.g
  };
  const u = async () => {
    try {
      const t = await i.a.get(r.w + "/random-wallpaper", {
        _: new Date().getTime()
      });
      if (!t.success) {
        throw t;
      }
      const {
        src: e,
        _id: n,
        source: o
      } = t.data[0];
      const {
        url: a,
        rawUrl: s
      } = k(e.rawSrc);
      return {
        data: {
          url: a,
          rawUrl: s,
          id: n,
          source: o
        }
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const l = async () => {
    try {
      const t = await i.a.get(r.y + "/get_bing_wallpaper", null, {
        _single: "getBingWallpaper"
      });
      if (t.error) {
        throw t.error;
      }
      const {
        data: e
      } = t;
      const {
        content: n,
        url: o,
        rawUrl: a
      } = k(e.src.rawSrc);
      e.thumbnail = n;
      e.url = o;
      e.rawUrl = a;
      return t;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const f = async t => {
    const {
      source: e
    } = t;
    t.source = e === "all" ? "" : e;
    try {
      const e = await i.a.get(r.w + "/get-wallpaper", t, {
        _single: "getWallpapers"
      });
      const {
        data: n
      } = e;
      n.forEach(t => {
        const {
          content: e,
          url: n,
          rawUrl: r
        } = k(t.src.rawSrc);
        t.thumbnail = e;
        t.url = n;
        t.rawUrl = r;
      });
      return {
        result: e
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  async function h(t) {
    if (t.order === "1") {
      t.order = "like";
    } else if (t.order === "2") {
      t.order = "_id";
    }
    try {
      const e = await i.a.get(r.y + "/get_wallpaper_list", Object.assign({
        client: "pc"
      }, t), {
        _single: "getWallpaperListByType"
      });
      if (e.code !== 0) {
        throw new Error(e.message);
      }
      const {
        data: n
      } = e;
      n.list.forEach(t => {
        const {
          content: e,
          url: n,
          rawUrl: r
        } = k(t.src.rawSrc);
        t.thumbnail = e;
        t.url = n;
        t.rawUrl = r;
      });
      n.data = n.list;
      n.success = 1;
      return {
        result: n
      };
    } catch (t) {
      return {
        error: t
      };
    }
  }
  const p = async (t, e) => {
    try {
      const n = await i.a.post(r.y + "/like_wallpaper", {
        id: t,
        state: e
      }, {
        _auth: true
      });
      if (n.code !== 0) {
        throw n;
      }
      return n;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const d = async (t, e) => {
    try {
      const n = await i.a.post(r.y + "/collection_wallpaper", {
        id: t,
        state: e
      }, {
        _auth: true
      });
      if (n.code !== 0) {
        throw n;
      }
      return n;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const m = async t => {
    try {
      const e = await i.a.post(r.y + "/add_custom_color", Object.assign(Object.assign({}, t), {
        newVer: true
      }), {
        _auth: true
      });
      if (e.code !== 0) {
        throw e;
      }
      return e;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const g = async t => {
    try {
      const e = await i.a.post(r.y + "/set_custom_color_items", t, {
        _auth: true
      });
      if (e.code !== 0) {
        throw e;
      }
      return e;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const y = async () => {
    try {
      const t = await i.a.get(r.y + "/get_custom_color", null, {
        _auth: true
      });
      if (t.code !== 0) {
        throw t;
      }
      return t;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const b = async t => {
    try {
      const e = await i.a.post(r.y + "/remove_custom_color", {
        id: t,
        newVer: true
      }, {
        _auth: true
      });
      if (e.code !== 0) {
        throw e;
      }
      return e;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const w = async t => {
    try {
      const e = await i.a.post(r.y + "/upload_wallpaper", t, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (e.code !== 0) {
        throw e;
      }
      return {
        data: e.data
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const v = async t => {
    try {
      const e = await i.a.get(r.y + "/get_wallpapers_by_id", {
        id: t
      });
      if (e.code !== 0) {
        throw e;
      }
      const {
        data: n
      } = e;
      n.forEach(t => {
        const {
          content: e,
          url: n,
          rawUrl: r
        } = k(t.src.rawSrc);
        t.thumbnail = e;
        t.url = n;
        t.rawUrl = r;
      });
      return {
        data: n
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const _ = async ({
    libraryName: t,
    libraryId: e,
    wallpapers: n
  }) => {
    try {
      return await i.a.post(r.y + "/create_wallpaper_library", {
        libraryName: t,
        libraryId: e,
        wallpapers: n
      }, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const E = async () => await i.a.get(r.y + "/get_user_wallpaper_library", null, {
    _auth: true
  });
  const x = async t => {
    try {
      return await i.a.get(r.y + "/has_wallpaper_library", {
        libraryId: t
      }, {
        _auth: true,
        _proxy: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const T = async () => {
    try {
      return await i.a.get(r.y + "/get_liked_wallpaper", null, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const I = async () => {
    try {
      return await i.a.get(r.y + "/get_collection_wallpaper", null, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const O = async t => {
    const e = await i.a.get(r.y + "/get_user_wallpaper_library_items", {
      libraryId: t
    });
    e.data.map(t => {
      const {
        content: e,
        url: n,
        rawUrl: r
      } = k(t.url);
      t.content = e;
      t.url = n;
      t.rawUrl = r;
      return t;
    });
    const {
      data: n
    } = e;
    e.data = {
      items: n,
      count: n.length
    };
    return e.data;
  };
  const S = async t => {
    try {
      const e = await i.a.get(r.y + "/get_user_wallpaper_library_items_by_id", {
        libraryItemsId: t
      });
      const {
        data: n
      } = e;
      e.data = {
        items: n,
        count: n.length
      };
      return e.data;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const A = async (t, e, n) => {
    try {
      return await i.a.post(r.y + "/remove_wallpaper_library_item", {
        libraryId: t,
        libraryItemId: e,
        ext: n
      }, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const N = async t => {
    try {
      return await i.a.post(r.y + "/remove_wallpaper_library", {
        libraryId: t
      }, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const j = async (t, e) => {
    try {
      return await i.a.post(r.y + "/add_images_to_library", {
        libraryId: t,
        wallpapers: e
      }, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const C = async (t, e) => {
    try {
      return await i.a.post(r.y + "/rename_wallpaper_library", {
        libraryId: t,
        libraryName: e
      }, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const D = async (t, e, n = "library") => {
    const o = {
      source: t,
      type: n
    };
    if (e) {
      o._id = e;
    }
    const a = await i.a.get(r.y + "/get_next_wallpaper", o, {
      _single: "getNextWallpaper"
    });
    if (a.code !== 0) {
      throw new Error();
    }
    const {
      data: s
    } = a;
    const {
      content: c,
      url: u,
      rawUrl: l
    } = k(s.rawUrl);
    s.thumbnail = c;
    s.url = u;
    s.rawUrl = l;
    return a;
  };
  const k = t => ({
    rawUrl: t,
    url: `${t}?imageView2/2/w/${c.normalWidth}/${c.format}interlace/1`,
    content: `${t}?imageView2/2/w/${c.smallWidth}/${c.format}interlace/1`
  });
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return a;
  });
  n.d(e, "a", function () {
    return s;
  });
  n.d(e, "c", function () {
    return c;
  });
  n.d(e, "d", function () {
    return u;
  });
  var r = n(215);
  var i = n.n(r);
  n(7);
  var o = n(34);
  const a = async t => {
    try {
      const e = "AUDIO_PLAYBACK";
      await f("off_screen/index.html", e);
      o.b.sendToRuntime({
        action: o.a.BG_PLAY_AUDIO,
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
  const s = async t => {
    try {
      const e = "LOCAL_STORAGE";
      await f("off_screen/index.html", e);
      return await o.b.sendToRuntime({
        action: o.a.BG_GET_LOCAL_STORAGE,
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
  const c = async t => {
    try {
      const e = "LOCAL_STORAGE";
      await f("off_screen/index.html", e);
      await o.b.sendToRuntime({
        action: o.a.BG_REMOVE_LOCAL_STORAGE,
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
  const u = async (t, e) => {
    try {
      const n = "LOCAL_STORAGE";
      await f("off_screen/index.html", n);
      await o.b.sendToRuntime({
        action: o.a.BG_SET_LOCAL_STORAGE,
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
  let l;
  async function f(t, e) {
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
      if (l) {
        await l;
      } else {
        l = chrome.offscreen.createDocument({
          url: t,
          reasons: [e],
          justification: "Specifies that the offscreen document is responsible for playing audio."
        });
        await l;
        l = null;
      }
    } catch (t) {}
  }
}, function (t, e, n) {
  const r = n(381);
  const i = n(390);
  const o = n(152);
  const a = n(461);
  const s = n(314);
  const c = n(564);
  const u = n(565);
  const l = n(566);
  const f = n(567);
  const h = n(568);
  const p = n(569);
  const d = n(570);
  const m = n(571);
  const g = n(210);
  const y = n(572);
  const b = n(573);
  const w = n(424);
  const v = n(574);
  const _ = n(575);
  const E = n(392);
  const x = n(425);
  const T = n(462);
  const I = n(463);
  const O = n(426);
  const S = n(427);
  const A = n(464);
  const N = n(576);
  const j = n(393);
  const C = n(211);
  const D = n(394);
  const k = n(580);
  const R = n(581);
  const L = n(582);
  const P = n(583);
  const M = n(584);
  const F = n(428);
  const U = n(585);
  const B = n(586);
  const $ = n(587);
  const q = n(588);
  const G = n(589);
  t.exports = {
    parse: s,
    valid: c,
    clean: u,
    inc: l,
    diff: f,
    major: h,
    minor: p,
    patch: d,
    prerelease: m,
    compare: g,
    rcompare: y,
    compareLoose: b,
    compareBuild: w,
    sort: v,
    rsort: _,
    gt: E,
    lt: x,
    eq: T,
    neq: I,
    gte: O,
    lte: S,
    cmp: A,
    coerce: N,
    Comparator: j,
    Range: C,
    satisfies: D,
    toComparators: k,
    maxSatisfying: R,
    minSatisfying: L,
    minVersion: P,
    validRange: M,
    outside: F,
    gtr: U,
    ltr: B,
    intersects: $,
    simplifyRange: q,
    subset: G,
    SemVer: o,
    re: r.re,
    src: r.src,
    tokens: r.t,
    SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: i.RELEASE_TYPES,
    compareIdentifiers: a.compareIdentifiers,
    rcompareIdentifiers: a.rcompareIdentifiers
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
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var l = {}.hasOwnProperty;
    u = n(57);
    c = u.isObject;
    s = u.isFunction;
    a = u.getValue;
    o = n(35);
    e = n(15);
    r = n(236);
    i = n(170);
    t.exports = function (t) {
      function n(t, r, i) {
        var o;
        var a;
        var s;
        var c;
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing element name. " + this.debugInfo());
        }
        this.name = this.stringify.name(r);
        this.type = e.Element;
        this.attribs = {};
        this.schemaTypeInfo = null;
        if (i != null) {
          this.attribute(i);
        }
        if (t.type === e.Document && (this.isRoot = true, this.documentObject = t, t.rootObject = this, t.children)) {
          a = 0;
          s = (c = t.children).length;
          for (; a < s; a++) {
            if ((o = c[a]).type === e.DocType) {
              o.name = this.name;
              break;
            }
          }
        }
      }
      (function (t, e) {
        for (var n in e) {
          if (l.call(e, n)) {
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
            this.attributeMap = new i(this.attribs);
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
          if (l.call(r, e)) {
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
        var i;
        if (t != null) {
          t = a(t);
        }
        if (c(t)) {
          for (n in t) {
            if (l.call(t, n)) {
              i = t[n];
              this.attribute(n, i);
            }
          }
        } else {
          if (s(e)) {
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
        t = a(t);
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
        var i;
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
        i = this.attribs.length - 1;
        for (; i >= 0 ? r <= i : r >= i; e = i >= 0 ? ++r : --r) {
          if (!this.attribs[e].isEqualNode(t.attribs[e])) {
            return false;
          }
        }
        return true;
      };
      return n;
    }(o);
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
    var i = {}.hasOwnProperty;
    e = n(15);
    r = n(154);
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
    var i = {}.hasOwnProperty;
    e = n(15);
    r = n(154);
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
    var i;
    var o = {}.hasOwnProperty;
    i = n(57).isObject;
    r = n(35);
    e = n(15);
    t.exports = function (t) {
      function n(t, r, o, a) {
        var s;
        n.__super__.constructor.call(this, t);
        if (i(r)) {
          r = (s = r).version;
          o = s.encoding;
          a = s.standalone;
        }
        r ||= "1.0";
        this.type = e.Declaration;
        this.version = this.stringify.xmlVersion(r);
        if (o != null) {
          this.encoding = this.stringify.xmlEncoding(o);
        }
        if (a != null) {
          this.standalone = this.stringify.xmlStandalone(a);
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
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var l = {}.hasOwnProperty;
    u = n(57).isObject;
    c = n(35);
    e = n(15);
    r = n(175);
    o = n(176);
    i = n(177);
    a = n(178);
    s = n(170);
    t.exports = function (t) {
      function n(t, r, i) {
        var o;
        var a;
        var s;
        var c;
        var l;
        var f;
        n.__super__.constructor.call(this, t);
        this.type = e.DocType;
        if (t.children) {
          a = 0;
          s = (c = t.children).length;
          for (; a < s; a++) {
            if ((o = c[a]).type === e.Element) {
              this.name = o.name;
              break;
            }
          }
        }
        this.documentObject = t;
        if (u(r)) {
          r = (l = r).pubID;
          i = l.sysID;
        }
        if (i == null) {
          i = (f = [r, i])[0];
          r = f[1];
        }
        if (r != null) {
          this.pubID = this.stringify.dtdPubID(r);
        }
        if (i != null) {
          this.sysID = this.stringify.dtdSysID(i);
        }
      }
      (function (t, e) {
        for (var n in e) {
          if (l.call(e, n)) {
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
          var i;
          var o;
          i = {};
          n = 0;
          r = (o = this.children).length;
          for (; n < r; n++) {
            if ((t = o[n]).type === e.EntityDeclaration && !t.pe) {
              i[t.name] = t;
            }
          }
          return new s(i);
        }
      });
      Object.defineProperty(n.prototype, "notations", {
        get: function () {
          var t;
          var n;
          var r;
          var i;
          var o;
          i = {};
          n = 0;
          r = (o = this.children).length;
          for (; n < r; n++) {
            if ((t = o[n]).type === e.NotationDeclaration) {
              i[t.name] = t;
            }
          }
          return new s(i);
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
        n = new i(this, t, e);
        this.children.push(n);
        return this;
      };
      n.prototype.attList = function (t, e, n, i, o) {
        var a;
        a = new r(this, t, e, n, i, o);
        this.children.push(a);
        return this;
      };
      n.prototype.entity = function (t, e) {
        var n;
        n = new o(this, false, t, e);
        this.children.push(n);
        return this;
      };
      n.prototype.pEntity = function (t, e) {
        var n;
        n = new o(this, true, t, e);
        this.children.push(n);
        return this;
      };
      n.prototype.notation = function (t, e) {
        var n;
        n = new a(this, t, e);
        this.children.push(n);
        return this;
      };
      n.prototype.toString = function (t) {
        return this.options.writer.docType(this, this.options.writer.filterOptions(t));
      };
      n.prototype.ele = function (t, e) {
        return this.element(t, e);
      };
      n.prototype.att = function (t, e, n, r, i) {
        return this.attList(t, e, n, r, i);
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
    var i = {}.hasOwnProperty;
    r = n(35);
    e = n(15);
    t.exports = function (t) {
      function n(t, r, i, o, a, s) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (i == null) {
          throw new Error("Missing DTD attribute name. " + this.debugInfo(r));
        }
        if (!o) {
          throw new Error("Missing DTD attribute type. " + this.debugInfo(r));
        }
        if (!a) {
          throw new Error("Missing DTD attribute default. " + this.debugInfo(r));
        }
        if (a.indexOf("#") !== 0) {
          a = "#" + a;
        }
        if (!a.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(r));
        }
        if (s && !a.match(/^(#FIXED|#DEFAULT)$/)) {
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(r));
        }
        this.elementName = this.stringify.name(r);
        this.type = e.AttributeDeclaration;
        this.attributeName = this.stringify.name(i);
        this.attributeType = this.stringify.dtdAttType(o);
        if (s) {
          this.defaultValue = this.stringify.dtdAttDefault(s);
        }
        this.defaultValueType = a;
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
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var i;
    var o = {}.hasOwnProperty;
    i = n(57).isObject;
    r = n(35);
    e = n(15);
    t.exports = function (t) {
      function n(t, r, o, a) {
        n.__super__.constructor.call(this, t);
        if (o == null) {
          throw new Error("Missing DTD entity name. " + this.debugInfo(o));
        }
        if (a == null) {
          throw new Error("Missing DTD entity value. " + this.debugInfo(o));
        }
        this.pe = !!r;
        this.name = this.stringify.name(o);
        this.type = e.EntityDeclaration;
        if (i(a)) {
          if (!a.pubID && !a.sysID) {
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(o));
          }
          if (a.pubID && !a.sysID) {
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(o));
          }
          this.internal = false;
          if (a.pubID != null) {
            this.pubID = this.stringify.dtdPubID(a.pubID);
          }
          if (a.sysID != null) {
            this.sysID = this.stringify.dtdSysID(a.sysID);
          }
          if (a.nData != null) {
            this.nData = this.stringify.dtdNData(a.nData);
          }
          if (this.pe && this.nData) {
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(o));
          }
        } else {
          this.value = this.stringify.dtdEntityValue(a);
          this.internal = true;
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
    var i = {}.hasOwnProperty;
    r = n(35);
    e = n(15);
    t.exports = function (t) {
      function n(t, r, i) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        i ||= "(#PCDATA)";
        if (Array.isArray(i)) {
          i = "(" + i.join(",") + ")";
        }
        this.name = this.stringify.name(r);
        this.type = e.ElementDeclaration;
        this.value = this.stringify.dtdElementValue(i);
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
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(t));
      };
      return n;
    }(r);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    var i = {}.hasOwnProperty;
    r = n(35);
    e = n(15);
    t.exports = function (t) {
      function n(t, r, i) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing DTD notation name. " + this.debugInfo(r));
        }
        if (!i.pubID && !i.sysID) {
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(r));
        }
        this.name = this.stringify.name(r);
        this.type = e.NotationDeclaration;
        if (i.pubID != null) {
          this.pubID = this.stringify.dtdPubID(i.pubID);
        }
        if (i.sysID != null) {
          this.sysID = this.stringify.dtdSysID(i.sysID);
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
    var i = {}.hasOwnProperty;
    e = n(15);
    r = n(35);
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
    var i = {}.hasOwnProperty;
    e = n(15);
    r = n(154);
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
    var i = {}.hasOwnProperty;
    e = n(15);
    r = n(154);
    t.exports = function (t) {
      function n(t, r, i) {
        n.__super__.constructor.call(this, t);
        if (r == null) {
          throw new Error("Missing instruction target. " + this.debugInfo());
        }
        this.type = e.ProcessingInstruction;
        this.target = this.stringify.insTarget(r);
        this.name = this.target;
        if (i) {
          this.value = this.stringify.insValue(i);
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
    e = n(239);
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
        function i() {
          this.constructor = t;
        }
        i.prototype = e.prototype;
        t.prototype = new i();
        t.__super__ = e.prototype;
      })(e, t);
      e.prototype.document = function (t, e) {
        var n;
        var r;
        var i;
        var o;
        var a;
        e = this.filterOptions(e);
        o = "";
        r = 0;
        i = (a = t.children).length;
        for (; r < i; r++) {
          n = a[r];
          o += this.writeChildNode(n, e, 0);
        }
        if (e.pretty && o.slice(-e.newline.length) === e.newline) {
          o = o.slice(0, -e.newline.length);
        }
        return o;
      };
      return e;
    }(e);
  }).call(this);
}, function (t, e, n) {
  (e = t.exports = n(241)).Stream = e;
  e.Readable = e;
  e.Writable = n(185);
  e.Duplex = n(80);
  e.Transform = n(245);
  e.PassThrough = n(355);
}, function (t, e, n) {
  var r = n(153);
  var i = r.Buffer;
  function o(t, e) {
    for (var n in t) {
      e[n] = t[n];
    }
  }
  function a(t, e, n) {
    return i(t, e, n);
  }
  if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
    t.exports = r;
  } else {
    o(r, e);
    e.Buffer = a;
  }
  o(i, a);
  a.from = function (t, e, n) {
    if (typeof t == "number") {
      throw new TypeError("Argument must not be a number");
    }
    return i(t, e, n);
  };
  a.alloc = function (t, e, n) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    var r = i(t);
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
  a.allocUnsafe = function (t) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    return i(t);
  };
  a.allocUnsafeSlow = function (t) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    return r.SlowBuffer(t);
  };
}, function (t, e, n) {
  "use strict";

  (function (e, r, i) {
    var o = n(157);
    function a(t) {
      var e = this;
      this.next = null;
      this.entry = null;
      this.finish = function () {
        (function (t, e, n) {
          var r = t.entry;
          t.entry = null;
          while (r) {
            var i = r.callback;
            e.pendingcb--;
            i(n);
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
    t.exports = b;
    var s;
    var c = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : o.nextTick;
    b.WritableState = y;
    var u = Object.create(n(108));
    u.inherits = n(91);
    var l = {
      deprecate: n(353)
    };
    var f = n(242);
    var h = n(184).Buffer;
    var p = i.Uint8Array || function () {};
    var d;
    var m = n(243);
    function g() {}
    function y(t, e) {
      s = s || n(80);
      t = t || {};
      var r = e instanceof s;
      this.objectMode = !!t.objectMode;
      if (r) {
        this.objectMode = this.objectMode || !!t.writableObjectMode;
      }
      var i = t.highWaterMark;
      var u = t.writableHighWaterMark;
      var l = this.objectMode ? 16 : 16384;
      this.highWaterMark = i || i === 0 ? i : r && (u || u === 0) ? u : l;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var f = t.decodeStrings === false;
      this.decodeStrings = !f;
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
          var i = n.writecb;
          (function (t) {
            t.writing = false;
            t.writecb = null;
            t.length -= t.writelen;
            t.writelen = 0;
          })(n);
          if (e) {
            (function (t, e, n, r, i) {
              --e.pendingcb;
              if (n) {
                o.nextTick(i, r);
                o.nextTick(T, t, e);
                t._writableState.errorEmitted = true;
                t.emit("error", r);
              } else {
                i(r);
                t._writableState.errorEmitted = true;
                t.emit("error", r);
                T(t, e);
              }
            })(t, n, r, e, i);
          } else {
            var a = E(n);
            if (!a && !n.corked && !n.bufferProcessing && !!n.bufferedRequest) {
              _(t, n);
            }
            if (r) {
              c(v, t, n, a, i);
            } else {
              v(t, n, a, i);
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
      this.corkedRequestsFree = new a(this);
    }
    function b(t) {
      s = s || n(80);
      if (!d.call(b, this) && !(this instanceof s)) {
        return new b(t);
      }
      this._writableState = new y(t, this);
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
      f.call(this);
    }
    function w(t, e, n, r, i, o, a) {
      e.writelen = r;
      e.writecb = a;
      e.writing = true;
      e.sync = true;
      if (n) {
        t._writev(i, e.onwrite);
      } else {
        t._write(i, o, e.onwrite);
      }
      e.sync = false;
    }
    function v(t, e, n, r) {
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
      T(t, e);
    }
    function _(t, e) {
      e.bufferProcessing = true;
      var n = e.bufferedRequest;
      if (t._writev && n && n.next) {
        var r = e.bufferedRequestCount;
        var i = new Array(r);
        var o = e.corkedRequestsFree;
        o.entry = n;
        var s = 0;
        var c = true;
        while (n) {
          i[s] = n;
          if (!n.isBuf) {
            c = false;
          }
          n = n.next;
          s += 1;
        }
        i.allBuffers = c;
        w(t, e, true, e.length, i, "", o.finish);
        e.pendingcb++;
        e.lastBufferedRequest = null;
        if (o.next) {
          e.corkedRequestsFree = o.next;
          o.next = null;
        } else {
          e.corkedRequestsFree = new a(e);
        }
        e.bufferedRequestCount = 0;
      } else {
        while (n) {
          var u = n.chunk;
          var l = n.encoding;
          var f = n.callback;
          w(t, e, false, e.objectMode ? 1 : u.length, u, l, f);
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
    function E(t) {
      return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
    }
    function x(t, e) {
      t._final(function (n) {
        e.pendingcb--;
        if (n) {
          t.emit("error", n);
        }
        e.prefinished = true;
        t.emit("prefinish");
        T(t, e);
      });
    }
    function T(t, e) {
      var n = E(e);
      if (n) {
        (function (t, e) {
          if (!e.prefinished && !e.finalCalled) {
            if (typeof t._final == "function") {
              e.pendingcb++;
              e.finalCalled = true;
              o.nextTick(x, t, e);
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
    u.inherits(b, f);
    y.prototype.getBuffer = function () {
      for (var t = this.bufferedRequest, e = []; t;) {
        e.push(t);
        t = t.next;
      }
      return e;
    };
    (function () {
      try {
        Object.defineProperty(y.prototype, "buffer", {
          get: l.deprecate(function () {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (t) {}
    })();
    if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
      d = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(b, Symbol.hasInstance, {
        value: function (t) {
          return !!d.call(this, t) || this === b && t && t._writableState instanceof y;
        }
      });
    } else {
      d = function (t) {
        return t instanceof this;
      };
    }
    b.prototype.pipe = function () {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    b.prototype.write = function (t, e, n) {
      var r;
      var i = this._writableState;
      var a = false;
      var s = !i.objectMode && (r = t, h.isBuffer(r) || r instanceof p);
      if (s && !h.isBuffer(t)) {
        t = function (t) {
          return h.from(t);
        }(t);
      }
      if (typeof e == "function") {
        n = e;
        e = null;
      }
      if (s) {
        e = "buffer";
      } else {
        e ||= i.defaultEncoding;
      }
      if (typeof n != "function") {
        n = g;
      }
      if (i.ended) {
        (function (t, e) {
          var n = new Error("write after end");
          t.emit("error", n);
          o.nextTick(e, n);
        })(this, n);
      } else if (s || function (t, e, n, r) {
        var i = true;
        var a = false;
        if (n === null) {
          a = new TypeError("May not write null values to stream");
        } else if (typeof n != "string" && n !== undefined && !e.objectMode) {
          a = new TypeError("Invalid non-string/buffer chunk");
        }
        if (a) {
          t.emit("error", a);
          o.nextTick(r, a);
          i = false;
        }
        return i;
      }(this, i, t, n)) {
        i.pendingcb++;
        a = function (t, e, n, r, i, o) {
          if (!n) {
            var a = function (t, e, n) {
              if (!t.objectMode && t.decodeStrings !== false && typeof e == "string") {
                e = h.from(e, n);
              }
              return e;
            }(e, r, i);
            if (r !== a) {
              n = true;
              i = "buffer";
              r = a;
            }
          }
          var s = e.objectMode ? 1 : r.length;
          e.length += s;
          var c = e.length < e.highWaterMark;
          if (!c) {
            e.needDrain = true;
          }
          if (e.writing || e.corked) {
            var u = e.lastBufferedRequest;
            e.lastBufferedRequest = {
              chunk: r,
              encoding: i,
              isBuf: n,
              callback: o,
              next: null
            };
            if (u) {
              u.next = e.lastBufferedRequest;
            } else {
              e.bufferedRequest = e.lastBufferedRequest;
            }
            e.bufferedRequestCount += 1;
          } else {
            w(t, e, false, s, r, i, o);
          }
          return c;
        }(this, i, s, t, e, n);
      }
      return a;
    };
    b.prototype.cork = function () {
      this._writableState.corked++;
    };
    b.prototype.uncork = function () {
      var t = this._writableState;
      if (t.corked) {
        t.corked--;
        if (!t.writing && !t.corked && !t.finished && !t.bufferProcessing && !!t.bufferedRequest) {
          _(this, t);
        }
      }
    };
    b.prototype.setDefaultEncoding = function (t) {
      if (typeof t == "string") {
        t = t.toLowerCase();
      }
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) {
        throw new TypeError("Unknown encoding: " + t);
      }
      this._writableState.defaultEncoding = t;
      return this;
    };
    Object.defineProperty(b.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    b.prototype._write = function (t, e, n) {
      n(new Error("_write() is not implemented"));
    };
    b.prototype._writev = null;
    b.prototype.end = function (t, e, n) {
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
          T(t, e);
          if (n) {
            if (e.finished) {
              o.nextTick(n);
            } else {
              t.once("finish", n);
            }
          }
          e.ended = true;
          t.writable = false;
        })(this, r, n);
      }
    };
    Object.defineProperty(b.prototype, "destroyed", {
      get: function () {
        return this._writableState !== undefined && this._writableState.destroyed;
      },
      set: function (t) {
        if (this._writableState) {
          this._writableState.destroyed = t;
        }
      }
    });
    b.prototype.destroy = m.destroy;
    b.prototype._undestroy = m.undestroy;
    b.prototype._destroy = function (t, e) {
      this.end();
      e(t);
    };
  }).call(this, n(94), n(244).setImmediate, n(25));
}, function (t, e, n) {
  "use strict";

  var r = n(354).Buffer;
  var i = r.isEncoding || function (t) {
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
  function o(t) {
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
      if (typeof e != "string" && (r.isEncoding === i || !i(t))) {
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
        this.fillLast = s;
        e = 4;
        break;
      case "base64":
        this.text = l;
        this.end = f;
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
  function a(t) {
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
  function s(t) {
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
  function l(t, e) {
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
  function f(t) {
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
  e.StringDecoder = o;
  o.prototype.write = function (t) {
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
  o.prototype.end = function (t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      return e + "�";
    } else {
      return e;
    }
  };
  o.prototype.text = function (t, e) {
    var n = function (t, e, n) {
      var r = e.length - 1;
      if (r < n) {
        return 0;
      }
      var i = a(e[r]);
      if (i >= 0) {
        if (i > 0) {
          t.lastNeed = i - 1;
        }
        return i;
      }
      if (--r < n || i === -2) {
        return 0;
      }
      if ((i = a(e[r])) >= 0) {
        if (i > 0) {
          t.lastNeed = i - 2;
        }
        return i;
      }
      if (--r < n || i === -2) {
        return 0;
      }
      if ((i = a(e[r])) >= 0) {
        if (i > 0) {
          if (i === 2) {
            i = 0;
          } else {
            t.lastNeed = i - 3;
          }
        }
        return i;
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
  o.prototype.fillLast = function (t) {
    if (this.lastNeed <= t.length) {
      t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length);
    this.lastNeed -= t.length;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(44);
  var i = n(140);
  var o = n(143);
  var a = n(195);
  var s = n(30);
  var c = n(95);
  var u = n(98);
  function l(t, e) {
    var n = this;
    if (!(n instanceof l)) {
      return new l(t, e);
    }
    if (o) {
      n = o(new Error(undefined), i(n));
    }
    if (e !== undefined) {
      s(n, "message", String(e));
    }
    var r = [];
    u(t, r.push, {
      that: r
    });
    s(n, "errors", r);
    return n;
  }
  l.prototype = a(Error.prototype, {
    constructor: c(5, l),
    message: c(5, ""),
    name: c(5, "AggregateError")
  });
  r({
    global: true
  }, {
    AggregateError: l
  });
}, function (t, e, n) {
  var r = n(61);
  var i = n(269);
  var o = n(95);
  var a = n(96);
  var s = n(189);
  var c = n(37);
  var u = n(191);
  var l = Object.getOwnPropertyDescriptor;
  e.f = r ? l : function (t, e) {
    t = a(t);
    e = s(e, true);
    if (u) {
      try {
        return l(t, e);
      } catch (t) {}
    }
    if (c(t, e)) {
      return o(!i.f.call(t, e), t[e]);
    }
  };
}, function (t, e, n) {
  var r = n(45);
  t.exports = function (t, e) {
    if (!r(t)) {
      return t;
    }
    var n;
    var i;
    if (e && typeof (n = t.toString) == "function" && !r(i = n.call(t))) {
      return i;
    }
    if (typeof (n = t.valueOf) == "function" && !r(i = n.call(t))) {
      return i;
    }
    if (!e && typeof (n = t.toString) == "function" && !r(i = n.call(t))) {
      return i;
    }
    throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e, n) {
  var r = n(103);
  t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e, n) {
  var r = n(61);
  var i = n(29);
  var o = n(138);
  t.exports = !r && !i(function () {
    return Object.defineProperty(o("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
}, function (t, e, n) {
  var r = n(29);
  var i = /#|\.prototype\./;
  function o(t, e) {
    var n = s[a(t)];
    return n == u || n != c && (typeof e == "function" ? r(e) : !!e);
  }
  var a = o.normalize = function (t) {
    return String(t).replace(i, ".").toLowerCase();
  };
  var s = o.data = {};
  var c = o.NATIVE = "N";
  var u = o.POLYFILL = "P";
  t.exports = o;
}, function (t, e, n) {
  var r = n(65);
  var i = n(142);
  (t.exports = function (t, e) {
    return i[t] ||= e !== undefined ? e : {};
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
  var r;
  var i = n(32);
  var o = n(274);
  var a = n(196);
  var s = n(145);
  var c = n(197);
  var u = n(138);
  var l = n(141);
  var f = l("IE_PROTO");
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
    for (var n = a.length; n--;) {
      delete d.prototype[a[n]];
    }
    return d();
  }
  s[f] = true;
  t.exports = Object.create || function (t, e) {
    var n;
    if (t !== null) {
      h.prototype = i(t);
      n = new h();
      h.prototype = null;
      n[f] = t;
    } else {
      n = d();
    }
    if (e === undefined) {
      return n;
    } else {
      return o(n, e);
    }
  };
}, function (t, e) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function (t, e, n) {
  var r = n(62);
  t.exports = r("document", "documentElement");
}, function (t, e, n) {
  var r = n(199);
  var i = n(29);
  t.exports = !!Object.getOwnPropertySymbols && !i(function () {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
  });
}, function (t, e, n) {
  var r;
  var i;
  var o = n(14);
  var a = n(146);
  var s = o.process;
  var c = s && s.versions;
  var u = c && c.v8;
  if (u) {
    i = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
  } else if (a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/))) {
    i = r[1];
  }
  t.exports = i && +i;
}, function (t, e, n) {
  var r = n(14);
  t.exports = r.Promise;
}, function (t, e, n) {
  var r = n(142);
  var i = Function.toString;
  if (typeof r.inspectSource != "function") {
    r.inspectSource = function (t) {
      return i.call(t);
    };
  }
  t.exports = r.inspectSource;
}, function (t, e, n) {
  var r;
  var i;
  var o;
  var a = n(14);
  var s = n(29);
  var c = n(139);
  var u = n(197);
  var l = n(138);
  var f = n(203);
  var h = n(150);
  var p = a.location;
  var d = a.setImmediate;
  var m = a.clearImmediate;
  var g = a.process;
  var y = a.MessageChannel;
  var b = a.Dispatch;
  var w = 0;
  var v = {};
  function _(t) {
    if (v.hasOwnProperty(t)) {
      var e = v[t];
      delete v[t];
      e();
    }
  }
  function E(t) {
    return function () {
      _(t);
    };
  }
  function x(t) {
    _(t.data);
  }
  function T(t) {
    a.postMessage(t + "", p.protocol + "//" + p.host);
  }
  if (!d || !m) {
    d = function (t) {
      var e = [];
      for (var n = 1; arguments.length > n;) {
        e.push(arguments[n++]);
      }
      v[++w] = function () {
        (typeof t == "function" ? t : Function(t)).apply(undefined, e);
      };
      r(w);
      return w;
    };
    m = function (t) {
      delete v[t];
    };
    if (h) {
      r = function (t) {
        g.nextTick(E(t));
      };
    } else if (b && b.now) {
      r = function (t) {
        b.now(E(t));
      };
    } else if (y && !f) {
      o = (i = new y()).port2;
      i.port1.onmessage = x;
      r = c(o.postMessage, o, 1);
    } else if (a.addEventListener && typeof postMessage == "function" && !a.importScripts && p && p.protocol !== "file:" && !s(T)) {
      r = T;
      a.addEventListener("message", x, false);
    } else {
      r = "onreadystatechange" in l("script") ? function (t) {
        u.appendChild(l("script")).onreadystatechange = function () {
          u.removeChild(this);
          _(t);
        };
      } : function (t) {
        setTimeout(E(t), 0);
      };
    }
  }
  t.exports = {
    set: d,
    clear: m
  };
}, function (t, e, n) {
  var r = n(146);
  t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r);
}, function (t, e, n) {
  var r = n(32);
  var i = n(45);
  var o = n(81);
  t.exports = function (t, e) {
    r(t);
    if (i(e) && e.constructor === t) {
      return e;
    }
    var n = o.f(t);
    (0, n.resolve)(e);
    return n.promise;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(44);
  var i = n(52);
  var o = n(81);
  var a = n(100);
  var s = n(98);
  r({
    target: "Promise",
    stat: true
  }, {
    allSettled: function (t) {
      var e = this;
      var n = o.f(e);
      var r = n.resolve;
      var c = n.reject;
      var u = a(function () {
        var n = i(e.resolve);
        var o = [];
        var a = 0;
        var c = 1;
        s(t, function (t) {
          var i = a++;
          var s = false;
          o.push(undefined);
          c++;
          n.call(e, t).then(function (t) {
            if (!s) {
              s = true;
              o[i] = {
                status: "fulfilled",
                value: t
              };
              if (! --c) {
                r(o);
              }
            }
          }, function (t) {
            if (!s) {
              s = true;
              o[i] = {
                status: "rejected",
                reason: t
              };
              if (! --c) {
                r(o);
              }
            }
          });
        });
        if (! --c) {
          r(o);
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

  var r = n(44);
  var i = n(52);
  var o = n(62);
  var a = n(81);
  var s = n(100);
  var c = n(98);
  r({
    target: "Promise",
    stat: true
  }, {
    any: function (t) {
      var e = this;
      var n = a.f(e);
      var r = n.resolve;
      var u = n.reject;
      var l = s(function () {
        var n = i(e.resolve);
        var a = [];
        var s = 0;
        var l = 1;
        var f = false;
        c(t, function (t) {
          var i = s++;
          var c = false;
          a.push(undefined);
          l++;
          n.call(e, t).then(function (t) {
            if (!c && !f) {
              f = true;
              r(t);
            }
          }, function (t) {
            if (!c && !f) {
              c = true;
              a[i] = t;
              if (! --l) {
                u(new (o("AggregateError"))(a, "No one promise resolved"));
              }
            }
          });
        });
        if (! --l) {
          u(new (o("AggregateError"))(a, "No one promise resolved"));
        }
      });
      if (l.error) {
        u(l.value);
      }
      return n.promise;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(44);
  var i = n(213);
  var o = n(140);
  var a = n(143);
  var s = n(149);
  var c = n(30);
  var u = n(99);
  var l = n(17);
  var f = n(65);
  var h = n(63);
  var p = n(208);
  var d = p.IteratorPrototype;
  var m = p.BUGGY_SAFARI_ITERATORS;
  var g = l("iterator");
  function y() {
    return this;
  }
  t.exports = function (t, e, n, l, p, b, w) {
    i(n, e, l);
    var v;
    var _;
    var E;
    function x(t) {
      if (t === p && A) {
        return A;
      }
      if (!m && t in O) {
        return O[t];
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
    var T = e + " Iterator";
    var I = false;
    var O = t.prototype;
    var S = O[g] || O["@@iterator"] || p && O[p];
    var A = !m && S || x(p);
    var N = e == "Array" && O.entries || S;
    if (N) {
      v = o(N.call(new t()));
      if (d !== Object.prototype && v.next) {
        if (!f && o(v) !== d) {
          if (a) {
            a(v, d);
          } else if (typeof v[g] != "function") {
            c(v, g, y);
          }
        }
        s(v, T, true, true);
        if (f) {
          h[T] = y;
        }
      }
    }
    if (p == "values" && S && S.name !== "values") {
      I = true;
      A = function () {
        return S.call(this);
      };
    }
    if ((!f || !!w) && O[g] !== A) {
      c(O, g, A);
    }
    h[e] = A;
    if (p) {
      _ = {
        values: x("values"),
        keys: b ? A : x("keys"),
        entries: x("entries")
      };
      if (w) {
        for (E in _) {
          if (m || I || !(E in O)) {
            u(O, E, _[E]);
          }
        }
      } else {
        r({
          target: e,
          proto: true,
          forced: m || I
        }, _);
      }
    }
    return _;
  };
}, function (t, e, n) {
  "use strict";

  var r;
  var i;
  var o;
  var a = n(29);
  var s = n(140);
  var c = n(30);
  var u = n(37);
  var l = n(17);
  var f = n(65);
  var h = l("iterator");
  var p = false;
  if ([].keys) {
    if ("next" in (o = [].keys())) {
      if ((i = s(s(o))) !== Object.prototype) {
        r = i;
      }
    } else {
      p = true;
    }
  }
  var d = r == null || a(function () {
    var t = {};
    return r[h].call(t) !== t;
  });
  if (d) {
    r = {};
  }
  if ((!f || !!d) && !u(r, h)) {
    c(r, h, function () {
      return this;
    });
  }
  t.exports = {
    IteratorPrototype: r,
    BUGGY_SAFARI_ITERATORS: p
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  };
}, function (t, e, n) {
  const r = n(152);
  t.exports = (t, e, n) => new r(t, n).compare(new r(e, n));
}, function (t, e, n) {
  class r {
    constructor(t, e) {
      e = o(e);
      if (t instanceof r) {
        if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease) {
          return t;
        } else {
          return new r(t.raw, e);
        }
      }
      if (t instanceof a) {
        this.raw = t.value;
        this.set = [[t]];
        this.format();
        return this;
      }
      this.options = e;
      this.loose = !!e.loose;
      this.includePrerelease = !!e.includePrerelease;
      this.raw = t.trim().split(/\s+/).join(" ");
      this.set = this.raw.split("||").map(t => this.parseRange(t.trim())).filter(t => t.length);
      if (!this.set.length) {
        throw new TypeError("Invalid SemVer Range: " + this.raw);
      }
      if (this.set.length > 1) {
        const t = this.set[0];
        this.set = this.set.filter(t => !g(t[0]));
        if (this.set.length === 0) {
          this.set = [t];
        } else if (this.set.length > 1) {
          for (const t of this.set) {
            if (t.length === 1 && y(t[0])) {
              this.set = [t];
              break;
            }
          }
        }
      }
      this.format();
    }
    format() {
      this.range = this.set.map(t => t.join(" ").trim()).join("||").trim();
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(t) {
      const e = ((this.options.includePrerelease && d) | (this.options.loose && m)) + ":" + t;
      const n = i.get(e);
      if (n) {
        return n;
      }
      const r = this.options.loose;
      const o = r ? u[l.HYPHENRANGELOOSE] : u[l.HYPHENRANGE];
      t = t.replace(o, N(this.options.includePrerelease));
      s("hyphen replace", t);
      t = t.replace(u[l.COMPARATORTRIM], f);
      s("comparator trim", t);
      t = t.replace(u[l.TILDETRIM], h);
      s("tilde trim", t);
      t = t.replace(u[l.CARETTRIM], p);
      s("caret trim", t);
      let c = t.split(" ").map(t => w(t, this.options)).join(" ").split(/\s+/).map(t => A(t, this.options));
      if (r) {
        c = c.filter(t => {
          s("loose invalid filter", t, this.options);
          return !!t.match(u[l.COMPARATORLOOSE]);
        });
      }
      s("range list", c);
      const y = new Map();
      const b = c.map(t => new a(t, this.options));
      for (const t of b) {
        if (g(t)) {
          return [t];
        }
        y.set(t.value, t);
      }
      if (y.size > 1 && y.has("")) {
        y.delete("");
      }
      const v = [...y.values()];
      i.set(e, v);
      return v;
    }
    intersects(t, e) {
      if (!(t instanceof r)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some(n => b(n, e) && t.set.some(t => b(t, e) && n.every(n => t.every(t => n.intersects(t, e)))));
    }
    test(t) {
      if (!t) {
        return false;
      }
      if (typeof t == "string") {
        try {
          t = new c(t, this.options);
        } catch (t) {
          return false;
        }
      }
      for (let e = 0; e < this.set.length; e++) {
        if (j(this.set[e], t, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  t.exports = r;
  const i = new (n(577))({
    max: 1000
  });
  const o = n(423);
  const a = n(393);
  const s = n(391);
  const c = n(152);
  const {
    safeRe: u,
    t: l,
    comparatorTrimReplace: f,
    tildeTrimReplace: h,
    caretTrimReplace: p
  } = n(381);
  const {
    FLAG_INCLUDE_PRERELEASE: d,
    FLAG_LOOSE: m
  } = n(390);
  const g = t => t.value === "<0.0.0-0";
  const y = t => t.value === "";
  const b = (t, e) => {
    let n = true;
    const r = t.slice();
    let i = r.pop();
    while (n && r.length) {
      n = r.every(t => i.intersects(t, e));
      i = r.pop();
    }
    return n;
  };
  const w = (t, e) => {
    s("comp", t, e);
    t = x(t, e);
    s("caret", t);
    t = _(t, e);
    s("tildes", t);
    t = I(t, e);
    s("xrange", t);
    t = S(t, e);
    s("stars", t);
    return t;
  };
  const v = t => !t || t.toLowerCase() === "x" || t === "*";
  const _ = (t, e) => t.trim().split(/\s+/).map(t => E(t, e)).join(" ");
  const E = (t, e) => {
    const n = e.loose ? u[l.TILDELOOSE] : u[l.TILDE];
    return t.replace(n, (e, n, r, i, o) => {
      let a;
      s("tilde", t, e, n, r, i, o);
      if (v(n)) {
        a = "";
      } else if (v(r)) {
        a = `>=${n}.0.0 <${+n + 1}.0.0-0`;
      } else if (v(i)) {
        a = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0`;
      } else if (o) {
        s("replaceTilde pr", o);
        a = `>=${n}.${r}.${i}-${o} <${n}.${+r + 1}.0-0`;
      } else {
        a = `>=${n}.${r}.${i} <${n}.${+r + 1}.0-0`;
      }
      s("tilde return", a);
      return a;
    });
  };
  const x = (t, e) => t.trim().split(/\s+/).map(t => T(t, e)).join(" ");
  const T = (t, e) => {
    s("caret", t, e);
    const n = e.loose ? u[l.CARETLOOSE] : u[l.CARET];
    const r = e.includePrerelease ? "-0" : "";
    return t.replace(n, (e, n, i, o, a) => {
      let c;
      s("caret", t, e, n, i, o, a);
      if (v(n)) {
        c = "";
      } else if (v(i)) {
        c = `>=${n}.0.0${r} <${+n + 1}.0.0-0`;
      } else if (v(o)) {
        c = n === "0" ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0`;
      } else if (a) {
        s("replaceCaret pr", a);
        c = n === "0" ? i === "0" ? `>=${n}.${i}.${o}-${a} <${n}.${i}.${+o + 1}-0` : `>=${n}.${i}.${o}-${a} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${o}-${a} <${+n + 1}.0.0-0`;
      } else {
        s("no pr");
        c = n === "0" ? i === "0" ? `>=${n}.${i}.${o}${r} <${n}.${i}.${+o + 1}-0` : `>=${n}.${i}.${o}${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${o} <${+n + 1}.0.0-0`;
      }
      s("caret return", c);
      return c;
    });
  };
  const I = (t, e) => {
    s("replaceXRanges", t, e);
    return t.split(/\s+/).map(t => O(t, e)).join(" ");
  };
  const O = (t, e) => {
    t = t.trim();
    const n = e.loose ? u[l.XRANGELOOSE] : u[l.XRANGE];
    return t.replace(n, (n, r, i, o, a, c) => {
      s("xRange", t, n, r, i, o, a, c);
      const u = v(i);
      const l = u || v(o);
      const f = l || v(a);
      const h = f;
      if (r === "=" && h) {
        r = "";
      }
      c = e.includePrerelease ? "-0" : "";
      if (u) {
        n = r === ">" || r === "<" ? "<0.0.0-0" : "*";
      } else if (r && h) {
        if (l) {
          o = 0;
        }
        a = 0;
        if (r === ">") {
          r = ">=";
          if (l) {
            i = +i + 1;
            o = 0;
            a = 0;
          } else {
            o = +o + 1;
            a = 0;
          }
        } else if (r === "<=") {
          r = "<";
          if (l) {
            i = +i + 1;
          } else {
            o = +o + 1;
          }
        }
        if (r === "<") {
          c = "-0";
        }
        n = `${r + i}.${o}.${a}${c}`;
      } else if (l) {
        n = `>=${i}.0.0${c} <${+i + 1}.0.0-0`;
      } else if (f) {
        n = `>=${i}.${o}.0${c} <${i}.${+o + 1}.0-0`;
      }
      s("xRange return", n);
      return n;
    });
  };
  const S = (t, e) => {
    s("replaceStars", t, e);
    return t.trim().replace(u[l.STAR], "");
  };
  const A = (t, e) => {
    s("replaceGTE0", t, e);
    return t.trim().replace(u[e.includePrerelease ? l.GTE0PRE : l.GTE0], "");
  };
  const N = t => (e, n, r, i, o, a, s, c, u, l, f, h, p) => `${n = v(r) ? "" : v(i) ? `>=${r}.0.0${t ? "-0" : ""}` : v(o) ? `>=${r}.${i}.0${t ? "-0" : ""}` : a ? ">=" + n : `>=${n}${t ? "-0" : ""}`} ${c = v(u) ? "" : v(l) ? `<${+u + 1}.0.0-0` : v(f) ? `<${u}.${+l + 1}.0-0` : h ? `<=${u}.${l}.${f}-${h}` : t ? `<${u}.${l}.${+f + 1}-0` : "<=" + c}`.trim();
  const j = (t, e, n) => {
    for (let n = 0; n < t.length; n++) {
      if (!t[n].test(e)) {
        return false;
      }
    }
    if (e.prerelease.length && !n.includePrerelease) {
      for (let n = 0; n < t.length; n++) {
        s(t[n].semver);
        if (t[n].semver !== a.ANY && t[n].semver.prerelease.length > 0) {
          const r = t[n].semver;
          if (r.major === e.major && r.minor === e.minor && r.patch === e.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
}, function (t, e, n) {
  var r = n(144);
  var i = n(103);
  function o(t) {
    return function (e, n) {
      var o;
      var a;
      var s = String(i(e));
      var c = r(n);
      var u = s.length;
      if (c < 0 || c >= u) {
        if (t) {
          return "";
        } else {
          return undefined;
        }
      } else if ((o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343) {
        if (t) {
          return s.charAt(c);
        } else {
          return o;
        }
      } else if (t) {
        return s.slice(c, c + 2);
      } else {
        return a - 56320 + (o - 55296 << 10) + 65536;
      }
    };
  }
  t.exports = {
    codeAt: o(false),
    charAt: o(true)
  };
}, function (t, e, n) {
  "use strict";

  var r = n(208).IteratorPrototype;
  var i = n(195);
  var o = n(95);
  var a = n(149);
  var s = n(63);
  function c() {
    return this;
  }
  t.exports = function (t, e, n) {
    var u = e + " Iterator";
    t.prototype = i(r, {
      next: o(1, n)
    });
    a(t, u, false, true);
    s[u] = c;
    return t;
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "c", function () {
    return a;
  });
  n.d(e, "a", function () {
    return s;
  });
  n.d(e, "d", function () {
    return c;
  });
  n.d(e, "b", function () {
    return u;
  });
  var r = n(5);
  var i = n.n(r);
  n(257);
  n(19);
  n(64);
  var o = n(0);
  function a(t) {
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
  function s(t, e = o.C.lang) {
    const n = this;
    const r = /(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/;
    let i;
    let a;
    let s;
    if (r.test(t)) {
      t.replace(r, (t, r, o, c) => {
        if (r.length === 4) {
          i = r;
          a = o;
          s = c;
        } else if (n.isFirstDate(e)) {
          s = r;
          a = o;
          i = c;
        } else {
          s = o;
          a = r;
          i = c;
        }
        if (e === "th") {
          i = Number(i) - 543;
        }
      });
      return new Date(`${i}/${a}/${s}`);
    } else {
      return null;
    }
  }
  function c(t) {
    return t.slice(0, 1).toUpperCase() + t.slice(1);
  }
  function u(t, e, n) {
    return new i.a((r, i) => {
      const o = new Image(e, n);
      o.onload = () => r(o);
      o.onerror = i;
      o.crossOrigin = "anonymous";
      o.src = t;
    });
  }
}, function (t, e, n) {
  t.exports = n(369);
}, function (t, e, n) {
  "use strict";

  var r = n(10);
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
  var r = n(9);
  function i(t, e) {
    return RegExp(t, e);
  }
  e.UNSUPPORTED_Y = r(function () {
    var t = i("a", "y");
    t.lastIndex = 2;
    return t.exec("abcd") != null;
  });
  e.BROKEN_CARET = r(function () {
    var t = i("^r", "gy");
    t.lastIndex = 2;
    return t.exec("str") != null;
  });
}, function (t, e, n) {
  var r = n(9);
  t.exports = r(function () {
    var t = RegExp(".", "string".charAt(0));
    return !t.dotAll || !t.exec("\n") || t.flags !== "s";
  });
}, function (t, e, n) {
  var r = n(9);
  t.exports = r(function () {
    var t = RegExp("(?<a>b)", "string".charAt(5));
    return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
  });
}, function (t, e, n) {
  var r = n(151).Symbol;
  t.exports = r;
}, function (t, e) {
  t.exports = function (t) {
    return t != null && typeof t == "object";
  };
},,,,, function (t, e, n) {
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

  var r = n(31);
  function i(t) {
    return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  t.exports = function (t, e, n) {
    if (!e) {
      return t;
    }
    var o;
    if (n) {
      o = n(e);
    } else if (r.isURLSearchParams(e)) {
      o = e.toString();
    } else {
      var a = [];
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
            a.push(i(e) + "=" + i(t));
          });
        }
      });
      o = a.join("&");
    }
    if (o) {
      var s = t.indexOf("#");
      if (s !== -1) {
        t = t.slice(0, s);
      }
      t += (t.indexOf("?") === -1 ? "?" : "&") + o;
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
    var r = n(31);
    var i = n(323);
    var o = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function a(t, e) {
      if (!r.isUndefined(t) && r.isUndefined(t["Content-Type"])) {
        t["Content-Type"] = e;
      }
    }
    var s;
    var c = {
      adapter: ((typeof XMLHttpRequest != "undefined" || e !== undefined && Object.prototype.toString.call(e) === "[object process]") && (s = n(230)), s),
      transformRequest: [function (t, e) {
        i(e, "Accept");
        i(e, "Content-Type");
        if (r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t)) {
          return t;
        } else if (r.isArrayBufferView(t)) {
          return t.buffer;
        } else if (r.isURLSearchParams(t)) {
          a(e, "application/x-www-form-urlencoded;charset=utf-8");
          return t.toString();
        } else if (r.isObject(t)) {
          a(e, "application/json;charset=utf-8");
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
      c.headers[t] = r.merge(o);
    });
    t.exports = c;
  }).call(this, n(94));
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  var i = n(324);
  var o = n(227);
  var a = n(326);
  var s = n(329);
  var c = n(330);
  var u = n(231);
  t.exports = function (t) {
    return new Promise(function (e, l) {
      var f = t.data;
      var h = t.headers;
      if (r.isFormData(f)) {
        delete h["Content-Type"];
      }
      var p = new XMLHttpRequest();
      if (t.auth) {
        var d = t.auth.username || "";
        var m = t.auth.password || "";
        h.Authorization = "Basic " + btoa(d + ":" + m);
      }
      var g = a(t.baseURL, t.url);
      p.open(t.method.toUpperCase(), o(g, t.params, t.paramsSerializer), true);
      p.timeout = t.timeout;
      p.onreadystatechange = function () {
        if (p && p.readyState === 4 && (p.status !== 0 || p.responseURL && p.responseURL.indexOf("file:") === 0)) {
          var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null;
          var r = {
            data: t.responseType && t.responseType !== "text" ? p.response : p.responseText,
            status: p.status,
            statusText: p.statusText,
            headers: n,
            config: t,
            request: p
          };
          i(e, l, r);
          p = null;
        }
      };
      p.onabort = function () {
        if (p) {
          l(u("Request aborted", t, "ECONNABORTED", p));
          p = null;
        }
      };
      p.onerror = function () {
        l(u("Network Error", t, null, p));
        p = null;
      };
      p.ontimeout = function () {
        var e = "timeout of " + t.timeout + "ms exceeded";
        if (t.timeoutErrorMessage) {
          e = t.timeoutErrorMessage;
        }
        l(u(e, t, "ECONNABORTED", p));
        p = null;
      };
      if (r.isStandardBrowserEnv()) {
        var y = n(331);
        var b = (t.withCredentials || c(g)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : undefined;
        if (b) {
          h[t.xsrfHeaderName] = b;
        }
      }
      if ("setRequestHeader" in p) {
        r.forEach(h, function (t, e) {
          if (f === undefined && e.toLowerCase() === "content-type") {
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
            l(t);
            p = null;
          }
        });
      }
      if (f === undefined) {
        f = null;
      }
      p.send(f);
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(325);
  t.exports = function (t, e, n, i, o) {
    var a = new Error(t);
    return r(a, e, n, i, o);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  t.exports = function (t, e) {
    e = e || {};
    var n = {};
    var i = ["url", "method", "params", "data"];
    var o = ["headers", "auth", "proxy"];
    var a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
    r.forEach(i, function (t) {
      if (e[t] !== undefined) {
        n[t] = e[t];
      }
    });
    r.forEach(o, function (i) {
      if (r.isObject(e[i])) {
        n[i] = r.deepMerge(t[i], e[i]);
      } else if (e[i] !== undefined) {
        n[i] = e[i];
      } else if (r.isObject(t[i])) {
        n[i] = r.deepMerge(t[i]);
      } else if (t[i] !== undefined) {
        n[i] = t[i];
      }
    });
    r.forEach(a, function (r) {
      if (e[r] !== undefined) {
        n[r] = e[r];
      } else if (t[r] !== undefined) {
        n[r] = t[r];
      }
    });
    var s = i.concat(o).concat(a);
    var c = Object.keys(e).filter(function (t) {
      return s.indexOf(t) === -1;
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
    var i;
    var o;
    var a;
    var s;
    var c;
    var u = {}.hasOwnProperty;
    c = n(57).isPlainObject;
    i = n(234);
    r = n(337);
    o = n(35);
    e = n(15);
    s = n(238);
    a = n(182);
    t.exports = function (t) {
      function n(t) {
        n.__super__.constructor.call(this, null);
        this.name = "#document";
        this.type = e.Document;
        this.documentURI = null;
        this.domConfig = new r();
        t ||= {};
        t.writer ||= new a();
        this.options = t;
        this.stringify = new s(t);
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
        value: new i()
      });
      Object.defineProperty(n.prototype, "doctype", {
        get: function () {
          var t;
          var n;
          var r;
          var i;
          n = 0;
          r = (i = this.children).length;
          for (; n < r; n++) {
            if ((t = i[n]).type === e.DocType) {
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
    }(o);
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    e = n(15);
    n(35);
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
    var i = {}.hasOwnProperty;
    r = n(35);
    e = n(15);
    t.exports = function (t) {
      function n(t) {
        n.__super__.constructor.call(this, t);
        this.type = e.Dummy;
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
        var i;
        var o;
        this.assertLegalName = e(this.assertLegalName, this);
        this.assertLegalChar = e(this.assertLegalChar, this);
        t ||= {};
        this.options = t;
        this.options.version ||= "1.0";
        for (r in i = t.stringify || {}) {
          if (n.call(i, r)) {
            o = i[r];
            this[r] = o;
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
    var i;
    var o = {}.hasOwnProperty;
    i = n(57).assign;
    e = n(15);
    n(173);
    n(174);
    n(171);
    n(172);
    n(169);
    n(179);
    n(180);
    n(181);
    n(237);
    n(175);
    n(177);
    n(176);
    n(178);
    r = n(155);
    t.exports = function () {
      function t(t) {
        var e;
        var n;
        var r;
        t ||= {};
        this.options = t;
        for (e in n = t.writer || {}) {
          if (o.call(n, e)) {
            r = n[e];
            this["_" + e] = this[e];
            this[e] = r;
          }
        }
      }
      t.prototype.filterOptions = function (t) {
        var e;
        t ||= {};
        t = i({}, this.options, t);
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
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n) + "<![CDATA[";
        e.state = r.InsideTag;
        i += t.value;
        e.state = r.CloseTag;
        i += "]]>" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.comment = function (t, e, n) {
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n) + "<!-- ";
        e.state = r.InsideTag;
        i += t.value;
        e.state = r.CloseTag;
        i += " -->" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.declaration = function (t, e, n) {
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n) + "<?xml";
        e.state = r.InsideTag;
        i += " version=\"" + t.version + "\"";
        if (t.encoding != null) {
          i += " encoding=\"" + t.encoding + "\"";
        }
        if (t.standalone != null) {
          i += " standalone=\"" + t.standalone + "\"";
        }
        e.state = r.CloseTag;
        i += e.spaceBeforeSlash + "?>";
        i += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.docType = function (t, e, n) {
        var i;
        var o;
        var a;
        var s;
        var c;
        n ||= 0;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        s = this.indent(t, e, n);
        s += "<!DOCTYPE " + t.root().name;
        if (t.pubID && t.sysID) {
          s += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
        } else if (t.sysID) {
          s += " SYSTEM \"" + t.sysID + "\"";
        }
        if (t.children.length > 0) {
          s += " [";
          s += this.endline(t, e, n);
          e.state = r.InsideTag;
          o = 0;
          a = (c = t.children).length;
          for (; o < a; o++) {
            i = c[o];
            s += this.writeChildNode(i, e, n + 1);
          }
          e.state = r.CloseTag;
          s += "]";
        }
        e.state = r.CloseTag;
        s += e.spaceBeforeSlash + ">";
        s += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return s;
      };
      t.prototype.element = function (t, n, i) {
        var a;
        var s;
        var c;
        var u;
        var l;
        var f;
        var h;
        var p;
        var d;
        var m;
        var g;
        var y;
        var b;
        var w;
        i ||= 0;
        m = false;
        g = "";
        this.openNode(t, n, i);
        n.state = r.OpenTag;
        g += this.indent(t, n, i) + "<" + t.name;
        for (d in y = t.attribs) {
          if (o.call(y, d)) {
            a = y[d];
            g += this.attribute(a, n, i);
          }
        }
        u = (c = t.children.length) === 0 ? null : t.children[0];
        if (c === 0 || t.children.every(function (t) {
          return (t.type === e.Text || t.type === e.Raw) && t.value === "";
        })) {
          if (n.allowEmpty) {
            g += ">";
            n.state = r.CloseTag;
            g += "</" + t.name + ">" + this.endline(t, n, i);
          } else {
            n.state = r.CloseTag;
            g += n.spaceBeforeSlash + "/>" + this.endline(t, n, i);
          }
        } else if (!n.pretty || c !== 1 || u.type !== e.Text && u.type !== e.Raw || u.value == null) {
          if (n.dontPrettyTextNodes) {
            l = 0;
            h = (b = t.children).length;
            for (; l < h; l++) {
              if (((s = b[l]).type === e.Text || s.type === e.Raw) && s.value != null) {
                n.suppressPrettyCount++;
                m = true;
                break;
              }
            }
          }
          g += ">" + this.endline(t, n, i);
          n.state = r.InsideTag;
          f = 0;
          p = (w = t.children).length;
          for (; f < p; f++) {
            s = w[f];
            g += this.writeChildNode(s, n, i + 1);
          }
          n.state = r.CloseTag;
          g += this.indent(t, n, i) + "</" + t.name + ">";
          if (m) {
            n.suppressPrettyCount--;
          }
          g += this.endline(t, n, i);
          n.state = r.None;
        } else {
          g += ">";
          n.state = r.InsideTag;
          n.suppressPrettyCount++;
          m = true;
          g += this.writeChildNode(u, n, i + 1);
          n.suppressPrettyCount--;
          m = false;
          n.state = r.CloseTag;
          g += "</" + t.name + ">" + this.endline(t, n, i);
        }
        this.closeNode(t, n, i);
        return g;
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
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n) + "<?";
        e.state = r.InsideTag;
        i += t.target;
        if (t.value) {
          i += " " + t.value;
        }
        e.state = r.CloseTag;
        i += e.spaceBeforeSlash + "?>";
        i += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.raw = function (t, e, n) {
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n);
        e.state = r.InsideTag;
        i += t.value;
        e.state = r.CloseTag;
        i += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.text = function (t, e, n) {
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n);
        e.state = r.InsideTag;
        i += t.value;
        e.state = r.CloseTag;
        i += this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.dtdAttList = function (t, e, n) {
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n) + "<!ATTLIST";
        e.state = r.InsideTag;
        i += " " + t.elementName + " " + t.attributeName + " " + t.attributeType;
        if (t.defaultValueType !== "#DEFAULT") {
          i += " " + t.defaultValueType;
        }
        if (t.defaultValue) {
          i += " \"" + t.defaultValue + "\"";
        }
        e.state = r.CloseTag;
        i += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.dtdElement = function (t, e, n) {
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n) + "<!ELEMENT";
        e.state = r.InsideTag;
        i += " " + t.name + " " + t.value;
        e.state = r.CloseTag;
        i += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.dtdEntity = function (t, e, n) {
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n) + "<!ENTITY";
        e.state = r.InsideTag;
        if (t.pe) {
          i += " %";
        }
        i += " " + t.name;
        if (t.value) {
          i += " \"" + t.value + "\"";
        } else {
          if (t.pubID && t.sysID) {
            i += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
          } else if (t.sysID) {
            i += " SYSTEM \"" + t.sysID + "\"";
          }
          if (t.nData) {
            i += " NDATA " + t.nData;
          }
        }
        e.state = r.CloseTag;
        i += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
      };
      t.prototype.dtdNotation = function (t, e, n) {
        var i;
        this.openNode(t, e, n);
        e.state = r.OpenTag;
        i = this.indent(t, e, n) + "<!NOTATION";
        e.state = r.InsideTag;
        i += " " + t.name;
        if (t.pubID && t.sysID) {
          i += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
        } else if (t.pubID) {
          i += " PUBLIC \"" + t.pubID + "\"";
        } else if (t.sysID) {
          i += " SYSTEM \"" + t.sysID + "\"";
        }
        e.state = r.CloseTag;
        i += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
        e.state = r.None;
        this.closeNode(t, e, n);
        return i;
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
    var i = n(157);
    t.exports = w;
    var o;
    var a = n(240);
    w.ReadableState = b;
    n(156).EventEmitter;
    function s(t, e) {
      return t.listeners(e).length;
    }
    var c = n(242);
    var u = n(184).Buffer;
    var l = e.Uint8Array || function () {};
    var f = Object.create(n(108));
    f.inherits = n(91);
    var h = n(349);
    var p = undefined;
    p = h && h.debuglog ? h.debuglog("stream") : function () {};
    var d;
    var m = n(350);
    var g = n(243);
    f.inherits(w, c);
    var y = ["error", "close", "destroy", "pause", "resume"];
    function b(t, e) {
      t = t || {};
      var r = e instanceof (o = o || n(80));
      this.objectMode = !!t.objectMode;
      if (r) {
        this.objectMode = this.objectMode || !!t.readableObjectMode;
      }
      var i = t.highWaterMark;
      var a = t.readableHighWaterMark;
      var s = this.objectMode ? 16 : 16384;
      this.highWaterMark = i || i === 0 ? i : r && (a || a === 0) ? a : s;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new m();
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
        d ||= n(186).StringDecoder;
        this.decoder = new d(t.encoding);
        this.encoding = t.encoding;
      }
    }
    function w(t) {
      o = o || n(80);
      if (!(this instanceof w)) {
        return new w(t);
      }
      this._readableState = new b(t, this);
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
    function v(t, e, n, r, i) {
      var o;
      var a = t._readableState;
      if (e === null) {
        a.reading = false;
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
          x(t);
        })(t, a);
      } else {
        if (!i) {
          o = function (t, e) {
            var n;
            r = e;
            if (!u.isBuffer(r) && !(r instanceof l) && typeof e != "string" && e !== undefined && !t.objectMode) {
              n = new TypeError("Invalid non-string/buffer chunk");
            }
            var r;
            return n;
          }(a, e);
        }
        if (o) {
          t.emit("error", o);
        } else if (a.objectMode || e && e.length > 0) {
          if (typeof e != "string" && !a.objectMode && Object.getPrototypeOf(e) !== u.prototype) {
            e = function (t) {
              return u.from(t);
            }(e);
          }
          if (r) {
            if (a.endEmitted) {
              t.emit("error", new Error("stream.unshift() after end event"));
            } else {
              _(t, a, e, true);
            }
          } else if (a.ended) {
            t.emit("error", new Error("stream.push() after EOF"));
          } else {
            a.reading = false;
            if (a.decoder && !n) {
              e = a.decoder.write(e);
              if (a.objectMode || e.length !== 0) {
                _(t, a, e, false);
              } else {
                I(t, a);
              }
            } else {
              _(t, a, e, false);
            }
          }
        } else if (!r) {
          a.reading = false;
        }
      }
      return function (t) {
        return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
      }(a);
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
          x(t);
        }
      }
      I(t, e);
    }
    Object.defineProperty(w.prototype, "destroyed", {
      get: function () {
        return this._readableState !== undefined && this._readableState.destroyed;
      },
      set: function (t) {
        if (this._readableState) {
          this._readableState.destroyed = t;
        }
      }
    });
    w.prototype.destroy = g.destroy;
    w.prototype._undestroy = g.undestroy;
    w.prototype._destroy = function (t, e) {
      this.push(null);
      e(t);
    };
    w.prototype.push = function (t, e) {
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
      return v(this, t, e, false, n);
    };
    w.prototype.unshift = function (t) {
      return v(this, t, null, true, false);
    };
    w.prototype.isPaused = function () {
      return this._readableState.flowing === false;
    };
    w.prototype.setEncoding = function (t) {
      d ||= n(186).StringDecoder;
      this._readableState.decoder = new d(t);
      this._readableState.encoding = t;
      return this;
    };
    function E(t, e) {
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
    function x(t) {
      var e = t._readableState;
      e.needReadable = false;
      if (!e.emittedReadable) {
        p("emitReadable", e.flowing);
        e.emittedReadable = true;
        if (e.sync) {
          i.nextTick(T, t);
        } else {
          T(t);
        }
      }
    }
    function T(t) {
      p("emit readable");
      t.emit("readable");
      N(t);
    }
    function I(t, e) {
      if (!e.readingMore) {
        e.readingMore = true;
        i.nextTick(O, t, e);
      }
    }
    function O(t, e) {
      for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p("maybeReadMore read 0"), t.read(0), n !== e.length);) {
        n = e.length;
      }
      e.readingMore = false;
    }
    function S(t) {
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
                var i = n.data;
                t -= i.length;
                while (n = n.next) {
                  var o = n.data;
                  var a = t > o.length ? o.length : t;
                  if (a === o.length) {
                    i += o;
                  } else {
                    i += o.slice(0, t);
                  }
                  if ((t -= a) === 0) {
                    if (a === o.length) {
                      ++r;
                      if (n.next) {
                        e.head = n.next;
                      } else {
                        e.head = e.tail = null;
                      }
                    } else {
                      e.head = n;
                      n.data = o.slice(a);
                    }
                    break;
                  }
                  ++r;
                }
                e.length -= r;
                return i;
              }(t, e) : function (t, e) {
                var n = u.allocUnsafe(t);
                var r = e.head;
                var i = 1;
                r.data.copy(n);
                t -= r.data.length;
                while (r = r.next) {
                  var o = r.data;
                  var a = t > o.length ? o.length : t;
                  o.copy(n, n.length - t, 0, a);
                  if ((t -= a) === 0) {
                    if (a === o.length) {
                      ++i;
                      if (r.next) {
                        e.head = r.next;
                      } else {
                        e.head = e.tail = null;
                      }
                    } else {
                      e.head = r;
                      r.data = o.slice(a);
                    }
                    break;
                  }
                  ++i;
                }
                e.length -= i;
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
    function C(t) {
      var e = t._readableState;
      if (e.length > 0) {
        throw new Error("\"endReadable()\" called on non-empty stream");
      }
      if (!e.endEmitted) {
        e.ended = true;
        i.nextTick(D, e, t);
      }
    }
    function D(t, e) {
      if (!t.endEmitted && t.length === 0) {
        t.endEmitted = true;
        e.readable = false;
        e.emit("end");
      }
    }
    function k(t, e) {
      for (var n = 0, r = t.length; n < r; n++) {
        if (t[n] === e) {
          return n;
        }
      }
      return -1;
    }
    w.prototype.read = function (t) {
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
          C(this);
        } else {
          x(this);
        }
        return null;
      }
      if ((t = E(t, e)) === 0 && e.ended) {
        if (e.length === 0) {
          C(this);
        }
        return null;
      }
      var r;
      var i = e.needReadable;
      p("need readable", i);
      if (e.length === 0 || e.length - t < e.highWaterMark) {
        p("length less than watermark", i = true);
      }
      if (e.ended || e.reading) {
        p("reading or ended", i = false);
      } else if (i) {
        p("do read");
        e.reading = true;
        e.sync = true;
        if (e.length === 0) {
          e.needReadable = true;
        }
        this._read(e.highWaterMark);
        e.sync = false;
        if (!e.reading) {
          t = E(n, e);
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
          C(this);
        }
      }
      if (r !== null) {
        this.emit("data", r);
      }
      return r;
    };
    w.prototype._read = function (t) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    w.prototype.pipe = function (t, e) {
      var n = this;
      var o = this._readableState;
      switch (o.pipesCount) {
        case 0:
          o.pipes = t;
          break;
        case 1:
          o.pipes = [o.pipes, t];
          break;
        default:
          o.pipes.push(t);
      }
      o.pipesCount += 1;
      p("pipe count=%d opts=%j", o.pipesCount, e);
      var c = (!e || e.end !== false) && t !== r.stdout && t !== r.stderr ? l : w;
      function u(e, r) {
        p("onunpipe");
        if (e === n && r && r.hasUnpiped === false) {
          r.hasUnpiped = true;
          p("cleanup");
          t.removeListener("close", y);
          t.removeListener("finish", b);
          t.removeListener("drain", f);
          t.removeListener("error", g);
          t.removeListener("unpipe", u);
          n.removeListener("end", l);
          n.removeListener("end", w);
          n.removeListener("data", m);
          h = true;
          if (!!o.awaitDrain && (!t._writableState || !!t._writableState.needDrain)) {
            f();
          }
        }
      }
      function l() {
        p("onend");
        t.end();
      }
      if (o.endEmitted) {
        i.nextTick(c);
      } else {
        n.once("end", c);
      }
      t.on("unpipe", u);
      var f = function (t) {
        return function () {
          var e = t._readableState;
          p("pipeOnDrain", e.awaitDrain);
          if (e.awaitDrain) {
            e.awaitDrain--;
          }
          if (e.awaitDrain === 0 && s(t, "data")) {
            e.flowing = true;
            N(t);
          }
        };
      }(n);
      t.on("drain", f);
      var h = false;
      var d = false;
      function m(e) {
        p("ondata");
        d = false;
        if (t.write(e) === false && !d) {
          if ((o.pipesCount === 1 && o.pipes === t || o.pipesCount > 1 && k(o.pipes, t) !== -1) && !h) {
            p("false write response, pause", n._readableState.awaitDrain);
            n._readableState.awaitDrain++;
            d = true;
          }
          n.pause();
        }
      }
      function g(e) {
        p("onerror", e);
        w();
        t.removeListener("error", g);
        if (s(t, "error") === 0) {
          t.emit("error", e);
        }
      }
      function y() {
        t.removeListener("finish", b);
        w();
      }
      function b() {
        p("onfinish");
        t.removeListener("close", y);
        w();
      }
      function w() {
        p("unpipe");
        n.unpipe(t);
      }
      n.on("data", m);
      (function (t, e, n) {
        if (typeof t.prependListener == "function") {
          return t.prependListener(e, n);
        }
        if (t._events && t._events[e]) {
          if (a(t._events[e])) {
            t._events[e].unshift(n);
          } else {
            t._events[e] = [n, t._events[e]];
          }
        } else {
          t.on(e, n);
        }
      })(t, "error", g);
      t.once("close", y);
      t.once("finish", b);
      t.emit("pipe", n);
      if (!o.flowing) {
        p("pipe resume");
        n.resume();
      }
      return t;
    };
    w.prototype.unpipe = function (t) {
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
        var i = e.pipesCount;
        e.pipes = null;
        e.pipesCount = 0;
        e.flowing = false;
        for (var o = 0; o < i; o++) {
          r[o].emit("unpipe", this, n);
        }
        return this;
      }
      var a = k(e.pipes, t);
      if (a !== -1) {
        e.pipes.splice(a, 1);
        e.pipesCount -= 1;
        if (e.pipesCount === 1) {
          e.pipes = e.pipes[0];
        }
        t.emit("unpipe", this, n);
      }
      return this;
    };
    w.prototype.on = function (t, e) {
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
              x(this);
            }
          } else {
            i.nextTick(S, this);
          }
        }
      }
      return n;
    };
    w.prototype.addListener = w.prototype.on;
    w.prototype.resume = function () {
      var t = this._readableState;
      if (!t.flowing) {
        p("resume");
        t.flowing = true;
        (function (t, e) {
          if (!e.resumeScheduled) {
            e.resumeScheduled = true;
            i.nextTick(A, t, e);
          }
        })(this, t);
      }
      return this;
    };
    w.prototype.pause = function () {
      p("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        p("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    w.prototype.wrap = function (t) {
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
      t.on("data", function (i) {
        if (!(p("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && i == null)) {
          if (n.objectMode || i && i.length) {
            if (!e.push(i)) {
              r = true;
              t.pause();
            }
          }
        }
      });
      for (var i in t) {
        if (this[i] === undefined && typeof t[i] == "function") {
          this[i] = function (e) {
            return function () {
              return t[e].apply(t, arguments);
            };
          }(i);
        }
      }
      for (var o = 0; o < y.length; o++) {
        t.on(y[o], this.emit.bind(this, y[o]));
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
    Object.defineProperty(w.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._readableState.highWaterMark;
      }
    });
    w._fromList = j;
  }).call(this, n(25), n(94));
}, function (t, e, n) {
  t.exports = n(156).EventEmitter;
}, function (t, e, n) {
  "use strict";

  var r = n(157);
  function i(t, e) {
    t.emit("error", e);
  }
  t.exports = {
    destroy: function (t, e) {
      var n = this;
      var o = this._readableState && this._readableState.destroyed;
      var a = this._writableState && this._writableState.destroyed;
      if (o || a) {
        if (e) {
          e(t);
        } else if (!!t && (!this._writableState || !this._writableState.errorEmitted)) {
          r.nextTick(i, this, t);
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
            r.nextTick(i, n, t);
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
    var i = Function.prototype.apply;
    function o(t, e) {
      this._id = t;
      this._clearFn = e;
    }
    e.setTimeout = function () {
      return new o(i.call(setTimeout, r, arguments), clearTimeout);
    };
    e.setInterval = function () {
      return new o(i.call(setInterval, r, arguments), clearInterval);
    };
    e.clearTimeout = e.clearInterval = function (t) {
      if (t) {
        t.close();
      }
    };
    o.prototype.unref = o.prototype.ref = function () {};
    o.prototype.close = function () {
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
    n(352);
    e.setImmediate = typeof self != "undefined" && self.setImmediate || t !== undefined && t.setImmediate || this && this.setImmediate;
    e.clearImmediate = typeof self != "undefined" && self.clearImmediate || t !== undefined && t.clearImmediate || this && this.clearImmediate;
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  t.exports = a;
  var r = n(80);
  var i = Object.create(n(108));
  function o(t, e) {
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
    var i = this._readableState;
    i.reading = false;
    if (i.needReadable || i.length < i.highWaterMark) {
      this._read(i.highWaterMark);
    }
  }
  function a(t) {
    if (!(this instanceof a)) {
      return new a(t);
    }
    r.call(this, t);
    this._transformState = {
      afterTransform: o.bind(this),
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
    this.on("prefinish", s);
  }
  function s() {
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
  i.inherits = n(91);
  i.inherits(a, r);
  a.prototype.push = function (t, e) {
    this._transformState.needTransform = false;
    return r.prototype.push.call(this, t, e);
  };
  a.prototype._transform = function (t, e, n) {
    throw new Error("_transform() is not implemented");
  };
  a.prototype._write = function (t, e, n) {
    var r = this._transformState;
    r.writecb = n;
    r.writechunk = t;
    r.writeencoding = e;
    if (!r.transforming) {
      var i = this._readableState;
      if (r.needTransform || i.needReadable || i.length < i.highWaterMark) {
        this._read(i.highWaterMark);
      }
    }
  };
  a.prototype._read = function (t) {
    var e = this._transformState;
    if (e.writechunk !== null && e.writecb && !e.transforming) {
      e.transforming = true;
      this._transform(e.writechunk, e.writeencoding, e.afterTransform);
    } else {
      e.needTransform = true;
    }
  };
  a.prototype._destroy = function (t, e) {
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

  var r = n(44);
  var i = n(213);
  var o = n(103);
  var a = n(158);
  var s = n(52);
  var c = n(32);
  var u = n(84);
  var l = n(371);
  var f = n(372);
  var h = n(30);
  var p = n(29);
  var d = n(17);
  var m = n(159);
  var g = n(373);
  var y = n(105);
  var b = n(65);
  var w = d("matchAll");
  var v = y.set;
  var _ = y.getterFor("RegExp String Iterator");
  var E = RegExp.prototype;
  var x = E.exec;
  var T = "".matchAll;
  var I = !!T && !p(function () {
    "a".matchAll(/./);
  });
  var O = i(function (t, e, n, r) {
    v(this, {
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
      return x.call(t, e);
    }(e, n);
    if (r === null) {
      return {
        value: undefined,
        done: t.done = true
      };
    } else if (t.global) {
      if (String(r[0]) == "") {
        e.lastIndex = g(n, a(e.lastIndex), t.unicode);
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
  function S(t) {
    var e;
    var n;
    var r;
    var i;
    var o;
    var s;
    var u = c(this);
    var l = String(t);
    e = m(u, RegExp);
    if ((n = u.flags) === undefined && u instanceof RegExp && !("flags" in E)) {
      n = f.call(u);
    }
    r = n === undefined ? "" : String(n);
    i = new e(e === RegExp ? u.source : u, r);
    o = !!~r.indexOf("g");
    s = !!~r.indexOf("u");
    i.lastIndex = a(u.lastIndex);
    return new O(i, l, o, s);
  }
  r({
    target: "String",
    proto: true,
    forced: I
  }, {
    matchAll: function (t) {
      var e;
      var n;
      var r;
      var i = o(this);
      if (t != null) {
        if (l(t) && !~String(o("flags" in E ? t.flags : f.call(t))).indexOf("g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (I) {
          return T.apply(i, arguments);
        }
        if ((n = t[w]) === undefined && b && u(t) == "RegExp") {
          n = S;
        }
        if (n != null) {
          return s(n).call(t, i);
        }
      } else if (I) {
        return T.apply(i, arguments);
      }
      e = String(i);
      r = new RegExp(t, "g");
      if (b) {
        return S.call(r, e);
      } else {
        return r[w](e);
      }
    }
  });
  if (!b && !(w in E)) {
    h(E, w, S);
  }
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return o;
  });
  n(7);
  n(19);
  var r = n(0);
  var i = n(250);
  function o(t) {
    return fetch(function (t) {
      return r.f + "/mail/feed/atom?zx=" + encodeURIComponent(t);
    }(t)).then(t => {
      if (!t.ok) {
        throw new Error("response not ok");
      }
      return t.text();
    }).then(async t => {
      const e = (await i.parseStringPromise(t)).feed;
      let n = e.title[0];
      if (n) {
        try {
          n = /(\w+)@(\w+\.\w+)/.exec(n)[0];
        } catch (t) {}
      }
      const r = parseInt(e.fullcount, 10);
      const o = e.entry || [];
      const a = [];
      let s = -1;
      o.forEach(t => {
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
          s = Math.max(s, e.issued);
        }
        a.push(e);
      });
      return {
        count: r,
        account: n,
        lastIssuedTime: s,
        emails: a
      };
    }).catch(t => {
      throw t;
    });
  }
}, function (t, e, n) {
  var r = n(220);
  var i = n(377);
  var o = n(378);
  var a = r ? r.toStringTag : undefined;
  t.exports = function (t) {
    if (t == null) {
      if (t === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else if (a && a in Object(t)) {
      return i(t);
    } else {
      return o(t);
    }
  };
}, function (t, e, n) {
  (function () {
    "use strict";

    var t;
    var r;
    var i;
    var o;
    var a = {}.hasOwnProperty;
    r = n(168);
    t = n(335);
    i = n(344);
    o = n(246);
    e.defaults = r.defaults;
    e.processors = o;
    e.ValidationError = function (t) {
      function e(t) {
        this.message = t;
      }
      (function (t, e) {
        for (var n in e) {
          if (a.call(e, n)) {
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
    e.Parser = i.Parser;
    e.parseString = i.parseString;
    e.parseStringPromise = i.parseStringPromise;
  }).call(this);
}, function (t, e, n) {
  "use strict";

  n.d(e, "j", function () {
    return s;
  });
  n.d(e, "a", function () {
    return c;
  });
  n.d(e, "n", function () {
    return f;
  });
  n.d(e, "g", function () {
    return h;
  });
  n.d(e, "f", function () {
    return p;
  });
  n.d(e, "e", function () {
    return d;
  });
  n.d(e, "d", function () {
    return m;
  });
  n.d(e, "c", function () {
    return g;
  });
  n.d(e, "b", function () {
    return y;
  });
  n.d(e, "p", function () {
    return w;
  });
  n.d(e, "h", function () {
    return v;
  });
  n.d(e, "m", function () {
    return _;
  });
  n.d(e, "o", function () {
    return E;
  });
  n.d(e, "i", function () {
    return x;
  });
  n.d(e, "l", function () {
    return T;
  });
  n.d(e, "k", function () {
    return I;
  });
  var r = n(6);
  var i = n(0);
  var o = n(51);
  var a = n(36);
  const s = {
    name: Object(r.i18n)("search"),
    uuid: "dd3af9cc97ad7de8984baaf59514bb52",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/mychromesearch.png",
    desc: "",
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://www.google.com/search?q="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://www.google.com/search?tbm=isch&q="
    }, {
      name: Object(r.i18n)("news"),
      url: "https://www.google.com/search?tbm=nws&q="
    }, {
      name: Object(r.i18n)("videos"),
      url: "https://www.google.com/search?tbm=vid&q="
    }, {
      name: Object(r.i18n)("map"),
      url: "https://www.google.com/maps/preview?q="
    }]
  };
  const c = {
    name: Object(r.i18n)("baidu"),
    uuid: "0c47016a8cd2d631bc618d4f3a741335",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png",
    desc: Object(r.i18n)("most_used_in_chinese"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://www.baidu.com/s?tn=75144485_dg&ch=3&ie=utf-8&wd="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://image.baidu.com/search/index?isource=infinity&iname=baidu&tn=baiduimage&word="
    }, {
      name: Object(r.i18n)("news"),
      url: "https://news.baidu.com/ns?isource=infinity&iname=baidu&tn=news&ie=utf-8&word="
    }, {
      name: Object(r.i18n)("videos"),
      url: "https://video.baidu.com/v?isource=infinity&iname=baidu&ie=utf-8&word="
    }, {
      name: Object(r.i18n)("map"),
      url: "http://map.baidu.com/?isource=infinity&iname=baidu&newmap=1&ie=utf-8&s=s%26wd%3D"
    }]
  };
  const u = {
    name: Object(r.i18n)("google"),
    uuid: "a22dcc25c75de3f58cb518e32c576865",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png",
    desc: Object(r.i18n)("google_desc"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://www.google.com/search?q="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://www.google.com/search?isource=infinity&iname=google&tbm=isch&q="
    }, {
      name: Object(r.i18n)("news"),
      url: "https://www.google.com/search?isource=infinity&iname=google&tbm=nws&q="
    }, {
      name: Object(r.i18n)("videos"),
      url: "https://www.google.com/search?isource=infinity&iname=google&tbm=vid&q="
    }, {
      name: Object(r.i18n)("map"),
      url: "https://www.google.com/maps/preview?isource=infinity&iname=google&q="
    }]
  };
  const l = {
    name: Object(r.i18n)("bing"),
    uuid: "5a6afaa65c95a841f6149c4e1591a637",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png",
    desc: Object(r.i18n)("bing_desc"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://cn.bing.com/search?isource=infinity&iname=bing&itype=web&q="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://cn.bing.com/images/search?isource=infinity&iname=bing&q="
    }, {
      name: Object(r.i18n)("news"),
      url: "https://global.bing.com/news/search?isource=infinity&iname=bing&q="
    }, {
      name: Object(r.i18n)("videos"),
      url: "https://cn.bing.com/videos/search?isource=infinity&iname=bing&q="
    }, {
      name: Object(r.i18n)("map"),
      url: "https://www.bing.com/ditu/?isource=infinity&iname=bing&q="
    }]
  };
  const f = [c, l, {
    name: Object(r.i18n)("yahoo"),
    uuid: "C26068F55492EF9E93E05E34A3B31139",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/yahoo.png",
    desc: Object(r.i18n)("yahoo_desc"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://search.yahoo.com/search?isource=infinity&iname=yahoo&itype=web&p="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://images.search.yahoo.com/search?isource=infinity&iname=yahoo&p="
    }, {
      name: Object(r.i18n)("news"),
      url: "https://news.search.yahoo.com/search?isource=infinity&iname=yahoo&p="
    }, {
      name: Object(r.i18n)("videos"),
      url: "https://video.search.yahoo.com/search/video?isource=infinity&iname=yahoo&p="
    }]
  }, {
    name: Object(r.i18n)("yandex"),
    uuid: "f33155f8c51a36fb76dad667dec7e44f",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/yandex.png",
    desc: Object(r.i18n)("yandex_desc"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://yandex.com/search/?isource=infinity&itype=web&iname=yandex&text="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://yandex.com/images/search?isource=infinity&iname=yandex&text="
    }, {
      name: Object(r.i18n)("news"),
      url: "https://news.yandex.com/yandsearch?isource=infinity&iname=yandex&text="
    }, {
      name: Object(r.i18n)("videos"),
      url: "https://yandex.com/video/search?isource=infinity&iname=yandex&text="
    }]
  }, {
    name: Object(r.i18n)("duckduckgo"),
    uuid: "569CD6FB4F6502B918DB8B30EC235384",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/duckduckgo.png",
    desc: Object(r.i18n)("duckduckgo_desc"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://duckduckgo.com/?isource=infinity&iname=duckduckgo&itype=web&q="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://duckduckgo.com/?isource=infinity&iname=duckduckgo&t=h_&dbexp=a&iax=1&ia=images&q="
    }, {
      name: Object(r.i18n)("news"),
      url: "https://duckduckgo.com/?isource=infinity&iname=duckduckgo&t=h_&dbexp=a&ia=news&q="
    }, {
      name: Object(r.i18n)("videos"),
      url: "https://duckduckgo.com/?isource=infinity&iname=duckduckgo&t=h_&iax=1&ia=videos&q="
    }]
  }, {
    name: Object(r.i18n)("n_360"),
    uuid: "70adaba7374f6089aca0374dea85df00",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/360.png",
    desc: Object(r.i18n)("360_desc"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://www.so.com/s?src=lm&ls=sm2054017&lm_extend=ctype:4&q="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://image.so.com/i?isource=infinity&iname=360&src=infinitynewtab&q="
    }, {
      name: Object(r.i18n)("news"),
      url: "http://news.so.com/ns?isource=infinity&iname=360&src=infinitynewtab&q="
    }, {
      name: Object(r.i18n)("videos"),
      url: "http://video.so.com/v?isource=infinity&iname=360&src=infinitynewtab&q="
    }]
  }, {
    name: Object(r.i18n)("sougou"),
    uuid: "a3e908082e31a92396970f8b58583863",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/sougou.png",
    desc: Object(r.i18n)("sougou_desc"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://www.sogou.com/sogou?isource=infinity&iname=sogou&itype=web&pid=sogou-site-7985672db979303a&query="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://pic.sogou.com/pics?isource=infinity&iname=sogou&ie=utf8&query="
    }, {
      name: Object(r.i18n)("news"),
      url: "http://news.sogou.com/news?isource=infinity&iname=sogou&ie=utf8&query="
    }, {
      name: Object(r.i18n)("videos"),
      url: "http://v.sogou.com/v?isource=infinity&iname=sogou&ie=utf8&query="
    }, {
      name: Object(r.i18n)("wechat"),
      url: "http://weixin.sogou.com/weixin?isource=infinity&iname=sogou&type=2&ie=utf8&query="
    }]
  }, {
    name: Object(r.i18n)("yarndex_ru"),
    uuid: "ff1ca8c4e6661d52440b7f2e15cb6a13",
    logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/russia-yandex.png",
    desc: Object(r.i18n)("yandex_desc"),
    types: [{
      name: Object(r.i18n)("html"),
      url: "https://yandex.ru/search/?text="
    }, {
      name: Object(r.i18n)("photos"),
      url: "https://yandex.ru/images/search?text="
    }, {
      name: Object(r.i18n)("news"),
      url: "https://news.yandex.ru/yandsearch?text="
    }, {
      name: Object(r.i18n)("videos"),
      url: "https://yandex.ru/video/search?text="
    }]
  }];
  const h = "6dcbbe4e9dc6ef2fd68da7d8befd117c";
  const p = "https://www.infinitynewtab.com/jd.pro.html";
  const d = "https://homepage.inftab.com/jd.pro.html";
  const m = "5001b4d70b1c62f14859b51a6e8abd6f";
  const g = "https://games.infinitynewtab.com/";
  const y = "https://games.inftab.com/";
  const b = {
    "zh-CN": [{
      name: Object(r.i18n)("settings"),
      uuid: "552fa3a378b29375843fa3d021cbe129",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/9622b98e90dd4f107d23481566095b34.png",
      type: "app",
      target: "infinity://settings"
    }, {
      name: "京东商城",
      uuid: h,
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/cee009549b352def723ba09d6da4b742.png",
      type: "web",
      target: d
    }, {
      name: "天猫精选",
      uuid: "be0ab26cf4dc6239c98791f7b18b633a",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/2f301c86bb2d0efeec3d49930147157f.png",
      type: "web",
      target: "https://s.click.taobao.com/t?e=m%3D2%26s%3DV5ucSP%2F1kT4cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRBynALhehQ4RitN3%2FurF3xNWm%2FATOfjswMAKinyMfntv%2FFgqkVH8133BMlVy3qlGE2srC8Mk09eQgZss1jm63jcHtRpEUy6RPalRWTdFmFpJPwiig1bxLMnyi1UQ%2F17I10hO9fBPG8oXH%2BQH9e66Y4%3D"
    }, {
      name: "爱淘宝",
      uuid: "c34f380f9d9136fc3b4dbd32f24feea3",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/346647fb95fbac4d303c93fa0a4936d3.png",
      type: "web",
      target: "https://ai.taobao.com/?pid=mm_50570328_39070332_145428725"
    }, {
      name: "唯品会",
      uuid: "237ae8efe805e4bd741fa32f040b4571",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/150127100741.png.png",
      target: "http://click.union.vip.com/redirect.php?url=eyJjaGFuIjoiaW5maW5pdHkiLCJhZGNvZGUiOiI5dnpnMHBxYiIsInNjaGVtZWNvZGUiOiJmNWEwNWQ2NiIsInVjb2RlIjoibWQyd2dycnUifQ==",
      type: "web"
    }, {
      name: "稿定设计",
      uuid: "f0b90e0f436466b121ebcc46297cbfc1",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/f0b90e0f436466b121ebcc46297cbfc1.png",
      target: "https://www.gaoding.com/utms/6ab367adcc9945e38f24ebec652c295e ",
      type: "web"
    }, {
      name: "百度",
      uuid: "aeb990ca3978666676b1fbb811bb0dfc",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/c9f7546ad597dd7fb53e8129b6c07877.png",
      target: "https://www.baidu.com/?tn=44004473_48_oem_dg&ie=utf-8",
      type: "web"
    }, {
      name: "论文猫",
      uuid: "ebd5cc9193bde437e76de2ca1abd2121",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/ebd5cc9193bde437e76de2ca1abd2121.png",
      target: "https://papercat.pro?pic=gk2W",
      type: "web"
    }, {
      name: "携程网",
      uuid: "afe7a96e6db449e6199df118756d5672",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/1502895222082.png",
      target: "http://www.ctrip.com/?allianceid=1050724&sid=1786019",
      type: "web"
    }, {
      name: "DeepSider",
      uuid: "dbd6895d645eceb05cbcc5926952c505",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/dbd6895d645eceb05cbcc5926952c505.png",
      target: "https://deepsider.ai/?utm_source=infinity",
      type: "web"
    }, {
      name: "爱奇艺",
      uuid: "3d3a7777700d30c5f29be964835f398d",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/226c6aff617dbc253ce26d23be07c446.png",
      target: "https://www.iqiyi.com/?vfm=m_470_zhd&fv=97e6d58de4b83d39",
      type: "web"
    }, {
      name: "狐猴",
      uuid: "7e6e38a85dc4b7873d6e36ae00753142",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/7e6e38a85dc4b7873d6e36ae00753142.png",
      target: "https://www.lemurbrowser.com/app/zh/?utm_source=infinity",
      type: "web"
    }, {
      name: "Infinity Games",
      uuid: m,
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/5001b4d70b1c62f14859b51a6e8abd6f.png",
      type: "web",
      target: y
    }, {
      name: "Infinitytab",
      uuid: "bc545d7b32d3dc84c3041ca092fb2689",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/bc545d7b32d3dc84c3041ca092fb2689.png",
      type: "web",
      target: "https://www.infinitytab.com/?utm_source=extension"
    }, (i.i || i.k) && {
      name: "扩展管理",
      uuid: "194dd7b46ac16ac93becf5386f14bcca",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/194dd7b46ac16ac93becf5386f14bcca.png",
      type: "app",
      target: "infinity://extension"
    }, {
      name: "壁纸库",
      uuid: "76e8e8a1cb47ef88dc9faaf52167aa9a",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/76e8e8a1cb47ef88dc9faaf52167aa9a.png",
      type: "app",
      target: "infinity://wallpaper"
    }, i.k && {
      name: Object(r.i18n)("edge_app_store"),
      uuid: "744e63c4998c83753d7d37a4fbd3e26f",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/eeedf66223852ae037aa58284858187d.png",
      type: "web",
      target: "https://microsoftedge.microsoft.com/addons"
    }, i.n && {
      name: Object(r.i18n)("firefox_app_store"),
      uuid: "743965befe82a5255fb48dcf7b848bbb",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/7ef4532818b99d9320879c3e4979fc01.png",
      type: "web",
      target: "https://addons.mozilla.org"
    }, {
      name: "小米有品",
      uuid: "f3e3cb59c45d1bc6687b8393b4f271b1",
      bgType: "image",
      bgImage: "https://infinitypro-img.infinitynewtab.com/custom-icon/9001cf4suf1jwn7y3b7juxl0x1tpbc.png",
      target: "https://c.duomai.com/track.php?aid=4705&dm_fid=16055&euid=infinity&site_id=950780&t=https%3A%2F%2Fwww.xiaomiyoupin.com",
      type: "web"
    }, {
      name: "哔哩哔哩",
      uuid: "ae50fb1b26d79a1a7bf89b02b5d30fb1",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/d8b62f4d64bda8800b1c788cd5ba3c68.png",
      target: "http://www.bilibili.com/",
      type: "web"
    }, {
      name: "知乎",
      uuid: "86626e617258ad15b93e249c8d81a9f4",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/2b89ebe968d8cafe77a5c587daa79c7f.png",
      target: "https://www.zhihu.com/",
      type: "web"
    }, {
      name: "GitHub",
      uuid: "a23b4cf17327527ae66aad5d13f059da",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a23b4cf17327527ae66aad5d13f059da.png",
      target: "https://github.com/",
      type: "web"
    }, {
      name: "华为商城",
      uuid: "940dba4bb4740f5340b2115a90582e6b",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/940dba4bb4740f5340b2115a90582e6b.png",
      target: "https://c.duomai.com/track.php?aid=387&dm_fid=16055&euid=infinity&site_id=950780&t=https%3A%2F%2Fwww.vmall.com%2Findex.html",
      type: "web",
      bgColor: ""
    }, {
      name: "斗鱼",
      uuid: "78f61134f1b7826bd587ac290b1781e1",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/66f3d54ad9a6e62fbcb13bbf96211f67.png",
      target: "http://www.douyutv.com/",
      type: "web"
    }, {
      name: "当当网",
      uuid: "25bbf99ce3252149703a0a9b71dcd6b3",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/513b4167dd3c9bfd83f6ceae56d7bf7f.png",
      target: "http://union.dangdang.com/transfer.php?from=P-319540-infinity&amp;amp;amp;ad_type=10&amp;amp;amp;sys_id=1&amp;amp;amp;backurl=http://www.dangdang.com",
      type: "web"
    }, {
      name: "微软",
      uuid: "422f830b299a5d3a3f3c4d5a939d25bf",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/2f580fd771401efdc2118f0562e3ab45.png",
      target: "https://c.duomai.com/track.php?aid=2649&dm_fid=16052&euid=infinity&site_id=339485&t=https%3A%2F%2Fwww.microsoftstore.com.cn",
      type: "web"
    }, {
      name: "新浪微博",
      uuid: "0485f5de0396bd313ec0e4ab22080bb9",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/0f2ab700f8fff5b6e9ebc7d6a976981f.png",
      target: "http://weibo.com/",
      type: "web"
    }],
    default: [{
      uuid: "080772d54828d47e7f8ce223c66f36df",
      name: "Booking",
      target: "https://www.booking.com/index.html?aid=1267011",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/83e58c13ed40dc8393297d43d2639cce.png",
      bgType: "image",
      type: "web"
    }, {
      uuid: "66117abb3659ad746baadc8c1e0b28df",
      name: "Twitter",
      target: "https://twitter.com",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/0c7e5d8b40c38cde576595b23546cc91.png",
      bgType: "image",
      type: "web"
    }, {
      uuid: "4299970b2e054e9a39450e6f854a684c",
      name: "Amazon",
      target: "https://sovrn.co/11h5wnr",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/e67eed044bf08fbcac16a0527fcc165a.png",
      bgType: "image",
      type: "web"
    }, {
      uuid: "912ed4e109a1cde4b956fa8a1670fae2",
      name: "eBay",
      target: "https://www.ebay.com/?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339103610&customid=infinity&toolid=10001&mkevt=1",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/ebay.png",
      bgType: "image",
      type: "web"
    }, {
      name: "Youtube",
      uuid: "60e546111669c1d829f962c8831a0926",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/37d396f9975e494b10ac8696d64ebb2a.png",
      type: "web",
      target: "https://youtube.com"
    }, {
      name: "Gmail",
      uuid: "01d0a35ebb602dde4dadd63887cc2a91",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/gmail_2.png",
      type: "app",
      target: "infinity://gmail"
    }, {
      name: "AliExpress",
      uuid: "c4cbd39c0ff571475f3f4d09df79426c",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/07ec46eac62dca559954f3c21736b5c0.png",
      target: "http://s.click.aliexpress.com/e/jy3RvNn",
      type: "web"
    }, {
      name: "Settings",
      uuid: "552fa3a378b29375843fa3d021cbe129",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/9622b98e90dd4f107d23481566095b34.png",
      type: "app",
      target: "infinity://settings"
    }, {
      name: "Spotify",
      uuid: "f91b1d1670595c8e7a5459fcc32ad0d4",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/a0fdd81b4dda32d7394a9151f6d274ef.png",
      target: "https://sovrn.co/19egzal",
      type: "web"
    }, {
      name: "Walmart",
      uuid: "778bb326cdf44093d702f6f016754cec",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/150127100751.png",
      target: "https://redirect.viglink.com?key=ddac7c192269498283581986ec8a9aaa&u=https%3A%2F%2Fwww.walmart.com%2F",
      type: "web"
    }, {
      name: "Microsoft",
      uuid: "cbad4a1402d12a5574cabf9c0cc10634",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/150127092730.png",
      target: "https://sovrn.co/3to9uma",
      type: "web"
    }, {
      name: "Lemur",
      uuid: "24f02a8178e6236d22dc563857bf32f8",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/24f02a8178e6236d22dc563857bf32f8.png",
      target: "https://www.lemurbrowser.com/app/en/?utm_source=infinity",
      type: "web"
    }, {
      name: "Turbotax",
      uuid: "b170651fde3c3b89289c588266c582a3",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/b170651fde3c3b89289c588266c582a3.png",
      target: "https://sovrn.co/9mrq11x",
      type: "web"
    }, {
      name: "Samsung",
      uuid: "4f7ffdfa59a5879cba9bfd41e8b5b9f6",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/ea07e21040037300243e520d89e0e818.png",
      target: "https://sovrn.co/15mhkmf",
      type: "web"
    }, {
      name: "Alibaba",
      uuid: "8c94edee5ce4c028a2fcd80fbaed84ea",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/656ff7858665d1adcc5efeba588d5871.png",
      target: "http://www.alibaba.com/",
      type: "web"
    }, {
      name: "Wallpapers library",
      uuid: "76e8e8a1cb47ef88dc9faaf52167aa9a",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/76e8e8a1cb47ef88dc9faaf52167aa9a.png",
      type: "app",
      target: "infinity://wallpaper"
    }, i.i && {
      name: Object(r.i18n)("chrome_app_store"),
      uuid: "744e698c837a43c49fbd3e26753d7d3f",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/d2085270ca1ded965bfaac2d2a6b12dc.png",
      type: "web",
      target: "https://chrome.google.com/webstore/category/extensions"
    }, i.k && {
      name: Object(r.i18n)("edge_app_store"),
      uuid: "744e63c4998c83753d7d37a4fbd3e26f",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/eeedf66223852ae037aa58284858187d.png",
      type: "web",
      target: "https://microsoftedge.microsoft.com/addons"
    }, i.n && {
      name: Object(r.i18n)("firefox_app_store"),
      uuid: "743965befe82a5255fb48dcf7b848bbb",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/7ef4532818b99d9320879c3e4979fc01.png",
      type: "web",
      target: "https://addons.mozilla.org"
    }, {
      name: "Infinitytab",
      uuid: "bc545d7b32d3dc84c3041ca092fb2689",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/bc545d7b32d3dc84c3041ca092fb2689.png",
      type: "web",
      target: "https://www.infinitytab.com/?utm_source=extension"
    }, {
      name: "Infinity Games",
      uuid: m,
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/5001b4d70b1c62f14859b51a6e8abd6f.png",
      type: "web",
      target: y
    }, (i.i || i.k) && {
      name: "Extensions",
      uuid: "194dd7b46ac16ac93becf5386f14bcca",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/194dd7b46ac16ac93becf5386f14bcca.png",
      type: "app",
      target: "infinity://extension"
    }, {
      name: "Target",
      uuid: "cdcca78e7ecbc8c627d51cc783a4fd07",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/79c6cad0aca11ad3b7726f075d9a5371.png",
      target: "http://www.target.com",
      type: "web"
    }, {
      name: "TripAdvisor",
      uuid: "c4b68571e44bb47d16456c5182e590ee",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/9001c8a3ah8l05e5u2fqhoxf8rh9ek.png.png",
      target: "https://redirect.viglink.com?key=ddac7c192269498283581986ec8a9aaa&u=https%3A%2F%2Fwww.tripadvisor.com%2F",
      type: "web"
    }, {
      name: "Indeed",
      uuid: "69a66cfb185c3aef3539de59316d8e28",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/69a66cfb185c3aef3539de59316d8e28.png",
      target: "https://sovrn.co/o8pohng",
      type: "web"
    }, {
      name: "Hulu",
      uuid: "ae3c79247f84079e195ba1290e6c7946",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/150127092951.png",
      target: "https://sovrn.co/c6vffrc",
      type: "web"
    }, {
      name: "Lenovo",
      uuid: "04d2045593f65a947d5d8a225e2d966d",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/04d2045593f65a947d5d8a225e2d966d.png",
      target: "https://sovrn.co/1laxjon",
      type: "web"
    }, {
      name: "macys",
      uuid: "174e3ea9866bdaad35be4899a3890f5e",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/174e3ea9866bdaad35be4899a3890f5e.png",
      target: "https://sovrn.co/0qtuyb4",
      type: "web"
    }, {
      name: "Expedia",
      uuid: "0aac2322924424d864d45919527a4bd9",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/0aac2322924424d864d45919527a4bd9.png",
      target: "https://sovrn.co/1afrm3y",
      type: "web"
    }, {
      name: "Airbnb",
      uuid: "e76e90dc2b1acac991f19e82c58f5259",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/5bcf01b6d7301fd2adf4155a807262ac.png",
      target: "https://sovrn.co/l1ewazi",
      type: "web"
    }, {
      name: "AT&T",
      uuid: "e0f4649ae91a59cb296b3f266cd9eb80",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/icon/e0f4649ae91a59cb296b3f266cd9eb80.png",
      target: "https://sovrn.co/153zpbb",
      type: "web"
    }]
  };
  const w = {
    name: Object(r.i18n)("weather"),
    uuid: "eed2a9287b324510678cd5e714888e99",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/assets/weather/default.png",
    type: "app",
    bgColor: "#36B3FF",
    target: "infinity://weather"
  };
  const v = {
    name: "Infinity AI",
    uuid: "eed2a9287b324510678cd5e723788e11",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/assets/infiityai-icon.png",
    type: "app",
    target: "infinity://chatai"
  };
  const _ = t => [!a.a && i.l && v, w, {
    name: Object(r.i18n)("todos"),
    uuid: "c09f31db43d7faca5bf659fadad3967c",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/6e49210c084629259f22609980c48ecf.png",
    type: "app",
    target: "infinity://todos"
  }, {
    name: Object(r.i18n)("notes"),
    uuid: "ea5ac5d9e9e08c1d57ad413e9e38d376",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/006b88c07a2e87d5a61f3c969a70575c.png",
    type: "app",
    target: "infinity://notes"
  }, i.l && !i.r && {
    name: Object(r.i18n)("folder"),
    uuid: "folder-1gso53bkma3hh6lqtjkjpx7lyh1",
    children: [{
      name: Object(r.i18n)("bookmarks"),
      uuid: "96646a13688f5bfd0aaf4811a579aee1",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/31a36139ccf4b9b005ec55445bf833b0.png",
      type: "app",
      target: "infinity://bookmarks"
    }, {
      name: Object(r.i18n)("history"),
      uuid: "4528cef4f8d66e661cb3143af733694e",
      bgType: "image",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/history_2.png",
      type: "app",
      target: "infinity://history"
    }]
  }, ...(b[t] || b.default)].filter(t => t).reduce((t, e, n) => {
    e.id ||= "siteId-" + e.uuid;
    e.updatetime = 0;
    if (e.children) {
      e.children.forEach(t => {
        t.id = "siteId-" + t.uuid;
        t.updatetime = 0;
      });
    }
    const r = Math.floor(n / 18);
    t[r] ||= [];
    t[r].push(e);
    return t;
  }, []);
  const E = [{
    name: Object(r.i18n)("all_wallpaper_sources"),
    value: "all",
    desc: Object(r.i18n)("all_wallpaper_sources_desc"),
    img: Object(o.a)("source-all.png", true)
  }, {
    name: Object(r.i18n)("infinity_landscape_wallpaper_source"),
    value: "InfinityLandscape",
    desc: Object(r.i18n)("infinity_landscape_wallpaper_source_desc"),
    img: Object(o.a)("source-infinity-landscape.png", true)
  }, {
    name: Object(r.i18n)("infinity_comic_wallpaper_source"),
    value: "Infinity",
    desc: Object(r.i18n)("infinity_comic_wallpaper_source_desc"),
    img: Object(o.a)("source-infinity-comic.png", true)
  }, {
    name: "Bing",
    value: "bing",
    desc: Object(r.i18n)("bing_wallpaper_source_desc"),
    img: Object(o.a)("source-bing.png", true)
  }, {
    name: "Unsplash",
    value: "Unsplash",
    desc: Object(r.i18n)("unsplash_wallpaper_source_desc"),
    img: Object(o.a)("source-unsplash.png", true)
  }, {
    name: "Life Of Pix",
    value: "Life Of Pix",
    desc: Object(r.i18n)("life_of_pix_wallpaper_source_desc"),
    img: Object(o.a)("source-life-of-pix.png", true)
  }, {
    name: "MMT",
    value: "MMT",
    desc: Object(r.i18n)("mmt_wallpaper_source_desc"),
    img: Object(o.a)("source-mmt.png", true)
  }, {
    name: "Realistic Shots",
    value: "Realistic Shots",
    desc: Object(r.i18n)("realistic_shots_wallpaper_source_desc"),
    img: Object(o.a)("source-realistic-shots.png", true)
  }, {
    name: "Jay Mantri",
    value: "Jay Mantri",
    desc: Object(r.i18n)("jay_mantri_wallpaper_source_desc"),
    img: Object(o.a)("source-jay-mantri.png", true)
  }, {
    name: "Free Nature Stock",
    value: "Free Nature Stock",
    desc: Object(r.i18n)("free_nature_stock_wallpaper_source_desc"),
    img: Object(o.a)("source-free-nature-stock.png", true)
  }, {
    name: "Skitter Photo",
    value: "Skitter Photo",
    desc: Object(r.i18n)("skitter_photo_wallpaper_source_desc"),
    img: Object(o.a)("source-skitter-photo.png", true)
  }, {
    name: "Startup Stock Photos",
    value: "Startup Stock Photos",
    desc: Object(r.i18n)("startup_stock_wallpaper_source_desc"),
    img: Object(o.a)("source-startup-stock-photos.png", true)
  }, {
    name: "Barn Images",
    value: "Barn Images",
    desc: Object(r.i18n)("barn_images_wallpaper_source_desc"),
    img: Object(o.a)("source-barn.png", true)
  }, {
    name: "Picography",
    value: "Picography",
    desc: Object(r.i18n)("picography_wallpaper_source_desc"),
    img: Object(o.a)("source-picography.png", true)
  }];
  const x = ["c00018", "de8930", "f7d946", "cbe582", "506f37", "60a8d8", "184878", "be7ab9"];
  const T = () => r.IS_ZH ? c : i.i ? s : l;
  const I = () => r.IS_ZH ? [Object.assign(Object.assign({}, c), {
    updatetime: 0
  }), Object.assign(Object.assign({}, l), {
    updatetime: 0
  })] : [Object.assign(Object.assign({}, l), {
    updatetime: 0
  }), Object.assign(Object.assign({}, u), {
    updatetime: 0
  })];
},, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return o;
  });
  n(19);
  var r = n(255);
  var i = n(0);
  const o = (t, e = null) => `<svg\n      class="icon-svg"\n      preserveAspectRatio="xMinYMin meet"\n      viewBox="0,0,90,90"\n      style="${i.r ? "will-change:transform;" : ""}background-color:${t.bgColor || "transparent"};${e === null ? "border-radius: var(--svg-radius);" : `border-radius: ${e};`} display: block;width: 100%;height: 100%;"\n    >\n      <foreignObject width="100%" height="100%">\n          <div\n            style="width:90px;height:90px;display:flex;flex-direction: column;align-items: center;justify-content: center;"\n          >\n            ${t.bgText.split("\n").map(e => `<p\n                style="line-height:1.1;margin:0;font-size:${t.bgFont}px;color:#ffffff;text-align:center;white-space: nowrap;min-height:4px;flex-shrink: 0;"\n              >\n              ${Object(r.a)(e)}\n              </p>`).join("")}\n        </div>\n      </foreignObject>\n    </svg> `;
}, function (t, e, n) {
  "use strict";

  n.d(e, "c", function () {
    return i;
  });
  n.d(e, "a", function () {
    return a;
  });
  n.d(e, "b", function () {
    return s;
  });
  n(5);
  n(19);
  n(64);
  n(7);
  n(23);
  n(0);
  var r = n(36);
  function i(t = 15, e = 0) {
    const n = {
      "--wallpaper-alpha": t / 100,
      "--wallpaper-filter": e / 5 + "px"
    };
    Object.keys(n).forEach(t => {
      document.body.style.setProperty(t, n[t]);
    });
  }
  const o = document.querySelector(".wallpaper");
  function a(t) {
    o.style.backgroundImage &&= "";
    o.style.backgroundColor = t;
  }
  const s = t => {
    o.style.backgroundColor &&= "";
    let e = t;
    if (r.f) {
      e = t.replace(r.g, "");
    }
    o.style.backgroundImage = `url(${e})`;
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return r;
  });
  n(19);
  n(64);
  const r = function (t) {
    return (t = "" + t).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return l;
  });
  var r = n(5);
  var i = n.n(r);
  n(7);
  var o = n(0);
  var a = n(23);
  var s = n.n(a);
  var c = n(467);
  var u = n.n(c);
  const l = new class {
    constructor() {
      this.errorList = [];
      this.clearAllData = async () => {
        try {
          await s.a.removeItem("old-data");
          await s.a.removeItem("error-data");
        } catch (t) {}
      };
    }
    getLocalData() {
      const t = {};
      for (let e = 0, n = localStorage.length; e < n; e++) {
        const n = localStorage.key(e);
        t[n] = localStorage.getItem(n);
      }
      return t;
    }
    async getIndexedData() {
      const t = {};
      try {
        await s.a.iterate((e, n) => {
          t[n] = e;
        });
        return t;
      } catch (t) {
        await this.trackOnError(t);
        return null;
      }
    }
    async getOldData() {
      try {
        return await s.a.getItem("old-data");
      } catch (t) {
        await this.trackOnError(t);
        return null;
      }
    }
    async getBadVersionLocalData() {
      try {
        const t = await s.a.getItem("old-data");
        const {
          localData: e
        } = t;
        return e;
      } catch (t) {
        return null;
      }
    }
    async getErrorData() {
      try {
        return await s.a.getItem("error-data");
      } catch (t) {
        await this.trackOnError(t);
        return null;
      }
    }
    async getDataRecord() {
      try {
        return await s.a.getItem("data-record");
      } catch (t) {
        return null;
      }
    }
    async exportDebugData() {
      const t = await this.getOldData();
      const e = await this.getErrorData();
      const n = await this.getDataRecord();
      let r = {};
      if (!o.s) {
        r = await new i.a(t => chrome.storage.local.get(null, t));
      }
      return {
        oldData: t,
        errorData: e,
        localData: this.getLocalData(),
        chromeData: r,
        recordData: n
      };
    }
    async backupOldData(t, e) {
      try {
        const n = this.getLocalData();
        const r = await new i.a(t => chrome.storage.local.get(null, t));
        let a;
        let c;
        if (t) {
          a = await this.getIndexedData();
        }
        if (e === o.D && o.i && o.e === "pro") {
          c = await this.getBadVersionLocalData();
        }
        await s.a.setItem("old-data", {
          localData: n,
          chromeData: r,
          indexedData: a,
          beforeUpdateVersion: e,
          badVersionLocalData: c,
          version: o.C.extVersion
        });
      } catch (t) {
        await this.trackOnError(t);
      }
    }
    async track(t, e) {
      if (t) {
        try {
          const n = await s.a.getItem("error-data");
          if (n && n.length > this.errorList.length) {
            this.errorList = n;
          }
          if (this.errorList.some(e => e.message === t)) {
            return;
          }
          this.errorList.push({
            message: t,
            errMessage: e == null ? undefined : e.message,
            time: new Date().toLocaleString()
          });
          await s.a.setItem("error-data", u()(this.errorList, 30));
        } catch (t) {
          await this.trackOnError(t);
        }
      }
    }
    async trackOnError(t) {
      let e = "";
      try {
        const n = await new i.a(t => chrome.storage.local.get("error-data", t));
        if (!Array.isArray(n["error-data"])) {
          n["error-data"] = [];
        }
        if (typeof t == "string") {
          e = t;
        } else if (t && typeof t == "object" || t instanceof Error) {
          e = t.message;
        }
        n["error-data"].push({
          message: "trackOnError",
          errMessage: e,
          time: new Date().toLocaleString()
        });
        await new i.a(t => chrome.storage.local.set(n, t));
      } catch (t) {
        localStorage.setItem("error-data", JSON.stringify({
          message: "trackOnError",
          errMessage: e,
          time: new Date().toLocaleString()
        }));
      }
    }
  }();
}, function (t, e, n) {
  "use strict";

  var r = n(361);
  var i = n(4);
  var o = n(9);
  var a = n(27);
  var s = n(48);
  var c = n(365);
  var u = n(366);
  var l = n(367);
  var f = n(59);
  var h = n(368);
  var p = r.aTypedArray;
  var d = r.exportTypedArrayMethod;
  var m = i.Uint16Array;
  var g = m && m.prototype.sort;
  var y = !!g && !o(function () {
    var t = new m(2);
    t.sort(null);
    t.sort({});
  });
  var b = !!g && !o(function () {
    if (f) {
      return f < 74;
    }
    if (u) {
      return u < 67;
    }
    if (l) {
      return true;
    }
    if (h) {
      return h < 602;
    }
    var t;
    var e;
    var n = new m(516);
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
      a(t);
    }
    if (b) {
      return g.call(this, t);
    }
    p(this);
    var e;
    var n = s(this.length);
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
  }, !b || y);
}, function (t, e, n) {
  "use strict";

  var r = n(77);
  var i = n(56);
  var o = n(88);
  var a = n(9);
  var s = n(18);
  var c = n(89);
  var u = n(90);
  var l = n(26);
  r({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!o && a(function () {
      o.prototype.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (t) {
      var e = c(this, s("Promise"));
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
  if (!i && typeof o == "function") {
    var f = s("Promise").prototype.finally;
    if (o.prototype.finally !== f) {
      l(o.prototype, "finally", f, {
        unsafe: true
      });
    }
  }
}, function (t, e, n) {
  var r;
  var i = n(10);
  var o = n(260);
  var a = n(76);
  var s = n(55);
  var c = n(87);
  var u = n(53);
  var l = n(79);
  var f = l("IE_PROTO");
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
    for (var n = a.length; n--;) {
      delete d.prototype[a[n]];
    }
    return d();
  }
  s[f] = true;
  t.exports = Object.create || function (t, e) {
    var n;
    if (t !== null) {
      h.prototype = i(t);
      n = new h();
      h.prototype = null;
      n[f] = t;
    } else {
      n = d();
    }
    if (e === undefined) {
      return n;
    } else {
      return o(n, e);
    }
  };
}, function (t, e, n) {
  var r = n(16);
  var i = n(21);
  var o = n(10);
  var a = n(261);
  t.exports = r ? Object.defineProperties : function (t, e) {
    o(t);
    var n;
    var r = a(e);
    for (var s = r.length, c = 0; s > c;) {
      i.f(t, n = r[c++], e[n]);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(86);
  var i = n(76);
  t.exports = Object.keys || function (t) {
    return r(t, i);
  };
}, function (t, e, n) {
  "use strict";

  n(19);
  var r = n(26);
  var i = n(137);
  var o = n(9);
  var a = n(8);
  var s = n(20);
  var c = a("species");
  var u = RegExp.prototype;
  t.exports = function (t, e, n, l) {
    var f = a(t);
    var h = !o(function () {
      var e = {
        [f]: function () {
          return 7;
        }
      };
      return ""[t](e) != 7;
    });
    var p = h && !o(function () {
      var e = false;
      var n = /a/;
      if (t === "split") {
        (n = {}).constructor = {};
        n.constructor[c] = function () {
          return n;
        };
        n.flags = "";
        n[f] = /./[f];
      }
      n.exec = function () {
        e = true;
        return null;
      };
      n[f]("");
      return !e;
    });
    if (!h || !p || n) {
      var d = /./[f];
      var m = e(f, ""[t], function (t, e, n, r, o) {
        var a = e.exec;
        if (a === i || a === u.exec) {
          if (h && !o) {
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
      r(String.prototype, t, m[0]);
      r(u, f, m[1]);
    }
    if (l) {
      s(u[f], "sham", true);
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(264).charAt;
  t.exports = function (t, e, n) {
    return e + (n ? r(t, e).length : 1);
  };
}, function (t, e, n) {
  var r = n(47);
  var i = n(46);
  function o(t) {
    return function (e, n) {
      var o;
      var a;
      var s = String(i(e));
      var c = r(n);
      var u = s.length;
      if (c < 0 || c >= u) {
        if (t) {
          return "";
        } else {
          return undefined;
        }
      } else if ((o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343) {
        if (t) {
          return s.charAt(c);
        } else {
          return o;
        }
      } else if (t) {
        return s.slice(c, c + 2);
      } else {
        return a - 56320 + (o - 55296 << 10) + 65536;
      }
    };
  }
  t.exports = {
    codeAt: o(false),
    charAt: o(true)
  };
}, function (t, e, n) {
  var r = n(78);
  var i = Math.floor;
  var o = "".replace;
  var a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var s = /\$([$&'`]|\d{1,2})/g;
  t.exports = function (t, e, n, c, u, l) {
    var f = n + t.length;
    var h = c.length;
    var p = s;
    if (u !== undefined) {
      u = r(u);
      p = a;
    }
    return o.call(l, p, function (r, o) {
      var a;
      switch (o.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return t;
        case "`":
          return e.slice(0, n);
        case "'":
          return e.slice(f);
        case "<":
          a = u[o.slice(1, -1)];
          break;
        default:
          var s = +o;
          if (s === 0) {
            return r;
          }
          if (s > h) {
            var l = i(s / 10);
            if (l === 0) {
              return r;
            } else if (l <= h) {
              if (c[l - 1] === undefined) {
                return o.charAt(1);
              } else {
                return c[l - 1] + o.charAt(1);
              }
            } else {
              return r;
            }
          }
          a = c[s - 1];
      }
      if (a === undefined) {
        return "";
      } else {
        return a;
      }
    });
  };
}, function (t, e, n) {
  var r = n(33);
  var i = n(137);
  t.exports = function (t, e) {
    var n = t.exec;
    if (typeof n == "function") {
      var o = n.call(t, e);
      if (typeof o != "object") {
        throw TypeError("RegExp exec method returned something other than an Object or null");
      }
      return o;
    }
    if (r(t) !== "RegExp") {
      throw TypeError("RegExp#exec called on incompatible receiver");
    }
    return i.call(t, e);
  };
}, function (t, e, n) {
  var r = n(268);
  n(301);
  n(302);
  n(303);
  n(304);
  t.exports = r;
}, function (t, e, n) {
  n(187);
  n(283);
  n(284);
  n(205);
  n(206);
  n(295);
  n(296);
  n(297);
  var r = n(104);
  t.exports = r.Promise;
}, function (t, e, n) {
  "use strict";

  var r = {}.propertyIsEnumerable;
  var i = Object.getOwnPropertyDescriptor;
  var o = i && !r.call({
    1: 2
  }, 1);
  e.f = o ? function (t) {
    var e = i(this, t);
    return !!e && e.enumerable;
  } : r;
}, function (t, e, n) {
  var r = n(29);
  var i = n(84);
  var o = "".split;
  t.exports = r(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    if (i(t) == "String") {
      return o.call(t, "");
    } else {
      return Object(t);
    }
  } : Object;
}, function (t, e, n) {
  var r = n(14);
  var i = n(30);
  t.exports = function (t, e) {
    try {
      i(r, t, e);
    } catch (n) {
      r[t] = e;
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(29);
  t.exports = !r(function () {
    function t() {}
    t.prototype.constructor = null;
    return Object.getPrototypeOf(new t()) !== t.prototype;
  });
}, function (t, e, n) {
  var r = n(45);
  t.exports = function (t) {
    if (!r(t) && t !== null) {
      throw TypeError("Can't set " + String(t) + " as a prototype");
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(61);
  var i = n(97);
  var o = n(32);
  var a = n(275);
  t.exports = r ? Object.defineProperties : function (t, e) {
    o(t);
    var n;
    var r = a(e);
    for (var s = r.length, c = 0; s > c;) {
      i.f(t, n = r[c++], e[n]);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(276);
  var i = n(196);
  t.exports = Object.keys || function (t) {
    return r(t, i);
  };
}, function (t, e, n) {
  var r = n(37);
  var i = n(96);
  var o = n(277).indexOf;
  var a = n(145);
  t.exports = function (t, e) {
    var n;
    var s = i(t);
    var c = 0;
    var u = [];
    for (n in s) {
      if (!r(a, n) && r(s, n)) {
        u.push(n);
      }
    }
    while (e.length > c) {
      if (r(s, n = e[c++])) {
        if (!~o(u, n)) {
          u.push(n);
        }
      }
    }
    return u;
  };
}, function (t, e, n) {
  var r = n(96);
  var i = n(158);
  var o = n(278);
  function a(t) {
    return function (e, n, a) {
      var s;
      var c = r(e);
      var u = i(c.length);
      var l = o(a, u);
      if (t && n != n) {
        while (u > l) {
          if ((s = c[l++]) != s) {
            return true;
          }
        }
      } else {
        for (; u > l; l++) {
          if ((t || l in c) && c[l] === n) {
            return t || l || 0;
          }
        }
      }
      return !t && -1;
    };
  }
  t.exports = {
    includes: a(true),
    indexOf: a(false)
  };
}, function (t, e, n) {
  var r = n(144);
  var i = Math.max;
  var o = Math.min;
  t.exports = function (t, e) {
    var n = r(t);
    if (n < 0) {
      return i(n + e, 0);
    } else {
      return o(n, e);
    }
  };
}, function (t, e, n) {
  var r = n(17);
  var i = n(63);
  var o = r("iterator");
  var a = Array.prototype;
  t.exports = function (t) {
    return t !== undefined && (i.Array === t || a[o] === t);
  };
}, function (t, e, n) {
  var r = n(198);
  t.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
}, function (t, e, n) {
  var r = n(147);
  var i = n(63);
  var o = n(17)("iterator");
  t.exports = function (t) {
    if (t != null) {
      return t[o] || t["@@iterator"] || i[r(t)];
    }
  };
}, function (t, e, n) {
  var r = n(32);
  t.exports = function (t) {
    var e = t.return;
    if (e !== undefined) {
      return r(e.call(t)).value;
    }
  };
}, function (t, e) {}, function (t, e, n) {
  "use strict";

  var r;
  var i;
  var o;
  var a;
  var s = n(44);
  var c = n(65);
  var u = n(14);
  var l = n(62);
  var f = n(200);
  var h = n(99);
  var p = n(285);
  var d = n(143);
  var m = n(149);
  var g = n(287);
  var y = n(45);
  var b = n(52);
  var w = n(288);
  var v = n(201);
  var _ = n(98);
  var E = n(289);
  var x = n(159);
  var T = n(202).set;
  var I = n(290);
  var O = n(204);
  var S = n(292);
  var A = n(81);
  var N = n(100);
  var j = n(105);
  var C = n(192);
  var D = n(17);
  var k = n(294);
  var R = n(150);
  var L = n(199);
  var P = D("species");
  var M = "Promise";
  var F = j.get;
  var U = j.set;
  var B = j.getterFor(M);
  var $ = f && f.prototype;
  var q = f;
  var G = $;
  var W = u.TypeError;
  var V = u.document;
  var z = u.process;
  var Y = A.f;
  var H = Y;
  var X = !!V && !!V.createEvent && !!u.dispatchEvent;
  var K = typeof PromiseRejectionEvent == "function";
  var J = false;
  var Q = C(M, function () {
    var t = v(q);
    var e = t !== String(q);
    if (!e && L === 66) {
      return true;
    }
    if (c && !G.finally) {
      return true;
    }
    if (L >= 51 && /native code/.test(t)) {
      return false;
    }
    var n = new q(function (t) {
      t(1);
    });
    function r(t) {
      t(function () {}, function () {});
    }
    (n.constructor = {})[P] = r;
    return !(J = n.then(function () {}) instanceof r) || !e && k && !K;
  });
  var Z = Q || !E(function (t) {
    q.all(t).catch(function () {});
  });
  function tt(t) {
    var e;
    return !!y(t) && typeof (e = t.then) == "function" && e;
  }
  function et(t, e) {
    if (!t.notified) {
      t.notified = true;
      var n = t.reactions;
      I(function () {
        var r = t.value;
        for (var i = t.state == 1, o = 0; n.length > o;) {
          var a;
          var s;
          var c;
          var u = n[o++];
          var l = i ? u.ok : u.fail;
          var f = u.resolve;
          var h = u.reject;
          var p = u.domain;
          try {
            if (l) {
              if (!i) {
                if (t.rejection === 2) {
                  ot(t);
                }
                t.rejection = 1;
              }
              if (l === true) {
                a = r;
              } else {
                if (p) {
                  p.enter();
                }
                a = l(r);
                if (p) {
                  p.exit();
                  c = true;
                }
              }
              if (a === u.promise) {
                h(W("Promise-chain cycle"));
              } else if (s = tt(a)) {
                s.call(a, f, h);
              } else {
                f(a);
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
    var i;
    if (X) {
      (r = V.createEvent("Event")).promise = e;
      r.reason = n;
      r.initEvent(t, false, true);
      u.dispatchEvent(r);
    } else {
      r = {
        promise: e,
        reason: n
      };
    }
    if (!K && (i = u["on" + t])) {
      i(r);
    } else if (t === "unhandledrejection") {
      S("Unhandled promise rejection", n);
    }
  }
  function rt(t) {
    T.call(u, function () {
      var e;
      var n = t.facade;
      var r = t.value;
      if (it(t) && (e = N(function () {
        if (R) {
          z.emit("unhandledRejection", r, n);
        } else {
          nt("unhandledrejection", n, r);
        }
      }), t.rejection = R || it(t) ? 2 : 1, e.error)) {
        throw e.value;
      }
    });
  }
  function it(t) {
    return t.rejection !== 1 && !t.parent;
  }
  function ot(t) {
    T.call(u, function () {
      var e = t.facade;
      if (R) {
        z.emit("rejectionHandled", e);
      } else {
        nt("rejectionhandled", e, t.value);
      }
    });
  }
  function at(t, e, n) {
    return function (r) {
      t(e, r, n);
    };
  }
  function st(t, e, n) {
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
          throw W("Promise can't be resolved itself");
        }
        var r = tt(e);
        if (r) {
          I(function () {
            var n = {
              done: false
            };
            try {
              r.call(e, at(ct, n, t), at(st, n, t));
            } catch (e) {
              st(n, e, t);
            }
          });
        } else {
          t.value = e;
          t.state = 1;
          et(t, false);
        }
      } catch (e) {
        st({
          done: false
        }, e, t);
      }
    }
  }
  if (Q && (G = (q = function (t) {
    w(this, q, M);
    b(t);
    r.call(this);
    var e = F(this);
    try {
      t(at(ct, e), at(st, e));
    } catch (t) {
      st(e, t);
    }
  }).prototype, (r = function (t) {
    U(this, {
      type: M,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: 0,
      value: undefined
    });
  }).prototype = p(G, {
    then: function (t, e) {
      var n = B(this);
      var r = Y(x(this, q));
      r.ok = typeof t != "function" || t;
      r.fail = typeof e == "function" && e;
      r.domain = R ? z.domain : undefined;
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
  }), i = function () {
    var t = new r();
    var e = F(t);
    this.promise = t;
    this.resolve = at(ct, e);
    this.reject = at(st, e);
  }, A.f = Y = function (t) {
    if (t === q || t === o) {
      return new i(t);
    } else {
      return H(t);
    }
  }, !c && typeof f == "function" && $ !== Object.prototype)) {
    a = $.then;
    if (!J) {
      h($, "then", function (t, e) {
        var n = this;
        return new q(function (t, e) {
          a.call(n, t, e);
        }).then(t, e);
      }, {
        unsafe: true
      });
      h($, "catch", G.catch, {
        unsafe: true
      });
    }
    try {
      delete $.constructor;
    } catch (t) {}
    if (d) {
      d($, G);
    }
  }
  s({
    global: true,
    wrap: true,
    forced: Q
  }, {
    Promise: q
  });
  m(q, M, false, true);
  g(M);
  o = l(M);
  s({
    target: M,
    stat: true,
    forced: Q
  }, {
    reject: function (t) {
      var e = Y(this);
      e.reject.call(undefined, t);
      return e.promise;
    }
  });
  s({
    target: M,
    stat: true,
    forced: c || Q
  }, {
    resolve: function (t) {
      return O(c && this === o ? q : this, t);
    }
  });
  s({
    target: M,
    stat: true,
    forced: Z
  }, {
    all: function (t) {
      var e = this;
      var n = Y(e);
      var r = n.resolve;
      var i = n.reject;
      var o = N(function () {
        var n = b(e.resolve);
        var o = [];
        var a = 0;
        var s = 1;
        _(t, function (t) {
          var c = a++;
          var u = false;
          o.push(undefined);
          s++;
          n.call(e, t).then(function (t) {
            if (!u) {
              u = true;
              o[c] = t;
              if (! --s) {
                r(o);
              }
            }
          }, i);
        });
        if (! --s) {
          r(o);
        }
      });
      if (o.error) {
        i(o.value);
      }
      return n.promise;
    },
    race: function (t) {
      var e = this;
      var n = Y(e);
      var r = n.reject;
      var i = N(function () {
        var i = b(e.resolve);
        _(t, function (t) {
          i.call(e, t).then(n.resolve, r);
        });
      });
      if (i.error) {
        r(i.value);
      }
      return n.promise;
    }
  });
}, function (t, e, n) {
  var r = n(99);
  t.exports = function (t, e, n) {
    for (var i in e) {
      if (n && n.unsafe && t[i]) {
        t[i] = e[i];
      } else {
        r(t, i, e[i], n);
      }
    }
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(148);
  var i = n(147);
  t.exports = r ? {}.toString : function () {
    return "[object " + i(this) + "]";
  };
}, function (t, e, n) {
  "use strict";

  var r = n(62);
  var i = n(97);
  var o = n(17);
  var a = n(61);
  var s = o("species");
  t.exports = function (t) {
    var e = r(t);
    var n = i.f;
    if (a && e && !e[s]) {
      n(e, s, {
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
  var r = n(17)("iterator");
  var i = false;
  try {
    var o = 0;
    var a = {
      next: function () {
        return {
          done: !!o++
        };
      },
      return: function () {
        i = true;
      }
    };
    a[r] = function () {
      return this;
    };
    Array.from(a, function () {
      throw 2;
    });
  } catch (t) {}
  t.exports = function (t, e) {
    if (!e && !i) {
      return false;
    }
    var n = false;
    try {
      var o = {
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
      t(o);
    } catch (t) {}
    return n;
  };
}, function (t, e, n) {
  var r;
  var i;
  var o;
  var a;
  var s;
  var c;
  var u;
  var l;
  var f = n(14);
  var h = n(188).f;
  var p = n(202).set;
  var d = n(203);
  var m = n(291);
  var g = n(150);
  var y = f.MutationObserver || f.WebKitMutationObserver;
  var b = f.document;
  var w = f.process;
  var v = f.Promise;
  var _ = h(f, "queueMicrotask");
  var E = _ && _.value;
  if (!E) {
    r = function () {
      var t;
      var e;
      for (g && (t = w.domain) && t.exit(); i;) {
        e = i.fn;
        i = i.next;
        try {
          e();
        } catch (t) {
          if (i) {
            a();
          } else {
            o = undefined;
          }
          throw t;
        }
      }
      o = undefined;
      if (t) {
        t.enter();
      }
    };
    if (d || g || m || !y || !b) {
      if (v && v.resolve) {
        (u = v.resolve(undefined)).constructor = v;
        l = u.then;
        a = function () {
          l.call(u, r);
        };
      } else {
        a = g ? function () {
          w.nextTick(r);
        } : function () {
          p.call(f, r);
        };
      }
    } else {
      s = true;
      c = b.createTextNode("");
      new y(r).observe(c, {
        characterData: true
      });
      a = function () {
        c.data = s = !s;
      };
    }
  }
  t.exports = E || function (t) {
    var e = {
      fn: t,
      next: undefined
    };
    if (o) {
      o.next = e;
    }
    if (!i) {
      i = e;
      a();
    }
    o = e;
  };
}, function (t, e, n) {
  var r = n(146);
  t.exports = /web0s(?!.*chrome)/i.test(r);
}, function (t, e, n) {
  var r = n(14);
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
}, function (t, e, n) {
  var r = n(14);
  var i = n(201);
  var o = r.WeakMap;
  t.exports = typeof o == "function" && /native code/.test(i(o));
}, function (t, e) {
  t.exports = typeof window == "object";
}, function (t, e, n) {
  "use strict";

  var r = n(44);
  var i = n(65);
  var o = n(200);
  var a = n(29);
  var s = n(62);
  var c = n(159);
  var u = n(204);
  var l = n(99);
  r({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!o && a(function () {
      o.prototype.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (t) {
      var e = c(this, s("Promise"));
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
  if (!i && typeof o == "function") {
    var f = s("Promise").prototype.finally;
    if (o.prototype.finally !== f) {
      l(o.prototype, "finally", f, {
        unsafe: true
      });
    }
  }
}, function (t, e, n) {
  "use strict";

  var r = n(212).charAt;
  var i = n(105);
  var o = n(207);
  var a = i.set;
  var s = i.getterFor("String Iterator");
  o(String, "String", function (t) {
    a(this, {
      type: "String Iterator",
      string: String(t),
      index: 0
    });
  }, function () {
    var t;
    var e = s(this);
    var n = e.string;
    var i = e.index;
    if (i >= n.length) {
      return {
        value: undefined,
        done: true
      };
    } else {
      t = r(n, i);
      e.index += t.length;
      return {
        value: t,
        done: false
      };
    }
  });
}, function (t, e, n) {
  n(298);
  var r = n(300);
  var i = n(14);
  var o = n(147);
  var a = n(30);
  var s = n(63);
  var c = n(17)("toStringTag");
  for (var u in r) {
    var l = i[u];
    var f = l && l.prototype;
    if (f && o(f) !== c) {
      a(f, c, u);
    }
    s[u] = s.Array;
  }
}, function (t, e, n) {
  "use strict";

  var r = n(96);
  var i = n(299);
  var o = n(63);
  var a = n(105);
  var s = n(207);
  var c = a.set;
  var u = a.getterFor("Array Iterator");
  t.exports = s(Array, "Array", function (t, e) {
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
  o.Arguments = o.Array;
  i("keys");
  i("values");
  i("entries");
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
  n(187);
}, function (t, e, n) {
  n(205);
}, function (t, e, n) {
  "use strict";

  var r = n(44);
  var i = n(81);
  var o = n(100);
  r({
    target: "Promise",
    stat: true
  }, {
    try: function (t) {
      var e = i.f(this);
      var n = o(t);
      (n.error ? e.reject : e.resolve)(n.value);
      return e.promise;
    }
  });
}, function (t, e, n) {
  n(206);
},, function (t, e) {
  var n = 1;
  function r(t) {
    var e = [];
    for (var n in t) {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
    }
    return e.join("&");
  }
  t.exports = function (t) {
    return new Promise(function (e, i) {
      var o = document.createElement("script");
      var a = t.url;
      if (t.params) {
        var s = r(t.params);
        if (s) {
          a += (a.indexOf("?") >= 0 ? "&" : "?") + s;
        }
      }
      function c() {
        if (o) {
          o.onload = o.onreadystatechange = o.onerror = null;
          if (o.parentNode) {
            o.parentNode.removeChild(o);
          }
          o = null;
        }
      }
      o.async = true;
      var u = "axiosJsonpCallback" + n++;
      var l = window[u];
      var f = false;
      window[u] = function (t) {
        if (!(window[u] = l, f)) {
          e({
            data: t,
            status: 200
          });
        }
      };
      var h = {
        _: new Date().getTime()
      };
      h[t.callbackParamName || "callback"] = u;
      a += (a.indexOf("?") >= 0 ? "&" : "?") + r(h);
      o.onload = o.onreadystatechange = function () {
        if (!o.readyState || !!/loaded|complete/.test(o.readyState)) {
          c();
        }
      };
      o.onerror = function () {
        c();
        i(new Error("Network Error"));
      };
      if (t.cancelToken) {
        t.cancelToken.promise.then(function (t) {
          if (o) {
            f = true;
            i(t);
          }
        });
      }
      o.src = a;
      document.head.appendChild(o);
    });
  };
},, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return r;
  });
  const r = t => {
    try {
      const e = localStorage.getItem(t);
      return JSON.parse(e);
    } catch (t) {
      return null;
    }
  };
},,,, function (t, e, n) {
  (function (e) {
    var n = typeof e == "object" && e && e.Object === Object && e;
    t.exports = n;
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return r;
  });
  const r = t => {
    const e = i(t);
    const n = o(t, e);
    return {
      searchWidth: e.width,
      searchHeight: e.height,
      searchMarginTop: e.marginTop,
      searchMarginBottom: e.marginBottom,
      searchRatio: e.searchRatio,
      iconBoxWidth: n.boxWidth,
      iconBoxHeight: n.boxHeight,
      iconOneHeight: n.iconOneHeight,
      iconWidth: n.width,
      miniIconPadding: n.miniIconPadding,
      iconRatio: n.iconRatio,
      iconsMargin: n.iconsMargin
    };
  };
  const i = t => {
    const {
      searchScale: e,
      innerHeight: n,
      innerWidth: r,
      miniMode: i,
      topBookmark: o,
      topUseful: a,
      mainRatio: s
    } = t;
    let c = 0;
    if (a) {
      c += 36;
    }
    if (o) {
      c += 36;
    }
    const u = n - c;
    const l = r - r * 0.2;
    let f = r;
    let h = f * 9 / 16;
    if (h > u) {
      h = u;
      f = h * 16 / 9;
    }
    const p = f * (0.575 - Math.max(Math.min(720, f - 1200), 0) * 0.1818 / 720);
    const d = {
      width: p * e,
      height: h * (0.0963 - Math.max(Math.min(405, h - 675), 0) * 0.0296 / 405) * e
    };
    if (d.width > l) {
      d.height = l / d.width * d.height;
      d.width = l;
    }
    const m = {
      width: d.width * s,
      height: d.height * s
    };
    let g = null;
    g = i ? -0.3 : -0.06;
    const y = d.width / p * s;
    const b = Math.floor(g * u * y) + "px";
    const w = Math.floor(m.height * 0.775) + "px";
    return {
      width: Math.floor(m.width) + "px",
      height: Math.floor(m.height) + "px",
      searchRatio: Number((m.width / 625).toFixed(2)),
      marginTop: b,
      marginBottom: w,
      appContentWidth: l,
      appContentHeight: u,
      searcherSizeWithRatio: d
    };
  };
  const o = (t, e) => {
    const {
      row: n,
      col: r,
      rowGap: i,
      colGap: o,
      iconScale: a,
      innerWidth: s,
      mainRatio: c,
      fontSize: u
    } = t;
    let l = s;
    if (l < 1200) {
      l = 1200;
    } else if (l > 1920) {
      l = 1920;
    }
    const {
      appContentHeight: f,
      appContentWidth: h,
      searcherSizeWithRatio: p
    } = e;
    const d = h;
    const m = f * 0.8 - p.height * 2.451;
    const g = 1 + (1920 - l) * 0.5 / 720;
    const y = d / r;
    const b = m / n;
    const w = Math.min(Math.min(y, b) * a * g, y, b);
    const v = (m - n * w) / n * i / 2;
    const _ = r * (w + (d - r * w) / r * o / 2 * 2);
    let E = Math.min(Math.ceil(_ * c), s);
    let x = n * (w + v * 2) * c;
    const T = w * c;
    const I = Math.max(u * c, 12) * 1.3 + T * 0.9 * 0.08;
    const O = (25 + I) * 1.2;
    if (E < r * O) {
      E = r * O;
    }
    if (x < n * O) {
      x = n * O;
    }
    let S = T * 0.9 - I - 1;
    if (S < 25) {
      S = 25;
    }
    const A = s * 0.1 * c;
    return {
      width: Math.floor(S) + "px",
      miniIconPadding: Math.floor(S / 7 + 4) + "px",
      boxWidth: Math.ceil(E) + "px",
      boxHeight: Math.floor(x) + "px",
      iconOneHeight: Math.floor(x / n) + "px",
      iconRatio: Number((S / 106).toFixed(2)),
      iconsMargin: Math.floor(A) + "px"
    };
  };
}, function (t, e, n) {
  const r = n(152);
  t.exports = (t, e, n = false) => {
    if (t instanceof r) {
      return t;
    }
    try {
      return new r(t, e);
    } catch (t) {
      if (!n) {
        return null;
      }
      throw t;
    }
  };
},, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "uploadFile", function () {
    return s;
  });
  n(7);
  var r = n(0);
  var i = n(3);
  const o = ["infinity-notes-img", "custom-wallpaper-library"];
  const a = {};
  const s = async (t, e, n) => {
    let s;
    try {
      if (a[n] && a[n].endTime > Date.now()) {
        s = a[n];
      } else {
        let t = null;
        t = o.includes(n) ? await i.a.get(r.y + "/upload/public_private_token", {
          type: n
        }, {
          _auth: true
        }) : await i.a.get(r.y + "/upload/token", {
          type: n
        });
        if (t.code !== 0 || !t.data.token) {
          return {
            error: t
          };
        }
        s = t.data;
        s.endTime = Date.now() + (s.expires - 600) * 1000;
        a[n] = s;
      }
      const {
        token: c,
        prefix: u
      } = s;
      const l = new FormData();
      l.append("token", c);
      l.append("key", u + e);
      l.append("file", t, e);
      const {
        key: f,
        url: h
      } = await i.a.post(s.host, l, {
        timeout: 180000,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return {
        data: {
          url: h,
          key: f
        }
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
}, function (t, e) {
  var n = {
    utf8: {
      stringToBytes: function (t) {
        return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
      },
      bytesToString: function (t) {
        return decodeURIComponent(escape(n.bin.bytesToString(t)));
      }
    },
    bin: {
      stringToBytes: function (t) {
        var e = [];
        for (var n = 0; n < t.length; n++) {
          e.push(t.charCodeAt(n) & 255);
        }
        return e;
      },
      bytesToString: function (t) {
        var e = [];
        for (var n = 0; n < t.length; n++) {
          e.push(String.fromCharCode(t[n]));
        }
        return e.join("");
      }
    }
  };
  t.exports = n;
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  var i = n(226);
  var o = n(319);
  var a = n(232);
  function s(t) {
    var e = new o(t);
    var n = i(o.prototype.request, e);
    r.extend(n, o.prototype, e);
    r.extend(n, e);
    return n;
  }
  var c = s(n(229));
  c.Axios = o;
  c.create = function (t) {
    return s(a(c.defaults, t));
  };
  c.Cancel = n(233);
  c.CancelToken = n(332);
  c.isCancel = n(228);
  c.all = function (t) {
    return Promise.all(t);
  };
  c.spread = n(333);
  t.exports = c;
  t.exports.default = c;
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  var i = n(227);
  var o = n(320);
  var a = n(321);
  var s = n(232);
  function c(t) {
    this.defaults = t;
    this.interceptors = {
      request: new o(),
      response: new o()
    };
  }
  c.prototype.request = function (t) {
    if (typeof t == "string") {
      (t = arguments[1] || {}).url = arguments[0];
    } else {
      t = t || {};
    }
    if ((t = s(this.defaults, t)).method) {
      t.method = t.method.toLowerCase();
    } else if (this.defaults.method) {
      t.method = this.defaults.method.toLowerCase();
    } else {
      t.method = "get";
    }
    var e = [a, undefined];
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
    t = s(this.defaults, t);
    return i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "");
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
    c.prototype[t] = function (e, n, i) {
      return this.request(r.merge(i || {}, {
        method: t,
        url: e,
        data: n
      }));
    };
  });
  t.exports = c;
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  function i() {
    this.handlers = [];
  }
  i.prototype.use = function (t, e) {
    this.handlers.push({
      fulfilled: t,
      rejected: e
    });
    return this.handlers.length - 1;
  };
  i.prototype.eject = function (t) {
    this.handlers[t] &&= null;
  };
  i.prototype.forEach = function (t) {
    r.forEach(this.handlers, function (e) {
      if (e !== null) {
        t(e);
      }
    });
  };
  t.exports = i;
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  var i = n(322);
  var o = n(228);
  var a = n(229);
  function s(t) {
    if (t.cancelToken) {
      t.cancelToken.throwIfRequested();
    }
  }
  t.exports = function (t) {
    s(t);
    t.headers = t.headers || {};
    t.data = i(t.data, t.headers, t.transformRequest);
    t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers);
    r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
      delete t.headers[e];
    });
    return (t.adapter || a.adapter)(t).then(function (e) {
      s(t);
      e.data = i(e.data, e.headers, t.transformResponse);
      return e;
    }, function (e) {
      if (!o(e)) {
        s(t);
        if (e && e.response) {
          e.response.data = i(e.response.data, e.response.headers, t.transformResponse);
        }
      }
      return Promise.reject(e);
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  t.exports = function (t, e, n) {
    r.forEach(n, function (n) {
      t = n(t, e);
    });
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(31);
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

  var r = n(231);
  t.exports = function (t, e, n) {
    var i = n.config.validateStatus;
    if (!i || i(n.status)) {
      t(n);
    } else {
      e(r("Request failed with status code " + n.status, n.config, null, n.request, n));
    }
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e, n, r, i) {
    t.config = e;
    if (n) {
      t.code = n;
    }
    t.request = r;
    t.response = i;
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

  var r = n(327);
  var i = n(328);
  t.exports = function (t, e) {
    if (t && !r(e)) {
      return i(t, e);
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

  var r = n(31);
  var i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  t.exports = function (t) {
    var e;
    var n;
    var o;
    var a = {};
    if (t) {
      r.forEach(t.split("\n"), function (t) {
        o = t.indexOf(":");
        e = r.trim(t.substr(0, o)).toLowerCase();
        n = r.trim(t.substr(o + 1));
        if (e) {
          if (a[e] && i.indexOf(e) >= 0) {
            return;
          }
          a[e] = e === "set-cookie" ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n;
        }
      });
      return a;
    } else {
      return a;
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  t.exports = r.isStandardBrowserEnv() ? function () {
    var t;
    var e = /(msie|trident)/i.test(navigator.userAgent);
    var n = document.createElement("a");
    function i(t) {
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
    t = i(window.location.href);
    return function (e) {
      var n = r.isString(e) ? i(e) : e;
      return n.protocol === t.protocol && n.host === t.host;
    };
  }() : function () {
    return true;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  t.exports = r.isStandardBrowserEnv() ? {
    write: function (t, e, n, i, o, a) {
      var s = [];
      s.push(t + "=" + encodeURIComponent(e));
      if (r.isNumber(n)) {
        s.push("expires=" + new Date(n).toGMTString());
      }
      if (r.isString(i)) {
        s.push("path=" + i);
      }
      if (r.isString(o)) {
        s.push("domain=" + o);
      }
      if (a === true) {
        s.push("secure");
      }
      document.cookie = s.join("; ");
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

  var r = n(233);
  function i(t) {
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
  i.prototype.throwIfRequested = function () {
    if (this.reason) {
      throw this.reason;
    }
  };
  i.source = function () {
    var t;
    return {
      token: new i(function (e) {
        t = e;
      }),
      cancel: t
    };
  };
  t.exports = i;
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  };
},, function (t, e, n) {
  (function () {
    "use strict";

    var t;
    var r;
    var i;
    var o;
    var a;
    var s = {}.hasOwnProperty;
    t = n(336);
    r = n(168).defaults;
    o = function (t) {
      return typeof t == "string" && (t.indexOf("&") >= 0 || t.indexOf(">") >= 0 || t.indexOf("<") >= 0);
    };
    a = function (t) {
      return "<![CDATA[" + i(t) + "]]>";
    };
    i = function (t) {
      return t.replace("]]>", "]]]]><![CDATA[>");
    };
    e.Builder = function () {
      function e(t) {
        var e;
        var n;
        var i;
        this.options = {};
        for (e in n = r[0.2]) {
          if (s.call(n, e)) {
            i = n[e];
            this.options[e] = i;
          }
        }
        for (e in t) {
          if (s.call(t, e)) {
            i = t[e];
            this.options[e] = i;
          }
        }
      }
      e.prototype.buildObject = function (e) {
        var n;
        var i;
        var c;
        var u;
        var l;
        var f;
        n = this.options.attrkey;
        i = this.options.charkey;
        if (Object.keys(e).length === 1 && this.options.rootName === r[0.2].rootName) {
          e = e[l = Object.keys(e)[0]];
        } else {
          l = this.options.rootName;
        }
        f = this;
        c = function (t, e) {
          var r;
          var u;
          var l;
          var h;
          var p;
          var d;
          if (typeof e != "object") {
            if (f.options.cdata && o(e)) {
              t.raw(a(e));
            } else {
              t.txt(e);
            }
          } else if (Array.isArray(e)) {
            for (h in e) {
              if (s.call(e, h)) {
                for (p in u = e[h]) {
                  l = u[p];
                  t = c(t.ele(p), l).up();
                }
              }
            }
          } else {
            for (p in e) {
              if (s.call(e, p)) {
                u = e[p];
                if (p === n) {
                  if (typeof u == "object") {
                    for (r in u) {
                      d = u[r];
                      t = t.att(r, d);
                    }
                  }
                } else if (p === i) {
                  t = f.options.cdata && o(u) ? t.raw(a(u)) : t.txt(u);
                } else if (Array.isArray(u)) {
                  for (h in u) {
                    if (s.call(u, h)) {
                      t = typeof (l = u[h]) == "string" ? f.options.cdata && o(l) ? t.ele(p).raw(a(l)).up() : t.ele(p, l).up() : c(t.ele(p), l).up();
                    }
                  }
                } else if (typeof u == "object") {
                  t = c(t.ele(p), u).up();
                } else if (typeof u == "string" && f.options.cdata && o(u)) {
                  t = t.ele(p).raw(a(u)).up();
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
        u = t.create(l, this.options.xmldec, this.options.doctype, {
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
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var l;
    var f;
    f = n(57);
    u = f.assign;
    l = f.isFunction;
    i = n(234);
    o = n(235);
    a = n(342);
    c = n(182);
    s = n(343);
    e = n(15);
    r = n(155);
    t.exports.create = function (t, e, n, r) {
      var i;
      var a;
      if (t == null) {
        throw new Error("Root element needs a name.");
      }
      r = u({}, e, n, r);
      a = (i = new o(r)).element(t);
      if (!r.headless) {
        i.declaration(r);
        if (r.pubID != null || r.sysID != null) {
          i.dtd(r);
        }
      }
      return a;
    };
    t.exports.begin = function (t, e, n) {
      var r;
      if (l(t)) {
        e = (r = [t, e])[0];
        n = r[1];
        t = {};
      }
      if (e) {
        return new a(t, e, n);
      } else {
        return new o(t);
      }
    };
    t.exports.stringWriter = function (t) {
      return new c(t);
    };
    t.exports.streamWriter = function (t, e) {
      return new s(t, e);
    };
    t.exports.implementation = new i();
    t.exports.nodeType = e;
    t.exports.writerState = r;
  }).call(this);
}, function (t, e, n) {
  (function () {
    var e;
    var r;
    e = n(338);
    r = n(339);
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
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var l;
    var f;
    var h;
    var p;
    var d;
    var m;
    var g;
    var y;
    var b;
    var w;
    var v;
    var _;
    var E;
    var x;
    var T;
    var I = {}.hasOwnProperty;
    T = n(57);
    E = T.isObject;
    _ = T.isFunction;
    x = T.isPlainObject;
    v = T.getValue;
    e = n(15);
    p = n(235);
    d = n(169);
    o = n(171);
    a = n(172);
    g = n(179);
    w = n(180);
    m = n(181);
    f = n(173);
    h = n(174);
    s = n(175);
    u = n(176);
    c = n(177);
    l = n(178);
    i = n(236);
    b = n(238);
    y = n(182);
    r = n(155);
    t.exports = function () {
      function t(t, n, r) {
        var i;
        this.name = "?xml";
        this.type = e.Document;
        t ||= {};
        i = {};
        if (t.writer) {
          if (x(t.writer)) {
            i = t.writer;
            t.writer = new y();
          }
        } else {
          t.writer = new y();
        }
        this.options = t;
        this.writer = t.writer;
        this.writerOptions = this.writer.filterOptions(i);
        this.stringify = new b(t);
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
        var i;
        var o;
        var a;
        var s;
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
            i = {};
            for (r in c = t.attribs) {
              if (I.call(c, r)) {
                n = c[r];
                i[r] = n.value;
              }
            }
            this.node(t.name, i);
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
        a = 0;
        s = (u = t.children).length;
        for (; a < s; a++) {
          o = u[a];
          this.createChildNode(o);
          if (o.type === e.Element) {
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
        t = v(t);
        if (e == null) {
          e = {};
        }
        e = v(e);
        if (!E(e)) {
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
        var i;
        var o;
        var a;
        var s;
        var c;
        var u;
        if (this.currentNode && this.currentNode.type === e.DocType) {
          this.dtdElement.apply(this, arguments);
        } else if (Array.isArray(t) || E(t) || _(t)) {
          s = this.options.noValidation;
          this.options.noValidation = true;
          (u = new p(this.options).element("TEMP_ROOT")).element(t);
          this.options.noValidation = s;
          o = 0;
          a = (c = u.children).length;
          for (; o < a; o++) {
            i = c[o];
            this.createChildNode(i);
            if (i.type === e.Element) {
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
          t = v(t);
        }
        if (E(t)) {
          for (n in t) {
            if (I.call(t, n)) {
              r = t[n];
              this.attribute(n, r);
            }
          }
        } else {
          if (_(e)) {
            e = e.apply();
          }
          if (this.options.keepNullAttributes && e == null) {
            this.currentNode.attribs[t] = new i(this, t, "");
          } else if (e != null) {
            this.currentNode.attribs[t] = new i(this, t, e);
          }
        }
        return this;
      };
      t.prototype.text = function (t) {
        var e;
        this.openCurrent();
        e = new w(this, t);
        this.onData(this.writer.text(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.cdata = function (t) {
        var e;
        this.openCurrent();
        e = new o(this, t);
        this.onData(this.writer.cdata(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.comment = function (t) {
        var e;
        this.openCurrent();
        e = new a(this, t);
        this.onData(this.writer.comment(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.raw = function (t) {
        var e;
        this.openCurrent();
        e = new g(this, t);
        this.onData(this.writer.raw(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      t.prototype.instruction = function (t, e) {
        var n;
        var r;
        var i;
        var o;
        var a;
        this.openCurrent();
        if (t != null) {
          t = v(t);
        }
        if (e != null) {
          e = v(e);
        }
        if (Array.isArray(t)) {
          n = 0;
          o = t.length;
          for (; n < o; n++) {
            r = t[n];
            this.instruction(r);
          }
        } else if (E(t)) {
          for (r in t) {
            if (I.call(t, r)) {
              i = t[r];
              this.instruction(r, i);
            }
          }
        } else {
          if (_(e)) {
            e = e.apply();
          }
          a = new m(this, t, e);
          this.onData(this.writer.processingInstruction(a, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        }
        return this;
      };
      t.prototype.declaration = function (t, e, n) {
        var r;
        this.openCurrent();
        if (this.documentStarted) {
          throw new Error("declaration() must be the first node.");
        }
        r = new f(this, t, e, n);
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
      t.prototype.attList = function (t, e, n, r, i) {
        var o;
        this.openCurrent();
        o = new s(this, t, e, n, r, i);
        this.onData(this.writer.dtdAttList(o, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
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
        n = new l(this, t, e);
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
        var i;
        var o;
        var a;
        if (!t.isOpen) {
          if (!this.root && this.currentLevel === 0 && t.type === e.Element) {
            this.root = t;
          }
          i = "";
          if (t.type === e.Element) {
            this.writerOptions.state = r.OpenTag;
            i = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<" + t.name;
            for (o in a = t.attribs) {
              if (I.call(a, o)) {
                n = a[o];
                i += this.writer.attribute(n, this.writerOptions, this.currentLevel);
              }
            }
            i += (t.children ? ">" : "/>") + this.writer.endline(t, this.writerOptions, this.currentLevel);
            this.writerOptions.state = r.InsideTag;
          } else {
            this.writerOptions.state = r.OpenTag;
            i = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + t.rootNodeName;
            if (t.pubID && t.sysID) {
              i += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
            } else if (t.sysID) {
              i += " SYSTEM \"" + t.sysID + "\"";
            }
            if (t.children) {
              i += " [";
              this.writerOptions.state = r.InsideTag;
            } else {
              this.writerOptions.state = r.CloseTag;
              i += ">";
            }
            i += this.writer.endline(t, this.writerOptions, this.currentLevel);
          }
          this.onData(i, this.currentLevel);
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
    var i;
    var o = {}.hasOwnProperty;
    e = n(15);
    i = n(239);
    r = n(155);
    t.exports = function (t) {
      function n(t, e) {
        this.stream = t;
        n.__super__.constructor.call(this, e);
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
      n.prototype.endline = function (t, e, i) {
        if (t.isLastRootNode && e.state === r.CloseTag) {
          return "";
        } else {
          return n.__super__.endline.call(this, t, e, i);
        }
      };
      n.prototype.document = function (t, e) {
        var n;
        var r;
        var i;
        var o;
        var a;
        var s;
        var c;
        var u;
        var l;
        r = i = 0;
        a = (c = t.children).length;
        for (; i < a; r = ++i) {
          (n = c[r]).isLastRootNode = r === t.children.length - 1;
        }
        e = this.filterOptions(e);
        l = [];
        o = 0;
        s = (u = t.children).length;
        for (; o < s; o++) {
          n = u[o];
          l.push(this.writeChildNode(n, e, 0));
        }
        return l;
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
        var i;
        var o;
        var a;
        var s;
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
          o = 0;
          a = (s = t.children).length;
          for (; o < a; o++) {
            i = s[o];
            this.writeChildNode(i, e, n + 1);
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
      n.prototype.element = function (t, n, i) {
        var a;
        var s;
        var c;
        var u;
        var l;
        var f;
        var h;
        var p;
        var d;
        i ||= 0;
        this.openNode(t, n, i);
        n.state = r.OpenTag;
        this.stream.write(this.indent(t, n, i) + "<" + t.name);
        for (h in p = t.attribs) {
          if (o.call(p, h)) {
            a = p[h];
            this.attribute(a, n, i);
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
          this.stream.write(">" + this.endline(t, n, i));
          n.state = r.InsideTag;
          l = 0;
          f = (d = t.children).length;
          for (; l < f; l++) {
            s = d[l];
            this.writeChildNode(s, n, i + 1);
          }
          n.state = r.CloseTag;
          this.stream.write(this.indent(t, n, i) + "</" + t.name + ">");
        } else {
          this.stream.write(">");
          n.state = r.InsideTag;
          n.suppressPrettyCount++;
          true;
          this.writeChildNode(u, n, i + 1);
          n.suppressPrettyCount--;
          false;
          n.state = r.CloseTag;
          this.stream.write("</" + t.name + ">");
        }
        this.stream.write(this.endline(t, n, i));
        n.state = r.None;
        return this.closeNode(t, n, i);
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
    }(i);
  }).call(this);
}, function (t, e, n) {
  (function () {
    "use strict";

    var t;
    var r;
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var l;
    function f(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    var h = {}.hasOwnProperty;
    u = n(345);
    o = n(156);
    t = n(360);
    c = n(246);
    l = n(244).setImmediate;
    r = n(168).defaults;
    a = function (t) {
      return typeof t == "object" && t != null && Object.keys(t).length === 0;
    };
    s = function (t, e, n) {
      var r;
      var i;
      r = 0;
      i = t.length;
      for (; r < i; r++) {
        e = (0, t[r])(e, n);
      }
      return e;
    };
    i = function (t, e, n) {
      var r;
      (r = Object.create(null)).value = n;
      r.writable = true;
      r.enumerable = true;
      r.configurable = true;
      return Object.defineProperty(t, e, r);
    };
    e.Parser = function (n) {
      function o(t) {
        var n;
        var i;
        var o;
        this.parseStringPromise = f(this.parseStringPromise, this);
        this.parseString = f(this.parseString, this);
        this.reset = f(this.reset, this);
        this.assignOrPush = f(this.assignOrPush, this);
        this.processAsync = f(this.processAsync, this);
        if (!(this instanceof e.Parser)) {
          return new e.Parser(t);
        }
        this.options = {};
        for (n in i = r[0.2]) {
          if (h.call(i, n)) {
            o = i[n];
            this.options[n] = o;
          }
        }
        for (n in t) {
          if (h.call(t, n)) {
            o = t[n];
            this.options[n] = o;
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
      })(o, n);
      o.prototype.processAsync = function () {
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
            return l(this.processAsync);
          }
        } catch (t) {
          e = t;
          if (!this.saxParser.errThrown) {
            this.saxParser.errThrown = true;
            return this.emit(e);
          }
        }
      };
      o.prototype.assignOrPush = function (t, e, n) {
        if (e in t) {
          if (!(t[e] instanceof Array)) {
            i(t, e, [t[e]]);
          }
          return t[e].push(n);
        } else if (this.options.explicitArray) {
          return i(t, e, [n]);
        } else {
          return i(t, e, n);
        }
      };
      o.prototype.reset = function () {
        var t;
        var e;
        var n;
        var r;
        var o;
        this.removeAllListeners();
        this.saxParser = u.parser(this.options.strict, {
          trim: false,
          normalize: false,
          xmlns: this.options.xmlns
        });
        this.saxParser.errThrown = false;
        this.saxParser.onerror = (o = this, function (t) {
          o.saxParser.resume();
          if (!o.saxParser.errThrown) {
            o.saxParser.errThrown = true;
            return o.emit("error", t);
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
          return function (o) {
            var a;
            var c;
            var u;
            var l;
            var f;
            (u = {})[e] = "";
            if (!n.options.ignoreAttrs) {
              for (a in f = o.attributes) {
                if (h.call(f, a)) {
                  if (!(t in u) && !n.options.mergeAttrs) {
                    u[t] = {};
                  }
                  c = n.options.attrValueProcessors ? s(n.options.attrValueProcessors, o.attributes[a], a) : o.attributes[a];
                  l = n.options.attrNameProcessors ? s(n.options.attrNameProcessors, a) : a;
                  if (n.options.mergeAttrs) {
                    n.assignOrPush(u, l, c);
                  } else {
                    i(u[t], l, c);
                  }
                }
              }
            }
            u["#name"] = n.options.tagNameProcessors ? s(n.options.tagNameProcessors, o.name) : o.name;
            if (n.options.xmlns) {
              u[n.options.xmlnskey] = {
                uri: o.uri,
                local: o.local
              };
            }
            return r.push(u);
          };
        }(this);
        this.saxParser.onclosetag = function (t) {
          return function () {
            var n;
            var o;
            var c;
            var u;
            var l;
            var f;
            var p;
            var d;
            var m;
            var g;
            f = r.pop();
            l = f["#name"];
            if (!t.options.explicitChildren || !t.options.preserveChildrenOrder) {
              delete f["#name"];
            }
            if (f.cdata === true) {
              n = f.cdata;
              delete f.cdata;
            }
            m = r[r.length - 1];
            if (f[e].match(/^\s*$/) && !n) {
              o = f[e];
              delete f[e];
            } else {
              if (t.options.trim) {
                f[e] = f[e].trim();
              }
              if (t.options.normalize) {
                f[e] = f[e].replace(/\s{2,}/g, " ").trim();
              }
              f[e] = t.options.valueProcessors ? s(t.options.valueProcessors, f[e], l) : f[e];
              if (Object.keys(f).length === 1 && e in f && !t.EXPLICIT_CHARKEY) {
                f = f[e];
              }
            }
            if (a(f)) {
              f = typeof t.options.emptyTag == "function" ? t.options.emptyTag() : t.options.emptyTag !== "" ? t.options.emptyTag : o;
            }
            if (t.options.validator != null) {
              g = "/" + function () {
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
              }().concat(l).join("/");
              (function () {
                var e;
                try {
                  f = t.options.validator(g, m && m[l], f);
                } catch (n) {
                  e = n;
                  return t.emit("error", e);
                }
              })();
            }
            if (t.options.explicitChildren && !t.options.mergeAttrs && typeof f == "object") {
              if (t.options.preserveChildrenOrder) {
                if (m) {
                  m[t.options.childkey] = m[t.options.childkey] || [];
                  p = {};
                  for (c in f) {
                    if (h.call(f, c)) {
                      i(p, c, f[c]);
                    }
                  }
                  m[t.options.childkey].push(p);
                  delete f["#name"];
                  if (Object.keys(f).length === 1 && e in f && !t.EXPLICIT_CHARKEY) {
                    f = f[e];
                  }
                }
              } else {
                u = {};
                if (t.options.attrkey in f) {
                  u[t.options.attrkey] = f[t.options.attrkey];
                  delete f[t.options.attrkey];
                }
                if (!t.options.charsAsChildren && t.options.charkey in f) {
                  u[t.options.charkey] = f[t.options.charkey];
                  delete f[t.options.charkey];
                }
                if (Object.getOwnPropertyNames(f).length > 0) {
                  u[t.options.childkey] = f;
                }
                f = u;
              }
            }
            if (r.length > 0) {
              return t.assignOrPush(m, l, f);
            } else {
              if (t.options.explicitRoot) {
                d = f;
                i(f = {}, l, d);
              }
              t.resultObject = f;
              t.saxParser.ended = true;
              return t.emit("end", t.resultObject);
            }
          };
        }(this);
        n = function (t) {
          return function (n) {
            var i;
            var o;
            if (o = r[r.length - 1]) {
              o[e] += n;
              if (t.options.explicitChildren && t.options.preserveChildrenOrder && t.options.charsAsChildren && (t.options.includeWhiteChars || n.replace(/\\n/g, "").trim() !== "")) {
                o[t.options.childkey] = o[t.options.childkey] || [];
                (i = {
                  "#name": "__text__"
                })[e] = n;
                if (t.options.normalize) {
                  i[e] = i[e].replace(/\s{2,}/g, " ").trim();
                }
                o[t.options.childkey].push(i);
              }
              return o;
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
      o.prototype.parseString = function (e, n) {
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
              l(this.processAsync);
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
      o.prototype.parseStringPromise = function (t) {
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
      return o;
    }(o);
    e.parseString = function (t, n, r) {
      var i;
      var o;
      if (r != null) {
        if (typeof r == "function") {
          i = r;
        }
        if (typeof n == "object") {
          o = n;
        }
      } else {
        if (typeof n == "function") {
          i = n;
        }
        o = {};
      }
      return new e.Parser(o).parseString(t, i);
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
        return new o(t, e);
      };
      e.SAXParser = o;
      e.SAXStream = s;
      e.createStream = function (t, e) {
        return new s(t, e);
      };
      e.MAX_BUFFER_LENGTH = 65536;
      var r;
      var i = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
      function o(t, n) {
        if (!(this instanceof o)) {
          return new o(t, n);
        }
        (function (t) {
          for (var e = 0, n = i.length; e < n; e++) {
            t[i[e]] = "";
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
        this.state = E.BEGIN;
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
        T(this, "onready");
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
      o.prototype = {
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
              case E.BEGIN:
                this.state = E.BEGIN_WHITESPACE;
                if (r === "﻿") {
                  continue;
                }
                M(this, r);
                continue;
              case E.BEGIN_WHITESPACE:
                M(this, r);
                continue;
              case E.TEXT:
                if (this.sawRoot && !this.closedRoot) {
                  var o = n - 1;
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
                  this.textNode += t.substring(o, n - 1);
                }
                if (r !== "<" || this.sawRoot && this.closedRoot && !this.strict) {
                  if (!d(r) && (!this.sawRoot || !!this.closedRoot)) {
                    j(this, "Text data outside of root node.");
                  }
                  if (r === "&") {
                    this.state = E.TEXT_ENTITY;
                  } else {
                    this.textNode += r;
                  }
                } else {
                  this.state = E.OPEN_WAKA;
                  this.startTagPosition = this.position;
                }
                continue;
              case E.SCRIPT:
                if (r === "<") {
                  this.state = E.SCRIPT_ENDING;
                } else {
                  this.script += r;
                }
                continue;
              case E.SCRIPT_ENDING:
                if (r === "/") {
                  this.state = E.CLOSE_TAG;
                } else {
                  this.script += "<" + r;
                  this.state = E.SCRIPT;
                }
                continue;
              case E.OPEN_WAKA:
                if (r === "!") {
                  this.state = E.SGML_DECL;
                  this.sgmlDecl = "";
                } else if (d(r)) ;else if (y(l, r)) {
                  this.state = E.OPEN_TAG;
                  this.tagName = r;
                } else if (r === "/") {
                  this.state = E.CLOSE_TAG;
                  this.tagName = "";
                } else if (r === "?") {
                  this.state = E.PROC_INST;
                  this.procInstName = this.procInstBody = "";
                } else {
                  j(this, "Unencoded <");
                  if (this.startTagPosition + 1 < this.position) {
                    var a = this.position - this.startTagPosition;
                    r = new Array(a).join(" ") + r;
                  }
                  this.textNode += "<" + r;
                  this.state = E.TEXT;
                }
                continue;
              case E.SGML_DECL:
                if (this.sgmlDecl + r === "--") {
                  this.state = E.COMMENT;
                  this.comment = "";
                  this.sgmlDecl = "";
                  continue;
                }
                if (this.doctype && this.doctype !== true && this.sgmlDecl) {
                  this.state = E.DOCTYPE_DTD;
                  this.doctype += "<!" + this.sgmlDecl + r;
                  this.sgmlDecl = "";
                } else if ((this.sgmlDecl + r).toUpperCase() === "[CDATA[") {
                  I(this, "onopencdata");
                  this.state = E.CDATA;
                  this.sgmlDecl = "";
                  this.cdata = "";
                } else if ((this.sgmlDecl + r).toUpperCase() === "DOCTYPE") {
                  this.state = E.DOCTYPE;
                  if (this.doctype || this.sawRoot) {
                    j(this, "Inappropriately located doctype declaration");
                  }
                  this.doctype = "";
                  this.sgmlDecl = "";
                } else if (r === ">") {
                  I(this, "onsgmldeclaration", this.sgmlDecl);
                  this.sgmlDecl = "";
                  this.state = E.TEXT;
                } else if (m(r)) {
                  this.state = E.SGML_DECL_QUOTED;
                  this.sgmlDecl += r;
                } else {
                  this.sgmlDecl += r;
                }
                continue;
              case E.SGML_DECL_QUOTED:
                if (r === this.q) {
                  this.state = E.SGML_DECL;
                  this.q = "";
                }
                this.sgmlDecl += r;
                continue;
              case E.DOCTYPE:
                if (r === ">") {
                  this.state = E.TEXT;
                  I(this, "ondoctype", this.doctype);
                  this.doctype = true;
                } else {
                  this.doctype += r;
                  if (r === "[") {
                    this.state = E.DOCTYPE_DTD;
                  } else if (m(r)) {
                    this.state = E.DOCTYPE_QUOTED;
                    this.q = r;
                  }
                }
                continue;
              case E.DOCTYPE_QUOTED:
                this.doctype += r;
                if (r === this.q) {
                  this.q = "";
                  this.state = E.DOCTYPE;
                }
                continue;
              case E.DOCTYPE_DTD:
                if (r === "]") {
                  this.doctype += r;
                  this.state = E.DOCTYPE;
                } else if (r === "<") {
                  this.state = E.OPEN_WAKA;
                  this.startTagPosition = this.position;
                } else if (m(r)) {
                  this.doctype += r;
                  this.state = E.DOCTYPE_DTD_QUOTED;
                  this.q = r;
                } else {
                  this.doctype += r;
                }
                continue;
              case E.DOCTYPE_DTD_QUOTED:
                this.doctype += r;
                if (r === this.q) {
                  this.state = E.DOCTYPE_DTD;
                  this.q = "";
                }
                continue;
              case E.COMMENT:
                if (r === "-") {
                  this.state = E.COMMENT_ENDING;
                } else {
                  this.comment += r;
                }
                continue;
              case E.COMMENT_ENDING:
                if (r === "-") {
                  this.state = E.COMMENT_ENDED;
                  this.comment = S(this.opt, this.comment);
                  if (this.comment) {
                    I(this, "oncomment", this.comment);
                  }
                  this.comment = "";
                } else {
                  this.comment += "-" + r;
                  this.state = E.COMMENT;
                }
                continue;
              case E.COMMENT_ENDED:
                if (r !== ">") {
                  j(this, "Malformed comment");
                  this.comment += "--" + r;
                  this.state = E.COMMENT;
                } else if (this.doctype && this.doctype !== true) {
                  this.state = E.DOCTYPE_DTD;
                } else {
                  this.state = E.TEXT;
                }
                continue;
              case E.CDATA:
                if (r === "]") {
                  this.state = E.CDATA_ENDING;
                } else {
                  this.cdata += r;
                }
                continue;
              case E.CDATA_ENDING:
                if (r === "]") {
                  this.state = E.CDATA_ENDING_2;
                } else {
                  this.cdata += "]" + r;
                  this.state = E.CDATA;
                }
                continue;
              case E.CDATA_ENDING_2:
                if (r === ">") {
                  if (this.cdata) {
                    I(this, "oncdata", this.cdata);
                  }
                  I(this, "onclosecdata");
                  this.cdata = "";
                  this.state = E.TEXT;
                } else if (r === "]") {
                  this.cdata += "]";
                } else {
                  this.cdata += "]]" + r;
                  this.state = E.CDATA;
                }
                continue;
              case E.PROC_INST:
                if (r === "?") {
                  this.state = E.PROC_INST_ENDING;
                } else if (d(r)) {
                  this.state = E.PROC_INST_BODY;
                } else {
                  this.procInstName += r;
                }
                continue;
              case E.PROC_INST_BODY:
                if (!this.procInstBody && d(r)) {
                  continue;
                }
                if (r === "?") {
                  this.state = E.PROC_INST_ENDING;
                } else {
                  this.procInstBody += r;
                }
                continue;
              case E.PROC_INST_ENDING:
                if (r === ">") {
                  I(this, "onprocessinginstruction", {
                    name: this.procInstName,
                    body: this.procInstBody
                  });
                  this.procInstName = this.procInstBody = "";
                  this.state = E.TEXT;
                } else {
                  this.procInstBody += "?" + r;
                  this.state = E.PROC_INST_BODY;
                }
                continue;
              case E.OPEN_TAG:
                if (y(f, r)) {
                  this.tagName += r;
                } else {
                  C(this);
                  if (r === ">") {
                    R(this);
                  } else if (r === "/") {
                    this.state = E.OPEN_TAG_SLASH;
                  } else {
                    if (!d(r)) {
                      j(this, "Invalid character in tag name");
                    }
                    this.state = E.ATTRIB;
                  }
                }
                continue;
              case E.OPEN_TAG_SLASH:
                if (r === ">") {
                  R(this, true);
                  L(this);
                } else {
                  j(this, "Forward-slash in opening tag not followed by >");
                  this.state = E.ATTRIB;
                }
                continue;
              case E.ATTRIB:
                if (d(r)) {
                  continue;
                }
                if (r === ">") {
                  R(this);
                } else if (r === "/") {
                  this.state = E.OPEN_TAG_SLASH;
                } else if (y(l, r)) {
                  this.attribName = r;
                  this.attribValue = "";
                  this.state = E.ATTRIB_NAME;
                } else {
                  j(this, "Invalid attribute name");
                }
                continue;
              case E.ATTRIB_NAME:
                if (r === "=") {
                  this.state = E.ATTRIB_VALUE;
                } else if (r === ">") {
                  j(this, "Attribute without value");
                  this.attribValue = this.attribName;
                  k(this);
                  R(this);
                } else if (d(r)) {
                  this.state = E.ATTRIB_NAME_SAW_WHITE;
                } else if (y(f, r)) {
                  this.attribName += r;
                } else {
                  j(this, "Invalid attribute name");
                }
                continue;
              case E.ATTRIB_NAME_SAW_WHITE:
                if (r === "=") {
                  this.state = E.ATTRIB_VALUE;
                } else {
                  if (d(r)) {
                    continue;
                  }
                  j(this, "Attribute without value");
                  this.tag.attributes[this.attribName] = "";
                  this.attribValue = "";
                  I(this, "onattribute", {
                    name: this.attribName,
                    value: ""
                  });
                  this.attribName = "";
                  if (r === ">") {
                    R(this);
                  } else if (y(l, r)) {
                    this.attribName = r;
                    this.state = E.ATTRIB_NAME;
                  } else {
                    j(this, "Invalid attribute name");
                    this.state = E.ATTRIB;
                  }
                }
                continue;
              case E.ATTRIB_VALUE:
                if (d(r)) {
                  continue;
                }
                if (m(r)) {
                  this.q = r;
                  this.state = E.ATTRIB_VALUE_QUOTED;
                } else {
                  if (!this.opt.unquotedAttributeValues) {
                    A(this, "Unquoted attribute value");
                  }
                  this.state = E.ATTRIB_VALUE_UNQUOTED;
                  this.attribValue = r;
                }
                continue;
              case E.ATTRIB_VALUE_QUOTED:
                if (r !== this.q) {
                  if (r === "&") {
                    this.state = E.ATTRIB_VALUE_ENTITY_Q;
                  } else {
                    this.attribValue += r;
                  }
                  continue;
                }
                k(this);
                this.q = "";
                this.state = E.ATTRIB_VALUE_CLOSED;
                continue;
              case E.ATTRIB_VALUE_CLOSED:
                if (d(r)) {
                  this.state = E.ATTRIB;
                } else if (r === ">") {
                  R(this);
                } else if (r === "/") {
                  this.state = E.OPEN_TAG_SLASH;
                } else if (y(l, r)) {
                  j(this, "No whitespace between attributes");
                  this.attribName = r;
                  this.attribValue = "";
                  this.state = E.ATTRIB_NAME;
                } else {
                  j(this, "Invalid attribute name");
                }
                continue;
              case E.ATTRIB_VALUE_UNQUOTED:
                if (!g(r)) {
                  if (r === "&") {
                    this.state = E.ATTRIB_VALUE_ENTITY_U;
                  } else {
                    this.attribValue += r;
                  }
                  continue;
                }
                k(this);
                if (r === ">") {
                  R(this);
                } else {
                  this.state = E.ATTRIB;
                }
                continue;
              case E.CLOSE_TAG:
                if (this.tagName) {
                  if (r === ">") {
                    L(this);
                  } else if (y(f, r)) {
                    this.tagName += r;
                  } else if (this.script) {
                    this.script += "</" + this.tagName;
                    this.tagName = "";
                    this.state = E.SCRIPT;
                  } else {
                    if (!d(r)) {
                      j(this, "Invalid tagname in closing tag");
                    }
                    this.state = E.CLOSE_TAG_SAW_WHITE;
                  }
                } else {
                  if (d(r)) {
                    continue;
                  }
                  if (b(l, r)) {
                    if (this.script) {
                      this.script += "</" + r;
                      this.state = E.SCRIPT;
                    } else {
                      j(this, "Invalid tagname in closing tag.");
                    }
                  } else {
                    this.tagName = r;
                  }
                }
                continue;
              case E.CLOSE_TAG_SAW_WHITE:
                if (d(r)) {
                  continue;
                }
                if (r === ">") {
                  L(this);
                } else {
                  j(this, "Invalid characters in closing tag");
                }
                continue;
              case E.TEXT_ENTITY:
              case E.ATTRIB_VALUE_ENTITY_Q:
              case E.ATTRIB_VALUE_ENTITY_U:
                var s;
                var c;
                switch (this.state) {
                  case E.TEXT_ENTITY:
                    s = E.TEXT;
                    c = "textNode";
                    break;
                  case E.ATTRIB_VALUE_ENTITY_Q:
                    s = E.ATTRIB_VALUE_QUOTED;
                    c = "attribValue";
                    break;
                  case E.ATTRIB_VALUE_ENTITY_U:
                    s = E.ATTRIB_VALUE_UNQUOTED;
                    c = "attribValue";
                }
                if (r === ";") {
                  var u = P(this);
                  if (this.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(u)) {
                    this.entity = "";
                    this.state = s;
                    this.write(u);
                  } else {
                    this[c] += u;
                    this.entity = "";
                    this.state = s;
                  }
                } else if (y(this.entity.length ? p : h, r)) {
                  this.entity += r;
                } else {
                  j(this, "Invalid character in entity name");
                  this[c] += "&" + this.entity + r;
                  this.entity = "";
                  this.state = s;
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
              for (var o = 0, a = i.length; o < a; o++) {
                var s = t[i[o]].length;
                if (s > n) {
                  switch (i[o]) {
                    case "textNode":
                      O(t);
                      break;
                    case "cdata":
                      I(t, "oncdata", t.cdata);
                      t.cdata = "";
                      break;
                    case "script":
                      I(t, "onscript", t.script);
                      t.script = "";
                      break;
                    default:
                      A(t, "Max buffer length exceeded: " + i[o]);
                  }
                }
                r = Math.max(r, s);
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
          O(t = this);
          if (t.cdata !== "") {
            I(t, "oncdata", t.cdata);
            t.cdata = "";
          }
          if (t.script !== "") {
            I(t, "onscript", t.script);
            t.script = "";
          }
        }
      };
      try {
        r = n(348).Stream;
      } catch (t) {
        r = function () {};
      }
      r ||= function () {};
      var a = e.EVENTS.filter(function (t) {
        return t !== "error" && t !== "end";
      });
      function s(t, e) {
        if (!(this instanceof s)) {
          return new s(t, e);
        }
        r.apply(this);
        this._parser = new o(t, e);
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
        a.forEach(function (t) {
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
      s.prototype = Object.create(r.prototype, {
        constructor: {
          value: s
        }
      });
      s.prototype.write = function (e) {
        if (typeof t == "function" && typeof t.isBuffer == "function" && t.isBuffer(e)) {
          if (!this._decoder) {
            var r = n(186).StringDecoder;
            this._decoder = new r("utf8");
          }
          e = this._decoder.write(e);
        }
        this._parser.write(e.toString());
        this.emit("data", e);
        return true;
      };
      s.prototype.end = function (t) {
        if (t && t.length) {
          this.write(t);
        }
        this._parser.end();
        return true;
      };
      s.prototype.on = function (t, e) {
        var n = this;
        if (!n._parser["on" + t] && a.indexOf(t) !== -1) {
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
      var l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var f = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var h = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function d(t) {
        return t === " " || t === "\n" || t === "\r" || t === "\t";
      }
      function m(t) {
        return t === "\"" || t === "'";
      }
      function g(t) {
        return t === ">" || d(t);
      }
      function y(t, e) {
        return t.test(e);
      }
      function b(t, e) {
        return !y(t, e);
      }
      var w;
      var v;
      var _;
      var E = 0;
      e.STATE = {
        BEGIN: E++,
        BEGIN_WHITESPACE: E++,
        TEXT: E++,
        TEXT_ENTITY: E++,
        OPEN_WAKA: E++,
        SGML_DECL: E++,
        SGML_DECL_QUOTED: E++,
        DOCTYPE: E++,
        DOCTYPE_QUOTED: E++,
        DOCTYPE_DTD: E++,
        DOCTYPE_DTD_QUOTED: E++,
        COMMENT_STARTING: E++,
        COMMENT: E++,
        COMMENT_ENDING: E++,
        COMMENT_ENDED: E++,
        CDATA: E++,
        CDATA_ENDING: E++,
        CDATA_ENDING_2: E++,
        PROC_INST: E++,
        PROC_INST_BODY: E++,
        PROC_INST_ENDING: E++,
        OPEN_TAG: E++,
        OPEN_TAG_SLASH: E++,
        ATTRIB: E++,
        ATTRIB_NAME: E++,
        ATTRIB_NAME_SAW_WHITE: E++,
        ATTRIB_VALUE: E++,
        ATTRIB_VALUE_QUOTED: E++,
        ATTRIB_VALUE_CLOSED: E++,
        ATTRIB_VALUE_UNQUOTED: E++,
        ATTRIB_VALUE_ENTITY_Q: E++,
        ATTRIB_VALUE_ENTITY_U: E++,
        CLOSE_TAG: E++,
        CLOSE_TAG_SAW_WHITE: E++,
        SCRIPT: E++,
        SCRIPT_ENDING: E++
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
      for (var x in e.STATE) {
        e.STATE[e.STATE[x]] = x;
      }
      function T(t, e, n) {
        if (t[e]) {
          t[e](n);
        }
      }
      function I(t, e, n) {
        if (t.textNode) {
          O(t);
        }
        T(t, e, n);
      }
      function O(t) {
        t.textNode = S(t.opt, t.textNode);
        if (t.textNode) {
          T(t, "ontext", t.textNode);
        }
        t.textNode = "";
      }
      function S(t, e) {
        if (t.trim) {
          e = e.trim();
        }
        if (t.normalize) {
          e = e.replace(/\s+/g, " ");
        }
        return e;
      }
      function A(t, e) {
        O(t);
        if (t.trackPosition) {
          e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c;
        }
        e = new Error(e);
        t.error = e;
        T(t, "onerror", e);
        return t;
      }
      function N(t) {
        if (t.sawRoot && !t.closedRoot) {
          j(t, "Unclosed root tag");
        }
        if (t.state !== E.BEGIN && t.state !== E.BEGIN_WHITESPACE && t.state !== E.TEXT) {
          A(t, "Unexpected end");
        }
        O(t);
        t.c = "";
        t.closed = true;
        T(t, "onend");
        o.call(t, t.strict, t.opt);
        return t;
      }
      function j(t, e) {
        if (typeof t != "object" || !(t instanceof o)) {
          throw new Error("bad call to strictFail");
        }
        if (t.strict) {
          A(t, e);
        }
      }
      function C(t) {
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
        I(t, "onopentagstart", n);
      }
      function D(t, e) {
        var n = t.indexOf(":") < 0 ? ["", t] : t.split(":");
        var r = n[0];
        var i = n[1];
        if (e && t === "xmlns") {
          r = "xmlns";
          i = "";
        }
        return {
          prefix: r,
          local: i
        };
      }
      function k(t) {
        if (!t.strict) {
          t.attribName = t.attribName[t.looseCase]();
        }
        if (t.attribList.indexOf(t.attribName) !== -1 || t.tag.attributes.hasOwnProperty(t.attribName)) {
          t.attribName = t.attribValue = "";
        } else {
          if (t.opt.xmlns) {
            var e = D(t.attribName, true);
            var n = e.prefix;
            var r = e.local;
            if (n === "xmlns") {
              if (r === "xml" && t.attribValue !== c) {
                j(t, "xml: prefix must be bound to " + c + "\nActual: " + t.attribValue);
              } else if (r === "xmlns" && t.attribValue !== "http://www.w3.org/2000/xmlns/") {
                j(t, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + t.attribValue);
              } else {
                var i = t.tag;
                var o = t.tags[t.tags.length - 1] || t;
                if (i.ns === o.ns) {
                  i.ns = Object.create(o.ns);
                }
                i.ns[r] = t.attribValue;
              }
            }
            t.attribList.push([t.attribName, t.attribValue]);
          } else {
            t.tag.attributes[t.attribName] = t.attribValue;
            I(t, "onattribute", {
              name: t.attribName,
              value: t.attribValue
            });
          }
          t.attribName = t.attribValue = "";
        }
      }
      function R(t, e) {
        if (t.opt.xmlns) {
          var n = t.tag;
          var r = D(t.tagName);
          n.prefix = r.prefix;
          n.local = r.local;
          n.uri = n.ns[r.prefix] || "";
          if (n.prefix && !n.uri) {
            j(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName));
            n.uri = r.prefix;
          }
          var i = t.tags[t.tags.length - 1] || t;
          if (n.ns && i.ns !== n.ns) {
            Object.keys(n.ns).forEach(function (e) {
              I(t, "onopennamespace", {
                prefix: e,
                uri: n.ns[e]
              });
            });
          }
          for (var o = 0, a = t.attribList.length; o < a; o++) {
            var s = t.attribList[o];
            var c = s[0];
            var u = s[1];
            var l = D(c, true);
            var f = l.prefix;
            var h = l.local;
            var p = f === "" ? "" : n.ns[f] || "";
            var d = {
              name: c,
              value: u,
              prefix: f,
              local: h,
              uri: p
            };
            if (f && f !== "xmlns" && !p) {
              j(t, "Unbound namespace prefix: " + JSON.stringify(f));
              d.uri = f;
            }
            t.tag.attributes[c] = d;
            I(t, "onattribute", d);
          }
          t.attribList.length = 0;
        }
        t.tag.isSelfClosing = !!e;
        t.sawRoot = true;
        t.tags.push(t.tag);
        I(t, "onopentag", t.tag);
        if (!e) {
          if (t.noscript || t.tagName.toLowerCase() !== "script") {
            t.state = E.TEXT;
          } else {
            t.state = E.SCRIPT;
          }
          t.tag = null;
          t.tagName = "";
        }
        t.attribName = t.attribValue = "";
        t.attribList.length = 0;
      }
      function L(t) {
        if (!t.tagName) {
          j(t, "Weird empty close tag.");
          t.textNode += "</>";
          t.state = E.TEXT;
          return;
        }
        if (t.script) {
          if (t.tagName !== "script") {
            t.script += "</" + t.tagName + ">";
            t.tagName = "";
            t.state = E.SCRIPT;
            return;
          }
          I(t, "onscript", t.script);
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
          t.state = E.TEXT;
          return;
        }
        t.tagName = n;
        for (var i = t.tags.length; i-- > e;) {
          var o = t.tag = t.tags.pop();
          t.tagName = t.tag.name;
          I(t, "onclosetag", t.tagName);
          var a = {};
          for (var s in o.ns) {
            a[s] = o.ns[s];
          }
          var c = t.tags[t.tags.length - 1] || t;
          if (t.opt.xmlns && o.ns !== c.ns) {
            Object.keys(o.ns).forEach(function (e) {
              var n = o.ns[e];
              I(t, "onclosenamespace", {
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
        t.state = E.TEXT;
      }
      function P(t) {
        var e;
        var n = t.entity;
        var r = n.toLowerCase();
        var i = "";
        if (t.ENTITIES[n]) {
          return t.ENTITIES[n];
        } else if (t.ENTITIES[r]) {
          return t.ENTITIES[r];
        } else {
          if ((n = r).charAt(0) === "#") {
            if (n.charAt(1) === "x") {
              n = n.slice(2);
              i = (e = parseInt(n, 16)).toString(16);
            } else {
              n = n.slice(1);
              i = (e = parseInt(n, 10)).toString(10);
            }
          }
          n = n.replace(/^0+/, "");
          if (isNaN(e) || i.toLowerCase() !== n) {
            j(t, "Invalid character entity");
            return "&" + t.entity + ";";
          } else {
            return String.fromCodePoint(e);
          }
        }
      }
      function M(t, e) {
        if (e === "<") {
          t.state = E.OPEN_WAKA;
          t.startTagPosition = t.position;
        } else if (!d(e)) {
          j(t, "Non-whitespace before first tag.");
          t.textNode = e;
          t.state = E.TEXT;
        }
      }
      function F(t, e) {
        var n = "";
        if (e < t.length) {
          n = t.charAt(e);
        }
        return n;
      }
      E = e.STATE;
      if (!String.fromCodePoint) {
        w = String.fromCharCode;
        v = Math.floor;
        _ = function () {
          var t;
          var e;
          var n = 16384;
          var r = [];
          var i = -1;
          var o = arguments.length;
          if (!o) {
            return "";
          }
          var a = "";
          while (++i < o) {
            var s = Number(arguments[i]);
            if (!isFinite(s) || s < 0 || s > 1114111 || v(s) !== s) {
              throw RangeError("Invalid code point: " + s);
            }
            if (s <= 65535) {
              r.push(s);
            } else {
              t = 55296 + ((s -= 65536) >> 10);
              e = s % 1024 + 56320;
              r.push(t, e);
            }
            if (i + 1 === o || r.length > n) {
              a += w.apply(null, r);
              r.length = 0;
            }
          }
          return a;
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
  }).call(this, n(153).Buffer);
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
    var a = r[0];
    var s = r[1];
    var c = new o(function (t, e, n) {
      return (e + n) * 3 / 4 - n;
    }(0, a, s));
    var l = 0;
    var f = s > 0 ? a - 4 : a;
    for (n = 0; n < f; n += 4) {
      e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)];
      c[l++] = e >> 16 & 255;
      c[l++] = e >> 8 & 255;
      c[l++] = e & 255;
    }
    if (s === 2) {
      e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4;
      c[l++] = e & 255;
    }
    if (s === 1) {
      e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2;
      c[l++] = e >> 8 & 255;
      c[l++] = e & 255;
    }
    return c;
  };
  e.fromByteArray = function (t) {
    var e;
    var n = t.length;
    var i = n % 3;
    var o = [];
    for (var a = 0, s = n - i; a < s; a += 16383) {
      o.push(l(t, a, a + 16383 > s ? s : a + 16383));
    }
    if (i === 1) {
      e = t[n - 1];
      o.push(r[e >> 2] + r[e << 4 & 63] + "==");
    } else if (i === 2) {
      e = (t[n - 2] << 8) + t[n - 1];
      o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=");
    }
    return o.join("");
  };
  var r = [];
  var i = [];
  var o = typeof Uint8Array != "undefined" ? Uint8Array : Array;
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var s = 0, c = a.length; s < c; ++s) {
    r[s] = a[s];
    i[a.charCodeAt(s)] = s;
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
  function l(t, e, n) {
    var i;
    var o;
    var a = [];
    for (var s = e; s < n; s += 3) {
      i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255);
      a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[o & 63]);
    }
    return a.join("");
  }
  i["-".charCodeAt(0)] = 62;
  i["_".charCodeAt(0)] = 63;
}, function (t, e) {
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  e.read = function (t, e, n, r, i) {
    var o;
    var a;
    var s = i * 8 - r - 1;
    var c = (1 << s) - 1;
    var u = c >> 1;
    var l = -7;
    var f = n ? i - 1 : 0;
    var h = n ? -1 : 1;
    var p = t[e + f];
    f += h;
    o = p & (1 << -l) - 1;
    p >>= -l;
    l += s;
    for (; l > 0; l -= 8) {
      o = o * 256 + t[e + f];
      f += h;
    }
    a = o & (1 << -l) - 1;
    o >>= -l;
    l += r;
    for (; l > 0; l -= 8) {
      a = a * 256 + t[e + f];
      f += h;
    }
    if (o === 0) {
      o = 1 - u;
    } else {
      if (o === c) {
        if (a) {
          return NaN;
        } else {
          return (p ? -1 : 1) * Infinity;
        }
      }
      a += Math.pow(2, r);
      o -= u;
    }
    return (p ? -1 : 1) * a * Math.pow(2, o - r);
  };
  e.write = function (t, e, n, r, i, o) {
    var a;
    var s;
    var c;
    var u = o * 8 - i - 1;
    var l = (1 << u) - 1;
    var f = l >> 1;
    var h = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var p = r ? 0 : o - 1;
    var d = r ? 1 : -1;
    var m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    e = Math.abs(e);
    if (isNaN(e) || e === Infinity) {
      s = isNaN(e) ? 1 : 0;
      a = l;
    } else {
      a = Math.floor(Math.log(e) / Math.LN2);
      if (e * (c = Math.pow(2, -a)) < 1) {
        a--;
        c *= 2;
      }
      if ((e += a + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2) {
        a++;
        c /= 2;
      }
      if (a + f >= l) {
        s = 0;
        a = l;
      } else if (a + f >= 1) {
        s = (e * c - 1) * Math.pow(2, i);
        a += f;
      } else {
        s = e * Math.pow(2, f - 1) * Math.pow(2, i);
        a = 0;
      }
    }
    for (; i >= 8; i -= 8) {
      t[n + p] = s & 255;
      p += d;
      s /= 256;
    }
    a = a << i | s;
    u += i;
    for (; u > 0; u -= 8) {
      t[n + p] = a & 255;
      p += d;
      a /= 256;
    }
    t[n + p - d] |= m * 128;
  };
}, function (t, e, n) {
  t.exports = i;
  var r = n(156).EventEmitter;
  function i() {
    r.call(this);
  }
  n(91)(i, r);
  i.Readable = n(183);
  i.Writable = n(356);
  i.Duplex = n(357);
  i.Transform = n(358);
  i.PassThrough = n(359);
  i.Stream = i;
  i.prototype.pipe = function (t, e) {
    var n = this;
    function i(e) {
      if (t.writable && t.write(e) === false && n.pause) {
        n.pause();
      }
    }
    function o() {
      if (n.readable && n.resume) {
        n.resume();
      }
    }
    n.on("data", i);
    t.on("drain", o);
    if (!t._isStdio && (!e || e.end !== false)) {
      n.on("end", s);
      n.on("close", c);
    }
    var a = false;
    function s() {
      if (!a) {
        a = true;
        t.end();
      }
    }
    function c() {
      if (!a) {
        a = true;
        if (typeof t.destroy == "function") {
          t.destroy();
        }
      }
    }
    function u(t) {
      l();
      if (r.listenerCount(this, "error") === 0) {
        throw t;
      }
    }
    function l() {
      n.removeListener("data", i);
      t.removeListener("drain", o);
      n.removeListener("end", s);
      n.removeListener("close", c);
      n.removeListener("error", u);
      t.removeListener("error", u);
      n.removeListener("end", l);
      n.removeListener("close", l);
      t.removeListener("close", l);
    }
    n.on("error", u);
    t.on("error", u);
    n.on("end", l);
    n.on("close", l);
    t.on("close", l);
    t.emit("pipe", n);
    return t;
  };
}, function (t, e) {}, function (t, e, n) {
  "use strict";

  var r = n(184).Buffer;
  var i = n(351);
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
      var i;
      var o = r.allocUnsafe(t >>> 0);
      for (var a = this.head, s = 0; a;) {
        e = a.data;
        n = o;
        i = s;
        e.copy(n, i);
        s += a.data.length;
        a = a.next;
      }
      return o;
    };
    return t;
  }();
  if (i && i.inspect && i.inspect.custom) {
    t.exports.prototype[i.inspect.custom] = function () {
      var t = i.inspect({
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
        var i;
        var o;
        var a;
        var s;
        var c = 1;
        var u = {};
        var l = false;
        var f = t.document;
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
            (o = new MessageChannel()).port1.onmessage = function (t) {
              d(t.data);
            };
            r = function (t) {
              o.port2.postMessage(t);
            };
          } else if (f && "onreadystatechange" in f.createElement("script")) {
            i = f.documentElement;
            r = function (t) {
              var e = f.createElement("script");
              e.onreadystatechange = function () {
                d(t);
                e.onreadystatechange = null;
                i.removeChild(e);
                e = null;
              };
              i.appendChild(e);
            };
          } else {
            r = function (t) {
              setTimeout(d, 0, t);
            };
          }
        } else {
          a = "setImmediate$" + Math.random() + "$";
          s = function (e) {
            if (e.source === t && typeof e.data == "string" && e.data.indexOf(a) === 0) {
              d(+e.data.slice(a.length));
            }
          };
          if (t.addEventListener) {
            t.addEventListener("message", s, false);
          } else {
            t.attachEvent("onmessage", s);
          }
          r = function (e) {
            t.postMessage(a + e, "*");
          };
        }
        h.setImmediate = function (t) {
          if (typeof t != "function") {
            t = new Function("" + t);
          }
          for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
            e[n] = arguments[n + 1];
          }
          var i = {
            callback: t,
            args: e
          };
          u[c] = i;
          r(c);
          return c++;
        };
        h.clearImmediate = p;
      }
      function p(t) {
        delete u[t];
      }
      function d(t) {
        if (l) {
          setTimeout(d, 0, t);
        } else {
          var e = u[t];
          if (e) {
            l = true;
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
              l = false;
            }
          }
        }
      }
    })(typeof self == "undefined" ? t === undefined ? this : t : self);
  }).call(this, n(25), n(94));
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
  }).call(this, n(25));
}, function (t, e, n) {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var r = n(153);
  var i = r.Buffer;
  function o(t, e) {
    for (var n in t) {
      e[n] = t[n];
    }
  }
  function a(t, e, n) {
    return i(t, e, n);
  }
  if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
    t.exports = r;
  } else {
    o(r, e);
    e.Buffer = a;
  }
  a.prototype = Object.create(i.prototype);
  o(i, a);
  a.from = function (t, e, n) {
    if (typeof t == "number") {
      throw new TypeError("Argument must not be a number");
    }
    return i(t, e, n);
  };
  a.alloc = function (t, e, n) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    var r = i(t);
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
  a.allocUnsafe = function (t) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    return i(t);
  };
  a.allocUnsafeSlow = function (t) {
    if (typeof t != "number") {
      throw new TypeError("Argument must be a number");
    }
    return r.SlowBuffer(t);
  };
}, function (t, e, n) {
  "use strict";

  t.exports = o;
  var r = n(245);
  var i = Object.create(n(108));
  function o(t) {
    if (!(this instanceof o)) {
      return new o(t);
    }
    r.call(this, t);
  }
  i.inherits = n(91);
  i.inherits(o, r);
  o.prototype._transform = function (t, e, n) {
    n(null, t);
  };
}, function (t, e, n) {
  t.exports = n(185);
}, function (t, e, n) {
  t.exports = n(80);
}, function (t, e, n) {
  t.exports = n(183).Transform;
}, function (t, e, n) {
  t.exports = n(183).PassThrough;
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
  "use strict";

  var r;
  var i = n(362);
  var o = n(16);
  var a = n(4);
  var s = n(12);
  var c = n(11);
  var u = n(93);
  var l = n(20);
  var f = n(26);
  var h = n(21).f;
  var p = n(363);
  var d = n(83);
  var m = n(8);
  var g = n(58);
  var y = a.Int8Array;
  var b = y && y.prototype;
  var w = a.Uint8ClampedArray;
  var v = w && w.prototype;
  var _ = y && p(y);
  var E = b && p(b);
  var x = Object.prototype;
  var T = x.isPrototypeOf;
  var I = m("toStringTag");
  var O = g("TYPED_ARRAY_TAG");
  var S = i && !!d && u(a.opera) !== "Opera";
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
  function C(t) {
    if (!s(t)) {
      return false;
    }
    var e = u(t);
    return c(N, e) || c(j, e);
  }
  for (r in N) {
    if (!a[r]) {
      S = false;
    }
  }
  if ((!S || typeof _ != "function" || _ === Function.prototype) && (_ = function () {
    throw TypeError("Incorrect invocation");
  }, S)) {
    for (r in N) {
      if (a[r]) {
        d(a[r], _);
      }
    }
  }
  if ((!S || !E || E === x) && (E = _.prototype, S)) {
    for (r in N) {
      if (a[r]) {
        d(a[r].prototype, E);
      }
    }
  }
  if (S && p(v) !== E) {
    d(v, E);
  }
  if (o && !c(E, I)) {
    A = true;
    h(E, I, {
      get: function () {
        if (s(this)) {
          return this[O];
        } else {
          return undefined;
        }
      }
    });
    for (r in N) {
      if (a[r]) {
        l(a[r], O, r);
      }
    }
  }
  t.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: S,
    TYPED_ARRAY_TAG: A && O,
    aTypedArray: function (t) {
      if (C(t)) {
        return t;
      }
      throw TypeError("Target is not a typed array");
    },
    aTypedArrayConstructor: function (t) {
      if (d) {
        if (T.call(_, t)) {
          return t;
        }
      } else {
        for (var e in N) {
          if (c(N, r)) {
            var n = a[e];
            if (n && (t === n || T.call(n, t))) {
              return t;
            }
          }
        }
      }
      throw TypeError("Target is not a typed array constructor");
    },
    exportTypedArrayMethod: function (t, e, n) {
      if (o) {
        if (n) {
          for (var r in N) {
            var i = a[r];
            if (i && c(i.prototype, t)) {
              try {
                delete i.prototype[t];
              } catch (t) {}
            }
          }
        }
        if (!E[t] || !!n) {
          f(E, t, n ? e : S && b[t] || e);
        }
      }
    },
    exportTypedArrayStaticMethod: function (t, e, n) {
      var r;
      var i;
      if (o) {
        if (d) {
          if (n) {
            for (r in N) {
              if ((i = a[r]) && c(i, t)) {
                try {
                  delete i[t];
                } catch (t) {}
              }
            }
          }
          if (_[t] && !n) {
            return;
          }
          try {
            return f(_, t, n ? e : S && _[t] || e);
          } catch (t) {}
        }
        for (r in N) {
          if (!!(i = a[r]) && (!i[t] || !!n)) {
            f(i, t, e);
          }
        }
      }
    },
    isView: function (t) {
      if (!s(t)) {
        return false;
      }
      var e = u(t);
      return e === "DataView" || c(N, e) || c(j, e);
    },
    isTypedArray: C,
    TypedArray: _,
    TypedArrayPrototype: E
  };
}, function (t, e) {
  t.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
}, function (t, e, n) {
  var r = n(11);
  var i = n(78);
  var o = n(79);
  var a = n(364);
  var s = o("IE_PROTO");
  var c = Object.prototype;
  t.exports = a ? Object.getPrototypeOf : function (t) {
    t = i(t);
    if (r(t, s)) {
      return t[s];
    } else if (typeof t.constructor == "function" && t instanceof t.constructor) {
      return t.constructor.prototype;
    } else if (t instanceof Object) {
      return c;
    } else {
      return null;
    }
  };
}, function (t, e, n) {
  var r = n(9);
  t.exports = !r(function () {
    function t() {}
    t.prototype.constructor = null;
    return Object.getPrototypeOf(new t()) !== t.prototype;
  });
}, function (t, e) {
  var n = Math.floor;
  function r(t, e) {
    var a = t.length;
    var s = n(a / 2);
    if (a < 8) {
      return i(t, e);
    } else {
      return o(r(t.slice(0, s), e), r(t.slice(s), e), e);
    }
  }
  function i(t, e) {
    var n;
    var r;
    for (var i = t.length, o = 1; o < i;) {
      r = o;
      n = t[o];
      while (r && e(t[r - 1], n) > 0) {
        t[r] = t[--r];
      }
      if (r !== o++) {
        t[r] = n;
      }
    }
    return t;
  }
  function o(t, e, n) {
    for (var r = t.length, i = e.length, o = 0, a = 0, s = []; o < r || a < i;) {
      if (o < r && a < i) {
        s.push(n(t[o], e[a]) <= 0 ? t[o++] : e[a++]);
      } else {
        s.push(o < r ? t[o++] : e[a++]);
      }
    }
    return s;
  }
  t.exports = r;
}, function (t, e, n) {
  var r = n(28).match(/firefox\/(\d+)/i);
  t.exports = !!r && +r[1];
}, function (t, e, n) {
  var r = n(28);
  t.exports = /MSIE|Trident/.test(r);
}, function (t, e, n) {
  var r = n(28).match(/AppleWebKit\/(\d+)\./);
  t.exports = !!r && +r[1];
}, function (t, e, n) {
  n(370);
  var r = n(374);
  t.exports = r;
}, function (t, e, n) {
  n(247);
}, function (t, e, n) {
  var r = n(45);
  var i = n(84);
  var o = n(17)("match");
  t.exports = function (t) {
    var e;
    return r(t) && ((e = t[o]) !== undefined ? !!e : i(t) == "RegExp");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(32);
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

  var r = n(212).charAt;
  t.exports = function (t, e, n) {
    return e + (n ? r(t, e).length : 1);
  };
}, function (t, e, n) {
  var r = n(375);
  var i = String.prototype;
  t.exports = function (t) {
    var e = t.matchAll;
    if (typeof t == "string" || t === i || t instanceof String && e === i.matchAll) {
      return r;
    } else {
      return e;
    }
  };
}, function (t, e, n) {
  n(247);
  var r = n(376);
  t.exports = r("String").matchAll;
}, function (t, e, n) {
  var r = n(104);
  t.exports = function (t) {
    return r[t + "Prototype"];
  };
}, function (t, e, n) {
  var r = n(220);
  var i = Object.prototype;
  var o = i.hasOwnProperty;
  var a = i.toString;
  var s = r ? r.toStringTag : undefined;
  t.exports = function (t) {
    var e = o.call(t, s);
    var n = t[s];
    try {
      t[s] = undefined;
      var r = true;
    } catch (t) {}
    var i = a.call(t);
    if (r) {
      if (e) {
        t[s] = n;
      } else {
        delete t[s];
      }
    }
    return i;
  };
}, function (t, e) {
  var n = Object.prototype.toString;
  t.exports = function (t) {
    return n.call(t);
  };
}, function (t, e, n) {
  "use strict";

  (function (t) {
    n.d(e, "a", function () {
      return p;
    });
    n(397);
    n(19);
    n(64);
    var r = n(380);
    var i = n.n(r);
    var o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
    var a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
    var s = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");
    function c(t) {
      return (t || "").toString().replace(s, "");
    }
    var u = [["#", "hash"], ["?", "query"], function (t) {
      return t.replace("\\", "/");
    }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", undefined, 1, 1], [/:(\d+)$/, "port", undefined, 1], [NaN, "hostname", undefined, 1, 1]];
    var l = {
      hash: 1,
      query: 1
    };
    function f(e) {
      var n;
      var r = (typeof window != "undefined" ? window : t !== undefined ? t : typeof self != "undefined" ? self : {}).location || {};
      var i = {};
      var a = typeof (e = e || r);
      if (e.protocol === "blob:") {
        i = new p(unescape(e.pathname), {});
      } else if (a === "string") {
        i = new p(e, {});
        for (n in l) {
          delete i[n];
        }
      } else if (a === "object") {
        for (n in e) {
          if (!(n in l)) {
            i[n] = e[n];
          }
        }
        if (i.slashes === undefined) {
          i.slashes = o.test(e.href);
        }
      }
      return i;
    }
    function h(t) {
      t = c(t);
      var e = a.exec(t);
      return {
        protocol: e[1] ? e[1].toLowerCase() : "",
        slashes: !!e[2],
        rest: e[3]
      };
    }
    function p(t, e) {
      t = c(t);
      var n;
      var r;
      var o;
      var a;
      var s;
      var l;
      var p = u.slice();
      var d = this;
      var m = 0;
      e = f(e);
      n = !(r = h(t || "")).protocol && !r.slashes;
      d.slashes = r.slashes || n && e.slashes;
      d.protocol = r.protocol || e.protocol || "";
      t = r.rest;
      if (!r.slashes) {
        p[3] = [/(.*)/, "pathname"];
      }
      for (; m < p.length; m++) {
        if (typeof (a = p[m]) != "function") {
          o = a[0];
          l = a[1];
          if (o != o) {
            d[l] = t;
          } else if (typeof o == "string") {
            if (~(s = t.indexOf(o))) {
              if (typeof a[2] == "number") {
                d[l] = t.slice(0, s);
                t = t.slice(s + a[2]);
              } else {
                d[l] = t.slice(s);
                t = t.slice(0, s);
              }
            }
          } else if (s = o.exec(t)) {
            d[l] = s[1];
            t = t.slice(0, s.index);
          }
          d[l] = d[l] || n && a[3] && e[l] || "";
          if (a[4]) {
            d[l] = d[l].toLowerCase();
          }
        } else {
          t = a(t);
        }
      }
      if (n && e.slashes && d.pathname.charAt(0) !== "/" && (d.pathname !== "" || e.pathname !== "")) {
        d.pathname = function (t, e) {
          if (t === "") {
            return e;
          }
          var n = (e || "/").split("/").slice(0, -1).concat(t.split("/"));
          for (var r = n.length, i = n[r - 1], o = false, a = 0; r--;) {
            if (n[r] === ".") {
              n.splice(r, 1);
            } else if (n[r] === "..") {
              n.splice(r, 1);
              a++;
            } else if (a) {
              if (r === 0) {
                o = true;
              }
              n.splice(r, 1);
              a--;
            }
          }
          if (o) {
            n.unshift("");
          }
          if (i === "." || i === "..") {
            n.push("");
          }
          return n.join("/");
        }(d.pathname, e.pathname);
      }
      if (!i()(d.port, d.protocol)) {
        d.host = d.hostname;
        d.port = "";
      }
      d.username = d.password = "";
      if (d.auth) {
        a = d.auth.split(":");
        d.username = a[0] || "";
        d.password = a[1] || "";
      }
      d.origin = d.protocol && d.host && d.protocol !== "file:" ? d.protocol + "//" + d.host : "null";
      d.href = d.toString();
    }
    p.prototype = {
      toString: function () {
        var t;
        var e = this;
        var n = e.protocol;
        if (n && n.charAt(n.length - 1) !== ":") {
          n += ":";
        }
        var r = n + (e.slashes ? "//" : "");
        if (e.username) {
          r += e.username;
          if (e.password) {
            r += ":" + e.password;
          }
          r += "@";
        }
        r += e.host + e.pathname;
        if (t = e.query) {
          r += t.charAt(0) !== "?" ? "?" + t : t;
        }
        if (e.hash) {
          r += e.hash;
        }
        return r;
      }
    };
    p.extractProtocol = h;
    p.location = f;
    p.trimLeft = c;
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e) {
    e = e.split(":")[0];
    if (!(t = +t)) {
      return false;
    }
    switch (e) {
      case "http":
      case "ws":
        return t !== 80;
      case "https":
      case "wss":
        return t !== 443;
      case "ftp":
        return t !== 21;
      case "gopher":
        return t !== 70;
      case "file":
        return false;
    }
    return t !== 0;
  };
}, function (t, e, n) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: o
  } = n(390);
  const a = n(391);
  const s = (e = t.exports = {}).re = [];
  const c = e.safeRe = [];
  const u = e.src = [];
  const l = e.t = {};
  let f = 0;
  const h = [["\\s", 1], ["\\d", o], ["[a-zA-Z0-9-]", i]];
  const p = (t, e, n) => {
    const r = (t => {
      for (const [e, n] of h) {
        t = t.split(e + "*").join(`${e}{0,${n}}`).split(e + "+").join(`${e}{1,${n}}`);
      }
      return t;
    })(e);
    const i = f++;
    a(t, i, e);
    l[t] = i;
    u[i] = e;
    s[i] = new RegExp(e, n ? "g" : undefined);
    c[i] = new RegExp(r, n ? "g" : undefined);
  };
  p("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  p("NUMERICIDENTIFIERLOOSE", "\\d+");
  p("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
  p("MAINVERSION", `(${u[l.NUMERICIDENTIFIER]})\\.(${u[l.NUMERICIDENTIFIER]})\\.(${u[l.NUMERICIDENTIFIER]})`);
  p("MAINVERSIONLOOSE", `(${u[l.NUMERICIDENTIFIERLOOSE]})\\.(${u[l.NUMERICIDENTIFIERLOOSE]})\\.(${u[l.NUMERICIDENTIFIERLOOSE]})`);
  p("PRERELEASEIDENTIFIER", `(?:${u[l.NUMERICIDENTIFIER]}|${u[l.NONNUMERICIDENTIFIER]})`);
  p("PRERELEASEIDENTIFIERLOOSE", `(?:${u[l.NUMERICIDENTIFIERLOOSE]}|${u[l.NONNUMERICIDENTIFIER]})`);
  p("PRERELEASE", `(?:-(${u[l.PRERELEASEIDENTIFIER]}(?:\\.${u[l.PRERELEASEIDENTIFIER]})*))`);
  p("PRERELEASELOOSE", `(?:-?(${u[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[l.PRERELEASEIDENTIFIERLOOSE]})*))`);
  p("BUILDIDENTIFIER", "[a-zA-Z0-9-]+");
  p("BUILD", `(?:\\+(${u[l.BUILDIDENTIFIER]}(?:\\.${u[l.BUILDIDENTIFIER]})*))`);
  p("FULLPLAIN", `v?${u[l.MAINVERSION]}${u[l.PRERELEASE]}?${u[l.BUILD]}?`);
  p("FULL", `^${u[l.FULLPLAIN]}$`);
  p("LOOSEPLAIN", `[v=\\s]*${u[l.MAINVERSIONLOOSE]}${u[l.PRERELEASELOOSE]}?${u[l.BUILD]}?`);
  p("LOOSE", `^${u[l.LOOSEPLAIN]}$`);
  p("GTLT", "((?:<|>)?=?)");
  p("XRANGEIDENTIFIERLOOSE", u[l.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*");
  p("XRANGEIDENTIFIER", u[l.NUMERICIDENTIFIER] + "|x|X|\\*");
  p("XRANGEPLAIN", `[v=\\s]*(${u[l.XRANGEIDENTIFIER]})(?:\\.(${u[l.XRANGEIDENTIFIER]})(?:\\.(${u[l.XRANGEIDENTIFIER]})(?:${u[l.PRERELEASE]})?${u[l.BUILD]}?)?)?`);
  p("XRANGEPLAINLOOSE", `[v=\\s]*(${u[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[l.XRANGEIDENTIFIERLOOSE]})(?:${u[l.PRERELEASELOOSE]})?${u[l.BUILD]}?)?)?`);
  p("XRANGE", `^${u[l.GTLT]}\\s*${u[l.XRANGEPLAIN]}$`);
  p("XRANGELOOSE", `^${u[l.GTLT]}\\s*${u[l.XRANGEPLAINLOOSE]}$`);
  p("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`);
  p("COERCE", u[l.COERCEPLAIN] + "(?:$|[^\\d])");
  p("COERCEFULL", `${u[l.COERCEPLAIN]}(?:${u[l.PRERELEASE]})?(?:${u[l.BUILD]})?(?:$|[^\\d])`);
  p("COERCERTL", u[l.COERCE], true);
  p("COERCERTLFULL", u[l.COERCEFULL], true);
  p("LONETILDE", "(?:~>?)");
  p("TILDETRIM", `(\\s*)${u[l.LONETILDE]}\\s+`, true);
  e.tildeTrimReplace = "$1~";
  p("TILDE", `^${u[l.LONETILDE]}${u[l.XRANGEPLAIN]}$`);
  p("TILDELOOSE", `^${u[l.LONETILDE]}${u[l.XRANGEPLAINLOOSE]}$`);
  p("LONECARET", "(?:\\^)");
  p("CARETTRIM", `(\\s*)${u[l.LONECARET]}\\s+`, true);
  e.caretTrimReplace = "$1^";
  p("CARET", `^${u[l.LONECARET]}${u[l.XRANGEPLAIN]}$`);
  p("CARETLOOSE", `^${u[l.LONECARET]}${u[l.XRANGEPLAINLOOSE]}$`);
  p("COMPARATORLOOSE", `^${u[l.GTLT]}\\s*(${u[l.LOOSEPLAIN]})$|^$`);
  p("COMPARATOR", `^${u[l.GTLT]}\\s*(${u[l.FULLPLAIN]})$|^$`);
  p("COMPARATORTRIM", `(\\s*)${u[l.GTLT]}\\s*(${u[l.LOOSEPLAIN]}|${u[l.XRANGEPLAIN]})`, true);
  e.comparatorTrimReplace = "$1$2$3";
  p("HYPHENRANGE", `^\\s*(${u[l.XRANGEPLAIN]})\\s+-\\s+(${u[l.XRANGEPLAIN]})\\s*$`);
  p("HYPHENRANGELOOSE", `^\\s*(${u[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[l.XRANGEPLAINLOOSE]})\\s*$`);
  p("STAR", "(<|>)?=?\\s*\\*");
  p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
},,, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return c;
  });
  n.d(e, "d", function () {
    return u;
  });
  n.d(e, "b", function () {
    return l;
  });
  n.d(e, "c", function () {
    return f;
  });
  var r = n(5);
  var i = n.n(r);
  n(7);
  var o = n(0);
  var a = n(164);
  var s = n(165);
  function c(t) {
    let e = 0;
    switch (t) {
      case "per-hour":
        e = o.q ? 3600000 : 20000;
        break;
      case "twelve-hour":
        e = 43200000;
        break;
      case "one-day":
        e = 86400000;
    }
    return e;
  }
  async function u(t) {
    let e;
    var n;
    e = typeof t == "string" ? await (n = t, fetch(n).then(t => t.blob())) : t;
    return await new i.a((t, n) => {
      const r = new FileReader();
      r.readAsDataURL(e);
      r.onload = () => {
        t(r.result);
      };
      r.onerror = n;
    });
  }
  async function l() {
    const t = await Object(s.getBingWallpaper)();
    if (t.error) {
      throw t.error;
    }
    const [e] = Object(a.b)([t.data]);
    return e;
  }
  async function f() {
    const t = await Object(s.getCustomColor)();
    if (!t.error) {
      return t.data.map(t => {
        t.type = "color";
        return t;
      });
    }
    console.warn(t.error);
  }
},,,,,, function (t, e) {
  const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
  t.exports = {
    MAX_LENGTH: 256,
    MAX_SAFE_COMPONENT_LENGTH: 16,
    MAX_SAFE_BUILD_LENGTH: 250,
    MAX_SAFE_INTEGER: n,
    RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
    SEMVER_SPEC_VERSION: "2.0.0",
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
}, function (t, e, n) {
  (function (e) {
    const n = typeof e == "object" && e.env && e.env.NODE_DEBUG && /\bsemver\b/i.test(e.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {};
    t.exports = n;
  }).call(this, n(94));
}, function (t, e, n) {
  const r = n(210);
  t.exports = (t, e, n) => r(t, e, n) > 0;
}, function (t, e, n) {
  const r = Symbol("SemVer ANY");
  class i {
    static get ANY() {
      return r;
    }
    constructor(t, e) {
      e = o(e);
      if (t instanceof i) {
        if (t.loose === !!e.loose) {
          return t;
        }
        t = t.value;
      }
      t = t.trim().split(/\s+/).join(" ");
      u("comparator", t, e);
      this.options = e;
      this.loose = !!e.loose;
      this.parse(t);
      if (this.semver === r) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      u("comp", this);
    }
    parse(t) {
      const e = this.options.loose ? a[s.COMPARATORLOOSE] : a[s.COMPARATOR];
      const n = t.match(e);
      if (!n) {
        throw new TypeError("Invalid comparator: " + t);
      }
      this.operator = n[1] !== undefined ? n[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (n[2]) {
        this.semver = new l(n[2], this.options.loose);
      } else {
        this.semver = r;
      }
    }
    toString() {
      return this.value;
    }
    test(t) {
      u("Comparator.test", t, this.options.loose);
      if (this.semver === r || t === r) {
        return true;
      }
      if (typeof t == "string") {
        try {
          t = new l(t, this.options);
        } catch (t) {
          return false;
        }
      }
      return c(t, this.operator, this.semver, this.options);
    }
    intersects(t, e) {
      if (!(t instanceof i)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        return this.value === "" || new f(t.value, e).test(this.value);
      } else if (t.operator === "") {
        return t.value === "" || new f(this.value, e).test(t.semver);
      } else {
        return (!(e = o(e)).includePrerelease || this.value !== "<0.0.0-0" && t.value !== "<0.0.0-0") && (!!e.includePrerelease || !this.value.startsWith("<0.0.0") && !t.value.startsWith("<0.0.0")) && (!!this.operator.startsWith(">") && !!t.operator.startsWith(">") || !!this.operator.startsWith("<") && !!t.operator.startsWith("<") || this.semver.version === t.semver.version && !!this.operator.includes("=") && !!t.operator.includes("=") || !!c(this.semver, "<", t.semver, e) && !!this.operator.startsWith(">") && !!t.operator.startsWith("<") || !!c(this.semver, ">", t.semver, e) && !!this.operator.startsWith("<") && !!t.operator.startsWith(">"));
      }
    }
  }
  t.exports = i;
  const o = n(423);
  const {
    safeRe: a,
    t: s
  } = n(381);
  const c = n(464);
  const u = n(391);
  const l = n(152);
  const f = n(211);
}, function (t, e, n) {
  const r = n(211);
  t.exports = (t, e, n) => {
    try {
      e = new r(e, n);
    } catch (t) {
      return false;
    }
    return e.test(t);
  };
},,, function (t, e, n) {
  var r = n(16);
  var i = n(4);
  var o = n(60);
  var a = n(399);
  var s = n(20);
  var c = n(21).f;
  var u = n(101).f;
  var l = n(400);
  var f = n(216);
  var h = n(217);
  var p = n(26);
  var d = n(9);
  var m = n(11);
  var g = n(49).enforce;
  var y = n(102);
  var b = n(8);
  var w = n(218);
  var v = n(219);
  var _ = b("match");
  var E = i.RegExp;
  var x = E.prototype;
  var T = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var I = /a/g;
  var O = /a/g;
  var S = new E(I) !== I;
  var A = h.UNSUPPORTED_Y;
  var N = r && (!S || A || w || v || d(function () {
    O[_] = false;
    return E(I) != I || E(O) == O || E(I, "i") != "/a/i";
  }));
  if (o("RegExp", N)) {
    var j = function (t, e) {
      var n;
      var r;
      var i;
      var o;
      var c;
      var u;
      var h = this instanceof j;
      var p = l(t);
      var d = e === undefined;
      var y = [];
      var b = t;
      if (!h && p && d && t.constructor === j) {
        return t;
      }
      if (p || t instanceof j) {
        t = t.source;
        if (d) {
          e = "flags" in b ? b.flags : f.call(b);
        }
      }
      t = t === undefined ? "" : String(t);
      e = e === undefined ? "" : String(e);
      b = t;
      if (w && "dotAll" in I && (r = !!e && e.indexOf("s") > -1)) {
        e = e.replace(/s/g, "");
      }
      n = e;
      if (A && "sticky" in I && (i = !!e && e.indexOf("y") > -1)) {
        e = e.replace(/y/g, "");
      }
      if (v) {
        t = (o = function (t) {
          var e;
          for (var n = t.length, r = 0, i = "", o = [], a = {}, s = false, c = false, u = 0, l = ""; r <= n; r++) {
            if ((e = t.charAt(r)) === "\\") {
              e += t.charAt(++r);
            } else if (e === "]") {
              s = false;
            } else if (!s) {
              switch (true) {
                case e === "[":
                  s = true;
                  break;
                case e === "(":
                  if (T.test(t.slice(r + 1))) {
                    r += 2;
                    c = true;
                  }
                  i += e;
                  u++;
                  continue;
                case e === ">" && c:
                  if (l === "" || m(a, l)) {
                    throw new SyntaxError("Invalid capture group name");
                  }
                  a[l] = true;
                  o.push([l, u]);
                  c = false;
                  l = "";
                  continue;
              }
            }
            if (c) {
              l += e;
            } else {
              i += e;
            }
          }
          return [i, o];
        }(t))[0];
        y = o[1];
      }
      c = a(E(t, e), h ? this : x, j);
      if (r || i || y.length) {
        u = g(c);
        if (r) {
          u.dotAll = true;
          u.raw = j(function (t) {
            var e;
            for (var n = t.length, r = 0, i = "", o = false; r <= n; r++) {
              if ((e = t.charAt(r)) !== "\\") {
                if (o || e !== ".") {
                  if (e === "[") {
                    o = true;
                  } else if (e === "]") {
                    o = false;
                  }
                  i += e;
                } else {
                  i += "[\\s\\S]";
                }
              } else {
                i += e + t.charAt(++r);
              }
            }
            return i;
          }(t), n);
        }
        if (i) {
          u.sticky = true;
        }
        if (y.length) {
          u.groups = y;
        }
      }
      if (t !== b) {
        try {
          s(c, "source", b === "" ? "(?:)" : b);
        } catch (t) {}
      }
      return c;
    };
    var C = function (t) {
      if (!(t in j)) {
        c(j, t, {
          configurable: true,
          get: function () {
            return E[t];
          },
          set: function (e) {
            E[t] = e;
          }
        });
      }
    };
    for (var D = u(E), k = 0; D.length > k;) {
      C(D[k++]);
    }
    x.constructor = j;
    j.prototype = x;
    p(i, "RegExp", j);
  }
  y("RegExp");
},, function (t, e, n) {
  var r = n(12);
  var i = n(83);
  t.exports = function (t, e, n) {
    var o;
    var a;
    if (i && typeof (o = e.constructor) == "function" && o !== n && r(a = o.prototype) && a !== n.prototype) {
      i(t, a);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(12);
  var i = n(33);
  var o = n(8)("match");
  t.exports = function (t) {
    var e;
    return r(t) && ((e = t[o]) !== undefined ? !!e : i(t) == "RegExp");
  };
}, function (t, e) {
  var n;
  var r;
  n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  r = {
    rotl: function (t, e) {
      return t << e | t >>> 32 - e;
    },
    rotr: function (t, e) {
      return t << 32 - e | t >>> e;
    },
    endian: function (t) {
      if (t.constructor == Number) {
        return r.rotl(t, 8) & 16711935 | r.rotl(t, 24) & -16711936;
      }
      for (var e = 0; e < t.length; e++) {
        t[e] = r.endian(t[e]);
      }
      return t;
    },
    randomBytes: function (t) {
      var e = [];
      for (; t > 0; t--) {
        e.push(Math.floor(Math.random() * 256));
      }
      return e;
    },
    bytesToWords: function (t) {
      var e = [];
      for (var n = 0, r = 0; n < t.length; n++, r += 8) {
        e[r >>> 5] |= t[n] << 24 - r % 32;
      }
      return e;
    },
    wordsToBytes: function (t) {
      var e = [];
      for (var n = 0; n < t.length * 32; n += 8) {
        e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
      }
      return e;
    },
    bytesToHex: function (t) {
      var e = [];
      for (var n = 0; n < t.length; n++) {
        e.push((t[n] >>> 4).toString(16));
        e.push((t[n] & 15).toString(16));
      }
      return e.join("");
    },
    hexToBytes: function (t) {
      var e = [];
      for (var n = 0; n < t.length; n += 2) {
        e.push(parseInt(t.substr(n, 2), 16));
      }
      return e;
    },
    bytesToBase64: function (t) {
      var e = [];
      for (var r = 0; r < t.length; r += 3) {
        var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2];
        for (var o = 0; o < 4; o++) {
          if (r * 8 + o * 6 <= t.length * 8) {
            e.push(n.charAt(i >>> (3 - o) * 6 & 63));
          } else {
            e.push("=");
          }
        }
      }
      return e.join("");
    },
    base64ToBytes: function (t) {
      t = t.replace(/[^A-Z0-9+\/]/gi, "");
      var e = [];
      for (var r = 0, i = 0; r < t.length; i = ++r % 4) {
        if (i != 0) {
          e.push((n.indexOf(t.charAt(r - 1)) & Math.pow(2, i * -2 + 8) - 1) << i * 2 | n.indexOf(t.charAt(r)) >>> 6 - i * 2);
        }
      }
      return e;
    }
  };
  t.exports = r;
}, function (t, e) {
  function n(t) {
    return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
  }
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  t.exports = function (t) {
    return t != null && (n(t) || function (t) {
      return typeof t.readFloatLE == "function" && typeof t.slice == "function" && n(t.slice(0, 0));
    }(t) || !!t._isBuffer);
  };
},,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return r;
  });
  const r = (t, e, n) => true;
}, function (t, e, n) {
  var r = n(420);
  var i = n(209);
  var o = n(422);
  var a = /^[-+]0x[0-9a-f]+$/i;
  var s = /^0b[01]+$/i;
  var c = /^0o[0-7]+$/i;
  var u = parseInt;
  t.exports = function (t) {
    if (typeof t == "number") {
      return t;
    }
    if (o(t)) {
      return NaN;
    }
    if (i(t)) {
      var e = typeof t.valueOf == "function" ? t.valueOf() : t;
      t = i(e) ? e + "" : e;
    }
    if (typeof t != "string") {
      if (t === 0) {
        return t;
      } else {
        return +t;
      }
    }
    t = r(t);
    var n = s.test(t);
    if (n || c.test(t)) {
      return u(t.slice(2), n ? 2 : 8);
    } else if (a.test(t)) {
      return NaN;
    } else {
      return +t;
    }
  };
}, function (t, e, n) {
  var r = n(421);
  var i = /^\s+/;
  t.exports = function (t) {
    if (t) {
      return t.slice(0, r(t) + 1).replace(i, "");
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
  var r = n(249);
  var i = n(221);
  t.exports = function (t) {
    return typeof t == "symbol" || i(t) && r(t) == "[object Symbol]";
  };
}, function (t, e) {
  const n = Object.freeze({
    loose: true
  });
  const r = Object.freeze({});
  t.exports = t => t ? typeof t != "object" ? n : t : r;
}, function (t, e, n) {
  const r = n(152);
  t.exports = (t, e, n) => {
    const i = new r(t, n);
    const o = new r(e, n);
    return i.compare(o) || i.compareBuild(o);
  };
}, function (t, e, n) {
  const r = n(210);
  t.exports = (t, e, n) => r(t, e, n) < 0;
}, function (t, e, n) {
  const r = n(210);
  t.exports = (t, e, n) => r(t, e, n) >= 0;
}, function (t, e, n) {
  const r = n(210);
  t.exports = (t, e, n) => r(t, e, n) <= 0;
}, function (t, e, n) {
  const r = n(152);
  const i = n(393);
  const {
    ANY: o
  } = i;
  const a = n(211);
  const s = n(394);
  const c = n(392);
  const u = n(425);
  const l = n(427);
  const f = n(426);
  t.exports = (t, e, n, h) => {
    let p;
    let d;
    let m;
    let g;
    let y;
    t = new r(t, h);
    e = new a(e, h);
    switch (n) {
      case ">":
        p = c;
        d = l;
        m = u;
        g = ">";
        y = ">=";
        break;
      case "<":
        p = u;
        d = f;
        m = c;
        g = "<";
        y = "<=";
        break;
      default:
        throw new TypeError("Must provide a hilo val of \"<\" or \">\"");
    }
    if (s(t, e, h)) {
      return false;
    }
    for (let n = 0; n < e.set.length; ++n) {
      const r = e.set[n];
      let a = null;
      let s = null;
      r.forEach(t => {
        if (t.semver === o) {
          t = new i(">=0.0.0");
        }
        a = a || t;
        s = s || t;
        if (p(t.semver, a.semver, h)) {
          a = t;
        } else if (m(t.semver, s.semver, h)) {
          s = t;
        }
      });
      if (a.operator === g || a.operator === y) {
        return false;
      }
      if ((!s.operator || s.operator === g) && d(t, s.semver)) {
        return false;
      }
      if (s.operator === y && m(t, s.semver)) {
        return false;
      }
    }
    return true;
  };
},,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return a;
  });
  n.d(e, "b", function () {
    return s;
  });
  n(7);
  n(19);
  var r = n(51);
  var i = n(253);
  var o = n(308);
  const a = (t, e = false, n = false, o = "4px") => t.bgType === "color" ? t.bgColorImage ? `\n      <img draggable="false"  ${t.bgColor && t.bgColor !== "transparent" ? `style="background-color:${t.bgColor};"` : ""} class="search-icon search-icon-img ${n ? "shortcut-drag" : ""}" ${e ? "data-uuid=" + t.uuid : ""} src="${Object(r.c)(t.bgColorImage)}" alt="" />\n    ` : ` <div class="search-icon search-icon-img ${n ? "shortcut-drag" : ""}" ${e ? "data-uuid=" + t.uuid : ""}>${Object(i.a)(t, o)}</div> ` : t.logo ? ` <img draggable="false" ${t.bgColor && t.bgColor !== "transparent" ? `style="background-color:${t.bgColor};"` : ""}  class="search-icon-img ${n ? "shortcut-drag" : ""}" ${e ? "data-uuid=" + t.uuid : ""} src="${Object(r.c)(t.logo)}" alt="" />` : "<div></div> ";
  const s = async t => {
    const {
      hide: e,
      hideCategory: n,
      hideButton: r,
      shadow: i
    } = t.search || {};
    const s = document.querySelector(".search-box");
    if (e) {
      s.classList.add("hide");
      return;
    }
    const c = Object(o.a)("store-search");
    if (!c || !c.searchEngine) {
      return;
    }
    const {
      miniMode: u
    } = t.icon || {};
    const {
      current: l
    } = c.searchEngine;
    const f = `\n  <div class="newtab-search ${u ? "minimode" : ""}">\n        <ul class="search-type${n ? " hide" : ""}">\n        ${n ? "" : (h = l.types || [], h.length > 1 ? h.map((t, e) => `<li class="search-type-item${e === 0 ? " active" : ""}">${t.name}</li>`).join("") : "<li class=\"search-type-item holder\">&nbsp;</li>")}\n        </ul>\n        <form class="search-card ${i ? "shadow" : ""}">\n          <button type="button" class="search-card-engine">\n          ${a(l)}\n            <i class="icon-down"></i>\n          </button>\n          <input class="search-card-input" type="text" placeholder="${i18n("input_and_search")}">\n          <button class="search-card-btn${r ? " hide" : ""}" type="submit">\n          <img class="icon-search" src="https://infinityicon.infinitynewtab.com/assets/search.svg"/>\n          </button>\n        </form>\n      </div>\n  `;
    var h;
    s.innerHTML = f;
  };
},,,,, function (t, e, n) {
  "use strict";

  function r(t) {
    const e = new URL(chrome.runtime.getURL("/_favicon/"));
    e.searchParams.set("pageUrl", t);
    e.searchParams.set("size", "32");
    return e.toString();
  }
  n.d(e, "a", function () {
    return r;
  });
}, function (t, e) {
  const n = /^[0-9]+$/;
  const r = (t, e) => {
    const r = n.test(t);
    const i = n.test(e);
    if (r && i) {
      t = +t;
      e = +e;
    }
    if (t === e) {
      return 0;
    } else if (r && !i) {
      return -1;
    } else if (i && !r) {
      return 1;
    } else if (t < e) {
      return -1;
    } else {
      return 1;
    }
  };
  t.exports = {
    compareIdentifiers: r,
    rcompareIdentifiers: (t, e) => r(e, t)
  };
}, function (t, e, n) {
  const r = n(210);
  t.exports = (t, e, n) => r(t, e, n) === 0;
}, function (t, e, n) {
  const r = n(210);
  t.exports = (t, e, n) => r(t, e, n) !== 0;
}, function (t, e, n) {
  const r = n(462);
  const i = n(463);
  const o = n(392);
  const a = n(426);
  const s = n(425);
  const c = n(427);
  t.exports = (t, e, n, u) => {
    switch (e) {
      case "===":
        if (typeof t == "object") {
          t = t.version;
        }
        if (typeof n == "object") {
          n = n.version;
        }
        return t === n;
      case "!==":
        if (typeof t == "object") {
          t = t.version;
        }
        if (typeof n == "object") {
          n = n.version;
        }
        return t !== n;
      case "":
      case "=":
      case "==":
        return r(t, n, u);
      case "!=":
        return i(t, n, u);
      case ">":
        return o(t, n, u);
      case ">=":
        return a(t, n, u);
      case "<":
        return s(t, n, u);
      case "<=":
        return c(t, n, u);
      default:
        throw new TypeError("Invalid operator: " + e);
    }
  };
},,, function (t, e, n) {
  var r = n(590);
  var i = n(591);
  t.exports = function (t, e, n) {
    var o = t == null ? 0 : t.length;
    if (o) {
      e = n || e === undefined ? 1 : i(e);
      return r(t, (e = o - e) < 0 ? 0 : e, o);
    } else {
      return [];
    }
  };
},,,,,,, function (t, e, n) {
  t.exports = n.p + "images/wallpaper.c4eff18.webp";
}, function (t, e, n) {
  t.exports = n.p + "images/wenjian.8e31a07.png";
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  t.exports = n.p + "images/star.0b91ef6.png";
}, function (t, e, n) {
  t.exports = n.p + "images/more.8e47811.svg";
},,,, function (t, e, n) {}, function (t, e, n) {
  const r = n(314);
  t.exports = (t, e) => {
    const n = r(t, e);
    if (n) {
      return n.version;
    } else {
      return null;
    }
  };
}, function (t, e, n) {
  const r = n(314);
  t.exports = (t, e) => {
    const n = r(t.trim().replace(/^[=v]+/, ""), e);
    if (n) {
      return n.version;
    } else {
      return null;
    }
  };
}, function (t, e, n) {
  const r = n(152);
  t.exports = (t, e, n, i, o) => {
    if (typeof n == "string") {
      o = i;
      i = n;
      n = undefined;
    }
    try {
      return new r(t instanceof r ? t.version : t, n).inc(e, i, o).version;
    } catch (t) {
      return null;
    }
  };
}, function (t, e, n) {
  const r = n(314);
  t.exports = (t, e) => {
    const n = r(t, null, true);
    const i = r(e, null, true);
    const o = n.compare(i);
    if (o === 0) {
      return null;
    }
    const a = o > 0;
    const s = a ? n : i;
    const c = a ? i : n;
    const u = !!s.prerelease.length;
    if (!!c.prerelease.length && !u) {
      if (c.patch || c.minor) {
        if (s.patch) {
          return "patch";
        } else if (s.minor) {
          return "minor";
        } else {
          return "major";
        }
      } else {
        return "major";
      }
    }
    const l = u ? "pre" : "";
    if (n.major !== i.major) {
      return l + "major";
    } else if (n.minor !== i.minor) {
      return l + "minor";
    } else if (n.patch !== i.patch) {
      return l + "patch";
    } else {
      return "prerelease";
    }
  };
}, function (t, e, n) {
  const r = n(152);
  t.exports = (t, e) => new r(t, e).major;
}, function (t, e, n) {
  const r = n(152);
  t.exports = (t, e) => new r(t, e).minor;
}, function (t, e, n) {
  const r = n(152);
  t.exports = (t, e) => new r(t, e).patch;
}, function (t, e, n) {
  const r = n(314);
  t.exports = (t, e) => {
    const n = r(t, e);
    if (n && n.prerelease.length) {
      return n.prerelease;
    } else {
      return null;
    }
  };
}, function (t, e, n) {
  const r = n(210);
  t.exports = (t, e, n) => r(e, t, n);
}, function (t, e, n) {
  const r = n(210);
  t.exports = (t, e) => r(t, e, true);
}, function (t, e, n) {
  const r = n(424);
  t.exports = (t, e) => t.sort((t, n) => r(t, n, e));
}, function (t, e, n) {
  const r = n(424);
  t.exports = (t, e) => t.sort((t, n) => r(n, t, e));
}, function (t, e, n) {
  const r = n(152);
  const i = n(314);
  const {
    safeRe: o,
    t: a
  } = n(381);
  t.exports = (t, e) => {
    if (t instanceof r) {
      return t;
    }
    if (typeof t == "number") {
      t = String(t);
    }
    if (typeof t != "string") {
      return null;
    }
    let n = null;
    if ((e = e || {}).rtl) {
      const r = e.includePrerelease ? o[a.COERCERTLFULL] : o[a.COERCERTL];
      let i;
      while ((i = r.exec(t)) && (!n || n.index + n[0].length !== t.length)) {
        if (!n || i.index + i[0].length !== n.index + n[0].length) {
          n = i;
        }
        r.lastIndex = i.index + i[1].length + i[2].length;
      }
      r.lastIndex = -1;
    } else {
      n = t.match(e.includePrerelease ? o[a.COERCEFULL] : o[a.COERCE]);
    }
    if (n === null) {
      return null;
    }
    const s = n[2];
    const c = n[3] || "0";
    const u = n[4] || "0";
    const l = e.includePrerelease && n[5] ? "-" + n[5] : "";
    const f = e.includePrerelease && n[6] ? "+" + n[6] : "";
    return i(`${s}.${c}.${u}${l}${f}`, e);
  };
}, function (t, e, n) {
  "use strict";

  const r = n(578);
  const i = Symbol("max");
  const o = Symbol("length");
  const a = Symbol("lengthCalculator");
  const s = Symbol("allowStale");
  const c = Symbol("maxAge");
  const u = Symbol("dispose");
  const l = Symbol("noDisposeOnSet");
  const f = Symbol("lruList");
  const h = Symbol("cache");
  const p = Symbol("updateAgeOnGet");
  const d = () => 1;
  const m = (t, e, n) => {
    const r = t[h].get(e);
    if (r) {
      const e = r.value;
      if (g(t, e)) {
        b(t, r);
        if (!t[s]) {
          return;
        }
      } else if (n) {
        if (t[p]) {
          r.value.now = Date.now();
        }
        t[f].unshiftNode(r);
      }
      return e.value;
    }
  };
  const g = (t, e) => {
    if (!e || !e.maxAge && !t[c]) {
      return false;
    }
    const n = Date.now() - e.now;
    if (e.maxAge) {
      return n > e.maxAge;
    } else {
      return t[c] && n > t[c];
    }
  };
  const y = t => {
    if (t[o] > t[i]) {
      for (let e = t[f].tail; t[o] > t[i] && e !== null;) {
        const n = e.prev;
        b(t, e);
        e = n;
      }
    }
  };
  const b = (t, e) => {
    if (e) {
      const n = e.value;
      if (t[u]) {
        t[u](n.key, n.value);
      }
      t[o] -= n.length;
      t[h].delete(n.key);
      t[f].removeNode(e);
    }
  };
  class w {
    constructor(t, e, n, r, i) {
      this.key = t;
      this.value = e;
      this.length = n;
      this.now = r;
      this.maxAge = i || 0;
    }
  }
  const v = (t, e, n, r) => {
    let i = n.value;
    if (g(t, i)) {
      b(t, n);
      if (!t[s]) {
        i = undefined;
      }
    }
    if (i) {
      e.call(r, i.value, i.key, t);
    }
  };
  t.exports = class {
    constructor(t) {
      if (typeof t == "number") {
        t = {
          max: t
        };
      }
      t ||= {};
      if (t.max && (typeof t.max != "number" || t.max < 0)) {
        throw new TypeError("max must be a non-negative number");
      }
      this[i] = t.max || Infinity;
      const e = t.length || d;
      this[a] = typeof e != "function" ? d : e;
      this[s] = t.stale || false;
      if (t.maxAge && typeof t.maxAge != "number") {
        throw new TypeError("maxAge must be a number");
      }
      this[c] = t.maxAge || 0;
      this[u] = t.dispose;
      this[l] = t.noDisposeOnSet || false;
      this[p] = t.updateAgeOnGet || false;
      this.reset();
    }
    set max(t) {
      if (typeof t != "number" || t < 0) {
        throw new TypeError("max must be a non-negative number");
      }
      this[i] = t || Infinity;
      y(this);
    }
    get max() {
      return this[i];
    }
    set allowStale(t) {
      this[s] = !!t;
    }
    get allowStale() {
      return this[s];
    }
    set maxAge(t) {
      if (typeof t != "number") {
        throw new TypeError("maxAge must be a non-negative number");
      }
      this[c] = t;
      y(this);
    }
    get maxAge() {
      return this[c];
    }
    set lengthCalculator(t) {
      if (typeof t != "function") {
        t = d;
      }
      if (t !== this[a]) {
        this[a] = t;
        this[o] = 0;
        this[f].forEach(t => {
          t.length = this[a](t.value, t.key);
          this[o] += t.length;
        });
      }
      y(this);
    }
    get lengthCalculator() {
      return this[a];
    }
    get length() {
      return this[o];
    }
    get itemCount() {
      return this[f].length;
    }
    rforEach(t, e) {
      e = e || this;
      for (let n = this[f].tail; n !== null;) {
        const r = n.prev;
        v(this, t, n, e);
        n = r;
      }
    }
    forEach(t, e) {
      e = e || this;
      for (let n = this[f].head; n !== null;) {
        const r = n.next;
        v(this, t, n, e);
        n = r;
      }
    }
    keys() {
      return this[f].toArray().map(t => t.key);
    }
    values() {
      return this[f].toArray().map(t => t.value);
    }
    reset() {
      if (this[u] && this[f] && this[f].length) {
        this[f].forEach(t => this[u](t.key, t.value));
      }
      this[h] = new Map();
      this[f] = new r();
      this[o] = 0;
    }
    dump() {
      return this[f].map(t => !g(this, t) && {
        k: t.key,
        v: t.value,
        e: t.now + (t.maxAge || 0)
      }).toArray().filter(t => t);
    }
    dumpLru() {
      return this[f];
    }
    set(t, e, n) {
      if ((n = n || this[c]) && typeof n != "number") {
        throw new TypeError("maxAge must be a number");
      }
      const r = n ? Date.now() : 0;
      const s = this[a](e, t);
      if (this[h].has(t)) {
        if (s > this[i]) {
          b(this, this[h].get(t));
          return false;
        }
        const a = this[h].get(t).value;
        if (this[u]) {
          if (!this[l]) {
            this[u](t, a.value);
          }
        }
        a.now = r;
        a.maxAge = n;
        a.value = e;
        this[o] += s - a.length;
        a.length = s;
        this.get(t);
        y(this);
        return true;
      }
      const p = new w(t, e, s, r, n);
      if (p.length > this[i]) {
        if (this[u]) {
          this[u](t, e);
        }
        return false;
      } else {
        this[o] += p.length;
        this[f].unshift(p);
        this[h].set(t, this[f].head);
        y(this);
        return true;
      }
    }
    has(t) {
      if (!this[h].has(t)) {
        return false;
      }
      const e = this[h].get(t).value;
      return !g(this, e);
    }
    get(t) {
      return m(this, t, true);
    }
    peek(t) {
      return m(this, t, false);
    }
    pop() {
      const t = this[f].tail;
      if (t) {
        b(this, t);
        return t.value;
      } else {
        return null;
      }
    }
    del(t) {
      b(this, this[h].get(t));
    }
    load(t) {
      this.reset();
      const e = Date.now();
      for (let n = t.length - 1; n >= 0; n--) {
        const r = t[n];
        const i = r.e || 0;
        if (i === 0) {
          this.set(r.k, r.v);
        } else {
          const t = i - e;
          if (t > 0) {
            this.set(r.k, r.v, t);
          }
        }
      }
    }
    prune() {
      this[h].forEach((t, e) => m(this, e, false));
    }
  };
}, function (t, e, n) {
  "use strict";

  function r(t) {
    var e = this;
    if (!(e instanceof r)) {
      e = new r();
    }
    e.tail = null;
    e.head = null;
    e.length = 0;
    if (t && typeof t.forEach == "function") {
      t.forEach(function (t) {
        e.push(t);
      });
    } else if (arguments.length > 0) {
      for (var n = 0, i = arguments.length; n < i; n++) {
        e.push(arguments[n]);
      }
    }
    return e;
  }
  function i(t, e, n) {
    var r = e === t.head ? new s(n, null, e, t) : new s(n, e, e.next, t);
    if (r.next === null) {
      t.tail = r;
    }
    if (r.prev === null) {
      t.head = r;
    }
    t.length++;
    return r;
  }
  function o(t, e) {
    t.tail = new s(e, t.tail, null, t);
    t.head ||= t.tail;
    t.length++;
  }
  function a(t, e) {
    t.head = new s(e, null, t.head, t);
    t.tail ||= t.head;
    t.length++;
  }
  function s(t, e, n, r) {
    if (!(this instanceof s)) {
      return new s(t, e, n, r);
    }
    this.list = r;
    this.value = t;
    if (e) {
      e.next = this;
      this.prev = e;
    } else {
      this.prev = null;
    }
    if (n) {
      n.prev = this;
      this.next = n;
    } else {
      this.next = null;
    }
  }
  t.exports = r;
  r.Node = s;
  r.create = r;
  r.prototype.removeNode = function (t) {
    if (t.list !== this) {
      throw new Error("removing node which does not belong to this list");
    }
    var e = t.next;
    var n = t.prev;
    if (e) {
      e.prev = n;
    }
    if (n) {
      n.next = e;
    }
    if (t === this.head) {
      this.head = e;
    }
    if (t === this.tail) {
      this.tail = n;
    }
    t.list.length--;
    t.next = null;
    t.prev = null;
    t.list = null;
    return e;
  };
  r.prototype.unshiftNode = function (t) {
    if (t !== this.head) {
      if (t.list) {
        t.list.removeNode(t);
      }
      var e = this.head;
      t.list = this;
      t.next = e;
      if (e) {
        e.prev = t;
      }
      this.head = t;
      this.tail ||= t;
      this.length++;
    }
  };
  r.prototype.pushNode = function (t) {
    if (t !== this.tail) {
      if (t.list) {
        t.list.removeNode(t);
      }
      var e = this.tail;
      t.list = this;
      t.prev = e;
      if (e) {
        e.next = t;
      }
      this.tail = t;
      this.head ||= t;
      this.length++;
    }
  };
  r.prototype.push = function () {
    for (var t = 0, e = arguments.length; t < e; t++) {
      o(this, arguments[t]);
    }
    return this.length;
  };
  r.prototype.unshift = function () {
    for (var t = 0, e = arguments.length; t < e; t++) {
      a(this, arguments[t]);
    }
    return this.length;
  };
  r.prototype.pop = function () {
    if (this.tail) {
      var t = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return t;
    }
  };
  r.prototype.shift = function () {
    if (this.head) {
      var t = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return t;
    }
  };
  r.prototype.forEach = function (t, e) {
    e = e || this;
    for (var n = this.head, r = 0; n !== null; r++) {
      t.call(e, n.value, r, this);
      n = n.next;
    }
  };
  r.prototype.forEachReverse = function (t, e) {
    e = e || this;
    for (var n = this.tail, r = this.length - 1; n !== null; r--) {
      t.call(e, n.value, r, this);
      n = n.prev;
    }
  };
  r.prototype.get = function (t) {
    for (var e = 0, n = this.head; n !== null && e < t; e++) {
      n = n.next;
    }
    if (e === t && n !== null) {
      return n.value;
    }
  };
  r.prototype.getReverse = function (t) {
    for (var e = 0, n = this.tail; n !== null && e < t; e++) {
      n = n.prev;
    }
    if (e === t && n !== null) {
      return n.value;
    }
  };
  r.prototype.map = function (t, e) {
    e = e || this;
    var n = new r();
    for (var i = this.head; i !== null;) {
      n.push(t.call(e, i.value, this));
      i = i.next;
    }
    return n;
  };
  r.prototype.mapReverse = function (t, e) {
    e = e || this;
    var n = new r();
    for (var i = this.tail; i !== null;) {
      n.push(t.call(e, i.value, this));
      i = i.prev;
    }
    return n;
  };
  r.prototype.reduce = function (t, e) {
    var n;
    var r = this.head;
    if (arguments.length > 1) {
      n = e;
    } else {
      if (!this.head) {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      r = this.head.next;
      n = this.head.value;
    }
    for (var i = 0; r !== null; i++) {
      n = t(n, r.value, i);
      r = r.next;
    }
    return n;
  };
  r.prototype.reduceReverse = function (t, e) {
    var n;
    var r = this.tail;
    if (arguments.length > 1) {
      n = e;
    } else {
      if (!this.tail) {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      r = this.tail.prev;
      n = this.tail.value;
    }
    for (var i = this.length - 1; r !== null; i--) {
      n = t(n, r.value, i);
      r = r.prev;
    }
    return n;
  };
  r.prototype.toArray = function () {
    var t = new Array(this.length);
    for (var e = 0, n = this.head; n !== null; e++) {
      t[e] = n.value;
      n = n.next;
    }
    return t;
  };
  r.prototype.toArrayReverse = function () {
    var t = new Array(this.length);
    for (var e = 0, n = this.tail; n !== null; e++) {
      t[e] = n.value;
      n = n.prev;
    }
    return t;
  };
  r.prototype.slice = function (t, e) {
    if ((e = e || this.length) < 0) {
      e += this.length;
    }
    if ((t = t || 0) < 0) {
      t += this.length;
    }
    var n = new r();
    if (e < t || e < 0) {
      return n;
    }
    if (t < 0) {
      t = 0;
    }
    if (e > this.length) {
      e = this.length;
    }
    for (var i = 0, o = this.head; o !== null && i < t; i++) {
      o = o.next;
    }
    for (; o !== null && i < e; i++, o = o.next) {
      n.push(o.value);
    }
    return n;
  };
  r.prototype.sliceReverse = function (t, e) {
    if ((e = e || this.length) < 0) {
      e += this.length;
    }
    if ((t = t || 0) < 0) {
      t += this.length;
    }
    var n = new r();
    if (e < t || e < 0) {
      return n;
    }
    if (t < 0) {
      t = 0;
    }
    if (e > this.length) {
      e = this.length;
    }
    for (var i = this.length, o = this.tail; o !== null && i > e; i--) {
      o = o.prev;
    }
    for (; o !== null && i > t; i--, o = o.prev) {
      n.push(o.value);
    }
    return n;
  };
  r.prototype.splice = function (t, e, ...n) {
    if (t > this.length) {
      t = this.length - 1;
    }
    if (t < 0) {
      t = this.length + t;
    }
    for (var r = 0, o = this.head; o !== null && r < t; r++) {
      o = o.next;
    }
    var a = [];
    for (r = 0; o && r < e; r++) {
      a.push(o.value);
      o = this.removeNode(o);
    }
    if (o === null) {
      o = this.tail;
    }
    if (o !== this.head && o !== this.tail) {
      o = o.prev;
    }
    for (r = 0; r < n.length; r++) {
      o = i(this, o, n[r]);
    }
    return a;
  };
  r.prototype.reverse = function () {
    var t = this.head;
    var e = this.tail;
    for (var n = t; n !== null; n = n.prev) {
      var r = n.prev;
      n.prev = n.next;
      n.next = r;
    }
    this.head = e;
    this.tail = t;
    return this;
  };
  try {
    n(579)(r);
  } catch (t) {}
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    t.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next) {
        yield t.value;
      }
    };
  };
}, function (t, e, n) {
  const r = n(211);
  t.exports = (t, e) => new r(t, e).set.map(t => t.map(t => t.value).join(" ").trim().split(" "));
}, function (t, e, n) {
  const r = n(152);
  const i = n(211);
  t.exports = (t, e, n) => {
    let o = null;
    let a = null;
    let s = null;
    try {
      s = new i(e, n);
    } catch (t) {
      return null;
    }
    t.forEach(t => {
      if (s.test(t)) {
        if (!o || a.compare(t) === -1) {
          o = t;
          a = new r(o, n);
        }
      }
    });
    return o;
  };
}, function (t, e, n) {
  const r = n(152);
  const i = n(211);
  t.exports = (t, e, n) => {
    let o = null;
    let a = null;
    let s = null;
    try {
      s = new i(e, n);
    } catch (t) {
      return null;
    }
    t.forEach(t => {
      if (s.test(t)) {
        if (!o || a.compare(t) === 1) {
          o = t;
          a = new r(o, n);
        }
      }
    });
    return o;
  };
}, function (t, e, n) {
  const r = n(152);
  const i = n(211);
  const o = n(392);
  t.exports = (t, e) => {
    t = new i(t, e);
    let n = new r("0.0.0");
    if (t.test(n)) {
      return n;
    }
    n = new r("0.0.0-0");
    if (t.test(n)) {
      return n;
    }
    n = null;
    for (let e = 0; e < t.set.length; ++e) {
      const i = t.set[e];
      let a = null;
      i.forEach(t => {
        const e = new r(t.semver.version);
        switch (t.operator) {
          case ">":
            if (e.prerelease.length === 0) {
              e.patch++;
            } else {
              e.prerelease.push(0);
            }
            e.raw = e.format();
          case "":
          case ">=":
            if (!a || !!o(e, a)) {
              a = e;
            }
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error("Unexpected operation: " + t.operator);
        }
      });
      if (!!a && (!n || !!o(n, a))) {
        n = a;
      }
    }
    if (n && t.test(n)) {
      return n;
    } else {
      return null;
    }
  };
}, function (t, e, n) {
  const r = n(211);
  t.exports = (t, e) => {
    try {
      return new r(t, e).range || "*";
    } catch (t) {
      return null;
    }
  };
}, function (t, e, n) {
  const r = n(428);
  t.exports = (t, e, n) => r(t, e, ">", n);
}, function (t, e, n) {
  const r = n(428);
  t.exports = (t, e, n) => r(t, e, "<", n);
}, function (t, e, n) {
  const r = n(211);
  t.exports = (t, e, n) => {
    t = new r(t, n);
    e = new r(e, n);
    return t.intersects(e, n);
  };
}, function (t, e, n) {
  const r = n(394);
  const i = n(210);
  t.exports = (t, e, n) => {
    const o = [];
    let a = null;
    let s = null;
    const c = t.sort((t, e) => i(t, e, n));
    for (const t of c) {
      if (r(t, e, n)) {
        s = t;
        a ||= t;
      } else {
        if (s) {
          o.push([a, s]);
        }
        s = null;
        a = null;
      }
    }
    if (a) {
      o.push([a, null]);
    }
    const u = [];
    for (const [t, e] of o) {
      if (t === e) {
        u.push(t);
      } else if (e || t !== c[0]) {
        if (e) {
          if (t === c[0]) {
            u.push("<=" + e);
          } else {
            u.push(`${t} - ${e}`);
          }
        } else {
          u.push(">=" + t);
        }
      } else {
        u.push("*");
      }
    }
    const l = u.join(" || ");
    const f = typeof e.raw == "string" ? e.raw : String(e);
    if (l.length < f.length) {
      return l;
    } else {
      return e;
    }
  };
}, function (t, e, n) {
  const r = n(211);
  const i = n(393);
  const {
    ANY: o
  } = i;
  const a = n(394);
  const s = n(210);
  const c = [new i(">=0.0.0-0")];
  const u = [new i(">=0.0.0")];
  const l = (t, e, n) => {
    if (t === e) {
      return true;
    }
    if (t.length === 1 && t[0].semver === o) {
      if (e.length === 1 && e[0].semver === o) {
        return true;
      }
      t = n.includePrerelease ? c : u;
    }
    if (e.length === 1 && e[0].semver === o) {
      if (n.includePrerelease) {
        return true;
      }
      e = u;
    }
    const r = new Set();
    let i;
    let l;
    let p;
    let d;
    let m;
    let g;
    let y;
    for (const e of t) {
      if (e.operator === ">" || e.operator === ">=") {
        i = f(i, e, n);
      } else if (e.operator === "<" || e.operator === "<=") {
        l = h(l, e, n);
      } else {
        r.add(e.semver);
      }
    }
    if (r.size > 1) {
      return null;
    }
    if (i && l) {
      p = s(i.semver, l.semver, n);
      if (p > 0) {
        return null;
      }
      if (p === 0 && (i.operator !== ">=" || l.operator !== "<=")) {
        return null;
      }
    }
    for (const t of r) {
      if (i && !a(t, String(i), n)) {
        return null;
      }
      if (l && !a(t, String(l), n)) {
        return null;
      }
      for (const r of e) {
        if (!a(t, String(r), n)) {
          return false;
        }
      }
      return true;
    }
    let b = !!l && !n.includePrerelease && !!l.semver.prerelease.length && l.semver;
    let w = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver;
    if (b && b.prerelease.length === 1 && l.operator === "<" && b.prerelease[0] === 0) {
      b = false;
    }
    for (const t of e) {
      y = y || t.operator === ">" || t.operator === ">=";
      g = g || t.operator === "<" || t.operator === "<=";
      if (i) {
        if (w && t.semver.prerelease && t.semver.prerelease.length && t.semver.major === w.major && t.semver.minor === w.minor && t.semver.patch === w.patch) {
          w = false;
        }
        if (t.operator === ">" || t.operator === ">=") {
          d = f(i, t, n);
          if (d === t && d !== i) {
            return false;
          }
        } else if (i.operator === ">=" && !a(i.semver, String(t), n)) {
          return false;
        }
      }
      if (l) {
        if (b && t.semver.prerelease && t.semver.prerelease.length && t.semver.major === b.major && t.semver.minor === b.minor && t.semver.patch === b.patch) {
          b = false;
        }
        if (t.operator === "<" || t.operator === "<=") {
          m = h(l, t, n);
          if (m === t && m !== l) {
            return false;
          }
        } else if (l.operator === "<=" && !a(l.semver, String(t), n)) {
          return false;
        }
      }
      if (!t.operator && (l || i) && p !== 0) {
        return false;
      }
    }
    return (!i || !g || !!l || p === 0) && (!l || !y || !!i || p === 0) && !w && !b;
  };
  const f = (t, e, n) => {
    if (!t) {
      return e;
    }
    const r = s(t.semver, e.semver, n);
    if (r > 0) {
      return t;
    } else if (r < 0 || e.operator === ">" && t.operator === ">=") {
      return e;
    } else {
      return t;
    }
  };
  const h = (t, e, n) => {
    if (!t) {
      return e;
    }
    const r = s(t.semver, e.semver, n);
    if (r < 0) {
      return t;
    } else if (r > 0 || e.operator === "<" && t.operator === "<=") {
      return e;
    } else {
      return t;
    }
  };
  t.exports = (t, e, n = {}) => {
    if (t === e) {
      return true;
    }
    t = new r(t, n);
    e = new r(e, n);
    let i = false;
    t: for (const r of t.set) {
      for (const t of e.set) {
        const e = l(r, t, n);
        i = i || e !== null;
        if (e) {
          continue t;
        }
      }
      if (i) {
        return false;
      }
    }
    return true;
  };
}, function (t, e) {
  t.exports = function (t, e, n) {
    var r = -1;
    var i = t.length;
    if (e < 0) {
      e = -e > i ? 0 : i + e;
    }
    if ((n = n > i ? i : n) < 0) {
      n += i;
    }
    i = e > n ? 0 : n - e >>> 0;
    e >>>= 0;
    var o = Array(i);
    while (++r < i) {
      o[r] = t[r + e];
    }
    return o;
  };
}, function (t, e, n) {
  var r = n(592);
  t.exports = function (t) {
    var e = r(t);
    var n = e % 1;
    if (e == e) {
      if (n) {
        return e - n;
      } else {
        return e;
      }
    } else {
      return 0;
    }
  };
}, function (t, e, n) {
  var r = n(419);
  t.exports = function (t) {
    if (t) {
      if ((t = r(t)) === Infinity || t === -Infinity) {
        return (t < 0 ? -1 : 1) * 1.7976931348623157e+308;
      } else if (t == t) {
        return t;
      } else {
        return 0;
      }
    } else if (t === 0) {
      return t;
    } else {
      return 0;
    }
  };
},,,,,, function (t, e, n) {
  "use strict";

  n.r(e);
  n(7);
  n(6);
  var r = n(5);
  var i = n.n(r);
  n(563);
  var o = n(13);
  var a = n(254);
  var s = n(36);
  var c = n(164);
  function u() {
    const t = [n(474), s.b];
    return new i.a(e => {
      let n = false;
      t.forEach(t => {
        const r = new Image();
        r.addEventListener("load", async () => {
          if (!n) {
            n = true;
            Object(a.b)(t);
            e(t);
          }
        });
        r.src = t;
      });
    });
  }
  async function l() {
    const t = await Object(c.c)();
    if (t) {
      const e = await Object(c.a)(t);
      const n = window.URL.createObjectURL(e);
      Object(a.b)(n);
      return n;
    }
    throw new Error("当前壁纸base64丢失");
  }
  async function f(t) {
    const {
      urlInUI: e
    } = t;
    if (await Object(c.f)(e)) {
      Object(a.b)(e);
      return e;
    } else {
      return await l();
    }
  }
  const h = async () => {
    const t = await o.n.read();
    if (t.error) {
      await u();
      return;
    }
    const e = t.data || {};
    Object(a.c)(e.opacity, e.blur);
    try {
      switch (e.type) {
        case "local":
          {
            const t = await l();
            e.rawUrl = e.urlInUI = t;
            await o.n.create(e);
            break;
          }
        case "bing":
        case "cloud":
          {
            const t = await f(e);
            e.urlInUI = t;
            await o.n.create(e);
            break;
          }
        case "color":
          (function (t) {
            const {
              color: e
            } = t;
            if (!e) {
              throw new Error("纯色壁纸，颜色丢失");
            }
            Object(a.a)(e);
          })(e);
          break;
        case "userLibraryAuto":
        case "cloudAuto":
          {
            const t = await async function (t) {
              if (t.switchType !== "when-newtab" && t.timeEnd > Date.now()) {
                await f(t);
                return;
              }
              const e = await o.m.read();
              if (e.error) {
                await f(t);
                return;
              }
              if (e.data === null) {
                await f(t);
                return;
              }
              const n = e.data;
              if (n.onlyOneItem) {
                await f(t);
                return;
              }
              if (!n.ready) {
                await f(t);
                return;
              }
              if (await Object(c.f)(n.nextURL)) {
                Object(a.b)(n.nextURL);
                n.ready = false;
                await o.m.create(n);
                return {
                  url: n.nextURL,
                  id: n.nextId,
                  rawUrl: n.nextRawURL
                };
              }
              await f(t);
            }(e);
            if (t) {
              e.rawUrl = t.rawUrl;
              e.urlInUI = t.url;
              e.id = t.id;
              await o.n.create(e);
            }
            break;
          }
        case "default":
          await async function (t) {
            const {
              urlInUI: e
            } = t;
            if (await Object(c.f)(e)) {
              Object(a.b)(e);
              return e;
            }
            throw new Error("默认壁纸url访问失败, url: " + e);
          }(e);
          break;
        default:
          {
            const t = await u();
            e.type = "default";
            e.rawUrl = e.urlInUI = t;
            await o.n.create(e);
          }
      }
    } catch (t) {
      await u();
    }
  };
  var p = n(308);
  var d = n(455);
  var m = n(0);
  var g = n(251);
  var y = n(255);
  var b = n(51);
  var w = n(253);
  var v = n(418);
  const _ = (t, e) => {
    let o = 0;
    if (t === "infinity://todos" && (e == null ? undefined : e.notice)?.todoNumber) {
      o = Number(localStorage.getItem("todo-length"));
    }
    if (t === "infinity://gmail" && (e == null ? undefined : e.notice)?.gmailNumber) {
      const t = localStorage.getItem("store-gmail");
      if (t) {
        o = JSON.parse(t)?.unreadEmailCount;
      }
    }
    if (Number(o)) {
      return `<div class="red-tag"><span>${o > 99 ? "99+" : o}</span></div>`;
    } else {
      return "";
    }
  };
  const E = (t, e, n) => {
    const {
      shadow: r
    } = e.font;
    return t.filter(t => t && Object(v.a)(t, false, n)).map(t => `<div class="icon"><div class="icon-content-box">\n  ${t.children && t.children.length ? ((t, e, n) => `<section class="icon-content folder" style="padding: var(--mini-icon-padding);">\n    <div class="mini-icon-box-pre">\n       ${t.children.filter(t => Object(v.a)(t, false, n)).map((t, n) => n > 8 ? "" : t.target === g.p.target ? `<div class="mini-icon-padding"><div class="mini-icon" style="background-color:${t.bgColor || "transparent"};background-size: 60% 60%;background-image:url(${Object(b.c)(t.bgImage)});"></div></div>` : t.bgType === "color" ? t.bgColorImage ? `<div class="mini-icon-padding"><div class="mini-icon" style="background-color:${t.bgColor || "transparent"};background-image:url(${Object(b.c)(t.bgColorImage)})"></div>${_(t.target, e)}</div>` : `<div class="mini-icon-padding"><div class="mini-icon" style="--svg-radius:var(--icon-radius);">\n             ${Object(w.a)(t)}\n                  ${Object(y.a)(t.bgText)}\n                </text>\n              </svg>\n            </div>${_(t.target, e)}</div>` : `<div class="mini-icon-padding"><div class="mini-icon" style="background-color:${t.bgColor || "transparent"};background-image:url(${Object(b.c)(t.bgImage)})"></div>${_(t.target, e)}</div>`).join("")}\n    </div>\n  </section>`)(t, e, n) : t.target === g.p.target ? (t => `<section class="icon-content" \n  style="background-image:url(${Object(b.c)(t.bgImage)});background-color:${t.bgColor};background-size: 60% 60%;will-change:transform;">\n</section>`)(t) : t.bgType === "image" ? ((t, e) => `<section class="icon-content" \n    style="background-image:url(${Object(b.c)(t.bgImage)});background-color:${t.bgColor || "transparent"};">\n    ${_(t.target, e)}\n  </section>`)(t, e) : t.bgType === "color" ? ((t, e) => t.bgColorImage ? `<section class="icon-content" \n    style="background-image:url(${Object(b.c)(t.bgColorImage)});background-color:${t.bgColor || "transparent"};">\n    ${_(t.target, e)}\n  </section>` : `<section class="icon-content" style="--svg-radius:var(--icon-radius);">\n  ${Object(w.a)(t)}\n      ${_(t.target, e)}\n  </section>`)(t, e) : ""}\n  <section class="icon-name ${r ? "shadow" : ""}">\n    ${Object(y.a)(t.name)}\n  </section>\n  </div></div>`).join("");
  };
  const x = async t => {
    const {
      miniMode: n
    } = t.icon;
    const {
      pagin: r
    } = t.view;
    if (n) {
      document.querySelector(".site-box").classList.add("hide");
    }
    (t => {
      const {
        miniMode: e,
        startAnimation: n
      } = t.icon;
      if (!e && n) {
        window.__INFINITY__.startAnimationEnd = false;
        if (m.n) {
          document.querySelector(".site-box").classList.add("start-animate-firefox");
        } else {
          document.querySelector(".site-box").classList.add("start-animate");
        }
        if ("onanimationend" in document) {
          document.querySelector(".site-box").addEventListener("animationend", t => {
            if (t.animationName === "zoomShow") {
              window.__INFINITY__.startAnimationEnd = true;
            }
          });
        } else {
          setTimeout(() => {
            window.__INFINITY__.startAnimationEnd = true;
          }, 600);
        }
      }
    })(t);
    const i = Object(p.a)("store-site");
    const o = Object(p.a)("store-user");
    const a = !s.a || (o == null ? undefined : o.isLogin) && (o == null ? undefined : o.userInfo)?.renderAI;
    if (!i) {
      return;
    }
    const c = i.sites[0];
    const u = document.querySelector(".site-items");
    const l = document.querySelector(".swiper-pagination");
    const f = `<div class="items-card${t.icon.shadow ? " icon-shadow" : ""}">\n    ${E(c || [], t, a)}\n</div>\n`;
    u.innerHTML = f;
    if (i.sites.length > 1) {
      l.innerHTML = i.sites.map((t, e) => `<span class="dot${e === 0 ? " active" : ""}"></span>`).join("");
      l.classList.remove("hide");
    }
    if (r && !n) {
      document.querySelector(".site-pagin").classList.remove("hide");
    }
  };
  const T = async (t, e) => {
    var n;
    var r;
    document.querySelector(".btn-setting").classList.remove("hide");
    const {
      windmill: i
    } = t.view || {};
    if (t.view.isShowHomepageBtn && m.s) {
      document.querySelector(".btn-setting-home").classList.remove("hide");
    }
    if (!s.a && !t.view.hideInfinityAI && !!localStorage.getItem("pre-chatai")) {
      document.querySelector(".btn-chatai").classList.remove("hide");
    }
    const o = localStorage.getItem("langCode") || "";
    if (o === "zh-CN" && m.s && !t.view.isHideIcp) {
      if ((n = document.querySelector(".icp.zh")) !== null && n !== undefined) {
        n.classList.remove("hide");
      }
    }
    if (o.startsWith("en") && !t.view.isHideIcp) {
      if ((r = document.querySelector(".icp.en")) !== null && r !== undefined) {
        r.classList.remove("hide");
      }
    }
    if (i) {
      document.querySelector(".windmill-box").classList.remove("hide");
    }
    const a = localStorage.getItem("infinity-updater");
    if (a) {
      try {
        const {
          info: t
        } = JSON.parse(a);
        if (t.level) {
          document.querySelector(".btn-update").classList.remove("hide");
        }
      } catch (t) {}
    }
  };
  n(19);
  var I = n(313);
  var O = n(109);
  var S = n(24);
  var A = n(460);
  function N(t) {
    return ` <img style="margin: 0;" class="bookmark-icon" src="${function (t) {
      if (m.n || m.h) {
        return "https://favicon.infinitynewtab.com/" + S.a.getFavIconSrc(t) + ".png";
      }
      return Object(A.a)(t);
    }(t)}" /> `;
  }
  function j(t, e, r) {
    return `\n      <div\n        class="bookmark-item"\n        style="display: inline-flex;"\n      >\n        ${e === "star" ? ` <img class="bookmark-icon" src=${n(558)} /> ` : e === "folder" ? ` <img style="margin: 0;" class="bookmark-icon" src=${n(475)} /> ` : ` ${N(r)} `}\n        <span class="bookmark-text" style="${t ? "" : "margin-left: 0;"}">${t}</span>\n      </div>\n  `;
  }
  function C(t = O.b, e = {
    topUseful: 0,
    topBookmark: 0
  }) {
    const r = t.view.topBookmark && e.topBookmark === 1;
    const i = t.view.topUseful && e.topUseful === 1;
    const o = document.querySelector(".top-bookmark");
    if (r) {
      o.classList.remove("hide");
      const t = document.createElement("style");
      t.textContent = "\n.top-bookmark{\n  display: flex;\n  align-items: center;\n\n  box-sizing: border-box;\n  padding: 4px 8px;\n  border-bottom: 1px solid rgb(226, 226, 226);\n  height: 36px;\n}\n\n.bookmark-split-line {\n  display: block;\n  width: 1px;\n  height: 50%;\n  background-color: #ccc;\n  margin: 0 6px;\n}\n\n.bookmark-items {\n  height: inherit;\n  flex: 1;\n  // overflow: hidden;\n  font-size: 0;\n\n  --topbar-bookmark-height: calc(30px + 6px);\n  display: block;\n  width: 100vw;\n  height: var(--topbar-bookmark-height);\n  background-color: rgb(255, 255, 255);\n  border-bottom: 1px solid rgb(226, 226, 226);\n  box-sizing: border-box;\n  padding: 4px 0;\n  position: relative;\n}\n\n.bookmark-item {\n  height: 100%;\n  width: auto;\n  max-width: 152px;\n  box-sizing: border-box;\n  padding: 2px 10px;\n  position: relative;\n  border-radius: calc(var(--topbar-bookmark-height) / 2);\n\n  flex-flow: row nowrap;\n  align-items: center;\n  list-style: none;\n}\n\n.bookmark-item:not(:first-child) {\n  margin-left: 3px;\n}\n.bookmark-item:last-child {\n  margin-left: 0;\n}\n\n.bookmark-dropdown-entry {\n  display: block;\n  width: 0;\n  height: 100%;\n  border-radius: 12px;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  background-position: center;\n  margin-right: 3px;\n  padding: 2px 10px;\n}\n\n\n\n.bookmark-item .bookmark-icon {\n  width: 16px;\n  height: 16px;\n  vertical-align: top;\n}\n\n.bookmark-item .bookmark-text {\n  font-size: 12px;\n  color: #333;\n  margin-left: 7px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  flex: 1;\n}\n\n.bookmark-item .item-folder-arrow {\n  width: 12px;\n  height: 12px;\n  vertical-align: top;\n}\n";
      const e = JSON.parse(localStorage.getItem("bookmarks")) || [];
      let r = "";
      if (m.i) {
        r += j(i18n("bookmarks"), "star");
      }
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        r += j(n.title, Reflect.has(n, "children") ? "folder" : "item", n.url);
      }
      const i = document.createElement("div");
      i.className = "bookmark-items";
      i.innerHTML = r;
      i.appendChild(t);
      o.appendChild(i);
      const a = document.createElement("i");
      a.className = "bookmark-dropdown-entry";
      a.style.backgroundImage = `url(${n(559)})`;
      a.style.visibility = "hidden";
      o.appendChild(a);
      const s = document.createElement("i");
      s.className = "bookmark-split-line";
      o.appendChild(s);
      const c = document.createElement("div");
      o.appendChild(c);
      c.outerHTML = j(i18n("other_bookmarks"), "folder", "").trim();
      const u = i.querySelectorAll(".bookmark-item");
      let l = false;
      for (let t = u.length - 1; t >= 0; t--) {
        const e = u[t];
        if (!(e.offsetTop > 10)) {
          break;
        }
        e.style.display = "none";
        l = true;
      }
      if (l) {
        a.style.visibility = "";
      }
    }
    if (i) {
      const t = document.querySelector(".top-useful");
      const e = JSON.parse(localStorage.getItem("topSites")) || [];
      if (t) {
        if (r) {
          t.parentElement.style.top = "36px";
        }
        t.classList.remove("hide");
      }
      let n = "";
      for (let t = 0; t < e.length; t++) {
        const r = e[t];
        n += `\n<div class="item" title="${r.title}" style="max-width: 160px;min-width: 60px;">\n  <div class="icon">${N(r.url)}</div>\n  <span>${r.title}</span>\n</div>\n    `;
      }
      const i = document.createElement("style");
      i.textContent = "\n    .top-useful {\n      width: 100%;\n      height: 36px;\n      box-sizing: border-box;\n    }\n\n    .top-useful  .flex {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      font-size: 12px;\n      box-sizing: border-box;\n      padding: 4px 8px;\n      flex-flow: row wrap;\n      overflow: hidden;\n    }\n    .top-useful   .item:not(:last-child) {\n      margin-right: 5px;\n    }\n    .top-useful    .item {\n      display: inline-flex;\n      height: 100%;\n      align-items: center;\n      border-radius: 24px;\n      flex-shrink: 0;\n      position: relative;\n      box-sizing: border-box;\n      padding: 2px 10px;\n      cursor: pointer;\n    }\n    .top-useful  .item::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      background-color: #151517;\n      border-radius: inherit;\n      transition: opacity 400ms;\n      pointer-events: none;\n      cursor: pointer;\n    }\n    .top-useful   .item:hover::before {\n      transition: opacity 200ms;\n      opacity: 0.12;\n    }\n\n    .top-useful  .icon {\n      width: 16px;\n      height: 16px;\n      box-sizing: border-box;\n      border-radius: 50%;\n      overflow: hidden;\n      flex-shrink: 0;\n    }\n    .top-useful    .icon img {\n      width: 100%;\n      height: 100%;\n    }\n    .top-useful  span {\n      margin-left: 6px;\n      color: #ececec;\n      text-decoration: none;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    ";
      const o = document.createElement("div");
      o.innerHTML = n;
      o.className = "flex";
      t.appendChild(i);
      t.appendChild(o);
    }
  }
  const D = async () => {
    const {
      setting: t,
      permission: e
    } = Object(p.a)("store-setting") || {};
    ((t = O.b, e = {
      topUseful: 0,
      topBookmark: 0
    }) => {
      const {
        row: i,
        col: o,
        rowGap: a,
        colGap: s
      } = t.layout;
      const c = t.view.topBookmark && e.topBookmark === 1;
      const u = t.view.topUseful && e.topUseful === 1;
      const l = {
        row: i,
        col: o,
        rowGap: a,
        colGap: s,
        iconScale: t.icon.scale,
        searchScale: t.search.scale,
        innerHeight: window.visualViewport?.height || window.innerHeight,
        innerWidth: window.visualViewport?.width || window.innerWidth,
        miniMode: t.icon.miniMode,
        fontSize: t.font.size,
        topUseful: u,
        topBookmark: c,
        mainRatio: t.view.scaleMain
      };
      const f = Object(I.a)(l);
      let h = 0;
      if (c) {
        h += 36;
      }
      const p = {
        "--search-height": f.searchHeight,
        "--search-width": f.searchWidth,
        "--search-margin-top": f.searchMarginTop,
        "--search-margin-bottom": f.searchMarginBottom,
        "--search-ratio": f.searchRatio,
        "--icon-box-width": f.iconBoxWidth,
        "--icon-box-height": f.iconBoxHeight,
        "--icon-one-height": f.iconOneHeight,
        "--icon-width": f.iconWidth,
        "--mini-icon-padding": f.miniIconPadding,
        "--icon-ratio": f.iconRatio,
        "--icon-font-size": Math.ceil(Math.max(t.font.size * t.view.scaleMain, 12)) + "px",
        "--icon-row": "" + i,
        "--icon-col": "" + o,
        "--icon-radius": Math.round(t.icon.radius * 100) + "%",
        "--icon-font-color": t.font.color,
        "--icon-opacity": t.icon.opacity,
        "--icon-visible": t.icon.isHideIconName ? "hidden" : "visible",
        "--search-radius": "" + t.search.radius,
        "--search-opacity": t.search.opacity,
        "--top-bar-height": h + "px",
        "--icon-padding-top": "10px",
        "--main-icons-margin": f.iconsMargin,
        "--search-btn-bgcolor": m.e === "pro" ? "#18140E" : "#00ce6d",
        "--settings-icon-top-offset": u ? "46px" : "20px",
        "--side-ratio": t.view.scaleSide
      };
      Object.keys(p).forEach(t => {
        document.body.style.setProperty(t, p[t]);
      });
    })(t, e);
    if (t) {
      await i.a.all([x(t), C(t, e), Object(d.b)(t), T(t)]);
    }
  };
  var k = n(23);
  var R = n.n(k);
  const L = ["store-site", "store-setting", "store-search", "store-todo", "store-notes", "store-weather", "store-wallpaper", "infinity-icons", "infinity-settings", "infinity-searchs", "infinity-todos", "infinity-notes", "infinity-weather"];
  async function P() {
    const t = {};
    try {
      await R.a.iterate((e, n) => {
        if (L.includes(n) && e) {
          t[n] = e;
        }
      });
      return t;
    } catch (t) {
      return {};
    }
  }
  async function M() {
    const t = {};
    L.forEach(e => {
      const n = localStorage.getItem(e);
      if (n) {
        t[e] = n;
      }
    });
    return t;
  }
  var F = n(167);
  var U = n.n(F);
  const B = {
    name: "hook10063",
    checkNeedUpdate: t => !m.i && U.a.lt(t, "10.0.63"),
    async onUpdate() {
      const t = [o.g.key, o.h.key, o.i.key, o.l.key];
      await i.a.all(t.map(async t => {
        const e = localStorage.getItem(t);
        if (e) {
          try {
            const n = JSON.parse(e);
            const r = o.a.getInstanceFromKey(t);
            await r.create(n);
          } catch (t) {}
          if (t === o.l.key) {
            localStorage.removeItem(t);
          }
        }
      }));
      return {
        dataVersion: "10.0.63"
      };
    }
  };
  const $ = {
    name: "hook10070",
    checkNeedUpdate: t => U.a.lt(t, "10.0.70"),
    async onUpdate(t) {
      const [e] = t.split(".");
      if (e === 10) {
        const t = {
          onlyOneItem: false,
          ready: false
        };
        await o.m.create(t);
        await R.a.removeItem(s.d);
        await o.n.delete("storage.local");
      }
      return {
        dataVersion: "10.0.70"
      };
    }
  };
  var q = n(256);
  var G = n(163);
  var W = n(384);
  function V(t) {
    const e = document.createElement("div");
    e.innerHTML = t;
    const n = e.firstChild;
    if (n == null ? undefined : n.textContent) {
      return n.textContent.substring(0, 20);
    } else {
      return e.textContent.substring(0, 20);
    }
  }
  const z = {
    searchSuggest: true,
    startAnimation: false,
    isHideIconName: false
  };
  const Y = async t => ({
    sites: (t || []).map(t => (t || []).map(t => function t(e) {
      var n;
      const r = {
        name: e.name,
        uuid: e.uid,
        updatetime: e.updateTime || Date.now(),
        id: e.id
      };
      if (e.items) {
        r.children = e.items.map(e => t(e));
      } else {
        r.target = e.url || "";
        r.type = ((n = e.url) === null || n === undefined ? undefined : n.indexOf("infinity://")) === 0 ? "app" : "web";
        r.bgImage = e.src;
        r.bgType = e.imageType || "color";
        r.bgFont = e.fontSize || 30;
        r.bgText = e.showText || "";
        r.bgColor = e.imageType === "image" && e.bgColor === "transparent" ? undefined : e.bgColor;
      }
      if (r.target === g.p.target) {
        r.bgColor = g.p.bgColor;
        r.bgImage = g.p.bgImage;
        r.name = g.p.name;
      }
      return r;
    }(t)))
  });
  n(64);
  const H = async ({
    data: t,
    icon: e,
    wallpaper: n
  }) => {
    const r = {};
    if (t["infinity-settings"]) {
      t["infinity-settings"]._v2Setting = t["infinity-settings"]._v2Setting || {};
      t["infinity-settings"]._v2Setting = Object.assign(Object.assign({}, z), t["infinity-settings"]._v2Setting);
      r[o.h.key] = await (async t => {
        function e(t) {
          return Number((t / 100).toFixed(2));
        }
        let n = true;
        const r = Object(O.a)(t.column, t.row);
        if (r && r.rowGap === e(t.iconMarginY) && r.colGap === e(t.iconMarginX)) {
          n = false;
        }
        const {
          _v2Setting: i
        } = t;
        return {
          setting: {
            notice: {
              gmail: t.isOpentGmailNotication,
              gmailVoice: t.isOpentGmailRingNotication,
              gmailNumber: t.isShowGmailUnreadEmailNumbersInIco,
              todoNumber: t.isShowToDoNumbersInIco
            },
            link: {
              icon: t.isOpenLinkInNewTab,
              search: t.isSearchInNewTab,
              bookmark: t.isOpenBookmarkInNewTab,
              history: t.isOpenHistoryInNewTab
            },
            view: {
              topBookmark: t.isShowTopBookMarks,
              topUseful: t.isShowtopSites,
              windmill: t.isShowRandomWallpaperBtn,
              pagin: t.isShowSlideBtn,
              scaleSide: e(t.settingLeftSlideZoom),
              scaleMain: e(t.settingMainZoom)
            },
            layout: {
              row: t.column,
              col: t.row,
              rowGap: e(t.iconMarginY),
              colGap: e(t.iconMarginX),
              custom: n,
              customItem: [t.column, t.row]
            },
            animation: {
              easing: t.slideAnimation
            },
            icon: {
              miniMode: t.isMinimalistMode,
              shadow: t.isShowIconShadow,
              opacity: e(t.iconOpacity),
              radius: e(t.iconBorderRadius),
              scale: e(t.iconSize),
              startAnimation: i.startAnimation,
              isHideIconName: i.isHideIconName
            },
            search: {
              hide: t.isShowSearchBox,
              searchSuggest: i.searchSuggest,
              hideCategory: t.isShowSearchType,
              hideButton: t.isShowSearchBtn,
              shadow: t.searchBoxShadow,
              scale: e(t.Searchboxsize),
              radius: Number((t.searchBoxRadius / 66).toFixed(2)),
              opacity: e(t.searchBoxOpacity)
            },
            font: {
              shadow: t.isOpenFontShadow,
              size: t.fontSize,
              color: t.fontColor
            },
            _v1Setting: {
              isAutoSync: t.isAutoSync,
              presetColumn: t.presetColumn,
              presetRow: t.presetRow,
              location: t.location,
              tempUnitC: t.tempUnitC,
              bgOpacity: t.bgOpacity,
              bgBlur: t.bgBlur,
              everydayWallpaper: t.everydayWallpaper,
              refetchWallpaperPeriodInMinutes: t.refetchWallpaperPeriodInMinutes,
              wallpaperSource: t.wallpaperSource
            }
          }
        };
      })(t["infinity-settings"]);
      const e = !!t["infinity-settings"].isAutoSync;
      r[o.j.key] = {
        isOpenSync: e
      };
    }
    if (t["infinity-notes"]) {
      r[o.d.key] = await (async (t, e) => {
        return {
          list: t.map(t => {
            return {
              content: t.text,
              id: t.id,
              time: t.time,
              title: t._title || V(t.text),
              updatetime: Date.now(),
              fontSize: parseInt(e == null ? undefined : e.notesFontSize) ?? 14
            };
          }),
          checkedId: (t == null ? undefined : t.length) ? t[0]?.id : ""
        };
      })(t["infinity-notes"], t["infinity-settings"]);
    }
    if (t["infinity-todos"]) {
      r[o.k.key] = await (async t => ({
        todoList: t.map(t => ({
          done: !!t.done,
          text: t.text,
          time: t.time,
          todoId: t.id,
          updatetime: Date.now()
        }))
      }))(t["infinity-todos"]);
    }
    if (t["infinity-searchs"]) {
      r[o.g.key] = await (async t => {
        function e(t) {
          const e = {
            uuid: t.seId,
            name: t.name,
            logo: t.logo,
            bgColor: t.bgColor || "transparent"
          };
          if (t.types) {
            e.types = t.types;
          }
          return e;
        }
        const n = e(t.current);
        if (t.current.isCustom) {
          n.target = t.current.types[0].url;
        } else {
          n.types = t.current.types;
        }
        return {
          searchEngine: {
            current: n,
            all: ((t == null ? undefined : t.all) || []).map(t => {
              const n = e(t);
              if (t.isCustom) {
                n.target = t.types[0].url;
              } else {
                n.types = t.types;
              }
              return n;
            }),
            addList: ((t == null ? undefined : t.additions) || []).map(t => {
              const n = e(t);
              n.target = t.url;
              return n;
            }),
            custom: ((t == null ? undefined : t.customEngines) || []).map(t => {
              const n = e(t);
              n.target = t.types[0].url;
              return n;
            })
          }
        };
      })(t["infinity-searchs"]);
    }
    if (e) {
      r[o.i.key] = await Y(e);
    }
    if (n) {
      r[o.n.key] = await (async (t, e) => {
        const {
          wallpaperSource: n = {
            value: ""
          }
        } = e;
        const r = "https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/default.png";
        const i = {
          type: "default",
          url: t.src ? t.src : r,
          rawUrl: t.src ? t.src : r
        };
        if ("bgOpacity" in e) {
          i.opacity = e.bgOpacity;
        }
        if ("bgBlur" in e) {
          i.blur = e.bgBlur;
        }
        i.urlInUI = i.url;
        switch (t.type) {
          case "bing":
            i.type = "bing";
            break;
          case "image":
            i.type = "cloud";
            break;
          case "color":
            i.type = "color";
            i.color = t.color;
        }
        if (i.url.startsWith("http")) {
          if (e.everydayWallpaper) {
            if (n.value.startsWith("__wp_library__")) {
              i.type = "userLibraryAuto";
            } else {
              i.type = "cloudAuto";
            }
            const t = {
              60: "per-hour",
              720: "twelve-hour",
              1440: "one-day"
            };
            i.switchType = t[e.refetchWallpaperPeriodInMinutes] || "one-day";
            i.wpSource = n.value || "InfinityLandscape";
          }
        } else {
          i.type = "local";
          const t = "data:image/png;base64,";
          const e = /data:image\/(.+?);base64,/;
          if (i.url.startsWith("data:image/png;base64,data:image/")) {
            let n = i.url.replace(/data:image\/png;base64,/g, "");
            if (!e.test(n)) {
              n = `${t}${n}`;
            }
            i.url = n;
          }
          if (!e.test(i.url)) {
            i.url = `${t}${i.url}`;
          }
          delete i.rawUrl;
          delete i.urlInUI;
        }
        if (i.type === "default") {
          i.urlInUI = `${i.url}?imageView2/2/w/${screen.width}/format/webp/interlace/1`;
        }
        if (t.type === "bing") {
          i.wpSource = "bing";
        }
        return i;
      })(n, t["infinity-settings"] || {});
    }
    return r;
  };
  const X = async () => {
    const t = await new i.a(t => {
      chrome.storage.local.get(null, e => {
        try {
          const n = JSON.parse(e["infinity-wallpaper"] || null);
          const r = JSON.parse(e["infinity-bing-wallpaper-md5"] || null);
          const i = {
            src: n == null ? undefined : n.originalSrc,
            bing: r == null ? undefined : r.md5
          };
          t(i);
        } catch (e) {
          t({
            src: "",
            bing: null
          });
        }
      });
    });
    const e = await Object(G.b)("infinity-bg");
    if (e) {
      Object.assign(t, e);
    }
    return {
      data: {
        "infinity-settings": await Object(G.b)("infinity-settings"),
        "infinity-notes": await Object(G.b)("infinity-notes"),
        "infinity-todos": await Object(G.b)("infinity-todos"),
        "infinity-searchs": await Object(G.b)("infinity-searchs")
      },
      icon: await Object(G.b)("infinity-icons"),
      wallpaper: t
    };
  };
  const K = async t => {
    t[o.n.key] &&= await (async t => {
      if (t.type === "local") {
        await Object(c.g)(t.url);
      } else {
        await Object(c.g)(await Object(W.d)(t.url));
      }
      t.wpExt = undefined;
      return t;
    })(t[o.n.key]);
    const e = Object.keys(t);
    await i.a.all(e.map(async e => {
      const n = o.a.getInstanceFromKey(e);
      if (n) {
        await n.create(t[e]);
      } else {
        console.error("setLocalData ~ key", e);
      }
    }));
  };
  var J = n(22);
  async function Q(t) {
    await o.l.create({
      isLogin: t.isLogin,
      refreshToken: t.refreshToken,
      token: t.token,
      userInfo: t.user,
      _flag: {}
    });
  }
  const Z = async () => {
    const t = await async function () {
      const t = await Object(G.b)("infinity-user");
      if (!(t == null ? undefined : t.isLogin)) {
        return;
      }
      const e = await J.f.loginWithUid(t);
      if (e.code === 0) {
        return e.data;
      } else {
        return undefined;
      }
    }();
    const e = await Object(G.b)("infinity-mobile-uid");
    if (t) {
      t.user.mobileuid = e;
      await Q(Object.assign(Object.assign({}, t), {
        isLogin: true
      }));
    } else {
      await Q({
        isLogin: false
      });
    }
  };
  async function tt() {
    const t = await async function () {
      const e = await Object(G.b)("infinity-weather");
      if ((e == null ? undefined : e.citys)?.length) {
        return e.citys.map(t => t.data.name);
      }
      return [];
    }();
    const e = await async function (t) {
      if (t == null ? undefined : t.length) {
        return await i.a.all(t.map(async t => {
          const r = await J.h.getCityList(t);
          if ((r == null ? undefined : r.data)?.cities?.length) {
            const {
              cid: t,
              city: e
            } = r.data.cities[0];
            return {
              cid: t,
              city: e
            };
          }
        }));
      } else {
        return [];
      }
    }(t);
    const n = await async function (t) {
      if (t == null ? undefined : t.length) {
        return await i.a.all(t.map(async t => {
          const e = await J.h.getForecastWeather(t.cid);
          if (e == null ? undefined : e.data) {
            return Object.assign(Object.assign({}, e.data), {
              name: t.city
            });
          }
        }));
      } else {
        return [];
      }
    }(e);
    const r = await async function () {
      return await J.h.getLocalCity();
    }();
    const a = await Object(G.b)("infinity-settings");
    const s = a ? a.tempUnitC ? "celsius" : "fahrenheit" : "celsius";
    await o.o.create({
      _flag: {},
      lastUpdated: +new Date(),
      unit: s,
      list: n,
      localData: r
    });
  }
  const et = async t => {
    const e = t.split(".")[0];
    if (t !== m.D) {
      await q.a.clearAllData();
    }
    if (Number(e) < 10) {
      await q.a.backupOldData(false, t);
      await (async () => {
        const t = await X();
        const e = await H(t);
        await K(e);
      })();
      let e = true;
      if (localStorage.getItem("updating-manual")) {
        try {
          const {
            data: t,
            error: n
          } = await o.l.read();
          if (n) {
            throw n;
          }
          if (t == null ? undefined : t.isLogin) {
            e = false;
          }
        } catch (t) {}
      }
      if (e) {
        await Z();
      }
      await tt();
      return;
    }
    await q.a.backupOldData(true, t);
  };
  const nt = {
    name: "hook10",
    checkNeedUpdate: t => U.a.lt(t, "10.0.0"),
    async onUpdate(t) {
      await et(t);
      try {
        await (async () => {
          ["infinity-bg", "infinity-weather", "infinity-default-search-engines", "infinity-mobile-uid", "infinity-user", "infinity-settings", "infinity-searchs", "infinity-todos", "infinity-notes", "infinity-icons"].forEach(t => {
            localStorage.removeItem(t);
          });
        })();
      } catch (t) {}
      return {
        dataVersion: "10.0.0"
      };
    }
  };
  const rt = {
    name: "hook1036",
    checkNeedUpdate: t => U.a.lt(t, "10.0.36"),
    async onUpdate() {
      window.updateFromThirtyFiveStatus = true;
      try {
        const t = await Object(W.c)();
        const {
          data: e,
          error: n
        } = await o.n.read();
        if (!n && e) {
          e.customColorItems = t.map(t => {
            if (!("type" in t)) {
              t.type = "color";
            }
            return t;
          });
          await o.n.create(e);
        }
      } catch (t) {}
      window.updateFromThirtyFiveStatus = false;
      return {
        dataVersion: "10.0.36"
      };
    }
  };
  const it = {
    name: "hook1040",
    checkNeedUpdate: t => U.a.lt(t, "10.0.40"),
    async onUpdate() {
      const t = localStorage.getItem(o.o.key);
      if (t) {
        await o.o.create(JSON.parse(t));
      }
      return {
        dataVersion: "10.0.40"
      };
    }
  };
  const ot = async (t, e) => {
    await (async t => {
      t = t || "0.0.0";
      let e = await R.a.getItem("data-record");
      e ||= {};
      if (e[t]) {
        return;
      }
      const [n, r] = await i.a.all([P(), M()]);
      const o = {
        indexedData: n,
        localData: r,
        time: Date.now(),
        version: m.z,
        dataVersion: t
      };
      e[t] = o;
      Object.keys(e).forEach(n => {
        if (n !== t && Date.now() - e[n].time > 2592000000) {
          delete e[n];
        }
      });
      await R.a.setItem("data-record", e);
    })(t);
    const n = ((t, e) => async n => {
      try {
        if (!t || !e || typeof t != "string" || typeof e != "string") {
          return;
        }
        if (n.checkNeedUpdate(t, e)) {
          await q.a.track(`begin ${n.name} from ${t} to ${e}`);
          const r = await n.onUpdate(t, e);
          if (r == null ? undefined : r.dataVersion) {
            localStorage.setItem("data-version", r.dataVersion);
          }
          await q.a.track(`success ${n.name} from ${t} to ${e}`);
        }
      } catch (r) {
        await q.a.track(`failed ${n.name} from ${t} to ${e}`, r);
        throw r;
      }
    })(t, e);
    await n(nt);
    await n(rt);
    await n(it);
    await n(B);
    await n($);
  };
  const at = async () => {
    let t = localStorage.getItem("data-version");
    if (t !== m.z && localStorage.getItem("user-checkout-repair") !== m.z) {
      if (!t && (t = localStorage.getItem("version"), !t)) {
        if (localStorage.getItem("infinity-icons")) {
          t = "9.9.9";
        }
      }
      var e;
      var n;
      if (t && U.a.valid(t) === t) {
        try {
          await (e = "tabUpdater", n = async () => {
            const e = localStorage.getItem("data-version") || t;
            if (e !== m.z) {
              console.info("begin ~ tabUpdater:", e, m.z);
              try {
                await ot(e, m.z);
                localStorage.setItem("data-version", m.z);
              } catch (t) {
                console.error("-->> ~ updater error:", t);
              }
            }
          }, navigator.locks ? new i.a((t, r) => {
            const i = new AbortController();
            setTimeout(() => {
              r(new Error("timeout"));
              i.abort();
            }, 20000);
            navigator.locks.request(e, {
              signal: i.signal
            }, async e => {
              try {
                const r = await n(e);
                t(r);
              } catch (t) {
                r(t);
              }
            });
          }) : (console.warn("navigator.locks is not supported"), n(null)));
        } catch (t) {
          console.error("-->> ~ tabUpdater error:", t);
        }
      } else {
        localStorage.setItem("data-version", m.z);
      }
    }
  };
  (async () => {
    console.time("updater");
    await at();
    console.timeEnd("updater");
    console.time("i18n");
    if (m.r) {
      const {
        initI18n: t
      } = await Promise.resolve().then(n.bind(null, 6));
      await t();
    }
    console.timeEnd("i18n");
    document.title = i18n("new_tab");
    window.globalThis = window.globalThis || window;
    window.__INFINITY__ = {};
    window.__INFINITY__.scrollbar_width = 6;
    window.__INFINITY__.startAnimationEnd = true;
    window.__INFINITY__.wpId = "__wp__";
    window.__INFINITY__.wpColorId = "__wp_color__";
    window.__INFINITY__.wpLibraryId = "__wp_library__";
    window.__INFINITY__.wpLibraryItemId = "__wp_library_item__";
    window.__INFINITY__.color_list = g.i;
    window.__INFINITY__.wallpaper_sources = g.o;
    window.__INFINITY__.isZh = m.C.isZh;
    window.__ANIMATION__ = {};
    window.__ANIMATION__.aniSideTime = 200;
    window.__ANIMATION__.aniSideFn = "cubic-bezier(0.42, 0, 0.58, 1)";
    window.__ANIMATION__.aniFolderTime = 100;
    window.__ANIMATION__.aniFolderFn = "cubic-bezier(0.42, 0, 0.58, 1)";
    window.__ANIMATION__.aniFolderBgTime = 200;
    window.__ANIMATION__.aniFolderBgFn = "cubic-bezier(0.42, 0, 0.58, 1)";
    await new i.a(async t => {
      console.time("pre-render");
      if (localStorage.getItem("data-version") !== m.z && localStorage.getItem("user-checkout-repair") !== m.z) {
        try {
          await Promise.all([n.e(0), n.e(3), n.e(30)]).then(n.bind(null, 809));
          document.body.classList.remove("hide-opacity");
          document.querySelector("i-updating").classList.remove("hide");
          document.querySelector("i-updating").showError();
        } catch (t) {
          console.error(t);
        }
      }
      await i.a.all([h(), D()]);
      document.body.classList.remove("hide-opacity");
      console.timeEnd("pre-render");
      setTimeout(t, 0);
    });
    if (m.r) {
      await n.e(34).then(n.bind(null, 808));
    }
    const {
      level1: t,
      level2: e
    } = await Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(14)]).then(n.bind(null, 811));
    await t();
    await e();
  })();
}]);