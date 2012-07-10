YUI.add('Weather', function(Y) {
  /*  var YS = Y.namespace("COMF.Modules");
    
    function Weather(config){
        Weather.superclass.constructor.apply(this,arguments);
    }
    Weather.NAME = 'Weather';
    Weather.ATTRS = {
        title: {value:"Weather"},
        markup:{ value: "xhr"},
        dependencies:{value:["html","css"]}
    };
    Y.extend(Weather,Y.COMF.Module,{
        initModule:function(){
            this.gapTime = 1000*3600;
            this.lastUpdate = 0;
        },
        afterRenderModule:function(){
            
        },
        onModuleActive:function(position){
            if( Y.Lang.now() > this.lastUpdate + this.gapTime ){
                this.getWeather();
            }
        },
        onModuleVisible:function(empty){
            if( Y.Lang.now() > this.lastUpdate + this.gapTime ){
                this.getWeather();
            }
        },
        getWeather:function(){
            Y.C.getCurrentLocation({onSuccess:this.onGetLocation,context:this,cache:true});
        },
        successGetWeather:function(weather){
            var name = '#'+this.get("cssClass"),
                placeSel = name+" #placeName",
                place = weather.location.city +' ('+weather.location.country+')',
                tempSel = name+" #temp",
                temp = weather.item.condition.temp+" Âº C",
                descSel = name+" .info",
                desc = weather.item.description,
                imgSel =name+ " .image",
                img = '<img src="http://l.yimg.com/a/i/us/nws/weather/gr/'+weather.item.condition.code+'d.png">',
                descSel =name+ " .desc",
                desc = weather.item.condition.text,
                forecastSel= name + " .forecast",
                fNode = weather.item.forecast,
                forecast = "",i;
                for (i=0; i<fNode.length ;i++){
                    forecast+= "<p>"+fNode[i].day+': '+ fNode[i].text+ ' <span>(H: '+fNode[i].high+' | L: '+fNode[i].low+')</span></p>'; 
                }
            //Y.log(placeSel);
            Y.one(placeSel).setContent(place);
            Y.one(tempSel).setContent(temp);
            Y.one(imgSel).setStyle("background","none").setContent(img);
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
            
            this.lastUpdate = Y.Lang.now();
        },
        onGetLocation:function(evt){
            //Y.log("Querying YQL...");
            var timestamp = evt.timestamp,coords = evt.coords;
            //var coords= {latitude:"35.704147",longitude:"139.704437"}; //tokio
            var query = Y.YQL('use "https://raw.github.com/yql/yql-tables/master/weather/weather.woeid.xml" as weather; '+
                              'select * from weather where w in (select place.woeid from flickr.places where '+
                              'lat='+coords.latitude+' and lon='+coords.longitude+' and api_key=07518c5da6dcda6f2d8126ca45fbf085)'+
                              ' and u="c";',Y.bind(this.getWoeid,this));    
        },
        getWoeid:function(result){
            if(typeof result.error === 'undefined'){
                try{
                    Y.log(result);
                    var results = result.query.results.rss.channel;
                    this.successGetWeather(results);
                }catch(err){
                    Y.log("ERR WEATHER" + err);
                }
            }else{
                Y.log(result);
            }
            
        },
        bindModule:function(){
            
        }
    });

    YS.Weather = Weather;*/
    
},"1.0.0",{requires:[]});