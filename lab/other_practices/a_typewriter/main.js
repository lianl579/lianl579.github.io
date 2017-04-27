// var container = document.getElementById('container');
var container = document.getElementById('container');

var letters = {
    KeyA: {
        url: 'img/a.png',
    },
    KeyB: {
    	url: 'img/b.png',
    },
    KeyC: {
    	url: 'img/c.png',
    },
    KeyD: {
    	url: 'img/d.png',
    },
    KeyE: {
    	url: 'img/e.png',
    },
    KeyF: {
    	url: 'img/f.png',
    },
    KeyG: {
    	url: 'img/g.png',
    },
    KeyH: {
    	url: 'img/h.png',
    },
    KeyI: {
    	url: 'img/i.png',
    },
    KeyJ: {
    	url: 'img/j.png',
    },
    KeyK: {
    	url: 'img/k.png',
    },
    KeyL: {
    	url: 'img/l.png',
    },
    KeyM: {
    	url: 'img/m.png',
    },
    KeyN: {
    	url: 'img/n.png',
    },
    KeyO: {
    	url: 'img/o.png',
    },
    KeyP: {
    	url: 'img/p.png',
    },
    KeyQ: {
    	url: 'img/q.png',
    },
    KeyR: {
    	url: 'img/r.png',
    },
    KeyS: {
    	url: 'img/s.png',
    },
    KeyT: {
    	url: 'img/t.png',
    },
    KeyU: {
    	url: 'img/u.png',
    },
    KeyV: {
    	url: 'img/v.png',
    },
    KeyW: {
    	url: 'img/w.png',
    },
    KeyX: {
    	url: 'img/x.png',
    },
    KeyY: {
    	url: 'img/y.png',
    },
    KeyZ: {
    	url: 'img/z.png',
    }
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

