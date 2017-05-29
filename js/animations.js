$(function() {

  var $tweetCompose = $('.tweet-compose')
  var $charCount = $('#char-count')
  var $tweetcontrols = $('#tweetcontrols')
  var $tweetContent = $('#tweet-content')
  var $tweetSubmit = $('#tweet-submit')


  $tweetCompose.on('keyup', function(event){
    console.log(event.target.value.length)
    var count = 140 - event.target.value.length;
    $charCount.text(count)
  });

$tweetCompose.focus(function(){
$(this).css("height", "8em");
$charCount.css("visibility", "visibility");
$tweetSubmit.css("visibility", "visability");

});

$tweetCompose.blur(function(){
$(this).css("height", "2.5em");
$charCount.css("visibility", "visibility");
$tweetSubmit.css("visibility", "visability");

});


})
