function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

let stopScroll = disableScroll();

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
btn_test.addEventListener('click', function(e){ alert('희망찬 내일을 다짐했지만...');});


var btn_test = document.querySelector('#btn_test2');
btn_test2.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
btn_test2.addEventListener('click', function(e){ alert('나는 공이고 그냥 굴러갔으면 좋겠다');});


var btn_test = document.querySelector('#btn_test3');
btn_test3.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
btn_test3.addEventListener('click', function(e){ alert('내가판우물은 무수히 많은데.. 물이 나오려면 한참 멀은거지?');});


var btn_test = document.querySelector('#btn_test4');
btn_test4.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
btn_test4.addEventListener('click', function(e){ alert('누가 저 좀 데려가주실래요? 공일공-팔팔일일-오육사영 연락바랍니다..');});


var btn_test = document.querySelector('#btn_test5');
btn_test5.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
btn_test5.addEventListener('click', function(e){ alert('그냥 말따먹기 잘하는 사람이 되고싶다..');});


var btn_test = document.querySelector('#btn_test6');
btn_test6.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
btn_test6.addEventListener('click', function(e){ alert('내 앞길은 내가 알아서 ! 알아서 척척 스스로 척척 !');});


var btn_test = document.querySelector('#btn_test7');
btn_test7.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
btn_test7.addEventListener('click', function(e){ alert('나는 공이고 그냥 굴러갔으면 좋겠다');});

var btn_test = document.querySelector('#btn_test8');
btn_test8.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
btn_test8.addEventListener('click', function(e){ alert('내 앞길은 내가 알아서 ! 알아서 척척 스스로 척척 !');});
