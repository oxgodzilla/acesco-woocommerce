!function(e){function t(t){for(var n,a,c=t[0],u=t[1],s=t[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);d.length;)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=__webpack_require__(__webpack_require__.s=r[0]))}return e}var n={},i={7:0},o=[];function __webpack_require__(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.src=function(e){return __webpack_require__.p+""+({1:"chunk-googlesitekit-adminbar~chunk-googlesitekit-setup-wizard-proxy",2:"chunk-googlesitekit-adminbar",29:"vendors~chunk-googlesitekit-adminbar"}[e]||e)+"-"+{1:"f262ebd34a6cc64e6bbf",2:"ad11dbd1f0f2b08919e9",29:"c8385ea6733d96b76f10"}[e]+".js"}(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(u);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}i[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},__webpack_require__.m=e,__webpack_require__.c=n,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__.oe=function(e){throw console.error(e),e};var a=window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([656,0]),r()}({11:function(e,t){e.exports=googlesitekit.data},36:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n="_googlesitekitDataLayer",i="data-googlesitekit-gtag"},39:function(e,t){e.exports=googlesitekit.api},50:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return d}));var n=r(78),i=e._googlesitekitBaseData||{},o=i.isFirstAdmin,a=i.trackingAllowed,c={isFirstAdmin:o,trackingEnabled:i.trackingEnabled,trackingID:i.trackingID,referenceSiteURL:i.referenceSiteURL,userIDHash:i.userIDHash},u=Object(n.a)(c),l=u.enableTracking,s=u.disableTracking,f=u.isTrackingEnabled,d=u.trackEvent;function p(e){e?l():s()}!0===a&&p(f())}).call(this,r(15))},54:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(36);function i(e){return function(){e[n.a]=e[n.a]||[],e[n.a].push(arguments)}}},61:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return f}));var n=r(30),i=r.n(n),o=r(0);function a(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=null,r=null,n=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),i=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(n&&i)return!1;if(t=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),r=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===t&&null===r)return!1;var a=document.createElement("span");a.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(e));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=e;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(o.sprintf)(
/* translators: %d is the number of notifications */
Object(o._n)("%d notification","%d notifications",e,"google-site-kit"),e),a.appendChild(c),a.appendChild(u),t&&null===n&&t.appendChild(a),r&&null===i&&r.appendChild(a),a},l=function(){e.localStorage&&e.localStorage.clear(),e.sessionStorage&&e.sessionStorage.clear()},s=function(e){for(var t=location.search.substr(1).split("&"),r={},n=0;n<t.length;n++)r[t[n].split("=")[0]]=decodeURIComponent(t[n].split("=")[1]);return e?r.hasOwnProperty(e)?decodeURIComponent(r[e].replace(/\+/g," ")):"":r},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,r=new URL(t.href);if(e)return r.searchParams&&r.searchParams.get?r.searchParams.get(e):s(e);var n,o={},c=a(r.searchParams.entries());try{for(c.s();!(n=c.n()).done;){var u=i()(n.value,2),l=u[0],f=u[1];o[l]=f}}catch(e){c.e(e)}finally{c.f()}return o}}).call(this,r(15))},656:function(e,t,r){"use strict";r.r(t),function(e){var t=r(61),n=r(50);e.googlesitekitAdminbar&&e.googlesitekitAdminbar.publicPath&&(r.p=e.googlesitekitAdminbar.publicPath);var i=!1;function o(){Promise.all([r.e(29),r.e(1),r.e(2)]).then(r.bind(null,667)).then((function(e){return e})).catch((function(){return new Error("Site Kit: An error occurred while loading the Adminbar component files.")})).then((function(e){try{e.init()}catch(e){console.error("Site Kit: An error occurred while loading the Adminbar components."),document.getElementById("js-googlesitekit-adminbar").classList.add("googlesitekit-adminbar--has-error")}document.getElementById("js-googlesitekit-adminbar").classList.remove("googlesitekit-adminbar--loading")}))}e.addEventListener("load",(function(){var r=document.getElementById("wp-admin-bar-google-site-kit");if(r&&e.localStorage){var a=e.localStorage.getItem("googlesitekit::total-notifications")||0;Object(t.a)(a);var c=function(){i||(Object(n.c)("admin_bar","page_stats_view"),o(),i=!0)};"true"===Object(t.c)("googlesitekit_adminbar_open")?(c(),r.classList.add("hover")):r.addEventListener("mouseenter",c,!1)}}))}.call(this,r(15))},78:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return s}));var n=r(12),i=r.n(n),o=r(79),a=r(80);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function s(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,i=u(u({},l),t);return i.referenceSiteURL&&(i.referenceSiteURL=i.referenceSiteURL.toString().replace(/\/+$/,"")),{enableTracking:Object(o.a)(i,r),disableTracking:function(){i.trackingEnabled=!1},isTrackingEnabled:function(){return!!i.trackingEnabled},trackEvent:Object(a.a)(i,r,n)}}}).call(this,r(15))},79:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o}));var n=r(54),i=r(36);function o(t,r){var o=Object(n.a)(r);return function(){t.trackingEnabled=!0;var r=e.document;if(!r.querySelector("script[".concat(i.b,"]"))){var n=r.createElement("script");n.setAttribute(i.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID,"&l=").concat(i.a),r.head.appendChild(n),o("js",new Date),o("config",t.trackingID)}}}}).call(this,r(15))},80:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return d}));var n=r(4),i=r.n(n),o=r(12),a=r.n(o),c=r(14),u=r.n(c),l=r(54);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(t,r,n){var o=Object(l.a)(r);return function(){var r=u()(i.a.mark((function r(a,c){var u,l,s,d,p,g,b,_,m,v,h=arguments;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=h.length>2&&void 0!==h[2]?h[2]:"",d=h.length>3&&void 0!==h[3]?h[3]:"",p=t.isFirstAdmin,g=t.referenceSiteURL,b=t.trackingEnabled,_=t.trackingID,m=t.userIDHash,!(null===(u=n._gaUserPrefs)||void 0===u||null===(l=u.ioo)||void 0===l?void 0:l.call(u))){r.next=5;break}return r.abrupt("return");case 5:if(b){r.next=7;break}return r.abrupt("return");case 7:return v={send_to:_,event_category:a,event_label:s,event_value:d,dimension1:g,dimension2:p?"true":"false",dimension3:m},r.abrupt("return",new Promise((function(t){var r=setTimeout((function(){e.console.warn('Tracking event "'.concat(c,'" (category "').concat(a,'") took too long to fire.')),t()}),1e3);o("event",c,f(f({},v),{},{event_callback:function(){clearTimeout(r),t()}}))})));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}}).call(this,r(15))}});