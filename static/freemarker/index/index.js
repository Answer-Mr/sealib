define(function(require, exports, module){
    var Calendar = require('calendar');
	exports.init = function(){
		var	linmitStart = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
        		limitEnd = '';
        	
    	    var a_startDate = new Calendar({trigger: '#a-start-cal', range: [linmitStart, limitEnd]});
    	    var b_startDate = new Calendar({trigger: '#b-start-cal', range: [linmitStart, limitEnd]});
            var b_endDate = new Calendar({trigger: '#b-end-cal', range: [linmitStart, limitEnd]});
    	    b_startDate.on('selectDate', function(date) {
    	    	b_endDate.range([date, limitEnd]);
    	    });
            b_endDate.on("selectDate", function(date) {
            b_startDate.range([ linmitStart, date ]);
        });
	}
})