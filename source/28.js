(window.webpackJsonp = window.webpackJsonp || []).push([[28, 39], {
  13: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return f;
    });
    n.d(t, "d", function () {
      return p;
    });
    n.d(t, "g", function () {
      return m;
    });
    n.d(t, "h", function () {
      return h;
    });
    n.d(t, "i", function () {
      return w;
    });
    n.d(t, "j", function () {
      return y;
    });
    n.d(t, "k", function () {
      return b;
    });
    n.d(t, "l", function () {
      return v;
    });
    n.d(t, "n", function () {
      return E;
    });
    n.d(t, "o", function () {
      return k;
    });
    n.d(t, "m", function () {
      return S;
    });
    n.d(t, "b", function () {
      return x;
    });
    n.d(t, "c", function () {
      return O;
    });
    n.d(t, "f", function () {
      return C;
    });
    n.d(t, "e", function () {
      return j;
    });
    var r;
    var a = n(5);
    var o = n.n(a);
    n(7);
    var i = n(0);
    var s = n(50);
    var c = n(23);
    var u = n.n(c);
    var l = n(166);
    async function d(e, t, n, r = false) {
      try {
        if (n === "idb") {
          await u.a.setItem(e, t);
        } else if (n === "localstorage") {
          let n = t;
          if (!r) {
            n = JSON.stringify(t);
          }
          if (i.l && s.a) {
            await Object(l.d)(e, n);
          } else {
            localStorage.setItem(e, n);
          }
        } else if (n === "storage.local") {
          await new o.a((n, r) => chrome.storage.local.set({
            [e]: t
          }, () => {
            const e = chrome.runtime.lastError;
            if (e) {
              r(e);
            }
            n(true);
          }));
        }
        return {
          data: true
        };
      } catch (e) {
        console.error("setStorage -> error", e);
        return {
          error: e
        };
      }
    }
    async function g(e, t) {
      try {
        if (t === "idb") {
          await u.a.removeItem(e);
        } else if (t === "localstorage") {
          if (i.l && s.a) {
            await Object(l.c)(e);
          } else {
            localStorage.removeItem(e);
          }
        } else if (t === "storage.local") {
          await new o.a((t, n) => chrome.storage.local.remove(e, () => {
            const e = chrome.runtime.lastError;
            if (e) {
              n(e);
            }
            t(null);
          }));
        }
        return {
          data: true
        };
      } catch (e) {
        console.error("clearStorage -> error", e);
        return {
          error: e
        };
      }
    }
    (function (e) {
      e.storeNote = "store-notes";
      e.storeSearch = "store-search";
      e.storeSetting = "store-setting";
      e.storeSite = "store-site";
      e.storeSync = "store-sync";
      e.storeTodo = "store-todo";
      e.storeUser = "store-user";
      e.storeWallpaper = "store-wallpaper";
      e.storeWeather = "store-weather";
      e.storeBookmarks = "store-bookmarks";
      e.storeGmail = "store-gmail";
      e.storePrivacy = "store-privacy";
      e.storeWallpaperAutoData = "store-wallpaper-auto-data";
      e.storeNotification = "store-notification";
    })(r ||= {});
    class f {
      constructor(e, t, n) {
        this.options = {
          ensureStringValue: false,
          keepWithLogout: false
        };
        this.key = e;
        this.type = t;
        this.options = Object.assign(Object.assign({}, this.options), n);
        this.setInstanceMapper();
      }
      static getInstanceFromKey(e) {
        if (this.instanceKeyMapper.has(e)) {
          return this.instanceKeyMapper.get(e);
        } else {
          return null;
        }
      }
      static async deleteAllForLogout() {
        const e = Array.from(this.instanceKeyMapper.values());
        let t;
        if ((await o.a.all(e.map(async e => await e.deleteForLogout()))).some(e => !!e.error && (t = e.error, true))) {
          return {
            error: t
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
      async create(e) {
        return await d(this.key, e, this.type);
      }
      async read(e) {
        return await async function (e, t, n = false) {
          try {
            if (t === "idb") {
              return {
                data: await u.a.getItem(e)
              };
            }
            if (t === "localstorage") {
              let t;
              t = i.l && s.a ? await Object(l.a)(e) : localStorage.getItem(e);
              if (!n && t) {
                if (t === "undefined") {
                  return {
                    data: undefined
                  };
                } else {
                  return {
                    data: JSON.parse(t)
                  };
                }
              } else {
                return {
                  data: t
                };
              }
            }
            if (t === "storage.local") {
              return {
                data: await new o.a((t, n) => chrome.storage.local.get(e, r => {
                  const a = chrome.runtime.lastError;
                  if (a) {
                    n(a);
                  }
                  t(r == null ? undefined : r[e]);
                }))
              };
            }
          } catch (e) {
            console.error("getStorage -> error", e);
            return {
              error: e
            };
          }
        }(this.key, e || this.type);
      }
      async update(e) {
        const {
          data: t,
          error: n
        } = await this.read();
        if (n) {
          return {
            error: n
          };
        }
        if (t && typeof t == "object") {
          const n = Object.assign(Object.assign({}, t), e);
          return await this.create(n);
        }
        return {
          error: {
            data: t
          }
        };
      }
      async delete(e) {
        return await g(this.key, e || this.type);
      }
      async deleteWithRetain(...e) {
        if (e.length === 0) {
          return {
            error: {
              keys: e
            }
          };
        }
        const {
          data: t,
          error: n
        } = await this.read();
        if (n) {
          return {
            error: n
          };
        }
        if (t && typeof t == "object") {
          const n = {};
          e.forEach(e => {
            n[e] = t[e];
          });
          return await this.create(n);
        }
        return {
          error: {
            data: t
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
    const p = new f(r.storeNote, "idb");
    const m = new class extends f {
      async create(e) {
        if (this.type !== "localstorage") {
          setTimeout(() => {
            d(this.key, e, "localstorage");
          }, 0);
        }
        return super.create(e);
      }
      async delete() {
        if (this.type !== "localstorage") {
          requestAnimationFrame(() => {
            g(this.key, "localstorage");
          });
        }
        return super.delete();
      }
      async deleteForLogout() {
        return await super.deleteWithRetain("ignoreSuggest");
      }
    }(r.storeSearch, i.i ? "localstorage" : "idb");
    const h = new class extends f {
      async create(e) {
        if (this.type !== "localstorage") {
          setTimeout(() => {
            d(this.key, e, "localstorage");
          }, 0);
        }
        return super.create(e);
      }
      async delete() {
        if (this.type !== "localstorage") {
          requestAnimationFrame(() => {
            g(this.key, "localstorage");
          });
        }
        return super.delete();
      }
      async deleteForLogout() {
        return await super.deleteWithRetain("permission");
      }
    }(r.storeSetting, i.i ? "localstorage" : "idb");
    const w = new class extends f {
      async create(e) {
        if (this.type !== "localstorage") {
          setTimeout(() => {
            d(this.key, e, "localstorage");
          }, 0);
        }
        return super.create(e);
      }
      async delete() {
        if (this.type !== "localstorage") {
          requestAnimationFrame(() => {
            g(this.key, "localstorage");
          });
        }
        return super.delete();
      }
    }(r.storeSite, i.i ? "localstorage" : "idb");
    const y = new class extends f {
      constructor() {
        super(...arguments);
        this.userStore = null;
        this.sendTabsSync = e => {
          console.warn("SyncStorageManager ~ sync: need inject sendTabsSync", e);
        };
      }
      injectUserStore(e) {
        this.userStore = e;
      }
      injectSendTabsSync(e) {
        this.sendTabsSync = e;
      }
      async updateSyncPipe(e, t) {
        if (!this.userStore?.isLogin) {
          return {
            error: "isLogin false"
          };
        }
        const {
          data: r,
          error: a
        } = await this.read();
        if (a || !r) {
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
        o.data[e] = t;
        o.timestamp = Date.now();
        if (!o.websocketKeys.includes(e)) {
          o.websocketKeys.push(e);
        }
        const i = await this.update({
          autoBackupPipe: o
        });
        this.sendTabsSync(this.key);
        return i;
      }
    }(r.storeSync, "idb");
    const b = new f(r.storeTodo, "idb");
    const v = new f(r.storeUser, i.i ? "localstorage" : "idb");
    const E = new f(r.storeWallpaper, "idb");
    const k = new f(r.storeWeather, "idb");
    const S = new f(r.storeWallpaperAutoData, "idb");
    const x = new f(r.storeBookmarks, "localstorage", {
      keepWithLogout: true
    });
    const O = new f(r.storeGmail, "localstorage", {
      keepWithLogout: true
    });
    const C = new f(r.storePrivacy, "localstorage", {
      keepWithLogout: true
    });
    const j = new f(r.storeNotification, "idb");
  },
  36: function (e, t, n) {
    "use strict";

    n.d(t, "d", function () {
      return r;
    });
    n.d(t, "e", function () {
      return a;
    });
    n.d(t, "f", function () {
      return o;
    });
    n.d(t, "g", function () {
      return i;
    });
    n.d(t, "b", function () {
      return s;
    });
    n.d(t, "c", function () {
      return c;
    });
    n.d(t, "a", function () {
      return u;
    });
    n(19);
    const r = "store-wallpaper-cache";
    const a = "infinity-image-base64";
    const o = navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/);
    const i = "format/webp/";
    const s = "https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/default.png";
    const c = () => `${s}?imageView2/2/w/${screen.width}/${o ? "" : i}interlace/1`;
    const u = true;
  },
  397: function (e, t, n) {
    var r = n(16);
    var a = n(4);
    var o = n(60);
    var i = n(399);
    var s = n(20);
    var c = n(21).f;
    var u = n(101).f;
    var l = n(400);
    var d = n(216);
    var g = n(217);
    var f = n(26);
    var p = n(9);
    var m = n(11);
    var h = n(49).enforce;
    var w = n(102);
    var y = n(8);
    var b = n(218);
    var v = n(219);
    var E = y("match");
    var k = a.RegExp;
    var S = k.prototype;
    var x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
    var O = /a/g;
    var C = /a/g;
    var j = new k(O) !== O;
    var _ = g.UNSUPPORTED_Y;
    var A = r && (!j || _ || b || v || p(function () {
      C[E] = false;
      return k(O) != O || k(C) == C || k(O, "i") != "/a/i";
    }));
    if (o("RegExp", A)) {
      var q = function (e, t) {
        var n;
        var r;
        var a;
        var o;
        var c;
        var u;
        var g = this instanceof q;
        var f = l(e);
        var p = t === undefined;
        var w = [];
        var y = e;
        if (!g && f && p && e.constructor === q) {
          return e;
        }
        if (f || e instanceof q) {
          e = e.source;
          if (p) {
            t = "flags" in y ? y.flags : d.call(y);
          }
        }
        e = e === undefined ? "" : String(e);
        t = t === undefined ? "" : String(t);
        y = e;
        if (b && "dotAll" in O && (r = !!t && t.indexOf("s") > -1)) {
          t = t.replace(/s/g, "");
        }
        n = t;
        if (_ && "sticky" in O && (a = !!t && t.indexOf("y") > -1)) {
          t = t.replace(/y/g, "");
        }
        if (v) {
          e = (o = function (e) {
            var t;
            for (var n = e.length, r = 0, a = "", o = [], i = {}, s = false, c = false, u = 0, l = ""; r <= n; r++) {
              if ((t = e.charAt(r)) === "\\") {
                t += e.charAt(++r);
              } else if (t === "]") {
                s = false;
              } else if (!s) {
                switch (true) {
                  case t === "[":
                    s = true;
                    break;
                  case t === "(":
                    if (x.test(e.slice(r + 1))) {
                      r += 2;
                      c = true;
                    }
                    a += t;
                    u++;
                    continue;
                  case t === ">" && c:
                    if (l === "" || m(i, l)) {
                      throw new SyntaxError("Invalid capture group name");
                    }
                    i[l] = true;
                    o.push([l, u]);
                    c = false;
                    l = "";
                    continue;
                }
              }
              if (c) {
                l += t;
              } else {
                a += t;
              }
            }
            return [a, o];
          }(e))[0];
          w = o[1];
        }
        c = i(k(e, t), g ? this : S, q);
        if (r || a || w.length) {
          u = h(c);
          if (r) {
            u.dotAll = true;
            u.raw = q(function (e) {
              var t;
              for (var n = e.length, r = 0, a = "", o = false; r <= n; r++) {
                if ((t = e.charAt(r)) !== "\\") {
                  if (o || t !== ".") {
                    if (t === "[") {
                      o = true;
                    } else if (t === "]") {
                      o = false;
                    }
                    a += t;
                  } else {
                    a += "[\\s\\S]";
                  }
                } else {
                  a += t + e.charAt(++r);
                }
              }
              return a;
            }(e), n);
          }
          if (a) {
            u.sticky = true;
          }
          if (w.length) {
            u.groups = w;
          }
        }
        if (e !== y) {
          try {
            s(c, "source", y === "" ? "(?:)" : y);
          } catch (e) {}
        }
        return c;
      };
      var L = function (e) {
        if (!(e in q)) {
          c(q, e, {
            configurable: true,
            get: function () {
              return k[e];
            },
            set: function (t) {
              k[e] = t;
            }
          });
        }
      };
      for (var I = u(k), R = 0; I.length > R;) {
        L(I[R++]);
      }
      S.constructor = q;
      q.prototype = S;
      f(a, "RegExp", q);
    }
    w("RegExp");
  },
  399: function (e, t, n) {
    var r = n(12);
    var a = n(83);
    e.exports = function (e, t, n) {
      var o;
      var i;
      if (a && typeof (o = t.constructor) == "function" && o !== n && r(i = o.prototype) && i !== n.prototype) {
        a(e, i);
      }
      return e;
    };
  },
  400: function (e, t, n) {
    var r = n(12);
    var a = n(33);
    var o = n(8)("match");
    e.exports = function (e) {
      var t;
      return r(e) && ((t = e[o]) !== undefined ? !!t : a(e) == "RegExp");
    };
  },
  51: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return i;
    });
    n.d(t, "b", function () {
      return s;
    });
    n.d(t, "c", function () {
      return c;
    });
    var r = n(36);
    const a = /^http[s]?:\/\//;
    function o(e) {
      return a.test(e);
    }
    const i = (e, t) => {
      const n = "https://infinityicon.infinitynewtab.com/assets/images/" + e;
      if (t === true) {
        return s(n);
      } else if (t === false) {
        return n;
      } else if (/\.(png|jpg|jpeg)$/.test(e)) {
        return s(n);
      } else {
        return n;
      }
    };
    function s(e) {
      if (o(e)) {
        if (e.includes("?")) {
          return e;
        } else if (r.f) {
          return e + "?imageView2/0/q/100";
        } else {
          return e + "?imageView2/0/format/webp/q/100";
        }
      } else {
        return e;
      }
    }
    function c(e) {
      if (o(e)) {
        if (e.includes("?")) {
          return e;
        } else if (r.f) {
          return e + "?imageMogr2/thumbnail/240x/blur/1x0/quality/100|imageslim";
        } else {
          return e + "?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim";
        }
      } else {
        return e;
      }
    }
  },
  807: function (e, t, n) {
    "use strict";

    n.r(t);
    n(7);
    var r = n(5);
    var a = n.n(r);
    function o(e) {
      return new a.a(t => {
        const n = new Image();
        n.onload = function () {
          n.onload = null;
          t(n);
        };
        n.src = e;
      });
    }
    var i = n(13);
    var s = n(51);
    var c = n(0);
    n(19);
    n(64);
    n(397);
    const u = function () {
      function e(e) {
        if (/cpu (?:iphone )?os (\d+_\d+)/.test(e)) {
          return parseFloat(RegExp.$1.replace("_", "."));
        } else {
          return 2;
        }
      }
      const t = {
        result: "Chrome",
        details: {
          Chrome: 5,
          Chromium: 0,
          _360SE: 0,
          _360EE: 0
        },
        sorted: ["Chrome", "360SE", "360EE", "Chromium"],
        exec: function (e) {
          const t = {
            Chrome: 5,
            Chromium: 0,
            _360SE: 0,
            _360EE: 0
          };
          const n = window.navigator.userAgent;
          if (/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(n)) {
            if (window.navigator.platform == "Win32") {
              if (!window.clientInformation.languages) {
                t._360SE += 8;
              }
              if (/zh/i.test(navigator.language)) {
                t._360SE += 3;
                t._360EE += 3;
              }
              if (window.clientInformation.languages) {
                const e = window.clientInformation.languages.length;
                if (e >= 3) {
                  t.Chrome += 10;
                  t.Chromium += 6;
                } else if (e == 2) {
                  t.Chrome += 3;
                  t.Chromium += 6;
                  t._360EE += 6;
                } else if (e == 1) {
                  t.Chrome += 4;
                  t.Chromium += 4;
                }
              }
              for (var r in window.navigator.plugins) {
                if (window.navigator.plugins[r].filename == "np-mswmp.dll") {
                  t._360SE += 20;
                  t._360EE += 20;
                }
              }
              if (window.chrome.webstore) {
                if (Object.keys(window.chrome.webstore).length <= 1) {
                  t._360SE += 7;
                } else if (Object.keys(window.chrome.webstore).length == 2) {
                  t._360SE += 4;
                  t.Chromium += 3;
                }
              } else {
                t._360SE += 20;
                t._360EE += 20;
              }
              if (window.navigator.plugins.length >= 30) {
                t._360EE += 7;
                t._360SE += 7;
                t.Chrome += 7;
              } else if (window.navigator.plugins.length < 30 && window.navigator.plugins.length > 10) {
                t._360EE += 3;
                t._360SE += 3;
                t.Chrome += 3;
              } else if (window.navigator.plugins.length <= 10) {
                t.Chromium += 6;
              }
            } else {
              t._360SE -= 50;
              t._360EE -= 50;
              if (/Linux/i.test(window.navigator.userAgent)) {
                t.Chromium += 5;
              }
            }
            let e;
            let n = 0;
            for (var r in window.navigator.plugins) {
              if (e = /^(.+) PDF Viewer$/.exec(window.navigator.plugins[r].name)) {
                if (e[1] == "Chrome") {
                  t.Chrome += 6;
                  t._360SE += 6;
                  n = 1;
                  break;
                }
                if (e[1] == "Chromium") {
                  t.Chromium += 10;
                  t._360EE += 6;
                  n = 1;
                  break;
                }
              }
            }
            if (!n) {
              t.Chromium += 9;
            }
          }
          const a = new Object();
          a.Chrome = t.Chrome;
          a.Chromium = t.Chromium;
          a["360SE"] = t._360SE;
          a["360EE"] = t._360EE;
          const o = [];
          for (const e in a) {
            o.push([e, a[e]]);
          }
          o.sort((e, t) => t[1] - e[1]);
          this.sorted = o;
          this.details = t;
          this.result = o[0][0];
          if (e == "result") {
            return o[0][0];
          } else if (e == "details") {
            return a;
          } else if (e == "sorted") {
            return o;
          } else {
            return undefined;
          }
        }
      };
      function n(e) {
        if (window.scrollMaxX !== undefined) {
          return "";
        }
        document.createElement("track");
        const n = window.navigator.appVersion;
        const r = window.external;
        if (r && "SEVersion" in r) {
          return "sougou";
        }
        if (r && "LiebaoGetVersion" in r) {
          return "liebao";
        }
        if (/QQBrowser/.test(n)) {
          return "qq";
        }
        if (/Maxthon/.test(n)) {
          return "maxthon";
        }
        if (/TaoBrowser/.test(n)) {
          return "taobao";
        }
        if (/BIDUBrowser/.test(n)) {
          return "baidu";
        }
        if (/UBrowser/.test(n)) {
          return "uc";
        }
        if (/\sOPR\//.test(n) || /Opera/.test(n) || window.navigator.vendor && window.navigator.vendor.indexOf("Opera") === 0) {
          return "opera";
        }
        const a = navigator.platform.toLowerCase();
        if (a.indexOf("mac") == 0 || a.indexOf("linux") == 0 || parseInt(e) > 86) {
          return "chrome";
        } else {
          return function () {
            const e = window.navigator.userAgent;
            try {
              t.exec();
              if (/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(e)) {
                return t.result;
              }
            } catch (e) {
              console.warn(e);
            }
          }() || "chrome";
        }
      }
      return function () {
        const t = {};
        const r = navigator.userAgent.toLowerCase();
        let a;
        if (a = r.match(/rv:([\d.]+)\) like gecko/)) {
          t.name = "ie";
          t.ie = a[1];
        } else if (a = r.match(/msie ([\d.]+)/)) {
          t.name = "ie";
          t.ie = a[1];
        } else if (a = r.match(/edg\/([\d.]+)/)) {
          t.name = "edge";
          t.edge = a[1];
        } else if (a = r.match(/firefox\/([\d.]+)/)) {
          t.name = "firefox";
          t.firefox = a[1];
        } else if (a = r.match(/chrome\/([\d.]+)/)) {
          t.name = "chrome";
          t.chrome = a[1];
          const e = n(t.chrome);
          if (e) {
            t.chrome += "(" + e + ")";
          }
        } else if (a = r.match(/opera.([\d.]+)/)) {
          t.name = "opera";
          t.opera = a[1];
        } else if (a = r.match(/version\/([\d.]+).*safari/)) {
          t.name = "safari";
          t.safari = a[1];
        } else {
          t.name = "unknown";
          t.unknow = 0;
        }
        const o = {};
        if (r.indexOf("iphone") > -1) {
          o.name = "iphone";
          o.iphone = e(r);
        } else if (r.indexOf("ipod") > -1) {
          o.name = "ipod";
          o.ipod = e(r);
        } else if (r.indexOf("ipad") > -1) {
          o.name = "ipad";
          o.ipad = e(r);
        } else if (r.indexOf("nokia") > -1) {
          o.name = "nokia";
          o.nokia = true;
        } else if (/android (\d+\.\d+)/.test(r)) {
          o.name = "android";
          o.android = parseFloat(RegExp.$1);
        } else if (r.indexOf("win") > -1) {
          o.name = "win";
          if (/win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(r)) {
            if (RegExp.$1 == "nt") {
              switch (RegExp.$2) {
                case "5.0":
                  o.win = "2000";
                  break;
                case "5.1":
                  o.win = "XP";
                  break;
                case "6.0":
                  o.win = "Vista";
                  break;
                case "6.1":
                  o.win = "7";
                  break;
                case "6.2":
                  o.win = "8";
                  break;
                case "6.3":
                  o.win = "8.1";
                  break;
                case "10.0":
                  o.win = "10";
                  break;
                default:
                  o.win = "NT";
              }
            } else if (RegExp.$1 == "9x") {
              o.win = "ME";
            } else {
              o.win = RegExp.$1;
            }
          }
        } else if (r.indexOf("mac") > -1) {
          o.name = "mac";
        } else if (r.indexOf("linux") > -1) {
          o.name = "linux";
        }
        const i = o.name + (o[o.name] || "") + "|" + t.name + t[t.name];
        return {
          browser: t,
          system: o,
          isMobile: o.android || o.iphone || o.ios || o.ipad || o.ipod || o.nokia,
          string: i
        };
      }();
    }();
    let l = u.browser.name;
    if (l === "chrome") {
      const e = u.browser.chrome;
      if (e.includes("(qq")) {
        l = "qq";
      } else if (e.includes("(sougou)")) {
        l = "sogou";
      } else if (c.G) {
        l = "360p";
      } else if (e.includes("(360EE")) {
        l = "360safe";
      }
    }
    var d = n(162);
    const g = [async function () {
      const {
        data: e,
        error: t
      } = await i.o.read();
      if (t || !e) {
        return;
      }
      const {
        list: n
      } = e;
      const r = [];
      if (!(n == null ? undefined : n.length)) {
        return;
      }
      n.map(e => r.push(...e.items));
      let s = r.map(e => e.conditionCode);
      s = [...new Set(s)];
      await a.a.all(s.map(e => o(`https://infinityicon.infinitynewtab.com/assets/weather/code_${Number(e)}.png`)));
    }, async function () {
      try {
        const {
          data: e,
          error: t
        } = await i.g.read();
        if (t || !e) {
          return;
        }
        const n = e.list;
        await a.a.all(n.map(({
          logo: e
        }) => o(Object(s.b)(e))));
      } catch (e) {}
    }, async function () {
      try {
        const {
          data: e,
          error: t
        } = await i.d.read();
        if (t || !e) {
          return;
        }
        const n = e.list;
        const r = [];
        n.forEach(({
          content: e
        }) => {
          const t = document.createElement("div");
          t.innerHTML = e;
          t.querySelectorAll("img").forEach(e => {
            r.push(o(e.getAttribute("src")));
          });
        });
        await a.a.all(r);
      } catch (e) {}
    }, async function () {
      const e = ["error.png", "loading.png", "network-error.png", "success.png"].map(e => Object(s.a)(e, false));
      try {
        const t = [];
        t.push(...e.map(e => o(e)));
        await a.a.all(t);
      } catch (e) {}
    }, async function () {
      const t = Object(s.a)("syncing.png", false);
      const n = Object(s.a)("sync_failed.png", false);
      const r = Object(s.a)("add_engine.gif", false);
      const u = Object(s.a)("setting/animate-default.png");
      const g = Object(s.a)("setting/animate-default-active.png");
      const f = Object(s.a)("setting/animate-bounce.png");
      const p = Object(s.a)("setting/animate-bounce-active.png");
      const m = Object(s.a)("setting/animate-easin.png");
      const h = Object(s.a)("setting/animate-easin-active.png");
      const w = Object(s.a)("setting/edit.svg", false);
      const y = Object(s.a)("back.svg", false);
      const b = Object(s.b)("https://infinityicon.infinitynewtab.com/assets/background_image/login-bg.png");
      let v = [];
      if (["360p", "360safe"].includes(l)) {
        v = [];
      } else if (["360safe", "qq", "sogou", "chrome", "safari", "edge", "firefox"].includes(l)) {
        v = [1, 2];
      }
      if (!c.C.isZh && ["360safe", "qq", "sogou"].includes(l)) {
        v = [];
      }
      if (v.length) {
        v = v.map(e => Object(s.b)(`https://infinityicon.infinitynewtab.com/assets/set_homepage/browser/${l}/${c.C.lang}-${e}.jpg`));
      }
      try {
        const {
          data: s,
          error: c
        } = await i.l.read();
        if (c) {
          return;
        }
        const l = (s == null ? undefined : s.userInfo)?.avatar || d.g;
        await a.a.all([l, t, n, r, u, f, m, y, g, p, h, w, b, ...v].filter(Boolean).map(e => o(e)));
      } catch (e) {}
    }];
    (function e() {
      requestIdleCallback(async t => {
        while (t.timeRemaining() > 0 && g.length > 0) {
          await g.pop()();
        }
        if (g.length > 0) {
          e();
        }
      });
    })();
  }
}]);