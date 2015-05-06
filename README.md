***************************************************

You are looking at the free version of our Bootstrap based LimeSurvey template. 

***************************************************

# Introduction
We have tested the template and it works on version 2.05 of Limesurvey. We have not tested it on earlier versions, so it may probably not work on older versions.

The template will work fine on all modern major browsers. IE8 is not modern, so it will probably fail in that browser. We did not develop this template for IE 8 and we will not support it for use on IE 8.

# License
You are free to alter this template and to use it on any server you want. 

This template is licenced under GPL 2.0. This means you can do with it whatever you want. But: please contact us on all found errors and possible improvements. We like to keep up to date!

When you like this template please spread the word. Small donations are more than welcome as well.

# Known Issues
* print support is still poor (as in many templates...)
* surveys do not work with a keyboard, at the moment it is mouse only
* when using the LimeSurvey template upload method, fonts files cannot be installed. Workaround:
** either upload the template using FTP to /upload/template or 
** edit the file /application/config/config-defaults.php at the place where allowedtemplateuploads are declared. Add to the list the following extensions: map, eot, json, svg, ttf, woff
** or run: [your survey root ]/application/config/config.php and add:  
```
'config'=>array(
        'debug'=>0,
        'debugsql'=>0,
        'allowedtemplateuploads'=>'gif,ico,jpg,png,css,js,map,json,eot,svg,ttf,woff',
    )
```

# Premium features
Sometimes you may encounter aspects that seem to be failing: please check first if they have been solved in the Premium version.
* All tables are fully responsive and thus a joy to view and work with on small devices
* Slider questions (multiple numerical, slider layout) indicate whether they have been moved or not
* The Premium version has more color, but not too much. We think that adds to the feeling of comfort of the respondent
* The Premium version will be developed in several colors, while the Free version will only be available in 1 color: gray with signal colors.

# New releases
Since we hope to distribute improved versions periodically, we hope that you send us your improvements, so we can incorporate them in newer version. We cannot guarantee that we will incorporate all suggestions, but we will certainly look at them. Please visit our website for news on the template and to download the newest version and to send us your bug reports and suggestions for improvement.

http://www.toolsforresearch.com/limesurvey-responsive-template

On this page you can also register for news about the template and other LimeSurvey related news.

Each new version of the template will also be released on the LimeSurvey website at: 
https://www.limesurvey.org/en/extensions/55-templates

# Credits
This template was defined by Tools for Research and designed by Peter Emil van den Berg of pixelliquid. We had great help from Marco Alting and Clemens Tolboom. They have ironed out a workflow which makes it easier for us to have different versions of the template.

# Inspiration
When we started working on this template we looked around if anyone had already done work on this. We found the work by mofog at: https://github.com/mofog/BootstrapForLimeSurvey This inspired us, thank you, mofog!

# Who are we?
Tools for Research is a serious LimeSurvey user. We focus on research projects in organisations like:
* FNV (Dutch workers unions) http://www.gewoongoedwerkmeter.nl
* TNO (Contract research) 
* Value2Share (Consulting)
* Antonius Ziekenhuis (Hospital)

We are based in The Netherlands, we work for clients in The Netherlands and the USA. But never hesitate to contact us, wherever you are in the universe. We will expand!

http://www.toolsforresearch.com/contact
