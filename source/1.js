(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  2: function (e, t, n) {
    "use strict";

    (function (e, r) {
      n.d(t, "a", function () {
        return Ie;
      });
      n.d(t, "b", function () {
        return Xe;
      });
      n.d(t, "c", function () {
        return $e;
      });
      n.d(t, "d", function () {
        return x;
      });
      n.d(t, "e", function () {
        return ne;
      });
      n.d(t, "f", function () {
        return rt;
      });
      n.d(t, "g", function () {
        return F;
      });
      n.d(t, "h", function () {
        return et;
      });
      n.d(t, "i", function () {
        return Ye;
      });
      n.d(t, "j", function () {
        return dt;
      });
      var o = [];
      Object.freeze(o);
      var i = {};
      function a() {
        return ++Ve.mobxGuid;
      }
      function s(e) {
        u(false, e);
        throw "X";
      }
      function u(e, t) {
        if (!e) {
          throw new Error("[mobx] " + (t || "An invariant failed, however the error is obfuscated because this is a production build."));
        }
      }
      Object.freeze(i);
      function c(e) {
        var t = false;
        return function () {
          if (!t) {
            t = true;
            return e.apply(this, arguments);
          }
        };
      }
      function l() {}
      function f(e) {
        return e !== null && typeof e == "object";
      }
      function h(e) {
        if (e === null || typeof e != "object") {
          return false;
        }
        var t = Object.getPrototypeOf(e);
        return t === Object.prototype || t === null;
      }
      function p(e, t, n) {
        Object.defineProperty(e, t, {
          enumerable: false,
          writable: true,
          configurable: true,
          value: n
        });
      }
      function d(e, t) {
        var n = "isMobX" + e;
        t.prototype[n] = true;
        return function (e) {
          return f(e) && e[n] === true;
        };
      }
      function v(e) {
        return e instanceof Map;
      }
      function y(e) {
        return e instanceof Set;
      }
      function b(e) {
        var t = new Set();
        for (var n in e) {
          t.add(n);
        }
        Object.getOwnPropertySymbols(e).forEach(function (n) {
          if (Object.getOwnPropertyDescriptor(e, n).enumerable) {
            t.add(n);
          }
        });
        return Array.from(t);
      }
      function g(e) {
        if (e && e.toString) {
          return e.toString();
        } else {
          return new String(e).toString();
        }
      }
      function m(e) {
        if (e === null) {
          return null;
        } else if (typeof e == "object") {
          return "" + e;
        } else {
          return e;
        }
      }
      var w = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols ? function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
      } : Object.getOwnPropertyNames;
      var O = Symbol("mobx administration");
      var S = function () {
        function e(e = "Atom@" + a()) {
          this.name = e;
          this.isPendingUnobservation = false;
          this.isBeingObserved = false;
          this.observers = new Set();
          this.diffValue = 0;
          this.lastAccessedBy = 0;
          this.lowestObserverState = Q.NOT_TRACKING;
        }
        e.prototype.onBecomeObserved = function () {
          if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (e) {
              return e();
            });
          }
        };
        e.prototype.onBecomeUnobserved = function () {
          if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (e) {
              return e();
            });
          }
        };
        e.prototype.reportObserved = function () {
          return Le(this);
        };
        e.prototype.reportChanged = function () {
          Ne();
          (function (e) {
            if (e.lowestObserverState === Q.STALE) {
              return;
            }
            e.lowestObserverState = Q.STALE;
            e.observers.forEach(function (t) {
              if (t.dependenciesState === Q.UP_TO_DATE) {
                if (t.isTracing !== Z.NONE) {
                  Me(t, e);
                }
                t.onBecomeStale();
              }
              t.dependenciesState = Q.STALE;
            });
          })(this);
          Be();
        };
        e.prototype.toString = function () {
          return this.name;
        };
        return e;
      }();
      var _ = d("Atom", S);
      function A(e, t = l, n = l) {
        var r;
        var o = new S(e);
        if (t !== l) {
          nt("onBecomeObserved", o, t, r);
        }
        if (n !== l) {
          tt(o, n);
        }
        return o;
      }
      var x = {
        identity: function (e, t) {
          return e === t;
        },
        structural: function (e, t) {
          return $t(e, t);
        },
        default: function (e, t) {
          return Object.is(e, t);
        },
        shallow: function (e, t) {
          return $t(e, t, 1);
        }
      };
      function E(e, t) {
        return (E = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) {
            if (t.hasOwnProperty(n)) {
              e[n] = t[n];
            }
          }
        })(e, t);
      }
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
      
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
      
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */
      function j() {
        return (j = Object.assign || function (e) {
          var t;
          for (var n = 1, r = arguments.length; n < r; n++) {
            for (var o in t = arguments[n]) {
              if (Object.prototype.hasOwnProperty.call(t, o)) {
                e[o] = t[o];
              }
            }
          }
          return e;
        }).apply(this, arguments);
      }
      function C(e) {
        var t = typeof Symbol == "function" && e[Symbol.iterator];
        var n = 0;
        if (t) {
          return t.call(e);
        } else {
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
      }
      function T(e, t) {
        var n = typeof Symbol == "function" && e[Symbol.iterator];
        if (!n) {
          return e;
        }
        var r;
        var o;
        var i = n.call(e);
        var a = [];
        try {
          while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
            a.push(r.value);
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (r && !r.done && (n = i.return)) {
              n.call(i);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        return a;
      }
      function R() {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e = e.concat(T(arguments[t]));
        }
        return e;
      }
      var V = Symbol("mobx did run lazy initializers");
      var k = Symbol("mobx pending decorators");
      var P = {};
      var D = {};
      function N(e, t) {
        var n = t ? P : D;
        return n[e] ||= {
          configurable: true,
          enumerable: t,
          get: function () {
            B(this);
            return this[e];
          },
          set: function (t) {
            B(this);
            this[e] = t;
          }
        };
      }
      function B(e) {
        var t;
        var n;
        if (e[V] !== true) {
          var r = e[k];
          if (r) {
            p(e, V, true);
            var o = R(Object.getOwnPropertySymbols(r), Object.keys(r));
            try {
              for (var i = C(o), a = i.next(); !a.done; a = i.next()) {
                var s = r[a.value];
                s.propertyCreator(e, s.prop, s.descriptor, s.decoratorTarget, s.decoratorArguments);
              }
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                if (a && !a.done && (n = i.return)) {
                  n.call(i);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
          }
        }
      }
      function L(e, t) {
        return function () {
          var n;
          function r(r, o, i, a) {
            if (a === true) {
              t(r, o, i, r, n);
              return null;
            }
            if (!Object.prototype.hasOwnProperty.call(r, k)) {
              var s = r[k];
              p(r, k, j({}, s));
            }
            r[k][o] = {
              prop: o,
              propertyCreator: t,
              descriptor: i,
              decoratorTarget: r,
              decoratorArguments: n
            };
            return N(o, e);
          }
          if (M(arguments)) {
            n = o;
            return r.apply(null, arguments);
          } else {
            n = Array.prototype.slice.call(arguments);
            return r;
          }
        };
      }
      function M(e) {
        return (e.length === 2 || e.length === 3) && (typeof e[1] == "string" || typeof e[1] == "symbol") || e.length === 4 && e[3] === true;
      }
      function I(e, t, n) {
        if (lt(e)) {
          return e;
        } else if (Array.isArray(e)) {
          return F.array(e, {
            name: n
          });
        } else if (h(e)) {
          return F.object(e, undefined, {
            name: n
          });
        } else if (v(e)) {
          return F.map(e, {
            name: n
          });
        } else if (y(e)) {
          return F.set(e, {
            name: n
          });
        } else {
          return e;
        }
      }
      function U(e) {
        return e;
      }
      function G(t) {
        u(t);
        var n = L(true, function (e, n, r, o, i) {
          var a = r ? r.initializer ? r.initializer.call(e) : r.value : undefined;
          Kt(e).addObservableProp(n, a, t);
        });
        if (e !== undefined) {
          e.env;
        }
        var r = n;
        r.enhancer = t;
        return r;
      }
      var K = {
        deep: true,
        name: undefined,
        defaultDecorator: undefined,
        proxy: true
      };
      function q(e) {
        if (e == null) {
          return K;
        } else if (typeof e == "string") {
          return {
            name: e,
            deep: true,
            proxy: true
          };
        } else {
          return e;
        }
      }
      Object.freeze(K);
      var z = G(I);
      var H = G(function (e, t, n) {
        if (e == null || Wt(e) || Pt(e) || Lt(e) || Ut(e)) {
          return e;
        } else if (Array.isArray(e)) {
          return F.array(e, {
            name: n,
            deep: false
          });
        } else if (h(e)) {
          return F.object(e, undefined, {
            name: n,
            deep: false
          });
        } else if (v(e)) {
          return F.map(e, {
            name: n,
            deep: false
          });
        } else if (y(e)) {
          return F.set(e, {
            name: n,
            deep: false
          });
        } else {
          return s(false);
        }
      });
      var J = G(U);
      var W = G(function (e, t, n) {
        if ($t(e, t)) {
          return t;
        } else {
          return e;
        }
      });
      function X(e) {
        if (e.defaultDecorator) {
          return e.defaultDecorator.enhancer;
        } else if (e.deep === false) {
          return U;
        } else {
          return I;
        }
      }
      var Y = {
        box: function (e, t) {
          if (arguments.length > 2) {
            $("box");
          }
          var n = q(t);
          return new Se(e, X(n), n.name, true, n.equals);
        },
        array: function (e, t) {
          if (arguments.length > 2) {
            $("array");
          }
          var n = q(t);
          return Ct(e, X(n), n.name);
        },
        map: function (e, t) {
          if (arguments.length > 2) {
            $("map");
          }
          var n = q(t);
          return new Bt(e, X(n), n.name);
        },
        set: function (e, t) {
          if (arguments.length > 2) {
            $("set");
          }
          var n = q(t);
          return new It(e, X(n), n.name);
        },
        object: function (e, t, n) {
          if (typeof arguments[1] == "string") {
            $("object");
          }
          var r = q(n);
          if (r.proxy === false) {
            return ot({}, e, t, r);
          }
          var o = it(r);
          var i = ot({}, undefined, undefined, r);
          var a = wt(i);
          at(a, e, t, o);
          return a;
        },
        ref: J,
        shallow: H,
        deep: z,
        struct: W
      };
      function F(e, t, n) {
        if (typeof arguments[1] == "string" || typeof arguments[1] == "symbol") {
          return z.apply(null, arguments);
        }
        if (lt(e)) {
          return e;
        }
        var r = h(e) ? F.object(e, t, n) : Array.isArray(e) ? F.array(e, t) : v(e) ? F.map(e, t) : y(e) ? F.set(e, t) : e;
        if (r !== e) {
          return r;
        }
        s(false);
      }
      function $(e) {
        s("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?");
      }
      Object.keys(Y).forEach(function (e) {
        return F[e] = Y[e];
      });
      var Q;
      var Z;
      var ee = L(false, function (e, t, n, r, o) {
        var i = n.get;
        var a = n.set;
        var s = o[0] || {};
        Kt(e).addComputedProp(e, t, j({
          get: i,
          set: a,
          context: e
        }, s));
      });
      var te = ee({
        equals: x.structural
      });
      function ne(e, t, n) {
        if (typeof t == "string") {
          return ee.apply(null, arguments);
        }
        if (e !== null && typeof e == "object" && arguments.length === 1) {
          return ee.apply(null, arguments);
        }
        var r = typeof t == "object" ? t : {};
        r.get = e;
        r.set = typeof t == "function" ? t : r.set;
        r.name = r.name || e.name || "";
        return new Ae(r);
      }
      ne.struct = te;
      (function (e) {
        e[e.NOT_TRACKING = -1] = "NOT_TRACKING";
        e[e.UP_TO_DATE = 0] = "UP_TO_DATE";
        e[e.POSSIBLY_STALE = 1] = "POSSIBLY_STALE";
        e[e.STALE = 2] = "STALE";
      })(Q ||= {});
      (function (e) {
        e[e.NONE = 0] = "NONE";
        e[e.LOG = 1] = "LOG";
        e[e.BREAK = 2] = "BREAK";
      })(Z ||= {});
      function re(e) {
        this.cause = e;
      }
      function oe(e) {
        return e instanceof re;
      }
      function ie(e) {
        switch (e.dependenciesState) {
          case Q.UP_TO_DATE:
            return false;
          case Q.NOT_TRACKING:
          case Q.STALE:
            return true;
          case Q.POSSIBLY_STALE:
            var t = he(true);
            var n = le();
            var r = e.observing;
            for (var o = r.length, i = 0; i < o; i++) {
              var a = r[i];
              if (xe(a)) {
                if (Ve.disableErrorBoundaries) {
                  a.get();
                } else {
                  try {
                    a.get();
                  } catch (e) {
                    fe(n);
                    pe(t);
                    return true;
                  }
                }
                if (e.dependenciesState === Q.STALE) {
                  fe(n);
                  pe(t);
                  return true;
                }
              }
            }
            de(e);
            fe(n);
            pe(t);
            return false;
        }
      }
      function ae(e) {
        var t = e.observers.size > 0;
        if (Ve.computationDepth > 0 && t) {
          s(false);
        }
        if (!Ve.allowStateChanges && (!!t || Ve.enforceActions === "strict")) {
          s(false);
        }
      }
      function se(e, t, n) {
        var r = he(true);
        de(e);
        e.newObserving = new Array(e.observing.length + 100);
        e.unboundDepsCount = 0;
        e.runId = ++Ve.runId;
        var o;
        var i = Ve.trackingDerivation;
        Ve.trackingDerivation = e;
        if (Ve.disableErrorBoundaries === true) {
          o = t.call(n);
        } else {
          try {
            o = t.call(n);
          } catch (e) {
            o = new re(e);
          }
        }
        Ve.trackingDerivation = i;
        (function (e) {
          var t = e.observing;
          var n = e.observing = e.newObserving;
          var r = Q.UP_TO_DATE;
          var o = 0;
          for (var i = e.unboundDepsCount, a = 0; a < i; a++) {
            if ((s = n[a]).diffValue === 0) {
              s.diffValue = 1;
              if (o !== a) {
                n[o] = s;
              }
              o++;
            }
            if (s.dependenciesState > r) {
              r = s.dependenciesState;
            }
          }
          n.length = o;
          e.newObserving = null;
          i = t.length;
          while (i--) {
            if ((s = t[i]).diffValue === 0) {
              Pe(s, e);
            }
            s.diffValue = 0;
          }
          while (o--) {
            var s;
            if ((s = n[o]).diffValue === 1) {
              s.diffValue = 0;
              ke(s, e);
            }
          }
          if (r !== Q.UP_TO_DATE) {
            e.dependenciesState = r;
            e.onBecomeStale();
          }
        })(e);
        pe(r);
        return o;
      }
      function ue(e) {
        var t = e.observing;
        e.observing = [];
        for (var n = t.length; n--;) {
          Pe(t[n], e);
        }
        e.dependenciesState = Q.NOT_TRACKING;
      }
      function ce(e) {
        var t = le();
        try {
          return e();
        } finally {
          fe(t);
        }
      }
      function le() {
        var e = Ve.trackingDerivation;
        Ve.trackingDerivation = null;
        return e;
      }
      function fe(e) {
        Ve.trackingDerivation = e;
      }
      function he(e) {
        var t = Ve.allowStateReads;
        Ve.allowStateReads = e;
        return t;
      }
      function pe(e) {
        Ve.allowStateReads = e;
      }
      function de(e) {
        if (e.dependenciesState !== Q.UP_TO_DATE) {
          e.dependenciesState = Q.UP_TO_DATE;
          var t = e.observing;
          for (var n = t.length; n--;) {
            t[n].lowestObserverState = Q.UP_TO_DATE;
          }
        }
      }
      var ve = 0;
      var ye = 1;
      var be = Object.getOwnPropertyDescriptor(function () {}, "name");
      if (be) {
        be.configurable;
      }
      function ge(e, t, n) {
        function r() {
          return me(e, t, n || this, arguments);
        }
        r.isMobxAction = true;
        return r;
      }
      function me(e, t, n, r) {
        var o = function (e, t, n) {
          var r = 0;
          var o = le();
          Ne();
          var i = we(true);
          var a = he(true);
          var s = {
            prevDerivation: o,
            prevAllowStateChanges: i,
            prevAllowStateReads: a,
            notifySpy: false,
            startTime: r,
            actionId: ye++,
            parentActionId: ve
          };
          ve = s.actionId;
          return s;
        }();
        try {
          return t.apply(n, r);
        } catch (e) {
          o.error = e;
          throw e;
        } finally {
          (function (e) {
            if (ve !== e.actionId) {
              s("invalid action stack. did you forget to finish an action?");
            }
            ve = e.parentActionId;
            if (e.error !== undefined) {
              Ve.suppressReactionErrors = true;
            }
            Oe(e.prevAllowStateChanges);
            pe(e.prevAllowStateReads);
            Be();
            fe(e.prevDerivation);
            if (e.notifySpy) {
              false;
            }
            Ve.suppressReactionErrors = false;
          })(o);
        }
      }
      function we(e) {
        var t = Ve.allowStateChanges;
        Ve.allowStateChanges = e;
        return t;
      }
      function Oe(e) {
        Ve.allowStateChanges = e;
      }
      var Se = function (e) {
        function t(t, n, r = "ObservableValue@" + a(), o = true, i = x.default) {
          var s = e.call(this, r) || this;
          s.enhancer = n;
          s.name = r;
          s.equals = i;
          s.hasUnreportedChange = false;
          s.value = n(t, undefined, r);
          return s;
        }
        (function (e, t) {
          function n() {
            this.constructor = e;
          }
          E(e, t);
          e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
        })(t, e);
        t.prototype.dehanceValue = function (e) {
          if (this.dehancer !== undefined) {
            return this.dehancer(e);
          } else {
            return e;
          }
        };
        t.prototype.set = function (e) {
          this.value;
          if ((e = this.prepareNewValue(e)) !== Ve.UNCHANGED) {
            0;
            this.setNewValue(e);
          }
        };
        t.prototype.prepareNewValue = function (e) {
          ae(this);
          if (Ot(this)) {
            var t = _t(this, {
              object: this,
              type: "update",
              newValue: e
            });
            if (!t) {
              return Ve.UNCHANGED;
            }
            e = t.newValue;
          }
          e = this.enhancer(e, this.value, this.name);
          if (this.equals(this.value, e)) {
            return Ve.UNCHANGED;
          } else {
            return e;
          }
        };
        t.prototype.setNewValue = function (e) {
          var t = this.value;
          this.value = e;
          this.reportChanged();
          if (At(this)) {
            Et(this, {
              type: "update",
              object: this,
              newValue: e,
              oldValue: t
            });
          }
        };
        t.prototype.get = function () {
          this.reportObserved();
          return this.dehanceValue(this.value);
        };
        t.prototype.intercept = function (e) {
          return St(this, e);
        };
        t.prototype.observe = function (e, t) {
          if (t) {
            e({
              object: this,
              type: "update",
              newValue: this.value,
              oldValue: undefined
            });
          }
          return xt(this, e);
        };
        t.prototype.toJSON = function () {
          return this.get();
        };
        t.prototype.toString = function () {
          return this.name + "[" + this.value + "]";
        };
        t.prototype.valueOf = function () {
          return m(this.get());
        };
        t.prototype[Symbol.toPrimitive] = function () {
          return this.valueOf();
        };
        return t;
      }(S);
      var _e = d("ObservableValue", Se);
      var Ae = function () {
        function e(e) {
          this.dependenciesState = Q.NOT_TRACKING;
          this.observing = [];
          this.newObserving = null;
          this.isBeingObserved = false;
          this.isPendingUnobservation = false;
          this.observers = new Set();
          this.diffValue = 0;
          this.runId = 0;
          this.lastAccessedBy = 0;
          this.lowestObserverState = Q.UP_TO_DATE;
          this.unboundDepsCount = 0;
          this.__mapid = "#" + a();
          this.value = new re(null);
          this.isComputing = false;
          this.isRunningSetter = false;
          this.isTracing = Z.NONE;
          u(e.get, "missing option for computed: get");
          this.derivation = e.get;
          this.name = e.name || "ComputedValue@" + a();
          if (e.set) {
            this.setter = ge(this.name + "-setter", e.set);
          }
          this.equals = e.equals || (e.compareStructural || e.struct ? x.structural : x.default);
          this.scope = e.context;
          this.requiresReaction = !!e.requiresReaction;
          this.keepAlive = !!e.keepAlive;
        }
        e.prototype.onBecomeStale = function () {
          (function (e) {
            if (e.lowestObserverState !== Q.UP_TO_DATE) {
              return;
            }
            e.lowestObserverState = Q.POSSIBLY_STALE;
            e.observers.forEach(function (t) {
              if (t.dependenciesState === Q.UP_TO_DATE) {
                t.dependenciesState = Q.POSSIBLY_STALE;
                if (t.isTracing !== Z.NONE) {
                  Me(t, e);
                }
                t.onBecomeStale();
              }
            });
          })(this);
        };
        e.prototype.onBecomeObserved = function () {
          if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (e) {
              return e();
            });
          }
        };
        e.prototype.onBecomeUnobserved = function () {
          if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (e) {
              return e();
            });
          }
        };
        e.prototype.get = function () {
          if (this.isComputing) {
            s("Cycle detected in computation " + this.name + ": " + this.derivation);
          }
          if (Ve.inBatch !== 0 || this.observers.size !== 0 || this.keepAlive) {
            Le(this);
            if (ie(this) && this.trackAndCompute()) {
              (function (e) {
                if (e.lowestObserverState === Q.STALE) {
                  return;
                }
                e.lowestObserverState = Q.STALE;
                e.observers.forEach(function (t) {
                  if (t.dependenciesState === Q.POSSIBLY_STALE) {
                    t.dependenciesState = Q.STALE;
                  } else if (t.dependenciesState === Q.UP_TO_DATE) {
                    e.lowestObserverState = Q.UP_TO_DATE;
                  }
                });
              })(this);
            }
          } else if (ie(this)) {
            this.warnAboutUntrackedRead();
            Ne();
            this.value = this.computeValue(false);
            Be();
          }
          var e = this.value;
          if (oe(e)) {
            throw e.cause;
          }
          return e;
        };
        e.prototype.peek = function () {
          var e = this.computeValue(false);
          if (oe(e)) {
            throw e.cause;
          }
          return e;
        };
        e.prototype.set = function (e) {
          if (this.setter) {
            u(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
              this.setter.call(this.scope, e);
            } finally {
              this.isRunningSetter = false;
            }
          } else {
            u(false, false);
          }
        };
        e.prototype.trackAndCompute = function () {
          var e = this.value;
          var t = this.dependenciesState === Q.NOT_TRACKING;
          var n = this.computeValue(true);
          var r = t || oe(e) || oe(n) || !this.equals(e, n);
          if (r) {
            this.value = n;
          }
          return r;
        };
        e.prototype.computeValue = function (e) {
          var t;
          this.isComputing = true;
          Ve.computationDepth++;
          if (e) {
            t = se(this, this.derivation, this.scope);
          } else if (Ve.disableErrorBoundaries === true) {
            t = this.derivation.call(this.scope);
          } else {
            try {
              t = this.derivation.call(this.scope);
            } catch (e) {
              t = new re(e);
            }
          }
          Ve.computationDepth--;
          this.isComputing = false;
          return t;
        };
        e.prototype.suspend = function () {
          if (!this.keepAlive) {
            ue(this);
            this.value = undefined;
          }
        };
        e.prototype.observe = function (e, t) {
          var n = this;
          var r = true;
          var o = undefined;
          return $e(function () {
            var i = n.get();
            if (!r || t) {
              var a = le();
              e({
                type: "update",
                object: n,
                newValue: i,
                oldValue: o
              });
              fe(a);
            }
            r = false;
            o = i;
          });
        };
        e.prototype.warnAboutUntrackedRead = function () {};
        e.prototype.toJSON = function () {
          return this.get();
        };
        e.prototype.toString = function () {
          return this.name + "[" + this.derivation.toString() + "]";
        };
        e.prototype.valueOf = function () {
          return m(this.get());
        };
        e.prototype[Symbol.toPrimitive] = function () {
          return this.valueOf();
        };
        return e;
      }();
      var xe = d("ComputedValue", Ae);
      function Ee() {
        this.version = 5;
        this.UNCHANGED = {};
        this.trackingDerivation = null;
        this.computationDepth = 0;
        this.runId = 0;
        this.mobxGuid = 0;
        this.inBatch = 0;
        this.pendingUnobservations = [];
        this.pendingReactions = [];
        this.isRunningReactions = false;
        this.allowStateChanges = true;
        this.allowStateReads = true;
        this.enforceActions = false;
        this.spyListeners = [];
        this.globalReactionErrorHandlers = [];
        this.computedRequiresReaction = false;
        this.reactionRequiresObservable = false;
        this.observableRequiresReaction = false;
        this.computedConfigurable = false;
        this.disableErrorBoundaries = false;
        this.suppressReactionErrors = false;
      }
      var je = {};
      function Ce() {
        if (typeof window != "undefined") {
          return window;
        } else if (r !== undefined) {
          return r;
        } else if (typeof self != "undefined") {
          return self;
        } else {
          return je;
        }
      }
      var Te = true;
      var Re = false;
      var Ve = function () {
        var e = Ce();
        if (e.__mobxInstanceCount > 0 && !e.__mobxGlobals) {
          Te = false;
        }
        if (e.__mobxGlobals && e.__mobxGlobals.version !== new Ee().version) {
          Te = false;
        }
        if (Te) {
          if (e.__mobxGlobals) {
            e.__mobxInstanceCount += 1;
            e.__mobxGlobals.UNCHANGED ||= {};
            return e.__mobxGlobals;
          } else {
            e.__mobxInstanceCount = 1;
            return e.__mobxGlobals = new Ee();
          }
        } else {
          setTimeout(function () {
            if (!Re) {
              s("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
          }, 1);
          return new Ee();
        }
      }();
      function ke(e, t) {
        e.observers.add(t);
        if (e.lowestObserverState > t.dependenciesState) {
          e.lowestObserverState = t.dependenciesState;
        }
      }
      function Pe(e, t) {
        e.observers.delete(t);
        if (e.observers.size === 0) {
          De(e);
        }
      }
      function De(e) {
        if (e.isPendingUnobservation === false) {
          e.isPendingUnobservation = true;
          Ve.pendingUnobservations.push(e);
        }
      }
      function Ne() {
        Ve.inBatch++;
      }
      function Be() {
        if (--Ve.inBatch == 0) {
          Ge();
          for (var e = Ve.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            n.isPendingUnobservation = false;
            if (n.observers.size === 0) {
              if (n.isBeingObserved) {
                n.isBeingObserved = false;
                n.onBecomeUnobserved();
              }
              if (n instanceof Ae) {
                n.suspend();
              }
            }
          }
          Ve.pendingUnobservations = [];
        }
      }
      function Le(e) {
        var t = Ve.trackingDerivation;
        if (t !== null) {
          if (t.runId !== e.lastAccessedBy) {
            e.lastAccessedBy = t.runId;
            t.newObserving[t.unboundDepsCount++] = e;
            if (!e.isBeingObserved) {
              e.isBeingObserved = true;
              e.onBecomeObserved();
            }
          }
          return true;
        } else {
          if (e.observers.size === 0 && Ve.inBatch > 0) {
            De(e);
          }
          return false;
        }
      }
      function Me(e, t) {
        console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'");
        if (e.isTracing === Z.BREAK) {
          var n = [];
          (function e(t, n, r) {
            if (n.length >= 1000) {
              n.push("(and many more)");
              return;
            }
            n.push("" + new Array(r).join("\t") + t.name);
            if (t.dependencies) {
              t.dependencies.forEach(function (t) {
                return e(t, n, r + 1);
              });
            }
          })((r = e, st(Xt(r, o))), n, 1);
          new Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof Ae ? e.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")();
        }
        var r;
        var o;
      }
      var Ie = function () {
        function e(e = "Reaction@" + a(), t, n, r = false) {
          this.name = e;
          this.onInvalidate = t;
          this.errorHandler = n;
          this.requiresObservable = r;
          this.observing = [];
          this.newObserving = [];
          this.dependenciesState = Q.NOT_TRACKING;
          this.diffValue = 0;
          this.runId = 0;
          this.unboundDepsCount = 0;
          this.__mapid = "#" + a();
          this.isDisposed = false;
          this._isScheduled = false;
          this._isTrackPending = false;
          this._isRunning = false;
          this.isTracing = Z.NONE;
        }
        e.prototype.onBecomeStale = function () {
          this.schedule();
        };
        e.prototype.schedule = function () {
          if (!this._isScheduled) {
            this._isScheduled = true;
            Ve.pendingReactions.push(this);
            Ge();
          }
        };
        e.prototype.isScheduled = function () {
          return this._isScheduled;
        };
        e.prototype.runReaction = function () {
          if (!this.isDisposed) {
            Ne();
            this._isScheduled = false;
            if (ie(this)) {
              this._isTrackPending = true;
              try {
                this.onInvalidate();
                this._isTrackPending;
              } catch (e) {
                this.reportExceptionInDerivation(e);
              }
            }
            Be();
          }
        };
        e.prototype.track = function (e) {
          if (!this.isDisposed) {
            Ne();
            0;
            this._isRunning = true;
            var t = se(this, e, undefined);
            this._isRunning = false;
            this._isTrackPending = false;
            if (this.isDisposed) {
              ue(this);
            }
            if (oe(t)) {
              this.reportExceptionInDerivation(t.cause);
            }
            Be();
          }
        };
        e.prototype.reportExceptionInDerivation = function (e) {
          var t = this;
          if (this.errorHandler) {
            this.errorHandler(e, this);
          } else {
            if (Ve.disableErrorBoundaries) {
              throw e;
            }
            var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
            if (Ve.suppressReactionErrors) {
              console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)");
            } else {
              console.error(n, e);
            }
            Ve.globalReactionErrorHandlers.forEach(function (n) {
              return n(e, t);
            });
          }
        };
        e.prototype.dispose = function () {
          if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
              Ne();
              ue(this);
              Be();
            }
          }
        };
        e.prototype.getDisposer = function () {
          var e = this.dispose.bind(this);
          e[O] = this;
          return e;
        };
        e.prototype.toString = function () {
          return "Reaction[" + this.name + "]";
        };
        e.prototype.trace = function (e = false) {
          (function () {
            var e = [];
            for (var t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
            var n = false;
            if (typeof e[e.length - 1] == "boolean") {
              n = e.pop();
            }
            var r = vt(e);
            if (!r) {
              return s(false);
            }
            if (r.isTracing === Z.NONE) {
              console.log("[mobx.trace] '" + r.name + "' tracing enabled");
            }
            r.isTracing = n ? Z.BREAK : Z.LOG;
          })(this, e);
        };
        return e;
      }();
      function Ue(e) {
        return e();
      }
      function Ge() {
        if (!(Ve.inBatch > 0) && !Ve.isRunningReactions) {
          Ue(Ke);
        }
      }
      function Ke() {
        Ve.isRunningReactions = true;
        for (var e = Ve.pendingReactions, t = 0; e.length > 0;) {
          if (++t == 100) {
            console.error("Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + e[0]);
            e.splice(0);
          }
          var n = e.splice(0);
          for (var r = 0, o = n.length; r < o; r++) {
            n[r].runReaction();
          }
        }
        Ve.isRunningReactions = false;
      }
      var qe = d("Reaction", Ie);
      function ze(e) {
        var t = Ue;
        Ue = function (n) {
          return e(function () {
            return t(n);
          });
        };
      }
      function He() {
        s(false);
      }
      function Je(e) {
        return function (t, n, r) {
          if (r) {
            if (r.value) {
              return {
                value: ge(e, r.value),
                enumerable: false,
                configurable: true,
                writable: true
              };
            }
            var o = r.initializer;
            return {
              enumerable: false,
              configurable: true,
              writable: true,
              initializer: function () {
                return ge(e, o.call(this));
              }
            };
          }
          return We(e).apply(this, arguments);
        };
      }
      function We(e) {
        return function (t, n, r) {
          Object.defineProperty(t, n, {
            configurable: true,
            enumerable: false,
            get: function () {},
            set: function (t) {
              p(this, n, Xe(e, t));
            }
          });
        };
      }
      function Xe(e, t, n, r) {
        if (arguments.length === 1 && typeof e == "function") {
          return ge(e.name || "<unnamed action>", e);
        } else if (arguments.length === 2 && typeof t == "function") {
          return ge(e, t);
        } else if (arguments.length === 1 && typeof e == "string") {
          return Je(e);
        } else if (r !== true) {
          return Je(t).apply(null, arguments);
        } else {
          p(e, t, ge(e.name || t, n.value, this));
          return;
        }
      }
      function Ye(e, t) {
        if (typeof e != "string") {
          e.name;
        }
        return me(0, typeof e == "function" ? e : t, this, undefined);
      }
      function Fe(e, t, n) {
        p(e, t, ge(t, n.bind(e)));
      }
      function $e(e, t = i) {
        var n;
        var r = t && t.name || e.name || "Autorun@" + a();
        if (!t.scheduler && !t.delay) {
          n = new Ie(r, function () {
            this.track(u);
          }, t.onError, t.requiresObservable);
        } else {
          var o = Ze(t);
          var s = false;
          n = new Ie(r, function () {
            if (!s) {
              s = true;
              o(function () {
                s = false;
                if (!n.isDisposed) {
                  n.track(u);
                }
              });
            }
          }, t.onError, t.requiresObservable);
        }
        function u() {
          e(n);
        }
        n.schedule();
        return n.getDisposer();
      }
      Xe.bound = function (e, t, n, r) {
        if (r === true) {
          Fe(e, t, n.value);
          return null;
        } else if (n) {
          return {
            configurable: true,
            enumerable: false,
            get: function () {
              Fe(this, t, n.value || n.initializer.call(this));
              return this[t];
            },
            set: He
          };
        } else {
          return {
            enumerable: false,
            configurable: true,
            set: function (e) {
              Fe(this, t, e);
            },
            get: function () {}
          };
        }
      };
      function Qe(e) {
        return e();
      }
      function Ze(e) {
        if (e.scheduler) {
          return e.scheduler;
        } else if (e.delay) {
          return function (t) {
            return setTimeout(t, e.delay);
          };
        } else {
          return Qe;
        }
      }
      function et(e, t, n = i) {
        var r;
        var o;
        var s;
        var u = n.name || "Reaction@" + a();
        var c = Xe(u, n.onError ? (r = n.onError, o = t, function () {
          try {
            return o.apply(this, arguments);
          } catch (e) {
            r.call(this, e);
          }
        }) : t);
        var l = !n.scheduler && !n.delay;
        var f = Ze(n);
        var h = true;
        var p = false;
        var d = n.compareStructural ? x.structural : n.equals || x.default;
        var v = new Ie(u, function () {
          if (h || l) {
            y();
          } else if (!p) {
            p = true;
            f(y);
          }
        }, n.onError, n.requiresObservable);
        function y() {
          p = false;
          if (!v.isDisposed) {
            var t = false;
            v.track(function () {
              var n = e(v);
              t = h || !d(s, n);
              s = n;
            });
            if (h && n.fireImmediately) {
              c(s, v);
            }
            if (!h && t === true) {
              c(s, v);
            }
            h &&= false;
          }
        }
        v.schedule();
        return v.getDisposer();
      }
      function tt(e, t, n) {
        return nt("onBecomeUnobserved", e, t, n);
      }
      function nt(e, t, n, r) {
        var o = typeof r == "function" ? Xt(t, n) : Xt(t);
        var i = typeof r == "function" ? r : n;
        var a = e + "Listeners";
        if (o[a]) {
          o[a].add(i);
        } else {
          o[a] = new Set([i]);
        }
        if (typeof o[e] != "function") {
          return s(false);
        } else {
          return function () {
            var e = o[a];
            if (e) {
              e.delete(i);
              if (e.size === 0) {
                delete o[a];
              }
            }
          };
        }
      }
      function rt(e) {
        var t = e.enforceActions;
        var n = e.computedRequiresReaction;
        var r = e.computedConfigurable;
        var o = e.disableErrorBoundaries;
        var i = e.reactionScheduler;
        var a = e.reactionRequiresObservable;
        var u = e.observableRequiresReaction;
        if (e.isolateGlobalState === true) {
          if (Ve.pendingReactions.length || Ve.inBatch || Ve.isRunningReactions) {
            s("isolateGlobalState should be called before MobX is running any reactions");
          }
          Re = true;
          if (Te) {
            if (--Ce().__mobxInstanceCount == 0) {
              Ce().__mobxGlobals = undefined;
            }
            Ve = new Ee();
          }
        }
        if (t !== undefined) {
          var c = undefined;
          switch (t) {
            case true:
            case "observed":
              c = true;
              break;
            case false:
            case "never":
              c = false;
              break;
            case "strict":
            case "always":
              c = "strict";
              break;
            default:
              s("Invalid value for 'enforceActions': '" + t + "', expected 'never', 'always' or 'observed'");
          }
          Ve.enforceActions = c;
          Ve.allowStateChanges = c !== true && c !== "strict";
        }
        if (n !== undefined) {
          Ve.computedRequiresReaction = !!n;
        }
        if (a !== undefined) {
          Ve.reactionRequiresObservable = !!a;
        }
        if (u !== undefined) {
          Ve.observableRequiresReaction = !!u;
          Ve.allowStateReads = !Ve.observableRequiresReaction;
        }
        if (r !== undefined) {
          Ve.computedConfigurable = !!r;
        }
        if (o !== undefined) {
          if (o === true) {
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
          }
          Ve.disableErrorBoundaries = !!o;
        }
        if (i) {
          ze(i);
        }
      }
      function ot(e, t, n, r) {
        var o = it(r = q(r));
        B(e);
        Kt(e, r.name, o.enhancer);
        if (t) {
          at(e, t, n, o);
        }
        return e;
      }
      function it(e) {
        return e.defaultDecorator || (e.deep === false ? J : z);
      }
      function at(e, t, n, r) {
        var o;
        var i;
        Ne();
        try {
          var a = w(t);
          try {
            for (var s = C(a), u = s.next(); !u.done; u = s.next()) {
              var c = u.value;
              var l = Object.getOwnPropertyDescriptor(t, c);
              0;
              var f = (n && c in n ? n[c] : l.get ? ee : r)(e, c, l, true);
              if (f) {
                Object.defineProperty(e, c, f);
              }
            }
          } catch (e) {
            o = {
              error: e
            };
          } finally {
            try {
              if (u && !u.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        } finally {
          Be();
        }
      }
      function st(e) {
        var t;
        var n;
        var r = {
          name: e.name
        };
        if (e.observing && e.observing.length > 0) {
          r.dependencies = (t = e.observing, n = [], t.forEach(function (e) {
            if (n.indexOf(e) === -1) {
              n.push(e);
            }
          }), n).map(st);
        }
        return r;
      }
      function ut() {
        this.message = "FLOW_CANCELLED";
      }
      function ct(e, t) {
        return e != null && (t !== undefined ? !!Wt(e) && e[O].values.has(t) : Wt(e) || !!e[O] || _(e) || qe(e) || xe(e));
      }
      function lt(e) {
        if (arguments.length !== 1) {
          s(false);
        }
        return ct(e);
      }
      function ft(e) {
        if (Wt(e)) {
          return e[O].getKeys();
        } else if (Lt(e) || Ut(e)) {
          return Array.from(e.keys());
        } else if (Pt(e)) {
          return e.map(function (e, t) {
            return t;
          });
        } else {
          return s(false);
        }
      }
      ut.prototype = Object.create(Error.prototype);
      var ht = {
        detectCycles: true,
        exportMapsAsObjects: true,
        recurseEverything: false
      };
      function pt(e, t, n, r) {
        if (r.detectCycles) {
          e.set(t, n);
        }
        return n;
      }
      function dt(e, t) {
        var n;
        if (typeof t == "boolean") {
          t = {
            detectCycles: t
          };
        }
        t ||= ht;
        t.detectCycles = t.detectCycles === undefined ? t.recurseEverything === true : t.detectCycles === true;
        if (t.detectCycles) {
          n = new Map();
        }
        return function e(t, n, r) {
          if (!n.recurseEverything && !lt(t)) {
            return t;
          }
          if (typeof t != "object") {
            return t;
          }
          if (t === null) {
            return null;
          }
          if (t instanceof Date) {
            return t;
          }
          if (_e(t)) {
            return e(t.get(), n, r);
          }
          if (lt(t)) {
            ft(t);
          }
          if (n.detectCycles === true && t !== null && r.has(t)) {
            return r.get(t);
          }
          if (Pt(t) || Array.isArray(t)) {
            var o = pt(r, t, [], n);
            var i = t.map(function (t) {
              return e(t, n, r);
            });
            o.length = i.length;
            for (var a = 0, s = i.length; a < s; a++) {
              o[a] = i[a];
            }
            return o;
          }
          if (Ut(t) || Object.getPrototypeOf(t) === Set.prototype) {
            if (n.exportMapsAsObjects === false) {
              var u = pt(r, t, new Set(), n);
              t.forEach(function (t) {
                u.add(e(t, n, r));
              });
              return u;
            }
            var c = pt(r, t, [], n);
            t.forEach(function (t) {
              c.push(e(t, n, r));
            });
            return c;
          }
          if (Lt(t) || Object.getPrototypeOf(t) === Map.prototype) {
            if (n.exportMapsAsObjects === false) {
              var l = pt(r, t, new Map(), n);
              t.forEach(function (t, o) {
                l.set(o, e(t, n, r));
              });
              return l;
            }
            var f = pt(r, t, {}, n);
            t.forEach(function (t, o) {
              f[o] = e(t, n, r);
            });
            return f;
          }
          var h = pt(r, t, {}, n);
          b(t).forEach(function (o) {
            h[o] = e(t[o], n, r);
          });
          return h;
        }(e, t, n);
      }
      function vt(e) {
        switch (e.length) {
          case 0:
            return Ve.trackingDerivation;
          case 1:
            return Xt(e[0]);
          case 2:
            return Xt(e[0], e[1]);
        }
      }
      function yt(e, t = undefined) {
        Ne();
        try {
          return e.apply(t);
        } finally {
          Be();
        }
      }
      function bt(e) {
        return e[O];
      }
      function gt(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "symbol";
      }
      var mt = {
        has: function (e, t) {
          if (t === O || t === "constructor" || t === V) {
            return true;
          }
          var n = bt(e);
          if (gt(t)) {
            return n.has(t);
          } else {
            return t in e;
          }
        },
        get: function (e, t) {
          if (t === O || t === "constructor" || t === V) {
            return e[t];
          }
          var n = bt(e);
          var r = n.values.get(t);
          if (r instanceof S) {
            var o = r.get();
            if (o === undefined) {
              n.has(t);
            }
            return o;
          }
          if (gt(t)) {
            n.has(t);
          }
          return e[t];
        },
        set: function (e, t, n) {
          return !!gt(t) && (function e(t, n, r) {
            if (arguments.length !== 2 || Ut(t)) {
              if (Wt(t)) {
                var o = t[O];
                var i = o.values.get(n);
                if (i) {
                  o.write(n, r);
                } else {
                  o.addObservableProp(n, r, o.defaultEnhancer);
                }
              } else if (Lt(t)) {
                t.set(n, r);
              } else if (Ut(t)) {
                t.add(n);
              } else {
                if (!Pt(t)) {
                  return s(false);
                }
                if (typeof n != "number") {
                  n = parseInt(n, 10);
                }
                u(n >= 0, "Not a valid index: '" + n + "'");
                Ne();
                if (n >= t.length) {
                  t.length = n + 1;
                }
                t[n] = r;
                Be();
              }
            } else {
              Ne();
              var a = n;
              try {
                for (var c in a) {
                  e(t, c, a[c]);
                }
              } finally {
                Be();
              }
            }
          }(e, t, n), true);
        },
        deleteProperty: function (e, t) {
          return !!gt(t) && (bt(e).remove(t), true);
        },
        ownKeys: function (e) {
          bt(e).keysAtom.reportObserved();
          return Reflect.ownKeys(e);
        },
        preventExtensions: function (e) {
          s("Dynamic observable objects cannot be frozen");
          return false;
        }
      };
      function wt(e) {
        var t = new Proxy(e, mt);
        e[O].proxy = t;
        return t;
      }
      function Ot(e) {
        return e.interceptors !== undefined && e.interceptors.length > 0;
      }
      function St(e, t) {
        var n = e.interceptors ||= [];
        n.push(t);
        return c(function () {
          var e = n.indexOf(t);
          if (e !== -1) {
            n.splice(e, 1);
          }
        });
      }
      function _t(e, t) {
        var n = le();
        try {
          for (var r = R(e.interceptors || []), o = 0, i = r.length; o < i && (u(!(t = r[o](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); o++);
          return t;
        } finally {
          fe(n);
        }
      }
      function At(e) {
        return e.changeListeners !== undefined && e.changeListeners.length > 0;
      }
      function xt(e, t) {
        var n = e.changeListeners ||= [];
        n.push(t);
        return c(function () {
          var e = n.indexOf(t);
          if (e !== -1) {
            n.splice(e, 1);
          }
        });
      }
      function Et(e, t) {
        var n = le();
        var r = e.changeListeners;
        if (r) {
          for (var o = 0, i = (r = r.slice()).length; o < i; o++) {
            r[o](t);
          }
          fe(n);
        }
      }
      var jt = {
        get: function (e, t) {
          if (t === O) {
            return e[O];
          } else if (t === "length") {
            return e[O].getArrayLength();
          } else if (typeof t == "number") {
            return Rt.get.call(e, t);
          } else if (typeof t != "string" || isNaN(t)) {
            if (Rt.hasOwnProperty(t)) {
              return Rt[t];
            } else {
              return e[t];
            }
          } else {
            return Rt.get.call(e, parseInt(t));
          }
        },
        set: function (e, t, n) {
          if (t === "length") {
            e[O].setArrayLength(n);
          }
          if (typeof t == "number") {
            Rt.set.call(e, t, n);
          }
          if (typeof t == "symbol" || isNaN(t)) {
            e[t] = n;
          } else {
            Rt.set.call(e, parseInt(t), n);
          }
          return true;
        },
        preventExtensions: function (e) {
          s("Observable arrays cannot be frozen");
          return false;
        }
      };
      function Ct(e, t, n = "ObservableArray@" + a(), r = false) {
        var o;
        var i;
        var s;
        var u = new Tt(n, t, r);
        o = u.values;
        i = O;
        s = u;
        Object.defineProperty(o, i, {
          enumerable: false,
          writable: false,
          configurable: true,
          value: s
        });
        var c = new Proxy(u.values, jt);
        u.proxy = c;
        if (e && e.length) {
          var l = we(true);
          u.spliceWithArray(0, 0, e);
          Oe(l);
        }
        return c;
      }
      var Tt = function () {
        function e(e, t, n) {
          this.owned = n;
          this.values = [];
          this.proxy = undefined;
          this.lastKnownLength = 0;
          this.atom = new S(e || "ObservableArray@" + a());
          this.enhancer = function (n, r) {
            return t(n, r, e + "[..]");
          };
        }
        e.prototype.dehanceValue = function (e) {
          if (this.dehancer !== undefined) {
            return this.dehancer(e);
          } else {
            return e;
          }
        };
        e.prototype.dehanceValues = function (e) {
          if (this.dehancer !== undefined && e.length > 0) {
            return e.map(this.dehancer);
          } else {
            return e;
          }
        };
        e.prototype.intercept = function (e) {
          return St(this, e);
        };
        e.prototype.observe = function (e, t = false) {
          if (t) {
            e({
              object: this.proxy,
              type: "splice",
              index: 0,
              added: this.values.slice(),
              addedCount: this.values.length,
              removed: [],
              removedCount: 0
            });
          }
          return xt(this, e);
        };
        e.prototype.getArrayLength = function () {
          this.atom.reportObserved();
          return this.values.length;
        };
        e.prototype.setArrayLength = function (e) {
          if (typeof e != "number" || e < 0) {
            throw new Error("[mobx.array] Out of range: " + e);
          }
          var t = this.values.length;
          if (e !== t) {
            if (e > t) {
              var n = new Array(e - t);
              for (var r = 0; r < e - t; r++) {
                n[r] = undefined;
              }
              this.spliceWithArray(t, 0, n);
            } else {
              this.spliceWithArray(e, t - e);
            }
          }
        };
        e.prototype.updateArrayLength = function (e, t) {
          if (e !== this.lastKnownLength) {
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
          }
          this.lastKnownLength += t;
        };
        e.prototype.spliceWithArray = function (e, t, n) {
          var r = this;
          ae(this.atom);
          var i = this.values.length;
          if (e === undefined) {
            e = 0;
          } else if (e > i) {
            e = i;
          } else if (e < 0) {
            e = Math.max(0, i + e);
          }
          t = arguments.length === 1 ? i - e : t == null ? 0 : Math.max(0, Math.min(t, i - e));
          if (n === undefined) {
            n = o;
          }
          if (Ot(this)) {
            var a = _t(this, {
              object: this.proxy,
              type: "splice",
              index: e,
              removedCount: t,
              added: n
            });
            if (!a) {
              return o;
            }
            t = a.removedCount;
            n = a.added;
          }
          n = n.length === 0 ? n : n.map(function (e) {
            return r.enhancer(e, undefined);
          });
          var s = this.spliceItemsIntoValues(e, t, n);
          if (t !== 0 || n.length !== 0) {
            this.notifyArraySplice(e, n, s);
          }
          return this.dehanceValues(s);
        };
        e.prototype.spliceItemsIntoValues = function (e, t, n) {
          var r;
          if (n.length < 10000) {
            return (r = this.values).splice.apply(r, R([e, t], n));
          }
          var o = this.values.slice(e, e + t);
          this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t));
          return o;
        };
        e.prototype.notifyArrayChildUpdate = function (e, t, n) {
          var r = !this.owned && false;
          var o = At(this);
          var i = o || r ? {
            object: this.proxy,
            type: "update",
            index: e,
            newValue: t,
            oldValue: n
          } : null;
          this.atom.reportChanged();
          if (o) {
            Et(this, i);
          }
        };
        e.prototype.notifyArraySplice = function (e, t, n) {
          var r = !this.owned && false;
          var o = At(this);
          var i = o || r ? {
            object: this.proxy,
            type: "splice",
            index: e,
            removed: n,
            added: t,
            removedCount: n.length,
            addedCount: t.length
          } : null;
          this.atom.reportChanged();
          if (o) {
            Et(this, i);
          }
        };
        return e;
      }();
      var Rt = {
        intercept: function (e) {
          return this[O].intercept(e);
        },
        observe: function (e, t = false) {
          return this[O].observe(e, t);
        },
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[O];
          return t.spliceWithArray(0, t.values.length, e);
        },
        toJS: function () {
          return this.slice();
        },
        toJSON: function () {
          return this.toJS();
        },
        splice: function (e, t) {
          var n = [];
          for (var r = 2; r < arguments.length; r++) {
            n[r - 2] = arguments[r];
          }
          var o = this[O];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return o.spliceWithArray(e);
            case 2:
              return o.spliceWithArray(e, t);
          }
          return o.spliceWithArray(e, t, n);
        },
        spliceWithArray: function (e, t, n) {
          return this[O].spliceWithArray(e, t, n);
        },
        push: function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          var n = this[O];
          n.spliceWithArray(n.values.length, 0, e);
          return n.values.length;
        },
        pop: function () {
          return this.splice(Math.max(this[O].values.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          var n = this[O];
          n.spliceWithArray(0, 0, e);
          return n.values.length;
        },
        reverse: function () {
          var e = this.slice();
          return e.reverse.apply(e, arguments);
        },
        sort: function (e) {
          var t = this.slice();
          return t.sort.apply(t, arguments);
        },
        remove: function (e) {
          var t = this[O];
          var n = t.dehanceValues(t.values).indexOf(e);
          return n > -1 && (this.splice(n, 1), true);
        },
        get: function (e) {
          var t = this[O];
          if (t) {
            if (e < t.values.length) {
              t.atom.reportObserved();
              return t.dehanceValue(t.values[e]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
          }
        },
        set: function (e, t) {
          var n = this[O];
          var r = n.values;
          if (e < r.length) {
            ae(n.atom);
            var o = r[e];
            if (Ot(n)) {
              var i = _t(n, {
                type: "update",
                object: n.proxy,
                index: e,
                newValue: t
              });
              if (!i) {
                return;
              }
              t = i.newValue;
            }
            if ((t = n.enhancer(t, o)) !== o) {
              r[e] = t;
              n.notifyArrayChildUpdate(e, t, o);
            }
          } else {
            if (e !== r.length) {
              throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + r.length);
            }
            n.spliceWithArray(e, 0, [t]);
          }
        }
      };
      ["concat", "flat", "includes", "indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function (e) {
        if (typeof Array.prototype[e] == "function") {
          Rt[e] = function () {
            var t = this[O];
            t.atom.reportObserved();
            var n = t.dehanceValues(t.values);
            return n[e].apply(n, arguments);
          };
        }
      });
      ["every", "filter", "find", "findIndex", "flatMap", "forEach", "map", "some"].forEach(function (e) {
        if (typeof Array.prototype[e] == "function") {
          Rt[e] = function (t, n) {
            var r = this;
            var o = this[O];
            o.atom.reportObserved();
            return o.dehanceValues(o.values)[e](function (e, o) {
              return t.call(n, e, o, r);
            }, n);
          };
        }
      });
      ["reduce", "reduceRight"].forEach(function (e) {
        Rt[e] = function () {
          var t = this;
          var n = this[O];
          n.atom.reportObserved();
          var r = arguments[0];
          arguments[0] = function (e, o, i) {
            o = n.dehanceValue(o);
            return r(e, o, i, t);
          };
          return n.values[e].apply(n.values, arguments);
        };
      });
      var Vt;
      var kt = d("ObservableArrayAdministration", Tt);
      function Pt(e) {
        return f(e) && kt(e[O]);
      }
      var Dt;
      var Nt = {};
      var Bt = function () {
        function e(e, t = I, n = "ObservableMap@" + a()) {
          this.enhancer = t;
          this.name = n;
          this[Vt] = Nt;
          this._keysAtom = A(this.name + ".keys()");
          this[Symbol.toStringTag] = "Map";
          if (typeof Map != "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
          }
          this._data = new Map();
          this._hasMap = new Map();
          this.merge(e);
        }
        e.prototype._has = function (e) {
          return this._data.has(e);
        };
        e.prototype.has = function (e) {
          var t = this;
          if (!Ve.trackingDerivation) {
            return this._has(e);
          }
          var n = this._hasMap.get(e);
          if (!n) {
            var r = n = new Se(this._has(e), U, this.name + "." + g(e) + "?", false);
            this._hasMap.set(e, r);
            tt(r, function () {
              return t._hasMap.delete(e);
            });
          }
          return n.get();
        };
        e.prototype.set = function (e, t) {
          var n = this._has(e);
          if (Ot(this)) {
            var r = _t(this, {
              type: n ? "update" : "add",
              object: this,
              newValue: t,
              name: e
            });
            if (!r) {
              return this;
            }
            t = r.newValue;
          }
          if (n) {
            this._updateValue(e, t);
          } else {
            this._addValue(e, t);
          }
          return this;
        };
        e.prototype.delete = function (e) {
          var t = this;
          if ((ae(this._keysAtom), Ot(this)) && !(r = _t(this, {
            type: "delete",
            object: this,
            name: e
          }))) {
            return false;
          }
          if (this._has(e)) {
            var n = At(this);
            var r = n ? {
              type: "delete",
              object: this,
              oldValue: this._data.get(e).value,
              name: e
            } : null;
            yt(function () {
              t._keysAtom.reportChanged();
              t._updateHasMapEntry(e, false);
              t._data.get(e).setNewValue(undefined);
              t._data.delete(e);
            });
            if (n) {
              Et(this, r);
            }
            return true;
          }
          return false;
        };
        e.prototype._updateHasMapEntry = function (e, t) {
          var n = this._hasMap.get(e);
          if (n) {
            n.setNewValue(t);
          }
        };
        e.prototype._updateValue = function (e, t) {
          var n = this._data.get(e);
          if ((t = n.prepareNewValue(t)) !== Ve.UNCHANGED) {
            var r = At(this);
            var o = r ? {
              type: "update",
              object: this,
              oldValue: n.value,
              name: e,
              newValue: t
            } : null;
            0;
            n.setNewValue(t);
            if (r) {
              Et(this, o);
            }
          }
        };
        e.prototype._addValue = function (e, t) {
          var n = this;
          ae(this._keysAtom);
          yt(function () {
            var r = new Se(t, n.enhancer, n.name + "." + g(e), false);
            n._data.set(e, r);
            t = r.value;
            n._updateHasMapEntry(e, true);
            n._keysAtom.reportChanged();
          });
          var r = At(this);
          var o = r ? {
            type: "add",
            object: this,
            name: e,
            newValue: t
          } : null;
          if (r) {
            Et(this, o);
          }
        };
        e.prototype.get = function (e) {
          if (this.has(e)) {
            return this.dehanceValue(this._data.get(e).get());
          } else {
            return this.dehanceValue(undefined);
          }
        };
        e.prototype.dehanceValue = function (e) {
          if (this.dehancer !== undefined) {
            return this.dehancer(e);
          } else {
            return e;
          }
        };
        e.prototype.keys = function () {
          this._keysAtom.reportObserved();
          return this._data.keys();
        };
        e.prototype.values = function () {
          var e = this;
          var t = this.keys();
          return en({
            next: function () {
              var n = t.next();
              var r = n.done;
              var o = n.value;
              return {
                done: r,
                value: r ? undefined : e.get(o)
              };
            }
          });
        };
        e.prototype.entries = function () {
          var e = this;
          var t = this.keys();
          return en({
            next: function () {
              var n = t.next();
              var r = n.done;
              var o = n.value;
              return {
                done: r,
                value: r ? undefined : [o, e.get(o)]
              };
            }
          });
        };
        e.prototype[Vt = O, Symbol.iterator] = function () {
          return this.entries();
        };
        e.prototype.forEach = function (e, t) {
          var n;
          var r;
          try {
            for (var o = C(this), i = o.next(); !i.done; i = o.next()) {
              var a = T(i.value, 2);
              var s = a[0];
              var u = a[1];
              e.call(t, u, s, this);
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (i && !i.done && (r = o.return)) {
                r.call(o);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        };
        e.prototype.merge = function (e) {
          var t = this;
          if (Lt(e)) {
            e = e.toJS();
          }
          yt(function () {
            var n = we(true);
            try {
              if (h(e)) {
                b(e).forEach(function (n) {
                  return t.set(n, e[n]);
                });
              } else if (Array.isArray(e)) {
                e.forEach(function (e) {
                  var n = T(e, 2);
                  var r = n[0];
                  var o = n[1];
                  return t.set(r, o);
                });
              } else if (v(e)) {
                if (e.constructor !== Map) {
                  s("Cannot initialize from classes that inherit from Map: " + e.constructor.name);
                }
                e.forEach(function (e, n) {
                  return t.set(n, e);
                });
              } else if (e != null) {
                s("Cannot initialize map from " + e);
              }
            } finally {
              Oe(n);
            }
          });
          return this;
        };
        e.prototype.clear = function () {
          var e = this;
          yt(function () {
            ce(function () {
              var t;
              var n;
              try {
                for (var r = C(e.keys()), o = r.next(); !o.done; o = r.next()) {
                  var i = o.value;
                  e.delete(i);
                }
              } catch (e) {
                t = {
                  error: e
                };
              } finally {
                try {
                  if (o && !o.done && (n = r.return)) {
                    n.call(r);
                  }
                } finally {
                  if (t) {
                    throw t.error;
                  }
                }
              }
            });
          });
        };
        e.prototype.replace = function (e) {
          var t = this;
          yt(function () {
            var n;
            var r;
            var o;
            var i;
            var a = function (e) {
              if (v(e) || Lt(e)) {
                return e;
              }
              if (Array.isArray(e)) {
                return new Map(e);
              }
              if (h(e)) {
                var t = new Map();
                for (var n in e) {
                  t.set(n, e[n]);
                }
                return t;
              }
              return s("Cannot convert to map from '" + e + "'");
            }(e);
            var u = new Map();
            var c = false;
            try {
              for (var l = C(t._data.keys()), f = l.next(); !f.done; f = l.next()) {
                var p = f.value;
                if (!a.has(p)) {
                  if (t.delete(p)) {
                    c = true;
                  } else {
                    var d = t._data.get(p);
                    u.set(p, d);
                  }
                }
              }
            } catch (e) {
              n = {
                error: e
              };
            } finally {
              try {
                if (f && !f.done && (r = l.return)) {
                  r.call(l);
                }
              } finally {
                if (n) {
                  throw n.error;
                }
              }
            }
            try {
              for (var y = C(a.entries()), b = y.next(); !b.done; b = y.next()) {
                var g = T(b.value, 2);
                p = g[0];
                d = g[1];
                var m = t._data.has(p);
                t.set(p, d);
                if (t._data.has(p)) {
                  var w = t._data.get(p);
                  u.set(p, w);
                  if (!m) {
                    c = true;
                  }
                }
              }
            } catch (e) {
              o = {
                error: e
              };
            } finally {
              try {
                if (b && !b.done && (i = y.return)) {
                  i.call(y);
                }
              } finally {
                if (o) {
                  throw o.error;
                }
              }
            }
            if (!c) {
              if (t._data.size !== u.size) {
                t._keysAtom.reportChanged();
              } else {
                var O = t._data.keys();
                var S = u.keys();
                for (var _ = O.next(), A = S.next(); !_.done;) {
                  if (_.value !== A.value) {
                    t._keysAtom.reportChanged();
                    break;
                  }
                  _ = O.next();
                  A = S.next();
                }
              }
            }
            t._data = u;
          });
          return this;
        };
        Object.defineProperty(e.prototype, "size", {
          get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
          },
          enumerable: true,
          configurable: true
        });
        e.prototype.toPOJO = function () {
          var e;
          var t;
          var n = {};
          try {
            for (var r = C(this), o = r.next(); !o.done; o = r.next()) {
              var i = T(o.value, 2);
              var a = i[0];
              var s = i[1];
              n[typeof a == "symbol" ? a : g(a)] = s;
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              if (o && !o.done && (t = r.return)) {
                t.call(r);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
          return n;
        };
        e.prototype.toJS = function () {
          return new Map(this);
        };
        e.prototype.toJSON = function () {
          return this.toPOJO();
        };
        e.prototype.toString = function () {
          var e = this;
          return this.name + "[{ " + Array.from(this.keys()).map(function (t) {
            return g(t) + ": " + e.get(t);
          }).join(", ") + " }]";
        };
        e.prototype.observe = function (e, t) {
          return xt(this, e);
        };
        e.prototype.intercept = function (e) {
          return St(this, e);
        };
        return e;
      }();
      var Lt = d("ObservableMap", Bt);
      var Mt = {};
      var It = function () {
        function e(e, t = I, n = "ObservableSet@" + a()) {
          this.name = n;
          this[Dt] = Mt;
          this._data = new Set();
          this._atom = A(this.name);
          this[Symbol.toStringTag] = "Set";
          if (typeof Set != "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
          }
          this.enhancer = function (e, r) {
            return t(e, r, n);
          };
          if (e) {
            this.replace(e);
          }
        }
        e.prototype.dehanceValue = function (e) {
          if (this.dehancer !== undefined) {
            return this.dehancer(e);
          } else {
            return e;
          }
        };
        e.prototype.clear = function () {
          var e = this;
          yt(function () {
            ce(function () {
              var t;
              var n;
              try {
                for (var r = C(e._data.values()), o = r.next(); !o.done; o = r.next()) {
                  var i = o.value;
                  e.delete(i);
                }
              } catch (e) {
                t = {
                  error: e
                };
              } finally {
                try {
                  if (o && !o.done && (n = r.return)) {
                    n.call(r);
                  }
                } finally {
                  if (t) {
                    throw t.error;
                  }
                }
              }
            });
          });
        };
        e.prototype.forEach = function (e, t) {
          var n;
          var r;
          try {
            for (var o = C(this), i = o.next(); !i.done; i = o.next()) {
              var a = i.value;
              e.call(t, a, a, this);
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (i && !i.done && (r = o.return)) {
                r.call(o);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        };
        Object.defineProperty(e.prototype, "size", {
          get: function () {
            this._atom.reportObserved();
            return this._data.size;
          },
          enumerable: true,
          configurable: true
        });
        e.prototype.add = function (e) {
          var t = this;
          if ((ae(this._atom), Ot(this)) && !(r = _t(this, {
            type: "add",
            object: this,
            newValue: e
          }))) {
            return this;
          }
          if (!this.has(e)) {
            yt(function () {
              t._data.add(t.enhancer(e, undefined));
              t._atom.reportChanged();
            });
            var n = At(this);
            var r = n ? {
              type: "add",
              object: this,
              newValue: e
            } : null;
            0;
            if (n) {
              Et(this, r);
            }
          }
          return this;
        };
        e.prototype.delete = function (e) {
          var t = this;
          if (Ot(this) && !(r = _t(this, {
            type: "delete",
            object: this,
            oldValue: e
          }))) {
            return false;
          }
          if (this.has(e)) {
            var n = At(this);
            var r = n ? {
              type: "delete",
              object: this,
              oldValue: e
            } : null;
            yt(function () {
              t._atom.reportChanged();
              t._data.delete(e);
            });
            if (n) {
              Et(this, r);
            }
            return true;
          }
          return false;
        };
        e.prototype.has = function (e) {
          this._atom.reportObserved();
          return this._data.has(this.dehanceValue(e));
        };
        e.prototype.entries = function () {
          var e = 0;
          var t = Array.from(this.keys());
          var n = Array.from(this.values());
          return en({
            next: function () {
              var r = e;
              e += 1;
              if (r < n.length) {
                return {
                  value: [t[r], n[r]],
                  done: false
                };
              } else {
                return {
                  done: true
                };
              }
            }
          });
        };
        e.prototype.keys = function () {
          return this.values();
        };
        e.prototype.values = function () {
          this._atom.reportObserved();
          var e = this;
          var t = 0;
          var n = Array.from(this._data.values());
          return en({
            next: function () {
              if (t < n.length) {
                return {
                  value: e.dehanceValue(n[t++]),
                  done: false
                };
              } else {
                return {
                  done: true
                };
              }
            }
          });
        };
        e.prototype.replace = function (e) {
          var t = this;
          if (Ut(e)) {
            e = e.toJS();
          }
          yt(function () {
            var n = we(true);
            try {
              if (Array.isArray(e) || y(e)) {
                t.clear();
                e.forEach(function (e) {
                  return t.add(e);
                });
              } else if (e != null) {
                s("Cannot initialize set from " + e);
              }
            } finally {
              Oe(n);
            }
          });
          return this;
        };
        e.prototype.observe = function (e, t) {
          return xt(this, e);
        };
        e.prototype.intercept = function (e) {
          return St(this, e);
        };
        e.prototype.toJS = function () {
          return new Set(this);
        };
        e.prototype.toString = function () {
          return this.name + "[ " + Array.from(this).join(", ") + " ]";
        };
        e.prototype[Dt = O, Symbol.iterator] = function () {
          return this.values();
        };
        return e;
      }();
      var Ut = d("ObservableSet", It);
      var Gt = function () {
        function e(e, t = new Map(), n, r) {
          this.target = e;
          this.values = t;
          this.name = n;
          this.defaultEnhancer = r;
          this.keysAtom = new S(n + ".keys");
        }
        e.prototype.read = function (e) {
          return this.values.get(e).get();
        };
        e.prototype.write = function (e, t) {
          var n = this.target;
          var r = this.values.get(e);
          if (r instanceof Ae) {
            r.set(t);
          } else {
            if (Ot(this)) {
              if (!(i = _t(this, {
                type: "update",
                object: this.proxy || n,
                name: e,
                newValue: t
              }))) {
                return;
              }
              t = i.newValue;
            }
            if ((t = r.prepareNewValue(t)) !== Ve.UNCHANGED) {
              var o = At(this);
              var i = o ? {
                type: "update",
                object: this.proxy || n,
                oldValue: r.value,
                name: e,
                newValue: t
              } : null;
              0;
              r.setNewValue(t);
              if (o) {
                Et(this, i);
              }
            }
          }
        };
        e.prototype.has = function (e) {
          var t = this.pendingKeys ||= new Map();
          var n = t.get(e);
          if (n) {
            return n.get();
          }
          var r = !!this.values.get(e);
          n = new Se(r, U, this.name + "." + g(e) + "?", false);
          t.set(e, n);
          return n.get();
        };
        e.prototype.addObservableProp = function (e, t, n = this.defaultEnhancer) {
          var r = this.target;
          if (Ot(this)) {
            var o = _t(this, {
              object: this.proxy || r,
              name: e,
              type: "add",
              newValue: t
            });
            if (!o) {
              return;
            }
            t = o.newValue;
          }
          var i = new Se(t, n, this.name + "." + g(e), false);
          this.values.set(e, i);
          t = i.value;
          Object.defineProperty(r, e, function (e) {
            return qt[e] ||= {
              configurable: true,
              enumerable: true,
              get: function () {
                return this[O].read(e);
              },
              set: function (t) {
                this[O].write(e, t);
              }
            };
          }(e));
          this.notifyPropertyAddition(e, t);
        };
        e.prototype.addComputedProp = function (e, t, n) {
          var r;
          var o;
          var i;
          var a = this.target;
          n.name = n.name || this.name + "." + g(t);
          this.values.set(t, new Ae(n));
          if (e === a || (r = e, o = t, !(i = Object.getOwnPropertyDescriptor(r, o)) || i.configurable !== false && i.writable !== false)) {
            Object.defineProperty(e, t, function (e) {
              return zt[e] ||= {
                configurable: Ve.computedConfigurable,
                enumerable: false,
                get: function () {
                  return Ht(this).read(e);
                },
                set: function (t) {
                  Ht(this).write(e, t);
                }
              };
            }(t));
          }
        };
        e.prototype.remove = function (e) {
          if (this.values.has(e)) {
            var t = this.target;
            if (Ot(this)) {
              if (!(a = _t(this, {
                object: this.proxy || t,
                name: e,
                type: "remove"
              }))) {
                return;
              }
            }
            try {
              Ne();
              var n = At(this);
              var r = this.values.get(e);
              var o = r && r.get();
              if (r) {
                r.set(undefined);
              }
              this.keysAtom.reportChanged();
              this.values.delete(e);
              if (this.pendingKeys) {
                var i = this.pendingKeys.get(e);
                if (i) {
                  i.set(false);
                }
              }
              delete this.target[e];
              var a = n ? {
                type: "remove",
                object: this.proxy || t,
                oldValue: o,
                name: e
              } : null;
              0;
              if (n) {
                Et(this, a);
              }
            } finally {
              Be();
            }
          }
        };
        e.prototype.illegalAccess = function (e, t) {
          console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
        };
        e.prototype.observe = function (e, t) {
          return xt(this, e);
        };
        e.prototype.intercept = function (e) {
          return St(this, e);
        };
        e.prototype.notifyPropertyAddition = function (e, t) {
          var n = At(this);
          var r = n ? {
            type: "add",
            object: this.proxy || this.target,
            name: e,
            newValue: t
          } : null;
          if (n) {
            Et(this, r);
          }
          if (this.pendingKeys) {
            var o = this.pendingKeys.get(e);
            if (o) {
              o.set(true);
            }
          }
          this.keysAtom.reportChanged();
        };
        e.prototype.getKeys = function () {
          var e;
          var t;
          this.keysAtom.reportObserved();
          var n = [];
          try {
            for (var r = C(this.values), o = r.next(); !o.done; o = r.next()) {
              var i = T(o.value, 2);
              var a = i[0];
              if (i[1] instanceof Se) {
                n.push(a);
              }
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              if (o && !o.done && (t = r.return)) {
                t.call(r);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
          return n;
        };
        return e;
      }();
      function Kt(e, t = "", n = I) {
        if (Object.prototype.hasOwnProperty.call(e, O)) {
          return e[O];
        }
        if (!h(e)) {
          t = (e.constructor.name || "ObservableObject") + "@" + a();
        }
        t ||= "ObservableObject@" + a();
        var r = new Gt(e, new Map(), g(t), n);
        p(e, O, r);
        return r;
      }
      var qt = Object.create(null);
      var zt = Object.create(null);
      function Ht(e) {
        var t = e[O];
        return t || (B(e), e[O]);
      }
      var Jt = d("ObservableObjectAdministration", Gt);
      function Wt(e) {
        return !!f(e) && (B(e), Jt(e[O]));
      }
      function Xt(e, t) {
        if (typeof e == "object" && e !== null) {
          if (Pt(e)) {
            if (t !== undefined) {
              s(false);
            }
            return e[O].atom;
          }
          if (Ut(e)) {
            return e[O];
          }
          if (Lt(e)) {
            var n = e;
            if (t === undefined) {
              return n._keysAtom;
            } else {
              if (!(r = n._data.get(t) || n._hasMap.get(t))) {
                s(false);
              }
              return r;
            }
          }
          var r;
          B(e);
          if (t && !e[O]) {
            e[t];
          }
          if (Wt(e)) {
            if (t) {
              if (!(r = e[O].values.get(t))) {
                s(false);
              }
              return r;
            } else {
              return s(false);
            }
          }
          if (_(e) || xe(e) || qe(e)) {
            return e;
          }
        } else if (typeof e == "function" && qe(e[O])) {
          return e[O];
        }
        return s(false);
      }
      function Yt(e, t) {
        if (!e) {
          s("Expecting some object");
        }
        if (t !== undefined) {
          return Yt(Xt(e, t));
        } else if (_(e) || xe(e) || qe(e) || Lt(e) || Ut(e)) {
          return e;
        } else {
          B(e);
          if (e[O]) {
            return e[O];
          } else {
            s(false);
            return;
          }
        }
      }
      var Ft = Object.prototype.toString;
      function $t(e, t, n = -1) {
        return function e(t, n, r, o, i) {
          if (t === n) {
            return t !== 0 || 1 / t == 1 / n;
          }
          if (t == null || n == null) {
            return false;
          }
          if (t != t) {
            return n != n;
          }
          var a = typeof t;
          if (a !== "function" && a !== "object" && typeof n != "object") {
            return false;
          }
          var s = Ft.call(t);
          if (s !== Ft.call(n)) {
            return false;
          }
          switch (s) {
            case "[object RegExp]":
            case "[object String]":
              return "" + t == "" + n;
            case "[object Number]":
              if (+t != +t) {
                return +n != +n;
              } else if (+t == 0) {
                return 1 / +t == 1 / n;
              } else {
                return +t == +n;
              }
            case "[object Date]":
            case "[object Boolean]":
              return +t == +n;
            case "[object Symbol]":
              return typeof Symbol != "undefined" && Symbol.valueOf.call(t) === Symbol.valueOf.call(n);
            case "[object Map]":
            case "[object Set]":
              if (r >= 0) {
                r++;
              }
          }
          t = Qt(t);
          n = Qt(n);
          var u = s === "[object Array]";
          if (!u) {
            if (typeof t != "object" || typeof n != "object") {
              return false;
            }
            var c = t.constructor;
            var l = n.constructor;
            if (c !== l && (typeof c != "function" || !(c instanceof c) || typeof l != "function" || !(l instanceof l)) && "constructor" in t && "constructor" in n) {
              return false;
            }
          }
          if (r === 0) {
            return false;
          }
          if (r < 0) {
            r = -1;
          }
          i = i || [];
          var f = (o = o || []).length;
          while (f--) {
            if (o[f] === t) {
              return i[f] === n;
            }
          }
          o.push(t);
          i.push(n);
          if (u) {
            if ((f = t.length) !== n.length) {
              return false;
            }
            while (f--) {
              if (!e(t[f], n[f], r - 1, o, i)) {
                return false;
              }
            }
          } else {
            var h = Object.keys(t);
            var p = undefined;
            f = h.length;
            if (Object.keys(n).length !== f) {
              return false;
            }
            while (f--) {
              p = h[f];
              if (!Zt(n, p) || !e(t[p], n[p], r - 1, o, i)) {
                return false;
              }
            }
          }
          o.pop();
          i.pop();
          return true;
        }(e, t, n);
      }
      function Qt(e) {
        if (Pt(e)) {
          return e.slice();
        } else if (v(e) || Lt(e) || y(e) || Ut(e)) {
          return Array.from(e.entries());
        } else {
          return e;
        }
      }
      function Zt(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function en(e) {
        e[Symbol.iterator] = tn;
        return e;
      }
      function tn() {
        return this;
      }
      if (typeof Proxy == "undefined" || typeof Symbol == "undefined") {
        throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
      }
      if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object") {
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
          spy: function (e) {
            console.warn("[mobx.spy] Is a no-op in production builds");
            return function () {};
          },
          extras: {
            getDebugName: function (e, t) {
              return (t !== undefined ? Xt(e, t) : Wt(e) || Lt(e) || Ut(e) ? Yt(e) : Xt(e)).name;
            }
          },
          $mobx: O
        });
      }
    }).call(this, n(94), n(25));
  }
}]);