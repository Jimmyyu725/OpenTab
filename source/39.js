(window.webpackJsonp = window.webpackJsonp || []).push([[39], {
  807: function (e, n, i) {
    "use strict";

    i.r(n);
    i(7);
    var t = i(5);
    var a = i.n(t);
    function o(e) {
      return new a.a(n => {
        const i = new Image();
        i.onload = function () {
          i.onload = null;
          n(i);
        };
        i.src = e;
      });
    }
    var r = i(13);
    var s = i(51);
    var c = i(0);
    i(19);
    i(64);
    i(397);
    const m = function () {
      function e(e) {
        if (/cpu (?:iphone )?os (\d+_\d+)/.test(e)) {
          return parseFloat(RegExp.$1.replace("_", "."));
        } else {
          return 2;
        }
      }
      const n = {
        result: "Chrome",
        details: {
          Chrome: 5,
          Chromium: 0,
          _360SE: 0,
          _360EE: 0
        },
        sorted: ["Chrome", "360SE", "360EE", "Chromium"],
        exec: function (e) {
          const n = {
            Chrome: 5,
            Chromium: 0,
            _360SE: 0,
            _360EE: 0
          };
          const i = window.navigator.userAgent;
          if (/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(i)) {
            if (window.navigator.platform == "Win32") {
              if (!window.clientInformation.languages) {
                n._360SE += 8;
              }
              if (/zh/i.test(navigator.language)) {
                n._360SE += 3;
                n._360EE += 3;
              }
              if (window.clientInformation.languages) {
                const e = window.clientInformation.languages.length;
                if (e >= 3) {
                  n.Chrome += 10;
                  n.Chromium += 6;
                } else if (e == 2) {
                  n.Chrome += 3;
                  n.Chromium += 6;
                  n._360EE += 6;
                } else if (e == 1) {
                  n.Chrome += 4;
                  n.Chromium += 4;
                }
              }
              for (var t in window.navigator.plugins) {
                if (window.navigator.plugins[t].filename == "np-mswmp.dll") {
                  n._360SE += 20;
                  n._360EE += 20;
                }
              }
              if (window.chrome.webstore) {
                if (Object.keys(window.chrome.webstore).length <= 1) {
                  n._360SE += 7;
                } else if (Object.keys(window.chrome.webstore).length == 2) {
                  n._360SE += 4;
                  n.Chromium += 3;
                }
              } else {
                n._360SE += 20;
                n._360EE += 20;
              }
              if (window.navigator.plugins.length >= 30) {
                n._360EE += 7;
                n._360SE += 7;
                n.Chrome += 7;
              } else if (window.navigator.plugins.length < 30 && window.navigator.plugins.length > 10) {
                n._360EE += 3;
                n._360SE += 3;
                n.Chrome += 3;
              } else if (window.navigator.plugins.length <= 10) {
                n.Chromium += 6;
              }
            } else {
              n._360SE -= 50;
              n._360EE -= 50;
              if (/Linux/i.test(window.navigator.userAgent)) {
                n.Chromium += 5;
              }
            }
            let e;
            let i = 0;
            for (var t in window.navigator.plugins) {
              if (e = /^(.+) PDF Viewer$/.exec(window.navigator.plugins[t].name)) {
                if (e[1] == "Chrome") {
                  n.Chrome += 6;
                  n._360SE += 6;
                  i = 1;
                  break;
                }
                if (e[1] == "Chromium") {
                  n.Chromium += 10;
                  n._360EE += 6;
                  i = 1;
                  break;
                }
              }
            }
            if (!i) {
              n.Chromium += 9;
            }
          }
          const a = new Object();
          a.Chrome = n.Chrome;
          a.Chromium = n.Chromium;
          a["360SE"] = n._360SE;
          a["360EE"] = n._360EE;
          const o = [];
          for (const e in a) {
            o.push([e, a[e]]);
          }
          o.sort((e, n) => n[1] - e[1]);
          this.sorted = o;
          this.details = n;
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
      function i(e) {
        if (window.scrollMaxX !== undefined) {
          return "";
        }
        document.createElement("track");
        const i = window.navigator.appVersion;
        const t = window.external;
        if (t && "SEVersion" in t) {
          return "sougou";
        }
        if (t && "LiebaoGetVersion" in t) {
          return "liebao";
        }
        if (/QQBrowser/.test(i)) {
          return "qq";
        }
        if (/Maxthon/.test(i)) {
          return "maxthon";
        }
        if (/TaoBrowser/.test(i)) {
          return "taobao";
        }
        if (/BIDUBrowser/.test(i)) {
          return "baidu";
        }
        if (/UBrowser/.test(i)) {
          return "uc";
        }
        if (/\sOPR\//.test(i) || /Opera/.test(i) || window.navigator.vendor && window.navigator.vendor.indexOf("Opera") === 0) {
          return "opera";
        }
        const a = navigator.platform.toLowerCase();
        if (a.indexOf("mac") == 0 || a.indexOf("linux") == 0 || parseInt(e) > 86) {
          return "chrome";
        } else {
          return function () {
            const e = window.navigator.userAgent;
            try {
              n.exec();
              if (/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(e)) {
                return n.result;
              }
            } catch (e) {
              console.warn(e);
            }
          }() || "chrome";
        }
      }
      return function () {
        const n = {};
        const t = navigator.userAgent.toLowerCase();
        let a;
        if (a = t.match(/rv:([\d.]+)\) like gecko/)) {
          n.name = "ie";
          n.ie = a[1];
        } else if (a = t.match(/msie ([\d.]+)/)) {
          n.name = "ie";
          n.ie = a[1];
        } else if (a = t.match(/edg\/([\d.]+)/)) {
          n.name = "edge";
          n.edge = a[1];
        } else if (a = t.match(/firefox\/([\d.]+)/)) {
          n.name = "firefox";
          n.firefox = a[1];
        } else if (a = t.match(/chrome\/([\d.]+)/)) {
          n.name = "chrome";
          n.chrome = a[1];
          const e = i(n.chrome);
          if (e) {
            n.chrome += "(" + e + ")";
          }
        } else if (a = t.match(/opera.([\d.]+)/)) {
          n.name = "opera";
          n.opera = a[1];
        } else if (a = t.match(/version\/([\d.]+).*safari/)) {
          n.name = "safari";
          n.safari = a[1];
        } else {
          n.name = "unknown";
          n.unknow = 0;
        }
        const o = {};
        if (t.indexOf("iphone") > -1) {
          o.name = "iphone";
          o.iphone = e(t);
        } else if (t.indexOf("ipod") > -1) {
          o.name = "ipod";
          o.ipod = e(t);
        } else if (t.indexOf("ipad") > -1) {
          o.name = "ipad";
          o.ipad = e(t);
        } else if (t.indexOf("nokia") > -1) {
          o.name = "nokia";
          o.nokia = true;
        } else if (/android (\d+\.\d+)/.test(t)) {
          o.name = "android";
          o.android = parseFloat(RegExp.$1);
        } else if (t.indexOf("win") > -1) {
          o.name = "win";
          if (/win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(t)) {
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
        } else if (t.indexOf("mac") > -1) {
          o.name = "mac";
        } else if (t.indexOf("linux") > -1) {
          o.name = "linux";
        }
        const r = o.name + (o[o.name] || "") + "|" + n.name + n[n.name];
        return {
          browser: n,
          system: o,
          isMobile: o.android || o.iphone || o.ios || o.ipad || o.ipod || o.nokia,
          string: r
        };
      }();
    }();
    let d = m.browser.name;
    if (d === "chrome") {
      const e = m.browser.chrome;
      if (e.includes("(qq")) {
        d = "qq";
      } else if (e.includes("(sougou)")) {
        d = "sogou";
      } else if (c.G) {
        d = "360p";
      } else if (e.includes("(360EE")) {
        d = "360safe";
      }
    }
    var l = i(162);
    const u = [async function () {
      const {
        data: e,
        error: n
      } = await r.o.read();
      if (n || !e) {
        return;
      }
      const {
        list: i
      } = e;
      const t = [];
      if (!(i == null ? undefined : i.length)) {
        return;
      }
      i.map(e => t.push(...e.items));
      let s = t.map(e => e.conditionCode);
      s = [...new Set(s)];
      await a.a.all(s.map(e => o(`https://infinityicon.infinitynewtab.com/assets/weather/code_${Number(e)}.png`)));
    }, async function () {
      try {
        const {
          data: e,
          error: n
        } = await r.g.read();
        if (n || !e) {
          return;
        }
        const i = e.list;
        await a.a.all(i.map(({
          logo: e
        }) => o(Object(s.b)(e))));
      } catch (e) {}
    }, async function () {
      try {
        const {
          data: e,
          error: n
        } = await r.d.read();
        if (n || !e) {
          return;
        }
        const i = e.list;
        const t = [];
        i.forEach(({
          content: e
        }) => {
          const n = document.createElement("div");
          n.innerHTML = e;
          n.querySelectorAll("img").forEach(e => {
            t.push(o(e.getAttribute("src")));
          });
        });
        await a.a.all(t);
      } catch (e) {}
    }, async function () {
      const e = ["error.png", "loading.png", "network-error.png", "success.png"].map(e => Object(s.a)(e, false));
      try {
        const n = [];
        n.push(...e.map(e => o(e)));
        await a.a.all(n);
      } catch (e) {}
    }, async function () {
      const n = Object(s.a)("syncing.png", false);
      const i = Object(s.a)("sync_failed.png", false);
      const t = Object(s.a)("add_engine.gif", false);
      const m = Object(s.a)("setting/animate-default.png");
      const u = Object(s.a)("setting/animate-default-active.png");
      const g = Object(s.a)("setting/animate-bounce.png");
      const w = Object(s.a)("setting/animate-bounce-active.png");
      const f = Object(s.a)("setting/animate-easin.png");
      const h = Object(s.a)("setting/animate-easin-active.png");
      const p = Object(s.a)("setting/edit.svg", false);
      const b = Object(s.a)("back.svg", false);
      const E = Object(s.b)("https://infinityicon.infinitynewtab.com/assets/background_image/login-bg.png");
      let v = [];
      if (["360p", "360safe"].includes(d)) {
        v = [];
      } else if (["360safe", "qq", "sogou", "chrome", "safari", "edge", "firefox"].includes(d)) {
        v = [1, 2];
      }
      if (!c.C.isZh && ["360safe", "qq", "sogou"].includes(d)) {
        v = [];
      }
      if (v.length) {
        v = v.map(e => Object(s.b)(`https://infinityicon.infinitynewtab.com/assets/set_homepage/browser/${d}/${c.C.lang}-${e}.jpg`));
      }
      try {
        const {
          data: s,
          error: c
        } = await r.l.read();
        if (c) {
          return;
        }
        const d = (s == null ? undefined : s.userInfo)?.avatar || l.g;
        await a.a.all([d, n, i, t, m, g, f, b, u, w, h, p, E, ...v].filter(Boolean).map(e => o(e)));
      } catch (e) {}
    }];
    (function e() {
      requestIdleCallback(async n => {
        while (n.timeRemaining() > 0 && u.length > 0) {
          await u.pop()();
        }
        if (u.length > 0) {
          e();
        }
      });
    })();
  }
}]);