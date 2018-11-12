$(function (){
   $('.menu_item').mouseover(function (){
      $('.sub_menu:visible').hide();
      $(this).find('> .sub_menu').show(); 
   });
   
   $('.menu_item').mouseout(function (){
      $('.sub_menu:visible').hide();
   });
   
   isMenuHidden = true;
   $('.menu_icon').click(function (){
       if(isMenuHidden){
          $('.menu').fadeIn("slow");
          isMenuHidden = false;
       }
        else{
            $('.menu').hide();
            isMenuHidden = true;
        }
         
   });
});