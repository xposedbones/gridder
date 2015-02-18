# gridder
A lightweight (7kb) grid system inspired by bootstrap 

## Really quick usage
Link to the css (dist/gridder.min.css) and have fun!

## Demo
I've put together a quick demo available [here](http://gridder.xposedbones.com)

##Customizing
If you want to customize the breakpoints or other things, please check **build/_gridConfig.scss** to make some changes.

To generate a custom stylesheet, run ```npm install``` then ```grunt build``` and you're done!

You can change the numbers of collums with the ```$nbCols``` variables. 

You can add media queries by editing the ```$queries``` variables. It works as follows; Each entry creates a media query like this: ```@media all and (min-width:KEY)``` and every class that goes with that media query, like ```col-KEY-6```. If you need more media queries, just add them and the sass file will take care of everything.
