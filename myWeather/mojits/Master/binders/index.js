/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MasterBinderIndex', function(Y, NAME) {

/**
 * The MasterBinderIndex module.
 *
 * @module MasterBinderIndex
 */

    /**
     * Constructor for the MasterBinderIndex class.
     *
     * @class MasterBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            this.node = node;
            Y.one('.getLocation').on('click', Y.bind(this.handleLocation, this));
        },
        handleLocation: function (e) {
            e.halt();
            this.getCurrentLocation({
                context:this,
                onSuccess: Y.bind(this.onSuccessGetLocation,this)
            });
            e.currentTarget.setContent('Loading...');
        },
        getCurrentLocation: function (config) {
            var userSuccess = config.context === 'undefined' ? config.onSuccess : Y.bind(config.onSuccess,config.context),
                success = Y.bind(userSuccess,this),
                error =  typeof config.onError === 'function' ? config.onError : function(evt){Y.log(evt);},
                options = typeof config.options !== 'undefined' ? config.options : {enableHighAccuracy:true};

                navigator.geolocation.getCurrentPosition(success,error,options);
        },
        onSuccessGetLocation: function (geoPosition) {
            var coords = geoPosition.coords;
            this.mojitProxy.refreshView({
                params:{
                    url: {
                        longitude: coords.longitude,
                        latitude: coords.latitude
                    }
                }
            });
            // this.mojitProxy.invoke('getWeatherJSON',{
            //     params:{
            //         url: {
            //             longitude: coords.longitude,
            //             latitude: coords.latitude
            //         }
            //     }
            // },function (err, data, meta) {
            //     console.log(arguments);
            // });

            
        },
        onRefreshView: function (node, renderedView) {
            console.log('View has been refreshed!');
            console.log(renderedView);
        }
    };

}, '0.0.1', {requires: ['mojito-client','node']});
