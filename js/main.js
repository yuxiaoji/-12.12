//配置引入的路径


require.config({
	paths: {
		'jquery':'jquery-1.10.1.min',
		'jquery-cookie':'jquery.cookie',
		'index':'index',
		'xiangqing':'xiangqing'
	},
	shim:{
		//设置以来关系
		'jquery-cookie':['jquery']
	}
})

require(['index','xiangqing'],function(index,xiangqing){
	index.index();
	xiangqing.xiangqing();
})