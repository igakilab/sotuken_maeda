let clik = 0; //クリック総数
let daiceme = 0; //ダイスの目
let t1 = 24; //ストーリー1のタスク
let t2 = 21; //ストーリー2のタスク
let t3 = 27; //ストーリー3のタスク
let cf = 0; //チャンスカードを引いているか判断
let select = 0; //選択されているストーリー
let doing = 0;//doingにあるストーリーの数
let amari = 0;//タスクを減らしたときのあまり

//doingにあるストーリーの数を数える
function status() {
  doing=0;
  if(t1a==2){
    doing+=1;
  }
  if(t2a==2){
    doing+=1;
  }
  if(t3a==2){
    doing+=1;
  }
}


//ダイスの画像とチャンスカードの画像をデフォルトに戻す"
function reset() {
  document.images['dice'].src = '6d.gif'
  document.images['dice1'].src = '6d.gif'
  document.images['card'].src = "card.png"
}


//乱数で１～６の数字を生成しdaice.numに代入。数字に合ったgifを再生
function daice(e) {
  if (select == 0) {
    window.alert('storyを選択してください');
  } else if (daiceme == 0) {
    clikc();
    ring();
    status();
    if(doing==3){
      let daice = Math.floor(Math.random() * 2) + 1;
      document.images['dice'].src = '6d_0' + daice + '.gif'

      let daice1 = Math.floor(Math.random() * 2) + 1;
      document.images['dice1'].src = '6d_0' + daice1 + '.gif'
      daiceme = daice + daice1;
      window.alert("サイコロが1/3になっています");
    }
    if(doing==2){
      let daice = Math.floor(Math.random() * 4) + 1;
      document.images['dice'].src = '6d_0' + daice + '.gif'

      let daice1 = Math.floor(Math.random() * 4) + 1;
      document.images['dice1'].src = '6d_0' + daice1 + '.gif'
      daiceme = daice + daice1;
      window.alert("サイコロが2/3になっています");
    }
    if(doing==1){
    let daice = Math.floor(Math.random() * 6) + 1;
    document.images['dice'].src = '6d_0' + daice + '.gif'

    let daice1 = Math.floor(Math.random() * 6) + 1;
    document.images['dice1'].src = '6d_0' + daice1 + '.gif'
    daiceme = daice + daice1;
  }
  if(doing==0){
    window.alert("storyをDoingに移動してください");
  }

  }
}


//daicesoundを再生する
function ring() {
  document.getElementById("daicesound").play();
}

//タスクが減ったときになるおと
function sound() {
  if (daiceme > 0) {
    document.getElementById("clikcsound").play();
  }
}


//ダイスを回した回数を数える
function clikc() {
  clik = clik + 1;
}


//ストーリーを選択したときの画像変更
function sentaku(z) {
  if (z == 1) {
    document.images['task1'].src = 't1.1.jpg'
    document.images['task2'].src = 't2.jpg'
    document.images['task3'].src = 't3.jpg'
  }
  if (z == 2) {
    document.images['task1'].src = 't1.jpg'
    document.images['task2'].src = 't2.1.jpg'
    document.images['task3'].src = 't3.jpg'
  }
  if (z == 3) {
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
      select = 1;
      sentaku(select);
    } else if (t1 < 24) {
      window.alert('task1はDoingです.Doingに移動させてください');
      select = 1;
      sentaku(select);
    } else if (t1 > 0) {
      document.getElementById("task").innerHTML = t1;
      select = 1;
      sentaku(select);

    }
  }

  if (num == 2) {
    if (t1 <= 0) {
      window.alert('task1はDoneです.Doneに移動させてください');
      select = 1;
      daiceme = 0;
      cf = 0;
      reset();
      sentaku(select);
    } else {
      sound();
      amari=daiceme-t1;
      t1 = t1 - daiceme;
      daiceme = 0;
      cf = 0;
      if (t1 > 0) {
        document.getElementById("task").innerHTML = t1
        select = 1;
        sentaku(select);
        reset();
      } else {
        window.alert('お疲れ様です.task1をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
        select = 1;
        sentaku(select);
        daiceme=amari;
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
function disp2(num) {
  if (num == 1) {
    if (t2 <= 0) {
      window.alert('task2はDoneです.Doneに移動させてください');
      select = 2;
      sentaku(select);
    } else if (t2 < 21) {
      window.alert('task2はDoingです.Doingに移動させてください');
      select = 2;
      sentaku(select);
    } else if (t2 > 0) {
      document.getElementById("task").innerHTML = t2;
      select = 2;
      sentaku(select);
    }
  }

  if (num == 2) {
    if (t2 <= 0) {
      window.alert('task2はDoneです.Doneに移動させてください');
      select = 2;
      sentaku(select);
      daiceme = 0;
      cf = 0;
      reset();
    } else {
      sound();
      amari=daiceme-t2;
      t2 = t2 - daiceme;
      daiceme = 0;
      cf = 0;
      if (t2 > 0) {
        document.getElementById("task").innerHTML = t2;
        select = 2;
        sentaku(select);
        reset();
      } else {
        window.alert('お疲れ様です.task2をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
        select = 2;
        sentaku(select);
        daiceme = amari;
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
function disp3(num) {
  if (num == 1) {
    if (t3 <= 0) {
      window.alert('task3はDoneです.Doneに移動してもう一度クリックしてください');
      select = 3;
      sentaku(select);
    } else if (t3 < 27) {
      window.alert('task3はDoingです.Doingに移動させてください');
      select = 3;
      sentaku(select);
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
      select = 3;
      sentaku(select);
      daiceme = 0;
      cf = 0;
      reset();
    } else {
      sound();
      amari=daiceme - t3;
      t3 = t3 - daiceme;
      daiceme = 0;
      cf = 0;
      if (t3 > 0) {
        document.getElementById("task").innerHTML = t3;
        select = 3;
        sentaku(select);
        reset();
      } else {
        window.alert('お疲れ様です.task3をDoneに移動してもう一度クリックしてください');
        document.getElementById("task").innerHTML = 0;
        daiceme=amari;
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
    window.alert("doingにあるストーリーのタスクが元に戻ってしまった！！")
    if (t3a == 2) {
      t3 = 27;
    }
    if (t2a == 2) {
      t2 = 21;
    }
    if (t1a == 2) {
      t1 = 24;
    }
  }

  if (c == 4) {
    if (t3a == 2) {
      t3 = 0;
    }
    if (t2a == 2) {
      t2 = 0;
    }
    if (t1a == 2) {
      t1 = 0;
    }
  }

  if (c == 5) {
    daiceme = daiceme * 2;
  }

  if (c == 6) {
    daiceme = daiceme + 4;
  }

  if (c == 7) {

  }

  if (c == 8) {
    daiceme = daiceme / 2;
  }
}
