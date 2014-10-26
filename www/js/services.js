angular.module('demo.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Queue', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var dishes = [
        {"dish": "Very Delicious Cookies", "imagePath": "img/cookies.jpg", "restaurant": "Sunrise Diner", "price": 2.99, "rating": "4.0", "phone": 16071234567, "distance": 1.6},
        {"dish": "House Special Spaghetti", "imagePath": "img/spaghetti.jpg", "restaurant": "Pastabilities", "price": 9.99, "rating": "4.0", "phone": 15554441234, "distance": 1.2},
        {"dish": "Smeely Smokey Ribs", "imagePath": "img/ribs.jpg", "restaurant": "Smeely's Barbecue", "price": 12.99, "rating": "4.3", "phone": 16070000000, "distance": 0.4},
        {"dish": "BBQ Baby Back Ribs", "imagePath": "img/boatyard BBQ Baby Back Ribs - 18.95.jpg", "restaurant": "The BoatYard Grill", "price": 18.95, "rating": "4.5", "phone": 16072562628, "distance": 2.4},
        //{"dish": "Coconut Shrimp", "imagePath": "img/boatyard Coconut Shrimp - 8.95.jpg", "restaurant": "The BoatYard Grill", "price": 8.95, "rating": "4.1"},
        {"dish": "Gutenburger", "imagePath": "img/Boatyard Gutenburger - 12.95.jpg", "restaurant": "The BoatYard Grill", "price": 12.95, "rating": "4.4", "phone": 16072562628, "distance": 2.4},
        {"dish": "New York Strip Steak", "imagePath": "img/Boatyard New York Strip Steak - 24.95.jpg", "restaurant": "The BoatYard Grill", "price": 24.95, "rating": "4.3", "phone": 16072562628, "distance": 2.4}
        //boatyard grill phone #= 6072562628
    ];
    return {
        all: function() {
          return dishes;
        },
        get: function(dishId) {
          // Simple index lookup
          return dishes[dishId];
        }
    }
})

.factory('Fav', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var favQueue = [];
    return {
        all: function() {
          return favQueue;
        },
        get: function(favId) {
          // Simple index lookup
          return favQueue[favId];
        }
    }
})

.factory('End', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var endPic = {"dish": "Stay tuned", "imagePath": "img/Logo.png", "restaurant": "Consider dine in?", "price": 0, "rating": ""}
    return {
        all: function() {
          return endPic;
        }
    }
})

.factory('First', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var firstCheck = [true, true];
    return {
        all: function() {
          return firstCheck;
        },
        get: function(firstId) {
          // Simple index lookup
          return firstCheck[firstId];
        }
    }
});

