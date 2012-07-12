/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Master', function(Y, NAME) {

/**
 * The Master module.
 *
 * @module Master
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {

            //Retrieving GET params
            var geoParams = ac.params.url(),
                yqlModel;

            if (geoParams.longitude && geoParams.latitude) {
                yqlModel = ac.models.MasterModelWeatherYQL;

                yqlModel.getData(geoParams, function (err, data) {
                    if (err) {
                        ac.error(err);
                        return;
                    }
                    ac.done(data);
                });
            } else {
                ac.done({});
            }
        },
        
        twitter: function(ac) {

            var query = ac.params.getFromMerged('query');

            ac.models.MasterModelTwitter.search(query, function (json) {
                var results = json.results || {};

                Y.log('twitter results retrieved:', 'debug', NAME);
                Y.log(results, 'debug', NAME);

                ac.done(results, 'json');
            });

        }
    };

}, '0.0.1', {requires: ['mojito', 'MasterModelWeatherYQL']});
