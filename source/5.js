(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
  0: function (n, t, e) {
    "use strict";

    e.d(t, "t", function () {
      return o;
    });
    e.d(t, "j", function () {
      return i;
    });
    e.d(t, "q", function () {
      return a;
    });
    e.d(t, "s", function () {
      return u;
    });
    e.d(t, "h", function () {
      return c;
    });
    e.d(t, "i", function () {
      return s;
    });
    e.d(t, "n", function () {
      return f;
    });
    e.d(t, "k", function () {
      return d;
    });
    e.d(t, "r", function () {
      return g;
    });
    e.d(t, "e", function () {
      return l;
    });
    e.d(t, "c", function () {
      return m;
    });
    e.d(t, "z", function () {
      return h;
    });
    e.d(t, "d", function () {
      return p;
    });
    e.d(t, "l", function () {
      return w;
    });
    e.d(t, "m", function () {
      return v;
    });
    e.d(t, "o", function () {
      return b;
    });
    e.d(t, "p", function () {
      return y;
    });
    e.d(t, "v", function () {
      return C;
    });
    e.d(t, "a", function () {
      return x;
    });
    e.d(t, "y", function () {
      return I;
    });
    e.d(t, "w", function () {
      return k;
    });
    e.d(t, "u", function () {
      return L;
    });
    e.d(t, "x", function () {
      return S;
    });
    e.d(t, "B", function () {
      return z;
    });
    e.d(t, "A", function () {
      return j;
    });
    e.d(t, "f", function () {
      return A;
    });
    e.d(t, "b", function () {
      return M;
    });
    e.d(t, "g", function () {
      return T;
    });
    e.d(t, "G", function () {
      return _;
    });
    e.d(t, "F", function () {
      return B;
    });
    e.d(t, "C", function () {
      return O;
    });
    e.d(t, "D", function () {
      return P;
    });
    e.d(t, "E", function () {
      return q;
    });
    e(19);
    e(64);
    const o = typeof window != "object";
    const i = false;
    const a = true;
    const u = false;
    const c = false;
    const s = true;
    const f = false;
    const d = false;
    const g = false;
    const l = "pro";
    const m = "chrome";
    const h = "11.0.41";
    const p = "1783058950124";
    const w = s || f || d || c || g;
    const v = (s || f || d || g) && !c;
    const b = navigator.platform.indexOf("Mac") >= 0;
    const y = false;
    const C = a ? "jiaocheng.inftab.com" : "qzeuoq1yf.hn-bkt.clouddn.com";
    const x = "https://infinityicon.infinitynewtab.com/assets";
    const I = a ? "https://api.inftab.com/v2" : "https://api-infinitynewtab-com.test690.com/v2";
    const k = a ? "https://api.inftab.com" : "https://api-infinitynewtab-com.test690.com";
    const L = "https://privacy.inftab.com/privacy";
    const S = "https://infinity-api.infinitynewtab.com";
    const z = u ? location.origin : a ? "https://inftab.com" : "https://test.inftab.com";
    const j = "https://weatheroffer.com/api/extfans";
    const A = "https://mail.google.com";
    const M = "https://suggestion.baidu.com";
    const T = "https://google.com";
    const U = ["cs", "da", "de", "el", "en", "en-GB", "en-US", "es", "es-419", "fi", "fr", "hi", "hu", "id", "it", "ja", "ko", "ms", "nl", "no", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
    const _ = !!globalThis.chrome?.abp;
    function B(n = "", t = "_") {
      const e = n.split(t);
      if (e.length === 2) {
        e[0] = e[0].toLowerCase();
        e[1] = e[1].toUpperCase();
        return e.join(t);
      } else {
        return n;
      }
    }
    function N(n) {
      const t = B(n.replace("_", "-"), "-");
      if (U.includes(t)) {
        return t;
      } else if (n === "zh" || t.indexOf("zh-") === 0) {
        return "zh-CN";
      } else {
        return "en-US";
      }
    }
    const O = {
      get lang() {
        if (u) {
          return function () {
            if (!o) {
              const n = localStorage.getItem("langCode");
              if (localStorage.getItem("setLangCode") !== null && n !== null) {
                return n;
              }
            }
            return N(navigator.language || "en-us");
          }();
        } else {
          return N(chrome.i18n.getUILanguage());
        }
      },
      get extVersion() {
        if (u) {
          return "web";
        } else {
          return chrome.runtime.getManifest().version;
        }
      },
      get extId() {
        if (u) {
          return "web";
        } else {
          return chrome.runtime.id;
        }
      },
      get platform() {
        if (u) {
          return "web";
        } else {
          return "chrome";
        }
      },
      get supportCookie() {
        return !g && this.runtimePlatform !== "safari";
      },
      get runtimePlatform() {
        if (_) {
          return "360";
        } else {
          return $().broswer;
        }
      },
      get platformVersion() {
        return $().version;
      },
      get isZh() {
        return O.lang === "zh-CN";
      },
      get isEn() {
        return /^(en|en-GB|en-US)$/.test(O.lang);
      },
      get isWindows() {
        return /windows|win32/i.test(navigator.userAgent);
      },
      get isMac() {
        return navigator.platform.toLowerCase().indexOf("mac") !== -1;
      },
      get vendor() {
        let n = m;
        if (m === "web") {
          n = $().broswer;
        }
        return n.charAt(0).toUpperCase() + n.slice(1);
      }
    };
    function $() {
      const n = {};
      const t = navigator.userAgent.toLowerCase();
      let e;
      if (e = t.match(/edg\/([\d.]+)/i)) {
        n.edge = e[1];
      } else if ((e = t.match(/rv:([\d.]+)\) like gecko/)) || (e = t.match(/msie ([\d.]+)/))) {
        n.ie = e[1];
      } else if (e = t.match(/firefox\/([\d.]+)/)) {
        n.firefox = e[1];
      } else if (e = t.match(/chrome\/([\d.]+)/)) {
        n.chrome = e[1];
      } else if (e = t.match(/opera.([\d.]+)/)) {
        n.opera = e[1];
      } else if (e = t.match(/version\/([\d.]+).*safari/)) {
        n.safari = e[1];
      }
      if (n.edge) {
        return {
          broswer: "edge",
          version: n.edge
        };
      } else if (n.ie) {
        return {
          broswer: "ie",
          version: n.ie
        };
      } else if (n.firefox) {
        return {
          broswer: "firefox",
          version: n.firefox
        };
      } else if (n.chrome) {
        return {
          broswer: "chrome",
          version: n.chrome
        };
      } else if (n.opera) {
        return {
          broswer: "opera",
          version: n.opera
        };
      } else if (n.safari) {
        return {
          broswer: "safari",
          version: n.safari
        };
      } else {
        return {
          broswer: "none",
          version: "0"
        };
      }
    }
    const P = "10.0.107";
    const q = "10.0.109";
  },
  6: function (n, t, e) {
    "use strict";

    e.r(t);
    e.d(t, "i18n", function () {
      return s;
    });
    e.d(t, "IS_ZH", function () {
      return d;
    });
    e.d(t, "IS_EN", function () {
      return g;
    });
    e.d(t, "initMasterI18n", function () {
      return l;
    });
    e.d(t, "initI18n", function () {
      return m;
    });
    e.d(t, "setLangToLocal", function () {
      return p;
    });
    e.d(t, "getLangFromLocal", function () {
      return w;
    });
    e(19);
    e(64);
    e(7);
    var r = e(0);
    var o = e(107);
    var i = e.n(o);
    var a = e(23);
    var u = e.n(a);
    let c = {};
    const s = function (n, t) {
      if (r.l && !r.r) {
        return chrome.i18n.getMessage(n, t) || n;
      }
      if (r.s || r.r) {
        if (r.r && t === undefined) {
          return chrome.i18n.getMessage(n, t) || n;
        }
        const o = c[n]?.message;
        const i = [];
        if (typeof t == "string") {
          i.push(t);
        } else if (Array.isArray(t)) {
          i.push(...t);
        }
        const a = /(\$.+?\$)/g;
        let u = a.exec(o);
        let s = o;
        while (u) {
          let [n] = i.splice(0, 1);
          if (n === undefined) {
            n = "";
          }
          s = s.replace(u[1], n);
          u = a.exec(o);
        }
        return s || n;
      }
      return n;
    };
    function f() {
      return r.C.lang || "";
    }
    if (r.t) {
      globalThis.i18n = s;
    } else {
      window.i18n = s;
    }
    const d = f() === "zh-CN";
    const g = f().startsWith("en");
    async function l() {
      const n = await w();
      c = n;
    }
    async function m() {
      if (!r.s && !r.r) {
        return;
      }
      const {
        slave: n
      } = await Promise.all([e.e(27), e.e(33)]).then(e.bind(null, 161));
      const t = r.C.lang;
      try {
        const e = await w();
        const r = localStorage.getItem("setLangCode");
        const o = localStorage.getItem("langCode");
        if (r !== null && e !== null || o === t && e !== null) {
          c = e;
          h(r ? o : t);
        } else {
          await h(r ? o : t);
        }
        n.postTask("slave:master-init-i18n", c);
      } catch (n) {}
    }
    async function h(n) {
      const t = n.replace("-", "_");
      const e = (await i.a.get(`${r.B}/_locales/${Object(r.F)(t)}/messages.json?v=1727661706484`)).data;
      if (Object.keys(e).length > 50) {
        c = e;
        localStorage.setItem("langCode", n);
        p(e);
      }
    }
    function p(n) {
      return u.a.setItem("current-language", n);
    }
    function w() {
      return u.a.getItem("current-language");
    }
  }
}]);