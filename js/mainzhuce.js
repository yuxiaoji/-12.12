
console.log("成功1")

require.config({
	paths:{
		'jquery':'jquery-1.10.1.min',
		'zhuce':'zhuce'
	}
})

	require(['zhuce'],function(zhuce){
		zhuce.zhuce();
	})