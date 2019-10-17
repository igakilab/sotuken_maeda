let clik = 0;
let daiceme = 0;
let t1 = 24;
let t2 = 21;
let t3 = 27;
let f1 = 0;
let f2 = 0;
let log = [];
let cf = 0;

/乱数で１～６の数字を生成しdaice.numに代入。数字に合ったgifを再生/

function daice(e) {
  if (daiceme == 0) {
    clikc();
    let daice = Math.floor(Math.random() * 6) + 1;
    document.images['dice'].src = '6d_0' + daice + '.gif'

    let daice1 = Math.floor(Math.random() * 6) + 1;
    document.images['dice1'].src = '6d_0' + daice1 + '.gif'
    daiceme = daice + daice1;
  }
}

/daicesoundを再生する/

function ring() {
  document.getElementById("daicesound").play();
}

/ダイスを回した回数を数える/

function clikc() {
  clik = clik + 1;
  document.getElementById( "kaisu" ).innerHTML = clik;
}

/タスク1をクリックしたときの処理/

function disp1(num) {
  if (num == 1) {
    if (t1 <= 0) {
      window.alert('task1はDoneです.Doneに移動させてください');
    } else if (t1 < 24) {
      window.alert('task1はDoingです.Doingに移動させてください');
    } else {
      t1 = t1 - daiceme;
      daiceme = 0;
      cf = 0;
      if (t1 > 0) {
        window.alert('残り' + t1 + 'です');
        document.images['dice'].src = '6d.gif'
        document.images['dice1'].src = '6d.gif'
        document.images['card'].src = "card.png"
      } else {
        window.alert('お疲れ様です.task1をDoneに移動しましょう');
        document.images['dice'].src = '6d.gif'
        document.images['dice1'].src = '6d.gif'
        document.images['card'].src = "card.png"
        f1 = 1;
      }
    }
  }

  if (num == 2) {
    if (t1 <= 0) {
      window.alert('task1はDoneです.Doneに移動させてください');
    } else if (t1 >= 24) {
      window.alert('task1はToDoです.ToDoに移動させてください');
    } else {
      t1 = t1 - daiceme;
      daiceme = 0;
      cf = 0;
      if (t1 > 0) {
        window.alert('残り' + t1 + 'です');
        document.images['dice'].src = '6d.gif'
        document.images['dice1'].src = '6d.gif'
        document.images['card'].src = "card.png"
      } else {
        window.alert('お疲れ様です.task1をDoneに移動しましょう');
        document.images['dice'].src = '6d.gif'
        document.images['dice1'].src = '6d.gif'
        document.images['card'].src = "card.png"
        f1 = 1;
      }
    }
  }
  if (num == 3) {
    if (t1 <= 0) {
      window.alert('task1はDoneです');
    } else if (t1 < 24) {
      window.alert('task1はDoingです.Doingに移動させてください');
    } else {
      window.alert('task1はToDoです.ToDoに移動させてください');
    }
  }

}


/タスク2をクリックしたときの処理/

function disp2(num, be) {
  if (be == 3) {
    if (f1 == 1) {
      if (num == 1) {
        if (t2 <= 0) {
          window.alert('task2はDoneです.Doneに移動させてください');
        } else if (t2 < 21) {
          window.alert('task2はDoingです.Doingに移動させてください');
        } else {
          t2 = t2 - daiceme;
          daiceme = 0;
          cf = 0;
          if (t2 > 0) {
            window.alert('残り' + t2 + 'です');
            document.images['dice'].src = '6d.gif'
            document.images['dice1'].src = '6d.gif'
            document.images['card'].src = "card.png"
          } else {
            window.alert('お疲れ様です.task2をDoneに移動しましょう');
            document.images['dice'].src = '6d.gif'
            document.images['dice1'].src = '6d.gif'
            document.images['card'].src = "card.png"
            f2 = 1;
          }
        }
      }

      if (num == 2) {
        if (t2 <= 0) {
          window.alert('task2はDoneです.Doneに移動させてください');
        } else if (t2 >= 21) {
          window.alert('task2はToDoです.ToDoに移動させてください');
        } else {
          t2 = t2 - daiceme;
          daiceme = 0;
          cf = 0;
          if (t2 > 0) {
            window.alert('残り' + t2 + 'です');
            document.images['dice'].src = '6d.gif'
            document.images['dice1'].src = '6d.gif'
            document.images['card'].src = "card.png"
          } else {
            window.alert('お疲れ様です.task2をDoneに移動しましょう');
            document.images['dice'].src = '6d.gif'
            document.images['dice1'].src = '6d.gif'
            document.images['card'].src = "card.png"
            f2 = 1;
          }
        }
      }

      if (num == 3) {
        if (t2 <= 0) {
          window.alert('task2はDoneです');
        } else if (t2 < 21) {
          window.alert('task2はDoingです.Doingに移動させてください');
        } else {
          window.alert('task2はToDoです.ToDoに移動させてください');
        }
      }
    } else {
      window.alert('先にtask1を終わらせましょう');
    }
  } else {
    window.alert('task1をDoneに移動しましょう');
  }
}

/タスク3をクリックしたときの処理/

function disp3(num, be) {
  if (be == 3) {
    if (f2 == 1) {
      if (num == 1) {
        if (t3 <= 0) {
          window.alert('task3はDoneです.Doneに移動してもう一度クリックしてください');
        } else if (t3 < 27) {
          window.alert('task3はDoingです.Doingに移動させてください');
        } else {
          t3 = t3 - daiceme;
          daiceme = 0;
          cf = 0;
          if (t3 > 0) {
            window.alert('残り' + t3 + 'です');
            document.images['dice'].src = '6d.gif'
            document.images['dice1'].src = '6d.gif'
            document.images['card'].src = "card.png"
          } else {
            window.alert('お疲れ様です.task3をDoneに移動してもう一度クリックしてください');
            document.images['dice'].src = '6d.gif'
            document.images['dice1'].src = '6d.gif'
            document.images['card'].src = "card.png"
          }
        }
      }

      if (num == 2) {
        if (t3 <= 0) {
          window.alert('task3はDoneです.Doneに移動してもう一度クリックしてください');
        } else if (t3 >= 27) {
          window.alert('task3はToDoです.ToDoに移動させてください');
        } else {
          t3 = t3 - daiceme;
          daiceme = 0;
          cf = 0;
          if (t3 > 0) {
            window.alert('残り' + t3 + 'です');
            document.images['dice'].src = '6d.gif'
            document.images['dice1'].src = '6d.gif'
            document.images['card'].src = "card.png"
          } else {
            window.alert('お疲れ様です.task3をDoneに移動してもう一度クリックしてください');
            document.images['dice'].src = '6d.gif'
            document.images['dice1'].src = '6d.gif'
            document.images['card'].src = "card.png"
          }
        }
      }

      if (num == 3) {
        if (t3 <= 0) {
          window.alert("クリアおめでとう！！ スコアは" + clik + "回です");
        } else if (t3 < 27) {
          window.alert('task3はDoingです.Doingに移動させてください');
        } else {
          window.alert('task3はToDoです.ToDoに移動させてください');
        }
      }
    } else {
      window.alert('先にtask2を終わらせましょう');
    }
  } else {
    window.alert('task2をDoneに移動しましょう');
  }
}



function chance() {
  if (daiceme == 0) {
    window.alert('先にダイスを振りましょう');
  } else if (cf == 0) {
    let chance = Math.floor(Math.random() * 8) + 1;
    document.images['card'].src = "e" + chance + ".jpg"
    event(chance);
    cf = 1;
  }
}

function event(c) {

  if (c == 1) {
    daiceme = daiceme + 2;
  }

  if (c == 2) {
    clikc();
    clikc();
  }

  if (c == 3) {
    if (f2 == 1) {
      t3 = 27;
      window.alert('タスクが27になりました ToDoに移動させてください');
    } else if (f1 == 1) {
      t2 = 21;
      window.alert('タスクが21になりました ToDoに移動させてください');
    } else {
      t1 = 24;
      window.alert('タスクが24になりました ToDoに移動させてください');
    }
  }

 if(c==4){
   daiceme = 1000;
 }

 if(c==5){
   daiceme= daiceme*2;
 }

 if(c==6){
   daiceme=daiceme + 4;
 }


 if (c==8){
  daiceme=daiceme/2;
 }
}
