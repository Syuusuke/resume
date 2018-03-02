// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function () {
    const args = arguments;
    return this.replace(/{(\d+)}/g, (match, number) => (typeof args[number] !== 'undefined'
      ? args[number]
      : match));
  };
}

jQuery(document).ready(($) => {
  $('.left-label').attr('contenteditable', 'true');
  $('.label-value').attr('contenteditable', 'true');
  $('.info-title').attr('contenteditable', 'true');
  $('h3').attr('contenteditable', 'true');
  $('p').attr('contenteditable', 'true');
  $('.right-paragraph p').attr('contenteditable', 'true');
  $('#username').attr('contenteditable', 'true');
  $('#persona-tag').attr('contenteditable', 'true');
  $('.info-unit ul li').append('<span class="item-remove"><i class="iconfont icon-delete"></i></span>');

  $('.info-unit').filter(function (index) {
    return ($(this).children('ul').length);
  }).children('h2').append('<span class="item-add"><i class="iconfont icon-playlistadd"></i></span>');

  $('.info-unit h2').append('<span class="unit-remove"><i class="iconfont icon-delete"></i></span>');


  const portrait_modal = $('[data-remodal-id=portrait-modal]').remodal();
  $('.portrait').click((event) => {
    portrait_modal.open();
  });
  $('[data-remodal-id=portrait-modal] button').click((event) => {
    $('.portrait').css('background-image', 'url("{0}")'.format($('#avatar-url').val()));
  });
  const weixin_modal = $('[data-remodal-id=weixin-modal]').remodal();
  $('.weixin').click((event) => {
    weixin_modal.open();
  });
  $('[data-remodal-id=weixin-modal] button').click((event) => {
    $('.weixin img').attr('src', $('#weixin-url').val());
  });

  $('.info-header').hover(function () {
    /* Stuff to do when the mouse enters the element */
    $(this).children('.unit-remove').css('visibility', 'visible');
    $(this).children('.item-add').css('visibility', 'visible');
  }, function () {
    /* Stuff to do when the mouse leaves the element */
    $(this).children('.unit-remove').css('visibility', 'hidden');
    $(this).children('.item-add').css('visibility', 'hidden');
  });

  $('.info-unit ul li').hover(function () {
    /* Stuff to do when the mouse enters the element */
    $(this).children('.item-remove').css('visibility', 'visible');
  }, function () {
    /* Stuff to do when the mouse leaves the element */
    $(this).children('.item-remove').css('visibility', 'hidden');
  });

  $('.unit-remove').click(function (event) {
    $(this).closest('.info-unit').remove();
  });

  $('.item-remove').click(function (event) {
    $(this).closest('li').remove();
  });

  $('.item-add').click(function (event) {
    const unit = $(this).closest('.info-unit');
    if (unit.children('ul')) {
      const list = unit.children('ul');
      const clone = list.children('li:first-child').clone(true);
      list.append(clone);
    }
  });
  $('progress').click(function (event) {
    $(this).attr('value', event.offsetX / $(this).width() / 0.8 * $(this).attr('max'));
  });
  // $("*").removeAttr('contenteditable');
});
