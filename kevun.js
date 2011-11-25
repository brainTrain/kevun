$(document).ready( function() {
    var numbah = 0;
    $('#kevun').click( function() {
        if(numbah == 0) {
            numbah = 1;
        } else {
            numbah = 0;
        }

        $(html).css('background').('url(kevun' + numbah + '.jpg) no-repeat center center fixed');

    
    }

});
