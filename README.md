# アプリケーション名
　ポモドーロタイマー

<img width="1440" alt="ポモドーロ　トップ" src="https://user-images.githubusercontent.com/71683460/103529506-24ef7d00-4ec9-11eb-8fea-70f62f6a4c52.png">

# URL
　https://pomodoro-30614.herokuapp.com

# アプリケーション概要
　人間の集中力が高く発揮されると言われているポモドーロタイマー（25分作業→5分休憩）を測れるアプリです。
　なるべくシンプルで直感的な操作でアプリが利用できるものを目指しました。

　開発環境
　　macbook Air (Retina, 13-inch, 2020)
　　macOS Catalina (ver10.15.7)

# 利用方法

　１.「作業」ボタンを押して25分をセットします。
　２.「▶︎」（スタート）ボタンを押します。するとカウントが始まります。
![ワークタイム開始1](https://user-images.githubusercontent.com/71683460/103534454-3ab57000-4ed2-11eb-9024-a7c4754d0623.gif)


　ユーザー目線を大事に使い方はシンプルにすることを目指した。
　開発の初期からMVP的な体勢を作るため知人に公開してフィードバックを受けている。
　「作業ボタン」を押すと25分の時間がセットされてスタートボタンで計測開始。時間になるとアラームがなります。
　また、休憩を入れたいときは「休憩ボタン」を押してスタートボタンを押します。すると5分後にアラームが鳴ります。

# 目指した課題解決
　ポモドーロタイマーを使いたいけど、わざわざストップウォッチで測りながらやるのは面倒。
　しかし、既存のサイトでは凝りすぎていて使いづらい。そこでなるべくシンプルで使いやすいアプリを作成してみました。

# 洗い出した要件
　必要最低限の機能に絞る

# 実装した機能についてのGIFと説明
　「作業ボタン」
　　https://gyazo.com/d669f839ce41e2970779efb45d1ddaf0
　「休憩ボタン」
　　https://gyazo.com/b956538da3a8706db40c372450e13835

# テスト用アカウント

## Basic認証のIDとパスワード  
　ID:admin  
　PASS:2222  

# データベース設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |


### Association
- 

## users テーブル

| Music      | Type    | Options |
| ---------- | ------- | ------- |
| workbgm    | integer |         |
| breakbgm   | integer |         |

### Association

- belongs_to :workbgm
- belongs_to :breakbgm

# ローカルでの動作方法
-

# このアプリ制作で新規に学んだこと

## 見た目について
　・ファビコンとアイコンの設定
　・フォントの変更（Google Fonts）
　・ボーダーの角を丸くする
　・カウントダウン時に音と背景色を変える

## 機能について
　・音声ファイルをHTMLで再生する（audio要素）
　・音量調整バーの実装
　・初回訪問時のみ、モーダルで注意出力
　・Ajaxを用いた音楽の選択と再生
　・選んだ音楽の保存（ActiveHashの導入）
　・deviseの導入（ログイン）と前回の曲を自動でセット
　・現在、選択している曲を表示
　・テストコード（Rspec）でログイン機能のテストを実施(fakerによるランダムでのテスト内容を実施)

## その他
　・copyright表記について
　・ログインとセッション、ステートレス／ステートフル
　・mp3の曲の長さを編集（無音部分の削除）