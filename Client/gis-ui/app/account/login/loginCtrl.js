'use strict';

angular.module('sbAdminApp').controller('LoginCtrl', loginCtrl);

function loginCtrl($scope,$state, $auth, Auth,$cookieStore,$rootScope) {
    var vm = this;

    vm.user = {};
    vm.errors = {};
    vm.currentDate = new Date();

    vm.login = login;
    vm.authenticate = authenticate;

    //////////
    function authenticate(provider) {
        $auth.authenticate(provider);
    }
	function saveUser(data){
		 $rootScope.globals = {
                currentUser: {
                    username: data.username
                    
                }
            };
			$cookieStore.put('globals', $rootScope.globals);
	}
    function login(form) {
        vm.submitted = true;

        if (form.$valid) {
            Auth.login({
                    email: vm.user.email,
                    password: vm.user.password
                },function(results){
					console.log(results);
					if(results.success==true){
						
						saveUser({username:vm.user.email});
						$state.go('dashboard.home');
					}else{
						console.log("error");
						vm.errors.other = "Authentication Failed";
						$scope.$apply();
						
					}
				});
                /*.then(function () {
                    $state.go('dashboard.home');
                })
                .catch(function (err) {
                    vm.errors.other = err.message;
                });*/
        }
        //$state.go('dashboard.home');
    }
}
