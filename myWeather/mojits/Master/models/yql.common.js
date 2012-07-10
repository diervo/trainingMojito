/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MasterModelWeatherYQL', function(Y, NAME) {

/**
 * The MasterModelFoo module.
 *
 * @module Master
 */

    /**
     * Constructor for the MasterModelFoo class.
     *
     * @class MasterModelFoo
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
            var defaultCoords = {
                latitude: 37.4142716,
                longitude: -122.0243208
            },
            yqlTable = 'https://raw.github.com/yql/yql-tables/master/weather/weather.woeid.xml',
            coords = defaultCoords;

            var query = Y.YQL('use "'+ yqlTable +'" as weather; '+
                    'select * from weather where w in (select place.woeid from flickr.places where '+
                    'lat='+ coords.latitude +' and lon='+ coords.longitude +' and api_key=07518c5da6dcda6f2d8126ca45fbf085)'+
                    ' and u="c";',
                    Y.bind(this.onDataReturn,this,callback));
        },
        onDataReturn: function (cb, result) {
            if (typeof result.error === 'undefined') {
                var results = result.query.results.rss.channel;
                cb(null,results);
            } else {
                cb(result.error);
            }
        }

    };

}, '0.0.1', {requires: ['yql']});
