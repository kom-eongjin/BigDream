//sets a random absolute position to a html element; receives the html element
function moveElmRand(elm){
 elm.style.position ='absolute';
 elm.style.top = Math.floor(Math.random()*90+5)+'%';
 elm.style.left = Math.floor(Math.random()*90+5)+'%';
}

//get the #btn_test
var btn_test = document.querySelector('#btn_test');

//register to call moveElmRand() on mouseenter event to #btn_test
btn_test.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});

//register click to #btn_test
btn_test.addEventListener('click', function(e){ alert('놓지못하는 희망');});


var btn_test = document.querySelector('#btn_test2');

btn_test2.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});

btn_test2.addEventListener('click', function(e){ alert('넌 아니라고 하지만');});


var btn_test = document.querySelector('#btn_test3');

btn_test3.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});

btn_test3.addEventListener('click', function(e){ alert('You are Good.');});
