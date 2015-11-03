(function(){
	'use strict';

	if(window.location.pathname !== '/'){
		var button = document.createElement('a');
		button.className = 'sproxify';

		if(window.location.hostname === 'open.spotify.com'){
			button.href = window.location.href.replace('open', 'play');
			button.innerHTML = 'Play me in Spotify Web!';
		} else {
			button.href = 'spotify' + window.location.pathname.replace(/\//g, ':');
			button.innerHTML = 'Play me in Spotify App!';
		}

		document.body.appendChild(button);
		setTimeout(function(){
			button.parentNode.removeChild(button);
		}, 5000);
	}

})();
