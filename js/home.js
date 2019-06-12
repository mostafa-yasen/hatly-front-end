$(function () {
    var btnShopper = $("#btnShopper"),
        btnTraveller = $("#btnTraveller");

        btnShopper.on('click', function () {
            $("#shopperFAQ").css('display', 'block');
            $("#travellerFAQ").css('display', 'none');        
        });


        btnTraveller.on('click', function () {
            $("#travellerFAQ").css('display', 'block');
            $("#shopperFAQ").css('display', 'none');
        });

});