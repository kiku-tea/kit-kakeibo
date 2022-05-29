# kit-kakeibo
--
kitlab's kakeibo

Project Member: kent, show, kikut
Created: 2022/5/15


## 概要
このサービスは、家計簿を付けるサービスです。


## 背景
自分で使う簡単なアプリ開発を通して、アプリ開発の流れをつかむことを目的として、
プロジェクトを作成。


## 機能一覧
### アカウント作成
1. メールアドレス登録：　ボタンを押されたら入力データをDBに登録し、②へ遷移
  - 入力データ：　メールアドレス
  - ユーザ操作：フォームに入力、登録ボタン押す
2. 登録確認：　URLを記載したメールをユーザに送信し、URLにアクセスされたら③へ遷移
  - 入力データ：　なし
  - ユーザ操作：　
    登録したメールアドレスに届くメールを確認するメッセージを読んでアクション（メール確認して記載されているURLに飛ぶ）
3. ユーザ情報入力：
  - 入力データ：　名前、パスワード、なんだろ、生年月日？？？
  - ユーザ操作：　フォームに入力、登録ボタン押す
4. 入力完了：　一覧画面へボタンを押して、◆一覧表示.「①一覧」へ遷移
  - ユーザ操作：　「一覧画面へ」ボタンを押す

### ログイン
1. ログイン画面表示
  1. ログイン情報入力
  2. アカウント作成機能へ遷移
  3. パスワード再設定機能へ遷移
2. 入力完了 

### パスワード再設定(ログイン時)
1. 本人確認
  - 入力データ:　メールアドレス
  - ユーザ操作:　フォームに入力
2. 登録確認：　URLを記載したメールをユーザに送信し、URLにアクセスされたら③へ遷移。
3. パスワード再設定
  - 入力データ:  新しいパスワード、確認用新しいパスワード
  - ユーザ操作:　フォームに入力、登録ボタンを押す
4. 入力完了: 登録ボタンを押して、◆一覧表示.「①一覧」へ遷移
  - ユーザ操作:  「一覧画面へ」ボタンを押す

### パスワード変更
1. 本人確認
  - 入力データ:  現在のパスワード
2. パスワード変更
  - 入力データ:  新しいパスワード、確認用新しいパスワード
  - ユーザ操作:　フォームに入力、登録ボタンを押す。
3.  入力完了: 登録ボタンを押して、◆一覧表示.「①一覧」へ遷移
  - ユーザ操作:  「一覧画面へ」ボタンを押す。

### 履歴一覧表示
1. 表示範囲の選択
  - 入力データ:  月(month)
  - ユーザ操作:  プルダウンから該当の月を選択
2. 選択範囲の入力履歴の表示
  - 入力データ:  なし
  - ユーザ操作:  なし
  - 出力データ:  該当の月の入力履歴(日付、カテゴリ、金額、摘要)
    - 取得元:DB 

### 記録
1. 支出に関する内容を登録
  - 入力データ:  日付、カテゴリ、日時、摘要
  - ユーザ操作:  フォームに入力、登録ボタンを押す。
2.  入力完了: 登録ボタンを押して、◆一覧表示.「①一覧」へ遷移
  - ユーザ操作:  「一覧画面へ」ボタンを押す。

### 分析
1. 表示範囲の選択
  - 入力データ:  月(month)
  - ユーザ操作:  プルダウンから該当の月を選択
2. 選択範囲の分析結果を表示
  - 入力データ:　なし
  - ユーザ操作:　なし
  - 出力データ:  該当の月の分析結果（支出総計、カテゴリ別小計）
    - 取得元:DB 

  
### 


## サービスアーキテクチャ（構成図）
- バックエンド：サーバレス
  - コンピューティング：　AWS Lambda
  - DB：　AWS DynamoDB
  - API：　AWS API Gateway
- フロント：
  - React＋JavaScript
- CI/CDツール：　Amplifyでビルド
- ソース管理：　Git（https://Gitリポジトリ・・・）

詳細は[アーキテクチャ図](./docs/architects.png)を参照


## コーディング規約
### ファイル命名規則

### ディレクトリ構成


### JavaScript

### CSS

###
