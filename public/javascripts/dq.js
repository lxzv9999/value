$(function(){
	$.ajax({
		url:'http://localhost:3000',
		type:'get',
		dataType:'json',
		success:function(e){
			//$('span').html(e);
			var str='';
			for(var i in e){
				str+="<P>"+e[i]+"</p>"
				//append 替换
				//$('.span').append('<P>'+e[i]+'</p>');
			}
			$('.p').html(str);
		}
	})
})
