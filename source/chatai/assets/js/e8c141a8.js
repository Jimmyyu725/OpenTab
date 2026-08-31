"use strict";

(globalThis.webpackChunkinfinity_hitab_client = globalThis.webpackChunkinfinity_hitab_client || []).push([[533], {
  3214: (e, t, n) => {
    n.r(t);
    n.d(t, {
      mountHome: () => m,
      widgetApp: () => f
    });
    var a = n(9445);
    var i = n(8398);
    var o = n(7268);
    var l = n(137);
    var s = n(5676);
    var c = n(8514);
    var r = n(1172);
    var p = n(661);
    var d = n.n(p);
    var u = n(3844);
    const g = (0, o.aZ)({
      __name: "widget-chatgpt-home",
      props: {
        size: null,
        id: null
      },
      setup(e) {
        const t = e;
        const n = (0, s.useUserStore)();
        const i = (0, r.useChatGptStore)();
        (0, o.YP)(() => i.activeTheme, e => {
          (0, c.o)(e);
        });
        (0, o.YP)(() => n.isLogin, e => {
          if (e) {
            i.reqConversionList();
            i.reqAssistantList();
          } else {
            i.resetPage();
          }
        });
        (0, o.bv)(() => {
          p();
          (0, c.o)(i.activeTheme);
        });
        const p = () => {
          if (d()(i.overLimit).add(1, "day").get("date") <= d()().get("date")) {
            i.setOverLimit(0);
          }
        };
        u.i.subscribe("EVERY_DAY", p);
        const {
          HomeComp: g
        } = (0, l.useChatGptComponent)(t);
        const {
          clickWidget: h
        } = (0, l.useModal)();
        return (e, t) => {
          (0, o.wg)();
          return (0, o.iD)("section", {
            class: "contents cursor-pointer",
            onClick: t[0] ||= function () {
              return (0, a.SU)(h) && (0, a.SU)(h)(...arguments);
            }
          }, [((0, o.wg)(), (0, o.j4)((0, o.LL)((0, a.SU)(g))))]);
        };
      }
    });
    var h = n(6755);
    var v = n(5008);
    const f = (0, a.iH)(null);
    const m = (e, t) => {
      const n = (0, i.createApp)(g, t);
      (0, v.f)(n);
      f.value = n;
      n.use(h.M);
      n.mount(e);
      return f.value;
    };
  },
  137: (e, t, n) => {
    n.r(t);
    n.d(t, {
      useChatGptComponent: () => I,
      useModal: () => M,
      useModalData: () => A
    });
    var a = n(7268);
    var i = n(4209);
    var o = n(9445);
    var l = n(5676);
    const s = {
      class: "insert-shadow relative flex h-full rounded-[var(--icon-home-radius)] bg-[#303B75] chat-p:bg-[#0A0920] chat-w:bg-[#FFFFFF]"
    };
    const c = {
      class: "relative z-[1] flex h-full w-full items-center pl-[20px] icon-m:pl-[16px] icon-s:pl-[12px]"
    };
    const r = (e => {
      (0, a.dD)("data-v-76aade3c");
      e = e();
      (0, a.Cn)();
      return e;
    })(() => (0, a._)("div", {
      draggable: "false",
      class: "h-[48px] w-[48px] bg-[url(@widget/widget-chatgpt/img/ai-logo-green.png)] bg-contain bg-center bg-no-repeat icon-m:h-[40px] icon-m:w-[40px] icon-s:h-[36px] icon-s:w-[36px] chat-p:bg-[url(@widget/widget-chatgpt/img/ai-logo-purple.png)]",
      alt: ""
    }, null, -1));
    const p = {
      class: "flex grow flex-col pl-[16px] icon-m:pl-[12px] icon-s:pl-[8px]"
    };
    const d = {
      class: "mt-[4px] font-ali-55 text-[14px] leading-[20px] text-[#AAAFCC] icon-m:text-[14px] icon-m:leading-[20px] icon-s:text-[12px] icon-s:leading-[17px] chat-w:text-[#3A3A3C]"
    };
    const u = (0, a.aZ)({
      __name: "chatgpt-small",
      setup(e) {
        const t = (0, l.useUserStore)();
        return (e, n) => {
          (0, a.wg)();
          return (0, a.iD)("section", s, [(0, a._)("div", c, [r, (0, a._)("div", p, [(0, a._)("div", {
            draggable: "false",
            class: (0, i.normalizeClass)([[(0, o.SU)(t).chatStatus.vip ? "h-[14px] bg-[url(@widget/widget-chatgpt/img/ai-title-pro-fff.png)] icon-m:h-[14px] icon-s:h-[12px]" : "h-[16px] bg-[url(@widget/widget-chatgpt/img/ai-title-fff.png)] icon-m:h-[16px] icon-s:h-[12px]"], "w-full bg-contain bg-left bg-no-repeat chat-w:bg-[url(@widget/widget-chatgpt/img/ai-title-pro-000.png)]"]),
            alt: ""
          }, null, 2), (0, a._)("span", d, (0, i.toDisplayString)(e.i18n("jian35b5b0")), 1)])])]);
        };
      }
    });
    var g = n(6911);
    const h = (0, g.Z)(u, [["__scopeId", "data-v-76aade3c"]]);
    const v = e => {
      (0, a.dD)("data-v-233ed0cc");
      e = e();
      (0, a.Cn)();
      return e;
    };
    const f = {
      class: "insert-shadow relative flex h-full overflow-hidden rounded-[var(--icon-home-radius)] bg-[#303B75] bg-[url(https://static.wetab.link/hitab/chatgpt-widget/chatgptbg2xpng.png)] bg-cover bg-no-repeat chat-p:bg-[url(@widget/widget-chatgpt/img/chatgptbg-pro.png)] chat-w:bg-[url(@widget/widget-chatgpt/img/w-chat-home-bg-m.png)]"
    };
    const m = {
      class: "full flex w-full flex-col items-center pt-[26px] icon-m:pt-[22px] icon-s:pt-[18px]"
    };
    const w = v(() => (0, a._)("div", {
      draggable: "false",
      class: "h-[88px] w-[88px] bg-[url(@widget/widget-chatgpt/img/ai-logo-green.png)] bg-contain bg-center bg-no-repeat icon-m:h-[76px] icon-m:w-[76px] icon-s:h-[64px] icon-s:w-[64px] chat-p:bg-[url(@widget/widget-chatgpt/img/ai-logo-purple.png)]",
      alt: ""
    }, null, -1));
    const x = {
      class: "flex w-full flex-col items-center pt-[26px] icon-m:pt-[22px] icon-s:pt-[18px]"
    };
    const b = {
      class: "my-[8px] font-ali-55 text-[14px] leading-[16px] text-[#AAAFCC] icon-m:text-[12px] icon-s:text-[12px] chat-p:text-[#A98FFF] chat-w:text-[#3A3A3C]"
    };
    const C = v(() => (0, a._)("div", {
      class: "flex items-center text-[#2CCB92] chat-p:text-[#FFFFFF] chat-w:text-[#2CCB92]"
    }, [(0, a._)("span", {
      class: "font-ali-65 text-[16px] leading-[22px] icon-m:leading-[16px] icon-s:leading-[16px]"
    }, " Start "), (0, a._)("i", {
      class: "iconfont icon-icon_right text-[14px]"
    })], -1));
    const L = (0, a.aZ)({
      __name: "chatgpt-medium",
      setup(e) {
        const t = (0, l.useUserStore)();
        return (e, n) => {
          (0, a.wg)();
          return (0, a.iD)("section", f, [(0, a._)("div", m, [w, (0, a._)("div", x, [(0, a._)("div", {
            draggable: "false",
            class: (0, i.normalizeClass)([[(0, o.SU)(t).chatStatus.vip ? "h-[16px] bg-[url(@widget/widget-chatgpt/img/ai-title-pro-fff.png)]" : "h-[22px] bg-[url(@widget/widget-chatgpt/img/ai-title-fff.png)] icon-m:h-[16px] icon-s:h-[14px]"], "w-full bg-contain bg-center bg-no-repeat chat-w:bg-[url(@widget/widget-chatgpt/img/ai-title-pro-000.png)]"]),
            alt: ""
          }, null, 2), (0, a._)("span", b, (0, i.toDisplayString)(e.i18n("jian35b5b0")), 1), C])])]);
        };
      }
    });
    const S = (0, g.Z)(L, [["__scopeId", "data-v-233ed0cc"]]);
    var y = n(3214);
    var k = n(1172);
    var T = n(3131);
    var D = n(5981);
    var P = n(1475);
    var F = n(4003);
    var _ = n(1785);
    const I = e => {
      const t = {
        s: h,
        m: S
      };
      return ((e, t, n) => {
        const i = (0, o.iH)(e);
        t.onChangeState = e => {
          i.value = {
            ...e
          };
        };
        const l = (0, a.Fl)(() => n ? n[i.value.size] : null);
        return {
          propsState: i,
          HomeComp: l
        };
      })(e, y.widgetApp.value, t);
    };
    const M = () => {
      const e = (0, k.useChatGptStore)();
      return {
        clickWidget: () => {
          if (!e.uploadDocLoading) {
            e.setUploadModal(false);
          }
          e.setModal(true);
          e.setSelectModel();
        },
        onCloseModal: () => {
          e.setModal(false);
          setTimeout(() => {
            if (e.panelShowType) {
              e.setPanelShowType("");
            }
            if (e.panelType === "chat-expense") {
              e.setPanelType("chatai");
            }
          }, 0);
          if (F.EF) {
            (0, _.bc)({
              type: _.o1.closeAiModal
            });
          }
        },
        show: (0, T.Jk)(e).modalShow
      };
    };
    const A = () => {
      const e = (0, k.useChatGptStore)();
      const t = (0, T.Jk)(e);
      const n = (0, o.iH)(false);
      const i = (0, o.iH)();
      function l(t) {
        e.setPanelShowType(t);
      }
      (0, a.bv)(() => {
        var n;
        if ((n = i.value) !== null && n !== undefined) {
          n.addEventListener("scroll", () => {
            (function () {
              if (!i.value) {
                return;
              }
              if (t.pagination.value.finished || t.pagination.value.loading) {
                return;
              }
              const l = i.value?.clientHeight;
              const s = i.value?.scrollHeight;
              const c = i.value?.scrollTop;
              if (l && s && c && l + c >= s - 10) {
                e.reqConversionList();
              }
            })();
          });
        }
      });
      return {
        list: t.linksList,
        customList: t.customLinks,
        selectLink: t.selectedLink,
        panelType: t.panelType,
        panelShowType: t.panelShowType,
        conversionDataList: t.conversionDataList,
        activeConversionId: t.activeConversionId,
        activeConversionItem: t.activeConversionItem,
        userOperationDisabled: t.userOperationDisabled,
        paymentOrderData: t.paymentOrderData,
        planList: t.planList,
        currentPlanList: t.currentPlanList,
        planSelectedIndex: t.planSelectedIndex,
        vipGroup: t.vipGroup,
        localCurrentTime: t.localCurrentTime,
        payOrderIds: t.payOrderIds,
        chatModelList: t.chatModelList,
        activeSelectModel: t.activeSelectModel,
        chatVipDetail: t.chatVipDetail,
        vipDetailLoading: t.vipDetailLoading,
        isFreeOrder: t.isFreeOrder,
        fromTag: t.fromTag,
        extpackRest: t.extpackRest,
        showRenewalConfirm: t.showRenewalConfirm,
        scrollChatRef: t.scrollChatRef,
        uploadDocModalShow: t.uploadDocModalShow,
        uploadMetaData: t.uploadMetaData,
        uploadDocLoading: t.uploadDocLoading,
        selectDocFile: t.selectDocFile,
        containerRect: t.containerRect,
        highlihgtPlanProduct: t.highlihgtPlanProduct,
        setSelectLink: function (t) {
          if (t.iframe) {
            e.setSelectLink(t);
          } else {
            window.open(t.url, "_blank");
          }
        },
        isFull: n,
        setIsFull: function (e) {
          n.value = e;
        },
        setpanelType: function (t) {
          e.setPanelType(t);
        },
        setPanelShowType: l,
        addLink: function (n) {
          if (t.customLinks.value.find(e => e.url === n.url)) {
            D.R.warn({
              message: i18n("yi3e8875")
            });
          } else {
            e.addCustomLink(n);
          }
        },
        removeLink: function (n, a) {
          e.removeCustomLink(n);
          if (a.url === t.selectedLink.value?.url) {
            e.setSelectLink(t.linksList.value[0]);
          }
        },
        removeOriginLink: function (n) {
          e.removeOriginLink(n.id);
          if (n.url === t.selectedLink.value?.url) {
            e.setSelectLink(t.linksList.value[0]);
          }
        },
        onClickNewChat: function () {
          var n;
          const a = t.conversionDataList.value;
          if ((n = i.value) !== null && n !== undefined) {
            n.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }
          const o = a.find(e => e.id === k.NEWCHAT_ID);
          if (o) {
            e.setSelectModel();
            if (!(o.messages.length > 0)) {
              e.setActiveConversionId(k.NEWCHAT_ID);
              return;
            }
            e.setNewLocalId();
          }
          e.newChatHandler();
        },
        sendMessage: function (n) {
          e.sendChatMessage(n, t.activeConversionId.value);
        },
        reGenerate: function () {
          e.reGenerateLastAnwser(t.activeConversionId.value);
        },
        exportMarkdown: function () {
          const e = t.activeConversionItem.value.messages;
          if (e.length === 0) {
            return;
          }
          let n = "";
          e.forEach(e => {
            const t = e.role === "assistant" ? `## ${i18n("lai279275")}\n` : `## ${i18n("lai2e76db")}\n`;
            n += t;
            n += e.content + "\r\n\n";
          });
          const a = `${F.EF ? "InfinityAI" : "WetabAI"}-${Math.ceil(Date.now() * Math.random())}.md`;
          (0, P.tf)(n, a, F.s$ ? "custom/hitab" : "text/plain");
        },
        scrollListRef: i,
        onPauseChat: function () {
          e.abourtStream();
        },
        sponsorShow: t.sponsorShow,
        closeSponsor: function () {
          e.setSponsorShow(false);
        },
        vipTipsShow: t.vipTipsShow,
        vipTipsContent: t.vipTipsContent,
        closeVipTipsShow: function () {
          e.setVipTipsShow(false, "");
        },
        getPayCode: async function (t, n) {
          return await e.getPayCode(t, n);
        },
        getPlanList: function () {
          e.getPlanList();
        },
        getPayList: async function () {
          return await e.getPayList();
        },
        checkAllOrders: async function () {
          return await e.checkAllOrders();
        },
        getVipGroup: function () {
          e.getVipGroup();
        },
        checkPayOrderIds: async function (t) {
          const n = await e.checkRecentOrderIds(t);
          if (n) {
            return n;
          }
          throw new Error("no paidId");
        },
        createOrder: async function (t, n) {
          return await e.createPaymentOrder(t, n);
        },
        saveCreateOrderParams: function (t) {
          e.setCreateOrderParams(t);
        },
        refreshOrder: async function () {
          const {
            planId: n,
            payPlatform: a
          } = t.createOrderParams.value;
          return await e.createPaymentOrder(n, a);
        },
        onSelectModel: function (t) {
          e.setSelectModel(t);
        },
        getChatModelList: function () {
          e.getChatModels();
        },
        modifyPlanForFree: async function () {
          return await e.confirmChangePlanForFree();
        },
        getVipDetail: async function () {
          return await e.getUserVipDetail();
        },
        clearOrderIds: function () {
          e.clearOrderIds();
        },
        setPlanSelectedIndex: function (t) {
          e.setPlanSelectedIndex(t);
        },
        setFromTag: function (t) {
          e.setFromTag(t);
        },
        backToPlanList: function () {
          if (t.fromTag.value === "double11") {
            l("chatai-double11");
          } else {
            l("chat-expense");
          }
        },
        closeWidget: () => {
          e.setModal(false);
          e.setPanelShowType("");
        }
      };
    };
  }
}]);