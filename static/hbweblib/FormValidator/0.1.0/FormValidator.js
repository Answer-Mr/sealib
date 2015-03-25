define("pafweblib/FormValidator/0.1.0/FormValidator",["$"],function(a,b,c){"use strict";function d(a,b){var c=this;this.form=a,this.options=e.extend({},i,b),this.methods=e.extend({},j),this.fields=a.find(h),this.allowed_rules=[],this.errors={},c._novalidate_old=c.form.attr("novalidate");try{c.form.attr("novalidate","novalidate")}catch(d){}}var e=a("$"),f="pafweblib.FormValidator",g=['input:not([type]),input[type="color"],input[type="date"],input[type="datetime"],input[type="datetime-local"],input[type="email"],input[type="file"],input[type="hidden"],input[type="month"],input[type="number"],input[type="password"],input[type="range"],input[type="search"],input[type="tel"],input[type="text"],input[type="time"],input[type="url"],input[type="week"],textarea',"select",'input[type="checkbox"],input[type="radio"]'],h=g.join(","),i={isAjax:!1,onSubmit:!0,onBlur:!0,onChange:!1,onKeyup:!1,wrapper:"div.control-group",success:{},fail:{},rules:{}},j={required:function(a,b){return null!==b&&e.trim(b).length>0},minlength:function(a,b,c,d){var f=e.trim(b).length,g=f>=c;return d.required||(g=g&&0!==f),g},maxlength:function(a,b,c){return e.trim(b).length<=c},regex:function(a,b,c){return c.test(b)},email:function(a,b){var c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;return c.test(e.trim(b))},url:function(a,b){var c=/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return c.test(b)},equals:function(a,b,c){return b===c},ip:function(a,b){var c=/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i;return c.test(e.trim(b))},phone:function(a,b){var c=/^1[3458][0-9]{9}$/i;return c.test(e.trim(b))},alpha:function(a,b){var c=/^[a-z]*$/i;return c.test(b)},alpha_numeric:function(a,b){var c=/^[a-z0-9]*$/i;return c.test(b)},alpha_dash:function(a,b){var c=/^[a-z0-9_\-]*$/i;return c.test(b)},digit:function(a,b){var c=/^\d*$/;return c.test(b)},numeric:function(a,b){var c=/^([\+\-]?[0-9]+(\.[0-9]+)?)?$/;return c.test(b)},matches:function(a,b,c,d){var f=e.trim(b).length,g=b===this.fields.filter('[data-id="'+c+'"]').val();return d.required||(g=g&&0!==f),g}},k={required:"输入值不能为空",minlength:"输入值不能少于 :value 个字符",maxlength:"输入值不能超过 :value 个字符",regex:"请输入正确的值",email:"请输入正确的邮箱格式,如:pafweblib@pingan.com.cn",url:"请输入正确的url地址,如:http://www.1qianbao.com",equals:"输入值必须等于 :value",ip:"请输入正确的ip地址格式,如:10.1.1.1",phone:"请输入正确的电话号码,如:18688888888",alpha:"输入值只能是a-z之间的小写字母",alpha_numeric:"输入值只能是a-z或0-9",alpha_dash:"输入值只能是a-z,0-9或下划线(_)和(-)",digit:"该项只能输入整数",numeric:"该项只能输入数字",matches:"请再次输入相同的值"};e.extend(d.prototype,{validate:function(){var a=this;a.fields.filter(g[0]).each(function(){var b=e(this);b.trigger([f,"validate"].join("."),[a]),a.errors[b.data("id")]?a.renderError.call(a,e(this)):a.clearError.call(a,e(this))})},validateField:function(a,b){var c=e(this),d={},g=c.data("id"),h=null;if(!c.is(":disabled")){delete b.errors[g],h=c.is('[type="checkbox"], [type="radio"]')?c.is(":checked")?c.val():null:c.val();var i=b.options.rules[g],j=!0;if(i)if(i=i.split("|"),e.each(i,function(a,c){if(-1!==e.inArray(c,b.allowed_rules))d[c]=null;else{var f=c.split(":");2===f.length&&-1!==e.inArray(f[0],b.allowed_rules)&&(d[f[0]]=f[1])}}),e.each(d,function(a,c){return b.methods[a].call(b,g,h,c,d)!==!0?(b.errors[g]=b.format.call(b,g,a,c),j=!1,!1):(delete b.errors[g],void 0)}),j){var k=b.options.success[g];k&&k.call(b,c)}else{var l=b.options.fail[g];l&&l.call(b,c)}e(b).trigger([f,"validate"].join("."),[c,function(a){b.errors[c.data("id")]=a}])}},format:function(a,b,c){var d;return d="undefined"!=typeof this.options.messages[a]&&"undefined"!=typeof this.options.messages[a][b]?this.options.messages[a][b]:k[b],"undefined"!==e.type(c)&&null!==c&&(("boolean"===e.type(c)||"string"===e.type(c)||"number"===e.type(c))&&(c={value:c}),e.each(c,function(a,b){d=d.replace(new RegExp(":"+a,"ig"),b)})),d},clearError:function(a){a=e(a);var b=a.closest("div.controls").children("div.help-block");null!==this.options.wrapper&&a.closest(this.options.wrapper).removeClass("control-group-error"),b.html("")},renderError:function(a){a=e(a);var b=a.closest("div.controls").children("div.help-block");null!==this.options.wrapper&&a.closest(this.options.wrapper).addClass("control-group-error"),0===b.length&&(b=e("<div/>",{"class":"help-block"}),a.closest("div.controls").children(":last").after(b)),b.html(this.errors[a.data("id")])},clearErrors:function(){},renderErrors:function(){},extendRules:function(a){e.extend(this.methods,a)},parseDom:function(){var a=this;a.fields.each(function(){var a=e(this),b="";a.data("id")||(b=a.attr("name")?a.attr("name"):a.attr("id"),a.attr("data-id",b),a.data("id",b))})},launched:function(){var a=this,b=a.options.onSubmit,c=a.options.onBlur,d=a.options.onChange,h=a.options.onKeyup;if(a.parseDom(),e.each(a.methods,function(b){a.allowed_rules.push(b)}),a.fields.each(function(){e(this).on([f,"validate"].join("."),a.validateField)}),c||d||h){var i=[];c&&i.push("blur"),d&&i.push("change"),h&&i.push("keyup"),a.fields.filter(g[0]).each(function(){var b=e(this);b.on([i.join(" ")].join("."),function(){b.trigger([f,"validate"].join("."),[a]),a.errors[b.data("id")]?a.renderError.call(a,this):a.clearError.call(a,this)})})}b&&(a.on("afterValidate",function(a,b){b.find('button[type="submit"]').addClass("disabled"),b.find('button[type="submit"]').attr("disabled",!0),b.find('button[type="submit"]').text("正在提交，请稍候")}),a.form.on(["submit"].join("."),function(b){return e.isEmptyObject(a.errors)?(a.validate(),e.isEmptyObject(a.errors)?e(a).trigger([f,"afterValidate"].join("."),[a.form]):b.preventDefault(),void 0):!1}))},destory:function(){},on:function(a,b){var c=this;switch(a){case"validate":e(c).on([f,a].join("."),function(a,d,e){if(!c.errors[d.data("id")]){var f=b(a,d,e);f&&delete c.errors[d.data("id")]}});break;case"afterValidate":e(c).on([f,a].join("."),function(a,c){b(a,c)})}}}),c.exports=function(a,b){return"string"==typeof a&&(a=e(a)),new d(a,b)},c.exports.methods=j,c.exports.messages=k});
