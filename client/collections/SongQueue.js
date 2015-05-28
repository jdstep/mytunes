// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      // this.remove(song);
      this.remove(this.at(0));
      if (this.length > 0){
        this.playFirst();
        // this.trigger('playNextSong', this.at(0));
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);

    }, this);
  },


  playFirst: function() {
    this.at(0).play();
  },


});


