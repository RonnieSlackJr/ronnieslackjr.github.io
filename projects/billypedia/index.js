/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        //CSS STYLE START//
    $('body').css('color' , 'black');
    $('#section-bio').css('background-color', 'linear-gradient(top left, #cf0920, #f8e902)');
    $('#section-bio').css('color', 'white');
    $('#section-bio').css('padding-right', '15px').css('padding-left', '15px');
    $('#section-quotes').css('padding-right', '15px').css('padding-left', '15px');
    $('#section-quotes').css('background-color', '#F64005');
    $('#section-quotes').css('color', '#01013E');
    $('main').css('background' , 'linear-gradient(to top left, #f89b08, #1c6eef');
    $('html').css('background-color' , 'black');
    $('#image-container-billy').css('min-height' , '360px');
    $('#image-container-billy').css('min-width' , '360px');
        //CSS STYLE END//

        //VARIABLES AND STUFF START//
var recordings = data.discography.recordings;        

var count = 0;
$('#image-container-billy').click(function() {
        count++;
          var pic = data.images.billy;
        if (count === 4) count = 0;
          $('#image-billy').fadeOut(0);
          $('#image-billy').attr('src', pic[count]);
          $('#image-billy').fadeIn();
});

function makeList(content){
            var $list = $('<ul>');
            _.forEach(content, function(recording){
                $('<li>').text(recording.title).attr('class', 'title').appendTo($list);
                $('<li>').text(recording.artist).attr('class', 'artist').appendTo($list);
                 $('<li>').text(recording.release).attr('class', 'release').appendTo($list);
                 $('<li>').text(recording.year).attr('class', 'year').appendTo($list);
            });
            return $list;
        }

            //VARIABLES AND STUFF END//


        //EVERYTHING TOP RATED START//
    let topRated = data.discography.topRated;
_.forEach(topRated, function(recording) {
    let $topRated = $('<li>').attr('class', 'list-top-rated').text(recording.title +" - "  + recording.year);
    $topRated.appendTo('#list-top-rated');
    console.log(recording);
});    
    

$('#section-top-rated').prepend($('<img>').attr('src', 'images/album/voice-in-the-night.jpg').attr('id', 'top-rated-img'));
var $recordsSection = $('<section>').addClass('recordings').attr('id', 'recordsSection');
$('#sidebar').append($recordsSection);

$('#list-top-rated li').each(function(i) {
    $(this).attr('id', 'ltr' + (i+1));
});

$('#ltr1').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[0].art);   
          });  

 $('#ltr2').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[1].art);   
          });   
          
$('#ltr3').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[2].art);   
          });   
    
$('#ltr4').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[3].art);   
          });      
        
 $('#ltr5').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[4].art);   
          });
        //EVERYTHING TOP RATED END//

      
        //EVERYTHING GENERAL RECORDINGS START//
$('#recordsSection').prepend($('<img>').attr('src', data.discography.recordings[0].art).attr('id', 'recordings-img'));
    $('#sidebar').append(makeList(recordings));

 $('.artist').css('list-style-position' ,"inside");
        $('.release').css('list-style-position' ,"inside");
        $('.year').css('list-style-position' ,"inside");

     $('.title').each(function(i){
            $(this).attr('id', 'rec'+(i+1));
        });
    
     $( '#rec1').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[0].art);   
          });  
          
        
      $( '#rec2').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[1].art);   
          });   
          
   $( '#rec3').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[2].art);   
          });   
    
     $( '#rec4').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[3].art);   
          });      
        
     $( '#rec5').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[4].art);   
          });
     $( '#rec6').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[5].art);   
          });     
 
    $( '#rec7').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[6].art);   
          });      
   
    $( '#rec8').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[7].art);   
          });
          
    $( '#rec9').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[8].art);   
          });
        
     $( '#rec10').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[9].art);   
          });      
        //EVERYTHING GENERAL RECORDINGS END//
        
        
        
        //TABLE START//


var riderStuff = data.rider;      
var createTable = function(riderStuff){
    var createRow = function(object){
        var $row = $("<tr>");
        var $instrument = $("<td>").text(object.type);
        var $description = $("<td>").text(object.desc);
        $row.append($instrument);
        $row.append($description);
        return $row;
    }
    var $table = $("<table>");
    var $rows = riderStuff.map(createRow);
    $table.append($rows);
    return $table;
};        
createTable(riderStuff).appendTo("#sidebar");        
        //TABLE END//





    














        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


