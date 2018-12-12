//配置引入的路径
console.log("成功");

require.config({
	paths: {
		'jquery':'jquery-1.10.1.min',
		'denglu':'denglu'
	
	}
})

require(['denglu'],function(denglu){
	denglu.denglu();
})