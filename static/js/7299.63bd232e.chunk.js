"use strict";(self.webpackChunkmarkdown_editor=self.webpackChunkmarkdown_editor||[]).push([[7299],{7299:function(r,n,t){function u(r,n){return r.skipToEnd(),n.cur=d,"error"}function e(r,n){return r.match(/^HTTP\/\d\.\d/)?(n.cur=c,"keyword"):r.match(/^[A-Z]+/)&&/[ \t]/.test(r.peek())?(n.cur=i,"keyword"):u(r,n)}function c(r,n){var t=r.match(/^\d+/);if(!t)return u(r,n);n.cur=o;var e=Number(t[0]);return e>=100&&e<400?"atom":"error"}function o(r,n){return r.skipToEnd(),n.cur=d,null}function i(r,n){return r.eatWhile(/\S/),n.cur=a,"string.special"}function a(r,n){return r.match(/^HTTP\/\d\.\d$/)?(n.cur=d,"keyword"):u(r,n)}function d(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function k(r){return r.skipToEnd(),null}t.r(n),t.d(n,{http:function(){return f}});var f={token:function(r,n){var t=n.cur;return t!=d&&t!=k&&r.eatSpace()?null:t(r,n)},blankLine:function(r){r.cur=k},startState:function(){return{cur:e}}}}}]);
//# sourceMappingURL=7299.63bd232e.chunk.js.map