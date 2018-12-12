define(['jquery'],function($){
	function index(){
			$(function(){
				var aBtns = $('.content1-center-ol').find('li');
				var oul = $('.content1-center-ul');
				var aLis = $('.content1-center-ul').find('li');
				
				//<2>???iNow???????ǰ?ʾ???Ƭ??±?
					var iNow = 0;
					var timer = null;

					//<3>?????ť??ӵ?
					aBtns.click(function(){
						//??????ť????򣬸ı??Ƭ??±?
						iNow = $(this).index();
						tab();
					})

					//<4>???ͼƬ
					function tab(){
						//<5>??btn?????ʽȡ???????ǰ????ť???ʽ????ctive
						aBtns.attr("class", '');
						aBtns.eq(iNow).attr("class", 'active');

						//<6>ulȥ??
						oul.stop().animate({left: -750 * iNow}, 500, function(){
							if(iNow == aLis.size() - 1){
								//??ص???ͼƬ
								iNow = 0;
								oul.css("left", 0);
							}
						});
					}

					function timerInner(){
						iNow++;
						// document.title = iNow;
						tab();

						if(iNow == aLis.size() - 1){
							aBtns.eq(0).attr("class", 'active');
						}
					}

					timer = setInterval(timerInner, 2000);

					$(".content1-center").hover(function(){
						clearInterval(timer);
					}, function(){
						timer = setInterval(timerInner, 2000);

					})


					//?????????
										
					$(".top-right>li:nth-child(2)").hover(function(){
						$('#ul').css('display','block');
					},function(){
						$('#ul').css('display','none');
					})
		

			



			//?Ʒ列表左数据
			$.ajax({
				url:'data/left-column.json',
				
				success:function(data){
					for(i = 0; i < data.length; i++){
						$(`<span>${data[i].title}</span>`)
						.appendTo($('.content1-left-ul>' + `li:eq(${i})`+'>div > a'));
					}
				},
				error:function(msg){
						alert(msg);
					}
			})



			//列表右数据
			$.ajax({
				url:'data/left-column.json',
				success:function(data){
					
					for(i = 0; i < data.length; i++){
						for(var j = 0; j < data[i].child[0].title.length; j++){
							$(`<dl class = 'list-on1'><dt><a href="">${data[i].child[0].title[j]}</a></dt></dl>`)
						.appendTo($('.list-details-left').eq(i));
						}
						
					}

				},
				error:function(msg){
						alert(msg);
					}
			})

			
		

			//content3数据
				$.ajax({
					url:'data/content3.json',
					success:function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<dl>
						<dt><a href=""><img src="${arr[i].image}" alt=""></a></dt>
						<dd><a href="">${arr[i].title}</a></dd>
						<dd>${arr[i].sale}</dd>
					</dl>`).appendTo($('.content3-right'));
						}
					},
					error:function(msg){
						alert(msg);
					}
				})


			//content5数据
				$.ajax({
					url:'data/content5.json',
					success:function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<dl>
						<dt><a href=""><img src="${arr[i].image}" alt=""></a></dt>
						<dd><a href="">${arr[i].title}</a></dd>
						<dd>${arr[i].sale}</dd>
					</dl>`).appendTo($('.content5-right'));
						}
					},
					error:function(msg){
						alert(msg);
					}
				})



			// content2透明
				$('.c2c2').find('a').find('img').hover(function(){
					$(this).css('opacity','0.8');
				},function(){
					$(this).css('opacity','1');
				})
				$('.c2c3').find('a').find('img').hover(function(){
					$(this).css('opacity','0.8');
				},function(){
					$(this).css('opacity','1');
				})
				$('.c2c4').find('a').find('img').hover(function(){
					$(this).css('opacity','0.8');
				},function(){
					$(this).css('opacity','1');
				})
				$('.c2c5').find('a').find('img').hover(function(){
					$(this).css('opacity','0.8');
				},function(){
					$(this).css('opacity','1');
				})

			})
	}
	
	return {
		index:index
	}
	
})




