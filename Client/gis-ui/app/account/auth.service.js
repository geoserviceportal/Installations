'use strict';

angular.module('sbAdminApp')
    .factory('Auth', function Auth($http, User, $cookies, $q, $state) {

        var safeCb = function (cb) {
                return (angular.isFunction(cb)) ? cb : angular.noop;
            },

            currentUser = null;

        if ($cookies.get('token')) {
            currentUser = User.get();
        }

        return {

            /**
             * Authenticate user and save token
             *
             * @param  {Object}   user     - login info
             * @param  {Function} callback - optional, function(error, user)
             * @return {Promise}
             */
            login: function (user, callback) {

                $cookies.put('token', 'sample_tpken');

                var user = {
                    name: 'sample',
                    email: user.email,
                    password: user.password
                };

                currentUser = user;

                return $q.when(user);
                //return $http.post('/auth/local', {
                //    email: user.email,
                //    password: user.password
                //  })
                //  .then(function (res) {
                //    $cookies.put('token', res.data.token);
                //    currentUser = User.get();
                //    return currentUser.$promise;
                //  })
                //  .then(function (user) {
                //    safeCb(callback)(null, user);
                //    return user;
                //  })
                //  .catch(function (err) {
                //    this.logout();
                //    safeCb(callback)(err.data);
                //    return $q.reject(err.data);
                //  }.bind(this));
            },

            /**
             * Delete access token and user info
             */
            logout: function () {
                $cookies.remove('token');
                currentUser = {};
                $state.go('login');
            },

            /**
             * Create a new user
             *
             * @param  {Object}   user     - user info
             * @param  {Function} callback - optional, function(error, user)
             * @return {Promise}
             */
            createUser: function (user, callback) {
                return User.save(user,
                    function (data) {
                        $cookies.put('token', data.token);
                        currentUser = User.get();
                        return safeCb(callback)(null, user);
                    },
                    function (err) {
                        this.logout();
                        return safeCb(callback)(err);
                    }.bind(this)).$promise;
            },

            /**
             * Change password
             *
             * @param  {String}   oldPassword
             * @param  {String}   newPassword
             * @param  {Function} callback    - optional, function(error, user)
             * @return {Promise}
             */
            changePassword: function (oldPassword, newPassword, callback) {
                return User.changePassword({id: currentUser._id}, {
                    oldPassword: oldPassword,
                    newPassword: newPassword
                }, function () {
                    return safeCb(callback)(null);
                }, function (err) {
                    return safeCb(callback)(err);
                }).$promise;
            },

            /**
             * Gets all available info on a user
             *   (synchronous|asynchronous)
             *
             * @param  {Function|*} callback - optional, funciton(user)
             * @return {Object|Promise}
             */
            getCurrentUser: function (callback) {
                if (arguments.length === 0) {
                    return currentUser;
                }

                //var value = (currentUser && currentUser.hasOwnProperty('$promise')) ? currentUser.$promise : currentUser;
                return $q.when(currentUser)
                    .then(function (user) {
                        safeCb(callback)(user);
                        return user;
                    }, function () {
                        safeCb(callback)({});
                        return {};
                    });
            },

            /**
             * Check if a user is logged in
             *   (synchronous|asynchronous)
             *
             * @param  {Function|*} callback - optional, function(is)
             * @return {Bool|Promise}
             */
            isLoggedIn: function (callback) {
                if (arguments.length === 0) {
                    return currentUser;
                }

                return this.getCurrentUser(null)
                    .then(function (user) {
                        var is = currentUser;
                        safeCb(callback)(is);
                        return is;
                    });
            },

            /**
             * Get auth token
             *
             * @return {String} - a token string used for authenticating
             */
            getToken: function () {
                return $cookies.get('token');
            }
        };
    });
