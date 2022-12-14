angular
  .module("emailParser", [])
  .config(["$interpolateProvider"], function ($interpolateProvider) {
    $interpolateProvider.startSymbol("__");
    $interpolateProvider.endSymbol("__");
  })
  .factory("EmailParser", [
    "$interpolate",
    function ($interpolate) {
      // 处理解析的服务
      return {
        parse: function (text, context) {
          var template = $interpolate(text);
          return template(context);
        },
      };
    },
  ]);
