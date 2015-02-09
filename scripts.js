$(document).ready(function() {

    $('#contact').submit(function() {
        $.ajax({
            dataType: 'jsonp',
            url: "https://getsimpleform.com/messages/ajax?form_api_token=32269d83d5276c352765af573f447344",
            data: $('#contact').serialize()
        }).done(function() {
            $('#submit').fadeOut();
            $('.success').fadeIn();
        });
        return false;
    })

    /* $('.portfolio-items [class*="col-"]').click(function() {

        if ($(this).hasClass('clicked')) {

            // Get first element current position
            // Note: getBoundingClientRect() is used because it is more accurate
            // when it comes to decimals than .width()
            var first = $('.portfolio-items [class*="col-"]:first-child').position();
            first.width = $('.portfolio-items [class*="col-"]:first-child')[0].getBoundingClientRect().width;

            // Current element index
            var index = $('.portfolio-items [class*="col-"]').index(this);

            $(this).removeClass('clicked');

            // Animate to home position
            $(this).animate({
                left: first.left + (first.width * index)
            }, 500, function() {
                // Remove absolute positioning
                $(this).css({
                    position: '',
                    left: '',
                    width: '',
                    opacity: ''
                });

                $('#portfolio').css({
                    paddingBottom: ''
                })
            });

            // Show other portfolio objects
            $('.portfolio-items [class*="col-"]').not(this).animate({
                opacity: 1
            }, 500, function() {

                // Remove absolute positioning
                $(this).css({
                    position: '',
                    left: '',
                    width: '',
                    opacity: ''
                });

            });

        } else {

            // Element is now clicked
            $(this).addClass('clicked');

            // First element home values
            var first = $('.portfolio-items [class*="col-"]:first-child').position();

            // Bump everything below down by the current height
            $('#portfolio').css({
                paddingBottom: $('#portfolio').height() + parseInt($('#portfolio').css('paddingBottom'))
            })

            $('.portfolio-items [class*="col-"]').each(function(item) {
                // Current element home values
                // Note: getBoundingClientRect() is used because it is more accurate
                // when it comes to decimals than .width()
                var current = $(this).position();
                current.width = $(this)[0].getBoundingClientRect().width;

                // Current element index
                var index = $('.portfolio-items [class*="col-"]').index(this);

                // Make it position absolute
                $(this).css({
                    position: 'absolute',
                    left: first.left + (current.width * index),
                    width: current.width
                });
            })

            // Hide other portfolio objects
            $('.portfolio-items [class*="col-"]').not(this).animate({
                opacity: 0
            }, 350);

            // Animate it to full left position
            $(this).animate({
                left: first.left
            }, 500);
        }

    }) */

})
