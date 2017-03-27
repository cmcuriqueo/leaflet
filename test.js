		var mymap = L.map('mapid', {
			center: [-43.30063, -65.09897],
    		zoom: 13,
    		tap: true
		});

	    // ruta
	    var antPolyline = new L.Polyline.AntPath(
		    	[
		    		[-43.30441, -65.10408], 
		    		[-43.30213, -65.10112],
		    		[-43.30042, -65.09897],
		    		[-43.30206, -65.09678],
		    		[-43.30368, -65.09471],
		    		[-43.30372, -65.09439],
		    		[-43.30365, -65.09414],
		    		[-43.30352, -65.09396],
		    		[-43.30338, -65.09386],
		    		[-43.30326, -65.09359],
		    		[-43.30314, -65.09301],
		    		[-43.30268, -65.08985]
		    	], {color: 'red', weight: 5}
	    	);
	    
	    antPolyline.addTo(mymap);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY21jdXJpcXVlbyIsImEiOiJjajBuOXMxZXAwMDRzMzNvYTNrcGxuMDJmIn0.HzVad4q_Y82dhBRsvTYPYw', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);
		var marker = L.marker([-43.30063, -65.09897]).addTo(mymap);
		marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
		mymap.on('click', function(ev) {
		    alert(ev.latlng); // ev is an event object (MouseEvent in this case)
		    var marker = L.marker(ev.latlng).addTo(mymap);
		    marker.bindPopup("<b>" + ev.latlng + "</b>");
		});


		/*
	    function onLocationFound(e) {
			L.circle(e.latlng, {radius: 200}).addTo(mymap);
	    }

	    function onLocationError(e) {
	        alert(e.message);
	    }

		
		function locate() {
	    	mymap.locate({setView: true, maxZoom: 14});
	    }
	    */
	    //setInterval(locate, 3000);
	    
	    //        Limite
	    var southWest = L.latLng(-43.34515, -65.17365),
		    northEast = L.latLng(-43.26896, -65.0219),
		    bounds = L.latLngBounds(southWest, northEast);

		mymap.setMaxBounds(bounds); 
		