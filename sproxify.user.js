// ==UserScript==
// @name          Sproxify
// @description   Sproxify intercepts Spotify links and let you choose where to play it.
// @author        Luca Lischetti <sirlisko@gmail.com>
// @namespace     http://github.com/sirLisko/sproxify
// @include       http://open.spotify.com/*
// @include       http://play.spotify.com/*
// @include       https://open.spotify.com/*
// @include       https://play.spotify.com/*
// @downloadURL   https://github.com/sirlisko/sproxify/raw/master/sproxify.user.js
// @updateURL     https://github.com/sirlisko/sproxify/raw/master/sproxify.user.js
// @version       0.2.0
// ==/UserScript==

(function(){
	'use strict';

	function createButton() {
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

	function addCss(cssString) {
		var head = document.getElementsByTagName('head')[0];
		var newCss = document.createElement('style');
		newCss.type = 'text/css';
		newCss.innerHTML = cssString;
		head.appendChild(newCss);
	}

	if(window.location.pathname !== '/'){
		addCss ('.sproxify {background-color: #9eca3b;background-image: -webkit-gradient(linear,0 0,0 100%,from(#acd341),to(#88bd32));background-image: -webkit-linear-gradient(top,#acd341,#88bd32);background-image: linear-gradient(top,#acd341,#88bd32);background-repeat: repeat-x;border: 1px solid #7ea613;-webkit-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: inset 0 1px 1px rgba(255,255,255,0.8);box-shadow: inset 0 1px 1px rgba(255,255,255,0.8);display: block !important;color: #FFF;font-family: "HelveticaNeueW02-75Bold","Helvetica Neue",Helvetica,Arial,sans-serif;font-size: 16px;font-weight: normal;padding: 1em 1.5em;position: fixed;right: 30px;text-align: center;text-decoration: none;text-shadow: 0 -1px 0 #72942a;top: 30px;z-index: 1;}.sproxify:hover {background-color: #a1cf3c;background-image: -webkit-gradient(linear,0 0,0 100%,from(#b2db42),to(#88bd32));background-image: -webkit-linear-gradient(top,#b2db42,#88bd32);background-image: linear-gradient(top,#b2db42,#88bd32);background-repeat: repeat-x;border: 1px solid #7ea613;-webkit-box-shadow: inset 0 1px 1px rgba(255,255,255,0.8);box-shadow: inset 0 1px 1px rgba(255,255,255,0.8);text-decoration: none;text-shadow: 0 -1px 0 #72942a;}');
		createButton();
	}

})();
