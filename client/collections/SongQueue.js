// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      this.remove(song);
      this.playFirst();
    }, this);
  },


  playFirst: function() {

  }


});


