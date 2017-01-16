$(function(){
	username = getCookie('username');
	passwords = getCookie('password');
	if(passwords != "" && username != "") {
		$("#id_username").val(username)
		$("#id_password").val(passwords)
	} 
})
function setCookie(key,value,days){
	var nowDate = new Date();
	var nowDay = nowDate.getDate();
	nowDate.setDate(nowDay+days);
	document.cookie = key+"="+value+";expires="+nowDate;
}
function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if(c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end))
			}
	}
	return "";
}
//function checkCookie() {
//	username = getCookie('username');
//	password = getCookie('password');
//	if(username != null && username != "") {
//		$("#id_username").val(username)
//		$("#id_password").val(password)
//	} 
//}

var user = document.querySelector("#id_username");
var pass = document.querySelector("#id_password");
var btn = document.querySelector("#id_submit");
btn.onclick = function(e){
	var userVal = user.value;
	var passVal = pass.value;
	passVal = hex_md5("passVal");
	setCookie("username",userVal,10);//函数传参创建cookie
	setCookie("password",passVal,10);
}
