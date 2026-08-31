"use strict";

(globalThis.webpackChunkinfinity_hitab_client = globalThis.webpackChunkinfinity_hitab_client || []).push([[172], {
  1172: (t, e, s) => {
    s.r(e);
    s.d(e, {
      AI_TIP_TEXT: () => V,
      NEWCHAT_ID: () => B,
      PlanProduct: () => G,
      useChatGptStore: () => K
    });
    var a = s(3131);
    var i = s(5676);
    var n = s(4003);
    var o = s(8287);
    var r = s(1475);
    const c = n.kP;
    const d = async (t, e) => {
      try {
        const s = await o.hj.post(`${n.H}chat-pay/create-order`, {
          planId: t,
          payPlatform: e
        }, {
          _auth: true
        });
        if (s.code === 0 && s.data) {
          return [null, s.data];
        }
        if (s.code === 5006) {
          return [s.message || "创建订单失败!", null];
        }
        throw s;
      } catch (t) {
        return ["无法购买!"];
      }
    };
    var h = s(8793);
    var l = s(4522);
    var u = s(661);
    var g = s(967);
    var p = s(7179);
    var m = s(6506);
    var v = s(7712);
    var w = s(4272);
    var y = s(8885);
    var I = s(8514);
    var f = s(3889);
    var L = s(5981);
    var T = s(2098);
    var k = s(8699);
    var S = s(1507);
    var M = s(6356);
    var C = s(7268);
    var b = s(6925);
    var P = s(1118);
    var D = s(9112);
    var j = s(2076);
    var _ = s(3611);
    var A = s(9853);
    var R = s(3568);
    var x = s(756);
    var O = s(9371);
    var U;
    s(435);
    function H(t) {
      let e;
      let s;
      let a;
      let i = false;
      return function (n) {
        if (e === undefined) {
          e = n;
          s = 0;
          a = -1;
        } else {
          e = function (t, e) {
            const s = new Uint8Array(t.length + e.length);
            s.set(t);
            s.set(e, t.length);
            return s;
          }(e, n);
        }
        const o = e.length;
        let r = 0;
        while (s < o) {
          if (i) {
            if (e[s] === U.NewLine) {
              r = ++s;
            }
            i = false;
          }
          let n = -1;
          for (; s < o && n === -1; ++s) {
            switch (e[s]) {
              case U.Colon:
                if (a === -1) {
                  a = s - r;
                }
                break;
              case U.CarriageReturn:
                i = true;
              case U.NewLine:
                n = s;
            }
          }
          if (n === -1) {
            break;
          }
          t(e.subarray(r, n), a);
          r = s;
          a = -1;
        }
        if (r === o) {
          e = undefined;
        } else if (r !== 0) {
          e = e.subarray(r);
          s -= r;
        }
      };
    }
    (function (t) {
      t[t.NewLine = 10] = "NewLine";
      t[t.CarriageReturn = 13] = "CarriageReturn";
      t[t.Space = 32] = "Space";
      t[t.Colon = 58] = "Colon";
    })(U ||= {});
    var $ = s(1785);
    var E = s(2731);
    var q = s(9417);
    const N = (0, i.useUserStore)();
    const F = (0, q.n)();
    const B = "newChat";
    const V = i18n("nei4d063b");
    const Y = () => ({
      name: i18n("xin166a49"),
      id: B,
      messages: [],
      updateTime: u().format("YYYY-MM-DD HH:mm")
    });
    let G;
    (function (t) {
      t.STANDARD = "standard";
      t.PROFESSIONAL = "professional";
      t.PREMIUM = "premium";
    })(G ||= {});
    const Z = new class {
      constructor(t, e, s) {
        this.state = e;
        this.type = t;
        const a = `${t}-retrieve`;
        f.y.listen(t, t => {
          this.state = t;
          if (s != null) {
            s(t);
          }
        });
        f.y.listen(a, () => {
          f.y.post(t, this.state);
        });
        setTimeout(() => {
          f.y.post(a, null);
        }, 50);
      }
      getState() {
        return this.state;
      }
      setState(t) {
        this.state = t;
        f.y.post(this.type, t);
      }
    }("client:chatai-pending", {
      pending: false
    }, async function (t) {
      if (!t.pending) {
        Q();
      }
      if (t.closeRequestPage && (await (0, T.n)())) {
        K().releasePending();
        Z.setState({
          closeRequestPage: false
        });
      }
    });
    let W;
    const z = {
      supportSuffixText: [],
      supportSuffix: "",
      loadingText: "",
      limitSize: 10485760
    };
    const K = (0, a.Q_)(l.BU.chatgpt, {
      syncStorage: {
        watch: ["customLinks", "panelType", "linksList", "chatTips", "conversionList", "planList", "overLimit", "historyTipsReaded", "chatAssistantList", "removedList", "theme", "vipGroup", "closedExpiredTime", "chatModelList", "double11PlanList", "extraPackList", "extraTips", "containerRect", "coUserTypeData", "subPlanList"]
      },
      syncCloud: {
        watch: ["customLinks", "panelType", "historyTipsReaded", "theme", "closedExpiredTime"]
      },
      state: () => ({
        modalShow: false,
        linksList: [],
        selectedLink: null,
        panelType: "chatai",
        customLinks: [],
        conversionList: [Y()],
        activeConversionId: B,
        chatTips: i18n("shi4ceb74"),
        pending: false,
        chatLoading: false,
        modelLoading: true,
        pagination: {
          pageNo: 0,
          loading: false,
          finished: false
        },
        sponsorShow: false,
        controller: null,
        tempId: undefined,
        planList: [],
        planSelectedIndex: 1,
        highlihgtPlanProduct: "",
        vipTipsShow: false,
        vipTipsContent: "",
        overLimit: 0,
        vipGroup: undefined,
        historyTipsReaded: false,
        chatAssistantList: [],
        activeAssistantId: "",
        assistantListShow: false,
        removedList: [],
        theme: "",
        panelShowType: "",
        orderList: [],
        closedExpiredTime: 0,
        isRequestPage: false,
        paymentOrderData: null,
        localCurrentTime: 0,
        createOrderParams: {
          planId: "",
          payPlatform: ""
        },
        payOrderIds: new Set(),
        chatModelList: [],
        selectedModel: null,
        chatVipDetail: {
          name: "",
          banner: "",
          showBuyCount: false,
          warnToBuyCount: false,
          renewalConfirm: false,
          show3d5Count: false,
          renewalConfirmDesc: "",
          rest: {
            "3d5": -1,
            4: -1,
            image: -1,
            basicImage: -1
          }
        },
        vipDetailLoading: false,
        isFreeOrder: false,
        containerRect: {
          w: E.Pe.w,
          h: E.Pe.h
        },
        double11PlanList: [],
        double11PlanSelect: 0,
        fromTag: "",
        firstReq: true,
        extraPackList: [],
        extraTips: [],
        extPlans: [],
        extpackRest: {
          rest: {
            "3d5": 0,
            4: 0,
            image: 0,
            basicImage: 0
          }
        },
        extraPackOrders: [],
        showRenewalConfirm: false,
        mjTasks: new Set(),
        pendingMainTaskIds: new Set(),
        mjTaskReqCount: 0,
        scrollChatRef: null,
        preUploadLoading: false,
        uploadDocModalShow: false,
        uploadMetaData: z,
        uploadDocConversationId: "",
        uploadDocLoading: false,
        selectDocFile: null,
        coUserTypeData: {
          typename: "",
          chatDefaultLogo: "",
          chatPLogo: "",
          chatWLogo: "",
          label: "",
          id: "",
          updateTime: 0
        },
        historyFirstReq: true,
        networkOption: "chat",
        networkSwitch: false,
        netSearchArguments: null,
        toolCallId: "",
        toolName: "",
        netSearchLoading: false,
        subPlanList: [],
        subPlanPeriodIndex: 0,
        subSelectedProduct: "",
        subConfirmModalShow: false
      }),
      getters: {
        conversionDataList() {
          return this.conversionList.map(t => {
            return {
              ...t,
              name: t.messages[0]?.content || i18n("xin166a49"),
              updateTime: u(t.messages[0]?.updateTime).format("YYYY-MM-DD HH:mm")
            };
          });
        },
        activeConversionItemOrigin() {
          const t = this.conversionList.find(t => t.id === this.activeConversionId);
          return t || Y();
        },
        assistantListMapper() {
          const t = {};
          if (this.chatAssistantList) {
            this.chatAssistantList.forEach(e => {
              t[e.id] = e;
            });
          }
          return t;
        },
        activeConversionItem() {
          const t = this.activeConversionItemOrigin;
          let e = null;
          t.messages = t.messages.map(t => {
            if (t.role === "user") {
              if (e !== t.assistantId) {
                t.newAssistant = true;
              }
              e = t.assistantId;
              const s = this.assistantListMapper[e];
              if (e && t.newAssistant && s) {
                t.assistantLogo = s.logo;
                t.assistantTitle = s.title;
              } else if (!!t.newAssistant && (!e || !s)) {
                t.assistantLogo = undefined;
                t.assistantTitle = undefined;
              }
            } else if (t.role === "assistant") {
              t.assistantId = e;
              const s = this.assistantListMapper[e];
              if (e && s) {
                t.assistantLogo = s.logo;
              }
            }
            return t;
          });
          return t;
        },
        userOperationDisabled() {
          return !N.isLogin || this.pending || this.chatLoading;
        },
        activeAssistant() {
          var t;
          if ((t = this.chatAssistantList) === null || t === undefined) {
            return undefined;
          } else {
            return t.find(t => t.id === this.activeAssistantId);
          }
        },
        activeTheme() {
          if (F.chatBanned) {
            return "chat-default";
          }
          if ((0, i.useUserStore)().chatStatus.vip) {
            if (this.theme) {
              return this.theme;
            } else {
              return "chat-purple";
            }
          } else {
            return "chat-default";
          }
        },
        activeSelectModel() {
          if (this.selectedModel) {
            return this.selectedModel;
          }
          const t = this.chatModelList.find(t => t.default);
          return t || (this.chatModelList.length > 0 ? this.chatModelList[0] : {
            abbName: "",
            id: "",
            name: "",
            limitKey: "",
            planKey: ""
          });
        },
        operationDisabled() {
          let t = false;
          this.conversionDataList.forEach(e => {
            if (e.messages.find(t => t.loading || t.pending)) {
              t = true;
            }
          });
          return t;
        },
        currentPlanList() {
          return this.planList[this.planSelectedIndex]?.children || [];
        },
        currentSubPlanList() {
          return this.subPlanList[this.subPlanPeriodIndex]?.children || [];
        },
        double11CurrentPlan() {
          return this.double11PlanList[this.double11PlanSelect]?.children;
        },
        double11PricePanel() {
          return this.double11PlanList.map(t => `${t.title} ${t.discountStr}`);
        },
        canSelectDocument() {
          return this.chatVipDetail.rest[4] > 0;
        }
      },
      actions: {
        setModal(t) {
          this.modalShow = t;
        },
        setPanelType(t) {
          this.panelType = t;
        },
        setPanelShowType(t) {
          if (t === "chatai-subscribe") {
            this.subConfirmModalShow = false;
          }
          this.panelShowType = t;
          if (this.panelType === "chat-expense") {
            this.setPanelType("chatai");
          }
        },
        setSubConfirmModalShow(t) {
          this.subConfirmModalShow = t;
        },
        setContainerRect(t) {
          this.containerRect = t;
        },
        setSelectLink(t) {
          this.selectedLink = t;
        },
        setVipGroup(t) {
          this.vipGroup = t;
        },
        addCustomLink(t) {
          const e = [...this.customLinks];
          e.push(t);
          this.customLinks = e;
        },
        removeCustomLink(t) {
          const e = [...this.customLinks];
          e.splice(t, 1);
          this.customLinks = e;
        },
        setNetworkOption(t) {
          this.networkOption = t;
        },
        setNetworkSwitch(t) {
          this.networkSwitch = t;
        },
        resetNetoption() {
          this.networkOption = "once";
          this.networkSwitch = false;
        },
        resetNetOnce() {
          if (this.networkSwitch && this.networkOption === "once") {
            this.networkOption = "once";
            this.networkSwitch = false;
          }
        },
        getNetworkMode() {
          if (this.networkSwitch) {
            if (this.networkOption === "chat") {
              return "auto";
            } else if (this.networkOption === "once") {
              return "network";
            } else {
              return "close";
            }
          } else {
            return "close";
          }
        },
        removeOriginLink(t) {
          if (t) {
            this.removedList.unshift(t);
            if (this.removedList.length > 10) {
              this.removedList.length = 10;
            }
            this.removedList = [...this.removedList];
          }
        },
        setActiveConversionId(t) {
          this.activeConversionId = t;
          this.resetNetoption();
          (0, C.Y3)(() => {
            this.scrollChatContentToBottom();
          });
        },
        setHighlihgtPlanProduct(t) {
          if (t) {
            this.highlihgtPlanProduct = t;
          }
        },
        async deleteConversionItem(t) {
          const e = this.conversionList.find(e => e.id === t);
          if (!e) {
            return;
          }
          e.messages.forEach(e => {
            if (e.chatType === "image" && e.imageTaskId && e.imageId) {
              this.removeMjTask(t, e.imageTaskId, e.imageId);
            }
          });
          this.conversionList = this.conversionList.filter(e => e.id !== t);
          if (t === this.activeConversionId) {
            if (this.conversionDataList.length > 0) {
              this.activeConversionId = this.conversionDataList[0].id;
            } else {
              this.newChatHandler();
            }
          }
          if (!this.isServerId(t)) {
            return;
          }
          const [s, a] = await (async t => {
            try {
              const e = await o.hj.post(`${c}chat/delete`, {
                conversationId: t
              }, {
                _auth: true
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              }
              throw e;
            } catch (t) {
              return ["catch error"];
            }
          })(t);
        },
        newChatHandler() {
          const t = {
            name: i18n("xin166a49"),
            id: B,
            messages: [],
            updateTime: u().format("YYYY-MM-DD HH:mm")
          };
          this.conversionList = [t, ...this.conversionList];
          this.activeConversionId = B;
          this.activeAssistantId = "";
          this.setSelectModel();
        },
        async reqGptLinks() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${c}chat/list`);
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.linksList = e;
            this.selectedLink = e[0];
          }
        },
        resetPage() {
          this.conversionList = [Y()];
          this.activeConversionId = B;
          this.planList = [];
          this.planSelectedIndex = 1;
          this.overLimit = 0;
          this.vipGroup = undefined;
          this.pagination = {
            pageNo: 0,
            loading: false,
            finished: false
          };
          this.historyFirstReq = true;
        },
        async reqConversionList() {
          const t = this.historyFirstReq;
          if (Z.getState().pending) {
            this.activeConversionId = this.conversionList[0]?.id || B;
            return;
          }
          if (this.pagination.loading || this.pagination.finished) {
            return;
          }
          this.pagination = {
            ...this.pagination,
            loading: true
          };
          const [s, a] = await (async (t, e) => {
            const s = c;
            try {
              const a = await o.hj.get(`${s}chat/history`, {
                pageNo: t,
                pageSize: e
              }, {
                _auth: true,
                timeout: 5000
              });
              if (a.code === 0 && a.data) {
                return [null, a.data];
              }
              a.message;
              throw a;
            } catch (t) {
              return ["catch error"];
            }
          })(this.pagination.pageNo);
          if (!s && a) {
            this.historyFirstReq = false;
            if (t) {
              this.conversionList = [Y(), ...a.list];
            } else {
              this.conversionList = [...this.conversionList, ...a.list];
              if (this.activeConversionId === B) {
                this.activeConversionId = this.conversionList[0]?.id || B;
              }
            }
            if (a.totalPages - a.pageNo <= 1) {
              this.pagination = {
                ...this.pagination,
                finished: true,
                loading: false
              };
            } else {
              this.pagination = {
                pageNo: a.pageNo + 1,
                loading: false,
                finished: false
              };
            }
            a.list.forEach(t => {
              t.messages.forEach(e => {
                if (e.chatType === "image" && e.imageTaskId && e.imageId && [0, 1].includes(e.imageStatucCode)) {
                  this.appendMjTask(t.id, e.imageTaskId, e.imageId);
                }
              });
            });
          }
        },
        addUserMessage(t, e) {
          const s = [...this.conversionList];
          const a = s.find(t => t.id === e);
          if (a != null) {
            a.messages.push({
              role: "user",
              content: t,
              updateTime: u().valueOf(),
              assistantId: this.activeAssistantId || undefined
            });
          }
          this.conversionList = s;
        },
        onClickTryIt() {
          this.sendChatMessage(this.chatTips, B);
        },
        onClickTest() {},
        async reqChatTips() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${c}chat/recommended`);
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.chatTips = e;
          }
        },
        async reqAssistantList() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${c}chat/assistant-list`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.chatAssistantList = e;
          }
        },
        updatePendingMessage(t) {
          const e = [...this.conversionList];
          const s = e.find(e => e.id === t.conversionId);
          const a = s.messages.find(t => t.loading);
          if (a) {
            a.loading = false;
            a.pending = true;
          }
          this.pending = true;
          Z.setState({
            pending: true
          });
          const i = s.messages.find(t => t.pending);
          if (t.modelId) {
            i.modelId = t.modelId;
          }
          if (t.id) {
            this.tempId = t.id;
          }
          if (t.error) {
            i.error = true;
            i.content = t.content;
            i.pending = false;
            i.extra = t.showNewBtn;
            this.pending = false;
            this.conversionList = e;
            this.isRequestPage = false;
            Z.setState({
              pending: false
            });
            this.resetNetOnce();
            return;
          } else if (t.done) {
            i.pending = false;
            if (!this.isServerId(t.conversionId)) {
              if (this.tempId) {
                s.id = this.tempId;
                this.activeConversionId = this.tempId;
              }
            }
            this.resetNetOnce();
            i.content += t.content;
            i.searchLoading = false;
            this.conversionList = e;
            this.pending = false;
            this.isRequestPage = false;
            Z.setState({
              pending: false
            });
            return;
          } else {
            if (t.id) {
              this.tempId = t.id;
            }
            if (t.searchText) {
              i.searchLoading = t.searchLoading;
              i.searchText = t.searchText;
              i.searchUrl = t.searchUrl;
            }
            i.content += t.content;
            i.searchLoading = t.searchLoading;
            this.conversionList = e;
            return;
          }
        },
        createLoadingMsg(t, e = "chat", s) {
          const a = [...this.conversionList];
          const i = a.find(e => e.id === t);
          if (e === "chat") {
            i.messages.push({
              role: "assistant",
              content: "",
              loading: true
            });
          } else if (e === "image") {
            i.messages.push({
              role: "assistant",
              content: "",
              chatType: "image",
              processing: true,
              processingPercent: 0,
              imageTaskId: s || "",
              imageStatucCode: 0
            });
          } else if (e === "basicImage") {
            i.messages.push({
              role: "assistant",
              content: "",
              chatType: "basicImage",
              processing: true,
              imageId: s || ""
            });
          }
          this.conversionList = a;
          (0, C.Y3)(() => {
            this.scrollChatContentToBottom();
          });
        },
        scrollChatContentToBottom() {
          if (!this.scrollChatRef) {
            return;
          }
          const t = (this.scrollChatRef.scrollHeight || 0) - (this.scrollChatRef.clientHeight || 0);
          this.scrollChatRef.scrollTo({
            top: t,
            behavior: "auto"
          });
        },
        setNewLocalId() {
          const t = this.conversionList.find(t => t.id === B && t.messages.length > 0);
          if (t) {
            t.id = this.createLocalId();
            this.conversionList = [...this.conversionList];
          }
        },
        createLocalId: () => (0, r.kb)(B),
        isServerId: t => !!t && !t.startsWith(B),
        async sendChatMessage(t, e) {
          if (this.operationDisabled) {
            L.R.warn({
              message: i18n("qing31dd05")
            });
            return;
          }
          if (!this.conversionList.find(t => t.id === e)) {
            let t = this.conversionList[0]?.id;
            if (!t) {
              t = B;
              this.newChatHandler();
            }
            this.activeConversionId = t;
            e = t;
          }
          if (this.selectedModel?.chatType === "image") {
            this.createMjMainTask(e, t);
            return;
          }
          if (this.selectedModel?.chatType === "basicImage") {
            this.createBasicImageTask(e, t);
            return;
          }
          this.chatLoading = true;
          this.controller = null;
          this.addUserMessage(t, e);
          this.createLoadingMsg(e);
          const n = this.isServerId(e) ? e : undefined;
          const [r, d] = await (async t => {
            const e = c;
            try {
              return [null, await o.hj.post(`${e}chat-v2/conversation`, t, {
                _auth: true,
                _stream: true,
                fetchOpts: {
                  timeout: 30000
                }
              })];
            } catch (t) {
              return ["catch error"];
            }
          })({
            conversationId: n,
            prompt: t,
            assistantId: this.activeAssistantId,
            model: this.activeSelectModel.id,
            networkMode: this.getNetworkMode()
          });
          if (r || !d) {
            this.updatePendingMessage({
              conversionId: e,
              content: "网络错误，请重试",
              error: true,
              done: true
            });
            return;
          }
          this.isRequestPage = true;
          const [h, l, u] = d;
          if (u) {
            this.controller = u;
          }
          this.chatLoading = false;
          if (h) {
            this.parserEventSource(h, e);
          }
          if (l) {
            this.handleChatMessageData(l, e);
          }
        },
        readStreamWithTimeout: (t, e) => new Promise((s, a) => {
          const i = setTimeout(() => {
            a(new I.V("timeout"));
          }, e);
          t.read().then(t => {
            clearTimeout(i);
            s(t);
          }).catch(t => {
            clearTimeout(i);
            a(t);
          });
        }),
        parserEventSource(t, e) {
          (async function (t, e) {
            const s = t.getReader();
            let a;
            while (!(a = await s.read()).done) {
              e(a.value);
            }
          })(t, H(function (t, e, s) {
            let a = {
              data: "",
              event: "",
              id: "",
              retry: undefined
            };
            const i = new TextDecoder();
            return function (n, o) {
              if (n.length === 0) {
                if (s != null) {
                  s(a);
                }
                a = {
                  data: "",
                  event: "",
                  id: "",
                  retry: undefined
                };
              } else if (o > 0) {
                const s = i.decode(n.subarray(0, o));
                const r = o + (n[o + 1] === U.Space ? 2 : 1);
                const c = i.decode(n.subarray(r));
                switch (s) {
                  case "data":
                    a.data = a.data ? a.data + "\n" + c : c;
                    break;
                  case "event":
                    a.event = c;
                    break;
                  case "id":
                    t(a.id = c);
                    break;
                  case "retry":
                    const s = parseInt(c, 10);
                    if (!isNaN(s)) {
                      e(a.retry = s);
                    }
                }
              }
            };
          }(() => null, () => null, t => {
            this.handleEventSourceMessage(t, e);
          })));
        },
        handleEventSourceMessage(t, e) {
          const s = t.data;
          if (s) {
            try {
              const t = JSON.parse(s);
              this.handleChatMessageData(t, e);
            } catch (t) {
              this.updatePendingMessage({
                conversionId: e,
                content: i18n("xi4c236a"),
                error: true,
                done: true
              });
            }
          }
        },
        handleChatMessageData(t, e) {
          const {
            id: s,
            type: a,
            content: i,
            arguments: o,
            modelId: r,
            name: c,
            restCount: d,
            toolId: h
          } = t.data || {};
          switch (t.code) {
            case 201:
              this.updatePendingMessage({
                conversionId: e,
                modelId: r || "",
                content: "",
                id: s || ""
              });
              break;
            case 202:
              if (a === "chat") {
                this.updatePendingMessage({
                  conversionId: e,
                  content: i,
                  searchLoading: false
                });
              } else if (a === "tool_calls") {
                this.toolName = c || "";
                if (o) {
                  this.netSearchArguments = o;
                }
              }
              break;
            case 203:
              if (d) {
                this.updateRestCount(d);
              }
              if (a === "tool_calls") {
                if (h) {
                  this.toolCallId = h;
                  this.updatePendingMessage({
                    conversionId: e,
                    content: "",
                    searchLoading: true,
                    searchText: this.netSearchArguments?.query,
                    searchUrl: this.netSearchArguments?.searchUrl
                  });
                  this.handleChatCallToos(e);
                }
              } else {
                this.updatePendingMessage({
                  conversionId: e,
                  content: "",
                  done: true
                });
              }
              break;
            case 4002:
              if (n.EF) {
                (0, $.bc)({
                  type: $.o1.needLogin
                });
              } else {
                N.getProfile();
              }
              this.updatePendingMessage({
                conversionId: e,
                content: i18n("xi495bb4"),
                error: true,
                done: true
              });
              break;
            case 5003:
            case 1001:
            default:
              this.updatePendingMessage({
                conversionId: e,
                content: t.message || i18n("xi495bb4"),
                error: true,
                done: true
              });
              break;
            case 5004:
              this.updatePendingMessage({
                conversionId: e,
                content: t.message || i18n("xi495bb4"),
                error: true,
                done: true,
                showNewBtn: true
              });
          }
        },
        async handleChatCallToos(t) {
          if (this.toolCallId && this.toolName === "network-access") {
            this.chatToolGetWebSearchResult(t);
          }
        },
        async chatToolGetWebSearchResult(t) {
          if (this.netSearchArguments) {
            this.netSearchLoading = true;
            try {
              const [e, s] = await (async t => {
                const e = c;
                try {
                  return [null, await o.hj.post(`${e}chat-v2/conversation-websearch`, t, {
                    _auth: true,
                    _stream: true,
                    fetchOpts: {
                      timeout: 30000
                    }
                  })];
                } catch (t) {
                  return ["catch error"];
                }
              })({
                chatToolId: this.toolCallId
              });
              if (e || !s) {
                this.updatePendingMessage({
                  conversionId: t,
                  content: i18n("wang37ec65"),
                  error: true,
                  done: true
                });
                return;
              }
              const [a, i, n] = s;
              if (n) {
                this.controller = n;
              }
              this.netSearchLoading = false;
              if (a) {
                this.parserEventSource(a, t);
              }
              if (i) {
                this.handleChatMessageData(i, t);
              }
            } catch (t) {}
          }
        },
        deleteLastMessage(t, e) {
          const s = [...this.conversionList];
          const a = s.find(t => t.id === e);
          const i = (0, g.Z)(a.messages, e => e.role === t);
          a.messages.splice(i, 1);
          this.conversionList = s;
        },
        updateLatestUserMessage(t) {
          const e = [...this.conversionList];
          const s = e.find(e => e.id === t);
          const a = (0, g.Z)(s == null ? undefined : s.messages, t => t.role === "user");
          if (a > -1) {
            s.messages[a].assistantId = this.activeAssistantId || undefined;
          }
          this.conversionList = e;
        },
        async reGenerateLastAnwser(t) {
          if (this.operationDisabled) {
            L.R.warn({
              message: i18n("qing31dd05")
            });
            return;
          }
          this.controller = null;
          this.chatLoading = true;
          const e = [...this.conversionList].find(e => e.id === t);
          const s = e.messages.find(t => t.error);
          this.deleteLastMessage("assistant", t);
          if (s) {
            const s = (0, p.Z)(e.messages, t => t.role === "user").content;
            this.deleteLastMessage("user", t);
            this.sendChatMessage(s, t);
            return;
          }
          this.createLoadingMsg(t);
          this.updateLatestUserMessage(t);
          const [a, i] = await (async t => {
            const e = c;
            try {
              return [null, await o.hj.post(`${e}chat-v2/regenerate`, t, {
                _auth: true,
                _stream: true,
                fetchOpts: {
                  timeout: 30000
                }
              })];
            } catch (t) {
              return ["catch error"];
            }
          })({
            conversationId: t,
            assistantId: this.activeAssistantId,
            model: this.activeSelectModel.id,
            networkMode: this.getNetworkMode()
          });
          if (a || !i) {
            this.updatePendingMessage({
              conversionId: t,
              content: i18n("wang37ec65"),
              error: true,
              done: true
            });
            return;
          }
          this.isRequestPage = true;
          const [n, r, d] = i;
          if (d) {
            this.controller = d;
          }
          this.chatLoading = false;
          if (n) {
            this.parserEventSource(n, t);
          }
          if (r) {
            this.handleChatMessageData(r, t);
          }
        },
        setSponsorShow(t) {
          this.sponsorShow = t;
        },
        setVipTipsShow(t, e) {
          this.vipTipsShow = t;
          this.vipTipsContent = e;
        },
        setOverLimit(t) {
          this.overLimit = t;
        },
        abourtStream() {
          if (this.controller) {
            this.controller.abort();
            this.controller = null;
            this.updatePendingMessage({
              conversionId: this.activeConversionId,
              content: "",
              id: this.tempId,
              searchLoading: false,
              done: true
            });
          }
        },
        async getPlanList() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-pay/plan-v4`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.planList = e.list || [];
            if (this.firstReq) {
              this.planSelectedIndex = e.select;
              this.firstReq = false;
            }
          }
        },
        setPlanSelectedIndex(t) {
          this.planSelectedIndex = t;
        },
        setSubPlanPeriodIndex(t) {
          this.subPlanPeriodIndex = t;
        },
        async getPayCode(t, e) {
          const [s, a] = await d(t, e);
          if (!s) {
            return a;
          }
        },
        async getPayList() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-pay/pay-platform`, undefined, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t) {
            return e;
          }
        },
        async checkAllOrders() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.post(`${n.H}chat-pay/check-order`, undefined, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          const s = e.chatai || {};
          return t === null && (N.setChatStatus(s), s.vip);
        },
        async checkRecentOrderIds(t) {
          const [e, s] = await (async t => {
            try {
              const e = await o.hj.post(`${n.H}chat-pay/check-order-ids`, {
                ids: t
              }, {
                _auth: true
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              }
              throw e;
            } catch (t) {
              return ["catch error"];
            }
          })(t);
          if (e !== null) {
            return "";
          } else {
            return s.paidId;
          }
        },
        async getVipGroup() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-pay/vip-group`, undefined, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (t === null) {
            this.setVipGroup(e);
          }
        },
        readHistoryTips() {
          this.historyTipsReaded = true;
        },
        clearActiveAssistant() {
          this.activeAssistantId = "";
        },
        setActiveAssistant(t) {
          this.activeAssistantId = t;
          if (this.activeSelectModel.chatType !== "chat") {
            this.setSelectModel();
          }
        },
        setActiveAssistantToNext() {
          const t = (0, m.Z)(this.chatAssistantList, t => t.id === this.activeAssistantId);
          if (t > -1) {
            if (t === this.chatAssistantList.length - 1) {
              this.activeAssistantId = "";
            } else {
              this.activeAssistantId = this.chatAssistantList[t + 1].id;
            }
          } else {
            this.activeAssistantId = this.chatAssistantList[0].id;
          }
        },
        setActiveAssistantToPrev() {
          const t = (0, m.Z)(this.chatAssistantList, t => t.id === this.activeAssistantId);
          this.activeAssistantId = t > -1 ? t === 0 ? "" : this.chatAssistantList[t - 1].id : this.chatAssistantList[this.chatAssistantList.length - 1].id;
        },
        setAssistantListStatus(t) {
          var e;
          if (t && (e = this.chatAssistantList) !== null && e !== undefined && e.length) {
            this.assistantListShow = true;
          } else {
            this.assistantListShow = t;
          }
        },
        setStreamTimeout(t, e) {
          this.updatePendingMessage({
            conversionId: t,
            content: "",
            id: this.tempId,
            done: true,
            error: e
          });
        },
        setTheme(t) {
          this.theme = t;
        },
        async reqOrderList(t) {
          const [e, s] = await (async t => {
            try {
              const e = await o.hj.get(`${n.H}chat-pay/order-list`, {
                check: t
              }, {
                _auth: true
              });
              if (e.code === 0 && e.data) {
                return [null, {
                  list: e.data.list.map(t => {
                    t.paySuccessTimStr = (0, r.F8)(t.paySuccessTime);
                    return t;
                  })
                }];
              }
              throw e;
            } catch (t) {
              return ["catch error"];
            }
          })(t);
          if (e === null) {
            this.orderList = s.list;
          }
        },
        closeChatVipExpired(t) {
          this.closedExpiredTime = t;
        },
        unloadUpdatePending() {
          if (Z.getState().pending && this.isRequestPage) {
            Z.setState({
              pending: false,
              closeRequestPage: true
            });
          }
        },
        mutTabspendingOver() {
          if (this.activeConversionId === B) {
            if (!this.conversionList.find(t => t.id === B)) {
              this.activeConversionId = this.conversionList[0].id;
            }
          }
        },
        setCreateOrderParams(t) {
          this.createOrderParams = t;
        },
        async createPaymentOrder(t, e) {
          const [s, a] = await d(t, e);
          if (s) {
            L.R.fail({
              message: s
            });
            throw new Error(s);
          }
          this.paymentOrderData = a;
          this.isFreeOrder = this.paymentOrderData.newPlan.payAmount === 0;
          this.localCurrentTime = Date.now();
          this.payOrderIds.add(a.orderId);
          return a;
        },
        clearOrderIds() {
          this.payOrderIds.clear();
        },
        async getChatModels() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat/models`, undefined, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data.list];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          this.modelLoading = false;
          if (t || !e) {
            return;
          }
          const s = e.find(t => t.default);
          if (s) {
            this.selectedModel = s;
          }
          this.chatModelList = e;
        },
        setSelectModel(t) {
          var e;
          this.resetNetoption();
          if (t) {
            this.selectedModel = t;
            if ((e = t.chatType) !== null && e !== undefined && e.toLowerCase().includes("image")) {
              this.activeAssistantId = "";
            }
            return;
          }
          this.selectedModel = null;
        },
        async getUserVipDetail() {
          this.vipDetailLoading = true;
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-pay/order-detail`, undefined, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.vipDetailLoading = false;
            this.chatVipDetail = e;
          }
        },
        async confirmChangePlanForFree() {
          if (!this.paymentOrderData) {
            return;
          }
          const [t, e] = await (async t => {
            try {
              const e = await o.hj.post(`${n.H}chat-pay/confirm-modify-plan`, {
                orderId: t
              }, {
                _auth: true
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              }
              throw e;
            } catch (t) {
              return ["catch error"];
            }
          })(this.paymentOrderData.orderId);
        },
        updateRestCount(t) {
          this.chatVipDetail = {
            ...this.chatVipDetail,
            rest: {
              ...this.chatVipDetail.rest,
              ...t
            }
          };
        },
        releasePending() {
          const t = [...this.conversionList];
          let e = false;
          t.forEach(t => {
            const s = t.messages.find(t => t.loading || t.pending);
            if (s) {
              e = true;
              s.loading = false;
              s.pending = false;
            }
          });
          if (e) {
            this.conversionList = t;
          }
        },
        async reqDouble11PlanList() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-pay/plan-double11`, {});
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.double11PlanList = e.list;
            this.double11PlanSelect = e.select;
          }
        },
        setDouble11PlanSelect(t) {
          this.double11PlanSelect = t;
        },
        setFromTag(t) {
          this.fromTag = t;
        },
        async reqExtraPack() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-count/package-list`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.extraPackList = e.list;
            this.extPlans = e.list.map(t => ({
              ...t,
              planId: t.id,
              count: 0
            }));
          }
        },
        changeExtPlans(t, e) {
          const s = this.extPlans.findIndex(e => e.planId === t);
          if (s > -1) {
            this.extPlans[s].count = e;
          }
        },
        async createExtPackOrder(t) {
          const [e, s] = await (async t => {
            try {
              const e = await o.hj.post(`${n.H}chat-count/create-order`, t, {
                _auth: true,
                _single: true
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              }
              throw e;
            } catch (t) {
              return ["catch error"];
            }
          })({
            plans: t
          });
          if (!e && s) {
            this.localCurrentTime = Date.now();
            return s;
          }
        },
        async checkExtPackOrder(t) {
          const [e, s] = await (async t => {
            try {
              const e = await o.hj.post(`${n.H}chat-count/check-order`, {
                orderId: t
              }, {
                _auth: true,
                _single: true
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              }
              throw e;
            } catch (t) {
              return ["catch error"];
            }
          })(t);
          if (e) {
            throw new Error(e);
          }
          if (s != null && s.payStatus) {
            return s;
          }
          throw new Error("not paid");
        },
        resetExtPlans() {
          const t = this.extPlans.map(t => ({
            ...t,
            count: 0
          }));
          this.extPlans = t;
        },
        async getExtraPackRemain() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-count/rest-count`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.extpackRest = e;
          }
        },
        async reqExtraPackOrder() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-count/order-list`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              }
              throw t;
            } catch (t) {
              return ["catch error"];
            }
          })();
          if (!t && e) {
            this.extraPackOrders = e.list;
          }
        },
        setShowRenewalConfirm(t) {
          this.showRenewalConfirm = t;
        },
        async updateTempMjMessage(t, e, s) {
          const a = [...this.conversionList];
          const i = a.find(e => e.id === t).messages.find(t => t.imageTaskId === e);
          if (i) {
            if (s.error) {
              i.error = true;
              i.content = s.content;
              i.imageError = !!s.imageError;
            }
            if (s.imageTaskId && !s.error) {
              i.imageTaskId = s.imageTaskId;
              i.imageId = s.imageId;
            }
          }
          this.conversionList = a;
        },
        sendMjMessage(t, e) {
          const s = Date.now() + "";
          this.addUserMessage(e, t);
          this.createLoadingMsg(t, "image", s);
          return s;
        },
        appendMjTask(t, e, s) {
          this.mjTasks.add(`${t},${e},${s}`);
          this.mjTaskReqCount = 0;
          if (!W || !!W.closed) {
            this.getTaskQueueInfo();
          }
        },
        removeMjTask(t, e, s) {
          this.mjTasks.delete(`${t},${e},${s}`);
        },
        clearMjTasks() {
          this.mjTasks.clear();
        },
        async createMjMainTask(t, e) {
          const s = this.sendMjMessage(t, e);
          const a = this.isServerId(t) ? t : undefined;
          try {
            const [i, r] = await (async t => {
              try {
                const e = await o.hj.get(`${n.H}chat-image/mj-imagine`, t, {
                  _auth: true
                });
                if (e.code === 0 && e.data) {
                  return [null, e.data];
                } else {
                  return [e.code, e];
                }
              } catch (t) {
                throw t;
              }
            })({
              prompt: e,
              conversationId: a
            });
            if (i || !r) {
              this.updateTempMjMessage(t, s, {
                error: true,
                content: r.message || i18n("chuang4ab364"),
                extra: r.code === 5008
              });
              return;
            }
            if (r.conversationId && t !== r.conversationId) {
              const e = [...this.conversionList];
              e.find(e => e.id === t).id = r.conversationId;
              this.conversionList = e;
              if (this.activeConversionId === t) {
                this.activeConversionId = r.conversationId;
              }
            }
            this.updateTempMjMessage(r.conversationId, s, {
              imageId: r.imageId,
              imageTaskId: r.task_id,
              imageTaskType: "MainTask",
              imageStatucCode: 0
            });
            this.appendMjTask(r.conversationId, r.task_id, r.imageId);
            this.updateRestCount({
              image: r.restImageCount
            });
            return r;
          } catch (e) {
            this.updateTempMjMessage(t, s, {
              error: true,
              imageError: true
            });
            return;
          }
        },
        async createMjSubTask(t, e) {
          if (this.pendingMainTaskIds.has(t)) {
            L.R.warn({
              message: i18n("qing332e8a")
            });
            return;
          }
          const s = this.activeConversionId;
          const a = this.sendMjMessage(s, e);
          this.pendingMainTaskIds.add(t);
          try {
            const [i, r] = await (async t => {
              try {
                const e = await o.hj.get(`${n.H}chat-image/mj-update-task`, t, {
                  _auth: true
                });
                if (e.code === 0 && e.data) {
                  return [null, e.data];
                } else {
                  return [e.code, e];
                }
              } catch (t) {
                throw t;
              }
            })({
              task_id: t,
              action: e,
              conversationId: s
            });
            if (i || !r) {
              this.updateTempMjMessage(s, a, {
                error: true,
                content: r.message || i18n("chuang4ab364"),
                extra: r.code === 5008
              });
              return;
            } else {
              this.updateTempMjMessage(r.conversationId, a, {
                imageTaskId: r.task_id,
                imageId: r.imageId,
                imageStatucCode: 0
              });
              this.appendMjTask(r.conversationId, r.task_id, r.imageId);
              this.updateRestCount({
                image: r.restImageCount
              });
              return r;
            }
          } catch (t) {
            this.updateTempMjMessage(s, a, {
              error: true,
              imageError: true
            });
            return;
          }
        },
        async queryTasks() {
          const t = [...this.mjTasks].slice(-3).map(t => t.split(","));
          var e;
          var s;
          if (t.length === 0) {
            if ((e = W) !== null && e !== undefined) {
              e.unsubscribe();
            }
            return;
          }
          if (this.mjTaskReqCount >= 100) {
            if ((s = W) !== null && s !== undefined) {
              s.unsubscribe();
            }
            return;
          }
          const a = t.map(t => {
            let [e, s, a] = t;
            return this.queryTaskAndUpdate(e, s, a);
          });
          const i = await Promise.all(a);
          this.mjTaskReqCount = this.mjTaskReqCount + 1;
          const n = (0, v.Z)(i);
          if (n.length === 0) {
            throw new Error(t.length + "");
          }
          const o = [...this.conversionList];
          n.forEach(t => {
            if (t.parentTaskId) {
              this.pendingMainTaskIds.delete(t.parentTaskId);
            }
            if (t.status_code === 2 || t.status_code === 3) {
              this.removeMjTask(t.conversationId, t.taskId, t.imageId);
            }
            const e = o.find(e => e.id === t.conversationId);
            if (e) {
              const s = e.messages.find(e => e.imageTaskId === t.taskId && e.imageId === t.imageId);
              if (!s) {
                return;
              }
              s.imageStatus = t.status;
              s.imageStatucCode = t.status_code;
              s.imageUrl = t.image_url;
              s.rawImageUrl = t.raw_image_url;
              s.imageTaskType = t.taskType;
            }
          });
          this.conversionList = o;
          if (t.length > 0) {
            throw new Error(t.length + "");
          }
        },
        async getTaskQueueInfo() {
          if (!W || W.closed) {
            var t;
            if (this.mjTasks.size === 0) {
              this.mjTaskReqCount = 0;
              if ((t = W) !== null && t !== undefined) {
                t.unsubscribe();
              }
              return;
            }
            W = (0, k.H)(3000).pipe((0, S.z)(() => this.queryTasks()), (0, M.X)({
              delay: () => (0, k.H)(6000)
            })).subscribe(() => {
              var t;
              if ((t = W) !== null && t !== undefined) {
                t.unsubscribe();
              }
            });
          }
        },
        async queryTaskAndUpdate(t, e, s) {
          const [a, i] = await (async t => {
            try {
              const e = await o.hj.get(`${n.H}chat-image/mj-task`, t, {
                _auth: true
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              }
              throw e;
            } catch (t) {
              return ["catch error"];
            }
          })({
            task_id: e,
            conversationId: t,
            imageId: s
          });
          if (a || !i) {
            return null;
          } else {
            return {
              status: i.status,
              status_code: i.status_code,
              image_url: i.image_url,
              raw_image_url: i.raw_image_url,
              restChange: i.restChange,
              taskType: i.taskType,
              parentTaskId: i.parentTaskId,
              conversationId: t,
              taskId: e,
              imageId: s
            };
          }
        },
        setUploadModal(t) {
          this.uploadDocModalShow = t;
        },
        async openUploadDialog() {
          if (!this.preUploadLoading) {
            this.preUploadLoading = true;
            try {
              const [t, e] = await (async () => {
                try {
                  const t = await o.hj.get(`${n.H}chat-document/upload-info`, {}, {
                    _auth: true,
                    _single: true
                  });
                  if (t.code === 0 && t.data) {
                    return [null, t.data];
                  } else {
                    return [t.message];
                  }
                } catch (t) {
                  throw t;
                }
              })();
              this.preUploadLoading = false;
              if (t || !e) {
                L.R.fail({
                  message: t || i18n("qing39481c")
                });
                return;
              }
              this.selectDocFile = null;
              this.uploadMetaData = e;
              this.uploadDocConversationId = "";
              this.uploadDocModalShow = true;
              this.resetNetoption();
            } catch (t) {
              this.preUploadLoading = false;
              L.R.fail({
                message: i18n("qing338d8b")
              });
            }
          }
        },
        setSelectDocFile(t) {
          this.selectDocFile = t;
        },
        async getAccessibleUploadHost(t) {
          const e = "chatDocUploadUrl";
          const s = localStorage.getItem(e);
          const a = localStorage.getItem("chatDocUploadUrl_time");
          if (s && a) {
            if (Date.now() - Number(a) < 600000) {
              return s;
            }
          }
          const i = await (n = e, o = t, new Promise(t => {
            if (typeof o == "string") {
              o = [o];
            }
            if (Array.isArray(o)) {
              (0, P.D)(o).pipe((0, D.h)(t => typeof t == "string" && t.startsWith("http")), (0, S.z)(t => (0, b.U)(t).pipe((0, j.V)(5000), (0, _.w)(e => (0, A.of)({
                url: t,
                connected: true,
                statusText: e.statusText
              })), (0, R.K)(e => (0, A.of)({
                url: t,
                connected: false,
                err: e
              })))), (0, D.h)(t => {
                let {
                  connected: e
                } = t;
                return !!e;
              }), (0, x.q)(1), (0, O.d)({
                url: ""
              })).subscribe({
                next(e) {
                  let {
                    url: s
                  } = e;
                  try {
                    if (s) {
                      localStorage.setItem(n, s);
                      localStorage.setItem(`${n}_time`, String(Date.now()));
                    }
                    t(s);
                  } catch (e) {
                    t("");
                  }
                },
                error(e) {
                  t("");
                }
              });
            } else {
              t("");
            }
          }));
          var n;
          var o;
          return i || "";
        },
        async startUploadDocFile() {
          if (!this.selectDocFile) {
            return;
          }
          this.uploadDocLoading = true;
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.get(`${n.H}chat-document/upload-url`, {}, {
                _auth: true,
                _single: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              } else {
                return [t.message];
              }
            } catch (t) {
              throw t;
            }
          })();
          if (t || !e) {
            L.R.fail({
              message: t || i18n("wang37ec65")
            });
            return;
          }
          if (!e.id) {
            L.R.fail({
              message: i18n("wang37ec65")
            });
            this.uploadDocLoading = false;
            return;
          }
          const s = e.url;
          const a = (0, w.Z)(s);
          const i = await this.getAccessibleUploadHost(a);
          if (!i) {
            this.uploadDocLoading = false;
            L.R.fail({
              message: i18n("wang37ec65")
            });
            return;
          }
          this.uploadDocConversationId = this.activeConversionId;
          try {
            const t = await this.uploadChatDocFile(i, {
              id: e.id,
              headers: e.headers
            });
            await this.uploadDocSuccess(t);
            this.activeAssistantId = "";
            if (this.selectedModel?.chatType === "image" || this.selectedModel?.chatType === "basicImage") {
              this.setSelectModel();
            }
          } catch (t) {
            L.R.fail({
              message: typeof t == "string" ? t : i18n("shang48e2f9")
            });
          }
          this.uploadDocModalShow = false;
          this.uploadDocLoading = false;
        },
        async uploadChatDocFile(t, e) {
          const [a, i] = await (async (t, e, s) => {
            const a = new FormData();
            a.append("file", e);
            try {
              const e = await o.hj.post(t, a, {
                _auth: true,
                timeout: 60000,
                fetchOpts: {
                  headers: s
                }
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              } else if (e.code >= 3000 && e.code <= 4000) {
                return [e.message];
              } else {
                return ["上传失败，请重试！"];
              }
            } catch (t) {
              throw t;
            }
          })(t, this.selectDocFile, e.headers);
          if (a || !i) {
            throw a;
          }
          return {
            docId: i.docId,
            uploadId: e.id,
            filename: this.selectDocFile?.name || i.key,
            conversationId: this.activeConversionId
          };
        },
        async uploadDocSuccess(t) {
          const [e, s] = await (async t => {
            try {
              const e = await o.hj.post(`${n.H}chat-document/history`, t, {
                _auth: true,
                timeout: 60000
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              } else {
                return [e.message];
              }
            } catch (t) {
              throw t;
            }
          })({
            ...t,
            conversationId: this.isServerId(this.activeConversionId) ? this.activeConversionId : undefined
          });
          if (e || !s) {
            throw e;
          }
          this.updateRestCount({
            4: s.rest4
          });
          const a = [...this.conversionList];
          const i = a.find(e => e.id === t.conversationId);
          if (i) {
            if (!this.isServerId(t.conversationId)) {
              i.id = s.conversationId;
              this.activeConversionId = s.conversationId;
            }
            i.messages.push({
              role: "user",
              content: i18n("asymbol2f498"),
              filename: t.filename,
              chatType: "document"
            });
          }
          this.conversionList = a;
        },
        async getCoUserDetail() {
          if (!N.user.userType) {
            return;
          }
          if (Date.now() - this.coUserTypeData.updateTime < 3600000) {
            return;
          }
          const [t, e] = await (0, h.sG)();
          if (!t && e) {
            this.coUserTypeData = {
              ...e,
              updateTime: Date.now()
            };
          }
        },
        sendBasicImageMessage(t, e) {
          const s = Date.now() + "";
          this.addUserMessage(e, t);
          this.createLoadingMsg(t, "basicImage", s);
          return s;
        },
        async updateTempBasicImageMessage(t, e, s) {
          const a = [...this.conversionList];
          const i = a.find(e => e.id === t).messages.find(t => t.imageId === e);
          if (i) {
            if (s.error) {
              i.error = true;
              i.content = s.content;
              i.imageError = !!s.imageError;
            } else {
              i.imageId = s.imageId;
              i.imageUrl = s.imageUrl;
              i.forbidden = s.forbidden;
            }
            i.processing = false;
          }
          this.conversionList = a;
        },
        async createBasicImageTask(t, e) {
          const s = this.sendBasicImageMessage(t, e);
          const a = this.isServerId(t) ? t : undefined;
          const [i, r] = await (async t => {
            try {
              const e = await o.hj.post(`${n.H}chat-image/basic-image`, t, {
                _auth: true
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              } else {
                return [e.code, e];
              }
            } catch (t) {
              throw t;
            }
          })({
            prompt: e,
            conversationId: a
          });
          if (!i && r) {
            if (r.conversationId && t !== r.conversationId) {
              const e = [...this.conversionList];
              e.find(e => e.id === t).id = r.conversationId;
              this.conversionList = e;
              if (this.activeConversionId === t) {
                this.activeConversionId = r.conversationId;
              }
            }
            this.updateTempBasicImageMessage(r.conversationId, s, {
              imageId: r.imageId,
              imageUrl: r.imageUrl,
              forbidden: r.forbidden
            });
          } else {
            this.updateTempBasicImageMessage(t, s, {
              error: true,
              content: r.message || i18n("chuang4ab364"),
              extra: r.code === 5008
            });
          }
        },
        async getInfinityAiSubPlan() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.post(`${n.H}chat-sub/plan`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              } else {
                return [t.message];
              }
            } catch (t) {
              throw t;
            }
          })();
          if (!t && e) {
            this.subPlanList = e.list;
            this.subPlanPeriodIndex ||= e.select;
            this.highlihgtPlanProduct ||= e.selectProduct;
          }
        },
        async createInfinityAiSubOrder(t) {
          const [e, s] = await (async t => {
            try {
              const e = await o.hj.post(`${n.H}chat-sub/checkout`, t, {
                _auth: true
              });
              if (e.code === 0 && e.data) {
                return [null, e.data];
              } else {
                return [e.message];
              }
            } catch (t) {
              throw t;
            }
          })({
            planId: t
          });
          if (e || !s) {
            L.R.fail({
              message: e || i18n("wang37ec65")
            });
            return null;
          } else {
            return s;
          }
        },
        async checkInfinityAiSubOrder() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.post(`${n.H}chat-sub/check`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              } else {
                return [t.message];
              }
            } catch (t) {
              throw t;
            }
          })();
          return !t && e;
        },
        async cancelInfinityAiSub() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.post(`${n.H}chat-sub/cancel`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              } else {
                return [t.message];
              }
            } catch (t) {
              throw t;
            }
          })();
          if (t || !e) {
            L.R.warn({
              message: t || "operation failed"
            });
            return false;
          } else {
            await this.getUserVipDetail();
            return e;
          }
        },
        async resumeInfinityAiSub() {
          const [t, e] = await (async () => {
            try {
              const t = await o.hj.post(`${n.H}chat-sub/resume`, {}, {
                _auth: true
              });
              if (t.code === 0 && t.data) {
                return [null, t.data];
              } else {
                return [t.message];
              }
            } catch (t) {
              throw t;
            }
          })();
          if (t || !e) {
            L.R.warn({
              message: t || "operation failed"
            });
            return false;
          } else {
            await this.getUserVipDetail();
            return e;
          }
        }
      }
    });
    window.addEventListener("beforeunload", () => {
      K().unloadUpdatePending();
      return true;
    });
    const Q = (0, y.Z)(K().mutTabspendingOver, 100);
  }
}]);