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
            var data = {'x': 'y'};
            //ac.assets.addBlob('<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">','top');
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
        },
        getWeather: function(ac) {
            ac.models.MasterModelWeatherYQL.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }

            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'MasterModelFoo']});
