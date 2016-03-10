'use strict';

angular.module('sbAdminApp').controller('LoginCtrl', loginCtrl);

function loginCtrl(Auth, $state) {
    var vm = this;

    vm.user = {};
    vm.errors = {};

    vm.login = login;

    //////////

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
    }
}
