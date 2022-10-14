/*! For license information please see 2289.ba50b8bc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfetch_map_service=self.webpackChunkfetch_map_service||[]).push([[2289,3076,2544,8708,5549,3532,6951],{3076:function(t,e,n){function i(t,e){return(t+e)%e}n.r(e),n.d(e,{g:function(){return i}})},2289:function(t,e,n){n.r(e),n.d(e,{calcite_radio_button:function(){return h}});var i=n(2140),r=n(5549),o=n(2544),a=n(6951),c=n(8708),u=n(3076),l=n(3532),s=(n(9154),function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function c(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?n(t.value):r(t.value).then(a,c)}u((i=i.apply(t,e||[])).next())}))}),d=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},f="container",h=function(){function t(t){var e=this;(0,i.r)(this,t),this.calciteInternalRadioButtonBlur=(0,i.c)(this,"calciteInternalRadioButtonBlur",6),this.calciteRadioButtonChange=(0,i.c)(this,"calciteRadioButtonChange",6),this.calciteInternalRadioButtonCheckedChange=(0,i.c)(this,"calciteInternalRadioButtonCheckedChange",6),this.calciteInternalRadioButtonFocus=(0,i.c)(this,"calciteInternalRadioButtonFocus",6),this.checked=!1,this.disabled=!1,this.focused=!1,this.hidden=!1,this.hovered=!1,this.required=!1,this.scale="m",this.selectItem=function(t,e){t[e].click()},this.queryButtons=function(){return Array.from(e.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((function(t){return t.name===e.name}))},this.isDefaultSelectable=function(){var t=e.queryButtons();return!t.some((function(t){return t.checked}))&&t[0]===e.el},this.check=function(){e.disabled||(e.uncheckAllRadioButtonsInGroup(),e.checked=!0,e.focused=!0,e.calciteRadioButtonChange.emit(),e.setFocus())},this.clickHandler=function(){e.check()},this.setContainerEl=function(t){e.containerEl=t},this.handleKeyDown=function(t){var n=t.key,i=e.el;if(-1!==["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(n)){if(" "===n)return e.check(),void t.preventDefault();var r=n;"rtl"===(0,o.a)(i)&&("ArrowRight"===n&&(r="ArrowLeft"),"ArrowLeft"===n&&(r="ArrowRight"));var a=Array.from(e.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((function(t){return t.name===e.name})),c=0,l=a.length;switch(a.some((function(t,e){if(t.checked)return c=e,!0})),r){case"ArrowLeft":case"ArrowUp":return t.preventDefault(),void e.selectItem(a,(0,u.g)(Math.max(c-1,-1),l));case"ArrowRight":case"ArrowDown":return t.preventDefault(),void e.selectItem(a,(0,u.g)(c+1,l));default:return}}},this.onContainerBlur=function(){e.focused=!1,e.calciteInternalRadioButtonBlur.emit()},this.onContainerFocus=function(){e.disabled||(e.focused=!0,e.calciteInternalRadioButtonFocus.emit())}}return t.prototype.checkedChanged=function(t){t&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit()},t.prototype.nameChanged=function(){this.checkLastRadioButton()},t.prototype.setFocus=function(){return s(this,void 0,void 0,(function(){return d(this,(function(t){return this.disabled||(0,o.f)(this.containerEl),[2]}))}))},t.prototype.onLabelClick=function(t){if(!this.disabled&&!this.hidden){this.uncheckOtherRadioButtonsInGroup();var e=t.currentTarget,n=e.for?this.rootNode.querySelector('calcite-radio-button[id="'.concat(e.for,'"]')):e.querySelector('calcite-radio-button[name="'.concat(this.name,'"]'));n&&(n.checked=!0,n.focused=!0),this.calciteRadioButtonChange.emit(),this.setFocus()}},t.prototype.checkLastRadioButton=function(){var t=this.queryButtons().filter((function(t){return t.checked}));if((null===t||void 0===t?void 0:t.length)>1){var e=t[t.length-1];t.filter((function(t){return t!==e})).forEach((function(t){t.checked=!1,t.emitCheckedChange()}))}},t.prototype.emitCheckedChange=function(){return s(this,void 0,void 0,(function(){return d(this,(function(t){return this.calciteInternalRadioButtonCheckedChange.emit(),[2]}))}))},t.prototype.uncheckAllRadioButtonsInGroup=function(){this.queryButtons().forEach((function(t){t.checked&&(t.checked=!1,t.focused=!1)}))},t.prototype.uncheckOtherRadioButtonsInGroup=function(){var t=this;this.queryButtons().filter((function(e){return e.guid!==t.guid})).forEach((function(t){t.checked&&(t.checked=!1,t.focused=!1)}))},t.prototype.getTabIndex=function(){if(!this.disabled)return this.checked||this.isDefaultSelectable()?0:-1},t.prototype.mouseenter=function(){this.hovered=!0},t.prototype.mouseleave=function(){this.hovered=!1},t.prototype.connectedCallback=function(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||"calcite-radio-button-".concat((0,r.g)()),this.name&&this.checkLastRadioButton(),(0,a.c)(this),(0,c.c)(this)},t.prototype.componentDidLoad=function(){this.focused&&!this.disabled&&this.setFocus()},t.prototype.disconnectedCallback=function(){(0,a.d)(this),(0,c.d)(this)},t.prototype.componentDidRender=function(){(0,l.u)(this)},t.prototype.render=function(){var t=this.getTabIndex();return(0,i.h)(i.H,{onClick:this.clickHandler,onKeyDown:this.handleKeyDown},(0,i.h)("div",{"aria-checked":(0,o.t)(this.checked),"aria-label":(0,a.g)(this),class:f,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:this.setContainerEl,role:"radio",tabIndex:t},(0,i.h)("div",{class:"radio"})),(0,i.h)(c.H,{component:this}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["checkedChanged"],name:["nameChanged"]}},enumerable:!1,configurable:!0}),t}();h.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;-webkit-transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{-webkit-box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 5px var(--calcite-ui-brand);box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{-webkit-box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 6px var(--calcite-ui-brand);box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{-webkit-box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}'},2544:function(t,e,n){n.r(e),n.d(e,{a:function(){return d},b:function(){return s},c:function(){return v},d:function(){return f},e:function(){return u},f:function(){return k},g:function(){return w},h:function(){return C},i:function(){return b},j:function(){return h},k:function(){return x},n:function(){return l},q:function(){return p},s:function(){return E},t:function(){return A}});var i=n(9154),r=n(5549),o=function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function c(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?n(t.value):r(t.value).then(a,c)}u((i=i.apply(t,e||[])).next())}))},a=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},c=function(t,e,n){if("string"===typeof e&&(e=Array.prototype.slice.call(e)),n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))};function u(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,r.g)()):""}function l(t){return Array.isArray(t)?t:Array.from(t)}function s(t){var e=v(t,".".concat(i.C.darkTheme,", .").concat(i.C.lightTheme));return(null===e||void 0===e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function d(t){var e=v(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}function f(t,e,n){var i="[".concat(e,"]"),r=t.closest(i);return r?r.getAttribute(e):n}function h(t){return t.getRootNode()}function m(t){return t.host||null}function p(t,e){var n=e.selector,i=e.id;return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);var r=h(e),o=i?"getElementById"in r?r.getElementById(i):null:n?r.querySelector(n):null,a=m(r);return o||(a?t(a):null)}(t)}function v(t,e){return function t(n){return n?n.closest(e)||t(m(h(n))):null}(t)}function b(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function k(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return t?[2,b(t)?t.setFocus():t.focus()]:[2]}))}))}var y=":not([slot])";function w(t,e,n){e&&!Array.isArray(e)&&"string"!==typeof e&&(n=e,e=null);var i=e?Array.isArray(e)?e.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(e,'"]'):y;return(null===n||void 0===n?void 0:n.all)?function(t,e,n){var i=e===y?g(t,y):Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((function(e){return e.parentElement===t})),i=(null===n||void 0===n?void 0:n.matches)?i.filter((function(t){return null===t||void 0===t?void 0:t.matches(n.matches)})):i;var r=null===n||void 0===n?void 0:n.selector;return r?i.map((function(t){return Array.from(t.querySelectorAll(r))})).reduce((function(t,e){return c(c([],t,!0),e,!0)}),[]).filter((function(t){return!!t})):i}(t,i,n):function(t,e,n){var i=e===y?g(t,y)[0]||null:t.querySelector(e);i=n&&!1===n.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null,i=(null===n||void 0===n?void 0:n.matches)?(null===i||void 0===i?void 0:i.matches(n.matches))?i:null:i;var r=null===n||void 0===n?void 0:n.selector;return r?null===i||void 0===i?void 0:i.querySelector(r):i}(t,i,n)}function g(t,e){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(e)})):[]}function x(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function E(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}function C(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function A(t){return Boolean(t).toString()}},8708:function(t,e,n){n.r(e),n.d(e,{H:function(){return k},a:function(){return m},c:function(){return d},d:function(){return h},r:function(){return s},s:function(){return l}});var i=n(2544),r=n(2140),o="hidden-form-input";function a(t){return"checked"in t}var c=new WeakMap,u=new WeakSet;function l(t){var e=t.formEl;return!!e&&("requestSubmit"in e?e.requestSubmit():e.submit(),!0)}function s(t){var e;null===(e=t.formEl)||void 0===e||e.reset()}function d(t){var e=t.el,n=t.value,r=(0,i.c)(e,"form");if(r&&!function(t,e){var n="calciteInternalFormComponentRegister",i=!1;return t.addEventListener(n,(function(t){i=t.composedPath().some((function(t){return u.has(t)})),t.stopPropagation()}),{once:!0}),e.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}(r,e)){t.formEl=r,t.defaultValue=n,a(t)&&(t.defaultChecked=t.checked);var o=(t.onFormReset||f).bind(t);r.addEventListener("reset",o),c.set(t.el,o),u.add(e)}}function f(){a(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function h(t){var e=t.el,n=t.formEl;if(n){var i=c.get(e);n.removeEventListener("reset",i),c.delete(e),t.formEl=null,u.delete(e)}}function m(t,e){t.defaultValue=e}var p=function(t){t.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},v=function(t){return t.removeEventListener("change",p)};function b(t,e,n){var i,r=t.defaultValue,o=t.disabled,c=t.name,u=t.required;e.defaultValue=r,e.disabled=o,e.name=c,e.required=u,e.tabIndex=-1,a(t)?(e.defaultChecked=t.defaultChecked,e.value=t.checked?n||"on":"",o||t.checked||(e.disabled=!0)):e.value=n||"",null===(i=t.syncHiddenFormInput)||void 0===i||i.call(t,e)}var k=function(t){return function(t){var e=t.el,n=t.formEl,i=t.name,r=t.value,a=e.ownerDocument,c=e.querySelectorAll('input[slot="'.concat(o,'"]'));if(n&&i){var u,l=Array.isArray(r)?r:[r],s=[],d=new Set;c.forEach((function(e){var n=l.find((function(t){return t==e.value}));null!=n?(d.add(n),b(t,e,n)):s.push(e)})),l.forEach((function(e){if(!d.has(e)){var n=s.pop();n||((n=a.createElement("input")).slot=o),u||(u=a.createDocumentFragment()),u.append(n),n.addEventListener("change",p),b(t,n,e)}})),u&&e.append(u),s.forEach((function(t){v(t),t.remove()}))}else c.forEach((function(t){v(t),t.remove()}))}(t.component),(0,r.h)("slot",{name:o})}},5549:function(t,e,n){n.r(e),n.d(e,{g:function(){return i}});var i=function(){return[2,1,1,1,3].map((function(t){for(var e="",n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},3532:function(t,e,n){function i(){}function r(t,e){if(void 0===e&&(e=!1),t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.r(e),n.d(e,{u:function(){return r}})},6951:function(t,e,n){n.r(e),n.d(e,{a:function(){return a},c:function(){return h},d:function(){return m},g:function(){return p},l:function(){return o}});var i=n(2544),r="calciteInternalLabelClick",o="calciteInternalLabelConnected",a="calciteInternaLabelDisconnected",c="calcite-label",u=new WeakMap,l=new WeakMap,s=new WeakMap,d=new Set,f=function(t){var e=t.id,n=e&&(0,i.q)(t,{selector:"".concat(c,'[for="').concat(e,'"]')});if(n)return n;var r=(0,i.c)(t,c);return!r||function(t,e){var n,i="custom-element-ancestor-check",r=function(i){i.stopImmediatePropagation();var r=i.composedPath();n=r.slice(r.indexOf(e),r.indexOf(t))};t.addEventListener(i,r,{once:!0}),e.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),t.removeEventListener(i,r);var o=n.filter((function(n){return n!==e&&n!==t})).filter((function(t){var e;return null===(e=t.tagName)||void 0===e?void 0:e.includes("-")}));return o.length>0}(r,t)?null:r};function h(t){var e=f(t.el);if(!(u.has(e)||!e&&d.has(t))){var n=k.bind(t);if(e){t.labelEl=e;var i=v.bind(t);u.set(t.labelEl,i),t.labelEl.addEventListener(r,i),d.delete(t),document.removeEventListener(o,l.get(t)),s.set(t,n),document.addEventListener(a,n)}else d.has(t)||(n(),document.removeEventListener(a,s.get(t)))}}function m(t){if(d.delete(t),document.removeEventListener(o,l.get(t)),document.removeEventListener(a,s.get(t)),l.delete(t),s.delete(t),t.labelEl){var e=u.get(t.labelEl);t.labelEl.removeEventListener(r,e),u.delete(t.labelEl)}}function p(t){var e,n;return t.label||(null===(n=null===(e=t.labelEl)||void 0===e?void 0:e.textContent)||void 0===n?void 0:n.trim())||""}function v(t){this.disabled||(this.el.contains(t.detail.sourceEvent.target)||this.onLabelClick(t))}function b(){d.has(this)&&h(this)}function k(){d.add(this);var t=l.get(this)||b.bind(this);l.set(this,t),document.addEventListener(o,t)}}}]);
//# sourceMappingURL=2289.ba50b8bc.chunk.js.map