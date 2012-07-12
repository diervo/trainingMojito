/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('WeatherModelYQL', function(Y, NAME) {

/**
 * The WeatherModelFoo module.
 *
 * @module Weather
 */

    /**
     * Constructor for the WeatherModelFoo class.
     *
     * @class WeatherModelYQL
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
        getData: function(params, callback) {
            var yqlTable = 'https://raw.github.com/yql/yql-tables/master/weather/weather.woeid.xml',
                coords = params,
                query = 'use "{table}" as weather; select * from weather where w in (' +
                        'select place.woeid from flickr.places where ' +
                        'lat={lat} and lon={lon} and api_key={api}) and u="c";',
                queryParams = {
                    lat: coords.latitude,
                    lon: coords.longitude,
                    api: '07518c5da6dcda6f2d8126ca45fbf085',
                    table: yqlTable
                },
                cookedQuery = Y.substitute(query, queryParams);

            Y.YQL(cookedQuery, Y.bind(this.onDataReturn, this, callback));
        },
        onDataReturn: function (cb, result) {
            if (typeof result.error === 'undefined') {
                var results = result.query.results.rss.channel;
                cb(null, results);
            } else {
                cb(result.error);
            }
        }

    };

}, '0.0.1', {requires: ['yql', 'substitute']});
