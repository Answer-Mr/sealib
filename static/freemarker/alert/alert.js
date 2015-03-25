define(function (require,exports,module){
	exports.init = function(){
		return   $.extend({
    "ajaxFn": function(options) {
      var ops = $.extend({
        type: "get",
        url: "",
        data: {},
        dataType: 'json',
        loadId: "",
        error: function(e) {
          alert("网络接口出错");
          $(ops.loadId).html("加载失败，请稍后重试");
        },
        fail: function(e) {
          alert("网络接口出错");
          $(ops.loadId).html("加载失败，请稍后重试");
        },
        layoutStr: '<div id="hb-layout" class="ui-layout"><div class="ui-loadingBody"><div class="ui-loadingBox"></div><p>加载中</p></div></div>',
        closeLayout: function() {
          $("#hb-layout").remove();
        },
        showLayout: function() {
          $("body").append(this.layoutStr);
        }
      }, options);
      ops.showLayout();
      $.ajax({
        type: ops.type,
        url: ops.url,
        data: ops.data,
        dataType: ops.dataType,
        success: function(res) {
          ops.closeLayout.call(this);
          typeof ops.success !== "undefined" && ops.success.call(this, res);
        },
        error: function(e) {
          ops.closeLayout.call(this);
          typeof ops.error !== "undefined" && ops.error.call(this, e);
        },
        fail: function(e) {
          ops.closeLayout.call(this);
          typeof ops.fail !== "undefined" && ops.fail.call(this, e);
        }
      });
      return this;
    },
    /*
    $.alert("请输入密码")//自动在2秒后消失
    $.alert({"msg":"请输入密码","time":"4000"})//自动在4秒后消失
    */
    "alert": function(options) {
      if (typeof options !== "object") {
        options = {
          "msg": options
        };
      }
      var ops = $.extend({
        "msg": "请填写提示信息",
        "time": "3000",
        "modal": false, //默认不需要遮罩效果
        "layoutStr": '<div id="hb-layout" class="ui-layout-opa"></div>',
        "layoutStrNone": '<div id="hb-layout"></div>',
        closeLayout: function() {
          $("#hb-layout").remove();
        },
        showLayout: function() {
          var T = this,
            _top = ops.top || "25%",
            lay = T.modal ? $(T.layoutStr) : $(T.layoutStrNone);
          var innerStr = '<div style="position: absolute;left: 50%;top: ' + _top + ';margin-left: -110px;width: 220px;min-height: 28px;color: white;background: rgba(0, 0, 0, 0.6);text-align: center;z-index: 999;"><span style="font-size: 1.4rem;line-height: 300%;display: block;">' + T.msg + '</span></div>';
          ops.closeLayout.call(T);
          $("body").append(lay.html(innerStr));
          setTimeout(function() {
            ops.closeLayout.call(T);
          }, T.time);
        }
      }, options);
      ops.showLayout();
    }
  });
	}
})