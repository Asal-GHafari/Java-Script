$(function(){
var i=1;var c=0;
var bwidth=400;
$(".le ").click(function(){
	c=c+1;//alert(c);
	$(".slider-previw2 > div > div ").each(function(){
		if(c<12){
			$(this).animate({'top':-300*c},1000,'easeOutExpo');
		}
	});	
});
	$(".ri ").click(function(){
		if(c>11){c=0;
			$(".slider-previw2 > div > div ").each(function(){
				$(this).animate({'top':0},'slow',"easeOutExpo");
			});
		}
	});
	
	
	
	$("#le ").click(function(){
	c=c+1;//alert(c);
	$("#slider-previw2 > div > div ").each(function(){
		if(c<7){
			$(this).animate({'top':-300*c},1000,'easeOutExpo');
		}
	});	
});
	$("#ri ").click(function(){
		if(c>6){c=0;
			$("#slider-previw2 > div > div ").each(function(){
				$(this).animate({'top':0},'slow',"easeOutExpo");
			});
		}
	});
	
	
	
	
	
	
});