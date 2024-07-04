// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dtypes=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(t){return"number"==typeof t}function r(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function i(t,e,n){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=n?t+r(o):r(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var e,r,u;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,u=parseInt(r,10),!isFinite(u)){if(!n(r))throw new Error("invalid integer. Value: "+r);u=0}return u<0&&("u"===t.specifier||10!==e)&&(u=4294967295+u+1),u<0?(r=(-u).toString(e),t.precision&&(r=i(r,t.precision,t.padRight)),r="-"+r):(r=u.toString(e),u||t.precision?t.precision&&(r=i(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===a.call(t.specifier)?a.call(r):o.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function m(t){var e,r,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+r);i=t.arg}switch(t.specifier){case"e":case"E":r=i.toExponential(t.precision);break;case"f":case"F":r=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((e=t.precision)>0&&(e-=1),r=i.toExponential(e)):r=i.toPrecision(t.precision),t.alternate||(r=s.call(r,v,"$1e"),r=s.call(r,h,"e"),r=s.call(r,b,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=s.call(r,p,"e+0$1"),r=s.call(r,g,"e-0$1"),t.alternate&&(r=s.call(r,d,"$1."),r=s.call(r,y,"$1.e")),i>=0&&t.sign&&(r=t.sign+r),r=t.specifier===f.call(t.specifier)?f.call(r):l.call(r)}function w(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}var x=String.fromCharCode,j=isNaN,_=Array.isArray;function S(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function E(t){var e,n,r,o,a,c,l,f,s,p,g,d,y;if(!_(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",l=1,f=0;f<t.length;f++)if(r=t[f],"string"==typeof r)c+=r;else{if(e=void 0!==r.precision,!(r=S(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+r+"`.");for(r.mapping&&(l=r.mapping),n=r.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[l],10),l+=1,j(r.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[l],10),l+=1,j(r.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[l],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=u(r);break;case"s":r.maxWidth=e?r.precision:-1;break;case"c":if(!j(r.arg)){if((a=parseInt(r.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=j(a)?String(r.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=m(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=i(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(p=r.arg,g=r.width,d=r.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+w(y):w(y)+p)),c+=r.arg||"",l+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function T(t){var e,n,r,i;for(n=[],i=0,r=O.exec(t);r;)(e=t.slice(i,O.lastIndex-r[0].length)).length&&n.push(e),n.push(k(r)),i=O.lastIndex,r=O.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function I(t){var e,n;if("string"!=typeof t)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[T(t)],n=1;n<arguments.length;n++)e.push(arguments[n]);return E.apply(null,e)}var A,V=Object.prototype,P=V.toString,F=V.__defineGetter__,N=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;A=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,n){var r,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(t,e)||C.call(t,e)?(r=t.__proto__,t.__proto__=V,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(t,e,n.get),a&&N&&N.call(t,e,n.set),t};var B=A;function L(t,e,n){B(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var R=["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function G(){return R.slice()}var W={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function X(){var t;return 0===arguments.length?W.all.slice():(t=W[arguments[0]])?t.slice():[]}function Z(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function M(t,e,n){B(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function Y(t){return Object.keys(Object(t))}var U=void 0!==Object.keys;var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return H&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function J(t,e){return null!=t&&q.call(t,e)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var tt,et=z()?function(t){var e,n,r;if(null==t)return D.call(t);n=t[Q],e=J(t,Q);try{t[Q]=void 0}catch(e){return D.call(t)}return r=D.call(t),e?t[Q]=n:delete t[Q],r}:function(t){return D.call(t)};function nt(t){return"[object Arguments]"===et(t)}tt=function(){return nt(arguments)}();var rt=tt;function it(t){return"string"==typeof t}var ot=String.prototype.valueOf;var at=z();function ut(t){return"object"==typeof t&&(t instanceof String||(at?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object String]"===et(t)))}function ct(t){return it(t)||ut(t)}function lt(t){return"number"==typeof t}L(ct,"isPrimitive",it),L(ct,"isObject",ut);var ft=Number,st=ft.prototype.toString;var pt=z();function gt(t){return"object"==typeof t&&(t instanceof ft||(pt?function(t){try{return st.call(t),!0}catch(t){return!1}}(t):"[object Number]"===et(t)))}function dt(t){return lt(t)||gt(t)}function yt(t){return t!=t}function bt(t){return lt(t)&&yt(t)}function ht(t){return gt(t)&&yt(t.valueOf())}function vt(t){return bt(t)||ht(t)}L(dt,"isPrimitive",lt),L(dt,"isObject",gt),L(vt,"isPrimitive",bt),L(vt,"isObject",ht);var mt=Number.POSITIVE_INFINITY,wt=ft.NEGATIVE_INFINITY,xt=Math.floor;function jt(t){return xt(t)===t}function _t(t){return t<mt&&t>wt&&jt(t)}function St(t){return lt(t)&&_t(t)}function Et(t){return gt(t)&&_t(t.valueOf())}function Ot(t){return St(t)||Et(t)}L(Ot,"isPrimitive",St),L(Ot,"isObject",Et);var kt=Object.prototype.propertyIsEnumerable;var Tt=!kt.call("beep","0");function It(t,e){var n;return null!=t&&(!(n=kt.call(t,e))&&Tt&&ct(t)?!bt(e=+e)&&St(e)&&e>=0&&e<t.length:n)}var At=Array.isArray?Array.isArray:function(t){return"[object Array]"===et(t)};var Vt=rt?nt:function(t){return null!==t&&"object"==typeof t&&!At(t)&&"number"==typeof t.length&&jt(t.length)&&t.length>=0&&t.length<=4294967295&&J(t,"callee")&&!It(t,"callee")},Pt=Array.prototype.slice;function Ft(t){return null!==t&&"object"==typeof t}L(Ft,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!At(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(Ft));var Nt=It((function(){}),"prototype"),$t=!It({toString:null},"toString"),Ct=9007199254740991;function Bt(t,e,n){var r,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&jt(o.length)&&o.length>=0&&o.length<=Ct||it(t)))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!St(n))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(vt(e)){for(;i<r;i++)if(vt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}var Lt=/./;function Rt(t){return"boolean"==typeof t}var Gt=Boolean,Wt=Boolean.prototype.toString;var Xt=z();function Zt(t){return"object"==typeof t&&(t instanceof Gt||(Xt?function(t){try{return Wt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===et(t)))}function Mt(t){return Rt(t)||Zt(t)}L(Mt,"isPrimitive",Rt),L(Mt,"isObject",Zt);var Yt="object"==typeof self?self:null,Ut="object"==typeof window?window:null,Ht="object"==typeof global?global:null,zt="object"==typeof globalThis?globalThis:null;var Dt=function(t){if(arguments.length){if(!Rt(t))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(zt)return zt;if(Yt)return Yt;if(Ut)return Ut;if(Ht)return Ht;throw new Error("unexpected error. Unable to resolve global object.")}(),qt=Dt.document&&Dt.document.childNodes,Jt=Int8Array;function Kt(){return/^\s*function\s*([^(]*)/i}var Qt=/^\s*function\s*([^(]*)/i;function te(t){var e,n,r,i;if(("Object"===(n=et(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Qt.exec(r.toString()))return e[1]}return Ft(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}L(Kt,"REGEXP",Qt);var ee="function"==typeof Lt||"object"==typeof Jt||"function"==typeof qt?function(t){return te(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?te(t).toLowerCase():e};function ne(t){return t.constructor&&t.constructor.prototype===t}var re=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ie="undefined"==typeof window?void 0:window;var oe=function(){var t;if("undefined"===ee(ie))return!1;for(t in ie)try{-1===Bt(re,t)&&J(ie,t)&&null!==ie[t]&&"object"===ee(ie[t])&&ne(ie[t])}catch(t){return!0}return!1}(),ae="undefined"!=typeof window;var ue,ce=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ue=U?function(){return 2!==(Y(arguments)||"").length}(1,2)?function(t){return Vt(t)?Y(Pt.call(t)):Y(t)}:Y:function(t){var e,n,r,i,o,a,u;if(i=[],Vt(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!J(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(r="function"==typeof t)&&!Ft(t))return i;n=Nt&&r}for(o in t)n&&"prototype"===o||!J(t,o)||i.push(String(o));if($t)for(e=function(t){if(!1===ae&&!oe)return ne(t);try{return ne(t)}catch(t){return!1}}(t),u=0;u<ce.length;u++)a=ce[u],e&&"constructor"===a||!J(t,a)||i.push(String(a));return i};var le=ue;L(X,"enum",Z),function(t,e){var n,r,i;for(n=le(e),i=0;i<n.length;i++)M(t,r=n[i],e[r])}(X,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var fe={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function se(){return{bool:fe.bool,int8:fe.int8,uint8:fe.uint8,uint8c:fe.uint8c,int16:fe.int16,uint16:fe.uint16,int32:fe.int32,uint32:fe.uint32,int64:fe.int64,uint64:fe.uint64,float32:fe.float32,float64:fe.float64,complex64:fe.complex64,complex128:fe.complex128,binary:fe.binary,generic:fe.generic,notype:fe.notype,userdefined_type:fe.userdefined_type}}return L(G,"enum",se),function(t,e){var n,r,i;for(n=le(e),i=0;i<n.length;i++)M(t,r=n[i],e[r])}(G,se()),G}));
//# sourceMappingURL=index.js.map
