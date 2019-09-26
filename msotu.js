var clik = 0;
var daiceme = 0;
var t1 = 24;
var t2 = 21;
var t3 = 27;
var f1 = 0;
var f2 = 0;
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

/タスク1をクリックしたときの処理/
 function disp1(num){
  if(num==1){
    if(t1<=0){
      window.alert('task1はDoneです.Doneに移動させてください');
    }else if (t1<24) {
      window.alert('task1はDoingです.Doingに移動させてください');
    }else {
      t1 = t1-daiceme;
    daiceme = 0;
    if(t1>0){
      window.alert('残り' + t1+'です');
      document.images['dice'].src = '6d.gif'
    }
   	else {
       window.alert('お疲れ様です.task1をDoneに移動しましょう');
       window.alert("次はtask2に取り組もう");
       f1=1;
     }
    }
  }

  if(num==2){
    if(t1<=0){
      window.alert('task1はDoneです.Doneに移動させてください');
    }else if (t1==24) {
      window.alert('task1はToDoです.ToDoに移動させてください');
    }else {
      t1 = t1-daiceme;
    daiceme = 0;
    if(t1>0){
      window.alert('残り' + t1+'です');
      document.images['dice'].src = '6d.gif'
    }
    else {
       window.alert('お疲れ様です.task1をDoneに移動しましょう');
       window.alert("次はtask2に取り組もう");
       f1=1;
     }
    }
  }
  if(num==3){
    if(t1<=0){
      window.alert('task1はDoneです');
    }else if (t1<24) {
      window.alert('task1はDoingです.Doingに移動させてください');
    }else {
      window.alert('task1はToDoです.ToDoに移動させてください');
    }
  }

 }


 /タスク2をクリックしたときの処理/
  function disp2(num, be){
    if(be==3){
      if(f1==1){
   if(num==1){
     if(t2<=0){
       window.alert('task2はDoneです.Doneに移動させてください');
     }else if (t2<21) {
       window.alert('task2はDoingです.Doingに移動させてください');
     }else {
       t2 = t2-daiceme;
     daiceme = 0;
     if(t2>0){
       window.alert('残り' + t2+'です');
       document.images['dice'].src = '6d.gif'
     }
    	else {
        window.alert('お疲れ様です.task2をDoneに移動しましょう');
        window.alert(　"次はtask3に取り組もう");
        f2=1;
      }
     }
   }

   if(num==2){
     if(t2<=0){
       window.alert('task2はDoneです.Doneに移動させてください');
     }else if (t2==21) {
       window.alert('task2はToDoです.ToDoに移動させてください');
     }else {
       t2 = t2-daiceme;
     daiceme = 0;
     if(t2>0){
       window.alert('残り' + t2+'です');
       document.images['dice'].src = '6d.gif'
     }
     else {
        window.alert('お疲れ様です.task2をDoneに移動しましょう');
        window.alert(　"次はtask3に取り組もう");
        f2=1;
      }
     }
   }

   if(num==3){
     if(t2<=0){
       window.alert('task2はDoneです');
     }else if (t2<21) {
       window.alert('task2はDoingです.Doingに移動させてください');
     }else {
       window.alert('task2はToDoです.ToDoに移動させてください');
     }
   }
 }else{window.alert('先にtask1を終わらせましょう');}
}else{window.alert('task1をDoneに移動しましょう');}
  }

  /タスク3をクリックしたときの処理/
   function disp3(num ,be){
     if(be==3){
       if(f2==1){
    if(num==1){
      if(t3<=0){
        window.alert('task3はDoneです.Doneに移動してもう一度クリックしてください');
      }else if (t3<27) {
        window.alert('task3はDoingです.Doingに移動させてください');
      }else {
        t3 = t3-daiceme;
      daiceme = 0;
      if(t3>0){
        window.alert('残り' + t3+'です');
        document.images['dice'].src = '6d.gif'
      }
     	else {
         window.alert('お疲れ様です.task3をDoneに移動してもう一度クリックしてください');
       }
      }
    }

    if(num==2){
      if(t3<=0){
        window.alert('task3はDoneです.Doneに移動してもう一度クリックしてください');
      }else if (t3==27) {
        window.alert('task3はToDoです.ToDoに移動させてください');
      }else {
        t3 = t3-daiceme;
      daiceme = 0;
      if(t3>0){
        window.alert('残り' + t3+'です');
        document.images['dice'].src = '6d.gif'
      }
      else {
         window.alert('お疲れ様です.task3をDoneに移動してもう一度クリックしてください');
       }
      }
    }

    if(num==3){
      if(t3<=0){
        window.alert(　"クリアおめでとう！！ スコアは"+clik　+"回です");
      }else if (t3<27) {
        window.alert('task3はDoingです.Doingに移動させてください');
      }else {
        window.alert('task3はToDoです.ToDoに移動させてください');
      }
    }
  }else{window.alert('先にtask2を終わらせましょう');}
}else{window.alert('task2をDoneに移動しましょう');}
   }
