(window.webpackJsonp = window.webpackJsonp || []).push([[29], {
  798: function (e, t, o) {
    e.exports = o.p + "images/arrow.4401490.svg";
  },
  799: function (e, t, o) {
    e.exports = o.p + "images/toggler.7d56d56.svg";
  },
  800: function (e, t, o) {
    e.exports = o.p + "images/return.3d3d9a3.svg";
  },
  801: function (e, t, o) {
    e.exports = o.p + "images/empty.adec9ea.png";
  },
  802: function (e, t, o) {
    e.exports = o.p + "images/nothing.a498ad3.png";
  },
  812: function (e, t, o) {
    "use strict";

    o.r(t);
    o.d(t, "SideBookmarks", function () {
      return ke;
    });
    o(7);
    var i = o(1);
    var r = o(382);
    var s = o(618);
    var n = o(225);
    var a = o(6);
    var l = o(5);
    var c = o.n(l);
    var d = o(2);
    var h = o(309);
    o(19);
    var p = o(163);
    async function g() {
      const [e] = await new c.a(e => window.chrome.bookmarks.getTree(e));
      const t = function e(t, o) {
        const {
          children: i,
          id: r,
          title: s
        } = t;
        if (!i) {
          return o;
        }
        o.push({
          id: r,
          title: s,
          children: i
        });
        for (const t of i) {
          e(t, o);
        }
        return o;
      }(e, []);
      t.shift();
      return t;
    }
    async function u(e) {
      const [t] = await new c.a(t => window.chrome.bookmarks.getSubTree(e, t));
      return t;
    }
    async function f(e) {
      return await new c.a(t => window.chrome.bookmarks.search(e, t));
    }
    async function b() {
      return await new c.a(e => window.chrome.bookmarks.getRecent(30, e));
    }
    function m(e, t, o) {
      const i = e;
      for (let e = 0; e < i.length; e++) {
        const r = i[e];
        if (r.id === t) {
          i[e] = Object.assign(Object.assign({}, r), o);
          break;
        }
        if (r.children) {
          m(r.children, t, o);
        }
      }
      return i;
    }
    function k(e, t, o) {
      for (let i = 0; i < e.length; i++) {
        const r = e[i];
        if (r.id === o) {
          r.children = t;
          break;
        }
        if (r.children) {
          k(r.children, t, o);
        }
      }
      return e;
    }
    var y = o(311);
    var v = o(13);
    function x(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    class w extends h.a {
      constructor() {
        super(...arguments);
        this.showRecent = false;
        this.shortcutMode = true;
        this.setting = false;
        this.stashInfo = {};
        this.deleteModal = false;
        this.editModal = false;
        this.allFolders = [];
        this.defaultSelectedValue = "";
        this.isEditTitle = false;
        this.customIconCardShow = false;
        this.customIconUrl = "";
        this.customIconTitle = "";
      }
      toggleShowRecent(e) {
        this.showRecent = e;
        y.a.sendEvent({
          settingAction: {
            showRecentBookmarks: !!e
          }
        });
      }
      toggleShortcutMode(e) {
        this.shortcutMode = e;
        y.a.sendEvent({
          settingAction: {
            shortcutMode: !!e
          }
        });
      }
      toggleSetting() {
        this.setting = !this.setting;
      }
      closeSetting() {
        this.setting = false;
      }
      setStash(e) {
        this.stashInfo = e;
      }
      toggleDeleteModal() {
        this.deleteModal = !this.deleteModal;
      }
      remove(e) {
        return new c.a(t => {
          window.chrome.bookmarks.remove(e, t);
        });
      }
      removeTree(e) {
        return new c.a(t => {
          window.chrome.bookmarks.removeTree(e, t);
        });
      }
      toggleEditModal() {
        this.editModal = !this.editModal;
        this.isEditTitle = !this.isEditTitle;
      }
      update(e, t) {
        return new c.a(o => {
          window.chrome.bookmarks.update(e, t, o);
        });
      }
      move(e, t) {
        return new c.a(o => {
          window.chrome.bookmarks.move(e, t, o);
        });
      }
      async getFolder() {
        const e = await g();
        Object(d.i)(() => {
          this.allFolders = e;
        });
      }
      setDefaultValue(e) {
        this.defaultSelectedValue = e;
      }
      showCustomIconCard(e = "", t = "") {
        this.customIconCardShow = true;
        this.customIconUrl = e;
        this.customIconTitle = t;
      }
      hideCustomIconCard() {
        this.customIconCardShow = false;
        this.customIconUrl = "";
        this.customIconTitle = "";
      }
    }
    x([d.g], w.prototype, "showRecent", undefined);
    x([d.b], w.prototype, "toggleShowRecent", null);
    x([d.g], w.prototype, "shortcutMode", undefined);
    x([d.b], w.prototype, "toggleShortcutMode", null);
    x([d.g], w.prototype, "setting", undefined);
    x([d.b], w.prototype, "toggleSetting", null);
    x([d.b], w.prototype, "closeSetting", null);
    x([d.g], w.prototype, "stashInfo", undefined);
    x([d.b], w.prototype, "setStash", null);
    x([d.g], w.prototype, "deleteModal", undefined);
    x([d.b], w.prototype, "toggleDeleteModal", null);
    x([d.b], w.prototype, "remove", null);
    x([d.b], w.prototype, "removeTree", null);
    x([d.g], w.prototype, "editModal", undefined);
    x([d.b], w.prototype, "toggleEditModal", null);
    x([d.b], w.prototype, "update", null);
    x([d.b], w.prototype, "move", null);
    x([d.g], w.prototype, "allFolders", undefined);
    x([d.b], w.prototype, "getFolder", null);
    x([d.g], w.prototype, "defaultSelectedValue", undefined);
    x([d.b], w.prototype, "setDefaultValue", null);
    x([d.g], w.prototype, "isEditTitle", undefined);
    x([d.g], w.prototype, "customIconCardShow", undefined);
    x([d.g], w.prototype, "customIconUrl", undefined);
    x([d.g], w.prototype, "customIconTitle", undefined);
    x([d.b], w.prototype, "showCustomIconCard", null);
    x([d.b], w.prototype, "hideCustomIconCard", null);
    const S = new w();
    S.initSyncStore(v.b, ["showRecent", "shortcutMode"]);
    function O(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    class j {
      constructor() {
        this.folders = [];
        this.selectedIndex = 0;
        this.subFolderList = [];
        this.isSearch = false;
        this.searchList = [];
      }
      async getFolder() {
        let e = await g();
        e = e.length ? e.filter(e => e.children.length || !e.children.length && (e.id === "1" || e.id === "2")) : [];
        Object(d.i)(() => {
          this.folders = e;
        });
      }
      setIndex(e) {
        this.selectedIndex = e;
      }
      get pureSingleItemList() {
        if (this.subFolderList?.length) {
          return this.subFolderList.filter(e => e.url);
        } else {
          return [];
        }
      }
      async getListById(e) {
        const t = await u(e);
        Object(d.i)(() => {
          if (t == null ? undefined : t.children) {
            this.subFolderList = t.children;
          } else {
            this.subFolderList = [];
          }
        });
      }
      async search(e) {
        this.isSearch = true;
        const t = await f(e);
        Object(d.i)(() => {
          if (t.length) {
            this.searchList = t.filter(e => e.url);
          } else {
            this.searchList = [];
          }
        });
      }
      setSearchList(e) {
        this.searchList = e;
      }
      removeSearch() {
        this.isSearch = false;
        this.searchList = [];
      }
      async getRecent() {
        const e = await b();
        Object(d.i)(() => {
          this.subFolderList = e;
        });
      }
    }
    O([d.g], j.prototype, "folders", undefined);
    O([d.b], j.prototype, "getFolder", null);
    O([d.g], j.prototype, "selectedIndex", undefined);
    O([d.b], j.prototype, "setIndex", null);
    O([d.g], j.prototype, "subFolderList", undefined);
    O([d.e], j.prototype, "pureSingleItemList", null);
    O([d.b], j.prototype, "getListById", null);
    O([d.g], j.prototype, "isSearch", undefined);
    O([d.g], j.prototype, "searchList", undefined);
    O([d.b], j.prototype, "search", null);
    O([d.b], j.prototype, "setSearchList", null);
    O([d.b], j.prototype, "removeSearch", null);
    O([d.b], j.prototype, "getRecent", null);
    const $ = new j();
    function R(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    class I {
      constructor() {
        this.bookmarks = [];
        this.isSearch = false;
        this.searchList = [];
        this.recentList = [{
          title: Object(a.i18n)("recently_add"),
          open: false
        }];
        this.currentFolderData = {};
        this.currentFolderChildren = [];
      }
      async getAllBookmarks(e = 1) {
        const t = await async function () {
          const [e] = await Object(p.a)();
          const [t, ...o] = e.children;
          return [...t.children, ...o];
        }();
        Object(d.i)(() => {
          this.bookmarks = t.map(e => e.children ? Object.assign(Object.assign({}, e), {
            children: [],
            open: false
          }) : e).map(t => Object.assign(Object.assign({}, t), {
            depth: e
          }));
        });
      }
      async search(e) {
        this.isSearch = true;
        const t = await f(e);
        Object(d.i)(() => {
          if (t.length) {
            this.searchList = t.filter(e => e.url);
          } else {
            this.searchList = [];
          }
        });
      }
      setSearchList(e) {
        this.searchList = e;
      }
      removeSearch() {
        this.isSearch = false;
        this.searchList = [];
      }
      async getRecent() {
        const e = await b();
        const [t] = this.recentList;
        const o = Object.assign({}, t, {
          children: e
        });
        Object(d.i)(() => {
          this.recentList = [o];
        });
      }
      setRecent(e) {
        this.recentList = e;
      }
      clearRecent() {
        this.recentList.children = [];
      }
      setCurrentFolderData(e) {
        this.currentFolderData = e;
      }
      replaceChildren(e) {
        this.currentFolderChildren = e;
      }
      setChildren(e, t) {
        this.currentFolderChildren = k(this.currentFolderChildren, e, t);
      }
      setBookMarks(e, t) {
        this.bookmarks = k(this.bookmarks, t, e);
      }
      async getListById(e, t) {
        const o = await u(e);
        if (o == null ? undefined : o.children) {
          const e = o.children.map(e => e.children ? Object.assign(Object.assign({}, e), {
            children: [],
            open: false
          }) : e).map(e => Object.assign(Object.assign({}, e), {
            depth: t
          }));
          return Object.assign(Object.assign({}, o), {
            children: e
          });
        }
        return {
          children: []
        };
      }
      toggleFolder(e, t) {
        this.bookmarks = m(this.bookmarks, e, t);
        if (this.currentFolderChildren.length) {
          this.currentFolderChildren = m(this.currentFolderChildren, e, t);
        }
      }
    }
    R([d.g], I.prototype, "bookmarks", undefined);
    R([d.b], I.prototype, "getAllBookmarks", null);
    R([d.g], I.prototype, "isSearch", undefined);
    R([d.g], I.prototype, "searchList", undefined);
    R([d.b], I.prototype, "search", null);
    R([d.b], I.prototype, "setSearchList", null);
    R([d.b], I.prototype, "removeSearch", null);
    R([d.g], I.prototype, "recentList", undefined);
    R([d.b], I.prototype, "getRecent", null);
    R([d.b], I.prototype, "setRecent", null);
    R([d.b], I.prototype, "clearRecent", null);
    R([d.g], I.prototype, "currentFolderData", undefined);
    R([d.b], I.prototype, "setCurrentFolderData", null);
    R([d.g], I.prototype, "currentFolderChildren", undefined);
    R([d.b], I.prototype, "replaceChildren", null);
    R([d.b], I.prototype, "setChildren", null);
    R([d.b], I.prototype, "setBookMarks", null);
    R([d.b], I.prototype, "toggleFolder", null);
    const C = new I();
    var L = i.b`:host {
  --space-lg: 30px;
}
button {
  margin: 0;
  padding: 0;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}
input {
  border: none;
  outline: none;
}
.bookmarks-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  height: calc(100% - var(--side-header-height));
}
.bookmark-search {
  margin-top: 30px;
  padding: 0 var(--space-lg);
}
/* setting */
.bookmark-setting-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 90px;
  left: 30px;
  width: 360px;
  height: 117px;
  padding: 26px 24px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 9;
  border-radius: 6px;
}
.bookmark-setting-wrapper > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bookmark-setting-wrapper > div span {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}
.bookmark-setting-wrapper.hide {
  display: none;
}
icons-custom {
  z-index: 1111;
}
icons-custom[show] {
  display: block;
}
`;
    var F = o(798);
    var T = o.n(F);
    var E = i.b`.i-select-wrapper {
  position: relative;
}
.input-field {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.input-field p {
  padding: 10px 0;
  margin: 0;
  width: 100%;
}
.input-field i-svg {
  width: 16px;
  height: 16px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 300ms;
}
.input-field i-svg:hover {
  opacity: 0.8;
}
.select-options {
  display: none;
  position: absolute;
  top: 40px;
  z-index: 99;
}
.select-options.show {
  display: block;
}
ul {
  margin: 0;
  padding: 0;
  width: 300px;
  max-height: 200px;
  overflow: auto;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
ul p {
  padding: 0 20px;
}
li {
  list-style: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 300ms;
}
li:hover,
li.active {
  background: #F6F6F6;
}
`;
    function M(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let D = class extends i.a {
      constructor() {
        super(...arguments);
        this.data = [];
        this.defaulValue = "";
        this.open = false;
      }
      firstUpdated() {
        window.addEventListener("click", () => {
          this.open = false;
        });
      }
      handleChange(e) {
        this.dispatchEvent(new CustomEvent("change", {
          detail: {
            value: e.id,
            title: e.title
          },
          bubbles: true,
          composed: true
        }));
      }
      render() {
        const e = {
          "select-options": true,
          show: this.open
        };
        return i.e`
      <div class="i-select-wrapper">
        <div class="input-field" @click="${this.toggle}">
          <p>${this.defaulValue}</p>
          <i-svg src="${T.a}"></i-svg>
        </div>
        ${this.open ? i.e`
              <div class=${Object(r.a)(e)}>
                <ul>
                  ${this.data.length ? this.data.map(e => i.e`
                          <li
                            class="${e.title === this.defaulValue ? "active" : ""}"
                            @click="${() => this.handleChange(e)}"
                          >
                            ${e.title}
                          </li>
                        `) : i.e`<p>${i18n("no_data")}</p>`}
                </ul>
              </div>
            ` : null}
      </div>
    `;
      }
      toggle(e) {
        e.stopPropagation();
        this.open = !this.open;
      }
    };
    D.styles = E;
    M([Object(i.g)({
      type: Array
    })], D.prototype, "data", undefined);
    M([Object(i.g)({
      type: String
    })], D.prototype, "defaulValue", undefined);
    M([Object(i.g)({
      type: Boolean
    })], D.prototype, "open", undefined);
    D = M([Object(i.c)("i-select")], D);
    var P = o(24);
    var B = i.b`:host {
  display: block;
  height: 100%;
}
.container {
  display: flex;
  height: 100%;
}
.left-container {
  box-sizing: border-box;
  padding-top: 30px;
  width: 140px;
  height: 100%;
  border-right: 1px solid #efefef;
  overflow: hidden;
}
.left-body {
  position: relative;
  height: 100%;
}
.left-body::before {
  content: '';
  position: absolute;
  z-index: 0;
  width: 100%;
  height: calc(var(--target-height, 40) * 1px);
  top: calc(var(--target-top, 0) * 1px);
  left: 0;
  background: #f5f5f5;
  border-radius: 6px;
  transition: top 0.2s, height 0.2s;
}
.left-body::after {
  content: '';
  position: absolute;
  z-index: 2;
  width: 3px;
  height: calc(var(--target-height, 40) * 1px - 28px);
  top: calc(var(--target-top, 0) * 1px + 15px);
  left: 10px;
  border-radius: 1.5px;
  background-color: #333333;
  transition: top 0.2s ease 0s, height 0.2s ease 0s;
}
.right-container {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 30px;
  overflow: hidden;
}
.search {
  padding: 0 20px;
  margin-bottom: 15px;
}
.right-body {
  flex: 1;
}
side-bookmark-item {
  margin-top: 4px;
  display: block;
}
side-bookmark-item:first-of-type {
  margin-top: 0;
}
`;
    var _ = o(310);
    function z(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let V = class extends i.a {
      constructor() {
        super(...arguments);
        this.cTitle = "";
      }
      render() {
        return i.e`
      <div class="m-20">
        <p>${this.cTitle}</p>
      </div>
    `;
      }
    };
    V.styles = i.b`
    :host {
      display: block;
      position: relative;
      padding: 0 20px 0 30px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
    }
    .m-20 {
      color: #656565;
      cursor: pointer;
    }
    :host(.active) .m-20 {
      color: #333;
    }
    p {
      margin: 0;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 13px;
      font-weight: 400;
      transition: all 300ms ease-in;
    }
    :host(.active) p {
      font-weight: 500;
    }
    p:hover {
      color: #333;
    }
  `;
    z([Object(i.g)({
      type: String
    })], V.prototype, "cTitle", undefined);
    V = z([Object(i.c)("side-bookmark-folder")], V);
    function U(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let A = class extends n.a {
      constructor() {
        super(...arguments);
        this.store = $;
        this.mainStore = S;
        this.cacheFolders = [];
        this.curIndex = 0;
      }
      async firstUpdated() {
        await this.store.getFolder();
        this.cacheFolders = this.store.folders;
        if (this.mainStore.showRecent) {
          this.store.setIndex(-1);
          this.store.getRecent();
        } else {
          this.store.setIndex(0);
          const e = this.store.folders[0].id;
          this.store.getListById(e);
        }
      }
      updated() {
        if (this.folderChange()) {
          return;
        }
        const e = this.store.folders;
        this.leftBody.querySelectorAll("side-bookmark-folder").forEach((e, t) => {
          if (e.classList.contains("active")) {
            const e = 40;
            this.curIndex = t;
            this.style.setProperty("--target-top", e * t + "");
          }
        });
        this.cacheFolders = e;
      }
      render() {
        return i.e`
      <div class="container">
        <div class="left-container">
          <div class="global-scrollbar left-body">${this.renderFolder()}</div>
        </div>
        <div class="right-container">
          <div class="search">
            <i-search
              .placeholder="${Object(a.i18n)("search_bookmark")}"
              @i-search="${P.a.debounce(this.handleSearch, 200)}"
              @i-clear=${this.clear}
            >
            </i-search>
          </div>
          <div class="global-scrollbar right-body">
            ${this.store.isSearch ? this.renderSearchList() : this.renderList()}
          </div>
        </div>
      </div>
    `;
      }
      folderReflow() {
        const e = this.store.folders;
        if (this.cacheFolders.length > e.length) {
          let t = 0;
          this.cacheFolders.forEach((o, i) => {
            if (!e.some(e => e.id === o.id)) {
              t = i;
            }
          });
          return t <= this.curIndex && (this.curIndex > e.length ? this.curIndex = e.length - 1 : this.curIndex--, this.handleClick(e[this.curIndex].id, this.curIndex), this.cacheFolders = e, true);
        }
        if (this.cacheFolders.length < e.length) {
          let t = 0;
          e.forEach((e, o) => {
            if (!this.cacheFolders.some(t => t.id === e.id)) {
              t = o;
            }
          });
          return t <= this.curIndex && (this.curIndex < e.length - 1 && this.curIndex++, this.handleClick(e[this.curIndex].id, this.curIndex), this.cacheFolders = e, true);
        }
      }
      folderChange() {
        const e = this.store.folders;
        if (JSON.stringify(this.cacheFolders.map(e => e.id)) !== JSON.stringify(e.map(e => e.id))) {
          if (this.folderReflow()) {
            return true;
          }
          if (this.cacheFolders.length === 0) {
            return true;
          }
          const t = this.cacheFolders[this.curIndex].id;
          this.curIndex = e.findIndex(e => e.id === t);
          this.handleClick(t, this.curIndex);
          this.cacheFolders = e;
          return true;
        }
        return false;
      }
      renderFolder() {
        const {
          folders: e,
          selectedIndex: t,
          isSearch: o
        } = this.store;
        const {
          showRecent: r
        } = this.mainStore;
        return i.e`
      ${o ? i.e`<side-bookmark-folder class="active" cTitle="${Object(a.i18n)("search")}"></side-bookmark-folder>` : null}
      ${r ? i.e`<side-bookmark-folder
            class=${t !== -1 || o ? "" : "active"}
            cTitle="${Object(a.i18n)("recently_add")}"
            @click="${this.handleGetRecent}"
          >
          </side-bookmark-folder>` : null}
      ${e.length ? e.map((e, r) => i.e`
              <side-bookmark-folder
                class=${r !== t || o ? "" : "active"}
                cTitle=${e.title}
                @click=${() => this.handleClick(e.id, r)}
              >
              </side-bookmark-folder>
            `) : null}
    `;
      }
      renderList() {
        const {
          pureSingleItemList: e
        } = this.store;
        return i.e`
      ${e.length ? e.map(e => i.e` <side-bookmark-item .data=${e}></side-bookmark-item> `) : i.e`<side-bookmark-nothing></side-bookmark-nothing>`}
    `;
      }
      renderSearchList() {
        const {
          searchList: e
        } = this.store;
        return i.e`
      ${e.length ? e.map(e => i.e` <side-bookmark-item .data=${e}></side-bookmark-item> `) : i.e`<side-bookmark-empty></side-bookmark-empty>`}
    `;
      }
      handleSearch(e) {
        const t = e.detail.text;
        if (t) {
          this.store.search(t);
        } else {
          this.store.removeSearch();
        }
      }
      clear() {
        this.store.removeSearch();
      }
      async handleGetRecent() {
        this.searchEle.clear();
        this.store.removeSearch();
        await this.updateComplete;
        this.store.setIndex(-1);
        this.store.getRecent();
      }
      async handleClick(e, t) {
        this.searchEle.clear();
        this.store.removeSearch();
        await this.updateComplete;
        this.store.setIndex(t);
        this.store.getListById(e);
      }
    };
    A.styles = [_.a, B];
    U([Object(i.h)("i-search")], A.prototype, "searchEle", undefined);
    U([Object(i.h)(".left-body")], A.prototype, "leftBody", undefined);
    A = U([Object(i.c)("side-bookmark-shortcut")], A);
    var W = o(601);
    var q = i.b`:host > .tree {
  position: relative;
  padding: 0;
  margin: 0;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  background: #fff;
}
li.folder {
  padding: 0 20px 0 10px;
}
li.folder.close .content .toggler {
  transform: rotate(-90deg);
}
li.folder.close ul {
  display: none;
}
li.folder > i-dot-expanded {
  margin-top: -40px;
}
li.folder > .content:focus-within::before {
  background: #f5f5f5;
}
li.folder > .content:hover::before {
  background: #f5f5f5;
}
li.folder > .content:hover > i-dot-expanded {
  opacity: 1;
  z-index: 9;
}
li.folder .folder {
  padding-right: 0;
}
li.file {
  padding: 0 30px;
  display: flex;
  align-items: center;
}
li.file:focus-within .content::before {
  background: #f5f5f5;
}
li.file:hover .content::before {
  background: #f5f5f5;
}
li.file:hover i-dot-expanded {
  opacity: 1;
  z-index: 9;
}
li ul {
  padding-left: 12px;
  margin-left: 3px;
  border-left: 2px solid #eee;
}
li ul .file {
  padding: 0 20px;
  padding-right: 0;
}
.content {
  display: flex;
  height: 40px;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}
.content::before {
  content: ' ';
  position: absolute;
  left: 0;
  right: 0;
  height: 40px;
  transition: background 0.3s;
}
.content .toggler {
  position: relative;
  width: 10px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
  z-index: 1;
}
.content .folder-icon,
.content i-favicon {
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  z-index: 1;
}
.content .turncate {
  position: relative;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 1;
}
i-dot-expanded {
  --dot-hover: rgba(0, 0, 0 0.15);
  margin-left: auto;
  opacity: 0;
  outline: none;
  transition: opacity 0.3s;
  cursor: pointer;
  transform: scale(0.6);
}
i-dot-expanded:focus {
  opacity: 1;
  z-index: 9;
  background: var(--dot-hover);
}
i-dot-expanded.disabled:focus {
  background: none;
  opacity: 0;
}
.expanded-item {
  background: #fff;
  cursor: pointer;
}
.expanded-item:hover {
  background: #f5f5f5;
}
`;
    var J = o(799);
    var N = o.n(J);
    var G = o(475);
    var H = o.n(G);
    o(626);
    function K(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let Q = class extends n.a {
      constructor() {
        super(...arguments);
        this.mainStore = S;
        this.data = [];
      }
      handleToggle(e, t, o) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("toggle", {
          detail: {
            depth: t,
            item: o
          }
        }));
      }
      edit(e, t) {
        this.mainStore.setStash(t);
        this.mainStore.toggleEditModal();
        const {
          parentId: o
        } = t;
        const i = this.mainStore.allFolders.filter(e => e.id === o);
        this.mainStore.setDefaultValue(i[0].title);
      }
      delete(e, t) {
        this.mainStore.setStash(t);
        this.mainStore.toggleDeleteModal();
      }
      renderOpt(e) {
        const {
          parentId: t
        } = e;
        if (!t || ["root________", "0"].includes(t)) {
          return null;
        } else {
          return i.e`
      <i-dot-expanded tabindex="0">
        <li class="bookmark-dot-item" @click="${t => this.edit(t, e)}">${i18n("edit")}</li>
        <li class="bookmark-dot-item" @click=${t => this.delete(t, e)}>${i18n("del_folder")}</li>
      </i-dot-expanded>
    `;
        }
      }
      render() {
        return i.e` ${this.renderTree(this.data)} `;
      }
      renderTree(e) {
        return i.e`
      <ul class="tree">
        ${e.length ? e.map(e => e.children ? i.e`
                  <li
                    class="folder ${e.open ? "" : "close"}"
                    @click=${t => this.handleToggle(t, e.depth, e)}
                  >
                    <div class="content">
                      <i-svg class="toggler" .src=${N.a}></i-svg>
                      <img class="folder-icon" .src=${H.a} />
                      <div class="turncate">${e.title}</div>
                      ${this.renderOpt(e)}
                    </div>
                    ${this.renderTree(e.children)}
                  </li>
                ` : i.e`
                <li class="file" @click=${t => this.openUrl(t, e.url)}>
                  <div class="content">
                    <i-favicon .url="${e.url}"></i-favicon>
                    <p class="turncate title">${e.title}</p>
                  </div>
                  ${this.renderOpt(e)}
                </li>
              `) : null}
      </ul>
    `;
      }
      openUrl(e, t) {
        e.stopPropagation();
        y.a.sendEvent({
          action: {
            openBookmark: P.a.getTargetLogDomain(t)
          }
        });
        P.a.openUrl(t, W.settingStore.setting.link.bookmark, e);
      }
    };
    Q.styles = q;
    K([Object(i.g)({
      type: Array
    })], Q.prototype, "data", undefined);
    Q = K([Object(i.c)("side-bookmark-tree")], Q);
    var X = i.b`:host {
  display: block;
  height: 100%;
}
.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.bookmark-search {
  box-sizing: border-box;
  padding: 30px;
  padding-bottom: 15px;
}
.list-container {
  flex: 1;
  overflow: hidden;
}
.list-container > .list-body {
  height: 100%;
}
.bread {
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 10px;
  cursor: pointer;
}
.bread i-svg {
  width: 14px;
  height: 14px;
  margin-right: 6px;
}
.bread span {
  font-size: 12px;
  font-weight: 500;
}
`;
    var Y = o(800);
    var Z = o.n(Y);
    function ee(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    function te(e, t) {
      var o = {};
      for (var i in e) {
        if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
          o[i] = e[i];
        }
      }
      if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var r = 0;
        for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
          if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
            o[i[r]] = e[i[r]];
          }
        }
      }
      return o;
    }
    let oe = class extends n.a {
      constructor() {
        super(...arguments);
        this.store = C;
        this.mainStore = S;
        this.depth = 0;
      }
      async firstUpdated() {
        await this.store.getAllBookmarks();
        if (this.mainStore.showRecent) {
          await this.store.getRecent();
        } else {
          this.store.clearRecent();
        }
      }
      render() {
        return i.e`
      <div class="wrapper">
        <div class="bookmark-search">
          <i-search
            placeholder="${Object(a.i18n)("search_bookmark")}"
            @i-search="${P.a.debounce(this.handleSearch, 200)}"
            @i-clear=${this.clear}
          >
          </i-search>
        </div>
        <div class="list-container">
          <div class="global-scrollbar list-body">
            ${this.store.isSearch ? this.renderSearchList() : i.e`
                  ${this.renderRecent()}
                  ${this.renderList()}
                `}
          </div>
        </div>
      </div>
    `;
      }
      renderSearchList() {
        const {
          searchList: e
        } = this.store;
        return i.e`
      ${e.length ? e.map(e => i.e`<side-bookmark-item .data=${e}></side-bookmark-item>`) : i.e`<side-bookmark-empty></side-bookmark-empty>`}
    `;
      }
      renderList() {
        const {
          bookmarks: e,
          currentFolderData: t,
          currentFolderChildren: o
        } = this.store;
        return i.e`
      ${Object.keys(t).length ? i.e`
            <div class="bread" @click=${this.goBack}>
              <i-svg .src=${Z.a}></i-svg>
              <span>${t.title}</span>
            </div>
            <div>
              <side-bookmark-tree
                .data=${o}
                @toggle=${this.handleToggle}
              >
              </side-bookmark-tree>
            </div>
          ` : i.e`
            <side-bookmark-tree
              .data=${e}
              @toggle=${this.handleToggle}
            >
            </side-bookmark-tree>
          `}
    `;
      }
      renderRecent() {
        const {
          showRecent: e
        } = this.mainStore;
        const {
          recentList: t
        } = this.store;
        return i.e`
      ${e ? i.e`<side-bookmark-tree .data=${t} @toggle=${this.handleToggleRecent}></side-bookmark-tree>` : null}
    `;
      }
      async handleToggleRecent() {
        await this.store.getRecent();
        const [e] = this.store.recentList;
        const t = Object.assign({}, e, {
          open: !e.open
        });
        this.store.setRecent([t]);
      }
      handleSearch(e) {
        const t = e.detail.text;
        if (t) {
          this.store.search(t);
        } else {
          this.store.removeSearch();
        }
      }
      clear() {
        this.store.removeSearch();
      }
      async handleToggle(e) {
        const {
          depth: t,
          item: o
        } = e.detail;
        this.store.toggleFolder(o.id, {
          open: !o.open
        });
        const {
          children: i
        } = await this.store.getListById(o.id, t + 1);
        if (t >= 3) {
          if (t % 3 == 0) {
            this.store.setCurrentFolderData(o);
            this.store.replaceChildren(i);
          } else {
            this.store.setChildren(i, o.id);
          }
        } else {
          this.store.setBookMarks(o.id, i);
        }
      }
      async goBack() {
        const {
          depth: e,
          parentId: t
        } = this.store.currentFolderData;
        if (e > 3) {
          const o = await this.store.getListById(t, e);
          const {
            children: i
          } = o;
          const r = te(o, ["children"]);
          this.store.replaceChildren(i);
          this.store.setCurrentFolderData(Object.assign(Object.assign({}, r), {
            depth: e - 1
          }));
        } else {
          this.store.setCurrentFolderData({});
        }
      }
    };
    oe.styles = [_.a, X];
    ee([Object(i.g)({
      type: Number
    })], oe.prototype, "depth", undefined);
    oe = ee([Object(i.c)("side-bookmark-list-flow")], oe);
    var ie = i.b`/* side-book-item */
.side-bookmark-item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  transition: all 300ms;
  cursor: pointer;
}
.side-bookmark-item.normal-mode-search {
  padding: 0 30px;
}
.side-bookmark-item:focus-within {
  background: #f6f6f6;
}
.side-bookmark-item:hover {
  background: #f6f6f6;
}
.side-bookmark-item:hover .options {
  display: flex;
}
.side-bookmark-item:hover i-dot-expanded {
  opacity: 1;
}
.side-bookmark-item img,
.side-bookmark-item i-favicon {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
.side-bookmark-item .content {
  flex: 1;
  overflow: hidden;
}
.side-bookmark-item .content .txt {
  display: block;
  width: 100%;
  margin: 0;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
}
.side-bookmark-item i-dot-expanded {
  --dot-hover: rgba(0, 0, 0, 0.15);
  opacity: 0;
  outline: none;
  transition: opacity 0.3s;
  transform: scale(0.5);
}
.side-bookmark-item i-dot-expanded:focus {
  opacity: 1;
  background: var(--dot-hover);
}
`;
    function re(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let se = class extends n.a {
      constructor() {
        super(...arguments);
        this.mainStore = S;
        this.shortcutStore = $;
        this.normalStore = C;
        this.data = {};
      }
      async addToSites() {
        const {
          url: e,
          title: t
        } = this.data;
        this.mainStore.showCustomIconCard(e, t);
      }
      async edit() {
        this.mainStore.setStash(this.data);
        this.mainStore.toggleEditModal();
        const {
          parentId: e
        } = this.data;
        const t = this.mainStore.allFolders.filter(t => t.id === e);
        this.mainStore.setDefaultValue(t[0].title);
      }
      async delete() {
        this.mainStore.setStash(this.data);
        this.mainStore.toggleDeleteModal();
      }
      render() {
        const {
          title: e,
          url: t
        } = this.data;
        const o = {
          "side-bookmark-item": true,
          "normal-mode-search": this.normalStore.isSearch
        };
        return i.e`
      <div
        class=${Object(r.a)(o)}
        @click="${e => this.openUrl(e, t)}"
        @mousedown="${e => {
          if (e.button === 1) {
            this.openUrl(e, t);
          }
        }}"
      >
        <i-favicon .url=${t}></i-favicon>
        <div class="content">
          <p class="txt">${e}</p>
        </div>
        <i-dot-expanded class="small" tabindex="0">
          <li class="bookmark-dot-item" @click="${this.addToSites}">${i18n("add_to_home_site")}</li>
          <li class="bookmark-dot-item" @click="${this.edit}">${i18n("edit")}</li>
          <li class="bookmark-dot-item" @click=${this.delete}>${i18n("del_folder")}</li>
        </i-dot-expanded>
      </div>
    `;
      }
      openUrl(e, t) {
        if (t) {
          e.stopPropagation();
          y.a.sendEvent({
            action: {
              openBookmark: P.a.getTargetLogDomain(t)
            }
          });
          P.a.openUrl(t, W.settingStore.setting.link.bookmark, e);
        }
      }
    };
    se.styles = ie;
    re([Object(i.g)({
      type: Object
    })], se.prototype, "data", undefined);
    se = re([Object(i.c)("side-bookmark-item")], se);
    var ne = i.b`.field-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.field-control label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}
.field-control input {
  padding: 10px 0;
  font-size: 14px;
  border: none;
  outline: none;
}
`;
    function ae(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let le = class extends n.a {
      constructor() {
        super(...arguments);
        this.store = S;
        this.defaultValue = "";
        this.isEditTitle = false;
      }
      async firstUpdated() {
        await this.store.getFolder();
      }
      render() {
        const {
          stashInfo: e,
          allFolders: t
        } = this.store;
        return i.e`
      <div>
        <div class="field-control">
          <label>${Object(a.i18n)("placeholder_name")}</label>
          <input
            name="bookmark"
            .placeholder="${Object(a.i18n)("please_enter_bookmark_name")}"
            @change=${this.handleChange}
          />
        </div>
        ${e.children ? null : i.e`
              <div class="field-control">
                <label>${Object(a.i18n)("folder")}</label>
                <i-select
                  @change="${e => this.handleSelectChange(e.detail)}"
                  .data=${t}
                  .defaulValue=${this.defaultValue}
                ></i-select>
              </div>
            `}
      </div>
    `;
      }
      updated(e) {
        const {
          title: t
        } = this.store.stashInfo;
        e.forEach((e, o) => {
          if (o === "isEditTitle") {
            this.inputEle.value = t;
          }
        });
      }
      handleChange() {
        this.dispatchEvent(new CustomEvent("on-inputChange", {
          detail: {
            value: this.inputEle.value
          }
        }));
      }
      handleSelectChange({
        value: e,
        title: t
      }) {
        this.dispatchEvent(new CustomEvent("on-selectedChange", {
          detail: {
            id: e,
            title: t
          }
        }));
      }
    };
    le.styles = ne;
    ae([Object(i.h)("input[name=\"bookmark\"]")], le.prototype, "inputEle", undefined);
    ae([Object(i.g)({
      type: String
    })], le.prototype, "defaultValue", undefined);
    ae([Object(i.g)({
      type: Boolean,
      reflect: true
    })], le.prototype, "isEditTitle", undefined);
    le = ae([Object(i.c)("side-bookmark-edit-field")], le);
    var ce = o(801);
    var de = o.n(ce);
    function he(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let pe = class extends i.a {
      render() {
        return i.e`
      <div class="empty">
        <img .src=${de.a} />
        <p>${Object(a.i18n)("no_search_result")}</p>
      </div>
    `;
      }
    };
    pe.styles = i.b`
    .empty {
      margin-top: 87px;
    }
    img {
      display: block;
      width: 86px;
      height: 86px;
      margin: 0 auto;
    }
    p {
      margin: 0;
      text-align: center;
      color: #999;
      font-weight: 300;
    }
  `;
    pe = he([Object(i.c)("side-bookmark-empty")], pe);
    var ge = o(802);
    var ue = o.n(ge);
    function fe(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let be = class extends i.a {
      render() {
        return i.e`
      <div class="empty">
        <img .src=${ue.a} />
        <p>${Object(a.i18n)("no_bookmark_result")}</p>
      </div>
    `;
      }
    };
    be.styles = i.b`
    .empty {
      margin-top: 87px;
    }
    img {
      display: block;
      width: 86px;
      height: 86px;
      margin: 0 auto;
    }
    p {
      margin: 0;
      text-align: center;
      color: #999;
      font-weight: 300;
    }
  `;
    be = fe([Object(i.c)("side-bookmark-nothing")], be);
    function me(e, t, o, i) {
      var r;
      var s = arguments.length;
      var n = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, o) : i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
        n = Reflect.decorate(e, t, o, i);
      } else {
        for (var a = e.length - 1; a >= 0; a--) {
          if (r = e[a]) {
            n = (s < 3 ? r(n) : s > 3 ? r(t, o, n) : r(t, o)) || n;
          }
        }
      }
      if (s > 3 && n) {
        Object.defineProperty(t, o, n);
      }
      return n;
    }
    let ke = class extends n.a {
      constructor() {
        super(...arguments);
        this.store = S;
        this.shortcutStore = $;
        this.normalStore = C;
        this.newTitle = "";
        this.newFolder = "";
        this.handleEditCancel = () => {
          this.store.toggleEditModal();
        };
        this.handleDeleteCancel = () => {
          this.store.toggleDeleteModal();
        };
      }
      firstUpdated() {
        window.addEventListener("click", () => {
          this.store.closeSetting();
        });
        window.chrome.bookmarks.onChanged.addListener((e, t) => this.listenChromeBookmark("change", e, t));
        window.chrome.bookmarks.onCreated.addListener(() => this.listenChromeBookmark());
        window.chrome.bookmarks.onMoved.addListener((e, t) => this.listenChromeBookmark("move", e, t));
        window.chrome.bookmarks.onRemoved.addListener(e => this.listenChromeBookmark("remove", e));
      }
      listenChromeBookmark(e, t, o) {
        if (this.store.shortcutMode) {
          const {
            selectedIndex: i,
            folders: r,
            isSearch: s,
            searchList: n
          } = this.shortcutStore;
          if (s) {
            let i = [];
            switch (e) {
              case "change":
                i = n.map(e => e.id === t ? Object.assign(Object.assign({}, e), o) : e);
                break;
              case "move":
                i = n.map(e => e.id === t ? Object.assign(Object.assign({}, e), {
                  parentId: o.parentId
                }) : e);
                break;
              case "remove":
                i = n.filter(e => e.id !== t);
            }
            this.shortcutStore.setSearchList(i);
            return;
          }
          if (i !== -1) {
            const e = r[i].id;
            this.shortcutStore.getListById(e);
          } else {
            this.shortcutStore.getRecent();
          }
          this.shortcutStore.getFolder();
        } else {
          const {
            isSearch: i,
            searchList: r
          } = this.normalStore;
          if (i) {
            let i = [];
            switch (e) {
              case "change":
                i = r.map(e => e.id === t ? Object.assign(Object.assign({}, e), o) : e);
                break;
              case "move":
                i = r.map(e => e.id === t ? Object.assign(Object.assign({}, e), {
                  parentId: o.parentId
                }) : e);
                break;
              case "remove":
                i = r.filter(e => e.id !== t);
            }
            this.normalStore.setSearchList(i);
          }
          this.normalStore.getAllBookmarks();
          if (this.store.showRecent) {
            this.normalStore.getRecent();
          }
        }
      }
      handleSetting(e) {
        e.stopPropagation();
        this.store.toggleSetting();
      }
      async toggleShowRecent(e) {
        e.stopPropagation();
        this.store.toggleShowRecent(e.detail.checked);
        if (this.store.shortcutMode) {
          if (e.detail.checked) {
            this.shortcutStore.setIndex(-1);
            await this.shortcutStore.getRecent();
          } else if (this.shortcutStore.selectedIndex === -1) {
            this.shortcutStore.setIndex(0);
            const e = this.shortcutStore.folders[0].id;
            this.shortcutStore.getListById(e);
          }
        } else if (e.detail.checked) {
          await this.normalStore.getRecent();
        } else {
          this.normalStore.clearRecent();
        }
      }
      toggleShortcutMode(e) {
        e.stopPropagation();
        this.store.toggleShortcutMode(e.detail.checked);
        if (e.detail.checked) {
          this.shortcutStore.removeSearch();
        } else {
          this.normalStore.removeSearch();
        }
      }
      async handleTabClose() {
        if (this.store.editModal) {
          setTimeout(() => {
            this.store.toggleEditModal();
          }, 200);
        }
        if (this.store.shortcutMode) {
          const e = await this.shorcutBookmarkWrapper;
          if (e) {
            setTimeout(() => {
              e.shadowRoot.querySelector("i-search").clear();
            }, 500);
          }
        } else {
          const e = await this.normalBookmarkWrapper;
          if (e) {
            setTimeout(() => {
              e.shadowRoot.querySelector("i-search").clear();
            }, 500);
          }
        }
      }
      async handleTabOpen() {
        if (this.store.shortcutMode) {
          const e = await this.shorcutBookmarkWrapper;
          if (e) {
            e.shadowRoot.querySelector("i-search").focus();
          }
        } else {
          const e = await this.normalBookmarkWrapper;
          if (e) {
            e.shadowRoot.querySelector("i-search").focus();
          }
        }
      }
      afterShow() {
        this.handleTabOpen();
      }
      afterHide() {
        this.handleTabClose();
        this.store.hideCustomIconCard();
      }
      render() {
        const {
          setting: e,
          showRecent: t,
          shortcutMode: o,
          stashInfo: n
        } = this.store;
        return i.e`
      <i-side2-header
        class=${Object(r.a)({
          "setting-active": e
        })}
        .title="${Object(a.i18n)("bookmarks")}"
        .showSetting=${true}
        @on-setting="${this.handleSetting}"
      >
        <div
          slot="setting"
          style=${Object(s.a)({
          display: e ? "block" : "none",
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          "z-index": "8"
        })}
        >
          <div class="bookmark-setting-wrapper ${e ? "" : "hide"}" @click=${e => e.stopPropagation()}>
            <div>
              <span>${Object(a.i18n)("recently_add")}</span>
              <infinito-switch
                .checked=${t}
                @change="${this.toggleShowRecent}"
                @click="${e => e.stopPropagation()}"
              ></infinito-switch>
            </div>
            <div>
              <span>${Object(a.i18n)("shortcut_mode")}</span>
              <infinito-switch
                .checked=${o}
                @change="${this.toggleShortcutMode}"
                @click="${e => e.stopPropagation()}"
              ></infinito-switch>
            </div>
          </div>
        </div>
      </i-side2-header>
      <icons-custom
        @on-close="${() => {
          this.store.hideCustomIconCard();
        }}"
        .initName=${this.store.customIconTitle}
        .initTarget=${this.store.customIconUrl}
        .show="${this.store.customIconCardShow}"
      ></icons-custom>
      <div class="bookmarks-container">
        ${o ? i.e`<side-bookmark-shortcut></side-bookmark-shortcut>` : i.e`<side-bookmark-list-flow></side-bookmark-list-flow>`}
      </div>
      <infinito-modal style="--modal-padding: 30px;" ?open=${this.store.editModal} .onCancel=${this.handleEditCancel}>
        <div slot="body" style="width: 300px;">
          <side-bookmark-edit-field
            @on-selectedChange="${e => this.handleSelected(e.detail)}"
            @on-inputChange="${e => this.handleInputChange(e.detail)}"
            defaultValue=${this.store.defaultSelectedValue}
            .isEditTitle=${this.store.isEditTitle}
          >
          </side-bookmark-edit-field>
          <div class="btns">
            <infinito-button @click=${this.handleEditCancel}>${Object(a.i18n)("cancel")}</infinito-button>
            <infinito-button primary @click=${this.confirmEdit} class="ok">${Object(a.i18n)("confirm")}</infinito-button>
          </div>
        </div>
      </infinito-modal>
      <infinito-modal
        style="--modal-padding: 30px; --modal-top: 30vh;"
        ?open=${this.store.deleteModal}
        .closeable=${false}
        .onCancel=${this.handleDeleteCancel}
      >
        <div slot="body" class="delete-tips">
          ${n.children ? i.e`
                <p style="margin: 0; margin-bottom: 5px;">${Object(a.i18n)("ensure_delete_bookmark_folder")}</p>
                <p style="margin: 0; margin-bottom: 5px;">${Object(a.i18n)("delete_all_bookmarks")}</p>
              ` : i.e`<p style="margin: 0; margin-bottom: 5px;">${Object(a.i18n)("ensure_delete_bookmarks")}</p>`}
          <div class="btns">
            <infinito-button @click=${this.handleDeleteCancel}>${Object(a.i18n)("cancel")}</infinito-button>
            <infinito-button primary @click=${this.confirmDelete} class="ok">${Object(a.i18n)("confirm")}</infinito-button>
          </div>
        </div>
      </infinito-modal>
    `;
      }
      handleInputChange(e) {
        this.newTitle = e.value;
      }
      handleSelected(e) {
        this.newFolder = e.id;
        this.store.setDefaultValue(e.title);
      }
      async confirmEdit() {
        const {
          newTitle: e,
          newFolder: t
        } = this;
        if (!e && !t) {
          this.store.toggleEditModal();
          return;
        }
        const {
          id: o
        } = this.store.stashInfo;
        if (e) {
          await this.store.update(o, {
            title: e
          });
        }
        if (t) {
          await this.store.move(o, {
            parentId: t
          });
        }
        this.store.toggleEditModal();
        this.newFolder = "";
        this.newTitle = "";
      }
      async confirmDelete() {
        const {
          stashInfo: {
            id: e,
            children: t
          },
          shortcutMode: o
        } = this.store;
        if (o) {
          await this.store.remove(e);
        } else if (t) {
          await this.store.removeTree(e);
        } else {
          await this.store.remove(e);
        }
        this.store.toggleDeleteModal();
      }
    };
    ke.styles = [L, i.b`
      :host {
        display: block;
        height: 100%;
        background-color: #fff;
      }
      .btns {
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }
      infinito-button {
        width: 120px;
        height: 42px;
        line-height: 42px;
        font-weight: 500;
        border-radius: 4px;
        transition: all 300ms;
      }
      infinito-button:not(:last-child) {
        margin-right: 16px;
      }
      .delete-tips {
        width: 300px;
        margin-top: 10px;
        text-align: center;
      }
    `];
    me([Object(i.j)("side-bookmark-shortcut")], ke.prototype, "shorcutBookmarkWrapper", undefined);
    me([Object(i.j)("side-bookmark-list-flow")], ke.prototype, "normalBookmarkWrapper", undefined);
    me([Object(i.g)({
      type: String
    })], ke.prototype, "newTitle", undefined);
    me([Object(i.g)({
      type: String
    })], ke.prototype, "newFolder", undefined);
    ke = me([Object(i.c)("side-bookmarks")], ke);
  }
}]);