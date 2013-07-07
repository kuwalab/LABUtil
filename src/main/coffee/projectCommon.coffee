((global) ->
  # 別ファイルにしてリストを編集しておく。
  LABjsUtil.jsList =
      jquery: 'js/lib/jquery-2.0.3.min.js',
      jqueryui: 'js/lib/jquery-ui-1.10.3.custom.min.js'

  # 初期設定用の関数を用意しておく
  global.loadScript = (callBack) ->
    LABjsUtil.syncLoad(['jquery', 'jqueryui'], callBack)
    return
)(this)
