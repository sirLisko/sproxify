(function(){
	'use strict';
	var button;

	function handleApp(){
		button.className = 'sproxify sproxify-app';
		button.href = 'spotify' + window.location.pathname.replace(/\//g, ':');
		button.innerHTML = 'Play me in Spotify App!';
		var login = document.getElementById('login-features');
		if(login){
			login.appendChild(button);
		} else {
			document.getElementById('notification-area').appendChild(button);
			setTimeout(function(){
				button.parentNode.removeChild(button);
			}, 5000);
		}
	}

	function handleWeb(){
		button.className = 'sproxify sproxify-web';
		button.href = window.location.href.replace('open', 'play');
		button.innerHTML = 'Play me in Spotify Web!';
		document.getElementById('header').firstElementChild.appendChild(button);
	}

	button = document.createElement('a');

	if(window.location.pathname !== '/'){
		if(window.location.hostname === 'open.spotify.com'){
			handleWeb();
		} else {
			handleApp();
		}
	}

})();