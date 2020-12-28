# README

# アプリケーション名
　ポモドーロタイマー

# アプリケーション概要
　シンプルなポモドーロタイマーで誰でも直感的に操作ができる

# URL
　https://pomodoro-30614.herokuapp.com

# テスト用アカウント

## Basic認証のIDとパスワード  
　ID:admin  
　PASS:2222  

# 利用方法
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

## その他
　・copyright表記について
　・ログインとセッション、ステートレス／ステートフル
　・mp3の曲の長さを編集（無音部分の削除）

# やりたいことメモ
 ・テストモード

 ・BGMをYouTubeから持ってくれるようにする
 ・音楽を最初から再生
 ・曲を途中でも変更できるようにする（ページを遷移させない）
 ・自動モード
 ・作業時間と休憩時間は最初から入力できるようにする
 ・作業時間や休憩時間の手動設定
 ・レビュー機能の実装
 ・サイドバーの見た目が全体とあっていないので調整
 ・AWSへデプロイ
 ・細かい設定を行える「オプション」の設定
 ・左上はアイコン化したい（時計マークと文字の幅を小さくする）
 ・スマホ画面対応（レスポンシブWEBデザイン）
 ・ログイン機能の実装とユーザーごとに設定を保存
 ・作業時間のランダム機能
 ・常に前面表示
 ・Googlebot対策
 ・広告バーをつける
 ・一口アドバイスを画面にランダムで表示する
 ・カウンターをつける？
 ・ファビコンの後ろを白にして四角にする
 ・１回目のアラーム音は全時間の5分の１でなるようにする

 案外HTML・CSS・JSで大抵のことをはできる。Ruby・RailsはDBを取り扱うときに力を発揮する。