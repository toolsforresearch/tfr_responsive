***************************************************

You are looking at the free version of our Bootstrap based LimeSurvey template. This is version 1.7.3

***************************************************

Please be aware that this template will work only on LimeSurvey 2.6.2 (previously known as 2.06) installations and not on LimeSurvey 2.5x! Don't try, we already did. It really does not work.

Our next major release will have release number that corresponds with the relase number that LimeSurvey will use. We will release as soon as we can have a new template ready that fits the work in development now for version 3.0 of LimeSurvey. Currently we expect this to be ready in spring 2017.

Release: v1.7.3+2016-12-15 10:50:14 build on 2016-12-15 10:50:14
#Release 1.7.3
* minor improvements

#Release 1.7.0
* better styling of question type "Array by column"
* error with double equations: fixed
* better styling of dual-scale question
* labels visible while only the radion button should be visible: fixed
* progress bar showing fractions on Chrome on Mac: fixed by deleting the percentage altogether
* No text in labels multi-array-flex-text on small devices: fixed

#Release 1.6: Fixed errors/added features since release 1.5
* better styling of file upload dialog and time picker(jQuery)
* group description now also shows when only group description (and not group title) should show up
* HTML in subquestions and headings of array questions now works
* boilerplate question (text display) now only shows heading when help text is not available
* unnecessary CSS removed, so resulting CSS is lighter (but still ....)
* 5 point array with stars now also styled (we had never seen this one before...)
* several smaller issues with margins and paddings...

#Release 1.5: Fixed errors/added features since release 1.4
* added explanation on using retina.js in the template (see below)
* added support for 2, 3, 4, 6 columns in multiple choice questions. We did this using the Bootstrap setup, therefore no support yet for 5, 7, 8, 9 columns, sorry.

# Release 1.4: Fixed errors/added features since release 1.3
* exclusive option in multiple choice now works
* equation is now also shown when it is only a value for a previous question
* numerical input fields are now of reasonable length (not 100%)
* total/remaining values are now nicely shown on multiple numerical (both on slider as well as with input fields)
* array with checkboxes now works
* fixed wrong indentation when no question numbers are used
* better column headings alignment
* better alignment for repeating headers in very long arrays
* logo at the bottom of the page now easier to remove
* warning when javascript is not installed is now shown (it wasn't)
* better styling of min/max values in slider questions
* date and time elements are now shown side by side
* question code is now styled such that it is better distinguishable from question number
* better positioning of survey title
* slider left/right texts are now better positioned
* version numbers are now in the template.css which makes it easier for us to support users

# Known Issues
* printing is possible, but print support is still poor
* surveys do not work completely with a keyboard, at the moment it is mouse only
* the template uses left to right orientation (LTR) only. RTL is not tested. Anyone that wants to contribute to a RTL version is welcome.
* when using the LimeSurvey template upload method, fonts files cannot be installed in previous builds of LimeSurvey. We therefore installed fonts on our servers, which will be called from your survey. If you do not wish that that happens, please use the following workaround:

Workaround:
** either upload the template using FTP to /upload/template or 
** before uploading the template through the template editor: edit the file /application/config/config-defaults.php at the place where allowedtemplateuploads are declared. Add to the list the following extensions: map, eot, json, svg, ttf, woff
** or run: [your survey root ]/application/config/config.php and add:  
```
'config'=>array(
        'debug'=>0,
        'debugsql'=>0,
        'allowedtemplateuploads'=>'gif,ico,jpg,png,css,js,map,json,eot,svg,ttf,woff',
    )
```
** or update to the most recent version of LimeSurvey, which will accept this template through the template editor.

# Introduction
We have tested the template and it works on version 2.05/2.06 of Limesurvey. We have not tested it on earlier versions, so it may probably not work on older versions.

The template will work fine on all modern major browsers: Internet Explorer version 9 and up, Chrome, Firefox, Opera, Safari. IE8 is not modern, so it will probably fail in that browser. 

# License
You are free to alter this template and to use it on any server you want. 

This template is licenced under GPL 2.0. This means you can do with it whatever you want. But: please contact us on all found errors and possible improvements. We like to keep up to date!

When you like this template please spread the word. Small donations are more than welcome as well.

# Premium features
Sometimes you may encounter aspects that seem to be failing: please check first if they have been solved in the Premium version.
* All tables are fully responsive and thus a joy to view and work with on small devices
* Slider questions (multiple numerical, slider layout) indicate whether they have been moved or not
* The Premium (Gray) version has more color, but not too much. We think that adds to the feeling of comfort of the respondent
* The Premium version will be further developed in several colors, while the Free version will only be available in 1 color: gray with signal colors.

# On using images (all versions of the template)
Because we want your survey to look crisp and clear on all devices, we have implemented retina.js (from http://imulus.github.io/retinajs/). Using retina.js is optional; you can add images at will, but when you add the same images in retina quality, the script replaces the default image with the retinaimages (imagename@2x.png for example), displaying a higher resolution image on specific devices, like Apple Retina iPads.

# New releases
Since we hope to distribute improved versions periodically, we hope that you send us your improvements, so we can incorporate them in newer version. We cannot guarantee that we will incorporate all suggestions, but we will certainly look at them. Please visit our website for news on the template and to download the newest version and to send us your bug reports and suggestions for improvement.

http://www.toolsforresearch.com/limesurvey-responsive-template

On this page you can also register for news about the template and other LimeSurvey related news.

Each new version of the template will also be released on the LimeSurvey website at: 
https://www.limesurvey.org/en/extensions/55-templates

# Credits
This template was defined by Tools for Research and designed by Peter Emil van den Berg of pixelliquid. We had great help from Marco Alting and Clemens Tolboom. They have ironed out a workflow using Grunt which makes it easier for us to have different versions of the template.

# Inspiration
When we started working on this template we looked around if anyone had already done work on this. We found the work by mofog at: https://github.com/mofog/BootstrapForLimeSurvey This inspired us, thank you, mofog!

# Who are we?
Tools for Research is a serious LimeSurvey user. We focus on research projects in organisations like:
* FNV (Dutch workers unions) http://www.gewoongoedwerkmeter.nl
* TNO (Contract research) 
* Value2Share (Consulting)
* Antonius Ziekenhuis (Hospital)

We are based in The Netherlands, we work for clients wherever in the universe. But never hesitate to contact us, wherever you are in the universe. We will expand!

http://www.toolsforresearch.com/contact