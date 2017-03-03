var body = document.body;
var navItems = [];
var backgrounds = [];

navItems[0] = document.getElementById("item1");
navItems[1] = document.getElementById("item2");
navItems[2] = document.getElementById("item3");
navItems[3] = document.getElementById("item4");
navItems[4] = document.getElementById("item5");
navItems[5] = document.getElementById("item6");

backgrounds[0] = "url(http://www.laurakirste.com/wp-content/uploads/2012/06/Wallpaper-Print.jpg)";
backgrounds[1] = "url(http://www.laurakirste.com/wp-content/uploads/2012/06/Wallpaper-Print.jpg)";
backgrounds[2] = "url(https://goo.gl/8lC2Df)";
backgrounds[3] = "url(https://goo.gl/rJJ6fp)";
backgrounds[4] = "url(https://goo.gl/rJJ6fp)";
backgrounds[5] = "url(https://goo.gl/rJJ6fp)";

navItems.forEach( function( item, 0 ) {
  item.addEventListener("mouseover", function() {
    document.body.style.backgroundImage = backgrounds[0];
  });
});


<script> 
jQuery('#questionmarkdiv').hover(function() 
{ 
jQuery('#backgroundimage').css("background-image", "url(change to this.jpg)"); 
}).mouseleave(function(){
jQuery('#container').css("background-image", "url(http://thumbs.dreamstime.com/thumblarge_536/12838649102C1cO5.jpg)"); 
});
</script>