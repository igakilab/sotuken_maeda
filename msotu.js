var clik = 0;
var daiceme = 0;
var task = 30;

/乱数で１～６の数字を生成しdaice.numに代入。数字に合ったgifを再生/
function daice() {
  clikc();
  var daice = new Object();
  daice = eval(Math.floor(Math.random() * 5) + 1);
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
 task = task-daiceme;
	window.alert('残り' + task+'です');

}


