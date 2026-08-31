(window.webpackJsonp = window.webpackJsonp || []).push([[41], {
  795: function (t, e) {
    var r;
    var n;
    n = {};
    (function (t, e) {
      function r() {
        this._delay = 0;
        this._endDelay = 0;
        this._fill = "none";
        this._iterationStart = 0;
        this._iterations = 1;
        this._duration = 0;
        this._playbackRate = 1;
        this._direction = "normal";
        this._easing = "linear";
        this._easingFunction = d;
      }
      function n() {
        return t.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", true);
      }
      function i(e, n, i) {
        var o = new r();
        if (n) {
          o.fill = "both";
          o.duration = "auto";
        }
        if (typeof e != "number" || isNaN(e)) {
          if (e !== undefined) {
            Object.getOwnPropertyNames(e).forEach(function (r) {
              if (e[r] != "auto") {
                if ((typeof o[r] == "number" || r == "duration") && (typeof e[r] != "number" || isNaN(e[r]))) {
                  return;
                }
                if (r == "fill" && c.indexOf(e[r]) == -1) {
                  return;
                }
                if (r == "direction" && f.indexOf(e[r]) == -1) {
                  return;
                }
                if (r == "playbackRate" && e[r] !== 1 && t.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) {
                  return;
                }
                o[r] = e[r];
              }
            });
          }
        } else {
          o.duration = e;
        }
        return o;
      }
      function o(t, e, r, n) {
        if (t < 0 || t > 1 || r < 0 || r > 1) {
          return d;
        } else {
          return function (i) {
            function o(t, e, r) {
              return t * 3 * (1 - r) * (1 - r) * r + e * 3 * (1 - r) * r * r + r * r * r;
            }
            if (i <= 0) {
              var a = 0;
              if (t > 0) {
                a = e / t;
              } else if (!e && r > 0) {
                a = n / r;
              }
              return a * i;
            }
            if (i >= 1) {
              var s = 0;
              if (r < 1) {
                s = (n - 1) / (r - 1);
              } else if (r == 1 && t < 1) {
                s = (e - 1) / (t - 1);
              }
              return 1 + s * (i - 1);
            }
            for (var u = 0, l = 1; u < l;) {
              var c = (u + l) / 2;
              var f = o(t, r, c);
              if (Math.abs(i - f) < 0.00001) {
                return o(e, n, c);
              }
              if (f < i) {
                u = c;
              } else {
                l = c;
              }
            }
            return o(e, n, c);
          };
        }
      }
      function a(t, e) {
        return function (r) {
          if (r >= 1) {
            return 1;
          }
          var n = 1 / t;
          return (r += e * n) - r % n;
        };
      }
      function s(t) {
        v ||= document.createElement("div").style;
        v.animationTimingFunction = "";
        v.animationTimingFunction = t;
        var e = v.animationTimingFunction;
        if (e == "" && n()) {
          throw new TypeError(t + " is not a valid value for easing");
        }
        return e;
      }
      function u(t) {
        if (t == "linear") {
          return d;
        }
        var e = b.exec(t);
        if (e) {
          return o.apply(this, e.slice(1).map(Number));
        }
        var r = y.exec(t);
        if (r) {
          return a(Number(r[1]), m);
        }
        var n = T.exec(t);
        if (n) {
          return a(Number(n[1]), {
            start: h,
            middle: p,
            end: m
          }[n[2]]);
        } else {
          return g[t] || d;
        }
      }
      function l(t, e, r) {
        if (e == null) {
          return x;
        }
        var n = r.delay + t + r.endDelay;
        if (e < Math.min(r.delay, n)) {
          return w;
        } else if (e >= Math.min(r.delay + t, n)) {
          return k;
        } else {
          return N;
        }
      }
      var c = "backwards|forwards|both|none".split("|");
      var f = "reverse|alternate|alternate-reverse".split("|");
      function d(t) {
        return t;
      }
      r.prototype = {
        _setMember: function (e, r) {
          this["_" + e] = r;
          if (this._effect) {
            this._effect._timingInput[e] = r;
            this._effect._timing = t.normalizeTimingInput(this._effect._timingInput);
            this._effect.activeDuration = t.calculateActiveDuration(this._effect._timing);
            if (this._effect._animation) {
              this._effect._animation._rebuildUnderlyingAnimation();
            }
          }
        },
        get playbackRate() {
          return this._playbackRate;
        },
        set delay(t) {
          this._setMember("delay", t);
        },
        get delay() {
          return this._delay;
        },
        set endDelay(t) {
          this._setMember("endDelay", t);
        },
        get endDelay() {
          return this._endDelay;
        },
        set fill(t) {
          this._setMember("fill", t);
        },
        get fill() {
          return this._fill;
        },
        set iterationStart(t) {
          if ((isNaN(t) || t < 0) && n()) {
            throw new TypeError("iterationStart must be a non-negative number, received: " + t);
          }
          this._setMember("iterationStart", t);
        },
        get iterationStart() {
          return this._iterationStart;
        },
        set duration(t) {
          if (t != "auto" && (isNaN(t) || t < 0) && n()) {
            throw new TypeError("duration must be non-negative or auto, received: " + t);
          }
          this._setMember("duration", t);
        },
        get duration() {
          return this._duration;
        },
        set direction(t) {
          this._setMember("direction", t);
        },
        get direction() {
          return this._direction;
        },
        set easing(t) {
          this._easingFunction = u(s(t));
          this._setMember("easing", t);
        },
        get easing() {
          return this._easing;
        },
        set iterations(t) {
          if ((isNaN(t) || t < 0) && n()) {
            throw new TypeError("iterations must be non-negative, received: " + t);
          }
          this._setMember("iterations", t);
        },
        get iterations() {
          return this._iterations;
        }
      };
      var h = 1;
      var p = 0.5;
      var m = 0;
      var g = {
        ease: o(0.25, 0.1, 0.25, 1),
        "ease-in": o(0.42, 0, 1, 1),
        "ease-out": o(0, 0, 0.58, 1),
        "ease-in-out": o(0.42, 0, 0.58, 1),
        "step-start": a(1, h),
        "step-middle": a(1, p),
        "step-end": a(1, m)
      };
      var v = null;
      var _ = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*";
      var b = new RegExp("cubic-bezier\\(" + _ + "," + _ + "," + _ + "," + _ + "\\)");
      var y = /steps\(\s*(\d+)\s*\)/;
      var T = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/;
      var x = 0;
      var w = 1;
      var k = 2;
      var N = 3;
      t.cloneTimingInput = function (t) {
        if (typeof t == "number") {
          return t;
        }
        var e = {};
        for (var r in t) {
          e[r] = t[r];
        }
        return e;
      };
      t.makeTiming = i;
      t.numericTimingToObject = function (t) {
        if (typeof t == "number") {
          t = isNaN(t) ? {
            duration: 0
          } : {
            duration: t
          };
        }
        return t;
      };
      t.normalizeTimingInput = function (e, r) {
        return i(e = t.numericTimingToObject(e), r);
      };
      t.calculateActiveDuration = function (t) {
        return Math.abs(function (t) {
          if (t.duration === 0 || t.iterations === 0) {
            return 0;
          } else {
            return t.duration * t.iterations;
          }
        }(t) / t.playbackRate);
      };
      t.calculateIterationProgress = function (t, e, r) {
        var n = l(t, e, r);
        var i = function (t, e, r, n, i) {
          switch (n) {
            case w:
              if (e == "backwards" || e == "both") {
                return 0;
              } else {
                return null;
              }
            case N:
              return r - i;
            case k:
              if (e == "forwards" || e == "both") {
                return t;
              } else {
                return null;
              }
            case x:
              return null;
          }
        }(t, r.fill, e, n, r.delay);
        if (i === null) {
          return null;
        }
        var o = function (t, e, r, n, i) {
          var o = i;
          if (t === 0) {
            if (e !== w) {
              o += r;
            }
          } else {
            o += n / t;
          }
          return o;
        }(r.duration, n, r.iterations, i, r.iterationStart);
        var a = function (t, e, r, n, i, o) {
          var a = t === Infinity ? e % 1 : t % 1;
          if (a === 0 && r === k && n !== 0 && (i !== 0 || o === 0)) {
            a = 1;
          }
          return a;
        }(o, r.iterationStart, n, r.iterations, i, r.duration);
        var s = function (t, e, r, n) {
          if (t === k && e === Infinity) {
            return Infinity;
          } else if (r === 1) {
            return Math.floor(n) - 1;
          } else {
            return Math.floor(n);
          }
        }(n, r.iterations, a, o);
        var u = function (t, e, r) {
          var n = t;
          if (t !== "normal" && t !== "reverse") {
            var i = e;
            if (t === "alternate-reverse") {
              i += 1;
            }
            n = "normal";
            if (i !== Infinity && i % 2 != 0) {
              n = "reverse";
            }
          }
          if (n === "normal") {
            return r;
          } else {
            return 1 - r;
          }
        }(r.direction, s, a);
        return r._easingFunction(u);
      };
      t.calculatePhase = l;
      t.normalizeEasing = s;
      t.parseEasingFunction = u;
    })(r = {});
    (function (t, e) {
      function r(t, e) {
        return t in u && u[t][e] || e;
      }
      function n(t, e, n) {
        if (!function (t) {
          return t === "display" || t.lastIndexOf("animation", 0) === 0 || t.lastIndexOf("transition", 0) === 0;
        }(t)) {
          var i = o[t];
          if (i) {
            a.style[t] = e;
            for (var s in i) {
              var u = i[s];
              var l = a.style[u];
              n[u] = r(u, l);
            }
          } else {
            n[t] = r(t, e);
          }
        }
      }
      function i(t) {
        var e = [];
        for (var r in t) {
          if (!(r in ["easing", "offset", "composite"])) {
            var n = t[r];
            if (!Array.isArray(n)) {
              n = [n];
            }
            var i;
            for (var o = n.length, a = 0; a < o; a++) {
              (i = {}).offset = "offset" in t ? t.offset : o == 1 ? 1 : a / (o - 1);
              if ("easing" in t) {
                i.easing = t.easing;
              }
              if ("composite" in t) {
                i.composite = t.composite;
              }
              i[r] = n[a];
              e.push(i);
            }
          }
        }
        e.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return e;
      }
      var o = {
        background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
        border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
        borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
        borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
        borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
        borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
        borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
        borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
        borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
        flex: ["flexGrow", "flexShrink", "flexBasis"],
        font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
        margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
        outline: ["outlineColor", "outlineStyle", "outlineWidth"],
        padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
      };
      var a = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
      var s = {
        thin: "1px",
        medium: "3px",
        thick: "5px"
      };
      var u = {
        borderBottomWidth: s,
        borderLeftWidth: s,
        borderRightWidth: s,
        borderTopWidth: s,
        fontSize: {
          "xx-small": "60%",
          "x-small": "75%",
          small: "89%",
          medium: "100%",
          large: "120%",
          "x-large": "150%",
          "xx-large": "200%"
        },
        fontWeight: {
          normal: "400",
          bold: "700"
        },
        outlineWidth: s,
        textShadow: {
          none: "0px 0px 0px transparent"
        },
        boxShadow: {
          none: "0px 0px 0px 0px transparent"
        }
      };
      t.convertToArrayForm = i;
      t.normalizeKeyframes = function (e) {
        if (e == null) {
          return [];
        }
        if (window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator]) {
          e = Array.from(e);
        }
        if (!Array.isArray(e)) {
          e = i(e);
        }
        for (var r = e.map(function (e) {
            var r = {};
            for (var i in e) {
              var o = e[i];
              if (i == "offset") {
                if (o != null) {
                  o = Number(o);
                  if (!isFinite(o)) {
                    throw new TypeError("Keyframe offsets must be numbers.");
                  }
                  if (o < 0 || o > 1) {
                    throw new TypeError("Keyframe offsets must be between 0 and 1.");
                  }
                }
              } else if (i == "composite") {
                if (o == "add" || o == "accumulate") {
                  throw {
                    type: DOMException.NOT_SUPPORTED_ERR,
                    name: "NotSupportedError",
                    message: "add compositing is not supported"
                  };
                }
                if (o != "replace") {
                  throw new TypeError("Invalid composite mode " + o + ".");
                }
              } else {
                o = i == "easing" ? t.normalizeEasing(o) : "" + o;
              }
              n(i, o, r);
            }
            if (r.offset == null) {
              r.offset = null;
            }
            if (r.easing == null) {
              r.easing = "linear";
            }
            return r;
          }), o = true, a = -Infinity, s = 0; s < r.length; s++) {
          var u = r[s].offset;
          if (u != null) {
            if (u < a) {
              throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
            }
            a = u;
          } else {
            o = false;
          }
        }
        r = r.filter(function (t) {
          return t.offset >= 0 && t.offset <= 1;
        });
        if (!o) {
          (function () {
            var t = r.length;
            if (r[t - 1].offset == null) {
              r[t - 1].offset = 1;
            }
            if (t > 1 && r[0].offset == null) {
              r[0].offset = 0;
            }
            var e = 0;
            var n = r[0].offset;
            for (var i = 1; i < t; i++) {
              var o = r[i].offset;
              if (o != null) {
                for (var a = 1; a < i - e; a++) {
                  r[e + a].offset = n + (o - n) * a / (i - e);
                }
                e = i;
                n = o;
              }
            }
          })();
        }
        return r;
      };
    })(r);
    (function (t) {
      var e = {};
      t.isDeprecated = function (t, r, n, i) {
        var o = i ? "are" : "is";
        var a = new Date();
        var s = new Date(r);
        s.setMonth(s.getMonth() + 3);
        return !(a < s) || !(t in e || console.warn("Web Animations: " + t + " " + o + " deprecated and will stop working on " + s.toDateString() + ". " + n), e[t] = true, 1);
      };
      t.deprecated = function (e, r, n, i) {
        var o = i ? "are" : "is";
        if (t.isDeprecated(e, r, n, i)) {
          throw new Error(e + " " + o + " no longer supported. " + n);
        }
      };
    })(r);
    (function () {
      if (document.documentElement.animate) {
        var t = document.documentElement.animate([], 0);
        var e = true;
        if (t) {
          e = false;
          "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function (r) {
            if (t[r] === undefined) {
              e = true;
            }
          });
        }
        if (!e) {
          return;
        }
      }
      (function (t, e, r) {
        e.convertEffectInput = function (r) {
          var n = function (t) {
            var e = {};
            for (var r = 0; r < t.length; r++) {
              for (var n in t[r]) {
                if (n != "offset" && n != "easing" && n != "composite") {
                  var i = {
                    offset: t[r].offset,
                    easing: t[r].easing,
                    value: t[r][n]
                  };
                  e[n] = e[n] || [];
                  e[n].push(i);
                }
              }
            }
            for (var o in e) {
              var a = e[o];
              if (a[0].offset != 0 || a[a.length - 1].offset != 1) {
                throw {
                  type: DOMException.NOT_SUPPORTED_ERR,
                  name: "NotSupportedError",
                  message: "Partial keyframes are not supported"
                };
              }
            }
            return e;
          }(t.normalizeKeyframes(r));
          var i = function (r) {
            var n = [];
            for (var i in r) {
              for (var o = r[i], a = 0; a < o.length - 1; a++) {
                var s = a;
                var u = a + 1;
                var l = o[s].offset;
                var c = o[u].offset;
                var f = l;
                var d = c;
                if (a == 0) {
                  f = -Infinity;
                  if (c == 0) {
                    u = s;
                  }
                }
                if (a == o.length - 2) {
                  d = Infinity;
                  if (l == 1) {
                    s = u;
                  }
                }
                n.push({
                  applyFrom: f,
                  applyTo: d,
                  startOffset: o[s].offset,
                  endOffset: o[u].offset,
                  easingFunction: t.parseEasingFunction(o[s].easing),
                  property: i,
                  interpolation: e.propertyInterpolation(i, o[s].value, o[u].value)
                });
              }
            }
            n.sort(function (t, e) {
              return t.startOffset - e.startOffset;
            });
            return n;
          }(n);
          return function (t, r) {
            if (r != null) {
              i.filter(function (t) {
                return r >= t.applyFrom && r < t.applyTo;
              }).forEach(function (n) {
                var i = r - n.startOffset;
                var o = n.endOffset - n.startOffset;
                var a = o == 0 ? 0 : n.easingFunction(i / o);
                e.apply(t, n.property, n.interpolation(a));
              });
            } else {
              for (var o in n) {
                if (o != "offset" && o != "easing" && o != "composite") {
                  e.clear(t, o);
                }
              }
            }
          };
        };
      })(r, n);
      (function (t, e, r) {
        function n(t) {
          return t.replace(/-(.)/g, function (t, e) {
            return e.toUpperCase();
          });
        }
        function i(t, e, r) {
          o[r] = o[r] || [];
          o[r].push([t, e]);
        }
        var o = {};
        e.addPropertiesHandler = function (t, e, r) {
          for (var o = 0; o < r.length; o++) {
            i(t, e, n(r[o]));
          }
        };
        var a = {
          backgroundColor: "transparent",
          backgroundPosition: "0% 0%",
          borderBottomColor: "currentColor",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          borderBottomWidth: "3px",
          borderLeftColor: "currentColor",
          borderLeftWidth: "3px",
          borderRightColor: "currentColor",
          borderRightWidth: "3px",
          borderSpacing: "2px",
          borderTopColor: "currentColor",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          borderTopWidth: "3px",
          bottom: "auto",
          clip: "rect(0px, 0px, 0px, 0px)",
          color: "black",
          fontSize: "100%",
          fontWeight: "400",
          height: "auto",
          left: "auto",
          letterSpacing: "normal",
          lineHeight: "120%",
          marginBottom: "0px",
          marginLeft: "0px",
          marginRight: "0px",
          marginTop: "0px",
          maxHeight: "none",
          maxWidth: "none",
          minHeight: "0px",
          minWidth: "0px",
          opacity: "1.0",
          outlineColor: "invert",
          outlineOffset: "0px",
          outlineWidth: "3px",
          paddingBottom: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          right: "auto",
          strokeDasharray: "none",
          strokeDashoffset: "0px",
          textIndent: "0px",
          textShadow: "0px 0px 0px transparent",
          top: "auto",
          transform: "",
          verticalAlign: "0px",
          visibility: "visible",
          width: "auto",
          wordSpacing: "normal",
          zIndex: "auto"
        };
        e.propertyInterpolation = function (r, i, s) {
          var u = r;
          if (/-/.test(r) && !t.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", true)) {
            u = n(r);
          }
          if (i == "initial" || s == "initial") {
            if (i == "initial") {
              i = a[u];
            }
            if (s == "initial") {
              s = a[u];
            }
          }
          for (var l = i == s ? [] : o[u], c = 0; l && c < l.length; c++) {
            var f = l[c][0](i);
            var d = l[c][0](s);
            if (f !== undefined && d !== undefined) {
              var h = l[c][1](f, d);
              if (h) {
                var p = e.Interpolation.apply(null, h);
                return function (t) {
                  if (t == 0) {
                    return i;
                  } else if (t == 1) {
                    return s;
                  } else {
                    return p(t);
                  }
                };
              }
            }
          }
          return e.Interpolation(false, true, function (t) {
            if (t) {
              return s;
            } else {
              return i;
            }
          });
        };
      })(r, n);
      (function (t, e, r) {
        e.KeyframeEffect = function (r, n, i, o) {
          var a;
          var s = function (e) {
            var r = t.calculateActiveDuration(e);
            function n(n) {
              return t.calculateIterationProgress(r, n, e);
            }
            n._totalDuration = e.delay + r + e.endDelay;
            return n;
          }(t.normalizeTimingInput(i));
          var u = e.convertEffectInput(n);
          function l() {
            u(r, a);
          }
          l._update = function (t) {
            return (a = s(t)) !== null;
          };
          l._clear = function () {
            u(r, null);
          };
          l._hasSameTarget = function (t) {
            return r === t;
          };
          l._target = r;
          l._totalDuration = s._totalDuration;
          l._id = o;
          return l;
        };
      })(r, n);
      (function (t, e) {
        function r(t, e, r) {
          r.enumerable = true;
          r.configurable = true;
          Object.defineProperty(t, e, r);
        }
        function n(t) {
          this._element = t;
          this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml", "div").style;
          this._style = t.style;
          this._length = 0;
          this._isAnimatedProperty = {};
          this._updateSvgTransformAttr = function (t, e) {
            return !!e.namespaceURI && e.namespaceURI.indexOf("/svg") != -1 && (o in t || (t[o] = /Trident|MSIE|IEMobile|Edge|Android 4/i.test(t.navigator.userAgent)), t[o]);
          }(window, t);
          this._savedTransformAttr = null;
          for (var e = 0; e < this._style.length; e++) {
            var r = this._style[e];
            this._surrogateStyle[r] = this._style[r];
          }
          this._updateIndices();
        }
        function i(t) {
          if (!t._webAnimationsPatchedStyle) {
            var e = new n(t);
            try {
              r(t, "style", {
                get: function () {
                  return e;
                }
              });
            } catch (e) {
              t.style._set = function (e, r) {
                t.style[e] = r;
              };
              t.style._clear = function (e) {
                t.style[e] = "";
              };
            }
            t._webAnimationsPatchedStyle = t.style;
          }
        }
        var o = "_webAnimationsUpdateSvgTransformAttr";
        var a = {
          cssText: 1,
          length: 1,
          parentRule: 1
        };
        var s = {
          getPropertyCSSValue: 1,
          getPropertyPriority: 1,
          getPropertyValue: 1,
          item: 1,
          removeProperty: 1,
          setProperty: 1
        };
        var u = {
          removeProperty: 1,
          setProperty: 1
        };
        n.prototype = {
          get cssText() {
            return this._surrogateStyle.cssText;
          },
          set cssText(t) {
            var e = {};
            for (var r = 0; r < this._surrogateStyle.length; r++) {
              e[this._surrogateStyle[r]] = true;
            }
            this._surrogateStyle.cssText = t;
            this._updateIndices();
            r = 0;
            for (; r < this._surrogateStyle.length; r++) {
              e[this._surrogateStyle[r]] = true;
            }
            for (var n in e) {
              if (!this._isAnimatedProperty[n]) {
                this._style.setProperty(n, this._surrogateStyle.getPropertyValue(n));
              }
            }
          },
          get length() {
            return this._surrogateStyle.length;
          },
          get parentRule() {
            return this._style.parentRule;
          },
          _updateIndices: function () {
            while (this._length < this._surrogateStyle.length) {
              Object.defineProperty(this, this._length, {
                configurable: true,
                enumerable: false,
                get: function (t) {
                  return function () {
                    return this._surrogateStyle[t];
                  };
                }(this._length)
              });
              this._length++;
            }
            while (this._length > this._surrogateStyle.length) {
              this._length--;
              Object.defineProperty(this, this._length, {
                configurable: true,
                enumerable: false,
                value: undefined
              });
            }
          },
          _set: function (e, r) {
            this._style[e] = r;
            this._isAnimatedProperty[e] = true;
            if (this._updateSvgTransformAttr && t.unprefixedPropertyName(e) == "transform") {
              if (this._savedTransformAttr == null) {
                this._savedTransformAttr = this._element.getAttribute("transform");
              }
              this._element.setAttribute("transform", t.transformToSvgMatrix(r));
            }
          },
          _clear: function (e) {
            this._style[e] = this._surrogateStyle[e];
            if (this._updateSvgTransformAttr && t.unprefixedPropertyName(e) == "transform") {
              if (this._savedTransformAttr) {
                this._element.setAttribute("transform", this._savedTransformAttr);
              } else {
                this._element.removeAttribute("transform");
              }
              this._savedTransformAttr = null;
            }
            delete this._isAnimatedProperty[e];
          }
        };
        for (var l in s) {
          n.prototype[l] = function (t, e) {
            return function () {
              var r = this._surrogateStyle[t].apply(this._surrogateStyle, arguments);
              if (e) {
                if (!this._isAnimatedProperty[arguments[0]]) {
                  this._style[t].apply(this._style, arguments);
                }
                this._updateIndices();
              }
              return r;
            };
          }(l, l in u);
        }
        for (var c in document.documentElement.style) {
          if (!(c in a) && !(c in s)) {
            (function (t) {
              r(n.prototype, t, {
                get: function () {
                  return this._surrogateStyle[t];
                },
                set: function (e) {
                  this._surrogateStyle[t] = e;
                  this._updateIndices();
                  if (!this._isAnimatedProperty[t]) {
                    this._style[t] = e;
                  }
                }
              });
            })(c);
          }
        }
        t.apply = function (e, r, n) {
          i(e);
          e.style._set(t.propertyName(r), n);
        };
        t.clear = function (e, r) {
          if (e._webAnimationsPatchedStyle) {
            e.style._clear(t.propertyName(r));
          }
        };
      })(n);
      (function (t) {
        window.Element.prototype.animate = function (e, r) {
          var n = "";
          if (r && r.id) {
            n = r.id;
          }
          return t.timeline._play(t.KeyframeEffect(this, e, r, n));
        };
      })(n);
      (function (t, e) {
        t.Interpolation = function (t, e, r) {
          return function (n) {
            return r(function t(e, r, n) {
              if (typeof e == "number" && typeof r == "number") {
                return e * (1 - n) + r * n;
              }
              if (typeof e == "boolean" && typeof r == "boolean") {
                if (n < 0.5) {
                  return e;
                } else {
                  return r;
                }
              }
              if (e.length == r.length) {
                var i = [];
                for (var o = 0; o < e.length; o++) {
                  i.push(t(e[o], r[o], n));
                }
                return i;
              }
              throw "Mismatched interpolation arguments " + e + ":" + r;
            }(t, e, n));
          };
        };
      })(n);
      (function (t, e) {
        var r = function () {
          function t(t, e) {
            var r = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
            for (var n = 0; n < 4; n++) {
              for (var i = 0; i < 4; i++) {
                for (var o = 0; o < 4; o++) {
                  r[n][i] += e[n][o] * t[o][i];
                }
              }
            }
            return r;
          }
          return function (e, r, n, i, o) {
            var a = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
            for (var s = 0; s < 4; s++) {
              a[s][3] = o[s];
            }
            for (s = 0; s < 3; s++) {
              for (var u = 0; u < 3; u++) {
                a[3][s] += e[u] * a[u][s];
              }
            }
            var l = i[0];
            var c = i[1];
            var f = i[2];
            var d = i[3];
            var h = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
            h[0][0] = 1 - (c * c + f * f) * 2;
            h[0][1] = (l * c - f * d) * 2;
            h[0][2] = (l * f + c * d) * 2;
            h[1][0] = (l * c + f * d) * 2;
            h[1][1] = 1 - (l * l + f * f) * 2;
            h[1][2] = (c * f - l * d) * 2;
            h[2][0] = (l * f - c * d) * 2;
            h[2][1] = (c * f + l * d) * 2;
            h[2][2] = 1 - (l * l + c * c) * 2;
            a = t(a, h);
            var p = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
            if (n[2]) {
              p[2][1] = n[2];
              a = t(a, p);
            }
            if (n[1]) {
              p[2][1] = 0;
              p[2][0] = n[0];
              a = t(a, p);
            }
            if (n[0]) {
              p[2][0] = 0;
              p[1][0] = n[0];
              a = t(a, p);
            }
            s = 0;
            for (; s < 3; s++) {
              for (u = 0; u < 3; u++) {
                a[s][u] *= r[s];
              }
            }
            if (function (t) {
              return t[0][2] == 0 && t[0][3] == 0 && t[1][2] == 0 && t[1][3] == 0 && t[2][0] == 0 && t[2][1] == 0 && t[2][2] == 1 && t[2][3] == 0 && t[3][2] == 0 && t[3][3] == 1;
            }(a)) {
              return [a[0][0], a[0][1], a[1][0], a[1][1], a[3][0], a[3][1]];
            } else {
              return a[0].concat(a[1], a[2], a[3]);
            }
          };
        }();
        t.composeMatrix = r;
        t.quat = function (e, r, n) {
          var i = t.dot(e, r);
          var o = [];
          if ((i = function (t, e, r) {
            return Math.max(Math.min(t, r), e);
          }(i, -1, 1)) === 1) {
            o = e;
          } else {
            var a = Math.acos(i);
            var s = Math.sin(n * a) * 1 / Math.sqrt(1 - i * i);
            for (var u = 0; u < 4; u++) {
              o.push(e[u] * (Math.cos(n * a) - i * s) + r[u] * s);
            }
          }
          return o;
        };
      })(n);
      (function (t, e, r) {
        t.sequenceNumber = 0;
        function n(t, e, r) {
          this.target = t;
          this.currentTime = e;
          this.timelineTime = r;
          this.type = "finish";
          this.bubbles = false;
          this.cancelable = false;
          this.currentTarget = t;
          this.defaultPrevented = false;
          this.eventPhase = Event.AT_TARGET;
          this.timeStamp = Date.now();
        }
        e.Animation = function (e) {
          this.id = "";
          if (e && e._id) {
            this.id = e._id;
          }
          this._sequenceNumber = t.sequenceNumber++;
          this._currentTime = 0;
          this._startTime = null;
          this._paused = false;
          this._playbackRate = 1;
          this._inTimeline = true;
          this._finishedFlag = true;
          this.onfinish = null;
          this._finishHandlers = [];
          this._effect = e;
          this._inEffect = this._effect._update(0);
          this._idle = true;
          this._currentTimePending = false;
        };
        e.Animation.prototype = {
          _ensureAlive: function () {
            if (this.playbackRate < 0 && this.currentTime === 0) {
              this._inEffect = this._effect._update(-1);
            } else {
              this._inEffect = this._effect._update(this.currentTime);
            }
            if (!this._inTimeline && (!!this._inEffect || !this._finishedFlag)) {
              this._inTimeline = true;
              e.timeline._animations.push(this);
            }
          },
          _tickCurrentTime: function (t, e) {
            if (t != this._currentTime) {
              this._currentTime = t;
              if (this._isFinished && !e) {
                this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0;
              }
              this._ensureAlive();
            }
          },
          get currentTime() {
            if (this._idle || this._currentTimePending) {
              return null;
            } else {
              return this._currentTime;
            }
          },
          set currentTime(t) {
            t = +t;
            if (!isNaN(t)) {
              e.restart();
              if (!this._paused && this._startTime != null) {
                this._startTime = this._timeline.currentTime - t / this._playbackRate;
              }
              this._currentTimePending = false;
              if (this._currentTime != t) {
                if (this._idle) {
                  this._idle = false;
                  this._paused = true;
                }
                this._tickCurrentTime(t, true);
                e.applyDirtiedAnimation(this);
              }
            }
          },
          get startTime() {
            return this._startTime;
          },
          set startTime(t) {
            t = +t;
            if (!isNaN(t) && !this._paused && !this._idle) {
              this._startTime = t;
              this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate);
              e.applyDirtiedAnimation(this);
            }
          },
          get playbackRate() {
            return this._playbackRate;
          },
          set playbackRate(t) {
            if (t != this._playbackRate) {
              var r = this.currentTime;
              this._playbackRate = t;
              this._startTime = null;
              if (this.playState != "paused" && this.playState != "idle") {
                this._finishedFlag = false;
                this._idle = false;
                this._ensureAlive();
                e.applyDirtiedAnimation(this);
              }
              if (r != null) {
                this.currentTime = r;
              }
            }
          },
          get _isFinished() {
            return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0);
          },
          get _totalDuration() {
            return this._effect._totalDuration;
          },
          get playState() {
            if (this._idle) {
              return "idle";
            } else if (this._startTime == null && !this._paused && this.playbackRate != 0 || this._currentTimePending) {
              return "pending";
            } else if (this._paused) {
              return "paused";
            } else if (this._isFinished) {
              return "finished";
            } else {
              return "running";
            }
          },
          _rewind: function () {
            if (this._playbackRate >= 0) {
              this._currentTime = 0;
            } else {
              if (!(this._totalDuration < Infinity)) {
                throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
              }
              this._currentTime = this._totalDuration;
            }
          },
          play: function () {
            this._paused = false;
            if (this._isFinished || this._idle) {
              this._rewind();
              this._startTime = null;
            }
            this._finishedFlag = false;
            this._idle = false;
            this._ensureAlive();
            e.applyDirtiedAnimation(this);
          },
          pause: function () {
            if (this._isFinished || this._paused || this._idle) {
              if (this._idle) {
                this._rewind();
                this._idle = false;
              }
            } else {
              this._currentTimePending = true;
            }
            this._startTime = null;
            this._paused = true;
          },
          finish: function () {
            if (!this._idle) {
              this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0;
              this._startTime = this._totalDuration - this.currentTime;
              this._currentTimePending = false;
              e.applyDirtiedAnimation(this);
            }
          },
          cancel: function () {
            if (this._inEffect) {
              this._inEffect = false;
              this._idle = true;
              this._paused = false;
              this._finishedFlag = true;
              this._currentTime = 0;
              this._startTime = null;
              this._effect._update(null);
              e.applyDirtiedAnimation(this);
            }
          },
          reverse: function () {
            this.playbackRate *= -1;
            this.play();
          },
          addEventListener: function (t, e) {
            if (typeof e == "function" && t == "finish") {
              this._finishHandlers.push(e);
            }
          },
          removeEventListener: function (t, e) {
            if (t == "finish") {
              var r = this._finishHandlers.indexOf(e);
              if (r >= 0) {
                this._finishHandlers.splice(r, 1);
              }
            }
          },
          _fireEvents: function (t) {
            if (this._isFinished) {
              if (!this._finishedFlag) {
                var e = new n(this, this._currentTime, t);
                var r = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
                setTimeout(function () {
                  r.forEach(function (t) {
                    t.call(e.target, e);
                  });
                }, 0);
                this._finishedFlag = true;
              }
            } else {
              this._finishedFlag = false;
            }
          },
          _tick: function (t, e) {
            if (!this._idle && !this._paused) {
              if (this._startTime == null) {
                if (e) {
                  this.startTime = t - this._currentTime / this.playbackRate;
                }
              } else if (!this._isFinished) {
                this._tickCurrentTime((t - this._startTime) * this.playbackRate);
              }
            }
            if (e) {
              this._currentTimePending = false;
              this._fireEvents(t);
            }
          },
          get _needsTick() {
            return this.playState in {
              pending: 1,
              running: 1
            } || !this._finishedFlag;
          },
          _targetAnimations: function () {
            var t = this._effect._target;
            t._activeAnimations ||= [];
            return t._activeAnimations;
          },
          _markTarget: function () {
            var t = this._targetAnimations();
            if (t.indexOf(this) === -1) {
              t.push(this);
            }
          },
          _unmarkTarget: function () {
            var t = this._targetAnimations();
            var e = t.indexOf(this);
            if (e !== -1) {
              t.splice(e, 1);
            }
          }
        };
      })(r, n);
      (function (t, e, r) {
        function n(t) {
          var e = l;
          l = [];
          if (t < m.currentTime) {
            t = m.currentTime;
          }
          m._animations.sort(i);
          m._animations = s(t, true, m._animations)[0];
          e.forEach(function (e) {
            e[1](t);
          });
          a();
        }
        function i(t, e) {
          return t._sequenceNumber - e._sequenceNumber;
        }
        function o() {
          this._animations = [];
          this.currentTime = window.performance && performance.now ? performance.now() : 0;
        }
        function a() {
          h.forEach(function (t) {
            t();
          });
          h.length = 0;
        }
        function s(t, r, n) {
          p = true;
          d = false;
          e.timeline.currentTime = t;
          f = false;
          var i = [];
          var o = [];
          var a = [];
          var s = [];
          n.forEach(function (e) {
            e._tick(t, r);
            if (e._inEffect) {
              o.push(e._effect);
              e._markTarget();
            } else {
              i.push(e._effect);
              e._unmarkTarget();
            }
            if (e._needsTick) {
              f = true;
            }
            var n = e._inEffect || e._needsTick;
            e._inTimeline = n;
            if (n) {
              a.push(e);
            } else {
              s.push(e);
            }
          });
          h.push.apply(h, i);
          h.push.apply(h, o);
          if (f) {
            requestAnimationFrame(function () {});
          }
          p = false;
          return [a, s];
        }
        var u = window.requestAnimationFrame;
        var l = [];
        var c = 0;
        window.requestAnimationFrame = function (t) {
          var e = c++;
          if (l.length == 0) {
            u(n);
          }
          l.push([e, t]);
          return e;
        };
        window.cancelAnimationFrame = function (t) {
          l.forEach(function (e) {
            if (e[0] == t) {
              e[1] = function () {};
            }
          });
        };
        o.prototype = {
          _play: function (r) {
            r._timing = t.normalizeTimingInput(r.timing);
            var n = new e.Animation(r);
            n._idle = false;
            n._timeline = this;
            this._animations.push(n);
            e.restart();
            e.applyDirtiedAnimation(n);
            return n;
          }
        };
        var f = false;
        var d = false;
        e.restart = function () {
          if (!f) {
            f = true;
            requestAnimationFrame(function () {});
            d = true;
          }
          return d;
        };
        e.applyDirtiedAnimation = function (t) {
          if (!p) {
            t._markTarget();
            var r = t._targetAnimations();
            r.sort(i);
            s(e.timeline.currentTime, false, r.slice())[1].forEach(function (t) {
              var e = m._animations.indexOf(t);
              if (e !== -1) {
                m._animations.splice(e, 1);
              }
            });
            a();
          }
        };
        var h = [];
        var p = false;
        var m = new o();
        e.timeline = m;
      })(r, n);
      (function (t, e) {
        function r(t, e) {
          var r = 0;
          for (var n = 0; n < t.length; n++) {
            r += t[n] * e[n];
          }
          return r;
        }
        function n(t, e) {
          return [t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15]];
        }
        function i(t) {
          var e = t.rad || 0;
          return ((t.deg || 0) / 360 + (t.grad || 0) / 400 + (t.turn || 0)) * (Math.PI * 2) + e;
        }
        function o(t) {
          switch (t.t) {
            case "rotatex":
              var e = i(t.d[0]);
              return [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1];
            case "rotatey":
              e = i(t.d[0]);
              return [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1];
            case "rotate":
            case "rotatez":
              e = i(t.d[0]);
              return [Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "rotate3d":
              var r = t.d[0];
              var n = t.d[1];
              var o = t.d[2];
              e = i(t.d[3]);
              var a = r * r + n * n + o * o;
              if (a === 0) {
                r = 1;
                n = 0;
                o = 0;
              } else if (a !== 1) {
                var s = Math.sqrt(a);
                r /= s;
                n /= s;
                o /= s;
              }
              var u = Math.sin(e / 2);
              var l = u * Math.cos(e / 2);
              var c = u * u;
              return [1 - (n * n + o * o) * 2 * c, (r * n * c + o * l) * 2, (r * o * c - n * l) * 2, 0, (r * n * c - o * l) * 2, 1 - (r * r + o * o) * 2 * c, (n * o * c + r * l) * 2, 0, (r * o * c + n * l) * 2, (n * o * c - r * l) * 2, 1 - (r * r + n * n) * 2 * c, 0, 0, 0, 0, 1];
            case "scale":
              return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "scalex":
              return [t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "scaley":
              return [1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "scalez":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1];
            case "scale3d":
              return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, t.d[2], 0, 0, 0, 0, 1];
            case "skew":
              var f = i(t.d[0]);
              var d = i(t.d[1]);
              return [1, Math.tan(d), 0, 0, Math.tan(f), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "skewx":
              e = i(t.d[0]);
              return [1, 0, 0, 0, Math.tan(e), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "skewy":
              e = i(t.d[0]);
              return [1, Math.tan(e), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "translate":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r = t.d[0].px || 0, n = t.d[1].px || 0, 0, 1];
            case "translatex":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r = t.d[0].px || 0, 0, 0, 1];
            case "translatey":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, n = t.d[0].px || 0, 0, 1];
            case "translatez":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, o = t.d[0].px || 0, 1];
            case "translate3d":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r = t.d[0].px || 0, n = t.d[1].px || 0, o = t.d[2].px || 0, 1];
            case "perspective":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t.d[0].px ? -1 / t.d[0].px : 0, 0, 0, 0, 1];
            case "matrix":
              return [t.d[0], t.d[1], 0, 0, t.d[2], t.d[3], 0, 0, 0, 0, 1, 0, t.d[4], t.d[5], 0, 1];
            case "matrix3d":
              return t.d;
          }
        }
        function a(t) {
          if (t.length === 0) {
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
          } else {
            return t.map(o).reduce(n);
          }
        }
        var s = function () {
          function t(t) {
            return t[0][0] * t[1][1] * t[2][2] + t[1][0] * t[2][1] * t[0][2] + t[2][0] * t[0][1] * t[1][2] - t[0][2] * t[1][1] * t[2][0] - t[1][2] * t[2][1] * t[0][0] - t[2][2] * t[0][1] * t[1][0];
          }
          function e(t) {
            var e = n(t);
            return [t[0] / e, t[1] / e, t[2] / e];
          }
          function n(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
          }
          function i(t, e, r, n) {
            return [r * t[0] + n * e[0], r * t[1] + n * e[1], r * t[2] + n * e[2]];
          }
          return function (o) {
            var a = [o.slice(0, 4), o.slice(4, 8), o.slice(8, 12), o.slice(12, 16)];
            if (a[3][3] !== 1) {
              return null;
            }
            var s = [];
            for (var u = 0; u < 4; u++) {
              s.push(a[u].slice());
            }
            for (u = 0; u < 3; u++) {
              s[u][3] = 0;
            }
            if (t(s) === 0) {
              return null;
            }
            var l;
            var c = [];
            if (a[0][3] || a[1][3] || a[2][3]) {
              c.push(a[0][3]);
              c.push(a[1][3]);
              c.push(a[2][3]);
              c.push(a[3][3]);
              l = function (t, e) {
                var r = [];
                for (var n = 0; n < 4; n++) {
                  var i = 0;
                  for (var o = 0; o < 4; o++) {
                    i += t[o] * e[o][n];
                  }
                  r.push(i);
                }
                return r;
              }(c, function (t) {
                return [[t[0][0], t[1][0], t[2][0], t[3][0]], [t[0][1], t[1][1], t[2][1], t[3][1]], [t[0][2], t[1][2], t[2][2], t[3][2]], [t[0][3], t[1][3], t[2][3], t[3][3]]];
              }(function (e) {
                var r = 1 / t(e);
                var n = e[0][0];
                var i = e[0][1];
                var o = e[0][2];
                var a = e[1][0];
                var s = e[1][1];
                var u = e[1][2];
                var l = e[2][0];
                var c = e[2][1];
                var f = e[2][2];
                var d = [[(s * f - u * c) * r, (o * c - i * f) * r, (i * u - o * s) * r, 0], [(u * l - a * f) * r, (n * f - o * l) * r, (o * a - n * u) * r, 0], [(a * c - s * l) * r, (l * i - n * c) * r, (n * s - i * a) * r, 0]];
                var h = [];
                for (var p = 0; p < 3; p++) {
                  var m = 0;
                  for (var g = 0; g < 3; g++) {
                    m += e[3][g] * d[g][p];
                  }
                  h.push(m);
                }
                h.push(1);
                d.push(h);
                return d;
              }(s)));
            } else {
              l = [0, 0, 0, 1];
            }
            var f = a[3].slice(0, 3);
            var d = [];
            d.push(a[0].slice(0, 3));
            var h = [];
            h.push(n(d[0]));
            d[0] = e(d[0]);
            var p = [];
            d.push(a[1].slice(0, 3));
            p.push(r(d[0], d[1]));
            d[1] = i(d[1], d[0], 1, -p[0]);
            h.push(n(d[1]));
            d[1] = e(d[1]);
            p[0] /= h[1];
            d.push(a[2].slice(0, 3));
            p.push(r(d[0], d[2]));
            d[2] = i(d[2], d[0], 1, -p[1]);
            p.push(r(d[1], d[2]));
            d[2] = i(d[2], d[1], 1, -p[2]);
            h.push(n(d[2]));
            d[2] = e(d[2]);
            p[1] /= h[2];
            p[2] /= h[2];
            var m = function (t, e) {
              return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
            }(d[1], d[2]);
            if (r(d[0], m) < 0) {
              for (u = 0; u < 3; u++) {
                h[u] *= -1;
                d[u][0] *= -1;
                d[u][1] *= -1;
                d[u][2] *= -1;
              }
            }
            var g;
            var v;
            var _ = d[0][0] + d[1][1] + d[2][2] + 1;
            if (_ > 0.0001) {
              g = 0.5 / Math.sqrt(_);
              v = [(d[2][1] - d[1][2]) * g, (d[0][2] - d[2][0]) * g, (d[1][0] - d[0][1]) * g, 0.25 / g];
            } else if (d[0][0] > d[1][1] && d[0][0] > d[2][2]) {
              v = [(g = Math.sqrt(1 + d[0][0] - d[1][1] - d[2][2]) * 2) * 0.25, (d[0][1] + d[1][0]) / g, (d[0][2] + d[2][0]) / g, (d[2][1] - d[1][2]) / g];
            } else if (d[1][1] > d[2][2]) {
              g = Math.sqrt(1 + d[1][1] - d[0][0] - d[2][2]) * 2;
              v = [(d[0][1] + d[1][0]) / g, g * 0.25, (d[1][2] + d[2][1]) / g, (d[0][2] - d[2][0]) / g];
            } else {
              g = Math.sqrt(1 + d[2][2] - d[0][0] - d[1][1]) * 2;
              v = [(d[0][2] + d[2][0]) / g, (d[1][2] + d[2][1]) / g, g * 0.25, (d[1][0] - d[0][1]) / g];
            }
            return [f, h, p, v, l];
          };
        }();
        t.dot = r;
        t.makeMatrixDecomposition = function (t) {
          return [s(a(t))];
        };
        t.transformListToMatrix = a;
      })(n);
      (function (t) {
        function e(t, e) {
          var r = t.exec(e);
          if (r) {
            return [r = t.ignoreCase ? r[0].toLowerCase() : r[0], e.substr(r.length)];
          }
        }
        function r(t, e) {
          var r = t(e = e.replace(/^\s*/, ""));
          if (r) {
            return [r[0], r[1].replace(/^\s*/, "")];
          }
        }
        function n(t, e, r, n, i) {
          var o = [];
          var a = [];
          var s = [];
          for (var u = function (t, e) {
              for (var r = t, n = e; r && n;) {
                if (r > n) {
                  r %= n;
                } else {
                  n %= r;
                }
              }
              return t * e / (r + n);
            }(n.length, i.length), l = 0; l < u; l++) {
            var c = e(n[l % n.length], i[l % i.length]);
            if (!c) {
              return;
            }
            o.push(c[0]);
            a.push(c[1]);
            s.push(c[2]);
          }
          return [o, a, function (e) {
            var n = e.map(function (t, e) {
              return s[e](t);
            }).join(r);
            if (t) {
              return t(n);
            } else {
              return n;
            }
          }];
        }
        t.consumeToken = e;
        t.consumeTrimmed = r;
        t.consumeRepeated = function (t, n, i) {
          t = r.bind(null, t);
          var o = [];
          for (;;) {
            var a = t(i);
            if (!a) {
              return [o, i];
            }
            o.push(a[0]);
            if (!(a = e(n, i = a[1])) || a[1] == "") {
              return [o, i];
            }
            i = a[1];
          }
        };
        t.consumeParenthesised = function (t, e) {
          for (var r = 0, n = 0; n < e.length && (!/\s|,/.test(e[n]) || r != 0); n++) {
            if (e[n] == "(") {
              r++;
            } else if (e[n] == ")" && (--r == 0 && n++, r <= 0)) {
              break;
            }
          }
          var i = t(e.substr(0, n));
          if (i == null) {
            return undefined;
          } else {
            return [i, e.substr(n)];
          }
        };
        t.ignore = function (t) {
          return function (e) {
            var r = t(e);
            if (r) {
              r[0] = undefined;
            }
            return r;
          };
        };
        t.optional = function (t, e) {
          return function (r) {
            return t(r) || [e, r];
          };
        };
        t.consumeList = function (e, r) {
          var n = [];
          for (var i = 0; i < e.length; i++) {
            var o = t.consumeTrimmed(e[i], r);
            if (!o || o[0] == "") {
              return;
            }
            if (o[0] !== undefined) {
              n.push(o[0]);
            }
            r = o[1];
          }
          if (r == "") {
            return n;
          }
        };
        t.mergeNestedRepeated = n.bind(null, null);
        t.mergeWrappedNestedRepeated = n;
        t.mergeList = function (t, e, r) {
          var n = [];
          var i = [];
          var o = [];
          var a = 0;
          for (var s = 0; s < r.length; s++) {
            if (typeof r[s] == "function") {
              var u = r[s](t[a], e[a++]);
              n.push(u[0]);
              i.push(u[1]);
              o.push(u[2]);
            } else {
              (function (t) {
                n.push(false);
                i.push(false);
                o.push(function () {
                  return r[t];
                });
              })(s);
            }
          }
          return [n, i, function (t) {
            var e = "";
            for (var r = 0; r < t.length; r++) {
              e += o[r](t[r]);
            }
            return e;
          }];
        };
      })(n);
      (function (t) {
        function e(e) {
          var r = {
            inset: false,
            lengths: [],
            color: null
          };
          var n = t.consumeRepeated(function (e) {
            var n = t.consumeToken(/^inset/i, e);
            if (n) {
              r.inset = true;
              return n;
            } else if (n = t.consumeLengthOrPercent(e)) {
              r.lengths.push(n[0]);
              return n;
            } else if (n = t.consumeColor(e)) {
              r.color = n[0];
              return n;
            } else {
              return undefined;
            }
          }, /^/, e);
          if (n && n[0].length) {
            return [r, n[1]];
          }
        }
        var r = function (e, r, n, i) {
          function o(t) {
            return {
              inset: t,
              color: [0, 0, 0, 0],
              lengths: [{
                px: 0
              }, {
                px: 0
              }, {
                px: 0
              }, {
                px: 0
              }]
            };
          }
          var a = [];
          var s = [];
          for (var u = 0; u < n.length || u < i.length; u++) {
            var l = n[u] || o(i[u].inset);
            var c = i[u] || o(n[u].inset);
            a.push(l);
            s.push(c);
          }
          return t.mergeNestedRepeated(e, r, a, s);
        }.bind(null, function (e, r) {
          while (e.lengths.length < Math.max(e.lengths.length, r.lengths.length)) {
            e.lengths.push({
              px: 0
            });
          }
          while (r.lengths.length < Math.max(e.lengths.length, r.lengths.length)) {
            r.lengths.push({
              px: 0
            });
          }
          if (e.inset == r.inset && !!e.color == !!r.color) {
            var n;
            var i = [];
            var o = [[], 0];
            var a = [[], 0];
            for (var s = 0; s < e.lengths.length; s++) {
              var u = t.mergeDimensions(e.lengths[s], r.lengths[s], s == 2);
              o[0].push(u[0]);
              a[0].push(u[1]);
              i.push(u[2]);
            }
            if (e.color && r.color) {
              var l = t.mergeColors(e.color, r.color);
              o[1] = l[0];
              a[1] = l[1];
              n = l[2];
            }
            return [o, a, function (t) {
              var r = e.inset ? "inset " : " ";
              for (var o = 0; o < i.length; o++) {
                r += i[o](t[0][o]) + " ";
              }
              if (n) {
                r += n(t[1]);
              }
              return r;
            }];
          }
        }, ", ");
        t.addPropertiesHandler(function (r) {
          var n = t.consumeRepeated(e, /^,/, r);
          if (n && n[1] == "") {
            return n[0];
          }
        }, r, ["box-shadow", "text-shadow"]);
      })(n);
      (function (t, e) {
        function r(t) {
          return t.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
        }
        function n(t, e, r) {
          return Math.min(e, Math.max(t, r));
        }
        function i(t) {
          if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)) {
            return Number(t);
          }
        }
        function o(t, e) {
          return function (i, o) {
            return [i, o, function (i) {
              return r(n(t, e, i));
            }];
          };
        }
        function a(t) {
          var e = t.trim().split(/\s*[\s,]\s*/);
          if (e.length !== 0) {
            var r = [];
            for (var n = 0; n < e.length; n++) {
              var o = i(e[n]);
              if (o === undefined) {
                return;
              }
              r.push(o);
            }
            return r;
          }
        }
        t.clamp = n;
        t.addPropertiesHandler(a, function (t, e) {
          if (t.length == e.length) {
            return [t, e, function (t) {
              return t.map(r).join(" ");
            }];
          }
        }, ["stroke-dasharray"]);
        t.addPropertiesHandler(i, o(0, Infinity), ["border-image-width", "line-height"]);
        t.addPropertiesHandler(i, o(0, 1), ["opacity", "shape-image-threshold"]);
        t.addPropertiesHandler(i, function (t, e) {
          if (t != 0) {
            return o(0, Infinity)(t, e);
          }
        }, ["flex-grow", "flex-shrink"]);
        t.addPropertiesHandler(i, function (t, e) {
          return [t, e, function (t) {
            return Math.round(n(1, Infinity, t));
          }];
        }, ["orphans", "widows"]);
        t.addPropertiesHandler(i, function (t, e) {
          return [t, e, Math.round];
        }, ["z-index"]);
        t.parseNumber = i;
        t.parseNumberList = a;
        t.mergeNumbers = function (t, e) {
          return [t, e, r];
        };
        t.numberToString = r;
      })(n);
      (function (t, e) {
        t.addPropertiesHandler(String, function (t, e) {
          if (t == "visible" || e == "visible") {
            return [0, 1, function (r) {
              if (r <= 0) {
                return t;
              } else if (r >= 1) {
                return e;
              } else {
                return "visible";
              }
            }];
          }
        }, ["visibility"]);
      })(n);
      (function (t, e) {
        function r(t) {
          t = t.trim();
          o.fillStyle = "#000";
          o.fillStyle = t;
          var e = o.fillStyle;
          o.fillStyle = "#fff";
          o.fillStyle = t;
          if (e == o.fillStyle) {
            o.fillRect(0, 0, 1, 1);
            var r = o.getImageData(0, 0, 1, 1).data;
            o.clearRect(0, 0, 1, 1);
            var n = r[3] / 255;
            return [r[0] * n, r[1] * n, r[2] * n, n];
          }
        }
        function n(e, r) {
          return [e, r, function (e) {
            function r(t) {
              return Math.max(0, Math.min(255, t));
            }
            if (e[3]) {
              for (var n = 0; n < 3; n++) {
                e[n] = Math.round(r(e[n] / e[3]));
              }
            }
            e[3] = t.numberToString(t.clamp(0, 1, e[3]));
            return "rgba(" + e.join(",") + ")";
          }];
        }
        var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        i.width = i.height = 1;
        var o = i.getContext("2d");
        t.addPropertiesHandler(r, n, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]);
        t.consumeColor = t.consumeParenthesised.bind(null, r);
        t.mergeColors = n;
      })(n);
      (function (t, e) {
        function r(t) {
          function e() {
            var e = a.exec(t);
            o = e ? e[0] : undefined;
          }
          function r() {
            if (o !== "(") {
              return function () {
                var t = Number(o);
                e();
                return t;
              }();
            }
            e();
            var t = i();
            if (o !== ")") {
              return NaN;
            } else {
              e();
              return t;
            }
          }
          function n() {
            var t = r();
            for (; o === "*" || o === "/";) {
              var n = o;
              e();
              var i = r();
              if (n === "*") {
                t *= i;
              } else {
                t /= i;
              }
            }
            return t;
          }
          function i() {
            var t = n();
            for (; o === "+" || o === "-";) {
              var r = o;
              e();
              var i = n();
              if (r === "+") {
                t += i;
              } else {
                t -= i;
              }
            }
            return t;
          }
          var o;
          var a = /([\+\-\w\.]+|[\(\)\*\/])/g;
          e();
          return i();
        }
        function n(t, e) {
          if ((e = e.trim().toLowerCase()) == "0" && "px".search(t) >= 0) {
            return {
              px: 0
            };
          }
          if (/^[^(]*$|^calc/.test(e)) {
            e = e.replace(/calc\(/g, "(");
            var n = {};
            e = e.replace(t, function (t) {
              n[t] = null;
              return "U" + t;
            });
            var i = "U(" + t.source + ")";
            for (var o = e.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + i, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), a = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], s = 0; s < a.length;) {
              if (a[s].test(o)) {
                o = o.replace(a[s], "$1");
                s = 0;
              } else {
                s++;
              }
            }
            if (o == "D") {
              for (var u in n) {
                var l = r(e.replace(new RegExp("U" + u, "g"), "").replace(new RegExp(i, "g"), "*0"));
                if (!isFinite(l)) {
                  return;
                }
                n[u] = l;
              }
              return n;
            }
          }
        }
        function i(t, e) {
          return o(t, e, true);
        }
        function o(e, r, n) {
          var i;
          var o = [];
          for (i in e) {
            o.push(i);
          }
          for (i in r) {
            if (o.indexOf(i) < 0) {
              o.push(i);
            }
          }
          e = o.map(function (t) {
            return e[t] || 0;
          });
          r = o.map(function (t) {
            return r[t] || 0;
          });
          return [e, r, function (e) {
            var r = e.map(function (r, i) {
              if (e.length == 1 && n) {
                r = Math.max(r, 0);
              }
              return t.numberToString(r) + o[i];
            }).join(" + ");
            if (e.length > 1) {
              return "calc(" + r + ")";
            } else {
              return r;
            }
          }];
        }
        var a = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc";
        var s = n.bind(null, new RegExp(a, "g"));
        var u = n.bind(null, new RegExp(a + "|%", "g"));
        var l = n.bind(null, /deg|rad|grad|turn/g);
        t.parseLength = s;
        t.parseLengthOrPercent = u;
        t.consumeLengthOrPercent = t.consumeParenthesised.bind(null, u);
        t.parseAngle = l;
        t.mergeDimensions = o;
        var c = t.consumeParenthesised.bind(null, s);
        var f = t.consumeRepeated.bind(undefined, c, /^/);
        var d = t.consumeRepeated.bind(undefined, f, /^,/);
        t.consumeSizePairList = d;
        var h = t.mergeNestedRepeated.bind(undefined, i, " ");
        var p = t.mergeNestedRepeated.bind(undefined, h, ",");
        t.mergeNonNegativeSizePair = h;
        t.addPropertiesHandler(function (t) {
          var e = d(t);
          if (e && e[1] == "") {
            return e[0];
          }
        }, p, ["background-size"]);
        t.addPropertiesHandler(u, i, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]);
        t.addPropertiesHandler(u, o, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"]);
      })(n);
      (function (t, e) {
        function r(e) {
          return t.consumeLengthOrPercent(e) || t.consumeToken(/^auto/, e);
        }
        function n(e) {
          var n = t.consumeList([t.ignore(t.consumeToken.bind(null, /^rect/)), t.ignore(t.consumeToken.bind(null, /^\(/)), t.consumeRepeated.bind(null, r, /^,/), t.ignore(t.consumeToken.bind(null, /^\)/))], e);
          if (n && n[0].length == 4) {
            return n[0];
          }
        }
        var i = t.mergeWrappedNestedRepeated.bind(null, function (t) {
          return "rect(" + t + ")";
        }, function (e, r) {
          if (e == "auto" || r == "auto") {
            return [true, false, function (n) {
              var i = n ? e : r;
              if (i == "auto") {
                return "auto";
              }
              var o = t.mergeDimensions(i, i);
              return o[2](o[0]);
            }];
          } else {
            return t.mergeDimensions(e, r);
          }
        }, ", ");
        t.parseBox = n;
        t.mergeBoxes = i;
        t.addPropertiesHandler(n, i, ["clip"]);
      })(n);
      (function (t, e) {
        function r(t) {
          return function (e) {
            var r = 0;
            return t.map(function (t) {
              if (t === l) {
                return e[r++];
              } else {
                return t;
              }
            });
          };
        }
        function n(t) {
          return t;
        }
        function i(e) {
          if ((e = e.toLowerCase().trim()) == "none") {
            return [];
          }
          for (var r, n = /\s*(\w+)\(([^)]*)\)/g, i = [], o = 0; r = n.exec(e);) {
            if (r.index != o) {
              return;
            }
            o = r.index + r[0].length;
            var a = r[1];
            var s = d[a];
            if (!s) {
              return;
            }
            var u = r[2].split(",");
            var l = s[0];
            if (l.length < u.length) {
              return;
            }
            var h = [];
            for (var p = 0; p < l.length; p++) {
              var m;
              var g = u[p];
              var v = l[p];
              if ((m = g ? {
                A: function (e) {
                  if (e.trim() == "0") {
                    return f;
                  } else {
                    return t.parseAngle(e);
                  }
                },
                N: t.parseNumber,
                T: t.parseLengthOrPercent,
                L: t.parseLength
              }[v.toUpperCase()](g) : {
                a: f,
                n: h[0],
                t: c
              }[v]) === undefined) {
                return;
              }
              h.push(m);
            }
            i.push({
              t: a,
              d: h
            });
            if (n.lastIndex == e.length) {
              return i;
            }
          }
        }
        function o(t) {
          return t.toFixed(6).replace(".000000", "");
        }
        function a(e, r) {
          if (e.decompositionPair !== r) {
            e.decompositionPair = r;
            var n = t.makeMatrixDecomposition(e);
          }
          if (r.decompositionPair !== e) {
            r.decompositionPair = e;
            var i = t.makeMatrixDecomposition(r);
          }
          if (n[0] == null || i[0] == null) {
            return [[false], [true], function (t) {
              if (t) {
                return r[0].d;
              } else {
                return e[0].d;
              }
            }];
          } else {
            n[0].push(0);
            i[0].push(1);
            return [n, i, function (e) {
              var r = t.quat(n[0][3], i[0][3], e[5]);
              return t.composeMatrix(e[0], e[1], e[2], r, e[4]).map(o).join(",");
            }];
          }
        }
        function s(t) {
          return t.replace(/[xy]/, "");
        }
        function u(t) {
          return t.replace(/(x|y|z|3d)?$/, "3d");
        }
        var l = null;
        var c = {
          px: 0
        };
        var f = {
          deg: 0
        };
        var d = {
          matrix: ["NNNNNN", [l, l, 0, 0, l, l, 0, 0, 0, 0, 1, 0, l, l, 0, 1], n],
          matrix3d: ["NNNNNNNNNNNNNNNN", n],
          rotate: ["A"],
          rotatex: ["A"],
          rotatey: ["A"],
          rotatez: ["A"],
          rotate3d: ["NNNA"],
          perspective: ["L"],
          scale: ["Nn", r([l, l, 1]), n],
          scalex: ["N", r([l, 1, 1]), r([l, 1])],
          scaley: ["N", r([1, l, 1]), r([1, l])],
          scalez: ["N", r([1, 1, l])],
          scale3d: ["NNN", n],
          skew: ["Aa", null, n],
          skewx: ["A", null, r([l, f])],
          skewy: ["A", null, r([f, l])],
          translate: ["Tt", r([l, l, c]), n],
          translatex: ["T", r([l, c, c]), r([l, c])],
          translatey: ["T", r([c, l, c]), r([c, l])],
          translatez: ["L", r([c, c, l])],
          translate3d: ["TTL", n]
        };
        t.addPropertiesHandler(i, function (e, r) {
          var n = t.makeMatrixDecomposition && true;
          var i = false;
          if (!e.length || !r.length) {
            if (!e.length) {
              i = true;
              e = r;
              r = [];
            }
            for (var o = 0; o < e.length; o++) {
              var l = e[o].t;
              var c = e[o].d;
              var f = l.substr(0, 5) == "scale" ? 1 : 0;
              r.push({
                t: l,
                d: c.map(function (t) {
                  if (typeof t == "number") {
                    return f;
                  }
                  var e = {};
                  for (var r in t) {
                    e[r] = f;
                  }
                  return e;
                })
              });
            }
          }
          function h(t, e) {
            return t == "perspective" && e == "perspective" || (t == "matrix" || t == "matrix3d") && (e == "matrix" || e == "matrix3d");
          }
          var p = [];
          var m = [];
          var g = [];
          if (e.length != r.length) {
            if (!n) {
              return;
            }
            p = [(w = a(e, r))[0]];
            m = [w[1]];
            g = [["matrix", [w[2]]]];
          } else {
            for (o = 0; o < e.length; o++) {
              var v = e[o].t;
              var _ = r[o].t;
              var b = e[o].d;
              var y = r[o].d;
              var T = d[v];
              var x = d[_];
              if (h(v, _)) {
                if (!n) {
                  return;
                }
                var w = a([e[o]], [r[o]]);
                p.push(w[0]);
                m.push(w[1]);
                g.push(["matrix", [w[2]]]);
              } else {
                if (v == _) {
                  l = v;
                } else if (T[2] && x[2] && s(v) == s(_)) {
                  l = s(v);
                  b = T[2](b);
                  y = x[2](y);
                } else {
                  if (!T[1] || !x[1] || u(v) != u(_)) {
                    if (!n) {
                      return;
                    }
                    p = [(w = a(e, r))[0]];
                    m = [w[1]];
                    g = [["matrix", [w[2]]]];
                    break;
                  }
                  l = u(v);
                  b = T[1](b);
                  y = x[1](y);
                }
                var k = [];
                var N = [];
                var S = [];
                for (var R = 0; R < b.length; R++) {
                  w = (typeof b[R] == "number" ? t.mergeNumbers : t.mergeDimensions)(b[R], y[R]);
                  k[R] = w[0];
                  N[R] = w[1];
                  S.push(w[2]);
                }
                p.push(k);
                m.push(N);
                g.push([l, S]);
              }
            }
          }
          if (i) {
            var P = p;
            p = m;
            m = P;
          }
          return [p, m, function (t) {
            return t.map(function (t, e) {
              var r = t.map(function (t, r) {
                return g[e][1][r](t);
              }).join(",");
              if (g[e][0] == "matrix" && r.split(",").length == 16) {
                g[e][0] = "matrix3d";
              }
              return g[e][0] + "(" + r + ")";
            }).join(" ");
          }];
        }, ["transform"]);
        t.transformToSvgMatrix = function (e) {
          var r = t.transformListToMatrix(i(e));
          return "matrix(" + o(r[0]) + " " + o(r[1]) + " " + o(r[4]) + " " + o(r[5]) + " " + o(r[12]) + " " + o(r[13]) + ")";
        };
      })(n);
      (function (t) {
        function e(e) {
          e = Math.round(e / 100) * 100;
          if ((e = t.clamp(100, 900, e)) === 400) {
            return "normal";
          } else if (e === 700) {
            return "bold";
          } else {
            return String(e);
          }
        }
        t.addPropertiesHandler(function (t) {
          var e = Number(t);
          if (!isNaN(e) && !(e < 100) && !(e > 900) && e % 100 == 0) {
            return e;
          }
        }, function (t, r) {
          return [t, r, e];
        }, ["font-weight"]);
      })(n);
      (function (t) {
        function e(t) {
          var e = {};
          for (var r in t) {
            e[r] = -t[r];
          }
          return e;
        }
        function r(e) {
          return t.consumeToken(/^(left|center|right|top|bottom)\b/i, e) || t.consumeLengthOrPercent(e);
        }
        function n(e, n) {
          var i = t.consumeRepeated(r, /^/, n);
          if (i && i[1] == "") {
            var a = i[0];
            a[0] = a[0] || "center";
            a[1] = a[1] || "center";
            if (e == 3) {
              a[2] = a[2] || {
                px: 0
              };
            }
            if (a.length == e) {
              if (/top|bottom/.test(a[0]) || /left|right/.test(a[1])) {
                var s = a[0];
                a[0] = a[1];
                a[1] = s;
              }
              if (/left|right|center|Object/.test(a[0]) && /top|bottom|center|Object/.test(a[1])) {
                return a.map(function (t) {
                  if (typeof t == "object") {
                    return t;
                  } else {
                    return o[t];
                  }
                });
              }
            }
          }
        }
        function i(n) {
          var i = t.consumeRepeated(r, /^/, n);
          if (i) {
            for (var a = i[0], s = [{
                "%": 50
              }, {
                "%": 50
              }], u = 0, l = false, c = 0; c < a.length; c++) {
              var f = a[c];
              if (typeof f == "string") {
                l = /bottom|right/.test(f);
                s[u = {
                  left: 0,
                  right: 0,
                  center: u,
                  top: 1,
                  bottom: 1
                }[f]] = o[f];
                if (f == "center") {
                  u++;
                }
              } else {
                if (l) {
                  (f = e(f))["%"] = (f["%"] || 0) + 100;
                }
                s[u] = f;
                u++;
                l = false;
              }
            }
            return [s, i[1]];
          }
        }
        var o = {
          left: {
            "%": 0
          },
          center: {
            "%": 50
          },
          right: {
            "%": 100
          },
          top: {
            "%": 0
          },
          bottom: {
            "%": 100
          }
        };
        var a = t.mergeNestedRepeated.bind(null, t.mergeDimensions, " ");
        t.addPropertiesHandler(n.bind(null, 3), a, ["transform-origin"]);
        t.addPropertiesHandler(n.bind(null, 2), a, ["perspective-origin"]);
        t.consumePosition = i;
        t.mergeOffsetList = a;
        var s = t.mergeNestedRepeated.bind(null, a, ", ");
        t.addPropertiesHandler(function (e) {
          var r = t.consumeRepeated(i, /^,/, e);
          if (r && r[1] == "") {
            return r[0];
          }
        }, s, ["background-position", "object-position"]);
      })(n);
      (function (t) {
        var e = t.consumeParenthesised.bind(null, t.parseLengthOrPercent);
        var r = t.consumeRepeated.bind(undefined, e, /^/);
        var n = t.mergeNestedRepeated.bind(undefined, t.mergeDimensions, " ");
        var i = t.mergeNestedRepeated.bind(undefined, n, ",");
        t.addPropertiesHandler(function (n) {
          var i = t.consumeToken(/^circle/, n);
          if (i && i[0]) {
            return ["circle"].concat(t.consumeList([t.ignore(t.consumeToken.bind(undefined, /^\(/)), e, t.ignore(t.consumeToken.bind(undefined, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(undefined, /^\)/))], i[1]));
          }
          var o = t.consumeToken(/^ellipse/, n);
          if (o && o[0]) {
            return ["ellipse"].concat(t.consumeList([t.ignore(t.consumeToken.bind(undefined, /^\(/)), r, t.ignore(t.consumeToken.bind(undefined, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(undefined, /^\)/))], o[1]));
          }
          var a = t.consumeToken(/^polygon/, n);
          if (a && a[0]) {
            return ["polygon"].concat(t.consumeList([t.ignore(t.consumeToken.bind(undefined, /^\(/)), t.optional(t.consumeToken.bind(undefined, /^nonzero\s*,|^evenodd\s*,/), "nonzero,"), t.consumeSizePairList, t.ignore(t.consumeToken.bind(undefined, /^\)/))], a[1]));
          } else {
            return undefined;
          }
        }, function (e, r) {
          if (e[0] === r[0]) {
            if (e[0] == "circle") {
              return t.mergeList(e.slice(1), r.slice(1), ["circle(", t.mergeDimensions, " at ", t.mergeOffsetList, ")"]);
            } else if (e[0] == "ellipse") {
              return t.mergeList(e.slice(1), r.slice(1), ["ellipse(", t.mergeNonNegativeSizePair, " at ", t.mergeOffsetList, ")"]);
            } else if (e[0] == "polygon" && e[1] == r[1]) {
              return t.mergeList(e.slice(2), r.slice(2), ["polygon(", e[1], i, ")"]);
            } else {
              return undefined;
            }
          }
        }, ["shape-outside"]);
      })(n);
      (function (t, e) {
        function r(t, e) {
          e.concat([t]).forEach(function (e) {
            if (e in document.documentElement.style) {
              n[t] = e;
            }
            i[e] = t;
          });
        }
        var n = {};
        var i = {};
        r("transform", ["webkitTransform", "msTransform"]);
        r("transformOrigin", ["webkitTransformOrigin"]);
        r("perspective", ["webkitPerspective"]);
        r("perspectiveOrigin", ["webkitPerspectiveOrigin"]);
        t.propertyName = function (t) {
          return n[t] || t;
        };
        t.unprefixedPropertyName = function (t) {
          return i[t] || t;
        };
      })(n);
    })();
    (function () {
      if (document.createElement("div").animate([]).oncancel === undefined) {
        if (window.performance && performance.now) {
          function t() {
            return performance.now();
          }
        } else {
          t = function () {
            return Date.now();
          };
        }
        function e(t, e, r) {
          this.target = t;
          this.currentTime = e;
          this.timelineTime = r;
          this.type = "cancel";
          this.bubbles = false;
          this.cancelable = false;
          this.currentTarget = t;
          this.defaultPrevented = false;
          this.eventPhase = Event.AT_TARGET;
          this.timeStamp = Date.now();
        }
        var r = window.Element.prototype.animate;
        window.Element.prototype.animate = function (n, i) {
          var o = r.call(this, n, i);
          o._cancelHandlers = [];
          o.oncancel = null;
          var a = o.cancel;
          o.cancel = function () {
            a.call(this);
            var r = new e(this, null, t());
            var n = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
            setTimeout(function () {
              n.forEach(function (t) {
                t.call(r.target, r);
              });
            }, 0);
          };
          var s = o.addEventListener;
          o.addEventListener = function (t, e) {
            if (typeof e == "function" && t == "cancel") {
              this._cancelHandlers.push(e);
            } else {
              s.call(this, t, e);
            }
          };
          var u = o.removeEventListener;
          o.removeEventListener = function (t, e) {
            if (t == "cancel") {
              var r = this._cancelHandlers.indexOf(e);
              if (r >= 0) {
                this._cancelHandlers.splice(r, 1);
              }
            } else {
              u.call(this, t, e);
            }
          };
          return o;
        };
      }
    })();
    (function (t) {
      var e = document.documentElement;
      var r = null;
      var n = false;
      try {
        var i = getComputedStyle(e).getPropertyValue("opacity") == "0" ? "1" : "0";
        (r = e.animate({
          opacity: [i, i]
        }, {
          duration: 1
        })).currentTime = 0;
        n = getComputedStyle(e).getPropertyValue("opacity") == i;
      } catch (t) {} finally {
        if (r) {
          r.cancel();
        }
      }
      if (!n) {
        var o = window.Element.prototype.animate;
        window.Element.prototype.animate = function (e, r) {
          if (window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator]) {
            e = Array.from(e);
          }
          if (!Array.isArray(e) && e !== null) {
            e = t.convertToArrayForm(e);
          }
          return o.call(this, e, r);
        };
      }
    })(r);
  }
}]);