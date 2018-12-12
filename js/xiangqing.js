define(['jquery','jquery-cookie'],function($){
	
	function xiangqing(){
		$(function(){
			//加载详情页右侧div-big内容
			//计算初始数量
			//sc_car_num();
			$.ajax({

				url:"data/xiang-right.json",
				success:function(data){

					for(var i = 0; i < data.length; i++){
						$(`<div class = "div-big">
							<dl><img src="${data[i].img}" alt=""></dl>
							<dd>${data[i].title}</dd>
							<dd class= 'big-dd2'>
								<span>${data[i].sale1}</span>
								<span>${data[i].sale1}</span>
							</dd>
							<button id = '${data[i].id}' class = 'sc_btn'>加入购物车</button>
						</div>`).appendTo($('.b-r-center'));
					}
				},
				error:function(msg){
					alert(msg);
				}

			})

			//添加点击事件给购物车

			$('.b-r-center').on("click", '.sc_btn', function(){

				var first = $.cookie("goods") == null ? true :false;
				if(first){
					$.cookie("goods",`[{id:${this.id},num:1}]`,{
						expires:7
					})
					
				}else{
					//alert($.cookie('goods'))
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					var same = false;
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == this.id){
							arr[i].num++;
							same = true;
							break;
						}
					}
					if(!same){
						var obj = {id :this.id,num:1};
						arr.push(obj);
					}
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods",cookieStr,{
						expires:7
					})
				}
				sc_car_num();
			})




		//添加购物车出现和消失
		$('.header-top-right').hover(function(){

			$('.sc_Ntable').css("display","block")

		},function(){

			$('.sc_Ntable').css("display","none")
		})





			//计算购物车商品数量
			function sc_car_num(){
				var cookieStr = $.cookie('goods');
				var arr = eval(cookieStr);
				//求和
				var sum = 0;
				for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
				}
				$(".header-top-right .sc_num").html(sum);
			}



			// 放大镜效果
			var lay =document.getElementById("lay"),
                smallpic = document.getElementById("small-pic"),
                bigpic = document.getElementById("big-pic");
            var imgB = bigpic.children[0]; 
            var scale = 2;       
            var w = smallpic.offsetWidth; 
            var h = smallpic.offsetHeight;
            lay.style.width = w / scale + "px";
            lay.style.height = h / scale + "px";

            imgB.style.width = w * scale + "px";
            imgB.style.height = h * scale + "px";
            smallpic.onmouseover = function(){
                lay.style.display = "block";
                bigpic.style.display = "block";
            }    
            smallpic.onmouseout = function(){
                lay.style.display = "none";
                bigpic.style.display = "none";
            }
            smallpic.onmousemove = function(e){
                e = e || window.event;
                var x = e.clientX - lay.offsetWidth/2;
                var y = e.clientY - lay.offsetHeight/2;
                if(x <= 0){           
                    x = 0;
                }
                if(y <= 0){            
                    y = 0;
                }
                if(x >= smallpic.offsetWidth - lay.offsetWidth ){
                    x = smallpic.offsetWidth - lay.offsetWidth        
                }
                if(y >= smallpic.offsetHeight - lay.offsetHeight ){
                    y = smallpic.offsetHeight - lay.offsetHeight        
                }
                lay.style.left = x + "px"; 
                lay.style.top = y + "px";
                imgB.style.left = -x*scale + "px";    
            } 


            //数量合计
            var plus = document.getElementById("plus");
				var i = document.getElementById("text").value;
				var subtract = document.getElementById("subtract");
				var money = document.getElementById("money").value;
				plus.onclick = function(){
					i++;
					document.getElementById("text").value = i;
					document.getElementById("money").value = i*money;
				}
				subtract.onclick = function(){
					if (i>0) {
						i--;
						document.getElementById("text").value = i;
						document.getElementById("money").value = i*money;
					} else{
						i=0;
						document.getElementById("text").value = i;
						document.getElementById("money").value = i*money;
					}
				}
            
		})
		
		
		
	}
	return {
		xiangqing:xiangqing
	}
})