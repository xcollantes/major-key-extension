var videoFrame = document.querySelector(".showKey .showKeyInner");

if (videoFrame == null){
	var div = createElement('div');
	
	document.body.appendChild(div);
	div.className = 'showKey';
	div.style.cssText('position: fixed; bottom: 0px; z-index: 99999; right: 0px; height: 530px; width: 720px; pointer-events: none;');
	div.innerHTML('<div class="showKeyInner" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="960" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>');
	
	var video = document.querySelector(".showKey .showKeyInner");

	video.style.visibility() = "hidden";
	video.src = chrome.extension.getURL("/lib/output.webm");
	video.load();
	
	video.addEventListener('loadeddata', function () {video.style.visibility = "visible"; video.play();};, false);
	
	video.onerror = function () {alert("Error: You played yourself. Load a different page.");};
	
} else {
	video.play();
}