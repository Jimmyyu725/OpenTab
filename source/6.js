(window.webpackJsonp = window.webpackJsonp || []).push([[6, 9, 35], {
  106: function (e, t, i) {
    "use strict";

    i.r(t);
    i.d(t, "iMessage", function () {
      return h;
    });
    i.d(t, "message", function () {
      return d;
    });
    var o = i(395);
    var s = i(1);
    var n = i(382);
    var r = i(433);
    var a = i.n(r);
    var c = i(434);
    var l = i.n(c);
    function p(e, t, i, o) {
      var s;
      var n = arguments.length;
      var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        r = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (s = e[a]) {
            r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
          }
        }
      }
      if (n > 3 && r) {
        Object.defineProperty(t, i, r);
      }
      return r;
    }
    let h = class extends s.a {
      constructor() {
        super(...arguments);
        this.content = "";
        this.type = "error";
      }
      render() {
        const e = {
          "infinity-message": true,
          "position-top": this.type === "top"
        };
        return s.e`
      <div class=${Object(n.a)(e)}>
        ${this.renderImg()}
        <span>${this.content}</span>
      </div>
    `;
      }
      renderImg() {
        if (this.type === "error") {
          return s.e`<img .src=${a.a} />`;
        } else if (this.type === "warn") {
          return s.e`<img .src=${l.a} />`;
        } else {
          return undefined;
        }
      }
    };
    h.styles = s.b`
    :host {
      box-sizing: border-box;
      display: flex;
      position: fixed;
      min-width: 330px;
      padding: 0 20px;
      height: 60px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 6px 48px 0px rgba(0, 0, 0, 0.24);
      border-radius: 6px;
      z-index: 99999999999;
    }
    :host([type='top']) {
      width: 100%;
      margin: 0;
      left: 0;
      top: var(--top-bar-height);
      height: auto;
      padding: 5px;
      border-radius: 0;
      background: rgba(95, 92, 92, 0.6);
      color: #fff;
      transform: none;
      transition: all 300ms;
      opacity: 0;
      pointer-events: none;
    }
    :host(.anim[type='top']) {
      opacity: 1;
    }

    .infinity-message {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  `;
    p([Object(s.g)({
      type: String
    })], h.prototype, "content", undefined);
    p([Object(s.g)({
      type: String
    })], h.prototype, "type", undefined);
    h = p([Object(s.c)("i-message")], h);
    const d = {
      newInstance: function (e, t = 2, i, o) {
        let s;
        if (document.querySelector("i-message")) {
          clearInterval(s);
          return;
        }
        const n = document.createElement("i-message");
        n.setAttribute("content", e);
        n.setAttribute("type", i);
        document.body.appendChild(n);
        if (t !== 0) {
          s = setTimeout(() => {
            document.body.removeChild(n);
            if (o) {
              o();
            }
          }, t * 1000);
        }
        return n;
      },
      error: function (e, t, i) {
        o.default.error(e, t);
        if (i) {
          setTimeout(i, t);
        }
      },
      success: function (e, t, i) {
        o.default.success(e, t);
        if (i) {
          setTimeout(i, t);
        }
      },
      top: function (e, t, i) {
        const o = this.newInstance(e, t, "top", i);
        setTimeout(() => o == null ? undefined : o.classList.add("anim"));
      },
      warn: function (e, t, i) {
        this.newInstance(e, t, "warn", i);
      }
    };
  },
  161: function (e, t, i) {
    "use strict";

    i.r(t);
    i.d(t, "slave", function () {
      return a;
    });
    i(7);
    var o = i(5);
    var s = i.n(o);
    var n = i(315);
    var r = i(50);
    const a = new class {
      constructor() {
        this.channel = null;
        this.initResolve = [];
        this.initReject = [];
        this.messageScheduler = new n.a();
        this.initChannel = () => {
          if (r.b === "serviceworker") {
            this.initServiceworker();
          } else if (r.b === "background") {
            this.initBackground();
          }
        };
        this.awaitChannel = () => new s.a(async (e, t) => {
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
            } = await i.e(10).then(i.bind(null, 603));
            const t = await e();
            if (!t) {
              return;
            }
            t.addEventListener("message", e => {
              const {
                type: t,
                payload: i = {}
              } = e.data;
              if (t === "master:bordcast-message") {
                this.messageScheduler.execTask(i.type, i.payload);
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
            postTask: e => new s.a((t, i) => {
              chrome.runtime.sendMessage(e, e => {
                if (chrome.runtime.lastError) {
                  i(chrome.runtime.lastError);
                }
                t(e);
              });
            })
          };
          chrome.runtime.onMessage.addListener(({
            type: e,
            payload: t,
            ignoreId: i
          }) => {
            if (e === "master:bordcast-message") {
              chrome.tabs.getCurrent(e => {
                if (e && i !== e.id) {
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
      postTask(e, t, i) {
        return new s.a(async (o, s) => {
          let n = false;
          await this.awaitChannel();
          const a = Object.assign(Object.assign(Object.assign({}, r.d), {
            taskId: Object(r.c)()
          }), i);
          if (a.timeout) {
            setTimeout(() => {
              if (!n) {
                o({
                  error: "timeout"
                });
              }
            }, a.timeout);
          }
          try {
            const i = await this.channel.postTask({
              type: e,
              payload: Object.assign({
                data: t
              }, a)
            });
            n = true;
            o(i);
          } catch (e) {
            o({
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
  309: function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return c;
    });
    i.d(t, "b", function () {
      return l;
    });
    i(7);
    var o = i(2);
    var s = i(161);
    function n(e, t, i, o) {
      var s;
      var n = arguments.length;
      var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        r = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (s = e[a]) {
            r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
          }
        }
      }
      if (n > 3 && r) {
        Object.defineProperty(t, i, r);
      }
      return r;
    }
    const r = {};
    const a = new Set();
    class c {
      constructor() {
        this.firstSync = false;
        this.syncTabTime = 0;
        this._lockRollback = false;
        this.isRollbackFromStorage = false;
        this.backupFileKey = "";
        this.backupValueKeys = [];
        this.rollbackFromStorage = () => null;
        this.stopToStorageReaction = () => {};
        this.stopAutoBackupReaction = () => {};
        this.convertBackupEquals = e => e;
      }
      async initSyncStore(e, t, i = {}, n = 20) {
        const a = e.key;
        if (r[a]) {
          throw new Error("storage key 重复");
        }
        r[a] = this;
        if (t.length !== 0) {
          this.rollbackFromStorage = async () => {
            let s = false;
            const r = Object.create(null);
            Object.keys(i).forEach(e => {
              if (t.includes(e)) {
                r[e] = i[e];
              }
            });
            try {
              const {
                data: i,
                error: o
              } = await e.read();
              if (o) {
                throw o;
              }
              const n = i ? Object.keys(i) : [];
              if (i) {
                n.forEach(e => {
                  if (t.includes(e)) {
                    r[e] = i[e];
                  }
                });
              }
              if (!this.firstSync && (!i || !!t.some(e => !n.includes(e)))) {
                s = true;
              }
            } catch (e) {
              console.error("storageSync", e);
            }
            this.isRollbackFromStorage = true;
            this.stopToStorageReaction();
            this.stopAutoBackupReaction();
            Object(o.i)(() => {
              for (const e in r) {
                this[e] = r[e];
              }
              this.firstSync ||= true;
            });
            this.restartAutoBackupReaction();
            this.stopToStorageReaction = Object(o.h)(() => {
              const e = {};
              t.forEach(t => {
                e[t] = Object(o.j)(this[t]);
              });
              return e;
            }, t => {
              this.isRollbackFromStorage = false;
              e.create(t).then(() => {
                Object(o.i)(() => {
                  this.syncTabTime = Date.now();
                });
              });
            }, {
              equals: o.d.structural,
              delay: n,
              fireImmediately: s
            });
          };
          await this.rollbackFromStorage();
          Object(o.h)(() => this.syncTabTime, e => {
            if (e) {
              s.slave.sendMessage("tabs-sync", a);
            }
          }, {
            delay: 60
          });
        }
      }
      restartAutoBackupReaction(e = false) {
        this.stopAutoBackupReaction();
        this.stopAutoBackupReaction = Object(o.h)(() => {
          const e = {};
          this.backupValueKeys.forEach(t => {
            e[t] = Object(o.j)(this[t]);
          });
          return e;
        }, e => {
          (async (e, t) => {
            try {
              const {
                syncStore: o
              } = await Promise.all([i.e(8), i.e(7)]).then(i.bind(null, 602));
              o.pushAutoBackupPipe({
                [e]: t
              });
            } catch (e) {}
          })(this.backupFileKey, e).catch();
        }, {
          fireImmediately: e,
          equals: (e, t) => {
            const i = this.convertBackupEquals(e);
            const s = this.convertBackupEquals(t);
            return o.d.structural(i, s);
          },
          delay: 40
        });
      }
      initAutoBackup(e, t) {
        if (a.has(e)) {
          throw new Error("file key 重复");
        }
        a.add(e);
        if (t.length !== 0) {
          this.backupFileKey = e;
          this.backupValueKeys = [...t];
        }
      }
      async getBackupData() {
        const e = {};
        this.backupValueKeys.forEach(t => {
          e[t] = Object(o.j)(this[t]);
        });
        return e;
      }
    }
    n([o.g], c.prototype, "firstSync", undefined);
    n([o.g], c.prototype, "syncTabTime", undefined);
    n([o.b], c.prototype, "initSyncStore", null);
    const l = e => {
      const t = r[e];
      if (!(t == null ? undefined : t._lockRollback)) {
        t.rollbackFromStorage();
      }
    };
  },
  311: function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return n;
    });
    i(7);
    var o = i(0);
    var s = i(22);
    const n = new class {
      constructor() {
        this.ga = null;
        this.localKey = "analytics-status-time";
        this.gap = 43200000;
        this.getPermission = async () => {
          let e = false;
          if (o.n) {
            try {
              const {
                privacyStore: t
              } = await Promise.all([i.e(8), i.e(7), i.e(40)]).then(i.bind(null, 601));
              if (t.collectData !== 1) {
                e = false;
              }
            } catch (t) {
              e = false;
            }
          }
          return e;
        };
        this.sendPageView = async e => {
          if (!(await this.getPermission())) {
            return;
          }
          const t = this.ga.getPageviewUrl(e);
          s.b.sendLog(t);
        };
        this.sendEvent = async (e, t = false) => {
          if (await this.getPermission()) {
            Object.keys(e).forEach(i => {
              const o = e[i];
              if (typeof o == "object") {
                Object.keys(o).forEach(e => {
                  const n = o[e];
                  const r = this.ga.getEventUrl({
                    category: i,
                    action: e,
                    label: String(n),
                    nonInteraction: t
                  });
                  s.b.sendLog(r);
                });
              } else {
                const e = this.ga.getEventUrl({
                  category: i,
                  action: String(o),
                  nonInteraction: t
                });
                s.b.sendLog(e);
              }
            });
          }
        };
      }
      async sendStatus(e) {
        try {
          this.sendEvent(e, true);
          localStorage.setItem(this.localKey, "" + Date.now());
        } catch (e) {}
      }
    }();
  },
  315: function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return o;
    });
    class o {
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
      execTask(e, t, ...i) {
        if (this._events.has(e)) {
          const o = this._events.get(e);
          for (const e of o) {
            e(t, ...i);
          }
        }
      }
    }
  },
  334: function (e, t, i) {
    "use strict";

    var o;
    i.d(t, "a", function () {
      return o;
    });
    i.d(t, "b", function () {
      return s;
    });
    (function (e) {
      e.openAiModal = "master:openIframeAi";
      e.authToken = "master:authToken";
      e.needLogin = "slave:needLogin";
      e.openLogin = "slave:openLogin";
      e.closeAiModal = "slave:closeIframeAi";
      e.logout = "master:logout";
      e.needBindPhone = "slave:needBindPhone";
      e.updateIframeData = "master:updateIframeData";
    })(o ||= {});
    const s = new class {
      constructor() {
        this.postIframeMessage = e => {
          if (this.$chatai) {
            this.$chatai.contentWindow.postMessage(e, "*");
          }
        };
        this.updateIframe = e => {
          this.$chatai = e;
        };
      }
    }();
  },
  383: function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return u;
    });
    i(7);
    var o = i(2);
    var s = i(403);
    var n = i.n(s);
    var r = i(309);
    var a = i(24);
    var c = i(13);
    var l = i(161);
    function p(e, t, i, o) {
      var s;
      var n = arguments.length;
      var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        r = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (s = e[a]) {
            r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
          }
        }
      }
      if (n > 3 && r) {
        Object.defineProperty(t, i, r);
      }
      return r;
    }
    const h = [{
      text: i18n("todo_welcome"),
      todoId: "todo-id1dtkk87it2iepal6dv4hr2uig0c",
      time: Date.now(),
      updatetime: 0,
      done: false
    }];
    class d extends r.a {
      constructor() {
        super(...arguments);
        this.todoList = h;
        this.currenetState = "done";
        this.listLength = localStorage.getItem("todo-length") || 0;
      }
      toggleState(e) {
        this.currenetState = e;
      }
      get needNotificationPermission() {
        return this.todoList.some(e => !!e.dueDate);
      }
      diffRemote(e) {
        const t = e => {
          if (e == null ? undefined : e.updatetime) {
            const t = {
              updatetime: undefined
            };
            e.done = !!e.done;
            return Object.assign(Object.assign({}, e), t);
          }
        };
        const i = n()(e.todoList || [], t);
        const s = n()(Object(o.j)(this.todoList), t);
        return !o.d.structural(i, s);
      }
      mergeRemote(e, t) {
        if (e.todoList) {
          if (t) {
            this.todoList = e.todoList;
          } else {
            const t = this.todoList;
            const i = e.todoList;
            const {
              result: o
            } = a.a.mergeArray(t, i, "todoId");
            this.todoList = o;
          }
        }
      }
      edit(e) {
        this.todoList = this.todoList.map(t => t.todoId === e ? Object.assign(Object.assign({}, t), {
          edit: !t.edit
        }) : t);
      }
      get hasDoneTodo() {
        return this.todoList.filter(e => e.done).length;
      }
      async addTodo(e) {
        if (!e.trim().length) {
          return;
        }
        const t = {
          done: false,
          time: +new Date(),
          todoId: a.a.randomId("todo-"),
          updatetime: await a.a.getTimestamp(),
          text: e
        };
        Object(o.i)(() => {
          this.todoList = [t, ...this.todoList];
        });
      }
      removeTodo() {
        this.todoList = this.todoList.filter(e => !e.done);
      }
      deleteTodo(e) {
        this.todoList = this.todoList.filter(t => t.todoId !== e);
      }
      async toggleTodo(e) {
        const t = await a.a.getTimestamp();
        Object(o.i)(() => {
          this.todoList = this.todoList.map(i => i.todoId === e ? Object.assign(Object.assign({}, i), {
            done: !i.done,
            updatetime: t
          }) : Object.assign({}, i));
        });
      }
      async updateTodo(e, t) {
        const i = await a.a.getTimestamp();
        Object(o.i)(() => {
          this.todoList = this.todoList.map(o => o.todoId === e ? Object.assign(Object.assign(Object.assign({}, o), t), {
            updatetime: i,
            edit: false
          }) : Object.assign({}, o));
        });
      }
      removeTime(e) {
        this.todoList = this.todoList.map(t => t.todoId === e ? Object.assign(Object.assign({}, t), {
          dueDate: "",
          dueTime: "",
          dueTimestamp: null
        }) : t);
      }
    }
    p([o.g], d.prototype, "todoList", undefined);
    p([o.g], d.prototype, "currenetState", undefined);
    p([o.b], d.prototype, "toggleState", null);
    p([o.e], d.prototype, "needNotificationPermission", null);
    p([o.b], d.prototype, "mergeRemote", null);
    p([o.b], d.prototype, "edit", null);
    p([o.g], d.prototype, "listLength", undefined);
    p([o.e], d.prototype, "hasDoneTodo", null);
    p([o.b], d.prototype, "addTodo", null);
    p([o.b], d.prototype, "removeTodo", null);
    p([o.b], d.prototype, "deleteTodo", null);
    p([o.b], d.prototype, "toggleTodo", null);
    p([o.b], d.prototype, "updateTodo", null);
    p([o.b], d.prototype, "removeTime", null);
    const u = new d();
    u.initSyncStore(c.k, ["todoList", "listLength"], {});
    u.initAutoBackup("todo", ["todoList"]);
    Object(o.c)(() => {
      if (u.firstSync) {
        const e = u.todoList.filter(e => !e.done).length;
        Object(o.i)(() => {
          u.listLength = e;
        });
        localStorage.setItem("todo-length", e + "");
      }
    });
    let g = false;
    Object(o.c)(() => {
      if (u.firstSync) {
        const e = u.todoList.filter(e => !e.done && e.dueTimestamp > Date.now()).map(e => Object(o.j)(e));
        if (!g) {
          g = true;
          return;
        }
        l.slave.postTask("slave:change-todo", e);
      }
    });
    Object(o.c)(() => {
      let e = false;
      const {
        todoList: t
      } = u;
      for (let i = 0; i < t.length - 1; i++) {
        const {
          done: o
        } = t[i];
        const s = t[i + 1].done;
        if (o && !s) {
          e = true;
          break;
        }
      }
      if (e) {
        Object(o.i)(() => {
          const e = t.filter(e => e.done);
          const i = t.filter(e => !e.done);
          u.todoList = [...i, ...e];
        });
        e = false;
      }
    }, {
      delay: 300
    });
  },
  395: function (e, t, i) {
    "use strict";

    i.r(t);
    var o = i(5);
    var s = i.n(o);
    var n = i(225);
    var r = i(429);
    var a = i(1);
    var c = i(2);
    var l = a.b`.i-bubble {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999999;
}
.i-bubble.network-error .i-bubble-wrap,
.i-bubble.error .i-bubble-wrap,
.i-bubble.success .i-bubble-wrap {
  padding-left: 30px;
  padding-right: 32px;
}
.i-bubble + .i-bubble-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999999;
  display: none;
  opacity: 0;
  transition: opacity 150ms ease-in 0s;
}
.i-bubble.loading + .i-bubble-mask {
  display: block;
}
.i-bubble.loading.popup + .i-bubble-mask {
  opacity: 1;
}
.i-bubble .i-bubble-wrap {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 12px 20px;
  background-color: #333;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 14px;
  line-height: 1.4em;
  transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: scale(0.8);
  opacity: 0;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  max-width: 600px;
}
.i-bubble.popup .i-bubble-wrap {
  transform: scale(1);
  opacity: 1;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.i-bubble .icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-right: 12px;
  display: none;
}
.i-bubble .icon.icon-loading {
  animation: spin 700ms linear infinite;
}
.i-bubble .i-bubble-text {
  color: #e4e4e4;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  word-break: break-all;
}
.i-bubble .i-bubble-button {
  width: 70px;
  height: 28px;
  color: #4caf50;
  background-color: initial;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color, background-color 200ms;
  border-radius: 4px;
  outline: none;
  max-width: 180px;
  margin-left: 46px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.i-bubble .i-bubble-button:hover {
  background-color: rgba(76, 175, 80, 0.14);
}
`;
    var p = i(24);
    var h = i(51);
    function d(e, t, i, o) {
      var s;
      var n = arguments.length;
      var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        r = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (s = e[a]) {
            r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
          }
        }
      }
      if (n > 3 && r) {
        Object.defineProperty(t, i, r);
      }
      return r;
    }
    const u = Object(h.a)("network-error.png", false);
    const g = Object(h.a)("error.png", false);
    const b = Object(h.a)("success.png", false);
    const m = Object(h.a)("loading.png", false);
    class f extends n.a {
      constructor() {
        super(...arguments);
        this.popup = false;
        this.showButton = false;
      }
      static _timeToHideHandler(e) {
        if (e.showButton) {
          const t = e.shadowRoot.querySelector(".i-bubble .i-bubble-button");
          t.onclick &&= null;
        }
        const t = e.shadowRoot.querySelector(".i-bubble > .i-bubble-wrap");
        let i = false;
        const o = () => {
          e.onmouseenter = null;
          e.onmouseleave = null;
          if (document.body.contains(e)) {
            document.body.removeChild(e);
          }
          i = true;
        };
        t.addEventListener("transitionend", o, {
          once: true
        });
        t.addEventListener("transitioncancel", o, {
          once: true
        });
        setTimeout(() => {
          if (!i) {
            o();
          }
        }, 150);
        e.setPopup(false);
      }
      static _setTimerToHide(e, t) {
        this._clearTimerToHide(e);
        e.hideTimer = setTimeout(() => this._timeToHideHandler(e), t);
      }
      static _clearTimerToHide(e) {
        if (e.hideTimer) {
          clearTimeout(e.hideTimer);
          e.hideTimer = null;
        }
      }
      static _messageMisc(e, t, i) {
        this.setText(e);
        document.body.appendChild(this);
        window.customElements.whenDefined("i-bubble").then(() => {
          this.offsetWidth;
          this.setPopup(true);
          return new s.a(e => requestAnimationFrame(e));
        }).then(() => {
          if (i) {
            i(this);
          }
        });
        if (t > 0) {
          f._setTimerToHide(this, t);
        }
      }
      static message(e, t) {
        const i = document.createElement("i-bubble");
        i.setType("message");
        t = t ?? this.duration;
        this._messageMisc.call(i, e, t);
      }
      static networkError(e, t) {
        const i = document.createElement("i-bubble");
        i.setType("network-error");
        t = t ?? this.duration;
        this._messageMisc.call(i, e, t);
      }
      static success(e, t) {
        const i = document.createElement("i-bubble");
        i.setType("success");
        t = t ?? this.duration;
        this._messageMisc.call(i, e, t);
      }
      static error(e, t) {
        const i = document.createElement("i-bubble");
        i.setType("error");
        t = t ?? this.duration;
        this._messageMisc.call(i, e, t);
      }
      static popupLogin(e) {
        const t = this.popup(i18n("reqeust_login_message"), {
          showButton: true,
          btnValue: i18n("to_login"),
          type: "message",
          onBtnClick: e ?? (() => {
            r.userStore.openModal();
          })
        });
        const i = Date.now();
        let o = this.duration2;
        t.onmouseenter = () => {
          o = Date.now() - i;
          f._clearTimerToHide(t);
        };
        t.onmouseleave = () => {
          f._setTimerToHide(t, o);
        };
      }
      static popupAddHomeAI(e) {
        const t = this.popup(i18n("add_infinity_ai"), {
          showButton: true,
          btnValue: i18n("add_now"),
          type: "message",
          onBtnClick: e,
          duration: 8000
        });
        const i = Date.now();
        let o = this.duration2;
        t.onmouseenter = () => {
          o = Date.now() - i;
          f._clearTimerToHide(t);
        };
        t.onmouseleave = () => {
          f._setTimerToHide(t, o);
        };
      }
      static popupLoading(e) {
        const t = this.popup(i18n("wallpaper_loading"), {
          duration: 0,
          showButton: true,
          btnValue: i18n("cancel"),
          type: "loading",
          onBtnClick: e
        });
        return () => setTimeout(() => this._timeToHideHandler(t), f.waitForReady);
      }
      static loading(e) {
        const t = this.popup(e, {
          type: "loading",
          duration: 0
        });
        return () => setTimeout(() => this._timeToHideHandler(t), f.waitForReady);
      }
      static popup(e, t) {
        const {
          duration: i = this.duration2,
          btnValue: o,
          onBtnClick: s,
          type: n,
          showButton: r
        } = t;
        const a = document.createElement("i-bubble");
        a.setType(n);
        if (o) {
          a.setBtnValue(o);
        }
        if (r) {
          a.setShowButton(r);
        }
        this._messageMisc.call(a, e, i, () => {
          if (a.showButton) {
            a.shadowRoot.querySelector(".i-bubble .i-bubble-button").onclick = e => {
              if (s) {
                s(e);
              }
              this._timeToHideHandler(a);
            };
          }
        });
        return a;
      }
      firstUpdated() {
        const e = "\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      display: block;\n    ";
        const t = document.createElement("style");
        t.appendChild(document.createTextNode(`\n      .i-bubble .icon.icon-network-error{\n        background-image: url(${u});${e}\n      }\n      .i-bubble .icon.icon-success{\n        background-image: url(${b});${e}\n      }\n      .i-bubble .icon.icon-error{\n        background-image: url(${g});${e}\n      }\n      .i-bubble .icon.icon-loading{\n        background-image: url(${m});${e}\n      }\n      `));
        this.shadowRoot.appendChild(t);
      }
      render() {
        return a.e`
      <section class="i-bubble ${this.type}${this.popup ? " popup" : ""}">
        <section class="i-bubble-wrap">
          <i class="icon icon-${this.type}"></i>
          <span class="i-bubble-text">${this.text}</span>
          <input
            class="i-bubble-button"
            type="button"
            .value=${this.btnValue}
            style="${this.showButton ? "" : "display: none;"}"
          />
        </section>
      </section>
      <section class="i-bubble-mask" @click=${p.a.stopBubble}></section>
    `;
      }
      setType(e) {
        this.type = e;
      }
      setText(e) {
        this.text = e;
      }
      setBtnValue(e) {
        this.btnValue = e;
      }
      setPopup(e) {
        this.popup = e;
      }
      setShowButton(e) {
        this.showButton = e;
      }
    }
    f.duration = 3000;
    f.duration2 = 5000;
    f.waitForReady = 1000 / 60;
    f.styles = l;
    d([c.g], f.prototype, "type", undefined);
    d([c.g], f.prototype, "text", undefined);
    d([c.g], f.prototype, "btnValue", undefined);
    d([c.g], f.prototype, "popup", undefined);
    d([c.g], f.prototype, "showButton", undefined);
    d([c.b], f.prototype, "setType", null);
    d([c.b], f.prototype, "setText", null);
    d([c.b], f.prototype, "setBtnValue", null);
    d([c.b], f.prototype, "setPopup", null);
    d([c.b], f.prototype, "setShowButton", null);
    window.customElements.define("i-bubble", f);
    t.default = f;
  },
  396: function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return o;
    });
    i.d(t, "b", function () {
      return n;
    });
    class o {
      constructor() {
        this._caches = {};
        this._setCaches = e => (...t) => {
          this._caches[e] = t;
        };
      }
    }
    const s = [];
    const n = e => new Proxy(e, {
      set: (e, t, i) => i === null ? (e[t] = i, true) : typeof e[t] == "function" ? (console.warn("失败：重复注册"), true) : (e[t] = i, s.includes(t) && delete e._caches[t], e._caches.hasOwnProperty(t) && (e[t](...e._caches[t]), delete e._caches[t]), true),
      get: (e, t) => typeof e[t] == "function" ? e[t] : e._setCaches(t)
    });
  },
  398: function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return a;
    });
    var o = i(5);
    var s = i.n(o);
    i(7);
    var n = i(0);
    var r = i(85);
    async function a() {
      if (n.s || n.r) {
        if ((await new s.a(e => {
          if (!function () {
            try {
              Notification.requestPermission().then();
            } catch (e) {
              return false;
            }
            return true;
          }()) {
            Notification.requestPermission(e);
          } else {
            Notification.requestPermission().then(e);
          }
        })) !== "granted") {
          throw new Error();
        }
      } else {
        await r.a.request(["notifications"]);
      }
    }
  },
  429: function (e, t, i) {
    "use strict";

    i.r(t);
    i.d(t, "userStore", function () {
      return S;
    });
    i(7);
    i(19);
    var o = i(5);
    var s = i.n(o);
    var n = i(2);
    var r = i(309);
    var a = i(22);
    var c = i(0);
    var l = i(106);
    var p = i(23);
    var h = i.n(p);
    var d = i(162);
    var u = i(161);
    var g = i(431);
    var b = i(430);
    var m = i(13);
    var f = i(36);
    var y = i(334);
    var w = i(6);
    function k(e, t, i, o) {
      var s;
      var n = arguments.length;
      var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        r = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (s = e[a]) {
            r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
          }
        }
      }
      if (n > 3 && r) {
        Object.defineProperty(t, i, r);
      }
      return r;
    }
    class v extends r.a {
      constructor() {
        super();
        this.isExpired = false;
        this.isLogin = false;
        this.token = "";
        this.userInfo = {};
        this.refreshToken = "";
        this.mobileloginExpire = 0;
        this.mobileloginUrl = "";
        this.areaCodeList = [];
        this.thirdList = [{
          type: a.f.ThirdLoginType.wechat,
          title: i18n("wechat"),
          bindStatus: false,
          nick_name: ""
        }, {
          type: a.f.ThirdLoginType.qq,
          title: "QQ",
          bindStatus: false,
          nick_name: ""
        }, {
          type: a.f.ThirdLoginType.google,
          title: "Google",
          bindStatus: false,
          nick_name: ""
        }, {
          type: a.f.ThirdLoginType.facebook,
          title: "Facebook",
          bindStatus: false,
          abondon: true,
          nick_name: ""
        }, {
          type: a.f.ThirdLoginType.weibo,
          title: i18n("xin_lang_weibo"),
          bindStatus: false,
          abondon: true,
          nick_name: ""
        }];
        this.userProfilePromise = s.a.resolve();
        this.wpColorUpdate = 0;
        this.logining = false;
        this.modalOpen = false;
        this.removeAccountDisableSec = 10;
        this.removeAccountDisableTimer = null;
        this.showLoginTipModal = false;
        this.profileModal = false;
        this.syncListModal = false;
        this.isModify = false;
        this.openMiniWindow = e => {
          const t = Math.floor(window.screenY + 200);
          const i = Math.floor(window.screenX + window.innerWidth / 3);
          return window.open(e, "_blank", `top=${t},left=${i},height=600,width=770,menubar=no,toolbar=yes,location=yes,status=no,resizable=no`);
        };
        this.binding = false;
        this.bindListener = e => {
          let t;
          const i = () => {
            t = setTimeout(() => {
              e.postMessage({
                from: "origin_login"
              }, "*");
              if (e.closed) {
                window.removeEventListener("message", o);
                this.binding = false;
              } else {
                i();
              }
            }, 500);
          };
          i();
          const o = async e => {
            try {
              if (!e.data || !e.data.key || e.data.key !== "bind") {
                return;
              }
              clearTimeout(t);
              window.removeEventListener("message", o, false);
              const {
                message: i
              } = e.data;
              let s;
              switch (i.type) {
                case a.f.ThirdLoginType.weibo:
                case a.f.ThirdLoginType.google:
                case a.f.ThirdLoginType.facebook:
                case a.f.ThirdLoginType.wechat:
                case a.f.ThirdLoginType.qq:
                  s = await a.f.bindThird(i.type, i.code);
              }
              if (s.error) {
                l.message.error(s.error.message);
                return;
              }
              this.bindSuccess("third", s.data);
              l.message.success(i18n("bind_success"));
            } catch (e) {
              l.message.error(i18n("network_error"));
            } finally {
              this.binding = false;
            }
          };
          window.addEventListener("message", o, false);
        };
        this.countdownTimer = null;
        this.checkMobileUrlTimer = null;
        this.isShowLogoutConfirm = false;
        this.showConfirmOpt = "";
        this.isShowSecondProfileModal = false;
        this.isModalFromAi = false;
        this.secondProfileModalType = null;
        this.clearAllData = false;
        this.loading = false;
        this.URL = c.y;
      }
      get renderAI() {
        return !f.a || this.isLogin && this.userInfo.renderAI;
      }
      get thirdAccountList() {
        const e = {};
        if (this.userInfo.third_account) {
          this.userInfo.third_account.forEach(t => {
            e[t.platform] = t;
          });
        }
        return this.thirdList.map(t => e[t.type] ? Object.assign(Object.assign({}, t), {
          bindStatus: true,
          nick_name: e[t.type].nick_name
        }) : t);
      }
      setWpColorUpdate(e) {
        this.wpColorUpdate = e;
      }
      closeModal() {
        this.modalOpen = false;
      }
      openModal() {
        this.modalOpen = true;
      }
      toggleLoginTipModal() {
        this.showLoginTipModal = !this.showLoginTipModal;
      }
      closeLoginTipModal() {
        this.showLoginTipModal = false;
      }
      closeProfileModal() {
        this.profileModal = false;
      }
      openProfileModal() {
        this.profileModal = true;
        this.openModify();
      }
      closeSyncListModal() {
        this.syncListModal = false;
      }
      openSyncListModal() {
        this.syncListModal = true;
      }
      openModify() {
        this.isModify = true;
      }
      async modifyProfile(e) {
        try {
          const t = await a.f.updateProfile(e);
          Object(n.i)(() => {
            if (t && t.code === 0) {
              const {
                user: {
                  name: e,
                  gender: i,
                  avatar: o
                }
              } = t.data;
              this.userInfo.name = e;
              this.userInfo.gender = i;
              this.userInfo.avatar = o;
            } else {
              l.message.error(i18n("update_data_failure"));
            }
          });
        } catch (e) {
          l.message.error(e.message);
        }
      }
      async getUserProfile() {
        const e = await a.f.getUserProfile();
        Object(n.i)(() => {
          if (e) {
            if (e.code === 0 && this.isLogin) {
              const {
                gender: t,
                name: i,
                avatar: o
              } = e.data;
              this.userInfo.name = i;
              this.userInfo.gender = t;
              this.userInfo.avatar = o;
              this.userInfo["auto-backup"] = e.data["auto-backup"];
              this.userInfo["wp-color-update"] = e.data["wp-color-update"];
              this.userInfo["backup-version-v2"] = e.data["backup-version-v2"];
              this.userInfo.email = e.data.email;
              this.userInfo.phone_number = e.data.phone_number;
              this.userInfo.third_account = e.data.third_account;
              this.userInfo.renderAI = e.data.renderAI;
            } else if (e.code === 3012) {
              l.message.error(e.message);
              this.exitAccount();
            }
          }
        });
      }
      async getAreaCodeList() {
        const {
          data: e,
          error: t
        } = await a.f.getAreaCodeList();
        if (!t) {
          if (e == null ? undefined : e.length) {
            Object(n.i)(() => {
              this.areaCodeList = e;
            });
          }
        }
      }
      async updateAvatar(e) {
        try {
          return await a.f.uploadAvatar(e);
        } catch (e) {
          l.message.error(i18n("upload_avatar_failure"));
        }
      }
      closeModify() {
        this.isModify = false;
      }
      thirdPartyLogin(e) {
        let t;
        this.logining = true;
        switch (e) {
          case "facebook":
            t = this.URL + "/login/facebook";
            break;
          case "google":
            t = this.URL + "/login/google";
            break;
          case "qq":
            t = this.URL + "/login/qq";
            break;
          case "sina":
            t = this.URL + "/login/weibo";
            break;
          case "wechat":
            t = this.URL + "/login/wechat";
        }
        setTimeout(async () => {
          const e = this.openMiniWindow(t);
          this.opener = e;
          if (c.n) {
            return;
          }
          const i = setInterval(() => {
            e.postMessage({
              from: "origin_login"
            }, "*");
          }, 300);
          const o = e => {
            if (!e.data || !e.data.key || e.data.key !== "login") {
              return;
            }
            clearInterval(i);
            window.removeEventListener("message", o, false);
            const {
              message: t
            } = e.data;
            this.login3rdSuccess(t);
          };
          window.addEventListener("message", o, false);
        }, 300);
      }
      get isLastId() {
        const e = this.userInfo || {};
        const t = e.third_account || [];
        let i = 0;
        if (e.email) {
          ++i;
        }
        if (e.phone_number) {
          ++i;
        }
        i += t.length;
        return i <= 1;
      }
      thirdPartyBind(e) {
        if (this.binding) {
          return;
        }
        let t;
        this.binding = true;
        switch (e) {
          case a.f.ThirdLoginType.weibo:
          case a.f.ThirdLoginType.google:
          case a.f.ThirdLoginType.facebook:
          case a.f.ThirdLoginType.wechat:
          case a.f.ThirdLoginType.qq:
            t = this.openMiniWindow(`${c.y}/bind/to?type=${e}`);
            this.bindListener(t);
        }
      }
      async thirdPartyUnbind(e) {
        let t;
        switch (e) {
          case a.f.ThirdLoginType.weibo:
          case a.f.ThirdLoginType.google:
          case a.f.ThirdLoginType.facebook:
          case a.f.ThirdLoginType.qq:
          case a.f.ThirdLoginType.wechat:
            t = await a.f.unbindThird(e);
        }
        return t;
      }
      bindSuccess(e, t) {
        if (e === "email") {
          this.userInfo.email = t;
        } else if (e === "phone") {
          this.userInfo.phone_number = t;
        } else if (e === "third") {
          const e = this.userInfo.third_account || [];
          e.push(t);
          this.userInfo.third_account = e;
        }
      }
      unbindSuccess(e, t) {
        if (e === "email") {
          this.userInfo.email = null;
        } else if (e === "phone") {
          this.userInfo.phone_number = null;
        } else if (e === "third") {
          const e = this.userInfo.third_account || [];
          const i = e.findIndex(e => e.platform === t);
          if (i === -1) {
            return;
          }
          e.splice(i, 1);
          this.userInfo.third_account = e;
        }
      }
      async login(e) {
        const t = {
          password: e.password
        };
        if (e.type === "email") {
          t.email = e.account;
        } else {
          if (e.type !== "phone") {
            return;
          }
          t.phone_number = e.account;
        }
        const i = await a.f.login(t);
        Object(n.i)(() => {
          if (!i || i.code !== 0) {
            l.message.error(i.message);
            throw new Error(i.code);
          }
          this.loginEmailSuccess(i.data.user);
          this.setToken(i.data);
          this.setRefreshToken(i.data.refreshToken);
        });
      }
      async getMobileloginUrl(e = false) {
        if (e) {
          this.mobileloginUrl = "";
          this.mobileloginExpire = 0;
        }
        if (d.f) {
          const {
            data: e,
            error: t
          } = await a.f.getMobileloginUrl();
          if (t) {
            Object(n.i)(() => {
              this.mobileloginExpire = 0;
            });
            return;
          }
          Object(n.i)(() => {
            this.mobileloginUrl = e.url;
            this.mobileloginExpire = Math.floor(e.expire / 1000);
          });
          this.checkMobileloginUrl(e.code, e.type);
          if (this.mobileloginExpire !== 0) {
            this.countdownTimer = setInterval(() => {
              Object(n.i)(() => {
                this.mobileloginExpire -= 1;
              });
              if (this.mobileloginExpire <= 0) {
                clearInterval(this.countdownTimer);
              }
            }, 1000);
          }
        }
      }
      async checkMobileloginUrl(e, t, i = 5000) {
        if (d.f && this.mobileloginExpire > 3) {
          clearTimeout(this.checkMobileUrlTimer);
          this.checkMobileUrlTimer = setTimeout(async () => {
            const {
              data: o
            } = await a.f.checkMobileloginUrl(e, t);
            if (o && o.expired) {
              clearInterval(this.countdownTimer);
              Object(n.i)(() => {
                this.mobileloginExpire = 0;
              });
              return;
            }
            this.checkMobileloginUrl(e, t, i);
          }, i);
        }
      }
      async loginEmailSuccess(e) {
        this.logining = false;
        this.closeModal();
        this.isLogin = true;
        this.userInfo = e;
        this.isExpired = false;
        this.settingLoginSuccess();
      }
      setUserData(e) {
        this.logining = false;
        this.closeModal();
        this.isLogin = e.isLogin;
        this.userInfo = e;
        this.isExpired = false;
        ["token", "refreshToken", "isLogin"].forEach(e => delete this.userInfo[e]);
      }
      async login3rdSuccess(e) {
        if (!e || !Object.keys(e).length) {
          this.cancelLogin();
          return;
        }
        const t = e["login-type"];
        if (["qq", "wechat"].includes(t)) {
          const t = await a.f.loginWithUid(e);
          if (t.code === 0) {
            Object(n.i)(() => {
              this.setUserData(e);
              this.setToken(t.data);
              this.setRefreshToken(t.data.refreshToken);
            });
          } else if (t.code === 3006) {
            l.message.error("获取token失败");
          }
        } else {
          this.setUserData(e);
          this.setToken(e);
          this.setRefreshToken(e.refreshToken);
        }
        this.settingLoginSuccess();
      }
      settingLoginSuccess() {
        if (w.IS_ZH) {
          b.b.changeSetting("view", "isHideIcp", true);
        }
      }
      cancelLogin() {
        var e;
        this.logining = false;
        if ((e = this.opener) !== null && e !== undefined) {
          e.close();
        }
      }
      toggleClear(e) {
        this.clearAllData = e;
      }
      logout(e) {
        this.isShowLogoutConfirm = true;
        this.showConfirmOpt = e;
        if (e === "remove") {
          this.removeAccountDisableSec = 10;
          clearInterval(this.removeAccountDisableTimer);
          this.removeAccountDisableTimer = setInterval(() => {
            Object(n.i)(() => {
              this.removeAccountDisableSec -= 1;
              if (this.removeAccountDisableSec === 0) {
                clearInterval(this.removeAccountDisableTimer);
                this.removeAccountDisableTimer = null;
              }
            });
          }, 1000);
        }
      }
      showSecondProfileModal(e, t = false) {
        this.isModalFromAi = t;
        this.isShowSecondProfileModal = true;
        this.secondProfileModalType = e;
      }
      closeSecondProfileModal() {
        this.isShowSecondProfileModal = false;
        this.secondProfileModalType = null;
      }
      async exitAccount() {
        this.loading = true;
        y.b.postIframeMessage({
          type: y.a.logout,
          logoutWithClear: this.clearAllData
        });
        await new s.a(e => {
          setTimeout(() => {
            if (this.clearAllData) {
              this.clearAllStore().then(e);
            } else {
              e(null);
            }
          }, 200);
        });
        Object(n.i)(() => {
          this.isLogin = false;
          this.userInfo = {};
          this.clearToken();
        });
        if (this.clearAllData) {
          window.location.reload();
        } else {
          Object(n.i)(() => this.loading = false);
          this.closeLogoutConfirm();
          this.closeProfileModal();
          if (c.s) {
            g.pluginStore.hideLast();
          }
        }
      }
      async deleteAccount() {
        this.loading = true;
        const e = await a.f.deleteAccount();
        Object(n.i)(() => {
          if (e && e.code === 0) {
            this.exitAccount();
          } else {
            if (e.code === 3012) {
              this.exitAccount();
            }
            l.message.error(e.message);
          }
          this.loading = false;
        });
      }
      restoreKeysToStorage(e) {
        e.forEach(({
          data: e,
          key: t
        }) => localStorage.setItem(t, e));
      }
      async clearAllStore() {
        this.stopAutoBackupReaction();
        this.stopToStorageReaction();
        await m.a.deleteAllForLogout();
        const e = [f.d, f.e];
        await this._deleteIdb(e);
        u.slave.sendMessage("tabs-reload");
      }
      async _deleteIdb(e) {
        const t = await new s.a(e => h.a.keys((t, i) => e(i)));
        await s.a.all(e.map(e => new s.a(i => {
          const o = e.split("->");
          if (o.length === 1) {
            if (t.includes(e)) {
              h.a.removeItem(e, i);
              return;
            } else {
              i(null);
              return;
            }
          }
          i(null);
          if (t.includes(o[0])) {
            h.a.getItem(o[0], e => {
              o.reduce((e, t, i) => {
                if (i === o.length - 1) {
                  Reflect.deleteProperty(e, t);
                }
                return e[t];
              }, e);
              h.a.setItem(o[0], i);
            });
          }
        })));
      }
      _clearLocalStorage(e) {
        const t = new Map();
        e.filter(Boolean).forEach(e => {
          const i = e.split("->");
          if (i.length === 1) {
            t.set(e, localStorage.getItem(e));
            return;
          }
          const o = JSON.parse(localStorage.getItem(i[0]));
          i.slice(1).forEach((e, t) => {
            const s = t === 0 ? o : o[i[t]];
            for (const t in s) {
              if (e !== t) {
                Reflect.deleteProperty(s, t);
              }
            }
          });
          t.set(i[0], JSON.stringify(o));
        });
        localStorage.clear();
        for (const e of t.keys()) {
          localStorage.setItem(e, t.get(e));
        }
      }
      closeLogoutConfirm() {
        this.isShowLogoutConfirm = false;
      }
      setToken(e) {
        this.token = e.token;
        y.b.postIframeMessage({
          type: y.a.authToken,
          authToken: S.token
        });
      }
      setRefreshToken(e) {
        this.refreshToken = e;
      }
      clearToken() {
        this.token = "";
        this.refreshToken = "";
      }
      setOutdated() {
        this.isExpired = true;
        this.isLogin = false;
      }
      toggleReLogin() {
        this.isExpired = false;
      }
      getPhoneNumber() {
        if (this.userInfo.phone_number) {
          const e = this.userInfo.phone_number + "";
          return `${e.slice(0, 3)}****${e.slice(-4)}`;
        }
        return "";
      }
    }
    k([n.g], v.prototype, "isExpired", undefined);
    k([n.g], v.prototype, "isLogin", undefined);
    k([n.g], v.prototype, "token", undefined);
    k([n.g], v.prototype, "userInfo", undefined);
    k([n.g], v.prototype, "refreshToken", undefined);
    k([n.g], v.prototype, "mobileloginExpire", undefined);
    k([n.g], v.prototype, "mobileloginUrl", undefined);
    k([n.g], v.prototype, "areaCodeList", undefined);
    k([n.e], v.prototype, "renderAI", null);
    k([n.e], v.prototype, "thirdAccountList", null);
    k([n.g], v.prototype, "wpColorUpdate", undefined);
    k([n.b], v.prototype, "setWpColorUpdate", null);
    k([n.g], v.prototype, "opener", undefined);
    k([n.g], v.prototype, "logining", undefined);
    k([n.g], v.prototype, "modalOpen", undefined);
    k([n.g], v.prototype, "removeAccountDisableSec", undefined);
    k([n.g], v.prototype, "removeAccountDisableTimer", undefined);
    k([n.b], v.prototype, "closeModal", null);
    k([n.b], v.prototype, "openModal", null);
    k([n.g], v.prototype, "showLoginTipModal", undefined);
    k([n.b], v.prototype, "toggleLoginTipModal", null);
    k([n.b], v.prototype, "closeLoginTipModal", null);
    k([n.g], v.prototype, "profileModal", undefined);
    k([n.g], v.prototype, "syncListModal", undefined);
    k([n.b], v.prototype, "closeProfileModal", null);
    k([n.b], v.prototype, "openProfileModal", null);
    k([n.b], v.prototype, "closeSyncListModal", null);
    k([n.b], v.prototype, "openSyncListModal", null);
    k([n.g], v.prototype, "isModify", undefined);
    k([n.b], v.prototype, "openModify", null);
    k([n.b], v.prototype, "modifyProfile", null);
    k([n.b], v.prototype, "getUserProfile", null);
    k([n.b], v.prototype, "getAreaCodeList", null);
    k([n.b], v.prototype, "updateAvatar", null);
    k([n.b], v.prototype, "closeModify", null);
    k([n.b], v.prototype, "thirdPartyLogin", null);
    k([n.g], v.prototype, "binding", undefined);
    k([n.e], v.prototype, "isLastId", null);
    k([n.b], v.prototype, "thirdPartyBind", null);
    k([n.b], v.prototype, "thirdPartyUnbind", null);
    k([n.b], v.prototype, "bindSuccess", null);
    k([n.b], v.prototype, "unbindSuccess", null);
    k([n.b], v.prototype, "login", null);
    k([n.b], v.prototype, "getMobileloginUrl", null);
    k([n.b], v.prototype, "checkMobileloginUrl", null);
    k([n.b], v.prototype, "loginEmailSuccess", null);
    k([n.b], v.prototype, "setUserData", null);
    k([n.b], v.prototype, "login3rdSuccess", null);
    k([n.b], v.prototype, "cancelLogin", null);
    k([n.g], v.prototype, "isShowLogoutConfirm", undefined);
    k([n.g], v.prototype, "showConfirmOpt", undefined);
    k([n.g], v.prototype, "isShowSecondProfileModal", undefined);
    k([n.g], v.prototype, "isModalFromAi", undefined);
    k([n.g], v.prototype, "secondProfileModalType", undefined);
    k([n.g], v.prototype, "clearAllData", undefined);
    k([n.b], v.prototype, "toggleClear", null);
    k([n.b], v.prototype, "logout", null);
    k([n.b], v.prototype, "showSecondProfileModal", null);
    k([n.b], v.prototype, "closeSecondProfileModal", null);
    k([n.g], v.prototype, "loading", undefined);
    k([n.b], v.prototype, "exitAccount", null);
    k([n.b], v.prototype, "deleteAccount", null);
    k([n.b], v.prototype, "clearAllStore", null);
    k([n.b], v.prototype, "closeLogoutConfirm", null);
    k([n.b], v.prototype, "setToken", null);
    k([n.b], v.prototype, "setRefreshToken", null);
    k([n.b], v.prototype, "clearToken", null);
    k([n.b], v.prototype, "setOutdated", null);
    k([n.b], v.prototype, "toggleReLogin", null);
    const S = new v();
    Object(n.c)(() => {
      if (S.firstSync) {
        if (S.isLogin) {
          S.closeModal();
          S.toggleReLogin();
          S.userProfilePromise = S.getUserProfile();
        } else {
          S.closeProfileModal();
          S.closeSecondProfileModal();
        }
      }
    });
    S.initSyncStore(m.l, ["userInfo", "isLogin", "token", "refreshToken", "wpColorUpdate"]);
    m.j.injectUserStore(S);
    m.j.injectSendTabsSync(e => {
      u.slave.sendMessage("tabs-sync", e);
    });
  },
  430: function (e, t, i) {
    "use strict";

    i.d(t, "b", function () {
      return m;
    });
    i.d(t, "a", function () {
      return y;
    });
    i(19);
    i(7);
    var o = i(2);
    var s = i(309);
    var n = i(24);
    var r = i(85);
    var a = i(109);
    var c = i(313);
    var l = i(0);
    var p = i(383);
    var h = i(398);
    var d = i(311);
    var u = i(13);
    function g(e, t, i, o) {
      var s;
      var n = arguments.length;
      var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        r = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (s = e[a]) {
            r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
          }
        }
      }
      if (n > 3 && r) {
        Object.defineProperty(t, i, r);
      }
      return r;
    }
    class b extends s.a {
      constructor() {
        super(...arguments);
        this.localSettings = {};
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.iconSpaceWidth = 0;
        this.iconSpaceHeight = 0;
        this.setting = this.init();
        this.updatetime = 0;
        this.permission = {
          topUseful: -1,
          topBookmark: -1,
          searchSuggest: -1,
          gmailNotice: -1,
          gmailCount: -1,
          todoNotice: -1
        };
        this.logs = new Map();
        this.permissionMapper = {
          topBookmark: [["bookmarks", "favicon"], []],
          topUseful: [["topSites", "favicon"], []],
          searchSuggest: [[], ["https://suggestion.baidu.com/", "https://google.com/"]],
          gmailNotice: [["notifications"], ["https://mail.google.com/"]],
          gmailCount: [[], ["https://mail.google.com/"]],
          todoNotice: [["notifications"], []]
        };
        this.showSettingHomeModal = false;
        this.webClickName = "";
      }
      init(e = {}) {
        return {
          notice: Object.assign({}, a.b.notice),
          link: Object.assign({}, a.b.link),
          view: Object.assign({}, a.b.view),
          layout: Object.assign({}, a.b.layout),
          animation: Object.assign({}, a.b.animation),
          icon: Object.assign({}, a.b.icon),
          search: Object.assign({}, a.b.search),
          font: Object.assign({}, a.b.font),
          _v1Setting: e
        };
      }
      get withPermissionTopUseful() {
        return this.setting.view.topUseful && this.permission.topUseful === 1;
      }
      get withPermissionTopBookmark() {
        return this.setting.view.topBookmark && this.permission.topBookmark === 1;
      }
      get withPermissionSearchSuggest() {
        return this.setting.search.searchSuggest && this.permission.searchSuggest === 1;
      }
      get needPermissionList() {
        const e = [];
        const {
          view: t,
          notice: i,
          search: o
        } = this.setting;
        const {
          topUseful: s,
          topBookmark: n,
          searchSuggest: r,
          gmailNotice: a,
          gmailCount: c,
          todoNotice: h
        } = this.permission;
        if (l.m && o.searchSuggest && r !== 1) {
          e.push({
            key: "searchSuggest",
            title: i18n("permission_serch_suggest_title"),
            content: i18n("permission_serch_suggest_content")
          });
        }
        if (l.m && i.gmail && a !== 1) {
          e.push({
            key: "gmailNotice",
            title: i18n("permission_gmail_notice_title"),
            content: i18n("permission_gmail_notice_content")
          });
        }
        if (l.m && i.gmailNumber && c !== 1) {
          e.push({
            key: "gmailCount",
            title: i18n("permission_gmail_num_title"),
            content: i18n("permission_gmail_num_content")
          });
        }
        if (!l.s && !l.r && !!t.topBookmark && n !== 1) {
          e.push({
            key: "topBookmark",
            title: i18n("permission_top_bookmark_title"),
            content: i18n("permission_top_bookmark_content")
          });
        }
        if (!l.s && !l.r && !!t.topUseful && s !== 1) {
          e.push({
            key: "topUseful",
            title: i18n("permission_top_useful_title"),
            content: i18n("permission_top_useful_content")
          });
        }
        if (p.a.needNotificationPermission && h !== 1) {
          if (!l.s && !l.r || Notification.permission !== "denied") {
            e.push({
              key: "todoNotice",
              title: i18n("permission_todo_notice_title"),
              content: i18n("permission_todo_notice_content")
            });
          }
        }
        return e;
      }
      get sideRatio() {
        return this.setting.view.scaleSide;
      }
      reset() {
        this.setting = this.init(this.setting._v1Setting);
        this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
      }
      diffRemote(e) {
        return !o.d.structural(e.setting || {}, this.setting);
      }
      sendSettingValue() {
        if (Object.keys(this.localSettings).length) {
          d.a.sendEvent({
            settingValue: this.localSettings
          });
          this.localSettings = {};
        }
      }
      async mergeRemote(e) {
        const t = e.setting;
        if (!e.setting) {
          return;
        }
        const i = this.setting;
        this.setting = {
          notice: Object.assign(Object.assign({}, i.notice), t.notice),
          link: Object.assign(Object.assign({}, i.link), t.link),
          view: Object.assign(Object.assign({}, i.view), t.view),
          layout: Object.assign(Object.assign({}, i.layout), t.layout),
          animation: Object.assign(Object.assign({}, i.animation), t.animation),
          icon: Object.assign(Object.assign({}, i.icon), t.icon),
          search: Object.assign(Object.assign({}, i.search), t.search),
          font: Object.assign(Object.assign({}, i.font), t.font),
          _v1Setting: t._v1Setting
        };
        const s = await n.a.getTimestamp();
        Object(o.i)(() => {
          this.updatetime = s;
        });
      }
      sendSettingLog(e, t) {
        if (this.logs.has(e)) {
          clearTimeout(this.logs.get(e));
        }
        this.logs.set(e, setTimeout(() => {
          d.a.sendEvent({
            settingAction: {
              [e]: t
            }
          });
          this.logs.delete(e);
        }, 2000));
      }
      async changeSetting(e, t, i) {
        if (this.setting[e][t] === i) {
          return;
        }
        this.setting[e][t] = i;
        if (e === "layout" && (t === "custom" && i === true || t === "customItem")) {
          this.setting.layout.row = this.setting.layout.customItem[0];
          this.setting.layout.col = this.setting.layout.customItem[1];
          this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
        }
        let s = `${e}_${t}`;
        let r = i;
        if (e === "layout" && (t === "col" || t === "row")) {
          this.changeLayoutCb(this.setting.layout.col, this.setting.layout.row);
          s = "layout";
          r = this.setting.layout.row + "*" + this.setting.layout.col;
        }
        this.sendSettingLog(s, r);
        this.localSettings[s] = r;
        const a = await n.a.getTimestamp();
        Object(o.i)(() => {
          this.updatetime = a;
        });
        this.changeSettingEffect(e, t, i);
      }
      changeLayoutCb(e, t) {
        console.log("col, row", e, t);
        console.log("changeLayoutCb 未注册");
      }
      changeLayout(e) {
        this.changeLayoutCb = e;
      }
      changeSettingEffect(e, t, i) {
        switch (true) {
          case t === "topBookmark":
            if (i) {
              this.requestPermission("topBookmark", true);
            }
            break;
          case t === "topUseful":
            if (i) {
              this.requestPermission("topUseful", true);
            }
            break;
          case e === "notice" && t === "gmail":
            if (i) {
              this.requestPermission("gmailNotice", true);
            }
            break;
          case e === "notice" && t === "gmailNumber":
            if (i) {
              this.requestPermission("gmailCount", true);
            }
            break;
          case t === "searchSuggest":
            if (i) {
              this.requestPermission("searchSuggest", true);
            }
        }
      }
      async checkPermission(e) {
        if (l.s || l.r) {
          switch (e) {
            case "todoNotice":
            case "gmailNotice":
              if (Notification.permission === "granted") {
                this.permission[e] = 1;
              } else if (Notification.permission === "default") {
                this.permission[e] = -1;
              } else {
                this.permission[e] = 0;
              }
              return;
          }
          if (l.s) {
            return;
          }
        }
        if (this.permission[e] === 1) {
          const t = this.permissionMapper[e];
          try {
            if (await r.a.has(t[0], t[1])) {
              return;
            }
          } catch (e) {
            console.log(e);
          }
          Object(o.i)(() => {
            this.permission[e] = -1;
          });
        }
        const t = this.permissionMapper[e];
        try {
          if (await r.a.has(t[0], t[1])) {
            Object(o.i)(() => {
              this.permission[e] = 1;
            });
          }
        } catch (e) {}
      }
      async requestPermission(e, t = false) {
        if ((l.s || l.r) && ["todoNotice", "gmailNotice"].includes(e)) {
          await Object(h.a)();
          Object(o.i)(() => {
            this.permission.todoNotice = 1;
            this.permission.gmailNotice = 1;
          });
          return;
        }
        const i = this.permissionMapper[e];
        if (t || this.permission[e] !== 0 && this.permission[e] !== 1) {
          try {
            await r.a.request(i[0], i[1]);
            Object(o.i)(() => {
              this.permission[e] = 1;
            });
            if (e === "gmailNotice") {
              this.checkPermission("todoNotice");
            }
          } catch (t) {
            if (t && t.message === "REJECT") {
              Object(o.i)(() => {
                this.permission[e] = 0;
              });
            }
          }
        }
      }
      async requestAllPermission() {
        if (l.s || l.r) {
          await Object(h.a)();
          Object(o.i)(() => {
            this.permission.todoNotice = 1;
            this.permission.gmailNotice = 1;
          });
          return;
        }
        const e = [[], []];
        this.needPermissionList.forEach(t => {
          const i = this.permissionMapper[t.key];
          e[0].push(...i[0]);
          if (i) {
            e[1].push(...i[1]);
          }
        });
        try {
          await r.a.request(e[0], e[1]);
          Object(o.i)(() => {
            this.needPermissionList.forEach(e => {
              this.permission[e.key] = 1;
            });
          });
        } catch (e) {
          Object(o.i)(() => {
            this.needPermissionList.forEach(e => {
              this.permission[e.key] = 0;
            });
          });
        }
      }
      resetPermission(e) {
        this.permission[e] = -1;
      }
      setIconSpace(e) {
        this.setting.icon.scale = e.iconScale;
        this.setting.layout.colGap = e.colGap;
        this.setting.layout.rowGap = e.rowGap;
        this.setting.search.scale = e.searchScale;
      }
      openSearchSuggest() {
        if (this.setting.search.searchSuggest) {
          this.requestPermission("searchSuggest", true);
        } else {
          this.setting.search.searchSuggest = true;
        }
      }
      get sideScaleRatio() {
        return this.setting.view.scaleSide;
      }
      toggleShowSettingHome(e) {
        this.setting.view.isShowHomepageBtn = !e;
      }
      toggleSettingHomeModal() {
        this.webClickName = "";
        this.showSettingHomeModal = !this.showSettingHomeModal;
      }
      closeSettingHomeModal() {
        this.showSettingHomeModal = false;
      }
      setWebClickName(e) {
        this.webClickName = e;
      }
    }
    g([o.g], b.prototype, "innerWidth", undefined);
    g([o.g], b.prototype, "innerHeight", undefined);
    g([o.g], b.prototype, "iconSpaceWidth", undefined);
    g([o.g], b.prototype, "iconSpaceHeight", undefined);
    g([o.g], b.prototype, "setting", undefined);
    g([o.g], b.prototype, "updatetime", undefined);
    g([o.g], b.prototype, "permission", undefined);
    g([o.e], b.prototype, "withPermissionTopUseful", null);
    g([o.e], b.prototype, "withPermissionTopBookmark", null);
    g([o.e], b.prototype, "withPermissionSearchSuggest", null);
    g([o.e], b.prototype, "needPermissionList", null);
    g([o.e], b.prototype, "sideRatio", null);
    g([o.b], b.prototype, "reset", null);
    g([o.b], b.prototype, "mergeRemote", null);
    g([o.b], b.prototype, "changeSetting", null);
    g([o.b], b.prototype, "checkPermission", null);
    g([o.b], b.prototype, "requestPermission", null);
    g([o.b], b.prototype, "requestAllPermission", null);
    g([o.b], b.prototype, "resetPermission", null);
    g([o.b], b.prototype, "setIconSpace", null);
    g([o.b], b.prototype, "openSearchSuggest", null);
    g([o.e], b.prototype, "sideScaleRatio", null);
    g([o.b], b.prototype, "toggleShowSettingHome", null);
    g([o.g], b.prototype, "showSettingHomeModal", undefined);
    g([o.b], b.prototype, "toggleSettingHomeModal", null);
    g([o.b], b.prototype, "closeSettingHomeModal", null);
    g([o.g], b.prototype, "webClickName", undefined);
    g([o.b], b.prototype, "setWebClickName", null);
    const m = new b();
    m.initSyncStore(u.h, ["setting", "permission", "updatetime"], a.b);
    m.initAutoBackup("setting", ["setting"]);
    Object(o.c)(() => {
      if (m.firstSync && m.setting.view.topBookmark) {
        m.checkPermission("topBookmark");
      }
    }, {
      delay: 50
    });
    Object(o.c)(() => {
      if (m.firstSync && m.setting.view.topUseful) {
        m.checkPermission("topUseful");
      }
    }, {
      delay: 50
    });
    Object(o.c)(() => {
      if (m.firstSync && m.setting.notice.gmail) {
        m.checkPermission("gmailNotice");
      }
    }, {
      delay: 50
    });
    Object(o.c)(() => {
      if (p.a.firstSync && p.a.needNotificationPermission) {
        m.checkPermission("todoNotice");
      }
    }, {
      delay: 50
    });
    Object(o.c)(() => {
      if (m.firstSync && m.setting.notice.gmailNumber) {
        m.checkPermission("gmailCount");
      }
    }, {
      delay: 50
    });
    Object(o.c)(() => {
      if (m.firstSync && m.setting.search.searchSuggest) {
        m.checkPermission("searchSuggest");
      }
    }, {
      delay: 50
    });
    Object(o.c)(() => {
      if (m.firstSync && m.permission.gmailNotice === 1) {
        n.a.send({
          key: "bg-notice-gmail-permission",
          data: true
        });
      }
    });
    Object(o.c)(() => {
      if (m.firstSync) {
        const {
          gmail: e,
          gmailVoice: t,
          gmailNumber: i
        } = m.setting.notice;
        const {
          gmailCount: o,
          gmailNotice: s
        } = m.permission;
        n.a.send({
          key: "bg-notice-gmail-updated",
          data: {
            gmail: e && s === 1,
            gmailVoice: t,
            gmailNumber: i && (s === 1 || o === 1)
          }
        });
      }
    }, {
      delay: 100
    });
    Object(o.c)(() => {
      if (m.firstSync) {
        const e = {
          "--side-ratio": m.sideRatio,
          "--main-ratio": m.setting.view.scaleMain,
          "--icon-radius": Math.round(m.setting.icon.radius * 100) + "%",
          "--icon-font-color": m.setting.font.color,
          "--icon-font-size": Math.ceil(Math.max(m.setting.font.size * m.setting.view.scaleMain, 12)) + "px",
          "--icon-opacity": m.setting.icon.opacity,
          "--icon-visible": m.setting.icon.isHideIconName ? "hidden" : "visible",
          "--search-radius": "" + m.setting.search.radius,
          "--search-opacity": m.setting.search.opacity
        };
        n.a.setStyle(e);
      }
    }, {
      delay: 50
    });
    Object(o.c)(() => {
      if (m.firstSync) {
        let e = 0;
        let t = 20;
        if (m.withPermissionTopBookmark) {
          e += 36;
        }
        if (m.withPermissionTopUseful) {
          t += 26;
        }
        const i = {
          "--top-bar-height": e + "px",
          "--settings-icon-top-offset": t + "px"
        };
        n.a.setStyle(i);
      }
    });
    const f = e => {
      const t = {
        "--search-height": e.searchHeight,
        "--search-width": e.searchWidth,
        "--search-margin-top": e.searchMarginTop,
        "--search-margin-bottom": e.searchMarginBottom,
        "--search-ratio": e.searchRatio,
        "--icon-box-width": e.iconBoxWidth,
        "--icon-box-height": e.iconBoxHeight,
        "--icon-one-height": e.iconOneHeight,
        "--icon-width": e.iconWidth,
        "--mini-icon-padding": e.miniIconPadding,
        "--icon-ratio": e.iconRatio,
        "--icon-row": m.setting.layout.row,
        "--icon-col": m.setting.layout.col,
        "--main-icons-margin": e.iconsMargin
      };
      n.a.setStyle(t);
    };
    const y = (e = true) => {
      const t = {
        row: m.setting.layout.row,
        col: m.setting.layout.col,
        rowGap: m.setting.layout.rowGap,
        colGap: m.setting.layout.colGap,
        iconScale: m.setting.icon.scale,
        searchScale: m.setting.search.scale,
        innerHeight: innerHeight,
        innerWidth: innerWidth,
        miniMode: m.setting.icon.miniMode,
        fontSize: m.setting.font.size,
        topUseful: m.withPermissionTopUseful,
        topBookmark: m.withPermissionTopBookmark,
        mainRatio: m.setting.view.scaleMain
      };
      if (e) {
        requestIdleCallback(() => {
          const e = Object(c.a)(t);
          f(e);
        });
      } else {
        const e = Object(c.a)(t);
        f(e);
      }
    };
    Object(o.c)(() => {
      if (m.firstSync) {
        y(false);
      }
    }, {
      delay: 40
    });
    window.addEventListener("resize", n.a.throttle(() => {
      y(false);
    }, 56));
  },
  431: function (e, t, i) {
    "use strict";

    i.r(t);
    i.d(t, "pluginStore", function () {
      return p;
    });
    i(7);
    var o = i(2);
    var s = i(85);
    var n = i(396);
    class r extends n.a {
      opened(e) {}
    }
    const a = Object(n.b)(new r());
    function c(e, t, i, o) {
      var s;
      var n = arguments.length;
      var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        r = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (s = e[a]) {
            r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
          }
        }
      }
      if (n > 3 && r) {
        Object.defineProperty(t, i, r);
      }
      return r;
    }
    class l {
      constructor() {
        this.pluginsMap = {
          "infinity://weather": "side-weather",
          "infinity://todos": "side-todos",
          "infinity://notes": "side-notes",
          "infinity://history": "side-history",
          "infinity://bookmarks": "side-bookmarks",
          "infinity://extension": "side-extension",
          "infinity://chrome-apps": "chrome-apps",
          "infinity://wallpaper": "wallpaper",
          "infinity://settings": "side-profile",
          search: "side-search",
          profile: "side-profile",
          editIcon: "side-editicon",
          "side-tutorial": "side-tutorial",
          "infinity://chatai": "chatai"
        };
        this.pluginsTags = {
          "side-weather": false,
          "side-todos": false,
          "side-notes": false,
          "side-history": false,
          "side-bookmarks": false,
          "side-extension": false,
          "chrome-apps": false,
          "side-profile": false,
          "side-search": false,
          "side-editicon": false,
          "side-tutorial": false,
          wallpaper: false,
          chatai: false
        };
        this.pluginViews = [];
        this.focusRepair = false;
        Object(o.h)(() => this.pluginViews.map(e => e), ([e]) => {
          a.opened(e);
        });
      }
      initDom(e) {
        this.pluginsTags[e] = true;
      }
      async show(e) {
        if (this.pluginViews.includes(e)) {
          return;
        }
        const t = this.pluginsMap[e];
        if (this.pluginsTags[t] === false) {
          try {
            await this.requestPermission(t);
            Object(o.i)(() => {
              this.pluginsTags[t] = true;
              this.pluginViews.push(e);
            });
          } catch (e) {
            console.log("show:", e);
          }
        } else {
          this.pluginViews.push(e);
        }
      }
      async showRepair() {
        this.focusRepair = true;
        this.show("profile");
      }
      async showRepairBadVersion() {
        this.focusRepair = true;
        this.show("profile");
      }
      blurRepair() {
        this.focusRepair = false;
      }
      requestPermission(e) {
        switch (e) {
          case "side-bookmarks":
            return s.a.request(["bookmarks", "favicon"]);
          case "side-extension":
          case "chrome-apps":
            return s.a.request(["management"]);
          case "side-history":
            return s.a.request(["history", "favicon"]);
        }
      }
      hideLast() {
        const e = this.pluginViews.pop();
        if (this.pluginViews.length === 0) {
          document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform", "none");
        }
        return e;
      }
    }
    c([o.g], l.prototype, "pluginsTags", undefined);
    c([o.b], l.prototype, "initDom", null);
    c([o.g], l.prototype, "pluginViews", undefined);
    c([o.g], l.prototype, "focusRepair", undefined);
    c([o.b], l.prototype, "show", null);
    c([o.b], l.prototype, "showRepair", null);
    c([o.b], l.prototype, "showRepairBadVersion", null);
    c([o.b], l.prototype, "blurRepair", null);
    c([o.b], l.prototype, "hideLast", null);
    const p = new l();
  },
  433: function (e, t, i) {
    e.exports = i.p + "images/error.f782e7c.png";
  },
  434: function (e, t, i) {
    e.exports = i.p + "images/remind.896ff6f.png";
  }
}]);