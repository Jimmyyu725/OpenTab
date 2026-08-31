(window.webpackJsonp = window.webpackJsonp || []).push([[33, 9], {
  161: function (e, t, s) {
    "use strict";

    s.r(t);
    s.d(t, "slave", function () {
      return o;
    });
    s(7);
    var n = s(5);
    var a = s.n(n);
    var i = s(315);
    var r = s(50);
    const o = new class {
      constructor() {
        this.channel = null;
        this.initResolve = [];
        this.initReject = [];
        this.messageScheduler = new i.a();
        this.initChannel = () => {
          if (r.b === "serviceworker") {
            this.initServiceworker();
          } else if (r.b === "background") {
            this.initBackground();
          }
        };
        this.awaitChannel = () => new a.a(async (e, t) => {
          if (r.b === "serviceworker") {
            if (this.channel) {
              await this.channel.active;
              await this.channel.controlling;
              e(null);
            } else {
              this.initResolve.push(e);
              this.initReject.push(t);
            }
          } else if (r.b === "background") {
            e(null);
          }
        });
        this.initServiceworker = async () => {
          try {
            const {
              createWorkBox: e
            } = await s.e(10).then(s.bind(null, 603));
            const t = await e();
            if (!t) {
              return;
            }
            t.addEventListener("message", e => {
              const {
                type: t,
                payload: s = {}
              } = e.data;
              if (t === "master:bordcast-message") {
                this.messageScheduler.execTask(s.type, s.payload);
              }
            });
            await t.active;
            await t.controlling;
            this.channel = t;
            this.initResolve.forEach(e => {
              e();
            });
            this.channel.postTask = this.channel.messageSW;
          } catch (e) {
            console.log("slave初始化错误：", e);
            this.initReject.forEach(e => {
              e();
            });
          }
        };
        this.initBackground = () => {
          this.channel = {
            postTask: e => new a.a((t, s) => {
              chrome.runtime.sendMessage(e, e => {
                if (chrome.runtime.lastError) {
                  s(chrome.runtime.lastError);
                }
                t(e);
              });
            })
          };
          chrome.runtime.onMessage.addListener(({
            type: e,
            payload: t,
            ignoreId: s
          }) => {
            if (e === "master:bordcast-message") {
              chrome.tabs.getCurrent(e => {
                if (e && s !== e.id) {
                  this.messageScheduler.execTask(t.type, t.payload);
                }
              });
            } else if (e === "slave:bordcast-message") {
              this.messageScheduler.execTask(t.data.type, t.data.payload);
            }
          });
        };
        if (r.a) {
          throw new Error("it's not page");
        }
        this.initChannel();
      }
      postTask(e, t, s) {
        return new a.a(async (n, a) => {
          let i = false;
          await this.awaitChannel();
          const o = Object.assign(Object.assign(Object.assign({}, r.d), {
            taskId: Object(r.c)()
          }), s);
          if (o.timeout) {
            setTimeout(() => {
              if (!i) {
                n({
                  error: "timeout"
                });
              }
            }, o.timeout);
          }
          try {
            const s = await this.channel.postTask({
              type: e,
              payload: Object.assign({
                data: t
              }, o)
            });
            i = true;
            n(s);
          } catch (e) {
            n({
              error: e
            });
          }
        });
      }
      listenMessage(e, t) {
        this.messageScheduler.listenTask(e, t);
      }
      sendMessage(e, t = "") {
        this.postTask("slave:bordcast-message", {
          type: e,
          payload: t
        });
      }
    }();
  },
  315: function (e, t, s) {
    "use strict";

    s.d(t, "a", function () {
      return n;
    });
    class n {
      constructor() {
        this._events = new Map();
      }
      listenTask(e, t) {
        if (typeof t != "function") {
          return;
        }
        if (!this._events.has(e)) {
          this._events.set(e, new Set());
        }
        this._events.get(e).add(t);
      }
      execTask(e, t, ...s) {
        if (this._events.has(e)) {
          const n = this._events.get(e);
          for (const e of n) {
            e(t, ...s);
          }
        }
      }
    }
  },
  50: function (e, t, s) {
    "use strict";

    s.d(t, "b", function () {
      return n;
    });
    s.d(t, "a", function () {
      return a;
    });
    s.d(t, "d", function () {
      return i;
    });
    s.d(t, "c", function () {
      return r;
    });
    s(19);
    const n = s(0).s ? "serviceworker" : "background";
    let a = false;
    if (n === "background") {
      a = typeof ServiceWorkerGlobalScope == "function" && typeof chrome == "object";
    } else if (n === "serviceworker") {
      a = typeof ServiceWorkerGlobalScope == "function";
    }
    const i = {
      timeout: 0,
      taskId: ""
    };
    const r = () => ("" + Date.now() / 1000 / 100000).split(".")[1].substr(0, 8) + ("" + Math.random()).split(".")[1].substr(0, 8).padEnd(8, "0");
  }
}]);