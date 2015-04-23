(function(){
  angular.module('application')
    .controller('HomeController',HomeController);

  HomeController.$inject = ['$scope', '$stateParams', '$state', '$controller'];

  function HomeController($scope, $stateParams, $state, $controller){
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

    $scope.username = 'user123';
    $scope.password = '12345';

  };
})();
