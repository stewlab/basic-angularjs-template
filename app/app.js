var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		.state('root', {
			url: '',
			abstract: true,
			views: {
				'header': {
					templateUrl: 'partials/header.html'
				},
				'footer': {
					templateUrl: 'partials/footer.html',
					resolve: {
						year: function() {
							return new Date().getFullYear();
						}
					},
					controller: ['$scope', 'year', function($scope, year) {
						$scope.year = year;
					}]
				}
			}
		})

		// home page
		.state('root.home', {
			
			url: '/home',
			views: {
				'body@': {
					templateUrl: 'partials/home.html'
				}	
			}

		})


		// games page
		.state('root.games', {
			url: '/games',
			view: {
				'body@': {
					templateUrl: 'partials/games.html'
				}
			}
		});


}]);
