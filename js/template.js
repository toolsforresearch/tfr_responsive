/**
 * TFR Responsive Theme by Tools For Research (c) 2015
 */


//* !init */
$(document).ready(function($){

  //* !Body extra class */
  $('body').addClass('tfr_responsive');


  //* !Survey wrapper */
  $('form').wrapInner('<div class="survey-wrapper">');


  //* !Language Switcher */
  if (jQuery('select.languagechanger option').size() < 2) {
    $('div.languageswitcher').hide();
    $('div.surveyname').removeClass('col-md-8').addClass('col-md-12');
  }


  //* !Progress Bar */
  // Hide progressbar on register page
  if ($('.register-form').length > 0) {
    $('.progress').hide();
  }
  
  // Show our progressbar instead of the default one
  if ($('#progress-wrapper').length > 0) {
    $('body').addClass('with-progress');
    $('.tfr-progress').append('<div id="tfr-progressbar"><div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>');
    $('#progress-wrapper').addClass('hidden');
  } else {
    $('.tfr-progress').remove();
  }  
  
  // Set custom progressbar value
  $('#progressbar').on('progressbarcreate', function(event, ui){

    var ls_progressBarWidth=$(event.currentTarget).find('.ui-progressbar-value').css('width'),
      tfr_progressBar=$('#tfr-progressbar .progress-bar');

    //tfr_progressBar.html(ls_progressBarWidth);
    tfr_progressBar.css({width: ls_progressBarWidth});

  });


  //* !The index */ PE
  $('#index').attr('role', 'navigation').addClass('index').children().removeClass('container').addClass('index-body');
  


  //* !Better borderstyling first radio- & checkboxlist  */
  // insert an empty element which can be styled accordingly
  $('ul.radio-list, ul.checkbox-list').each(function(){
    $(this).prepend('<li class="answer-item ruler"></li>');
  });

  //* !Checked tablecell toggle  */
  // init: Loop through all radio and checkboxes and set class if checked
  var questionInput=$('td > input');
  questionInput.each(function(index, element){
    if ($(element).is(':checked')) {
      $(element).parent().toggleClass('checked');
    }
  });


  //* !User Response on table within array-flexible-column  */
  // we put the class "radio-list" on the tablerow so the default user response is restored
  $('.array-flexible-column tbody tr').each(function(){
    $(this).addClass('radio-list');
  });


  //* !Remove textual labels within arrays */
  // issue #480 / forms issue when used on small devices and the responsive table technique: we use css font-size: 0px instead
  //$('div[id*="question"][class*="array"] label').each(function(){
  //  $(this).html('');
  //});


  //* !Dual Scale array  */
  // Make sure each input is before it's label for .array-flexible-duel-scale
  $('td > input', $('.array-flexible-duel-scale')).each(function(index, elem){
    var $elem = $(elem);
    var $parent = $elem.parent();
    var $label = $('label', $parent);
    if ($label) {
      //$elem.before($label);
      $elem.insertBefore($label);
    }
  });

  // On User Action
  $('td > input').on('click', function(event){

    var selectedInput=$(event.target),
      containingRow=selectedInput.parent().parent(),
      isColumn=selectedInput.closest('div[id*="question"]').hasClass('array-flexible-column');

    if (selectedInput.closest('div[id*="question"]').hasClass('array-flexible-duel-scale')
     || selectedInput.closest('div[id*="question"]').hasClass('array-flexible-dual-scale')) {
      return true;
    }

    if (!isColumn) {
      // Remove checked class from all labels in row
      containingRow.find('td').removeClass('checked');
    } else {
      var name=selectedInput.attr('name');
      $('input[name="' + name + '"]').parent().removeClass('checked');
    }

    if (selectedInput.parent().hasClass('checkbox-item')) {
      // State is managed by Limesurvey
      return;
    }

    // Add class checked to selected label
    selectedInput.parent().toggleClass('checked');

  });

  // On User Action FOR DUAL ARRAY
  $('td[class^="answer_cell_1"] > input').on('click', function(event){ setDualArraySelected(event); });
  $('td[class^="answer_cell_2"] > input').on('click', function(event){ setDualArraySelected(event); });
  $('td[class^="dual_scale_no_answer"] > input').on('click', function(event){ setDualArraySelected(event); });

  function setDualArraySelected(event){

    var selectedInput = $(event.target);
    var containingRow = selectedInput.parent().parent();
    var answerInputs = containingRow.find('input');
	var clickedNoAnswer = selectedInput.parent().hasClass('dual_scale_no_answer');

    // Remove checked class from all labels in the row
    containingRow.find('td').removeClass('checked');

    answerInputs.each(function(index, element){
      // Add class=checked to label if input is checked,
	  // except for the no answer label and only if we did not click on no answer
      if ($(element).is(':checked') && !$(element).parent().hasClass('dual_scale_no_answer') && !clickedNoAnswer) {
        $(element).parent().addClass('checked');
      }
      // Add class=checked to no answer label if clicked
	  if ( clickedNoAnswer) {
        selectedInput.parent().addClass('checked');
	  }
    });
  }
  

  //* !Empty elements */
  // Check for empty elements and remove them from the DOM
  
  // Remove help-image for the DOM because we don't use it
  $('.survey-question-help').each(function(){
    $(this).find('img').detach();
  });
    
  // Check for empty .group-heading
  $('.group-heading').each(function(){
    if ($(this).children('h1').html() == '' && $(this).children('.group-description').html() == '') {
      $(this).detach();
    }
  });
  
  // Check for empty elements in .group-heading
  $('.group-heading h1, .group-heading .group-description').each(function(){
    if ($(this).html() == '') {
      $(this).detach();
    }
  });

  // Check for empty spans in panel-title
  $('.panel-title span').each(function(){
    if ($(this).html() == '' && $(this).attr('id').indexOf('LEMtailor')==-1) { //ayh 06.06.15
      $(this).detach();
    }
  });

  // Check for empties within the answers area of the questions PE 20.08.15
  // This consists of several steps:
  
  // 1. Check for empty .emtip in .questionhelp
  $('.emtip').each(function(){
    if ($(this).html() == '') {
      $(this).detach(); // remove the element
    }
  });
  
  // 2. Check for empty .questionhelp
  $('.questionhelp').each(function(){
    if ($(this).html() == '') {
      $(this).detach(); // remove the element
    }
  });
  
  // 3. Check for empty .text-success
  // - we do this as a separate step so we don't detach it when some other content besides .questionhelp exists
  $('.text-success').each(function(){
    if ($(this).html() == '') {
      $(this).detach(); // remove the element
    }
  });

  // 4. Check for questiontypes TextDisplay (= .boilerplate) and Equation
  $('.boilerplate, .equation').each(function(){
    // first we check for instances of .survey-question-help and flag this question
    $(this).has('.survey-question-help').addClass('includes-surveyquestionhelp');
    // finally target all questions within this questiontype without flag and remove them
    $(this).not('.includes-surveyquestionhelp').find('.panel-body').addClass('hidden');
  });




  //* !The slider */ PE 09.06.15
  
  //* ! Slider show min-max values */
  // Wrap the slider_showmin and slider_showmax
  $('ul.slider-list > li.withslider').each(function() {
    $('div.slider_showmin', this).wrap('<div class="slider-minmaxvalues"></div>');
    $('div.slider_showmax', this).insertAfter($('div.slider_showmin', this));
  });
  // Hide slider_showmin and slider_showmax on minimum and maximum value handle
  $('.ui-slider').on('slidechange', function(event, ui){
    if ($(this).find('.ui-slider-handle').attr('style') == 'left: 0%;') {
      $(this).find('.slider_showmin').addClass('hidden');
    }
    if ($(this).find('.ui-slider-handle').attr('style') == 'left: 100%;') {
      $(this).find('.slider_showmax').addClass('hidden');
    }
  });
  // Show slider_showmin and slider_showmax when user starts sliding
  $('.ui-slider').on('slidestart', function(event, ui){
    $(this).find('.slider_showmin').removeClass('hidden');
    $(this).find('.slider_showmax').removeClass('hidden');
  });

  //* ! Slider helptext */
  // Place left and right helptext together wrapped
  $('ul.slider-list > li.withslider').each(function() {
    $('div.slider_righttext', this).wrap('<div class="slider-helptext"></div>');
    $('div.slider_lefttext', this).insertBefore($('div.slider_righttext', this));
    // re-position the reset-button when present above the helptext to preserve easy positioning
    $('a.slider-reset', this).insertBefore($('div.slider-helptext', this));
  });
  


  //* ! Slider Reset Adaptive Layout */ PE
  if ($('.slider-reset').length > 0) {
    $('.slider-reset').parent().addClass('withreset');
  }
    
  
  //* !Better DOM structure on Other & Commenting Options */ PE
  // Change the DOM on the checkbox questions with an "Other" choice (multiple-opt) (same as on the radio questions)
  $('li.checkbox-item.other-item').each(function(){
    $(this).append('<label class="otheritem" for="othertext"></label>');
    $(this).children('input.text').detach().appendTo($(this).children('label.otheritem'));
  });
  // Create a styling hook on "Other" choice (multiple-opt-comments)
  $('li.checkbox-text-item.other-item .option input').keyup(function(){
    if( $(this).val() ) {
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
  });
  // Create a styling hook on "Comment" choice (multiple-opt-comments)
  $('li.checkbox-text-item .comment input').keyup(function(){
    if( $(this).val() ) {
      $(this).parent().addClass('commented');
    } else {
      $(this).parent().removeClass('commented');
    }
  });
  // Change the DOM on the checkbox questions with an commenting-option so the comments look the same (multiple-opt-comments)
  $('li.checkbox-text-item span.comment').each(function(){
    $(this).append('<label class="answer-comment-wrapper" for="comment"></label>');
    $(this).children('input.text').detach().appendTo($(this).children('label.answer-comment-wrapper'));
  });
  
    
  // Change the DOM on the ui-slider-callout
  // Detach the callout from its parent so we can use it multiple times if we want to
  //$('.ui-slider-handle').each(function() {
  //  $(this).children().detach().appendTo($(this).parent()); // as sibling
  //});


  //* !Table Totals class-renaming */ PE
  $('table').each(function(){
    $(this).removeClass('row').addClass('rows');
    $(this).removeClass('col').addClass('cols');
  });


  //* !Columns */ PE
  // Wrapper with standard BS column classes
  $('.cols-2-ul').wrap( '<div class="cols col-md-6"></div>' );
  $('.cols-3-ul').wrap( '<div class="cols col-md-4"></div>' );
  $('.cols-4-ul').wrap( '<div class="cols col-sm-6 col-md-3"></div>' );
  $('.cols-6-ul').wrap( '<div class="cols col-sm-4 col-md-2"></div>' );
  // Wrapper based on LimeSurvey column solution
  $('.cols-5-ul').wrap( '<div class="cols col-md-5"></div>' );
  
  
  //* jQuery UI overrides */
  
  ////* !Disable un-intentional Draggable behaviour */
  //// option 1
  //$('.dialog-upload').dialog({
  //  draggable: false
  //// option 2
  //$('.dialog-upload').draggable({disabled: true});
  //});
  //// option 3
  //$('a.upload').on('click',function(event){
  //  $(this).closest('.dialog-upload').removeClass('ui-draggable');
  //});  

  
  //* !Enter Issues */ Jan
  // Prevent submit next (Chrome, Firefox) or previous (Safari, IE11) on Enter in text field
  // Inspiration: http://stackoverflow.com/a/21800607/872051
  $('input.text').keypress(function(event){ 
    if (event.keyCode == 13){
      event.preventDefault();
      $(this).trigger('change');
    }
  });

});
