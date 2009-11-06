jQuery(document).ready(function(){
  hideshow();
});

function hideshow(){
  jQuery('.minimal_layout').click(function(){
    if(jQuery('html').hasClass('minimal')){
      jQuery(this).html('&laquo; less is more');
      jQuery('html').removeClass('minimal');
    }else{
      jQuery(this).html('&raquo;');
      jQuery('html').addClass('minimal');
    }
    return false;
  });
  
}