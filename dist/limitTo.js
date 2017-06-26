(function () {

  angular.module('limit.to', [])

    //Function to limit the Max Length entered
    .directive("limitTo", [function () {
      return {
        restrict: "A",
        link: function (scope, elem, attrs) {
          angular.element(elem).on("keypress", function (e) {
            if (!(attrs.limitTo === "" || angular.isUndefined(attrs.limitTo) || attrs.limitTo === null)) {
              var limit = parseInt(attrs.limitTo);
              if (this.value.length == limit) e.preventDefault();
            }
          });
        }
      };
  }]);

})();
