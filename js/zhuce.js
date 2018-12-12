define(['jquery'],function($){
	function zhuce(){
		$(function(){
			$("#username").blur(function(){
				var oUsername = document.getElementById("username");
				var oUsername_span = document.getElementById("username_span");
				var oValue = oUsername.value;
				//将勿输入的空格去掉
				oValue = oValue.replace(/\s/g, '');
				oUsername.value = oValue;
				//验证表单中内容是否符合要求
				if(oValue.length < 4 || oValue.length > 20){
					oUsername_span.innerHTML = '请输入正确的用户名,用户名应为4-20位字符';
					$("#username_span").css("word-wrap","normal");
				}else if(/^\d{4,20}$/.test(oValue)){
					oUsername_span.innerHTML = '请输入正确的用户名,用户名不能全为数字';
				}else if(/\W/i.test(oValue)){
					oUsername_span.innerHTML = '用户名格式错误,请输入正确的用户名';
				}else{
					$("#username_span").text("");
					
				}

			})


			
			//密码
			$("#password").blur(function(){
					var oPassword = document.getElementById('password');
					var oPassword_span = document.getElementById("password_span");
					var oValue = oPassword.value;

					$("#password_span").css("height", "20px");
					$("#password_span").css("top", "292px");
					//验证表单中的内容是否符合要求
					if(oValue.length < 6 || oValue.length > 20){
						oPassword_span.innerHTML = '密码长度应为6~20个字符';
						
					}else if(/^\d{6,20}$/.test(oValue)){
						oPassword_span.innerHTML = '密码不能全为数字';
						
					}else if(/^\s{6,20}$/.test(oValue)){
						oPassword_span.innerHTML = '密码中不允许有空格';
						
					}else if(/^[^a-z0-9A-Z]{6,20}$/.test(oValue)){
						oPassword_span.innerHTML = '密码不能全为符号';
						
					}else{
						$("#password_span").text("");
						
					}
				})




			//密码框
			
			$("#password").focus(function(){
				$("#password_span").text("6-20个大小写英文字母、符号或数字的组合");		
					
			})
			$("#affirmKey").focus(function(){
				$("#affirmKey_span").text("请再次输入密码");
			})
			//密码确认
			$("#affirmKey").blur(function(){
				var oPassword = document.getElementById('password');
				var oPassw = document.getElementById('affirmKey');
				var oPassw_span = document.getElementById("affirmKey_span");
					if(oPassword.value !== oPassw.value){
						oPassw_span.innerHTML = '两次密码输入不一致';
						
					}else if(oPassword.value == ""){
						oPassw_span.innerHTML = '请再次输入密码';
						
					}else{
						$("#affirmKey_span").text("");
					}	
			})
			
		})
	}
	return{
		zhuce:zhuce
	}
})