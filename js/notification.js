var Flag =1;
$.each($(".noti_tabs"), function() {
	$(this).click(function(){
		$(".noti_tabs").css("color","#abd2f7");
		$(".noti_tabs").eq($(this).index()).css("color","white")
		$(".noti_panel_conts").hide();
		$(".noti_panel_conts").eq($(this).index()).show();
		if($(this).index() == 1){
			$(".sanjiaox").css("left","89px");
		}else if($(this).index() == 2){
			$(".sanjiaox").css("left","179px");
		}else if($(this).index() == 0){
			$(".sanjiaox").css("left","29px");
		}
		Flag = $(this).index()+1;
	})
});

$(".noti_search input").focus(function(){
	$(".noti_search input").addClass("input_focus");
	$(".noti_search input").removeClass("input_blur");
})
$(".noti_search input").blur(function(){
	$(".noti_search input").addClass("input_blur");
	$(".noti_search input").removeClass("input_focus");
})

var flag = true;
$(".send_btn").click(function(){
	if(flag){
		$(".white_circle").css("margin-right","20px");
		flag = false;
	}else{
		$(".white_circle").css("margin-right","1px");
		flag = true;
	}
})

$.each($("tr"),function(){
	$(this).mouseenter(function(){
//		console.log($(this).parent().children().index(this));
		console.log(Flag)
		var s = $(this).parent().children().index(this)
		$(".content"+Flag+" tr").eq($(this).parent().children().index(this)).children().css("background","#f1f4fa");
		if(s!=0){
			$(".content"+Flag+" .deletes").eq(s-1).show()
			$(".content"+Flag+" .copy_icon div").eq(s-1).show()
		}
	})
})
$.each($("tr"),function(){
	$(this).mouseleave(function(){
		var s = $(this).parent().children().index(this)
		if($(this).parent().children().index(this)!=0){
			$(".content"+Flag+" tr").eq($(this).parent().children().index(this)).children().css("background","#ffffff");
			$(".content"+Flag+" .deletes").eq(s-1).hide();
			$(".content"+Flag+" .copy_icon div").eq(s-1).hide();
		}
	})
})

var t;
$.each($(".deletes"), function() {
	$(this).click(function(){
		t = $(this).parent().parent().parent().children().index($(this).parent().parent())
		$("#del_wrap").show();
		$("#del_wrap").css("height",$(document).height())
	})
});
$(".sure").click(function(){
	$(".content"+Flag+" tr").eq(t).remove();
	$("#del_wrap").hide();
})
$(".cancel").click(function(){
	$("#del_wrap").hide();
})
