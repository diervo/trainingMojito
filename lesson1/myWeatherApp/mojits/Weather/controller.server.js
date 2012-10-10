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

        init: function (config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function (ac) {

            //Retrieving GET params
            var geoParams = ac.params.url(),
                yqlModel;

            if (geoParams.longitude && geoParams.latitude) {
                //we do this || for backwards compatibility
                yqlModel = ac.models.WeatherModelYQL || ac.models.get('WeatherModelYQL');
                //Call YQLModel to retrieve the Weather for that location
                yqlModel.getData(geoParams, function (err, data) {
                    if (err) {
                        ac.error(err);
                        return;
                    }
                    //With "ac.done" we pass the data to be render
                    //into the view: (see index.mu.html)
                    //After the data is rendered will be shipped to the client.
                    ac.done(data);
                });
            } else {
                //passing an empty object to the view
                //will make the view render partially
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

            var query = ac.params.getFromMerged('query'),
                twitterModel = ac.models.WeatherModelTwitter || ac.models.get('WeatherModelTwitter');

            twitterModel.search(query, function (json) {
                var results = json.results || {};
                ac.done(results,'json');
            });

        }
    };

}, '0.0.1', {requires: ['mojito', 'mojito-models-addon', 'mojito-params-addon', 'WeatherModelYQL', 'WeatherModelTwitter']});
