(function() {

  angular.module('limit.to', [])

  //Function to limit the Max Length entered
  .directive("limitTo", [function() {
    return {
      restrict: "A",
      link: function(scope, elem, attrs) {
        if (!(attrs.limitTo === "" || angular.isUndefined(attrs.limitTo) || attrs.limitTo === null)) {
          var limit = parseInt(attrs.limitTo);
          angular.element(elem).on("keypress", function(e) {
            if (this.value.length == limit) e.preventDefault();
          });
        }
      }
    };
  }]);

})();
