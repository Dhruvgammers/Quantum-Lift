function initMap() {
    var location = { lat: 42.9876543, lng: -71.1234567 }; // Replace with your desired latitude and longitude
    var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 14 // Adjust the zoom level as needed
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }