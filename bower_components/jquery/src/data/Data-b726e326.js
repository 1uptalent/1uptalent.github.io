define(["../core","../var/rnotwhite","./accepts"],function(t,e){function n(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=t.expando+n.uid++}return n.uid=1,n.accepts=t.acceptData,n.prototype={key:function(e){if(!n.accepts(e))return 0;var i={},r=e[this.expando];if(!r){r=n.uid++;try{i[this.expando]={value:r},Object.defineProperties(e,i)}catch(s){i[this.expando]=r,t.extend(e,i)}}return this.cache[r]||(this.cache[r]={}),r},set:function(e,n,i){var r,s=this.key(e),o=this.cache[s];if("string"==typeof n)o[n]=i;else if(t.isEmptyObject(o))t.extend(this.cache[s],n);else for(r in n)o[r]=n[r];return o},get:function(t,e){var n=this.cache[this.key(t)];return void 0===e?n:n[e]},access:function(e,n,i){var r;return void 0===n||n&&"string"==typeof n&&void 0===i?(r=this.get(e,n),void 0!==r?r:this.get(e,t.camelCase(n))):(this.set(e,n,i),void 0!==i?i:n)},remove:function(n,i){var r,s,o,a=this.key(n),l=this.cache[a];if(void 0===i)this.cache[a]={};else{t.isArray(i)?s=i.concat(i.map(t.camelCase)):(o=t.camelCase(i),i in l?s=[i,o]:(s=o,s=s in l?[s]:s.match(e)||[])),r=s.length;for(;r--;)delete l[s[r]]}},hasData:function(e){return!t.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(t){t[this.expando]&&delete this.cache[t[this.expando]]}},n});