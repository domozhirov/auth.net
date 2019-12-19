(function($) {

  $(() => {
    const $popup = $('.purchase-popup-wrapper');
    const $popupHeader = $popup.find('.card-header');
    const $popupTitle = $popup.find('.card-title');
    const popupHeaderMessage = $popupTitle.data('message');
    const $popupClose = $popup.find('.card-header');

    $(document).on('click', '.purchase-btn', function() {
      const $this = $(this);
      const data = $this.data();

      $popupTitle.html(
        popupHeaderMessage
        .replace('%data-packagename%', data.packagename)
        .replace('%data-price%', data.price)
      );

      $popup.show();
    });

    $popupClose.on('click', function(event) {
      event.preventDefault();

      $popup.hide();
    })
  });
})(jQuery);