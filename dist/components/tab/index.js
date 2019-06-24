/*! vue-czbui v2.0.13 by YDCSS (c) 2019 Licensed MIT */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.czbui=n():t.czbui=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s=72)}([function(t,n,e){"use strict";function r(t,n,e,r,o,i,u,c){var f,a="function"==typeof t?t.options:t;if(n&&(a.render=n,a.staticRenderFns=e,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},a._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(a.functional){a._injectStyles=f;var s=a.render;a.render=function(t,n){return f.call(n),s(t,n)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:a}}e.d(n,"a",function(){return r})},,function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,,function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(36),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(10),o=e(22),i=e(12),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(14),o=e(20);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},,,function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(35);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){t.exports=!e(3)&&!e(5)(function(){return 7!=Object.defineProperty(e(23)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(4),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(8),o=e(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(40)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(2),o=e(15),i=e(9),u=e(25)("src"),c=e(43),f=(""+c).split("toString");e(8).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},,function(t,n,e){},,,,,,,function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(11),o=e(38),i=e(39);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(13),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(13),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n){t.exports=!1},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(2),o=e(8),i=e(15),u=e(26),c=e(19),f=function(t,n,e){var a,s,p,l,v=t&f.F,d=t&f.G,y=t&f.S,_=t&f.P,b=t&f.B,h=d?r:y?r[n]||(r[n]={}):(r[n]||{}).prototype,m=d?o:o[n]||(o[n]={}),x=m.prototype||(m.prototype={});for(a in d&&(e=n),e)p=((s=!v&&h&&void 0!==h[a])?h:e)[a],l=b&&s?c(p,r):_&&"function"==typeof p?c(Function.call,p):p,h&&u(h,a,p,t&f.U),m[a]!=p&&i(m,a,l),_&&x[a]!=p&&(x[a]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){t.exports=e(24)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(51),o=e(20),i=e(11),u=e(12),c=e(9),f=e(22),a=Object.getOwnPropertyDescriptor;n.f=e(3)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(9),o=e(11),i=e(37)(!1),u=e(46)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(24)("keys"),o=e(25);t.exports=function(t){return r[t]||(r[t]=o(t))}},,function(t,n,e){"use strict";var r=e(2),o=e(9),i=e(18),u=e(49),c=e(12),f=e(5),a=e(52).f,s=e(44).f,p=e(14).f,l=e(53).trim,v=r.Number,d=v,y=v.prototype,_="Number"==i(e(55)(y)),b="trim"in String.prototype,h=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,i=(n=b?n.trim():l(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var u,f=n.slice(2),a=0,s=f.length;a<s;a++)if((u=f.charCodeAt(a))<48||u>o)return NaN;return parseInt(f,r)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof v&&(_?f(function(){y.valueOf.call(e)}):"Number"!=i(e))?u(new d(h(n)),e,v):h(n)};for(var m,x=e(3)?a(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;x.length>g;g++)o(d,m=x[g])&&!o(v,m)&&p(v,m,s(d,m));v.prototype=y,y.constructor=v,e(26)(r,"Number",v)}},function(t,n,e){var r=e(4),o=e(50).set;t.exports=function(t,n,e){var i,u=n.constructor;return u!==e&&"function"==typeof u&&(i=u.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},function(t,n,e){var r=e(4),o=e(10),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(19)(Function.call,e(44).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(45),o=e(41).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(42),o=e(21),i=e(5),u=e(54),c="["+u+"]",f=RegExp("^"+c+c+"*"),a=RegExp(c+c+"*$"),s=function(t,n,e){var o={},c=i(function(){return!!u[t]()||"​"!="​"[t]()}),f=o[t]=c?n(p):u[t];e&&(o[e]=f),r(r.P+r.F*c,"String",o)},p=s.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(a,"")),t};t.exports=s},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,e){var r=e(10),o=e(56),i=e(41),u=e(46)("IE_PROTO"),c=function(){},f=function(){var t,n=e(23)("iframe"),r=i.length;for(n.style.display="none",e(58).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(14),o=e(10),i=e(57);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(45),o=e(41);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},function(t,n,e){"use strict";var r=e(28);e.n(r).a},,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"weui-tab"},[e("div",{staticClass:"weui-navbar"},t._l(t.tabList,function(n,r,o){return e("div",{key:o,staticClass:"weui-navbar__item",class:{"weui-bar__item_on":t.activeTabIndex===r},on:{click:function(e){return t.toggleTab(n,r)}}},[t._v(t._s(n.label))])}),0)])};r._withStripped=!0;e(48);var o={name:"Tab",components:{},data:function(){return{}},props:{tabList:{default:[],type:Array},activeColor:{default:"#fff",type:String},activeTabIndex:{default:0,type:Number}},computed:{},mounted:function(){var t=this;this.$nextTick(function(){document.getElementsByClassName("weui-bar__item_on")[0].style="color: "+t.activeColor+";border-bottom: 1px solid "+t.activeColor})},methods:{toggleTab:function(t,n){this.activeIndex=n,this.$emit("checkTab",{item:t,index:n});for(var e=document.getElementsByClassName("weui-navbar__item"),r=0;r<e.length;r++)e[r].style=r===n?"color: "+this.activeColor+";border-color: "+this.activeColor:"color: #666;border-color: #fff"}}},i=(e(59),e(0)),u=Object(i.a)(o,r,[],!1,null,"9c4fe28a",null);u.options.__file="src/components/tab/tab.vue";var c=u.exports;n.default=c}])});