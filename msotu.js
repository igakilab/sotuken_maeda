let clik = 0; //クリック総数
let daiceme = 0; //ダイスの目
let task = [0, 23, 30, 27, 24, 16, 43, 36, 24, 68, 21]; //ストーリーのタスク
let taskmax = [0, 15, 20, 18, 16, 11, 29, 24, 16, 45, 14]; //タスクの初期値
let rtask = [0, 8, 10, 9, 8, 5, 14, 12, 8, 22, 7];//redyのタスク残量
let dtask = [0, 15, 20, 18, 16, 11, 29, 24, 16, 45, 14];//doingのタスク残量
let taskarea = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //タスクがある場所
let df = 0; //ダイスをこのターン振っているか判断
let cf = 0; //チャンスカードを引いているか判断
let sf = 0; //solutionを試みようとしているかの判断
let select = 0; //選択されているストーリー
let doing = 0; //doingにあるストーリーの数
let ready = 0;//readyにあるストーリーの数
let done = 0; //doneにあるストーリーの数
let amari = 0; //タスクを減らしたときのあまり
let player = 1; //プレイヤー
let count = 0; //ターン経過数
let snum = [0, 0, 0, 0, 0]; //player毎のsolutionカードの所持数
let problem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //problemが発生してるかどうか
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //誰が担当しているか
let drag = 0; //ドラッグしているストーリーの番号
let psen = [0, "技術的障害に遭遇した。", "品質が不十分なため作業が進められない。", "このタスクをこなすにはスキル不足である。", "他部署とコミュニケーションが十分にできない。", "作業に計画以上のコストがかかる。", "テストがうまくできない。", "仕様が不明確で困る。", "ユーザが満足していないように思われる。"];
let round = 1; //ラウンド数を数える
let log = [311,0,0,0,0,0,0,0,0,0,0,0,0];

function shuffle() {
  let urlparams = new URLSearchParams(window.location.search);
  $ninzu = urlparams.get('p1');
}

//起動時ストーリーカードに文字を挿入する
function insert() {
  for (let i = 1; i < 11; i++) {
    if (task[i] < 0) {
      task[i] = 0;
    }
    if (rtask[i] < 0) {
      rtask[i] = 0;
    }
    if (dtask[i] < 0) {
      dtask[i] = 0;
    }
  }
  document.getElementById("card1").innerHTML = "<br>画面のデザイン・作成<br>";
  document.getElementById("card2").innerHTML = "<br>ユーザアカウントの作成・ログイン機能の開発<br>";
  document.getElementById("card3").innerHTML = "<br>動画アップロード機能の開発<br>";
  document.getElementById("card4").innerHTML = "<br>動画を検索する機能の開発<br>";
  document.getElementById("card5").innerHTML = "<br>動画を評価する機能の開発<br>";
  document.getElementById("card6").innerHTML = "<br>ユーザと配信者のコミュニケーション機能の開発<br>";
  document.getElementById("card7").innerHTML = "<br>課金システムの開発<br>";
  document.getElementById("card8").innerHTML = "<br>オンライン機能の開発<br>";
  document.getElementById("card9").innerHTML = "<br>セキュリティの検討・設計<br>";
  document.getElementById("card10").innerHTML = "<br>全体のテスト・修正<br>";


  for (let j = 1; j < 11; j++) {
    if (problem[j] > 0) {
      if (problem[j] == 1) {
        document.getElementById("card" + j).innerHTML = "<font color='red'>problem</font><br>" + psen[1] + "<br>";
      }
      if (problem[j] == 2) {
        document.getElementById("card" + j).innerHTML = "<font color='red'>problem</font><br>" + psen[2] + "<br>";
      }
      if (problem[j] == 3) {
        document.getElementById("card" + j).innerHTML = "<font color='red'>problem</font><br>" + psen[3] + "<br>";
      }
      if (problem[j] == 4) {
        document.getElementById("card" + j).innerHTML = "<font color='red'>problem</font><br>" + psen[4] + "<br>";
      }
      if (problem[j] == 5) {
        document.getElementById("card" + j).innerHTML = "<font color='red'>problem</font><br>" + psen[5] + "<br>";
      }
      if (problem[j] == 6) {
        document.getElementById("card" + j).innerHTML = "<font color='red'>problem</font><br>" + psen[6] + "<br>";
      }
      if (problem[j] == 7) {
        document.getElementById("card" + j).innerHTML = "<font color='red'>problem</font><br>" + psen[7] + "<br>";
      }
      if (problem[j] == 8) {
        document.getElementById("card" + j).innerHTML = "<font color='red'>problem</font><br>" + psen[8] + "<br>";
      }
    }
  }
  for (let i = 1; i < 11; i++) {
    task[i]= rtask[i]+dtask[i];
  }
  for (let i = 1; i < 11; i++) {
    document.getElementById("kosu" + i).innerHTML = task[i] +"("+rtask[i]+"+"+dtask[i]+")";
  }
}


//doingにあるストーリーの数を数える
function status() {
  doing = 0;
  ready = 0;
  for (let i = 1; i < 11; i++) {
    if (taskarea[i] == 2) {
      doing++;
    }
  }
  for (let i = 1; i < 11; i++) {
    if (taskarea[i] == 4) {
      ready++;
    }
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

  for (let i = 1; i < 11; i++) {
    if (taskarea[i] == 3 && task[i] > 0) {
      document.getElementById("log").innerHTML = '問題があります修正してください';
      return 0;
    }
  }

  if (select == 0) {
    document.getElementById("log").innerHTML = 'storyを選択してください';
  } else if (taskarea[select] == 1 || taskarea[select] == 3) {
    document.getElementById("log").innerHTML = 'readyかdoingにあるストーリーを<br>選択してください';
  } else if (df == 0) {
    df = 1;
    clikc();
    ring();
    status();
    if (doing == 0 &&ready ==0) {
      document.getElementById("log").innerHTML = "storyを作業する場所に移動してください";
      df = 0;
    } else {
      let daice = Math.floor(Math.random() * 6) + 1;
      document.images['dice'].src = '6d_0' + daice + '.gif'

      let daice1 = Math.floor(Math.random() * 6) + 1;
      document.images['dice1'].src = '6d_0' + daice1 + '.gif'
      daiceme = daice + daice1;
      document.getElementById("log").innerHTML = "";
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
function sentaku(z) { //ｚ＝ストーリーの番号
for (let i = 1; i < 11; i++) {//担当なしを白に担当アリは担当の色に変える
if(res[i] == 0){
  document.getElementById("task" + i).className = "note";
}else{
  document.getElementById("task" + i).className = "player" + res[i] + "-note";
}
}
if(res[z] ==0){//クリックしたタスクが担当なしなら色なしで表示する
  for (let i = 1; i <= $ninzu; i++) {
    if (player == i) {
      document.getElementById("task" + z).className = "noplayer" + i + "-note";
    }
  }
}
}

//チャンスカードのクリックしたときの動き
function chance() {

  for (let i = 1; i < 11; i++) {
    if (taskarea[i] == 3 && task[i] > 0) {
      document.getElementById("log").innerHTML = '問題があります修正してください';
      return 0;
    }
  }
  if (df == 0) {
    document.getElementById("log").innerHTML = '先にダイスを振りましょう';
  } else if (taskarea[select] == 1 || taskarea[select] == 3) {
    document.getElementById("log").innerHTML = '作業中のストーリーを<br>選択してください';
  } else if (cf == 0) {
    let ck = Math.floor(Math.random() * 3) + 1;
    if (ck == 1) {
      let chance = Math.floor(Math.random() * 9) + 1;
      document.images['card'].src = "e" + chance + ".jpg"
      event(chance);
    }
    if (ck == 2) {
      let chance = Math.floor(Math.random() * 8) + 1;
      document.images['card'].src = "p" + chance + ".jpg"
      problemevent(chance);
    }
    if (ck == 3) {
      let chance = Math.floor(Math.random() * 10) + 1;
      document.images['card'].src = "k0.jpg"
      solutioncount();
    }
    cf = 1;
  }
}

//チャンスカードの処理
function event(c) {

  if (c == 1) {
    daiceme = daiceme + 2;
  }

  if (c == 2) {
    daiceme = daiceme + 2;
  }

  if (c == 3) {
    window.alert("doingにあるストーリーのタスクが元に戻ってしまった！！")
    for (let i = 1; i < 11; i++) {
      if (taskarea[i] == 2) {
        dtask[i] = taskmax[i];
      }
    }
    insert();
  }

  if (c == 4) {
    for (let i = 1; i < 11; i++) {
      if (taskarea[i] == 2) {
        dtask[i] = 0;
        problem[i] = 0;
        break;
      }
    }
    insert();
  }

  if (c == 5) {
    daiceme = daiceme * 2;
  }

  if (c == 6) {
    daiceme = daiceme + 4;
  }

  if (c == 7) {
    for (let i = 1; i < 11; i++) {
      if (problem[i] > 0) {
        problem[i] = 0;
        break;
      }
    }
    insert();
    }


  if (c <= 8) {
    daiceme = daiceme / 2;
  }


}

//solutionを引いたときの処理
function solutioncount() {
  snum[player]++;
  if ($ninzu == 1) {
    document.getElementById("solution").innerHTML = 'ソリューション　P1:' + snum[1];
  }
  if ($ninzu == 2) {
    document.getElementById("solution").innerHTML = 'ソリューション　P1:' + snum[1] + ' P2:' + snum[2];
  }
  if ($ninzu == 3) {
    document.getElementById("solution").innerHTML = 'ソリューション　P1:' + snum[1] + ' P2:' + snum[2] + ' P3:' + snum[3];
  }
  if ($ninzu == 4) {
    document.getElementById("solution").innerHTML = 'ソリューション　P1:' + snum[1] + ' P2:' + snum[2] + ' P3:' + snum[3] + ' P4:' + snum[4];
  }
}

//solutionbuttonを押したときの処理
function solutionevent() {
  if (sf == 2) {
    document.getElementById("log").innerHTML = 'solutionは1ターンに<br>1回のみ使えます';
  } else if (snum[player] == 0) {
    window.alert("あなたはsolutionカードを持っていません");
  } else {
    document.getElementById("log").innerHTML = 'problemを解決します<br>好きなstoryを選んでください';
    sf = 1;
  }
}

//引いたProblemを条件によって振り分ける
function problemevent(p) {
  if (problem[select] == 0) {
    problem[select] = p;
    insert();
  } else {
    for (let i = 1; i < 11; i++) {
      if (taskarea[i] == 2 && problem[i] == 0) {
        problem[i] = p;
        insert();
        return 0;
      }
    }
    for (let i = 1; i < 11; i++) {
      if (taskarea[i] == 1 && problem[i] == 0) {
        problem[i] = p;
        insert();
        return 0;
      }
    }
  }
}


//endボタンを押したときの処理
function end() {
  if (player == $ninzu) {
    insert();
    sum(round);
    player = 0;
    round++;
    document.getElementById("round").innerHTML = round;
  }
  player++;
  document.getElementById("player").innerHTML = 'player' + player + 'の番です';
  df = 0;
  daiceme = 0;
  cf = 0;
  sf = 0;
  reset();
  document.getElementById("log").innerHTML = '';
  count++;
  if (count >= 12 * $ninzu) {
    finishtxt();
  }
}


//ストーリーをクリックしたときの処理
function disp(num, max, name, s) { //num=taskarea[],max=taskmax[],name='タスク名',s=ストーリーの番号

  //ここからsolutionの処理
  if (sf == 1) {
    if (problem[s] == 0) {
      document.getElementById("log").innerHTML = '選択したstoryには<br>Problemはありません';
      sf = 0;
    } else {
      let pnum = problem[s];
      let result = window.confirm(psen[pnum] + '\n\nこの問題を解決するためにあなたの解決策を披露してください\n\n他の人はこの解決策がいいと思ったら「ok」をダメだと思ったら「キャンセル」を選んでください');
      if (result) {
        sf = 2;
        problem[s] = 0;
        insert();
        snum[player] = snum[player] - 2;
        solutioncount();
        document.getElementById("log").innerHTML = 'problemは解決されました';
      } else {
        document.getElementById("log").innerHTML = '残念。別の解決策を考えましょう';
        sf = 2;
      }
    }
    return 0;
  }
  //ここまで
  select = s;
  if (daiceme == 0) {
    sentaku(select);
    return 0;
  }

  if (num == 1) {
    if (task[select] <= 0) {
      window.alert(name + 'はDoneです.Doneに移動させてください');
      sentaku(select);
    } else if (task[select] < max) {
      window.alert(name + 'はDoingです.Doingに移動させてください');
      sentaku(select);
    } else if (task[select] > 0) {

      sentaku(select);
    }
  }



  if(num ==4){
    if (rtask[select] <= 0) {
      window.alert(name + 'は準備完了です。doingに移ってください');
      sentaku(select);
    } else {
      sound();
      amari = daiceme - rtask[select];
      rtask[select] = rtask[select] - daiceme;
      daiceme = 0;

      if (rtask[select] > 0) {
        sentaku(select);
      } else {
        window.alert(name + 'は準備完了です。doingに移ってください');

        sentaku(select);
        status();
        if (ready > 1) {
          daiceme = amari;
        }
      }
    }

  }




  if (num == 2) {

   if(res[select]>0 && res[select] != player){
     window.alert('担当ではないため出目を半分にして作業します');
     daiceme /= 2;
   }

   if(rtask[select]>0){
     window.alert('先に準備しましょう');
     return 0;
   }

    if (dtask[select] <= 0) {
      window.alert(name + 'はDoneです.Doneに移動させてください');
      sentaku(select);
    } else {
      sound();
      amari = daiceme - dtask[select];
      dtask[select] = dtask[select] - daiceme;
      daiceme = 0;

      if(res[select] == 0){
        res[select] =player;
      }

      if (dtask[select] > 0) {
        sentaku(select);
      } else {
        window.alert('お疲れ様です.' + name + 'をDoneに移動しましょう');

        sentaku(select);
        status();
        if (doing > 1) {
          daiceme = amari;
        }
      }
    }
  }

  if (num == 3) {
    if (task[select] <= 0) {
      window.alert(name + 'はDoneです');
    } else if (task[select] <= max) {
      window.alert(name + 'はDoingです.Doingに移動させてください');
      sentaku(select);
    }
  }
  insert();
}

//ドロップしたところを登録する処理
function drop(num, id) {
  for (let i = 1; i < 11; i++) {
    if (id == 'task' + i) {
      taskarea[i] = num;
    }
  }
}

function finish() { //全タスク終了時
  done = 0;
  for (let i = 1; i < 11; i++) {
    if (taskarea[i] == 3) {
      done++;
    }
  }
  if (done == 10) {
    for (let i = 1; i < 11; i++) {
      if (task[i] > 0) {
        return 0;
      }
    }
    finishtxt();
  }
}

function finishtxt() { //ゲーム終了時の文章表示
  window.alert("お疲れ様ゲーム終了です");

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels:['0','1','2','3','4','5','6','7','8','9','10','11','12'],
    datasets:[{
      label:'ave',
      data:[311,285,259,233,207,181,155,129,103,77,51,25,0],
      backgroundColor:"rgba(153,255,51,0.4)"
    },
  {
    label:'log',
    data:[311,log[1],log[2],log[3],log[4],log[5],log[6],log[7],log[8],log[9],log[10],log[11],log[12]],
    backgroundColor:"rgba(255,153,0,0.4)"
  }]
  }
  });
}

function sum(roubd) {
  for(let i =1;i < 11; i++){
    log[round] += task[i];
  }
}
