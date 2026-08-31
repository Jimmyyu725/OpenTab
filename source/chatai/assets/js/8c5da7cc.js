/*! For license information please see 8c5da7cc.js.LICENSE.txt */
(globalThis.webpackChunkinfinity_hitab_client = globalThis.webpackChunkinfinity_hitab_client || []).push([[179], {
  3802: (e, t, r) => {
    "use strict";

    function n(e) {
      var t = e.getBoundingClientRect();
      return {
        width: t.width,
        height: t.height,
        top: t.top,
        right: t.right,
        bottom: t.bottom,
        left: t.left,
        x: t.left,
        y: t.top
      };
    }
    function o(e) {
      if (e == null) {
        return window;
      }
      if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window;
      }
      return e;
    }
    function a(e) {
      var t = o(e);
      return {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
      };
    }
    function i(e) {
      return e instanceof o(e).Element || e instanceof Element;
    }
    function c(e) {
      return e instanceof o(e).HTMLElement || e instanceof HTMLElement;
    }
    function s(e) {
      if (e) {
        return (e.nodeName || "").toLowerCase();
      } else {
        return null;
      }
    }
    function l(e) {
      return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }
    function u(e) {
      return o(e).getComputedStyle(e);
    }
    function f(e) {
      var t = u(e);
      var r = t.overflow;
      var n = t.overflowX;
      var o = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(r + o + n);
    }
    function d(e, t, r = false) {
      var i;
      var u;
      var d = l(t);
      var h = n(e);
      var p = c(t);
      var g = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var y = {
        x: 0,
        y: 0
      };
      if (p || !p && !r) {
        if (s(t) !== "body" || f(d)) {
          g = (i = t) !== o(i) && c(i) ? {
            scrollLeft: (u = i).scrollLeft,
            scrollTop: u.scrollTop
          } : a(i);
        }
        if (c(t)) {
          (y = n(t)).x += t.clientLeft;
          y.y += t.clientTop;
        } else if (d) {
          y.x = function (e) {
            return n(l(e)).left + a(e).scrollLeft;
          }(d);
        }
      }
      return {
        x: h.left + g.scrollLeft - y.x,
        y: h.top + g.scrollTop - y.y,
        width: h.width,
        height: h.height
      };
    }
    function h(e) {
      if (s(e) === "html") {
        return e;
      } else {
        return e.assignedSlot || e.parentNode || (t = e, typeof ShadowRoot != "undefined" && (t instanceof o(t).ShadowRoot || t instanceof ShadowRoot) ? e.host : null) || l(e);
      }
      var t;
    }
    function p(e) {
      if (["html", "body", "#document"].indexOf(s(e)) >= 0) {
        return e.ownerDocument.body;
      } else if (c(e) && f(e)) {
        return e;
      } else {
        return p(h(e));
      }
    }
    function g(e, t) {
      var r;
      if (t === undefined) {
        t = [];
      }
      var n = p(e);
      var a = n === ((r = e.ownerDocument) == null ? undefined : r.body);
      var i = o(n);
      var c = a ? [i].concat(i.visualViewport || [], f(n) ? n : []) : n;
      var s = t.concat(c);
      if (a) {
        return s;
      } else {
        return s.concat(g(h(c)));
      }
    }
    function y(e) {
      return ["table", "td", "th"].indexOf(s(e)) >= 0;
    }
    function v(e) {
      if (c(e) && u(e).position !== "fixed") {
        return e.offsetParent;
      } else {
        return null;
      }
    }
    function b(e) {
      var t = o(e);
      for (var r = v(e); r && y(r) && u(r).position === "static";) {
        r = v(r);
      }
      if (r && (s(r) === "html" || s(r) === "body" && u(r).position === "static")) {
        return t;
      } else {
        return r || function (e) {
          var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
          if (navigator.userAgent.indexOf("Trident") !== -1 && c(e) && u(e).position === "fixed") {
            return null;
          }
          for (var r = h(e); c(r) && ["html", "body"].indexOf(s(r)) < 0;) {
            var n = u(r);
            if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none") {
              return r;
            }
            r = r.parentNode;
          }
          return null;
        }(e) || t;
      }
    }
    r.d(t, {
      W: () => I,
      f: () => T
    });
    var m = "top";
    var w = "bottom";
    var _ = "right";
    var k = "left";
    var A = "start";
    var E = [].concat([m, w, _, k], ["auto"]).reduce(function (e, t) {
      return e.concat([t, t + "-" + A, t + "-end"]);
    }, []);
    var C = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function x(e) {
      var t = new Map();
      var r = new Set();
      var n = [];
      function o(e) {
        r.add(e.name);
        [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
          if (!r.has(e)) {
            var n = t.get(e);
            if (n) {
              o(n);
            }
          }
        });
        n.push(e);
      }
      e.forEach(function (e) {
        t.set(e.name, e);
      });
      e.forEach(function (e) {
        if (!r.has(e.name)) {
          o(e);
        }
      });
      return n;
    }
    function S(e) {
      return e.split("-")[0];
    }
    var O = Math.round;
    var B = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };
    function j() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }
      return !t.some(function (e) {
        return !e || typeof e.getBoundingClientRect != "function";
      });
    }
    function D(e = {}) {
      var t = e;
      var r = t.defaultModifiers;
      var o = r === undefined ? [] : r;
      var a = t.defaultOptions;
      var c = a === undefined ? B : a;
      return function (e, t, r = c) {
        var a;
        var s;
        var l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, B, c),
          modifiersData: {},
          elements: {
            reference: e,
            popper: t
          },
          attributes: {},
          styles: {}
        };
        var u = [];
        var f = false;
        var h = {
          state: l,
          setOptions: function (r) {
            p();
            l.options = Object.assign({}, c, l.options, r);
            l.scrollParents = {
              reference: i(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
              popper: g(t)
            };
            var n = function (e) {
              var t = x(e);
              return C.reduce(function (e, r) {
                return e.concat(t.filter(function (e) {
                  return e.phase === r;
                }));
              }, []);
            }(function (e) {
              var t = e.reduce(function (e, t) {
                var r = e[t.name];
                e[t.name] = r ? Object.assign({}, r, t, {
                  options: Object.assign({}, r.options, t.options),
                  data: Object.assign({}, r.data, t.data)
                }) : t;
                return e;
              }, {});
              return Object.keys(t).map(function (e) {
                return t[e];
              });
            }([].concat(o, l.options.modifiers)));
            l.orderedModifiers = n.filter(function (e) {
              return e.enabled;
            });
            l.orderedModifiers.forEach(function (e) {
              var t = e.name;
              var r = e.options;
              var n = r === undefined ? {} : r;
              var o = e.effect;
              if (typeof o == "function") {
                var a = o({
                  state: l,
                  name: t,
                  instance: h,
                  options: n
                });
                function i() {}
                u.push(a || i);
              }
            });
            return h.update();
          },
          forceUpdate: function () {
            if (!f) {
              var e = l.elements;
              var t = e.reference;
              var r = e.popper;
              if (j(t, r)) {
                var o;
                var a;
                var i;
                var c;
                l.rects = {
                  reference: d(t, b(r), l.options.strategy === "fixed"),
                  popper: (o = r, a = n(o), i = o.offsetWidth, c = o.offsetHeight, Math.abs(a.width - i) <= 1 && (i = a.width), Math.abs(a.height - c) <= 1 && (c = a.height), {
                    x: o.offsetLeft,
                    y: o.offsetTop,
                    width: i,
                    height: c
                  })
                };
                l.reset = false;
                l.placement = l.options.placement;
                l.orderedModifiers.forEach(function (e) {
                  return l.modifiersData[e.name] = Object.assign({}, e.data);
                });
                for (var s = 0; s < l.orderedModifiers.length; s++) {
                  if (l.reset !== true) {
                    var u = l.orderedModifiers[s];
                    var p = u.fn;
                    var g = u.options;
                    var y = g === undefined ? {} : g;
                    var v = u.name;
                    if (typeof p == "function") {
                      l = p({
                        state: l,
                        options: y,
                        name: v,
                        instance: h
                      }) || l;
                    }
                  } else {
                    l.reset = false;
                    s = -1;
                  }
                }
              }
            }
          },
          update: (a = function () {
            return new Promise(function (e) {
              h.forceUpdate();
              e(l);
            });
          }, function () {
            s ||= new Promise(function (e) {
              Promise.resolve().then(function () {
                s = undefined;
                e(a());
              });
            });
            return s;
          }),
          destroy: function () {
            p();
            f = true;
          }
        };
        if (!j(e, t)) {
          return h;
        }
        function p() {
          u.forEach(function (e) {
            return e();
          });
          u = [];
        }
        h.setOptions(r).then(function (e) {
          if (!f && r.onFirstUpdate) {
            r.onFirstUpdate(e);
          }
        });
        return h;
      };
    }
    var F = {
      passive: true
    };
    var P = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };
    function M(e) {
      var t;
      var r = e.popper;
      var n = e.popperRect;
      var a = e.placement;
      var i = e.offsets;
      var c = e.position;
      var s = e.gpuAcceleration;
      var f = e.adaptive;
      var d = e.roundOffsets;
      var h = d === true ? function (e) {
        var t = e.x;
        var r = e.y;
        var n = window.devicePixelRatio || 1;
        return {
          x: O(O(t * n) / n) || 0,
          y: O(O(r * n) / n) || 0
        };
      }(i) : typeof d == "function" ? d(i) : i;
      var p = h.x;
      var g = p === undefined ? 0 : p;
      var y = h.y;
      var v = y === undefined ? 0 : y;
      var A = i.hasOwnProperty("x");
      var E = i.hasOwnProperty("y");
      var C = k;
      var x = m;
      var S = window;
      if (f) {
        var B = b(r);
        var j = "clientHeight";
        var D = "clientWidth";
        if (B === o(r) && u(B = l(r)).position !== "static") {
          j = "scrollHeight";
          D = "scrollWidth";
        }
        B = B;
        if (a === m) {
          x = w;
          v -= B[j] - n.height;
          v *= s ? 1 : -1;
        }
        if (a === k) {
          C = _;
          g -= B[D] - n.width;
          g *= s ? 1 : -1;
        }
      }
      var F;
      var M = Object.assign({
        position: c
      }, f && P);
      if (s) {
        return Object.assign({}, M, ((F = {})[x] = E ? "0" : "", F[C] = A ? "0" : "", F.transform = (S.devicePixelRatio || 1) < 2 ? "translate(" + g + "px, " + v + "px)" : "translate3d(" + g + "px, " + v + "px, 0)", F));
      } else {
        return Object.assign({}, M, ((t = {})[x] = E ? v + "px" : "", t[C] = A ? g + "px" : "", t.transform = "", t));
      }
    }
    var T = D({
      defaultModifiers: [{
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state;
          var r = e.instance;
          var n = e.options;
          var a = n.scroll;
          var i = a === undefined || a;
          var c = n.resize;
          var s = c === undefined || c;
          var l = o(t.elements.popper);
          var u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          if (i) {
            u.forEach(function (e) {
              e.addEventListener("scroll", r.update, F);
            });
          }
          if (s) {
            l.addEventListener("resize", r.update, F);
          }
          return function () {
            if (i) {
              u.forEach(function (e) {
                e.removeEventListener("scroll", r.update, F);
              });
            }
            if (s) {
              l.removeEventListener("resize", r.update, F);
            }
          };
        },
        data: {}
      }, {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: function (e) {
          var t = e.state;
          var r = e.name;
          t.modifiersData[r] = function (e) {
            var t;
            var r = e.reference;
            var n = e.element;
            var o = e.placement;
            var a = o ? S(o) : null;
            var i = o ? function (e) {
              return e.split("-")[1];
            }(o) : null;
            var c = r.x + r.width / 2 - n.width / 2;
            var s = r.y + r.height / 2 - n.height / 2;
            switch (a) {
              case m:
                t = {
                  x: c,
                  y: r.y - n.height
                };
                break;
              case w:
                t = {
                  x: c,
                  y: r.y + r.height
                };
                break;
              case _:
                t = {
                  x: r.x + r.width,
                  y: s
                };
                break;
              case k:
                t = {
                  x: r.x - n.width,
                  y: s
                };
                break;
              default:
                t = {
                  x: r.x,
                  y: r.y
                };
            }
            var l = a ? function (e) {
              if (["top", "bottom"].indexOf(e) >= 0) {
                return "x";
              } else {
                return "y";
              }
            }(a) : null;
            if (l != null) {
              var u = l === "y" ? "height" : "width";
              switch (i) {
                case A:
                  t[l] = t[l] - (r[u] / 2 - n[u] / 2);
                  break;
                case "end":
                  t[l] = t[l] + (r[u] / 2 - n[u] / 2);
              }
            }
            return t;
          }({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement
          });
        },
        data: {}
      }, {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state;
          var r = e.options;
          var n = r.gpuAcceleration;
          var o = n === undefined || n;
          var a = r.adaptive;
          var i = a === undefined || a;
          var c = r.roundOffsets;
          var s = c === undefined || c;
          var l = {
            placement: S(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o
          };
          if (t.modifiersData.popperOffsets != null) {
            t.styles.popper = Object.assign({}, t.styles.popper, M(Object.assign({}, l, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: i,
              roundOffsets: s
            })));
          }
          if (t.modifiersData.arrow != null) {
            t.styles.arrow = Object.assign({}, t.styles.arrow, M(Object.assign({}, l, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: false,
              roundOffsets: s
            })));
          }
          t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement
          });
        },
        data: {}
      }, {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var r = t.styles[e] || {};
            var n = t.attributes[e] || {};
            var o = t.elements[e];
            if (c(o) && s(o)) {
              Object.assign(o.style, r);
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                if (t === false) {
                  o.removeAttribute(e);
                } else {
                  o.setAttribute(e, t === true ? "" : t);
                }
              });
            }
          });
        },
        effect: function (e) {
          var t = e.state;
          var r = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
          Object.assign(t.elements.popper.style, r.popper);
          t.styles = r;
          if (t.elements.arrow) {
            Object.assign(t.elements.arrow.style, r.arrow);
          }
          return function () {
            Object.keys(t.elements).forEach(function (e) {
              var n = t.elements[e];
              var o = t.attributes[e] || {};
              var a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce(function (e, t) {
                e[t] = "";
                return e;
              }, {});
              if (c(n) && s(n)) {
                Object.assign(n.style, a);
                Object.keys(o).forEach(function (e) {
                  n.removeAttribute(e);
                });
              }
            });
          };
        },
        requires: ["computeStyles"]
      }]
    });
    var I = {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state;
        var r = e.options;
        var n = e.name;
        var o = r.offset;
        var a = o === undefined ? [0, 0] : o;
        var i = E.reduce(function (e, r) {
          e[r] = function (e, t, r) {
            var n = S(e);
            var o = [k, m].indexOf(n) >= 0 ? -1 : 1;
            var a = typeof r == "function" ? r(Object.assign({}, t, {
              placement: e
            })) : r;
            var i = a[0];
            var c = a[1];
            i = i || 0;
            c = (c || 0) * o;
            if ([k, _].indexOf(n) >= 0) {
              return {
                x: c,
                y: i
              };
            } else {
              return {
                x: i,
                y: c
              };
            }
          }(r, t.rects, a);
          return e;
        }, {});
        var c = i[t.placement];
        var s = c.x;
        var l = c.y;
        if (t.modifiersData.popperOffsets != null) {
          t.modifiersData.popperOffsets.x += s;
          t.modifiersData.popperOffsets.y += l;
        }
        t.modifiersData[n] = i;
      }
    };
  },
  1798: () => {
    (function () {
      if (typeof window != "undefined") {
        var e;
        var t = "ontouchstart" in window;
        document.createTouch ||= function (e, t, n, o, a, i, c) {
          return new r(t, n, {
            pageX: o,
            pageY: a,
            screenX: i,
            screenY: c,
            clientX: o - window.pageXOffset,
            clientY: a - window.pageYOffset
          }, 0, 0);
        };
        document.createTouchList ||= function () {
          var e = o();
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          e.length = arguments.length;
          return e;
        };
        Element.prototype.matches ||= Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        Element.prototype.closest ||= function (e) {
          var t = this;
          do {
            if (t.matches(e)) {
              return t;
            }
            t = t.parentElement || t.parentNode;
          } while (t !== null && t.nodeType === 1);
          return null;
        };
        function r(e, t, r, n, o) {
          n = n || 0;
          o = o || 0;
          this.identifier = t;
          this.target = e;
          this.clientX = r.clientX + n;
          this.clientY = r.clientY + o;
          this.screenX = r.screenX + n;
          this.screenY = r.screenY + o;
          this.pageX = r.pageX + n;
          this.pageY = r.pageY + o;
        }
        var n = false;
        s.multiTouchOffset = 75;
        if (!t) {
          new s();
        }
      }
      function o() {
        var e = [];
        e.item = function (e) {
          return this[e] || null;
        };
        e.identifiedTouch = function (e) {
          return this[e + 1] || null;
        };
        return e;
      }
      function a(t) {
        return function (r) {
          var o;
          var a;
          var s;
          if (r.type === "mousedown") {
            n = true;
          }
          if (r.type === "mouseup") {
            n = false;
          }
          if (r.type !== "mousemove" || n) {
            if (r.type === "mousedown" || !e || e && !e.dispatchEvent) {
              e = r.target;
            }
            if (e.closest("[data-no-touch-simulate]") == null) {
              o = t;
              a = r;
              (s = document.createEvent("Event")).initEvent(o, true, true);
              s.altKey = a.altKey;
              s.ctrlKey = a.ctrlKey;
              s.metaKey = a.metaKey;
              s.shiftKey = a.shiftKey;
              s.touches = c(a);
              s.targetTouches = c(a);
              s.changedTouches = i(a);
              e.dispatchEvent(s);
            }
            if (r.type === "mouseup") {
              e = null;
            }
          }
        };
      }
      function i(t) {
        var n = o();
        n.push(new r(e, 1, t, 0, 0));
        return n;
      }
      function c(e) {
        if (e.type === "mouseup") {
          return o();
        } else {
          return i(e);
        }
      }
      function s() {
        window.addEventListener("mousedown", a("touchstart"), true);
        window.addEventListener("mousemove", a("touchmove"), true);
        window.addEventListener("mouseup", a("touchend"), true);
      }
    })();
  },
  2244: (e, t, r) => {
    "use strict";

    r.d(t, {
      EL: () => c,
      Ib: () => u,
      OR: () => f,
      Vd: () => d,
      _f: () => a,
      aM: () => w,
      eo: () => b,
      iP: () => h,
      rP: () => v
    });
    var n = r(9445);
    var o = r(7268);
    var a = typeof window != "undefined";
    var i = (e, t) => ({
      top: 0,
      left: 0,
      right: e,
      bottom: t,
      width: e,
      height: t
    });
    var c = e => {
      const t = (0, n.SU)(e);
      if (t === window) {
        const e = t.innerWidth;
        const r = t.innerHeight;
        return i(e, r);
      }
      if (t == null ? undefined : t.getBoundingClientRect) {
        return t.getBoundingClientRect();
      } else {
        return i(0, 0);
      }
    };
    var s;
    var l;
    function u(e) {
      let t;
      (0, o.bv)(() => {
        e();
        (0, o.Y3)(() => {
          t = true;
        });
      });
      (0, o.dl)(() => {
        if (t) {
          e();
        }
      });
    }
    function f(e, t, r = {}) {
      if (!a) {
        return;
      }
      const {
        target: i = window,
        passive: c = false,
        capture: s = false
      } = r;
      let l;
      const f = r => {
        const o = (0, n.SU)(r);
        if (o && !l) {
          o.addEventListener(e, t, {
            capture: s,
            passive: c
          });
          l = true;
        }
      };
      const d = r => {
        const o = (0, n.SU)(r);
        if (o && l) {
          o.removeEventListener(e, t, s);
          l = false;
        }
      };
      (0, o.Ah)(() => d(i));
      (0, o.se)(() => d(i));
      u(() => f(i));
      if ((0, n.dq)(i)) {
        (0, o.YP)(i, (e, t) => {
          d(t);
          f(e);
        });
      }
    }
    function d(e, t, r = {}) {
      if (!a) {
        return;
      }
      const {
        eventName: o = "click"
      } = r;
      f(o, r => {
        const o = (0, n.SU)(e);
        if (o && !o.contains(r.target)) {
          t(r);
        }
      }, {
        target: document
      });
    }
    function h() {
      if (!s && (s = (0, n.iH)(0), l = (0, n.iH)(0), a)) {
        const e = () => {
          s.value = window.innerWidth;
          l.value = window.innerHeight;
        };
        e();
        window.addEventListener("resize", e, {
          passive: true
        });
        window.addEventListener("orientationchange", e, {
          passive: true
        });
      }
      return {
        width: s,
        height: l
      };
    }
    var p = /scroll|auto/i;
    var g = a ? window : undefined;
    function y(e) {
      return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
    }
    function v(e, t = g) {
      let r = e;
      while (r && r !== t && y(r)) {
        const {
          overflowY: e
        } = window.getComputedStyle(r);
        if (p.test(e)) {
          return r;
        }
        r = r.parentNode;
      }
      return t;
    }
    function b(e, t = g) {
      const r = (0, n.iH)();
      (0, o.bv)(() => {
        if (e.value) {
          r.value = v(e.value, t);
        }
      });
      return r;
    }
    var m = Symbol("van-field");
    function w(e) {
      const t = (0, o.f3)(m, null);
      if (t && !t.customValue.value) {
        t.customValue.value = e;
        (0, o.YP)(e, () => {
          t.resetValidation();
          t.validateWithTrigger("onChange");
        });
      }
    }
  },
  2966: e => {
    "use strict";

    const {
      AbortController: t,
      AbortSignal: r
    } = typeof self != "undefined" ? self : typeof window != "undefined" ? window : undefined;
    e.exports = t;
    e.exports.AbortSignal = r;
    e.exports.default = t;
  },
  4118: function (e, t, r) {
    var n;
    (function (o) {
      "use strict";

      function a(e, t) {
        var r = (e & 65535) + (t & 65535);
        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | r & 65535;
      }
      function i(e, t, r, n, o, i) {
        return a((c = a(a(t, e), a(n, i))) << (s = o) | c >>> 32 - s, r);
        var c;
        var s;
      }
      function c(e, t, r, n, o, a, c) {
        return i(t & r | ~t & n, e, t, o, a, c);
      }
      function s(e, t, r, n, o, a, c) {
        return i(t & n | r & ~n, e, t, o, a, c);
      }
      function l(e, t, r, n, o, a, c) {
        return i(t ^ r ^ n, e, t, o, a, c);
      }
      function u(e, t, r, n, o, a, c) {
        return i(r ^ (t | ~n), e, t, o, a, c);
      }
      function f(e, t) {
        var r;
        var n;
        var o;
        var i;
        var f;
        e[t >> 5] |= 128 << t % 32;
        e[14 + (t + 64 >>> 9 << 4)] = t;
        var d = 1732584193;
        var h = -271733879;
        var p = -1732584194;
        var g = 271733878;
        for (r = 0; r < e.length; r += 16) {
          n = d;
          o = h;
          i = p;
          f = g;
          d = c(d, h, p, g, e[r], 7, -680876936);
          g = c(g, d, h, p, e[r + 1], 12, -389564586);
          p = c(p, g, d, h, e[r + 2], 17, 606105819);
          h = c(h, p, g, d, e[r + 3], 22, -1044525330);
          d = c(d, h, p, g, e[r + 4], 7, -176418897);
          g = c(g, d, h, p, e[r + 5], 12, 1200080426);
          p = c(p, g, d, h, e[r + 6], 17, -1473231341);
          h = c(h, p, g, d, e[r + 7], 22, -45705983);
          d = c(d, h, p, g, e[r + 8], 7, 1770035416);
          g = c(g, d, h, p, e[r + 9], 12, -1958414417);
          p = c(p, g, d, h, e[r + 10], 17, -42063);
          h = c(h, p, g, d, e[r + 11], 22, -1990404162);
          d = c(d, h, p, g, e[r + 12], 7, 1804603682);
          g = c(g, d, h, p, e[r + 13], 12, -40341101);
          p = c(p, g, d, h, e[r + 14], 17, -1502002290);
          d = s(d, h = c(h, p, g, d, e[r + 15], 22, 1236535329), p, g, e[r + 1], 5, -165796510);
          g = s(g, d, h, p, e[r + 6], 9, -1069501632);
          p = s(p, g, d, h, e[r + 11], 14, 643717713);
          h = s(h, p, g, d, e[r], 20, -373897302);
          d = s(d, h, p, g, e[r + 5], 5, -701558691);
          g = s(g, d, h, p, e[r + 10], 9, 38016083);
          p = s(p, g, d, h, e[r + 15], 14, -660478335);
          h = s(h, p, g, d, e[r + 4], 20, -405537848);
          d = s(d, h, p, g, e[r + 9], 5, 568446438);
          g = s(g, d, h, p, e[r + 14], 9, -1019803690);
          p = s(p, g, d, h, e[r + 3], 14, -187363961);
          h = s(h, p, g, d, e[r + 8], 20, 1163531501);
          d = s(d, h, p, g, e[r + 13], 5, -1444681467);
          g = s(g, d, h, p, e[r + 2], 9, -51403784);
          p = s(p, g, d, h, e[r + 7], 14, 1735328473);
          d = l(d, h = s(h, p, g, d, e[r + 12], 20, -1926607734), p, g, e[r + 5], 4, -378558);
          g = l(g, d, h, p, e[r + 8], 11, -2022574463);
          p = l(p, g, d, h, e[r + 11], 16, 1839030562);
          h = l(h, p, g, d, e[r + 14], 23, -35309556);
          d = l(d, h, p, g, e[r + 1], 4, -1530992060);
          g = l(g, d, h, p, e[r + 4], 11, 1272893353);
          p = l(p, g, d, h, e[r + 7], 16, -155497632);
          h = l(h, p, g, d, e[r + 10], 23, -1094730640);
          d = l(d, h, p, g, e[r + 13], 4, 681279174);
          g = l(g, d, h, p, e[r], 11, -358537222);
          p = l(p, g, d, h, e[r + 3], 16, -722521979);
          h = l(h, p, g, d, e[r + 6], 23, 76029189);
          d = l(d, h, p, g, e[r + 9], 4, -640364487);
          g = l(g, d, h, p, e[r + 12], 11, -421815835);
          p = l(p, g, d, h, e[r + 15], 16, 530742520);
          d = u(d, h = l(h, p, g, d, e[r + 2], 23, -995338651), p, g, e[r], 6, -198630844);
          g = u(g, d, h, p, e[r + 7], 10, 1126891415);
          p = u(p, g, d, h, e[r + 14], 15, -1416354905);
          h = u(h, p, g, d, e[r + 5], 21, -57434055);
          d = u(d, h, p, g, e[r + 12], 6, 1700485571);
          g = u(g, d, h, p, e[r + 3], 10, -1894986606);
          p = u(p, g, d, h, e[r + 10], 15, -1051523);
          h = u(h, p, g, d, e[r + 1], 21, -2054922799);
          d = u(d, h, p, g, e[r + 8], 6, 1873313359);
          g = u(g, d, h, p, e[r + 15], 10, -30611744);
          p = u(p, g, d, h, e[r + 6], 15, -1560198380);
          h = u(h, p, g, d, e[r + 13], 21, 1309151649);
          d = u(d, h, p, g, e[r + 4], 6, -145523070);
          g = u(g, d, h, p, e[r + 11], 10, -1120210379);
          p = u(p, g, d, h, e[r + 2], 15, 718787259);
          h = u(h, p, g, d, e[r + 9], 21, -343485551);
          d = a(d, n);
          h = a(h, o);
          p = a(p, i);
          g = a(g, f);
        }
        return [d, h, p, g];
      }
      function d(e) {
        var t;
        var r = "";
        var n = e.length * 32;
        for (t = 0; t < n; t += 8) {
          r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        }
        return r;
      }
      function h(e) {
        var t;
        var r = [];
        r[(e.length >> 2) - 1] = undefined;
        t = 0;
        for (; t < r.length; t += 1) {
          r[t] = 0;
        }
        var n = e.length * 8;
        for (t = 0; t < n; t += 8) {
          r[t >> 5] |= (e.charCodeAt(t / 8) & 255) << t % 32;
        }
        return r;
      }
      function p(e) {
        var t;
        var r;
        var n = "0123456789abcdef";
        var o = "";
        for (r = 0; r < e.length; r += 1) {
          t = e.charCodeAt(r);
          o += n.charAt(t >>> 4 & 15) + n.charAt(t & 15);
        }
        return o;
      }
      function g(e) {
        return unescape(encodeURIComponent(e));
      }
      function y(e) {
        return function (e) {
          return d(f(h(e), e.length * 8));
        }(g(e));
      }
      function v(e, t) {
        return function (e, t) {
          var r;
          var n;
          var o = h(e);
          var a = [];
          var i = [];
          a[15] = i[15] = undefined;
          if (o.length > 16) {
            o = f(o, e.length * 8);
          }
          r = 0;
          for (; r < 16; r += 1) {
            a[r] = o[r] ^ 909522486;
            i[r] = o[r] ^ 1549556828;
          }
          n = f(a.concat(h(t)), 512 + t.length * 8);
          return d(f(i.concat(n), 640));
        }(g(e), g(t));
      }
      function b(e, t, r) {
        if (t) {
          if (r) {
            return v(t, e);
          } else {
            return p(v(t, e));
          }
        } else if (r) {
          return y(e);
        } else {
          return p(y(e));
        }
      }
      if ((n = function () {
        return b;
      }.call(t, r, t, e)) !== undefined) {
        e.exports = n;
      }
    })();
  },
  7346: (e, t, r) => {
    "use strict";

    r.d(t, {
      g0: () => O
    });
    var n = r(7856);
    const o = {
      create: function (e) {
        var t = {
          messagesCallback: null,
          bc: new BroadcastChannel(e),
          subFns: []
        };
        t.bc.onmessage = function (e) {
          if (t.messagesCallback) {
            t.messagesCallback(e.data);
          }
        };
        return t;
      },
      close: function (e) {
        e.bc.close();
        e.subFns = [];
      },
      onMessage: function (e, t) {
        e.messagesCallback = t;
      },
      postMessage: function (e, t) {
        try {
          e.bc.postMessage(t, false);
          return n.hU;
        } catch (e) {
          return Promise.reject(e);
        }
      },
      canBeUsed: function () {
        if (n.UG && typeof window == "undefined") {
          return false;
        }
        if (typeof BroadcastChannel == "function") {
          if (BroadcastChannel._pubkey) {
            throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
          }
          return true;
        }
        return false;
      },
      type: "native",
      averageResponseTime: function () {
        return 150;
      },
      microSeconds: n.Xu
    };
    var a = function () {
      function e(e) {
        this.ttl = e;
        this.set = new Set();
        this.timeMap = new Map();
      }
      e.prototype.has = function (e) {
        return this.set.has(e);
      };
      e.prototype.add = function (e) {
        var t = this;
        this.timeMap.set(e, i());
        this.set.add(e);
        setTimeout(function () {
          (function (e) {
            var t = i() - e.ttl;
            var r = e.set[Symbol.iterator]();
            while (true) {
              var n = r.next().value;
              if (!n) {
                return;
              }
              if (!(e.timeMap.get(n) < t)) {
                return;
              }
              e.timeMap.delete(n);
              e.set.delete(n);
            }
          })(t);
        }, 0);
      };
      e.prototype.clear = function () {
        this.set.clear();
        this.timeMap.clear();
      };
      return e;
    }();
    function i() {
      return new Date().getTime();
    }
    function c(e = {}) {
      var t = JSON.parse(JSON.stringify(e));
      if (t.webWorkerSupport === undefined) {
        t.webWorkerSupport = true;
      }
      t.idb ||= {};
      t.idb.ttl ||= 45000;
      t.idb.fallbackInterval ||= 150;
      if (e.idb && typeof e.idb.onclose == "function") {
        t.idb.onclose = e.idb.onclose;
      }
      t.localstorage ||= {};
      t.localstorage.removeTimeout ||= 60000;
      if (e.methods) {
        t.methods = e.methods;
      }
      t.node ||= {};
      t.node.ttl ||= 120000;
      t.node.maxParallelWrites ||= 2048;
      if (t.node.useFastPath === undefined) {
        t.node.useFastPath = true;
      }
      return t;
    }
    var s = n.Xu;
    var l = "messages";
    function u() {
      if (typeof indexedDB != "undefined") {
        return indexedDB;
      }
      if (typeof window != "undefined") {
        if (window.mozIndexedDB !== undefined) {
          return window.mozIndexedDB;
        }
        if (window.webkitIndexedDB !== undefined) {
          return window.webkitIndexedDB;
        }
        if (window.msIndexedDB !== undefined) {
          return window.msIndexedDB;
        }
      }
      return false;
    }
    function f(e, t) {
      var r = e.transaction(l).objectStore(l);
      var n = [];
      return new Promise(function (e) {
        (function () {
          try {
            var e = IDBKeyRange.bound(t + 1, Infinity);
            return r.openCursor(e);
          } catch (e) {
            return r.openCursor();
          }
        })().onsuccess = function (r) {
          var o = r.target.result;
          if (o) {
            if (o.value.id < t + 1) {
              o.continue(t + 1);
            } else {
              n.push(o.value);
              o.continue();
            }
          } else {
            e(n);
          }
        };
      });
    }
    function d(e, t) {
      return function (e, t) {
        var r = new Date().getTime() - t;
        var n = e.transaction(l).objectStore(l);
        var o = [];
        return new Promise(function (e) {
          n.openCursor().onsuccess = function (t) {
            var n = t.target.result;
            if (n) {
              var a = n.value;
              if (!(a.time < r)) {
                e(o);
                return;
              }
              o.push(a);
              n.continue();
            } else {
              e(o);
            }
          };
        });
      }(e, t).then(function (t) {
        return Promise.all(t.map(function (t) {
          return function (e, t) {
            var r = e.transaction([l], "readwrite").objectStore(l).delete(t);
            return new Promise(function (e) {
              r.onsuccess = function () {
                return e();
              };
            });
          }(e, t.id);
        }));
      });
    }
    function h(e) {
      if (!e.closed) {
        p(e).then(function () {
          return (0, n._v)(e.options.idb.fallbackInterval);
        }).then(function () {
          return h(e);
        });
      }
    }
    function p(e) {
      if (e.closed) {
        return n.hU;
      } else if (e.messagesCallback) {
        return f(e.db, e.lastCursorId).then(function (t) {
          var r = t.filter(function (e) {
            return !!e;
          }).map(function (t) {
            if (t.id > e.lastCursorId) {
              e.lastCursorId = t.id;
            }
            return t;
          }).filter(function (t) {
            return function (e, t) {
              return e.uuid !== t.uuid && !t.eMIs.has(e.id) && !(e.data.time < t.messagesCallbackTime);
            }(t, e);
          }).sort(function (e, t) {
            return e.time - t.time;
          });
          r.forEach(function (t) {
            if (e.messagesCallback) {
              e.eMIs.add(t.id);
              e.messagesCallback(t.data);
            }
          });
          return n.hU;
        });
      } else {
        return n.hU;
      }
    }
    const g = {
      create: function (e, t) {
        t = c(t);
        return function (e) {
          var t = "pubkey.broadcast-channel-0-" + e;
          var r = u().open(t, 1);
          r.onupgradeneeded = function (e) {
            e.target.result.createObjectStore(l, {
              keyPath: "id",
              autoIncrement: true
            });
          };
          return new Promise(function (e, t) {
            r.onerror = function (e) {
              return t(e);
            };
            r.onsuccess = function () {
              e(r.result);
            };
          });
        }(e).then(function (r) {
          var o = {
            closed: false,
            lastCursorId: 0,
            channelName: e,
            options: t,
            uuid: (0, n.JQ)(),
            eMIs: new a(t.idb.ttl * 2),
            writeBlockPromise: n.hU,
            messagesCallback: null,
            readQueuePromises: [],
            db: r
          };
          r.onclose = function () {
            o.closed = true;
            if (t.idb.onclose) {
              t.idb.onclose();
            }
          };
          h(o);
          return o;
        });
      },
      close: function (e) {
        e.closed = true;
        e.db.close();
      },
      onMessage: function (e, t, r) {
        e.messagesCallbackTime = r;
        e.messagesCallback = t;
        p(e);
      },
      postMessage: function (e, t) {
        e.writeBlockPromise = e.writeBlockPromise.then(function () {
          return function (e, t, r) {
            var n = {
              uuid: t,
              time: new Date().getTime(),
              data: r
            };
            var o = e.transaction([l], "readwrite");
            return new Promise(function (e, t) {
              o.oncomplete = function () {
                return e();
              };
              o.onerror = function (e) {
                return t(e);
              };
              o.objectStore(l).add(n);
            });
          }(e.db, e.uuid, t);
        }).then(function () {
          if ((0, n.Iy)(0, 10) === 0) {
            d(e.db, e.options.idb.ttl);
          }
        });
        return e.writeBlockPromise;
      },
      canBeUsed: function () {
        return !n.UG && !!u();
      },
      type: "idb",
      averageResponseTime: function (e) {
        return e.idb.fallbackInterval * 2;
      },
      microSeconds: s
    };
    var y = n.Xu;
    function v() {
      var e;
      if (typeof window == "undefined") {
        return null;
      }
      try {
        e = window.localStorage;
        e = window["ie8-eventlistener/storage"] || window.localStorage;
      } catch (e) {}
      return e;
    }
    function b(e) {
      return "pubkey.broadcastChannel-" + e;
    }
    function m() {
      if (n.UG) {
        return false;
      }
      var e = v();
      if (!e) {
        return false;
      }
      try {
        var t = "__broadcastchannel_check";
        e.setItem(t, "works");
        e.removeItem(t);
      } catch (e) {
        return false;
      }
      return true;
    }
    const w = {
      create: function (e, t) {
        t = c(t);
        if (!m()) {
          throw new Error("BroadcastChannel: localstorage cannot be used");
        }
        var r = (0, n.JQ)();
        var o = new a(t.localstorage.removeTimeout);
        var i = {
          channelName: e,
          uuid: r,
          eMIs: o
        };
        i.listener = function (e, t) {
          var r = b(e);
          function n(e) {
            if (e.key === r) {
              t(JSON.parse(e.newValue));
            }
          }
          window.addEventListener("storage", n);
          return n;
        }(e, function (e) {
          if (i.messagesCallback && e.uuid !== r && e.token && !o.has(e.token)) {
            if (!e.data.time || !(e.data.time < i.messagesCallbackTime)) {
              o.add(e.token);
              i.messagesCallback(e.data);
            }
          }
        });
        return i;
      },
      close: function (e) {
        var t;
        t = e.listener;
        window.removeEventListener("storage", t);
      },
      onMessage: function (e, t, r) {
        e.messagesCallbackTime = r;
        e.messagesCallback = t;
      },
      postMessage: function (e, t) {
        return new Promise(function (r) {
          (0, n._v)().then(function () {
            var o = b(e.channelName);
            var a = {
              token: (0, n.JQ)(),
              time: new Date().getTime(),
              data: t,
              uuid: e.uuid
            };
            var i = JSON.stringify(a);
            v().setItem(o, i);
            var c = document.createEvent("Event");
            c.initEvent("storage", true, true);
            c.key = o;
            c.newValue = i;
            window.dispatchEvent(c);
            r();
          });
        });
      },
      canBeUsed: m,
      type: "localstorage",
      averageResponseTime: function () {
        var e = navigator.userAgent.toLowerCase();
        if (e.includes("safari") && !e.includes("chrome")) {
          return 240;
        } else {
          return 120;
        }
      },
      microSeconds: y
    };
    var _ = n.Xu;
    var k = new Set();
    const A = {
      create: function (e) {
        var t = {
          name: e,
          messagesCallback: null
        };
        k.add(t);
        return t;
      },
      close: function (e) {
        k.delete(e);
      },
      onMessage: function (e, t) {
        e.messagesCallback = t;
      },
      postMessage: function (e, t) {
        return new Promise(function (r) {
          return setTimeout(function () {
            Array.from(k).filter(function (t) {
              return t.name === e.name;
            }).filter(function (t) {
              return t !== e;
            }).filter(function (e) {
              return !!e.messagesCallback;
            }).forEach(function (e) {
              return e.messagesCallback(t);
            });
            r();
          }, 5);
        });
      },
      canBeUsed: function () {
        return true;
      },
      type: "simulate",
      averageResponseTime: function () {
        return 5;
      },
      microSeconds: _
    };
    var E = [o, g, w];
    var C;
    var x = new Set();
    var S = 0;
    function O(e, t) {
      var r;
      var o;
      this.id = S++;
      x.add(this);
      this.name = e;
      if (C) {
        t = C;
      }
      this.options = c(t);
      this.method = function (e) {
        var t = [].concat(e.methods, E).filter(Boolean);
        if (e.type) {
          if (e.type === "simulate") {
            return A;
          }
          var r = t.find(function (t) {
            return t.type === e.type;
          });
          if (r) {
            return r;
          }
          throw new Error("method-type " + e.type + " not found");
        }
        if (!e.webWorkerSupport && !n.UG) {
          t = t.filter(function (e) {
            return e.type !== "idb";
          });
        }
        var o = t.find(function (e) {
          return e.canBeUsed();
        });
        if (o) {
          return o;
        }
        throw new Error("No useable method found in " + JSON.stringify(E.map(function (e) {
          return e.type;
        })));
      }(this.options);
      this._iL = false;
      this._onML = null;
      this._addEL = {
        message: [],
        internal: []
      };
      this._uMP = new Set();
      this._befC = [];
      this._prepP = null;
      o = (r = this).method.create(r.name, r.options);
      if ((0, n.tI)(o)) {
        r._prepP = o;
        o.then(function (e) {
          r._state = e;
        });
      } else {
        r._state = o;
      }
    }
    function B(e, t, r) {
      var o = {
        time: e.method.microSeconds(),
        type: t,
        data: r
      };
      return (e._prepP ? e._prepP : n.hU).then(function () {
        var t = e.method.postMessage(e._state, o);
        e._uMP.add(t);
        t.catch().then(function () {
          return e._uMP.delete(t);
        });
        return t;
      });
    }
    function j(e) {
      return e._addEL.message.length > 0 || e._addEL.internal.length > 0;
    }
    function D(e, t, r) {
      e._addEL[t].push(r);
      (function (e) {
        if (!e._iL && j(e)) {
          function t(t) {
            e._addEL[t.type].forEach(function (e) {
              var r = 100000;
              var n = e.time - r;
              if (t.time >= n) {
                e.fn(t.data);
              }
            });
          }
          var r = e.method.microSeconds();
          if (e._prepP) {
            e._prepP.then(function () {
              e._iL = true;
              e.method.onMessage(e._state, t, r);
            });
          } else {
            e._iL = true;
            e.method.onMessage(e._state, t, r);
          }
        }
      })(e);
    }
    function F(e, t, r) {
      e._addEL[t] = e._addEL[t].filter(function (e) {
        return e !== r;
      });
      (function (e) {
        if (e._iL && !j(e)) {
          e._iL = false;
          var t = e.method.microSeconds();
          e.method.onMessage(e._state, null, t);
        }
      })(e);
    }
    O._pubkey = true;
    O.prototype = {
      postMessage: function (e) {
        if (this.closed) {
          throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(e));
        }
        return B(this, "message", e);
      },
      postInternal: function (e) {
        return B(this, "internal", e);
      },
      set onmessage(e) {
        var t = {
          time: this.method.microSeconds(),
          fn: e
        };
        F(this, "message", this._onML);
        if (e && typeof e == "function") {
          this._onML = t;
          D(this, "message", t);
        } else {
          this._onML = null;
        }
      },
      addEventListener: function (e, t) {
        D(this, e, {
          time: this.method.microSeconds(),
          fn: t
        });
      },
      removeEventListener: function (e, t) {
        F(this, e, this._addEL[e].find(function (e) {
          return e.fn === t;
        }));
      },
      close: function () {
        var e = this;
        if (!this.closed) {
          x.delete(this);
          this.closed = true;
          var t = this._prepP ? this._prepP : n.hU;
          this._onML = null;
          this._addEL.message = [];
          return t.then(function () {
            return Promise.all(Array.from(e._uMP));
          }).then(function () {
            return Promise.all(e._befC.map(function (e) {
              return e();
            }));
          }).then(function () {
            return e.method.close(e._state);
          });
        }
      },
      get type() {
        return this.method.type;
      },
      get isClosed() {
        return this.closed;
      }
    };
  },
  7856: (e, t, r) => {
    "use strict";

    function n(e) {
      return !!e && typeof e.then == "function";
    }
    r.d(t, {
      Iy: () => c,
      JQ: () => s,
      Ob: () => o,
      UG: () => d,
      Xu: () => f,
      _v: () => i,
      hU: () => a,
      tI: () => n
    });
    Promise.resolve(false);
    var o = Promise.resolve(true);
    var a = Promise.resolve();
    function i(e, t) {
      e ||= 0;
      return new Promise(function (r) {
        return setTimeout(function () {
          return r(t);
        }, e);
      });
    }
    function c(e, t) {
      return Math.floor(Math.random() * (t - e + 1) + e);
    }
    function s() {
      return Math.random().toString(36).substring(2);
    }
    var l = 0;
    var u = 0;
    function f() {
      var e = new Date().getTime();
      if (e === l) {
        return e * 1000 + ++u;
      } else {
        l = e;
        u = 0;
        return e * 1000;
      }
    }
    var d = Object.prototype.toString.call(typeof process != "undefined" ? process : 0) === "[object process]";
  },
  3779: (e, t, r) => {
    const n = r(1510);
    const o = {};
    for (const e of Object.keys(n)) {
      o[n[e]] = e;
    }
    const a = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: ["hex"]
      },
      keyword: {
        channels: 1,
        labels: ["keyword"]
      },
      ansi16: {
        channels: 1,
        labels: ["ansi16"]
      },
      ansi256: {
        channels: 1,
        labels: ["ansi256"]
      },
      hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
      },
      apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
      },
      gray: {
        channels: 1,
        labels: ["gray"]
      }
    };
    e.exports = a;
    for (const e of Object.keys(a)) {
      if (!("channels" in a[e])) {
        throw new Error("missing channels property: " + e);
      }
      if (!("labels" in a[e])) {
        throw new Error("missing channel labels property: " + e);
      }
      if (a[e].labels.length !== a[e].channels) {
        throw new Error("channel and label counts mismatch: " + e);
      }
      const {
        channels: t,
        labels: r
      } = a[e];
      delete a[e].channels;
      delete a[e].labels;
      Object.defineProperty(a[e], "channels", {
        value: t
      });
      Object.defineProperty(a[e], "labels", {
        value: r
      });
    }
    a.rgb.hsl = function (e) {
      const t = e[0] / 255;
      const r = e[1] / 255;
      const n = e[2] / 255;
      const o = Math.min(t, r, n);
      const a = Math.max(t, r, n);
      const i = a - o;
      let c;
      let s;
      if (a === o) {
        c = 0;
      } else if (t === a) {
        c = (r - n) / i;
      } else if (r === a) {
        c = 2 + (n - t) / i;
      } else if (n === a) {
        c = 4 + (t - r) / i;
      }
      c = Math.min(c * 60, 360);
      if (c < 0) {
        c += 360;
      }
      const l = (o + a) / 2;
      s = a === o ? 0 : l <= 0.5 ? i / (a + o) : i / (2 - a - o);
      return [c, s * 100, l * 100];
    };
    a.rgb.hsv = function (e) {
      let t;
      let r;
      let n;
      let o;
      let a;
      const i = e[0] / 255;
      const c = e[1] / 255;
      const s = e[2] / 255;
      const l = Math.max(i, c, s);
      const u = l - Math.min(i, c, s);
      const f = function (e) {
        return (l - e) / 6 / u + 0.5;
      };
      if (u === 0) {
        o = 0;
        a = 0;
      } else {
        a = u / l;
        t = f(i);
        r = f(c);
        n = f(s);
        if (i === l) {
          o = n - r;
        } else if (c === l) {
          o = 1 / 3 + t - n;
        } else if (s === l) {
          o = 2 / 3 + r - t;
        }
        if (o < 0) {
          o += 1;
        } else if (o > 1) {
          o -= 1;
        }
      }
      return [o * 360, a * 100, l * 100];
    };
    a.rgb.hwb = function (e) {
      const t = e[0];
      const r = e[1];
      let n = e[2];
      const o = a.rgb.hsl(e)[0];
      const i = 1 / 255 * Math.min(t, Math.min(r, n));
      n = 1 - 1 / 255 * Math.max(t, Math.max(r, n));
      return [o, i * 100, n * 100];
    };
    a.rgb.cmyk = function (e) {
      const t = e[0] / 255;
      const r = e[1] / 255;
      const n = e[2] / 255;
      const o = Math.min(1 - t, 1 - r, 1 - n);
      return [((1 - t - o) / (1 - o) || 0) * 100, ((1 - r - o) / (1 - o) || 0) * 100, ((1 - n - o) / (1 - o) || 0) * 100, o * 100];
    };
    a.rgb.keyword = function (e) {
      const t = o[e];
      if (t) {
        return t;
      }
      let r;
      let a = Infinity;
      for (const t of Object.keys(n)) {
        const o = n[t];
        c = o;
        const s = ((i = e)[0] - c[0]) ** 2 + (i[1] - c[1]) ** 2 + (i[2] - c[2]) ** 2;
        if (s < a) {
          a = s;
          r = t;
        }
      }
      var i;
      var c;
      return r;
    };
    a.keyword.rgb = function (e) {
      return n[e];
    };
    a.rgb.xyz = function (e) {
      let t = e[0] / 255;
      let r = e[1] / 255;
      let n = e[2] / 255;
      t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92;
      return [(t * 0.4124 + r * 0.3576 + n * 0.1805) * 100, (t * 0.2126 + r * 0.7152 + n * 0.0722) * 100, (t * 0.0193 + r * 0.1192 + n * 0.9505) * 100];
    };
    a.rgb.lab = function (e) {
      const t = a.rgb.xyz(e);
      let r = t[0];
      let n = t[1];
      let o = t[2];
      r /= 95.047;
      n /= 100;
      o /= 108.883;
      r = r > 0.008856 ? r ** (1 / 3) : r * 7.787 + 16 / 116;
      n = n > 0.008856 ? n ** (1 / 3) : n * 7.787 + 16 / 116;
      o = o > 0.008856 ? o ** (1 / 3) : o * 7.787 + 16 / 116;
      return [n * 116 - 16, (r - n) * 500, (n - o) * 200];
    };
    a.hsl.rgb = function (e) {
      const t = e[0] / 360;
      const r = e[1] / 100;
      const n = e[2] / 100;
      let o;
      let a;
      let i;
      if (r === 0) {
        i = n * 255;
        return [i, i, i];
      }
      o = n < 0.5 ? n * (1 + r) : n + r - n * r;
      const c = n * 2 - o;
      const s = [0, 0, 0];
      for (let e = 0; e < 3; e++) {
        a = t + 1 / 3 * -(e - 1);
        if (a < 0) {
          a++;
        }
        if (a > 1) {
          a--;
        }
        i = a * 6 < 1 ? c + (o - c) * 6 * a : a * 2 < 1 ? o : a * 3 < 2 ? c + (o - c) * (2 / 3 - a) * 6 : c;
        s[e] = i * 255;
      }
      return s;
    };
    a.hsl.hsv = function (e) {
      const t = e[0];
      let r = e[1] / 100;
      let n = e[2] / 100;
      let o = r;
      const a = Math.max(n, 0.01);
      n *= 2;
      r *= n <= 1 ? n : 2 - n;
      o *= a <= 1 ? a : 2 - a;
      return [t, (n === 0 ? o * 2 / (a + o) : r * 2 / (n + r)) * 100, (n + r) / 2 * 100];
    };
    a.hsv.rgb = function (e) {
      const t = e[0] / 60;
      const r = e[1] / 100;
      let n = e[2] / 100;
      const o = Math.floor(t) % 6;
      const a = t - Math.floor(t);
      const i = n * 255 * (1 - r);
      const c = n * 255 * (1 - r * a);
      const s = n * 255 * (1 - r * (1 - a));
      n *= 255;
      switch (o) {
        case 0:
          return [n, s, i];
        case 1:
          return [c, n, i];
        case 2:
          return [i, n, s];
        case 3:
          return [i, c, n];
        case 4:
          return [s, i, n];
        case 5:
          return [n, i, c];
      }
    };
    a.hsv.hsl = function (e) {
      const t = e[0];
      const r = e[1] / 100;
      const n = e[2] / 100;
      const o = Math.max(n, 0.01);
      let a;
      let i;
      i = (2 - r) * n;
      const c = (2 - r) * o;
      a = r * o;
      a /= c <= 1 ? c : 2 - c;
      a = a || 0;
      i /= 2;
      return [t, a * 100, i * 100];
    };
    a.hwb.rgb = function (e) {
      const t = e[0] / 360;
      let r = e[1] / 100;
      let n = e[2] / 100;
      const o = r + n;
      let a;
      if (o > 1) {
        r /= o;
        n /= o;
      }
      const i = Math.floor(t * 6);
      const c = 1 - n;
      a = t * 6 - i;
      if ((i & 1) != 0) {
        a = 1 - a;
      }
      const s = r + a * (c - r);
      let l;
      let u;
      let f;
      switch (i) {
        default:
        case 6:
        case 0:
          l = c;
          u = s;
          f = r;
          break;
        case 1:
          l = s;
          u = c;
          f = r;
          break;
        case 2:
          l = r;
          u = c;
          f = s;
          break;
        case 3:
          l = r;
          u = s;
          f = c;
          break;
        case 4:
          l = s;
          u = r;
          f = c;
          break;
        case 5:
          l = c;
          u = r;
          f = s;
      }
      return [l * 255, u * 255, f * 255];
    };
    a.cmyk.rgb = function (e) {
      const t = e[0] / 100;
      const r = e[1] / 100;
      const n = e[2] / 100;
      const o = e[3] / 100;
      return [(1 - Math.min(1, t * (1 - o) + o)) * 255, (1 - Math.min(1, r * (1 - o) + o)) * 255, (1 - Math.min(1, n * (1 - o) + o)) * 255];
    };
    a.xyz.rgb = function (e) {
      const t = e[0] / 100;
      const r = e[1] / 100;
      const n = e[2] / 100;
      let o;
      let a;
      let i;
      o = t * 3.2406 + r * -1.5372 + n * -0.4986;
      a = t * -0.9689 + r * 1.8758 + n * 0.0415;
      i = t * 0.0557 + r * -0.204 + n * 1.057;
      o = o > 0.0031308 ? o ** (1 / 2.4) * 1.055 - 0.055 : o * 12.92;
      a = a > 0.0031308 ? a ** (1 / 2.4) * 1.055 - 0.055 : a * 12.92;
      i = i > 0.0031308 ? i ** (1 / 2.4) * 1.055 - 0.055 : i * 12.92;
      o = Math.min(Math.max(0, o), 1);
      a = Math.min(Math.max(0, a), 1);
      i = Math.min(Math.max(0, i), 1);
      return [o * 255, a * 255, i * 255];
    };
    a.xyz.lab = function (e) {
      let t = e[0];
      let r = e[1];
      let n = e[2];
      t /= 95.047;
      r /= 100;
      n /= 108.883;
      t = t > 0.008856 ? t ** (1 / 3) : t * 7.787 + 16 / 116;
      r = r > 0.008856 ? r ** (1 / 3) : r * 7.787 + 16 / 116;
      n = n > 0.008856 ? n ** (1 / 3) : n * 7.787 + 16 / 116;
      return [r * 116 - 16, (t - r) * 500, (r - n) * 200];
    };
    a.lab.xyz = function (e) {
      let t;
      let r;
      let n;
      r = (e[0] + 16) / 116;
      t = e[1] / 500 + r;
      n = r - e[2] / 200;
      const o = r ** 3;
      const a = t ** 3;
      const i = n ** 3;
      r = o > 0.008856 ? o : (r - 16 / 116) / 7.787;
      t = a > 0.008856 ? a : (t - 16 / 116) / 7.787;
      n = i > 0.008856 ? i : (n - 16 / 116) / 7.787;
      t *= 95.047;
      r *= 100;
      n *= 108.883;
      return [t, r, n];
    };
    a.lab.lch = function (e) {
      const t = e[0];
      const r = e[1];
      const n = e[2];
      let o;
      o = Math.atan2(n, r) * 360 / 2 / Math.PI;
      if (o < 0) {
        o += 360;
      }
      return [t, Math.sqrt(r * r + n * n), o];
    };
    a.lch.lab = function (e) {
      const t = e[0];
      const r = e[1];
      const n = e[2] / 360 * 2 * Math.PI;
      return [t, r * Math.cos(n), r * Math.sin(n)];
    };
    a.rgb.ansi16 = function (e, t = null) {
      const [r, n, o] = e;
      let i = t === null ? a.rgb.hsv(e)[2] : t;
      i = Math.round(i / 50);
      if (i === 0) {
        return 30;
      }
      let c = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(r / 255));
      if (i === 2) {
        c += 60;
      }
      return c;
    };
    a.hsv.ansi16 = function (e) {
      return a.rgb.ansi16(a.hsv.rgb(e), e[2]);
    };
    a.rgb.ansi256 = function (e) {
      const t = e[0];
      const r = e[1];
      const n = e[2];
      if (t === r && r === n) {
        if (t < 8) {
          return 16;
        } else if (t > 248) {
          return 231;
        } else {
          return Math.round((t - 8) / 247 * 24) + 232;
        }
      }
      return 16 + Math.round(t / 255 * 5) * 36 + Math.round(r / 255 * 5) * 6 + Math.round(n / 255 * 5);
    };
    a.ansi16.rgb = function (e) {
      let t = e % 10;
      if (t === 0 || t === 7) {
        if (e > 50) {
          t += 3.5;
        }
        t = t / 10.5 * 255;
        return [t, t, t];
      }
      const r = (1 + ~~(e > 50)) * 0.5;
      return [(t & 1) * r * 255, (t >> 1 & 1) * r * 255, (t >> 2 & 1) * r * 255];
    };
    a.ansi256.rgb = function (e) {
      if (e >= 232) {
        const t = (e - 232) * 10 + 8;
        return [t, t, t];
      }
      let t;
      e -= 16;
      return [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255];
    };
    a.rgb.hex = function (e) {
      const t = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
      return "000000".substring(t.length) + t;
    };
    a.hex.rgb = function (e) {
      const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) {
        return [0, 0, 0];
      }
      let r = t[0];
      if (t[0].length === 3) {
        r = r.split("").map(e => e + e).join("");
      }
      const n = parseInt(r, 16);
      return [n >> 16 & 255, n >> 8 & 255, n & 255];
    };
    a.rgb.hcg = function (e) {
      const t = e[0] / 255;
      const r = e[1] / 255;
      const n = e[2] / 255;
      const o = Math.max(Math.max(t, r), n);
      const a = Math.min(Math.min(t, r), n);
      const i = o - a;
      let c;
      let s;
      c = i < 1 ? a / (1 - i) : 0;
      s = i <= 0 ? 0 : o === t ? (r - n) / i % 6 : o === r ? 2 + (n - t) / i : 4 + (t - r) / i;
      s /= 6;
      s %= 1;
      return [s * 360, i * 100, c * 100];
    };
    a.hsl.hcg = function (e) {
      const t = e[1] / 100;
      const r = e[2] / 100;
      const n = r < 0.5 ? t * 2 * r : t * 2 * (1 - r);
      let o = 0;
      if (n < 1) {
        o = (r - n * 0.5) / (1 - n);
      }
      return [e[0], n * 100, o * 100];
    };
    a.hsv.hcg = function (e) {
      const t = e[1] / 100;
      const r = e[2] / 100;
      const n = t * r;
      let o = 0;
      if (n < 1) {
        o = (r - n) / (1 - n);
      }
      return [e[0], n * 100, o * 100];
    };
    a.hcg.rgb = function (e) {
      const t = e[0] / 360;
      const r = e[1] / 100;
      const n = e[2] / 100;
      if (r === 0) {
        return [n * 255, n * 255, n * 255];
      }
      const o = [0, 0, 0];
      const a = t % 1 * 6;
      const i = a % 1;
      const c = 1 - i;
      let s = 0;
      switch (Math.floor(a)) {
        case 0:
          o[0] = 1;
          o[1] = i;
          o[2] = 0;
          break;
        case 1:
          o[0] = c;
          o[1] = 1;
          o[2] = 0;
          break;
        case 2:
          o[0] = 0;
          o[1] = 1;
          o[2] = i;
          break;
        case 3:
          o[0] = 0;
          o[1] = c;
          o[2] = 1;
          break;
        case 4:
          o[0] = i;
          o[1] = 0;
          o[2] = 1;
          break;
        default:
          o[0] = 1;
          o[1] = 0;
          o[2] = c;
      }
      s = (1 - r) * n;
      return [(r * o[0] + s) * 255, (r * o[1] + s) * 255, (r * o[2] + s) * 255];
    };
    a.hcg.hsv = function (e) {
      const t = e[1] / 100;
      const r = t + e[2] / 100 * (1 - t);
      let n = 0;
      if (r > 0) {
        n = t / r;
      }
      return [e[0], n * 100, r * 100];
    };
    a.hcg.hsl = function (e) {
      const t = e[1] / 100;
      const r = e[2] / 100 * (1 - t) + t * 0.5;
      let n = 0;
      if (r > 0 && r < 0.5) {
        n = t / (r * 2);
      } else if (r >= 0.5 && r < 1) {
        n = t / ((1 - r) * 2);
      }
      return [e[0], n * 100, r * 100];
    };
    a.hcg.hwb = function (e) {
      const t = e[1] / 100;
      const r = t + e[2] / 100 * (1 - t);
      return [e[0], (r - t) * 100, (1 - r) * 100];
    };
    a.hwb.hcg = function (e) {
      const t = e[1] / 100;
      const r = 1 - e[2] / 100;
      const n = r - t;
      let o = 0;
      if (n < 1) {
        o = (r - n) / (1 - n);
      }
      return [e[0], n * 100, o * 100];
    };
    a.apple.rgb = function (e) {
      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
    };
    a.rgb.apple = function (e) {
      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
    };
    a.gray.rgb = function (e) {
      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
    };
    a.gray.hsl = function (e) {
      return [0, 0, e[0]];
    };
    a.gray.hsv = a.gray.hsl;
    a.gray.hwb = function (e) {
      return [0, 100, e[0]];
    };
    a.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    };
    a.gray.lab = function (e) {
      return [e[0], 0, 0];
    };
    a.gray.hex = function (e) {
      const t = Math.round(e[0] / 100 * 255) & 255;
      const r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(r.length) + r;
    };
    a.rgb.gray = function (e) {
      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
    };
  },
  1274: (e, t, r) => {
    const n = r(3779);
    const o = r(5090);
    const a = {};
    Object.keys(n).forEach(e => {
      a[e] = {};
      Object.defineProperty(a[e], "channels", {
        value: n[e].channels
      });
      Object.defineProperty(a[e], "labels", {
        value: n[e].labels
      });
      const t = o(e);
      Object.keys(t).forEach(r => {
        const n = t[r];
        a[e][r] = function (e) {
          const t = function (...t) {
            const r = t[0];
            if (r == null) {
              return r;
            }
            if (r.length > 1) {
              t = r;
            }
            const n = e(t);
            if (typeof n == "object") {
              for (let e = n.length, t = 0; t < e; t++) {
                n[t] = Math.round(n[t]);
              }
            }
            return n;
          };
          if ("conversion" in e) {
            t.conversion = e.conversion;
          }
          return t;
        }(n);
        a[e][r].raw = function (e) {
          const t = function (...t) {
            const r = t[0];
            if (r == null) {
              return r;
            } else {
              if (r.length > 1) {
                t = r;
              }
              return e(t);
            }
          };
          if ("conversion" in e) {
            t.conversion = e.conversion;
          }
          return t;
        }(n);
      });
    });
    e.exports = a;
  },
  5090: (e, t, r) => {
    const n = r(3779);
    function o(e) {
      const t = function () {
        const e = {};
        const t = Object.keys(n);
        for (let r = t.length, n = 0; n < r; n++) {
          e[t[n]] = {
            distance: -1,
            parent: null
          };
        }
        return e;
      }();
      const r = [e];
      for (t[e].distance = 0; r.length;) {
        const e = r.pop();
        const o = Object.keys(n[e]);
        for (let n = o.length, a = 0; a < n; a++) {
          const n = o[a];
          const i = t[n];
          if (i.distance === -1) {
            i.distance = t[e].distance + 1;
            i.parent = e;
            r.unshift(n);
          }
        }
      }
      return t;
    }
    function a(e, t) {
      return function (r) {
        return t(e(r));
      };
    }
    function i(e, t) {
      const r = [t[e].parent, e];
      let o = n[t[e].parent][e];
      let i = t[e].parent;
      while (t[i].parent) {
        r.unshift(t[i].parent);
        o = a(n[t[i].parent][i], o);
        i = t[i].parent;
      }
      o.conversion = r;
      return o;
    }
    e.exports = function (e) {
      const t = o(e);
      const r = {};
      const n = Object.keys(t);
      for (let e = n.length, o = 0; o < e; o++) {
        const e = n[o];
        if (t[e].parent !== null) {
          r[e] = i(e, t);
        }
      }
      return r;
    };
  },
  1510: e => {
    "use strict";

    e.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };
  },
  6725: (e, t, r) => {
    var n = r(1510);
    var o = r(931);
    var a = Object.hasOwnProperty;
    var i = {};
    for (var c in n) {
      if (a.call(n, c)) {
        i[n[c]] = c;
      }
    }
    var s = e.exports = {
      to: {},
      get: {}
    };
    function l(e, t, r) {
      return Math.min(Math.max(t, e), r);
    }
    function u(e) {
      var t = Math.round(e).toString(16).toUpperCase();
      if (t.length < 2) {
        return "0" + t;
      } else {
        return t;
      }
    }
    s.get = function (e) {
      var t;
      var r;
      switch (e.substring(0, 3).toLowerCase()) {
        case "hsl":
          t = s.get.hsl(e);
          r = "hsl";
          break;
        case "hwb":
          t = s.get.hwb(e);
          r = "hwb";
          break;
        default:
          t = s.get.rgb(e);
          r = "rgb";
      }
      if (t) {
        return {
          model: r,
          value: t
        };
      } else {
        return null;
      }
    };
    s.get.rgb = function (e) {
      if (!e) {
        return null;
      }
      var t;
      var r;
      var o;
      var i = [0, 0, 0, 1];
      if (t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
        o = t[2];
        t = t[1];
        r = 0;
        for (; r < 3; r++) {
          var c = r * 2;
          i[r] = parseInt(t.slice(c, c + 2), 16);
        }
        if (o) {
          i[3] = parseInt(o, 16) / 255;
        }
      } else if (t = e.match(/^#([a-f0-9]{3,4})$/i)) {
        o = (t = t[1])[3];
        r = 0;
        for (; r < 3; r++) {
          i[r] = parseInt(t[r] + t[r], 16);
        }
        if (o) {
          i[3] = parseInt(o + o, 16) / 255;
        }
      } else if (t = e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
        for (r = 0; r < 3; r++) {
          i[r] = parseInt(t[r + 1], 0);
        }
        if (t[4]) {
          if (t[5]) {
            i[3] = parseFloat(t[4]) * 0.01;
          } else {
            i[3] = parseFloat(t[4]);
          }
        }
      } else {
        if (!(t = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) {
          if (t = e.match(/^(\w+)$/)) {
            if (t[1] === "transparent") {
              return [0, 0, 0, 0];
            } else if (a.call(n, t[1])) {
              (i = n[t[1]])[3] = 1;
              return i;
            } else {
              return null;
            }
          } else {
            return null;
          }
        }
        for (r = 0; r < 3; r++) {
          i[r] = Math.round(parseFloat(t[r + 1]) * 2.55);
        }
        if (t[4]) {
          if (t[5]) {
            i[3] = parseFloat(t[4]) * 0.01;
          } else {
            i[3] = parseFloat(t[4]);
          }
        }
      }
      for (r = 0; r < 3; r++) {
        i[r] = l(i[r], 0, 255);
      }
      i[3] = l(i[3], 0, 1);
      return i;
    };
    s.get.hsl = function (e) {
      if (!e) {
        return null;
      }
      var t = e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
      if (t) {
        var r = parseFloat(t[4]);
        return [(parseFloat(t[1]) % 360 + 360) % 360, l(parseFloat(t[2]), 0, 100), l(parseFloat(t[3]), 0, 100), l(isNaN(r) ? 1 : r, 0, 1)];
      }
      return null;
    };
    s.get.hwb = function (e) {
      if (!e) {
        return null;
      }
      var t = e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
      if (t) {
        var r = parseFloat(t[4]);
        return [(parseFloat(t[1]) % 360 + 360) % 360, l(parseFloat(t[2]), 0, 100), l(parseFloat(t[3]), 0, 100), l(isNaN(r) ? 1 : r, 0, 1)];
      }
      return null;
    };
    s.to.hex = function () {
      var e = o(arguments);
      return "#" + u(e[0]) + u(e[1]) + u(e[2]) + (e[3] < 1 ? u(Math.round(e[3] * 255)) : "");
    };
    s.to.rgb = function () {
      var e = o(arguments);
      if (e.length < 4 || e[3] === 1) {
        return "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")";
      } else {
        return "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")";
      }
    };
    s.to.rgb.percent = function () {
      var e = o(arguments);
      var t = Math.round(e[0] / 255 * 100);
      var r = Math.round(e[1] / 255 * 100);
      var n = Math.round(e[2] / 255 * 100);
      if (e.length < 4 || e[3] === 1) {
        return "rgb(" + t + "%, " + r + "%, " + n + "%)";
      } else {
        return "rgba(" + t + "%, " + r + "%, " + n + "%, " + e[3] + ")";
      }
    };
    s.to.hsl = function () {
      var e = o(arguments);
      if (e.length < 4 || e[3] === 1) {
        return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
      } else {
        return "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
      }
    };
    s.to.hwb = function () {
      var e = o(arguments);
      var t = "";
      if (e.length >= 4 && e[3] !== 1) {
        t = ", " + e[3];
      }
      return "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")";
    };
    s.to.keyword = function (e) {
      return i[e.slice(0, 3)];
    };
  },
  8509: (e, t, r) => {
    const n = r(6725);
    const o = r(1274);
    const a = ["keyword", "gray", "hex"];
    const i = {};
    for (const e of Object.keys(o)) {
      i[[...o[e].labels].sort().join("")] = e;
    }
    const c = {};
    function s(e, t) {
      if (!(this instanceof s)) {
        return new s(e, t);
      }
      if (t && t in a) {
        t = null;
      }
      if (t && !(t in o)) {
        throw new Error("Unknown model: " + t);
      }
      let r;
      let l;
      if (e == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (e instanceof s) {
        this.model = e.model;
        this.color = [...e.color];
        this.valpha = e.valpha;
      } else if (typeof e == "string") {
        const t = n.get(e);
        if (t === null) {
          throw new Error("Unable to parse color from string: " + e);
        }
        this.model = t.model;
        l = o[this.model].channels;
        this.color = t.value.slice(0, l);
        this.valpha = typeof t.value[l] == "number" ? t.value[l] : 1;
      } else if (e.length > 0) {
        this.model = t || "rgb";
        l = o[this.model].channels;
        const r = Array.prototype.slice.call(e, 0, l);
        this.color = d(r, l);
        this.valpha = typeof e[l] == "number" ? e[l] : 1;
      } else if (typeof e == "number") {
        this.model = "rgb";
        this.color = [e >> 16 & 255, e >> 8 & 255, e & 255];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const t = Object.keys(e);
        if ("alpha" in e) {
          t.splice(t.indexOf("alpha"), 1);
          this.valpha = typeof e.alpha == "number" ? e.alpha : 0;
        }
        const n = t.sort().join("");
        if (!(n in i)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(e));
        }
        this.model = i[n];
        const {
          labels: a
        } = o[this.model];
        const c = [];
        for (r = 0; r < a.length; r++) {
          c.push(e[a[r]]);
        }
        this.color = d(c);
      }
      if (c[this.model]) {
        l = o[this.model].channels;
        r = 0;
        for (; r < l; r++) {
          const e = c[this.model][r];
          if (e) {
            this.color[r] = e(this.color[r]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    s.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(e) {
        let t = this.model in n.to ? this : this.rgb();
        t = t.round(typeof e == "number" ? e : 1);
        const r = t.valpha === 1 ? t.color : [...t.color, this.valpha];
        return n.to[t.model](r);
      },
      percentString(e) {
        const t = this.rgb().round(typeof e == "number" ? e : 1);
        const r = t.valpha === 1 ? t.color : [...t.color, this.valpha];
        return n.to.rgb.percent(r);
      },
      array() {
        if (this.valpha === 1) {
          return [...this.color];
        } else {
          return [...this.color, this.valpha];
        }
      },
      object() {
        const e = {};
        const {
          channels: t
        } = o[this.model];
        const {
          labels: r
        } = o[this.model];
        for (let n = 0; n < t; n++) {
          e[r[n]] = this.color[n];
        }
        if (this.valpha !== 1) {
          e.alpha = this.valpha;
        }
        return e;
      },
      unitArray() {
        const e = this.rgb().color;
        e[0] /= 255;
        e[1] /= 255;
        e[2] /= 255;
        if (this.valpha !== 1) {
          e.push(this.valpha);
        }
        return e;
      },
      unitObject() {
        const e = this.rgb().object();
        e.r /= 255;
        e.g /= 255;
        e.b /= 255;
        if (this.valpha !== 1) {
          e.alpha = this.valpha;
        }
        return e;
      },
      round(e) {
        e = Math.max(e || 0, 0);
        return new s([...this.color.map(l(e)), this.valpha], this.model);
      },
      alpha(e) {
        if (e !== undefined) {
          return new s([...this.color, Math.max(0, Math.min(1, e))], this.model);
        } else {
          return this.valpha;
        }
      },
      red: u("rgb", 0, f(255)),
      green: u("rgb", 1, f(255)),
      blue: u("rgb", 2, f(255)),
      hue: u(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, e => (e % 360 + 360) % 360),
      saturationl: u("hsl", 1, f(100)),
      lightness: u("hsl", 2, f(100)),
      saturationv: u("hsv", 1, f(100)),
      value: u("hsv", 2, f(100)),
      chroma: u("hcg", 1, f(100)),
      gray: u("hcg", 2, f(100)),
      white: u("hwb", 1, f(100)),
      wblack: u("hwb", 2, f(100)),
      cyan: u("cmyk", 0, f(100)),
      magenta: u("cmyk", 1, f(100)),
      yellow: u("cmyk", 2, f(100)),
      black: u("cmyk", 3, f(100)),
      x: u("xyz", 0, f(95.047)),
      y: u("xyz", 1, f(100)),
      z: u("xyz", 2, f(108.833)),
      l: u("lab", 0, f(100)),
      a: u("lab", 1),
      b: u("lab", 2),
      keyword(e) {
        if (e !== undefined) {
          return new s(e);
        } else {
          return o[this.model].keyword(this.color);
        }
      },
      hex(e) {
        if (e !== undefined) {
          return new s(e);
        } else {
          return n.to.hex(this.rgb().round().color);
        }
      },
      hexa(e) {
        if (e !== undefined) {
          return new s(e);
        }
        const t = this.rgb().round().color;
        let r = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (r.length === 1) {
          r = "0" + r;
        }
        return n.to.hex(t) + r;
      },
      rgbNumber() {
        const e = this.rgb().color;
        return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
      },
      luminosity() {
        const e = this.rgb().color;
        const t = [];
        for (const [r, n] of e.entries()) {
          const e = n / 255;
          t[r] = e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
        }
        return t[0] * 0.2126 + t[1] * 0.7152 + t[2] * 0.0722;
      },
      contrast(e) {
        const t = this.luminosity();
        const r = e.luminosity();
        if (t > r) {
          return (t + 0.05) / (r + 0.05);
        } else {
          return (r + 0.05) / (t + 0.05);
        }
      },
      level(e) {
        const t = this.contrast(e);
        if (t >= 7) {
          return "AAA";
        } else if (t >= 4.5) {
          return "AA";
        } else {
          return "";
        }
      },
      isDark() {
        const e = this.rgb().color;
        return (e[0] * 2126 + e[1] * 7152 + e[2] * 722) / 10000 < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const e = this.rgb();
        for (let t = 0; t < 3; t++) {
          e.color[t] = 255 - e.color[t];
        }
        return e;
      },
      lighten(e) {
        const t = this.hsl();
        t.color[2] += t.color[2] * e;
        return t;
      },
      darken(e) {
        const t = this.hsl();
        t.color[2] -= t.color[2] * e;
        return t;
      },
      saturate(e) {
        const t = this.hsl();
        t.color[1] += t.color[1] * e;
        return t;
      },
      desaturate(e) {
        const t = this.hsl();
        t.color[1] -= t.color[1] * e;
        return t;
      },
      whiten(e) {
        const t = this.hwb();
        t.color[1] += t.color[1] * e;
        return t;
      },
      blacken(e) {
        const t = this.hwb();
        t.color[2] += t.color[2] * e;
        return t;
      },
      grayscale() {
        const e = this.rgb().color;
        const t = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
        return s.rgb(t, t, t);
      },
      fade(e) {
        return this.alpha(this.valpha - this.valpha * e);
      },
      opaquer(e) {
        return this.alpha(this.valpha + this.valpha * e);
      },
      rotate(e) {
        const t = this.hsl();
        let r = t.color[0];
        r = (r + e) % 360;
        r = r < 0 ? 360 + r : r;
        t.color[0] = r;
        return t;
      },
      mix(e, t) {
        if (!e || !e.rgb) {
          throw new Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof e);
        }
        const r = e.rgb();
        const n = this.rgb();
        const o = t === undefined ? 0.5 : t;
        const a = o * 2 - 1;
        const i = r.alpha() - n.alpha();
        const c = ((a * i == -1 ? a : (a + i) / (1 + a * i)) + 1) / 2;
        const l = 1 - c;
        return s.rgb(c * r.red() + l * n.red(), c * r.green() + l * n.green(), c * r.blue() + l * n.blue(), r.alpha() * o + n.alpha() * (1 - o));
      }
    };
    for (const e of Object.keys(o)) {
      if (a.includes(e)) {
        continue;
      }
      const {
        channels: t
      } = o[e];
      s.prototype[e] = function (...t) {
        if (this.model === e) {
          return new s(this);
        } else if (t.length > 0) {
          return new s(t, e);
        } else {
          return new s([...(r = o[this.model][e].raw(this.color), Array.isArray(r) ? r : [r]), this.valpha], e);
        }
        var r;
      };
      s[e] = function (...r) {
        let n = r[0];
        if (typeof n == "number") {
          n = d(r, t);
        }
        return new s(n, e);
      };
    }
    function l(e) {
      return function (t) {
        return function (e, t) {
          return Number(e.toFixed(t));
        }(t, e);
      };
    }
    function u(e, t, r) {
      e = Array.isArray(e) ? e : [e];
      for (const n of e) {
        (c[n] ||= [])[t] = r;
      }
      e = e[0];
      return function (n) {
        let o;
        if (n !== undefined) {
          if (r) {
            n = r(n);
          }
          o = this[e]();
          o.color[t] = n;
          return o;
        } else {
          o = this[e]().color[t];
          if (r) {
            o = r(o);
          }
          return o;
        }
      };
    }
    function f(e) {
      return function (t) {
        return Math.max(0, Math.min(e, t));
      };
    }
    function d(e, t) {
      for (let r = 0; r < t; r++) {
        if (typeof e[r] != "number") {
          e[r] = 0;
        }
      }
      return e;
    }
    e.exports = s;
  },
  4038: function (e, t, r) {
    e.exports = function (e) {
      "use strict";

      function t(e) {
        if (e && typeof e == "object" && "default" in e) {
          return e;
        } else {
          return {
            default: e
          };
        }
      }
      var r = t(e);
      var n = {
        name: "zh-cn",
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        ordinal: function (e, t) {
          if (t === "W") {
            return e + "周";
          } else {
            return e + "日";
          }
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年"
        },
        meridiem: function (e, t) {
          var r = e * 100 + t;
          if (r < 600) {
            return "凌晨";
          } else if (r < 900) {
            return "早上";
          } else if (r < 1100) {
            return "上午";
          } else if (r < 1300) {
            return "中午";
          } else if (r < 1800) {
            return "下午";
          } else {
            return "晚上";
          }
        }
      };
      r.default.locale(n, null, true);
      return n;
    }(r(661));
  },
  1363: function (e) {
    e.exports = function () {
      "use strict";

      return function (e, t) {
        t.prototype.isLeapYear = function () {
          return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
        };
      };
    }();
  },
  2607: function (e) {
    e.exports = function () {
      "use strict";

      return function (e, t, r) {
        e = e || {};
        var n = t.prototype;
        var o = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function a(e, t, r, o) {
          return n.fromToBase(e, t, r, o);
        }
        r.en.relativeTime = o;
        n.fromToBase = function (t, n, a, i, c) {
          var s;
          var l;
          var u;
          var f = a.$locale().relativeTime || o;
          var d = e.thresholds || [{
            l: "s",
            r: 44,
            d: "second"
          }, {
            l: "m",
            r: 89
          }, {
            l: "mm",
            r: 44,
            d: "minute"
          }, {
            l: "h",
            r: 89
          }, {
            l: "hh",
            r: 21,
            d: "hour"
          }, {
            l: "d",
            r: 35
          }, {
            l: "dd",
            r: 25,
            d: "day"
          }, {
            l: "M",
            r: 45
          }, {
            l: "MM",
            r: 10,
            d: "month"
          }, {
            l: "y",
            r: 17
          }, {
            l: "yy",
            d: "year"
          }];
          for (var h = d.length, p = 0; p < h; p += 1) {
            var g = d[p];
            if (g.d) {
              s = i ? r(t).diff(a, g.d, true) : a.diff(t, g.d, true);
            }
            var y = (e.rounding || Math.round)(Math.abs(s));
            u = s > 0;
            if (y <= g.r || !g.r) {
              if (y <= 1 && p > 0) {
                g = d[p - 1];
              }
              var v = f[g.l];
              if (c) {
                y = c("" + y);
              }
              l = typeof v == "string" ? v.replace("%d", y) : v(y, n, g.l, u);
              break;
            }
          }
          if (n) {
            return l;
          }
          var b = u ? f.future : f.past;
          if (typeof b == "function") {
            return b(l);
          } else {
            return b.replace("%s", l);
          }
        };
        n.to = function (e, t) {
          return a(e, t, this, true);
        };
        n.from = function (e, t) {
          return a(e, t, this);
        };
        function i(e) {
          if (e.$u) {
            return r.utc();
          } else {
            return r();
          }
        }
        n.toNow = function (e) {
          return this.to(i(this), e);
        };
        n.fromNow = function (e) {
          return this.from(i(this), e);
        };
      };
    }();
  },
  4099: e => {
    e.exports = false;
  },
  3287: (e, t, r) => {
    e.exports = function (e) {
      var t = {};
      function r(n) {
        if (t[n]) {
          return t[n].exports;
        }
        var o = t[n] = {
          exports: {},
          id: n,
          loaded: false
        };
        e[n].call(o.exports, o, o.exports, r);
        o.loaded = true;
        return o.exports;
      }
      r.m = e;
      r.c = t;
      r.p = "";
      return r(0);
    }([function (e, t, r) {
      "use strict";

      var n = r(1);
      var o = typeof importScripts == "function";
      e.exports = n(o ? self : window);
    }, function (e, t, r) {
      "use strict";

      function n(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }
          return r;
        }
        return Array.from(e);
      }
      var o = [];
      function a(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
          r[a - 1] = arguments[a];
        }
        var i = o.reduce(function (e, t) {
          return [t].concat(e);
        }, []);
        var c = Promise.resolve(r);
        i.forEach(function (e) {
          var t = e.request;
          var r = e.requestError;
          if (t || r) {
            c = c.then(function (e) {
              return t.apply(undefined, n(e));
            }, r);
          }
        });
        c = c.then(function (t) {
          var r = new (Function.prototype.bind.apply(Request, [null].concat(n(t))))();
          return e(r).then(function (e) {
            e.request = r;
            return e;
          }).catch(function (e) {
            e.request = r;
            return Promise.reject(e);
          });
        });
        i.forEach(function (e) {
          var t = e.response;
          var r = e.responseError;
          if (t || r) {
            c = c.then(t, r);
          }
        });
        return c;
      }
      e.exports = function (e) {
        if (!e.fetch) {
          try {
            r(2);
          } catch (e) {
            throw Error("No fetch available. Unable to register fetch-intercept");
          }
        }
        e.fetch = function (e) {
          return function () {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
              r[n] = arguments[n];
            }
            return a.apply(undefined, [e].concat(r));
          };
        }(e.fetch);
        return {
          register: function (e) {
            o.push(e);
            return function () {
              var t = o.indexOf(e);
              if (t >= 0) {
                o.splice(t, 1);
              }
            };
          },
          clear: function () {
            o = [];
          }
        };
      };
    }, function (e, t) {
      e.exports = r(7469);
    }]);
  },
  1697: function (e, t) {
    var r;
    var n;
    var o;
    n = [t, e];
    r = function (e, t) {
      "use strict";

      var r = {
        timeout: 5000,
        jsonpCallback: "callback",
        jsonpCallbackFunction: null
      };
      function n() {
        return "jsonp_" + Date.now() + "_" + Math.ceil(Math.random() * 100000);
      }
      function o(e) {
        try {
          delete window[e];
        } catch (t) {
          window[e] = undefined;
        }
      }
      function a(e) {
        var t = document.getElementById(e);
        if (t) {
          document.getElementsByTagName("head")[0].removeChild(t);
        }
      }
      function i(e) {
        var t = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var i = e;
        var c = t.timeout || r.timeout;
        var s = t.jsonpCallback || r.jsonpCallback;
        var l = undefined;
        return new Promise(function (r, u) {
          var f = t.jsonpCallbackFunction || n();
          var d = s + "_" + f;
          window[f] = function (e) {
            r({
              ok: true,
              json: function () {
                return Promise.resolve(e);
              }
            });
            if (l) {
              clearTimeout(l);
            }
            a(d);
            o(f);
          };
          i += i.indexOf("?") === -1 ? "?" : "&";
          var h = document.createElement("script");
          h.setAttribute("src", "" + i + s + "=" + f);
          if (t.charset) {
            h.setAttribute("charset", t.charset);
          }
          if (t.nonce) {
            h.setAttribute("nonce", t.nonce);
          }
          if (t.referrerPolicy) {
            h.setAttribute("referrerPolicy", t.referrerPolicy);
          }
          h.id = d;
          document.getElementsByTagName("head")[0].appendChild(h);
          l = setTimeout(function () {
            u(new Error("JSONP request to " + e + " timed out"));
            o(f);
            a(d);
            window[f] = function () {
              o(f);
            };
          }, c);
          h.onerror = function () {
            u(new Error("JSONP request to " + e + " failed"));
            o(f);
            a(d);
            if (l) {
              clearTimeout(l);
            }
          };
        });
      }
      t.exports = i;
    };
    if ((o = typeof r == "function" ? r.apply(t, n) : r) !== undefined) {
      e.exports = o;
    }
  },
  1584: e => {
    e.exports = function (e) {
      return !!e && typeof e != "string" && (e instanceof Array || Array.isArray(e) || e.length >= 0 && (e.splice instanceof Function || Object.getOwnPropertyDescriptor(e, e.length - 1) && e.constructor.name !== "String"));
    };
  },
  344: function (e, t, r) {
    var n;
    e = r.nmd(e);
    (function () {
      var o;
      var a = "Expected a function";
      var i = "__lodash_hash_undefined__";
      var c = "__lodash_placeholder__";
      var s = 16;
      var l = 32;
      var u = 64;
      var f = 128;
      var d = 256;
      var h = Infinity;
      var p = 9007199254740991;
      var g = NaN;
      var y = 4294967295;
      var v = [["ary", f], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", s], ["flip", 512], ["partial", l], ["partialRight", u], ["rearg", d]];
      var b = "[object Arguments]";
      var m = "[object Array]";
      var w = "[object Boolean]";
      var _ = "[object Date]";
      var k = "[object Error]";
      var A = "[object Function]";
      var E = "[object GeneratorFunction]";
      var C = "[object Map]";
      var x = "[object Number]";
      var S = "[object Object]";
      var O = "[object Promise]";
      var B = "[object RegExp]";
      var j = "[object Set]";
      var D = "[object String]";
      var F = "[object Symbol]";
      var P = "[object WeakMap]";
      var M = "[object ArrayBuffer]";
      var T = "[object DataView]";
      var I = "[object Float32Array]";
      var L = "[object Float64Array]";
      var Z = "[object Int8Array]";
      var U = "[object Int16Array]";
      var R = "[object Int32Array]";
      var z = "[object Uint8Array]";
      var H = "[object Uint8ClampedArray]";
      var N = "[object Uint16Array]";
      var W = "[object Uint32Array]";
      var $ = /\b__p \+= '';/g;
      var q = /\b(__p \+=) '' \+/g;
      var Y = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var Q = /&(?:amp|lt|gt|quot|#39);/g;
      var V = /[&<>"']/g;
      var G = RegExp(Q.source);
      var K = RegExp(V.source);
      var J = /<%-([\s\S]+?)%>/g;
      var X = /<%([\s\S]+?)%>/g;
      var ee = /<%=([\s\S]+?)%>/g;
      var te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var re = /^\w*$/;
      var ne = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var oe = /[\\^$.*+?()[\]{}|]/g;
      var ae = RegExp(oe.source);
      var ie = /^\s+/;
      var ce = /\s/;
      var se = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
      var le = /\{\n\/\* \[wrapped with (.+)\] \*/;
      var ue = /,? & /;
      var fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var de = /[()=,{}\[\]\/\s]/;
      var he = /\\(\\)?/g;
      var pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var ge = /\w*$/;
      var ye = /^[-+]0x[0-9a-f]+$/i;
      var ve = /^0b[01]+$/i;
      var be = /^\[object .+?Constructor\]$/;
      var me = /^0o[0-7]+$/i;
      var we = /^(?:0|[1-9]\d*)$/;
      var _e = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var ke = /($^)/;
      var Ae = /['\n\r\u2028\u2029\\]/g;
      var Ee = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff";
      var Ce = "\\u2700-\\u27bf";
      var xe = "a-z\\xdf-\\xf6\\xf8-\\xff";
      var Se = "A-Z\\xc0-\\xd6\\xd8-\\xde";
      var Oe = "\\ufe0e\\ufe0f";
      var Be = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
      var je = "['’]";
      var De = "[\\ud800-\\udfff]";
      var Fe = "[" + Be + "]";
      var Pe = "[" + Ee + "]";
      var Me = "\\d+";
      var Te = "[\\u2700-\\u27bf]";
      var Ie = "[" + xe + "]";
      var Le = "[^\\ud800-\\udfff" + Be + Me + Ce + xe + Se + "]";
      var Ze = "\\ud83c[\\udffb-\\udfff]";
      var Ue = "[^\\ud800-\\udfff]";
      var Re = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var ze = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var He = "[" + Se + "]";
      var Ne = "(?:" + Ie + "|" + Le + ")";
      var We = "(?:" + He + "|" + Le + ")";
      var $e = "(?:['’](?:d|ll|m|re|s|t|ve))?";
      var qe = "(?:['’](?:D|LL|M|RE|S|T|VE))?";
      var Ye = "(?:" + Pe + "|" + Ze + ")?";
      var Qe = "[\\ufe0e\\ufe0f]?";
      var Ve = Qe + Ye + ("(?:\\u200d(?:" + [Ue, Re, ze].join("|") + ")" + Qe + Ye + ")*");
      var Ge = "(?:" + [Te, Re, ze].join("|") + ")" + Ve;
      var Ke = "(?:" + [Ue + Pe + "?", Pe, Re, ze, De].join("|") + ")";
      var Je = RegExp(je, "g");
      var Xe = RegExp(Pe, "g");
      var et = RegExp(Ze + "(?=" + Ze + ")|" + Ke + Ve, "g");
      var tt = RegExp([He + "?" + Ie + "+" + $e + "(?=" + [Fe, He, "$"].join("|") + ")", We + "+" + qe + "(?=" + [Fe, He + Ne, "$"].join("|") + ")", He + "?" + Ne + "+" + $e, He + "+" + qe, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Me, Ge].join("|"), "g");
      var rt = RegExp("[\\u200d\\ud800-\\udfff" + Ee + Oe + "]");
      var nt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var ot = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"];
      var at = -1;
      var it = {};
      it[I] = it[L] = it[Z] = it[U] = it[R] = it[z] = it[H] = it[N] = it[W] = true;
      it[b] = it[m] = it[M] = it[w] = it[T] = it[_] = it[k] = it[A] = it[C] = it[x] = it[S] = it[B] = it[j] = it[D] = it[P] = false;
      var ct = {};
      ct[b] = ct[m] = ct[M] = ct[T] = ct[w] = ct[_] = ct[I] = ct[L] = ct[Z] = ct[U] = ct[R] = ct[C] = ct[x] = ct[S] = ct[B] = ct[j] = ct[D] = ct[F] = ct[z] = ct[H] = ct[N] = ct[W] = true;
      ct[k] = ct[A] = ct[P] = false;
      var st = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var lt = parseFloat;
      var ut = parseInt;
      var ft = typeof r.g == "object" && r.g && r.g.Object === Object && r.g;
      var dt = typeof self == "object" && self && self.Object === Object && self;
      var ht = ft || dt || Function("return this")();
      var pt = t && !t.nodeType && t;
      var gt = pt && e && !e.nodeType && e;
      var yt = gt && gt.exports === pt;
      var vt = yt && ft.process;
      var bt = function () {
        try {
          var e = gt && gt.require && gt.require("util").types;
          return e || vt && vt.binding && vt.binding("util");
        } catch (e) {}
      }();
      var mt = bt && bt.isArrayBuffer;
      var wt = bt && bt.isDate;
      var _t = bt && bt.isMap;
      var kt = bt && bt.isRegExp;
      var At = bt && bt.isSet;
      var Et = bt && bt.isTypedArray;
      function Ct(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      }
      function xt(e, t, r, n) {
        for (var o = -1, a = e == null ? 0 : e.length; ++o < a;) {
          var i = e[o];
          t(n, i, r(i), e);
        }
        return n;
      }
      function St(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false;);
        return e;
      }
      function Ot(e, t) {
        for (var r = e == null ? 0 : e.length; r-- && t(e[r], r, e) !== false;);
        return e;
      }
      function Bt(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n;) {
          if (!t(e[r], r, e)) {
            return false;
          }
        }
        return true;
      }
      function jt(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n;) {
          var i = e[r];
          if (t(i, r, e)) {
            a[o++] = i;
          }
        }
        return a;
      }
      function Dt(e, t) {
        return !!(e == null ? 0 : e.length) && zt(e, t, 0) > -1;
      }
      function Ft(e, t, r) {
        for (var n = -1, o = e == null ? 0 : e.length; ++n < o;) {
          if (r(t, e[n])) {
            return true;
          }
        }
        return false;
      }
      function Pt(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n;) {
          o[r] = t(e[r], r, e);
        }
        return o;
      }
      function Mt(e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n;) {
          e[o + r] = t[r];
        }
        return e;
      }
      function Tt(e, t, r, n) {
        var o = -1;
        var a = e == null ? 0 : e.length;
        for (n && a && (r = e[++o]); ++o < a;) {
          r = t(r, e[o], o, e);
        }
        return r;
      }
      function It(e, t, r, n) {
        var o = e == null ? 0 : e.length;
        for (n && o && (r = e[--o]); o--;) {
          r = t(r, e[o], o, e);
        }
        return r;
      }
      function Lt(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n;) {
          if (t(e[r], r, e)) {
            return true;
          }
        }
        return false;
      }
      var Zt = $t("length");
      function Ut(e, t, r) {
        var n;
        r(e, function (e, r, o) {
          if (t(e, r, o)) {
            n = r;
            return false;
          }
        });
        return n;
      }
      function Rt(e, t, r, n) {
        for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o;) {
          if (t(e[a], a, e)) {
            return a;
          }
        }
        return -1;
      }
      function zt(e, t, r) {
        if (t == t) {
          return function (e, t, r) {
            var n = r - 1;
            var o = e.length;
            while (++n < o) {
              if (e[n] === t) {
                return n;
              }
            }
            return -1;
          }(e, t, r);
        } else {
          return Rt(e, Nt, r);
        }
      }
      function Ht(e, t, r, n) {
        for (var o = r - 1, a = e.length; ++o < a;) {
          if (n(e[o], t)) {
            return o;
          }
        }
        return -1;
      }
      function Nt(e) {
        return e != e;
      }
      function Wt(e, t) {
        var r = e == null ? 0 : e.length;
        if (r) {
          return Qt(e, t) / r;
        } else {
          return g;
        }
      }
      function $t(e) {
        return function (t) {
          if (t == null) {
            return o;
          } else {
            return t[e];
          }
        };
      }
      function qt(e) {
        return function (t) {
          if (e == null) {
            return o;
          } else {
            return e[t];
          }
        };
      }
      function Yt(e, t, r, n, o) {
        o(e, function (e, o, a) {
          r = n ? (n = false, e) : t(r, e, o, a);
        });
        return r;
      }
      function Qt(e, t) {
        var r;
        for (var n = -1, a = e.length; ++n < a;) {
          var i = t(e[n]);
          if (i !== o) {
            r = r === o ? i : r + i;
          }
        }
        return r;
      }
      function Vt(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) {
          n[r] = t(r);
        }
        return n;
      }
      function Gt(e) {
        if (e) {
          return e.slice(0, pr(e) + 1).replace(ie, "");
        } else {
          return e;
        }
      }
      function Kt(e) {
        return function (t) {
          return e(t);
        };
      }
      function Jt(e, t) {
        return Pt(t, function (t) {
          return e[t];
        });
      }
      function Xt(e, t) {
        return e.has(t);
      }
      function er(e, t) {
        for (var r = -1, n = e.length; ++r < n && zt(t, e[r], 0) > -1;);
        return r;
      }
      function tr(e, t) {
        for (var r = e.length; r-- && zt(t, e[r], 0) > -1;);
        return r;
      }
      function rr(e, t) {
        for (var r = e.length, n = 0; r--;) {
          if (e[r] === t) {
            ++n;
          }
        }
        return n;
      }
      var nr = qt({
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      });
      var or = qt({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      });
      function ar(e) {
        return "\\" + st[e];
      }
      function ir(e) {
        return rt.test(e);
      }
      function cr(e) {
        var t = -1;
        var r = Array(e.size);
        e.forEach(function (e, n) {
          r[++t] = [n, e];
        });
        return r;
      }
      function sr(e, t) {
        return function (r) {
          return e(t(r));
        };
      }
      function lr(e, t) {
        for (var r = -1, n = e.length, o = 0, a = []; ++r < n;) {
          var i = e[r];
          if (i === t || i === c) {
            e[r] = c;
            a[o++] = r;
          }
        }
        return a;
      }
      function ur(e) {
        var t = -1;
        var r = Array(e.size);
        e.forEach(function (e) {
          r[++t] = e;
        });
        return r;
      }
      function fr(e) {
        var t = -1;
        var r = Array(e.size);
        e.forEach(function (e) {
          r[++t] = [e, e];
        });
        return r;
      }
      function dr(e) {
        if (ir(e)) {
          return function (e) {
            var t = et.lastIndex = 0;
            while (et.test(e)) {
              ++t;
            }
            return t;
          }(e);
        } else {
          return Zt(e);
        }
      }
      function hr(e) {
        if (ir(e)) {
          return function (e) {
            return e.match(et) || [];
          }(e);
        } else {
          return function (e) {
            return e.split("");
          }(e);
        }
      }
      function pr(e) {
        for (var t = e.length; t-- && ce.test(e.charAt(t)););
        return t;
      }
      var gr = qt({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": "\"",
        "&#39;": "'"
      });
      var yr = function e(t) {
        var r;
        var n = (t = t == null ? ht : yr.defaults(ht.Object(), t, yr.pick(ht, ot))).Array;
        var ce = t.Date;
        var Ee = t.Error;
        var Ce = t.Function;
        var xe = t.Math;
        var Se = t.Object;
        var Oe = t.RegExp;
        var Be = t.String;
        var je = t.TypeError;
        var De = n.prototype;
        var Fe = Ce.prototype;
        var Pe = Se.prototype;
        var Me = t["__core-js_shared__"];
        var Te = Fe.toString;
        var Ie = Pe.hasOwnProperty;
        var Le = 0;
        var Ze = (r = /[^.]+$/.exec(Me && Me.keys && Me.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        var Ue = Pe.toString;
        var Re = Te.call(Se);
        var ze = ht._;
        var He = Oe("^" + Te.call(Ie).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Ne = yt ? t.Buffer : o;
        var We = t.Symbol;
        var $e = t.Uint8Array;
        var qe = Ne ? Ne.allocUnsafe : o;
        var Ye = sr(Se.getPrototypeOf, Se);
        var Qe = Se.create;
        var Ve = Pe.propertyIsEnumerable;
        var Ge = De.splice;
        var Ke = We ? We.isConcatSpreadable : o;
        var et = We ? We.iterator : o;
        var rt = We ? We.toStringTag : o;
        var st = function () {
          try {
            var e = pa(Se, "defineProperty");
            e({}, "", {});
            return e;
          } catch (e) {}
        }();
        var ft = t.clearTimeout !== ht.clearTimeout && t.clearTimeout;
        var dt = ce && ce.now !== ht.Date.now && ce.now;
        var pt = t.setTimeout !== ht.setTimeout && t.setTimeout;
        var gt = xe.ceil;
        var vt = xe.floor;
        var bt = Se.getOwnPropertySymbols;
        var Zt = Ne ? Ne.isBuffer : o;
        var qt = t.isFinite;
        var vr = De.join;
        var br = sr(Se.keys, Se);
        var mr = xe.max;
        var wr = xe.min;
        var _r = ce.now;
        var kr = t.parseInt;
        var Ar = xe.random;
        var Er = De.reverse;
        var Cr = pa(t, "DataView");
        var xr = pa(t, "Map");
        var Sr = pa(t, "Promise");
        var Or = pa(t, "Set");
        var Br = pa(t, "WeakMap");
        var jr = pa(Se, "create");
        var Dr = Br && new Br();
        var Fr = {};
        var Pr = za(Cr);
        var Mr = za(xr);
        var Tr = za(Sr);
        var Ir = za(Or);
        var Lr = za(Br);
        var Zr = We ? We.prototype : o;
        var Ur = Zr ? Zr.valueOf : o;
        var Rr = Zr ? Zr.toString : o;
        function zr(e) {
          if (oc(e) && !Yi(e) && !(e instanceof $r)) {
            if (e instanceof Wr) {
              return e;
            }
            if (Ie.call(e, "__wrapped__")) {
              return Ha(e);
            }
          }
          return new Wr(e);
        }
        var Hr = function () {
          function e() {}
          return function (t) {
            if (!nc(t)) {
              return {};
            }
            if (Qe) {
              return Qe(t);
            }
            e.prototype = t;
            var r = new e();
            e.prototype = o;
            return r;
          };
        }();
        function Nr() {}
        function Wr(e, t) {
          this.__wrapped__ = e;
          this.__actions__ = [];
          this.__chain__ = !!t;
          this.__index__ = 0;
          this.__values__ = o;
        }
        function $r(e) {
          this.__wrapped__ = e;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = y;
          this.__views__ = [];
        }
        function qr(e) {
          var t = -1;
          var r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function Yr(e) {
          var t = -1;
          var r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function Qr(e) {
          var t = -1;
          var r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function Vr(e) {
          var t = -1;
          var r = e == null ? 0 : e.length;
          for (this.__data__ = new Qr(); ++t < r;) {
            this.add(e[t]);
          }
        }
        function Gr(e) {
          var t = this.__data__ = new Yr(e);
          this.size = t.size;
        }
        function Kr(e, t) {
          var r = Yi(e);
          var n = !r && qi(e);
          var o = !r && !n && Ki(e);
          var a = !r && !n && !o && dc(e);
          var i = r || n || o || a;
          var c = i ? Vt(e.length, Be) : [];
          var s = c.length;
          for (var l in e) {
            if ((!!t || !!Ie.call(e, l)) && (!i || l != "length" && (!o || l != "offset" && l != "parent") && (!a || l != "buffer" && l != "byteLength" && l != "byteOffset") && !_a(l, s))) {
              c.push(l);
            }
          }
          return c;
        }
        function Jr(e) {
          var t = e.length;
          if (t) {
            return e[Gn(0, t - 1)];
          } else {
            return o;
          }
        }
        function Xr(e, t) {
          return Za(Fo(e), ln(t, 0, e.length));
        }
        function en(e) {
          return Za(Fo(e));
        }
        function tn(e, t, r) {
          if (r !== o && !Ni(e[t], r) || r === o && !(t in e)) {
            cn(e, t, r);
          }
        }
        function rn(e, t, r) {
          var n = e[t];
          if (!Ie.call(e, t) || !Ni(n, r) || r === o && !(t in e)) {
            cn(e, t, r);
          }
        }
        function nn(e, t) {
          for (var r = e.length; r--;) {
            if (Ni(e[r][0], t)) {
              return r;
            }
          }
          return -1;
        }
        function on(e, t, r, n) {
          pn(e, function (e, o, a) {
            t(n, e, r(e), a);
          });
          return n;
        }
        function an(e, t) {
          return e && Po(t, Mc(t), e);
        }
        function cn(e, t, r) {
          if (t == "__proto__" && st) {
            st(e, t, {
              configurable: true,
              enumerable: true,
              value: r,
              writable: true
            });
          } else {
            e[t] = r;
          }
        }
        function sn(e, t) {
          for (var r = -1, a = t.length, i = n(a), c = e == null; ++r < a;) {
            i[r] = c ? o : Bc(e, t[r]);
          }
          return i;
        }
        function ln(e, t, r) {
          if (e == e) {
            if (r !== o) {
              e = e <= r ? e : r;
            }
            if (t !== o) {
              e = e >= t ? e : t;
            }
          }
          return e;
        }
        function un(e, t, r, n, a, i) {
          var c;
          var s = t & 1;
          var l = t & 2;
          var u = t & 4;
          if (r) {
            c = a ? r(e, n, a, i) : r(e);
          }
          if (c !== o) {
            return c;
          }
          if (!nc(e)) {
            return e;
          }
          var f = Yi(e);
          if (f) {
            c = function (e) {
              var t = e.length;
              var r = new e.constructor(t);
              if (t && typeof e[0] == "string" && Ie.call(e, "index")) {
                r.index = e.index;
                r.input = e.input;
              }
              return r;
            }(e);
            if (!s) {
              return Fo(e, c);
            }
          } else {
            var d = va(e);
            var h = d == A || d == E;
            if (Ki(e)) {
              return xo(e, s);
            }
            if (d == S || d == b || h && !a) {
              c = l || h ? {} : ma(e);
              if (!s) {
                if (l) {
                  return function (e, t) {
                    return Po(e, ya(e), t);
                  }(e, function (e, t) {
                    return e && Po(t, Tc(t), e);
                  }(c, e));
                } else {
                  return function (e, t) {
                    return Po(e, ga(e), t);
                  }(e, an(c, e));
                }
              }
            } else {
              if (!ct[d]) {
                if (a) {
                  return e;
                } else {
                  return {};
                }
              }
              c = function (e, t, r) {
                var n = e.constructor;
                switch (t) {
                  case M:
                    return So(e);
                  case w:
                  case _:
                    return new n(+e);
                  case T:
                    return function (e, t) {
                      var r = t ? So(e.buffer) : e.buffer;
                      return new e.constructor(r, e.byteOffset, e.byteLength);
                    }(e, r);
                  case I:
                  case L:
                  case Z:
                  case U:
                  case R:
                  case z:
                  case H:
                  case N:
                  case W:
                    return Oo(e, r);
                  case C:
                    return new n();
                  case x:
                  case D:
                    return new n(e);
                  case B:
                    return function (e) {
                      var t = new e.constructor(e.source, ge.exec(e));
                      t.lastIndex = e.lastIndex;
                      return t;
                    }(e);
                  case j:
                    return new n();
                  case F:
                    o = e;
                    if (Ur) {
                      return Se(Ur.call(o));
                    } else {
                      return {};
                    }
                }
                var o;
              }(e, d, s);
            }
          }
          i ||= new Gr();
          var p = i.get(e);
          if (p) {
            return p;
          }
          i.set(e, c);
          if (lc(e)) {
            e.forEach(function (n) {
              c.add(un(n, t, r, n, e, i));
            });
          } else if (ac(e)) {
            e.forEach(function (n, o) {
              c.set(o, un(n, t, r, o, e, i));
            });
          }
          var g = f ? o : (u ? l ? ca : ia : l ? Tc : Mc)(e);
          St(g || e, function (n, o) {
            if (g) {
              n = e[o = n];
            }
            rn(c, o, un(n, t, r, o, e, i));
          });
          return c;
        }
        function fn(e, t, r) {
          var n = r.length;
          if (e == null) {
            return !n;
          }
          for (e = Se(e); n--;) {
            var a = r[n];
            var i = t[a];
            var c = e[a];
            if (c === o && !(a in e) || !i(c)) {
              return false;
            }
          }
          return true;
        }
        function dn(e, t, r) {
          if (typeof e != "function") {
            throw new je(a);
          }
          return Ma(function () {
            e.apply(o, r);
          }, t);
        }
        function hn(e, t, r, n) {
          var o = -1;
          var a = Dt;
          var i = true;
          var c = e.length;
          var s = [];
          var l = t.length;
          if (!c) {
            return s;
          }
          if (r) {
            t = Pt(t, Kt(r));
          }
          if (n) {
            a = Ft;
            i = false;
          } else if (t.length >= 200) {
            a = Xt;
            i = false;
            t = new Vr(t);
          }
          e: while (++o < c) {
            var u = e[o];
            var f = r == null ? u : r(u);
            u = n || u !== 0 ? u : 0;
            if (i && f == f) {
              for (var d = l; d--;) {
                if (t[d] === f) {
                  continue e;
                }
              }
              s.push(u);
            } else if (!a(t, f, n)) {
              s.push(u);
            }
          }
          return s;
        }
        zr.templateSettings = {
          escape: J,
          evaluate: X,
          interpolate: ee,
          variable: "",
          imports: {
            _: zr
          }
        };
        zr.prototype = Nr.prototype;
        zr.prototype.constructor = zr;
        Wr.prototype = Hr(Nr.prototype);
        Wr.prototype.constructor = Wr;
        $r.prototype = Hr(Nr.prototype);
        $r.prototype.constructor = $r;
        qr.prototype.clear = function () {
          this.__data__ = jr ? jr(null) : {};
          this.size = 0;
        };
        qr.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          this.size -= t ? 1 : 0;
          return t;
        };
        qr.prototype.get = function (e) {
          var t = this.__data__;
          if (jr) {
            var r = t[e];
            if (r === i) {
              return o;
            } else {
              return r;
            }
          }
          if (Ie.call(t, e)) {
            return t[e];
          } else {
            return o;
          }
        };
        qr.prototype.has = function (e) {
          var t = this.__data__;
          if (jr) {
            return t[e] !== o;
          } else {
            return Ie.call(t, e);
          }
        };
        qr.prototype.set = function (e, t) {
          var r = this.__data__;
          this.size += this.has(e) ? 0 : 1;
          r[e] = jr && t === o ? i : t;
          return this;
        };
        Yr.prototype.clear = function () {
          this.__data__ = [];
          this.size = 0;
        };
        Yr.prototype.delete = function (e) {
          var t = this.__data__;
          var r = nn(t, e);
          return !(r < 0) && (r == t.length - 1 ? t.pop() : Ge.call(t, r, 1), --this.size, true);
        };
        Yr.prototype.get = function (e) {
          var t = this.__data__;
          var r = nn(t, e);
          if (r < 0) {
            return o;
          } else {
            return t[r][1];
          }
        };
        Yr.prototype.has = function (e) {
          return nn(this.__data__, e) > -1;
        };
        Yr.prototype.set = function (e, t) {
          var r = this.__data__;
          var n = nn(r, e);
          if (n < 0) {
            ++this.size;
            r.push([e, t]);
          } else {
            r[n][1] = t;
          }
          return this;
        };
        Qr.prototype.clear = function () {
          this.size = 0;
          this.__data__ = {
            hash: new qr(),
            map: new (xr || Yr)(),
            string: new qr()
          };
        };
        Qr.prototype.delete = function (e) {
          var t = da(this, e).delete(e);
          this.size -= t ? 1 : 0;
          return t;
        };
        Qr.prototype.get = function (e) {
          return da(this, e).get(e);
        };
        Qr.prototype.has = function (e) {
          return da(this, e).has(e);
        };
        Qr.prototype.set = function (e, t) {
          var r = da(this, e);
          var n = r.size;
          r.set(e, t);
          this.size += r.size == n ? 0 : 1;
          return this;
        };
        Vr.prototype.add = Vr.prototype.push = function (e) {
          this.__data__.set(e, i);
          return this;
        };
        Vr.prototype.has = function (e) {
          return this.__data__.has(e);
        };
        Gr.prototype.clear = function () {
          this.__data__ = new Yr();
          this.size = 0;
        };
        Gr.prototype.delete = function (e) {
          var t = this.__data__;
          var r = t.delete(e);
          this.size = t.size;
          return r;
        };
        Gr.prototype.get = function (e) {
          return this.__data__.get(e);
        };
        Gr.prototype.has = function (e) {
          return this.__data__.has(e);
        };
        Gr.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof Yr) {
            var n = r.__data__;
            if (!xr || n.length < 199) {
              n.push([e, t]);
              this.size = ++r.size;
              return this;
            }
            r = this.__data__ = new Qr(n);
          }
          r.set(e, t);
          this.size = r.size;
          return this;
        };
        var pn = Io(kn);
        var gn = Io(An, true);
        function yn(e, t) {
          var r = true;
          pn(e, function (e, n, o) {
            return r = !!t(e, n, o);
          });
          return r;
        }
        function vn(e, t, r) {
          for (var n = -1, a = e.length; ++n < a;) {
            var i = e[n];
            var c = t(i);
            if (c != null && (s === o ? c == c && !fc(c) : r(c, s))) {
              var s = c;
              var l = i;
            }
          }
          return l;
        }
        function bn(e, t) {
          var r = [];
          pn(e, function (e, n, o) {
            if (t(e, n, o)) {
              r.push(e);
            }
          });
          return r;
        }
        function mn(e, t, r, n, o) {
          var a = -1;
          var i = e.length;
          r ||= wa;
          o ||= [];
          while (++a < i) {
            var c = e[a];
            if (t > 0 && r(c)) {
              if (t > 1) {
                mn(c, t - 1, r, n, o);
              } else {
                Mt(o, c);
              }
            } else if (!n) {
              o[o.length] = c;
            }
          }
          return o;
        }
        var wn = Lo();
        var _n = Lo(true);
        function kn(e, t) {
          return e && wn(e, t, Mc);
        }
        function An(e, t) {
          return e && _n(e, t, Mc);
        }
        function En(e, t) {
          return jt(t, function (t) {
            return ec(e[t]);
          });
        }
        function Cn(e, t) {
          for (var r = 0, n = (t = ko(t, e)).length; e != null && r < n;) {
            e = e[Ra(t[r++])];
          }
          if (r && r == n) {
            return e;
          } else {
            return o;
          }
        }
        function xn(e, t, r) {
          var n = t(e);
          if (Yi(e)) {
            return n;
          } else {
            return Mt(n, r(e));
          }
        }
        function Sn(e) {
          if (e == null) {
            if (e === o) {
              return "[object Undefined]";
            } else {
              return "[object Null]";
            }
          } else if (rt && rt in Se(e)) {
            return function (e) {
              var t = Ie.call(e, rt);
              var r = e[rt];
              try {
                e[rt] = o;
                var n = true;
              } catch (e) {}
              var a = Ue.call(e);
              if (n) {
                if (t) {
                  e[rt] = r;
                } else {
                  delete e[rt];
                }
              }
              return a;
            }(e);
          } else {
            return function (e) {
              return Ue.call(e);
            }(e);
          }
        }
        function On(e, t) {
          return e > t;
        }
        function Bn(e, t) {
          return e != null && Ie.call(e, t);
        }
        function jn(e, t) {
          return e != null && t in Se(e);
        }
        function Dn(e, t, r) {
          var a = r ? Ft : Dt;
          var i = e[0].length;
          var c = e.length;
          for (var s = c, l = n(c), u = Infinity, f = []; s--;) {
            var d = e[s];
            if (s && t) {
              d = Pt(d, Kt(t));
            }
            u = wr(d.length, u);
            l[s] = !r && (t || i >= 120 && d.length >= 120) ? new Vr(s && d) : o;
          }
          d = e[0];
          var h = -1;
          var p = l[0];
          e: while (++h < i && f.length < u) {
            var g = d[h];
            var y = t ? t(g) : g;
            g = r || g !== 0 ? g : 0;
            if (!(p ? Xt(p, y) : a(f, y, r))) {
              for (s = c; --s;) {
                var v = l[s];
                if (!(v ? Xt(v, y) : a(e[s], y, r))) {
                  continue e;
                }
              }
              if (p) {
                p.push(y);
              }
              f.push(g);
            }
          }
          return f;
        }
        function Fn(e, t, r) {
          var n = (e = ja(e, t = ko(t, e))) == null ? e : e[Ra(Xa(t))];
          if (n == null) {
            return o;
          } else {
            return Ct(n, e, r);
          }
        }
        function Pn(e) {
          return oc(e) && Sn(e) == b;
        }
        function Mn(e, t, r, n, a) {
          return e === t || (e == null || t == null || !oc(e) && !oc(t) ? e != e && t != t : function (e, t, r, n, a, i) {
            var c = Yi(e);
            var s = Yi(t);
            var l = c ? m : va(e);
            var u = s ? m : va(t);
            var f = (l = l == b ? S : l) == S;
            var d = (u = u == b ? S : u) == S;
            var h = l == u;
            if (h && Ki(e)) {
              if (!Ki(t)) {
                return false;
              }
              c = true;
              f = false;
            }
            if (h && !f) {
              i ||= new Gr();
              if (c || dc(e)) {
                return oa(e, t, r, n, a, i);
              } else {
                return function (e, t, r, n, o, a, i) {
                  switch (r) {
                    case T:
                      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
                        return false;
                      }
                      e = e.buffer;
                      t = t.buffer;
                    case M:
                      return e.byteLength == t.byteLength && !!a(new $e(e), new $e(t));
                    case w:
                    case _:
                    case x:
                      return Ni(+e, +t);
                    case k:
                      return e.name == t.name && e.message == t.message;
                    case B:
                    case D:
                      return e == t + "";
                    case C:
                      var c = cr;
                    case j:
                      var s = n & 1;
                      c ||= ur;
                      if (e.size != t.size && !s) {
                        return false;
                      }
                      var l = i.get(e);
                      if (l) {
                        return l == t;
                      }
                      n |= 2;
                      i.set(e, t);
                      var u = oa(c(e), c(t), n, o, a, i);
                      i.delete(e);
                      return u;
                    case F:
                      if (Ur) {
                        return Ur.call(e) == Ur.call(t);
                      }
                  }
                  return false;
                }(e, t, l, r, n, a, i);
              }
            }
            if (!(r & 1)) {
              var p = f && Ie.call(e, "__wrapped__");
              var g = d && Ie.call(t, "__wrapped__");
              if (p || g) {
                var y = p ? e.value() : e;
                var v = g ? t.value() : t;
                i ||= new Gr();
                return a(y, v, r, n, i);
              }
            }
            if (!h) {
              return false;
            }
            i ||= new Gr();
            return function (e, t, r, n, a, i) {
              var c = r & 1;
              var s = ia(e);
              var l = s.length;
              var u = ia(t).length;
              if (l != u && !c) {
                return false;
              }
              var f = l;
              while (f--) {
                var d = s[f];
                if (!(c ? d in t : Ie.call(t, d))) {
                  return false;
                }
              }
              var h = i.get(e);
              var p = i.get(t);
              if (h && p) {
                return h == t && p == e;
              }
              var g = true;
              i.set(e, t);
              i.set(t, e);
              var y = c;
              while (++f < l) {
                var v = e[d = s[f]];
                var b = t[d];
                if (n) {
                  var m = c ? n(b, v, d, t, e, i) : n(v, b, d, e, t, i);
                }
                if (!(m === o ? v === b || a(v, b, r, n, i) : m)) {
                  g = false;
                  break;
                }
                y ||= d == "constructor";
              }
              if (g && !y) {
                var w = e.constructor;
                var _ = t.constructor;
                if (w != _ && !!("constructor" in e) && !!("constructor" in t) && (typeof w != "function" || !(w instanceof w) || typeof _ != "function" || !(_ instanceof _))) {
                  g = false;
                }
              }
              i.delete(e);
              i.delete(t);
              return g;
            }(e, t, r, n, a, i);
          }(e, t, r, n, Mn, a));
        }
        function Tn(e, t, r, n) {
          var a = r.length;
          var i = a;
          var c = !n;
          if (e == null) {
            return !i;
          }
          for (e = Se(e); a--;) {
            var s = r[a];
            if (c && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) {
              return false;
            }
          }
          while (++a < i) {
            var l = (s = r[a])[0];
            var u = e[l];
            var f = s[1];
            if (c && s[2]) {
              if (u === o && !(l in e)) {
                return false;
              }
            } else {
              var d = new Gr();
              if (n) {
                var h = n(u, f, l, e, t, d);
              }
              if (!(h === o ? Mn(f, u, 3, n, d) : h)) {
                return false;
              }
            }
          }
          return true;
        }
        function In(e) {
          return !!nc(e) && !(t = e, Ze && Ze in t) && (ec(e) ? He : be).test(za(e));
          var t;
        }
        function Ln(e) {
          if (typeof e == "function") {
            return e;
          } else if (e == null) {
            return is;
          } else if (typeof e == "object") {
            if (Yi(e)) {
              return Nn(e[0], e[1]);
            } else {
              return Hn(e);
            }
          } else {
            return gs(e);
          }
        }
        function Zn(e) {
          if (!xa(e)) {
            return br(e);
          }
          var t = [];
          for (var r in Se(e)) {
            if (Ie.call(e, r) && r != "constructor") {
              t.push(r);
            }
          }
          return t;
        }
        function Un(e) {
          if (!nc(e)) {
            return function (e) {
              var t = [];
              if (e != null) {
                for (var r in Se(e)) {
                  t.push(r);
                }
              }
              return t;
            }(e);
          }
          var t = xa(e);
          var r = [];
          for (var n in e) {
            if (n != "constructor" || !t && Ie.call(e, n)) {
              r.push(n);
            }
          }
          return r;
        }
        function Rn(e, t) {
          return e < t;
        }
        function zn(e, t) {
          var r = -1;
          var o = Vi(e) ? n(e.length) : [];
          pn(e, function (e, n, a) {
            o[++r] = t(e, n, a);
          });
          return o;
        }
        function Hn(e) {
          var t = ha(e);
          if (t.length == 1 && t[0][2]) {
            return Oa(t[0][0], t[0][1]);
          } else {
            return function (r) {
              return r === e || Tn(r, e, t);
            };
          }
        }
        function Nn(e, t) {
          if (Aa(e) && Sa(t)) {
            return Oa(Ra(e), t);
          } else {
            return function (r) {
              var n = Bc(r, e);
              if (n === o && n === t) {
                return jc(r, e);
              } else {
                return Mn(t, n, 3);
              }
            };
          }
        }
        function Wn(e, t, r, n, a) {
          if (e !== t) {
            wn(t, function (i, c) {
              a ||= new Gr();
              if (nc(i)) {
                (function (e, t, r, n, a, i, c) {
                  var s = Fa(e, r);
                  var l = Fa(t, r);
                  var u = c.get(l);
                  if (u) {
                    tn(e, r, u);
                    return;
                  }
                  var f = i ? i(s, l, r + "", e, t, c) : o;
                  var d = f === o;
                  if (d) {
                    var h = Yi(l);
                    var p = !h && Ki(l);
                    var g = !h && !p && dc(l);
                    f = l;
                    if (h || p || g) {
                      if (Yi(s)) {
                        f = s;
                      } else if (Gi(s)) {
                        f = Fo(s);
                      } else if (p) {
                        d = false;
                        f = xo(l, true);
                      } else if (g) {
                        d = false;
                        f = Oo(l, true);
                      } else {
                        f = [];
                      }
                    } else if (cc(l) || qi(l)) {
                      f = s;
                      if (qi(s)) {
                        f = wc(s);
                      } else if (!nc(s) || !!ec(s)) {
                        f = ma(l);
                      }
                    } else {
                      d = false;
                    }
                  }
                  if (d) {
                    c.set(l, f);
                    a(f, l, n, i, c);
                    c.delete(l);
                  }
                  tn(e, r, f);
                })(e, t, c, r, Wn, n, a);
              } else {
                var s = n ? n(Fa(e, c), i, c + "", e, t, a) : o;
                if (s === o) {
                  s = i;
                }
                tn(e, c, s);
              }
            }, Tc);
          }
        }
        function $n(e, t) {
          var r = e.length;
          if (r) {
            if (_a(t += t < 0 ? r : 0, r)) {
              return e[t];
            } else {
              return o;
            }
          }
        }
        function qn(e, t, r) {
          t = t.length ? Pt(t, function (e) {
            if (Yi(e)) {
              return function (t) {
                return Cn(t, e.length === 1 ? e[0] : e);
              };
            } else {
              return e;
            }
          }) : [is];
          var n = -1;
          t = Pt(t, Kt(fa()));
          var o = zn(e, function (e, r, o) {
            var a = Pt(t, function (t) {
              return t(e);
            });
            return {
              criteria: a,
              index: ++n,
              value: e
            };
          });
          return function (e, t) {
            var r = e.length;
            for (e.sort(t); r--;) {
              e[r] = e[r].value;
            }
            return e;
          }(o, function (e, t) {
            return function (e, t, r) {
              var n = -1;
              var o = e.criteria;
              var a = t.criteria;
              var i = o.length;
              var c = r.length;
              while (++n < i) {
                var s = Bo(o[n], a[n]);
                if (s) {
                  if (n >= c) {
                    return s;
                  } else {
                    return s * (r[n] == "desc" ? -1 : 1);
                  }
                }
              }
              return e.index - t.index;
            }(e, t, r);
          });
        }
        function Yn(e, t, r) {
          for (var n = -1, o = t.length, a = {}; ++n < o;) {
            var i = t[n];
            var c = Cn(e, i);
            if (r(c, i)) {
              to(a, ko(i, e), c);
            }
          }
          return a;
        }
        function Qn(e, t, r, n) {
          var o = n ? Ht : zt;
          var a = -1;
          var i = t.length;
          var c = e;
          if (e === t) {
            t = Fo(t);
          }
          if (r) {
            c = Pt(e, Kt(r));
          }
          while (++a < i) {
            for (var s = 0, l = t[a], u = r ? r(l) : l; (s = o(c, u, s, n)) > -1;) {
              if (c !== e) {
                Ge.call(c, s, 1);
              }
              Ge.call(e, s, 1);
            }
          }
          return e;
        }
        function Vn(e, t) {
          for (var r = e ? t.length : 0, n = r - 1; r--;) {
            var o = t[r];
            if (r == n || o !== a) {
              var a = o;
              if (_a(o)) {
                Ge.call(e, o, 1);
              } else {
                po(e, o);
              }
            }
          }
          return e;
        }
        function Gn(e, t) {
          return e + vt(Ar() * (t - e + 1));
        }
        function Kn(e, t) {
          var r = "";
          if (!e || t < 1 || t > p) {
            return r;
          }
          do {
            if (t % 2) {
              r += e;
            }
            if (t = vt(t / 2)) {
              e += e;
            }
          } while (t);
          return r;
        }
        function Jn(e, t) {
          return Ta(Ba(e, t, is), e + "");
        }
        function Xn(e) {
          return Jr(Nc(e));
        }
        function eo(e, t) {
          var r = Nc(e);
          return Za(r, ln(t, 0, r.length));
        }
        function to(e, t, r, n) {
          if (!nc(e)) {
            return e;
          }
          for (var a = -1, i = (t = ko(t, e)).length, c = i - 1, s = e; s != null && ++a < i;) {
            var l = Ra(t[a]);
            var u = r;
            if (l === "__proto__" || l === "constructor" || l === "prototype") {
              return e;
            }
            if (a != c) {
              var f = s[l];
              if ((u = n ? n(f, l, s) : o) === o) {
                u = nc(f) ? f : _a(t[a + 1]) ? [] : {};
              }
            }
            rn(s, l, u);
            s = s[l];
          }
          return e;
        }
        var ro = Dr ? function (e, t) {
          Dr.set(e, t);
          return e;
        } : is;
        var no = st ? function (e, t) {
          return st(e, "toString", {
            configurable: true,
            enumerable: false,
            value: ns(t),
            writable: true
          });
        } : is;
        function oo(e) {
          return Za(Nc(e));
        }
        function ao(e, t, r) {
          var o = -1;
          var a = e.length;
          if (t < 0) {
            t = -t > a ? 0 : a + t;
          }
          if ((r = r > a ? a : r) < 0) {
            r += a;
          }
          a = t > r ? 0 : r - t >>> 0;
          t >>>= 0;
          var i = n(a);
          for (; ++o < a;) {
            i[o] = e[o + t];
          }
          return i;
        }
        function io(e, t) {
          var r;
          pn(e, function (e, n, o) {
            return !(r = t(e, n, o));
          });
          return !!r;
        }
        function co(e, t, r) {
          var n = 0;
          var o = e == null ? n : e.length;
          if (typeof t == "number" && t == t && o <= 2147483647) {
            while (n < o) {
              var a = n + o >>> 1;
              var i = e[a];
              if (i !== null && !fc(i) && (r ? i <= t : i < t)) {
                n = a + 1;
              } else {
                o = a;
              }
            }
            return o;
          }
          return so(e, t, is, r);
        }
        function so(e, t, r, n) {
          var a = 0;
          var i = e == null ? 0 : e.length;
          if (i === 0) {
            return 0;
          }
          var c = (t = r(t)) != t;
          var s = t === null;
          var l = fc(t);
          var u = t === o;
          for (; a < i;) {
            var f = vt((a + i) / 2);
            var d = r(e[f]);
            var h = d !== o;
            var p = d === null;
            var g = d == d;
            var y = fc(d);
            if (c) {
              var v = n || g;
            } else {
              v = u ? g && (n || h) : s ? g && h && (n || !p) : l ? g && h && !p && (n || !y) : !p && !y && (n ? d <= t : d < t);
            }
            if (v) {
              a = f + 1;
            } else {
              i = f;
            }
          }
          return wr(i, 4294967294);
        }
        function lo(e, t) {
          for (var r = -1, n = e.length, o = 0, a = []; ++r < n;) {
            var i = e[r];
            var c = t ? t(i) : i;
            if (!r || !Ni(c, s)) {
              var s = c;
              a[o++] = i === 0 ? 0 : i;
            }
          }
          return a;
        }
        function uo(e) {
          if (typeof e == "number") {
            return e;
          } else if (fc(e)) {
            return g;
          } else {
            return +e;
          }
        }
        function fo(e) {
          if (typeof e == "string") {
            return e;
          }
          if (Yi(e)) {
            return Pt(e, fo) + "";
          }
          if (fc(e)) {
            if (Rr) {
              return Rr.call(e);
            } else {
              return "";
            }
          }
          var t = e + "";
          if (t == "0" && 1 / e == -Infinity) {
            return "-0";
          } else {
            return t;
          }
        }
        function ho(e, t, r) {
          var n = -1;
          var o = Dt;
          var a = e.length;
          var i = true;
          var c = [];
          var s = c;
          if (r) {
            i = false;
            o = Ft;
          } else if (a >= 200) {
            var l = t ? null : Jo(e);
            if (l) {
              return ur(l);
            }
            i = false;
            o = Xt;
            s = new Vr();
          } else {
            s = t ? [] : c;
          }
          e: while (++n < a) {
            var u = e[n];
            var f = t ? t(u) : u;
            u = r || u !== 0 ? u : 0;
            if (i && f == f) {
              for (var d = s.length; d--;) {
                if (s[d] === f) {
                  continue e;
                }
              }
              if (t) {
                s.push(f);
              }
              c.push(u);
            } else if (!o(s, f, r)) {
              if (s !== c) {
                s.push(f);
              }
              c.push(u);
            }
          }
          return c;
        }
        function po(e, t) {
          return (e = ja(e, t = ko(t, e))) == null || delete e[Ra(Xa(t))];
        }
        function go(e, t, r, n) {
          return to(e, t, r(Cn(e, t)), n);
        }
        function yo(e, t, r, n) {
          for (var o = e.length, a = n ? o : -1; (n ? a-- : ++a < o) && t(e[a], a, e););
          if (r) {
            return ao(e, n ? 0 : a, n ? a + 1 : o);
          } else {
            return ao(e, n ? a + 1 : 0, n ? o : a);
          }
        }
        function vo(e, t) {
          var r = e;
          if (r instanceof $r) {
            r = r.value();
          }
          return Tt(t, function (e, t) {
            return t.func.apply(t.thisArg, Mt([e], t.args));
          }, r);
        }
        function bo(e, t, r) {
          var o = e.length;
          if (o < 2) {
            if (o) {
              return ho(e[0]);
            } else {
              return [];
            }
          }
          for (var a = -1, i = n(o); ++a < o;) {
            var c = e[a];
            for (var s = -1; ++s < o;) {
              if (s != a) {
                i[a] = hn(i[a] || c, e[s], t, r);
              }
            }
          }
          return ho(mn(i, 1), t, r);
        }
        function mo(e, t, r) {
          for (var n = -1, a = e.length, i = t.length, c = {}; ++n < a;) {
            var s = n < i ? t[n] : o;
            r(c, e[n], s);
          }
          return c;
        }
        function wo(e) {
          if (Gi(e)) {
            return e;
          } else {
            return [];
          }
        }
        function _o(e) {
          if (typeof e == "function") {
            return e;
          } else {
            return is;
          }
        }
        function ko(e, t) {
          if (Yi(e)) {
            return e;
          } else if (Aa(e, t)) {
            return [e];
          } else {
            return Ua(_c(e));
          }
        }
        var Ao = Jn;
        function Eo(e, t, r) {
          var n = e.length;
          r = r === o ? n : r;
          if (!t && r >= n) {
            return e;
          } else {
            return ao(e, t, r);
          }
        }
        var Co = ft || function (e) {
          return ht.clearTimeout(e);
        };
        function xo(e, t) {
          if (t) {
            return e.slice();
          }
          var r = e.length;
          var n = qe ? qe(r) : new e.constructor(r);
          e.copy(n);
          return n;
        }
        function So(e) {
          var t = new e.constructor(e.byteLength);
          new $e(t).set(new $e(e));
          return t;
        }
        function Oo(e, t) {
          var r = t ? So(e.buffer) : e.buffer;
          return new e.constructor(r, e.byteOffset, e.length);
        }
        function Bo(e, t) {
          if (e !== t) {
            var r = e !== o;
            var n = e === null;
            var a = e == e;
            var i = fc(e);
            var c = t !== o;
            var s = t === null;
            var l = t == t;
            var u = fc(t);
            if (!s && !u && !i && e > t || i && c && l && !s && !u || n && c && l || !r && l || !a) {
              return 1;
            }
            if (!n && !i && !u && e < t || u && r && a && !n && !i || s && r && a || !c && a || !l) {
              return -1;
            }
          }
          return 0;
        }
        function jo(e, t, r, o) {
          var a = -1;
          var i = e.length;
          var c = r.length;
          for (var s = -1, l = t.length, u = mr(i - c, 0), f = n(l + u), d = !o; ++s < l;) {
            f[s] = t[s];
          }
          while (++a < c) {
            if (d || a < i) {
              f[r[a]] = e[a];
            }
          }
          while (u--) {
            f[s++] = e[a++];
          }
          return f;
        }
        function Do(e, t, r, o) {
          for (var a = -1, i = e.length, c = -1, s = r.length, l = -1, u = t.length, f = mr(i - s, 0), d = n(f + u), h = !o; ++a < f;) {
            d[a] = e[a];
          }
          var p = a;
          for (; ++l < u;) {
            d[p + l] = t[l];
          }
          while (++c < s) {
            if (h || a < i) {
              d[p + r[c]] = e[a++];
            }
          }
          return d;
        }
        function Fo(e, t) {
          var r = -1;
          var o = e.length;
          for (t ||= n(o); ++r < o;) {
            t[r] = e[r];
          }
          return t;
        }
        function Po(e, t, r, n) {
          var a = !r;
          r ||= {};
          for (var i = -1, c = t.length; ++i < c;) {
            var s = t[i];
            var l = n ? n(r[s], e[s], s, r, e) : o;
            if (l === o) {
              l = e[s];
            }
            if (a) {
              cn(r, s, l);
            } else {
              rn(r, s, l);
            }
          }
          return r;
        }
        function Mo(e, t) {
          return function (r, n) {
            var o = Yi(r) ? xt : on;
            var a = t ? t() : {};
            return o(r, e, fa(n, 2), a);
          };
        }
        function To(e) {
          return Jn(function (t, r) {
            var n = -1;
            var a = r.length;
            var i = a > 1 ? r[a - 1] : o;
            var c = a > 2 ? r[2] : o;
            i = e.length > 3 && typeof i == "function" ? (a--, i) : o;
            if (c && ka(r[0], r[1], c)) {
              i = a < 3 ? o : i;
              a = 1;
            }
            t = Se(t);
            while (++n < a) {
              var s = r[n];
              if (s) {
                e(t, s, n, i);
              }
            }
            return t;
          });
        }
        function Io(e, t) {
          return function (r, n) {
            if (r == null) {
              return r;
            }
            if (!Vi(r)) {
              return e(r, n);
            }
            for (var o = r.length, a = t ? o : -1, i = Se(r); (t ? a-- : ++a < o) && n(i[a], a, i) !== false;);
            return r;
          };
        }
        function Lo(e) {
          return function (t, r, n) {
            var o = -1;
            var a = Se(t);
            var i = n(t);
            for (var c = i.length; c--;) {
              var s = i[e ? c : ++o];
              if (r(a[s], s, a) === false) {
                break;
              }
            }
            return t;
          };
        }
        function Zo(e) {
          return function (t) {
            var r = ir(t = _c(t)) ? hr(t) : o;
            var n = r ? r[0] : t.charAt(0);
            var a = r ? Eo(r, 1).join("") : t.slice(1);
            return n[e]() + a;
          };
        }
        function Uo(e) {
          return function (t) {
            return Tt(es(qc(t).replace(Je, "")), e, "");
          };
        }
        function Ro(e) {
          return function () {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            var r = Hr(e.prototype);
            var n = e.apply(r, t);
            if (nc(n)) {
              return n;
            } else {
              return r;
            }
          };
        }
        function zo(e) {
          return function (t, r, n) {
            var a = Se(t);
            if (!Vi(t)) {
              var i = fa(r, 3);
              t = Mc(t);
              r = function (e) {
                return i(a[e], e, a);
              };
            }
            var c = e(t, r, n);
            if (c > -1) {
              return a[i ? t[c] : c];
            } else {
              return o;
            }
          };
        }
        function Ho(e) {
          return aa(function (t) {
            var r = t.length;
            var n = r;
            var i = Wr.prototype.thru;
            for (e && t.reverse(); n--;) {
              var c = t[n];
              if (typeof c != "function") {
                throw new je(a);
              }
              if (i && !s && la(c) == "wrapper") {
                var s = new Wr([], true);
              }
            }
            for (n = s ? n : r; ++n < r;) {
              var l = la(c = t[n]);
              var u = l == "wrapper" ? sa(c) : o;
              s = u && Ea(u[0]) && u[1] == 424 && !u[4].length && u[9] == 1 ? s[la(u[0])].apply(s, u[3]) : c.length == 1 && Ea(c) ? s[l]() : s.thru(c);
            }
            return function () {
              var e = arguments;
              var n = e[0];
              if (s && e.length == 1 && Yi(n)) {
                return s.plant(n).value();
              }
              for (var o = 0, a = r ? t[o].apply(this, e) : n; ++o < r;) {
                a = t[o].call(this, a);
              }
              return a;
            };
          });
        }
        function No(e, t, r, a, i, c, s, l, u, d) {
          var h = t & f;
          var p = t & 1;
          var g = t & 2;
          var y = t & 24;
          var v = t & 512;
          var b = g ? o : Ro(e);
          return function o() {
            var f = arguments.length;
            var m = n(f);
            for (var w = f; w--;) {
              m[w] = arguments[w];
            }
            if (y) {
              var _ = ua(o);
              var k = rr(m, _);
            }
            if (a) {
              m = jo(m, a, i, y);
            }
            if (c) {
              m = Do(m, c, s, y);
            }
            f -= k;
            if (y && f < d) {
              var A = lr(m, _);
              return Go(e, t, No, o.placeholder, r, m, A, l, u, d - f);
            }
            var E = p ? r : this;
            var C = g ? E[e] : e;
            f = m.length;
            if (l) {
              m = Da(m, l);
            } else if (v && f > 1) {
              m.reverse();
            }
            if (h && u < f) {
              m.length = u;
            }
            if (this && this !== ht && this instanceof o) {
              C = b || Ro(C);
            }
            return C.apply(E, m);
          };
        }
        function Wo(e, t) {
          return function (r, n) {
            return function (e, t, r, n) {
              kn(e, function (e, o, a) {
                t(n, r(e), o, a);
              });
              return n;
            }(r, e, t(n), {});
          };
        }
        function $o(e, t) {
          return function (r, n) {
            var a;
            if (r === o && n === o) {
              return t;
            }
            if (r !== o) {
              a = r;
            }
            if (n !== o) {
              if (a === o) {
                return n;
              }
              if (typeof r == "string" || typeof n == "string") {
                r = fo(r);
                n = fo(n);
              } else {
                r = uo(r);
                n = uo(n);
              }
              a = e(r, n);
            }
            return a;
          };
        }
        function qo(e) {
          return aa(function (t) {
            t = Pt(t, Kt(fa()));
            return Jn(function (r) {
              var n = this;
              return e(t, function (e) {
                return Ct(e, n, r);
              });
            });
          });
        }
        function Yo(e, t) {
          var r = (t = t === o ? " " : fo(t)).length;
          if (r < 2) {
            if (r) {
              return Kn(t, e);
            } else {
              return t;
            }
          }
          var n = Kn(t, gt(e / dr(t)));
          if (ir(t)) {
            return Eo(hr(n), 0, e).join("");
          } else {
            return n.slice(0, e);
          }
        }
        function Qo(e) {
          return function (t, r, a) {
            if (a && typeof a != "number" && ka(t, r, a)) {
              r = a = o;
            }
            t = yc(t);
            if (r === o) {
              r = t;
              t = 0;
            } else {
              r = yc(r);
            }
            return function (e, t, r, o) {
              var a = -1;
              for (var i = mr(gt((t - e) / (r || 1)), 0), c = n(i); i--;) {
                c[o ? i : ++a] = e;
                e += r;
              }
              return c;
            }(t, r, a = a === o ? t < r ? 1 : -1 : yc(a), e);
          };
        }
        function Vo(e) {
          return function (t, r) {
            if (typeof t != "string" || typeof r != "string") {
              t = mc(t);
              r = mc(r);
            }
            return e(t, r);
          };
        }
        function Go(e, t, r, n, a, i, c, s, f, d) {
          var h = t & 8;
          t |= h ? l : u;
          if (!((t &= ~(h ? u : l)) & 4)) {
            t &= -4;
          }
          var p = [e, t, a, h ? i : o, h ? c : o, h ? o : i, h ? o : c, s, f, d];
          var g = r.apply(o, p);
          if (Ea(e)) {
            Pa(g, p);
          }
          g.placeholder = n;
          return Ia(g, e, t);
        }
        function Ko(e) {
          var t = xe[e];
          return function (e, r) {
            e = mc(e);
            if ((r = r == null ? 0 : wr(vc(r), 292)) && qt(e)) {
              var n = (_c(e) + "e").split("e");
              return +((n = (_c(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r));
            }
            return t(e);
          };
        }
        var Jo = Or && 1 / ur(new Or([, -0]))[1] == h ? function (e) {
          return new Or(e);
        } : fs;
        function Xo(e) {
          return function (t) {
            var r = va(t);
            if (r == C) {
              return cr(t);
            } else if (r == j) {
              return fr(t);
            } else {
              return function (e, t) {
                return Pt(t, function (t) {
                  return [t, e[t]];
                });
              }(t, e(t));
            }
          };
        }
        function ea(e, t, r, i, h, p, g, y) {
          var v = t & 2;
          if (!v && typeof e != "function") {
            throw new je(a);
          }
          var b = i ? i.length : 0;
          if (!b) {
            t &= -97;
            i = h = o;
          }
          g = g === o ? g : mr(vc(g), 0);
          y = y === o ? y : vc(y);
          b -= h ? h.length : 0;
          if (t & u) {
            var m = i;
            var w = h;
            i = h = o;
          }
          var _ = v ? o : sa(e);
          var k = [e, t, r, i, h, m, w, p, g, y];
          if (_) {
            (function (e, t) {
              var r = e[1];
              var n = t[1];
              var o = r | n;
              var a = o < 131;
              var i = n == f && r == 8 || n == f && r == d && e[7].length <= t[8] || n == 384 && t[7].length <= t[8] && r == 8;
              if (!a && !i) {
                return e;
              }
              if (n & 1) {
                e[2] = t[2];
                o |= r & 1 ? 0 : 4;
              }
              var s = t[3];
              if (s) {
                var l = e[3];
                e[3] = l ? jo(l, s, t[4]) : s;
                e[4] = l ? lr(e[3], c) : t[4];
              }
              if (s = t[5]) {
                l = e[5];
                e[5] = l ? Do(l, s, t[6]) : s;
                e[6] = l ? lr(e[5], c) : t[6];
              }
              if (s = t[7]) {
                e[7] = s;
              }
              if (n & f) {
                e[8] = e[8] == null ? t[8] : wr(e[8], t[8]);
              }
              if (e[9] == null) {
                e[9] = t[9];
              }
              e[0] = t[0];
              e[1] = o;
            })(k, _);
          }
          e = k[0];
          t = k[1];
          r = k[2];
          i = k[3];
          h = k[4];
          if (!(y = k[9] = k[9] === o ? v ? 0 : e.length : mr(k[9] - b, 0)) && t & 24) {
            t &= -25;
          }
          if (t && t != 1) {
            A = t == 8 || t == s ? function (e, t, r) {
              var a = Ro(e);
              return function i() {
                var c = arguments.length;
                var s = n(c);
                for (var l = c, u = ua(i); l--;) {
                  s[l] = arguments[l];
                }
                var f = c < 3 && s[0] !== u && s[c - 1] !== u ? [] : lr(s, u);
                if ((c -= f.length) < r) {
                  return Go(e, t, No, i.placeholder, o, s, f, o, o, r - c);
                } else {
                  return Ct(this && this !== ht && this instanceof i ? a : e, this, s);
                }
              };
            }(e, t, y) : t != l && t != 33 || h.length ? No.apply(o, k) : function (e, t, r, o) {
              var a = t & 1;
              var i = Ro(e);
              return function t() {
                var c = -1;
                var s = arguments.length;
                for (var l = -1, u = o.length, f = n(u + s), d = this && this !== ht && this instanceof t ? i : e; ++l < u;) {
                  f[l] = o[l];
                }
                while (s--) {
                  f[l++] = arguments[++c];
                }
                return Ct(d, a ? r : this, f);
              };
            }(e, t, r, i);
          } else {
            var A = function (e, t, r) {
              var n = t & 1;
              var o = Ro(e);
              return function t() {
                return (this && this !== ht && this instanceof t ? o : e).apply(n ? r : this, arguments);
              };
            }(e, t, r);
          }
          return Ia((_ ? ro : Pa)(A, k), e, t);
        }
        function ta(e, t, r, n) {
          if (e === o || Ni(e, Pe[r]) && !Ie.call(n, r)) {
            return t;
          } else {
            return e;
          }
        }
        function ra(e, t, r, n, a, i) {
          if (nc(e) && nc(t)) {
            i.set(t, e);
            Wn(e, t, o, ra, i);
            i.delete(t);
          }
          return e;
        }
        function na(e) {
          if (cc(e)) {
            return o;
          } else {
            return e;
          }
        }
        function oa(e, t, r, n, a, i) {
          var c = r & 1;
          var s = e.length;
          var l = t.length;
          if (s != l && (!c || !(l > s))) {
            return false;
          }
          var u = i.get(e);
          var f = i.get(t);
          if (u && f) {
            return u == t && f == e;
          }
          var d = -1;
          var h = true;
          var p = r & 2 ? new Vr() : o;
          i.set(e, t);
          i.set(t, e);
          while (++d < s) {
            var g = e[d];
            var y = t[d];
            if (n) {
              var v = c ? n(y, g, d, t, e, i) : n(g, y, d, e, t, i);
            }
            if (v !== o) {
              if (v) {
                continue;
              }
              h = false;
              break;
            }
            if (p) {
              if (!Lt(t, function (e, t) {
                if (!Xt(p, t) && (g === e || a(g, e, r, n, i))) {
                  return p.push(t);
                }
              })) {
                h = false;
                break;
              }
            } else if (g !== y && !a(g, y, r, n, i)) {
              h = false;
              break;
            }
          }
          i.delete(e);
          i.delete(t);
          return h;
        }
        function aa(e) {
          return Ta(Ba(e, o, Qa), e + "");
        }
        function ia(e) {
          return xn(e, Mc, ga);
        }
        function ca(e) {
          return xn(e, Tc, ya);
        }
        var sa = Dr ? function (e) {
          return Dr.get(e);
        } : fs;
        function la(e) {
          var t = e.name + "";
          var r = Fr[t];
          for (var n = Ie.call(Fr, t) ? r.length : 0; n--;) {
            var o = r[n];
            var a = o.func;
            if (a == null || a == e) {
              return o.name;
            }
          }
          return t;
        }
        function ua(e) {
          return (Ie.call(zr, "placeholder") ? zr : e).placeholder;
        }
        function fa() {
          var e = zr.iteratee || cs;
          e = e === cs ? Ln : e;
          if (arguments.length) {
            return e(arguments[0], arguments[1]);
          } else {
            return e;
          }
        }
        function da(e, t) {
          var r;
          var n;
          var o = e.__data__;
          if ((n = typeof (r = t)) == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null) {
            return o[typeof t == "string" ? "string" : "hash"];
          } else {
            return o.map;
          }
        }
        function ha(e) {
          var t = Mc(e);
          for (var r = t.length; r--;) {
            var n = t[r];
            var o = e[n];
            t[r] = [n, o, Sa(o)];
          }
          return t;
        }
        function pa(e, t) {
          var r = function (e, t) {
            if (e == null) {
              return o;
            } else {
              return e[t];
            }
          }(e, t);
          if (In(r)) {
            return r;
          } else {
            return o;
          }
        }
        var ga = bt ? function (e) {
          if (e == null) {
            return [];
          } else {
            e = Se(e);
            return jt(bt(e), function (t) {
              return Ve.call(e, t);
            });
          }
        } : bs;
        var ya = bt ? function (e) {
          var t = [];
          for (; e;) {
            Mt(t, ga(e));
            e = Ye(e);
          }
          return t;
        } : bs;
        var va = Sn;
        function ba(e, t, r) {
          for (var n = -1, o = (t = ko(t, e)).length, a = false; ++n < o;) {
            var i = Ra(t[n]);
            if (!(a = e != null && r(e, i))) {
              break;
            }
            e = e[i];
          }
          if (a || ++n != o) {
            return a;
          } else {
            return !!(o = e == null ? 0 : e.length) && rc(o) && _a(i, o) && (Yi(e) || qi(e));
          }
        }
        function ma(e) {
          if (typeof e.constructor != "function" || xa(e)) {
            return {};
          } else {
            return Hr(Ye(e));
          }
        }
        function wa(e) {
          return Yi(e) || qi(e) || !!Ke && !!e && !!e[Ke];
        }
        function _a(e, t) {
          var r = typeof e;
          return !!(t = t == null ? p : t) && (r == "number" || r != "symbol" && we.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function ka(e, t, r) {
          if (!nc(r)) {
            return false;
          }
          var n = typeof t;
          return !!(n == "number" ? Vi(r) && _a(t, r.length) : n == "string" && t in r) && Ni(r[t], e);
        }
        function Aa(e, t) {
          if (Yi(e)) {
            return false;
          }
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || !!fc(e) || re.test(e) || !te.test(e) || t != null && e in Se(t);
        }
        function Ea(e) {
          var t = la(e);
          var r = zr[t];
          if (typeof r != "function" || !(t in $r.prototype)) {
            return false;
          }
          if (e === r) {
            return true;
          }
          var n = sa(r);
          return !!n && e === n[0];
        }
        if (Cr && va(new Cr(new ArrayBuffer(1))) != T || xr && va(new xr()) != C || Sr && va(Sr.resolve()) != O || Or && va(new Or()) != j || Br && va(new Br()) != P) {
          va = function (e) {
            var t = Sn(e);
            var r = t == S ? e.constructor : o;
            var n = r ? za(r) : "";
            if (n) {
              switch (n) {
                case Pr:
                  return T;
                case Mr:
                  return C;
                case Tr:
                  return O;
                case Ir:
                  return j;
                case Lr:
                  return P;
              }
            }
            return t;
          };
        }
        var Ca = Me ? ec : ms;
        function xa(e) {
          var t = e && e.constructor;
          return e === (typeof t == "function" && t.prototype || Pe);
        }
        function Sa(e) {
          return e == e && !nc(e);
        }
        function Oa(e, t) {
          return function (r) {
            return r != null && r[e] === t && (t !== o || e in Se(r));
          };
        }
        function Ba(e, t, r) {
          t = mr(t === o ? e.length - 1 : t, 0);
          return function () {
            var o = arguments;
            for (var a = -1, i = mr(o.length - t, 0), c = n(i); ++a < i;) {
              c[a] = o[t + a];
            }
            a = -1;
            var s = n(t + 1);
            for (; ++a < t;) {
              s[a] = o[a];
            }
            s[t] = r(c);
            return Ct(e, this, s);
          };
        }
        function ja(e, t) {
          if (t.length < 2) {
            return e;
          } else {
            return Cn(e, ao(t, 0, -1));
          }
        }
        function Da(e, t) {
          var r = e.length;
          for (var n = wr(t.length, r), a = Fo(e); n--;) {
            var i = t[n];
            e[n] = _a(i, r) ? a[i] : o;
          }
          return e;
        }
        function Fa(e, t) {
          if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") {
            return e[t];
          }
        }
        var Pa = La(ro);
        var Ma = pt || function (e, t) {
          return ht.setTimeout(e, t);
        };
        var Ta = La(no);
        function Ia(e, t, r) {
          var n = t + "";
          return Ta(e, function (e, t) {
            var r = t.length;
            if (!r) {
              return e;
            }
            var n = r - 1;
            t[n] = (r > 1 ? "& " : "") + t[n];
            t = t.join(r > 2 ? ", " : " ");
            return e.replace(se, "{\n/* [wrapped with " + t + "] */\n");
          }(n, function (e, t) {
            St(v, function (r) {
              var n = "_." + r[0];
              if (t & r[1] && !Dt(e, n)) {
                e.push(n);
              }
            });
            return e.sort();
          }(function (e) {
            var t = e.match(le);
            if (t) {
              return t[1].split(ue);
            } else {
              return [];
            }
          }(n), r)));
        }
        function La(e) {
          var t = 0;
          var r = 0;
          return function () {
            var n = _r();
            var a = 16 - (n - r);
            r = n;
            if (a > 0) {
              if (++t >= 800) {
                return arguments[0];
              }
            } else {
              t = 0;
            }
            return e.apply(o, arguments);
          };
        }
        function Za(e, t) {
          var r = -1;
          var n = e.length;
          var a = n - 1;
          for (t = t === o ? n : t; ++r < t;) {
            var i = Gn(r, a);
            var c = e[i];
            e[i] = e[r];
            e[r] = c;
          }
          e.length = t;
          return e;
        }
        var Ua = function (e) {
          var t = Li(e, function (e) {
            if (r.size === 500) {
              r.clear();
            }
            return e;
          });
          var r = t.cache;
          return t;
        }(function (e) {
          var t = [];
          if (e.charCodeAt(0) === 46) {
            t.push("");
          }
          e.replace(ne, function (e, r, n, o) {
            t.push(n ? o.replace(he, "$1") : r || e);
          });
          return t;
        });
        function Ra(e) {
          if (typeof e == "string" || fc(e)) {
            return e;
          }
          var t = e + "";
          if (t == "0" && 1 / e == -Infinity) {
            return "-0";
          } else {
            return t;
          }
        }
        function za(e) {
          if (e != null) {
            try {
              return Te.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        }
        function Ha(e) {
          if (e instanceof $r) {
            return e.clone();
          }
          var t = new Wr(e.__wrapped__, e.__chain__);
          t.__actions__ = Fo(e.__actions__);
          t.__index__ = e.__index__;
          t.__values__ = e.__values__;
          return t;
        }
        var Na = Jn(function (e, t) {
          if (Gi(e)) {
            return hn(e, mn(t, 1, Gi, true));
          } else {
            return [];
          }
        });
        var Wa = Jn(function (e, t) {
          var r = Xa(t);
          if (Gi(r)) {
            r = o;
          }
          if (Gi(e)) {
            return hn(e, mn(t, 1, Gi, true), fa(r, 2));
          } else {
            return [];
          }
        });
        var $a = Jn(function (e, t) {
          var r = Xa(t);
          if (Gi(r)) {
            r = o;
          }
          if (Gi(e)) {
            return hn(e, mn(t, 1, Gi, true), o, r);
          } else {
            return [];
          }
        });
        function qa(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) {
            return -1;
          }
          var o = r == null ? 0 : vc(r);
          if (o < 0) {
            o = mr(n + o, 0);
          }
          return Rt(e, fa(t, 3), o);
        }
        function Ya(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) {
            return -1;
          }
          var a = n - 1;
          if (r !== o) {
            a = vc(r);
            a = r < 0 ? mr(n + a, 0) : wr(a, n - 1);
          }
          return Rt(e, fa(t, 3), a, true);
        }
        function Qa(e) {
          if (e == null ? 0 : e.length) {
            return mn(e, 1);
          } else {
            return [];
          }
        }
        function Va(e) {
          if (e && e.length) {
            return e[0];
          } else {
            return o;
          }
        }
        var Ga = Jn(function (e) {
          var t = Pt(e, wo);
          if (t.length && t[0] === e[0]) {
            return Dn(t);
          } else {
            return [];
          }
        });
        var Ka = Jn(function (e) {
          var t = Xa(e);
          var r = Pt(e, wo);
          if (t === Xa(r)) {
            t = o;
          } else {
            r.pop();
          }
          if (r.length && r[0] === e[0]) {
            return Dn(r, fa(t, 2));
          } else {
            return [];
          }
        });
        var Ja = Jn(function (e) {
          var t = Xa(e);
          var r = Pt(e, wo);
          if (t = typeof t == "function" ? t : o) {
            r.pop();
          }
          if (r.length && r[0] === e[0]) {
            return Dn(r, o, t);
          } else {
            return [];
          }
        });
        function Xa(e) {
          var t = e == null ? 0 : e.length;
          if (t) {
            return e[t - 1];
          } else {
            return o;
          }
        }
        var ei = Jn(ti);
        function ti(e, t) {
          if (e && e.length && t && t.length) {
            return Qn(e, t);
          } else {
            return e;
          }
        }
        var ri = aa(function (e, t) {
          var r = e == null ? 0 : e.length;
          var n = sn(e, t);
          Vn(e, Pt(t, function (e) {
            if (_a(e, r)) {
              return +e;
            } else {
              return e;
            }
          }).sort(Bo));
          return n;
        });
        function ni(e) {
          if (e == null) {
            return e;
          } else {
            return Er.call(e);
          }
        }
        var oi = Jn(function (e) {
          return ho(mn(e, 1, Gi, true));
        });
        var ai = Jn(function (e) {
          var t = Xa(e);
          if (Gi(t)) {
            t = o;
          }
          return ho(mn(e, 1, Gi, true), fa(t, 2));
        });
        var ii = Jn(function (e) {
          var t = Xa(e);
          t = typeof t == "function" ? t : o;
          return ho(mn(e, 1, Gi, true), o, t);
        });
        function ci(e) {
          if (!e || !e.length) {
            return [];
          }
          var t = 0;
          e = jt(e, function (e) {
            if (Gi(e)) {
              t = mr(e.length, t);
              return true;
            }
          });
          return Vt(t, function (t) {
            return Pt(e, $t(t));
          });
        }
        function si(e, t) {
          if (!e || !e.length) {
            return [];
          }
          var r = ci(e);
          if (t == null) {
            return r;
          } else {
            return Pt(r, function (e) {
              return Ct(t, o, e);
            });
          }
        }
        var li = Jn(function (e, t) {
          if (Gi(e)) {
            return hn(e, t);
          } else {
            return [];
          }
        });
        var ui = Jn(function (e) {
          return bo(jt(e, Gi));
        });
        var fi = Jn(function (e) {
          var t = Xa(e);
          if (Gi(t)) {
            t = o;
          }
          return bo(jt(e, Gi), fa(t, 2));
        });
        var di = Jn(function (e) {
          var t = Xa(e);
          t = typeof t == "function" ? t : o;
          return bo(jt(e, Gi), o, t);
        });
        var hi = Jn(ci);
        var pi = Jn(function (e) {
          var t = e.length;
          var r = t > 1 ? e[t - 1] : o;
          r = typeof r == "function" ? (e.pop(), r) : o;
          return si(e, r);
        });
        function gi(e) {
          var t = zr(e);
          t.__chain__ = true;
          return t;
        }
        function yi(e, t) {
          return t(e);
        }
        var vi = aa(function (e) {
          var t = e.length;
          var r = t ? e[0] : 0;
          var n = this.__wrapped__;
          function a(t) {
            return sn(t, e);
          }
          if (!(t > 1) && !this.__actions__.length && n instanceof $r && _a(r)) {
            (n = n.slice(r, +r + (t ? 1 : 0))).__actions__.push({
              func: yi,
              args: [a],
              thisArg: o
            });
            return new Wr(n, this.__chain__).thru(function (e) {
              if (t && !e.length) {
                e.push(o);
              }
              return e;
            });
          } else {
            return this.thru(a);
          }
        });
        var bi = Mo(function (e, t, r) {
          if (Ie.call(e, r)) {
            ++e[r];
          } else {
            cn(e, r, 1);
          }
        });
        var mi = zo(qa);
        var wi = zo(Ya);
        function _i(e, t) {
          return (Yi(e) ? St : pn)(e, fa(t, 3));
        }
        function ki(e, t) {
          return (Yi(e) ? Ot : gn)(e, fa(t, 3));
        }
        var Ai = Mo(function (e, t, r) {
          if (Ie.call(e, r)) {
            e[r].push(t);
          } else {
            cn(e, r, [t]);
          }
        });
        var Ei = Jn(function (e, t, r) {
          var o = -1;
          var a = typeof t == "function";
          var i = Vi(e) ? n(e.length) : [];
          pn(e, function (e) {
            i[++o] = a ? Ct(t, e, r) : Fn(e, t, r);
          });
          return i;
        });
        var Ci = Mo(function (e, t, r) {
          cn(e, r, t);
        });
        function xi(e, t) {
          return (Yi(e) ? Pt : zn)(e, fa(t, 3));
        }
        var Si = Mo(function (e, t, r) {
          e[r ? 0 : 1].push(t);
        }, function () {
          return [[], []];
        });
        var Oi = Jn(function (e, t) {
          if (e == null) {
            return [];
          }
          var r = t.length;
          if (r > 1 && ka(e, t[0], t[1])) {
            t = [];
          } else if (r > 2 && ka(t[0], t[1], t[2])) {
            t = [t[0]];
          }
          return qn(e, mn(t, 1), []);
        });
        var Bi = dt || function () {
          return ht.Date.now();
        };
        function ji(e, t, r) {
          t = r ? o : t;
          t = e && t == null ? e.length : t;
          return ea(e, f, o, o, o, o, t);
        }
        function Di(e, t) {
          var r;
          if (typeof t != "function") {
            throw new je(a);
          }
          e = vc(e);
          return function () {
            if (--e > 0) {
              r = t.apply(this, arguments);
            }
            if (e <= 1) {
              t = o;
            }
            return r;
          };
        }
        var Fi = Jn(function (e, t, r) {
          var n = 1;
          if (r.length) {
            var o = lr(r, ua(Fi));
            n |= l;
          }
          return ea(e, n, t, r, o);
        });
        var Pi = Jn(function (e, t, r) {
          var n = 3;
          if (r.length) {
            var o = lr(r, ua(Pi));
            n |= l;
          }
          return ea(t, n, e, r, o);
        });
        function Mi(e, t, r) {
          var n;
          var i;
          var c;
          var s;
          var l;
          var u;
          var f = 0;
          var d = false;
          var h = false;
          var p = true;
          if (typeof e != "function") {
            throw new je(a);
          }
          function g(t) {
            var r = n;
            var a = i;
            n = i = o;
            f = t;
            return s = e.apply(a, r);
          }
          function y(e) {
            f = e;
            l = Ma(b, t);
            if (d) {
              return g(e);
            } else {
              return s;
            }
          }
          function v(e) {
            var r = e - u;
            return u === o || r >= t || r < 0 || h && e - f >= c;
          }
          function b() {
            var e = Bi();
            if (v(e)) {
              return m(e);
            }
            l = Ma(b, function (e) {
              var r = t - (e - u);
              if (h) {
                return wr(r, c - (e - f));
              } else {
                return r;
              }
            }(e));
          }
          function m(e) {
            l = o;
            if (p && n) {
              return g(e);
            } else {
              n = i = o;
              return s;
            }
          }
          function w() {
            var e = Bi();
            var r = v(e);
            n = arguments;
            i = this;
            u = e;
            if (r) {
              if (l === o) {
                return y(u);
              }
              if (h) {
                Co(l);
                l = Ma(b, t);
                return g(u);
              }
            }
            if (l === o) {
              l = Ma(b, t);
            }
            return s;
          }
          t = mc(t) || 0;
          if (nc(r)) {
            d = !!r.leading;
            c = (h = "maxWait" in r) ? mr(mc(r.maxWait) || 0, t) : c;
            p = "trailing" in r ? !!r.trailing : p;
          }
          w.cancel = function () {
            if (l !== o) {
              Co(l);
            }
            f = 0;
            n = u = i = l = o;
          };
          w.flush = function () {
            if (l === o) {
              return s;
            } else {
              return m(Bi());
            }
          };
          return w;
        }
        var Ti = Jn(function (e, t) {
          return dn(e, 1, t);
        });
        var Ii = Jn(function (e, t, r) {
          return dn(e, mc(t) || 0, r);
        });
        function Li(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function") {
            throw new je(a);
          }
          function r() {
            var n = arguments;
            var o = t ? t.apply(this, n) : n[0];
            var a = r.cache;
            if (a.has(o)) {
              return a.get(o);
            }
            var i = e.apply(this, n);
            r.cache = a.set(o, i) || a;
            return i;
          }
          r.cache = new (Li.Cache || Qr)();
          return r;
        }
        function Zi(e) {
          if (typeof e != "function") {
            throw new je(a);
          }
          return function () {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }
            return !e.apply(this, t);
          };
        }
        Li.Cache = Qr;
        var Ui = Ao(function (e, t) {
          var r = (t = t.length == 1 && Yi(t[0]) ? Pt(t[0], Kt(fa())) : Pt(mn(t, 1), Kt(fa()))).length;
          return Jn(function (n) {
            for (var o = -1, a = wr(n.length, r); ++o < a;) {
              n[o] = t[o].call(this, n[o]);
            }
            return Ct(e, this, n);
          });
        });
        var Ri = Jn(function (e, t) {
          var r = lr(t, ua(Ri));
          return ea(e, l, o, t, r);
        });
        var zi = Jn(function (e, t) {
          var r = lr(t, ua(zi));
          return ea(e, u, o, t, r);
        });
        var Hi = aa(function (e, t) {
          return ea(e, d, o, o, o, t);
        });
        function Ni(e, t) {
          return e === t || e != e && t != t;
        }
        var Wi = Vo(On);
        var $i = Vo(function (e, t) {
          return e >= t;
        });
        var qi = Pn(function () {
          return arguments;
        }()) ? Pn : function (e) {
          return oc(e) && Ie.call(e, "callee") && !Ve.call(e, "callee");
        };
        var Yi = n.isArray;
        var Qi = mt ? Kt(mt) : function (e) {
          return oc(e) && Sn(e) == M;
        };
        function Vi(e) {
          return e != null && rc(e.length) && !ec(e);
        }
        function Gi(e) {
          return oc(e) && Vi(e);
        }
        var Ki = Zt || ms;
        var Ji = wt ? Kt(wt) : function (e) {
          return oc(e) && Sn(e) == _;
        };
        function Xi(e) {
          if (!oc(e)) {
            return false;
          }
          var t = Sn(e);
          return t == k || t == "[object DOMException]" || typeof e.message == "string" && typeof e.name == "string" && !cc(e);
        }
        function ec(e) {
          if (!nc(e)) {
            return false;
          }
          var t = Sn(e);
          return t == A || t == E || t == "[object AsyncFunction]" || t == "[object Proxy]";
        }
        function tc(e) {
          return typeof e == "number" && e == vc(e);
        }
        function rc(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= p;
        }
        function nc(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function oc(e) {
          return e != null && typeof e == "object";
        }
        var ac = _t ? Kt(_t) : function (e) {
          return oc(e) && va(e) == C;
        };
        function ic(e) {
          return typeof e == "number" || oc(e) && Sn(e) == x;
        }
        function cc(e) {
          if (!oc(e) || Sn(e) != S) {
            return false;
          }
          var t = Ye(e);
          if (t === null) {
            return true;
          }
          var r = Ie.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && Te.call(r) == Re;
        }
        var sc = kt ? Kt(kt) : function (e) {
          return oc(e) && Sn(e) == B;
        };
        var lc = At ? Kt(At) : function (e) {
          return oc(e) && va(e) == j;
        };
        function uc(e) {
          return typeof e == "string" || !Yi(e) && oc(e) && Sn(e) == D;
        }
        function fc(e) {
          return typeof e == "symbol" || oc(e) && Sn(e) == F;
        }
        var dc = Et ? Kt(Et) : function (e) {
          return oc(e) && rc(e.length) && !!it[Sn(e)];
        };
        var hc = Vo(Rn);
        var pc = Vo(function (e, t) {
          return e <= t;
        });
        function gc(e) {
          if (!e) {
            return [];
          }
          if (Vi(e)) {
            if (uc(e)) {
              return hr(e);
            } else {
              return Fo(e);
            }
          }
          if (et && e[et]) {
            return function (e) {
              for (var t, r = []; !(t = e.next()).done;) {
                r.push(t.value);
              }
              return r;
            }(e[et]());
          }
          var t = va(e);
          return (t == C ? cr : t == j ? ur : Nc)(e);
        }
        function yc(e) {
          if (e) {
            if ((e = mc(e)) === h || e === -Infinity) {
              return (e < 0 ? -1 : 1) * 1.7976931348623157e+308;
            } else if (e == e) {
              return e;
            } else {
              return 0;
            }
          } else if (e === 0) {
            return e;
          } else {
            return 0;
          }
        }
        function vc(e) {
          var t = yc(e);
          var r = t % 1;
          if (t == t) {
            if (r) {
              return t - r;
            } else {
              return t;
            }
          } else {
            return 0;
          }
        }
        function bc(e) {
          if (e) {
            return ln(vc(e), 0, y);
          } else {
            return 0;
          }
        }
        function mc(e) {
          if (typeof e == "number") {
            return e;
          }
          if (fc(e)) {
            return g;
          }
          if (nc(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = nc(t) ? t + "" : t;
          }
          if (typeof e != "string") {
            if (e === 0) {
              return e;
            } else {
              return +e;
            }
          }
          e = Gt(e);
          var r = ve.test(e);
          if (r || me.test(e)) {
            return ut(e.slice(2), r ? 2 : 8);
          } else if (ye.test(e)) {
            return g;
          } else {
            return +e;
          }
        }
        function wc(e) {
          return Po(e, Tc(e));
        }
        function _c(e) {
          if (e == null) {
            return "";
          } else {
            return fo(e);
          }
        }
        var kc = To(function (e, t) {
          if (xa(t) || Vi(t)) {
            Po(t, Mc(t), e);
          } else {
            for (var r in t) {
              if (Ie.call(t, r)) {
                rn(e, r, t[r]);
              }
            }
          }
        });
        var Ac = To(function (e, t) {
          Po(t, Tc(t), e);
        });
        var Ec = To(function (e, t, r, n) {
          Po(t, Tc(t), e, n);
        });
        var Cc = To(function (e, t, r, n) {
          Po(t, Mc(t), e, n);
        });
        var xc = aa(sn);
        var Sc = Jn(function (e, t) {
          e = Se(e);
          var r = -1;
          var n = t.length;
          var a = n > 2 ? t[2] : o;
          for (a && ka(t[0], t[1], a) && (n = 1); ++r < n;) {
            var i = t[r];
            var c = Tc(i);
            for (var s = -1, l = c.length; ++s < l;) {
              var u = c[s];
              var f = e[u];
              if (f === o || Ni(f, Pe[u]) && !Ie.call(e, u)) {
                e[u] = i[u];
              }
            }
          }
          return e;
        });
        var Oc = Jn(function (e) {
          e.push(o, ra);
          return Ct(Lc, o, e);
        });
        function Bc(e, t, r) {
          var n = e == null ? o : Cn(e, t);
          if (n === o) {
            return r;
          } else {
            return n;
          }
        }
        function jc(e, t) {
          return e != null && ba(e, t, jn);
        }
        var Dc = Wo(function (e, t, r) {
          if (t != null && typeof t.toString != "function") {
            t = Ue.call(t);
          }
          e[t] = r;
        }, ns(is));
        var Fc = Wo(function (e, t, r) {
          if (t != null && typeof t.toString != "function") {
            t = Ue.call(t);
          }
          if (Ie.call(e, t)) {
            e[t].push(r);
          } else {
            e[t] = [r];
          }
        }, fa);
        var Pc = Jn(Fn);
        function Mc(e) {
          if (Vi(e)) {
            return Kr(e);
          } else {
            return Zn(e);
          }
        }
        function Tc(e) {
          if (Vi(e)) {
            return Kr(e, true);
          } else {
            return Un(e);
          }
        }
        var Ic = To(function (e, t, r) {
          Wn(e, t, r);
        });
        var Lc = To(function (e, t, r, n) {
          Wn(e, t, r, n);
        });
        var Zc = aa(function (e, t) {
          var r = {};
          if (e == null) {
            return r;
          }
          var n = false;
          t = Pt(t, function (t) {
            t = ko(t, e);
            n ||= t.length > 1;
            return t;
          });
          Po(e, ca(e), r);
          if (n) {
            r = un(r, 7, na);
          }
          for (var o = t.length; o--;) {
            po(r, t[o]);
          }
          return r;
        });
        var Uc = aa(function (e, t) {
          if (e == null) {
            return {};
          } else {
            return function (e, t) {
              return Yn(e, t, function (t, r) {
                return jc(e, r);
              });
            }(e, t);
          }
        });
        function Rc(e, t) {
          if (e == null) {
            return {};
          }
          var r = Pt(ca(e), function (e) {
            return [e];
          });
          t = fa(t);
          return Yn(e, r, function (e, r) {
            return t(e, r[0]);
          });
        }
        var zc = Xo(Mc);
        var Hc = Xo(Tc);
        function Nc(e) {
          if (e == null) {
            return [];
          } else {
            return Jt(e, Mc(e));
          }
        }
        var Wc = Uo(function (e, t, r) {
          t = t.toLowerCase();
          return e + (r ? $c(t) : t);
        });
        function $c(e) {
          return Xc(_c(e).toLowerCase());
        }
        function qc(e) {
          return (e = _c(e)) && e.replace(_e, nr).replace(Xe, "");
        }
        var Yc = Uo(function (e, t, r) {
          return e + (r ? "-" : "") + t.toLowerCase();
        });
        var Qc = Uo(function (e, t, r) {
          return e + (r ? " " : "") + t.toLowerCase();
        });
        var Vc = Zo("toLowerCase");
        var Gc = Uo(function (e, t, r) {
          return e + (r ? "_" : "") + t.toLowerCase();
        });
        var Kc = Uo(function (e, t, r) {
          return e + (r ? " " : "") + Xc(t);
        });
        var Jc = Uo(function (e, t, r) {
          return e + (r ? " " : "") + t.toUpperCase();
        });
        var Xc = Zo("toUpperCase");
        function es(e, t, r) {
          e = _c(e);
          if ((t = r ? o : t) === o) {
            if (function (e) {
              return nt.test(e);
            }(e)) {
              return function (e) {
                return e.match(tt) || [];
              }(e);
            } else {
              return function (e) {
                return e.match(fe) || [];
              }(e);
            }
          } else {
            return e.match(t) || [];
          }
        }
        var ts = Jn(function (e, t) {
          try {
            return Ct(e, o, t);
          } catch (e) {
            if (Xi(e)) {
              return e;
            } else {
              return new Ee(e);
            }
          }
        });
        var rs = aa(function (e, t) {
          St(t, function (t) {
            t = Ra(t);
            cn(e, t, Fi(e[t], e));
          });
          return e;
        });
        function ns(e) {
          return function () {
            return e;
          };
        }
        var os = Ho();
        var as = Ho(true);
        function is(e) {
          return e;
        }
        function cs(e) {
          return Ln(typeof e == "function" ? e : un(e, 1));
        }
        var ss = Jn(function (e, t) {
          return function (r) {
            return Fn(r, e, t);
          };
        });
        var ls = Jn(function (e, t) {
          return function (r) {
            return Fn(e, r, t);
          };
        });
        function us(e, t, r) {
          var n = Mc(t);
          var o = En(t, n);
          if (r == null && (!nc(t) || !o.length && !!n.length)) {
            r = t;
            t = e;
            e = this;
            o = En(t, Mc(t));
          }
          var a = !nc(r) || !("chain" in r) || !!r.chain;
          var i = ec(e);
          St(o, function (r) {
            var n = t[r];
            e[r] = n;
            if (i) {
              e.prototype[r] = function () {
                var t = this.__chain__;
                if (a || t) {
                  var r = e(this.__wrapped__);
                  var o = r.__actions__ = Fo(this.__actions__);
                  o.push({
                    func: n,
                    args: arguments,
                    thisArg: e
                  });
                  r.__chain__ = t;
                  return r;
                }
                return n.apply(e, Mt([this.value()], arguments));
              };
            }
          });
          return e;
        }
        function fs() {}
        var ds = qo(Pt);
        var hs = qo(Bt);
        var ps = qo(Lt);
        function gs(e) {
          if (Aa(e)) {
            return $t(Ra(e));
          } else {
            return function (e) {
              return function (t) {
                return Cn(t, e);
              };
            }(e);
          }
        }
        var ys = Qo();
        var vs = Qo(true);
        function bs() {
          return [];
        }
        function ms() {
          return false;
        }
        var ws = $o(function (e, t) {
          return e + t;
        }, 0);
        var _s = Ko("ceil");
        var ks = $o(function (e, t) {
          return e / t;
        }, 1);
        var As = Ko("floor");
        var Es;
        var Cs = $o(function (e, t) {
          return e * t;
        }, 1);
        var xs = Ko("round");
        var Ss = $o(function (e, t) {
          return e - t;
        }, 0);
        zr.after = function (e, t) {
          if (typeof t != "function") {
            throw new je(a);
          }
          e = vc(e);
          return function () {
            if (--e < 1) {
              return t.apply(this, arguments);
            }
          };
        };
        zr.ary = ji;
        zr.assign = kc;
        zr.assignIn = Ac;
        zr.assignInWith = Ec;
        zr.assignWith = Cc;
        zr.at = xc;
        zr.before = Di;
        zr.bind = Fi;
        zr.bindAll = rs;
        zr.bindKey = Pi;
        zr.castArray = function () {
          if (!arguments.length) {
            return [];
          }
          var e = arguments[0];
          if (Yi(e)) {
            return e;
          } else {
            return [e];
          }
        };
        zr.chain = gi;
        zr.chunk = function (e, t, r) {
          t = (r ? ka(e, t, r) : t === o) ? 1 : mr(vc(t), 0);
          var a = e == null ? 0 : e.length;
          if (!a || t < 1) {
            return [];
          }
          for (var i = 0, c = 0, s = n(gt(a / t)); i < a;) {
            s[c++] = ao(e, i, i += t);
          }
          return s;
        };
        zr.compact = function (e) {
          for (var t = -1, r = e == null ? 0 : e.length, n = 0, o = []; ++t < r;) {
            var a = e[t];
            if (a) {
              o[n++] = a;
            }
          }
          return o;
        };
        zr.concat = function () {
          var e = arguments.length;
          if (!e) {
            return [];
          }
          var t = n(e - 1);
          var r = arguments[0];
          for (var o = e; o--;) {
            t[o - 1] = arguments[o];
          }
          return Mt(Yi(r) ? Fo(r) : [r], mn(t, 1));
        };
        zr.cond = function (e) {
          var t = e == null ? 0 : e.length;
          var r = fa();
          e = t ? Pt(e, function (e) {
            if (typeof e[1] != "function") {
              throw new je(a);
            }
            return [r(e[0]), e[1]];
          }) : [];
          return Jn(function (r) {
            for (var n = -1; ++n < t;) {
              var o = e[n];
              if (Ct(o[0], this, r)) {
                return Ct(o[1], this, r);
              }
            }
          });
        };
        zr.conforms = function (e) {
          return function (e) {
            var t = Mc(e);
            return function (r) {
              return fn(r, e, t);
            };
          }(un(e, 1));
        };
        zr.constant = ns;
        zr.countBy = bi;
        zr.create = function (e, t) {
          var r = Hr(e);
          if (t == null) {
            return r;
          } else {
            return an(r, t);
          }
        };
        zr.curry = function e(t, r, n) {
          var a = ea(t, 8, o, o, o, o, o, r = n ? o : r);
          a.placeholder = e.placeholder;
          return a;
        };
        zr.curryRight = function e(t, r, n) {
          var a = ea(t, s, o, o, o, o, o, r = n ? o : r);
          a.placeholder = e.placeholder;
          return a;
        };
        zr.debounce = Mi;
        zr.defaults = Sc;
        zr.defaultsDeep = Oc;
        zr.defer = Ti;
        zr.delay = Ii;
        zr.difference = Na;
        zr.differenceBy = Wa;
        zr.differenceWith = $a;
        zr.drop = function (e, t, r) {
          var n = e == null ? 0 : e.length;
          if (n) {
            return ao(e, (t = r || t === o ? 1 : vc(t)) < 0 ? 0 : t, n);
          } else {
            return [];
          }
        };
        zr.dropRight = function (e, t, r) {
          var n = e == null ? 0 : e.length;
          if (n) {
            return ao(e, 0, (t = n - (t = r || t === o ? 1 : vc(t))) < 0 ? 0 : t);
          } else {
            return [];
          }
        };
        zr.dropRightWhile = function (e, t) {
          if (e && e.length) {
            return yo(e, fa(t, 3), true, true);
          } else {
            return [];
          }
        };
        zr.dropWhile = function (e, t) {
          if (e && e.length) {
            return yo(e, fa(t, 3), true);
          } else {
            return [];
          }
        };
        zr.fill = function (e, t, r, n) {
          var a = e == null ? 0 : e.length;
          if (a) {
            if (r && typeof r != "number" && ka(e, t, r)) {
              r = 0;
              n = a;
            }
            return function (e, t, r, n) {
              var a = e.length;
              if ((r = vc(r)) < 0) {
                r = -r > a ? 0 : a + r;
              }
              if ((n = n === o || n > a ? a : vc(n)) < 0) {
                n += a;
              }
              n = r > n ? 0 : bc(n);
              while (r < n) {
                e[r++] = t;
              }
              return e;
            }(e, t, r, n);
          } else {
            return [];
          }
        };
        zr.filter = function (e, t) {
          return (Yi(e) ? jt : bn)(e, fa(t, 3));
        };
        zr.flatMap = function (e, t) {
          return mn(xi(e, t), 1);
        };
        zr.flatMapDeep = function (e, t) {
          return mn(xi(e, t), h);
        };
        zr.flatMapDepth = function (e, t, r) {
          r = r === o ? 1 : vc(r);
          return mn(xi(e, t), r);
        };
        zr.flatten = Qa;
        zr.flattenDeep = function (e) {
          if (e == null ? 0 : e.length) {
            return mn(e, h);
          } else {
            return [];
          }
        };
        zr.flattenDepth = function (e, t) {
          if (e == null ? 0 : e.length) {
            return mn(e, t = t === o ? 1 : vc(t));
          } else {
            return [];
          }
        };
        zr.flip = function (e) {
          return ea(e, 512);
        };
        zr.flow = os;
        zr.flowRight = as;
        zr.fromPairs = function (e) {
          for (var t = -1, r = e == null ? 0 : e.length, n = {}; ++t < r;) {
            var o = e[t];
            n[o[0]] = o[1];
          }
          return n;
        };
        zr.functions = function (e) {
          if (e == null) {
            return [];
          } else {
            return En(e, Mc(e));
          }
        };
        zr.functionsIn = function (e) {
          if (e == null) {
            return [];
          } else {
            return En(e, Tc(e));
          }
        };
        zr.groupBy = Ai;
        zr.initial = function (e) {
          if (e == null ? 0 : e.length) {
            return ao(e, 0, -1);
          } else {
            return [];
          }
        };
        zr.intersection = Ga;
        zr.intersectionBy = Ka;
        zr.intersectionWith = Ja;
        zr.invert = Dc;
        zr.invertBy = Fc;
        zr.invokeMap = Ei;
        zr.iteratee = cs;
        zr.keyBy = Ci;
        zr.keys = Mc;
        zr.keysIn = Tc;
        zr.map = xi;
        zr.mapKeys = function (e, t) {
          var r = {};
          t = fa(t, 3);
          kn(e, function (e, n, o) {
            cn(r, t(e, n, o), e);
          });
          return r;
        };
        zr.mapValues = function (e, t) {
          var r = {};
          t = fa(t, 3);
          kn(e, function (e, n, o) {
            cn(r, n, t(e, n, o));
          });
          return r;
        };
        zr.matches = function (e) {
          return Hn(un(e, 1));
        };
        zr.matchesProperty = function (e, t) {
          return Nn(e, un(t, 1));
        };
        zr.memoize = Li;
        zr.merge = Ic;
        zr.mergeWith = Lc;
        zr.method = ss;
        zr.methodOf = ls;
        zr.mixin = us;
        zr.negate = Zi;
        zr.nthArg = function (e) {
          e = vc(e);
          return Jn(function (t) {
            return $n(t, e);
          });
        };
        zr.omit = Zc;
        zr.omitBy = function (e, t) {
          return Rc(e, Zi(fa(t)));
        };
        zr.once = function (e) {
          return Di(2, e);
        };
        zr.orderBy = function (e, t, r, n) {
          if (e == null) {
            return [];
          } else {
            if (!Yi(t)) {
              t = t == null ? [] : [t];
            }
            if (!Yi(r = n ? o : r)) {
              r = r == null ? [] : [r];
            }
            return qn(e, t, r);
          }
        };
        zr.over = ds;
        zr.overArgs = Ui;
        zr.overEvery = hs;
        zr.overSome = ps;
        zr.partial = Ri;
        zr.partialRight = zi;
        zr.partition = Si;
        zr.pick = Uc;
        zr.pickBy = Rc;
        zr.property = gs;
        zr.propertyOf = function (e) {
          return function (t) {
            if (e == null) {
              return o;
            } else {
              return Cn(e, t);
            }
          };
        };
        zr.pull = ei;
        zr.pullAll = ti;
        zr.pullAllBy = function (e, t, r) {
          if (e && e.length && t && t.length) {
            return Qn(e, t, fa(r, 2));
          } else {
            return e;
          }
        };
        zr.pullAllWith = function (e, t, r) {
          if (e && e.length && t && t.length) {
            return Qn(e, t, o, r);
          } else {
            return e;
          }
        };
        zr.pullAt = ri;
        zr.range = ys;
        zr.rangeRight = vs;
        zr.rearg = Hi;
        zr.reject = function (e, t) {
          return (Yi(e) ? jt : bn)(e, Zi(fa(t, 3)));
        };
        zr.remove = function (e, t) {
          var r = [];
          if (!e || !e.length) {
            return r;
          }
          var n = -1;
          var o = [];
          var a = e.length;
          for (t = fa(t, 3); ++n < a;) {
            var i = e[n];
            if (t(i, n, e)) {
              r.push(i);
              o.push(n);
            }
          }
          Vn(e, o);
          return r;
        };
        zr.rest = function (e, t) {
          if (typeof e != "function") {
            throw new je(a);
          }
          return Jn(e, t = t === o ? t : vc(t));
        };
        zr.reverse = ni;
        zr.sampleSize = function (e, t, r) {
          t = (r ? ka(e, t, r) : t === o) ? 1 : vc(t);
          return (Yi(e) ? Xr : eo)(e, t);
        };
        zr.set = function (e, t, r) {
          if (e == null) {
            return e;
          } else {
            return to(e, t, r);
          }
        };
        zr.setWith = function (e, t, r, n) {
          n = typeof n == "function" ? n : o;
          if (e == null) {
            return e;
          } else {
            return to(e, t, r, n);
          }
        };
        zr.shuffle = function (e) {
          return (Yi(e) ? en : oo)(e);
        };
        zr.slice = function (e, t, r) {
          var n = e == null ? 0 : e.length;
          if (n) {
            if (r && typeof r != "number" && ka(e, t, r)) {
              t = 0;
              r = n;
            } else {
              t = t == null ? 0 : vc(t);
              r = r === o ? n : vc(r);
            }
            return ao(e, t, r);
          } else {
            return [];
          }
        };
        zr.sortBy = Oi;
        zr.sortedUniq = function (e) {
          if (e && e.length) {
            return lo(e);
          } else {
            return [];
          }
        };
        zr.sortedUniqBy = function (e, t) {
          if (e && e.length) {
            return lo(e, fa(t, 2));
          } else {
            return [];
          }
        };
        zr.split = function (e, t, r) {
          if (r && typeof r != "number" && ka(e, t, r)) {
            t = r = o;
          }
          if (r = r === o ? y : r >>> 0) {
            if ((e = _c(e)) && (typeof t == "string" || t != null && !sc(t)) && !(t = fo(t)) && ir(e)) {
              return Eo(hr(e), 0, r);
            } else {
              return e.split(t, r);
            }
          } else {
            return [];
          }
        };
        zr.spread = function (e, t) {
          if (typeof e != "function") {
            throw new je(a);
          }
          t = t == null ? 0 : mr(vc(t), 0);
          return Jn(function (r) {
            var n = r[t];
            var o = Eo(r, 0, t);
            if (n) {
              Mt(o, n);
            }
            return Ct(e, this, o);
          });
        };
        zr.tail = function (e) {
          var t = e == null ? 0 : e.length;
          if (t) {
            return ao(e, 1, t);
          } else {
            return [];
          }
        };
        zr.take = function (e, t, r) {
          if (e && e.length) {
            return ao(e, 0, (t = r || t === o ? 1 : vc(t)) < 0 ? 0 : t);
          } else {
            return [];
          }
        };
        zr.takeRight = function (e, t, r) {
          var n = e == null ? 0 : e.length;
          if (n) {
            return ao(e, (t = n - (t = r || t === o ? 1 : vc(t))) < 0 ? 0 : t, n);
          } else {
            return [];
          }
        };
        zr.takeRightWhile = function (e, t) {
          if (e && e.length) {
            return yo(e, fa(t, 3), false, true);
          } else {
            return [];
          }
        };
        zr.takeWhile = function (e, t) {
          if (e && e.length) {
            return yo(e, fa(t, 3));
          } else {
            return [];
          }
        };
        zr.tap = function (e, t) {
          t(e);
          return e;
        };
        zr.throttle = function (e, t, r) {
          var n = true;
          var o = true;
          if (typeof e != "function") {
            throw new je(a);
          }
          if (nc(r)) {
            n = "leading" in r ? !!r.leading : n;
            o = "trailing" in r ? !!r.trailing : o;
          }
          return Mi(e, t, {
            leading: n,
            maxWait: t,
            trailing: o
          });
        };
        zr.thru = yi;
        zr.toArray = gc;
        zr.toPairs = zc;
        zr.toPairsIn = Hc;
        zr.toPath = function (e) {
          if (Yi(e)) {
            return Pt(e, Ra);
          } else if (fc(e)) {
            return [e];
          } else {
            return Fo(Ua(_c(e)));
          }
        };
        zr.toPlainObject = wc;
        zr.transform = function (e, t, r) {
          var n = Yi(e);
          var o = n || Ki(e) || dc(e);
          t = fa(t, 4);
          if (r == null) {
            var a = e && e.constructor;
            r = o ? n ? new a() : [] : nc(e) && ec(a) ? Hr(Ye(e)) : {};
          }
          (o ? St : kn)(e, function (e, n, o) {
            return t(r, e, n, o);
          });
          return r;
        };
        zr.unary = function (e) {
          return ji(e, 1);
        };
        zr.union = oi;
        zr.unionBy = ai;
        zr.unionWith = ii;
        zr.uniq = function (e) {
          if (e && e.length) {
            return ho(e);
          } else {
            return [];
          }
        };
        zr.uniqBy = function (e, t) {
          if (e && e.length) {
            return ho(e, fa(t, 2));
          } else {
            return [];
          }
        };
        zr.uniqWith = function (e, t) {
          t = typeof t == "function" ? t : o;
          if (e && e.length) {
            return ho(e, o, t);
          } else {
            return [];
          }
        };
        zr.unset = function (e, t) {
          return e == null || po(e, t);
        };
        zr.unzip = ci;
        zr.unzipWith = si;
        zr.update = function (e, t, r) {
          if (e == null) {
            return e;
          } else {
            return go(e, t, _o(r));
          }
        };
        zr.updateWith = function (e, t, r, n) {
          n = typeof n == "function" ? n : o;
          if (e == null) {
            return e;
          } else {
            return go(e, t, _o(r), n);
          }
        };
        zr.values = Nc;
        zr.valuesIn = function (e) {
          if (e == null) {
            return [];
          } else {
            return Jt(e, Tc(e));
          }
        };
        zr.without = li;
        zr.words = es;
        zr.wrap = function (e, t) {
          return Ri(_o(t), e);
        };
        zr.xor = ui;
        zr.xorBy = fi;
        zr.xorWith = di;
        zr.zip = hi;
        zr.zipObject = function (e, t) {
          return mo(e || [], t || [], rn);
        };
        zr.zipObjectDeep = function (e, t) {
          return mo(e || [], t || [], to);
        };
        zr.zipWith = pi;
        zr.entries = zc;
        zr.entriesIn = Hc;
        zr.extend = Ac;
        zr.extendWith = Ec;
        us(zr, zr);
        zr.add = ws;
        zr.attempt = ts;
        zr.camelCase = Wc;
        zr.capitalize = $c;
        zr.ceil = _s;
        zr.clamp = function (e, t, r) {
          if (r === o) {
            r = t;
            t = o;
          }
          if (r !== o) {
            r = (r = mc(r)) == r ? r : 0;
          }
          if (t !== o) {
            t = (t = mc(t)) == t ? t : 0;
          }
          return ln(mc(e), t, r);
        };
        zr.clone = function (e) {
          return un(e, 4);
        };
        zr.cloneDeep = function (e) {
          return un(e, 5);
        };
        zr.cloneDeepWith = function (e, t) {
          return un(e, 5, t = typeof t == "function" ? t : o);
        };
        zr.cloneWith = function (e, t) {
          return un(e, 4, t = typeof t == "function" ? t : o);
        };
        zr.conformsTo = function (e, t) {
          return t == null || fn(e, t, Mc(t));
        };
        zr.deburr = qc;
        zr.defaultTo = function (e, t) {
          if (e == null || e != e) {
            return t;
          } else {
            return e;
          }
        };
        zr.divide = ks;
        zr.endsWith = function (e, t, r) {
          e = _c(e);
          t = fo(t);
          var n = e.length;
          var a = r = r === o ? n : ln(vc(r), 0, n);
          return (r -= t.length) >= 0 && e.slice(r, a) == t;
        };
        zr.eq = Ni;
        zr.escape = function (e) {
          if ((e = _c(e)) && K.test(e)) {
            return e.replace(V, or);
          } else {
            return e;
          }
        };
        zr.escapeRegExp = function (e) {
          if ((e = _c(e)) && ae.test(e)) {
            return e.replace(oe, "\\$&");
          } else {
            return e;
          }
        };
        zr.every = function (e, t, r) {
          var n = Yi(e) ? Bt : yn;
          if (r && ka(e, t, r)) {
            t = o;
          }
          return n(e, fa(t, 3));
        };
        zr.find = mi;
        zr.findIndex = qa;
        zr.findKey = function (e, t) {
          return Ut(e, fa(t, 3), kn);
        };
        zr.findLast = wi;
        zr.findLastIndex = Ya;
        zr.findLastKey = function (e, t) {
          return Ut(e, fa(t, 3), An);
        };
        zr.floor = As;
        zr.forEach = _i;
        zr.forEachRight = ki;
        zr.forIn = function (e, t) {
          if (e == null) {
            return e;
          } else {
            return wn(e, fa(t, 3), Tc);
          }
        };
        zr.forInRight = function (e, t) {
          if (e == null) {
            return e;
          } else {
            return _n(e, fa(t, 3), Tc);
          }
        };
        zr.forOwn = function (e, t) {
          return e && kn(e, fa(t, 3));
        };
        zr.forOwnRight = function (e, t) {
          return e && An(e, fa(t, 3));
        };
        zr.get = Bc;
        zr.gt = Wi;
        zr.gte = $i;
        zr.has = function (e, t) {
          return e != null && ba(e, t, Bn);
        };
        zr.hasIn = jc;
        zr.head = Va;
        zr.identity = is;
        zr.includes = function (e, t, r, n) {
          e = Vi(e) ? e : Nc(e);
          r = r && !n ? vc(r) : 0;
          var o = e.length;
          if (r < 0) {
            r = mr(o + r, 0);
          }
          if (uc(e)) {
            return r <= o && e.indexOf(t, r) > -1;
          } else {
            return !!o && zt(e, t, r) > -1;
          }
        };
        zr.indexOf = function (e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) {
            return -1;
          }
          var o = r == null ? 0 : vc(r);
          if (o < 0) {
            o = mr(n + o, 0);
          }
          return zt(e, t, o);
        };
        zr.inRange = function (e, t, r) {
          t = yc(t);
          if (r === o) {
            r = t;
            t = 0;
          } else {
            r = yc(r);
          }
          return function (e, t, r) {
            return e >= wr(t, r) && e < mr(t, r);
          }(e = mc(e), t, r);
        };
        zr.invoke = Pc;
        zr.isArguments = qi;
        zr.isArray = Yi;
        zr.isArrayBuffer = Qi;
        zr.isArrayLike = Vi;
        zr.isArrayLikeObject = Gi;
        zr.isBoolean = function (e) {
          return e === true || e === false || oc(e) && Sn(e) == w;
        };
        zr.isBuffer = Ki;
        zr.isDate = Ji;
        zr.isElement = function (e) {
          return oc(e) && e.nodeType === 1 && !cc(e);
        };
        zr.isEmpty = function (e) {
          if (e == null) {
            return true;
          }
          if (Vi(e) && (Yi(e) || typeof e == "string" || typeof e.splice == "function" || Ki(e) || dc(e) || qi(e))) {
            return !e.length;
          }
          var t = va(e);
          if (t == C || t == j) {
            return !e.size;
          }
          if (xa(e)) {
            return !Zn(e).length;
          }
          for (var r in e) {
            if (Ie.call(e, r)) {
              return false;
            }
          }
          return true;
        };
        zr.isEqual = function (e, t) {
          return Mn(e, t);
        };
        zr.isEqualWith = function (e, t, r) {
          var n = (r = typeof r == "function" ? r : o) ? r(e, t) : o;
          if (n === o) {
            return Mn(e, t, o, r);
          } else {
            return !!n;
          }
        };
        zr.isError = Xi;
        zr.isFinite = function (e) {
          return typeof e == "number" && qt(e);
        };
        zr.isFunction = ec;
        zr.isInteger = tc;
        zr.isLength = rc;
        zr.isMap = ac;
        zr.isMatch = function (e, t) {
          return e === t || Tn(e, t, ha(t));
        };
        zr.isMatchWith = function (e, t, r) {
          r = typeof r == "function" ? r : o;
          return Tn(e, t, ha(t), r);
        };
        zr.isNaN = function (e) {
          return ic(e) && e != +e;
        };
        zr.isNative = function (e) {
          if (Ca(e)) {
            throw new Ee("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
          }
          return In(e);
        };
        zr.isNil = function (e) {
          return e == null;
        };
        zr.isNull = function (e) {
          return e === null;
        };
        zr.isNumber = ic;
        zr.isObject = nc;
        zr.isObjectLike = oc;
        zr.isPlainObject = cc;
        zr.isRegExp = sc;
        zr.isSafeInteger = function (e) {
          return tc(e) && e >= -9007199254740991 && e <= p;
        };
        zr.isSet = lc;
        zr.isString = uc;
        zr.isSymbol = fc;
        zr.isTypedArray = dc;
        zr.isUndefined = function (e) {
          return e === o;
        };
        zr.isWeakMap = function (e) {
          return oc(e) && va(e) == P;
        };
        zr.isWeakSet = function (e) {
          return oc(e) && Sn(e) == "[object WeakSet]";
        };
        zr.join = function (e, t) {
          if (e == null) {
            return "";
          } else {
            return vr.call(e, t);
          }
        };
        zr.kebabCase = Yc;
        zr.last = Xa;
        zr.lastIndexOf = function (e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) {
            return -1;
          }
          var a = n;
          if (r !== o) {
            a = (a = vc(r)) < 0 ? mr(n + a, 0) : wr(a, n - 1);
          }
          if (t == t) {
            return function (e, t, r) {
              for (var n = r + 1; n--;) {
                if (e[n] === t) {
                  return n;
                }
              }
              return n;
            }(e, t, a);
          } else {
            return Rt(e, Nt, a, true);
          }
        };
        zr.lowerCase = Qc;
        zr.lowerFirst = Vc;
        zr.lt = hc;
        zr.lte = pc;
        zr.max = function (e) {
          if (e && e.length) {
            return vn(e, is, On);
          } else {
            return o;
          }
        };
        zr.maxBy = function (e, t) {
          if (e && e.length) {
            return vn(e, fa(t, 2), On);
          } else {
            return o;
          }
        };
        zr.mean = function (e) {
          return Wt(e, is);
        };
        zr.meanBy = function (e, t) {
          return Wt(e, fa(t, 2));
        };
        zr.min = function (e) {
          if (e && e.length) {
            return vn(e, is, Rn);
          } else {
            return o;
          }
        };
        zr.minBy = function (e, t) {
          if (e && e.length) {
            return vn(e, fa(t, 2), Rn);
          } else {
            return o;
          }
        };
        zr.stubArray = bs;
        zr.stubFalse = ms;
        zr.stubObject = function () {
          return {};
        };
        zr.stubString = function () {
          return "";
        };
        zr.stubTrue = function () {
          return true;
        };
        zr.multiply = Cs;
        zr.nth = function (e, t) {
          if (e && e.length) {
            return $n(e, vc(t));
          } else {
            return o;
          }
        };
        zr.noConflict = function () {
          if (ht._ === this) {
            ht._ = ze;
          }
          return this;
        };
        zr.noop = fs;
        zr.now = Bi;
        zr.pad = function (e, t, r) {
          e = _c(e);
          var n = (t = vc(t)) ? dr(e) : 0;
          if (!t || n >= t) {
            return e;
          }
          var o = (t - n) / 2;
          return Yo(vt(o), r) + e + Yo(gt(o), r);
        };
        zr.padEnd = function (e, t, r) {
          e = _c(e);
          var n = (t = vc(t)) ? dr(e) : 0;
          if (t && n < t) {
            return e + Yo(t - n, r);
          } else {
            return e;
          }
        };
        zr.padStart = function (e, t, r) {
          e = _c(e);
          var n = (t = vc(t)) ? dr(e) : 0;
          if (t && n < t) {
            return Yo(t - n, r) + e;
          } else {
            return e;
          }
        };
        zr.parseInt = function (e, t, r) {
          if (r || t == null) {
            t = 0;
          } else {
            t &&= +t;
          }
          return kr(_c(e).replace(ie, ""), t || 0);
        };
        zr.random = function (e, t, r) {
          if (r && typeof r != "boolean" && ka(e, t, r)) {
            t = r = o;
          }
          if (r === o) {
            if (typeof t == "boolean") {
              r = t;
              t = o;
            } else if (typeof e == "boolean") {
              r = e;
              e = o;
            }
          }
          if (e === o && t === o) {
            e = 0;
            t = 1;
          } else {
            e = yc(e);
            if (t === o) {
              t = e;
              e = 0;
            } else {
              t = yc(t);
            }
          }
          if (e > t) {
            var n = e;
            e = t;
            t = n;
          }
          if (r || e % 1 || t % 1) {
            var a = Ar();
            return wr(e + a * (t - e + lt("1e-" + ((a + "").length - 1))), t);
          }
          return Gn(e, t);
        };
        zr.reduce = function (e, t, r) {
          var n = Yi(e) ? Tt : Yt;
          var o = arguments.length < 3;
          return n(e, fa(t, 4), r, o, pn);
        };
        zr.reduceRight = function (e, t, r) {
          var n = Yi(e) ? It : Yt;
          var o = arguments.length < 3;
          return n(e, fa(t, 4), r, o, gn);
        };
        zr.repeat = function (e, t, r) {
          t = (r ? ka(e, t, r) : t === o) ? 1 : vc(t);
          return Kn(_c(e), t);
        };
        zr.replace = function () {
          var e = arguments;
          var t = _c(e[0]);
          if (e.length < 3) {
            return t;
          } else {
            return t.replace(e[1], e[2]);
          }
        };
        zr.result = function (e, t, r) {
          var n = -1;
          var a = (t = ko(t, e)).length;
          for (a || (a = 1, e = o); ++n < a;) {
            var i = e == null ? o : e[Ra(t[n])];
            if (i === o) {
              n = a;
              i = r;
            }
            e = ec(i) ? i.call(e) : i;
          }
          return e;
        };
        zr.round = xs;
        zr.runInContext = e;
        zr.sample = function (e) {
          return (Yi(e) ? Jr : Xn)(e);
        };
        zr.size = function (e) {
          if (e == null) {
            return 0;
          }
          if (Vi(e)) {
            if (uc(e)) {
              return dr(e);
            } else {
              return e.length;
            }
          }
          var t = va(e);
          if (t == C || t == j) {
            return e.size;
          } else {
            return Zn(e).length;
          }
        };
        zr.snakeCase = Gc;
        zr.some = function (e, t, r) {
          var n = Yi(e) ? Lt : io;
          if (r && ka(e, t, r)) {
            t = o;
          }
          return n(e, fa(t, 3));
        };
        zr.sortedIndex = function (e, t) {
          return co(e, t);
        };
        zr.sortedIndexBy = function (e, t, r) {
          return so(e, t, fa(r, 2));
        };
        zr.sortedIndexOf = function (e, t) {
          var r = e == null ? 0 : e.length;
          if (r) {
            var n = co(e, t);
            if (n < r && Ni(e[n], t)) {
              return n;
            }
          }
          return -1;
        };
        zr.sortedLastIndex = function (e, t) {
          return co(e, t, true);
        };
        zr.sortedLastIndexBy = function (e, t, r) {
          return so(e, t, fa(r, 2), true);
        };
        zr.sortedLastIndexOf = function (e, t) {
          if (e == null ? 0 : e.length) {
            var r = co(e, t, true) - 1;
            if (Ni(e[r], t)) {
              return r;
            }
          }
          return -1;
        };
        zr.startCase = Kc;
        zr.startsWith = function (e, t, r) {
          e = _c(e);
          r = r == null ? 0 : ln(vc(r), 0, e.length);
          t = fo(t);
          return e.slice(r, r + t.length) == t;
        };
        zr.subtract = Ss;
        zr.sum = function (e) {
          if (e && e.length) {
            return Qt(e, is);
          } else {
            return 0;
          }
        };
        zr.sumBy = function (e, t) {
          if (e && e.length) {
            return Qt(e, fa(t, 2));
          } else {
            return 0;
          }
        };
        zr.template = function (e, t, r) {
          var n = zr.templateSettings;
          if (r && ka(e, t, r)) {
            t = o;
          }
          e = _c(e);
          t = Ec({}, t, n, ta);
          var a;
          var i;
          var c = Ec({}, t.imports, n.imports, ta);
          var s = Mc(c);
          var l = Jt(c, s);
          var u = 0;
          var f = t.interpolate || ke;
          var d = "__p += '";
          var h = Oe((t.escape || ke).source + "|" + f.source + "|" + (f === ee ? pe : ke).source + "|" + (t.evaluate || ke).source + "|$", "g");
          var p = "//# sourceURL=" + (Ie.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++at + "]") + "\n";
          e.replace(h, function (t, r, n, o, c, s) {
            n ||= o;
            d += e.slice(u, s).replace(Ae, ar);
            if (r) {
              a = true;
              d += "' +\n__e(" + r + ") +\n'";
            }
            if (c) {
              i = true;
              d += "';\n" + c + ";\n__p += '";
            }
            if (n) {
              d += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'";
            }
            u = s + t.length;
            return t;
          });
          d += "';\n";
          var g = Ie.call(t, "variable") && t.variable;
          if (g) {
            if (de.test(g)) {
              throw new Ee("Invalid `variable` option passed into `_.template`");
            }
          } else {
            d = "with (obj) {\n" + d + "\n}\n";
          }
          d = (i ? d.replace($, "") : d).replace(q, "$1").replace(Y, "$1;");
          d = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
          var y = ts(function () {
            return Ce(s, p + "return " + d).apply(o, l);
          });
          y.source = d;
          if (Xi(y)) {
            throw y;
          }
          return y;
        };
        zr.times = function (e, t) {
          if ((e = vc(e)) < 1 || e > p) {
            return [];
          }
          var r = y;
          var n = wr(e, y);
          t = fa(t);
          e -= y;
          var o = Vt(n, t);
          for (; ++r < e;) {
            t(r);
          }
          return o;
        };
        zr.toFinite = yc;
        zr.toInteger = vc;
        zr.toLength = bc;
        zr.toLower = function (e) {
          return _c(e).toLowerCase();
        };
        zr.toNumber = mc;
        zr.toSafeInteger = function (e) {
          if (e) {
            return ln(vc(e), -9007199254740991, p);
          } else if (e === 0) {
            return e;
          } else {
            return 0;
          }
        };
        zr.toString = _c;
        zr.toUpper = function (e) {
          return _c(e).toUpperCase();
        };
        zr.trim = function (e, t, r) {
          if ((e = _c(e)) && (r || t === o)) {
            return Gt(e);
          }
          if (!e || !(t = fo(t))) {
            return e;
          }
          var n = hr(e);
          var a = hr(t);
          return Eo(n, er(n, a), tr(n, a) + 1).join("");
        };
        zr.trimEnd = function (e, t, r) {
          if ((e = _c(e)) && (r || t === o)) {
            return e.slice(0, pr(e) + 1);
          }
          if (!e || !(t = fo(t))) {
            return e;
          }
          var n = hr(e);
          return Eo(n, 0, tr(n, hr(t)) + 1).join("");
        };
        zr.trimStart = function (e, t, r) {
          if ((e = _c(e)) && (r || t === o)) {
            return e.replace(ie, "");
          }
          if (!e || !(t = fo(t))) {
            return e;
          }
          var n = hr(e);
          return Eo(n, er(n, hr(t))).join("");
        };
        zr.truncate = function (e, t) {
          var r = 30;
          var n = "...";
          if (nc(t)) {
            var a = "separator" in t ? t.separator : a;
            r = "length" in t ? vc(t.length) : r;
            n = "omission" in t ? fo(t.omission) : n;
          }
          var i = (e = _c(e)).length;
          if (ir(e)) {
            var c = hr(e);
            i = c.length;
          }
          if (r >= i) {
            return e;
          }
          var s = r - dr(n);
          if (s < 1) {
            return n;
          }
          var l = c ? Eo(c, 0, s).join("") : e.slice(0, s);
          if (a === o) {
            return l + n;
          }
          if (c) {
            s += l.length - s;
          }
          if (sc(a)) {
            if (e.slice(s).search(a)) {
              var u;
              var f = l;
              if (!a.global) {
                a = Oe(a.source, _c(ge.exec(a)) + "g");
              }
              a.lastIndex = 0;
              while (u = a.exec(f)) {
                var d = u.index;
              }
              l = l.slice(0, d === o ? s : d);
            }
          } else if (e.indexOf(fo(a), s) != s) {
            var h = l.lastIndexOf(a);
            if (h > -1) {
              l = l.slice(0, h);
            }
          }
          return l + n;
        };
        zr.unescape = function (e) {
          if ((e = _c(e)) && G.test(e)) {
            return e.replace(Q, gr);
          } else {
            return e;
          }
        };
        zr.uniqueId = function (e) {
          var t = ++Le;
          return _c(e) + t;
        };
        zr.upperCase = Jc;
        zr.upperFirst = Xc;
        zr.each = _i;
        zr.eachRight = ki;
        zr.first = Va;
        us(zr, (Es = {}, kn(zr, function (e, t) {
          if (!Ie.call(zr.prototype, t)) {
            Es[t] = e;
          }
        }), Es), {
          chain: false
        });
        zr.VERSION = "4.17.21";
        St(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
          zr[e].placeholder = zr;
        });
        St(["drop", "take"], function (e, t) {
          $r.prototype[e] = function (r) {
            r = r === o ? 1 : mr(vc(r), 0);
            var n = this.__filtered__ && !t ? new $r(this) : this.clone();
            if (n.__filtered__) {
              n.__takeCount__ = wr(r, n.__takeCount__);
            } else {
              n.__views__.push({
                size: wr(r, y),
                type: e + (n.__dir__ < 0 ? "Right" : "")
              });
            }
            return n;
          };
          $r.prototype[e + "Right"] = function (t) {
            return this.reverse()[e](t).reverse();
          };
        });
        St(["filter", "map", "takeWhile"], function (e, t) {
          var r = t + 1;
          var n = r == 1 || r == 3;
          $r.prototype[e] = function (e) {
            var t = this.clone();
            t.__iteratees__.push({
              iteratee: fa(e, 3),
              type: r
            });
            t.__filtered__ = t.__filtered__ || n;
            return t;
          };
        });
        St(["head", "last"], function (e, t) {
          var r = "take" + (t ? "Right" : "");
          $r.prototype[e] = function () {
            return this[r](1).value()[0];
          };
        });
        St(["initial", "tail"], function (e, t) {
          var r = "drop" + (t ? "" : "Right");
          $r.prototype[e] = function () {
            if (this.__filtered__) {
              return new $r(this);
            } else {
              return this[r](1);
            }
          };
        });
        $r.prototype.compact = function () {
          return this.filter(is);
        };
        $r.prototype.find = function (e) {
          return this.filter(e).head();
        };
        $r.prototype.findLast = function (e) {
          return this.reverse().find(e);
        };
        $r.prototype.invokeMap = Jn(function (e, t) {
          if (typeof e == "function") {
            return new $r(this);
          } else {
            return this.map(function (r) {
              return Fn(r, e, t);
            });
          }
        });
        $r.prototype.reject = function (e) {
          return this.filter(Zi(fa(e)));
        };
        $r.prototype.slice = function (e, t) {
          e = vc(e);
          var r = this;
          if (r.__filtered__ && (e > 0 || t < 0)) {
            return new $r(r);
          } else {
            if (e < 0) {
              r = r.takeRight(-e);
            } else if (e) {
              r = r.drop(e);
            }
            if (t !== o) {
              r = (t = vc(t)) < 0 ? r.dropRight(-t) : r.take(t - e);
            }
            return r;
          }
        };
        $r.prototype.takeRightWhile = function (e) {
          return this.reverse().takeWhile(e).reverse();
        };
        $r.prototype.toArray = function () {
          return this.take(y);
        };
        kn($r.prototype, function (e, t) {
          var r = /^(?:filter|find|map|reject)|While$/.test(t);
          var n = /^(?:head|last)$/.test(t);
          var a = zr[n ? "take" + (t == "last" ? "Right" : "") : t];
          var i = n || /^find/.test(t);
          if (a) {
            zr.prototype[t] = function () {
              var t = this.__wrapped__;
              var c = n ? [1] : arguments;
              var s = t instanceof $r;
              var l = c[0];
              var u = s || Yi(t);
              function f(e) {
                var t = a.apply(zr, Mt([e], c));
                if (n && d) {
                  return t[0];
                } else {
                  return t;
                }
              }
              if (u && r && typeof l == "function" && l.length != 1) {
                s = u = false;
              }
              var d = this.__chain__;
              var h = !!this.__actions__.length;
              var p = i && !d;
              var g = s && !h;
              if (!i && u) {
                t = g ? t : new $r(this);
                var y = e.apply(t, c);
                y.__actions__.push({
                  func: yi,
                  args: [f],
                  thisArg: o
                });
                return new Wr(y, d);
              }
              if (p && g) {
                return e.apply(this, c);
              } else {
                y = this.thru(f);
                if (p) {
                  if (n) {
                    return y.value()[0];
                  } else {
                    return y.value();
                  }
                } else {
                  return y;
                }
              }
            };
          }
        });
        St(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
          var t = De[e];
          var r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru";
          var n = /^(?:pop|shift)$/.test(e);
          zr.prototype[e] = function () {
            var e = arguments;
            if (n && !this.__chain__) {
              var o = this.value();
              return t.apply(Yi(o) ? o : [], e);
            }
            return this[r](function (r) {
              return t.apply(Yi(r) ? r : [], e);
            });
          };
        });
        kn($r.prototype, function (e, t) {
          var r = zr[t];
          if (r) {
            var n = r.name + "";
            if (!Ie.call(Fr, n)) {
              Fr[n] = [];
            }
            Fr[n].push({
              name: t,
              func: r
            });
          }
        });
        Fr[No(o, 2).name] = [{
          name: "wrapper",
          func: o
        }];
        $r.prototype.clone = function () {
          var e = new $r(this.__wrapped__);
          e.__actions__ = Fo(this.__actions__);
          e.__dir__ = this.__dir__;
          e.__filtered__ = this.__filtered__;
          e.__iteratees__ = Fo(this.__iteratees__);
          e.__takeCount__ = this.__takeCount__;
          e.__views__ = Fo(this.__views__);
          return e;
        };
        $r.prototype.reverse = function () {
          if (this.__filtered__) {
            var e = new $r(this);
            e.__dir__ = -1;
            e.__filtered__ = true;
          } else {
            (e = this.clone()).__dir__ *= -1;
          }
          return e;
        };
        $r.prototype.value = function () {
          var e = this.__wrapped__.value();
          var t = this.__dir__;
          var r = Yi(e);
          var n = t < 0;
          var o = r ? e.length : 0;
          var a = function (e, t, r) {
            var n = -1;
            var o = r.length;
            while (++n < o) {
              var a = r[n];
              var i = a.size;
              switch (a.type) {
                case "drop":
                  e += i;
                  break;
                case "dropRight":
                  t -= i;
                  break;
                case "take":
                  t = wr(t, e + i);
                  break;
                case "takeRight":
                  e = mr(e, t - i);
              }
            }
            return {
              start: e,
              end: t
            };
          }(0, o, this.__views__);
          var i = a.start;
          var c = a.end;
          var s = c - i;
          var l = n ? c : i - 1;
          var u = this.__iteratees__;
          var f = u.length;
          var d = 0;
          var h = wr(s, this.__takeCount__);
          if (!r || !n && o == s && h == s) {
            return vo(e, this.__actions__);
          }
          var p = [];
          e: while (s-- && d < h) {
            for (var g = -1, y = e[l += t]; ++g < f;) {
              var v = u[g];
              var b = v.iteratee;
              var m = v.type;
              var w = b(y);
              if (m == 2) {
                y = w;
              } else if (!w) {
                if (m == 1) {
                  continue e;
                }
                break e;
              }
            }
            p[d++] = y;
          }
          return p;
        };
        zr.prototype.at = vi;
        zr.prototype.chain = function () {
          return gi(this);
        };
        zr.prototype.commit = function () {
          return new Wr(this.value(), this.__chain__);
        };
        zr.prototype.next = function () {
          if (this.__values__ === o) {
            this.__values__ = gc(this.value());
          }
          var e = this.__index__ >= this.__values__.length;
          return {
            done: e,
            value: e ? o : this.__values__[this.__index__++]
          };
        };
        zr.prototype.plant = function (e) {
          var t;
          for (var r = this; r instanceof Nr;) {
            var n = Ha(r);
            n.__index__ = 0;
            n.__values__ = o;
            if (t) {
              a.__wrapped__ = n;
            } else {
              t = n;
            }
            var a = n;
            r = r.__wrapped__;
          }
          a.__wrapped__ = e;
          return t;
        };
        zr.prototype.reverse = function () {
          var e = this.__wrapped__;
          if (e instanceof $r) {
            var t = e;
            if (this.__actions__.length) {
              t = new $r(this);
            }
            (t = t.reverse()).__actions__.push({
              func: yi,
              args: [ni],
              thisArg: o
            });
            return new Wr(t, this.__chain__);
          }
          return this.thru(ni);
        };
        zr.prototype.toJSON = zr.prototype.valueOf = zr.prototype.value = function () {
          return vo(this.__wrapped__, this.__actions__);
        };
        zr.prototype.first = zr.prototype.head;
        if (et) {
          zr.prototype[et] = function () {
            return this;
          };
        }
        return zr;
      }();
      ht._ = yr;
      if ((n = function () {
        return yr;
      }.call(t, r, t, e)) !== o) {
        e.exports = n;
      }
    }).call(this);
  },
  4040: (e, t, r) => {
    "use strict";

    r.d(t, {
      y: () => f
    });
    var n = r(8825);
    var o = r(1219);
    var a = r(1641);
    var i = r(7107);
    function c(e) {
      if (e.length === 0) {
        return i.y;
      } else if (e.length === 1) {
        return e[0];
      } else {
        return function (t) {
          return e.reduce(function (e, t) {
            return t(e);
          }, t);
        };
      }
    }
    var s = r(4772);
    var l = r(6559);
    var u = r(4791);
    var f = function () {
      function e(e) {
        if (e) {
          this._subscribe = e;
        }
      }
      e.prototype.lift = function (t) {
        var r = new e();
        r.source = this;
        r.operator = t;
        return r;
      };
      e.prototype.subscribe = function (e, t, r) {
        var a;
        var i = this;
        var c = (a = e) && a instanceof n.Lv || function (e) {
          return e && (0, l.m)(e.next) && (0, l.m)(e.error) && (0, l.m)(e.complete);
        }(a) && (0, o.Nn)(a) ? e : new n.Hp(e, t, r);
        (0, u.x)(function () {
          var e = i;
          var t = e.operator;
          var r = e.source;
          c.add(t ? t.call(c, r) : r ? i._subscribe(c) : i._trySubscribe(c));
        });
        return c;
      };
      e.prototype._trySubscribe = function (e) {
        try {
          return this._subscribe(e);
        } catch (t) {
          e.error(t);
        }
      };
      e.prototype.forEach = function (e, t) {
        var r = this;
        return new (t = d(t))(function (t, o) {
          var a = new n.Hp({
            next: function (t) {
              try {
                e(t);
              } catch (e) {
                o(e);
                a.unsubscribe();
              }
            },
            error: o,
            complete: t
          });
          r.subscribe(a);
        });
      };
      e.prototype._subscribe = function (e) {
        var t;
        if ((t = this.source) === null || t === undefined) {
          return undefined;
        } else {
          return t.subscribe(e);
        }
      };
      e.prototype[a.L] = function () {
        return this;
      };
      e.prototype.pipe = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        return c(e)(this);
      };
      e.prototype.toPromise = function (e) {
        var t = this;
        return new (e = d(e))(function (e, r) {
          var n;
          t.subscribe(function (e) {
            return n = e;
          }, function (e) {
            return r(e);
          }, function () {
            return e(n);
          });
        });
      };
      e.create = function (t) {
        return new e(t);
      };
      return e;
    }();
    function d(e) {
      return e ?? s.v.Promise ?? Promise;
    }
  },
  8825: (e, t, r) => {
    "use strict";

    r.d(t, {
      Hp: () => v,
      Lv: () => h
    });
    var n = r(3056);
    var o = r(6559);
    var a = r(1219);
    var i = r(4772);
    var c = r(1377);
    var s = r(6173);
    var l = u("C", undefined, undefined);
    function u(e, t, r) {
      return {
        kind: e,
        value: t,
        error: r
      };
    }
    var f = r(3986);
    var d = r(4791);
    var h = function (e) {
      function t(t) {
        var r = e.call(this) || this;
        r.isStopped = false;
        if (t) {
          r.destination = t;
          if ((0, a.Nn)(t)) {
            t.add(r);
          }
        } else {
          r.destination = w;
        }
        return r;
      }
      (0, n.ZT)(t, e);
      t.create = function (e, t, r) {
        return new v(e, t, r);
      };
      t.prototype.next = function (e) {
        if (this.isStopped) {
          m(function (e) {
            return u("N", e, undefined);
          }(e), this);
        } else {
          this._next(e);
        }
      };
      t.prototype.error = function (e) {
        if (this.isStopped) {
          m(u("E", undefined, e), this);
        } else {
          this.isStopped = true;
          this._error(e);
        }
      };
      t.prototype.complete = function () {
        if (this.isStopped) {
          m(l, this);
        } else {
          this.isStopped = true;
          this._complete();
        }
      };
      t.prototype.unsubscribe = function () {
        if (!this.closed) {
          this.isStopped = true;
          e.prototype.unsubscribe.call(this);
          this.destination = null;
        }
      };
      t.prototype._next = function (e) {
        this.destination.next(e);
      };
      t.prototype._error = function (e) {
        try {
          this.destination.error(e);
        } finally {
          this.unsubscribe();
        }
      };
      t.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return t;
    }(a.w0);
    var p = Function.prototype.bind;
    function g(e, t) {
      return p.call(e, t);
    }
    var y = function () {
      function e(e) {
        this.partialObserver = e;
      }
      e.prototype.next = function (e) {
        var t = this.partialObserver;
        if (t.next) {
          try {
            t.next(e);
          } catch (e) {
            b(e);
          }
        }
      };
      e.prototype.error = function (e) {
        var t = this.partialObserver;
        if (t.error) {
          try {
            t.error(e);
          } catch (e) {
            b(e);
          }
        } else {
          b(e);
        }
      };
      e.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete) {
          try {
            e.complete();
          } catch (e) {
            b(e);
          }
        }
      };
      return e;
    }();
    var v = function (e) {
      function t(t, r, n) {
        var a;
        var c;
        var s = e.call(this) || this;
        if ((0, o.m)(t) || !t) {
          a = {
            next: t ?? undefined,
            error: r ?? undefined,
            complete: n ?? undefined
          };
        } else if (s && i.v.useDeprecatedNextContext) {
          (c = Object.create(t)).unsubscribe = function () {
            return s.unsubscribe();
          };
          a = {
            next: t.next && g(t.next, c),
            error: t.error && g(t.error, c),
            complete: t.complete && g(t.complete, c)
          };
        } else {
          a = t;
        }
        s.destination = new y(a);
        return s;
      }
      (0, n.ZT)(t, e);
      return t;
    }(h);
    function b(e) {
      if (i.v.useDeprecatedSynchronousErrorHandling) {
        (0, d.O)(e);
      } else {
        (0, c.h)(e);
      }
    }
    function m(e, t) {
      var r = i.v.onStoppedNotification;
      if (r) {
        f.z.setTimeout(function () {
          return r(e, t);
        });
      }
    }
    var w = {
      closed: true,
      next: s.Z,
      error: function (e) {
        throw e;
      },
      complete: s.Z
    };
  },
  1219: (e, t, r) => {
    "use strict";

    r.d(t, {
      Lc: () => s,
      w0: () => c,
      Nn: () => l
    });
    var n = r(3056);
    var o = r(6559);
    var a = (0, r(782).d)(function (e) {
      return function (t) {
        e(this);
        this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (e, t) {
          return t + 1 + ") " + e.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = t;
      };
    });
    var i = r(7602);
    var c = function () {
      function e(e) {
        this.initialTeardown = e;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
      }
      var t;
      e.prototype.unsubscribe = function () {
        var e;
        var t;
        var r;
        var i;
        var c;
        if (!this.closed) {
          this.closed = true;
          var s = this._parentage;
          if (s) {
            this._parentage = null;
            if (Array.isArray(s)) {
              try {
                for (var l = (0, n.XA)(s), f = l.next(); !f.done; f = l.next()) {
                  f.value.remove(this);
                }
              } catch (t) {
                e = {
                  error: t
                };
              } finally {
                try {
                  if (f && !f.done && (t = l.return)) {
                    t.call(l);
                  }
                } finally {
                  if (e) {
                    throw e.error;
                  }
                }
              }
            } else {
              s.remove(this);
            }
          }
          var d = this.initialTeardown;
          if ((0, o.m)(d)) {
            try {
              d();
            } catch (e) {
              c = e instanceof a ? e.errors : [e];
            }
          }
          var h = this._finalizers;
          if (h) {
            this._finalizers = null;
            try {
              for (var p = (0, n.XA)(h), g = p.next(); !g.done; g = p.next()) {
                var y = g.value;
                try {
                  u(y);
                } catch (e) {
                  c = c ?? [];
                  if (e instanceof a) {
                    c = (0, n.ev)((0, n.ev)([], (0, n.CR)(c)), (0, n.CR)(e.errors));
                  } else {
                    c.push(e);
                  }
                }
              }
            } catch (e) {
              r = {
                error: e
              };
            } finally {
              try {
                if (g && !g.done && (i = p.return)) {
                  i.call(p);
                }
              } finally {
                if (r) {
                  throw r.error;
                }
              }
            }
          }
          if (c) {
            throw new a(c);
          }
        }
      };
      e.prototype.add = function (t) {
        if (t && t !== this) {
          if (this.closed) {
            u(t);
          } else {
            if (t instanceof e) {
              if (t.closed || t._hasParent(this)) {
                return;
              }
              t._addParent(this);
            }
            (this._finalizers = this._finalizers ?? []).push(t);
          }
        }
      };
      e.prototype._hasParent = function (e) {
        var t = this._parentage;
        return t === e || Array.isArray(t) && t.includes(e);
      };
      e.prototype._addParent = function (e) {
        var t = this._parentage;
        this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
      };
      e.prototype._removeParent = function (e) {
        var t = this._parentage;
        if (t === e) {
          this._parentage = null;
        } else if (Array.isArray(t)) {
          (0, i.P)(t, e);
        }
      };
      e.prototype.remove = function (t) {
        var r = this._finalizers;
        if (r) {
          (0, i.P)(r, t);
        }
        if (t instanceof e) {
          t._removeParent(this);
        }
      };
      (t = new e()).closed = true;
      e.EMPTY = t;
      return e;
    }();
    var s = c.EMPTY;
    function l(e) {
      return e instanceof c || e && "closed" in e && (0, o.m)(e.remove) && (0, o.m)(e.add) && (0, o.m)(e.unsubscribe);
    }
    function u(e) {
      if ((0, o.m)(e)) {
        e();
      } else {
        e.unsubscribe();
      }
    }
  },
  4772: (e, t, r) => {
    "use strict";

    r.d(t, {
      v: () => n
    });
    var n = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: undefined,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false
    };
  },
  8699: (e, t, r) => {
    "use strict";

    r.d(t, {
      H: () => c
    });
    var n = r(4040);
    var o = r(8418);
    var a = r(3520);
    var i = r(7174);
    function c(e = 0, t, r = o.P) {
      var c = -1;
      if (t != null) {
        if ((0, a.K)(t)) {
          r = t;
        } else {
          c = t;
        }
      }
      return new n.y(function (t) {
        var n = (0, i.q)(e) ? +e - r.now() : e;
        if (n < 0) {
          n = 0;
        }
        var o = 0;
        return r.schedule(function () {
          if (!t.closed) {
            t.next(o++);
            if (c >= 0) {
              this.schedule(undefined, c);
            } else {
              t.complete();
            }
          }
        }, n);
      });
    }
  },
  6918: (e, t, r) => {
    "use strict";

    r.d(t, {
      x: () => o
    });
    var n = r(3056);
    function o(e, t, r, n, o) {
      return new a(e, t, r, n, o);
    }
    var a = function (e) {
      function t(t, r, n, o, a, i) {
        var c = e.call(this, t) || this;
        c.onFinalize = a;
        c.shouldUnsubscribe = i;
        c._next = r ? function (e) {
          try {
            r(e);
          } catch (e) {
            t.error(e);
          }
        } : e.prototype._next;
        c._error = o ? function (e) {
          try {
            o(e);
          } catch (e) {
            t.error(e);
          } finally {
            this.unsubscribe();
          }
        } : e.prototype._error;
        c._complete = n ? function () {
          try {
            n();
          } catch (e) {
            t.error(e);
          } finally {
            this.unsubscribe();
          }
        } : e.prototype._complete;
        return c;
      }
      (0, n.ZT)(t, e);
      t.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          e.prototype.unsubscribe.call(this);
          if (!r) {
            if ((t = this.onFinalize) !== null && t !== undefined) {
              t.call(this);
            }
          }
        }
      };
      return t;
    }(r(8825).Lv);
  },
  9112: (e, t, r) => {
    "use strict";

    r.d(t, {
      h: () => a
    });
    var n = r(3234);
    var o = r(6918);
    function a(e, t) {
      return (0, n.e)(function (r, n) {
        var a = 0;
        r.subscribe((0, o.x)(n, function (r) {
          return e.call(t, r, a++) && n.next(r);
        }));
      });
    }
  },
  420: (e, t, r) => {
    "use strict";

    r.d(t, {
      o: () => c
    });
    var n = r(3056);
    var o = function (e) {
      function t(t, r) {
        return e.call(this) || this;
      }
      (0, n.ZT)(t, e);
      t.prototype.schedule = function (e, t = 0) {
        return this;
      };
      return t;
    }(r(1219).w0);
    var a = {
      setInterval: function (e, t) {
        var r = [];
        for (var o = 2; o < arguments.length; o++) {
          r[o - 2] = arguments[o];
        }
        var i = a.delegate;
        if (i == null ? undefined : i.setInterval) {
          return i.setInterval.apply(i, (0, n.ev)([e, t], (0, n.CR)(r)));
        } else {
          return setInterval.apply(undefined, (0, n.ev)([e, t], (0, n.CR)(r)));
        }
      },
      clearInterval: function (e) {
        var t = a.delegate;
        return ((t == null ? undefined : t.clearInterval) || clearInterval)(e);
      },
      delegate: undefined
    };
    var i = r(7602);
    var c = function (e) {
      function t(t, r) {
        var n = e.call(this, t, r) || this;
        n.scheduler = t;
        n.work = r;
        n.pending = false;
        return n;
      }
      (0, n.ZT)(t, e);
      t.prototype.schedule = function (e, t = 0) {
        if (this.closed) {
          return this;
        }
        this.state = e;
        var r = this.id;
        var n = this.scheduler;
        if (r != null) {
          this.id = this.recycleAsyncId(n, r, t);
        }
        this.pending = true;
        this.delay = t;
        this.id = this.id || this.requestAsyncId(n, this.id, t);
        return this;
      };
      t.prototype.requestAsyncId = function (e, t, r = 0) {
        return a.setInterval(e.flush.bind(e, this), r);
      };
      t.prototype.recycleAsyncId = function (e, t, r = 0) {
        if (r != null && this.delay === r && this.pending === false) {
          return t;
        }
        a.clearInterval(t);
      };
      t.prototype.execute = function (e, t) {
        if (this.closed) {
          return new Error("executing a cancelled action");
        }
        this.pending = false;
        var r = this._execute(e, t);
        if (r) {
          return r;
        }
        if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };
      t.prototype._execute = function (e, t) {
        var r;
        var n = false;
        try {
          this.work(e);
        } catch (e) {
          n = true;
          r = e || new Error("Scheduled action threw falsy error");
        }
        if (n) {
          this.unsubscribe();
          return r;
        }
      };
      t.prototype.unsubscribe = function () {
        if (!this.closed) {
          var t = this.id;
          var r = this.scheduler;
          var n = r.actions;
          this.work = this.state = this.scheduler = null;
          this.pending = false;
          (0, i.P)(n, this);
          if (t != null) {
            this.id = this.recycleAsyncId(r, t, null);
          }
          this.delay = null;
          e.prototype.unsubscribe.call(this);
        }
      };
      return t;
    }(o);
  },
  3144: (e, t, r) => {
    "use strict";

    r.d(t, {
      v: () => i
    });
    var n = r(3056);
    var o = {
      now: function () {
        return (o.delegate || Date).now();
      },
      delegate: undefined
    };
    var a = function () {
      function e(t, r = e.now) {
        this.schedulerActionCtor = t;
        this.now = r;
      }
      e.prototype.schedule = function (e, t = 0, r) {
        return new this.schedulerActionCtor(this, e).schedule(r, t);
      };
      e.now = o.now;
      return e;
    }();
    var i = function (e) {
      function t(t, r = a.now) {
        var n = e.call(this, t, r) || this;
        n.actions = [];
        n._active = false;
        n._scheduled = undefined;
        return n;
      }
      (0, n.ZT)(t, e);
      t.prototype.flush = function (e) {
        var t = this.actions;
        if (this._active) {
          t.push(e);
        } else {
          var r;
          this._active = true;
          do {
            if (r = e.execute(e.state, e.delay)) {
              break;
            }
          } while (e = t.shift());
          this._active = false;
          if (r) {
            while (e = t.shift()) {
              e.unsubscribe();
            }
            throw r;
          }
        }
      };
      return t;
    }(a);
  },
  8418: (e, t, r) => {
    "use strict";

    r.d(t, {
      P: () => a,
      z: () => o
    });
    var n = r(420);
    var o = new (r(3144).v)(n.o);
    var a = o;
  },
  3986: (e, t, r) => {
    "use strict";

    r.d(t, {
      z: () => o
    });
    var n = r(3056);
    var o = {
      setTimeout: function (e, t) {
        var r = [];
        for (var a = 2; a < arguments.length; a++) {
          r[a - 2] = arguments[a];
        }
        var i = o.delegate;
        if (i == null ? undefined : i.setTimeout) {
          return i.setTimeout.apply(i, (0, n.ev)([e, t], (0, n.CR)(r)));
        } else {
          return setTimeout.apply(undefined, (0, n.ev)([e, t], (0, n.CR)(r)));
        }
      },
      clearTimeout: function (e) {
        var t = o.delegate;
        return ((t == null ? undefined : t.clearTimeout) || clearTimeout)(e);
      },
      delegate: undefined
    };
  },
  1641: (e, t, r) => {
    "use strict";

    r.d(t, {
      L: () => n
    });
    var n = typeof Symbol == "function" && Symbol.observable || "@@observable";
  },
  7602: (e, t, r) => {
    "use strict";

    function n(e, t) {
      if (e) {
        var r = e.indexOf(t);
        if (r >= 0) {
          e.splice(r, 1);
        }
      }
    }
    r.d(t, {
      P: () => n
    });
  },
  782: (e, t, r) => {
    "use strict";

    function n(e) {
      var t = e(function (e) {
        Error.call(e);
        e.stack = new Error().stack;
      });
      t.prototype = Object.create(Error.prototype);
      t.prototype.constructor = t;
      return t;
    }
    r.d(t, {
      d: () => n
    });
  },
  4791: (e, t, r) => {
    "use strict";

    r.d(t, {
      O: () => i,
      x: () => a
    });
    var n = r(4772);
    var o = null;
    function a(e) {
      if (n.v.useDeprecatedSynchronousErrorHandling) {
        var t = !o;
        if (t) {
          o = {
            errorThrown: false,
            error: null
          };
        }
        e();
        if (t) {
          var r = o;
          var a = r.errorThrown;
          var i = r.error;
          o = null;
          if (a) {
            throw i;
          }
        }
      } else {
        e();
      }
    }
    function i(e) {
      if (n.v.useDeprecatedSynchronousErrorHandling && o) {
        o.errorThrown = true;
        o.error = e;
      }
    }
  },
  7107: (e, t, r) => {
    "use strict";

    function n(e) {
      return e;
    }
    r.d(t, {
      y: () => n
    });
  },
  7174: (e, t, r) => {
    "use strict";

    function n(e) {
      return e instanceof Date && !isNaN(e);
    }
    r.d(t, {
      q: () => n
    });
  },
  6559: (e, t, r) => {
    "use strict";

    function n(e) {
      return typeof e == "function";
    }
    r.d(t, {
      m: () => n
    });
  },
  3520: (e, t, r) => {
    "use strict";

    r.d(t, {
      K: () => o
    });
    var n = r(6559);
    function o(e) {
      return e && (0, n.m)(e.schedule);
    }
  },
  3234: (e, t, r) => {
    "use strict";

    r.d(t, {
      e: () => o
    });
    var n = r(6559);
    function o(e) {
      return function (t) {
        if (function (e) {
          return (0, n.m)(e == null ? undefined : e.lift);
        }(t)) {
          return t.lift(function (t) {
            try {
              return e(t, this);
            } catch (e) {
              this.error(e);
            }
          });
        }
        throw new TypeError("Unable to lift unknown Observable type");
      };
    }
  },
  6173: (e, t, r) => {
    "use strict";

    function n() {}
    r.d(t, {
      Z: () => n
    });
  },
  1377: (e, t, r) => {
    "use strict";

    r.d(t, {
      h: () => a
    });
    var n = r(4772);
    var o = r(3986);
    function a(e) {
      o.z.setTimeout(function () {
        var t = n.v.onUnhandledError;
        if (!t) {
          throw e;
        }
        t(e);
      });
    }
  },
  931: (e, t, r) => {
    "use strict";

    var n = r(1584);
    var o = Array.prototype.concat;
    var a = Array.prototype.slice;
    var i = e.exports = function (e) {
      var t = [];
      for (var r = 0, i = e.length; r < i; r++) {
        var c = e[r];
        if (n(c)) {
          t = o.call(t, a.call(c));
        } else {
          t.push(c);
        }
      }
      return t;
    };
    i.wrap = function (e) {
      return function () {
        return e(i(arguments));
      };
    };
  },
  3056: (e, t, r) => {
    "use strict";

    r.d(t, {
      CR: () => u,
      FC: () => h,
      Jh: () => s,
      KL: () => p,
      XA: () => l,
      ZT: () => o,
      _T: () => i,
      ev: () => f,
      mG: () => c,
      pi: () => a,
      qq: () => d
    });
    function n(e, t) {
      n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          if (Object.prototype.hasOwnProperty.call(t, r)) {
            e[r] = t[r];
          }
        }
      };
      return n(e, t);
    }
    function o(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      }
      function r() {
        this.constructor = e;
      }
      n(e, t);
      e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
    }
    function a() {
      a = Object.assign || function (e) {
        var t;
        for (var r = 1, n = arguments.length; r < n; r++) {
          for (var o in t = arguments[r]) {
            if (Object.prototype.hasOwnProperty.call(t, o)) {
              e[o] = t[o];
            }
          }
        }
        return e;
      };
      return a.apply(this, arguments);
    }
    function i(e, t) {
      var r = {};
      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
          r[n] = e[n];
        }
      }
      if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) {
          if (t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o])) {
            r[n[o]] = e[n[o]];
          }
        }
      }
      return r;
    }
    function c(e, t, r, n) {
      return new (r ||= Promise)(function (o, a) {
        function i(e) {
          try {
            s(n.next(e));
          } catch (e) {
            a(e);
          }
        }
        function c(e) {
          try {
            s(n.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function s(e) {
          var t;
          if (e.done) {
            o(e.value);
          } else {
            (t = e.value, t instanceof r ? t : new r(function (e) {
              e(t);
            })).then(i, c);
          }
        }
        s((n = n.apply(e, t || [])).next());
      });
    }
    function s(e, t) {
      var r;
      var n;
      var o;
      var a;
      var i = {
        label: 0,
        sent: function () {
          if (o[0] & 1) {
            throw o[1];
          }
          return o[1];
        },
        trys: [],
        ops: []
      };
      a = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        a[Symbol.iterator] = function () {
          return this;
        };
      }
      return a;
      function c(a) {
        return function (c) {
          return function (a) {
            if (r) {
              throw new TypeError("Generator is already executing.");
            }
            while (i) {
              try {
                r = 1;
                if (n && (o = a[0] & 2 ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) {
                  return o;
                }
                n = 0;
                if (o) {
                  a = [a[0] & 2, o.value];
                }
                switch (a[0]) {
                  case 0:
                  case 1:
                    o = a;
                    break;
                  case 4:
                    i.label++;
                    return {
                      value: a[1],
                      done: false
                    };
                  case 5:
                    i.label++;
                    n = a[1];
                    a = [0];
                    continue;
                  case 7:
                    a = i.ops.pop();
                    i.trys.pop();
                    continue;
                  default:
                    if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || a[0] !== 6 && a[0] !== 2)) {
                      i = 0;
                      continue;
                    }
                    if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                      i.label = a[1];
                      break;
                    }
                    if (a[0] === 6 && i.label < o[1]) {
                      i.label = o[1];
                      o = a;
                      break;
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2];
                      i.ops.push(a);
                      break;
                    }
                    if (o[2]) {
                      i.ops.pop();
                    }
                    i.trys.pop();
                    continue;
                }
                a = t.call(e, i);
              } catch (e) {
                a = [6, e];
                n = 0;
              } finally {
                r = o = 0;
              }
            }
            if (a[0] & 5) {
              throw a[1];
            }
            return {
              value: a[0] ? a[1] : undefined,
              done: true
            };
          }([a, c]);
        };
      }
    }
    Object.create;
    function l(e) {
      var t = typeof Symbol == "function" && Symbol.iterator;
      var r = t && e[t];
      var n = 0;
      if (r) {
        return r.call(e);
      }
      if (e && typeof e.length == "number") {
        return {
          next: function () {
            if (e && n >= e.length) {
              e = undefined;
            }
            return {
              value: e && e[n++],
              done: !e
            };
          }
        };
      }
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function u(e, t) {
      var r = typeof Symbol == "function" && e[Symbol.iterator];
      if (!r) {
        return e;
      }
      var n;
      var o;
      var a = r.call(e);
      var i = [];
      try {
        while ((t === undefined || t-- > 0) && !(n = a.next()).done) {
          i.push(n.value);
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          if (n && !n.done && (r = a.return)) {
            r.call(a);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
      return i;
    }
    function f(e, t, r) {
      if (r || arguments.length === 2) {
        var n;
        for (var o = 0, a = t.length; o < a; o++) {
          if (!!n || !(o in t)) {
            n ||= Array.prototype.slice.call(t, 0, o);
            n[o] = t[o];
          }
        }
      }
      return e.concat(n || Array.prototype.slice.call(t));
    }
    function d(e) {
      if (this instanceof d) {
        this.v = e;
        return this;
      } else {
        return new d(e);
      }
    }
    function h(e, t, r) {
      if (!Symbol.asyncIterator) {
        throw new TypeError("Symbol.asyncIterator is not defined.");
      }
      var n;
      var o = r.apply(e, t || []);
      var a = [];
      n = {};
      i("next");
      i("throw");
      i("return");
      n[Symbol.asyncIterator] = function () {
        return this;
      };
      return n;
      function i(e) {
        if (o[e]) {
          n[e] = function (t) {
            return new Promise(function (r, n) {
              if (!(a.push([e, t, r, n]) > 1)) {
                c(e, t);
              }
            });
          };
        }
      }
      function c(e, t) {
        try {
          if ((r = o[e](t)).value instanceof d) {
            Promise.resolve(r.value.v).then(s, l);
          } else {
            u(a[0][2], r);
          }
        } catch (e) {
          u(a[0][3], e);
        }
        var r;
      }
      function s(e) {
        c("next", e);
      }
      function l(e) {
        c("throw", e);
      }
      function u(e, t) {
        e(t);
        a.shift();
        if (a.length) {
          c(a[0][0], a[0][1]);
        }
      }
    }
    function p(e) {
      if (!Symbol.asyncIterator) {
        throw new TypeError("Symbol.asyncIterator is not defined.");
      }
      var t;
      var r = e[Symbol.asyncIterator];
      if (r) {
        return r.call(e);
      } else {
        e = l(e);
        t = {};
        n("next");
        n("throw");
        n("return");
        t[Symbol.asyncIterator] = function () {
          return this;
        };
        return t;
      }
      function n(r) {
        t[r] = e[r] && function (t) {
          return new Promise(function (n, o) {
            (function (e, t, r, n) {
              Promise.resolve(n).then(function (t) {
                e({
                  value: t,
                  done: r
                });
              }, t);
            })(n, o, (t = e[r](t)).done, t.value);
          });
        };
      }
    }
    Object.create;
  },
  7469: (e, t, r) => {
    "use strict";

    r.r(t);
    r.d(t, {
      DOMException: () => C,
      Headers: () => p,
      Request: () => _,
      Response: () => A,
      fetch: () => x
    });
    var n = typeof globalThis != "undefined" && globalThis || typeof self != "undefined" && self || n !== undefined && n;
    var o = "URLSearchParams" in n;
    var a = "Symbol" in n && "iterator" in Symbol;
    var i = "FileReader" in n && "Blob" in n && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }();
    var c = "FormData" in n;
    var s = "ArrayBuffer" in n;
    if (s) {
      var l = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
      var u = ArrayBuffer.isView || function (e) {
        return e && l.indexOf(Object.prototype.toString.call(e)) > -1;
      };
    }
    function f(e) {
      if (typeof e != "string") {
        e = String(e);
      }
      if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "") {
        throw new TypeError("Invalid character in header field name: \"" + e + "\"");
      }
      return e.toLowerCase();
    }
    function d(e) {
      if (typeof e != "string") {
        e = String(e);
      }
      return e;
    }
    function h(e) {
      var t = {
        next: function () {
          var t = e.shift();
          return {
            done: t === undefined,
            value: t
          };
        }
      };
      if (a) {
        t[Symbol.iterator] = function () {
          return t;
        };
      }
      return t;
    }
    function p(e) {
      this.map = {};
      if (e instanceof p) {
        e.forEach(function (e, t) {
          this.append(t, e);
        }, this);
      } else if (Array.isArray(e)) {
        e.forEach(function (e) {
          this.append(e[0], e[1]);
        }, this);
      } else if (e) {
        Object.getOwnPropertyNames(e).forEach(function (t) {
          this.append(t, e[t]);
        }, this);
      }
    }
    function g(e) {
      if (e.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
      }
      e.bodyUsed = true;
    }
    function y(e) {
      return new Promise(function (t, r) {
        e.onload = function () {
          t(e.result);
        };
        e.onerror = function () {
          r(e.error);
        };
      });
    }
    function v(e) {
      var t = new FileReader();
      var r = y(t);
      t.readAsArrayBuffer(e);
      return r;
    }
    function b(e) {
      if (e.slice) {
        return e.slice(0);
      }
      var t = new Uint8Array(e.byteLength);
      t.set(new Uint8Array(e));
      return t.buffer;
    }
    function m() {
      this.bodyUsed = false;
      this._initBody = function (e) {
        var t;
        this.bodyUsed = this.bodyUsed;
        this._bodyInit = e;
        if (e) {
          if (typeof e == "string") {
            this._bodyText = e;
          } else if (i && Blob.prototype.isPrototypeOf(e)) {
            this._bodyBlob = e;
          } else if (c && FormData.prototype.isPrototypeOf(e)) {
            this._bodyFormData = e;
          } else if (o && URLSearchParams.prototype.isPrototypeOf(e)) {
            this._bodyText = e.toString();
          } else if (s && i && (t = e) && DataView.prototype.isPrototypeOf(t)) {
            this._bodyArrayBuffer = b(e.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (s && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))) {
            this._bodyArrayBuffer = b(e);
          } else {
            this._bodyText = e = Object.prototype.toString.call(e);
          }
        } else {
          this._bodyText = "";
        }
        if (!this.headers.get("content-type")) {
          if (typeof e == "string") {
            this.headers.set("content-type", "text/plain;charset=UTF-8");
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set("content-type", this._bodyBlob.type);
          } else if (o && URLSearchParams.prototype.isPrototypeOf(e)) {
            this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
          }
        }
      };
      if (i) {
        this.blob = function () {
          var e = g(this);
          if (e) {
            return e;
          }
          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          }
          if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          }
          if (this._bodyFormData) {
            throw new Error("could not read FormData body as blob");
          }
          return Promise.resolve(new Blob([this._bodyText]));
        };
        this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            var e = g(this);
            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
          }
          return this.blob().then(v);
        };
      }
      this.text = function () {
        var e;
        var t;
        var r;
        var n = g(this);
        if (n) {
          return n;
        }
        if (this._bodyBlob) {
          e = this._bodyBlob;
          t = new FileReader();
          r = y(t);
          t.readAsText(e);
          return r;
        }
        if (this._bodyArrayBuffer) {
          return Promise.resolve(function (e) {
            for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) {
              r[n] = String.fromCharCode(t[n]);
            }
            return r.join("");
          }(this._bodyArrayBuffer));
        }
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as text");
        }
        return Promise.resolve(this._bodyText);
      };
      if (c) {
        this.formData = function () {
          return this.text().then(k);
        };
      }
      this.json = function () {
        return this.text().then(JSON.parse);
      };
      return this;
    }
    p.prototype.append = function (e, t) {
      e = f(e);
      t = d(t);
      var r = this.map[e];
      this.map[e] = r ? r + ", " + t : t;
    };
    p.prototype.delete = function (e) {
      delete this.map[f(e)];
    };
    p.prototype.get = function (e) {
      e = f(e);
      if (this.has(e)) {
        return this.map[e];
      } else {
        return null;
      }
    };
    p.prototype.has = function (e) {
      return this.map.hasOwnProperty(f(e));
    };
    p.prototype.set = function (e, t) {
      this.map[f(e)] = d(t);
    };
    p.prototype.forEach = function (e, t) {
      for (var r in this.map) {
        if (this.map.hasOwnProperty(r)) {
          e.call(t, this.map[r], r, this);
        }
      }
    };
    p.prototype.keys = function () {
      var e = [];
      this.forEach(function (t, r) {
        e.push(r);
      });
      return h(e);
    };
    p.prototype.values = function () {
      var e = [];
      this.forEach(function (t) {
        e.push(t);
      });
      return h(e);
    };
    p.prototype.entries = function () {
      var e = [];
      this.forEach(function (t, r) {
        e.push([r, t]);
      });
      return h(e);
    };
    if (a) {
      p.prototype[Symbol.iterator] = p.prototype.entries;
    }
    var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function _(e, t) {
      if (!(this instanceof _)) {
        throw new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
      }
      var r;
      var n;
      var o = (t = t || {}).body;
      if (e instanceof _) {
        if (e.bodyUsed) {
          throw new TypeError("Already read");
        }
        this.url = e.url;
        this.credentials = e.credentials;
        if (!t.headers) {
          this.headers = new p(e.headers);
        }
        this.method = e.method;
        this.mode = e.mode;
        this.signal = e.signal;
        if (!o && e._bodyInit != null) {
          o = e._bodyInit;
          e.bodyUsed = true;
        }
      } else {
        this.url = String(e);
      }
      this.credentials = t.credentials || this.credentials || "same-origin";
      if (!!t.headers || !this.headers) {
        this.headers = new p(t.headers);
      }
      this.method = (r = t.method || this.method || "GET", n = r.toUpperCase(), w.indexOf(n) > -1 ? n : r);
      this.mode = t.mode || this.mode || null;
      this.signal = t.signal || this.signal;
      this.referrer = null;
      if ((this.method === "GET" || this.method === "HEAD") && o) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      this._initBody(o);
      if ((this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
        var a = /([?&])_=[^&]*/;
        if (a.test(this.url)) {
          this.url = this.url.replace(a, "$1_=" + new Date().getTime());
        } else {
          this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
        }
      }
    }
    function k(e) {
      var t = new FormData();
      e.trim().split("&").forEach(function (e) {
        if (e) {
          var r = e.split("=");
          var n = r.shift().replace(/\+/g, " ");
          var o = r.join("=").replace(/\+/g, " ");
          t.append(decodeURIComponent(n), decodeURIComponent(o));
        }
      });
      return t;
    }
    function A(e, t) {
      if (!(this instanceof A)) {
        throw new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
      }
      t ||= {};
      this.type = "default";
      this.status = t.status === undefined ? 200 : t.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = t.statusText === undefined ? "" : "" + t.statusText;
      this.headers = new p(t.headers);
      this.url = t.url || "";
      this._initBody(e);
    }
    _.prototype.clone = function () {
      return new _(this, {
        body: this._bodyInit
      });
    };
    m.call(_.prototype);
    m.call(A.prototype);
    A.prototype.clone = function () {
      return new A(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new p(this.headers),
        url: this.url
      });
    };
    A.error = function () {
      var e = new A(null, {
        status: 0,
        statusText: ""
      });
      e.type = "error";
      return e;
    };
    var E = [301, 302, 303, 307, 308];
    A.redirect = function (e, t) {
      if (E.indexOf(t) === -1) {
        throw new RangeError("Invalid status code");
      }
      return new A(null, {
        status: t,
        headers: {
          location: e
        }
      });
    };
    var C = n.DOMException;
    try {
      new C();
    } catch (e) {
      (C = function (e, t) {
        this.message = e;
        this.name = t;
        var r = Error(e);
        this.stack = r.stack;
      }).prototype = Object.create(Error.prototype);
      C.prototype.constructor = C;
    }
    function x(e, t) {
      return new Promise(function (r, o) {
        var a = new _(e, t);
        if (a.signal && a.signal.aborted) {
          return o(new C("Aborted", "AbortError"));
        }
        var c = new XMLHttpRequest();
        function l() {
          c.abort();
        }
        c.onload = function () {
          var e;
          var t;
          var n = {
            status: c.status,
            statusText: c.statusText,
            headers: (e = c.getAllResponseHeaders() || "", t = new p(), e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function (e) {
              if (e.indexOf("\n") === 0) {
                return e.substr(1, e.length);
              } else {
                return e;
              }
            }).forEach(function (e) {
              var r = e.split(":");
              var n = r.shift().trim();
              if (n) {
                var o = r.join(":").trim();
                t.append(n, o);
              }
            }), t)
          };
          n.url = "responseURL" in c ? c.responseURL : n.headers.get("X-Request-URL");
          var o = "response" in c ? c.response : c.responseText;
          setTimeout(function () {
            r(new A(o, n));
          }, 0);
        };
        c.onerror = function () {
          setTimeout(function () {
            o(new TypeError("Network request failed"));
          }, 0);
        };
        c.ontimeout = function () {
          setTimeout(function () {
            o(new TypeError("Network request failed"));
          }, 0);
        };
        c.onabort = function () {
          setTimeout(function () {
            o(new C("Aborted", "AbortError"));
          }, 0);
        };
        c.open(a.method, function (e) {
          try {
            if (e === "" && n.location.href) {
              return n.location.href;
            } else {
              return e;
            }
          } catch (t) {
            return e;
          }
        }(a.url), true);
        if (a.credentials === "include") {
          c.withCredentials = true;
        } else if (a.credentials === "omit") {
          c.withCredentials = false;
        }
        if ("responseType" in c) {
          if (i) {
            c.responseType = "blob";
          } else if (s && a.headers.get("Content-Type") && a.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
            c.responseType = "arraybuffer";
          }
        }
        if (!t || typeof t.headers != "object" || t.headers instanceof p) {
          a.headers.forEach(function (e, t) {
            c.setRequestHeader(t, e);
          });
        } else {
          Object.getOwnPropertyNames(t.headers).forEach(function (e) {
            c.setRequestHeader(e, d(t.headers[e]));
          });
        }
        if (a.signal) {
          a.signal.addEventListener("abort", l);
          c.onreadystatechange = function () {
            if (c.readyState === 4) {
              a.signal.removeEventListener("abort", l);
            }
          };
        }
        c.send(a._bodyInit === undefined ? null : a._bodyInit);
      });
    }
    x.polyfill = true;
    if (!n.fetch) {
      n.fetch = x;
      n.Headers = p;
      n.Request = _;
      n.Response = A;
    }
  },
  2098: (e, t, r) => {
    "use strict";

    r.d(t, {
      n: () => v
    });
    var n = r(7856);
    var o = r(4099);
    var a = r.n(o);
    const i = {
      add: function (e) {
        if (typeof WorkerGlobalScope == "function" && self instanceof WorkerGlobalScope) ;else {
          if (typeof window.addEventListener != "function") {
            return;
          }
          window.addEventListener("beforeunload", function () {
            e();
          }, true);
          window.addEventListener("unload", function () {
            e();
          }, true);
        }
      }
    };
    var c = r(199);
    var s = r.n(c);
    var l = a() ? s() : i;
    var u = new Set();
    var f = false;
    function d(e) {
      if (!f) {
        f = true;
        l.add(h);
      }
      if (typeof e != "function") {
        throw new Error("Listener is no function");
      }
      u.add(e);
      return {
        remove: function () {
          return u.delete(e);
        },
        run: function () {
          u.delete(e);
          return e();
        }
      };
    }
    function h() {
      var e = [];
      u.forEach(function (t) {
        e.push(t());
        u.delete(t);
      });
      return Promise.all(e);
    }
    function p(e, t) {
      var r = this;
      this.broadcastChannel = e;
      this._options = t;
      this.isLeader = false;
      this.hasLeader = false;
      this.isDead = false;
      this.token = (0, n.JQ)();
      this._aplQ = n.hU;
      this._aplQC = 0;
      this._unl = [];
      this._lstns = [];
      this._dpL = function () {};
      this._dpLC = false;
      function o(e) {
        if (e.context === "leader") {
          if (e.action === "death") {
            r.hasLeader = false;
          }
          if (e.action === "tell") {
            r.hasLeader = true;
          }
        }
      }
      this.broadcastChannel.addEventListener("internal", o);
      this._lstns.push(o);
    }
    function g(e, t) {
      var r = {
        context: "leader",
        action: t,
        token: e.token
      };
      return e.broadcastChannel.postInternal(r);
    }
    p.prototype = {
      applyOnce: function (e) {
        var t = this;
        if (this.isLeader) {
          return (0, n._v)(0, true);
        }
        if (this.isDead) {
          return (0, n._v)(0, false);
        }
        if (this._aplQC > 1) {
          return this._aplQ;
        }
        function r() {
          if (t.isLeader) {
            return n.Ob;
          }
          var r;
          var o = false;
          var a = new Promise(function (e) {
            r = function () {
              o = true;
              e();
            };
          });
          var i = [];
          function c(e) {
            if (e.context === "leader" && e.token != t.token) {
              i.push(e);
              if (e.action === "apply" && e.token > t.token) {
                r();
              }
              if (e.action === "tell") {
                r();
                t.hasLeader = true;
              }
            }
          }
          t.broadcastChannel.addEventListener("internal", c);
          var s = e ? t._options.responseTime * 4 : t._options.responseTime;
          return g(t, "apply").then(function () {
            return Promise.race([(0, n._v)(s), a.then(function () {
              return Promise.reject(new Error());
            })]);
          }).then(function () {
            return g(t, "apply");
          }).then(function () {
            return Promise.race([(0, n._v)(s), a.then(function () {
              return Promise.reject(new Error());
            })]);
          }).catch(function () {}).then(function () {
            t.broadcastChannel.removeEventListener("internal", c);
            return !o && function (e) {
              e.isLeader = true;
              e.hasLeader = true;
              var t = d(function () {
                return e.die();
              });
              e._unl.push(t);
              function r(t) {
                if (t.context === "leader" && t.action === "apply") {
                  g(e, "tell");
                }
                if (t.context === "leader" && t.action === "tell" && !e._dpLC) {
                  e._dpLC = true;
                  e._dpL();
                  g(e, "tell");
                }
              }
              e.broadcastChannel.addEventListener("internal", r);
              e._lstns.push(r);
              return g(e, "tell");
            }(t).then(function () {
              return true;
            });
          });
        }
        this._aplQC = this._aplQC + 1;
        this._aplQ = this._aplQ.then(function () {
          return r();
        }).then(function () {
          t._aplQC = t._aplQC - 1;
        });
        return this._aplQ.then(function () {
          return t.isLeader;
        });
      },
      awaitLeadership: function () {
        this._aLP ||= function (e) {
          if (e.isLeader) {
            return n.hU;
          }
          return new Promise(function (t) {
            var r = false;
            function o() {
              if (!r) {
                r = true;
                e.broadcastChannel.removeEventListener("internal", a);
                t(true);
              }
            }
            e.applyOnce().then(function () {
              if (e.isLeader) {
                o();
              }
            });
            (function t() {
              return (0, n._v)(e._options.fallbackInterval).then(function () {
                if (!e.isDead && !r) {
                  if (e.isLeader) {
                    o();
                    return;
                  } else {
                    return e.applyOnce(true).then(function () {
                      if (e.isLeader) {
                        o();
                      } else {
                        t();
                      }
                    });
                  }
                }
              });
            })();
            function a(t) {
              if (t.context === "leader" && t.action === "death") {
                e.hasLeader = false;
                e.applyOnce().then(function () {
                  if (e.isLeader) {
                    o();
                  }
                });
              }
            }
            e.broadcastChannel.addEventListener("internal", a);
            e._lstns.push(a);
          });
        }(this);
        return this._aLP;
      },
      set onduplicate(e) {
        this._dpL = e;
      },
      die: function () {
        var e = this;
        this._lstns.forEach(function (t) {
          return e.broadcastChannel.removeEventListener("internal", t);
        });
        this._lstns = [];
        this._unl.forEach(function (e) {
          return e.remove();
        });
        this._unl = [];
        if (this.isLeader) {
          this.hasLeader = false;
          this.isLeader = false;
        }
        this.isDead = true;
        return g(this, "death");
      }
    };
    const y = function (e, t) {
      if (e._leaderElector) {
        throw new Error("BroadcastChannel already has a leader-elector");
      }
      t = function (e, t) {
        e ||= {};
        if (!(e = JSON.parse(JSON.stringify(e))).fallbackInterval) {
          e.fallbackInterval = 3000;
        }
        e.responseTime ||= t.method.averageResponseTime(t.options);
        return e;
      }(t, e);
      var r = new p(e, t);
      e._befC.push(function () {
        return r.die();
      });
      e._leaderElector = r;
      return r;
    }(new (r(7346).g0)("leader-channel"));
    y.awaitLeadership();
    const v = () => new Promise(e => {
      setTimeout(() => {
        e(false);
      }, 1000);
      y.awaitLeadership().then(() => e(true));
    });
  },
  3889: (e, t, r) => {
    "use strict";

    r.d(t, {
      y: () => o
    });
    var n = r(7346);
    const o = new class {
      bc = new n.g0("hitab_broadcast_channel");
      handlers = new Map();
      constructor() {
        this.bc.onmessage = e => {
          const {
            type: t,
            payload: r
          } = e;
          const n = this.handlers.get(t);
          if (n) {
            for (const e of n) {
              e(r);
            }
          }
        };
      }
      async post(e, t) {
        this.bc.postMessage({
          type: e,
          payload: t
        });
        return [null, ""];
      }
      listen(e, t) {
        if (this.handlers.has(e)) {
          this.handlers.get(e).add(t);
        } else {
          this.handlers.set(e, new Set([t]));
        }
      }
      remove(e, t) {
        if (this.handlers.has(e)) {
          this.handlers.get(e).delete(t);
        }
      }
      removeAll(e) {
        this.handlers.delete(e);
      }
    }();
  },
  6755: (e, t, r) => {
    "use strict";

    r.d(t, {
      M: () => a
    });
    var n = r(3131);
    var o = r(4208);
    const a = (0, n.WB)();
    a.use(o.Z);
  },
  6261: (e, t, r) => {
    "use strict";

    r.d(t, {
      $j: () => a,
      Df: () => s,
      fy: () => i,
      gi: () => c,
      xL: () => o
    });
    var n = r(1585);
    const o = () => window.screen.availHeight < 800 && window.devicePixelRatio < 1.5 ? 30 : 100;
    const a = n.bn <= 1366 ? "icon-s" : n.bn > 1920 ? "icon-l" : "icon-m";
    const i = a === "icon-l" || a === "icon-m" && n.bn === 1920 ? 11 : 9;
    const c = n.kn[a] * i + (i - 1) * 60;
    const s = "design";
  },
  5424: (e, t, r) => {
    "use strict";

    r.d(t, {
      V: () => m
    });
    var n = r(1585);
    var o = r(4522);
    var a = r(3131);
    var i = r(4003);
    var c = r(661);
    var s = r.n(c);
    const l = [i18n("星期天"), i18n("星期一"), i18n("星期二"), i18n("星期三"), i18n("星期四"), i18n("星期五"), i18n("星期六")];
    const u = [...Array(35)].map((e, t) => {
      let r = t + 1;
      r = r < 10 ? "0" + r : r;
      return `${i.c1}/hitab/celebrity-widget/large/celebrity_${r}_large.jpg`;
    });
    const f = [...Array(35)].map((e, t) => {
      let r = t + 1;
      r = r < 10 ? "0" + r : r;
      return `${i.c1}/hitab/celebrity-widget/medium/celebrity_${r}_medium.jpg`;
    });
    const d = [...Array(35)].map((e, t) => {
      let r = t + 1;
      r = r < 10 ? "0" + r : r;
      return `${i.c1}/hitab/celebrity-widget/background/celebrity_${r}.jpg`;
    });
    const h = s()();
    const p = {
      updateTime: 0,
      modalShow: false,
      words: i.sM ? {
        form: "《三体》",
        formWho: "刘慈欣",
        hitokoto: "我们都是阴沟里的虫子，但总还是得有人仰望星空"
      } : {
        form: "",
        formWho: "Martin Luther King",
        hitokoto: "To do the right thing, any time is a good time"
      },
      currentDate: {
        weekday: l[h.day()],
        date: i.sM ? h.format("YYYY年MM月DD日") : h.format("YYYY-MM-DD")
      },
      bgImage: {
        randomNum: 0,
        large: u[1],
        medium: f[1],
        modal: d[1]
      }
    };
    var g = r(8287);
    var y = r(1475);
    const v = (0, a.Q_)(o.BU.celebrity, {
      syncStorage: {
        watch: ["words", "bgImage", "updateTime"]
      },
      state: () => ({
        ...p
      }),
      actions: {
        setModal(e) {
          this.modalShow = e;
        },
        saveWordsData(e) {
          this.words = {
            ...this.words,
            ...e
          };
        },
        saveBgImageData(e) {
          this.bgImage = {
            ...this.bgImage,
            ...e
          };
        },
        loadOrRefreshWordsData() {
          const e = this.updateTime;
          const t = Date.now();
          if (s()(e).add(1, "day").get("date") <= s()(t).get("date")) {
            this.refreshWords();
          }
        },
        async refreshWords() {
          const [e, t] = i.sM ? await (async () => {
            try {
              const e = await g.hj.post("https://v1.hitokoto.cn/?c=d&c=e&c=h&c=i&c=k", {}, {
                _single: true
              });
              if (e) {
                return [null, {
                  formWho: e.from_who || "佚名",
                  hitokoto: e.hitokoto || "",
                  form: `《${e.from}》` || ""
                }];
              }
              throw e;
            } catch (e) {
              return ["catch error"];
            }
          })() : await (async () => {
            try {
              const e = await fetch("https://api.api-ninjas.com/v1/quotes", {
                headers: {
                  "X-Api-Key": "PYP49gtoPPS3aDxgWeZzig==xjJf3oA01gItulfv"
                }
              });
              const t = await e.json();
              if (t) {
                return [null, {
                  formWho: t[0].author || "unknown",
                  hitokoto: t[0].quote || "",
                  form: ""
                }];
              }
              throw t;
            } catch (e) {
              return ["catch error"];
            }
          })();
          if (!e) {
            this.saveWordsData(t || {});
            this.updateTime = Date.now();
          }
        },
        async prefetchModalBg(e) {
          await (0, y.pt)((0, y.Em)(e, "default", 1024), true);
        },
        async setRandomBg() {
          const e = (this.bgImage.randomNum + 1) % u.length;
          await this.prefetchModalBg(d[e]);
          this.saveBgImageData({
            randomNum: e,
            large: u[e],
            medium: f[e],
            modal: d[e]
          });
        },
        updateData() {
          const e = s()();
          this.refreshWords();
          this.currentDate = {
            weekday: l[e.day()],
            date: e.format("YYYY年MM月DD日")
          };
        }
      }
    });
    var b = r(6261);
    const m = (0, a.Q_)(o.BU.setting, {
      syncStorage: {
        watch: ["searchOpenMethod", "iconOpenMethod", "followSystem", "theme", "trigger", "leftBarDisplayStatus", "leftBarDisplaySide", "bottomBarDisplayStatus", "searchBoxShow", "searchSuggestionsShow", "searchHistoryShow", "keepSearchInput", "fastSwitchSearchEngine", "dockScaleRatio", "addIconShow", "iconSize", "iconAreaPercentValue", "lockLayout", "layoutWidth", "scrollPageEnable", "iconAutoFill", "hideIconName", "globalFont", "minimalistSwitchBtnStatus", "minimalistMode", "showClock", "showChineseCalendar", "showCalendar", "show24HR", "showCelebrity", "showDock", "celebrityLastTime", "showCategoryTitle", "showIcp"]
      },
      syncCloud: {
        watch: ["searchOpenMethod", "iconOpenMethod", "followSystem", "theme", "trigger", "leftBarDisplayStatus", "leftBarDisplaySide", "bottomBarDisplayStatus", "searchBoxShow", "searchSuggestionsShow", "searchHistoryShow", "keepSearchInput", "fastSwitchSearchEngine", "addIconShow", "iconSize", "iconAreaPercentValue", "lockLayout", "layoutWidth", "scrollPageEnable", "iconAutoFill", "hideIconName", "globalFont", "minimalistSwitchBtnStatus", "minimalistMode", "showClock", "showChineseCalendar", "showCalendar", "show24HR", "showCelebrity", "showDock", "celebrityLastTime", "showCategoryTitle", "showIcp"]
      },
      state: () => ({
        settingsShow: false,
        trigger: [],
        keepAlive: false,
        searchOpenMethod: "new-tab",
        iconOpenMethod: "new-tab",
        followSystem: true,
        systemTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
        theme: "light",
        leftBarDisplayStatus: "show",
        leftBarDisplaySide: "left",
        bottomBarDisplayStatus: "hide",
        searchBoxShow: true,
        searchSuggestionsShow: true,
        searchHistoryShow: false,
        keepSearchInput: true,
        fastSwitchSearchEngine: true,
        addIconShow: true,
        dockScaleRatio: (0, b.xL)(),
        dockScaleing: false,
        iconSize: b.$j,
        iconAreaPreview: false,
        iconAreaPercentValue: 50,
        iconAreaPercentPreviewValue: 50,
        lockLayout: !(window.screen.width <= n.qf),
        lockLayoutPreview: false,
        layoutWidth: b.gi,
        layoutWidthPreview: b.gi,
        scrollPageEnable: true,
        iconAutoFill: true,
        hideIconName: false,
        iconNameShortcutStatus: false,
        globalFont: b.Df,
        mobileSideBarShow: false,
        minimalistSwitchBtnStatus: "show",
        minimalistMode: false,
        showClock: true,
        showChineseCalendar: true,
        showCalendar: true,
        show24HR: true,
        showCelebrity: true,
        showDock: true,
        celebrityLastTime: Date.now(),
        showCategoryTitle: true,
        showIcp: true
      }),
      getters: {
        iconAreaPercent() {
          if (this.iconAreaPreview) {
            return this.iconAreaPercentPreviewValue;
          } else {
            return this.iconAreaPercentValue;
          }
        },
        iconLockLayout() {
          if (this.iconAreaPreview) {
            return {
              lock: this.lockLayoutPreview,
              width: this.layoutWidthPreview
            };
          } else {
            return {
              lock: this.lockLayout,
              width: this.layoutWidth
            };
          }
        },
        dockIconHeight() {
          return Math.round(this.dockScaleRatio * 28 / 100) + 32;
        },
        dockIconFontPx() {
          return `${Math.round(this.dockIconHeight * 0.63)}px`;
        },
        dockIconRadiusPx() {
          return `${Math.round(this.dockIconHeight * 0.27)}px`;
        },
        dockWrapperHeight() {
          return Math.round(this.dockScaleRatio * 42 / 100) + 44;
        },
        docWrapperPadding() {
          return Math.round((this.dockWrapperHeight - this.dockIconHeight) / 2) - this.docIconBoxPadding;
        },
        docIconBoxPadding() {
          return Math.round(((this.dockWrapperHeight - 2 - this.dockIconHeight) / 2 + this.dockWrapperHeight / 21) / 2);
        },
        currentTheme() {
          if (this.followSystem) {
            return this.systemTheme;
          } else {
            return this.theme;
          }
        },
        hideIconNameStatus() {
          return this.hideIconName && !this.iconNameShortcutStatus;
        }
      },
      actions: {
        showIconAreaPreview() {
          this.lockLayoutPreview = this.lockLayout;
          if (this.lockLayoutPreview) {
            this.layoutWidthPreview = this.layoutWidth;
          }
          this.iconAreaPreview = true;
        },
        setIconAreaPercentPreviewValue(e) {
          this.iconAreaPercentPreviewValue = e;
        },
        cancelIconAreaPreview() {
          this.iconAreaPreview = false;
        },
        submitIconAreaPreview() {
          this.iconAreaPreview = false;
          this.iconAreaPercentValue = this.iconAreaPercentPreviewValue;
          this.layoutWidth = this.layoutWidthPreview;
          this.lockLayout = this.lockLayoutPreview;
        },
        setIconAreaPreviewValue(e) {
          this.iconAreaPercentPreviewValue = e;
          this.setLockLayoutPreview(false);
        },
        changeDockScaleRatio(e) {
          const t = this.dockScaleRatio + e;
          this.dockScaleRatio = t > 100 ? 100 : t < 0 ? 0 : t;
        },
        setDockScaleing(e) {
          this.dockScaleing = e;
        },
        changeSettingShow(e) {
          this.settingsShow = e;
        },
        changeKeepAlive(e) {
          this.keepAlive = e;
        },
        changeSystemTheme(e) {
          this.systemTheme = e;
        },
        changeLeftBarDisplayStatus(e) {
          this.leftBarDisplayStatus = e;
        },
        changeBottomBarDisplayStatus(e) {
          this.bottomBarDisplayStatus = e;
        },
        setLockLayoutPreview(e) {
          this.lockLayoutPreview = e;
          if (e) {
            this.calcLayoutWidth();
          }
        },
        calcLayoutWidth() {
          this.layoutWidthPreview = document.querySelector(".icon-scroll-content").clientWidth || 1000;
        },
        setIconNameShortcutStatus(e) {
          this.iconNameShortcutStatus = e;
        },
        setLeftBarDisplaySide(e) {
          this.leftBarDisplaySide = e;
        },
        changeSidebarShow(e) {
          this.mobileSideBarShow = e;
        },
        setMinimalistSwitchBtnStatus(e) {
          this.minimalistSwitchBtnStatus = e;
        },
        setMinimalistMode(e) {
          this.minimalistMode = e;
        },
        setShowClock(e) {
          this.showClock = e;
        },
        setShowChineseCalendar(e) {
          this.showChineseCalendar = e;
        },
        setShowCalendar(e) {
          this.showCalendar = e;
        },
        setShow24HR(e) {
          this.show24HR = e;
        },
        setShowCelebrity(e) {
          this.showCelebrity = e;
        },
        setShowDock(e) {
          this.showDock = e;
        },
        updateCelebrityLastTime() {
          v().refreshWords();
          this.celebrityLastTime = Date.now();
        },
        setShowCategoryTitle(e) {
          this.showCategoryTitle = e;
        }
      }
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
      m().changeSystemTheme(e.matches ? "dark" : "light");
    });
  },
  4208: (e, t, r) => {
    "use strict";

    r.d(t, {
      F: () => f,
      Z: () => h
    });
    var n = r(7268);
    var o = r(4470);
    var a = r(5911);
    var i = r(5844);
    var c = r(4522);
    var s = r(3889);
    var l = r(6141);
    var u = r(143);
    const f = new class {
      storeMapper = new Map();
      optionMapper = new Map();
      setStore(e, t) {
        this.storeMapper.set(e, t);
      }
      setOption(e, t) {
        this.optionMapper.set(e, t);
      }
      async getSyncData(e) {
        const t = this.storeMapper.get(e);
        if (!t) {
          return null;
        }
        const r = this.optionMapper.get(e);
        if (!r) {
          return null;
        }
        let n = (0, o.Z)(t.$state, [...r.syncCloud.watch, "updateCloudTime"]);
        if (r.syncCloud.transformBackup) {
          n = await r.syncCloud.transformBackup(n);
        }
        return n;
      }
      getLocalRecord() {
        const e = {};
        l.S.forEach(t => {
          const r = this.storeMapper.get(t);
          if (!r) {
            return null;
          }
          if (r.$state.updateCloudTime) {
            e[t] = r.$state.updateCloudTime;
          }
        });
        return e;
      }
      getStore(e) {
        return this.storeMapper.get(e);
      }
    }();
    s.y.listen("all:tabs-restore-storage", async e => {
      let t = d.getStorageOption(e);
      if (!t) {
        try {
          await u.Gl.loadStore(e);
          t = d.getStorageOption(e);
        } catch (e) {}
      }
      if (!t) {
        return;
      }
      const r = c.Ar.getInstanceFromKey(e);
      if (!r) {
        return;
      }
      let [n, o] = await r.read();
      if (n) {
        return;
      }
      const {
        syncStorage: a,
        patchStoreState: i
      } = t;
      if (a.transformRestore) {
        o = await a.transformRestore(o);
      }
      i(o, {
        cause: "storage"
      });
    });
    s.y.listen("client:tabs-restore-state", async e => {
      let {
        id: t,
        data: r
      } = e;
      let n = d.getStateOption(t);
      if (!n) {
        try {
          await u.Gl.loadStore(t);
          n = d.getStateOption(t);
        } catch (e) {}
      }
      if (!n) {
        return;
      }
      const {
        patchStoreState: o
      } = n;
      o(r, {
        cause: "share"
      });
    });
    const d = new class {
      syncStorageMapper = new Map();
      syncStateMapper = new Map();
      setStorageOption(e, t) {
        this.syncStorageMapper.set(e, t);
      }
      getStorageOption(e) {
        return this.syncStorageMapper.get(e);
      }
      setStateOption(e, t) {
        this.syncStateMapper.set(e, t);
      }
      getStateOption(e) {
        return this.syncStateMapper.get(e);
      }
    }();
    const h = e => {
      let {
        options: t,
        store: r
      } = e;
      const {
        syncCloud: u,
        syncStorage: h,
        share: p
      } = t;
      const y = u && l.S.includes(r.$id);
      const v = h && c.Ar.hasInstanceFromKey(r.$id);
      if (y || v || p) {
        if (Array.isArray(p)) {
          if (h && p.some(e => h.watch.includes(e))) {
            throw new Error("share 与 syncStorage 字段重复");
          }
          d.setStateOption(r.$id, {
            ...t,
            patchStoreState: b
          });
          const e = (0, a.Z)(async e => {
            s.y.post("client:tabs-restore-state", {
              id: r.$id,
              data: (0, i.Z)(e)
            });
          }, 50, {
            leading: false
          });
          r.restartShare = t => {
            var o;
            if ((o = r.stopShare) !== null && o !== undefined) {
              o.call(r);
            }
            r.stopShare = (0, n.YP)(() => {
              const e = {};
              p.forEach(t => {
                e[t] = r.$state[t];
              });
              return e;
            }, async t => {
              e(t);
            }, t);
          };
          r.restartShare();
        }
        if (v) {
          if (y) {
            h.watch.push("updateCloudTime");
          }
          const e = c.Ar.getInstanceFromKey(r.$id);
          if (!e) {
            throw new Error("未定义Storage");
          }
          if (e.initData) {
            r.$patch((0, o.Z)(e.initData, h.watch));
          }
          d.setStorageOption(r.$id, {
            ...t,
            patchStoreState: b
          });
          const l = (0, a.Z)(async t => {
            const [n] = await e.write((0, i.Z)(t));
            if (!n) {
              s.y.post("all:tabs-restore-storage", r.$id);
            }
          }, 50, {
            leading: false
          });
          r.reset = () => {
            var e;
            var t;
            var n;
            var o;
            var a;
            if ((e = r.stopBackupCloud) !== null && e !== undefined) {
              e.call(r);
            }
            if ((t = r.stopBackupStorage) !== null && t !== undefined) {
              t.call(r);
            }
            r.$reset();
            r.$state.updateCloudTime = 0;
            if ((n = r.restartBackupCloud) !== null && n !== undefined) {
              n.call(r);
            }
            if ((o = r.restartBackupStorage) !== null && o !== undefined) {
              o.call(r);
            }
            const i = c.Ar.getInstanceFromKey(r.$id);
            if (i != null && (a = i.delete) !== null && a !== undefined) {
              a.call(i);
            }
          };
          r.restartBackupStorage = e => {
            var t;
            if ((t = r.stopBackupStorage) !== null && t !== undefined) {
              t.call(r);
            }
            r.stopBackupStorage = (0, n.YP)(() => {
              const e = {};
              h.watch.forEach(t => {
                e[t] = r.$state[t];
              });
              return e;
            }, async e => {
              let t = e;
              if (h.transformBackup) {
                t = await h.transformBackup(e);
              }
              if (t) {
                l(t);
              }
            }, e);
          };
          r.restartBackupStorage();
        }
        if (y) {
          window.addEventListener("sync-cloud:restore", async e => {
            const {
              key: t,
              payload: n,
              type: a
            } = e.detail;
            if (t !== r.$id) {
              return;
            }
            if (n.updateCloudTime === r.updateCloudTime) {
              return;
            }
            let i = n;
            if (u.transformRestore) {
              i = await u.transformRestore(i, a);
              if (!i) {
                return;
              }
            } else if (a === "cloud-merge" || a === "import-merge") {
              i = (0, l.b)((0, o.Z)(r.$state, [...u.watch, "updateCloudTime"]), i);
            }
            if (a === "undo" || a === "cloud-auto" || a === "cloud-cloud") {
              b(i, {
                cause: "cloud"
              });
            } else if (a === "cloud-merge") {
              b(i, {
                cause: "cloud",
                needBackup: true
              });
            } else if (a === "import-import" || a === "import-merge") {
              b(i, {
                cause: "cloud",
                needBackup: true,
                notAutoCloudTime: true
              });
            }
          });
          r.restartBackupCloud = function (e) {
            var t;
            let o = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
            if ((t = r.stopBackupCloud) !== null && t !== undefined) {
              t.call(r);
            }
            r.stopBackupCloud = (0, n.YP)(() => {
              const e = {};
              u.watch.forEach(t => {
                e[t] = r.$state[t];
              });
              return e;
            }, async e => {
              let t = e;
              if (u.transformBackup) {
                t = await u.transformBackup(e);
              }
              if (t) {
                let e;
                if (o && r.$state.updateCloudTime) {
                  e = r.$state.updateCloudTime;
                  o = false;
                } else {
                  e = g();
                  r.$patch({
                    updateCloudTime: e
                  });
                }
                const t = new CustomEvent("watch:sync-cloud-backup", {
                  detail: {
                    key: r.$id,
                    updateCloudTime: e
                  }
                });
                window.dispatchEvent(t);
              }
            }, e);
          };
          r.restartBackupCloud();
          f.setStore(r.$id, r);
          f.setOption(r.$id, t);
        }
      }
      function b(e, t) {
        if (t.cause === "share") {
          r.stopShare();
          r.$patch(e);
          r.restartShare();
        } else if (t.cause === "storage") {
          var n;
          var a;
          r.stopBackupStorage();
          if ((n = r.stopBackupCloud) !== null && n !== undefined) {
            n.call(r);
          }
          r.$patch((0, o.Z)(e, h.watch));
          r.restartBackupStorage();
          if ((a = r.restartBackupCloud) !== null && a !== undefined) {
            a.call(r);
          }
        } else if (t.cause === "cloud") {
          const n = [...u.watch, "updateCloudTime"];
          if (t.needBackup && t.notAutoCloudTime) {
            r.restartBackupCloud(undefined, true);
            r.$patch((0, o.Z)(e, n));
          } else {
            if (!t.needBackup) {
              r.stopBackupCloud();
            }
            r.$patch((0, o.Z)(e, n));
            if (!t.needBackup) {
              r.restartBackupCloud();
            }
          }
        }
      }
    };
    let p = 0;
    function g() {
      const {
        lastBackupTime: t = 0
      } = f.getStore(c.BU.sync)?.$state || {};
      const r = Date.now();
      if (r < t) {
        p += 1;
        return t + p;
      } else {
        return r;
      }
    }
  },
  6141: (e, t, r) => {
    "use strict";

    r.d(t, {
      S: () => a,
      b: () => i
    });
    var n = r(4522);
    var o = r(5844);
    const a = [n.BU.wallpaper, n.BU.icon, n.BU.search, n.BU.setting, n.BU.note, n.BU.todo, n.BU.timerBirthday, n.BU.timerFestival, n.BU.timerYear, n.BU.weather, n.BU.hotsearch, n.BU.calculator, n.BU.worldcup, n.BU.exchangeRate, n.BU.habit, n.BU.stock, n.BU.game, n.BU.movie, n.BU.book, n.BU.play, n.BU.clock, n.BU.worldClock, n.BU.hotApp, n.BU.nba, n.BU.chatgpt, n.BU.pageTurning];
    const i = (e, t) => {
      e = (e => {
        const t = (0, o.Z)(e);
        Object.keys(t).forEach(e => {
          const r = t[e];
          if (Array.isArray(r) && r[0]) {
            const n = r[0];
            if (typeof n == "object" && n.id && typeof n.updateTime == "number") {
              if (Array.isArray(n.children)) {
                r.forEach(e => {
                  e.children = e.children.filter(e => e.updateTime !== 0);
                });
                t[e] = r.filter(e => !!e.updateTime && !!e.children.length);
              } else {
                t[e] = r.filter(e => !!e.updateTime);
              }
            }
          }
        });
        return t;
      })(e);
      let r = t;
      let n = e;
      if (e.updateCloudTime && t.updateCloudTime < e.updateCloudTime) {
        r = e;
        n = t;
      }
      const a = {
        ...n,
        ...r
      };
      Object.keys(a).forEach(e => {
        const t = n[e];
        const o = r[e];
        if (Array.isArray(o) && Array.isArray(t)) {
          const r = o[0] ? o[0] : t[0];
          if (typeof r == "string") {
            a[e] = ((e, t) => [...new Set([...t, ...e])])(t, o);
          } else if (typeof r == "object" && r.id) {
            if (Array.isArray(r.children)) {
              a[e] = ((e, t) => {
                const r = new Map();
                const n = new Map();
                t.forEach(e => {
                  r.set(e.id, e);
                  if (Array.isArray(e.children)) {
                    e.children.forEach(t => {
                      if (Array.isArray(t.children)) {
                        n.set(t.id, {
                          parent: e.id,
                          item: {
                            ...t,
                            children: []
                          }
                        });
                        t.children.forEach(r => {
                          n.set(r.id, {
                            parent: t.id,
                            cateId: e.id,
                            item: r
                          });
                        });
                      } else {
                        n.set(t.id, {
                          parent: e.id,
                          item: t
                        });
                      }
                    });
                  }
                });
                e.forEach(e => {
                  const t = r.get(e.id);
                  if (t) {
                    if (t.updateTime < e.updateTime) {
                      r.set(e.id, e);
                    }
                  } else {
                    r.set(e.id, e);
                  }
                  if (Array.isArray(e.children)) {
                    e.children.forEach(t => {
                      if (Array.isArray(t.children)) {
                        if (!n.get(t.id)) {
                          n.set(t.id, {
                            parent: e.id,
                            item: {
                              ...t,
                              children: []
                            }
                          });
                        }
                        t.children.forEach(r => {
                          const o = n.get(r.id);
                          if (o) {
                            if (o.item.updateTime < r.updateTime) {
                              n.set(r.id, {
                                parent: o.parent,
                                cateId: e.id,
                                item: r
                              });
                            }
                          } else {
                            n.set(r.id, {
                              parent: t.id,
                              cateId: e.id,
                              item: r
                            });
                          }
                        });
                      } else {
                        const r = n.get(t.id);
                        if (r) {
                          if (r.item.updateTime < t.updateTime) {
                            n.set(t.id, {
                              parent: r.parent,
                              item: t
                            });
                          }
                        } else {
                          n.set(t.id, {
                            parent: e.id,
                            item: t
                          });
                        }
                      }
                    });
                  }
                });
                const o = t.map(e => {
                  const t = r.get(e.id);
                  r.delete(e.id);
                  return t;
                });
                if (r.size > 0) {
                  r.forEach(e => {
                    o.push(e);
                  });
                }
                o.forEach(e => {
                  e.children = e.children.map(e => {
                    const t = n.get(e.id);
                    n.delete(e.id);
                    if (t == null) {
                      return undefined;
                    } else {
                      return t.item;
                    }
                  }).filter(e => !!e);
                });
                if (n.size > 0) {
                  n.forEach(e => {
                    const t = o.find(t => t.id === e.parent);
                    if (t) {
                      t.children.push(e.item);
                      n.delete(e.item.id);
                    }
                  });
                }
                if (n.size > 0) {
                  n.forEach(e => {
                    const t = o.find(t => t.id === e.cateId);
                    if (t) {
                      const n = t.children.find(t => t.id === e.parent);
                      var r;
                      if (n) {
                        if ((r = n.children) !== null && r !== undefined) {
                          r.push(e.item);
                        }
                      }
                    }
                  });
                }
                o.forEach(e => {
                  if (Array.isArray(e.children)) {
                    e.children = e.children.map(e => Array.isArray(e.children) && e.children.length < 1 ? null : e).filter(e => !!e);
                  }
                });
                return o;
              })(t, o);
            } else {
              a[e] = ((e, t) => {
                const r = new Map();
                t.forEach(e => {
                  r.set(e.id, e);
                });
                e.forEach(e => {
                  const t = r.get(e.id);
                  if (t) {
                    if (t.updateTime < e.updateTime) {
                      r.set(e.id, e);
                    }
                  } else {
                    r.set(e.id, e);
                  }
                });
                const n = t.map(e => {
                  const t = r.get(e.id);
                  r.delete(e.id);
                  return t;
                }).filter(e => !!e);
                if (r.size > 0) {
                  r.forEach(e => {
                    n.push(e);
                  });
                }
                return n;
              })(t, o);
            }
          }
        }
      });
      return a;
    };
  },
  5676: (e, t, r) => {
    "use strict";

    r.r(t);
    r.d(t, {
      useUserStore: () => fe
    });
    var n = r(8793);
    var o = r(4522);
    var a = r(3131);
    var i = r(344);
    var c = r(7268);
    var s = r(4208);
    var l = r(2098);
    var u = r(4003);
    var f = r(6141);
    var d = r(4470);
    var h = r(8287);
    var p = r(4365);
    const g = function (e) {
      return function (t, r, n) {
        var o = -1;
        var a = Object(t);
        var i = n(t);
        for (var c = i.length; c--;) {
          var s = i[e ? c : ++o];
          if (r(a[s], s, a) === false) {
            break;
          }
        }
        return t;
      };
    }();
    var y = r(4348);
    const v = function (e, t) {
      return e && g(e, t, y.Z);
    };
    var b = r(4275);
    const m = function (e, t) {
      var r = {};
      t = (0, b.Z)(t, 3);
      v(e, function (e, n, o) {
        (0, p.Z)(r, n, t(e, n, o));
      });
      return r;
    };
    var w = r(5844);
    var _ = r(5911);
    const k = {
      loading: i18n("正在同步"),
      success: i18n("同步完成"),
      fail: i18n("同步失败"),
      undo: i18n("更新成功")
    };
    const A = {
      loading: i18n("加载中"),
      fail: i18n("加载失败")
    };
    const E = (0, a.Q_)("tips", {
      share: ["tipsList"],
      state: () => ({
        undoHideTimer: null,
        tipsList: []
      }),
      getters: {
        hasUndo() {
          return !!this.tipsList.some(e => e.type === "undo");
        }
      },
      actions: {
        addTips(e) {
          const t = {
            ...e
          };
          if (t.message === undefined) {
            let e = "";
            if (t.category === "syncOrMerge") {
              e = k[t.type];
              if (typeof this.undoHideTimer == "number") {
                clearTimeout(this.undoHideTimer);
              }
              if (t.type === "undo") {
                this.undoHideTimer = window.setTimeout(() => {
                  t.status = "hidden";
                  this.tipsList = [...this.tipsList];
                }, 6000);
              } else if (typeof this.undoHideTimer == "number") {
                this.undoHideTimer = null;
              }
            } else if (t.category === "wallpaperLoad") {
              e = A[t.type];
            }
            Object.assign(t, {
              message: e
            });
          }
          const r = this.tipsList.findIndex(e => e.category === t.category);
          if (r > -1) {
            const [e] = this.tipsList.splice(r, 1, t);
            if (e.timer) {
              clearTimeout(e.timer);
            }
          } else {
            this.tipsList.push(t);
          }
          this.tipsList = [...this.tipsList];
          if (t.type === "success" || e.type === "fail") {
            t.timer = window.setTimeout(() => {
              this.removeTips({
                category: e.category
              });
            }, 5000);
          }
        },
        removeTips(e) {
          let {
            category: t
          } = e;
          if (t === "syncOrMerge" && this.undoHideTimer) {
            clearTimeout(this.undoHideTimer);
          }
          const r = this.tipsList.findIndex(e => e.category === t);
          if (r > -1) {
            const e = this.tipsList[r].timer;
            if (e) {
              clearTimeout(e);
            }
            this.tipsList.splice(r, 1);
            this.tipsList = [...this.tipsList];
          }
        }
      }
    });
    var C = r(143);
    let x = null;
    const S = (0, a.Q_)(o.BU.sync, {
      syncStorage: {
        watch: ["mergeModal", "isImport", "mergeType", "waitMergeData", "undoModal", "undoModalTime", "undoLocalData", "firstRestoreSuccess", "lastBackupTime", "autoBackupPipe"]
      },
      state: () => ({
        isImport: false,
        mergeModal: false,
        mergeType: null,
        waitMergeData: null,
        undoModal: false,
        undoModalTime: 0,
        undoLocalData: {},
        autoSyncStatus: null,
        autoSyncProcess: null,
        autoSyncFailMsg: "",
        lastBackupTime: 0,
        firstRestoreSuccess: false,
        autoBackupPipe: {
          datas: {},
          time: 0
        }
      }),
      actions: {
        getDiffKeys(e = {}) {
          const t = s.F.getLocalRecord();
          if ((this.firstRestoreSuccess ? "auto" : "login") === "auto") {
            return Object.keys(e).filter(r => e[r] && e[r] > (t[r] || 0));
          }
          return Object.keys(e).filter(r => e[r] && e[r] !== t[r]);
        },
        setAutoSyncStatus(e) {
          let {
            status: t,
            errMsg: r
          } = e;
          clearTimeout(x);
          if (t === "restore" || t === "backup") {
            this.autoSyncProcess = t;
            this.autoSyncStatus = "loading";
          } else if (t === "fail" || t === "success") {
            if (this.autoSyncStatus !== "loading") {
              return;
            }
            x = setTimeout(() => {
              this.setAutoSyncStatus({
                status: null
              });
            }, 5000);
            this.autoSyncStatus = t;
            this.autoSyncFailMsg = r || "";
          } else {
            this.autoSyncStatus = null;
            this.autoSyncProcess = null;
            this.autoSyncFailMsg = "";
          }
          if (this.autoSyncStatus) {
            E().addTips({
              category: "syncOrMerge",
              type: this.autoSyncStatus
            });
          }
        },
        setBackupPipe(e, t) {
          const r = {
            ...this.autoBackupPipe.datas,
            [e]: t
          };
          this.autoBackupPipe = {
            datas: r,
            time: t
          };
        },
        updateBackupPipeTime() {
          if (Object.keys(this.autoBackupPipe.datas).length > 0) {
            this.autoBackupPipe = {
              datas: this.autoBackupPipe.datas,
              time: this.autoBackupPipe.time + 1
            };
          }
        },
        clearBackupPipe(e) {
          if (arguments.length > 1 && arguments[1] !== undefined && arguments[1] || this.autoBackupPipe.time === e) {
            this.autoBackupPipe = {
              datas: {},
              time: 0
            };
          }
        },
        setSyncSucess(e) {
          this.lastBackupTime = e;
          this.setAutoSyncStatus({
            status: "success"
          });
        },
        async autoBackup(e, t) {
          if (this.autoSyncStatus === "loading") {
            this.updateBackupPipeTime();
            return;
          }
          this.setAutoSyncStatus({
            status: "backup"
          });
          const [r, n] = await (async (e, t) => {
            try {
              const r = await h.hj.post(`${u.H}user-sync/backup`, {
                ...(0, d.Z)(e, f.S),
                force: t
              }, {
                _auth: true
              });
              if (r.code === 0) {
                return [null, r.data];
              }
              throw r;
            } catch (e) {
              return [i18n("网络请求错误")];
            }
          })(e, t);
          if (r !== null) {
            this.setAutoSyncStatus({
              status: "fail",
              errMsg: r
            });
            return;
          }
          this.isImport = false;
          const {
            lastBackupTime: o,
            backupKeys: a,
            backupRecord: i
          } = n;
          const c = {
            ...i
          };
          a.forEach(e => {
            delete c[e];
          });
          const [s, l] = await this.getAutoRestoreData(c);
          if (s === null) {
            await this.useRestore(l, "cloud-auto");
            this.setSyncSucess(o);
          } else {
            this.setAutoSyncStatus({
              status: "fail",
              errMsg: s
            });
          }
        },
        async useRestore(e, t) {
          const r = {
            ...e
          };
          const {
            datas: n
          } = this.autoBackupPipe;
          if (t === "cloud-auto") {
            Object.keys(n).forEach(t => {
              var o;
              if ((o = e[t]) !== null && o !== undefined && o.updateCloudTime) {
                if (e[t].updateCloudTime > n[t]) {
                  delete n[t];
                } else {
                  delete r[t];
                }
              }
            });
          } else {
            this.clearBackupPipe(undefined, true);
          }
          Object.keys(r).forEach(async e => {
            const n = new CustomEvent("sync-cloud:restore", {
              detail: {
                key: e,
                payload: r[e],
                type: t
              }
            });
            await C.Gl.loadStore(e);
            window.dispatchEvent(n);
          });
          if (t === "import-import") {
            const e = s.F.getLocalRecord();
            for (const t in e) {
              var o;
              var a;
              if (!r[t]) {
                if ((o = s.F.getStore(t)) !== null && o !== undefined && (a = o.reset) !== null && a !== undefined) {
                  a.call(o);
                }
              }
            }
          }
          if (t.startsWith("import-")) {
            this.isImport = true;
          }
        },
        async getAutoRestoreData(e) {
          const t = this.getDiffKeys(e);
          if (t.length > 0) {
            this.setAutoSyncStatus({
              status: "restore"
            });
            const [e, r] = await (async e => {
              try {
                const t = await h.hj.get(`${u.H}user-sync/restore`, {
                  keys: e
                }, {
                  _auth: true
                });
                if (t.code === 0) {
                  return [null, {
                    lastBackupTime: t.data.lastBackupTime,
                    data: (0, d.Z)(t.data, f.S)
                  }];
                }
                throw t;
              } catch (e) {
                return [i18n("网络请求错误")];
              }
            })(t);
            if (e !== null) {
              return [e];
            } else {
              return [null, r.data];
            }
          }
          return [null, {}];
        },
        async getCloudLatest(e = 0, t) {
          if (!this.mergeModal || this.firstRestoreSuccess) {
            if (this.lastBackupTime < e) {
              if (this.autoSyncStatus === "loading") {
                setTimeout(() => {
                  this.getCloudLatest(e, t);
                }, 3000);
                return;
              }
              const [r, n] = await this.getAutoRestoreData(t);
              if (r !== null) {
                this.setAutoSyncStatus({
                  status: "fail",
                  errMsg: r
                });
                return;
              }
              if (Object.keys(n).length === 0) {
                this.setAutoSyncStatus({
                  status: null
                });
                this.firstRestoreSuccess = true;
                return;
              }
              if (!this.firstRestoreSuccess) {
                if (this.checkRecordForMerge(n)) {
                  this.showMergeModal(n, "sync", e);
                  return;
                }
                this.firstRestoreSuccess = true;
              }
              await this.useRestore(n, this.firstRestoreSuccess || this.undoModal ? "cloud-auto" : "cloud-cloud");
              this.setSyncSucess(e);
            } else if (e === 0) {
              this.firstRestoreSuccess = true;
              this.toBackupLocalAllData();
            }
            return {};
          }
          this.setAutoSyncStatus({
            status: "restore"
          });
        },
        toBackupLocalAllData() {
          f.S.forEach(async e => {
            const t = await s.F.getSyncData(e);
            if (t != null && t.updateCloudTime) {
              this.setBackupPipe(e, t.updateCloudTime);
            }
          });
        },
        checkRecordForMerge(e) {
          const t = m(e, e => e == null ? undefined : e.updateCloudTime);
          const r = s.F.getLocalRecord();
          for (const e in t) {
            if (Object.prototype.hasOwnProperty.call(t, e)) {
              const n = t[e];
              const o = r[e];
              C.Gl.loadStore(e);
              if (o && o !== n) {
                return true;
              }
              delete r[e];
            }
          }
          return Object.keys(r).length !== 0;
        },
        async showMergeModal(e, t, r) {
          this.mergeModal = true;
          this.mergeType = t;
          this.waitMergeData = {
            lastBackupTime: r,
            restoreData: e
          };
          const n = {};
          await Promise.all(f.S.map(async e => {
            const t = await s.F.getSyncData(e);
            if (t) {
              n[e] = t;
            }
          }));
          this.undoLocalData = n;
        },
        hideMergeModalAndShowUndo() {
          this.mergeModal = false;
          this.firstRestoreSuccess = false;
          setTimeout(() => {
            this.undoModal = true;
            this.undoModalTime = Date.now();
            E().addTips({
              category: "syncOrMerge",
              type: "undo"
            });
          }, 100);
        },
        hideUndoModal() {
          if (this.undoModal) {
            this.undoModal = false;
            this.undoModalTime = 0;
            E().removeTips({
              category: "syncOrMerge"
            });
            this.waitMergeData = null;
            this.undoLocalData = {};
            this.firstRestoreSuccess = true;
          }
        },
        undoRestore() {
          this.mergeModal = true;
          this.undoModal = false;
          this.undoModalTime = 0;
          E().removeTips({
            category: "syncOrMerge"
          });
          this.useRestore(this.undoLocalData, "undo");
        },
        async login(e) {
          this.clearBackupPipe();
          await this.getCloudLatest(e.lastBackupTime, e["backup-record"]);
        },
        logout() {
          this.clearBackupPipe();
          this.autoSyncStatus = null;
          this.autoSyncProcess = null;
          this.autoSyncFailMsg = "";
          this.lastBackupTime = 0;
          this.firstRestoreSuccess = false;
          this.mergeModal = false;
          this.mergeType = null;
          this.undoModal = false;
          this.waitMergeData = null;
          this.undoLocalData = {};
          O.stopSync();
          E().removeTips({
            category: "syncOrMerge"
          });
        },
        importData(e) {
          const {
            data: t
          } = e;
          if (this.checkRecordForMerge(t)) {
            this.showMergeModal(t, "import");
          } else {
            this.useRestore(t, "import-import");
          }
        },
        async exportData() {
          const e = {};
          await Promise.all(f.S.map(async t => {
            const r = await s.F.getSyncData(t);
            if (r && r.updateCloudTime) {
              e[t] = r;
            }
          }));
          return {
            version: u.Ji,
            branch: u.tI,
            timestamp: Date.now(),
            platform: u.Lt,
            data: (0, w.Z)(e)
          };
        }
      }
    });
    const O = new class {
      enableCollectBackupPipe = false;
      constructor() {
        window.addEventListener("watch:sync-cloud-backup", e => {
          const {
            key: t,
            updateCloudTime: r
          } = e.detail;
          S().setBackupPipe(t, r);
        });
      }
      stopWatchUndoModel = null;
      hideUndoTimer = null;
      startWatchUndoModel = async () => {
        if (this.stopWatchUndoModel) {
          return;
        }
        const e = S();
        if (!e.firstRestoreSuccess) {
          this.stopWatchUndoModel = (0, c.YP)(() => e.undoModalTime, async t => {
            clearTimeout(this.hideUndoTimer);
            if (t) {
              const r = t + 40000 - Date.now();
              if (r > 5000) {
                let n;
                if (Date.now() - t > 6000) {
                  n = "hidden";
                }
                E().addTips({
                  category: "syncOrMerge",
                  type: "undo",
                  status: n
                });
                this.hideUndoTimer = window.setTimeout(() => {
                  e.hideUndoModal();
                  this.startWatchBackupPipe();
                  e.updateBackupPipeTime();
                }, r);
              } else {
                e.hideUndoModal();
                this.startWatchBackupPipe();
                e.updateBackupPipeTime();
              }
            }
          }, {
            immediate: true
          });
        }
      };
      stopWatchManual = () => {};
      startWatchFirstManualBackupPipe = async () => {};
      startWatchBackupPipe = async () => {
        const e = S();
        if (e.firstRestoreSuccess) {
          this.stopWatch();
          this.stopWatch = (0, c.YP)(() => e.autoBackupPipe, async t => {
            if (!!t.time && !e.undoModal && !e.mergeModal) {
              this.throttleBackup({
                ...t
              });
            }
          }, {
            immediate: true,
            deep: true
          });
        }
      };
      backup = async e => {
        if (!(await (0, l.n)())) {
          return;
        }
        const t = {};
        await Promise.all(Object.keys(e.datas).map(async e => {
          const r = e;
          const n = await s.F.getSyncData(r);
          if (n) {
            t[r] = n;
          }
        }));
        const r = S();
        if (r.undoModal || r.mergeModal) {
          r.updateBackupPipeTime();
        } else {
          if (Object.keys(t).length > 0) {
            await r.autoBackup(t, r.isImport);
          }
          r.clearBackupPipe(e.time);
        }
      };
      throttleBackup = (0, _.Z)(this.backup, 3000, {
        leading: false
      });
      stopWatch = () => {};
      stopSync = () => {
        this.enableCollectBackupPipe = false;
        this.stopWatch();
      };
    }();
    var B = r(3889);
    var j = r(1475);
    function D(e) {
      return [{
        message: "Unknown Error",
        error: new Error(),
        type: "response",
        payload: e
      }];
    }
    function F(e) {
      return [{
        message: "Network Error",
        error: e,
        type: "network"
      }];
    }
    var P = r(5981);
    const M = (0, a.Q_)(o.BU.payment, {
      syncStorage: {
        watch: ["inviteListCount", "prices", "inviteOff"]
      },
      state: () => ({
        showPayManual: "",
        activeCard: "intro",
        prices: [],
        inviteOff: 0,
        inviteListList: [],
        inviteListCount: 0,
        inviteListMeta: {
          pageNo: 0,
          pageSize: 50,
          totalPages: 1,
          loading: false,
          error: false,
          finished: false
        },
        subListMeta: {
          loading: false,
          error: false,
          finished: false
        },
        billingList: []
      }),
      getters: {
        showPayAuto() {
          const e = fe();
          return this.activeCard === "success" || !e.isLogin || !e.user.vip;
        }
      },
      actions: {
        clear() {
          this.inviteListMeta = {
            pageNo: 0,
            pageSize: 50,
            totalPages: 1,
            loading: false,
            error: false,
            finished: false
          };
          this.subListMeta = {
            loading: false,
            error: false,
            finished: false
          };
          this.inviteListCount = 0;
          this.inviteListList = [];
          this.billingList = [];
        },
        setShowPayManual(e) {
          if (e === "modifyPlan") {
            this.activeCard = "buy";
          }
          this.showPayManual = e;
        },
        async getPrices() {
          const [e, t] = await (async () => {
            try {
              const e = await h.hj.get(`${u.H}sub/prices`, {}, {
                _auth: true,
                _delay: 0
              });
              if (e.code === 0) {
                return [null, e.data];
              } else {
                return D(e);
              }
            } catch (e) {
              return F(e);
            }
          })();
          if (e) {
            P.R.fail({
              message: e.message
            });
          } else {
            this.prices = t.list;
            this.inviteOff = t.inviteOff;
          }
        },
        async getInviteList(e) {
          if (e > 0 && this.inviteListMeta.pageNo >= this.inviteListMeta.totalPages) {
            return;
          }
          this.inviteListMeta.loading = true;
          this.inviteListMeta.error = false;
          const [t, r] = await (async e => {
            try {
              const t = await h.hj.get(`${u.H}sub/invite-list`, {
                pageNo: e
              }, {
                _auth: true,
                _delay: 0
              });
              if (t.code === 0) {
                t.data.list = t.data.list.map(e => {
                  e._time = (0, j.F8)(e.createdAt);
                  return e;
                });
                return [null, t.data];
              } else {
                return D(t);
              }
            } catch (e) {
              return F(e);
            }
          })(e);
          this.inviteListMeta.loading = false;
          if (t) {
            this.inviteListMeta.error = true;
          } else {
            this.inviteListCount = r.count;
            this.inviteListList = e <= 1 ? [...r.list] : [...this.inviteListList, ...r.list];
            this.inviteListMeta = {
              ...this.inviteListMeta,
              pageNo: r.pageNo,
              pageSize: r.pageSize,
              totalPages: r.totalPages,
              finished: r.pageNo >= r.totalPages
            };
          }
        },
        async getSubRecord() {
          this.subListMeta.loading = true;
          this.subListMeta.error = false;
          const e = this.billingList.length > 0 ? this.billingList.slice(-1)[0].id : "";
          const [t, r] = await (async e => {
            try {
              const t = await h.hj.get(`${u.H}sub/billing`, {
                begin: e
              }, {
                _auth: true,
                _delay: 0
              });
              if (t.code === 0) {
                t.data.list = t.data.list.map(e => {
                  e._time = (0, j.F8)(e.created);
                  return e;
                });
                return [null, t.data];
              } else {
                return D(t);
              }
            } catch (e) {
              return F(e);
            }
          })(e);
          this.subListMeta.loading = false;
          if (t) {
            this.subListMeta.error = true;
          } else {
            this.subListMeta.finished = !r.hasMore;
            this.billingList = [...this.billingList, ...r.list];
          }
        },
        setActiveCard(e) {
          this.activeCard = e;
        },
        async createOrder(e, t) {
          const [r, n] = await (async (e, t) => {
            try {
              const r = await h.hj.post(`${u.H}sub/checkout-create`, {
                price_id: e,
                invite_code: t
              }, {
                _auth: true,
                _delay: 0
              });
              if (r.code === 0) {
                return [null, r.data];
              } else {
                return D(r);
              }
            } catch (e) {
              return F(e);
            }
          })(e, t);
          if (r !== null) {
            if (r.type === "response" && r.payload.code === 4017) {
              P.R.fail({
                message: "Invite code error."
              });
            }
            return "";
          } else {
            return n;
          }
        },
        async modifyPayMethod() {
          const [e, t] = await (async () => {
            try {
              const e = await h.hj.post(`${u.H}sub/checkout-modify`, {}, {
                _auth: true,
                _delay: 0
              });
              if (e.code === 0) {
                return [null, e.data];
              } else {
                return D(e);
              }
            } catch (e) {
              return F(e);
            }
          })();
          if (e !== null) {
            return "";
          } else {
            return t;
          }
        },
        async modifyPlan(e, t) {
          const [r] = await (async (e, t) => {
            try {
              const r = await h.hj.post(`${u.H}sub/modify`, {
                price_id: e,
                invite_code: t
              }, {
                _auth: true,
                _delay: 0
              });
              if (r.code === 0) {
                return [null, r.data];
              } else {
                return D(r);
              }
            } catch (e) {
              return F(e);
            }
          })(e, t);
          if (r !== null) {
            P.R.fail({
              message: "Update failed."
            });
            return false;
          } else {
            this.setShowPayManual("");
            P.R.success({
              message: "Success, the next cycle will use the new plan"
            });
            return true;
          }
        }
      }
    });
    r(1585);
    var T = r(5424);
    var I = r(8039);
    var L = Math.floor;
    var Z = Math.random;
    const U = function (e, t) {
      return e + L(Z() * (t - e + 1));
    };
    const R = function (e, t) {
      var r = -1;
      var n = e.length;
      var o = n - 1;
      for (t = t === undefined ? n : t; ++r < t;) {
        var a = U(r, o);
        var i = e[a];
        e[a] = e[r];
        e[r] = i;
      }
      e.length = t;
      return e;
    };
    const z = function (e) {
      return R((0, I.Z)(e));
    };
    var H = r(2743);
    const N = function (e, t) {
      return (0, H.Z)(t, function (t) {
        return e[t];
      });
    };
    const W = function (e) {
      if (e == null) {
        return [];
      } else {
        return N(e, (0, y.Z)(e));
      }
    };
    const $ = function (e) {
      return R(W(e));
    };
    var q = r(3829);
    const Y = function (e) {
      return ((0, q.Z)(e) ? z : $)(e);
    };
    var Q = r(8509);
    var V = r.n(Q);
    var G = r(9543);
    var K = r.n(G);
    function J(e, t, r, n, o) {
      return (o - n) / (r - t) * (e - r) + o;
    }
    function X(e) {
      const t = function (e) {
        const t = e.colors;
        const r = e.pigment;
        const n = e.lighting;
        const o = J(n, 0, 100, 137, 204);
        const a = J(n, 0, 100, 18, 153);
        const i = `rgb(255, ${String(Math.ceil(o))}, ${String(Math.ceil(a))})`;
        return t.map(e => n === 50 && r === 50 ? e : V()(e).mix(V()(i), J(n, 0, 100, -0.2, 0.2)).saturate(J(n, 0, 100, -0.1, 0.1)).darken(J(n, 0, 100, -0.05, 0.05)).saturate(J(r, 0, 100, -0.5, 0.5)).darken(J(r, 0, 100, -0.1, 0.1)).hex());
      }({
        colors: e.colors,
        pigment: e.pigment !== undefined ? e.pigment : Math.random() * 50,
        lighting: e.lighting !== undefined ? e.lighting : Math.random() * 50
      });
      const r = t[0];
      const n = t[1];
      const o = K()(r).luminance() < K()(n).luminance();
      const a = o ? r : n;
      const i = o ? n : r;
      const c = K().bezier([a, i]).scale().colors(4);
      return {
        id: c.join(""),
        category: e.category,
        primary: a,
        secondary: i,
        colors: c
      };
    }
    const ee = [{
      category: "red",
      colors: ["#FF0000", "#333333"]
    }, {
      category: "red",
      colors: ["#C9253D", "#FC7244"]
    }, {
      category: "red",
      colors: ["#ED403B", "#FBB587"]
    }, {
      category: "red",
      colors: ["#FC0100", "#C5BFB6"]
    }, {
      category: "red",
      colors: ["#DC3022", "#9D2932"]
    }, {
      category: "red",
      colors: ["#FD5944", "#ACA285"]
    }, {
      category: "red",
      colors: ["#F55361", "#FFEA82"]
    }, {
      category: "red",
      colors: ["#940812", "#F33B89"]
    }, {
      category: "red",
      colors: ["#C42729", "#19B5FF"]
    }, {
      category: "red",
      colors: ["#E5806E", "#2FCFBA"]
    }, {
      category: "red",
      colors: ["#CF376E", "#E16C55"]
    }, {
      category: "red",
      colors: ["#CF376E", "#511959"]
    }, {
      category: "red",
      colors: ["#C34538", "#E2E0DF"]
    }, {
      category: "red",
      colors: ["#CF0110", "#901C22"]
    }, {
      category: "red",
      colors: ["#E77876", "#18D0D8"]
    }, {
      category: "red",
      colors: ["#E77576", "#D5B837"]
    }, {
      category: "red",
      colors: ["#E77576", "#44254F"]
    }, {
      category: "red",
      colors: ["#DA3047", "#E7E7EE"]
    }, {
      category: "red",
      colors: ["#D34445", "#DD7456"]
    }, {
      category: "red",
      colors: ["#DF4B58", "#95DC28"]
    }, {
      category: "red",
      colors: ["#DB343E", "#881E30"]
    }, {
      category: "red",
      colors: ["#510E0E", "#DB343E"]
    }, {
      category: "red",
      colors: ["#F90043", "#F56A9E"]
    }, {
      category: "red",
      colors: ["#FE2E16", "#00B5B5"]
    }, {
      category: "red",
      colors: ["#D23656", "#E3D5B6"]
    }, {
      category: "red",
      colors: ["#B20024", "#EE6242"]
    }, {
      category: "red",
      colors: ["#FF315B", "#3DEE6D"]
    }, {
      category: "red",
      colors: ["#EB2967", "#CDFFBA"]
    }, {
      category: "red",
      colors: ["#FF0000", "#0077FF"]
    }, {
      category: "red",
      colors: ["#DC3022", "#FEB3A7"]
    }, {
      category: "red",
      colors: ["#FF0000", "#C7BFB6"]
    }, {
      category: "red",
      colors: ["#FF225E", "#520430"]
    }, {
      category: "red",
      colors: ["#FF0026", "#7A004E"]
    }, {
      category: "red",
      colors: ["#FF0618", "#FBF6D2"]
    }, {
      category: "red",
      colors: ["#FF4843", "#8791D5"]
    }, {
      category: "red",
      colors: ["#FF3634", "#F6F5F8"]
    }, {
      category: "red",
      colors: ["#EF857E", "#161839"]
    }, {
      category: "red",
      colors: ["#E74242", "#414242"]
    }, {
      category: "red",
      colors: ["#E03C2D", "#FFB813"]
    }, {
      category: "red",
      colors: ["#813C24", "#DB3239"]
    }, {
      category: "red",
      colors: ["#D45A64", "#FFB099"]
    }, {
      category: "red",
      colors: ["#E87179", "#615757"]
    }, {
      category: "red",
      colors: ["#E5194C", "#F7CD00"]
    }, {
      category: "red",
      colors: ["#D7483E", "#AED3CC"]
    }, {
      category: "red",
      colors: ["#EE104D", "#002F58"]
    }, {
      category: "red",
      colors: ["#F10000", "#FFCF00"]
    }, {
      category: "red",
      colors: ["#ED1615", "#5F198D"]
    }, {
      category: "orange",
      colors: ["#FE8611", "#261301"]
    }, {
      category: "orange",
      colors: ["#FF3A00", "#FFE100"]
    }, {
      category: "orange",
      colors: ["#F86A0D", "#FFB51F"]
    }, {
      category: "orange",
      colors: ["#FFA402", "#CA6922"]
    }, {
      category: "orange",
      colors: ["#F59300", "#F23700"]
    }, {
      category: "orange",
      colors: ["#FB8500", "#FA6000"]
    }, {
      category: "orange",
      colors: ["#DB8231", "#E1E85D"]
    }, {
      category: "orange",
      colors: ["#FB8700", "#244A7E"]
    }, {
      category: "orange",
      colors: ["#EA7100", "#F9B11D"]
    }, {
      category: "orange",
      colors: ["#FFCC05", "#B52888"]
    }, {
      category: "orange",
      colors: ["#FEB44A", "#D6F522"]
    }, {
      category: "orange",
      colors: ["#FF4200", "#3E2E3B"]
    }, {
      category: "orange",
      colors: ["#FF9300", "#6FCFF6"]
    }, {
      category: "orange",
      colors: ["#FFBE00", "#FF9300"]
    }, {
      category: "orange",
      colors: ["#FE984C", "#00AE6B"]
    }, {
      category: "orange",
      colors: ["#FF7700", "#812800"]
    }, {
      category: "orange",
      colors: ["#FFB500", "#3B2526"]
    }, {
      category: "orange",
      colors: ["#FFBD00", "#1BAAE4"]
    }, {
      category: "orange",
      colors: ["#FFA770", "#FF5666"]
    }, {
      category: "orange",
      colors: ["#D9482D", "#E79046"]
    }, {
      category: "orange",
      colors: ["#E79046", "#624137"]
    }, {
      category: "orange",
      colors: ["#F9601C", "#D2F973"]
    }, {
      category: "orange",
      colors: ["#F5704C", "#034941"]
    }, {
      category: "orange",
      colors: ["#E87800", "#3B2527"]
    }, {
      category: "orange",
      colors: ["#FCB315", "#414242"]
    }, {
      category: "orange",
      colors: ["#E84E22", "#414242"]
    }, {
      category: "orange",
      colors: ["#E04331", "#73B7BE"]
    }, {
      category: "orange",
      colors: ["#E84E22", "#F37821"]
    }, {
      category: "orange",
      colors: ["#F04223", "#27337F"]
    }, {
      category: "orange",
      colors: ["#FFAE00", "#F35B0A"]
    }, {
      category: "orange",
      colors: ["#FE8656", "#FF5F12"]
    }, {
      category: "orange",
      colors: ["#FB5400", "#20CFC5"]
    }, {
      category: "orange",
      colors: ["#FFB813", "#E03C2D"]
    }, {
      category: "orange",
      colors: ["#EC7024", "#C4D527"]
    }, {
      category: "orange",
      colors: ["#FFD341", "#04F0DE"]
    }, {
      category: "orange",
      colors: ["#ED9C00", "#FEAD00"]
    }, {
      category: "orange",
      colors: ["#FEA15F", "#FFB65F"]
    }, {
      category: "orange",
      colors: ["#FF6701", "#9A141B"]
    }, {
      category: "orange",
      colors: ["#F86A0D", "#FFFFFF"]
    }, {
      category: "orange",
      colors: ["#F17400", "#F5C0D8"]
    }, {
      category: "orange",
      colors: ["#ED5F18", "#57228B"]
    }, {
      category: "orange",
      colors: ["#DF513B", "#20CFC5"]
    }, {
      category: "orange",
      colors: ["#F99F25", "#BD3109"]
    }, {
      category: "yellow",
      colors: ["#DDFB00", "#F94270"]
    }, {
      category: "yellow",
      colors: ["#FFFD91", "#941D39"]
    }, {
      category: "yellow",
      colors: ["#FFF900", "#004D73"]
    }, {
      category: "yellow",
      colors: ["#F5F460", "#CFE655"]
    }, {
      category: "yellow",
      colors: ["#D5B837", "#E77576"]
    }, {
      category: "yellow",
      colors: ["#CCA30B", "#D8D8DB"]
    }, {
      category: "yellow",
      colors: ["#ECED6C", "#C2C5AE"]
    }, {
      category: "yellow",
      colors: ["#FFEA82", "#FBB099"]
    }, {
      category: "yellow",
      colors: ["#E1B63C", "#FDD1D3"]
    }, {
      category: "yellow",
      colors: ["#FFEA82", "#F55361"]
    }, {
      category: "yellow",
      colors: ["#E9DF4B", "#2AAAF0"]
    }, {
      category: "yellow",
      colors: ["#EDC72E", "#C01300"]
    }, {
      category: "yellow",
      colors: ["#DFB800", "#FED400"]
    }, {
      category: "yellow",
      colors: ["#EDFC1F", "#1491C5"]
    }, {
      category: "yellow",
      colors: ["#F6CD04", "#589F3D"]
    }, {
      category: "yellow",
      colors: ["#F0F438", "#6ABEEA"]
    }, {
      category: "yellow",
      colors: ["#FEF6B9", "#E67EB3"]
    }, {
      category: "yellow",
      colors: ["#FAEA00", "#312282"]
    }, {
      category: "yellow",
      colors: ["#FFC927", "#F33800"]
    }, {
      category: "yellow",
      colors: ["#FFDA00", "#C38437"]
    }, {
      category: "yellow",
      colors: ["#D7B124", "#D1FB99"]
    }, {
      category: "yellow",
      colors: ["#F2D500", "#FC0000"]
    }, {
      category: "yellow",
      colors: ["#FBDD00", "#FBE781"]
    }, {
      category: "yellow",
      colors: ["#F8FB20", "#FAFAFA"]
    }, {
      category: "yellow",
      colors: ["#FAF9CD", "#F3D7A5"]
    }, {
      category: "yellow",
      colors: ["#E9D06D", "#119781"]
    }, {
      category: "yellow",
      colors: ["#F5BB00", "#F44130"]
    }, {
      category: "yellow",
      colors: ["#F5BB00", "#9E50A4"]
    }, {
      category: "yellow",
      colors: ["#EBE70E", "#ED2C2D"]
    }, {
      category: "yellow",
      colors: ["#FFCC05", "#B52888"]
    }, {
      category: "yellow",
      colors: ["#FDD734", "#40D7AB"]
    }, {
      category: "yellow",
      colors: ["#FFE3A4", "#FF294E"]
    }, {
      category: "yellow",
      colors: ["#FFD44E", "#F3F0E9"]
    }, {
      category: "yellow",
      colors: ["#FED45B", "#F6A648"]
    }, {
      category: "yellow",
      colors: ["#F2D03A", "#F7E59C"]
    }, {
      category: "yellow",
      colors: ["#FFD617", "#FFC200"]
    }, {
      category: "green",
      colors: ["#95DC28", "#DF4B58"]
    }, {
      category: "green",
      colors: ["#2D351F", "#95DC28"]
    }, {
      category: "green",
      colors: ["#484F39", "#95DC28"]
    }, {
      category: "green",
      colors: ["#12CD7F", "#163E41"]
    }, {
      category: "green",
      colors: ["#12CB43", "#0B5925"]
    }, {
      category: "green",
      colors: ["#12CB43", "#0E4261"]
    }, {
      category: "green",
      colors: ["#16493F", "#11BC21"]
    }, {
      category: "green",
      colors: ["#072A2D", "#89DD8E"]
    }, {
      category: "green",
      colors: ["#3F5A43", "#B0D0C5"]
    }, {
      category: "green",
      colors: ["#A1BE99", "#0A3E49"]
    }, {
      category: "green",
      colors: ["#65CB05", "#34482F"]
    }, {
      category: "green",
      colors: ["#609C39", "#3A5435"]
    }, {
      category: "green",
      colors: ["#34482F", "#609C39"]
    }, {
      category: "green",
      colors: ["#465822", "#EED3D6"]
    }, {
      category: "green",
      colors: ["#26341C", "#D6BCC0"]
    }, {
      category: "green",
      colors: ["#3E4F20", "#6AC3C7"]
    }, {
      category: "green",
      colors: ["#A3C75E", "#F33B89"]
    }, {
      category: "green",
      colors: ["#55674F", "#D62D94"]
    }, {
      category: "green",
      colors: ["#A3C75E", "#2D5251"]
    }, {
      category: "green",
      colors: ["#006442", "#78962E"]
    }, {
      category: "green",
      colors: ["#00D800", "#006442"]
    }, {
      category: "green",
      colors: ["#8ACBA6", "#FF498A"]
    }, {
      category: "green",
      colors: ["#00E75D", "#BAA098"]
    }, {
      category: "green",
      colors: ["#00FD6C", "#5A0089"]
    }, {
      category: "green",
      colors: ["#3DEE6D", "#FF315B"]
    }, {
      category: "green",
      colors: ["#56863E", "#74AE53"]
    }, {
      category: "green",
      colors: ["#9ECC2C", "#4CB145"]
    }, {
      category: "green",
      colors: ["#99AA89", "#686868"]
    }, {
      category: "green",
      colors: ["#77C07D", "#555759"]
    }, {
      category: "green",
      colors: ["#62BD45", "#2B70A9"]
    }, {
      category: "green",
      colors: ["#589F3D", "#F5CC00"]
    }, {
      category: "green",
      colors: ["#3EC14F", "#94EF85"]
    }, {
      category: "green",
      colors: ["#004D28", "#3EC14F"]
    }, {
      category: "teal",
      colors: ["#2FCFBA", "#E5806E"]
    }, {
      category: "teal",
      colors: ["#2A6568", "#2FCFBA"]
    }, {
      category: "teal",
      colors: ["#094A49", "#E5806E"]
    }, {
      category: "teal",
      colors: ["#26C1B3", "#2678DA"]
    }, {
      category: "teal",
      colors: ["#11D2AC", "#F0EFF5"]
    }, {
      category: "teal",
      colors: ["#11D2AC", "#444451"]
    }, {
      category: "teal",
      colors: ["#00765B", "#9BB4D9"]
    }, {
      category: "teal",
      colors: ["#00A58A", "#FED7C6"]
    }, {
      category: "teal",
      colors: ["#00F99E", "#042418"]
    }, {
      category: "teal",
      colors: ["#26C58C", "#174F5E"]
    }, {
      category: "teal",
      colors: ["#549BA7", "#274B4E"]
    }, {
      category: "blue",
      colors: ["#0069B4", "#F55361"]
    }, {
      category: "blue",
      colors: ["#18D0D8", "#E77876"]
    }, {
      category: "blue",
      colors: ["#19B5FF", "#8A38DE"]
    }, {
      category: "blue",
      colors: ["#1E7CCC", "#19CAD8"]
    }, {
      category: "blue",
      colors: ["#19B5FF", "#FE2E16"]
    }, {
      category: "blue",
      colors: ["#5DA1EF", "#FDC299"]
    }, {
      category: "blue",
      colors: ["#006E8F", "#E1C3D8"]
    }, {
      category: "blue",
      colors: ["#0092D7", "#3D3737"]
    }, {
      category: "blue",
      colors: ["#3B7086", "#E1DAC9"]
    }, {
      category: "blue",
      colors: ["#72D5D3", "#8E5BB2"]
    }, {
      category: "blue",
      colors: ["#4FA6F9", "#084FA1"]
    }, {
      category: "blue",
      colors: ["#00ABEE", "#EC2389"]
    }, {
      category: "blue",
      colors: ["#1C8EC7", "#EDFC1A"]
    }, {
      category: "blue",
      colors: ["#00BAFA", "#FBBC00"]
    }, {
      category: "blue",
      colors: ["#67F2EC", "#FC0000"]
    }, {
      category: "blue",
      colors: ["#30BECE", "#1A7EA3"]
    }, {
      category: "blue",
      colors: ["#51B8F1", "#7F64B5"]
    }, {
      category: "blue",
      colors: ["#6CB9FF", "#04AC28"]
    }, {
      category: "blue",
      colors: ["#2678DA", "#26C1B3"]
    }, {
      category: "indigo",
      colors: ["#003D7E", "#00A1AE"]
    }, {
      category: "indigo",
      colors: ["#182252", "#18D0D8"]
    }, {
      category: "indigo",
      colors: ["#161A62", "#1CC0D9"]
    }, {
      category: "indigo",
      colors: ["#4154DE", "#212D7F"]
    }, {
      category: "indigo",
      colors: ["#293050", "#19A0CA"]
    }, {
      category: "indigo",
      colors: ["#15446C", "#10CA9B"]
    }, {
      category: "indigo",
      colors: ["#0E4261", "#12CB43"]
    }, {
      category: "indigo",
      colors: ["#15588A", "#0F385D"]
    }, {
      category: "indigo",
      colors: ["#054E68", "#22A7F3"]
    }, {
      category: "indigo",
      colors: ["#004D73", "#FFF900"]
    }, {
      category: "indigo",
      colors: ["#0042B8", "#3FA1DD"]
    }, {
      category: "indigo",
      colors: ["#0F385D", "#1AC9D8"]
    }, {
      category: "indigo",
      colors: ["#0B2943", "#28A55B"]
    }, {
      category: "indigo",
      colors: ["#1C518C", "#00B8F0"]
    }, {
      category: "indigo",
      colors: ["#0658F3", "#252123"]
    }, {
      category: "indigo",
      colors: ["#0D3764", "#FF6446"]
    }, {
      category: "indigo",
      colors: ["#1F477D", "#75B1ED"]
    }, {
      category: "indigo",
      colors: ["#11415C", "#F04B53"]
    }, {
      category: "indigo",
      colors: ["#4154DE", "#212D7F"]
    }, {
      category: "indigo",
      colors: ["#3A419C", "#2F91CF"]
    }, {
      category: "indigo",
      colors: ["#201452", "#EE4D59"]
    }, {
      category: "indigo",
      colors: ["#204787", "#D2D7D3"]
    }, {
      category: "indigo",
      colors: ["#182252", "#18D0D8"]
    }, {
      category: "indigo",
      colors: ["#212D75", "#B91BDA"]
    }, {
      category: "indigo",
      colors: ["#2A1B6E", "#19CAD8"]
    }, {
      category: "indigo",
      colors: ["#4A61E0", "#0FC5B0"]
    }, {
      category: "indigo",
      colors: ["#1D2A9D", "#4A61E0"]
    }, {
      category: "indigo",
      colors: ["#3B5AFE", "#FFFFFF"]
    }, {
      category: "indigo",
      colors: ["#302756", "#746AAF"]
    }, {
      category: "indigo",
      colors: ["#393294", "#DB1D1F"]
    }, {
      category: "indigo",
      colors: ["#292782", "#237ADA"]
    }, {
      category: "indigo",
      colors: ["#210F6F", "#994685"]
    }, {
      category: "indigo",
      colors: ["#10133B", "#0DC2C0"]
    }, {
      category: "indigo",
      colors: ["#3C5BC8", "#EBE9F9"]
    }, {
      category: "brown",
      colors: ["#3B243A", "#EE3047"]
    }, {
      category: "brown",
      colors: ["#B8A26C", "#FFFFFF"]
    }, {
      category: "brown",
      colors: ["#493F48", "#E8E6EB"]
    }, {
      category: "brown",
      colors: ["#B65817", "#DEDACD"]
    }, {
      category: "brown",
      colors: ["#D7C488", "#C592A5"]
    }, {
      category: "brown",
      colors: ["#B25D34", "#0E1D22"]
    }, {
      category: "brown",
      colors: ["#3C2214", "#F89900"]
    }, {
      category: "brown",
      colors: ["#3A312D", "#7D6A55"]
    }, {
      category: "brown",
      colors: ["#CBA379", "#E4EA48"]
    }, {
      category: "brown",
      colors: ["#CBA379", "#F05517"]
    }, {
      category: "brown",
      colors: ["#C07B6C", "#3E2114"]
    }, {
      category: "brown",
      colors: ["#513430", "#EB7A19"]
    }, {
      category: "brown",
      colors: ["#593B36", "#9D8F65"]
    }, {
      category: "brown",
      colors: ["#937052", "#5A3A36"]
    }, {
      category: "brown",
      colors: ["#3E3B3F", "#A89260"]
    }, {
      category: "brown",
      colors: ["#B07D43", "#4E4235"]
    }, {
      category: "brown",
      colors: ["#A57534", "#B82513"]
    }, {
      category: "brown",
      colors: ["#C38437", "#FFDA00"]
    }, {
      category: "brown",
      colors: ["#B57029", "#FBA914"]
    }, {
      category: "brown",
      colors: ["#825D5B", "#E38F71"]
    }, {
      category: "brown",
      colors: ["#A26B62", "#F0B270"]
    }, {
      category: "brown",
      colors: ["#AE7E62", "#EFBCD9"]
    }, {
      category: "brown",
      colors: ["#7F563B", "#E28B4E"]
    }, {
      category: "brown",
      colors: ["#BC4D00", "#390C0C"]
    }, {
      category: "brown",
      colors: ["#9E5032", "#FBD054"]
    }, {
      category: "brown",
      colors: ["#3B322E", "#E26D21"]
    }, {
      category: "brown",
      colors: ["#7A3328", "#E2A689"]
    }, {
      category: "brown",
      colors: ["#503C32", "#6F826D"]
    }, {
      category: "brown",
      colors: ["#504645", "#B89A70"]
    }, {
      category: "brown",
      colors: ["#987863", "#3C4650"]
    }, {
      category: "brown",
      colors: ["#49453C", "#D44B3C"]
    }, {
      category: "brown",
      colors: ["#84685C", "#EFDCB8"]
    }, {
      category: "grey",
      colors: ["#BAA098", "#00E75D"]
    }, {
      category: "grey",
      colors: ["#E3D5B6", "#93D1C5"]
    }, {
      category: "grey",
      colors: ["#E3D5B6", "#D23656"]
    }, {
      category: "grey",
      colors: ["#E9E0BA", "#D85B42"]
    }, {
      category: "grey",
      colors: ["#D1C2AD", "#803909"]
    }, {
      category: "grey",
      colors: ["#E2D3BD", "#6C6255"]
    }, {
      category: "grey",
      colors: ["#E8E3DD", "#BFB6AB"]
    }, {
      category: "grey",
      colors: ["#F7EBD2", "#B1938E"]
    }, {
      category: "grey",
      colors: ["#E8E3DD", "#FF4E38"]
    }, {
      category: "grey",
      colors: ["#E8E3DD", "#00B3B4"]
    }, {
      category: "grey",
      colors: ["#FFF2BA", "#6A2715"]
    }, {
      category: "violet",
      colors: ["#43168E", "#16D7D8"]
    }, {
      category: "violet",
      colors: ["#3C1F88", "#5566E2"]
    }, {
      category: "violet",
      colors: ["#4A15AF", "#8A38DE"]
    }, {
      category: "violet",
      colors: ["#360D66", "#731DDB"]
    }, {
      category: "violet",
      colors: ["#4116A3", "#E485DE"]
    }, {
      category: "violet",
      colors: ["#3D0947", "#CF376E"]
    }, {
      category: "violet",
      colors: ["#44254F", "#E77576"]
    }, {
      category: "violet",
      colors: ["#4F0D28", "#DA3047"]
    }, {
      category: "violet",
      colors: ["#431A41", "#DC5659"]
    }, {
      category: "violet",
      colors: ["#2F0839", "#DD7456"]
    }, {
      category: "violet",
      colors: ["#541E3E", "#D34445"]
    }, {
      category: "violet",
      colors: ["#673A56", "#CF6580"]
    }, {
      category: "violet",
      colors: ["#8A76BF", "#EB8D8E"]
    }, {
      category: "violet",
      colors: ["#3C0932", "#D92A69"]
    }, {
      category: "violet",
      colors: ["#48175A", "#CF4070"]
    }, {
      category: "violet",
      colors: ["#43168E", "#16D7D8"]
    }, {
      category: "violet",
      colors: ["#B91BDA", "#4A1087"]
    }, {
      category: "violet",
      colors: ["#4E24AF", "#2678DA"]
    }, {
      category: "violet",
      colors: ["#7D66E6", "#26C1B3"]
    }, {
      category: "violet",
      colors: ["#96008C", "#9FF6CA"]
    }, {
      category: "violet",
      colors: ["#5F0147", "#5AA3A5"]
    }, {
      category: "violet",
      colors: ["#99A2FF", "#F0FB89"]
    }, {
      category: "violet",
      colors: ["#4A1372", "#5DB6AE"]
    }, {
      category: "violet",
      colors: ["#B0C6E7", "#F7CFCB"]
    }, {
      category: "violet",
      colors: ["#870073", "#FC2173"]
    }, {
      category: "violet",
      colors: ["#7100FE", "#47EBBA"]
    }, {
      category: "violet",
      colors: ["#945BFA", "#00E2D6"]
    }, {
      category: "violet",
      colors: ["#5B1446", "#D28FB6"]
    }, {
      category: "violet",
      colors: ["#714DFE", "#FBB4FA"]
    }, {
      category: "violet",
      colors: ["#6900AA", "#F5B069"]
    }, {
      category: "violet",
      colors: ["#612698", "#00A39A"]
    }, {
      category: "violet",
      colors: ["#20055D", "#DC96E2"]
    }, {
      category: "violet",
      colors: ["#4116A3", "#E485DE"]
    }, {
      category: "violet",
      colors: ["#C080FF", "#FFDB83"]
    }, {
      category: "violet",
      colors: ["#5B3458", "#2DA8BA"]
    }, {
      category: "violet",
      colors: ["#F0C6FC", "#C080FF"]
    }, {
      category: "violet",
      colors: ["#302756", "#746AAF"]
    }, {
      category: "violet",
      colors: ["#521D82", "#FAB500"]
    }, {
      category: "violet",
      colors: ["#41244C", "#44CAE5"]
    }, {
      category: "violet",
      colors: ["#5D52D7", "#1CDFAC"]
    }, {
      category: "violet",
      colors: ["#793FD9", "#43BCEE"]
    }, {
      category: "violet",
      colors: ["#7664B7", "#AD9EEA"]
    }, {
      category: "violet",
      colors: ["#7F5AF0", "#E0D7FB"]
    }, {
      category: "violet",
      colors: ["#393294", "#DB1D1F"]
    }, {
      category: "violet",
      colors: ["#4D276F", "#00DAFF"]
    }, {
      category: "violet",
      colors: ["#A47EFE", "#4D276F"]
    }, {
      category: "red",
      colors: ["#ea0b38", "#f175a5"]
    }, {
      category: "red",
      colors: ["#be0e3a", "#fea3bc"]
    }, {
      category: "red",
      colors: ["#f75d58", "#751d00"]
    }, {
      category: "red",
      colors: ["#c31c1c", "#cca592"]
    }, {
      category: "red",
      colors: ["#b30e24", "#fb91b4"]
    }, {
      category: "red",
      colors: ["#d9244b", "#f98cb1"]
    }, {
      category: "red",
      colors: ["#db050a", "#770c38"]
    }, {
      category: "red",
      colors: ["#da1550", "#4c0237"]
    }, {
      category: "red",
      colors: ["#c20626", "#b68ea5"]
    }, {
      category: "red",
      colors: ["#fe5c33", "#f3c264"]
    }, {
      category: "red",
      colors: ["#f01444", "#eba4c9"]
    }, {
      category: "red",
      colors: ["#af153a", "#042848"]
    }, {
      category: "red",
      colors: ["#d9422f", "#9017b1"]
    }, {
      category: "red",
      colors: ["#ef1d52", "#0c67bc"]
    }, {
      category: "red",
      colors: ["#b53352", "#8da3d9"]
    }, {
      category: "red",
      colors: ["#cd0e43", "#eae83b"]
    }, {
      category: "red",
      colors: ["#fe0824", "#7bd9a9"]
    }, {
      category: "red",
      colors: ["#d7335b", "#feefad"]
    }, {
      category: "red",
      colors: ["#d01c37", "#468ce7"]
    }, {
      category: "red",
      colors: ["#c50216", "#30082e"]
    }, {
      category: "red",
      colors: ["#f50e07", "#4b38f1"]
    }, {
      category: "red",
      colors: ["#c20d09", "#65417b"]
    }, {
      category: "red",
      colors: ["#fd8970", "#440675"]
    }, {
      category: "red",
      colors: ["#ec1e82", "#1b4b5f"]
    }, {
      category: "red",
      colors: ["#fd614a", "#c5d779"]
    }, {
      category: "red",
      colors: ["#e66977", "#3caeed"]
    }, {
      category: "red",
      colors: ["#ea3e59", "#74d76f"]
    }, {
      category: "red",
      colors: ["#e91b68", "#edf27e"]
    }, {
      category: "red",
      colors: ["#eb0d2c", "#d4dac9"]
    }, {
      category: "red",
      colors: ["#f04008", "#e1fc1b"]
    }, {
      category: "red",
      colors: ["#d90d7a", "#238eda"]
    }, {
      category: "red",
      colors: ["#ec040a", "#a58f71"]
    }, {
      category: "red",
      colors: ["#e2358f", "#d3d345"]
    }, {
      category: "red",
      colors: ["#f5465b", "#14e579"]
    }, {
      category: "red",
      colors: ["#d00705", "#054b5c"]
    }, {
      category: "red",
      colors: ["#bc1e0c", "#ca32e6"]
    }, {
      category: "red",
      colors: ["#f13d4c", "#710735"]
    }, {
      category: "orange",
      colors: ["#f9c11b", "#e65116"]
    }, {
      category: "orange",
      colors: ["#fb9e3e", "#424ad6"]
    }, {
      category: "orange",
      colors: ["#fcbb35", "#cf233e"]
    }, {
      category: "orange",
      colors: ["#e0643f", "#a786dc"]
    }, {
      category: "orange",
      colors: ["#cd905f", "#211893"]
    }, {
      category: "orange",
      colors: ["#f76615", "#e349a8"]
    }, {
      category: "orange",
      colors: ["#c46e26", "#e0d634"]
    }, {
      category: "orange",
      colors: ["#cb6813", "#fffbc6"]
    }, {
      category: "orange",
      colors: ["#e36f11", "#982310"]
    }, {
      category: "orange",
      colors: ["#e46e0d", "#e6b92a"]
    }, {
      category: "orange",
      colors: ["#fda512", "#1016da"]
    }, {
      category: "orange",
      colors: ["#e13c02", "#bf8b47"]
    }, {
      category: "orange",
      colors: ["#ef4d24", "#39bbd8"]
    }, {
      category: "orange",
      colors: ["#f85f06", "#99eb2e"]
    }, {
      category: "orange",
      colors: ["#e6a861", "#f90c80"]
    }, {
      category: "orange",
      colors: ["#ef703c", "#f9c0c4"]
    }, {
      category: "orange",
      colors: ["#be6015", "#b4245f"]
    }, {
      category: "orange",
      colors: ["#f7cb4b", "#e40adb"]
    }, {
      category: "orange",
      colors: ["#ed5801", "#bceb78"]
    }, {
      category: "orange",
      colors: ["#fe885b", "#e50c5d"]
    }, {
      category: "orange",
      colors: ["#d95908", "#1f1fe8"]
    }, {
      category: "orange",
      colors: ["#eea260", "#5c0802"]
    }, {
      category: "orange",
      colors: ["#d69349", "#6d5af3"]
    }, {
      category: "orange",
      colors: ["#d38233", "#334184"]
    }, {
      category: "orange",
      colors: ["#f7b440", "#2e9d1c"]
    }, {
      category: "orange",
      colors: ["#fe4c21", "#a9f34b"]
    }, {
      category: "orange",
      colors: ["#eb4f2a", "#29b4df"]
    }, {
      category: "orange",
      colors: ["#c34320", "#641494"]
    }, {
      category: "orange",
      colors: ["#b95910", "#c0579e"]
    }, {
      category: "orange",
      colors: ["#ebb420", "#ac4377"]
    }, {
      category: "orange",
      colors: ["#fc8048", "#091eef"]
    }, {
      category: "orange",
      colors: ["#f17e4f", "#6b3da1"]
    }, {
      category: "orange",
      colors: ["#da4420", "#755dba"]
    }, {
      category: "yellow",
      colors: ["#e6e705", "#7729e8"]
    }, {
      category: "yellow",
      colors: ["#fada26", "#690d8b"]
    }, {
      category: "yellow",
      colors: ["#dde845", "#de28f9"]
    }, {
      category: "yellow",
      colors: ["#e6f465", "#842e2f"]
    }, {
      category: "yellow",
      colors: ["#f7b416", "#be5021"]
    }, {
      category: "yellow",
      colors: ["#efd808", "#c38228"]
    }, {
      category: "yellow",
      colors: ["#fec339", "#6d510a"]
    }, {
      category: "yellow",
      colors: ["#ecd736", "#994911"]
    }, {
      category: "yellow",
      colors: ["#feca1d", "#351706"]
    }, {
      category: "yellow",
      colors: ["#d8e622", "#e59116"]
    }, {
      category: "yellow",
      colors: ["#d3d812", "#929e87"]
    }, {
      category: "yellow",
      colors: ["#efda1f", "#ae7b47"]
    }, {
      category: "yellow",
      colors: ["#d0b126", "#58483c"]
    }, {
      category: "yellow",
      colors: ["#e4f032", "#aa8f59"]
    }, {
      category: "yellow",
      colors: ["#dec72d", "#0b9cb5"]
    }, {
      category: "yellow",
      colors: ["#fabe33", "#5465c7"]
    }, {
      category: "yellow",
      colors: ["#d9d050", "#fb2416"]
    }, {
      category: "yellow",
      colors: ["#d0f03c", "#f54340"]
    }, {
      category: "yellow",
      colors: ["#f3e956", "#bb5e29"]
    }, {
      category: "yellow",
      colors: ["#d5bd0c", "#5924ee"]
    }, {
      category: "green",
      colors: ["#15f50c", "#b7c2af"]
    }, {
      category: "green",
      colors: ["#61fc5d", "#800272"]
    }, {
      category: "green",
      colors: ["#43cc60", "#dc5457"]
    }, {
      category: "green",
      colors: ["#92ca29", "#3c7207"]
    }, {
      category: "green",
      colors: ["#b5ed11", "#ae3d6f"]
    }, {
      category: "green",
      colors: ["#52f257", "#db9a5a"]
    }, {
      category: "green",
      colors: ["#48d330", "#185048"]
    }, {
      category: "green",
      colors: ["#6ec82e", "#34f0d1"]
    }, {
      category: "green",
      colors: ["#90cb57", "#686593"]
    }, {
      category: "green",
      colors: ["#3df227", "#5e2de4"]
    }, {
      category: "green",
      colors: ["#48fe5c", "#2a45ca"]
    }, {
      category: "green",
      colors: ["#03c94d", "#d97abb"]
    }, {
      category: "green",
      colors: ["#1fb549", "#36666d"]
    }, {
      category: "green",
      colors: ["#86f533", "#54a2df"]
    }, {
      category: "green",
      colors: ["#1bce48", "#1d6905"]
    }, {
      category: "green",
      colors: ["#04b21a", "#112a50"]
    }, {
      category: "green",
      colors: ["#c3f877", "#428634"]
    }, {
      category: "green",
      colors: ["#19d94d", "#4238c5"]
    }, {
      category: "green",
      colors: ["#18eb15", "#6e6520"]
    }, {
      category: "green",
      colors: ["#0ee676", "#412aae"]
    }, {
      category: "green",
      colors: ["#58c113", "#6ab7a3"]
    }, {
      category: "green",
      colors: ["#8ebf38", "#44573f"]
    }, {
      category: "green",
      colors: ["#46b016", "#2e551b"]
    }, {
      category: "green",
      colors: ["#6eeb18", "#6a712c"]
    }, {
      category: "green",
      colors: ["#58fe15", "#ba06d4"]
    }, {
      category: "green",
      colors: ["#7fd635", "#a64456"]
    }, {
      category: "green",
      colors: ["#82fd4d", "#3959c0"]
    }, {
      category: "green",
      colors: ["#38d332", "#0152a7"]
    }, {
      category: "green",
      colors: ["#01c302", "#353880"]
    }, {
      category: "green",
      colors: ["#baf323", "#9a9e92"]
    }, {
      category: "green",
      colors: ["#75fe4e", "#501c72"]
    }, {
      category: "green",
      colors: ["#72f34b", "#1b71bf"]
    }, {
      category: "teal",
      colors: ["#59ffa5", "#35d9e7"]
    }, {
      category: "teal",
      colors: ["#5fdabc", "#102705"]
    }, {
      category: "teal",
      colors: ["#70e670", "#3946c5"]
    }, {
      category: "teal",
      colors: ["#47edb3", "#1e69fe"]
    }, {
      category: "teal",
      colors: ["#68c495", "#4d6298"]
    }, {
      category: "teal",
      colors: ["#25e1b6", "#04214e"]
    }, {
      category: "teal",
      colors: ["#06f286", "#ee2b33"]
    }, {
      category: "teal",
      colors: ["#95d8a1", "#ecf05d"]
    }, {
      category: "teal",
      colors: ["#46f684", "#57cabc"]
    }, {
      category: "teal",
      colors: ["#49f691", "#74448b"]
    }, {
      category: "teal",
      colors: ["#4be197", "#1f2c60"]
    }, {
      category: "teal",
      colors: ["#5fe9b0", "#261a22"]
    }, {
      category: "teal",
      colors: ["#49e964", "#374a1d"]
    }, {
      category: "teal",
      colors: ["#46eb91", "#4c2856"]
    }, {
      category: "teal",
      colors: ["#2fc159", "#e88ad5"]
    }, {
      category: "teal",
      colors: ["#2cf788", "#771287"]
    }, {
      category: "teal",
      colors: ["#47e5a4", "#0d6844"]
    }, {
      category: "teal",
      colors: ["#44d173", "#124634"]
    }, {
      category: "teal",
      colors: ["#46e17c", "#10651b"]
    }, {
      category: "teal",
      colors: ["#56be95", "#085444"]
    }, {
      category: "teal",
      colors: ["#82fab3", "#1a8478"]
    }, {
      category: "teal",
      colors: ["#4ed8c5", "#073543"]
    }, {
      category: "teal",
      colors: ["#46fe91", "#c6aafa"]
    }, {
      category: "teal",
      colors: ["#09f9bf", "#4d2198"]
    }, {
      category: "teal",
      colors: ["#2bec79", "#dfeda6"]
    }, {
      category: "teal",
      colors: ["#6cc790", "#07687b"]
    }, {
      category: "teal",
      colors: ["#05d49c", "#2a1f7f"]
    }, {
      category: "teal",
      colors: ["#0dda96", "#485788"]
    }, {
      category: "teal",
      colors: ["#2ec97a", "#5804e3"]
    }, {
      category: "teal",
      colors: ["#20dbb6", "#0d8574"]
    }, {
      category: "teal",
      colors: ["#2ecfb3", "#dde3a1"]
    }, {
      category: "teal",
      colors: ["#3ef8e1", "#45853b"]
    }, {
      category: "teal",
      colors: ["#8df183", "#2d0cef"]
    }, {
      category: "teal",
      colors: ["#26c69f", "#3d7c86"]
    }, {
      category: "teal",
      colors: ["#92deab", "#07a1ad"]
    }, {
      category: "teal",
      colors: ["#10ead6", "#1b687e"]
    }, {
      category: "teal",
      colors: ["#4bd075", "#8b7cb9"]
    }, {
      category: "teal",
      colors: ["#52ed74", "#cd31d0"]
    }, {
      category: "teal",
      colors: ["#02c562", "#0c6d89"]
    }, {
      category: "blue",
      colors: ["#89a7ec", "#f866ea"]
    }, {
      category: "blue",
      colors: ["#1995e1", "#83028d"]
    }, {
      category: "blue",
      colors: ["#08bef4", "#b2d46f"]
    }, {
      category: "blue",
      colors: ["#46a3c8", "#7f9d18"]
    }, {
      category: "blue",
      colors: ["#9fc1fc", "#92e037"]
    }, {
      category: "blue",
      colors: ["#98b3f2", "#19cb57"]
    }, {
      category: "blue",
      colors: ["#84a1e4", "#7a336f"]
    }, {
      category: "blue",
      colors: ["#1e95c9", "#5b1993"]
    }, {
      category: "blue",
      colors: ["#2a9cce", "#32a560"]
    }, {
      category: "blue",
      colors: ["#5a8fd8", "#70dc09"]
    }, {
      category: "blue",
      colors: ["#0c9dd1", "#3c8824"]
    }, {
      category: "blue",
      colors: ["#2695ea", "#290ba8"]
    }, {
      category: "blue",
      colors: ["#15aad4", "#4a1b68"]
    }, {
      category: "blue",
      colors: ["#7bc3fc", "#ca7001"]
    }, {
      category: "blue",
      colors: ["#8192f8", "#2f3272"]
    }, {
      category: "blue",
      colors: ["#0bc9f2", "#0205e5"]
    }, {
      category: "blue",
      colors: ["#539cfb", "#5718da"]
    }, {
      category: "blue",
      colors: ["#2876b4", "#e5d109"]
    }, {
      category: "blue",
      colors: ["#a4b5cf", "#4e1cd7"]
    }, {
      category: "blue",
      colors: ["#4b79ed", "#a8a176"]
    }, {
      category: "blue",
      colors: ["#6b87c3", "#88d8a6"]
    }, {
      category: "blue",
      colors: ["#5a6d95", "#73c163"]
    }, {
      category: "blue",
      colors: ["#8894b4", "#75efdd"]
    }, {
      category: "blue",
      colors: ["#0775be", "#f29361"]
    }, {
      category: "blue",
      colors: ["#50abdd", "#dbf046"]
    }, {
      category: "blue",
      colors: ["#5f61b0", "#d15868"]
    }, {
      category: "blue",
      colors: ["#92a6d7", "#1cfbe8"]
    }, {
      category: "blue",
      colors: ["#02a9d6", "#fde81f"]
    }, {
      category: "blue",
      colors: ["#75b2ed", "#05697b"]
    }, {
      category: "blue",
      colors: ["#0d8afe", "#304f79"]
    }, {
      category: "blue",
      colors: ["#4a7cce", "#321af0"]
    }, {
      category: "blue",
      colors: ["#0184eb", "#00356d"]
    }, {
      category: "blue",
      colors: ["#2eb1e6", "#1d4abf"]
    }, {
      category: "blue",
      colors: ["#9ca8f0", "#1d05f0"]
    }, {
      category: "blue",
      colors: ["#5bbcf0", "#0a37cd"]
    }, {
      category: "blue",
      colors: ["#1196f5", "#88cdc9"]
    }, {
      category: "blue",
      colors: ["#0c85be", "#11d0cf"]
    }, {
      category: "blue",
      colors: ["#1080dd", "#acc1ce"]
    }, {
      category: "blue",
      colors: ["#5382ac", "#102981"]
    }, {
      category: "blue",
      colors: ["#7780d2", "#2505f9"]
    }, {
      category: "indigo",
      colors: ["#0c0cdf", "#7261e9"]
    }, {
      category: "indigo",
      colors: ["#143efe", "#77d96b"]
    }, {
      category: "indigo",
      colors: ["#8a2df9", "#34d6ff"]
    }, {
      category: "indigo",
      colors: ["#1f07c8", "#0c609b"]
    }, {
      category: "indigo",
      colors: ["#805bf7", "#c2a58f"]
    }, {
      category: "indigo",
      colors: ["#8237ed", "#86b37b"]
    }, {
      category: "indigo",
      colors: ["#002beb", "#d5cfda"]
    }, {
      category: "indigo",
      colors: ["#2f0aeb", "#f2ba89"]
    }, {
      category: "indigo",
      colors: ["#073def", "#14a481"]
    }, {
      category: "indigo",
      colors: ["#2a3af4", "#988d5c"]
    }, {
      category: "indigo",
      colors: ["#163dc8", "#8bfd7f"]
    }, {
      category: "indigo",
      colors: ["#1b04c3", "#b5ef82"]
    }, {
      category: "indigo",
      colors: ["#6210ef", "#e09071"]
    }, {
      category: "indigo",
      colors: ["#282dc8", "#4ffce4"]
    }, {
      category: "indigo",
      colors: ["#3740f8", "#d1dba6"]
    }, {
      category: "indigo",
      colors: ["#1359e6", "#f53f9b"]
    }, {
      category: "indigo",
      colors: ["#2031f6", "#2887f0"]
    }, {
      category: "indigo",
      colors: ["#2e25ee", "#202b71"]
    }, {
      category: "indigo",
      colors: ["#0e3cd1", "#aebdf4"]
    }, {
      category: "indigo",
      colors: ["#4d3afa", "#ab8ae5"]
    }, {
      category: "indigo",
      colors: ["#0c23c3", "#2e8adb"]
    }, {
      category: "indigo",
      colors: ["#065ae0", "#0c197f"]
    }, {
      category: "indigo",
      colors: ["#242cbd", "#6b7ae1"]
    }, {
      category: "indigo",
      colors: ["#2463df", "#739cc1"]
    }, {
      category: "indigo",
      colors: ["#6e27d8", "#82c2d0"]
    }, {
      category: "indigo",
      colors: ["#114df4", "#d3a5d7"]
    }, {
      category: "indigo",
      colors: ["#3e03d3", "#fcb83d"]
    }, {
      category: "indigo",
      colors: ["#6e51ef", "#1cc4ff"]
    }, {
      category: "indigo",
      colors: ["#1f42ec", "#30f453"]
    }, {
      category: "indigo",
      colors: ["#1352f5", "#0d5148"]
    }, {
      category: "indigo",
      colors: ["#2659fb", "#15aae5"]
    }, {
      category: "indigo",
      colors: ["#0435e4", "#0ce8bd"]
    }, {
      category: "indigo",
      colors: ["#0d01e1", "#67f39b"]
    }, {
      category: "indigo",
      colors: ["#0408d6", "#3664ac"]
    }, {
      category: "indigo",
      colors: ["#3354e9", "#4ce1a5"]
    }, {
      category: "indigo",
      colors: ["#7733e4", "#60e1cb"]
    }, {
      category: "indigo",
      colors: ["#0a6cf6", "#23c1dc"]
    }, {
      category: "violet",
      colors: ["#531ac1", "#5de4d6"]
    }, {
      category: "violet",
      colors: ["#9503f0", "#11037b"]
    }, {
      category: "violet",
      colors: ["#840fcc", "#c94285"]
    }, {
      category: "violet",
      colors: ["#1538ef", "#2ac288"]
    }, {
      category: "violet",
      colors: ["#ca43f9", "#47b2dc"]
    }, {
      category: "violet",
      colors: ["#8631f0", "#5d3a57"]
    }, {
      category: "violet",
      colors: ["#4e1ebb", "#bc30b9"]
    }, {
      category: "violet",
      colors: ["#3f1ace", "#d203f0"]
    }, {
      category: "violet",
      colors: ["#281ebc", "#5fb166"]
    }, {
      category: "violet",
      colors: ["#3b11a4", "#efa473"]
    }, {
      category: "violet",
      colors: ["#5d42ef", "#369fa0"]
    }, {
      category: "violet",
      colors: ["#4309b5", "#847234"]
    }, {
      category: "violet",
      colors: ["#5742ef", "#82e15e"]
    }, {
      category: "violet",
      colors: ["#2915ed", "#c04c44"]
    }, {
      category: "violet",
      colors: ["#2f28c6", "#bbc0a3"]
    }, {
      category: "violet",
      colors: ["#b848d2", "#fffa50"]
    }, {
      category: "violet",
      colors: ["#201edd", "#80f4dc"]
    }, {
      category: "violet",
      colors: ["#8513d7", "#ec6e8a"]
    }, {
      category: "violet",
      colors: ["#8c0de8", "#f24d1c"]
    }, {
      category: "violet",
      colors: ["#413bf9", "#80f76a"]
    }, {
      category: "violet",
      colors: ["#3a11dc", "#b76757"]
    }, {
      category: "violet",
      colors: ["#8b0499", "#03d6ff"]
    }, {
      category: "violet",
      colors: ["#9032d4", "#de5961"]
    }, {
      category: "violet",
      colors: ["#6c1ed8", "#96b48f"]
    }, {
      category: "violet",
      colors: ["#9301fe", "#fda3ff"]
    }, {
      category: "violet",
      colors: ["#cd56e9", "#110d82"]
    }, {
      category: "violet",
      colors: ["#8128d4", "#ca2a68"]
    }, {
      category: "violet",
      colors: ["#2024f9", "#dc9cc3"]
    }, {
      category: "violet",
      colors: ["#bd1ed4", "#c22326"]
    }, {
      category: "grey",
      colors: ["#e1c2bf", "#d05415"]
    }, {
      category: "grey",
      colors: ["#beb1cc", "#e93c9c"]
    }, {
      category: "grey",
      colors: ["#ae9dab", "#f13951"]
    }, {
      category: "grey",
      colors: ["#b9b8a6", "#174f73"]
    }, {
      category: "grey",
      colors: ["#ba9b80", "#680119"]
    }, {
      category: "grey",
      colors: ["#8c8ea5", "#d7fb92"]
    }, {
      category: "grey",
      colors: ["#b5c1d2", "#d6880e"]
    }, {
      category: "grey",
      colors: ["#b3c1ce", "#296e91"]
    }, {
      category: "grey",
      colors: ["#d4c1cc", "#d6d812"]
    }, {
      category: "grey",
      colors: ["#cfb0ac", "#824951"]
    }, {
      category: "grey",
      colors: ["#a0a0a1", "#5c3d2c"]
    }, {
      category: "grey",
      colors: ["#bcc2ae", "#c8f6ae"]
    }, {
      category: "grey",
      colors: ["#d5c8ba", "#350554"]
    }, {
      category: "grey",
      colors: ["#98a098", "#d70495"]
    }, {
      category: "grey",
      colors: ["#bcc7c7", "#7aad1f"]
    }, {
      category: "grey",
      colors: ["#cac9d7", "#590488"]
    }, {
      category: "grey",
      colors: ["#ceb79b", "#8d1125"]
    }, {
      category: "grey",
      colors: ["#95b49d", "#b0500f"]
    }, {
      category: "grey",
      colors: ["#c6abbc", "#ddca2e"]
    }, {
      category: "grey",
      colors: ["#b2ccc0", "#3dafdd"]
    }, {
      category: "grey",
      colors: ["#938e91", "#8eeac7"]
    }, {
      category: "grey",
      colors: ["#b2ac9b", "#ab0e5f"]
    }, {
      category: "grey",
      colors: ["#a0aaab", "#664f51"]
    }, {
      category: "grey",
      colors: ["#b39f9c", "#7e0463"]
    }, {
      category: "grey",
      colors: ["#b8a89a", "#7cc225"]
    }, {
      category: "grey",
      colors: ["#c2b1a5", "#318028"]
    }, {
      category: "grey",
      colors: ["#b09c9b", "#b1b5d6"]
    }, {
      category: "grey",
      colors: ["#b8a7b3", "#5a4dff"]
    }, {
      category: "grey",
      colors: ["#aeaead", "#58efe7"]
    }, {
      category: "grey",
      colors: ["#c5aaae", "#af60fd"]
    }, {
      category: "grey",
      colors: ["#9fa4ad", "#c44316"]
    }, {
      category: "grey",
      colors: ["#a1a4a4", "#eb60ff"]
    }, {
      category: "grey",
      colors: ["#b9a9a3", "#5dc9d6"]
    }, {
      category: "grey",
      colors: ["#959f9c", "#2f18b1"]
    }, {
      category: "grey",
      colors: ["#a0a4a5", "#5c5eca"]
    }, {
      category: "grey",
      colors: ["#c1b0ab", "#a610e2"]
    }, {
      category: "grey",
      colors: ["#968f8f", "#4cb9e3"]
    }, {
      category: "grey",
      colors: ["#8d9492", "#f401a0"]
    }, {
      category: "grey",
      colors: ["#afa0a4", "#f0646f"]
    }, {
      category: "grey",
      colors: ["#bda1a4", "#bcc689"]
    }, {
      category: "brown",
      colors: ["#865661", "#f33b48"]
    }, {
      category: "brown",
      colors: ["#554643", "#22cdfb"]
    }, {
      category: "brown",
      colors: ["#392c1a", "#74bbfd"]
    }, {
      category: "brown",
      colors: ["#434f34", "#dffa4d"]
    }, {
      category: "brown",
      colors: ["#734d1f", "#8483d7"]
    }, {
      category: "brown",
      colors: ["#663153", "#63ff16"]
    }, {
      category: "brown",
      colors: ["#7d301a", "#d3d044"]
    }, {
      category: "brown",
      colors: ["#6d2444", "#717e20"]
    }, {
      category: "brown",
      colors: ["#943a41", "#c5a943"]
    }, {
      category: "brown",
      colors: ["#434628", "#b40de9"]
    }, {
      category: "brown",
      colors: ["#60281c", "#937c55"]
    }, {
      category: "brown",
      colors: ["#7c3145", "#4708ee"]
    }, {
      category: "brown",
      colors: ["#724d1e", "#815e92"]
    }, {
      category: "brown",
      colors: ["#561620", "#899451"]
    }, {
      category: "brown",
      colors: ["#5e1d14", "#87c362"]
    }, {
      category: "brown",
      colors: ["#672636", "#1ccb7d"]
    }, {
      category: "brown",
      colors: ["#595249", "#abd55e"]
    }, {
      category: "brown",
      colors: ["#55241b", "#378af4"]
    }, {
      category: "brown",
      colors: ["#6e4b4a", "#ff7f27"]
    }, {
      category: "brown",
      colors: ["#683d31", "#b257b6"]
    }, {
      category: "brown",
      colors: ["#5c3c40", "#e5bfe3"]
    }, {
      category: "brown",
      colors: ["#533b29", "#e8654b"]
    }, {
      category: "brown",
      colors: ["#614944", "#beb48a"]
    }, {
      category: "brown",
      colors: ["#764b42", "#907242"]
    }, {
      category: "brown",
      colors: ["#5c372e", "#af3d4d"]
    }, {
      category: "brown",
      colors: ["#6b423a", "#64ab54"]
    }, {
      category: "brown",
      colors: ["#6c402e", "#ce0e20"]
    }, {
      category: "brown",
      colors: ["#5f3c3f", "#62b798"]
    }, {
      category: "brown",
      colors: ["#685144", "#acc9fa"]
    }, {
      category: "brown",
      colors: ["#693d2f", "#c5f67f"]
    }, {
      category: "brown",
      colors: ["#513632", "#fe520f"]
    }, {
      category: "brown",
      colors: ["#6b423a", "#09c8b3"]
    }, {
      category: "brown",
      colors: ["#5a3d37", "#f1ecdc"]
    }, {
      category: "brown",
      colors: ["#5c3e40", "#e79e78"]
    }];
    const te = Y(ee);
    const re = (0, a.Q_)("wallpaper-gradient", {
      state: () => ({
        colorSystems: [{
          type: "red",
          bg: "rgba(255, 12, 62, 1)"
        }, {
          type: "orange",
          bg: "rgba(255, 136, 0, 1)"
        }, {
          type: "yellow",
          bg: "rgba(255, 227, 0, 1)"
        }, {
          type: "green",
          bg: "rgba(121, 230, 43, 1)"
        }, {
          type: "teal",
          bg: "rgba(0, 226, 170, 1)"
        }, {
          type: "indigo",
          bg: "rgba(0, 174, 255, 1)"
        }, {
          type: "blue",
          bg: "rgba(58, 83, 255, 1)"
        }, {
          type: "violet",
          bg: "rgba(112, 0, 221, 1)"
        }, {
          type: "grey",
          bg: "rgba(169, 162, 160, 1)"
        }, {
          type: "brown",
          bg: "rgba(94, 64, 54, 1)"
        }],
        activeColorType: "all",
        colorConf: {
          lighting: 60,
          pigment: 80
        }
      }),
      getters: {
        linerColors() {
          const e = this.colorConf;
          if (this.activeColorType === "all") {
            return te.map(t => X({
              ...t,
              ...e
            }));
          } else {
            return ee.filter(e => e.category === this.activeColorType).map(t => X({
              ...t,
              ...e
            }));
          }
        }
      },
      actions: {
        setActiveColorType(e) {
          this.activeColorType = e;
        },
        setColorConf(e) {
          this.colorConf = e;
        },
        getRandomGradient: () => X(te[Math.floor(Math.random() * te.length)])
      }
    });
    var ne = r(2770);
    const oe = async e => {
      try {
        return await ne.U5.getItem(e);
      } catch (e) {
        return e;
      }
    };
    const ae = "https://infinitypro-img.infinitynewtab.com/wallpaper/nature/pad_nature_6.jpg";
    const ie = "622ab89188198bcf987aa012";
    const ce = (0, a.Q_)(o.BU.wallpaper, {
      syncStorage: {
        watch: ["trigger", "src", "imgId", "lightMask", "blur", "bgType", "gradientConf", "videoBgConf", "autoReplacement", "customWallpaperUrl"]
      },
      syncCloud: {
        watch: ["trigger", "src", "imgId", "lightMask", "blur", "bgType", "gradientConf", "videoBgConf", "autoReplacement", "customWallpaperUrl"]
      },
      state: () => ({
        trigger: [],
        lightMask: 10,
        blur: 0,
        imgId: ie,
        src: ae,
        showCtr: false,
        bgType: "image",
        autoReplacement: {
          enable: false,
          time: "daily",
          bgType: "image",
          categroy: "all",
          lastReplaceTime: -1
        },
        gradientConf: {
          deg: 25,
          colors: []
        },
        videoBgConf: {
          id: "",
          poster: "",
          src: "",
          origin: "gallery"
        },
        loading: false,
        customWallpaperUrl: ""
      }),
      getters: {
        currentMask() {
          let e = this.lightMask;
          if ((0, T.V)().currentTheme === "dark") {
            e = this.lightMask + 10;
          }
          if (e > 100) {
            return 100;
          } else if (e < 0) {
            return 0;
          } else {
            return e;
          }
        },
        currentBlur() {
          const e = this.blur;
          if (e > 100) {
            return 100;
          } else if (e < 0) {
            return 0;
          } else {
            return e;
          }
        }
      },
      actions: {
        async randomOne(e) {
          if (!e || (await (0, l.n)())) {
            switch (e ? this.autoReplacement.bgType : this.bgType) {
              case "image":
                this.randomOneImage(e);
                break;
              case "dynamic":
                this.randomOneDynamic();
                break;
              case "gradient":
                this.randomOneGradient();
            }
          }
        },
        downloadCurrent() {
          var e;
          switch (this.bgType) {
            case "image":
              (0, j.tg)(this.src);
              break;
            case "dynamic":
              if ((e = this.videoBgConf) !== null && e !== undefined && e.src) {
                (0, j.gS)(this.videoBgConf?.src);
              } else {
                this.handleCustomVideoDownload();
              }
              break;
            case "gradient":
              this.downLoadGradientSvg();
          }
        },
        downLoadGradientSvg() {
          const {
            deg: e,
            colors: t
          } = this.gradientConf;
          const r = (0, j.YL)(e || 0);
          const n = `\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" \n        viewBox="0 0 100 100" preserveAspectRatio="none">\n         <linearGradient id="gradient" gradientUnits="objectBoundingBox" \n          x1="${r.x1}" y1="${r.y1}" x2="${r.x2}" y2="${r.y2}">\n          <stop offset="0%" stop-color="${t[0]}" stop-opacity="1"/>,<stop offset="33.33333333333333%" stop-color="${t[1]}" stop-opacity="1"/>,<stop offset="66.66666666666666%" stop-color="${t[2]}" stop-opacity="1"/>,<stop offset="100%" stop-color="${t[3]}" stop-opacity="1"/>\n         </linearGradient>\n         <rect x="0" y="0" width="100" height="100" fill="url(#gradient)" />\n       </svg>`;
          const o = `infinity-${Math.ceil(Date.now() * Math.random())}.svg`;
          (0, j.tf)(n, o, "image/svg+xml");
        },
        changeMask(e) {
          const t = e > 100 ? 100 : e < 0 ? 0 : Math.round(e);
          if ((0, T.V)().currentTheme === "dark") {
            this.lightMask = t - 10;
          } else {
            this.lightMask = t;
          }
        },
        changeBlur(e) {
          const t = e > 100 ? 100 : e < 0 ? 0 : Math.round(e);
          this.blur = t;
        },
        setImageBg(e, t) {
          this.src = e;
          this.imgId = t;
          this.bgType = "image";
        },
        setGradientBg(e) {
          this.gradientConf = {
            colors: e,
            deg: this.gradientConf?.deg || 25
          };
          this.bgType = "gradient";
        },
        setGradientDeg(e) {
          this.gradientConf = {
            colors: this.gradientConf?.colors || [],
            deg: e
          };
        },
        setVideoBg(e) {
          if (this.bgType !== "dynamic" || !e.src || e.src !== this.videoBgConf?.src) {
            this.videoBgConf = e;
            this.bgType = "dynamic";
          }
        },
        setAutoReplacement(e) {
          this.autoReplacement = e;
        },
        setCustomWallpaper(e) {
          this.customWallpaperUrl = e;
        },
        async randomOneImage(e) {
          E().addTips({
            category: "wallpaperLoad",
            type: "loading"
          });
          let t = this.autoReplacement.categroy;
          t = t === "all" ? "" : t.join(",");
          const [r, n] = await (async e => {
            try {
              const t = await h.hj.get(`${u.H}wallpaper/next`, {
                type: "random",
                tag: e
              }, {
                _delay: 200,
                _single: true
              });
              if (t.code === 0) {
                return [null, t.data];
              } else {
                return ["业务报错"];
              }
            } catch (e) {
              return [`接口报错：${e}`];
            }
          })(e ? t : undefined);
          if (r === null) {
            const [e] = await (0, j.pt)((0, j.Em)(n.rawSrc, "wallpaper"), false, 30000);
            if (e) {
              E().addTips({
                category: "wallpaperLoad",
                type: "fail"
              });
            } else {
              this.setImageBg(n.rawSrc, n.id);
              E().removeTips({
                category: "wallpaperLoad"
              });
            }
          } else {
            E().addTips({
              category: "wallpaperLoad",
              type: "fail"
            });
          }
          this.updateAutoTimestamp();
        },
        async randomOneDynamic() {
          E().addTips({
            category: "wallpaperLoad",
            type: "loading"
          });
          const t = this.videoBgConf.origin === "custom-local";
          const [r, n] = await (async e => {
            try {
              const t = await h.hj.get(`${u.H}wallpaper/video-random`, {
                id: e
              }, {
                _delay: 200
              });
              if (t.code === 0) {
                return [null, t.data];
              } else {
                return ["业务报错"];
              }
            } catch (e) {
              return [`接口报错：${e}`];
            }
          })(t ? "" : this.videoBgConf?.id);
          if (!r && n) {
            this.setVideoBg({
              poster: `${n.src}?x-oss-process=video/snapshot,t_0,f_jpg,w_0,h_0,m_fast`,
              id: n.id,
              src: n.src,
              origin: "gallery"
            });
            E().removeTips({
              category: "wallpaperLoad"
            });
          } else {
            E().addTips({
              category: "wallpaperLoad",
              type: "fail"
            });
          }
          this.updateAutoTimestamp();
        },
        randomOneGradient() {
          const e = re().getRandomGradient();
          this.setGradientBg(e.colors);
          this.updateAutoTimestamp();
        },
        updateAutoTimestamp() {
          this.setAutoReplacement({
            ...this.autoReplacement,
            lastReplaceTime: new Date().getTime()
          });
          this.loading = false;
        },
        async autoReplaceWallpaper() {
          const e = this.autoReplacement;
          if (!e.enable) {
            return;
          }
          if (this.loading) {
            return;
          }
          const t = new Date();
          const r = new Date(e.lastReplaceTime);
          if (e.time === "hourly") {
            const e = r.getHours();
            const n = t.getHours();
            const o = t.getMinutes();
            if (e !== n && o < 50) {
              this.loading = true;
              this.randomOne(true);
            }
          } else if (e.time === "daily" && t.getDate() !== r.getDate()) {
            this.randomOne(true);
          }
        },
        async handleCustomVideoDownload() {
          if (this.videoBgConf.origin !== "custom-local") {
            return;
          }
          if (await oe("custom-local-video")) {
            P.R.warn({
              message: i18n("当前壁纸为本地视频")
            });
          } else {
            (0, j.tg)(ae);
          }
        },
        onClearData() {
          this.src = ae;
          this.imgId = ie;
          this.bgType = "image";
        }
      }
    });
    var se = r(8418);
    var le = r(8699);
    var ue = r(9112);
    const fe = (0, a.Q_)(o.BU.user, {
      syncStorage: {
        watch: ["isLogin", "user", "refreshToken", "token", "chatStatus"]
      },
      state: () => ({
        loginShow: false,
        userDialogType: "login",
        isLogin: false,
        user: {
          email: "",
          nickname: "",
          id: "",
          avatar: "",
          vip: false,
          vipEndTime: 0,
          vipPlan: "",
          vipPlanId: "",
          nextVipPlanId: "",
          nextVipPlanTime: 0,
          vipEndTimeStr: "",
          inviteCode: "",
          isInvited: false
        },
        chatStatus: {},
        refreshToken: "",
        token: "",
        tiggerTimer: Date.now()
      }),
      getters: {
        chatVipRest() {
          if (this.isLogin && this.user.chatVipEndTime) {
            return Math.max(this.user.chatVipEndTime - this.tiggerTimer, 0);
          } else {
            return 0;
          }
        }
      },
      actions: {
        async setLoginSuccess(e) {
          this.setUserData(e.user);
          this.refreshToken = e.refreshToken;
          this.token = e.token;
          this.isLogin = true;
          this.loginShow = false;
          this.getProfile();
          if (u.AN && !this.user.vip) {
            const e = M();
            e.getPrices();
            e.setActiveCard("buy");
          }
          await S().login(e.user);
        },
        async delete(e) {
          const [t] = await (0, n.tm)();
          if (t === null) {
            this.loginOut(e);
          }
        },
        loginOut(e) {
          if (e) {
            this.removeUserHistory(this.user.email);
            o.Ar.deleteAllForLogout().then(() => {
              ce().onClearData();
              B.y.post("client:tabs-reload", null);
              location.reload();
            });
          } else {
            this.isLogin = false;
            this.user = {
              email: "",
              nickname: "",
              id: "",
              avatar: "",
              vip: false,
              vipEndTime: 0,
              vipPlan: "",
              vipPlanId: "",
              nextVipPlanId: "",
              nextVipPlanTime: 0,
              vipEndTimeStr: "",
              inviteCode: "",
              isInvited: false
            };
            this.refreshToken = "";
            this.token = "";
            this.setChatStatus({});
            S().logout();
          }
        },
        changeLoginShow(e) {
          this.loginShow = e;
          if (e) {
            this.userDialogType = "login";
          }
        },
        showLogin(e) {
          this.isLogin = false;
          this.user = {
            email: "",
            nickname: "",
            id: "",
            avatar: "",
            vip: false,
            vipEndTime: 0,
            vipPlan: "",
            vipPlanId: "",
            nextVipPlanId: "",
            nextVipPlanTime: 0,
            vipEndTimeStr: "",
            inviteCode: "",
            isInvited: false,
            email: e ? "" : this.user.email
          };
          this.setChatStatus({});
          this.refreshToken = "";
          this.token = "";
          S().logout();
          this.changeLoginShow(true);
        },
        setUserData(e) {
          this.user = {
            ...this.user,
            ...(0, i.pick)(e, ["id", "email", "nickname", "avatar", "vip", "vipEndTime", "inviteCode", "vipPlan", "vipPlanId", "nextVipPlanId", "nextVipPlanTime", "isInvited", "chatVipEndTime", "userType"]),
            vipEndTimeStr: (0, j.F8)(e.vipEndTime)
          };
        },
        setChatStatus(e) {
          this.chatStatus = e;
        },
        async getProfile() {
          const [e, t] = await (0, n.et)();
          const r = t == null ? undefined : t.user;
          const o = (t == null ? undefined : t.chatai) || {};
          if (e === null) {
            this.setChatStatus(o);
            this.setUserData(r);
            await S().getCloudLatest(r.lastBackupTime, r["backup-record"]);
            this.setUserHistory();
          }
        },
        async updateTokens(e) {
          let {
            token: t,
            refreshToken: r
          } = e;
          this.token = t;
          this.refreshToken = r;
        },
        modifyUserInfo(e) {
          this.user = {
            ...this.user,
            ...e
          };
        },
        setUserHistory() {
          if (this.isLogin) {
            try {
              let e = [];
              const t = localStorage.getItem("login-users");
              if (t) {
                e = JSON.parse(t);
                e = e.filter(e => e.email !== this.user.email);
                if (e.length > 3) {
                  e.length = 3;
                }
              }
              e.unshift({
                email: this.user.email,
                aiPro: this.user.chatVipEndTime && this.user.chatVipEndTime > Date.now() || false
              });
              localStorage.setItem("login-users", JSON.stringify(e));
            } catch (e) {}
          }
        },
        getUserHistory() {
          if (!this.isLogin) {
            try {
              const e = localStorage.getItem("login-users");
              if (e) {
                const t = JSON.parse(e);
                if (t.length > 4) {
                  t.length = 4;
                }
                return t;
              }
            } catch (e) {}
          }
          return [];
        },
        removeUserHistory(e) {
          try {
            const t = localStorage.getItem("login-users");
            if (t) {
              let r = JSON.parse(t);
              r = r.filter(t => t.email !== e);
              localStorage.setItem("login-users", JSON.stringify(r));
            }
          } catch (e) {}
        },
        async refreshUserHistory() {
          try {
            const e = localStorage.getItem("login-users");
            if (e) {
              let t = JSON.parse(e);
              if (t && t.length > 0) {
                const [e, r] = await (0, n.Co)(t.map(e => e.email));
                if (e === null) {
                  t = t.map(e => {
                    e.aiPro = r.includes(e.email);
                    return e;
                  });
                  localStorage.setItem("login-users", JSON.stringify(t));
                  return t;
                }
              }
            }
          } catch (e) {}
          return [];
        }
      }
    });
    var de;
    var he;
    (de = 30000, de === undefined && (de = 0), he === undefined && (he = se.z), de < 0 && (de = 0), (0, le.H)(de, de, he)).pipe((0, ue.h)(() => fe().isLogin)).subscribe(() => {
      fe().tiggerTimer = Date.now();
    });
  },
  9417: (e, t, r) => {
    "use strict";

    r.d(t, {
      n: () => s
    });
    var n = r(3131);
    var o = r(4003);
    var a = r(8287);
    const i = new (r(1475)._P)("chat-pay/widget-status", 1000);
    var c = r(3737);
    const s = (0, n.Q_)(c.B.compliance, {
      syncStorage: {
        watch: ["chatBanned", "chatInfo"]
      },
      state: () => ({
        chatBanned: false,
        contactShow: false,
        chatInfo: {}
      }),
      actions: {
        setContactShow(e) {
          this.contactShow = e;
        },
        async getChatCompliance() {
          const [e, t] = await (async () => {
            try {
              if (i.isLocked) {
                return ["locked error"];
              }
              const e = await a.hj.get(`${o.H}chat-pay/widget-status`, {}, {
                _auth: true
              });
              if (e.code === 0 && e.data) {
                i.setLock();
                return [null, e.data];
              }
              throw e;
            } catch (e) {
              return ["catch error"];
            }
          })();
          if (!e && t) {
            this.chatBanned = t.status === "upgrading";
            this.chatInfo = t;
          }
        }
      }
    });
  },
  8793: (e, t, r) => {
    "use strict";

    r.d(t, {
      Co: () => p,
      Cz: () => i,
      Jd: () => c,
      LI: () => f,
      Zd: () => s,
      et: () => d,
      lm: () => l,
      sG: () => g,
      tm: () => h,
      x4: () => a,
      z2: () => u
    });
    var n = r(4003);
    var o = r(8287);
    const a = async e => {
      try {
        const t = await o.hj.post(`${n.H}user/login`, e, {
          _delay: 200
        });
        if (t.code === 0) {
          return [null, t.data];
        }
        if (t.code === 4001) {
          return [i18n("账号或者密码错误")];
        }
        throw new Error();
      } catch (e) {
        return [i18n("系统错误，发送失败")];
      }
    };
    const i = async e => {
      try {
        const t = await o.hj.post(`${n.H}verify/send-email`, e, {
          _delay: 200,
          fetchOpts: {
            credentials: "include"
          }
        });
        if (t.code === 0) {
          return [null, null];
        }
        if (t.code === 4009) {
          return [i18n("验证码错误")];
        }
        if (t.code === 4006) {
          return [i18n("账号已存在")];
        }
        if (t.code === 4010) {
          return [i18n("发送太频繁,请稍后再试")];
        }
        if (t.code === 4012) {
          return [i18n("账号不存在")];
        }
        throw new Error();
      } catch (e) {
        return [i18n("系统错误，发送失败")];
      }
    };
    const c = async () => {
      try {
        const e = await o.hj.get(`${n.H}verify/image-token`, {});
        if (e.code === 0) {
          return [null, e.data];
        }
        throw new Error();
      } catch (e) {
        return [i18n("网络错误")];
      }
    };
    const s = async e => {
      try {
        const t = await o.hj.post(`${n.H}verify/send-email-token`, e, {
          _delay: 200
        });
        if (t.code === 0) {
          return [null, null];
        }
        if (t.code === 4009) {
          return [i18n("验证码错误")];
        }
        if (t.code === 4006) {
          return [i18n("账号已存在")];
        }
        if (t.code === 4010) {
          return [i18n("发送太频繁,请稍后再试")];
        }
        if (t.code === 4012) {
          return [i18n("账号不存在")];
        }
        throw new Error();
      } catch (e) {
        return [i18n("系统错误，发送失败")];
      }
    };
    const l = async e => {
      try {
        const t = await o.hj.post(`${n.H}verify/verify-email`, e, {
          _delay: 200,
          _single: true,
          fetchOpts: {
            credentials: "include"
          }
        });
        if (t.code === 0) {
          return [null, null];
        }
        if (t.code === 4009) {
          return [i18n("验证码错误")];
        }
        if (t.code === 4011) {
          return [i18n("邮箱验证码错误")];
        }
        throw new Error(i18n("未知错误"));
      } catch (e) {
        return [`接口报错：${e}`];
      }
    };
    const u = async e => {
      try {
        const t = await o.hj.post(`${n.H}user/register`, e, {
          _delay: 200,
          _single: true
        });
        if (t.code === 0) {
          return [null, t.data];
        }
        if (t.code === 4006) {
          return [i18n("账号已存在")];
        }
        if (t.code === 4011) {
          return [i18n("邮箱验证码错误")];
        }
        throw new Error(i18n("未知错误"));
      } catch (e) {
        return [`接口报错：${e}`];
      }
    };
    const f = async e => {
      try {
        const t = await o.hj.post(`${n.H}user/find-password`, e, {
          _delay: 200,
          _single: true
        });
        if (t.code === 0) {
          return [null, t.data];
        }
        if (t.code === 4011) {
          return [i18n("邮箱验证码错误")];
        }
        throw new Error(i18n("未知错误"));
      } catch (e) {
        return [`接口报错：${e}`];
      }
    };
    const d = async () => {
      try {
        const e = await o.hj.get(`${n.H}user/profile`, {}, {
          _auth: true
        });
        if (e.code === 0) {
          return [null, e.data];
        }
        throw new Error();
      } catch (e) {
        return [i18n("网络错误")];
      }
    };
    const h = async () => {
      try {
        const e = await o.hj.post(`${n.H}user/delete`, {}, {
          _auth: true
        });
        if (e.code === 0) {
          return [null, e.data];
        }
        throw new Error();
      } catch (e) {
        return [i18n("网络错误")];
      }
    };
    const p = async e => {
      try {
        const t = `${n.H}user/email-status?emails=${e.join(",")}`;
        const r = await o.hj.get(t, {});
        if (r.code === 0) {
          return [null, r.data.filter(e => e.isChatPro).map(e => e.email)];
        }
        throw new Error();
      } catch (e) {
        return [i18n("网络错误")];
      }
    };
    const g = async () => {
      try {
        const e = await o.hj.get(`${n.H}user/co-user`, {}, {
          _auth: true
        });
        if (e.code === 0 && e.data) {
          return [null, e.data];
        }
        throw new Error();
      } catch (e) {
        return [i18n("网络错误")];
      }
    };
  },
  8287: (e, t, r) => {
    "use strict";

    r.d(t, {
      hj: () => E
    });
    var n = r(3287);
    var o = r.n(n);
    var a = r(4003);
    var i = r(2966);
    var c = r.n(i);
    var s = r(1697);
    var l = r.n(s);
    var u = r(2743);
    var f = r(4275);
    var d = r(7782);
    var h = r(1579);
    const p = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = (0, u.Z)((0, h.Z)(e), function (e) {
        return [e];
      });
      t = (0, f.Z)(t);
      return (0, d.Z)(e, r, function (e, r) {
        return t(e, r[0]);
      });
    };
    var g = r(4084);
    var y = r(5676);
    var v = r(5981);
    const b = ["https://tiyu.baidu.com/api/match/NBA/live/date"];
    const m = Object.create(null);
    const w = async (e, t) => {
      const r = new (c())();
      if (t._single) {
        const n = ((e, t) => {
          let r;
          if (t._single === true) {
            const o = b.find(t => e.indexOf(t) > -1);
            r = o || t.fetchOpts?.method + "-" + e.split("?")[0];
          } else {
            r = t._single;
          }
          return r;
        })(e, t);
        if (m[n]) {
          m[n]();
        }
        m[n] = () => r.abort();
      }
      const {
        adapter: n,
        fetchOpts: o,
        type: a = "json"
      } = t;
      const i = await async function (e, t) {
        const {
          timeout: r = 60000
        } = t;
        return await Promise.race([fetch(e, t), new Promise((e, t) => setTimeout(() => t(new Error("timeout")), r))]);
      }(e, {
        ...o,
        signal: r.signal
      });
      if (i.status < 200 || i.status >= 300) {
        throw i;
      }
      let s;
      if (a === "json") {
        s = await i.json();
      } else if (a === "text") {
        s = await i.text();
      }
      if (n) {
        return n(s);
      } else {
        return s;
      }
    };
    w.get = (e, t, r) => {
      const n = `${e}${t ? `${e.includes("?") ? "&" : "?"}${new URLSearchParams(p(t, g.Z)).toString()}` : ""}`;
      return w(n, {
        ...r,
        fetchOpts: {
          ...(r == null ? undefined : r.fetchOpts),
          method: "GET"
        }
      });
    };
    var _ = r(1785);
    o().register({
      responseError: function (e) {
        return Promise.reject(e);
      },
      request: function (e, t) {
        if (!!t && t.method === "post" && !((t == null ? undefined : t.body) instanceof FormData)) {
          t.headers["Content-Type"] = "application/json;charset=UTF-8";
        }
        return [e, t];
      }
    });
    const k = {};
    const A = Object.create(null);
    const E = async (e, t) => {
      const r = new (c())();
      if (t._single) {
        const n = ((e, t) => {
          let r;
          r = t._single === true ? t.fetchOpts?.method + "-" + e.split("?")[0] : t._single;
          return r;
        })(e, t);
        if (A[n]) {
          A[n]();
        }
        A[n] = () => r.abort();
      }
      var n;
      if (t._delay) {
        await (n = t._delay, new Promise(e => {
          setTimeout(e, n);
        }));
      }
      const o = {
        "i-app": "hitab",
        "i-lang": window.i18nLangCode,
        "i-version": a.Ji,
        "i-branch": a.s8 ? "en" : "zh",
        "i-platform": a.Lt
      };
      if (t._auth) {
        const e = (0, y.useUserStore)();
        if (!e.token) {
          if (a.EF) {
            (0, _.bc)({
              type: _.o1.needLogin
            });
          } else {
            v.R.warn({
              message: i18n("此功能需要先登录"),
              btnText: i18n("去登录"),
              onBtnClick: () => {
                e.showLogin(false);
              }
            });
          }
          throw new Error("auth empty token");
        }
        o.Authorization = "Bearer " + e.token;
      }
      let i;
      t.fetchOpts ||= {
        headers: {}
      };
      t.fetchOpts.headers ||= {};
      Object.assign(t.fetchOpts.headers, o);
      i = await x(e, {
        ...t.fetchOpts,
        signal: r.signal,
        timeout: t.timeout
      }, r);
      if (i.status < 200 || i.status >= 300) {
        throw i;
      }
      if (t._responseAll) {
        return i;
      }
      if (t._stream) {
        const e = i.headers.get("content-type");
        if (e != null && e.includes("text/event-stream")) {
          return [i.body, null, r];
        }
        return [null, await i.json(), r];
      }
      let s = await i.json();
      var p;
      if (!t._Authorization) {
        if (s?.code === 4002 || s?.code === 4014) {
          if (a.EF) {
            (0, _.bc)({
              type: _.o1.needLogin
            });
          } else {
            const r = await function () {
              let e = false;
              const t = [];
              return new Promise(async (r, n) => {
                t.push({
                  resolve: r,
                  reject: n
                });
                if (!e) {
                  e = true;
                  try {
                    const r = await async function () {
                      true;
                      return (0, y.useUserStore)();
                    }();
                    const {
                      refreshToken: n
                    } = r;
                    if (!n) {
                      e = false;
                      t.forEach(e => {
                        e.reject(new Error("no refreshtoken"));
                      });
                      return;
                    }
                    const o = await x(`${a.H}user/refreshtoken`, {
                      method: "post",
                      body: JSON.stringify({
                        refreshtoken: n
                      }),
                      headers: {
                        "i-app": "hitab",
                        "i-lang": window.i18nLangCode,
                        "i-version": a.Ji,
                        "i-branch": a.s8 ? "en" : "zh"
                      }
                    });
                    const i = await o.json();
                    if (o.status !== 200 && o.status !== 201 || i.code !== 0) {
                      if (o.status !== 200 && o.status !== 201) {
                        throw new Error(i == null ? undefined : i.message);
                      }
                      if ((i == null ? undefined : i.code) === 4007 || (i == null ? undefined : i.code) === 4004) {
                        C(true);
                      } else {
                        if ((i == null ? undefined : i.code) !== 4003 && (i == null ? undefined : i.code) !== 4002) {
                          throw new Error(i == null ? undefined : i.message);
                        }
                        if (!a.EF) {
                          C();
                        }
                      }
                      e = false;
                      t.forEach(e => {
                        e.reject(i.message);
                      });
                    } else {
                      (async function (e) {
                        (0, y.useUserStore)().updateTokens(e);
                      })(i.data);
                      e = false;
                      t.forEach(e => {
                        e.resolve(i.data.token);
                      });
                    }
                  } catch (r) {
                    e = false;
                    t.forEach(e => {
                      e.reject(r);
                    });
                  }
                }
              });
            }();
            t._Authorization = `Bearer ${r}`;
            delete o.Authorization;
            s = await E(e, t);
          }
        } else if (s?.code === 4007 || s?.code === 4004) {
          C(true);
        } else if (s?.code === 4003) {
          C();
        } else if ((p = s) !== null && p !== undefined) {
          p.code;
        }
      }
      return s;
    };
    async function C(e = false) {
      const {
        useUserStore: t
      } = await Promise.resolve().then(r.bind(r, 5676));
      t().showLogin(e);
    }
    async function x(e, t, r) {
      const {
        timeout: n = 60000
      } = t;
      let o = null;
      const a = await Promise.race([fetch(e, t), new Promise((e, t) => {
        o = window.setTimeout(() => {
          t(new Error("timeout"));
          if (r) {
            r.abort();
          }
        }, n);
      })]);
      if (o) {
        clearTimeout(o);
      }
      return a;
    }
    ["get", "delete"].forEach(e => {
      E[e] = function (t, r, n = {}) {
        const o = `${t}${r ? `${t.includes("?") ? "&" : "?"}${new URLSearchParams(p(r, g.Z)).toString()}` : ""}`;
        const a = k[e + o];
        if (a) {
          return w.get(a);
        } else {
          return E(o, {
            ...n,
            fetchOpts: {
              method: e,
              ...n.fetchOpts
            }
          });
        }
      };
    });
    ["post", "patch", "put"].forEach(e => {
      E[e] = function (t, r) {
        let n;
        let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        n = r instanceof FormData ? r : JSON.stringify(r);
        return E(t, {
          ...o,
          fetchOpts: {
            body: n,
            method: e,
            ...o.fetchOpts
          }
        });
      };
    });
    E.jsonp = (e, t, r) => l()(`${e}${t ? `?${new URLSearchParams(p(t, g.Z)).toString()}` : ""}`, r);
  },
  3603: (e, t, r) => {
    "use strict";

    r.d(t, {
      gh: () => a,
      J$: () => s,
      Dc: () => i
    });
    const n = {
      base: {
        "--color-black": "0 0 0",
        "--color-white": "255 255 255"
      },
      light: {
        "--color-blue": "74 122 255",
        "--color-green": "52 199 89",
        "--color-yellow": "255 149 0",
        "--color-orange": "255 155 48",
        "--color-red": "255 77 79",
        "--color-t1": "28 28 30",
        "--color-t2": "58 58 60",
        "--color-t3": "142 142 148",
        "--color-t4": "199 199 204",
        "--color-b1": "209 209 214",
        "--color-b2": "229 229 234",
        "--color-b3": "248 248 248",
        "--color-b4": "255 255 255",
        "--color-b5": "255 255 255",
        "--color-m1": "255 255 255",
        "--color-m2": "0 0 0",
        "--color-todo-t1": "47 87 255",
        "--color-todo-t2": "83 147 255",
        "--color-note-t1": "192 131 93",
        "--color-note-t2": "198 174 159",
        "--color-calc-t1": "255 255 255",
        "--color-calc-t2": "200 200 204",
        "--color-calc-t3": "142 142 148",
        "--color-calc-t4": "94 94 98",
        "--color-calc-b1": "75 78 84",
        "--color-calc-b2": "50 52 57",
        "--color-calc-b3": "34 36 39",
        "--color-calc-l1": "254 189 95",
        "--color-calc-l2": "251 132 54",
        "--color-calc-l3": "96 99 107",
        "--color-calc-l4": "58 60 66",
        "--color-calc-l6": "32 33 38",
        "--color-calc-l7": "81 84 90",
        "--color-calc-l5": "63 65 72",
        "--color-calc-l8": "72 74 79",
        "--color-calc-l0": "40 41 45",
        "--color-calc-l9": "252 163 36",
        "--color-calc-yellow": "240 168 16",
        "--color-calendar-red": "255 77 79",
        "--color-calendar-b1": "255 101 101",
        "--color-calendar-b2": "255 246 241",
        "--color-worldcup-t1": "168 238 65",
        "--color-rate-t1": "28 28 30",
        "--color-rate-t2": "58 58 60",
        "--color-rate-t3": "141 142 148",
        "--color-rate-t4": "109 147 229",
        "--color-rate-b1": "255 255 255",
        "--color-rate-b2": "248 248 248",
        "--color-rate-b3": "34 36 39",
        "--color-rate-b4": "55 69 157",
        "--color-rate-b5": "238 240 239",
        "--color-rate-l1": "70 154 255",
        "--color-rate-l2": "72 90 188",
        "--color-game-b1": "38 42 53",
        "--color-game-b2": "70 74 88",
        "--color-game-b3": "23 26 34",
        "--color-game-b4": "44 47 59",
        "--color-game-b5": "20 174 60",
        "--color-game-t1": "200 200 204",
        "--color-game-t2": "142 142 148",
        "--color-movie-b1": "94 104 71",
        "--color-clock-b1": "22 21 28",
        "--color-wclock-b1": "19 20 21",
        "--color-wclock-t1": "37 216 27",
        "--color-wclock-t2": "47 142 42",
        "--color-wclock-t3": "30 82 27",
        "--color-bookmark-t1": "98 173 91",
        "--color-bookmark-b1": "248 248 248",
        "--color-bookmark-b2": "255 255 255",
        "--color-record-t1": "255 115 48"
      },
      dark: {
        "--color-blue": "83 98 255",
        "--color-green": "20 174 60",
        "--color-yellow": "255 149 0",
        "--color-orange": "255 155 48",
        "--color-red": "255 77 79",
        "--color-t1": "255 255 255",
        "--color-t2": "200 200 204",
        "--color-t3": "142 142 148",
        "--color-t4": "94 94 98",
        "--color-b1": "82 83 83",
        "--color-b2": "64 64 64",
        "--color-b3": "32 32 32",
        "--color-b4": "17 17 17",
        "--color-b5": "64 64 64",
        "--color-m1": "0 0 0",
        "--color-m2": "255 255 255",
        "--color-todo-t1": "83 147 255",
        "--color-todo-t2": "47 87 255",
        "--color-note-t1": "198 174 159",
        "--color-note-t2": "192 131 93",
        "--color-calc-t1": "255 255 255",
        "--color-calc-t2": "200 200 204",
        "--color-calc-t3": "142 142 148",
        "--color-calc-t4": "94 94 98",
        "--color-calc-b1": "75 78 84",
        "--color-calc-b2": "50 52 57",
        "--color-calc-b3": "34 36 39",
        "--color-calc-l1": "254 189 95",
        "--color-calc-l2": "251 132 54",
        "--color-calc-l3": "96 99 107",
        "--color-calc-l4": "58 60 66",
        "--color-calc-l6": "32 33 38",
        "--color-calc-l7": "81 84 90",
        "--color-calc-l8": "72 74 79",
        "--color-calc-l5": "63 65 72",
        "--color-calc-l0": "40 41 45",
        "--color-calc-l9": "252 163 36",
        "--color-calc-yellow": "240 168 16",
        "--color-calendar-red": "219 56 72",
        "--color-calendar-b1": "230 70 70",
        "--color-calendar-b2": "54 33 31",
        "--color-worldcup-t1": "168 238 65",
        "--color-rate-t1": "28 28 30",
        "--color-rate-t2": "58 58 60",
        "--color-rate-t3": "141 142 148",
        "--color-rate-t4": "109 147 229",
        "--color-rate-b1": "255 255 255",
        "--color-rate-b2": "248 248 248",
        "--color-rate-b3": "34 36 39",
        "--color-rate-b4": "55 69 157",
        "--color-rate-b5": "238 240 239",
        "--color-rate-l1": "70 154 255",
        "--color-rate-l2": "72 90 188",
        "--color-game-b1": "38 42 53",
        "--color-game-b2": "70 74 88",
        "--color-game-b3": "23 26 34",
        "--color-game-b4": "44 47 59",
        "--color-game-b5": "20 174 60",
        "--color-game-t1": "200 200 204",
        "--color-game-t2": "142 142 148",
        "--color-movie-b1": "94 104 71",
        "--color-clock-b1": "22 21 28",
        "--color-wclock-b1": "19 20 21",
        "--color-wclock-t1": "37 216 27",
        "--color-wclock-t2": "47 142 42",
        "--color-wclock-t3": "30 82 27",
        "--color-bookmark-t1": "85 170 78",
        "--color-bookmark-b1": "64 64 64",
        "--color-bookmark-b2": "82 83 83",
        "--color-record-t1": "233 94 27"
      }
    };
    var o = r(6261);
    const a = e => ({
      ...n.base,
      ...n[e]
    });
    const i = async e => {
      let t;
      t = e ? e.followSystem || !e.theme ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e.theme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const r = {
        ...n.base,
        ...n[t]
      };
      c(r);
      if (t === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    const c = e => {
      const t = `\n  body,\n  ::before,\n  ::after {\n    ${Object.keys(e).map(t => `${t}:${e[t]}`).join(";")}\n   }\n  `;
      const r = document.querySelector("#theme_style");
      if (r) {
        r.innerHTML = t;
      } else {
        const e = document.createElement("style");
        e.id = "theme_style";
        e.innerHTML = t;
        document.head.insertAdjacentElement("beforeend", e);
      }
    };
    const s = e => {
      if (((e == null ? undefined : e.globalFont) || o.Df) === "system-ui") {
        document.documentElement.classList.add("system-ui");
      } else {
        document.documentElement.classList.remove("system-ui");
      }
    };
  },
  3844: (e, t, r) => {
    "use strict";

    r.d(t, {
      i: () => i
    });
    var n = r(661);
    var o = r.n(n);
    const a = ["EVERY_SECOND", "EVERY_MINUTE", "EVERY_HOUR", "EVERY_DAY"].reduce((e, t) => {
      e[t] = new Set();
      return e;
    }, {});
    const i = new class {
      tasks = a;
      constructor() {
        new Worker(new URL(r.p + r.u(853), r.b)).onmessage = e => {
          if (e.data !== "tick") {
            return;
          }
          const t = o()();
          if (t.second() === 0) {
            this.tasks.EVERY_MINUTE.forEach(e => e(t));
          }
          if (t.minute() === 0 && t.second() === 0) {
            this.tasks.EVERY_HOUR.forEach(e => e(t));
          }
          if (t.hour() === 0 && t.minute() === 0 && t.second() === 0) {
            this.tasks.EVERY_DAY.forEach(e => e(t));
          }
          this.tasks.EVERY_SECOND.forEach(e => e(t));
        };
      }
      subscribe(e, t) {
        this.tasks[e].add(t);
      }
      unsubscribe(e, t) {
        this.tasks[e].delete(t);
      }
      clear() {
        Object.keys(this.tasks).forEach(e => {
          this.tasks[e].clear();
        });
      }
    }();
  },
  2731: (e, t, r) => {
    "use strict";

    r.d(t, {
      Pe: () => s,
      S9: () => c,
      VU: () => a,
      gs: () => i
    });
    var n = r(5981);
    var o = r(4003);
    i18n("全部");
    i18n("工具");
    i18n("资讯阅读");
    i18n("娱乐");
    const a = {
      name: o.sM ? "发工资" : "Payday",
      time: 1673280000000,
      repeatType: "month",
      dateType: "solar",
      timerStyle: {
        fontColor: "rgba(248, 248, 248, 1)",
        bgType: "image",
        bgColor: "rgba(182, 150, 135, 1)",
        bgImageColor: "",
        bgImage: {
          large: "https://static.wetab.link/widget-background/background08_larg.jpg",
          medium: "https://static.wetab.link/widget-background/background08_medium.jpg",
          small: "https://static.wetab.link/widget-background/background08_small.jpg"
        },
        bgMask: 20
      }
    };
    const i = {
      name: o.sM ? "与 Tina 相识" : "In love with Smith",
      time: 1589904000000,
      dateType: "solar",
      timerStyle: {
        fontColor: "rgba(248, 248, 248, 1)",
        bgType: "image",
        bgColor: "rgba(109, 131, 95, 1)",
        bgImageColor: "",
        bgImage: {
          large: "https://static.wetab.link/widget-background/background05_larg.jpg",
          medium: "https://static.wetab.link/widget-background/background05_medium.jpg",
          small: "https://static.wetab.link/widget-background/background05_small.jpg"
        },
        bgMask: 20
      }
    };
    const c = e => {
      if (o.sM) {
        n.R.success({
          message: `【${e}】添加完成`
        });
      } else {
        n.R.success({
          message: `[${e}] add success`
        });
      }
    };
    const s = {
      w: 1024,
      h: 640
    };
  },
  4581: (e, t, r) => {
    "use strict";

    r.d(t, {
      E0: () => u,
      Rm: () => c,
      tD: () => l
    });
    var n = r(4003);
    var o = r(4522);
    var a = r(7712);
    var i = r(2731);
    let c;
    (function (e) {
      e.todo = "widget-todo";
      e.note = "widget-note";
      e.timerBirthday = "widget-timer-birthday";
      e.timerFestival = "widget-timer-festival";
      e.timerCountdown = "widget-timer-countdown";
      e.timerMark = "widget-timer-mark";
      e.timerYear = "widget-timer-year";
      e.hotsearch = "widget-hotsearch";
      e.weather = "widget-weather";
      e.calculator = "widget-calculator";
      e.calendar = "widget-calendar";
      e.celebrity = "widget-celebrity";
      e.worldcup = "widget-worldcup";
      e.habit = "widget-habit";
      e.system = "widget-system";
      e.exchangeRate = "widget-exchange-rate";
      e.news = "widget-news";
      e.stock = "widget-stock";
      e.history = "widget-history";
      e.game = "widget-game";
      e.movie = "widget-movie";
      e.book = "widget-book";
      e.play = "widget-play";
      e.clock = "widget-clock";
      e.worldClock = "widget-world-clock";
      e.hotapp = "widget-hotapp";
      e.nba = "widget-nba";
      e.chatgpt = "widget-chatgpt";
      e.bookmarks = "widget-bookmarks";
      e.haohuola = "widget-haohuola";
      e.football = "widget-football";
      e.historyRecord = "widget-history-record";
      e.aippt = "widget-aippt";
      e.aipaper = "widget-aipaper";
    })(c ||= {});
    const s = (0, a.Z)([!n.Pl && {
      name: c.chatgpt,
      title: "WeTab AI",
      desc: "WeTab AI是一个聊天机器人，你可以和它聊天，也可以用它辅助你完成日常工作。",
      sizes: ["s", "m"],
      tags: ["information", "recreation"]
    }, {
      name: c.aippt,
      title: "AiPPT",
      desc: "AI PPT结合最新AI技术，提供一键生成高质量PPT的解决方案。快速生成符合需求的专业PPT，简化设计流程，提升工作效率。",
      sizes: ["s", "m"],
      tags: ["util", "information"]
    }, {
      name: c.aipaper,
      title: "Ai论文生成",
      desc: "AI论文工具，具备选题、文献检索、写作助手等多项实用功能，极大地提高了研究者的论文写作效率和质量。",
      sizes: ["s", "m"],
      tags: ["util", "information"]
    }, {
      name: c.weather,
      title: i18n("天气"),
      desc: i18n("24小时预报、未来7天预报、城市查询，只需一个天气小组件，随时关注天气变化状况。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, {
      name: c.todo,
      title: i18n("待办"),
      desc: i18n("通过待办事项来列出需要处理的事物，包括生活、工作或其他事项，让你轻松记住待办事项。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, {
      name: c.timerBirthday,
      title: i18n("生日"),
      desc: i18n("添加生日小组件，能够帮助你记住家人、朋友的生日，时间顺序列表提醒，一目了然。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, {
      name: c.note,
      title: i18n("笔记"),
      desc: i18n("通过丰富的编辑功能，记录你的见闻、灵感与思考，支持快捷指令键入格式和markdown格式。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, n.sM && {
      name: c.hotsearch,
      title: i18n("热搜"),
      desc: i18n("摸鱼神器，收录各大平台热搜、热榜或热文，热门事件热门话题跟踪，一个也不落下。"),
      sizes: ["m", "l"],
      tags: ["information"]
    }, {
      name: c.timerFestival,
      title: i18n("节日"),
      desc: i18n("下一个节日将会是什么呢？节日小组件将重要节日按照顺序列表展示，帮助你做好节日规划安排。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, {
      name: c.timerCountdown,
      title: i18n("倒计时"),
      desc: i18n("使用倒计时小组件，定义你的事件和活动，随时提醒你剩余时间节点。"),
      sizes: ["s", "m", "l"],
      tags: ["util"],
      previewData: i.VU
    }, {
      name: c.timerMark,
      title: i18n("纪念日"),
      desc: i18n("与TA相识、在一起多少天记录下来，数字的跳动，是一件浪漫的事情……"),
      sizes: ["s", "m", "l"],
      tags: ["util"],
      previewData: i.gs
    }, {
      name: c.timerYear,
      title: i18n("今年余额"),
      desc: i18n("时间如沙般难以握住，一年又一年，一日又一日，今年过去了多少还剩余多少？"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, {
      name: c.calculator,
      title: i18n("换算器"),
      desc: i18n("一款集计算器、房贷计算、个税计算、日期计算、进制转换和单位换算于一体的全能计算工具。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, {
      name: c.calendar,
      title: i18n("日历"),
      desc: i18n("使用日历来跟踪倒数日、节假日、法定节假日、纪念日，不错过每一个重要的日子。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, {
      name: c.celebrity,
      title: i18n("每日一言"),
      desc: i18n("每日一言，与更有趣的灵魂对话，为你的心灵注入光芒。"),
      sizes: ["m", "l"],
      tags: ["information"]
    }, n.sM && {
      name: c.news,
      title: i18n("新闻"),
      desc: i18n("一览热点时事。"),
      sizes: ["s", "m", "l"],
      tags: ["information"]
    }, {
      name: c.habit,
      title: i18n("习惯养成"),
      desc: i18n("习惯养成，从今天开始。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, n.FH && !n.s$ && {
      name: c.system,
      title: i18n("系统状态"),
      desc: i18n("实时监测电脑当前的CPU、电池、内存的使用情况，一目了然。"),
      sizes: ["m", "l"],
      tags: ["util"]
    }, {
      name: c.exchangeRate,
      title: i18n("汇率"),
      desc: i18n("通过汇率小组件实时查看汇率牌价与趋势，当然，也能帮你根据当前汇率进行兑换计算。"),
      sizes: ["s", "m", "l"],
      tags: ["information"]
    }, {
      name: c.stock,
      title: i18n("股票"),
      desc: i18n("让您轻松关注股票和股市的动态，沪深、港股、美股全球市场实时行情。"),
      sizes: ["s", "m", "l"],
      tags: ["information"]
    }, n.sM && {
      name: c.history,
      title: i18n("历史上的今日"),
      desc: "看似寻常的每天，在历史上有着怎样的精彩故事呢？每天一条精选推送。",
      sizes: ["m", "l"],
      tags: ["information"]
    }, n.sM && {
      name: c.movie,
      title: i18n("电影日历"),
      desc: i18n("此刻电影日历，每天一部优秀电影。"),
      sizes: ["m", "l"],
      tags: ["information", "recreation"]
    }, {
      name: c.play,
      title: i18n("休闲小游戏"),
      desc: "轻松有趣的小游戏，摸鱼必备，切勿贪念被老板发现哦！",
      sizes: ["m", "l"],
      tags: ["recreation"],
      containerClass: "shadow-color-none overflow-visible"
    }, {
      name: c.clock,
      title: i18n("全屏时钟"),
      desc: i18n("可以替代屏保的时钟小组件，卡片式和数码两种时钟选择，即点即用。"),
      sizes: ["s", "m", "l"],
      tags: ["util"]
    }, {
      name: c.worldClock,
      title: i18n("世界时钟"),
      desc: i18n("世界时钟，查询世界各地当前时间。"),
      sizes: ["m", "l"],
      tags: ["util"]
    }, {
      name: c.hotapp,
      title: "精品应用",
      desc: "分享最新鲜优秀的正版软件",
      sizes: ["m", "l"],
      tags: ["information"]
    }, {
      name: c.nba,
      title: "NBA赛事",
      desc: "NBA赛程、比分、排名",
      sizes: ["s", "m", "l"],
      tags: ["information"]
    }, n.FH && !n.s$ && {
      name: c.bookmarks,
      title: i18n("书签管理"),
      desc: i18n("更高效、美观的书签管理"),
      sizes: ["s"],
      tags: ["util"]
    }, n.FH && !n.s$ && {
      name: c.historyRecord,
      title: i18n("历史记录"),
      desc: i18n("更高效、美观的历史记录管理"),
      sizes: ["s"],
      tags: ["util"]
    }, {
      name: c.football,
      title: i18n("足球赛事"),
      desc: i18n("足球赛事数据分析，涵盖足球直播、专家分析、赛事数据、AI预测、独家情报等服务"),
      sizes: ["s", "m", "l"],
      tags: ["information"]
    }]);
    s.map(e => e.name);
    const l = {
      [o.BU.hotsearch]: c.hotsearch,
      [o.BU.note]: c.note,
      [o.BU.timerBirthday]: c.timerBirthday,
      [o.BU.timerFestival]: c.timerFestival,
      [o.BU.timerYear]: c.timerYear,
      [o.BU.todo]: c.todo,
      [o.BU.weather]: c.weather,
      [o.BU.calculator]: c.calculator,
      [o.BU.exchangeRate]: c.exchangeRate,
      [o.BU.habit]: c.habit,
      [o.BU.stock]: c.stock,
      [o.BU.game]: c.game,
      [o.BU.movie]: c.movie,
      [o.BU.book]: c.book,
      [o.BU.play]: c.play,
      [o.BU.clock]: c.clock,
      [o.BU.worldClock]: c.worldClock,
      [o.BU.hotApp]: c.hotapp,
      [o.BU.nba]: c.nba,
      [o.BU.chatgpt]: c.chatgpt,
      [o.BU.bookmarks]: c.bookmarks,
      [o.BU.haohuola]: c.haohuola,
      [o.BU.historyRecord]: c.historyRecord,
      [o.BU.aippt]: c.aippt,
      [o.BU.aipaper]: c.aipaper
    };
    const u = e => s.find(t => t.name === e);
    s.filter(e => !!e.containerClass).reduce((e, t) => {
      e.set(t.name, t.containerClass);
      return e;
    }, new Map());
  },
  143: (e, t, r) => {
    "use strict";

    r.d(t, {
      Gl: () => i,
      ou: () => o,
      z2: () => a
    });
    var n = r(4581);
    window.widgets = new Map();
    class o {}
    const a = (e, t) => {
      if (!window.widgets.get(e)) {
        window.widgets.set(e, t);
      }
    };
    new Map();
    const i = new class {
      async preRender(e) {
        const t = await this.load(e.name);
        if (t) {
          t.preRender(e);
        }
      }
      async renderHome(e) {
        const t = await this.load(e.name);
        if (t) {
          return t.renderHome(e);
        }
      }
      async addWidget(e) {
        const t = await this.load(e.name);
        return !!t && t.addWidget(e);
      }
      async loadStore(e) {
        if (n.tD[e]) {
          const t = await this.load(n.tD[e]);
          return !!t && t.loadStore();
        }
      }
      async loadStoreFromName(e) {
        const t = await this.load(e);
        return t != null && !!t.loadStore && t.loadStore();
      }
      load(e) {
        return new Promise(t => {
          const n = window.widgets.get(e);
          if (n) {
            return t(n);
          }
          if (e.startsWith("widget-custom-")) {
            const r = document.createElement("script");
            r.src = `./${e}.js`;
            document.body.append(r);
            r.onload = () => {
              t(window.widgets.get(e));
            };
            r.onerror = () => {
              t(null);
            };
            return;
          }
          if (e.startsWith("widget-")) {
            r(8531)(`./${e}/loader`).then(() => {
              t(window.widgets.get(e));
            }).catch(() => {
              t(null);
            });
          } else {
            t(null);
          }
        });
      }
    }();
  },
  1196: (e, t, r) => {
    "use strict";

    r.r(t);
    var n = r(8398);
    var o = r(7268);
    var a = r(9445);
    var i = r(5676);
    var c = r(1785);
    var s = r(8514);
    var l = r(661);
    var u = r.n(l);
    var f = r(3844);
    var d = r(4003);
    var h = r(5029);
    var p = r(3131);
    const g = {
      class: "hi-changes relative h-full"
    };
    const y = (0, o.aZ)({
      __name: "hi-changes",
      props: {
        variable: null
      },
      setup(e) {
        const t = e;
        const {
          appContext: r
        } = (0, o.FN)();
        const n = r.config.globalProperties.getSlots();
        return (e, r) => {
          (0, o.wg)();
          return (0, o.iD)("div", g, [((0, o.wg)(true), (0, o.iD)(o.HY, null, (0, o.Ko)((0, a.SU)(n), (r, n) => {
            (0, o.wg)();
            return (0, o.j4)((0, o.LL)(r), {
              key: n,
              show: e.isFn(r.props.value) ? r.props.value(t.variable) : t.variable === r.props.value
            }, null, 8, ["show"]);
          }), 128))]);
        };
      }
    });
    const v = y;
    var b = r(9282);
    var m = r(4209);
    const w = (0, o.aZ)({
      inheritAttrs: false
    });
    const _ = (0, o.aZ)({
      ...w,
      __name: "hi-change",
      props: {
        show: {
          type: Boolean,
          default: false
        },
        value: {
          type: [String, Boolean, Number, Function]
        },
        style: {
          default: undefined
        },
        class: {
          default: null
        }
      },
      setup(e) {
        const t = e;
        return (r, n) => {
          const a = b.Z;
          (0, o.wg)();
          return (0, o.j4)(a, {
            show: e.show,
            class: (0, m.normalizeClass)(["hi-change h-full w-full", t.class]),
            ani: "fade-in-right",
            style: (0, m.normalizeStyle)(t.style)
          }, {
            default: (0, o.w5)(() => [(0, o.WI)(r.$slots, "default")]),
            _: 3
          }, 8, ["show", "class", "style"]);
        };
      }
    });
    var k = r(5427);
    var A = r(3218);
    var E = r(581);
    var C = r(8294);
    var x = r(4472);
    const S = d.AN ? "pay-card" : "card";
    var O = r(7437);
    var B = r(3002);
    const j = e => {
      (0, o.dD)("data-v-782c9a14");
      e = e();
      (0, o.Cn)();
      return e;
    };
    const D = {
      class: "pointer-events-none absolute left-0 bottom-0 flex h-[74%] w-full flex-col"
    };
    const F = j(() => (0, o._)("div", {
      class: "flex-1 bg-color-b4"
    }, null, -1));
    const P = {
      class: "relative flex h-full flex-col"
    };
    const M = {
      key: 0,
      class: "font-ali-75 text-[32px] text-color-blue"
    };
    const T = ["src"];
    const I = {
      key: 1,
      class: "relative mb-[54px] pt-[44px] font-ali-75 text-[20px] leading-none text-color-t2"
    };
    const L = [j(() => (0, o._)("i", {
      class: "iconfont icon-return_icon h-full text-[20px] text-color-t2"
    }, null, -1))];
    const Z = {
      key: 2,
      type: "button",
      class: "relative mt-[20px] inline-block cursor-auto font-ali-75 text-[20px] text-color-t2"
    };
    const U = [j(() => (0, o._)("i", {
      class: "iconfont icon-return_icon h-full text-[20px] text-color-t2"
    }, null, -1))];
    const R = {
      class: "flex-1 overflow-hidden"
    };
    const z = {
      class: "flex h-full flex-col"
    };
    const H = {
      class: "h-full max-h-[226px]"
    };
    const N = {
      class: "mt-[32px] flex-shrink-0"
    };
    const W = j(() => (0, o._)("i", {
      class: "iconfont icon-icon_left"
    }, null, -1));
    const $ = (0, o.aZ)({
      __name: "user-common",
      props: {
        isBack: {
          type: Boolean,
          default: false
        }
      },
      emits: ["back-login"],
      setup(e, t) {
        let {
          emit: r
        } = t;
        const n = e;
        const c = (0, o.Fl)(() => ({
          "mask-image": `url(${O})`
        }));
        const s = () => {
          l.userDialogType = "login";
          r("back-login");
        };
        const l = (0, i.useUserStore)();
        const u = (0, o.Fl)(() => S === "pay-card");
        return (e, t) => {
          (0, o.wg)();
          return (0, o.iD)("div", {
            class: (0, m.normalizeClass)([[{
              "px-[50px] py-[33px]": !(0, a.SU)(u)
            }, (0, a.SU)(u) ? "h-full" : "h-[551px]"], "user-common relative"])
          }, [(0, o._)("div", D, [(0, o._)("div", {
            class: "wave-img h-[25px] flex-shrink-0 bg-color-b4",
            style: (0, m.normalizeStyle)((0, a.SU)(c))
          }, null, 4), F]), (0, o._)("div", P, [(0, o._)("div", {
            class: (0, m.normalizeClass)([[{
              "mb-[96px]": !(0, a.SU)(u)
            }], "flex-shrink-0 text-center"])
          }, [(0, a.SU)(u) ? (0, o.kq)("", true) : ((0, o.wg)(), (0, o.iD)("div", M, [(0, o._)("img", {
            class: "mx-auto h-[41px] w-[156px]",
            src: (0, a.SU)(B),
            alt: ""
          }, null, 8, T)])), (0, a.SU)(u) ? ((0, o.wg)(), (0, o.iD)("div", I, [n.isBack ? ((0, o.wg)(), (0, o.iD)("div", {
            key: 0,
            class: "absolute left-0 top-0 cursor-pointer",
            onClick: s
          }, L)) : (0, o.kq)("", true), (0, o.WI)(e.$slots, "title")])) : ((0, o.wg)(), (0, o.iD)("button", Z, [n.isBack ? ((0, o.wg)(), (0, o.iD)("div", {
            key: 0,
            class: "absolute left-[-40px] top-[5px] cursor-pointer",
            onClick: s
          }, U)) : (0, o.kq)("", true), (0, o.WI)(e.$slots, "title")]))], 2), (0, o._)("div", R, [(0, o._)("div", z, [(0, o._)("div", H, [(0, o.WI)(e.$slots, "default")])])]), (0, o._)("div", N, [(0, o.WI)(e.$slots, "footer", {}, () => [(0, o._)("button", {
            type: "button",
            class: "mx-auto flex items-center text-[14px] text-color-t3",
            onClick: s
          }, [W, (0, o.Uk)(" " + (0, m.toDisplayString)(e.i18n("回到登录")), 1)])])])])], 2);
        };
      }
    });
    var q = r(6911);
    const Y = (0, q.Z)($, [["__scopeId", "data-v-782c9a14"]]);
    i18n("用户名不能为空");
    const Q = [{
      rule: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: i18n("请输入正确的邮箱格式"),
      trigger: "blur"
    }];
    const V = [{
      validator: e => e.trim() !== "",
      message: i18n("密码不能为空"),
      trigger: "blur"
    }, {
      validator: e => e.trim().length >= 6,
      message: i18n("密码不能少于6位"),
      trigger: "blur"
    }];
    var G = r(8793);
    var K = r(4118);
    var J = r.n(K);
    var X = r(5981);
    var ee = r(5762);
    const te = {
      class: "flex h-full flex-col"
    };
    const re = ["onClick"];
    const ne = {
      class: "flex w-[calc(100%-32px)] items-center"
    };
    const oe = {
      class: "text-dot h-[20px] font-ali-55 leading-[20px] text-color-t3 group-hover:text-color-t1"
    };
    const ae = {
      key: 0,
      class: "ml-[8px] h-[16px] w-[52px] shrink-0",
      src: x,
      alt: ""
    };
    const ie = ["onClick"];
    const ce = [(e => {
      (0, o.dD)("data-v-1a7e4860");
      e = e();
      (0, o.Cn)();
      return e;
    })(() => (0, o._)("i", {
      class: "iconfont icon-clear_merge_icon text-[16px] text-color-t2 duration-150"
    }, null, -1))];
    const se = {
      class: "flex items-center justify-between"
    };
    const le = {
      class: "text-[14px] text-color-t3"
    };
    const ue = (0, o.aZ)({
      __name: "login",
      setup(e) {
        const t = (0, a.qj)({
          email: {
            value: "",
            props: {
              placeholder: i18n("邮箱")
            }
          },
          password: {
            value: "",
            props: {
              type: "password",
              placeholder: i18n("密码")
            }
          }
        });
        const r = {
          email: Q,
          password: V
        };
        const c = (0, a.iH)();
        const s = (0, i.useUserStore)();
        const {
          userDialogType: l
        } = (0, p.Jk)(s);
        const u = d.AN ? () => {} : (0, o.f3)("changeShow");
        const f = {
          text: i18n("登录"),
          size: "block",
          async handler() {
            const [e, r] = await (0, G.x4)({
              email: t.email.value,
              password: J()(t.password.value)
            });
            var n;
            if (e) {
              if ((n = c.value) !== null && n !== undefined) {
                n.setErrorMsg(e);
              }
            } else {
              X.R.success({
                message: i18n("登录成功")
              });
              s.setLoginSuccess(r);
              u(false);
            }
          }
        };
        const h = (0, a.iH)();
        const g = (0, a.iH)();
        const y = (0, a.iH)(false);
        const v = (0, a.iH)(false);
        const b = (0, a.iH)([]);
        const w = (0, o.Fl)(() => b.value.filter(e => e.email !== t.email.value && e.email.includes(t.email.value)));
        const _ = (0, o.Fl)(() => y.value || v.value);
        const x = () => {
          (0, o.Y3)(() => {
            h.value.checkInputIsError();
          });
        };
        const S = () => {
          y.value = true;
          h.value.stopValidate();
        };
        (0, o.bv)(() => {
          b.value = s.getUserHistory();
          t.email.value = b.value[0]?.email || "";
          (0, ee.i9H)(h.value, () => {
            y.value = false;
            x();
          });
          window.addEventListener("keydown", e => {
            if (e.key === "Tab") {
              if (window.document.activeElement?.tagName === "INPUT") {
                y.value = false;
                v.value = false;
                x();
              }
            }
          });
          if (b.value.length > 0) {
            O();
          }
        });
        const O = async () => {
          const e = await s.refreshUserHistory();
          if (e.length > 0) {
            b.value = e;
          }
        };
        (0, o.YP)(_, e => {
          if (e) {
            (0, o.Y3)(() => {
              (0, ee.i9H)(g.value, () => {
                v.value = false;
                x();
              });
            });
          }
          if (h.value) {
            if (e) {
              v.value = true;
              h.value.stopValidate();
            } else {
              (0, o.Y3)(() => {
                h.value.restartValidate();
              });
            }
          }
        });
        return (e, i) => {
          const u = C.Z;
          const p = E.Z;
          const y = A.Z;
          const O = k.Z;
          (0, o.wg)();
          return (0, o.j4)(Y, {
            id: "login"
          }, {
            title: (0, o.w5)(() => [(0, o.Uk)((0, m.toDisplayString)(e.i18n("欢迎使用您的账户")), 1)]),
            default: (0, o.w5)(() => [(0, o._)("div", te, [(0, o.Wm)(y, {
              model: t,
              rules: r,
              class: "flex-1 overflow-hidden",
              "is-scroll": false,
              "submit-btn-attrs": f
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(p, {
                path: "email"
              }, {
                default: (0, o.w5)(() => [(0, o.Wm)(u, (0, o.dG)({
                  ref_key: "$inputEmail",
                  ref: h,
                  value: t.email.value,
                  "onUpdate:value": i[0] ||= e => t.email.value = e
                }, t.email.props, {
                  trim: true,
                  onFocus: S
                }), null, 16, ["value"])]),
                _: 1
              }), (0, o.wy)((0, o._)("div", {
                ref_key: "$historyCard",
                ref: g,
                class: "history-users-card absolute z-20 mt-[-14px] max-h-[152px] w-full rounded-[8px] border border-color-m2 border-opacity-[0.08] bg-color-b3 p-[4px]"
              }, [((0, o.wg)(true), (0, o.iD)(o.HY, null, (0, o.Ko)((0, a.SU)(w), e => {
                (0, o.wg)();
                return (0, o.iD)("section", {
                  key: e.email,
                  class: "history-user-item group flex h-[36px] items-center justify-between rounded-[4px] px-[8px] hover:bg-color-white dark:hover:bg-opacity-20",
                  onClick: (0, n.withModifiers)(r => {
                    n = e.email;
                    t.email.value = n;
                    v.value = false;
                    x();
                    return;
                    var n;
                  }, ["stop"])
                }, [(0, o._)("div", ne, [(0, o._)("span", oe, (0, m.toDisplayString)(e.email), 1), e.aiPro ? ((0, o.wg)(), (0, o.iD)("img", ae)) : (0, o.kq)("", true)]), (0, o._)("button", {
                  tabindex: "-1",
                  type: "button",
                  class: "hidden p-[2px] group-hover:block",
                  onClick: (0, n.withModifiers)(t => {
                    r = e.email;
                    s.removeUserHistory(r);
                    b.value = s.getUserHistory();
                    h.value.focus();
                    return;
                    var r;
                  }, ["stop"])
                }, ce, 8, ie)], 8, re);
              }), 128))], 512), [[n.vShow, (0, a.SU)(_) && (0, a.SU)(w).length > 0]]), (0, o.Wm)(p, {
                path: "password"
              }, {
                default: (0, o.w5)(() => [(0, o.Wm)(u, (0, o.dG)({
                  ref_key: "$passwordInput",
                  ref: c,
                  value: t.password.value,
                  "onUpdate:value": i[1] ||= e => t.password.value = e
                }, t.password.props), null, 16, ["value"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["model"]), (0, o._)("button", {
              type: "button",
              class: "mt-[12px] flex-shrink-0 font-ali-55 text-[14px] text-color-t3",
              onClick: i[2] ||= e => l.value = "find_password"
            }, (0, m.toDisplayString)(e.i18n("忘记密码？")), 1)])]),
            footer: (0, o.w5)(() => [(0, o.wy)((0, o._)("div", se, [(0, o._)("span", le, (0, m.toDisplayString)(e.i18n("还没账号？")), 1), (0, o.Wm)(O, {
              size: "small",
              plain: "",
              onClick: i[3] ||= e => l.value = "register"
            }, {
              default: (0, o.w5)(() => [(0, o.Uk)((0, m.toDisplayString)(e.i18n("马上注册")), 1)]),
              _: 1
            })], 512), [[n.vShow, !(0, a.SU)(d.PA)]])]),
            _: 1
          });
        };
      }
    });
    const fe = (0, q.Z)(ue, [["__scopeId", "data-v-1a7e4860"]]);
    const de = ["innerHTML"];
    const he = ["src"];
    const pe = (0, o.aZ)({
      __name: "send-verify-code",
      props: {
        email: null,
        type: null
      },
      emits: ["update:email", "success"],
      setup(e, t) {
        let {
          expose: r,
          emit: n
        } = t;
        const i = e;
        const c = (0, a.Fl)({
          get: () => i.email,
          set(e) {
            n("update:email", e);
          }
        });
        const s = (0, a.iH)(Date.now());
        const l = (0, a.iH)();
        let u = "";
        const f = (0, a.Fl)(() => `${d.H}verify/image?i-branch=zh&type=${i.type}&t=${s.value}`);
        const h = async () => {
          const [e, t] = await (0, G.Jd)();
          if (!e) {
            l.value = t.svg;
            u = t.token;
          }
        };
        (0, o.bv)(() => {
          if (d.s$) {
            h();
          }
        });
        const p = async () => {
          var e;
          s.value = Date.now();
          if ((e = v.value) !== null && e !== undefined) {
            e.stopValidate();
          }
          g.verifyCode.value = "";
          if (d.s$) {
            h();
          }
        };
        const g = (0, a.qj)({
          email: {
            value: "",
            props: {
              placeholder: i18n("邮箱")
            }
          },
          verifyCode: {
            value: "",
            props: {
              placeholder: i18n("图片验证码"),
              rawAttrs: {
                maxlength: 4
              }
            }
          }
        });
        const y = {
          email: Q,
          verifyCode: [{
            validator: e => e.trim() !== "",
            message: i18n("验证码不能为空"),
            trigger: "blur"
          }]
        };
        const v = (0, a.iH)();
        const b = {
          text: i18n("发送"),
          size: "block",
          async handler() {
            let e;
            e = d.s$ ? await (0, G.Zd)({
              email: c.value,
              type: i.type,
              imgCode: g.verifyCode.value,
              token: u
            }) : await (0, G.Cz)({
              email: c.value,
              type: i.type,
              imgCode: g.verifyCode.value
            });
            const [t] = e;
            var r;
            if (t) {
              if ((r = v.value) !== null && r !== undefined) {
                r.setErrorMsg(t);
              }
            } else {
              n("success");
            }
          }
        };
        r({
          handleChangeVerifyCode: p
        });
        return (e, t) => {
          const r = C.Z;
          const n = E.Z;
          const i = A.Z;
          (0, o.wg)();
          return (0, o.j4)(Y, {
            class: "send-verify-code"
          }, {
            title: (0, o.w5)(() => [(0, o.WI)(e.$slots, "title")]),
            default: (0, o.w5)(() => [(0, o.Wm)(i, {
              model: g,
              rules: y,
              "submit-btn-attrs": b
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(n, {
                path: "email"
              }, {
                default: (0, o.w5)(() => [(0, o.Wm)(r, (0, o.dG)({
                  value: (0, a.SU)(c),
                  "onUpdate:value": t[0] ||= e => (0, a.dq)(c) ? c.value = e : null,
                  trim: true
                }, g.email.props), null, 16, ["value"])]),
                _: 1
              }), (0, o.Wm)(n, {
                path: "verifyCode"
              }, {
                default: (0, o.w5)(() => [(0, o.Wm)(r, (0, o.dG)({
                  ref_key: "$verifyCodeInput",
                  ref: v
                }, g.verifyCode.props, {
                  value: g.verifyCode.value,
                  "onUpdate:value": t[1] ||= e => g.verifyCode.value = e
                }), {
                  "outer-right": (0, o.w5)(() => [(0, o._)("div", {
                    class: "h-[44px] w-[100px] cursor-pointer rounded-[8px] bg-color-m2 bg-opacity-10 dark:bg-opacity-20",
                    onClick: p
                  }, [(0, a.SU)(d.s$) ? ((0, o.wg)(), (0, o.iD)("div", {
                    key: 0,
                    class: "svg-box h-full w-full invert-[1]",
                    innerHTML: l.value
                  }, null, 8, de)) : ((0, o.wg)(), (0, o.iD)("img", {
                    key: 1,
                    src: (0, a.SU)(f),
                    class: "h-full invert-[1]"
                  }, null, 8, he))])]),
                  _: 1
                }, 16, ["value"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["model"])]),
            _: 3
          });
        };
      }
    });
    const ge = {
      class: "block text-center font-ali-55 text-[14px] text-color-t3"
    };
    const ye = {
      class: "relative mt-[20px] flex flex-col justify-center"
    };
    const ve = ["placeholder"];
    const be = (0, o.aZ)({
      __name: "verify-code-input",
      props: {
        verifyCode: null,
        showVerify: null,
        email: null,
        type: null
      },
      emits: ["update:verifyCode", "success", "back", "back-login"],
      setup(e, t) {
        let {
          emit: r
        } = t;
        const i = e;
        const c = (0, a.iH)();
        (0, o.bv)(() => {
          var e;
          if ((e = c.value) !== null && e !== undefined) {
            e.focus();
          }
        });
        (0, o.YP)(() => i.showVerify, () => {
          setTimeout(() => {
            var e;
            if ((e = c.value) === null || e === undefined) {
              return undefined;
            } else {
              return e.focus();
            }
          });
        });
        const s = (0, a.iH)("");
        const l = (0, a.iH)("");
        const u = async e => {
          var t;
          var n;
          const o = (t = e.clipboardData) === null || t === undefined || (n = t.getData) === null || n === undefined ? undefined : n.call(t, "text");
          if (o) {
            if (o.trim().length === 6) {
              const [e] = await (0, G.lm)({
                email: i.email,
                type: i.type,
                emailCode: s.value
              });
              if (e && e.includes("AbortError")) {
                return;
              }
              if (e) {
                l.value = e;
                return;
              }
              l.value = "";
              r("update:verifyCode", s.value);
              r("success");
            }
          }
          e.preventDefault();
        };
        const f = async () => {
          if (s.value.length === 6) {
            const [e] = await (0, G.lm)({
              email: i.email,
              type: i.type,
              emailCode: s.value
            });
            if (e) {
              l.value = e;
              return;
            }
            l.value = "";
            r("update:verifyCode", s.value);
            r("success");
          }
        };
        const d = () => {
          r("back");
        };
        const h = () => {
          r("back-login");
        };
        return (e, t) => {
          (0, o.wg)();
          return (0, o.j4)(Y, {
            class: "verify-code-input",
            onBackLogin: h
          }, {
            title: (0, o.w5)(() => [(0, o.WI)(e.$slots, "title")]),
            default: (0, o.w5)(() => [(0, o._)("span", ge, (0, m.toDisplayString)(e.i18n("邮箱验证码已发送到")) + (0, m.toDisplayString)(i.email), 1), (0, o._)("div", ye, [(0, o._)("div", {
              class: (0, m.normalizeClass)(["h-[44px] w-full flex-shrink-0 rounded-[8px] bg-color-m2 bg-opacity-[0.06] px-[12px]", [{
                "border-[1px] !border-color-red": l.value
              }]])
            }, [(0, o.wy)((0, o._)("input", {
              ref: e => {
                if (e) {
                  c.value = e;
                }
              },
              "onUpdate:modelValue": t[0] ||= e => s.value = e,
              type: "text",
              placeholder: e.i18n("请输入邮箱验证码"),
              class: (0, m.normalizeClass)(["h-full w-full bg-[transparent] text-[14px] text-color-t1", [{
                "!text-color-red": l.value
              }]]),
              maxlength: "6",
              onPaste: u,
              onInput: f
            }, null, 42, ve), [[n.vModelText, s.value]])], 2), (0, o._)("span", {
              class: (0, m.normalizeClass)(["absolute top-full mt-[5px] block font-ali-55 text-[12px] text-color-red opacity-0", [{
                "opacity-100": l.value
              }]])
            }, (0, m.toDisplayString)(l.value), 3)]), (0, o._)("button", {
              type: "button",
              class: "mx-auto mt-[40px] overflow-hidden text-[14px] text-color-blue",
              onClick: d
            }, (0, m.toDisplayString)(e.i18n("重新发送")), 1)]),
            _: 3
          });
        };
      }
    });
    const me = (0, o.aZ)({
      __name: "password-input",
      props: {
        email: null,
        emailCode: null,
        type: null
      },
      setup(e) {
        const t = e;
        const r = (0, a.qj)({
          password: {
            value: "",
            props: {
              type: "password",
              placeholder: i18n("密码"),
              rawAttrs: {
                maxlength: 16
              }
            }
          }
        });
        const n = {
          password: V
        };
        const c = (0, a.iH)();
        const s = {
          register: G.z2,
          find_password: G.LI
        };
        const l = (0, i.useUserStore)();
        const {
          userDialogType: u
        } = (0, p.Jk)(l);
        const f = {
          text: i18n("完成"),
          size: "block",
          async handler() {
            const e = {
              email: t.email,
              password: J()(r.password.value),
              emailCode: t.emailCode
            };
            if (t.type === "register") {
              e.nickname = t.email;
            }
            const [n, o] = await s[t.type](e);
            var a;
            if (n) {
              if ((a = c.value) !== null && a !== undefined) {
                a.setErrorMsg(n);
              }
            } else {
              X.R.success({
                message: i18n("登录成功")
              });
              u.value = "login";
              await l.setLoginSuccess(o);
            }
          }
        };
        return (e, t) => {
          const a = C.Z;
          const i = E.Z;
          const s = A.Z;
          (0, o.wg)();
          return (0, o.j4)(Y, {
            class: "password-input"
          }, {
            title: (0, o.w5)(() => [(0, o.WI)(e.$slots, "title")]),
            default: (0, o.w5)(() => [(0, o.Wm)(s, {
              model: r,
              rules: n,
              "submit-btn-attrs": f
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(i, {
                path: "password"
              }, {
                default: (0, o.w5)(() => [(0, o.Wm)(a, (0, o.dG)({
                  ref_key: "$passwordInput",
                  ref: c,
                  value: r.password.value,
                  "onUpdate:value": t[0] ||= e => r.password.value = e
                }, r.password.props), null, 16, ["value"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["model"])]),
            _: 3
          });
        };
      }
    });
    const we = (0, o.aZ)({
      __name: "register",
      setup(e) {
        const t = (0, a.iH)(null);
        const r = (0, a.iH)(i18n("欢迎注册 Wetab"));
        const n = (0, a.iH)("");
        const i = (0, a.iH)("");
        const c = (0, a.iH)("register");
        const s = (0, a.iH)(0);
        const l = () => {
          c.value = "register-verifycode";
          s.value = Date.now();
        };
        const u = () => {
          c.value = "register-password";
        };
        const f = () => {
          t.value.handleChangeVerifyCode();
          c.value = "register";
        };
        const d = () => {
          t.value.handleChangeVerifyCode();
          c.value = "register";
        };
        return (e, a) => {
          const h = _;
          const p = v;
          (0, o.wg)();
          return (0, o.j4)(p, {
            variable: c.value
          }, {
            default: (0, o.w5)(() => [(0, o.Wm)(h, {
              value: "register"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(pe, {
                ref_key: "$sendCode",
                ref: t,
                email: n.value,
                "onUpdate:email": a[0] ||= e => n.value = e,
                type: "register",
                "is-back": "",
                onSuccess: l
              }, {
                title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(r.value), 1)]),
                _: 1
              }, 8, ["email"])]),
              _: 1
            }), (0, o.Wm)(h, {
              value: "register-verifycode"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(be, {
                verifyCode: i.value,
                "onUpdate:verifyCode": a[1] ||= e => i.value = e,
                "show-verify": s.value,
                email: n.value,
                type: "register",
                onBack: f,
                onBackLogin: d,
                onSuccess: u
              }, {
                title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(r.value), 1)]),
                _: 1
              }, 8, ["verifyCode", "show-verify", "email"])]),
              _: 1
            }), (0, o.Wm)(h, {
              value: "register-password"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(me, {
                email: n.value,
                "email-code": i.value,
                type: "register"
              }, {
                title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(r.value), 1)]),
                _: 1
              }, 8, ["email", "email-code"])]),
              _: 1
            })]),
            _: 1
          }, 8, ["variable"]);
        };
      }
    });
    const _e = (0, o.aZ)({
      __name: "forget-password",
      setup(e) {
        const t = (0, a.iH)(null);
        const r = (0, a.iH)("");
        const n = (0, a.iH)("");
        const i = (0, a.iH)("find_password");
        const c = (0, a.iH)(0);
        const s = () => {
          i.value = "find_password-verifycode";
          c.value = Date.now();
        };
        const l = () => {
          i.value = "find_password-password";
        };
        const u = () => {
          t.value.handleChangeVerifyCode();
          i.value = "find_password";
        };
        const f = () => {
          alert("修改成功！");
        };
        return (e, a) => {
          const d = _;
          const h = v;
          (0, o.wg)();
          return (0, o.j4)(h, {
            variable: i.value
          }, {
            default: (0, o.w5)(() => [(0, o.Wm)(d, {
              value: "find_password"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(pe, {
                ref_key: "$sendCode",
                ref: t,
                email: r.value,
                "onUpdate:email": a[0] ||= e => r.value = e,
                type: "find_password",
                "is-back": "",
                onSuccess: s
              }, {
                title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(e.i18n("忘记密码")), 1)]),
                _: 1
              }, 8, ["email"])]),
              _: 1
            }), (0, o.Wm)(d, {
              value: "find_password-verifycode"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(be, {
                verifyCode: n.value,
                "onUpdate:verifyCode": a[1] ||= e => n.value = e,
                "show-verify": c.value,
                email: r.value,
                type: "find_password",
                onBack: u,
                onSuccess: l
              }, {
                title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(e.i18n("忘记密码")), 1)]),
                _: 1
              }, 8, ["verifyCode", "show-verify", "email"])]),
              _: 1
            }), (0, o.Wm)(d, {
              value: "find_password-password"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(me, {
                email: r.value,
                "email-code": n.value,
                type: "find_password",
                onSuccess: f
              }, {
                title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(e.i18n("忘记密码")), 1)]),
                _: 1
              }, 8, ["email", "email-code"])]),
              _: 1
            })]),
            _: 1
          }, 8, ["variable"]);
        };
      }
    });
    const ke = (0, o.aZ)({
      __name: "login-items",
      setup(e) {
        const t = (0, i.useUserStore)();
        const {
          userDialogType: r
        } = (0, p.Jk)(t);
        return (e, t) => {
          const n = _;
          const i = v;
          (0, o.wg)();
          return (0, o.j4)(i, {
            class: "hi-scroll mb:bg-color-white",
            variable: (0, a.SU)(r)
          }, {
            default: (0, o.w5)(() => [(0, o.Wm)(n, {
              value: "login"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(fe)]),
              _: 1
            }), (0, o.Wm)(n, {
              value: "register"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(we)]),
              _: 1
            }), (0, o.Wm)(n, {
              value: "find_password"
            }, {
              default: (0, o.w5)(() => [(0, o.Wm)(_e)]),
              _: 1
            })]),
            _: 1
          }, 8, ["variable"]);
        };
      }
    });
    const Ae = [(0, o._)("i", {
      class: "iconfont icon-close_window_icon text-[12px] text-color-white opacity-100"
    }, null, -1)];
    const Ee = (0, o.aZ)({
      __name: "login-dialog",
      setup(e) {
        const t = (0, i.useUserStore)();
        const {
          loginShow: r,
          userDialogType: n
        } = (0, p.Jk)(t);
        return (e, n) => {
          const i = h.Z;
          (0, o.wg)();
          return (0, o.j4)(i, {
            show: (0, a.SU)(r),
            "onUpdate:show": n[1] ||= e => (0, a.dq)(r) ? r.value = e : null,
            class: "bg-color-b3",
            "full-screen": "",
            width: 400,
            height: 551,
            closeble: false
          }, {
            default: (0, o.w5)(() => [(0, o._)("div", {
              class: "group absolute left-[20px] top-[20px] z-10 flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#FF7330]",
              onClick: n[0] ||= e => (0, a.SU)(t).changeLoginShow(false)
            }, Ae), (0, o.Wm)(ke)]),
            _: 1
          }, 8, ["show"]);
        };
      }
    });
    var Ce = r(9417);
    const xe = {
      class: "flex flex-col items-center"
    };
    const Se = {
      class: "mt-[24px] text-[14px] font-[500] leading-[20px] text-[#1C1C1E]"
    };
    const Oe = ["src"];
    const Be = {
      key: 1,
      class: "mt-[12px] text-[12px] font-[400] leading-[16px] text-[#3A3A3C]"
    };
    const je = (0, o._)("div", {
      class: "mt-[7.5px] mb-[8.5px] h-0 w-[312px] border-t border-dashed border-color-black border-opacity-[0.08]"
    }, null, -1);
    const De = {
      class: "mb-[24px] flex items-center"
    };
    const Fe = {
      class: "text-[14px] font-[500] text-[#1C1C1E]"
    };
    const Pe = [(0, o._)("span", {
      class: "text-[18px] font-[600] text-[#fff] opacity-60"
    }, "×", -1)];
    const Me = (0, o.aZ)({
      __name: "compliance",
      setup(e) {
        const t = (0, Ce.n)();
        return (e, r) => {
          const n = h.Z;
          (0, o.wg)();
          return (0, o.j4)(n, {
            show: (0, a.SU)(t).contactShow,
            class: "overflow-visible !bg-[#fff]",
            width: 360,
            closeble: false
          }, {
            default: (0, o.w5)(() => [(0, o._)("div", xe, [(0, o._)("h1", Se, (0, m.toDisplayString)((0, a.SU)(t).chatInfo.contactTitle), 1), (0, a.SU)(t).chatInfo.contactQrcode ? ((0, o.wg)(), (0, o.iD)("img", {
              key: 0,
              class: "mt-[28px] h-[100px] w-[100px]",
              draggable: "false",
              src: (0, a.SU)(t).chatInfo.contactQrcode
            }, null, 8, Oe)) : (0, o.kq)("", true), (0, a.SU)(t).chatInfo.contactDesc ? ((0, o.wg)(), (0, o.iD)("p", Be, (0, m.toDisplayString)((0, a.SU)(t).chatInfo.contactDesc), 1)) : (0, o.kq)("", true), je, (0, o._)("div", De, [(0, o._)("span", Fe, (0, m.toDisplayString)((0, a.SU)(t).chatInfo.contactQrcode ? e.i18n("huo4a7185") : "") + "Email：" + (0, m.toDisplayString)((0, a.SU)(t).chatInfo.contactEmail), 1), (0, o._)("i", {
              class: "iconfont icon-copy ml-[12px] cursor-pointer text-[16px] text-[#3A3A3C]",
              onClick: r[0] ||= e => {
                r = (0, a.SU)(t).chatInfo.contactEmail;
                navigator.clipboard.writeText(r).then(() => {
                  X.R.success({
                    message: i18n("yi34fb42")
                  });
                });
                return;
                var r;
              }
            })])]), (0, o._)("button", {
              class: "absolute -bottom-[58px] left-1/2 flex h-[32px] w-[32px] -translate-x-1/2 items-center justify-center rounded-full border-[2px] border-[#fff] border-opacity-60",
              onClick: r[1] ||= e => (0, a.SU)(t).setContactShow(false)
            }, Pe)]),
            _: 1
          }, 8, ["show"]);
        };
      }
    });
    const Te = (0, o.aZ)({
      __name: "chat-iframe",
      setup(e) {
        const t = (0, Ce.n)();
        const n = (0, i.useUserStore)();
        (0, o.bv)(async () => {
          await Promise.all([r.e(942), r.e(652), r.e(172), r.e(533), r.e(198)]).then(r.bind(r, 6215));
          const {
            useChatGptStore: e
          } = await Promise.all([r.e(652), r.e(172)]).then(r.bind(r, 1172));
          const a = e();
          (0, s.o)(a.activeTheme);
          if (window.iframeAiInitData) {
            if (window.iframeAiInitData.authToken) {
              n.setLoginSuccess((0, c.LP)(n, window.iframeAiInitData.authToken, window.iframeAiInitData.userName));
            } else {
              n.loginOut(false);
            }
            a.setModal(true);
          }
          window.addEventListener("message", e => {
            const {
              baseAiInfo: t,
              type: r,
              authToken: o,
              logoutWithClear: i
            } = e.data;
            if (r === c.o1.openAiModal && t) {
              if (t.authToken) {
                n.setLoginSuccess((0, c.LP)(n, t.authToken, t.userName));
              } else {
                n.loginOut(false);
              }
              if (!a.uploadDocLoading) {
                a.setUploadModal(false);
              }
              a.setModal(true);
              a.setSelectModel();
            } else if (r === c.o1.authToken && o) {
              n.setLoginSuccess((0, c.LP)(n, o));
            } else if (r === c.o1.logout) {
              a.resetPage();
              n.loginOut(!!i);
            } else if (r === c.o1.updateIframeData) {
              window.iframeAiInitData = {
                ...window.iframeAiInitData,
                ...t
              };
            }
          });
          const i = () => {
            if (u()(a.overLimit).add(1, "day").get("date") <= u()().get("date")) {
              a.setOverLimit(0);
            }
          };
          i();
          f.i.subscribe("EVERY_DAY", i);
          (0, o.YP)(() => a.activeTheme, e => {
            (0, s.o)(e);
          });
          (0, o.YP)(() => n.isLogin, e => {
            if (e) {
              a.reqConversionList();
              a.reqAssistantList();
            } else {
              a.resetPage();
            }
          });
          (0, o.YP)(() => n.isLogin, e => {
            if (e) {
              t.getChatCompliance();
            }
          }, {
            immediate: true
          });
          const {
            useModal: l
          } = await Promise.all([r.e(652), r.e(172), r.e(533), r.e(371)]).then(r.bind(r, 137));
          const {
            clickWidget: d
          } = l();
          d();
        });
        return (e, t) => {
          (0, o.wg)();
          return (0, o.iD)(o.HY, null, [(0, a.SU)(d.PA) ? ((0, o.wg)(), (0, o.j4)(Ee, {
            key: 0
          })) : (0, o.kq)("", true), (0, o.Wm)(Me)], 64);
        };
      }
    });
    var Ie = r(2607);
    var Le = r.n(Ie);
    var Ze = r(1363);
    var Ue = r.n(Ze);
    var Re = r(4038);
    var ze = r.n(Re);
    var He = r(5008);
    r(1798);
    r(7334);
    var Ne = r(6155);
    r(6790);
    var We = r(4955);
    r(7353);
    var $e = r(2371);
    r(6133);
    var qe = r(8437);
    r(2325);
    var Ye = r(7982);
    var Qe = r(3603);
    var Ve = r(6755);
    (0, Qe.J$)({
      globalFont: "system-ui"
    });
    (0, Qe.Dc)({
      theme: "light"
    });
    u().extend(Le());
    u().extend(Ue());
    if (d.sM) {
      u().locale(ze());
    }
    const Ge = (0, n.createApp)(Te);
    Ge.use(Ve.M);
    (e => {
      e.use(Ne.Z).use(We.Z).use($e.Z).use(qe.Z).use(Ye.Z);
    })(Ge);
    (0, He.f)(Ge);
    Ge.mount("#app");
  },
  8514: (e, t, r) => {
    "use strict";

    r.d(t, {
      V: () => o,
      o: () => n
    });
    const n = e => {
      document.body.classList.remove("chat-default", "chat-purple", "chat-white");
      document.body.classList.add(e);
    };
    class o extends Error {}
  },
  5029: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => w
    });
    var n = r(9282);
    var o = r(5395);
    var a = r(7268);
    var i = r(9445);
    var c = r(4209);
    var s = r(3446);
    const l = (0, a.aZ)({
      __name: "hi-popup",
      props: {
        show: {
          type: Boolean
        },
        ani: {
          default: "scale"
        },
        closeble: {
          type: Boolean,
          default: true
        },
        keepAlive: {
          type: Boolean,
          default: false
        },
        maskOpacity: {
          default: 60
        }
      },
      emits: ["update:show", "click"],
      setup(e, t) {
        let {
          emit: r
        } = t;
        const l = e;
        const u = (0, a.Fl)({
          get: () => l.show,
          set(e) {
            r("update:show", e);
          }
        });
        const f = (0, i.iH)(0);
        const d = (0, i.iH)(0);
        const h = (0, i.iH)(true);
        (0, a.YP)(u, e => {
          if (e) {
            f.value = (0, s.K)();
            d.value = (0, s.K)();
          }
        });
        (0, a.JJ)("changeShow", e => {
          u.value = e;
        });
        const p = () => {
          if (l.closeble) {
            u.value = false;
          }
        };
        return (t, s) => {
          const g = o.Z;
          const y = n.Z;
          (0, a.wg)();
          return (0, a.iD)(a.HY, null, [((0, a.wg)(), (0, a.j4)(a.lR, {
            to: "body"
          }, [(0, a.Wm)(g, {
            show: (0, i.SU)(u),
            opacity: l.maskOpacity,
            "z-index": f.value,
            onClick: p
          }, null, 8, ["show", "opacity", "z-index"])])), (0, a.Wm)(y, {
            show: (0, i.SU)(u),
            ani: e.ani,
            teleport: "body",
            class: (0, c.normalizeClass)(["hi-popup absolute", t.$attrs.class]),
            style: (0, c.normalizeStyle)({
              zIndex: d.value
            }),
            onBeforeEnter: s[0] ||= e => h.value = true,
            onAfterLeave: s[1] ||= e => h.value = false,
            onClick: s[2] ||= e => r("click")
          }, {
            default: (0, a.w5)(() => [e.keepAlive || h.value ? (0, a.WI)(t.$slots, "default", {
              key: 0
            }) : (0, a.kq)("", true)]),
            _: 3
          }, 8, ["show", "ani", "class", "style"])], 64);
        };
      }
    });
    var u = r(1585);
    const f = {};
    const d = e => {
      if (f[e]) {
        delete f[e];
      }
    };
    window.addEventListener("resize", () => {
      Object.values(f).forEach(e => {
        e(window.innerWidth, window.innerHeight);
      });
    });
    var h = r(9857);
    const p = function (e, t) {
      var r;
      if (typeof t != "function") {
        throw new TypeError("Expected a function");
      }
      e = (0, h.Z)(e);
      return function () {
        if (--e > 0) {
          r = t.apply(this, arguments);
        }
        if (e <= 1) {
          t = undefined;
        }
        return r;
      };
    };
    const g = function (e) {
      return p(2, e);
    };
    var y = r(6223);
    var v = 0;
    const b = function (e) {
      var t = ++v;
      return (0, y.Z)(e) + t;
    };
    const m = (0, a.aZ)({
      inheritAttrs: false
    });
    const w = (0, a.aZ)({
      ...m,
      __name: "hi-dialog",
      props: {
        show: {
          type: Boolean
        },
        fullScreen: {
          type: Boolean
        },
        width: {
          default: 300
        },
        height: {
          default: 0
        },
        closeble: {
          type: Boolean,
          default: true
        }
      },
      emits: ["update:show"],
      setup(e, t) {
        let {
          emit: r
        } = t;
        const n = e;
        const o = (0, a.Fl)({
          get: () => n.show,
          set(e) {
            r("update:show", e);
          }
        });
        const s = (0, i.iH)("default");
        const h = (0, i.iH)();
        const p = (0, a.Fl)(() => s.value === "fullScreen");
        let y;
        const v = g(() => {
          y = h.value?.offsetHeight || 0;
        });
        const m = g(function (e, t, r = false) {
          (0, a.Ah)(() => {
            d(e);
          });
          return () => {
            if (r) {
              t(window.innerWidth, window.innerHeight);
            }
            f[e] = t;
          };
        }(b("hi-dialog"), (e, t) => {
          v();
          if (n.fullScreen && e < u.qf) {
            s.value = "fullScreen";
          } else {
            s.value = y > t ? "fullHeight" : "default";
          }
        }, true));
        (0, a.YP)(o, e => {
          if (e) {
            (0, a.Y3)(m);
          }
        });
        return (e, t) => {
          const r = l;
          (0, a.wg)();
          return (0, a.j4)(r, {
            show: (0, i.SU)(o),
            "onUpdate:show": t[0] ||= e => (0, i.dq)(o) ? o.value = e : null,
            closeble: n.closeble,
            ani: (0, i.SU)(p) ? "slide-right" : "dialog-scale",
            class: "hi-dialog pointer-events-none inset-0 flex items-center"
          }, {
            default: (0, a.w5)(() => [(0, a._)("div", {
              class: (0, c.normalizeClass)(["w-full flex-1", [{
                "px-[20px]": !(0, i.SU)(p)
              }, {
                "max-h-[calc(100vh-40px)]": s.value === "default"
              }]]),
              style: (0, c.normalizeStyle)({
                height: s.value === "default" ? n.height ? n.height + "px" : "auto" : "100%"
              })
            }, [(0, a._)("div", {
              ref_key: "$dialogMain",
              ref: h,
              class: (0, c.normalizeClass)(["pointer-events-auto relative mx-auto h-full overflow-hidden bg-color-b3 shadow-dialog dark:bg-color-b5", [{
                "rounded-[12px]": !(0, i.SU)(p)
              }, e.$attrs.class]]),
              style: (0, c.normalizeStyle)((0, i.SU)(p) ? {} : {
                maxWidth: n.width + "px"
              })
            }, [(0, a.WI)(e.$slots, "default")], 6)], 6)]),
            _: 3
          }, 8, ["show", "closeble", "ani"]);
        };
      }
    });
  },
  581: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => i
    });
    var n = r(7268);
    var o = r(9445);
    const a = {
      class: "hi-form-item mb-[18px]"
    };
    const i = (0, n.aZ)({
      __name: "hi-form-item",
      props: {
        path: null,
        validators: null
      },
      emits: ["on-validate"],
      setup(e, t) {
        let {
          expose: r,
          emit: i
        } = t;
        const c = e;
        const s = (0, n.Rr)();
        const l = (0, n.Fl)(() => {
          var e;
          return ((e = s.default) === null || e === undefined ? undefined : e.call(s)) || [];
        });
        const u = (0, o.iH)();
        r({
          $hiInput: u
        });
        const f = e => {
          i("on-validate", e);
        };
        return (e, t) => {
          (0, n.wg)();
          return (0, n.iD)("div", a, [((0, n.wg)(true), (0, n.iD)(n.HY, null, (0, n.Ko)((0, o.SU)(l), (e, t) => {
            (0, n.wg)();
            return (0, n.j4)((0, n.LL)(e), {
              ref_for: true,
              ref: e => {
                if (e) {
                  u.value = e;
                }
              },
              key: t,
              validators: c.validators,
              onOnValidate: f
            }, null, 40, ["validators"]);
          }), 128))]);
        };
      }
    });
  },
  3218: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => f
    });
    var n = r(5427);
    var o = r(7268);
    var a = r(4209);
    var i = r(9445);
    var c = r(8398);
    const s = {
      class: "hi-form flex h-full flex-col"
    };
    const l = {
      class: "hi-scroll h-full"
    };
    const u = {
      class: "item-center flex flex-shrink-0 justify-between"
    };
    const f = (0, o.aZ)({
      __name: "hi-form",
      props: {
        model: null,
        rules: {
          default: undefined
        },
        submitBtnAttrs: {
          default: undefined
        },
        contentClass: {
          default: ""
        }
      },
      setup(e) {
        const r = e;
        const {
          appContext: f
        } = (0, o.FN)();
        const d = f.config.globalProperties.getSlots();
        const h = (0, i.iH)([]);
        const p = (0, i.iH)(r.submitBtnAttrs?.type || "primary");
        const g = (0, i.iH)(true);
        const y = (0, i.iH)(false);
        const v = async e => {
          await (0, o.Y3)();
          g.value = !!e || !h.value.every(e => {
            var t;
            return e == null || !e.$hiInput || e != null && (t = e.$hiInput) !== null && t !== undefined && !!t.getValidatorResult();
          });
        };
        (0, o.bv)(() => {
          v(false);
        });
        const b = () => {
          var e;
          var t;
          h.value.some(e => {
            var t;
            return (t = e.$hiInput) !== null && t !== undefined && !!t.checkInputIsError();
          });
          if (!g.value) {
            y.value = true;
            if ((e = r.submitBtnAttrs) !== null && e !== undefined && (t = e.handler) !== null && t !== undefined) {
              t.call(e).finally(() => {
                y.value = false;
              });
            }
          }
        };
        return (t, f) => {
          const m = n.Z;
          (0, o.wg)();
          return (0, o.iD)("div", s, [(0, o._)("div", {
            class: (0, a.normalizeClass)([r.contentClass, "overflow-hidden pb-[25px]"])
          }, [(0, o._)("div", l, [((0, o.wg)(true), (0, o.iD)(o.HY, null, (0, o.Ko)((0, i.SU)(d), (e, t) => {
            (0, o.wg)();
            return (0, o.j4)((0, o.LL)(e), {
              key: e.props.path,
              ref_for: true,
              ref: e => {
                if (e) {
                  h.value[t] = e;
                }
              },
              validators: r.rules?.[e.props.path],
              onOnValidate: v,
              onKeypress: (0, c.withKeys)(b, ["enter"])
            }, null, 40, ["validators", "onKeypress"]);
          }), 128)), (0, o.WI)(t.$slots, "form-after")])], 2), (0, o._)("div", u, [(0, o.WI)(t.$slots, "form-btn"), (0, o.Wm)(m, (0, o.dG)(e.submitBtnAttrs, {
            type: p.value,
            disabled: g.value,
            loading: y.value,
            onClick: b
          }), {
            default: (0, o.w5)(() => {
              return [(0, o.Uk)((0, a.toDisplayString)(r.submitBtnAttrs?.text || t.i18n("提交")), 1)];
            }),
            _: 1
          }, 16, ["type", "disabled", "loading"])])]);
        };
      }
    });
  },
  8294: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => b
    });
    var n = r(9282);
    var o = r(7268);
    var a = r(4209);
    var i = r(9445);
    const c = function (e, t, r) {
      if (typeof e != "function") {
        throw new TypeError("Expected a function");
      }
      return setTimeout(function () {
        e.apply(undefined, r);
      }, t);
    };
    var s = r(4828);
    var l = r(1774);
    const u = (0, s.Z)(function (e, t, r) {
      return c(e, (0, l.Z)(t) || 0, r);
    });
    class f {
      static isRegSuccess(e, t) {
        return !t || t.test(e);
      }
      static isValidatorSuccess(e, t) {
        return !t || t(e);
      }
      static isSuccess(e, t) {
        return f.isRegSuccess(e, t.rule) && f.isValidatorSuccess(e, t.validator);
      }
    }
    const d = {
      class: "hi-input relative flex items-center"
    };
    const h = {
      class: "relative h-full flex-1"
    };
    const p = {
      key: 0,
      class: "pointer-events-none absolute left-[10px] top-[12px]"
    };
    const g = {
      class: "h-full"
    };
    const y = {
      key: 0,
      class: "h-full flex-shrink-0 p-[2px]"
    };
    const v = {
      key: 0,
      class: "ml-[12px] flex-shrink-0"
    };
    const b = (0, o.aZ)({
      __name: "hi-input",
      props: {
        value: null,
        tagName: {
          default: "input"
        },
        type: {
          default: "text"
        },
        icon: {
          default: ""
        },
        placeholder: {
          default: ""
        },
        alwaysShowCloseBtn: {
          type: Boolean,
          default: false
        },
        noClearBtn: {
          type: Boolean,
          default: false
        },
        validators: {
          default: undefined
        },
        rawAttrs: {
          default: undefined
        },
        trim: {
          type: Boolean,
          default: false
        }
      },
      emits: ["update:value", "on-validate", "focus"],
      setup(e, t) {
        let {
          expose: r,
          emit: c
        } = t;
        const s = e;
        const l = (0, o.Rr)();
        const b = (0, i.iH)();
        const m = (0, o.Fl)(() => s.tagName === "textarea");
        const w = (0, i.iH)(false);
        const _ = (0, i.iH)(s.type);
        const k = () => {
          _.value = _.value === "password" ? "text" : "password";
        };
        let A = 0;
        const E = (0, o.Fl)({
          get: () => s.value,
          set(e) {
            w.value = !!e;
            c("update:value", e);
          }
        });
        const C = () => {
          var e;
          if ((e = b.value) !== null && e !== undefined) {
            e.focus();
          }
          E.value = "";
        };
        const x = e => {
          if (S.value) {
            return;
          }
          let {
            value: t
          } = e.target;
          if (s.trim) {
            t = t.trim();
          }
          E.value = t;
          if (s.validators) {
            L(t, "input");
          }
        };
        const S = (0, i.iH)(false);
        const O = () => {
          S.value = true;
        };
        const B = e => {
          S.value = false;
          x(e);
        };
        const j = () => {
          F.value = false;
          P.value = true;
          if (!s.alwaysShowCloseBtn) {
            if (E.value) {
              clearTimeout(A);
              w.value = true;
            } else {
              w.value = false;
            }
            c("focus");
          }
        };
        const D = () => {
          if (!s.alwaysShowCloseBtn) {
            A = u(() => {
              w.value = false;
            }, 150);
            if (s.validators) {
              L(E.value, "blur");
            }
          }
        };
        const F = (0, i.iH)(false);
        const P = (0, i.iH)(false);
        const M = (0, i.iH)("");
        const T = e => {
          M.value = e;
        };
        const I = function (e = E.value, t = "blur") {
          for (const r of s.validators || []) {
            if (!f.isSuccess(e, r) && (r.trigger === t || !r.trigger)) {
              return r.message;
            }
          }
          return "";
        };
        function L(e = E.value, t = "blur") {
          if (!P.value) {
            F.value = false;
            return;
          }
          const r = I(e, t);
          if (r) {
            T(r);
            F.value = true;
          } else {
            F.value = false;
          }
          c("on-validate", !!r);
        }
        (0, o.YP)(M, e => {
          F.value = !!e;
        });
        r({
          stopValidate: () => {
            P.value = false;
          },
          restartValidate: () => {
            P.value = true;
          },
          setErrorMsg: T,
          getErrorMessage: I,
          checkInputIsError: L,
          getValidatorResult: function (e = E.value) {
            return (s.validators || []).every(t => f.isSuccess(e, t));
          },
          focus: () => {
            var e;
            var t;
            if ((e = b.value) !== null && e !== undefined && (t = e.focus) !== null && t !== undefined) {
              t.call(e);
            }
          }
        });
        return (t, r) => {
          const c = n.Z;
          (0, o.wg)();
          return (0, o.iD)("div", d, [(0, o._)("div", {
            class: (0, a.normalizeClass)(["flex flex-1 items-center overflow-hidden rounded-[8px] border-[1px] border-color-m2 border-opacity-[0.06] bg-color-m2 bg-opacity-[0.06] bg-clip-content duration-150", [(0, i.SU)(m) ? "h-[100px]" : "h-[44px]", {
              "!border-color-red !border-opacity-20 !bg-color-red !bg-opacity-10": F.value
            }]])
          }, [(0, o._)("div", h, [s.icon ? ((0, o.wg)(), (0, o.iD)("div", p, [(0, o._)("i", {
            class: (0, a.normalizeClass)(["iconfont text-[20px] text-color-t3 duration-150", [s.icon, {
              "!text-color-red": F.value
            }]])
          }, null, 2)])) : (0, o.kq)("", true), (0, o._)("div", g, [((0, o.wg)(), (0, o.j4)((0, o.LL)((0, i.SU)(m) ? "textarea" : "input"), (0, o.dG)({
            ref_key: "$input",
            ref: b,
            value: (0, i.SU)(E),
            "onUpdate:value": r[0] ||= e => (0, i.dq)(E) ? E.value = e : null,
            autocomplete: "off",
            type: _.value
          }, s.rawAttrs, {
            class: ["hi-scroll h-full w-full bg-[transparent] pr-[40px] text-color-t2 placeholder-color-t3 duration-150", [(0, i.SU)(m) ? "resize-none py-[12px] " : "", s.icon ? "pl-[40px]" : "pl-[12px]", {
              "!text-color-red placeholder-color-red": F.value
            }]],
            placeholder: e.placeholder,
            onInput: x,
            onFocus: j,
            onBlur: D,
            onCompositionstart: O,
            onCompositionend: B
          }), null, 16, ["value", "type", "class", "placeholder"]))]), s.type === "password" ? ((0, o.wg)(), (0, o.iD)("button", {
            key: 1,
            tabindex: "-1",
            type: "button",
            class: "absolute bottom-0 right-0 h-[42px] w-[40px]",
            onClick: k
          }, [(0, o._)("i", {
            class: (0, a.normalizeClass)(["iconfont text-[20px] text-color-t3 duration-150", [_.value === "password" ? "icon-hide_icon" : "icon-appear_icon", {
              "!text-color-red": F.value
            }]])
          }, null, 2)])) : ((0, o.wg)(), (0, o.j4)(c, {
            key: 2,
            show: !e.noClearBtn && w.value,
            ani: "scale",
            class: "absolute bottom-0 right-0 h-[42px] w-[40px]"
          }, {
            default: (0, o.w5)(() => [(0, o._)("button", {
              tabindex: "-1",
              type: "button",
              class: "h-full w-full",
              onClick: C
            }, [(0, o._)("i", {
              class: (0, a.normalizeClass)(["iconfont icon-clear_merge_icon text-[16px] text-color-t2 duration-150", {
                "!text-color-red": F.value
              }])
            }, null, 2)])]),
            _: 1
          }, 8, ["show"]))]), (0, i.SU)(l)["inner-right"] ? ((0, o.wg)(), (0, o.iD)("div", y, [(0, o.WI)(t.$slots, "inner-right")])) : (0, o.kq)("", true)], 2), (0, i.SU)(l)["outer-right"] ? ((0, o.wg)(), (0, o.iD)("div", v, [(0, o.WI)(t.$slots, "outer-right")])) : (0, o.kq)("", true), (0, o.Wm)(c, {
            show: F.value,
            ani: "scale-y",
            class: "absolute top-full left-0 text-[12px] text-color-red",
            onAfterLeave: r[1] ||= e => T("")
          }, {
            default: (0, o.w5)(() => [(0, o.Uk)((0, a.toDisplayString)(M.value), 1)]),
            _: 1
          }, 8, ["show"])]);
        };
      }
    });
  },
  5395: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => i
    });
    var n = r(9282);
    var o = r(7268);
    var a = r(4209);
    const i = (0, o.aZ)({
      __name: "hi-mask",
      props: {
        opacity: {
          default: 60
        },
        show: {
          type: Boolean,
          default: true
        },
        zIndex: {
          default: 0
        }
      },
      emits: ["click"],
      setup(e, t) {
        let {
          emit: r
        } = t;
        const i = e;
        return (t, c) => {
          const s = n.Z;
          (0, o.wg)();
          return (0, o.j4)(s, {
            show: i.show,
            ani: "fade",
            class: (0, a.normalizeClass)(["hi-mask absolute left-0 top-0 h-full w-full bg-[#000]", `bg-opacity-${i.opacity}`]),
            style: (0, a.normalizeStyle)(e.zIndex ? {
              zIndex: i.zIndex
            } : undefined),
            onClick: c[0] ||= e => r("click")
          }, {
            default: (0, o.w5)(() => [(0, o.WI)(t.$slots, "default")]),
            _: 3
          }, 8, ["show", "class", "style"]);
        };
      }
    });
  },
  8531: (e, t, r) => {
    var n = {
      "./widget-chatgpt/loader": [5369, 369]
    };
    function o(e) {
      if (!r.o(n, e)) {
        return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          t.code = "MODULE_NOT_FOUND";
          throw t;
        });
      }
      var t = n[e];
      var o = t[0];
      return r.e(t[1]).then(() => r(o));
    }
    o.keys = () => Object.keys(n);
    o.id = 8531;
    e.exports = o;
  },
  4472: e => {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAgCAMAAADJyc2SAAAAyVBMVEUAAADYwqfbsp3asp3fyrXdtZ/ky7bky7XjyLPasZ3jybTcsp7jyrTbsp3bsp3asp3iy7basp3ky7bjybTjy7biyLPix7LkyrbjybPasJzjzbfjyLH////ixrHjyLPeu6bgwazfvqnbtJ/ctqLasZ3hxK/bs57duaTfwKvhwq7cuKPevajjyrXduqXctaH79vPky7bp1MXw4NbZsJz69PDmzLvu3NH++/r06eLz5t38+Pbq1cfr1sn48Oz27Obo0MHt2c3lyLjx49nhUlckAAAAHHRSTlMABvOWGBjzlvPj2dnHx7+CR0fj47+/loKCLS4u3h3MBAAABGBJREFUSMd1lwlzokAQhdXsfSTZ+xolqAgqKFHwivf//1H7+pgZYLMPqkKqsD5fH9Nty6t9//rbuze9XlcV4SaNWQ+kBHcSqqbTaWCVBVkMTUgDVuf97c2ndutfvXgNhpWSlBOBopyEOIlgwmlgSVkmnNhyZoN+f9bvd25eNjDtH6/SNFWKN8QsuMFlWYxhEkswRFLQQB0RCVfnrl2z80EwnqQQ9eQMsYRTCZ3neEeAsEYfK6Z+f87ThiHPovw4FOQM4XacIGb5FAEzI8xoNHz7y/n5nBLoeUNjJnlQ6AxBgiFSnIHCKZpUDI2EpJ7aH/IcmCbJO6pkqJEia+ifFM2YQxgifZQ8/UjzZyJXFkWxUM6pKI5q6HQoWIfN6tKsuUrkAJmBA0dD0h0H7pViLEhYW2PMuidd9GjMXEFPxmvlSHGWTUCyhhA4myMIrA4F73VOjjxIlBvSQhw9AaRVB6bXwkVO/XhHPkOk0Q0y9AoYUt3QwpB23XHNEYN2JWlfwHG3mSKbIWohiDiM6rRb9+A0Ygf1dojM2pgzOyKQdhE9SiUka7xCHJAeAuYgcLHUXCVwQvqEyAlIKRq6Fb5472pMwd365ByF9ChFFyCLm+BcFJcrkMcLklRu5ma3KetFN2TdtL7mIDVTFM2NuUaUp0cbOmkicTRlrQi0wP9SGXGMZ9Z20mdLgiHScnjbegcMqQba4/U8ijb4pnDUDJ06AmBBIJg/rNfhhD5UbA8ERdW5YhBL71tUC3mz5vD2Bt16wofKB80Rc0J65FMhJETJoMcsnpaTEAHcI0NUl2NgxJBouewAJI6UwywCnCKIgHDkQwcQnkkG2gQE2mYx6QT7A9IWQG5XcByr03qXWkPeEUJW5HmZX5AG03vgHCUIXUiOvI4Jg85ZRiW3YkMQiNc+qeroPYoBbuqk0lS1sDlKaqDdcR9AAD3FrBWeuI1KmORScKTlcHlL5d08f6410DpikBjiHFF9JIAoaC/NCiNbdgTi2R0LSlretO4pP7UTNUVWd3MVSGcBQQoKKwc3OZIjdYxXL+BEa/x154Jy0LBtneG+X1dwkUZdtCpuZHauoQutIy5uGeIaugldC2qhM3XvRgwBZPuo08ah2hziO7zvZl5J5auOLKgyihikwzU4GtEhrJ8KS0SOx0Sv509UadZSOdARHxQQOALygVNHOsMnZ4r0bjXg4pYTVbuIZ+xPfyqoQOn62Uqp1y5STQOHCnRG6MkdXKY4uv1wVdKdjvI0rU4IUP6/leiy0Nh+qrMVGNeuGjkZ5QjeF18JFqWhE0N+LWluCxgPQEF+FPmhpyhaTlR/QHKciC7haODUkKq2ZkF+WbCWBMQQ5vyqLpDVGSGoMe7qhuoMsaoZkqGni6NGTo9U0HSBVLV/vrEYv3Q7TsKqGVKOj5sNnaOIIbcSe1Pf33Dw/OZIIJVyFPRsyYHjQRBnqLnkq6v77/jZApKWgjcEECLnDWngZBPWxVHkKc2fLX8BtOq5bJbdMfkAAAAASUVORK5CYII=";
  },
  3002: (e, t, r) => {
    "use strict";

    e.exports = r.p + "assets/img/cfbf1b4d.png";
  },
  7437: e => {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAAyCAYAAACkhr9lAAAAAXNSR0IArs4c6QAADH9JREFUeF7t3WuTFEUWxvFzavqCoKywgrDuisp6H+Q24vd/s59DBGbBYRcUlem65LNxyuyJdoRlpu/V/SeiIqtruqoyf9kveCIrK934hwACCCCAAAIIIIAAAggsWEDSsCzLz33B9+HyCCCAAAIIIIAAAgggsEUCknplWX5qZjfMbDdvX5vZdUk7BJAt+jHQVAQQQAABBBBAAAEE5ikg6dpoNNp198mw8aWkwevuQwCZZw9wLQQQQAABBBBAAAEENlBA0qW6rncl7aaUbrh7O7Ih6Z3TNpcAcloxvo8AAggggAACCCCAwIYKxCNSMU/DzG7GJqktzezqvJpMAJmXJNdBAAEEEEAAAQQQQKBDApIu1HX9TdM0N919HDS+lnRmkc0ggCxSl2sjgAACCCCAAAIIILBiAUnxf/6Py7K8bWa3JkY2PlxF1Qggq1DnnggggAACCCCAAAIILEBAUr+qqq9y0LidUrrt7rcknV/A7aa6JAFkKjZOQgABBBBAAAEEEEBgtQLxqFRVVd+Y2Z2U0h13jxGOG7Hexmpr9v/vTgBZ596hbggggAACCCCAAAIImJmks3Vdx0jG3dgidJhZvO621zUgAkjXeoz6IoAAAggggAACCGy0gKRzETaaprnr7hE2Yvsi3lC1CQ0ngGxCL9IGBBBAAAEEEEAAgU4K5MeoYmL4nqS9KDcpbLyqUwggnfypUmkEEEAAAQQQQACBrgnkCeKxYvi3KaU9d4+wEYv5de4xqlnsCSCz6HEuAggggAACCCCAAAKvEJBUlGX5hbtH2Pg2yvz627WeIL6MziSALEOZeyCAAAIIIIAAAghstICka2VZRsi4JykCRzxS9fZGN3rKxvloNPrX7xPrpXyNZGZ13hp3P9qfPB77kprxsaIoGkmlmR3GJullURTj/bY89vllSulwOBy2fzOzF+7+25Tt4DQEEEAAAQQQQAABBJYiIOmvdV3HyMa9ceAws8tLufkG3MQPDw/HwWPlzXH3CDQ/S/rZ3Y/KfOynODb+e1EU7d/HpaSfBoNB+3cz+9Xd16ZdK4elAggggAACCCCAAAJTCUh6q67r203T3HP3GN2I0HF9qotxUiuwVgFkXn3i7jGK82IcZCYDzPHQ4u5Pi6I4kPS03+8fmNmBu7+cV124DgIIIIAAAggggEA3BCbmbdxLKX0XgcPMvtm2SeKL7q2NDCCzorn7r5IiiLSBZHKLYymlgwgtE4Hlxaz35HwEEEAAAQQQQACB5QpI+ltZlhEyvouRjTxv4/xya7F9dyOAzKHP3X0UIygRTsbBZXI/jkVgaZrmYDgcRqB5xiNic4DnEggggAACCCCAwAkFYkJ4Xdd7ed5GGzjM7O8nPJ2vzVGAADJHzJNeyt0rSf92930z25e0H/vu/ijKlNL+YDCIz89Pek2+hwACCCCAAAIIIPC7QDwyVVXVbp4g/l2UZvZVPGKF0eoFCCCr74PX1iDmokQ4iZAyDigRTmK/KIr9pmn2h8NhfP51jZtB1RBAAAEEEEAAgYUKSPooHqWKORt57sYdSWcXelMuPrUAAWRquvU5Mb8dLEZS2hGUyVGVCCq9Xi+OxYjLaH1qTU0QQAABBBBAAIHTC0i6MPEK3PGjVLwC9/SUKzuDALIy+pXcOCbWPzSzB5IeuvuD2C+K4mGv14v9OBZrufAPAQQQQAABBBBYuYCkYVVVt/KjVO2aG2b2qSQW015570xfAQLI9HYbd2ZMjJf0o7v/EMEkypTSDxFUYr/f78fxJ0yg37iup0EIIIAAAgisXODYK3DjcapYVfympP7KK0cF5ipAAJkr5+ZfLEZIJMVoSQSTCCRR3o/9pmnuD4fDCCuso7L5PwVaiAACCCCAwEwCkq6VZRkh49v8Cty7kt6Z6aKc3AkBAkgnuqlzlRyPokQwuZ9SasvY+v1+lM861yIqjAACCCCAAAJTC0h6fzQa7eVRjQgcETwuTX1BTuy0AAGk093Xzcq7eyzceD82Sd9H6e7f54AS5Y/dbBm1RgABBBBAAAFJF/N6G3t5dCNK1tvgp3EkQADhx7B2AvkRrggnEVIikERIact+vx/7zENZu16jQggggAAC2yiQw8adlNJdM9uTFOXH22hBm08uQAA5uRXfXBMBdz/Moyd/CChFUXzf6/UioDxmovyadBbVQAABBBDYGAFJl+q6vp1SumNmMV+DsLExvbvchhBAluvN3ZYgkNc7+dMIykRAiTVRtISqcAsEEEAAAQQ6J5BfcftJWZbx+tvbZnZLUux/0LnGUOG1FCCArGW3UKlFCuS1Tt4UUNIi68C1EUAAAQQQWAeBvM7G1xEyUkpt2HD3ePUtb6Nahw7a0DoQQDa0Y2nW9AL5VcPxiuHXPeK17+4ElOmJORMBBBBAYAUCeb7GzaZpbrt7jGjE9qWk3gqqwy23WIAAssWdT9OnE3D3SlIbUCYnyMdbvPIclEfu3kx3dc5CAAEEEEBgNoH8CFWssXH8EaoPZ7syZyMwHwECyHwcuQoCRwLuXkt6OBFQjtZB6fV6MaoSizeWkCGAAAIIIDCrgKT36rq+IWk3pXTD3XfNbJdHqGaV5fxFChBAFqnLtRF4hUBMgJcUE+HbtVByUBkv2PjDYDCIwBJrpfAPAQQQQACBVkDS21VVfWVmNyJgpJQiaMT++xAh0DUBAkjXeoz6boVAXi2+fcwrr4cSoybt1u/343i8aph5KFvxa6CRCCCwTQJ5nkbMy4iw8WVKqS3d/R/50apt4qCtGypAANnQjqVZmy2Q56HEY14RSmIU5UGEk5TSQ3d/MBgM4vPzzVagdQgggEB3BSR9UNf155KOQoaZRdhgRKO73UrNTyhAADkhFF9DoGsC7v5LBJOYjxKhJIeUCCYPIqjkkMKjXl3rWOqLAAKdEZB0vqqqzyR9bmafmdm4jGPnOtMQKorAnAUIIHMG5XIIdEnA3X+KYJKDSoSTNqzE1jTNg+FwGJ9/61KbqCsCCCCwTIGYm1GW5Sdmdl3SP83s04mgcWWZdeFeCHRFgADSlZ6ingisSCA/yvVIUqx/8sjM2nL8ud/v7+c5Kbx6eEV9xG0RQGCxApIuVVUVAeN6BA0zi6Ax/swjU4vl5+obKEAA2cBOpUkILFsgJsRLeuLuEUYinMRaKG1QiTKl9GgwGMTn/y67btwPAQQQeJOApHerqvpIUmzXiqJo980stggarAr+JkT+jsApBAggp8DiqwggMJuAux/GyEkeRXksKd7mFcHlcUrpcVEUT/r9/mMzi2OslTIbN2cjgMDvr691M7tcVVW8RerDcbBw92s5YETYOA8WAggsT4AAsjxr7oQAAqcQyKMlT3JIaYPK8f0cVg5Yef4UsHwVgQ0SkFSY2ZWqqv4uqd3idbVm1u5H6e4fSOpvULNpCgKdFyCAdL4LaQAC2y2QH/96GqMo+TGwCCQHkuLYU0kHRVE8TSkdDAaDp2b2HwLLdv9maP36C0jqxetoq6q6mlK6UhTFVUlXJF1196sROuI1trGfv7v+jaKGCCBwJEAA4ceAAAJbJRAr0ZvZMzP7Q0g5HlYitPT7/QgsEWjilcb8QwCBGQQkvWVmMZn7krtfiondKaXYv5wDxZUcKCJkvMeiezNgcyoCay5AAFnzDqJ6CCCwegF3H8VISqxQL+lZXqn++fizpOdFUTxLKT3b2dmJ8vlgMIiQE999ufoWUAME5iuQw8SFsiwvFkVxIaV00d0vppTei3ARQSNvlyNo5MDBuhfz7QauhkBnBQggne06Ko4AAl0QiMn0k6Elj75EkDkKMEVRPM8hJhaGfJFS+mUwGLT7ZvZLBKAutJU6dkdA0sDMYuJ1LJR33t3/0jRNlLG9K+lCBIoozawtx59zeaY7raWmCCCwbgIEkHXrEeqDAAIIHBNw9zrCiKQX+XGw4/sRUtqwEt8piqItY9vZ2Wn3I9QMh8MYjTkcb/m6eK+5gKShmcXowdnRaHSuKIpz7t5+TimN98+llM7m4+fitbERJiJgxBueImDkNz21ISNfc81bTvUQQGBTBQggm9qztAsBBBB4g0CejP9S0mQoaffHx/IjZMePHX1f0suiKMZ/j5GayswaSRGamp2dnbbMW7svKT6P94+ODYfDP313/L3J880sxdtVo3l5Tk/b0jxnIN6KFK9dHZeT+8f/9rrvxBuTeqPRqOfufXePCdHjst2PvzdN0/499sfH8ndjdGGYUhq6e4wURIA4k//Tf8bd289xXFJbvuJ7ESbORvCQtMOPGQEEENgkgf8BSGBB3cvd6I0AAAAASUVORK5CYII=";
  },
  199: () => {},
  9543: function (e) {
    e.exports = function () {
      "use strict";

      var e = function (e, t = 0, r = 1) {
        if (e < t) {
          return t;
        } else if (e > r) {
          return r;
        } else {
          return e;
        }
      };
      var t = e;
      var r = function (e) {
        e._clipped = false;
        e._unclipped = e.slice(0);
        for (var r = 0; r <= 3; r++) {
          if (r < 3) {
            if (e[r] < 0 || e[r] > 255) {
              e._clipped = true;
            }
            e[r] = t(e[r], 0, 255);
          } else if (r === 3) {
            e[r] = t(e[r], 0, 1);
          }
        }
        return e;
      };
      var n = {};
      for (var o = 0, a = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; o < a.length; o += 1) {
        var i = a[o];
        n["[object " + i + "]"] = i.toLowerCase();
      }
      function c(e) {
        return n[Object.prototype.toString.call(e)] || "object";
      }
      var s = c;
      function l(e, t = null) {
        if (e.length >= 3) {
          return Array.prototype.slice.call(e);
        } else if (s(e[0]) == "object" && t) {
          return t.split("").filter(function (t) {
            return e[0][t] !== undefined;
          }).map(function (t) {
            return e[0][t];
          });
        } else {
          return e[0];
        }
      }
      var u = c;
      function f(e) {
        if (e.length < 2) {
          return null;
        }
        var t = e.length - 1;
        if (u(e[t]) == "string") {
          return e[t].toLowerCase();
        } else {
          return null;
        }
      }
      var d = Math.PI;
      var h = {
        clip_rgb: r,
        limit: e,
        type: c,
        unpack: l,
        last: f,
        PI: d,
        TWOPI: d * 2,
        PITHIRD: d / 3,
        DEG2RAD: d / 180,
        RAD2DEG: 180 / d
      };
      var p = {
        format: {},
        autodetect: []
      };
      var g = h.last;
      var y = h.clip_rgb;
      var v = h.type;
      var b = p;
      function m() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = this;
        if (v(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor) {
          return e[0];
        }
        var n = g(e);
        var o = false;
        if (!n) {
          o = true;
          if (!b.sorted) {
            b.autodetect = b.autodetect.sort(function (e, t) {
              return t.p - e.p;
            });
            b.sorted = true;
          }
          for (var a = 0, i = b.autodetect; a < i.length; a += 1) {
            var c = i[a];
            if (n = c.test.apply(c, e)) {
              break;
            }
          }
        }
        if (!b.format[n]) {
          throw new Error("unknown format: " + e);
        }
        var s = b.format[n].apply(null, o ? e : e.slice(0, -1));
        r._rgb = y(s);
        if (r._rgb.length === 3) {
          r._rgb.push(1);
        }
      }
      m.prototype.toString = function () {
        if (v(this.hex) == "function") {
          return this.hex();
        } else {
          return "[" + this._rgb.join(",") + "]";
        }
      };
      var w = m;
      function _() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(_.Color, [null].concat(e)))();
      }
      _.Color = w;
      _.version = "2.4.2";
      var k = _;
      var A = h.unpack;
      var E = Math.max;
      function C() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = A(e, "rgb");
        var n = r[0];
        var o = r[1];
        var a = r[2];
        var i = 1 - E(n /= 255, E(o /= 255, a /= 255));
        var c = i < 1 ? 1 / (1 - i) : 0;
        return [(1 - n - i) * c, (1 - o - i) * c, (1 - a - i) * c, i];
      }
      var x = C;
      var S = h.unpack;
      function O() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = (e = S(e, "cmyk"))[0];
        var n = e[1];
        var o = e[2];
        var a = e[3];
        var i = e.length > 4 ? e[4] : 1;
        if (a === 1) {
          return [0, 0, 0, i];
        } else {
          return [r >= 1 ? 0 : (1 - r) * 255 * (1 - a), n >= 1 ? 0 : (1 - n) * 255 * (1 - a), o >= 1 ? 0 : (1 - o) * 255 * (1 - a), i];
        }
      }
      var B = O;
      var j = k;
      var D = w;
      var F = p;
      var P = h.unpack;
      var M = h.type;
      var T = x;
      D.prototype.cmyk = function () {
        return T(this._rgb);
      };
      j.cmyk = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(D, [null].concat(e, ["cmyk"])))();
      };
      F.format.cmyk = B;
      F.autodetect.push({
        p: 2,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = P(e, "cmyk");
          if (M(e) === "array" && e.length === 4) {
            return "cmyk";
          }
        }
      });
      var I = h.unpack;
      var L = h.last;
      function Z(e) {
        return Math.round(e * 100) / 100;
      }
      function U() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = I(e, "hsla");
        var n = L(e) || "lsa";
        r[0] = Z(r[0] || 0);
        r[1] = Z(r[1] * 100) + "%";
        r[2] = Z(r[2] * 100) + "%";
        if (n === "hsla" || r.length > 3 && r[3] < 1) {
          r[3] = r.length > 3 ? r[3] : 1;
          n = "hsla";
        } else {
          r.length = 3;
        }
        return n + "(" + r.join(",") + ")";
      }
      var R = U;
      var z = h.unpack;
      function H() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = (e = z(e, "rgba"))[0];
        var n = e[1];
        var o = e[2];
        r /= 255;
        n /= 255;
        o /= 255;
        var a;
        var i;
        var c = Math.min(r, n, o);
        var s = Math.max(r, n, o);
        var l = (s + c) / 2;
        if (s === c) {
          a = 0;
          i = Number.NaN;
        } else {
          a = l < 0.5 ? (s - c) / (s + c) : (s - c) / (2 - s - c);
        }
        if (r == s) {
          i = (n - o) / (s - c);
        } else if (n == s) {
          i = 2 + (o - r) / (s - c);
        } else if (o == s) {
          i = 4 + (r - n) / (s - c);
        }
        if ((i *= 60) < 0) {
          i += 360;
        }
        if (e.length > 3 && e[3] !== undefined) {
          return [i, a, l, e[3]];
        } else {
          return [i, a, l];
        }
      }
      var N = H;
      var W = h.unpack;
      var $ = h.last;
      var q = R;
      var Y = N;
      var Q = Math.round;
      function V() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = W(e, "rgba");
        var n = $(e) || "rgb";
        if (n.substr(0, 3) == "hsl") {
          return q(Y(r), n);
        } else {
          r[0] = Q(r[0]);
          r[1] = Q(r[1]);
          r[2] = Q(r[2]);
          if (n === "rgba" || r.length > 3 && r[3] < 1) {
            r[3] = r.length > 3 ? r[3] : 1;
            n = "rgba";
          }
          return n + "(" + r.slice(0, n === "rgb" ? 3 : 4).join(",") + ")";
        }
      }
      var G = V;
      var K = h.unpack;
      var J = Math.round;
      function X() {
        var e;
        var t = [];
        for (var r = arguments.length; r--;) {
          t[r] = arguments[r];
        }
        var n;
        var o;
        var a;
        var i = (t = K(t, "hsl"))[0];
        var c = t[1];
        var s = t[2];
        if (c === 0) {
          n = o = a = s * 255;
        } else {
          var l = [0, 0, 0];
          var u = [0, 0, 0];
          var f = s < 0.5 ? s * (1 + c) : s + c - s * c;
          var d = s * 2 - f;
          var h = i / 360;
          l[0] = h + 1 / 3;
          l[1] = h;
          l[2] = h - 1 / 3;
          for (var p = 0; p < 3; p++) {
            if (l[p] < 0) {
              l[p] += 1;
            }
            if (l[p] > 1) {
              l[p] -= 1;
            }
            if (l[p] * 6 < 1) {
              u[p] = d + (f - d) * 6 * l[p];
            } else if (l[p] * 2 < 1) {
              u[p] = f;
            } else if (l[p] * 3 < 2) {
              u[p] = d + (f - d) * (2 / 3 - l[p]) * 6;
            } else {
              u[p] = d;
            }
          }
          n = (e = [J(u[0] * 255), J(u[1] * 255), J(u[2] * 255)])[0];
          o = e[1];
          a = e[2];
        }
        if (t.length > 3) {
          return [n, o, a, t[3]];
        } else {
          return [n, o, a, 1];
        }
      }
      var ee = X;
      var te = ee;
      var re = p;
      var ne = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
      var oe = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
      var ae = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var ie = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var ce = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var se = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var le = Math.round;
      function ue(e) {
        var t;
        e = e.toLowerCase().trim();
        if (re.format.named) {
          try {
            return re.format.named(e);
          } catch (e) {}
        }
        if (t = e.match(ne)) {
          var r = t.slice(1, 4);
          for (var n = 0; n < 3; n++) {
            r[n] = +r[n];
          }
          r[3] = 1;
          return r;
        }
        if (t = e.match(oe)) {
          var o = t.slice(1, 5);
          for (var a = 0; a < 4; a++) {
            o[a] = +o[a];
          }
          return o;
        }
        if (t = e.match(ae)) {
          var i = t.slice(1, 4);
          for (var c = 0; c < 3; c++) {
            i[c] = le(i[c] * 2.55);
          }
          i[3] = 1;
          return i;
        }
        if (t = e.match(ie)) {
          var s = t.slice(1, 5);
          for (var l = 0; l < 3; l++) {
            s[l] = le(s[l] * 2.55);
          }
          s[3] = +s[3];
          return s;
        }
        if (t = e.match(ce)) {
          var u = t.slice(1, 4);
          u[1] *= 0.01;
          u[2] *= 0.01;
          var f = te(u);
          f[3] = 1;
          return f;
        }
        if (t = e.match(se)) {
          var d = t.slice(1, 4);
          d[1] *= 0.01;
          d[2] *= 0.01;
          var h = te(d);
          h[3] = +t[4];
          return h;
        }
      }
      ue.test = function (e) {
        return ne.test(e) || oe.test(e) || ae.test(e) || ie.test(e) || ce.test(e) || se.test(e);
      };
      var fe = ue;
      var de = k;
      var he = w;
      var pe = p;
      var ge = h.type;
      var ye = G;
      var ve = fe;
      he.prototype.css = function (e) {
        return ye(this._rgb, e);
      };
      de.css = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(he, [null].concat(e, ["css"])))();
      };
      pe.format.css = ve;
      pe.autodetect.push({
        p: 5,
        test: function (e) {
          var t = [];
          for (var r = arguments.length - 1; r-- > 0;) {
            t[r] = arguments[r + 1];
          }
          if (!t.length && ge(e) === "string" && ve.test(e)) {
            return "css";
          }
        }
      });
      var be = w;
      var me = k;
      var we = p;
      var _e = h.unpack;
      we.format.gl = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = _e(e, "rgba");
        r[0] *= 255;
        r[1] *= 255;
        r[2] *= 255;
        return r;
      };
      me.gl = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(be, [null].concat(e, ["gl"])))();
      };
      be.prototype.gl = function () {
        var e = this._rgb;
        return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
      };
      var ke = h.unpack;
      function Ae() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r;
        var n = ke(e, "rgb");
        var o = n[0];
        var a = n[1];
        var i = n[2];
        var c = Math.min(o, a, i);
        var s = Math.max(o, a, i);
        var l = s - c;
        var u = l * 100 / 255;
        var f = c / (255 - l) * 100;
        if (l === 0) {
          r = Number.NaN;
        } else {
          if (o === s) {
            r = (a - i) / l;
          }
          if (a === s) {
            r = 2 + (i - o) / l;
          }
          if (i === s) {
            r = 4 + (o - a) / l;
          }
          if ((r *= 60) < 0) {
            r += 360;
          }
        }
        return [r, u, f];
      }
      var Ee = Ae;
      var Ce = h.unpack;
      var xe = Math.floor;
      function Se() {
        var e;
        var t;
        var r;
        var n;
        var o;
        var a;
        var i = [];
        for (var c = arguments.length; c--;) {
          i[c] = arguments[c];
        }
        var s;
        var l;
        var u;
        var f = (i = Ce(i, "hcg"))[0];
        var d = i[1];
        var h = i[2];
        h *= 255;
        var p = d * 255;
        if (d === 0) {
          s = l = u = h;
        } else {
          if (f === 360) {
            f = 0;
          }
          if (f > 360) {
            f -= 360;
          }
          if (f < 0) {
            f += 360;
          }
          var g = xe(f /= 60);
          var y = f - g;
          var v = h * (1 - d);
          var b = v + p * (1 - y);
          var m = v + p * y;
          var w = v + p;
          switch (g) {
            case 0:
              s = (e = [w, m, v])[0];
              l = e[1];
              u = e[2];
              break;
            case 1:
              s = (t = [b, w, v])[0];
              l = t[1];
              u = t[2];
              break;
            case 2:
              s = (r = [v, w, m])[0];
              l = r[1];
              u = r[2];
              break;
            case 3:
              s = (n = [v, b, w])[0];
              l = n[1];
              u = n[2];
              break;
            case 4:
              s = (o = [m, v, w])[0];
              l = o[1];
              u = o[2];
              break;
            case 5:
              s = (a = [w, v, b])[0];
              l = a[1];
              u = a[2];
          }
        }
        return [s, l, u, i.length > 3 ? i[3] : 1];
      }
      var Oe = Se;
      var Be = h.unpack;
      var je = h.type;
      var De = k;
      var Fe = w;
      var Pe = p;
      var Me = Ee;
      Fe.prototype.hcg = function () {
        return Me(this._rgb);
      };
      De.hcg = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(Fe, [null].concat(e, ["hcg"])))();
      };
      Pe.format.hcg = Oe;
      Pe.autodetect.push({
        p: 1,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = Be(e, "hcg");
          if (je(e) === "array" && e.length === 3) {
            return "hcg";
          }
        }
      });
      var Te = h.unpack;
      var Ie = h.last;
      var Le = Math.round;
      function Ze() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = Te(e, "rgba");
        var n = r[0];
        var o = r[1];
        var a = r[2];
        var i = r[3];
        var c = Ie(e) || "auto";
        if (i === undefined) {
          i = 1;
        }
        if (c === "auto") {
          c = i < 1 ? "rgba" : "rgb";
        }
        var s = "000000" + ((n = Le(n)) << 16 | (o = Le(o)) << 8 | (a = Le(a))).toString(16);
        s = s.substr(s.length - 6);
        var l = "0" + Le(i * 255).toString(16);
        l = l.substr(l.length - 2);
        switch (c.toLowerCase()) {
          case "rgba":
            return "#" + s + l;
          case "argb":
            return "#" + l + s;
          default:
            return "#" + s;
        }
      }
      var Ue = Ze;
      var Re = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      var ze = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
      function He(e) {
        if (e.match(Re)) {
          if (e.length === 4 || e.length === 7) {
            e = e.substr(1);
          }
          if (e.length === 3) {
            e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2];
          }
          var t = parseInt(e, 16);
          return [t >> 16, t >> 8 & 255, t & 255, 1];
        }
        if (e.match(ze)) {
          if (e.length === 5 || e.length === 9) {
            e = e.substr(1);
          }
          if (e.length === 4) {
            e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
          }
          var r = parseInt(e, 16);
          return [r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, Math.round((r & 255) / 255 * 100) / 100];
        }
        throw new Error("unknown hex color: " + e);
      }
      var Ne = k;
      var We = w;
      var $e = h.type;
      var qe = p;
      var Ye = Ue;
      We.prototype.hex = function (e) {
        return Ye(this._rgb, e);
      };
      Ne.hex = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(We, [null].concat(e, ["hex"])))();
      };
      qe.format.hex = He;
      qe.autodetect.push({
        p: 4,
        test: function (e) {
          var t = [];
          for (var r = arguments.length - 1; r-- > 0;) {
            t[r] = arguments[r + 1];
          }
          if (!t.length && $e(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) {
            return "hex";
          }
        }
      });
      var Qe = h.unpack;
      var Ve = h.TWOPI;
      var Ge = Math.min;
      var Ke = Math.sqrt;
      var Je = Math.acos;
      function Xe() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r;
        var n = Qe(e, "rgb");
        var o = n[0];
        var a = n[1];
        var i = n[2];
        var c = Ge(o /= 255, a /= 255, i /= 255);
        var s = (o + a + i) / 3;
        var l = s > 0 ? 1 - c / s : 0;
        if (l === 0) {
          r = NaN;
        } else {
          r = (o - a + (o - i)) / 2;
          r /= Ke((o - a) * (o - a) + (o - i) * (a - i));
          r = Je(r);
          if (i > a) {
            r = Ve - r;
          }
          r /= Ve;
        }
        return [r * 360, l, s];
      }
      var et = Xe;
      var tt = h.unpack;
      var rt = h.limit;
      var nt = h.TWOPI;
      var ot = h.PITHIRD;
      var at = Math.cos;
      function it() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r;
        var n;
        var o;
        var a = (e = tt(e, "hsi"))[0];
        var i = e[1];
        var c = e[2];
        if (isNaN(a)) {
          a = 0;
        }
        if (isNaN(i)) {
          i = 0;
        }
        if (a > 360) {
          a -= 360;
        }
        if (a < 0) {
          a += 360;
        }
        if ((a /= 360) < 1 / 3) {
          n = 1 - ((o = (1 - i) / 3) + (r = (1 + i * at(nt * a) / at(ot - nt * a)) / 3));
        } else if (a < 2 / 3) {
          o = 1 - ((r = (1 - i) / 3) + (n = (1 + i * at(nt * (a -= 1 / 3)) / at(ot - nt * a)) / 3));
        } else {
          r = 1 - ((n = (1 - i) / 3) + (o = (1 + i * at(nt * (a -= 2 / 3)) / at(ot - nt * a)) / 3));
        }
        return [(r = rt(c * r * 3)) * 255, (n = rt(c * n * 3)) * 255, (o = rt(c * o * 3)) * 255, e.length > 3 ? e[3] : 1];
      }
      var ct = it;
      var st = h.unpack;
      var lt = h.type;
      var ut = k;
      var ft = w;
      var dt = p;
      var ht = et;
      ft.prototype.hsi = function () {
        return ht(this._rgb);
      };
      ut.hsi = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(ft, [null].concat(e, ["hsi"])))();
      };
      dt.format.hsi = ct;
      dt.autodetect.push({
        p: 2,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = st(e, "hsi");
          if (lt(e) === "array" && e.length === 3) {
            return "hsi";
          }
        }
      });
      var pt = h.unpack;
      var gt = h.type;
      var yt = k;
      var vt = w;
      var bt = p;
      var mt = N;
      vt.prototype.hsl = function () {
        return mt(this._rgb);
      };
      yt.hsl = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(vt, [null].concat(e, ["hsl"])))();
      };
      bt.format.hsl = ee;
      bt.autodetect.push({
        p: 2,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = pt(e, "hsl");
          if (gt(e) === "array" && e.length === 3) {
            return "hsl";
          }
        }
      });
      var wt = h.unpack;
      var _t = Math.min;
      var kt = Math.max;
      function At() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r;
        var n;
        var o;
        var a = (e = wt(e, "rgb"))[0];
        var i = e[1];
        var c = e[2];
        var s = _t(a, i, c);
        var l = kt(a, i, c);
        var u = l - s;
        o = l / 255;
        if (l === 0) {
          r = Number.NaN;
          n = 0;
        } else {
          n = u / l;
          if (a === l) {
            r = (i - c) / u;
          }
          if (i === l) {
            r = 2 + (c - a) / u;
          }
          if (c === l) {
            r = 4 + (a - i) / u;
          }
          if ((r *= 60) < 0) {
            r += 360;
          }
        }
        return [r, n, o];
      }
      var Et = At;
      var Ct = h.unpack;
      var xt = Math.floor;
      function St() {
        var e;
        var t;
        var r;
        var n;
        var o;
        var a;
        var i = [];
        for (var c = arguments.length; c--;) {
          i[c] = arguments[c];
        }
        var s;
        var l;
        var u;
        var f = (i = Ct(i, "hsv"))[0];
        var d = i[1];
        var h = i[2];
        h *= 255;
        if (d === 0) {
          s = l = u = h;
        } else {
          if (f === 360) {
            f = 0;
          }
          if (f > 360) {
            f -= 360;
          }
          if (f < 0) {
            f += 360;
          }
          var p = xt(f /= 60);
          var g = f - p;
          var y = h * (1 - d);
          var v = h * (1 - d * g);
          var b = h * (1 - d * (1 - g));
          switch (p) {
            case 0:
              s = (e = [h, b, y])[0];
              l = e[1];
              u = e[2];
              break;
            case 1:
              s = (t = [v, h, y])[0];
              l = t[1];
              u = t[2];
              break;
            case 2:
              s = (r = [y, h, b])[0];
              l = r[1];
              u = r[2];
              break;
            case 3:
              s = (n = [y, v, h])[0];
              l = n[1];
              u = n[2];
              break;
            case 4:
              s = (o = [b, y, h])[0];
              l = o[1];
              u = o[2];
              break;
            case 5:
              s = (a = [h, y, v])[0];
              l = a[1];
              u = a[2];
          }
        }
        return [s, l, u, i.length > 3 ? i[3] : 1];
      }
      var Ot = St;
      var Bt = h.unpack;
      var jt = h.type;
      var Dt = k;
      var Ft = w;
      var Pt = p;
      var Mt = Et;
      Ft.prototype.hsv = function () {
        return Mt(this._rgb);
      };
      Dt.hsv = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(Ft, [null].concat(e, ["hsv"])))();
      };
      Pt.format.hsv = Ot;
      Pt.autodetect.push({
        p: 2,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = Bt(e, "hsv");
          if (jt(e) === "array" && e.length === 3) {
            return "hsv";
          }
        }
      });
      var Tt = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452
      };
      var It = Tt;
      var Lt = h.unpack;
      var Zt = Math.pow;
      function Ut() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = Lt(e, "rgb");
        var n = r[0];
        var o = r[1];
        var a = r[2];
        var i = Ht(n, o, a);
        var c = i[0];
        var s = i[1];
        var l = s * 116 - 16;
        return [l < 0 ? 0 : l, (c - s) * 500, (s - i[2]) * 200];
      }
      function Rt(e) {
        if ((e /= 255) <= 0.04045) {
          return e / 12.92;
        } else {
          return Zt((e + 0.055) / 1.055, 2.4);
        }
      }
      function zt(e) {
        if (e > It.t3) {
          return Zt(e, 1 / 3);
        } else {
          return e / It.t2 + It.t0;
        }
      }
      function Ht(e, t, r) {
        e = Rt(e);
        t = Rt(t);
        r = Rt(r);
        return [zt((e * 0.4124564 + t * 0.3575761 + r * 0.1804375) / It.Xn), zt((e * 0.2126729 + t * 0.7151522 + r * 0.072175) / It.Yn), zt((e * 0.0193339 + t * 0.119192 + r * 0.9503041) / It.Zn)];
      }
      var Nt = Ut;
      var Wt = Tt;
      var $t = h.unpack;
      var qt = Math.pow;
      function Yt() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r;
        var n;
        var o;
        var a = (e = $t(e, "lab"))[0];
        var i = e[1];
        var c = e[2];
        n = (a + 16) / 116;
        r = isNaN(i) ? n : n + i / 500;
        o = isNaN(c) ? n : n - c / 200;
        n = Wt.Yn * Vt(n);
        r = Wt.Xn * Vt(r);
        o = Wt.Zn * Vt(o);
        return [Qt(r * 3.2404542 - n * 1.5371385 - o * 0.4985314), Qt(r * -0.969266 + n * 1.8760108 + o * 0.041556), Qt(r * 0.0556434 - n * 0.2040259 + o * 1.0572252), e.length > 3 ? e[3] : 1];
      }
      function Qt(e) {
        return (e <= 0.00304 ? e * 12.92 : qt(e, 1 / 2.4) * 1.055 - 0.055) * 255;
      }
      function Vt(e) {
        if (e > Wt.t1) {
          return e * e * e;
        } else {
          return Wt.t2 * (e - Wt.t0);
        }
      }
      var Gt = Yt;
      var Kt = h.unpack;
      var Jt = h.type;
      var Xt = k;
      var er = w;
      var tr = p;
      var rr = Nt;
      er.prototype.lab = function () {
        return rr(this._rgb);
      };
      Xt.lab = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(er, [null].concat(e, ["lab"])))();
      };
      tr.format.lab = Gt;
      tr.autodetect.push({
        p: 2,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = Kt(e, "lab");
          if (Jt(e) === "array" && e.length === 3) {
            return "lab";
          }
        }
      });
      var nr = h.unpack;
      var or = h.RAD2DEG;
      var ar = Math.sqrt;
      var ir = Math.atan2;
      var cr = Math.round;
      function sr() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = nr(e, "lab");
        var n = r[0];
        var o = r[1];
        var a = r[2];
        var i = ar(o * o + a * a);
        var c = (ir(a, o) * or + 360) % 360;
        if (cr(i * 10000) === 0) {
          c = Number.NaN;
        }
        return [n, i, c];
      }
      var lr = sr;
      var ur = h.unpack;
      var fr = Nt;
      var dr = lr;
      function hr() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = ur(e, "rgb");
        var n = r[0];
        var o = r[1];
        var a = r[2];
        var i = fr(n, o, a);
        var c = i[0];
        var s = i[1];
        var l = i[2];
        return dr(c, s, l);
      }
      var pr = hr;
      var gr = h.unpack;
      var yr = h.DEG2RAD;
      var vr = Math.sin;
      var br = Math.cos;
      function mr() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = gr(e, "lch");
        var n = r[0];
        var o = r[1];
        var a = r[2];
        if (isNaN(a)) {
          a = 0;
        }
        return [n, br(a *= yr) * o, vr(a) * o];
      }
      var wr = mr;
      var _r = h.unpack;
      var kr = wr;
      var Ar = Gt;
      function Er() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = (e = _r(e, "lch"))[0];
        var n = e[1];
        var o = e[2];
        var a = kr(r, n, o);
        var i = a[0];
        var c = a[1];
        var s = a[2];
        var l = Ar(i, c, s);
        return [l[0], l[1], l[2], e.length > 3 ? e[3] : 1];
      }
      var Cr = Er;
      var xr = h.unpack;
      var Sr = Cr;
      function Or() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = xr(e, "hcl").reverse();
        return Sr.apply(undefined, r);
      }
      var Br = Or;
      var jr = h.unpack;
      var Dr = h.type;
      var Fr = k;
      var Pr = w;
      var Mr = p;
      var Tr = pr;
      Pr.prototype.lch = function () {
        return Tr(this._rgb);
      };
      Pr.prototype.hcl = function () {
        return Tr(this._rgb).reverse();
      };
      Fr.lch = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(Pr, [null].concat(e, ["lch"])))();
      };
      Fr.hcl = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(Pr, [null].concat(e, ["hcl"])))();
      };
      Mr.format.lch = Cr;
      Mr.format.hcl = Br;
      ["lch", "hcl"].forEach(function (e) {
        return Mr.autodetect.push({
          p: 2,
          test: function () {
            var t = [];
            for (var r = arguments.length; r--;) {
              t[r] = arguments[r];
            }
            t = jr(t, e);
            if (Dr(t) === "array" && t.length === 3) {
              return e;
            }
          }
        });
      });
      var Ir = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      var Lr = w;
      var Zr = p;
      var Ur = h.type;
      var Rr = Ir;
      var zr = He;
      var Hr = Ue;
      Lr.prototype.name = function () {
        var e = Hr(this._rgb, "rgb");
        for (var t = 0, r = Object.keys(Rr); t < r.length; t += 1) {
          var n = r[t];
          if (Rr[n] === e) {
            return n.toLowerCase();
          }
        }
        return e;
      };
      Zr.format.named = function (e) {
        e = e.toLowerCase();
        if (Rr[e]) {
          return zr(Rr[e]);
        }
        throw new Error("unknown color name: " + e);
      };
      Zr.autodetect.push({
        p: 5,
        test: function (e) {
          var t = [];
          for (var r = arguments.length - 1; r-- > 0;) {
            t[r] = arguments[r + 1];
          }
          if (!t.length && Ur(e) === "string" && Rr[e.toLowerCase()]) {
            return "named";
          }
        }
      });
      var Nr = h.unpack;
      function Wr() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = Nr(e, "rgb");
        return (r[0] << 16) + (r[1] << 8) + r[2];
      }
      var $r = Wr;
      var qr = h.type;
      function Yr(e) {
        if (qr(e) == "number" && e >= 0 && e <= 16777215) {
          return [e >> 16, e >> 8 & 255, e & 255, 1];
        }
        throw new Error("unknown num color: " + e);
      }
      var Qr = Yr;
      var Vr = k;
      var Gr = w;
      var Kr = p;
      var Jr = h.type;
      var Xr = $r;
      Gr.prototype.num = function () {
        return Xr(this._rgb);
      };
      Vr.num = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(Gr, [null].concat(e, ["num"])))();
      };
      Kr.format.num = Qr;
      Kr.autodetect.push({
        p: 5,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          if (e.length === 1 && Jr(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215) {
            return "num";
          }
        }
      });
      var en = k;
      var tn = w;
      var rn = p;
      var nn = h.unpack;
      var on = h.type;
      var an = Math.round;
      tn.prototype.rgb = function (e = true) {
        if (e === false) {
          return this._rgb.slice(0, 3);
        } else {
          return this._rgb.slice(0, 3).map(an);
        }
      };
      tn.prototype.rgba = function (e = true) {
        return this._rgb.slice(0, 4).map(function (t, r) {
          if (r < 3) {
            if (e === false) {
              return t;
            } else {
              return an(t);
            }
          } else {
            return t;
          }
        });
      };
      en.rgb = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(tn, [null].concat(e, ["rgb"])))();
      };
      rn.format.rgb = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = nn(e, "rgba");
        if (r[3] === undefined) {
          r[3] = 1;
        }
        return r;
      };
      rn.autodetect.push({
        p: 3,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = nn(e, "rgba");
          if (on(e) === "array" && (e.length === 3 || e.length === 4 && on(e[3]) == "number" && e[3] >= 0 && e[3] <= 1)) {
            return "rgb";
          }
        }
      });
      var cn = Math.log;
      function sn(e) {
        var t;
        var r;
        var n;
        var o = e / 100;
        if (o < 66) {
          t = 255;
          r = o < 6 ? 0 : -155.25485562709179 - (r = o - 2) * 0.44596950469579133 + cn(r) * 104.49216199393888;
          n = o < 20 ? 0 : (n = o - 10) * 0.8274096064007395 - 254.76935184120902 + cn(n) * 115.67994401066147;
        } else {
          t = 351.97690566805693 + (t = o - 55) * 0.114206453784165 - cn(t) * 40.25366309332127;
          r = 325.4494125711974 + (r = o - 50) * 0.07943456536662342 - cn(r) * 28.0852963507957;
          n = 255;
        }
        return [t, r, n, 1];
      }
      var ln = sn;
      var un = h.unpack;
      var fn = Math.round;
      function dn() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r;
        var n = un(e, "rgb");
        var o = n[0];
        var a = n[2];
        for (var i = 1000, c = 40000, s = 0.4; c - i > s;) {
          var l = ln(r = (c + i) * 0.5);
          if (l[2] / l[0] >= a / o) {
            c = r;
          } else {
            i = r;
          }
        }
        return fn(r);
      }
      var hn = k;
      var pn = w;
      var gn = p;
      var yn = dn;
      pn.prototype.temp = pn.prototype.kelvin = pn.prototype.temperature = function () {
        return yn(this._rgb);
      };
      hn.temp = hn.kelvin = hn.temperature = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(pn, [null].concat(e, ["temp"])))();
      };
      gn.format.temp = gn.format.kelvin = gn.format.temperature = sn;
      var vn = h.unpack;
      var bn = Math.cbrt;
      var mn = Math.pow;
      var wn = Math.sign;
      function _n() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = vn(e, "rgb");
        var n = r[0];
        var o = r[1];
        var a = r[2];
        var i = [An(n / 255), An(o / 255), An(a / 255)];
        var c = i[0];
        var s = i[1];
        var l = i[2];
        var u = bn(c * 0.4122214708 + s * 0.5363325363 + l * 0.0514459929);
        var f = bn(c * 0.2119034982 + s * 0.6806995451 + l * 0.1073969566);
        var d = bn(c * 0.0883024619 + s * 0.2817188376 + l * 0.6299787005);
        return [u * 0.2104542553 + f * 0.793617785 - d * 0.0040720468, u * 1.9779984951 - f * 2.428592205 + d * 0.4505937099, u * 0.0259040371 + f * 0.7827717662 - d * 0.808675766];
      }
      var kn = _n;
      function An(e) {
        var t = Math.abs(e);
        if (t < 0.04045) {
          return e / 12.92;
        } else {
          return (wn(e) || 1) * mn((t + 0.055) / 1.055, 2.4);
        }
      }
      var En = h.unpack;
      var Cn = Math.pow;
      var xn = Math.sign;
      function Sn() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = (e = En(e, "lab"))[0];
        var n = e[1];
        var o = e[2];
        var a = Cn(r + n * 0.3963377774 + o * 0.2158037573, 3);
        var i = Cn(r - n * 0.1055613458 - o * 0.0638541728, 3);
        var c = Cn(r - n * 0.0894841775 - o * 1.291485548, 3);
        return [Bn(a * 4.0767416621 - i * 3.3077115913 + c * 0.2309699292) * 255, Bn(a * -1.2684380046 + i * 2.6097574011 - c * 0.3413193965) * 255, Bn(a * -0.0041960863 - i * 0.7034186147 + c * 1.707614701) * 255, e.length > 3 ? e[3] : 1];
      }
      var On = Sn;
      function Bn(e) {
        var t = Math.abs(e);
        if (t > 0.0031308) {
          return (xn(e) || 1) * (Cn(t, 1 / 2.4) * 1.055 - 0.055);
        } else {
          return e * 12.92;
        }
      }
      var jn = h.unpack;
      var Dn = h.type;
      var Fn = k;
      var Pn = w;
      var Mn = p;
      var Tn = kn;
      Pn.prototype.oklab = function () {
        return Tn(this._rgb);
      };
      Fn.oklab = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(Pn, [null].concat(e, ["oklab"])))();
      };
      Mn.format.oklab = On;
      Mn.autodetect.push({
        p: 3,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = jn(e, "oklab");
          if (Dn(e) === "array" && e.length === 3) {
            return "oklab";
          }
        }
      });
      var In = h.unpack;
      var Ln = kn;
      var Zn = lr;
      function Un() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = In(e, "rgb");
        var n = r[0];
        var o = r[1];
        var a = r[2];
        var i = Ln(n, o, a);
        var c = i[0];
        var s = i[1];
        var l = i[2];
        return Zn(c, s, l);
      }
      var Rn = Un;
      var zn = h.unpack;
      var Hn = wr;
      var Nn = On;
      function Wn() {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        var r = (e = zn(e, "lch"))[0];
        var n = e[1];
        var o = e[2];
        var a = Hn(r, n, o);
        var i = a[0];
        var c = a[1];
        var s = a[2];
        var l = Nn(i, c, s);
        return [l[0], l[1], l[2], e.length > 3 ? e[3] : 1];
      }
      var $n = Wn;
      var qn = h.unpack;
      var Yn = h.type;
      var Qn = k;
      var Vn = w;
      var Gn = p;
      var Kn = Rn;
      Vn.prototype.oklch = function () {
        return Kn(this._rgb);
      };
      Qn.oklch = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        return new (Function.prototype.bind.apply(Vn, [null].concat(e, ["oklch"])))();
      };
      Gn.format.oklch = $n;
      Gn.autodetect.push({
        p: 3,
        test: function () {
          var e = [];
          for (var t = arguments.length; t--;) {
            e[t] = arguments[t];
          }
          e = qn(e, "oklch");
          if (Yn(e) === "array" && e.length === 3) {
            return "oklch";
          }
        }
      });
      var Jn = w;
      var Xn = h.type;
      Jn.prototype.alpha = function (e, t = false) {
        if (e !== undefined && Xn(e) === "number") {
          if (t) {
            this._rgb[3] = e;
            return this;
          } else {
            return new Jn([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb");
          }
        } else {
          return this._rgb[3];
        }
      };
      w.prototype.clipped = function () {
        return this._rgb._clipped || false;
      };
      var eo = w;
      var to = Tt;
      eo.prototype.darken = function (e = 1) {
        var t = this;
        var r = t.lab();
        r[0] -= to.Kn * e;
        return new eo(r, "lab").alpha(t.alpha(), true);
      };
      eo.prototype.brighten = function (e = 1) {
        return this.darken(-e);
      };
      eo.prototype.darker = eo.prototype.darken;
      eo.prototype.brighter = eo.prototype.brighten;
      w.prototype.get = function (e) {
        var t = e.split(".");
        var r = t[0];
        var n = t[1];
        var o = this[r]();
        if (n) {
          var a = r.indexOf(n) - (r.substr(0, 2) === "ok" ? 2 : 0);
          if (a > -1) {
            return o[a];
          }
          throw new Error("unknown channel " + n + " in mode " + r);
        }
        return o;
      };
      var ro = w;
      var no = h.type;
      var oo = Math.pow;
      var ao = 1e-7;
      var io = 20;
      ro.prototype.luminance = function (e) {
        if (e !== undefined && no(e) === "number") {
          if (e === 0) {
            return new ro([0, 0, 0, this._rgb[3]], "rgb");
          }
          if (e === 1) {
            return new ro([255, 255, 255, this._rgb[3]], "rgb");
          }
          var t = this.luminance();
          var r = "rgb";
          var n = io;
          function o(t, a) {
            var i = t.interpolate(a, 0.5, r);
            var c = i.luminance();
            if (Math.abs(e - c) < ao || !n--) {
              return i;
            } else if (c > e) {
              return o(t, i);
            } else {
              return o(i, a);
            }
          }
          var a = (t > e ? o(new ro([0, 0, 0]), this) : o(this, new ro([255, 255, 255]))).rgb();
          return new ro(a.concat([this._rgb[3]]));
        }
        return co.apply(undefined, this._rgb.slice(0, 3));
      };
      function co(e, t, r) {
        return (e = so(e)) * 0.2126 + (t = so(t)) * 0.7152 + (r = so(r)) * 0.0722;
      }
      function so(e) {
        if ((e /= 255) <= 0.03928) {
          return e / 12.92;
        } else {
          return oo((e + 0.055) / 1.055, 2.4);
        }
      }
      var lo = {};
      var uo = w;
      var fo = h.type;
      var ho = lo;
      function po(e, t, r = 0.5) {
        var n = [];
        for (var o = arguments.length - 3; o-- > 0;) {
          n[o] = arguments[o + 3];
        }
        var a = n[0] || "lrgb";
        if (!ho[a] && !n.length) {
          a = Object.keys(ho)[0];
        }
        if (!ho[a]) {
          throw new Error("interpolation mode " + a + " is not defined");
        }
        if (fo(e) !== "object") {
          e = new uo(e);
        }
        if (fo(t) !== "object") {
          t = new uo(t);
        }
        return ho[a](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()));
      }
      var go = w;
      var yo = po;
      go.prototype.mix = go.prototype.interpolate = function (e, t = 0.5) {
        var r = [];
        for (var n = arguments.length - 2; n-- > 0;) {
          r[n] = arguments[n + 2];
        }
        return yo.apply(undefined, [this, e, t].concat(r));
      };
      var vo = w;
      vo.prototype.premultiply = function (e = false) {
        var t = this._rgb;
        var r = t[3];
        if (e) {
          this._rgb = [t[0] * r, t[1] * r, t[2] * r, r];
          return this;
        } else {
          return new vo([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
        }
      };
      var bo = w;
      var mo = Tt;
      bo.prototype.saturate = function (e = 1) {
        var t = this;
        var r = t.lch();
        r[1] += mo.Kn * e;
        if (r[1] < 0) {
          r[1] = 0;
        }
        return new bo(r, "lch").alpha(t.alpha(), true);
      };
      bo.prototype.desaturate = function (e = 1) {
        return this.saturate(-e);
      };
      var wo = w;
      var _o = h.type;
      wo.prototype.set = function (e, t, r = false) {
        var n = e.split(".");
        var o = n[0];
        var a = n[1];
        var i = this[o]();
        if (a) {
          var c = o.indexOf(a) - (o.substr(0, 2) === "ok" ? 2 : 0);
          if (c > -1) {
            if (_o(t) == "string") {
              switch (t.charAt(0)) {
                case "+":
                case "-":
                  i[c] += +t;
                  break;
                case "*":
                  i[c] *= +t.substr(1);
                  break;
                case "/":
                  i[c] /= +t.substr(1);
                  break;
                default:
                  i[c] = +t;
              }
            } else {
              if (_o(t) !== "number") {
                throw new Error("unsupported value for Color.set");
              }
              i[c] = t;
            }
            var s = new wo(i, o);
            if (r) {
              this._rgb = s._rgb;
              return this;
            } else {
              return s;
            }
          }
          throw new Error("unknown channel " + a + " in mode " + o);
        }
        return i;
      };
      var ko = w;
      function Ao(e, t, r) {
        var n = e._rgb;
        var o = t._rgb;
        return new ko(n[0] + r * (o[0] - n[0]), n[1] + r * (o[1] - n[1]), n[2] + r * (o[2] - n[2]), "rgb");
      }
      lo.rgb = Ao;
      var Eo = w;
      var Co = Math.sqrt;
      var xo = Math.pow;
      function So(e, t, r) {
        var n = e._rgb;
        var o = n[0];
        var a = n[1];
        var i = n[2];
        var c = t._rgb;
        var s = c[0];
        var l = c[1];
        var u = c[2];
        return new Eo(Co(xo(o, 2) * (1 - r) + xo(s, 2) * r), Co(xo(a, 2) * (1 - r) + xo(l, 2) * r), Co(xo(i, 2) * (1 - r) + xo(u, 2) * r), "rgb");
      }
      lo.lrgb = So;
      var Oo = w;
      function Bo(e, t, r) {
        var n = e.lab();
        var o = t.lab();
        return new Oo(n[0] + r * (o[0] - n[0]), n[1] + r * (o[1] - n[1]), n[2] + r * (o[2] - n[2]), "lab");
      }
      lo.lab = Bo;
      var jo = w;
      function Do(e, t, r, n) {
        var o;
        var a;
        var i;
        var c;
        var s;
        var l;
        var u;
        var f;
        var d;
        var h;
        var p;
        var g;
        var y;
        if (n === "hsl") {
          i = e.hsl();
          c = t.hsl();
        } else if (n === "hsv") {
          i = e.hsv();
          c = t.hsv();
        } else if (n === "hcg") {
          i = e.hcg();
          c = t.hcg();
        } else if (n === "hsi") {
          i = e.hsi();
          c = t.hsi();
        } else if (n === "lch" || n === "hcl") {
          n = "hcl";
          i = e.hcl();
          c = t.hcl();
        } else if (n === "oklch") {
          i = e.oklch().reverse();
          c = t.oklch().reverse();
        }
        if (n.substr(0, 1) === "h" || n === "oklch") {
          s = (o = i)[0];
          u = o[1];
          d = o[2];
          l = (a = c)[0];
          f = a[1];
          h = a[2];
        }
        if (isNaN(s) || isNaN(l)) {
          if (isNaN(s)) {
            if (isNaN(l)) {
              g = Number.NaN;
            } else {
              g = l;
              if ((d == 1 || d == 0) && n != "hsv") {
                p = f;
              }
            }
          } else {
            g = s;
            if ((h == 1 || h == 0) && n != "hsv") {
              p = u;
            }
          }
        } else {
          g = s + r * (l > s && l - s > 180 ? l - (s + 360) : l < s && s - l > 180 ? l + 360 - s : l - s);
        }
        if (p === undefined) {
          p = u + r * (f - u);
        }
        y = d + r * (h - d);
        return new jo(n === "oklch" ? [y, p, g] : [g, p, y], n);
      }
      var Fo = Do;
      function Po(e, t, r) {
        return Fo(e, t, r, "lch");
      }
      lo.lch = Po;
      lo.hcl = Po;
      var Mo = w;
      function To(e, t, r) {
        var n = e.num();
        var o = t.num();
        return new Mo(n + r * (o - n), "num");
      }
      lo.num = To;
      var Io = Do;
      function Lo(e, t, r) {
        return Io(e, t, r, "hcg");
      }
      lo.hcg = Lo;
      var Zo = Do;
      function Uo(e, t, r) {
        return Zo(e, t, r, "hsi");
      }
      lo.hsi = Uo;
      var Ro = Do;
      function zo(e, t, r) {
        return Ro(e, t, r, "hsl");
      }
      lo.hsl = zo;
      var Ho = Do;
      function No(e, t, r) {
        return Ho(e, t, r, "hsv");
      }
      lo.hsv = No;
      var Wo = w;
      function $o(e, t, r) {
        var n = e.oklab();
        var o = t.oklab();
        return new Wo(n[0] + r * (o[0] - n[0]), n[1] + r * (o[1] - n[1]), n[2] + r * (o[2] - n[2]), "oklab");
      }
      lo.oklab = $o;
      var qo = Do;
      function Yo(e, t, r) {
        return qo(e, t, r, "oklch");
      }
      lo.oklch = Yo;
      var Qo = w;
      var Vo = h.clip_rgb;
      var Go = Math.pow;
      var Ko = Math.sqrt;
      var Jo = Math.PI;
      var Xo = Math.cos;
      var ea = Math.sin;
      var ta = Math.atan2;
      function ra(e, t = "lrgb", r = null) {
        var n = e.length;
        r ||= Array.from(new Array(n)).map(function () {
          return 1;
        });
        var o = n / r.reduce(function (e, t) {
          return e + t;
        });
        r.forEach(function (e, t) {
          r[t] *= o;
        });
        e = e.map(function (e) {
          return new Qo(e);
        });
        if (t === "lrgb") {
          return na(e, r);
        }
        var a = e.shift();
        for (var i = a.get(t), c = [], s = 0, l = 0, u = 0; u < i.length; u++) {
          i[u] = (i[u] || 0) * r[0];
          c.push(isNaN(i[u]) ? 0 : r[0]);
          if (t.charAt(u) === "h" && !isNaN(i[u])) {
            var f = i[u] / 180 * Jo;
            s += Xo(f) * r[0];
            l += ea(f) * r[0];
          }
        }
        var d = a.alpha() * r[0];
        e.forEach(function (e, n) {
          var o = e.get(t);
          d += e.alpha() * r[n + 1];
          for (var a = 0; a < i.length; a++) {
            if (!isNaN(o[a])) {
              c[a] += r[n + 1];
              if (t.charAt(a) === "h") {
                var u = o[a] / 180 * Jo;
                s += Xo(u) * r[n + 1];
                l += ea(u) * r[n + 1];
              } else {
                i[a] += o[a] * r[n + 1];
              }
            }
          }
        });
        for (var h = 0; h < i.length; h++) {
          if (t.charAt(h) === "h") {
            for (var p = ta(l / c[h], s / c[h]) / Jo * 180; p < 0;) {
              p += 360;
            }
            while (p >= 360) {
              p -= 360;
            }
            i[h] = p;
          } else {
            i[h] = i[h] / c[h];
          }
        }
        d /= n;
        return new Qo(i, t).alpha(d > 0.99999 ? 1 : d, true);
      }
      function na(e, t) {
        var r = e.length;
        var n = [0, 0, 0, 0];
        for (var o = 0; o < e.length; o++) {
          var a = e[o];
          var i = t[o] / r;
          var c = a._rgb;
          n[0] += Go(c[0], 2) * i;
          n[1] += Go(c[1], 2) * i;
          n[2] += Go(c[2], 2) * i;
          n[3] += c[3] * i;
        }
        n[0] = Ko(n[0]);
        n[1] = Ko(n[1]);
        n[2] = Ko(n[2]);
        if (n[3] > 0.9999999) {
          n[3] = 1;
        }
        return new Qo(Vo(n));
      }
      var oa = k;
      var aa = h.type;
      var ia = Math.pow;
      function ca(e) {
        var t = "rgb";
        var r = oa("#ccc");
        var n = 0;
        var o = [0, 1];
        var a = [];
        var i = [0, 0];
        var c = false;
        var s = [];
        var l = false;
        var u = 0;
        var f = 1;
        var d = false;
        var h = {};
        var p = true;
        var g = 1;
        function y(e) {
          if ((e = e || ["#fff", "#000"]) && aa(e) === "string" && oa.brewer && oa.brewer[e.toLowerCase()]) {
            e = oa.brewer[e.toLowerCase()];
          }
          if (aa(e) === "array") {
            if (e.length === 1) {
              e = [e[0], e[0]];
            }
            e = e.slice(0);
            for (var t = 0; t < e.length; t++) {
              e[t] = oa(e[t]);
            }
            a.length = 0;
            for (var r = 0; r < e.length; r++) {
              a.push(r / (e.length - 1));
            }
          }
          _();
          return s = e;
        }
        function v(e) {
          if (c != null) {
            for (var t = c.length - 1, r = 0; r < t && e >= c[r];) {
              r++;
            }
            return r - 1;
          }
          return 0;
        }
        function b(e) {
          return e;
        }
        function m(e) {
          return e;
        }
        function w(e, n) {
          var o;
          var l;
          if (n == null) {
            n = false;
          }
          if (isNaN(e) || e === null) {
            return r;
          }
          l = n ? e : c && c.length > 2 ? v(e) / (c.length - 2) : f !== u ? (e - u) / (f - u) : 1;
          l = m(l);
          if (!n) {
            l = b(l);
          }
          if (g !== 1) {
            l = ia(l, g);
          }
          l = i[0] + l * (1 - i[0] - i[1]);
          l = Math.min(1, Math.max(0, l));
          var d = Math.floor(l * 10000);
          if (p && h[d]) {
            o = h[d];
          } else {
            if (aa(s) === "array") {
              for (var y = 0; y < a.length; y++) {
                var w = a[y];
                if (l <= w) {
                  o = s[y];
                  break;
                }
                if (l >= w && y === a.length - 1) {
                  o = s[y];
                  break;
                }
                if (l > w && l < a[y + 1]) {
                  l = (l - w) / (a[y + 1] - w);
                  o = oa.interpolate(s[y], s[y + 1], l, t);
                  break;
                }
              }
            } else if (aa(s) === "function") {
              o = s(l);
            }
            if (p) {
              h[d] = o;
            }
          }
          return o;
        }
        function _() {
          return h = {};
        }
        y(e);
        function k(e) {
          var t = oa(w(e));
          if (l && t[l]) {
            return t[l]();
          } else {
            return t;
          }
        }
        k.classes = function (e) {
          if (e != null) {
            if (aa(e) === "array") {
              c = e;
              o = [e[0], e[e.length - 1]];
            } else {
              var t = oa.analyze(o);
              c = e === 0 ? [t.min, t.max] : oa.limits(t, "e", e);
            }
            return k;
          }
          return c;
        };
        k.domain = function (e) {
          if (!arguments.length) {
            return o;
          }
          u = e[0];
          f = e[e.length - 1];
          a = [];
          var t = s.length;
          if (e.length === t && u !== f) {
            for (var r = 0, n = Array.from(e); r < n.length; r += 1) {
              var i = n[r];
              a.push((i - u) / (f - u));
            }
          } else {
            for (var c = 0; c < t; c++) {
              a.push(c / (t - 1));
            }
            if (e.length > 2) {
              var l = e.map(function (t, r) {
                return r / (e.length - 1);
              });
              var d = e.map(function (e) {
                return (e - u) / (f - u);
              });
              if (!d.every(function (e, t) {
                return l[t] === e;
              })) {
                m = function (e) {
                  if (e <= 0 || e >= 1) {
                    return e;
                  }
                  for (var t = 0; e >= d[t + 1];) {
                    t++;
                  }
                  var r = (e - d[t]) / (d[t + 1] - d[t]);
                  return l[t] + r * (l[t + 1] - l[t]);
                };
              }
            }
          }
          o = [u, f];
          return k;
        };
        k.mode = function (e) {
          if (arguments.length) {
            t = e;
            _();
            return k;
          } else {
            return t;
          }
        };
        k.range = function (e, t) {
          y(e);
          return k;
        };
        k.out = function (e) {
          l = e;
          return k;
        };
        k.spread = function (e) {
          if (arguments.length) {
            n = e;
            return k;
          } else {
            return n;
          }
        };
        k.correctLightness = function (e) {
          if (e == null) {
            e = true;
          }
          d = e;
          _();
          b = d ? function (e) {
            var t = w(0, true).lab()[0];
            var r = w(1, true).lab()[0];
            var n = t > r;
            var o = w(e, true).lab()[0];
            var a = t + (r - t) * e;
            for (var i = o - a, c = 0, s = 1, l = 20; Math.abs(i) > 0.01 && l-- > 0;) {
              if (n) {
                i *= -1;
              }
              if (i < 0) {
                c = e;
                e += (s - e) * 0.5;
              } else {
                s = e;
                e += (c - e) * 0.5;
              }
              o = w(e, true).lab()[0];
              i = o - a;
            }
            return e;
          } : function (e) {
            return e;
          };
          return k;
        };
        k.padding = function (e) {
          if (e != null) {
            if (aa(e) === "number") {
              e = [e, e];
            }
            i = e;
            return k;
          } else {
            return i;
          }
        };
        k.colors = function (t, r) {
          if (arguments.length < 2) {
            r = "hex";
          }
          var n = [];
          if (arguments.length === 0) {
            n = s.slice(0);
          } else if (t === 1) {
            n = [k(0.5)];
          } else if (t > 1) {
            var a = o[0];
            var i = o[1] - a;
            n = sa(0, t, false).map(function (e) {
              return k(a + e / (t - 1) * i);
            });
          } else {
            e = [];
            var l = [];
            if (c && c.length > 2) {
              for (var u = 1, f = c.length, d = f >= 1; d ? u < f : u > f; d ? u++ : u--) {
                l.push((c[u - 1] + c[u]) * 0.5);
              }
            } else {
              l = o;
            }
            n = l.map(function (e) {
              return k(e);
            });
          }
          if (oa[r]) {
            n = n.map(function (e) {
              return e[r]();
            });
          }
          return n;
        };
        k.cache = function (e) {
          if (e != null) {
            p = e;
            return k;
          } else {
            return p;
          }
        };
        k.gamma = function (e) {
          if (e != null) {
            g = e;
            return k;
          } else {
            return g;
          }
        };
        k.nodata = function (e) {
          if (e != null) {
            r = oa(e);
            return k;
          } else {
            return r;
          }
        };
        return k;
      }
      function sa(e, t, r) {
        var n = [];
        for (var o = e < t, a = r ? o ? t + 1 : t - 1 : t, i = e; o ? i < a : i > a; o ? i++ : i--) {
          n.push(i);
        }
        return n;
      }
      var la = w;
      var ua = ca;
      function fa(e) {
        var t = [1, 1];
        for (var r = 1; r < e; r++) {
          var n = [1];
          for (var o = 1; o <= t.length; o++) {
            n[o] = (t[o] || 0) + t[o - 1];
          }
          t = n;
        }
        return t;
      }
      function da(e) {
        var t;
        var r;
        var n;
        var o;
        var a;
        var i;
        var c;
        if ((e = e.map(function (e) {
          return new la(e);
        })).length === 2) {
          t = e.map(function (e) {
            return e.lab();
          });
          a = t[0];
          i = t[1];
          o = function (e) {
            var t = [0, 1, 2].map(function (t) {
              return a[t] + e * (i[t] - a[t]);
            });
            return new la(t, "lab");
          };
        } else if (e.length === 3) {
          r = e.map(function (e) {
            return e.lab();
          });
          a = r[0];
          i = r[1];
          c = r[2];
          o = function (e) {
            var t = [0, 1, 2].map(function (t) {
              return (1 - e) * (1 - e) * a[t] + (1 - e) * 2 * e * i[t] + e * e * c[t];
            });
            return new la(t, "lab");
          };
        } else if (e.length === 4) {
          var s;
          n = e.map(function (e) {
            return e.lab();
          });
          a = n[0];
          i = n[1];
          c = n[2];
          s = n[3];
          o = function (e) {
            var t = [0, 1, 2].map(function (t) {
              return (1 - e) * (1 - e) * (1 - e) * a[t] + (1 - e) * 3 * (1 - e) * e * i[t] + (1 - e) * 3 * e * e * c[t] + e * e * e * s[t];
            });
            return new la(t, "lab");
          };
        } else {
          if (!(e.length >= 5)) {
            throw new RangeError("No point in running bezier with only one color.");
          }
          var l;
          var u;
          var f;
          l = e.map(function (e) {
            return e.lab();
          });
          f = e.length - 1;
          u = fa(f);
          o = function (e) {
            var t = 1 - e;
            var r = [0, 1, 2].map(function (r) {
              return l.reduce(function (n, o, a) {
                return n + u[a] * Math.pow(t, f - a) * Math.pow(e, a) * o[r];
              }, 0);
            });
            return new la(r, "lab");
          };
        }
        return o;
      }
      function ha(e) {
        var t = da(e);
        t.scale = function () {
          return ua(t);
        };
        return t;
      }
      var pa = k;
      function ga(e, t, r) {
        if (!ga[r]) {
          throw new Error("unknown blend mode " + r);
        }
        return ga[r](e, t);
      }
      function ya(e) {
        return function (t, r) {
          var n = pa(r).rgb();
          var o = pa(t).rgb();
          return pa.rgb(e(n, o));
        };
      }
      function va(e) {
        return function (t, r) {
          var n = [];
          n[0] = e(t[0], r[0]);
          n[1] = e(t[1], r[1]);
          n[2] = e(t[2], r[2]);
          return n;
        };
      }
      function ba(e) {
        return e;
      }
      function ma(e, t) {
        return e * t / 255;
      }
      function wa(e, t) {
        if (e > t) {
          return t;
        } else {
          return e;
        }
      }
      function _a(e, t) {
        if (e > t) {
          return e;
        } else {
          return t;
        }
      }
      function ka(e, t) {
        return (1 - (1 - e / 255) * (1 - t / 255)) * 255;
      }
      function Aa(e, t) {
        if (t < 128) {
          return e * 2 * t / 255;
        } else {
          return (1 - (1 - e / 255) * 2 * (1 - t / 255)) * 255;
        }
      }
      function Ea(e, t) {
        return (1 - (1 - t / 255) / (e / 255)) * 255;
      }
      function Ca(e, t) {
        if (e === 255 || (e = t / 255 * 255 / (1 - e / 255)) > 255) {
          return 255;
        } else {
          return e;
        }
      }
      ga.normal = ya(va(ba));
      ga.multiply = ya(va(ma));
      ga.screen = ya(va(ka));
      ga.overlay = ya(va(Aa));
      ga.darken = ya(va(wa));
      ga.lighten = ya(va(_a));
      ga.dodge = ya(va(Ca));
      ga.burn = ya(va(Ea));
      var xa = ga;
      var Sa = h.type;
      var Oa = h.clip_rgb;
      var Ba = h.TWOPI;
      var ja = Math.pow;
      var Da = Math.sin;
      var Fa = Math.cos;
      var Pa = k;
      var Ma = function (e = 300, t = -1.5, r = 1, n = 1, o = [0, 1]) {
        var a;
        var i = 0;
        if (Sa(o) === "array") {
          a = o[1] - o[0];
        } else {
          a = 0;
          o = [o, o];
        }
        function c(c) {
          var s = Ba * ((e + 120) / 360 + t * c);
          var l = ja(o[0] + a * c, n);
          var u = (i !== 0 ? r[0] + c * i : r) * l * (1 - l) / 2;
          var f = Fa(s);
          var d = Da(s);
          return Pa(Oa([(l + u * (f * -0.14861 + d * 1.78277)) * 255, (l + u * (f * -0.29227 - d * 0.90649)) * 255, (l + u * (f * 1.97294)) * 255, 1]));
        }
        c.start = function (t) {
          if (t == null) {
            return e;
          } else {
            e = t;
            return c;
          }
        };
        c.rotations = function (e) {
          if (e == null) {
            return t;
          } else {
            t = e;
            return c;
          }
        };
        c.gamma = function (e) {
          if (e == null) {
            return n;
          } else {
            n = e;
            return c;
          }
        };
        c.hue = function (e) {
          if (e == null) {
            return r;
          } else {
            if (Sa(r = e) === "array") {
              if ((i = r[1] - r[0]) == 0) {
                r = r[1];
              }
            } else {
              i = 0;
            }
            return c;
          }
        };
        c.lightness = function (e) {
          if (e == null) {
            return o;
          } else {
            if (Sa(e) === "array") {
              o = e;
              a = e[1] - e[0];
            } else {
              o = [e, e];
              a = 0;
            }
            return c;
          }
        };
        c.scale = function () {
          return Pa.scale(c);
        };
        c.hue(r);
        return c;
      };
      var Ta = w;
      var Ia = "0123456789abcdef";
      var La = Math.floor;
      var Za = Math.random;
      var Ua = function () {
        var e = "#";
        for (var t = 0; t < 6; t++) {
          e += Ia.charAt(La(Za() * 16));
        }
        return new Ta(e, "hex");
      };
      var Ra = c;
      var za = Math.log;
      var Ha = Math.pow;
      var Na = Math.floor;
      var Wa = Math.abs;
      var $a = function (e, t = null) {
        var r = {
          min: Number.MAX_VALUE,
          max: Number.MAX_VALUE * -1,
          sum: 0,
          values: [],
          count: 0
        };
        if (Ra(e) === "object") {
          e = Object.values(e);
        }
        e.forEach(function (e) {
          if (t && Ra(e) === "object") {
            e = e[t];
          }
          if (e != null && !isNaN(e)) {
            r.values.push(e);
            r.sum += e;
            if (e < r.min) {
              r.min = e;
            }
            if (e > r.max) {
              r.max = e;
            }
            r.count += 1;
          }
        });
        r.domain = [r.min, r.max];
        r.limits = function (e, t) {
          return qa(r, e, t);
        };
        return r;
      };
      var qa = function (e, t = "equal", r = 7) {
        if (Ra(e) == "array") {
          e = $a(e);
        }
        var n = e.min;
        var o = e.max;
        var a = e.values.sort(function (e, t) {
          return e - t;
        });
        if (r === 1) {
          return [n, o];
        }
        var i = [];
        if (t.substr(0, 1) === "c") {
          i.push(n);
          i.push(o);
        }
        if (t.substr(0, 1) === "e") {
          i.push(n);
          for (var c = 1; c < r; c++) {
            i.push(n + c / r * (o - n));
          }
          i.push(o);
        } else if (t.substr(0, 1) === "l") {
          if (n <= 0) {
            throw new Error("Logarithmic scales are only possible for values > 0");
          }
          var s = Math.LOG10E * za(n);
          var l = Math.LOG10E * za(o);
          i.push(n);
          for (var u = 1; u < r; u++) {
            i.push(Ha(10, s + u / r * (l - s)));
          }
          i.push(o);
        } else if (t.substr(0, 1) === "q") {
          i.push(n);
          for (var f = 1; f < r; f++) {
            var d = (a.length - 1) * f / r;
            var h = Na(d);
            if (h === d) {
              i.push(a[h]);
            } else {
              var p = d - h;
              i.push(a[h] * (1 - p) + a[h + 1] * p);
            }
          }
          i.push(o);
        } else if (t.substr(0, 1) === "k") {
          var g;
          var y = a.length;
          var v = new Array(y);
          var b = new Array(r);
          var m = true;
          var w = 0;
          var _ = null;
          (_ = []).push(n);
          for (var k = 1; k < r; k++) {
            _.push(n + k / r * (o - n));
          }
          for (_.push(o); m;) {
            for (var A = 0; A < r; A++) {
              b[A] = 0;
            }
            for (var E = 0; E < y; E++) {
              var C = a[E];
              var x = Number.MAX_VALUE;
              var S = undefined;
              for (var O = 0; O < r; O++) {
                var B = Wa(_[O] - C);
                if (B < x) {
                  x = B;
                  S = O;
                }
                b[S]++;
                v[E] = S;
              }
            }
            var j = new Array(r);
            for (var D = 0; D < r; D++) {
              j[D] = null;
            }
            for (var F = 0; F < y; F++) {
              if (j[g = v[F]] === null) {
                j[g] = a[F];
              } else {
                j[g] += a[F];
              }
            }
            for (var P = 0; P < r; P++) {
              j[P] *= 1 / b[P];
            }
            m = false;
            for (var M = 0; M < r; M++) {
              if (j[M] !== _[M]) {
                m = true;
                break;
              }
            }
            _ = j;
            if (++w > 200) {
              m = false;
            }
          }
          var T = {};
          for (var I = 0; I < r; I++) {
            T[I] = [];
          }
          for (var L = 0; L < y; L++) {
            T[g = v[L]].push(a[L]);
          }
          var Z = [];
          for (var U = 0; U < r; U++) {
            Z.push(T[U][0]);
            Z.push(T[U][T[U].length - 1]);
          }
          Z = Z.sort(function (e, t) {
            return e - t;
          });
          i.push(Z[0]);
          for (var R = 1; R < Z.length; R += 2) {
            var z = Z[R];
            if (!isNaN(z) && i.indexOf(z) === -1) {
              i.push(z);
            }
          }
        }
        return i;
      };
      var Ya = {
        analyze: $a,
        limits: qa
      };
      var Qa = w;
      var Va = function (e, t) {
        e = new Qa(e);
        t = new Qa(t);
        var r = e.luminance();
        var n = t.luminance();
        if (r > n) {
          return (r + 0.05) / (n + 0.05);
        } else {
          return (n + 0.05) / (r + 0.05);
        }
      };
      var Ga = w;
      var Ka = Math.sqrt;
      var Ja = Math.pow;
      var Xa = Math.min;
      var ei = Math.max;
      var ti = Math.atan2;
      var ri = Math.abs;
      var ni = Math.cos;
      var oi = Math.sin;
      var ai = Math.exp;
      var ii = Math.PI;
      var ci = function (e, t, r = 1, n = 1, o = 1) {
        function a(e) {
          return e * 360 / (ii * 2);
        }
        function i(e) {
          return ii * 2 * e / 360;
        }
        e = new Ga(e);
        t = new Ga(t);
        var c = Array.from(e.lab());
        var s = c[0];
        var l = c[1];
        var u = c[2];
        var f = Array.from(t.lab());
        var d = f[0];
        var h = f[1];
        var p = f[2];
        var g = (s + d) / 2;
        var y = (Ka(Ja(l, 2) + Ja(u, 2)) + Ka(Ja(h, 2) + Ja(p, 2))) / 2;
        var v = (1 - Ka(Ja(y, 7) / (Ja(y, 7) + Ja(25, 7)))) * 0.5;
        var b = l * (1 + v);
        var m = h * (1 + v);
        var w = Ka(Ja(b, 2) + Ja(u, 2));
        var _ = Ka(Ja(m, 2) + Ja(p, 2));
        var k = (w + _) / 2;
        var A = a(ti(u, b));
        var E = a(ti(p, m));
        var C = A >= 0 ? A : A + 360;
        var x = E >= 0 ? E : E + 360;
        var S = ri(C - x) > 180 ? (C + x + 360) / 2 : (C + x) / 2;
        var O = 1 - ni(i(S - 30)) * 0.17 + ni(i(S * 2)) * 0.24 + ni(i(S * 3 + 6)) * 0.32 - ni(i(S * 4 - 63)) * 0.2;
        var B = x - C;
        B = ri(B) <= 180 ? B : x <= C ? B + 360 : B - 360;
        B = Ka(w * _) * 2 * oi(i(B) / 2);
        var j = d - s;
        var D = _ - w;
        var F = 1 + Ja(g - 50, 2) * 0.015 / Ka(20 + Ja(g - 50, 2));
        var P = 1 + k * 0.045;
        var M = 1 + k * 0.015 * O;
        var T = ai(-Ja((S - 275) / 25, 2)) * 30;
        var I = Ka(Ja(k, 7) / (Ja(k, 7) + Ja(25, 7))) * -2 * oi(i(T) * 2);
        var L = Ka(Ja(j / (r * F), 2) + Ja(D / (n * P), 2) + Ja(B / (o * M), 2) + I * (D / (n * P)) * (B / (o * M)));
        return ei(0, Xa(100, L));
      };
      var si = w;
      var li = function (e, t, r = "lab") {
        e = new si(e);
        t = new si(t);
        var n = e.get(r);
        var o = t.get(r);
        var a = 0;
        for (var i in n) {
          var c = (n[i] || 0) - (o[i] || 0);
          a += c * c;
        }
        return Math.sqrt(a);
      };
      var ui = w;
      var fi = function () {
        var e = [];
        for (var t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        try {
          new (Function.prototype.bind.apply(ui, [null].concat(e)))();
          return true;
        } catch (e) {
          return false;
        }
      };
      var di = k;
      var hi = ca;
      var pi = {
        cool: function () {
          return hi([di.hsl(180, 1, 0.9), di.hsl(250, 0.7, 0.4)]);
        },
        hot: function () {
          return hi(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
        }
      };
      var gi = {
        OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
        PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
        BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
        Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
        BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
        YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
        YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
        Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
        RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
        Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
        YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
        Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
        GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
        Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
        YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
        PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
        Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
        PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
        Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
        Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
        RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
        RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
        PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
        PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
        RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
        BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
        RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
        PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
        Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
        Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
        Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
        Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
        Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
        Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
        Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
        Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
      };
      for (var yi = 0, vi = Object.keys(gi); yi < vi.length; yi += 1) {
        var bi = vi[yi];
        gi[bi.toLowerCase()] = gi[bi];
      }
      var mi = gi;
      var wi = k;
      wi.average = ra;
      wi.bezier = ha;
      wi.blend = xa;
      wi.cubehelix = Ma;
      wi.mix = wi.interpolate = po;
      wi.random = Ua;
      wi.scale = ca;
      wi.analyze = Ya.analyze;
      wi.contrast = Va;
      wi.deltaE = ci;
      wi.distance = li;
      wi.limits = Ya.limits;
      wi.valid = fi;
      wi.scales = pi;
      wi.colors = Ir;
      wi.brewer = mi;
      return wi;
    }();
  },
  2150: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => d
    });
    const n = function () {
      this.__data__ = [];
      this.size = 0;
    };
    var o = r(7422);
    const a = function (e, t) {
      for (var r = e.length; r--;) {
        if ((0, o.Z)(e[r][0], t)) {
          return r;
        }
      }
      return -1;
    };
    var i = Array.prototype.splice;
    const c = function (e) {
      var t = this.__data__;
      var r = a(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, true);
    };
    const s = function (e) {
      var t = this.__data__;
      var r = a(t, e);
      if (r < 0) {
        return undefined;
      } else {
        return t[r][1];
      }
    };
    const l = function (e) {
      return a(this.__data__, e) > -1;
    };
    const u = function (e, t) {
      var r = this.__data__;
      var n = a(r, e);
      if (n < 0) {
        ++this.size;
        r.push([e, t]);
      } else {
        r[n][1] = t;
      }
      return this;
    };
    function f(e) {
      var t = -1;
      var r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    f.prototype.clear = n;
    f.prototype.delete = c;
    f.prototype.get = s;
    f.prototype.has = l;
    f.prototype.set = u;
    const d = f;
  },
  2512: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => a
    });
    var n = r(5822);
    var o = r(6247);
    const a = (0, n.Z)(o.Z, "Map");
  },
  7132: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => A
    });
    const n = (0, r(5822).Z)(Object, "create");
    const o = function () {
      this.__data__ = n ? n(null) : {};
      this.size = 0;
    };
    const a = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      this.size -= t ? 1 : 0;
      return t;
    };
    var i = Object.prototype.hasOwnProperty;
    const c = function (e) {
      var t = this.__data__;
      if (n) {
        var r = t[e];
        if (r === "__lodash_hash_undefined__") {
          return undefined;
        } else {
          return r;
        }
      }
      if (i.call(t, e)) {
        return t[e];
      } else {
        return undefined;
      }
    };
    var s = Object.prototype.hasOwnProperty;
    const l = function (e) {
      var t = this.__data__;
      if (n) {
        return t[e] !== undefined;
      } else {
        return s.call(t, e);
      }
    };
    const u = function (e, t) {
      var r = this.__data__;
      this.size += this.has(e) ? 0 : 1;
      r[e] = n && t === undefined ? "__lodash_hash_undefined__" : t;
      return this;
    };
    function f(e) {
      var t = -1;
      var r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    f.prototype.clear = o;
    f.prototype.delete = a;
    f.prototype.get = c;
    f.prototype.has = l;
    f.prototype.set = u;
    const d = f;
    var h = r(2150);
    var p = r(2512);
    const g = function () {
      this.size = 0;
      this.__data__ = {
        hash: new d(),
        map: new (p.Z || h.Z)(),
        string: new d()
      };
    };
    const y = function (e) {
      var t = typeof e;
      if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
        return e !== "__proto__";
      } else {
        return e === null;
      }
    };
    const v = function (e, t) {
      var r = e.__data__;
      if (y(t)) {
        return r[typeof t == "string" ? "string" : "hash"];
      } else {
        return r.map;
      }
    };
    const b = function (e) {
      var t = v(this, e).delete(e);
      this.size -= t ? 1 : 0;
      return t;
    };
    const m = function (e) {
      return v(this, e).get(e);
    };
    const w = function (e) {
      return v(this, e).has(e);
    };
    const _ = function (e, t) {
      var r = v(this, e);
      var n = r.size;
      r.set(e, t);
      this.size += r.size == n ? 0 : 1;
      return this;
    };
    function k(e) {
      var t = -1;
      var r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    k.prototype.clear = g;
    k.prototype.delete = b;
    k.prototype.get = m;
    k.prototype.has = w;
    k.prototype.set = _;
    const A = k;
  },
  7408: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => a
    });
    var n = r(5822);
    var o = r(6247);
    const a = (0, n.Z)(o.Z, "Set");
  },
  7990: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => c
    });
    var n = r(7132);
    const o = function (e) {
      this.__data__.set(e, "__lodash_hash_undefined__");
      return this;
    };
    const a = function (e) {
      return this.__data__.has(e);
    };
    function i(e) {
      var t = -1;
      var r = e == null ? 0 : e.length;
      for (this.__data__ = new n.Z(); ++t < r;) {
        this.add(e[t]);
      }
    }
    i.prototype.add = i.prototype.push = o;
    i.prototype.has = a;
    const c = i;
  },
  4287: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => d
    });
    var n = r(2150);
    const o = function () {
      this.__data__ = new n.Z();
      this.size = 0;
    };
    const a = function (e) {
      var t = this.__data__;
      var r = t.delete(e);
      this.size = t.size;
      return r;
    };
    const i = function (e) {
      return this.__data__.get(e);
    };
    const c = function (e) {
      return this.__data__.has(e);
    };
    var s = r(2512);
    var l = r(7132);
    const u = function (e, t) {
      var r = this.__data__;
      if (r instanceof n.Z) {
        var o = r.__data__;
        if (!s.Z || o.length < 199) {
          o.push([e, t]);
          this.size = ++r.size;
          return this;
        }
        r = this.__data__ = new l.Z(o);
      }
      r.set(e, t);
      this.size = r.size;
      return this;
    };
    function f(e) {
      var t = this.__data__ = new n.Z(e);
      this.size = t.size;
    }
    f.prototype.clear = o;
    f.prototype.delete = a;
    f.prototype.get = i;
    f.prototype.has = c;
    f.prototype.set = u;
    const d = f;
  },
  7771: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = r(6247).Z.Uint8Array;
  },
  5246: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => u
    });
    const n = function (e, t) {
      for (var r = -1, n = Array(e); ++r < e;) {
        n[r] = t(r);
      }
      return n;
    };
    var o = r(9091);
    var a = r(3829);
    var i = r(8637);
    var c = r(684);
    var s = r(2787);
    var l = Object.prototype.hasOwnProperty;
    const u = function (e, t) {
      var r = (0, a.Z)(e);
      var u = !r && (0, o.Z)(e);
      var f = !r && !u && (0, i.Z)(e);
      var d = !r && !u && !f && (0, s.Z)(e);
      var h = r || u || f || d;
      var p = h ? n(e.length, String) : [];
      var g = p.length;
      for (var y in e) {
        if ((!!t || !!l.call(e, y)) && (!h || y != "length" && (!f || y != "offset" && y != "parent") && (!d || y != "buffer" && y != "byteLength" && y != "byteOffset") && !(0, c.Z)(y, g))) {
          p.push(y);
        }
      }
      return p;
    };
  },
  2939: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n;) {
        e[o + r] = t[r];
      }
      return e;
    };
  },
  1074: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => i
    });
    var n = r(4365);
    var o = r(7422);
    var a = Object.prototype.hasOwnProperty;
    const i = function (e, t, r) {
      var i = e[t];
      if (!a.call(e, t) || !(0, o.Z)(i, r) || r === undefined && !(t in e)) {
        (0, n.Z)(e, t, r);
      }
    };
  },
  4365: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => o
    });
    var n = r(1142);
    const o = function (e, t, r) {
      if (t == "__proto__" && n.Z) {
        (0, n.Z)(e, t, {
          configurable: true,
          enumerable: true,
          value: r,
          writable: true
        });
      } else {
        e[t] = r;
      }
    };
  },
  3682: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => a
    });
    var n = r(9174);
    var o = r(6147);
    const a = function (e, t) {
      for (var r = 0, a = (t = (0, n.Z)(t, e)).length; e != null && r < a;) {
        e = e[(0, o.Z)(t[r++])];
      }
      if (r && r == a) {
        return e;
      } else {
        return undefined;
      }
    };
  },
  3292: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => a
    });
    var n = r(2939);
    var o = r(3829);
    const a = function (e, t, r) {
      var a = t(e);
      if ((0, o.Z)(e)) {
        return a;
      } else {
        return (0, n.Z)(a, r(e));
      }
    };
  },
  4275: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => Y
    });
    var n = r(4287);
    var o = r(7990);
    const a = function (e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n;) {
        if (t(e[r], r, e)) {
          return true;
        }
      }
      return false;
    };
    var i = r(8658);
    const c = function (e, t, r, n, c, s) {
      var l = r & 1;
      var u = e.length;
      var f = t.length;
      if (u != f && (!l || !(f > u))) {
        return false;
      }
      var d = s.get(e);
      var h = s.get(t);
      if (d && h) {
        return d == t && h == e;
      }
      var p = -1;
      var g = true;
      var y = r & 2 ? new o.Z() : undefined;
      s.set(e, t);
      s.set(t, e);
      while (++p < u) {
        var v = e[p];
        var b = t[p];
        if (n) {
          var m = l ? n(b, v, p, t, e, s) : n(v, b, p, e, t, s);
        }
        if (m !== undefined) {
          if (m) {
            continue;
          }
          g = false;
          break;
        }
        if (y) {
          if (!a(t, function (e, t) {
            if (!(0, i.Z)(y, t) && (v === e || c(v, e, r, n, s))) {
              return y.push(t);
            }
          })) {
            g = false;
            break;
          }
        } else if (v !== b && !c(v, b, r, n, s)) {
          g = false;
          break;
        }
      }
      s.delete(e);
      s.delete(t);
      return g;
    };
    var s = r(6604);
    var l = r(7771);
    var u = r(7422);
    const f = function (e) {
      var t = -1;
      var r = Array(e.size);
      e.forEach(function (e, n) {
        r[++t] = [n, e];
      });
      return r;
    };
    var d = r(1291);
    var h = s.Z ? s.Z.prototype : undefined;
    var p = h ? h.valueOf : undefined;
    const g = function (e, t, r, n, o, a, i) {
      switch (r) {
        case "[object DataView]":
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
            return false;
          }
          e = e.buffer;
          t = t.buffer;
        case "[object ArrayBuffer]":
          return e.byteLength == t.byteLength && !!a(new l.Z(e), new l.Z(t));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return (0, u.Z)(+e, +t);
        case "[object Error]":
          return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
          return e == t + "";
        case "[object Map]":
          var s = f;
        case "[object Set]":
          var h = n & 1;
          s ||= d.Z;
          if (e.size != t.size && !h) {
            return false;
          }
          var g = i.get(e);
          if (g) {
            return g == t;
          }
          n |= 2;
          i.set(e, t);
          var y = c(s(e), s(t), n, o, a, i);
          i.delete(e);
          return y;
        case "[object Symbol]":
          if (p) {
            return p.call(e) == p.call(t);
          }
      }
      return false;
    };
    var y = r(6224);
    var v = Object.prototype.hasOwnProperty;
    const b = function (e, t, r, n, o, a) {
      var i = r & 1;
      var c = (0, y.Z)(e);
      var s = c.length;
      if (s != (0, y.Z)(t).length && !i) {
        return false;
      }
      for (var l = s; l--;) {
        var u = c[l];
        if (!(i ? u in t : v.call(t, u))) {
          return false;
        }
      }
      var f = a.get(e);
      var d = a.get(t);
      if (f && d) {
        return f == t && d == e;
      }
      var h = true;
      a.set(e, t);
      a.set(t, e);
      var p = i;
      for (; ++l < s;) {
        var g = e[u = c[l]];
        var b = t[u];
        if (n) {
          var m = i ? n(b, g, u, t, e, a) : n(g, b, u, e, t, a);
        }
        if (!(m === undefined ? g === b || o(g, b, r, n, a) : m)) {
          h = false;
          break;
        }
        p ||= u == "constructor";
      }
      if (h && !p) {
        var w = e.constructor;
        var _ = t.constructor;
        if (w != _ && !!("constructor" in e) && !!("constructor" in t) && (typeof w != "function" || !(w instanceof w) || typeof _ != "function" || !(_ instanceof _))) {
          h = false;
        }
      }
      a.delete(e);
      a.delete(t);
      return h;
    };
    var m = r(1506);
    var w = r(3829);
    var _ = r(8637);
    var k = r(2787);
    var A = "[object Arguments]";
    var E = "[object Array]";
    var C = "[object Object]";
    var x = Object.prototype.hasOwnProperty;
    const S = function (e, t, r, o, a, i) {
      var s = (0, w.Z)(e);
      var l = (0, w.Z)(t);
      var u = s ? E : (0, m.Z)(e);
      var f = l ? E : (0, m.Z)(t);
      var d = (u = u == A ? C : u) == C;
      var h = (f = f == A ? C : f) == C;
      var p = u == f;
      if (p && (0, _.Z)(e)) {
        if (!(0, _.Z)(t)) {
          return false;
        }
        s = true;
        d = false;
      }
      if (p && !d) {
        i ||= new n.Z();
        if (s || (0, k.Z)(e)) {
          return c(e, t, r, o, a, i);
        } else {
          return g(e, t, u, r, o, a, i);
        }
      }
      if (!(r & 1)) {
        var y = d && x.call(e, "__wrapped__");
        var v = h && x.call(t, "__wrapped__");
        if (y || v) {
          var S = y ? e.value() : e;
          var O = v ? t.value() : t;
          i ||= new n.Z();
          return a(S, O, r, o, i);
        }
      }
      return !!p && (i ||= new n.Z(), b(e, t, r, o, a, i));
    };
    var O = r(365);
    const B = function e(t, r, n, o, a) {
      return t === r || (t == null || r == null || !(0, O.Z)(t) && !(0, O.Z)(r) ? t != t && r != r : S(t, r, n, o, e, a));
    };
    const j = function (e, t, r, o) {
      var a = r.length;
      var i = a;
      var c = !o;
      if (e == null) {
        return !i;
      }
      for (e = Object(e); a--;) {
        var s = r[a];
        if (c && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) {
          return false;
        }
      }
      while (++a < i) {
        var l = (s = r[a])[0];
        var u = e[l];
        var f = s[1];
        if (c && s[2]) {
          if (u === undefined && !(l in e)) {
            return false;
          }
        } else {
          var d = new n.Z();
          if (o) {
            var h = o(u, f, l, e, t, d);
          }
          if (!(h === undefined ? B(f, u, 3, o, d) : h)) {
            return false;
          }
        }
      }
      return true;
    };
    var D = r(9860);
    const F = function (e) {
      return e == e && !(0, D.Z)(e);
    };
    var P = r(4348);
    const M = function (e) {
      var t = (0, P.Z)(e);
      for (var r = t.length; r--;) {
        var n = t[r];
        var o = e[n];
        t[r] = [n, o, F(o)];
      }
      return t;
    };
    const T = function (e, t) {
      return function (r) {
        return r != null && r[e] === t && (t !== undefined || e in Object(r));
      };
    };
    const I = function (e) {
      var t = M(e);
      if (t.length == 1 && t[0][2]) {
        return T(t[0][0], t[0][1]);
      } else {
        return function (r) {
          return r === e || j(r, e, t);
        };
      }
    };
    var L = r(3682);
    const Z = function (e, t, r) {
      var n = e == null ? undefined : (0, L.Z)(e, t);
      if (n === undefined) {
        return r;
      } else {
        return n;
      }
    };
    var U = r(5031);
    var R = r(7796);
    var z = r(6147);
    const H = function (e, t) {
      if ((0, R.Z)(e) && F(t)) {
        return T((0, z.Z)(e), t);
      } else {
        return function (r) {
          var n = Z(r, e);
          if (n === undefined && n === t) {
            return (0, U.Z)(r, e);
          } else {
            return B(t, n, 3);
          }
        };
      }
    };
    var N = r(4084);
    const W = function (e) {
      return function (t) {
        if (t == null) {
          return undefined;
        } else {
          return t[e];
        }
      };
    };
    const $ = function (e) {
      return function (t) {
        return (0, L.Z)(t, e);
      };
    };
    const q = function (e) {
      if ((0, R.Z)(e)) {
        return W((0, z.Z)(e));
      } else {
        return $(e);
      }
    };
    const Y = function (e) {
      if (typeof e == "function") {
        return e;
      } else if (e == null) {
        return N.Z;
      } else if (typeof e == "object") {
        if ((0, w.Z)(e)) {
          return H(e[0], e[1]);
        } else {
          return I(e);
        }
      } else {
        return q(e);
      }
    };
  },
  7782: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => u
    });
    var n = r(3682);
    var o = r(1074);
    var a = r(9174);
    var i = r(684);
    var c = r(9860);
    var s = r(6147);
    const l = function (e, t, r, n) {
      if (!(0, c.Z)(e)) {
        return e;
      }
      for (var l = -1, u = (t = (0, a.Z)(t, e)).length, f = u - 1, d = e; d != null && ++l < u;) {
        var h = (0, s.Z)(t[l]);
        var p = r;
        if (h === "__proto__" || h === "constructor" || h === "prototype") {
          return e;
        }
        if (l != f) {
          var g = d[h];
          if ((p = n ? n(g, h, d) : undefined) === undefined) {
            p = (0, c.Z)(g) ? g : (0, i.Z)(t[l + 1]) ? [] : {};
          }
        }
        (0, o.Z)(d, h, p);
        d = d[h];
      }
      return e;
    };
    const u = function (e, t, r) {
      for (var o = -1, i = t.length, c = {}; ++o < i;) {
        var s = t[o];
        var u = (0, n.Z)(e, s);
        if (r(u, s)) {
          l(c, (0, a.Z)(s, e), u);
        }
      }
      return c;
    };
  },
  4828: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => i
    });
    var n = r(4084);
    var o = r(2707);
    var a = r(2253);
    const i = function (e, t) {
      return (0, a.Z)((0, o.Z)(e, t, n.Z), e + "");
    };
  },
  4054: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e) {
      return function (t) {
        return e(t);
      };
    };
  },
  8658: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e, t) {
      return e.has(t);
    };
  },
  9174: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => d
    });
    var n = r(3829);
    var o = r(7796);
    var a = r(7132);
    function i(e, t) {
      if (typeof e != "function" || t != null && typeof t != "function") {
        throw new TypeError("Expected a function");
      }
      function r() {
        var n = arguments;
        var o = t ? t.apply(this, n) : n[0];
        var a = r.cache;
        if (a.has(o)) {
          return a.get(o);
        }
        var i = e.apply(this, n);
        r.cache = a.set(o, i) || a;
        return i;
      }
      r.cache = new (i.Cache || a.Z)();
      return r;
    }
    i.Cache = a.Z;
    const c = i;
    var s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var l = /\\(\\)?/g;
    const u = function (e) {
      var t = c(e, function (e) {
        if (r.size === 500) {
          r.clear();
        }
        return e;
      });
      var r = t.cache;
      return t;
    }(function (e) {
      var t = [];
      if (e.charCodeAt(0) === 46) {
        t.push("");
      }
      e.replace(s, function (e, r, n, o) {
        t.push(n ? o.replace(l, "$1") : r || e);
      });
      return t;
    });
    var f = r(6223);
    const d = function (e, t) {
      if ((0, n.Z)(e)) {
        return e;
      } else if ((0, o.Z)(e, t)) {
        return [e];
      } else {
        return u((0, f.Z)(e));
      }
    };
  },
  8039: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e, t) {
      var r = -1;
      var n = e.length;
      for (t ||= Array(n); ++r < n;) {
        t[r] = e[r];
      }
      return t;
    };
  },
  1142: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => o
    });
    var n = r(5822);
    const o = function () {
      try {
        var e = (0, n.Z)(Object, "defineProperty");
        e({}, "", {});
        return e;
      } catch (e) {}
    }();
  },
  6224: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => i
    });
    var n = r(3292);
    var o = r(9455);
    var a = r(4348);
    const i = function (e) {
      return (0, n.Z)(e, a.Z, o.Z);
    };
  },
  1579: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => i
    });
    var n = r(3292);
    var o = r(9806);
    var a = r(2198);
    const i = function (e) {
      return (0, n.Z)(e, a.Z, o.Z);
    };
  },
  5822: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => b
    });
    var n = r(4547);
    const o = r(6247).Z["__core-js_shared__"];
    var a;
    var i = (a = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + a : "";
    const c = function (e) {
      return !!i && i in e;
    };
    var s = r(9860);
    var l = r(1509);
    var u = /^\[object .+?Constructor\]$/;
    var f = Function.prototype;
    var d = Object.prototype;
    var h = f.toString;
    var p = d.hasOwnProperty;
    var g = RegExp("^" + h.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    const y = function (e) {
      return !!(0, s.Z)(e) && !c(e) && ((0, n.Z)(e) ? g : u).test((0, l.Z)(e));
    };
    const v = function (e, t) {
      if (e == null) {
        return undefined;
      } else {
        return e[t];
      }
    };
    const b = function (e, t) {
      var r = v(e, t);
      if (y(r)) {
        return r;
      } else {
        return undefined;
      }
    };
  },
  6408: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = (0, r(4932).Z)(Object.getPrototypeOf, Object);
  },
  9455: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => c
    });
    const n = function (e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n;) {
        var i = e[r];
        if (t(i, r, e)) {
          a[o++] = i;
        }
      }
      return a;
    };
    var o = r(2507);
    var a = Object.prototype.propertyIsEnumerable;
    var i = Object.getOwnPropertySymbols;
    const c = i ? function (e) {
      if (e == null) {
        return [];
      } else {
        e = Object(e);
        return n(i(e), function (t) {
          return a.call(e, t);
        });
      }
    } : o.Z;
  },
  9806: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => c
    });
    var n = r(2939);
    var o = r(6408);
    var a = r(9455);
    var i = r(2507);
    const c = Object.getOwnPropertySymbols ? function (e) {
      var t = [];
      for (; e;) {
        (0, n.Z)(t, (0, a.Z)(e));
        e = (0, o.Z)(e);
      }
      return t;
    } : i.Z;
  },
  1506: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => A
    });
    var n = r(5822);
    var o = r(6247);
    const a = (0, n.Z)(o.Z, "DataView");
    var i = r(2512);
    const c = (0, n.Z)(o.Z, "Promise");
    var s = r(7408);
    const l = (0, n.Z)(o.Z, "WeakMap");
    var u = r(6080);
    var f = r(1509);
    var d = "[object Map]";
    var h = "[object Promise]";
    var p = "[object Set]";
    var g = "[object WeakMap]";
    var y = "[object DataView]";
    var v = (0, f.Z)(a);
    var b = (0, f.Z)(i.Z);
    var m = (0, f.Z)(c);
    var w = (0, f.Z)(s.Z);
    var _ = (0, f.Z)(l);
    var k = u.Z;
    if (a && k(new a(new ArrayBuffer(1))) != y || i.Z && k(new i.Z()) != d || c && k(c.resolve()) != h || s.Z && k(new s.Z()) != p || l && k(new l()) != g) {
      k = function (e) {
        var t = (0, u.Z)(e);
        var r = t == "[object Object]" ? e.constructor : undefined;
        var n = r ? (0, f.Z)(r) : "";
        if (n) {
          switch (n) {
            case v:
              return y;
            case b:
              return d;
            case m:
              return h;
            case w:
              return p;
            case _:
              return g;
          }
        }
        return t;
      };
    }
    const A = k;
  },
  684: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => o
    });
    var n = /^(?:0|[1-9]\d*)$/;
    const o = function (e, t) {
      var r = typeof e;
      return !!(t = t == null ? 9007199254740991 : t) && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
    };
  },
  7796: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => c
    });
    var n = r(3829);
    var o = r(4282);
    var a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var i = /^\w*$/;
    const c = function (e, t) {
      if ((0, n.Z)(e)) {
        return false;
      }
      var r = typeof e;
      return r == "number" || r == "symbol" || r == "boolean" || e == null || !!(0, o.Z)(e) || i.test(e) || !a.test(e) || t != null && e in Object(t);
    };
  },
  9114: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => o
    });
    var n = Object.prototype;
    const o = function (e) {
      var t = e && e.constructor;
      return e === (typeof t == "function" && t.prototype || n);
    };
  },
  876: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => c
    });
    var n = r(4319);
    var o = typeof exports == "object" && exports && !exports.nodeType && exports;
    var a = o && typeof module == "object" && module && !module.nodeType && module;
    var i = a && a.exports === o && n.Z.process;
    const c = function () {
      try {
        var e = a && a.require && a.require("util").types;
        return e || i && i.binding && i.binding("util");
      } catch (e) {}
    }();
  },
  4932: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e, t) {
      return function (r) {
        return e(t(r));
      };
    };
  },
  2707: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => a
    });
    const n = function (e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    };
    var o = Math.max;
    const a = function (e, t, r) {
      t = o(t === undefined ? e.length - 1 : t, 0);
      return function () {
        var a = arguments;
        for (var i = -1, c = o(a.length - t, 0), s = Array(c); ++i < c;) {
          s[i] = a[t + i];
        }
        i = -1;
        var l = Array(t + 1);
        for (; ++i < t;) {
          l[i] = a[i];
        }
        l[t] = r(s);
        return n(e, this, l);
      };
    };
  },
  1291: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e) {
      var t = -1;
      var r = Array(e.size);
      e.forEach(function (e) {
        r[++t] = e;
      });
      return r;
    };
  },
  2253: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => s
    });
    const n = function (e) {
      return function () {
        return e;
      };
    };
    var o = r(1142);
    var a = r(4084);
    const i = o.Z ? function (e, t) {
      return (0, o.Z)(e, "toString", {
        configurable: true,
        enumerable: false,
        value: n(t),
        writable: true
      });
    } : a.Z;
    var c = Date.now;
    const s = function (e) {
      var t = 0;
      var r = 0;
      return function () {
        var n = c();
        var o = 16 - (n - r);
        r = n;
        if (o > 0) {
          if (++t >= 800) {
            return arguments[0];
          }
        } else {
          t = 0;
        }
        return e.apply(undefined, arguments);
      };
    }(i);
  },
  6147: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => o
    });
    var n = r(4282);
    const o = function (e) {
      if (typeof e == "string" || (0, n.Z)(e)) {
        return e;
      }
      var t = e + "";
      if (t == "0" && 1 / e == -Infinity) {
        return "-0";
      } else {
        return t;
      }
    };
  },
  1509: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => o
    });
    var n = Function.prototype.toString;
    const o = function (e) {
      if (e != null) {
        try {
          return n.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    };
  },
  5844: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => ce
    });
    var n = r(4287);
    const o = function (e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false;);
      return e;
    };
    var a = r(1074);
    var i = r(4365);
    const c = function (e, t, r, n) {
      var o = !r;
      r ||= {};
      for (var c = -1, s = t.length; ++c < s;) {
        var l = t[c];
        var u = n ? n(r[l], e[l], l, r, e) : undefined;
        if (u === undefined) {
          u = e[l];
        }
        if (o) {
          (0, i.Z)(r, l, u);
        } else {
          (0, a.Z)(r, l, u);
        }
      }
      return r;
    };
    var s = r(4348);
    const l = function (e, t) {
      return e && c(t, (0, s.Z)(t), e);
    };
    var u = r(2198);
    const f = function (e, t) {
      return e && c(t, (0, u.Z)(t), e);
    };
    var d = r(6247);
    var h = typeof exports == "object" && exports && !exports.nodeType && exports;
    var p = h && typeof module == "object" && module && !module.nodeType && module;
    var g = p && p.exports === h ? d.Z.Buffer : undefined;
    var y = g ? g.allocUnsafe : undefined;
    const v = function (e, t) {
      if (t) {
        return e.slice();
      }
      var r = e.length;
      var n = y ? y(r) : new e.constructor(r);
      e.copy(n);
      return n;
    };
    var b = r(8039);
    var m = r(9455);
    const w = function (e, t) {
      return c(e, (0, m.Z)(e), t);
    };
    var _ = r(9806);
    const k = function (e, t) {
      return c(e, (0, _.Z)(e), t);
    };
    var A = r(6224);
    var E = r(1579);
    var C = r(1506);
    var x = Object.prototype.hasOwnProperty;
    const S = function (e) {
      var t = e.length;
      var r = new e.constructor(t);
      if (t && typeof e[0] == "string" && x.call(e, "index")) {
        r.index = e.index;
        r.input = e.input;
      }
      return r;
    };
    var O = r(7771);
    const B = function (e) {
      var t = new e.constructor(e.byteLength);
      new O.Z(t).set(new O.Z(e));
      return t;
    };
    const j = function (e, t) {
      var r = t ? B(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.byteLength);
    };
    var D = /\w*$/;
    const F = function (e) {
      var t = new e.constructor(e.source, D.exec(e));
      t.lastIndex = e.lastIndex;
      return t;
    };
    var P = r(6604);
    var M = P.Z ? P.Z.prototype : undefined;
    var T = M ? M.valueOf : undefined;
    const I = function (e) {
      if (T) {
        return Object(T.call(e));
      } else {
        return {};
      }
    };
    const L = function (e, t) {
      var r = t ? B(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.length);
    };
    const Z = function (e, t, r) {
      var n = e.constructor;
      switch (t) {
        case "[object ArrayBuffer]":
          return B(e);
        case "[object Boolean]":
        case "[object Date]":
          return new n(+e);
        case "[object DataView]":
          return j(e, r);
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return L(e, r);
        case "[object Map]":
        case "[object Set]":
          return new n();
        case "[object Number]":
        case "[object String]":
          return new n(e);
        case "[object RegExp]":
          return F(e);
        case "[object Symbol]":
          return I(e);
      }
    };
    var U = r(9860);
    var R = Object.create;
    const z = function () {
      function e() {}
      return function (t) {
        if (!(0, U.Z)(t)) {
          return {};
        }
        if (R) {
          return R(t);
        }
        e.prototype = t;
        var r = new e();
        e.prototype = undefined;
        return r;
      };
    }();
    var H = r(6408);
    var N = r(9114);
    const W = function (e) {
      if (typeof e.constructor != "function" || (0, N.Z)(e)) {
        return {};
      } else {
        return z((0, H.Z)(e));
      }
    };
    var $ = r(3829);
    var q = r(8637);
    var Y = r(365);
    const Q = function (e) {
      return (0, Y.Z)(e) && (0, C.Z)(e) == "[object Map]";
    };
    var V = r(4054);
    var G = r(876);
    var K = G.Z && G.Z.isMap;
    const J = K ? (0, V.Z)(K) : Q;
    const X = function (e) {
      return (0, Y.Z)(e) && (0, C.Z)(e) == "[object Set]";
    };
    var ee = G.Z && G.Z.isSet;
    const te = ee ? (0, V.Z)(ee) : X;
    var re = "[object Arguments]";
    var ne = "[object Function]";
    var oe = "[object Object]";
    var ae = {};
    ae[re] = ae["[object Array]"] = ae["[object ArrayBuffer]"] = ae["[object DataView]"] = ae["[object Boolean]"] = ae["[object Date]"] = ae["[object Float32Array]"] = ae["[object Float64Array]"] = ae["[object Int8Array]"] = ae["[object Int16Array]"] = ae["[object Int32Array]"] = ae["[object Map]"] = ae["[object Number]"] = ae[oe] = ae["[object RegExp]"] = ae["[object Set]"] = ae["[object String]"] = ae["[object Symbol]"] = ae["[object Uint8Array]"] = ae["[object Uint8ClampedArray]"] = ae["[object Uint16Array]"] = ae["[object Uint32Array]"] = true;
    ae["[object Error]"] = ae[ne] = ae["[object WeakMap]"] = false;
    const ie = function e(t, r, i, c, d, h) {
      var p;
      var g = r & 1;
      var y = r & 2;
      var m = r & 4;
      if (i) {
        p = d ? i(t, c, d, h) : i(t);
      }
      if (p !== undefined) {
        return p;
      }
      if (!(0, U.Z)(t)) {
        return t;
      }
      var _ = (0, $.Z)(t);
      if (_) {
        p = S(t);
        if (!g) {
          return (0, b.Z)(t, p);
        }
      } else {
        var x = (0, C.Z)(t);
        var O = x == ne || x == "[object GeneratorFunction]";
        if ((0, q.Z)(t)) {
          return v(t, g);
        }
        if (x == oe || x == re || O && !d) {
          p = y || O ? {} : W(t);
          if (!g) {
            if (y) {
              return k(t, f(p, t));
            } else {
              return w(t, l(p, t));
            }
          }
        } else {
          if (!ae[x]) {
            if (d) {
              return t;
            } else {
              return {};
            }
          }
          p = Z(t, x, g);
        }
      }
      h ||= new n.Z();
      var B = h.get(t);
      if (B) {
        return B;
      }
      h.set(t, p);
      if (te(t)) {
        t.forEach(function (n) {
          p.add(e(n, r, i, n, t, h));
        });
      } else if (J(t)) {
        t.forEach(function (n, o) {
          p.set(o, e(n, r, i, o, t, h));
        });
      }
      var j = m ? y ? E.Z : A.Z : y ? u.Z : s.Z;
      var D = _ ? undefined : j(t);
      o(D || t, function (n, o) {
        if (D) {
          n = t[o = n];
        }
        (0, a.Z)(p, o, e(n, r, i, o, t, h));
      });
      return p;
    };
    const ce = function (e) {
      return ie(e, 5);
    };
  },
  7712: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e) {
      for (var t = -1, r = e == null ? 0 : e.length, n = 0, o = []; ++t < r;) {
        var a = e[t];
        if (a) {
          o[n++] = a;
        }
      }
      return o;
    };
  },
  8885: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => l
    });
    var n = r(9860);
    var o = r(6247);
    const a = function () {
      return o.Z.Date.now();
    };
    var i = r(1774);
    var c = Math.max;
    var s = Math.min;
    const l = function (e, t, r) {
      var o;
      var l;
      var u;
      var f;
      var d;
      var h;
      var p = 0;
      var g = false;
      var y = false;
      var v = true;
      if (typeof e != "function") {
        throw new TypeError("Expected a function");
      }
      function b(t) {
        var r = o;
        var n = l;
        o = l = undefined;
        p = t;
        return f = e.apply(n, r);
      }
      function m(e) {
        p = e;
        d = setTimeout(_, t);
        if (g) {
          return b(e);
        } else {
          return f;
        }
      }
      function w(e) {
        var r = e - h;
        return h === undefined || r >= t || r < 0 || y && e - p >= u;
      }
      function _() {
        var e = a();
        if (w(e)) {
          return k(e);
        }
        d = setTimeout(_, function (e) {
          var r = t - (e - h);
          if (y) {
            return s(r, u - (e - p));
          } else {
            return r;
          }
        }(e));
      }
      function k(e) {
        d = undefined;
        if (v && o) {
          return b(e);
        } else {
          o = l = undefined;
          return f;
        }
      }
      function A() {
        var e = a();
        var r = w(e);
        o = arguments;
        l = this;
        h = e;
        if (r) {
          if (d === undefined) {
            return m(h);
          }
          if (y) {
            clearTimeout(d);
            d = setTimeout(_, t);
            return b(h);
          }
        }
        if (d === undefined) {
          d = setTimeout(_, t);
        }
        return f;
      }
      t = (0, i.Z)(t) || 0;
      if ((0, n.Z)(r)) {
        g = !!r.leading;
        u = (y = "maxWait" in r) ? c((0, i.Z)(r.maxWait) || 0, t) : u;
        v = "trailing" in r ? !!r.trailing : v;
      }
      A.cancel = function () {
        if (d !== undefined) {
          clearTimeout(d);
        }
        p = 0;
        o = h = l = d = undefined;
      };
      A.flush = function () {
        if (d === undefined) {
          return f;
        } else {
          return k(a());
        }
      };
      return A;
    };
  },
  7422: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e, t) {
      return e === t || e != e && t != t;
    };
  },
  5031: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => f
    });
    const n = function (e, t) {
      return e != null && t in Object(e);
    };
    var o = r(9174);
    var a = r(9091);
    var i = r(3829);
    var c = r(684);
    var s = r(1962);
    var l = r(6147);
    const u = function (e, t, r) {
      for (var n = -1, u = (t = (0, o.Z)(t, e)).length, f = false; ++n < u;) {
        var d = (0, l.Z)(t[n]);
        if (!(f = e != null && r(e, d))) {
          break;
        }
        e = e[d];
      }
      if (f || ++n != u) {
        return f;
      } else {
        return !!(u = e == null ? 0 : e.length) && (0, s.Z)(u) && (0, c.Z)(d, u) && ((0, i.Z)(e) || (0, a.Z)(e));
      }
    };
    const f = function (e, t) {
      return e != null && u(e, t, n);
    };
  },
  4084: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e) {
      return e;
    };
  },
  9091: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => l
    });
    var n = r(6080);
    var o = r(365);
    const a = function (e) {
      return (0, o.Z)(e) && (0, n.Z)(e) == "[object Arguments]";
    };
    var i = Object.prototype;
    var c = i.hasOwnProperty;
    var s = i.propertyIsEnumerable;
    const l = a(function () {
      return arguments;
    }()) ? a : function (e) {
      return (0, o.Z)(e) && c.call(e, "callee") && !s.call(e, "callee");
    };
  },
  385: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => a
    });
    var n = r(4547);
    var o = r(1962);
    const a = function (e) {
      return e != null && (0, o.Z)(e.length) && !(0, n.Z)(e);
    };
  },
  8637: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => s
    });
    var n = r(6247);
    const o = function () {
      return false;
    };
    var a = typeof exports == "object" && exports && !exports.nodeType && exports;
    var i = a && typeof module == "object" && module && !module.nodeType && module;
    var c = i && i.exports === a ? n.Z.Buffer : undefined;
    const s = (c ? c.isBuffer : undefined) || o;
  },
  4547: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => a
    });
    var n = r(6080);
    var o = r(9860);
    const a = function (e) {
      if (!(0, o.Z)(e)) {
        return false;
      }
      var t = (0, n.Z)(e);
      return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
    };
  },
  1962: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function (e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    };
  },
  2787: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => f
    });
    var n = r(6080);
    var o = r(1962);
    var a = r(365);
    var i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = true;
    i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = false;
    const c = function (e) {
      return (0, a.Z)(e) && (0, o.Z)(e.length) && !!i[(0, n.Z)(e)];
    };
    var s = r(4054);
    var l = r(876);
    var u = l.Z && l.Z.isTypedArray;
    const f = u ? (0, s.Z)(u) : c;
  },
  4348: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => l
    });
    var n = r(5246);
    var o = r(9114);
    const a = (0, r(4932).Z)(Object.keys, Object);
    var i = Object.prototype.hasOwnProperty;
    const c = function (e) {
      if (!(0, o.Z)(e)) {
        return a(e);
      }
      var t = [];
      for (var r in Object(e)) {
        if (i.call(e, r) && r != "constructor") {
          t.push(r);
        }
      }
      return t;
    };
    var s = r(385);
    const l = function (e) {
      if ((0, s.Z)(e)) {
        return (0, n.Z)(e);
      } else {
        return c(e);
      }
    };
  },
  2198: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => u
    });
    var n = r(5246);
    var o = r(9860);
    var a = r(9114);
    const i = function (e) {
      var t = [];
      if (e != null) {
        for (var r in Object(e)) {
          t.push(r);
        }
      }
      return t;
    };
    var c = Object.prototype.hasOwnProperty;
    const s = function (e) {
      if (!(0, o.Z)(e)) {
        return i(e);
      }
      var t = (0, a.Z)(e);
      var r = [];
      for (var n in e) {
        if (n != "constructor" || !t && c.call(e, n)) {
          r.push(n);
        }
      }
      return r;
    };
    var l = r(385);
    const u = function (e) {
      if ((0, l.Z)(e)) {
        return (0, n.Z)(e, true);
      } else {
        return s(e);
      }
    };
  },
  4470: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => y
    });
    var n = r(7782);
    var o = r(5031);
    const a = function (e, t) {
      return (0, n.Z)(e, t, function (t, r) {
        return (0, o.Z)(e, r);
      });
    };
    var i = r(2939);
    var c = r(6604);
    var s = r(9091);
    var l = r(3829);
    var u = c.Z ? c.Z.isConcatSpreadable : undefined;
    const f = function (e) {
      return (0, l.Z)(e) || (0, s.Z)(e) || !!u && !!e && !!e[u];
    };
    const d = function e(t, r, n, o, a) {
      var c = -1;
      var s = t.length;
      n ||= f;
      a ||= [];
      while (++c < s) {
        var l = t[c];
        if (r > 0 && n(l)) {
          if (r > 1) {
            e(l, r - 1, n, o, a);
          } else {
            (0, i.Z)(a, l);
          }
        } else if (!o) {
          a[a.length] = l;
        }
      }
      return a;
    };
    const h = function (e) {
      if (e == null ? 0 : e.length) {
        return d(e, 1);
      } else {
        return [];
      }
    };
    var p = r(2707);
    var g = r(2253);
    const y = function (e) {
      return (0, g.Z)((0, p.Z)(e, undefined, h), e + "");
    }(function (e, t) {
      if (e == null) {
        return {};
      } else {
        return a(e, t);
      }
    });
  },
  2507: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => n
    });
    const n = function () {
      return [];
    };
  },
  5911: (e, t, r) => {
    "use strict";

    r.d(t, {
      Z: () => a
    });
    var n = r(8885);
    var o = r(9860);
    const a = function (e, t, r) {
      var a = true;
      var i = true;
      if (typeof e != "function") {
        throw new TypeError("Expected a function");
      }
      if ((0, o.Z)(r)) {
        a = "leading" in r ? !!r.leading : a;
        i = "trailing" in r ? !!r.trailing : i;
      }
      return (0, n.Z)(e, t, {
        leading: a,
        maxWait: t,
        trailing: i
      });
    };
  },
  5762: (e, t, r) => {
    "use strict";

    r.d(t, {
      i9H: () => p
    });
    var n;
    var o = r(6121);
    var a = r(9445);
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    const i = typeof window != "undefined";
    Object.prototype.toString;
    const c = () => {};
    if (i && ((n = window == null ? undefined : window.navigator) == null ? undefined : n.userAgent)) {
      /iP(ad|hone|od)/.test(window.navigator.userAgent);
    }
    function s(e) {
      if (typeof e == "function") {
        return e();
      } else {
        return (0, a.SU)(e);
      }
    }
    o.$B;
    o.$B;
    o.$B;
    function l(e) {
      return !!(0, a.nZ)() && ((0, a.EB)(e), true);
    }
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    var u = r(7268);
    function f(e) {
      const r = s(e);
      return (r == null ? undefined : r.$el) ?? r;
    }
    const d = i ? window : undefined;
    if (i) {
      window.document;
    }
    if (i) {
      window.navigator;
    }
    if (i) {
      window.location;
    }
    function h(...e) {
      let t;
      let r;
      let n;
      let o;
      if (typeof e[0] == "string" || Array.isArray(e[0])) {
        [r, n, o] = e;
        t = d;
      } else {
        [t, r, n, o] = e;
      }
      if (!t) {
        return c;
      }
      if (!Array.isArray(r)) {
        r = [r];
      }
      if (!Array.isArray(n)) {
        n = [n];
      }
      const a = [];
      const i = () => {
        a.forEach(e => e());
        a.length = 0;
      };
      const s = (0, u.YP)(() => f(t), e => {
        i();
        if (e) {
          a.push(...r.flatMap(t => n.map(r => ((e, t, r) => {
            e.addEventListener(t, r, o);
            return () => e.removeEventListener(t, r, o);
          })(e, t, r))));
        }
      }, {
        immediate: true,
        flush: "post"
      });
      const h = () => {
        s();
        i();
      };
      l(h);
      return h;
    }
    function p(e, t, r = {}) {
      const {
        window: n = d,
        ignore: o,
        capture: a = true,
        detectIframe: i = false
      } = r;
      if (!n) {
        return;
      }
      let c;
      let s = true;
      const l = r => {
        n.clearTimeout(c);
        const o = f(e);
        if (o && o !== r.target && !r.composedPath().includes(o)) {
          if (s) {
            t(r);
          } else {
            s = true;
          }
        }
      };
      const u = [h(n, "click", l, {
        passive: true,
        capture: a
      }), h(n, "pointerdown", t => {
        const r = f(e);
        var n;
        if (r) {
          s = !t.composedPath().includes(r) && !(n = t, o && o.some(e => {
            const t = f(e);
            return t && (n.target === t || n.composedPath().includes(t));
          }));
        }
      }, {
        passive: true
      }), h(n, "pointerup", e => {
        if (e.button === 0) {
          const t = e.composedPath();
          e.composedPath = () => t;
          c = n.setTimeout(() => l(e), 50);
        }
      }, {
        passive: true
      }), i && h(n, "blur", r => {
        var o;
        const a = f(e);
        if (((o = n.document.activeElement) == null ? undefined : o.tagName) === "IFRAME" && !(a == null ? undefined : a.contains(n.document.activeElement))) {
          t(r);
        }
      })].filter(Boolean);
      return () => u.forEach(e => e());
    }
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    const g = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    const y = "__vueuse_ssr_handlers__";
    g[y] = g[y] || {};
    g[y];
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    new Map();
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    var v;
    var b;
    (b = v ||= {}).UP = "UP";
    b.RIGHT = "RIGHT";
    b.DOWN = "DOWN";
    b.LEFT = "LEFT";
    b.NONE = "NONE";
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.defineProperties;
    Object.getOwnPropertyDescriptors;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    Object.defineProperty;
    Object.getOwnPropertySymbols;
    Object.prototype.hasOwnProperty;
    Object.prototype.propertyIsEnumerable;
    var m = Object.defineProperty;
    var w = Object.getOwnPropertySymbols;
    var _ = Object.prototype.hasOwnProperty;
    var k = Object.prototype.propertyIsEnumerable;
    var A = (e, t, r) => t in e ? m(e, t, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r
    }) : e[t] = r;
    ((e, t) => {
      for (var r in t ||= {}) {
        if (_.call(t, r)) {
          A(e, r, t[r]);
        }
      }
      if (w) {
        for (var r of w(t)) {
          if (k.call(t, r)) {
            A(e, r, t[r]);
          }
        }
      }
    })({
      linear: function (e) {
        return e;
      }
    }, {
      easeInSine: [0.12, 0, 0.39, 0],
      easeOutSine: [0.61, 1, 0.88, 1],
      easeInOutSine: [0.37, 0, 0.63, 1],
      easeInQuad: [0.11, 0, 0.5, 0],
      easeOutQuad: [0.5, 1, 0.89, 1],
      easeInOutQuad: [0.45, 0, 0.55, 1],
      easeInCubic: [0.32, 0, 0.67, 0],
      easeOutCubic: [0.33, 1, 0.68, 1],
      easeInOutCubic: [0.65, 0, 0.35, 1],
      easeInQuart: [0.5, 0, 0.75, 0],
      easeOutQuart: [0.25, 1, 0.5, 1],
      easeInOutQuart: [0.76, 0, 0.24, 1],
      easeInQuint: [0.64, 0, 0.78, 0],
      easeOutQuint: [0.22, 1, 0.36, 1],
      easeInOutQuint: [0.83, 0, 0.17, 1],
      easeInExpo: [0.7, 0, 0.84, 0],
      easeOutExpo: [0.16, 1, 0.3, 1],
      easeInOutExpo: [0.87, 0, 0.13, 1],
      easeInCirc: [0.55, 0, 1, 0.45],
      easeOutCirc: [0, 0.55, 0.45, 1],
      easeInOutCirc: [0.85, 0, 0.15, 1],
      easeInBack: [0.36, 0, 0.66, -0.56],
      easeOutBack: [0.34, 1.56, 0.64, 1],
      easeInOutBack: [0.68, -0.6, 0.32, 1.6]
    });
  },
  6121: (e, t, r) => {
    "use strict";

    r.d(t, {
      $B: () => o,
      $Q: () => n,
      t8: () => a
    });
    var n = false;
    var o = true;
    function a(e, t, r) {
      if (Array.isArray(e)) {
        e.length = Math.max(e.length, t);
        e.splice(t, 1, r);
        return r;
      } else {
        e[t] = r;
        return r;
      }
    }
  }
}]);