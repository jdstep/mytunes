// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    // listen to 'add' event from songQueue collection
    this.on('add', function() {
      // if there are items in the queue
      if (this.length === 1){
        // execute playfirst
        this.playFirst();
      }
    }, this);

    // listen to 'ended' event triggered from the songmodel
    this.on('ended', function() {
      // remove the first song from the songQueue
      this.remove(this.at(0));
      // if there are any more songs in the queue
      if (this.length > 0){
        // execute playfirst
        this.playFirst();
      }
    }, this);

    // listen to the 'dequeue' event triggered from songmodel
    this.on('dequeue', function(song) {
      // remove the song that broadcasted the 'dequeue' event from the queue
      this.remove(song);
    }, this);
  },

  // play the first song in the queue
  playFirst: function() {
    this.at(0).play();
  },


});


