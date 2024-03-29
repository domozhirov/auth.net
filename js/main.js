(function($) {
  $(() => {
    const $popup = $('.purchase-popup-wrapper');
    const $popupHeader = $popup.find('.popup-card-header');
    const $popupTitle = $popup.find('.popup-card-title');
    const popupHeaderMessage = $popupTitle.data('message');
    const $popupClose = $popup.find('.popup-card-header');

    $(document).on('click', '.purchase-btn', function() {
      const $this = $(this);
      const data = $this.data();

      $popupTitle.html(
        popupHeaderMessage
        .replace('%data-packagename%', data.packagename)
        .replace('%data-price%', data.price)
      );

      $popup.find('[name="packagename"]').val(data.packagename);
      $popup.find('[name="price"]').val(data.price);
      $popup.show();
    });

    $popupClose.on('click', function(event) {
      event.preventDefault();

      $popup.hide();
    });

    const $popupAlert = $('.popup-alert');

    $(document).on('click', '.popup-alert-header button, .popup-alert-footer button', function() {
      $popupAlert.hide();
    });
  });
})(jQuery);