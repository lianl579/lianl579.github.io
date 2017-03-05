// define variables, init emty arrays for backgrounds and navItems
var body = document.body;
var navItems = [];
var backgrounds = [];


// Add nav Items Below. 
// ** Change the text between the quotes to match the ID's in your navigation
navItems[0] = document.getElementById("item1");
navItems[1] = document.getElementById("item2");
navItems[2] = document.getElementById("item3");
navItems[3] = document.getElementById("item4");
navItems[4] = document.getElementById("item5");
navItems[5] = document.getElementById("item6");



// Set the Background Image URL's
// ** Change the url between the parenthesis to match the url you want for your background image
backgrounds[0] = "url(picture/french.jpg)";
backgrounds[1] = "url(https://goo.gl/31iUQA)";
backgrounds[2] = "url(https://goo.gl/8lC2Df)";
backgrounds[3] = "url(https://goo.gl/rJJ6fp)";
backgrounds[4] = "url(https://goo.gl/8lC2Df)";
backgrounds[5] = "url(https://goo.gl/rJJ6fp)";


// add an event listener for each nav item
navItems.forEach( function( item, i ) {
  item.addEventListener("mouseover", function() {
    document.body.style.backgroundImage = backgrounds[i];
  });
});


// <script> 
// jQuery('#questionmarkdiv').hover(function() 
// { 
// jQuery('#backgroundimage').css("background-image", "url(change to this.jpg)"); 
// }).mouseleave(function(){
// jQuery('#container').css("background-image", "url(http://thumbs.dreamstime.com/thumblarge_536/12838649102C1cO5.jpg)"); 
// });
// </script>