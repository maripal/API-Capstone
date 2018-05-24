const GOOGLE_GEOCODING_URL = 'https://maps.googleapis.com/maps/api/geocode';
const GEOCODING_API_KEY = 'AIzaSyCURxb9nsZKOIeFoWRCA_rBMbzprn78-u0';

//function to get data from Google Geocoding API
function getGeocodingData () {
	$('.searchButton').on('click', function event() {
		let location = $('#js-location-input').val();
		console.log(location);

		$.ajax(GOOGLE_GEOCODING_URL, {
			data : {
				address: location,
			}
		})
	})
}