// ==UserScript==
// @name          Sproxify
// @namespace     https://github.com/sirLisko/sproxify
// @description   Sproxify intercepts Spotify links and let you choose where to play it.
// @include       "http://open.spotify.com/*",
// @include       "https://open.spotify.com/*",
// @include       "https://play.spotify.com/*"
// @resource      style style-all.css
// @version       0.1
// ==/UserScript==

(function(){
	'use strict';
	var button;

	function handleApp(){
		button.className = 'sproxify sproxify-app';
		button.href = 'spotify' + window.location.pathname.replace(/\//g, ':');
		button.innerHTML = 'Play me in Spotify App!';
		var login = document.getElementById('login-method');
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

var cssTxt  = GM_getResourceText ("style");
GM_addStyle (cssTxt);