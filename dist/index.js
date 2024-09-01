"use strict";var r=function(n,t){return function(){return t||n((t={exports:{}}).exports,t),t.exports}};var s=r(function(D,x){x.exports=["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"]});var l=r(function(E,c){
var d=s();function q(){return d.slice()}c.exports=q
});var y=r(function(K,p){
var b=require('@stdlib/ndarray-dtypes/dist').enum,e=b();function g(){return{bool:e.bool,int8:e.int8,uint8:e.uint8,uint8c:e.uint8c,int16:e.int16,uint16:e.uint16,int32:e.int32,uint32:e.uint32,int64:e.int64,uint64:e.uint64,float32:e.float32,float64:e.float64,complex64:e.complex64,complex128:e.complex128,binary:e.binary,generic:e.generic,notype:e.notype,userdefined_type:e.userdefined_type}}p.exports=g
});var v=r(function(P,f){
var k=require('@stdlib/utils-define-read-only-property/dist'),O=require('@stdlib/utils-keys/dist');function R(n,t){var u,o,i;for(u=O(t),i=0;i<u.length;i++)o=u[i],k(n,o,t[o]);return n}f.exports=R
});var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=l(),m=y(),h=v();_(a,"enum",m);h(a,m());module.exports=a;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
