function cookies(name){
  this.name = name;
};
cookies.prototype.set = function(value, days){
  var expires = "";
  if(days){
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = this.name+"="+value+expires+"; path=/";
};

cookies.prototype.read=function(){
	var nameEQ = this.name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
};
cookies.prototype.erase=function(){
	this.create("",-1);
};


var eg_cookie = new cookies("eg_state");
var state = eg_cookie.read();

jQuery(document).ready(function(){
  hideshow();
  if(state == 1) setstate(1, jQuery('.minimal_layout'));
});

function hideshow(){
  jQuery('.minimal_layout').click(function(){
    if(jQuery('html').hasClass('minimal')) setstate(0, this);
    else setstate(1, this);
    return false;
  });
  
};

function setstate(value, obj){
  if(value == 1){
    jQuery(obj).html('&raquo;');
    jQuery('html').addClass('minimal');
    eg_cookie.set(1, 365);
  }else{
    jQuery(obj).html('&laquo; less is more');
    jQuery('html').removeClass('minimal');
    eg_cookie.set(0, 365);
  }
  
}


