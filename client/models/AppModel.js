// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){

    // Setups up currentSong with empty SongModel and songQueue with empty SongQueue collection.
    this.set('currentSong', new SongModel());

    this.set('songQueue', new SongQueue());

    if (JSON.parse(localStorage.getItem('queueLocal')).length > 0) {
      this.get('songQueue').add(JSON.parse(localStorage.getItem('queueLocal')));
      // this.get('songQueue').playFirst();
    }

    // debugger;

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    this.get('songQueue').on('play', function(song){
      // change currentSong to SongModel that was broadcasted from the 'play' event
      this.set('currentSong', song);
    }, this);


    // In the LibraryView, when a song is clicked, the song broadcasted "enqueue" event:
    params.library.on('enqueue', function(song){
      // retrieve the songQueue collection and add the song broadcasted "enqueue" into it.  Triggers 'remove' event to SongQueue listener
      this.get('songQueue').add(JSON.parse(JSON.stringify(song)));
      localStorage.setItem('queueLocal', JSON.stringify(this.get('songQueue')) );
      // debugger;

    }, this);

    // In the SongQueueView, when a song is click, the song broadcasted "dequeue" event:
    this.get('songQueue').on('dequeue', function(song){
      // On event 'dequeue' from songModel, set localStorage to new Songqueue.  Dequeuing action is taken in SongQueue.js
      localStorage.setItem('queueLocal', JSON.stringify(this.get('songQueue')) );
    }, this);

    this.get('songQueue').on('stopPlay', function(song){
      this.set('currentSong', '');
    }, this);

  }

});
