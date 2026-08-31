(window.webpackJsonp = window.webpackJsonp || []).push([[36], {
  805: function (e, t, i) {
    e.exports = i.p + "images/chrome_app.a4185a5.png";
  },
  815: function (e, t, i) {
    "use strict";

    i.r(t);
    i.d(t, "ChromeApps", function () {
      return x;
    });
    var o = i(1);
    var n = i(225);
    var r = i(617);
    var s = i(601);
    var a = i(24);
    var l = i(805);
    var p = i.n(l);
    var c = i(310);
    var d = i(0);
    function h(e, t, i, o) {
      var n;
      var r = arguments.length;
      var s = r < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        s = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (n = e[a]) {
            s = (r < 3 ? n(s) : r > 3 ? n(t, i, s) : n(t, i)) || s;
          }
        }
      }
      if (r > 3 && s) {
        Object.defineProperty(t, i, s);
      }
      return s;
    }
    let m = class extends n.a {
      constructor() {
        super(...arguments);
        this.store = r.a;
      }
      firstUpdated() {
        this.store.getAll();
        window.chrome.management.onDisabled.addListener(() => this.store.getAll());
        window.chrome.management.onEnabled.addListener(() => this.store.getAll());
        window.chrome.management.onUninstalled.addListener(() => this.store.getAll());
        window.chrome.management.onUninstalled.addListener(() => this.store.getAll());
      }
      render() {
        const {
          appList: e
        } = this.store;
        return o.e`
      <div class="content">
        <h2>${i18n("chrome_app", d.C.vendor)}</h2>
        <div class="global-scrollbar main-body">
          ${e && e.length ? o.e`
                <div class="apps">
                  ${e.map(e => o.e`
                        <div class="items" @click=${t => this.openApp(t, e)}>
                          <div class="body">
                            <div class="img">
                              <img .src=${e.icons.length ? e.icons[e.icons.length - 1].url : ""} />
                            </div>
                            <div class="name">${e.name}</div>
                          </div>
                        </div>
                      `)}
                </div>
              ` : o.e`
                <div class="empty">
                  <img .src=${p.a} />
                  <p>${i18n("no_chrome_app", d.C.vendor)}</p>
                </div>
              `}
        </div>
      </div>
    `;
      }
      openApp(e, t) {
        a.a.openChromeApp(t.id, s.settingStore.setting.link.icon, e);
      }
    };
    m.styles = [c.a, o.b`
      .content {
        max-width: 760px;
        min-width: 400px;
        width: 40vw;
        height: 440px;
        overflow: hidden;
      }
      h2 {
        margin: 20px 0 50px;
        font-size: 20px;
        color: #333;
        font-weight: 500;
        text-align: center;
      }
      .main-body {
        height: calc(440px - 98px);
        overflow: auto;
      }
      .apps {
        display: flex;
        flex-wrap: wrap;
      }
      .items {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 25%;
        margin-bottom: 30px;
      }
      .items .body {
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        text-decoration: none;
        color: #656565;
        cursor: pointer;
        transition: all 300ms;
      }
      .items:hover .img {
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.12);
        border-radius: 12px;
      }
      .items:hover .body {
        color: #333;
      }
      .items .img {
        display: block;
        width: 74px;
        height: 74px;
        margin-bottom: 14px;
        transition: all 300ms;
        padding: 8px 10px;
        box-sizing: border-box;
      }
      img {
        width: 100%;
      }
      .name {
        max-width: 100px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .empty {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 100%;
        height: 100%;
        padding-top: 70px;
      }
      .empty img {
        width: 86px;
        height: 86px;
        margin-bottom: 6px;
      }
      .empty p {
        margin: 0;
        font-size: 14px;
        color: #999;
      }
    `];
    m = h([Object(o.c)("chrome-application")], m);
    function g(e, t, i, o) {
      var n;
      var r = arguments.length;
      var s = r < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        s = Reflect.decorate(e, t, i, o);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (n = e[a]) {
            s = (r < 3 ? n(s) : r > 3 ? n(t, i, s) : n(t, i)) || s;
          }
        }
      }
      if (r > 3 && s) {
        Object.defineProperty(t, i, s);
      }
      return s;
    }
    let x = class extends n.a {
      constructor() {
        super(...arguments);
        this.store = r.a;
        this.open = false;
        this.handleClose = () => {
          this.store.closeModal();
        };
      }
      render() {
        return o.e`
      <infinito-portal-entrance destination="application">
        <infinito-modal
          .open="${this.store.isShowAppModal}"
          .onCancel=${this.handleClose}
        >
          <chrome-application slot="body"></chrome-application>
        </infinito-modal>
      </infinito-portal-entrance>
    `;
      }
    };
    g([Object(o.g)({
      type: Boolean
    })], x.prototype, "open", undefined);
    x = g([Object(o.c)("chrome-apps")], x);
  }
}]);