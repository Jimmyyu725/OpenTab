(window.webpackJsonp = window.webpackJsonp || []).push([[26, 4, 5, 6, 9, 27, 33, 35], [function (t, e, n) {
  "use strict";

  n.d(e, "t", function () {
    return o;
  });
  n.d(e, "j", function () {
    return i;
  });
  n.d(e, "q", function () {
    return s;
  });
  n.d(e, "s", function () {
    return a;
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
    return h;
  });
  n.d(e, "r", function () {
    return p;
  });
  n.d(e, "e", function () {
    return f;
  });
  n.d(e, "c", function () {
    return d;
  });
  n.d(e, "z", function () {
    return g;
  });
  n.d(e, "d", function () {
    return y;
  });
  n.d(e, "l", function () {
    return m;
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
    return T;
  });
  n.d(e, "y", function () {
    return E;
  });
  n.d(e, "w", function () {
    return x;
  });
  n.d(e, "u", function () {
    return S;
  });
  n.d(e, "x", function () {
    return O;
  });
  n.d(e, "B", function () {
    return I;
  });
  n.d(e, "A", function () {
    return A;
  });
  n.d(e, "f", function () {
    return k;
  });
  n.d(e, "b", function () {
    return C;
  });
  n.d(e, "g", function () {
    return D;
  });
  n.d(e, "G", function () {
    return j;
  });
  n.d(e, "F", function () {
    return P;
  });
  n.d(e, "C", function () {
    return R;
  });
  n.d(e, "D", function () {
    return B;
  });
  n.d(e, "E", function () {
    return U;
  });
  n(19);
  n(64);
  const o = typeof window != "object";
  const i = false;
  const s = true;
  const a = false;
  const c = false;
  const u = true;
  const l = false;
  const h = false;
  const p = false;
  const f = "pro";
  const d = "chrome";
  const g = "11.0.41";
  const y = "1783058950124";
  const m = u || l || h || c || p;
  const b = (u || l || h || p) && !c;
  const w = navigator.platform.indexOf("Mac") >= 0;
  const v = false;
  const _ = s ? "jiaocheng.inftab.com" : "qzeuoq1yf.hn-bkt.clouddn.com";
  const T = "https://infinityicon.infinitynewtab.com/assets";
  const E = s ? "https://api.inftab.com/v2" : "https://api-infinitynewtab-com.test690.com/v2";
  const x = s ? "https://api.inftab.com" : "https://api-infinitynewtab-com.test690.com";
  const S = "https://privacy.inftab.com/privacy";
  const O = "https://infinity-api.infinitynewtab.com";
  const I = a ? location.origin : s ? "https://inftab.com" : "https://test.inftab.com";
  const A = "https://weatheroffer.com/api/extfans";
  const k = "https://mail.google.com";
  const C = "https://suggestion.baidu.com";
  const D = "https://google.com";
  const N = ["cs", "da", "de", "el", "en", "en-GB", "en-US", "es", "es-419", "fi", "fr", "hi", "hu", "id", "it", "ja", "ko", "ms", "nl", "no", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
  const j = !!globalThis.chrome?.abp;
  function P(t = "", e = "_") {
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
    const e = P(t.replace("_", "-"), "-");
    if (N.includes(e)) {
      return e;
    } else if (t === "zh" || e.indexOf("zh-") === 0) {
      return "zh-CN";
    } else {
      return "en-US";
    }
  }
  const R = {
    get lang() {
      if (a) {
        return function () {
          if (!o) {
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
      if (a) {
        return "web";
      } else {
        return chrome.runtime.getManifest().version;
      }
    },
    get extId() {
      if (a) {
        return "web";
      } else {
        return chrome.runtime.id;
      }
    },
    get platform() {
      if (a) {
        return "web";
      } else {
        return "chrome";
      }
    },
    get supportCookie() {
      return !p && this.runtimePlatform !== "safari";
    },
    get runtimePlatform() {
      if (j) {
        return "360";
      } else {
        return M().broswer;
      }
    },
    get platformVersion() {
      return M().version;
    },
    get isZh() {
      return R.lang === "zh-CN";
    },
    get isEn() {
      return /^(en|en-GB|en-US)$/.test(R.lang);
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
  const B = "10.0.107";
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
  var o = n.n(r);
  var i = n(107);
  var s = n.n(i);
  var a = n(0);
  var c = n(50);
  var u = n(13);
  const l = s.a.create({
    timeout: 30000
  });
  let h = false;
  const p = [];
  const f = () => new o.a(async (t, e) => {
    p.push({
      resolve: t,
      reject: e
    });
    if (!h) {
      h = true;
      try {
        let t;
        if (c.a) {
          const e = a.l && window.updateFromThirtyFiveStatus;
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
          h = false;
          p.forEach(t => {
            t.reject(new Error("no refreshtoken"));
          });
          return;
        }
        const {
          status: r,
          data: o
        } = await l.post(a.y + "/refresh_token", {
          refresh_token: e
        }, {
          headers: {
            "i-lang": a.C.lang
          }
        });
        if (r === 200 && o.code === 0) {
          const {
            token: e,
            refreshToken: n
          } = o.data;
          t.setToken(o.data);
          t.setRefreshToken(n);
          h = false;
          p.forEach(t => {
            t.resolve(e);
          });
        } else {
          if (r !== 200 || o.code !== 3010 && o.code !== 3012) {
            throw new Error(o == null ? undefined : o.message);
          }
          t.setOutdated();
          h = false;
          p.forEach(t => {
            t.reject(o.message);
          });
        }
      } catch (t) {
        h = false;
        p.forEach(e => {
          e.reject(t);
        });
      }
    }
  });
  var d = n(24);
  const g = ["params", "data", "_auth"];
  const y = async t => {
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
      request: o,
      option: i
    } = (t => {
      const e = {};
      const n = {};
      if (t.data && !e.body) {
        e.body = JSON.stringify(t.data);
      }
      Object.keys(t).forEach(r => {
        if (!g.includes(r)) {
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
      request: o,
      option: i
    });
  };
  const m = s.a.CancelToken;
  const b = s.a.create({
    timeout: 60000
  });
  b.interceptors.response.use(null, t => {
    t.message = i18n("network_error");
    return o.a.reject(t);
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
      t.cancelToken = new m(t => {
        w[e] = t;
      });
    }
    var e;
    if (t._delay) {
      await (e = t._delay, new o.a(t => {
        setTimeout(t, e);
      }));
    }
    const r = {};
    if (t._auth) {
      let e = null;
      if (c.a) {
        const t = a.l && window.updateFromThirtyFiveStatus;
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
        const o = await d.a.getTimestamp();
        if (t._Authorization) {
          r.Authorization = t._Authorization;
          r["i-token"] = t._Authorization;
        } else if (Math.floor(o / 1000) > n.exp - 60) {
          const t = await f();
          r.Authorization = "Bearer " + t;
          r["i-token"] = "Bearer " + t;
        } else {
          r.Authorization = "Bearer " + e.token;
          r["i-token"] = "Bearer " + e.token;
        }
      }
    }
    let i;
    if (t.url.includes(a.y)) {
      r["i-lang"] = a.C.lang;
      r["i-edition"] = a.e;
      r["i-version"] = a.C.extVersion;
    }
    t.headers = Object.assign(Object.assign({}, r), t.headers);
    i = t._proxy ? await y(t) : await b(t);
    if (t._responseAll) {
      return i;
    }
    let {
      data: s
    } = i;
    if (!t._Authorization && (s == null ? undefined : s.code) === 3010) {
      const e = await f();
      t._Authorization = "Bearer " + e;
      delete t.headers.Authorization;
      delete t.headers["i-token"];
      s = await _(t);
    }
    return s;
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
},, function (t, e, n) {
  t.exports = n(267);
}, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "i18n", function () {
    return u;
  });
  n.d(e, "IS_ZH", function () {
    return h;
  });
  n.d(e, "IS_EN", function () {
    return p;
  });
  n.d(e, "initMasterI18n", function () {
    return f;
  });
  n.d(e, "initI18n", function () {
    return d;
  });
  n.d(e, "setLangToLocal", function () {
    return y;
  });
  n.d(e, "getLangFromLocal", function () {
    return m;
  });
  n(19);
  n(64);
  n(7);
  var r = n(0);
  var o = n(107);
  var i = n.n(o);
  var s = n(23);
  var a = n.n(s);
  let c = {};
  const u = function (t, e) {
    if (r.l && !r.r) {
      return chrome.i18n.getMessage(t, e) || t;
    }
    if (r.s || r.r) {
      if (r.r && e === undefined) {
        return chrome.i18n.getMessage(t, e) || t;
      }
      const o = c[t]?.message;
      const i = [];
      if (typeof e == "string") {
        i.push(e);
      } else if (Array.isArray(e)) {
        i.push(...e);
      }
      const s = /(\$.+?\$)/g;
      let a = s.exec(o);
      let u = o;
      while (a) {
        let [t] = i.splice(0, 1);
        if (t === undefined) {
          t = "";
        }
        u = u.replace(a[1], t);
        a = s.exec(o);
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
  const h = l() === "zh-CN";
  const p = l().startsWith("en");
  async function f() {
    const t = await m();
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
      const n = await m();
      const r = localStorage.getItem("setLangCode");
      const o = localStorage.getItem("langCode");
      if (r !== null && n !== null || o === e && n !== null) {
        c = n;
        g(r ? o : e);
      } else {
        await g(r ? o : e);
      }
      t.postTask("slave:master-init-i18n", c);
    } catch (t) {}
  }
  async function g(t) {
    const e = t.replace("-", "_");
    const n = (await i.a.get(`${r.B}/_locales/${Object(r.F)(e)}/messages.json?v=1727661706484`)).data;
    if (Object.keys(n).length > 50) {
      c = n;
      localStorage.setItem("langCode", t);
      y(n);
    }
  }
  function y(t) {
    return a.a.setItem("current-language", t);
  }
  function m() {
    return a.a.getItem("current-language");
  }
},,,,,,, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return f;
  });
  n.d(e, "d", function () {
    return d;
  });
  n.d(e, "g", function () {
    return g;
  });
  n.d(e, "h", function () {
    return y;
  });
  n.d(e, "i", function () {
    return m;
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
    return T;
  });
  n.d(e, "m", function () {
    return E;
  });
  n.d(e, "b", function () {
    return x;
  });
  n.d(e, "c", function () {
    return S;
  });
  n.d(e, "f", function () {
    return O;
  });
  n.d(e, "e", function () {
    return I;
  });
  var r;
  var o = n(5);
  var i = n.n(o);
  n(7);
  var s = n(0);
  var a = n(50);
  var c = n(23);
  var u = n.n(c);
  var l = n(166);
  async function h(t, e, n, r = false) {
    try {
      if (n === "idb") {
        await u.a.setItem(t, e);
      } else if (n === "localstorage") {
        let n = e;
        if (!r) {
          n = JSON.stringify(e);
        }
        if (s.l && a.a) {
          await Object(l.d)(t, n);
        } else {
          localStorage.setItem(t, n);
        }
      } else if (n === "storage.local") {
        await new i.a((n, r) => chrome.storage.local.set({
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
  async function p(t, e) {
    try {
      if (e === "idb") {
        await u.a.removeItem(t);
      } else if (e === "localstorage") {
        if (s.l && a.a) {
          await Object(l.c)(t);
        } else {
          localStorage.removeItem(t);
        }
      } else if (e === "storage.local") {
        await new i.a((e, n) => chrome.storage.local.remove(t, () => {
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
  class f {
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
      if ((await i.a.all(t.map(async t => await t.deleteForLogout()))).some(t => !!t.error && (e = t.error, true))) {
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
      f.instanceKeyMapper.set(this.key, this);
    }
    async create(t) {
      return await h(this.key, t, this.type);
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
            e = s.l && a.a ? await Object(l.a)(t) : localStorage.getItem(t);
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
              data: await new i.a((e, n) => chrome.storage.local.get(t, r => {
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
      return await p(this.key, t || this.type);
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
  f.instanceKeyMapper = new Map();
  const d = new f(r.storeNote, "idb");
  const g = new class extends f {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          h(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          p(this.key, "localstorage");
        });
      }
      return super.delete();
    }
    async deleteForLogout() {
      return await super.deleteWithRetain("ignoreSuggest");
    }
  }(r.storeSearch, s.i ? "localstorage" : "idb");
  const y = new class extends f {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          h(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          p(this.key, "localstorage");
        });
      }
      return super.delete();
    }
    async deleteForLogout() {
      return await super.deleteWithRetain("permission");
    }
  }(r.storeSetting, s.i ? "localstorage" : "idb");
  const m = new class extends f {
    async create(t) {
      if (this.type !== "localstorage") {
        setTimeout(() => {
          h(this.key, t, "localstorage");
        }, 0);
      }
      return super.create(t);
    }
    async delete() {
      if (this.type !== "localstorage") {
        requestAnimationFrame(() => {
          p(this.key, "localstorage");
        });
      }
      return super.delete();
    }
  }(r.storeSite, s.i ? "localstorage" : "idb");
  const b = new class extends f {
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
  }(r.storeSync, "idb");
  const w = new f(r.storeTodo, "idb");
  const v = new f(r.storeUser, s.i ? "localstorage" : "idb");
  const _ = new f(r.storeWallpaper, "idb");
  const T = new f(r.storeWeather, "idb");
  const E = new f(r.storeWallpaperAutoData, "idb");
  const x = new f(r.storeBookmarks, "localstorage", {
    keepWithLogout: true
  });
  const S = new f(r.storeGmail, "localstorage", {
    keepWithLogout: true
  });
  const O = new f(r.storePrivacy, "localstorage", {
    keepWithLogout: true
  });
  const I = new f(r.storeNotification, "idb");
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
},, function (t, e, n) {
  var r = n(14);
  var o = n(193);
  var i = n(37);
  var s = n(194);
  var a = n(198);
  var c = n(280);
  var u = o("wks");
  var l = r.Symbol;
  var h = c ? l : l && l.withoutSetter || s;
  t.exports = function (t) {
    if (!i(u, t) || !a && typeof u[t] != "string") {
      if (a && i(l, t)) {
        u[t] = l[t];
      } else {
        u[t] = h("Symbol." + t);
      }
    }
    return u[t];
  };
},, function (t, e, n) {
  "use strict";

  var r = n(77);
  var o = n(137);
  r({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== o
  }, {
    exec: o
  });
},,, function (t, e, n) {
  "use strict";

  n.d(e, "h", function () {
    return r;
  });
  n.d(e, "c", function () {
    return o;
  });
  n.d(e, "g", function () {
    return O;
  });
  n.d(e, "a", function () {
    return i;
  });
  n.d(e, "f", function () {
    return s;
  });
  n.d(e, "d", function () {
    return c;
  });
  n.d(e, "e", function () {
    return kt;
  });
  n.d(e, "b", function () {
    return a;
  });
  var r = {};
  n.r(r);
  n.d(r, "getLocalCity", function () {
    return h;
  });
  n.d(r, "getForecastWeather", function () {
    return p;
  });
  n.d(r, "getCityList", function () {
    return f;
  });
  var o = {};
  n.r(o);
  n.d(o, "getSearchSuggest", function () {
    return w;
  });
  n.d(o, "getEnginesList", function () {
    return v;
  });
  var i = {};
  n.r(i);
  n.d(i, "getIcon", function () {
    return C;
  });
  n.d(i, "getUrlInfoWithPermission", function () {
    return j;
  });
  n.d(i, "getUrlIcon", function () {
    return M;
  });
  n.d(i, "getFetchiconUrls", function () {
    return B;
  });
  n.d(i, "getLogoList", function () {
    return U;
  });
  var s = {};
  n.r(s);
  n.d(s, "register", function () {
    return q;
  });
  n.d(s, "login", function () {
    return V;
  });
  n.d(s, "updateProfile", function () {
    return W;
  });
  n.d(s, "getUserProfile", function () {
    return z;
  });
  n.d(s, "uploadAvatar", function () {
    return $;
  });
  n.d(s, "modifyPassword", function () {
    return G;
  });
  n.d(s, "forgetPassword", function () {
    return H;
  });
  n.d(s, "resetPassword", function () {
    return Y;
  });
  n.d(s, "getEmailCode", function () {
    return K;
  });
  n.d(s, "getRegisterCode", function () {
    return X;
  });
  n.d(s, "inspceCode", function () {
    return J;
  });
  n.d(s, "checkTokenIsExpired", function () {
    return Q;
  });
  n.d(s, "deleteAccount", function () {
    return Z;
  });
  n.d(s, "loginWithUid", function () {
    return tt;
  });
  n.d(s, "v1BasicLogin", function () {
    return et;
  });
  n.d(s, "getMobileUid", function () {
    return nt;
  });
  n.d(s, "getMobileloginUrl", function () {
    return rt;
  });
  n.d(s, "checkMobileloginUrl", function () {
    return ot;
  });
  n.d(s, "sendPhoneCode", function () {
    return it;
  });
  n.d(s, "sendEmailCode", function () {
    return st;
  });
  n.d(s, "bindEmail", function () {
    return at;
  });
  n.d(s, "bindPhoneNumber", function () {
    return ct;
  });
  n.d(s, "unbindEmail", function () {
    return ut;
  });
  n.d(s, "unbindPhoneNumber", function () {
    return lt;
  });
  n.d(s, "verifyPhoneVCode", function () {
    return ht;
  });
  n.d(s, "ThirdLoginType", function () {
    return pt;
  });
  n.d(s, "bindThird", function () {
    return ft;
  });
  n.d(s, "unbindThird", function () {
    return dt;
  });
  n.d(s, "getAreaCodeList", function () {
    return gt;
  });
  n.d(s, "verifyPassword", function () {
    return yt;
  });
  n.d(s, "geVerifyTokenImg", function () {
    return mt;
  });
  var a = {};
  n.r(a);
  n.d(a, "getRepairConcat", function () {
    return bt;
  });
  n.d(a, "postErrorCollect", function () {
    return wt;
  });
  n.d(a, "sendLog", function () {
    return vt;
  });
  var c = {};
  n.r(c);
  n.d(c, "getSyncList", function () {
    return xt;
  });
  n.d(c, "getSyncDetail", function () {
    return St;
  });
  n.d(c, "autoBackup", function () {
    return Ot;
  });
  n.d(c, "manualBackup", function () {
    return It;
  });
  n.d(c, "getV2DataFromV1", function () {
    return At;
  });
  n(7);
  var u = n(0);
  var l = n(3);
  const h = async () => {
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
  const p = async t => {
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
  const f = async t => {
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
  var g = n(82);
  var y = n.n(g);
  var m = n(306);
  var b = n.n(m);
  const w = async t => u.C.isZh ? u.h || u.s ? T(t) : x(t) : u.h || u.s ? E(t) : S(t);
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
            hash: y()(JSON.stringify(t)),
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
  const T = async t => {
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
  const E = async t => {
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
  const x = async t => {
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
  const S = async t => {
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
  var I = n(5);
  var A = n.n(I);
  n(64);
  const k = u.C.lang;
  const C = async ({
    page: t = 0,
    type: e,
    keyword: n,
    source: r
  } = {}) => {
    try {
      const o = await l.a.get(u.w + "/get-icons", {
        lang: k,
        page: t,
        type: e,
        source: r,
        keyword: n,
        version: u.l ? u.z : ""
      }, {
        _single: true,
        _delay: 200
      });
      if (o.success) {
        o.icons.forEach(t => {
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
          data: o
        };
      }
      throw o;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const D = async t => {
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
  const N = /<title[^>]*>\s*(.*)\s*<\/title>/;
  const j = t => window.__INFINITY__.hasAllUrlPermission ? new A.a(async e => {
    let n = 0;
    D(t).then(t => {
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
            const r = N.exec(e);
            const o = r == null ? undefined : r[1];
            if (o) {
              return {
                data: {
                  name: o
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
    e(await D(t));
  });
  const P = (t, e) => {
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
      const e = P(t, i);
      const n = P(t, s);
      const r = P(t, a);
      return e.concat(n, r);
    };
    const r = t.length;
    let o = 0;
    const i = [];
    const s = [];
    const a = [];
    t.forEach(t => {
      const c = new Image();
      c.onload = function () {
        o += 1;
        const {
          width: c,
          height: u
        } = this;
        const l = Math.max(c, u);
        const h = Math.min(c, u);
        if (l / h < 5) {
          if (h > 50 && l > 100) {
            i.push(t);
          } else if (h > 50 || l > 100) {
            s.push(t);
          } else {
            a.push(t);
          }
        } else {
          a.push(t);
        }
        if (o === r) {
          e(n());
        }
      };
      c.onerror = () => {
        o += 1;
        if (o === r) {
          e(n());
        }
      };
      c.src = t;
    });
    setTimeout(() => {
      e(n());
    }, 3000);
  });
  const R = /\.(ico|png|jpg|jpeg|svg|webp)$/;
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
        const o = n.request?.responseURL || t;
        let i = ((t, e) => {
          const n = [];
          e.replace(/<link [^>]*href=['"]([^'"]+)[^>]*/gi, (t, e) => {
            n.push(e);
          });
          return n.reduce((e, n) => {
            if (n && R.test(n)) {
              const r = new URL(n, t);
              e.push(r.href);
            }
            return e;
          }, []);
        })(o, r);
        if (i.length < 6) {
          const t = ((t, e) => {
            const n = [];
            e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*/gi, (t, e) => {
              n.push(e);
            });
            return n.reduce((e, n) => {
              if (n && R.test(n)) {
                const r = new URL(n, t);
                e.push(r.href);
              }
              return e;
            }, []);
          })(o, r);
          i = i.concat(t);
        }
        if (i.length > 4) {
          i.length = 4;
        }
        let s = await L(i);
        s = Array.from(new Set(s));
        if (s.length > 2) {
          s.length = 2;
        }
        return {
          data: s
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
  const B = async t => {
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
  var F = n(13);
  const q = async ({
    email: t,
    password: e,
    repeatPassword: n,
    code: r
  }) => {
    const o = {
      email: t.trim(),
      password: y()(e),
      repeatPassword: y()(n),
      code: r.trim()
    };
    try {
      return await l.a.post(u.y + "/user/register", o);
    } catch (t) {
      return t;
    }
  };
  const V = async ({
    email: t,
    password: e,
    phone_number: n
  }) => {
    const r = {
      email: t ? t.trim() : undefined,
      phone_number: n ? n.trim() : undefined,
      password: y()(e)
    };
    try {
      return await l.a.post(u.y + "/user/login", r);
    } catch (t) {
      return t;
    }
  };
  async function W(t) {
    const {
      data: e
    } = await F.l.read();
    const n = e.userInfo.uid;
    try {
      return await l.a.post(u.y + "/user/update_profile/" + n, t, {
        _auth: true
      });
    } catch (t) {
      throw new Error(t.message);
    }
  }
  async function z() {
    try {
      return await l.a.get(u.y + "/user/get_user_profile", {}, {
        _auth: true,
        _proxy: true
      });
    } catch (t) {
      return t;
    }
  }
  async function $(t) {
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
  async function G({
    originPassword: t,
    newPassword: e
  }) {
    const {
      data: n
    } = await F.l.read();
    const r = n.userInfo.uid;
    const {
      token: o
    } = n;
    if (!o) {
      throw new Error(i18n("unknown_mistake"));
    }
    const i = {
      originPassword: y()(t),
      newPassword: y()(e)
    };
    try {
      return await l.a.post(u.y + "/user/modify_password/" + r, i, {
        _auth: true
      });
    } catch (t) {
      return t;
    }
  }
  async function H(t) {
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
  async function Y({
    password: t,
    repeatPassword: e,
    email: n,
    code: r,
    phone_number: o
  }) {
    const i = {
      password: y()(t),
      repeatPassword: y()(e),
      email: n ? n.trim() : undefined,
      code: r.trim(),
      phone_number: o ? o.trim() : undefined
    };
    try {
      return await l.a.post(u.y + "/user/reset_password", i);
    } catch (t) {
      return t;
    }
  }
  async function K(t) {
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
  async function X(t) {
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
    } = await F.l.read();
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
  const ot = async (t, e) => {
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
  async function it(t) {
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
  async function st(t) {
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
  async function at(t) {
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
  async function ht(t, e) {
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
  var pt;
  async function ft(t, e) {
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
  async function gt() {
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
  async function yt(t) {
    try {
      const e = await l.a.post(u.y + "/user/verify_password", {
        password: y()(t)
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
  async function mt() {
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
  })(pt ||= {});
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
        config: o
      } = e;
      let i = n || o;
      i &&= JSON.stringify(i, (t, e) => {
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
        data: s,
        error: a
      } = await F.l.read();
      if (!a && s) {
        const t = ["mobileuid", "avatar", "refreshToken", "secret", "gender", "name"];
        s = JSON.stringify(s, (e, n) => {
          if (!t.includes(e)) {
            return n;
          }
        });
      }
      const c = await l.a.post(u.y + "/collect", {
        type: t,
        user: s,
        stack: r,
        info: i,
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
  const Tt = t => {
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
  const Et = t => {
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
  const xt = async () => {
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
      e.auto = t.meta.auto.map(Et);
      e.manual = Tt(t.meta.manual.map(Et));
      return {
        data: e
      };
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const St = async (t, e, n = "all") => {
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
      const o = r.data;
      let i = {};
      const s = await A.a.all(o.map(e => l.a.get(e.url + "&timestampid=" + (t === "latest" ? Date.now() : t), {}, {
        timeout: 180000
      })));
      o.forEach((t, n) => {
        const r = t.fileKey;
        if (e === "manual") {
          i = Object.assign(Object.assign({}, i), s[n]);
        } else if (e === "auto") {
          i[r] = s[n];
        }
      });
      return {
        data: i
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
      const o = r.data;
      await A.a.all(o.map(e => {
        const {
          url: n,
          key: r,
          token: o,
          host: i
        } = e;
        const s = new FormData();
        s.append("token", o);
        s.append("key", n);
        s.append("file", _t(t[r]));
        return l.a.post(i, s, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          timeout: 180000
        });
      }));
      localStorage.setItem("pre-sync-id", o[0].timestamp + "");
      const i = await l.a.post(u.y + "/sync/done", {
        type: "auto",
        websocketkeys: e,
        keys: n,
        record_time: o[0].timestamp
      }, {
        _auth: true
      });
      if (i.code !== 0) {
        return {
          error: i
        };
      } else {
        return {
          data: i.meta.map(Et)
        };
      }
    } catch (t) {
      wt("autoBackup", t);
      return {
        error: t
      };
    }
  };
  const It = async t => {
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
        timestamp: o,
        host: i
      } = e.data[0];
      const s = new FormData();
      s.append("token", n);
      s.append("key", r);
      s.append("file", _t(t));
      await l.a.post(i, s, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        timeout: 180000
      });
      const a = await l.a.post(u.y + "/sync/done", {
        type: "manual",
        keys: "data",
        record_time: o
      }, {
        _auth: true
      });
      if (a.code !== 0) {
        return {
          error: a
        };
      } else {
        return {
          data: Tt(a.meta.map(Et))
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
      } = await F.l.read();
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
  var kt = n(316);
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
            var s = new o(l);
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
            f(this, t);
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
        function h(t, e, n) {
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
        function p(t) {
          var e = t && t.then;
          if (t && (typeof t == "object" || typeof t == "function") && typeof e == "function") {
            return function () {
              e.apply(t, arguments);
            };
          }
        }
        function f(t, e) {
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
            h(n, this.state === a ? t : e, this.outcome);
          } else {
            this.queue.push(new l(n, t, e));
          }
          return n;
        };
        l.prototype.callFulfilled = function (t) {
          i.resolve(this.promise, t);
        };
        l.prototype.otherCallFulfilled = function (t) {
          h(this.promise, this.onFulfilled, t);
        };
        l.prototype.callRejected = function (t) {
          i.reject(this.promise, t);
        };
        l.prototype.otherCallRejected = function (t) {
          h(this.promise, this.onRejected, t);
        };
        i.resolve = function (t, e) {
          var n = d(p, e);
          if (n.status === "error") {
            return i.reject(t, n.value);
          }
          var r = n.value;
          if (r) {
            f(t, r);
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
            l(t[c], c);
          }
          return u;
          function l(t, o) {
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
        function l() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function") {
            return arguments[arguments.length - 1];
          }
        }
        var h = undefined;
        var p = {};
        var f = Object.prototype.toString;
        function d(t) {
          if (typeof h == "boolean") {
            return s.resolve(h);
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
              return h = t;
            });
          }
        }
        function g(t) {
          var e = p[t.name];
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
        function y(t) {
          var e = p[t.name].deferredOperations.pop();
          if (e) {
            e.resolve();
            return e.promise;
          }
        }
        function m(t, e) {
          var n = p[t.name].deferredOperations.pop();
          if (n) {
            n.reject(e);
            return n.promise;
          }
        }
        function b(t, e) {
          return new s(function (n, r) {
            p[t.name] = p[t.name] || {
              forages: [],
              db: null,
              dbReady: null,
              deferredOperations: []
            };
            if (t.db) {
              if (!e) {
                return n(t.db);
              }
              g(t);
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
              y(t);
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
        function T(t) {
          return i([function (t) {
            for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n), o = 0; o < e; o++) {
              r[o] = t.charCodeAt(o);
            }
            return n;
          }(atob(t.data))], {
            type: t.type
          });
        }
        function E(t) {
          return t && t.__local_forage_encoded_blob;
        }
        function x(t) {
          var e = this;
          var n = e._initReady().then(function () {
            var t = p[e._dbInfo.name];
            if (t && t.dbReady) {
              return t.dbReady;
            }
          });
          c(n, t, t);
          return n;
        }
        function S(t, e, n, r = 1) {
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
                  return v(t);
                }
              }).then(function () {
                return function (t) {
                  g(t);
                  var e = p[t.name];
                  for (var n = e.forages, r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (o._dbInfo.db) {
                      o._dbInfo.db.close();
                      o._dbInfo.db = null;
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
                    for (var o = 0; o < n.length; o++) {
                      n[o]._dbInfo.db = r;
                    }
                  }).catch(function (e) {
                    m(t, e);
                    throw e;
                  });
                }(t).then(function () {
                  S(t, e, n, r - 1);
                });
              }).catch(n);
            }
            n(o);
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
            var o = p[n.name];
            if (!o) {
              o = {
                forages: [],
                db: null,
                dbReady: null,
                deferredOperations: []
              };
              p[n.name] = o;
            }
            o.forages.push(e);
            if (!e._initReady) {
              e._initReady = e.ready;
              e.ready = x;
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
            var l = o.forages.slice(0);
            return s.all(i).then(function () {
              n.db = o.db;
              return w(n);
            }).then(function (t) {
              n.db = t;
              if (_(n, e._defaultConfig.version)) {
                return v(n);
              } else {
                return t;
              }
            }).then(function (t) {
              n.db = o.db = t;
              e._dbInfo = n;
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
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
                S(n._dbInfo, "readonly", function (o, i) {
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
                        if (E(r)) {
                          r = T(r);
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
                S(n._dbInfo, "readonly", function (o, i) {
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
                      if (E(t)) {
                        t = T(t);
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
                if (f.call(e) === "[object Blob]") {
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
                S(r._dbInfo, "readwrite", function (i, s) {
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
                S(n._dbInfo, "readwrite", function (o, i) {
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
                S(e._dbInfo, "readwrite", function (r, o) {
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
                S(e._dbInfo, "readonly", function (r, o) {
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
                  S(n._dbInfo, "readonly", function (o, i) {
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
                S(e._dbInfo, "readonly", function (r, o) {
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
            e = l.apply(this, arguments);
            var n = this.config();
            if (!(t = typeof t != "function" && t || {}).name) {
              t.name = t.name || n.name;
              t.storeName = t.storeName || n.storeName;
            }
            var r;
            var i = this;
            if (t.name) {
              var c = t.name === n.name && i._dbInfo.db;
              var u = c ? s.resolve(i._dbInfo.db) : w(t).then(function (e) {
                var n = p[t.name];
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
                  g(t);
                  var r = p[t.name];
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
                      y(n._dbInfo);
                    }
                  }).catch(function (e) {
                    (m(t, e) || s.resolve()).catch(function () {});
                    throw e;
                  });
                }
              }) : u.then(function (e) {
                g(t);
                var n = p[t.name];
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
                    y(r[e]._dbInfo);
                  }
                }).catch(function (e) {
                  (m(t, e) || s.resolve()).catch(function () {});
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
        var k = "__lfsc__:".length;
        var C = k + "arbf".length;
        var D = Object.prototype.toString;
        function N(t) {
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
          var l = new Uint8Array(u);
          for (e = 0; e < a; e += 4) {
            n = I.indexOf(t[e]);
            r = I.indexOf(t[e + 1]);
            o = I.indexOf(t[e + 2]);
            i = I.indexOf(t[e + 3]);
            l[c++] = n << 2 | r >> 4;
            l[c++] = (r & 15) << 4 | o >> 2;
            l[c++] = (o & 3) << 6 | i & 63;
          }
          return u;
        }
        function j(t) {
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
        var P = {
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
              e(o + j(r));
            } else if (n === "[object Blob]") {
              var i = new FileReader();
              i.onload = function () {
                var n = "~~local_forage_type~" + t.type + "~" + j(this.result);
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
            if (t.substring(0, k) !== "__lfsc__:") {
              return JSON.parse(t);
            }
            var e;
            var n = t.substring(C);
            var r = t.substring(k, C);
            if (r === "blob" && A.test(n)) {
              var o = n.match(A);
              e = o[1];
              n = n.substring(o[0].length);
            }
            var s = N(n);
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
          stringToBuffer: N,
          bufferToString: j
        };
        function L(t, e, n, r) {
          t.executeSql("CREATE TABLE IF NOT EXISTS " + e.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r);
        }
        function R(t, e, n, r, o, i) {
          t.executeSql(n, r, o, function (t, s) {
            if (s.code === s.SYNTAX_ERR) {
              t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [e.storeName], function (t, a) {
                if (a.rows.length) {
                  i(t, s);
                } else {
                  L(t, e, function () {
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
                    R(n, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [t, e], function () {
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
        function B(t) {
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
            var o = new s(function (t, r) {
              try {
                n.db = openDatabase(n.name, String(n.version), n.description, n.size);
              } catch (t) {
                return r(t);
              }
              n.db.transaction(function (o) {
                L(o, n, function () {
                  e._dbInfo = n;
                  t();
                }, function (t, e) {
                  r(e);
                });
              }, r);
            });
            n.serializer = P;
            return o;
          },
          _support: typeof openDatabase == "function",
          iterate: function (t, e) {
            var n = this;
            var r = new s(function (e, r) {
              n.ready().then(function () {
                var o = n._dbInfo;
                o.db.transaction(function (n) {
                  R(n, o, "SELECT * FROM " + o.storeName, [], function (n, r) {
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
                  R(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [t], function (t, n) {
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
                  R(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [t], function () {
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
                  R(e, r, "DELETE FROM " + r.storeName, [], function () {
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
                  R(e, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], function (e, n) {
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
                  R(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [t + 1], function (t, n) {
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
                  R(e, r, "SELECT key FROM " + r.storeName, [], function (e, n) {
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
            e = l.apply(this, arguments);
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
                e(B(r));
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
        function F(t, e) {
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
        var V = {
          _driver: "localStorageWrapper",
          _initStorage: function (t) {
            var e = {};
            if (t) {
              for (var n in t) {
                e[n] = t[n];
              }
            }
            e.keyPrefix = F(t, this._defaultConfig);
            if (q()) {
              this._dbInfo = e;
              e.serializer = P;
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
            e = l.apply(this, arguments);
            if (!(t = typeof t != "function" && t || {}).name) {
              var n = this.config();
              t.name = t.name || n.name;
              t.storeName = t.storeName || n.storeName;
            }
            var r;
            var o = this;
            a(r = t.name ? new s(function (e) {
              if (t.storeName) {
                e(F(t, o._defaultConfig));
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
        function W(t, e) {
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
        var $ = {};
        var G = {};
        var H = {
          INDEXEDDB: O,
          WEBSQL: U,
          LOCALSTORAGE: V
        };
        var Y = [H.INDEXEDDB._driver, H.WEBSQL._driver, H.LOCALSTORAGE._driver];
        var K = ["dropInstance"];
        var X = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(K);
        var J = {
          description: "",
          driver: Y.slice(),
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
                if (!$[o]) {
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
                  var l = i[c];
                  if ((!W(K, l) || t[l]) && typeof t[l] != "function") {
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
                  for (var n = 0, r = K.length; n < r; n++) {
                    var o = K[n];
                    t[o] ||= e(o);
                  }
                })();
                function h(n) {
                  if ($[r]) {
                    console.info("Redefining LocalForage driver: " + r);
                  }
                  $[r] = t;
                  G[r] = n;
                  e();
                }
                if ("_support" in t) {
                  if (t._support && typeof t._support == "function") {
                    t._support().then(h, n);
                  } else {
                    h(!!t._support);
                  }
                } else {
                  h(true);
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
            var r = $[t] ? s.resolve($[t]) : s.reject(new Error("Driver not found."));
            c(r, e, n);
            return r;
          };
          t.prototype.getSerializer = function (t) {
            var e = s.resolve(P);
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
              Q(this, X[t]);
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
  var o = n.n(r);
  n(7);
  n(19);
  n(64);
  n(257);
  var i = n(0);
  var s = n(6);
  var a = n(85);
  var c = n(379);
  var u = n(214);
  const l = t => {
    if (t) {
      if (i.s) {
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
  const h = {
    randomId: u.c,
    group: (t, e) => {
      const n = [];
      const r = Math.ceil(t.length / e);
      for (let o = 0; o < r; o++) {
        if (o === r - 1) {
          n.push(t.slice(o * e, t.length));
        } else {
          n.push(t.slice(o * e, (o + 1) * e));
        }
      }
      return n;
    },
    openUrl: (t, e = true, n) => {
      if (!n || n.button !== 1 && !h.ctrlKeyStatus(n)) {
        if (e) {
          if (i.s) {
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
      } else if (i.s) {
        window.open(t, "_blank");
      } else {
        window.chrome.tabs.create({
          url: t,
          active: false
        });
      }
    },
    openChromeApp: async (t, e = true, r) => {
      if (!(await a.a.has(["management"]))) {
        try {
          await a.a.request(["management"]);
        } catch (t) {
          const {
            message: e
          } = await Promise.all([n.e(0), n.e(1), n.e(2), n.e(6)]).then(n.bind(null, 106));
          e.error(i18n("no_permission_to_open_app", i.C.vendor));
          return;
        }
      }
      chrome.management.get(t, async ({
        type: o,
        launchType: s,
        enabled: a,
        appLaunchUrl: c
      } = {}) => {
        if (chrome.runtime.lastError) {
          const {
            message: t
          } = await Promise.all([n.e(0), n.e(1), n.e(2), n.e(6)]).then(n.bind(null, 106));
          t.error(i18n("target_chrome_app_not_installed", i.C.vendor));
        } else {
          const i = () => {
            if (!r || r.button !== 1 && !h.ctrlKeyStatus(r)) {
              if (e || o !== "hosted_app" || s !== "OPEN_AS_REGULAR_TAB") {
                chrome.management.launchApp(t);
              } else {
                l(c);
              }
            } else {
              chrome.management.launchApp(t);
            }
          };
          if (a) {
            i();
          } else {
            const {
              IConfirm: e
            } = await Promise.all([n.e(0), n.e(37)]).then(n.bind(null, 468));
            e.create().toShow({
              text: i18n("app_disabled_enable_first"),
              onConfirm: () => {
                window.chrome.management.setEnabled(t, true, () => {
                  i();
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
      if (!i.s) {
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
      const o = document.createElement("a");
      let s = t;
      if (!t.startsWith("blob:")) {
        s = t.includes("?") ? `${t}&attname=${r}` : `${t}?attname=${r}`;
      }
      if (i.r) {
        window.open(s, "_blank");
      } else {
        if (i.n) {
          o.setAttribute("target", "_blank");
        }
        o.setAttribute("download", r);
        o.setAttribute("href", s);
        document.body.appendChild(o);
        o.click();
        document.body.removeChild(o);
      }
    },
    fmtTime: (t, e) => new Date(t).toLocaleString(i.C.lang, e || {
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
    compress: (t, e = 10, n) => new o.a(r => {
      const o = new Image();
      const i = document.createElement("canvas");
      const s = i.getContext("2d");
      o.onload = () => {
        n = n || o.height * e / o.width;
        i.width = e;
        i.height = n;
        s.fillRect(0, 0, e, n);
        s.drawImage(o, 0, 0, e, n);
        i.toBlob(r, "image/jpeg");
      };
      o.src = t;
    }),
    mergeArray: function (t = [], e = [], n = "id", r = "updatetime") {
      if (!t || t.length === 0) {
        return {
          result: e || [],
          isLocalEffective: false
        };
      }
      const o = e.filter(t => !!t);
      const i = Object.create(null);
      e.forEach((t, e) => {
        if (t[n]) {
          const r = t[n];
          i[r] = e;
        }
      });
      let s = false;
      t.filter(t => t[r] !== 0).forEach(t => {
        const e = t[n];
        const a = i[e];
        if (a !== undefined) {
          if ((o[a][r] || 0) < (t[r] || 0)) {
            o[a] = t;
            s = true;
          }
        } else {
          s = true;
          o.push(t);
        }
      });
      return {
        result: o.filter(t => !!t),
        isLocalEffective: s
      };
    },
    throttle: function (t, e) {
      let n;
      return function (...r) {
        const o = this;
        n ||= setTimeout(() => {
          t.apply(o, r);
          n = null;
        }, e);
      };
    },
    debounce: function (t, e) {
      let n = null;
      return function () {
        const r = this;
        const o = arguments;
        if (n) {
          clearTimeout(n);
          n = null;
        }
        n = setTimeout(() => {
          t.apply(r, o);
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
      const o = atob(r);
      const i = new ArrayBuffer(o.length);
      const s = new Uint8Array(i);
      for (let t = 0; t < o.length; t++) {
        s[t] = o.charCodeAt(t);
      }
      return new Blob([i], {
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
      let o;
      let i;
      let s;
      let a;
      if (Array.isArray(t)) {
        [n, r, o] = t;
      } else {
        n = parseInt(t.substring(0, 2), 16);
        r = parseInt(t.substring(2, 4), 16);
        o = parseInt(t.substring(4, 6), 16);
      }
      if (Array.isArray(e)) {
        [i, s, a] = e;
      } else {
        i = parseInt(e.substring(0, 2), 16);
        s = parseInt(e.substring(2, 4), 16);
        a = parseInt(e.substring(4, 6), 16);
      }
      let c = 255 - Math.abs(n - i);
      let u = 255 - Math.abs(r - s);
      let l = 255 - Math.abs(o - a);
      c /= 255;
      u /= 255;
      l /= 255;
      return (c + u + l) / 3;
    },
    async getSimilarColor(t) {
      const e = window.URL.createObjectURL(t);
      const n = await new o.a(t => {
        const n = new Image();
        n.onload = () => t(n);
        n.src = e;
      });
      const r = new ColorThief().getColor(n);
      const i = window.__INFINITY__.color_list;
      const s = i.map(t => h.hexColorDelta(r, t));
      const a = Math.max.apply(null, s);
      const c = i[s.indexOf(a)];
      window.URL.revokeObjectURL(e);
      return c;
    },
    getPrivacyUrl() {
      const t = s.IS_ZH ? "zh" : "en";
      if (i.n) {
        return `/privacy/${t}/privacy.html`;
      } else {
        return `${i.u}/${t}/privacy.html`;
      }
    },
    sleep: (t = 0) => new o.a(e => {
      setTimeout(() => {
        e(null);
      }, t);
    }),
    checkImage() {
      let t;
      return [e => new o.a((n, r) => {
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
      if (i.n || n) {
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
      return new o.a(n => {
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
          const o = t.target.files[0];
          const i = new FileReader();
          i[e](o);
          i.onload = function (t) {
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
      if (i.r) {
        r = "custom/infinity";
      }
      const o = new Blob([n], {
        type: r
      });
      const s = window.URL.createObjectURL(o);
      if (i.r) {
        window.open(s, "_blank");
      } else {
        const t = new Date();
        const n = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
        const r = document.createElement("a");
        r.href = s;
        r.download = e + n + ".infinity";
        document.body.appendChild(r);
        r.click();
        document.body.removeChild(r);
      }
      URL.revokeObjectURL(s);
    },
    stopShowMenu(t) {
      if (!h.isInputType(t.target)) {
        t.stopPropagation();
        t.preventDefault();
        document.querySelector("i-menu").toHide();
        return false;
      }
    },
    ctrlKeyStatus: t => i.o ? t.metaKey : t.ctrlKey,
    getFavIconSrc: t => f(t) ? t : function (t) {
      try {
        return new c.a(t).host;
      } catch (e) {
        return t;
      }
    }(function (t) {
      if (function (t) {
        return /^(.+?):\/\//.test(t);
      }(t) || f(t)) {
        return t;
      }
      return "http://" + t;
    }(t)).replace("^www.", ""),
    getLastReqValue(t) {
      const e = [];
      const n = this;
      return async function (r, o, i) {
        const s = n.randomId("req");
        e.push(s);
        const a = await t(r, o, i);
        const c = e.findIndex(t => t === s);
        const u = e.length;
        e.splice(0, c + 1);
        if (c === u - 1) {
          return a;
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
  const p = /^\w+:\w/;
  function f(t) {
    return p.test(t);
  }
  e.a = h;
  const d = document.createElement("script");
  d.src = "/vendor/color-thief.min.js";
  document.head.appendChild(d);
  d.onload = () => {
    d.remove();
  };
},,,,, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return true;
    }
  };
}, function (t, e, n) {
  var r = n(61);
  var o = n(97);
  var i = n(95);
  t.exports = r ? function (t, e, n) {
    return o.f(t, e, i(1, n));
  } : function (t, e, n) {
    t[e] = n;
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(226);
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
  var r = n(45);
  t.exports = function (t) {
    if (!r(t)) {
      throw TypeError(String(t) + " is not an object");
    }
    return t;
  };
},, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return p;
  });
  n.d(e, "b", function () {
    return m;
  });
  var r;
  var o = n(5);
  var i = n.n(o);
  n(7);
  n(258);
  var s = {
    randomUUID: typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  var a = new Uint8Array(16);
  function c() {
    if (!r && !(r = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return r(a);
  }
  var u = [];
  for (var l = 0; l < 256; ++l) {
    u.push((l + 256).toString(16).slice(1));
  }
  function h(t, e = 0) {
    return (u[t[e + 0]] + u[t[e + 1]] + u[t[e + 2]] + u[t[e + 3]] + "-" + u[t[e + 4]] + u[t[e + 5]] + "-" + u[t[e + 6]] + u[t[e + 7]] + "-" + u[t[e + 8]] + u[t[e + 9]] + "-" + u[t[e + 10]] + u[t[e + 11]] + u[t[e + 12]] + u[t[e + 13]] + u[t[e + 14]] + u[t[e + 15]]).toLowerCase();
  }
  var p;
  function f(t, e, n) {
    if (s.randomUUID && !e && !t) {
      return s.randomUUID();
    }
    var r = (t = t || {}).random || (t.rng || c)();
    r[6] = r[6] & 15 | 64;
    r[8] = r[8] & 63 | 128;
    if (e) {
      n = n || 0;
      for (var o = 0; o < 16; ++o) {
        e[n + o] = r[o];
      }
      return e;
    }
    return h(r);
  }
  (function (t) {
    t.BG_PLAY_AUDIO = "BG_PLAY_AUDIO";
    t.BG_GET_LOCAL_STORAGE = "BG_GET_LOCAL_STORAGE";
    t.BG_SET_LOCAL_STORAGE = "BG_SET_LOCAL_STORAGE";
    t.BG_REMOVE_LOCAL_STORAGE = "BG_REMOVE_LOCAL_STORAGE";
  })(p ||= {});
  var d = n(0);
  function g(t, e) {
    if (Array.isArray(t)) {
      return t.includes(e);
    } else {
      return typeof t == "string" && t === e;
    }
  }
  function y(t) {
    const e = {};
    if (t instanceof Error) {
      e.message = t.message;
      e.stack = t.stack;
    } else {
      e.message = t.message || t || "error";
    }
    return e;
  }
  const m = new class {
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
      if (g(n.from, t.from) && g(t.to, n.to)) {
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
                    responseData: y(t),
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
      const r = t.action + ":" + f();
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
      return new i.a((e, n) => {
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
      return new i.a((e, n) => {
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
    var l;
    var h;
    var p;
    var f;
    var d;
    var g;
    var y;
    var m;
    var b;
    var w = {}.hasOwnProperty;
    b = n(57);
    m = b.isObject;
    y = b.isFunction;
    g = b.isEmpty;
    d = b.getValue;
    u = null;
    o = null;
    i = null;
    s = null;
    a = null;
    p = null;
    f = null;
    h = null;
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
          o = n(171);
          i = n(172);
          s = n(173);
          a = n(174);
          p = n(179);
          f = n(180);
          h = n(181);
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
        var l;
        var h;
        var p;
        var f;
        c = null;
        if (e === null && n == null) {
          e = (h = [{}, null])[0];
          n = h[1];
        }
        if (e == null) {
          e = {};
        }
        e = d(e);
        if (!m(e)) {
          n = (p = [e, n])[0];
          e = p[1];
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
        } else if (y(t)) {
          c = this.element(t.apply());
        } else if (m(t)) {
          for (a in t) {
            if (w.call(t, a)) {
              f = t[a];
              if (y(f)) {
                f = f.apply();
              }
              if (!this.options.ignoreDecorators && this.stringify.convertAttKey && a.indexOf(this.stringify.convertAttKey) === 0) {
                c = this.attribute(a.substr(this.stringify.convertAttKey.length), f);
              } else if (!this.options.separateArrayItems && Array.isArray(f) && g(f)) {
                c = this.dummy();
              } else if (m(f) && g(f)) {
                c = this.element(a);
              } else if (this.options.keepNullNodes || f != null) {
                if (!this.options.separateArrayItems && Array.isArray(f)) {
                  s = 0;
                  l = f.length;
                  for (; s < l; s++) {
                    o = f[s];
                    (r = {})[a] = o;
                    c = this.element(r);
                  }
                } else if (m(f)) {
                  if (!this.options.ignoreDecorators && this.stringify.convertTextKey && a.indexOf(this.stringify.convertTextKey) === 0) {
                    c = this.element(f);
                  } else {
                    (c = this.element(a)).element(f);
                  }
                } else {
                  c = this.element(a, f);
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
        if (!m(e)) {
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
        if (m(t)) {
          this.element(t);
        }
        e = new f(this, t);
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
        e = new p(this, t);
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
        } else if (m(t)) {
          for (n in t) {
            if (w.call(t, n)) {
              r = t[n];
              this.instruction(n, r);
            }
          }
        } else {
          if (y(e)) {
            e = e.apply();
          }
          o = new h(this, t, e);
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
        var l;
        var h;
        var p;
        n = this.document();
        o = new a(n, t, e);
        i = s = 0;
        u = (h = n.children).length;
        for (; s < u; i = ++s) {
          if (h[i].type === r.DocType) {
            n.children[i] = o;
            return o;
          }
        }
        i = c = 0;
        l = (p = n.children).length;
        for (; c < l; i = ++c) {
          if (p[i].isRoot) {
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

  n.d(e, "d", function () {
    return r;
  });
  n.d(e, "e", function () {
    return o;
  });
  n.d(e, "f", function () {
    return i;
  });
  n.d(e, "g", function () {
    return s;
  });
  n.d(e, "b", function () {
    return a;
  });
  n.d(e, "c", function () {
    return c;
  });
  n.d(e, "a", function () {
    return u;
  });
  n(19);
  const r = "store-wallpaper-cache";
  const o = "infinity-image-base64";
  const i = navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/);
  const s = "format/webp/";
  const a = "https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/default.png";
  const c = () => `${a}?imageView2/2/w/${screen.width}/${i ? "" : s}interlace/1`;
  const u = true;
}, function (t, e, n) {
  var r = n(190);
  var o = {}.hasOwnProperty;
  t.exports = Object.hasOwn || function (t, e) {
    return o.call(r(t), e);
  };
},,,,,,, function (t, e, n) {
  "use strict";

  var r = n(14);
  var o = n(188).f;
  var i = n(192);
  var s = n(104);
  var a = n(139);
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
    var h;
    var p;
    var f;
    var d;
    var g;
    var y;
    var m;
    var b = t.target;
    var w = t.global;
    var v = t.stat;
    var _ = t.proto;
    var T = w ? r : v ? r[b] : (r[b] || {}).prototype;
    var E = w ? s : s[b] ||= {};
    var x = E.prototype;
    for (p in e) {
      n = !i(w ? p : b + (v ? "." : "#") + p, t.forced) && T && u(T, p);
      d = E[p];
      if (n) {
        g = t.noTargetGet ? (m = o(T, p)) && m.value : T[p];
      }
      f = n && g ? g : e[p];
      if (!n || typeof d != typeof f) {
        y = t.bind && n ? a(f, r) : t.wrap && n ? l(f) : _ && typeof f == "function" ? a(Function.call, f) : f;
        if (t.sham || f && f.sham || d && d.sham) {
          c(y, "sham", true);
        }
        E[p] = y;
        if (_) {
          if (!u(s, h = b + "Prototype")) {
            c(s, h, {});
          }
          s[h][p] = f;
          if (t.real && x && !x[p]) {
            c(x, p, f);
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
},,,,, function (t, e, n) {
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
  n(19);
  const r = n(0).s ? "serviceworker" : "background";
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
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return s;
  });
  n.d(e, "b", function () {
    return a;
  });
  n.d(e, "c", function () {
    return c;
  });
  var r = n(36);
  const o = /^http[s]?:\/\//;
  function i(t) {
    return o.test(t);
  }
  const s = (t, e) => {
    const n = "https://infinityicon.infinitynewtab.com/assets/images/" + t;
    if (e === true) {
      return a(n);
    } else if (e === false) {
      return n;
    } else if (/\.(png|jpg|jpeg)$/.test(t)) {
      return a(n);
    } else {
      return n;
    }
  };
  function a(t) {
    if (i(t)) {
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
    if (i(t)) {
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
},,,,, function (t, e) {
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
},,,, function (t, e, n) {
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
  var o = n(14);
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
}, function (t, e, n) {
  "use strict";

  var r = n(262);
  var o = n(9);
  var i = n(10);
  var s = n(48);
  var a = n(47);
  var c = n(46);
  var u = n(263);
  var l = n(265);
  var h = n(266);
  var p = n(8)("replace");
  var f = Math.max;
  var d = Math.min;
  var g = "a".replace(/./, "$0") === "$0";
  var y = !!/./[p] && /./[p]("a", "$0") === "";
  r("replace", function (t, e, n) {
    var r = y ? "$" : "$0";
    return [function (t, n) {
      var r = c(this);
      var o = t == null ? undefined : t[p];
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
      var p = i(this);
      var g = String(t);
      var y = typeof o == "function";
      if (!y) {
        o = String(o);
      }
      var m = p.global;
      if (m) {
        var b = p.unicode;
        p.lastIndex = 0;
      }
      var w = [];
      for (;;) {
        var v = h(p, g);
        if (v === null) {
          break;
        }
        w.push(v);
        if (!m) {
          break;
        }
        if (String(v[0]) === "") {
          p.lastIndex = u(g, s(p.lastIndex), b);
        }
      }
      var _;
      var T = "";
      var E = 0;
      for (var x = 0; x < w.length; x++) {
        v = w[x];
        var S = String(v[0]);
        var O = f(d(a(v.index), g.length), 0);
        var I = [];
        for (var A = 1; A < v.length; A++) {
          I.push((_ = v[A]) === undefined ? _ : String(_));
        }
        var k = v.groups;
        if (y) {
          var C = [S].concat(I, O, g);
          if (k !== undefined) {
            C.push(k);
          }
          var D = String(o.apply(undefined, C));
        } else {
          D = l(S, g, O, I, k, o);
        }
        if (O >= E) {
          T += g.slice(E, O) + D;
          E = O + S.length;
        }
      }
      return T + g.slice(E);
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
  }) || !g || y);
}, function (t, e) {
  t.exports = true;
},,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var r = n(157);
  var o = Object.keys || function (t) {
    var e = [];
    for (var n in t) {
      e.push(n);
    }
    return e;
  };
  t.exports = h;
  var i = Object.create(n(108));
  i.inherits = n(91);
  var s = n(241);
  var a = n(185);
  i.inherits(h, s);
  for (var c = o(a.prototype), u = 0; u < c.length; u++) {
    var l = c[u];
    h.prototype[l] ||= a.prototype[l];
  }
  function h(t) {
    if (!(this instanceof h)) {
      return new h(t);
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
    this.once("end", p);
  }
  function p() {
    if (!this.allowHalfOpen && !this._writableState.ended) {
      r.nextTick(f, this);
    }
  }
  function f(t) {
    t.end();
  }
  Object.defineProperty(h.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function () {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(h.prototype, "destroyed", {
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
  h.prototype._destroy = function (t, e) {
    this.push(null);
    this.end();
    r.nextTick(e, t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(52);
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
  var r;
  var o;
  var i;
  var s;
  var a;
  r = n(401);
  o = n(317).utf8;
  i = n(402);
  s = n(317).bin;
  (a = function (t, e) {
    if (t.constructor == String) {
      t = e && e.encoding === "binary" ? s.stringToBytes(t) : o.stringToBytes(t);
    } else if (i(t)) {
      t = Array.prototype.slice.call(t, 0);
    } else if (!Array.isArray(t) && t.constructor !== Uint8Array) {
      t = t.toString();
    }
    for (var n = r.bytesToWords(t), c = t.length * 8, u = 1732584193, l = -271733879, h = -1732584194, p = 271733878, f = 0; f < n.length; f++) {
      n[f] = (n[f] << 8 | n[f] >>> 24) & 16711935 | (n[f] << 24 | n[f] >>> 8) & -16711936;
    }
    n[c >>> 5] |= 128 << c % 32;
    n[14 + (c + 64 >>> 9 << 4)] = c;
    var d = a._ff;
    var g = a._gg;
    var y = a._hh;
    var m = a._ii;
    for (f = 0; f < n.length; f += 16) {
      var b = u;
      var w = l;
      var v = h;
      var _ = p;
      u = d(u, l, h, p, n[f + 0], 7, -680876936);
      p = d(p, u, l, h, n[f + 1], 12, -389564586);
      h = d(h, p, u, l, n[f + 2], 17, 606105819);
      l = d(l, h, p, u, n[f + 3], 22, -1044525330);
      u = d(u, l, h, p, n[f + 4], 7, -176418897);
      p = d(p, u, l, h, n[f + 5], 12, 1200080426);
      h = d(h, p, u, l, n[f + 6], 17, -1473231341);
      l = d(l, h, p, u, n[f + 7], 22, -45705983);
      u = d(u, l, h, p, n[f + 8], 7, 1770035416);
      p = d(p, u, l, h, n[f + 9], 12, -1958414417);
      h = d(h, p, u, l, n[f + 10], 17, -42063);
      l = d(l, h, p, u, n[f + 11], 22, -1990404162);
      u = d(u, l, h, p, n[f + 12], 7, 1804603682);
      p = d(p, u, l, h, n[f + 13], 12, -40341101);
      h = d(h, p, u, l, n[f + 14], 17, -1502002290);
      u = g(u, l = d(l, h, p, u, n[f + 15], 22, 1236535329), h, p, n[f + 1], 5, -165796510);
      p = g(p, u, l, h, n[f + 6], 9, -1069501632);
      h = g(h, p, u, l, n[f + 11], 14, 643717713);
      l = g(l, h, p, u, n[f + 0], 20, -373897302);
      u = g(u, l, h, p, n[f + 5], 5, -701558691);
      p = g(p, u, l, h, n[f + 10], 9, 38016083);
      h = g(h, p, u, l, n[f + 15], 14, -660478335);
      l = g(l, h, p, u, n[f + 4], 20, -405537848);
      u = g(u, l, h, p, n[f + 9], 5, 568446438);
      p = g(p, u, l, h, n[f + 14], 9, -1019803690);
      h = g(h, p, u, l, n[f + 3], 14, -187363961);
      l = g(l, h, p, u, n[f + 8], 20, 1163531501);
      u = g(u, l, h, p, n[f + 13], 5, -1444681467);
      p = g(p, u, l, h, n[f + 2], 9, -51403784);
      h = g(h, p, u, l, n[f + 7], 14, 1735328473);
      u = y(u, l = g(l, h, p, u, n[f + 12], 20, -1926607734), h, p, n[f + 5], 4, -378558);
      p = y(p, u, l, h, n[f + 8], 11, -2022574463);
      h = y(h, p, u, l, n[f + 11], 16, 1839030562);
      l = y(l, h, p, u, n[f + 14], 23, -35309556);
      u = y(u, l, h, p, n[f + 1], 4, -1530992060);
      p = y(p, u, l, h, n[f + 4], 11, 1272893353);
      h = y(h, p, u, l, n[f + 7], 16, -155497632);
      l = y(l, h, p, u, n[f + 10], 23, -1094730640);
      u = y(u, l, h, p, n[f + 13], 4, 681279174);
      p = y(p, u, l, h, n[f + 0], 11, -358537222);
      h = y(h, p, u, l, n[f + 3], 16, -722521979);
      l = y(l, h, p, u, n[f + 6], 23, 76029189);
      u = y(u, l, h, p, n[f + 9], 4, -640364487);
      p = y(p, u, l, h, n[f + 12], 11, -421815835);
      h = y(h, p, u, l, n[f + 15], 16, 530742520);
      u = m(u, l = y(l, h, p, u, n[f + 2], 23, -995338651), h, p, n[f + 0], 6, -198630844);
      p = m(p, u, l, h, n[f + 7], 10, 1126891415);
      h = m(h, p, u, l, n[f + 14], 15, -1416354905);
      l = m(l, h, p, u, n[f + 5], 21, -57434055);
      u = m(u, l, h, p, n[f + 12], 6, 1700485571);
      p = m(p, u, l, h, n[f + 3], 10, -1894986606);
      h = m(h, p, u, l, n[f + 10], 15, -1051523);
      l = m(l, h, p, u, n[f + 1], 21, -2054922799);
      u = m(u, l, h, p, n[f + 8], 6, 1873313359);
      p = m(p, u, l, h, n[f + 15], 10, -30611744);
      h = m(h, p, u, l, n[f + 6], 15, -1560198380);
      l = m(l, h, p, u, n[f + 13], 21, 1309151649);
      u = m(u, l, h, p, n[f + 4], 6, -145523070);
      p = m(p, u, l, h, n[f + 11], 10, -1120210379);
      h = m(h, p, u, l, n[f + 2], 15, 718787259);
      l = m(l, h, p, u, n[f + 9], 21, -343485551);
      u = u + b >>> 0;
      l = l + w >>> 0;
      h = h + v >>> 0;
      p = p + _ >>> 0;
    }
    return r.endian([u, l, h, p]);
  })._ff = function (t, e, n, r, o, i, s) {
    var a = t + (e & n | ~e & r) + (o >>> 0) + s;
    return (a << i | a >>> 32 - i) + e;
  };
  a._gg = function (t, e, n, r, o, i, s) {
    var a = t + (e & r | n & ~r) + (o >>> 0) + s;
    return (a << i | a >>> 32 - i) + e;
  };
  a._hh = function (t, e, n, r, o, i, s) {
    var a = t + (e ^ n ^ r) + (o >>> 0) + s;
    return (a << i | a >>> 32 - i) + e;
  };
  a._ii = function (t, e, n, r, o, i, s) {
    var a = t + (n ^ (e | ~r)) + (o >>> 0) + s;
    return (a << i | a >>> 32 - i) + e;
  };
  a._blocksize = 16;
  a._digestsize = 16;
  t.exports = function (t, e) {
    if (t == null) {
      throw new Error("Illegal argument " + t);
    }
    var n = r.wordsToBytes(a(t, e));
    if (e && e.asBytes) {
      return n;
    } else if (e && e.asString) {
      return s.bytesToString(n);
    } else {
      return r.bytesToHex(n);
    }
  };
},, function (t, e) {
  var n = {}.toString;
  t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return a;
  });
  var r = n(5);
  var o = n.n(r);
  var i = n(0);
  const s = {};
  const a = new class {
    constructor() {
      this.request = (t, e) => {
        if ((i.n || i.h) && t.includes("favicon") && (t = Array.from(new Set(t))).length > 1) {
          t.splice(t.findIndex(t => t === "favicon"), 1);
        }
        return new o.a((n, r) => {
          if (i.s) {
            r();
            return;
          }
          let o = "";
          if (i.n) {
            o = t.join(",") + (e == null ? undefined : e.join(","));
            if (s[o]) {
              r(new Error("repeat"));
              return;
            }
            s[o] = true;
          }
          chrome.permissions.request({
            permissions: t,
            origins: e
          }, t => {
            if (i.n && s[o]) {
              delete s[o];
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
        if ((i.n || i.h) && t.includes("favicon") && (t = Array.from(new Set(t))).length > 1) {
          t.splice(t.findIndex(t => t === "favicon"), 1);
        }
        return new o.a(n => {
          if (i.s) {
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
},,,,,, function (t, e) {
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
},,, function (t, e) {
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
  var l = false;
  var h = -1;
  function p() {
    if (l && c) {
      l = false;
      if (c.length) {
        u = c.concat(u);
      } else {
        h = -1;
      }
      if (u.length) {
        f();
      }
    }
  }
  function f() {
    if (!l) {
      var t = a(p);
      l = true;
      for (var e = u.length; e;) {
        c = u;
        u = [];
        while (++h < e) {
          if (c) {
            c[h].run();
          }
        }
        h = -1;
        e = u.length;
      }
      c = null;
      l = false;
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
  function g() {}
  o.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
    }
    u.push(new d(t, e));
    if (u.length === 1 && !l) {
      a(f);
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
  o.on = g;
  o.addListener = g;
  o.once = g;
  o.off = g;
  o.removeListener = g;
  o.removeAllListeners = g;
  o.emit = g;
  o.prependListener = g;
  o.prependOnceListener = g;
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
  var o = n(103);
  t.exports = function (t) {
    return r(o(t));
  };
}, function (t, e, n) {
  var r = n(61);
  var o = n(191);
  var i = n(32);
  var s = n(189);
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
  var r = n(32);
  var o = n(279);
  var i = n(158);
  var s = n(139);
  var a = n(281);
  var c = n(282);
  function u(t, e) {
    this.stopped = t;
    this.result = e;
  }
  t.exports = function (t, e, n) {
    var l;
    var h;
    var p;
    var f;
    var d;
    var g;
    var y;
    var m = n && n.that;
    var b = !!n && !!n.AS_ENTRIES;
    var w = !!n && !!n.IS_ITERATOR;
    var v = !!n && !!n.INTERRUPTED;
    var _ = s(e, m, 1 + b + v);
    function T(t) {
      if (l) {
        c(l);
      }
      return new u(true, t);
    }
    function E(t) {
      if (b) {
        r(t);
        if (v) {
          return _(t[0], t[1], T);
        } else {
          return _(t[0], t[1]);
        }
      } else if (v) {
        return _(t, T);
      } else {
        return _(t);
      }
    }
    if (w) {
      l = t;
    } else {
      if (typeof (h = a(t)) != "function") {
        throw TypeError("Target is not iterable");
      }
      if (o(h)) {
        p = 0;
        f = i(t.length);
        for (; f > p; p++) {
          if ((d = E(t[p])) && d instanceof u) {
            return d;
          }
        }
        return new u(false);
      }
      l = h.call(t);
    }
    for (g = l.next; !(y = g.call(l)).done;) {
      try {
        d = E(y.value);
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
},,, function (t, e) {
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
  var o;
  var i;
  var s = n(293);
  var a = n(14);
  var c = n(45);
  var u = n(30);
  var l = n(37);
  var h = n(142);
  var p = n(141);
  var f = n(145);
  var d = a.WeakMap;
  if (s || h.state) {
    var g = h.state ||= new d();
    var y = g.get;
    var m = g.has;
    var b = g.set;
    r = function (t, e) {
      if (m.call(g, t)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      b.call(g, t, e);
      return e;
    };
    o = function (t) {
      return y.call(g, t) || {};
    };
    i = function (t) {
      return m.call(g, t);
    };
  } else {
    var w = p("state");
    f[w] = true;
    r = function (t, e) {
      if (l(t, w)) {
        throw new TypeError("Object already initialized");
      }
      e.facade = t;
      u(t, w, e);
      return e;
    };
    o = function (t) {
      if (l(t, w)) {
        return t[w];
      } else {
        return {};
      }
    };
    i = function (t) {
      return l(t, w);
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
  "use strict";

  n.r(e);
  n.d(e, "iMessage", function () {
    return h;
  });
  n.d(e, "message", function () {
    return p;
  });
  var r = n(395);
  var o = n(1);
  var i = n(382);
  var s = n(433);
  var a = n.n(s);
  var c = n(434);
  var u = n.n(c);
  function l(t, e, n, r) {
    var o;
    var i = arguments.length;
    var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(t, e, n, r);
    } else {
      for (var a = t.length - 1; a >= 0; a--) {
        if (o = t[a]) {
          s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(e, n, s);
    }
    return s;
  }
  let h = class extends o.a {
    constructor() {
      super(...arguments);
      this.content = "";
      this.type = "error";
    }
    render() {
      const t = {
        "infinity-message": true,
        "position-top": this.type === "top"
      };
      return o.e`
      <div class=${Object(i.a)(t)}>
        ${this.renderImg()}
        <span>${this.content}</span>
      </div>
    `;
    }
    renderImg() {
      if (this.type === "error") {
        return o.e`<img .src=${a.a} />`;
      } else if (this.type === "warn") {
        return o.e`<img .src=${u.a} />`;
      } else {
        return undefined;
      }
    }
  };
  h.styles = o.b`
    :host {
      box-sizing: border-box;
      display: flex;
      position: fixed;
      min-width: 330px;
      padding: 0 20px;
      height: 60px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 6px 48px 0px rgba(0, 0, 0, 0.24);
      border-radius: 6px;
      z-index: 99999999999;
    }
    :host([type='top']) {
      width: 100%;
      margin: 0;
      left: 0;
      top: var(--top-bar-height);
      height: auto;
      padding: 5px;
      border-radius: 0;
      background: rgba(95, 92, 92, 0.6);
      color: #fff;
      transform: none;
      transition: all 300ms;
      opacity: 0;
      pointer-events: none;
    }
    :host(.anim[type='top']) {
      opacity: 1;
    }

    .infinity-message {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  `;
  l([Object(o.g)({
    type: String
  })], h.prototype, "content", undefined);
  l([Object(o.g)({
    type: String
  })], h.prototype, "type", undefined);
  h = l([Object(o.c)("i-message")], h);
  const p = {
    newInstance: function (t, e = 2, n, r) {
      let o;
      if (document.querySelector("i-message")) {
        clearInterval(o);
        return;
      }
      const i = document.createElement("i-message");
      i.setAttribute("content", t);
      i.setAttribute("type", n);
      document.body.appendChild(i);
      if (e !== 0) {
        o = setTimeout(() => {
          document.body.removeChild(i);
          if (r) {
            r();
          }
        }, e * 1000);
      }
      return i;
    },
    error: function (t, e, n) {
      r.default.error(t, e);
      if (n) {
        setTimeout(n, e);
      }
    },
    success: function (t, e, n) {
      r.default.success(t, e);
      if (n) {
        setTimeout(n, e);
      }
    },
    top: function (t, e, n) {
      const r = this.newInstance(t, e, "top", n);
      setTimeout(() => r == null ? undefined : r.classList.add("anim"));
    },
    warn: function (t, e, n) {
      this.newInstance(t, e, "warn", n);
    }
  };
}, function (t, e, n) {
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
    return o;
  });
  n.d(e, "a", function () {
    return i;
  });
  var r = n(162);
  const o = {
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
  const i = function (t, e) {
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
},,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var r;
  var o;
  var i = n(216);
  var s = n(217);
  var a = n(54);
  var c = n(259);
  var u = n(49).get;
  var l = n(218);
  var h = n(219);
  var p = RegExp.prototype.exec;
  var f = a("native-string-replace", String.prototype.replace);
  var d = p;
  r = /a/;
  o = /b*/g;
  p.call(r, "a");
  p.call(o, "a");
  var g = r.lastIndex !== 0 || o.lastIndex !== 0;
  var y = s.UNSUPPORTED_Y || s.BROKEN_CARET;
  var m = /()??/.exec("")[1] !== undefined;
  if (g || m || y || l || h) {
    d = function (t) {
      var e;
      var n;
      var r;
      var o;
      var s;
      var a;
      var l;
      var h = this;
      var b = u(h);
      var w = b.raw;
      if (w) {
        w.lastIndex = h.lastIndex;
        e = d.call(w, t);
        h.lastIndex = w.lastIndex;
        return e;
      }
      var v = b.groups;
      var _ = y && h.sticky;
      var T = i.call(h);
      var E = h.source;
      var x = 0;
      var S = t;
      if (_) {
        if ((T = T.replace("y", "")).indexOf("g") === -1) {
          T += "g";
        }
        S = String(t).slice(h.lastIndex);
        if (h.lastIndex > 0 && (!h.multiline || h.multiline && t[h.lastIndex - 1] !== "\n")) {
          E = "(?: " + E + ")";
          S = " " + S;
          x++;
        }
        n = new RegExp("^(?:" + E + ")", T);
      }
      if (m) {
        n = new RegExp("^" + E + "$(?!\\s)", T);
      }
      if (g) {
        r = h.lastIndex;
      }
      o = p.call(_ ? n : h, S);
      if (_) {
        if (o) {
          o.input = o.input.slice(x);
          o[0] = o[0].slice(x);
          o.index = h.lastIndex;
          h.lastIndex += o[0].length;
        } else {
          h.lastIndex = 0;
        }
      } else if (g && o) {
        h.lastIndex = h.global ? o.index + o[0].length : r;
      }
      if (m && o && o.length > 1) {
        f.call(o[0], n, function () {
          for (s = 1; s < arguments.length - 2; s++) {
            if (arguments[s] === undefined) {
              o[s] = undefined;
            }
          }
        });
      }
      if (o && v) {
        o.groups = a = c(null);
        s = 0;
        for (; s < v.length; s++) {
          a[(l = v[s])[0]] = o[l[1]];
        }
      }
      return o;
    };
  }
  t.exports = d;
}, function (t, e, n) {
  var r = n(14);
  var o = n(45);
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
        return function (n, r, o) {
          return t.call(e, n, r, o);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(37);
  var o = n(190);
  var i = n(141);
  var s = n(272);
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
  var r = n(193);
  var o = n(194);
  var i = r("keys");
  t.exports = function (t) {
    return i[t] ||= o(t);
  };
}, function (t, e, n) {
  var r = n(14);
  var o = n(271);
  var i = r["__core-js_shared__"] || o("__core-js_shared__", {});
  t.exports = i;
}, function (t, e, n) {
  var r = n(32);
  var o = n(273);
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
  var o = n(84);
  var i = n(17)("toStringTag");
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
  var r = {
    [n(17)("toStringTag")]: "z"
  };
  t.exports = String(r) === "[object z]";
}, function (t, e, n) {
  var r = n(148);
  var o = n(97).f;
  var i = n(30);
  var s = n(37);
  var a = n(286);
  var c = n(17)("toStringTag");
  t.exports = function (t, e, n, u) {
    if (t) {
      var l = n ? t : t.prototype;
      if (!s(l, c)) {
        o(l, c, {
          configurable: true,
          value: e
        });
      }
      if (u && !r) {
        i(l, "toString", a);
      }
    }
  };
}, function (t, e, n) {
  var r = n(84);
  var o = n(14);
  t.exports = r(o.process) == "process";
}, function (t, e, n) {
  var r = n(312);
  var o = typeof self == "object" && self && self.Object === Object && self;
  var i = r || o || Function("return this")();
  t.exports = i;
},, function (t, e, n) {
  "use strict";

  (function (t) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    var r = n(346);
    var o = n(347);
    var i = n(240);
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
        return h(this, t);
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
            t = p(t, e);
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
            var n = f(e.length) | 0;
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
                return p(t, e);
              }
            }
            if (e.type === "Buffer" && i(e.data)) {
              return p(t, e.data);
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
    function h(t, e) {
      l(e);
      t = a(t, e < 0 ? 0 : f(e) | 0);
      if (!c.TYPED_ARRAY_SUPPORT) {
        for (var n = 0; n < e; ++n) {
          t[n] = 0;
        }
      }
      return t;
    }
    function p(t, e) {
      var n = e.length < 0 ? 0 : f(e.length) | 0;
      t = a(t, n);
      for (var r = 0; r < n; r += 1) {
        t[r] = e[r] & 255;
      }
      return t;
    }
    function f(t) {
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
      for (;;) {
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;
          case "utf8":
          case "utf-8":
          case undefined:
            return F(t).length;
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
              return F(t).length;
            }
            e = ("" + e).toLowerCase();
            r = true;
        }
      }
    }
    function g(t, e, n) {
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
            return k(this, e, n);
          case "utf8":
          case "utf-8":
            return O(this, e, n);
          case "ascii":
            return I(this, e, n);
          case "latin1":
          case "binary":
            return A(this, e, n);
          case "base64":
            return S(this, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return C(this, e, n);
          default:
            if (r) {
              throw new TypeError("Unknown encoding: " + t);
            }
            t = (t + "").toLowerCase();
            r = true;
        }
      }
    }
    function y(t, e, n) {
      var r = t[e];
      t[e] = t[n];
      t[n] = r;
    }
    function m(t, e, n, r, o) {
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
          return b(t, e, n, r, o);
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
          return b(t, [e], n, r, o);
        }
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function b(t, e, n, r, o) {
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
        var l = -1;
        for (i = n; i < a; i++) {
          if (u(t, i) === u(e, l === -1 ? 0 : i - l)) {
            if (l === -1) {
              l = i;
            }
            if (i - l + 1 === c) {
              return l * s;
            }
          } else {
            if (l !== -1) {
              i -= i - l;
            }
            l = -1;
          }
        }
      } else {
        if (n + c > a) {
          n = a - c;
        }
        i = n;
        for (; i >= 0; i--) {
          var h = true;
          for (var p = 0; p < c; p++) {
            if (u(t, i + p) !== u(e, p)) {
              h = false;
              break;
            }
          }
          if (h) {
            return i;
          }
        }
      }
      return -1;
    }
    function w(t, e, n, r) {
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
    function v(t, e, n, r) {
      return V(F(e, t.length - n), t, n, r);
    }
    function _(t, e, n, r) {
      return V(function (t) {
        var e = [];
        for (var n = 0; n < t.length; ++n) {
          e.push(t.charCodeAt(n) & 255);
        }
        return e;
      }(e), t, n, r);
    }
    function T(t, e, n, r) {
      return _(t, e, n, r);
    }
    function E(t, e, n, r) {
      return V(q(e), t, n, r);
    }
    function x(t, e, n, r) {
      return V(function (t, e) {
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
    function S(t, e, n) {
      if (e === 0 && n === t.length) {
        return r.fromByteArray(t);
      } else {
        return r.fromByteArray(t.slice(e, n));
      }
    }
    function O(t, e, n) {
      n = Math.min(t.length, n);
      var r = [];
      for (var o = e; o < n;) {
        var i;
        var s;
        var a;
        var c;
        var u = t[o];
        var l = null;
        var h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (o + h <= n) {
          switch (h) {
            case 1:
              if (u < 128) {
                l = u;
              }
              break;
            case 2:
              if (((i = t[o + 1]) & 192) == 128 && (c = (u & 31) << 6 | i & 63) > 127) {
                l = c;
              }
              break;
            case 3:
              i = t[o + 1];
              s = t[o + 2];
              if ((i & 192) == 128 && (s & 192) == 128 && (c = (u & 15) << 12 | (i & 63) << 6 | s & 63) > 2047 && (c < 55296 || c > 57343)) {
                l = c;
              }
              break;
            case 4:
              i = t[o + 1];
              s = t[o + 2];
              a = t[o + 3];
              if ((i & 192) == 128 && (s & 192) == 128 && (a & 192) == 128 && (c = (u & 15) << 18 | (i & 63) << 12 | (s & 63) << 6 | a & 63) > 65535 && c < 1114112) {
                l = c;
              }
          }
        }
        if (l === null) {
          l = 65533;
          h = 1;
        } else if (l > 65535) {
          l -= 65536;
          r.push(l >>> 10 & 1023 | 55296);
          l = l & 1023 | 56320;
        }
        r.push(l);
        o += h;
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
        l(e);
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
      return h(null, t);
    };
    c.allocUnsafeSlow = function (t) {
      return h(null, t);
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
        y(this, e, e + 1);
      }
      return this;
    };
    c.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var e = 0; e < t; e += 4) {
        y(this, e, e + 3);
        y(this, e + 1, e + 2);
      }
      return this;
    };
    c.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var e = 0; e < t; e += 8) {
        y(this, e, e + 7);
        y(this, e + 1, e + 6);
        y(this, e + 2, e + 5);
        y(this, e + 3, e + 4);
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
        return g.apply(this, arguments);
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
      for (var a = Math.min(i, s), u = this.slice(r, o), l = t.slice(e, n), h = 0; h < a; ++h) {
        if (u[h] !== l[h]) {
          i = u[h];
          s = l[h];
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
      return m(this, t, e, n, true);
    };
    c.prototype.lastIndexOf = function (t, e, n) {
      return m(this, t, e, n, false);
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
      for (;;) {
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
            return T(this, t, e, n);
          case "base64":
            return E(this, t, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return x(this, t, e, n);
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
    function k(t, e, n) {
      var r = t.length;
      if (!e || e < 0) {
        e = 0;
      }
      if (!n || n < 0 || n > r) {
        n = r;
      }
      var o = "";
      for (var i = e; i < n; ++i) {
        o += U(t[i]);
      }
      return o;
    }
    function C(t, e, n) {
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
    function N(t, e, n, r, o, i) {
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
    function j(t, e, n, r) {
      if (e < 0) {
        e = 65535 + e + 1;
      }
      for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) {
        t[n + o] = (e & 255 << (r ? o : 1 - o) * 8) >>> (r ? o : 1 - o) * 8;
      }
    }
    function P(t, e, n, r) {
      if (e < 0) {
        e = 4294967295 + e + 1;
      }
      for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) {
        t[n + o] = e >>> (r ? o : 3 - o) * 8 & 255;
      }
    }
    function L(t, e, n, r, o, i) {
      if (n + r > t.length) {
        throw new RangeError("Index out of range");
      }
      if (n < 0) {
        throw new RangeError("Index out of range");
      }
    }
    function R(t, e, n, r, i) {
      if (!i) {
        L(t, 0, n, 4);
      }
      o.write(t, e, n, r, 23, 4);
      return n + 4;
    }
    function M(t, e, n, r, i) {
      if (!i) {
        L(t, 0, n, 8);
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
        N(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
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
        N(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
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
        N(this, t, e, 1, 255, 0);
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
        N(this, t, e, 2, 65535, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
      } else {
        j(this, t, e, true);
      }
      return e + 2;
    };
    c.prototype.writeUInt16BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        N(this, t, e, 2, 65535, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 8;
        this[e + 1] = t & 255;
      } else {
        j(this, t, e, false);
      }
      return e + 2;
    };
    c.prototype.writeUInt32LE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        N(this, t, e, 4, 4294967295, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e + 3] = t >>> 24;
        this[e + 2] = t >>> 16;
        this[e + 1] = t >>> 8;
        this[e] = t & 255;
      } else {
        P(this, t, e, true);
      }
      return e + 4;
    };
    c.prototype.writeUInt32BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        N(this, t, e, 4, 4294967295, 0);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 24;
        this[e + 1] = t >>> 16;
        this[e + 2] = t >>> 8;
        this[e + 3] = t & 255;
      } else {
        P(this, t, e, false);
      }
      return e + 4;
    };
    c.prototype.writeIntLE = function (t, e, n, r) {
      t = +t;
      e |= 0;
      if (!r) {
        var o = Math.pow(2, n * 8 - 1);
        N(this, t, e, n, o - 1, -o);
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
        N(this, t, e, n, o - 1, -o);
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
        N(this, t, e, 1, 127, -128);
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
        N(this, t, e, 2, 32767, -32768);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
      } else {
        j(this, t, e, true);
      }
      return e + 2;
    };
    c.prototype.writeInt16BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        N(this, t, e, 2, 32767, -32768);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t >>> 8;
        this[e + 1] = t & 255;
      } else {
        j(this, t, e, false);
      }
      return e + 2;
    };
    c.prototype.writeInt32LE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        N(this, t, e, 4, 2147483647, -2147483648);
      }
      if (c.TYPED_ARRAY_SUPPORT) {
        this[e] = t & 255;
        this[e + 1] = t >>> 8;
        this[e + 2] = t >>> 16;
        this[e + 3] = t >>> 24;
      } else {
        P(this, t, e, true);
      }
      return e + 4;
    };
    c.prototype.writeInt32BE = function (t, e, n) {
      t = +t;
      e |= 0;
      if (!n) {
        N(this, t, e, 4, 2147483647, -2147483648);
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
        P(this, t, e, false);
      }
      return e + 4;
    };
    c.prototype.writeFloatLE = function (t, e, n) {
      return R(this, t, e, true, n);
    };
    c.prototype.writeFloatBE = function (t, e, n) {
      return R(this, t, e, false, n);
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
        var s = c.isBuffer(t) ? t : F(new c(t, r).toString());
        var a = s.length;
        for (i = 0; i < n - e; ++i) {
          this[i + e] = s[i % a];
        }
      }
      return this;
    };
    var B = /[^+\/0-9A-Za-z-_]/g;
    function U(t) {
      if (t < 16) {
        return "0" + t.toString(16);
      } else {
        return t.toString(16);
      }
    }
    function F(t, e) {
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
        }(t).replace(B, "")).length < 2) {
          return "";
        }
        while (t.length % 4 != 0) {
          t += "=";
        }
        return t;
      }(t));
    }
    function V(t, e, n, r) {
      for (var o = 0; o < r && !(o + n >= e.length) && !(o >= t.length); ++o) {
        e[o + n] = t[o];
      }
      return o;
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
      m(t, e, i, {
        once: true
      });
      if (e !== "error") {
        (function (t, e, n) {
          if (typeof t.on == "function") {
            m(t, "error", e, n);
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
  function l(t) {
    if (t._maxListeners === undefined) {
      return a.defaultMaxListeners;
    } else {
      return t._maxListeners;
    }
  }
  function h(t, e, n, r) {
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
      if ((o = l(t)) > 0 && s.length > o && !s.warned) {
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
  function p() {
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
  function f(t, e, n) {
    var r = {
      fired: false,
      wrapFn: undefined,
      target: t,
      type: e,
      listener: n
    };
    var o = p.bind(r);
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
      return y(o, o.length);
    }
  }
  function g(t) {
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
  function y(t, e) {
    var n = new Array(e);
    for (var r = 0; r < e; ++r) {
      n[r] = t[r];
    }
    return n;
  }
  function m(t, e, n, r) {
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
    return l(this);
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
      var l = y(c, u);
      for (n = 0; n < u; ++n) {
        i(l[n], this, e);
      }
    }
    return true;
  };
  a.prototype.addListener = function (t, e) {
    return h(this, t, e, false);
  };
  a.prototype.on = a.prototype.addListener;
  a.prototype.prependListener = function (t, e) {
    return h(this, t, e, true);
  };
  a.prototype.once = function (t, e) {
    u(e);
    this.on(t, f(this, t, e));
    return this;
  };
  a.prototype.prependOnceListener = function (t, e) {
    u(e);
    this.prependListener(t, f(this, t, e));
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
      return g.call(t, e);
    }
  };
  a.prototype.listenerCount = g;
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
  }).call(this, n(94));
}, function (t, e, n) {
  var r = n(144);
  var o = Math.min;
  t.exports = function (t) {
    if (t > 0) {
      return o(r(t), 9007199254740991);
    } else {
      return 0;
    }
  };
}, function (t, e, n) {
  var r = n(32);
  var o = n(52);
  var i = n(17)("species");
  t.exports = function (t, e) {
    var n;
    var s = r(t).constructor;
    if (s === undefined || (n = r(s)[i]) == null) {
      return e;
    } else {
      return o(n);
    }
  };
},, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "slave", function () {
    return a;
  });
  n(7);
  var r = n(5);
  var o = n.n(r);
  var i = n(315);
  var s = n(50);
  const a = new class {
    constructor() {
      this.channel = null;
      this.initResolve = [];
      this.initReject = [];
      this.messageScheduler = new i.a();
      this.initChannel = () => {
        if (s.b === "serviceworker") {
          this.initServiceworker();
        } else if (s.b === "background") {
          this.initBackground();
        }
      };
      this.awaitChannel = () => new o.a(async (t, e) => {
        if (s.b === "serviceworker") {
          if (this.channel) {
            await this.channel.active;
            await this.channel.controlling;
            t(null);
          } else {
            this.initResolve.push(t);
            this.initReject.push(e);
          }
        } else if (s.b === "background") {
          t(null);
        }
      });
      this.initServiceworker = async () => {
        try {
          const {
            createWorkBox: t
          } = await n.e(10).then(n.bind(null, 603));
          const e = await t();
          if (!e) {
            return;
          }
          e.addEventListener("message", t => {
            const {
              type: e,
              payload: n = {}
            } = t.data;
            if (e === "master:bordcast-message") {
              this.messageScheduler.execTask(n.type, n.payload);
            }
          });
          await e.active;
          await e.controlling;
          this.channel = e;
          this.initResolve.forEach(t => {
            t();
          });
          this.channel.postTask = this.channel.messageSW;
        } catch (t) {
          console.log("slave初始化错误：", t);
          this.initReject.forEach(t => {
            t();
          });
        }
      };
      this.initBackground = () => {
        this.channel = {
          postTask: t => new o.a((e, n) => {
            chrome.runtime.sendMessage(t, t => {
              if (chrome.runtime.lastError) {
                n(chrome.runtime.lastError);
              }
              e(t);
            });
          })
        };
        chrome.runtime.onMessage.addListener(({
          type: t,
          payload: e,
          ignoreId: n
        }) => {
          if (t === "master:bordcast-message") {
            chrome.tabs.getCurrent(t => {
              if (t && n !== t.id) {
                this.messageScheduler.execTask(e.type, e.payload);
              }
            });
          } else if (t === "slave:bordcast-message") {
            this.messageScheduler.execTask(e.data.type, e.data.payload);
          }
        });
      };
      if (s.a) {
        throw new Error("it's not page");
      }
      this.initChannel();
    }
    postTask(t, e, n) {
      return new o.a(async (r, o) => {
        let i = false;
        await this.awaitChannel();
        const a = Object.assign(Object.assign(Object.assign({}, s.d), {
          taskId: Object(s.c)()
        }), n);
        if (a.timeout) {
          setTimeout(() => {
            if (!i) {
              r({
                error: "timeout"
              });
            }
          }, a.timeout);
        }
        try {
          const n = await this.channel.postTask({
            type: t,
            payload: Object.assign({
              data: e
            }, a)
          });
          i = true;
          r(n);
        } catch (t) {
          r({
            error: t
          });
        }
      });
    }
    listenMessage(t, e) {
      this.messageScheduler.listenTask(t, e);
    }
    sendMessage(t, e = "") {
      this.postTask("slave:bordcast-message", {
        type: t,
        payload: e
      });
    }
  }();
}, function (t, e, n) {
  "use strict";

  n.d(e, "j", function () {
    return o;
  });
  n.d(e, "c", function () {
    return i;
  });
  n.d(e, "a", function () {
    return s;
  });
  n.d(e, "d", function () {
    return a;
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
    return h;
  });
  n.d(e, "b", function () {
    return p;
  });
  n.d(e, "g", function () {
    return f;
  });
  var r = n(0);
  const o = 0.2;
  function i(t) {
    return `https://chrome.google.com/webstore/detail/infinity-new-tab-pro/${t}/reviews?utm_source=infinity-rate`;
  }
  const s = "https://addons.mozilla.org/" + r.C.lang + "/firefox/addon/infinity-new-tab-pro-firefox/";
  function a(t) {
    return "https://microsoftedge.microsoft.com/addons/detail/infinity-new-tab-pro/" + t;
  }
  const c = "privacy_data_uninstall_title_pro";
  const u = "privacy_data_uninstall_confirm_pro";
  const l = true;
  const h = () => {};
  const p = () => {
    if (r.C.isZh) {
      chrome.runtime.setUninstallURL("https://hello.wetab.link/");
    } else {
      chrome.runtime.setUninstallURL("https://uninstall.infinitynewtab.com/?from=" + r.c);
    }
  };
  const f = "https://infinityicon.infinitynewtab.com/assets/logo-pro.png";
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
    return h;
  });
  var r = n(5);
  var o = n.n(r);
  n(7);
  var i = n(0);
  var s = n(23);
  var a = n.n(s);
  function c(t, e) {
    if (i.l) {
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
    if (i.l) {
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
        return await a.a.getItem(t);
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
  async function h() {
    const t = await new o.a(t => chrome.bookmarks.getTree(t));
    if (i.n) {
      const e = t[0].children.findIndex(t => t.id === "unfiled_____");
      const n = t[0].children.findIndex(t => t.id === "toolbar_____");
      if (e !== -1 && n !== -1) {
        if (e > n) {
          const [r] = t[0].children.splice(e, 1);
          const [o] = t[0].children.splice(n, 1);
          t[0].children.unshift(o, r);
        } else {
          const [r] = t[0].children.splice(n, 1);
          const [o] = t[0].children.splice(e, 1);
          t[0].children.unshift(r, o);
        }
      }
    }
    return t;
  }
},, function (t, e, n) {
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
    return h;
  });
  n.d(e, "getWallpaperListByType", function () {
    return p;
  });
  n.d(e, "likeWallpaper", function () {
    return f;
  });
  n.d(e, "collectionWallpaper", function () {
    return d;
  });
  n.d(e, "addCustomColor", function () {
    return g;
  });
  n.d(e, "setCustomColorItems", function () {
    return y;
  });
  n.d(e, "getCustomColor", function () {
    return m;
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
    return T;
  });
  n.d(e, "hasWallpaperLibrary", function () {
    return E;
  });
  n.d(e, "getLikedWallpaper", function () {
    return x;
  });
  n.d(e, "getCollectionWallpaper", function () {
    return S;
  });
  n.d(e, "getWallpaperLibraryItems", function () {
    return O;
  });
  n.d(e, "getUserWallpaperLibraryItemsById", function () {
    return I;
  });
  n.d(e, "removeWallpaperLibraryItem", function () {
    return A;
  });
  n.d(e, "removeWallpaperLibrary", function () {
    return k;
  });
  n.d(e, "addImagesToLibrary", function () {
    return C;
  });
  n.d(e, "renameWallpaperLibrary", function () {
    return D;
  });
  n.d(e, "getNextWallpaper", function () {
    return N;
  });
  n.d(e, "convertURL", function () {
    return j;
  });
  n(7);
  var r = n(0);
  var o = n(3);
  var i = n(36);
  const s = Math.floor(screen.width * window.devicePixelRatio);
  const a = Math.floor(window.devicePixelRatio * 203);
  const c = {
    smallWidth: a > 3840 ? 3840 : a,
    normalWidth: s > 3840 ? 3840 : s,
    format: i.f ? "" : i.g
  };
  const u = async () => {
    try {
      const t = await o.a.get(r.w + "/random-wallpaper", {
        _: new Date().getTime()
      });
      if (!t.success) {
        throw t;
      }
      const {
        src: e,
        _id: n,
        source: i
      } = t.data[0];
      const {
        url: s,
        rawUrl: a
      } = j(e.rawSrc);
      return {
        data: {
          url: s,
          rawUrl: a,
          id: n,
          source: i
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
      const t = await o.a.get(r.y + "/get_bing_wallpaper", null, {
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
        url: i,
        rawUrl: s
      } = j(e.src.rawSrc);
      e.thumbnail = n;
      e.url = i;
      e.rawUrl = s;
      return t;
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const h = async t => {
    const {
      source: e
    } = t;
    t.source = e === "all" ? "" : e;
    try {
      const e = await o.a.get(r.w + "/get-wallpaper", t, {
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
        } = j(t.src.rawSrc);
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
  async function p(t) {
    if (t.order === "1") {
      t.order = "like";
    } else if (t.order === "2") {
      t.order = "_id";
    }
    try {
      const e = await o.a.get(r.y + "/get_wallpaper_list", Object.assign({
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
        } = j(t.src.rawSrc);
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
  const f = async (t, e) => {
    try {
      const n = await o.a.post(r.y + "/like_wallpaper", {
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
      const n = await o.a.post(r.y + "/collection_wallpaper", {
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
  const g = async t => {
    try {
      const e = await o.a.post(r.y + "/add_custom_color", Object.assign(Object.assign({}, t), {
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
  const y = async t => {
    try {
      const e = await o.a.post(r.y + "/set_custom_color_items", t, {
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
  const m = async () => {
    try {
      const t = await o.a.get(r.y + "/get_custom_color", null, {
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
      const e = await o.a.post(r.y + "/remove_custom_color", {
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
      const e = await o.a.post(r.y + "/upload_wallpaper", t, {
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
      const e = await o.a.get(r.y + "/get_wallpapers_by_id", {
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
        } = j(t.src.rawSrc);
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
      return await o.a.post(r.y + "/create_wallpaper_library", {
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
  const T = async () => await o.a.get(r.y + "/get_user_wallpaper_library", null, {
    _auth: true
  });
  const E = async t => {
    try {
      return await o.a.get(r.y + "/has_wallpaper_library", {
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
  const x = async () => {
    try {
      return await o.a.get(r.y + "/get_liked_wallpaper", null, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const S = async () => {
    try {
      return await o.a.get(r.y + "/get_collection_wallpaper", null, {
        _auth: true
      });
    } catch (t) {
      return {
        error: t
      };
    }
  };
  const O = async t => {
    const e = await o.a.get(r.y + "/get_user_wallpaper_library_items", {
      libraryId: t
    });
    e.data.map(t => {
      const {
        content: e,
        url: n,
        rawUrl: r
      } = j(t.url);
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
  const I = async t => {
    try {
      const e = await o.a.get(r.y + "/get_user_wallpaper_library_items_by_id", {
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
      return await o.a.post(r.y + "/remove_wallpaper_library_item", {
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
  const k = async t => {
    try {
      return await o.a.post(r.y + "/remove_wallpaper_library", {
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
  const C = async (t, e) => {
    try {
      return await o.a.post(r.y + "/add_images_to_library", {
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
  const D = async (t, e) => {
    try {
      return await o.a.post(r.y + "/rename_wallpaper_library", {
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
  const N = async (t, e, n = "library") => {
    const i = {
      source: t,
      type: n
    };
    if (e) {
      i._id = e;
    }
    const s = await o.a.get(r.y + "/get_next_wallpaper", i, {
      _single: "getNextWallpaper"
    });
    if (s.code !== 0) {
      throw new Error();
    }
    const {
      data: a
    } = s;
    const {
      content: c,
      url: u,
      rawUrl: l
    } = j(a.rawUrl);
    a.thumbnail = c;
    a.url = u;
    a.rawUrl = l;
    return s;
  };
  const j = t => ({
    rawUrl: t,
    url: `${t}?imageView2/2/w/${c.normalWidth}/${c.format}interlace/1`,
    content: `${t}?imageView2/2/w/${c.smallWidth}/${c.format}interlace/1`
  });
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return s;
  });
  n.d(e, "a", function () {
    return a;
  });
  n.d(e, "c", function () {
    return c;
  });
  n.d(e, "d", function () {
    return u;
  });
  var r = n(215);
  var o = n.n(r);
  n(7);
  var i = n(34);
  const s = async t => {
    try {
      const e = "AUDIO_PLAYBACK";
      await h("off_screen/index.html", e);
      i.b.sendToRuntime({
        action: i.a.BG_PLAY_AUDIO,
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
  const a = async t => {
    try {
      const e = "LOCAL_STORAGE";
      await h("off_screen/index.html", e);
      return await i.b.sendToRuntime({
        action: i.a.BG_GET_LOCAL_STORAGE,
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
      await h("off_screen/index.html", e);
      await i.b.sendToRuntime({
        action: i.a.BG_REMOVE_LOCAL_STORAGE,
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
      await h("off_screen/index.html", n);
      await i.b.sendToRuntime({
        action: i.a.BG_SET_LOCAL_STORAGE,
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
  async function h(t, e) {
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
          const t = await o()(n = self.clients).call(n);
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
},, function (t, e) {
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
    var l = {}.hasOwnProperty;
    u = n(57);
    c = u.isObject;
    a = u.isFunction;
    s = u.getValue;
    i = n(35);
    e = n(15);
    r = n(236);
    o = n(170);
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
        var o;
        if (t != null) {
          t = s(t);
        }
        if (c(t)) {
          for (n in t) {
            if (l.call(t, n)) {
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
    o = n(57).isObject;
    r = n(35);
    e = n(15);
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
    var l = {}.hasOwnProperty;
    u = n(57).isObject;
    c = n(35);
    e = n(15);
    r = n(175);
    i = n(176);
    o = n(177);
    s = n(178);
    a = n(170);
    t.exports = function (t) {
      function n(t, r, o) {
        var i;
        var s;
        var a;
        var c;
        var l;
        var h;
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
          r = (l = r).pubID;
          o = l.sysID;
        }
        if (o == null) {
          o = (h = [r, o])[0];
          r = h[1];
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
    r = n(35);
    e = n(15);
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
    o = n(57).isObject;
    r = n(35);
    e = n(15);
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
    r = n(35);
    e = n(15);
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
    r = n(35);
    e = n(15);
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
    e = n(15);
    r = n(154);
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
  (e = t.exports = n(241)).Stream = e;
  e.Readable = e;
  e.Writable = n(185);
  e.Duplex = n(80);
  e.Transform = n(245);
  e.PassThrough = n(355);
}, function (t, e, n) {
  var r = n(153);
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
    var i = n(157);
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
    t.exports = b;
    var a;
    var c = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : i.nextTick;
    b.WritableState = m;
    var u = Object.create(n(108));
    u.inherits = n(91);
    var l = {
      deprecate: n(353)
    };
    var h = n(242);
    var p = n(184).Buffer;
    var f = o.Uint8Array || function () {};
    var d;
    var g = n(243);
    function y() {}
    function m(t, e) {
      a = a || n(80);
      t = t || {};
      var r = e instanceof a;
      this.objectMode = !!t.objectMode;
      if (r) {
        this.objectMode = this.objectMode || !!t.writableObjectMode;
      }
      var o = t.highWaterMark;
      var u = t.writableHighWaterMark;
      var l = this.objectMode ? 16 : 16384;
      this.highWaterMark = o || o === 0 ? o : r && (u || u === 0) ? u : l;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var h = t.decodeStrings === false;
      this.decodeStrings = !h;
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
                i.nextTick(x, t, e);
                t._writableState.errorEmitted = true;
                t.emit("error", r);
              } else {
                o(r);
                t._writableState.errorEmitted = true;
                t.emit("error", r);
                x(t, e);
              }
            })(t, n, r, e, o);
          } else {
            var s = T(n);
            if (!s && !n.corked && !n.bufferProcessing && !!n.bufferedRequest) {
              _(t, n);
            }
            if (r) {
              c(v, t, n, s, o);
            } else {
              v(t, n, s, o);
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
    function b(t) {
      a = a || n(80);
      if (!d.call(b, this) && !(this instanceof a)) {
        return new b(t);
      }
      this._writableState = new m(t, this);
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
      h.call(this);
    }
    function w(t, e, n, r, o, i, s) {
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
      x(t, e);
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
        for (; n;) {
          o[a] = n;
          if (!n.isBuf) {
            c = false;
          }
          n = n.next;
          a += 1;
        }
        o.allBuffers = c;
        w(t, e, true, e.length, o, "", i.finish);
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
          var l = n.encoding;
          var h = n.callback;
          w(t, e, false, e.objectMode ? 1 : u.length, u, l, h);
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
    function T(t) {
      return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
    }
    function E(t, e) {
      t._final(function (n) {
        e.pendingcb--;
        if (n) {
          t.emit("error", n);
        }
        e.prefinished = true;
        t.emit("prefinish");
        x(t, e);
      });
    }
    function x(t, e) {
      var n = T(e);
      if (n) {
        (function (t, e) {
          if (!e.prefinished && !e.finalCalled) {
            if (typeof t._final == "function") {
              e.pendingcb++;
              e.finalCalled = true;
              i.nextTick(E, t, e);
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
    u.inherits(b, h);
    m.prototype.getBuffer = function () {
      for (var t = this.bufferedRequest, e = []; t;) {
        e.push(t);
        t = t.next;
      }
      return e;
    };
    (function () {
      try {
        Object.defineProperty(m.prototype, "buffer", {
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
          return !!d.call(this, t) || this === b && t && t._writableState instanceof m;
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
      var o = this._writableState;
      var s = false;
      var a = !o.objectMode && (r = t, p.isBuffer(r) || r instanceof f);
      if (a && !p.isBuffer(t)) {
        t = function (t) {
          return p.from(t);
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
        n = y;
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
                e = p.from(e, n);
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
            w(t, e, false, a, r, o, i);
          }
          return c;
        }(this, o, a, t, e, n);
      }
      return s;
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
          x(t, e);
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
    b.prototype.destroy = g.destroy;
    b.prototype._undestroy = g.undestroy;
    b.prototype._destroy = function (t, e) {
      this.end();
      e(t);
    };
  }).call(this, n(94), n(244).setImmediate, n(25));
}, function (t, e, n) {
  "use strict";

  var r = n(354).Buffer;
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
        for (;;) {
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
        this.text = l;
        this.end = h;
        e = 3;
        break;
      default:
        this.write = p;
        this.end = f;
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
  function h(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      return e + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    } else {
      return e;
    }
  }
  function p(t) {
    return t.toString(this.encoding);
  }
  function f(t) {
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
  "use strict";

  var r = n(44);
  var o = n(140);
  var i = n(143);
  var s = n(195);
  var a = n(30);
  var c = n(95);
  var u = n(98);
  function l(t, e) {
    var n = this;
    if (!(n instanceof l)) {
      return new l(t, e);
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
  l.prototype = s(Error.prototype, {
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
  var o = n(269);
  var i = n(95);
  var s = n(96);
  var a = n(189);
  var c = n(37);
  var u = n(191);
  var l = Object.getOwnPropertyDescriptor;
  e.f = r ? l : function (t, e) {
    t = s(t);
    e = a(e, true);
    if (u) {
      try {
        return l(t, e);
      } catch (t) {}
    }
    if (c(t, e)) {
      return i(!o.f.call(t, e), t[e]);
    }
  };
}, function (t, e, n) {
  var r = n(45);
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
  var r = n(103);
  t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e, n) {
  var r = n(61);
  var o = n(29);
  var i = n(138);
  t.exports = !r && !o(function () {
    return Object.defineProperty(i("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
}, function (t, e, n) {
  var r = n(29);
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
  var r = n(65);
  var o = n(142);
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
  var r;
  var o = n(32);
  var i = n(274);
  var s = n(196);
  var a = n(145);
  var c = n(197);
  var u = n(138);
  var l = n(141);
  var h = l("IE_PROTO");
  function p() {}
  function f(t) {
    return "<script>" + t + "</script>";
  }
  function d() {
    try {
      r = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t;
    var e;
    d = r ? function (t) {
      t.write(f(""));
      t.close();
      var e = t.parentWindow.Object;
      t = null;
      return e;
    }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(f("document.F=Object")), t.close(), t.F);
    for (var n = s.length; n--;) {
      delete d.prototype[s[n]];
    }
    return d();
  }
  a[h] = true;
  t.exports = Object.create || function (t, e) {
    var n;
    if (t !== null) {
      p.prototype = o(t);
      n = new p();
      p.prototype = null;
      n[h] = t;
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
  var r = n(62);
  t.exports = r("document", "documentElement");
}, function (t, e, n) {
  var r = n(199);
  var o = n(29);
  t.exports = !!Object.getOwnPropertySymbols && !o(function () {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
  });
}, function (t, e, n) {
  var r;
  var o;
  var i = n(14);
  var s = n(146);
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
  var r = n(14);
  t.exports = r.Promise;
}, function (t, e, n) {
  var r = n(142);
  var o = Function.toString;
  if (typeof r.inspectSource != "function") {
    r.inspectSource = function (t) {
      return o.call(t);
    };
  }
  t.exports = r.inspectSource;
}, function (t, e, n) {
  var r;
  var o;
  var i;
  var s = n(14);
  var a = n(29);
  var c = n(139);
  var u = n(197);
  var l = n(138);
  var h = n(203);
  var p = n(150);
  var f = s.location;
  var d = s.setImmediate;
  var g = s.clearImmediate;
  var y = s.process;
  var m = s.MessageChannel;
  var b = s.Dispatch;
  var w = 0;
  var v = {};
  function _(t) {
    if (v.hasOwnProperty(t)) {
      var e = v[t];
      delete v[t];
      e();
    }
  }
  function T(t) {
    return function () {
      _(t);
    };
  }
  function E(t) {
    _(t.data);
  }
  function x(t) {
    s.postMessage(t + "", f.protocol + "//" + f.host);
  }
  if (!d || !g) {
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
    g = function (t) {
      delete v[t];
    };
    if (p) {
      r = function (t) {
        y.nextTick(T(t));
      };
    } else if (b && b.now) {
      r = function (t) {
        b.now(T(t));
      };
    } else if (m && !h) {
      i = (o = new m()).port2;
      o.port1.onmessage = E;
      r = c(i.postMessage, i, 1);
    } else if (s.addEventListener && typeof postMessage == "function" && !s.importScripts && f && f.protocol !== "file:" && !a(x)) {
      r = x;
      s.addEventListener("message", E, false);
    } else {
      r = "onreadystatechange" in l("script") ? function (t) {
        u.appendChild(l("script")).onreadystatechange = function () {
          u.removeChild(this);
          _(t);
        };
      } : function (t) {
        setTimeout(T(t), 0);
      };
    }
  }
  t.exports = {
    set: d,
    clear: g
  };
}, function (t, e, n) {
  var r = n(146);
  t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r);
}, function (t, e, n) {
  var r = n(32);
  var o = n(45);
  var i = n(81);
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

  var r = n(44);
  var o = n(52);
  var i = n(81);
  var s = n(100);
  var a = n(98);
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

  var r = n(44);
  var o = n(52);
  var i = n(62);
  var s = n(81);
  var a = n(100);
  var c = n(98);
  r({
    target: "Promise",
    stat: true
  }, {
    any: function (t) {
      var e = this;
      var n = s.f(e);
      var r = n.resolve;
      var u = n.reject;
      var l = a(function () {
        var n = o(e.resolve);
        var s = [];
        var a = 0;
        var l = 1;
        var h = false;
        c(t, function (t) {
          var o = a++;
          var c = false;
          s.push(undefined);
          l++;
          n.call(e, t).then(function (t) {
            if (!c && !h) {
              h = true;
              r(t);
            }
          }, function (t) {
            if (!c && !h) {
              c = true;
              s[o] = t;
              if (! --l) {
                u(new (i("AggregateError"))(s, "No one promise resolved"));
              }
            }
          });
        });
        if (! --l) {
          u(new (i("AggregateError"))(s, "No one promise resolved"));
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
  var o = n(213);
  var i = n(140);
  var s = n(143);
  var a = n(149);
  var c = n(30);
  var u = n(99);
  var l = n(17);
  var h = n(65);
  var p = n(63);
  var f = n(208);
  var d = f.IteratorPrototype;
  var g = f.BUGGY_SAFARI_ITERATORS;
  var y = l("iterator");
  function m() {
    return this;
  }
  t.exports = function (t, e, n, l, f, b, w) {
    o(n, e, l);
    var v;
    var _;
    var T;
    function E(t) {
      if (t === f && A) {
        return A;
      }
      if (!g && t in O) {
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
    var x = e + " Iterator";
    var S = false;
    var O = t.prototype;
    var I = O[y] || O["@@iterator"] || f && O[f];
    var A = !g && I || E(f);
    var k = e == "Array" && O.entries || I;
    if (k) {
      v = i(k.call(new t()));
      if (d !== Object.prototype && v.next) {
        if (!h && i(v) !== d) {
          if (s) {
            s(v, d);
          } else if (typeof v[y] != "function") {
            c(v, y, m);
          }
        }
        a(v, x, true, true);
        if (h) {
          p[x] = m;
        }
      }
    }
    if (f == "values" && I && I.name !== "values") {
      S = true;
      A = function () {
        return I.call(this);
      };
    }
    if ((!h || !!w) && O[y] !== A) {
      c(O, y, A);
    }
    p[e] = A;
    if (f) {
      _ = {
        values: E("values"),
        keys: b ? A : E("keys"),
        entries: E("entries")
      };
      if (w) {
        for (T in _) {
          if (g || S || !(T in O)) {
            u(O, T, _[T]);
          }
        }
      } else {
        r({
          target: e,
          proto: true,
          forced: g || S
        }, _);
      }
    }
    return _;
  };
}, function (t, e, n) {
  "use strict";

  var r;
  var o;
  var i;
  var s = n(29);
  var a = n(140);
  var c = n(30);
  var u = n(37);
  var l = n(17);
  var h = n(65);
  var p = l("iterator");
  var f = false;
  if ([].keys) {
    if ("next" in (i = [].keys())) {
      if ((o = a(a(i))) !== Object.prototype) {
        r = o;
      }
    } else {
      f = true;
    }
  }
  var d = r == null || s(function () {
    var t = {};
    return r[p].call(t) !== t;
  });
  if (d) {
    r = {};
  }
  if ((!h || !!d) && !u(r, p)) {
    c(r, p, function () {
      return this;
    });
  }
  t.exports = {
    IteratorPrototype: r,
    BUGGY_SAFARI_ITERATORS: f
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  };
},,, function (t, e, n) {
  var r = n(144);
  var o = n(103);
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
  "use strict";

  var r = n(208).IteratorPrototype;
  var o = n(195);
  var i = n(95);
  var s = n(149);
  var a = n(63);
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

  n.d(e, "c", function () {
    return s;
  });
  n.d(e, "a", function () {
    return a;
  });
  n.d(e, "d", function () {
    return c;
  });
  n.d(e, "b", function () {
    return u;
  });
  var r = n(5);
  var o = n.n(r);
  n(257);
  n(19);
  n(64);
  var i = n(0);
  function s(t) {
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
  function a(t, e = i.C.lang) {
    const n = this;
    const r = /(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/;
    let o;
    let s;
    let a;
    if (r.test(t)) {
      t.replace(r, (t, r, i, c) => {
        if (r.length === 4) {
          o = r;
          s = i;
          a = c;
        } else if (n.isFirstDate(e)) {
          a = r;
          s = i;
          o = c;
        } else {
          a = i;
          s = r;
          o = c;
        }
        if (e === "th") {
          o = Number(o) - 543;
        }
      });
      return new Date(`${o}/${s}/${a}`);
    } else {
      return null;
    }
  }
  function c(t) {
    return t.slice(0, 1).toUpperCase() + t.slice(1);
  }
  function u(t, e, n) {
    return new o.a((r, o) => {
      const i = new Image(e, n);
      i.onload = () => r(i);
      i.onerror = o;
      i.crossOrigin = "anonymous";
      i.src = t;
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
    var r = n(31);
    var o = n(323);
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
      adapter: ((typeof XMLHttpRequest != "undefined" || e !== undefined && Object.prototype.toString.call(e) === "[object process]") && (a = n(230)), a),
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
  }).call(this, n(94));
}, function (t, e, n) {
  "use strict";

  var r = n(31);
  var o = n(324);
  var i = n(227);
  var s = n(326);
  var a = n(329);
  var c = n(330);
  var u = n(231);
  t.exports = function (t) {
    return new Promise(function (e, l) {
      var h = t.data;
      var p = t.headers;
      if (r.isFormData(h)) {
        delete p["Content-Type"];
      }
      var f = new XMLHttpRequest();
      if (t.auth) {
        var d = t.auth.username || "";
        var g = t.auth.password || "";
        p.Authorization = "Basic " + btoa(d + ":" + g);
      }
      var y = s(t.baseURL, t.url);
      f.open(t.method.toUpperCase(), i(y, t.params, t.paramsSerializer), true);
      f.timeout = t.timeout;
      f.onreadystatechange = function () {
        if (f && f.readyState === 4 && (f.status !== 0 || f.responseURL && f.responseURL.indexOf("file:") === 0)) {
          var n = "getAllResponseHeaders" in f ? a(f.getAllResponseHeaders()) : null;
          var r = {
            data: t.responseType && t.responseType !== "text" ? f.response : f.responseText,
            status: f.status,
            statusText: f.statusText,
            headers: n,
            config: t,
            request: f
          };
          o(e, l, r);
          f = null;
        }
      };
      f.onabort = function () {
        if (f) {
          l(u("Request aborted", t, "ECONNABORTED", f));
          f = null;
        }
      };
      f.onerror = function () {
        l(u("Network Error", t, null, f));
        f = null;
      };
      f.ontimeout = function () {
        var e = "timeout of " + t.timeout + "ms exceeded";
        if (t.timeoutErrorMessage) {
          e = t.timeoutErrorMessage;
        }
        l(u(e, t, "ECONNABORTED", f));
        f = null;
      };
      if (r.isStandardBrowserEnv()) {
        var m = n(331);
        var b = (t.withCredentials || c(y)) && t.xsrfCookieName ? m.read(t.xsrfCookieName) : undefined;
        if (b) {
          p[t.xsrfHeaderName] = b;
        }
      }
      if ("setRequestHeader" in f) {
        r.forEach(p, function (t, e) {
          if (h === undefined && e.toLowerCase() === "content-type") {
            delete p[e];
          } else {
            f.setRequestHeader(e, t);
          }
        });
      }
      if (!r.isUndefined(t.withCredentials)) {
        f.withCredentials = !!t.withCredentials;
      }
      if (t.responseType) {
        try {
          f.responseType = t.responseType;
        } catch (e) {
          if (t.responseType !== "json") {
            throw e;
          }
        }
      }
      if (typeof t.onDownloadProgress == "function") {
        f.addEventListener("progress", t.onDownloadProgress);
      }
      if (typeof t.onUploadProgress == "function" && f.upload) {
        f.upload.addEventListener("progress", t.onUploadProgress);
      }
      if (t.cancelToken) {
        t.cancelToken.promise.then(function (t) {
          if (f) {
            f.abort();
            l(t);
            f = null;
          }
        });
      }
      if (h === undefined) {
        h = null;
      }
      f.send(h);
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(325);
  t.exports = function (t, e, n, o, i) {
    var s = new Error(t);
    return r(s, e, n, o, i);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(31);
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
    c = n(57).isPlainObject;
    o = n(234);
    r = n(337);
    i = n(35);
    e = n(15);
    a = n(238);
    s = n(182);
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
    var o = {}.hasOwnProperty;
    r = n(35);
    e = n(15);
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
    o = n(57).assign;
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
        var l;
        var h;
        var p;
        var f;
        var d;
        var g;
        var y;
        var m;
        var b;
        var w;
        o ||= 0;
        g = false;
        y = "";
        this.openNode(t, n, o);
        n.state = r.OpenTag;
        y += this.indent(t, n, o) + "<" + t.name;
        for (d in m = t.attribs) {
          if (i.call(m, d)) {
            s = m[d];
            y += this.attribute(s, n, o);
          }
        }
        u = (c = t.children.length) === 0 ? null : t.children[0];
        if (c === 0 || t.children.every(function (t) {
          return (t.type === e.Text || t.type === e.Raw) && t.value === "";
        })) {
          if (n.allowEmpty) {
            y += ">";
            n.state = r.CloseTag;
            y += "</" + t.name + ">" + this.endline(t, n, o);
          } else {
            n.state = r.CloseTag;
            y += n.spaceBeforeSlash + "/>" + this.endline(t, n, o);
          }
        } else if (!n.pretty || c !== 1 || u.type !== e.Text && u.type !== e.Raw || u.value == null) {
          if (n.dontPrettyTextNodes) {
            l = 0;
            p = (b = t.children).length;
            for (; l < p; l++) {
              if (((a = b[l]).type === e.Text || a.type === e.Raw) && a.value != null) {
                n.suppressPrettyCount++;
                g = true;
                break;
              }
            }
          }
          y += ">" + this.endline(t, n, o);
          n.state = r.InsideTag;
          h = 0;
          f = (w = t.children).length;
          for (; h < f; h++) {
            a = w[h];
            y += this.writeChildNode(a, n, o + 1);
          }
          n.state = r.CloseTag;
          y += this.indent(t, n, o) + "</" + t.name + ">";
          if (g) {
            n.suppressPrettyCount--;
          }
          y += this.endline(t, n, o);
          n.state = r.None;
        } else {
          y += ">";
          n.state = r.InsideTag;
          n.suppressPrettyCount++;
          g = true;
          y += this.writeChildNode(u, n, o + 1);
          n.suppressPrettyCount--;
          g = false;
          n.state = r.CloseTag;
          y += "</" + t.name + ">" + this.endline(t, n, o);
        }
        this.closeNode(t, n, o);
        return y;
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
    var o = n(157);
    t.exports = w;
    var i;
    var s = n(240);
    w.ReadableState = b;
    n(156).EventEmitter;
    function a(t, e) {
      return t.listeners(e).length;
    }
    var c = n(242);
    var u = n(184).Buffer;
    var l = e.Uint8Array || function () {};
    var h = Object.create(n(108));
    h.inherits = n(91);
    var p = n(349);
    var f = undefined;
    f = p && p.debuglog ? p.debuglog("stream") : function () {};
    var d;
    var g = n(350);
    var y = n(243);
    h.inherits(w, c);
    var m = ["error", "close", "destroy", "pause", "resume"];
    function b(t, e) {
      t = t || {};
      var r = e instanceof (i = i || n(80));
      this.objectMode = !!t.objectMode;
      if (r) {
        this.objectMode = this.objectMode || !!t.readableObjectMode;
      }
      var o = t.highWaterMark;
      var s = t.readableHighWaterMark;
      var a = this.objectMode ? 16 : 16384;
      this.highWaterMark = o || o === 0 ? o : r && (s || s === 0) ? s : a;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new g();
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
      i = i || n(80);
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
    function v(t, e, n, r, o) {
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
          E(t);
        })(t, s);
      } else {
        if (!o) {
          i = function (t, e) {
            var n;
            r = e;
            if (!u.isBuffer(r) && !(r instanceof l) && typeof e != "string" && e !== undefined && !t.objectMode) {
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
                S(t, s);
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
          E(t);
        }
      }
      S(t, e);
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
    w.prototype.destroy = y.destroy;
    w.prototype._undestroy = y.undestroy;
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
    function T(t, e) {
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
    function E(t) {
      var e = t._readableState;
      e.needReadable = false;
      if (!e.emittedReadable) {
        f("emitReadable", e.flowing);
        e.emittedReadable = true;
        if (e.sync) {
          o.nextTick(x, t);
        } else {
          x(t);
        }
      }
    }
    function x(t) {
      f("emit readable");
      t.emit("readable");
      k(t);
    }
    function S(t, e) {
      if (!e.readingMore) {
        e.readingMore = true;
        o.nextTick(O, t, e);
      }
    }
    function O(t, e) {
      for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (f("maybeReadMore read 0"), t.read(0), n !== e.length);) {
        n = e.length;
      }
      e.readingMore = false;
    }
    function I(t) {
      f("readable nexttick read 0");
      t.read(0);
    }
    function A(t, e) {
      if (!e.reading) {
        f("resume read 0");
        t.read(0);
      }
      e.resumeScheduled = false;
      e.awaitDrain = 0;
      t.emit("resume");
      k(t);
      if (e.flowing && !e.reading) {
        t.read(0);
      }
    }
    function k(t) {
      var e = t._readableState;
      for (f("flow", e.flowing); e.flowing && t.read() !== null;);
    }
    function C(t, e) {
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
        o.nextTick(N, e, t);
      }
    }
    function N(t, e) {
      if (!t.endEmitted && t.length === 0) {
        t.endEmitted = true;
        e.readable = false;
        e.emit("end");
      }
    }
    function j(t, e) {
      for (var n = 0, r = t.length; n < r; n++) {
        if (t[n] === e) {
          return n;
        }
      }
      return -1;
    }
    w.prototype.read = function (t) {
      f("read", t);
      t = parseInt(t, 10);
      var e = this._readableState;
      var n = t;
      if (t !== 0) {
        e.emittedReadable = false;
      }
      if (t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)) {
        f("read: emitReadable", e.length, e.ended);
        if (e.length === 0 && e.ended) {
          D(this);
        } else {
          E(this);
        }
        return null;
      }
      if ((t = T(t, e)) === 0 && e.ended) {
        if (e.length === 0) {
          D(this);
        }
        return null;
      }
      var r;
      var o = e.needReadable;
      f("need readable", o);
      if (e.length === 0 || e.length - t < e.highWaterMark) {
        f("length less than watermark", o = true);
      }
      if (e.ended || e.reading) {
        f("reading or ended", o = false);
      } else if (o) {
        f("do read");
        e.reading = true;
        e.sync = true;
        if (e.length === 0) {
          e.needReadable = true;
        }
        this._read(e.highWaterMark);
        e.sync = false;
        if (!e.reading) {
          t = T(n, e);
        }
      }
      if ((r = t > 0 ? C(t, e) : null) === null) {
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
    w.prototype._read = function (t) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    w.prototype.pipe = function (t, e) {
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
      f("pipe count=%d opts=%j", i.pipesCount, e);
      var c = (!e || e.end !== false) && t !== r.stdout && t !== r.stderr ? l : w;
      function u(e, r) {
        f("onunpipe");
        if (e === n && r && r.hasUnpiped === false) {
          r.hasUnpiped = true;
          f("cleanup");
          t.removeListener("close", m);
          t.removeListener("finish", b);
          t.removeListener("drain", h);
          t.removeListener("error", y);
          t.removeListener("unpipe", u);
          n.removeListener("end", l);
          n.removeListener("end", w);
          n.removeListener("data", g);
          p = true;
          if (!!i.awaitDrain && (!t._writableState || !!t._writableState.needDrain)) {
            h();
          }
        }
      }
      function l() {
        f("onend");
        t.end();
      }
      if (i.endEmitted) {
        o.nextTick(c);
      } else {
        n.once("end", c);
      }
      t.on("unpipe", u);
      var h = function (t) {
        return function () {
          var e = t._readableState;
          f("pipeOnDrain", e.awaitDrain);
          if (e.awaitDrain) {
            e.awaitDrain--;
          }
          if (e.awaitDrain === 0 && a(t, "data")) {
            e.flowing = true;
            k(t);
          }
        };
      }(n);
      t.on("drain", h);
      var p = false;
      var d = false;
      function g(e) {
        f("ondata");
        d = false;
        if (t.write(e) === false && !d) {
          if ((i.pipesCount === 1 && i.pipes === t || i.pipesCount > 1 && j(i.pipes, t) !== -1) && !p) {
            f("false write response, pause", n._readableState.awaitDrain);
            n._readableState.awaitDrain++;
            d = true;
          }
          n.pause();
        }
      }
      function y(e) {
        f("onerror", e);
        w();
        t.removeListener("error", y);
        if (a(t, "error") === 0) {
          t.emit("error", e);
        }
      }
      function m() {
        t.removeListener("finish", b);
        w();
      }
      function b() {
        f("onfinish");
        t.removeListener("close", m);
        w();
      }
      function w() {
        f("unpipe");
        n.unpipe(t);
      }
      n.on("data", g);
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
      })(t, "error", y);
      t.once("close", m);
      t.once("finish", b);
      t.emit("pipe", n);
      if (!i.flowing) {
        f("pipe resume");
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
        var o = e.pipesCount;
        e.pipes = null;
        e.pipesCount = 0;
        e.flowing = false;
        for (var i = 0; i < o; i++) {
          r[i].emit("unpipe", this, n);
        }
        return this;
      }
      var s = j(e.pipes, t);
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
              E(this);
            }
          } else {
            o.nextTick(I, this);
          }
        }
      }
      return n;
    };
    w.prototype.addListener = w.prototype.on;
    w.prototype.resume = function () {
      var t = this._readableState;
      if (!t.flowing) {
        f("resume");
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
    w.prototype.pause = function () {
      f("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        f("pause");
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
        f("wrapped end");
        if (n.decoder && !n.ended) {
          var t = n.decoder.end();
          if (t && t.length) {
            e.push(t);
          }
        }
        e.push(null);
      });
      t.on("data", function (o) {
        if (!(f("wrapped data"), n.decoder && (o = n.decoder.write(o)), n.objectMode && o == null)) {
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
      for (var i = 0; i < m.length; i++) {
        t.on(m[i], this.emit.bind(this, m[i]));
      }
      this._read = function (e) {
        f("wrapped _read", e);
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
    w._fromList = C;
  }).call(this, n(25), n(94));
}, function (t, e, n) {
  t.exports = n(156).EventEmitter;
}, function (t, e, n) {
  "use strict";

  var r = n(157);
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
    n(352);
    e.setImmediate = typeof self != "undefined" && self.setImmediate || t !== undefined && t.setImmediate || this && this.setImmediate;
    e.clearImmediate = typeof self != "undefined" && self.clearImmediate || t !== undefined && t.clearImmediate || this && this.clearImmediate;
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  t.exports = s;
  var r = n(80);
  var o = Object.create(n(108));
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
  o.inherits = n(91);
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

  var r = n(44);
  var o = n(213);
  var i = n(103);
  var s = n(158);
  var a = n(52);
  var c = n(32);
  var u = n(84);
  var l = n(371);
  var h = n(372);
  var p = n(30);
  var f = n(29);
  var d = n(17);
  var g = n(159);
  var y = n(373);
  var m = n(105);
  var b = n(65);
  var w = d("matchAll");
  var v = m.set;
  var _ = m.getterFor("RegExp String Iterator");
  var T = RegExp.prototype;
  var E = T.exec;
  var x = "".matchAll;
  var S = !!x && !f(function () {
    "a".matchAll(/./);
  });
  var O = o(function (t, e, n, r) {
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
      return E.call(t, e);
    }(e, n);
    if (r === null) {
      return {
        value: undefined,
        done: t.done = true
      };
    } else if (t.global) {
      if (String(r[0]) == "") {
        e.lastIndex = y(n, s(e.lastIndex), t.unicode);
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
    var l = String(t);
    e = g(u, RegExp);
    if ((n = u.flags) === undefined && u instanceof RegExp && !("flags" in T)) {
      n = h.call(u);
    }
    r = n === undefined ? "" : String(n);
    o = new e(e === RegExp ? u.source : u, r);
    i = !!~r.indexOf("g");
    a = !!~r.indexOf("u");
    o.lastIndex = s(u.lastIndex);
    return new O(o, l, i, a);
  }
  r({
    target: "String",
    proto: true,
    forced: S
  }, {
    matchAll: function (t) {
      var e;
      var n;
      var r;
      var o = i(this);
      if (t != null) {
        if (l(t) && !~String(i("flags" in T ? t.flags : h.call(t))).indexOf("g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (S) {
          return x.apply(o, arguments);
        }
        if ((n = t[w]) === undefined && b && u(t) == "RegExp") {
          n = I;
        }
        if (n != null) {
          return a(n).call(t, o);
        }
      } else if (S) {
        return x.apply(o, arguments);
      }
      e = String(o);
      r = new RegExp(t, "g");
      if (b) {
        return I.call(r, e);
      } else {
        return r[w](e);
      }
    }
  });
  if (!b && !(w in T)) {
    p(T, w, I);
  }
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return i;
  });
  n(7);
  n(19);
  var r = n(0);
  var o = n(250);
  function i(t) {
    return fetch(function (t) {
      return r.f + "/mail/feed/atom?zx=" + encodeURIComponent(t);
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
}, function (t, e, n) {
  var r = n(220);
  var o = n(377);
  var i = n(378);
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
}, function (t, e, n) {
  (function () {
    "use strict";

    var t;
    var r;
    var o;
    var i;
    var s = {}.hasOwnProperty;
    r = n(168);
    t = n(335);
    o = n(344);
    i = n(246);
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
},,,,,,, function (t, e, n) {
  "use strict";

  var r = n(361);
  var o = n(4);
  var i = n(9);
  var s = n(27);
  var a = n(48);
  var c = n(365);
  var u = n(366);
  var l = n(367);
  var h = n(59);
  var p = n(368);
  var f = r.aTypedArray;
  var d = r.exportTypedArrayMethod;
  var g = o.Uint16Array;
  var y = g && g.prototype.sort;
  var m = !!y && !i(function () {
    var t = new g(2);
    t.sort(null);
    t.sort({});
  });
  var b = !!y && !i(function () {
    if (h) {
      return h < 74;
    }
    if (u) {
      return u < 67;
    }
    if (l) {
      return true;
    }
    if (p) {
      return p < 602;
    }
    var t;
    var e;
    var n = new g(516);
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
    if (b) {
      return y.call(this, t);
    }
    f(this);
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
  }, !b || m);
}, function (t, e, n) {
  "use strict";

  var r = n(77);
  var o = n(56);
  var i = n(88);
  var s = n(9);
  var a = n(18);
  var c = n(89);
  var u = n(90);
  var l = n(26);
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
    var h = a("Promise").prototype.finally;
    if (i.prototype.finally !== h) {
      l(i.prototype, "finally", h, {
        unsafe: true
      });
    }
  }
}, function (t, e, n) {
  var r;
  var o = n(10);
  var i = n(260);
  var s = n(76);
  var a = n(55);
  var c = n(87);
  var u = n(53);
  var l = n(79);
  var h = l("IE_PROTO");
  function p() {}
  function f(t) {
    return "<script>" + t + "</script>";
  }
  function d() {
    try {
      r = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t;
    var e;
    d = r ? function (t) {
      t.write(f(""));
      t.close();
      var e = t.parentWindow.Object;
      t = null;
      return e;
    }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(f("document.F=Object")), t.close(), t.F);
    for (var n = s.length; n--;) {
      delete d.prototype[s[n]];
    }
    return d();
  }
  a[h] = true;
  t.exports = Object.create || function (t, e) {
    var n;
    if (t !== null) {
      p.prototype = o(t);
      n = new p();
      p.prototype = null;
      n[h] = t;
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
  var r = n(16);
  var o = n(21);
  var i = n(10);
  var s = n(261);
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
  var r = n(86);
  var o = n(76);
  t.exports = Object.keys || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  "use strict";

  n(19);
  var r = n(26);
  var o = n(137);
  var i = n(9);
  var s = n(8);
  var a = n(20);
  var c = s("species");
  var u = RegExp.prototype;
  t.exports = function (t, e, n, l) {
    var h = s(t);
    var p = !i(function () {
      var e = {
        [h]: function () {
          return 7;
        }
      };
      return ""[t](e) != 7;
    });
    var f = p && !i(function () {
      var e = false;
      var n = /a/;
      if (t === "split") {
        (n = {}).constructor = {};
        n.constructor[c] = function () {
          return n;
        };
        n.flags = "";
        n[h] = /./[h];
      }
      n.exec = function () {
        e = true;
        return null;
      };
      n[h]("");
      return !e;
    });
    if (!p || !f || n) {
      var d = /./[h];
      var g = e(h, ""[t], function (t, e, n, r, i) {
        var s = e.exec;
        if (s === o || s === u.exec) {
          if (p && !i) {
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
      r(String.prototype, t, g[0]);
      r(u, h, g[1]);
    }
    if (l) {
      a(u[h], "sham", true);
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
  var o = n(46);
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
  var r = n(78);
  var o = Math.floor;
  var i = "".replace;
  var s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var a = /\$([$&'`]|\d{1,2})/g;
  t.exports = function (t, e, n, c, u, l) {
    var h = n + t.length;
    var p = c.length;
    var f = a;
    if (u !== undefined) {
      u = r(u);
      f = s;
    }
    return i.call(l, f, function (r, i) {
      var s;
      switch (i.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return t;
        case "`":
          return e.slice(0, n);
        case "'":
          return e.slice(h);
        case "<":
          s = u[i.slice(1, -1)];
          break;
        default:
          var a = +i;
          if (a === 0) {
            return r;
          }
          if (a > p) {
            var l = o(a / 10);
            if (l === 0) {
              return r;
            } else if (l <= p) {
              if (c[l - 1] === undefined) {
                return i.charAt(1);
              } else {
                return c[l - 1] + i.charAt(1);
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
  var r = n(33);
  var o = n(137);
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
  var o = Object.getOwnPropertyDescriptor;
  var i = o && !r.call({
    1: 2
  }, 1);
  e.f = i ? function (t) {
    var e = o(this, t);
    return !!e && e.enumerable;
  } : r;
}, function (t, e, n) {
  var r = n(29);
  var o = n(84);
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
  var r = n(14);
  var o = n(30);
  t.exports = function (t, e) {
    try {
      o(r, t, e);
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
  var o = n(97);
  var i = n(32);
  var s = n(275);
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
  var r = n(276);
  var o = n(196);
  t.exports = Object.keys || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  var r = n(37);
  var o = n(96);
  var i = n(277).indexOf;
  var s = n(145);
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
  var r = n(96);
  var o = n(158);
  var i = n(278);
  function s(t) {
    return function (e, n, s) {
      var a;
      var c = r(e);
      var u = o(c.length);
      var l = i(s, u);
      if (t && n != n) {
        while (u > l) {
          if ((a = c[l++]) != a) {
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
    includes: s(true),
    indexOf: s(false)
  };
}, function (t, e, n) {
  var r = n(144);
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
  var r = n(17);
  var o = n(63);
  var i = r("iterator");
  var s = Array.prototype;
  t.exports = function (t) {
    return t !== undefined && (o.Array === t || s[i] === t);
  };
}, function (t, e, n) {
  var r = n(198);
  t.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
}, function (t, e, n) {
  var r = n(147);
  var o = n(63);
  var i = n(17)("iterator");
  t.exports = function (t) {
    if (t != null) {
      return t[i] || t["@@iterator"] || o[r(t)];
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
  var o;
  var i;
  var s;
  var a = n(44);
  var c = n(65);
  var u = n(14);
  var l = n(62);
  var h = n(200);
  var p = n(99);
  var f = n(285);
  var d = n(143);
  var g = n(149);
  var y = n(287);
  var m = n(45);
  var b = n(52);
  var w = n(288);
  var v = n(201);
  var _ = n(98);
  var T = n(289);
  var E = n(159);
  var x = n(202).set;
  var S = n(290);
  var O = n(204);
  var I = n(292);
  var A = n(81);
  var k = n(100);
  var C = n(105);
  var D = n(192);
  var N = n(17);
  var j = n(294);
  var P = n(150);
  var L = n(199);
  var R = N("species");
  var M = "Promise";
  var B = C.get;
  var U = C.set;
  var F = C.getterFor(M);
  var q = h && h.prototype;
  var V = h;
  var W = q;
  var z = u.TypeError;
  var $ = u.document;
  var G = u.process;
  var H = A.f;
  var Y = H;
  var K = !!$ && !!$.createEvent && !!u.dispatchEvent;
  var X = typeof PromiseRejectionEvent == "function";
  var J = false;
  var Q = D(M, function () {
    var t = v(V);
    var e = t !== String(V);
    if (!e && L === 66) {
      return true;
    }
    if (c && !W.finally) {
      return true;
    }
    if (L >= 51 && /native code/.test(t)) {
      return false;
    }
    var n = new V(function (t) {
      t(1);
    });
    function r(t) {
      t(function () {}, function () {});
    }
    (n.constructor = {})[R] = r;
    return !(J = n.then(function () {}) instanceof r) || !e && j && !X;
  });
  var Z = Q || !T(function (t) {
    V.all(t).catch(function () {});
  });
  function tt(t) {
    var e;
    return !!m(t) && typeof (e = t.then) == "function" && e;
  }
  function et(t, e) {
    if (!t.notified) {
      t.notified = true;
      var n = t.reactions;
      S(function () {
        var r = t.value;
        for (var o = t.state == 1, i = 0; n.length > i;) {
          var s;
          var a;
          var c;
          var u = n[i++];
          var l = o ? u.ok : u.fail;
          var h = u.resolve;
          var p = u.reject;
          var f = u.domain;
          try {
            if (l) {
              if (!o) {
                if (t.rejection === 2) {
                  it(t);
                }
                t.rejection = 1;
              }
              if (l === true) {
                s = r;
              } else {
                if (f) {
                  f.enter();
                }
                s = l(r);
                if (f) {
                  f.exit();
                  c = true;
                }
              }
              if (s === u.promise) {
                p(z("Promise-chain cycle"));
              } else if (a = tt(s)) {
                a.call(s, h, p);
              } else {
                h(s);
              }
            } else {
              p(r);
            }
          } catch (t) {
            if (f && !c) {
              f.exit();
            }
            p(t);
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
    if (K) {
      (r = $.createEvent("Event")).promise = e;
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
    x.call(u, function () {
      var e;
      var n = t.facade;
      var r = t.value;
      if (ot(t) && (e = k(function () {
        if (P) {
          G.emit("unhandledRejection", r, n);
        } else {
          nt("unhandledrejection", n, r);
        }
      }), t.rejection = P || ot(t) ? 2 : 1, e.error)) {
        throw e.value;
      }
    });
  }
  function ot(t) {
    return t.rejection !== 1 && !t.parent;
  }
  function it(t) {
    x.call(u, function () {
      var e = t.facade;
      if (P) {
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
          S(function () {
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
  if (Q && (W = (V = function (t) {
    w(this, V, M);
    b(t);
    r.call(this);
    var e = B(this);
    try {
      t(st(ct, e), st(at, e));
    } catch (t) {
      at(e, t);
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
  }).prototype = f(W, {
    then: function (t, e) {
      var n = F(this);
      var r = H(E(this, V));
      r.ok = typeof t != "function" || t;
      r.fail = typeof e == "function" && e;
      r.domain = P ? G.domain : undefined;
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
    var e = B(t);
    this.promise = t;
    this.resolve = st(ct, e);
    this.reject = st(at, e);
  }, A.f = H = function (t) {
    if (t === V || t === i) {
      return new o(t);
    } else {
      return Y(t);
    }
  }, !c && typeof h == "function" && q !== Object.prototype)) {
    s = q.then;
    if (!J) {
      p(q, "then", function (t, e) {
        var n = this;
        return new V(function (t, e) {
          s.call(n, t, e);
        }).then(t, e);
      }, {
        unsafe: true
      });
      p(q, "catch", W.catch, {
        unsafe: true
      });
    }
    try {
      delete q.constructor;
    } catch (t) {}
    if (d) {
      d(q, W);
    }
  }
  a({
    global: true,
    wrap: true,
    forced: Q
  }, {
    Promise: V
  });
  g(V, M, false, true);
  y(M);
  i = l(M);
  a({
    target: M,
    stat: true,
    forced: Q
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
    forced: c || Q
  }, {
    resolve: function (t) {
      return O(c && this === i ? V : this, t);
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
      var i = k(function () {
        var n = b(e.resolve);
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
      var o = k(function () {
        var o = b(e.resolve);
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
  var r = n(99);
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

  var r = n(148);
  var o = n(147);
  t.exports = r ? {}.toString : function () {
    return "[object " + o(this) + "]";
  };
}, function (t, e, n) {
  "use strict";

  var r = n(62);
  var o = n(97);
  var i = n(17);
  var s = n(61);
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
  var r = n(17)("iterator");
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
  var l;
  var h = n(14);
  var p = n(188).f;
  var f = n(202).set;
  var d = n(203);
  var g = n(291);
  var y = n(150);
  var m = h.MutationObserver || h.WebKitMutationObserver;
  var b = h.document;
  var w = h.process;
  var v = h.Promise;
  var _ = p(h, "queueMicrotask");
  var T = _ && _.value;
  if (!T) {
    r = function () {
      var t;
      var e;
      for (y && (t = w.domain) && t.exit(); o;) {
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
    if (d || y || g || !m || !b) {
      if (v && v.resolve) {
        (u = v.resolve(undefined)).constructor = v;
        l = u.then;
        s = function () {
          l.call(u, r);
        };
      } else {
        s = y ? function () {
          w.nextTick(r);
        } : function () {
          f.call(h, r);
        };
      }
    } else {
      a = true;
      c = b.createTextNode("");
      new m(r).observe(c, {
        characterData: true
      });
      s = function () {
        c.data = a = !a;
      };
    }
  }
  t.exports = T || function (t) {
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
  var o = n(201);
  var i = r.WeakMap;
  t.exports = typeof i == "function" && /native code/.test(o(i));
}, function (t, e) {
  t.exports = typeof window == "object";
}, function (t, e, n) {
  "use strict";

  var r = n(44);
  var o = n(65);
  var i = n(200);
  var s = n(29);
  var a = n(62);
  var c = n(159);
  var u = n(204);
  var l = n(99);
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
    var h = a("Promise").prototype.finally;
    if (i.prototype.finally !== h) {
      l(i.prototype, "finally", h, {
        unsafe: true
      });
    }
  }
}, function (t, e, n) {
  "use strict";

  var r = n(212).charAt;
  var o = n(105);
  var i = n(207);
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
  n(298);
  var r = n(300);
  var o = n(14);
  var i = n(147);
  var s = n(30);
  var a = n(63);
  var c = n(17)("toStringTag");
  for (var u in r) {
    var l = o[u];
    var h = l && l.prototype;
    if (h && i(h) !== c) {
      s(h, c, u);
    }
    a[u] = a.Array;
  }
}, function (t, e, n) {
  "use strict";

  var r = n(96);
  var o = n(299);
  var i = n(63);
  var s = n(105);
  var a = n(207);
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
  n(187);
}, function (t, e, n) {
  n(205);
}, function (t, e, n) {
  "use strict";

  var r = n(44);
  var o = n(81);
  var i = n(100);
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
    return new Promise(function (e, o) {
      var i = document.createElement("script");
      var s = t.url;
      if (t.params) {
        var a = r(t.params);
        if (a) {
          s += (s.indexOf("?") >= 0 ? "&" : "?") + a;
        }
      }
      function c() {
        if (i) {
          i.onload = i.onreadystatechange = i.onerror = null;
          if (i.parentNode) {
            i.parentNode.removeChild(i);
          }
          i = null;
        }
      }
      i.async = true;
      var u = "axiosJsonpCallback" + n++;
      var l = window[u];
      var h = false;
      window[u] = function (t) {
        if (!(window[u] = l, h)) {
          e({
            data: t,
            status: 200
          });
        }
      };
      var p = {
        _: new Date().getTime()
      };
      p[t.callbackParamName || "callback"] = u;
      s += (s.indexOf("?") >= 0 ? "&" : "?") + r(p);
      i.onload = i.onreadystatechange = function () {
        if (!i.readyState || !!/loaded|complete/.test(i.readyState)) {
          c();
        }
      };
      i.onerror = function () {
        c();
        o(new Error("Network Error"));
      };
      if (t.cancelToken) {
        t.cancelToken.promise.then(function (t) {
          if (i) {
            h = true;
            o(t);
          }
        });
      }
      i.src = s;
      document.head.appendChild(i);
    });
  };
},,, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return c;
  });
  n.d(e, "b", function () {
    return u;
  });
  n(7);
  var r = n(2);
  var o = n(161);
  function i(t, e, n, r) {
    var o;
    var i = arguments.length;
    var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(t, e, n, r);
    } else {
      for (var a = t.length - 1; a >= 0; a--) {
        if (o = t[a]) {
          s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(e, n, s);
    }
    return s;
  }
  const s = {};
  const a = new Set();
  class c {
    constructor() {
      this.firstSync = false;
      this.syncTabTime = 0;
      this._lockRollback = false;
      this.isRollbackFromStorage = false;
      this.backupFileKey = "";
      this.backupValueKeys = [];
      this.rollbackFromStorage = () => null;
      this.stopToStorageReaction = () => {};
      this.stopAutoBackupReaction = () => {};
      this.convertBackupEquals = t => t;
    }
    async initSyncStore(t, e, n = {}, i = 20) {
      const a = t.key;
      if (s[a]) {
        throw new Error("storage key 重复");
      }
      s[a] = this;
      if (e.length !== 0) {
        this.rollbackFromStorage = async () => {
          let o = false;
          const s = Object.create(null);
          Object.keys(n).forEach(t => {
            if (e.includes(t)) {
              s[t] = n[t];
            }
          });
          try {
            const {
              data: n,
              error: r
            } = await t.read();
            if (r) {
              throw r;
            }
            const i = n ? Object.keys(n) : [];
            if (n) {
              i.forEach(t => {
                if (e.includes(t)) {
                  s[t] = n[t];
                }
              });
            }
            if (!this.firstSync && (!n || !!e.some(t => !i.includes(t)))) {
              o = true;
            }
          } catch (t) {
            console.error("storageSync", t);
          }
          this.isRollbackFromStorage = true;
          this.stopToStorageReaction();
          this.stopAutoBackupReaction();
          Object(r.i)(() => {
            for (const t in s) {
              this[t] = s[t];
            }
            this.firstSync ||= true;
          });
          this.restartAutoBackupReaction();
          this.stopToStorageReaction = Object(r.h)(() => {
            const t = {};
            e.forEach(e => {
              t[e] = Object(r.j)(this[e]);
            });
            return t;
          }, e => {
            this.isRollbackFromStorage = false;
            t.create(e).then(() => {
              Object(r.i)(() => {
                this.syncTabTime = Date.now();
              });
            });
          }, {
            equals: r.d.structural,
            delay: i,
            fireImmediately: o
          });
        };
        await this.rollbackFromStorage();
        Object(r.h)(() => this.syncTabTime, t => {
          if (t) {
            o.slave.sendMessage("tabs-sync", a);
          }
        }, {
          delay: 60
        });
      }
    }
    restartAutoBackupReaction(t = false) {
      this.stopAutoBackupReaction();
      this.stopAutoBackupReaction = Object(r.h)(() => {
        const t = {};
        this.backupValueKeys.forEach(e => {
          t[e] = Object(r.j)(this[e]);
        });
        return t;
      }, t => {
        (async (t, e) => {
          try {
            const {
              syncStore: r
            } = await Promise.all([n.e(8), n.e(7)]).then(n.bind(null, 602));
            r.pushAutoBackupPipe({
              [t]: e
            });
          } catch (t) {}
        })(this.backupFileKey, t).catch();
      }, {
        fireImmediately: t,
        equals: (t, e) => {
          const n = this.convertBackupEquals(t);
          const o = this.convertBackupEquals(e);
          return r.d.structural(n, o);
        },
        delay: 40
      });
    }
    initAutoBackup(t, e) {
      if (a.has(t)) {
        throw new Error("file key 重复");
      }
      a.add(t);
      if (e.length !== 0) {
        this.backupFileKey = t;
        this.backupValueKeys = [...e];
      }
    }
    async getBackupData() {
      const t = {};
      this.backupValueKeys.forEach(e => {
        t[e] = Object(r.j)(this[e]);
      });
      return t;
    }
  }
  i([r.g], c.prototype, "firstSync", undefined);
  i([r.g], c.prototype, "syncTabTime", undefined);
  i([r.b], c.prototype, "initSyncStore", null);
  const u = t => {
    const e = s[t];
    if (!(e == null ? undefined : e._lockRollback)) {
      e.rollbackFromStorage();
    }
  };
},, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return i;
  });
  n(7);
  var r = n(0);
  var o = n(22);
  const i = new class {
    constructor() {
      this.ga = null;
      this.localKey = "analytics-status-time";
      this.gap = 43200000;
      this.getPermission = async () => {
        let t = false;
        if (r.n) {
          try {
            const {
              privacyStore: e
            } = await Promise.all([n.e(8), n.e(7), n.e(40)]).then(n.bind(null, 601));
            if (e.collectData !== 1) {
              t = false;
            }
          } catch (e) {
            t = false;
          }
        }
        return t;
      };
      this.sendPageView = async t => {
        if (!(await this.getPermission())) {
          return;
        }
        const e = this.ga.getPageviewUrl(t);
        o.b.sendLog(e);
      };
      this.sendEvent = async (t, e = false) => {
        if (await this.getPermission()) {
          Object.keys(t).forEach(n => {
            const r = t[n];
            if (typeof r == "object") {
              Object.keys(r).forEach(t => {
                const i = r[t];
                const s = this.ga.getEventUrl({
                  category: n,
                  action: t,
                  label: String(i),
                  nonInteraction: e
                });
                o.b.sendLog(s);
              });
            } else {
              const t = this.ga.getEventUrl({
                category: n,
                action: String(r),
                nonInteraction: e
              });
              o.b.sendLog(t);
            }
          });
        }
      };
    }
    async sendStatus(t) {
      try {
        this.sendEvent(t, true);
        localStorage.setItem(this.localKey, "" + Date.now());
      } catch (t) {}
    }
  }();
}, function (t, e, n) {
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
    const e = o(t);
    const n = i(t, e);
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
  const o = t => {
    const {
      searchScale: e,
      innerHeight: n,
      innerWidth: r,
      miniMode: o,
      topBookmark: i,
      topUseful: s,
      mainRatio: a
    } = t;
    let c = 0;
    if (s) {
      c += 36;
    }
    if (i) {
      c += 36;
    }
    const u = n - c;
    const l = r - r * 0.2;
    let h = r;
    let p = h * 9 / 16;
    if (p > u) {
      p = u;
      h = p * 16 / 9;
    }
    const f = h * (0.575 - Math.max(Math.min(720, h - 1200), 0) * 0.1818 / 720);
    const d = {
      width: f * e,
      height: p * (0.0963 - Math.max(Math.min(405, p - 675), 0) * 0.0296 / 405) * e
    };
    if (d.width > l) {
      d.height = l / d.width * d.height;
      d.width = l;
    }
    const g = {
      width: d.width * a,
      height: d.height * a
    };
    let y = null;
    y = o ? -0.3 : -0.06;
    const m = d.width / f * a;
    const b = Math.floor(y * u * m) + "px";
    const w = Math.floor(g.height * 0.775) + "px";
    return {
      width: Math.floor(g.width) + "px",
      height: Math.floor(g.height) + "px",
      searchRatio: Number((g.width / 625).toFixed(2)),
      marginTop: b,
      marginBottom: w,
      appContentWidth: l,
      appContentHeight: u,
      searcherSizeWithRatio: d
    };
  };
  const i = (t, e) => {
    const {
      row: n,
      col: r,
      rowGap: o,
      colGap: i,
      iconScale: s,
      innerWidth: a,
      mainRatio: c,
      fontSize: u
    } = t;
    let l = a;
    if (l < 1200) {
      l = 1200;
    } else if (l > 1920) {
      l = 1920;
    }
    const {
      appContentHeight: h,
      appContentWidth: p,
      searcherSizeWithRatio: f
    } = e;
    const d = p;
    const g = h * 0.8 - f.height * 2.451;
    const y = 1 + (1920 - l) * 0.5 / 720;
    const m = d / r;
    const b = g / n;
    const w = Math.min(Math.min(m, b) * s * y, m, b);
    const v = (g - n * w) / n * o / 2;
    const _ = r * (w + (d - r * w) / r * i / 2 * 2);
    let T = Math.min(Math.ceil(_ * c), a);
    let E = n * (w + v * 2) * c;
    const x = w * c;
    const S = Math.max(u * c, 12) * 1.3 + x * 0.9 * 0.08;
    const O = (25 + S) * 1.2;
    if (T < r * O) {
      T = r * O;
    }
    if (E < n * O) {
      E = n * O;
    }
    let I = x * 0.9 - S - 1;
    if (I < 25) {
      I = 25;
    }
    const A = a * 0.1 * c;
    return {
      width: Math.floor(I) + "px",
      miniIconPadding: Math.floor(I / 7 + 4) + "px",
      boxWidth: Math.ceil(T) + "px",
      boxHeight: Math.floor(E) + "px",
      iconOneHeight: Math.floor(E / n) + "px",
      iconRatio: Number((I / 106).toFixed(2)),
      iconsMargin: Math.floor(A) + "px"
    };
  };
},, function (t, e, n) {
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
}, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "uploadFile", function () {
    return a;
  });
  n(7);
  var r = n(0);
  var o = n(3);
  const i = ["infinity-notes-img", "custom-wallpaper-library"];
  const s = {};
  const a = async (t, e, n) => {
    let a;
    try {
      if (s[n] && s[n].endTime > Date.now()) {
        a = s[n];
      } else {
        let t = null;
        t = i.includes(n) ? await o.a.get(r.y + "/upload/public_private_token", {
          type: n
        }, {
          _auth: true
        }) : await o.a.get(r.y + "/upload/token", {
          type: n
        });
        if (t.code !== 0 || !t.data.token) {
          return {
            error: t
          };
        }
        a = t.data;
        a.endTime = Date.now() + (a.expires - 600) * 1000;
        s[n] = a;
      }
      const {
        token: c,
        prefix: u
      } = a;
      const l = new FormData();
      l.append("token", c);
      l.append("key", u + e);
      l.append("file", t, e);
      const {
        key: h,
        url: p
      } = await o.a.post(a.host, l, {
        timeout: 180000,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return {
        data: {
          url: p,
          key: h
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
  var o = n(226);
  var i = n(319);
  var s = n(232);
  function a(t) {
    var e = new i(t);
    var n = o(i.prototype.request, e);
    r.extend(n, i.prototype, e);
    r.extend(n, e);
    return n;
  }
  var c = a(n(229));
  c.Axios = i;
  c.create = function (t) {
    return a(s(c.defaults, t));
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
  var o = n(227);
  var i = n(320);
  var s = n(321);
  var a = n(232);
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

  var r = n(31);
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

  var r = n(31);
  var o = n(322);
  var i = n(228);
  var s = n(229);
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

  var r = n(327);
  var o = n(328);
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

  var r = n(31);
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

  var r = n(31);
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

  var r = n(31);
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

  var r = n(233);
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
  "use strict";

  var r;
  n.d(e, "a", function () {
    return r;
  });
  n.d(e, "b", function () {
    return o;
  });
  (function (t) {
    t.openAiModal = "master:openIframeAi";
    t.authToken = "master:authToken";
    t.needLogin = "slave:needLogin";
    t.openLogin = "slave:openLogin";
    t.closeAiModal = "slave:closeIframeAi";
    t.logout = "master:logout";
    t.needBindPhone = "slave:needBindPhone";
    t.updateIframeData = "master:updateIframeData";
  })(r ||= {});
  const o = new class {
    constructor() {
      this.postIframeMessage = t => {
        if (this.$chatai) {
          this.$chatai.contentWindow.postMessage(t, "*");
        }
      };
      this.updateIframe = t => {
        this.$chatai = t;
      };
    }
  }();
}, function (t, e, n) {
  (function () {
    "use strict";

    var t;
    var r;
    var o;
    var i;
    var s;
    var a = {}.hasOwnProperty;
    t = n(336);
    r = n(168).defaults;
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
        var l;
        var h;
        n = this.options.attrkey;
        o = this.options.charkey;
        if (Object.keys(e).length === 1 && this.options.rootName === r[0.2].rootName) {
          e = e[l = Object.keys(e)[0]];
        } else {
          l = this.options.rootName;
        }
        h = this;
        c = function (t, e) {
          var r;
          var u;
          var l;
          var p;
          var f;
          var d;
          if (typeof e != "object") {
            if (h.options.cdata && i(e)) {
              t.raw(s(e));
            } else {
              t.txt(e);
            }
          } else if (Array.isArray(e)) {
            for (p in e) {
              if (a.call(e, p)) {
                for (f in u = e[p]) {
                  l = u[f];
                  t = c(t.ele(f), l).up();
                }
              }
            }
          } else {
            for (f in e) {
              if (a.call(e, f)) {
                u = e[f];
                if (f === n) {
                  if (typeof u == "object") {
                    for (r in u) {
                      d = u[r];
                      t = t.att(r, d);
                    }
                  }
                } else if (f === o) {
                  t = h.options.cdata && i(u) ? t.raw(s(u)) : t.txt(u);
                } else if (Array.isArray(u)) {
                  for (p in u) {
                    if (a.call(u, p)) {
                      t = typeof (l = u[p]) == "string" ? h.options.cdata && i(l) ? t.ele(f).raw(s(l)).up() : t.ele(f, l).up() : c(t.ele(f), l).up();
                    }
                  }
                } else if (typeof u == "object") {
                  t = c(t.ele(f), u).up();
                } else if (typeof u == "string" && h.options.cdata && i(u)) {
                  t = t.ele(f).raw(s(u)).up();
                } else {
                  if (u == null) {
                    u = "";
                  }
                  t = t.ele(f, u.toString()).up();
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
    var o;
    var i;
    var s;
    var a;
    var c;
    var u;
    var l;
    var h;
    h = n(57);
    u = h.assign;
    l = h.isFunction;
    o = n(234);
    i = n(235);
    s = n(342);
    c = n(182);
    a = n(343);
    e = n(15);
    r = n(155);
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
      if (l(t)) {
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
    var o;
    var i;
    var s;
    var a;
    var c;
    var u;
    var l;
    var h;
    var p;
    var f;
    var d;
    var g;
    var y;
    var m;
    var b;
    var w;
    var v;
    var _;
    var T;
    var E;
    var x;
    var S = {}.hasOwnProperty;
    x = n(57);
    T = x.isObject;
    _ = x.isFunction;
    E = x.isPlainObject;
    v = x.getValue;
    e = n(15);
    f = n(235);
    d = n(169);
    i = n(171);
    s = n(172);
    y = n(179);
    w = n(180);
    g = n(181);
    h = n(173);
    p = n(174);
    a = n(175);
    u = n(176);
    c = n(177);
    l = n(178);
    o = n(236);
    b = n(238);
    m = n(182);
    r = n(155);
    t.exports = function () {
      function t(t, n, r) {
        var o;
        this.name = "?xml";
        this.type = e.Document;
        t ||= {};
        o = {};
        if (t.writer) {
          if (E(t.writer)) {
            o = t.writer;
            t.writer = new m();
          }
        } else {
          t.writer = new m();
        }
        this.options = t;
        this.writer = t.writer;
        this.writerOptions = this.writer.filterOptions(o);
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
              if (S.call(c, r)) {
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
        t = v(t);
        if (e == null) {
          e = {};
        }
        e = v(e);
        if (!T(e)) {
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
        } else if (Array.isArray(t) || T(t) || _(t)) {
          a = this.options.noValidation;
          this.options.noValidation = true;
          (u = new f(this.options).element("TEMP_ROOT")).element(t);
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
          t = v(t);
        }
        if (T(t)) {
          for (n in t) {
            if (S.call(t, n)) {
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
        e = new w(this, t);
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
        e = new y(this, t);
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
          t = v(t);
        }
        if (e != null) {
          e = v(e);
        }
        if (Array.isArray(t)) {
          n = 0;
          i = t.length;
          for (; n < i; n++) {
            r = t[n];
            this.instruction(r);
          }
        } else if (T(t)) {
          for (r in t) {
            if (S.call(t, r)) {
              o = t[r];
              this.instruction(r, o);
            }
          }
        } else {
          if (_(e)) {
            e = e.apply();
          }
          s = new g(this, t, e);
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
        r = new h(this, t, e, n);
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
        this.currentNode = new p(this, e, n);
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
              if (S.call(s, i)) {
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
    e = n(15);
    o = n(239);
    r = n(155);
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
        var l;
        r = o = 0;
        s = (c = t.children).length;
        for (; o < s; r = ++o) {
          (n = c[r]).isLastRootNode = r === t.children.length - 1;
        }
        e = this.filterOptions(e);
        l = [];
        i = 0;
        a = (u = t.children).length;
        for (; i < a; i++) {
          n = u[i];
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
        var l;
        var h;
        var p;
        var f;
        var d;
        o ||= 0;
        this.openNode(t, n, o);
        n.state = r.OpenTag;
        this.stream.write(this.indent(t, n, o) + "<" + t.name);
        for (p in f = t.attribs) {
          if (i.call(f, p)) {
            s = f[p];
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
          l = 0;
          h = (d = t.children).length;
          for (; l < h; l++) {
            a = d[l];
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
    var l;
    function h(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    var p = {}.hasOwnProperty;
    u = n(345);
    i = n(156);
    t = n(360);
    c = n(246);
    l = n(244).setImmediate;
    r = n(168).defaults;
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
        this.parseStringPromise = h(this.parseStringPromise, this);
        this.parseString = h(this.parseString, this);
        this.reset = h(this.reset, this);
        this.assignOrPush = h(this.assignOrPush, this);
        this.processAsync = h(this.processAsync, this);
        if (!(this instanceof e.Parser)) {
          return new e.Parser(t);
        }
        this.options = {};
        for (n in o = r[0.2]) {
          if (p.call(o, n)) {
            i = o[n];
            this.options[n] = i;
          }
        }
        for (n in t) {
          if (p.call(t, n)) {
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
          if (p.call(e, n)) {
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
            var l;
            var h;
            (u = {})[e] = "";
            if (!n.options.ignoreAttrs) {
              for (s in h = i.attributes) {
                if (p.call(h, s)) {
                  if (!(t in u) && !n.options.mergeAttrs) {
                    u[t] = {};
                  }
                  c = n.options.attrValueProcessors ? a(n.options.attrValueProcessors, i.attributes[s], s) : i.attributes[s];
                  l = n.options.attrNameProcessors ? a(n.options.attrNameProcessors, s) : s;
                  if (n.options.mergeAttrs) {
                    n.assignOrPush(u, l, c);
                  } else {
                    o(u[t], l, c);
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
            var l;
            var h;
            var f;
            var d;
            var g;
            var y;
            h = r.pop();
            l = h["#name"];
            if (!t.options.explicitChildren || !t.options.preserveChildrenOrder) {
              delete h["#name"];
            }
            if (h.cdata === true) {
              n = h.cdata;
              delete h.cdata;
            }
            g = r[r.length - 1];
            if (h[e].match(/^\s*$/) && !n) {
              i = h[e];
              delete h[e];
            } else {
              if (t.options.trim) {
                h[e] = h[e].trim();
              }
              if (t.options.normalize) {
                h[e] = h[e].replace(/\s{2,}/g, " ").trim();
              }
              h[e] = t.options.valueProcessors ? a(t.options.valueProcessors, h[e], l) : h[e];
              if (Object.keys(h).length === 1 && e in h && !t.EXPLICIT_CHARKEY) {
                h = h[e];
              }
            }
            if (s(h)) {
              h = typeof t.options.emptyTag == "function" ? t.options.emptyTag() : t.options.emptyTag !== "" ? t.options.emptyTag : i;
            }
            if (t.options.validator != null) {
              y = "/" + function () {
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
                  h = t.options.validator(y, g && g[l], h);
                } catch (n) {
                  e = n;
                  return t.emit("error", e);
                }
              })();
            }
            if (t.options.explicitChildren && !t.options.mergeAttrs && typeof h == "object") {
              if (t.options.preserveChildrenOrder) {
                if (g) {
                  g[t.options.childkey] = g[t.options.childkey] || [];
                  f = {};
                  for (c in h) {
                    if (p.call(h, c)) {
                      o(f, c, h[c]);
                    }
                  }
                  g[t.options.childkey].push(f);
                  delete h["#name"];
                  if (Object.keys(h).length === 1 && e in h && !t.EXPLICIT_CHARKEY) {
                    h = h[e];
                  }
                }
              } else {
                u = {};
                if (t.options.attrkey in h) {
                  u[t.options.attrkey] = h[t.options.attrkey];
                  delete h[t.options.attrkey];
                }
                if (!t.options.charsAsChildren && t.options.charkey in h) {
                  u[t.options.charkey] = h[t.options.charkey];
                  delete h[t.options.charkey];
                }
                if (Object.getOwnPropertyNames(h).length > 0) {
                  u[t.options.childkey] = h;
                }
                h = u;
              }
            }
            if (r.length > 0) {
              return t.assignOrPush(g, l, h);
            } else {
              if (t.options.explicitRoot) {
                d = h;
                o(h = {}, l, d);
              }
              t.resultObject = h;
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
        this.state = T.BEGIN;
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
        x(this, "onready");
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
          k(this);
        },
        write: function (t) {
          if (this.error) {
            throw this.error;
          }
          if (this.closed) {
            return A(this, "Cannot write after close. Assign an onready handler.");
          }
          if (t === null) {
            return k(this);
          }
          if (typeof t == "object") {
            t = t.toString();
          }
          var n = 0;
          var r = "";
          while (r = B(t, n++), this.c = r, r) {
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
              case T.BEGIN:
                this.state = T.BEGIN_WHITESPACE;
                if (r === "﻿") {
                  continue;
                }
                M(this, r);
                continue;
              case T.BEGIN_WHITESPACE:
                M(this, r);
                continue;
              case T.TEXT:
                if (this.sawRoot && !this.closedRoot) {
                  var i = n - 1;
                  while (r && r !== "<" && r !== "&") {
                    if ((r = B(t, n++)) && this.trackPosition) {
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
                    C(this, "Text data outside of root node.");
                  }
                  if (r === "&") {
                    this.state = T.TEXT_ENTITY;
                  } else {
                    this.textNode += r;
                  }
                } else {
                  this.state = T.OPEN_WAKA;
                  this.startTagPosition = this.position;
                }
                continue;
              case T.SCRIPT:
                if (r === "<") {
                  this.state = T.SCRIPT_ENDING;
                } else {
                  this.script += r;
                }
                continue;
              case T.SCRIPT_ENDING:
                if (r === "/") {
                  this.state = T.CLOSE_TAG;
                } else {
                  this.script += "<" + r;
                  this.state = T.SCRIPT;
                }
                continue;
              case T.OPEN_WAKA:
                if (r === "!") {
                  this.state = T.SGML_DECL;
                  this.sgmlDecl = "";
                } else if (d(r)) ;else if (m(l, r)) {
                  this.state = T.OPEN_TAG;
                  this.tagName = r;
                } else if (r === "/") {
                  this.state = T.CLOSE_TAG;
                  this.tagName = "";
                } else if (r === "?") {
                  this.state = T.PROC_INST;
                  this.procInstName = this.procInstBody = "";
                } else {
                  C(this, "Unencoded <");
                  if (this.startTagPosition + 1 < this.position) {
                    var s = this.position - this.startTagPosition;
                    r = new Array(s).join(" ") + r;
                  }
                  this.textNode += "<" + r;
                  this.state = T.TEXT;
                }
                continue;
              case T.SGML_DECL:
                if (this.sgmlDecl + r === "--") {
                  this.state = T.COMMENT;
                  this.comment = "";
                  this.sgmlDecl = "";
                  continue;
                }
                if (this.doctype && this.doctype !== true && this.sgmlDecl) {
                  this.state = T.DOCTYPE_DTD;
                  this.doctype += "<!" + this.sgmlDecl + r;
                  this.sgmlDecl = "";
                } else if ((this.sgmlDecl + r).toUpperCase() === "[CDATA[") {
                  S(this, "onopencdata");
                  this.state = T.CDATA;
                  this.sgmlDecl = "";
                  this.cdata = "";
                } else if ((this.sgmlDecl + r).toUpperCase() === "DOCTYPE") {
                  this.state = T.DOCTYPE;
                  if (this.doctype || this.sawRoot) {
                    C(this, "Inappropriately located doctype declaration");
                  }
                  this.doctype = "";
                  this.sgmlDecl = "";
                } else if (r === ">") {
                  S(this, "onsgmldeclaration", this.sgmlDecl);
                  this.sgmlDecl = "";
                  this.state = T.TEXT;
                } else if (g(r)) {
                  this.state = T.SGML_DECL_QUOTED;
                  this.sgmlDecl += r;
                } else {
                  this.sgmlDecl += r;
                }
                continue;
              case T.SGML_DECL_QUOTED:
                if (r === this.q) {
                  this.state = T.SGML_DECL;
                  this.q = "";
                }
                this.sgmlDecl += r;
                continue;
              case T.DOCTYPE:
                if (r === ">") {
                  this.state = T.TEXT;
                  S(this, "ondoctype", this.doctype);
                  this.doctype = true;
                } else {
                  this.doctype += r;
                  if (r === "[") {
                    this.state = T.DOCTYPE_DTD;
                  } else if (g(r)) {
                    this.state = T.DOCTYPE_QUOTED;
                    this.q = r;
                  }
                }
                continue;
              case T.DOCTYPE_QUOTED:
                this.doctype += r;
                if (r === this.q) {
                  this.q = "";
                  this.state = T.DOCTYPE;
                }
                continue;
              case T.DOCTYPE_DTD:
                if (r === "]") {
                  this.doctype += r;
                  this.state = T.DOCTYPE;
                } else if (r === "<") {
                  this.state = T.OPEN_WAKA;
                  this.startTagPosition = this.position;
                } else if (g(r)) {
                  this.doctype += r;
                  this.state = T.DOCTYPE_DTD_QUOTED;
                  this.q = r;
                } else {
                  this.doctype += r;
                }
                continue;
              case T.DOCTYPE_DTD_QUOTED:
                this.doctype += r;
                if (r === this.q) {
                  this.state = T.DOCTYPE_DTD;
                  this.q = "";
                }
                continue;
              case T.COMMENT:
                if (r === "-") {
                  this.state = T.COMMENT_ENDING;
                } else {
                  this.comment += r;
                }
                continue;
              case T.COMMENT_ENDING:
                if (r === "-") {
                  this.state = T.COMMENT_ENDED;
                  this.comment = I(this.opt, this.comment);
                  if (this.comment) {
                    S(this, "oncomment", this.comment);
                  }
                  this.comment = "";
                } else {
                  this.comment += "-" + r;
                  this.state = T.COMMENT;
                }
                continue;
              case T.COMMENT_ENDED:
                if (r !== ">") {
                  C(this, "Malformed comment");
                  this.comment += "--" + r;
                  this.state = T.COMMENT;
                } else if (this.doctype && this.doctype !== true) {
                  this.state = T.DOCTYPE_DTD;
                } else {
                  this.state = T.TEXT;
                }
                continue;
              case T.CDATA:
                if (r === "]") {
                  this.state = T.CDATA_ENDING;
                } else {
                  this.cdata += r;
                }
                continue;
              case T.CDATA_ENDING:
                if (r === "]") {
                  this.state = T.CDATA_ENDING_2;
                } else {
                  this.cdata += "]" + r;
                  this.state = T.CDATA;
                }
                continue;
              case T.CDATA_ENDING_2:
                if (r === ">") {
                  if (this.cdata) {
                    S(this, "oncdata", this.cdata);
                  }
                  S(this, "onclosecdata");
                  this.cdata = "";
                  this.state = T.TEXT;
                } else if (r === "]") {
                  this.cdata += "]";
                } else {
                  this.cdata += "]]" + r;
                  this.state = T.CDATA;
                }
                continue;
              case T.PROC_INST:
                if (r === "?") {
                  this.state = T.PROC_INST_ENDING;
                } else if (d(r)) {
                  this.state = T.PROC_INST_BODY;
                } else {
                  this.procInstName += r;
                }
                continue;
              case T.PROC_INST_BODY:
                if (!this.procInstBody && d(r)) {
                  continue;
                }
                if (r === "?") {
                  this.state = T.PROC_INST_ENDING;
                } else {
                  this.procInstBody += r;
                }
                continue;
              case T.PROC_INST_ENDING:
                if (r === ">") {
                  S(this, "onprocessinginstruction", {
                    name: this.procInstName,
                    body: this.procInstBody
                  });
                  this.procInstName = this.procInstBody = "";
                  this.state = T.TEXT;
                } else {
                  this.procInstBody += "?" + r;
                  this.state = T.PROC_INST_BODY;
                }
                continue;
              case T.OPEN_TAG:
                if (m(h, r)) {
                  this.tagName += r;
                } else {
                  D(this);
                  if (r === ">") {
                    P(this);
                  } else if (r === "/") {
                    this.state = T.OPEN_TAG_SLASH;
                  } else {
                    if (!d(r)) {
                      C(this, "Invalid character in tag name");
                    }
                    this.state = T.ATTRIB;
                  }
                }
                continue;
              case T.OPEN_TAG_SLASH:
                if (r === ">") {
                  P(this, true);
                  L(this);
                } else {
                  C(this, "Forward-slash in opening tag not followed by >");
                  this.state = T.ATTRIB;
                }
                continue;
              case T.ATTRIB:
                if (d(r)) {
                  continue;
                }
                if (r === ">") {
                  P(this);
                } else if (r === "/") {
                  this.state = T.OPEN_TAG_SLASH;
                } else if (m(l, r)) {
                  this.attribName = r;
                  this.attribValue = "";
                  this.state = T.ATTRIB_NAME;
                } else {
                  C(this, "Invalid attribute name");
                }
                continue;
              case T.ATTRIB_NAME:
                if (r === "=") {
                  this.state = T.ATTRIB_VALUE;
                } else if (r === ">") {
                  C(this, "Attribute without value");
                  this.attribValue = this.attribName;
                  j(this);
                  P(this);
                } else if (d(r)) {
                  this.state = T.ATTRIB_NAME_SAW_WHITE;
                } else if (m(h, r)) {
                  this.attribName += r;
                } else {
                  C(this, "Invalid attribute name");
                }
                continue;
              case T.ATTRIB_NAME_SAW_WHITE:
                if (r === "=") {
                  this.state = T.ATTRIB_VALUE;
                } else {
                  if (d(r)) {
                    continue;
                  }
                  C(this, "Attribute without value");
                  this.tag.attributes[this.attribName] = "";
                  this.attribValue = "";
                  S(this, "onattribute", {
                    name: this.attribName,
                    value: ""
                  });
                  this.attribName = "";
                  if (r === ">") {
                    P(this);
                  } else if (m(l, r)) {
                    this.attribName = r;
                    this.state = T.ATTRIB_NAME;
                  } else {
                    C(this, "Invalid attribute name");
                    this.state = T.ATTRIB;
                  }
                }
                continue;
              case T.ATTRIB_VALUE:
                if (d(r)) {
                  continue;
                }
                if (g(r)) {
                  this.q = r;
                  this.state = T.ATTRIB_VALUE_QUOTED;
                } else {
                  if (!this.opt.unquotedAttributeValues) {
                    A(this, "Unquoted attribute value");
                  }
                  this.state = T.ATTRIB_VALUE_UNQUOTED;
                  this.attribValue = r;
                }
                continue;
              case T.ATTRIB_VALUE_QUOTED:
                if (r !== this.q) {
                  if (r === "&") {
                    this.state = T.ATTRIB_VALUE_ENTITY_Q;
                  } else {
                    this.attribValue += r;
                  }
                  continue;
                }
                j(this);
                this.q = "";
                this.state = T.ATTRIB_VALUE_CLOSED;
                continue;
              case T.ATTRIB_VALUE_CLOSED:
                if (d(r)) {
                  this.state = T.ATTRIB;
                } else if (r === ">") {
                  P(this);
                } else if (r === "/") {
                  this.state = T.OPEN_TAG_SLASH;
                } else if (m(l, r)) {
                  C(this, "No whitespace between attributes");
                  this.attribName = r;
                  this.attribValue = "";
                  this.state = T.ATTRIB_NAME;
                } else {
                  C(this, "Invalid attribute name");
                }
                continue;
              case T.ATTRIB_VALUE_UNQUOTED:
                if (!y(r)) {
                  if (r === "&") {
                    this.state = T.ATTRIB_VALUE_ENTITY_U;
                  } else {
                    this.attribValue += r;
                  }
                  continue;
                }
                j(this);
                if (r === ">") {
                  P(this);
                } else {
                  this.state = T.ATTRIB;
                }
                continue;
              case T.CLOSE_TAG:
                if (this.tagName) {
                  if (r === ">") {
                    L(this);
                  } else if (m(h, r)) {
                    this.tagName += r;
                  } else if (this.script) {
                    this.script += "</" + this.tagName;
                    this.tagName = "";
                    this.state = T.SCRIPT;
                  } else {
                    if (!d(r)) {
                      C(this, "Invalid tagname in closing tag");
                    }
                    this.state = T.CLOSE_TAG_SAW_WHITE;
                  }
                } else {
                  if (d(r)) {
                    continue;
                  }
                  if (b(l, r)) {
                    if (this.script) {
                      this.script += "</" + r;
                      this.state = T.SCRIPT;
                    } else {
                      C(this, "Invalid tagname in closing tag.");
                    }
                  } else {
                    this.tagName = r;
                  }
                }
                continue;
              case T.CLOSE_TAG_SAW_WHITE:
                if (d(r)) {
                  continue;
                }
                if (r === ">") {
                  L(this);
                } else {
                  C(this, "Invalid characters in closing tag");
                }
                continue;
              case T.TEXT_ENTITY:
              case T.ATTRIB_VALUE_ENTITY_Q:
              case T.ATTRIB_VALUE_ENTITY_U:
                var a;
                var c;
                switch (this.state) {
                  case T.TEXT_ENTITY:
                    a = T.TEXT;
                    c = "textNode";
                    break;
                  case T.ATTRIB_VALUE_ENTITY_Q:
                    a = T.ATTRIB_VALUE_QUOTED;
                    c = "attribValue";
                    break;
                  case T.ATTRIB_VALUE_ENTITY_U:
                    a = T.ATTRIB_VALUE_UNQUOTED;
                    c = "attribValue";
                }
                if (r === ";") {
                  var u = R(this);
                  if (this.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(u)) {
                    this.entity = "";
                    this.state = a;
                    this.write(u);
                  } else {
                    this[c] += u;
                    this.entity = "";
                    this.state = a;
                  }
                } else if (m(this.entity.length ? f : p, r)) {
                  this.entity += r;
                } else {
                  C(this, "Invalid character in entity name");
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
                      O(t);
                      break;
                    case "cdata":
                      S(t, "oncdata", t.cdata);
                      t.cdata = "";
                      break;
                    case "script":
                      S(t, "onscript", t.script);
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
          O(t = this);
          if (t.cdata !== "") {
            S(t, "oncdata", t.cdata);
            t.cdata = "";
          }
          if (t.script !== "") {
            S(t, "onscript", t.script);
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
            var r = n(186).StringDecoder;
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
      var l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var h = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var f = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function d(t) {
        return t === " " || t === "\n" || t === "\r" || t === "\t";
      }
      function g(t) {
        return t === "\"" || t === "'";
      }
      function y(t) {
        return t === ">" || d(t);
      }
      function m(t, e) {
        return t.test(e);
      }
      function b(t, e) {
        return !m(t, e);
      }
      var w;
      var v;
      var _;
      var T = 0;
      e.STATE = {
        BEGIN: T++,
        BEGIN_WHITESPACE: T++,
        TEXT: T++,
        TEXT_ENTITY: T++,
        OPEN_WAKA: T++,
        SGML_DECL: T++,
        SGML_DECL_QUOTED: T++,
        DOCTYPE: T++,
        DOCTYPE_QUOTED: T++,
        DOCTYPE_DTD: T++,
        DOCTYPE_DTD_QUOTED: T++,
        COMMENT_STARTING: T++,
        COMMENT: T++,
        COMMENT_ENDING: T++,
        COMMENT_ENDED: T++,
        CDATA: T++,
        CDATA_ENDING: T++,
        CDATA_ENDING_2: T++,
        PROC_INST: T++,
        PROC_INST_BODY: T++,
        PROC_INST_ENDING: T++,
        OPEN_TAG: T++,
        OPEN_TAG_SLASH: T++,
        ATTRIB: T++,
        ATTRIB_NAME: T++,
        ATTRIB_NAME_SAW_WHITE: T++,
        ATTRIB_VALUE: T++,
        ATTRIB_VALUE_QUOTED: T++,
        ATTRIB_VALUE_CLOSED: T++,
        ATTRIB_VALUE_UNQUOTED: T++,
        ATTRIB_VALUE_ENTITY_Q: T++,
        ATTRIB_VALUE_ENTITY_U: T++,
        CLOSE_TAG: T++,
        CLOSE_TAG_SAW_WHITE: T++,
        SCRIPT: T++,
        SCRIPT_ENDING: T++
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
      for (var E in e.STATE) {
        e.STATE[e.STATE[E]] = E;
      }
      function x(t, e, n) {
        if (t[e]) {
          t[e](n);
        }
      }
      function S(t, e, n) {
        if (t.textNode) {
          O(t);
        }
        x(t, e, n);
      }
      function O(t) {
        t.textNode = I(t.opt, t.textNode);
        if (t.textNode) {
          x(t, "ontext", t.textNode);
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
        O(t);
        if (t.trackPosition) {
          e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c;
        }
        e = new Error(e);
        t.error = e;
        x(t, "onerror", e);
        return t;
      }
      function k(t) {
        if (t.sawRoot && !t.closedRoot) {
          C(t, "Unclosed root tag");
        }
        if (t.state !== T.BEGIN && t.state !== T.BEGIN_WHITESPACE && t.state !== T.TEXT) {
          A(t, "Unexpected end");
        }
        O(t);
        t.c = "";
        t.closed = true;
        x(t, "onend");
        i.call(t, t.strict, t.opt);
        return t;
      }
      function C(t, e) {
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
        S(t, "onopentagstart", n);
      }
      function N(t, e) {
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
      function j(t) {
        if (!t.strict) {
          t.attribName = t.attribName[t.looseCase]();
        }
        if (t.attribList.indexOf(t.attribName) !== -1 || t.tag.attributes.hasOwnProperty(t.attribName)) {
          t.attribName = t.attribValue = "";
        } else {
          if (t.opt.xmlns) {
            var e = N(t.attribName, true);
            var n = e.prefix;
            var r = e.local;
            if (n === "xmlns") {
              if (r === "xml" && t.attribValue !== c) {
                C(t, "xml: prefix must be bound to " + c + "\nActual: " + t.attribValue);
              } else if (r === "xmlns" && t.attribValue !== "http://www.w3.org/2000/xmlns/") {
                C(t, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + t.attribValue);
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
            S(t, "onattribute", {
              name: t.attribName,
              value: t.attribValue
            });
          }
          t.attribName = t.attribValue = "";
        }
      }
      function P(t, e) {
        if (t.opt.xmlns) {
          var n = t.tag;
          var r = N(t.tagName);
          n.prefix = r.prefix;
          n.local = r.local;
          n.uri = n.ns[r.prefix] || "";
          if (n.prefix && !n.uri) {
            C(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName));
            n.uri = r.prefix;
          }
          var o = t.tags[t.tags.length - 1] || t;
          if (n.ns && o.ns !== n.ns) {
            Object.keys(n.ns).forEach(function (e) {
              S(t, "onopennamespace", {
                prefix: e,
                uri: n.ns[e]
              });
            });
          }
          for (var i = 0, s = t.attribList.length; i < s; i++) {
            var a = t.attribList[i];
            var c = a[0];
            var u = a[1];
            var l = N(c, true);
            var h = l.prefix;
            var p = l.local;
            var f = h === "" ? "" : n.ns[h] || "";
            var d = {
              name: c,
              value: u,
              prefix: h,
              local: p,
              uri: f
            };
            if (h && h !== "xmlns" && !f) {
              C(t, "Unbound namespace prefix: " + JSON.stringify(h));
              d.uri = h;
            }
            t.tag.attributes[c] = d;
            S(t, "onattribute", d);
          }
          t.attribList.length = 0;
        }
        t.tag.isSelfClosing = !!e;
        t.sawRoot = true;
        t.tags.push(t.tag);
        S(t, "onopentag", t.tag);
        if (!e) {
          if (t.noscript || t.tagName.toLowerCase() !== "script") {
            t.state = T.TEXT;
          } else {
            t.state = T.SCRIPT;
          }
          t.tag = null;
          t.tagName = "";
        }
        t.attribName = t.attribValue = "";
        t.attribList.length = 0;
      }
      function L(t) {
        if (!t.tagName) {
          C(t, "Weird empty close tag.");
          t.textNode += "</>";
          t.state = T.TEXT;
          return;
        }
        if (t.script) {
          if (t.tagName !== "script") {
            t.script += "</" + t.tagName + ">";
            t.tagName = "";
            t.state = T.SCRIPT;
            return;
          }
          S(t, "onscript", t.script);
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
          C(t, "Unexpected close tag");
        }
        if (e < 0) {
          C(t, "Unmatched closing tag: " + t.tagName);
          t.textNode += "</" + t.tagName + ">";
          t.state = T.TEXT;
          return;
        }
        t.tagName = n;
        for (var o = t.tags.length; o-- > e;) {
          var i = t.tag = t.tags.pop();
          t.tagName = t.tag.name;
          S(t, "onclosetag", t.tagName);
          var s = {};
          for (var a in i.ns) {
            s[a] = i.ns[a];
          }
          var c = t.tags[t.tags.length - 1] || t;
          if (t.opt.xmlns && i.ns !== c.ns) {
            Object.keys(i.ns).forEach(function (e) {
              var n = i.ns[e];
              S(t, "onclosenamespace", {
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
        t.state = T.TEXT;
      }
      function R(t) {
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
            C(t, "Invalid character entity");
            return "&" + t.entity + ";";
          } else {
            return String.fromCodePoint(e);
          }
        }
      }
      function M(t, e) {
        if (e === "<") {
          t.state = T.OPEN_WAKA;
          t.startTagPosition = t.position;
        } else if (!d(e)) {
          C(t, "Non-whitespace before first tag.");
          t.textNode = e;
          t.state = T.TEXT;
        }
      }
      function B(t, e) {
        var n = "";
        if (e < t.length) {
          n = t.charAt(e);
        }
        return n;
      }
      T = e.STATE;
      if (!String.fromCodePoint) {
        w = String.fromCharCode;
        v = Math.floor;
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
            if (!isFinite(a) || a < 0 || a > 1114111 || v(a) !== a) {
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
              s += w.apply(null, r);
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
    var s = r[0];
    var a = r[1];
    var c = new i(function (t, e, n) {
      return (e + n) * 3 / 4 - n;
    }(0, s, a));
    var l = 0;
    var h = a > 0 ? s - 4 : s;
    for (n = 0; n < h; n += 4) {
      e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)];
      c[l++] = e >> 16 & 255;
      c[l++] = e >> 8 & 255;
      c[l++] = e & 255;
    }
    if (a === 2) {
      e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4;
      c[l++] = e & 255;
    }
    if (a === 1) {
      e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2;
      c[l++] = e >> 8 & 255;
      c[l++] = e & 255;
    }
    return c;
  };
  e.fromByteArray = function (t) {
    var e;
    var n = t.length;
    var o = n % 3;
    var i = [];
    for (var s = 0, a = n - o; s < a; s += 16383) {
      i.push(l(t, s, s + 16383 > a ? a : s + 16383));
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
  function l(t, e, n) {
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
    var l = -7;
    var h = n ? o - 1 : 0;
    var p = n ? -1 : 1;
    var f = t[e + h];
    h += p;
    i = f & (1 << -l) - 1;
    f >>= -l;
    l += a;
    for (; l > 0; l -= 8) {
      i = i * 256 + t[e + h];
      h += p;
    }
    s = i & (1 << -l) - 1;
    i >>= -l;
    l += r;
    for (; l > 0; l -= 8) {
      s = s * 256 + t[e + h];
      h += p;
    }
    if (i === 0) {
      i = 1 - u;
    } else {
      if (i === c) {
        if (s) {
          return NaN;
        } else {
          return (f ? -1 : 1) * Infinity;
        }
      }
      s += Math.pow(2, r);
      i -= u;
    }
    return (f ? -1 : 1) * s * Math.pow(2, i - r);
  };
  e.write = function (t, e, n, r, o, i) {
    var s;
    var a;
    var c;
    var u = i * 8 - o - 1;
    var l = (1 << u) - 1;
    var h = l >> 1;
    var p = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var f = r ? 0 : i - 1;
    var d = r ? 1 : -1;
    var g = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    e = Math.abs(e);
    if (isNaN(e) || e === Infinity) {
      a = isNaN(e) ? 1 : 0;
      s = l;
    } else {
      s = Math.floor(Math.log(e) / Math.LN2);
      if (e * (c = Math.pow(2, -s)) < 1) {
        s--;
        c *= 2;
      }
      if ((e += s + h >= 1 ? p / c : p * Math.pow(2, 1 - h)) * c >= 2) {
        s++;
        c /= 2;
      }
      if (s + h >= l) {
        a = 0;
        s = l;
      } else if (s + h >= 1) {
        a = (e * c - 1) * Math.pow(2, o);
        s += h;
      } else {
        a = e * Math.pow(2, h - 1) * Math.pow(2, o);
        s = 0;
      }
    }
    for (; o >= 8; o -= 8) {
      t[n + f] = a & 255;
      f += d;
      a /= 256;
    }
    s = s << o | a;
    u += o;
    for (; u > 0; u -= 8) {
      t[n + f] = s & 255;
      f += d;
      s /= 256;
    }
    t[n + f - d] |= g * 128;
  };
}, function (t, e, n) {
  t.exports = o;
  var r = n(156).EventEmitter;
  function o() {
    r.call(this);
  }
  n(91)(o, r);
  o.Readable = n(183);
  o.Writable = n(356);
  o.Duplex = n(357);
  o.Transform = n(358);
  o.PassThrough = n(359);
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
      l();
      if (r.listenerCount(this, "error") === 0) {
        throw t;
      }
    }
    function l() {
      n.removeListener("data", o);
      t.removeListener("drain", i);
      n.removeListener("end", a);
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
  var o = n(351);
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
        var l = false;
        var h = t.document;
        var p = Object.getPrototypeOf && Object.getPrototypeOf(t);
        p = p && p.setTimeout ? p : t;
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
          } else if (h && "onreadystatechange" in h.createElement("script")) {
            o = h.documentElement;
            r = function (t) {
              var e = h.createElement("script");
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
        p.setImmediate = function (t) {
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
        p.clearImmediate = f;
      }
      function f(t) {
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
              f(t);
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
  var r = n(245);
  var o = Object.create(n(108));
  function i(t) {
    if (!(this instanceof i)) {
      return new i(t);
    }
    r.call(this, t);
  }
  o.inherits = n(91);
  o.inherits(i, r);
  i.prototype._transform = function (t, e, n) {
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
  var o = n(362);
  var i = n(16);
  var s = n(4);
  var a = n(12);
  var c = n(11);
  var u = n(93);
  var l = n(20);
  var h = n(26);
  var p = n(21).f;
  var f = n(363);
  var d = n(83);
  var g = n(8);
  var y = n(58);
  var m = s.Int8Array;
  var b = m && m.prototype;
  var w = s.Uint8ClampedArray;
  var v = w && w.prototype;
  var _ = m && f(m);
  var T = b && f(b);
  var E = Object.prototype;
  var x = E.isPrototypeOf;
  var S = g("toStringTag");
  var O = y("TYPED_ARRAY_TAG");
  var I = o && !!d && u(s.opera) !== "Opera";
  var A = false;
  var k = {
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
  var C = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };
  function D(t) {
    if (!a(t)) {
      return false;
    }
    var e = u(t);
    return c(k, e) || c(C, e);
  }
  for (r in k) {
    if (!s[r]) {
      I = false;
    }
  }
  if ((!I || typeof _ != "function" || _ === Function.prototype) && (_ = function () {
    throw TypeError("Incorrect invocation");
  }, I)) {
    for (r in k) {
      if (s[r]) {
        d(s[r], _);
      }
    }
  }
  if ((!I || !T || T === E) && (T = _.prototype, I)) {
    for (r in k) {
      if (s[r]) {
        d(s[r].prototype, T);
      }
    }
  }
  if (I && f(v) !== T) {
    d(v, T);
  }
  if (i && !c(T, S)) {
    A = true;
    p(T, S, {
      get: function () {
        if (a(this)) {
          return this[O];
        } else {
          return undefined;
        }
      }
    });
    for (r in k) {
      if (s[r]) {
        l(s[r], O, r);
      }
    }
  }
  t.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: I,
    TYPED_ARRAY_TAG: A && O,
    aTypedArray: function (t) {
      if (D(t)) {
        return t;
      }
      throw TypeError("Target is not a typed array");
    },
    aTypedArrayConstructor: function (t) {
      if (d) {
        if (x.call(_, t)) {
          return t;
        }
      } else {
        for (var e in k) {
          if (c(k, r)) {
            var n = s[e];
            if (n && (t === n || x.call(n, t))) {
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
          for (var r in k) {
            var o = s[r];
            if (o && c(o.prototype, t)) {
              try {
                delete o.prototype[t];
              } catch (t) {}
            }
          }
        }
        if (!T[t] || !!n) {
          h(T, t, n ? e : I && b[t] || e);
        }
      }
    },
    exportTypedArrayStaticMethod: function (t, e, n) {
      var r;
      var o;
      if (i) {
        if (d) {
          if (n) {
            for (r in k) {
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
            return h(_, t, n ? e : I && _[t] || e);
          } catch (t) {}
        }
        for (r in k) {
          if (!!(o = s[r]) && (!o[t] || !!n)) {
            h(o, t, e);
          }
        }
      }
    },
    isView: function (t) {
      if (!a(t)) {
        return false;
      }
      var e = u(t);
      return e === "DataView" || c(k, e) || c(C, e);
    },
    isTypedArray: D,
    TypedArray: _,
    TypedArrayPrototype: T
  };
}, function (t, e) {
  t.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
}, function (t, e, n) {
  var r = n(11);
  var o = n(78);
  var i = n(79);
  var s = n(364);
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
  var r = n(9);
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
  var o = n(84);
  var i = n(17)("match");
  t.exports = function (t) {
    var e;
    return r(t) && ((e = t[i]) !== undefined ? !!e : o(t) == "RegExp");
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

  (function (t) {
    n.d(e, "a", function () {
      return f;
    });
    n(397);
    n(19);
    n(64);
    var r = n(380);
    var o = n.n(r);
    var i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
    var s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
    var a = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");
    function c(t) {
      return (t || "").toString().replace(a, "");
    }
    var u = [["#", "hash"], ["?", "query"], function (t) {
      return t.replace("\\", "/");
    }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", undefined, 1, 1], [/:(\d+)$/, "port", undefined, 1], [NaN, "hostname", undefined, 1, 1]];
    var l = {
      hash: 1,
      query: 1
    };
    function h(e) {
      var n;
      var r = (typeof window != "undefined" ? window : t !== undefined ? t : typeof self != "undefined" ? self : {}).location || {};
      var o = {};
      var s = typeof (e = e || r);
      if (e.protocol === "blob:") {
        o = new f(unescape(e.pathname), {});
      } else if (s === "string") {
        o = new f(e, {});
        for (n in l) {
          delete o[n];
        }
      } else if (s === "object") {
        for (n in e) {
          if (!(n in l)) {
            o[n] = e[n];
          }
        }
        if (o.slashes === undefined) {
          o.slashes = i.test(e.href);
        }
      }
      return o;
    }
    function p(t) {
      t = c(t);
      var e = s.exec(t);
      return {
        protocol: e[1] ? e[1].toLowerCase() : "",
        slashes: !!e[2],
        rest: e[3]
      };
    }
    function f(t, e) {
      t = c(t);
      var n;
      var r;
      var i;
      var s;
      var a;
      var l;
      var f = u.slice();
      var d = this;
      var g = 0;
      e = h(e);
      n = !(r = p(t || "")).protocol && !r.slashes;
      d.slashes = r.slashes || n && e.slashes;
      d.protocol = r.protocol || e.protocol || "";
      t = r.rest;
      if (!r.slashes) {
        f[3] = [/(.*)/, "pathname"];
      }
      for (; g < f.length; g++) {
        if (typeof (s = f[g]) != "function") {
          i = s[0];
          l = s[1];
          if (i != i) {
            d[l] = t;
          } else if (typeof i == "string") {
            if (~(a = t.indexOf(i))) {
              if (typeof s[2] == "number") {
                d[l] = t.slice(0, a);
                t = t.slice(a + s[2]);
              } else {
                d[l] = t.slice(a);
                t = t.slice(0, a);
              }
            }
          } else if (a = i.exec(t)) {
            d[l] = a[1];
            t = t.slice(0, a.index);
          }
          d[l] = d[l] || n && s[3] && e[l] || "";
          if (s[4]) {
            d[l] = d[l].toLowerCase();
          }
        } else {
          t = s(t);
        }
      }
      if (n && e.slashes && d.pathname.charAt(0) !== "/" && (d.pathname !== "" || e.pathname !== "")) {
        d.pathname = function (t, e) {
          if (t === "") {
            return e;
          }
          var n = (e || "/").split("/").slice(0, -1).concat(t.split("/"));
          for (var r = n.length, o = n[r - 1], i = false, s = 0; r--;) {
            if (n[r] === ".") {
              n.splice(r, 1);
            } else if (n[r] === "..") {
              n.splice(r, 1);
              s++;
            } else if (s) {
              if (r === 0) {
                i = true;
              }
              n.splice(r, 1);
              s--;
            }
          }
          if (i) {
            n.unshift("");
          }
          if (o === "." || o === "..") {
            n.push("");
          }
          return n.join("/");
        }(d.pathname, e.pathname);
      }
      if (!o()(d.port, d.protocol)) {
        d.host = d.hostname;
        d.port = "";
      }
      d.username = d.password = "";
      if (d.auth) {
        s = d.auth.split(":");
        d.username = s[0] || "";
        d.password = s[1] || "";
      }
      d.origin = d.protocol && d.host && d.protocol !== "file:" ? d.protocol + "//" + d.host : "null";
      d.href = d.toString();
    }
    f.prototype = {
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
    f.extractProtocol = p;
    f.location = h;
    f.trimLeft = c;
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
},,, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return f;
  });
  n(7);
  var r = n(2);
  var o = n(403);
  var i = n.n(o);
  var s = n(309);
  var a = n(24);
  var c = n(13);
  var u = n(161);
  function l(t, e, n, r) {
    var o;
    var i = arguments.length;
    var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(t, e, n, r);
    } else {
      for (var a = t.length - 1; a >= 0; a--) {
        if (o = t[a]) {
          s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(e, n, s);
    }
    return s;
  }
  const h = [{
    text: i18n("todo_welcome"),
    todoId: "todo-id1dtkk87it2iepal6dv4hr2uig0c",
    time: Date.now(),
    updatetime: 0,
    done: false
  }];
  class p extends s.a {
    constructor() {
      super(...arguments);
      this.todoList = h;
      this.currenetState = "done";
      this.listLength = localStorage.getItem("todo-length") || 0;
    }
    toggleState(t) {
      this.currenetState = t;
    }
    get needNotificationPermission() {
      return this.todoList.some(t => !!t.dueDate);
    }
    diffRemote(t) {
      const e = t => {
        if (t == null ? undefined : t.updatetime) {
          const e = {
            updatetime: undefined
          };
          t.done = !!t.done;
          return Object.assign(Object.assign({}, t), e);
        }
      };
      const n = i()(t.todoList || [], e);
      const o = i()(Object(r.j)(this.todoList), e);
      return !r.d.structural(n, o);
    }
    mergeRemote(t, e) {
      if (t.todoList) {
        if (e) {
          this.todoList = t.todoList;
        } else {
          const e = this.todoList;
          const n = t.todoList;
          const {
            result: r
          } = a.a.mergeArray(e, n, "todoId");
          this.todoList = r;
        }
      }
    }
    edit(t) {
      this.todoList = this.todoList.map(e => e.todoId === t ? Object.assign(Object.assign({}, e), {
        edit: !e.edit
      }) : e);
    }
    get hasDoneTodo() {
      return this.todoList.filter(t => t.done).length;
    }
    async addTodo(t) {
      if (!t.trim().length) {
        return;
      }
      const e = {
        done: false,
        time: +new Date(),
        todoId: a.a.randomId("todo-"),
        updatetime: await a.a.getTimestamp(),
        text: t
      };
      Object(r.i)(() => {
        this.todoList = [e, ...this.todoList];
      });
    }
    removeTodo() {
      this.todoList = this.todoList.filter(t => !t.done);
    }
    deleteTodo(t) {
      this.todoList = this.todoList.filter(e => e.todoId !== t);
    }
    async toggleTodo(t) {
      const e = await a.a.getTimestamp();
      Object(r.i)(() => {
        this.todoList = this.todoList.map(n => n.todoId === t ? Object.assign(Object.assign({}, n), {
          done: !n.done,
          updatetime: e
        }) : Object.assign({}, n));
      });
    }
    async updateTodo(t, e) {
      const n = await a.a.getTimestamp();
      Object(r.i)(() => {
        this.todoList = this.todoList.map(r => r.todoId === t ? Object.assign(Object.assign(Object.assign({}, r), e), {
          updatetime: n,
          edit: false
        }) : Object.assign({}, r));
      });
    }
    removeTime(t) {
      this.todoList = this.todoList.map(e => e.todoId === t ? Object.assign(Object.assign({}, e), {
        dueDate: "",
        dueTime: "",
        dueTimestamp: null
      }) : e);
    }
  }
  l([r.g], p.prototype, "todoList", undefined);
  l([r.g], p.prototype, "currenetState", undefined);
  l([r.b], p.prototype, "toggleState", null);
  l([r.e], p.prototype, "needNotificationPermission", null);
  l([r.b], p.prototype, "mergeRemote", null);
  l([r.b], p.prototype, "edit", null);
  l([r.g], p.prototype, "listLength", undefined);
  l([r.e], p.prototype, "hasDoneTodo", null);
  l([r.b], p.prototype, "addTodo", null);
  l([r.b], p.prototype, "removeTodo", null);
  l([r.b], p.prototype, "deleteTodo", null);
  l([r.b], p.prototype, "toggleTodo", null);
  l([r.b], p.prototype, "updateTodo", null);
  l([r.b], p.prototype, "removeTime", null);
  const f = new p();
  f.initSyncStore(c.k, ["todoList", "listLength"], {});
  f.initAutoBackup("todo", ["todoList"]);
  Object(r.c)(() => {
    if (f.firstSync) {
      const t = f.todoList.filter(t => !t.done).length;
      Object(r.i)(() => {
        f.listLength = t;
      });
      localStorage.setItem("todo-length", t + "");
    }
  });
  let d = false;
  Object(r.c)(() => {
    if (f.firstSync) {
      const t = f.todoList.filter(t => !t.done && t.dueTimestamp > Date.now()).map(t => Object(r.j)(t));
      if (!d) {
        d = true;
        return;
      }
      u.slave.postTask("slave:change-todo", t);
    }
  });
  Object(r.c)(() => {
    let t = false;
    const {
      todoList: e
    } = f;
    for (let n = 0; n < e.length - 1; n++) {
      const {
        done: r
      } = e[n];
      const o = e[n + 1].done;
      if (r && !o) {
        t = true;
        break;
      }
    }
    if (t) {
      Object(r.i)(() => {
        const t = e.filter(t => t.done);
        const n = e.filter(t => !t.done);
        f.todoList = [...n, ...t];
      });
      t = false;
    }
  }, {
    delay: 300
  });
},,,,,,,,,,,, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(5);
  var o = n.n(r);
  var i = n(225);
  var s = n(429);
  var a = n(1);
  var c = n(2);
  var u = a.b`.i-bubble {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999999;
}
.i-bubble.network-error .i-bubble-wrap,
.i-bubble.error .i-bubble-wrap,
.i-bubble.success .i-bubble-wrap {
  padding-left: 30px;
  padding-right: 32px;
}
.i-bubble + .i-bubble-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999999;
  display: none;
  opacity: 0;
  transition: opacity 150ms ease-in 0s;
}
.i-bubble.loading + .i-bubble-mask {
  display: block;
}
.i-bubble.loading.popup + .i-bubble-mask {
  opacity: 1;
}
.i-bubble .i-bubble-wrap {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 12px 20px;
  background-color: #333;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 14px;
  line-height: 1.4em;
  transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: scale(0.8);
  opacity: 0;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  max-width: 600px;
}
.i-bubble.popup .i-bubble-wrap {
  transform: scale(1);
  opacity: 1;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.i-bubble .icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-right: 12px;
  display: none;
}
.i-bubble .icon.icon-loading {
  animation: spin 700ms linear infinite;
}
.i-bubble .i-bubble-text {
  color: #e4e4e4;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  word-break: break-all;
}
.i-bubble .i-bubble-button {
  width: 70px;
  height: 28px;
  color: #4caf50;
  background-color: initial;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color, background-color 200ms;
  border-radius: 4px;
  outline: none;
  max-width: 180px;
  margin-left: 46px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.i-bubble .i-bubble-button:hover {
  background-color: rgba(76, 175, 80, 0.14);
}
`;
  var l = n(24);
  var h = n(51);
  function p(t, e, n, r) {
    var o;
    var i = arguments.length;
    var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(t, e, n, r);
    } else {
      for (var a = t.length - 1; a >= 0; a--) {
        if (o = t[a]) {
          s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(e, n, s);
    }
    return s;
  }
  const f = Object(h.a)("network-error.png", false);
  const d = Object(h.a)("error.png", false);
  const g = Object(h.a)("success.png", false);
  const y = Object(h.a)("loading.png", false);
  class m extends i.a {
    constructor() {
      super(...arguments);
      this.popup = false;
      this.showButton = false;
    }
    static _timeToHideHandler(t) {
      if (t.showButton) {
        const e = t.shadowRoot.querySelector(".i-bubble .i-bubble-button");
        e.onclick &&= null;
      }
      const e = t.shadowRoot.querySelector(".i-bubble > .i-bubble-wrap");
      let n = false;
      const r = () => {
        t.onmouseenter = null;
        t.onmouseleave = null;
        if (document.body.contains(t)) {
          document.body.removeChild(t);
        }
        n = true;
      };
      e.addEventListener("transitionend", r, {
        once: true
      });
      e.addEventListener("transitioncancel", r, {
        once: true
      });
      setTimeout(() => {
        if (!n) {
          r();
        }
      }, 150);
      t.setPopup(false);
    }
    static _setTimerToHide(t, e) {
      this._clearTimerToHide(t);
      t.hideTimer = setTimeout(() => this._timeToHideHandler(t), e);
    }
    static _clearTimerToHide(t) {
      if (t.hideTimer) {
        clearTimeout(t.hideTimer);
        t.hideTimer = null;
      }
    }
    static _messageMisc(t, e, n) {
      this.setText(t);
      document.body.appendChild(this);
      window.customElements.whenDefined("i-bubble").then(() => {
        this.offsetWidth;
        this.setPopup(true);
        return new o.a(t => requestAnimationFrame(t));
      }).then(() => {
        if (n) {
          n(this);
        }
      });
      if (e > 0) {
        m._setTimerToHide(this, e);
      }
    }
    static message(t, e) {
      const n = document.createElement("i-bubble");
      n.setType("message");
      e = e ?? this.duration;
      this._messageMisc.call(n, t, e);
    }
    static networkError(t, e) {
      const n = document.createElement("i-bubble");
      n.setType("network-error");
      e = e ?? this.duration;
      this._messageMisc.call(n, t, e);
    }
    static success(t, e) {
      const n = document.createElement("i-bubble");
      n.setType("success");
      e = e ?? this.duration;
      this._messageMisc.call(n, t, e);
    }
    static error(t, e) {
      const n = document.createElement("i-bubble");
      n.setType("error");
      e = e ?? this.duration;
      this._messageMisc.call(n, t, e);
    }
    static popupLogin(t) {
      const e = this.popup(i18n("reqeust_login_message"), {
        showButton: true,
        btnValue: i18n("to_login"),
        type: "message",
        onBtnClick: t ?? (() => {
          s.userStore.openModal();
        })
      });
      const n = Date.now();
      let r = this.duration2;
      e.onmouseenter = () => {
        r = Date.now() - n;
        m._clearTimerToHide(e);
      };
      e.onmouseleave = () => {
        m._setTimerToHide(e, r);
      };
    }
    static popupAddHomeAI(t) {
      const e = this.popup(i18n("add_infinity_ai"), {
        showButton: true,
        btnValue: i18n("add_now"),
        type: "message",
        onBtnClick: t,
        duration: 8000
      });
      const n = Date.now();
      let r = this.duration2;
      e.onmouseenter = () => {
        r = Date.now() - n;
        m._clearTimerToHide(e);
      };
      e.onmouseleave = () => {
        m._setTimerToHide(e, r);
      };
    }
    static popupLoading(t) {
      const e = this.popup(i18n("wallpaper_loading"), {
        duration: 0,
        showButton: true,
        btnValue: i18n("cancel"),
        type: "loading",
        onBtnClick: t
      });
      return () => setTimeout(() => this._timeToHideHandler(e), m.waitForReady);
    }
    static loading(t) {
      const e = this.popup(t, {
        type: "loading",
        duration: 0
      });
      return () => setTimeout(() => this._timeToHideHandler(e), m.waitForReady);
    }
    static popup(t, e) {
      const {
        duration: n = this.duration2,
        btnValue: r,
        onBtnClick: o,
        type: i,
        showButton: s
      } = e;
      const a = document.createElement("i-bubble");
      a.setType(i);
      if (r) {
        a.setBtnValue(r);
      }
      if (s) {
        a.setShowButton(s);
      }
      this._messageMisc.call(a, t, n, () => {
        if (a.showButton) {
          a.shadowRoot.querySelector(".i-bubble .i-bubble-button").onclick = t => {
            if (o) {
              o(t);
            }
            this._timeToHideHandler(a);
          };
        }
      });
      return a;
    }
    firstUpdated() {
      const t = "\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      display: block;\n    ";
      const e = document.createElement("style");
      e.appendChild(document.createTextNode(`\n      .i-bubble .icon.icon-network-error{\n        background-image: url(${f});${t}\n      }\n      .i-bubble .icon.icon-success{\n        background-image: url(${g});${t}\n      }\n      .i-bubble .icon.icon-error{\n        background-image: url(${d});${t}\n      }\n      .i-bubble .icon.icon-loading{\n        background-image: url(${y});${t}\n      }\n      `));
      this.shadowRoot.appendChild(e);
    }
    render() {
      return a.e`
      <section class="i-bubble ${this.type}${this.popup ? " popup" : ""}">
        <section class="i-bubble-wrap">
          <i class="icon icon-${this.type}"></i>
          <span class="i-bubble-text">${this.text}</span>
          <input
            class="i-bubble-button"
            type="button"
            .value=${this.btnValue}
            style="${this.showButton ? "" : "display: none;"}"
          />
        </section>
      </section>
      <section class="i-bubble-mask" @click=${l.a.stopBubble}></section>
    `;
    }
    setType(t) {
      this.type = t;
    }
    setText(t) {
      this.text = t;
    }
    setBtnValue(t) {
      this.btnValue = t;
    }
    setPopup(t) {
      this.popup = t;
    }
    setShowButton(t) {
      this.showButton = t;
    }
  }
  m.duration = 3000;
  m.duration2 = 5000;
  m.waitForReady = 1000 / 60;
  m.styles = u;
  p([c.g], m.prototype, "type", undefined);
  p([c.g], m.prototype, "text", undefined);
  p([c.g], m.prototype, "btnValue", undefined);
  p([c.g], m.prototype, "popup", undefined);
  p([c.g], m.prototype, "showButton", undefined);
  p([c.b], m.prototype, "setType", null);
  p([c.b], m.prototype, "setText", null);
  p([c.b], m.prototype, "setBtnValue", null);
  p([c.b], m.prototype, "setPopup", null);
  p([c.b], m.prototype, "setShowButton", null);
  window.customElements.define("i-bubble", m);
  e.default = m;
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return r;
  });
  n.d(e, "b", function () {
    return i;
  });
  class r {
    constructor() {
      this._caches = {};
      this._setCaches = t => (...e) => {
        this._caches[t] = e;
      };
    }
  }
  const o = [];
  const i = t => new Proxy(t, {
    set: (t, e, n) => n === null ? (t[e] = n, true) : typeof t[e] == "function" ? (console.warn("失败：重复注册"), true) : (t[e] = n, o.includes(e) && delete t._caches[e], t._caches.hasOwnProperty(e) && (t[e](...t._caches[e]), delete t._caches[e]), true),
    get: (t, e) => typeof t[e] == "function" ? t[e] : t._setCaches(e)
  });
}, function (t, e, n) {
  var r = n(16);
  var o = n(4);
  var i = n(60);
  var s = n(399);
  var a = n(20);
  var c = n(21).f;
  var u = n(101).f;
  var l = n(400);
  var h = n(216);
  var p = n(217);
  var f = n(26);
  var d = n(9);
  var g = n(11);
  var y = n(49).enforce;
  var m = n(102);
  var b = n(8);
  var w = n(218);
  var v = n(219);
  var _ = b("match");
  var T = o.RegExp;
  var E = T.prototype;
  var x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var S = /a/g;
  var O = /a/g;
  var I = new T(S) !== S;
  var A = p.UNSUPPORTED_Y;
  var k = r && (!I || A || w || v || d(function () {
    O[_] = false;
    return T(S) != S || T(O) == O || T(S, "i") != "/a/i";
  }));
  if (i("RegExp", k)) {
    var C = function (t, e) {
      var n;
      var r;
      var o;
      var i;
      var c;
      var u;
      var p = this instanceof C;
      var f = l(t);
      var d = e === undefined;
      var m = [];
      var b = t;
      if (!p && f && d && t.constructor === C) {
        return t;
      }
      if (f || t instanceof C) {
        t = t.source;
        if (d) {
          e = "flags" in b ? b.flags : h.call(b);
        }
      }
      t = t === undefined ? "" : String(t);
      e = e === undefined ? "" : String(e);
      b = t;
      if (w && "dotAll" in S && (r = !!e && e.indexOf("s") > -1)) {
        e = e.replace(/s/g, "");
      }
      n = e;
      if (A && "sticky" in S && (o = !!e && e.indexOf("y") > -1)) {
        e = e.replace(/y/g, "");
      }
      if (v) {
        t = (i = function (t) {
          var e;
          for (var n = t.length, r = 0, o = "", i = [], s = {}, a = false, c = false, u = 0, l = ""; r <= n; r++) {
            if ((e = t.charAt(r)) === "\\") {
              e += t.charAt(++r);
            } else if (e === "]") {
              a = false;
            } else if (!a) {
              switch (true) {
                case e === "[":
                  a = true;
                  break;
                case e === "(":
                  if (x.test(t.slice(r + 1))) {
                    r += 2;
                    c = true;
                  }
                  o += e;
                  u++;
                  continue;
                case e === ">" && c:
                  if (l === "" || g(s, l)) {
                    throw new SyntaxError("Invalid capture group name");
                  }
                  s[l] = true;
                  i.push([l, u]);
                  c = false;
                  l = "";
                  continue;
              }
            }
            if (c) {
              l += e;
            } else {
              o += e;
            }
          }
          return [o, i];
        }(t))[0];
        m = i[1];
      }
      c = s(T(t, e), p ? this : E, C);
      if (r || o || m.length) {
        u = y(c);
        if (r) {
          u.dotAll = true;
          u.raw = C(function (t) {
            var e;
            for (var n = t.length, r = 0, o = "", i = false; r <= n; r++) {
              if ((e = t.charAt(r)) !== "\\") {
                if (i || e !== ".") {
                  if (e === "[") {
                    i = true;
                  } else if (e === "]") {
                    i = false;
                  }
                  o += e;
                } else {
                  o += "[\\s\\S]";
                }
              } else {
                o += e + t.charAt(++r);
              }
            }
            return o;
          }(t), n);
        }
        if (o) {
          u.sticky = true;
        }
        if (m.length) {
          u.groups = m;
        }
      }
      if (t !== b) {
        try {
          a(c, "source", b === "" ? "(?:)" : b);
        } catch (t) {}
      }
      return c;
    };
    var D = function (t) {
      if (!(t in C)) {
        c(C, t, {
          configurable: true,
          get: function () {
            return T[t];
          },
          set: function (e) {
            T[t] = e;
          }
        });
      }
    };
    for (var N = u(T), j = 0; N.length > j;) {
      D(N[j++]);
    }
    E.constructor = C;
    C.prototype = E;
    f(o, "RegExp", C);
  }
  m("RegExp");
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return a;
  });
  var r = n(5);
  var o = n.n(r);
  n(7);
  var i = n(0);
  var s = n(85);
  async function a() {
    if (i.s || i.r) {
      if ((await new o.a(t => {
        if (!function () {
          try {
            Notification.requestPermission().then();
          } catch (t) {
            return false;
          }
          return true;
        }()) {
          Notification.requestPermission(t);
        } else {
          Notification.requestPermission().then(t);
        }
      })) !== "granted") {
        throw new Error();
      }
    } else {
      await s.a.request(["notifications"]);
    }
  }
}, function (t, e, n) {
  var r = n(12);
  var o = n(83);
  t.exports = function (t, e, n) {
    var i;
    var s;
    if (o && typeof (i = e.constructor) == "function" && i !== n && r(s = i.prototype) && s !== n.prototype) {
      o(t, s);
    }
    return t;
  };
}, function (t, e, n) {
  var r = n(12);
  var o = n(33);
  var i = n(8)("match");
  t.exports = function (t) {
    var e;
    return r(t) && ((e = t[i]) !== undefined ? !!e : o(t) == "RegExp");
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
        var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2];
        for (var i = 0; i < 4; i++) {
          if (r * 8 + i * 6 <= t.length * 8) {
            e.push(n.charAt(o >>> (3 - i) * 6 & 63));
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
      for (var r = 0, o = 0; r < t.length; o = ++r % 4) {
        if (o != 0) {
          e.push((n.indexOf(t.charAt(r - 1)) & Math.pow(2, o * -2 + 8) - 1) << o * 2 | n.indexOf(t.charAt(r)) >>> 6 - o * 2);
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
},,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "userStore", function () {
    return T;
  });
  n(7);
  n(19);
  var r = n(5);
  var o = n.n(r);
  var i = n(2);
  var s = n(309);
  var a = n(22);
  var c = n(0);
  var u = n(106);
  var l = n(23);
  var h = n.n(l);
  var p = n(162);
  var f = n(161);
  var d = n(431);
  var g = n(430);
  var y = n(13);
  var m = n(36);
  var b = n(334);
  var w = n(6);
  function v(t, e, n, r) {
    var o;
    var i = arguments.length;
    var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(t, e, n, r);
    } else {
      for (var a = t.length - 1; a >= 0; a--) {
        if (o = t[a]) {
          s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(e, n, s);
    }
    return s;
  }
  class _ extends s.a {
    constructor() {
      super();
      this.isExpired = false;
      this.isLogin = false;
      this.token = "";
      this.userInfo = {};
      this.refreshToken = "";
      this.mobileloginExpire = 0;
      this.mobileloginUrl = "";
      this.areaCodeList = [];
      this.thirdList = [{
        type: a.f.ThirdLoginType.wechat,
        title: i18n("wechat"),
        bindStatus: false,
        nick_name: ""
      }, {
        type: a.f.ThirdLoginType.qq,
        title: "QQ",
        bindStatus: false,
        nick_name: ""
      }, {
        type: a.f.ThirdLoginType.google,
        title: "Google",
        bindStatus: false,
        nick_name: ""
      }, {
        type: a.f.ThirdLoginType.facebook,
        title: "Facebook",
        bindStatus: false,
        abondon: true,
        nick_name: ""
      }, {
        type: a.f.ThirdLoginType.weibo,
        title: i18n("xin_lang_weibo"),
        bindStatus: false,
        abondon: true,
        nick_name: ""
      }];
      this.userProfilePromise = o.a.resolve();
      this.wpColorUpdate = 0;
      this.logining = false;
      this.modalOpen = false;
      this.removeAccountDisableSec = 10;
      this.removeAccountDisableTimer = null;
      this.showLoginTipModal = false;
      this.profileModal = false;
      this.syncListModal = false;
      this.isModify = false;
      this.openMiniWindow = t => {
        const e = Math.floor(window.screenY + 200);
        const n = Math.floor(window.screenX + window.innerWidth / 3);
        return window.open(t, "_blank", `top=${e},left=${n},height=600,width=770,menubar=no,toolbar=yes,location=yes,status=no,resizable=no`);
      };
      this.binding = false;
      this.bindListener = t => {
        let e;
        const n = () => {
          e = setTimeout(() => {
            t.postMessage({
              from: "origin_login"
            }, "*");
            if (t.closed) {
              window.removeEventListener("message", r);
              this.binding = false;
            } else {
              n();
            }
          }, 500);
        };
        n();
        const r = async t => {
          try {
            if (!t.data || !t.data.key || t.data.key !== "bind") {
              return;
            }
            clearTimeout(e);
            window.removeEventListener("message", r, false);
            const {
              message: n
            } = t.data;
            let o;
            switch (n.type) {
              case a.f.ThirdLoginType.weibo:
              case a.f.ThirdLoginType.google:
              case a.f.ThirdLoginType.facebook:
              case a.f.ThirdLoginType.wechat:
              case a.f.ThirdLoginType.qq:
                o = await a.f.bindThird(n.type, n.code);
            }
            if (o.error) {
              u.message.error(o.error.message);
              return;
            }
            this.bindSuccess("third", o.data);
            u.message.success(i18n("bind_success"));
          } catch (t) {
            u.message.error(i18n("network_error"));
          } finally {
            this.binding = false;
          }
        };
        window.addEventListener("message", r, false);
      };
      this.countdownTimer = null;
      this.checkMobileUrlTimer = null;
      this.isShowLogoutConfirm = false;
      this.showConfirmOpt = "";
      this.isShowSecondProfileModal = false;
      this.isModalFromAi = false;
      this.secondProfileModalType = null;
      this.clearAllData = false;
      this.loading = false;
      this.URL = c.y;
    }
    get renderAI() {
      return !m.a || this.isLogin && this.userInfo.renderAI;
    }
    get thirdAccountList() {
      const t = {};
      if (this.userInfo.third_account) {
        this.userInfo.third_account.forEach(e => {
          t[e.platform] = e;
        });
      }
      return this.thirdList.map(e => t[e.type] ? Object.assign(Object.assign({}, e), {
        bindStatus: true,
        nick_name: t[e.type].nick_name
      }) : e);
    }
    setWpColorUpdate(t) {
      this.wpColorUpdate = t;
    }
    closeModal() {
      this.modalOpen = false;
    }
    openModal() {
      this.modalOpen = true;
    }
    toggleLoginTipModal() {
      this.showLoginTipModal = !this.showLoginTipModal;
    }
    closeLoginTipModal() {
      this.showLoginTipModal = false;
    }
    closeProfileModal() {
      this.profileModal = false;
    }
    openProfileModal() {
      this.profileModal = true;
      this.openModify();
    }
    closeSyncListModal() {
      this.syncListModal = false;
    }
    openSyncListModal() {
      this.syncListModal = true;
    }
    openModify() {
      this.isModify = true;
    }
    async modifyProfile(t) {
      try {
        const e = await a.f.updateProfile(t);
        Object(i.i)(() => {
          if (e && e.code === 0) {
            const {
              user: {
                name: t,
                gender: n,
                avatar: r
              }
            } = e.data;
            this.userInfo.name = t;
            this.userInfo.gender = n;
            this.userInfo.avatar = r;
          } else {
            u.message.error(i18n("update_data_failure"));
          }
        });
      } catch (t) {
        u.message.error(t.message);
      }
    }
    async getUserProfile() {
      const t = await a.f.getUserProfile();
      Object(i.i)(() => {
        if (t) {
          if (t.code === 0 && this.isLogin) {
            const {
              gender: e,
              name: n,
              avatar: r
            } = t.data;
            this.userInfo.name = n;
            this.userInfo.gender = e;
            this.userInfo.avatar = r;
            this.userInfo["auto-backup"] = t.data["auto-backup"];
            this.userInfo["wp-color-update"] = t.data["wp-color-update"];
            this.userInfo["backup-version-v2"] = t.data["backup-version-v2"];
            this.userInfo.email = t.data.email;
            this.userInfo.phone_number = t.data.phone_number;
            this.userInfo.third_account = t.data.third_account;
            this.userInfo.renderAI = t.data.renderAI;
          } else if (t.code === 3012) {
            u.message.error(t.message);
            this.exitAccount();
          }
        }
      });
    }
    async getAreaCodeList() {
      const {
        data: t,
        error: e
      } = await a.f.getAreaCodeList();
      if (!e) {
        if (t == null ? undefined : t.length) {
          Object(i.i)(() => {
            this.areaCodeList = t;
          });
        }
      }
    }
    async updateAvatar(t) {
      try {
        return await a.f.uploadAvatar(t);
      } catch (t) {
        u.message.error(i18n("upload_avatar_failure"));
      }
    }
    closeModify() {
      this.isModify = false;
    }
    thirdPartyLogin(t) {
      let e;
      this.logining = true;
      switch (t) {
        case "facebook":
          e = this.URL + "/login/facebook";
          break;
        case "google":
          e = this.URL + "/login/google";
          break;
        case "qq":
          e = this.URL + "/login/qq";
          break;
        case "sina":
          e = this.URL + "/login/weibo";
          break;
        case "wechat":
          e = this.URL + "/login/wechat";
      }
      setTimeout(async () => {
        const t = this.openMiniWindow(e);
        this.opener = t;
        if (c.n) {
          return;
        }
        const n = setInterval(() => {
          t.postMessage({
            from: "origin_login"
          }, "*");
        }, 300);
        const r = t => {
          if (!t.data || !t.data.key || t.data.key !== "login") {
            return;
          }
          clearInterval(n);
          window.removeEventListener("message", r, false);
          const {
            message: e
          } = t.data;
          this.login3rdSuccess(e);
        };
        window.addEventListener("message", r, false);
      }, 300);
    }
    get isLastId() {
      const t = this.userInfo || {};
      const e = t.third_account || [];
      let n = 0;
      if (t.email) {
        ++n;
      }
      if (t.phone_number) {
        ++n;
      }
      n += e.length;
      return n <= 1;
    }
    thirdPartyBind(t) {
      if (this.binding) {
        return;
      }
      let e;
      this.binding = true;
      switch (t) {
        case a.f.ThirdLoginType.weibo:
        case a.f.ThirdLoginType.google:
        case a.f.ThirdLoginType.facebook:
        case a.f.ThirdLoginType.wechat:
        case a.f.ThirdLoginType.qq:
          e = this.openMiniWindow(`${c.y}/bind/to?type=${t}`);
          this.bindListener(e);
      }
    }
    async thirdPartyUnbind(t) {
      let e;
      switch (t) {
        case a.f.ThirdLoginType.weibo:
        case a.f.ThirdLoginType.google:
        case a.f.ThirdLoginType.facebook:
        case a.f.ThirdLoginType.qq:
        case a.f.ThirdLoginType.wechat:
          e = await a.f.unbindThird(t);
      }
      return e;
    }
    bindSuccess(t, e) {
      if (t === "email") {
        this.userInfo.email = e;
      } else if (t === "phone") {
        this.userInfo.phone_number = e;
      } else if (t === "third") {
        const t = this.userInfo.third_account || [];
        t.push(e);
        this.userInfo.third_account = t;
      }
    }
    unbindSuccess(t, e) {
      if (t === "email") {
        this.userInfo.email = null;
      } else if (t === "phone") {
        this.userInfo.phone_number = null;
      } else if (t === "third") {
        const t = this.userInfo.third_account || [];
        const n = t.findIndex(t => t.platform === e);
        if (n === -1) {
          return;
        }
        t.splice(n, 1);
        this.userInfo.third_account = t;
      }
    }
    async login(t) {
      const e = {
        password: t.password
      };
      if (t.type === "email") {
        e.email = t.account;
      } else {
        if (t.type !== "phone") {
          return;
        }
        e.phone_number = t.account;
      }
      const n = await a.f.login(e);
      Object(i.i)(() => {
        if (!n || n.code !== 0) {
          u.message.error(n.message);
          throw new Error(n.code);
        }
        this.loginEmailSuccess(n.data.user);
        this.setToken(n.data);
        this.setRefreshToken(n.data.refreshToken);
      });
    }
    async getMobileloginUrl(t = false) {
      if (t) {
        this.mobileloginUrl = "";
        this.mobileloginExpire = 0;
      }
      if (p.f) {
        const {
          data: t,
          error: e
        } = await a.f.getMobileloginUrl();
        if (e) {
          Object(i.i)(() => {
            this.mobileloginExpire = 0;
          });
          return;
        }
        Object(i.i)(() => {
          this.mobileloginUrl = t.url;
          this.mobileloginExpire = Math.floor(t.expire / 1000);
        });
        this.checkMobileloginUrl(t.code, t.type);
        if (this.mobileloginExpire !== 0) {
          this.countdownTimer = setInterval(() => {
            Object(i.i)(() => {
              this.mobileloginExpire -= 1;
            });
            if (this.mobileloginExpire <= 0) {
              clearInterval(this.countdownTimer);
            }
          }, 1000);
        }
      }
    }
    async checkMobileloginUrl(t, e, n = 5000) {
      if (p.f && this.mobileloginExpire > 3) {
        clearTimeout(this.checkMobileUrlTimer);
        this.checkMobileUrlTimer = setTimeout(async () => {
          const {
            data: r
          } = await a.f.checkMobileloginUrl(t, e);
          if (r && r.expired) {
            clearInterval(this.countdownTimer);
            Object(i.i)(() => {
              this.mobileloginExpire = 0;
            });
            return;
          }
          this.checkMobileloginUrl(t, e, n);
        }, n);
      }
    }
    async loginEmailSuccess(t) {
      this.logining = false;
      this.closeModal();
      this.isLogin = true;
      this.userInfo = t;
      this.isExpired = false;
      this.settingLoginSuccess();
    }
    setUserData(t) {
      this.logining = false;
      this.closeModal();
      this.isLogin = t.isLogin;
      this.userInfo = t;
      this.isExpired = false;
      ["token", "refreshToken", "isLogin"].forEach(t => delete this.userInfo[t]);
    }
    async login3rdSuccess(t) {
      if (!t || !Object.keys(t).length) {
        this.cancelLogin();
        return;
      }
      const e = t["login-type"];
      if (["qq", "wechat"].includes(e)) {
        const e = await a.f.loginWithUid(t);
        if (e.code === 0) {
          Object(i.i)(() => {
            this.setUserData(t);
            this.setToken(e.data);
            this.setRefreshToken(e.data.refreshToken);
          });
        } else if (e.code === 3006) {
          u.message.error("获取token失败");
        }
      } else {
        this.setUserData(t);
        this.setToken(t);
        this.setRefreshToken(t.refreshToken);
      }
      this.settingLoginSuccess();
    }
    settingLoginSuccess() {
      if (w.IS_ZH) {
        g.b.changeSetting("view", "isHideIcp", true);
      }
    }
    cancelLogin() {
      var t;
      this.logining = false;
      if ((t = this.opener) !== null && t !== undefined) {
        t.close();
      }
    }
    toggleClear(t) {
      this.clearAllData = t;
    }
    logout(t) {
      this.isShowLogoutConfirm = true;
      this.showConfirmOpt = t;
      if (t === "remove") {
        this.removeAccountDisableSec = 10;
        clearInterval(this.removeAccountDisableTimer);
        this.removeAccountDisableTimer = setInterval(() => {
          Object(i.i)(() => {
            this.removeAccountDisableSec -= 1;
            if (this.removeAccountDisableSec === 0) {
              clearInterval(this.removeAccountDisableTimer);
              this.removeAccountDisableTimer = null;
            }
          });
        }, 1000);
      }
    }
    showSecondProfileModal(t, e = false) {
      this.isModalFromAi = e;
      this.isShowSecondProfileModal = true;
      this.secondProfileModalType = t;
    }
    closeSecondProfileModal() {
      this.isShowSecondProfileModal = false;
      this.secondProfileModalType = null;
    }
    async exitAccount() {
      this.loading = true;
      b.b.postIframeMessage({
        type: b.a.logout,
        logoutWithClear: this.clearAllData
      });
      await new o.a(t => {
        setTimeout(() => {
          if (this.clearAllData) {
            this.clearAllStore().then(t);
          } else {
            t(null);
          }
        }, 200);
      });
      Object(i.i)(() => {
        this.isLogin = false;
        this.userInfo = {};
        this.clearToken();
      });
      if (this.clearAllData) {
        window.location.reload();
      } else {
        Object(i.i)(() => this.loading = false);
        this.closeLogoutConfirm();
        this.closeProfileModal();
        if (c.s) {
          d.pluginStore.hideLast();
        }
      }
    }
    async deleteAccount() {
      this.loading = true;
      const t = await a.f.deleteAccount();
      Object(i.i)(() => {
        if (t && t.code === 0) {
          this.exitAccount();
        } else {
          if (t.code === 3012) {
            this.exitAccount();
          }
          u.message.error(t.message);
        }
        this.loading = false;
      });
    }
    restoreKeysToStorage(t) {
      t.forEach(({
        data: t,
        key: e
      }) => localStorage.setItem(e, t));
    }
    async clearAllStore() {
      this.stopAutoBackupReaction();
      this.stopToStorageReaction();
      await y.a.deleteAllForLogout();
      const t = [m.d, m.e];
      await this._deleteIdb(t);
      f.slave.sendMessage("tabs-reload");
    }
    async _deleteIdb(t) {
      const e = await new o.a(t => h.a.keys((e, n) => t(n)));
      await o.a.all(t.map(t => new o.a(n => {
        const r = t.split("->");
        if (r.length === 1) {
          if (e.includes(t)) {
            h.a.removeItem(t, n);
            return;
          } else {
            n(null);
            return;
          }
        }
        n(null);
        if (e.includes(r[0])) {
          h.a.getItem(r[0], t => {
            r.reduce((t, e, n) => {
              if (n === r.length - 1) {
                Reflect.deleteProperty(t, e);
              }
              return t[e];
            }, t);
            h.a.setItem(r[0], n);
          });
        }
      })));
    }
    _clearLocalStorage(t) {
      const e = new Map();
      t.filter(Boolean).forEach(t => {
        const n = t.split("->");
        if (n.length === 1) {
          e.set(t, localStorage.getItem(t));
          return;
        }
        const r = JSON.parse(localStorage.getItem(n[0]));
        n.slice(1).forEach((t, e) => {
          const o = e === 0 ? r : r[n[e]];
          for (const e in o) {
            if (t !== e) {
              Reflect.deleteProperty(o, e);
            }
          }
        });
        e.set(n[0], JSON.stringify(r));
      });
      localStorage.clear();
      for (const t of e.keys()) {
        localStorage.setItem(t, e.get(t));
      }
    }
    closeLogoutConfirm() {
      this.isShowLogoutConfirm = false;
    }
    setToken(t) {
      this.token = t.token;
      b.b.postIframeMessage({
        type: b.a.authToken,
        authToken: T.token
      });
    }
    setRefreshToken(t) {
      this.refreshToken = t;
    }
    clearToken() {
      this.token = "";
      this.refreshToken = "";
    }
    setOutdated() {
      this.isExpired = true;
      this.isLogin = false;
    }
    toggleReLogin() {
      this.isExpired = false;
    }
    getPhoneNumber() {
      if (this.userInfo.phone_number) {
        const t = this.userInfo.phone_number + "";
        return `${t.slice(0, 3)}****${t.slice(-4)}`;
      }
      return "";
    }
  }
  v([i.g], _.prototype, "isExpired", undefined);
  v([i.g], _.prototype, "isLogin", undefined);
  v([i.g], _.prototype, "token", undefined);
  v([i.g], _.prototype, "userInfo", undefined);
  v([i.g], _.prototype, "refreshToken", undefined);
  v([i.g], _.prototype, "mobileloginExpire", undefined);
  v([i.g], _.prototype, "mobileloginUrl", undefined);
  v([i.g], _.prototype, "areaCodeList", undefined);
  v([i.e], _.prototype, "renderAI", null);
  v([i.e], _.prototype, "thirdAccountList", null);
  v([i.g], _.prototype, "wpColorUpdate", undefined);
  v([i.b], _.prototype, "setWpColorUpdate", null);
  v([i.g], _.prototype, "opener", undefined);
  v([i.g], _.prototype, "logining", undefined);
  v([i.g], _.prototype, "modalOpen", undefined);
  v([i.g], _.prototype, "removeAccountDisableSec", undefined);
  v([i.g], _.prototype, "removeAccountDisableTimer", undefined);
  v([i.b], _.prototype, "closeModal", null);
  v([i.b], _.prototype, "openModal", null);
  v([i.g], _.prototype, "showLoginTipModal", undefined);
  v([i.b], _.prototype, "toggleLoginTipModal", null);
  v([i.b], _.prototype, "closeLoginTipModal", null);
  v([i.g], _.prototype, "profileModal", undefined);
  v([i.g], _.prototype, "syncListModal", undefined);
  v([i.b], _.prototype, "closeProfileModal", null);
  v([i.b], _.prototype, "openProfileModal", null);
  v([i.b], _.prototype, "closeSyncListModal", null);
  v([i.b], _.prototype, "openSyncListModal", null);
  v([i.g], _.prototype, "isModify", undefined);
  v([i.b], _.prototype, "openModify", null);
  v([i.b], _.prototype, "modifyProfile", null);
  v([i.b], _.prototype, "getUserProfile", null);
  v([i.b], _.prototype, "getAreaCodeList", null);
  v([i.b], _.prototype, "updateAvatar", null);
  v([i.b], _.prototype, "closeModify", null);
  v([i.b], _.prototype, "thirdPartyLogin", null);
  v([i.g], _.prototype, "binding", undefined);
  v([i.e], _.prototype, "isLastId", null);
  v([i.b], _.prototype, "thirdPartyBind", null);
  v([i.b], _.prototype, "thirdPartyUnbind", null);
  v([i.b], _.prototype, "bindSuccess", null);
  v([i.b], _.prototype, "unbindSuccess", null);
  v([i.b], _.prototype, "login", null);
  v([i.b], _.prototype, "getMobileloginUrl", null);
  v([i.b], _.prototype, "checkMobileloginUrl", null);
  v([i.b], _.prototype, "loginEmailSuccess", null);
  v([i.b], _.prototype, "setUserData", null);
  v([i.b], _.prototype, "login3rdSuccess", null);
  v([i.b], _.prototype, "cancelLogin", null);
  v([i.g], _.prototype, "isShowLogoutConfirm", undefined);
  v([i.g], _.prototype, "showConfirmOpt", undefined);
  v([i.g], _.prototype, "isShowSecondProfileModal", undefined);
  v([i.g], _.prototype, "isModalFromAi", undefined);
  v([i.g], _.prototype, "secondProfileModalType", undefined);
  v([i.g], _.prototype, "clearAllData", undefined);
  v([i.b], _.prototype, "toggleClear", null);
  v([i.b], _.prototype, "logout", null);
  v([i.b], _.prototype, "showSecondProfileModal", null);
  v([i.b], _.prototype, "closeSecondProfileModal", null);
  v([i.g], _.prototype, "loading", undefined);
  v([i.b], _.prototype, "exitAccount", null);
  v([i.b], _.prototype, "deleteAccount", null);
  v([i.b], _.prototype, "clearAllStore", null);
  v([i.b], _.prototype, "closeLogoutConfirm", null);
  v([i.b], _.prototype, "setToken", null);
  v([i.b], _.prototype, "setRefreshToken", null);
  v([i.b], _.prototype, "clearToken", null);
  v([i.b], _.prototype, "setOutdated", null);
  v([i.b], _.prototype, "toggleReLogin", null);
  const T = new _();
  Object(i.c)(() => {
    if (T.firstSync) {
      if (T.isLogin) {
        T.closeModal();
        T.toggleReLogin();
        T.userProfilePromise = T.getUserProfile();
      } else {
        T.closeProfileModal();
        T.closeSecondProfileModal();
      }
    }
  });
  T.initSyncStore(y.l, ["userInfo", "isLogin", "token", "refreshToken", "wpColorUpdate"]);
  y.j.injectUserStore(T);
  y.j.injectSendTabsSync(t => {
    f.slave.sendMessage("tabs-sync", t);
  });
}, function (t, e, n) {
  "use strict";

  n.d(e, "b", function () {
    return y;
  });
  n.d(e, "a", function () {
    return b;
  });
  n(19);
  n(7);
  var r = n(2);
  var o = n(309);
  var i = n(24);
  var s = n(85);
  var a = n(109);
  var c = n(313);
  var u = n(0);
  var l = n(383);
  var h = n(398);
  var p = n(311);
  var f = n(13);
  function d(t, e, n, r) {
    var o;
    var i = arguments.length;
    var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(t, e, n, r);
    } else {
      for (var a = t.length - 1; a >= 0; a--) {
        if (o = t[a]) {
          s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(e, n, s);
    }
    return s;
  }
  class g extends o.a {
    constructor() {
      super(...arguments);
      this.localSettings = {};
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
      this.iconSpaceWidth = 0;
      this.iconSpaceHeight = 0;
      this.setting = this.init();
      this.updatetime = 0;
      this.permission = {
        topUseful: -1,
        topBookmark: -1,
        searchSuggest: -1,
        gmailNotice: -1,
        gmailCount: -1,
        todoNotice: -1
      };
      this.logs = new Map();
      this.permissionMapper = {
        topBookmark: [["bookmarks", "favicon"], []],
        topUseful: [["topSites", "favicon"], []],
        searchSuggest: [[], ["https://suggestion.baidu.com/", "https://google.com/"]],
        gmailNotice: [["notifications"], ["https://mail.google.com/"]],
        gmailCount: [[], ["https://mail.google.com/"]],
        todoNotice: [["notifications"], []]
      };
      this.showSettingHomeModal = false;
      this.webClickName = "";
    }
    init(t = {}) {
      return {
        notice: Object.assign({}, a.b.notice),
        link: Object.assign({}, a.b.link),
        view: Object.assign({}, a.b.view),
        layout: Object.assign({}, a.b.layout),
        animation: Object.assign({}, a.b.animation),
        icon: Object.assign({}, a.b.icon),
        search: Object.assign({}, a.b.search),
        font: Object.assign({}, a.b.font),
        _v1Setting: t
      };
    }
    get withPermissionTopUseful() {
      return this.setting.view.topUseful && this.permission.topUseful === 1;
    }
    get withPermissionTopBookmark() {
      return this.setting.view.topBookmark && this.permission.topBookmark === 1;
    }
    get withPermissionSearchSuggest() {
      return this.setting.search.searchSuggest && this.permission.searchSuggest === 1;
    }
    get needPermissionList() {
      const t = [];
      const {
        view: e,
        notice: n,
        search: r
      } = this.setting;
      const {
        topUseful: o,
        topBookmark: i,
        searchSuggest: s,
        gmailNotice: a,
        gmailCount: c,
        todoNotice: h
      } = this.permission;
      if (u.m && r.searchSuggest && s !== 1) {
        t.push({
          key: "searchSuggest",
          title: i18n("permission_serch_suggest_title"),
          content: i18n("permission_serch_suggest_content")
        });
      }
      if (u.m && n.gmail && a !== 1) {
        t.push({
          key: "gmailNotice",
          title: i18n("permission_gmail_notice_title"),
          content: i18n("permission_gmail_notice_content")
        });
      }
      if (u.m && n.gmailNumber && c !== 1) {
        t.push({
          key: "gmailCount",
          title: i18n("permission_gmail_num_title"),
          content: i18n("permission_gmail_num_content")
        });
      }
      if (!u.s && !u.r && !!e.topBookmark && i !== 1) {
        t.push({
          key: "topBookmark",
          title: i18n("permission_top_bookmark_title"),
          content: i18n("permission_top_bookmark_content")
        });
      }
      if (!u.s && !u.r && !!e.topUseful && o !== 1) {
        t.push({
          key: "topUseful",
          title: i18n("permission_top_useful_title"),
          content: i18n("permission_top_useful_content")
        });
      }
      if (l.a.needNotificationPermission && h !== 1) {
        if (!u.s && !u.r || Notification.permission !== "denied") {
          t.push({
            key: "todoNotice",
            title: i18n("permission_todo_notice_title"),
            content: i18n("permission_todo_notice_content")
          });
        }
      }
      return t;
    }
    get sideRatio() {
      return this.setting.view.scaleSide;
    }
    reset() {
      this.setting = this.init(this.setting._v1Setting);
      this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
    }
    diffRemote(t) {
      return !r.d.structural(t.setting || {}, this.setting);
    }
    sendSettingValue() {
      if (Object.keys(this.localSettings).length) {
        p.a.sendEvent({
          settingValue: this.localSettings
        });
        this.localSettings = {};
      }
    }
    async mergeRemote(t) {
      const e = t.setting;
      if (!t.setting) {
        return;
      }
      const n = this.setting;
      this.setting = {
        notice: Object.assign(Object.assign({}, n.notice), e.notice),
        link: Object.assign(Object.assign({}, n.link), e.link),
        view: Object.assign(Object.assign({}, n.view), e.view),
        layout: Object.assign(Object.assign({}, n.layout), e.layout),
        animation: Object.assign(Object.assign({}, n.animation), e.animation),
        icon: Object.assign(Object.assign({}, n.icon), e.icon),
        search: Object.assign(Object.assign({}, n.search), e.search),
        font: Object.assign(Object.assign({}, n.font), e.font),
        _v1Setting: e._v1Setting
      };
      const o = await i.a.getTimestamp();
      Object(r.i)(() => {
        this.updatetime = o;
      });
    }
    sendSettingLog(t, e) {
      if (this.logs.has(t)) {
        clearTimeout(this.logs.get(t));
      }
      this.logs.set(t, setTimeout(() => {
        p.a.sendEvent({
          settingAction: {
            [t]: e
          }
        });
        this.logs.delete(t);
      }, 2000));
    }
    async changeSetting(t, e, n) {
      if (this.setting[t][e] === n) {
        return;
      }
      this.setting[t][e] = n;
      if (t === "layout" && (e === "custom" && n === true || e === "customItem")) {
        this.setting.layout.row = this.setting.layout.customItem[0];
        this.setting.layout.col = this.setting.layout.customItem[1];
        this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
      }
      let o = `${t}_${e}`;
      let s = n;
      if (t === "layout" && (e === "col" || e === "row")) {
        this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
        o = "layout";
        s = this.setting.layout.row + "*" + this.setting.layout.col;
      }
      this.sendSettingLog(o, s);
      this.localSettings[o] = s;
      const a = await i.a.getTimestamp();
      Object(r.i)(() => {
        this.updatetime = a;
      });
      this.changeSettingEffect(t, e, n);
    }
    changeLayoutCb(t, e) {
      console.log("col, row", t, e);
      console.log("changeLayoutCb 未注册");
    }
    changeLayout(t) {
      this.changeLayoutCb = t;
    }
    changeSettingEffect(t, e, n) {
      switch (true) {
        case e === "topBookmark":
          if (n) {
            this.requestPermission("topBookmark", true);
          }
          break;
        case e === "topUseful":
          if (n) {
            this.requestPermission("topUseful", true);
          }
          break;
        case t === "notice" && e === "gmail":
          if (n) {
            this.requestPermission("gmailNotice", true);
          }
          break;
        case t === "notice" && e === "gmailNumber":
          if (n) {
            this.requestPermission("gmailCount", true);
          }
          break;
        case e === "searchSuggest":
          if (n) {
            this.requestPermission("searchSuggest", true);
          }
      }
    }
    async checkPermission(t) {
      if (u.s || u.r) {
        switch (t) {
          case "todoNotice":
          case "gmailNotice":
            if (Notification.permission === "granted") {
              this.permission[t] = 1;
            } else if (Notification.permission === "default") {
              this.permission[t] = -1;
            } else {
              this.permission[t] = 0;
            }
            return;
        }
        if (u.s) {
          return;
        }
      }
      if (this.permission[t] === 1) {
        const e = this.permissionMapper[t];
        try {
          if (await s.a.has(e[0], e[1])) {
            return;
          }
        } catch (t) {
          console.log(t);
        }
        Object(r.i)(() => {
          this.permission[t] = -1;
        });
      }
      const e = this.permissionMapper[t];
      try {
        if (await s.a.has(e[0], e[1])) {
          Object(r.i)(() => {
            this.permission[t] = 1;
          });
        }
      } catch (t) {}
    }
    async requestPermission(t, e = false) {
      if ((u.s || u.r) && ["todoNotice", "gmailNotice"].includes(t)) {
        await Object(h.a)();
        Object(r.i)(() => {
          this.permission.todoNotice = 1;
          this.permission.gmailNotice = 1;
        });
        return;
      }
      const n = this.permissionMapper[t];
      if (e || this.permission[t] !== 0 && this.permission[t] !== 1) {
        try {
          await s.a.request(n[0], n[1]);
          Object(r.i)(() => {
            this.permission[t] = 1;
          });
          if (t === "gmailNotice") {
            this.checkPermission("todoNotice");
          }
        } catch (e) {
          if (e && e.message === "REJECT") {
            Object(r.i)(() => {
              this.permission[t] = 0;
            });
          }
        }
      }
    }
    async requestAllPermission() {
      if (u.s || u.r) {
        await Object(h.a)();
        Object(r.i)(() => {
          this.permission.todoNotice = 1;
          this.permission.gmailNotice = 1;
        });
        return;
      }
      const t = [[], []];
      this.needPermissionList.forEach(e => {
        const n = this.permissionMapper[e.key];
        t[0].push(...n[0]);
        if (n) {
          t[1].push(...n[1]);
        }
      });
      try {
        await s.a.request(t[0], t[1]);
        Object(r.i)(() => {
          this.needPermissionList.forEach(t => {
            this.permission[t.key] = 1;
          });
        });
      } catch (t) {
        Object(r.i)(() => {
          this.needPermissionList.forEach(t => {
            this.permission[t.key] = 0;
          });
        });
      }
    }
    resetPermission(t) {
      this.permission[t] = -1;
    }
    setIconSpace(t) {
      this.setting.icon.scale = t.iconScale;
      this.setting.layout.colGap = t.colGap;
      this.setting.layout.rowGap = t.rowGap;
      this.setting.search.scale = t.searchScale;
    }
    openSearchSuggest() {
      if (this.setting.search.searchSuggest) {
        this.requestPermission("searchSuggest", true);
      } else {
        this.setting.search.searchSuggest = true;
      }
    }
    get sideScaleRatio() {
      return this.setting.view.scaleSide;
    }
    toggleShowSettingHome(t) {
      this.setting.view.isShowHomepageBtn = !t;
    }
    toggleSettingHomeModal() {
      this.webClickName = "";
      this.showSettingHomeModal = !this.showSettingHomeModal;
    }
    closeSettingHomeModal() {
      this.showSettingHomeModal = false;
    }
    setWebClickName(t) {
      this.webClickName = t;
    }
  }
  d([r.g], g.prototype, "innerWidth", undefined);
  d([r.g], g.prototype, "innerHeight", undefined);
  d([r.g], g.prototype, "iconSpaceWidth", undefined);
  d([r.g], g.prototype, "iconSpaceHeight", undefined);
  d([r.g], g.prototype, "setting", undefined);
  d([r.g], g.prototype, "updatetime", undefined);
  d([r.g], g.prototype, "permission", undefined);
  d([r.e], g.prototype, "withPermissionTopUseful", null);
  d([r.e], g.prototype, "withPermissionTopBookmark", null);
  d([r.e], g.prototype, "withPermissionSearchSuggest", null);
  d([r.e], g.prototype, "needPermissionList", null);
  d([r.e], g.prototype, "sideRatio", null);
  d([r.b], g.prototype, "reset", null);
  d([r.b], g.prototype, "mergeRemote", null);
  d([r.b], g.prototype, "changeSetting", null);
  d([r.b], g.prototype, "checkPermission", null);
  d([r.b], g.prototype, "requestPermission", null);
  d([r.b], g.prototype, "requestAllPermission", null);
  d([r.b], g.prototype, "resetPermission", null);
  d([r.b], g.prototype, "setIconSpace", null);
  d([r.b], g.prototype, "openSearchSuggest", null);
  d([r.e], g.prototype, "sideScaleRatio", null);
  d([r.b], g.prototype, "toggleShowSettingHome", null);
  d([r.g], g.prototype, "showSettingHomeModal", undefined);
  d([r.b], g.prototype, "toggleSettingHomeModal", null);
  d([r.b], g.prototype, "closeSettingHomeModal", null);
  d([r.g], g.prototype, "webClickName", undefined);
  d([r.b], g.prototype, "setWebClickName", null);
  const y = new g();
  y.initSyncStore(f.h, ["setting", "permission", "updatetime"], a.b);
  y.initAutoBackup("setting", ["setting"]);
  Object(r.c)(() => {
    if (y.firstSync && y.setting.view.topBookmark) {
      y.checkPermission("topBookmark");
    }
  }, {
    delay: 50
  });
  Object(r.c)(() => {
    if (y.firstSync && y.setting.view.topUseful) {
      y.checkPermission("topUseful");
    }
  }, {
    delay: 50
  });
  Object(r.c)(() => {
    if (y.firstSync && y.setting.notice.gmail) {
      y.checkPermission("gmailNotice");
    }
  }, {
    delay: 50
  });
  Object(r.c)(() => {
    if (l.a.firstSync && l.a.needNotificationPermission) {
      y.checkPermission("todoNotice");
    }
  }, {
    delay: 50
  });
  Object(r.c)(() => {
    if (y.firstSync && y.setting.notice.gmailNumber) {
      y.checkPermission("gmailCount");
    }
  }, {
    delay: 50
  });
  Object(r.c)(() => {
    if (y.firstSync && y.setting.search.searchSuggest) {
      y.checkPermission("searchSuggest");
    }
  }, {
    delay: 50
  });
  Object(r.c)(() => {
    if (y.firstSync && y.permission.gmailNotice === 1) {
      i.a.send({
        key: "bg-notice-gmail-permission",
        data: true
      });
    }
  });
  Object(r.c)(() => {
    if (y.firstSync) {
      const {
        gmail: t,
        gmailVoice: e,
        gmailNumber: n
      } = y.setting.notice;
      const {
        gmailCount: r,
        gmailNotice: o
      } = y.permission;
      i.a.send({
        key: "bg-notice-gmail-updated",
        data: {
          gmail: t && o === 1,
          gmailVoice: e,
          gmailNumber: n && (o === 1 || r === 1)
        }
      });
    }
  }, {
    delay: 100
  });
  Object(r.c)(() => {
    if (y.firstSync) {
      const t = {
        "--side-ratio": y.sideRatio,
        "--main-ratio": y.setting.view.scaleMain,
        "--icon-radius": Math.round(y.setting.icon.radius * 100) + "%",
        "--icon-font-color": y.setting.font.color,
        "--icon-font-size": Math.ceil(Math.max(y.setting.font.size * y.setting.view.scaleMain, 12)) + "px",
        "--icon-opacity": y.setting.icon.opacity,
        "--icon-visible": y.setting.icon.isHideIconName ? "hidden" : "visible",
        "--search-radius": "" + y.setting.search.radius,
        "--search-opacity": y.setting.search.opacity
      };
      i.a.setStyle(t);
    }
  }, {
    delay: 50
  });
  Object(r.c)(() => {
    if (y.firstSync) {
      let t = 0;
      let e = 20;
      if (y.withPermissionTopBookmark) {
        t += 36;
      }
      if (y.withPermissionTopUseful) {
        e += 26;
      }
      const n = {
        "--top-bar-height": t + "px",
        "--settings-icon-top-offset": e + "px"
      };
      i.a.setStyle(n);
    }
  });
  const m = t => {
    const e = {
      "--search-height": t.searchHeight,
      "--search-width": t.searchWidth,
      "--search-margin-top": t.searchMarginTop,
      "--search-margin-bottom": t.searchMarginBottom,
      "--search-ratio": t.searchRatio,
      "--icon-box-width": t.iconBoxWidth,
      "--icon-box-height": t.iconBoxHeight,
      "--icon-one-height": t.iconOneHeight,
      "--icon-width": t.iconWidth,
      "--mini-icon-padding": t.miniIconPadding,
      "--icon-ratio": t.iconRatio,
      "--icon-row": y.setting.layout.row,
      "--icon-col": y.setting.layout.col,
      "--main-icons-margin": t.iconsMargin
    };
    i.a.setStyle(e);
  };
  const b = (t = true) => {
    const e = {
      row: y.setting.layout.row,
      col: y.setting.layout.col,
      rowGap: y.setting.layout.rowGap,
      colGap: y.setting.layout.colGap,
      iconScale: y.setting.icon.scale,
      searchScale: y.setting.search.scale,
      innerHeight: innerHeight,
      innerWidth: innerWidth,
      miniMode: y.setting.icon.miniMode,
      fontSize: y.setting.font.size,
      topUseful: y.withPermissionTopUseful,
      topBookmark: y.withPermissionTopBookmark,
      mainRatio: y.setting.view.scaleMain
    };
    if (t) {
      requestIdleCallback(() => {
        const t = Object(c.a)(e);
        m(t);
      });
    } else {
      const t = Object(c.a)(e);
      m(t);
    }
  };
  Object(r.c)(() => {
    if (y.firstSync) {
      b(false);
    }
  }, {
    delay: 40
  });
  window.addEventListener("resize", i.a.throttle(() => {
    b(false);
  }, 56));
}, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "pluginStore", function () {
    return l;
  });
  n(7);
  var r = n(2);
  var o = n(85);
  var i = n(396);
  class s extends i.a {
    opened(t) {}
  }
  const a = Object(i.b)(new s());
  function c(t, e, n, r) {
    var o;
    var i = arguments.length;
    var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(t, e, n, r);
    } else {
      for (var a = t.length - 1; a >= 0; a--) {
        if (o = t[a]) {
          s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(e, n, s);
    }
    return s;
  }
  class u {
    constructor() {
      this.pluginsMap = {
        "infinity://weather": "side-weather",
        "infinity://todos": "side-todos",
        "infinity://notes": "side-notes",
        "infinity://history": "side-history",
        "infinity://bookmarks": "side-bookmarks",
        "infinity://extension": "side-extension",
        "infinity://chrome-apps": "chrome-apps",
        "infinity://wallpaper": "wallpaper",
        "infinity://settings": "side-profile",
        search: "side-search",
        profile: "side-profile",
        editIcon: "side-editicon",
        "side-tutorial": "side-tutorial",
        "infinity://chatai": "chatai"
      };
      this.pluginsTags = {
        "side-weather": false,
        "side-todos": false,
        "side-notes": false,
        "side-history": false,
        "side-bookmarks": false,
        "side-extension": false,
        "chrome-apps": false,
        "side-profile": false,
        "side-search": false,
        "side-editicon": false,
        "side-tutorial": false,
        wallpaper: false,
        chatai: false
      };
      this.pluginViews = [];
      this.focusRepair = false;
      Object(r.h)(() => this.pluginViews.map(t => t), ([t]) => {
        a.opened(t);
      });
    }
    initDom(t) {
      this.pluginsTags[t] = true;
    }
    async show(t) {
      if (this.pluginViews.includes(t)) {
        return;
      }
      const e = this.pluginsMap[t];
      if (this.pluginsTags[e] === false) {
        try {
          await this.requestPermission(e);
          Object(r.i)(() => {
            this.pluginsTags[e] = true;
            this.pluginViews.push(t);
          });
        } catch (t) {
          console.log("show:", t);
        }
      } else {
        this.pluginViews.push(t);
      }
    }
    async showRepair() {
      this.focusRepair = true;
      this.show("profile");
    }
    async showRepairBadVersion() {
      this.focusRepair = true;
      this.show("profile");
    }
    blurRepair() {
      this.focusRepair = false;
    }
    requestPermission(t) {
      switch (t) {
        case "side-bookmarks":
          return o.a.request(["bookmarks", "favicon"]);
        case "side-extension":
        case "chrome-apps":
          return o.a.request(["management"]);
        case "side-history":
          return o.a.request(["history", "favicon"]);
      }
    }
    hideLast() {
      const t = this.pluginViews.pop();
      if (this.pluginViews.length === 0) {
        document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform", "none");
      }
      return t;
    }
  }
  c([r.g], u.prototype, "pluginsTags", undefined);
  c([r.b], u.prototype, "initDom", null);
  c([r.g], u.prototype, "pluginViews", undefined);
  c([r.g], u.prototype, "focusRepair", undefined);
  c([r.b], u.prototype, "show", null);
  c([r.b], u.prototype, "showRepair", null);
  c([r.b], u.prototype, "showRepairBadVersion", null);
  c([r.b], u.prototype, "blurRepair", null);
  c([r.b], u.prototype, "hideLast", null);
  const l = new u();
}, function (t, e, n) {
  "use strict";

  n.d(e, "a", function () {
    return s;
  });
  var r = n(92);
  var o = n(136);
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const i = new WeakMap();
  const s = Object(o.e)(t => e => {
    if (!(e instanceof o.b)) {
      throw new Error("unsafeHTML can only be used in text bindings");
    }
    const n = i.get(e);
    if (n !== undefined && Object(r.h)(t) && t === n.value && e.value === n.fragment) {
      return;
    }
    const s = document.createElement("template");
    s.innerHTML = t;
    const a = document.importNode(s.content, true);
    e.setValue(a);
    i.set(e, {
      value: t,
      fragment: a
    });
  });
}, function (t, e, n) {
  t.exports = n.p + "images/error.f782e7c.png";
}, function (t, e, n) {
  t.exports = n.p + "images/remind.896ff6f.png";
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  n.r(e);
  n.d(e, "FindPassword", function () {
    return g;
  });
  n(7);
  var r = n(1);
  n(470);
  var o = n(432);
  var i = n(163);
  var s = n(22);
  var a = n(106);
  var c = n(6);
  var u = n(24);
  var l = n(0);
  var h = r.b`.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.wrapper .container {
  display: flex;
}
.wrapper .form {
  box-sizing: border-box;
  width: 450px;
  height: 495px;
  padding: 60px;
  background: #f9f9f9;
  border-radius: 6px 0px 0px 6px;
}
.wrapper .bg {
  width: 400px;
  height: 495px;
}
.wrapper .bg img {
  width: 100%;
  height: 100%;
}
.large-title {
  margin: 0;
  margin-bottom: 2px;
  font-size: 30px;
  font-weight: 600;
  color: #333;
  line-height: 42px;
}
.large-title + p {
  margin: 0;
  color: #333;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
}
.form-control {
  margin-top: 40px;
}
.form-control infinito-button {
  --button-color: #333;
  margin-top: 26px;
  width: 100%;
  height: 52px;
}
.form-control .cancel {
  display: block;
  margin: 0;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
infinito-input {
  --border-color: #999;
  margin-bottom: 24px;
}
.radio-control {
  display: flex;
  align-items: center;
}
.radio-control > span {
  font-size: 14px;
  margin-right: 24px;
}
.radio-control infinito-radio-group {
  flex: 1;
}
.radio-control .radio-content {
  display: flex;
}
.radio-control .radio-content p {
  margin: 0;
  margin-right: 6px;
}
.email-wrapper {
  display: flex;
  margin-bottom: 24px;
}
.email-wrapper infinito-input {
  margin: 0;
  flex: 1;
}
.email-wrapper infinito-button {
  --button-color: none;
  --border-color: #333;
  --font-color: #333;
  width: auto;
  min-width: 90px;
  margin: 0;
  margin-left: 10px;
}
.imgcode-wrapper .img-code {
  width: 156px;
  height: 52px;
  margin-left: 12px;
  border-radius: 6px;
  background: #e9e9e9;
  cursor: pointer;
}
.imgcode-wrapper .img-code svg {
  width: 100%;
  height: 100%;
}
`;
  var p = n(621);
  var f = n.n(p);
  function d(t, e, n, r) {
    var o;
    var i = arguments.length;
    var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(t, e, n, r);
    } else {
      for (var a = t.length - 1; a >= 0; a--) {
        if (o = t[a]) {
          s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(e, n, s);
    }
    return s;
  }
  let g = class extends r.a {
    constructor() {
      super();
      this.email = "";
      this.emailError = "";
      this.imgCode = "";
      this.imgcodeTime = Date.now();
      this.imgcodeError = "";
      this.password = "";
      this.codeError = "";
      this.disabled = false;
      this.showCounter = false;
      this.sec = 60;
      this.loading1 = false;
      this.loading2 = false;
      this.imgToken = "";
      this.imgData = "";
      document.title = Object(c.i18n)("forget_password");
    }
    firstUpdated() {
      this.getTokenImg();
    }
    getImg() {
      this.imgcodeTime = Date.now();
    }
    async getTokenImg() {
      if (l.C.supportCookie) {
        return;
      }
      const {
        data: t,
        error: e
      } = await s.f.geVerifyTokenImg();
      if (!e) {
        this.imgData = t.img;
        this.imgToken = t.token;
      }
    }
    render() {
      return r.e`
      <div class="wrapper">
        <div class="container">
          <div class="form">
            <div>
              <h2 class="large-title">${Object(c.i18n)("forget_password")}</h2>
              <p>${c.IS_ZH ? Object(c.i18n)("reset_password_by_email_or_phone") : Object(c.i18n)("reset_password_by_email")}</p>
            </div>
            <div class="form-control">
              <div class="email-wrapper imgcode-wrapper">
                <infinito-input
                  name="imgcode"
                  placeholder="${Object(c.i18n)("img_verify_code")}"
                  .error="${this.imgcodeError}"
                  @onfocus=${() => {
        this.imgcodeError = "";
      }}
                >
                </infinito-input>
                ${l.C.supportCookie ? r.e`
                      <img
                        @click="${this.getImg}"
                        class="img-code"
                        src="${l.y + "/verify/get_img?t=" + this.imgcodeTime}"
                        alt=""
                      />
                    ` : r.e` <div @click="${this.getTokenImg}" class="img-code">${Object(o.a)(this.imgData)}</div> `}
              </div>
              <div class="email-wrapper">
                <infinito-input
                  name="email"
                  placeholder="${c.IS_ZH ? Object(c.i18n)("email_or_phone_number_tips") : Object(c.i18n)("email")}"
                  .error="${this.emailError}"
                  @onfocus=${() => {
        this.emailError = "";
      }}
                >
                </infinito-input>
                ${this.showCounter ? r.e`<infinito-button disabled>${this.sec}s</infinito-button>` : r.e`
                      <infinito-button
                        style="max-width: 165px;"
                        .loading=${this.loading1}
                        @click=${u.a.debounce(this.getCode, 200)}
                      >
                        ${Object(c.i18n)("verity_code")}
                      </infinito-button>
                    `}
              </div>
              <infinito-input
                name="code"
                placeholder="${Object(c.i18n)("enter_verification_code_tips")}"
                .error="${this.codeError}"
                @onfocus=${() => {
        this.codeError = "";
      }}
              >
              </infinito-input>
              <infinito-button primary .loading=${this.loading2} @click="${this.handleClick}">
                ${Object(c.i18n)("next")}
              </infinito-button>
            </div>
          </div>
          <div class="bg">
            <img .src=${f.a} alt="bg" />
          </div>
        </div>
      </div>
    `;
    }
    async getCode() {
      if (this.disabled) {
        return;
      }
      const t = this.checkEmailOrPhone();
      this.emailError = t.error;
      if (this.emailError) {
        return;
      }
      this.imgcodeError = this.checkImgcode();
      if (this.imgcodeError) {
        return;
      }
      const e = this.emilInput.value.trim();
      const n = this.imgcodeInput.value.trim();
      let r;
      this.disabled = true;
      this.loading1 = true;
      if (t.type === "email") {
        r = await s.f.getEmailCode({
          email: e,
          code: n,
          token: l.C.supportCookie ? undefined : this.imgToken
        });
      } else if (t.type === "phone") {
        r = await s.f.sendPhoneCode({
          phone_number: e,
          type: "reset_password",
          code: n,
          token: l.C.supportCookie ? undefined : this.imgToken
        });
      }
      if (!r.error || r.error.code !== 3021) {
        if (l.C.supportCookie) {
          this.getImg();
        } else {
          this.getTokenImg();
        }
      }
      if (r.error) {
        this.disabled = false;
        a.message.error(r.error.message);
      } else {
        a.message.success(Object(c.i18n)("send_success"));
        this.showCounter = true;
        this.timer = setInterval(() => {
          if (this.sec > 0 && this.sec <= 60) {
            this.sec--;
          } else {
            this.sec = 60;
            this.showCounter = false;
            this.disabled = false;
            clearInterval(this.timer);
          }
        }, 1000);
      }
      this.loading1 = false;
    }
    async handleClick() {
      if (this.loading2) {
        return;
      }
      const t = this.emilInput.value;
      const e = this.codeInput.value;
      const n = this.checkEmailOrPhone();
      this.emailError = n.error;
      this.codeError = this.checkCode();
      if (this.emailError || this.codeError) {
        return;
      }
      let r;
      this.loading2 = true;
      if (n.type === "email") {
        r = await s.f.forgetPassword({
          email: t,
          code: e
        });
      } else if (n.type === "phone") {
        r = await s.f.verifyPhoneVCode(t, e);
      }
      if (r.error) {
        a.message.error(r.error.message);
      } else {
        Object(i.c)(`/reset-password/index.html?account=${encodeURIComponent(t)}&code=${e}`);
      }
      this.loading2 = false;
    }
    checkImgcode() {
      if (!this.imgcodeInput.value.trim()) {
        return Object(c.i18n)("cannot_empty");
      }
    }
    checkEmailOrPhone() {
      const t = this.emilInput.value.trim();
      if (t) {
        if (/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)) {
          return {
            type: "email"
          };
        } else if (/^1[3456789]\d{9}$/.test(t)) {
          return {
            type: "phone"
          };
        } else {
          return {
            error: c.IS_ZH ? Object(c.i18n)("please_enter_right_account") : Object(c.i18n)("email_format_error")
          };
        }
      } else {
        return {
          error: Object(c.i18n)("cannot_empty")
        };
      }
    }
    checkCode() {
      if (!this.codeInput.value) {
        return Object(c.i18n)("verity_code_no_value");
      }
    }
  };
  g.styles = h;
  d([Object(r.h)("infinito-input[name=\"email\"]")], g.prototype, "emilInput", undefined);
  d([Object(r.h)("infinito-input[name=\"imgcode\"]")], g.prototype, "imgcodeInput", undefined);
  d([Object(r.h)("infinito-input[name=\"code\"]")], g.prototype, "codeInput", undefined);
  d([Object(r.g)({
    type: String
  })], g.prototype, "email", undefined);
  d([Object(r.g)({
    type: String
  })], g.prototype, "emailError", undefined);
  d([Object(r.g)({
    type: String
  })], g.prototype, "imgCode", undefined);
  d([Object(r.g)({
    type: Number
  })], g.prototype, "imgcodeTime", undefined);
  d([Object(r.g)({
    type: String
  })], g.prototype, "imgcodeError", undefined);
  d([Object(r.g)({
    type: String
  })], g.prototype, "password", undefined);
  d([Object(r.g)({
    type: String
  })], g.prototype, "codeError", undefined);
  d([Object(r.g)({
    type: Boolean
  })], g.prototype, "disabled", undefined);
  d([Object(r.g)({
    type: Boolean
  })], g.prototype, "showCounter", undefined);
  d([Object(r.g)({
    type: Number
  })], g.prototype, "sec", undefined);
  d([Object(r.g)({
    type: Boolean
  })], g.prototype, "loading1", undefined);
  d([Object(r.g)({
    type: Boolean
  })], g.prototype, "loading2", undefined);
  d([Object(r.f)()], g.prototype, "imgToken", undefined);
  d([Object(r.f)()], g.prototype, "imgData", undefined);
  g = d([Object(r.c)("find-password")], g);
},,,,,,,,,,,,,,,,, function (t, e, n) {
  t.exports = n.p + "images/user-bg1.519670c.png";
}]]);