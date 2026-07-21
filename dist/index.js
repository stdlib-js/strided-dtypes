"use strict";var u=function(i,t){return function(){try{return t||i((t={exports:{}}).exports,t),t.exports}catch(n){throw (t=0, n)}};};var s=u(function(D,x){x.exports=["binary","bool","complex64","complex128","float16","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"]});var c=u(function(E,l){
var d=s();function q(){return d.slice()}l.exports=q
});var f=u(function(K,p){
var b=require('@stdlib/ndarray-base-dtype-enums/dist'),e=b();function g(){return{bool:e.bool,int8:e.int8,uint8:e.uint8,uint8c:e.uint8c,int16:e.int16,uint16:e.uint16,int32:e.int32,uint32:e.uint32,int64:e.int64,uint64:e.uint64,float16:e.float16,float32:e.float32,float64:e.float64,complex64:e.complex64,complex128:e.complex128,binary:e.binary,generic:e.generic,notype:e.notype,userdefined_type:e.userdefined_type}}p.exports=g
});var v=u(function(P,y){
var k=require('@stdlib/utils-define-read-only-property/dist'),O=require('@stdlib/utils-keys/dist');function R(i,t){var n,o,r;for(n=O(t),r=0;r<n.length;r++)o=n[r],k(i,o,t[o]);return i}y.exports=R
});var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=c(),m=f(),h=v();_(a,"enum",m);h(a,m());module.exports=a;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
