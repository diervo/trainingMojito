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
            this.getCurrentLocation({
                context:this,
                onSuccess: Y.bind(this.onSuccessGetLocation,this)
            });
        },
        getCurrentLocation:function(config){
            var userSuccess = config.context === 'undefined' ? config.onSuccess : Y.bind(config.onSuccess,config.context),
                success = Y.bind(userSuccess,this),
                error =  typeof config.onError === 'function' ? config.onError : function(evt){Y.log(evt);},
                options = typeof config.options !== 'undefined' ? config.options : {enableHighAccuracy:true};
                navigator.geolocation.getCurrentPosition(success,error,options);
        },
        onSuccessGetLocation: function (geoPosition) {
            this.mojitProxy.invoke('getWeatherJSON', Y.bind(this.refreshWeatherView, this));
        },
        refreshWeatherView: function (err, weather) {
            var name = '.weather',
                placeSel ="#placeName",
                place = weather.location.city +' ('+weather.location.country+')',
                tempSel = name + " #temp",
                temp = weather.item.condition.temp + " ºC",
                imgSel =name + " .image",
                img = '<img src="http://l.yimg.com/a/i/us/nws/weather/gr/'+ weather.item.condition.code+'d.png">',
                descSel = name + " .desc",
                desc = weather.item.condition.text,
                forecastSel= name + " .forecast",
                fNode = weather.item.forecast,
                forecast = "",i;
                for (i=0; i<fNode.length ;i++) {
                    forecast+= "<p>"+ fNode[i].day +': '+ fNode[i].text+ ' <span>(H: '+fNode[i].high+' | L: '+fNode[i].low+')</span></p>';
                }
            Y.one(placeSel).setContent(place);
            Y.one(tempSel).setContent(temp);
            Y.one(imgSel).setContent(img).setStyles({"background":"none"});
            Y.one(descSel).setContent(desc);
            Y.one(forecastSel).setContent(forecast);

            //LANDSCAPE
            var sunrise = weather.astronomy.sunrise,
                sunset = weather.astronomy.sunset,
                humidity = weather.atmosphere.humidity,
                pressure = weather.atmosphere.pressure,
                visibility = weather.atmosphere.visibility,
                chill = weather.wind.chill,
                direction = weather.wind.direction,
                speed = weather.wind.speed;
            //astronomy   
            Y.one("#wSunrise").setContent(sunrise);
            Y.one("#wSunset").setContent(sunset);
            //atmosphere
            Y.one("#wHum").setContent(humidity);
            Y.one("#wPress").setContent(pressure);
            Y.one("#wVis").setContent(visibility);
            //wind
            Y.one("#wChill").setContent(chill);
            Y.one("#wDir").setContent(direction);
            Y.one("#wSpeed").setContent(speed);

        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client','node']});
