'use strict';

angular.module('sbAdminApp').factory('LinkSvc', linkSvc);

/* @ngInject */
function linkSvc($resource) {

    var linkRsc = $resource('/api/links/:moduleName:id',
        {
            id: "@id",
            moduleName: "@moduleName"
        },{
            'update': {
                method: 'PUT'
            },
            'byModule' : {
                method: 'GET',
                array: true
            }
        });

    return {
        query: query,
        get: get,
        create: create,
        update: update,
        remove: remove,
        getByModule: getByModule
    };

    //////////

    /***
     * Get all links.
     *
     * @returns {promise}
     */
    function query() {
        return linkRsc.query().$promise;
    }

    /***
     * Get link by id.
     *
     * @param {number} linkId - link id
     * @returns {promise}
     */
    function get(linkId) {
        return linkRsc.get({id: linkId}).$promise;
    }

    /***
     * Create new link.
     *
     * @param {Link} data - link data
     * @returns {promise}
     */
    function create(data) {
        return linkRsc.save(data).$promise;
    }

    /***
     * Update given link data
     *
     * @param {Link} data - link data
     * @returns {promise}
     */
    function update(data) {
        return linkRsc.update(data).$promise;
    }

    /***
     * Remove link by id
     *
     * @param {number} linkId - link id
     * @returns {promise}
     */
    function remove(linkId) {
        return linkRsc.delete({id: linkId}).$promise;
    }

    /***
     * Get links by module name
     *
     * @param {string} moduleName - module name
     * @returns {Array}
     */
    function getByModule(moduleName) {
        return linkRsc.byModule({moduleName : moduleName}).$promise;
    }
}