window.addEventListener('load', function(){

  // 初回ログイン判定
  //Cookie取得
  var checkCookie = document.cookie;
  //Cookie内に【syokai】という文字列があるかないか判定。
  if(checkCookie.match("syokai")){
  // 2回目の訪問したときの処理（コンソールに出力のみ）
    console.log("2回目以上の訪問です")
    
  // 1回目の訪問したときの処理（クッキーに書き込みと１回目の処理）
  }else{
    //Domain名取得
    var domain = document.domain;
    //Cookieの内容を格納
    var visitorCookie = "visitorCookie=syokai; domain="+domain+"; path=/;"
    //Cookieに書き込み
    document.cookie = visitorCookie;
    // モーダルウィンドウ表示
    // var btn = document.getElementById('btn');
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    // モーダルウィンドウのクローズ
    var closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    })
    // モーダルウィンドウのクローズ（外側をクリック時）
    window.addEventListener('click', function(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    })
  }

  // 音楽の選択
  const musicstart = document.querySelector(".img_btn_start");
  musicstart.addEventListener("click", () => { 
    const bgmbox = document.querySelector(".bgm_box");
    var workbgmid = bgmbox.getAttribute("data-workbgmid");
      if(workbgmid == 1) {
        audio1 = document.getElementById("workbgm1");
      }else if(workbgmid == 2) {
        audio1 = document.getElementById("workbgm2");
      }else if(workbgmid == 3) {
        audio1 = document.getElementById("workbgm3");
      }else {
        audio1 = document.getElementById("muon");
      }
    var breakbgmid = bgmbox.getAttribute("data-breakbgmid");
      if(breakbgmid == 1) {
        audio3 = document.getElementById("break1");
      }else if(breakbgmid == 2) {
        audio3 = document.getElementById("break2");
      }else if(breakbgmid == 3) {
        audio3 = document.getElementById("break3");
      }else {
        audio3 = document.getElementById("muon");
      }
  });

  // タイマー処理
  let click_task = 0
    // 0...初期値
    // 1...作業ボタン
    // 2...休憩ボタン
    // 3...
    // 4...
    // 5...作業ボタンが押されてカウントダウンが始まった時のリセット
    // 6...
    // 7...休憩ボタンが押されてカウトンダウンが始まった時のリセット

  let click_num = 0
    // 0...タイマーがストップ状態
    // 1...タイマーがスタート状態

  // ポモドーロタイマーの実行回数
  let pomo_num = 0

  // 作業中BGM
  // var audio1 = document.getElementById("workbgm1");
  // アラーム音
  var audio2 = document.getElementById("alarm1");
  // 休憩中BGM
  // var audio3 = document.getElementById("break1");
  // 時報BGM（3秒カウント）
  var audio4 = document.getElementById("zihou1");
  // 時報BGM（単発）
  var audio5 = document.getElementById("zihou2");

  //audioの全体音量0.5(=50%)
  const audios=document.getElementsByTagName('audio');
  for(let n=0; audios.length>n; n++){ audios[n].volume = 0.5; }
  // audioの音量アップ
  // document.getElementById('upvolume').onclick = function() {for(let n=0; audios.length>n; n++){audios[n].volume = audios[n].volume + 0.1;}}
  // audioの音量ダウン
  // document.getElementById('downvolume').onclick = function() {for(let n=0; audios.length>n; n++){audios[n].volume = audios[n].volume - 0.1;}}
  // audioのバー
  const inputElem = document.getElementById('volume_bar'); // input要素
  const currentValueElem = document.getElementById('current-value'); // 埋め込む先のspan要素
  // 現在の値をspanに埋め込む関数
  // const setCurrentValue = (val) => {currentValueElem.innerText = val;}
  // inputイベント時に値をセットする関数
  const rangeOnChange = (e) =>{
    // setCurrentValue(e.target.value); // 現在のボリュームの表示更新
    for(let n=0; audios.length>n; n++){audios[n].volume = e.target.value;}
  }
  inputElem.addEventListener('input', rangeOnChange); // スライダー変化時にイベントを発火
  // setCurrentValue(inputElem.value); // ページ読み込み時に値をセット
  // inputElem.removeEventListener('input', rangeOnChange); //SPAでaddEventListenerを使うとき

  // ゼロパディング関数
  function zeroPadding(num,length){
    return ('00' + num).slice(-length);
  }

  // 背景色の変更関数
  // 赤
  function backRed() {
    sideColor = document.getElementById("side");
    mainColor = document.getElementById("time");
    sideColor.style.backgroundColor = "#df7575";
    mainColor.style.backgroundColor = "#df7575";
  }
  // 黄
  function backYellow() {
    sideColor = document.getElementById("side");
    mainColor = document.getElementById("time");
    sideColor.style.backgroundColor = "#dddf75";
    mainColor.style.backgroundColor = "#dddf75";
  }
  // 緑
  function backGreen() {
    sideColor = document.getElementById("side");
    mainColor = document.getElementById("time");
    sideColor.style.backgroundColor = "#82df75";
    mainColor.style.backgroundColor = "#82df75";
  }
  // 青
  function backBlue() {
    sideColor = document.getElementById("side");
    mainColor = document.getElementById("time");
    sideColor.style.backgroundColor = "#75c3df";
    mainColor.style.backgroundColor = "#75c3df";
  }

  // 作業ボタンがクリックされたとき
  document.getElementById('task').onclick = function() {
    // 作業ボタンが押されていないときもしくは休憩ボタンしか押されていないとき
    if (click_task == 0 || click_task == 2) {
      // タイマー初期値セット
      document.getElementById('min').textContent = zeroPadding(25, 2);
      document.getElementById('sec').textContent = zeroPadding(0, 2);
      // ２５分をセット ６０秒×２５分=１５００
      time = 1500;
      // 作業ボタンが押されたフラグ
      click_task = 1;
      // 背景を青色へ
      backBlue();
    }
  }

  // 休憩ボタンがクリックされたとき
  document.getElementById('break').onclick = function() {
    // 休憩ボタンが押されていないときもしくは作業ボタンしか押されていないとき
    if (click_task == 0 || click_task == 1) {
      // タイマー初期値セット
      document.getElementById('min').textContent = zeroPadding(5, 2);
      document.getElementById('sec').textContent = zeroPadding(0, 2);
      // ５分をセット ６０秒×５分=３００
      time = 300;
      // 休憩ボタンが押されたフラグ
      click_task = 2;
      // 背景を緑色へ
      backGreen();
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
            // 作業用BGMの再生
            audio1.play();
        }
        // 休憩ボタンがボタンが押されてカウントダウンが始まったとき
        if (click_task == 2) {
            // フラグ再セット
            click_task = 7;
            // 休憩用BGMの再生
            audio3.play();
        }
        // 作業ボタンが押されてて一時停止が解除された時
        if (click_task == 5) {
          // 作業用BGMの再生
          audio1.play();
        }
        // 休憩ボタンが押されてて一時停止が解除された時
        if (click_task == 7) {
          // 休憩用BGMの再生
          audio3.play();
        }
        // 再生ボタンを一時停止ボタンに書き換え
        // id変更
        document.getElementById('start').innerHTML = '<img class="btns" src="./images/temporary.png" alt="一時停止"><p class="p_side">スタート／ストップ</p>';
        // カウント関数を１秒毎に動かす 変数に入れる
        counter = setInterval(count, 1000);

        // 一時停止ボタンが押された時の処理
      } else {
        // ストップ状態を表すフラグ
        click_num = 0;
        // 一時停止ボタンを再生ボタンに書き換え
        // id変更
        document.getElementById('start').innerHTML = '<img class="btns" src="./images/start.png" alt="スタートボタン"><p class="p_side">スタート／ストップ</p>';
        // 作業用BGMの（一時）停止
        audio1.pause();
        // 休憩BGMの（一時）停止
        audio3.pause();
        // カウント関数をストップ
        clearInterval(counter); 
        // 秒は時間を６０で割った余り
        document.getElementById('sec').textContent = zeroPadding(time % 60, 2);
        // 分は時間を６０で割ったもの 小数点以下切り捨て
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
    document.getElementById('start').innerHTML = '<img class="btns" src="./images/start.png"  alt="スタートボタン"><p class="p_side">スタート／ストップ</p>';
    // 作業用BGMの（一時）停止
    audio1.pause();
    // 休憩BGMの（一時）停止
    audio3.pause();
    // 背景を青色へ
    backBlue();
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
        // ２５分経過
        // 作業BGMの（一時）停止
        audio1.pause();
        // アラームの再生
        audio2.play();
        // ポモドーロ数をプラス１させる
        pomo_num++;
        // ポモドーロ数を画面に出力
        document.getElementById('pomo_number').textContent = pomo_num;
        // 背景を緑色へ
        backGreen();
      }

      // 休憩ボタンが押されてカウントダウンが始まったとき
      if (click_task == 7) {
        // ５分経過
        // 休憩BGMの（一時）停止
        audio3.pause();
        // アラームの再生
        audio2.play();
        // 背景を青色へ
        backBlue();
      }
      // スタート/ストップのフラグ初期化
      click_num = 0;
      // タスクボタンのフラグ初期化
      click_task = 0;
      // スタートをクリックされた時の関数をストップ
      clearInterval(counter);
      // 一時停止ボタンを再生ボタンに書き換え
      // id変更
      document.getElementById('start').innerHTML = '<img class="btns" src="./images/start.png"  alt="スタートボタン"><p class="p_side">スタート／ストップ</p>';
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
      // 分は時間を６０で割ったもの小数点以下切り捨て
      document.getElementById('min').textContent = zeroPadding(Math.floor(time / 60), 2);
      // もし時間が60秒前なら
      if (time == 60) {
        // 背景を黄色へ
        backYellow();
        // 休憩BGMを一時止める（アラームが聞こえないため）
        if (click_task == 7) {
          audio3.pause();
        }
        // 時報の再生
        audio5.play();
        // 休憩BGMを再会
        if (click_task == 7) {
          audio3.play();
        }
      }
      // もし時間が3秒前なら
      if (time == 3) {
        // 背景を赤色へ
        backRed()
        // 作業ボタンが押されてカウントダウンが始まったときのラストカウントダウン
        if (click_task == 5) {
          audio1.pause();
          // 時報の再生
          audio4.play();
        }
        // 休憩ボタンが押されてカウントダウンが始まったときのラストカウントダウン
        if (click_task == 7) {
          audio3.pause();
          // 時報の再生
          audio4.play();
        }
      }
    }
  }
})

