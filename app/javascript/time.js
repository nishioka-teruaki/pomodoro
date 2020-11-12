window.addEventListener('load', function(){
  let click_task = 0
  let click_num = 0

  // 作業ボタンがクリックされたとき
  document.getElementById('task').onclick = function() {
    // 作業ボタンが押されていないときもしくは休憩ボタンしか押されていないとき
    if (click_task == 0 || click_task == 2) {
        // タイマー初期値セット
        document.getElementById('min').textContent = zeroPadding(25, 2);
        document.getElementById('sec').textContent = zeroPadding(0, 2);
        // ２５分をセット　６０秒×２５分=１５００
        time = 1500;
        // 作業ボタンが押されたフラグ
        click_task = 1;
    }
  }

  // ゼロパディング関数
  function zeroPadding(num,length){
    return ('00' + num).slice(-length);
  }

  // 休憩ボタンがクリックされたとき
document.getElementById('break').onclick = function() {
  // 休憩ボタンが押されていないときもしくは作業ボタンしか押されていないとき
  if (click_task == 0 || click_task == 1) {
      // タイマー初期値セット
      document.getElementById('min').textContent = zeroPadding(5, 2);
      document.getElementById('sec').textContent = zeroPadding(0, 2);
      time = 300;
      // 休憩ボタンが押されたフラグ
      click_task = 2;
  }
}

  // スタートボタンが押下された時の処理
  document.getElementById('start').onclick = function() {
    // 休憩ボタンもしくは作業ボタンが押下されたとき
    if (click_task != 0) {
        // タイマーがストップ状態の時
        if (click_num == 0) {
            // スタート状態を表すフラグ
            click_num = 1;
            // 作業ボタンが押されてカウントダウンが始まったとき
            if (click_task == 1) {
                // フラグ再セット
                click_task = 5;
            }
            // 休憩ボタンがボタンが押されてカウントダウンが始まったとき
            if (click_task == 2) {
                // フラグ再セット
                click_task = 7;
            }
            // 再生ボタンを一時停止ボタンに書き換え
            // id変更
            document.getElementById('start').innerHTML = '<img src="./images/temporary.png" alt="一時停止">';
            // カウント関数を１秒毎に動かす　変数に入れる
            counter = setInterval(count, 1000);
            // 一時停止ボタンが押された時の処理
        } else {
            // ストップ状態を表すフラグ
            click_num = 0;
            // 一時停止ボタンを再生ボタンに書き換え
            // id変更
            document.getElementById('start').innerHTML = '<img src="./images/start.png"  alt="スタートボタン">';
            // カウント関数をストップ
            clearInterval(counter); 
            // 秒は時間を６０で割った余り
            document.getElementById('sec').textContent = zeroPadding(time % 60, 2);
            // 分は時間を６０で割ったもの　小数点以下切り捨て
            document.getElementById('min').textContent = zeroPadding(Math.floor(time / 60), 2);
        }
    }
  }

  // ストップボタンが押下された時の処理
  document.getElementById('stop').onclick = function() {
    // カウント関数をストップ
    clearInterval(counter); 
    // ストップ状態を表すフラグ
    click_num = 0;
    // タスクボタンのフラグ初期化
    click_task = 0;
    // ゼロパディング
    zero_sec = zeroPadding(0,2)
    zero_min = zeroPadding(0,2)
    // 画面の表示を初期値に戻す
    document.getElementById('sec').textContent = zero_sec;
    document.getElementById('min').textContent = zero_min;
    // 一時停止ボタンを再生ボタンに書き換え
    // id変更
    document.getElementById('start').innerHTML = '<img src="./images/start.png"  alt="スタートボタン">';
  }

  // カウント関数
  function count() {
    // もし時間が０になったら
    if (time == 0) {
        // 分を０にする
        document.getElementById('sec').textContent = 0;
        // 秒を０にする
        document.getElementById('min').textContent = 0;
        
        // 作業ボタンが押されてカウントダウンが始まったとき
        if (click_task == 5) {
            // ２５分経過したことを通知
            window.alert(task_notification);
            // ポモドーロ数をプラス１させる
            pomo_num++;
            // ポモドーロ数を画面に出力
            document.getElementById('pomo_number').textContent = pomo_num;
        }

  　　　　 // 休憩ボタンが押されてカウントダウンが始まったとき
        if (click_task == 7) {
            // ５分経過したことを通知
            window.alert(break_notification);
        }
        // スタート/ストップのフラグ初期化
        click_num = 0;
        // タスクボタンのフラグ初期化
        click_task = 0;
        // スタートをクリックされた時の関数をストップ
        clearInterval(counter);
        // 一時停止ボタンを再生ボタンに書き換え
        // id変更
        document.getElementById('start').innerHTML = '<img src="./images/start.png"  alt="スタートボタン">';
        // ゼロパディング
        zero_sec = zeroPadding(0,2)
        zero_min = zeroPadding(0,2)
        // 画面の表示を初期値に戻す
        document.getElementById('sec').textContent = zero_sec;
        document.getElementById('min').textContent = zero_min;
        // それ以外の処理
    } else {
        // １秒ずつ減らしていく
        time -= 1;
    
        // 秒は時間を６０で割った余り
        document.getElementById('sec').textContent = zeroPadding(time % 60, 2);
        // 分は時間を６０で割ったもの　小数点以下切り捨て
        document.getElementById('min').textContent = zeroPadding(Math.floor(time / 60), 2);
    }
  }
})