angular.module('demo.controllers', [])

//var fav_queue = [];


.controller('MainCtrl', function($scope, $state, $ionicModal, $ionicPopup, Queue, Fav, First, End) {
    $scope.myTitle = '<img src="img/word.png">';
    $scope.dishes = Queue.all();
    $scope.dish = $scope.dishes[$scope.dishes.length-1];
    $scope.favorites = Fav.all();
    $scope.firsts = First.all();
    $scope.firstLeft = $scope.firsts[0];
    $scope.firstRight = $scope.firsts[1];
    $scope.end = End.all();
    $scope.counter = $scope.dishes.length;
    
    $scope.share = function() {
        $ionicPopup.show({
            title: 'Share',
            buttons: [
                {text: '<a class="button button-icon icon ion-social-facebook"></a>'},
                {text: '<a class="button button-icon icon ion-social-twitter"></a>'},
                {text: '<a class="button button-icon icon ion-social-pinterest"></a>'}
            ]
        });
    };
    
    $scope.onSwipeRight = function(index, element){
        $scope.counter--;
        if (this.firstRight) {
            $ionicPopup.show({
            template: 'This means you like this dish',
            title: 'Swipe Right',
            scope: $scope,
            buttons: [
                { text: 'OK' }
            ]
            });
            this.firstRight = false;
        }
        var index = $scope.dishes.indexOf(this.dish);
        angular.element(document.getElementById(element)).addClass('right-swipe');
        var nextItem;
        this.dishes.splice(index, 1);
        if (this.counter === 0) {
            $ionicPopup.show({
            template: 'Keep Thinking Kebo!',
            title: 'No More Dishes',
            scope: $scope,
            buttons: [
                { text: 'OK' }
            ]
            });
            this.dish = this.end;
        }
        else {
            if(index > 0 && index <= this.dishes.length - 1){
                nextItem = this.dishes[index - 1];
            } else {
                nextItem = this.dishes[this.dishes.length-1];
            }
            this.favorites.push(this.dish);
            this.dish = nextItem;
        }
    };
    
    $scope.onSwipeLeft = function(index, element){
        $scope.counter--;
        if (this.firstLeft) {
            var myPopup = $ionicPopup.show({
            template: 'This means you are not feeling this dish',
            title: 'Swipe Left',
            scope: $scope,
            buttons: [
                { text: 'OK' }
            ]
            });
            this.firstLeft = false;
        }
        var index = $scope.dishes.indexOf(this.dish);
        angular.element(document.getElementById(element)).addClass('left-swipe');
        var nextItem;
        this.dishes.splice(index, 1);
        if (this.counter === 0) {
            var myPopup = $ionicPopup.show({
            template: 'Keep Thinking Kebo!',
            title: 'No More Dishes',
            scope: $scope,
            buttons: [
                { text: 'OK' }
            ]
            });
            this.dish = this.end;
        }
        else {
            if(index > 0 && index <= this.dishes.length - 1){
                nextItem = this.dishes[index - 1]
            } else {
                nextItem = this.dishes[this.dishes.length-1];
            }
            this.dish = nextItem;
        }
    };
    
    $scope.onTap = function(index) {
        var index = $scope.dishes.indexOf(this.dish);

            var myPopup = $ionicPopup.show({
            title:  '<br>' + this.dishes[index].dish + '<br>' + '$' +this.dishes[index].price + '<br><br>' + this.dishes[index].restaurant
                    + '<br><br>' + this.dishes[index].distance + 'miles away' + '<br>',
            scope: $scope,
            buttons: [
                { text: 'Eat this' },
                { text: 'No thanks' }
            ]
        });
    };
    $ionicModal.fromTemplateUrl("queue.html", {
        scope: $scope,
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.swipeQueue = function(){
        $scope.modal.show();
    };
    $scope.closeQueue = function() {
        $scope.modal.hide();
    };
    $scope.viewRibsDetails = function() {
        $ionicPopup.show({
            templateUrl: 'ribs.html',
            buttons: [
            { text: 'OK' }
            ]
        });
    };
    $scope.viewNYDetails = function() {
        $ionicPopup.show({
            templateUrl: 'boatyard.html',
            buttons: [
            { text: 'Cancel' }
            ]
        });
    };
})

.controller('CardsCtrl', function($scope, TDCardDelegate) {
  var cardTypes = [
      {image: 'img/steak.jpg'},
    { image: 'img/salad.jpg' },
    { image: 'img/ribs.jpg' },
    { image: 'img/spaghetti.jpg' },
    { image: 'img/babyback.jpg' },
    { image: 'img/gutenburger.jpg' },
    {image: 'img/cookies.jpg' },
    {image: 'img/Logo.png'}
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
});
