/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
    $('#section-bio').css('background-color', 'rgb(9, 19, 137)');
    $('#section-bio').css('color', 'white');
    $('#section-bio').css('padding-right', '15px').css('padding-left', '15px');
    $('#section-quotes').css('padding-right', '15px').css('padding-left', '15px');
    $('#section-quotes').css('background-color', '#F64005');
    $('#section-quotes').css('color', '#01013E');
    var $topRated = $('<li>');
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


