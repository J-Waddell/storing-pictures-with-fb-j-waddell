console.log('Ayy foo')

const app = angular.module('pictureApp', ['ngRoute'])

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1CCQcEpt_0yOKRj_Kc1B-Sg_mIfc69P0",
    authDomain: "storing-photo-with-fb-jwaddell.firebaseapp.com",
    databaseURL: "https://storing-photo-with-fb-jwaddell.firebaseio.com",
    storageBucket: "storing-photo-with-fb-jwaddell.appspot.com",
    messagingSenderId: "774182511424"
  };
  firebase.initializeApp(config);

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html',
        })
})