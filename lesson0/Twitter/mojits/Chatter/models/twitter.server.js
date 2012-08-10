/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ChatterModelTwitter', function(Y, NAME) {

/**
 * The ChatterModelFoo module.
 *
 * @module Chatter
 */

    /**
     * Constructor for the ChatterModelFoo class.
     *
     * @class ChatterModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

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
            var api = 'http://search.twitter.com/search.json?callback={callback}&q=';

            Y.log('calling twitter...', 'debug', NAME);

            Y.jsonp(api + query, {
                on: {
                    success: function (response) {
                        Y.log('...done', 'debug', NAME);
                        console.dir(response);
                        callback(response);
                    },
                    failure: function () {
                        Y.log('Failed to call Twitter', 'error', NAME);
                        callback({});
                    }
                }
            });
        }

    };

}, '0.0.1', {requires: ['jsonp']});
