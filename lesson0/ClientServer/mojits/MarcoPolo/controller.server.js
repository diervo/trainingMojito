/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MarcoPolo', function(Y, NAME) {

/**
 * The MarcoPolo module.
 *
 * @module MarcoPolo
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
            ac.done();
        },

        marco: function(ac) {
            ac.done({'response': 'polo'}, 'json');
        }

    };

}, '0.0.1', {requires: ['mojito', 'MarcoPoloModelFoo']});
