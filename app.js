var app = angular.module("app", ["ui.router"])
// CONFIG
// ============================================================
.config(function($stateProvider, $urlRouterProvider) {

  // INITIALIZE STATES
  // ========================ROUTES====================================
  $stateProvider

    // HOME STATE
.state('home', {
     url: '/',
     templateUrl: './views/home.html'
})

     // ABOUT STATE
.state('about', {
     url: '/about',
     templateUrl: './views/about.html'
     })

// BLOG STATE
.state('blog', {
     url: '/blog',
     templateUrl: './views/blog.html'
     })

// SHOP STATE
.state('shop', {
     url: '/shop',
     templateUrl: './views/shop.html',
     controller: 'shopCtrl'
     })

// DETAILS STATE
.state('details', {
     url: '/details/:id',
     templateUrl: './views/product-details.html',
     controller: 'shopCtrl'
});


  // ASSIGN OTHERWISE
  $urlRouterProvider.otherwise('/');
});