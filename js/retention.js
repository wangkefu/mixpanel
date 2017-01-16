var backgroundImages = ["url(img/re_1_3.svg)","url(img/re_2_3.svg)","url(img/re_3_3.svg)"];
var backgroundImages2 = ["url(img/re_1_2.svg)","url(img/re_2_2.svg)","url(img/re_3_2.svg)"];
$.each($(".retenTop_dropDetail"), function() {
	$(this).mouseenter(function(){
		_index = $(this).parent().children().index(this);
		console.log(_index)
		$(".reten_liIcon").eq(_index).css("background-image",backgroundImages[_index]);
	})
	$(this).mouseleave(function(){
		_index = $(this).parent().children().index(this);
		$(".reten_liIcon").eq(_index).css("background-image",backgroundImages2[_index]);
	})
	$(this).click(function(){
		index = $(this).parent().children().index(this);
		$(".retenTop_icon").css("background-image",backgroundImages2[_index]);
		$(".retenTop_text").text($(".li_label").eq(_index).text());
	})
});

//var eventMenuIsDropDown = false;
//$(".event").click(function(){
//	console.log("aa")
//	if(eventMenuIsDropDown){
//		$(".eventMenu").hide();
//		eventMenuIsDropDown = false;
//	}else{
//		$(".eventMenu").show();
//		eventMenuIsDropDown = true;
//	}
//})
//$(document).bind('click',function(e){
//	var e = e||window.event;
//	var elem = e.target || e.srcElement;
//	while(elem){
//		if(elem.className && (elem.className == 'eventSearch' || elem.className == 'event')){
//			return;
//		}
//		else if(elem.className == "eventSelectOp"){
//			$(".event").text(elem.innerHTML)
//		}
//		elem = elem.parentNode;
//	}
//	$(".eventMenu").hide();
//	eventMenuIsDropDown = false;
//})

var TempArr = [];
$(".eventSelectOp").each(function(index,el){
	TempArr[index] = $(this).text();
})
console.log(TempArr)

//模糊查询函数
function setinput3(this_){
	var select = $(this_).parent().next().children();
	select.hide(); 
	for(var i=0;i<TempArr.length;i++){
		if(TempArr[i].toLowerCase().substring(0,this_.value.length).indexOf(this_.value.toLowerCase())==0){
			$($(this_).parent().next().children()).eq(i).show()
		}
	}
}
//左上角的选项卡切换
$.each($(".retenTop_dropDetail"), function() {
	$(this).click(function(){
		$(".reten_TopSelectContents").hide()
		$(".reten_TopSelectContents").eq($(this).parent().children().index(this)).show();
		
	})
});


//点击下拉函数的函数
var flag = false;
function clicks(classN1,classN2,classN3){
	if(flag){
		$("."+classN2).next().hide();
		flag = false;
	}else{
		$("."+classN2).next().show();
		flag = true;
	}
	$(document).bind('click',function(e){
		var e = e||window.event;
		var elem = e.target || e.srcElement;
		while(elem){
			if(elem.className && (elem.className == classN1 || elem.className == classN2)){
				return;
			}
			else if(elem.className == classN3){
				console.log('success')
				$("."+classN2).text(elem.innerHTML)
			}
			elem = elem.parentNode;
		}
		$("."+classN2).next().hide();
		flag = false;
	})
}