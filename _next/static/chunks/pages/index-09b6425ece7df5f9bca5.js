_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r);function a(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){a(i,r,o,u,c,"next",e)}function c(e){a(i,r,o,u,c,"throw",e)}u(void 0)}))}}var u=n("nKUr"),c=n("g4pe"),s=n.n(c),f=n("q1tI"),l=n("AbLB"),d=n.n(l),p=n("vRNQ"),h=n.n(p),v=n("hpqd"),y=n.n(v),b=n("Rsvc"),g=function(e){var t=e.baseURL,n=e.fetch,r=(void 0===t?"":t).replace(/\/$/,""),o="/tasks",a="/token",i="/user",u="GET",c="POST",s="DELETE",f="PATCH";return{tasks:{_taskId:function(e){var t="".concat(o,"/").concat(e);return{patch:function(e){return n(r,t,f,e).send()},$patch:function(e){return n(r,t,f,e).send().then((function(e){return e.body}))},delete:function(e){return n(r,t,s,e).send()},$delete:function(e){return n(r,t,s,e).send().then((function(e){return e.body}))},$path:function(){return"".concat(r).concat(t)}}},get:function(e){return n(r,o,u,e).json()},$get:function(e){return n(r,o,u,e).json().then((function(e){return e.body}))},post:function(e){return n(r,o,c,e).json()},$post:function(e){return n(r,o,c,e).json().then((function(e){return e.body}))},$path:function(e){return"".concat(r).concat(o).concat(e&&e.query?"?".concat(Object(b.dataToURLString)(e.query)):"")}},token:{post:function(e){return n(r,a,c,e).json()},$post:function(e){return n(r,a,c,e).json().then((function(e){return e.body}))},$path:function(){return"".concat(r).concat(a)}},user:{get:function(e){return n(r,i,u,e).json()},$get:function(e){return n(r,i,u,e).json().then((function(e){return e.body}))},post:function(e){return n(r,i,c,e,"FormData").json()},$post:function(e){return n(r,i,c,e,"FormData").json().then((function(e){return e.body}))},$path:function(){return"".concat(r).concat(i)}},get:function(e){return n(r,"",u,e).text()},$get:function(e){return n(r,"",u,e).text().then((function(e){return e.body}))},$path:function(){return"".concat(r)}}}(y()()),m=n("bhoB"),j=n.n(m),O=function(){var e=Object(f.useState)(!1),t=e[0],n=e[1],r=Object(f.useState)(""),a=r[0],c=r[1],s=Object(f.useState)({}),l=s[0],d=s[1],p=Object(f.useCallback)(function(){var e=i(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=t.target.files)||void 0===n?void 0:n.length){e.next=2;break}return e.abrupt("return");case 2:return e.t0=d,e.next=5,g.user.$post({headers:{authorization:a},body:{icon:t.target.files[0]}});case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a]),h=Object(f.useCallback)(i(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=prompt("Enter the user id (See server/.env)"),r=prompt("Enter the user pass (See server/.env)"),t&&r){e.next=4;break}return e.abrupt("return",alert("Login failed"));case 4:return a="",e.prev=5,e.t0="Bearer ",e.next=9,g.token.$post({body:{id:t,pass:r}});case 9:e.t1=e.sent.token,a=e.t0.concat.call(e.t0,e.t1),c(a),e.next=17;break;case 14:return e.prev=14,e.t2=e.catch(5),e.abrupt("return",alert("Login failed"));case 17:return e.t3=d,e.next=20,g.user.$get({headers:{authorization:a}});case 20:e.t4=e.sent,(0,e.t3)(e.t4),n(!0);case 23:case"end":return e.stop()}}),e,null,[[5,14]])}))),[]),v=Object(f.useCallback)((function(){c(""),n(!1)}),[]);return Object(u.jsx)("div",{className:j.a.userBanner,children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:l.icon,className:j.a.userIcon}),Object(u.jsx)("span",{children:l.name}),Object(u.jsx)("input",{type:"file",accept:"image/*",onChange:p}),Object(u.jsx)("button",{onClick:v,children:"LOGOUT"})]}):Object(u.jsx)("button",{onClick:h,children:"LOGIN"})})},w=n("nOHt");t.default=function(){var e=Object(w.useRouter)().basePath,t=d()(g.tasks),n=t.data,r=t.error,a=t.revalidate,c=Object(f.useState)(""),l=c[0],p=c[1],v=Object(f.useCallback)((function(e){return p(e.target.value)}),[]),y=Object(f.useCallback)(function(){var e=i(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,g.tasks.post({body:{label:l}});case 5:p(""),a();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[l]),b=Object(f.useCallback)(function(){var e=i(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.tasks._taskId(t.id).patch({body:{done:!t.done}});case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),m=Object(f.useCallback)(function(){var e=i(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.tasks._taskId(t.id).delete();case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(u.jsxs)("div",{className:h.a.container,children:[Object(u.jsxs)(s.a,{children:[Object(u.jsx)("title",{children:"frourio-todo-app"}),Object(u.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),Object(u.jsxs)("main",{className:h.a.main,children:[Object(u.jsx)(O,{}),Object(u.jsxs)("h1",{className:h.a.title,children:["Welcome to ",Object(u.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),Object(u.jsx)("p",{className:h.a.description,children:"frourio-todo-app"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{style:{textAlign:"center"},onSubmit:y,children:[Object(u.jsx)("input",{value:l,type:"text",onChange:v}),Object(u.jsx)("input",{type:"submit",value:"ADD"})]}),Object(u.jsx)("ul",{className:h.a.tasks,children:r?"error":n?n.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:e.done,onChange:function(){return b(e)}}),Object(u.jsx)("span",{children:e.label})]}),Object(u.jsx)("input",{type:"button",value:"DELETE",style:{float:"right"},onClick:function(){return m(e)}})]},e.id)})):"loading"})]})]}),Object(u.jsx)("footer",{className:h.a.footer,children:Object(u.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",Object(u.jsx)("img",{src:"".concat(e,"/vercel.svg"),alt:"Vercel Logo",className:h.a.logo})]})})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},AbLB:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("VtrM"));t.default=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a="string"===typeof t?t:"$get",i="string"===typeof t?n[0]:t;return o.default(!1===(null===i||void 0===i?void 0:i.enabled)?null:[e.$path(i),a],(function(){return e[a](i)}),i)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Rsvc:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},a=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0}),t.optionToRequest=t.dataToURLString=t.dataToFormData=t.headersToObject=void 0;t.headersToObject=function(e){return a(e.entries()).reduce((function(e,t){var n,a=o(t,2),i=a[0],u=a[1];return r(r({},e),((n={})[i]=u,n))}),{})};t.dataToFormData=function(e){var t=new FormData,n=function(n){Array.isArray(e[n])?e[n].forEach((function(e){return t.append(n,e)})):t.append(n,e[n])};for(var r in e)n(r);return t};var i=function(e){return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return{"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"}[e]}))};t.dataToURLString=function(e){return Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return i(t)+"="+i(e)})).join("&"):i(t)+"="+i(e[t])})).join("&")};t.optionToRequest=function(e,n){if(!(null===e||void 0===e?void 0:e.body))return e;var o,a={};switch(n){case"FormData":o=t.dataToFormData(e.body);break;case"URLSearchParams":o=t.dataToURLString(e.body),a["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";break;case"ArrayBuffer":case"string":case"Blob":case"any":o=e.body;break;default:o=JSON.stringify(e.body),a["Content-Type"]="application/json;charset=utf-8"}return r(r({httpBody:o},e),{headers:r(r({},a),e.headers)})}},VtrM:function(e,t,n){"use strict";n.r(t),n.d(t,"trigger",(function(){return R})),n.d(t,"mutate",(function(){return C})),n.d(t,"SWRConfig",(function(){return E})),n.d(t,"useSWRInfinite",(function(){return L})),n.d(t,"cache",(function(){return c}));var r=n("q1tI"),o=Object.prototype.hasOwnProperty;var a=new WeakMap,i=0;var u={isOnline:function(){return"undefined"===typeof navigator.onLine||navigator.onLine},isDocumentVisible:function(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},c=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):a.has(e[n])?r=a.get(e[n]):(r=i,a.set(e[n],i++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var s="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),f={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,o){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&o.retryCount>n.errorRetryCount)){var a=Math.min(o.retryCount||0,8),i=~~((Math.random()+.5)*(1<<a))*n.errorRetryInterval;setTimeout(r,i,o)}},errorRetryInterval:1e3*(s?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(s?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,a;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((a=t.length)===n.length)for(;a--&&e(t[a],n[a]););return-1===a}if(!r||"object"===typeof t){for(r in a=0,t){if(o.call(t,r)&&++a&&!o.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===a}}return t!==t&&n!==n},fetcher:u.fetcher,isOnline:u.isOnline,isDocumentVisible:u.isDocumentVisible},l=Object(r.createContext)({});l.displayName="SWRConfigContext";var d=l,p=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},v="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),y=v?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},b=v?r.useEffect:r.useLayoutEffect,g={},m={},j={},O={},w={},_={},x={},k=function(){var e=0;return function(){return++e}}();if(!v&&window.addEventListener){var S=function(e){if(f.isDocumentVisible()&&f.isOnline())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return S(j)}),!1),window.addEventListener("focus",(function(){return S(j)}),!1),window.addEventListener("online",(function(){return S(O)}),!1)}var R=function(e,t){void 0===t&&(t=!0);var n=c.serializeKey(e),r=n[0],o=n[2],a=n[3];if(!r)return Promise.resolve();var i=w[r];if(r&&i){for(var u=c.get(r),s=c.get(o),f=c.get(a),l=[],d=0;d<i.length;++d)l.push(i[d](t,u,s,f,d>0));return Promise.all(l).then((function(){return c.get(r)}))}return Promise.resolve(c.get(r))},T=function(e,t,n,r){var o=w[e];if(e&&o)for(var a=0;a<o.length;++a)o[a](!1,t,n,r)},C=function(e,t,n){return void 0===n&&(n=!0),p(void 0,void 0,void 0,(function(){var r,o,a,i,u,s,f,l,d,p,v,y,b;return h(this,(function(h){switch(h.label){case 0:if(r=c.serializeKey(e),o=r[0],a=r[2],!o)return[2];if("undefined"===typeof t)return[2,R(e,n)];if(_[o]=k()-1,x[o]=0,i=_[o],u=m[o],l=!1,t&&"function"===typeof t)try{t=t(c.get(o))}catch(g){f=g}if(!t||"function"!==typeof t.then)return[3,5];l=!0,h.label=1;case 1:return h.trys.push([1,3,,4]),[4,t];case 2:return s=h.sent(),[3,4];case 3:return d=h.sent(),f=d,[3,4];case 4:return[3,6];case 5:s=t,h.label=6;case 6:return(p=function(){if(i!==_[o]||u!==m[o]){if(f)throw f;return!0}})()?[2,s]:("undefined"!==typeof s&&c.set(o,s),c.set(a,f),x[o]=k()-1,l?[3,8]:[4,0]);case 7:if(h.sent(),p())return[2,s];h.label=8;case 8:if(v=w[o]){for(y=[],b=0;b<v.length;++b)y.push(v[b](!!n,s,f,void 0,b>0));return[2,Promise.all(y).then((function(){if(f)throw f;return c.get(o)}))]}if(f)throw f;return[2,s]}}))}))};var E=d.Provider,D=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o,a,i={};t.length>=1&&(o=t[0]),t.length>2?(a=t[1],i=t[2]):"function"===typeof t[1]?a=t[1]:"object"===typeof t[1]&&(i=t[1]);var u=c.serializeKey(o),s=u[0],l=u[1],v=u[2],S=u[3];i=Object.assign({},f,Object(r.useContext)(d),i);var R=Object(r.useRef)(i);b((function(){R.current=i})),"undefined"===typeof a&&(a=i.fetcher);var E=function(){var e=c.get(s);return"undefined"===typeof e?i.initialData:e},D=E(),P=c.get(v),I=!!c.get(S),M=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),A=Object(r.useRef)({data:D,error:P,isValidating:I});Object(r.useDebugValue)(A.current.data);var L=Object(r.useState)(null)[1],N=Object(r.useCallback)((function(e){var t=!1;for(var n in e)A.current[n]!==e[n]&&(A.current[n]=e[n],M.current[n]&&(t=!0));if(t||i.suspense){if(U.current||!V.current)return;L({})}}),[]),U=Object(r.useRef)(!1),H=Object(r.useRef)(s),V=Object(r.useRef)(!1),q=Object(r.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];U.current||V.current&&(t=R.current)[e].apply(t,n)}}),B=Object(r.useCallback)((function(e,t){return C(H.current,e,t)}),[]),$=function(e,t){t&&(e[s]?e[s].push(t):e[s]=[t])},F=function(e,t){if(e[s]){var n=e[s],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},z=Object(r.useCallback)((function(t){return void 0===t&&(t={}),p(e,void 0,void 0,(function(){var e,n,r,o,u,f,d;return h(this,(function(p){switch(p.label){case 0:if(!s||!a)return[2,!1];if(U.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof g[s]&&t.dedupe,p.label=1;case 1:return p.trys.push([1,6,,7]),N({isValidating:!0}),c.set(S,!0),n||T(s,A.current.data,A.current.error,!0),r=void 0,o=void 0,n?(o=m[s],[4,g[s]]):[3,3];case 2:return r=p.sent(),[3,5];case 3:return i.loadingTimeout&&!c.get(s)&&setTimeout((function(){e&&q.current.emit("onLoadingSlow",s,i)}),i.loadingTimeout),g[s]=null!==l?a.apply(void 0,l):a(s),m[s]=o=k(),[4,g[s]];case 4:r=p.sent(),setTimeout((function(){delete g[s],delete m[s]}),i.dedupingInterval),q.current.emit("onSuccess",r,s,i),p.label=5;case 5:return m[s]>o||_[s]&&(o<=_[s]||o<=x[s]||0===x[s])?(N({isValidating:!1}),[2,!1]):(c.set(s,r),c.set(v,void 0),c.set(S,!1),u={isValidating:!1},"undefined"!==typeof A.current.error&&(u.error=void 0),i.compare(A.current.data,r)||(u.data=r),N(u),n||T(s,r,u.error,!1),[3,7]);case 6:return f=p.sent(),delete g[s],delete m[s],c.set(v,f),A.current.error!==f&&(N({isValidating:!1,error:f}),n||T(s,void 0,f,!1)),q.current.emit("onError",f,s,i),i.shouldRetryOnError&&(d=(t.retryCount||0)+1,q.current.emit("onErrorRetry",f,s,i,z,Object.assign({dedupe:!0},t,{retryCount:d}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[s]);b((function(){if(s){U.current=!1,V.current=!0;var e=A.current.data,t=E();H.current!==s&&(H.current=s),i.compare(e,t)||N({data:t});var n=function(){return z({dedupe:!0})};(i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount)&&("undefined"!==typeof t?y(n):n());var r=!1,o=function(){!r&&R.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),R.current.focusThrottleInterval))},a=function(){R.current.revalidateOnReconnect&&n()},u=function(e,t,r,o,a){void 0===e&&(e=!0),void 0===a&&(a=!0);var u={},c=!1;return"undefined"===typeof t||i.compare(A.current.data,t)||(u.data=t,c=!0),A.current.error!==r&&(u.error=r,c=!0),"undefined"!==typeof o&&A.current.isValidating!==o&&(u.isValidating=o,c=!0),c&&N(u),!!e&&(a?n():z())};return $(j,o),$(O,a),$(w,u),function(){N=function(){return null},U.current=!0,F(j,o),F(O,a),F(w,u)}}}),[s,z]),b((function(){var t=null,n=function(){return p(e,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return A.current.error||!R.current.refreshWhenHidden&&!R.current.isDocumentVisible()||!R.current.refreshWhenOffline&&!R.current.isOnline()?[3,2]:[4,z({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return R.current.refreshInterval&&(t=setTimeout(n,R.current.refreshInterval)),[2]}}))}))};return R.current.refreshInterval&&(t=setTimeout(n,R.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,z]);var W=Object(r.useMemo)((function(){var e={revalidate:z,mutate:B};return Object.defineProperties(e,{error:{get:function(){return M.current.error=!0,H.current===s?A.current.error:P},enumerable:!0},data:{get:function(){return M.current.data=!0,H.current===s?A.current.data:D},enumerable:!0},isValidating:{get:function(){return M.current.isValidating=!0,!!s&&A.current.isValidating},enumerable:!0}}),e}),[z]);if(i.suspense){var K=c.get(s),G=c.get(v);if("undefined"===typeof K&&(K=D),"undefined"===typeof G&&(G=P),"undefined"===typeof K&&"undefined"===typeof G){if(g[s]||z(),g[s]&&"function"===typeof g[s].then)throw g[s];K=g[s]}if("undefined"===typeof K&&G)throw G;return{error:G,data:K,revalidate:z,mutate:B,isValidating:A.current.isValidating}}return W},P=function(){return(P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},I=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},M=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function L(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o,a,i={};t.length>=1&&(o=t[0]),t.length>2?(a=t[1],i=t[2]):"function"===typeof t[1]?a=t[1]:"object"===typeof t[1]&&(i=t[1]);var u=(i=Object.assign({},f,Object(r.useContext)(d),i)).initialSize,s=void 0===u?1:u,l=i.revalidateAll,p=void 0!==l&&l,h=i.persistSize,v=void 0!==h&&h,y=i.fetcher,b=A(i,["initialSize","revalidateAll","persistSize","fetcher"]);"undefined"===typeof a&&(a=y);var g=null;try{g=c.serializeKey(o(0,null))[0]}catch(E){}var m=Object(r.useState)(!1)[1],j=null;g&&(j="context@"+g);var O,w=null;g&&(w="size@"+g,O=c.get(w));var _=Object(r.useRef)(O||s),x=Object(r.useRef)(!1);Object(r.useEffect)((function(){x.current?v||(_.current=s):x.current=!0}),[g]);var k=D(g?["many",g]:null,(function(){return I(e,void 0,void 0,(function(){var e,t,n,r,u,s,f,l,d,h;return M(this,(function(v){switch(v.label){case 0:e=c.get(j)||{},t=e.originalData,n=e.force,r=[],u=null,s=0,v.label=1;case 1:return s<_.current?(f=c.serializeKey(o(s,u)),l=f[0],d=f[1],l?(h=c.get(l),p||n||"undefined"===typeof n&&0===s||t&&!i.compare(t[s],h)||"undefined"===typeof h?null===d?[3,3]:[4,a.apply(void 0,d)]:[3,6]):[3,8]):[3,8];case 2:return h=v.sent(),[3,5];case 3:return[4,a(l)];case 4:h=v.sent(),v.label=5;case 5:c.set(l,h),v.label=6;case 6:r.push(h),u=h,v.label=7;case 7:return++s,[3,1];case 8:return c.delete(j),[2,r]}}))}))}),b),S=Object(r.useRef)(k.data);Object(r.useEffect)((function(){S.current=k.data}),[k.data]);var R=Object(r.useCallback)((function(e,t){if(void 0===t&&(t=!0),t&&"undefined"!==typeof e){var n=S.current;c.set(j,{originalData:n,force:!1})}else t&&c.set(j,{force:!0});return k.mutate(e,t)}),[k.mutate,j]),T=_.current,C=Object(r.useCallback)((function(e){return"function"===typeof e?_.current=e(_.current):"number"===typeof e&&(_.current=e),c.set(w,_.current),m((function(e){return!e})),R((function(e){return e}))}),[R,w]);return P(P({},k),{mutate:R,size:T,setSize:C})}t.default=D},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},bhoB:function(e,t,n){e.exports={userBanner:"UserBanner_userBanner__3uL6T",userIcon:"UserBanner_userIcon__kAU9w"}},g4pe:function(e,t,n){e.exports=n("8Kt/")},hpqd:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n("xieG");t.default=function(e,t){return void 0===e&&(e=fetch),{baseURL:null===t||void 0===t?void 0:t.baseURL,fetch:function(n,u,c,s,f){var l=this,d=function(d){return function(){return o(l,void 0,void 0,(function(){var o,l,p,h,v,y;return a(this,(function(a){switch(a.label){case 0:return o=i.optionToRequest(s,f),[4,e(""+(null!==(v=null===(h=null===o||void 0===o?void 0:o.config)||void 0===h?void 0:h.baseURL)&&void 0!==v?v:n)+u+((null===o||void 0===o?void 0:o.query)?"?"+i.dataToURLString(o.query):""),r(r(r({method:c},t),null===o||void 0===o?void 0:o.config),{body:null===o||void 0===o?void 0:o.httpBody,headers:r(r(r({},null===t||void 0===t?void 0:t.headers),null===(y=null===o||void 0===o?void 0:o.config)||void 0===y?void 0:y.headers),null===o||void 0===o?void 0:o.headers)}))];case 1:return l=a.sent(),p={status:l.status,headers:i.headersToObject(l.headers),originalResponse:l},[4,d(l)];case 2:return[2,(p.body=a.sent(),p)]}}))}))}};return{send:d((function(){return Promise.resolve()})),json:d((function(e){return e.json()})),text:d((function(e){return e.text()})),arrayBuffer:d((function(e){return e.arrayBuffer()})),blob:d((function(e){return e.blob()})),formData:d((function(e){return e.formData()}))}}}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",logo:"Home_logo__1YbrH",tasks:"Home_tasks__1C02r"}},xieG:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},a=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0}),t.optionToRequest=t.dataToURLString=t.dataToFormData=t.headersToObject=void 0;t.headersToObject=function(e){return a(e.entries()).reduce((function(e,t){var n,a=o(t,2),i=a[0],u=a[1];return r(r({},e),((n={})[i]=u,n))}),{})};t.dataToFormData=function(e){var t=new FormData,n=function(n){Array.isArray(e[n])?e[n].forEach((function(e){return t.append(n,e)})):t.append(n,e[n])};for(var r in e)n(r);return t};var i=function(e){return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return{"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"}[e]}))};t.dataToURLString=function(e){return Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return i(t)+"="+i(e)})).join("&"):i(t)+"="+i(e[t])})).join("&")};t.optionToRequest=function(e,n){if(!(null===e||void 0===e?void 0:e.body))return e;var o,a={};switch(n){case"FormData":o=t.dataToFormData(e.body);break;case"URLSearchParams":o=t.dataToURLString(e.body),a["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";break;case"ArrayBuffer":case"string":case"Blob":case"any":o=e.body;break;default:o=JSON.stringify(e.body),a["Content-Type"]="application/json;charset=utf-8"}return r(r({httpBody:o},e),{headers:r(r({},a),e.headers)})}}},[["/EDR",0,2,1]]]);