define(function ( require, exports, module ){
	return $.extend({
                "ajaxFn":function(options){  
                    ops=$.extend({  
                        type : "get",
                        url: "http://localhost:8090/seajs/static/freemarker/ajax/data.json",
                        data : {},
                        dataType: 'json',
                        loadId : "",
                        error: function(e){
                        	alert("网络接口出错");
          					$(ops.loadId).html("加载失败，请稍后重试")
                        },
                        fail: function(e){
                        	alert("网络接口出错");
          					$(ops.loadId).html("加载失败，请稍后重试")
                        },
                        layoutStr: '<div id="hb-layout" style="position:absolute;top: 0;left:0;width:100%;height:100%;"><div style="position:absolute;top:50%;left:50%;padding:10px;border-radius:4px;margin-left:-26px;margin-top:-26px;background:#000;"><img style="width:32px;height:32px;" src="http://localhost:8090/seajs/static/freemarker/ajax/loading.gif"></div></div>',
                        closeLayout : function(){
                        	//$("#hb-layout").remove();	
                        },
                        showLayout: function(){
                        	$("body").append(this.layoutStr);
                        }
                    },options);
                    ops.showLayout();
                    $.ajax({
                      type: ops.type,
                      url: ops.url,
                      data: ops.data,
                      dataType: ops.dataType,
                      success : function(res){
                        setTimeout(function(){
                          ops.closeLayout.call(this);
                          typeof ops.success !== "undefined" && ops.success.call(this, res);
                        },3000)
                      },
                      error: function(e){
                        setTimeout(function(){
                          ops.closeLayout.call(this);
                          typeof ops.error !== "undefined" && ops.error.call(this, e);
                        },3000)
                      },
                      fail: function(e){
                        setTimeout(function(){
                          ops.closeLayout.call(this);
                          typeof ops.fail !== "undefined" && ops.fail.call(this, e);
                        },3000)
                      }
                    })
                    return this; 
                  }  
              }); 
})