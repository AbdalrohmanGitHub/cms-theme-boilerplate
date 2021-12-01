// (function () {
//   // Global variables
//   var parentMenuItems = document.querySelectorAll(
//     '.navigation-primary li.has-submenu'
//   );

//   // Adds focus event listener on parent menu items so keyboard users can tab through menu
//   Array.prototype.forEach.call(parentMenuItems, function (el) {
//     el.addEventListener('focusin', function () {
//       el.classList.add('focus');
//     });

//     el.addEventListener('focusout', function () {
//       el.classList.remove('focus');
//     });
//   });
// })();



$('.custom-menu-primary >div  ul li.has-submenu >a').after('<div class="child-trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 24" id="ico-angle-right"><path fill-rule="evenodd" d="M0 1.996c0 .208.08.393.24.553L9.691 12l-9.45 9.45a.76.76 0 0 0-.241.554c0 .208.08.393.24.553l1.203 1.203c.16.16.345.24.553.24a.76.76 0 0 0 .553-.24l11.207-11.207a.76.76 0 0 0 .24-.553.76.76 0 0 0-.24-.553L2.549.24A.76.76 0 0 0 1.996 0a.76.76 0 0 0-.553.24L.24 1.443a.76.76 0 0 0-.24.553z"></path></svg></div>');

$('.head-menu-btns').detach().insertBefore('.custom-menu-primary >div'); 

$('.custom-menu-primary form').detach().insertBefore('.custom-menu-primary >div >ul >li:first-child'); 


$('.child-trigger').click(function(){
  $(this).parents('.submenu').addClass('open');
//   $(this).parent().find(">a.menu-link").insertBefore($(this).parent().find(">ul.submenu >li:first-child"));

  $(this).parent().addClass('open');
  $('.back-icon').addClass('show'); 
//   var e = $(this).next('.submenu').height();
//   $(".custom-menu-primary>div#hs_cos_wrapper_navigation-primary>ul").css("height", e + "px");
//     $(this).parents('.submenu').css("height", e + "px");
});

$('.custom-menu-primary ul li.has-submenu  ul >li:first-child').addClass('active'); 


$('.back-icon').click(function(){


  if($('.submenu.level-2 .has-submenu.menu-item').hasClass('open')===true){
    var i;
    for(i=5;i>1;i--){ 
      if($('.submenu.level-'+i+' .has-submenu.menu-item').hasClass('open')===true){
        $('.submenu.level-'+i+'>.has-submenu.menu-item').removeClass('open');
        $('.submenu.level-'+i+'').removeClass('open');
        break;
      }
    }
  }

  else{
    $('.submenu.level-1').removeClass('open');
    $('.submenu.level-1>li').removeClass('open');
    $('.back-icon').removeClass('show');
  }

});


