/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Weather', function(Y, NAME) {

/**
 * The Weather module.
 *
 * @module Weather
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
                yqlModel = ac.models.WeatherModelWeatherYQL;

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
        
        /**
         * Method corresponding to the 'twitter' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        twitter: function(ac) {

            var query = ac.params.getFromMerged('query');

            ac.models.WeatherModelTwitter.search(query, function (json) {
                var results = json.results || {};
                ac.done(results, 'json');
            });

        }
    };

}, '0.0.1', {requires: ['mojito', 'WeatherModelWeatherYQL']});
