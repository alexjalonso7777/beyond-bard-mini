"use strict";(()=>{var Gt=Object.create;var Ue=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var Ht=Object.getOwnPropertyNames;var Vt=Object.getPrototypeOf,Kt=Object.prototype.hasOwnProperty;var J=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Jt=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ht(t))!Kt.call(e,a)&&a!==r&&Ue(e,a,{get:()=>t[a],enumerable:!(o=Wt(t,a))||o.enumerable});return e};var W=(e,t,r)=>(r=e!=null?Gt(Vt(e)):{},Jt(t||!e||!e.__esModule?Ue(r,"default",{value:e,enumerable:!0}):r,e));var z=J((ge,Le)=>{(function(e,t){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],t);else if(typeof ge<"u")t(Le);else{var r={exports:{}};t(r),e.browser=r.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:ge,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let t="The message port closed before a response was received.",r=o=>{let a={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(a).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class u extends WeakMap{constructor(f,p=void 0){super(p),this.createItem=f}get(f){return this.has(f)||this.set(f,this.createItem(f)),super.get(f)}}let i=n=>n&&typeof n=="object"&&typeof n.then=="function",m=(n,f)=>(...p)=>{o.runtime.lastError?n.reject(new Error(o.runtime.lastError.message)):f.singleCallbackArg||p.length<=1&&f.singleCallbackArg!==!1?n.resolve(p[0]):n.resolve(p)},l=n=>n==1?"argument":"arguments",s=(n,f)=>function(g,...T){if(T.length<f.minArgs)throw new Error(`Expected at least ${f.minArgs} ${l(f.minArgs)} for ${n}(), got ${T.length}`);if(T.length>f.maxArgs)throw new Error(`Expected at most ${f.maxArgs} ${l(f.maxArgs)} for ${n}(), got ${T.length}`);return new Promise((P,R)=>{if(f.fallbackToNoCallback)try{g[n](...T,m({resolve:P,reject:R},f))}catch{g[n](...T),f.fallbackToNoCallback=!1,f.noCallback=!0,P()}else f.noCallback?(g[n](...T),P()):g[n](...T,m({resolve:P,reject:R},f))})},h=(n,f,p)=>new Proxy(f,{apply(g,T,P){return p.call(T,n,...P)}}),b=Function.call.bind(Object.prototype.hasOwnProperty),y=(n,f={},p={})=>{let g=Object.create(null),T={has(R,c){return c in n||c in g},get(R,c,C){if(c in g)return g[c];if(!(c in n))return;let w=n[c];if(typeof w=="function")if(typeof f[c]=="function")w=h(n,n[c],f[c]);else if(b(p,c)){let F=s(c,p[c]);w=h(n,n[c],F)}else w=w.bind(n);else if(typeof w=="object"&&w!==null&&(b(f,c)||b(p,c)))w=y(w,f[c],p[c]);else if(b(p,"*"))w=y(w,f[c],p["*"]);else return Object.defineProperty(g,c,{configurable:!0,enumerable:!0,get(){return n[c]},set(F){n[c]=F}}),w;return g[c]=w,w},set(R,c,C,w){return c in g?g[c]=C:n[c]=C,!0},defineProperty(R,c,C){return Reflect.defineProperty(g,c,C)},deleteProperty(R,c){return Reflect.deleteProperty(g,c)}},P=Object.create(n);return new Proxy(P,T)},d=n=>({addListener(f,p,...g){f.addListener(n.get(p),...g)},hasListener(f,p){return f.hasListener(n.get(p))},removeListener(f,p){f.removeListener(n.get(p))}}),j=new u(n=>typeof n!="function"?n:function(p){let g=y(p,{},{getContent:{minArgs:0,maxArgs:0}});n(g)}),O=new u(n=>typeof n!="function"?n:function(p,g,T){let P=!1,R,c=new Promise(G=>{R=function(N){P=!0,G(N)}}),C;try{C=n(p,g,R)}catch(G){C=Promise.reject(G)}let w=C!==!0&&i(C);if(C!==!0&&!w&&!P)return!1;let F=G=>{G.then(N=>{T(N)},N=>{let de;N&&(N instanceof Error||typeof N.message=="string")?de=N.message:de="An unexpected error occurred",T({__mozWebExtensionPolyfillReject__:!0,message:de})}).catch(N=>{})};return F(w?C:c),!0}),I=({reject:n,resolve:f},p)=>{o.runtime.lastError?o.runtime.lastError.message===t?f():n(new Error(o.runtime.lastError.message)):p&&p.__mozWebExtensionPolyfillReject__?n(new Error(p.message)):f(p)},S=(n,f,p,...g)=>{if(g.length<f.minArgs)throw new Error(`Expected at least ${f.minArgs} ${l(f.minArgs)} for ${n}(), got ${g.length}`);if(g.length>f.maxArgs)throw new Error(`Expected at most ${f.maxArgs} ${l(f.maxArgs)} for ${n}(), got ${g.length}`);return new Promise((T,P)=>{let R=I.bind(null,{resolve:T,reject:P});g.push(R),p.sendMessage(...g)})},_={devtools:{network:{onRequestFinished:d(j)}},runtime:{onMessage:d(O),onMessageExternal:d(O),sendMessage:S.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:S.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},$={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return a.privacy={network:{"*":$},services:{"*":$},websites:{"*":$}},y(o,_,a)};e.exports=r(chrome)}else e.exports=globalThis.browser})});var At=J((_n,ht)=>{"use strict";ht.exports=()=>{let e={};return e.promise=new Promise((t,r)=>{e.resolve=t,e.reject=r}),e}});var bt=J((jn,yt)=>{"use strict";var $o=At();function Go(e,t="maxAge"){let r,o,a,u=async()=>{if(r!==void 0)return;let l=async s=>{a=$o();let h=s[1][t]-Date.now();if(h<=0){e.delete(s[0]),a.resolve();return}return r=s[0],o=setTimeout(()=>{e.delete(s[0]),a&&a.resolve()},h),typeof o.unref=="function"&&o.unref(),a.promise};try{for(let s of e)await l(s)}catch{}r=void 0},i=()=>{r=void 0,o!==void 0&&(clearTimeout(o),o=void 0),a!==void 0&&(a.reject(void 0),a=void 0)},m=e.set.bind(e);return e.set=(l,s)=>{e.has(l)&&e.delete(l);let h=m(l,s);return r&&r===l&&i(),u(),h},u(),e}yt.exports=Go});var Te=J((kn,wt)=>{"use strict";var Wo=bt(),we=class{constructor(t,r){if(this.maxAge=t,this[Symbol.toStringTag]="Map",this.data=new Map,Wo(this.data),r)for(let[o,a]of r)this.set(o,a)}get size(){return this.data.size}clear(){this.data.clear()}delete(t){return this.data.delete(t)}has(t){return this.data.has(t)}get(t){let r=this.data.get(t);if(r)return r.data}set(t,r){return this.data.set(t,{maxAge:Date.now()+this.maxAge,data:r}),this}values(){return this.createIterator(t=>t[1].data)}keys(){return this.data.keys()}entries(){return this.createIterator(t=>[t[0],t[1].data])}forEach(t,r){for(let[o,a]of this.entries())t.apply(r,[a,o,this])}[Symbol.iterator](){return this.entries()}*createIterator(t){for(let r of this.data.entries())yield t(r)}};wt.exports=we});var A=W(z());var zt=typeof global=="object"&&global&&global.Object===Object&&global,Z=zt;var Zt=typeof self=="object"&&self&&self.Object===Object&&self,Qt=Z||Zt||Function("return this")(),E=Qt;var Yt=E.Symbol,D=Yt;var Be=Object.prototype,Xt=Be.hasOwnProperty,er=Be.toString,H=D?D.toStringTag:void 0;function tr(e){var t=Xt.call(e,H),r=e[H];try{e[H]=void 0;var o=!0}catch{}var a=er.call(e);return o&&(t?e[H]=r:delete e[H]),a}var Fe=tr;var rr=Object.prototype,or=rr.toString;function sr(e){return or.call(e)}var De=sr;var ar="[object Null]",nr="[object Undefined]",qe=D?D.toStringTag:void 0;function ir(e){return e==null?e===void 0?nr:ar:qe&&qe in Object(e)?Fe(e):De(e)}var M=ir;function fr(e){return e!=null&&typeof e=="object"}var q=fr;var ur=Array.isArray,$e=ur;function lr(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Q=lr;var cr="[object AsyncFunction]",mr="[object Function]",pr="[object GeneratorFunction]",dr="[object Proxy]";function gr(e){if(!Q(e))return!1;var t=M(e);return t==mr||t==pr||t==cr||t==dr}var Y=gr;var xr=E["__core-js_shared__"],X=xr;var Ge=function(){var e=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function hr(e){return!!Ge&&Ge in e}var We=hr;var Ar=Function.prototype,yr=Ar.toString;function br(e){if(e!=null){try{return yr.call(e)}catch{}try{return e+""}catch{}}return""}var U=br;var wr=/[\\^$.*+?()[\]{}|]/g,Tr=/^\[object .+?Constructor\]$/,vr=Function.prototype,Er=Object.prototype,Sr=vr.toString,Pr=Er.hasOwnProperty,Or=RegExp("^"+Sr.call(Pr).replace(wr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Rr(e){if(!Q(e)||We(e))return!1;var t=Y(e)?Or:Tr;return t.test(U(e))}var He=Rr;function Cr(e,t){return e?.[t]}var Ve=Cr;function Ir(e,t){var r=Ve(e,t);return He(r)?r:void 0}var k=Ir;var _r=k(E,"WeakMap"),ee=_r;var jr=9007199254740991;function kr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=jr}var te=kr;function Nr(e){return e!=null&&te(e.length)&&!Y(e)}var Ke=Nr;var Mr=Object.prototype;function Ur(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Mr;return e===r}var re=Ur;var Lr="[object Arguments]";function Br(e){return q(e)&&M(e)==Lr}var xe=Br;var Je=Object.prototype,Fr=Je.hasOwnProperty,Dr=Je.propertyIsEnumerable,qr=xe(function(){return arguments}())?xe:function(e){return q(e)&&Fr.call(e,"callee")&&!Dr.call(e,"callee")},ze=qr;function $r(){return!1}var Ze=$r;var Xe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Qe=Xe&&typeof module=="object"&&module&&!module.nodeType&&module,Gr=Qe&&Qe.exports===Xe,Ye=Gr?E.Buffer:void 0,Wr=Ye?Ye.isBuffer:void 0,Hr=Wr||Ze,et=Hr;var Vr="[object Arguments]",Kr="[object Array]",Jr="[object Boolean]",zr="[object Date]",Zr="[object Error]",Qr="[object Function]",Yr="[object Map]",Xr="[object Number]",eo="[object Object]",to="[object RegExp]",ro="[object Set]",oo="[object String]",so="[object WeakMap]",ao="[object ArrayBuffer]",no="[object DataView]",io="[object Float32Array]",fo="[object Float64Array]",uo="[object Int8Array]",lo="[object Int16Array]",co="[object Int32Array]",mo="[object Uint8Array]",po="[object Uint8ClampedArray]",go="[object Uint16Array]",xo="[object Uint32Array]",x={};x[io]=x[fo]=x[uo]=x[lo]=x[co]=x[mo]=x[po]=x[go]=x[xo]=!0;x[Vr]=x[Kr]=x[ao]=x[Jr]=x[no]=x[zr]=x[Zr]=x[Qr]=x[Yr]=x[Xr]=x[eo]=x[to]=x[ro]=x[oo]=x[so]=!1;function ho(e){return q(e)&&te(e.length)&&!!x[M(e)]}var tt=ho;function Ao(e){return function(t){return e(t)}}var rt=Ao;var ot=typeof exports=="object"&&exports&&!exports.nodeType&&exports,V=ot&&typeof module=="object"&&module&&!module.nodeType&&module,yo=V&&V.exports===ot,he=yo&&Z.process,bo=function(){try{var e=V&&V.require&&V.require("util").types;return e||he&&he.binding&&he.binding("util")}catch{}}(),Ae=bo;var st=Ae&&Ae.isTypedArray,wo=st?rt(st):tt,at=wo;function To(e,t){return function(r){return e(t(r))}}var nt=To;var vo=nt(Object.keys,Object),it=vo;var Eo=Object.prototype,So=Eo.hasOwnProperty;function Po(e){if(!re(e))return it(e);var t=[];for(var r in Object(e))So.call(e,r)&&r!="constructor"&&t.push(r);return t}var ft=Po;var Oo=k(E,"Map"),oe=Oo;var Ro=k(E,"DataView"),se=Ro;var Co=k(E,"Promise"),ae=Co;var Io=k(E,"Set"),ne=Io;var ut="[object Map]",_o="[object Object]",lt="[object Promise]",ct="[object Set]",mt="[object WeakMap]",pt="[object DataView]",jo=U(se),ko=U(oe),No=U(ae),Mo=U(ne),Uo=U(ee),B=M;(se&&B(new se(new ArrayBuffer(1)))!=pt||oe&&B(new oe)!=ut||ae&&B(ae.resolve())!=lt||ne&&B(new ne)!=ct||ee&&B(new ee)!=mt)&&(B=function(e){var t=M(e),r=t==_o?e.constructor:void 0,o=r?U(r):"";if(o)switch(o){case jo:return pt;case ko:return ut;case No:return lt;case Mo:return ct;case Uo:return mt}return t});var dt=B;var Lo="[object Map]",Bo="[object Set]",Fo=Object.prototype,Do=Fo.hasOwnProperty;function qo(e){if(e==null)return!0;if(Ke(e)&&($e(e)||typeof e=="string"||typeof e.splice=="function"||et(e)||at(e)||ze(e)))return!e.length;var t=dt(e);if(t==Lo||t==Bo)return!e.size;if(re(e))return!ft(e).length;for(var r in e)if(Do.call(e,r))return!1;return!0}var ye=qo;var be=W(z());async function K(){let{provider:e="bard"}=await be.default.storage.local.get("provider"),t="provider:bard",r=await be.default.storage.local.get(t);return{provider:e,configs:{["bard"]:r[t]}}}var L="https://bard.google.com";var gt="gpt-3.5-turbo",xt="api.openai.com";var jt=W(Te());var Ho=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Vo=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ko=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Jo(e,t){if(e!=="__proto__"&&!(e==="constructor"&&t&&typeof t=="object"&&"prototype"in t))return t}function Tt(e,t={}){if(typeof e!="string")return e;let r=e.toLowerCase().trim();if(r==="true")return!0;if(r==="false")return!1;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r!=="undefined"){if(!Ko.test(e)){if(t.strict)throw new SyntaxError("Invalid JSON");return e}try{return Ho.test(e)||Vo.test(e)?JSON.parse(e,Jo):JSON.parse(e)}catch(o){if(t.strict)throw o;return e}}}var Mn=String.fromCharCode;var zo=/#/g,Zo=/&/g;var Qo=/=/g;var Et=/\+/g,Yo=/%5e/gi,Xo=/%60/gi;var es=/%7c/gi;var ts=/%20/gi;function rs(e){return encodeURI(""+e).replace(es,"|")}function Ee(e){return rs(typeof e=="string"?e:JSON.stringify(e)).replace(Et,"%2B").replace(ts,"+").replace(zo,"%23").replace(Zo,"%26").replace(Xo,"`").replace(Yo,"^")}function ve(e){return Ee(e).replace(Qo,"%3D")}function St(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function os(e){return St(e.replace(Et," "))}function ss(e=""){let t={};e[0]==="?"&&(e=e.slice(1));for(let r of e.split("&")){let o=r.match(/([^=]+)=?(.*)/)||[];if(o.length<2)continue;let a=St(o[1]);if(a==="__proto__"||a==="constructor")continue;let u=os(o[2]||"");typeof t[a]<"u"?Array.isArray(t[a])?t[a].push(u):t[a]=[t[a],u]:t[a]=u}return t}function as(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(r=>`${ve(e)}=${Ee(r)}`).join("&"):`${ve(e)}=${Ee(t)}`:ve(e)}function ns(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>as(t,e[t])).join("&")}var is=/^\w{2,}:([/\\]{1,2})/,fs=/^\w{2,}:([/\\]{2})?/,us=/^([/\\]\s*){2,}[^/\\]/;function Pt(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?is.test(e):fs.test(e)||(t.acceptRelative?us.test(e):!1)}var ls=/\/$|\/\?/;function Se(e="",t=!1){return t?ls.test(e):e.endsWith("/")}function cs(e="",t=!1){if(!t)return(Se(e)?e.slice(0,-1):e)||"/";if(!Se(e,!0))return e||"/";let[r,...o]=e.split("?");return(r.slice(0,-1)||"/")+(o.length>0?`?${o.join("?")}`:"")}function ms(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(Se(e,!0))return e||"/";let[r,...o]=e.split("?");return r+"/"+(o.length>0?`?${o.join("?")}`:"")}function ps(e=""){return e.startsWith("/")}function ds(e=""){return(ps(e)?e.slice(1):e)||"/"}function Ot(e,t){if(gs(t)||Pt(e))return e;let r=cs(t);return e.startsWith(r)?e:hs(r,e)}function Rt(e,t){let r=Ct(e),o={...ss(r.search),...t};return r.search=ns(o),As(r)}function gs(e){return!e||e==="/"}function xs(e){return e&&e!=="/"}function hs(e,...t){let r=e||"";for(let o of t.filter(a=>xs(a)))r=r?ms(r)+ds(o):o;return r}function Ct(e="",t){if(!Pt(e,{acceptRelative:!0}))return t?Ct(t+e):vt(e);let[r="",o,a=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[u="",i=""]=(a.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:m,search:l,hash:s}=vt(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:o?o.slice(0,Math.max(0,o.length-1)):"",host:u,pathname:m,search:l,hash:s}}function vt(e=""){let[t="",r="",o=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:r,hash:o}}function As(e){let t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}var Pe=class extends Error{constructor(){super(...arguments),this.name="FetchError"}};function ys(e,t,r){let o="";t&&(o=t.message),e&&r?o=`${o} (${r.status} ${r.statusText} (${e.toString()}))`:e&&(o=`${o} (${e.toString()})`);let a=new Pe(o);return Object.defineProperty(a,"request",{get(){return e}}),Object.defineProperty(a,"response",{get(){return r}}),Object.defineProperty(a,"data",{get(){return r&&r._data}}),Object.defineProperty(a,"status",{get(){return r&&r.status}}),Object.defineProperty(a,"statusText",{get(){return r&&r.statusText}}),Object.defineProperty(a,"statusCode",{get(){return r&&r.status}}),Object.defineProperty(a,"statusMessage",{get(){return r&&r.statusText}}),a}var bs=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function It(e="GET"){return bs.has(e.toUpperCase())}function ws(e){if(e===void 0)return!1;let t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}var Ts=new Set(["image/svg","application/xml","application/xhtml","application/html"]),vs=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Es(e=""){if(!e)return"json";let t=e.split(";").shift()||"";return vs.test(t)?"json":Ts.has(t)||t.startsWith("text/")?"text":"blob"}function Ss(e,t,r=globalThis.Headers){let o={...t,...e};if(t?.params&&e?.params&&(o.params={...t?.params,...e?.params}),t?.query&&e?.query&&(o.query={...t?.query,...e?.query}),t?.headers&&e?.headers){o.headers=new r(t?.headers||{});for(let[a,u]of new r(e?.headers||{}))o.headers.set(a,u)}return o}var Ps=new Set([408,409,425,429,500,502,503,504]);function Oe(e){let{fetch:t,Headers:r}=e;function o(i){let m=i.error&&i.error.name==="AbortError"||!1;if(i.options.retry!==!1&&!m){let s;typeof i.options.retry=="number"?s=i.options.retry:s=It(i.options.method)?0:1;let h=i.response&&i.response.status||500;if(s>0&&Ps.has(h))return a(i.request,{...i.options,retry:s-1})}let l=ys(i.request,i.error,i.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,a),l}let a=async function(m,l={}){let s={request:m,options:Ss(l,e.defaults,r),response:void 0,error:void 0};s.options.onRequest&&await s.options.onRequest(s),typeof s.request=="string"&&(s.options.baseURL&&(s.request=Ot(s.request,s.options.baseURL)),(s.options.query||s.options.params)&&(s.request=Rt(s.request,{...s.options.params,...s.options.query})),s.options.body&&It(s.options.method)&&ws(s.options.body)&&(s.options.body=typeof s.options.body=="string"?s.options.body:JSON.stringify(s.options.body),s.options.headers=new r(s.options.headers||{}),s.options.headers.has("content-type")||s.options.headers.set("content-type","application/json"),s.options.headers.has("accept")||s.options.headers.set("accept","application/json")));try{s.response=await t(s.request,s.options)}catch(b){return s.error=b,s.options.onRequestError&&await s.options.onRequestError(s),await o(s)}let h=(s.options.parseResponse?"json":s.options.responseType)||Es(s.response.headers.get("content-type")||"");if(h==="json"){let b=await s.response.text(),y=s.options.parseResponse||Tt;s.response._data=y(b)}else h==="stream"?s.response._data=s.response.body:s.response._data=await s.response[h]();return s.options.onResponse&&await s.options.onResponse(s),!s.options.ignoreResponseError&&s.response.status>=400&&s.response.status<600?(s.options.onResponseError&&await s.options.onResponseError(s),await o(s)):s.response},u=async function(m,l){return(await a(m,l))._data};return u.raw=a,u.native=t,u.create=(i={})=>Oe({...e,defaults:{...e.defaults,...i}}),u}var _t=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Os=_t.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),Rs=_t.Headers,Re=Oe({fetch:Os,Headers:Rs});var Ce=class extends Error{constructor(r,o){super(r);this.code=o}};async function kt(e){}async function Cs(e,t,r){}var Wn=new jt.default(10*1e3);var ie=class{constructor(t){this.token=t;this.token=t}extractFromHTML(t,r){let a=new RegExp(`"${t}":"([^"]+)"`).exec(r);return a==null?void 0:a[1]}async fetchRequestParams(){let t=await Re("https://bard.google.com/faq"),r=this.extractFromHTML("SNlM0e",t),o=this.extractFromHTML("cfb2h",t);return{atValue:r,blValue:o}}async parseBartResponse(t){let r=JSON.parse(t.split(`
`)[3]),o=JSON.parse(r[0][2]);if(!o)throw new Ce("Failed to access Bard","BARD_EMPTY_RESPONSE");return{text:o[0][0],ids:[...o[1],o[4][0][0]]}}async generateReqId(){return Math.floor(Math.random()*9e5)+1e5}async generateAnswer(t){let r,o=()=>{r&&Cs(this.token,r,{is_visible:!1})};this.conversationContext=t.conversationContext,this.conversationContext||(this.conversationContext={requestParams:await this.fetchRequestParams(),contextIds:["","",""]});let{requestParams:a,contextIds:u}=this.conversationContext,i=await Re("https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate",{method:"POST",signal:t.signal,query:{bl:a.blValue,_reqid:this.generateReqId(),rt:"c"},body:new URLSearchParams({at:a.atValue,"f.req":JSON.stringify([null,`[[${JSON.stringify(t.prompt)}],null,${JSON.stringify(u)}]`])}),parseResponse:s=>s}),{text:m,ids:l}=await this.parseBartResponse(i);return this.conversationContext.contextIds=l,m&&(r="dataconversation_id",t.onEvent({type:"answer",data:{text:m,conversationContext:this.conversationContext}})),t.onEvent({type:"done"}),o(),{cleanup:o}}resetConversation(){this.conversationContext=void 0}};var Bt=W(Te());var fe,Is=new Uint8Array(16);function Ie(){if(!fe&&(fe=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!fe))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return fe(Is)}var v=[];for(let e=0;e<256;++e)v.push((e+256).toString(16).slice(1));function Nt(e,t=0){return(v[e[t+0]]+v[e[t+1]]+v[e[t+2]]+v[e[t+3]]+"-"+v[e[t+4]]+v[e[t+5]]+"-"+v[e[t+6]]+v[e[t+7]]+"-"+v[e[t+8]]+v[e[t+9]]+"-"+v[e[t+10]]+v[e[t+11]]+v[e[t+12]]+v[e[t+13]]+v[e[t+14]]+v[e[t+15]]).toLowerCase()}var _s=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_e={randomUUID:_s};function js(e,t,r){if(_e.randomUUID&&!t&&!e)return _e.randomUUID();e=e||{};let o=e.random||(e.rng||Ie)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){r=r||0;for(let a=0;a<16;++a)t[r+a]=o[a];return t}return Nt(o)}var ue=js;function Mt(e){let t,r,o,a,u,i,m;return l(),{feed:s,reset:l};function l(){t=!0,r="",o=0,a=-1,u=void 0,i=void 0,m=""}function s(b){r=r?r+b:b,t&&ks(r)&&(r=r.slice(Ut.length)),t=!1;let y=r.length,d=0,j=!1;for(;d<y;){j&&(r[d]===`
`&&++d,j=!1);let O=-1,I=a,S;for(let _=o;O<0&&_<y;++_)S=r[_],S===":"&&I<0?I=_-d:S==="\r"?(j=!0,O=_-d):S===`
`&&(O=_-d);if(O<0){o=y-d,a=I;break}else o=0,a=-1;h(r,d,I,O),d+=O+1}d===y?r="":d>0&&(r=r.slice(d))}function h(b,y,d,j){if(j===0){m.length>0&&(e({type:"event",id:u,event:i||void 0,data:m.slice(0,-1)}),m="",u=void 0),i=void 0;return}let O=d<0,I=b.slice(y,y+(O?j:d)),S=0;O?S=j:b[y+d+1]===" "?S=d+2:S=d+1;let _=y+S,$=j-S,n=b.slice(_,_+$).toString();if(I==="data")m+=n?"".concat(n,`
`):`
`;else if(I==="event")i=n;else if(I==="id"&&!n.includes("\0"))u=n;else if(I==="retry"){let f=parseInt(n,10);Number.isNaN(f)||e({type:"reconnect-interval",value:f})}}}var Ut=[239,187,191];function ks(e){return Ut.every((t,r)=>e.charCodeAt(r)===t)}async function*Lt(e){let t=e.getReader();try{for(;;){let{done:r,value:o}=await t.read();if(r)return;yield o}}finally{t.releaseLock()}}async function le(e,t){let{onMessage:r,...o}=t,a=await fetch(e,o);if(!a.ok){let i=await a.json().catch(()=>({}));throw new Error(ye(i)?`${a.status} ${a.statusText}`:JSON.stringify(i))}let u=Mt(i=>{i.type==="event"&&r(i.data)});for await(let i of Lt(a.body)){let m=new TextDecoder().decode(i);u.feed(m)}}async function Ne(e,t,r,o){return fetch(`${L}/backend-api${r}`,{method:t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:o===void 0?void 0:JSON.stringify(o)})}async function Ft(e,t){await Ne(e,"POST","/conversation/message_feedback",t)}async function Ns(e,t,r){await Ne(e,"PATCH",`/conversation/${t}`,r)}var je="accessToken",ke=new Bt.default(10*1e3);async function me(){if(ke.get(je))return ke.get(je);let e=await fetch(`${L}/api/auth/session`);if(e.status===403)throw new Error("CLOUDFLARE");let t=await e.json().catch(()=>({}));if(!t.accessToken)throw new Error("UNAUTHORIZED");return ke.set(je,t.accessToken),t.accessToken}var ce=class{constructor(t){this.token=t;this.token=t}async fetchModels(){return(await Ne(this.token,"GET","/models").then(r=>r.json())).models}async getModelName(){try{return(await this.fetchModels())[0].slug}catch(t){return"text-davinci-002-render-sha"}}async generateAnswer(t){let r,o=()=>{r&&Ns(this.token,r,{is_visible:!0})},a=await this.getModelName();return await le(`${L}/backend-api/conversation`,{method:"POST",signal:t.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify({action:"next",messages:[{id:ue(),role:"user",content:{content_type:"text",parts:[t.prompt]}}],model:a,parent_message_id:ue()}),onMessage(u){var l,s,h;if(u==="[DONE]"){t.onEvent({type:"done"}),o();return}let i;try{i=JSON.parse(u)}catch(b){return}let m=(h=(s=(l=i.message)==null?void 0:l.content)==null?void 0:s.parts)==null?void 0:h[0];m&&(r=i.conversation_id,t.onEvent({type:"answer",data:{text:m,messageId:i.message.id,conversationId:i.conversation_id}}))}}),{cleanup:o}}};var pe=class{constructor(t,r){this.token=t;this.model=r;this.token=t,this.model=r}buildPrompt(t){return this.model.startsWith("text-chat-davinci")?`Respond conversationally.<|im_end|>

User: ${t}<|im_sep|>
ChatGPT:`:t}buildMessages(t){return[{role:"user",content:t}]}async generateAnswer(t){var l,s,h;let[r]=await Promise.all([K()]),o=(s=(l=r.configs["gpt3"])==null?void 0:l.model)!=null?s:gt,a=((h=r.configs["gpt3"])==null?void 0:h.apiHost)||xt,u="",i={model:this.model,stream:!0,max_tokens:800};o==="text-davinci-003"?(u=`https://${a}/v1/completions`,i={...i,prompt:this.buildPrompt(t.prompt)}):(u=`https://${a}/v1/chat/completions`,i={...i,messages:this.buildMessages(t.prompt)});let m="";return await le(u,{method:"POST",signal:t.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify(i),onMessage(b){if(b==="[DONE]"){t.onEvent({type:"done"});return}let y;try{y=JSON.parse(b);let d=o==="text-davinci-003"?y.choices[0].text:y.choices[0].delta.content;if(d===void 0||d==="<|im_end|>"||d==="<|im_sep|>")return;m+=d,t.onEvent({type:"answer",data:{text:m,messageId:y.id,conversationId:y.id}})}catch(d){return}}}),{}}};var Me=W(z());var xi=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Dt=navigator.userAgent.indexOf("Firefox")!=-1,hi=/iPad|iPhone|iPod/.test(navigator.userAgent);function qt(e){let{id:t,url:r}=e;r.includes(`${L}/chat`)?Me.default.tabs.sendMessage(t,{type:"CHATGPT_TAB_CURRENT",data:{isLogin:!0}}).catch(()=>{}):Me.default.tabs.sendMessage(t,{type:"CHATGPT_TAB_CURRENT",data:{isLogin:!1}}).catch(()=>{})}async function Us(e,t,r,o,a){let u=await K(),i;if(u.provider==="bard")i=new ie;else if(u.provider==="chatgpt"){let s=await me();i=new ce(s)}else if(u.provider==="gpt3"){let{apiKey:s,model:h}=u.configs["gpt3"];i=new pe(s,h)}else throw new Error(`Unknown provider ${u.provider}`);let m=new AbortController;e.onDisconnect.addListener(()=>{try{m.abort(),l==null||l()}catch(s){}});let{cleanup:l}=await i.generateAnswer({prompt:t,signal:m.signal,onEvent(s){if(s.type==="done"){e.postMessage({event:"DONE"});return}e.postMessage(s.data)},conversationId:r,parentMessageId:o,conversationContext:a})}async function Ls(e){A.default.tabs.query({currentWindow:!0,active:!0}).then(o=>{let a=o[0];a.id&&A.default.storage.local.set({beyondbardTabId:a.id})});let t=await A.default.storage.local.get("pinnedTabId"),r;if(t.pinnedTabId)try{r=await A.default.tabs.get(t.pinnedTabId),A.default.tabs.update(r.id,{active:!0,pinned:!0})}catch(o){}return r||(r=await A.default.tabs.create({url:e,pinned:!0,active:!0})),A.default.storage.local.set({pinnedTabId:r.id}),{pinnedTabId:r.id}}A.default.runtime.onConnect.addListener(async e=>{e.onMessage.addListener(async t=>{try{await Us(e,t.question,t.conversationId,t.parentMessageId,t.conversationContext)}catch(r){e.postMessage({error:r.message})}})});A.default.runtime.onMessage.addListener(async e=>{if(e.type==="FEEDBACK")if((await K()).provider==="chatgpt"){let r=await me();await Ft(r,e.data)}else await kt(e.data);else if(e.type==="OPEN_OPTIONS_PAGE")A.default.runtime.openOptionsPage();else{if(e.type==="GET_ACCESS_TOKEN")return me();if(e.type==="NEW_TAB")return Ls(e.data.url);if(e.type==="GO_BACK"){let t=await A.default.storage.local.get("beyondbardTabId");t.beyondbardTabId?A.default.tabs.update(t.beyondbardTabId,{active:!0}).catch(()=>{A.default.tabs.create({url:"about:newtab",active:!0})}):A.default.tabs.create({url:"about:newtab",active:!0})}}});A.default.runtime.onInstalled.addListener(async e=>{e.reason==="install"&&A.default.runtime.openOptionsPage()});A.default.tabs.onUpdated.addListener(async(e,t)=>{let r=await A.default.storage.local.get("pinnedTabId");A.default.tabs.get(e).then(o=>{var a;(a=o.url)!=null&&a.includes(L)&&t.status==="complete"&&o.id&&r.pinnedTabId===o.id&&qt(o)})});async function $t(e){let{id:t}=e;t&&A.default.tabs.sendMessage(t,{type:"OPEN_WEB_SUMMARY",data:{}}).catch(()=>{})}Dt?A.default.browserAction.onClicked.addListener(async e=>{await $t(e)}):A.default.action.onClicked.addListener(async e=>{await $t(e)});})();
