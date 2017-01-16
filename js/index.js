var user_menu_Isdropdown = false
$(".blue_header_username").on("click",function(){
	if(user_menu_Isdropdown){
		$(".user_menu_dropdown").removeClass("user_menu_dropdown_isopen")
		$(".user_menu_dropdown").addClass("user_menu_dropdown_isclose")
		user_menu_Isdropdown = false;
	}else{
		$(".user_menu_dropdown").addClass("user_menu_dropdown_isopen")
		$(".user_menu_dropdown").removeClass("user_menu_dropdown_isclose")
		user_menu_Isdropdown = true;
	}
})
$(document).bind('click',function(e){
	var e = e||window.event;
	var elem = e.target || e.srcElement;
	if(elem.className == 'blue_header_username'){
		return;
	}
	while(elem){
		if(elem.className && (elem.className == 'user_menu_dropdown')){
			return;
		}
		elem = elem.parentNode;
	}
	if(user_menu_Isdropdown){
		$(".user_menu_dropdown").removeClass("user_menu_dropdown_isopen")
		$(".user_menu_dropdown").addClass("user_menu_dropdown_isclose")
		user_menu_Isdropdown = false;
	}
		
})

var TempArr = [];
var select_button_groupIsopen = false;
$(".select_button_group").on("click",function(){
	if(select_button_groupIsopen){
		$(".select_menu").hide();
		select_button_groupIsopen = false;
	}else{
		$(".select_menu").show();
		select_button_groupIsopen = true;
	}
	
	$(".select_options").each(function(index,el){
		TempArr[index] = $(this).text();
	})
	console.log(TempArr);
	$(document).bind('click',function(e){
		var e = e || window.event;
		var elem = e.target || e.srcElement;
		while(elem){
			if(elem.className == 'select_options'){
				$(".select_button_group_selected").text(elem.innerHTML)
			}
			if(elem.className == 'select_search' || elem.className == 'select_button_group'){
				return;
			}
			elem = elem.parentNode;
		}
		$(".select_menu").css('display','none');
		select_button_groupIsopen = false;
	})
})
function setinput(this_){  
    var select = $(".option_lists"); 
    //每输入一个值，清空select内的所有option，然后在下面的for循环内匹配，若匹配到则生成新的option并展示
    select.html("");  
    for(i=0;i<TempArr.length;i++){  
        //若找到以txt的内容开头的，添option  
        if(TempArr[i].toLowerCase().substring(0,this_.value.length).indexOf(this_.value.toLowerCase())==0){  
            var divs = $("<div></div>").text(TempArr[i]); 
            divs.addClass("select_options")
            select.append(divs);  
        }  
        console.log(TempArr[i].substring(0,this_.value.length).indexOf(this_.value))
    }  
}  




var input_Isshow = false;
$(".segfilter_wrpOne").on("click",function(){
	if(input_Isshow){
		input_Isshow = false;
	}else{
		$(".segfilter_wrpOne input").show()
		$(".segfilter_wrpThree").show()
		input_Isshow = true;
	}
	$(document).bind('click',function(e){
		var e = e || window.event;
		var elem = e.target || e.srcElement;
		while(elem){
			if(elem.className == 'segOneInput' || elem.className == "segfilter_wrpOne" ||elem.className == "segfilter_wrpThree"){
				return;
			}
			elem = elem.parentNode;
		}
		$(".segfilter_wrpOne input").css('display','none');
		$(".segfilter_wrpThree").css("display","none");
		input_Isshow = false;
	})
})


var tabs_details = document.querySelectorAll(".tabs_detail");
var tabsText_icon1 = document.querySelectorAll(".tabsText_icon1");
var tabsText_icon2 = document.querySelectorAll(".tabsText_icon2");
for(var i=0;i<tabs_details.length;i++){
	(function(j){
		tabs_details[j].onmouseenter = function(){
			$(".tabsText_icon1").eq(j).css("background-position-x","-15px")
			$(".tabsText_icon2").eq(j).css("background-position-x","-15px")
		}
		tabs_details[j].onmouseleave = function(){
			$(".tabsText_icon1").eq(j).css("background-position-x","0px")
			$(".tabsText_icon2").eq(j).css("background-position-x","0px")
		}
		tabs_details[j].onclick = function(){
			$(".segfilter_wrpThree").hide();
			$('.segOneInput').hide();
			input_Isshow = false;
			$(".segfilter_wrpOne span").text($(".tabsText_wrap").eq(j).text())
		}
	})(i)
}
$(".tab").click(function(){
	$(".tab").removeClass("selected_tab");
	$(this).addClass("selected_tab");
	$(".tabs_lists").hide();
	//获得其在父元素下的位置，即对应的tabs_lists的下标
	var tabs_index = $(this).parent().children().index(this);
	$(".tabs_lists").eq(tabs_index).show()
})

var TempArr2 = [];
$(".tabs_detail").each(function(index,el){
	TempArr2[index] = $(this).find("div:first").text();
})
function setinput2(this_){  
    var select = $(".tabs_detail"); 
    select.hide()  
    for(i=0;i<TempArr2.length;i++){ 
        if(TempArr2[i].toLowerCase().substring(0,this_.value.length).indexOf(this_.value.toLowerCase())==0){  
            $(".tabs_detail").eq(i).show() 
        }  
    }  
}  
	
	//数据图部分
	//checkbox和线条的颜色数组
   var colors = ["#53a3eb","#32bbbd","#9932CC","#20B2AA","#3B3B3B","#EE2C2C"];
   var title = {
      text: ' '   
   };
   var subtitle = {
      text:  ''
   };
   var xAxis = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   };
   var yAxis = {
      title: {
         text: ' '
      },
      lineWidth: 1,
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   };   

   var tooltip = {
      valueSuffix: '\xB0C'
   }

   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0,
      enabled:false
   };

   var series =  [
      {
         name: 'Notification Sent',
         data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
            24.1, 20.1, 14.1, 8.6, 2.5],
            color: colors[0]
      },
      {
         name: 'PortalActivity-onCreate called', 
         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 
            16.6, 14.2, 10.3, 6.6, 4.8],
          	color:colors[1]
      }
   ];
   
   var credits = {
   		enabled:false
   };
   
   var json = {};

   json.title = title;
   json.subtitle = subtitle;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.tooltip = tooltip;
   json.legend = legend;
   json.series = series;
   json.credits = credits;
   $('#charts_container').highcharts({
	   charts:{
	   	   events:{
	   	   	  load: function(event){
	   	   	  	console.log("aaa")
	   	   	  }
	   	   }
	   }
   })
   $('#charts_container').highcharts(json);
  

var checkboxs = document.querySelectorAll(".checkbox");
var checkboxs_On = [];
for(var i=0;i<checkboxs.length;i++){
	checkboxs_On[i] = true;
	(function(j){
		checkboxs[j].onclick = function(){
			var data = [];
			var count = 0;
			if(checkboxs_On[j]){
				$(".checkbox").eq(j).css("background-color","white");
				checkboxs_On[j] = false;
				for(var v=0;v<series.length;v++){
					if(checkboxs_On[v] == true){
						data[count] = series[v];
						count++;
					}
				}
				//根据以上的判断重新绘制新的图
				json.series = data;
				$('#charts_container').highcharts(json);
			}else{
				$(".checkbox").eq(j).css("background-color",colors[j]);
				checkboxs_On[j] = true;
				for(var v=0;v<series.length;v++){
					if(checkboxs_On[v] == true){
						data[count] = series[v];
						count++;
					}
				}
				json.series = data;
				$('#charts_container').highcharts(json);
			}
		}
	})(i)
}


//时间选择器
var date1 = new Date();
var date2 = new Date(date1.getTime()-24*60*60*1000);
var date3 = new Date(date1.getTime() - 7*24*60*60*1000);
var date4 = new Date(date1.getTime() - 30*24*60*60*1000);
$(".inner_time").text(times(date2)+"~"+times(date1));
function times(date){
	y = date.getFullYear() + "-";
	m = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	d = date.getDate() + ''; 
	return y+m+d;
}
$.each($(".drop_times"), function() {
	$(this).click(function(){
		if($(this).parent().children().index(this) == 0){
			$(".inner_time").text(times(date2)+"~"+times(date1));
		}else if($(this).parent().children().index(this) == 1){
			$(".inner_time").text(times(date3)+"~"+times(date1));
		}else if($(this).parent().children().index(this) == 2){
			$(".inner_time").text(times(date4)+"~"+times(date1));
		}
	})
});
