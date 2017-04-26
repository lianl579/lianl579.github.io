// var container = document.getElementById('container');
var container = document.getElementById('container');

var letters = {
    KeyA: {
        url: 'img/a.png',
    },
    KeyB: {
    	url: 'img/b.png',
    },
    KeyC: {},
    KeyD: {},
    KeyE: {},
    KeyF: {},
    KeyG: {},
    KeyH: {},
    KeyI: {},
    KeyJ: {},
    KeyK: {},
    KeyL: {},
    KeyM: {},
    KeyN: {},
    KeyO: {},
    KeyP: {},
    KeyQ: {},
    KeyR: {},
    KeyS: {},
    KeyT: {},
    KeyU: {},
    KeyV: {},
    KeyW: {},
    KeyX: {},
    KeyY: {},
    KeyZ: {}
};


document.addEventListener('keydown', function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var img = document.createElement('img');
            img.src = letters[event.code].url;

            img.id = "imageId";

            img.style.width = letters[event.code].width;
            container.appendChild(img);
            
        }  
        // hover(img); 

});

// var img = document.createElement("img");     //创建一个img元素  
//         img.src="q.png";   //给img元素的src属性赋值  
//         //bigImg.width="320";  //320个像素 不用加px  
//         var div = document.getElementById('div'); //获得dom对象  
//         div.appendChild(img);      //为dom添加子元素img  

// // var bgHue = 0;



// for (key in letters) {
//     // bgHue += Math.floor( 360 / (Object.keys(letters).length) );
//     letters[key].bgColor = "hsl(" + bgHue + ", 100%, 50%)";
// };

// document.addEventListener('keydown', function(event){
//     if (event.keyCode >= 65 && event.keyCode <= 90) {


//         // var div = document.createElement('div');
//         // div.classList.add('letter');
//         var imgHTML="<img src="q.png">" ;

//         // add capital class
//         if (event.shiftKey == true) {
//             div.classList.add('capital');
//         };

//         div.style.backgroundColor = letters[event.code].bgColor;
//         container.appendChild(div);

//        // document.getElementById("insert").innerHTML='<img src="new_banner.jpg" height="100" width="100" />';

//         // eg: a, b, z
//         // console.log("key: " + event.key);

//         // eg: KeyA, KeyB, etc
//         // console.log("code: " + event.code);

//         // eg: 65, 68, etc
//         // console.log("code: " + event.keyCode);

//         // log the color
//         // console.log("color: " + letters[event.code].bgColor);

//         // change the background color
//         // document.documentElement.style.backgroundColor = letters[event.code].bgColor;

//         // add a letter to container
//         // container.innerHTML += event.key;
//     } else if (event.keyCode == 32) {
//         var div = document.createElement('div');
//         div.classList.add('space');
//         container.appendChild(div);
//     } else if (event.keyCode == 8) {
//         container.removeChild( container.lastChild );
//     }
// });
