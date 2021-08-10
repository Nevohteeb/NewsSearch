var url = 'https://gnews.io/api/v4/top-headlines';



// Get Select input values
var countrySelect = document.getElementById('countrySelect');
var topicSelect = document.getElementById('topicSelect');

var searchBtn = document.getElementById('searchSubmit');
var searchInput = document.getElementById('searchInput');

// API Token Pull
var myKey = JSON.parse(myKey);
var key = myKey[0].key;

getNews('en', 'breaking-news');

$( '#searchSubmit' ).click(function() {
  searchNews(searchInput.value);
});

function filtered () {
  getNews(countrySelect.value, topicSelect.value);
}

function getNews (country, topic) {
  $.ajax({
    url: 'https://gnews.io/api/v4/top-headlines?country='+country+'&topic='+topic+'&lang=en'+key,
    // url: 'https://gnews.io/api/v4/top-headlines?lang='+ langSelect + '&token=de44a717ae7a08f8b53d70dadba11208',
    type : 'GET',
    data : 'json',
    success: function(newsData) {
      document.getElementById('objects').innerHTML = ''; // clear the dom for refresh
      var i;
      for (i=0;i<newsData.articles.length;i++){
        var r = newsData.articles[i];
        console.log(newsData);

        document.getElementById('objects').innerHTML +=
          '<div class="col-lg-4 col-md-6 col-sm-12" > ' +
            '<div class="card mt-3">' +
            '<img src="' + r.image +'" class="card-img-top" alt="news image">' +
              '<div class="card-body">'+
                '<h5 class="card-title fw-bold">'+ r.title +'</h5>'+

                '<p class="card-text fw-light"> '+ r.description + '<br>' + '<br>' + 'Source: ' + '<a class="text-primary" href="'+ r.source.url +'" target="_blank">' + r.source.name + '</a>' + '<br>' + '<br>' + '<a class="text-danger" href="'+ r.url +'" target="_blank">' + 'View full article' + '</a>' + '</p>'+

              '</div>'+
            '</div>'+
          '</div>';
        }
    },

    error : function(){
      console.log('error');
    }

  });
}

function searchNews (search) {
  $.ajax({
    url: 'https://gnews.io/api/v4/search?q='+search+'&lang=en'+key,
    // url: 'https://gnews.io/api/v4/top-headlines?lang='+ langSelect + '&token=de44a717ae7a08f8b53d70dadba11208',
    type : 'GET',
    data : 'json',
    success: function(newsData) {
      document.getElementById('objects').innerHTML = ''; // clear the dom for refresh
      var i;
      for (i=0;i<newsData.articles.length;i++){
        var r = newsData.articles[i];
        console.log(newsData);

        document.getElementById('objects').innerHTML +=
          '<div class="col-lg-4 col-md-6 col-sm-12" > ' +
            '<div class="card mt-3">' +
            '<img src="' + r.image +'" class="card-img-top" alt="news image">' +
              '<div class="card-body">'+
                '<h5 class="card-title fw-bold">'+ r.title +'</h5>'+

                '<p class="card-text fw-light"> '+ r.description + '<br>' + '<br>' + 'Source: ' + '<a class="text-primary" href="'+ r.source.url +'" target="_blank">' + r.source.name + '</a>' + '<br>' + '<br>' + '<a class="text-danger" href="'+ r.url +'" target="_blank">' + 'View full article' + '</a>' + '</p>'+

              '</div>'+
            '</div>'+
          '</div>';
        }
    },

    error : function(){
      console.log('error');
    }

  });
}
