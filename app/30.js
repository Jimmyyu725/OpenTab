(window.webpackJsonp=window.webpackJsonp||[]).push([[30,9],{161:function(t,e,i){"use strict";i.r(e),i.d(e,"slave",(function(){return r}));i(7);var n=i(5),s=i.n(n),a=i(315),o=i(50);const r=new class{constructor(){if(this.channel=null,this.initResolve=[],this.initReject=[],this.messageScheduler=new a.a,this.initChannel=()=>{"serviceworker"===o.b?this.initServiceworker():"background"===o.b&&this.initBackground()},this.awaitChannel=()=>new s.a(async(t,e)=>{"serviceworker"===o.b?this.channel?(await this.channel.active,await this.channel.controlling,t(null)):(this.initResolve.push(t),this.initReject.push(e)):"background"===o.b&&t(null)}),this.initServiceworker=async()=>{try{const{createWorkBox:t}=await i.e(10).then(i.bind(null,603)),e=await t();if(!e)return;e.addEventListener("message",t=>{const{type:e,payload:i={}}=t.data;"master:bordcast-message"===e&&this.messageScheduler.execTask(i.type,i.payload)}),await e.active,await e.controlling,this.channel=e,this.initResolve.forEach(t=>{t()}),this.channel.postTask=this.channel.messageSW}catch(t){console.log("slave初始化错误：",t),this.initReject.forEach(t=>{t()})}},this.initBackground=()=>{this.channel={postTask:t=>new s.a((e,i)=>{chrome.runtime.sendMessage(t,t=>{chrome.runtime.lastError&&i(chrome.runtime.lastError),e(t)})})},chrome.runtime.onMessage.addListener(({type:t,payload:e,ignoreId:i})=>{"master:bordcast-message"===t?chrome.tabs.getCurrent(t=>{t&&i!==t.id&&this.messageScheduler.execTask(e.type,e.payload)}):"slave:bordcast-message"===t&&this.messageScheduler.execTask(e.data.type,e.data.payload)})},o.a)throw new Error("it's not page");this.initChannel()}postTask(t,e,i){return new s.a(async(n,s)=>{let a=!1;await this.awaitChannel();const r=Object.assign(Object.assign(Object.assign({},o.d),{taskId:Object(o.c)()}),i);r.timeout&&setTimeout(()=>{a||n({error:"timeout"})},r.timeout);try{const i=await this.channel.postTask({type:t,payload:Object.assign({data:e},r)});a=!0,n(i)}catch(t){n({error:t})}})}listenMessage(t,e){this.messageScheduler.listenTask(t,e)}sendMessage(t,e=""){this.postTask("slave:bordcast-message",{type:t,payload:e})}}},315:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));class n{constructor(){this._events=new Map}listenTask(t,e){if("function"!=typeof e)return;this._events.has(t)||this._events.set(t,new Set);this._events.get(t).add(e)}execTask(t,e,...i){if(this._events.has(t)){const n=this._events.get(t);for(const t of n)t(e,...i)}}}},432:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(92),s=i(136);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,o=Object(s.e)(t=>e=>{if(!(e instanceof s.b))throw new Error("unsafeHTML can only be used in text bindings");const i=a.get(e);if(void 0!==i&&Object(n.h)(t)&&t===i.value&&e.value===i.fragment)return;const o=document.createElement("template");o.innerHTML=t;const r=document.importNode(o.content,!0);e.setValue(r),a.set(e,{value:t,fragment:r})})},809:function(t,e,i){"use strict";i.r(e),i.d(e,"Imodal",(function(){return c}));i(7);var n=i(1),s=i(432),a=(i(470),i(161)),o=i(0),r=function(t,e,i,n){var s,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let c=class extends n.a{constructor(){super(...arguments),this.step="loading"}showError(){this.step="error"}async reUpdate(){a.slave.sendMessage("tabs-reload"),setTimeout(()=>{location.reload()},0)}async showRepair(){if(this.step=null,document.querySelector("i-updating").classList.add("hide"),localStorage.setItem("user-checkout-repair",o.z),localStorage.getItem("updating-manual"))return;const{pluginStore:t}=await Promise.all([i.e(1),i.e(35)]).then(i.bind(null,431));t.showRepair()}render(){return"loading"===this.step?n.e`
        <div class="step-loading">
          <img
            src="https://infinityicon.infinitynewtab.com/assets/updating.png?imageView2/2/w/490/format/webp/interlace/1"
            alt=""
          />
          <p>${i18n("bg_updating")}</p>
        </div>
      `:"error"===this.step?n.e`
        <div class="step-error">
          <infinito-modal style="--modal-padding:0;" .open=${!0} .closeable="${!1}">
            <div slot="body">
              <div class="content">
                <div class="tips">
                  <span> ${i18n("update_error_desc1")} </span>
                  <span>
                    ${Object(s.a)(i18n("update_error_desc2",'<img style="width:18px;height:18px;vertical-align: middle;" src="https://infinityicon.infinitynewtab.com/assets/btn-setting.png" alt="">'))}
                  </span>
                </div>
                <div class="btns">
                  <infinito-button @click="${this.reUpdate}" primary>${i18n("re_update")}</infinito-button>
                  <infinito-button @click="${this.showRepair}">${i18n("do_later")}</infinito-button>
                </div>
              </div>
            </div>
          </infinito-modal>
        </div>
      `:void 0}};c.styles=n.b`
    .step-loading,
    .step-error {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .step-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #2b2b2c;
      z-index: 11111111;
    }

    .step-loading img {
      width: 245px;
      margin-bottom: 34px;
    }
    .step-loading p {
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
    }
    .step-error infinito-modal {
      --modal-top: 50vh;
    }
    .step-error .content {
      width: 478px;
      box-sizing: border-box;
      padding: 28px 48px 30px;
    }
    .step-error .tips {
      font-size: 13px;
      font-weight: 400;
      color: #b3b3b3;
      line-height: 20px;
    }
    .tips span {
      display: block;
    }
    .step-error .btns {
      margin-top: 24px;
      display: flex;
      justify-content: center;
    }
    infinito-button {
      min-width: 128px;
      height: 42px;
    }
    .step-error infinito-button:first-child {
      margin-right: 18px;
    }
  `,r([Object(n.g)({type:String})],c.prototype,"step",void 0),c=r([Object(n.c)("i-updating")],c)}}]);