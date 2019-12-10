t4
30
task4
select = 4;

function disp4(num) {
  if (num == 1) {
    if (t4 <= 0) {
      window.alert('task4はDoneです.Doneに移動させてください');
      select = 4;
      sentaku(select);
    } else if (t4 < 30) {
      window.alert('task4はDoingです.Doingに移動させてください');
      select = 4;
      sentaku(select);
    } else if (t4 > 0) {
      document.getElementById("task").innerHTML = t4;
      select = 4;
      sentaku(select);

    }
  }

  if (num == 2) {
    if (t4 <= 0) {
      window.alert('task4はDoneです.Doneに移動させてください');
      select = 4;
      daiceme = 0;
      cf = 0;
      reset();
      sentaku(select);
    } else {
      sound();
      amari=daiceme-t4;
      t4 = t4 - daiceme;
      daiceme = 0;
      cf = 0;
      if (t4 > 0) {
        document.getElementById("task").innerHTML = t4
        select = 4;
        sentaku(select);
        reset();
      } else {
        window.alert('お疲れ様です.task4をDoneに移動しましょう');
        document.getElementById("task").innerHTML = 0;
        select = 4;
        sentaku(select);
        daiceme=amari;
      }
    }
  }
  if (num == 3) {
    if (t4 <= 0) {
      window.alert('task4はDoneです');
    } else if (t4 <= 30) {
      window.alert('task4はDoingです.Doingに移動させてください');
      sentaku(select);
    }
  }
}

























function problem(){
  for(let j = 1;j < 11; j++){
    if(problem[j] > 0){
      if(problem[j] = 1){
        document.getElementById("card"+j).innerHTML = "problem<br>技術的障害に遭遇した。<br>" + task[j];
      }
      if(problem[j] = 2){
        document.getElementById("card"+j).innerHTML = "problem<br>品質が不十分なため作業が進められない。<br>" + task[j];
      }
      if(problem[j] = 3){
        document.getElementById("card"+j).innerHTML = "problem<br>担当のタスクをこなすにはスキルが不足している。<br>" + task[j];
      }
      if(problem[j] = 4){
        document.getElementById("card"+j).innerHTML = "problem<br>他部署とコミュニケーションが十分にできない。<br>" + task[j];
      }
      if(problem[j] = 5){
        document.getElementById("card"+j).innerHTML = "problem<br>作業に計画以上のコストがかかる。<br>" + task[j];
      }
      if(problem[j] = 6){
        document.getElementById("card"+j).innerHTML = "problem<br>テストがうまくできない。<br>" + task[j];
      }
      if(problem[j] = 7){
        document.getElementById("card"+j).innerHTML = "problem<br>仕様が不明確で困る。<br>" + task[j];
      }
      if(problem[j] = 8){
        document.getElementById("card"+j).innerHTML = "problem<br>ユーザーが満足していないように思われる。<br>" + task[j];
      }
    }
  }
}
