var dao = function() {

	// private variables
	var KEY_CITIES = 'cities';

	// public methods
	return {

		saveCity: function(cityData) {

			localforage.getItem(KEY_CITIES, function(err, value) {

				if (value) {
					value.push(cityData);
					cityData = value
				} else {
					cityData = [cityData];
				}

				localforage.setItem(KEY_CITIES, cityData).then(function(value) {
					// Do other things once the value has been saved.
					console.log(value);
				}).catch(function(err) {
					// This code runs if there were any errors
					console.log(err);
				});

				console.log(value);

			});

		},

		loadCities: function(callback) {
			localforage.getItem(KEY_CITIES, function(err, value) {
				if (!err && value) {
					callback(null, value);
					return
				}
				callback(err, null);
			});
		},

		clearCities: function() {

			localforage.removeItem(KEY_CITIES).then(function() {
				// Run this code once the key has been removed.
				console.log('Key is cleared!');
			}).catch(function(err) {
				// This code runs if there were any errors
				console.log(err);
			});

		}
	};

}();