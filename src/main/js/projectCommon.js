(function(global) {
  LABjsUtil.jsList = {
    jquery: 'js/lib/jquery-2.0.3.min.js',
    jqueryui: 'js/lib/jquery-ui-1.10.3.custom.min.js'
  };
  return global.loadScript = function(callBack) {
    LABjsUtil.syncLoad(['jquery', 'jqueryui'], callBack);
  };
})(this);
