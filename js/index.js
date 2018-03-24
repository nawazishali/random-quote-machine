$(document).ready(function(){
  
  var jsonUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&key=600000&format=jsonp&lang=en&jsonp=?";
  
  var getQuote = function(json){
    var quote = json.quoteText;
    var filteredQuote = quote.replace(";",",");
    $("#quote p").text(quote);
    console.log(json);
    var authorName;
    if (json.quoteAuthor == ""){
      $("#author").text("Unknown");
      authorName = "Unknown";
    } else{
      $("#author").text(json.quoteAuthor);
      authorName = json.quoteAuthor;
    };
    
    var tweetUrl = "https://twitter.com/intent/tweet?text="+'"'+filteredQuote+'"'+" By "+authorName;
    
    
    $("#tweet-btn").attr("href", tweetUrl)
    
  };
  
 
  $.getJSON(jsonUrl, getQuote, 'jsonp');
   
  
  $("#quote-btn").on("click", function(){
     var element = $("blockquote");
     //animateCss("zoomIn", element);
     $.getJSON(jsonUrl, getQuote, 'jsonp');
     animateCss("zoomIn", element);
     
  });
  
  //Animate Function
  
  var animateCss = function (animationName, element) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(element).addClass('animated ' + animationName).one(animationEnd, function() {
            $(element).removeClass('animated ' + animationName);
        });
    }
  
  //Onload Qoute Animation
  
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $("blockquote").addClass('animated ' + "zoomIn").one(animationEnd, function() {
            $("blockquote").removeClass('animated ' + "zoomIn");
        });
  
  
  
});
