var thisVideo = document.getElementById("myVideo_html5_api");
  document.onkeydown = function(event) {
      switch (event.keyCode) {
         case 37:
              event.preventDefault();
              vid_currentTime = thisVideo.currentTime;
              thisVideo.currentTime = vid_currentTime - 5;
            break;
         
         case 39:
              event.preventDefault();
              vid_currentTime = thisVideo.currentTime;
              thisVideo.currentTime = vid_currentTime + 5;
            break;

         case 32:
         		event.preventDefault();
         		if (thisVideo.paused) {
         			thisVideo.play();
         		} else {
         			thisVideo.pause();
         		}
          break;
          
        case 83:
            event.preventDefault();
            var vid = document.getElementById("myVideo_html5_api");
            vid.playbackRate = 16;
         	break;
         
      }
  };
