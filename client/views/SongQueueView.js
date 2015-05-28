// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  initialize: function() {
    // When a song model is added to or remove from SongQueue collection, call re render:
    this.collection.on("add", this.render, this);
    this.collection.on("remove", this.render, this);
  },



  render: function() {
    // rendering the Queue View and executing based on SongQueueEntryView of each item in songQueue Collection.
    this.$el.children().detach();
    this.$el.html('<th>Song QQQ</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );


  },



});
