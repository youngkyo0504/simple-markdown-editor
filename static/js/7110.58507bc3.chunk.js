"use strict";(self.webpackChunkmarkdown_editor=self.webpackChunkmarkdown_editor||[]).push([[7110],{7110:function(e,n,t){t.r(n),t.d(n,{brainfuck:function(){return m}});var o="><+-.,[]".split(""),m={startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(e,n){if(e.eatSpace())return null;e.sol()&&(n.commentLine=!1);var t=e.next().toString();return-1===o.indexOf(t)?(n.commentLine=!0,e.eol()&&(n.commentLine=!1),"comment"):!0===n.commentLine?(e.eol()&&(n.commentLine=!1),"comment"):"]"===t||"["===t?("["===t?n.left++:n.right++,"bracket"):"+"===t||"-"===t?"keyword":"<"===t||">"===t?"atom":"."===t||","===t?"def":void(e.eol()&&(n.commentLine=!1))}}}}]);
//# sourceMappingURL=7110.58507bc3.chunk.js.map