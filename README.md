# Yahoo! Mojito Training

## Prerequesites
We recommend nodejs 0.6 installed via npm.  
https://github.com/isaacs/npm  

If you want to be able to use YUIDoc (mojito docs) you will need a few python modules.
You can install them using the following command:  

    $ sudo easy_install simplejson pygments Cheetah

(Full Disclosure: there is a pull request to update Mojito to yuidoc.js)

## Quick Start

    $ git clone git://github.com/dferreiroval/trainingMojito.git
    $ cd trainingMojito/lesson1/myWeather
    $ npm install mojito@0.3.26 -g
    $ mojito test app .
    $ mojito docs app lesson1
    $ mojito start --context "environment:development"
    
You can also take a look at this app running on nodejitsu:
http://fabianfrank.myweatherapp.jit.su/

## Screencast
Lesson 1: http://www.youtube.com/watch?v=Odn3uXahSfs  
To be uploaded.

## Help
Mojito Docs: http://developer.yahoo.com/cocktails/mojito/docs/  
Mojito Forum: http://developer.yahoo.com/forum/Yahoo-Mojito/  
YUI Forum: http://yuilibrary.com/forum/  
Cocktails Introduction: http://developer.yahoo.com/blogs/ydn/posts/2011/11/yahoo-announces-cocktails-%E2%80%93-shaken-not-stirred/  


Diego Ferreiro Val <elfogris@gmail.com> @diervo  
Fabian Frank <fabian.frank.de@gmail.com> @Fabian_Frank 

