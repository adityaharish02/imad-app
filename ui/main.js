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

/* var button = document.getElementById('counter');

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if (request.status === 200){
          var counter =  request.responseText;
          var span = document.getElementById('count');
          span.innerHTML  = counter.toString();
        }
      } 
    };
    
    request.open('GET','http://adityaharish04.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
*/


/*
var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if (request.status === 200){
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for(var i=0; i<names.length; i++){
                list += '<li>'+names[i]+'</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
        }
      } 
    };
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://adityaharish04.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
} ;
*/
var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if (request.status === 200){
            alert('Logged in successfully !!');
        }
        else if(request.status === 403){
            alert('Username/password is incorrect');
        }
        else if(request.status === 500){
            alert('Something went wrong on the server.');
        }
      } 
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://adityaharish04.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
} ;
