"use strict";

(globalThis.webpackChunkinfinity_hitab_client = globalThis.webpackChunkinfinity_hitab_client || []).push([[942], {
  9617: (e, t, n) => {
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = n(2370);
    var o = n(8398);
    var r = n(4209);
    function c(e) {
      if (e && e.__esModule) {
        return e;
      }
      var t = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function (n) {
          t[n] = e[n];
        });
      }
      t.default = e;
      return Object.freeze(t);
    }
    var u = c(o);
    const s = Object.create(null);
    function l(e, t) {
      if (!r.isString(e)) {
        if (!e.nodeType) {
          return r.NOOP;
        }
        e = e.innerHTML;
      }
      const n = e;
      const o = s[n];
      if (o) {
        return o;
      }
      if (e[0] === "#") {
        const t = document.querySelector(e);
        e = t ? t.innerHTML : "";
      }
      const c = r.extend({
        hoistStatic: true,
        onError: undefined,
        onWarn: r.NOOP
      }, t);
      if (!c.isCustomElement && typeof customElements != "undefined") {
        c.isCustomElement = e => !!customElements.get(e);
      }
      const {
        code: l
      } = i.compile(e, c);
      const f = new Function("Vue", l)(u);
      f._rc = true;
      return s[n] = f;
    }
    o.registerRuntimeCompiler(l);
    Object.keys(o).forEach(function (e) {
      if (e !== "default") {
        t[e] = o[e];
      }
    });
    t.compile = l;
  },
  4942: (e, t, n) => {
    e.exports = n(9617);
  }
}]);