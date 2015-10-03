$("img,button").click(
	function(){
	random=Math.random()*255
	hsl="hsl("+random+",100%,10%)"
alert(hsl)
	$("html").css({
		"background-color":hsl

	})
})

