'use strict';

angular.module('sbAdminApp').controller('LoginCtrl', loginCtrl);

function loginCtrl($state, $auth, Auth) {
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

    function login(form) {
        vm.submitted = true;

        if (form.$valid) {
            Auth.login({
                    email: vm.user.email,
                    password: vm.user.password
                })
                .then(function () {
                    $state.go('dashboard.home');
                })
                .catch(function (err) {
                    vm.errors.other = err.message;
                });
        }
        $state.go('dashboard.home');
    }
}
