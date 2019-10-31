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
