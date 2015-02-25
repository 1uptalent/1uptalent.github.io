/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function i(e){b.cssText=e}function r(e,t){return i(T.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var i in e){var r=e[i];if(!a(r,"-")&&b[r]!==n)return"pfx"==t?r:!0}return!1}function l(e,t,i){for(var r in e){var a=t[e[r]];if(a!==n)return i===!1?e[r]:o(a,"function")?a.bind(i||t):a}return!1}function u(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+k.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?s(r,t):(r=(e+" "+S.join(i+" ")+i).split(" "),l(r,t,n))}function c(){h.input=function(n){for(var i=0,r=n.length;r>i;i++)j[n[i]]=!!(n[i]in x);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var i,r,o,a=0,s=e.length;s>a;a++)x.setAttribute("type",r=e[a]),i="text"!==x.type,i&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&x.style.WebkitAppearance!==n?(g.appendChild(x),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?x.checkValidity&&x.checkValidity()===!1:x.value!=w)),N[e[a]]=!!i;return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.3",h={},m=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",_={}.toString,T=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),S=C.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},A={},N={},j={},M=[],F=M.slice,D=function(e,n,i,r){var o,a,s,l,u=t.createElement("div"),c=t.body,d=c||t.createElement("body");if(parseInt(i,10))for(;i--;)s=t.createElement("div"),s.id=r?r[i]:v+(i+1),u.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(c?u:d).innerHTML+=o,d.appendChild(u),c||(d.style.background="",d.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(u,e),c?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=l),!!a},q=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var i;return D("@media "+t+" { #"+v+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},L=function(){function e(e,r){r=r||t.createElement(i[e]||"div"),e="on"+e;var a=e in r;return a||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),a=o(r[e],"function"),o(r[e],"undefined")||(r[e]=n),r.removeAttribute(e))),r=null,a}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),z={}.hasOwnProperty;f=o(z,"undefined")||o(z.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return z.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=F.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=t.prototype;var o=new r,a=t.apply(o,n.concat(F.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(F.call(arguments)))};return i}),A.flexbox=function(){return u("flexWrap")},A.flexboxlegacy=function(){return u("boxDirection")},A.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},A.canvastext=function(){return!(!h.canvas||!o(t.createElement("canvas").getContext("2d").fillText,"function"))},A.webgl=function(){return!!e.WebGLRenderingContext},A.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:D(["@media (",T.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!e.postMessage},A.websqldatabase=function(){return!!e.openDatabase},A.indexedDB=function(){return!!u("indexedDB",e)},A.hashchange=function(){return L("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},A.history=function(){return!(!e.history||!history.pushState)},A.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},A.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},A.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},A.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},A.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},A.backgroundsize=function(){return u("backgroundSize")},A.borderimage=function(){return u("borderImage")},A.borderradius=function(){return u("borderRadius")},A.boxshadow=function(){return u("boxShadow")},A.textshadow=function(){return""===t.createElement("div").style.textShadow},A.opacity=function(){return r("opacity:.55"),/^0.55$/.test(b.opacity)},A.cssanimations=function(){return u("animationName")},A.csscolumns=function(){return u("columnCount")},A.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((e+"-webkit- ".split(" ").join(t+e)+T.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},A.cssreflections=function(){return u("boxReflect")},A.csstransforms=function(){return!!u("transform")},A.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},A.csstransitions=function(){return u("transition")},A.fontface=function(){var e;return D('@font-face {font-family:"font";src:url("https://")}',function(n,i){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(i.split(" ")[0])}),e},A.generatedcontent=function(){var e;return D(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},A.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},A.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},A.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},A.webworkers=function(){return!!e.Worker},A.applicationcache=function(){return!!e.applicationCache},A.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},A.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==E.svg},A.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(_.call(t.createElementNS(E.svg,"animate")))},A.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(_.call(t.createElementNS(E.svg,"clipPath")))};for(var O in A)f(A,O)&&(d=O.toLowerCase(),h[d]=A[O](),M.push((h[d]?"":"no-")+d));return h.input||c(),h.addTest=function(e,t){if("object"==typeof e)for(var i in e)f(e,i)&&h.addTest(i,e[i]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},i(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=v[e[m]];return t||(t={},g++,e[m]=g,v[g]=t),t}function o(e,n,i){if(n||(n=t),c)return n.createElement(e);i||(i=r(n));var o;return o=i.cache[e]?i.cache[e].cloneNode():h.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:i.frag.appendChild(o)}function a(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),a=0,s=i(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var i=r(e);return!y.shivCSS||u||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(e,i),e}var u,c,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,c=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:a};e.html5=y,l(t)}(this,t),h._version=p,h._prefixes=T,h._domPrefixes=S,h._cssomPrefixes=k,h.mq=q,h.hasEvent=L,h.testProp=function(e){return s([e])},h.testAllProps=u,h.testStyles=D,h.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+M.join(" "):""),h}(this,this.document);