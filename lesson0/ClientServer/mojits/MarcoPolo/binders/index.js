/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MarcoPoloBinderIndex', function(Y, NAME) {

/**
 * The MarcoPoloBinderIndex module.
 *
 * @module MarcoPoloBinderIndex
 */

    /**
     * Constructor for the MarcoPoloBinderIndex class.
     *
     * @class MarcoPoloBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;

            Y.one('#marco').on('click', Y.bind(function (e) {
                Y.log('Marco clicked', 'debug', NAME);
                this.doRPC();
            }, this));

            window.Y = Y;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {

        },

        doRPC: function(node) {
            this.mojitProxy.invoke('marco', Y.bind(this.handleResponse, this));
        },

        handleResponse: function(err, data, meta) {
            Y.log(data.response, 'warn', NAME);
            Y.one(document.body).append('<p>' + data.response + '<p>');
        }
    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client', 'event']});
