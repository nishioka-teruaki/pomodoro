# アプリケーション名
　ポモドーロタイマー

<img width="1440" alt="ポモドーロ　トップ" src="https://user-images.githubusercontent.com/71683460/103529506-24ef7d00-4ec9-11eb-8fea-70f62f6a4c52.png">

# URL
　https://pomodoro-30614.herokuapp.com

## Basic認証のIDとパスワード  
　ID:admin  
　PASS:2222  

# テスト用アカウント
　ID:aaa@bbb.ccc
　PASS:1qaz2wsx

# アプリケーション概要
　人間の集中力が高く発揮されると言われているポモドーロタイマー（25分作業→5分休憩）を測れるアプリです。

　なるべくシンプルで直感的な操作で利用できるものを開発しました。

　そのため、トップページの上部に簡単な説明のみ記載し後はユーザーが直感のみで操作できるようにしてあります。


　開発環境

　　macbook Air (Retina, 13-inch, 2020)
　　macOS Catalina (ver10.15.7)

# 利用方法
　基本的には「25分のタイマーをセット（作業時間）→スタートボタン→5分のタイマーをセット（休憩時間）→スタートボタン」のみで利用ができます。

　他に、一時停止やBGMの変更、音量の調整機能があります。また、ログインすると自動的に前回セットしたBGMが最初からセットされます。

（初回アクセス時）

　１.Basic認証についてログイン。
　２.モダールが出力されるので閉じるか外側をクリックで閉じます。

![初回ログイン](https://user-images.githubusercontent.com/71683460/103632954-685cf080-4f88-11eb-9050-fe873c380257.gif)

（作業時間）

　１.「作業」ボタンを押して25分をセットします。

　２.「▶︎」（スタート）ボタンを押します。するとカウントが始まります。

![ワークタイム開始1](https://user-images.githubusercontent.com/71683460/103535410-fc20b500-4ed3-11eb-9476-27826b542cfa.gif)

　３.残り1分になるとアラーム音と共に背景が黄色に変化。

![黄色へ変化](https://user-images.githubusercontent.com/71683460/103608586-06d45c00-4f5f-11eb-8f40-e7476eb12c43.gif)

　４.残り3秒時点でカウントダウン音と共に背景が赤色に、そして0秒でアラームが鳴り次の休憩時間の背景色である緑に変化。

![赤色へ変化](https://user-images.githubusercontent.com/71683460/103608936-f53f8400-4f5f-11eb-8536-eaf8ac831d82.gif)

（休憩時間）

　１.「休憩」ボタンを押して5分をセットします。

　２.「▶︎」（スタート）ボタンを押します。するとカウントが始まります。

![ブレイクタイム開始](https://user-images.githubusercontent.com/71683460/103609228-bf4ecf80-4f60-11eb-936f-7f40c9bf2749.gif)

　３.残り1分になるとアラーム音と共に背景が黄色に変化。

　４.残り3秒時点でカウントダウン音と共に背景が赤色に、そして0秒でアラームが鳴り次の作業時間の背景色である青に変化。

（一時停止）

　１.作業時間中や休憩時間中に一時停止ボタンを押すと機能します。

![一時停止](https://user-images.githubusercontent.com/71683460/103609636-9e3aae80-4f61-11eb-9e0b-283994412e3d.gif)

（BGMの変更）

　１.「作業bgm」もしくは「休憩bgm」横のセレクトボックスより自分が好みの曲を選択する。

　２.「音楽をセットする」ボタンを押下する。すると音楽が変更される。

![曲の変更](https://user-images.githubusercontent.com/71683460/103610261-08a01e80-4f63-11eb-9cb2-30b5bdc07f82.gif)

（音量の調整）

　１.音量のバーを左右にスライドすることで調整できます。

（ログイン及びBGMセットの引継ぎ）

　１.ログインします。アカウント未作成時は新規登録を実施。

　２.BGMをセット。

　３.一旦ブラウザを落として再度立ち上げ。

　４.前回のBGMセットのまま開始。

![ログイン時のBGM引継ぎ](https://user-images.githubusercontent.com/71683460/103613644-405e9480-4f6a-11eb-8d59-a204aa0a399e.gif)

# 目指した課題解決
　ポモドーロタイマーを使いたいけど、わざわざストップウォッチで測りながらやるのは面倒。

　しかし、既存のサイトでは凝りすぎていて使いづらく、画面も情報量が多くわかりづらい。

　YouTubeでは時々広告が入り煩わしい。

　そこでなるべくシンプルで使いやすいアプリを作成することしました。

　私が考えたシンプルで使いやすいとは「時間を図ってくれること」「画面を一眼見ただけで操作が分かること」「ポモドーロタイマー以外のものは省くこと」の

　３つを軸としました。

　結果として、とてもシンプルな画面で誰でも使いやすいものを作成することが出来たと考えております。

# 洗い出した要件
　・作業時間と休憩時間のカウント機能

　・カウント終了時のお知らせ機能（アラーム、背景色の変化）

　・その他ユーザーの利便性を高める機能（アクセス時に音楽が流れることへの注意喚起、ログインによるBGM引継ぎ、ポモドーロ数のカウント）

# 実装した機能について

【作業時間と休憩時間のカウント機能】
　・時間のセット（Javascript、Ajax）
　・ゼロパディング（Javascript）
　・時間のカウントダウン（Javascript）
　・スタート／ストップ／一時停止（Javascript、Ajax）
　・作業時間か休憩時間かの判定（Javascript）

【カウント終了時のお知らせ機能】
　・アラームの鳴動（audio要素、Javascript）
　・背景色の変更（Javascript）

【その他ユーザーの利便性を高める機能】
　・BGMの選択（ActiveHash、Javascript）
　・BGMのボリューム設定（audio要素、Javascript、Ajax）
　・現在、選択している曲を表示（ActiveHash、rails（MVC））
　・初回アクセス時の注意喚起（Javascript、cookie（アクセス履歴を残す）、モーダル）
　・初回アクセス時のDB整理（rails、MySQL）
　・ログインとログイン後のBGM引継ぎ（devise、rails（MVC）、MySQL、CSSのカスタムデータ、Javascript）
　・未ログインユーザーのDB取り扱い（rails（MVC）、MySQL、CSSのカスタムデータ、Javascript）
　・ポモドーロ数のカウント（Javascript）
　・リセットCSS
　・ファビコンとアイコンの設定
　・フォントの変更（Google Fonts）
　・テストデータ投入（Faker）
　・テストの実施(RSpec)

# 工夫点


# 今後の改善・修正予定


# データベース設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |
| nickname | string | null: false |

### Association

- has_many :musics

## users テーブル

| Music      | Type    | Options     |
| ---------- | ------- | ----------- |
| workbgm    | integer | null: false |
| breakbgm   | integer | null: false |
| user_id    | integer |             |

### Association

- belongs_to :workbgm
- belongs_to :breakbgm

# その他学習したこと
　・フリー素材取得（アイコン、音楽）
　・copyright表記について
　・ログインとセッション
　・ステートレス／ステートフル
　・mp3の曲の長さを編集（無音部分の削除）