# 概要
HTMLプロトタイプを作成する際にJavaScriptでちょっとしたユーティリティを使うことがあります。

普通はjQuery等のライブラリーを用いるのですが、読み込むライブラリーのバージョンを統一したいことが多いです。
また、同じようなscriptの読み込みを何箇所も書くのは面白くありません。

個人的に、キャッシュの意味もありJavaScriptのライブラリーにはバージョン番号をつけて管理することが多いです。
バージョン番号を記載することで、いざ違うバージョンのライブラリーを導入した場合には、すべての箇所の修正が必要になります。

最初は自作でJavaScriptの動的ロードを考えていましたが、[LABjs](http://getify.github.io/LABjs/)という優秀なライブラリーを見つけたので、それを用いた共通のライブラリーのロードの仕組みを作成しました。

# 注意点
速さが必要とされる本番環境では使えません。あくまでHTMLプロトタイプ作成時のライブラリ管理の簡便化のためのツールです。

# 使い方
src/main/coffeeのprojectCommon.coffeeで全体で使用するライブラリの場所とそれのエイリアスを定義します。
```coffeescript
jsList =
  jquery: 'js/lib/jquery-2.0.3.min.js',
  jqueryui: 'js/lib/jquery-ui-1.10.3.custom.min.js'
```

全体で同じライブラリーを使用する場合には、共通の呼び出し関数を用意しておくと便利です。
```coffeescript
# 初期設定用の関数を用意しておく
global.loadScript = (callBack) ->
  LABjsUtil.syncLoad(['jquery', 'jqueryui'], callBack)
  return
```

あとは、各ページにおいてLABjsとLABjsUtil、example関数を呼び出します。
```html
<body>
 <input type="button" value="ボタン" id="button">
 <script src="js/lib/LAB.min.js"></script>
 <script src="js/LABUtil.min.js"></script>
 <script src="js/projectCommon.min.js"></script>
 <script>
   loadScript(function() {
     $('#button').button();
   });
 </script>
</body>
```

syncLoadLibの1番目の引数は、jsListで指定したscriptファイルの配列になります。記述した順番に読み込まれます。scriptは1つずつ順番に読み込まれます。読み込みが完全に終了するまで次のscriptは読み込まれません。

scriptファイルの読み込みが完了すると、2番目の引数のコールバック関数が実行されます。各ページに必要な処理を個々に記載します。

# ライセンス
MIT

# 参考
以下の書籍、サイトを参考にしています。

* [LABjs](http://getify.github.io/LABjs/)
* [ページ読み込み時間を短縮するJavaScriptローダー：LABjs | ゆっくりと…](http://tokkono.cute.coocan.jp/blog/slow/index.php/xhtmlcss/loading-and-blocking-javascript-labjs/)
