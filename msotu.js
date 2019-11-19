let clik = 0; //クリック総数
let daiceme = 0; //ダイスの目
let task = [0,24,21,27,24,24,24,24,24,24,24];//ストーリーのタスク
let t4 = 27; //ストーリー4のタスク
let t5 = 27; //ストーリー5のタスク
let t6 = 27; //ストーリー6のタスク
let t7 = 27; //ストーリー7のタスク
let t8 = 27; //ストーリー8のタスク
let t9 = 27; //ストーリー9のタスク
let t10 = 27; //ストーリー10のタスク
let df = 0;
let cf = 0; //チャンスカードを引いているか判断
let select = 0; //選択されているストーリー
let doing = 0; //doingにあるストーリーの数
let amari = 0; //タスクを減らしたときのあまり
let player = 1;


//起動時ストーリーカードに文字を挿入する
function insert() {
  document.getElementById("card1").innerHTML = "ユーザはあらかじめ指定した相手と、セキュアにメールを送受信できる。";
  document.getElementById("card2").innerHTML = "ユーザは大きなファイルをセキュアに送信できる。";
  document.getElementById("card3").innerHTML = "ユーザは送ったメールに読み取り期限を設定できる。";
  document.getElementById("card4").innerHTML = "ユーザは不特定の相手にセキュアにメールを送信できる。";
  document.getElementById("card5").innerHTML = "管理者はメールを無視できる。";
  document.getElementById("card6").innerHTML = "管理者は組織ごとにセキュリティポリシと受信グループを管理できる。";
  document.getElementById("card7").innerHTML = "ユーザはメールを効果的に管理できる。";
  document.getElementById("card8").innerHTML = "ユーザと管理者はメールをセキュアにバックアップできる。";
  document.getElementById("card9").innerHTML = "ユーザと管理者はメールを完全に削除できる。";
  document.getElementById("card10").innerHTML = "ユーザはモバイル機器からメールを利用できる。";
}

//doingにあるストーリーの数を数える
function status() {
  doing = 0;
  if (t1a == 2) {
    doing += 1;
  }
  if (t2a == 2) {
    doing += 1;
  }
  if (t3a == 2) {
    doing += 1;
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
    document.getElementById("log").innerHTML = 'storyを選択してください';
  } else if (df == 0) {
    df = 1;
    clikc();
    ring();
    status();
    if (doing == 3) {
      let daice = Math.floor(Math.random() * 2) + 1;
      document.images['dice'].src = '6d_0' + daice + '.gif'

      let daice1 = Math.floor(Math.random() * 2) + 1;
      document.images['dice1'].src = '6d_0' + daice1 + '.gif'
      daiceme = daice + daice1;
      document.getElementById("log").innerHTML = "サイコロが1/3になっています";
    }
    if (doing == 2) {
      let daice = Math.floor(Math.random() * 4) + 1;
      document.images['dice'].src = '6d_0' + daice + '.gif'

      let daice1 = Math.floor(Math.random() * 4) + 1;
      document.images['dice1'].src = '6d_0' + daice1 + '.gif'
      daiceme = daice + daice1;
      document.getElementById("log").innerHTML = "サイコロが2/3になっています";
    }
    if (doing == 1) {
      let daice = Math.floor(Math.random() * 6) + 1;
      document.images['dice'].src = '6d_0' + daice + '.gif'

      let daice1 = Math.floor(Math.random() * 6) + 1;
      document.images['dice1'].src = '6d_0' + daice1 + '.gif'
      daiceme = daice + daice1;
      document.getElementById("log").innerHTML = "";
    }
    if (doing == 0) {
      document.getElementById("log").innerHTML = "storyをDoingに移動してください";
      df = 0;
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
  if(player==1){
    document.getElementById("task"+z).className = "player1-note";
}else{
    document.getElementById("task"+z).className = "player2-note";
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
      sentaku(select);
    } else {
      sound();
      amari = daiceme - t1;
      t1 = t1 - daiceme;
      daiceme = 0;
      if (t1 > 0) {
        document.getElementById("task").innerHTML = t1
        select = 1;
        sentaku(select);
      } else {
        window.alert('お疲れ様です.task1をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
        select = 1;
        sentaku(select);
        status();
        if (doing > 1) {
          daiceme = amari;
        }
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
    } else {
      sound();
      amari = daiceme - t2;
      t2 = t2 - daiceme;
      daiceme = 0;
      if (t2 > 0) {
        document.getElementById("task").innerHTML = t2;
        select = 2;
        sentaku(select);
      } else {
        window.alert('お疲れ様です.task2をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
        select = 2;
        sentaku(select);
        status();
        if (doing > 1) {
          daiceme = amari;
        }
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
    } else {
      sound();
      amari = daiceme - t3;
      t3 = t3 - daiceme;
      daiceme = 0;
      if (t3 > 0) {
        document.getElementById("task").innerHTML = t3;
        select = 3;
        sentaku(select);
      } else {
        window.alert('お疲れ様です.task3をDoneに移動してもう一度クリックしてください');
        document.getElementById("task").innerHTML = 0;
        select = 3;
        sentaku(select);
        status();
        if (doing > 1) {
          daiceme = amari;
        }
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
  if (df == 0) {
    document.getElementById("log").innerHTML = '先にダイスを振りましょう';
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

function end() {
  if (player == 1) {
    player = 2;
    document.getElementById("player").innerHTML = 'player2の番です';
  } else {
    player = 1;
    document.getElementById("player").innerHTML = 'player1の番です';
  }
  df = 0;
  daiceme = 0;
  cf = 0;
  reset();
}

function disp(num,max,name,s) {
  select=s;
  if (num == 1) {
    if (task[select] <= 0) {
      window.alert(name+'はDoneです.Doneに移動させてください');
      sentaku(select);
    } else if (task[select] < max) {
      window.alert(name+'はDoingです.Doingに移動させてください');
      sentaku(select);
    } else if (task[select] > 0) {
      document.getElementById("task").innerHTML = task[select];
      sentaku(select);
    }
  }

  if (num == 2) {
    if (task[select] <= 0) {
      window.alert(name+'はDoneです.Doneに移動させてください');
      daiceme = 0;
      sentaku(select);
    } else {
      sound();
      amari = daiceme - task[select];
      task[select] = task[select] - daiceme;
      daiceme = 0;
      if (task[select] > 0) {
        document.getElementById("task").innerHTML = task[select]
        sentaku(select);
      } else {
        window.alert('お疲れ様です.'+name+'をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
        sentaku(select);
        status();
        if(doing>1){
          daiceme = amari;
      }
    }
  }
}
  if (num == 3) {
    if (task[select] <= 0) {
      window.alert(name+'はDoneです');
    } else if (task[select] <= max) {
      window.alert(name+'はDoingです.Doingに移動させてください');
      sentaku(select);
    }
  }
}

function drop(num,id){
  if(id=='task1'){
    t1a=num;
  }
  if(id=='task2'){
    t2a=num;
  }
  if(id=='task3'){
    t3a=num;
  }
  if(id=='task4'){
    t4a=num;
  }
  if(id=='task5'){
    t5a=num;
  }
  if(id=='task6'){
    t6a=num;
  }
  if(id=='task7'){
    t7a=num;
  }
  if(id=='task8'){
    t8a=num;
  }
  if(id=='task9'){
    t9a=num;
  }
  if(id=='task10'){
    t10a=num;
  }
}
