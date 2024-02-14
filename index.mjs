// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{enum as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.1.0-esm/index.mjs";var r=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function o(){return r.slice()}var s=n();function l(){return{bool:s.bool,int8:s.int8,uint8:s.uint8,uint8c:s.uint8c,int16:s.int16,uint16:s.uint16,int32:s.int32,uint32:s.uint32,int64:s.int64,uint64:s.uint64,float32:s.float32,float64:s.float64,complex64:s.complex64,complex128:s.complex128,binary:s.binary,generic:s.generic,notype:s.notype,userdefined_type:s.userdefined_type}}t(o,"enum",l),function(t,n){var r,o,s;for(r=i(n),s=0;s<r.length;s++)o=r[s],e(t,o,n[o])}(o,l());export{o as default,l as enum};
//# sourceMappingURL=index.mjs.map
