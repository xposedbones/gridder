# gridder
A lightweight (it ships at a huge 6kb) grid system inspired by bootstrap 

## Quick Installation
use ```bower install gridder``` and link to the css (dist/gridder.min.css)

## What's new?
You can now access Gridder's breakpoint in your sass stylesheet! Just include the _gridConfig.scss in your stylesheet and you're good to go!
example: ```@media screen and (max-width:breakpoint(tb)){}``` will output ```@media screen and (max-width:640px){}```

## Demo
I've put together a quick demo available [here](http://gridder.xposedbones.com) and you can play with it [on codepen](http://codepen.io/xposedbones/pen/gbemeb)

##Customizing
If you want to customize the breakpoints or other things, please check **build/_gridConfig.scss** to make some changes.

To generate a custom stylesheet, run ```npm install``` then ```grunt build``` and you're done!

You can change the numbers of collums with the ```$nbCols``` variables. 

You can add media queries by editing the ```$queries``` variables. It works as follows; Each entry creates a media query like this: ```@media all and (min-width:KEY)``` and every class that goes with that media query, like ```col-KEY-6```. If you need more media queries, just add them and the sass file will take care of everything.

if you want to have a specific column and the 1/12 system doesn't cover it, you can simply add a key to the ```$customCols``` object and it will generate every class for your custom column. (I've put the class 5th as an example)