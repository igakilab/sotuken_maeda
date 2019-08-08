var clik = 0;
var daiceme = 0;
var t1 = 20;
var log = [];

/乱数で１～６の数字を生成しdaice.numに代入。数字に合ったgifを再生/
function daice() {
  clikc();
  var daice = new Object();
  daice = eval(Math.floor(Math.random() * 6) + 1);
  daiceme = daice;
  document.images['dice'].src = '6d_0' + daice + '.gif'
}

/daicesoundを再生する/
function ring() {
			document.getElementById("daicesound").play();
		}

/ダイスを回した回数を数える/
function clikc(){
  clik=clik+1;
 }

 function disp(){
   if(t1<=0){
     window.alert('task1はDoneです');
   }else {
     t1 = t1-daiceme;
   daiceme = 0;
   if(t1>0){
     window.alert('残り' + t1+'です');
     document.images['dice'].src = '6d.gif'
   }
   else {
      window.alert('お疲れ様です.task1はDoneです');
      window.alert(　clik　+"回で終わりました");

    }
   }

 }


function disp1(){
  if(t1<=0){
    window.alert('task1はDoneです');
  }else if (t1<20) {
    window.alert('task1はDoingです');
  }else {
    t1 = t1-daiceme;
  daiceme = 0;
  if(t1>0){
    window.alert('残り' + t1+'です');
    document.images['dice'].src = '6d.gif'
  }
 	else {
     window.alert('お疲れ様です.task1はDoneです');
   }
  }
}

function disp2(){

  if(t1<=0){
    window.alert('task1はDoneです');
  }else if (t1==20) {
    window.alert('task1はtodoです');
  }else {
    t1 = t1-daiceme;
  daiceme = 0;
  if(t1>0){
    window.alert('残り' + t1+'です');
    document.images['dice'].src = '6d.gif'
  }
  else {
     window.alert('お疲れ様です.task1はDoneです');
     window.alert(　clik　+"回で終わりました");

   }
  }
}

function disp3(){

  if(t1<=0){
    window.alert('task1はDoneです');
  }else if (t1<20) {
    window.alert('task1はDoingです');
  }else {
    window.alert('task1はtodoです');
  }
}
