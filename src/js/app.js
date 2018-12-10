$('.arrow').click( function (){
 $('html, body').animate({
   scrollTop: $('#navbarcontainer').offset().top
 }, 1000);

});

var scrollButton = $('.seetings');
$(window).scroll(function () {
    $(this).scrollTop() >= 200 ? scrollButton.show() : scrollButton.hide();
});
scrollButton.click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});




$('.adcarobg').carousel({
  interval: 10000
});

function openNav() {
  document.getElementById("menubar").style.height = "100%";
}

function closeNav() {
  document.getElementById("menubar").style.height = "0%";
}


$(document).ready(function(){
	$('.mobile-menu').click(function() {
		$('body').toggleClass('menu-open');
	});
});

$('a').click(function(){
  var aattr=$(this).attr('href');
if (aattr == '') {
    $(this).attr("href", "https://www.mu.edu.sa/ar/%D8%B9%D9%85%D8%A7%D8%AF%D8%A9-%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA/%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D8%AF%D8%A7%D8%AA");
}

});



// // disable right click
// $(document).bind("contextmenu",function(e){
//   e.preventDefault()
// });

// //end  disable right click

// $(document).keydown(function(e){
//   if(e.which === 123){

//      return false;

//   }

// });


// if(document.getElementById("status") != null){
//   var idPost=document.getElementById("status").innerHTML;
// }



