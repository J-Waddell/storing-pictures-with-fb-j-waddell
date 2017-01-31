console.log('Ayy foo')

const app = angular.module('pictureApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html',
        })
})