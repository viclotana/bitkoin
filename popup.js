// 1. Listen for a page being loaded
$(document).on('DOMContentLoaded', function() {
    // 2. Once page loaded, listen for a click on the "Get Rate" button
    $('#get-rate-button').on('click', function() {
      // 3. Once clicked, ask API for the conversion rate
      $.ajax({
        url: "https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=NGN&amount=1",
        method: 'get',
        // When the conversion rate comes back
        success: (response) => {
          // 4. Change the button text to the response price rounded to 2 digits and disable the button
          $('.button').text("\u20A6" + response.price.toFixed(2));
          $('.button').attr('disabled', 'disabled');
        }
      });
    });
  });