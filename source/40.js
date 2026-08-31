(window.webpackJsonp = window.webpackJsonp || []).push([[40], {
  601: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, "LocalSync", function () {
      return o.a;
    });
    r.d(t, "syncTabsStore", function () {
      return o.b;
    });
    r.d(t, "pluginStore", function () {
      return a.pluginStore;
    });
    r.d(t, "userStore", function () {
      return u.userStore;
    });
    r.d(t, "settingStore", function () {
      return c.b;
    });
    r.d(t, "requestCalcSize", function () {
      return c.a;
    });
    r.d(t, "siteStore", function () {
      return l.a;
    });
    r.d(t, "searchStore", function () {
      return s.a;
    });
    r.d(t, "wallpaperStore", function () {
      return i.a;
    });
    r.d(t, "todoStore", function () {
      return f.a;
    });
    r.d(t, "noteStore", function () {
      return p.a;
    });
    r.d(t, "weatherStore", function () {
      return d.weatherStore;
    });
    r.d(t, "gmailStore", function () {
      return b;
    });
    r.d(t, "syncStore", function () {
      return h.syncStore;
    });
    r.d(t, "privacyStore", function () {
      return v;
    });
    var n = r(2);
    var o = r(309);
    var a = r(431);
    var u = r(429);
    var c = r(430);
    var l = r(612);
    var s = r(613);
    var i = r(609);
    var f = r(383);
    var p = r(614);
    var d = r(610);
    var y = r(13);
    function D(e, t, r, n) {
      var o;
      var a = arguments.length;
      var u = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        u = Reflect.decorate(e, t, r, n);
      } else {
        for (var c = e.length - 1; c >= 0; c--) {
          if (o = e[c]) {
            u = (a < 3 ? o(u) : a > 3 ? o(t, r, u) : o(t, r)) || u;
          }
        }
      }
      if (a > 3 && u) {
        Object.defineProperty(t, r, u);
      }
      return u;
    }
    class S extends o.a {
      constructor() {
        super(...arguments);
        this.unreadEmailCount = null;
      }
      update(e) {
        if (this.unreadEmailCount !== e) {
          this.unreadEmailCount = e;
        }
      }
    }
    D([n.g], S.prototype, "unreadEmailCount", undefined);
    D([n.b], S.prototype, "update", null);
    const b = new S();
    b.initSyncStore(y.c, ["unreadEmailCount"]);
    var h = r(602);
    function g(e, t, r, n) {
      var o;
      var a = arguments.length;
      var u = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        u = Reflect.decorate(e, t, r, n);
      } else {
        for (var c = e.length - 1; c >= 0; c--) {
          if (o = e[c]) {
            u = (a < 3 ? o(u) : a > 3 ? o(t, r, u) : o(t, r)) || u;
          }
        }
      }
      if (a > 3 && u) {
        Object.defineProperty(t, r, u);
      }
      return u;
    }
    class w extends o.a {
      constructor() {
        super(...arguments);
        this.userDate = 0;
        this.collectData = 0;
      }
      agreeUserData() {
        this.userDate = 1;
      }
      refuseUserData() {
        this.userDate = -1;
      }
      resetUserData() {
        this.userDate = 0;
      }
      agreeCollectData() {
        this.collectData = 1;
      }
      refuseCollectData() {
        this.collectData = -1;
      }
    }
    g([n.g], w.prototype, "userDate", undefined);
    g([n.g], w.prototype, "collectData", undefined);
    g([n.b], w.prototype, "agreeUserData", null);
    g([n.b], w.prototype, "refuseUserData", null);
    g([n.b], w.prototype, "resetUserData", null);
    g([n.b], w.prototype, "agreeCollectData", null);
    g([n.b], w.prototype, "refuseCollectData", null);
    const v = new w();
    v.initSyncStore(y.f, ["userDate", "collectData"]);
    Object(n.f)({
      enforceActions: "observed"
    });
  }
}]);