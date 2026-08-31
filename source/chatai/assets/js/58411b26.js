/*! For license information please see 58411b26.js.LICENSE.txt */
"use strict";

(globalThis.webpackChunkinfinity_hitab_client = globalThis.webpackChunkinfinity_hitab_client || []).push([[435], {
  3131: (t, e, n) => {
    n.d(e, {
      Jk: () => A,
      Q_: () => T,
      WB: () => w
    });
    var o = n(9445);
    var s = n(6121);
    var c = n(7268);
    let i;
    const r = t => i = t;
    const a = Symbol();
    function u(t) {
      return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
    }
    var l;
    (function (t) {
      t.direct = "direct";
      t.patchObject = "patch object";
      t.patchFunction = "patch function";
    })(l ||= {});
    const f = typeof window != "undefined";
    const p = (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof n.g == "object" && n.g.global === n.g ? n.g : typeof globalThis == "object" ? globalThis : {
      HTMLElement: null
    })();
    function d(t, e, n) {
      const o = new XMLHttpRequest();
      o.open("GET", t);
      o.responseType = "blob";
      o.onload = function () {
        v(o.response, e, n);
      };
      o.onerror = function () {};
      o.send();
    }
    function h(t) {
      const e = new XMLHttpRequest();
      e.open("HEAD", t, false);
      try {
        e.send();
      } catch (t) {}
      return e.status >= 200 && e.status <= 299;
    }
    function y(t) {
      try {
        t.dispatchEvent(new MouseEvent("click"));
      } catch (e) {
        const n = document.createEvent("MouseEvents");
        n.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
        t.dispatchEvent(n);
      }
    }
    const b = typeof navigator == "object" ? navigator : {
      userAgent: ""
    };
    const g = (() => /Macintosh/.test(b.userAgent) && /AppleWebKit/.test(b.userAgent) && !/Safari/.test(b.userAgent))();
    const v = f ? typeof HTMLAnchorElement != "undefined" && "download" in HTMLAnchorElement.prototype && !g ? function (t, e = "download", n) {
      const o = document.createElement("a");
      o.download = e;
      o.rel = "noopener";
      if (typeof t == "string") {
        o.href = t;
        if (o.origin !== location.origin) {
          if (h(o.href)) {
            d(t, e, n);
          } else {
            o.target = "_blank";
            y(o);
          }
        } else {
          y(o);
        }
      } else {
        o.href = URL.createObjectURL(t);
        setTimeout(function () {
          URL.revokeObjectURL(o.href);
        }, 40000);
        setTimeout(function () {
          y(o);
        }, 0);
      }
    } : "msSaveOrOpenBlob" in b ? function (t, e = "download", n) {
      if (typeof t == "string") {
        if (h(t)) {
          d(t, e, n);
        } else {
          const e = document.createElement("a");
          e.href = t;
          e.target = "_blank";
          setTimeout(function () {
            y(e);
          });
        }
      } else {
        navigator.msSaveOrOpenBlob(function (t, {
          autoBom: e = false
        } = {}) {
          if (e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)) {
            return new Blob([String.fromCharCode(65279), t], {
              type: t.type
            });
          } else {
            return t;
          }
        }(t, n), e);
      }
    } : function (t, e, n, o) {
      if (o = o || open("", "_blank")) {
        o.document.title = o.document.body.innerText = "downloading...";
      }
      if (typeof t == "string") {
        return d(t, e, n);
      }
      const s = t.type === "application/octet-stream";
      const c = /constructor/i.test(String(p.HTMLElement)) || "safari" in p;
      const i = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((i || s && c || g) && typeof FileReader != "undefined") {
        const e = new FileReader();
        e.onloadend = function () {
          let t = e.result;
          if (typeof t != "string") {
            o = null;
            throw new Error("Wrong reader.result type");
          }
          t = i ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;");
          if (o) {
            o.location.href = t;
          } else {
            location.assign(t);
          }
          o = null;
        };
        e.readAsDataURL(t);
      } else {
        const e = URL.createObjectURL(t);
        if (o) {
          o.location.assign(e);
        } else {
          location.href = e;
        }
        o = null;
        setTimeout(function () {
          URL.revokeObjectURL(e);
        }, 40000);
      }
    } : () => {};
    function w() {
      const t = (0, o.B)(true);
      const e = t.run(() => (0, o.iH)({}));
      let n = [];
      let c = [];
      const i = (0, o.Xl)({
        install(t) {
          r(i);
          if (!s.$Q) {
            i._a = t;
            t.provide(a, i);
            t.config.globalProperties.$pinia = i;
            c.forEach(t => n.push(t));
            c = [];
          }
        },
        use(t) {
          if (this._a || s.$Q) {
            n.push(t);
          } else {
            c.push(t);
          }
          return this;
        },
        _p: n,
        _a: null,
        _e: t,
        _s: new Map(),
        state: e
      });
      return i;
    }
    const m = () => {};
    function _(t, e, n, o = m) {
      t.push(e);
      const s = () => {
        const n = t.indexOf(e);
        if (n > -1) {
          t.splice(n, 1);
          o();
        }
      };
      if (!n && (0, c.FN)()) {
        (0, c.Ah)(s);
      }
      return s;
    }
    function $(t, ...e) {
      t.slice().forEach(t => {
        t(...e);
      });
    }
    function j(t, e) {
      for (const n in e) {
        if (!e.hasOwnProperty(n)) {
          continue;
        }
        const s = e[n];
        const c = t[n];
        if (u(c) && u(s) && t.hasOwnProperty(n) && !(0, o.dq)(s) && !(0, o.PG)(s)) {
          t[n] = j(c, s);
        } else {
          t[n] = s;
        }
      }
      return t;
    }
    const O = Symbol();
    const E = new WeakMap();
    const {
      assign: k
    } = Object;
    function L(t, e, n = {}, i, a) {
      let f;
      const p = n.state;
      const d = k({
        actions: {}
      }, n);
      const h = {
        deep: true
      };
      let y;
      let b;
      let g;
      let v = (0, o.Xl)([]);
      let w = (0, o.Xl)([]);
      const L = i.state.value[t];
      if (!p && !L) {
        if (s.$Q) {
          (0, s.t8)(i.state.value, t, {});
        } else {
          i.state.value[t] = {};
        }
      }
      (0, o.iH)({});
      function T(e) {
        let n;
        y = b = false;
        if (typeof e == "function") {
          e(i.state.value[t]);
          n = {
            type: l.patchFunction,
            storeId: t,
            events: g
          };
        } else {
          j(i.state.value[t], e);
          n = {
            type: l.patchObject,
            payload: e,
            storeId: t,
            events: g
          };
        }
        (0, c.Y3)().then(() => {
          y = true;
        });
        b = true;
        $(v, n, i.state.value[t]);
      }
      const A = m;
      function Q(e, n) {
        return function () {
          r(i);
          const o = Array.from(arguments);
          const s = [];
          const c = [];
          function a(t) {
            s.push(t);
          }
          function u(t) {
            c.push(t);
          }
          let l;
          $(w, {
            args: o,
            name: e,
            store: S,
            after: a,
            onError: u
          });
          try {
            l = n.apply(this && this.$id === t ? this : S, o);
          } catch (t) {
            $(c, t);
            throw t;
          }
          if (l instanceof Promise) {
            return l.then(t => {
              $(s, t);
              return t;
            }).catch(t => {
              $(c, t);
              return Promise.reject(t);
            });
          } else {
            $(s, l);
            return l;
          }
        };
      }
      const R = {
        _p: i,
        $id: t,
        $onAction: _.bind(null, w),
        $patch: T,
        $reset: A,
        $subscribe(e, n = {}) {
          const o = _(v, e, n.detached, () => s());
          const s = f.run(() => (0, c.YP)(() => i.state.value[t], o => {
            if (n.flush === "sync" ? b : y) {
              e({
                storeId: t,
                type: l.direct,
                events: g
              }, o);
            }
          }, k({}, h, n)));
          return o;
        },
        $dispose: function () {
          f.stop();
          v = [];
          w = [];
          i._s.delete(t);
        }
      };
      if (s.$Q) {
        R._r = false;
      }
      const S = (0, o.qj)(k({}, R));
      i._s.set(t, S);
      const M = i._e.run(() => {
        f = (0, o.B)();
        return f.run(() => e());
      });
      for (const e in M) {
        const n = M[e];
        if ((0, o.dq)(n) && (U = n, !(0, o.dq)(U) || !U.effect) || (0, o.PG)(n)) {
          if (!p) {
            if (!!L && !(P = n, s.$Q ? E.has(P) : u(P) && P.hasOwnProperty(O))) {
              if ((0, o.dq)(n)) {
                n.value = L[e];
              } else {
                j(n, L[e]);
              }
            }
            if (s.$Q) {
              (0, s.t8)(i.state.value[t], e, n);
            } else {
              i.state.value[t][e] = n;
            }
          }
        } else if (typeof n == "function") {
          const t = Q(e, n);
          if (s.$Q) {
            (0, s.t8)(M, e, t);
          } else {
            M[e] = t;
          }
          d.actions[e] = n;
        } else {
          0;
        }
      }
      var P;
      var U;
      if (s.$Q) {
        Object.keys(M).forEach(t => {
          (0, s.t8)(S, t, M[t]);
        });
      } else {
        k(S, M);
        k((0, o.IU)(S), M);
      }
      Object.defineProperty(S, "$state", {
        get: () => i.state.value[t],
        set: t => {
          T(e => {
            k(e, t);
          });
        }
      });
      if (s.$Q) {
        S._r = true;
      }
      i._p.forEach(t => {
        k(S, f.run(() => t({
          store: S,
          app: i._a,
          pinia: i,
          options: d
        })));
      });
      if (L && p && n.hydrate) {
        n.hydrate(S.$state, L);
      }
      y = true;
      b = true;
      return S;
    }
    function T(t, e, n) {
      let u;
      let l;
      const f = typeof e == "function";
      function p(t, n) {
        const p = (0, c.FN)();
        if (t = t || p && (0, c.f3)(a)) {
          r(t);
        }
        if (!(t = i)._s.has(u)) {
          if (f) {
            L(u, e, l, t);
          } else {
            (function (t, e, n, i) {
              const {
                state: a,
                actions: u,
                getters: l
              } = e;
              const f = n.state.value[t];
              let p;
              p = L(t, function () {
                if (!f) {
                  if (s.$Q) {
                    (0, s.t8)(n.state.value, t, a ? a() : {});
                  } else {
                    n.state.value[t] = a ? a() : {};
                  }
                }
                const e = (0, o.BK)(n.state.value[t]);
                return k(e, u, Object.keys(l || {}).reduce((e, i) => {
                  e[i] = (0, o.Xl)((0, c.Fl)(() => {
                    r(n);
                    const e = n._s.get(t);
                    if (!s.$Q || e._r) {
                      return l[i].call(e, e);
                    }
                  }));
                  return e;
                }, {}));
              }, e, n);
              p.$reset = function () {
                const t = a ? a() : {};
                this.$patch(e => {
                  k(e, t);
                });
              };
            })(u, l, t);
          }
        }
        return t._s.get(u);
      }
      if (typeof t == "string") {
        u = t;
        l = f ? n : e;
      } else {
        l = t;
        u = t.id;
      }
      p.$id = u;
      return p;
    }
    function A(t) {
      if (s.$Q) {
        return (0, o.BK)(t);
      }
      {
        t = (0, o.IU)(t);
        const e = {};
        for (const n in t) {
          const s = t[n];
          if ((0, o.dq)(s) || (0, o.PG)(s)) {
            e[n] = (0, o.Vh)(t, n);
          }
        }
        return e;
      }
    }
  }
}]);