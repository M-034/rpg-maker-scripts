# rpg-maker-scripts

RPGツクールの処理の多くには、独自にJavascriptコードを埋め込むことができる。
このリポジトリには作成したJavascript処理を置いておく。

> 参考
> https://rpgmakerofficial.com/product/mz/plugin/javascript/first.html

## 制約
各処理をまたいで保存可能なデータの型は、整数の変数(integer)か、スイッチ(boolean)のみ。
配列などそれ以外の型を使いたい場合は一つの処理の中で完結させるか、上記の型に収まるように変換する必要がある。

## ディレクトリ階層
最上位に各プロジェクト名のディレクトリを作成。
各プロジェクトのディレクトリには使用する変数とスイッチのIDとその用途を記録したexcelファイルを配置。
コモンイベントや各イベント、敵グループとの戦闘処理など、スクリプトを作成した箇所ごとにディレクトリを各処理ごとにテキストファイルに分けて配置。

```
C:.
│  README.md
├─TheSignal
│  │  TheSignal_変数スイッチ定義.xlsx
│  ├commonevents
│  ├events
│  └enemygroupes
└─
```



