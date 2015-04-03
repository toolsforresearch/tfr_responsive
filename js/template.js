/**
 * Created by marco on 31/03/14.
 */

$(document).ready(function($){
  if (jQuery('select.languagechanger option').size() < 2) {
    $('div.languageswitcher').hide();
    $('div.surveyname').removeClass('col-md-8').addClass('col-md-12');
  }

  var groupHeader=$('.group-heading h1'),
    questionInputs=$('td > label + input');

  // Hide progressbar on register page
  if ($('.register-form').length > 0) {
    $('.progress').hide();
  }

  // Loop through all radio and checkboxes and set label class if checked
  questionInputs.each(function(index, element){

    // Add class checked to selected label
    if ($(element).is(':checked')) {
      $(element).prev().toggleClass("checked");
    }
  });

  // Set custom progressbar value
  $("#progressbar").on("progressbarcreate", function(event, ui){

    var ls_progressBarWidth=$(event.currentTarget).find('.ui-progressbar-value').css('width'),
      tfr_progressBar=$('#tfr-progressbar .progress-bar');

    tfr_progressBar.html(ls_progressBarWidth);
    tfr_progressBar.css({width: ls_progressBarWidth});

  });

  // Radio input toggle
  $('td > label + input').on('click', function(event){

    var selectedInput=$(event.target),
      containingRow=selectedInput.parent().parent(),
      isColumn=selectedInput.closest('div[id*="question"]').hasClass('array-flexible-column');

    if (selectedInput.closest('div[id*="question"]').hasClass('array-flexible-duel-scale')) {
      return false;
    }

    if (!isColumn) {
      // Remove checked class from all labels in row
      containingRow.find('label').removeClass("checked");
    } else {
      var name=selectedInput.attr('name');
      $('input[name="' + name + '"]').prev().removeClass("checked");
    }

    // Add class checked to selected label
    selectedInput.prev().toggleClass("checked");
  });


  // Radio input toggle FOR DUAL ARRAY
  $('td[class^="answer_cell_1"] > label + input').on('click', function(event){ setDualArraySelected(event); });
  $('td[class^="answer_cell_2"] > label + input').on('click', function(event){ setDualArraySelected(event); });

  function setDualArraySelected(event){

    var selectedInput=$(event.target),
      containingRow=selectedInput.parent().parent(),
      isColumn=selectedInput.closest('div[id*="question"]').hasClass('array-flexible-duel-scale');

    if (!isColumn) {
      // Remove checked class from all labels in row
      containingRow.find('label').removeClass("checked");
    } else {
      var name=selectedInput.attr('name');
      $('input[name="' + name + '"]').prev().removeClass("checked");
    }

    // Add class checked to selected label
    selectedInput.prev().toggleClass("checked");
  }


  // Hide empty elements
  if (groupHeader.html() == '') {
    groupHeader.parent().css({'display': 'none'});
  }


  // Check for empty spans in panel-title divs and hide empty
  $('.panel-title span').each(function(){
    if ($(this).html() == '') {
      $(this).hide();
    }
  });


  $('div.main > div.container').append(' \
  <div class="row"> \
      <div class="survey-info"> \
          <p>This free surveytemplate is lovingly crafted by the people of <a href="http://www.toolsforresearch.com/limesurvey-responsive-template" target="_blank">Tools&nbsp;for&nbsp;Research</a></p> \
          <a target="_blank" href="http://www.toolsforresearch.com/limesurvey-responsive-template"><img class="logo center-block" \
             src="data:image/png;base64,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" \
             alt="Tools for Research"></a> \
      </div> \
  </div> \
  ');



  // The index
  $('#index').addClass('index').children().removeClass('container').addClass('index-body');

});
