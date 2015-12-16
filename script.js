  $(document).ready(function() {
    $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id="  + "JLO05W1A52HZ102KB5KDHK2GOPJGICSP1OBHQHDTUKVH0JTK" +
        "&client_secret=" + "ZB4PYWK0LDEZETUOG2EC3FV3VLTLNSYX4HAFWP3FPTMFFI01" +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
            // Callback code goes here. This gets executed after receiving data from the Foursquare API.
        
          console.log(data["response"]["venues"]);
          
        });
        
  });
  