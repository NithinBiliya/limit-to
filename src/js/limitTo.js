(function() {

  angular.module('limit.to', [])

  //Function to limit the Max Length entered
  .directive("limitTo", [function() {
    return {
      restrict: "A",
      link: function(scope, elem, attrs) {
        var limit = parseInt(attrs.limitTo);
        if (!(limit === "" || angular.isUndefined(limit) || limit === null)) {
          angular.element(elem).on("keypress", function(e) {
            if (this.value.length == limit) e.preventDefault();
          });
        }
      }
    };
  }]);

})();
