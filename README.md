***************************************************

You are looking at the free version of our Bootstrap based LimeSurvey template. 

***************************************************

Release: v1.5.0 build on 2015-9-25 11:44:17

#Release 1.5: Fixed errors/added features since release 1.4
This release show some bug fixes and some enhancements:

 * input width on short text questions: now 100% on mobile devices and user setting on larger screens
 * introduction of retina.js, so images will use [image-title]@2x.png and [image-title]@3x.png when available, so images may look good on retina displays too.
 * enter by keyboard made user go to previous page on some browsers. Now "enter" does not do anything, but trigger the "change"
 * there was a difference in styling of the top of the page between single language and multi-language surveys. That is not there anymore.
 * Text-display questions now only show the help-text area, when there is something to show in the help-text area.
 * date selects now show text in correct color (was green)
 * the style.css file has shrunk from ~260 kB to 133 kB
 * re-styling of datepicker and filepicker (jQuery)
 * IMPORTANT: load fonts from local server again (see below)
 * added support for 2, 3, 4, 6 columns in multiple choice questions. We did this using the Bootstrap setup, therefore no support yet for 5, 7, 8, 9 columns, sorry.

*Important for people that use the LimeSurvey Template Editor for uploading templates.*
Until version LimeSurvey 2.05 font files that are present in the template could not be uploaded to the limesurvey installation by default. So if you have a LimeSurvey installation that uses software from before June 16, 2015, your template will possibly not upload the font files, which will result in missing icons.
There are three possible solutions to this problem:
 1. upgrade your Limesurvey installation to a version that is newer than June 16, 2015
 2. in your configuration file of LimeSurvey, that resides in: /application/config/config-defaults.php you have to change the line that starts with: *$config['allowedtemplateuploads'] =* into: *$config['allowedtemplateuploads'] = 'gif,ico,jpg,png,css,js,map,json,eot,svg,ttf,woff,txt,MD';*
 3. or upload the template using FTP to: /upload/templates

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
* surveys do not work with a keyboard, at the moment it is mouse only
* dialog for uploading files needs better styling (it is now a mix of standard jQuery and our design)
* dialog for date/time setting needs better styling (same as above)
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
We have tested the template and it works on version 2.05 of Limesurvey. We have not tested it on earlier versions, so it may probably not work on older versions.

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