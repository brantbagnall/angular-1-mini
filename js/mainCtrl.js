angular.module('friendsList').controller('mainCtrl',function($scope){
    $scope.friends = [
        'Trey', 'Jordan', 'Rachel'
    ]

    $scope.addFriend = function (newFriend) {
        $scope.friends.push(newFriend);
    }
})