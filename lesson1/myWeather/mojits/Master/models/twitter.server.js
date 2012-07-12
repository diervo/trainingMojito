/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MasterModelTwitter', function(Y, NAME) {

/**
 * The MasterModelFoo module.
 *
 * @module Master
 */

    /**
     * Constructor for the MasterModelFoo class.
     *
     * @class MasterModelTwitter
     * @constructor
     */
    Y.mojito.models[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        search: function(query, callback) {
            var api = 'http://search.twitter.com/search.json?q=';

            Y.io(api + query, {
                on: {
                    success: function (id, e) {
                        var json = JSON.parse(e.responseText);
                        callback(json);
                    },
                    failure: function () {
                        Y.log('Failed to call Twitter', 'error', NAME);
                        callback({});
                    }
                }
            });
        }

    };

}, '0.0.1', {requires: ['io-base']});
