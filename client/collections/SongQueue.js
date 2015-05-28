// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    // listen to 'add' event from songQueue collection
    this.on('add', this.handleAdd, this);

    // listen to 'ended' event triggered from the songmodel
    this.on('ended', this.handleEnded, this);

    // listen to the 'dequeue' event triggered from songmodel
    this.on('dequeue', this.handleDequeue, this);
  },

  // play the first song in the queue
  playFirst: function() {
    this.at(0).play();
  },

  handleEnded: function(){
    // remove the first song from the songQueue
    this.remove(this.at(0));
    // if there are any more songs in the queue
    if (this.length > 0){
      // execute playfirst
      this.playFirst();
    }
  },

  handleAdd: function(){
    // if there are items in the queue
    if (this.length === 1){
      // execute playfirst
      this.playFirst();
    }
  },

  handleDequeue: function(song){
    // remove the song that broadcasted the 'dequeue' event from the queue

    // If song is the first of songqueue,
    if (this.indexOf(song) === 0){

      if (this.length === 1){
        // if it is only song in the queue, stopPlay which calls songModel stop play and trigger "stopPlay" event.  Remove song from queue/
        song.stopPlay();
        this.remove(song);
      } else {
        // if there are more songs in the queue, remove song from queue and play the new first song.
        this.remove(song);
        this.playFirst();
      }
    } else {
      // if the song is not the first in queue, just remove song from queue.
      this.remove(song);
    }
  },

});


