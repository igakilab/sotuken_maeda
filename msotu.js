let clik = 0; //クリック総数
let daiceme = 0; //ダイスの目
let t1 = 24; //ストーリー1のタスク
let t2 = 21; //ストーリー2のタスク
let t3 = 27; //ストーリー3のタスク
let cf = 0; //チャンスカードを引いているか判断
let select = 0;//選択されているストーリー
//ダイスの画像とチャンスカードの画像をデフォルトに戻す"
function reset() {
  document.images['dice'].src = '6d.gif'
  document.images['dice1'].src = '6d.gif'
  document.images['card'].src = "card.png"
}


//乱数で１～６の数字を生成しdaice.numに代入。数字に合ったgifを再生
function daice(e) {
  if(select == 0){
    window.alert('storyを選択してください');
  }else if (daiceme == 0) {
    clikc();
    ring();
    let daice = Math.floor(Math.random() * 6) + 1;
    document.images['dice'].src = '6d_0' + daice + '.gif'

    let daice1 = Math.floor(Math.random() * 6) + 1;
    document.images['dice1'].src = '6d_0' + daice1 + '.gif'
    daiceme = daice + daice1;
  }
}


//daicesoundを再生する
function ring() {
  document.getElementById("daicesound").play();
}

//タスクが減ったときになるおと
function sound() {
  if(daiceme>0){
  document.getElementById("clikcsound").play();
}
}


//ダイスを回した回数を数える
function clikc() {
  clik = clik + 1;
}


//ストーリーを選択したときの画像変更
function sentaku(z){
  if(z==1){
    document.images['task1'].src = 't1.1.jpg'
    document.images['task2'].src = 't2.jpg'
    document.images['task3'].src = 't3.jpg'
  }
  if(z==2){
    document.images['task1'].src = 't1.jpg'
    document.images['task2'].src = 't2.1.jpg'
    document.images['task3'].src = 't3.jpg'
  }
  if(z==3){
    document.images['task1'].src = 't1.jpg'
    document.images['task2'].src = 't2.jpg'
    document.images['task3'].src = 't3.1.jpg'
  }
}



//タスク1をクリックしたときの処理
function disp1(num) {
  if (num == 1) {
    if (t1 <= 0) {
      window.alert('task1はDoneです.Doneに移動させてください');
    } else if (t1 < 24) {
      window.alert('task1はDoingです.Doingに移動させてください');
    } else if (t1 > 0) {
      document.getElementById("task").innerHTML = t1;
      select = 1;
      sentaku(select);

    }
  }

  if (num == 2) {
    if (t1 <= 0) {
      window.alert('task1はDoneです.Doneに移動させてください');
    } else {
      sound();
      t1 = t1 - daiceme;
      daiceme = 0;
      cf = 0;
      reset();
      if (t1 > 0) {
        document.getElementById("task").innerHTML = t1
        select = 1;
        sentaku(select);
      } else {
        window.alert('お疲れ様です.task1をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
        select = 1;
        sentaku(select);
      }
    }
  }
  if (num == 3) {
    if (t1 <= 0) {
      window.alert('task1はDoneです');
    } else if (t1 <= 24) {
      window.alert('task1はDoingです.Doingに移動させてください');
      select = 1;
      sentaku(select);
    }
  }

}


//タスク2をクリックしたときの処理
function disp2(num, be) {
  if (num == 1) {
    if (t2 <= 0) {
      window.alert('task2はDoneです.Doneに移動させてください');
    } else if (t2 < 21) {
      window.alert('task2はDoingです.Doingに移動させてください');
    } else if (t2 > 0) {
      document.getElementById("task").innerHTML = t2;
      select = 2;
      sentaku(select);
    }
  }

  if (num == 2) {
    if (t2 <= 0) {
      window.alert('task2はDoneです.Doneに移動させてください');
    } else {
      sound();
      t2 = t2 - daiceme;
      daiceme = 0;
      cf = 0;
      reset();
      if (t2 > 0) {
        document.getElementById("task").innerHTML = t2;
        select = 2;
        sentaku(select);
      } else {
        window.alert('お疲れ様です.task2をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
        select = 2;
        sentaku(select);
      }
    }
  }

  if (num == 3) {
    if (t2 <= 0) {
      window.alert('task2はDoneです');
    } else if (t2 <= 21) {
      window.alert('task2はDoingです.Doingに移動させてください');
      select = 2;
      sentaku(select);
    }
  }
}


//タスク3をクリックしたときの処理
function disp3(num, be) {
  if (num == 1) {
    if (t3 <= 0) {
      window.alert('task3はDoneです.Doneに移動してもう一度クリックしてください');
    } else if (t3 < 27) {
      window.alert('task3はDoingです.Doingに移動させてください');
    } else {
      if (t3 > 0) {
        document.getElementById("task").innerHTML = t3;
        select = 3;
        sentaku(select);
      }
    }
  }

  if (num == 2) {
    if (t3 <= 0) {
      window.alert('task3はDoneです.Doneに移動してもう一度クリックしてください');
    } else {
      sound();
      t3 = t3 - daiceme;
      daiceme = 0;
      cf = 0;
      reset();
      if (t3 > 0) {
        document.getElementById("task").innerHTML = t3;
        select = 3;
        sentaku(select);
      } else {
        window.alert('お疲れ様です.task3をDoneに移動してもう一度クリックしてください');
        document.getElementById("task").innerHTML = 0;
        select = 3;
        sentaku(select);
      }
    }
  }

  if (num == 3) {
    if (t3 <= 0) {
      window.alert("クリアおめでとう！！ スコアは" + clik + "回です");
    } else if (t3 <= 27) {
      window.alert('task3はDoingです.Doingに移動させてください');
      select = 3;
      sentaku(select);
    }
  }
}


//チャンスカードのクリックしたときの動き
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

//チャンスカードの処理
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

  if (c == 4) {
    daiceme = 1000;
  }

  if (c == 5) {
    daiceme = daiceme * 2;
  }

  if (c == 6) {
    daiceme = daiceme + 4;
  }

  if (c == 7) {
    document.images['task1'].src = 't1.1.jpg'
  }

  if (c == 8) {
    daiceme = daiceme / 2;
  }
}
