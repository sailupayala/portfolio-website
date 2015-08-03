var PortfolioApp = angular.module('PortfolioApp', ['ui.router']);

PortfolioApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
		 .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
		.state('contact', {
            url: '/contact',
            templateUrl: 'partial-contact.html'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'partial-portfolio.html'
        })
       
        // nested list with custom controller
        .state('portfolio.projectOne', {
            url: '/projectOne',
            templateUrl: 'partial-portfolio-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('portfolio.projectTwo', {
            url: '/projectTwo',
            template: 'Two'
        })
        .state('portfolio.projectThree', {
            url: '/projectThree',
            template: 'Three'
        })
		.state('portfolio.projectFour', {
            url: '/projectFour',
            template: 'Four'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': {  templateUrl: 'partial-about-image.html',
                    controller: 'scotchController' },
                'columnTwo@about': { 
                    templateUrl: 'patial-about-text.html',
                    controller: 'scotchController'
                },
				'columnThree@about': { 
                    templateUrl: 'partial-about-link.html',
                    controller: 'scotchController'
                }
            }
            
        });
		        

        
});

PortfolioApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});