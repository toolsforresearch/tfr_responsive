/**
 * TFR Responsive Theme by Tools For Research (c) 2015
 */


//* !init */
$(document).ready(function($){
  if (jQuery('select.languagechanger option').size() < 2) {
    $('div.languageswitcher').hide();
    $('div.surveyname').removeClass('col-md-8').addClass('col-md-12');
  }

  //* !vars */
  var groupHeader=$('.group-heading h1'), // 
    questionInput=$('td > input'); // checked tablecell toggle


  //* !Progress Bar */
  // Hide progressbar on register page
  if ($('.register-form').length > 0) {
    $('.progress').hide();
  }
  
  // Show our progressbar instead of the default one
  if ($('#progress-wrapper').length > 0) {
    $('.tfr-progress').append('<div id="tfr-progressbar"><div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>');
    $('#progress-wrapper').addClass('hidden');
  } else {
    $('.tfr-progress').remove();
  }  
  
  // Set custom progressbar value
  $('#progressbar').on('progressbarcreate', function(event, ui){

    var ls_progressBarWidth=$(event.currentTarget).find('.ui-progressbar-value').css('width'),
      tfr_progressBar=$('#tfr-progressbar .progress-bar');

    tfr_progressBar.html(ls_progressBarWidth);
    tfr_progressBar.css({width: ls_progressBarWidth});

  });


  //* !Checked tablecell toggle  */
  // init: Loop through all radio and checkboxes and set class if checked
  questionInput.each(function(index, element){
    if ($(element).is(':checked')) {
      $(element).parent().toggleClass('checked');
    }
  });

  // Make sure each input is before it's label for .array-flexible-duel-scale
  $('td > input', $('.array-flexible-duel-scale')).each(function(index, elem){
    var $elem = $(elem);
    var $parent = $elem.parent();
    var $label = $('label', $parent);
    if ($label) {
      $elem.before($label);
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
  $('td[class^="answer_cell_1"] > label + input').on('click', function(event){ setDualArraySelected(event); });
  $('td[class^="answer_cell_2"] > label + input').on('click', function(event){ setDualArraySelected(event); });
  $('td[class^="dual_scale_no_answer"] > label + input').on('click', function(event){ setDualArraySelected(event); });

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
  // Hide empty elements
  if (groupHeader.html() == '') {
    groupHeader.parent().css({'display': 'none'});
  }


  // Check for empty spans in panel-title divs and hide empty
  $('.panel-title span').each(function(){
    //if ($(this).html() == '') {
    if ($(this).html() == '' && $(this).attr('id').indexOf('LEMtailor')==-1) { //ayh 06.06.15
      $(this).hide();
    }
  });




  //* !The index */ PE
  $('#index').addClass('index').children().removeClass('container').addClass('index-body');


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
  // Change the DOM on the checkbox questions with an "Other" choice (same as on the radio questions)
  $('li.checkbox-item.other-item').each(function(){
    $(this).append('<label class="otheritem" for="othertext"></label>');
    $(this).children('input.text').detach().appendTo($(this).children('label.otheritem'));
  });
  // Change the DOM on the checkbox questions with an commenting-option so they look & act the same
  $('li.checkbox-text-item span.comment').each(function(){
    $(this).append('<label class="answer-comment-wrapper" for="comment"></label>');
    $(this).children('input.text').detach().appendTo($(this).children('label.answer-comment-wrapper'));
  });
  
    
  // Change the DOM on the ui-slider-callout
  // Detach the callout from its parent so we can use it multiple times if we want to
  //$('.ui-slider-handle').each(function() {
  //  $(this).children().detach().appendTo($(this).parent()); // as sibling
  //});


  //* !Table Totals class-renaming */
  $('table').each(function(){
    $(this).removeClass('row').addClass('rows');
    $(this).removeClass('col').addClass('cols');
  });

});
