/*! http://mths.be/placeholder v2.0.9 by @mathias */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e){var n={},i=/^jQuery\d+$/;return t.each(e.attributes,function(t,e){e.specified&&!i.test(e.name)&&(n[e.name]=e.value)}),n}function n(e,n){var i=this,s=t(i);if(i.value==s.attr("placeholder")&&s.hasClass("placeholder"))if(s.data("placeholder-password")){if(s=s.hide().nextAll('input[type="password"]:first').show().attr("id",s.removeAttr("id").data("placeholder-id")),e===!0)return s[0].value=n;s.focus()}else i.value="",s.removeClass("placeholder"),i==r()&&i.select()}function i(){var i,r=this,s=t(r),o=this.id;if(""===r.value){if("password"===r.type){if(!s.data("placeholder-textinput")){try{i=s.clone().attr({type:"text"})}catch(a){i=t("<input>").attr(t.extend(e(this),{type:"text"}))}i.removeAttr("name").data({"placeholder-password":s,"placeholder-id":o}).bind("focus.placeholder",n),s.data({"placeholder-textinput":i,"placeholder-id":o}).before(i)}s=s.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",o).show()}s.addClass("placeholder"),s[0].value=s.attr("placeholder")}else s.removeClass("placeholder")}function r(){try{return document.activeElement}catch(t){}}var s,o,a="[object OperaMini]"==Object.prototype.toString.call(window.operamini),l="placeholder"in document.createElement("input")&&!a,c="placeholder"in document.createElement("textarea")&&!a,u=t.valHooks,d=t.propHooks;l&&c?(o=t.fn.placeholder=function(){return this},o.input=o.textarea=!0):(o=t.fn.placeholder=function(){var t=this;return t.filter((l?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":i}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},o.input=l,o.textarea=c,s={get:function(e){var n=t(e),i=n.data("placeholder-password");return i?i[0].value:n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":e.value},set:function(e,s){var o=t(e),a=o.data("placeholder-password");return a?a[0].value=s:o.data("placeholder-enabled")?(""===s?(e.value=s,e!=r()&&i.call(e)):o.hasClass("placeholder")?n.call(e,!0,s)||(e.value=s):e.value=s,o):e.value=s}},l||(u.input=s,d.value=s),c||(u.textarea=s,d.value=s),t(function(){t(document).delegate("form","submit.placeholder",function(){var e=t(".placeholder",this).each(n);setTimeout(function(){e.each(i)},10)})}),t(window).bind("beforeunload.placeholder",function(){t(".placeholder").each(function(){this.value=""})}))});