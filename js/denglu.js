define(['jquery'],function($){
	function denglu(){

		$(function(){
		var oInput = document.getElementById('username1');
		var ooInput = document.getElementById('password1');
		var oLogin = document.getElementById('login');
		var oRegiste = document.getElementById('registe');

			var oUsername1 = document.getElementById('username1');
			



			oInput.onblur = function(){
				var oInput = document.getElementById('username1');
				// var ooInput = document.getElementById('password1');
				// var oLogin = document.getElementById('login');
				var oVerify_span = document.getElementsByClassName("verify_span");
				var oPrompt = document.getElementById('prompt');
				var oValue1 = oInput.value;
				//1、将误输入的空格去掉
				oValue1 = oValue1.replace(/\s/g, '');

				oInput.value = oValue1;
				

				//验证表单中的内容是否符合要求
				//1、判断用户名长度是否符合条件
				if(oValue1.length > 18 || oValue1.length < 6){
					oPrompt.innerHTML = '长度应为6~18个字符'
					oPrompt.style.color = 'red';
				}else if(/\d/.test(oValue1[0])){
					oPrompt.innerHTML = '邮件地址必需以英文字母开头';
					oPrompt.style.color = 'red';
				}else if(/\W/.test(oValue1)){
					oPrompt.innerHTML = '邮件地址需由字母、数字或下划线组成';
					oPrompt.style.color = 'red';
				}else{
					oPrompt.innerHTML = '输入正确√';
					oPrompt.style.color = 'green';
				}
			}


			oLogin.onclick = function(){
				var str = `username=${oInput.value}&password=${ooInput.value}`;
				ajax({
					method: 'post',
					url: 'denglu.php',
					data: str,
					success:function(data){
						alert(data);
					},
					error:function(msg){
						alert(msg);		
					}
				})
			}
		})
	}
	return{
		denglu:denglu
	}
})
	