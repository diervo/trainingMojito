/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Chatter', function(Y, NAME) {

/**
 * The Chatter module.
 *
 * @module Chatter
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

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
            ac.models.ChatterModelTwitter.search('openhackindia', function (json) {
                var results = json.results || {};
                ac.done({'results': results});
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'ChatterModelFoo']});
