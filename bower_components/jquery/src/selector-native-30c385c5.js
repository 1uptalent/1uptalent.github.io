define(["./core"],function(t){var e,n=window.document.documentElement,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.msMatchesSelector,r=function(n,i){if(n===i)return e=!0,0;var r=i.compareDocumentPosition&&n.compareDocumentPosition&&n.compareDocumentPosition(i);return r?1&r?n===document||t.contains(document,n)?-1:i===document||t.contains(document,i)?1:0:4&r?-1:1:n.compareDocumentPosition?-1:1};t.extend({find:function(e,n,i,r){var s,o,a=0;if(i=i||[],n=n||document,!e||"string"!=typeof e)return i;if(1!==(o=n.nodeType)&&9!==o)return[];if(r)for(;s=r[a++];)t.find.matchesSelector(s,e)&&i.push(s);else t.merge(i,n.querySelectorAll(e));return i},unique:function(t){var n,i=[],s=0,o=0;if(e=!1,t.sort(r),e){for(;n=t[s++];)n===t[s]&&(o=i.push(s));for(;o--;)t.splice(i[o],1)}return t},text:function(e){var n,i="",r=0,s=e.nodeType;if(s){if(1===s||9===s||11===s)return e.textContent;if(3===s||4===s)return e.nodeValue}else for(;n=e[r++];)i+=t.text(n);return i},contains:function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!n.contains(i))},isXMLDoc:function(t){return"HTML"!==(t.ownerDocument||t).documentElement.nodeName},expr:{attrHandle:{},match:{bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),t.extend(t.find,{matches:function(e,n){return t.find(e,null,null,n)},matchesSelector:function(t,e){return i.call(t,e)},attr:function(t,e){return t.getAttribute(e)}})});