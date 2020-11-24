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
　使い方はシンプルです。
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

# ローカルでの動作方法
-

# このアプリ制作で新規に学んだこと

## 見た目について
　・ファビコンとアイコンの設定
　・フォントの変更（Google Fonts）
　・ボーダーの角を丸くする

## 機能について
　・音声ファイルをHTMLで再生する（audio要素）

## その他
　・copyright表記について

# ToDo
 細かい設定を行える「オプション」の設定
 ・フォントをゴシック体にする
 ・自動モード
 ・作業時間と休憩時間は最初から入力できるようにする
 ・作業時間や休憩時間の手動設定
 ・BGM、アラーム音の任意変更（今の曲名を表示）
 ・mp3音源の音量調整
 ・音楽を最初から再生
 ・サイドバーの見た目が全体とあっていないので調整
 ・カウントダウンのためにボリュームをフェードアウトする
 ・カウントダウンの音を鳴らす
 ・カウントダウン時に背景の色を変える（音無しでもわかるように）
 ・左上はアイコン化したい（時計マークと文字の幅を小さくする）
 ・スマホ画面対応
 ・ログイン機能の実装とユーザーごとに設定を保存
 ・作業時間のランダム機能
 ・常に前面表示
 ・Googleヒットしやすくする
