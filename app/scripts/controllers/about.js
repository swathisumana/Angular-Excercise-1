/*'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDemoApp
 
angular.module('angularDemoApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/


'use strict';

/**
 * @ngdoc function
 * @name demApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demApp
 */
angular.module('Angulardemo')
    .controller('ResquestCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.employeeData = [{
            Sno: "1"


        }, {
            Sno: "2"


        }, {
            Sno: "3"


        }, {
            Sno: "4"


        }, {
            Sno: "5"


        }];
        console.log($scope.employeeData);
    });
