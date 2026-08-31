(window.webpackJsonp = window.webpackJsonp || []).push([[32], {
  796: function (t, e, i) {
    t.exports = i.p + "images/empty.adec9ea.png";
  },
  797: function (t, e, i) {
    t.exports = i.p + "images/empty_list.c352bfa.png";
  },
  813: function (t, e, i) {
    "use strict";

    i.r(e);
    i.d(e, "SideHistory", function () {
      return T;
    });
    var o = i(1);
    var s = i(225);
    var r = i(5);
    var n = i.n(r);
    i(7);
    i(19);
    var a = i(2);
    function l(t, e, i, o) {
      var s;
      var r = arguments.length;
      var n = r < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(t, e, i, o);
      } else {
        for (var a = t.length - 1; a >= 0; a--) {
          if (s = t[a]) {
            n = (r < 3 ? s(n) : r > 3 ? s(e, i, n) : s(e, i)) || n;
          }
        }
      }
      if (r > 3 && n) {
        Object.defineProperty(e, i, n);
      }
      return n;
    }
    class c {
      constructor() {
        this.fetchId = 0;
        this.histories = [];
        this.searchKey = "";
        this.count = 0;
        this.loading = false;
        this.hasMore = false;
        this.state = "";
        this.historyMap = {};
        this.customIconCardShow = false;
        this.customIconUrl = "";
        this.customIconTitle = "";
      }
      setState(t) {
        this.state = t;
      }
      get lists() {
        if (this.histories.length === 0) {
          return [];
        } else {
          return this.histories.map(t => Object.assign(Object.assign({}, t), {
            date: new Date(t.lastVisitTime).toLocaleDateString()
          }));
        }
      }
      get historyList() {
        if (this.lists.length === 0) {
          return [];
        } else {
          return Object.values(this.lists.reduce((t, e) => {
            if (t[e.date]) {
              t[e.date].push(e);
            } else {
              t[e.date] = [e];
            }
            return t;
          }, {}));
        }
      }
      showCustomIconCard(t = "", e = "") {
        this.customIconCardShow = true;
        this.customIconUrl = t;
        this.customIconTitle = e;
      }
      hideCustomIconCard() {
        this.customIconCardShow = false;
        this.customIconUrl = "";
        this.customIconTitle = "";
      }
      updateSearchKey(t, e = false) {
        this.searchKey = t;
        this.fetch(e);
      }
      setList(t) {
        this.histories = t;
      }
      deleteHistory({
        url: t
      }) {
        window.chrome.history.deleteUrl({
          url: t
        });
      }
      clear() {
        window.chrome.history.deleteAll(() => this.fetch(true));
      }
      async fetch(t) {
        if (t) {
          this.count = 0;
          this.histories = [];
        }
        this.loading = true;
        const e = ++this.fetchId;
        const {
          searchKey: i
        } = this;
        this.count += 30;
        const o = await new n.a(t => {
          window.chrome.history.search({
            text: i,
            startTime: 0,
            maxResults: this.count
          }, t);
        });
        if (e !== this.fetchId) {
          throw new Error("expired fetch");
        }
        const s = o.map(t => ({
          id: t.id,
          url: t.url,
          title: t.title || t.url,
          lastVisitTime: t.lastVisitTime
        }));
        Object(a.i)(() => {
          this.loading = false;
          const {
            length: t
          } = this.histories;
          if (s.length > t) {
            this.histories.push(...s.slice(t));
          }
          if (s.length < this.count) {
            this.hasMore = true;
          } else {
            this.hasMore = false;
          }
        });
      }
      fetchNextPage() {
        if (!this.loading) {
          this.fetch(false);
        }
      }
    }
    l([a.g], c.prototype, "fetchId", undefined);
    l([a.g], c.prototype, "histories", undefined);
    l([a.g], c.prototype, "searchKey", undefined);
    l([a.g], c.prototype, "loading", undefined);
    l([a.g], c.prototype, "hasMore", undefined);
    l([a.g], c.prototype, "state", undefined);
    l([a.b], c.prototype, "setState", null);
    l([a.e], c.prototype, "lists", null);
    l([a.e], c.prototype, "historyList", null);
    l([a.g], c.prototype, "customIconCardShow", undefined);
    l([a.g], c.prototype, "customIconUrl", undefined);
    l([a.g], c.prototype, "customIconTitle", undefined);
    l([a.b], c.prototype, "showCustomIconCard", null);
    l([a.b], c.prototype, "hideCustomIconCard", null);
    l([a.b], c.prototype, "updateSearchKey", null);
    l([a.b], c.prototype, "setList", null);
    l([a.b], c.prototype, "deleteHistory", null);
    l([a.b], c.prototype, "clear", null);
    l([a.b], c.prototype, "fetch", null);
    l([a.b], c.prototype, "fetchNextPage", null);
    var h = new c();
    var d = i(24);
    var p = i(6);
    i(638);
    var u = i(601);
    i(626);
    var y = i(311);
    function m(t, e, i, o) {
      var s;
      var r = arguments.length;
      var n = r < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(t, e, i, o);
      } else {
        for (var a = t.length - 1; a >= 0; a--) {
          if (s = t[a]) {
            n = (r < 3 ? s(n) : r > 3 ? s(e, i, n) : s(e, i)) || n;
          }
        }
      }
      if (r > 3 && n) {
        Object.defineProperty(e, i, n);
      }
      return n;
    }
    let g = class extends o.a {
      constructor() {
        super(...arguments);
        this.data = {};
        this.state = "";
      }
      _formatTime(t) {
        const e = new Date(t);
        return `${e.getHours()}:${("0" + e.getMinutes()).substr(-2)}`;
      }
      delete() {
        const t = new CustomEvent("i-deleteUrl", {
          detail: {
            item: this.data
          },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(t);
      }
      loadMore() {
        const {
          url: t
        } = this.data;
        const e = new CustomEvent("i-load", {
          detail: {
            url: t
          },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(e);
      }
      async addToSites() {
        const {
          url: t,
          title: e
        } = this.data;
        h.showCustomIconCard(t, e);
      }
      render() {
        const {
          data: {
            title: t,
            url: e,
            lastVisitTime: i
          }
        } = this;
        return o.e`
      <div
        class="side-history-item"
        @click="${t => this.openUrl(t, e)}"
        @mousedown=${t => {
          if (t.button === 1) {
            this.openUrl(t, e);
          }
        }}
      >
        <div class="main-body">
          <div class="content">
            <div class="icon">
              <i-favicon .url="${e}"></i-favicon>
            </div>
            <p class="t">${t || e}</p>
            <p class="lastVisitTime">${this._formatTime(i)}</p>
            <i-dot-expanded class="small" tabindex="0">
              <li class="history-dot-item" @click="${this.addToSites}">${i18n("add_to_home_site")}</li>
              ${this.state !== "loadmore" ? o.e`<li class="history-dot-item" @click=${this.loadMore}>${i18n("more_content_from_site")}</li>` : null}
              <li class="history-dot-item" @click=${this.delete}>${i18n("del_folder")}</li>
            </i-dot-expanded>
          </div>
        </div>
      </div>
    `;
      }
      openUrl(t, e) {
        y.a.sendEvent({
          action: {
            openHistory: d.a.getTargetLogDomain(e)
          }
        });
        d.a.openUrl(e, u.settingStore.setting.link.history, t);
      }
    };
    g.styles = o.b`
    :host {
      width: 100%;
      margin-top: 4px;
      display: block;
    }
    :host(:first-of-type) {
      margin-top: 0;
    }
    .side-history-item {
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 20px 0 30px;
      height: 40px;
      overflow: hidden;
      cursor: pointer;
      transition: all 300ms ease-in-out;
    }
    .main-body {
      flex: 1;
      overflow: hidden;
      margin-right: 10px;
    }
    .content {
      display: flex;
      align-items: center;
    }
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
    img,
    i-facicon {
      width: 100%;
      height: 100%;
    }
    p {
      margin: 0;
    }
    .t {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      margin-right: 20px;
    }
    .lastVisitTime {
      font-size: 12px;
      color: #b6b6b6;
      margin-left: 10px;
    }
    i-svg {
      width: 14px;
      height: 14px;
    }
    .delete-btn:hover i-svg {
      color: rgba(51, 51, 51, 0.5);
    }
    .side-history-item:hover,
    .side-history-item:focus-within {
      background: rgba(246, 246, 246, 1);
    }
    .side-history-item:hover i-dot-expanded {
      opacity: 1;
    }
    i-dot-expanded {
      width: 32px;
      --dot-hover: rgba(0, 0, 0, 0.15);
      opacity: 0;
      outline: none;
      transition: opacity 0.3s;
      transform: scale(0.5);
    }
    i-dot-expanded:focus {
      opacity: 1;
      background: var(--dot-hover);
    }
  `;
    m([Object(o.g)({
      type: Object
    })], g.prototype, "data", undefined);
    m([Object(o.g)({
      type: String
    })], g.prototype, "state", undefined);
    g = m([Object(o.c)("side-history-item")], g);
    function f(t, e, i, o) {
      var s;
      var r = arguments.length;
      var n = r < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(t, e, i, o);
      } else {
        for (var a = t.length - 1; a >= 0; a--) {
          if (s = t[a]) {
            n = (r < 3 ? s(n) : r > 3 ? s(e, i, n) : s(e, i)) || n;
          }
        }
      }
      if (r > 3 && n) {
        Object.defineProperty(e, i, n);
      }
      return n;
    }
    let b = class extends o.a {
      emit(t) {
        this.dispatchEvent(new CustomEvent(t, {
          bubbles: true,
          composed: true
        }));
      }
      render() {
        return o.e`
      <div class="wrapper">
        <p>${i18n("confirm_clear_all_history")}</p>
        <div class="btns">
          <infinito-button @click=${() => this.emit("cancel")}> ${i18n("cancel")} </infinito-button>
          <infinito-button primary class="ok" @click=${() => this.emit("ok")}> ${i18n("confirm")} </infinito-button>
        </div>
      </div>
    `;
      }
    };
    b.styles = o.b`
    infinito-button {
      width: 120px;
      height: 42px;
      line-height: 42px;
      font-weight: 500;
      border-radius: 4px;
      transition: opacity 300ms ease 0s;
    }
    infinito-button:not(:last-child) {
      margin-right: 16px;
    }
    .wrapper {
      width: 300px;
    }
    .btns {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    p {
      margin: 10px 0;
      text-align: center;
    }
  `;
    b = f([Object(o.c)("history-delete-tips")], b);
    var v = i(310);
    var w = i(796);
    var x = i.n(w);
    var $ = i(797);
    var j = i.n($);
    function O(t, e, i, o) {
      var s;
      var r = arguments.length;
      var n = r < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, i) : o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(t, e, i, o);
      } else {
        for (var a = t.length - 1; a >= 0; a--) {
          if (s = t[a]) {
            n = (r < 3 ? s(n) : r > 3 ? s(e, i, n) : s(e, i)) || n;
          }
        }
      }
      if (r > 3 && n) {
        Object.defineProperty(e, i, n);
      }
      return n;
    }
    let T = class extends s.a {
      constructor() {
        super(...arguments);
        this.store = h;
        this.showModal = false;
        this.scrollTop = 0;
        this.cancelDelete = () => {
          this.showModal = false;
        };
      }
      firstUpdated() {
        this.store.fetch(false);
        this.listBody.addEventListener("scroll", () => {
          if (this.listBody.scrollTop + this.listBody.clientHeight >= this.listBody.scrollHeight) {
            this.store.fetchNextPage();
          }
        });
        window.chrome.history.onVisitRemoved.addListener(t => {
          const {
            allHistory: e,
            urls: i
          } = t;
          if (e) {
            this.store.setList([]);
          }
          if (i.length) {
            let t = [];
            i.forEach(e => {
              t = this.store.histories.filter(t => t.url !== e);
            });
            this.store.setList(t);
          }
        });
        window.chrome.history.onVisited.addListener(t => {
          const e = [...this.store.histories];
          e.unshift(t);
          this.store.setList(e);
        });
      }
      format(t) {
        const e = new Date();
        const i = e.getFullYear();
        const o = e.getMonth();
        const s = e.getDay();
        const r = {
          year: "numeric",
          month: "long",
          day: "2-digit",
          weekday: "long"
        };
        const n = new Date(t);
        if (n.toDateString() === e.toDateString()) {
          return `${Object(p.i18n)("today")} ${d.a.fmtTime(t, r)}`;
        } else if (n.getFullYear() === i && n.getMonth() === o && n.getDay() + 1 === s) {
          return `${Object(p.i18n)("yesterday")} ${d.a.fmtTime(t, r)}`;
        } else {
          return "" + d.a.fmtTime(t, r);
        }
      }
      deleteUrl(t) {
        this.store.deleteHistory({
          url: t.item.url
        });
      }
      loadMore({
        url: t
      }) {
        const e = new URL(t).hostname;
        this.searchEle.set(e);
        this.store.updateSearchKey(e, true);
        this.store.setState("loadmore");
      }
      handleSearch(t) {
        const e = t.detail.text;
        this.store.updateSearchKey(e, true);
        this.store.setState("search");
      }
      clear() {
        this.store.updateSearchKey("", true);
        this.store.setState();
      }
      remove() {
        if (this.store.histories.length) {
          this.showModal = true;
        }
      }
      ok() {
        this.store.clear();
        this.showModal = false;
      }
      handleTabClose() {
        if (this.store.searchKey) {
          this.clear();
          this.searchEle.clear();
        }
      }
      handleTabOpen() {
        this.searchEle.focus();
      }
      afterHide() {
        this.handleTabClose();
        this.store.hideCustomIconCard();
      }
      afterShow() {
        this.handleTabOpen();
      }
      render() {
        const {
          searchKey: t,
          historyList: e
        } = this.store;
        return o.e`
      <i-side2-header .title="${Object(p.i18n)("history")}"></i-side2-header>
      <icons-custom
        @on-close="${() => {
          this.store.hideCustomIconCard();
        }}"
        .initName=${this.store.customIconTitle}
        .initTarget=${this.store.customIconUrl}
        .show="${this.store.customIconCardShow}"
      ></icons-custom>
      <div class="container">
        <div class="search-container">
          <i-search
            placeholder="${Object(p.i18n)("history_week")}"
            @i-search="${d.a.debounce(this.handleSearch, 200)}"
            @i-clear=${this.clear}
          >
          </i-search>
        </div>
        <div class="remove">
          <button class="${e.length ? "active" : ""}" @click="${this.remove}">
            ${Object(p.i18n)("clear_historys")}
          </button>
        </div>
        <div class="history-lists">
          <div class="global-scrollbar list-body">
            <div class=${e.length === 0 ? "empty-list" : ""}>
              ${t ? this.renderSearch() : this.renderList()}
            </div>
          </div>
        </div>
      </div>
      <div>
        <infinito-portal-entrance destination="history">
          <infinito-modal
            style="--modal-padding: 30px; --modal-top: 30vh;"
            ?open=${this.showModal}
            .closeable=${false}
            .onCancel=${this.cancelDelete}
          >
            <history-delete-tips slot="body" @ok=${this.ok} @cancel=${this.cancelDelete}> </history-delete-tips>
          </infinito-modal>
        </infinito-portal-entrance>
      </div>
    `;
      }
      renderSearch() {
        const {
          histories: t,
          state: e,
          loading: i
        } = this.store;
        if (t.length || i) {
          return o.e`
        ${t.map(t => o.e`
              <side-history-item
                .data=${t}
                .state=${e}
                @i-deleteUrl="${t => this.deleteUrl(t.detail)}"
                @i-load=${t => this.loadMore(t.detail)}
              >
              </side-history-item>
            `)}
      `;
        } else {
          return o.e`
        <div class="empty">
          <img .src=${x.a} />
          <p>${Object(p.i18n)("no_search_result")}</p>
        </div>
      `;
        }
      }
      renderList() {
        const {
          historyList: t,
          state: e,
          loading: i
        } = this.store;
        if (t.length || i) {
          return o.e`
        ${t.map(t => o.e`
              <div class="date">${this.format(t[0].lastVisitTime)}</div>
              ${t.length ? t.map(t => o.e` <side-history-item
                        .data=${t}
                        .state=${e}
                        @i-deleteUrl="${t => this.deleteUrl(t.detail)}"
                        @i-load=${t => this.loadMore(t.detail)}
                      >
                      </side-history-item>`) : null}
            `)}
      `;
        } else {
          return o.e`
        <div class="empty">
          <img .src=${j.a} />
          <p>${Object(p.i18n)("your_browsing_history_appears_here")}</p>
        </div>
      `;
        }
      }
    };
    T.styles = [v.a, o.b`
      :host {
        display: block;
        height: 100%;
        background-color: #fff;
      }
      .container {
        display: flex;
        flex-flow: column;
        flex: 1;
        overflow: hidden;
        height: calc(100% - var(--side-header-height));
      }
      .search-container {
        padding: 0 30px;
        margin: 30px 0 14px;
      }
      .remove {
        padding: 0 30px;
        margin-bottom: 20px;
      }
      .remove button {
        padding: 0;
        border: none;
        background: none;
        font-size: 12px;
        outline: none;
        cursor: not-allowed;
        color: #b6b6b6;
      }
      .remove button.active {
        color: #5c5c5c;
        cursor: pointer;
      }
      .history-lists {
        flex: 1;
        overflow: hidden;
      }
      .empty-list {
        height: 100%;
        display: flex;
        justify-content: center;
      }
      .list-body {
        height: 100%;
        /* overflow: auto; */
      }

      .active:hover {
        opacity: 0.7;
      }
      .date {
        margin-top: 10px;
        margin-bottom: 5px;
        padding: 0 30px;
        font-size: 18px;
        color: #333;
        font-weight: 500;
      }
      .empty {
        margin-top: 126px;
        color: #999;
      }
      .empty img {
        display: block;
        width: 86px;
        height: 86px;
        margin: 0 auto;
        margin-bottom: 6px;
      }
      .empty p {
        margin: 0;
        text-align: center;
        color: #999;
        font-weight: 300;
      }
      icons-custom {
        z-index: 1111;
      }
      icons-custom[show] {
        display: block;
      }
    `];
    O([Object(o.h)(".list-body")], T.prototype, "listBody", undefined);
    O([Object(o.h)("i-search")], T.prototype, "searchEle", undefined);
    O([Object(o.g)({
      type: Boolean
    })], T.prototype, "showModal", undefined);
    O([Object(o.g)({
      type: Number
    })], T.prototype, "scrollTop", undefined);
    T = O([Object(o.c)("side-history")], T);
  }
}]);