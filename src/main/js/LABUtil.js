(function(global) {
  var LABjsUtil;
  LABjsUtil = (function() {
    function LABjsUtil() {}

    LABjsUtil.jsList = {
      jquery: 'js/lib/jquery-2.0.3.min.js',
      jqueryui: 'js/lib/jquery-ui-1.10.3.custom.min.js'
    };

    LABjsUtil.syncLoad = function(libList, callBack) {
      var jsName;
      jsName = LABjsUtil.jsList[libList.shift()];
      $LAB.script(jsName).wait(function() {
        if (libList.length === 0) {
          callBack();
        } else {
          LABjsUtil.syncLoad(libList, callBack);
        }
      });
    };

    return LABjsUtil;

  })();
  global.LABjsUtil = LABjsUtil;
})(this);
