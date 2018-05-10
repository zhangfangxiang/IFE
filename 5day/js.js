document.getElementById('resume').onclick=function(){
	console.log(document.getElementById("btn").innerHTML="篮球");
}
function time(){
        	var t=new Date().getHours();
        	//console.log(t);
        	if(0<t&&t<=8){
        		alert("早上好");
        	}else if(8<t&&t<=11){
        		alert("上午好");
	    	}else if(11<t&&t<=13){
	    		alert("中午好")
	    	}else if(13<t&&t<=17){
	    		alert("下午好")
	    	}else{
	    		alert("晚上好")
	    	}
        }
        time();