(function (e) {
  var r = {};
  function n(t) {
    if (r[t]) {
      return r[t].exports;
    }
    var o = r[t] = {
      i: t,
      l: false,
      exports: {}
    };
    e[t].call(o.exports, o, o.exports, n);
    o.l = true;
    return o.exports;
  }
  n.m = e;
  n.c = r;
  n.d = function (e, r, t) {
    if (!n.o(e, r)) {
      Object.defineProperty(e, r, {
        enumerable: true,
        get: t
      });
    }
  };
  n.r = function (e) {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  n.t = function (e, r) {
    if (r & 1) {
      e = n(e);
    }
    if (r & 8) {
      return e;
    }
    if (r & 4 && typeof e == "object" && e && e.__esModule) {
      return e;
    }
    var t = Object.create(null);
    n.r(t);
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
    if (r & 2 && typeof e != "string") {
      for (var o in e) {
        n.d(t, o, function (r) {
          return e[r];
        }.bind(null, o));
      }
    }
    return t;
  };
  n.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    n.d(r, "a", r);
    return r;
  };
  n.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  };
  n.p = "/";
  n(n.s = 560);
})({
  560: function (e, r) {
    window.addEventListener("message", function e(r) {
      if (r.source !== window || !r.data || !r.data.key) {
        return;
      }
      const {
        key: n,
        message: t
      } = r.data;
      chrome.runtime.sendMessage({
        key: n,
        data: t
      }, () => {
        if (chrome.runtime.lastError) {
          console.warn("sendMessage: ", chrome.runtime.lastError.message);
        }
      });
      window.removeEventListener("message", e, false);
      window.close();
    }, false);
    window.onbeforeunload = () => {
      chrome.runtime.sendMessage({
        key: "cancelLogin"
      }, () => {
        if (chrome.runtime.lastError) {
          console.warn("sendMessage: ", chrome.runtime.lastError.message);
        }
      });
    };
  }
});