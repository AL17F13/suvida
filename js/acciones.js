// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
//	alert($('#messi').width() + " " + $('#messi').height());

//var pantalla=$.mobile.getScreenHeight();
	//var encabezado=$('.ui-header').outerHeight();
	//var pie=$('.ui-footer').outerHeight();
	//var contenido=$('.ui-content').outerHeight();
	
	//var alto=(pantalla-encabezado-pie)*.89;
	//$('#imgmessi').height(alto);
	//$('#imgmessi').css('width', '100%');
	

	$ ('#btvibrar') .on ('tap' , function () { 
  navigator .vibrate (1000);
   
 });//  tap a btnvibrar

 


}); 
});

