window.addEventListener('message', function(e) {
  if (e.origin == document.location.origin) {
    groovesharkMenuMessage(e.data);
  }
}, false);

function groovesharkMenuMessage(action)
{
  var player = GS.player;
  switch(action) {
    case "playpause":
      if (player.isPaused) {
        player.resumeSong();
      } else {
        player.pauseSong();
      }
      break;
    case "next":
      player.nextSong()
      break;
    case "previous":
      player.previousSong();
      break;
    case "unvote":
      player.voteSong(0);
      break;
    case "voteup":
      player.voteSong(1);
      break;
    case "votedown":
      player.voteSong(-1);
      break;
    case "mute":
      player.setIsMuted(1);
      break;
    case "unmute":
      player.setIsMuted(0);
  }
}