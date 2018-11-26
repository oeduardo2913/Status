
var app = {
    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
	},
    onDeviceReady: function() {
        console.log('deviceready');
		var p = document.querySelector('#device p');
		p.innerHTML = device.cordova + '<br/>' +
			device.platform + '<br/>' +
			device.model + '<br/>' +
			device.version + '<br/>' +
			device.manufacturer + '<br/>';
    }
};

app.initialize();