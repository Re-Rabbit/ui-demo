import $ from 'jquery'

$('.addresspicker').on('click', '.field', evt => {
  $(evt.delegateTarget)
    .find('.select-options-container')
    .toggleClass('active')
}).on('click', '.select-option', evt => {
  $(evt.delegateTarget)
    .find('.select-options-container')
    .removeClass('active')
})

$('.datepicker').on('click', '.field', evt => {
  $(evt.delegateTarget)
    .find('.select-options-container')
    .addClass('active')
}).on('click', '.datepicker-header, .datepicker-cell, .button', evt => {
  $(evt.delegateTarget)
    .find('.select-options-container')
    .removeClass('active')
})
 
$('.switch').on('click', evt => {
  $(evt.delegateTarget)
    .toggleClass('active')
})
