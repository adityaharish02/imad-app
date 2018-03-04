console.log('Loaded!');

/*var element = document.getElementById('main-text');
element.innerHTML = 'New values';

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';    
}

img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};
*/

var button = document.getElemntById('counter');
button.onclick = function(){
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toSring();
};