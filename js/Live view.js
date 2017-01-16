var tbodys = document.getElementsByTagName("tbody");
var flag = [];
$.each($(".table tbody tr"),function(){
	flag[$(this).parent().children().index(this)] = false;
})
console.log(flag)

for( var i=0;i<$(".bodytr").length;i++){
	(function(j){
		$(".bodytr").eq(j).on("click",function(){
			if(flag[j] == false){
				for(var k=0;k<$(".bodytr").length;k++){
					if(flag[k]){
						$(".newtr").remove()
						flag[k] = false;
					}
				}
				flag[j] = true;
				var $newtr = $("<tr></tr>");
				var $newtd = $("<td></td>");
				var $newdiv = $("<div></div>");
				$newdiv.html("<div class='liv_tab1 liv_tabs'>ALL PROPERTIES</div><div class='liv_tab2 liv_tabs'>YOUR PROPERTIES</div><div class='liv_tab3 liv_tabs'>MIXPANEL PROPERTIES</div><div class='liv_list1 liv_lists'></div><div class='liv_list2 liv_lists'></div><div class='liv_list3 liv_lists'></div>")
				$newtr.addClass("newtr")
				$newtd.addClass("addtd");
				$newtd.attr("colspan","5");
				$newdiv.addClass("adddiv");
				
				
				$newdiv.css({
					"oveflow":"hidden",
					"background":"#f7f9fc"
				})
				$($newtd).append($newdiv);
				$($newtr).append($newtd);
				$(this).after($newtr);
				var $newlists1_left = $("<div></div>");
				var $newlists1_leftIn = $("<div>$app_build_number:27</div><div>$app_version_string:1.2.7</div><div>App Release:27</div>");
				$newlists1_left.addClass("floats");
				$($newlists1_left).append($newlists1_leftIn)
				$(".liv_list1").append($newlists1_left)
				var $newlists1_center = $("<div></div>");
				var $newlists1_centerIn = $("<div>$app_build_number:27</div><div>$app_version_string:1.2.7</div><div>App Release:27</div>");
				$newlists1_center.addClass("floats");
				$($newlists1_center).append($newlists1_centerIn)
				$(".liv_list1").append($newlists1_center)
				var $newlists1_right = $("<div></div>");
				var $newlists1_rightIn = $("<div>$app_version_string:1.2.7</div><div>App Release:27</div>");
				$newlists1_right.addClass("floats");
				$($newlists1_right).append($newlists1_rightIn)
				$(".liv_list1").append($newlists1_right)
				
				var $newlists2_left = $("<div></div>");
				var $newlists2_leftIn = $("<div>$app_build_number:27</div><div>$app_version_string:1.2.7</div><div>App Release:27</div>");
				$newlists2_left.addClass("floats");
				$($newlists2_left).append($newlists2_leftIn)
				$(".liv_list2").append($newlists2_left)
				var $newlists2_center = $("<div></div>");
				var $newlists2_centerIn = $("<div>$app_version_string:1.2.7</div><div>App Release:27</div>");
				$newlists2_center.addClass("floats");
				$($newlists2_center).append($newlists2_centerIn)
				$(".liv_list2").append($newlists2_center)
				var $newlists2_right = $("<div></div>");
				var $newlists2_rightIn = $("<div>$app_version_string:1.2.7</div><div>App Release:27</div>");
				$newlists2_right.addClass("floats");
				$($newlists2_right).append($newlists2_rightIn)
				$(".liv_list2").append($newlists2_right)
				
				var $newlists3_left = $("<div></div>");
				var $newlists3_leftIn = $("<div>$app_build_number:27</div><div>$app_build_number:27</div><div>$app_version_string:1.2.7</div><div>App Release:27</div>");
				$newlists3_left.addClass("floats");
				$($newlists3_left).append($newlists3_leftIn)
				$(".liv_list3").append($newlists3_left)
				var $newlists3_center = $("<div></div>");
				var $newlists3_centerIn = $("<div>$app_version_string:1.2.7</div><div>$app_build_number:27</div><div>App Release:27</div>");
				$newlists3_center.addClass("floats");
				$($newlists3_center).append($newlists3_centerIn)
				$(".liv_list3").append($newlists3_center)
				var $newlists3_right = $("<div></div>");
				var $newlists3_rightIn = $("<div>$app_version_string:1.2.7</div><div>$app_build_number:27</div><div>App Release:27</div>");
				$newlists3_right.addClass("floats");
				$($newlists3_right).append($newlists3_rightIn)
				$(".liv_list3").append($newlists3_right)
				
				
			}else if(flag[j] == true){
				$(".newtr").remove()
				flag[j] = false;
			}
			console.log($(".liv_tabs"));
			for(var h=0;h<$(".liv_tabs").length;h++){
				(function(v){
					$(".liv_tabs").eq(v).on("click",function(){
						$(".liv_tabs").css("color","#7d829b")
						$(".liv_tabs").css("background","#edf2f5")
						$(".liv_tabs").eq(v).css("color","#66aff1")
						$(".liv_tabs").eq(v).css("background","#f7f9fc")
						console.log(v)
						$(".liv_lists").hide();
						$(".liv_lists").eq(v).show();
					})
				})(h)
			}
			
		})
	})(i)
}