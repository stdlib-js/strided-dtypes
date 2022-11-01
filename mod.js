// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,c=r.__lookupGetter__,f=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,n)||f.call(t,n)?(l=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=l):t[n]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,n,e.get),y&&u&&u.call(t,n,e.set),t};var l=n;function a(t,n,e){l(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function y(){return p.slice()}var s=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function b(){return s.slice()}function v(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function g(t,n,e){l(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function m(t){return Object.keys(Object(t))}var d=void 0!==Object.keys;var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return h&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function O(t,n){return null!=t&&_.call(t,n)}var S="function"==typeof Symbol?Symbol.toStringTag:"";var x=j()?function(t){var n,e,r;if(null==t)return w.call(t);e=t[S],n=O(t,S);try{t[S]=void 0}catch(n){return w.call(t)}return r=w.call(t),n?t[S]=e:delete t[S],r}:function(t){return w.call(t)};function E(t){return"[object Arguments]"===x(t)}var I=function(){return E(arguments)}();function P(t){return"string"==typeof t}var T=String.prototype.valueOf;var A=j();function N(t){return"object"==typeof t&&(t instanceof String||(A?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object String]"===x(t)))}function k(t){return P(t)||N(t)}function B(t){return"number"==typeof t}a(k,"isPrimitive",P),a(k,"isObject",N);var V=Number,F=V.prototype.toString;var L=j();function G(t){return"object"==typeof t&&(t instanceof V||(L?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object Number]"===x(t)))}function Y(t){return B(t)||G(t)}function C(t){return t!=t}function M(t){return B(t)&&C(t)}function X(t){return G(t)&&C(t.valueOf())}function H(t){return M(t)||X(t)}a(Y,"isPrimitive",B),a(Y,"isObject",G),a(H,"isPrimitive",M),a(H,"isObject",X);var W=Number.POSITIVE_INFINITY,D=V.NEGATIVE_INFINITY,R=Math.floor;function U(t){return R(t)===t}function q(t){return t<W&&t>D&&U(t)}function z(t){return B(t)&&q(t)}function J(t){return G(t)&&q(t.valueOf())}function K(t){return z(t)||J(t)}a(K,"isPrimitive",z),a(K,"isObject",J);var Q=Object.prototype.propertyIsEnumerable;var Z=!Q.call("beep","0");function $(t,n){var e;return null!=t&&(!(e=Q.call(t,n))&&Z&&k(t)?!M(n=+n)&&z(n)&&n>=0&&n<t.length:e)}var tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===x(t)};var nt=I?E:function(t){return null!==t&&"object"==typeof t&&!tt(t)&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=4294967295&&O(t,"callee")&&!$(t,"callee")},et=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}a(rt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!tt(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(rt));var ot=$((function(){}),"prototype"),it=!$({toString:null},"toString");function ut(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=9007199254740991}function ct(t,n,e){var r,o;if(!ut(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!z(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(H(n)){for(;o<r;o++)if(H(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var ft=/./;function lt(t){return"boolean"==typeof t}var at=Boolean.prototype.toString;var pt=j();function yt(t){return"object"==typeof t&&(t instanceof Boolean||(pt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===x(t)))}function st(t){return lt(t)||yt(t)}function bt(){return new Function("return this;")()}a(st,"isPrimitive",lt),a(st,"isObject",yt);var vt="object"==typeof self?self:null,gt="object"==typeof window?window:null,mt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},dt="object"==typeof mt?mt:null;var ht=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return bt()}if(vt)return vt;if(gt)return gt;if(dt)return dt;throw new Error("unexpected error. Unable to resolve global object.")}(),jt=ht.document&&ht.document.childNodes,wt=Int8Array;function _t(){return/^\s*function\s*([^(]*)/i}var Ot=/^\s*function\s*([^(]*)/i;function St(t){var n,e,r,o;if(("Object"===(e=x(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Ot.exec(r.toString()))return n[1]}return rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(_t,"REGEXP",Ot);var xt="function"==typeof ft||"object"==typeof wt||"function"==typeof jt?function(t){return St(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?St(t).toLowerCase():n};function Et(t){return t.constructor&&t.constructor.prototype===t}var It=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pt="undefined"==typeof window?void 0:window;var Tt=function(){var t;if("undefined"===xt(Pt))return!1;for(t in Pt)try{-1===ct(It,t)&&O(Pt,t)&&null!==Pt[t]&&"object"===xt(Pt[t])&&Et(Pt[t])}catch(t){return!0}return!1}(),At="undefined"!=typeof window;var Nt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var kt=d?function(){return 2!==(m(arguments)||"").length}(1,2)?function(t){return nt(t)?m(et.call(t)):m(t)}:m:function(t){var n,e,r,o,i,u,c;if(o=[],nt(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!O(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!rt(t))return o;e=ot&&r}for(i in t)e&&"prototype"===i||!O(t,i)||o.push(String(i));if(it)for(n=function(t){if(!1===At&&!Tt)return Et(t);try{return Et(t)}catch(t){return!1}}(t),c=0;c<Nt.length;c++)u=Nt[c],n&&"constructor"===u||!O(t,u)||o.push(String(u));return o};a(b,"enum",v),function(t,n){var e,r,o;for(e=kt(n),o=0;o<e.length;o++)g(t,r=e[o],n[r])}(b,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Bt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Vt(){return{bool:Bt.bool,int8:Bt.int8,uint8:Bt.uint8,uint8c:Bt.uint8c,int16:Bt.int16,uint16:Bt.uint16,int32:Bt.int32,uint32:Bt.uint32,int64:Bt.int64,uint64:Bt.uint64,float32:Bt.float32,float64:Bt.float64,complex64:Bt.complex64,complex128:Bt.complex128,binary:Bt.binary,generic:Bt.generic,notype:Bt.notype,userdefined_type:Bt.userdefined_type}}a(y,"enum",Vt),function(t,n){var e,r,o;for(e=kt(n),o=0;o<e.length;o++)g(t,r=e[o],n[r])}(y,Vt());export{y as default,Vt as enum};
//# sourceMappingURL=mod.js.map