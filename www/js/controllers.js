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
    /*
function trash() {
    console.log("someone dun gooft");
}

function yum() {
    console.log("you liked a dish!!!");
}

function info(){
    console.log("happy birthday");
}*/
    
    
    $scope.onSwipeRight = function(index, element){
        $scope.counter--;
        if (this.firstRight) {
            $ionicPopup.show({
            template: 'Swipe right to LIKE and add to your favorites',
            title: 'Alert',
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
            template: 'No more pics to see. Stay Tuned.',
            title: 'Alert',
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
            this.favorites.push(this.dish);
            this.dish = nextItem;
        }
    }
    
    $scope.onSwipeLeft = function(index, element){
        $scope.counter--;
        if (this.firstLeft) {
            var myPopup = $ionicPopup.show({
            template: 'Swipe left to ignore',
            title: 'Alert',
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
            template: 'No more pics to see. Stay Tuned.',
            title: 'Alert',
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
    }
    
    $scope.onTap = function(index) {
        var index = $scope.dishes.indexOf(this.dish);
        //alert(this.dishes[index].dish);

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
            //template: '$' + this.dishes[index].price + '<br>' + this.dishes[index].rating + "/5",
            title:  '<br>' + this.dishes[index].dish + '<br>' + '$' +this.dishes[index].price + '<br><br>' + this.dishes[index].restaurant
                    + '<br><br>' + this.dishes[index].distance + 'miles away' + '<br>',
            //subTitle: '$' + this.dishes[index].price + '<br>' +this.dishes[index].rating + "/5",
            scope: $scope,
            buttons: [
                { text: 'Eat this' },
                { text: 'No thanks' }
            ]
        });
    }
    $ionicModal.fromTemplateUrl("queue.html", {
        scope: $scope,
        animation: 'slide-in-up'
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

.controller('QueueCtrl', function($scope, $state) {
    $scope.viewDetails = function() {
        alert("Hello");
        $state.go('restaurant');
    };
})

.controller('RestaurantCtrl', function($scope) {
})
