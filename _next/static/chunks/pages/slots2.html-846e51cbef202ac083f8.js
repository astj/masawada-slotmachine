_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{KQm4:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},iEZH:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/slots2.html",function(){return r("vnwy")}])},vnwy:function(t,e,r){"use strict";r.r(e);var n=r("nKUr"),o=r("q1tI"),c=r("x5ES"),a=r("rePB"),i=r("DafO"),u=r("8RR/");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=function(t){var e=t.propss,r=t.isRolling,c=t.start;Object(o.useEffect)((function(){c()}),[]);return Object(n.jsx)(i.a,{renderMa:function(){return Object(n.jsx)(u.a,l({},e[0]))},renderSa:function(){return Object(n.jsx)(u.a,l({},e[1]))},renderWa:function(){return Object(n.jsx)(u.a,l({},e[2]))},renderDa:function(){return Object(n.jsx)(u.a,l({},e[3]))},buttonDisabled:r,onButtonClick:c})},b=r("KQm4"),p=r("fTbV"),j=function(t){var e=t.expected,r=t.onStopped,n=t.renderPresenter,c=p.a,a=Object(o.useCallback)((function(t){return t.length===c.length&&Object(b.a)(t).every((function(t){return void 0!==t}))}),[c.length]),i=Object(o.useState)("stopped"),s=i[0],l=i[1],f=Object(o.useRef)([]),j=Object(o.useCallback)((function(){var t=f.current;a(t)&&(console.log(f),t.join("-")===e.join("-")?window.alert("success!"):window.alert("\u6b8b\u5ff5\u3067\u3057\u305f\uff01"),r(t),f.current=[],l("stopped"))}),[e,a,r]),O=c.map((function(t,e){return Object(o.useCallback)((function(t){f.current[e]=t,j()}),[])})),d=c.map((function(t,e){return Object(u.c)({initialSymbol:t,onStop:O[e]})}));return n({propss:d.map((function(t){return t.props})),start:function(){l("rolling"),d.forEach((function(t){return(0,t.start)()}))},isRolling:"rolling"==s})};function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=function(t){return Object(n.jsx)(j,d(d({},t),{},{expected:["ma","sa","wa","da"],renderPresenter:function(t){return Object(n.jsx)(f,d({},t))}}))},h=r("nOHt");function w(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"===typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,e)}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){i=!0,c=t},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw c}}}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var m=function(t){var e=new URLSearchParams;if(void 0!==t.message&&e.set("text",t.message),void 0!==t.hashtags){var r,n=w(t.hashtags);try{for(n.s();!(r=n.n()).done;){var o=r.value;e.append("hashtags",o)}}catch(c){n.e(c)}finally{n.f()}}return void 0!==t.url&&e.set("url",t.url),e},v={backgroundColor:"blue",border:"none",color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px"},x={color:"white",textDecoration:"none"},S=function(t){return Object(n.jsx)("button",{style:v,children:Object(n.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/intent/tweet?".concat(m(t)),style:x,children:"Tweet your result"})})};function P(t){var e={ma:"\u30de",sa:"\u30b5",wa:"\u30ef",da:"\u30c0"};return t.map((function(t){return e[t]})).join("\u2192")}var E=function(t){var e=t.result,r=Object(h.useRouter)(),o=void 0!==e?"".concat(window.location.origin).concat([r.basePath,"slots2"].concat(Object(b.a)(e)).join("/")):window.location.href;return void 0!==e?Object(n.jsx)(S,{message:P(e),url:o,hashtags:["masawadaslot"]}):null};e.default=function(){var t=Object(o.useState)(),e=t[0],r=t[1],a=function(t){return r(t)};return Object(n.jsx)(c.a,{twitterImagePath:"/thumbnails/masawada.png",renderSlot:function(){return Object(n.jsx)(y,{onStopped:a})},renderShare:function(){return e?Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)(E,{result:e})}):Object(n.jsx)(n.Fragment,{})}})}}},[["iEZH",0,1,2,3]]]);