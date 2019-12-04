let clik = 0; //クリック総数
let daiceme = 0; //ダイスの目
let task = [0, 23, 30, 27, 24, 16, 43, 36, 24, 68, 21]; //ストーリーのタスク
let taskmax = [0, 23, 30, 27, 24, 16, 43, 36, 24, 68, 21] //タスクの初期値
let taskarea = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //タスクがある場所
let df = 0; //ダイスをこのターン振っているか判断
let cf = 0; //チャンスカードを引いているか判断
let select = 0; //選択されているストーリー
let doing = 0; //doingにあるストーリーの数
let done = 0; //doneにあるストーリーの数
let amari = 0; //タスクを減らしたときのあまり
let player = 1; //プレイヤー
let count = 0; //ターン経過数
let snum = [0,0,0,0,0];//player毎のsolutionカードの所持数
let problem = [0,0,0,0,0,0,0,0,0,0,0];//problemが発生してるかどうか

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
  }
  document.getElementById("card1").innerHTML = "ユーザはあらかじめ指定した相手と、セキュアにメールを送受信できる。<br>" + task[1];
  document.getElementById("card2").innerHTML = "ユーザは大きなファイルをセキュアに送信できる。<br>" + task[2];
  document.getElementById("card3").innerHTML = "ユーザは送ったメールに読み取り期限を設定できる。<br>" + task[3];
  document.getElementById("card4").innerHTML = "ユーザは不特定の相手にセキュアにメールを送信できる。<br>" + task[4];
  document.getElementById("card5").innerHTML = "管理者はメールを無視できる。<br>" + task[5];
  document.getElementById("card6").innerHTML = "管理者は組織ごとにセキュリティポリシと受信グループを管理できる。<br>" + task[6];
  document.getElementById("card7").innerHTML = "ユーザはメールを効果的に管理できる。<br>" + task[7];
  document.getElementById("card8").innerHTML = "ユーザと管理者はメールをセキュアにバックアップできる。<br>" + task[8];
  document.getElementById("card9").innerHTML = "ユーザと管理者はメールを完全に削除できる。<br>" + task[9];
  document.getElementById("card10").innerHTML = "ユーザはモバイル機器からメールを利用できる。<br>" + task[10];

    for(let j = 1;j < 11; j++){
      if(problem[j] > 0){
        if(problem[j] == 1){
          document.getElementById("card"+j).innerHTML = "problem<br>技術的障害に遭遇した。<br>" + task[j];
        }
        if(problem[j] == 2){
          document.getElementById("card"+j).innerHTML = "problem<br>品質が不十分なため作業が進められない。<br>" + task[j];
        }
        if(problem[j] == 3){
          document.getElementById("card"+j).innerHTML = "problem<br>担当のタスクをこなすにはスキルが不足している。<br>" + task[j];
        }
        if(problem[j] == 4){
          document.getElementById("card"+j).innerHTML = "problem<br>他部署とコミュニケーションが十分にできない。<br>" + task[j];
        }
        if(problem[j] == 5){
          document.getElementById("card"+j).innerHTML = "problem<br>作業に計画以上のコストがかかる。<br>" + task[j];
        }
        if(problem[j] == 6){
          document.getElementById("card"+j).innerHTML = "problem<br>テストがうまくできない。<br>" + task[j];
        }
        if(problem[j] == 7){
          document.getElementById("card"+j).innerHTML = "problem<br>仕様が不明確で困る。<br>" + task[j];
        }
        if(problem[j] == 8){
          document.getElementById("card"+j).innerHTML = "problem<br>ユーザーが満足していないように思われる。<br>" + task[j];
        }
      }
    }
  }


//doingにあるストーリーの数を数える
function status() {
  doing = 0;
  for (let i = 1; i < 11; i++) {
    if (taskarea[i] == 2) {
      doing++;
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

  for(let i = 1; i < 11; i++){
    if(taskarea[i] == 3 &&  task[i] > 0){
      document.getElementById("log").innerHTML = '問題があります修正してください';
      return 0;
    }
  }

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
    } else if (doing == 2) {
      let daice = Math.floor(Math.random() * 4) + 1;
      document.images['dice'].src = '6d_0' + daice + '.gif'

      let daice1 = Math.floor(Math.random() * 4) + 1;
      document.images['dice1'].src = '6d_0' + daice1 + '.gif'
      daiceme = daice + daice1;
      document.getElementById("log").innerHTML = "サイコロが2/3になっています";
    } else if (doing == 1) {
      let daice = Math.floor(Math.random() * 6) + 1;
      document.images['dice'].src = '6d_0' + daice + '.gif'

      let daice1 = Math.floor(Math.random() * 6) + 1;
      document.images['dice1'].src = '6d_0' + daice1 + '.gif'
      daiceme = daice + daice1;
      document.getElementById("log").innerHTML = "";
    } else if (doing == 0) {
      document.getElementById("log").innerHTML = "storyをDoingに移動してください";
      df = 0;
    } else {
      document.getElementById("log").innerHTML = "Doingにストーリーは3つまでです";
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
function sentaku(z) { //ｚ＝ストーリーの番号
  for (let i = 1; i <= $ninzu; i++) {
    if (player == i) {
      document.getElementById("task" + z).className = "player" + i + "-note";
    }
  }
}
//チャンスカードのクリックしたときの動き
function chance() {

  for(let i = 1; i < 11; i++){
    if(taskarea[i] == 3 &&  task[i] > 0){
      document.getElementById("log").innerHTML = '問題があります修正してください';
      return 0;
    }
  }

  if (df == 0) {
    document.getElementById("log").innerHTML = '先にダイスを振りましょう';
  } else if (cf == 0) {
    let ck = Math.floor(Math.random() * 3) + 1;
    if(ck==1){
      let chance = Math.floor(Math.random() * 8) + 1;
      document.images['card'].src = "e" + chance + ".jpg"
      event(chance);
    }
    if(ck==2){
      let chance = Math.floor(Math.random() * 8) + 1;
      document.images['card'].src = "p" + chance + ".jpg"
      problemevent(chance);
     }
    if(ck==3){
      let chance = Math.floor(Math.random() * 10) + 1;
      document.images['card'].src = "k" + chance + ".jpg"
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
    clikc();
    clikc();
  }

  if (c == 3) {
    window.alert("doingにあるストーリーのタスクが元に戻ってしまった！！")
    for (let i = 1; i < 11; i++) {
      if (taskarea[i] == 2) {
        task[i] = taskmax[i];
      }
    }
    insert();
  }

  if (c == 4) {
    for (let i = 1; i < 11; i++) {
      if (taskarea[i] == 2) {
        task[i] = 0;
      }
    }
    daiceme = 0;
    insert();
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

//solutionを引いたときの処理
function solutioncount(){
  snum[player]++;
  if($ninzu==1){
    document.getElementById("solution").innerHTML = 'Sカード　P1:'+snum[1];
  }
  if($ninzu==2){
    document.getElementById("solution").innerHTML = 'Sカード　P1:'+snum[1]+' P2:'+snum[2];
  }
  if($ninzu==3){
    document.getElementById("solution").innerHTML = 'Sカード　P1:'+snum[1]+' P2:'+snum[2]+' P3:'+snum[3];
  }
  if($ninzu==4){
    document.getElementById("solution").innerHTML = 'Sカード　P1:'+snum[1]+' P2:'+snum[2]+' P3:'+snum[3]+' P4:'+snum[4];
  }
}

function problemevent(p){
  if(problem[select] == 0){
  problem[select] = p;
  insert();
}else{
  for(let i = 1; i < 11; i++){
    if(taskarea[i] == 2 &&  problem[i] == 0){
      problem[i] = p;
      insert();
      return 0;
    }
  }
  for(let i = 1; i < 11; i++){
    if(taskarea[i] == 1 &&  problem[i] == 0){
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
    player = 0;
  }
  player++;
  document.getElementById("player").innerHTML = 'player' + player + 'の番です';
  df = 0;
  daiceme = 0;
  cf = 0;
  reset();
  count++;
  if(count >= 12 * $ninzu){
    finishtxt();
  }
}


//ストーリーをクリックしたときの処理
function disp(num, max, name, s) { //num=taskarea[],max=taskmax[],name='タスク名',s=ストーリーの番号
  select = s;
  if (num == 1) {
    if (task[select] <= 0) {
      window.alert(name + 'はDoneです.Doneに移動させてください');
      sentaku(select);
    } else if (task[select] < max) {
      window.alert(name + 'はDoingです.Doingに移動させてください');
      sentaku(select);
    } else if (task[select] > 0) {
      document.getElementById("task").innerHTML = task[select];
      sentaku(select);
    }
  }

  if (num == 2) {
    if (task[select] <= 0) {
      window.alert(name + 'はDoneです.Doneに移動させてください');
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
        window.alert('お疲れ様です.' + name + 'をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
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

function finishtxt(){ //ゲーム終了時の文章表示
  window.alert("お疲れ様ゲーム終了です");
}
